Ext.define('jmrc.store.UserStore', {
    extend: 'Ext.data.Store',

    alias: 'store.userStore',
    autoLoad: true,

    fields: [
        'name', 'id', 'password', 'stauts'
    ],
    proxy: {
        type: 'ajax',
        url: '/users/getUserInformation',

    }
});