const express = require('express')
const router = express.Router()
const productController = require('../controllers/product-controller')

router.route('/').post(productController.addProduct).get(productController.getAllProduct)

router.route('/:productId').patch(productController.updateProduct).get(productController.getProductById).delete(productController.deleteProduct)

module.exports = router
