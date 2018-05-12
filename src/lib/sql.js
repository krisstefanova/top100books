require('dotenv').config()
const { Client } = require('pg')
const connectionString = process.env.DATABASE_URL

module.exports = async function (query, params) {
  const client = new Client(connectionString)
  await client.connect()
  const res = await client.query(query, params)
  await client.end()
  
  return res
}
