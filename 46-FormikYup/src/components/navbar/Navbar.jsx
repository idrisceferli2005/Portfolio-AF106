import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    toast.success("Uğurla çıxış etdiniz!");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="about">
        <Link to="./About">About</Link>
        <Link to="./Contact">Contact</Link>
        <Link to="./Home">Home</Link>
      </div>
      <div className="menu">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <button onClick={handleLogout}>Exit</button>
      </div>
    </nav>
  );
};

export default Navbar;
