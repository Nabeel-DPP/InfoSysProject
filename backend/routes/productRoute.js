import express from 'express';
import { Product } from '../models/Product.js';  // Adjust the model import as necessary
const router = express.Router();

// CREATE: Add a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    console.log("Insert Request Reached at Route", newProduct);
    const savedProduct = await newProduct.save();
    console.log("Confirmation of Save:", savedProduct);
    res.status(201).json(savedProduct); // Respond with the saved product
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a product by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Remove a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
