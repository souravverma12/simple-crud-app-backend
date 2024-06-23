const Product = require("../models/product.model.js");


const getProducts= async(req,res)=>{
    try {
        const products = await Product.find(req.body); 
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}



const getProduct= async(req,res)=>{
  try {
    const { id } = req.params;
    const product = await Product.findById(id); ///////// /////READ the product
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const createProduct=async(req,res)=>{
  try {
    const product = await Product.create(req.body); /////CREATE the product
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const updateProduct=async(req,res)=>{
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body); ///////// /////UPDATE
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    // now the product is updated
    const updatedProduct = await Product.findById(id); //it will return the updated product
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteProduct=async (req,res)=>{
  try {
    const { id } = req.params;
    const product=await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json("product deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}