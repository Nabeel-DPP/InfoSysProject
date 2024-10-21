import express from 'express';
import mongoose from 'mongoose';
import { Rights } from '../models/Rights.js'; // Make sure Rights model is correctly imported
const router = express.Router();

// CREATE: Add a new rights entry
router.post('/', async (req, res) => {
  try {
    console.log("This is the Request Body",req.body)
    const newRights = new Rights(req.body); 
    console.log("Insert Request Reached at Route", newRights);
    const savedRights = await newRights.save();
    console.log("Confirmation of Save:", savedRights);
    res.status(201).json(savedRights); // Respond with the saved entry object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all rights entries
router.get('/', async (req, res) => {
  try {
    const rights = await Rights.find(); // Fetch all entries from the Rights collection
    res.status(200).json(rights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific rights entry by ID
router.get('/:id', async (req, res) => {
  try {
    const rights = await Rights.findById(req.params.id);
    if (!rights) return res.status(404).json({ message: "Rights entry not found" });
    res.status(200).json(rights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a specific rights entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRights = await Rights.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });
    if (!updatedRights) return res.status(404).json({ message: "Rights entry not found" });
    res.status(200).json(updatedRights);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a specific rights entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRights = await Rights.findByIdAndDelete(req.params.id);
    if (!deletedRights) return res.status(404).json({ message: "Rights entry not found" });
    res.status(200).json({ message: "Rights entry successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
