const fetch = require('node-fetch')
const xml2js = require("xml2js").parseString
const queryString = require("query-string")

async function getGoodReadsStats(searchBook) {
  const query = queryString.stringify({q:searchBook})

  const url = `${process.env.GOODREADS_URL}/search.xml?key=${process.env.GOODREADS_KEY}&q=${query}`
  const res = await fetch(url)
  const book = await xmlToJson(res)
  
  return presentBook(book)
}

async function xmlToJson(res) {
  const xml = await res.text()
  let json
  
  xml2js(xml, function (err, result) {
    json = result
  })
  
  return json
}

function presentBook(goodReadsData) {
  let bookDetails = {}
  const bookData = goodReadsData.GoodreadsResponse.search[0].results[0].work[0]
  
  bookDetails.bookId = bookData.id[0]._
  bookDetails.title = bookData.best_book[0].title[0]
  bookDetails.author = bookData.best_book[0].author[0].name[0]
  bookDetails.authorId = bookData.best_book[0].author[0].id[0]._
  bookDetails.rating = bookData.average_rating[0]
  bookDetails.ratingsCount = bookData.ratings_count[0]._
  bookDetails.reviewsCount = bookData.text_reviews_count[0]._
  bookDetails.publicationYear = bookData.original_publication_year[0]._
  bookDetails.publicationMonth = bookData.original_publication_month[0]._
  bookDetails.publicationDay = bookData.original_publication_day[0]._
  bookDetails.image = bookData.best_book[0].image_url[0]
  bookDetails.smallImage = bookData.best_book[0].small_image_url[0]
  
  return bookDetails
}

module.exports = {
  getGoodReadsStats
}
