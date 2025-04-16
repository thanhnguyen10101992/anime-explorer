import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimeData } from '../types/anime';
import { useWishlist } from '../context/WishlistContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Header } from '../components/Header';
import axios from 'axios';

export const AnimeDetailPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  const [anime, setAnime] = useState<AnimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();


  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        // Map the type parameter to the correct API endpoint format
        const apiType = type === 'anime' ? 'anime' : 'manga';
        // console.log('ss',apiType)
        if (!apiType) {
          throw new Error('Invalid media type');
        }
        const response = await axios.get(`https://api.jikan.moe/v4/${apiType}/${id}/full`);
        setAnime(response.data.data);
        setError(null);
      } catch (err) {
        setError('Failed to load anime details');
        console.error('Error fetching anime details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (type && id) {
      fetchAnimeDetails();
    }
  }, [type, id]);

  const handleWishlistClick = () => {
    if (!anime) return;
    
    if (isInWishlist(anime.mal_id)) {
      removeFromWishlist(anime.mal_id);
    } else {
      addToWishlist(anime);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !anime) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{error || 'Anime not found'}</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const inWishlist = isInWishlist(anime.mal_id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-6">
        <Header />
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
          <div className="sticky top-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 border-b border-gray-200/50 dark:border-gray-700/50 flex justify-between items-center z-10">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="p-3 rounded-full bg-gray-800/90 hover:bg-gray-700/90 transition-all duration-200 text-gray-200 hover:text-white transform hover:scale-105 hover:-rotate-12"
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                  {anime.title}
              </h2>
            </div>
            <button
              onClick={handleWishlistClick}
              className="p-3 rounded-full bg-gray-800/90 hover:bg-gray-700/90 transition-all duration-200 text-gray-200 hover:text-white transform hover:scale-105 hover:rotate-12"
            >
              {inWishlist ? (
                <HeartSolidIcon className="w-7 h-7 text-pink-500 drop-shadow-glow animate-heartbeat" />
              ) : (
                <HeartIcon className="w-7 h-7 text-white hover:text-pink-400 transition-colors duration-200" />
              )}
            </button>
          </div>

          <div className="p-8 space-y-10">
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full md:w-96 rounded-2xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
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
    </div>
  );
};