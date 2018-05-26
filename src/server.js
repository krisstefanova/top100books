const express = require('express')
const routes = require('./routes')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8087

app.use('/api', routes)

app.listen(port)
console.log(`Listening ska-punk on port ${port}. Don't be shy, join!`)

module.exports = app
