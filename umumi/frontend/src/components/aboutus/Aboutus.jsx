import React from 'react'
import styles from './Aboutus.module.css'

const Aboutus = () => {
  return (
    <div className={styles.container}>
          <div className={styles.about}>
        <div className={styles.imag}>
          <img className={styles.photo}
            src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
            alt=""
          />
          <div className={styles.trusted}>
          <p className={styles.trustedtext}>Trusted Merchant <br /> for 50 years</p>
         
          </div>
        </div>
        <div className={styles.abouttext}>
          <span className={styles.merchant}>Merchant Company</span>
          <h2 className={styles.us}>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Qui <br /> fuga
            ipsa, repellat blanditiis nihil, <br /> consectetur. Consequuntur eum <br />
            inventore, rem maxime, nisi  <br /> excepturi ipsam libero ratione <br /> adipisci
            alias eius vero vel!
          </p>
          <button className='btn btn-outline-dark'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
