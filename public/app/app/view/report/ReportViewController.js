Ext.define('jmrc.view.report.ReportViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.report-reportview',


    getRecordList: function() {
        Ext.Ajax.request({
            url: '/report/getBusyRecord',
            params: { yw_type: 'pa', start: '20170101', end: '20170331' },
            success: function(response, opts) {
                // var obj = Ext.decode(response.responseText);
                var obj = response.responseText;
                console.log(obj);
                //return obj;

            },
        });
    }

});