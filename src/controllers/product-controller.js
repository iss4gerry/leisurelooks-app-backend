const httpStatus = require('http-status')
const catchAsync = require("../utils/catchAsync")
const productService = require('../services/product-service')

const addProduct = catchAsync(async (req, res) => {
    const result = await productService.addProduct(req.body)
    res.status(httpStatus.OK).send({
        status: httpStatus.OK,
        message:  'Success',
        data: result
    })
})

const getAllProduct = catchAsync(async (req, res) => {
    const result = await productService.getAllProduct()
    res.status(httpStatus.OK).send({
        status: httpStatus.OK,
        message:  'Success',
        data: result
    })
})

const getProductById = catchAsync(async (req, res) => {
    const result = await productService.getProductById(req.params.productId)
    res.status(httpStatus.OK).send({
        status: httpStatus.OK,
        message:  'Success',
        data: result
    })
})

const updateProduct = catchAsync(async (req, res) => {
    const result = await productService.updateProduct(req.params.productId, req.body)
    res.status(httpStatus.OK).send({
        status: httpStatus.OK,
        message:  'Success',
        data: result
    })
})

const deleteProduct = catchAsync(async (req, res) => {
    const result = await productService.deleteProduct(req.params.productId)
    res.status(httpStatus.OK).send({
        status: httpStatus.OK,
        message:  'Success',
        data: result
    })
})

module.exports = {
    addProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}