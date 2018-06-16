var express = require('express');
var router = express.Router();

var reportService = require('../services/ReportService');


/* GET users listing. */
router.all('/busySumByTypeName', function(req, res, next) {
    let type_name = req.body.type_name;
    let start = req.body.start;
    let end = req.body.end;
    reportService.busySumByTypeName(type_name, start, end).then(function(result) {
        res.send(result);
    });

});

// getBusyType
/* GET users listing. */
router.all('/getBusyType', function(req, res, next) {
    let clientId = req.body.clientId;
    reportService.busySumByTypeName(clientId).then(function(result) {
        res.send(result);
    });

});

module.exports = router;