const express = require('express');
const server_conn = require('./Connections/Server_Conn');
const DB_conn =  require('./Connections/DB_Conn');
const category = require('./Database/Category');
const product = require('./Database/Product');
const category_api_call = require('./API_Calls/Category_API_Calls');
const product_api_call = require('./API_Calls/Product_API_Call');
const payment_api_call = require('./payment_api_call');
const resturant_table_api_call =require('./resturant_table_api_call')

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


// Payment-related API routes
server_connection.post('/add_new_payment', payment_api_call.add_new_payment);
server_connection.post('/get_payments_by_amount', payment_api_call.getPaymentsByAmount);
server_connection.post('/get_payments_by_year', payment_api_call.getPaymentsByYear);
server_connection.post('/get_payments_by_month', payment_api_call.getPaymentsByMonth);
server_connection.post('/get_payments_by_day', payment_api_call.getPaymentsByDay);
server_connection.post('/delete_payment_by_id', payment_api_call.deletePaymentById);
server_connection.post('/delete_payment_by_customer_order_id', payment_api_call.deletePaymentByCustomerOrderId);

// Table-related API routes
server_connection.post('/add_new_table',resturant_table_api_call.addNewTable);
server_connection.post('/get_table_by_number', resturant_table_api_call.getTableByNumber);
server_connection.post('/update_table_status', resturant_table_api_call.updateTableStatus);
server_connection.post('/delete_table_by_number', resturant_table_api_call.deleteTableByNumber);
