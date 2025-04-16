import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { AnimeDetailPage } from '../pages/AnimeDetailPage';
import { WishlistPage } from '../components/WishlistPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/wishlist',
    element: <WishlistPage />,
  },
  {
    path: '/:type/:id',
    element: <AnimeDetailPage />,
  },
]);