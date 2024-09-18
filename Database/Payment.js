const db_conn= require('../Connections/DB_Conn');



function insert_data_payment(cust_order_id, amount,payment_method){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                const payment_id = Math.floor(Math.random() * 900000) + 100000;
                const now = new Date();

                const payment_time = now.toISOString().slice(0, 19).replace('T', ' ');
                const query = `INSERT INTO  payment(payment_id, cust_order_id, amount, payment_method, payment_time) VALUES(? ,?, ?, ? ,?)`;     
                const payment_data=[payment_id, cust_order_id, amount, payment_method,payment_time];

                db_conn.query(query,payment_data,(err, results)=>{
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





function readBy_amount(amount){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `SELECT * FROM payment WHERE payment=?`
                
                db_conn.query(query,[payment],(err, results)=>{
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




function readBy_year(year){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `SELECT * FROM payment WHERE YEAR(payment_time=?)`
                
                db_conn.query(query,[year],(err, results)=>{
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



function readBy_month(month){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `SELECT * FROM payment WHERE MONTH(payment_time=?)`
                
                db_conn.query(query,[month],(err, results)=>{
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





function readBy_day(day){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `SELECT * FROM payment WHERE DAY(payment_time=?)`
                
                db_conn.query(query,[day],(err, results)=>{
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



function delete_by_payment_id(payment_id){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `DELETE FROM payment WHERE payment_id=?`
                
                db_conn.query(query,[payment_id],(err, results)=>{
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


function delete_by_customer_order_id(cust_order_id){

    

    return new Promise((resolve, reject) =>{
        db_conn.connect(function(err){
            if (err){
                console.log("Query error: ", err);
                
                reject(err);
            }
            else{
                               
                const query = `DELETE FROM payment WHERE cust_order_id=?`
                
                db_conn.query(query,[cust_order_id],(err, results)=>{
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


module.exports={insert_data_payment,readBy_amount,readBy_year,readBy_month,readBy_day,delete_by_payment_id,delete_by_customer_order_id};
