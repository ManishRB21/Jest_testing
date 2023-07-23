const Product = require('../models/pModel')

const getProducts = async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json(error);
      }
}

const getProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  const updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };