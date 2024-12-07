import express from 'express';
import { ProductLog } from '../models/ProductLog.js';
import { Product } from '../models/Product.js'; // Assuming ProductLog model is defined
const router = express.Router();

//Sir Logic for Bonus Scheme 

router.put('/prod_id/:id', async (req, res) => {
  try {
    const prod_id = req.params.id; // Extract prod_id from the route parameter
    const { bonus_scheme, bonus_units , fp , tp , mrp } = req.body; // Extract updated values from the request body
    console.log("Request Reached at prod_id route");

    // Step 1: Find all logs for the given product ID
    const productLogs = await ProductLog.find({ prod_id });

    let matchedLog = null;

    // Step 2: Check if any existing log matches the provided values (bonus_scheme, bonus_units)
    for (let log of productLogs) {
  
      if (
        log.bonus_scheme == bonus_scheme &&
        log.bonus_units ==bonus_units && log.fp == fp && log.tp == tp && log.mrp == mrp
      ) {
        matchedLog = log;
        console.log("All Conditions are True");
        break;
      }
    }

    if (matchedLog) {
      // Step 3: Update the matched log to `log_status: 1` and reset others to `log_status: 0`
      await ProductLog.updateMany({ prod_id }, { $set: { log_status: 0 } }); // Reset all logs

      // Set the log_status to 1 for the matched log
      matchedLog.log_status = 1;
      await matchedLog.save();
      console.log("Updated Log:", matchedLog);

      return res.status(200).json({
        message: 'Matching log updated successfully',
        data: matchedLog,
      });
    } else {
      // Step 4: Prepare data for the new log

      // Find the active log to copy `fp`, `tp`, `mrp`, and `type`
      const activeLog = productLogs.find(log => log.log_status === 1);
      if (!activeLog) {
        return res.status(404).json({ message: 'No active log found' });
      }

      const { fp, tp, mrp, type } = activeLog; // Extract from the active log

      // Increment `prod_log_id` (use a counter collection or fetch max value from ProductLog)
      const maxProdLogId = await ProductLog.findOne({}).sort({ prod_log_id: -1 }).select('prod_log_id');
      const prod_log_id = maxProdLogId ? maxProdLogId.prod_log_id + 1 : 1;

      // Increment `scheme_id` based on the active log
      const scheme_id = activeLog.scheme_id + 1;

      // Step 5: Reset all `log_status` to 0 for the current product
      await ProductLog.updateMany({ prod_id }, { $set: { log_status: 0 } });

      // Step 6: Create a new log with `remarks` set to "Bonus Scheme Change"
      const parsedEntryDate = req.body.entry_date
        ? new Date(req.body.entry_date.split('-').reverse().join('-')) // Convert from DD-MM-YY to Date
        : new Date(); // Default to current date if not provided

      const newLog = new ProductLog({
        prod_log_id,
        prod_id,
        scheme_id,
        bonus_scheme,
        bonus_units,
        fp, // From the active log
        tp, // From the active log
        mrp, // From the active log
        entry_date: parsedEntryDate, // Parsed date or current date
        remarks: 'Bonus Scheme Change', // Remarks
        type, // From the active log
        log_status: 1, // Set log_status to 1 for the newly created log
      });

      // Set the current timestamp
      await newLog.save();
      console.log("New Product Log Created:", newLog);

      

      return res.status(201).json({
        message: 'New log created successfully',
        data: newLog,
      });

     
    }
  } catch (error) {
    console.error('Error handling product logs:', error);
    res.status(500).json({
      message: 'Error handling product logs',
      error: error.message,
    });
  }
});


//New Logic by Sir Amir to Update FP TP MRP 
//Final Director's Cut 
router.put('/price/:id', async (req, res) => {
  try {
    const prod_id = req.params.id; // Extract prod_id from the route parameter
    const { fp, tp, mrp, entry_date , base , bonus} = req.body; // Extract updated values from the request body
    console.log("Request Reached at merged route");

    // Parse entry_date to a valid Date object using moment
    const parsedEntryDate = entry_date
      ? moment(entry_date, 'DD-MM-YY').toDate() // Parse with moment
      : new Date(); // Default to current date if not provided

    if (!parsedEntryDate || isNaN(parsedEntryDate)) {
      return res.status(400).json({ message: 'Invalid entry_date format' });
    }

    // Step 1: Find all logs for the given product ID
    const productLogs = await ProductLog.find({ prod_id });

    let matchedLog = null;

    // Step 2: Check if any existing log matches the provided fp, tp, and mrp values
    for (let log of productLogs) {
      if (log.fp === fp && log.tp === tp && log.mrp === mrp && log.bonus_scheme === base && log.bonus_units==bonus) {
        matchedLog = log;
        break;
      }
    }

    if (matchedLog) {
      // Step 3: Update the matched log to `log_status: 1` and reset others to `log_status: 0`
      await ProductLog.updateMany({ prod_id }, { $set: { log_status: 0 } }); // Reset all logs
      matchedLog.log_status = 1;
      matchedLog.entry_date = parsedEntryDate; // Update the entry_date to the parsed date
      await matchedLog.save();
      console.log("Updated Log:", matchedLog);
      return res.status(200).json({
        message: 'Matching log updated successfully',
        data: matchedLog,
      });
    } else {
      // Step 4: Handle case where no matching log is found and create a new log

      // Find the active log for the product (log_status: 1)
      const activeLog = productLogs.find(log => log.log_status === 1);

      // Increment prod_log_id (get the highest prod_log_id and increment)
      const maxProdLogId = await ProductLog.findOne({}).sort({ prod_log_id: -1 }).select('prod_log_id');
      const prod_log_id = maxProdLogId ? maxProdLogId.prod_log_id + 1 : 1;

      // Increment scheme_id based on the active log
      const scheme_id = activeLog ? activeLog.scheme_id + 1 : 1;

      // Set bonus_scheme, bonus_units, and type from the active log if it exists, otherwise default values
      const bonus_scheme = activeLog ? activeLog.bonus_scheme : 0;
      const bonus_units = activeLog ? activeLog.bonus_units : 0;
      const type = activeLog ? activeLog.type : 0;

      // Step 5: Reset all logs for the product to log_status: 0 and create a new log
      await ProductLog.updateMany({ prod_id }, { $set: { log_status: 0 } });

      const newLog = new ProductLog({
        prod_log_id,
        prod_id,
        scheme_id,
        bonus_scheme,
        bonus_units,
        fp,
        tp,
        mrp,
        entry_date: parsedEntryDate, // Set the parsed entry_date here
        remarks: 'Price Change',
        type,
        log_status: 1,
      });

      await newLog.save();
      console.log("New Log Created:", newLog);

      const currentDate = new Date(); // Or parsed date
      console.log("Hello",currentDate);

const updatedProduct = await Product.findOneAndUpdate(
  { prod_id },
  { $set: { change_price_date: currentDate } },
  { new: true } // Return the updated document
);
if (!updatedProduct) {
  return res.status(404).json({ message: 'Product not found' });
}
console.log("Updated Product:", updatedProduct);

      return res.status(201).json({
        message: 'New log created successfully',
        data: newLog,
      });
    }
  } catch (error) {
    console.error('Error handling product logs:', error);
    res.status(500).json({
      message: 'Error handling product logs',
      error: error.message,
    });
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
