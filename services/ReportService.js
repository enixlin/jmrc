/*
 * 报表业务类
 * 
 * 由于报表的组合较多，如果只是单单从报表的角度来设计报表类的话，不利于将来的扩展和修改
 * 所以在设计这个报表业务类时，考虑使用组合模式来设计，将报表分拆成不同的颗粒度来使用
 * 目前的设想是将整个国际业务分解成以下层次：
 * 
 *   总行
 *   |---经营单位
 *       |---客户
 *           |---业务
 *               |---流水 
 * 
 *  由于数据库的单行记录就已经对应了一笔业务流水，所以流水对象就是对应一条数据记录
 *  
 * 
 * 
 */



var busy = require("../services/report/busy");


/** 
 * @class dateRange
 * @constructor 
 * @param start : 开始日期 
 * @param end : 结束日期 
 * @description
 * 定义了开始和结束的日期，日期的格式为 yyyymmdd 用零补足 
 * 
 */
class DateRange {
    /**
     *Creates an instance of DataRange.
     * @param {*} start
     * @param {*} end
     * @memberof DataRange
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

/* 业务记录  */
var record = {
    constuctor: function(dataRow) {
        this._record = { dataRow };
    }

}








/**
 * @class Report
 * @description :yp
 * @description :yp /
 * @method 
 *   getBusyRecord // 按业务类型,时间段统计业务笔数和金额
 *   getBusyRecord // 按业务类型,时间段统计业务笔数和金额
 * 
 */
var Report = {

    // 按业务类型,时间段统计业务笔数和金额// 按业务类型,时间段统计业务笔数和金额
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