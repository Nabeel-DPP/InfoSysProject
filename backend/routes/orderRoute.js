import express from 'express';
import mongoose from 'mongoose';
import { Orders } from '../models/Orders.js'; // Assuming Orders model is already defined
const router = express.Router();

// CREATE: Add a new order entry
// router.post('/placeOrder/', async (req, res) => {
//   try {
//     console.log("Place Order Body",req.body)
//     const newOrders = new Orders(req.body); 
//     console.log("Insert Request Reached at Order Route", newOrders);
//     const savedOrders = await newOrders.save();
//     console.log("Confirmation of Save:", savedOrders);
//     res.status(201).json(savedOrders); // Respond with the saved order object
//   }
//   catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });



router.post('/placeOrder/', async (req, res) => {
  try {
    const { formData, bankData } = req.body; // Destructure formData and bankData from the request body

    console.log("Place Order Body", req.body);

    // Log the extracted data for debugging
    console.log("Form Data:", formData);
    console.log("Bank Data:", bankData);

    // Combine or process the data as needed for the `Orders` model
    const newOrder = new Orders({
      ...formData, // Spread the fields from formData
      bankDetails: bankData // Add bankData to a specific field (e.g., 'bankDetails')
    });

    console.log("Insert Request Reached at Order Route", newOrder);

    // Save the new order to the database
    // const savedOrder = await newOrder.save();
    console.log("Confirmation of Save:", savedOrder);

    // Respond with the saved order object
    res.status(201).json(savedOrder);
  } catch (err) {
    console.error("Error while saving the order:", err.message);
    res.status(400).json({ message: err.message });
  }
});




router.post('/', async (req, res) => {
  try {
    const newOrders = new Orders(req.body); 
    console.log("Insert Request Reached at Order Route", newOrders);
    const savedOrders = await newOrders.save();
    console.log("Confirmation of Save:", savedOrders);
    res.status(201).json(savedOrders); // Respond with the saved order object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




router.get('/latest', async (req, res) => {

  try {
    console.log("Request Reached at Order Route !!");
    // const latestOrder = await Orders.findOne({OrderId:9000}) // Sort by OrderId in descending order and get the first document
    const latestOrder = await Orders.findOne().sort({ OrderId: -1 });
    if (!latestOrder) {
      return res.status(404).json({ message: "No orders found" }); // Handle case when no order is found
    }

    // Send just the OrderId in the response
    // res.json({ latestOrderId: latestOrder.OrderId });
  res.json({ latestOrderId: latestOrder.OrderId });
  } catch (error) {
    res.status(500).json({ message: "Error fetching latest OrderId" });
  }
});








// READ: Get all orders entries
router.get('/', async (req, res) => {
  try {
    const orders = await Orders.find();
    
    res.status(200).json(orders); // Respond with the list of orders
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific order entry by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Orders.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order); // Respond with the specific order object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an existing order entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
    console.log("Update Confirmation:", updatedOrder);
    res.status(200).json(updatedOrder); // Respond with the updated order object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete an order entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedOrder = await Orders.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: 'Order not found' });
    console.log("Deletion Confirmation:", deletedOrder);
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




export default router;
