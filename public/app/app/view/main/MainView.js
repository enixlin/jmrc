/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('jmrc.view.main.MainView', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'jmrc.view.main.MainController',
        'jmrc.view.main.MainModel',
        'jmrc.view.main.List',
        'jmrc.view.register.RegisterView',
        'jmrc.view.user.UserView',
        'jmrc.view.report.ReportView',
        'jmrc.view.report.ReportViewController',
        'jmrc.view.user.UserViewController'
    ],
    plugins: 'viewport',
    controller: 'main',
    viewModel: 'main',
    //html: 'main page'

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },


    items: [

        {
            title: '报表',
            iconCls: 'fa-tv',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'report'
            }]
        },


        {
            title: '工作提示',
            iconCls: 'fa-tv',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        }, {
            title: '业绩报表',
            iconCls: 'fa-line-chart',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: '用户管理',
            iconCls: 'fa-users',
            items: [{
                xtype: 'user'
            }]

        }, {
            title: '系统设置',
            iconCls: 'fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        },
        {
            title: '退出系统',
            iconCls: 'fa-cancel',
            layout: 'center',
            tbar: [
                { text: 'logout', layout: 'center', handler: "logout" },
            ]

        },
        {
            title: 'ftp系统',
            iconCls: 'fa-cancel',
            layout: 'center',
            tbar: [
                { text: '取得ftp服务器目录', layout: 'center', handler: "getDirectory" },
            ]
        },
        {
            title: '报表系统',
            iconCls: 'fa-cancel',
            layout: 'center',





        }



    ]
});