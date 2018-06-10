Ext.define('jmrc.view.register.RegisterView', {
    extend: 'Ext.form.Panel',
    xtype: 'register',

    requires: [
        'jmrc.view.register.RegisterViewController',
        'jmrc.view.register.RegisterViewModel'
    ],

    controller: 'register-registerview',
    viewModel: {
        type: 'register-registerview'
    },
    renderTo: Ext.getBody(),
    layout: 'absolute',
    url: '/users/addUser',

    items: [{

        xtype: 'panel',

        width: 500,
        height: 400,
        x: 300,
        y: 300,
        style: { backGround: 'gray' },


        items: [

            {
                xtype: 'textfield',
                fieldLabel: '用户名',
                name: 'name',
                listeners: {
                    'change': "checkname"
                }
            },
            { xtype: 'textfield', fieldLabel: '密码', name: 'password' },
            { xtype: 'textfield', fieldLabel: '确认密码', name: 'confirmPassword' },

            { //
                xtype: 'button',
                text: '保存',
                handler: 'save'
            },

        ]



    }],



});