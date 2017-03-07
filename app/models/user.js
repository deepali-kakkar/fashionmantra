var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var encryptData = require("../utils/encrypt");


var user = new Schema({
    userName: String,
    password: String,
    age: Number,
    firstName: String,
    lastName: String,
    gender: String,
    address: {
        country: String,
        state: String,
        streetNumber: String,
        zipcode: Number,
        pobox: String
    },
    SSN: String
});

user.pre('save', function(next) {
    if (this.password) {
        this.password = encryptData(this.password);
    }
    if (this.userName) {
        this.userName = encryptData(this.userName);
    }
    if (this.SSN) {
        this.SSN = encryptData(this.SSN);
    }
    next();
});

user.methods.authenticate = function(password) {
    var md5 = crypto.createHash('md5');
    md5 = md5.update(password).digest('hex');

    return this.password === md5;
};



module.exports = mongoose.model("user", user);