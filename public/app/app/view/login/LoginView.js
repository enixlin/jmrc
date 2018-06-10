Ext.define('jmrc.view.login.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'jmrc.view.login.LoginController',
        'jmrc.view.login.LoginModel',
        'jmrc.view.main.MainView',
        'jmrc.view.register.RegisterView'
    ],

    plugins: 'viewport',

    controller: 'login-login',
    viewModel: {
        type: 'login-login'
    },
    // Fields will be arranged vertically, stretched to full width

    layout: "center",



    autoShow: true,

    url: '/auth/doLogin',
    items: [{
        xtype: 'window',
        title: '江门农商行国际业务信息系统',
        iconCls: 'x-fa fa-tv',
        width: 300,
        height: 250,
        layout: "auto",
        autoShow: true,
        border: true,
        style: { border: '4px solid #5fa2dd', borderRadius: '5px' },

        items: [{
                fieldLabel: '用户',
                xtype: 'combo',
                store: Ext.create('jmrc.store.User'),
                Width: 250,
                labelAlign: 'right',
                labelWidth: 80,
                valueField: 'id',
                displayField: 'name',
                emptyText: "请输入用户名称",
                blankText: '用户名称不能为空！',
                margin: '20 10 30 10',
                name: 'id',
                allowBlank: false
            }, {
                fieldLabel: '密码',

                Width: 250,
                labelAlign: 'right',
                labelWidth: 80,
                xtype: 'textfield',
                emptyText: "请输入用户密码",
                blankText: '用户密码不能为空！',
                margin: '10 10 10 10',
                inputType: "password",
                name: 'password',
                id: 'password',
                allowBlank: false
            },

            // 新注册用户
            {
                xtype: 'button',
                text: '新注册用户',
                width: 80,
                iconCls: 'x-fa fa-user',
                margin: '10 5 5 10',
                handler: "onregister"
            },

            // Reset and Submit buttons
            {
                xtype: 'button',
                text: '重置',
                width: 80,
                iconCls: 'x-fa fa-remove',
                margin: '10 5 5 10',
                handler: "onreset"
            }, {
                xtype: 'button',
                text: '登录',
                iconCls: 'x-fa fa-home',
                width: 80,
                formBind: true, //only enabled once the form is valid
                disabled: true,
                margin: '10 5 5 10',
                handler: "onlogin"
            }

        ],



    }]



});