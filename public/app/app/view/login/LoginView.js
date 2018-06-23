Ext.define('jmrc.view.login.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'jmrc.view.login.LoginController',
        'jmrc.view.login.LoginModel',
        'jmrc.view.main.MainView',
        'jmrc.view.register.RegisterView',
        'jmrc.view.login.Bg_animationPanel',
        'jmrc.view.login.LoginWindow'

    ],

    plugins: 'viewport',


    controller: 'login-login',
    viewModel: {
        type: 'login-login'
    },
    // Fields will be arranged vertically, stretched to full width

    layout: "border",






    url: '/auth/doLogin',
    items: [
        { xtype: 'loginwindow', region: 'east' },
        { xtype: 'bg_animation_panel', region: 'west', title: 'west' },




    ]



});