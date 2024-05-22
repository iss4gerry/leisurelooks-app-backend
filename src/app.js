const express = require('express')
const router = require('./routes/index')
const errorHandler = require('./middlewares/error')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.send('Hello World')
}) 

app.use(router);
app.use(errorHandler);

module.exports = app;
