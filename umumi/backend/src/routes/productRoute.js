import express from 'express';
import { addProduct,  deleteProduct,  getProducts } from '../controllers/productController.js';


const productRouter = express.Router();

productRouter.post("/", addProduct);
productRouter.get("/", getProducts);
productRouter.delete("/:id", deleteProduct);


export default productRouter