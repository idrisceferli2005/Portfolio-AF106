import product from "../models/productModel.js";

export const addProduct = async (req, res) => {
    try {
        const newProduct = new product(req.body);
        await newProduct.save();

        return res.status(201).json({success: true, message: "Product added successfully"});
    } catch (error) {
        return res.status(500).json({success: false ,message:"Internel server error"})
    }
}

export const getProducts = async (req, res) => {

  try {
    const products = await product.find();
    return res.status(200).json({success: true,  products});
  } catch (error) {
    return res.status(500).json({success: false, message: "Internal server error"})
  }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params
    try {
        const deleteProduct = await product.findByIdAndDelete(id);
        if(!deleteProduct) {
            return res.status(400).json({ success: false, message: "Product not deleted...!" });
        } 
            return res.status(200).json({success: true, message: "Product deleted successfully"});
        
    } catch (error) {
        return res.status(500).json({success:false, message: "Internal server error"})
    }
} 