var controller = {};
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({
    storage: storage
}).single('userPhoto');


controller.fileUpload = function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.end("Error uploading file.");
        }
        console.log("file upladed successfully");
        res.end("File is uploaded");
    });
};
module.exports = controller;
