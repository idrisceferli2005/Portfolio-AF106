import React from 'react';
import styles from './About.module.css';
import Card from '../../../card/Card';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const About = () => {
  const datas = useSelector((state) => state.products.products.slice(0, 4));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className={styles.eveningbags}>
        <p>Evening bags</p>
        <p>Shoulder bag</p>
        <p>Backpack</p>
        <p>Handbag</p>
        <p>Postman bag</p>
        <p>Belt bags</p>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.slides}>
          <div className={styles.slide}>
            <div className={styles.handbag}>
              <div className={styles.handbagTitle}>
                <h3 className={styles.off}>30% off</h3>
                <h1>Handbag products</h1>
                <p>It is a long established fact that a reader will be <br /> distracted by the readable content expound the actual <br/>teachings of the great explorer</p>
                <Link to={"/"} className={styles.shop}>Shop now</Link>
              </div>
              <div className={styles.handbagImage}>
                <img src="/sumka.png" alt="Handbag" />
              </div>
            </div>
          </div>
          <div className={styles.slide}>
            <div className={styles.handbag}>
              <div className={styles.handbagTitle}>
               
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className={styles.delivery}>
        <i className="bi bi-truck icon"></i>
        <span>Guaranteed delivery</span>
        <i className="bi bi-phone-flip icon"></i>
        <span>Do not come back</span>
        <i className="bi bi-lock icon"></i>
        <span>Safe and secure shopping</span>
        <i className="bi bi-credit-card-2-back-fill icon"></i>
        <span>Payment at the door or online</span>
      </div>
      <div className={styles.bags}>
<div className={styles.bag}>
  <img src="/coachpink.png" alt="" />
  <h4 className={styles.photo}>Shoulder  bags</h4>
</div>
<div className={styles.bag}>
  <img src="/qarabag.png" alt="" />
  <h4 className={styles.photo}>Hand bag</h4>
</div>
<div className={styles.bag}>
  <img src="/saribag.png" alt="" />
  <h4 className={styles.photo}>Backpack</h4>
</div>
<div className={styles.bag}>
  <img src="/narincibag.png" alt="" />
  <h4 className={styles.photo}>Evenings bags</h4>
</div>
      </div>
      
      <div className={styles.carts}>
        <Slider {...settings}>
          {datas && datas.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;