import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { AnimeCard } from './components/AnimeCard';
import { Header } from './components/Header';
import { WishlistPage } from './components/WishlistPage';
import { AnimeData, AnimeFilters, Pagination } from './types/anime';
import { searchAnime, getTopAnime } from './services/api';

function App() {
  const [animeList, setAnimeList] = useState<AnimeData[]>([]);
  const [filters, setFilters] = useState<AnimeFilters>({ mediaType: 'anime' });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage] = useState<'search' | 'wishlist'>('search');
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

  // const handleAnimeClick = (anime: AnimeData) => {
  //   setSelectedAnime(anime);
  // };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <Header />
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
                ) : animeList.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                    <svg className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">No results found</p>
                    <p className="text-gray-500 dark:text-gray-500 mt-2">Try adjusting your search or filters</p>
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
          <div>
            <WishlistPage />
          </div>
        )}


      </div>
    </div>
  );
}

export default App;
