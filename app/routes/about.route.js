module.exports = function (app) {
    var ctrl = require('../controllers/about.controller');
    app.get("/about", ctrl.get)
};
