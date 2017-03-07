var passport = require("passport");
module.exports = function(app) {

    var ctrl = require('../controllers/user.controller');
    app.post("/api/createuser", ctrl.createUser);
    app.get("/api/getAll", ctrl.getUsers);
    app.post("/api/authenticateUser", ctrl.authenticate);
    app.post("/api/login", ctrl.login);
    /*  app.route('/login')
          .get(ctrl.renderLogin)
          .post(passport.authenticate('local', {
              successRedirect: '/',
              failureRedirect: '/login',
              failureFlash: true
          }));*/

};