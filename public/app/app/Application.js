/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('jmrc.Application', {
    extend: 'Ext.app.Application',

    name: 'jmrc',

    // me: this,
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
            url: "/auth/checkLogin"
        }).then(function(response, opts) {
                var obj = Ext.decode(response.responseText);
                Ext.create({
                    xtype: obj ? 'app-main' : 'login'
                });
            },
            function(response, opts) {
                console.log('server-side failure with status code ' + response.status);

            });
    }



});