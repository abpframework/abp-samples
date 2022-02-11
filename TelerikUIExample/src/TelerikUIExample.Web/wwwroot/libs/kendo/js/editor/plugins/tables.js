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

	module.exports = __webpack_require__(1005);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 997:
/***/ (function(module, exports) {

	module.exports = require("./formatblock");

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(997), __webpack_require__(1006) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {

	var kendo = window.kendo,
	    extend = $.extend,
	    proxy = $.proxy,
	    Editor = kendo.ui.editor,
	    dom = Editor.Dom,
	    EditorUtils = Editor.EditorUtils,
	    RangeUtils = Editor.RangeUtils,
	    Command = Editor.Command,

	    NS = "kendoEditor",
	    ACTIVESTATE = "k-state-active",
	    SELECTEDSTATE = "k-state-selected",
	    SCOPE = "scope",
	    ROW = "row",
	    COL = "col",
	    ROWGROUP = "rowgroup",
	    COLGROUP = "colgroup",
	    COLSPAN = "colspan",
	    ROWSPAN = "rowspan",
	    TABLE = "table",
	    THEAD = "thead",
	    TBODY = "tbody",
	    TR = "tr",
	    TD = "td",
	    TH = "th",

	    Tool = Editor.Tool,
	    ToolTemplate = Editor.ToolTemplate,
	    InsertHtmlCommand = Editor.InsertHtmlCommand,
	    BlockFormatFinder = Editor.BlockFormatFinder,
	    BlockFormatTool = Editor.BlockFormatTool,
	    FormatCommand = Editor.FormatCommand,
	    registerTool = Editor.EditorUtils.registerTool,
	    registerFormat = Editor.EditorUtils.registerFormat,
	    formats = kendo.ui.Editor.fn.options.formats,
	    getTouches = kendo.getTouches;
	var template = kendo.template;

	var columnTemplate = "<td style='width:#=width#%;'>#=content#</td>";

	var tableFormatFinder = new BlockFormatFinder([{tags:[TABLE]}]);

	var TableCommand = InsertHtmlCommand.extend({
	    init: function(options) {
	        var o = $.extend({
	            postProcess: this.postProcess,
	            skipCleaners: true
	        }, options || {});

	        InsertHtmlCommand.fn.init.call(this, o);
	    },
	    _tableHtml: function(rows, columns) {
	        rows = rows || 1;
	        columns = columns || 1;
	        var columnHtml = template(columnTemplate)({ width: 100 / columns, content: Editor.emptyTableCellContent });
	        var rowHeight = 100 / rows;

	        return "<table class='k-table' data-last>" +
	                    new Array(rows + 1).join(
	                    "<tr style='height:" + rowHeight + "%;'>" +
	                        new Array(columns + 1).join(columnHtml) +
	                    "</tr>") +
	               "</table>";
	    },

	    postProcess: function(editor, range) {
	        var insertedTable = $("table[data-last]", editor.document).removeAttr("data-last");

	        range.setStart(insertedTable.find(TD)[0], 0);
	        range.collapse(true);

	        editor.selectRange(range);
	    },

	    exec: function() {
	        var options = this.options;
	        options.html = this._tableHtml(options.rows, options.columns);

	        InsertHtmlCommand.fn.exec.call(this);
	    }
	});

	var PopupTool = Tool.extend({
	    initialize: function(ui, options) {
	        Tool.fn.initialize.call(this, ui, options);

	        var popup = $(this.options.popupTemplate).appendTo("body").kendoPopup({
	            anchor: ui,
	            copyAnchorStyles: false,
	            open: proxy(this._open, this),
	            activate: proxy(this._activate, this),
	            close: proxy(this._close, this)
	        }).data("kendoPopup");

	        ui.on("click", proxy(this._toggle, this))
	          .on("keydown", proxy(this._keydown, this));

	        var editor = this._editor = options.editor;
	        this._popup = popup;

	        var tableWizard = new Editor.TableWizardTool({
	            template: new ToolTemplate({ template: EditorUtils.tableWizardButtonTemplate, title: editor.options.messages.tableWizard }),
	            command: Editor.TableWizardCommand,
	            insertNewTable: true
	        });

	        registerTool("tableWizardInsert", tableWizard);

	        var twTool = $("<div>" + tableWizard.options.template.getHtml() + "</div>");
	        twTool.appendTo(popup.element);

	        if (editor.toolbar) {
	            editor.toolbar.attachToolsEvents(twTool);
	        }
	    },

	    popup: function() {
	        return this._popup;
	    },

	    _activate: $.noop,

	    _open: function() {
	        this._popup.options.anchor.addClass(ACTIVESTATE);
	    },

	    _close: function() {
	        this._popup.options.anchor.removeClass(ACTIVESTATE);
	    },

	    _keydown: function(e) {
	        var keys = kendo.keys;
	        var key = e.keyCode;

	        if (key == keys.DOWN && e.altKey) {
	            this._popup.open();
	        } else if (key == keys.ESC) {
	            this._popup.close();
	        }
	    },

	    _toggle: function(e) {
	        var button = $(e.target).closest(".k-tool");

	        if (!button.hasClass("k-disabled")) {
	            this.popup().toggle();
	        }
	    },

	    update: function(ui) {
	        var popup = this.popup();

	        if (popup.wrapper && popup.wrapper.css("display") == "block") {
	            popup.close();
	        }

	        ui.removeClass("k-hover");
	    },

	    destroy: function() {
	        this._popup.destroy();
	    }
	});

	var InsertTableTool = PopupTool.extend({
	    init: function(options) {
	        this.cols = 8;
	        this.rows = 6;

	        PopupTool.fn.init.call(this, $.extend(options, {
	            command: TableCommand,
	            popupTemplate:
	                "<div class='k-ct-popup'>" +
	                    "<div>" +
	                        new Array(this.cols * this.rows + 1).join("<span class='k-ct-cell k-state-disabled'></span>") +
	                    "</div>" +
	                    "<div class='k-status'></div>" +
	                "</div>"
	        }));
	    },

	    _activate: function() {
	        var that = this,
	            element = that._popup.element,
	            cells = element.find(".k-ct-cell"),
	            firstCell = cells.eq(0),
	            lastCell = cells.eq(cells.length - 1),
	            start = kendo.getOffset(firstCell),
	            end = kendo.getOffset(lastCell),
	            cols = that.cols,
	            rows = that.rows,
	            cellWidth, cellHeight;

	        element.find("*").addBack().attr("unselectable", "on");

	        end.left += lastCell[0].offsetWidth;
	        end.top += lastCell[0].offsetHeight;

	        cellWidth = (end.left - start.left) / cols;
	        cellHeight = (end.top - start.top) / rows;

	        function tableFromLocation(e) {
	            var w = $(window);
	            return {
	                row: Math.floor((e.clientY + w.scrollTop() - start.top) / cellHeight) + 1,
	                col: Math.floor((e.clientX + w.scrollLeft() - start.left) / cellWidth) + 1
	            };
	        }

	        element.autoApplyNS(NS)
	            .on("mousemove", ".k-ct-cell", function(e) {
	                that._setTableSize(tableFromLocation(e));
	            })
	            .on("mouseleave", ".k-ct-cell", function() {
	                that._setTableSize();
	            })
	            .on("down", ".k-ct-cell", function(e) {
	                e.preventDefault();
	                var touch = getTouches(e)[0];
	                that._exec(tableFromLocation(touch.location));
	            });
	    },

	    _valid: function(size) {
	        return size && size.row > 0 && size.col > 0 && size.row <= this.rows && size.col <= this.cols;
	    },

	    _exec: function(size) {
	        if (this._valid(size)) {
	            this._editor.exec("createTable", {
	                rows: size.row,
	                columns: size.col
	            });
	            this._popup.close();
	        }
	    },

	    _setTableSize: function(size) {
	        var element = this._popup.element;
	        var status = element.find(".k-status");
	        var cells = element.find(".k-ct-cell");
	        var cols = this.cols;
	        var messages = this._editor.options.messages;

	        if (this._valid(size)) {
	            status.text(kendo.format(messages.createTableHint, size.row, size.col));

	            cells.each(function(i) {
	                $(this).toggleClass(
	                    SELECTEDSTATE,
	                    i % cols < size.col && i / cols < size.row
	                );
	            });
	        } else {
	            status.text(messages.createTable);
	            cells.removeClass(SELECTEDSTATE);
	        }
	    },

	    _keydown: function(e) {
	        PopupTool.fn._keydown.call(this, e);

	        if (!this._popup.visible()) {
	            return;
	        }

	        var keys = kendo.keys;
	        var key = e.keyCode;
	        var cells = this._popup.element.find(".k-ct-cell");
	        var focus = Math.max(cells.filter(".k-state-selected").last().index(), 0);
	        var selectedRows = Math.floor(focus / this.cols);
	        var selectedColumns = focus % this.cols;

	        var changed = false;

	        if (key == keys.DOWN && !e.altKey) {
	            changed = true;
	            selectedRows++;
	        } else if (key == keys.UP) {
	            changed = true;
	            selectedRows--;
	        } else if (key == keys.RIGHT) {
	            changed = true;
	            selectedColumns++;
	        } else if (key == keys.LEFT) {
	            changed = true;
	            selectedColumns--;
	        }

	        var tableSize = {
	            row: Math.max(1, Math.min(this.rows, selectedRows + 1)),
	            col: Math.max(1, Math.min(this.cols, selectedColumns + 1))
	        };

	        if (key == keys.ENTER) {
	            this._exec(tableSize);
	        } else {
	            this._setTableSize(tableSize);
	        }

	        if (changed) {
	            e.preventDefault();
	            e.stopImmediatePropagation();
	        }
	    },

	    _open: function() {
	        var messages = this._editor.options.messages;

	        PopupTool.fn._open.call(this);

	        this.popup().element
	            .find(".k-status").text(messages.createTable).end()
	            .find(".k-ct-cell").removeClass(SELECTEDSTATE);
	    },

	    _close: function() {
	        PopupTool.fn._close.call(this);
	        this.popup().element.off("." + NS);
	    }
	});

	var TableModificationCommand = Command.extend({
	    undo: function() {
	        var point = this.restorePoint;
	        point.restoreHtml();

	        $(this.editor.body).find(".k-element-resize-handle-wrapper")
	            .each(function(index,el){
	                el.remove();
	            });

	        this.editor.selectRange(point.toRange());
	    },
	    _clearColIndexAttr: function (table) {
	        dom.clearTableMappings(table, "col-index");
	    },
	    _mapColIndices: function (table) {
	        dom.reMapTableColumns(table, "col-index");
	    },
	    _findRowSpanCell: function(parent, rowIndex, colIndex) {
	        var row, cell;

	        for (var i = rowIndex; i >= 0; i--) {
	            row = parent.rows[i];
	            cell = $(row).find("[col-index=" + colIndex +"]");

	            if(cell.length) {
	                return cell;
	            }
	        }
	    },
	    _resetElementResizing: function (editor) {
	        editor._destroyResizings();
	        editor._initializeColumnResizing();
	        editor._initializeRowResizing();
	        editor._initializeElementResizing();
	    },
	    _findNextTdInRow: function (row, colIndex){
	        var lastTd = row.find("td:last-child"),
	            lastIndex = parseInt(lastTd.attr("col-index"), 10) + lastTd.prop("colSpan") - 1,
	            td;

	        for (var i = colIndex; i <= lastIndex; i++) {
	            td = row.find("[col-index=" + i  +"]");
	            if(td.length) {
	                return td;
	            }
	        }
	    },
	    _adjustColgroups: function(row, table) {
	        var colElements = table.getElementsByTagName(COL),
	            colgroupElements = table.getElementsByTagName(COLGROUP),
	            cells = row.cells,
	            numberOfCells = cells.length,
	            i, colgroup, cell;

	        while(colElements.length > 0) {
	            colElements[0].remove();
	        }
	        while(colgroupElements.length > 0) {
	            colgroupElements[0].remove();
	        }

	        for(i = numberOfCells - 1; i >= 0; i--) {
	            cell = cells[i];
	            if(cell.getAttribute(SCOPE) === COLGROUP) {
	                colgroup = dom.createEmptyNode(this.editor.document, COLGROUP);
	                colgroup.setAttribute("span", cell.getAttribute(COLSPAN));
	                table.prepend(colgroup);
	            } else {
	                table.prepend(dom.createEmptyNode(this.editor.document, COL));
	            }
	        }
	    },
	    _associateHeaderIds: function(table) {
	        dom.clearTableMappings(table, "col-index");
	        dom.reMapTableColumns(table, "col-index");
	        $(table).find("th, td").removeAttr("id headers");
	        dom.associateWithIds(table);
	    },
	    _getNumberOfColumns: function(table) {
	        return dom._getNumberOfColumns(table, "td, th");
	    }
	});

	var InsertRowCommand = TableModificationCommand.extend({
	    exec: function () {
	        var range = this.lockRange(true),
	            td = dom.closest(range.endContainer, [TD, TH]),
	            table = dom.closest(td, TABLE),
	            position = this.options.position || "after",
	            cellCount, row, cell,
	            newRow, rowIndex, rowSpanIndex, createdCell;

	        if (!table || (this.immutables() && Editor.Immutables.immutableParent(td))) {
	            this.releaseRange(range);
	            return;
	        }

	        this._mapColIndices(table);

	        row = td.parentNode;
	        rowIndex = dom.findNodeIndex(row, true);

	        if(td.rowSpan > 1 && position === "after") {
	            row = table.rows[rowIndex + td.rowSpan - 1];
	        }

	        cellCount = this._getNumberOfColumns(table);
	        newRow = row.cloneNode(true);
	        $(newRow).empty();

	        for (var i = 0; i < cellCount; i = i + cell.prop("colSpan")) {
	            cell = $(row).find("[col-index=" + i +"]");

	            if (cell.length) {
	                if(cell.prop("rowSpan") > 1 && position === "after" && cell) {
	                    cell.attr(ROWSPAN, cell.prop("rowSpan") + 1);
	                } else {
	                    this._appendCell(newRow, cell);
	                }
	            } else {
	                rowIndex = dom.findNodeIndex(row, true);
	                cell = this._findRowSpanCell(row.parentElement, rowIndex, i);
	                rowSpanIndex = cell.closest(TR).index();

	                if(rowSpanIndex + cell.prop("rowSpan") - 1 === rowIndex && position === "after") {
	                    this._appendCell(newRow, cell);
	                } else {
	                    cell.attr(ROWSPAN, cell.prop("rowSpan") + 1);
	                }
	            }

	            createdCell = $(newRow).find("[col-index=" + i +"]");
	            if(createdCell.attr(SCOPE) === ROWGROUP && !createdCell.attr(ROWSPAN)) {
	                createdCell.attr(SCOPE, ROW);
	            }
	        }

	        if (position == "before") {
	            dom.insertBefore(newRow, row);
	        } else {
	            dom.insertAfter(newRow, row);
	        }

	        if ($(table).find("[headers]").length > 0) {
	            this._associateHeaderIds(table);
	        }

	        this._clearColIndexAttr(table);
	        this.releaseRange(range);

	        this._resetElementResizing(this.editor);
	    },
	    _appendCell: function(row, cell){
	        var newCell;

	        newCell = cell.clone();
	        newCell.html(Editor.emptyTableCellContent);
	        newCell.removeAttr(ROWSPAN);
	        newCell.appendTo(row);
	    }
	});

	var InsertColumnCommand = TableModificationCommand.extend({
	    exec: function () {
	        var range = this.lockRange(true),
	            td = dom.closest(range.endContainer, [TD, TH]),
	            table = dom.closest(td, TABLE),
	            colElements = table.getElementsByTagName(COL),
	            colgroupElements = table.getElementsByTagName(COLGROUP),
	            columnIndex,
	            i,
	            rows = table && table.rows,
	            cell,
	            newCell,
	            position = this.options.position || "after";


	        if (!td || (this.immutables() && Editor.Immutables.immutableParent(td))) {
	            this.releaseRange(range);
	            return;
	        }

	        this._mapColIndices(table);

	        columnIndex = parseInt(td.getAttribute("col-index"),10);

	        if (td.colSpan > 1 && position === "after") {
	            td.setAttribute("col-index", columnIndex + td.colSpan - 1);
	            columnIndex = columnIndex + td.colSpan - 1;
	        }

	        for (i = 0; i < rows.length; i++) {
	            cell = this._processForColSpan(rows[i], columnIndex, position, td);

	            if (!cell){
	                continue;
	            }

	            newCell = cell.cloneNode();
	            newCell.innerHTML = Editor.emptyTableCellContent;
	            newCell.removeAttribute(COLSPAN);

	            if(newCell.getAttribute(SCOPE) && newCell.getAttribute(SCOPE) === COLGROUP) {
	                newCell.setAttribute(SCOPE, COL);
	            }

	            if (position == "before") {
	                dom.insertBefore(newCell, cell);
	            } else {
	                dom.insertAfter(newCell, cell);
	            }

	            this._resizeCells(newCell, cell);
	        }

	        if(colElements.length > 0 || colgroupElements.length > 0) {
	            this._adjustColgroups(rows[0], table);
	        }

	        if ($(table).find("[headers]").length > 0) {
	            this._associateHeaderIds(table);
	        }

	        this._clearColIndexAttr(table);
	        this.releaseRange(range);

	        this._resetElementResizing(this.editor);
	    },
	    _processForColSpan: function (row, columnIndex, position, selectedCell) {
	        var cell,
	            colSpanEffect,
	            index = columnIndex - 1;

	        cell = $(row).find("[col-index=" + columnIndex +"]")[0];

	        if (cell && cell.colSpan > 1 && position === "after" && cell !== selectedCell) {
	            cell.colSpan += 1;
	            return;
	        }

	        if (cell) {
	            return cell;
	        }

	        for (index; index >= 0; index--) {
	            cell = $(row).find("[col-index=" + index +"]")[0];

	            if(cell && cell.colSpan > 1) {
	                break;
	            }
	        }

	        if(!cell) {
	            return;
	        }

	        colSpanEffect = parseInt(cell.getAttribute("col-index"),10) + cell.colSpan - 1;

	        if(colSpanEffect === columnIndex && position === "after") {
	            return cell;
	        } else if (columnIndex <= colSpanEffect){
	            cell.setAttribute(COLSPAN, cell.colSpan + 1);
	        }
	    },
	    _resizeCells: function(newCell, cell) {
	        var width = newCell.style.width,
	        parsedWidth, unit, calculatedWidth;

	        if(!width) {
	            return;
	        }

	        parsedWidth = parseFloat(width);
	        unit = width.slice(parsedWidth.toString().length);
	        calculatedWidth = (parsedWidth / 2) + unit;

	        newCell.style.width = calculatedWidth;
	        cell.style.width = calculatedWidth;
	    }
	});

	var DeleteRowCommand = TableModificationCommand.extend({
	    exec: function () {
	        var range = this.lockRange();
	        var rows = RangeUtils.mapAll(range, function(node) {
	            return $(node).closest(TR)[0];
	        });
	        var td = dom.closest(range.endContainer, [TD, TH]);
	        var row = rows[0];
	        var rowSpan = td ? td.rowSpan : 1;
	        var rowIndex = $(rows[0]).index();
	        var table = dom.closest(row, TABLE);
	        var rowParent = row.parentElement;
	        var focusElement;

	        if (!table || (this.immutables() && Editor.Immutables.immutableParent(row))) {
	            this.releaseRange(range);
	            return;
	        }

	        for (var x = 0; x < rowSpan; x++) {
	            if(rows.indexOf(rowParent.rows[rowIndex + x]) < 0) {
	                rows.push(rowParent.rows[rowIndex + x]);
	            }
	        }

	        if (table.rows.length <= rows.length) {
	            focusElement = dom.next(table);
	            if (!focusElement || dom.insignificant(focusElement)) {
	                focusElement = dom.prev(table);
	            }

	            if (focusElement && focusElement.rows) {
	                focusElement = focusElement.rows[0].cells[0];
	            }

	            dom.remove(table);
	            this._resetElementResizing(this.editor);
	        } else if(rowParent.rows.length <= rows.length) {
	            focusElement = rowParent.nextSibling;

	            if(!focusElement) {
	                focusElement = rowParent.previousSibling;
	            }

	            dom.remove(rowParent);
	        } else {
	            this._mapColIndices(table);

	            for (var i = 0; i < rows.length; i++) {
	                row = rows[i];
	                dom.removeTextSiblings(row);
	                focusElement = dom.next(row) || dom.prev(row);
	                focusElement = focusElement.cells[0];

	                // IE needs to focus the new row before removing the old one
	                this._focusElement(range, focusElement);
	                focusElement = null;

	                this._handleRowSpanCells(table, row);

	                dom.remove(row);
	            }

	            this._clearColIndexAttr(table);
	        }

	        if ($(table).find("[headers]").length > 0) {
	            this._associateHeaderIds(table);
	        } else if (dom.is(rowParent, THEAD) && $(table).find("[scope]").length > 0) {
	            this._adjustColgroups(rowParent.rows[0], table);
	        }

	        if (focusElement) {
	            this._focusElement(range, focusElement);
	        }

	        this._resetElementResizing(this.editor);
	    },
	    _focusElement: function (range, node) {
	        range.setStart(node, 0);
	        range.collapse(true);
	        this.editor.selectRange(range);
	    },
	    _handleRowSpanCells: function (table, row) {
	        var index, cell, adjacentCell, nextRow, rowIndex = dom.findNodeIndex(row, true),
	            firstRow = table.rows[0],
	            lastCell = firstRow.cells[firstRow.cells.length - 1],
	            lastIndex = parseInt(lastCell.getAttribute("col-index"),10) + lastCell.colSpan - 1;

	        for (index = 0; index <= lastIndex; index = index + cell.prop("colSpan")) {
	            cell = $(row).find("[col-index=" + index + "]");

	            if(cell.length && cell.prop("rowSpan") > 1) {
	                nextRow = table.rows[rowIndex+1];
	                adjacentCell = $(nextRow).find("[col-index=" + (index + 1) + "]");

	                if(adjacentCell.length) {
	                    adjacentCell.before(cell);
	                } else {
	                    $(nextRow).append(cell);
	                }
	                this._reduceRowSpan(cell);
	            }

	            if(!cell.length) {
	                cell = this._findRowSpanCell(row.parentElement, rowIndex, index);
	                this._reduceRowSpan(cell);
	            }
	        }
	    },
	    _reduceRowSpan: function (td) {
	        var rowSpanValue = td.prop("rowSpan") - 1;

	        if(rowSpanValue <= 1) {
	            td.removeAttr(ROWSPAN);
	            if(td.attr(SCOPE) === ROWGROUP) {
	                td.attr(SCOPE, ROW);
	            }
	        } else {
	            td.attr(ROWSPAN, rowSpanValue);
	        }
	    }
	});

	var DeleteColumnCommand = TableModificationCommand.extend({
	    exec: function () {
	        var range = this.lockRange(),
	            td = dom.closest(range.endContainer, [TD, TH]),
	            table = dom.closest(td, TABLE),
	            rows = table && table.rows,
	            columnIndex = dom.findNodeIndex(td, true),
	            columnCount = rows && rows[0].cells.length,
	            colElements = table.getElementsByTagName(COL),
	            colgroupElements = table.getElementsByTagName(COLGROUP),
	            focusElement, i, cell, x;

	        if (!td || (this.immutables() && Editor.Immutables.immutableParent(td))) {
	            this.releaseRange(range);
	            return;
	        }

	        if (columnCount == 1 || td.colSpan == columnCount) {
	            focusElement = dom.next(table);
	            if (!focusElement || dom.insignificant(focusElement)) {
	                focusElement = dom.prev(table);
	            }

	            if (focusElement && focusElement.rows) {
	                focusElement = focusElement.rows[0].cells[0];
	            }

	            dom.remove(table);
	            this._resetElementResizing(this.editor);
	        } else {
	            dom.removeTextSiblings(td);

	            focusElement = dom.next(td) || dom.prev(td);

	            this._mapColIndices(table);

	            columnIndex = parseInt(td.getAttribute("col-index"), 10);

	            for (x = 0; x < td.colSpan; x++) {
	                for (i = 0; i < rows.length; i = i + (cell.prop("rowSpan") || 1)) {
	                    cell = $(rows[i]).find("[col-index=" + (columnIndex + x) + "]");

	                    if(cell.length && cell.prop("colSpan") <= 1) {
	                        cell.remove();
	                    } else {
	                        this._handleColSpanCells(rows[i], columnIndex + x);
	                    }
	                }
	            }

	            this._clearColIndexAttr(table);
	        }

	        if(colElements.length > 0 || colgroupElements.length > 0) {
	            this._adjustColgroups(rows[0], table);
	        }

	        if ($(table).find("[headers]").length > 0) {
	            this._associateHeaderIds(table);
	        }

	        if (focusElement) {
	            range.setStart(focusElement, 0);
	            range.collapse(true);
	            this.editor.selectRange(range);
	        }

	        this._resetElementResizing(this.editor);
	    },
	    _handleColSpanCells: function (row, colIndex) {
	        var cell = $(row).find("[col-index=" + colIndex + "]");

	        if(cell.length && cell.prop("colSpan") > 1) {
	            var clone = cell.clone(true);
	            cell.after(clone);
	            this._reduceColSpan(clone);
	            clone.attr("col-index", parseInt(cell.attr("col-index"),10) + 1);
	            cell.remove();
	            return;
	        }

	        for (var i = colIndex; i >= 0; i--) {
	            cell = $(row).find("[col-index=" + i + "]");

	            if(cell.length) {
	                this._reduceColSpan(cell);
	                cell.attr("col-index", parseInt(cell.attr("col-index"),10) + 1);
	                return;
	            }
	        }
	    },
	    _reduceColSpan: function (td) {
	        var colSpanValue = td.prop("colSpan") - 1;

	        if(colSpanValue <= 1) {
	            td.removeAttr(COLSPAN);
	            if(td.attr(SCOPE) === COLGROUP) {
	                td.attr(SCOPE, COL);
	            }
	        } else {
	            td.attr(COLSPAN, colSpanValue);
	        }
	    }
	});

	var MergeCellsHorizontallyCommand = TableModificationCommand.extend({
	    exec: function () {
	        var range = this.lockRange(),
	            td = dom.closest(range.endContainer, [TD, TH]),
	            table, row, columnIndex, nextTd, colspan;

	            if(!td) {
	                this.releaseRange(range);
	                return;
	            }

	            table = dom.closest(td, TABLE);
	            row = td.parentNode;
	            columnIndex = dom.findNodeIndex(td, true);
	            nextTd = row.children[columnIndex + 1];

	            if (this.immutables() && Editor.Immutables.immutableParent(td)) {
	                this.releaseRange(range);
	                return;
	            }

	            this._mapColIndices(table);

	            columnIndex = parseInt($(td).attr("col-index"), 10);
	            nextTd = $(row).find("[col-index=" + (columnIndex + 1 + this._getColspan(td) - 1) + "]").get(0);

	            if(!nextTd || nextTd.rowSpan !== td.rowSpan || td.tagName !== nextTd.tagName) {
	                this._clearColIndexAttr(table);
	                this.releaseRange(range);
	                return;
	            }

	            colspan = this._getColspan(td) + this._getColspan(nextTd);

	            $(td).prop(COLSPAN, colspan)
	                 .append(dom.emptyNode(nextTd) ? "" : "<br/>" + nextTd.innerHTML);

	            $(td).width(td.offsetWidth);
	            $(nextTd).remove();

	            if(td.getAttribute(SCOPE) === COL) {
	                td.setAttribute(SCOPE, COLGROUP);
	            }
	            if(td.getAttribute(SCOPE) === COLGROUP) {
	                this._adjustColgroups(row, table);
	            }

	            if ($(table).find("[headers]").length > 0) {
	                this._associateHeaderIds(table);
	            }

	            this._clearColIndexAttr(table);
	            this.releaseRange(range);
	            this._resetElementResizing(this.editor);
	    },
	    _getColspan: function (td) {
	        return parseInt(td.getAttribute(COLSPAN), 10) || 1;
	    }
	});

	var MergeCellsVerticallyCommand = TableModificationCommand.extend({
	    exec: function () {
	        var range = this.lockRange(),
	            td = dom.closest(range.endContainer, [TD, TH]),
	            tr, parent, table, columnIndex, rowIndex, targetRow,  bottomTd;

	            if(!td) {
	                this.releaseRange(range);
	                return;
	            }

	            tr = dom.closest(td, TR);
	            parent = dom.closest(td, [THEAD, TBODY]);
	            table = dom.closest(td, TABLE);
	            columnIndex = dom.findNodeIndex(td, true);
	            rowIndex = dom.findNodeIndex(tr, true);

	            if (rowIndex + 1 === parent.rows.length) {
	                this.releaseRange(range);
	                return;
	            }

	            targetRow = parent.rows[rowIndex + this._getRowspan(td)];
	            bottomTd = targetRow && targetRow.children[columnIndex];

	            if (this.immutables() && Editor.Immutables.immutableParent(td)) {
	                this.releaseRange(range);
	                return;
	            }

	            this._mapColIndices(table);

	            columnIndex = $(td).attr("col-index");
	            bottomTd = $(targetRow).find("[col-index=" + columnIndex + "]").get(0);

	            if(!bottomTd || bottomTd.colSpan !== td.colSpan || td.tagName !== bottomTd.tagName) {
	                this._clearColIndexAttr(table);
	                this.releaseRange(range);
	                return;
	            }

	            $(td).prop(ROWSPAN, this._getRowspan(td) + this._getRowspan(bottomTd))
	                 .append(dom.emptyNode(bottomTd) ? "" : "<br/>" + bottomTd.innerHTML);

	            if(td.getAttribute(SCOPE) === ROW) {
	                td.setAttribute(SCOPE, ROWGROUP);
	            }

	            $(bottomTd).remove();

	            if ($(table).find("[headers]").length > 0) {
	                this._associateHeaderIds(table);
	            }

	            this._clearColIndexAttr(table);
	            this.releaseRange(range);
	    },
	    _getRowspan: function (td) {
	        return parseInt(td.getAttribute(ROWSPAN), 10) || 1;
	    }
	});

	var SplitCellCommand = TableModificationCommand.extend({
	    exec: function () {
	        var range = this.lockRange(),
	            type = this.options.type,
	            attr = type === "row" ? COLSPAN : ROWSPAN,
	            td = dom.closest(range.endContainer, [TD, TH]),
	            parent = dom.closest(td, [THEAD, TBODY]),
	            table = dom.closest(td, TABLE),
	            emptyTd = dom.createEmptyNode(this.editor.document, td.nodeName.toLowerCase());

	        if (!td || (this.immutables() && Editor.Immutables.immutableParent(td))) {
	            this.releaseRange(range);
	            return;
	        }

	        this._mapColIndices(table);

	        if(type === "row" && $(td).is("[" + attr + "]")) {
	            this._splitCellHorizontally(td, parent, attr, emptyTd);
	        } else if (type === "column" && $(td).is("[" + attr + "]")){
	            this._splitCellVertically(td, parent, attr, emptyTd);
	        }

	        if($(td).prop(attr.toLowerCase()) <= 1) {
	            $(td).removeAttr(attr);
	        }

	        if ($(table).find("[headers]").length > 0) {
	            this._associateHeaderIds(table);
	        }

	        this._clearColIndexAttr(table);
	        this.releaseRange(range);
	    },
	    _getRowspanValue: function (td) {
	        return parseInt(td.getAttribute(ROWSPAN), 10);
	    },
	    _getColspanValue: function (td) {
	        return parseInt(td.getAttribute(COLSPAN), 10);
	    },
	    _splitCellHorizontally: function (td, parent, attr, emptyTd) {
	        var rowSpan = td.rowSpan,
	            colSpan = td.colSpan,
	            tdToAdd = $(emptyTd),
	            colSpanResult = Math.floor(colSpan/2);

	            if(colSpanResult > 1) {
	                tdToAdd.attr(COLSPAN, colSpanResult);
	            }

	            if(rowSpan > 1) {
	                tdToAdd.attr(ROWSPAN, rowSpan);
	            }

	            $(td).prop(attr, colSpan - colSpanResult)
	                .after(tdToAdd);

	            $(td).width(td.offsetWidth);
	            tdToAdd.width(tdToAdd[0].offsetWidth);

	            if(td.hasAttribute(SCOPE)) {
	                if(td.getAttribute(SCOPE) === COLGROUP) {
	                    tdToAdd.attr(SCOPE, COL);
	                    if(!td.getAttribute(COLSPAN) || td.getAttribute(COLSPAN) === "1") {
	                        td.setAttribute(SCOPE, COL);
	                    }

	                    this._adjustColgroups(td.parentNode, parent.parentNode);
	                } else {
	                    tdToAdd.attr(SCOPE, td.getAttribute(SCOPE));
	                }
	            }
	    },
	    _splitCellVertically: function (td, parent, attr, emptyTd) {
	        var tr = dom.closest(td,TR),
	            columnIndex = parseInt($(td).attr("col-index"), 10),
	            rowIndex = dom.findNodeIndex(tr, true),
	            rowSpan = td.rowSpan,
	            colSpan = td.colSpan,
	            rowSpanResult = Math.floor(rowSpan/2),
	            targetRow = $(parent).find(TR).eq(rowIndex + rowSpan - rowSpanResult),
	            nextTd = this._findNextTdInRow(targetRow, columnIndex + colSpan),
	            tdToAdd = $(emptyTd);

	            if(rowSpanResult > 1) {
	                tdToAdd.attr(ROWSPAN, rowSpanResult);
	            }
	            if(colSpan > 1) {
	                tdToAdd.attr(COLSPAN, colSpan);
	            }

	            if(nextTd && nextTd.length) {
	                nextTd.before(tdToAdd);
	            } else {
	                targetRow.append(tdToAdd);
	            }

	            $(td).prop(attr, rowSpan - rowSpanResult);

	            if(td.hasAttribute(SCOPE)) {
	                if(td.getAttribute(SCOPE) === ROWGROUP) {
	                    tdToAdd.attr(SCOPE, ROW);
	                    if(!td.getAttribute(ROWSPAN) || td.getAttribute(ROWSPAN) === "1"){
	                        td.setAttribute(SCOPE, ROW);
	                    }
	                } else {
	                    tdToAdd.attr(SCOPE, td.getAttribute(SCOPE));
	                }
	            }
	    }
	});

	var TableModificationTool = Tool.extend({
	    command: function (options) {
	        var commandsMap = {
	            row: {
	                insert: InsertRowCommand,
	                "delete": DeleteRowCommand,
	                merge: MergeCellsHorizontallyCommand,
	                split: SplitCellCommand
	            },
	            column: {
	                insert: InsertColumnCommand,
	                "delete": DeleteColumnCommand,
	                merge: MergeCellsVerticallyCommand,
	                split: SplitCellCommand
	            }
	        };

	        options = extend(options, this.options);
	        options.action = options.action || "insert";

	        return new commandsMap[options.type][options.action](options);
	    },
	    initialize: function(ui, options) {
	        Tool.fn.initialize.call(this, ui, options);
	        ui.addClass("k-disabled");
	        ui.attr("disabled", "disabled");
	    },

	    update: function(ui, nodes) {
	        var isFormatted = !tableFormatFinder.isFormatted(nodes);

	        if (isFormatted === true) {
	            ui.parent().addClass("k-hidden k-disabled");
	            ui.attr("disabled", "disabled");
	            ui.addClass("k-disabled");
	        } else {
	            ui.parent().removeClass("k-hidden k-disabled");
	            ui.prop("disabled", false);
	            ui.removeClass("k-disabled");
	        }
	    }
	});

	var TableFormatCommand = FormatCommand.extend({
	    exec: function () {
	        var that = this;
	        var editor = that.editor;

	        FormatCommand.fn.exec.call(this);

	        if(editor.elementResizing) {
	            editor.elementResizing._showResizeHandles();
	        }
	    }
	});

	// var tableAlignFormatFinder = BlockFormatFinder.extend({

	// });

	var TableFormatTool = BlockFormatTool.extend({
	    initialize: function(ui, options) {
	        BlockFormatTool.fn.initialize.call(this, ui, options);
	        ui.addClass("k-disabled");
	        ui.attr("disabled", "disabled");
	    },
	    update: function(ui, nodes) {
	        var isTable = !tableFormatFinder.isFormatted(nodes);
	        var isFormatted = this.options.finder.isFormatted(nodes, this.isTable);

	        if (isTable === true) {
	            ui.parent().addClass("k-hidden k-disabled");
	            ui.attr("disabled", "disabled");
	            ui.addClass("k-disabled");
	        } else {
	            ui.parent().removeClass("k-hidden k-disabled");
	            ui.prop("disabled", false);
	            ui.removeClass("k-disabled");
	        }

	        ui.toggleClass("k-selected", isFormatted);
	        ui.attr("aria-pressed", isFormatted);
	    },
	    command: function(commandArguments) {
	        var that = this;

	        return new TableFormatCommand(extend(commandArguments, {
	            formatter: that.options.formatter
	        }));
	    },
	    isTable: function(node){
	        return dom.is(node, "table");
	    }
	});

	extend(kendo.ui.editor, {
	    PopupTool: PopupTool,
	    TableCommand: TableCommand,
	    InsertTableTool: InsertTableTool,
	    TableFormatTool: TableFormatTool,
	    TableFormatCommand: TableFormatCommand,
	    TableModificationTool: TableModificationTool,
	    InsertRowCommand: InsertRowCommand,
	    InsertColumnCommand: InsertColumnCommand,
	    DeleteRowCommand: DeleteRowCommand,
	    DeleteColumnCommand: DeleteColumnCommand,
	    MergeCellsHorizontallyCommand: MergeCellsHorizontallyCommand,
	    MergeCellsVerticallyCommand: MergeCellsVerticallyCommand,
	    SplitCellCommand: SplitCellCommand
	});

	registerTool("createTable", new InsertTableTool({ template: new ToolTemplate({template: EditorUtils.buttonTemplate, popup: true, title: "Create table"})}));

	registerTool("addColumnLeft", new TableModificationTool({ type: "column", position: "before", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Add column on the left"})}));
	registerTool("addColumnRight", new TableModificationTool({ type: "column", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Add column on the right"})}));
	registerTool("addRowAbove", new TableModificationTool({ type: "row", position: "before", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Add row above"})}));
	registerTool("addRowBelow", new TableModificationTool({ type: "row", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Add row below"})}));
	registerTool("deleteRow", new TableModificationTool({ type: "row", action: "delete", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Delete row"})}));
	registerTool("deleteColumn", new TableModificationTool({ type: "column", action: "delete", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Delete column"})}));
	registerTool("mergeCellsHorizontally", new TableModificationTool({type: "row", action: "merge", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Merge Cell Right"})}));
	registerTool("mergeCellsVertically", new TableModificationTool({type: "column", action: "merge", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Merge Cell Down"})}));
	registerTool("splitCellHorizontally", new TableModificationTool({type: "row", action: "split", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Split Cell"})}));
	registerTool("splitCellVertically", new TableModificationTool({type: "column", action: "split", template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Split Cell"})}));

	registerFormat("tableAlignLeft", [
	    { tags: ["table"], attr: { style: { marginLeft: "", marginRight: "auto" }} },
	    { tags: ["table"], attr: { align: "left" } }
	]);
	registerTool("tableAlignLeft", new TableFormatTool({
	    format: formats.tableAlignLeft,
	    template: new ToolTemplate({
	        template: EditorUtils.buttonTemplate,
	        title: "Table Align Left"
	    })
	}));

	registerFormat("tableAlignCenter", [
	    { tags: ["table"], attr: { style: { marginLeft: "auto", marginRight: "auto" }} },
	    { tags: ["table"], attr: { align: "center" } }
	]);
	registerTool("tableAlignCenter", new TableFormatTool({
	    format: formats.tableAlignCenter,
	    template: new ToolTemplate({
	        template: EditorUtils.buttonTemplate,
	        title: "Table Align Center"
	    })
	}));

	registerFormat("tableAlignRight", [
	    { tags: ["table"], attr: { style: { marginLeft: "auto", marginRight: "" }} },
	    { tags: ["table"], attr: { align: "right" } }
	]);
	registerTool("tableAlignRight", new TableFormatTool({
	    format: formats.tableAlignRight,
	    template: new ToolTemplate({
	        template: EditorUtils.buttonTemplate,
	        title: "Table Align Left"
	    })
	}));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 1006:
/***/ (function(module, exports) {

	module.exports = require("./insert");

/***/ })

/******/ });