const fetch = require('node-fetch')
const xml2js = require("xml2js").parseString
const queryString = require("query-string")

async function getGoodReadsStats(searchBook) {
  const query = queryString.stringify({q:searchBook})

  const url = `${process.env.GOODREADS_URL}/search.xml?key=${process.env.GOODREADS_KEY}&q=${query}`
  const res = await fetch(url);
  const xml = await res.text();
  
  let json
  xml2js(xml, function (err, result) {
    json = result
  });

  const book = json.GoodreadsResponse.search[0].results[0].work[0]
  console.log(book);
  
  return book
}

module.exports = {
  getGoodReadsStats
}
