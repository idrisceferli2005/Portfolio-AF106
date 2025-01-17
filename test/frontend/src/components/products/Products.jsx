import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/features/productSlice';
import { addWishlist } from '../redux/features/wishlistSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const AllProducts = products.products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [heart, setheart] = useState(false)
  const toggle = () => {
    setheart(!heart)
  }
  return (
    <div className="container">
      <div className={styles.products}>
        <h2>Latest Products</h2>
        <div className={styles.rightproduct}>
          <li>All</li>
          <li>New</li>
          <li>Featured</li>
          <li>Offer</li>
        </div>
      </div>
      <hr />

      <div className={styles.cards}>
        <div className="row">
          {AllProducts && AllProducts.length > 0 ? (
            AllProducts.map((product) => (
              <div className="col-4" key={product._id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.category}
                    </Card.Text>
                    <Card.Text>
                      {product.price}
                    </Card.Text>
                    {
                      heart ? (
                        <Button variant="primary" onClick={() => {
                          toggle()
                        }}>remove wish</Button>

                      ) : (
                        <Button variant="primary" onClick={() => {
                          toggle(), dispatch(addWishlist(product))
                        }}>add wish</Button>
                      )
                    }
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
