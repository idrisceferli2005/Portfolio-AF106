import React, { useEffect } from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateWishlist } from "../../../redux/features/wishlistSlice";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
const handleDelete = (products)=>{
    if (user) {
        dispatch(updateWishlist(products))
        notify("Item removed from wishlist", "success");
    }
}

const handleClearWishlist = () => {
  if (user) {
    dispatch(updateWishlist([]));
    notify("All items removed from wishlist", "success");
  }
};


   function notify(text, type){
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
  
  return (
    <div>
      <h1>Your Wishlist</h1>
      <section className="wishlist-container">
        <div className="container">
          <div className="row">
            <div className="wishlist">
              {user && user.wishlist.length > 0 ? (
                user.wishlist.map((wishlistItem) => (
                  <div className="wishlist-item" key={wishlistItem.id}>
                    <div className="image">
                      <img src={wishlistItem.image} alt="Product Image" />
                    </div>
                    <h3 className="title">{wishlistItem.title}</h3>
                    <p className="category">{wishlistItem.category}</p>
                    <p className="price">${wishlistItem.price}</p>
                    <button
                      className="btn btn-danger removeBtn"
                      onClick={() => {
                        handleDelete(wishlistItem);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p className="empty">Your wishlist is empty</p>
              )}
            </div>
            {user && user.wishlist.length > 0 && (
              <button
                className="btn btn-warning clearBtn"
                onClick={handleClearWishlist} 
              >
                Clear All
              </button>
            )}
            <Link className="link" to="/">
              back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
   
};


export default Wishlist;
