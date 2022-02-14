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

	module.exports = __webpack_require__(1286);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1076:
/***/ (function(module, exports) {

	module.exports = require("./kendo.data");

/***/ }),

/***/ 1223:
/***/ (function(module, exports) {

	module.exports = require("./kendo.resizable");

/***/ }),

/***/ 1286:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1076), __webpack_require__(1223), __webpack_require__(1287), __webpack_require__(1288), __webpack_require__(1289), __webpack_require__(1290), __webpack_require__(1291), __webpack_require__(1292)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "gantt",
	    name: "Gantt",
	    category: "web",
	    description: "The Gantt component.",
	    depends: [ "data", "resizable", "switch", "gantt.data", "gantt.editors", "gantt.list", "gantt.timeline", "pdf" ]
	};

	(function($, undefined) {

	    var kendo = window.kendo,
	        keys = $.extend({F10: 121}, kendo.keys),
	        supportsMedia = "matchMedia" in window,
	        mobileOS = kendo.support.mobileOS,
	        Widget = kendo.ui.Widget,
	        ObservableObject = kendo.data.ObservableObject,
	        ObservableArray = kendo.data.ObservableArray,
	        Query = kendo.data.Query,
	        isArray = Array.isArray,
	        inArray = $.inArray,
	        isFunction = kendo.isFunction,
	        proxy = $.proxy,
	        extend = $.extend,
	        isPlainObject = $.isPlainObject,
	        outerWidth = kendo._outerWidth,
	        outerHeight = kendo._outerHeight,
	        defaultIndicatorWidth = 3,

	        NS = ".kendoGantt",
	        PERCENTAGE_FORMAT = "p0",
	        TABINDEX = "tabIndex",
	        CLICK = "click",
	        STRING = "string",
	        ARIA_DESCENDANT = "aria-activedescendant",
	        ARIA_LABEL = "aria-label",
	        ACTIVE_CELL = "gantt_active_cell",
	        DOT = ".",
	        TASK_DELETE_CONFIRM = "Are you sure you want to delete this task?",
	        DEPENDENCY_DELETE_CONFIRM = "Are you sure you want to delete this dependency?",
	        TOGGLE_BUTTON_TEMPLATE = kendo.template('<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-gantt-toggle" type="button" '+ ARIA_LABEL + '="Toggle"><span class="k-button-icon #=styles.iconToggle#"></span></button>'),
	        BUTTON_TEMPLATE = '<button class="#=styles.button#  #=styles.buttonDefaults# #=className#" type="button" '+
	            '#if (action) {#' +
	                'data-action="#=action#"' +
	            '#}#' +
	        '>' +
	            '<span class="k-button-icon #=iconClass#"></span>' +
	            '<span class="k-button-text">#=text#</span>' +
	        '</button>',
	        COMMAND_BUTTON_TEMPLATE = '<a class="#=className#" #=attr# href="\\#"><span class="k-button-text">#=text#</span></a>',
	        VIEWS_DROPDOWN_TEMPLATE = kendo.template('<select class="k-dropdown k-picker k-dropdown-list #= styles.viewsDropdown #">' +
	            '#for(var view in views){#' +
	                '<option value="#=view#">#=views[view].title#</option>' +
	            '#}#' +
	        '</select>'),
	        HEADER_VIEWS_TEMPLATE = kendo.template('<div class="#=styles.viewsWrapper#">' +
	            '<span class="k-button-group #=styles.views#">' +
	                '#for(var view in views){#' +
	                    '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-view-#= view.toLowerCase() #" data-#=ns#name="#=view#">' +
	                        '<span class="k-button-text">#=views[view].title#</span>' +
	                    '</button>' +
	                '#}#' +
	            '</span>' +
	        '</div>');

	    var ganttStyles = {
	        wrapper: "k-widget k-gantt",
	        plannedTasks: "k-gantt-planned",
	        rowHeight: "k-gantt-rowheight",
	        content: "k-gantt-content",
	        listWrapper: "k-gantt-treelist",
	        list: "k-gantt-treelist",
	        timelineWrapper: "k-gantt-timeline",
	        timeline: "k-gantt-timeline",
	        splitBarWrapper: "k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal",
	        splitBar: "k-splitbar",
	        splitBarHover: "k-splitbar-horizontal-hover",
	        popupWrapper: "k-list-container",
	        popupList: "k-list k-reset",
	        resizeHandle: "k-resize-handle",
	        icon: "k-icon",
	        item: "k-item",
	        line: "k-gantt-line",
	        buttonDelete: "k-gantt-delete",
	        buttonCancel: "k-gantt-cancel",
	        buttonSave: "k-gantt-update",
	        buttonToggle: "k-gantt-toggle",
	        buttonDefaults: "k-button-md k-rounded-md k-button-solid",
	        primary: "k-button-solid-primary",
	        hovered: "k-state-hover",
	        selected: "k-selected",
	        focused: "k-focus",
	        focusedCell: "k-state-focused",
	        gridHeader: "k-grid-header",
	        gridHeaderWrap: "k-grid-header-wrap",
	        gridContent: "k-grid-content",
	        tasks: "k-gantt-tasks",
	        popup: {
	            form: "k-popup-edit-form",
	            editForm: "k-gantt-edit-form",
	            formContainer: "k-edit-form-container",
	            resourcesFormContainer: "k-resources-form-container",
	            message: "k-popup-message",
	            buttonsContainer: "k-edit-buttons",
	            button: "k-button",
	            editField: "k-edit-field",
	            editLabel: "k-edit-label",
	            resourcesField: "k-gantt-resources"
	        },
	        toolbar: {
	            headerWrapper: "k-gantt-header k-toolbar k-gantt-toolbar",
	            footerWrapper: "k-gantt-footer k-toolbar k-gantt-toolbar",
	            toolbar: "k-gantt-toolbar",
	            views: "k-gantt-views",
	            viewsWrapper: "k-gantt-views-wrapper",
	            viewsDropdown: "k-views-dropdown",
	            button: "k-button",
	            buttonToggle: "k-gantt-toggle",
	            buttonDefaults: "k-button-md k-rounded-md k-button-solid",
	            iconPlus: "k-icon k-i-plus",
	            iconPdf: "k-icon k-i-file-pdf",
	            iconToggle: "k-icon k-i-layout-1-by-4",
	            viewButton: "k-view",
	            link: "k-link",
	            pdfButton: "k-gantt-pdf",
	            appendButton: "k-gantt-create"
	        }
	    };

	    function selector(uid) {
	        return "[" + kendo.attr("uid") + (uid ? "='" + uid + "']" : "]");
	    }

	    function trimOptions(options) {
	        delete options.name;
	        delete options.prefix;

	        delete options.remove;
	        delete options.edit;
	        delete options.add;
	        delete options.navigate;

	        return options;
	    }

	    function focusTable(table, direct) {
	        var wrapper = table.parents('[' + kendo.attr("role") + '="gantt"]');
	        var scrollPositions = [];
	        var parents = scrollableParents(wrapper);

	        table.attr(TABINDEX, 0);

	        if (direct) {
	            parents.each(function(index, parent) {
	                scrollPositions[index] = $(parent).scrollTop();
	            });
	        }

	        try {
	            //The setActive method does not cause the document to scroll to the active object in the current page
	            table[0].setActive();
	        } catch (e) {
	            table[0].focus();
	        }

	        if (direct) {
	            parents.each(function(index, parent) {
	                $(parent).scrollTop(scrollPositions[index]);
	            });
	        }
	    }

	    function scrollableParents(element) {
	        return $(element).parentsUntil("body")
	                .filter(function(index, element) {
	                    var computedStyle = kendo.getComputedStyles(element, ["overflow"]);
	                    return computedStyle.overflow != "visible";
	                })
	                .add(window);
	    }

	    var defaultCommands;

	    var Gantt = Widget.extend({
	        init: function(element, options, events) {
	            if (isArray(options)) {
	                options = { dataSource: options };
	            }

	            defaultCommands = {
	                append: {
	                    text: "Add Task",
	                    action: "add",
	                    className: Gantt.styles.toolbar.appendButton + " k-button-solid-base",
	                    iconClass: Gantt.styles.toolbar.iconPlus
	                },
	                pdf: {
	                    text: "Export to PDF",
	                    className: Gantt.styles.toolbar.pdfButton  + " k-button-solid-base",
	                    iconClass: Gantt.styles.toolbar.iconPdf
	                }
	            };

	            Widget.fn.init.call(this, element, options);

	            if (events) {
	                this._events = events;
	            }

	            this._wrapper();

	            this._resources();

	            if (!this.options.views || !this.options.views.length) {
	                this.options.views = ["day", "week", "month"];
	            }

	            this._timeline();

	            this._toolbar();

	            this._footer();

	            this._adjustDimensions();

	            // Prevent extra refresh from setting the view
	            this._preventRefresh = true;

	            this.view(this.timeline._selectedViewName);

	            this._preventRefresh = false;

	            this._dataSource();

	            this._assignments();

	            this._dropDowns();

	            this._list();

	            this._dependencies();

	            this._resizable();

	            this._scrollable();

	            this._dataBind();

	            this._attachEvents();

	            this._createEditor();

	            kendo.notify(this);
	        },

	        events: [
	            "dataBinding",
	            "dataBound",
	            "add",
	            "edit",
	            "remove",
	            "cancel",
	            "save",
	            "change",
	            "navigate",
	            "moveStart",
	            "move",
	            "moveEnd",
	            "resizeStart",
	            "resize",
	            "resizeEnd",
	            "columnHide",
	            "columnReorder",
	            "columnResize",
	            "columnShow",
	            "togglePlannedTasks"
	        ],

	        options: {
	            name: "Gantt",
	            autoBind: true,
	            navigatable: false,
	            selectable: true,
	            editable: true,
	            resizable: false,
	            columnResizeHandleWidth: defaultIndicatorWidth,
	            columns: [],
	            views: [],
	            dataSource: {},
	            dependencies: {},
	            resources: {},
	            assignments: {},
	            taskTemplate: null,
	            messages: {
	                save: "Save",
	                cancel: "Cancel",
	                destroy: "Delete",
	                deleteTaskConfirmation: TASK_DELETE_CONFIRM,
	                deleteDependencyConfirmation: DEPENDENCY_DELETE_CONFIRM,
	                deleteTaskWindowTitle: "Delete task",
	                deleteDependencyWindowTitle: "Delete dependency",
	                views: {
	                    day: "Day",
	                    week: "Week",
	                    month: "Month",
	                    year: "Year",
	                    start: "Start",
	                    end: "End"
	                },
	                actions: {
	                    append: "Add Task",
	                    addChild: "Add Child",
	                    insertBefore: "Add Above",
	                    insertAfter: "Add Below",
	                    pdf: "Export to PDF"
	                },
	                editor: {
	                    editorTitle: "Task",
	                    resourcesEditorTitle: "Resources",
	                    title: "Title",
	                    start: "Start",
	                    end: "End",
	                    plannedStart: "Planned Start",
	                    plannedEnd: "Planned End",
	                    percentComplete: "Complete",
	                    resources: "Resources",
	                    assignButton: "Assign",
	                    resourcesHeader: "Resources",
	                    unitsHeader: "Units"
	                },
	                plannedTasks: {
	                    switchText: "Planned Tasks",
	                    offsetTooltipAdvanced: "Met deadline earlier",
	                    offsetTooltipDelay: "Delay",
	                    seconds: "seconds",
	                    minutes: "minutes",
	                    hours: "hours",
	                    days: "days"
	                }
	            },
	            showWorkHours: true,
	            showWorkDays: true,
	            toolbar: null,
	            workDayStart: new Date(1980, 1, 1, 8, 0, 0),
	            workDayEnd: new Date(1980, 1, 1, 17, 0, 0),
	            workWeekStart: 1,
	            workWeekEnd: 5,
	            hourSpan: 1,
	            snap: true,
	            height: 600,
	            listWidth: "30%",
	            rowHeight: null,
	            showPlannedTasks: false
	        },

	        select: function(value) {
	            var list = this.list;

	            if (!value) {
	                return list.select();
	            }

	            if (typeof value === STRING) {
	                value = list.content.find(value);
	            }

	            list.select(value);

	            this.list.element.find("table[role=treegrid]").trigger("focus");
	            return;
	        },

	        clearSelection: function() {
	            this.list.clearSelection();
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            if (this.dataSource) {
	                this.dataSource.unbind("change", this._refreshHandler);
	                this.dataSource.unbind("progress", this._progressHandler);
	                this.dataSource.unbind("error", this._errorHandler);
	            }

	            if (this.dependencies) {
	                this.dependencies.unbind("change", this._dependencyRefreshHandler);
	                this.dependencies.unbind("error", this._dependencyErrorHandler);
	            }

	            if (this.timeline) {
	                this.timeline.unbind();
	                this.timeline.destroy();
	            }

	            if (this.list) {
	                this.list.unbind();
	                this.list.destroy();
	            }

	            if (this.footerDropDown) {
	                this.footerDropDown.destroy();
	            }

	            if (this.headerDropDown) {
	                this.headerDropDown.destroy();
	            }

	            if (this._editor) {
	                this._editor.destroy();
	            }

	            if (this._resizeDraggable) {
	                this._resizeDraggable.destroy();
	            }

	            this.toolbar.off(NS);

	            if (supportsMedia) {
	                this._mediaQuery.removeListener(this._mediaQueryHandler);
	                this._mediaQuery = null;
	            }

	            $(window).off("resize" + NS, this._resizeHandler);
	            $(this.wrapper).off(NS);

	            this.toolbar = null;
	            this.footer = null;

	            kendo.destroy(this.element);
	        },

	        setOptions: function(options) {
	            var newOptions = kendo.deepExtend({}, this.options, options);

	            var events = this._events;

	            if (!options.views) {
	                var selectedView = this.view().name;

	                newOptions.views = $.map(this.options.views, function(view) {
	                    var isSettings = isPlainObject(view);
	                    var name = isSettings ? ((typeof view.type !== "string") ? view.title : view.type) : view;

	                    if (selectedView === name) {
	                        if (isSettings) {
	                            view.selected = true;
	                        } else {
	                            view = { type: name, selected: true };
	                        }
	                    } else if (isSettings) {
	                        view.selected = false;
	                    }

	                    return view;
	                });
	            }

	            if (!options.dataSource) { newOptions.dataSource = this.dataSource; }
	            if (!options.dependencies) { newOptions.dependencies = this.dependencies; }
	            if (!options.resources) { newOptions.resources = this.resources; }
	            if (!options.assignments) { newOptions.assignments = this.assignments; }

	            this.destroy();
	            this.element.empty();
	            this.options = null;

	            this.init(this.element, newOptions, events);

	            Widget.fn._setEvents.call(this, newOptions);
	        },

	        _attachEvents: function() {
	            this._resizeHandler = proxy(this.resize, this, false);
	            $(window).on("resize" + NS, this._resizeHandler);

	            if (supportsMedia && this._mediaQuery.matches === true) {
	                this._mediaQueryHandler({ matches: true });
	            }
	        },

	        _wrapper: function() {
	            var ganttStyles = Gantt.styles;
	            var splitBarHandleClassName = [ganttStyles.icon, ganttStyles.resizeHandle].join(" ");
	            var options = this.options;
	            var height = options.height;
	            var width = options.width;

	            this.wrapper = this.element.addClass(ganttStyles.wrapper);
	            this.layout = $("<div class='" + ganttStyles.content + "' />").appendTo(this.wrapper)
	                .append("<div class='" + ganttStyles.listWrapper + "'><div></div></div>")
	                .append("<div class='" + ganttStyles.splitBarWrapper + "'><div class='" + splitBarHandleClassName + "'></div></div>")
	                .append("<div class='" + ganttStyles.timelineWrapper + "'><div></div></div>");

	            if(options.showPlannedTasks) {
	                this.wrapper.addClass(ganttStyles.plannedTasks);
	            }

	            if (height) {
	                this.wrapper.css("height", height);
	            }

	            if (width) {
	                this.wrapper.css("width", width);
	            }

	            if (options.rowHeight) {
	                this.wrapper.addClass(ganttStyles.rowHeight);
	            }

	            this.treelistWrapper = this.wrapper.find(DOT + ganttStyles.list);
	            this.splitbar = this.wrapper.find(DOT + ganttStyles.splitBar);
	            this.timelineWrapper = this.wrapper.find(DOT + ganttStyles.timeline);

	            this.treelistWrapper.css("width", options.listWidth);
	            this.timelineWrapper.css("width", this.wrapper.width() - this.treelistWrapper.outerWidth() - this.splitbar.outerWidth() );
	        },

	        _toolbar: function() {
	            var that = this;
	            var ganttStyles = Gantt.styles;
	            var viewsSelector = DOT + ganttStyles.toolbar.views + " > button";
	            var viewsDropdownSelector = DOT + ganttStyles.toolbar.viewsDropdown;
	            var pdfSelector = DOT + ganttStyles.toolbar.pdfButton;
	            var toggleSelector = DOT + ganttStyles.buttonToggle;
	            var contentSelector = DOT + ganttStyles.gridContent;
	            var splitbar = that.splitbar;
	            var treelist = that.treelistWrapper;
	            var timeline = that.timelineWrapper;
	            var actions = this.options.toolbar;
	            var toolbar;
	            var views;
	            var toggleButton;
	            var mediaQueryHandler = function(e) {

	                if (e.matches) {
	                    treelist.addClass("k-hidden");
	                    splitbar.addClass("k-hidden");

	                    treelist.width("100%");
	                } else {
	                    treelist.removeClass("k-hidden");
	                    splitbar.removeClass("k-hidden");
	                    timeline.removeClass("k-hidden");

	                    treelist.width(treelist.outerWidth());

	                    that.refresh();

	                    timeline
	                        .find(contentSelector)
	                        .scrollTop(that.scrollTop);
	                }

	                that._resize();
	            };

	            if (!isFunction(actions)) {
	                actions = (typeof actions === STRING ? actions : this._actions(actions));
	                actions = proxy(kendo.template(actions), this);
	            }

	            toggleButton = $(TOGGLE_BUTTON_TEMPLATE({ styles: ganttStyles.toolbar }));

	            views = $(HEADER_VIEWS_TEMPLATE({
	                ns: kendo.ns,
	                views: this.timeline.views,
	                styles: ganttStyles.toolbar
	            }));

	            toolbar = $("<div class='" + ganttStyles.toolbar.headerWrapper + "'>")
	                .append(toggleButton)
	                .append(actions({}))
	                .append("<span class='k-spacer k-toolbar-spacer' />")
	                .append(views);

	            if (views.find("button").length > 1) {
	                views.prepend(VIEWS_DROPDOWN_TEMPLATE({
	                    ns: kendo.ns,
	                    views: this.timeline.views,
	                    styles: ganttStyles.toolbar
	                }));
	            }

	            if(this.toggeSwitchWrap) {
	                this.toggeSwitchWrap.insertBefore(views);
	            }

	            this.wrapper.prepend(toolbar);
	            this.toolbar = toolbar;

	            if (supportsMedia) {
	                this._mediaQueryHandler = proxy(mediaQueryHandler, this);
	                this._mediaQuery = window.matchMedia("(max-width: 480px)");
	                this._mediaQuery.addListener(this._mediaQueryHandler);
	            }

	            toolbar
	                .on("change" + NS, viewsDropdownSelector, function() {
	                    var list = that.list;
	                    var name = $(this).val();

	                    if (list.editable && list.editable.trigger("validate")) {
	                        return;
	                    }

	                    if (!that.trigger("navigate", { view: name })) {
	                        that.view(name);
	                    }

	                    that.toolbar.find(DOT + ganttStyles.focused).removeClass(ganttStyles.focused);
	                })
	                .on(CLICK + NS, viewsSelector, function(e) {
	                    e.preventDefault();

	                    var list = that.list;
	                    var name = $(this).attr(kendo.attr("name"));

	                    if (list.editor && !list.editor.end()) {
	                        return;
	                    }

	                    if (!that.trigger("navigate", { view: name })) {
	                        that.view(name);
	                    }

	                    that.toolbar.find(DOT + ganttStyles.focused).removeClass(ganttStyles.focused);
	                })
	                .on("keydown" + NS, viewsSelector, function(e) {
	                    var views = $(DOT + ganttStyles.toolbar.views).children(":not(.k-current-view)");
	                    var focusedViewIndex = views.index((that._focusedView && that._focusedView[0]) || views.closest(DOT + ganttStyles.selected)[0]);

	                    if (e.keyCode === keys.RIGHT) {
	                        $(that.toolbar.find(DOT + ganttStyles.focused)).removeClass(ganttStyles.focused);
	                        that._focusedView = focusedViewIndex + 1 === views.length ? $(views[0]) : $(views[focusedViewIndex + 1]);
	                        that._focusedView.trigger("focus").addClass(ganttStyles.focused);
	                        e.preventDefault();
	                    } else if (e.keyCode === keys.LEFT) {
	                        $(that.toolbar.find(DOT + ganttStyles.focused)).removeClass(ganttStyles.focused);
	                        that._focusedView = focusedViewIndex === 0 ? $(views[views.length - 1]) : $(views[focusedViewIndex - 1]);
	                        that._focusedView.trigger("focus").addClass(ganttStyles.focused);
	                        e.preventDefault();
	                    } else if ((e.keyCode === keys.ENTER || e.keyCode === keys.SPACEBAR) && that._focusedView) {
	                        that.view(that._focusedView.text().toLowerCase());
	                        e.preventDefault();
	                    } else if (e.keyCode >= 49 && e.keyCode <= 57) {
	                        that.view(that.timeline._viewByIndex(e.keyCode - 49));
	                    }
	                })
	                .on(CLICK + NS, pdfSelector, function(e) {
	                    e.preventDefault();

	                    that.saveAsPDF();
	                })
	                .on(CLICK + NS, toggleSelector, function(e) {
	                    e.preventDefault();

	                    if (treelist.is(":visible")) {
	                        treelist.addClass("k-hidden");
	                        timeline.removeClass("k-hidden");

	                        that.refresh();

	                        timeline
	                            .find(contentSelector)
	                            .scrollTop(that.scrollTop);
	                    } else {
	                        treelist.removeClass("k-hidden");
	                        timeline.addClass("k-hidden");

	                        treelist
	                            .find(contentSelector)
	                            .scrollTop(that.scrollTop);
	                    }

	                    that._resize();
	                });

	            this.wrapper
	                .on("focusout" + NS, function(e) {
	                    if (!$(e.relatedTarget).closest(DOT + ganttStyles.toolbar.toolbar).length) {
	                        that.toolbar.find(DOT + ganttStyles.focused).removeClass(ganttStyles.focused);
	                    }
	                    if (!$(e.relatedTarget).closest(DOT + ganttStyles.toolbar.views).length) {
	                        that.toolbar.find(DOT + ganttStyles.toolbar.views).removeClass(ganttStyles.toolbar.expanded);
	                    }
	                });

	        },

	        _actions: function() {
	            var options = this.options;
	            var editable = options.editable;
	            var actions = options.toolbar;
	            var html = "";
	            var action;

	            if (!isArray(actions)) {
	                if (editable && editable.create !== false) {
	                    actions = ["append"];
	                } else {
	                    return html;
	                }
	            }

	            for (var i = 0, length = actions.length; i < length; i++) {
	                action = actions[i];

	                if(action === "plannedTasks" || action.name === "plannedTasks") {
	                    this._createPlannedTasksSwitch();
	                    continue;
	                }

	                html += this._createButton(action);
	            }

	            return html;
	        },

	        _footer: function() {
	            var editable = this.options.editable;

	            if (!editable || editable.create === false) {
	                return;
	            }

	            var ganttStyles = Gantt.styles.toolbar;
	            var messages = this.options.messages.actions;
	            var button = $(kendo.template(BUTTON_TEMPLATE)(extend(true, { styles: ganttStyles }, defaultCommands.append, { text: messages.append })));
	            var footer = $("<div class='" + ganttStyles.footerWrapper + "'>").append(button);

	            this.wrapper.append(footer);
	            this.footer = footer;
	        },

	        _createButton: function(command) {
	            var template = command.template || BUTTON_TEMPLATE;
	            var messages = this.options.messages.actions;
	            var commandName = typeof command === STRING ? command : command.name || command.text;
	            var className = defaultCommands[commandName] ? defaultCommands[commandName].className : "k-gantt-" + (commandName || "").replace(/\s/g, "");
	            var options = {
	                iconClass: "",
	                action: "",
	                text: commandName,
	                className: className,
	                styles: Gantt.styles.toolbar
	            };

	            if(!options.className) {
	                options.className = "k-button-solid-base";
	            } else if (options.className.indexOf("k-button-solid-primary") === -1) {
	                options.className += " k-button-solid-base";
	            }

	            if (!commandName && !(isPlainObject(command) && command.template))  {
	                throw new Error("Custom commands should have name specified");
	            }

	            options = extend(true, options, defaultCommands[commandName], { text: messages[commandName] });

	            if (isPlainObject(command)) {
	                if (command.className && inArray(options.className, command.className.split(" ")) < 0) {
	                    command.className += " " + options.className;
	                }

	                options = extend(true, options, command);
	            }

	            return kendo.template(template)(options);
	        },

	        _adjustDimensions: function() {
	            var element = this.element;
	            var toolbarHeight = outerHeight(this.toolbar);
	            var footerHeight = this.footer ? outerHeight(this.footer) : 0;
	            var totalHeight = element.height();
	            var totalWidth = element.width();
	            var splitBarWidth = this.splitbar.is(":visible") ? outerWidth(this.splitbar) : 0;
	            var treeListWidth = this.treelistWrapper.is(":visible") ? outerWidth(this.treelistWrapper) : 0;
	            var timelineWidth = totalWidth - ( treeListWidth + splitBarWidth );

	            this.layout.children().height(totalHeight - (toolbarHeight + footerHeight));
	            this.timelineWrapper.width(timelineWidth);

	            if (totalWidth < (treeListWidth + splitBarWidth)) {
	                this.treelistWrapper.width(totalWidth - splitBarWidth);
	            }
	        },

	        _scrollTo: function(value) {
	            var view = this.timeline.view();
	            var list = this.list;
	            var attr = kendo.attr("uid");
	            var id = typeof value === "string" ? value :
	                value.closest("tr" + selector()).attr(attr);
	            var action;
	            var scrollTarget;
	            var scrollIntoView = function() {
	                if (scrollTarget.length !== 0) {
	                    action();
	                }
	            };

	            if (view.content.is(":visible")) {
	                scrollTarget = view.content.find(selector(id));
	                action = function() {
	                    view._scrollTo(scrollTarget);
	                };
	            } else {
	                scrollTarget = list.element.find(selector(id));
	                action = function() {
	                    scrollTarget.get(0).scrollIntoView();
	                };
	            }

	            scrollIntoView();
	        },

	        _dropDowns: function() {
	            var that = this;
	            var actionsSelector = DOT + Gantt.styles.toolbar.appendButton;
	            var actionMessages = this.options.messages.actions;
	            var timeline = this.timeline;
	            var editable = this.options.editable;

	            var handler = function(e) {
	                var type = e.type;
	                var orderId;
	                var dataSource = that.dataSource;
	                var task = dataSource._createNewModel({});
	                var selected = that.dataItem(that.select());
	                var parent = dataSource.taskParent(selected);
	                var firstSlot = timeline.view()._timeSlots()[0];
	                var target = type === "add" ? selected : parent;
	                var editable = that.list.editor;

	                if (editable && editable.trigger("validate")) {
	                    return;
	                }

	                task.set("title", "New task");

	                if (target) {
	                    task.set("parentId", target.get("id"));
	                    task.set("start", target.get("start"));
	                    task.set("end", target.get("end"));
	                    task.set("plannedStart", target.get("plannedStart"));
	                    task.set("plannedEnd", target.get("plannedEnd"));
	                } else {
	                    task.set("start", firstSlot.start);
	                    task.set("end", firstSlot.end);
	                }

	                if (type !== "add") {
	                    orderId = selected.get("orderId");
	                    orderId = type === "insert-before" ? orderId : orderId + 1;
	                }

	                that._createTask(task, orderId);
	            };

	            if (!editable || editable.create === false) {
	                return;
	            }

	            this.footerDropDown = new kendo.gantt.TaskDropDown(this.footer.children(actionsSelector).eq(0), {
	                messages: {
	                    actions: actionMessages
	                },
	                direction: "up",
	                animation: {
	                    open: {
	                        effects: "slideIn:up"
	                    }
	                },
	                navigatable: that.options.navigatable
	            });

	            this.headerDropDown = new kendo.gantt.TaskDropDown(this.toolbar.children(actionsSelector).eq(0), {
	                messages: {
	                    actions: actionMessages
	                },
	                navigatable: that.options.navigatable
	            });

	            this.footerDropDown.bind("command", handler);
	            this.headerDropDown.bind("command", handler);
	        },

	        _getListEditable: function() {
	            var editable = false,
	                options = this.options;

	            if(options.editable !== false) {
	                editable = "incell";

	                if(options.editable && options.editable.update === false) {
	                    editable = false;
	                } else {
	                    if(!options.editable || options.editable.reorder !== false) {
	                        editable = {
	                            mode: "incell",
	                            move: {
	                                reorderable: true
	                            }
	                        };
	                    }
	                }
	            }

	            return editable;
	        },

	        _getListOptions: function() {
	            var options = this.options,
	                editable = this._getListEditable(),
	                listWrapper = this.wrapper.find(DOT + ganttStyles.list),
	                ganttListOptions = {
	                    columns: options.columns || [],
	                    dataSource: this.dataSource,
	                    selectable: options.selectable,
	                    reorderable: options.reorderable,
	                    editable: editable,
	                    resizable: options.resizable,
	                    filterable: options.filterable,
	                    columnMenu: options.columnMenu,
	                    columnResizeHandleWidth: this.options.columnResizeHandleWidth,
	                    listWidth: outerWidth(listWrapper),
	                    resourcesField: this.resources.field,
	                    rowHeight: this.options.rowHeight
	                };

	            return ganttListOptions;
	        },

	        _attachResourceEditor: function(columns) {
	            var column;

	            for (var i = 0; i < columns.length; i++) {
	                column = columns[i];

	                if (column.field === this.resources.field && typeof column.editor !== "function") {
	                    column.editor = proxy(this._createResourceEditor, this);
	                }
	            }
	        },

	        _attachListEvents: function() {
	            var that = this,
	                navigatable = that.options.navigatable,
	                toggleButtons = this.wrapper.find(DOT + ganttStyles.toolbar.toolbar + " " + DOT + ganttStyles.toolbar.appendButton),
	                restoreFocus = function() {
	                    var element;

	                    if (navigatable && that._cachedCurrent) {
	                        element = that.list.content.find("tr").eq(that._cachedCurrent.rowIndex).find("td").eq(that._cachedCurrent.columnIndex);

	                        that._current(element);

	                        focusTable(that.list.content.find("table"), true);
	                    }

	                    delete that._cachedCurrent;
	                };

	            that.list
	                .bind("columnShow", function(e) {
	                    that.trigger("columnShow", { column: e.column });
	                })
	                .bind("columnHide", function(e) {
	                    that.trigger("columnHide", { column: e.column });
	                })
	                .bind("columnReorder", function(e) {
	                    that.trigger("columnReorder", { column: e.column, oldIndex: e.oldIndex, newIndex: e.newIndex });
	                })
	                .bind("columnResize", function(e) {
	                    that.trigger("columnResize", { column: e.column, oldWidth: e.oldWidth, newWidth: e.newWidth });
	                })
	                .bind("render", function() {
	                    that._navigatable();
	                 }, true)
	                .bind("beforeEdit", function(e) {
	                    that._cachedCurrent = {
	                        rowIndex: e.container.closest("tr").index(),
	                        columnIndex: e.container.index()
	                    };

	                    if (that.trigger("edit", { task: e.model, container: e.container })) {
	                        e.preventDefault();
	                    }
	                })
	                .bind("cancel", function(e) {
	                    if (that.trigger("cancel", { task: e.model, container: e.cell })) {
	                        e.preventDefault();
	                        return;
	                    }

	                    that._preventItemChange = true;
	                    that.list.closeCell(true);
	                    restoreFocus();
	                })
	                .bind("save", function(e) {
	                    var updatedValues = e.values;
	                    that._preventRefresh = true;

	                    if(that.updateDuration === null || that.updateDuration === undefined) {
	                        that.updateDuration = e.model.duration();
	                    }

	                    if(that.updatePlannedDuration === null || that.updatePlannedDuration === undefined) {
	                        that.updatePlannedDuration = e.model.plannedDuration();
	                    }

	                    if (updatedValues.hasOwnProperty("start")) {
	                        that.previousStart = e.model.get("start");
	                        updatedValues.end = new Date(updatedValues.start.getTime() + that.updateDuration);
	                    }

	                    if (updatedValues.hasOwnProperty("plannedStart") && updatedValues.plannedStart) {
	                        that.previousPlannedStart = e.model.get("plannedStart");
	                        updatedValues.plannedEnd = new Date(updatedValues.plannedStart.getTime() + that.updatePlannedDuration);
	                    }

	                    that.updatedValues = updatedValues;
	                })
	                .bind("itemChange", function(e) {
	                    var updateInfo = that.updatedValues;
	                    var task = e.data;
	                    var resourcesField = that.resources.field;

	                    if(that._preventItemChange) {
	                        that._preventItemChange = false;
	                        return;
	                    }

	                    if(that.previousStart) {
	                        task.set("start", that.previousStart);
	                        that.previousStart = null;
	                    }

	                    if(that.previousPlannedStart) {
	                        task.set("plannedStart", that.previousPlannedStart);
	                        that.previousPlannedStart = null;
	                    }

	                    if (!that.trigger("save", { task: task, values: updateInfo })) {
	                        if(updateInfo) {
	                            that._preventRefresh = true;
	                            that.dataSource.update(task, updateInfo);

	                            if (updateInfo[resourcesField]) {
	                                that._updateAssignments(task.get("id"), updateInfo[resourcesField]);
	                            }
	                        }

	                        that._preventRefresh = false;
	                        that._requestStart();
	                        that.dataSource.sync().then(function() {
	                            restoreFocus();
	                        });
	                    } else if(that.dataSource.hasChanges()) {
	                        that.dataSource.cancelChanges();
	                        that._preventRefresh = false;
	                        that.refresh();
	                    }

	                    that.updatedValues = null;
	                    that.updateDuration = null;
	                })
	                .bind("change", function() {
	                    that.trigger("change");

	                    var selection = that.list.select();

	                    if (selection.length) {
	                        toggleButtons.removeAttr("data-action", "add");
	                        that.timeline.select("[data-uid='" + selection.attr("data-uid") + "']");
	                    } else {
	                        toggleButtons.attr("data-action", "add");
	                        that.timeline.clearSelection();
	                    }
	                })
	                .bind("collapse", function(e) {
	                    e.preventDefault();

	                    var row = that.list.element.find("tr[data-uid='" + e.model.uid + "']");
	                    e.model.set("expanded", false);

	                    that._cachedCurrent = {
	                        rowIndex: row.index(),
	                        columnIndex: row.find(".k-state-focused").index()
	                    };

	                    restoreFocus();
	                })
	                .bind("expand", function(e) {
	                    e.preventDefault();

	                    var row = that.list.element.find("tr[data-uid='" + e.model.uid + "']");
	                    e.model.set("expanded", true);

	                    that._cachedCurrent = {
	                        rowIndex: row.index(),
	                        columnIndex: row.find(".k-state-focused").index()
	                    };

	                    restoreFocus();
	                })
	                .bind("dragend", function(e) {
	                    var dataSource = that.dataSource,
	                        task, updateInfo;

	                    if(e.position === "over") {
	                        dataSource.cancelChanges();

	                        updateInfo = {
	                            parentId: e.source.parentId
	                        };

	                        task = dataSource.get(e.source.id);

	                        if (!that.trigger("save", { task: task, values: updateInfo })) {
	                            dataSource.update(task, updateInfo);
	                        }

	                        dataSource.sync();
	                    }
	                })
	                .bind("dataBound", function() {
	                    if(that.dataSource.sort().length === 0) {
	                        that.dataSource.sort([{field: "orderId", dir: "asc"}]);
	                    }
	                })
	                .bind("reorder", function(e) {
	                    that._updateTask(e.task, e.updateInfo);
	                    restoreFocus();
	                });
	        },

	        _list: function() {
	            var ganttStyles = Gantt.styles,
	                listWrapper = this.wrapper.find(DOT + ganttStyles.list),
	                listElement = listWrapper.find("> div"),
	                listOptions = this._getListOptions();

	            this._attachResourceEditor(listOptions.columns);

	            this.list = new kendo.ui.GanttList(listElement, listOptions);

	            this._attachListEvents();
	        },

	        _timeline: function() {
	            var that = this;
	            var ganttStyles = Gantt.styles;
	            var options = trimOptions(extend(true, { resourcesField: this.resources.field }, this.options));
	            var element = this.wrapper.find(DOT + ganttStyles.timeline + " > div");

	            this.timeline = new kendo.ui.GanttTimeline(element, options);

	            this.timeline
	                .bind("navigate", function(e) {
	                    var viewName = e.view.replace(/\./g, "\\.").toLowerCase();

	                    that.toolbar
	                        .find(DOT + ganttStyles.toolbar.views + " > button")
	                        .removeClass(ganttStyles.selected)
	                        .end()
	                        .find(DOT + ganttStyles.toolbar.viewButton + "-" + viewName)
	                        .addClass(ganttStyles.selected);

	                    that.toolbar
	                        .find(DOT + ganttStyles.toolbar.viewsDropdown)
	                        .val(e.view);

	                    that.refresh();
	                })
	                .bind("moveStart", function(e) {
	                    var editable = that.list.editor;

	                    if (editable && !editable.end()) {
	                        e.preventDefault();
	                        return;
	                    }

	                    if (that.trigger("moveStart", { task: e.task })) {
	                        e.preventDefault();
	                    }
	                })
	                .bind("move", function(e) {
	                    var task = e.task;
	                    var start = e.start;
	                    var end = new Date(start.getTime() + task.duration());

	                    if (that.trigger("move", { task: task, start: start, end: end })) {
	                        e.preventDefault();
	                    }
	                })
	                .bind("moveEnd", function(e) {
	                    var task = e.task;
	                    var start = e.start;
	                    var end = new Date(start.getTime() + task.duration());

	                    if (!that.trigger("moveEnd", { task: task, start: start, end: end })) {
	                        that._updateTask(that.dataSource.getByUid(task.uid), {
	                            start: start,
	                            end: end
	                        });
	                    }
	                })
	                .bind("resizeStart", function(e) {
	                    var editable = that.list.editor;

	                    if (editable && !editable.end()) {
	                        e.preventDefault();
	                        return;
	                    }

	                    if (that.trigger("resizeStart", { task: e.task })) {
	                        e.preventDefault();
	                    }
	                })
	                .bind("resize", function(e) {
	                    if (that.trigger("resize", { task: e.task, start: e.start, end: e.end })) {
	                        e.preventDefault();
	                    }
	                })
	                .bind("resizeEnd", function(e) {
	                    var task = e.task;
	                    var updateInfo = {};

	                    if (e.resizeStart) {
	                        updateInfo.start = e.start;
	                    } else {
	                        updateInfo.end = e.end;
	                    }

	                    if (!that.trigger("resizeEnd", { task: task, start: e.start, end: e.end })) {
	                        that._updateTask(that.dataSource.getByUid(task.uid), updateInfo);
	                    }
	                })
	                .bind("percentResizeStart", function(e) {
	                    var editable = that.list.editor;

	                    if (editable && !editable.end()) {
	                        e.preventDefault();
	                    }
	                })
	                .bind("percentResizeEnd", function(e) {
	                    that._updateTask(that.dataSource.getByUid(e.task.uid), { percentComplete: e.percentComplete });
	                })
	                .bind("dependencyDragStart", function(e) {
	                    var editable = that.list.editor;

	                    if (editable && !editable.end()) {
	                        e.preventDefault();
	                    }
	                })
	                .bind("dependencyDragEnd", function(e) {
	                    var dependency = that.dependencies._createNewModel({
	                        type: e.type,
	                        predecessorId: e.predecessor.id,
	                        successorId: e.successor.id
	                    });

	                    that._createDependency(dependency);
	                })
	                .bind("select", function(e) {
	                    var editable = that.list.editor;

	                    if (editable) {
	                        editable.end();
	                    }

	                    that.select("[data-uid='" + e.uid + "']");
	                })
	                .bind("editTask", function(e) {
	                    var editable = that.list.editor;

	                    if (editable && !editable.end()) {
	                        return;
	                    }

	                    that.editTask(e.uid);
	                })
	                .bind("clear", function() {
	                    that.clearSelection();
	                })
	                .bind("removeTask", function(e) {
	                    var editable = that.list.editor;

	                    if (editable && !editable.end()) {
	                        return;
	                    }

	                    that.removeTask(that.dataSource.getByUid(e.uid));
	                })
	                .bind("removeDependency", function(e) {
	                    var editable = that.list.editor;

	                    if (editable && !editable.end()) {
	                        return;
	                    }

	                    that.removeDependency(that.dependencies.getByUid(e.uid));
	                });
	        },

	        _dataSource: function() {
	            var options = this.options;
	            var dataSource = options.dataSource;

	            dataSource = isArray(dataSource) ? { data: dataSource } : dataSource;

	            if (this.dataSource && this._refreshHandler) {
	                this.dataSource
	                    .unbind("change", this._refreshHandler)
	                    .unbind("progress", this._progressHandler)
	                    .unbind("error", this._errorHandler);
	            } else {
	                this._refreshHandler = proxy(this.refresh, this);
	                this._progressHandler = proxy(this._requestStart, this);
	                this._errorHandler = proxy(this._error, this);
	            }

	            this.dataSource = kendo.data.GanttDataSource.create(dataSource)
	                .bind("change", this._refreshHandler)
	                .bind("progress", this._progressHandler)
	                .bind("error", this._errorHandler);
	        },

	        _dependencies: function() {
	            var dependencies = this.options.dependencies || {};
	            var dataSource = isArray(dependencies) ? { data: dependencies } : dependencies;

	            if (this.dependencies && this._dependencyRefreshHandler) {
	                this.dependencies
	                    .unbind("change", this._dependencyRefreshHandler)
	                    .unbind("error", this._dependencyErrorHandler);
	            } else {
	                this._dependencyRefreshHandler = proxy(this.refreshDependencies, this);
	                this._dependencyErrorHandler = proxy(this._error, this);
	            }

	            this.dependencies = kendo.data.GanttDependencyDataSource.create(dataSource)
	                .bind("change", this._dependencyRefreshHandler)
	                .bind("error", this._dependencyErrorHandler);
	        },

	        _resources: function() {
	            var resources = this.options.resources;
	            var dataSource = resources.dataSource || {};

	            this.resources = {
	                field: "resources",
	                dataTextField: "name",
	                dataColorField: "color",
	                dataFormatField: "format"
	            };

	            extend(this.resources, resources);

	            this.resources.dataSource = kendo.data.DataSource.create(dataSource);
	        },

	        _assignments: function() {
	            var assignments = this.options.assignments;
	            var dataSource = assignments.dataSource || { };

	            if (this.assignments) {
	                this.assignments.dataSource
	                    .unbind("change", this._assignmentsRefreshHandler);
	            } else {
	                this._assignmentsRefreshHandler = proxy(this.refresh, this);
	            }

	            this.assignments = {
	                dataTaskIdField: "taskId",
	                dataResourceIdField: "resourceId",
	                dataValueField: "value"
	            };

	            extend(this.assignments, assignments);

	            this.assignments.dataSource = kendo.data.DataSource.create(dataSource);

	            this.assignments.dataSource.
	                bind("change", this._assignmentsRefreshHandler);
	        },

	        _createEditor: function() {
	            var that = this;

	            var editor = this._editor = new kendo.gantt.PopupEditor(this.wrapper, extend({}, this.options, {
	                target: this,
	                resources: {
	                    field: this.resources.field,
	                    editor: proxy(this._createResourceEditor, this)
	                },
	                createButton: proxy(this._createPopupButton, this)
	            }));

	            editor
	                .bind("cancel", function(e) {
	                    var task = that.dataSource.getByUid(e.model.uid);

	                    if (that.trigger("cancel", { container: e.container, task: task })) {
	                        e.preventDefault();
	                        return;
	                    }

	                    that.cancelTask();
	                })
	                .bind("edit", function(e) {
	                    var task = that.dataSource.getByUid(e.model.uid);

	                    if (that.trigger("edit", { container: e.container, task: task })) {
	                        e.preventDefault();
	                    }
	                })
	                .bind("save", function(e) {
	                    var task = that.dataSource.getByUid(e.model.uid);

	                    that.saveTask(task, e.updateInfo);
	                })
	                .bind("remove", function(e) {
	                    that.removeTask(e.model.uid);
	                })
	                .bind("close", that._onDialogClose);
	        },

	        _onDialogClose: function() {},

	        _createResourceEditor: function(container, options) {
	            var that = this;
	            var model = options instanceof ObservableObject ? options : options.model;
	            var id = model.get("id");
	            var messages = this.options.messages;
	            var resourcesField = this.resources.field;
	            var unitsValidation = { step: 0.01 };
	            var assignmentsModel = this.assignments.dataSource.options.schema.model;

	            if (assignmentsModel && assignmentsModel.fields.Units && assignmentsModel.fields.Units.validation) {
	                extend(true, unitsValidation, assignmentsModel.fields.Units.validation);
	            }

	            var editor = this._resourceEditor = new kendo.gantt.ResourceEditor(container, {
	                resourcesField: resourcesField,
	                unitsValidation: unitsValidation,
	                data: this._wrapResourceData(id),
	                model: model,
	                messages: extend({}, messages.editor),
	                buttons: [
	                    { name: "update", text: messages.save, className: Gantt.styles.primary },
	                    { name: "cancel", text: messages.cancel }
	                ],
	                createButton: proxy(this._createPopupButton, this),
	                save: function(e) {
	                    that._updateAssignments(e.model.get("id"), e.model.get(resourcesField));
	                }
	            });

	            editor.open();
	        },

	        _createPopupButton: function(command) {
	            var commandName = command.name || command.text;
	            var options = {
	                className: Gantt.styles.popup.button + " " + Gantt.styles.buttonDefaults + " k-gantt-" + (commandName || "").replace(/\s/g, ""),
	                text: commandName,
	                attr: ""
	            };

	            if (!commandName && !(isPlainObject(command) && command.template))  {
	                throw new Error("Custom commands should have name specified");
	            }

	            if (isPlainObject(command)) {
	                if (command.className) {
	                    command.className += " " + options.className;
	                }

	                options = extend(true, options, command);
	            }

	            if(!options.className) {
	                options.className = "k-button-solid-base";
	            } else if (options.className.indexOf("k-button-solid-primary") === -1) {
	                options.className += " k-button-solid-base";
	            }

	            return kendo.template(COMMAND_BUTTON_TEMPLATE)(options);
	        },

	        view: function(type) {
	            return this.timeline.view(type);
	        },

	        range: function (range) {
	            var dataSource = this.dataSource;
	            var view = this.view();
	            var timeline = this.timeline;

	            if (range) {
	                view.options.range = {
	                    start: range.start,
	                    end: range.end
	                };

	                timeline._render(dataSource.taskTree());
	                timeline._renderDependencies(this.dependencies.view());
	            }

	            return {
	                start: view.start,
	                end: view.end
	            };
	        },

	        date: function (date) {
	            var view = this.view();

	            if (date) {
	                view.options.date = date;
	                view._scrollToDate(date);
	            }

	            return view.options.date;
	        },

	        dataItem: function(value) {
	            if (!value) {
	                return null;
	            }

	            var list = this.list;
	            var element = list.element.find(value);

	            return list._modelFromElement(element);
	        },

	        setDataSource: function(dataSource) {
	            this.options.dataSource = dataSource;

	            this._dataSource();

	            this.list.setDataSource(this.dataSource);

	            if (this.options.autoBind) {
	                dataSource.fetch();
	            }
	        },

	        setDependenciesDataSource: function(dependencies) {
	            this.options.dependencies = dependencies;

	            this._dependencies();

	            if (this.options.autoBind) {
	                dependencies.fetch();
	            }
	        },

	        items: function() {
	            return this.wrapper.children(".k-task");
	        },

	        _updateAssignments: function(id, resources) {
	            var dataSource = this.assignments.dataSource;
	            var taskId = this.assignments.dataTaskIdField;
	            var resourceId = this.assignments.dataResourceIdField;
	            var hasMatch = false;
	            var assignments = new Query(dataSource.view())
	                .filter({
	                    field: taskId,
	                    operator: "eq",
	                    value: id
	                }).toArray();
	            var assignment;
	            var resource;
	            var value;

	            while (assignments.length) {
	                assignment = assignments[0];

	                for (var i = 0, length = resources.length; i < length; i++) {
	                    resource = resources[i];

	                    if (assignment.get(resourceId) === resource.get("id")) {
	                        value = resources[i].get("value");
	                        this._updateAssignment(assignment, value);
	                        resources.splice(i, 1);
	                        hasMatch = true;
	                        break;
	                    }
	                }

	                if (!hasMatch) {
	                    this._removeAssignment(assignment);
	                }

	                hasMatch = false;

	                assignments.shift();
	            }

	            for (var j = 0, newLength = resources.length; j < newLength; j++) {
	                resource = resources[j];
	                this._createAssignment(resource, id);
	            }

	            dataSource.sync();
	        },

	        cancelTask: function() {
	            var editor = this._editor;
	            var container = editor.container;

	            if (container) {
	                editor.close();
	            }
	        },

	        editTask: function(uid) {
	            var task = typeof uid === "string" ? this.dataSource.getByUid(uid) : uid;

	            if (!task) {
	                return;
	            }

	            var taskCopy = this.dataSource._createNewModel(task.toJSON());
	            taskCopy.uid = task.uid;

	            this.cancelTask();

	            this._editTask(taskCopy);
	        },

	        _editTask: function(task) {
	            this._editor.editTask(task, this.options.editable.plannedTasks);
	        },

	        saveTask: function(task, updateInfo) {
	            var editor = this._editor;
	            var container = editor.container;
	            var editable = editor.editable;

	            if (container && editable && editable.end()) {
	                this._updateTask(task, updateInfo);
	            }
	        },

	        _updateTask: function(task, updateInfo) {
	            var that = this;
	            var resourcesField = that.resources.field;

	            if (!that.trigger("save", { task: task, values: updateInfo })) {
	                if(updateInfo) {
	                    that._preventRefresh = true;

	                    that.dataSource.update(task, updateInfo);

	                    if (updateInfo[resourcesField]) {
	                        that._updateAssignments(task.get("id"), updateInfo[resourcesField]);
	                    }
	                }

	                that._syncDataSource();
	            } else if(that.dataSource.hasChanges()) {
	                that.dataSource.cancelChanges();
	                that._preventRefresh = false;
	                that.refresh();
	            }
	        },

	        _updateAssignment: function(assignment, value) {
	            var resourceValueField = this.assignments.dataValueField;

	            assignment.set(resourceValueField, value);
	        },

	        removeTask: function(uid) {
	            var that = this;
	            var task = typeof uid === "string" ? this.dataSource.getByUid(uid) : uid;

	            if (!task) {
	                return;
	            }

	            this._taskConfirm(function(cancel) {
	                if (!cancel) {
	                    that._removeTask(task);
	                }
	            }, task);
	        },

	        _createTask: function(task, index) {
	            if (!this.trigger("add", {
	                task: task,
	                dependency: null
	            })) {
	                var dataSource = this.dataSource;

	                this._preventRefresh = true;

	                if (index === undefined) {
	                    dataSource.add(task);
	                } else {
	                    dataSource.insert(index, task);
	                }

	                this._scrollToUid = task.uid;
	                this._syncDataSource();
	            }
	        },

	        _createDependency: function(dependency) {
	            if (!this.trigger("add", {
	                task: null,
	                dependency: dependency
	            })) {
	                this._preventDependencyRefresh = true;

	                this.dependencies.add(dependency);

	                this._preventDependencyRefresh = false;

	                this.dependencies.sync();
	            }
	        },

	        _createAssignment: function(resource, id) {
	            var assignments = this.assignments;
	            var dataSource = assignments.dataSource;
	            var taskId = assignments.dataTaskIdField;
	            var resourceId = assignments.dataResourceIdField;
	            var resourceValue = assignments.dataValueField;
	            var assignment = dataSource._createNewModel();

	            assignment[taskId] = id;
	            assignment[resourceId] = resource.get("id");
	            assignment[resourceValue] = resource.get("value");

	            dataSource.add(assignment);
	        },

	        removeDependency: function(uid) {
	            var that = this;
	            var dependency = typeof uid === "string" ? this.dependencies.getByUid(uid) : uid;

	            if (!dependency) {
	                return;
	            }

	            this._dependencyConfirm(function(cancel) {
	                if (!cancel) {
	                    that._removeDependency(dependency);
	                }
	            }, dependency);
	        },

	        _removeTaskDependencies: function(task, dependencies) {
	            this._preventDependencyRefresh = true;

	            for (var i = 0, length = dependencies.length; i < length; i++) {
	                this.dependencies.remove(dependencies[i]);
	            }

	            this._preventDependencyRefresh = false;

	            this.dependencies.sync();
	        },

	        _removeTaskAssignments: function(task) {
	            var dataSource = this.assignments.dataSource;
	            var assignments = dataSource.view();
	            var filter = {
	                field: this.assignments.dataTaskIdField,
	                operator: "eq",
	                value: task.get("id")
	            };

	            assignments = new Query(assignments).filter(filter).toArray();

	            this._preventRefresh = true;

	            for (var i = 0, length = assignments.length; i < length; i++) {
	                dataSource.remove(assignments[i]);
	            }

	            this._preventRefresh = false;

	            dataSource.sync();
	        },

	        _removeTask: function(task) {
	            var dependencies = this.dependencies.dependencies(task.id);

	            if (!this.trigger("remove", {
	                task: task,
	                dependencies: dependencies
	            })) {
	                this._removeTaskDependencies(task, dependencies);
	                this._removeTaskAssignments(task);

	                this._preventRefresh = true;

	                if (this.dataSource.remove(task)) {
	                    this._syncDataSource();
	                }

	                this._preventRefresh = false;
	            }
	        },

	        _removeDependency: function(dependency) {
	            if (!this.trigger("remove", {
	                task: null,
	                dependencies: [dependency]
	            })) {
	                if (this.dependencies.remove(dependency)) {
	                    this.dependencies.sync();
	                }
	            }
	        },

	        _removeAssignment: function(assignment) {
	            this.assignments.dataSource.remove(assignment);
	        },

	        _taskConfirm: function(callback, task) {
	            var messages = this.options.messages;

	            this._confirm(callback, {
	                model: task,
	                text: messages.deleteTaskConfirmation,
	                title: messages.deleteTaskWindowTitle
	            });
	        },

	        _dependencyConfirm: function(callback, dependency) {
	            var messages = this.options.messages;

	            this._confirm(callback, {
	                model: dependency,
	                text: messages.deleteDependencyConfirmation,
	                title: messages.deleteDependencyWindowTitle
	            });
	        },

	        _confirm: function(callback, options) {
	            var editable = this.options.editable;
	            var messages;
	            var buttons;

	            if (editable === true || editable.confirmation !== false) {
	                messages = this.options.messages;
	                buttons = [
	                    { name: "delete", text: messages.destroy, className: Gantt.styles.primary, click: function() { callback(); } },
	                    { name: "cancel", text: messages.cancel, click: function() { callback(true); } }
	                ];

	                this.showDialog(extend(true, {}, options, { buttons: buttons }));
	            } else {
	                callback();
	            }
	        },

	        showDialog: function(options) {
	            this._editor.showDialog(options);
	        },

	        refresh: function() {
	            if (this._preventRefresh || !this.list || this.list.editor) {
	                return;
	            }

	            this._progress(false);

	            var dataSource = this.dataSource;
	            var taskTree = dataSource.taskTree();
	            var scrollToUid = this._scrollToUid;
	            var current;
	            var cachedUid;
	            var cachedIndex = -1;

	            if (this.current) {
	                cachedUid = this.current.closest("tr").attr(kendo.attr("uid"));
	                cachedIndex = this.current.index();
	            }

	            if (this.trigger("dataBinding")) {
	                return;
	            }

	            if (this.resources.dataSource.data().length !== 0) {
	                this._assignResources(taskTree);
	            }

	            if (this._editor) {
	                this._editor.close();
	            }

	            this.clearSelection();
	            this.list._renderTree(taskTree);
	            this.timeline._render(taskTree);
	            this.timeline._renderDependencies(this.dependencies.view());

	            if (scrollToUid) {
	                this._scrollTo(scrollToUid);
	                this.select(selector(scrollToUid));
	            }

	            if ((scrollToUid || cachedUid) && cachedIndex >= 0) {
	                current = this.list.element
	                    .find("tr" + selector((scrollToUid || cachedUid)) + " > td").eq(cachedIndex);

	                this._current(current);
	            }

	            this._scrollToUid = null;

	            this.trigger("dataBound");
	        },

	        refreshDependencies: function() {
	            if (this._preventDependencyRefresh) {
	                return;
	            }

	            if (this.trigger("dataBinding")) {
	                return;
	            }

	            this.timeline._renderDependencies(this.dependencies.view());

	            this.trigger("dataBound");
	        },

	        _assignResources: function(taskTree) {
	            var resources = this.resources;
	            var assignments = this.assignments;
	            var groupAssigments = function() {
	                var data = assignments.dataSource.view();
	                var group = {
	                    field: assignments.dataTaskIdField
	                };

	                data = new Query(data).group(group).toArray();

	                return data;
	            };
	            var assigments = groupAssigments();
	            var applyTaskResource = function(task, action) {
	                var taskId = task.get("id");

	                kendo.setter(resources.field)(task, new ObservableArray([]));

	                for (var i = 0, length = assigments.length; i < length; i++) {
	                    if (assigments[i].value === taskId) {
	                        action(task, assigments[i].items);
	                    }
	                }
	            };
	            var wrapTask = function(task, items) {
	                for (var j = 0, length = items.length; j < length; j++) {
	                    var item = items[j];
	                    var resource = resources.dataSource.get(item.get(assignments.dataResourceIdField));
	                    var resourceValue = item.get(assignments.dataValueField);
	                    var resourcedId = item.get(assignments.dataResourceIdField);
	                    var valueFormat = resource.get(resources.dataFormatField) || PERCENTAGE_FORMAT;
	                    var formatedValue = kendo.toString(resourceValue, valueFormat);

	                    task[resources.field].push(new ObservableObject({
	                        id: resourcedId,
	                        name: resource.get(resources.dataTextField),
	                        color: resource.get(resources.dataColorField),
	                        value: resourceValue,
	                        formatedValue: formatedValue
	                    }));
	                }
	            };

	            for (var i = 0, length = taskTree.length; i < length; i++) {
	                applyTaskResource(taskTree[i], wrapTask);
	            }
	        },

	        _wrapResourceData: function(id) {
	            var that = this;
	            var result = [];
	            var resource;
	            var resources = this.resources.dataSource.view();
	            var assignments = this.assignments.dataSource.view();
	            var taskAssignments = new Query(assignments).filter({
	                field: that.assignments.dataTaskIdField,
	                operator: "eq",
	                value: id
	            }).toArray();
	            var valuePerResource = function(id) {
	                var resourceValue = null;

	                new Query(taskAssignments).filter({
	                    field: that.assignments.dataResourceIdField,
	                    operator: "eq",
	                    value: id
	                }).select(function(assignment) {
	                    resourceValue += assignment.get(that.assignments.dataValueField);
	                });

	                return resourceValue;
	            };

	            for (var i = 0, length = resources.length; i < length; i++) {
	                resource = resources[i];
	                result.push({
	                    id: resource.get("id"),
	                    name: resource.get(that.resources.dataTextField),
	                    format: resource.get(that.resources.dataFormatField) || PERCENTAGE_FORMAT,
	                    value: valuePerResource(resource.id)
	                });
	            }

	            return result;
	        },

	        _syncDataSource: function() {
	            this._preventRefresh = false;
	            this._requestStart();
	            this.dataSource.sync();
	        },

	        _requestStart: function() {
	            this._progress(true);
	        },

	        _error: function() {
	            this._progress(false);
	        },

	        _progress: function(toggle) {
	            kendo.ui.progress(this.element, toggle);
	        },

	        _resizable: function() {
	            var that = this;
	            var wrapper = this.wrapper;
	            var ganttStyles = Gantt.styles;
	            var contentSelector = DOT + ganttStyles.gridContent;
	            var treeListWrapper = wrapper.find(DOT + ganttStyles.list);
	            var timelineWrapper = wrapper.find(DOT + ganttStyles.timeline);
	            var treeListWidth;
	            var timelineWidth;
	            var timelineScroll;

	            this._resizeDraggable = wrapper
	                .find(DOT + ganttStyles.splitBar)
	                .height(treeListWrapper.height())
	                .hover(function () {
	                    $(this).addClass(ganttStyles.splitBarHover);
	                }, function () {
	                    $(this).removeClass(ganttStyles.splitBarHover);
	                })
	                .end()
	                .kendoResizable({
	                    orientation: "horizontal",
	                    handle: DOT + ganttStyles.splitBar,
	                    "start": function () {
	                        treeListWidth = treeListWrapper.width();
	                        timelineWidth = timelineWrapper.width();
	                        timelineScroll = kendo.scrollLeft(timelineWrapper.find(contentSelector));
	                    },
	                    "resize": function(e) {
	                        var delta = e.x.initialDelta;

	                        if (kendo.support.isRtl(wrapper)) {
	                            delta *= -1;
	                        }

	                        if (treeListWidth + delta < 0 || timelineWidth - delta < 0) {
	                            return;
	                        }

	                        treeListWrapper.width(treeListWidth + delta);
	                        timelineWrapper.width(timelineWidth - delta);
	                        kendo.scrollLeft(timelineWrapper.find(contentSelector), (timelineScroll + delta));

	                        that.timeline.view()._renderCurrentTime();
	                    }
	                }).data("kendoResizable");
	        },

	        _scrollable: function() {
	            var that = this;
	            var ganttStyles = Gantt.styles;
	            var contentSelector = DOT + ganttStyles.gridContent;
	            var headerSelector = DOT + ganttStyles.gridHeaderWrap;
	            var timelineHeader = this.timeline.element.find(headerSelector);
	            var timelineContent = this.timeline.element.find(contentSelector);
	            var treeListHeader = this.list.element.find(headerSelector);
	            var treeListContent = this.list.element.find(contentSelector);

	            if (mobileOS) {
	                treeListContent.css("overflow-y", "auto");
	            }

	            timelineContent.on("scroll", function() {
	                that.scrollTop = this.scrollTop;
	                kendo.scrollLeft(timelineHeader, this.scrollLeft);
	                treeListContent.scrollTop(this.scrollTop);
	            });

	            treeListContent
	                .on("scroll", function() {
	                    kendo.scrollLeft(treeListHeader, this.scrollLeft);
	                })
	                .on("DOMMouseScroll" + NS + " mousewheel" + NS, function(e) {
	                    var scrollTop = timelineContent.scrollTop();
	                    var delta = kendo.wheelDeltaY(e);

	                    if (delta) {
	                        e.preventDefault();
	                        //In Firefox DOMMouseScroll event cannot be canceled
	                        $(e.currentTarget).one("wheel" + NS, false);

	                        timelineContent.scrollTop(scrollTop + (-delta));
	                    }
	                });
	        },

	        _navigatable: function() {
	            var that = this;
	            var navigatable = this.options.navigatable;
	            var editable = this.options.editable;
	            var ganttStyles = Gantt.styles;
	            var contentSelector = DOT + ganttStyles.gridContent;
	            var headerSelector = DOT + ganttStyles.gridHeaderWrap;
	            var headerTable = this.list.element.find(headerSelector).find("table");
	            var contentTable = this.list.element.find(contentSelector).find("table");
	            var isRtl = kendo.support.isRtl(this.wrapper);
	            var timelineContent = this.timeline.element.find(DOT + ganttStyles.gridContent);
	            var tables = headerTable.add(contentTable);
	            var attr = selector();
	            var cellIndex;
	            var expandState = {
	                collapse: false,
	                expand: true
	            };

	            var scroll = function(reverse) {
	                var width = that.timeline.view()._timeSlots()[0].offsetWidth;
	                kendo.scrollLeft(timelineContent, kendo.scrollLeft(timelineContent) + (reverse ? -width : width));
	            };

	            var scrollVertical = function(reverse) {
	                var height = that.timeline.view()._rowHeight;
	                timelineContent.scrollTop(timelineContent.scrollTop() + (reverse ? -height : height));
	            };

	            var moveVertical = function(method) {
	                var parent = that.current.parent("tr" + selector());
	                var index = that.current.index();
	                var sibling = parent[method]('tr:visible').first();

	                if (that.select().length !== 0) {
	                    that.clearSelection();
	                }

	                if (sibling.length !== 0) {
	                    that._current(sibling.children("td").eq(index));
	                    that._scrollTo(that.current);
	                } else {
	                    if (that.current.is("td") && method == "prevAll") {
	                        focusTable(headerTable);
	                    } else if (that.current.is("th") && method == "nextAll") {
	                        focusTable(contentTable);
	                    }
	                }
	            };
	            var moveHorizontal = function(method) {
	                var subling = that.current[method]();

	                if (subling.length !== 0) {
	                    that._current(subling);
	                    cellIndex = that.current.index();
	                }
	            };
	            var toggleExpandedState = function(value) {
	                var model = that.dataItem(that.current);

	                if (model.summary && model.expanded !== value) {
	                    model.set("expanded", value);
	                }
	            };
	            var deleteAction = function() {
	                var editable = that.options.editable;

	                if (!editable || editable.destroy === false || that.list.editor) {
	                    return;
	                }

	                var selectedTask = that.select();
	                var uid = kendo.attr("uid");

	                if (selectedTask.length) {
	                    that.removeTask(selectedTask.attr(uid));
	                }
	            };

	            $(this.wrapper)
	                .on("mousedown" + NS, "tr" + attr + ", div" + attr + ":not(" + DOT + ganttStyles.line + ")", function(e) {
	                    var currentTarget = $(e.currentTarget);
	                    var isInput = $(e.target).is(":button,a,:input,a>.k-icon,textarea,span.k-icon:not(.k-i-none),span.k-link,.k-input,.k-multiselect-wrap");
	                    var current;

	                    if (e.ctrlKey) {
	                        return;
	                    }

	                    if (navigatable) {
	                        if (currentTarget.is("tr")) {
	                            current = $(e.target).closest("td");
	                        } else {
	                            current = that.list
	                                .content.find("tr" + selector(currentTarget.attr(kendo.attr("uid"))) + " > td").first();
	                        }

	                        that._current(current);
	                    }

	                    if ((navigatable || editable) && !isInput) {
	                        that._focusTimeout = setTimeout(function() {
	                            focusTable(that.list.content.find("table"), true);
	                        }, 2);
	                    }
	                })

	                .on("keydown" + NS, function (e) {
	                    var key = e.keyCode;
	                    var that = this;
	                    var focusableItems = $(that._getToolbarItems());
	                    var idx = focusableItems.index(that.toolbar.find(DOT + ganttStyles.focused)[0]);
	                    if (idx === -1 && $(e.target).closest(DOT + ganttStyles.toolbar.views).length) {
	                        idx = focusableItems.index(that.toolbar.find(".k-gantt-views > .k-selected:visible, .k-views-dropdown:visible")[0]);
	                    }
	                    var itemToFocus = e.shiftKey ? focusableItems[idx -  1] : focusableItems[idx +  1];

	                    if (key === keys.F10) {
	                        that.toolbar.find(".k-button:visible").first().addClass(ganttStyles.focused).trigger("focus");
	                        e.preventDefault();
	                    } else if (key == keys.TAB && $(e.target).closest(DOT + ganttStyles.toolbar.toolbar).length) {
	                        that.toolbar.find(DOT + ganttStyles.focused).removeClass(ganttStyles.focused).trigger("blur");
	                        if (itemToFocus) {
	                            $(itemToFocus).addClass(ganttStyles.focused).trigger("focus");
	                            e.preventDefault();
	                            return;
	                        }
	                        if (this.list.element.is(":visible")) {
	                            this.list.element.find("table[role=treegrid]").trigger("focus");
	                        } else {
	                            this.element.find(DOT + ganttStyles.tasks)[0].focus();
	                        }
	                        e.preventDefault();
	                    }

	                }.bind(this));

	            if (navigatable !== true) {
	                contentTable
	                    .on("keydown" + NS, function(e) {
	                        if (e.keyCode == keys.DELETE) {
	                            deleteAction();
	                        }
	                    });

	                return;
	            }

	            tables
	                .on("focus" + NS, function() {
	                    var selector = this === contentTable.get(0) ? "td" : "th";
	                    var selection = that.select();
	                    var current = that.current || $((selection.length ? selection : this))
	                        .find(selector).eq((cellIndex || 0));

	                    that._current(current);
	                    $(that.toolbar.find(DOT + ganttStyles.focused)).removeClass(ganttStyles.focused);
	                })
	                .on("blur" + NS, function() {
	                    that._current();

	                    if (this == headerTable) {
	                        $(this).attr(TABINDEX, -1);
	                    }
	                })
	                .on("keydown" + NS, function(e) {
	                    var key = e.keyCode;
	                    var isCell;

	                    if (!that.current) {
	                        return;
	                    }

	                    isCell = that.current.is("td");

	                    switch (key) {
	                        case keys.RIGHT:
	                            e.preventDefault();
	                            if (e.altKey) {
	                                scroll();
	                            } else if (e.ctrlKey) {
	                                toggleExpandedState(isRtl ? expandState.collapse : expandState.expand);
	                            } else {
	                                moveHorizontal(isRtl ? "prev" : "next");
	                            }
	                            break;
	                        case keys.LEFT:
	                            e.preventDefault();
	                            if (e.altKey) {
	                                scroll(true);
	                            } else if (e.ctrlKey) {
	                                toggleExpandedState(isRtl ? expandState.expand : expandState.collapse);
	                            } else {
	                                moveHorizontal(isRtl ? "next" : "prev");
	                            }
	                            break;
	                        case keys.UP:
	                            e.preventDefault();
	                            if (e.altKey) {
	                                scrollVertical(true);
	                            } else {
	                                moveVertical("prevAll");
	                            }
	                            break;
	                        case keys.DOWN:
	                            e.preventDefault();
	                            if (e.altKey) {
	                                scrollVertical();
	                            } else {
	                                moveVertical("nextAll");
	                            }
	                            break;
	                        case keys.SPACEBAR:
	                            e.preventDefault();
	                            if (isCell) {
	                                that.select(that.current.closest("tr"));
	                            }
	                            break;
	                        case keys.ENTER:
	                            e.preventDefault();
	                            if (isCell) {
	                                if (that.options.editable && that.options.editable.update !== false) {
	                                    that.list._startEditHandler(that.current);
	                                    $(this).one("keyup", function(e) {
	                                        /* Stop the event propagation so that the list widget won't close its editor immediately */
	                                        e.stopPropagation();
	                                    });
	                                }
	                            } else {
	                                /* Sort */
	                                that.current
	                                    .children("a.k-link")
	                                    .click();
	                            }
	                            break;
	                        case keys.DELETE:
	                            if (isCell) {
	                                deleteAction();
	                            }
	                            break;
	                        default:
	                            if (key >= 49 && key <= 57 && e.target.tagName.toLowerCase() !== "input") {
	                               that.view(that.timeline._viewByIndex(key - 49));
	                            }
	                            break;
	                    }
	                });
	        },

	        _getToolbarItems: function () {
	            return this.toolbar.find("> .k-button:visible").toArray().concat(
	                this.toolbar.find(".k-views-dropdown:visible").toArray(),
	                this.toolbar.find(".k-gantt-views > .k-selected:visible").toArray()
	            );
	        },

	        _current: function(element) {
	            var ganttStyles = Gantt.styles;
	            var activeElement;

	            if (this.current && this.current.length) {
	                this.current
	                    .removeClass(ganttStyles.focusedCell)
	                    .removeAttr("id");
	            }

	            if (element && element.length) {
	                this.current = element
	                    .addClass(ganttStyles.focusedCell)
	                    .attr("id", ACTIVE_CELL);

	                activeElement = $(kendo._activeElement());

	                if (activeElement.is("table") && this.wrapper.find(activeElement).length > 0) {
	                    activeElement
	                        .removeAttr(ARIA_DESCENDANT)
	                        .attr(ARIA_DESCENDANT, ACTIVE_CELL);
	                }
	            } else {
	                this.current = null;
	            }
	        },

	        _dataBind: function() {
	            var that = this;

	            if (that.options.autoBind) {
	                this._preventRefresh = true;
	                this._preventDependencyRefresh = true;

	                var promises = $.map([
	                    this.dataSource,
	                    this.dependencies,
	                    this.resources.dataSource,
	                    this.assignments.dataSource
	                ],
	                function(dataSource) {
	                    return dataSource.fetch();
	                });

	                $.when.apply(null, promises)
	                    .done(function() {
	                        that._preventRefresh = false;
	                        that._preventDependencyRefresh = false;
	                        that.refresh();
	                    });
	            }
	        },

	        _resize: function() {
	            this._adjustDimensions();
	            this.timeline.view()._adjustHeight();
	            this.timeline.view()._renderCurrentTime();
	            this.list._adjustHeight();
	        },

	        _createPlannedTasksSwitch: function() {
	            var that = this;
	            var switchLabel = that.options.messages.plannedTasks.switchText;
	            var toggeSwitchWrap = $("<span class='k-gantt-planned-wrap'><label>" + switchLabel + "</label></span>");
	            var plannedToggle = new kendo.ui.Switch($("<input id='planned-switch' class='k-gantt-planned-switch'>"), {
	                checked: that.options.showPlannedTasks,
	                change: proxy(that._togglePlannedTasks, that),
	                messages: {
	                    checked: "",
	                    unchecked: ""
	                }
	            });

	            toggeSwitchWrap.append(plannedToggle.wrapper);

	            that.toggeSwitchWrap = toggeSwitchWrap;
	            that.toggleSwitch = plannedToggle;
	        },

	        _togglePlannedTasks: function(e) {
	            var timeline = this.timeline;

	            if (!this.trigger("togglePlannedTasks", { showPlannedTasks: !timeline.options.showPlannedTasks })) {
	                this.wrapper.toggleClass(ganttStyles.plannedTasks);
	                timeline._setPlanned(!timeline.options.showPlannedTasks);
	                timeline._render(this.dataSource.taskTree());
	                timeline._renderDependencies(this.dependencies.view());
	            } else {
	                e.preventDefault();
	            }
	        }
	    });

	    if (kendo.PDFMixin) {
	        kendo.PDFMixin.extend(Gantt.fn);

	        Gantt.fn._drawPDF = function() {
	            var ganttStyles = Gantt.styles;
	            var listTableWidth = this.wrapper.find(DOT + ganttStyles.list + " " + DOT + ganttStyles.gridContent + ">table").width();
	            var content = this.wrapper.clone();

	            content.find(DOT + ganttStyles.list).css("width", listTableWidth);

	            return this._drawPDFShadow({
	                content: content
	            }, {
	                avoidLinks: this.options.pdf.avoidLinks
	            });
	        };
	    }

	    kendo.ui.plugin(Gantt);

	    extend(true, Gantt, { styles: ganttStyles });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ }),

/***/ 1287:
/***/ (function(module, exports) {

	module.exports = require("./kendo.switch");

/***/ }),

/***/ 1288:
/***/ (function(module, exports) {

	module.exports = require("./kendo.gantt.data");

/***/ }),

/***/ 1289:
/***/ (function(module, exports) {

	module.exports = require("./kendo.gantt.editors");

/***/ }),

/***/ 1290:
/***/ (function(module, exports) {

	module.exports = require("./kendo.gantt.list");

/***/ }),

/***/ 1291:
/***/ (function(module, exports) {

	module.exports = require("./kendo.gantt.timeline");

/***/ }),

/***/ 1292:
/***/ (function(module, exports) {

	module.exports = require("./kendo.pdf");

/***/ })

/******/ });