const server_conn = require('./Server_Conn');
const mysql = require('mysql2');
const express = require('express');
const app = express();

const connection = mysql.createConnection({

  user: 'root',
  password: '',
  database: 'restaurant_saas_app',
});

  

  module.exports = connection;