const httpStatus = require("http-status")
const prisma = require("../../prisma")
const ApiError = require("../utils/apiError")

const getProductById = async (productId) => {
    const result = await prisma.product.findFirst({
        where: { id: productId }
    })

    if(!result){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Product not found')
    }

    return result
}

const addProduct = async (productBody) => {
    const result = await prisma.product.create({
        data: productBody
    })

    return result
}

const getAllProduct = async () => {
    const result = await prisma.product.findMany()

    return result
}

const updateProduct = async (productId, productBody) => {

    await getProductById(productId)

    const result = await prisma.product.update({
        where: { 
            id: productId 
        },
        data : productBody
    })

    return result
}

const deleteProduct = async (productId) => {
    
    await getProductById(productId)

    const result = await prisma.product.delete({
        where: { id: productId }
    })

    return result
}

module.exports = {
    addProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}
