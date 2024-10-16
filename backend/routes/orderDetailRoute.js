import express from 'express';
import mongoose from 'mongoose';
import { OrderDetail } from '../models/OrderDetail.js'; // Assuming Orders model is already defined
const router = express.Router();

// CREATE: Add a new order entry
router.post('/', async (req, res) => {
  try {
    const newOrderDetail = new OrderDetail(req.body); 
    console.log("Insert Request Reached at Route", newOrderDetail);
    const savedOrderDetail = await newOrderDetail.save();
    console.log("Confirmation of Save:", savedOrderDetail);
    res.status(201).json(savedOrderDetail); // Respond with the saved order object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ: Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await OrderDetail.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ: Get a specific order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await OrderDetail.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE: Update an order by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await OrderDetail.findByIdAndUpdate(
      req.params.id,
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete an order by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedOrder = await OrderDetail.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
