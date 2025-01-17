import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className='container'>
        <div className={styles.all}>
<h2>Shop by Category</h2>
<div className={styles.banners}>
    <div className={styles.banner}>
        <img className={styles.bannerimage} src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp" alt="" />
        <div className={styles.text}> Owmens</div>
    </div>
    <div className={styles.banner}>
    <img className={styles.bannerimage} src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg.webp" alt="" />
    <div className={styles.text}> Owmens</div>
    </div>
    <div className={styles.banner}>
    <img className={styles.bannerimage} src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg.webp" alt="" />
    <div className={styles.text}> Owmens</div>
    </div>
</div>
</div>

    </div>
  )
}

export default Banner