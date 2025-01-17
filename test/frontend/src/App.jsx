
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Catagori from './pages/Catagori'
import Latest from './pages/Latest'
import Blog from './pages/Blog'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Wishlist from './pages/wishlist/Wishlist'

function App() {
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/catagori',
          element: <Catagori />,
        },
        {
          path: '/latest',
          element: <Latest />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/Pages',
          element: <Pages />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/wishlist',
          element: <Wishlist />,
        },
      ]

    }
  ]
)

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
