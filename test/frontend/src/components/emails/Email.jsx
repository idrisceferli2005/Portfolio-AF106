import React from 'react'
import styles from './Email.module.css'

const Email = () => {
  return (
    <div className='container mt-5'>
        <div className={styles.photos}>
        <div className={styles.emails}>
            <div className={styles.email}>
                <h2>Get Our <br />
                Latest Offers News</h2>
                <p>Subscribe news latter</p>
            </div>
            <div className={styles.emailInput}>
                <input type="text"  placeholder='Your email here'/>
                <button className='btn btn-primary'>Shop Now</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Email