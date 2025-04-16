import React, { createContext, useContext, useState, useEffect } from 'react';
import { AnimeData } from '../types/anime';

interface WishlistContextType {
  animeWishlist: AnimeData[];
  mangaWishlist: AnimeData[];
  addToWishlist: (item: AnimeData) => void;
  removeFromWishlist: (itemId: number) => void;
  isInWishlist: (itemId: number) => boolean;
  removeAllFromWishlist: () => void;
  removeAllFromAnimeWishlist: () => void;
  removeAllFromMangaWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animeWishlist, setAnimeWishlist] = useState<AnimeData[]>(() => {
    const savedAnimeWishlist = localStorage.getItem('anime-wishlist');
    return savedAnimeWishlist ? JSON.parse(savedAnimeWishlist) : [];
  });

  const [mangaWishlist, setMangaWishlist] = useState<AnimeData[]>(() => {
    const savedMangaWishlist = localStorage.getItem('manga-wishlist');
    return savedMangaWishlist ? JSON.parse(savedMangaWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('anime-wishlist', JSON.stringify(animeWishlist));
  }, [animeWishlist]);

  useEffect(() => {
    localStorage.setItem('manga-wishlist', JSON.stringify(mangaWishlist));
  }, [mangaWishlist]);

  const addToWishlist = (item: AnimeData) => {
    if (!isInWishlist(item.mal_id)) {
      const urlParts = item.url ? item.url.split('/').filter(part => part !== '') : [];
      if (urlParts[2] === 'manga') {
        setMangaWishlist([...mangaWishlist, item]);
      } else {
        setAnimeWishlist([...animeWishlist, item]);
      }
    }
  };

  const removeFromWishlist = (itemId: number) => {
    setAnimeWishlist(animeWishlist.filter((item) => item.mal_id !== itemId));
    setMangaWishlist(mangaWishlist.filter((item) => item.mal_id !== itemId));
  };

  const removeAllFromWishlist = () => {
    setAnimeWishlist([]);
    setMangaWishlist([]);
  };

  const removeAllFromAnimeWishlist = () => {
    setAnimeWishlist([]);
  };

  const removeAllFromMangaWishlist = () => {
    setMangaWishlist([]);
  };

  const isInWishlist = (itemId: number) => {
    return animeWishlist.some((item) => item.mal_id === itemId) ||
           mangaWishlist.some((item) => item.mal_id === itemId);
  };

  return (
    <WishlistContext.Provider
      value={{
        animeWishlist,
        mangaWishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        removeAllFromWishlist,
        removeAllFromAnimeWishlist,
        removeAllFromMangaWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};