const mysql = require('mysql');

const conn = function newConn() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portal_noticias',
  });
};

module.exports = function getConn() {
  return conn;
};
