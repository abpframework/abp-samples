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

	__webpack_require__(1654);
	module.exports = __webpack_require__(1654);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var $ = kendo.jQuery;
	    var CellRef = kendo.spreadsheet.CellRef;

	    var Clipboard = kendo.Class.extend({
	        init: function(workbook) {
	            this._content = {};
	            this._externalContent = {};
	            this._internalContent = {};
	            this.workbook = workbook;
	            this.origin = kendo.spreadsheet.NULLREF;
	            this.iframe = document.createElement("iframe");
	            this.iframe.className = "k-spreadsheet-clipboard-paste";
	            this.iframe.setAttribute("title", "Spreadsheet clipboard iframe");
	            this.menuInvoked = false;
	            this._uid = kendo.guid();
	            document.body.appendChild(this.iframe);
	        },

	        destroy: function() {
	            document.body.removeChild(this.iframe);
	        },

	        canCopy: function() {
	            var status = {canCopy: true};
	            var selection = this.workbook.activeSheet().select();
	            if (selection === kendo.spreadsheet.NULLREF) {
	                status.canCopy = false;
	            }
	            if (selection instanceof kendo.spreadsheet.UnionRef) {
	                status.canCopy = false;
	                status.multiSelection = true;
	            }
	            if (this.menuInvoked) {
	                status.canCopy = false;
	                status.menuInvoked = true;
	            }
	            return status;
	        },

	        canPaste: function() {
	            var sheet = this.workbook.activeSheet();
	            var ref = this.pasteRef();
	            var range = sheet.range(ref);
	            var status = { canPaste: true, pasteOnMerged: false, pasteOnDisabled: false };

	            if (!range.enable()) {
	                status.canPaste =  false;
	                status.pasteOnDisabled = true;
	            }
	            if (!ref.eq(sheet.unionWithMerged(ref))) {
	                status.canPaste = false;
	                status.pasteOnMerged = true;
	            }
	            if (this.menuInvoked) {
	                status.canPaste = false;
	                status.menuInvoked = true;
	            }
	            if (ref.bottomRight.row >= sheet._rows._count || ref.bottomRight.col >= sheet._columns._count) {
	                status.canPaste = false;
	                status.overflow = true;
	            }
	            return status;
	        },

	        intersectsMerged: function() {
	            var sheet = this.workbook.activeSheet();
	            this.parse();
	            this.origin = this._content.origRef;
	            var ref = this.pasteRef();
	            return !ref.eq(sheet.unionWithMerged(ref));
	        },

	        copy: function() {
	            var sheet = this.workbook.activeSheet();
	            this.origin = sheet.select();
	            this._internalContent = sheet.selection().getState();
	            delete this._externalContent.html;
	            delete this._externalContent.plain;
	        },

	        cut: function() {
	            var sheet = this.workbook.activeSheet();
	            this.copy();
	            sheet.range(sheet.select()).clear();
	        },

	        pasteRef: function() {
	            var sheet = this.workbook.activeSheet();

	            // When pasting from an external source, origin will be
	            // NULLREF.  Just return the destination range.
	            // https://github.com/telerik/kendo-ui-core/issues/3486
	            if (this.origin === kendo.spreadsheet.NULLREF) {
	                return sheet.select();
	            }

	            var destination = sheet.activeCell().first();
	            var originActiveCell = this.origin.first();
	            var rowDelta = originActiveCell.row - destination.row;
	            var colDelta = originActiveCell.col - destination.col;

	            return this.origin.relative(rowDelta, colDelta, 3);
	        },

	        paste: function() {
	            var sheet = this.workbook.activeSheet();
	            var pasteRef = this.pasteRef();
	            sheet.range(pasteRef).setState(this._content, this);
	            sheet.triggerChange({ recalc: true, ref: pasteRef });
	        },

	        external: function(data) {
	            if (data && (data.html || data.plain)) {
	                this._externalContent = data;
	            } else {
	                return this._externalContent;
	            }
	        },

	        isExternal: function() {
	            return !this._isInternal();
	        },

	        parse: function() {
	            var state = newState();

	            if (this._isInternal()) {
	                state = this._internalContent;
	            } else {
	                var data = this._externalContent;
	                if (data.html) {
	                    var doc = this.iframe.contentWindow.document;
	                    doc.open();
	                    doc.write(data.html);
	                    doc.close();
	                    var table = doc.querySelector("table");
	                    if (table) {
	                        state = parseHTML(table);
	                    } else {
	                        state = parseTSV(data.plain);
	                    }
	                } else {
	                    state = parseTSV(data.plain);
	                }
	                this.origin = state.origRef;
	            }

	            this._content = state;
	        },

	        _isInternal: function() {
	            if (this._externalContent.html === undefined) {
	                return true;
	            }
	            var internalHTML = $("<div/>").html(this._externalContent.html).find("table.kendo-clipboard-"+ this._uid).length ? true : false;
	            var internalPlain = $("<div/>").html(this._externalContent.plain).find("table.kendo-clipboard-"+ this._uid).length ? true : false;
	            return (internalHTML || internalPlain);
	        }
	    });
	    kendo.spreadsheet.Clipboard = Clipboard;

	    function newState() {
	        var ref = new CellRef(0, 0, 0);
	        return {
	            ref         : ref,
	            mergedCells : [],
	            data        : [],
	            foreign     : true,
	            origRef     : ref.toRangeRef()
	        };
	    }

	    function setStateData(state, row, col, value) {
	        var data = state.data || (state.data = []);
	        if (!data[row]) {
	            data[row] = [];
	        }
	        data[row][col] = value;
	        var br = state.origRef.bottomRight;
	        br.row = Math.max(br.row, row);
	        br.col = Math.max(br.col, col);
	    }

	    function stripStyle(style) {
	        return style.replace(/^-(?:ms|moz|webkit)-/, "");
	    }

	    function borderObject(styles) {
	        var obj = {};
	        [
	            "borderBottom",
	            "borderRight",
	            "borderLeft",
	            "borderTop"
	        ].forEach(function(key) {
	            obj[key] = styles[key + "Style"] == "none" ? null : {
	                size: 1,
	                color: styles[key + "Color"]
	            };
	        });
	        return obj;
	    }

	    function cellState(row, col, element, hBorders, vBorders) {
	        var styles = window.getComputedStyle(element);

	        // note: Chrome 70 appends a \t to a cell's text, which is actually mandated by the standard
	        // ([1] item 6).  We remove it below.  In [2] it's suggested they might switch back to
	        // previous behavior, but removing an eventual last TAB won't hurt anyway.
	        //
	        // [1] https://www.w3.org/TR/html53/dom.html#dom-htmlelement-innertext
	        // [2] https://bugs.chromium.org/p/chromium/issues/detail?id=897373
	        var text = element.innerText.replace(/\t$/, "");

	        var borders = borderObject(styles);
	        var state = {
	            value: text === "" ? null : text,

	            borderTop    : borders.borderTop    || hBorders.get(row, col)     || null,
	            borderBottom : borders.borderBottom || hBorders.get(row + 1, col) || null,
	            borderLeft   : borders.borderLeft   || vBorders.get(row, col)     || null,
	            borderRight  : borders.borderRight  || vBorders.get(row, col + 1) || null,

	            fontSize : parseInt(styles["font-size"], 10)
	        };

	        hBorders.set(row, col, state.borderTop);
	        hBorders.set(row + 1, col, state.borderBottom);
	        vBorders.set(row, col, state.borderLeft);
	        vBorders.set(row, col + 1, state.borderRight);

	        if (styles["background-color"] !== "rgb(0, 0, 0)" && styles["background-color"] !== "rgba(0, 0, 0, 0)") {
	            state.background = styles["background-color"];
	        }
	        if (styles.color !== "rgb(0, 0, 0)" && styles.color !== "rgba(0, 0, 0, 0)") {
	            state.color = styles.color;
	        }
	        if (styles["text-decoration"] == "underline") {
	            state.underline = true;
	        }
	        if (styles["font-style"] == "italic") {
	            state.italic = true;
	        }
	        if (styles["font-weight"] == "bold") {
	            state.bold = true;
	        }
	        if (stripStyle(styles["text-align"]) !== "right") {
	            state.textAlign = stripStyle(styles["text-align"]);
	        }
	        if (styles["vertical-align"] !== "middle") {
	            state.verticalAlign = styles["vertical-align"];
	        }
	        if (styles["word-wrap"] !== "normal" ) {
	            state.wrap = true;
	        }

	        return state;
	    }

	    function parseHTML(table) {
	        var state = newState();

	        var done = [], row = 0, col = 0;
	        for (var i = 0; i < table.rows.length; ++i) {
	            done.push([]);
	        }
	        var hBorders = new kendo.spreadsheet.calc.runtime.Matrix();
	        var vBorders = new kendo.spreadsheet.calc.runtime.Matrix();

	        for (var ri = 0; ri < table.rows.length; ++ri, ++row) {
	            var tr = table.rows[ri];
	            col = 0;
	            for (var ci = 0; ci < tr.cells.length; ++ci) {
	                var td = tr.cells[ci];
	                var rowSpan = td.rowSpan;
	                var colSpan = td.colSpan;
	                while (done[row][col]) {
	                    col++;
	                }

	                // A cell containing a long text overflowing the next (empty) cell will weirdly be
	                // reported as merged by Excel (has colspan=2).  Then, Excel informatively suggests
	                // us to ignore the colSpan by passing mso-ignore:colspan in the style.  Much thanks!
	                // https://github.com/telerik/kendo-ui-core/issues/3760
	                var style = td.getAttribute("style");
	                var ignoreColspan = /mso-ignore:colspan/.test(style);

	                setStateData(state, row, col, cellState(row, col, td, hBorders, vBorders));
	                if (rowSpan > 1 || (colSpan > 1 && !ignoreColspan)) {
	                    state.mergedCells.push(
	                        new kendo.spreadsheet.RangeRef(
	                            new CellRef(row, col),
	                            new CellRef(row + rowSpan - 1, col + colSpan - 1)
	                        ).toString());
	                }
	                for (var dr = row + rowSpan; --dr >= row;) {
	                    for (var dc = col + colSpan; --dc >= col;) {
	                        if (dr < done.length) {
	                            done[dr][dc] = true;
	                            if (!(dr == row && dc == col)) {
	                                setStateData(state, dr, dc, {});
	                            }
	                        }
	                    }
	                }
	            }
	        }

	        return state;
	    }

	    function parseTSV(data) {
	        var state = newState();
	        if (data.indexOf("\t") === -1 && data.indexOf("\n") == -1) {
	            setStateData(state, 0, 0, { value: data });
	        } else {
	            var rows = data.split("\n");
	            for (var ri = 0; ri < rows.length; ri++) {
	                var cols = rows[ri].split("\t");
	                for (var ci = 0; ci < cols.length; ci++) {
	                    setStateData(state, ri, ci, { value: cols[ci] });
	                }
	            }
	        }
	        return state;
	    }

	})(kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });