const httpStatus = require('http-status')
const authService = require('../services/auth-service')

const register = async (req, res) => {
    try {
        const result = await authService.register(req.body)

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message:  'Success',
            data: result
        })
    } catch (error) {
        res.status(error.statusCode).send({
            status: error.statusCode,
            message:  error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const result = await authService.login(req.body.email, req.body.password)

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message:  'Success',
            data: result
        })
    } catch (error) {
        res.status(error.statusCode).send({
            status: error.statusCode,
            message:  error.message
        })
    }
}

module.exports = { 
    register, 
    login 
}