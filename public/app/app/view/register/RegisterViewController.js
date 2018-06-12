Ext.define('jmrc.view.register.RegisterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register-registerview',


    // init: function() {
    //     Ext.create({
    //         xtype: 'register'
    //     });

    // },

    save: function() {
        let form = this.getView().getForm();
        let name = form.getFieldValues()['name'];
        let password = form.getFieldValues()['password'];
        let confirmPassword = form.getFieldValues()['confirmPassword'];
        let hidenPassword = form.getFieldValues()['hidenPassword'];

        if (name == "" || password == "") {
            alert("用户名或密码不能为空");
            return;
        }
        if (password != confirmPassword) {
            alert('两次输入的密码不一致');
            return;
        }
        this.checkname(name).then(function(data) {
            if (data == 'false') {
                alert('用户名不可用');
                return;
            } else {
                console.log("run add......................");
                let passwordEncrypt = b64_md5(password);

                //重新设置用户注册信息,避免网络明文传播用户密码
                form.setValues({ name: name, hidenPassword: passwordEncrypt, password: '', confirmPassword: '' });
                form.submit({
                    params: { name: name, password: passwordEncrypt },
                    success: function(form, action) {
                        Ext.Msg.alert('添加用户成功', action.result.msg);
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });

            }
        });





    },


    //发送ajax请求,从后台服务器取得所有用户名,检测是否有重复用户
    checkname: function(userName) {
        return new Promise(function(resolve, reject) {
            Ext.Ajax.request({
                url: '/users/checkUserName',
                params: { name: userName },
                method: 'post',
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.log(obj);
                    if (obj == true) {
                        resolve('true');
                        return true;
                    } else {
                        resolve('false');
                    }
                },
                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }

            });


        });




    },

    // 加密用户密码,引用/public/javascript/util/md5.js 中的b64_md5函数
    encryptPassword: function(password) {
        return b64_md5(password);
    },



    //退出新增用户界面,回到登录界面
    logout: function() {
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }




})