Ext.define('jmrc.view.user.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user-userview',
    data: {
        name: 'jmrc',
        pp: Ext.create('jmrc.store.UserStore'),

    },




});