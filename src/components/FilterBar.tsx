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
    <div className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg transition-colors duration-200 flex flex-col">
      <div className="space-y-4 md:space-y-6 overflow-y-auto pb-2 pr-1">
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Media Type</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {mediaTypes.map((mediaType) => (
              <label key={mediaType} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
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
                  className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300 capitalize">{mediaType}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Type</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {currentTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                <input
                  type="checkbox"
                  checked={filters.type === type}
                  onChange={() => onFilterChange({ ...filters, type: filters.type === type ? undefined : type })}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Status</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {currentStatus.map((status) => (
              <label key={status} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                <input
                  type="checkbox"
                  checked={filters.status === status}
                  onChange={() => onFilterChange({ ...filters, status: filters.status === status ? undefined : status })}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {filters.mediaType !== 'manga' && (
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Rating</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
              {ratings.map((rating) => (
                <label key={rating} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                  <input
                    type="checkbox"
                    checked={filters.rating === rating}
                    onChange={() => onFilterChange({ ...filters, rating: filters.rating === rating ? undefined : rating })}
                    className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{rating}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <button
        onClick={() => onFilterChange({ isReset: true })}
        className="w-full mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-sm"
      >
        Reset Filters
      </button>
    </div>
  );
};