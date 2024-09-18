const server_connection = require('../Connections/Server_Conn');
const payment = require('../API_Calls/Payment');









async function add_new_payment(req, res) {

    let cust_order_id = req.body.cust_order_id;
    let amount = req.body.amount;
    let payment_method = req.body.payment_method;


    try {
        payment.insert_data_payment(cust_order_id, amount, payment_method).then((response) => {
            res.send(response);

        }).catch((err) => {
            console.log(err);
            res.send("Error Page 10");
        })

    }
    catch (error) {
        console.log(error);
        res.send("Error Page 20");
    }

}


// Assuming the payment functions are imported or defined in this file

// API for reading payments by amount
async function getPaymentsByAmount(req, res) {
    let amount = req.body.amount;

    try {
        payment.readBy_amount(amount).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error retrieving payments by amount");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}



// API for reading payments by year
async function getPaymentsByYear(req, res) {
    let year = req.body.year;

    try {
        payment.readBy_year(year).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error retrieving payments by year");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}




// API for reading payments by month
async function getPaymentsByMonth(req, res) {
    let month = req.body.month;

    try {
        payment.readBy_month(month).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error retrieving payments by month");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}




// API for reading payments by day
async function getPaymentsByDay(req, res) {
    let day = req.body.day;

    try {
        payment.readBy_day(day).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error retrieving payments by day");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}




// API for deleting payment by payment_id
async function deletePaymentById(req, res) {
    let payment_id = req.body.payment_id;

    try {
        payment.delete_by_payment_id(payment_id).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error deleting payment by payment_id");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}




// API for deleting payment by customer_order_id
async function deletePaymentByCustomerOrderId(req, res) {
    let cust_order_id = req.body.cust_order_id;

    try {
        payment.delete_by_customer_order_id(cust_order_id).then((response) => {
            res.send(response);
        }).catch((err) => {
            console.log(err);
            res.send("Error deleting payment by customer_order_id");
        });
    } catch (error) {
        console.log(error);
        res.send("Error processing request");
    }
}





module.exports = {
    add_new_payment,
    deletePaymentByCustomerOrderId,
    deletePaymentById,
    getPaymentsByDay,
    getPaymentsByMonth,
    getPaymentsByYear,
    getPaymentsByAmount
};