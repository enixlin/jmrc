Ext.define('jmrc.view.user.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user-userview',
    data: {
        name: 'jmrc',
        pp: Ext.create('jmrc.store.UserStore'),
    },


    columns: [
        { text: 'id', dataIndex: 'id' },
        { text: 'name', dataIndex: 'name', flex: 1 },
        { text: 'password', dataIndex: 'password', flex: 1 },
        { text: 'status', dataIndex: 'status', flex: 1 }
    ]

});