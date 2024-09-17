const express = require('express');
const server_conn = require('./Server_Conn');
const DB_conn =  require('./DB_Conn');
const category = require('./Category');
const product = require('./Product');
const category_api_call = require('./Category_API_Calls');


const bodyParser = require('body-parser');
server_conn.use(bodyParser.json());



server_conn.post ('/add_new_category', category_api_call.insert_category_call);
server_conn.post ('get_category_data', category_api_call.get_all_category_call);
server_conn.post ('/get_category_data_by_name', category_api_call.get_all_category_by_name_call);
