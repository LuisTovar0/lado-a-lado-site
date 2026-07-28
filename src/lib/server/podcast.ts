import { PODCAST_SNAPSHOT, type PodcastItem } from '../../routes/page.data';

const SHOW_ID = '79y8yNDSivKHovVU28g4oI';
const EMBED_URL = `https://open.spotify.com/embed/show/${ SHOW_ID }`;
const PATHFINDER_URL = 'https://api-partner.spotify.com/pathfinder/v1/query';
const EPISODES_QUERY_HASH = '06046f9b939d56c8eb7cdbb687da938de1164c006871aec91dc26e4dc7d8eb08';
const REFRESH_INTERVAL_MS = 60 * 60 * 1000; // 1 hora
const REQUEST_TIMEOUT_MS = 12_000;
const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 750;

// Lista em memória: começa no snapshot estático e é substituída pelos dados
// do Spotify assim que a primeira atualização bem-sucedida acontece.
let items: readonly PodcastItem[] = PODCAST_SNAPSHOT;
let started = false;
let refreshInFlight: Promise<void> | undefined;

export function getPodcastItems(): readonly PodcastItem[] {
  startPodcastSync(); // garante arranque mesmo sem hooks (ex.: dev, outros adapters)
  return items;
}

// Chamado no arranque do backend (hooks.server.ts): carrega os episódios para
// memória e fica a "ouvir" atualizações. O Spotify não tem webhooks para
// episódios novos, por isso voltamos a consultar a lista periodicamente.
export function startPodcastSync(): void {
  if (started) return;
  started = true;
  void refresh();
  const timer = setInterval(() => void refresh(), REFRESH_INTERVAL_MS);
  (timer as unknown as { unref?: () => void }).unref?.();
}

async function refresh(): Promise<void> {
  if (refreshInFlight) return refreshInFlight;

  refreshInFlight = updateItems();
  try {
    await refreshInFlight;
  } finally {
    refreshInFlight = undefined;
  }
}

async function updateItems(): Promise<void> {
  try {
    const fresh = await fetchEpisodes();
    if (fresh.length === 0) return;
    const changed = fresh.length !== items.length
        || fresh.some((f, i) => f.href !== items[i]?.href || f.title !== items[i]?.title);
    items = fresh;
    if (changed) console.log(`[podcast] lista atualizada em memória (${ fresh.length } episódios)`);
  } catch (err) {
    console.warn('[podcast] falha ao atualizar; a manter a lista anterior', err);
  }
}

type PathfinderResponse = {
  data?: {
    podcastUnionV2?: {
      episodesV2?: {
        items?: { entity?: { _uri?: string; data?: { name?: string } } }[];
      };
    };
  };
};

async function fetchEpisodes(): Promise<PodcastItem[]> {
  const token = await getAnonymousToken();
  const res = await fetchSpotify(PATHFINDER_URL, {
    method: 'POST',
    headers: { authorization: `Bearer ${ token }`, 'content-type': 'application/json' },
    body: JSON.stringify({
      variables: { uri: `spotify:show:${ SHOW_ID }`, offset: 0, limit: 100 },
      operationName: 'queryPodcastEpisodes',
      extensions: { persistedQuery: { version: 1, sha256Hash: EPISODES_QUERY_HASH } },
    }),
  }, 'pathfinder');
  const json = (await res.json()) as PathfinderResponse;
  const edges = json.data?.podcastUnionV2?.episodesV2?.items ?? [];
  return edges
      .map((edge) => {
        const id = (edge.entity?._uri ?? '').split(':').pop() ?? '';
        const { title, meta } = parseEpisodeName(edge.entity?.data?.name ?? '');
        return {
          cat: 'podcast' as const,
          title,
          meta,
          status: 'ouvir' as const,
          cta: 'Ouvir',
          href: `https://open.spotify.com/episode/${ id }`,
        };
      })
      .filter((p) => p.title !== '' && p.title.toLowerCase() !== 'piloto'
          && p.href !== 'https://open.spotify.com/episode/');
}

// O embed público do Spotify traz um token anónimo no HTML que autoriza
// consultas GraphQL (pathfinder) à lista de episódios do show.
async function getAnonymousToken(): Promise<string> {
  const res = await fetchSpotify(EMBED_URL, undefined, 'embed');
  const html = await res.text();
  const match = html.match(/"accessToken":"([^"]+)"/);
  if (!match) throw new Error('token não encontrado no embed');
  return match[1];
}

async function fetchSpotify(url: string, init: RequestInit | undefined, source: string): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    let res: Response;
    try {
      res = await fetchWithTimeout(url, init);
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) await delay(RETRY_DELAY_MS * attempt);
      continue;
    }

    if (res.ok) return res;

    const error = new Error(`${ source } respondeu ${ res.status }`);
    if (res.status < 500 && res.status !== 429) throw error;
    lastError = error;

    if (attempt < MAX_ATTEMPTS) await delay(RETRY_DELAY_MS * attempt);
  }

  const detail = lastError instanceof Error ? lastError.message : String(lastError);
  throw new Error(`${ source } indispon\u00edvel ap\u00f3s ${ MAX_ATTEMPTS } tentativas: ${ detail }`);
}

async function fetchWithTimeout(url: string, init?: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// "EE#1 Escolhi amar-te, com Alexandra Chumbo" -> { title: 'Escolhi amar-te', meta: 'com Alexandra Chumbo' }
function parseEpisodeName(raw: string): { title: string; meta: string } {
  const name = raw.replace(/^(?:EE|CONF)#\d+\s+/i, '').trim();
  const byComma = name.match(/^(.*?),\s*com\s+(.+)$/i) ?? name.match(/^(.*?)\s+com\s+(.+)$/i);
  if (!byComma) return { title: name, meta: '' };
  return { title: byComma[1].trim(), meta: `com ${ byComma[2].trim() }` };
}
