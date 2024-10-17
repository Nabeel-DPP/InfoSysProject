import express from 'express';
import mongoose from 'mongoose';
import { RightsSection } from '../models/RightsSection.js';
const router = express.Router();

// CREATE: Add a new rights section entry
router.post('/', async (req, res) => {
  try {
    const newRightsSection = new RightsSection(req.body); 
    console.log("Insert Request Reached at Route", newRightsSection);
    const savedRightsSection = await newRightsSection.save();
    console.log("Confirmation of Save:", savedRightsSection);
    res.status(201).json(savedRightsSection); // Respond with the saved rights section object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all rights section entries
router.get('/', async (req, res) => {
  try {
    const rightsSections = await RightsSection.find(); // Fetch all entries from the RightsSection collection
    res.status(200).json(rightsSections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific rights section entry by ID
router.get('/:id', async (req, res) => {
  try {
    const rightsSection = await RightsSection.findById(req.params.id);
    if (!rightsSection) return res.status(404).json({ message: "Rights section entry not found" });
    res.status(200).json(rightsSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a specific rights section entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRightsSection = await RightsSection.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });
    if (!updatedRightsSection) return res.status(404).json({ message: "Rights section entry not found" });
    res.status(200).json(updatedRightsSection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a specific rights section entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRightsSection = await RightsSection.findByIdAndDelete(req.params.id);
    if (!deletedRightsSection) return res.status(404).json({ message: "Rights section entry not found" });
    res.status(200).json({ message: "Rights section entry successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
