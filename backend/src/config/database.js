const mysql = require('mysql2');
const colors = require('colors');

// database 
const pol = mysql.createPool({
  host: 'bqrjcvonizewgi6t1wc0-mysql.services.clever-cloud.com',
  user: 'ufbphoazrmm2qlfp',
  password: 'tFr2f5kkpw2qjlbbOuzc',
  port: 3306,
  database: 'bqrjcvonizewgi6t1wc0',
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



