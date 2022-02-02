const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sistemacontrolcovid",
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
