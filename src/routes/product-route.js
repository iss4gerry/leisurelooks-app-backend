const express = require('express')
const router = express.Router()
const auth  = require('../middlewares/auth')
const productController = require('../controllers/product-controller')

router
    .route('/')
    .post(auth.verifyToken, productController.addProduct)
    .get(productController.getAllProduct)

router
    .route('/:productId')
    .patch(auth.verifyToken, productController.updateProduct)
    .get(productController.getProductById)
    .delete(auth.verifyToken, productController.deleteProduct)

module.exports = router
