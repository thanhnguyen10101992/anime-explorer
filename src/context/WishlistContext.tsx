import React, { createContext, useContext, useState, useEffect } from 'react';
import { AnimeData } from '../types/anime';

interface WishlistContextType {
  wishlist: AnimeData[];
  addToWishlist: (anime: AnimeData) => void;
  removeFromWishlist: (animeId: number) => void;
  isInWishlist: (animeId: number) => boolean;
  removeAllFromWishlist: () => void;
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
  const [wishlist, setWishlist] = useState<AnimeData[]>(() => {
    const savedWishlist = localStorage.getItem('anime-wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('anime-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (anime: AnimeData) => {
    if (!isInWishlist(anime.mal_id)) {
      setWishlist([...wishlist, anime]);
    }
  };

  const removeFromWishlist = (animeId: number) => {
    setWishlist(wishlist.filter((item) => item.mal_id !== animeId));
  };

  const removeAllFromWishlist = () => {
    setWishlist([]);
  };

  const isInWishlist = (animeId: number) => {
    return wishlist.some((item) => item.mal_id === animeId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        removeAllFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};