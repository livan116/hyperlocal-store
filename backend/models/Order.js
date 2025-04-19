const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  cartItems: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      quantity: Number,
    }
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
