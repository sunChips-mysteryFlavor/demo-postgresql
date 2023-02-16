const express = require('express')

const setupTables = require('./middleware/setupTables')
const tables = require('./models/tables')


const app = express()
const { Client } = require('pg')
const client = new Client({
  port : 5432,
  user: 'mark',
  password: 'mark',
  database: 'products'
})

const createSchema = `CREATE SCHEMA products`

client.connect().then(() => {
  console.log('postgres connected on 5000')

  return setupTables(client, tables);
  })
  .then(() => {
    console.log('queries created');
  });

app.listen(3020)