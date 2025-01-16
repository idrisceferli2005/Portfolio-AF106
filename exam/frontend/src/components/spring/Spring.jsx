import React from 'react'
import styles from './Spring.module.css'


const Spring = () => {
  return (
    <div className={styles.container}>
        <div className={styles.springs}>
     <div className={styles.spring}>
        <span>Spring / Summer Collection 2017</span>
        <h2 className={styles.get}>Get up to 30% Off <br /> New Arrivals</h2>
        <button className='btn btn-danger'>Shop Now</button>
     </div>
     </div>
    </div>
  )
}

export default Spring