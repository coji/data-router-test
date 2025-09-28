import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Toaster } from '~/components/ui/sonner'
import './index.css'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors closeButton />
    <RouterProvider router={router} />
  </StrictMode>,
)
