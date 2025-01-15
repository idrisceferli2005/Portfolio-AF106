
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './components/pages/home/Home'
import Products from './components/pages/products/Products'
import About from './components/pages/about/About'
import Special from './components/pages/special/Special'
import Blog from './components/pages/blog/Blog'
import Contact from './components/pages/contact/Contact'


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
          path: '/product',
          element: < Products/>,

        },
        {
          path: '/about',
          element: <About />,

        },
        {
          path: '/special',
          element: <Special />,

        },
        {
          path: '/blog',
          element: <Blog />,

        },
        {
          path: '/contact',
          element: <Contact />,

        }
      ]
    }
  ]
)
function App() {

  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}

export default App
