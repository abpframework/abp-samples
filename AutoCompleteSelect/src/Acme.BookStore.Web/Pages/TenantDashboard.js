$(function () {
    var $dateRangePicker = $('#DashboardFilterForm .input-daterange');
    $dateRangePicker.datepicker({
        autoclose: true,
        language: abp.localization.currentCulture.cultureName
    });

    var widget = new abp.WidgetManager({
        filterForm: '#TenantDashboardWidgetsArea',
        filterCallback: function() {
            var dateRange = $dateRangePicker.data('datepicker');

            return {
                startDate: dateRange.dates[0].toISOString(),
                endDate: dateRange.dates[1].toISOString()
            };
        }
    });

    $('#DashboardFilterForm').submit(function(e) {
        e.preventDefault();
        widget.refresh();
    });

    widget.init();
});