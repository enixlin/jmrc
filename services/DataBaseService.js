var db_mysql = require('mysql');

var db = {

    _connect: db_mysql.createConnection({
        host: "127.0.0.1",
        user: "linzhenhuan",
        password: 'enixlin1981',
        database: 'jmrc',
        port: '3306'
    }),


    doQuery: function(sql, params) {
        let me = this;
        return new Promise(function(resolve, reject) {
            me._connect.query(sql, params, function(err, result) {
                if (!err) {
                    resolve(result)
                } else {
                    resolve(err)
                }
            });
        });
    }
}

module.exports = db;