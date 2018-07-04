Ext.define('jmrc.view.user.UserViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-userview',


    showAddUser: function() {
        Ext.create({ xtype: 'register' });
    },

    refresh: function() {
        console.log(this.getView().getViewModel().data['pp'].reload());

    },
    freezing: function() {
        var gp = Ext.ComponentQuery.query("grid");

        console.log(gp[1]);
    }

});