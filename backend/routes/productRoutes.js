const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /products/:storeName - List products for a store
router.get('/:storeName', async (req, res) => {
  try {
    const { storeName } = req.params;
    const products = await Product.find({ storeName });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
