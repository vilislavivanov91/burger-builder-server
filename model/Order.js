const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  ingredients: {
    meat: {
      type: Number,
      required: true,
    },
    bacon: {
      type: Number,
      required: true,
    },
    cheese: {
      type: Number,
      required: true,
    },
    salad: {
      type: Number,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Order', orderSchema);
