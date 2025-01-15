import React from 'react'
import styles from './Leadership.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Leadership = () => {
  return (
    <div>
        <div className={styles.team}>
        <span>Team</span>
        <h2>Leadership</h2>
        </div>
     
      <div className={styles.persons}>
        <div className={styles.person}>
            <div className={styles.image}>
                <img className={styles.men} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
            </div>
            <div className={styles.info}>
                <h4>John Rooster</h4>
                <span>Co-Founder, President</span>
                <p>Nisi at consequatur unde molestiae quidem <br /> provident voluptatum deleniti quo iste error eos <br /> est praesentium distinctio cupiditate tempore <br /> suscipit inventore deserunt tenetur.</p>
                <div>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
                </div>
            </div>
        </div>
        <div className={styles.person}>
            <div className={styles.image}>
                <img  className={styles.men} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
            </div>
            <div className={styles.info}>
                <h4>John Rooster</h4>
                <span>Co-Founder, President</span>
                <p>Nisi at consequatur unde molestiae quidem <br /> provident voluptatum deleniti quo iste error eos <br /> est praesentium distinctio cupiditate tempore <br /> suscipit inventore deserunt tenetur.</p>
                <div className={styles.social}>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
                </div>
            </div>
        </div>
        <div className={styles.person}>
            <div className={styles.image}>
                <img className={styles.men} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
            </div>
            <div className={styles.info}>
                <h4>John Rooster</h4>
                <span>Co-Founder, President</span>
                <p>Nisi at consequatur unde molestiae quidem <br /> provident voluptatum deleniti quo iste error eos <br /> est praesentium distinctio cupiditate tempore <br /> suscipit inventore deserunt tenetur.</p>
                <div>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Leadership
