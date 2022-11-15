require('dotenv').config()
const express = require('express')
const cors = require('cors')
const database = require('../config/database')
const router = require('./routes')
const db = require('../models')

// -----------------------------------------------------------------------------

const app = express()
const port = process.env.DB_PORT || 5000

try {
  database.authenticate()
  console.log('Database connected...')
} catch (error) {
  console.error('Connection error: ', error)
}

app.use(cors())
app.use(express.json())
app.use('/product', router)

app.listen(port, () => console.log(`Server running at port ${port}`))

/**
 * create database table for first run
 * turn off after database table created
 */

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Db')
})
