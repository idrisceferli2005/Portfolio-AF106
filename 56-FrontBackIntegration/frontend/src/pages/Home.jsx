import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/features/productSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product); 
    console.log(products)
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  return (
    <div>
        <Navbar/>
        {
            products && products.length > 0 ? (
                products.map((product) => (
                    <div key={product._id}>
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
  )
}

export default Home
