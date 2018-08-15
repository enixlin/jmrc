/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("jmrc.view.main.Main", {
    extend: "Ext.tab.Panel",
    xtype: "app-main",

    requires: [
        "Ext.plugin.Viewport",
        "Ext.window.MessageBox",
        "jmrc.view.main.MainController",
        "jmrc.view.main.MainModel",
        "jmrc.view.main.List",
        "jmrc.view.register.RegisterView",
        "jmrc.view.user.UserView",
        "jmrc.view.tab.tablayout",
        // 'jmrc.view.report.ReportView',
        // 'jmrc.view.report.ReportViewController',
        "jmrc.view.user.UserViewController"
        // 'jmrc.view.login.LoginView',
    ],

    controller: "main",
    viewModel: "main",
    plugins: "viewport",
    ui: "navigation",

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: "stretchmax"
        },
        // title:CFG.getUserInfo(),
        title: {
            bind: {
                // text:CFG.getUserInfo()
                text: '{name}'
            },
            // text:CFG.getUserInfo(),
            flex: 0
        },
        iconCls: "fa-university"
    },

    tabBar: {
        flex: 1,
        layout: {
            align: "stretch",
            overflowHandler: "none"
        }
        //items: [{ type: 'button', handler: 'logout', text: '退出登录' }]
    },

    responsiveConfig: {
        tall: {
            headerPosition: "top"
        },
        wide: {
            headerPosition: "left"
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: "responsive",
            responsiveConfig: {
                wide: {
                    iconAlign: "left",
                    textAlign: "left"
                },
                tall: {
                    iconAlign: "top",
                    textAlign: "center"
                }
            }
        }
    },
    tbar: [
        { text: "角色转换", handler: "showRolerListWindow", defaultAlign: 'right' },
        { text: "", reference: "user_name" },
        { text: "退出登录", handler: "logout" },

    ]



});