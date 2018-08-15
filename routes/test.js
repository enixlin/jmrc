var express = require("express");
var router = express.Router();
var auth = require("../services/AuthService");

router.all("/showTestFrom", function(req, res, next) {
  res.render("test", { title: "这是一个测试post提交的页面" });
});

router.all("/getAuthRuleByUserId", function(req, res, next) {
  auth.getAuthRuleByUserId().then(function(data) {
    console.log(data);
    res.write(data);
  });
});

module.exports = router;
