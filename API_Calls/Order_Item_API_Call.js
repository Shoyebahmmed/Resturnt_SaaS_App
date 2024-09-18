const db_connection = require('../Connections/DB_Conn');
const order_item = require('../Database/Order_Item');

function add_order_item_call(req, res) {
    let insert_order_id = req.body.insert_order_id;
    let insert_product_id = req.body.insert_product_id;
    let insert_quantity = req.body.insert_quantity;
    let insert_price = req.body.insert_price;

    order_item.insert_order_item(insert_order_id, insert_product_id, insert_quantity, insert_price)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 30: ", error);
            res.send("Error Page 30");
        });
}

function read_customer_order_by_order_id_call(req, res) {
    let order_id = req.params.order_id;

    order_item.read_customer_order_by_order_id(order_id)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 50: ", error);
            res.send("Error Page 50");
        });
}

function read_customer_order_by_cust_order_id_call(req, res) {
    let cust_order_id = req.params.cust_order_id;

    order_item.read_customer_order_by_cust_order_id(cust_order_id)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 60: ", error);
            res.send("Error Page 60");
        });
}

function read_customer_order_by_product_id_call(req, res) {
    let product_id = req.params.product_id;

    order_item.read_customer_order_by_product_id(product_id)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 70: ", error);
            res.send("Error Page 70");
        });
}

function read_customer_order_by_quantity_call(req, res) {
    let quantity = req.params.quantity;

    order_item.read_customer_order_by_quantity(quantity)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 80: ", error);
            res.send("Error Page 80");
        });
}

function read_customer_order_by_price_call(req, res) {
    let price = req.params.price;

    order_item.read_customer_order_by_price(price)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 90: ", error);
            res.send("Error Page 90");
        });
}

function update_product_id_by_previous_product_id_call(req, res) {
    let new_product_id = req.body.new_product_id;
    let previous_product_id = req.body.previous_product_id;

    order_item.update_product_id_by_previous_product_id(new_product_id, previous_product_id)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 100: ", error);
            res.send("Error Page 100");
        });
}

function update_quantity_by_previous_quantity_call(req, res) {
    let order_id = req.body.order_id;
    let product_id = req.body.product_id;
    let quantity = req.body.quantity;

    order_item.update_quantity_by_previous_quantity(order_id, product_id, quantity)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 110: ", error);
            res.send("Error Page 110");
        });
}

function delete_order_id_call(req, res) {
    let order_id = req.params.order_id;

    order_item.delete_order_id(order_id)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log("Error Page 120: ", error);
            res.send("Error Page 120");
        });
}

module.exports = {
    add_order_item_call,
    read_customer_order_by_order_id_call,
    read_customer_order_by_cust_order_id_call,
    read_customer_order_by_product_id_call,
    read_customer_order_by_quantity_call,
    read_customer_order_by_price_call,
    update_product_id_by_previous_product_id_call,
    update_quantity_by_previous_quantity_call,
    delete_order_id_call,
};
