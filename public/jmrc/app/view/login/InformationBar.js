Ext.define('jmrc.view.login.InformationBar', {
    extend: 'Ext.panel.Panel',
    xtype: 'informationbar',

    requires: [
        'jmrc.view.login.InformationBarController',
        'jmrc.view.login.InformationBarModel'
    ],

    controller: 'login-informationbar',
    viewModel: {
        type: 'login-informationbar'
    },
    width: '100%',
    // layout: 'form',
    align: 'center',

    items: [
        { xtype: 'label', text: '江门农商银行国际业务部信息处理系统', style: 'font:25' },
        { xtype: 'label', text: 'ALL RIGHT RELEASE BY ENIXLIN@2018' }
    ],
    // html: "<center><h1> <style='background:red'> 江门农商银行国际业务部信息处理系统 </style></h1></center>",
});