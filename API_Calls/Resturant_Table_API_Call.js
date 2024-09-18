const server_connection = require('../Connections/Server_Conn');
const resturant_table = require('.,/Database/Resturant_Table');





// API for inserting a new table
async function addNewTable(req, res) {
    let table_number = req.body.table_number;
    let capacity = req.body.capacity;
    let status = req.body.status;

    try {
        payment.insert_new_table(table_number, capacity, status).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error inserting new table");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}

// API for reading table details by table number
async function getTableByNumber(req, res) {
    let table_number = req.body.table_number;

    try {
        payment.readBy_table_number(table_number).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error retrieving table by number");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}

// API for updating the status of a table
async function updateTableStatus(req, res) {
    let table_number = req.body.table_number;
    let new_status = req.body.new_status;

    try {
        payment.update_status(table_number, new_status).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error updating table status");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}

// API for deleting a table by table number
async function deleteTableByNumber(req, res) {
    let table_number = req.body.table_number;

    try {
        payment.delete_table_number(table_number).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error deleting table by number");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}


module.exports = {
    addNewTable,
    getTableByNumber,
    updateTableStatus,
    deleteTableByNumber
};