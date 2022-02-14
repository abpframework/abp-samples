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

	__webpack_require__(1658);
	module.exports = __webpack_require__(1658);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {
	    'use strict';

	    var $ = kendo.jQuery;
	    var alphaNumRegExp = /:alphanum$/;

	    var ACTIONS = {
	        "up": "up",
	        "down": "down",
	        "left": "left",
	        "right": "right",
	        "home": "first-col",
	        "end": "last-col",
	        "ctrl+left": "word-left",
	        "ctrl+right": "word-right",
	        "ctrl+up": "word-up",
	        "ctrl+down": "word-down",
	        "ctrl+home": "first",
	        "ctrl+end": "last",
	        "pageup": "prev-page",
	        "pagedown": "next-page"
	    };

	    var ENTRY_ACTIONS = {
	        "tab": "next",
	        "shift+tab": "previous",
	        "enter": "lower",
	        "shift+enter": "upper",
	        "delete": "clearContents",
	        "backspace": "clearContents",
	        "shift+:alphanum": "edit",
	        "alt+:alphanum": "edit",
	        ":alphanum": "edit",
	        "ctrl+:alphanum": "ctrl",
	        "alt+ctrl+:alphanum": "edit",
	        ":edit": "edit"
	    };

	    var CONTAINER_EVENTS = {
	        "wheel": "onWheel",
	        "*+mousedown": "onMouseDown",
	        "contextmenu": "onContextMenu",
	        "*+mousedrag": "onMouseDrag",
	        "*+mouseup": "onMouseUp",
	        "*+dblclick": "onDblClick",
	        "mousemove": "onMouseMove"
	    };

	    var CLIPBOARD_EVENTS = {
	        "pageup": "onPageUp",
	        "pagedown": "onPageDown",
	        "mouseup": "onMouseUp",
	        "*+cut": "onCut",
	        "*+paste": "onPaste",
	        "*+copy": "onCopy"
	    };

	    var EDITOR_EVENTS = {
	        "esc": "onEditorEsc",
	        "enter": "onEditorBlur",
	        "alt+enter": "insertNewline",
	        "shift+enter": "onEditorBlur",
	        "tab": "onEditorBlur",
	        "shift+tab": "onEditorBlur",
	        "shift+ctrl+enter": "onEditorArrayFormula"
	    };

	    var FORMULABAR_EVENTS = $.extend({ focus: "onEditorBarFocus" }, EDITOR_EVENTS);
	    var FORMULAINPUT_EVENTS = $.extend({ focus: "onEditorCellFocus" }, EDITOR_EVENTS);

	    var SELECTION_MODES = {
	       cell: "range",
	       rowheader: "row",
	       columnheader: "column",
	       topcorner: "sheet",
	       autofill: "autofill"
	    };

	    function toActionSelector(selectors) {
	        return selectors.map(function(action) {
	            return '[data-action="' + action + '"]';
	        }).join(",");
	    }

	    var COMPOSITE_UNAVAILABLE_ACTION_SELECTORS = toActionSelector([ 'cut', 'copy', 'paste', 'insert-left', 'insert-right', 'insert-above', 'insert-below' ]);
	    var UNHIDE_ACTION_SELECTORS = toActionSelector([ 'unhide-row', 'unhide-column' ]);

	    var ACTION_KEYS = [];
	    var SHIFT_ACTION_KEYS = [];
	    var ENTRY_ACTION_KEYS = [];

	    for (var key in ACTIONS) {
	        ACTION_KEYS.push(key);
	        SHIFT_ACTION_KEYS.push("shift+" + key);
	    }

	    for (key in ENTRY_ACTIONS) {
	        ENTRY_ACTION_KEYS.push(key);
	    }

	    CLIPBOARD_EVENTS[ACTION_KEYS] = "onAction";
	    CLIPBOARD_EVENTS[SHIFT_ACTION_KEYS] = "onShiftAction";
	    CLIPBOARD_EVENTS[ENTRY_ACTION_KEYS] = "onEntryAction";

	    FORMULAINPUT_EVENTS[ACTION_KEYS] = "onEditorAction";
	    FORMULAINPUT_EVENTS[SHIFT_ACTION_KEYS] = "onEditorShiftAction";

	    var Controller = kendo.Class.extend({
	        init: function(view, workbook) {
	            this.view = view;
	            this.workbook(workbook);
	            this.container = $(view.container);
	            this.clipboardElement = $(view.clipboard);
	            this.cellContextMenu = view.cellContextMenu;
	            this.rowHeaderContextMenu = view.rowHeaderContextMenu;
	            this.colHeaderContextMenu = view.colHeaderContextMenu;
	            this.drawingContextMenu = view.drawingContextMenu;
	            this.scroller = view.scroller;
	            this.tabstrip = view.tabstrip;
	            this.sheetsbar = view.sheetsbar;

	            view.nameEditor.bind("enter", this.onNameEditorEnter.bind(this));
	            view.nameEditor.bind("cancel", this.onNameEditorCancel.bind(this));
	            view.nameEditor.bind("select", this.onNameEditorSelect.bind(this));
	            view.nameEditor.bind("delete", this.onNameEditorDelete.bind(this));

	            this.editor = view.editor;
	            this.editor.bind("change", this.onEditorChange.bind(this));
	            this.editor.bind("activate", this.onEditorActivate.bind(this));
	            this.editor.bind("deactivate", this.onEditorDeactivate.bind(this));
	            this.editor.bind("update", this.onEditorUpdate.bind(this));

	            $(view.scroller).on("scroll", this.onScroll.bind(this));
	            this.listener = new kendo.spreadsheet.EventListener(this.container, this, CONTAINER_EVENTS);
	            $(view.scroller).on("mousedown", this.onMouseDown.bind(this));

	            this._enableEditorEvents();

	            if (this.sheetsbar) {
	                this.sheetsbar.bind("select", this.onSheetBarSelect.bind(this));
	                this.sheetsbar.bind("reorder", this.onSheetBarReorder.bind(this));
	                this.sheetsbar.bind("rename", this.onSheetBarRename.bind(this));
	                this.sheetsbar.bind("remove", this.onSheetBarRemove.bind(this));
	            }

	            this.cellContextMenu.bind("select", this.onContextMenuSelect.bind(this));
	            this.rowHeaderContextMenu.bind("select", this.onContextMenuSelect.bind(this));
	            this.colHeaderContextMenu.bind("select", this.onContextMenuSelect.bind(this));
	            this.drawingContextMenu.bind("select", this.onContextMenuSelect.bind(this));

	            // this is necessary for Windows to catch prevent context menu correctly
	            this.cellContextMenu.element
	                .add(this.rowHeaderContextMenu.element)
	                .add(this.colHeaderContextMenu.element)
	                .add(this.drawingContextMenu.element)
	                .on("contextmenu", false);

	            if (this.tabstrip) {
	                this.tabstrip.bind("action", this.onCommandRequest.bind(this));
	                this.tabstrip.bind("dialog", this.onDialogRequest.bind(this));
	            }
	        },

	        _enableEditorEvents: function (enable) {
	            if (enable === undefined || enable) {
	                this.keyListener = new kendo.spreadsheet.EventListener(this.clipboardElement, this, CLIPBOARD_EVENTS);
	                this.barKeyListener = new kendo.spreadsheet.EventListener(this.editor.barElement(), this, FORMULABAR_EVENTS);
	                this.inputKeyListener = new kendo.spreadsheet.EventListener(this.editor.cellElement(), this, FORMULAINPUT_EVENTS);
	            } else {
	                this.keyListener.destroy();
	                this.barKeyListener.destroy();
	                this.inputKeyListener.destroy();
	            }
	        },

	        _execute: function(options) {
	            var result = this._workbook.execute(options);

	            if (options.command === "EditCommand" && !result) {
	                this._workbook.trigger("change", { editorClose: true });
	            }

	            if (result) {
	                this._preventNavigation = true;
	                if (result.reason === "error") {
	                    this.editor.deactivate(true); // make sure we don't call any change hooks
	                    this.view.showError(result, function(){
	                        // we only get here in case of a validation error when the user decided to retry.
	                        this.activateEditor(false);
	                        // reset to last input from user
	                        this.editor.value(this._lastEditorValue);
	                        // however, set _value manually such that it'll detect change properly.  ugly :-\
	                        this.editor._value = this._workbook._inputForRef(this._workbook.activeSheet()._viewActiveCell());
	                        // seems like a nice UX to have the whole input selected
	                        this.editor.select();
	                    }.bind(this));
	                } else {
	                    this.view.openDialog(result.reason);
	                }
	            }

	            return result;
	        },

	        _activeTooltip: function() {
	            return this._workbook.activeSheet().activeCell().simplify().toString();
	        },

	        onContextMenuSelect: function(e) {
	            var action = $(e.item).data("action");
	            var command;
	            switch(action) {
	              case "cut":
	                command = { command: "ToolbarCutCommand", options: { workbook: this._workbook } };
	                break;
	              case "copy":
	                command = { command: "ToolbarCopyCommand", options: { workbook: this._workbook } };
	                break;
	              case "paste":
	                command = { command: "ToolbarPasteCommand", options: { workbook: this._workbook } };
	                break;
	              case "delete-drawing":
	                command = { command: "DeleteDrawingCommand", options: { drawing: this.navigator._sheet._activeDrawing } };
	                break;
	              case "bring-to-front":
	                command = { command: "BringToFrontCommand", options: { drawing: this.navigator._sheet._activeDrawing } };
	                break;
	              case "send-to-back":
	                command = { command: "SendToBackCommand", options: { drawing: this.navigator._sheet._activeDrawing } };
	                break;
	              case "unmerge":
	                command = { command: "MergeCellCommand", options: { value: "unmerge" } };
	                break;
	              case "merge":
	                this.view.openDialog("merge");
	                break;
	              case "hide-row":
	                command = { command: "HideLineCommand", options: { axis: "row" } };
	                break;
	              case "hide-column":
	                command = { command: "HideLineCommand", options: { axis: "column" } };
	                break;
	              case "unhide-row":
	                command = { command: "UnHideLineCommand", options: { axis: "row" } };
	                break;
	              case "unhide-column":
	                command = { command: "UnHideLineCommand", options: { axis: "column" } };
	                break;
	              case "delete-row":
	                command = { command: "DeleteRowCommand" };
	                break;
	              case "delete-column":
	                command = { command: "DeleteColumnCommand" };
	                break;
	            }

	            if (command) {
	                this._execute(command);
	            }
	        },

	        onSheetBarRemove: function(e) {
	            var sheet = this._workbook.sheetByName(e.name);

	            //TODO: move to model!
	            if (!sheet) {
	                return;
	            }

	            this._workbook.removeSheet(sheet);
	        },

	        destroy: function() {
	            this.listener.destroy();
	            this._enableEditorEvents(false);
	            this.keyListener.destroy();
	            this.inputKeyListener.destroy();
	        },

	        onSheetBarSelect: function(e) {
	            var sheet;
	            var workbook = this._workbook;

	            if (e.isAddButton) {
	                if (this._workbook.trigger("insertSheet")) {
	                    return;
	                }

	                sheet = workbook.insertSheet();
	            } else {
	                sheet = workbook.sheetByName(e.name);
	            }

	            //TODO: move to model
	            if (workbook.activeSheet().name() !== sheet.name()) {
	                if (this._workbook.trigger("selectSheet", { sheet: sheet })) {
	                    return;
	                }

	                if (!this.editor.canInsertRef(false)) {
	                    this.editor.deactivate();
	                }

	                workbook.activeSheet(sheet);
	            }
	        },

	        onSheetBarReorder: function(e) {
	            var workbook = this._workbook;
	            var sheet = workbook.sheetByIndex(e.oldIndex);
	            var activeSheet = workbook.activeSheet();
	            var activeSheetName = activeSheet.name();

	            workbook.moveSheetToIndex(sheet, e.newIndex);

	            if (activeSheetName !== sheet.name()) {
	                if (workbook.trigger("selectSheet", { sheet: sheet })) {
	                    workbook.activeSheet(activeSheet);
	                    return;
	                }

	                if (!this.editor.canInsertRef(false)) {
	                    this.editor.deactivate();
	                }

	                workbook.activeSheet(sheet);
	            }
	        },

	        onSheetBarRename: function(e) {
	            var sheet = this._workbook.sheetByIndex(e.sheetIndex);

	            if (this._workbook.sheetByName(e.name)) {
	                this.view.showError({ reason: "error", type: "duplicateSheetName" });
	                return;
	            }

	            this._workbook.renameSheet(sheet, e.name);

	            this.clipboardElement.focus();
	        },

	        sheet: function(sheet) {
	            this.navigator = sheet.navigator();
	            this.axisManager = sheet.axisManager();
	        },

	        workbook: function(workbook) {
	            this._workbook = workbook;
	            this.clipboard = workbook.clipboard();
	            workbook.bind("commandRequest", this.onCommandRequest.bind(this));
	        },

	        refresh: function() {
	            var editor = this.editor;
	            var workbook = this._workbook;
	            var sheet = workbook.activeSheet();

	            this._viewPortHeight = this.view.scroller.clientHeight;
	            this.navigator.height(this._viewPortHeight);

	            if (!editor.isActive() && !this.isEditorDisabled) {
	                editor.enable(sheet.selection().enable() !== false);
	                this.resetEditorValue();
	            }

	            var ref = sheet.selection()._ref.simplify();
	            var def = this._workbook.nameForRef(ref, sheet.name());
	            this.view.nameEditor.value(def.name);
	        },

	        onScroll: function() {
	            this.view.render({ scroll: true });
	        },

	        onWheel: function(event) {
	            var deltaX = event.originalEvent.deltaX;
	            var deltaY = event.originalEvent.deltaY;

	            if (event.originalEvent.deltaMode === 1) {
	                deltaX *= 10;
	                deltaY *= 10;
	            }

	            this.scrollWith(deltaX, deltaY);

	            event.preventDefault();
	        },

	        onAction: function(event, action) {
	            var sheet = this._workbook.activeSheet();
	            sheet._activeDrawing = null;
	            this.navigator.moveActiveCell(ACTIONS[action]);
	            event.preventDefault();
	        },

	        onPageUp: function() {
	            this.scrollDown(-this._viewPortHeight);
	        },

	        onPageDown: function() {
	            this.scrollDown(this._viewPortHeight);
	        },

	        onEntryAction: function(event, action) {
	            var sheet = this._workbook.activeSheet();

	            if (event.mod) {
	                var key = String.fromCharCode(event.keyCode);
	                var shouldPrevent = true;

	                switch(key) {
	                  case "A":
	                    sheet._activeDrawing = null;
	                    this.navigator.selectAll();
	                    break;
	                  case "Y":
	                    this._workbook.undoRedoStack.redo();
	                    break;
	                  case "Z":
	                    this._workbook.undoRedoStack.undo();
	                    break;
	                  default:
	                    shouldPrevent = false;
	                    break;
	                }
	                if (shouldPrevent) {
	                    event.preventDefault();
	                }
	            } else {
	                var disabled = sheet.selection().enable() === false;
	                var casual = action !== ":edit";

	                if (action == "delete" || action == "backspace") {
	                    if (sheet._activeDrawing) {
	                        this._execute({
	                            command: "DeleteDrawingCommand",
	                            options: { drawing: sheet._activeDrawing }
	                        });
	                    } else if (!disabled) {
	                        this._execute({ command: "ClearContentCommand" });
	                    }
	                    event.preventDefault();
	                } else if (alphaNumRegExp.test(action) || !casual) {
	                    sheet._activeDrawing = null;
	                    if (disabled) {
	                        event.preventDefault();
	                        return;
	                    }
	                    if (casual) {
	                        this.editor.value("");
	                    }
	                    this.activateEditor(casual);
	                } else {
	                    this.navigator.navigateInSelection(ENTRY_ACTIONS[action]);
	                    event.preventDefault();
	                }
	            }
	        },

	        onShiftAction: function(event, action) {
	            this.navigator.modifySelection(ACTIONS[action.replace("shift+", "")], this.appendSelection);
	            event.preventDefault();
	        },

	        onMouseMove: function(event) {
	            var sheet = this._workbook.activeSheet();

	            if (sheet.resizingInProgress() || sheet.selectionInProgress()) {
	                return;
	            }

	            var object = this.objectAt(event);
	            if (object.type === "columnresizehandle" || object.type === "rowresizehandle") {
	                sheet.positionResizeHandle(object.ref);
	            } else {
	                sheet.removeResizeHandle();
	            }

	            sheet._renderComment(object.type == "cell" ? object.ref : null);
	        },

	        onMouseDown: function(event) {
	            var object = this.objectAt(event);
	            if (object.pane) {
	                this.originFrame = object.pane;
	            }

	            if (this._startResizingDrawing(event, object)) {
	                event.stopPropagation();
	                return;
	            }

	            var sheet = this._workbook.activeSheet();
	            var win = this.container.closest('[' + kendo.attr("role") + '="window"]');
	            if (win.length) {
	                win = kendo.widgetInstance(win);
	                if (win && win.options.modal) {
	                    event.stopPropagation();
	                }
	            }

	            sheet._activeDrawing = null;
	            if (object.type === "drawing") {
	                sheet._activeDrawing = object.drawing;
	                object.copy = object.drawing.clone();
	                object.startBox = sheet.drawingBoundingBox(object.copy);
	                sheet.startDragging(object);
	                sheet.triggerChange({ dragging: true });
	                event.preventDefault();
	                return;
	            }

	            if (object.type === "editor") {
	                // XXX: canceling the edits, because they might not
	                // validate.  Not sure it's the Right Thing.
	                this.onEditorEsc();
	                this.openCustomEditor();
	                event.preventDefault();
	                return;
	            }

	            if (this.editor.canInsertRef(false) && object.ref) {
	                this._workbook.activeSheet()._setFormulaSelections(this.editor.highlightedRefs());
	                this.navigator.startSelection(object.ref, this._selectionMode, this.appendSelection, event.shiftKey, this.view);
	                event.preventDefault();
	                return;
	            } else {
	                this._preventNavigation = false;
	                this.editor.deactivate();
	                if (this._preventNavigation) {
	                    return;     // validation error
	                }
	            }

	            if (object.type === "columnresizehandle" || object.type === "rowresizehandle") {
	                sheet.startResizing({ x: object.x, y: object.y });
	                event.preventDefault();
	                return;
	            }

	            if (object.type === "filtericon") {
	                this.openFilterMenu(event);
	                event.preventDefault();
	                return;
	            }

	            this._selectionMode = SELECTION_MODES[object.type];
	            this.appendSelection = event.mod;
	            this.navigator.startSelection(object.ref, this._selectionMode, this.appendSelection, event.shiftKey, this.view);
	        },

	        _startResizingDrawing: function(event) {
	            var handle = $(event.target).closest(".k-spreadsheet-drawing-handle");
	            if (handle.length) {
	                var location = this.translateCoords(event);
	                var direction = handle.data("direction");
	                var sheet = this._workbook.activeSheet();
	                var drawing = sheet._activeDrawing;
	                sheet.startDragging({
	                    pane     : this.originFrame,
	                    drawing  : drawing,
	                    copy     : drawing.clone(),
	                    startBox : sheet.drawingBoundingBox(drawing),
	                    resize   : direction,
	                    //aspect   : drawing.width / drawing.height,
	                    startX   : location.x,
	                    startY   : location.y
	                });
	                return true;
	            }
	        },

	        onContextMenu: function(event) {
	            var sheet = this._workbook.activeSheet();

	            event.preventDefault();

	            if (sheet.resizingInProgress() || sheet.draggingInProgress()) {
	                return;
	            }

	            this.cellContextMenu.close();
	            this.colHeaderContextMenu.close();
	            this.rowHeaderContextMenu.close();
	            this.drawingContextMenu.close();

	            var menu;

	            var object = this.objectAt(event);

	            if (object.type === "columnresizehandle" || object.type === "rowresizehandle") {
	                return;
	            }

	            if (object.ref) {
	                this.navigator.selectForContextMenu(object.ref, SELECTION_MODES[object.type]);
	            } else if (object.type == "drawing") {
	                this.navigator.selectDrawingForContextMenu(object.drawing);
	            }

	            var isComposite = this.navigator._sheet.select() instanceof kendo.spreadsheet.UnionRef;
	            var showUnhide = false;
	            var showUnmerge = false;

	            if (object.type == "columnheader") {
	                menu = this.colHeaderContextMenu;
	                showUnhide = !isComposite && this.axisManager.selectionIncludesHiddenColumns();
	            } else if (object.type == "rowheader") {
	                menu = this.rowHeaderContextMenu;
	                showUnhide = !isComposite && this.axisManager.selectionIncludesHiddenRows();
	            } else if (object.type == "drawing") {
	                menu = this.drawingContextMenu;
	            } else {
	                menu = this.cellContextMenu;
	                showUnmerge = this.navigator.selectionIncludesMergedCells();
	            }

	            menu.element.find(COMPOSITE_UNAVAILABLE_ACTION_SELECTORS).toggle(!isComposite);
	            menu.element.find(UNHIDE_ACTION_SELECTORS).toggle(showUnhide);
	            menu.element.find('[data-action=unmerge]').toggle(showUnmerge);

	            // avoid the immediate close
	            setTimeout(function() {
	                menu.open(event.pageX, event.pageY);
	            });
	        },

	        prevent: function(event) {
	            event.preventDefault();
	        },

	        constrainResize: function(type, ref) {
	            var sheet = this._workbook.activeSheet();
	            var resizeHandle = sheet.resizeHandlePosition();

	            return !resizeHandle || type === "outside" || type === "topcorner" || ref.col < resizeHandle.col || ref.row < resizeHandle.row;
	        },

	        _dragDrawing: function(event) {
	            var sheet = this._workbook.activeSheet();
	            var drag = sheet.draggingInProgress();
	            if (!drag) {
	                return false;
	            }

	            var location = this.translateCoords(event);
	            var drawing = drag.drawing;
	            var deltaX = location.x - drag.startX;
	            var deltaY = location.y - drag.startY;

	            if (drag.resize == "SE") {
	                if (drag.aspect) {
	                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
	                        drawing.width = Math.max(drag.copy.width + deltaX, 20);
	                        drawing.height = drawing.width / drag.aspect;
	                    } else {
	                        drawing.height = Math.max(drag.copy.height + deltaY, 20);
	                        drawing.width = drawing.height * drag.aspect;
	                    }
	                } else {
	                    drawing.width = Math.max(drag.copy.width + deltaX, 20);
	                    drawing.height = Math.max(drag.copy.height + deltaY, 20);
	                }
	            }
	            else if (drag.resize == "E") {
	                drawing.width = Math.max(drag.copy.width + deltaX, 20);
	            }
	            else if (drag.resize == "S") {
	                drawing.height = Math.max(drag.copy.height + deltaY, 20);
	            }
	            else if (drag.resize == "N") {
	                if (drag.copy.height - deltaY > 20) {
	                    drawing.height = drag.copy.height - deltaY;
	                    drawing.offsetY = drag.copy.offsetY + deltaY;
	                }
	            }
	            else if (drag.resize == "W") {
	                if (drag.copy.width - deltaX > 20) {
	                    drawing.width = drag.copy.width - deltaX;
	                    drawing.offsetX = drag.copy.offsetX + deltaX;
	                }
	            }
	            else if (drag.resize == "NE") {
	                drawing.width = Math.max(drag.copy.width + deltaX, 20);
	                if (drag.copy.height - deltaY > 20) {
	                    drawing.height = drag.copy.height - deltaY;
	                    drawing.offsetY = drag.copy.offsetY + deltaY;
	                }
	            }
	            else if (drag.resize == "SW") {
	                drawing.height = Math.max(drag.copy.height + deltaY, 20);
	                if (drag.copy.width - deltaX > 20) {
	                    drawing.width = drag.copy.width - deltaX;
	                    drawing.offsetX = drag.copy.offsetX + deltaX;
	                }
	            }
	            else if (drag.resize == "NW") {
	                if (drag.copy.height - deltaY > 20) {
	                    drawing.height = drag.copy.height - deltaY;
	                    drawing.offsetY = drag.copy.offsetY + deltaY;
	                }
	                if (drag.copy.width - deltaX > 20) {
	                    drawing.width = drag.copy.width - deltaX;
	                    drawing.offsetX = drag.copy.offsetX + deltaX;
	                }
	            }
	            // just moving (no resize)
	            else {
	                drawing.offsetX = drag.copy.offsetX + deltaX;
	                drawing.offsetY = drag.copy.offsetY + deltaY;
	            }

	            sheet.triggerChange({ dragging: true });

	            return true;
	        },

	        onMouseDrag: function(event) {
	            if (this._selectionMode === "sheet") {
	                return;
	            }

	            var location = { clientX: event.clientX, clientY: event.clientY };
	            var sheet = this._workbook.activeSheet();

	            if (this._dragDrawing(event)) {
	                return;
	            }

	            var object = this.objectAt(location);

	            if (sheet.resizingInProgress()) {

	                if (!this.constrainResize(object.type, object.ref)) {
	                    sheet.resizeHintPosition({ x: object.x, y: object.y });
	                }

	                return;
	            }

	            if (object.type === "outside") {
	                this.startAutoScroll(object);
	                return;
	            }

	            if (this.originFrame === object.pane) {
	                this.selectToLocation(location);
	            } else { // cross frame selection
	                var frame = this.originFrame._grid;

	                if (object.x > frame.right) {
	                    kendo.scrollLeft(this);
	                }

	                if (object.y > frame.bottom) {
	                    this.scrollTop();
	                }

	                if (object.y < frame.top || object.x < frame.left) {
	                    this.startAutoScroll(object, location);
	                } else {
	                    this.selectToLocation(location);
	                }
	            }

	            event.preventDefault();
	        },

	        onMouseUp: function(event) {
	            var sheet = this._workbook.activeSheet();
	            sheet.completeResizing();
	            sheet.completeDragging();

	            this.navigator.completeSelection();
	            this.stopAutoScroll();

	            var editor = this.editor.activeEditor();
	            if (!editor) {
	                return;
	            }
	            var el = event.target;
	            while (el) {
	                if (el === editor.element[0]) {
	                    return;
	                }
	                el = el.parentNode;
	            }

	            var object = this.objectAt(event);
	            if (object && object.ref && editor.canInsertRef(false)) {
	                editor.refAtPoint(sheet);
	                sheet._setFormulaSelections(editor.highlightedRefs());
	            }
	        },

	        onDblClick: function(event) {
	            var object = this.objectAt(event);
	            var disabled = this._workbook.activeSheet().selection().enable() === false;

	            if (object.type !== "cell" || disabled) {
	                return;
	            }

	            var sel = this._workbook.activeSheet().selection();
	            this.activateEditor(!sel.value() && !sel.formula());
	            this.onEditorUpdate();
	        },

	        onCut: function(e) {
	            var self = this;
	            setTimeout(function(){
	                self.clipboard.menuInvoked = (e === undefined);
	                self._execute({
	                    command: "CutCommand",
	                    options: { workbook: self.view._workbook, event: e.originalEvent || e }
	                });
	            });
	        },

	        clipBoardValue: function() {
	            return this.clipboardElement.html();
	        },

	        _pasteImage: function(blob) {
	            var self = this;
	            var img = new window.Image();
	            img.src = window.URL.createObjectURL(blob);
	            img.onload = function() {
	                self._execute({
	                    command: "InsertImageCommand",
	                    options: {
	                        blob: blob,
	                        width: img.width,
	                        height: img.height
	                    }
	                });
	            };
	            setTimeout(function(){
	                window.URL.revokeObjectURL(img.src);
	            }, 10);
	        },

	        onPaste: function(e) {
	            var self = this;
	            var html = "";
	            var plain = "";
	            self.clipboard.menuInvoked = (e === undefined);
	            if (e) {
	                var clipboardData = e.originalEvent.clipboardData;
	                if (clipboardData && clipboardData.getData) {
	                    e.preventDefault();
	                    var hasHTML = false;
	                    var hasPlainText = false;
	                    // Firefox uses DOMStringList, needs special handling
	                    if (window.DOMStringList && clipboardData.types instanceof window.DOMStringList) {
	                        hasHTML = clipboardData.types.contains("text/html");
	                        hasPlainText = clipboardData.types.contains("text/plain");
	                    } else if (Array.isArray(clipboardData.types)) {
	                        hasHTML = clipboardData.types.indexOf("text/html") >= 0;
	                        hasPlainText = clipboardData.types.indexOf("text/plain") >= 0;
	                    } else {
	                        hasHTML = /text\/html/.test(clipboardData.types);
	                        hasPlainText = /text\/plain/.test(clipboardData.types);
	                    }
	                    if (hasHTML) {
	                        html = clipboardData.getData('text/html').trim();
	                    }
	                    if (hasPlainText) {
	                        plain = clipboardData.getData('text/plain').trim();
	                    }
	                    if (!html && !plain && clipboardData.items && clipboardData.items.length) {
	                        for (var i = 0; i < clipboardData.items.length; ++i) {
	                            var item = clipboardData.items[i];
	                            if (item.kind == "file" && /^image\/(?:png|jpe?g|gif)$/i.test(item.type)) {
	                                return self._pasteImage(item.getAsFile());
	                            }
	                        }
	                    }
	                } else {
	                    if (window.clipboardData.files && window.clipboardData.files.length) {
	                        var file = window.clipboardData.files[0];
	                        if (/^image\/(?:png|jpe?g|gif)$/i.test(file.type)) {
	                            return self._pasteImage(file);
	                        }
	                    }

	                    plain = window.clipboardData.getData("Text");
	                    if (plain) {
	                        plain = plain.trim();
	                    }

	                    // There's no way to get the HTML clipboard contents in IE other than letting
	                    // the browser handle the event (it pastes into our clipboardElement), and then
	                    // we can read the HTML from there.  Need to allow a small timeout for this.
	                    self.clipboardElement.empty();
	                    setTimeout(function(){
	                        html = self.clipboardElement.html();
	                        if (html || plain) {
	                            self.clipboard.external({ html: html, plain: plain });
	                            self._execute({
	                                command: "PasteCommand",
	                                options: { workbook: self.view._workbook, event: e.originalEvent || e }
	                            });
	                        }
	                    });

	                    return;
	                }
	            } else {
	                if (kendo.support.browser.msie) {
	                    self.clipboardElement.trigger("focus").select();
	                    document.execCommand('paste');
	                    return;
	                } else {
	                    self.clipboard.menuInvoked = true;
	                }
	            }

	            if (!html && !plain) {
	                return;
	            }
	            self.clipboard.external({ html: html, plain:plain });
	            self._execute({
	                command: "PasteCommand",
	                options: { workbook: self.view._workbook, event: e.originalEvent || e }
	            });
	        },

	        onCopy: function(e) {
	            this.clipboard.menuInvoked = (e === undefined);
	            this._execute({
	                command: "CopyCommand",
	                options: { workbook: this.view._workbook, event: e.originalEvent || e }
	            });
	        },

	////////////////////////////////////////////////////////////////////

	        scrollTop: function() {
	            this.scroller.scrollTop = 0;
	        },

	        scrollLeft: function() {
	            this.scroller.scrollLeft = 0;
	        },

	        scrollDown: function(value) {
	            this.scroller.scrollTop += value;
	        },

	        scrollRight: function(value) {
	            this.scroller.scrollLeft += value;
	        },

	        scrollWith: function(right, down) {
	            this.scroller.scrollTop += down;
	            this.scroller.scrollLeft += right;
	        },

	        translateCoords: function(location) {
	            var box = this.container[0].getBoundingClientRect();
	            return {
	                x: location.clientX - box.left,
	                y: location.clientY - box.top
	            };
	        },

	        objectAt: function(location, noDrawing) {
	            if (!location) {
	                return;
	            }
	            location = this.translateCoords(location);
	            return this.view.objectAt(location.x, location.y, noDrawing);
	        },

	        selectToLocation: function(cellLocation) {
	            var object = this.objectAt(cellLocation, true);

	            if (object.pane && object.ref) { // cell, rowheader or columnheader
	                this.extendSelection(object);
	                this.lastKnownCellLocation = cellLocation;
	                this.originFrame = object.pane;
	            }

	            this.stopAutoScroll();
	        },

	        extendSelection: function(object) {
	            this.navigator.extendSelection(object.ref, this._selectionMode);
	        },

	        autoScroll: function() {
	            var x = this._autoScrollTarget.x;
	            var y = this._autoScrollTarget.y;
	            var boundaries = this.originFrame._grid;
	            var scroller = this.view.scroller;
	            var scrollStep = 8;

	            var scrollLeft = scroller.scrollLeft;
	            var scrollTop = scroller.scrollTop;

	            if (x < boundaries.left) {
	                this.scrollRight(-scrollStep);
	            }
	            if (x > boundaries.right) {
	                this.scrollRight(scrollStep);
	            }
	            if (y < boundaries.top) {
	                this.scrollDown(-scrollStep);
	            }
	            if (y > boundaries.bottom) {
	                this.scrollDown(scrollStep);
	            }

	            if (scrollTop === scroller.scrollTop && scrollLeft === scroller.scrollLeft) {
	                this.selectToLocation(this.finalLocation);
	            } else {
	                this.extendSelection(this.objectAt(this.lastKnownCellLocation));
	            }
	        },

	        startAutoScroll: function(viewObject, location) {
	            if (!this._scrollInterval) {
	                this._scrollInterval = setInterval(this.autoScroll.bind(this), 50);
	            }

	            this.finalLocation = location || this.lastKnownCellLocation;

	            this._autoScrollTarget = viewObject;
	        },

	        stopAutoScroll: function() {
	            clearInterval(this._scrollInterval);
	            this._scrollInterval = null;
	        },

	        openCustomEditor: function() {
	            this.view.openCustomEditor();
	        },

	        openFilterMenu: function(event) {
	            var object = this.objectAt(event);
	            var sheet = this._workbook.activeSheet();
	            var column = sheet.filterColumn(object.ref);
	            var filterMenu = this.view.createFilterMenu(column);

	            filterMenu.bind("action", this.onCommandRequest.bind(this));
	            filterMenu.bind("action", filterMenu.close.bind(filterMenu));

	            filterMenu.openFor(event.target);
	        },

	////////////////////////////////////////////////////////////////////

	        _saveEditorValue: function(arrayFormula) {
	            var sheet = this.editor._range.sheet();
	            var value = this.editor.value();
	            if (this._workbook.activeSheet() !== sheet) {
	                // remove highlighted refs (XXX: which are mostly wrong, BTW)
	                this._workbook.activeSheet()._setFormulaSelections();
	                // go back to the original sheet
	                this._workbook.activeSheet(sheet);
	            }
	            sheet.isInEditMode(false);
	            this._lastEditorValue = value;
	            this._execute({
	                command: "EditCommand",
	                options: {
	                    value: value,
	                    arrayFormula: arrayFormula
	                }
	            });
	        },

	        onEditorChange: function() {
	            this._saveEditorValue(false);
	        },

	        onEditorArrayFormula: function() {
	            this._saveEditorValue(true);
	            this.editor.deactivate(true);
	        },

	        onEditorActivate: function() {
	            var workbook = this._workbook;
	            var sheet = workbook.activeSheet();

	            sheet._setFormulaSelections(this.editor.highlightedRefs());
	            sheet.isInEditMode(true);
	        },

	        onEditorDeactivate: function() {
	            var sheet = this._workbook.activeSheet();

	            sheet.isInEditMode(false);
	            sheet._setFormulaSelections([]);
	        },

	        onEditorUpdate: function() {
	            this._workbook.activeSheet()._setFormulaSelections(this.editor.highlightedRefs());
	        },

	        onEditorBarFocus: function() {
	            var disabled = this._workbook.activeSheet().selection().enable() === false;
	            if (disabled) {
	                return;
	            }
	            this.editor
	                .activate({
	                    range: this._workbook.activeSheet().selection(),
	                    rect: this.view.activeCellRectangle(),
	                    tooltip: this._activeTooltip()
	                });
	        },

	        onEditorCellFocus: function() {
	            this.editor.scale();
	        },

	        onEditorEsc: function() {
	            this.resetEditorValue();
	            this.editor.deactivate();

	            this.clipboardElement.trigger("focus");
	        },

	        insertNewline: function(e) {
	            e.preventDefault();
	            this.editor.insertNewline();
	        },

	        onEditorBlur: function(_, action) {
	            if (this.editor.isFiltered()) {
	                return;
	            }

	            this._preventNavigation = false;
	            this.editor.deactivate();

	            if (!this._preventNavigation) {
	                this.clipboardElement.trigger("focus");
	                this.navigator.navigateInSelection(ENTRY_ACTIONS[action]);
	            }
	        },

	        onEditorAction: function(event, action) {
	            var editor = this.editor;
	            var sheet = this._workbook.activeSheet();

	            if (this._casualEditing && /^(?:up|right|down|left)$/.test(action)) {
	                this.deactivateEditor();
	                this.navigator.moveActiveCell(ACTIONS[action]);
	                event.preventDefault();
	            }
	            else if (editor.canInsertRef(true)) {
	                this.navigator.moveActiveCell(ACTIONS[action]);
	                editor.activeEditor().refAtPoint(sheet);
	                sheet._setFormulaSelections(editor.highlightedRefs());
	                event.preventDefault();
	            }
	        },

	        onEditorShiftAction: function(event, action) {
	            var editor = this.editor;
	            var sheet = this._workbook.activeSheet();

	            if (editor.canInsertRef(true)) {
	                this.navigator.modifySelection(ACTIONS[action.replace("shift+", "")], this.appendSelection);

	                editor.activeEditor().refAtPoint(sheet);
	                sheet._setFormulaSelections(editor.highlightedRefs());

	                event.preventDefault();
	            }
	        },

	////////////////////////////////////////////////////////////////////
	        resetEditorValue: function() {
	            var sheet = this._workbook.activeSheet();
	            var ref = sheet.activeCell();
	            var input = this._workbook._inputForRef(ref);
	            var x = sheet.range(ref).intersectingArrayFormula();
	            if (x) {
	                input = "=" + x.formula;
	            }
	            this.editor.value(input, !!x);
	        },

	        activateEditor: function(casual) {
	            // This flag will be false when F2 has been pressed, and
	            // true when editing is "casual", i.e., user just started
	            // typing.  In this case we want arrow keys to do cell
	            // navigation rather than move the cursor.
	            // https://github.com/telerik/kendo-ui-core/issues/3644
	            this._casualEditing = casual;

	            this.editor.activate({
	                range: this._workbook.activeSheet().selection(),
	                rect: this.view.activeCellRectangle(),
	                tooltip: this._activeTooltip()
	            }).focus();
	        },

	        deactivateEditor: function() {
	            this.view.editor.deactivate();
	        },

	        onCommandRequest: function(e) {
	            if (e.command) {
	                this._execute(e);
	            } else {
	                this._workbook.undoRedoStack[e.action]();
	            }
	        },

	        onDialogRequest: function(e) {
	            var additionalOptions = {
	                pdfExport: this._workbook.options.pdf,
	                excelExport: this._workbook.options.excel
	            };

	            if (e.options) {
	                $.extend(true, e.options, additionalOptions);
	            } else {
	                e.options = additionalOptions;
	            }

	            this.view.openDialog(e.name, e.options);
	        },

	        onNameEditorEnter: function() {
	            var ref;
	            var workbook = this._workbook;
	            var sheet = workbook.activeSheet();
	            var name = this.view.nameEditor.value();

	            // 1. does it look like a reference, or already defined
	            // name?  If so, just select it (don't define/modify any
	            // names)
	            ref = kendo.spreadsheet.calc.parseReference(name, true) || workbook.nameValue(name);
	            if (ref instanceof kendo.spreadsheet.Ref) {
	                if (ref.sheet && ref.sheet.toLowerCase() != sheet.name().toLowerCase()) {
	                    // reference points to another sheet, select it if found
	                    var tmp = workbook.sheetByName(ref.sheet);
	                    if (tmp) {
	                        workbook.activeSheet(tmp);
	                        sheet = tmp;
	                    }
	                }
	                sheet.range(ref).select();
	                return;
	            }

	            ref = sheet.selection()._ref.clone().simplify().setSheet(sheet.name(), true);

	            // XXX: should we check if a name is already defined for this range, and update it instead?
	            // Excel just adds a new one, and provides a more complete Name Manager dialog.
	            //var def = workbook.nameForRef(ref, sheet.name());

	            // just define new name
	            this._execute({
	                command: "DefineNameCommand",
	                options: { name: name, value: ref }
	            });

	            this.clipboardElement.trigger("focus");
	        },
	        onNameEditorCancel: function() {
	            this.clipboardElement.trigger("focus");
	        },
	        onNameEditorSelect: function(ev) {
	            var name = ev.name;
	            var workbook = this._workbook;
	            var sheet = workbook.activeSheet();
	            var ref = workbook.nameValue(name);
	            if (ref instanceof kendo.spreadsheet.Ref) {
	                if (ref.sheet && ref.sheet.toLowerCase() != sheet.name().toLowerCase()) {
	                    // reference points to another sheet, select it if found
	                    var tmp = workbook.sheetByName(ref.sheet);
	                    if (tmp) {
	                        workbook.activeSheet(tmp);
	                        sheet = tmp;
	                    }
	                }
	                sheet.range(ref).select();
	                return;
	            }
	            this.clipboardElement.trigger("focus");
	        },
	        onNameEditorDelete: function(ev) {
	            this._execute({
	                command: "DeleteNameCommand",
	                options: { name: ev.name }
	            });
	            this.clipboardElement.trigger("focus");
	        }
	    });

	    kendo.spreadsheet.Controller = Controller;
	})(window.kendo);

	}, __webpack_require__(3));


/***/ })

/******/ });