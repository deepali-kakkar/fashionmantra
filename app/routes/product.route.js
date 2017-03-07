 module.exports = function (app) {
     console.log("--product route--");
     var ctrl = require('../controllers/product.controller');

     app.post("/api/products/searchProduct", ctrl.searchProduct);
     app.post("/api/products/create", ctrl.create);

 }
