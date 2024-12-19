import express from 'express';
import mongoose from 'mongoose';
import { OrderDetail } from '../models/OrderDetail.js'; // Assuming Orders model is already defined
const router = express.Router();

// CREATE: Add a new order entry Perfect Route for Placing Order
router.post('/placeOrder/', async (req, res) => {
  try {
    const { orderId, selectedProducts , orderDetailID } = req.body;
    // Attach OrderId to products

    console.log("Request is Finally Reached at Order Detail Route to Place Order ");
    console.log("order id is :" , orderId);
    console.log("Products are coming :",selectedProducts);
   




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

    
  
    await OrderDetail.insertMany(productsWithOrderId); // Save products

    res.status(201).json({ message: 'Order and products saved successfully!' });
  } catch (error) {
    console.error('Error saving order and products:', error);
    res.status(500).json({ message: 'Failed to save data', error });
  }
});




//Order Placement with Quota Logic 
// router.post('/placeOrder', async (req, res) => {

//   //selectedProducts Array should also come
//   try {
//     const { distId, areaId, productId, baseUnits, orderDate } = req.body; // Request payload

//     // Define the timeline (e.g., 25 Nov to 25 Dec)
//     const startDate = new Date('2024-11-25'); // Replace with dynamic start date if needed
//     const endDate = new Date('2024-12-25');

//     console.log("Request Reached at Order Detail Route to Place Order ");
//     console.log("Order Details: distId:", distId, ", areaId:", areaId, ", productId:", productId, ", baseUnits:", baseUnits, ", orderDate:", orderDate);

//     // Step 1: Fetch the product quota for the distributor and area
//     const quotaRecord = await ProductQuota.findOne({
//       DistId: distId,
//       AreaId: areaId,
//       QuotaId: productId, // Assuming QuotaId maps to productId
//     });

//     if (!quotaRecord) {
//       return res.status(404).json({ message: 'Quota not found for this product and distributor.' });
//     }

//     const totalQuota = quotaRecord.Quota; // Quota limit for the product

//     // Step 2: Fetch existing orders for this product, distributor, and date range
//     const existingOrders = await OrderDetail.aggregate([
//       {
//         $lookup: {
//           from: 'orders', // Collection name for Orders
//           localField: 'order_id',
//           foreignField: 'OrderId',
//           as: 'order',
//         },
//       },
//       { $unwind: '$order' },
//       {
//         $match: {
//           'order.tblDistId': distId,
//           'order.tblAreaId': areaId,
//           'order.FeedDate': { $gte: startDate, $lte: endDate },
//           prod_id: productId,
//         },
//       },
//       {
//         $group: {
//           _id: null,
//           totalBaseUnits: { $sum: '$base_units' }, // Sum all base units ordered so far
//         },
//       },
//     ]);

//     const alreadyOrderedUnits = existingOrders[0]?.totalBaseUnits || 0; // Units already consumed

//     // Step 3: Calculate remaining quota
//     const remainingQuota = totalQuota - alreadyOrderedUnits;

//     if (remainingQuota <= 0) {
//       return res.status(400).json({
//         message: `Quota exceeded! You cannot order any more units for this product.`,
//         remainingQuota: 0,
//       });
//     }

//     // Step 4: Compare requested baseUnits with remainingQuota
//     const finalBaseUnits = Math.min(baseUnits, remainingQuota);

//     if (finalBaseUnits < baseUnits) {
//       return res.status(200).json({
//         message: `Quota limit reached. Your base units have been adjusted to ${finalBaseUnits}.`,
//         finalBaseUnits,
//       });
//     }

//     // Attach OrderId and orderDetailID to each product
//     const { orderId, selectedProducts, orderDetailID } = req.body; // Assuming selectedProducts is an array

//     let currentOrderDetailID = orderDetailID;  // Starting value for orderDetailID

//     const productsWithOrderId = selectedProducts.map(product => {
//       currentOrderDetailID++;  // Increment orderDetailID for each product
//       return {
//         ...product,
//         order_id: orderId,
//         orderDetailID: currentOrderDetailID,
//         base_units: finalBaseUnits,  // Apply the final base units after quota check
//       };
//     });

//     console.log("Products with Order ID and Final Base Units:", productsWithOrderId);

//     // Step 5: Save the order and order detail in the database
//     const newOrder = await Orders.create({
//       OrderId: orderId, // Provided OrderId
//       tblDistId: distId,
//       tblAreaId: areaId,
//       FeedDate: orderDate,
//       order_value: 0, // Placeholder for total order value
//     });

//     await OrderDetail.insertMany(productsWithOrderId); // Save products with order details to the database

//     return res.status(201).json({
//       message: 'Order placed successfully!',
//       finalBaseUnits,
//     });
//   } catch (error) {
//     console.error('Error placing order:', error);
//     return res.status(500).json({ message: 'Server error occurred.' });
//   }
// });







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
