var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    gender: String,
    country: String,
    state: String,
    termsAndConditions: String,
    password: String
});

var model = mongoose.model('Profiles', UserSchema);
module.exports = model;
