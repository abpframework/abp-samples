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

	module.exports = __webpack_require__(1023);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	   !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1024)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	(function($, undefined) {

	var kendo = window.kendo,
	    Editor = kendo.ui.editor,
	    EditorUtils = Editor.EditorUtils,
	    RangeUtils = Editor.RangeUtils,
	    dom = Editor.Dom,
	    registerTool = EditorUtils.registerTool,
	    ToolTemplate = Editor.ToolTemplate,
	    Command = Editor.Command;

	var tableFormatFinder = new Editor.BlockFormatFinder([{tags:["table"]}]);
	var cellsFormatFinder = new Editor.BlockFormatFinder([{tags:["td","th"]}]);
	var reUnit = /([a-z]+|%)$/i;

	var COL = "col";
	var ROW = "row";
	var COLGROUP = "colgroup";
	var SCOPE = "scope";
	var COL_INDEX = "col-index";
	var TH = "th";
	var TD = "td";
	var THEAD = "thead";
	var HEADERS = "headers";
	var TABLE = "table";

	var TableWizardCommand = Command.extend({
	    exec: function() {
	        var cmd = this;
	        var editor = cmd.editor;
	        var range = cmd.range = cmd.lockRange();
	        var selectedTable = cmd._sourceTable = !cmd.options.insertNewTable ? cmd._selectedTable(range) : undefined;
	        var selectedCells = cmd._selectedTableCells = selectedTable ? cmd._selectedCells(range) : undefined;
	        var options = {
	            visible: false,
	            messages: editor.options.messages,
	            closeCallback: $.proxy(cmd.onDialogClose, cmd),
	            table: cmd.parseTable(selectedTable, selectedCells),
	            dialogOptions: editor.options.dialogOptions,
	            isRtl: kendo.support.isRtl(editor.wrapper)
	        };

	        var dialog = new Editor.TableWizardDialog(options);
	        dialog.open();
	    },

	    onDialogClose: function(data) {
	        var cmd = this;
	        cmd.releaseRange(cmd.range);

	        if (data) { //Ok button pressed
	            if (cmd.options.insertNewTable) {
	                cmd.insertTable(cmd.createNewTable(data));
	            } else {
	                cmd.updateTable(data, cmd._sourceTable, cmd._selectedTableCells);
	            }
	        }
	    },
	    releaseRange: function(range) {
	        var cmd = this;
	        var doc = cmd.editor.document;
	        dom.windowFromDocument(doc).focus();
	        Command.fn.releaseRange.call(cmd, range);
	    },
	    insertTable: function(table) {
	        var range = this.range;

	        range.insertNode(table);
	        range.collapse(true);
	        this.editor.selectRange(range);

	        this._ensureFocusableAfterTable(table);
	    },
	    _ensureFocusableAfterTable: function (table) {
	        var siblingNodes = $(table).parent().contents();
	        var lastSiblingIndex = siblingNodes.length - 1;
	        var lastSibling = siblingNodes.get(lastSiblingIndex);

	        while(lastSibling.nodeValue !== null && (lastSibling.nodeValue === " " || lastSibling.nodeValue === "")) {
	            lastSiblingIndex -= 1;
	            lastSibling = siblingNodes.get(lastSiblingIndex);
	        }

	        if(lastSibling === table) {
	            dom.insertAfter(dom.createEmptyNode(this.editor.document, "p"), table);
	        }
	    },
	    updateTable: function(data, table, selectedCells) {
	        var cmd = this;
	        var tableRows = $(table.rows).toArray();
	        var tableProp = data.tableProperties;
	        var rows = tableProp.rows;
	        var tHead = table.tHead;
	        var last = cmd._lastInCollection;
	        var lastSelectedRow, cellProp;

	        //Leave only first selected cell
	        while (selectedCells.length > 1) {
	            selectedCells.pop();
	        }

	        lastSelectedRow = selectedCells.length ? last(selectedCells).parentNode : last(tableRows);

	        cmd._deleteTableRows(tableRows, tableRows.length - rows);

	        if (tableRows.length < rows) {
	            cmd._addRows(lastSelectedRow, rows, tableRows);
	        }

	        dom.reMapTableColumns(table, COL_INDEX);
	        cmd._updateColumns(tableRows, tableProp.columns, selectedCells, lastSelectedRow);
	        cmd._updateTableProperties(table, tableProp);

	        cellProp = data.cellProperties;
	        if (selectedCells[0]) {
	            dom.attr(selectedCells[0], {id: cellProp.id || null});
	        }
	        (cellProp.selectAllCells ? $(tableRows).children() : $(selectedCells)).each(function(i, cell){
	            cmd._updateCellProperties(cell, cellProp);
	        });

	        cmd._updateCaption(table, tableProp);

	        if(tHead) {
	            cmd._updateHeadersWithThead(table, data);
	        } else {
	            cmd._updateHeadersNoThead(table, data);
	        }

	        cmd._updateHeaderAssociates(table, tableProp);
	        dom.clearTableMappings(table, COL_INDEX);
	    },
	    _isHeadingRow: function(row) {
	        return dom.is(row.cells[0], TH) && dom.is(row.parentNode, THEAD);
	    },
	    _isHeadingCell: function(cell) {
	        return dom.is(cell, TH);
	    },
	    cellsWithHeadersAssociated: function(table) {
	        var cells = $(table.rows).children();
	        var headingIds = [];
	        var checkHeader = function(header){
	            return headingIds.indexOf(header) > -1;
	        };

	        cells.each(function(c, cell) {
	            if (cell.id && dom.is(cell, TH)) {
	                headingIds.push(cell.id);
	            }
	        });

	        var associatedCells = cells.filter(function(c, cell) {
	            var headersAttr = cell.getAttribute(HEADERS);
	            var headersArray;

	            if(headersAttr && !dom.is(cell, TH)) {
	                headersArray = headersAttr.split(" ");

	                if(headersArray && headersArray.length > 0) {
	                    return headersArray.some(checkHeader);
	                }
	            }

	            return false;
	        });

	        return !!associatedCells.length;
	    },
	    _insertCells: function(count, row, index) {
	        index = isNaN(index) ? -1 : index;
	        for (var i = 0, cell; i < count; i++) {
	            cell = row.insertCell(index);
	            cell.innerHTML = "&nbsp;";
	        }
	    },
	    _deleteTableRows: function(rows, count){
	        for (var i = 0, row, rowParent; i < count; i++) {
	            row = rows.pop();
	            rowParent = row.parentNode;
	            rowParent.removeChild(row);
	            if (!rowParent.rows.length) {
	                dom.remove(rowParent);
	            }
	        }
	    },
	    createNewTable: function(data) {
	        var cmd = this;
	        var doc = cmd.editor.document;
	        var tableProp = data.tableProperties;
	        var table = dom.create(doc, TABLE);
	        var rowIndex = 0;
	        var thead;

	        cmd._updateTableProperties(table, tableProp);
	        cmd._updateCaption(table, tableProp);

	        if(tableProp.headerRows && tableProp.headerRows > 0) {
	            thead = table.createTHead();
	            cmd._createTableRows(data, thead, rowIndex, true);
	            rowIndex += tableProp.headerRows;
	        }

	        var tbody = table.createTBody();
	        cmd._createTableRows(data, tbody, rowIndex, false);

	        dom.reMapTableColumns(table, COL_INDEX);

	        if (tableProp.cellsWithHeaders === "ids") {
	            dom.associateWithIds(table);
	        } else if(tableProp.cellsWithHeaders === "scope") {
	            cmd._addScopes(table, tableProp.headerRows, tableProp.headerColumns);
	        }

	        dom.clearTableMappings(table, COL_INDEX);

	        return table;
	    },
	    _createTableRows: function(data, container, initialIndex, headerRows) {
	        var cmd = this;
	        var tableProp = data.tableProperties;
	        var cellProp = data.cellProperties;
	        var columns = tableProp.columns;
	        var rows = headerRows ? tableProp.headerRows : tableProp.rows;
	        var cellPropToAll = cellProp.selectAllCells;
	        var headerColumns = tableProp.headerColumns;

	        for (var r = initialIndex, row; r < rows; r++) {
	            row = container.insertRow();

	            for (var c = 0, cell; c < columns; c++) {
	                if(headerRows || headerColumns > c) {
	                    cell = document.createElement(TH);
	                } else {
	                    cell = document.createElement(TD);
	                }

	                row.appendChild(cell);
	                cell.innerHTML = "&nbsp;";
	                if (r === 0 && c === 0 && cellProp.id) {
	                    cell.id = cellProp.id;
	                }
	                cmd._updateCellProperties(cell, (cellPropToAll || (r === 0 && c === 0)) ? cellProp : {});
	            }
	        }
	    },
	    _addRows: function(lastSelectedRow, rows, tableRows) {
	        var cmd = this;
	        var rowIndex = $(lastSelectedRow).index();
	        var cellsLength = lastSelectedRow.cells.length;
	        var newRowsCount = rows - tableRows.length;
	        var parent = lastSelectedRow.parentNode;
	        var row;

	        while (newRowsCount) {
	            row = parent.insertRow(rowIndex + 1);
	            cmd._insertCells(cellsLength - row.cells.length, row);
	            newRowsCount--;
	        }
	    },
	    _updateColumns: function(tableRows, columns, selectedCells, lastSelectedRow) {
	        var cmd = this;
	        var last = cmd._lastInCollection;
	        var firstRowLastCell = last(tableRows[0].cells);
	        var numberOfColumns = Number(firstRowLastCell.getAttribute(COL_INDEX)) + firstRowLastCell.colSpan;

	        if (numberOfColumns > columns) {
	            $(tableRows).each(function(i, row){
	                var lastCurrentCell = last(row.cells);
	                var rowColumns = Number(lastCurrentCell.getAttribute(COL_INDEX)) + lastCurrentCell.colSpan;

	                while(rowColumns > columns) {
	                    if(lastCurrentCell.colSpan && lastCurrentCell.colSpan > 1) {
	                        lastCurrentCell.colSpan -= 1;
	                    } else {
	                        row.deleteCell(-1);
	                    }

	                    lastCurrentCell = last(row.cells);
	                    rowColumns = Number(lastCurrentCell.getAttribute(COL_INDEX)) + lastCurrentCell.colSpan;
	                }
	            });
	        }

	        if (numberOfColumns < columns) {
	            var cellIndex = $(last(selectedCells) || last(lastSelectedRow.cells)).index();
	            $(tableRows).each(function(i, row) {
	                var lastCurrentCell = last(row.cells);
	                cmd._insertCells(columns - Number(lastCurrentCell.getAttribute(COL_INDEX)) - lastCurrentCell.colSpan, row, cellIndex + 1);
	            });
	        }
	    },
	    _updateTableProperties: function(table, data){
	        var style = this._getStylesData(data);
	        dom.attr(table, {
	            cellSpacing: data.cellSpacing || null,
	            cellPadding: data.cellPadding || null,
	            className: data.className || null,
	            id: data.id || null,
	            summary: data.summary || null,
	            style: style || null
	        });
	        $(table).addClass("k-table");
	    },
	    _updateCellProperties: function(cell, data) {
	        var style = this._getStylesData(data);
	        style.padding = data.cellPadding || null;
	        style.margin = data.cellMargin || null;
	        dom.attr(cell, {
	            style: style || null,
	            className: data.className || null
	        });
	    },
	    _updateCaption: function(table, data){
	        if (table.caption && !data.captionContent) {
	            table.deleteCaption();
	        } else if (data.captionContent) {
	            var caption = table.createCaption();
	            caption.innerHTML = data.captionContent;
	            var alignment = this._getAlignmentData(data.captionAlignment);
	            dom.attr(caption, {
	                style: {
	                    textAlign: alignment.textAlign,
	                    verticalAlign: alignment.verticalAlign
	                }
	            });
	        }
	    },
	    _updateHeadersNoThead: function(table, data) {
	        var cmd = this;
	        var tableProp = data.tableProperties;
	        var rows = table.rows;
	        var row, cells, cell, i, j;

	        for(i = 0; i < rows.length; i++) {
	            row = rows[i];
	            cells = row.cells;

	            for(j = 0; j < cells.length; j++) {
	                cell = cells[j];
	                if(!cmd._isHeadingCell(cell) && (i < tableProp.headerRows || tableProp.headerColumns > cell.getAttribute(COL_INDEX))) {
	                    dom.changeTag(cell, TH, false);
	                } else if(cmd._isHeadingCell(cell) && i >= tableProp.headerRows && tableProp.headerColumns <= cell.getAttribute(COL_INDEX)) {
	                    dom.changeTag(cell, TD, false);
	                }
	            }
	        }
	    },
	    _updateHeadersWithThead: function(table, data) {
	        var cmd = this;
	        var tableProp = data.tableProperties;
	        var thead = table.tHead;
	        var rowIndex = 0;
	        var tbody = table.tBodies[0];
	        var row, cell, i;

	        if (!tbody) {
	            tbody = table.createTBody();
	        }

	        if(tableProp.headerRows && tableProp.headerRows > 0) {
	            if (!thead) {
	                thead = table.createTHead();
	            }

	            while(thead.rows.length < tableProp.headerRows) {
	                thead.appendChild(tbody.rows[0]);
	            }

	            while(thead.rows.length > tableProp.headerRows) {
	                tbody.appendChild(thead.rows[0]);
	            }

	            cmd._swapToHeaderCells(thead);
	        } else if(thead) {
	            while(thead.rows.length > 0) {
	                tbody.appendChild(thead.rows[thead.rows.length - 1]);
	            }

	            table.deleteTHead();
	        }

	        while(tbody.rows.length > rowIndex) {
	            row = tbody.rows[rowIndex];
	            for(i = 0; i < row.cells.length; i++) {
	                cell = row.cells[i];
	                if (cmd._isHeadingCell(cell) && tableProp.headerColumns <= cell.getAttribute(COL_INDEX)) {
	                    dom.changeTag(cell, TD, false);
	                } else if(!cmd._isHeadingCell(cell) && tableProp.headerColumns > cell.getAttribute(COL_INDEX)) {
	                    dom.changeTag(cell, TH, false);
	                }
	            }
	            rowIndex += 1;
	        }
	    },
	    _updateHeaderAssociates: function(table, tableProp) {
	        var cmd = this;

	        if (tableProp.cellsWithHeaders === "ids") {
	            if(!cmd.cellsWithHeadersAssociated(table)) {
	                cmd._removeScopes(table);
	            }
	            dom.associateWithIds(table);
	        } else if (tableProp.cellsWithHeaders === "scope") {
	            if(cmd.cellsWithHeadersAssociated(table)) {
	                cmd._removeAssociates(table);
	            }
	            cmd._addScopes(table, tableProp.headerRows, tableProp.headerColumns);
	        } else {
	            if(cmd.cellsWithHeadersAssociated(table)) {
	                cmd._removeAssociates(table);
	            } else {
	                cmd._removeScopes(table);
	            }
	        }
	    },
	    _addScopes: function(table, headerRows, headerCols) {
	        var rows = table.rows;
	        var i, j, row, cell;

	        for(i = 0; i < rows.length; i++) {
	            row = rows[i];

	            for(j = 0; j < row.cells.length; j++) {
	                cell = row.cells[j];

	                if (i < headerRows) {
	                    cell.setAttribute(SCOPE, COL);
	                } else if(cell.getAttribute(COL_INDEX) < headerCols) {
	                    cell.setAttribute(SCOPE, ROW);
	                }
	            }
	        }
	    },
	    _removeScopes: function(table) {
	        $(table).find(TH).removeAttr(SCOPE);
	        $(table).find(COL).remove();
	        $(table).find(COLGROUP).remove();
	    },
	    _removeAssociates: function(table) {
	        $(table).find("th, td").removeAttr("id headers");
	    },
	    _swapToHeaderCells: function(thead) {
	        var tds = $(thead).find("td");
	        var swapCell = function(index, cell) {
	            dom.changeTag(cell, TH, false);
	        };
	        tds.each(swapCell);
	    },
	    _getStylesData: function(data) {
	        var alignment = this._getAlignmentData(data.alignment);
	        var whiteSpace = "wrapText" in data ? (data.wrapText ? "" : "nowrap") : null;

	        return {
	            width: data.width ? data.width + data.widthUnit : null,
	            height: data.height ? data.height + data.heightUnit : null,
	            textAlign: alignment.textAlign,
	            verticalAlign: alignment.verticalAlign,
	            backgroundColor: data.bgColor || "",
	            borderWidth: data.borderWidth,
	            borderStyle: data.borderStyle,
	            borderColor: data.borderColor || "",
	            borderCollapse: data.collapseBorders ? "collapse" : null,
	            whiteSpace: whiteSpace
	        };
	    },
	    _getAlignmentData: function(alignment) {
	        var textAlign = "";
	        var verticalAlign = textAlign;

	        if (alignment) {
	            if (alignment.indexOf(" ") != -1) {
	                var align = alignment.split(" ");
	                textAlign = align[0];
	                verticalAlign = align[1];
	            } else {
	                textAlign = alignment;
	            }
	        }
	        return {textAlign: textAlign, verticalAlign: verticalAlign};
	    },
	    parseTable: function(table, selectedCells) {
	        if (!table) {
	            return { tableProperties: {}, selectedCells: [] };
	        }

	        var cmd = this;
	        var tStyle = table.style;
	        var rows = table.rows;
	        var caption = table.caption;
	        var captionClone = $(caption ? caption.cloneNode(true) : undefined);
	        captionClone.find(".k-marker").remove();

	        var cssClass = table.className;
	        cssClass = cssClass.replace(/^k-table\s|\sk-table$/, "");
	        cssClass = cssClass.replace(/\sk-table\s/, " ");
	        cssClass = cssClass.replace(/^k-table$/, "");

	        var tableAlignment = cmd._getAlignment(table, true);
	        var captionAlignment = caption ? cmd._getAlignment(caption) : undefined;
	        var numberOfHeaderRows = dom._getNumberOfHeaderRows(table);

	        var cellsWithHeaders;
	        if(cmd.cellsWithHeadersAssociated(table)) {
	            cellsWithHeaders = "ids";
	        } else if ($(table).find("th[scope]").length > 0) {
	            cellsWithHeaders = "scope";
	        } else {
	            cellsWithHeaders = "none";
	        }

	        dom.reMapTableColumns(table, COL_INDEX);
	        var numberOfColumns = dom._getNumberOfColumns(table);
	        var numberOfHeaderColumns = dom._getNumberOfHeaderColumns(table, numberOfHeaderRows);
	        dom.clearTableMappings(table, COL_INDEX);

	        var tableJson = {
	            tableProperties: {
	                width: tStyle.width || table.width ? parseFloat(tStyle.width || table.width) : null,
	                height: tStyle.height || table.height ? parseFloat(tStyle.height || table.height) : null,
	                columns: numberOfColumns,
	                rows: rows.length,
	                widthUnit: cmd._getUnit(tStyle.width),
	                heightUnit: cmd._getUnit(tStyle.height),
	                cellSpacing: table.cellSpacing,
	                cellPadding: table.cellPadding,
	                alignment: tableAlignment.textAlign,
	                bgColor: tStyle.backgroundColor || table.bgColor,
	                className: cssClass,
	                id: table.id,
	                borderWidth: tStyle.borderWidth || table.border,
	                borderColor: tStyle.borderColor,
	                borderStyle: tStyle.borderStyle || "",
	                collapseBorders: !!tStyle.borderCollapse,
	                summary: table.summary,
	                captionContent: caption ? captionClone.html() : "",
	                captionAlignment: caption && captionAlignment.textAlign ? captionAlignment.textAlign + " " + captionAlignment.verticalAlign : "",
	                headerRows: numberOfHeaderRows,
	                headerColumns: numberOfHeaderColumns,
	                cellsWithHeaders: cellsWithHeaders
	            },
	            selectedCells: []
	        };

	        tableJson.rows = cmd.parseTableRows(rows, selectedCells, tableJson);

	        return tableJson;
	    },
	    parseTableRows: function(rows, selectedCells, tableJson) {
	        var cmd = this;
	        var data = [], row, rowData, cells, cell, cellData;
	        for (var i = 0; i < rows.length; i++) {
	            row = rows[i];
	            rowData = {cells: []};
	            cells = row.cells;
	            data.push(rowData);
	            for (var j = 0; j < cells.length; j++) {
	                cell = cells[j];
	                cellData = cmd.parseCell(cell);
	                if ($.inArray(cell, selectedCells) != -1) {
	                    tableJson.selectedCells.push(cellData);
	                }
	                rowData.cells.push(cellData);
	            }
	        }
	        return data;
	    },
	    parseCell: function(cell) {
	        var cmd = this;
	        var cStyle = cell.style;
	        var alignment = cmd._getAlignment(cell);
	        alignment = alignment.textAlign ? alignment.textAlign + " " + alignment.verticalAlign : "";

	        var data = {
	            width: cStyle.width || cell.width ? parseFloat(cStyle.width || cell.width) : null,
	            height: cStyle.height || cell.height ? parseFloat(cStyle.height || cell.height) : null,
	            widthUnit: cmd._getUnit(cStyle.width),
	            heightUnit: cmd._getUnit(cStyle.height),
	            cellMargin: cStyle.margin,
	            cellPadding: cStyle.padding,
	            alignment: alignment,
	            bgColor: cStyle.backgroundColor || cell.bgColor,
	            className: cell.className,
	            id: cell.id,
	            borderWidth: cStyle.borderWidth || cell.border,
	            borderColor: cStyle.borderColor,
	            borderStyle: cStyle.borderStyle,
	            wrapText: cStyle.whiteSpace != "nowrap"
	        };

	        return data;
	    },
	    _getAlignment: function(element, horizontalOnly) {
	        var style = element.style;
	        var hAlign = style.textAlign || element.align || "";
	        if (horizontalOnly) {
	            return {textAlign: hAlign};
	        }
	        var vAlign = style.verticalAlign || element.vAlign || "";
	        if(hAlign && vAlign) {
	            return {textAlign: hAlign, verticalAlign: vAlign};
	        }
	        if(!hAlign && vAlign) {
	            return {textAlign: "left", verticalAlign: vAlign};
	        }
	        if(hAlign && !vAlign) {
	            return {textAlign: hAlign, verticalAlign: "top"};
	        }
	        return {textAlign: "", verticalAlign: ""};
	    },
	    _getUnit: function(value) {
	        var unit = (value || "").match(reUnit);
	        return unit ? unit[0] : "px";
	    },
	    _selectedTable: function(range) {
	        var nodes = dom.filterBy(RangeUtils.nodes(range), dom.htmlIndentSpace, true);
	        return tableFormatFinder.findSuitable(nodes)[0];
	    },
	    _selectedCells: function(range) {
	        var nodes = dom.filterBy(RangeUtils.nodes(range), dom.htmlIndentSpace, true);
	        return cellsFormatFinder.findSuitable(nodes);
	    },
	    _lastInCollection: function(collection) {
	        return collection[collection.length - 1];
	    }
	});

	var TableWizardTool = Editor.Tool.extend({
	    command: function (options) {
	        options.insertNewTable = this.options.insertNewTable;
	        return new TableWizardCommand(options);
	    }
	});

	var TableWizardEditTool = TableWizardTool.extend({
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

	kendo.ui.editor.TableWizardTool = TableWizardTool;
	kendo.ui.editor.TableWizardCommand = TableWizardCommand;

	registerTool("tableWizard", new TableWizardEditTool({ command: TableWizardCommand, insertNewTable: false, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Table Wizard"})}));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ }),

/***/ 1024:
/***/ (function(module, exports) {

	module.exports = require("./../plugins/tables");

/***/ })

/******/ });