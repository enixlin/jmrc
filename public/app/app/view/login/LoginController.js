Ext.define('jmrc.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-login',



    launch: function() {
        // console.log(Ext.getCmp('westgb'));
        console.log(this.getView());
    },
    onlogin: function() {
        //alert("ok");
        // console.log(this.getView().getForm());

        var form = this.getView().getForm();
        var view = this.getView();
        let password = form.getFieldValues()['password'];
        let id = form.getFieldValues()['id'];
        let url = form.url;

        if (form.isValid()) {
            Ext.Ajax.request({
                url: url,
                params: { id: id, password: b64_md5(password) },
                success: function(result) { //
                    console.log(result);
                    if (result.responseText != 'false') {
                        view.destroy();
                        Ext.create({
                            xtype: 'app-main'
                        });
                    }

                }
            });


            // form.submit({
            //     success: function(form, action) {
            //         //
            //         view.destroy();
            //         Ext.create({
            //             xtype: 'app-main'
            //         });
            //     },
            //     failure: function(form, action) {
            //         Ext.Msg.alert('Failed', action.result.msg);
            //     }
            // });
        }

    },

    onregister: function() {
        var view = this.getView();
        view.destroy();
        Ext.create({
            xtype: 'register'
        });
    },


    onreset: function() {
        this.getView().getForm().reset();

    }






});