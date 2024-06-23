const Product = require('../models/Product');
const CoffeeShop = require('../models/CoffeeShop');

const getProductsByShop = async (req, res) => {
  try {
    const products = await Product.find({ shop: req.params.shopId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProductToShop = async (req, res) => {
  const { name, price, category } = req.body;
  const shopId = req.params.shopId;

  try {
    const shop = await CoffeeShop.findById(shopId);

    if (shop) {
      const product = new Product({
        name,
        price,
        category,
        shop: shopId
      });

      const createdProduct = await product.save();
      shop.products.push(createdProduct._id);
      await shop.save();

      res.status(201).json(createdProduct);
    } else {
      res.status(404).json({ message: 'Coffee Shop not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { name, price, category } = req.body;

  try {
    const product = await Product.findById(req.params.productId);

    if (product) {
      product.name = name;
      product.price = price;
      product.category = category;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (product) {
      await product.remove();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductsByShop,
  addProductToShop,
  updateProduct,
  deleteProduct
};
