var express = require('express');
var router = express.Router();
var user = require('../services/UserService');
var session = require('session');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});



router.all('/getUserNameAndId', function(req, res, next) {
    user.getUserNameAndId().then(function(data) {
        res.send(data);
    });
});

router.all('/getUserInformation', function(req, res, next) {
    user.getUserInformation().then(function(data) {
        res.send(data);
    });
});


//添加新用户
router.all('/addUser', function(req, res, next) {
    let userInfo = { name: req.body.name, password: req.body.hidenPassword };
    // user.addUser(userInfo);
    user.addUser(userInfo).then(function(data) {
        res.send(data);
    });

});





//checkUserName 检测用户是否已存在 ,已存在的话返回false,不存在返回ture
router.all('/checkName', function(req, res, next) {
    user.isUserNameExist(req.body.name).then(function(result) {
        res.send(result);
    });

});















//修改用户密码
router.all('/modifyUser', function(req, res, next) {
    let userInfo = {
        name: req.body.name,
        password: req.body.password,
        status: req.body.status
    };
    user.modifyUser(userInfo).then(function(data) {
        res.send(data);
    });
});


module.exports = router;