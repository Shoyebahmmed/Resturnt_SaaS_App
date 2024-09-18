const server_conn = require('../Connections/Server_Conn');
const category = require('../Database/Category');

async function insert_category_call (req, res) {
    let category_name = req.body.category_name;
    let category_description = req.body.category_description;

    try{
        category.insert_data_category(category_name, category_description)
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


async function get_all_category_call (req, res) {
    let category_id = req.body.category_id;

    try{
        category.read_category_data_by_category_id(category_id)
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


async function get_all_category_by_name_call (req, res) {
    let category_name = req.body.category_name;

    try{
        category.read_category_data_by_category_name(category_name)
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



async function update_category_by_id_call (req, res) {
    let category_id = req.body.category_id;

    try{
        category.update_category_data_by_category_id(category_id)
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




async function delete_category_by_id_call (req, res) {
    let category_id = req.body.category_id;

    try{
        category.delete_category_by_category_id(category_id)
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



module.exports ={
    insert_category_call,
    get_all_category_call,
    get_all_category_by_name_call,
    update_category_by_id_call,
    delete_category_by_id_call
}