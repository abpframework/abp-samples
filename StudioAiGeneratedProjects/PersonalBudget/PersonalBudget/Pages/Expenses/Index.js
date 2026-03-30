$(function () {
    var l = abp.localization.getResource('PersonalBudget');
    var expenseService = window.personalBudget.services.expenses.expense;

    var createModal = new abp.ModalManager(abp.appPath + 'Expenses/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Expenses/EditModal');

    var getFilters = function () {
        return {
            filter: $('#FilterInput').val(),
            categoryId: $('#CategoryFilterSelect').val() || null,
            startDate: $('#StartDateInput').val() || null,
            endDate: $('#EndDateInput').val() || null,
            minAmount: $('#MinAmountInput').val() ? parseFloat($('#MinAmountInput').val()) : null,
            maxAmount: $('#MaxAmountInput').val() ? parseFloat($('#MaxAmountInput').val()) : null
        };
    };

    var dataTable = $('#ExpensesTable').DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[2, 'desc']],
            searching: false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(expenseService.getList, getFilters),
            columnDefs: [
                {
                    title: l('Actions'),
                    rowAction: {
                        items: [
                            {
                                text: l('Edit'),
                                visible: abp.auth.isGranted('PersonalBudget.Expenses.Edit'),
                                action: function (data) {
                                    editModal.open({ id: data.record.id });
                                }
                            },
                            {
                                text: l('Delete'),
                                visible: abp.auth.isGranted('PersonalBudget.Expenses.Delete'),
                                confirmMessage: function (data) {
                                    return l('ExpenseDeletionConfirmationMessage', data.record.description);
                                },
                                action: function (data) {
                                    expenseService.delete(data.record.id).then(function () {
                                        abp.notify.success(l('SuccessfullyDeleted'));
                                        dataTable.ajax.reload();
                                    });
                                }
                            }
                        ]
                    }
                },
                {
                    title: l('ExpenseDescription'),
                    data: 'description'
                },
                {
                    title: l('Date'),
                    data: 'date',
                    render: function (data) {
                        return luxon.DateTime.fromISO(data, { locale: abp.localization.currentCulture.name }).toLocaleString(luxon.DateTime.DATE_SHORT);
                    }
                },
                {
                    title: l('Amount'),
                    data: 'amount',
                    render: function (data) {
                        return '$' + parseFloat(data).toFixed(2);
                    }
                },
                {
                    title: l('Category'),
                    data: 'categoryName'
                },
                {
                    title: l('Notes'),
                    data: 'notes',
                    render: function (data) {
                        return data || '-';
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

    $('#NewExpenseButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });

    $('#FilterButton').click(function (e) {
        e.preventDefault();
        dataTable.ajax.reload();
    });

    $('#ClearFilterButton').click(function (e) {
        e.preventDefault();
        $('#FilterInput').val('');
        $('#CategoryFilterSelect').val('');
        $('#StartDateInput').val('');
        $('#EndDateInput').val('');
        $('#MinAmountInput').val('');
        $('#MaxAmountInput').val('');
        dataTable.ajax.reload();
    });

    // Allow pressing Enter in filter inputs to trigger reload
    $('#FilterInput, #MinAmountInput, #MaxAmountInput').on('keypress', function (e) {
        if (e.which === 13) {
            dataTable.ajax.reload();
        }
    });
});
