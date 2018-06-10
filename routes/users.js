var express = require('express');
var router = express.Router();
var user = require('../services/UserService');
var session = require('session');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.all('/getUserName', function(req, res, next) {
    user.getUserNameAndId().then(function(data) {
        res.send(data);
    });
});


router.all('/addUser', function(req, res, next) {
    let userInfo = { name: req.body.name, password: req.body.password };
    user.addUser(userInfo);
    res.send(true);

});


router.all('/valitLogin', function(req, res, next) {
    let users = {
        id: req.body.id,
        password: req.body.password
    };
    let userLogged;
    user.valitLogin(users).then(function(data) {

        userLogged = data;
        session.id = data['id'];
        session.name = data['name'];
        res.send("true");
    });
});


module.exports = router;