
import { useDispatch, useSelector } from 'react-redux';
import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from '../src/redux/features/productSlice';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);


useEffect(() => {getProducts}, [
    dispatch
]);
  return (
    <ProductContext.Provider value={{ products, getProducts,  deleteProduct, updateProduct }}>{children}</ProductContext.Provider>
  );
};

export const productList = () => useContext(ProductContext);