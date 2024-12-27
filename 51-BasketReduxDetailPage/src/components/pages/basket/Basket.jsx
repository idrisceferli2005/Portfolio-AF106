import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Basket.css"
import { deleteAllBaket, deleteBasket, minusBtn, plusBtn } from "../../../redux/features/basketSlice";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.basket);
  console.log(products);

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const handleDeleteBasket = (product) => {
    dispatch(deleteBasket(product));
    notify("silindi")
  };

  const handlePlus = (product) => {
    dispatch(plusBtn(product));
    notify("artirildi")
  };

  const handleMinus = (product) => {
    dispatch(minusBtn(product));
    notify("azaldildi")
  };

  const handleDeleteAllBasket = (product) => {
    dispatch(deleteAllBaket([]));
    notify("hamisi silindi")
  }
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
      <section className="basket-container">
        <div className="container">
          <div className="row">
            <div className="basket">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <div className="basket-item" key={product.id}>
                    <div
                      className="image"
                      onClick={() => navigate(`/productdetail/${product.id}`)}
                    >
                      <img src={product.image} alt="Product Image" />
                    </div>
                    <h6 className="title">
                      {product.title
                        ? product.title.slice(0, 10) + "..."
                        : "Untitled"}
                    </h6>
                    <p className="category">{product.category}</p>
                    <p className="price">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                    <div className="count-area">
                      <button
                        className="minus-btn"
                        onClick={() => handlePlus(product)}
                      >
                        +
                      </button>
                      <p className="count">{product.quantity}</p>
                      <button
                        disabled={product.quantity === 1}
                        className="plus-btn"
                        onClick={() => handleMinus(product)}
                      >
                        -
                      </button>
                    </div>
                    <button
                      className="btn btn-danger removeBtn"
                      onClick={() => handleDeleteBasket(product)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p className="empty">
                  Your basket is empty. Add some products to get started!
                </p>
              )}
            </div>
            <button className="btn btn-danger removeBtn" onClick={handleDeleteAllBasket}>Delete All</button>
            <div className="bottom">
              <Link to={"/"} className="link">
                Back
              </Link>
              <h4>
                Total: <span className="total-price">${totalAmount.toFixed(2)}</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
