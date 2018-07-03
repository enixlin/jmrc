Ext.define('jmrc.view.login.LoginWindow', {
    extend: 'Ext.window.Window',
    xtype: 'loginwindow',
    title: '江门农商行国际业务信息系统',
    iconCls: 'x-fa fa-tv',
    width: 300,
    height: 250,
    margin: '5 5 5 5',
    layout: "auto",
    x: 920,
    y: 350,
    autoShow: true,
    border: true,
    style: { border: '4px solid #5fa2dd', borderRadius: '5px' },

    items: [{
            fieldLabel: '用户',
            // xtype: 'combo',
            xtype: 'textfield',
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

    ],
    buttons: [
        // Reset and Submit buttons
        {
            //xtype: 'button',
            text: '重置',
            width: 80,
            iconCls: 'x-fa fa-remove',
            margin: '10 25 5 10',
            handler: "onreset"
        }, {
            // xtype: 'button',
            text: '登录',
            iconCls: 'x-fa fa-home',
            width: 80,
            formBind: true, //only enabled once the form is valid
            disabled: true,
            margin: '10 25 5 10',
            handler: "onlogin"
        }
    ]

});