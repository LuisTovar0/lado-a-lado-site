import { startPodcastSync } from '$lib/server/podcast';

// Arranque do backend: carrega os episódios do podcast para memória e agenda
// as atualizações periódicas da lista.
startPodcastSync();
