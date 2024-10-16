import express from 'express';
import { Goods } from '../models/Goods.js'; // Assuming Goods model is already defined
const router = express.Router();

// CREATE: Add a new goods entry
router.post('/', async (req, res) => {
  try {
    const newGoods = new Goods(req.body); 
    console.log("Insert Request Reached at Route", newGoods);
    const savedGoods = await newGoods.save();
    console.log("Confirmation of Save:", savedGoods);
    res.status(201).json(savedGoods); // Respond with the saved goods object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all goods
router.get('/', async (req, res) => {
  try {
    const goods = await Goods.find();
    res.status(200).json(goods); // Respond with the list of goods
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific goods entry by ID
router.get('/:id', async (req, res) => {
  try {
    const goods = await Goods.findById(req.params.id);
    if (!goods) return res.status(404).json({ message: 'Goods not found' });
    res.status(200).json(goods); // Respond with the specific goods object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing goods entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedGoods = await Goods.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGoods) return res.status(404).json({ message: 'Goods not found' });
    console.log("Update Confirmation:", updatedGoods);
    res.status(200).json(updatedGoods); // Respond with the updated goods object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a goods entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedGoods = await Goods.findByIdAndDelete(req.params.id);
    if (!deletedGoods) return res.status(404).json({ message: 'Goods not found' });
    console.log("Deletion Confirmation:", deletedGoods);
    res.status(200).json({ message: 'Goods deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
