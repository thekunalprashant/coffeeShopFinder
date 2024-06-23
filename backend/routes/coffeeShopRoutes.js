const express = require('express');
const {
  getCoffeeShops,
  getCoffeeShopById,
  createCoffeeShop,
  updateCoffeeShop,
  deleteCoffeeShop
} = require('../controllers/coffeeShopController');

const router = express.Router();

router.route('/').get(getCoffeeShops).post(createCoffeeShop);
router
  .route('/:id')
  .get(getCoffeeShopById)
  .put(updateCoffeeShop)
  .delete(deleteCoffeeShop);

module.exports = router;
