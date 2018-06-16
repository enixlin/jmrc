var express = require('express');
var router = express.Router();
var ftp = require('../services/FtpService');

/* GET home page. */
router.get('/getDirectory', function(req, res, next) {
    console.log("start....................");
    ftp.getDiretory().then(function(result) {
        res.send(result);
    });

});

module.exports = router;