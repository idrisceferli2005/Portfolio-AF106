import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { getUser, updateWishlist } from "../../redux/features/wishlistSlice";
import "./Card.css";
import { addBasket } from "../../redux/features/basketSlice";

const Card = ({ card }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.wishlist);
  const [isFilled, setIsFilled] = useState(false); 

  useEffect(() => {
    dispatch(getUser()); 
  }, [dispatch]);

  const notify = (text, type) => {
    toast(text, {
      type: type,
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const addToBasket = (e,product) => {
    e.stopPropagation();
    dispatch(addBasket(product));
    notify("Məhsul əlavə edildi", "success");
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    if (user) {
      setIsFilled(!isFilled);

      if (!isFilled) {
    
        dispatch(updateWishlist(card));
        notify("Məhsul  siyahıya əlavə edildi", "success");
      } else {
   
        dispatch(updateWishlist(card)); 
        notify("Məhsulsiyahıdan silindi", "info");
      }
    } else {
      notify("Zəhmət olmasa daxil olun", "error");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <div className="card" onClick={() => navigate(`/productdetail/${card.id}`)}>
    
      <i
        className={`fa-heart ${isFilled ? "fa-solid filled" : "fa-regular"}`} 
        onClick={(e)=>handleIconClick(e)}
        style={{
          cursor: "pointer",
          fontSize: "24px",
          color: isFilled ? "red" : "gray", 
          transition: "color 0.3s", 
        }}
      ></i>

   
      <div className="card-image">
        <img src={card.image} alt={card.title} />
      </div>


      <div className="card-content">
        <h2 className="card-title">{card.title.slice(0, 20) + "..."}</h2>
        <p className="card-category">{card.category}</p>
        <div className="card-footer">
          <span className="card-price">${card.price}</span>
          <div className="card-rating">
            {/* <span>⭐ {card.rating.rate}</span> */}
            {/* <span>({card.rating.count} reviews)</span> */}
          </div>
        </div>
      </div>

      <Button variant="contained" color="primary" className="add-to-cart" onClick={(e)=>addToBasket(e, card)}>
        Add to basket
      </Button>
    </div>
  );
};

export default Card;
