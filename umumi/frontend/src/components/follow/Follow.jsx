import React from 'react'
import styles from './Follow.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Follow = () => {
  return (
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-md-3'>
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Neque <br /> facere laudantium magnam <br /> voluptatum autem. Amet aliquid <br /> nesciunt veritatis aliquam.</p>
            </div>
            <div className='col-md-3'>
                <h3>Quick Links</h3>
                <li>About us</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
            </div>
            <div className='col-md-3'>
                <h3>Follow us</h3>
                         <div>
                                <FaFacebook />
                                <FaTwitter />
                                <FaLinkedin />
                                <FaInstagram />
                                </div>
            </div>
            <div className='col-md-3'>
                       <div className={styles.card}>
                              <div className={styles.image}>
                                <img className={styles.kind}
                                  src="https://preview.colorlib.com/theme/selling/images/model_2_bg.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className={styles.cardtext}>
                                <h4>Wild West Hoodie</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing.
                                </p>
                                <button className="btn btn-outline-dark">Cart</button>
                                <button className="btn btn-light">View</button>
                              </div>
                            </div>
            </div>
        </div>
    </div>
  )
}

export default Follow
