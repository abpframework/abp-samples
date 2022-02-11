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

	__webpack_require__(1665);
	module.exports = __webpack_require__(1665);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

	module.exports = require("../kendo.color");

/***/ }),

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(957), __webpack_require__(1666), __webpack_require__(1667) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	    "use strict";

	    /* global JSZip */

	    // WARNING: removing the following jshint declaration and turning
	    // == into === to make JSHint happy will break functionality.
	    /* jshint eqnull:true, laxbreak:true */
	    /* jshint latedef: nofunc */

	    var $ = kendo.jQuery;
	    var parseXML = kendo.util.parseXML;
	    var parseReference = kendo.spreadsheet.calc.parseReference;

	    var MAP_EXCEL_OPERATOR = {
	        // includes only what differs; key is Excel's operator, value
	        // is our operator.
	        greaterThanOrEqual : "greaterThanOrEqualTo",
	        lessThanOrEqual    : "lessThanOrEqualTo"
	    };

	    var ERROR_LOG = null;

	    function readExcel(file, workbook, deferred) {
	        var reader = new FileReader();
	        reader.onload = function(e) {
	            var zip = new JSZip(e.target.result);
	            readWorkbook(zip, workbook, deferred);
	        };

	        reader.readAsArrayBuffer(file);
	    }

	    var SEL_CELL = ["sheetData", "row", "c"];
	    var SEL_COL = ["cols", "col"];
	    var SEL_DEFINED_NAME = ["definedNames", "definedName"];
	    var SEL_FORMULA = ["sheetData", "row", "c", "f"];
	    var SEL_MERGE = ["mergeCells", "mergeCell"];
	    var SEL_PANE = ["sheetViews", "sheetView", "pane"];
	    var SEL_ROW = ["sheetData", "row"];
	    var SEL_SELECTION = ["sheetViews", "sheetView", "selection"];
	    var SEL_SHEET = ["sheets", "sheet"];
	    var SEL_STRING = ["sheetData", "row", "c", "is"];
	    var SEL_TEXT = ["t"];
	    var SEL_SHARED_STRING = ["si"];
	    var SEL_VALUE = ["sheetData", "row", "c", "v"];
	    var SEL_VIEW = ["bookViews", "workbookView"];
	    var SEL_SHEET_VIEW = ["sheetViews", "sheetView"];
	    var SEL_HYPERLINK = ["hyperlinks", "hyperlink"];

	    /* A validation section looks like this:
	     *
	     * <dataValidations count="1">
	     *   <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="B2">
	     *     <formula1>$E$2:$E$5</formula1>
	     *   </dataValidation>
	     * </dataValidations>
	     */
	    var SEL_VALIDATION = ["dataValidations", "dataValidation"];
	    var SEL_VALIDATION_FORMULA1 = ["dataValidations", "dataValidation", "formula1"];
	    var SEL_VALIDATION_FORMULA2 = ["dataValidations", "dataValidation", "formula2"];

	    /* However, when a validation formula in one sheet references
	     * cells from another sheet, Excel produces this version instead:
	     *
	     * <extLst>
	     *   <ext xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" uri="{CCE6A557-97BC-4b89-ADB6-D9C93CAAB3DF}">
	     *     <x14:dataValidations xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main" count="1">
	     *       <x14:dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1">
	     *         <x14:formula1>
	     *           <xm:f>Sheet2!$B$3:$B$6</xm:f>
	     *         </x14:formula1>
	     *         <xm:sqref>B1</xm:sqref>
	     *       </x14:dataValidation>
	     *     </x14:dataValidations>
	     *   </ext>
	     * </extLst>
	     *
	     * I call it the "insane version", because that's what it is.
	     * Barring the case that the engineers who produced this horror
	     * were on LSD, the only plausible reason for it is that Microsoft
	     * does not want third party software to be compatible with Excel
	     * (sentiment I've had over and over while working on the
	     * Spreadsheet widget).
	     */
	    // XXX: technically, the aliases `x14` and `xm` below could be
	    // different, but Excel seems to be hard-coded on these; our
	    // parser does not support proper namespaces for now anyway, so
	    // hard-coded they are.
	    var SEL_VALIDATION_INSANE = ["x14:dataValidations", "x14:dataValidation"];
	    var SEL_VALIDATION_SQREF_INSANE = ["x14:dataValidations", "x14:dataValidation", "xm:sqref"];
	    var SEL_VALIDATION_FORMULA1_INSANE = ["x14:dataValidations", "x14:dataValidation", "x14:formula1", "xm:f"];
	    var SEL_VALIDATION_FORMULA2_INSANE = ["x14:dataValidations", "x14:dataValidation", "x14:formula2", "xm:f"];

	    // comment selectors (in files like comments1.xml)
	    var SEL_COMMENT = ["commentList", "comment"];
	    var SEL_AUTHOR = ["authors", "author"];
	    var SEL_COMMENT_TEXT = ["t"];

	    function xl(file) {
	        if (!/^\//.test(file)) {
	            if (!/^xl\//.test(file)) {
	                file = "xl/" + file;
	            }
	        } else {
	            file = file.substr(1);
	        }
	        return file;
	    }

	    function readWorkbook(zip, workbook, progress) {
	        ERROR_LOG = workbook.excelImportErrors = [];

	        var strings = readStrings(zip);
	        var relationships = readRelationships(zip, "_rels/workbook.xml");
	        var theme = readTheme(zip, relationships.byType.theme[0]);
	        var styles = readStyles(zip, theme);
	        var items = [];
	        var activeSheet = 0;

	        parse(zip, "xl/workbook.xml", {
	            enter: function(tag, attrs) {
	                if (this.is(SEL_SHEET)) {
	                    var relId = attrs["r:id"];
	                    var file = relationships.byId[relId];
	                    var name = attrs.name;
	                    var dim = sheetDimensions(zip, file);

	                    workbook.options.columnWidth = dim.columnWidth || workbook.options.columnWidth;
	                    workbook.options.rowHeight = dim.rowHeight || workbook.options.rowHeight;

	                    items.push({
	                        workbook: workbook,
	                        zip: zip,
	                        strings: strings,
	                        styles: styles,
	                        file: file,
	                        options: {
	                            name: name,
	                            rows: Math.max(workbook.options.rows || 0, dim.rows),
	                            columns: Math.max(workbook.options.columns || 0, dim.cols),
	                            columnWidth: dim.columnWidth,
	                            rowHeight: dim.rowHeight
	                        }
	                    });
	                } else if (this.is(SEL_VIEW)) {
	                    if (attrs.activeTab) {
	                        activeSheet = integer(attrs.activeTab);
	                    }
	                }
	            },
	            text: function(text) {
	                var attrs = this.is(SEL_DEFINED_NAME);
	                if (attrs && !(bool(attrs["function"]) || bool(attrs.vbProcedure))) {
	                    var localSheetId = attrs.localSheetId;
	                    var sheet = null;
	                    if (localSheetId != null) {
	                        sheet = items[localSheetId].options.name;
	                    }
	                    var name = attrs.name;
	                    if (name != "_xlnm._FilterDatabase") {
	                        if (sheet) {
	                            name = "'" + sheet.replace(/\'/g, "\\'") + "'!" + name;
	                        }
	                        withErrorLog(sheet, null, function(){
	                            workbook.defineName(name, text, bool(attrs.hidden));
	                        }, "reading user-defined name: " + name);
	                    }
	                }
	            }
	        });

	        var loading = new $.Deferred();
	        loading.progress(function(args) {
	            if (progress) {
	                progress.notify(args);
	            }
	        })
	        .then(function() {
	            var sheets = workbook.sheets();
	            recalcSheets(sheets);

	            workbook.activeSheet(sheets[activeSheet]);

	            if (progress) {
	                progress.resolve();
	            }
	        });

	        loadSheets(items, workbook, loading);
	    }

	    function loadSheets(items, workbook, progress) {
	        var ready = (new $.Deferred()).resolve();
	        for (var i = 0; i < items.length; i++) {
	            /*jshint -W083 */
	            (function(entry, i) {
	                ready = ready.then(function() {
	                    var sheet = workbook.insertSheet(entry.options);
	                    sheet.suspendChanges(true);

	                    var promise = queueSheet(sheet, entry);
	                    var args = {
	                        sheet: sheet,
	                        progress: i / (items.length - 1)
	                    };

	                    promise.then(function() {
	                        progress.notify(args);
	                    });

	                    return promise;
	                });
	            })(items[i], i);
	        }

	        ready.then(function() {
	            progress.resolve();
	        });
	    }

	    function queueSheet(sheet, ctx) {
	        var deferred = new $.Deferred();

	        setTimeout(function() {
	            readSheet(ctx.zip, ctx.file, sheet, ctx.strings, ctx.styles);
	            deferred.resolve();
	        }, 0);

	        return deferred;
	    }

	    function recalcSheets(sheets) {
	        for (var i = 0; i < sheets.length; i++) {
	            sheets[i]
	                .suspendChanges(false)
	                .triggerChange({ recalc: true });
	        }
	    }

	    function sheetDimensions(zip, file) {
	        var dim = {
	            rows: 0,
	            cols: 0
	        };

	        parse(zip, xl(file), {
	            enter: function(tag, attrs) {
	                if (tag == "dimension") {
	                    var ref = parseReference(attrs.ref);
	                    if (ref.bottomRight) {
	                        dim.cols = ref.bottomRight.col + 1;
	                        dim.rows = ref.bottomRight.row + 1;
	                    }
	                } else if (tag === "sheetFormatPr") {
	                    if (attrs.defaultColWidth) {
	                        dim.columnWidth = toColWidth(parseFloat(attrs.defaultColWidth));
	                    }

	                    if (attrs.defaultRowHeight) {
	                        dim.rowHeight = toRowHeight(parseFloat(attrs.defaultRowHeight));
	                    }
	                } else if (this.is(SEL_ROW)) {
	                    // Don't process actual rows
	                    this.exit();
	                }
	            }
	        });

	        return dim;
	    }

	    function toColWidth(size) {
	        // No font to compute agains, hence the magic number
	        var maximumDigitWidth = 7;

	        // The formula below is taken from the OOXML spec
	        var fraction = (256 * size + Math.floor(128 / maximumDigitWidth)) / 256;
	        return fraction * maximumDigitWidth;
	    }

	    function toRowHeight(pts) {
	        return pts * (4 / 3);
	    }

	    function readSheet(zip, file, sheet, strings, styles) {
	        var sharedFormulas = {};
	        var ref, type, value, formula, formulaRange, isArrayFormula;
	        var nCols = sheet._columns._count;
	        var prevCellRef = null;
	        var relsFile = file.replace(/worksheets\//, "worksheets/_rels/");
	        var relationships = readRelationships(zip, relsFile);
	        var formula1, formula2;

	        var filterRef;
	        var filterColumn;
	        var customFilterLogic;
	        var customFilterCriteria;
	        var valueFilterBlanks;
	        var valueFilterValues;
	        var filters = [];

	        ERROR_LOG = sheet._workbook.excelImportErrors;

	        file = xl(file);

	        parse(zip, file, {
	            enter: function(tag, attrs, closed) {
	                var tmp;
	                if (this.is(SEL_FORMULA)) {
	                    if (closed) {
	                        if (attrs.t == "shared" && attrs.si != null) {
	                            formula = sheet.range(sharedFormulas[attrs.si])._get("formula");
	                        }
	                    }
	                }
	                else if (this.is(SEL_CELL)) {
	                    value = null;
	                    formula = null;
	                    ref = attrs.r;
	                    formulaRange = null;

	                    if (ref == null) {
	                        // apparently some tools omit the `r` for
	                        // consecutive cells in a row, so we'll figure
	                        // it out from the previous cell's reference.
	                        // XXX: this could be slightly optimized by
	                        // keeping it parsed instead of stringifying
	                        // it to parse it again later.
	                        ref = parseReference(prevCellRef);
	                        ref.col++;
	                        ref = ref.toString();
	                    }
	                    prevCellRef = ref;

	                    // XXX: can't find no type actually, so everything is
	                    // interpreted as string.  Additionally, cells having
	                    // a formula will contain both <f> and <v> nodes,
	                    // which makes the value take precedence because it's
	                    // the second node; hence, the hack is to keep note of
	                    // them in the `text` handler, and apply the
	                    // appropriate one in the `leave` handler below.
	                    type = attrs.t;

	                    var styleIndex = attrs.s;
	                    if (styleIndex != null) {
	                        applyStyle(sheet, ref, styles, styleIndex);
	                    }
	                }
	                else if (this.is(SEL_MERGE)) {
	                    sheet.range(attrs.ref).merge();
	                }
	                else if (this.is(SEL_COL)) {
	                    var start = integer(attrs.min) - 1;
	                    var stop = Math.min(nCols, integer(attrs.max)) - 1;
	                    var width;
	                    if (attrs.width) {
	                        width = toColWidth(parseFloat(attrs.width));
	                        if (width !== 0) {
	                            sheet._columns.values.value(start, stop, width);
	                        }
	                    }
	                    if (attrs.hidden === "1" || width === 0) {
	                        for (var ci = start; ci <= stop; ci++) {
	                            sheet.hideColumn(ci);
	                        }
	                    }
	                    if (attrs.style != null) {
	                        // apply style on a whole range of columns
	                        applyStyle(sheet, new kendo.spreadsheet.RangeRef(
	                            new kendo.spreadsheet.CellRef(-Infinity, start),
	                            new kendo.spreadsheet.CellRef(+Infinity, stop)
	                        ), styles, attrs.style);
	                    }
	                }
	                else if (this.is(SEL_ROW)) {
	                    var row = integer(attrs.r) - 1;
	                    var height;
	                    if (attrs.ht) {
	                        height = toRowHeight(parseFloat(attrs.ht));
	                        if (height !== 0) {
	                            sheet._rows.values.value(row, row, height);
	                        }
	                    }
	                    if (attrs.hidden === "1" || height === 0) {
	                        sheet.hideRow(row);
	                    }
	                }
	                else if (this.is(SEL_SELECTION)) {
	                    if (attrs.activeCell) {
	                        var acRef = parseReference(attrs.activeCell);
	                        sheet.select(acRef, true);
	                    }
	                }
	                else if (this.is(SEL_PANE)) {
	                    if (attrs.state && attrs.state.indexOf("frozen") > -1) {
	                        if (attrs.xSplit) {
	                            sheet.frozenColumns(integer(attrs.xSplit));
	                        }

	                        if (attrs.ySplit) {
	                            sheet.frozenRows(integer(attrs.ySplit));
	                        }
	                    }
	                }
	                else if (this.is(SEL_SHEET_VIEW)) {
	                    sheet.showGridLines(bool(attrs.showGridLines, true));
	                }
	                else if (this.is(SEL_HYPERLINK)) {
	                    var relId = attrs["r:id"];
	                    var target = relationships.byId[relId];
	                    if (target) {
	                        sheet.range(attrs.ref).link(target);
	                    }
	                }
	                else if (this.is(["autoFilter"])) {
	                    filterRef = attrs.ref;
	                    if (closed) {
	                        addAutoFilter();
	                    }
	                }
	                else if (filterRef) {
	                    if (this.is(["filterColumn"])) {
	                        filterColumn = parseInt(attrs.colId, 10);
	                    }
	                    else if (this.is(["customFilters"])) {
	                        customFilterLogic = bool(attrs.and) ? "and" : "or";
	                        customFilterCriteria = [];
	                    }
	                    else if (this.is(["customFilter"])) {
	                        tmp = getCustomFilter(attrs.operator, attrs.val);
	                        if (tmp) {
	                            customFilterCriteria.push({
	                                operator: tmp.operator,
	                                value: tmp.value
	                            });
	                        }
	                    }
	                    else if (this.is(["dynamicFilter"])) {
	                        filters.push({
	                            column: filterColumn,
	                            filter: new kendo.spreadsheet.DynamicFilter({
	                                type: dynamicFilterType(attrs.type)
	                            })
	                        });
	                    }
	                    else if (this.is(["top10"])) {
	                        filters.push({
	                            column: filterColumn,
	                            filter: new kendo.spreadsheet.TopFilter({
	                                value: getFilterVal(attrs.val),
	                                type: (function(percent, top){
	                                    return percent && top ? "topPercent"
	                                        :  top ? "topNumber"
	                                        :  percent ? "bottomPercent"
	                                        :  "bottomNumber";
	                                })(bool(attrs.percent), bool(attrs.top))
	                            })
	                        });
	                    }
	                    else if (this.is(["filters"])) {
	                        valueFilterBlanks = bool(attrs.blank);
	                        valueFilterValues = [];
	                    }
	                    else if (this.is(["filter"])) {
	                        valueFilterValues.push(getFilterVal(attrs.val));
	                    }
	                }
	            },
	            leave: function(tag, attrs) {
	                if (this.is(SEL_FORMULA)) {
	                    if (!formula && attrs.t == "shared" && attrs.si != null) {
	                        formula = sheet.range(sharedFormulas[attrs.si])._get("formula");
	                    }
	                }
	                else if (this.is(SEL_CELL)) {
	                    if (formula != null) {
	                        var failed = withErrorLog(sheet, formulaRange || ref, function(){
	                            sheet.range(formulaRange || ref).formula(formula, isArrayFormula);
	                        }, "parsing formula");
	                        if (failed) {
	                            sheet.range(formulaRange || ref).value(formula)
	                                .background("#ffaaaa");
	                        }
	                    } else if (value != null) {
	                        var range = sheet.range(ref);

	                        if (!range._get("formula")) {
	                            // Check for "shared" formulas before applying a value.
	                            if (!type || type == "n") {
	                                value = parseFloat(value);
	                            } else if (type == "s") {
	                                value = strings[integer(value)];
	                            } else if (type == "b") {
	                                value = value === "1";
	                            } else if (type == "d") {
	                                value = kendo.parseDate(value);
	                            }

	                            if (value != null) {
	                                range.value(value);
	                            }
	                        }
	                    }
	                } else if (this.is(SEL_VALIDATION) ||
	                           this.is(SEL_VALIDATION_INSANE)) {
	                    (function(){
	                        var refs = kendo.spreadsheet.calc.parseSqref(attrs.sqref);
	                        var type = attrs.type.toLowerCase();
	                        var operator = attrs.operator;
	                        if (/^(?:whole|decimal)$/.test(type)) {
	                            // we only support "number"
	                            type = "number";
	                        } else if (type == "list") {
	                            // there'll be no operator from Excel for lists
	                            operator = "list";
	                        }
	                        if (!operator && /^(?:number|date)$/.test(type)) {
	                            // Excel skips setting the operator for
	                            // "between", because why not.
	                            operator = "between";
	                        }
	                        refs.forEach(function(ref){
	                            withErrorLog(sheet, ref, function(){
	                                sheet.range(ref).validation({
	                                    type             : bool(attrs.showErrorMessage, true) ? "reject" : "warning",
	                                    from             : formula1,
	                                    to               : formula2,
	                                    dataType         : type,
	                                    comparerType     : MAP_EXCEL_OPERATOR[operator] || operator,
	                                    allowNulls       : bool(attrs.allowBlank),
	                                    showButton       : bool(attrs.showDropDown) || type == "date" || type == "list",
	                                    messageTemplate  : attrs.error,
	                                    titleTemplate    : attrs.errorTitle
	                                });
	                            }, "parsing validation");
	                        });
	                    })();
	                } else if (tag == "cols") {
	                    sheet._columns._refresh();
	                } else if (tag == "sheetData") {
	                    sheet._rows._refresh();
	                } else if (tag == "autoFilter") {
	                    addAutoFilter();
	                } else if (filterRef) {
	                    if (tag == "customFilters") {
	                        filters.push({
	                            column: filterColumn,
	                            filter: new kendo.spreadsheet.CustomFilter({
	                                logic: customFilterLogic,
	                                criteria: customFilterCriteria
	                            })
	                        });
	                    } else if (tag == "filters") {
	                        filters.push({
	                            column: filterColumn,
	                            filter: new kendo.spreadsheet.ValueFilter({
	                                values: valueFilterValues,
	                                blanks: valueFilterBlanks
	                            })
	                        });
	                    }
	                }
	            },
	            text: function(text) {
	                var attrs;
	                if (this.is(SEL_VALUE) || this.is(SEL_STRING)) {
	                    value = text;
	                } else if ((attrs = this.is(SEL_FORMULA))) {
	                    formula = text;
	                    isArrayFormula = attrs.t == "array";
	                    if (isArrayFormula) {
	                        formulaRange = attrs.ref;
	                    } else if (attrs.t == "shared") {
	                        sharedFormulas[attrs.si] = ref;
	                    }
	                } else if (this.is(SEL_VALIDATION_FORMULA1) ||
	                           this.is(SEL_VALIDATION_FORMULA1_INSANE)) {
	                    formula1 = text;
	                } else if (this.is(SEL_VALIDATION_FORMULA2) ||
	                           this.is(SEL_VALIDATION_FORMULA2_INSANE)) {
	                    formula2 = text;
	                } else if (this.is(SEL_VALIDATION_SQREF_INSANE)) {
	                    // put it in <dataValidation>'s attributes where it should be
	                    this.stack[this.stack.length - 2].sqref = text;
	                }
	            }
	        });

	        if (relationships.byType.comments) {
	            var commentFile = relative_file(file, relationships.byType.comments[0]);
	            readComments(zip, commentFile, sheet);
	        }

	        if (relationships.byType.drawing) {
	            var drawingFile = relative_file(file, relationships.byType.drawing[0]);
	            readDrawings(zip, drawingFile, sheet);
	        }

	        function addAutoFilter() {
	            sheet.range(filterRef).filter(filters);
	            filterRef = null;
	        }
	    }

	    function getContentType(filename) {
	        var m = /\.([^.]+)$/.exec(filename);
	        if (m && m[1]) {
	            return {
	                jpg  : "image/jpeg",
	                jpeg : "image/jpeg",
	                png  : "image/png",
	                gif  : "image/gif"
	            }[m[1].toLowerCase()];
	        }
	    }

	    function getFileName(filename) {
	        var m = /[^/]+$/.exec(filename);
	        return m && m[0];
	    }

	    function readDrawings(zip, file, sheet) {
	        var sel_two_cell_anchor = [ "xdr:twoCellAnchor" ];
	        var sel_ext = [ "xdr:ext" ];
	        var sel_one_cell_anchor = [ "xdr:oneCellAnchor" ];
	        var sel_from = [ "xdr:from" ];
	        var sel_to = [ "xdr:to" ];
	        var sel_row = [ "xdr:row" ];
	        var sel_col = [ "xdr:col" ];
	        var sel_row_offset = [ "xdr:rowOff" ];
	        var sel_col_offset = [ "xdr:colOff" ];
	        var sel_blip = [ "xdr:blipFill", "a:blip" ];

	        var relsFile = file.replace(/drawings\//, "drawings/_rels/");
	        var relationships = readRelationships(zip, relsFile);

	        if (relationships.byType.image) {
	            Object.keys(relationships.byId).forEach(function(id){
	                var img = relative_file(file, relationships.byId[id]);
	                var type = getContentType(img);

	                if (type) {
	                    // XXX: file.asArrayBuffer() is deprecated in JSZip 3
	                    var data = zip.files[img].asArrayBuffer();
	                    var name = getFileName(img);
	                    var blob = name && !(kendo.support.browser.msie || kendo.support.browser.edge)
	                        ? new window.File([ data ], name, { type: type })
	                        : new window.Blob([ data ], { type: type });
	                    relationships.byId[id] = sheet._workbook.addImage(blob);
	                }
	            });
	        }

	        var cdr, ref, width, height;
	        parse(zip, file, {
	            enter: function(tag, attrs) {
	                if (this.is(sel_two_cell_anchor) || this.is(sel_one_cell_anchor)) {
	                    cdr = {};
	                }
	                else if (this.is(sel_from) || this.is(sel_to)) {
	                    ref = {};
	                }
	                else if (this.is(sel_blip)) {
	                    var id = attrs["r:embed"];
	                    cdr.image = relationships.byId[id];
	                }
	                else if (this.is(sel_ext)) {
	                    width = excelToPixels(parseFloat(attrs.cx));
	                    height = excelToPixels(parseFloat(attrs.cy));
	                }
	            },
	            leave: function() {
	                if (this.is(sel_from)) {
	                    cdr.topLeftCell = new kendo.spreadsheet.CellRef(ref.row, ref.col);
	                    cdr.offsetX = excelToPixels(ref.colOffset);
	                    cdr.offsetY = excelToPixels(ref.rowOffset);
	                }
	                else if (this.is(sel_to)) {
	                    cdr.brCell = new kendo.spreadsheet.CellRef(ref.row, ref.col);
	                    cdr.brX = excelToPixels(ref.colOffset);
	                    cdr.brY = excelToPixels(ref.rowOffset);
	                }
	                // Add drawing only when it is image
	                else if (this.is(sel_two_cell_anchor) && cdr.image) {
	                    var left = sheet._columns.sum(0, cdr.topLeftCell.col - 1) + cdr.offsetX;
	                    var top = sheet._rows.sum(0, cdr.topLeftCell.row - 1) + cdr.offsetY;
	                    var right = sheet._columns.sum(0, cdr.brCell.col - 1) + cdr.brX;
	                    var bottom = sheet._rows.sum(0, cdr.brCell.row - 1) + cdr.brY;

	                    sheet.addDrawing({
	                        topLeftCell : cdr.topLeftCell,
	                        offsetX     : cdr.offsetX,
	                        offsetY     : cdr.offsetY,
	                        width       : width != null ? width : right - left,
	                        height      : height != null ? height : bottom - top,
	                        image       : cdr.image,
	                        opacity     : 1
	                    });
	                }
	                // Add drawing only when it is image
	                else if (this.is(sel_one_cell_anchor) && cdr.image) {
	                    sheet.addDrawing({
	                        topLeftCell : cdr.topLeftCell,
	                        offsetX     : cdr.offsetX,
	                        offsetY     : cdr.offsetY,
	                        width       : width,
	                        height      : height,
	                        image       : cdr.image,
	                        opacity     : 1
	                    });
	                }
	            },
	            text: function(text) {
	                if (this.is(sel_row)) {
	                    ref.row = parseFloat(text);
	                }
	                else if (this.is(sel_col)) {
	                    ref.col = parseFloat(text);
	                }
	                else if (this.is(sel_row_offset)) {
	                    ref.rowOffset = parseFloat(text);
	                }
	                else if (this.is(sel_col_offset)) {
	                    ref.colOffset = parseFloat(text);
	                }
	            }
	        });
	    }

	    function readComments(zip, file, sheet) {
	        var authors = [];
	        var author;
	        var comment;
	        parse(zip, file, {
	            enter: function(tag, attrs) {
	                if (this.is(SEL_COMMENT)) {
	                    comment = {
	                        author: authors[attrs.authorId],
	                        ref: attrs.ref,
	                        text: ""
	                    };
	                } else if (this.is(SEL_AUTHOR)) {
	                    author = "";
	                }
	            },
	            leave: function() {
	                if (this.is(SEL_COMMENT)) {
	                    sheet.range(comment.ref).comment(comment.text);
	                } else if (this.is(SEL_AUTHOR)) {
	                    authors.push(author);
	                }
	            },
	            text: function(text) {
	                if (this.is(SEL_COMMENT_TEXT)) {
	                    comment.text += text;
	                } else if (this.is(SEL_AUTHOR)) {
	                    author += text;
	                }
	            }
	        });
	    }

	    function getCustomFilter(op, value) {
	        var ourOp = {
	            equal               : "eq",
	            notEqual            : "ne",
	            greaterThan         : "gt",
	            greaterThanOrEqual  : "gte",
	            lessThan            : "lt",
	            lessThanOrEqual     : "lte"
	        }[op];

	        value = getFilterVal(value);

	        if (ourOp && typeof value == "number") {
	            return { operator: ourOp, value: value };
	        }

	        if ((op == "notEqual" || !op) && typeof value == "string") {
	            // Excel text operators support * and ? wildcards.  Since
	            // our startswith/endswith/contains filters do not, we
	            // can't really use them here, so we'll apply the more
	            // generic "matches" and "doesnotmatch" filters.
	            return {
	                operator: op ? "doesnotmatch" : "matches",
	                value: value
	            };
	        }
	    }

	    function dynamicFilterType(type) {
	        return {
	            Q1  : "quarter1",
	            Q2  : "quarter2",
	            Q3  : "quarter3",
	            Q4  : "quarter4",
	            M1  : "january",
	            M2  : "february",
	            M3  : "march",
	            M4  : "april",
	            M5  : "may",
	            M6  : "june",
	            M7  : "july",
	            M8  : "august",
	            M9  : "september",
	            M10 : "october",
	            M11 : "november",
	            M12 : "december"
	        }[type.toUpperCase()] || type;
	    }

	    function getFilterVal(val) {
	        var tmp = parseFloat(val);
	        if (!isNaN(tmp) && tmp == val) {
	            return tmp;
	        }
	        return val;
	    }

	    function withErrorLog(sheet, ref, func, context) {
	        try {
	            func();
	            return false;
	        } catch(ex) {
	            var err = { context: context, error: String(ex) };
	            if (sheet && sheet.name) {
	                err.sheet = sheet.name();
	            } else if (sheet) {
	                err.sheet = sheet;
	            }
	            if (ref) {
	                err.location = String(ref);
	            }
	            ERROR_LOG.push(err);
	            return true;
	        }
	    }

	    var BORDER_WIDTHS = {
	        "none"            : 0,
	        "thin"            : 1,
	        "medium"          : 2,
	        "dashed"          : 1,
	        "dotted"          : 1,
	        "thick"           : 3,
	        "double"          : 3,
	        "hair"            : 1,
	        "mediumDashed"    : 2,
	        "dashDot"         : 1,
	        "mediumDashDot"   : 2,
	        "dashDotDot"      : 1,
	        "mediumDashDotDot": 2,
	        "slantDashDot"    : 1
	    };

	    var DEFAULT_FORMATS = {
	        0  : "General",
	        1  : "0",
	        2  : "0.00",
	        3  : "#,##0",
	        4  : "#,##0.00",
	        9  : "0%",
	        10 : "0.00%",
	        11 : "0.00E+00",
	        12 : "# ?/?",
	        13 : "# ??/??",
	        14 : "mm-dd-yy",
	        15 : "d-mmm-yy",
	        16 : "d-mmm",
	        17 : "mmm-yy",
	        18 : "h:mm AM/PM",
	        19 : "h:mm:ss AM/PM",
	        20 : "h:mm",
	        21 : "h:mm:ss",
	        22 : "m/d/yy h:mm",
	        37 : "#,##0 ;(#,##0)",
	        38 : "#,##0 ;[Red](#,##0)",
	        39 : "#,##0.00;(#,##0.00)",
	        40 : "#,##0.00;[Red](#,##0.00)",
	        45 : "mm:ss",
	        46 : "[h]:mm:ss",
	        47 : "mmss.0",
	        48 : "##0.0E+0",
	        49 : "@"
	    };

	    function applyStyle(sheet, ref, styles, styleIndex) {
	        var range = sheet.range(ref);
	        var xf = styles.inlineStyles[styleIndex], base, value;
	        if (xf.xfId) {
	            base = styles.namedStyles[xf.xfId];
	        }
	        if (shouldSet("applyBorder", "borderId")) {
	            setBorder(styles.borders[value]);
	        }
	        if (shouldSet("applyFont", "fontId")) {
	            setFont(styles.fonts[value]);
	        }
	        if (shouldSet("applyAlignment", "textAlign")) {
	            range.textAlign(value);
	        }
	        if (shouldSet("applyAlignment", "verticalAlign")) {
	            range.verticalAlign(value);
	        }
	        if (shouldSet("applyAlignment", "indent")) {
	            range.indent(value);
	        }
	        if (shouldSet("applyAlignment", "wrapText")) {
	            // don't use range.wrap to avoid recomputing row height
	            range._property("wrap", value);
	        }
	        if (shouldSet("applyFill", "fillId")) {
	            setFill(styles.fills[value]);
	        }
	        if (shouldSet("applyNumberFormat", "numFmtId")) {
	            setFormat(styles.numFmts[value] || DEFAULT_FORMATS[value]);
	        }

	        function setFormat(f) {
	            var format = typeof f == "string" ? f : f.formatCode;
	            if (format != null && !/^general$/i.test(format)) {
	                // XXX: drop locale info.
	                // http://stackoverflow.com/questions/894805/excel-number-format-what-is-409
	                // not supported by the formatting library.
	                format = format.replace(/^\[\$-[0-9]+\]/, "");
	                range.format(format);
	            }
	        }

	        function setFill(f) {
	            if (f.type == "solid") {
	                range.background(f.color);
	            }
	        }

	        function setFont(f) {
	            range.fontFamily(f.name);
	            //range.fontSize(f.size); //XXX: will recalc row height.
	            // converting from points to pixels
	            if (f.size) {
	                range._property("fontSize", f.size * 4 / 3);
	            }
	            if (f.bold) {
	                range.bold(true);
	            }
	            if (f.italic) {
	                range.italic(true);
	            }
	            if (f.underline) {
	                range.underline(true);
	            }
	            if (f.color) {
	                range.color(f.color);
	            }
	        }

	        function setBorder(b) {
	            function set(side, prop) {
	                var border = b[side];
	                if (!border) {
	                    return;
	                }

	                var width = BORDER_WIDTHS[border.style];
	                if (width === 0) {
	                    return;
	                }

	                var color = border.color;
	                if (color == null) {
	                    color = "#000";
	                }

	                range._property(prop, { size: width, color: color });
	            }

	            set("left", "borderLeft");
	            set("top", "borderTop");
	            set("right", "borderRight");
	            set("bottom", "borderBottom");
	        }

	        function shouldSet(applyName, propName) {
	            var t = xf[applyName];
	            if (t != null && !t) {
	                return false;
	            }
	            value = xf[propName];
	            if (base && value == null) {
	                t = base[applyName];
	                if (t != null && !t) {
	                    return false;
	                }
	                value = base[propName];
	            }
	            return value != null;
	        }
	    }

	    function parse(zip, file, callbacks) {
	        var part = zip.files[file];
	        if (part) {
	            parseXML(part.asUint8Array(), callbacks);
	        }
	    }

	    function readStrings(zip) {
	        var strings = [];
	        var current = null;
	        parse(zip, "xl/sharedStrings.xml", {
	            leave: function() {
	                if (this.is(SEL_SHARED_STRING)) {
	                    strings.push(current);
	                    current = null;
	                }
	            },
	            text: function(text) {
	                if (this.is(SEL_TEXT)) {
	                    if (current == null) {
	                        current = "";
	                    }
	                    current += text;
	                }
	            }
	        });
	        return strings;
	    }

	    function readRelationships(zip, file) {
	        var map = { byId: {}, byType: { theme: [] } };
	        parse(zip, xl(file) + ".rels", {
	            enter: function(tag, attrs) {
	                if (tag == "Relationship") {
	                    map.byId[attrs.Id] = attrs.Target;

	                    var type = attrs.Type.match(/\w+$/)[0];
	                    var entries = map.byType[type] || [];
	                    entries.push(attrs.Target);
	                    map.byType[type] = entries;
	                }
	            }
	        });
	        return map;
	    }

	    var SEL_BORDER = ["borders", "border"];
	    var SEL_FILL = ["fills", "fill"];
	    var SEL_FONT = ["fonts", "font"];
	    var SEL_INLINE_STYLE = ["cellXfs", "xf"];
	    var SEL_NAMED_STYLE = ["cellStyleXfs", "xf"];
	    var SEL_NUM_FMT = ["numFmts", "numFmt"];

	    var INDEXED_COLORS = [
	        toCSSColor("FF000000"), toCSSColor("FFFFFFFF"), toCSSColor("FFFF0000"),
	        toCSSColor("FF00FF00"), toCSSColor("FF0000FF"), toCSSColor("FFFFFF00"),
	        toCSSColor("FFFF00FF"), toCSSColor("FF00FFFF"), toCSSColor("FF000000"),
	        toCSSColor("FFFFFFFF"), toCSSColor("FFFF0000"), toCSSColor("FF00FF00"),
	        toCSSColor("FF0000FF"), toCSSColor("FFFFFF00"), toCSSColor("FFFF00FF"),
	        toCSSColor("FF00FFFF"), toCSSColor("FF800000"), toCSSColor("FF008000"),
	        toCSSColor("FF000080"), toCSSColor("FF808000"), toCSSColor("FF800080"),
	        toCSSColor("FF008080"), toCSSColor("FFC0C0C0"), toCSSColor("FF808080"),
	        toCSSColor("FF9999FF"), toCSSColor("FF993366"), toCSSColor("FFFFFFCC"),
	        toCSSColor("FFCCFFFF"), toCSSColor("FF660066"), toCSSColor("FFFF8080"),
	        toCSSColor("FF0066CC"), toCSSColor("FFCCCCFF"), toCSSColor("FF000080"),
	        toCSSColor("FFFF00FF"), toCSSColor("FFFFFF00"), toCSSColor("FF00FFFF"),
	        toCSSColor("FF800080"), toCSSColor("FF800000"), toCSSColor("FF008080"),
	        toCSSColor("FF0000FF"), toCSSColor("FF00CCFF"), toCSSColor("FFCCFFFF"),
	        toCSSColor("FFCCFFCC"), toCSSColor("FFFFFF99"), toCSSColor("FF99CCFF"),
	        toCSSColor("FFFF99CC"), toCSSColor("FFCC99FF"), toCSSColor("FFFFCC99"),
	        toCSSColor("FF3366FF"), toCSSColor("FF33CCCC"), toCSSColor("FF99CC00"),
	        toCSSColor("FFFFCC00"), toCSSColor("FFFF9900"), toCSSColor("FFFF6600"),
	        toCSSColor("FF666699"), toCSSColor("FF969696"), toCSSColor("FF003366"),
	        toCSSColor("FF339966"), toCSSColor("FF003300"), toCSSColor("FF333300"),
	        toCSSColor("FF993300"), toCSSColor("FF993366"), toCSSColor("FF333399"),
	        toCSSColor("FF333333"),
	        toCSSColor("FF000000"), // System Foreground
	        toCSSColor("FFFFFFFF")  // System Background
	    ];

	    function readStyles(zip, theme) {
	        var styles = {
	            fonts        : [],
	            numFmts      : {},
	            fills        : [],
	            borders      : [],
	            namedStyles  : [],
	            inlineStyles : []
	        };
	        var font = null;
	        var fill = null;
	        var border = null;
	        var xf = null;
	        parse(zip, "xl/styles.xml", {
	            enter: function(tag, attrs, closed) {
	                if (this.is(SEL_NUM_FMT)) {
	                    styles.numFmts[attrs.numFmtId] = attrs;
	                }
	                else if (this.is(SEL_FONT)) {
	                    styles.fonts.push(font = {});
	                    if (closed) {
	                        // apparently, there's XLSX in the wild with
	                        // <font/>, because why not (also, <border/>).
	                        // if we don't null the variable, we always
	                        // enter below and effectively ignore the rest
	                        // of the file.
	                        font = null;
	                    }
	                } else if (font) {
	                    if (tag == "sz") {
	                        font.size = parseFloat(attrs.val);
	                    } else if (tag == "name") {
	                        font.name = attrs.val;
	                    } else if (tag == "b") {
	                        font.bold = bool(attrs.val, true);
	                    } else if (tag == "i") {
	                        font.italic = bool(attrs.val, true);
	                    } else if (tag == "u") {
	                        font.underline = (attrs.val == null || attrs.val == "single");
	                    } else if (tag == "color") {
	                        font.color = getColor(attrs, null);
	                    }
	                }
	                else if (this.is(SEL_FILL)) {
	                    styles.fills.push(fill = {});
	                    if (closed) {
	                        fill = null;
	                    }
	                } else if (fill) {
	                    if (tag == "patternFill") {
	                        fill.type = attrs.patternType;
	                    } else if (tag == "fgColor" && fill.type === "solid") {
	                        fill.color = getColor(attrs, INDEXED_COLORS[0]);
	                    } else if (tag == "bgColor" && fill.type !== "solid") {
	                        fill.color = getColor(attrs, INDEXED_COLORS[0]);
	                    }
	                }
	                else if (this.is(SEL_BORDER)) {
	                    styles.borders.push(border = {});
	                    if (closed) {
	                        border = null;
	                    }
	                } else if (border) {
	                    if (/^(?:left|top|right|bottom)$/.test(tag)) {
	                        border[tag] = { style: attrs.style || "none" };
	                    }
	                    if (tag == "color") {
	                        var side = this.stack[this.stack.length - 2].$tag;
	                        border[side].color = getColor(attrs, INDEXED_COLORS[0]);
	                    }
	                }
	                else if (this.is(SEL_NAMED_STYLE)) {
	                    xf = getXf(attrs);
	                    styles.namedStyles.push(xf);
	                    if (closed) {
	                        xf = null;
	                    }
	                } else if (this.is(SEL_INLINE_STYLE)) {
	                    xf = getXf(attrs);
	                    styles.inlineStyles.push(xf);
	                    if (closed) {
	                        xf = null;
	                    }
	                } else if (xf) {
	                    if (tag == "alignment") {
	                        if (/^(?:left|center|right|justify)$/.test(attrs.horizontal)) {
	                            xf.textAlign = attrs.horizontal;
	                        }
	                        if (/^(?:top|center|bottom)$/.test(attrs.vertical)) {
	                            xf.verticalAlign = attrs.vertical;
	                        }
	                        if (attrs.wrapText != null) {
	                            xf.wrapText = bool(attrs.wrapText);
	                        }
	                        if (attrs.indent != null) {
	                            xf.indent = integer(attrs.indent);
	                        }
	                    }
	                }
	            },
	            leave: function(tag) {
	                if (this.is(SEL_FONT)) {
	                    font = null;
	                } else if (this.is(SEL_FILL)) {
	                    fill = null;
	                } else if (this.is(SEL_BORDER)) {
	                    border = null;
	                } else if (tag == "xf") {
	                    xf = null;
	                }
	            }
	        });

	        function getXf(attrs) {
	            var xf = {
	                borderId          : integer(attrs.borderId),
	                fillId            : integer(attrs.fillId),
	                fontId            : integer(attrs.fontId),
	                numFmtId          : integer(attrs.numFmtId),
	                pivotButton       : bool(attrs.pivotButton),
	                quotePrefix       : bool(attrs.quotePrefix),
	                xfId              : integer(attrs.xfId)
	            };
	            addBool("applyAlignment");
	            addBool("applyBorder");
	            addBool("applyFill");
	            addBool("applyFont");
	            addBool("applyNumberFormat");
	            addBool("applyProtection");
	            function addBool(name) {
	                if (attrs[name] != null) {
	                    xf[name] = bool(attrs[name]);
	                }
	            }
	            return xf;
	        }

	        function getColor(attrs, defaultThemeColor) {
	            if (attrs.rgb) {
	                return toCSSColor(attrs.rgb);
	            } else if (attrs.indexed) {
	                return INDEXED_COLORS[integer(attrs.indexed)];
	            } else if (attrs.theme) {
	                var themeColor = theme.colorScheme[integer(attrs.theme)];
	                if (!themeColor) {
	                    // returning black by default for font color causes
	                    // https://github.com/telerik/kendo-ui-core/issues/5826
	                    // in default cell style, color is undefined
	                    return defaultThemeColor;
	                }

	                var color = kendo.parseColor(themeColor);

	                if (attrs.tint) {
	                    color = color.toHSL();

	                    var tint = parseFloat(attrs.tint);
	                    if (tint < 0) {
	                        color.l = color.l * (1 + tint);
	                    } else {
	                        color.l = color.l * (1 - tint) + (100 - 100 * (1 - tint));
	                    }
	                }

	                return color.toCssRgba();
	            }
	        }

	        return styles;
	    }

	    var SEL_SCHEME_RGBCLR = ["a:clrScheme", "*", "a:srgbClr"];
	    var SEL_SCHEME_SYSCLR = ["a:clrScheme", "*", "a:sysClr"];
	    function readTheme(zip, rel) {
	        var scheme = [];
	        var theme = {
	            colorScheme: scheme
	        };

	        var file = xl(rel);
	        if (zip.files[file]) {
	            parse(zip, file, {
	                enter: function(tag, attrs) {
	                    if (this.is(SEL_SCHEME_SYSCLR)) {
	                        scheme.push(toCSSColor(
	                            attrs.val == "window" ? "FFFFFFFF" : "FF000000"
	                        ));
	                    } else if (this.is(SEL_SCHEME_RGBCLR)) {
	                        scheme.push(toCSSColor("FF" + attrs.val));
	                    }
	                }
	            });

	            if (scheme.length > 3) {
	                // lt1 <-> dk1
	                swap(scheme, 0, 1);
	                // lt2 <-> dk2
	                swap(scheme, 2, 3);
	            }
	        }

	        function swap(arr, a, b) {
	            var tmp = arr[a];
	            arr[a] = arr[b];
	            arr[b] = tmp;
	        }

	        return theme;
	    }

	    function integer(val) {
	        return val == null ? null : parseInt(val, 10);
	    }

	    function bool(val, def) {
	        if (val == null) {
	            return def;
	        }
	        return val == "true" || val === true || val == 1;
	    }

	    function toCSSColor(rgb) {
	        var m = /^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(rgb);
	        return "rgba(" +
	            parseInt(m[2], 16) + ", " +
	            parseInt(m[3], 16) + ", " +
	            parseInt(m[4], 16) + ", " +
	            parseInt(m[1], 16) / 255 + ")";
	    }

	    function relative_file(base, name) {
	        base = base.split(/\/+/);
	        name = name.split(/\/+/);
	        base.pop();
	        while (name.length) {
	            var part = name.shift();
	            if (part === "") {
	                base = [];      // absolute
	            } else if (part === ".") {
	                continue;
	            } else if (part === "..") {
	                base.pop();
	            } else {
	                base.push(part);
	            }
	        }
	        return base.join("/");
	    }

	    function excelToPixels(val) {
	        return val / 9525;
	    }

	    kendo.spreadsheet.readExcel = readExcel;
	    kendo.spreadsheet._readSheet = readSheet;
	    kendo.spreadsheet._readStrings = readStrings;
	    kendo.spreadsheet._readStyles = readStyles;
	    kendo.spreadsheet._readTheme = readTheme;
	    kendo.spreadsheet._readWorkbook = readWorkbook;

	}, __webpack_require__(3));


/***/ }),

/***/ 1666:
/***/ (function(module, exports) {

	module.exports = require("../util/parse-xml");

/***/ }),

/***/ 1667:
/***/ (function(module, exports) {

	module.exports = require("./calc");

/***/ })

/******/ });