$(function () {
    var l = abp.localization.getResource('BookReviewTracker4');
    var createModal = new abp.ModalManager(abp.appPath + 'Reviews/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Reviews/EditModal');

    var getFilter = function () {
        return {
            bookId: $('#BookFilter').val() || undefined,
            rating: $('#RatingFilter').val() || undefined
        };
    };

    var dataTable = $('#ReviewsTable').DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[1, "desc"]],
            searching: false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(bookReviewTracker4.books.review.getList, getFilter),
            columnDefs: [
                {
                    title: l('Actions'),
                    rowAction: {
                        items: [
                            {
                                text: l('Edit'),
                                visible: abp.auth.isGranted('BookReviewTracker4.Reviews.Update'),
                                action: function (data) {
                                    editModal.open({ id: data.record.id });
                                }
                            },
                            {
                                text: l('Delete'),
                                visible: abp.auth.isGranted('BookReviewTracker4.Reviews.Delete'),
                                confirmMessage: function (data) {
                                    return l('ReviewDeletionConfirmation');
                                },
                                action: function (data) {
                                    bookReviewTracker4.books.review
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
                    title: l('BookTitle'),
                    data: "bookTitle"
                },
                {
                    title: l('Rating'),
                    data: "rating",
                    render: function (data) {
                        var stars = '';
                        for (var i = 1; i <= 5; i++) {
                            stars += i <= data
                                ? '<i class="fa fa-star text-warning"></i>'
                                : '<i class="fa fa-star text-muted"></i>';
                        }

                        var colors = { 1: 'danger', 2: 'warning', 3: 'info', 4: 'primary', 5: 'success' };
                        var labels = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' };
                        return stars + ' <span class="badge bg-' + colors[data] + ' ms-1">' + labels[data] + '</span>';
                    }
                },
                {
                    title: l('Comment'),
                    data: "comment",
                    render: function (data) {
                        if (!data) return '<span class="text-muted">-</span>';
                        return data.length > 80 ? data.substring(0, 80) + '...' : data;
                    }
                },
                {
                    title: l('ReviewDate'),
                    data: "reviewDate",
                    render: function (data) {
                        return data ? luxon.DateTime.fromISO(data).toLocaleString() : '';
                    }
                }
            ]
        })
    );

    // Load books for filter dropdown
    bookReviewTracker4.books.book.getList({ maxResultCount: 1000 }).then(function (result) {
        var select = $('#BookFilter');
        result.items.forEach(function (book) {
            select.append($('<option>').val(book.id).text(book.title));
        });
    });

    $('#BookFilter').change(function () {
        dataTable.ajax.reload();
    });

    $('#RatingFilter').change(function () {
        dataTable.ajax.reload();
    });

    createModal.onResult(function () {
        dataTable.ajax.reload();
    });

    editModal.onResult(function () {
        dataTable.ajax.reload();
    });

    $('#NewReviewButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });
});
