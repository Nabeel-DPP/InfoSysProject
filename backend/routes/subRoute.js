import express from 'express';
import { SubArea } from '../models/SubArea.js'; // Assuming SubArea model is already defined
const router = express.Router();

// CREATE: Add a new SubArea entry
router.post('/', async (req, res) => {
  try {
    const newGoods = new SubArea(req.body); 
    console.log("Insert Request Reached at Route", newGoods);
    const savedGoods = await newGoods.save();
    console.log("Confirmation of Save:", savedGoods);
    res.status(201).json(savedGoods); // Respond with the saved SubArea object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all SubArea
router.get('/', async (req, res) => {
  try {
    const SubArea = await SubArea.find();
    res.status(200).json(SubArea); // Respond with the list of SubArea
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific SubArea entry by ID
router.get('/:id', async (req, res) => {
  try {
    const SubArea = await SubArea.findById(req.params.id);
    if (!SubArea) return res.status(404).json({ message: 'SubArea not found' });
    res.status(200).json(SubArea); // Respond with the specific SubArea object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing SubArea entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedGoods = await SubArea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGoods) return res.status(404).json({ message: 'SubArea not found' });
    console.log("Update Confirmation:", updatedGoods);
    res.status(200).json(updatedGoods); // Respond with the updated SubArea object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a SubArea entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedGoods = await SubArea.findByIdAndDelete(req.params.id);
    if (!deletedGoods) return res.status(404).json({ message: 'SubArea not found' });
    console.log("Deletion Confirmation:", deletedGoods);
    res.status(200).json({ message: 'SubArea deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
