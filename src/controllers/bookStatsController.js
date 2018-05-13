const { getGoodReadsStats } = require('../lib/GoodReadsAPI')
const bookModel = require('../models/book')

async function searchBook(req, res) {
  const queryBook = req.query.book
  const bookStats = await getGoodReadsStats(queryBook)
  
  return res.status(200).json({
    status: 200,
    results: bookStats
  })
}

async function getTopBooks(req, res) {
  const books = await bookModel.getTopBooks()
  
  return res.status(200).json({
    status: 200,
    results: books
  })
}

module.exports = {
  searchBook,
  getTopBooks
}
