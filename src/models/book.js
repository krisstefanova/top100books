const sql = require('../lib/sql.js')
const queries = require('./queries')

const getAllBooks = async function() {
  const books = await sql(queries.allBooks)
  return books.rows
}

const saveBook = async function(id, title, author, rating, count, img) {
  let success
  const res = await sql(queries.saveBook, [id, title, author, rating, count, img])
  if (res.rowCount === 1) {
    console.log('Inserted successfully')
    success = 1
  } else {
    console.log('Nothing was inserted')
    success = 0
  }
  
  return success
}

module.exports = {
  getAllBooks,
  saveBook
}