const express = require('express')
const router = require('./routes/index')
const errorHandler = require('./middlewares/error')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(router)
app.use(errorHandler)

module.exports = app