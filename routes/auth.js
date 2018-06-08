var express = require('express');
var router = express.Router();
var session = require("session");
var auth = require('../services/AuthService');


router.all('/checkLogin', function(req, res, next) {
    res.send(auth.checkLoggedState());
});


router.all('/doLogin', function(req, res, next) {
    console.log("run");
    let users = { id: req.body.id, password: req.body.password };
    auth.doLogin(users).then(function(data) {
        res.send(data);
    });
});


router.all('/doLogout', function(req, res, next) {
    auth.doLogout();
});

module.exports = router;