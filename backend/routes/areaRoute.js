import express from 'express';
// import Area from '../models/Area';
import {Area} from "../models/Area.js"
 const router = express.Router();
// Create a new Area
router.post('/', async (req, res) => {
  
    try {
    
    const newArea = new Area(req.body); 
    console.log("insert Request Reached at Route" , newArea);
    // Assume the form data is in the request body
    const savedArea = await newArea.save();
    console.log("confirmation of Save : " ,savedArea)
    res.status(201).json(savedArea);
  } catch (err) {
    
    res.status(400).json({ message: err.message });
  }
});

// Get all Areas
router.get('/', async (req, res) => {
  try {
    const areas = await Area.find();  // Fetch all areas
    res.status(200).json(areas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific Area by ID
router.get('/:id', async (req, res) => {
  try {
    const area = await Area.findById(req.params.id);  // Find area by ID
    if (!area) return res.status(404).json({ message: 'Area not found' });
    res.status(200).json(area);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an Area by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedArea = await Area.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArea) return res.status(404).json({ message: 'Area not found' });
    res.status(200).json(updatedArea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an Area by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedArea = await Area.findByIdAndDelete(req.params.id);
    if (!deletedArea) return res.status(404).json({ message: 'Area not found' });
    res.status(200).json({ message: 'Area deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// module.exports = router;
export default router;