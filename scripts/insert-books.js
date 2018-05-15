const books = require('../docs/listopia_best_books.json')
const bookModel = require('../src/models/book')

const main = function () {
  books.forEach(async (book) => {
    let pattern = /[-+]?[0-9]*\.?[0-9]+/g
    book.rating = book.rating.replace(/,/g, '')
    let rating = book.rating.match(pattern)

    await bookModel.saveBook(book.id, book.title, book.author, rating[0], rating[1], book.img)
  })
}

main()
