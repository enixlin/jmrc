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


var db = require('../DataBaseService').localDB();


var busyReport = {

    busySumByTypeName: function(type_name, start, end) {
        console.log("busySumByTypeName is run...");

        let params = [type_name, start, end];
        let sql = 'select yw_name, sum(usdamt) as sumAmt, count(name) as BusyCount where yw_type=? and yw_date>=? and yw_date<=?';
        db.query(sql, params, function(err, rows) {
            return rows;
        });



    },
    busySumByTypeId: function(type_id, start, end) {


    },
}


module.exports = busyReport;