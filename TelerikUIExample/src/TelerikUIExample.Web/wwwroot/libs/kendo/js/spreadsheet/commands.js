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

	__webpack_require__(1655);
	module.exports = __webpack_require__(1655);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 977:
/***/ (function(module, exports) {

	module.exports = require("../kendo.window");

/***/ }),

/***/ 1635:
/***/ (function(module, exports) {

	module.exports = require("../kendo.binder");

/***/ }),

/***/ 1655:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(20),
	        __webpack_require__(1635),
	        __webpack_require__(977),
	        __webpack_require__(1656),
	        __webpack_require__(1657)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    /* jshint laxbreak:true */

	    var $ = kendo.jQuery;

	    var COMMAND_TYPES = {
	        AUTO_FILL: "autoFill",
	        CLEAR: "clear",
	        CUT: "cut",
	        EDIT: "edit",
	        PASTE: "paste",
	        VALIDATION: "validation"
	    };

	    var Command = kendo.spreadsheet.Command = kendo.Class.extend({
	        init: function(options) {
	            this.options = options;
	            this._workbook = options.workbook;
	            this._property = options && options.property;
	            this._state = {};
	        },
	        range: function(range) {
	            if (range !== undefined) {
	                this._setRange(range);
	            }

	            return this._range;
	        },
	        _setRange: function(range) {
	            this._range = range;
	        },
	        redo: function() {
	            this.range().select();
	            this.exec();
	        },
	        undo: function() {
	            this.setState(this._state);
	        },
	        getState: function() {
	            this._state = this.range().getState(this._property);
	        },
	        setState: function(state) {
	            this.range().setState(state);
	        },
	        rejectState: function(validationState) {
	            this.undo();
	            return {
	                title: validationState.title,
	                body: validationState.message,
	                reason: "error",
	                type: "validationError"
	            };
	        },
	        _forEachCell: function(callback) {
	            var range = this.range();
	            var ref = range._ref;

	            ref.forEach(function(ref) {
	                range.sheet().forEach(ref.toRangeRef(), callback.bind(this));
	            }.bind(this));
	        },
	        usesImage: function(/* image id from workbook._images */) {
	            return false;
	        }
	    });

	    kendo.spreadsheet.DrawingUpdateCommand = Command.extend({
	        init: function(options) {
	            this._sheet = options.sheet;
	            this._drawing = options.drawing;
	            this._orig = this._drawing.clone();
	            this._previous = options.previous;
	        },
	        exec: function() {},
	        undo: function() {
	            this._drawing.reset(this._previous);
	            this._sheet._activeDrawing = this._drawing;
	            this._sheet.triggerChange({ layout: true });
	        },
	        redo: function() {
	            this._drawing.reset(this._orig);
	            this._sheet._activeDrawing = this._drawing;
	            this._sheet.triggerChange({ layout: true });
	        },
	        usesImage: function(img) {
	            return this._drawing.image === img
	                || this._orig.image === img
	                || this._previous.image === img;
	        }
	    });

	    var DrawingCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._drawing = options.drawing;
	        },
	        usesImage: function(img) {
	            return this._drawing.image === img;
	        }
	    });

	    kendo.spreadsheet.InsertImageCommand = DrawingCommand.extend({
	        init: function(options) {
	            DrawingCommand.fn.init.call(this, options);
	            this._blob = options.blob;
	            this._width = options.width;
	            this._height = options.height;
	        },
	        exec: function() {
	            var range = this.range();
	            var sheet = range.sheet();
	            var width = this._width;
	            var height = this._height;
	            var aspect = width / height;
	            if (width > height) {
	                width = Math.min(width, 300);
	                height = width / aspect;
	            } else {
	                height = Math.min(height, 300);
	                width = height * aspect;
	            }
	            this._drawing = sheet.addDrawing({
	                topLeftCell : range.topLeft(),
	                offsetX     : 5,
	                offsetY     : 5,
	                width       : width,
	                height      : height,
	                opacity     : 1,
	                image       : this._workbook.addImage(this._blob)
	            }, true);
	            this._blob = null;
	        },
	        undo: function() {
	            var sheet = this.range().sheet();
	            sheet._activeDrawing = null;
	            sheet.removeDrawing(this._drawing);
	        },
	        redo: function() {
	            var sheet = this.range().sheet();
	            sheet._activeDrawing = this._drawing;
	            sheet.addDrawing(this._drawing);
	        }
	    });

	    kendo.spreadsheet.DeleteDrawingCommand = DrawingCommand.extend({
	        exec: function() {
	            var sheet = this.range().sheet();
	            sheet._activeDrawing = null;
	            sheet.removeDrawing(this._drawing);
	        },
	        undo: function() {
	            var sheet = this.range().sheet();
	            sheet._activeDrawing = this._drawing;
	            sheet.addDrawing(this._drawing);
	        },
	        redo: function() {
	            this.exec();
	        }
	    });

	    var ReorderDrawingsCommand = DrawingCommand.extend({
	        exec: function() {
	            var sheet = this.range().sheet();
	            this._origIndex = sheet._drawings.indexOf(this._drawing);
	            sheet._drawings.splice(this._origIndex, 1);
	            this._newIndex = this._reorder();
	            sheet._drawings.splice(this._newIndex, 0, this._drawing);
	            sheet.triggerChange({ drawings: true });
	        },
	        undo: function() {
	            var sheet = this.range().sheet();
	            sheet._drawings.splice(this._newIndex, 1);
	            sheet._drawings.splice(this._origIndex, 0, this._drawing);
	            sheet.triggerChange({ drawings: true });
	        }
	    });

	    kendo.spreadsheet.BringToFrontCommand = ReorderDrawingsCommand.extend({
	        _reorder: function() {
	            return this.range().sheet()._drawings.length;
	        }
	    });

	    kendo.spreadsheet.SendToBackCommand = ReorderDrawingsCommand.extend({
	        _reorder: function() {
	            return 0;
	        }
	    });

	    var TargetValueCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._target = options.target;
	            this._value = options.value;
	        },
	        exec: function() {
	            this.getState();
	            this.setState(this._value);
	        }
	    });

	    kendo.spreadsheet.ColumnWidthCommand = TargetValueCommand.extend({
	        getState: function() {
	            this._state = this.range().sheet().columnWidth(this._target);
	        },
	        setState: function(state) {
	            this.range().sheet().columnWidth(this._target, state);
	        }
	    });

	    kendo.spreadsheet.RowHeightCommand = TargetValueCommand.extend({
	        getState: function() {
	            this._state = this.range().sheet().rowHeight(this._target);
	        },
	        setState: function(state) {
	            this.range().sheet().rowHeight(this._target, state);
	        }
	    });

	    kendo.spreadsheet.HyperlinkCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._link = options.link;
	        },
	        exec: function() {
	            var range = this.range();
	            this._prevLink = range.link();
	            this._prevUnderline = range.underline();
	            range.link(this._link);
	            range.underline(true);
	            if (range.value() == null) { // jshint ignore:line
	                this._hasSetValue = true;
	                range.value(this._link);
	            }
	        },
	        undo: function() {
	            var range = this.range();
	            range.link(this._prevLink);
	            range.underline(this._prevUnderline);
	            if (this._hasSetValue) {
	                range.value(null);
	            }
	        }
	    });

	    kendo.spreadsheet.GridLinesChangeCommand = TargetValueCommand.extend({
	        getState: function() {
	            this._state = this._range.sheet().showGridLines();
	        },
	        setState: function(v) {
	            this._range.sheet().showGridLines(v);
	        }
	    });

	    var PropertyChangeCommand = kendo.spreadsheet.PropertyChangeCommand = Command.extend({
	        _setRange: function(range) {
	            Command.prototype._setRange.call(this, range.skipHiddenCells());
	        },
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._value = options.value;
	        },
	        exec: function() {
	            var range = this.range();
	            if (range.enable()) {
	                this.getState();

	                if (this.options.property === "format") {
	                    this._workbook.trigger("changeFormat", { range: range });
	                }

	                range[this._property](this._value);
	            }
	        }
	    });

	    kendo.spreadsheet.ClearContentCommand = Command.extend({
	        exec: function() {
	            var values = [], range, rowValues, nullValues, validationState, currentRange;
	            if (!this.range().enable()) {
	                return { reason: "error", type: "cannotModifyDisabled" };
	            }
	            if (!this.range().canEditArrayFormula()) {
	                return { reason: "error", type: "intersectsArray" };
	            }
	            this.getState();
	            range = this.range().skipHiddenCells();

	            if(range._ref.refs && range._ref.refs.length > 1) {
	                range._ref.refs.forEach(function(ref) {
	                    currentRange = range.sheet().range(ref);
	                    values = values.concat(currentRange.values());
	                });
	            } else {
	                values = range.values();
	            }
	            nullValues = [];
	            values.forEach(function(row) {
	                rowValues = [];
	                row.forEach(function() {
	                    rowValues.push(null);
	                });
	                nullValues.push(rowValues);
	            });
	            if (range.sheet().trigger("changing", { data: nullValues, range: range, changeType: COMMAND_TYPES.CLEAR })) {
	                return;
	            }
	            range.clearContent();
	            validationState = range._getValidationState();
	            if (validationState) {
	                return this.rejectState(validationState);
	            }
	        },
	        undo: function() {
	            var range = this.range().skipHiddenCells();
	            var sheet = range.sheet();
	            var data = this._state.data;
	            var values = [];
	            var rowValues;
	            data.forEach(function(row) {
	                rowValues = [];
	                row.forEach(function(cell) {
	                    rowValues.push(cell.value);
	                });
	                values.push(rowValues);
	            });
	            if (sheet.trigger("changing", { data: values, range: range, changeType: COMMAND_TYPES.CLEAR })) {
	                return;
	            }
	            this.setState(this._state);
	        }
	    });

	    kendo.spreadsheet.EditCommand = PropertyChangeCommand.extend({
	        init: function(options) {
	            options.property = options.property || "input";
	            PropertyChangeCommand.fn.init.call(this, options);
	        },
	        _setRange: function(range) {
	            PropertyChangeCommand.prototype._setRange.apply(this, arguments);
	            this._editRange = this.options.arrayFormula ? range : range.sheet().activeCellSelection();
	        },
	        getState: function() {
	            this._state = this.range().getState();
	        },
	        exec: function() {
	            return this.range().sheet().withCultureDecimals(this._exec.bind(this));
	        },
	        undo: function() {
	            var editRange = this._editRange;
	            var state = this._state;
	            if (editRange.sheet().trigger("changing", { data: state.data[0][0].value, range: editRange, changeType: COMMAND_TYPES.EDIT })) {
	                return;
	            }
	            this.setState(this._state);
	        },
	        _exec: function() {
	            var arrayFormula = this.options.arrayFormula;
	            var editRange = this._editRange;

	            if (!editRange.enable()) {
	                return { reason: "error", type: "rangeDisabled" };
	            }

	            if (!editRange.canEditArrayFormula()) {
	                return { reason: "error", type: "intersectsArray" };
	            }

	            var value = this._value;
	            this.getState();
	            if (this.range().sheet().trigger("changing", { data: value, range: this._editRange, changeType: COMMAND_TYPES.EDIT })) {
	                return;
	            }

	            if (this._property == "value") {
	                editRange.value(value);
	                return;
	            }

	            try {
	                editRange.link(null);
	                if (value === "") {
	                    editRange.value(null);
	                } else {
	                    editRange.input(value, { arrayFormula: arrayFormula });
	                    if (/\n/.test(editRange.value())) {
	                        editRange.wrap(true);
	                    }
	                }
	                editRange._adjustRowHeight();

	                var validationState = editRange._getValidationState();
	                if (validationState) {
	                    return this.rejectState(validationState);
	                }
	            } catch(ex) {
	                if (ex instanceof kendo.spreadsheet.calc.ParseError) {
	                    return {
	                        title : "Error in formula",
	                        body  : ex+"",
	                        reason: "error"
	                    };
	                } else {
	                    throw ex;
	                }
	            }
	        }
	    });

	    kendo.spreadsheet.InsertCommentCommand = PropertyChangeCommand.extend({
	        init: function(options) {
	            options.property = "comment";
	            PropertyChangeCommand.fn.init.call(this, options);
	        }
	    });

	    kendo.spreadsheet.TextWrapCommand = PropertyChangeCommand.extend({
	        init: function(options) {
	            options.property = "wrap";
	            PropertyChangeCommand.fn.init.call(this, options);

	            this._value = options.value;
	        },
	        getState: function() {
	            var rowHeight = {};
	            this.range().forEachRow(function(range) {
	                var index = range.topLeft().row;

	                rowHeight[index] = range.sheet().rowHeight(index);
	            });

	            this._state = this.range().getState(this._property);
	            this._rowHeight = rowHeight;
	        },
	        undo: function() {
	            var sheet = this.range().sheet();
	            var rowHeight = this._rowHeight;

	            this.range().setState(this._state);

	            for (var row in rowHeight) {
	                sheet.rowHeight(row, rowHeight[row]);
	            }
	        }
	    });

	    kendo.spreadsheet.AdjustDecimalsCommand = Command.extend({
	        init: function(options) {
	            this._delta = options.value;
	            options.property = "format";
	            Command.fn.init.call(this, options);
	        },
	        exec: function() {
	            var sheet = this.range().sheet();
	            var delta = this._delta;
	            var formatting = kendo.spreadsheet.formatting;

	            this.getState();

	            sheet.batch(function() {
	                this.range().forEachCell(function(row, col, cell) {
	                    var format = cell.format;

	                    if (!format) {
	                        var value = cell.value;
	                        if (typeof value == "number" && /\./.test(value)) {
	                            format = "0." + String(value).split(".")[1].replace(/\d/g, "0");
	                        }
	                    }

	                    if (format || delta > 0) {
	                        format = formatting.adjustDecimals(format || "0", delta);
	                        sheet.range(row, col).format(format);
	                    }
	                });
	            }.bind(this));
	        }
	    });

	    kendo.spreadsheet.BorderChangeCommand = Command.extend({
	        init: function(options) {
	            options.property = "border";
	            Command.fn.init.call(this, options);
	            this._type = options.border;
	            this._style = options.style;
	        },
	        _batch: function(f) {
	            return this.range().sheet().batch(f, {});
	        },
	        exec: function() {
	            var self = this;
	            self.getState();
	            self._batch(function(){
	                self[self._type](self._style);
	            });
	        },
	        noBorders: function() {
	            this.range().insideBorders(null);
	            this.outsideBorders(null);
	        },
	        allBorders: function(style) {
	            this.range().insideBorders(style);
	            this.outsideBorders(style);
	        },
	        leftBorder: function(style) {
	            this.range().leftColumn().borderLeft(style);
	        },
	        rightBorder: function(style) {
	            this.range().rightColumn().borderRight(style);
	        },
	        topBorder: function(style) {
	            this.range().topRow().borderTop(style);
	        },
	        bottomBorder: function(style) {
	            this.range().bottomRow().borderBottom(style);
	        },
	        outsideBorders: function(style) {
	            var range = this.range();
	            range.leftColumn().borderLeft(style);
	            range.topRow().borderTop(style);
	            range.rightColumn().borderRight(style);
	            range.bottomRow().borderBottom(style);
	        },
	        insideBorders: function(style) {
	            this.range().insideBorders(style);
	            this.outsideBorders(null);
	        },
	        insideHorizontalBorders: function(style) {
	            this.range().insideHorizontalBorders(style);
	        },
	        insideVerticalBorders: function(style) {
	            this.range().insideVerticalBorders(style);
	        }
	    });

	    kendo.spreadsheet.MergeCellCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._type = options.value;
	        },
	        exec: function() {
	            this.getState();
	            this[this._type]();
	        },
	        activate: function(ref) {
	            this.range().sheet().activeCell(ref);
	        },
	        getState: function() {
	            this._state = this.range().getState();
	        },
	        undo: function() {
	            if (this._type !== "unmerge") {
	                this.range().unmerge();
	                this.activate(this.range().topLeft());
	            }
	            this.range().setState(this._state);
	        },
	        cells: function() {
	            var range = this.range();
	            var ref = range._ref;

	            range.merge();
	            this.activate(ref);
	        },
	        horizontally: function() {
	            var ref = this.range().topRow()._ref;

	            this.range().forEachRow(function(range) {
	                range.merge();
	            });

	            this.activate(ref);
	        },
	        vertically: function() {
	            var ref = this.range().leftColumn()._ref;

	            this.range().forEachColumn(function(range) {
	                range.merge();
	            });

	            this.activate(ref);
	        },
	        unmerge: function() {
	            var range = this.range();
	            var ref = range._ref.topLeft;

	            range.unmerge();
	            this.activate(ref);
	        }
	    });

	    kendo.spreadsheet.FreezePanesCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._type = options.value;
	        },
	        exec: function() {
	            this.getState();
	            this._topLeft = this.range().topLeft();
	            this[this._type]();
	        },
	        getState: function() {
	            this._state = this.range().sheet().getState();
	        },
	        undo: function() {
	            this.range().sheet().setState(this._state);
	        },
	        panes: function() {
	            var topLeft = this._topLeft;
	            var sheet = this.range().sheet();

	            sheet.frozenColumns(topLeft.col).frozenRows(topLeft.row);
	        },
	        rows: function() {
	            var topLeft = this._topLeft;
	            var sheet = this.range().sheet();

	            sheet.frozenRows(topLeft.row);
	        },
	        columns: function() {
	            var topLeft = this._topLeft;
	            var sheet = this.range().sheet();

	            sheet.frozenColumns(topLeft.col);
	        },
	        unfreeze: function() {
	            var sheet = this.range().sheet();
	            sheet.frozenRows(0).frozenColumns(0);
	        }
	    });

	    kendo.spreadsheet.PasteCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._clipboard = options.workbook.clipboard();
	            this._clipboard.parse();
	            this._event = options.event;
	            this._clipboardContent = this._clipboard._content;
	            this._sheet = this._workbook.activeSheet();
	            this._range = this._sheet.selection ? this._sheet.selection() : this._sheet.range(this._clipboard.pasteRef());
	            this._state = this._range.getState();
	            this._targetRangeRefs = this._range._ref instanceof kendo.spreadsheet.UnionRef ? this._range._ref.refs : [this._range._ref];
	        },
	        exec: function() {
	            return this.range().sheet().withCultureDecimals(this._exec.bind(this));
	        },
	        undo: function() {
	            var sheet = this._sheet;
	            var range = this._range;

	            if (sheet.trigger("changing", { data: this._state.data, range: range, changeType: COMMAND_TYPES.PASTE })) {
	                return;
	            }

	            this.setState(this._state);
	        },
	        _exec: function() {
	            var status = this._clipboard.canPaste();

	            if (!status.canPaste) {
	                if (status.menuInvoked) {
	                    return { reason: "error", type: "useKeyboard" };
	                }
	                if (status.pasteOnMerged) {
	                    return { reason: "error", type: "modifyMerged" };
	                }
	                if (status.overflow) {
	                    return { reason: "error", type: "overflow" };
	                }
	                if (status.pasteOnDisabled) {
	                    this._event.preventDefault();
	                    return { reason: "error", type: "cannotModifyDisabled" };
	                }
	                return { reason: "error" };
	            }

	            var sheet = this._sheet;
	            var range = this._range;

	            if(this._workbook.trigger("paste", {range: range, clipboardContent: this._clipboardContent}) ||
	                sheet.trigger("changing", { data: this._clipboardContent.data, range: range, changeType: COMMAND_TYPES.PASTE })) {
	                this._event.preventDefault();
	                return;
	            } else {
	                this._processPaste();
	            }
	        },
	        _adjustPasteTarget: function(multipliers, sourceRows, sourceCols) {
	            var that = this;
	            var targetRangeRefs = that._targetRangeRefs;
	            var sheet = that._sheet;
	            var RangeRef = kendo.spreadsheet.RangeRef;
	            var UnionRef = kendo.spreadsheet.UnionRef;
	            var refs = [];
	            var compare = function (a, b) {
	                var result = 0;
	                var topLeftA = a.topLeft;
	                var topLeftB = b.topLeft;

	                if (topLeftA.row > topLeftB.row) {
	                    result = 1;
	                } else if (topLeftA.row < topLeftB.row) {
	                    result = -1;
	                } else if (topLeftA.col > topLeftB.col) {
	                    result = 1;
	                } else if (topLeftA.col < topLeftB.col) {
	                    result = -1;
	                }

	                return result;
	            };

	            var refToSelect, rangeToSelect, ref, topLeft, multiplier, i, bottomRight;

	            for(i = 0; i < targetRangeRefs.length; i += 1) {
	                ref = targetRangeRefs[i];
	                multiplier = multipliers[i];
	                topLeft = ref.topLeft;
	                bottomRight = {
	                    row: multiplier.rows * sourceRows + topLeft.row - 1,
	                    col: multiplier.cols * sourceCols + topLeft.col - 1
	                };

	                refToSelect = new RangeRef(topLeft, bottomRight);
	                refs.push(refToSelect);
	            }

	            if(refs.length === 1) {
	                rangeToSelect = sheet.range(refToSelect);
	            } else {
	                refs.sort(compare);
	                rangeToSelect = sheet.range(new UnionRef(refs));
	            }

	            rangeToSelect.select();
	            that._range = rangeToSelect;
	            that._state = that._range.getState();
	        },
	        _processPaste: function() {
	            var that = this;
	            var sheet = that._sheet;
	            var clipboardContent = that._clipboardContent;
	            var range = that._range;
	            var sourceData = clipboardContent.data;
	            var sourceRows = sourceData.length;
	            var sourceCols = sourceData[0].length;
	            var targetRangeRefs = that._targetRangeRefs;
	            var multipliers = that._targetRanges(sourceRows, sourceCols);
	            var i;

	            that._adjustPasteTarget(multipliers, sourceRows, sourceCols);

	            sheet.batch(function() {
	                for(i = 0; i < targetRangeRefs.length; i++) {
	                    that._populateTargetRange(targetRangeRefs[i], sourceRows, sourceCols, multipliers[i]);
	                }
	            }, {
	                recalc: true,
	                ref: that._range._ref
	            });

	            range._adjustRowHeight();
	        },
	        _populateTargetRange: function(ref, sourceRows, sourceCols, multipliers) {
	            var topLeft = ref.topLeft;
	            var range, i, j;

	            for(i = 0; i < multipliers.rows; i++) {
	                for(j = 0; j < multipliers.cols; j++) {
	                    range = this._sheet.range(topLeft.row + sourceRows * i, topLeft.col + sourceCols * j);
	                    range.setState(this._clipboardContent, this._clipboard);
	                }
	            }
	        },
	        _targetRangeDimensions: function(ref, sourceRows, sourceCols) {
	            var topLeft = ref.topLeft;
	            var bottomRight = ref.bottomRight;
	            var targetRangeRows = bottomRight.row - topLeft.row + 1;
	            var targetRangeCols = bottomRight.col - topLeft.col + 1;
	            var rowsMultiplier = 1;
	            var colsMultiplier = 1;

	            if((targetRangeRows % sourceRows === 0 && targetRangeCols % sourceCols === 0)) {
	                rowsMultiplier = targetRangeRows / sourceRows;
	                colsMultiplier = targetRangeCols / sourceCols;
	            }

	            return {
	                rows: rowsMultiplier,
	                cols: colsMultiplier
	            };
	        },
	        _targetRanges: function(sourceRows, sourceCols) {
	            var targetRangeRefs = this._targetRangeRefs;
	            var multipliers = [];
	            var i;

	            for(i = 0; i < targetRangeRefs.length; i++) {
	                multipliers.push(this._targetRangeDimensions(targetRangeRefs[i], sourceRows, sourceCols));
	            }

	            return multipliers;
	        }
	    });

	    kendo.spreadsheet.AdjustRowHeightCommand = Command.extend({
	        exec: function() {
	            var options = this.options;
	            var sheet = this._workbook.activeSheet();
	            var range = options.range || sheet.range(options.rowIndex);

	            range._adjustRowHeight();
	        }
	    });

	    kendo.spreadsheet.ToolbarPasteCommand = Command.extend({
	        exec: function() {
	            if (kendo.support.clipboard.paste) {
	                this._workbook._view.clipboard.focus().select();
	                //reason : focusclipbord
	                document.execCommand('paste');
	            } else {
	                return { reason: "error", type: "useKeyboard" };
	            }
	        }
	    });

	    kendo.spreadsheet.CutCommand = Command.extend({
	        _eventType: "cut",
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._clipboard = options.workbook.clipboard();
	            this._event = options.event;
	        },
	        exec: function() {
	            var status = this._clipboard.canCopy();
	            var data = [], rangeValues, currentRow;
	            if (!status.canCopy) {
	                if (status.menuInvoked) {
	                    return { reason: "error", type: "useKeyboard" };
	                } else if (status.multiSelection) {
	                    return { reason: "error", type: "unsupportedSelection" };
	                }
	                return;
	            }
	            var range = this._workbook.activeSheet().selection();
	            if (this._eventType == "cut") {
	                if (!range.enable()) {
	                    this._event.preventDefault();
	                    return { reason: "error", type: "cannotModifyDisabled" };
	                }
	                this.getState();
	            }
	            if (this._workbook.trigger(this._eventType, { range: range })) {
	                this._event.preventDefault();
	            } else if (this._eventType == "cut") {
	                rangeValues = range.values();
	                rangeValues.forEach(function(row){
	                    currentRow = [];
	                    row.forEach(function(){
	                        currentRow.push({});
	                    });
	                    data.push(currentRow);
	                });
	                if (range.sheet().trigger("changing", { data: data, range: range, changeType: COMMAND_TYPES.CUT })) {
	                    return;
	                }
	                this._clipboard.cut();
	            } else {
	                this._clipboard.copy();
	            }
	        },
	        undo: function() {
	            var range = this.range();
	            if (range.sheet().trigger("changing", { data: this._state.data, range: range, changeType: COMMAND_TYPES.CUT })) {
	                return;
	            }
	            this.setState(this._state);
	        }
	    });

	    kendo.spreadsheet.CopyCommand = kendo.spreadsheet.CutCommand.extend({
	        _eventType: "copy",
	        undo: $.noop
	    });

	    // function copyToClipboard(html) {
	    //     var textarea = document.createElement('textarea');
	    //     $(textarea).addClass("k-spreadsheet-clipboard")
	    //         .val(html)
	    //         .appendTo(document.body)
	    //         .trigger("focus")
	    //         .select();

	    //     document.execCommand('copy');

	    //     $(textarea).remove();
	    // }

	    kendo.spreadsheet.ToolbarCopyCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._clipboard = options.workbook.clipboard();
	        },
	        undo: $.noop,
	        exec: function() {
	            if (kendo.support.clipboard.copy) {
	                document.execCommand('copy');
	            } else {
	                return { reason: "error", type: "useKeyboard" };
	            }
	        }
	    });

	    kendo.spreadsheet.AutoFillCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	        },
	        origin: function(origin) {
	            this._origin = origin;
	        },
	        exec: function() {
	            var range = this.range(), autoFillData;
	            if (!range.enable()) {
	                return { reason: "error", type: "rangeDisabled" };
	            }
	            if (range.intersectingArrayFormula()) {
	                return { reason: "error", type: "intersectsArray" };
	            }
	            this.getState();
	            try {
	                autoFillData = range._previewFillFrom(this._origin);
	                if (range.sheet().trigger("changing", { data: autoFillData.props, range: autoFillData.dest, changeType: COMMAND_TYPES.AUTO_FILL })) {
	                    return;
	                }
	                autoFillData.dest._properties(autoFillData.props, true);
	            } catch(ex) {
	                if (ex instanceof kendo.spreadsheet.Range.FillError) {
	                    return { reason: "error", type: ex.code };
	                }
	                throw ex;
	            }
	        },
	        undo: function() {
	            var range = this.range();
	            var state = this._state;
	            if (range.sheet().trigger("changing", { data: state.data, range: range, changeType: COMMAND_TYPES.AUTO_FILL })) {
	                return;
	            }
	            this.setState(this._state);
	        }
	    });

	    kendo.spreadsheet.ToolbarCutCommand = Command.extend({
	        cannotUndo: true,
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._clipboard = options.workbook.clipboard();
	        },
	        exec: function() {
	            if (kendo.support.clipboard.copy) {
	                document.execCommand('cut');
	            } else {
	                return { reason: "error", type: "useKeyboard" };
	            }
	        }
	    });

	    kendo.spreadsheet.FilterCommand = Command.extend({
	        undo: function() {
	            this.range().filter(this._state);
	        },
	        exec: function() {
	            var range = this.range();
	            this._state = range.hasFilter();
	            range.filter(!this._state);
	        }
	    });

	    kendo.spreadsheet.SortCommand = Command.extend({
	        undo: function() {
	            var sheet = this.range().sheet();
	            sheet.setState(this._state);
	        },
	        exec: function() {
	            var range = this.range();
	            var sheet = range.sheet();
	            var activeCell = sheet.activeCell();
	            var col = this.options.sheet ? activeCell.topLeft.col : (this.options.column || 0);
	            var ascending = this.options.value === "asc" ? true : false;

	            this._state = sheet.getState();

	            if (this.options.sheet) {
	                range = this.expandRange();
	            }

	            var reason = range.cantSort();
	            if (reason) {
	                return { reason: "error", type: reason.code };
	            }

	            range.sort({ column: col, ascending: ascending });
	        },
	        expandRange: function() {
	            var sheet = this.range().sheet();
	            return new kendo.spreadsheet.Range(sheet._sheetRef, sheet);
	        }
	    });

	    var ApplyFilterCommand = kendo.spreadsheet.ApplyFilterCommand = Command.extend({
	        column: function() {
	            return this.options.column || 0;
	        },
	        undo: function() {
	            var sheet = this.range().sheet();

	            sheet.clearFilter(this.column());

	            if (this._state.length) {
	                this.range().filter(this._state);
	            }
	        },
	        getState: function() {
	            var sheet = this.range().sheet();
	            var current = sheet.filter();

	            if (current) {
	                this._state = current.columns.filter(function(c) {
	                    return c.index == this.column();
	                }.bind(this));
	            }
	        },
	        exec: function() {
	            var range = this.range();
	            var column = this.column();
	            var current = range.sheet().filter();
	            var options;
	            var filterRule;
	            var exists = false;

	            if (this.options.valueFilter) {
	                filterRule = { column: column, filter: new kendo.spreadsheet.ValueFilter(this.options.valueFilter) };
	            } else if (this.options.customFilter) {
	                filterRule = { column: column, filter: new kendo.spreadsheet.CustomFilter(this.options.customFilter) };
	            }

	            this.getState();

	            if (current && current.ref.eq(range._ref) && current.columns.length) {
	                current.columns.forEach(function(element) {
	                    if (element.index === column) {
	                        exists = true;
	                    }
	                });

	                options = current.columns.map(function(element) {
	                    return element.index === column ? filterRule : { column: element.index, filter: element.filter };
	                });

	                if (!exists) {
	                    options.push(filterRule);
	                }
	            } else {
	                options = filterRule;
	            }

	            range.filter(options);
	        }
	    });

	    kendo.spreadsheet.ClearFilterCommand = ApplyFilterCommand.extend({
	        exec: function() {
	            var range = this.range();
	            var column = this.column();

	            this.getState();
	            range.clearFilter(column);
	        }
	    });

	    kendo.spreadsheet.HideLineCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this.axis = options.axis;
	        },

	        undo: function() {
	            var sheet = this.range().sheet();
	            sheet.setAxisState(this._state);
	        },

	        exec: function() {
	            var sheet = this.range().sheet();
	            this._state = sheet.getAxisState();

	            if (this.axis == "row") {
	                sheet.axisManager().hideSelectedRows();
	            } else {
	                sheet.axisManager().hideSelectedColumns();
	            }
	        }
	    });

	    kendo.spreadsheet.UnHideLineCommand = kendo.spreadsheet.HideLineCommand.extend({
	        exec: function() {
	            var sheet = this.range().sheet();
	            this._state = sheet.getAxisState();

	            if (this.axis == "row") {
	                sheet.axisManager().unhideSelectedRows();
	            } else {
	                sheet.axisManager().unhideSelectedColumns();
	            }
	        }
	    });

	    var DeleteCommand = Command.extend({
	        exec: function() {
	            this._expandedRange = this._expand(this.range());
	            this._state = this._expandedRange.getState();
	            this._indexes = this._exec(this._expandedRange.sheet());
	        },
	        undo: function() {
	            var self = this;
	            var range = self._expandedRange;
	            var sheet = range.sheet();
	            sheet.batch(function(){
	                self._indexes.forEach(function(x){
	                    self._undoOne(sheet, x);
	                    sheet._restoreModifiedFormulas(x.formulas);
	                });
	                range.setState(self._state);
	            }, { layout: true, recalc: true, ref: range._ref });
	        }
	    });

	    kendo.spreadsheet.DeleteRowCommand = DeleteCommand.extend({
	        _expand: function(range) {
	            return range.resize({ left: -Infinity, right: +Infinity });
	        },
	        _exec: function(sheet) {
	            return sheet.axisManager().deleteSelectedRows();
	        },
	        _undoOne: function(sheet, x) {
	            sheet.insertRow(x.index);
	            sheet.rowHeight(x.index, x.height);
	        }
	    });

	    kendo.spreadsheet.DeleteColumnCommand = DeleteCommand.extend({
	        _expand: function(range) {
	            return range.resize({ top: -Infinity, bottom: +Infinity });
	        },
	        _exec: function(sheet) {
	            return sheet.axisManager().deleteSelectedColumns();
	        },
	        _undoOne: function(sheet, x) {
	            sheet.insertColumn(x.index);
	            sheet.columnWidth(x.index, x.width);
	        }
	    });

	    var AddCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._value = options.value;
	        },
	        undo: function() {
	            var self = this;
	            var sheet = self.range().sheet();
	            sheet.batch(function(){
	                for (var i = self._pos.count; --i >= 0;) {
	                    self._undoOne(sheet, self._pos.base);
	                }
	            }, { layout: true, recalc: true });
	        }
	    });

	    kendo.spreadsheet.AddColumnCommand = AddCommand.extend({
	        exec: function() {
	            var value = this._value;
	            var sheet = this.range().sheet();
	            var result = sheet.axisManager().preventAddColumn();

	            if(!result && value === "right") {
	                result = sheet.axisManager().preventAddColumnAfterLast();
	            }

	            if (result) {
	                return result;
	            }

	            if (value === "left") {
	                this._pos = sheet.axisManager().addColumnLeft();
	            } else {
	                this._pos = sheet.axisManager().addColumnRight();
	            }
	        },
	        _undoOne: function(sheet, index) {
	            sheet.deleteColumn(index);
	        }
	    });

	    kendo.spreadsheet.AddRowCommand = AddCommand.extend({
	        exec: function() {
	            var value = this._value;
	            var sheet = this.range().sheet();
	            var result = sheet.axisManager().preventAddRow();

	            if(!result && value === "below") {
	                result = sheet.axisManager().preventAddRowAfterLast();
	            }

	            if (result) {
	                return result;
	            }

	            if (value === "above") {
	                this._pos = sheet.axisManager().addRowAbove();
	            } else {
	                this._pos = sheet.axisManager().addRowBelow();
	            }
	        },
	        _undoOne: function(sheet, index) {
	            sheet.deleteRow(index);
	        }
	    });

	    kendo.spreadsheet.EditValidationCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._value = options.value;
	        },
	        exec: function() {
	            var self = this, sheet = self.range().sheet();
	            this.getState();
	            if (sheet.trigger("changing", { data: self._value, range: self.range(), changeType: COMMAND_TYPES.VALIDATION })) {
	                return;
	            }
	            try {
	                sheet.withCultureDecimals(function(){
	                    self.range().validation(self._value);
	                });
	            } catch(ex) {
	                if (ex instanceof kendo.spreadsheet.calc.ParseError) {
	                    return {
	                        title : "Error in formula",
	                        body  : ex+"",
	                        reason: "error"
	                    };
	                } else {
	                    throw ex;
	                }
	            }
	        },
	        undo: function() {
	            var editRange = this.range();
	            var state = this._state;
	            if (editRange.sheet().trigger("changing", { data: state.data[0][0].validation, range: editRange, changeType: COMMAND_TYPES.VALIDATION })) {
	                return;
	            }
	            this.setState(this._state);
	        }
	    });

	    kendo.spreadsheet.OpenCommand = Command.extend({
	        cannotUndo: true,
	        exec: function() {
	            var file = this.options.file;
	            if (file.name.match(/.xlsx$/i) === null) {
	                return { reason: "error", type: "openUnsupported" };
	            }

	            var workbook = this.options.workbook;
	            workbook.fromFile(this.options.file).then(function(){
	                var errors = workbook.excelImportErrors;
	                if (errors && errors.length) {
	                    workbook._view.openDialog("importError", {
	                        errors: errors
	                    });
	                }
	            });
	        }
	    });

	    kendo.spreadsheet.SaveAsCommand = Command.extend({
	        cannotUndo: true,
	        exec: function() {
	            var fileName = this.options.name + this.options.extension;
	            if (this.options.extension === ".xlsx") {
	                this.options.workbook.saveAsExcel({
	                    fileName: fileName
	                });
	            } else if (this.options.extension === ".pdf") {
	                this.options.workbook.saveAsPDF($.extend(this.options.pdf, {workbook: this.options.workbook, fileName: fileName}));
	            }
	        }
	    });

	    var NameCommand = Command.extend({
	        init: function(options) {
	            Command.fn.init.call(this, options);
	            this._name = options.name;
	            this._value = options.value;
	        },
	        getState: function() {
	            this._state = this._workbook.nameDefinition(this._name);
	        },
	        setState: function() {
	            this._workbook.nameDefinition(this._name, this._state);
	            this._workbook.trigger("change", { recalc: true });
	        }
	    });

	    kendo.spreadsheet.DefineNameCommand = NameCommand.extend({
	        exec: function() {
	            this.getState();
	            try {
	                this._workbook.defineName(this._name, this._value);
	                this._workbook.trigger("change", { recalc: true });
	            } catch(ex) {
	                return {
	                    title: "Error",
	                    body: ex+"",
	                    reason: "error"
	                };
	            }
	        }
	    });

	    kendo.spreadsheet.DeleteNameCommand = NameCommand.extend({
	        exec: function() {
	            this.getState();
	            this._workbook.undefineName(this._name);
	            this._workbook.trigger("change", { recalc: true });
	        }
	    });

	})(kendo);

	}, __webpack_require__(3));


/***/ }),

/***/ 1656:
/***/ (function(module, exports) {

	module.exports = require("../kendo.list");

/***/ }),

/***/ 1657:
/***/ (function(module, exports) {

	module.exports = require("../kendo.tabstrip");

/***/ })

/******/ });