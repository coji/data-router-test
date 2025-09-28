import { createHashRouter } from 'react-router'
import App, { loader } from './routes/_index/route.tsx'
import Form from './routes/form/route.tsx'

export const router = createHashRouter([
  {
    path: '/',
    loader,
    Component: App,
  },
  {
    path: '/form',
    Component: Form,
  },
])
