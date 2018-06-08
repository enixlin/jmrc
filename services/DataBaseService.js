var db_mysql = require('mysql');

var db = {

    localDB: function() {
        return db_mysql.createConnection({
            host: "127.0.0.1",
            user: "linzhenhuan",
            password: 'enixlin1981',
            database: 'jmrc',
            port: '3306'
        });
    }
}


module.exports = db;