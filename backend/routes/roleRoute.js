import express from 'express';
import mongoose from 'mongoose';
import { Role } from '../models/Role.js';
const router = express.Router();

// CREATE: Add a new role entry
router.post('/', async (req, res) => {
  try {
    const newRole = new Role(req.body); 
    console.log("Insert Request Reached at Route", newRole);
    const savedRole = await newRole.save();
    console.log("Confirmation of Save:", savedRole);
    res.status(201).json(savedRole); // Respond with the saved role object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.find(); // Fetch all entries from the Role collection
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific role by ID
router.get('/:id', async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.status(200).json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a specific role by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });
    if (!updatedRole) return res.status(404).json({ message: "Role not found" });
    res.status(200).json(updatedRole);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a specific role by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRole = await Role.findByIdAndDelete(req.params.id);
    if (!deletedRole) return res.status(404).json({ message: "Role not found" });
    res.status(200).json({ message: "Role successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
