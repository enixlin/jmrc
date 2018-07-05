Ext.define('jmrc.view.user.UserView', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',

    requires: [
        'jmrc.view.user.UserViewController',
        'jmrc.view.user.UserViewModel'
    ],

    controller: 'user-userview',
    viewModel: {
        type: 'user-userview'
    },

    items: [{
        xtype: 'grid',
        title: '用户管理',
        tbar: [{ text: '新增', handler: 'showAddUser' }, { text: '刷新', handler: 'refresh' }, { text: 'freezing', handler: 'freezing' }],
        bind: {
            store: '{pp}',
            columns: '{columns}'
        },

        default: { align: "center" },
        columns: [
            { text: '用户编号', dataIndex: 'id', align: 'center' },
            { text: '用户姓名', dataIndex: 'name', flex: 1, align: 'center' },
            { text: '密码', dataIndex: 'password', flex: 1, align: 'center' },
            { text: '状态(0-停用 1-正常)', dataIndex: 'status', flex: 1, align: 'center' }
        ]

    }]
});