/**
 * 报表业务类
 * 
 * 尝试使用组合模式来设计这个报表业务类
 * 
 * 
 */


var db = require('./DataBaseService').localDB();

// 这一个组合模式生成的报表类
class Report {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}

Report.prototype = {
    //生成报表
    create: function() { throw new Error("抽象类的方法不能调用,需在实现类中重写"); },
    //显示报表 
    show: function() { throw new Error("抽象类的方法不能调用,需在实现类中重写"); },
};

module.exports = report;