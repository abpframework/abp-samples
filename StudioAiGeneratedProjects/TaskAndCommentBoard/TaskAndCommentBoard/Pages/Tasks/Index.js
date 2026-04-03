$(function () {
    var l = abp.localization.getResource('TaskAndCommentBoard');
    var taskService = taskAndCommentBoard.services.tasks.task;
    var createModal = new abp.ModalManager(abp.appPath + 'Tasks/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Tasks/EditModal');

    var state = {
        items: [],
        filter: 'all',
        query: ''
    };

    var $tasksList = $('#TasksList');
    var $tasksEmptyState = $('#TasksEmptyState');
    var $tasksStats = $('#TasksStats');

    function truncate(text, max) {
        if (!text) {
            return '';
        }

        return text.length > max ? text.substring(0, max) + '…' : text;
    }

    function formatDate(value) {
        if (!value) {
            return '';
        }

        return luxon.DateTime.fromISO(value).toLocaleString(luxon.DateTime.DATETIME_MED);
    }

    function getFilteredItems() {
        return state.items.filter(function (item) {
            var byStatus = state.filter === 'all'
                || (state.filter === 'open' && !item.isClosed)
                || (state.filter === 'closed' && item.isClosed);

            if (!byStatus) {
                return false;
            }

            if (!state.query) {
                return true;
            }

            var haystack = ((item.title || '') + ' ' + (item.description || '')).toLowerCase();
            return haystack.includes(state.query);
        });
    }

    function renderStats() {
        var openCount = state.items.filter(function (x) { return !x.isClosed; }).length;
        var closedCount = state.items.length - openCount;

        $tasksStats.html(
            '<span class="task-stat-pill open">' + l('TaskStatus:Open') + ': <strong>' + openCount + '</strong></span>' +
            '<span class="task-stat-pill closed">' + l('TaskStatus:Closed') + ': <strong>' + closedCount + '</strong></span>' +
            '<span class="task-stat-pill all">' + l('Tasks:Total') + ': <strong>' + state.items.length + '</strong></span>'
        );
    }

    function createActionButton(cssClass, icon, text) {
        return '<button type="button" class="btn btn-sm ' + cssClass + '"><i class="fa fa-' + icon + ' me-1"></i>' + text + '</button>';
    }

    function renderItems() {
        var items = getFilteredItems();
        $tasksList.empty();

        if (!items.length) {
            $tasksEmptyState.removeClass('d-none');
            return;
        }

        $tasksEmptyState.addClass('d-none');

        items.forEach(function (item) {
            var template = document.getElementById('TaskCardTemplate');
            var node = template.content.firstElementChild.cloneNode(true);
            var $card = $(node);

            $card.attr('data-id', item.id);
            $card.attr('data-open', (!item.isClosed).toString());
            $card.find('.task-card__title').text(item.title || '-');
            $card.find('.task-card__description').text(truncate(item.description, 220));
            $card.find('.task-card__meta').text(l('CreationTime') + ': ' + formatDate(item.creationTime));

            var $status = $card.find('.task-card__status');
            if (item.isClosed) {
                $status.addClass('text-bg-secondary').text(l('TaskStatus:Closed'));
            } else {
                $status.addClass('text-bg-success').text(l('TaskStatus:Open'));
            }

            var $actions = $card.find('.task-card__actions');

            var $viewButton = $(createActionButton('btn-outline-primary task-view', 'eye', l('View')));
            $viewButton.on('click', function () {
                window.location = abp.appPath + 'Tasks/Details?id=' + item.id;
            });
            $actions.append($viewButton);

            if (abp.auth.isGranted('TaskAndCommentBoard.Tasks.Edit')) {
                var $editButton = $(createActionButton('btn-outline-secondary task-edit', 'pencil', l('Edit')));
                $editButton.on('click', function () {
                    editModal.open({ id: item.id });
                });
                $actions.append($editButton);
            }

            if (abp.auth.isGranted('TaskAndCommentBoard.Tasks.Delete')) {
                var $deleteButton = $(createActionButton('btn-outline-danger task-delete', 'trash', l('Delete')));
                $deleteButton.on('click', function () {
                    abp.message.confirm(l('TaskDeletionConfirmationMessage', item.title), l('AreYouSure'))
                        .then(function (confirmed) {
                            if (!confirmed) {
                                return;
                            }

                            taskService.delete(item.id).then(function () {
                                abp.notify.success(l('DeletedSuccessfully'));
                                loadTasks();
                            });
                        });
                });
                $actions.append($deleteButton);
            }

            $tasksList.append($card);
        });
    }

    function loadTasks() {
        taskService.getList({ skipCount: 0, maxResultCount: 1000, sorting: 'creationTime desc' })
            .then(function (result) {
                state.items = result.items || [];
                renderStats();
                renderItems();
            });
    }

    createModal.onResult(function () {
        abp.notify.success(l('CreatedSuccessfully'));
        loadTasks();
    });

    editModal.onResult(function () {
        abp.notify.success(l('SavedSuccessfully'));
        loadTasks();
    });

    $('#NewTaskButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });

    $('.task-toolbar [data-filter]').click(function () {
        $('.task-toolbar [data-filter]').removeClass('active');
        $(this).addClass('active');
        state.filter = $(this).data('filter');
        renderItems();
    });

    $('#TaskSearchInput').on('input', function () {
        state.query = ($(this).val() || '').toLowerCase().trim();
        renderItems();
    });

    loadTasks();
});
