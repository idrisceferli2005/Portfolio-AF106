import React from 'react'
import styles from './Blog.module.css'
const Blog = () => {
  return (
    <div>
        <div className='container'>
           
                <div className={styles.blog}>
                <h2>Latest blogs</h2>
                </div>
                <div className={styles.blogs}>
            <div className={styles.blogcard}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg.webp" alt="" />
            </div>
            <div className={styles.blogcard}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg.webp" alt="" />
            </div>
            <div className={styles.blogcard}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg.webp" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blog