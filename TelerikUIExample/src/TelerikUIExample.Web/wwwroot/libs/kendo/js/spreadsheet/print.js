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

	__webpack_require__(1683);
	module.exports = __webpack_require__(1683);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 958:
/***/ (function(module, exports) {

	module.exports = require("../util/text-metrics");

/***/ }),

/***/ 973:
/***/ (function(module, exports) {

	module.exports = require("./range");

/***/ }),

/***/ 1661:
/***/ (function(module, exports) {

	module.exports = require("./sheet");

/***/ }),

/***/ 1676:
/***/ (function(module, exports) {

	module.exports = require("./references");

/***/ }),

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1684), __webpack_require__(1661), __webpack_require__(973), __webpack_require__(1676), __webpack_require__(1685), __webpack_require__(958) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	    "use strict";

	    var spreadsheet = kendo.spreadsheet;
	    var CellRef = spreadsheet.CellRef;
	    var kdrw = kendo.drawing;
	    var formatting = spreadsheet.formatting;
	    var geo = kendo.geometry;

	    var GUIDELINE_WIDTH = 0.8;

	    /* jshint eqnull:true, laxbreak:true, shadow:true, -W054 */
	    /* jshint latedef: nofunc */

	    // This takes a list of row heights and the page height, and
	    // produces a list of Y coordinates for each row, such that rows
	    // are not truncated across pages.  However, the algorithm will
	    // decide to truncate a row in the event that more than
	    // `maxEmpty` (default 0.2) of the available space would
	    // otherwise be left blank.
	    //
	    // It will be used for horizontal splitting too (will receive
	    // column widths and page width, and produce a list of X coords).
	    //
	    // If the third argument (headerRows) is not null, it specifies a
	    // number of rows to repeat on each page.  On pages other than the
	    // first, the necessary space will be skipped at the top.  Header
	    // coordinates (except for the first page) are pushed in
	    // headerCoords.
	    function distributeCoords(heights, pageHeight, maxEmpty, headerRows, headerCoords) {
	        var curr = 0;
	        var out = [];
	        var bottom = pageHeight;
	        var header = 0;
	        if (pageHeight && maxEmpty) {
	            maxEmpty *= pageHeight;
	        }
	        heights.forEach(function(h, i){
	            if (headerRows != null && i < headerRows) {
	                header += h;
	            }
	            if (pageHeight && curr + h > bottom) {
	                if (bottom - curr < maxEmpty) {
	                    // align to next page
	                    curr = pageHeight * Math.ceil(curr / pageHeight) + header;
	                    if (header > 0) {
	                        headerCoords.push(curr - header);
	                    }
	                }
	                // update bottom anyway; don't just add pageHeight, as
	                // we might need multiple pages for the pathological
	                // case of one row higher than the page.
	                bottom += pageHeight * Math.ceil(h / pageHeight);
	            }
	            out.push(curr);
	            curr += h;
	        });
	        out.push(curr);
	        return out;
	    }

	    function doLayout(sheet, range, options) {
	        // normalize reference so we don't have to deal with Infinity here.
	        var grid = sheet._grid;
	        range = grid.normalize(range);

	        var wholeRect = grid.rectangle(range);
	        var drawings = [];
	        sheet._drawings.forEach(function(d) {
	            var box = sheet.drawingBoundingBox(d);
	            if (box.intersects(wholeRect)) {
	                drawings.push({
	                    drawing: d,
	                    box: box.offset(-wholeRect.left, -wholeRect.top)
	                });
	            }
	        });

	        // 1. obtain the list of cells that need to be printed, the
	        //    row heights and column widths.  Place in each cell row,
	        //    col (relative to range, i.e. first is 0,0), rowspan,
	        //    colspan and merged.  also place a list of drawings
	        //    anchored to that cell.
	        var cells = [];
	        var rowHeights = [];
	        var colWidths = [];
	        var mergedCells = sheet._getMergedCells(range);

	        var maxRow = -1, maxCol = -1;
	        sheet.forEach(range, function(row, col, cell){
	            var relrow = row - range.topLeft.row;
	            var relcol = col - range.topLeft.col;
	            var rh = sheet.rowHeight(row);
	            var cw = sheet.columnWidth(col);
	            if (!options.forScreen) {
	                // for printing we'll need the list of anchored
	                // drawings so that we can adjust them after page
	                // splitting.
	                cell.drawings = drawings.filter(function(d){
	                    var tl = d.drawing.topLeftCell;
	                    if (tl && tl.row == row && tl.col == col) {
	                        maxRow = Math.max(maxRow, sheet._rows.index(d.box.bottom));
	                        maxCol = Math.max(maxCol, sheet._columns.index(d.box.right));
	                        return true;
	                    }
	                });
	            }
	            if (!relcol) {
	                rowHeights.push(rh);
	            }
	            if (!relrow) {
	                colWidths.push(cw);
	            }
	            var id = new CellRef(row, col).print();
	            if (mergedCells.secondary[id]) {
	                return;
	            }
	            cell.row = relrow;
	            cell.col = relcol;
	            var m = mergedCells.primary[id];
	            if (m) {
	                delete mergedCells.primary[id];
	                cell.merged = true;
	                cell.rowspan = m.height();
	                cell.colspan = m.width();
	                if (options.forScreen) {
	                    cell.width = sheet._columns.sum(m.topLeft.col, m.bottomRight.col);
	                    cell.height = sheet._rows.sum(m.topLeft.row, m.bottomRight.row);
	                }
	            } else {
	                cell.rowspan = 1;
	                cell.colspan = 1;
	            }
	            if (!sheet._grid._columns.sum(col, col + cell.colspan - 1) ||
	                !sheet._grid._rows.sum(row, row + cell.rowspan - 1)) {
	                return;
	            }
	            var nonEmpty = options.forScreen || shouldDrawCell(cell);
	            if (!(options.emptyCells || nonEmpty)) {
	                return;
	            }
	            if (nonEmpty) {
	                maxRow = Math.max(maxRow, relrow + cell.rowspan - 1);
	                maxCol = Math.max(maxCol, relcol + cell.colspan - 1);
	            } else {
	                cell.empty = true;
	            }
	            cells.push(cell);
	        });

	        if (!options.forScreen) {
	            // keep only the drawable area
	            rowHeights = rowHeights.slice(0, maxRow + 1);
	            colWidths = colWidths.slice(0, maxCol + 1);
	        }

	        var pageWidth = options.pageWidth;
	        var pageHeight = options.pageHeight;
	        var scaleFactor = options.scale || 1;

	        // when fitWidth is requested, we must update the page size
	        // with the corresponding scale factor; the algorithm below
	        // (2) will continue to work, just drawing on a bigger page.
	        if (options.fitWidth) {
	            var width = colWidths.reduce(sum, 0);
	            if (width > pageWidth) {
	                scaleFactor = pageWidth / width;
	            }
	        }
	        pageWidth = Math.ceil(pageWidth / scaleFactor);
	        pageHeight = Math.ceil(pageHeight / scaleFactor);

	        // 2. calculate top, left, bottom, right, width and height for
	        //    printable cells.  Merged cells will be split across
	        //    pages, unless the first row/col is shifted to next page.
	        //    boxWidth and boxHeight get the complete drawing size.
	        //    Note that cell coordinates keep increasing, i.e. they
	        //    are not reset to zero for a new page.  The print
	        //    function translates the view to current page.
	        var hyCoords = []; // will receive header Y coordinates, if needed
	        var yCoords = distributeCoords(rowHeights, pageHeight || 0, options.maxEmpty,
	                                       options.headerRows, hyCoords);
	        var xCoords = distributeCoords(colWidths, pageWidth || 0, options.maxEmpty);
	        var boxWidth = 0;
	        var boxHeight = 0;
	        var headerCells = [];
	        cells = cells.filter(function(cell){
	            if (cell.empty && (cell.row > maxRow || cell.col > maxCol)) {
	                return false;
	            }
	            if (options.headerRows && cell.row < options.headerRows) {
	                headerCells.push(cell);
	            }
	            cell.left = xCoords[cell.col];
	            cell.top = yCoords[cell.row];
	            if (cell.merged) {
	                if (!options.forScreen) {
	                    cell.right = orlast(xCoords, cell.col + cell.colspan);
	                    cell.bottom = orlast(yCoords, cell.row + cell.rowspan);
	                    cell.width = cell.right - cell.left;
	                    cell.height = cell.bottom - cell.top;
	                } else {
	                    cell.right = cell.left + cell.width;
	                    cell.bottom = cell.top + cell.height;
	                }
	            } else {
	                cell.width = colWidths[cell.col];
	                cell.height = rowHeights[cell.row];
	                cell.bottom = cell.top + cell.height;
	                cell.right = cell.left + cell.width;
	            }
	            if (!options.forScreen) {
	                // page breaking will shift cell coordinates.  adjust
	                // anchored drawings.
	                cell.drawings.forEach(function(d){
	                    var box = d.box;
	                    box.left = cell.left + d.drawing.offsetX;
	                    box.top = cell.top + d.drawing.offsetY;
	                    box.right = box.left + box.width;
	                    box.bottom = box.top + box.height;
	                });
	            }
	            boxWidth = Math.max(boxWidth, cell.right);
	            boxHeight = Math.max(boxHeight, cell.bottom);
	            return true;
	        });

	        // 3. if any merged cells remain in "primary", they start
	        //    outside the printed range and we should still display
	        //    them partially.
	        Object.keys(mergedCells.primary).forEach(function(id){
	            var ref = mergedCells.primary[id];
	            sheet.forEach(ref.topLeft.toRangeRef(), function(row, col, cell){
	                var relrow = row - range.topLeft.row;
	                var relcol = col - range.topLeft.col;
	                cell.merged = true;
	                cell.colspan = ref.width();
	                cell.rowspan = ref.height();
	                if (relrow < 0) {
	                    cell.top = -sheet._rows.sum(row, row - relrow - 1);
	                } else {
	                    cell.top = yCoords[relrow];
	                }
	                if (relcol < 0) {
	                    cell.left = -sheet._columns.sum(col, col - relcol - 1);
	                } else {
	                    cell.left = xCoords[relcol];
	                }
	                cell.height = sheet._rows.sum(ref.topLeft.row, ref.bottomRight.row);
	                cell.width = sheet._columns.sum(ref.topLeft.col, ref.bottomRight.col);
	                if (cell.height > 0 && cell.width > 0) {
	                    // zero means a fully hidden merged cell (all rows/columns are hidden)
	                    // https://github.com/telerik/kendo-ui-core/issues/1794
	                    cell.right = cell.left + cell.width;
	                    cell.bottom = cell.top + cell.height;
	                    cell.row = relrow;
	                    cell.col = relcol;
	                    cells.push(cell);
	                }
	            });
	        });

	        // 4. replicate header rows on all pages
	        if (options.headerRows) {
	            hyCoords.forEach(function(y){
	                headerCells.forEach(function(cell){
	                    cell = clone(cell);
	                    cell.top += y;
	                    cell.bottom = cell.top + cell.height;
	                    cells.push(cell);
	                });
	                yCoords.push(y);
	            });
	            yCoords.sort(orderCoords);
	        }

	        return {
	            width    : boxWidth,
	            height   : boxHeight,
	            cells    : cells.sort(orderCells),
	            scale    : scaleFactor,
	            xCoords  : xCoords,
	            yCoords  : yCoords,
	            drawings : drawings
	        };
	    }

	    function clone(hash, target) {
	        if (!target) {
	            target = {};
	        }
	        if (Object.assign) {
	            return Object.assign(target, hash);
	        }
	        return Object.keys(hash).reduce(function(copy, key){
	            copy[key] = hash[key];
	            return copy;
	        }, target);
	    }

	    function sameBorder(a, b) {
	        return a.size === b.size && a.color === b.color;
	    }

	    function sum(a, b) {
	        return a + b;
	    }

	    function orlast(a, i) {
	        return i < a.length ? a[i] : a[a.length - 1];
	    }

	    function shouldDrawCell(cell) {
	        return cell.value != null
	            || cell.merged
	            || cell.background != null
	            || cell.borderRight != null
	            || cell.borderBottom != null
	            || (cell.validation != null && !cell.validation.value)
	            || (cell.drawings && cell.drawings.length);
	    }

	    function orderCells(a, b) {
	        if (a.top < b.top) {
	            return -1;
	        } else if (a.top == b.top) {
	            if (a.left < b.left) {
	                return -1;
	            } else if (a.left == b.left) {
	                return 0;
	            } else {
	                return 1;
	            }
	        } else {
	            return 1;
	        }
	    }

	    function orderCoords(a, b) {
	        return a < b ? -1 : a > b ? 1 : 0;
	    }

	    function drawLayout(sheet, layout, group, options) {
	        // options:
	        // - pageWidth
	        // - pageHeight
	        // - fitWidth
	        // - hCenter
	        // - vCenter
	        var ncols = Math.ceil(layout.width / options.pageWidth);
	        var nrows = Math.ceil(layout.height / options.pageHeight);
	        var pageWidth = Math.ceil(options.pageWidth / layout.scale);
	        var pageHeight = Math.ceil(options.pageHeight / layout.scale);

	        for (var j = 0; j < nrows; ++j) {
	            for (var i = 0; i < ncols; ++i) {
	                addPage(j, i);
	            }
	        }

	        function addPage(row, col) {
	            var left = col * pageWidth;
	            var right = left + pageWidth;
	            var top = row * pageHeight;
	            var bottom = top + pageHeight;
	            var endbottom = 0, endright = 0;

	            function isInside(box) {
	                if (box.right <= left || box.left >= right ||
	                    box.bottom <= top || box.top >= bottom) {
	                    return false;
	                }
	                endbottom = Math.max(box.bottom, endbottom);
	                endright = Math.max(box.right, endright);
	                return true;
	            }

	            // XXX: this can be optimized - discard cells that won't
	            // be used again, and don't walk cells that stand no
	            // chance to fit.
	            var cells = layout.cells.filter(isInside);

	            var drawings = layout.drawings.filter(function(d){
	                return isInside(d.box);
	            });

	            // merged cells might stretch beyond page; limit to that
	            endbottom = Math.min(endbottom, bottom);
	            endright = Math.min(endright, right);

	            if (cells.length || drawings.length) {
	                var page = new kdrw.Group();
	                group.append(page);
	                // page.clip(drawing.Path.fromRect(
	                //     new geo.Rect([ 0, 0 ],
	                //                  [ options.pageWidth, options.pageHeight ])));

	                var content = new kdrw.Group();
	                page.append(content);

	                content.clip(kdrw.Path.fromRect(
	                    new geo.Rect([ left - 1, top - 1 ], [ endright + 1, endbottom + 1 ])
	                ));

	                var matrix = geo.Matrix.scale(layout.scale, layout.scale)
	                    .multiplyCopy(geo.Matrix.translate(-left, -top));

	                if (options.hCenter || options.vCenter) {
	                    matrix = matrix.multiplyCopy(
	                        geo.Matrix.translate(
	                            options.hCenter ? (right - endright) / 2 : 0,
	                            options.vCenter ? (bottom - endbottom) / 2 : 0)
	                    );
	                }

	                content.transform(matrix);

	                if (options.guidelines) {
	                    var prev = null;
	                    layout.xCoords.forEach(function(x){
	                        x = Math.min(x, endright);
	                        if (x !== prev && x >= left && x <= right) {
	                            prev = x;
	                            content.append(
	                                new kdrw.Path()
	                                    .moveTo(x, top)
	                                    .lineTo(x, endbottom)
	                                    .close()
	                                    .stroke(options.guideColor, GUIDELINE_WIDTH)
	                            );
	                        }
	                    });
	                    var prev = null;
	                    layout.yCoords.forEach(function(y){
	                        y = Math.min(y, endbottom);
	                        if (y !== prev && y >= top && y <= bottom) {
	                            prev = y;
	                            content.append(
	                                new kdrw.Path()
	                                    .moveTo(left, y)
	                                    .lineTo(endright, y)
	                                    .close()
	                                    .stroke(options.guideColor, GUIDELINE_WIDTH)
	                            );
	                        }
	                    });
	                }

	                var borders = Borders(); // jshint ignore: line
	                cells.forEach(function(cell){
	                    drawCell(cell, content, options);
	                    borders.add(cell, sheet);
	                });

	                var bordersGroup = new kdrw.Group();
	                borders.vert.forEach(function(a){
	                    a.forEach(function(b){
	                        if (!b.rendered) {
	                            b.rendered = true;
	                            bordersGroup.append(
	                                new kdrw.Path()
	                                    .moveTo(b.x, b.top)
	                                    .lineTo(b.x, b.bottom)
	                                    .close()
	                                    .stroke(b.color, b.size)
	                            );
	                        }
	                    });
	                });
	                borders.horiz.forEach(function(a){
	                    a.forEach(function(b){
	                        if (!b.rendered) {
	                            b.rendered = true;
	                            bordersGroup.append(
	                                new kdrw.Path()
	                                    .moveTo(b.left, b.y)
	                                    .lineTo(b.right, b.y)
	                                    .close()
	                                    .stroke(b.color, b.size)
	                            );
	                        }
	                    });
	                });
	                content.append(bordersGroup);

	                drawings.forEach(function(d){
	                    var drawing = d.drawing;
	                    var image = drawing.image;
	                    if (image != null) {
	                        var box = d.box;
	                        var url = sheet._workbook.imageUrl(image);
	                        content.append(
	                            new kdrw.Image(url, new geo.Rect(
	                                [ box.left, box.top ],
	                                [ box.width, box.height ]
	                            )).opacity(drawing.opacity)
	                        );
	                    }
	                });
	            }
	        }
	    }

	    function drawCell(cell, content, options) {
	        var g = new kdrw.Group();
	        content.append(g);
	        var rect = new geo.Rect([ cell.left, cell.top ],
	                                [ cell.width, cell.height ]);
	        if (cell.background || cell.merged) {
	            var r2d2 = rect;
	            if (options.guidelines) {
	                r2d2 = rect.clone();
	                r2d2.origin.x += GUIDELINE_WIDTH/2 + 0.1;
	                r2d2.origin.y += GUIDELINE_WIDTH/2 + 0.1;
	                r2d2.size.width -= GUIDELINE_WIDTH + 0.2;
	                r2d2.size.height -= GUIDELINE_WIDTH + 0.2;
	            }
	            g.append(
	                new kdrw.Rect(r2d2)
	                    .fill(cell.background || "#fff")
	                    .stroke(null)
	            );
	        }
	        var val = cell.value;
	        if (val != null) {
	            var type = typeof val == "number" ? "number" : null;
	            var clip = new kdrw.Group();
	            clip.clip(kdrw.Path.fromRect(rect));
	            g.append(clip);
	            var f, format = cell.format;
	            if (!format && type == "number" && val != Math.floor(val)) {
	                format = "0.##############";
	            }
	            if (format) {
	                f = formatting.textAndColor(val, format);
	                val = f.text;
	                if (f.type) {
	                    type = f.type;
	                }
	            } else {
	                val += "";
	            }
	            if (!cell.textAlign) {
	                switch (type) {
	                  case "number":
	                  case "date":
	                  case "percent":
	                  case "currency":
	                    cell.textAlign = "right";
	                    break;
	                  case "boolean":
	                    cell.textAlign = "center";
	                    break;
	                }
	            }
	            drawText(val, (f && f.color) || cell.color || "#000", cell, clip);
	        }
	    }

	    function applyIndent(cell, style) {
	        if (cell.indent) {
	            // OOXML spec states the indent is "An integer value,
	            // where an increment of 1 represents 3 spaces".  This, of
	            // course, bears no resemblance to what Excel actually
	            // does, so we need magic numbers here.
	            var indent = 1.4 * cell.indent;
	            switch (style.textAlign) {
	              case null:
	              case "left":
	                style.paddingLeft = indent + "ch";
	                break;
	              case "right":
	                style.paddingRight = indent + "ch";
	                break;
	              case "center":
	                style.paddingLeft = indent/2 + "ch";
	                style.paddingRight = indent/2 + "ch";
	                break;
	            }
	        }
	    }

	    var CONT;
	    function drawText(text, color, cell, group) {
	        if (!CONT) {
	            CONT = document.createElement("div");
	            CONT.style.position = "fixed";
	            CONT.style.left = "0px";
	            CONT.style.top = "0px";
	            CONT.style.visibility = "hidden";
	            CONT.style.overflow = "hidden";
	            CONT.style.boxSizing = "border-box";
	            CONT.style.lineHeight = "normal";
	            document.body.appendChild(CONT);
	        }

	        if (CONT.firstChild) {
	            CONT.removeChild(CONT.firstChild);
	        }

	        CONT.style.padding = "2px 4px";
	        CONT.style.color = color;
	        CONT.style.font = makeFontDef(cell);
	        CONT.style.width = cell.width + "px";
	        CONT.style.textAlign = cell.textAlign || "left";
	        CONT.style.textDecoration = cell.underline ? "underline" : "none";

	        applyIndent(cell, CONT.style);

	        if (cell.wrap) {
	            CONT.style.whiteSpace = "pre-wrap";
	            CONT.style.overflowWrap = CONT.style.wordWrap = "break-word";
	        } else {
	            CONT.style.whiteSpace = "pre";
	            CONT.style.overflowWrap = CONT.style.wordWrap = "normal";
	        }

	        CONT.appendChild(document.createTextNode(text));

	        var vtrans = 0;
	        switch (cell.verticalAlign) {
	          case "center":
	            vtrans = (cell.height - CONT.offsetHeight) >> 1;
	            break;

	          case undefined:
	          case null:
	          case "bottom":
	            vtrans = (cell.height - CONT.offsetHeight);
	            break;
	        }
	        if (vtrans < 0) { vtrans = 0; }

	        var text_group  = kendo.drawing.drawDOM.drawText(CONT);
	        text_group.transform(geo.Matrix.translate(cell.left, cell.top + vtrans));
	        group.append(text_group);
	    }

	    function makeFontDef(cell) {
	        var font = [];
	        if (cell.italic) {
	            font.push("italic");
	        }
	        if (cell.bold) {
	            font.push("bold");
	        }
	        font.push((cell.fontSize || 12) + "px");
	        font.push((cell.fontFamily || "Arial"));
	        return font.join(" ");
	    }

	    function draw(sheet, range, options, callback) {
	        if (options == null && callback == null) {
	            callback = range;
	            options = {};
	            range = spreadsheet.SHEETREF;
	        }
	        if (callback == null) {
	            callback = options;
	            if (range instanceof spreadsheet.Range
	                || range instanceof spreadsheet.Ref
	                || typeof range == "string") {
	                options = {};
	            } else {
	                options = range;
	                range = spreadsheet.SHEETREF;
	            }
	        }
	        options = kendo.jQuery.extend({
	            paperSize  : "A4",
	            landscape  : true,
	            margin     : "1cm",
	            guidelines : true,
	            guideColor : "#aaa",
	            emptyCells : true,
	            fitWidth   : false,
	            center     : false,
	            headerRows : null,
	            maxEmpty   : 0.2,
	            scale      : 1
	        }, options);
	        var group = new kdrw.Group();
	        var paper = kendo.pdf.getPaperOptions(options);
	        group.options.set("pdf", {
	            author    : options.author,
	            creator   : options.creator,
	            date      : options.date,
	            keywords  : options.keywords,
	            margin    : paper.margin,
	            multiPage : true,
	            paperSize : paper.paperSize,
	            subject   : options.subject,
	            title     : options.title,
	            autoPrint : options.autoPrint
	        });
	        var pageWidth = paper.paperSize[0];
	        var pageHeight = paper.paperSize[1];
	        if (paper.margin) {
	            pageWidth -= paper.margin.left + paper.margin.right + 1;
	            pageHeight -= paper.margin.top + paper.margin.bottom + 1;
	        }
	        options.pageWidth = pageWidth;
	        options.pageHeight = pageHeight;
	        var layout = doLayout(sheet, sheet._ref(range), options);
	        drawLayout(sheet, layout, group, options);
	        callback(group);
	    }

	    spreadsheet.Sheet.prototype.draw = function(range, options, callback) {
	        var sheet = this;
	        if (sheet._workbook) {
	            sheet.recalc(sheet._workbook._context, function(){
	                draw(sheet, range, options, callback);
	            });
	        } else {
	            draw(sheet, range, options, callback);
	        }
	    };

	    // Hack: since we index the border arrays by relative row/col we
	    // could end up with negative indexes, i.e. horiz[-2] = border.
	    // Array forEach will ignore these, so we provide a simple
	    // container here (outside code only needs forEach at this time).
	    function Container() {}
	    Container.prototype = {
	        forEach: function(f) {
	            Object.keys(this).forEach(function(key){
	                f(this[key], key, this);
	            }, this);
	        }
	    };

	    function Borders() {
	        var horiz = new Container();
	        var vert = new Container();
	        function add(cell, sheet) {
	            if (sheet) {
	                // reset borders here; the propertybag doesn't keep track of merged cells :-/ this
	                // is ugly, but the inner details of data storage have leaked everywhere anyway.
	                var pb = sheet._properties;
	                var grid = sheet._grid;
	                cell.borderLeft    = pb.get("vBorders", grid.index(cell.row, cell.col));
	                cell.borderRight   = pb.get("vBorders", grid.index(cell.row, cell.col + cell.colspan));
	                cell.borderTop     = pb.get("hBorders", grid.index(cell.row, cell.col));
	                cell.borderBottom  = pb.get("hBorders", grid.index(cell.row + cell.rowspan, cell.col));
	            }
	            if (cell.borderLeft) {
	                addVert(cell.row, cell.col, cell.borderLeft,
	                        cell.left, cell.top, cell.bottom);
	            }
	            if (cell.borderRight) {
	                addVert(cell.row, cell.col + cell.colspan, cell.borderRight,
	                        cell.right, cell.top, cell.bottom);
	            }
	            if (cell.borderTop) {
	                addHoriz(cell.row, cell.col, cell.borderTop,
	                         cell.top, cell.left, cell.right);
	            }
	            if (cell.borderBottom) {
	                addHoriz(cell.row + cell.rowspan, cell.col, cell.borderBottom,
	                         cell.bottom, cell.left, cell.right);
	            }
	        }
	        function addVert(row, col, border, x, top, bottom) {
	            var a = vert[col] || (vert[col] = new Container());
	            var prev = row > 0 && a[row - 1];
	            if (prev && sameBorder(prev, border)) {
	                a[row] = prev;
	                prev.bottom = bottom;
	            } else {
	                a[row] = {
	                    size: border.size,
	                    color: border.color,
	                    x: x,
	                    top: top,
	                    bottom: bottom
	                };
	            }
	        }
	        function addHoriz(row, col, border, y, left, right) {
	            var a = horiz[row] || (horiz[row] = new Container());
	            var prev = col > 0 && a[col - 1];
	            if (prev && sameBorder(prev, border)) {
	                a[col] = prev;
	                prev.right = right;
	            } else {
	                a[col] = {
	                    size: border.size,
	                    color: border.color,
	                    y: y,
	                    left: left,
	                    right: right
	                };
	            }
	        }
	        return { add: add, horiz: horiz, vert: vert };
	    }

	    function drawTabularData(options) {
	        var progress = new $.Deferred();
	        var promise = progress.promise();

	        options = clone(options, {
	            dataSource       : null,
	            guidelines       : true,
	            guideColor       : "#000",
	            columns          : null,
	            headerBackground : "#999",
	            headerColor      : "#000",
	            oddBackground    : null,
	            evenBackground   : null,
	            fontFamily       : "Arial",
	            fontSize         : 12,
	            paperSize        : "A4",
	            margin           : "1cm",
	            landscape        : true,
	            fitWidth         : false,
	            scale            : 1,
	            rowHeight        : 20,
	            maxEmpty         : 1,
	            useGridFormat    : true
	        });

	        // retrieve fonts; custom fonts should be already loaded
	        kendo.drawing.pdf.defineFont(
	            kendo.drawing.drawDOM.getFontFaces(document)
	        );

	        var charWidth = charWidthFunction(options.fontFamily, options.fontSize);

	        function textWidth(value) {
	            if (value != null) {
	                var width = 12;         // magic numbers :-/
	                for (var i = value.length; --i >= 0;) {
	                    width += charWidth(value.charAt(i));
	                }
	                return width;
	            }
	            return 0;
	        }

	        var border = options.guidelines ? { size: 1, color: options.guideColor } : null;

	        function mkCell(data) {
	            if (!border) {
	                return data;
	            }
	            return clone(data, {
	                borderLeft: border,
	                borderTop: border,
	                borderRight: border,
	                borderBottom: border
	            });
	        }

	        options.dataSource.fetch(function(){
	            var data = options.dataSource.data();
	            if (!data.length) {
	                return progress.reject("Empty dataset");
	            }

	            // this really must be present
	            var columns = options.columns.map(function(col){
	                if (typeof col == "string") {
	                    return { title: col, field: col };
	                } else {
	                    return col;
	                }
	            });
	            var columnTitles = columns.map(function(col){
	                return col.title || col.field;
	            });
	            var columnWidths = columnTitles.map(textWidth);

	            // prepare data for a Sheet object's fromJSON method
	            var rows = data.map(function(row, rowIndex){
	                return {
	                    cells: columns.map(function(col, colIndex){
	                        var value = row[col.field];

	                        // NOTE: value might not be string.  I added option useGridFormat (default
	                        // true), which will use a column's format, if present, to convert the value
	                        // to a string, so that we can measure the width right now.
	                        if (options.useGridFormat) {
	                            if (value != null) {
	                                if (col.format) {
	                                    value = kendo.format(col.format, value);
	                                } else {
	                                    value += "";
	                                }
	                            }
	                            // adjust the column widths while we're at it
	                            columnWidths[colIndex] = Math.max(
	                                textWidth(value),
	                                columnWidths[colIndex]
	                            );
	                        }

	                        // if options.useGridFormat is false and col.format is present, pass it over
	                        // to the spreadsheet.  In that case we should calculate the widths after
	                        // the spreadsheet is created (XXX to be implemented when someone needs it).
	                        return mkCell({
	                            value: value,
	                            format: options.useGridFormat ? null : col.format,
	                            background: rowIndex % 2 ? options.evenBackground : options.oddBackground
	                        });
	                    })
	                };
	            });

	            // insert header line
	            rows.unshift({
	                cells: columnTitles.map(function(label){
	                    return mkCell({
	                        value: label,
	                        background: options.headerBackground,
	                        color: options.headerColor
	                    });
	                })
	            });

	            // init a Sheet object.  Note that we have to add one
	            // extra-row and column, because the very last ones can't
	            // have right/bottom borders (known limitation).
	            var sheet = new kendo.spreadsheet.Sheet(
	                rows.length + 1,        // rows
	                columns.length + 1,     // columns
	                options.rowHeight,      // row height
	                50,                     // column width
	                20,                     // header height
	                20,                     // header width,
	                {                       // default cell style
	                    fontFamily: options.fontFamily,
	                    fontSize: options.fontSize,
	                    verticalAlign: "center"
	                }
	            );

	            // load data
	            sheet.fromJSON({
	                name: "Sheet1",
	                rows: rows,
	                columns: columnWidths.map(function(w, i){
	                    return { index: i, width: w };
	                })
	            });

	            sheet.draw({
	                paperSize  : options.paperSize,
	                landscape  : options.landscape,
	                margin     : options.margin,
	                guidelines : false, // using borders instead (better contrast)
	                scale      : options.scale,
	                fitWidth   : options.fitWidth,
	                maxEmpty   : options.maxEmpty,
	                headerRows : 1
	            }, progress.resolve.bind(progress));
	        });

	        return promise;
	    }

	    var CACHE_CHAR_WIDTH = {};

	    var charWidthFunction = function(fontFamily, fontSize) {
	        var id = fontSize + ":" + fontFamily;
	        var func = CACHE_CHAR_WIDTH[id];
	        if (!func) {
	            var span, div = document.createElement("div");
	            div.style.position = "fixed";
	            div.style.left = "-10000px";
	            div.style.top = "-10000px";
	            div.style.fontFamily = fontFamily;
	            div.style.fontSize = fontSize + "px";
	            div.style.whiteSpace = "pre";
	            for (var i = 32; i < 128; ++i) {
	                span = document.createElement("span");
	                span.appendChild(document.createTextNode(String.fromCharCode(i)));
	                div.appendChild(span);
	            }
	            document.body.appendChild(div);
	            var widths = {};
	            for (i = 32, span = div.firstChild; i < 128 && span; ++i, span = span.nextSibling) {
	                widths[i] = span.offsetWidth;
	            }
	            while ((span = div.firstChild)) {
	                div.removeChild(span);
	            }
	            func = CACHE_CHAR_WIDTH[id] = function(ch) {
	                var code = ch.charCodeAt(0);
	                var width = widths[code];
	                if (width == null) {
	                    // probably not an ASCII character, let's cache its width as well
	                    span = document.createElement("span");
	                    span.appendChild(document.createTextNode(String.fromCharCode(code)));
	                    div.appendChild(span);
	                    width = widths[code] = span.offsetWidth;
	                    div.removeChild(span);
	                }
	                return width;
	            };
	        }
	        return func;
	    };

	    spreadsheet.draw = {
	        Borders         : Borders,
	        doLayout        : doLayout,
	        applyIndent     : applyIndent
	    };

	    spreadsheet.drawTabularData = drawTabularData;

	}, __webpack_require__(3));


/***/ }),

/***/ 1684:
/***/ (function(module, exports) {

	module.exports = require("../kendo.pdf");

/***/ }),

/***/ 1685:
/***/ (function(module, exports) {

	module.exports = require("./numformat");

/***/ })

/******/ });