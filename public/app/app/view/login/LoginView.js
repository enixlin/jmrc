Ext.define('jmrc.view.login.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'jmrc.view.login.LoginController',
        'jmrc.view.login.LoginModel',
        'jmrc.view.main.MainView',
        'jmrc.view.register.RegisterView',
        'jmrc.view.login.Bg_animationPanel',
        'jmrc.view.login.Bg_animationPanelController',
        'jmrc.view.login.LoginWindow',
        'jmrc.view.login.InformationBar',
        'jmrc.view.login.InformationBarController'

    ],

    plugins: 'viewport',


    controller: 'login-login',
    viewModel: {
        type: 'login-login'
    },
    // Fields will be arranged vertically, stretched to full width

    layout: "border",
    border: 1,






    url: '/auth/doLogin',
    items: [
        { xtype: 'loginwindow', region: 'east' },
        { xtype: 'bg_animation_panel', region: 'west', id: "westbg" },
        { xtype: 'informationbar', region: 'south', id: "informationbar" },




    ]



});