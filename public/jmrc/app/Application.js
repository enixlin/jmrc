/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('jmrc.Application', {
    extend: 'Ext.app.Application',

    name: 'jmrc',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function() {
        // TODO - Launch the application
        this.checkLogin();
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    checkLogin: function() {
        Ext.Ajax.request({
            url: "/auth/checkLogin",
            success: function(response, opts) {
                console.log(`response.responseText is ${response.responseText}`);
                var obj = response.responseText;
                Ext.create({
                    xtype: obj != "false" ? 'app-main' : 'login',
                    layout: "form",
                    width: 300,
                    height: 300,
                    autoShow: true
                });
            }
        });
    }

});