module.exports = function(app) {
    var ctrl = require('../controllers/file.controller');
    app.post("/api/fileUpload", ctrl.fileUpload)
};