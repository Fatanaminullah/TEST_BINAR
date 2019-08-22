const mysql = require('mysql')

const connect = mysql.createConnection({
    user: 'root',
    password : 'mysql1234',
    host : 'localhost',
    database : 'test_binar',
    port : '3306'
})

module.exports = connect