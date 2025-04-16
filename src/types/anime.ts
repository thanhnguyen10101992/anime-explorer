export interface AnimeResponse {
  data: AnimeData[];
  pagination: Pagination;
}

export type AnimeType = 'TV' | 'Movie' | 'OVA' | 'Special' | 'ONA';
export type AnimeStatus = 'airing' | 'completed' | 'upcoming';
export type AnimeRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  isReset?: boolean;
}

export interface AnimeData {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  duration: string;
  rating: string;
  score: number;
  synopsis: string;
  year: number;
  genres: {
    mal_id: number;
    type: string;
    name: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
  }[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}

export interface AnimeFilters {
  type?: AnimeType;
  status?: AnimeStatus;
  rating?: AnimeRating;
  genres?: number[];
  page?: number;
  limit?: number;
  isReset?: boolean;
}