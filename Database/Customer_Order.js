const db_connection= require('../Connections/DB_Conn');

function insert_customer_order(total_amount, rest_table_id){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const cust_order_id = Math.floor(Math.random() * 900000) + 100000;
        const order_time = Date.now();
        const query = 'INSERT INTO customer_order(cust_order_id, rest_table_id, order_time, total_amount) VALUES (?, ?, ?, ?)';
        const customer_order_values = [cust_order_id, rest_table_id, order_time, total_amount];
        db_connection.query(query, customer_order_values, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          
        }
        )
      }
    })
  })
}



function read_customer_order_by_cust_order_id(cust_order_id){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const query = `SELECT * FROM Customer_Order WHERE cust_order_id = ?`;
        const reading_customer_id = [cust_order_id];
        db_connection.query(query, reading_customer_id, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          
        }
        )
      }
    })
  })
}


function read_customer_order_by_rest_table_id(rest_table_id){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const query = 'SELECT * FROM customer_order WHERE rest_table_id = ?';
        const reading_table_id = [rest_table_id];
        db_connection.query(query, reading_table_id, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          
        }
        )
      }
    })
  })
}


function read_customer_order_by_order_time_range(rest_table_id){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const query = `
          SELECT * 
          FROM customer_order 
          WHERE rest_table_id = ? 
          AND order_time BETWEEN DATE_SUB(NOW(), INTERVAL 1 HOUR) AND NOW()`;
        const reading_time_range = [rest_table_id];
        db_connection.query(query, reading_time_range, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          
        }
        )
      }
    })
  })
}


function read_customer_order_by_order_amount(rest_table_id, min_amount) {
  return new Promise((resolve, reject) => {
    db_connection.connect(function (err) {
      if (err) {
        console.log("Query error: ", err);
        reject(err);
      } else {
        // Adjust query based on whether min_amount is provided
        let query;
        let params;

        if (min_amount !== undefined && min_amount !== null) {
          // Filter by min_amount if provided
          query = `
            SELECT * 
            FROM customer_order 
            WHERE rest_table_id = ? 
            AND order_amount >= ?
          `;
          params = [rest_table_id, min_amount];
        } else {
          // No filtering by amount, return all orders for the table
          query = `
            SELECT * 
            FROM customer_order 
            WHERE rest_table_id = ?
          `;
          params = [rest_table_id];
        }

        db_connection.query(query, params, (err, results) => {
          if (err) {
            console.log("Query error: ", err);
            reject(err);
          } else {
            resolve(results);
          }
          
        });
      }
    });
  });
}



function update_order_amount(cust_order_id, new_amount) {
  return new Promise((resolve, reject) => {
    db_connection.connect(function (err) {
      if (err) {
        console.log("Query error: ", err);
        reject(err);
      } else {
        // SQL query to update the order amount
        const query = `
          UPDATE customer_order 
          SET order_amount = ? 
          WHERE cust_order_id = ?
        `;
        const updated_amount = [new_amount, cust_order_id];
        
        db_connection.query(query, updated_amount, (err, result) => {
          if (err) {
            console.log("Query error: ", err);
            reject(err);
          } else {
            resolve(result);
          }
          
        });
      }
    });
  });
}



function delete_cust_order_id(cust_order_id) {
  return new Promise((resolve, reject) => {
    db_connection.connect(function (err) {
      if (err) {
        console.log("Query error: ", err);
        reject(err);
      } else {
        // SQL query to update the order amount
        const query = `DELETE FROM customer_order WHERE cust_order_id = ?;`;
        const delete_order_id = [cust_order_id];
        
        db_connection.query(query, delete_order_id, (err, result) => {
          if (err) {
            console.log("Query error: ", err);
            reject(err);
          } else {
            resolve(result);
          }
          
        });
      }
    });
  });
}



module.exports = {
  insert_customer_order,
  read_customer_order_by_cust_order_id,
  read_customer_order_by_rest_table_id,
  read_customer_order_by_order_time_range,
  read_customer_order_by_order_amount,
  update_order_amount,
  delete_cust_order_id
}