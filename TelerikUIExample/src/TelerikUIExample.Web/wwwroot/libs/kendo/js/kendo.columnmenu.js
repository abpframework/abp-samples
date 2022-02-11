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

	module.exports = __webpack_require__(1122);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1058:
/***/ (function(module, exports) {

	module.exports = require("./kendo.popup");

/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1058), __webpack_require__(1123), __webpack_require__(1124), __webpack_require__(1125) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "columnmenu",
	    name: "Column Menu",
	    category: "framework",
	    depends: [ "popup", "filtermenu", "menu", 'expansionpanel' ],
	    advanced: true
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        proxy = $.proxy,
	        extend = $.extend,
	        grep = $.grep,
	        map = $.map,
	        inArray = $.inArray,
	        Comparer = kendo.data.Comparer,
	        ACTIVE = "k-state-selected",
	        ASC = "asc",
	        DESC = "desc",
	        CHANGE = "change",
	        INIT = "init",
	        OPEN = "open",
	        SELECT = "select",
	        STICK = "stick",
	        UNSTICK= "unstick",
	        POPUP = "kendoPopup",
	        FILTERMENU = "kendoFilterMenu",
	        MENU = "kendoMenu",
	        EXPANSIONPANEL = "kendoExpansionPanel",
	        NS = ".kendoColumnMenu",
	        Widget = ui.Widget;

	    function trim(text) {
	        return kendo.trim(text).replace(/&nbsp;/gi, "");
	    }

	    function toHash(arr, key) {
	        var result = {};
	        var idx, len, current;
	        for (idx = 0, len = arr.length; idx < len; idx ++) {
	            current = arr[idx];
	            result[current[key]] = current;
	        }
	        return result;
	    }

	    function columnsGroupFilterHandler(column) {
	        return this.columns.indexOf(column.title) >= 0 || this.columns.indexOf(column.field) >= 0;
	    }

	    function leafColumns(columns) {
	        var result = [];

	        for (var idx = 0; idx < columns.length; idx++) {
	            if (!columns[idx].columns) {
	                result.push(columns[idx]);
	                continue;
	            }
	            result = result.concat(leafColumns(columns[idx].columns));
	        }

	        return result;
	    }

	    function attrEquals(attrName, attrValue) {
	        return "[" + kendo.attr(attrName) + "='" + (attrValue || "").replace(/'/g, "\"") + "']";
	    }

	    function insertElementAt(index, element, container) {
	        if (index > 0) {
	            element.insertAfter(container.children().eq(index - 1));
	        } else {
	            container.prepend(element);
	        }
	    }

	    function columnOccurrences(columns) {
	        var columnDict = {};
	        var signature;

	        for (var i = 0; i < columns.length; i++) {
	            signature = JSON.stringify(columns[i]);

	            if (columnDict[signature]) {
	                columnDict[signature].push(i);
	            } else {
	                columnDict[signature] = [i];
	            }
	        }

	        return columnDict;
	    }

	    function oldColumnOccurrences(renderedListElements, checkBoxes) {
	        var indexAttr = kendo.attr("index");
	        var fieldAttr = kendo.attr("field");
	        var columnDict = {};
	        var signature;
	        var columCheckbox;
	        var index;
	        var field;
	        var title;

	        for (var j = 0; j < renderedListElements.length; j++) {
	            columCheckbox = checkBoxes.eq(j);
	            index = parseInt(columCheckbox.attr(indexAttr), 10);
	            field = columCheckbox.attr(fieldAttr);
	            title = columCheckbox.attr("title");
	            signature = field ? field : title;

	            if (columnDict[signature]) {
	                columnDict[signature].push(index);
	            } else {
	                columnDict[signature] = [index];
	            }
	        }

	        return columnDict;
	    }

	    var ColumnMenu = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            options = options || {};
	            options.componentType = options.componentType || "classic";
	            Widget.fn.init.call(that, element, options);

	            element = that.element;
	            options = that.options;
	            that.owner = options.owner;
	            that.dataSource = options.dataSource;

	            that.field = element.attr(kendo.attr("field"));
	            that.title = element.attr(kendo.attr("title"));

	            that.appendTo = $(options.appendTo);
	            that.link = that._createLink();

	            that.wrapper = $('<div class="k-column-menu"/>');

	            that._refreshHandler = proxy(that.refresh, that);

	            that.dataSource.bind(CHANGE, that._refreshHandler);
	        },

	        _init: function() {
	            var that = this;

	            that.pane = that.options.pane;
	            if (that.pane) {
	                that._isMobile = true;
	            }

	            if (that._isMobile) {
	                that._createMobileMenu();
	            } else {
	                that._createMenu();
	            }

	            that.owner._muteAngularRebind(function() {
	                that._angularItems("compile");
	            });

	            that._sort();

	            that._columns();

	            that._filter();

	            that._lockColumns();

	            that._stickyColumns();

	            that.trigger(INIT, { field: that.field, container: that.wrapper });
	        },

	        events: [ INIT, OPEN, "sort", "filtering", STICK, UNSTICK ],

	        options: {
	            name: "ColumnMenu",
	            messages: {
	                sortAscending: "Sort Ascending",
	                sortDescending: "Sort Descending",
	                filter: "Filter",
	                column: "Column",
	                columns: "Columns",
	                columnVisibility: "Column Visibility",
	                clear: "Clear",
	                cancel: "Cancel",
	                done: "Done",
	                settings: "Edit Column Settings",
	                lock: "Lock Column",
	                unlock: "Unlock Column",
	                stick: "Stick Column",
	                unstick: "Unstick Column",
	                setColumnPosition: "Set Column Position",
	                apply: "Apply",
	                reset: "Reset",
	                buttonTitle: "{0} edit column settings"
	            },
	            filter: "",
	            columns: true,
	            sortable: true,
	            filterable: true,
	            animations: {
	                left: "slide"
	            },
	            encodeTitles: false,
	            componentType: "classic",
	            appendTo: null
	        },

	        _createMenu: function() {
	            var that = this,
	                options = that.options,
	                columns = that._ownerColumns(),
	                flattenMenuCols,
	                menuTemplate;

	            if (that._hasGroups()) {
	                columns = that._groupColumns(columns);
	                flattenMenuCols = that._flattenMenuCols(columns);
	                if (flattenMenuCols.length !== that.owner.columns.length) {
	                    that._syncMenuCols(flattenMenuCols, that.owner.columns);
	                }
	            }

	            if (that._isModernComponentType()) {
	                menuTemplate = kendo.template(modernTemplate);
	            } else {
	                menuTemplate = kendo.template(template);
	            }

	            that.wrapper.html(menuTemplate({
	                uid: kendo.guid(),
	                ns: kendo.ns,
	                messages: options.messages,
	                sortable: options.sortable,
	                filterable: options.filterable,
	                columns: columns,
	                showColumns: options.columns,
	                hasLockableColumns: options.hasLockableColumns,
	                hasStickableColumns: options.hasStickableColumns,
	                encodeTitles: options.encodeTitles,
	                omitWrapAttribute: kendo.attr("omit-wrap")
	            }));

	            that.popup = that.wrapper[POPUP]({
	                anchor: that.link,
	                copyAnchorStyles: false,
	                open: proxy(that._open, that),
	                activate: proxy(that._activate, that),
	                deactivate: proxy(that._deactivate, that),
	                close: function(e) {
	                    if (that.menu) {
	                        that.menu._closing = e.sender.element;
	                    }
	                    if (that.options.closeCallback) {
	                        that.options.closeCallback(that.element);
	                    }
	                }
	            }).data(POPUP);

	            if (that._isModernComponentType()) {
	                that.popup.element.addClass("k-grid-columnmenu-popup");
	                that._createExpanders();
	            } else {
	                that.menu = that.wrapper.children()[MENU]({
	                    orientation: "vertical",
	                    closeOnClick: false,
	                    open: function() {
	                        that._updateMenuItems();
	                    }
	                }).data(MENU);
	            }
	        },

	        _createLink: function() {
	            var that = this,
	                element = that.element,
	                appendTarget = that.appendTo.length ? element.find(that.appendTo) : element,
	                link = element.find(".k-header-column-menu"),
	                title = kendo.format(that.options.messages.buttonTitle, that.title || that.field);

	            if (!link[0]) {
	                element.addClass("k-filterable");

	                link = appendTarget
	                    .append('<a class="k-header-column-menu" href="#" title="' +
	                                title + '" aria-label="' +
	                                title + '"><span class="k-icon k-i-more-vertical"></span></a>')
	                    .find(".k-header-column-menu");
	            }

	            link.attr("tabindex", -1)
	                .on("click" + NS, proxy(that._click, that));

	            return link;
	        },

	        _createExpanders: function() {
	            var that = this;
	            var options = that.options;
	            var expanderOptions = {
	                expanded: false,
	                headerClass: "k-columnmenu-item",
	                useBareTemplate: true
	            };

	            that.wrapper.find(".k-columns-item")[EXPANSIONPANEL]($.extend(true, {}, expanderOptions,{
	                title:'<span class="k-icon k-i-columns"></span><span>' + options.messages.columns + '</span>'
	            }));
	            that.wrapper.find(".k-column-menu-filter")[EXPANSIONPANEL]($.extend(true, {}, expanderOptions,{
	                title:'<span class="k-icon k-i-filter"></span><span>' + options.messages.filter + '</span>'
	            }));
	            that.wrapper.find(".k-column-menu-position")[EXPANSIONPANEL]($.extend(true, {}, expanderOptions,{
	                title:'<span class="k-icon k-i-set-column-position"></span><span>' + options.messages.setColumnPosition + '</span>'
	            }));
	        },

	        _syncMenuCols: function (menuCols, ownerCols) {
	            var length = ownerCols.length;
	            var ownerCol;
	            var menuColsFields = menuCols.map(function (col) {
	                return col.field;
	            });

	            for (var i = 0; i < length; i++) {
	                ownerCol = ownerCols[i];
	                if (menuColsFields.indexOf(ownerCol.field) < 0) {
	                    ownerCol.menu = false;
	                }
	            }
	        },

	        _flattenMenuCols: function (cols) {
	            var result = [];
	            var length = cols.length;

	            for (var i = 0; i < length; i++) {
	                if (cols[i].columns) {
	                    result = result.concat(this._flattenMenuCols(cols[i].columns));
	                } else if (!cols[i].groupHeader) {
	                    result.push(cols[i]);
	                }
	            }
	            return result;
	        },

	        _groupColumns: function(columns, nest) {
	            var result = [];
	            var groups = this.options.columns.groups;
	            var length = groups.length;
	            var i;
	            var currGroup;
	            var filterHandler;
	            var group;
	            var groupColumns;

	            for (i = 0; i < length; i++) {
	                currGroup = groups[i];
	                filterHandler = columnsGroupFilterHandler.bind(currGroup);
	                group = { title: currGroup.title, groupHeader: true };
	                groupColumns = columns.filter(filterHandler);
	                result.push(group);

	                if (nest) {
	                    group.columns = groupColumns;
	                } else {
	                    result = result.concat(groupColumns);
	                }
	            }

	            return result;
	        },

	        _hasGroups: function() {
	            return this.options.columns && this.options.columns.groups && this.options.columns.groups.length;
	        },

	        _isModernComponentType: function() {
	            return this.options.componentType === 'modern' && !this._isMobile;
	        },

	        _deactivate: function() {
	            if (this.menu) {
	                this.menu._closing = false;
	            }
	        },

	        _createMobileMenu: function() {
	            var that = this,
	                options = that.options,
	                columns = that._ownerColumns(),
	                groups,
	                flattenMenuCols;

	            if (that._hasGroups()) {
	                groups = that._groupColumns(columns, true);
	                flattenMenuCols = that._flattenMenuCols(groups);
	                if (flattenMenuCols.length !== that.owner.columns.length) {
	                    that._syncMenuCols(flattenMenuCols, that.owner.columns);
	                }
	            }

	            var html = kendo.template(mobileTemplate)({
	                ns: kendo.ns,
	                field: that.field,
	                title: that.title || that.field,
	                messages: options.messages,
	                sortable: options.sortable,
	                filterable: options.filterable,
	                columns: columns,
	                showColumns: options.columns,
	                hasLockableColumns: options.hasLockableColumns,
	                hasStickableColumns: options.hasStickableColumns,
	                hasGroups: that._hasGroups(),
	                groups: groups
	            });

	            that.view = that.pane.append(html);
	            that.view.state = { columns: {} };

	            that.wrapper = that.view.element.find(".k-column-menu");

	            that.menu = new MobileMenu(that.wrapper.children(), {
	                pane: that.pane,
	                columnMenu: that
	            });

	            // The toggle animation of the switches should not propagate to the view
	            that.menu.element.on("transitionend" + NS, function(e) {
	                e.stopPropagation();
	            });

	            var viewElement = that.view.wrapper && that.view.wrapper[0] ? that.view.wrapper : that.view.element;

	            viewElement.on("click", ".k-header-done", function(e) {
	                e.preventDefault();

	                that.menu._applyChanges();
	                that.menu._cancelChanges(false);
	                that.close();
	            });

	            viewElement.on("click", ".k-header-cancel", function(e) {
	                e.preventDefault();

	                that.menu._cancelChanges(true);
	                that.close();
	            });

	            that.view.bind("showStart", function() {
	                var view = that.view || { columns: {} };

	                if (that.options.hasLockableColumns) {
	                    that._updateLockedColumns();
	                }

	                if (that.options.hasStickableColumns) {
	                    that._updateStickyColumns();
	                }

	                if (view.element.find(".k-sort-asc.k-state-selected").length) {
	                    view.state.initialSort = "asc";
	                } else if (view.element.find(".k-sort-desc.k-state-selected").length) {
	                    view.state.initialSort = "desc";
	                }
	            });
	        },

	        _angularItems: function(action) {
	            var that = this;
	            that.angular(action, function(){
	                var items = that.wrapper.find(".k-columns-item input[" + kendo.attr("field") + "]").map(function(){
	                    return $(this).closest("li");
	                });
	                var data = map(that._ownerColumns(), function(col){
	                    return { column: col._originalObject };
	                });
	                return {
	                    elements: items,
	                    data: data
	                };
	            });
	        },

	        destroy: function() {
	            var that = this;

	            that._angularItems("cleanup");

	            Widget.fn.destroy.call(that);

	            if (that.filterMenu) {
	                that.filterMenu.destroy();
	            }

	            if (that._refreshHandler) {
	                that.dataSource.unbind(CHANGE, that._refreshHandler);
	            }

	            if (that.options.columns && that.owner) {
	                if (that._updateColumnsMenuHandler) {
	                    that.owner.unbind("columnShow", that._updateColumnsMenuHandler);
	                    that.owner.unbind("columnHide", that._updateColumnsMenuHandler);
	                }

	                if (that._updateColumnsLockedStateHandler) {
	                    that.owner.unbind("columnLock", that._updateColumnsLockedStateHandler);
	                    that.owner.unbind("columnUnlock", that._updateColumnsLockedStateHandler);
	                }
	            }

	            if (that.menu) {
	                that.menu.element.off(NS);
	                that.menu.destroy();
	            }

	            that.wrapper.off(NS);

	            if (that.popup) {
	                that.popup.destroy();
	            }

	            if (that.view) {
	                that.view.purge();
	            }

	            that.link.off(NS);
	            that.owner = null;
	            that.wrapper = null;
	            that.element = null;
	        },

	        close: function() {
	            if (this.menu) {
	                this.menu.close();
	            }
	            if (this.popup) {
	                this.popup.close();
	                this.popup.element.off("keydown" + NS);
	            }
	        },

	        _click: function(e) {
	            var that = this;

	            e.preventDefault();
	            e.stopPropagation();

	            var options = this.options;

	            if (options.filter && this.element.is(!options.filter)) {
	                return;
	            }

	            if (!this.popup && !this.pane) {
	                this._init();
	            } else {
	                that._updateMenuItems();
	            }

	            if (this._isMobile) {
	                this.pane.navigate(this.view, this.options.animations.left);
	            } else {
	                this.popup.toggle();
	            }
	        },

	        _updateMenuItems: function() {
	            var that = this;
	            if (that.options.columns) {
	                that._setMenuItemsVisibility();
	                if (!that.options.columns.sort && !that.options.columns.groups) {
	                    that._reorderMenuItems();
	                } else {
	                    that._updateDataIndexes();
	                }
	            }
	        },

	        _setMenuItemsVisibility: function() {
	            var that = this;

	            that._eachRenderedMenuItem(function(index, column, renderedListElement) {
	                if (column.matchesMedia === false) {
	                    renderedListElement.hide();
	                } else {
	                    renderedListElement.show();
	                }
	            });
	        },

	        _reorderMenuItems: function() {
	            var that = this;

	            that._eachRenderedMenuItem(function(index, column, renderedListElement, renderedList) {
	                if (renderedListElement[0] && renderedListElement.index() !== index) {
	                    insertElementAt(index, renderedListElement, renderedList);
	                }
	            });
	            that._updateDataIndexes();
	        },

	        _updateDataIndexes: function () {
	            var that = this;
	            var renderedList = that._isMobile && that.view ?
	                $(that.view.element).find(".k-columns-item").children("ul") :
	                $(that.wrapper).find(".k-menu-group").first(),
	                mappedColumns = that._ownerColumns(true).map(function(x) {
	                    return x.title || x.field;
	                });

	            renderedList.find("span." + (this._isMobile ? "k-listgroup-form-field-wrapper" : "k-menu-link") +
	                " input").each(function (i) {
	                var columns;
	                var index;
	                if (that.options.columns.sort) {
	                    columns = that._ownerColumns();
	                    index = mappedColumns.indexOf(columns[i].title);
	                    $(this).attr(kendo.attr("index"), index);
	                } else {
	                    $(this).attr(kendo.attr("index"), i);
	                }
	            });
	        },

	        _eachRenderedMenuItem: function(callback) {
	            var that = this;
	            var renderedListElement;
	            var duplicateColumnIndex;
	            var fieldValue;
	            var currentColumn;
	            var columns = grep(leafColumns(that.owner.columns), function(col) {
	                var result = true,
	                    title = trim(col.title || "");

	                if (col.menu === false || (!col.field && !title.length)) {
	                    result = false;
	                }

	                return result;
	            }).map(function(col) {
	                return  {
	                     field: col.field,
	                     title: col.title,
	                     matchesMedia: col.matchesMedia
	                   };
	            });
	            var renderedList = that._getRenderedList();
	            var renderedListElements = that._getRenderedListElements(renderedList);
	            var oldOccurances = oldColumnOccurrences(renderedListElements, renderedList.find("input[type=checkbox]"));
	            var columnOccurrence = columnOccurrences(columns);
	            var columnElements;

	            for (var i = 0; i < columns.length; i++) {
	                currentColumn = columns[i];
	                fieldValue = currentColumn.field ? currentColumn.field : currentColumn.title;
	                duplicateColumnIndex = $.inArray(i, columnOccurrence[JSON.stringify(currentColumn)]);
	                columnElements = $();

	                for (var idx = 0; idx < oldOccurances[fieldValue].length; idx++) {
	                    columnElements = columnElements.add(renderedListElements.eq(oldOccurances[fieldValue][idx]));
	                }
	                renderedListElement = columnElements.find(attrEquals("field", fieldValue)).closest(that._isModernComponentType() ? "label" : "li").eq(duplicateColumnIndex);
	                callback(i, currentColumn, renderedListElement, renderedList);
	            }
	        },

	        _getRenderedList: function() {
	            var that = this;

	            if (that._isModernComponentType()) {
	                return $(that.wrapper).find('.k-columns-item');
	            } else {
	                return that._isMobile && that.view ?
	                $(that.view.element).find(".k-columns-item").children("ul") :
	                $(that.wrapper).find(".k-menu-group").first();
	            }
	        },

	        _getRenderedListElements: function(renderedList) {
	            var that = this;

	            if (that._isModernComponentType()) {
	                return renderedList.find('label');
	            } else {
	                return renderedList.find("span." + (this._isMobile ? "k-listgroup-form-field-wrapper" : "k-menu-link"));
	            }
	        },

	        _open: function() {
	            var that = this;
	            $(".k-column-menu").not(that.wrapper).each(function() {
	                $(this).data(POPUP).close();
	            });
	            that.popup.element.on("keydown" + NS, function(e) {
	                if (that._isModernComponentType() && e.keyCode === kendo.keys.ENTER) {
	                    $(e.target).click();
	                }
	                if (e.keyCode == kendo.keys.ESC) {
	                    that.close();
	                }
	            });

	            if (that.options.hasLockableColumns) {
	                that._updateLockedColumns();
	            }

	            if (that.options.hasStickableColumns) {
	                that._updateStickyColumns();
	            }
	        },

	        _activate: function() {
	            if (this.menu) {
	                this.menu.element.trigger("focus");
	            } else{
	                this.popup.element.find('[tabindex=0]').eq(0).trigger("focus");
	            }

	            this.trigger(OPEN, { field: this.field, container: this.wrapper });
	        },

	        _ownerColumns: function(omitSort) {
	            var columns = leafColumns(this.owner.columns),
	                menuColumns = grep(columns, function(col) {
	                    var result = true,
	                        title = trim(col.title || "");

	                    if (col.menu === false || (!col.field && !title.length)) {
	                        result = false;
	                    }

	                    return result;
	                }),
	                result,
	                sort = this.options.columns.sort;

	            result = map(menuColumns, function(col) {
	                return {
	                    originalField: col.field,
	                    field: col.field || col.title,
	                    title: col.title || col.field,
	                    hidden: col.hidden,
	                    matchesMedia: col.matchesMedia,
	                    index: inArray(col, columns),
	                    locked: !!col.locked,
	                    _originalObject: col,
	                    uid: col.headerAttributes.id
	                };
	            });

	            if (sort && !omitSort) {
	                result.sort(Comparer.create({ field: "title", dir: sort }));
	            }

	            return result;
	        },

	        _sort: function() {
	            var that = this;

	            if (that.options.sortable) {
	                that.refresh();

	                if (that._isModernComponentType()) {
	                    that.wrapper.on("click" + NS, ".k-sort-asc, .k-sort-desc", proxy(that._sortHandler, that));
	                } else {
	                    that.menu.bind(SELECT, proxy(that._sortHandler, that));
	                }
	            }
	        },

	        _sortHandler: function(e) {
	            var that = this,
	                item = e.item ? $(e.item) : $(e.target),
	                dir;

	            if (item.hasClass("k-sort-asc")) {
	                dir = ASC;
	            } else if (item.hasClass("k-sort-desc")) {
	                dir = DESC;
	            }

	            if (!dir) {
	                return;
	            }

	            that._getSortItemsContainer(item).find(".k-sort-" + (dir == ASC ? DESC : ASC)).removeClass(ACTIVE);

	            that._sortDataSource(item, dir);

	            if (!that._isMobile) {
	                that.close();
	            }
	        },

	        _getSortItemsContainer: function(item) {
	            return this._isModernComponentType() ? item.parents('.k-columnmenu-item-wrapper').first() : item.parent();
	        },

	        _sortDataSource: function(item, dir) {
	            var that = this,
	                sortable = that.options.sortable,
	                compare = sortable.compare === null ? undefined : sortable.compare,
	                dataSource = that.dataSource,
	                idx,
	                length,
	                sort = dataSource.sort() || [];

	            var removeClass = item.hasClass(ACTIVE) && sortable && sortable.allowUnsort !== false;

	            dir = !removeClass ? dir : undefined;

	            if (that.trigger("sort", { sort: { field: that.field, dir: dir, compare: compare } })) {
	                return;
	            }

	            if (removeClass) {
	                item.removeClass(ACTIVE);
	            } else {
	                item.addClass(ACTIVE);
	            }

	            if (sortable.mode === "multiple") {
	                for (idx = 0, length = sort.length; idx < length; idx++) {
	                    if (sort[idx].field === that.field) {
	                        sort.splice(idx, 1);
	                        break;
	                    }
	                }
	                sort.push({ field: that.field, dir: dir, compare: compare });
	            } else {
	                sort = [ { field: that.field, dir: dir, compare: compare} ];
	            }

	            dataSource.sort(sort);
	        },

	        _columns: function() {
	            var that = this;

	            if (that.options.columns) {

	                that._updateColumnsMenu();

	                that._updateColumnsMenuHandler = proxy(that._updateColumnsMenu, that);

	                that.owner.bind(["columnHide", "columnShow"], that._updateColumnsMenuHandler);

	                that._updateColumnsLockedStateHandler = proxy(that._updateColumnsLockedState, that);

	                that.owner.bind(["columnUnlock", "columnLock" ], that._updateColumnsLockedStateHandler);

	                if (that._isModernComponentType()) {
	                    that.wrapper.on("click" + NS, '.k-columns-item .k-button:not(.k-button-solid-primary)', function () {
	                        that._updateColumnsMenu();
	                    });
	                    that.wrapper.on("click" + NS, '.k-columns-item .k-button.k-button-solid-primary', proxy(that._applyColumnVisibility, that));
	                    that.wrapper.on("click" + NS, '.k-columns-item .k-checkbox', function () {
	                        that._updateColumnsMenu(true);
	                    });
	                } else {
	                    that.menu.bind(SELECT, function(e) {
	                        var item = $(e.item),
	                            input,
	                            column,
	                            uidAttr = kendo.attr("uid"),
	                            colIdx = 0,
	                            columns = grep(leafColumns(that.owner.columns), function(col) {
	                                var result = true,
	                                    title = trim(col.title || "");

	                                if (col.menu === false || (!col.field && !title.length)) {
	                                    result = false;
	                                }

	                                return result;
	                            });

	                        if (that._isMobile) {
	                            e.preventDefault();
	                        }

	                        if (!item.parent().closest("li.k-columns-item")[0]) {
	                            return;
	                        }

	                        input = item.find(":checkbox");
	                        if (input.attr("disabled")) {
	                            return;
	                        }

	                        colIdx = columns.map(function (col) {
	                            return col.headerAttributes.id;
	                        }).indexOf(input.attr(uidAttr));
	                        column = columns[colIdx];

	                        if (column.hidden === true) {
	                            that.owner.showColumn(column);
	                        } else {
	                            that.owner.hideColumn(column);
	                        }
	                    });
	                }
	            }
	        },

	        _applyColumnVisibility: function () {
	            var that = this;
	            var fieldAttr = kendo.attr("field");
	            var uidAttr = kendo.attr("uid");
	            var checkboxes = that.wrapper.find(".k-columns-item input[" + fieldAttr + "]");
	            var columnsInMenu = grep(leafColumns(this.owner.columns), function(col) {
	                var result = true,
	                    title = trim(col.title || "");

	                if (col.menu === false || (!col.field && !title.length)) {
	                    result = false;
	                }

	                return result;
	            });
	            var length = checkboxes.length;
	            var idx;
	            var colIdx;
	            var checkbox;
	            var column;

	            that.owner.unbind("columnShow", that._updateColumnsMenuHandler);
	            that.owner.unbind("columnHide", that._updateColumnsMenuHandler);

	            for (idx = 0; idx < length; idx++) {
	                checkbox = $(checkboxes[idx]);
	                colIdx = columnsInMenu.map(function (col) {
	                    return col.headerAttributes.id;
	                }).indexOf(checkbox.attr(uidAttr));
	                column = columnsInMenu[colIdx];

	               if (checkbox.is(":checked") && column.hidden) {
	                   that.owner.showColumn(column);
	               } else if (checkbox.is(":not(:checked)") && !column.hidden) {
	                   that.owner.hideColumn(column);
	               }
	            }
	            that.popup.close();
	            that.owner.bind(["columnHide", "columnShow"], that._updateColumnsMenuHandler);
	        },

	        _updateColumnsMenu: function(omitCheckState) {
	            var idx, length, current, checked, locked, that = this;
	            var fieldAttr = kendo.attr("field"),
	                lockedAttr = kendo.attr("locked"),
	                uidAttr = kendo.attr("uid"),
	                columnIndexMap = {},
	                columnsCount = 0,
	                colIdx = 0;
	                omitCheckState = omitCheckState === true;
	                var columnsInMenu = grep(leafColumns(this.owner.columns), function(col, idx) {
	                    var result = true,
	                        title = trim(col.title || "");

	                    if (col.menu === false || (!col.field && !title.length)) {
	                        result = false;
	                    }

	                    if (result) {
	                        columnIndexMap[idx] = columnsCount;
	                        columnsCount++;
	                    }

	                    return result;
	                }),
	                visibleFields = grep(this._ownerColumns(), function(field) {
	                    if (omitCheckState) {
	                         return that.wrapper.find("[role='menuitemcheckbox'] [" + uidAttr + "='" + field.uid + "']").prop('checked');
	                    }
	                    return !field.hidden && field.matchesMedia !== false;
	                }),
	                visibleDataFields = grep(visibleFields, function(field) {
	                    return field.originalField;
	                }),
	                lockedCount = grep(visibleDataFields, function(col) {
	                    return col.locked === true;
	                }).length,
	                nonLockedCount = grep(visibleDataFields, function(col) {
	                    return col.locked !== true;
	                }).length,
	                columnsNotInMenu = grep(this.owner.columns, function(col) {
	                    return col.menu === false;
	                }),
	                hiddenColumnsNotInMenu = grep(columnsNotInMenu, function(col) {
	                    return col.hidden;
	                });

	            this.wrapper.find("[role='menuitemcheckbox']").attr("aria-checked", false);

	            var checkboxes = this.wrapper
	                .find(".k-columns-item input[" + fieldAttr + "]")
	                .prop("disabled", false);

	            if (!omitCheckState) {
	                checkboxes.prop("checked", false);
	            }

	            var switchWidget;

	            for (idx = 0, length = checkboxes.length; idx < length; idx ++) {
	                current = checkboxes.eq(idx);
	                locked = current.attr(lockedAttr) === "true";
	                checked = false;
	                switchWidget = current.data("kendoSwitch");
	                colIdx = columnsInMenu.map(function (col) {
	                    return col.headerAttributes.id;
	                }).indexOf(current.attr(uidAttr));

	                checked = omitCheckState ? current.prop('checked') : !columnsInMenu[colIdx].hidden && columnsInMenu[colIdx].matchesMedia !== false;
	                current.prop("checked", checked);

	                if (switchWidget) {
	                    switchWidget.enable(true);
	                    switchWidget.check(checked);
	                }

	                current.closest("[role='menuitemcheckbox']").attr("aria-checked", checked);

	                if (checked) {
	                    if (lockedCount == 1 && locked) {
	                        current.prop("disabled", true);

	                        if (switchWidget) {
	                            switchWidget.enable(false);
	                        }
	                    }

	                    if ((columnsNotInMenu.length === 0 || (columnsNotInMenu.length ===  hiddenColumnsNotInMenu.length)) && nonLockedCount == 1 && !locked) {
	                        current.prop("disabled", true);

	                        if (switchWidget) {
	                            switchWidget.enable(false);
	                        }
	                    }
	                }
	            }
	        },

	        _updateColumnsLockedState: function() {
	            var idx, length, current, column;
	            var fieldAttr = kendo.attr("field");
	            var lockedAttr = kendo.attr("locked");
	            var columns = toHash(this._ownerColumns(), "field");
	            var checkboxes = this.wrapper
	                .find(".k-columns-item input[type=checkbox]");

	            for (idx = 0, length = checkboxes.length; idx < length; idx ++ ) {
	                current = checkboxes.eq(idx);
	                column = columns[current.attr(fieldAttr)];
	                if (column) {
	                    current.attr(lockedAttr, column.locked);
	                }
	            }

	            this._updateColumnsMenu();
	        },

	        _filter: function() {
	            var that = this,
	                widget = FILTERMENU,
	                options = that.options;

	            if (options.filterable !== false) {

	                if (options.filterable.multi) {
	                    widget = "kendoFilterMultiCheck";
	                    if (options.filterable.dataSource) {
	                        options.filterable.checkSource = options.filterable.dataSource;
	                        delete options.filterable.dataSource;
	                    }
	                }
	                that.filterMenu = that.wrapper.find(".k-filterable")[widget](
	                    extend(true, {}, {
	                        appendToElement: true,
	                        dataSource: options.dataSource,
	                        values: options.values,
	                        field: that.field,
	                        title: that.title,
	                        change: function(e) {
	                            if (that.trigger("filtering", { filter: e.filter, field: e.field })) {
	                                e.preventDefault();
	                            }
	                        },
	                        componentType: that.options.componentType,
	                        cycleForm: !that._isModernComponentType()
	                    },
	                    options.filterable)
	                    ).data(widget);

	                if (that._isMobile) {
	                    that.menu.bind(SELECT, function(e) {
	                        var item = $(e.item);

	                        if (item.hasClass("k-filter-item")) {
	                            that.pane.navigate(that.filterMenu.view, that.options.animations.left);
	                        }
	                    });
	                }
	            }
	        },

	        _lockColumns: function() {
	            var that = this;

	            if (that._isModernComponentType()) {
	                that.wrapper.on("click" + NS, ".k-lock, .k-unlock", proxy(that._lockableHandler, that));
	            } else {
	                that.menu.bind(SELECT, proxy(that._lockableHandler, that));
	            }
	        },

	        _lockableHandler: function(e) {
	            var that = this;
	            var item = e.item ? $(e.item) : $(e.target);

	            if (item.hasClass("k-lock")) {
	                that.owner.lockColumn(that.field);
	                if (!that._isMobile) {
	                    that.close();
	                }
	            } else if (item.hasClass("k-unlock")) {
	                that.owner.unlockColumn(that.field);
	                if (!that._isMobile) {
	                    that.close();
	                }
	            }
	        },

	        _stickyColumns: function() {
	            var that = this;

	            if (that._isModernComponentType()) {
	                that.wrapper.on("click" + NS, ".k-stick, .k-unstick", proxy(that._stickableHandler, that));
	            } else {
	                that.menu.bind(SELECT, proxy(that._stickableHandler, that));
	            }
	        },

	        _stickableHandler: function(e) {
	            var that = this;
	            var item = e.item ? $(e.item) :$(e.target);
	            var field = that.field;
	            var columns = that.owner.columns;
	            var column = grep(columns, function(column) {
	                return column.field == field || column.title == field;
	            })[0];

	            if (item.hasClass("k-stick")) {
	                that.owner.stickColumn(that.field);
	                that.trigger(STICK, { column: column });
	                if (!that._isMobile) {
	                    that.close();
	                }
	            } else if (item.hasClass("k-unstick")) {
	                that.owner.unstickColumn(that.field);
	                that.trigger(UNSTICK, { column: column });
	                if (!that._isMobile) {
	                    that.close();
	                }
	            }
	        },

	        _updateLockedColumns: function() {
	            var field = this.field;
	            var columns = this.owner.columns;
	            var column = grep(columns, function(column) {
	                return column.field == field || column.title == field;
	            })[0];

	            if (!column) {
	                return;
	            }

	            var locked = column.locked === true;
	            var length = grep(columns, function(column) {
	                return !column.hidden && ((column.locked && locked) || (!column.locked && !locked));
	            }).length;
	            var notLockable = column.lockable === false;

	            var lockItem = this.wrapper.find(".k-lock").removeClass("k-state-disabled");
	            var unlockItem = this.wrapper.find(".k-unlock").removeClass("k-state-disabled");

	            if (locked || length == 1 || notLockable) {
	                lockItem.addClass("k-state-disabled");
	            }

	            if (!locked || length == 1 || notLockable) {
	                unlockItem.addClass("k-state-disabled");
	            }

	            this._updateColumnsLockedState();
	        },

	        _updateStickyColumns: function() {
	            var field = this.field;
	            var columns = this.owner.columns;
	            var column = grep(columns, function(column) {
	                return column.field == field || column.title == field;
	            })[0];

	            if (!column) {
	                return;
	            }

	            var sticky = column.sticky === true;
	            var stickable  = column.stickable  === true;
	            var locked = column.locked === true;
	            var length = grep(columns, function(column) {
	                return !column.hidden && ((column.locked && locked) || (!column.locked && !locked));
	            }).length;

	            var stickItem = this.wrapper.find(".k-stick").removeClass("k-state-disabled");
	            var unstickItem = this.wrapper.find(".k-unstick").removeClass("k-state-disabled");

	            if (sticky || !stickable || (locked && length === 1)) {
	                stickItem.addClass("k-state-disabled");
	            }

	            if (!sticky || !stickable) {
	                unstickItem.addClass("k-state-disabled");
	            }
	        },

	        refresh: function() {
	            var that = this,
	                sort = that.options.dataSource.sort() || [],
	                descriptor,
	                field = that.field,
	                idx,
	                length;

	            that.wrapper.find(".k-sort-asc, .k-sort-desc").removeClass(ACTIVE);

	            for (idx = 0, length = sort.length; idx < length; idx++) {
	               descriptor = sort[idx];

	               if (field == descriptor.field) {
	                    that.wrapper.find(".k-sort-" + descriptor.dir).addClass(ACTIVE);
	               }
	            }

	            that.link[that._filterExist(that.dataSource.filter()) ? "addClass" : "removeClass"]("k-state-active");
	        },

	        _filterExist: function(filters) {
	            var found = false;
	            var filter;

	            if (!filters) {
	                return;
	            }

	            filters = filters.filters;

	            for (var idx = 0, length = filters.length; idx < length; idx++) {
	                filter = filters[idx];

	                if (filter.field == this.field) {
	                    found = true;
	                } else if (filter.filters) {
	                    found = found || this._filterExist(filter);
	                }
	            }

	            return found;
	        }
	    });

	    var modernTemplate =    '#if(sortable){#'+
	                                '<div class="k-columnmenu-item-wrapper">' +
	                                    '<div>' +
	                                        '<div class="k-columnmenu-item k-sort-asc" tabindex="0">' +
	                                            '<span class="k-icon k-i-sort-asc-sm"></span>${messages.sortAscending}' +
	                                        '</div>' +
	                                    '</div>' +
	                                    '<div>' +
	                                        '<div class="k-columnmenu-item k-sort-desc" tabindex="0">' +
	                                            '<span class="k-icon k-i-sort-desc-sm"></span>${messages.sortDescending}' +
	                                        '</div>' +
	                                    '</div>' +
	                                '</div>' +
	                            '#}#'+
	                            '#if(showColumns){#'+
	                                '<div class="k-columnmenu-item-wrapper">' +
	                                    '<div>' +
	                                        '<div class="k-columnmenu-item-content k-columns-item">' +
	                                            '<div class="k-column-list-wrapper">'+
	                                                '<div class="k-column-list" role="menu">' +
	                                                '#for (var idx = 0; idx < columns.length; idx++) {#'+
	                                                    '#if(columns[idx].groupHeader){#' +
	                                                        '<span class="k-column-menu-group-header"><span class="k-column-menu-group-header-text">#=columns[idx].title#</span></span>'+
	                                                    '#} else {#' +
	                                                        '<label class="k-column-list-item" role="menuitemcheckbox" aria-checked="false" #=columns[idx].matchesMedia === false ? "style=\'display:none;\'" : ""#><input class="k-checkbox k-checkbox-md k-rounded-md" type="checkbox" title="#=encodeTitles ? kendo.htmlEncode(columns[idx].title) : columns[idx].title#" data-#=ns#field="#=columns[idx].field.replace(/\"/g,"&\\#34;")#" data-#=ns#index="#=columns[idx].index#" data-#=ns#locked="#=columns[idx].locked#" data-#=ns#uid="#=columns[idx].uid#"/><span class="k-checkbox-label"> #=encodeTitles ? kendo.htmlEncode(columns[idx].title) : columns[idx].title#</span></label>'+
	                                                    '#}#'+
	                                                '#}#'+
	                                                '</div>' +
	                                            '</div>'+
	                                            '<div class="k-columnmenu-actions">' +
	                                                '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" type="button">${messages.reset}</button>' +
	                                                '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" type="button">${messages.apply}</button>' +
	                                            '</div>' +
	                                        '</div>' +
	                                    '</div>' +
	                                '</div>' +
	                            '#}#'+
	                            '#if(filterable){#'+
	                                '<div class="k-columnmenu-item-wrapper">' +
	                                    '<div class="k-columnmenu-item-content k-column-menu-filter">' +
	                                        '<div class="k-filterable"></div>' +
	                                    '</div>' +
	                                '</div>' +
	                            '#}#'+
	                            '#if(hasLockableColumns || hasStickableColumns){#'+
	                                '<div class="k-columnmenu-item-wrapper">' +
	                                    '<div class="k-column-menu-position">' +
	                                        '#if(hasLockableColumns){#'+
	                                            '<div class="k-columnmenu-item k-lock" tabindex="0">' +
	                                                '<span class="k-icon k-i-lock"></span>${messages.lock}' +
	                                            '</div>' +
	                                            '<div class="k-columnmenu-item k-unlock" tabindex="0">' +
	                                                '<span class="k-icon k-i-unlock"></span>${messages.unlock}' +
	                                            '</div>' +
	                                        '#}#'+
	                                        '#if(hasStickableColumns){#'+
	                                            '<div class="k-columnmenu-item k-stick" tabindex="0">' +
	                                                '<span class="k-icon k-i-stick"></span>${messages.stick}' +
	                                            '</div>' +
	                                            '<div class="k-columnmenu-item k-unstick" tabindex="0">' +
	                                                '<span class="k-icon k-i-unstick"></span>${messages.unstick}' +
	                                            '</div>' +
	                                        '#}#'+
	                                    '</div>' +
	                                '</div>' +
	                            '#}#';

	    var template = '<ul id="#=uid#">'+
	                          '#if(sortable){#'+
	                              '<li class="k-item k-menu-item k-sort-asc"><span class="k-link k-menu-link"><span class="k-icon k-i-sort-asc-sm"></span>${messages.sortAscending}</span></li>'+
	                              '<li class="k-item k-menu-item k-sort-desc"><span class="k-link k-menu-link"><span class="k-icon k-i-sort-desc-sm"></span>${messages.sortDescending}</span></li>'+
	                              '#if(showColumns || filterable){#'+
	                                  '<li class="k-separator k-menu-separator" role="presentation"></li>'+
	                              '#}#'+
	                          '#}#'+
	                          '#if(showColumns){#'+
	                              '<li class="k-item k-menu-item k-columns-item" aria-haspopup="true"><span class="k-link k-menu-link"><span class="k-icon k-i-columns"></span>${messages.columns}</span><ul>'+
	                              '#for (var idx = 0; idx < columns.length; idx++) {#'+
	                                  '#if(columns[idx].groupHeader){#' +
	                                      '<li class="k-column-menu-group-header" #=omitWrapAttribute#="true" ><span class="k-column-menu-group-header-text">#=columns[idx].title#</span></li>'+
	                                  '#} else {#' +
	                                      '<li role="menuitemcheckbox" aria-checked="false" #=columns[idx].matchesMedia === false ? "style=\'display:none;\'" : ""#><input type="checkbox" class="k-checkbox k-checkbox-md k-rounded-md" title="#=encodeTitles ? kendo.htmlEncode(columns[idx].title) : columns[idx].title#" data-#=ns#field="#=columns[idx].field.replace(/\"/g,"&\\#34;")#" data-#=ns#index="#=columns[idx].index#" data-#=ns#locked="#=columns[idx].locked#" data-#=ns#uid="#=columns[idx].uid#"/>#=encodeTitles ? kendo.htmlEncode(columns[idx].title) : columns[idx].title#</li>'+
	                                  '#}#'+
	                              '#}#'+
	                              '</ul></li>'+
	                              '#if(filterable || hasLockableColumns || hasStickableColumns){#'+
	                                  '<li class="k-separator k-menu-separator" role="presentation"></li>'+
	                              '#}#'+
	                          '#}#'+
	                          '#if(filterable){#'+
	                              '<li class="k-item k-menu-item k-filter-item" aria-haspopup="true"><span class="k-link k-menu-link"><span class="k-icon k-i-filter"></span>${messages.filter}</span><ul>'+
	                                  '<li><div class="k-filterable"></div></li>'+
	                              '</ul></li>'+
	                              '#if(hasLockableColumns || hasStickableColumns){#'+
	                                  '<li class="k-separator k-menu-separator" role="presentation"></li>'+
	                              '#}#'+
	                          '#}#'+
	                          '#if(hasLockableColumns || hasStickableColumns){#'+
	                              '<li class="k-item k-menu-item k-position-item" aria-haspopup="true"><span class="k-link k-menu-link"><span class="k-icon k-i-set-column-position"></span>${messages.setColumnPosition}</span><ul>'+
	                                  '#if(hasLockableColumns){#'+
	                                      '<li class="k-item k-menu-item k-lock"><span class="k-link k-menu-link"><span class="k-icon k-i-lock"></span>${messages.lock}</span></li>'+
	                                      '<li class="k-item k-menu-item k-unlock"><span class="k-link k-menu-link"><span class="k-icon k-i-unlock"></span>${messages.unlock}</span></li>'+
	                                      '#if(hasStickableColumns){#'+
	                                          '<li class="k-separator k-menu-separator" role="presentation"></li>'+
	                                      '#}#'+
	                                  '#}#'+
	                                  '#if(hasStickableColumns){#'+
	                                      '<li class="k-item k-menu-item k-stick"><span class="k-link k-menu-link"><span class="k-icon k-i-stick"></span>${messages.stick}</span></li>'+
	                                      '<li class="k-item k-menu-item k-unstick"><span class="k-link k-menu-link"><span class="k-icon k-i-unstick"></span>${messages.unstick}</span></li>'+
	                                  '#}#'+
	                              '</ul></li>'+
	                          '#}#'+
	                    '</ul>';

	    var mobileTemplate =
	            '<div data-#=ns#role="view" class="k-grid-column-menu">' +
	                '<div data-#=ns#role="header" class="k-header">' +
	                    '<a href="\\#" class="k-header-cancel k-link" title="#=messages.cancel#" ' +
	                    'aria-label="#=messages.cancel#"><span class="k-icon k-i-arrow-chevron-left"></span></a>' +
	                    '${messages.settings}' +
	                    '<a href="\\#" class="k-header-done k-link" title="#=messages.done#" ' +
	                    'aria-label="#=messages.done#"><span class="k-icon k-i-check"></span></a>' +
	                '</div>' +
	                '<div class="k-column-menu">' +
	                    '<ul class="k-reset">' +
	                        '<li>' +
	                            '<span class="k-list-title">#=messages.column#: ${title}</span>' +
	                            '<ul class="k-listgroup k-listgroup-flush k-mb-4">' +
	                                '#if(sortable){#' +
	                                    '<li id="#=kendo.guid()#" class="k-item k-listgroup-item k-sort-asc"><span class="k-link"><span class="k-icon k-i-sort-asc-sm"></span><span class="k-item-title">${messages.sortAscending}</span></span></li>' +
	                                    '<li id="#=kendo.guid()#" class="k-item k-listgroup-item k-sort-desc"><span class="k-link"><span class="k-icon k-i-sort-desc-sm"></span><span class="k-item-title">${messages.sortDescending}</span></span></li>' +
	                                '#}#' +
	                                '#if(hasLockableColumns){#' +
	                                    '<li id="#=kendo.guid()#" class="k-item k-listgroup-item k-lock"><span class="k-link"><span class="k-icon k-i-lock"></span><span class="k-item-title">${messages.lock}</span></span></li>' +
	                                    '<li id="#=kendo.guid()#" class="k-item k-listgroup-item k-unlock"><span class="k-link"><span class="k-icon k-i-unlock"></span><span class="k-item-title">${messages.unlock}</span></span></li>' +
	                                '#}#' +
	                                '#if(hasStickableColumns){#' +
	                                    '<li id="#=kendo.guid()#" class="k-item k-listgroup-item k-stick"><span class="k-link"><span class="k-icon k-i-stick"></span><span class="k-item-title">${messages.stick}</span></span></li>' +
	                                    '<li id="#=kendo.guid()#" class="k-item k-listgroup-item k-unstick"><span class="k-link"><span class="k-icon k-i-unstick"></span><span class="k-item-title">${messages.unstick}</span></span></li>' +
	                                '#}#' +
	                                '#if(filterable){#' +
	                                    '<li id="#=kendo.guid()#" class="k-item k-listgroup-item k-filter-item">' +
	                                        '<span class="k-link k-filterable">' +
	                                            '<span class="k-icon k-i-filter"></span>' +
	                                            '<span class="k-item-title">${messages.filter}</span>' +
	                                            '<span class="k-select"><span class="k-icon k-i-arrow-chevron-right"></span></span>' +
	                                        '</span>' +
	                                    '</li>' +
	                                '#}#' +
	                            '</ul>' +
	                        '</li>' +
	                        '#if(showColumns){#' +
	                            '<li class="k-columns-item"><span class="k-list-title">${messages.columnVisibility}</span>' +
	                                '#if(hasGroups){#' +
	                                    '#for (var i = 0; i < groups.length; i++) {#' +
	                                        '<span class="k-list-group-header k-pb-1">#:groups[i].title#</span>' +
	                                        '<ul class="k-listgroup k-listgroup-flush k-mb-4">' +
	                                            '#for (var idx = 0; idx < groups[i].columns.length; idx++) {#' +
	                                                '<li id="#=kendo.guid()#" class="k-item k-listgroup-item">' +
	                                                    '<span class="k-listgroup-form-row">' +
	                                                        '<span class="k-listgroup-form-field-label k-item-title">' +
	                                                            '#=groups[i].columns[idx].title#' +
	                                                        '</span>' +
	                                                        '<span class="k-listgroup-form-field-wrapper">' +
	                                                            '<input type="checkbox" title="#=groups[i].columns[idx].title#" ' +
	                                                                ' data-#=ns#field="#=groups[i].columns[idx].field.replace(/\"/g,"&\\#34;")#"' +
	                                                                ' data-#=ns#index="#=groups[i].columns[idx].index#"' +
	                                                                ' data-#=ns#uid="#=groups[i].columns[idx].uid#"' +
	                                                                ' data-#=ns#locked="#=groups[i].columns[idx].locked#" />' +
	                                                        '</span>' +
	                                                    '</span>' +
	                                                '</li>' +
	                                            '#}#' +
	                                        '</ul>' +
	                                    '#}#' +
	                                '#} else {#' +
	                                    '<ul class="k-listgroup k-listgroup-flush k-mb-4">' +
	                                    '#for (var idx = 0; idx < columns.length; idx++) {#' +
	                                        '<li id="#=kendo.guid()#" class="k-item k-listgroup-item">' +
	                                            '<span class="k-listgroup-form-row">' +
	                                                '<span class="k-listgroup-form-field-label k-item-title">' +
	                                                    '#=columns[idx].title#' +
	                                                '</span>' +
	                                                '<span class="k-listgroup-form-field-wrapper">' +
	                                                    '<input type="checkbox" title="#=columns[idx].title#" ' +
	                                                        ' data-#=ns#field="#=columns[idx].field.replace(/\"/g,"&\\#34;")#"' +
	                                                        ' data-#=ns#index="#=columns[idx].index#"' +
	                                                        ' data-#=ns#uid="#=columns[idx].uid#"' +
	                                                        ' data-#=ns#locked="#=columns[idx].locked#" />' +
	                                                '</span>' +
	                                            '</span>' +
	                                        '</li>' +
	                                    '#}#' +
	                                    '</ul>' +
	                                '#}#'+
	                            '</li>'+
	                        '#}#'+
	                        '<li class="k-item k-clear-wrap">' +
	                            '<ul class="k-listgroup k-listgroup-flush">' +
	                                '<li class="k-listgroup-item">' +
	                                    '<span class="k-link k-label k-clear" title="#=messages.clear#" aria-label="#=messages.clear#">' +
	                                        '#=messages.clear#' +
	                                    '</span>' +
	                                '</li>' +
	                            '</ul>' +
	                        '</li>' +
	                    '</ul>' +
	                '</div>'+
	            '</div>';

	    var MobileMenu = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that._createCheckBoxes();

	            that.element.on("click" + NS, "li.k-item:not(.k-separator):not(.k-state-disabled):not(:has(.k-switch))", "_click");
	        },

	        events: [ SELECT ],

	        _click: function(e) {
	            var that = this;

	            if (!$(e.target).is("[type=checkbox]")) {
	                e.preventDefault();
	            }

	            if ($(e.target).hasClass("k-clear")) {
	                that._cancelChanges(true);

	                return;
	            }

	            if ($(e.target).hasClass("k-filterable")) {
	                that._cancelChanges(true);
	                that.trigger(SELECT, { item: e.currentTarget });

	                return;
	            }

	            that._updateSelectedItems(e.currentTarget);
	        },

	        _updateSelectedItems: function(el) {
	            var that = this;
	            var item = $(el);
	            var state = that.options.columnMenu.view.state || { columns: {} };
	            var id = item.prop("id");

	            if (item.hasClass("k-filter-item")) {
	                return;
	            }

	            if (state[id]) {
	                state[id] = false;
	            } else {
	                state[id] = true;
	            }

	            if (item.hasClass("k-sort-asc") || item.hasClass("k-sort-desc")) {
	                var dir;
	                var otherItem;
	                var otherItemId;

	                if (item.hasClass("k-sort-asc")) {
	                    dir = "asc";
	                    otherItem = that.element.find(".k-sort-desc");
	                } else {
	                    dir = "desc";
	                    otherItem = that.element.find(".k-sort-asc");
	                }

	                otherItemId = otherItem.prop("id");

	                if (dir === state.initialSort && !item.hasClass("k-state-selected")) {
	                    state[id] = false;
	                }

	                if (state[otherItemId]) {
	                    state[otherItemId] = false;
	                }

	                otherItem.removeClass(ACTIVE);
	            }

	            if (item.hasClass(ACTIVE)) {
	                item.removeClass(ACTIVE);
	            } else {
	                item.addClass(ACTIVE);
	            }
	        },

	        _cancelChanges: function(force) {
	            var that = this;
	            var menu = that.options.columnMenu;
	            var view = menu.view;
	            var state = view.state || { columns: {} };
	            var columns = state.columns;

	            that.element.find("." + ACTIVE).removeClass(ACTIVE);
	            menu.refresh();

	            if (force) {
	                var selectedItems = [];

	                for (var key in columns) {
	                    if (columns.hasOwnProperty(key)) {
	                        if (columns[key] === true) {
	                            var item = view.element.find("#" + key);

	                            selectedItems.push(item[0]);
	                        }
	                    }
	                }
	                // In order to use the columns hide/show validation,
	                // triggering the Select event must be done backwards
	                for (var i = selectedItems.length - 1; i >= 0; i--) {
	                    that.trigger(SELECT, { item: selectedItems[i] });
	                }

	                if (menu.options.hasLockableColumns) {
	                    menu._updateLockedColumns();
	                }

	                if (menu.options.hasStickableColumns) {
	                    menu._updateStickyColumns();
	                }
	            }

	            that.options.columnMenu.view.state = { columns: {} };
	        },

	        _applyChanges: function() {
	            var that = this;
	            var view = that.options.columnMenu.view;
	            var state = view.state || { columns: {} };

	            for (var key in state) {
	                if (state.hasOwnProperty(key)) {
	                    if (key !== "initialSort" && key !== "columns" && state[key] === true) {
	                        var item = view.element.find("#" + key);

	                        if (item.hasClass(ACTIVE)) {
	                            item.removeClass(ACTIVE);
	                        } else {
	                            item.addClass(ACTIVE);
	                        }

	                        that.trigger(SELECT, { item: item[0] });
	                    }
	                }
	            }
	        },

	        _createCheckBoxes: function() {
	            var that = this;

	            that.element.find(".k-columns-item").find("[type='checkbox']").kendoSwitch({
	                messages: {
	                    checked: "",
	                    unchecked: ""
	                },
	                change: function(e) {
	                    var item = e.sender.element.closest(".k-item");
	                    var state = that.options.columnMenu.view.state || { columns: {} };
	                    var id = item.prop("id");

	                    if (state.columns[id]) {
	                        state.columns[id] = false;
	                    } else {
	                        state.columns[id] = true;
	                    }

	                    that.trigger(SELECT, { item: item });
	                }
	            });
	        },

	        _destroyCheckBoxes: function() {
	            var that = this;
	            var elements = that.element.find(".k-columns-item").find("[type='checkbox']");
	            var switchWidget;

	            for (var i = 0; i < elements.length; i++) {
	                switchWidget = elements.eq(i).data("kendoSwitch");

	                if (switchWidget) {
	                    switchWidget.destroy();
	                }
	            }
	        },

	        close: function() {
	            this.options.pane.navigate("");
	        },

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);

	            that.element.off(NS);
	            that._destroyCheckBoxes();
	        }
	    });

	    ui.plugin(ColumnMenu);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1123:
/***/ (function(module, exports) {

	module.exports = require("./kendo.filtermenu");

/***/ }),

/***/ 1124:
/***/ (function(module, exports) {

	module.exports = require("./kendo.menu");

/***/ }),

/***/ 1125:
/***/ (function(module, exports) {

	module.exports = require("./kendo.expansionpanel");

/***/ })

/******/ });