import express from 'express';
import mongoose from 'mongoose';
import { ProductQuota } from '../models/ProductQuota.js'; // Ensure ProductQuota model is correctly imported
const router = express.Router();

// CREATE: Add a new quota entry
router.post('/', async (req, res) => {
  try {
    const newQuota = new ProductQuota(req.body); 
    console.log("Insert Request Reached at Route", newQuota);
    const savedQuota = await newQuota.save();
    console.log("Confirmation of Save:", savedQuota);
    res.status(201).json(savedQuota); // Respond with the saved entry object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all product quotas
router.get('/', async (req, res) => {
  try {
    const quotas = await ProductQuota.find(); // Fetch all product quotas
    res.json(quotas); // Respond with the quotas array
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific product quota by ID
router.get('/:id', async (req, res) => {
  try {
    const quota = await ProductQuota.findById(req.params.id); // Fetch quota by ID
    if (!quota) {
      return res.status(404).json({ message: 'Quota not found' });
    }
    res.json(quota); // Respond with the found quota
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a specific product quota by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedQuota = await ProductQuota.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update and return the updated quota
    if (!updatedQuota) {
      return res.status(404).json({ message: 'Quota not found' });
    }
    res.json(updatedQuota); // Respond with the updated quota
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Remove a specific product quota by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedQuota = await ProductQuota.findByIdAndDelete(req.params.id); // Delete quota by ID
    if (!deletedQuota) {
      return res.status(404).json({ message: 'Quota not found' });
    }
    res.json({ message: 'Quota deleted successfully' }); // Respond with success message
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
