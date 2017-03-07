module.exports = function (app) {
    var ctrl = require('../controllers/index.controller');
    app.get("/", ctrl.get)
};
