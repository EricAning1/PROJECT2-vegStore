const mongoose = require('mongoose');

const vegSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  inventory: { type: Number, required: true },
  price: { type: String, required: true },
});

const Vegetables = mongoose.model('Vegetables', vegSchema);
module.exports = Vegetables;
