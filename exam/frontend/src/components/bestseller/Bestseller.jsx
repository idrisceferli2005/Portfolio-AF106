import React, { useEffect } from 'react'
import styles from './Bestseller.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/features/productSlice';

const Bestseller = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    console.log(products)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
    return (
        <div className='container'>
            <div className={styles.seller}>
                <h2>Best Sellers</h2>
            </div>
         
             <div className={styles.desk}>
                            {products && products.length > 0 ? (
                                            products.map((product) => (
                                                
                                                  
                                                        <div  key={product._id}>
                                                        <div className={styles.image}>
                                                    <img src={product.image} alt="" />
                                                    </div>
                                                    <div className={styles.text}>
                                                    <h2>{product.name}</h2>
                                                    <p>{product.category}</p>
                                                    <span>{product.price}</span>
                                                    <button className='btn btn-outline-danger'>Add to card</button>
                                                    </div>
                                                    </div>
                                                
                                            ))
                                           ) : (
                                            <p>no products found</p>
                                           )}
                                </div>
            </div>
        
    )
}

export default Bestseller