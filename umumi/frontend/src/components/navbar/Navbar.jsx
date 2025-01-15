import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navleft}>
          <h2>Selling</h2>
        </div>
        <div className={styles.navright}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="product">Products</Link>
          </li>
          <li>
            <Link to="about">About us</Link>
          </li>
          <li>
            <Link to="special">Special</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
