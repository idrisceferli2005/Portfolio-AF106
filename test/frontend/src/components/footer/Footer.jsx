import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container '>
      <div className='row mt-5'>
        <div className='col-3'>
          <div className={styles.estoreleft}>
            <h4>Left</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore</p>
          </div>
        </div>
        <div className='col-3'>
          <div className={styles.estorelefted}>
            <h4>Quick Links</h4>
            <li>About</li>
            <li>Offers & Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </div>
        </div>
        <div className='col-3'>
          <div className={styles.estorerighted}>
            <h4>New Products</h4>
            <li>Woman Cloth</li>
            <li>Fashion Accessories</li>
            <li>Man Accessories</li>
            <li>Rubber made Toys</li>
          </div>
        </div>
        <div className='col-3'>
          <div className={styles.estoreright}>
            <h4>Support</h4>
            <li>Frequently Asked Questions</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Privacy Policy</li>
            <li>Report a Payment Issue</li>
          </div>
        </div>
      </div>

      <div className={styles.finishs}>
        <div className={styles.finish}>
          <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
        </div>
        <div className={styles.end}>
        <FaFacebook />
        <FaTwitter />
        <FaWhatsapp />
        <FaBehanceSquare />
        </div>
      </div>
    </div>
  )
}

export default Footer