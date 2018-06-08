/**
 * 系统授权类
 * 
 */
var db = require("./DataBaseService").localDB(); //引入数据库操作类
var session = require('session'); //引入会话操作类

var auth = {
    //处理登录
    doLogin: function(user) {
        return new Promise(function(resolve, reject) {
            var sqlString = "select * from user";
            db.query(sqlString, function(err, rows) {
                let LoggedUser;
                rows.forEach(element => {
                    if (element['id'] == user['id'] && element['password'] == user['password']) {
                        LoggedUser = { id: element['id'], name: element["name"] };
                    }
                });

                //  LoggedUser ? auth.setSession(LoggedUser) : false;
                resolve(LoggedUser ? auth.setSession(LoggedUser) : false);
            });


        });

    },
    //处理退出
    doLogout: function() {
        delete session.id;
        delete session.name;
        console.log(session);
    },

    //检测用户是否已登录
    checkLoggedState: function() {
        return session.id ? { id: session.id, name: session.name } : false;

    },


    setSession: function(user) {
        session.name = user.name;
        session.id = user.id;
        return true;
    }



}


module.exports = auth;