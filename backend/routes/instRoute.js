
import express from 'express';
import { Institution } from '../models/Institution.js'; // Ensure the path to your Institution model is correct
const router = express.Router();

// CREATE: Add a new Institution entry
router.post('/', async (req, res) => {
  try {
    const newInstitution = new Institution(req.body); 
    console.log("Insert Request Reached at Route", newInstitution);
    const savedInstitution = await newInstitution.save();
    console.log("Confirmation of Save:", savedInstitution);
    res.status(201).json(savedInstitution); // Respond with the saved Institution object
  } catch (err) {
    console.error("Error saving Institution:", err);
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all Institutions
router.get('/', async (req, res) => {
  try {
    const institutions = await Institution.find();
    res.status(200).json(institutions); // Respond with the list of Institutions
  } catch (err) {
    console.error("Error fetching Institutions:", err);
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific Institution entry by ID
router.get('/:id', async (req, res) => {
  try {
    const institution = await Institution.findById(req.params.id);
    if (!institution) return res.status(404).json({ message: 'Institution not found' });
    res.status(200).json(institution); // Respond with the specific Institution object
  } catch (err) {
    console.error("Error fetching Institution by ID:", err);
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing Institution entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedInstitution = await Institution.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // `new: true` returns the updated document, `runValidators: true` ensures schema validation
    );
    if (!updatedInstitution) return res.status(404).json({ message: 'Institution not found' });
    console.log("Update Confirmation:", updatedInstitution);
    res.status(200).json(updatedInstitution); // Respond with the updated Institution object
  } catch (err) {
    console.error("Error updating Institution:", err);
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete an Institution entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedInstitution = await Institution.findByIdAndDelete(req.params.id);
    if (!deletedInstitution) return res.status(404).json({ message: 'Institution not found' });
    console.log("Deletion Confirmation:", deletedInstitution);
    res.status(200).json({ message: 'Institution deleted successfully' });
  } catch (err) {
    console.error("Error deleting Institution:", err);
    res.status(500).json({ message: err.message });
  }
});


router.get('/:areaName', async (req, res) => {
  console.log("Request Reached at Institution Route");
  const { areaName } = req.params; // Accessing areaName from URL parameter
  console.log("Area Name is for Institution:", areaName);
  try {
    const institution = await Institution.find({ area_name: areaName }); // Finding institutions based on area_name
    console.log("Corresponding Area Name Data is:", institution);
    res.status(200).json(institution); // Sending the data back
  } catch (error) {
    console.error('Error fetching Institution Data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});






export default router;
