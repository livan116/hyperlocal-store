const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');

// POST /cart/checkout - Place order
router.post('/checkout', async (req, res) => {
  try {
    const { name, cartItems } = req.body;

    let total = 0;
    for (const item of cartItems) {
      const product = await Product.findById(item.productId);
      if (!product) return res.status(400).json({ error: 'Product not found' });

      total += product.price * item.quantity;

      // Optional: Update product quantity
      product.quantity -= item.quantity;
      await product.save();
    }

    const order = new Order({ name, cartItems, total });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ error: 'Failed to place order' });
  }
});

module.exports = router;
