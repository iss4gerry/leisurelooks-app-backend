const express = require('express')
const router = express.Router()
const authRouter = require('./auth-route')
const productRoute = require('./product-route')

const defaultRoutes = [
    {
        path: '/auth',
        route: authRouter,
    },
    {
        path: '/product',
        route: productRoute
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router