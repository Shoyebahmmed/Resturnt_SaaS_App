const db_connection = require('../Connections/DB_Conn');

function insert_data_product(product_name, product_desc, product_price, cat_id) {
   
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } 
            else {
                const product_id = Math.floor(Math.random() * 900000) + 100000;
                const query = `INSERT INTO Product(product_id, name, description, price, category_id) VALUES (?, ?, ?, ?, ?) `;
                const insert_value = [product_id, product_name, product_desc, product_price, cat_id];

                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        reject(err);
                    }
                    else {
                        resolve(results);
                    }

                
                });
            }
        });
    });
}

function read_product_data_by_product_id(product_id) {
    
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } 
            else {
                const query = `SELECT * FROM Product WHERE product_id = ?`;
                const insert_value = [product_id];
                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        reject(err);
                    }
                    else {
                        resolve(results);
                    }
                    
                });
            }
        });
    });
}



function get_price(product_id) {
    
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } 
            else {
                const query = `SELECT price FROM Product WHERE product_id = ?`;
                const insert_value = [product_id];
                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        reject(err);
                    }
                    else {
                        resolve(results);
                    }
                    
                });
            }
        });
    });
}



function get_products_by_category(category_id) {
    
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } 
            else {
                const query = `SELECT * FROM Product WHERE category_id = ?`;
                const insert_value = [category_id];
                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        reject(err);
                    }
                    else {
                        resolve(results);
                    }
                    
                });
            }
        });
    });
}




function update_product_name(product_id, product_new_name) {
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } else {
                // Update query
                const query = `UPDATE Product SET name = ? WHERE product_id = ?`;
                const insert_value = [product_new_name, product_id];

                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing update:', err);
                        reject(err);
                    } else {
                        console.log('Update successful:', results);
                        resolve(results);
                    }
                    
                });
            }
        });
    });
}





function update_product_description(product_id, product_new_description) {
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } else {
                // Update query
                const query = `UPDATE Product SET description = ? WHERE product_id = ?`;
                const insert_value = [product_new_description, product_id];

                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing update:', err);
                        reject(err);
                    } else {
                        console.log('Update successful:', results);
                        resolve(results);
                    }
                    
                });
            }
        });
    });
}




function update_product_price(product_id, product_new_price) {
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } else {
                // Update query
                const query = `UPDATE Product SET price = ? WHERE product_id = ?`;
                const insert_value = [product_new_price, product_id];

                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing update:', err);
                        reject(err);
                    } else {
                        console.log('Update successful:', results);
                        resolve(results);
                    }
                    
                });
            }
        });
    });
}






function update_product_category(product_id, product_new_category_id) {
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } else {
                // Update query
                const query = `UPDATE Product SET category = ? WHERE product_id = ?`;
                const insert_value = [product_new_category_id, product_id];

                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing update:', err);
                        reject(err);
                    } else {
                        console.log('Update successful:', results);
                        resolve(results);
                    }
                    
                });
            }
        });
    });
}





function delete_product_by_product_id(product_id) {
    return new Promise((resolve, reject) => {
        db_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } else {
                // Delete query
                const query = `DELETE FROM Product WHERE product_id = ?`;
                const insert_value = [product_id];

                db_connection.query(query, insert_value, (err, results) => {
                    if (err) {
                        console.error('Error executing delete:', err);
                        reject(err);
                    } else {
                        console.log('Delete successful:', results);
                        resolve(results);
                    }
                    
                });
            }
        });
    });
}





module.exports = {
    insert_data_product,
    read_product_data_by_product_id,
    get_price,
    get_products_by_category,
    update_product_name,
    update_product_category,
    update_product_description,
    update_product_price,
    delete_product_by_product_id
}