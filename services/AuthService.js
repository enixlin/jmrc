/**
 * 系统授权类
 *
 */
var db = require("./DataBaseService"); //引入数据库操作类
var session = require("session"); //引入会话操作类

var auth = {
    //处理登录
    doLogin: function(user) {
        return new Promise(function(resolve, reject) {
            // console.log(`user.password is ${ user['password']}`);
            var sqlString = "select * from user";
            db._connect.query(sqlString, function(err, rows) {
                let LoggedUser;
                rows.forEach(element => {
                    console.log(`element.password is ${element["password"]}`);
                    if (
                        element["id"] == user["id"] &&
                        element["password"] == user["password"]
                    ) {
                        LoggedUser = { id: element["id"], name: element["name"] };
                        auth.setSession(LoggedUser);

                    }
                });

                //  LoggedUser ? auth.setSession(LoggedUser) : false;
                resolve(LoggedUser ? LoggedUser : false);
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
    },
    getAuthRuleByUserId: function(id) {
        return new Promise(function(resolve, reject) {
            let sql = ` select * from user 
      LEFT join user_roler 
      on user.id=user_roler.user_id
      LEFT JOIN roler
      on user_roler.roler_id=roler.id
      left join roler_rule
      on roler.id=roler_rule.roler_id
      left join rule
      on roler_rule.rule_id=rule.id
      where user.id=? `;
            let params = [id];
            resolve(db.doQuery(sql, params));
        });
    },

    getRolerByUserId: function(id) {
        return new Promise(function(resolve, reject) {
            let sql = ` 
                        select roler.id,roler.name from user 
                        LEFT join user_roler 
                        on user.id=user_roler.user_id
                        LEFT JOIN roler
                        on user_roler.roler_id=roler.id    
                        where user.id=? `;
            let params = [id];
            resolve(db.doQuery(sql, params));
        });
    },

    //通过角色编号找查用户功能
    getAuthByRoler: function(roler_id) {
        return new Promise(function(resolve, reject) {
            let sql = `
        select rule.name,rule.id,rule.url,rule.icon,rule.panel from roler
        left join roler_rule on roler.id=roler_rule.roler_id
        left join rule on roler_rule.rule_id=rule.id 
        where roler.id=?
        `;
            let params = [roler_id];
            resolve(db.doQuery(sql, params));
        });
    },




    getLoginedUser: function() {
        if (session.id == "") {
            return null;
        } else {
            return { id: session.id, name: session.name };
        }
    }
};

module.exports = auth;