/**
 * Ftp客户端模块
 *    这是一个用于连接FTP服务器的客户端,
 *    可以取得所有的目录,下载和上传文件
 * 
 * author :    linzhenhuan
 * date:       20180612
 * 
 */
var ftpServer = require("ftp");


ftp = {
    conncect: function() {
        let client = new ftpServer();
        //这是融和的FTP服务器
        client.connect({
            host: '141.0.189.69',
            user: "gj",
            password: 'gj'
        });
        return client;
    },
    // 取得所有的目录
    getDiretory: function() {
        let me = this;
        return new Promise(function(resolve, reject) {
            let c = me.conncect();
            c.on('ready', function() {
                c.list(function(err, list) {
                    if (err) throw err;
                    c.end();
                    resolve(list);
                });
            });
        });
    }
}


module.exports = ftp;