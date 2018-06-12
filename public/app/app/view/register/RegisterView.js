Ext.define('jmrc.view.register.RegisterView', {
    extend: 'Ext.form.Panel',
    xtype: 'register',

    requires: [
        'jmrc.view.register.RegisterViewController',
        'jmrc.view.register.RegisterViewModel',
        // 'jmrc.view.login.LoginView'

    ],
    plugins: 'viewport',
    controller: 'register-registerview',
    viewModel: {
        type: 'register-registerview'
    },
    // renderTo: Ext.getBody(),
    // layout: 'absolute',
    url: '/users/addUser',
    layout: "center",
    items: [{

        xtype: 'window',
        layout: 'form',
        title: '新用户注册',

        width: 400,
        height: 300,
        autoShow: true,
        x: 500,
        y: 300,
        style: { backGround: 'gray' },
        items: [

            {
                xtype: 'textfield',

                fieldLabel: '用户名',
                name: 'name',

            },
            { xtype: 'textfield', fieldLabel: '密码', name: 'password' },
            {
                xtype: 'textfield',
                fieldLabel: '确认密码',
                name: 'confirmPassword',
            },
            {
                xtype: 'textfield',
                hidden: true,
                name: 'hidenPassword',
            },
        ],
        buttons: [{ //

                margin: '10 10 10 10',
                text: '保存',
                handler: 'save'
            },

            {
                margin: '10 10 10 10',
                text: '退出',
                handler: 'logout'
            }
        ],






    }],



});