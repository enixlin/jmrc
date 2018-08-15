var express = require("express");
var router = express.Router();
var session = require("session");
var auth = require("../services/AuthService");

router.all("/checkLogin", function(req, res, next) {
    res.send(auth.checkLoggedState());
});

router.all("/doLogin", function(req, res, next) {

    let users = { id: req.body.id, password: req.body.password };
    auth.doLogin(users).then(function(data) {
        res.send(data);
    });
});


router.all("/doLogout", function(req, res, next) {
    auth.doLogout();
    res.send("true");
});
router.all("/getAuthByRoler", function(req, res, next) {
    auth.getAuthByRoler(req.body.rolerId).then(function(result) {
        res.send(result);
    });
});

router.all("/getAuthRuleByUserId", function(req, res, next) {
    let id = req.body.id;
    auth.getAuthRuleByUserId(id).then(function(data) {
        // console.log(" data is ....");
        //console.log(data);
        res.send(data);
    });
});

router.all("/getRolerByUserId", function(req, res, next) {
    let id = req.body.id;
    auth.getRolerByUserId(id).then(function(data) {
        res.send(data);
    });
});
// 从session中取得已登录的用户信息
router.all("/getLoginedUser", function(req, res, next) {
    let loginUser = auth.getLoginedUser();
    res.send(loginUser);
});

module.exports = router;