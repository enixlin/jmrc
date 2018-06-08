/**
 * 用户类
 * 管理用户,包括用户的增删改查等功能
 */

var db = require('./DataBaseService').localDB();

var user = {


    //获取所有用户的编号和姓名
    getUserNameAndId: function() {
        return new Promise(function(resolve, reject) {
            var sqlString = "select name, id from user";
            db.query(sqlString, function(err, rows) {
                resolve(rows);
            });
        });
    },

    //添加用户
    addUser: function(user) {

    },

    //修改用户
    modifyUser: function(user) {},

    //停用用户
    fozenUser: function(userId) {

    },

    valitLogin: function(user) {

    },


    Logout: function() {
        session = null;
    }



}



module.exports = user;