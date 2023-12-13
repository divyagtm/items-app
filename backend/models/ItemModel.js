const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  } 
}, { timestamps: true });

module.exports = mongoose.model('items', itemsSchema);
