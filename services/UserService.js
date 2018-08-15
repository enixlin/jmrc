/**
 * 用户类
 * 管理用户,包括用户的增删改查等功能
 */

var db = require("./DataBaseService");

var user = {
  //获取所有用户的编号和姓名
  getUserNameAndId: function() {
    return new Promise(function(resolve, reject) {
      var sqlString = "select name, id from user";
      db._connect.query(sqlString, function(err, rows) {
        if (err) {
          resolve(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  isUserNameExist: function(UserName) {
    console.log("do function isUserNameExist....................");
    return new Promise(function(resolve, reject) {
      user.getUserInformation().then(function(result) {
        result.forEach(element => {
          console.log(element["name"]);
          if (element["name"] == UserName) {
            resolve(false);
            return false;
          }
        });
        resolve(true);
        return true;
      });
    });
  },

  //取得所有用户的全部信息
  getUserInformation: function() {
    return new Promise(function(resolve, reject) {
      var sqlString = "select * from user";
      db._connect.query(sqlString, function(err, rows) {
        resolve(rows);
      });
    });
  },

  //添加用户
  addUser: function(userInfo) {
    return new Promise(function(resolve, reject) {
      user.isUserNameExist(userInfo.name).then(function(data) {
        console.log(data);
        if (data) {
          let params = [userInfo.name, userInfo.password];
          let sql = "insert into user (name,password,status) values(?,?,1)";
          db._connect.query(sql, params, function(err, rows) {
            if (!err) {
              //注意下面的字符串模板变量,
              //模板字符串使用反引号(backtick或者叫backquote) tab键上面的那个键
              //来代替普通字符串中的双引号(double quote)或单引号(single quote).
              resolve(`用户 ${userInfo.name} 添加成功`);
            } else {
              console.log(err);
              resolve(err);
            }
          });
        } else {
          console.log("用户已存在,不能添加");
          resolve(`用户 ${userInfo.name} 已存在,不能添加`);
        }
      });
    });
  },

  //修改用户
  modifyUser: function(user) {
    return new Promise(function(resolve, reject) {
      let sql = "update user set name=? ,password=? ,status=?";
      let params = [user.name, user.password, user.status];
      db.query(sql, params, function(err, rows) {
        resolve(rows);
      });
    });
  },

  //停用用户
  fozenUser: function(userId) {},

  valitLogin: function(user) {},

  Logout: function() {
    session = null;
  }
};

module.exports = user;
