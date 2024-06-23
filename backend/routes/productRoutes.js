const express = require('express');
const {
  getProductsByShop,
  addProductToShop,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const router = express.Router();

router.route('/:shopId/products').get(getProductsByShop).post(addProductToShop);
router
  .route('/:shopId/products/:productId')
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
