export const parceiros = [
  [ '/img/main/ucp.svg', 'Universidade Católica Portuguesa' ],
  [ '/img/main/fertility-care.svg', 'FertilityCare' ],
  [ '/img/main/vale-estevao.svg', 'Vale & Estêvão' ],
  [ '/img/main/aese.svg', 'AESE Business School' ],
  [ '/img/main/fundação-beatriz.svg', 'Fundação Beatriz Santos' ],
  [ '/img/main/fundação-MJ.png', 'Fundação MJ' ],
] as const;

export const urls = [
  'https://www.instagram.com/p/C56qvfXrgOt/',
  'https://www.instagram.com/p/DS5yxuPAHYZ',
  'https://www.instagram.com/p/DRArNGgDj6Z/',
  'https://www.instagram.com/p/DNodamaM1Ha/',
  'https://www.instagram.com/p/DNl0_GxgAIX/',
  'https://www.instagram.com/p/DNjEyhYAeYg/',
  'https://www.instagram.com/p/DNgrMfogjSK/',
  'https://www.instagram.com/p/DMsQFS9s0Tj/',
] as const;

export const FILTERS = [
  { key: 'destaques', label: 'Destaques' },
  { key: 'todos', label: 'Tudo' },
  { key: 'conferencias', label: 'Eventos' },
  { key: 'campos', label: 'Campos' },
  { key: 'cursos', label: 'Cursos' },
  { key: 'podcast', label: 'Podcast' },
] as const;

const FEATURED_LIMIT = 6;
const FEATURED_STATUS_ORDER = {
  aberta: 0,
  brevemente: 1,
  ouvir: 2,
  passada: 3,
} as const;

export const TYPE: Record<string, { label: string; tone: 'red' | 'yellow' | 'outline' }> = {
  conferencias: { label: 'Evento', tone: 'red' },
  campos: { label: 'Campo', tone: 'outline' },
  cursos: { label: 'Curso', tone: 'yellow' },
  podcast: { label: 'Podcast', tone: 'outline' },
};

export const STATUS: Record<string, { label: string; tone: 'red' | 'yellow' | 'outline' }> = {
  ouvir: { label: 'Disponível', tone: 'outline' },
  passada: { label: 'Já aconteceu', tone: 'outline' },
  brevemente: { label: 'Inscrições brevemente', tone: 'yellow' },
  aberta: { label: 'Inscrições abertas', tone: 'red' },
};

export const DATA = [
  {
    cat: 'campos', title: 'À procura do autêntico', meta: 'Agosto 2026 · Teologia do corpo', status: 'passada',
    cta: 'Ver registo',
  },
  {
    cat: 'campos', title: 'À procura do autêntico', meta: 'Agosto 2025 · Mogofores', status: 'passada',
    cta: 'Ver registo',
  },
  {
    cat: 'campos', title: 'À procura do autêntico', meta: 'Agosto 2024 · Ponte de Lima · 1ª edição', status: 'passada',
    cta: 'Ver registo',
  },
  {
    cat: 'conferencias', title: 'Feitos para amar', meta: '2026 · Lisboa · 2ª edição', status: 'brevemente',
    cta: 'Avisa-me',
  },
  {
    cat: 'conferencias', title: 'Atreve-te a amar', meta: 'Mar–Abr 2026 · Coimbra · ciclo de sessões',
    status: 'passada', cta: 'Ver registo',
  },
  {
    cat: 'conferencias', title: 'Feitos para amar', meta: 'Abril 2024 · Lisboa · 1ª edição', status: 'passada',
    cta: 'Ver registo',
  },
  { cat: 'conferencias', title: 'Ciclo de sessões', meta: '2024 · Aveiro', status: 'passada', cta: 'Ver registo' },
  {
    cat: 'cursos', title: 'Congresso Internacional Theology of the Body', meta: '16–18 Outubro · Fátima',
    status: 'aberta', cta: 'Inscrever-me', href: 'https://tobportugal.carrd.co',
  },
  { cat: 'cursos', title: 'Teologia do corpo', meta: 'Set/Out 2026 · Lisboa', status: 'brevemente', cta: 'Avisa-me' },
  {
    cat: 'cursos', title: 'Teologia do corpo', meta: '2025 · Basílica da Estrela, Lisboa', status: 'passada',
    cta: 'Ver registo',
  },
] as const;

export type PodcastItem = {
  cat: 'podcast';
  title: string;
  meta: string;
  status: 'ouvir';
  cta: string;
  href: string;
};

// Snapshot dos episódios do podcast no Spotify
// (https://open.spotify.com/show/79y8yNDSivKHovVU28g4oI). É o valor inicial
// (e fallback) da lista em memória mantida pelo backend em $lib/server.
export const PODCAST_SNAPSHOT: readonly PodcastItem[] = [
  {
    cat: 'podcast', title: 'Escolhi amar-te', meta: 'com Alexandra Chumbo', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/1J2piB55GRygXnvXczLkNZ',
  },
  {
    cat: 'podcast', title: 'A escolha de um namoro casto. Como?', meta: 'com Mafalda e Vasco Almeida Ribeiro',
    status: 'ouvir', cta: 'Ouvir', href: 'https://open.spotify.com/episode/5PbokuhTeGoJqfAxfKFVF1',
  },
  {
    cat: 'podcast', title: 'A altura certa para casar', meta: 'com Isabel e Rúben', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/1AZ2j7ErxwcrgC5hHBWCNP',
  },
  {
    cat: 'podcast', title: 'As etapas do amor', meta: 'com Jéssica e Manuel Varão', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/7nExdZEnJ84UL66MpdrZKi',
  },
  {
    cat: 'podcast', title: 'Casar vs viver juntos', meta: 'com Sónia e João', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/0bqPxxLEDwPtr5lnV0XgxF',
  },
  {
    cat: 'podcast', title: 'Educar no amor', meta: 'com Manuela e Tiago Miranda', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/7ueDS1wj1tPBbndTgw5NzK',
  },
  {
    cat: 'podcast', title: 'Família: um plano a dois', meta: 'com Madalena e João Maia', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/6rGWQQ9NWUElZ6aWJ3Gudo',
  },
  {
    cat: 'podcast', title: 'As cinco linguagens do amor', meta: 'com Maria e Aires', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/1tG2uuwVZSCDwl46VefWJI',
  },
  {
    cat: 'podcast', title: 'Confiança na família', meta: 'com Teresa e Niall Power', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/1ztFsorvdg7qhTVquDZpvw',
  },
  {
    cat: 'podcast', title: 'A importância do diálogo no namoro', meta: 'com Teresa e Manuel Santos', status: 'ouvir',
    cta: 'Ouvir', href: 'https://open.spotify.com/episode/6oKnkupgUjabkVk6btymaG',
  },
  {
    cat: 'podcast', title: 'Crises: o que fazer?', meta: 'com Carlota e Miguel Urbano', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/31L9SBUl2TCQelVWyaptes',
  },
  {
    cat: 'podcast', title: 'Sacrifícios no Namoro', meta: 'com Catarina e Diogo', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/2g6YzwsUgLhAywbh2V7cNj',
  },
  {
    cat: 'podcast', title: 'Namoro e Vida Social', meta: 'com Ana e Paulo Maia', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/5RwQlMksJEZpNXXH1lcVOJ',
  },
  {
    cat: 'podcast', title: 'Trabalho vs. Família', meta: 'com Cecília e João Pedro', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/4YzhrDzaoN78NrIafQck9a',
  },
  {
    cat: 'podcast', title: 'Vida pessoal no Casamento', meta: 'com Cláudia e Fernando Costa Duarte', status: 'ouvir',
    cta: 'Ouvir', href: 'https://open.spotify.com/episode/7uPMJDTck2SZiNJ6toNEmw',
  },
  {
    cat: 'podcast', title: 'Razão vs. Sentimentos', meta: 'com Mariana e Frederico Portugal', status: 'ouvir',
    cta: 'Ouvir', href: 'https://open.spotify.com/episode/75XmzD9TMw22buOtbq3nQ9',
  },
  {
    cat: 'podcast', title: 'Semelhanças e diferenças', meta: 'com Dita e Francisco Cabral', status: 'ouvir',
    cta: 'Ouvir', href: 'https://open.spotify.com/episode/2eJpGf49FlX8H20kHxXgBF',
  },
  {
    cat: 'podcast', title: 'Desafios no namoro', meta: 'com Catarina e Domício Neto', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/2ahnF7sEtYPBR9AyZZuz9o',
  },
  {
    cat: 'podcast', title: 'Família: uma escola de amor', meta: 'com Inês e Francisco Vilhena da Cunha',
    status: 'ouvir',
    cta: 'Ouvir', href: 'https://open.spotify.com/episode/0eTu8mccAsj7YBpvsxX7up',
  },
  {
    cat: 'podcast', title: 'Um Sim para a vida toda', meta: 'com Fátima e Henrique Fonseca', status: 'ouvir',
    cta: 'Ouvir', href: 'https://open.spotify.com/episode/0E3gvsP2jHRZIGpRZChFhP',
  },
  {
    cat: 'podcast', title: 'Crises no namoro', meta: 'com Joana e Luís Silva', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/5B5NMsLv4ZJveN2tBrTVHd',
  },
  {
    cat: 'podcast', title: 'Namoro à distância', meta: 'com Francisca e José Queirós', status: 'ouvir', cta: 'Ouvir',
    href: 'https://open.spotify.com/episode/6hbd6lz4uJvE7iX52Q4LbY',
  },
  {
    cat: 'podcast', title: 'O sentido do namoro', meta: 'com Beatriz e Bernardo Brochado', status: 'ouvir',
    cta: 'Ouvir', href: 'https://open.spotify.com/episode/71om1ZBfwWR3NeI6UJW1R7',
  },
];

export function getFilteredItems(filter: string, podcastItems: readonly PodcastItem[] = PODCAST_SNAPSHOT) {
  return [ ...DATA, ...podcastItems ]
      .filter((d) => filter === 'todos' || d.cat === filter)
      .map((d) => {
        const t = TYPE[d.cat];
        const s = STATUS[d.status];
        const isPast = d.status === 'passada';
        return {
          typeLabel: t.label,
          typeTone: t.tone,
          statusLabel: s.label,
          statusTone: s.tone,
          title: d.title,
          meta: d.meta,
          ctaLabel: d.cta,
          ctaDisabled: false,
          showCta: !isPast,
          href: 'href' in d ? d.href : undefined,
        };
      });
}

export function getFeaturedItems(podcastItems: readonly PodcastItem[] = PODCAST_SNAPSHOT) {
  return [ ...DATA, ...podcastItems ]
      .sort((a, b) => FEATURED_STATUS_ORDER[a.status] - FEATURED_STATUS_ORDER[b.status])
      .slice(0, FEATURED_LIMIT)
      .map((d) => {
        const t = TYPE[d.cat];
        const s = STATUS[d.status];
        const isPast = d.status === 'passada';
        return {
          typeLabel: t.label,
          typeTone: t.tone,
          statusLabel: s.label,
          statusTone: s.tone,
          title: d.title,
          meta: d.meta,
          ctaLabel: d.cta,
          ctaDisabled: false,
          showCta: !isPast,
          href: 'href' in d ? d.href : undefined,
        };
      });
}
