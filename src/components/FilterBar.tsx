import React from 'react';
import { AnimeFilters, AnimeType, AnimeStatus, AnimeRating, MediaType, MangaType, MangaStatus } from '../types/anime';

interface FilterBarProps {
  filters: AnimeFilters;
  onFilterChange: (filters: AnimeFilters) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  const animeTypes: AnimeType[] = ['TV', 'Movie', 'OVA', 'Special', 'ONA'];
  const mangaTypes: MangaType[] = ['Manga', 'Novel', 'LightNovel', 'Oneshot', 'Doujin', 'Manhwa', 'Manhua'];
  const animeStatus: AnimeStatus[] = ['airing', 'complete', 'upcoming'];
  const mangaStatus: MangaStatus[] = ['publishing', 'complete', 'hiatus', 'discontinued', 'upcoming'];
  const ratings: AnimeRating[] = ['g', 'pg', 'pg13', 'r17', 'r', 'rx'];
  const mediaTypes: MediaType[] = ['anime', 'manga'];

  const currentTypes = filters.mediaType === 'manga' ? mangaTypes : animeTypes;
  const currentStatus = filters.mediaType === 'manga' ? mangaStatus : animeStatus;

  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200 h-full flex flex-col">
      <div className="space-y-6 flex-1">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Media Type</h3>
          <div className="space-y-2">
            {mediaTypes.map((mediaType) => (
              <label key={mediaType} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.mediaType === mediaType}
                  onChange={() => onFilterChange({ 
                    ...filters, 
                    mediaType: filters.mediaType === mediaType ? undefined : mediaType,
                    type: undefined,
                    status: undefined,
                    rating: mediaType === 'manga' ? undefined : filters.rating
                  })}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300 capitalize">{mediaType}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Type</h3>
          <div className="space-y-2">
            {currentTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.type === type}
                  onChange={() => onFilterChange({ ...filters, type: filters.type === type ? undefined : type })}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Status</h3>
          <div className="space-y-2">
            {currentStatus.map((status) => (
              <label key={status} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.status === status}
                  onChange={() => onFilterChange({ ...filters, status: filters.status === status ? undefined : status })}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {filters.mediaType !== 'manga' && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Rating</h3>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.rating === rating}
                    onChange={() => onFilterChange({ ...filters, rating: filters.rating === rating ? undefined : rating })}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{rating}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <button
        onClick={() => {
          onFilterChange({ isReset: true });
          window.dispatchEvent(new Event('filterReset'));
        }}
        className="mt-6 w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Reset Filters
      </button>
    </div>
  );
};