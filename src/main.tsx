import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'
import { ThemeProvider } from './context/ThemeContext'
import { WishlistProvider } from './context/WishlistContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </ThemeProvider>
  </StrictMode>,
)
