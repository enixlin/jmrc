/**
 * 报表业务类
 * 
 * 尝试使用组合模式来设计这个报表业务类
 * 
 * 
 */


var db = require('./DataBaseService').localDB();


var Report = {

    // 按业务类型,时间段统计业务笔数和金额
    busySumByTypeName: function(type_name, start, end) {
        return new Promise(function(resolve, reject) {
            let params = [type_name, start, end];
            let sql = 'select yw_name, sum(usdamt) as sumAmt, count(name) as BusyCount from jrrc_ywls_fixed where yw_name=? and yw_date>=? and yw_date<=?';
            db.query(sql, params, function(err, rows) {
                if (!err) {
                    resolve(rows);
                } else {
                    resolve(err);
                }
            });
        });
    },
}

var Client = {
    _constructor: function(name, id, unit) {
        this.name = name;
        this.id = id;
        this.unit = unit;
        this.BusyTypeList = [];
    },
    getBusyType: function(clientId) {
        return new Promise(function(resolve, reject) {
            let params = [clientId];
            let sql = 'select yw_name from jrrc_ywls_fixed where custno=?';
            db.query(sql, params, function(err, rows) {
                if (!err) {
                    resolve(rows);
                } else {
                    resolve(err);
                }
            });
        });
    }
}

Client.prototype = {

}



module.exports = Report;