const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: "bp6wulm0p3c6phtoalnv-mysql.services.clever-cloud.com",
  user: "uvdegkosk4upmqzt",
  password: "gJ6CTlxDd5gmXyRhbrN4",
  database: "bp6wulm0p3c6phtoalnv",
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    throw err
  } else {
    console.log('base de datos conectada')
  }
})

module.exports = mysqlConnection
