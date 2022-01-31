const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'SCCovid',
  multipleStatements: true
})

mysqlConnection.connect(function (err) {
  if (err) {
    throw err
  } else {
    console.log('db is connected')
  }
})

module.exports = mysqlConnection
