const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, unique: false },
});

module.exports = mongoose.model("product", productSchema);

// Every product will have name, price, color, description and ID of category from categories collection.
