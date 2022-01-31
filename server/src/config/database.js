const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
<<<<<<< HEAD
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'SCCovid',
  multipleStatements: true
})
=======
  host: "localhost",
  user: "root",
  password: "",
  database: "kraid",
  multipleStatements: true,
});
>>>>>>> 7f967f190571cb73dee87149b9441e42835e331d

mysqlConnection.connect(function (err) {
  if (err) {
    throw err
  } else {
    console.log('db is connected')
  }
})

module.exports = mysqlConnection
