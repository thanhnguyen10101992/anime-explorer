import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { AnimeCard } from './AnimeCard';
import { AnimeDetail } from './AnimeDetail';
import { useState } from 'react';
import { AnimeData } from '../types/anime';

interface WishlistPageProps {
  onAnimeClick: (anime: AnimeData) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({ onAnimeClick }) => {
  const { wishlist, removeAllFromWishlist } = useWishlist();
  const [selectedAnime, setSelectedAnime] = useState<AnimeData | null>(null);

  const handleCloseDetail = () => {
    setSelectedAnime(null);
  };

  const handleRemoveAll = () => {
    if (window.confirm('Are you sure you want to remove all anime from your wishlist?')) {
      removeAllFromWishlist();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-display tracking-wide">My Wishlist</h1>
          {wishlist.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="group relative px-6 py-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl font-medium flex items-center gap-3 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-400/20 before:via-transparent before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 focus:outline-none focus:ring-2 focus:ring-red-500/50 active:scale-[0.98]"
            >
              <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove All
            </button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm max-w-lg mx-auto transform hover:scale-105 transition-all duration-300 hover:border-purple-500/30">
            <svg className="mx-auto h-16 w-16 text-purple-500 dark:text-purple-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-800 dark:text-gray-200">Your wishlist is empty</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-sm mx-auto">Start exploring and add your favorite anime to create your perfect watchlist!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
            {wishlist.map((anime) => (
              <div key={`wishlist-${anime.mal_id}`} className="transform transition-all duration-300 hover:translate-y-[-4px] hover:scale-[1.02]">
                <AnimeCard
                  anime={anime}
                  onClick={() => onAnimeClick(anime)}
                />
              </div>
            ))}
          </div>
        )}

        {selectedAnime && (
          <AnimeDetail
            anime={selectedAnime}
            onClose={handleCloseDetail}
          />
        )}
      </div>
    </div>
  );
};