$(function () {
    var l = abp.localization.getResource('TaskAndCommentBoard');
    var taskId = $('#TaskId').val();
    var commentsContainer = $('#CommentsContainer');

    function commentTemplate(comment) {
        var deleteButton = '';

        if (abp.auth.isGranted('TaskAndCommentBoard.Comments.Delete')) {
            deleteButton = '<button class="btn btn-sm btn-outline-danger delete-comment" data-id="' + comment.id + '">' + l('Delete') + '</button>';
        }

        var creationTime = luxon.DateTime.fromISO(comment.creationTime).toLocaleString(luxon.DateTime.DATETIME_MED);

        return '<div class="comment-item">'
            + '<div class="comment-item__header">'
            + '<span class="comment-item__meta">' + creationTime + '</span>'
            + deleteButton
            + '</div>'
            + '<div class="comment-item__content">' + $('<div/>').text(comment.content).html() + '</div>'
            + '</div>';
    }

    function loadComments() {
        taskAndCommentBoard.services.tasks.taskComment
            .getListByTask(taskId)
            .then(function (result) {
                commentsContainer.empty();

                if (!result.items || result.items.length === 0) {
                    commentsContainer.append('<p class="text-muted mb-0">' + l('NoCommentsYet') + '</p>');
                    return;
                }

                result.items.forEach(function (comment) {
                    commentsContainer.append(commentTemplate(comment));
                });
            });
    }

    $('#AddCommentButton').on('click', function () {
        var content = $('#NewCommentContent').val();

        if (!content || !content.trim()) {
            abp.notify.warn(l('CommentContentRequired'));
            return;
        }

        taskAndCommentBoard.services.tasks.taskComment
            .create(taskId, { content: content })
            .then(function () {
                $('#NewCommentContent').val('');
                abp.notify.success(l('CreatedSuccessfully'));
                loadComments();
            });
    });

    commentsContainer.on('click', '.delete-comment', function () {
        var commentId = $(this).data('id');

        taskAndCommentBoard.services.tasks.taskComment
            .delete(commentId)
            .then(function () {
                abp.notify.success(l('DeletedSuccessfully'));
                loadComments();
            });
    });

    loadComments();
});
