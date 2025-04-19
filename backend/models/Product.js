const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  storeName: String, // reference by name
});

module.exports = mongoose.model('Product', productSchema);
