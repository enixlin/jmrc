/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('jmrc.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',




    init: function() {



    },

    onItemSelected: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },
    logout: function() {
        if (confirm('是否要退出?')) {
            // Remove the localStorage key/value
            Ext.Ajax.request({ url: "/auth/doLogout" });
            var view = this.getView();
            view.destroy();
            Ext.create({
                xtype: 'login'
            });
        }

    }


});