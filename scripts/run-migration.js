const Postgrator = require('postgrator')
require('dotenv').config()

const postgrator = new Postgrator({
  migrationDirectory: __dirname + '/migrations',
  driver: 'pg',
  host: '127.0.0.1',
  port: 5432,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: '',
  schemaTable: 'schemaversion'
})

postgrator
  .migrate('max')
  .then(appliedMigrations => console.log(appliedMigrations))
  .catch(error => console.log(error))
