import express from "express"
import { addProduct, deleteProducts, getProducts } from "../controllers/productControllers.js";

const productRouter = express.Router();
productRouter.post("/", addProduct);
productRouter.get("/", getProducts);
productRouter.delete("/:id", deleteProducts)


export default productRouter
