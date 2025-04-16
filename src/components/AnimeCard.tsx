import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import { AnimeData } from '../types/anime';
import { useWishlist } from '../context/WishlistContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface AnimeCardProps {
  anime: AnimeData;
  onClick?: () => void;
}

export const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  // const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(anime.mal_id);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '100px',
        threshold: 0
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(anime.mal_id);
    } else {
      addToWishlist(anime);
    }
  };
  const urlParts = anime.url ? anime.url.split('/').filter(part => part !== '') : [];
  return (
    <div
      onClick={() => window.open(`/${urlParts[2]?.toLowerCase()}/${anime.mal_id}`, '_blank')}
      className="bg-gray-800/95 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:ring-2 hover:ring-purple-500/50 cursor-pointer"
    >
      <div className="relative aspect-[3/4]">
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse ${isLoaded ? 'hidden' : 'block'}`} />
        <img
          ref={imageRef}
          src={isInView ? anime.images.jpg.image_url : undefined}
          alt={anime.title}
          className={`w-full h-full object-cover transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 w-full p-5 space-y-3 transform transition-transform duration-300">
            <h3 className="text-white font-bold text-lg leading-snug line-clamp-2 hover:text-purple-300 transition-colors duration-200">{anime.title}</h3>
            <div className="flex items-center justify-between text-sm text-gray-200 font-medium">
              <span className="bg-gray-800/90 px-3 py-1.5 rounded-full backdrop-blur-sm border border-gray-700/50 shadow-sm">{anime.type}</span>
              <span className="bg-gray-800/90 px-3 py-1.5 rounded-full backdrop-blur-sm border border-gray-700/50 shadow-sm">{anime.episodes ? `${anime.episodes} eps` : 'N/A'}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleWishlistClick}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-gray-900/70 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300 transform hover:scale-110 hover:rotate-12 group shadow-lg focus:outline-none focus:ring-0 active:outline-none active:ring-0 active:shadow-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus:ring-0"
        >
          {inWishlist ? (
            <HeartSolidIcon className="w-6 h-6 text-red-500 drop-shadow-glow animate-heartbeat" />
          ) : (
            <HeartIcon className="w-6 h-6 text-white group-hover:text-red-400 transition-colors duration-300" />
          )}
        </button>
      </div>
    </div>
  );
};