const product = require('./Product');


async function insert_product_call (req, res) {

    let product_name = req.body.product_name;
    let product_desc = req.body.product_desc;
    let product_price = req.body.product_price;
    let cat_id = req.body.cat_id;


    try{
        product.insert_data_product(product_name, product_desc, product_price, cat_id)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}




async function get_all_product_data_call (req, res) {
    let product_id = req.body.product_id;

    try{
        product.read_product_data_by_product_id(product_id)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}




async function get_product_price_call (req, res) {
    let product_id = req.body.product_id;

    try{
        product.get_price(product_id)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}




async function get_product_details_by_category_call (req, res) {
    let category_id = req.body.category_id;

    try{
        product.get_products_by_category(category_id)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}




async function update_product_name_call (req, res) {
    let product_id = req.body.product_id;
    let product_new_name = req.body.product_new_name;

    try{
        product.update_product_name(product_id, product_new_name)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}





async function update_product_description_call (req, res) {
    let product_id = req.body.product_id;
    let product_new_description = req.body.product_new_description;

    try{
        product.update_product_name(product_id, product_new_description)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}





async function update_product_price_call (req, res) {
    let product_id = req.body.product_id;
    let product_new_price = req.body.product_new_price;

    try{
        product.update_product_price(product_id, product_new_price)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}





async function update_product_category_call (req, res) {
    let product_id = req.body.product_id;
    let product_new_category = req.body.product_new_category;

    try{
        product.update_product_name(product_id, product_new_category)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}





async function delete_product_call (req, res) {
    let product_id = req.body.product_id;

    try{
        product.delete_product_by_product_id(product_id)
        .then((response) => {
            console.log(response);
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send('Successful');
        })
    }
    catch(error){
        console.log(error);
        res.send('Unsuccessful');
    }
}





module.exports = {
    insert_product_call,
    get_all_product_data_call,
    get_product_price_call,
    get_product_details_by_category_call,
    update_product_name_call,
    update_product_description_call,
    update_product_price_call,
    update_product_category_call,
    delete_product_call
}