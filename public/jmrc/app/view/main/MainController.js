/**
 * This class is the controller for the main view for the application. It is
 * specified as the "controller" of the Main view class.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */



// 应用程序主界面
Ext.define("jmrc.view.main.MainController", {
    extend: "Ext.app.ViewController",

    alias: "controller.main",


    onItemSelected: function(sender, record) {
        Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
    },
    logout: function() {
        if (confirm("是否要退出?")) {
            // Remove the localStorage key/value
            Ext.Ajax.request({ url: "/auth/doLogout" });
            var view = this.getView();
            view.destroy();
            Ext.create({
                xtype: "login"
            });
        }
    },

    onConfirm: function(choice) {
        if (choice === "yes") {
            //
        }
    },


    showRolerListWindow: function() {
        var me = this;
        let choicerolerwindow = me.getReferences().choicerolerwindow;
        if (choicerolerwindow) {
            choicerolerwindow.show();
        } else {
            me.choicRoler(CFG.getUserInfo().id);
        }

    },

    // 根据用户角色加载不同的用户功能
    choicRoler: function(user_id) {
        var me = this;
        return new Promise(function(resolve, reject) {
            Ext.Ajax.request({
                url: "/auth/getRolerByUserId",
                params: { id: user_id },
                success: function(result) {
                    let data = eval("(" + result.responseText + ")");
                    // alert(data instanceof Array);
                    // alert(data.length);
                    if (data.length == 1) {
                        me.initAuthor(data[0].id);
                        return;
                    }
                    let win = Ext.create("Ext.window.Window", {
                        title: "请选择你要使用的角色",
                        reference: 'choicerolerwindow',
                        width: 200,
                        height: 200
                    });
                    let rolers = Ext.create('Ext.form.RadioGroup', { reference: 'rolerRadioGroup', layout: { type: "vbox", align: "left" }, margin: '10 10 10 10' });

                    win.add(rolers);
                    win.add({ xtype: "button", text: '选择', handler: "onChoiceRoler", layout: { type: 'hbox', align: 'right' } });
                    // 将角色数据写入全局设置中
                    CFG.setRoler_list(data);
                    for (let index in data) {
                        rolers.add({ boxLabel: data[index]["name"], inputValue: data[index]["id"] });
                    }
                    win.show();
                    resolve(data);
                    // view.add({ title: element["name"] });
                }
            });
        });
    },
    onChoiceRoler: function() {
        let me = this;
        let ref = me.getReferences();
        let roler_id = ref.rolerRadioGroup.getChecked()[0].inputValue;
        // 隐藏角色选择窗口
        ref.choicerolerwindow.hide();
        this.initAuthor(roler_id);

        console.log(roler_id);
    },

    init: function() {
        // 选择角色
        let user_id = CFG.getUserInfo().id;
        let user_name = CFG.getUserInfo().name;
        // this.getView().tbar[0].text = user_name;
        this.getReferences().user_name.text = user_name;
        console.log(CFG.getUserInfo());
        console.log(user_id);
        this.choicRoler(user_id).then(function(result) {

        });
    },

    // 根据用户角色加载不同的用户功能
    initAuthor: function(roler_id) {
        let me = this;
        me.getView().removeAll();
        let view = this.getView();
        Ext.Ajax.request({
            url: "/auth/getAuthByRoler",
            params: { rolerId: roler_id },
            success: function(result) {
                let data = eval(result.responseText);
                data.forEach(element => {
                    me.getView().add({ title: element["name"], iconCls: element["icon"], items: [{ xtype: element['panel'] }] });
                });
            }
        });
    }


});