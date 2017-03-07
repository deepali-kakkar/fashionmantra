//get the configuration file
// it is having port and the connection string for db
var config = require("./app/config/config");
var mongoose = require("./app/config/mongoose");
mongoose();

//set the express framework
var express = require("./app/config/express");
var app = express();
app.listen(config.port);
console.log("server running at port" + config.port);
