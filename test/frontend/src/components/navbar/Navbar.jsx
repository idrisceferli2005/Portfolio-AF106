import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='container'>
        <div className={styles.nav}>
            <div className={styles.logo}>
                <h1>ESTORE.</h1>
            </div>
            <div className={styles.rightnav}>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/catagori'>Categori</Link></li>
               <li><Link to='/latest'>Latest</Link></li>
               <li><Link to='/blog'>Blog</Link></li>
               <li><Link to='/pages'>Pages</Link></li>
               <li><Link to='/contact'>Contact</Link></li>
             <Link to='/wishlist'>  <FaBasketShopping /></Link>


               
            </div>
        </div>

    </div>
  )
}

export default Navbar