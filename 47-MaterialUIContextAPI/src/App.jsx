import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/navbar/Navbar';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Products from './components/products/Products';
import Pricing from './components/pricing/Pricing';

const App = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
      <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};
export default App;
