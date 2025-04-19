const express = require('express');
const router = express.Router();
const Store = require('../models/Store');

// GET /stores - List all stores
router.get('/', async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stores' });
  }
});

module.exports = router;
