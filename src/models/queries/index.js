module.exports.allBooks = 'SELECT * FROM books'

module.exports.saveBook = `INSERT INTO books VALUES ($1, $2, $3, $4, $5, $6)`
