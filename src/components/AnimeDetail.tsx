import React from 'react';
import { AnimeData } from '../types/anime';
import { useWishlist } from '../context/WishlistContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface AnimeDetailProps {
  anime: AnimeData;
  onClose: () => void;
}

export const AnimeDetail: React.FC<AnimeDetailProps> = ({ anime, onClose }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(anime.mal_id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(anime.mal_id);
    } else {
      addToWishlist(anime);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 animate-slideUp border border-white/20 dark:border-gray-700/20">
        <div className="sticky top-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 border-b border-gray-200/50 dark:border-gray-700/50 flex justify-between items-center z-10">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
            <a
              href={`https://myanimelist.net/${anime.type.toLowerCase()}/${anime.mal_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              {anime.title}
            </a>
          </h2>
          <div className="flex gap-4">
            <button
              onClick={handleWishlistClick}
              className="p-3 rounded-full bg-gray-800/90 hover:bg-gray-700/90 transition-all duration-200 text-gray-200 hover:text-white transform hover:scale-105 hover:rotate-12 focus:outline-none focus:ring-0 active:outline-none active:ring-0 active:shadow-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
            >
              {inWishlist ? (
                <HeartSolidIcon className="w-7 h-7 text-pink-500 drop-shadow-glow animate-heartbeat" />
              ) : (
                <HeartIcon className="w-7 h-7 text-white hover:text-pink-400 transition-colors duration-200" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-gray-800/90 hover:bg-gray-700/90 transition-all duration-200 text-gray-200 hover:text-white transform hover:scale-105 hover:rotate-90 focus:outline-none focus:ring-0 active:outline-none active:ring-0 active:shadow-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-8 space-y-10">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="w-full md:w-80 rounded-2xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <div className="space-y-6 flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Type</h3>
                  <p className="mt-2 text-lg font-semibold">{anime.type}</p>
                </div>
                <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{anime.type === 'Manga' ? 'Chapters' : 'Episodes'}</h3>
                  <p className="mt-2 text-lg font-semibold">{anime.episodes || 'N/A'}</p>
                </div>
                <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</h3>
                  <p className="mt-2 text-lg font-semibold">{anime.status}</p>
                </div>
                <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Score</h3>
                  <p className="mt-2 text-lg font-semibold flex items-center">
                    <span className="text-yellow-500 mr-2">★</span>
                    {anime.score?.toFixed(2) || 'N/A'}
                  </p>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{anime.type === 'Manga' ? 'Publishers' : 'Studios'}</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.studios && anime.studios.length > 0 ? (
                    anime.studios.map((studio) => (
                      <span
                        key={studio.mal_id}
                        className="px-3 py-1.5 bg-white/70 dark:bg-gray-600/70 rounded-full text-sm font-medium shadow-sm transition-colors duration-200 hover:bg-white dark:hover:bg-gray-600"
                      >
                        {studio.name}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">No information available</span>
                  )}
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre) => (
                    <span
                      key={genre.mal_id}
                      className="px-3 py-1.5 bg-indigo-100/70 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm transition-colors duration-200 hover:bg-indigo-200/70 dark:hover:bg-indigo-800/70"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Synopsis</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{anime.synopsis}</p>
          </div>

          {anime.trailer && anime.trailer.embed_url && (
            <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Trailer</h3>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={anime.trailer.embed_url}
                  title={`${anime.title} trailer`}
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};