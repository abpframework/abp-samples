$(function () {
    var l = abp.localization.getResource('BookReviewTracker4');
    var createModal = new abp.ModalManager(abp.appPath + 'Books/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Books/EditModal');

    var getFilter = function () {
        return {
            filter: $('#SearchFilter').val() || undefined,
            authorId: $('#AuthorFilter').val() || undefined
        };
    };

    var dataTable = $('#BooksTable').DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[1, "asc"]],
            searching: false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(bookReviewTracker4.books.book.getList, getFilter),
            columnDefs: [
                {
                    title: l('Actions'),
                    rowAction: {
                        items: [
                            {
                                text: l('Edit'),
                                visible: abp.auth.isGranted('BookReviewTracker4.Books.Update'),
                                action: function (data) {
                                    editModal.open({ id: data.record.id });
                                }
                            },
                            {
                                text: l('Delete'),
                                visible: abp.auth.isGranted('BookReviewTracker4.Books.Delete'),
                                confirmMessage: function (data) {
                                    return l('BookDeletionConfirmation', data.record.title);
                                },
                                action: function (data) {
                                    bookReviewTracker4.books.book
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
                    title: l('Title'),
                    data: "title"
                },
                {
                    title: l('AuthorName'),
                    data: "authorName"
                },
                {
                    title: l('PublishDate'),
                    data: "publishDate",
                    render: function (data) {
                        return data ? luxon.DateTime.fromISO(data).toLocaleString() : '';
                    }
                },
                {
                    title: l('AverageRating'),
                    data: "averageRating",
                    render: function (data) {
                        if (!data || data === 0) return '<span class="text-muted">-</span>';
                        var stars = '';
                        var full = Math.floor(data);
                        for (var i = 1; i <= 5; i++) {
                            stars += i <= full
                                ? '<i class="fa fa-star text-warning"></i>'
                                : '<i class="fa fa-star text-muted"></i>';
                        }
                        return stars + ' <small class="text-muted">(' + data + ')</small>';
                    }
                },
                {
                    title: l('ReviewCount'),
                    data: "reviewCount",
                    render: function (data) {
                        return '<span class="badge bg-info">' + (data || 0) + '</span>';
                    }
                }
            ]
        })
    );

    // Load authors for filter dropdown
    bookReviewTracker4.authors.author.getList({ maxResultCount: 1000 }).then(function (result) {
        var select = $('#AuthorFilter');
        result.items.forEach(function (author) {
            select.append($('<option>').val(author.id).text(author.name));
        });
    });

    $('#AuthorFilter').change(function () {
        dataTable.ajax.reload();
    });

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

    $('#NewBookButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });
});
