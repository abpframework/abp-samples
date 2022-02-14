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

	module.exports = __webpack_require__(1411);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1071:
/***/ (function(module, exports) {

	module.exports = require("./kendo.dropdownlist");

/***/ }),

/***/ 1073:
/***/ (function(module, exports) {

	module.exports = require("./kendo.multiselect");

/***/ }),

/***/ 1224:
/***/ (function(module, exports) {

	module.exports = require("./kendo.window");

/***/ }),

/***/ 1275:
/***/ (function(module, exports) {

	module.exports = require("./kendo.dialog");

/***/ }),

/***/ 1284:
/***/ (function(module, exports) {

	module.exports = require("./kendo.editable");

/***/ }),

/***/ 1287:
/***/ (function(module, exports) {

	module.exports = require("./kendo.switch");

/***/ }),

/***/ 1292:
/***/ (function(module, exports) {

	module.exports = require("./kendo.pdf");

/***/ }),

/***/ 1297:
/***/ (function(module, exports) {

	module.exports = require("./kendo.datetimepicker");

/***/ }),

/***/ 1311:
/***/ (function(module, exports) {

	module.exports = require("./kendo.pane");

/***/ }),

/***/ 1411:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1071), __webpack_require__(1284), __webpack_require__(1073), __webpack_require__(1224), __webpack_require__(1297), __webpack_require__(1413), __webpack_require__(1414), __webpack_require__(1415), __webpack_require__(1412), __webpack_require__(1416), __webpack_require__(1417), __webpack_require__(1418), __webpack_require__(1275), __webpack_require__(1311), __webpack_require__(1292), __webpack_require__(1287) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "scheduler",
	    name: "Scheduler",
	    category: "web",
	    description: "The Scheduler is an event calendar.",
	    depends: [ "dropdownlist", "editable", "multiselect", "window", "datepicker", "datetimepicker", "scheduler.recurrence", "scheduler.view" ],
	    features: [ {
	        id: "scheduler-dayview",
	        name: "Scheduler Day View",
	        description: "Scheduler Day View",
	        depends: [ "scheduler.dayview" ]
	    }, {
	        id: "scheduler-agendaview",
	        name: "Scheduler Agenda View",
	        description: "Scheduler Agenda View",
	        depends: [ "scheduler.agendaview" ]
	    }, {
	        id: "scheduler-monthview",
	        name: "Scheduler Month View",
	        description: "Scheduler Month View",
	        depends: [ "scheduler.monthview" ]
	    }, {
	        id: "scheduler-timelineview",
	        name: "Scheduler Timeline View",
	        description: "Scheduler Timeline View",
	        depends: [ "scheduler.timelineview" ]
	    }, {
	        id: "scheduler-yearview",
	        name: "Scheduler Year View",
	        description: "Scheduler Year View",
	        depends: [ "scheduler.yearview" ]
	    }, {
	        id: "scheduler-mobile",
	        name: "Scheduler adaptive rendering",
	        description: "Support for adaptive rendering",
	        depends: [ "dialog", "pane", "switch" ]
	    }, {
	        id: "scheduler-pdf-export",
	        name: "PDF export",
	        description: "Export the scheduler events as PDF",
	        depends: [ "pdf", "drawing" ]
	    }, {
	        id: "scheduler-timezones",
	        name: "Timezones",
	        description: "Allow selecting timezones different than Etc/UTC",
	        depends: [ "timezones" ]
	    }]
	};

	/*jshint eqnull: true */
	(function($, undefined) {
	    var kendo = window.kendo,
	        date = kendo.date,
	        MS_PER_DAY = date.MS_PER_DAY,
	        getDate = date.getDate,
	        getMilliseconds = kendo.date.getMilliseconds,
	        recurrence = kendo.recurrence,
	        keys = $.extend({F10: 121}, kendo.keys),
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        DataBoundWidget = ui.DataBoundWidget,
	        STRING = "string",
	        Popup = ui.Popup,
	        Calendar = ui.Calendar,
	        DataSource = kendo.data.DataSource,
	        isPlainObject = $.isPlainObject,
	        extend = $.extend,
	        proxy = $.proxy,
	        toString = Object.prototype.toString,
	        isArray = Array.isArray,
	        NS = ".kendoScheduler",
	        CLICK = "click",
	        MOUSEDOWN = "mousedown",
	        TOUCHSTART = kendo.support.pointers ? "pointerdown" : "touchstart",
	        TOUCHMOVE = kendo.support.pointers ? "pointermove" : "touchmove",
	        TOUCHEND = kendo.support.pointers ? "pointerup" : "touchend",
	        MOUSEMOVE = kendo.support.mousemove,
	        CHANGE = "change",
	        PROGRESS = "progress",
	        ERROR = "error",
	        CANCEL = "cancel",
	        REMOVE = "remove",
	        RESET = "resetSeries",
	        SAVE = "save",
	        ADD = "add",
	        EDIT = "edit",
	        DISABLED = "disabled",
	        OPTION = "option",
	        FOCUSEDSTATE = "k-focus",
	        EXPANDEDSTATE = "k-state-expanded",
	        VIEWSSELECTOR = ".k-scheduler-views",
	        INVERSECOLORCLASS = "k-event-inverse",
	        valueStartEndBoundRegex = /(?:value:start|value:end)(?:,|$)/,
	        TODAY = getDate(new Date()),
	        EXCEPTION_SEPARATOR = ",",
	        OLD_EXCEPTION_SEPARATOR_REGEXP = /\;/g,
	        RECURRENCE_EXCEPTION = "recurrenceException",
	        DELETECONFIRM = "Are you sure you want to delete this event?",
	        DELETERECURRING = "Do you want to delete only this event occurrence or the whole series?",
	        EDITRECURRING = "Do you want to edit only this event occurrence or the whole series?",
	        DELETERECURRINGCONFIRM = "Are you sure you want to delete this event occurrence?",
	        RESETSERIESCONFIRM = "Are you sure you want to reset the whole series?",
	        DELETESERIESCONFIRM = "Are you sure you want to delete the whole series?",
	        COMMANDBUTTONTMPL = '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid #=className#" #=attr#><span class="k-button-text">#=text#</span></button>',
	        VIEWS_DROPDOWN_TEMPLATE = kendo.template('' +
	            '<select class="k-picker k-dropdown-list k-dropdown k-views-dropdown">' +
	                '#for (var view in views) {#' +
	                    '<option value="#= view #">${views[view].title}</option>' +
	                '#}#'  +
	            '</select>'
	        ),
	        TOOLBARTEMPLATE = kendo.template('' +
	            '<div class="k-scheduler-toolbar k-toolbar">' +
	                '# if (pdf) { #' +
	                    '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-pdf"><span class="k-button-icon k-icon k-i-file-pdf"></span><span class="k-button-text">${messages.pdf}</span></button>' +
	                '# } #' +
	                '<span class="k-scheduler-navigation k-button-group">' +
	                    '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-nav-today" title="${messages.today}"><span class="k-button-text">${messages.today}</span></button>' +
	                    '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-nav-prev" title="${messages.previous}" aria-label="${messages.previous}"><span class="k-button-icon k-icon k-i-arrow-60-left"></span></button>' +
	                    '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-nav-next" title="${messages.next}" aria-label="${messages.next}"><span class="k-button-icon k-icon k-i-arrow-60-right"></span></button>' +
	                '</span>' +
	                '<a role="button" href="\\#" class="k-nav-current">' +
	                    '<span class="k-icon k-i-calendar"></span>' +
	                    '<span class="k-sm-date-format" data-#=ns#bind="text: formattedShortDate"></span>' +
	                    '<span class="k-lg-date-format" data-#=ns#bind="text: formattedDate"></span>' +
	                '</a>' +
	                '<span class="k-spacer k-toolbar-spacer"></span>' +
	                '# if (search) { #' +
	                    '<span class="k-scheduler-search k-textbox k-input k-input-md k-rounded-md k-input-solid">' +
	                        '<input autocomplete="off" placeholder="${messages.search}" title="${messages.search}" class="k-input-inner k-scheduler-search-input k-input-inner" />' +
	                        '<span class="k-input-suffix"><span class="k-icon k-i-search"></span></span>' +
	                    '</span>' +
	                '# } #' +
	                '# if (viewsCount === 1) { #' +
	                    '<a role="button" data-#=ns#name="#=view#" href="\\#" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-scheduler-refresh">' +
	                        '<span class="k-button-icon k-icon k-i-reload"></span>' +
	                    '</a>' +
	                '# } else { #' +
	                    '<span class="k-scheduler-views-wrapper">' +
	                        '<span class="k-scheduler-views k-button-group">' +
	                            '# for (var view in views) { #' +
	                                '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-view-#= view.toLowerCase() #" data-#=ns#name="#=view#"><span class="k-button-text">${views[view].title}</span></button>' +
	                            '# } #'  +
	                        '</span>' +
	                    '</span>' +
	                '# } #' +
	            '</div>'),
	        MOBILETOOLBARTEMPLATE = kendo.template('<div class="k-scheduler-toolbar k-toolbar">' +
	            '<span class="k-scheduler-tools k-button-group">' +
	                '# if (pdf) { #' +
	                    '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-pdf"><span class="k-button-icon k-icon k-i-file-pdf"></span></button>' +
	                '# } #' +
	                '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-nav-calendar"><span class="k-button-icon k-icon k-i-calendar"></span></button>' +
	                "# if (editable) { #" +
	                    '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-create-event"><span class="k-button-icon k-icon k-i-plus"></span></button>' +
	                "# } #" +
	            '</span>' +
	            '<span class="k-spacer k-toolbar-spacer"></span>' +
	            '# if (search) { #' +
	                '<span class="k-scheduler-search k-textbox k-input k-input-md k-rounded-md k-input-solid">' +
	                    '<input autocomplete="off" placeholder="${messages.search}" title="${messages.search}" class="k-scheduler-search-input k-input-inner" />' +
	                    '<span class="k-input-suffix"><span class="k-icon k-i-search"></span></span>' +
	                '</span>' +
	            '# } #' +
	            '#if(viewsCount === 1){#' +
	                '<a role="button" data-#=ns#name="#=view#" href="\\#" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-scheduler-refresh">' +
	                    '<span class="k-button-icon k-icon k-i-reload"></span>' +
	                '</a>' +
	            '#} else {#' +
	                '<select class="k-picker k-dropdown-list k-dropdown k-scheduler-mobile-views">' +
	                    '#for(var view in views){#' +
	                        '<option class="k-view-#= view.toLowerCase() #" value="#=view#">${views[view].title}</option>' +
	                    '#}#'  +
	                '</select>' +
	            '#}#' +
	            '</div>'+
	            '<div class="k-scheduler-toolbar k-toolbar">' +
	                '<span class="k-scheduler-navigation">' +
	                   '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-nav-prev"><span class="k-button-icon k-icon k-i-arrow-chevron-left"></span></button>' +
	                   '<span class="k-nav-current">' +
	                        '<span class="k-m-date-format" data-#=ns#bind="text: formattedMobileDate"></span>' +
	                        '<span class="k-y-date-format" data-#=ns#bind="text: formattedYear"></span>' +
	                    '</span>' +
	                   '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-nav-next"><span class="k-button-icon k-icon k-i-arrow-chevron-right"></span></button>' +
	                '</span>' +
	            '</div>'),
	        MOBILEDATERANGEEDITOR = function(container, options) {
	            var attr = { name: options.field, title: options.title };
	            var isAllDay = options.model.isAllDay;
	            var dateTimeValidate = kendo.attr("validate") + "='" + (!isAllDay) + "'";
	            var dateValidate = kendo.attr("validate") + "='" + isAllDay + "'";

	            appendTimezoneAttr(attr, options);
	            appendValidDateValidator(attr, options);
	            appendDateCompareValidator(attr, options);

	            $('<input type="datetime-local" required ' + kendo.attr("type") + '="datetime-local" ' + kendo.attr("bind") + '="value:' + options.field +', invisible:isAllDay" ' + dateTimeValidate + '/>')
	                .attr(attr)
	                .appendTo(container);

	            $('<input type="date" required ' + kendo.attr("type") + '="date" ' + kendo.attr("bind") + '="value:' + options.field +',visible:isAllDay" ' +
	                dateValidate + '/>')
	                .attr(attr).appendTo(container);

	            $('<span ' + kendo.attr("for") + '="' + options.field + '" class="k-invalid-msg"/>').hide().appendTo(container);
	        },
	        DATERANGEEDITOR = function(container, options) {
	            var attr = { name: options.field, title: options.title },
	                isAllDay = options.model.isAllDay,
	                dateTimeValidate = kendo.attr("validate") + "='" + (!isAllDay) + "' ",
	                dateValidate = kendo.attr("validate") + "='" + isAllDay + "' ";

	            appendTimezoneAttr(attr, options);
	            appendValidDateValidator(attr, options);
	            appendDateCompareValidator(attr, options);

	            $('<input type="text" required ' + kendo.attr("type") + '="date"' + ' ' + kendo.attr("role") + '="datetimepicker" ' + kendo.attr("bind") + '="value:' + options.field +',invisible:isAllDay" ' +
	                dateTimeValidate + '/>')
	            .attr(attr).appendTo(container);

	            $('<input type="text" required ' + kendo.attr("type") + '="date"' + ' '  + kendo.attr("role") + '="datepicker" ' + kendo.attr("bind") + '="value:' + options.field +',visible:isAllDay" ' +
	                dateValidate + '/>')
	            .attr(attr).appendTo(container);

	            $('<span ' + kendo.attr("bind") + '="text: ' + options.field + 'Timezone"></span>').appendTo(container);

	            if (options.field === "end") {
	                $('<span ' + kendo.attr("bind") + '="text: startTimezone, invisible: endTimezone"></span>').appendTo(container);
	            }

	            $('<span ' + kendo.attr("for") + '="' + options.field + '" class="k-invalid-msg"/>').hide().appendTo(container);
	        },
	        RECURRENCEEDITOR = function(container, options) {
	            $('<div ' + kendo.attr("bind") + '="value:' + options.field +'" />')
	                .attr({
	                    name: options.field
	                })
	                .appendTo(container)
	                .kendoRecurrenceEditor({
	                    start: options.model.start,
	                    timezone: options.timezone,
	                    messages: options.messages
	                });
	        },
	        MOBILERECURRENCEEDITOR = function(container, options) {
	            $('<div ' + kendo.attr("bind") + '="value:' + options.field +'" />')
	                .attr({
	                    name: options.field
	                })
	                .appendTo(container)
	                .kendoMobileRecurrenceEditor({
	                    start: options.model.start,
	                    timezone: options.timezone,
	                    messages: options.messages,
	                    pane: options.pane,
	                    value: options.model[options.field]
	                });
	        },
	        MOBILEISALLDAYEDITOR = function (container, options) {
	            $('<input type="checkbox" data-role="switch"' + kendo.attr("bind") + '="value:' + options.field +'" />').appendTo(container);
	        },
	        MOBILETIMEZONEPOPUP = function(container, options) {
	            var text = timezoneButtonText(options.model, options.messages.noTimezone);
	            $('<span class="k-timezone-label"></span>').text(text).appendTo(container);
	            $('<span class="k-icon k-i-arrow-chevron-right"></span>').appendTo(container);
	            container.closest("li.k-item label").on("click", options.click);
	        },
	        TIMEZONEPOPUP = function(container, options) {
	            $('<a href="#" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" data-bind="invisible:isAllDay"><span class="k-button-text">' + options.messages.timezoneEditorButton + '</span></a>').on("click", options.click).appendTo(container);
	        },
	        MOBILETIMEZONEEDITOR = function(container, options) {
	            $('<div class="k-mobiletimezoneeditor" ' + kendo.attr("bind") + '="value:' + options.field +'" />')
	                .attr({
	                    name: options.field
	                })
	                .appendTo(container)
	                .kendoMobileTimezoneEditor({
	                    optionLabel: options.noTimezone
	                });
	        },
	        TIMEZONEEDITOR = function(container, options) {
	            var visible = options.visible || options.visible === undefined;
	            $('<div ' + kendo.attr("bind") + '="value:' + options.field +'" />')
	                .attr({ name: options.field })
	                .toggle(visible)
	                .appendTo(container)
	                .kendoTimezoneEditor({
	                    optionLabel: options.noTimezone,
	                    title: options.title
	                });
	        };

	    function timezoneButtonText(model, message) {
	        message = message || "";

	        if (model.startTimezone) {
	            message = model.startTimezone;

	            if (model.endTimezone) {
	                message += " | " + model.endTimezone;
	            }
	        }

	        return message;
	    }

	    function appendTimezoneAttr(attrs, options) {
	        var timezone = options.timezone;

	        if (timezone) {
	            attrs[kendo.attr("timezone")] = timezone;
	        }
	    }

	    function appendValidDateValidator(attrs, options) {
	        var validationRules = options.model.fields[options.field].validation;

	        if (validationRules) {
	            var validDateRule = validationRules.validDateValidator;
	            if (validDateRule && isPlainObject(validDateRule) && validDateRule.message) {
	                attrs[kendo.attr("validDate-msg")] = validDateRule.message;
	            }
	        }
	    }

	    function appendDateCompareValidator(attrs, options) {
	        var validationRules = options.model.fields[options.field].validation;

	        if (validationRules) {
	            var dateCompareRule = validationRules.dateCompare;
	            if (dateCompareRule && isPlainObject(dateCompareRule) && dateCompareRule.message) {
	                attrs[kendo.attr("dateCompare-msg")] = dateCompareRule.message;
	            }
	        }
	    }

	    function wrapDataAccess(originalFunction, timezone) {
	        return function(data) {
	            data = originalFunction(data);

	            convertData(data, "apply",  timezone);

	            return data || [];
	        };
	    }

	    function wrapDataSerialization(originalFunction, timezone) {
	        return function(data) {

	            if (data) {
	                if (toString.call(data) !== "[object Array]" && !(data instanceof kendo.data.ObservableArray)) {
	                    data = [data];
	                }
	            }

	            convertData(data, "remove",  timezone, true);

	            data = originalFunction(data);

	            return data || [];
	        };
	    }

	    function convertData(data, method, timezone, removeUid) {
	        var event,
	            idx,
	            length,
	            startOffset,
	            endOffset;

	        data = data || [];

	        for (idx = 0, length = data.length; idx < length; idx++) {
	            event = data[idx];
	            startOffset = event.start ? event.start.getTimezoneOffset() : null;
	            endOffset = event.start ? event.end.getTimezoneOffset() : null;

	            if (removeUid) {
	                if (event.startTimezone || event.endTimezone) {
	                    if (timezone) {
	                        event.start = kendo.timezone.convert(event.start, event.startTimezone || event.endTimezone, timezone);
	                        event.end = kendo.timezone.convert(event.end, event.endTimezone || event.startTimezone, timezone);

	                        event.start = kendo.timezone[method](event.start, timezone);
	                        event.end = kendo.timezone[method](event.end, timezone);
	                    } else {
	                        event.start = kendo.timezone[method](event.start, event.startTimezone || event.endTimezone);
	                        event.end = kendo.timezone[method](event.end, event.endTimezone || event.startTimezone);
	                    }

	                } else if (timezone) {
	                    event.start = kendo.timezone[method](event.start, timezone);
	                    event.end = kendo.timezone[method](event.end, timezone);
	                }
	            } else {
	                if (event.startTimezone || event.endTimezone) {
	                    event.start = kendo.timezone[method](event.start, event.startTimezone || event.endTimezone);
	                    event.end = kendo.timezone[method](event.end, event.endTimezone || event.startTimezone);

	                    if (timezone) {
	                        event.start = kendo.timezone.convert(event.start, event.startTimezone || event.endTimezone, timezone);
	                        event.end = kendo.timezone.convert(event.end, event.endTimezone || event.startTimezone, timezone);
	                    }

	                } else if (timezone) {
	                    event.start = kendo.timezone[method](event.start, timezone);
	                    event.end = kendo.timezone[method](event.end, timezone);
	                }
	            }

	            if (removeUid) {
	                delete event.uid;
	            }

	            if(method === "remove" && event.start && startOffset && startOffset !== event.start.getTimezoneOffset()) {
	                event.start = new Date(event.start.getTime() + (startOffset - event.start.getTimezoneOffset()) * 60000);
	            }
	            if(method === "remove" && event.end && endOffset && endOffset !== event.end.getTimezoneOffset()) {
	                event.end = new Date(event.end.getTime() + (endOffset - event.end.getTimezoneOffset()) * 60000);
	            }
	        }
	        return data;
	    }

	    function getOccurrenceByUid(data, uid) {
	        var length = data.length,
	            idx = 0,
	            event;

	        for (; idx < length; idx++) {
	            event = data[idx];

	            if (event.uid === uid) {
	                return event;
	            }
	        }
	    }

	    var SchedulerDataReader = kendo.Class.extend({
	        init: function(schema, reader) {
	            var timezone = schema.timezone;

	            this.reader = reader;

	            if (reader.model) {
	                this.model = reader.model;
	            }

	            this.timezone = timezone;
	            this.data = wrapDataAccess($.proxy(this.data, this), timezone);
	            this.serialize = wrapDataSerialization($.proxy(this.serialize, this), timezone);
	        },
	        errors: function(data) {
	            return this.reader.errors(data);
	        },
	        parse: function(data) {
	            return this.reader.parse(data);
	        },
	        data: function(data) {
	            return this.reader.data(data);
	        },
	        total: function(data) {
	            return this.reader.total(data);
	        },
	        groups: function(data) {
	            return this.reader.groups(data);
	        },
	        aggregates: function(data) {
	            return this.reader.aggregates(data);
	        },
	        serialize: function(data) {
	            return this.reader.serialize(data);
	        }
	    });

	    function applyZone(date, fromZone, toZone) {
	        if (toZone) {
	            date = kendo.timezone.convert(date, fromZone, toZone);
	        } else {
	            date = kendo.timezone.remove(date, fromZone);
	        }

	        return date;
	    }

	    function validDateValidator(input) {
	        if ((input.filter("[name=start]").length && input.filter("[title=Start]").length) ||
	            (input.filter("[name=end]").length && input.filter("[title=End]").length) ||
	            input.filter(".k-recur-until").length) {
	            var date;
	            var picker = kendo.widgetInstance(input, kendo.ui);

	            if (picker) {
	                date = kendo.parseDate(input.val(), picker.options.format);
	                return !!date && picker.value();
	            } else {
	                date = kendo.parseDate(input.val());
	                return !!date;
	            }
	        }

	        return true;
	    }

	    function dateCompareValidator(input) {
	        if (input.filter("[name=end]").length) {
	            var container = input.closest(".k-scheduler-edit-form");
	            var startInput = container.find("[name=start]:visible");
	            var endInput = container.find("[name=end]:visible");

	            if (endInput[0] && startInput[0]) {
	                var start, end;
	                var startPicker = kendo.widgetInstance(startInput, kendo.ui);
	                var endPicker = kendo.widgetInstance(endInput, kendo.ui);

	                var editable = container.data("kendoEditable");
	                var model = editable ? editable.options.model : null;

	                if (startPicker && endPicker) {
	                    start = startPicker.value();
	                    end = endPicker.value();
	                } else {
	                    start = kendo.parseDate(startInput.val());
	                    end = kendo.parseDate(endInput.val());
	                }

	                if (start && end) {
	                    if (model) {
	                        var timezone = startInput.attr(kendo.attr("timezone"));
	                        var startTimezone = model.startTimezone;
	                        var endTimezone = model.endTimezone;

	                        startTimezone = startTimezone || endTimezone;
	                        endTimezone = endTimezone || startTimezone;

	                        if (startTimezone) {
	                            start = applyZone(start, startTimezone, timezone);
	                            end = applyZone(end, endTimezone, timezone);
	                        }
	                    }

	                    return start <= end;
	                }
	            }
	        }

	        return true;
	    }

	    function untilDateCompareValidator(input) {
	        var untilPicker, until,
	            container, startInput, start, startPicker;

	        if(input.filter(".k-recur-until").length) {
	            untilPicker = kendo.widgetInstance(input, kendo.ui);
	            until = untilPicker.value();
	            container = input.closest(".k-scheduler-edit-form");
	            startInput = container.find("[name=start]:visible");

	            if (startInput[0]) {
	                startPicker = kendo.widgetInstance(startInput, kendo.ui);

	                if (startPicker) {
	                    start = startPicker.value();
	                } else {
	                    start = kendo.parseDate(startInput.val());
	                }

	                if (start && until) {
	                    return start <= until;
	                }
	            }
	        }

	        return true;
	    }

	    var SchedulerEvent = kendo.data.Model.define({
	        init: function(value) {
	            var that = this;

	            kendo.data.Model.fn.init.call(that, value);

	            that._defaultId = that.defaults[that.idField];
	        },

	        _time: function(field) {
	            var date = this[field];
	            var fieldTime = "_" + field + "Time";

	            if (this[fieldTime]) {
	                return this[fieldTime] - kendo.date.toUtcTime(kendo.date.getDate(date));
	            }

	            return getMilliseconds(date);
	        },

	        _date: function(field) {
	            var fieldTime = "_" + field + "Time";

	            if (this[fieldTime]) {
	                return this[fieldTime] - this._time(field);
	            }

	            return kendo.date.getDate(this[field]);
	        },

	        clone: function(options, updateUid) {
	            var uid = this.uid,
	                event = new this.constructor($.extend({}, this.toJSON(), options));

	            if (!updateUid) {
	                event.uid = uid;
	            }

	            return event;
	        },

	        duration: function() {
	            var end = this.end;
	            var start = this.start;
	            var offset = (end.getTimezoneOffset() - start.getTimezoneOffset()) * kendo.date.MS_PER_MINUTE;

	            return end - start - offset;
	        },

	        expand: function(start, end, zone) {
	            return recurrence ? recurrence.expand(this, start, end, zone) : [this];
	        },

	        update: function(eventInfo) {
	            for (var field in eventInfo) {
	                this.set(field, eventInfo[field]);
	            }

	            if (this._startTime) {
	                this.set("_startTime", kendo.date.toUtcTime(this.start));
	            }

	            if (this._endTime) {
	                this.set("_endTime", kendo.date.toUtcTime(this.end));
	            }
	        },

	        isMultiDay: function() {
	            return this.isAllDay || this.duration() >= kendo.date.MS_PER_DAY;
	        },

	        isException: function() {
	            return !this.isNew() && this.recurrenceId;
	        },

	        isOccurrence: function() {
	            return this.isNew() && this.recurrenceId;
	        },

	        isRecurring: function() {
	            return !!(this.recurrenceRule || this.recurrenceId);
	        },

	        isRecurrenceHead: function() {
	            return !!(this.id && this.recurrenceRule);
	        },

	        toOccurrence: function(options) {
	            options = $.extend(options, {
	                recurrenceException: null,
	                recurrenceRule: null,
	                recurrenceId: this.id || this.recurrenceId
	            });

	            options[this.idField] = this.defaults[this.idField];

	            return this.clone(options, true);
	        },

	        toJSON: function() {
	            var obj = kendo.data.Model.fn.toJSON.call(this);
	            obj.uid = this.uid;

	            delete obj._startTime;
	            delete obj._endTime;

	            return obj;
	        },

	        shouldSerialize: function(field) {
	            return kendo.data.Model.fn.shouldSerialize.call(this, field) && field !== "_defaultId";
	        },

	        set: function(key, value) {
	            var isAllDay = this.isAllDay || false;

	            kendo.data.Model.fn.set.call(this, key, value);

	            if (key == "isAllDay" && value != isAllDay) {
	                var start = kendo.date.getDate(this.start);
	                var end = new Date(this.end);
	                var milliseconds = kendo.date.getMilliseconds(end);

	                if (milliseconds === 0 && value) {
	                    milliseconds = MS_PER_DAY;
	                }

	                this.set("start", start);

	                if (value === true) {
	                    kendo.date.setTime(end, -milliseconds);

	                    if (end < start) {
	                        end = start;
	                    }
	                } else {
	                    kendo.date.setTime(end, MS_PER_DAY - milliseconds);
	                }

	                this.set("end", end);
	            }
	        },
	        id: "id",
	        fields: {
	            id: { type: "number" },
	            title: { defaultValue: "", type: "string" },
	            start: { type: "date", validation: { required: true, validDate: { value: validDateValidator } } },
	            startTimezone: { type: "string" },
	            end: {
	                type: "date",
	                validation: {
	                    required: true,
	                    validDate: { value: validDateValidator },
	                    dateCompare: { value: dateCompareValidator }
	                }
	            },
	            endTimezone: { type: "string" },
	            recurrenceRule: {
	                defaultValue: "",
	                type: "string",
	                validation: {
	                    validDate: { value: validDateValidator },
	                    untilDateCompare: { value: untilDateCompareValidator }
	                }
	            },
	            recurrenceException: { defaultValue: "", type: "string" },
	            isAllDay: { type: "boolean", defaultValue: false },
	            description: { type: "string" }
	        }
	    });

	    var SchedulerDataSource = DataSource.extend({
	        init: function(options) {

	            DataSource.fn.init.call(this, extend(true, {}, {
	                schema: {
	                    modelBase: SchedulerEvent,
	                    model: SchedulerEvent
	                }
	            }, options));

	            this.reader = new SchedulerDataReader(this.options.schema, this.reader);
	        },

	        expand: function(start, end) {
	            var data = this.view(),
	                filter = {},
	                endOffset;

	            if (start && end) {
	                endOffset = end.getTimezoneOffset();
	                end = new Date(end.getTime() + MS_PER_DAY - 1);

	                if(end.getTimezoneOffset() !== endOffset){
	                    end = kendo.timezone.apply(end, endOffset);
	                }

	                filter = {
	                    logic: "or",
	                    filters: [
	                        {
	                            logic: "and",
	                            filters: [
	                                { field: "start", operator: "gte", value: start },
	                                { field: "end", operator: "gte", value: start },
	                                { field: "start", operator: "lte", value: end }
	                            ]
	                        },
	                        {
	                            logic: "and",
	                            filters: [
	                                { field: "start", operator: "lte", value: new Date(start.getTime() + MS_PER_DAY - 1) },
	                                { field: "end", operator: "gte", value: start }
	                            ]
	                        }
	                    ]
	                };

	                data = new kendo.data.Query(expandAll(data, start, end, this.reader.timezone)).filter(filter).toArray();
	            }

	            return data;
	        },

	        cancelChanges: function(model) {
	            if (model && model.isOccurrence()) {
	                this._removeExceptionDate(model);
	            }

	            DataSource.fn.cancelChanges.call(this, model);
	        },

	        insert: function(index, model) {
	            if (!model) {
	                return;
	            }

	            if (!(model instanceof SchedulerEvent)) {
	                var eventInfo = model;

	                model = this._createNewModel();
	                model.accept(eventInfo);
	            }

	            if ((!this._pushCreated && model.isRecurrenceHead()) || model.recurrenceId) {
	                model = model.recurrenceId ? model : model.toOccurrence();
	                this._addExceptionDate(model);
	            }

	            return DataSource.fn.insert.call(this, index, model);
	        },

	        pushCreate: function(items) {
	            this._pushCreated = true;
	            DataSource.fn.pushCreate.call(this, items);
	            this._pushCreated = false;
	        },

	        remove: function(model) {
	            if (model.isRecurrenceHead()) {
	                this._removeExceptions(model);
	            } else if (model.isRecurring()) {
	                this._addExceptionDate(model);
	            }

	            return DataSource.fn.remove.call(this, model);
	        },

	        _removeExceptions: function(model) {
	            var data = this.data().slice(0),
	                item = data.shift(),
	                id = model.id;

	            while(item) {
	                if (item.recurrenceId === id) {
	                    DataSource.fn.remove.call(this, item);
	                }

	                item = data.shift();
	            }

	            model.set(RECURRENCE_EXCEPTION, "");
	        },

	        _removeExceptionDate: function(model) {
	            if (model.recurrenceId) {
	                var head = this.get(model.recurrenceId);

	                if (head) {
	                    var start = model.defaults.start;
	                    var replaceRegExp = new RegExp("(\\" + EXCEPTION_SEPARATOR + "?)" + recurrence.toExceptionString(start, this.reader.timezone));
	                    var recurrenceException = (head.recurrenceException || "").replace(OLD_EXCEPTION_SEPARATOR_REGEXP, EXCEPTION_SEPARATOR).replace(/\,$/, "");

	                    if(replaceRegExp.test(recurrenceException)){
	                        head.set(RECURRENCE_EXCEPTION, recurrenceException.replace(replaceRegExp, ""));
	                    }else{
	                        start = model.start;
	                        replaceRegExp = new RegExp("(\\" + EXCEPTION_SEPARATOR + "?)" + recurrence.toExceptionString(start, this.reader.timezone));
	                        head.set(RECURRENCE_EXCEPTION, recurrenceException.replace(replaceRegExp, ""));
	                    }
	                }
	            }
	        },

	        _addExceptionDate: function(model) {
	            var start = model.start;
	            var zone = this.reader.timezone;
	            var head = this.get(model.recurrenceId);
	            var recurrenceException = (head.recurrenceException || "").replace(OLD_EXCEPTION_SEPARATOR_REGEXP, EXCEPTION_SEPARATOR).replace(/\,$/, "");

	            if (!recurrence.isException(recurrenceException, start, zone)) {
	                var newException = recurrence.toExceptionString(start, zone);
	                model.defaults.start = start;
	                head.set(RECURRENCE_EXCEPTION, recurrenceException + (recurrenceException && newException ? EXCEPTION_SEPARATOR : "") + newException);
	            }
	        }
	    });

	    function expandAll(events, start, end, zone) {
	        var length = events.length,
	            data = [],
	            idx = 0;

	        for (; idx < length; idx++) {
	            data = data.concat(events[idx].expand(start, end, zone));
	        }

	        return data;
	    }

	    SchedulerDataSource.create = function(options) {
	        if (isArray(options) || options instanceof kendo.data.ObservableArray) {
	            options = { data: options };
	        }

	        var dataSource = options || {},
	            data = dataSource.data;

	        dataSource.data = data;

	        if (!(dataSource instanceof SchedulerDataSource) && dataSource instanceof kendo.data.DataSource) {
	            throw new Error("Incorrect DataSource type. Only SchedulerDataSource instances are supported");
	        }

	        return dataSource instanceof SchedulerDataSource ? dataSource : new SchedulerDataSource(dataSource);
	    };

	    extend(true, kendo.data, {
	       SchedulerDataSource: SchedulerDataSource,
	       SchedulerDataReader: SchedulerDataReader,
	       SchedulerEvent: SchedulerEvent
	    });

	    var defaultCommands = {
	        update: {
	            text: "Save",
	            className: "k-button-solid-primary k-scheduler-update"
	        },
	        canceledit: {
	            text: "Cancel",
	            className: "k-scheduler-cancel"
	        },
	        destroy: {
	            text: "Delete",
	            imageClass: "k-i-close",
	            className: "k-button-solid-primary k-scheduler-delete",
	            iconClass: "k-icon"
	        }
	    };

	    function trimOptions(options, overrideOptions) {
	        delete options.name;
	        delete options.prefix;

	        delete options.remove;
	        delete options.edit;
	        delete options.add;
	        delete options.navigate;

	        for (var key in overrideOptions) {
	            options[key] = overrideOptions[key];
	        }

	        return options;
	    }

	    /*
	    function fieldType(field) {
	        field = field != null ? field : "";
	        return field.type || kendo.type(field) || "string";
	    }
	    */

	    function descriptionEditor(options) {
	        var attr = createValidationAttributes(options.model, options.field);

	        return function(container, model) {
	            $('<textarea name="description" class="k-input-inner" title="' + model.title + '"/>').attr(attr)
	                .appendTo(container)
	                .wrap('<span class="k-input k-textarea k-input-solid k-input-md k-rounded-md"></span>');
	        };
	    }

	    function createValidationAttributes(model, field) {
	        var modelField = (model.fields || model)[field];
	        var specialRules = ["url", "email", "number", "date", "boolean"];
	        var validation = modelField ? modelField.validation : {};
	        // var type = fieldType(modelField);
	        var datatype = kendo.attr("type");
	        var inArray = $.inArray;
	        var ruleName;
	        var rule;

	        var attr = {};

	        for (ruleName in validation) {
	            rule = validation[ruleName];

	            if (inArray(ruleName, specialRules) >= 0) {
	                attr[datatype] = ruleName;
	            } else if (!kendo.isFunction(rule)) {
	                attr[ruleName] = isPlainObject(rule) ? (rule.value || ruleName) : rule;
	            }

	            attr[kendo.attr(ruleName + "-msg")] = rule.message;
	        }

	        return attr;
	    }

	    function filterResourceEditorData(editor, parentValue, parentValueField, valueField) {
	        var editorValue = editor.value(),
	            isMs = Array.isArray(editorValue),
	            valueArray;

	        if(isMs) {
	            valueArray = JSON.parse(JSON.stringify(editorValue));
	        } else {
	            valueArray = [editorValue.toString()];
	        }

	        editor.dataSource.data().forEach(function(item) {
	            if(item[parentValueField] === null || item[parentValueField] === undefined || item[parentValueField] == parentValue) {
	                item.set(DISABLED, false);
	            } else {
	                var currentValue = item.get(valueField);

	                item.set(DISABLED, true);

	                if(valueArray.indexOf(currentValue) >= 0 || valueArray.indexOf(currentValue.toString()) >= 0) {
	                    if(isMs) {
	                        valueArray.splice(valueArray.indexOf(currentValue), 1);
	                    } else {
	                        editor.value(null);
	                        editor.trigger(CHANGE);
	                    }
	                }
	            }
	        });

	        if(isMs && valueArray.length < editorValue.length) {
	            editor.value(valueArray);
	            editor.trigger(CHANGE);
	        }
	    }

	    function bindParentValueChangeHandler(container, currentEditor, resource, parent) {
	        var parentElement = container.closest(".k-edit-form-container").find("[data-" + kendo.ns + "bind='value:" + parent + "']");
	        var parentWidget = parentElement.getKendoDropDownList();

	        if(parentWidget) {
	            parentWidget.bind(CHANGE, function(ev) {
	                var parentValue = ev.sender.value();

	                filterResourceEditorData(currentEditor, parentValue, resource.dataParentValueField, resource.dataValueField);
	            });
	        } else {
	            parentElement.on(CHANGE, function(ev) {
	                var parentValue = ev.target.value;

	                filterResourceEditorData(currentEditor, parentValue, resource.dataParentValueField, resource.dataValueField);
	            });
	        }
	    }

	    function filterMobileResourceEditorData(resource, currentEditor, parentSelectedValue) {
	        var options = currentEditor.find(OPTION),
	            editorValue = currentEditor.val(),
	            isMs = Array.isArray(editorValue),
	            valueArray;

	        if(isMs) {
	            valueArray = JSON.parse(JSON.stringify(editorValue));
	        } else {
	            valueArray = [editorValue];
	        }

	        resource.dataSource.view().forEach(function(item, index) {
	            var itemParentValue = kendo.getter(resource.dataParentValueField)(item);
	            var valid = itemParentValue === null || itemParentValue === undefined || itemParentValue == parentSelectedValue;

	            if(valid) {
	                options[index].removeAttribute(DISABLED);
	            } else {
	                options[index].setAttribute(DISABLED, DISABLED);

	                var currentValue = "" + item.get(resource.dataValueField);

	                if(valueArray.indexOf(currentValue) >= 0) {
	                    if(isMs) {
	                        valueArray.splice(valueArray.indexOf(currentValue), 1);
	                    } else {
	                        currentEditor.val(null);
	                        currentEditor.trigger(CHANGE);
	                    }
	                }
	            }
	        });

	        if(isMs && valueArray.length < editorValue.length) {
	            currentEditor.val(valueArray);
	            currentEditor.trigger(CHANGE);
	        }
	    }

	    function dropDownResourceEditor(resource, model, parent) {
	        var attr = createValidationAttributes(model, resource.field);

	        return function(container) {
	            var currentEditor;

	            if(parent) {
	                setTimeout(function() {
	                    filterResourceEditorData(currentEditor, model[parent], resource.dataParentValueField, resource.dataValueField);
	                    bindParentValueChangeHandler(container, currentEditor, resource, parent);
	                });
	            }

	            currentEditor = $(kendo.format('<select data-{0}bind="value:{1}" title="' + model.title + '">', kendo.ns, resource.field))
	                .appendTo(container)
	                .attr(attr)
	                .kendoDropDownList({
	                    dataTextField: resource.dataTextField,
	                    dataValueField: resource.dataValueField,
	                    dataSource: resource.dataSource.data(),
	                    valuePrimitive: resource.valuePrimitive,
	                    optionLabel: "None",
	                    template: kendo.format('<span #= data.disabled ? "data-disabled": ""#><span class="k-scheduler-mark" style="background-color:#= data.{0}?{0}:"none" #"></span>#={1}#</span>', resource.dataColorField, resource.dataTextField),
	                    select: function(e){
	                        if(e.dataItem.disabled){
	                            e.preventDefault();
	                        }
	                    },
	                    dataBound: function(e) {
	                        var options = e.sender.list.find('li');

	                        options.each(function(i, el) {
	                            var element = $(el);

	                            if(element.find("[data-disabled]").length > 0) {
	                                element.addClass("k-state-disabled");
	                            }
	                        });
	                    }
	                }).data("kendoDropDownList");
	       };
	    }

	    function dropDownResourceEditorMobile(resource, model, parent) {
	        var attr = createValidationAttributes(model, resource.field);

	        return function(container) {
	            var options = "";
	            var view = resource.dataSource.view();

	            for (var idx = 0, length = view.length; idx < length; idx++) {
	                options += kendo.format('<option value="{0}">{1}</option>',
	                    kendo.getter(resource.dataValueField)(view[idx]),
	                    kendo.getter(resource.dataTextField)(view[idx])
	                );
	            }

	            var currentEditor = $(kendo.format('<select data-{0}bind="value:{1}">{2}</select>',
	                kendo.ns,
	                resource.field,
	                options
	            ))
	            .appendTo(container)
	            .attr(attr);

	            if(parent) {
	                setTimeout(function() {
	                    var parentElement = container.closest(".k-stretched-view").find("[data-" + kendo.ns + "bind='value:" + parent + "']");
	                    var parentSelectedValue = model[parent];

	                    filterMobileResourceEditorData(resource, currentEditor, parentSelectedValue);

	                    parentElement.on(CHANGE, function(ev) {
	                        var parentValue = ev.target.value;

	                        filterMobileResourceEditorData(resource, currentEditor, parentValue);
	                    });
	                });
	            }
	       };
	    }

	    function multiSelectResourceEditor(resource, model, parent) {
	        var attr = createValidationAttributes(model, resource.field);

	        return function(container) {
	            var currentEditor;

	            if(parent) {
	                setTimeout(function() {
	                    filterResourceEditorData(currentEditor, model[parent], resource.dataParentValueField, resource.dataValueField);
	                    bindParentValueChangeHandler(container, currentEditor, resource, parent);
	                });
	            }

	            currentEditor = $(kendo.format('<select data-{0}bind="value:{1}">', kendo.ns, resource.field))
	                .appendTo(container)
	                .attr(attr)
	                .kendoMultiSelect({
	                    dataTextField: resource.dataTextField,
	                    dataValueField: resource.dataValueField,
	                    dataSource: resource.dataSource.data(),
	                    valuePrimitive: resource.valuePrimitive,
	                    itemTemplate: kendo.format('<span #= data.disabled ? "data-disabled": "" #><span class="k-scheduler-mark" style="background-color:#= data.{0}?{0}:"none" #"></span>#={1}#</span>', resource.dataColorField, resource.dataTextField),
	                    tagTemplate: kendo.format('<span class="k-scheduler-mark" style="background-color:#= data.{0}?{0}:"none" #"></span>#={1}#', resource.dataColorField, resource.dataTextField),
	                    select: function(e){
	                        if(e.dataItem.disabled){
	                            e.preventDefault();
	                        }
	                    },
	                    dataBound: function(e) {
	                        var options = e.sender.list.find('li');

	                        options.each(function(i, el) {
	                            var element = $(el);

	                            if(element.find("[data-disabled]").length > 0) {
	                                element.addClass("k-state-disabled");
	                            }
	                        });
	                    }
	                }).data("kendoMultiSelect");
	       };
	    }

	    function multiSelectResourceEditorMobile(resource, model, parent) {
	        var attr = createValidationAttributes(model, resource.field);

	        return function(container) {
	            var options = "";
	            var view = resource.dataSource.view();

	            for (var idx = 0, length = view.length; idx < length; idx++) {
	                options += kendo.format('<option value="{0}">{1}</option>',
	                    kendo.getter(resource.dataValueField)(view[idx]),
	                    kendo.getter(resource.dataTextField)(view[idx])
	                );
	            }

	            var currentEditor = $(kendo.format('<select data-{0}bind="value:{1}" multiple="multiple">{2}</select>',
	                kendo.ns,
	                resource.field,
	                options
	            ))
	            .appendTo(container)
	            .attr(attr);

	            if(parent) {
	                setTimeout(function() {
	                    var parentElement = container.closest(".k-stretched-view").find("[data-" + kendo.ns + "bind='value:" + parent + "']");
	                    var parentSelectedValue = model[parent];

	                    filterMobileResourceEditorData(resource, currentEditor, parentSelectedValue);

	                    parentElement.on(CHANGE, function(ev) {
	                        var parentValue = ev.target.value;

	                        filterMobileResourceEditorData(resource, currentEditor, parentValue);
	                    });
	                });
	            }
	       };
	    }

	    function moveEventRange(event, distance) {
	        var duration = event.end.getTime() - event.start.getTime();

	        var start = new Date(event.start.getTime());

	        kendo.date.setTime(start, distance);

	        var end = new Date(start.getTime());

	        kendo.date.setTime(end, duration, true);

	        return {
	            start: start,
	            end: end
	        };
	    }

	    var editors = {
	        mobile: {
	            dateRange: MOBILEDATERANGEEDITOR,
	            timezonePopUp: MOBILETIMEZONEPOPUP,
	            timezone: MOBILETIMEZONEEDITOR,
	            recurrence: MOBILERECURRENCEEDITOR,
	            description: descriptionEditor,
	            multipleResources: multiSelectResourceEditorMobile,
	            resources: dropDownResourceEditorMobile,
	            isAllDay: MOBILEISALLDAYEDITOR
	        },
	        desktop: {
	            dateRange: DATERANGEEDITOR,
	            timezonePopUp: TIMEZONEPOPUP,
	            timezone: TIMEZONEEDITOR,
	            recurrence: RECURRENCEEDITOR,
	            description: descriptionEditor,
	            multipleResources: multiSelectResourceEditor,
	            resources: dropDownResourceEditor
	        }
	    };

	    var Editor = kendo.Observable.extend({
	        init: function(element, options) {

	            kendo.Observable.fn.init.call(this);

	            this.element = element;
	            this.options = extend(true, {}, this.options, options);
	            this.createButton = this.options.createButton;

	            this.toggleDateValidationHandler = proxy(this._toggleDateValidation, this);
	        },

	        _toggleDateValidation: function(e) {
	            if (e.field == "isAllDay") {
	                var container = this.container,
	                    isAllDay = this.editable.options.model.isAllDay,
	                    bindAttribute = kendo.attr("bind"),
	                    element, isDateTimeInput, shouldValidate;
	                container.find("[" + bindAttribute+ "*=end],[" + bindAttribute + "*=start]").each(function() {
	                    element = $(this);
	                    if (valueStartEndBoundRegex.test(element.attr(bindAttribute))) {
	                        isDateTimeInput = element.is("[" + kendo.attr("role") + "=datetimepicker],[type*=datetime]");
	                        shouldValidate = isAllDay !== isDateTimeInput;
	                        element.attr(kendo.attr("validate"), shouldValidate);
	                    }
	                });
	            }
	        },

	        fields: function(editors, model) {
	            var that = this;
	            var messages = that.options.messages;
	            var timezone = that.options.timezone;

	            var click = function(e) {
	                e.preventDefault();
	                that._initTimezoneEditor(model, this);
	            };

	            var fields = [
	                { field: "title", title: messages.editor.title /*, format: field.format, editor: field.editor, values: field.values*/ },
	                { field: "start", title: messages.editor.start, editor: editors.dateRange, timezone: timezone },
	                { field: "end", title: messages.editor.end, editor: editors.dateRange, timezone: timezone },
	                { field: "isAllDay", title: messages.editor.allDayEvent, editor: editors.isAllDay }
	            ];

	            var checkHierarchical = function(item) {
	                return !!item[resource.dataParentValueField];
	            };

	            if (kendo.timezone.windows_zones) {
	                fields.push({ field: "timezone", title: messages.editor.timezone, editor: editors.timezonePopUp, click: click, messages: messages.editor, model: model });
	                fields.push({ field: "startTimezone", title: messages.editor.startTimezone, editor: editors.timezone, noTimezone: messages.editor.noTimezone });
	                fields.push({ field: "endTimezone", title: messages.editor.endTimezone, editor: editors.timezone, noTimezone: messages.editor.noTimezone });
	            }

	            if (!model.recurrenceId) {
	                fields.push({ field: "recurrenceRule", title: messages.editor.repeat, editor: editors.recurrence, timezone: timezone, messages: messages.recurrenceEditor, pane: this.pane });
	            }

	            if ("description" in model) {
	                fields.push({ field: "description", title: messages.editor.description, editor: editors.description({model: model, field: "description"}) });
	            }

	            for (var resourceIndex = 0; resourceIndex < this.options.resources.length; resourceIndex++) {
	                var resource = this.options.resources[resourceIndex];
	                var resourceView = resource.dataSource.view();
	                var hasParent = resourceView.some(checkHierarchical);
	                var parentResource, parent;

	                if(hasParent) {
	                    parentResource = this.options.resources[resourceIndex - 1];

	                    if(parentResource) {
	                        parent = parentResource.field;
	                    }
	                }

	                fields.push({
	                    field: resource.field,
	                    title: resource.title,
	                    editor: resource.multiple ? editors.multipleResources(resource, model, parent) : editors.resources(resource, model, parent)
	                });
	            }

	            return fields;
	        },

	        end: function() {
	            return this.editable.end();
	        },

	        _buildDesktopEditTemplate: function(model, fields, editableFields) {
	            var messages = this.options.messages;
	            var settings = extend({}, kendo.Template, this.options.templateSettings);
	            var paramName = settings.paramName;
	            var html = "";

	            for (var idx = 0, length = fields.length; idx < length; idx++) {
	                var field = fields[idx];

	                if (field.field === "startTimezone") {
	                    html += '<div class="k-popup-edit-form k-scheduler-edit-form k-scheduler-timezones" style="display:none">';
	                    html += '<div class="k-edit-form-container">';
	                    html += '<div class="k-edit-label"></div>';
	                    html += '<div class="k-edit-field"><label class="k-check"><input class="k-timezone-toggle k-checkbox k-checkbox-md k-rounded-md" type="checkbox"/>' + messages.editor.separateTimezones + '</label></div>';
	                }

	                html += '<div class="k-edit-label"><label for="' + field.field + '">' + (field.title || field.field || "") + '</label></div>';

	                if ((!model.editable || model.editable(field.field))) {
	                    editableFields.push(field);
	                    html += '<div ' + kendo.attr("container-for") + '="' + field.field + '" class="k-edit-field"></div>';
	                } else {
	                    var tmpl = "#:";

	                    if (field.field) {
	                        field = kendo.expr(field.field, paramName);
	                        tmpl += field + "==null?'':" + field;
	                    } else {
	                        tmpl += "''";
	                    }

	                    tmpl += "#";

	                    tmpl = kendo.template(tmpl, settings);

	                    html += '<div class="k-edit-field">' + tmpl(model) + '</div>';
	                }

	                if (field.field === "endTimezone") {
	                    html += this._createEndTimezoneButton();
	                }
	            }

	            return html;
	        },

	        _buildMobileEditTemplate: function(model, fields, editableFields) {
	            var messages = this.options.messages;
	            var settings = extend({}, kendo.Template, this.options.templateSettings);
	            var paramName = settings.paramName;
	            var html = "";

	            html += '<ul class="k-listgroup k-listgroup-flush">';

	            for (var idx = 0, length = fields.length; idx < length; idx++) {
	                var field = fields[idx];

	                if (field.field === "timezone" || field.field === "recurrenceRule") {
	                    html += '</ul><ul class="k-listgroup k-listgroup-flush">';
	                }

	                if (field.field === "startTimezone") {
	                    html += '<div class="k-popup-edit-form k-scheduler-edit-form k-scheduler-timezones" style="display:none">';
	                    html += '<ul class="k-listgroup k-listgroup-flush">';
	                    html += '<li class="k-item k-listgroup-item">';
	                    html += '<label class="k-label k-listgroup-form-row">';
	                    html += '<span class="k-item-title k-listgroup-form-row">' + messages.editor.separateTimezones + '</span>';
	                    html += '<span class="k-listgroup-form-field-wrapper">';
	                    html += '<input class="k-timezone-toggle" data-role="switch" type="checkbox" />';
	                    html += '</span>';
	                    html += '</label>';
	                    html += '</li>';
	                }

	                if ((!model.editable || model.editable(field.field))) {
	                    html += '<li class="k-item k-listgroup-item">';
	                    if (field.field === "timezone") {
	                        html += '<label class="k-label k-listgroup-form-row" data-bind="css: { k-state-disabled: isAllDay }">';
	                    } else {
	                        html += '<label class="k-label k-listgroup-form-row">';
	                    }
	                    html += '<span class="k-item-title k-listgroup-form-field-label">' + (field.title || field.field || "") + '</span>';

	                    editableFields.push(field);
	                    html += '<div class="k-listgroup-form-field-wrapper" ' + kendo.attr("container-for") + '="' + field.field + '"></div>';

	                    html += '</label></li>';
	                } else {
	                    var tmpl = "#:";

	                    html += '<li class="k-item k-listgroup-item">';
	                    html += '<label class="k-label k-no-click k-listgroup-form-row">';
	                    html += '<span class="k-item-title k-listgroup-form-field-label">' + (field.title || field.field || "") + '</span>';

	                    if (field.field) {
	                        field = kendo.expr(field.field, paramName);
	                        tmpl += field + "==null?'':" + field;
	                    } else {
	                        tmpl += "''";
	                    }

	                    tmpl += "#";

	                    tmpl = kendo.template(tmpl, settings);

	                    html += '<span class="k-no-editor k-listgroup-form-field-wrapper">' + tmpl(model) + '</span>';

	                    html += '</label></li>';
	                }

	                if (field.field === "recurrenceRule") {
	                    html += '</ul><ul class="k-listgroup k-listgroup-flush">';
	                }

	                if (field.field === "endTimezone") {
	                    html += "</ul></div>";
	                }
	            }
	            html += '</ul>';

	            return html;
	        },

	        _buildEditTemplate: function(model, fields, editableFields, isMobile) {
	            var settings = extend({}, kendo.Template, this.options.templateSettings);
	            var template = this.options.editable.template;
	            var html = "";

	            if (template) {
	                if (typeof template === STRING) {
	                    template = kendo.unescape(template);
	                }
	                html += (kendo.template(template, settings))(model);
	            } else if (isMobile) {
	                html += '<div data-role="content">' + this._buildMobileEditTemplate(model, fields, editableFields) + '</div>';
	            } else {
	                html += this._buildDesktopEditTemplate(model, fields, editableFields);
	            }

	            return html;
	        },

	        _createEndTimezoneButton: function() {
	            return '</ul></div>';
	        },

	        _revertTimezones: function(model) {
	            model.set("startTimezone", this._startTimezone);
	            model.set("endTimezone", this._endTimezone);

	            delete this._startTimezone;
	            delete this._endTimezone;
	        }
	    });

	    var MobileEditor = Editor.extend({
	        init: function() {
	            Editor.fn.init.apply(this, arguments);

	            this.pane = kendo.Pane.wrap(this.element, {
	                viewEngine: {
	                    viewOptions: {
	                        renderOnInit: true,
	                        wrap: false,
	                        wrapInSections: true,
	                        detachOnHide: false,
	                        detachOnDestroy: false
	                    }
	                }
	            });
	            this.pane.element.parent().css("height", this.options.height);
	            this.view = this.pane.view();
	        },

	        options: {
	            animations: {
	                left: "slide",
	                right: "slide:right"
	            }
	        },

	        destroy: function() {
	            this.close();
	            this.unbind();
	            this.pane.destroy();
	        },

	        _initTimezoneEditor: function(model) {
	            var that = this;
	            var pane = that.pane;
	            var messages = that.options.messages;
	            var timezoneView = that.timezoneView;
	            var container = timezoneView ? timezoneView.content.find(".k-scheduler-timezones") : that.container.find(".k-scheduler-timezones");
	            var kSwitch = container.find("input.k-timezone-toggle").data("kendoSwitch");
	            var endTimezoneRow = container.find("li.k-item:not(.k-zonepicker)").last();
	            var startTimezoneChange = function(e) {
	                if (e.field === "startTimezone") {
	                    var value = model.startTimezone;

	                    kSwitch.enable(value);

	                    if (!value) {
	                        endTimezoneRow.hide();
	                        model.set("endTimezone", "");
	                        kSwitch.value(false);
	                    }
	                }
	            };

	            that._startTimezone = model.startTimezone || "";
	            that._endTimezone = model.endTimezone || "";

	            if (!timezoneView) {
	                var html = '<div data-role="view" class="k-popup-edit-form k-scheduler-edit-form">' +
	                '<div data-role="header" class="k-header">' +
	                    '<a href="\\#" class="k-header-cancel k-scheduler-cancel k-link" title="' + messages.cancel + '"' +
	                    'aria-label="' + messages.cancel + '"><span class="k-icon k-i-arrow-chevron-left"></span></a>' +
	                    messages.editor.timezoneTitle +
	                    '<a href="\\#" class="k-header-done k-scheduler-update k-link" title="' + messages.save + '" ' +
	                    'aria-label="' + messages.save + '"><span class="k-icon k-i-check"></span></a>' +
	                '</div><div data-role="content"></div>';

	                this.timezoneView = timezoneView = pane.append(html);

	                timezoneView.contentElement.append(container.show());

	                timezoneView.element.on(CLICK + NS, ".k-scheduler-cancel, .k-scheduler-update", function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();

	                    if ($(this).hasClass("k-scheduler-cancel")) {
	                        that._revertTimezones(model);
	                    }

	                    var editView = that._editPane;

	                    var text = timezoneButtonText(model, messages.editor.noTimezone);

	                    editView.content.find(".k-timezone-label").text(text);

	                    pane.navigate(editView, that.options.animations.right);
	                });

	                kSwitch.bind(CHANGE, function(ev) {
	                    endTimezoneRow.toggle(ev.checked);
	                    model.set("endTimezone", "");
	                });
	                model.bind(CHANGE, startTimezoneChange);
	            }

	            kSwitch.value(!!model.endTimezone);
	            kSwitch.enable(!!model.startTimezone);

	            if (model.endTimezone) {
	                endTimezoneRow.show();
	            } else {
	                endTimezoneRow.hide();
	            }

	            pane.navigate(timezoneView, that.options.animations.left);
	        },

	        showDialog: function(options) {
	            var actions = options.buttons.map(function(button){
	                return {
	                    text: button.text,
	                    action: button.click
	                };
	            });

	            actions.push({
	                text: this.options.messages.cancel,
	                primary: true
	            });

	            $("<div />").appendTo(document.body)
	                .kendoDialog({
	                    close: function() {
	                        this.destroy();
	                    },
	                    modal: {
	                        preventScroll: true
	                    },
	                    closable: false,
	                    title: false,
	                    content: options.text,
	                    actions: actions
	                });
	        },

	        editEvent: function(model) {
	            var pane = this.pane;
	            var html = "";

	            var messages = this.options.messages;
	            var updateText = messages.save;
	            var removeText = messages.destroy;
	            var cancelText = messages.cancel;
	            var titleText = messages.editor.editorTitle;
	            var resetSeries = messages.resetSeries;

	            html += '<div data-role="view" class="k-popup-edit-form k-scheduler-edit-form"' + kendo.attr("uid") + '="' + model.uid + '">' +
	                '<div data-role="header" class="k-header">' +
	                    '<a href="\\#" class="k-header-cancel k-scheduler-cancel k-link" title="' + cancelText + '"' +
	                    'aria-label="' + cancelText + '"><span class="k-icon k-i-arrow-chevron-left"></span></a>' +
	                    titleText +
	                    '<a href="\\#" class="k-header-done k-scheduler-update k-link" title="' + updateText + '" ' +
	                    'aria-label="' + updateText + '"><span class="k-icon k-i-check"></span></a>' +
	                '</div>';

	            var fields = this.fields(editors.mobile, model);

	            var that = this;

	            var editableFields = [];

	            html += this._buildEditTemplate(model, fields, editableFields, true);

	            html += "</div>";

	            var view = pane.append(html);

	            if (!model.isNew() && this.options.editable && this.options.editable.destroy !== false && model.isRecurrenceHead() && model.recurrenceException) {
	                var resetSeriesBtn = '<ul class="k-edit-buttons k-listgroup k-listgroup-flush"><li class="k-item k-listgroup-item"><span class="k-scheduler-resetSeries k-link k-label" aria-label="' + resetSeries + '">' + resetSeries + '</span></li></ul>';
	                view.contentElement.append(resetSeriesBtn);
	            }

	            if (!model.isNew() && this.options.editable && this.options.editable.destroy !== false) {
	                var deleteBtn = '<ul class="k-edit-buttons k-listgroup k-listgroup-flush"><li class="k-item k-listgroup-item"><span class="k-scheduler-delete k-link k-label" aria-label="' + removeText + '">' + removeText + '</span></li></ul>';
	                view.contentElement.append(deleteBtn);
	            }

	            this._editPane = view;

	            var container = this.container = view.element;

	            this.editable = container.kendoEditable({
	                fields: editableFields,
	                model: model,
	                clearContainer: false,
	                target: that.options.target,
	                validateOnBlur: true
	            }).data("kendoEditable");

	            if (!this.trigger("edit", { container: container, model: model })) {

	                container.on(CLICK + NS, "a.k-scheduler-edit, a.k-scheduler-cancel, a.k-scheduler-update, span.k-scheduler-delete, span.k-scheduler-resetSeries", function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();

	                    var button = $(this);

	                    if (!button.hasClass("k-scheduler-edit")) {

	                        var name = "cancel";

	                        if (button.hasClass("k-scheduler-update")) {
	                            name = "save";
	                        } else if (button.hasClass("k-scheduler-delete")) {
	                            name = "remove";
	                        } else if (button.hasClass("k-scheduler-resetSeries")) {
	                            name = RESET;
	                        }

	                        that.trigger(name, { container: container, model: model });
	                    } else {
	                        pane.navigate(this._editPane, that.options.animations.right);
	                    }
	                });

	                pane.navigate(view, that.options.animations.left);

	                model.bind(CHANGE, that.toggleDateValidationHandler);
	            } else {
	                this.trigger("cancel", { container: container, model: model });
	            }

	            return this.editable;
	        },

	        _views: function() {
	            return this.pane.element
	                    .find(kendo.roleSelector("view"))
	                    .not(this.view.element);
	        },

	        close: function() {
	            if (this.container) {
	                this.pane.navigate("", this.options.animations.right);

	                var views = this._views();
	                var view;

	                for (var idx = 0, length = views.length; idx < length; idx++) {
	                    view = views.eq(idx).data("kendoView");
	                    if (view) {
	                       view.purge();
	                    }
	                }

	                views.remove();

	                this.container = null;
	                if (this.editable) {
	                    this.editable.options.model.unbind(CHANGE, this.toggleDateValidationHandler);
	                    this.editable.destroy();
	                    this.editable = null;
	                }
	                this.timezoneView = null;
	            }
	        }
	    });

	    var PopupEditor = Editor.extend({
	        destroy: function() {
	            this.close();
	            this.unbind();
	        },

	        editEvent: function(model) {
	            var that = this;
	            var editable = that.options.editable;
	            var html = '<div ' + kendo.attr("uid") + '="' + model.uid + '" class="k-popup-edit-form k-scheduler-edit-form"><div class="k-edit-form-container">';
	            var messages = that.options.messages;
	            var updateText = messages.save;
	            var cancelText = messages.cancel;
	            var deleteText = messages.destroy;
	            var resetSeries = messages.resetSeries;

	            var fields = this.fields(editors.desktop, model);

	            var editableFields = [];

	            html += this._buildEditTemplate(model, fields, editableFields, false);

	            var attr;
	            var options = isPlainObject(editable) ? editable.window : {};

	            html += '<div class="k-edit-buttons">';
	            html += this.createButton({ name: "update", text: updateText, attr: attr }) + this.createButton({ name: "canceledit", text: cancelText, attr: attr });

	            if (!model.isNew() && editable.destroy !== false && model.isRecurrenceHead() && model.recurrenceException) {
	                html += this.createButton({ name: "resetSeries", text: resetSeries, attr: attr });
	            }

	            if ((!model.isNew() || model.isRecurring()) && editable.destroy !== false) {
	                html += this.createButton({ name: "delete", text: deleteText, attr: attr });
	            }

	            html += '</div></div></div>';

	            var container = this.container = $(html)
	                .appendTo(that.element).eq(0)
	                .kendoWindow(extend({
	                    minWidth: 660,
	                    modal: true,
	                    resizable: false,
	                    draggable: true,
	                    title: messages.editor.editorTitle,
	                    visible: false,
	                    close: function(e) {
	                        if (e.userTriggered) {
	                            if (that.trigger(CANCEL, { container: container, model: model })) {
	                                e.preventDefault();
	                            }
	                        }
	                    }
	                }, options));

	            that.editable = container.kendoEditable({
	                fields: editableFields,
	                model: model,
	                clearContainer: false,
	                validateOnBlur: true,
	                target: that.options.target
	            }).data("kendoEditable");

	            if (!that.trigger(EDIT, { container: container, model: model })) {

	                container.data("kendoWindow").center().open();

	                container.on(CLICK + NS, "button.k-scheduler-cancel", function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();

	                    that.trigger(CANCEL, { container: container, model: model });
	                });

	                container.on(CLICK + NS, "button.k-scheduler-update", function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();

	                    that.trigger("save", { container: container, model: model });
	                });

	                container.on(CLICK + NS, "button.k-scheduler-delete", function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();

	                    that.trigger(REMOVE, { container: container, model: model });
	                });

	                container.on(CLICK + NS, "button.k-scheduler-resetSeries", function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    that.trigger(RESET, { container: container, model: model });
	                });

	                kendo.cycleForm(container);

	                model.bind(CHANGE, that.toggleDateValidationHandler);
	            } else {
	                that.trigger(CANCEL, { container: container, model: model });
	            }

	            return that.editable;
	        },

	        close: function() {
	            var that = this;

	            var destroy = function() {
	                if (that.editable) {
	                    that.editable.options.model.unbind(CHANGE, that.toggleDateValidationHandler);
	                    that.editable.destroy();
	                    that.editable = null;
	                    that.container = null;
	                }
	                if (that.popup) {
	                    that.popup.destroy();
	                    that.popup = null;
	                }
	            };

	            if (that.editable) {
	                if (that._timezonePopup && that._timezonePopup.data("kendoWindow")) {
	                    that._timezonePopup.data("kendoWindow").destroy();
	                    that._timezonePopup = null;
	                }

	                if (that.container.is(":visible")) {
	                    that.container.data("kendoWindow").bind("deactivate", destroy).close();
	                } else {
	                    destroy();
	                }
	            } else {
	                destroy();
	            }
	        },

	        _createEndTimezoneButton: function() {
	            var messages = this.options.messages;
	            var html = "";

	            html += '<div class="k-edit-buttons">';
	            html += this.createButton({ name: "savetimezone", text: messages.save }) + this.createButton({ name: "canceltimezone", text: messages.cancel });
	            html += '</div></div></div>';

	            return html;
	        },

	        showDialog: function(options) {
	            var html = kendo.format("<div class='k-popup-edit-form'><div class='k-edit-form-container'><p class='k-popup-message'>{0}</p>", options.text);

	            html += '<div class="k-edit-buttons">';

	            for (var buttonIndex = 0; buttonIndex < options.buttons.length; buttonIndex++) {
	                html+= this.createButton(options.buttons[buttonIndex]);
	            }

	            html += '</div></div></div>';

	            var wrapper = this.element;

	            if (this.popup) {
	                this.popup.destroy();
	            }

	            var popup = this.popup = $(html).appendTo(wrapper)
	                               .eq(0)
	                               .on(CLICK, ".k-button", function(e) {
	                                    e.preventDefault();

	                                    popup.close();

	                                    var buttonIndex = $(e.currentTarget).index();

	                                    options.buttons[buttonIndex].click();
	                               })
	                               .kendoWindow({
	                                   modal: true,
	                                   resizable: false,
	                                   draggable: false,
	                                   title: options.title,
	                                   visible: false,
	                                   close: function() {
	                                       this.destroy();
	                                       wrapper.trigger("focus");
	                                   }
	                               })
	                               .getKendoWindow();

	            popup.center().open();
	        },

	        _initTimezoneEditor: function(model, activator) {
	            var that = this;
	            var container = that.container.find(".k-scheduler-timezones");
	            var checkbox = container.find("input.k-timezone-toggle");
	            var endTimezoneRow = container.find(".k-edit-label").last().add(container.find(".k-edit-field").last());
	            var saveButton = container.find(".k-scheduler-savetimezone");
	            var cancelButton = container.find(".k-scheduler-canceltimezone");
	            var timezonePopup = that._timezonePopup;
	            var startTimezoneChange = function(e) {
	                if (e.field === "startTimezone") {
	                    var value = model.startTimezone;

	                    checkbox.prop(DISABLED, !value);

	                    if (!value) {
	                        endTimezoneRow.hide();
	                        model.set("endTimezone", "");
	                        checkbox.prop("checked", false);
	                    }
	                }
	            };
	            var wnd;

	            that._startTimezone = model.startTimezone;
	            that._endTimezone = model.endTimezone;

	            if (!timezonePopup) {
	                that._timezonePopup = timezonePopup = container.kendoWindow({
	                    modal: true,
	                    resizable: false,
	                    draggable: true,
	                    title: that.options.messages.editor.timezoneEditorTitle,
	                    visible: false,
	                    close: function(e) {
	                        model.unbind(CHANGE, startTimezoneChange);

	                        if (e.userTriggered) {
	                            that._revertTimezones(model);
	                        }

	                        if (activator) {
	                            activator.focus();
	                        }
	                    }
	                });

	                checkbox.on("click", function() {
	                    endTimezoneRow.toggle(checkbox.prop("checked"));
	                    model.set("endTimezone", "");
	                });

	                saveButton.on("click", function(e) {
	                    e.preventDefault();
	                    wnd.close();
	                });

	                cancelButton.on("click", function(e) {
	                    e.preventDefault();
	                    that._revertTimezones(model);
	                    wnd.close();
	                });

	                model.bind(CHANGE, startTimezoneChange);
	            }

	            checkbox.prop("checked", model.endTimezone).prop(DISABLED, !model.startTimezone);

	            if (model.endTimezone) {
	                endTimezoneRow.show();
	            } else {
	                endTimezoneRow.hide();
	            }

	            wnd = timezonePopup.data("kendoWindow");
	            wnd.center().open();
	        }
	    });

	    var Scheduler = DataBoundWidget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            if (!that.options.views || !that.options.views.length) {
	                that.options.views = ["day", "week"];
	            }

	            that.resources = [];

	            that._initModel();

	            that._wrapper();

	            that._views();

	            that._toolbar();

	            that._dataSource();

	            that._resources();

	            that._resizeHandler = function() {
	                that.resize();
	            };

	            that.wrapper.on(MOUSEDOWN + NS + " selectstart" + NS, function(e) {
	                if (!$(e.target).is(":kendoFocusable")) {
	                    e.preventDefault();
	                }
	            });

	            if (that.options.editable && that.options.editable.resize !== false) {
	                that._resizable();
	            }

	            that._movable();

	            that._bindResize();

	            if(that.options.messages && that.options.messages.recurrence) {
	                recurrence.options = that.options.messages.recurrence;
	            }

	            that._selectable();

	            that._touchHandlers();

	            that._ariaId = kendo.guid();

	            that._createEditor();
	        },

	        _bindResize: function() {
	            $(window).on("resize" + NS, this._resizeHandler);
	        },

	        _unbindResize: function() {
	            $(window).off("resize" + NS, this._resizeHandler);
	        },

	        dataItems: function() {
	            var that = this;
	            var items = that.items();
	            var events = that._data;
	            var eventsUids = $.map(items, function(item) {
	                return $(item).attr("data-uid");
	            });
	            var i;
	            var key;

	            var dict = {};
	            var eventsUidsLength = eventsUids.length;
	            for (i = 0; i < eventsUidsLength; i++) {
	                dict[eventsUids[i]] = null;
	            }

	            var eventsCount = events.length;
	            for (i = 0; i < eventsCount; i++) {
	                var event = events[i];
	                if (dict[event.uid] !== undefined) {
	                    dict[event.uid] = event;
	                }
	            }

	            var sortedData = [];
	            for (key in dict) {
	                sortedData.push(dict[key]);
	            }

	            return sortedData;
	        },

	        _isMobile: function() {
	            var options = this.options;
	            return (options.mobile === true && kendo.support.mobileOS) || options.mobile === "phone" || options.mobile === "tablet";
	        },

	        _isTouch: function(event) {
	            return /touch/.test(event.type) || (event.originalEvent && /touch/.test(event.originalEvent.pointerType));
	        },

	        _isInverseColor: function(eventElement) {
	            return eventElement.hasClass(INVERSECOLORCLASS);
	        },

	        _groupsByResource: function(resources, groupIndex, groupsArray, parentFieldValue, parentField) {
	            if (!groupsArray) {
	                groupsArray = [];
	            }

	            var resource = resources[0];
	            if (resource) {
	                var group;
	                var data = resource.dataSource.view();
	                var prevIndex = 0;

	                for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
	                    var fieldValue = kendo.getter(resource.dataValueField)(data[dataIndex]);
	                    var currentGroupIndex = groupIndex + prevIndex + dataIndex;

	                    group = this._groupsByResource(resources.slice(1), currentGroupIndex, groupsArray, fieldValue, resource.field);
	                    group[resource.field] = fieldValue;
	                    prevIndex = group.groupIndex;

	                    if (parentField && parentFieldValue) {
	                        group[parentField] = parentFieldValue;
	                    }

	                    if (resources.length === 1) {
	                        group.groupIndex = groupIndex + dataIndex;
	                        groupsArray.push(group);
	                    }
	                }
	                return group;
	            } else {
	                return {};
	            }
	        },

	        data: function () {
	            return this._data;
	        },

	        select: function (options) {
	            var that = this;
	            var view = that.view();
	            var selection = that._selection;
	            var groups = view.groups;
	            var selectedGroups;

	            if (options === undefined) {
	                var selectedEvents;
	                var slots = view._selectedSlots;

	                if(!selection) {
	                    return [];
	                }

	                if (selection && selection.events) {
	                    selectedEvents = that._selectedEvents();
	                }

	                return {
	                    start: selection.start,
	                    end: selection.end,
	                    events: selectedEvents,
	                    slots: slots,
	                    resources: view._resourceBySlot(selection)
	                };
	            }

	            if (!options) {
	                that._selection = null;
	                that._old = null;
	                view.clearSelection();

	                return;
	            }

	            if (Array.isArray(options)) {
	                options = {
	                    events: options.splice(0)
	                };
	            }

	            if (options.resources) {
	                var fieldName;
	                var filters = [];
	                var groupsByResource = [];

	                if (view.groupedResources) {
	                    that._groupsByResource(view.groupedResources, 0, groupsByResource);
	                }

	                for (fieldName in options.resources) {
	                    filters.push({ field: fieldName, operator: "eq", value: options.resources[fieldName]});
	                }

	                selectedGroups = new kendo.data.Query(groupsByResource)
	                    .filter(filters)
	                    .toArray();
	            }

	            if (options.events && options.events.length) {
	                that._selectEvents(options.events, selectedGroups);
	                that._select();

	                return;
	            }

	            if (groups && (options.start && options.end)) {
	                var rangeStart = getDate(view._startDate);
	                var rangeEnd = kendo.date.addDays(getDate(view._endDate),1);
	                var group;
	                var ranges;

	                if (options.start < rangeEnd && rangeStart <= options.end) {
	                    if (selectedGroups && selectedGroups.length) {
	                        group = groups[selectedGroups[0].groupIndex];
	                    } else {
	                        group = groups[0];
	                    }

	                    if (!group.timeSlotCollectionCount()) {
	                        options.isAllDay = true;
	                    }

	                    ranges = group.ranges(options.start, options.end, options.isAllDay, false);

	                    if (ranges.length) {
	                        that._selection = {
	                            start: kendo.timezone.toLocalDate(ranges[0].start.start),
	                            end: kendo.timezone.toLocalDate(ranges[ranges.length-1].end.end),
	                            groupIndex: ranges[0].start.groupIndex,
	                            index: ranges[0].start.index,
	                            isAllDay: ranges[0].start.isDaySlot,
	                            events: []
	                        };

	                        that._select();
	                    }
	                }
	            }
	        },

	        _selectEvents: function (eventsUids, selectedGroups) {
	            var that = this;
	            var idx;
	            var view = that.view();
	            var groups = view.groups;
	            var eventsLength = eventsUids.length;
	            var isGrouped = selectedGroups && selectedGroups.length;
	            var ctrlKey = that._ctrlKey;

	            that._ctrlKey = true;

	            for (idx = 0; idx < eventsLength; idx++) {
	                if (groups && isGrouped) {
	                    var currentGroup = groups[selectedGroups[0].groupIndex];
	                    var events = [];
	                    var timeSlotCollectionCount = currentGroup.timeSlotCollectionCount();
	                    var daySlotCollectionCount = currentGroup.daySlotCollectionCount();

	                    for (var collIdx = 0; collIdx < timeSlotCollectionCount; collIdx++) {
	                        events = events.concat(currentGroup.getTimeSlotCollection(collIdx).events());
	                    }

	                    for (var dayCollIdx = 0; dayCollIdx < daySlotCollectionCount; dayCollIdx++) {
	                        events = events.concat(currentGroup.getDaySlotCollection(dayCollIdx).events());
	                    }

	                    events = new kendo.data.Query(events)
	                        .filter({field: "element[0].getAttribute('data-uid')", operator: "eq", value: eventsUids[idx]})
	                        .toArray();

	                    if (events[0]) {
	                        that._createSelection(events[0].element);
	                    }
	                } else {
	                    var element = view.element.find(kendo.format(".k-event[data-uid={0}], .k-task[data-uid={0}]", eventsUids[idx]));

	                    if (element.length) {
	                        that._createSelection(element[0]);
	                    }
	                }
	            }

	            that._ctrlKey = ctrlKey;
	        },

	        _touchHandlers: function() {
	            var that = this;
	            var startX;
	            var startY;
	            var endX;
	            var endY;
	            var timeStamp;
	            var wrapper = that.wrapper;
	            var touchMoveHandler = $.proxy(that._touchMove, that);

	            wrapper.on(TOUCHSTART + NS, ".k-scheduler-header-all-day td, .k-scheduler-content td, .k-event", function(e) {
	                var content = that.wrapper.find(".k-scheduler-content");

	                if (!that._isTouch(e)) {
	                    return;
	                }

	                content.stop(true, false);

	                that._touchPosX = startX = that._tapPosition(e, 'X');
	                that._touchPosY = startY = that._tapPosition(e, 'Y');
	                that._userTouched = true;
	                that.view()._scrolling = false;
	                timeStamp = Date.now();

	                wrapper.on(TOUCHMOVE + NS, ".k-scheduler-header-all-day td, .k-scheduler-content td, .k-event", touchMoveHandler);
	            });

	            wrapper.on(TOUCHEND + NS, ".k-scheduler-header-all-day td, .k-scheduler-content td, .k-event", function(e) {
	                if (!that._isTouch(e)) {
	                    return;
	                }

	                var delta = Date.now() - timeStamp;
	                var content = that.wrapper.find(".k-scheduler-content");
	                var amplitude = -that._amplitude * (3000 / delta);

	                endX = that._tapPosition(e, 'X');
	                endY = that._tapPosition(e, 'Y');

	                if (that._dragging) {
	                    return;
	                }

	                if (that.options.selectable && (Math.abs(endX - startX) <= 10 || Math.abs(endY - startY) <= 10)) {
	                    that._mouseDownSelection(e);
	                }

	                if (!kendo.support.kineticScrollNeeded && delta < 200 && Math.abs(endX - startX) > 10) {
	                    content.animate({
	                        scrollTop: content[0].scrollTop + amplitude
	                    });
	                }

	                wrapper.off(TOUCHMOVE + NS, ".k-scheduler-header-all-day td, .k-scheduler-content td", touchMoveHandler);
	            });
	        },

	        _selectable: function() {
	            var that = this;
	            var wrapper = that.wrapper;

	            if (!that.options.selectable) {
	                return;
	            }

	            that._tabindex();

	            wrapper.on(MOUSEDOWN + NS, ".k-scheduler-header-all-day td, .k-scheduler-content td, .k-event, .k-scheduler-body td .k-link", function (e) {
	                if (that._isTouch(e)) {
	                    return;
	                }
	                that._mouseDownSelection(e);
	            });

	            var mouseMoveHandler = $.proxy(that._mouseMove, that);

	            wrapper.on(MOUSEDOWN + NS, ".k-scheduler-header-all-day td, .k-scheduler-content td", function(e) {
	                var which = e.which;
	                var button = e.button;
	                var isRight = which && which === 3 || button && button == 2;

	                if (that._isTouch(e)) {
	                    return;
	                }

	                if (!isRight) {
	                    wrapper.on(MOUSEMOVE + NS, ".k-scheduler-header-all-day td, .k-scheduler-content td", mouseMoveHandler);
	                }
	            });

	            wrapper.on("mouseup" + NS + " mousecancel" + NS, function() {
	                wrapper.off(MOUSEMOVE + NS, ".k-scheduler-header-all-day td, .k-scheduler-content td", mouseMoveHandler);
	            });

	            wrapper.on("focus" + NS, function() {
	                if (!that._selection && !that._userTouched) {
	                    that._selectFirstSlot();
	                }

	                that._select();
	            });

	            wrapper.on("focusout" + NS, function(e) {
	                that._ctrlKey = that._shiftKey = false;

	                if (!$(e.relatedTarget).closest(VIEWSSELECTOR).length) {
	                    that.toolbar.find(VIEWSSELECTOR).removeClass(EXPANDEDSTATE);
	                }
	            });

	            wrapper.on("keydown" + NS, proxy(that._keydown, that));

	            wrapper.on("keyup" + NS, function(e) {
	                that._ctrlKey = e.ctrlKey;
	                that._shiftKey = e.shiftKey;
	            });
	        },

	        _mouseDownSelection: function(e) {
	            var which = e.which;
	            var button = e.button;
	            var isRight = which && which === 3 || button && button == 2;

	            if (!isRight) {
	                if( e.ctrlKey){
	                    this._ctrlKey = e.ctrlKey;
	                }

	                if(e.shiftKey){
	                    this._shiftKey = e.shiftKey;
	                }
	                this._createSelection(e.currentTarget);
	            }

	            if(kendo._activeElement() !== this.wrapper.get(0)){
	                kendo.focusElement(this.wrapper);
	            } else {
	                this._select();
	            }

	            if(this.toolbar){
	                this.toolbar.find("." + FOCUSEDSTATE).removeClass(FOCUSEDSTATE);
	            }
	        },

	        _selectFirstSlot: function() {
	            var firstSlot = this.wrapper.find(".k-scheduler-content").find("td").first() ||
	                this.wrapper.find(".k-scheduler-body").find(".k-link").first();

	            this._createSelection(firstSlot);
	        },

	        _select: function() {
	            var that = this;
	            var view = that.view();
	            var wrapper = that.wrapper;
	            var current = view.current();
	            var selection = that._selection;
	            var oldSelection = that._old ? that._old.selection : null;
	            var oldEventsLength = that._old ? that._old.eventsLength : null;
	            if (!selection) {
	                return;
	            }

	            if (current) {
	                current.removeAttribute("id");
	                current.removeAttribute("aria-label");
	                wrapper.removeAttr("aria-activedescendant");
	            }

	            view.select(selection);

	            current = view.current();
	            if (current && (oldSelection !== current || (selection.events && (oldEventsLength !== selection.events.length )))) {
	                var currentUid = $(current).data("uid");

	                if (that._old && currentUid &&
	                    currentUid === $(that._old.selection).data("uid") &&
	                    (selection.events && that._old.eventsLength === selection.events.length)) {
	                    return;
	                }

	                var labelFormat;
	                var data = selection;
	                var events = that._selectedEvents();
	                var slots = view._selectedSlots;

	                if (events[0]) {
	                    data = events[0] || selection;
	                    labelFormat = kendo.format(that.options.messages.ariaEventLabel, data.title, data.start, data.start);
	                } else {
	                    labelFormat = kendo.format(that.options.messages.ariaSlotLabel, data.start, data.end);
	                }

	                current.setAttribute("id", that._ariaId);
	                current.setAttribute("aria-label", labelFormat);
	                wrapper.attr("aria-activedescendant", that._ariaId);

	                that._old ={
	                    selection:current,
	                    eventsLength: events.length
	                };

	                that.trigger(CHANGE, {
	                    start: selection.start,
	                    end: selection.end,
	                    events: events,
	                    slots: slots,
	                    resources: view._resourceBySlot(selection)
	                });
	            }
	        },

	        _selectedEvents: function() {
	            var uids = this._selection.events;
	            var length = uids.length;
	            var idx = 0;
	            var event;

	            var events = [];

	            for (; idx < length; idx++) {
	                event = this.occurrenceByUid(uids[idx]);
	                if (event) {
	                    events.push(event);
	                }
	            }

	            return events;
	        },

	        _tapPosition: function (event, coordinate) {
	            return /touch/.test(event.type) ? (event.originalEvent || event).changedTouches[0]['page' + coordinate] : event['page' + coordinate];
	        },

	        _touchMove: function (e) {
	            var that = this;
	            var content = that.wrapper.find(".k-scheduler-content");
	            var verticalScroll = content[0].scrollHeight > content[0].clientHeight;
	            var horizontalScroll = content[0].scrollWidth > content[0].clientWidth;
	            var endY = that._tapPosition(e, 'Y');
	            var endX = that._tapPosition(e, 'X');
	            var scrollTop = content[0].scrollTop - Math.round(endY - that._touchPosY);
	            var scrollLeft = content[0].scrollLeft - Math.round(endX - that._touchPosX);
	            var applyVerticalScroll = verticalScroll && Math.abs(endY - that._touchPosY) > 10;
	            var applyhorizontalScroll = horizontalScroll && Math.abs(endY - that._touchPosY) > 10;


	            if (that._dragging || kendo.support.kineticScrollNeeded || !that._isTouch(e)) {
	                return;
	            }

	            if (applyVerticalScroll || applyhorizontalScroll) {
	                that._amplitude = Math.round(endY - that._touchPosY);
	                that._touchPosY = endY;
	                that._touchPosX = endX;
	                content.animate({
	                    scrollTop: scrollTop,
	                    scrollLeft: scrollLeft
	                }, 0);
	                that.view()._scrolling = true;
	            }
	        },

	        _mouseMove: function(e) {
	            var that = this;
	            clearTimeout(that._moveTimer);

	            if (that._isTouch(e)) {
	                return;
	            }

	            that._moveTimer = setTimeout(function() {
	                var view = that.view();
	                var selection = that._selection;

	                if (selection) {
	                    var slot = view.selectionByElement($(e.currentTarget));

	                    if (slot && selection.groupIndex === slot.groupIndex) {
	                        var startDate = slot.startDate();
	                        var endDate = slot.endDate();

	                        if (startDate >= selection.end) {
	                            selection.backward = false;
	                        } else if (endDate <= selection.start) {
	                            selection.backward = true;
	                        }

	                        if (selection.backward) {
	                            selection.start = startDate;
	                        } else {
	                            selection.end = endDate;
	                        }

	                        that._select();
	                    }
	                }
	            }, 5);
	        },

	        _viewByIndex: function(index) {
	            var view, views = this.views;

	            for (view in views) {
	                if (!index) {
	                    return view;
	                }

	                index--;
	            }
	        },

	        _keydown: function(e) {
	            var that = this,
	                key = e.keyCode,
	                view = that.view(),
	                editable = view.options.editable,
	                selection = that._selection,
	                prevSelection = $.extend(selection),
	                isModifier = key === 16 || key === 18 || key === 17 || key === 91 || key === 92,
	                focusableToolBarSelector = "> .k-button," +
	                                    ".k-scheduler-navigation > .k-button," +
	                                    ".k-nav-current," +
	                                    ".k-views-dropdown:visible," +
	                                    ".k-scheduler-views > .k-button",
	                focusableItems = that.toolbar.find(focusableToolBarSelector),
	                viewsWrapper = that.toolbar.find(VIEWSSELECTOR),
	                shouldNavigate = $(e.target).closest(VIEWSSELECTOR).length || that.toolbar.find('.k-scheduler-views .k-focus').length,
	                focusedViewIndex = viewsWrapper.children().index(that.toolbar.find("." + FOCUSEDSTATE)),
	                isRtl =  kendo.support.isRtl(that.element),
	                isViewsDropDown = $(e.target).is(".k-views-dropdown"),
	                direction = isRtl ? -1 : 1;

	            if (focusedViewIndex == -1) {
	                focusedViewIndex = viewsWrapper.children().index(that.toolbar.find(".k-selected"));
	            }

	            that._ctrlKey = e.ctrlKey;
	            that._shiftKey = e.shiftKey;

	            if (key === keys.F10) {
	                that._focusToolbar();
	                e.preventDefault();
	                return;
	            } else if (key === keys.TAB) {
	                if (that.toolbar.find("." + FOCUSEDSTATE).length) {
	                    var idx = focusableItems.index(that.toolbar.find("." + FOCUSEDSTATE));
	                    var itemToFocus = e.shiftKey ? focusableItems[idx -  1] : focusableItems[idx +  1];
	                    that.toolbar.find("." + FOCUSEDSTATE).removeClass(FOCUSEDSTATE);
	                    if (itemToFocus) {
	                        $(itemToFocus).addClass(FOCUSEDSTATE).trigger("focus");
	                        that._focusedView = null;
	                        e.preventDefault();
	                        return;
	                    } else {
	                        that.element.trigger("focus");
	                        e.preventDefault();
	                        return;
	                    }
	                }
	            } else if (key === keys.ENTER || key === keys.SPACEBAR) {
	                if (shouldNavigate && that._focusedView && !that._focusedView.hasClass("k-selected")) {
	                    var focusedViewName = that._focusedView.data().name;

	                    if (!that.trigger("navigate", { view: focusedViewName, action: "changeView", date: that.date() })) {
	                        that.view(focusedViewName);
	                    }
	                    e.preventDefault();
	                    return;
	                }

	                if (that.toolbar.find("." + FOCUSEDSTATE + ':visible').length) {
	                    that.toolbar.find("." + FOCUSEDSTATE + ':visible').click();
	                    e.preventDefault();
	                    return;
	                }
	            } else if (e.altKey && key === keys.DOWN  && !isViewsDropDown) {
	                if (that.toolbar.find("." + FOCUSEDSTATE + ':visible').length) {
	                    that.toolbar.find("." + FOCUSEDSTATE + ':visible').click();
	                    e.preventDefault();
	                    return;
	                }
	            } else if (key === keys.RIGHT && shouldNavigate) {
	                $(that.toolbar.find("." + FOCUSEDSTATE)).removeClass(FOCUSEDSTATE);
	                if (isRtl) {
	                    that._focusedView = focusedViewIndex - 1 === 0 ? $(viewsWrapper.children().last()) : $(viewsWrapper.children()[focusedViewIndex + (1 * direction)]);
	                } else {
	                    that._focusedView = focusedViewIndex + 1 === viewsWrapper.children().length ? $(viewsWrapper.children().first()) : $(viewsWrapper.children()[focusedViewIndex + (1 * direction)]);
	                }
	                that._focusedView.trigger("focus").addClass(FOCUSEDSTATE);
	                e.preventDefault();
	                return;
	            } else if (key === keys.LEFT && shouldNavigate) {
	                $(that.toolbar.find("." + FOCUSEDSTATE)).removeClass(FOCUSEDSTATE);
	                if (isRtl) {
	                    that._focusedView = focusedViewIndex + 1 === viewsWrapper.children().length ? $(viewsWrapper.children().first()) : $(viewsWrapper.children()[focusedViewIndex - (1 * direction)]);
	                } else {
	                    that._focusedView = focusedViewIndex - 1 < 0 ? $(viewsWrapper.children().last()) : $(viewsWrapper.children()[focusedViewIndex - (1 * direction)]);
	                }
	                that._focusedView.trigger("focus").addClass(FOCUSEDSTATE);
	                e.preventDefault();
	                return;
	            } else if (e.altKey && key === keys.DOWN && that.toolbar.find(".k-nav-current").hasClass(FOCUSEDSTATE)) {
	                that._showCalendar();
	                e.preventDefault();
	                return;
	            } else if (e.altKey && key === keys.DOWN && isViewsDropDown) {
	                return;
	            } else if (key === keys.ESC && that.popup && that.popup.visible()) {
	                that.popup.close();
	                e.preventDefault();
	                return;
	            }

	            if (isModifier) {
	                return;
	            }

	            if (!selection) {
	                that._selectFirstSlot();
	                that._select();
	                that.element.trigger("focus");

	                return;
	            }

	            if (that._selectedViewName === "year") {
	                if (view.move(selection, key)) {
	                    that.toolbar.find("." + FOCUSEDSTATE).removeClass(FOCUSEDSTATE);
	                    that._select();
	                }

	                if (selection) {
	                    that._adjustSelectedDate();
	                }

	                e.preventDefault();

	                return;
	            }

	            if (key === keys.TAB) {
	                if (view.moveToEvent(selection, e.shiftKey)) {
	                    that._select();

	                    // Focus the Scheduler element only if it not the currently focused element
	                    if(document.activeElement.getAttribute("id") !== that.element.attr("id")) {
	                        that.element.trigger("focus");
	                    }

	                    e.preventDefault();
	                } else {
	                    that._focusToolbar();
	                    e.preventDefault();
	                    return;
	                }
	            } else if (key === keys.ENTER || key === keys.SPACEBAR) {
	                if (selection.events.length && editable) {
	                    if (editable.update !== false) {
	                        that.editEvent(selection.events[0]);
	                    }
	                } else if (editable && editable.create !== false) {
	                    if (selection.isAllDay) {
	                        selection = $.extend({}, selection, {
	                            end: kendo.date.addDays(selection.end, -1)
	                        });
	                    }

	                    e.preventDefault();
	                    that.addEvent(extend({}, selection, view._resourceBySlot(selection)));
	                }
	            } else if (key === keys.DELETE && editable !== false && editable.destroy !== false) {
	                that.removeEvent(selection.events[0]);
	            } else if (key >= 49 && key <= 57) {
	                // switch to view 1-9
	                var viewByIndex = that._viewByIndex(key - 49);
	                if (viewByIndex && !that.trigger("navigate", { view: viewByIndex, action: "changeView", date: that.date() })) {
	                    that.view(viewByIndex);
	                }
	            } else if (view.move(selection, key, e.shiftKey)) {
	                if (view.inRange(selection)) {
	                    that._select();

	                    // prevents trapping focus in pseudo toolbar - remove when toolbar widget is integrated
	                    $(document.activeElement).trigger("blur");
	                    that.toolbar.find("." + FOCUSEDSTATE).removeClass(FOCUSEDSTATE);
	                    that.wrapper.trigger("focus");
	                } else {
	                    var action  = that.date().getTime() > selection.start.getTime() ? "previous": "next";
	                    if (!that.trigger("navigate", { view: that._selectedViewName, action: action, date: selection.start })) {
	                        that.date(selection.start);
	                    } else {
	                        selection.start = prevSelection.start;
	                        selection.end = prevSelection.end;
	                    }
	                }

	                e.preventDefault();
	            }

	            that._adjustSelectedDate();
	        },

	        _focusToolbar: function() {
	            this.toolbar.find(".k-button").first()
	                .trigger("focus")
	                .addClass(FOCUSEDSTATE);
	        },

	        _createSelection: function (item) {
	            var selection = this._selection;
	            var uid;
	            var slot;

	            item = $(item);

	            if (item.is(".k-event")) {
	                uid = item.attr(kendo.attr("uid"));

	                if (selection && selection.events.indexOf(uid) !== -1 && !this._ctrlKey) {
	                    return;
	                }
	            }

	            if (!selection || (!this._ctrlKey && !this._shiftKey)) {
	                selection = this._selection = {
	                    events: [],
	                    groupIndex: 0
	                };
	            }

	            slot = this.view().selectionByElement(item);

	            if (slot) {
	                selection.groupIndex = slot.groupIndex || 0;
	            }

	            if (uid) {
	                slot = getOccurrenceByUid(this._data, uid);
	            }

	            if (slot && slot.uid) {
	                uid = [slot.uid];
	            }

	            this._updateSelection(slot, uid);
	            this._adjustSelectedDate();
	        },

	        _updateSelection: function(dataItem, events, groupIndex) {
	            var selection = this._selection;

	            if (dataItem && selection) {
	                var view =  this.view();

	                if (dataItem.uid) {
	                    dataItem = view._updateEventForSelection(dataItem);
	                }

	                if (this._shiftKey && selection.start && selection.end) {
	                    var backward = dataItem.end < selection.end;

	                    selection.end = dataItem.endDate ? dataItem.endDate() : dataItem.end;

	                    if (backward && view._timeSlotInterval) {
	                        kendo.date.setTime(selection.end, -view._timeSlotInterval());
	                    }
	                } else {
	                    selection.start = dataItem.startDate ? dataItem.startDate() : dataItem.start;
	                    selection.end = dataItem.endDate ? dataItem.endDate() : dataItem.end;
	                }

	                if ("isDaySlot" in dataItem) {
	                    selection.isAllDay = dataItem.isDaySlot;
	                } else {
	                    selection.isAllDay = dataItem.isAllDay;
	                }

	                if (groupIndex !== null && groupIndex !== undefined) {
	                    selection.groupIndex = groupIndex;
	                }

	                selection.index = dataItem.index;
	                if (this._ctrlKey) {
	                    var indexOfEvent = (events && events.length) ? selection.events.indexOf(events[0]): -1;

	                    if(indexOfEvent > -1){
	                        selection.events.splice(indexOfEvent, 1);
	                    }else{
	                        selection.events = selection.events.concat(events || []);
	                    }
	                } else {
	                        selection.events = events || [];
	                }
	            }
	        },

	        options: {
	            name: "Scheduler",
	            date: TODAY,
	            editable: true,
	            autoBind: true,
	            snap: true,
	            mobile: false,
	            timezone: "",
	            allDaySlot: true,
	            min: new Date(1900, 0, 1),
	            max: new Date(2099, 11, 31),
	            toolbar: null,
	            workWeekStart: 1,
	            workWeekEnd: 5,
	            workDays: null,
	            showWorkHours: false,
	            startTime: TODAY,
	            endTime: TODAY,
	            currentTimeMarker: {
	                updateInterval: 10000,
	                useLocalTimezone: true
	            },
	            footer: {},
	            messages: {
	                today: "Today",
	                pdf: "Export to PDF",
	                save: "Save",
	                cancel: "Cancel",
	                destroy: "Delete",
	                resetSeries: "Reset Series",
	                deleteWindowTitle: "Delete event",
	                next: "Next",
	                previous: "Previous",
	                ariaSlotLabel: "Selected from {0:t} to {1:t}",
	                ariaEventLabel: "{0} on {1:D} at {2:t}",
	                search: "Search...",
	                views: {
	                    day: "Day",
	                    week: "Week",
	                    workWeek: "Work Week",
	                    agenda: "Agenda",
	                    month: "Month",
	                    timeline: "Timeline",
	                    timelineWeek: "Timeline Week",
	                    timelineWorkWeek: "Timeline Work Week",
	                    timelineMonth: "Timeline Month",
	                    year: "Year"
	                },
	                recurrenceMessages: {
	                    deleteWindowTitle: "Delete Recurring Item",
	                    resetSeriesWindowTitle: "Reset Series",
	                    deleteWindowOccurrence: "Delete current occurrence",
	                    deleteWindowSeries: "Delete the series",
	                    editWindowTitle: "Edit Recurring Item",
	                    editWindowOccurrence: "Edit current occurrence",
	                    editWindowSeries: "Edit the series"
	                },
	                editable: {
	                    confirmation: DELETECONFIRM
	                },
	                editor: {
	                    title: "Title",
	                    start: "Start",
	                    end: "End",
	                    allDayEvent: "All day event",
	                    description: "Description",
	                    repeat: "Repeat",
	                    timezone: "Timezone",
	                    startTimezone: "Start timezone",
	                    endTimezone: "End timezone",
	                    separateTimezones: "Use separate start and end time zones",
	                    timezoneEditorTitle: "Timezones",
	                    timezoneEditorButton: "Time zone",
	                    timezoneTitle: "Time zones",
	                    noTimezone: "No timezone",
	                    editorTitle: "Event"
	                }
	            },
	            height: null,
	            width: null,
	            resources: [],
	            group: {
	                resources: [],
	                orientation: "horizontal"
	            },
	            views: [],
	            selectable: false
	        },

	        events: [
	            REMOVE,
	            EDIT,
	            CANCEL,
	            SAVE,
	            "add",
	            "dataBinding",
	            "dataBound",
	            "moveStart",
	            "move",
	            "moveEnd",
	            "resizeStart",
	            "resize",
	            "resizeEnd",
	            "navigate",
	            CHANGE
	        ],

	        destroy: function() {
	            var that = this,
	                element;

	            Widget.fn.destroy.call(that);

	            if (that.dataSource) {
	                that.dataSource.unbind(CHANGE, that._refreshHandler);
	                that.dataSource.unbind(PROGRESS, that._progressHandler);
	                that.dataSource.unbind(ERROR, that._errorHandler);
	            }

	            if(that._resourceRefreshHandler) {
	                for (var idx = 0; idx < that.resources.length; idx++) {
	                    var resourceDS = that.resources[idx].dataSource;
	                    resourceDS.unbind(CHANGE, that._resourceRefreshHandler);
	                    resourceDS.unbind(PROGRESS, that._resourceProgressHandler);
	                    resourceDS.unbind(ERROR, that._resourceErrorHandler);
	                }
	            }

	            if (that.calendar) {
	                that.calendar.destroy();
	                that.popup.destroy();
	            }

	            if (that.view()) {
	                that.view().destroy();
	            }

	            if (that._editor) {
	                that._editor.destroy();
	            }

	            if (this._moveDraggable) {
	                this._moveDraggable.destroy();
	            }

	            if (this._resizeDraggable) {
	                this._resizeDraggable.destroy();
	            }

	            element = that.element
	                .add(that.wrapper)
	                .add(that.toolbar)
	                .add(that.popup);

	            element.off(NS);

	            clearTimeout(that._moveTimer);

	            that._model = null;
	            that.toolbar = null;
	            that.element = null;

	            $(window).off("resize" + NS, that._resizeHandler);

	            kendo.destroy(that.wrapper);
	        },

	        setDataSource: function(dataSource) {
	            this.options.dataSource = dataSource;

	            this._dataSource();

	            if (this.options.autoBind && dataSource.fetch) {
	                dataSource.fetch();
	            } else if (isArray(dataSource)) {
	                this.view(this._selectedView);
	            }
	        },

	        items: function() {
	            var content = this.wrapper.find(".k-scheduler-content");
	            var view = this.view();

	            if (view && view.options.name === "agenda") {
	                return content.find(".k-task");
	            } else {
	                return content.find(".k-event")
	                              .add(this.wrapper.find(".k-scheduler-header-wrap")
	                                       .find(".k-scheduler-header-all-day").siblings());
	            }
	        },

	        _movable: function() {
	            var startSlot;
	            var endSlot;
	            var startResources;
	            var startTime;
	            var endTime;
	            var event;
	            var clonedEvent;
	            var that = this;
	            var originSlot;
	            var originStartTime;
	            var originalEvent;
	            var distance = 0;
	            var clonedEvents = [];
	            var cachedEvents = [];

	            var isMobile = that._isMobile();
	            var movable = that.options.editable && that.options.editable.move !== false;
	            var resizable = that.options.editable && that.options.editable.resize !== false;

	            if (movable || (resizable && isMobile)) {
	                that._dragging = false;
	                if (isMobile && kendo.support.mobileOS.android) {
	                    distance = 5;
	                }

	                that._moveDraggable = new kendo.ui.Draggable(that.element, {
	                    distance: distance,
	                    filter: ".k-event",
	                    ignore: ".k-resize-handle",
	                    holdToDrag: isMobile,
	                    autoScroll: true
	                });

	                if (movable) {
	                    that._moveDraggable.bind("dragstart", function(e) {
	                        var view = that.view();
	                        var eventElement = e.currentTarget;
	                        var isTouch = that._isTouch(e);
	                        that._dragging = true;

	                        if (!view.options.editable || view.options.editable.move === false) {
	                            that._dragging = false;
	                            e.preventDefault();
	                            return;
	                        }

	                        if (isTouch && !eventElement.hasClass("k-event-active")) {
	                            that._dragging = false;
	                            that.element.find(".k-event-active").removeClass("k-event-active");
	                            e.preventDefault();
	                            return;
	                        }

	                        event = that.occurrenceByUid(eventElement.attr(kendo.attr("uid")));

	                        clonedEvent = event.clone();
	                        originalEvent = event.clone();

	                        clonedEvent.update(view._eventOptionsForMove(clonedEvent));

	                        clonedEvent.inverseColor = that._isInverseColor(eventElement);

	                        clonedEvents = [];
	                        if (that._selection) {
	                            var events = that._selection.events;

	                            for (var i = 0; i < events.length; i++) {
	                                var evtClone = that.occurrenceByUid(events[i]).clone();
	                                var evtCloneElement = this.element.find('div.k-event[data-uid="' + evtClone.uid + '"]').eq(0);

	                                evtClone.update(view._eventOptionsForMove(evtClone));

	                                if(evtCloneElement.length) {
	                                    evtClone.inverseColor = that._isInverseColor(evtCloneElement);
	                                }

	                                clonedEvents.push(evtClone);
	                            }
	                        } else {
	                            clonedEvents.push(clonedEvent);
	                        }

	                        startSlot = view._slotByPosition(e.x.startLocation, e.y.startLocation);
	                        startResources = view._resourceBySlot(startSlot);

	                        originStartTime = startTime = startSlot.startOffset(e.x.startLocation, e.y.startLocation, that.options.snap);

	                        endSlot = startSlot;

	                        originSlot = startSlot;

	                        if (!startSlot || that.trigger("moveStart", { event: event })) {
	                            e.preventDefault();
	                        }
	                    })
	                    .bind("drag", function(e) {
	                        var view = that.view();
	                        var slot = view._slotByPosition(e.x.location, e.y.location);
	                        var distance;
	                        var range;
	                        var i;

	                        if (!slot) {
	                            return;
	                        }

	                        endTime = slot.startOffset(e.x.location, e.y.location, that.options.snap);

	                        if (slot.isDaySlot !== startSlot.isDaySlot) {

	                            if (slot.isDaySlot !== originSlot.isDaySlot) {
	                                var slotIndex = $(startSlot.element).index();

	                                var targetSlotElement = $(slot.element).parent().children().eq(slotIndex);

	                                startSlot = view._slotByPosition(targetSlotElement.offset().left, targetSlotElement.offset().top);

	                                startTime = startSlot.startOffset(e.x.location, e.y.location, true);

	                                cachedEvents = clonedEvents.map(function(event) { return event.clone(); });

	                                for (i = 0; i < clonedEvents.length; i++) {
	                                    if (clonedEvents[i].isAllDay != slot.isDaySlot) {
	                                        clonedEvents[i].isAllDay = slot.isDaySlot;

	                                        clonedEvents[i].end = kendo.date.getDate(clonedEvents[i].start);
	                                        clonedEvents[i].start = kendo.date.getDate(clonedEvents[i].start);

	                                        if (!slot.isDaySlot) {
	                                            kendo.date.setTime(clonedEvents[i].start, kendo.date.getMilliseconds(view.startTime()));
	                                            kendo.date.setTime(clonedEvents[i].end, kendo.date.getMilliseconds(view.startTime()) + view._timeSlotInterval());
	                                        }
	                                    }
	                                }
	                            } else {
	                                startSlot = $.extend(true, { }, originSlot);
	                                startTime = originStartTime;

	                                clonedEvents = cachedEvents;
	                            }
	                        }

	                        distance = endTime - startTime;

	                        for (i = 0; i < clonedEvents.length; i++) {
	                            view._updateMoveHint(clonedEvents[i], slot.groupIndex, distance);
	                        }

	                        range = moveEventRange(clonedEvent, distance);

	                        if (!that.trigger("move", {
	                            event: event,
	                            slot: { element: slot.element, start: slot.startDate(), end: slot.endDate(), isDaySlot: slot.isDaySlot },
	                            resources: view._resourceBySlot(slot),
	                            start: range.start,
	                            end: range.end
	                        })) {
	                            endSlot = slot;
	                        } else {
	                            for (i = 0; i < clonedEvents.length; i++) {
	                                view._updateMoveHint(clonedEvents[i], slot.groupIndex, distance);
	                            }
	                        }
	                    })
	                    .bind("dragend", function(e) {
	                        that.view()._removeMoveHint();
	                        var distance = endTime - startTime;
	                        var range = moveEventRange(clonedEvent, distance);
	                        var start = range.start;
	                        var end = range.end;
	                        that._dragging = false;

	                        var endResources = that.view()._resourceBySlot(endSlot);

	                        var prevented = that.trigger("moveEnd", {
	                            event: event,
	                            slot: { element: endSlot.element, start: endSlot.startDate(), end: endSlot.endDate() },
	                            start: start,
	                            end: end,
	                            resources: endResources
	                        });

	                        if (!prevented && (event.start.getTime() !== start.getTime() ||
	                            event.end.getTime() !== end.getTime() ||
	                            originSlot.isDaySlot !== endSlot.isDaySlot ||
	                            kendo.stringify(endResources) !== kendo.stringify(startResources))) {

	                            that._isMultiDrag = clonedEvents.length > 1;

	                            for (var i = 0; i < clonedEvents.length; i++) {
	                                var evt = clonedEvents[i];

	                                range = moveEventRange(evt, distance);

	                                var updatedEventOptions = that.view()._eventOptionsForMove(evt);
	                                var eventOptions = $.extend(
	                                    {
	                                        isAllDay: evt.isAllDay,
	                                        start: range.start,
	                                        end: range.end
	                                    },
	                                    updatedEventOptions,
	                                    endResources
	                                );

	                                that._updateEvent(null, evt, eventOptions);
	                            }

	                            if (that._isMultiDrag) {
	                                that.dataSource.sync();
	                                that._isMultiDrag = false;
	                            }
	                        }

	                        e.currentTarget.removeClass("k-event-active");
	                        this.cancelHold();
	                        clonedEvents = [];
	                        cachedEvents = [];
	                    })
	                    .bind("dragcancel", function() {
	                        that.view()._removeMoveHint();
	                        this.cancelHold();
	                        clonedEvents = [];
	                        cachedEvents = [];
	                    });
	                }

	                that._moveDraggable.bind("hold", function(e) {
	                    if (that._isTouch(e)) {
	                        that.element.find(".k-event-active").removeClass("k-event-active");
	                        if (that.options.selectable) {
	                            that._createSelection(e.currentTarget);
	                        }
	                        e.currentTarget.addClass("k-event-active");
	                    }
	                });
	            }
	        },

	        _resizable: function() {
	            var startTime;
	            var endTime;
	            var event;
	            var clonedEvent;
	            var slot;
	            var that = this;
	            var distance = 0;

	            function direction(handle) {
	                var directions = {
	                    "k-resize-e": "east",
	                    "k-resize-w": "west",
	                    "k-resize-n": "north",
	                    "k-resize-s": "south"
	                };

	                for (var key in directions) {
	                    if (handle.hasClass(key)) {
	                        return directions[key];
	                    }
	                }
	            }

	            if (that._isMobile() && kendo.support.mobileOS.android) {
	                distance = 5;
	            }

	            that._resizeDraggable = new kendo.ui.Draggable(that.element, {
	                distance: distance,
	                filter: ".k-resize-handle",
	                autoScroll: true,
	                dragstart: function(e) {
	                    var dragHandle = $(e.currentTarget);

	                    var eventElement = dragHandle.closest(".k-event");

	                    var uid = eventElement.attr(kendo.attr("uid"));

	                    var view = that.view();

	                    that._dragging = true;
	                    event = that.occurrenceByUid(uid);

	                    clonedEvent = event.clone();

	                    view._updateEventForResize(clonedEvent);

	                    slot = view._slotByPosition(e.x.startLocation, e.y.startLocation);

	                    if (that.trigger("resizeStart", { event: event })) {
	                        e.preventDefault();
	                    }

	                    startTime = kendo.date.toUtcTime(clonedEvent.start);

	                    endTime = kendo.date.toUtcTime(clonedEvent.end);
	                },
	                drag: function(e) {
	                    if (!slot) {
	                        return;
	                    }

	                    var dragHandle = $(e.currentTarget);

	                    var dir = direction(dragHandle);

	                    var view = that.view();

	                    var currentSlot = view._slotByPosition(e.x.location, e.y.location);

	                    if (!currentSlot || slot.groupIndex != currentSlot.groupIndex) {
	                        return;
	                    }

	                    slot = currentSlot;

	                    var originalStart = startTime;

	                    var originalEnd = endTime;

	                    if (dir == "south") {
	                        if (!slot.isDaySlot && slot.end - kendo.date.toUtcTime(clonedEvent.start) >= view._timeSlotInterval()) {
	                            if (clonedEvent.isAllDay) {
	                                endTime = slot.startOffset(e.x.location, e.y.location, that.options.snap);
	                            } else {
	                                endTime = slot.endOffset(e.x.location, e.y.location, that.options.snap);
	                            }
	                        }
	                    } else if (dir == "north") {
	                        if (!slot.isDaySlot && kendo.date.toUtcTime(clonedEvent.end) - slot.start >= view._timeSlotInterval()) {
	                            startTime = slot.startOffset(e.x.location, e.y.location, that.options.snap);
	                        }
	                    } else if (dir == "east") {
	                        if (slot.isDaySlot && kendo.date.toUtcTime(kendo.date.getDate(slot.endDate())) >= kendo.date.toUtcTime(kendo.date.getDate(clonedEvent.start))) {
	                            if (clonedEvent.isAllDay) {
	                                endTime = slot.startOffset(e.x.location, e.y.location, that.options.snap);
	                            } else {
	                                endTime = slot.endOffset(e.x.location, e.y.location, that.options.snap);
	                            }
	                        } else if (!slot.isDaySlot && slot.end - kendo.date.toUtcTime(clonedEvent.start) >= view._timeSlotInterval()) {
	                            endTime = slot.endOffset(e.x.location, e.y.location, that.options.snap);
	                        }
	                    } else if (dir == "west") {
	                        if (slot.isDaySlot && kendo.date.toUtcTime(kendo.date.getDate(clonedEvent.end)) >= kendo.date.toUtcTime(kendo.date.getDate(slot.startDate()))) {
	                            startTime = slot.startOffset(e.x.location, e.y.location, that.options.snap);
	                        } else if (!slot.isDaySlot && kendo.date.toUtcTime(clonedEvent.end) - slot.start >= view._timeSlotInterval()) {
	                            startTime = slot.startOffset(e.x.location, e.y.location, that.options.snap);
	                        }
	                    }

	                    if (!that.trigger("resize", {
	                        event: event,
	                        slot: { element: slot.element, start: slot.startDate(), end: slot.endDate() },
	                        start: kendo.timezone.toLocalDate(startTime),
	                        end: kendo.timezone.toLocalDate(endTime),
	                        resources: view._resourceBySlot(slot)
	                    })) {
	                        view._updateResizeHint(clonedEvent, slot.groupIndex, startTime, endTime);
	                    } else {
	                        startTime = originalStart;
	                        endTime = originalEnd;
	                    }
	                },
	                dragend: function(e) {
	                    var dragHandle = $(e.currentTarget);
	                    var start = new Date(clonedEvent.start.getTime());
	                    var end = new Date(clonedEvent.end.getTime());
	                    var dir = direction(dragHandle);

	                    that._dragging = false;
	                    that.view()._removeResizeHint();

	                    if (dir == "south") {
	                        end = kendo.timezone.toLocalDate(endTime);
	                    } else if (dir == "north") {
	                        start = kendo.timezone.toLocalDate(startTime);
	                    } else if (dir == "east") {
	                        if (slot.isDaySlot) {
	                            end = kendo.date.getDate(kendo.timezone.toLocalDate(endTime));
	                        } else {
	                            end = kendo.timezone.toLocalDate(endTime);
	                        }
	                    } else if (dir == "west") {
	                        if (slot.isDaySlot) {
	                            start = new Date(kendo.timezone.toLocalDate(startTime));
	                            start.setHours(0);
	                            start.setMinutes(0);
	                        } else {
	                            start = kendo.timezone.toLocalDate(startTime);
	                        }
	                    }

	                    var prevented = that.trigger("resizeEnd", {
	                        event: event,
	                        slot: { element: slot.element, start: slot.startDate(), end: slot.endDate() },
	                        start: start,
	                        end: end,
	                        resources: that.view()._resourceBySlot(slot)
	                    });

	                    if (!prevented && end.getTime() >= start.getTime()) {
	                        if (clonedEvent.start.getTime() != start.getTime() || clonedEvent.end.getTime() != end.getTime()) {
	                            that.view()._updateEventForResize(event);
	                            that._updateEvent(dir, event, { start: start, end: end });
	                        }
	                    }

	                    slot = null;
	                    event = null;
	                },
	                dragcancel: function() {
	                    that._dragging = false;
	                    that.view()._removeResizeHint();

	                    slot = null;
	                    event = null;
	                }
	            });
	        },

	        _updateEvent: function(dir, event, eventInfo) {
	            var that = this;

	            var updateEvent = function(event, callback) {
	                var start;

	                try {
	                    that._preventRefresh = true;
	                    event.update(eventInfo);
	                    that._convertDates(event);
	                    start = event.start;

	                    if(dir && event.duration() % MS_PER_DAY === 0 && start.getHours() === 0 && start.getMinutes() === 0 && start.getSeconds() === 0 && start.getMilliseconds() === 0) {
	                        event.set("isAllDay", true);
	                    }
	                } finally {
	                    that._preventRefresh = false;
	                }

	                if (!that.trigger(SAVE, { event: event })) {
	                    if (callback) {
	                        callback();
	                    }

	                    if (!that._isMultiDrag) {
	                        that.dataSource.sync();
	                    }
	                }
	            };

	            var recurrenceHead = function(event) {
	                if (event.recurrenceRule) {
	                    return that.dataSource.getByUid(event.uid);
	                } else {
	                    return that.dataSource.get(event.recurrenceId);
	                }
	            };

	            var updateSeries = function() {
	                var head = recurrenceHead(event);

	                if (dir == "south" || dir == "north") {
	                    if (eventInfo.start) {
	                        var start = kendo.date.getDate(head.start);
	                        kendo.date.setTime(start, getMilliseconds(eventInfo.start));
	                        eventInfo.start = start;
	                    }
	                    if (eventInfo.end) {
	                        var end = kendo.date.getDate(head.end);
	                        kendo.date.setTime(end, getMilliseconds(eventInfo.end));
	                        eventInfo.end = end;
	                    }
	                }

	                that.dataSource._removeExceptions(head);

	                updateEvent(head);
	            };

	            var updateOccurrence = function() {
	                var head = recurrenceHead(event);
	                var eventUid;

	                var callback = function() {
	                    that._convertDates(head);

	                    if (that._selection) {
	                        that._selection.events.push(eventUid);
	                    }
	                };

	                var exception = head.toOccurrence({ start: event.start, end: event.end });

	                eventUid = exception.uid;

	                updateEvent(that.dataSource.add(exception), callback);
	            };

	            if (event.recurrenceRule || event.isOccurrence()) {
	                var recurrenceMessages = that.options.messages.recurrenceMessages;

	                that._showRecurringDialog(event, updateOccurrence, updateSeries,{
	                    title: recurrenceMessages.editWindowTitle,
	                    text: recurrenceMessages.editRecurring ? recurrenceMessages.editRecurring : EDITRECURRING,
	                    occurrenceText: recurrenceMessages.editWindowOccurrence,
	                    seriesText: recurrenceMessages.editWindowSeries
	                });
	            } else {
	                updateEvent(that.dataSource.getByUid(event.uid));
	            }
	        },

	        _modelForContainer: function(container) {
	            container = $(container).closest("[" + kendo.attr("uid") + "]");

	            return this.dataSource.getByUid(container.attr(kendo.attr("uid")));
	        },

	        showDialog: function(options) {
	            this._editor.showDialog(options);
	        },

	        focus: function() {
	            this.wrapper.trigger("focus");
	        },

	        _confirmation: function(callback, model, isResetSeries) {
	            var editable = this.options.editable;

	            if (editable === true || editable.confirmation !== false) {
	                var messages = this.options.messages;
	                var title = messages.deleteWindowTitle;
	                var text = typeof editable.confirmation === STRING ? editable.confirmation : messages.editable.confirmation;

	                if (this._isEditorOpened() && model.isRecurring()) {
	                    var recurrenceMessages = this.options.messages.recurrenceMessages;
	                    title = recurrenceMessages.deleteWindowTitle;

	                    if (model.isException() || model.isNew()) {
	                        text = recurrenceMessages.deleteRecurringConfirmation ? recurrenceMessages.deleteRecurringConfirmation : DELETERECURRINGCONFIRM;
	                    } else {
	                        text = recurrenceMessages.deleteSeriesConfirmation ? recurrenceMessages.deleteSeriesConfirmation : DELETESERIESCONFIRM;
	                    }

	                    if(isResetSeries) {
	                        title = recurrenceMessages.resetSeriesWindowTitle;
	                        text = recurrenceMessages.resetSeriesConfirmation ? recurrenceMessages.resetSeriesConfirmation : RESETSERIESCONFIRM;
	                    }
	                }

	                var buttons = [
	                    { name: "destroy", text: isResetSeries ? messages.resetSeries : messages.destroy, click: function() { callback(); } }
	                ];

	                if (!(this._isMobile() && kendo.Pane)) {
	                    buttons.push({ name: "canceledit", text: messages.cancel, click: function() { callback(true); } });
	                }

	                this._unbindResize();

	                this.showDialog({
	                    model: model,
	                    text: text,
	                    title: title,
	                    buttons: buttons
	                });

	                this._bindResize();
	            } else {
	                callback();
	            }
	        },

	        addEvent: function(eventInfo) {
	            var editable = this._editor.editable;
	            var dataSource = this.dataSource;
	            var event;

	            eventInfo = eventInfo || {};

	            var prevented = this.trigger("add", { event:  eventInfo });

	            if (!prevented && ((editable && editable.end()) || !editable)) {
	                this.cancelEvent();

	                if (eventInfo && eventInfo.toJSON) {
	                    eventInfo = eventInfo.toJSON();
	                }

	                event = dataSource.add(eventInfo);

	                if (event) {
	                    this.cancelEvent();
	                    this._editEvent(event);
	                }
	            }
	       },

	       saveEvent: function() {
	            var that = this;
	            var editor = that._editor;
	            var dataSource = that.dataSource;

	            if (!editor) {
	                return;
	            }

	            var editable = editor.editable;
	            var container = editor.container;
	            var model = that._modelForContainer(container);
	            var events, i, event;

	            if (container && editable && editable.end() &&
	                !that.trigger(SAVE, { container: container, event: model } )) {

	                if(!model.isOccurrence() && !!model.recurrenceException && !model.recurrenceRule) {
	                    events = dataSource.data();

	                    for(i = events.length - 1; i >= 0; i -= 1) {
	                        event = events[i];
	                        if(event && event.recurrenceId === model.id) {
	                            dataSource.remove(event);
	                        }
	                    }

	                    model.set("recurrenceException", "");
	                }

	                if (!model.dirty && !model.isOccurrence()) {
	                    that._convertDates(model, "remove");
	                }

	                dataSource.sync();
	            }
	        },

	        cancelEvent: function() {
	            var editor = this._editor;
	            var container = editor.container;
	            var model;

	            if (container) {
	                model = this._modelForContainer(container);

	                if (model && model.isOccurrence()) {
	                    this._convertDates(model, "remove");
	                    this._convertDates(this.dataSource.get(model.recurrenceId), "remove");
	                }

	                this.dataSource.cancelChanges(model);

	                //TODO: handle the cancel in UI

	                editor.close();
	            }
	        },

	        editEvent: function(uid) {
	            var model = typeof uid == "string" ? this.occurrenceByUid(uid) : uid;

	            if (!model) {
	                return;
	            }

	            this.cancelEvent();

	            if (model.isRecurring()) {
	                this._editRecurringDialog(model);
	            } else {
	                this._editEvent(model);
	            }
	        },

	        _editEvent: function(model) {
	            this._preventRefresh = true;
	            this._unbindResize();

	            this._createPopupEditor(model);

	            this._bindResize();
	        },

	        _editRecurringDialog: function(model) {
	            var that = this;

	            var editOccurrence = function() {
	                if (model.isException()) {
	                    that._editEvent(model);
	                } else {
	                    that.addEvent(model);
	                }
	            };

	            var editSeries = function() {
	                if (model.recurrenceId) {
	                    model = that.dataSource.get(model.recurrenceId);
	                }

	                that._editEvent(model);
	            };

	            var recurrenceMessages = that.options.messages.recurrenceMessages;
	            that._showRecurringDialog(model, editOccurrence, editSeries, {
	                title: recurrenceMessages.editWindowTitle,
	                text: recurrenceMessages.editRecurring ? recurrenceMessages.editRecurring : EDITRECURRING,
	                occurrenceText: recurrenceMessages.editWindowOccurrence,
	                seriesText: recurrenceMessages.editWindowSeries
	            });
	         },

	         _showRecurringDialog: function(model, editOccurrence, editSeries, messages) {
	             var editable = this.options.editable;
	             var editRecurringMode = isPlainObject(editable) ? editable.editRecurringMode : "dialog";

	             if (editRecurringMode ===  "occurrence" || this._isMultiDrag) {
	                 editOccurrence();
	             } else if (editRecurringMode === "series") {
	                 editSeries();
	             } else {
	                 this._unbindResize();

	                 this.showDialog({
	                     model: model,
	                     title: messages.title,
	                     text: messages.text,
	                     buttons: [
	                         { text: messages.occurrenceText, click: editOccurrence },
	                         { text: messages.seriesText, click: editSeries }
	                     ]
	                 });

	                 this._bindResize();
	             }
	        },

	        _createButton: function(command) {
	            var template = command.template || COMMANDBUTTONTMPL,
	                commandName = typeof command === STRING ? command : command.name || command.text,
	                options = { className: "k-scheduler-" + (commandName || "").replace(/\s/g, ""), text: commandName, attr: "" };

	            if (!commandName && !(isPlainObject(command) && command.template))  {
	                throw new Error("Custom commands should have name specified");
	            }

	            if (isPlainObject(command)) {
	                if (command.className) {
	                    command.className += " " + options.className;
	                }

	                if (commandName === "edit" && isPlainObject(command.text)) {
	                    command = extend(true, {}, command);
	                    command.text = command.text.edit;
	                }

	                options = extend(true, options, defaultCommands[commandName], command);
	            } else {
	                options = extend(true, options, defaultCommands[commandName]);
	            }

	            if(!options.className) {
	                options.className = "k-button-solid-base";
	            } else if (options.className.indexOf("k-button-solid-primary") === -1) {
	                options.className += " k-button-solid-base";
	            }

	            return kendo.template(template)(options);
	        },

	        _convertDates: function(model, method) {
	            var timezone = this.dataSource.reader.timezone;
	            var startTimezone = model.startTimezone;
	            var endTimezone = model.endTimezone;
	            var start = model.start;
	            var end = model.start;

	            method = method || "apply";
	            startTimezone = startTimezone || endTimezone;
	            endTimezone = endTimezone || startTimezone;

	            if (startTimezone) {
	                if (timezone) {
	                    if (method === "apply") {
	                        start = kendo.timezone.convert(model.start, timezone, startTimezone);
	                        end = kendo.timezone.convert(model.end, timezone, endTimezone);
	                    } else {
	                        start = kendo.timezone.convert(model.start, startTimezone, timezone);
	                        end = kendo.timezone.convert(model.end, endTimezone, timezone);
	                    }
	                } else {
	                    start = kendo.timezone[method](model.start, startTimezone);
	                    end = kendo.timezone[method](model.end, endTimezone);
	                }

	                model._set("start", start);
	                model._set("end", end);
	            }
	        },

	        _createEditor: function() {
	            var that = this;

	            var editor;

	            if (this._isMobile() && kendo.Pane) {
	                editor = that._editor = new MobileEditor(this.wrapper, extend({}, this.options, {
	                    target: this,
	                    timezone: that.dataSource.reader.timezone,
	                    resources: that.resources,
	                    createButton: proxy(this._createButton, this)
	                }));
	            } else {
	                editor = that._editor = new PopupEditor(this.wrapper, extend({}, this.options, {
	                    target: this,
	                    createButton: proxy(this._createButton, this),
	                    timezone: that.dataSource.reader.timezone,
	                    resources: that.resources
	                }));
	            }

	            editor.bind("cancel", function(e) {
	                if (that.trigger("cancel", { container: e.container, event: e.model })) {
	                    e.preventDefault();
	                    return;
	                }
	                that._preventRefresh = false;
	                that.cancelEvent();

	                if(that._attemptRefresh) {
	                    that.refresh();
	                }

	                that.focus();
	            });

	            editor.bind("edit", function(e) {
	                if (that.trigger(EDIT, { container: e.container, event: e.model })) {
	                    e.preventDefault();
	                }
	            });

	            editor.bind("save", function() {
	                that._preventRefresh = false;
	                that.saveEvent();
	            });

	            editor.bind("remove", function(e) {
	                that._preventRefresh = false;
	                that.removeEvent(e.model);
	            });

	            editor.bind("resetSeries", function(e) {
	                that._confirmation(function(cancel) {
	                    that._preventRefresh = false;
	                    if (!cancel) {
	                        that.dataSource._removeExceptions(e.model);
	                        that.saveEvent();
	                    }
	                }, e.model, true);
	            });
	        },

	        _createPopupEditor: function(model) {
	            var editor = this._editor;

	            if (!model.isNew() || model.isOccurrence()) {
	                if (model.isOccurrence()) {
	                    this._convertDates(model.recurrenceId ? this.dataSource.get(model.recurrenceId) : model);
	                }
	                this._convertDates(model);
	            }

	            this.editable = editor.editEvent(model);
	        },

	        removeEvent: function(uid) {
	            var that = this,
	                model = typeof uid == "string" ? that.occurrenceByUid(uid) : uid;

	            if (!model) {
	                return;
	            }

	            if (model.isRecurring()) {
	                that._deleteRecurringDialog(model);
	            } else {
	                that._confirmation(function(cancel) {
	                    if (!cancel) {
	                        that._removeEvent(model);
	                    }
	                }, model);
	            }
	        },

	        occurrenceByUid: function(uid) {
	            var occurrence = this.dataSource.getByUid(uid);
	            if (!occurrence) {
	                occurrence = getOccurrenceByUid(this._data, uid);
	            }

	            return occurrence;
	        },

	        occurrencesInRange: function(start, end) {
	            return new kendo.data.Query(this._data).filter({
	                logic: "or",
	                filters: [
	                    {
	                        logic: "and",
	                        filters: [
	                            { field: "start", operator: "gte", value: start },
	                            { field: "end", operator: "gte", value: start },
	                            { field: "start", operator: "lt", value: end }
	                        ]
	                    },
	                    {
	                        logic: "and",
	                        filters: [
	                            { field: "start", operator: "lte", value: start },
	                            { field: "end", operator: "gt", value: start }
	                        ]
	                    }
	                ]
	            }).toArray();
	        },

	        _removeEvent: function(model) {
	            if (!this.trigger(REMOVE, { event: model })) {
	                if (this.dataSource.remove(model)) {
	                    this.dataSource.sync();
	                }
	            }
	        },

	        _deleteRecurringDialog: function(model) {
	            var that = this;
	            var currentModel = model;
	            var editable = that.options.editable;
	            var deleteOccurrence;
	            var deleteSeries;
	            var createException;
	            var deleteOccurrenceConfirmation;
	            var deleteSeriesConfirmation;
	            var createExceptionConfirmation;
	            var editRecurringMode = isPlainObject(editable) ? editable.editRecurringMode : "dialog";

	            deleteOccurrence = function() {
	                var occurrence = currentModel.recurrenceId ? currentModel : currentModel.toOccurrence();
	                var head = that.dataSource.get(occurrence.recurrenceId);

	                that._convertDates(head);
	                that._removeEvent(occurrence);
	            };

	            deleteSeries = function() {
	                if (currentModel.recurrenceId) {
	                    currentModel = that.dataSource.get(currentModel.recurrenceId);
	                }

	                that._removeEvent(currentModel);
	            };

	            createException = function() {
	                that.dataSource.remove(currentModel);
	                that.dataSource.sync();
	            };

	            if (editRecurringMode != "dialog" || that._isEditorOpened()) {
	                deleteOccurrenceConfirmation = function() {
	                    that._confirmation(function(cancel) {
	                        if (!cancel) {
	                            deleteOccurrence();
	                        }
	                    }, currentModel);
	                };

	                deleteSeriesConfirmation = function() {
	                    that._confirmation(function(cancel) {
	                        if (!cancel) {
	                            deleteSeries();
	                        }
	                    }, currentModel);
	                };

	                createExceptionConfirmation = function() {
	                    that._confirmation(function(cancel) {
	                        if (!cancel) {
	                            createException();
	                        }
	                    }, currentModel);
	                };
	            }

	            var seriesCallback = deleteSeriesConfirmation || deleteSeries;
	            var occurrenceCallback = deleteOccurrenceConfirmation || deleteOccurrence;
	            var exeptionCallback = createExceptionConfirmation || createException;

	            if (that._isEditorOpened()) {
	                if (model.isException()) {
	                    occurrenceCallback();
	                } else if (model.isNew()) {
	                    exeptionCallback();
	                } else {
	                    seriesCallback();
	                }
	            } else {
	                var recurrenceMessages = that.options.messages.recurrenceMessages;
	                that._showRecurringDialog(model, occurrenceCallback, seriesCallback, {
	                    title: recurrenceMessages.deleteWindowTitle,
	                    text: recurrenceMessages.deleteRecurring ? recurrenceMessages.deleteRecurring : DELETERECURRING,
	                    occurrenceText: recurrenceMessages.deleteWindowOccurrence,
	                    seriesText: recurrenceMessages.deleteWindowSeries
	                });
	            }
	        },

	        _isEditorOpened: function() {
	            return !!this._editor.container;
	        },

	        _unbindView: function(view) {
	            var that = this;
	            that.angular("cleanup", function(){
	                return { elements: that.items() };
	            });

	            view.destroy();
	        },

	        _bindView: function(view) {
	            var that = this;

	            if (that.options.editable) {
	                if (that._viewRemoveHandler) {
	                    view.unbind(REMOVE, that._viewRemoveHandler);
	                }

	                that._viewRemoveHandler = function(e) {
	                    that.removeEvent(e.uid);
	                };

	                view.bind(REMOVE, that._viewRemoveHandler);

	                if (that._viewAddHandler) {
	                    view.unbind(ADD, that._viewAddHandler);
	                }

	                that._viewAddHandler = function(e) {
	                    that.addEvent(e.eventInfo);
	                };

	                view.bind(ADD, this._viewAddHandler);

	                if (that._viewEditHandler) {
	                    view.unbind(EDIT, that._viewEditHandler);
	                }

	                that._viewEditHandler = function(e) {
	                    that.editEvent(e.uid);
	                };

	                view.bind(EDIT, this._viewEditHandler);
	            }

	            if (that._viewNavigateHandler) {
	                view.unbind("navigate", that._viewNavigateHandler);
	            }

	            that._viewNavigateHandler = function(e) {
	                if (e.action) {
	                    if (!that.trigger("navigate", { view: e.view, isWorkDay: e.isWorkDay, action: e.action, date: e.date })) {
	                        that.date(e.date);
	                    }
	                } else if (e.view) {
	                    var switchWorkDay = "isWorkDay" in e;
	                    var action = switchWorkDay ? "changeWorkDay" : "changeView";

	                    if (!that.trigger("navigate", { view: e.view, isWorkDay: e.isWorkDay, action: action, date: e.date })) {
	                        if (switchWorkDay) {
	                            that._workDayMode = e.isWorkDay;
	                        }

	                        that._selectView(e.view);
	                        that.date(e.date);
	                    }
	                }
	            };

	            view.bind("navigate", that._viewNavigateHandler);

	            if (that._viewActivateHandler) {
	                view.unbind("activate", that._viewActivateHandler);
	            }

	            that._viewActivateHandler = function() {
	                var view = this;
	                if (that._selection) {
	                    view.constrainSelection(that._selection);

	                    that._select();

	                    that._adjustSelectedDate();
	                }
	            };

	            view.bind("activate", that._viewActivateHandler);
	        },

	        _selectView: function(name) {
	            var that = this;

	            if (name && that.views[name]) {

	                if (that._selectedView) {
	                    that._unbindView(that._selectedView);
	                }

	                that._selectedView = that._renderView(name);
	                that._selectedViewName = name;

	                if (that._viewsCount > 1 && !that._isMobile()) {
	                    var viewsDropdown = that.toolbar.find(".k-views-dropdown");
	                    var viewButtons = that.toolbar.find(".k-scheduler-views > .k-button");

	                    if ( that.toolbar.find(".k-views-dropdown").length === 0 ) {
	                        that.toolbar.find(".k-scheduler-views-wrapper").prepend(VIEWS_DROPDOWN_TEMPLATE({views: that.views, view: name, ns: kendo.ns}));
	                        viewsDropdown = that.toolbar.find(".k-views-dropdown");
	                    }

	                    viewsDropdown.val(name);

	                    viewButtons.removeClass("k-selected");
	                    viewButtons.filter(".k-view-" + name.replace(/\./g, "\\.").toLowerCase()).addClass("k-selected");
	                } else {
	                    var viewSelect =  that.toolbar.find(".k-scheduler-mobile-views");

	                    viewSelect.find("[value=" + name.replace(/\./g, "\\.") + "]")
	                        .prop("selected", "selected");
	                }
	            }
	        },

	        view: function(name) {
	            var that = this;

	            if (name) {
	                that._selectView(name);
	                that.rebind();

	                return;
	            }

	            return that._selectedView;
	        },

	        viewName: function() {
	            return this.view().name;
	        },

	        _renderView: function(name) {
	            var view = this._initializeView(name);

	            this._bindView(view);

	            if (kendo.support.mouseAndTouchPresent || kendo.support.pointers) {
	                view.content.css("-ms-touch-action", "pinch-zoom");
	                view.content.css("touch-action", "pinch-zoom");
	            }

	            this._model.set("formattedDate", view.dateForTitle());
	            this._model.set("formattedShortDate", view.shortDateForTitle());
	            this._model.set("formattedMobileDate", view.mobileDateForTitle ? view.mobileDateForTitle() : view.shortDateForTitle());
	            this._model.set("formattedYear", kendo.format("{0:yyyy}", view.startDate()));

	            return view;
	        },

	        resize: function(force) {
	            var size = this.getSize();
	            var currentSize = this._size;
	            var view = this.view();

	            if (!view || !view.groups) {
	                return;
	            }

	            if (force || !currentSize || size.width !== currentSize.width || size.height !== currentSize.height) {
	                this.refresh({ action: "resize" });
	                this._size = size;
	            }
	        },

	        _adjustSelectedDate: function() {
	            var date = this._model.selectedDate,
	                selection = this._selection,
	                start = selection.start;

	            if (start && !kendo.date.isInDateRange(date, getDate(start), getDate(selection.end))) {
	                date.setFullYear(start.getFullYear(), start.getMonth(), start.getDate());
	            }
	        },

	        _initializeView: function(name) {
	            var view = this.views[name];

	            if (view) {
	                var isSettings = isPlainObject(view),
	                    overrideOptions = {},
	                    type = view.type;

	                if (typeof type === STRING) {
	                    type = kendo.getter(view.type)(window);
	                }

	                if(isSettings && view.workDays && view.workDays.length) {
	                    overrideOptions.workDays = view.workDays;
	                }

	                if (type) {
	                    view = new type(this.wrapper, trimOptions(extend(true, {}, this.options, isSettings ? view : {}, {
	                        resources: this.resources,
	                        date: this.date(),
	                        startTime: kendo.parseDate(view.startTime) || kendo.parseDate(this.options.startTime),
	                        endTime: kendo.parseDate(view.endTime) || kendo.parseDate(this.options.endTime),
	                        showWorkHours: this._workDayMode
	                    }),overrideOptions));

	                } else {
	                    throw new Error("There is no such view");
	                }
	            }

	            return view;
	        },

	        _views: function() {
	            var views = this.options.views;
	            var view;
	            var defaultView;
	            var selected;
	            var isSettings;
	            var name;
	            var type;
	            var idx;
	            var length;

	            this.views = {};
	            this._viewsCount = 0;

	            for (idx = 0, length = views.length; idx < length; idx++) {
	                var hasType = false;

	                view = views[idx];

	                isSettings = isPlainObject(view);

	                if (isSettings) {
	                    type = name = view.type ? view.type : view;
	                    if (typeof type !== STRING) {
	                        name = view.name || view.title;
	                        hasType = true;
	                    }
	                } else {
	                    type = name = view;
	                }

	                defaultView = defaultViews[name];

	                if (defaultView && !hasType) {

	                    view.type = defaultView.type;
	                    defaultView.title = this.options.messages.views[name];
	                    if (defaultView.type === "day") {
	                        defaultView.messages = { allDay: this.options.messages.allDay };
	                    } else if (defaultView.type === "agenda") {
	                        defaultView.messages = {
	                            event: this.options.messages.event,
	                            date: this.options.messages.date,
	                            time: this.options.messages.time
	                        };
	                    }
	                }

	                view = extend({ title: name }, defaultView, isSettings ? view : {});

	                if (name) {
	                    this.views[name] = view;
	                    this._viewsCount++;

	                    if (!selected || view.selected) {
	                        selected = name;
	                    }
	                }
	            }

	            if (selected) {
	                this._selectedViewName = selected; // toolbar is not rendered yet
	            }
	        },

	        rebind: function() {
	            var that = this,
	                resources = that.resources,
	                resourceFetchArray = [];

	            if(that._preventRebind) {
	                that._preventRebind = false;
	                return;
	            }

	            if(that.options.autoBind === false && resources && resources.length > 0) {
	                resources.forEach(function(resource) {
	                    if(resource.dataSource.data().length === 0) {
	                        that._preventRebind = true;
	                        resourceFetchArray.push(resource.dataSource.fetch());
	                    }
	                });

	                $.when.apply(null, resourceFetchArray).then(function() {
	                    that.dataSource.fetch();
	                    that._preventRebind = false;
	                });
	            } else {
	                that.dataSource.fetch();
	            }
	        },

	        _dataSource: function() {
	            var that = this,
	                options = that.options,
	                dataSource = options.dataSource;

	            dataSource = isArray(dataSource) ? { data: dataSource } : dataSource;

	            if (options.timezone && !(dataSource instanceof SchedulerDataSource)) {
	                dataSource = extend(true, dataSource, { schema: { timezone: options.timezone } });
	            } else if(dataSource instanceof SchedulerDataSource) {
	                options.timezone = dataSource.options.schema ? dataSource.options.schema.timezone : "";
	            }

	            if (that.dataSource && that._refreshHandler) {
	                that.dataSource
	                    .unbind(CHANGE, that._refreshHandler)
	                    .unbind(PROGRESS, that._progressHandler)
	                    .unbind(ERROR, that._errorHandler);
	            } else {
	                that._refreshHandler = proxy(that.refresh, that);
	                that._progressHandler = proxy(that._requestStart, that);
	                that._errorHandler = proxy(that._error, that);
	            }

	            that.dataSource = kendo.data.SchedulerDataSource.create(dataSource)
	                .bind(CHANGE, that._refreshHandler)
	                .bind(PROGRESS, that._progressHandler)
	                .bind(ERROR, that._errorHandler);

	            that.options.dataSource = that.dataSource;
	        },


	        _error: function() {
	            this._progress(false);
	        },

	        _requestStart: function() {
	            this._progress(true);
	        },

	        _progress: function(toggle) {
	            var element = this.element.find(".k-scheduler-content");
	            kendo.ui.progress(element, toggle);
	        },

	        _resources: function() {
	            var that = this;
	            var resources = that.options.resources;
	            var resourcePromises = [];

	            for (var idx = 0; idx < resources.length; idx++) {
	                var resource = resources[idx];
	                var field = resource.field;
	                var name = resource.name || field;
	                var dataSource = resource.dataSource;

	                if (!field || !dataSource) {
	                    throw new Error('The "field" and "dataSource" options of the scheduler resource are mandatory.');
	                }

	                that.resources.push({
	                    field: field,
	                    name: name,
	                    title: resource.title || field,
	                    dataTextField: resource.dataTextField || "text",
	                    dataValueField: resource.dataValueField || "value",
	                    dataColorField: resource.dataColorField || "color",
	                    dataParentValueField: resource.dataParentValueField || "parentValue",
	                    valuePrimitive: resource.valuePrimitive != null ? resource.valuePrimitive : true,
	                    multiple: resource.multiple || false,
	                    dataSource: that._resourceDataSource(dataSource, name, resourcePromises)
	                });
	            }

	            if (!that.options.autoBind) {
	                that._selectView(that._selectedViewName);
	            } else {
	                $.when.apply(null, resourcePromises)
	                      .then(function () {
	                            that.view(that._selectedViewName);
	                        });
	            }
	        },

	        _resourceDataSource: function(resourceDS, groupName, promises) {
	            var that = this;
	            var dataSource = isArray(resourceDS) ? { data: resourceDS } : resourceDS;
	            var dataSourceInstance = kendo.data.DataSource.create(dataSource);

	            if (that.options.autoBind) {
	                promises.push(dataSourceInstance.fetch(function(){
	                    // 'this' is the DataSource instance not the Scheduler
	                    that._bindResourceEvents(this, groupName);
	                }));
	            } else {
	                that._bindResourceEvents(dataSourceInstance, groupName);
	            }

	            return dataSourceInstance;
	        },

	        _bindResourceEvents: function(resourceDS, groupName){
	            var that = this;
	            var isGrouped = that.options.group && that.options.group.resources.length;
	            var isResourceGrouped = isGrouped && that.options.group.resources.indexOf(groupName) > -1;

	            if (!that._resourceRefreshHandler && isResourceGrouped){
	                that._resourceRefreshHandler = proxy(that._refreshResource, that);
	                that._resourceErrorHandler = proxy(that._error, that);
	            }

	            if(isResourceGrouped) {
	                resourceDS.bind(CHANGE, that._resourceRefreshHandler)
	                    .bind(ERROR, that._resourceErrorHandler);
	            }
	        },

	        _refreshResource: function() {
	            var that = this;
	            var preventRefresh = (that._editor && that._editor.editable) || that._preventRefresh;

	            if(!preventRefresh){
	                that.view(that._selectedViewName);
	            }
	        },

	        _initModel: function() {
	            var that = this;
	            that._model = kendo.observable({
	               selectedDate: new Date(this.options.date),
	               formattedDate: "",
	               formattedShortDate: ""
	           });

	           that._model.bind(CHANGE, function(e) {
	                if (e.field === "selectedDate") {
	                    that.view(that._selectedViewName);
	                }
	           });
	        },

	        _wrapper: function() {
	            var that = this;
	            var options = that.options;
	            var height = options.height;
	            var width = options.width;

	            that.wrapper = that.element
	                               .addClass("k-widget k-scheduler k-floatwrap")
	                               .attr("role", "grid")
	                               .attr("aria-multiselectable", true);

	            if (that._isMobile()) {
	               that.wrapper.addClass("k-scheduler-mobile");
	            }

	            if (height) {
	                that.wrapper.height(height);
	            }

	            if (width) {
	                that.wrapper.width(width);
	            }
	        },

	        date: function(value) {
	            if (value != null && getDate(value) >= getDate(this.options.min) && getDate(value) <= getDate(this.options.max)) {
	                this._model.set("selectedDate", value);
	            }
	            return getDate(this._model.get("selectedDate"));
	        },

	        _toolbar: function() {
	            var that = this;
	            var options = that.options;
	            var commands = [];

	            if (options.toolbar) {
	                commands = Array.isArray(options.toolbar) ? options.toolbar : [options.toolbar];
	            }

	            var template = this._isMobile() ? MOBILETOOLBARTEMPLATE : TOOLBARTEMPLATE;

	            var toolbar = $(template({
	                    messages: options.messages,
	                    pdf: $.grep(commands, function(item) {
	                            return item == "pdf" || item.name == "pdf";
	                        }).length > 0,
	                    search: $.grep(commands, function(item) {
	                        return item == "search" || item.name == "search";
	                    }).length > 0,
	                    ns: kendo.ns,
	                    view: that._selectedViewName,
	                    views: that.views,
	                    viewsCount: that._viewsCount,
	                    editable: that.options.editable
	                }));

	            that.wrapper.append(toolbar);
	            that.toolbar = toolbar;

	            kendo.bind(that.toolbar, that._model);

	            toolbar.on(CLICK + NS, ".k-pdf", function(e) {
	                e.preventDefault();
	                that.saveAsPDF();
	            });

	            toolbar.on("input" + NS, ".k-scheduler-search-input", kendo.throttle(function(e) {
	                that.dataSource.filter({
	                    logic: "or",
	                    filters: [
	                        {field: "title", operator: "contains", value: e.target.value},
	                        {field: "description", operator: "contains", value: e.target.value}
	                    ]
	                });
	            }, 250));

	            toolbar.on(CLICK + NS, ".k-create-event", function(e) {
	                e.preventDefault();
	                that.addEvent();
	            });

	            toolbar.on(CLICK + NS, ".k-nav-calendar", function(e) {
	                e.preventDefault();
	                that._showCalendar(e.target);
	            });

	            toolbar.on(CLICK + NS, ".k-scheduler-navigation > .k-button", function(e) {
	                var button = $(this);
	                var date = new Date(that.date());
	                var action = "";
	                var currentDate = new Date();
	                var timezone = that.options.timezone;

	                if($(e.target).is("input")) {
	                    return;
	                }

	                e.preventDefault();

	                if (button.hasClass("k-nav-today")) {
	                    action = "today";
	                    if (timezone) {
	                        var timezoneOffset = kendo.timezone.offset(currentDate, timezone);
	                        date = kendo.timezone.convert(currentDate, currentDate.getTimezoneOffset(), timezoneOffset);
	                    } else {
	                        date = currentDate;
	                    }
	                } else if (button.hasClass("k-nav-next")) {
	                    action = "next";
	                    date = that.view().nextDate();
	                } else if (button.hasClass("k-nav-prev")) {
	                    action = "previous";
	                    date = that.view().previousDate();
	                }

	                if (!that.trigger("navigate", { view: that._selectedViewName, action: action, date: date })) {
	                    that.date(date);
	                }
	            });

	            toolbar.on(CLICK + NS, ".k-nav-current", function(e) {
	                e.preventDefault();

	                if (!that._isMobile()) {
	                    that._showCalendar();
	                }
	            });

	            toolbar.on(CLICK + NS, ".k-scheduler-views > .k-button, .k-scheduler-refresh", function(e) {
	                e.preventDefault();

	                var name = $(this).attr(kendo.attr("name"));

	                that.toolbar.find(".k-scheduler-views > .k-button").removeClass(FOCUSEDSTATE);

	                if (!that.trigger("navigate", { view: name, action: "changeView", date: that.date() })) {
	                    that.view(name);
	                }
	            });

	            toolbar.on(CHANGE + NS, ".k-views-dropdown, .k-scheduler-mobile-views", function() {
	                var name = this.value;

	                if (!that.trigger("navigate", { view: name, action: "changeView", date: that.date() })) {
	                    that.view(name);
	                }
	            });
	        },

	        _showCalendar: function(targetElm) {
	            var that = this,
	                target = targetElm || that.toolbar.find(".k-nav-current"),
	                html = $('<div class="k-calendar-container"><div class="k-scheduler-calendar"></div></div>');

	            if (!that.popup) {
	                that.popup = new Popup(html, {
	                    anchor: target,
	                    activate: function() {
	                        if(that.popup && that.calendar){
	                            that.popup._toggleResize(false);
	                            that.calendar.element.find("table").trigger("focus");
	                            that.popup._toggleResize(true);
	                        }
	                    },
	                    open: function() {
	                        if (!that.calendar) {
	                            that.calendar = new Calendar(this.element.find(".k-scheduler-calendar"),
	                            {
	                                change: function() {
	                                    var date = this.value();
	                                    if (!that.trigger("navigate", { view: that._selectedViewName, action: "changeDate", date: date })) {
	                                        that.date(date);
	                                        that.popup.close();
	                                    }

	                                    if(!that._isMobile()) {
	                                        that._selectedView.element.trigger("focus");
	                                        that.toolbar.find(".k-nav-current").trigger("focus").addClass(FOCUSEDSTATE);
	                                    }
	                                },
	                                min: that.options.min,
	                                max: that.options.max
	                            });
	                        }
	                        that.calendar.element.on("keydown" + NS, function (e) {
	                            if (e.keyCode === keys.ESC || e.keyCode === keys.TAB) {
	                                that.popup.close();
	                                that._selectedView.element.trigger("focus");
	                                that.toolbar.find(".k-nav-current").trigger("focus").addClass(FOCUSEDSTATE);
	                            }
	                        });

	                        that.calendar.setOptions({
	                            start: that._selectedViewName === "year" ? "decade" : "month",
	                            depth: that._selectedViewName === "year" ? "decade" : "month"
	                        });

	                        that.calendar.value(that.date());
	                    },
	                    copyAnchorStyles: false
	                });
	            }

	            that.popup.open();
	        },

	        refresh: function(e) {
	            var that = this;
	            var view = this.view();
	            var preventRefresh = (e && e.action === "itemchange" && (this._editor.editable || this._preventRefresh)) ||
	                                 (this.dataSource.options.type === "signalr" && this._preventRefresh);

	            this._progress(false);

	            this.angular("cleanup", function(){
	                return { elements: that.items() };
	            });

	            e = e || {};

	            if (!view) {
	                return;
	            }

	            if (preventRefresh) { // skip rebinding if editing is in progress
	                this._attemptRefresh = true && this.dataSource.options.type === "signalr";
	                return;
	            }

	            if (this.trigger("dataBinding", { action: e.action || "rebind", index: e.index, items: e.items })) {
	                return;
	            }

	            if (!(e && e.action === "resize") && this._editor) {
	                this._editor.close();
	            }

	            this._data = this.dataSource.expand(view.startDate(), view.visibleEndDate());

	            view.refreshLayout();

	            view.render(this._data);

	            this.trigger("dataBound");
	            this._attemptRefresh = false;
	        },

	        slotByPosition: function(x, y) {
	            var view = this.view();

	            if(!view._slotByPosition) {
	                return null;
	            }

	            var slot = view._slotByPosition(x, y);

	            if(!slot) {
	                return null;
	            }

	            return {
	                startDate: slot.startDate(),
	                endDate: slot.endDate(),
	                groupIndex: slot.groupIndex,
	                element: slot.element,
	                isDaySlot: slot.isDaySlot
	            };
	        },

	        slotByElement: function(element) {
	            var offset = $(element).offset();
	            return this.slotByPosition(offset.left, offset.top);
	        },

	        resourcesBySlot: function(slot) {
	            return this.view()._resourceBySlot(slot);
	        }
	    });

	    var defaultViews = {
	        day: {
	            type: "kendo.ui.DayView"
	        },
	        week: {
	            type: "kendo.ui.WeekView"
	        },
	        workWeek: {
	            type: "kendo.ui.WorkWeekView"
	        },
	        agenda: {
	            type: "kendo.ui.AgendaView"
	        },
	        month: {
	            type: "kendo.ui.MonthView"
	        },
	        timeline: {
	            type: "kendo.ui.TimelineView"
	        },
	        timelineWeek: {
	            type: "kendo.ui.TimelineWeekView"
	        },
	        timelineWorkWeek: {
	            type: "kendo.ui.TimelineWorkWeekView"
	        },
	        timelineMonth: {
	            type: "kendo.ui.TimelineMonthView"
	        },
	        year: {
	            type: "kendo.ui.YearView"
	        }
	    };

	    ui.plugin(Scheduler);

	    if (kendo.PDFMixin) {
	        kendo.PDFMixin.extend(Scheduler.prototype);

	        var SCHEDULER_EXPORT = "k-scheduler-pdf-export";
	        Scheduler.fn._drawPDF = function(progress) {
	            var wrapper = this.wrapper;
	            var styles = wrapper[0].style.cssText;

	            wrapper.css({
	                width: wrapper.width(),
	                height: wrapper.height()
	            });

	            wrapper.addClass(SCHEDULER_EXPORT);

	            var scheduler = this;
	            var promise = new $.Deferred();
	            var table = wrapper.find(".k-scheduler-content").find("table").css("table-layout", "auto");

	            setTimeout(function() {
	                table.css("table-layout", "fixed");
	                scheduler.resize(true);

	                scheduler._drawPDFShadow({}, {
	                    avoidLinks: scheduler.options.pdf.avoidLinks
	                })
	                .done(function(group) {
	                    var args = {
	                        page: group,
	                        pageNumber: 1,
	                        progress: 1,
	                        totalPages: 1
	                    };

	                    progress.notify(args);
	                    promise.resolve(args.page);
	                })
	                .fail(function(err) {
	                    promise.reject(err);
	                })
	                .always(function() {
	                    wrapper[0].style.cssText = styles;
	                    wrapper.removeClass(SCHEDULER_EXPORT);
	                    scheduler.resize(true);

	                    //Required because slot.offsetLeft is incorrect after first resize
	                    scheduler.resize(true);
	                });
	            });

	            return promise;
	        };
	    }

	    var TimezoneEditor = Widget.extend({
	        init: function(element, options) {
	            var that = this,
	                zones = kendo.timezone.windows_zones;

	            if (!zones || !kendo.timezone.zones_titles) {
	                throw new Error('kendo.timezones.min.js is not included.');
	            }

	            Widget.fn.init.call(that, element, options);

	            that.wrapper = that.element;

	            that._zonesQuery = new kendo.data.Query(zones);
	            that._zoneTitleId = kendo.guid();
	            that._zoneTitlePicker();
	            that._zonePicker();

	            that._zoneTitle.bind("cascade", function() {
	                if (!this.value()) {
	                    that._zone.wrapper.hide();
	                }
	            });

	            that._zone.bind("cascade", function() {
	                that._value = this.value();
	                that.trigger(CHANGE);
	            });

	            that.value(that.options.value);
	        },
	        options: {
	            name: "TimezoneEditor",
	            value: "",
	            optionLabel: "No timezone"
	        },
	        events: [ CHANGE ],

	        _zoneTitlePicker: function() {
	            var that = this,
	                zoneTitle = $('<input id="' + that._zoneTitleId + '" aria-label="' + that.options.title + '"/>').appendTo(that.wrapper);

	            that._zoneTitle = new kendo.ui.DropDownList(zoneTitle, {
	                dataSource: kendo.timezone.zones_titles,
	                dataValueField: "other_zone",
	                dataTextField: "name",
	                optionLabel: that.options.optionLabel
	            });
	        },

	        _zonePicker: function() {
	            var that = this,
	                zone = $('<input aria-label="' + that.options.title + '"/>').appendTo(this.wrapper);

	            that._zone = new kendo.ui.DropDownList(zone, {
	                dataValueField: "zone",
	                dataTextField: "territory",
	                dataSource: that._zonesQuery.data,
	                cascadeFrom: that._zoneTitleId,
	                dataBound: function() {
	                    that._value = this.value();
	                    this.wrapper.toggle(this.dataSource.view().length > 1);
	                }
	            });

	            that._zone.wrapper.hide();
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            kendo.destroy(this.wrapper);
	        },

	        value: function(value) {
	            var that = this,
	                zone;

	            if (value === undefined) {
	                return that._value;
	            }

	            zone = that._zonesQuery.filter({ field: "zone", operator: "eq", value: value }).data[0];

	            if (zone) {
	                that._zoneTitle.value(zone.other_zone);
	                that._zone.value(zone.zone);
	            } else {
	                that._zoneTitle.select(0);
	            }

	        }
	    });

	    ui.plugin(TimezoneEditor);

	    var ZONETITLEOPTIONTEMPLATE = kendo.template('<option value="#=other_zone#">#=name#</option>');
	    var ZONEOPTIONTEMPLATE = kendo.template('<option value="#=zone#">#=territory#</option>');

	    var MobileTimezoneEditor = Widget.extend({
	        init: function(element, options) {
	            var that = this,
	                zones = kendo.timezone.windows_zones;

	            if (!zones || !kendo.timezone.zones_titles) {
	                throw new Error('kendo.timezones.min.js is not included.');
	            }

	            Widget.fn.init.call(that, element, options);

	            that.wrapper = that.element;

	            that._zonesQuery = new kendo.data.Query(zones);
	            that._zoneTitlePicker();
	            that._zonePicker();

	            that.value(that.options.value);
	        },

	        options: {
	            name: "MobileTimezoneEditor",
	            optionLabel: "No timezone",
	            value: ""
	        },

	        events: [ CHANGE ],

	        _bindZones: function(value) {
	            var data = value ? this._filter(value) : [];

	            this._zone.html(this._options(data, ZONEOPTIONTEMPLATE));
	        },

	        _filter: function(value) {
	            return this._zonesQuery.filter({ field: "other_zone", operator: "eq", value: value }).data;
	        },

	        _options: function(data, template, optionLabel) {
	            var idx = 0;
	            var html = "";
	            var length = data.length;

	            if (optionLabel) {
	                html += template({ other_zone: "", name: optionLabel });
	            }

	            for (; idx < length; idx++) {
	                html += template(data[idx]);
	            }

	            return html;
	        },

	        _zoneTitlePicker: function() {
	            var that = this;
	            var options = that._options(kendo.timezone.zones_titles, ZONETITLEOPTIONTEMPLATE, that.options.optionLabel);

	            that._zoneTitle = $('<select>' + options + '</select>')
	                                .appendTo(that.wrapper)
	                                .on("change", function() {
	                                    var value = this.value;
	                                    var zone = that._zonePickerLabel;
	                                    var zoneSelect = zone.find("select");

	                                    that._bindZones(value);

	                                    if (value && zoneSelect.children().length > 1) {
	                                        zone.show();
	                                    } else {
	                                        zone.hide();
	                                    }

	                                    that._value = that._zone[0].value;

	                                    that.trigger(CHANGE);
	                                });
	        },

	        _zonePicker: function() {
	            var that = this;

	            that._zonePickerLabel = $("<li class='k-item k-listgroup-item k-zonepicker' style='display:none'>" +
	                                        "<label class='k-label k-listgroup-form-row'>" +
	                                            "<span class='k-item-title k-listgroup-form-field-label'></span>" +
	                                            "<div class='k-listgroup-form-field-wrapper'></div>" +
	                                        "</label>" +
	                                    "</li>");

	            that._zone = $('<select></select>')
	                            .appendTo(that._zonePickerLabel.find("div"))
	                            .on("change", function() {
	                                that._value = this.value;

	                                that.trigger(CHANGE);
	                            });

	            this.wrapper.closest(".k-item").after(that._zonePickerLabel);

	            that._bindZones(that._zoneTitle.val());
	            that._value = that._zone[0].value;
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            kendo.destroy(this.wrapper);
	        },

	        value: function(value) {
	            var that = this;
	            var zonePicker = that._zone;
	            var other_zone = "";
	            var zone_value = "";
	            var zone;

	            if (value === undefined) {
	                return that._value;
	            }

	            zone = that._zonesQuery.filter({ field: "zone", operator: "eq", value: value }).data[0];

	            if (zone) {
	                zone_value = zone.zone;
	                other_zone = zone.other_zone;
	            }

	            that._zoneTitle.val(other_zone);
	            that._bindZones(other_zone);

	            zonePicker.val(zone_value);
	            zone_value = zonePicker[0].value;

	            if (zone_value && zonePicker.children.length > 1) {
	                that._zonePickerLabel.show();
	            } else {
	                that._zonePickerLabel.hide();
	            }

	            that._value = zone_value;
	        }
	    });

	    ui.plugin(MobileTimezoneEditor);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1412:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.agendaview");

/***/ }),

/***/ 1413:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.recurrence");

/***/ }),

/***/ 1414:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.view");

/***/ }),

/***/ 1415:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.dayview");

/***/ }),

/***/ 1416:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.monthview");

/***/ }),

/***/ 1417:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.timelineview");

/***/ }),

/***/ 1418:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.yearview");

/***/ })

/******/ });