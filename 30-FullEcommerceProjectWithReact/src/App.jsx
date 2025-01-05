import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/auth/login/Login";
import Register from "./components/pages/auth/register/Register";
import Wishlist from "./components/pages/wishlist/Wishlist";
import Basket from "./components/pages/basket/Basket";
import ProductDeteil from "./components/pages/productdetail/ProductDeteil";
import AdminPanel from "./components/pages/admin/AdminPanel";
import About from "./components/pages/admin/home/About";
import UserPanel from "./components/pages/users/UserPanel";
import NotFoundPage from "./components/pages/auth/notfound/NotFoundPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/wishlist",
        element: <Wishlist/>
      },
      {
        path: "/basket",
        element: <Basket/>
      },
      {
        path: "/productdetail/:id",
        element: <ProductDeteil/>
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      {
        path: "/user",
        element: <UserPanel />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;