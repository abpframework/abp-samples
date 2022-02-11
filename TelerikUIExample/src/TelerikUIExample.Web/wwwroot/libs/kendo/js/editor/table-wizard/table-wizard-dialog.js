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

	module.exports = __webpack_require__(1025);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	   !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1026), __webpack_require__(1027)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	(function($, undefined) {

	var kendo = window.kendo,
	    numericTextBoxSettings = { format: "0", min: 0 },
	    units = ["px", "em"],
	    borderStyles = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "initial", "inherit", "none", "hidden"];

	var DEFAULT_NUMBER_OF_COLS_AND_ROWS = 4;

	var tableAlignmentDropDownSettings = {
	    dataSource: [{
	        className: "k-icon k-i-table-align-middle-left",
	        value: "left"
	    }, {
	        className: "k-icon k-i-table-align-middle-center",
	        value: "center"
	    }, {
	        className: "k-icon k-i-table-align-middle-right",
	        value: "right"
	    }, {
	        className: "k-icon k-i-align-remove",
	        value: ""
	    }],
	    dataTextField: "className",
	    dataValueField: "value",
	    template: "<span class='#: className #' title='#: tooltip #'></span>",
	    valueTemplate: "<span class='k-align-group #: className #' title='#: tooltip #'></span>"
	};

	var cellAlignmentDropDownSettings = {
	    dataSource: [{
	        className: "k-icon k-i-table-align-top-left",
	        value: "left top"
	    }, {
	        className: "k-icon k-i-table-align-top-center",
	        value: "center top"
	    }, {
	        className: "k-icon k-i-table-align-top-right",
	        value: "right top"
	    }, {
	        className: "k-icon k-i-table-align-middle-left",
	        value: "left middle"
	    }, {
	        className: "k-icon k-i-table-align-middle-center",
	        value: "center middle"
	    }, {
	        className: "k-icon k-i-table-align-middle-right",
	        value: "right middle"
	    }, {
	        className: "k-icon k-i-table-align-bottom-left",
	        value: "left bottom"
	    }, {
	        className: "k-icon k-i-table-align-bottom-center",
	        value: "center bottom"
	    }, {
	        className: "k-icon k-i-table-align-bottom-right",
	        value: "right bottom"
	    }, {
	        className: "k-icon k-i-align-remove",
	        value: ""
	    }],
	    dataTextField: "className",
	    dataValueField: "value",
	    template: "<span class='#: className #' title='#: tooltip #'></span>",
	    valueTemplate: "<span class='k-align-group #: className #' title='#: tooltip #'></span>"
	};

	var accessibilityAlignmentDropDownSettings = {
	    dataSource: [{
	        className: "k-icon k-i-table-align-top-left",
	        value: "left top"
	    }, {
	        className: "k-icon k-i-table-align-top-center",
	        value: "center top"
	    }, {
	        className: "k-icon k-i-table-align-top-right",
	        value: "right top"
	    }, {
	        className: "k-icon k-i-table-align-bottom-left",
	        value: "left bottom"
	    }, {
	        className: "k-icon k-i-table-align-bottom-center",
	        value: "center bottom"
	    }, {
	        className: "k-icon k-i-table-align-bottom-right",
	        value: "right bottom"
	    }, {
	        className: "k-icon k-i-align-remove",
	        value: ""
	    }],
	    dataTextField: "className",
	    dataValueField: "value",
	    template: "<span class='#: className #' title='#: tooltip #'></span>",
	    valueTemplate: "<span class='k-align-group #: className #' title='#: tooltip #'></span>"
	};

	var dialogTemplate =
	    '<div class="k-editor-dialog k-editor-table-wizard-dialog k-action-window k-popup-edit-form">' +
	        '<div class="k-edit-form-container">' +
	            '<div id="k-table-wizard-tabs" class="k-root-tabs">' +
	                '<ul>' +
	                    '<li class="k-state-active">#= messages.tableTab #</li>' +
	                    '<li>#= messages.cellTab #</li>' +
	                    '<li>#= messages.accessibilityTab #</li>' +
	                '</ul>' +
	                '<div id="k-table-properties">' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-width">#= messages.width #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-width" />' +
	                        '<input id="k-editor-table-width-type" aria-label="#= messages.units #" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-height">#= messages.height #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-height" />' +
	                        '<input id="k-editor-table-height-type" aria-label="#= messages.units #" />' +
	                    '</div>' +

	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-columns">#= messages.columns #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-columns" />' +
	                    '</div>' +

	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-rows">#= messages.rows #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-rows" />' +
	                    '</div>' +

	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-cell-spacing">#= messages.cellSpacing #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-cell-spacing" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-cell-padding">#= messages.cellPadding #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-cell-padding" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-alignment">#= messages.alignment #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-table-alignment" class="k-align" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-bg">#= messages.background #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-table-bg" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-css-class">#= messages.cssClass #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input id="k-editor-css-class" class="k-input-inner" type="text" /></span>' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-id">#= messages.id #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input id="k-editor-id" class="k-input-inner" type="text" /></span>' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-border-width">#= messages.border #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-border-width" />' +
	                        '<input id="k-editor-border-color" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-border-style">#= messages.borderStyle #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-border-style" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">&nbsp;</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-collapse-borders" type="checkbox" class="k-checkbox k-checkbox-md k-rounded-md" />' +
	                        '<label for="k-editor-collapse-borders" class="k-checkbox-label">#= messages.collapseBorders #</label>' +
	                    '</div>' +
	                '</div>' +

	                '<div id="k-cell-properties">' +

	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-selectAllCells" type="checkbox" class="k-checkbox k-checkbox-md k-rounded-md" />' +
	                        '<label for="k-editor-selectAllCells" class="k-checkbox-label">#= messages.selectAllCells #</label>' +
	                    '</div>' +

	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cell-width">#= messages.width #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-cell-width" />' +
	                        '<input id="k-editor-cell-width-type" aria-label="#= messages.units #" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cell-height">#= messages.height #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-cell-height" />' +
	                        '<input id="k-editor-cell-height-type" aria-label="#= messages.units #" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-cell-margin">#= messages.cellMargin #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-cell-margin" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-cells-padding">#= messages.cellPadding #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-cells-padding" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cell-alignment">#= messages.alignment #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-cell-alignment" class="k-align" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cell-bg">#= messages.background #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-cell-bg" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cell-css-class">#= messages.cssClass #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input id="k-editor-cell-css-class" class="k-input-inner" type="text" /></span>' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cell-id">#= messages.id #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input id="k-editor-cell-id" class="k-input-inner" type="text" /></span>' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cell-border-width">#= messages.border #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-cell-border-width" />' +
	                        '<input id="k-editor-cell-border-color" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cell-border-style">#= messages.borderStyle #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-cell-border-style" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">&nbsp;</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-wrap-text" type="checkbox" class="k-checkbox k-checkbox-md k-rounded-md" />' +
	                        '<label for="k-editor-wrap-text" class="k-checkbox-label">#= messages.wrapText #</label>' +
	                    '</div>' +
	                '</div>' +

	                '<div id="k-accessibility-properties">' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-header-rows">#= messages.headerRows #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-header-rows" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-header-columns">#= messages.headerColumns #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input type="numeric" id="k-editor-table-header-columns" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-table-caption">#= messages.caption #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input id="k-editor-table-caption" class="k-input-inner" type="text"/></span>' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-accessibility-alignment">#= messages.alignment #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<input id="k-editor-accessibility-alignment" class="k-align" />' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-accessibility-summary">#= messages.summary #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<span class="k-input k-textarea k-input-solid k-input-md k-rounded-md"><textarea id="k-editor-accessibility-summary" rows="5" class="k-input-inner k-editor-accessibility-summary" placeholder="#= messages.tableSummaryPlaceholder #"></textarea></span>' +
	                    '</div>' +
	                    '<div class="k-edit-label">' +
	                        '<label for="k-editor-cells-headers">#= messages.associateCellsWithHeaders #</label>' +
	                    '</div>' +
	                    '<div class="k-edit-field">' +
	                        '<select id="k-editor-cells-headers">' +
	                            '<option value="none">#= messages.associateNone #</option>' +
	                            '<option value="scope">#= messages.associateScope #</option>' +
	                            '<option value="ids">#= messages.associateIds #</option>' +
	                        '</select>' +
	                    '</div>' +
	                '</div>' +
	                '</div>' +
	                '<div class="k-edit-buttons">' +
	                '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-dialog-ok"><span class="k-button-text">#= messages.dialogOk #</span></button>' +
	                '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-dialog-close"><span class="k-button-text">#= messages.dialogCancel #</span></button>' +
	            '</div>' +
	        '</div>' +
	    '</div>';

	var TableWizardDialog = kendo.Class.extend({
	    init: function(options) {
	        this.options = options;
	    },
	    open: function() {
	        var that = this,
	            options = that.options,
	            dialogOptions = options.dialogOptions,
	            tableData = options.table,
	            dialog,
	            messages = options.messages,
	            isIE = kendo.support.browser.msie;

	        function close(e) {
	            e.preventDefault();
	            that.destroy();
	            dialog.destroy();
	        }

	        function okHandler(e) {
	            that.collectDialogValues(tableData);

	            close(e);

	            if (that.change) {
	                that.change();
	            }

	            options.closeCallback(tableData);
	        }

	        function closeHandler(e) {
	            close(e);
	            options.closeCallback();
	        }

	        dialogOptions.close = closeHandler;
	        dialogOptions.title = messages.tableWizard;
	        dialogOptions.visible = options.visible;

	        dialog = $(that._dialogTemplate(messages)).appendTo(document.body)
	            .kendoWindow(dialogOptions)
	            .closest(".k-window").toggleClass("k-rtl", options.isRtl).end()
	            .find(".k-dialog-ok").on("click", okHandler).end()
	            .find(".k-dialog-close").on("click", closeHandler).end()
	            .data("kendoWindow");

	        var element = dialog.element;
	        that._initTabStripComponent(element);
	        that._initTableViewComponents(element, tableData);
	        that._initCellViewComponents(element, tableData);
	        that._initAccessibilityViewComponents(element, tableData);

	        dialog.center();
	        dialog.open();

	        if(isIE) {
	            var dialogHeight = element.closest(".k-window").height();
	            element.css("max-height", dialogHeight);
	        }
	    },

	    _initTabStripComponent: function(element){
	        var components = this.components = {};
	        components.tabStrip = element.find("#k-table-wizard-tabs").kendoTabStrip({
	            animation: false
	        }).data("kendoTabStrip");
	    },

	    collectDialogValues: function() {
	        var that = this;
	        var data = that.options.table;
	        that._collectTableViewValues(data);
	        that._collectCellViewValues(data);
	        that._collectAccessibilityViewValues(data);
	    },

	    _collectTableViewValues: function(tableData) {
	        var tableView = this.components.tableView;
	        var tableProperties = tableData.tableProperties;
	        tableProperties.width = tableView.width.value();
	        tableProperties.widthUnit = tableView.widthUnit.value();
	        tableProperties.height = tableView.height.value();
	        tableProperties.columns = tableView.columns.value();
	        tableProperties.rows = tableView.rows.value();
	        tableProperties.heightUnit = tableView.heightUnit.value();
	        tableProperties.cellSpacing = tableView.cellSpacing.value();
	        tableProperties.cellPadding = tableView.cellPadding.value();
	        tableProperties.alignment = tableView.alignment.value();
	        tableProperties.bgColor = tableView.bgColor.value();
	        tableProperties.className = tableView.className.value;
	        tableProperties.id = tableView.id.value;
	        tableProperties.borderWidth = tableView.borderWidth.value();
	        tableProperties.borderColor = tableView.borderColor.value();
	        tableProperties.borderStyle = tableView.borderStyle.value();
	        tableProperties.collapseBorders = tableView.collapseBorders.checked;
	    },

	    _collectCellViewValues: function(table) {
	        var cellData = table.cellProperties = {};
	        var cellView = this.components.cellView;

	        cellData.selectAllCells = cellView.selectAllCells.checked;
	        cellData.width = cellView.width.value();
	        cellData.widthUnit = cellView.widthUnit.value();
	        cellData.height = cellView.height.value();
	        cellData.heightUnit = cellView.heightUnit.value();
	        cellData.cellMargin = cellView.cellMargin.value();
	        cellData.cellPadding = cellView.cellPadding.value();
	        cellData.alignment = cellView.alignment.value();
	        cellData.bgColor = cellView.bgColor.value();
	        cellData.className = cellView.className.value;
	        cellData.id = cellView.id.value;
	        cellData.borderWidth = cellView.borderWidth.value();
	        cellData.borderColor = cellView.borderColor.value();
	        cellData.borderStyle = cellView.borderStyle.value();
	        cellData.wrapText = cellView.wrapText.checked;

	        if (!cellData.width) {
	            cellData.selectAllCells = true;
	            cellData.width = 100 / table.tableProperties.columns;
	            cellData.widthUnit = "%";
	        }
	    },

	   _collectAccessibilityViewValues: function(table) {
	        var tableProperties = table.tableProperties;
	        var accessibilityView = this.components.accessibilityView;
	        tableProperties.captionContent = accessibilityView.captionContent.value;
	        tableProperties.captionAlignment = accessibilityView.captionAlignment.value();
	        tableProperties.summary = accessibilityView.summary.value;
	        tableProperties.cellsWithHeaders = accessibilityView.cellsWithHeaders.value();

	        tableProperties.headerRows = accessibilityView.headerRows.value();
	        tableProperties.headerColumns = accessibilityView.headerColumns.value();
	    },
	    _addUnit: function(units, value){
	        if (value && $.inArray(value, units) == -1) {
	            units.push(value);
	        }
	    },
	    _initTableViewComponents: function(element, table) {
	        var that = this;
	        var components = that.components;
	        var tableView = components.tableView = {};
	        var tableProperties = table.tableProperties = table.tableProperties || {};
	        tableProperties.borderStyle = tableProperties.borderStyle || "";

	        var onColumnsNumberChange = function(args) {
	            var accessibilityView = that.components.accessibilityView;
	            var headerColumnsNumeric = accessibilityView.headerColumns;
	            var currentNumberOfColumnsHeaders = headerColumnsNumeric.value();
	            var numberOfColumns = args.sender.value();

	            if(numberOfColumns < currentNumberOfColumnsHeaders) {
	                headerColumnsNumeric.value(numberOfColumns);
	            }

	            headerColumnsNumeric.max(numberOfColumns);
	        };

	        var onRowsNumberChange = function(args) {
	            var accessibilityView = that.components.accessibilityView;
	            var headerRowsNumeric = accessibilityView.headerRows;
	            var currentNumberOfRowHeaders = headerRowsNumeric.value();
	            var numberOfRows = args.sender.value();

	            if(numberOfRows < currentNumberOfRowHeaders) {
	                headerRowsNumeric.value(numberOfRows);
	            }

	            headerRowsNumeric.max(numberOfRows);
	        };

	        that._addUnit(units, tableProperties.widthUnit);
	        that._addUnit(units, tableProperties.heightUnit);

	        that._initNumericTextbox(element.find("#k-editor-table-width"), "width", tableProperties, tableView);
	        that._initNumericTextbox(element.find("#k-editor-table-height"), "height", tableProperties, tableView);
	        that._initNumericTextbox(element.find("#k-editor-table-columns"), "columns", tableProperties, tableView, {min: 1, value: DEFAULT_NUMBER_OF_COLS_AND_ROWS, change: onColumnsNumberChange});
	        that._initNumericTextbox(element.find("#k-editor-table-rows"), "rows", tableProperties, tableView, {min: 1, value: DEFAULT_NUMBER_OF_COLS_AND_ROWS, change: onRowsNumberChange});
	        that._initDropDownList(element.find("#k-editor-table-width-type"), "widthUnit", tableProperties, tableView, units);
	        that._initDropDownList(element.find("#k-editor-table-height-type"), "heightUnit", tableProperties, tableView, units);
	        that._initNumericTextbox(element.find("#k-editor-table-cell-spacing"), "cellSpacing", tableProperties, tableView);
	        that._initNumericTextbox(element.find("#k-editor-table-cell-padding"), "cellPadding", tableProperties, tableView);
	        that._initTableAlignmentDropDown(element.find("#k-editor-table-alignment"), tableProperties);
	        that._initColorPicker(element.find("#k-editor-table-bg"), "bgColor", tableProperties, tableView);
	        that._initInput(element.find("#k-editor-css-class"), "className", tableProperties, tableView);
	        that._initInput(element.find("#k-editor-id"), "id", tableProperties, tableView);
	        that._initNumericTextbox(element.find("#k-editor-border-width"), "borderWidth", tableProperties, tableView);
	        that._initColorPicker(element.find("#k-editor-border-color"), "borderColor", tableProperties, tableView);
	        that._initBorderStyleDropDown(element.find("#k-editor-border-style"), "borderStyle", tableProperties, tableView, borderStyles);
	        that._initCheckbox(element.find("#k-editor-collapse-borders"), "collapseBorders", tableProperties, tableView);
	    },

	    _initCellViewComponents: function(element, table) {
	        var components = this.components;
	        var cellView = components.cellView = {};
	        table.selectedCells = table.selectedCells = table.selectedCells || [];
	        var cellProperties = table.selectedCells[0] || {borderStyle: "", wrapText: true};
	        this._addUnit(units, cellProperties.widthUnit);
	        this._addUnit(units, cellProperties.heightUnit);

	        this._initCheckbox(element.find("#k-editor-selectAllCells"), "selectAllCells", table.tableProperties, cellView);
	        this._initNumericTextbox(element.find("#k-editor-cell-width"), "width", cellProperties, cellView);
	        this._initNumericTextbox(element.find("#k-editor-cell-height"), "height", cellProperties, cellView);
	        this._initDropDownList(element.find("#k-editor-cell-width-type"), "widthUnit", cellProperties, cellView, units);
	        this._initDropDownList(element.find("#k-editor-cell-height-type"), "heightUnit", cellProperties, cellView, units);
	        this._initNumericTextbox(element.find("#k-editor-table-cell-margin"), "cellMargin", cellProperties, cellView);
	        this._initNumericTextbox(element.find("#k-editor-table-cells-padding"), "cellPadding", cellProperties, cellView);
	        this._initCellAlignmentDropDown(element.find("#k-editor-cell-alignment"), cellProperties);
	        this._initColorPicker(element.find("#k-editor-cell-bg"), "bgColor", cellProperties, cellView);
	        this._initInput(element.find("#k-editor-cell-css-class"), "className", cellProperties, cellView);
	        this._initInput(element.find("#k-editor-cell-id"), "id", cellProperties, cellView);
	        this._initNumericTextbox(element.find("#k-editor-cell-border-width"), "borderWidth", cellProperties, cellView);
	        this._initColorPicker(element.find("#k-editor-cell-border-color"), "borderColor", cellProperties, cellView);
	        this._initBorderStyleDropDown(element.find("#k-editor-cell-border-style"), "borderStyle", cellProperties, cellView, borderStyles);
	        this._initCheckbox(element.find("#k-editor-wrap-text"), "wrapText", cellProperties, cellView);
	    },

	    _initAccessibilityViewComponents: function(element, table) {
	        var components = this.components;
	        var accessibilityView = components.accessibilityView = {};
	        var tableProperties = table.tableProperties;

	        this._initInput(element.find("#k-editor-table-caption"), "captionContent", tableProperties, accessibilityView);
	        this._initAccessibilityAlignmentDropDown(element.find("#k-editor-accessibility-alignment"), tableProperties);
	        this._initInput(element.find("#k-editor-accessibility-summary"), "summary", tableProperties, accessibilityView);
	        this._initAssociationDropDown(element.find("#k-editor-cells-headers"), "cellsWithHeaders", { valuePrimitive: true }, tableProperties, accessibilityView);
	        this._initNumericTextbox(element.find("#k-editor-table-header-rows"), "headerRows", tableProperties, accessibilityView, { max: tableProperties.rows || DEFAULT_NUMBER_OF_COLS_AND_ROWS });
	        this._initNumericTextbox(element.find("#k-editor-table-header-columns"), "headerColumns", tableProperties, accessibilityView, { max: tableProperties.columns || DEFAULT_NUMBER_OF_COLS_AND_ROWS });
	    },

	    _initNumericTextbox: function(element, property, data, storage, settings) {
	        var component = storage[property] = element.kendoNumericTextBox(
	                settings ? $.extend({}, numericTextBoxSettings, settings) : numericTextBoxSettings
	            ).data("kendoNumericTextBox");
	        if (property in data) {
	            component.value(parseInt(data[property], 10));
	        }
	    },

	    _initDropDownList: function(element, property, data, storage, dataSource) {
	        var component = storage[property] = element.kendoDropDownList({
	            dataSource: dataSource
	        }).data("kendoDropDownList");
	        this._setComponentValue(component, data, property);
	    },

	    _initBorderStyleDropDown: function(element, property, data, storage, dataSource) {
	        var component = storage[property] = element.kendoDropDownList({
	            dataSource: dataSource,
	            optionLabel: this.options.messages.borderNone
	        }).data("kendoDropDownList");
	        this._setComponentValue(component, data, property);
	    },

	    _initTableAlignmentDropDown: function (element, data) {
	        var messages = this.options.messages;
	        var tableView =  this.components.tableView;
	        var dataSource = tableAlignmentDropDownSettings.dataSource;
	        dataSource[0].tooltip = messages.alignLeft;
	        dataSource[1].tooltip = messages.alignCenter;
	        dataSource[2].tooltip = messages.alignRight;
	        dataSource[3].tooltip = messages.alignRemove;

	        this._initAlignmentDropDown(element, tableAlignmentDropDownSettings, "alignment", data, tableView);
	    },

	    _initCellAlignmentDropDown: function (element, data) {
	        var messages = this.options.messages;
	        var cellView =  this.components.cellView;
	        var dataSource = cellAlignmentDropDownSettings.dataSource;
	        dataSource[0].tooltip = messages.alignLeftTop;
	        dataSource[1].tooltip = messages.alignCenterTop;
	        dataSource[2].tooltip = messages.alignRightTop;
	        dataSource[3].tooltip = messages.alignLeftMiddle;
	        dataSource[4].tooltip = messages.alignCenterMiddle;
	        dataSource[5].tooltip = messages.alignRightMiddle;
	        dataSource[6].tooltip = messages.alignLeftBottom;
	        dataSource[7].tooltip = messages.alignCenterBottom;
	        dataSource[8].tooltip = messages.alignRightBottom;
	        dataSource[9].tooltip = messages.alignRemove;

	        this._initAlignmentDropDown(element, cellAlignmentDropDownSettings, "alignment", data, cellView);
	    },

	    _initAccessibilityAlignmentDropDown: function (element, data) {
	        var messages = this.options.messages;
	        var accessibilityView =  this.components.accessibilityView;
	        var dataSource = accessibilityAlignmentDropDownSettings.dataSource;
	        dataSource[0].tooltip = messages.alignLeftTop;
	        dataSource[1].tooltip = messages.alignCenterTop;
	        dataSource[2].tooltip = messages.alignRightTop;
	        dataSource[3].tooltip = messages.alignLeftBottom;
	        dataSource[4].tooltip = messages.alignCenterBottom;
	        dataSource[5].tooltip = messages.alignRightBottom;
	        dataSource[6].tooltip = messages.alignRemove;

	        this._initAlignmentDropDown(element, accessibilityAlignmentDropDownSettings, "captionAlignment", data, accessibilityView);
	    },
	    _initAlignmentDropDown: function(element, settings, name, data, storage) {
	        var component = storage[name] =
	            element.kendoDropDownList(settings).data("kendoDropDownList");

	        component.list.addClass('k-align').css('width', '110px');
	        this._setComponentValue(component, data, name);
	    },
	    _initAssociationDropDown: function(element, name, settings, data, storage) {
	        var component = storage[name] =
	            element.kendoDropDownList(settings).data("kendoDropDownList");

	        this._setComponentValue(component, data, name);
	    },
	    _setComponentValue: function(component, data, property){
	        if (property in data) {
	            component.value(data[property]);
	        }
	    },

	    _initColorPicker: function(element, property, data, storage) {
	        var component = storage[property] =
	            element.kendoColorPicker({buttons: false, clearButton: true}).data("kendoColorPicker");

	        if (data[property]) {
	            component.value(data[property]);
	        }
	    },
	    _initInput: function(element, property, data, storage) {
	        var component = storage[property] = element.get(0);
	        if (property in data) {
	            component.value = data[property];
	        }
	    },

	    _initCheckbox: function(element, property, data, storage) {
	        var component = storage[property] = element.get(0);
	        if (property in data) {
	            component.checked = data[property];
	        }
	    },

	    destroy: function() {
	        this._destroyComponents(this.components.tableView);
	        this._destroyComponents(this.components.cellView);
	        this._destroyComponents(this.components.accessibilityView);
	        this._destroyComponents(this.components);

	        delete this.components;
	    },
	    _destroyComponents: function(components) {
	        for (var widget in components) {
	            if (components[widget].destroy) {
	                components[widget].destroy();
	            }
	            delete components[widget];
	        }
	    },

	    _dialogTemplate: function(messages) {
	        return kendo.template(dialogTemplate)({ messages: messages });
	    }
	});

	kendo.ui.editor.TableWizardDialog = TableWizardDialog;

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ }),

/***/ 1026:
/***/ (function(module, exports) {

	module.exports = require("./table-wizard-command");

/***/ }),

/***/ 1027:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.tabstrip");

/***/ })

/******/ });