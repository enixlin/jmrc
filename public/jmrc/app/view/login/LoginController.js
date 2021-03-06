Ext.define("jmrc.view.login.LoginController", {
    extend: "Ext.app.ViewController",
    alias: "controller.login-login",

    init: function() {


        //alert("init");
        window.resizeTo(1338, 768);

    },

    afterRender: function() {
        //console.log("this is login window render ....");
        let me = this;
        let win = me.getReferences().loginwin;
        win.setTitle(CFG.getWelcomeMessage());
        // console.log(win);
    },
    onlogin: function() {
        //alert("ok");
        // console.log(this.getView().getForm());
        let me = this;
        var form = this.getView().getForm();
        var view = this.getView();
        let password = form.getFieldValues()["password"];
        let id = form.getFieldValues()["id"];
        let url = form.url;

        if (form.isValid()) {
            Ext.Ajax.request({
                url: url,
                params: { id: id, password: b64_md5(password) },
                success: function(result) {
                    console.log("result.responseText is :" + result.responseText);
                    if (result.responseText != "false") {
                        let loggedUser = eval("(" + result.responseText + ")");
                        console.log("loggedUser is:" + loggedUser);
                        console.log("result.responseText is :" + result.responseText);
                        // console.log(loggedUser);
                        CFG.setUserInfo(loggedUser);
                        console.log("cfg is:" + CFG.getUserInfo().name);
                        view.destroy();
                        Ext.create({
                            xtype: "app-main"
                        });
                    } else {
                        let tip = Ext.getCmp('tip');
                        tip.setHtml("用户名或密码有误,请重新输入");
                        tip.setHidden(false);
                        tip.setDisabled(true);
                        tip.setStyle({
                            fontWeight: 'bold',
                            color: 'red',
                            border: 0,
                            // padding: '10px'
                        });

                        //me.onreset();
                    }
                }
            });

        }
    },


    onregister: function() {
        var view = this.getView();
        view.destroy();
        Ext.create({
            xtype: "register"
        });
    },

    onreset: function() {
        this.getView()
            .getForm()
            .reset();
    },
    ontest: function() {}
});