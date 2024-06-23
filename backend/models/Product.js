const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true, unique:true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  shop: { type: mongoose.Schema.Types.ObjectId, ref: 'CoffeeShop' }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
