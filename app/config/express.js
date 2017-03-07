//download the express
//download the body parser
var express = require('express');
var bodyParser = require('body-parser');
var passport = require("passport");
var session = require("express-session");
var flash = require('connect-flash');
//
module.exports = function () {
    var app = express();


    //set the body-parser to handle the json requests
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    // parse application/json
    app.use(bodyParser.json());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'OurSuperSecretCookieSecret'
    }));
    //initialize passport 
    app.use(passport.initialize());

    //set the view engine
    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    //to use the static files like js and the css
    app.use(express.static("./public"));
    //set the routes
    require("../routes/index.route")(app);
    require("../routes/about.route")(app);
    require("../routes/user.route")(app);
    require("../routes/product.route")(app);
    require("../routes/file.route")(app);
    require("../routes/wallmart.route")(app);
    return app;
};
