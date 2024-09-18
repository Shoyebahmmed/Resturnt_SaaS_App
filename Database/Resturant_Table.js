const db_conn= require('../Connections/DB_Conn');



function insert_new_table(table_number, capacity, status){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                
                const query = `INSERT INTO  resturant_table(table_number, capacity, status) VALUES(? ,?, ?) `;     
                
                const table_data = [table_number, capacity , status];

                db_conn.query(query,table_data,(err, results)=>{
                    if(err){
                        console.log("Query error: ", err);
                        reject(err);
                    }
                    else{
                        resolve(results);}
                        db_conn.end();
                })
            }
        })
    }

    )

}


function readBy_table_number(table_number){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `SELECT * resturant_table  WHERE table_number=?`;
                
                db_conn.query(query,[table_number],(err, results)=>{
                    if(err){
                        console.log("Query error: ", err);
                        reject(err);
                    }
                    else{
                        resolve(results);}
                        db_conn.end();
                })
            }
        })
    }

    )

}


function update_status(table_number, new_status){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `UPDATE resturent_table SET status=? WHERE table_number=?`;
                const table_data=[new_status, table_number]
                db_conn.query(query,table_data,(err, results)=>{
                    if(err){
                        console.log("Query error: ", err);
                        reject(err);
                    }
                    else{
                        resolve(results);}
                        db_conn.end();
                })
            }
        })
    }

    )

}


function delete_table_number(table_number){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `DELETE FROM resturent_table  WHERE table_number=?`;
                
                db_conn.query(query,[table_number],(err, results)=>{
                    if(err){
                        console.log("Query error: ", err);
                        reject(err);
                    }
                    else{
                        resolve(results);}
                        db_conn.end();
                })
            }
        })
    }

    )

}


module.exports={insert_new_table,
    readBy_table_number,
    update_status, delete_table_number};

