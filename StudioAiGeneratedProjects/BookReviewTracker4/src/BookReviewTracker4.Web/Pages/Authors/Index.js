$(function () {
    var l = abp.localization.getResource('BookReviewTracker4');
    var createModal = new abp.ModalManager(abp.appPath + 'Authors/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Authors/EditModal');

    var getFilter = function () {
        return {
            filter: $('#SearchFilter').val() || undefined
        };
    };

    var dataTable = $('#AuthorsTable').DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[1, "asc"]],
            searching: false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(bookReviewTracker4.authors.author.getList, getFilter),
            columnDefs: [
                {
                    title: l('Actions'),
                    rowAction: {
                        items: [
                            {
                                text: l('Edit'),
                                visible: abp.auth.isGranted('BookReviewTracker4.Authors.Update'),
                                action: function (data) {
                                    editModal.open({ id: data.record.id });
                                }
                            },
                            {
                                text: l('Delete'),
                                visible: abp.auth.isGranted('BookReviewTracker4.Authors.Delete'),
                                confirmMessage: function (data) {
                                    return l('AuthorDeletionConfirmation', data.record.name);
                                },
                                action: function (data) {
                                    bookReviewTracker4.authors.author
                                        .delete(data.record.id)
                                        .then(function () {
                                            abp.notify.info(l('SuccessfullyDeleted'));
                                            dataTable.ajax.reload();
                                        });
                                }
                            }
                        ]
                    }
                },
                {
                    title: l('Name'),
                    data: "name"
                },
                {
                    title: l('Bio'),
                    data: "bio",
                    render: function (data) {
                        if (!data) return '<span class="text-muted">-</span>';
                        return data.length > 100 ? data.substring(0, 100) + '...' : data;
                    }
                },
                {
                    title: l('BookCount'),
                    data: "bookCount",
                    render: function (data) {
                        return '<span class="badge bg-info">' + (data || 0) + '</span>';
                    }
                }
            ]
        })
    );

    // Search on Enter key
    $('#SearchFilter').on('keypress', function (e) {
        if (e.which === 13) {
            dataTable.ajax.reload();
        }
    });

    $('#SearchButton').click(function () {
        dataTable.ajax.reload();
    });

    createModal.onResult(function () {
        dataTable.ajax.reload();
    });

    editModal.onResult(function () {
        dataTable.ajax.reload();
    });

    $('#NewAuthorButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });
});
