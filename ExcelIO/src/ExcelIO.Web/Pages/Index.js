(function ($) {
    var l = abp.localization.getResource('AbpIdentity');
    var _identityUserAppService = volo.abp.identity.identityUser;

    var _$table = $('#IdentityUsersWrapper').find('table');
    var _dataTable = _$table.DataTable(
        abp.libs.datatables.normalizeConfiguration({
            order: [[1, 'asc']],
            processing: true,
            serverSide: true,
            scrollX: true,
            paging: true,
            searching: false,
            ajax: abp.libs.datatables.createAjax(
                _identityUserAppService.getList
            ),
            columnDefs: [
                {
                    title: l('UserName'),
                    data: 'userName',
                },
                {
                    title: l('EmailAddress'),
                    data: 'email',
                },
                {
                    title: l('Last Modification Time'),
                    data: 'lastModificationTime',
                    dataFormat: "datetime",
                }
            ]
        })
    );
})(jQuery);
