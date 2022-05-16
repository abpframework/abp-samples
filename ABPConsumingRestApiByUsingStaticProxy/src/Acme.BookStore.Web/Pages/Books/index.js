$(function () {
    var l = abp.localization.getResource('BookStore');

    $('#BooksTable').DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[1, "asc"]],
            searching: false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(acme.bookStore.books.book.getList),
            columnDefs: [
                {
                    title: l('Name'),
                    data: "name"
                },
                {
                    title: l('AuthorName'),
                    data: "authorName"
                },
                {
                    title: l('Price'),
                    data: "price"
                }
            ]
        })
    );
});
