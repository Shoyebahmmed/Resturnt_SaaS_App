const express = require('express');
const server_conn = require('./Connections/Server_Conn');
const DB_conn =  require('./Connections/DB_Conn');
const category = require('./Database/Category');
const product = require('./Database/Product');
const category_api_call = require('./API_Calls/Category_API_Calls');
const product_api_call = require('./API_Calls/Product_API_Call');
const payment_api_call = require('./API_Calls/Payment_API_Call');
const resturant_table_api_call =require('./API_Calls/Resturant_Table_API_Call')
const customer_order_api_call = require('./API_Calls/Customer_Order_API_Call');
const order_item_api_call = require('./API_Calls/Order_Item_API_Call');

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



// Customer order Api


server_connection.post('/insert_customer_order', customer_order_api_call.insert_customer_order_call);
server_connection.post('/get_customer_order', customer_order_api_call.get_customer_order_call);
server_connection.post('/get_customer_order_by_rest_table_id', customer_order_api_call.get_customer_order_by_rest_table_id);
server_connection.post('/get_customer_order_by_time_range', customer_order_api_call.get_customer_order_by_time_range);
server_connection.post('/get_customer_order_by_min_amount', customer_order_api_call.get_customer_order_by_min_amount);
server_connection.post('/update_order_amount', customer_order_api_call.update_order_amount_call);
server_connection.post('/delete_customer_order', customer_order_api_call.delete_customer_order_call);

// Order Id API

server_connection.post('/add_order_item', order_item_api_call.add_order_item_call);
server_connection.get('/order_item/:order_id', order_item_api_call.read_customer_order_by_order_id_call);
server_connection.get('/cust_order/:cust_order_id', order_item_api_call.read_customer_order_by_cust_order_id_call);
server_connection.get('/product/:product_id', order_item_api_call.read_customer_order_by_product_id_call);
server_connection.get('/quantity/:quantity', order_item_api_call.read_customer_order_by_quantity_call);
server_connection.get('/price/:price', order_item_api_call.read_customer_order_by_price_call);
server_connection.put('/update_product', order_item_api_call.update_product_id_by_previous_product_id_call);
server_connection.put('/update_quantity', order_item_api_call.update_quantity_by_previous_quantity_call);
server_connection.delete('/delete_order/:order_id', order_item_api_call.delete_order_id_call);
