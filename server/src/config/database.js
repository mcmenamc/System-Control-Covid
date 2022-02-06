const mysql = require('mysql2');
const colors = require('colors');

// database localhost
const pol = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
  charset: 'utf8mb4',
  timezone: 'Z',
  dateStrings: true,
  typeCast: true,
  debug: false,
  multipleStatements: true,
});

const mysqlConnection = pol.promise();


module.exports = mysqlConnection;



