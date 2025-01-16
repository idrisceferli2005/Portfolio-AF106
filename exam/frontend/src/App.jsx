import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'
import Promotion from './components/pages/Promotion'
import Pages from './components/pages/Pages'
import Blog from './components/pages/Blog'
import AdminPanel from './components/pages/admin/AdminPanel'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/shop',
          element: <Shop/>
        },
        {
          path: '/promotion',
          element: <Promotion/>
        },
        {
          path: '/pages',
          element: <Pages/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/admin',
          element: <AdminPanel/>
        }
      ]
    }
  ])
  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}

export default App
