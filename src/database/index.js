const mysql = require('mysql');
const database = require('./config/database.json');
const connection = mysql.createConnection({
    host,
    port,
    user,
    password,
    database,
})

module.exports = connection;