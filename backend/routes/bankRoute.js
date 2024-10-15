import express from 'express';
import { Bank } from '../models/Bank.js';  // Assuming Bank model is already defined
const router = express.Router();

// CREATE: Add a new bank
router.post('/', async (req, res) => {
  try {
    const newBank = new Bank(req.body); 
    console.log("Insert Request Reached at Route", newBank);
    const savedBank = await newBank.save();
    console.log("Confirmation of Save:", savedBank);
    res.status(201).json(savedBank); // Respond with the saved bank object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ALL: Get all banks
router.get('/', async (req, res) => {
  try {
    const banks = await Bank.find(); // Fetch all records
    res.status(200).json(banks); // Respond with the list of all banks
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ ONE: Get a specific bank by ID
router.get('/:id', async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id); // Find bank by ID
    if (!bank) {
      return res.status(404).json({ message: "Bank not found" });
    }
    res.status(200).json(bank); // Respond with the found bank
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a bank by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBank = await Bank.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); 
    if (!updatedBank) {
      return res.status(404).json({ message: "Bank not found" });
    }
    console.log("Update Success:", updatedBank);
    res.status(200).json(updatedBank); // Respond with the updated bank object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a bank by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBank = await Bank.findByIdAndDelete(req.params.id);
    if (!deletedBank) {
      return res.status(404).json({ message: "Bank not found" });
    }
    console.log("Delete Success:", deletedBank);
    res.status(200).json({ message: "Bank deleted successfully", deletedBank });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
