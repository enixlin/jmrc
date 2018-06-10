Ext.define('jmrc.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-login',

    onlogin: function() {
        //alert("ok");
        // console.log(this.getView().getForm());

        var form = this.getView().getForm();
        var view = this.getView();

        if (form.isValid()) {
            form.submit({
                success: function(form, action) {
                    //
                    view.destroy();
                    Ext.create({
                        xtype: 'app-main'
                    });
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            });
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