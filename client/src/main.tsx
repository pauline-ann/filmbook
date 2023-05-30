import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './components/ErrorPage.tsx'
import Post from './routes/post.tsx'
import Home from './routes/home.tsx'
import Layout from './components/Layout.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: `username/:postId`,
        element: <Post />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
