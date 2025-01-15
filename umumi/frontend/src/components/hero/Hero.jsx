import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
       <div className={styles.shop}>
              <h2 className={styles.with}>Shop With Us</h2>
              <p className={styles.lorem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam{" "}
                <br /> assumenda ea quo cupiditate facere deleniti fuga officia.
              </p>
       <div className={styles.heroes}>
       <button className="btn btn-outline-light"> Shop now</button>
       <button className="btn btn-light">Club membership</button>
       </div>
            </div>
    </div>
  )
}

export default Hero
