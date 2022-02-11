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

	module.exports = __webpack_require__(1298);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1294:
/***/ (function(module, exports) {

	module.exports = require("./kendo.treelist");

/***/ }),

/***/ 1298:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1294), __webpack_require__(1299) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	var __meta__ = { // jshint ignore:line
	    id: "gantt.list",
	    name: "Gantt List",
	    category: "web",
	    description: "The Gantt List",
	    depends: [ "treelist", "treeview.draganddrop" ],
	    hidden: true
	};

	(function($) {
	    var extend = $.extend,
	        map = $.map,
	        proxy = $.proxy,
	        isFunction = kendo.isFunction,

	        ui = kendo.ui,
	        TreeList = ui.TreeList,
	        outerHeight = kendo._outerHeight,
	        activeElement = kendo._activeElement,
	        keys = kendo.keys,
	        mobileOS = kendo.support.mobileOS,

	        DATATYPE = kendo.attr("type"),
	        BINDING = kendo.attr("bind"),
	        FORMAT = kendo.attr("format"),

	        STRING = "string",
	        NS = ".kendoGanttList",
	        DOUBLE_CLICK = "dblclick",
	        FOCUSIN = "focusin",
	        FOCUSOUT = "focusout",
	        KEYDOWN = "keydown",
	        KEYUP = "keyup",
	        MOUSE_DOWN = "mousedown",
	        BEFORE_EDIT = "beforeEdit",
	        EDIT = "edit",
	        SAVE = "save",
	        CANCEL = "cancel",
	        RENDER = "render",
	        DOT = ".",

	        defaultDateFormat = "{0:" + kendo.getCulture().calendar.patterns.d +"}",

	        titleFromField = {
	            "title": "Title",
	            "start": "Start Time",
	            "end": "End Time",
	            "percentComplete": "% Done",
	            "parentId": "Predecessor ID",
	            "id": "ID",
	            "orderId": "Order ID"
	        },

	        SIZE_CALCULATION_TEMPLATE = "<table style='visibility: hidden;'>" +
	            "<tbody>" +
	                "<tr style='height:{0}'>" +
	                    "<td>&nbsp;</td>" +
	                "</tr>" +
	            "</tbody>" +
	        "</table>",

	        listStyles = {
	            gridHeader: "k-grid-header",
	            gridContentWrap: "k-grid-content",
	            editCell: "k-edit-cell",
	            iconCollapse: "k-i-collapse",
	            iconExpand: "k-i-expand"
	        };

	    var GanttList = ui.GanttList = TreeList.extend({
	        init: function(element, options) {
	            if (this.options.columns.length === 0) {
	                this.options.columns.push("title");
	            }

	            TreeList.fn.init.call(this, element, options);

	            this._unbindDataSource();
	            this._setWidth();
	        },

	        options: {
	            name: "GanttList",
	            autoBind: false,
	            sortable: true,
	            selectable: true,
	            navigatable: false,
	            editable: {
	                move: true,
	                mode: "incell"
	            },
	            resizable: false,
	            renderAllRows: false
	        },

	        destroy: function() {
	            TreeList.fn.destroy.call(this);
	            kendo.destroy(this.element);
	        },

	        closeCell: function(isCancel) {
	            var that = this;
	            var cell = (that.editor || {}).element;
	            var tr;
	            var model;

	            if (!cell || !cell[0] || !that._isIncellEditable()) {
	                return;
	            }

	            model = that.dataItem(cell);
	            that._cancelEditor();
	            cell.removeClass(listStyles.editCell);
	            tr = cell.parent().removeClass(listStyles.editRow);

	            if (that.lockedContent) {
	                that._relatedRow(tr).removeClass(listStyles.editRow);
	            }

	            if (isCancel) {
	                that._render();
	            }

	            that.trigger("itemChange", { item: tr, data: model, ns: ui });

	            if (that.lockedContent) {
	                that._adjustRowHeight(tr.css("height", "")[0], that._relatedRow(tr).css("height", "")[0]);
	            }
	        },

	        insertAfter: function(nodeData, referenceNode) {
	            if(!nodeData || !referenceNode) {
	                return;
	            }

	            var orderId = referenceNode.orderId;
	            var taskInfo = {
	                parentId: referenceNode.parentId
	            };

	            if (referenceNode.parentId === nodeData.parentId && referenceNode.orderId > nodeData.orderId) {
	                taskInfo.orderId = orderId;
	            } else {
	                taskInfo.orderId = orderId + 1;
	            }

	            this.trigger("reorder", {
	                task: nodeData,
	                updateInfo: taskInfo
	            });
	        },

	        insertBefore: function(nodeData, referenceNode) {
	            if(!nodeData || !referenceNode) {
	                return;
	            }

	            var orderId = referenceNode.orderId;
	            var taskInfo = {
	                parentId: referenceNode.parentId
	            };

	            if (referenceNode.parentId === nodeData.parentId &&
	                referenceNode.orderId > nodeData.orderId) {
	                    taskInfo.orderId = orderId - 1;
	            } else {
	                taskInfo.orderId = orderId;
	            }

	            this.trigger("reorder", {
	                task: nodeData,
	                updateInfo: taskInfo
	            });
	        },

	        _adjustHeight: function() {
	            var element = this.element;
	            var contentWrap = element.find(DOT + listStyles.gridContentWrap);
	            var header = element.find(DOT + listStyles.gridHeader);
	            var height;
	            var scrollbar = kendo.support.scrollbar();

	            if (this._isHeightSet(element)) {
	                height = element.height() - outerHeight(header);

	                contentWrap.height(height);

	                if (this._hasLockedColumns) {
	                    scrollbar = this.table[0].offsetWidth > this.table.parent()[0].clientWidth ? scrollbar : 0;
	                    this.lockedContent.height(height - scrollbar);
	                }
	            }
	        },

	        _adjustRowHeight: function(row1, row2) {
	            var height;
	            var offsetHeight1 = row1.offsetHeight;
	            var offsetHeight2 = row2.offsetHeight;

	            if (offsetHeight1 > offsetHeight2) {
	                height = offsetHeight1 + "px";
	            } else if (offsetHeight1 < offsetHeight2) {
	                height = offsetHeight2 + "px";
	            }

	            if (height) {
	                row1.style.height = row2.style.height = height;
	            }
	         },

	        // identical code found in treelist, grid & scheduler :(
	        _isHeightSet: function(el) {
	            var initialHeight, newHeight;
	            if (el[0].style.height) {
	                return true;
	            } else {
	                initialHeight = el.height();
	            }

	            el.height("auto");
	            newHeight = el.height();
	            el.height("");

	            return (initialHeight != newHeight);
	        },

	        _attachCellEditingEventHandlers: function() {
	            var that = this,
	                editable = that.options.editable;

	            if (that._isIncellEditable() && editable.update !== false) {
	                that._startEditHandler = function(e) {
	                    var td = e.currentTarget ? $(e.currentTarget) : e;
	                    var column = that._columnFromElement(td);

	                    if (that.editable) {
	                        return;
	                    }

	                    if (column && column.editable()) {
	                        that._editCell(td, column, that._modelFromElement(td));
	                    }
	                };

	                that.content
	                    .on(FOCUSIN + NS, proxy(that._focusInEditableHandler, that))
	                    .on(FOCUSOUT + NS, proxy(that._focusoutCellHandler, that))
	                    .on(KEYDOWN + NS, "tr:not(.k-grouping-row) > td", proxy(that._keydownHandler, that))
	                    .on(KEYUP + NS, "tr:not(.k-grouping-row) > td", proxy(that._keyupHandler, that));

	                if (!mobileOS) {
	                    that.content
	                        .on(MOUSE_DOWN + NS, "tr:not(.k-grouping-row) > td", proxy(that._mouseDownHandler, that))
	                        .on(DOUBLE_CLICK + NS, "tr:not(.k-grouping-row) > td", proxy(that._openEditorHandler, that));
	                } else {
	                    that.touch = that.content
	                        .kendoTouch({
	                            filter: "td",
	                            touchstart: function(e) {
	                                that._mouseDownHandler(e.touch);
	                            },
	                            doubletap: function(e) {
	                                if(e.event.target.classList.contains("k-icon")) {
	                                    return;
	                                }
	                                that._openEditorHandler(e.touch);
	                            }
	                        }).data("kendoTouch");
	                }
	            }
	        },

	        _blurActiveElement: function() {
	            var activeElement = kendo._activeElement();

	            if (activeElement && activeElement.nodeName.toLowerCase() !== "body") {
	                $(activeElement).trigger("blur");
	            }
	        },

	        _closeCellTimeouted: function() {
	            var that = this,
	                target = activeElement(),
	                editor = that.editor || {},
	                cell = editor.element;

	            if (cell && cell[0] && target && !$.contains(cell[0], target) && cell[0] !== target && !$(target).closest(".k-animation-container").length) {
	                if (editor.end()) {
	                    that.closeCell();
	                }
	            }
	        },

	        _columns: function() {
	            var that = this,
	                columns = this.options.columns;

	            that._hasExpandable = false;

	            columns.forEach(function(item){
	                if(item.expandable) {
	                    that._hasExpandable = true;
	                }
	            });

	            that.columns = that.options.columns = map(columns, proxy(that._eachColumn, that));

	            TreeList.fn._columns.call(that);
	        },

	        _columnEditor: function(column) {
	            var attr = {
	                "name": column.field,
	                "required": true
	            };

	            attr[BINDING] = "value:" + column.field;
	            attr[DATATYPE] = "date";
	            attr[FORMAT] = kendo._extractFormat(column.format);

	            return function(container, options) {
	                var model = options.model,
	                    field = model.fields[column.field] || model[column.field],
	                    validation = field.validation;

	                if (validation && validation.dateCompare && isFunction(validation.dateCompare) && validation.message) {
	                    $('<span ' + kendo.attr("for") + '="' + column.field + '" class="k-invalid-msg"/>')
	                        .hide()
	                        .appendTo(container);

	                    attr[kendo.attr("dateCompare-msg")] = validation.message;
	                }

	                $('<input type="text"/>')
	                    .attr(attr)
	                    .prependTo(container)
	                    .kendoDateTimePicker({ format: options.format });
	            };
	        },

	        _columnFromElement: function(element) {
	            var td = element.closest("td"),
	                tr = td.parent(),
	                idx = tr.children().index(td);

	            return this.columns[idx];
	        },

	        _eachColumn: function(column) {
	            var that = this,
	                resourcesField = that.options.resourcesField,
	                isSortable = this.options.sortable;

	            var model = function() {
	                this.field = "";
	                this.title = "";
	                this.editable = function() { return false; };
	                this.sortable = false;
	            };

	            var formatResources = function(task) {
	                var value = task.get(resourcesField) || [],
	                    formatedValue = [];

	                for (var i = 0; i < value.length; i++) {
	                    formatedValue.push(kendo.format("{0} [{1}]", value[i].get("name"), value[i].get("formatedValue")));
	                }

	                return formatedValue.join(", ");
	            };

	            if(column.columns) {
	                that.hasNestedColumns = true;
	                column.columns = map(column.columns, proxy(this._eachColumn, this));
	            }

	            if(typeof column === STRING) {
	                column = {
	                    field: column,
	                    title: titleFromField[column]
	                };
	            }

	            if (column.editable === true) {
	                column.editable = function() {
	                    return true;
	                };
	            } else {
	                column.editable = function() {
	                    return false;
	                };
	            }

	            if(column.field === "start" || column.field === "end") {
	                column.format = kendo.getCulture().calendar.patterns[column.format] || column.format || defaultDateFormat;

	                if(!column.editor) {
	                    if(column.format === defaultDateFormat || column.format.toLowerCase().indexOf("h") > -1) {
	                        column.editor = that._columnEditor(column);
	                    }
	                }
	            }
	            if (column.field === resourcesField) {
	                column.sortable = false;
	                column.template = column.template || formatResources;
	            }
	            if(!that._hasExpandable && column.field === "title") {
	                column.expandable = true;
	            }

	            if(isSortable && !column.sortable) {
	                column.sortable = false;
	            }

	            return extend(new model(), column);
	        },

	        _editCell: function(cell, column, model) {
	            var that = this,
	                resourcesField = that.options.resourcesField,
	                modelCopy = that.dataSource._createNewModel(model.toJSON()),
	                editedCell;

	            if (column.field === resourcesField) {
	                column.editor(cell, modelCopy);
	                return;
	            } else {
	                if (that.trigger(BEFORE_EDIT, { model: model, container: cell })) {
	                    that.dataSource._restorePageSizeAfterAddChild();
	                    return;
	                }

	                that.closeCell();

	                model._edit = true;

	                that._cancelEditor();

	                that._render({
	                    editedColumn: column,
	                    editedColumnIndex: cell.index()
	                });

	                editedCell = that.table.add(that.lockedTable).find(DOT + listStyles.editCell).first();

	                that.editor = that._createIncellEditor(editedCell, {
	                    columns: [column],
	                    model: model,
	                    change: function(e) {
	                        if (that.trigger(SAVE, { values: e.values, container: cell, model: model } )) {
	                            e.preventDefault();
	                        }
	                    }
	                });

	                // refresh the current element as the DOM element reference can be changed after render()
	                that._current = editedCell;

	                that.trigger(EDIT, { container: cell, model: model });
	            }
	        },

	        _focusInEditableHandler: function(e) {
	            var that = this,
	                target = e.target;

	            if (!$.contains(target, activeElement())) {
	                clearTimeout(that._closeCellTimeout);
	                that._closeCellTimeout = null;
	            }
	        },

	        _focusoutCellHandler: function(e) {
	            var that = this;

	            that._closeCellTimeout = setTimeout(function() {
	                that._closeCellTimeouted(e);
	            }, 1);
	        },

	        _keydownHandler: function(e) {
	            if (e.keyCode === keys.ENTER) {
	                e.preventDefault();
	            }
	        },

	        _keyupHandler: function(e) {
	            var that = this,
	                key = e.keyCode,
	                cell, model;

	            switch (key) {
	                case keys.ENTER:
	                    that._blurActiveElement();
	                    that._closeCellTimeouted(e);
	                    break;
	                case keys.ESC:
	                    if (that.editor) {
	                        cell = $(e.target);
	                        model = that._modelFromElement(cell);

	                        that.trigger(CANCEL, { model: model, cell: cell });
	                    }
	                    break;
	            }
	        },

	        _modelFromElement: function(element) {
	            var row = element.closest("tr"),
	                model = this.dataSource.getByUid(row.attr(kendo.attr("uid")));

	            return model;
	        },

	        _mouseDownHandler: function(e) {
	            var currentTarget = $(e.currentTarget);

	            if (!currentTarget.hasClass(listStyles.editCell)) {
	                this._blurActiveElement();
	            }
	        },

	        _openEditorHandler: function(e) {
	            var that = this,
	                td = $(e.currentTarget),
	                isLockedCell = that.lockedTable && td.closest("table")[0] === that.lockedTable[0],
	                selectable = that.selectable && that.selectable.options.multiple;

	            if (td.hasClass(listStyles.editCell) ||
	                td.has("a.k-grid-delete").length ||
	                td.has("button.k-grid-delete").length ||
	                (td.closest("tbody")[0] !== that.tbody[0] && !isLockedCell) ||
	                $(e.target).is(":input") ||
	                $(e.target).hasClass(listStyles.iconExpand) ||
	                $(e.target).hasClass(listStyles.iconCollapse)) {

	                return;
	            }

	            if (that.editor) {
	                if (that.editor.end()) {
	                    if (selectable) {
	                        $(activeElement()).trigger("blur");
	                    }
	                    that.closeCell();
	                    that.editCell(td);
	                }
	            } else {
	                that.editCell(td);
	            }
	        },

	        _renderTree: function(taskTree) {
	            TreeList.fn._render.call(this);

	            if(this.hasNestedColumns) {
	                this.element.addClass("k-gantt-treelist-nested-columns");
	            }

	            if(taskTree && taskTree.length && !taskTree.editedColumn) {
	                if (this.options.rowHeight) {
	                    this._rowHeight(taskTree);
	                }

	                this.trigger(RENDER);
	            }

	            this._adjustHeight();
	        },

	        _rowHeight: function(tasks) {
	            var content = this.content,
	                options = this.options,
	                rowHeight = typeof options.rowHeight === STRING ? options.rowHeight : options.rowHeight + "px",
	                table = $(kendo.format(SIZE_CALCULATION_TEMPLATE, rowHeight)),
	                height;

	            content.append(table);
	            height = outerHeight(table.find("tr"));
	            table.remove();

	            this.element.find('[role="treegrid"]').css("height", (tasks.length * height) + "px");
	        },

	        _setData: function(tasks) {
	            this.dataSource.data(tasks);
	        },

	        _setWidth: function() {
	            this.element.find(".k-grid-header table").css("minWidth", this.options.listWidth);
	            this.content.find("table").css("minWidth", this.options.listWidth);
	        }
	    });

	    ui.plugin(GanttList);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1299:
/***/ (function(module, exports) {

	module.exports = require("./kendo.treeview.draganddrop");

/***/ })

/******/ });