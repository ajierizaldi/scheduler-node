require('dotenv').config()
const mysql = require('mysql2/promise')

const dbConfig = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

module.exports = dbConfig