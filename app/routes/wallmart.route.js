var passport = require("passport");
module.exports = function (app) {

    var ctrl = require('../controllers/wm.controller');
    app.post("/api/WM/search", ctrl.searchProduct);

};