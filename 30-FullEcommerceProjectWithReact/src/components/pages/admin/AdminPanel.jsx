import React, { useEffect, useState } from "react";
import styles from "./AdminPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../../redux/features/productSlice";
import BasicModal from "../../../utils/modal/Modal";
import ProductDetailModal from "../../../utils/modalproduct/ProductDetailModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [open, setOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDetailOpen = (product) => {
    setSelectedProduct(product);
    setDetailOpen(true);
  };
  const handleDetailClose = () => setDetailOpen(false);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    notify("Product added", "success");
    handleClose();
    setFormData({
      image: "",
      title: "",
      category: "",
      price: "",
    });
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
    notify("Product deleted", "success");
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct(formData));
    notify("Product updated", "success");
    handleClose();
    setFormData({
      image: "",
      title: "",
      category: "",
      description: "",
      price: "",
    });
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  function notify(text, type) {
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
    <div className="admin-container">
      <main className={styles.content}>
        <header>
          <h1>Productlarin Siyahisi</h1>
          <button className={styles.addbtn} onClick={handleOpen}>
            Create
          </button>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products && products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="product-id">{product.id}</td>
                    <td>
                      <img
                        className={styles.productimage}
                        src={product.image}
                        alt=""
                      />
                    </td>
                    <td className="product-title">
                      {product.title.slice(0, 20)}...
                    </td>
                    <td className="product-category">{product.category}</td>
                    <td className="product-price">{product.price} Azn</td>
                    <td>
                      <button
                        className={styles.editbtn}
                        onClick={() => {
                          setFormData(product);
                          handleOpen();
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.deletebtn}
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                      <button
                        className={styles.detailbtn}
                        onClick={() => handleDetailOpen(product)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No products</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <BasicModal
          open={open}
          handleClose={handleClose}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={formData.id ? handleUpdateProduct : handleAddProduct}
        />
         {selectedProduct && (
          <ProductDetailModal
            open={detailOpen}
            handleClose={handleDetailClose}
            product={selectedProduct}
          />
        )}
      </main>
    </div>
  );
};

export default AdminPanel;