import { AnimeResponse, AnimeFilters } from '../types/anime';

const BASE_URL = 'https://api.jikan.moe/v4';

export const searchAnime = async (query: string, { mediaType = 'anime', page = 1, ...filters }: AnimeFilters & { page?: number }) => {
  const params = new URLSearchParams({
    q: query,
    page: page.toString(),
    limit: '24',
    ...Object.entries(filters).reduce((acc, [key, value]) => {
      if (!value) return acc;
      // if (key === 'status') {
      //   if (mediaType === 'anime') {
      //     return { ...acc, status: value === 'airing' ? 'airing' : value === 'complete' ? 'complete' : 'upcoming' };
      //   } else if (mediaType === 'manga') {
      //     return { ...acc, status: value === 'publishing' ? 'publishing' : value === 'complete' ? 'complete' : 
      //            value === 'hiatus' ? 'hiatus' : value === 'discontinued' ? 'discontinued' : 'upcoming' };
      //   }
      // }
      return { ...acc, [key]: value };
    }, {})
  });

  const endpoint = mediaType === 'manga' ? 'manga' : 'anime';
  const response = await fetch(`${BASE_URL}/${endpoint}?${params}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json() as Promise<AnimeResponse>;
};

export const getTopAnime = async (page: number = 1, { mediaType = 'anime', ...filters }: AnimeFilters) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: '24',
    ...Object.entries(filters).reduce((acc, [key, value]) => {
      if (!value) return acc;
      // if (key === 'status') {
      //   if (mediaType === 'anime') {
      //     const status = value === 'airing' ? 'airing' : value === 'complete' ? 'complete' : 'upcoming';
      //     return { ...acc, status };
      //   } else if (mediaType === 'manga') {
      //     const status = value === 'publishing' ? 'publishing' : value === 'complete' ? 'complete' : 
      //                value === 'hiatus' ? 'hiatus' : value === 'discontinued' ? 'discontinued' : 'upcoming';
      //     return { ...acc, status };
      //   }
      // }
      return { ...acc, [key]: value };
    }, {})
  });

  const endpoint = mediaType === 'manga' ? 'manga' : 'anime';
  const url = `${BASE_URL}/${endpoint}?${params}`;
  console.log(url)
  const response = await fetch(`${BASE_URL}/${endpoint}?${params}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json() as Promise<AnimeResponse>;
};

export const getAnimeById = async (id: number, mediaType: 'anime' | 'manga' = 'anime'): Promise<AnimeResponse> => {
  const endpoint = mediaType === 'manga' ? 'manga' : 'anime';
  const response = await fetch(`${BASE_URL}/${endpoint}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json() as Promise<AnimeResponse>;
};

export const getAnimeGenres = async (): Promise<AnimeResponse> => {
  const response = await fetch(`${BASE_URL}/genres/anime`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json() as Promise<AnimeResponse>;
};