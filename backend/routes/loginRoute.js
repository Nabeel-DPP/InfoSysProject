import express from 'express';
import mongoose from 'mongoose';
import { Login } from '../models/Login.js'; // Assuming Login model is already defined
const router = express.Router();

// CREATE: Add a new login entry
router.post('/', async (req, res) => {
  try {
    const newLogin = new Login(req.body); 
    console.log("Insert Request Reached at Route", newLogin);
    const savedLogin = await newLogin.save();
    console.log("Confirmation of Save:", savedLogin);
    res.status(201).json(savedLogin); // Respond with the saved login object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all login entries
router.get('/', async (req, res) => {
  try {
    const logins = await Login.find();
    res.status(200).json(logins); // Respond with the list of logins
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific login entry by ID
router.get('/:id', async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);
    if (!login) return res.status(404).json({ message: 'Login not found' });
    res.status(200).json(login); // Respond with the specific login object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing login entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedLogin = await Login.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLogin) return res.status(404).json({ message: 'Login not found' });
    console.log("Update Confirmation:", updatedLogin);
    res.status(200).json(updatedLogin); // Respond with the updated login object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a login entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedLogin = await Login.findByIdAndDelete(req.params.id);
    if (!deletedLogin) return res.status(404).json({ message: 'Login not found' });
    console.log("Deletion Confirmation:", deletedLogin);
    res.status(200).json({ message: 'Login deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
