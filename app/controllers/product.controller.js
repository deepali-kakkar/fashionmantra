var controller = {};
var products = require("../models/products");
//put
controller.create = function (req, res) {

};
//post
controller.update = function (req, res) {

};
//delete
controller.delete = function (req, res) {

};

controller.searchProduct = function (req, res) {
    var query;
    console.log("--product controller--");
    console.log(req.body);
    if (req.body) {
        query = req.body;
    } else {
        query = {};
    }

    products.find(query, function (err, data) {
            if (err) {
                res.send("Error Occurred Please try again");
            } else {
                res.send(data);
            }
        })
        //res.send("product search will be done soon");
};


module.exports = controller;
