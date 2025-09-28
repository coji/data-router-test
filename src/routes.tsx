import { createMemoryRouter } from 'react-router'
import App, { loader } from './routes/_index/route.tsx'
import Layout from './routes/_layout.tsx'
import Form, { action } from './routes/form/route.tsx'

export const router = createMemoryRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        loader,
        Component: App,
      },
      {
        path: '/form',
        Component: Form,
        action,
      },
    ],
  },
])
