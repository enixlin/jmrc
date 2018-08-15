/**
 * 全局配置类，用于保存用户信息，用户喜好主题等信息
 * 
 */
Ext.define('jmrc.util.Config', {
    singleton: true, //单例类型
    alternateClassName: "CFG",
    config: {
        userInfo: { name: null, id: null }, //用户信息
        roler_list: [],
        appName: 'JMRC国际业务',
        welcomeMessage: '欢迎使用JMRC国际业务信息系统',
        theme: null
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent(arguments);

    }
});