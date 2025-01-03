import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/features/productSlice';
import { toast } from "react-toastify";
import { addBasket } from '../../../redux/features/basketSlice';
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductDeteil.module.css";


const ProductDeteil = () => {
  const { id } = useParams();
  const datas = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    dispatch(getProducts());
    const savedComments = JSON.parse(localStorage.getItem("productComments")) || [];
    setComments(savedComments);
  }, [dispatch, id]);

  useEffect(() => {
    localStorage.setItem("productComments", JSON.stringify(comments));
  }, [comments]);

  const findProduct = datas.find((product) => product.id === id);

  const handleAddToCart = () => {
    if (findProduct) {
      dispatch(addBasket({ ...findProduct, quantity }));
      notify(`${quantity} məhsul səbətə əlavə olundu`, "success");
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }]);
      setNewComment("");
      notify("Şərh əlavə edildi", "success");
    } else {
      notify("Şərh boş ola bilməz", "error");
    }
  };

  function notify(text, type) {
    toast(text, {
      type,
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

  const relatedProducts = datas.filter(product => product.category === findProduct?.category && product.id !== id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <img src={findProduct?.image} alt="Product" />
          </div>
          <div className={styles.productDetails}>
            <h4 className={styles.productTitle}>{findProduct?.title}</h4>
            <p className={styles.productCategory}>Category: {findProduct?.category}</p>
            <p className={styles.productPrice}>${findProduct?.price}</p>
            <p className={styles.productDescription}>{findProduct?.description}</p>
            <div className={styles.quantitySelector}>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                className={styles.quantityInput}
                type="number"
                value={quantity}
                readOnly
              />
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className={styles.addToCartButton} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        <div className={styles.commentsSection}>
          <h5>Comments</h5>
          <ul className={styles.commentsList}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.commentItem}>
                {comment.text}
              </li>
            ))}
          </ul>
          <textarea
            className={styles.commentInput}
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className={styles.addCommentButton}
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      </div>
      <div className={styles.relatedProducts}>
        <h3>Related Products</h3>
        <Slider {...settings}>
          {relatedProducts.map((product) => (
            <div key={product.id} className={styles.relatedProductCard} onClick={() => navigate(`/productdetail/${product.id}`)}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <Link to={"/"} className="link">
                      Back
                    </Link>
    </div>
    
  );
};

export default ProductDeteil;
