const db_connection = require('../Connections/DB_Conn');
const customer_order = require('../Database/Customer_Order');

async function insert_customer_order_call(req, res) {
    let total_amount = req.body.total_amount;
    let rest_table_id = req.body.rest_table_id;
    try {
        customer_order.insert_customer_order(total_amount, rest_table_id).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send("Error inserting order");
        });
    } catch (error) {
        res.send("Error Page 30");
    }
}

async function get_customer_order_call(req, res) {
    let cust_order_id = req.body.cust_order_id;
    try {
        customer_order.read_customer_order_by_cust_order_id(cust_order_id).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send("Error Page 40");
        });
    } catch (error) {
        res.send("Error Page 30");
    }
}

async function get_customer_order_by_rest_table_id(req, res) {
    let rest_table_id = req.body.rest_table_id;
    try {
        customer_order.read_customer_order_by_rest_table_id(rest_table_id).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send("Error Page 40");
        });
    } catch (error) {
        res.send("Error Page 30");
    }
}

async function get_customer_order_by_time_range(req, res) {
    let rest_table_id = req.body.rest_table_id;
    try {
        customer_order.read_customer_order_by_order_time_range(rest_table_id).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send("Error Page 40");
        });
    } catch (error) {
        res.send("Error Page 30");
    }
}

async function get_customer_order_by_min_amount(req, res) {
    let rest_table_id = req.body.rest_table_id;
    let min_amount = req.body.min_amount;
    try {
        customer_order.read_customer_order_by_order_amount(rest_table_id, min_amount).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send("Error Page 40");
        });
    } catch (error) {
        res.send("Error Page 30");
    }
}

async function update_order_amount_call(req, res) {
    let cust_order_id = req.body.cust_order_id;
    let new_amount = req.body.new_amount;
    try {
        customer_order.update_order_amount(cust_order_id, new_amount).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send("Error Page 40");
        });
    } catch (error) {
        res.send("Error Page 30");
    }
}

async function delete_customer_order_call(req, res) {
    let cust_order_id = req.body.cust_order_id;
    try {
        customer_order.delete_cust_order_id(cust_order_id).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send("Error Page 40");
        });
    } catch (error) {
        res.send("Error Page 30");
    }
}

module.exports = {
    insert_customer_order_call,
    get_customer_order_call,
    get_customer_order_by_rest_table_id,
    get_customer_order_by_time_range,
    get_customer_order_by_min_amount,
    update_order_amount_call,
    delete_customer_order_call
};
