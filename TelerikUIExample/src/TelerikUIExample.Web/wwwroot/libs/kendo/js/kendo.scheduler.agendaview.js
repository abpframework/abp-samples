module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1419);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1414:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.view");

/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1414) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	    var __meta__ = { // jshint ignore:line
	        id: "scheduler.agendaview",
	        name: "Scheduler Agenda View",
	        category: "web",
	        description: "The Scheduler Agenda View",
	        depends: [ "scheduler.view" ],
	        hidden: true
	    };

	    (function($){
	        var kendo = window.kendo,
	            ui = kendo.ui,
	            NS = ".kendoAgendaView";

	        var EVENT_WRAPPER_FORMAT = '<div class="k-task" title="#:(data.title || "").replace(/"/g,"\'")#" data-#=kendo.ns#uid="#=uid#">' +
	                                   '# if (resources[0]) {#' +
	                                   '<span class="k-scheduler-mark" style="background-color:#=resources[0].color#"></span>' +
	                                   "# } #" +
	                                   "# if (data.isException()) { #" +
	                                   '<span class="k-icon k-i-non-recurrence"></span>' +
	                                   '# } else if (data.isRecurring()) {#' +
	                                   '<span class="k-icon k-i-reload"></span>' +
	                                   "# } #" +
	                                   '<span class="k-scheduler-task-text">{0}</span>' +
	                                   '#if (showDelete) {#' +
	                                       '<a href="\\#" class="k-link k-event-delete" title="${data.messages.destroy}" aria-label="${data.messages.destroy}"><span class="k-icon k-i-close"></span></a>' +
	                                   '#}#' +
	                               '</div>';

	        var EVENT_DATE_TEMPLATE = "# if (!isMobile) { #" +
	                                    '<strong class="k-scheduler-agendaday">' +
	                                        '#=kendo.toString(date, "dd")#' +
	                                    '</strong>' +
	                                    '<em class="k-scheduler-agendaweek">' +
	                                        '#=kendo.toString(date,"dddd")#' +
	                                    '</em>' +
	                                    '<span class="k-scheduler-agendadate">' +
	                                        '#=kendo.toString(date, "y")#' +
	                                    '</span>' +
	                                '# } else { #' +
	                                    '<div class="k-scheduler-datecolumn-wrap">' +
	                                        '<span class="k-mobile-scheduler-agendadate">' +
	                                            '<span class="k-mobile-scheduler-agendaday">#=kendo.toString(date, "dd")#</span>' +
	                                            '&nbsp' +
	                                            '<span class="k-mobile-scheduler-agendamonth">#=kendo.toString(date, "MMMM")#</span>' +
	                                        '</span>' +
	                                        '<span class="k-mobile-scheduler-agendaweekday">' +
	                                            '#=kendo.toString(date, "dddd")#' +
	                                        '</span>' +
	                                    '</div>' +
	                                '# } #';

	        var EVENT_GROUP_TEMPLATE = "# if (!isMobile) { #" +
	                                        '<strong class="k-scheduler-adgendagroup">' +
	                                            '#=value#' +
	                                        '</strong>' +
	                                    '# } else { #' +
	                                        '<span class="k-scheduler-group-text">' +
	                                            '#=value#' +
	                                        '</span>' +
	                                    '# } #';

	            var AgendaGroupedView = kendo.Class.extend({
	    	        init: function(view) {
	    		        this._view = view;
	    	        },

	                _getColumns: function(groupHeaders, columns){
	                    return groupHeaders.concat(columns);
	                },
	                _getGroupsInDay: function(){
	                    return [];
	                },

	                _getSumOfItemsForDate: function(){
	                    return 0;
	                },

	                _renderTaskGroupsCells: function(headerCells, groups, taskGroupIndex, taskIndex){
	                    var view = this._view;

	                    if (taskGroupIndex === 0 && taskIndex === 0 && groups.length) {
	                         view._renderTaskGroupsCells(headerCells, groups);
	                    }
	                },

	                _renderDateCell: function(tableRow, groups, tasks, date, taskGroupIndex, tasksGroups){
	                     var view = this._view;
	                     var isMobile = view._isMobile();

	                     tableRow.push(kendo.format(
	                        '<td class="k-scheduler-datecolumn{3}{2}" rowspan="{0}">{1}</td>',
	                        tasks.length,
	                        view._dateTemplate({ date: date, isMobile: isMobile }),
	                        taskGroupIndex == tasksGroups.length - 1 && !groups.length ? " k-last" : "",
	                        !groups.length ? " k-first" : ""
	                    ));
	                },

	                _renderDates: function (){
	                     return undefined;
	                },

	                _getParents: function (parentGroups){
	                    return parentGroups.splice(0);
	                },

	                _getGroupsByDate: function(){
	                    return undefined;
	                },

	                _renderTaskGroups: function(table, items, parents){
	                    var view = this._view;

	                    table.append(view._renderTaskGroups(items, parents));
	                }

	            });

		        var AgendaGroupedByDateView = kendo.Class.extend({
	                init: function(view) {
	    	            this._view = view;
	                },

	                _getColumns: function(groupHeaders, columns){
	                    var view = this._view;

	                    if (view._isMobile()) {
	                        return groupHeaders.concat(columns);
	                    } else {
	                        var date = columns.slice(0, 1);
	                        var columnsWithoutDate = columns.slice(1);

	                        return date.concat(groupHeaders).concat(columnsWithoutDate);
	                    }
	                },

	                _compareDateGroups: function(currentGroup, prevGroup, index){
	                    if (currentGroup[index].text == prevGroup[index].text) {
	                        if (index === 0) {
	                            return true;
	                        }else {
	                            return this._compareDateGroups(currentGroup, prevGroup, index - 1);
	                        }
	                    }

	                    return false;
	                },

	                _getGroupsInDay: function(tasksGroups, groups){
	                      var groupsInDay = [];
	                      var prevGroup = null;

	                       for (var tasksGroupIdx = 0; tasksGroupIdx < tasksGroups.length; tasksGroupIdx++) {
	                            for (var itemsIdx = 0; itemsIdx < tasksGroups[tasksGroupIdx].items.length; itemsIdx++) {
	                                var idx = 0;

	                                if (groupsInDay.length === 0) {
	                                    for (idx; idx < groups[tasksGroupIdx].length; idx++) {
	                                        groupsInDay.push([1]);
	                                    }
	                                } else {
	                                    for (idx; idx < groups[tasksGroupIdx].length; idx++) {

	                                        if (this._compareDateGroups(groups[tasksGroupIdx], prevGroup, idx)) {
	                                            groupsInDay[idx][groupsInDay[idx].length - 1]++;
	                                        } else {
	                                            var lastItemValue = groupsInDay[idx][groupsInDay[idx].length - 1] - 1;
	                                            for (var i = 0; i < lastItemValue; i++) {
	                                                groupsInDay[idx].push(0);
	                                            }
	                                            groupsInDay[idx].push(1);
	                                        }
	                                    }
	                                }
	                                prevGroup = groups[tasksGroupIdx];
	                            }
	                        }

	                        return groupsInDay;
	                },

	                _getSumOfItemsForDate: function(tasksGroups){
	                    var sumOfItemsForDate = 0;

	                    for (var i = 0; i < tasksGroups.length; i++) {

	                        sumOfItemsForDate += tasksGroups[i].items.length;
	                    }
	                    return sumOfItemsForDate;
	                },

	                _renderTaskGroupsCells: function(headerCells, groups, taskGroupIndex, taskIndex, groupsInDay, sumOfItemsForDate, date, groupsRowSpanIndex){
	                    var view = this._view;
	                    var isMobile = view._isMobile();

	                     if(!isMobile){
	                        if (taskGroupIndex === 0 && taskIndex === 0 ) {
	                            headerCells.push(kendo.format(
	                                '<td class="k-scheduler-datecolumn k-first" rowspan="{0}">{1}</td>',
	                                sumOfItemsForDate,
	                                view._dateTemplate({ date: date, isMobile: isMobile })
	                            ));
	                        }

	                        for (var idx = 0; idx < groups[taskGroupIndex].length; idx++) {
	                            if (groupsInDay[idx][groupsRowSpanIndex]) {
	                                headerCells.push(kendo.format(
	                                    '<td class="k-scheduler-groupcolumn" rowspan="{0}">{1}</td>',
	                                    groupsInDay[idx][groupsRowSpanIndex],
	                                    view._groupTemplate({ value: groups[taskGroupIndex][idx].text, isMobile: isMobile }),
	                                    groups[taskGroupIndex][idx].className
	                                ));
	                            }
	                        }
	                    }else{
	                        if (taskGroupIndex === 0 && taskIndex === 0 && groups.length) {
	                            view._renderTaskGroupsCells(headerCells, groups);
	                        }
	                    }
	                },

	                _renderDateCell: function(){
	                   return undefined;
	                },

	                _renderDates: function(table){
	                    var view = this._view;
	                    var sortedArray = view._groupsByDate.sort(function(a, b) {
	                        return a.array[0].value.getTime() - b.array[0].value.getTime();
	                    });

	                    for (var i = 0; i < sortedArray.length; i++) {
	                        table.append(view._renderTaskGroups(sortedArray[i].array, sortedArray[i].groups));
	                    }
	                },

	                _getParents: function(parentGroups){
	                    return parentGroups.slice(0);
	                },

	                _getGroupsByDate: function(groups, idx, parents){
	                    var view = this._view;

	                    if (groups[idx].items) {
	                        for (var taskGroupIndex = 0; taskGroupIndex < groups[idx].items.length; taskGroupIndex++) {
	                            var date = groups[idx].items[taskGroupIndex].value;
	                            var dateExists = false;

	                            for (var i = 0; i < view._groupsByDate.length; i++) {
	                                if (view._groupsByDate[i].array[0].value.getTime() === date.getTime()) {
	                                    dateExists = true;
	                                    view._groupsByDate[i].array.push(groups[idx].items[taskGroupIndex]);
	                                    view._groupsByDate[i].groups.push(parents);
	                                }
	                            }

	                            if (!dateExists) {
	                                view._groupsByDate.push({
	                                    array: [groups[idx].items[taskGroupIndex]],
	                                    groups: [parents]
	                                });
	                            }
	                        }
	                    }
	                },

	                _renderTaskGroups: function(){
	                    return undefined;
	                }

		        });

		        kendo.ui.scheduler.AgendaGroupedView = AgendaGroupedView;
		        kendo.ui.scheduler.AgendaGroupedByDateView = AgendaGroupedByDateView;


	        ui.AgendaView = ui.SchedulerView.extend({
	            init: function(element, options) {
	                ui.SchedulerView.fn.init.call(this, element, options);

	                this._groupedView = this._getGroupedView();

	                options = this.options;

	                if (options.editable) {
	                    options.editable = $.extend(
	                        { "delete": true },
	                        options.editable,
	                        { create: false, update: false },
	                        { messages: options.messages }
	                    );
	                }

	                this.title = options.title;

	                this._eventTemplate = this._eventTmpl(options.eventTemplate, EVENT_WRAPPER_FORMAT);
	                this._dateTemplate = kendo.template(options.eventDateTemplate);
	                this._groupTemplate = kendo.template(options.eventGroupTemplate);
	                this._timeTemplate = kendo.template(options.eventTimeTemplate);

	                this.element.on("mouseenter" + NS, ".k-scheduler-agenda .k-scheduler-content tr", "_mouseenter")
	                            .on("mouseleave" + NS, ".k-scheduler-agenda .k-scheduler-content tr", "_mouseleave")
	                            .on("click" + NS, ".k-scheduler-agenda .k-scheduler-content .k-link:has(.k-i-close)", "_remove");

	                this._renderLayout(options.date);
	                this.refreshLayout();
	            },

	            name: "agenda",

	            _isVirtualized: function () {
	                return false;
	            },
	             _getGroupedView: function() {
	                if (this._isGroupedByDate()) {
	                       return new kendo.ui.scheduler.AgendaGroupedByDateView(this);
	                } else {
	                       return new kendo.ui.scheduler.AgendaGroupedView(this);
	                }
	            },

	            _mouseenter: function(e) {
	                $(e.currentTarget).addClass("k-state-hover");
	            },

	            _mouseleave: function(e) {
	                $(e.currentTarget).removeClass("k-state-hover");
	            },

	            _remove: function(e) {
	                e.preventDefault();

	                this.trigger("remove", {
	                    uid: $(e.currentTarget).closest(".k-task").attr(kendo.attr("uid"))
	                });
	            },

	            nextDate: function() {
	                return kendo.date.nextDay(this.startDate());
	            },

	            startDate: function() {
	                return this._startDate;
	            },

	            endDate: function() {
	                return this._endDate;
	            },

	            previousDate: function() {
	                return kendo.date.previousDay(this.startDate());
	            },

	            _renderLayout: function(date) {
	                this._startDate = date;
	                this._endDate = kendo.date.addDays(date, 7);
	                this.createLayout(this._layout());
	                this._footer();
	                this.table.addClass("k-scheduler-agenda");
	            },

	            _layout: function() {
	                var columns = [
	                        { text: this.options.messages.time, className: "k-scheduler-timecolumn" },
	                        { text: this.options.messages.event }
	                ];

	                if (!this._isMobile()) {
	                    columns.splice(0, 0, { text: this.options.messages.date, className: "k-scheduler-datecolumn" });
	                }

	                var resources = this.groupedResources;
	                if (resources.length) {
	                    var groupHeaders = [];
	                    for (var idx = 0; idx < resources.length; idx++) {
	                        groupHeaders.push({ text: "", className: "k-scheduler-groupcolumn"});
	                    }

	                    columns = this._groupedView._getColumns(groupHeaders, columns);
	                }

	                return {
	                    columns: columns
	                };
	            },

	            _tasks: function(events) {
	                var tasks = [];

	                for (var idx = 0; idx < events.length; idx++) {
	                    var event = events[idx];
	                    var start = event.start;
	                    var end = event.isAllDay ? kendo.date.getDate(event.end) : event.end;
	                    var eventStartDate = kendo.date.getDate(start);
	                    var offsetCompensation = (eventStartDate.getTimezoneOffset() - end.getTimezoneOffset()) * 60000;

	                    var eventDurationInDays = Math.ceil((end - eventStartDate + offsetCompensation) / kendo.date.MS_PER_DAY);

	                    if (event.isAllDay) {
	                        eventDurationInDays += 1;
	                    }

	                    var task = event.clone();
	                    task.startDate = kendo.date.getDate(start);

	                    if (task.startDate >= this.startDate()) {
	                        tasks.push(task);
	                    }

	                    if (eventDurationInDays > 1) {
	                        task.end = kendo.date.nextDay(start);
	                        task.head = true;
	                        for (var day = 1; day < eventDurationInDays; day++) {
	                            start = task.end;
	                            task = event.clone();
	                            task.start = task.startDate = kendo.date.getDate(start);
	                            task.end = kendo.date.nextDay(start);
	                            if (day == eventDurationInDays - 1) {
	                                task.end = new Date(task.start.getFullYear(), task.start.getMonth(), task.start.getDate(), end.getHours(), end.getMinutes(), end.getSeconds(), end.getMilliseconds());
	                                task.tail = true;
	                            } else {
	                                task.isAllDay = true;
	                                task.middle = true;
	                            }

	                            if ((kendo.date.getDate(task.end) <= this.endDate() && task.start >= this.startDate()) || kendo.date.getDate(task.start).getTime() == this.endDate().getTime()) {
	                                tasks.push(task);
	                            }
	                        }
	                    }
	                }

	                return new kendo.data.Query(tasks).sort([{ field: "start", dir: "asc" },{ field: "end", dir: "asc" }]).groupBy({field: "startDate"}).toArray();
	            },

	            _renderTaskGroups: function(tasksGroups, groups) {
	                var tableRows = [];
	                var editable = this.options.editable;
	                var showDelete = editable && editable.destroy !== false && !this._isMobile();
	                var isMobile = this._isMobile();
	                var sumOfItemsForDate = this._groupedView._getSumOfItemsForDate(tasksGroups);
	                var groupsInDay = this._groupedView._getGroupsInDay(tasksGroups, groups);
	                var groupsRowSpanIndex = 0;

	                for (var taskGroupIndex = 0; taskGroupIndex < tasksGroups.length; taskGroupIndex++) {
	                    var date = tasksGroups[taskGroupIndex].value;

	                    var tasks = tasksGroups[taskGroupIndex].items;

	                    var today = kendo.date.isToday(date);

	                    for (var taskIndex = 0; taskIndex < tasks.length; taskIndex++) {
	                        var task = tasks[taskIndex];

	                        var tableRow = [];

	                        var headerCells = !isMobile ? tableRow : [];

	                        this._groupedView._renderTaskGroupsCells(headerCells, groups, taskGroupIndex, taskIndex, groupsInDay, sumOfItemsForDate, date, groupsRowSpanIndex);

	                        groupsRowSpanIndex++;
	                        if (taskIndex === 0) {
	                            if (isMobile) {
	                                headerCells.push(kendo.format(
	                                    '<td class="k-scheduler-datecolumn {1}" colspan="2">{0}</td>',
	                                    this._dateTemplate({ date: date, isMobile: isMobile }),
	                                    !this.groupedResources.length ? "k-first" : ""
	                                ));

	                                tableRows.push('<tr role="row" aria-selected="false"' + (today ? ' class="k-today">' : ">") + headerCells.join("")  + "</tr>");
	                            } else {
	                                this._groupedView._renderDateCell(tableRow, groups, tasks, date, taskGroupIndex, tasksGroups);
	                            }
	                        }

	                        if (task.head) {
	                            task.format = "{0:t}";
	                        } else if (task.tail) {
	                            task.format = "{1:t}";
	                        } else {
	                            task.format = "{0:t}-{1:t}";
	                        }

	                        task.resources = this.eventResources(task);

	                        tableRow.push(kendo.format(
	                            '<td class="k-scheduler-timecolumn {4}"><div>{0}{1}{2}</div></td><td>{3}</td>',
	                            task.tail || task.middle ? '<span class="k-icon k-i-arrow-60-left"></span>' : "",
	                            this._timeTemplate(task.clone({ start: task._startTime || task.start, end: task.endTime || task.end })),
	                            task.head || task.middle ? '<span class="k-icon k-i-arrow-60-right"></span>' : "",
	                            this._eventTemplate(task.clone({ showDelete: showDelete, messages: this.options.messages })),
	                            !this.groupedResources.length && isMobile ? "k-first" : ""
	                        ));

	                        tableRows.push('<tr role="row" aria-selected="false"' + (today ? ' class="k-today">' : ">") + tableRow.join("") + "</tr>");
	                    }
	                }

	                return tableRows.join("");
	            },

	            _renderTaskGroupsCells: function (headerCells, groups){
	                var isMobile = this._isMobile();

	                 for (var idx = 0; idx < groups.length; idx++) {
	                    headerCells.push(kendo.format(
	                        '<td class="k-scheduler-groupcolumn{2}" rowspan="{0}">{1}</td>',
	                        groups[idx].rowSpan,
	                        this._groupTemplate({ value: groups[idx].text, isMobile: isMobile }),
	                        groups[idx].className
	                    ));
	                }
	            },

	            render: function(events) {
	                var table = this.content.find("table").empty();
	                var groups = [];

	                if (events.length > 0) {
	                    var resources = this.groupedResources;

	                    if (resources.length) {
	                        groups = this._createGroupConfiguration(events, resources, null);
	                        this._groupsByDate = [];
	                        this._renderGroups(groups, table, []);
	                        this._groupedView._renderDates(table);
	                    } else {
	                        groups = this._tasks(events);
	                        table.append(this._renderTaskGroups(groups, []));
	                    }
	                }

	                var items = this._eventsList = flattenTaskGroups(groups);
	                this._angularItems(table, items);

	                this.refreshLayout();
	                this.trigger("activate");
	            },

	            _angularItems: function(table, items) {
	                this.angular("compile", function(){
	                    var data = [], elements = items.map(function(item){
	                        data.push({ dataItem: item });
	                        return table.find(".k-task[" + kendo.attr("uid") + "=" + item.uid + "]");
	                    });
	                    return { elements: elements, data: data };
	                });
	            },

	            _renderGroups: function(groups, table, parentGroups) {
	                for (var idx = 0, length = groups.length; idx < length; idx++) {
	                    var parents = this._groupedView._getParents(parentGroups);

	                    parents.push(groups[idx]);
	                    this._groupedView._getGroupsByDate(groups, idx, parents);

	                    if (groups[idx].groups) {
	                        this._renderGroups(groups[idx].groups, table, parents);
	                    } else {
	                        this._groupedView._renderTaskGroups(table, groups[idx].items, parents);
	                    }
	                }
	            },

	            _createGroupConfiguration: function(events, resources, parent) {
	                var resource = resources[0];
	                var configuration = [];
	                var data = resource.dataSource.view();
	                var isMobile = this._isMobile();

	                data = data.filter(function(item) {
	                    var itemParentValue = kendo.getter(resource.dataParentValueField)(item);

	                    return itemParentValue === null || itemParentValue === undefined || (parent && itemParentValue === parent.value);
	                });

	                for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
	                    var value = resourceValue(resource, data[dataIndex]);

	                    var tmp = new kendo.data.Query(events).filter({ field: resource.field, operator: ui.SchedulerView.groupEqFilter(value) }).toArray();

	                    if (tmp.length) {
	                        var tasks = this._tasks(tmp);
	                        var className = parent ? "" : " k-first";

	                        if (dataIndex === data.length - 1 && (!parent || parent.className.indexOf("k-last") > -1)) {
	                            className += " k-last";
	                        }

	                        var obj = {
	                            text: kendo.getter(resource.dataTextField)(data[dataIndex]),
	                            value: value,
	                            rowSpan: 0,
	                            className: className
	                        };

	                        if (resources.length > 1) {
	                            obj.groups = this._createGroupConfiguration(tmp, resources.slice(1), obj);
	                            if (parent) {
	                                parent.rowSpan += obj.rowSpan;
	                            }
	                        } else {
	                            obj.items = tasks;
	                            var span = rowSpan(obj.items);

	                            if (isMobile) {
	                                span += obj.items.length;
	                            }

	                            obj.rowSpan = span;
	                            if (parent) {
	                                parent.rowSpan += span;
	                            }
	                        }
	                        configuration.push(obj);
	                    }
	                }

	                return configuration;
	            },

	            // TODO: this method for Agenda view has never worked properly
	            // it used to return wrong resources
	            // to be clearer the deficit, it now does not return any resources
	            _resourceBySlot: function() {
	                return {};
	            },

	            selectionByElement: function(cell) {
	                var index, event;
	                cell = $(cell);
	                if (cell.hasClass("k-scheduler-datecolumn") || !this._eventsList.length) {
	                    return;
	                }

	                if (cell.is(".k-task")) {
	                    cell = cell.closest("td");
	                }

	                if (this._isMobile()) {
	                    var parent = cell.parent();
	                    index = parent.parent().children()
	                        .filter(function() {
	                            return $(this).children(":not(.k-scheduler-datecolumn)").length;
	                        })
	                        .index(parent);
	                } else {
	                    index = cell.parent().index();
	                }

	                event = this._eventsList[index];

	                return {
	                    index: index,
	                    start: event.start,
	                    end: event.end,
	                    isAllDay: event.isAllDay,
	                    uid: event.uid
	                };
	            },

	            select: function(selection) {
	                this.clearSelection();

	                var row = this.table
	                    .find(".k-task")
	                    .eq(selection.index)
	                    .closest("tr")
	                    .addClass("k-state-selected")
	                    .attr("aria-selected", true)[0];

	                this.current(row);
	            },

	            move: function(selection, key) {
	                var handled = false;
	                var index = selection.index;

	                if (key == kendo.keys.UP) {
	                    index --;
	                    handled = true;
	                } else  if (key == kendo.keys.DOWN) {
	                    index ++;
	                    handled = true;
	                }

	                if (handled) {
	                    var event = this._eventsList[index];
	                    if (event) {
	                        selection.start = event.start;
	                        selection.end = event.end;
	                        selection.isAllDay = event.isAllDay;
	                        selection.events = [ event.uid ];
	                        selection.index = index;
	                    }
	                }

	                return handled;
	            },

	            moveToEvent: function() {
	                return false;
	            },

	            constrainSelection: function(selection) {
	                var event = this._eventsList[0];
	                if (event) {
	                    selection.start = event.start;
	                    selection.end = event.end;
	                    selection.isAllDay = event.isAllDay;
	                    selection.events = [ event.uid ];
	                    selection.index = 0;
	                }
	            },

	            isInRange: function() {
	                return true;
	            },

	            destroy: function(){
	                if (this.element) {
	                    this.element.off(NS);
	                }

	                ui.SchedulerView.fn.destroy.call(this);
	            },

	            options: {
	                title: "Agenda",
	                name: "agenda",
	                editable: true,
	                selectedDateFormat: "{0:D}-{1:D}",
	                selectedShortDateFormat: "{0:d} - {1:d}",
	                selectedMobileDateFormat: "{0: MMM} {0:dd} - {1:dd}",
	                eventTemplate: "#:title#",
	                eventTimeTemplate: "#if(data.isAllDay) {#" +
	                                '#=this.options.messages.allDay#' +
	                              "#} else { #" +
	                                '#=kendo.format(format, start, end)#' +
	                              "# } #",
	                eventDateTemplate: EVENT_DATE_TEMPLATE,
	                eventGroupTemplate: EVENT_GROUP_TEMPLATE,
	                messages: {
	                    event: "Event",
	                    date: "Date",
	                    time: "Time",
	                    allDay: "all day"
	                }
	            }
	        });

	        function rowSpan(tasks) {
	            var result = 0;

	            for (var idx = 0, length = tasks.length; idx < length; idx++) {
	                result += tasks[idx].items.length;
	            }

	            return result;
	        }

	        function resourceValue(resource, item) {
	            if (resource.valuePrimitive) {
	                item = kendo.getter(resource.dataValueField)(item);
	            }
	            return item;
	        }

	        function flattenTaskGroups(groups) {
	            var idx = 0,
	                length = groups.length,
	                item,
	                result = [];

	            for ( ; idx < length; idx ++) {
	                item = groups[idx];
	                if (item.groups) {
	                    item = flattenGroup(item.groups);
	                    result = result.concat(item);
	                } else {
	                    result = result.concat(flattenGroup(item.items));
	                }
	            }

	            return result;
	        }

	        function flattenGroup(groups) {
	            var items = [].concat(groups),
	                item = items.shift(),
	                result = [],
	                push = [].push;
	            while (item) {
	                if (item.groups) {
	                    push.apply(items, item.groups);
	                } else if (item.items) {
	                    push.apply(items, item.items);
	                } else {
	                    push.call(result, item);
	                }

	                item = items.shift();
	            }

	            return result;
	        }

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });