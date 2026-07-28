import { getPodcastItems } from '$lib/server/podcast';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
  return { podcastItems: getPodcastItems() };
};
