import express from 'express';
import { ProductLog } from '../models/ProductLog.js';  // Assuming ProductLog model is defined
const router = express.Router();

// CREATE: Add a new product log
router.put('/prod_id/:id', async (req, res) => {
  try {
    const prod_id = req.params.id; // Extract prod_id from the route parameter
    const { bonus_scheme, bonus_units } = req.body; // Extract updated values from the request body
   
    // Find the document with the specified prod_id and update the values
    const updatedProductLog = await ProductLog.findOneAndUpdate(
      { prod_id, log_status: 1 }, // Query to find the document by prod_id
      { $set: { bonus_scheme, bonus_units } }, // Fields to update
      { new: true, runValidators: true } // Options: return the updated document
    );

    if (!updatedProductLog) {
      return res.status(404).json({ message: 'Product log not found' });
    }
   
    res.status(200).json({ message: 'Product log updated successfully', data: updatedProductLog });
  } catch (error) {
    console.error('Error updating product log:', error);
    res.status(500).json({ message: 'Error updating product log', error: error.message });
  }
});




//For inserting the values of FP and TP
router.put('/price/:id', async (req, res) => {
  try {
    const prod_id = req.params.id; // Extract prod_id from the route parameter
    const { fp, tp } = req.body; // Extract updated values from the request body
    
    // Find the document with the specified prod_id and update the values
    const updatedProductLog = await ProductLog.findOneAndUpdate(
      { prod_id, log_status: 1 }, // Query to find the document by prod_id
      { $set: { fp, tp } }, // Fields to update
      { new: true, runValidators: true } // Options: return the updated document
    );

    if (!updatedProductLog) {
      return res.status(404).json({ message: 'Product log not found' });
    }
    console.log("Updated Log:" , updatedProductLog);
    res.status(200).json({ message: 'Product log updated successfully', data: updatedProductLog });
  } catch (error) {
    console.error('Error updating product log:', error);
    res.status(500).json({ message: 'Error updating product log', error: error.message });
  }
});











router.post('/', async (req, res) => {
  try {
    const newProductLog = new ProductLog(req.body); 
   
    const savedProductLog = await newProductLog.save();
    console.log("Confirmation of Save:", savedProductLog);
    res.status(201).json(savedProductLog); // Respond with the saved product log object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get('/logTable/:prod_id', async (req, res) => {
  try {
    const prod_id = req.params.prod_id; // Extract prod_id from the route parameter

    // Fetch all records with the matching prod_id
    const productLogs = await ProductLog.find({ prod_id });

    if (!productLogs || productLogs.length === 0) {
      return res.status(404).json({ message: 'No logs found for the specified product ID' });
    }

    res.status(200).json(productLogs); // Respond with the list of logs
  } catch (error) {
    console.error('Error fetching product logs:', error);
    res.status(500).json({ message: 'Error fetching product logs', error: error.message });
  }
});


router.get('/prod_id/:id', async (req, res) => {
  try {
    const p_id = req.params.id; // Extract the product ID from the route parameter
    const productLog = await ProductLog.find({ prod_id: p_id, log_status: 1 }); // Query by prod_id and log_status

  
    if (!productLog || productLog.length === 0) { // Check if no records are found
      return res.status(404).json({ message: 'Product log not found' });
    }

    res.json(productLog); // Respond with the found product log(s)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// READ: Get all product logs
router.get('/', async (req, res) => {
  try {
    const productLogs = await ProductLog.find(); // Fetch all product logs
    res.json(productLogs); // Respond with the product logs array
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific product log by ID
router.get('/:id', async (req, res) => {
  try {
    const productLog = await ProductLog.findById(req.params.id); // Fetch product log by ID
    if (!productLog) {
      return res.status(404).json({ message: 'Product log not found' });
    }
    res.json(productLog); // Respond with the found product log
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update a specific product log by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProductLog = await ProductLog.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update and return the updated product log
    if (!updatedProductLog) {
      return res.status(404).json({ message: 'Product log not found' });
    }
    res.json(updatedProductLog); // Respond with the updated product log
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Remove a specific product log by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProductLog = await ProductLog.findByIdAndDelete(req.params.id); // Delete product log by ID
    if (!deletedProductLog) {
      return res.status(404).json({ message: 'Product log not found' });
    }
    res.json({ message: 'Product log deleted successfully' }); // Respond with success message
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
