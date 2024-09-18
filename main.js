const express = require('express');
const server_conn = require('./Server_Conn');
const DB_conn =  require('./DB_Conn');
const category = require('./Category');
const product = require('./Product');
const category_api_call = require('./Category_API_Calls');
const product_api_call = require('./Product_API_Call');


const bodyParser = require('body-parser');
server_conn.use(bodyParser.json());



server_conn.post ('/add_new_category', category_api_call.insert_category_call);
server_conn.post ('get_category_data', category_api_call.get_all_category_call);
server_conn.post ('/get_category_data_by_name', category_api_call.get_all_category_by_name_call);
server_conn.post ('/update_category_details', category_api_call.update_category_by_id_call);
server_conn.post ('/delete_category', category_api_call.delete_category_by_id_call);




server_conn.post ('/add_new_product', product_api_call.insert_product_call);
server_conn.post ('/get_product_details', product_api_call.get_all_product_data_call);
server_conn.post ('/get_product_price', product_api_call.get_product_price_call);
server_conn.post ('/get_product_details_by_category_call', product_api_call.get_product_details_by_category_call);
server_conn.post ('/update_product_name', product_api_call.update_product_name_call);
server_conn.post ('/update_product_description', product_api_call.update_product_description_call);
server_conn.post ('/update_product_price', product_api_call.update_product_price_call);
server_conn.post ('/update_product_category', product_api_call.update_product_category_call);
server_conn.post ('/delete_product', product_api_call.delete_product_call);


