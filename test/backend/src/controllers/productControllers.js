import product from "../models/producrModel.js"


export const addProduct = async (req, res) => {
   try {
    const newProduct = new product(req.body);
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
   } catch (error) {
    res.status(500).json({ message: 'Failed to add product' });
    
   }
}

export const getProducts = async (req, res) => {
    try {
        const products = await product.find()

        res.status(200).json({ message: 'product get', products });
    } catch (error) {

         res.status(500).json({ message: 'Failed to add product' });
    }
}

export const deleteProducts = async(req, res)=> {
    const {id} = req.params;
    try {
        const deleteProduct = await product.findByIdAndDelete(id);
        if(!deleteProduct) {
            return res.status(404).json({msg: 'Product not found'})
        } 
        return res.status(200).json({message: "product deleted"})
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product' });
    }
}