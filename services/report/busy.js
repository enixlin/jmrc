/**
 * 业务类报表 busyReport
 * 主要是用来统计单一业务产品的报表
 * 字段:
 * 1.业务名称
 * 2.业务代码
 * 3.业务笔数
 * 4.业务金额
 * 5.开始时间
 * 6.结束时间
 * 7
 */


var db = require('../DataBaseService');

var busy = {
    getBusyRecord: function(busyName, start, end) {
        return new Promise(function(resolve, reject) {
            let sql = "select * from jrrc_ywls_fixed where yw_type=?";
            let params = [busyName];
            db.doQuery(sql, params).then(function(result) {
                resolve(result);
            });
        });
    },

    sumBusyById: function(busyId) {
        return new Promise(function(resolve, reject) {
            let sql = "select yw_type, sum(usdamt) as sumamt";
            let params = [busyName];
            db.query(sql, params, function(err, result) {
                if (!err) {
                    resolve(result);
                } else {
                    resolve(err);
                }
            });
        });
    }
}


module.exports = busy;