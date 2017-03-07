var controller = {};
var User = require("../models/user");
var encryptData = require("../utils/encrypt");
//step 2 in authenticate
var passport = require("passport");
controller.createUser = function(req, res) {
    /*var user = {
        userName: "kiran",
        password: "1234",
        age: 30,
        firstName: "kiran",
        lastName: "paturi",
        gender: "Male",
        address: {
            country: "India",
            state: "Andhra Pradesh",
            streetNumber: "1212121",
            zipcode: "50121",
            pobox: ""
        }
    };*/
    var user = req.body;
    console.log(user);
    var userModel = new User(user);
    userModel.save(function(err, data) {
        if (err) {
            res.send("Error Occurred");
        } else {
            res.send("User Created")
        }
    });
};

controller.getUsers = function(req, res) {
    User.find({}, function(err, data) {
        if (err) {
            res.send("error occured");
        } else {
            res.send(data);
        }
    });
};

controller.updateUser = function(req, res) {

};

controller.deleteUser = function(req, res) {

};


controller.login = function(req, res, next) {
    function failedAuth(error, user, info) {
        console.log("FailedAuth");
        if (error) {
            return next("An Error occurred");
        }
        if (!user) {
            return next("Invalid Credentials")
        } else {
            console.log("user data");
            var loginDetails = {
                userName: encryptData(user.userName),
                password: encryptData(user.password)
            };
            User.findOne(loginDetails,
                function(err, data) {
                    if (err) {
                        return next(err);
                    } else {
                        // console.log(userDetails);
                        return res.json(data);
                    }
                }
            );
        }
    }

    return passport.authenticate("local", failedAuth)(req, res, next);
}

controller.renderLogin = function(req, res, next) {
    if (!req.user) {
        res.render('login', {
            title: 'Log-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
};
controller.authenticate = function(req, res) {

    //step 3 verify the use against the DB and authenticate.
    user.password = encryptData(user.password);
    User.findOne({
        userName: user.userName,
        password: user.password
    }, function(err, data) {
        if (err) {
            res.send("error occured");
        } else {
            res.send(data);
        }

    });
};
module.exports = controller;