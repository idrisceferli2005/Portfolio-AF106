import React, { useEffect } from "react";
import styles from "./Wishlist.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateWishlist } from "../../../redux/features/wishlistSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBasket } from "../../../redux/features/basketSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleDelete = (products) => {
    if (user) {
      dispatch(updateWishlist(products));
      notify("Item removed from wishlist", "success");
    }
  };

  const handleClearWishlist = () => {
    if (user) {
      dispatch(updateWishlist([]));
      notify("All items removed from wishlist", "success");
    }
  };

  function notify(text, type) {
    toast(text, {
      type: type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleAddToCart = (wishlistItem) => {
    if (wishlistItem) {
      dispatch(addBasket({ ...wishlistItem, quantity: 1 }));
      notify("Basketə əlavə olundu", "success");
    }
  };

  return (
    <div>
    <h1>Your Wishlist</h1>
    <section className={styles.wishlistContainer}>
      <div className="container">
        <div className="row">
          <div className={styles.wishlist}>
            {user && user.wishlist.length > 0 ? (
              user.wishlist.map((wishlistItem) => (
                <div className={styles.wishlistItem} key={wishlistItem.id}>
                  <div className={styles.image}>
                    <img src={wishlistItem.image} alt="Product Image" />
                  </div>
                  <h3 className={styles.title}>{wishlistItem.title}</h3>
                  <p className={styles.category}>{wishlistItem.category}</p>
                  <p className={styles.price}>${wishlistItem.price}</p>
                  <button
                    className={`btn btn-danger ${styles.removeBtn}`}
                    onClick={() => {
                      handleDelete(wishlistItem);
                    }}
                  >
                    Remove
                  </button>
                  <button
                    className={`btn btn-primary ${styles.addBtn}`}
                    onClick={() => handleAddToCart(wishlistItem)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className={styles.empty}>Your wishlist is empty</p>
            )}
          </div>
          {user && user.wishlist.length > 0 && (
            <button
              className={`btn btn-warning ${styles.clearBtn}`}
              onClick={handleClearWishlist}
            >
              Clear All
            </button>
          )}
          <Link className={styles.link} to="/">
            back
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Wishlist;