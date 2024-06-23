const CoffeeShop = require('../models/CoffeeShop');

const getCoffeeShops = async (req, res) => {
  try {
    const shops = await CoffeeShop.find().populate('products');
    res.json(shops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoffeeShopById = async (req, res) => {
  try {
    const shop = await CoffeeShop.findById(req.params.id).populate('products');
    if (shop) {
      res.json(shop);
    } else {
      res.status(404).json({ message: 'Coffee Shop not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCoffeeShop = async (req, res) => {
  const { name, location, rating, images } = req.body;

  const shop = new CoffeeShop({
    name,
    location,
    rating,
    images
  });

  try {
    const createdShop = await shop.save();
    res.status(201).json(createdShop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCoffeeShop = async (req, res) => {
  const { name, location, rating, images } = req.body;

  try {
    const shop = await CoffeeShop.findById(req.params.id);

    if (shop) {
      shop.name = name;
      shop.location = location;
      shop.rating = rating;
      shop.images = images;

      const updatedShop = await shop.save();
      res.json(updatedShop);
    } else {
      res.status(404).json({ message: 'Coffee Shop not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCoffeeShop = async (req, res) => {
  try {
    const shop = await CoffeeShop.findById(req.params.id);

    if (shop) {
      await shop.remove();
      res.json({ message: 'Coffee Shop removed' });
    } else {
      res.status(404).json({ message: 'Coffee Shop not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCoffeeShops,
  getCoffeeShopById,
  createCoffeeShop,
  updateCoffeeShop,
  deleteCoffeeShop
};
