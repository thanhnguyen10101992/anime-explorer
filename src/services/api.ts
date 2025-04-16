import axios from 'axios';
import { AnimeResponse, AnimeFilters } from '../types/anime';

const API_BASE_URL = 'https://api.jikan.moe/v4';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const searchAnime = async (query: string, filters?: AnimeFilters): Promise<AnimeResponse> => {
  const params: Record<string, any> = {
    q: query,
    limit: 24,
  };

  if (filters) {
    if (filters.type) params.type = filters.type.toLowerCase();
    if (filters.status) params.status = filters.status.toLowerCase();
    if (filters.rating) params.rating = filters.rating.toLowerCase();
    if (filters.page) params.page = filters.page;
    if (filters.limit) params.limit = filters.limit;
    if (filters.genres) params.genres = filters.genres.join(',');
  }

  try {
    const response = await api.get<AnimeResponse>('/anime', { params });
    return response.data;
  } catch (error) {
    console.error('Error searching anime:', error);
    throw error;
  }
};

export const getAnimeById = async (id: number): Promise<AnimeResponse> => {
  try {
    const response = await api.get<AnimeResponse>(`/anime/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime details:', error);
    throw error;
  }
};

export const getTopAnime = async (page: number = 1, filters?: AnimeFilters): Promise<AnimeResponse> => {
  const params: Record<string, any> = {
    page,
    limit: 24,
    order_by: 'score',
    sort: 'desc'
  };

  if (filters) {
    if (filters.type) params.type = filters.type.toLowerCase();
    if (filters.status) params.status = filters.status.toLowerCase();
    if (filters.rating) params.rating = filters.rating.toLowerCase();
  }

  try {
    const response = await api.get<AnimeResponse>('/anime', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching top anime:', error);
    throw error;
  }
};

export const getAnimeGenres = async (): Promise<any> => {
  try {
    const response = await api.get('/genres/anime');
    return response.data;
  } catch (error) {
    console.error('Error fetching anime genres:', error);
    throw error;
  }
};