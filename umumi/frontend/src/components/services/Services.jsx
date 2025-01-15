import React from 'react'
import styles from './Services.module.css'
import { DiApple } from "react-icons/di";


const Services = () => {
  return (
    <div className='container'>
       <div className={styles.service}>
       <span>Our Services</span>
       <h3>We Offer Services</h3>
       </div>
        <div className='row'>
            <div className='col-md-4'>
                <div className={styles.icons}>
                <div className={styles.icon}>
                <DiApple className={styles.apple}/>
                </div>
                <div className={styles.ico}>
                    <h4>Business Consulting</h4>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                    <button className='btn btn-warning'>Learn more</button>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className={styles.icons}>
                <div className={styles.icon}>
                <DiApple className={styles.apple}/>
                </div>
                <div className={styles.ico}>
                    <h4>Business Consulting</h4>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                    <button className='btn btn-warning'>Learn more</button>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className={styles.icons}>
                <div className={styles.icon}>
                <DiApple className={styles.apple}/>
                </div>
                <div className={styles.ico}>
                    <h4>Business Consulting</h4>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                    <button className='btn btn-warning'>Learn more</button>
                </div>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-md-4'>
                <div className={styles.icons}>
                <div className={styles.icon}>
                <DiApple className={styles.apple}/>
                </div>
                <div className={styles.ico}>
                    <h4>Business Consulting</h4>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                    <button className='btn btn-warning'>Learn more</button>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className={styles.icons}>
                <div className={styles.icon}>
                <DiApple className={styles.apple}/>
                </div>
                <div className={styles.ico}>
                    <h4>Business Consulting</h4>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                    <button className='btn btn-warning'>Learn more</button>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className={styles.icons}>
                <div className={styles.icon}>
                <DiApple className={styles.apple}/>
                </div>
                <div className={styles.ico}>
                    <h4>Business Consulting</h4>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                    <button className='btn btn-warning'>Learn more</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
