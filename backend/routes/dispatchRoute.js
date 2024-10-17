import express from 'express';
import mongoose from 'mongoose';
import { Dispatches } from '../models/Dispatches.js';
const router = express.Router();

// CREATE: Add a new dispatch entry
router.post('/', async (req, res) => {
  try {
    const newDispatch = new Dispatches(req.body); 
    console.log("Insert Request Reached at Route", newDispatch);
    const savedDispatch = await newDispatch.save();
    console.log("Confirmation of Save:", savedDispatch);
    res.status(201).json(savedDispatch); // Respond with the saved dispatch object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all dispatch entries
router.get('/', async (req, res) => {
  try {
    const dispatches = await Dispatches.find(); // Fetch all entries from the Dispatches collection
    res.status(200).json(dispatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific dispatch entry by ID
router.get('/:id', async (req, res) => {
  try {
    const dispatch = await Dispatches.findById(req.params.id);
    if (!dispatch) return res.status(404).json({ message: "Dispatch entry not found" });
    res.status(200).json(dispatch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a specific dispatch entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDispatch = await Dispatches.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });
    if (!updatedDispatch) return res.status(404).json({ message: "Dispatch entry not found" });
    res.status(200).json(updatedDispatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a specific dispatch entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDispatch = await Dispatches.findByIdAndDelete(req.params.id);
    if (!deletedDispatch) return res.status(404).json({ message: "Dispatch entry not found" });
    res.status(200).json({ message: "Dispatch entry successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
