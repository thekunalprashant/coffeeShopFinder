const mongoose = require('mongoose');

const coffeeShopSchema = mongoose.Schema({
  name: { type: String, required: true, unique:true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  images: [String],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);

module.exports = CoffeeShop;
