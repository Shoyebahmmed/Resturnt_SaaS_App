const database_connection = require('../Connections/DB_Conn');

function insert_data_category(cat_name, cat_desc) {
    
    return new Promise((resolve, reject) => {
        database_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } 
            else {
                const cat_id = Math.floor(Math.random() * 900000) + 100000;
                const query = `INSERT INTO Category (category_id, name, description) VALUES (?, ?, ?)`;
                const categoryData = [cat_id, cat_name, cat_desc];
                database_connection.query(query, categoryData, (err, results) => {
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


function read_category_data_by_category_id(cat_id) {
    
    return new Promise((resolve, reject) => {
        database_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } 
            else {
                const query = `SELECT * FROM Category WHERE category_id = ?`;
                const categoryID = [cat_id];
                database_connection.query(query, categoryID, (err, results) => {
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



function read_category_data_by_category_name(cat_name) {
    
    return new Promise((resolve, reject) => {
        database_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } 
            else {
                const query = `SELECT * FROM Category WHERE name = ?`;
                const categoryName = [cat_name];
                database_connection.query(query, categoryName, (err, results) => {
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



function update_category_data_by_category_id(cat_id, cat_new_name, cat_new_description) {
    return new Promise((resolve, reject) => {
        database_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } else {
                // Update query
                const query = `UPDATE Category SET name = ?, description = ? WHERE category_id = ?`;
                const update_category_Data = [cat_new_name, cat_new_description, cat_id];

                database_connection.query(query, update_category_Data, (err, results) => {
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




function delete_category_by_category_id(cat_id) {
    return new Promise((resolve, reject) => {
        database_connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
            } else {
                // Delete query
                const query = `DELETE FROM Category WHERE category_id = ?`;
                const categoryID = [cat_id];

                database_connection.query(query, categoryID, (err, results) => {
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
    insert_data_category,
    read_category_data_by_category_id,
    read_category_data_by_category_name,
    update_category_data_by_category_id,
    delete_category_by_category_id
};