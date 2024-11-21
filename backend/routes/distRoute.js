import express from 'express';
import mongoose from 'mongoose';
import { Distributor } from '../models/Distributor.js'; // Assuming Distributor model is already defined
const router = express.Router();
import { Area } from '../models/Area.js'; // Adjust the import path as necessary

// CREATE: Add a new distributor entry
router.post('/', async (req, res) => {
  try {
    console.log("Data Coming from Form",req.body);
    const newDist = new Distributor(req.body); 
    console.log("Insert Request Reached at Route", newDist);
    await newDist.validate();
    const savedDist = await newDist.save();
    console.log("Confirmation of Save:", savedDist);
    res.status(201).json(savedDist); // Respond with the saved distributor object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.post('/', async (req, res) => {
//   try {
//     // Extract AreaName from the request body
//     const { formData } = req.body;
//    console.log(req.body);
  
//     // Find the corresponding area by AreaName
   

//     // Create a new Distributor with the found areaID
//     const newDist = new Distributor(
//       formData);

//     console.log("Insert Request Reached at Route", newDist);
//     await newDist.validate();
//     const savedDist = await newDist.save();
//     console.log("Confirmation of Save:", savedDist);

//     // Respond with the saved distributor object
//     res.status(201).json(savedDist);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// This is also a method to create and Store document in the Database

// router.post('/', async (req, res) => {
//   try {
//     const savedDist = await Distributor.create(req.body);  // Insert one document
//     console.log("Confirmation of Save:", savedDist);
    
//     res.status(201).json(savedDist);
//   } catch (err) {
//     console.error("Error creating document:", err);
//     res.status(400).json({ message: err.message });
//   }
// });



// READ: Get distributors by AreaID
router.get('/area/:areaId', async (req, res) => {
  console.log("Request Reached at Dist Route");
  const { areaId } = req.params;
  console.log("This is the Coming Area ID from Form:", areaId);
  try {
    const distributors = await Distributor.find({ areaID: areaId }).select('distName distType DistId');
    console.log("Corresponding Distributor Data : " , distributors);
    res.status(200).json(distributors);
  } catch (error) {
    console.error('Error fetching distributors:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/type/:distId', async (req, res) => {
  console.log("Request Reached at Dist Route Requesting Dist Type");
  const { distId } = req.params;
  console.log("This is the Coming Distributor ID from Form:", distId);
  try {
    const distributorType = await Distributor.find({DistId: distId}).select("distType");
    console.log("Corresponding Distributor Type is  : " , distributorType);
    res.status(200).json(distributorType);
  } catch (error) {
    console.error('Error fetching distributors:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});



// READ: Get all distributor entries
router.get('/', async (req, res) => {
  try {
    const distributors = await Distributor.find();
    res.status(200).json(distributors); // Respond with the list of distributors
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific distributor entry by ID
router.get('/:id', async (req, res) => {
  try {
    const distributor = await Distributor.findById(req.params.id);
    if (!distributor) return res.status(404).json({ message: 'Distributor not found' });
    res.status(200).json(distributor); // Respond with the specific distributor object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing distributor entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDist = await Distributor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDist) return res.status(404).json({ message: 'Distributor not found' });
    console.log("Update Confirmation:", updatedDist);
    res.status(200).json(updatedDist); // Respond with the updated distributor object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a distributor entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDist = await Distributor.findByIdAndDelete(req.params.id);
    if (!deletedDist) return res.status(404).json({ message: 'Distributor not found' });
    console.log("Deletion Confirmation:", deletedDist);
    res.status(200).json({ message: 'Distributor deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});









export default router;
