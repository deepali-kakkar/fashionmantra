var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var product = new Schema({
    productName: String,
    image: String,
    price: Number,
    description: String
});
module.exports= mongoose.model("product",product);
