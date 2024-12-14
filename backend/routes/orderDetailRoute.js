import express from 'express';
import mongoose from 'mongoose';
import { OrderDetail } from '../models/OrderDetail.js'; // Assuming Orders model is already defined
const router = express.Router();

// CREATE: Add a new order entry
router.post('/placeOrder/', async (req, res) => {
  try {
    const { orderId, selectedProducts , orderDetailID } = req.body;
    // Attach OrderId to products

    console.log("Request is Finally Reached at Order Detail Route to Place Order ");
    console.log("order id is :" , orderId);
    console.log("Products are coming :",selectedProducts);
   

    // const productsWithOrderId = selectedProducts.map(product => ({
    //   ...product,
    //   order_id: orderId,
    //   orderDetailID 
    // }));



    let currentOrderDetailID = orderDetailID; // Starting value for orderDetailID

    const productsWithOrderId = selectedProducts.map(product => {
      currentOrderDetailID++; // Increment orderDetailID in each iteration
      return {
        ...product,
        order_id: orderId,
        orderDetailID: currentOrderDetailID
      };
    });
    












    console.log("Order ID and Detail ID  is attached with Products: " , productsWithOrderId);

    // Save order and products (Example: Using MongoDB)
  
    await OrderDetail.insertMany(productsWithOrderId); // Save products

    res.status(201).json({ message: 'Order and products saved successfully!' });
  } catch (error) {
    console.error('Error saving order and products:', error);
    res.status(500).json({ message: 'Failed to save data', error });
  }
});






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


router.get('/latest/', async (req, res) => {
  try {
    console.log("Fetching latest Order ID...");
    const latestOrderDetail = await OrderDetail.findOne().sort({ orderDetailID: -1 }).select('orderDetailID');
    const newOrderDetailId = latestOrderDetail ? latestOrderDetail.orderDetailID : 9001; // Fallback to 9001 if no orders exist
    console.log("We found latest order detali id : " , newOrderDetailId);
    res.json({ latestOrderDetailId: newOrderDetailId });
  } catch (error) {
    console.error("Error fetching latest OrderId:", error);
    res.status(500).json({ message: "Server error fetching Order ID" });
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
