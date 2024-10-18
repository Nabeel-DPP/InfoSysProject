import express from 'express';
import { ProductLog } from '../models/ProductLog.js';  // Assuming ProductLog model is defined
const router = express.Router();

// CREATE: Add a new product log
router.post('/', async (req, res) => {
  try {
    const newProductLog = new ProductLog(req.body); 
    console.log("Insert Request Reached at Route", newProductLog);
    const savedProductLog = await newProductLog.save();
    console.log("Confirmation of Save:", savedProductLog);
    res.status(201).json(savedProductLog); // Respond with the saved product log object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all product logs
router.get('/', async (req, res) => {
  try {
    const productLogs = await ProductLog.find(); // Fetch all product logs
    res.json(productLogs); // Respond with the product logs array
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific product log by ID
router.get('/:id', async (req, res) => {
  try {
    const productLog = await ProductLog.findById(req.params.id); // Fetch product log by ID
    if (!productLog) {
      return res.status(404).json({ message: 'Product log not found' });
    }
    res.json(productLog); // Respond with the found product log
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a specific product log by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProductLog = await ProductLog.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update and return the updated product log
    if (!updatedProductLog) {
      return res.status(404).json({ message: 'Product log not found' });
    }
    res.json(updatedProductLog); // Respond with the updated product log
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Remove a specific product log by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProductLog = await ProductLog.findByIdAndDelete(req.params.id); // Delete product log by ID
    if (!deletedProductLog) {
      return res.status(404).json({ message: 'Product log not found' });
    }
    res.json({ message: 'Product log deleted successfully' }); // Respond with success message
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
