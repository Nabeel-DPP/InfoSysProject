import express from 'express';
import { SubArea } from '../models/SubArea.js'; // Import the SubArea model

const router = express.Router();

// CREATE: Add a new SubArea entry
router.post('/', async (req, res) => {
  try {
    const newSubArea = new SubArea(req.body); // Create a new SubArea object from request body
    console.log("Insert Request Reached at Route", newSubArea);
    const savedSubArea = await newSubArea.save(); // Save the new SubArea to the database
    console.log("Confirmation of Save:", savedSubArea);
    res.status(201).json(savedSubArea); // Respond with the saved SubArea object
  } catch (err) {
    console.error("Error Saving SubArea:", err);
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all SubAreas
router.get('/', async (req, res) => {
  try {
    const subAreas = await SubArea.find(); // Retrieve all SubArea documents
    res.status(200).json(subAreas); // Respond with the list of SubArea objects
  } catch (err) {
    console.error("Error Fetching SubAreas:", err);
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific SubArea entry by ID
router.get('/:id', async (req, res) => {
  try {
    const subArea = await SubArea.findById(req.params.id); // Retrieve SubArea by ID
    if (!subArea) return res.status(404).json({ message: 'SubArea not found' });
    res.status(200).json(subArea); // Respond with the specific SubArea object
  } catch (err) {
    console.error("Error Fetching SubArea by ID:", err);
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing SubArea entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedSubArea = await SubArea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedSubArea) return res.status(404).json({ message: 'SubArea not found' });
    console.log("Update Confirmation:", updatedSubArea);
    res.status(200).json(updatedSubArea); // Respond with the updated SubArea object
  } catch (err) {
    console.error("Error Updating SubArea:", err);
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a SubArea entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedSubArea = await SubArea.findByIdAndDelete(req.params.id); // Delete SubArea by ID
    if (!deletedSubArea) return res.status(404).json({ message: 'SubArea not found' });
    console.log("Deletion Confirmation:", deletedSubArea);
    res.status(200).json({ message: 'SubArea deleted successfully' });
  } catch (err) {
    console.error("Error Deleting SubArea:", err);
    res.status(500).json({ message: err.message });
  }
});

router.get('/area/:areaId', async (req, res) => {
  console.log("Request Reached at Sub Area Route");
  const { areaId } = req.params;
  console.log("Area Id is for Sub Area:", areaId);
  try {
    const subArea = await SubArea.find({ area_id: areaId });
    console.log("Corresponding Sub Area Data : " , subArea);
    res.status(200).json(subArea);
  } catch (error) {
    console.error('Error fetching Sub Area Data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});




export default router;
