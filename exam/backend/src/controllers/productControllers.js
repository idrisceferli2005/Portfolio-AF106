import product from "../models/productModel.js";


export const addProducts = async (req, res) => {
   try {
    const newProduct = new product (req.body);
    await newProduct.save();
    res.status(201).json({success: false, message: "product added successfully"})
   } catch (error) {
    return res.status(500).json({success: false, message: "Internal server error"})
   }
}

export const getProducts = async (req, res) => {
    try {
        const products = await product.find();
        return res.status(200).json({success: true, products})
    
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error"})
    }
}

export const deleteProducts = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteProducts = await product.findByIdAndDelete(id);
        if(!deleteProducts) {
            return res.status(400).json({success: false, message: "product not fond" })
        } 
        return res.status(400).json({success: true, message: "product deleted"})

    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error"})
    }
}