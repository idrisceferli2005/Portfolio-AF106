import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Basket.module.css"
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
      <section className={styles.basketContainer}>
      <div className="container">
        <div className="row">
          <div className={styles.basket}>
            {products && products.length > 0 ? (
              products.map((product) => (
                <div className={styles.basketItem} key={product.id}>
                  <div
                    className={styles.image}
                    onClick={() => navigate(`/productdetail/${product.id}`)}
                  >
                    <img src={product.image} alt="Product Image" />
                  </div>
                  <h6 className={styles.title}>
                    {product.title
                      ? product.title.slice(0, 10) + "..."
                      : "Untitled"}
                  </h6>
                  <p className={styles.category}>{product.category}</p>
                  <p className={styles.price}>
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                  <div className={styles.countArea}>
                    <button
                      className="minus-btn"
                      onClick={() => handlePlus(product)}
                    >
                      +
                    </button>
                    <p className={styles.count}>{product.quantity}</p>
                    <button
                      className="plus-btn"
                      onClick={() => handleMinus(product)}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className={`btn btn-danger ${styles.removeBtn}`}
                    onClick={() => handleDeleteBasket(product)}
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className={styles.empty}>
                Your basket is empty. Add some products to get started!
              </p>
            )}
          </div>
          <button className={`btn btn-danger ${styles.removeBtn}`} onClick={handleDeleteAllBasket}>Delete All</button>
          <div className={styles.bottom}>
            <Link to={"/"} className={styles.link}>
              Back
            </Link>
            <h4>
              Total: <span className={styles.totalPrice}>${totalAmount.toFixed(2)}</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Basket;
