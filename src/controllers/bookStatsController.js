const { getGoodReadsStats } = require('../lib/GoodReadsAPI')

async function getData(req, res) {
  const queryBook = req.query.book
  const bookStats = await getGoodReadsStats(queryBook)
  
  return res.status(200).json({
    status: 200,
    results: bookStats
  })
}

module.exports = {
  getData
}
