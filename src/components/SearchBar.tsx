import React, { useState, useCallback, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import debounce from 'lodash/debounce';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onReset: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 500),
    [onSearch]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    debouncedSearch(query);
  };

  useEffect(() => {
    const handleFilterReset = () => {
      setSearchTerm('');
    };

    window.addEventListener('filterReset', handleFilterReset);
    return () => window.removeEventListener('filterReset', handleFilterReset);
  }, []);

  return (
    <div className="relative w-[60%] mx-auto">
      <div className="relative group">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for anime..."
            className="w-full px-4 py-3 pl-10 pr-4 text-gray-900 dark:text-white bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 rounded-2xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 group-hover:bg-gray-50 dark:group-hover:bg-gray-800/80"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500 group-hover:text-purple-400 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};