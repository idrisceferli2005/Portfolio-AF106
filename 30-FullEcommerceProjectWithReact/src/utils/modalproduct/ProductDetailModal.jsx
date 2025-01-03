import React from 'react'
import styles from './ProductDetailModal.module.css';
import { Modal } from '@mui/material';

const ProductDetailModal = ({ open, handleClose, product }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.modalContent}>
        <h2>Product Details</h2>
        <img src={product.image} alt={product.title} className={styles.productImage} />
        <p><strong>Title:</strong> {product.title}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> {product.price} Azn</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;