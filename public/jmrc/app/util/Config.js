/**
 * 全局配置类，用于保存用户信息，用户喜好主题等信息
 * 
 */
Ext.define('jmrc.util.Config', {
    singleton: true, //单例类型
    config: {
        userInfo: null, //用户信息
        theme: null, //使用主题
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent(arguments);

    }
});