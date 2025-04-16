import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { AnimeCard } from './components/AnimeCard';
import { AnimeDetail } from './components/AnimeDetail';
import { WishlistPage } from './components/WishlistPage';
import { useTheme } from './context/ThemeContext';
import { AnimeData, AnimeFilters, Pagination } from './types/anime';
import { searchAnime, getTopAnime } from './services/api';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function App() {
  const [animeList, setAnimeList] = useState<AnimeData[]>([]);
  const [filters, setFilters] = useState<AnimeFilters>({ mediaType: 'anime' });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnime, setSelectedAnime] = useState<AnimeData | null>(null);
  const [currentPage, setCurrentPage] = useState<'search' | 'wishlist'>('search');
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      try {
        if (searchTerm) {
          const response = await searchAnime(searchTerm, { ...filters, page });
          setAnimeList(response?.data || []);
          setPagination(response?.pagination || null);
        } else {
          const response = await getTopAnime(page, filters);
          setAnimeList(response?.data || []);
          setPagination(response?.pagination || null);
        }
      } catch (error) {
        console.error('Error fetching anime:', error);
        setAnimeList([]);
        setPagination(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [searchTerm, filters, page]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleFilterChange = (newFilters: AnimeFilters) => {
    if (newFilters.isReset) {
      setFilters({ mediaType: 'anime' });
      setSearchTerm('');
      setPage(1);
    } else {
      setFilters(newFilters);
      setPage(1);
    }
  };

  const handleAnimeClick = (anime: AnimeData) => {
    setSelectedAnime(anime);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleCloseDetail = () => {
    setSelectedAnime(null);
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Anime Explorer</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage(currentPage === 'search' ? 'wishlist' : 'search')}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-medium"
            >
              {currentPage === 'search' ? 'View Wishlist' : 'Back to Search'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 transform hover:scale-105"
            >
              {theme === 'dark' ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-600" />}
            </button>
          </div>
        </div>

        {currentPage === 'search' ? (
          <div className="space-y-6">
            <div className="flex gap-6 min-h-[calc(100vh-12rem)]">
              <FilterBar filters={filters} onFilterChange={handleFilterChange} />
              <div className="flex-1">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 mb-6 rounded-2xl">
                  <SearchBar onSearch={handleSearch} onReset={() => handleFilterChange({ isReset: true })} />
                </div>

                {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {animeList.map((anime) => (
                  <div key={anime.mal_id}>
                    <AnimeCard anime={anime} />
                  </div>
                ))}
                  </div>
                )}

                {pagination && pagination.last_visible_page > 1 && animeList.length > 0 && (
                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        className={`px-4 py-2 rounded-md transition-colors duration-200 ${page === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'} text-gray-300`}
                      >
                        Previous
                      </button>
                      {(() => {
                        const visiblePages = [];
                        const lastPage = pagination.last_visible_page;

                        // Always show first page
                        visiblePages.push(1);

                        // Calculate middle pages
                        const startPage = Math.max(2, page - 1);
                        const endPage = Math.min(lastPage - 2, page + 1);

                        // Add ellipsis after first page if needed
                        if (startPage > 2) {
                          visiblePages.push('...');
                        }

                        // Add middle pages
                        for (let i = startPage; i <= endPage; i++) {
                          visiblePages.push(i);
                        }

                        // Add ellipsis before last two pages if needed
                        if (endPage < lastPage - 2) {
                          visiblePages.push('...');
                        }

                        // Always show last two pages
                        if (lastPage - 1 > endPage) {
                          visiblePages.push(lastPage - 1);
                        }
                        if (lastPage > endPage) {
                          visiblePages.push(lastPage);
                        }

                        return visiblePages.map((pageNumber, index) => {
                          if (pageNumber === '...') {
                            return (
                              <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-300">
                                {pageNumber}
                              </span>
                            );
                          }
                          return (
                            <button
                              key={pageNumber}
                              onClick={() => handlePageChange(Number(pageNumber))}
                              className={`px-4 py-2 rounded-md transition-colors duration-200 ${page === pageNumber ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
                            >
                              {pageNumber}
                            </button>
                          );
                        });
                      })()} 
                      <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page >= pagination.last_visible_page}
                        className={`px-4 py-2 rounded-md transition-colors duration-200 ${page >= pagination.last_visible_page ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'} text-gray-300`}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <WishlistPage onAnimeClick={handleAnimeClick} />
        )}


      </div>
    </div>
  );
}

export default App;
