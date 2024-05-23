const express = require('express')
const router = express.Router()
const auth  = require('../middlewares/auth')
const productController = require('../controllers/product-controller')

router.route('/').post(productController.addProduct).get(auth.verifyToken, productController.getAllProduct)

router.route('/:productId').patch(productController.updateProduct).get(productController.getProductById).delete(productController.deleteProduct)

module.exports = router
