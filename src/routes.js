let express = require('express')
let bookStatsController = require('./controllers/bookStatsController')

let router = express.Router()

router.route('/').get((req, res) => {
  return res.json({message: "Welcome to this delicious and very vast book service!"})
})

router.route('/getData').get(bookStatsController.getData)

module.exports = router
