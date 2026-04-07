$(function () {
    var l = abp.localization.getResource('BookReviewTracker4');

    // Load stats
    bookReviewTracker4.authors.author.getList({ maxResultCount: 1 }).then(function (result) {
        $('#totalAuthors').text(result.totalCount);
    });

    bookReviewTracker4.books.book.getList({ maxResultCount: 1 }).then(function (result) {
        $('#totalBooks').text(result.totalCount);
    });

    bookReviewTracker4.books.review.getList({ maxResultCount: 1 }).then(function (result) {
        $('#totalReviews').text(result.totalCount);
    });

    // Load top rated books
    bookReviewTracker4.books.book.getList({ maxResultCount: 1000 }).then(function (result) {
        var books = result.items
            .filter(function (b) { return b.reviewCount > 0; })
            .sort(function (a, b) { return b.averageRating - a.averageRating; })
            .slice(0, 5);

        var tbody = $('#topBooksBody');
        tbody.empty();

        if (books.length === 0) {
            tbody.append('<tr><td colspan="4" class="text-center text-muted py-3">' + l('NoData') + '</td></tr>');
            return;
        }

        books.forEach(function (book) {
            var stars = '';
            var fullStars = Math.floor(book.averageRating);
            for (var i = 1; i <= 5; i++) {
                stars += i <= fullStars
                    ? '<i class="fa fa-star text-warning"></i>'
                    : '<i class="fa fa-star text-muted"></i>';
            }

            tbody.append(
                '<tr>' +
                '<td><a href="/Books">' + book.title + '</a></td>' +
                '<td>' + (book.authorName || '-') + '</td>' +
                '<td>' + stars + ' <small class="text-muted">(' + book.averageRating + ')</small></td>' +
                '<td><span class="badge bg-info">' + book.reviewCount + '</span></td>' +
                '</tr>'
            );
        });
    });

    // Load latest reviews
    bookReviewTracker4.books.review.getList({ maxResultCount: 5, sorting: 'ReviewDate desc' }).then(function (result) {
        var tbody = $('#latestReviewsBody');
        tbody.empty();

        if (result.items.length === 0) {
            tbody.append('<tr><td colspan="4" class="text-center text-muted py-3">' + l('NoData') + '</td></tr>');
            return;
        }

        result.items.forEach(function (review) {
            var stars = '';
            for (var i = 1; i <= 5; i++) {
                stars += i <= review.rating
                    ? '<i class="fa fa-star text-warning"></i>'
                    : '<i class="fa fa-star text-muted"></i>';
            }

            var comment = review.comment || '';
            if (comment.length > 50) {
                comment = comment.substring(0, 50) + '...';
            }

            var date = review.reviewDate
                ? luxon.DateTime.fromISO(review.reviewDate).toLocaleString()
                : '';

            tbody.append(
                '<tr>' +
                '<td>' + (review.bookTitle || '-') + '</td>' +
                '<td>' + stars + '</td>' +
                '<td>' + comment + '</td>' +
                '<td><small>' + date + '</small></td>' +
                '</tr>'
            );
        });
    });
});
