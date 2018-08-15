Ext.define('jmrc.view.user.UserViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-userview',
    


    showAddUser: function() {
        var me=this;
        
       var win= Ext.create({ xtype: 'register' });
    //    if(Ext.WindowManager.register (win)){
    //        console.log("add window is ok");
    //     }else{
    //         console.log("add window is fail");
    //    }
    },
    hidderAllWin:function(){
       console.log(Ext.WindowManager);
    },
  

    refresh: function() {
        console.log(this.getView().getViewModel().data['pp'].reload());

    },
    freezing: function() {
        var gp = Ext.ComponentQuery.query("grid");

        console.log(gp[1]);
    },
    post: function() {
        var s = this.getViewModel().data['pp'];

    }

});