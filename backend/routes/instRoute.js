import express from 'express';
import { Institution } from '../models/Institution.js'; // Assuming Institution model is already defined
const router = express.Router();

// CREATE: Add a new Institution entry
router.post('/', async (req, res) => {
  try {
    const newGoods = new Institution(req.body); 
    console.log("Insert Request Reached at Route", newGoods);
    const savedGoods = await newGoods.save();
    console.log("Confirmation of Save:", savedGoods);
    res.status(201).json(savedGoods); // Respond with the saved Institution object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all Institution
router.get('/', async (req, res) => {
  try {
    const Institution = await Institution.find();
    res.status(200).json(Institution); // Respond with the list of Institution
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific Institution entry by ID
router.get('/:id', async (req, res) => {
  try {
    const Institution = await Institution.findById(req.params.id);
    if (!Institution) return res.status(404).json({ message: 'Institution not found' });
    res.status(200).json(Institution); // Respond with the specific Institution object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing Institution entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedGoods = await Institution.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGoods) return res.status(404).json({ message: 'Institution not found' });
    console.log("Update Confirmation:", updatedGoods);
    res.status(200).json(updatedGoods); // Respond with the updated Institution object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a Institution entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedGoods = await Institution.findByIdAndDelete(req.params.id);
    if (!deletedGoods) return res.status(404).json({ message: 'Institution not found' });
    console.log("Deletion Confirmation:", deletedGoods);
    res.status(200).json({ message: 'Institution deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
