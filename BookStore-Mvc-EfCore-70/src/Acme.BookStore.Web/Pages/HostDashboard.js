$(function () {
	moment.localeData().preparse = (s)=>s;
    moment.localeData().postformat = (s)=>s;
	
    var $dateRangePicker = $('#DashboardFilterForm .date-range-picker');
    $dateRangePicker.daterangepicker({
        "showDropdowns": true,
        "autoUpdateInput": false,
        "autoApply": true,
        "opens": "center",
        "drops": "auto",
        "startDate": moment().add(-1, 'month'),
        "endDate": moment(),
    }).on('apply.daterangepicker', function(ev, picker) {
        var startDate = picker.startDate.format('L');
        var endDate = picker.endDate.format('L');
        var sperator = ' - ';
        $(this).val(startDate + sperator + endDate);
    });

    $dateRangePicker.trigger('apply.daterangepicker', $dateRangePicker.data('daterangepicker'));

    var widget = new abp.WidgetManager({
        filterForm: '#HostDashboardWidgetsArea',
        filterCallback: function () {
            var dateRange = $dateRangePicker.data('daterangepicker');

            return {
                startDate: dateRange.startDate.toISOString(),
                endDate: dateRange.endDate.toISOString()
            };
        }
    });

    $('#DashboardFilterForm').submit(function (e) {
        e.preventDefault();
        widget.refresh();
    });

    widget.init();
});