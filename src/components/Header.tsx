import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isWishlistPage = location.pathname === '/wishlist';

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20 gap-4 sm:gap-0">
      <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Anime Explorer</h1>
      <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-end">
        <button
          onClick={() => navigate(isWishlistPage ? '/' : '/wishlist')}
          className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-medium text-sm sm:text-base w-full sm:w-auto"
        >
          {isWishlistPage ? 'Back to Home' : 'View Wishlist'}
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 sm:p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 transform hover:scale-105"
        >
          {theme === 'dark' ? <SunIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" /> : <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />}
        </button>
      </div>
    </div>
  );
};