import React from 'react';
import "./card.css";
import { Button } from '@mui/material';

const Card = ({card}) => {
  return (
    
    <div className="card">
        <i class="fa-regular fa-heart"></i>
    <div className="card-image">
      <img
        src={card.images[0]}
        alt="Fjallraven Backpack"
      />
    </div>
    <div className="card-content">
      <h2 className="card-title">{card.title.slice(0,20) + "..."}</h2>
      <p className="card-category">{card.category}</p>
      <div className="card-footer">
        <span className="card-price">${card.price}</span>
        <div className="card-rating">
          <span>⭐ {card.reviews.rating}</span>
          <span>({card.reviews.comment} reviews)</span>
        </div>
      </div>
    </div>
    <Button variant= "contained" color='primary' className='add-to-cart'>Success</Button>
  </div> 

  )
}

export default Card
