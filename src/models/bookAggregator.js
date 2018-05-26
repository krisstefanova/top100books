module.exports = function(books) {
  const booksCopy = Object.assign({}, books)
  
  let aggregatedBooks = aggregateHelper(books, 'Harry Potter')
  aggregatedBooks = aggregateHelper(aggregatedBooks, 'Lord of the Rings')
  
  return aggregatedBooks
}

const aggregateHelper = function (books, bookToAggregate) {
  let initialBookSet = false
  let aggreagtedBooks = []
  
  for (let i = 0; i < books.length; i++) {
    let book = books[i]
    aggreagtedBooks.push(book)
    
    if (initialBookSet && book.title.includes(bookToAggregate)) {
      aggreagtedBooks.pop(book)
      continue
    }

    if (book.title.includes(bookToAggregate)) {
      book.title = `${bookToAggregate} Series`
      initialBookSet = true
    }
  }
  
  return aggreagtedBooks
}
