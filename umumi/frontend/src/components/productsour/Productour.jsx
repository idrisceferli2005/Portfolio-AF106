import React, { useEffect } from 'react'
import styles from './Productour.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../redux/features/productSlice';

const Productour = () => {

  const dispatch = useDispatch();
  const navigate =useNavigate();
  const { products } = useSelector((state) => state.products);
  console.log(products)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
 <div>
    <div className={styles.ourProducts}>
        <span>Popular Products</span>
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae{" "}
          <br /> nostrum natus excepturi fuga ullam accusantium vel ut eveniet
          aut <br /> consequatur laboriosam ipsam.
        </p>
      </div>

      <div className={styles.cards}>
        <div className="row">
          <div className="d-flex justify-content-between gap-3 flex-wrap align-center">
          {
            products && products.length > 0 ? (
                products.map((product) => (
                    <div key={product._id}>
                      <img className={styles.womens} src={product.image} alt="" />
                        <h2>{product.name}</h2>
                        <p>{product.category}</p>
                        <span>{product.price}</span>
                        </div>
                ))
            ) : (
                <p>No products found</p>
            )
        }
          </div>
   
        </div>
      </div>
 </div>
  )
}

export default Productour
