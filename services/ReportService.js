/**
 * 报表业务类
 * 
 * 尝试使用组合模式来设计这个报表业务类
 * 
 * 
 */


var busy = require("../services/report/busy");


var Report = {

    // 按业务类型,时间段统计业务笔数和金额
    getBusyRecord: function(type_name, start, end) {
        console.log("do getBusyRecord....");
        console.log("type_name is ...." + type_name);
        console.log("start is ...." + start);
        console.log("end is ...." + end);
        return new Promise(function(resolve, reject) {
            busy.getBusyRecord(type_name, start, end).then(function(data) {
                console.log("report output.................................");
                console.log(data[0]);
                resolve(data);
            });
        });
    }
}






module.exports = Report;