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
  { key: 'todos', label: 'Todos' },
  { key: 'conferencias', label: 'Eventos' },
  { key: 'campos', label: 'Campos' },
  { key: 'cursos', label: 'Cursos' },
  { key: 'podcast', label: 'Podcast' },
] as const;

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
    cat: 'campos', title: 'À procura do autêntico', meta: 'Agosto 2026 · Teologia do corpo', status: 'brevemente',
    cta: 'Avisa-me',
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
    cat: 'conferencias', title: 'Feitos para amar', meta: 'Setembro 2026 · Lisboa · 2ª edição', status: 'brevemente',
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
  { cat: 'podcast', title: 'Escolhi amar-te', meta: 'com Alexandra Chumbo', status: 'ouvir', cta: 'Ouvir' },
  {
    cat: 'podcast', title: 'A escolha de um namoro casto. Como?', meta: 'com Mafalda e Vasco Almeida Ribeiro',
    status: 'ouvir', cta: 'Ouvir',
  },
  { cat: 'podcast', title: 'A altura certa para casar', meta: 'com Isabel e Rúben', status: 'ouvir', cta: 'Ouvir' },
  { cat: 'podcast', title: 'As etapas do amor', meta: 'com Jéssica e Manuel Varão', status: 'ouvir', cta: 'Ouvir' },
  { cat: 'podcast', title: 'Casar vs viver juntos', meta: 'com Sónia e João', status: 'ouvir', cta: 'Ouvir' },
  { cat: 'podcast', title: 'Educar no amor', meta: 'com Manuela e Tiago Miranda', status: 'ouvir', cta: 'Ouvir' },
  {
    cat: 'podcast', title: 'Família: um plano a dois', meta: 'com Madalena e João Maia', status: 'ouvir', cta: 'Ouvir',
  },
  { cat: 'podcast', title: 'As cinco linguagens do amor', meta: 'com Maria e Aires', status: 'ouvir', cta: 'Ouvir' },
  { cat: 'podcast', title: 'Confiança na família', meta: 'com Teresa e Niall Power', status: 'ouvir', cta: 'Ouvir' },
  {
    cat: 'podcast', title: 'A importância do diálogo no namoro', meta: 'com Teresa e Manuel Santos', status: 'ouvir',
    cta: 'Ouvir',
  },
  { cat: 'podcast', title: 'Crises: o que fazer?', meta: 'com Carlota e Miguel Urbano', status: 'ouvir', cta: 'Ouvir' },
  { cat: 'podcast', title: 'Sacrifícios no Namoro', meta: 'com Catarina e Diogo', status: 'ouvir', cta: 'Ouvir' },
] as const;

export function getFilteredItems(filter: string) {
  return DATA
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
