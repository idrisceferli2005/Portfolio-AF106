import React from 'react'
import styles from './Winter.module.css'

const Winter = () => {
  return (
    <div className={styles.container}>
        <div className={styles.winter}>
            <div className={styles.leftimage}>
                <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp" alt="" />
                </div>
            <div className={styles.wintertitle}>
                <p>60% Discount</p>
                <h2>Winter Collection</h2>
                <span>Best Cloth Collection By 2020!</span>
               <div>  <button className='btn btn-primary'>Shop now</button></div>
            </div>
         
            
        </div>
    </div>
  )
}

export default Winter