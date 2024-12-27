import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./ProductDeteil.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/features/productSlice';
import { pilusBtn, minsBtn } from '../../../redux/features/deteilSlice';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBasket } from '../../../redux/features/basketSlice';
const ProductDeteil = () => {
  const { id } = useParams(); 
  const datas = useSelector((state) => state.products.products); 
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProducts()); 
  }, [dispatch]);


  const findProduct = datas.find((product) => product.id === id); 




  const handlePilus = () => {
    if (findProduct) {
      setQuantity(quantity + 1)
      dispatch(pilusBtn(findProduct));
      notify("elave edildi")
    }
  };

  const handleMnus = () => {
    if (findProduct && quantity > 1) {
      setQuantity(quantity - 1); 
      dispatch(minsBtn(findProduct)); 
      notify("azaldildi")
    }
  };
  const handleAddToCart = () => {
    if (findProduct) {
      dispatch(addBasket({ ...findProduct, quantity })); 
      notify("baskete elave olundu")
    }
  };
     function notify(text, type){
          toast(text, {
            type: type,
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="product-container">
            <div className="product-image">
              <img className="img" src={findProduct?.image} alt="Product Image" />
            </div>

            <div className="product-details">
              <h4 className="product-title">{findProduct?.title}</h4>
              <p className="product-category">Category: {findProduct?.category}</p>
              <p className="product-price">${findProduct?.price}</p>
              <p className="product-description">{findProduct?.description}</p>

              <div className="product-rating">
                <span>⭐ {findProduct?.rating.rate}</span>
                <span>({findProduct?.rating.count} reviews)</span>
              </div>

              <div className="quantity-selector">
                <button
                  className="btn-minus"
                  onClick={handleMnus}
                  disabled={quantity <= 1} 
                >
                  -
                </button>
                <input type="number" value={quantity} readOnly /> 
                <button className="btn-plus" onClick={handlePilus}>+</button>
              </div>

              <Link to={"/basket"} className="btn btn-danger add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </Link>
            </div>
         
          </div>
          <Link to={"/"} className="link">
                Back
              </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDeteil;
