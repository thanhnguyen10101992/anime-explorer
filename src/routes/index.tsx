import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { AnimeDetailPage } from '../pages/AnimeDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:type/:id',
    element: <AnimeDetailPage />,
  },
]);