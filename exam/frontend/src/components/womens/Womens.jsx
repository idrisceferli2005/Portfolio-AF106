import React from 'react'
import styles from './Womens.module.css'

const Womens = () => {
  return (
    <div className='container'>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp" alt="" />
                <h2 className={styles.text}>Women's</h2>
            </div>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg.webp" alt="" />
                <h2 className={styles.text}> accessories's</h2>
            </div>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg.webp" alt="" />
                <h2 className={styles.text}>men's</h2>
            </div>
        </div>

    </div>
  )
}

export default Womens