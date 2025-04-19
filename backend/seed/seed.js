const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Store = require("../models/Store");
const path = require('path');
const Product = require("../models/Product");

dotenv.config();

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Store.deleteMany();
    await Product.deleteMany();

    const stores = JSON.parse(fs.readFileSync(path.join(__dirname, '../../sample-data/stores.json')));
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../../sample-data/products.json')));
    

    await Store.insertMany(stores);
    await Product.insertMany(products);

    console.log("Database seeded!");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seedData();
