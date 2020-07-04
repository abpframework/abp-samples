$(function () {
    var l = abp.localization.getResource('BookStore');
    var createModal = new abp.ModalManager(abp.appPath + 'Books/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Books/EditModal');

    var dataTable = $('#BooksTable').DataTable(
        abp.libs.datatables.normalizeConfiguration({
                ajax: abp.libs.datatables.createAjax(acme.bookStore.books.book.getList),
                columnDefs: [
                    {
                        title: l('Actions'),
                        rowAction: {
                            items:
                                [
                                    {
                                        text: l('Edit'),
                                        action: function (data) {
                                            editModal.open({ id: data.record.id });
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
                        title: l('Type'),
                        data: "type",
                        render: function (data) {
                            return l('Enum:BookType:' + data);
                        }
                    },
                    {
                        title: l('PublishDate'),
                        data: "publishDate",
                        render: function (data) {
                            return luxon
                                .DateTime
                                .fromISO(data, {
                                    locale: abp.localization.currentCulture.name
                                }).toLocaleString();
                        }
                    },
                    {
                        title: l('Price'),
                        data: "price"
                    },
                    {
                        title: l('CreationTime'), data: "creationTime",
                        render: function (data) {
                            return luxon
                                .DateTime
                                .fromISO(data, {
                                    locale: abp.localization.currentCulture.name
                                }).toLocaleString(luxon.DateTime.DATETIME_SHORT);
                        }
                    }
                ]
            }
        )
    );

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