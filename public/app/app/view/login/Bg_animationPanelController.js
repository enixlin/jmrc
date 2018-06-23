Ext.define('jmrc.view.login.Bg_animationPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-bganimation',

    afterRender: function() {
        showAnimation();
        console.log("this is afterRender funciton is bganimation controller run.... ");
    },







});