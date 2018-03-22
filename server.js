const express = require('express')

let app = express()
let port = process.env.PORT || 8087

app.get("/", (req, res) => res.json({message: "Welcome to this delicious and very vast book widget!"}))

app.listen(port)
console.log(`Listening ska-punk on port ${port}. Don't be shy, join!`)

module.exports = app
