const cheerio = require('cheerio')
const fetch = require('node-fetch')

const main = async function() {
  const url = 'https://www.goodreads.com/list/show/1.Best_Books_Ever'
  const res = await fetch(url)
  const test = await res.text()
  
  let $ = cheerio.load(test)
  let bookList = []
  
  $('#all_votes .tableList tr').each(function(index, el) {
    bookList[index] = {}
    bookList[index]['id'] = $(el).find('div.js-tooltipTrigger.tooltipTrigger').prop('data-resource-id')
    bookList[index]['title'] = $(el).find('.bookTitle [itemprop=name]').text()
    bookList[index]['author'] = $(el).find('.authorName [itemprop=name]').text()
    bookList[index]['rating'] = $(el).find('.minirating').text()
    bookList[index]['img'] = $(el).find('.bookSmallImg').attr('src')
  })
}

main()
