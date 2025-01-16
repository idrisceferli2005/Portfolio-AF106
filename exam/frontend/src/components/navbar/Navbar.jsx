import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className='container'>
<div className={styles.nav}>
  <div className={styles.navleft}>
    <h1>Coloshop</h1>
  </div>
  <div className={styles.navright}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/Shop'>Shop</Link></li>
    <li><Link to='/Promotion'>Promotion</Link></li>
    <li><Link to='/Pages'>Pages</Link></li>
    <li><Link to='/Blog'>Blog</Link></li>
    <li><Link to='/Contact'>Contact</Link></li>
    <li><Link to='/Admin'>Admin</Link></li>
  </div>
</div>
    </div>
  )
}

export default Navbar