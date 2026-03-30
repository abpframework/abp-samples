$(function () {
    var l = abp.localization.getResource('PersonalBudget');
    var categoryService = window.personalBudget.services.categories.category;

    var createModal = new abp.ModalManager(abp.appPath + 'Categories/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Categories/EditModal');

    var dataTable = $('#CategoriesTable').DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[1, 'asc']],
            searching: false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(categoryService.getList),
            columnDefs: [
                {
                    title: l('Actions'),
                    rowAction: {
                        items: [
                            {
                                text: l('Edit'),
                                visible: abp.auth.isGranted('PersonalBudget.Categories.Edit'),
                                action: function (data) {
                                    editModal.open({ id: data.record.id });
                                }
                            },
                            {
                                text: l('Delete'),
                                visible: abp.auth.isGranted('PersonalBudget.Categories.Delete'),
                                confirmMessage: function (data) {
                                    return l('CategoryDeletionConfirmationMessage', data.record.name);
                                },
                                action: function (data) {
                                    categoryService.delete(data.record.id).then(function () {
                                        abp.notify.success(l('SuccessfullyDeleted'));
                                        dataTable.ajax.reload();
                                    });
                                }
                            }
                        ]
                    }
                },
                {
                    title: l('CategoryName'),
                    data: 'name'
                },
                {
                    title: l('CategoryDescription'),
                    data: 'description',
                    render: function (data) {
                        return data || '-';
                    }
                },
                {
                    title: l('CategoryIcon'),
                    data: 'icon',
                    render: function (data) {
                        if (data) {
                            return '<i class="' + data + '"></i> ' + data;
                        }
                        return '-';
                    }
                },
                {
                    title: l('CreationTime'),
                    data: 'creationTime',
                    render: function (data) {
                        return luxon.DateTime.fromISO(data, { locale: abp.localization.currentCulture.name }).toLocaleString(luxon.DateTime.DATETIME_SHORT);
                    }
                }
            ]
        })
    );

    createModal.onResult(function () {
        dataTable.ajax.reload();
    });

    editModal.onResult(function () {
        dataTable.ajax.reload();
    });

    $('#NewCategoryButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });
});
