var express = require('express');
var router = express.Router();



router.all('/showTestFrom', function(req, res, next) {
    res.render('test', { title: '这是一个测试post提交的页面' });
});




module.exports = router;