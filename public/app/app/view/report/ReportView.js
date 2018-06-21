Ext.define('jmrc.view.report.ReportView', {
    extend: 'Ext.panel.Panel',
    xtype: 'report',

    requires: [
        'jmrc.view.report.ReportViewController',
        'jmrc.view.report.ReportViewModel'
    ],

    controller: 'report-reportview',
    viewModel: {
        type: 'report-reportview'
    },

    tbar: [{ text: 'getRecordList', handler: 'getRecordList' }]
});