Ext.define('jmrc.view.register.RegisterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register-registerview',



    save: function() {
        let form = this.getView().getForm();
        console.log(form.getFieldValues());
        console.log(form.getFieldValues()['password']);
        let name = form.getFieldValues()['name'];
        let password = form.getFieldValues()['password'];
        let confirmPassword = form.getFieldValues()['confirmPassword'];
        if (name == "" || password == "") {
            alert("用户名或密码不能为空");
            return;
        }

        if (password == confirmPassword) {
            // 加密用户密码
            let passwordEncpty = Ext.util.Base64.encode(password);

            form.setValues({ name: name, password: passwordEncpty });
            form.submit({
                success: function(form, action) {
                    Ext.Msg.alert('添加用户成功', action.result.msg);
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            });
        } else {
            alert('两次输入的密码不一致');
        }
        //form = null;
    },


    //发送ajax请求,从后台服务器取得所有用户名,检测是否有重复用户
    checkname: function(userName) {
        // alert(userName);
        console.log(this);
        // Ext.Ajax.request({
        //     url: '/users/checkUserName',
        //     params: userName,
        //     success: function(response, opts) {
        //         var obj = Ext.decode(response.responseText);
        //         console.dir(obj);
        //     },
        //     failure: function(response, opts) {
        //         console.log('server-side failure with status code ' + response.status);
        //     }
        // });
    }




})