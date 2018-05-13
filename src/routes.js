let express = require('express')
let bookStatsController = require('./controllers/bookStatsController')

let router = express.Router()

router.route('/').get((req, res) => {
  return res.json({message: "Welcome to this delicious and very vast book service!"})
})

router.route('/searchBook').get(bookStatsController.searchBook)

router.route('/getTopBooks').get(bookStatsController.getTopBooks)

module.exports = router
