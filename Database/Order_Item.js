const db_connection= require('../Connections/DB_Conn');

function insert_order_item(cust_order_id, product_id, quantity, price){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const order_id = Math.floor(Math.random() * 900000) + 100000;
        const query = 'INSERT INTO order_item(order_id, cust_order_id, product_id, quantity, price) VALUES (?, ?, ?, ?, ?)';
        const customer_order_values = [order_id, cust_order_id, product_id, quantity, price];
        db_connection.query(query, customer_order_values, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          db_connection.end();
        }
        )
      }
    })
  })
}

function read_customer_order_by_order_id(order_id){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const query = 'SELECT * FROM order_item WHERE order_id = ?';
        const reading_order_id = [order_id];
        db_connection.query(query, reading_order_id, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          db_connection.end();
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
        const query = 'SELECT * FROM order_item WHERE cust_order_id = ?';
        const reading_cust_order_id = [cust_order_id];
        db_connection.query(query, reading_cust_order_id, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          db_connection.end();
        }
        )
      }
    })
  })
}



function read_customer_order_by_product_id(product_id){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const query = 'SELECT * FROM order_item WHERE product_id = ?';
        const reading_product_id = [product_id];
        db_connection.query(query, reading_product_id, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          db_connection.end();
        }
        )
      }
    })
  })
}


function read_customer_order_by_quantity(quantity){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const query = 'SELECT * FROM order_item WHERE quantity = ?';
        const reading_quantity = [quantity];
        db_connection.query(query, reading_quantity, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          db_connection.end();
        }
        )
      }
    })
  })
}


function read_customer_order_by_price(price){

    return new Promise((resolve,reject)=>{
    db_connection.connect(function(err){
      if (err){
        console.log("Query error: ", err);
          reject(err);
      }
      else{
        const query = 'SELECT * FROM order_item WHERE price = ?';
        const reading_price = [quantity];
        db_connection.query(query, reading_price, (err,results) =>{
          if(err){
            console.log("Query error: ", err);
            reject(err);
          }
          else{
            resolve(results);
          }
          db_connection.end();
        }
        )
      }
    })
  })
}




function update_product_id_by_previous_product_id(new_product_id, previous_product_id) {
    return new Promise((resolve, reject) => {
      db_connection.connect(function (err) {
        if (err) {
          console.log("Query error: ", err);
          reject(err);
        } else {
          const query = 'UPDATE order_item SET product_id = ? WHERE product_id = ?';
          const update_values = [new_product_id, previous_product_id];
          db_connection.query(query, update_values, (err, results) => {
            if (err) {
              console.log("Query error: ", err);
              reject(err);
            } else {
              resolve(results);
            }
            db_connection.end();
          });
        }
      });
    });
  }


  function update_quantity_by_previous_quantity(order_id, product_id, quantity) {
    return new Promise((resolve, reject) => {
      db_connection.connect(function (err) {
        if (err) {
          console.log("Query error: ", err);
          reject(err);
        } else {
          const query = 'UPDATE order_item SET quantity = ?, price = ? WHERE order_id = ?';
          const update_price = quantity * get_price(product_id);
          const update_values = [quantity, update_price, order_id];
          db_connection.query(query, update_values, (err, results) => {
            if (err) {
              console.log("Query error: ", err);
              reject(err);
            } else {
              resolve(results);
            }
            db_connection.end();
          });
        }
      });
    });
  }
  



function delete_order_id(order_id) {
  return new Promise((resolve, reject) => {
    db_connection.connect(function (err) {
      if (err) {
        console.log("Query error: ", err);
        reject(err);
      } else {
        // SQL query to update the order amount
        const query = `DELETE FROM order_item WHERE order_id = ?;`;
        const delete_order_id = [order_id]; 
        db_connection.query(query, delete_order_id, (err, result) => {
          if (err) {
            console.log("Query error: ", err);
            reject(err);
          } else {
            resolve(result);
          }
          db_connection.end();
        });
      }
    });
  });
}



module.exports = {
    insert_order_item,
    read_customer_order_by_order_id,
    read_customer_order_by_cust_order_id,
    read_customer_order_by_product_id,
    read_customer_order_by_quantity,
    read_customer_order_by_price,
    update_product_id_by_previous_product_id,
    update_quantity_by_previous_quantity,
    delete_order_id
}