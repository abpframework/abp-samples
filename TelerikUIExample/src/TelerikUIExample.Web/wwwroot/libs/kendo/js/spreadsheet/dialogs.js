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

	__webpack_require__(1662);
	module.exports = __webpack_require__(1662);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = require("../kendo.validator");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1635:
/***/ (function(module, exports) {

	module.exports = require("../kendo.binder");

/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(1635), __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    /* jshint eqnull:true */
	    /* jshint latedef: false */
	    /* jshint multistr: true */

	    var $ = kendo.jQuery;
	    var ObservableObject = kendo.data.ObservableObject;

	    var MESSAGES = kendo.spreadsheet.messages.dialogs = {
	        apply: "Apply",
	        save: "Save",
	        cancel: "Cancel",
	        remove: "Remove",
	        retry: "Retry",
	        revert: "Revert",
	        okText: "OK",
	        formatCellsDialog: {
	            title: "Format",
	            categories: {
	                number: "Number",
	                currency: "Currency",
	                date: "Date"
	            }
	        },
	        fontFamilyDialog: {
	            title: "Font"
	        },
	        fontSizeDialog: {
	            title: "Font size"
	        },
	        bordersDialog: {
	            title: "Borders"
	        },
	        alignmentDialog: {
	            title: "Alignment",
	            buttons: {
	                justtifyLeft: "Align left",
	                justifyCenter: "Center",
	                justifyRight: "Align right",
	                justifyFull: "Justify",
	                alignTop: "Align top",
	                alignMiddle: "Align middle",
	                alignBottom: "Align bottom"
	            }
	        },
	        mergeDialog: {
	            title: "Merge cells",
	            buttons: {
	                mergeCells: "Merge all",
	                mergeHorizontally: "Merge horizontally",
	                mergeVertically: "Merge vertically",
	                unmerge: "Unmerge"
	            }
	        },
	        freezeDialog: {
	            title: "Freeze panes",
	            buttons: {
	                freezePanes: "Freeze panes",
	                freezeRows: "Freeze rows",
	                freezeColumns: "Freeze columns",
	                unfreeze: "Unfreeze panes"
	            }
	        },
	        confirmationDialog: {
	            text: "Are you sure you want to remove this sheet?",
	            title: "Sheet remove"
	        },
	        validationDialog: {
	            title: "Data Validation",
	            hintMessage: "Please enter a valid {0} value {1}.",
	            hintTitle: "Validation {0}",
	            criteria: {
	                any: "Any value",
	                number: "Number",
	                text: "Text",
	                date: "Date",
	                custom: "Custom Formula",
	                list: "List"
	            },
	            comparers: {
	                greaterThan: "greater than",
	                lessThan: "less than",
	                between: "between",
	                notBetween: "not between",
	                equalTo: "equal to",
	                notEqualTo: "not equal to",
	                greaterThanOrEqualTo: "greater than or equal to",
	                lessThanOrEqualTo: "less than or equal to"
	            },
	            comparerMessages: {
	                greaterThan: "greater than {0}",
	                lessThan: "less than {0}",
	                between: "between {0} and {1}",
	                notBetween: "not between {0} and {1}",
	                equalTo: "equal to {0}",
	                notEqualTo: "not equal to {0}",
	                greaterThanOrEqualTo: "greater than or equal to {0}",
	                lessThanOrEqualTo: "less than or equal to {0}",
	                custom: "that satisfies the formula: {0}"
	            },
	            labels: {
	                criteria: "Criteria",
	                comparer: "Comparer",
	                min: "Min",
	                max: "Max",
	                value: "Value",
	                start: "Start",
	                end: "End",
	                onInvalidData: "On invalid data",
	                rejectInput: "Reject input",
	                showWarning: "Show warning",
	                showHint: "Show hint",
	                hintTitle: "Hint title",
	                hintMessage: "Hint message",
	                ignoreBlank: "Ignore blank",
	                showListButton: "Display button to show list",
	                showCalendarButton: "Display button to show calendar"
	            },
	            placeholders: {
	                typeTitle: "Type title",
	                typeMessage: "Type message"
	            }
	        },
	        exportAsDialog: {
	            title: "Export...",
	            defaultFileName: "Workbook",
	            xlsx: {
	                description: "Excel Workbook (.xlsx)"
	            },
	            pdf: {
	                description: "Portable Document Format (.pdf)",
	                area: {
	                    workbook: "Entire Workbook",
	                    sheet: "Active Sheet",
	                    selection: "Selection"
	                },
	                paper: {
	                    a2        : "A2 (420 mm × 594 mm)",
	                    a3        : "A3 (297 mm x 420 mm)",
	                    a4        : "A4 (210 mm x 297 mm)",
	                    a5        : "A5 (148 mm x 210 mm)",
	                    b3        : "B3 (353 mm × 500 mm)",
	                    b4        : "B4 (250 mm x 353 mm)",
	                    b5        : "B5 (176 mm x 250 mm)",
	                    folio     : 'Folio (8.5" x 13")',
	                    legal     : 'Legal (8.5" x 14")',
	                    letter    : 'Letter (8.5" x 11")',
	                    tabloid   : 'Tabloid (11" x 17")',
	                    executive : 'Executive (7.25" x 10.5")'
	                },
	                margin: {
	                    normal: "Normal",
	                    narrow: "Narrow",
	                    wide: "Wide"
	                }
	            },
	            labels: {
	                scale: "Scale",
	                fit: "Fit to page",
	                fileName: "File name",
	                saveAsType: "Save as type",
	                exportArea: "Export",
	                paperSize: "Paper size",
	                margins: "Margins",
	                orientation: "Orientation",
	                print: "Print",
	                guidelines: "Guidelines",
	                center: "Center",
	                horizontally: "Horizontally",
	                vertically: "Vertically"
	            }
	        },
	        modifyMergedDialog: {
	            errorMessage: "Cannot change part of a merged cell."
	        },
	        rangeDisabledDialog: {
	            errorMessage: "Destination range contains disabled cells."
	        },
	        intersectsArrayDialog: {
	            errorMessage: "You cannot alter part of an array"
	        },
	        incompatibleRangesDialog: {
	            errorMessage: "Incompatible ranges"
	        },
	        noFillDirectionDialog: {
	            errorMessage: "Cannot determine fill direction"
	        },
	        duplicateSheetNameDialog: {
	            errorMessage: "Duplicate sheet name"
	        },
	        overflowDialog: {
	            errorMessage: "Cannot paste, because the copy area and the paste area are not the same size and shape."
	        },
	        useKeyboardDialog: {
	            title: "Copying and pasting",
	            errorMessage: "These actions cannot be invoked through the menu. Please use the keyboard shortcuts instead:",
	            labels: {
	                forCopy: "for copy",
	                forCut: "for cut",
	                forPaste: "for paste"
	            }
	        },
	        unsupportedSelectionDialog: {
	            errorMessage: "That action cannot be performed on multiple selection."
	        },
	        linkDialog: {
	            title: "Hyperlink",
	            labels: {
	                text: "Text",
	                url: "Address",
	                removeLink: "Remove link"
	            }
	        },
	        insertCommentDialog: {
	            title: "Insert comment",
	            labels: {
	                comment: "Comment",
	                removeComment: "Remove comment"
	            }
	        },
	        insertImageDialog: {
	            title: "Insert image",
	            info: "Drag an image here, or click to select",
	            typeError: "Please select a JPEG, PNG or GIF image"
	        }
	    };

	    var registry = {};
	    kendo.spreadsheet.dialogs = {
	        register: function(name, dialogClass) {
	            registry[name] = dialogClass;
	        },
	        registered: function(name) {
	            return !!registry[name];
	        },
	        create: function(name, options) {
	            var dialogClass = registry[name];

	            if (dialogClass) {
	                return new dialogClass(options);
	            }
	        }
	    };

	    var SpreadsheetDialog = kendo.spreadsheet.SpreadsheetDialog = kendo.Observable.extend({
	        init: function(options) {
	            kendo.Observable.fn.init.call(this, options);

	            this.options = translate($.extend(true, {}, this.options, options));

	            this.bind(this.events, options);
	        },
	        events: [
	            "close",
	            "activate"
	        ],
	        options: {
	            autoFocus: true
	        },
	        dialog: function() {
	            if (!this._dialog) {
	                var options = {
	                    autoFocus: false,
	                    scrollable: false,
	                    resizable: false,
	                    modal: true,
	                    visible: false,
	                    width: this.options.width || 320,
	                    title: this.options.title,
	                    open: function() {
	                        this.center();
	                    },
	                    close: this._onDialogClose.bind(this),
	                    activate: this._onDialogActivate.bind(this),
	                    deactivate: this._onDialogDeactivate.bind(this)
	                };
	                this._dialog = $("<div class='k-spreadsheet-window k-action-window k-popup-edit-form' />")
	                    .addClass(this.options.className || "")
	                    .append(kendo.template(this.options.template)({
	                        messages: kendo.spreadsheet.messages.dialogs || MESSAGES,
	                        ns: kendo.ns,

	                        // this is for ImportErrorDialog.  ugly that
	                        // we need this line here, but I couldn't
	                        // figure out a better way
	                        errors: this.options.errors
	                    }))
	                    .kendoWindow(options)
	                    .data("kendoWindow");
	            }

	            return this._dialog;
	        },
	        _onDialogClose: function() {
	            this.trigger("close", {
	                action: this._action
	            });
	        },
	        _onDialogActivate: function() {
	            this.trigger("activate");
	        },
	        _onDialogDeactivate: function() {
	            this.trigger("deactivate");
	            this.destroy();
	        },
	        destroy: function() {
	            if (this._dialog) {
	                this._dialog.destroy();
	                this._dialog = null;
	            }
	        },
	        open: function() {
	            this.dialog().open();
	            this.dialog().element.find(".k-button-solid-primary").trigger("focus");
	        },
	        apply: function() {
	            this.close();
	        },
	        close: function() {
	            this._action = "close";

	            this.dialog().close();
	        }
	    });

	    function formattedValue(value, format) {
	        return kendo.spreadsheet.formatting.text(value, format);
	    }

	    var FormatCellsViewModel = kendo.spreadsheet.FormatCellsViewModel = ObservableObject.extend({
	        init: function(options) {
	            ObservableObject.fn.init.call(this, options);

	            this.useCategory(this.category);
	        },
	        useCategory: function(category) {
	            var type = category && category.type || "number";
	            var formatCurrency = type == "currency";

	            this.category = category;

	            this.set("showCurrencyFilter", formatCurrency && this.currencies.length > 1);

	            if (!formatCurrency) {
	                this.set("formats", this.allFormats[type + "Formats"]);
	            } else {
	                this.currency(this.currencies[0]);
	            }

	            this.useFirstFormat();
	        },
	        useFirstFormat: function() {
	            if (this.formats.length) {
	                this.set("format", this.formats[0].value);
	            }
	        },
	        currency: function(currency) {
	            if (currency !== undefined) {
	                this._currency = currency;

	                var info = currency.value;
	                var formats = [
	                    { currency: info, decimals: true },
	                    { currency: info, decimals: true, iso: true },
	                    { currency: info, decimals: false }
	                ];

	                formats = formats.map(function(format) {
	                    format = FormatCellsViewModel.convert.currency(format);

	                    return { value: format, name: formattedValue(1000, format) };
	                });

	                this.set("formats", formats);

	                this.useFirstFormat();
	            }

	            return this._currency || this.currencies[0];
	        },
	        categoryFilter: function(category) {
	            if (category !== undefined) {
	                this.useCategory(category);
	            }

	            return this.category;
	        },
	        preview: function() {
	            var format = this.get("format");
	            var value = this.value || 0;

	            if (format && format.length) {
	                return formattedValue(value, format);
	            } else {
	                return value;
	            }
	        }
	    });

	    FormatCellsViewModel.convert = {
	        currency: function(options) {
	            function repeat(token, n) {
	                return new Array(n+1).join(token);
	            }

	            // convert culture info to spreadsheet format
	            var info = options.currency;
	            var format = info.pattern[1];

	            if (options.decimals) {
	                format = format.replace(/n/g, "n" + info["."] + repeat("0", info.decimals));
	            }

	            if (options.iso) {
	                format = '"' + info.abbr + '" ' + format.replace(/\s*\$\s*/g, "");
	            } else {
	                format = format.replace(/\$/g, JSON.stringify(info.symbol));
	            }

	            format = format.replace(/n/g, "?");

	            return format;
	        },
	        date: function(format) {
	            if ((/T|Z/).test(format)) {
	                return "";
	            }

	            return format.toLowerCase().replace(/tt/g, "AM/PM").replace(/'/g, '"');
	        }
	    };

	    function uniqueBy(field, array) {
	        var result = [];
	        var values = [];

	        for (var i = 0; i < array.length; i++) {
	            if ($.inArray(array[i][field], values) == -1) {
	                result.push(array[i]);
	                values.push(array[i][field]);
	            }
	        }

	        return result;
	    }

	    var FormatCellsDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.formatCellsDialog || MESSAGES;
	            var defaultOptions = {
	                title: messages.title,
	                categories: [
	                    { type: "number", name: messages.categories.number },
	                    { type: "currency", name: messages.categories.currency },
	                    { type: "date", name: messages.categories.date }
	                ]
	            };

	            SpreadsheetDialog.fn.init.call(this, $.extend(defaultOptions, options));

	            this._generateFormats();
	        },
	        options: {
	            className: "k-spreadsheet-format-cells",
	            template:
	                "<div class='k-edit-form-container'>" +

	                    "<div class='k-root-tabs' data-#:ns#role='tabstrip' " +
	                        "data-#:ns#text-field='name' " +
	                        "data-#:ns#bind='source: categories, value: categoryFilter' " +
	                        "data-#:ns#animation='false'></div>" +

	                    "<div class='k-spreadsheet-preview' data-#:ns#bind='text: preview'></div>" +

	                    "<script type='text/x-kendo-template' id='format-item-template'>" +
	                        "\\#: data.name \\#" +
	                    "</script>" +

	                    "<select data-#:ns#role='dropdownlist' class='k-format-filter' " +
	                        "data-#:ns#text-field='description' " +
	                        "data-#:ns#value-field='value.name' " +
	                        "data-#:ns#bind='visible: showCurrencyFilter, value: currency, source: currencies'></select>" +

	                    "<ul data-#:ns#role='staticlist' tabindex='0' " +
	                        "class='k-list k-reset' " +
	                        "data-#:ns#template='format-item-template' " +
	                        "data-#:ns#value-primitive='true' " +
	                        "data-#:ns#value-field='value' " +
	                        "data-#:ns#bind='source: formats, value: format'></ul>" +

	                    "<div class='k-action-buttons'>" +
	                        "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: apply'><span class='k-button-text'>#: messages.apply #</span></button>" +
	                        "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: close'><span class='k-button-text'>#: messages.cancel #</span></button>" +
	                    "</div>"+

	                "</div>"
	        },
	        _generateFormats: function() {
	            var options = this.options;

	            if (!options.currencies) {
	                options.currencies = FormatCellsDialog.currenciesFrom(kendo.cultures);
	            }

	            if (!options.numberFormats) {
	                options.numberFormats = [
	                    { value: "#.00%", name: "100.00%" },
	                    { value: "#%", name: "100%" },
	                    { value: "#.00", name: "1024.00" },
	                    { value: "#,###.00", name: "1,024.00" }
	                ];
	            }

	            if (!options.dateFormats) {
	                var calendarPatterns = kendo.cultures.current.calendars.standard.patterns;

	                options.dateFormats = uniqueBy("value", $.map(calendarPatterns, function(format) {
	                    format = FormatCellsViewModel.convert.date(format);

	                    if (!format) {
	                        return;
	                    }

	                    return { value: format, name: formattedValue(34567.7678, format) };
	                }));
	            }
	        },
	        open: function(range) {
	            var options = this.options;
	            var value = range.value();
	            var categories = options.categories.slice(0);
	            var element;

	            this.viewModel = new FormatCellsViewModel({
	                currencies: options.currencies.slice(0),
	                allFormats: {
	                    numberFormats: options.numberFormats.slice(0),
	                    dateFormats: options.dateFormats.slice(0)
	                },
	                categories: categories,
	                format: range.format(),
	                category: value instanceof Date ? categories[2] : categories[0],
	                apply: this.apply.bind(this),
	                close: this.close.bind(this),
	                value: value
	            });

	            SpreadsheetDialog.fn.open.call(this);

	            element = this.dialog().element;

	            kendo.bind(element, this.viewModel);

	            var currencyFilter = element.find("select.k-format-filter").data("kendoDropDownList");

	            if (options.currencies.length > 10) {
	                currencyFilter.setOptions({ filter: "contains" });
	            }

	            element.find(kendo.roleSelector("staticlist")).parent().addClass("k-list-wrapper");
	        },
	        apply: function() {
	            var format = this.viewModel.format;

	            SpreadsheetDialog.fn.apply.call(this);

	            this.trigger("action", {
	                command: "PropertyChangeCommand",
	                options: {
	                    property: "format",
	                    value: format
	                }
	            });
	        }
	    });

	    FormatCellsDialog.currenciesFrom = function (cultures) {
	        return uniqueBy("description", $.map(cultures, function(culture, name) {
	            if (!(/-/).test(name)) {
	                return;
	            }

	            var currency = culture.numberFormat.currency;
	            var description = kendo.format(
	                "{0} ({1}, {2})",
	                currency.name,
	                currency.abbr,
	                currency.symbol
	            );

	            return { description: description, value: currency };
	        }));
	    };

	    kendo.spreadsheet.dialogs.register("formatCells", FormatCellsDialog);

	    kendo.spreadsheet.dialogs.FormatCellsDialog = FormatCellsDialog;

	    var MessageDialog = SpreadsheetDialog.extend({
	        options: {
	            className: "k-spreadsheet-message",
	            title: "",
	            messageId: "",
	            text: "",
	            template:
	                "<div class='k-spreadsheet-message-content' data-#:ns#bind='text: text'></div>" +
	                "<div class='k-action-buttons'>" +
	                    "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: close'>" +
	                        "<span class='k-button-text'>#= messages.okText #</span>" +
	                    "</button>" +
	                "</div>"
	        },
	        open: function() {
	            SpreadsheetDialog.fn.open.call(this);

	            var options = this.options;
	            var text = options.text;

	            if (options.messageId) {
	                text = kendo.getter(options.messageId, true)(kendo.spreadsheet.messages.dialogs);
	            }

	            kendo.bind(this.dialog().element, {
	                text: text,
	                close: this.close.bind(this)
	            });
	        }
	    });

	    kendo.spreadsheet.dialogs.register("message", MessageDialog);

	    var ConfirmationDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.confirmationDialog || MESSAGES;
	            var defaultOptions = {
	                title: messages.title,
	                text: messages.text
	            };

	            SpreadsheetDialog.fn.init.call(this, $.extend(defaultOptions, options));
	        },
	        options: {
	            className: "k-spreadsheet-message",
	            messageId: "",
	            template:
	                "<div class='k-spreadsheet-message-content' data-#:ns#bind='text: text'></div>" +
	                "<div class='k-action-buttons'>" +
	                    "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: confirm'>" +
	                        "<span class='k-button-text'>#= messages.okText #</span>" +
	                    "</button>" +
	                    "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: cancel'>" +
	                        "<span class='k-button-text'>#= messages.cancel #</span>" +
	                    "</button>" +
	                "</div>"
	        },
	        open: function() {
	            SpreadsheetDialog.fn.open.call(this);

	            var options = this.options;
	            var text = options.text;

	            if (options.messageId) {
	                text = kendo.getter(options.messageId, true)(kendo.spreadsheet.messages.dialogs);
	            }

	            kendo.bind(this.dialog().element, {
	                text: text,
	                confirm: this.confirm.bind(this),
	                cancel: this.close.bind(this)
	            });
	        },
	        isConfirmed: function() {
	            return this._confirmed;
	        },
	        confirm: function() {
	            this._confirmed = true;
	            this.close();
	        }
	    });

	    kendo.spreadsheet.dialogs.register("confirmation", ConfirmationDialog);

	    var ValidationErrorDialog = SpreadsheetDialog.extend({
	        options: {
	            className: "k-spreadsheet-message",
	            title: "",
	            messageId: "",
	            text: "",
	            template:
	            "<div class='k-spreadsheet-message-content' data-#:ns#bind='text: text'></div>" +
	            "<div class='k-action-buttons'>" +
	                "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: retry'>" +
	                    "<span class='k-button-text'>#= messages.retry #</span>" +
	                "</button>" +
	                "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: cancel'>" +
	                    "<span class='k-button-text'>#= messages.cancel #</span>" +
	                "</button>" +
	            "</div>"
	        },
	        open: function() {
	            SpreadsheetDialog.fn.open.call(this);

	            var options = this.options;
	            var text = options.text;

	            if (options.messageId) {
	                text = kendo.getter(options.messageId, true)(kendo.spreadsheet.messages.dialogs);
	            }

	            kendo.bind(this.dialog().element, {
	                text: text,
	                retry: this.retry.bind(this),
	                cancel: this.close.bind(this)
	            });
	        },
	        retry: function() {
	            this._retry = true;
	            this.close();
	        }
	    });

	    kendo.spreadsheet.dialogs.register("validationError", ValidationErrorDialog);

	    var FontFamilyDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.fontFamilyDialog || MESSAGES;

	            SpreadsheetDialog.fn.init.call(this, $.extend({ title: messages.title }, options));

	            this._list();
	        },
	        options: {
	            template: "<ul class='k-list k-reset'></ul>"
	        },
	        _list: function() {
	            var ul = this.dialog().element.find("ul");
	            var fonts = this.options.fonts;
	            var defaultFont = this.options.defaultFont;

	            this.list = new kendo.ui.StaticList(ul, {
	                dataSource: new kendo.data.DataSource({ data: fonts }),
	                template: "#: data #",
	                value: defaultFont,
	                change: this.apply.bind(this)
	            });

	            this.list.dataSource.fetch();
	        },
	        apply: function(e) {
	            SpreadsheetDialog.fn.apply.call(this);

	            this.trigger("action", {
	                command: "PropertyChangeCommand",
	                options: {
	                    property: "fontFamily",
	                    value: e.sender.value()[0]
	                }
	            });
	        }
	    });

	    kendo.spreadsheet.dialogs.register("fontFamily", FontFamilyDialog);

	    var FontSizeDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.fontSizeDialog || MESSAGES;

	            SpreadsheetDialog.fn.init.call(this, $.extend({ title: messages.title }, options));

	            this._list();
	        },
	        options: {
	            template: "<ul class='k-list k-reset'></ul>"
	        },
	        _list: function() {
	            var ul = this.dialog().element.find("ul");
	            var sizes = this.options.sizes;
	            var defaultSize = this.options.defaultSize;

	            this.list = new kendo.ui.StaticList(ul, {
	                dataSource: new kendo.data.DataSource({ data: sizes }),
	                template: "#: data #",
	                value: defaultSize,
	                change: this.apply.bind(this)
	            });

	            this.list.dataSource.fetch();
	        },
	        apply: function(e) {
	            SpreadsheetDialog.fn.apply.call(this);

	            this.trigger("action", {
	                command: "PropertyChangeCommand",
	                options: {
	                    property: "fontSize",
	                    value: kendo.parseInt(e.sender.value()[0])
	                }
	            });
	        }
	    });

	    kendo.spreadsheet.dialogs.register("fontSize", FontSizeDialog);

	    var BordersDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.bordersDialog || MESSAGES;

	            SpreadsheetDialog.fn.init.call(this, $.extend({ title: messages.title }, options));

	            this.element = this.dialog().element;
	            this._borderPalette();

	            this.viewModel = kendo.observable({
	                apply: this.apply.bind(this),
	                close: this.close.bind(this)
	            });

	            kendo.bind(this.element.find(".k-action-buttons"), this.viewModel);
	        },
	        options: {
	            width: 177,
	            template:   "<div></div>" +
	                        "<div class='k-action-buttons'>" +
	                            "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: apply'><span class='k-button-text'>#: messages.apply #</span></button>" +
	                            "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: close'><span class='k-button-text'>#: messages.cancel #</span></button>" +
	                        "</div>"
	        },
	        apply: function() {
	            SpreadsheetDialog.fn.apply.call(this);

	            var state = this.value();

	            this.trigger("action", {
	                command: "BorderChangeCommand",
	                options: {
	                    border: state.type,
	                    style: { size: 1, color: state.color }
	                }
	            });
	        },
	        _borderPalette: function() {
	            var element = this.dialog().element.find("div").first();

	            this.borderPalette = new kendo.spreadsheet.BorderPalette(element, {
	                change: this.value.bind(this)
	            });
	        },
	        value: function(state) {
	            if (state === undefined) {
	                return this._state;
	            } else {
	                this._state = state;
	            }
	        }
	    });

	    kendo.spreadsheet.dialogs.register("borders", BordersDialog);

	    var ColorChooser = SpreadsheetDialog.extend({
	        init: function(options) {
	            SpreadsheetDialog.fn.init.call(this, options);

	            this.element = this.dialog().element;
	            this.property = options.property;
	            this.options.title = options.title;

	            this.viewModel = kendo.observable({
	                apply: this.apply.bind(this),
	                close: this.close.bind(this)
	            });

	            kendo.bind(this.element.find(".k-action-buttons"), this.viewModel);
	        },
	        options: {
	            template:   "<div></div>" +
	                        "<div class='k-action-buttons'>" +
	                            "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: apply'><span class='k-button-text'>#: messages.apply #</span></button>" +
	                            "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: close'><span class='k-button-text'>#: messages.cancel #</span></button>" +
	                        "</div>"
	        },
	        apply: function() {
	            SpreadsheetDialog.fn.apply.call(this);

	            this.trigger("action", {
	                command: "PropertyChangeCommand",
	                options: {
	                    property: this.property,
	                    value: this.value()
	                }
	            });
	        },
	        value: function(e) {
	            if (e === undefined) {
	                return this._value;
	            } else {
	                this._value = e.value;
	            }
	        }
	    });

	    var ColorPickerDialog = ColorChooser.extend({
	        init: function(options) {
	            options.width = 177;
	            ColorChooser.fn.init.call(this, options);
	            this._colorPalette();
	        },
	        _colorPalette: function() {
	            var element = this.dialog().element.find("div").first();
	            this.colorPalette = element.kendoColorPalette({
	                palette: [ //metro palette
	                    "#ffffff", "#000000", "#d6ecff", "#4e5b6f", "#7fd13b", "#ea157a", "#feb80a", "#00addc", "#738ac8", "#1ab39f",
	                    "#f2f2f2", "#7f7f7f", "#a7d6ff", "#d9dde4", "#e5f5d7", "#fad0e4", "#fef0cd", "#c5f2ff", "#e2e7f4", "#c9f7f1",
	                    "#d8d8d8", "#595959", "#60b5ff", "#b3bcca", "#cbecb0", "#f6a1c9", "#fee29c", "#8be6ff", "#c7d0e9", "#94efe3",
	                    "#bfbfbf", "#3f3f3f", "#007dea", "#8d9baf", "#b2e389", "#f272af", "#fed46b", "#51d9ff", "#aab8de", "#5fe7d5",
	                    "#a5a5a5", "#262626", "#003e75", "#3a4453", "#5ea226", "#af0f5b", "#c58c00", "#0081a5", "#425ea9", "#138677",
	                    "#7f7f7f", "#0c0c0c", "#00192e", "#272d37", "#3f6c19", "#750a3d", "#835d00", "#00566e", "#2c3f71", "#0c594f"
	                ],
	                change: this.value.bind(this)
	            }).data("kendoColorPalette");
	        }
	    });

	    kendo.spreadsheet.dialogs.register("colorPicker", ColorPickerDialog);

	    var CustomColorDialog = ColorChooser.extend({
	        init: function(options) {
	            options.width = 268;
	            ColorChooser.fn.init.call(this, options);
	            this.dialog().setOptions({ animation: false });
	            this.dialog().one("activate", this._colorPicker.bind(this));
	        },
	        _colorPicker: function() {
	            var element = this.dialog().element.find("div").first();
	            this.colorPicker = element.kendoFlatColorPicker({
	                change: this.value.bind(this)
	            }).data("kendoFlatColorPicker");
	        }
	    });

	    kendo.spreadsheet.dialogs.register("customColor", CustomColorDialog);

	    var AlignmentDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.alignmentDialog || MESSAGES;
	            var defaultOptions = {
	                title: messages.title,
	                buttons: [
	                    { property: "textAlign",     value: "left",    iconClass: "align-left",   text: messages.buttons.justtifyLeft },
	                    { property: "textAlign",     value: "center",  iconClass: "align-center", text: messages.buttons.justifyCenter },
	                    { property: "textAlign",     value: "right",   iconClass: "align-right",  text: messages.buttons.justifyRight },
	                    { property: "textAlign",     value: "justify", iconClass: "align-justify",   text: messages.buttons.justifyFull },
	                    { property: "verticalAlign", value: "top",     iconClass: "align-top",      text: messages.buttons.alignTop },
	                    { property: "verticalAlign", value: "center",  iconClass: "align-middle",   text: messages.buttons.alignMiddle },
	                    { property: "verticalAlign", value: "bottom",  iconClass: "align-bottom",   text: messages.buttons.alignBottom }
	                ]
	            };

	            SpreadsheetDialog.fn.init.call(this, $.extend(defaultOptions, options));

	            this._list();
	        },
	        options: {
	            template: "<ul class='k-list k-reset'></ul>"
	        },
	        _list: function() {
	            var ul = this.dialog().element.find("ul");

	            this.list = new kendo.ui.StaticList(ul, {
	                dataSource: new kendo.data.DataSource({ data: this.options.buttons }),
	                template: "<a role='button' title='#=text#' data-property='#=property#' data-value='#=value#'>" +
	                                "<span class='k-icon k-i-#=iconClass#'></span>" +
	                                "#=text#" +
	                           "</a>",
	                change: this.apply.bind(this)
	            });

	            this.list.dataSource.fetch();
	        },
	        apply: function(e) {
	            var dataItem = e.sender.value()[0];
	            SpreadsheetDialog.fn.apply.call(this);

	            this.trigger("action", {
	                command: "PropertyChangeCommand",
	                options: {
	                    property: dataItem.property,
	                    value: dataItem.value
	                }
	            });
	        }
	    });

	    kendo.spreadsheet.dialogs.register("alignment", AlignmentDialog);

	    var MergeDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.mergeDialog || MESSAGES;
	            var defaultOptions = {
	                title: messages.title,
	                buttons: [
	                    { value: "cells",        iconClass: "cells-merge",        text: messages.buttons.mergeCells },
	                    { value: "horizontally", iconClass: "cells-merge-horizontally", text: messages.buttons.mergeHorizontally },
	                    { value: "vertically",   iconClass: "cells-merge-vertically",   text: messages.buttons.mergeVertically },
	                    { value: "unmerge",      iconClass: "table-unmerge",      text: messages.buttons.unmerge }
	                ]
	            };

	            SpreadsheetDialog.fn.init.call(this, $.extend(defaultOptions, options));

	            this._list();
	        },
	        options: {
	            template: "<ul class='k-list k-reset'></ul>"
	        },
	        _list: function() {
	            var ul = this.dialog().element.find("ul");

	            this.list = new kendo.ui.StaticList(ul, {
	                dataSource: new kendo.data.DataSource({ data: this.options.buttons }),
	                template: "<a role='button' title='#=text#' data-value='#=value#'>" +
	                            "<span class='k-icon k-icon k-i-#=iconClass#'></span>#=text#" +
	                          "</a>",
	                change: this.apply.bind(this)
	            });

	            this.list.dataSource.fetch();
	        },
	        apply: function(e) {
	            var dataItem = e.sender.value()[0];
	            SpreadsheetDialog.fn.apply.call(this);

	            this.trigger("action", {
	                command: "MergeCellCommand",
	                options: {
	                    value: dataItem.value
	                }
	            });
	        }
	    });

	    kendo.spreadsheet.dialogs.register("merge", MergeDialog);

	    var FreezeDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.freezeDialog || MESSAGES;
	            var defaultOptions = {
	                title: messages.title,
	                buttons: [
	                    { value: "panes",    iconClass: "pane-freeze",  text: messages.buttons.freezePanes },
	                    { value: "rows",     iconClass: "row-freeze",    text: messages.buttons.freezeRows },
	                    { value: "columns",  iconClass: "column-freeze",    text: messages.buttons.freezeColumns },
	                    { value: "unfreeze", iconClass: "table-unmerge", text: messages.buttons.unfreeze }
	                ]
	            };

	            SpreadsheetDialog.fn.init.call(this, $.extend(defaultOptions, options));

	            this._list();
	        },
	        options: {
	            template: "<ul class='k-list k-reset'></ul>"
	        },
	        _list: function() {
	            var ul = this.dialog().element.find("ul");

	            this.list = new kendo.ui.StaticList(ul, {
	                dataSource: new kendo.data.DataSource({ data: this.options.buttons }),
	                template: "<a role='button' title='#=text#' data-value='#=value#'>" +
	                            "<span class='k-icon k-icon k-i-#=iconClass#'></span>#=text#" +
	                          "</a>",
	                change: this.apply.bind(this)
	            });

	            this.list.dataSource.fetch();
	        },
	        apply: function(e) {
	            var dataItem = e.sender.value()[0];
	            SpreadsheetDialog.fn.apply.call(this);

	            this.trigger("action", {
	                command: "FreezePanesCommand",
	                options: {
	                    value: dataItem.value
	                }
	            });
	        }
	    });

	    kendo.spreadsheet.dialogs.register("freeze", FreezeDialog);

	    var ValidationViewModel = kendo.spreadsheet.ValidationCellsViewModel = ObservableObject.extend({
	        init: function(options) {
	            ObservableObject.fn.init.call(this, options);

	            this.bind("change", (function(e) {

	                if (e.field === "criterion") {
	                    this.reset();

	                    if (this.criterion === "custom" || this.criterion === "list") {
	                        this.setHintMessageTemplate();
	                    }
	                }

	                if (e.field === "comparer") {
	                    this.setHintMessageTemplate();
	                }

	                if ((e.field == "hintMessage" || e.field == "hintTitle") && !this._mute) {
	                    this.shouldBuild = false;
	                }

	                if ((e.field == "from" || e.field == "to" || e.field == "hintMessageTemplate" || e.field == "type") && this.shouldBuild) {
	                    this.buildMessages();
	                }
	            }).bind(this));

	            this.reset();
	        },
	        buildMessages: function() {
	            this._mute = true;
	            this.set("hintTitle", this.hintTitleTemplate ? kendo.format(this.hintTitleTemplate, this.type) : "");
	            this.set("hintMessage", this.hintMessageTemplate ? kendo.format(this.hintMessageTemplate, this.from, this.to) : "");
	            this._mute = false;
	        },
	        reset: function() {
	            this.setComparers();
	            this.set("comparer", this.comparers[0].type);
	            this.set("from", null);
	            this.set("to", null);

	            this.set("useCustomMessages", false);

	            this.shouldBuild = true;

	            this.hintTitleTemplate = this.defaultHintTitle;
	            this.buildMessages();
	        },
	        //TODO: refactor
	        setComparers: function() {
	            var all = this.defaultComparers;
	            var comparers = [];

	            if (this.criterion === "text") {
	                var text_comparers = ["equalTo", "notEqualTo"];
	                for (var idx = 0; idx < all.length; idx++) {
	                    if (text_comparers[0] == all[idx].type) {
	                        comparers.push(all[idx]);
	                        text_comparers.shift();
	                    }
	                }
	            } else {
	                comparers = all.slice();
	            }

	            this.set("comparers", comparers);
	        },
	        setHintMessageTemplate: function() {
	           if (this.criterion !== "custom" && this.criterion !== "list") {
	               this.set("hintMessageTemplate", kendo.format(this.defaultHintMessage, this.criterion, this.comparerMessages[this.comparer]));
	           } else {
	               this.set("hintMessageTemplate", "");
	               this.set("hintMessage", "");
	           }
	        },
	        isAny: function() {
	            return this.get("criterion") === "any";
	        },
	        isNumber: function() {
	            return this.get("criterion") === "number";
	        },
	        showToForNumber: function() {
	            return this.showTo() && this.isNumber();
	        },
	        showToForDate: function() {
	            return this.showTo() && this.isDate();
	        },
	        isText: function() {
	            return this.get("criterion") === "text";
	        },
	        isDate: function() {
	            return this.get("criterion") === "date";
	        },
	        isList: function() {
	            return this.get("criterion") === "list";
	        },
	        isCustom: function() {
	            return this.get("criterion") === "custom";
	        },
	        showRemove: function() {
	            return this.get("hasValidation");
	        },
	        showTo: function() {
	            return this.get("comparer") == "between" || this.get("comparer") == "notBetween";
	        },
	        update: function(validation) {
	            this.set("hasValidation", !!validation);

	            if (validation) {
	                this.fromValidationObject(validation);
	            }
	        },
	        fromValidationObject: function(validation) {
	            this.set("criterion", validation.dataType);
	            this.set("comparer", validation.comparerType);
	            this.set("from", validation.from);
	            this.set("to", validation.to);
	            this.set("type", validation.type);
	            this.set("ignoreBlank", validation.allowNulls);
	            this.set("showButton", validation.showButton);

	            if (validation.messageTemplate || validation.titleTemplate) {
	                this.hintMessageTemplate = validation.messageTemplate;
	                this.hintMessage = validation.messageTemplate;
	                this.hintTitleTemplate = validation.titleTemplate;
	                this.hintTitle = validation.titleTemplate;
	                this.useCustomMessages = true;
	                this.buildMessages();
	            } else {
	                this.useCustomMessages = false;
	            }
	        },
	        toValidationObject: function() {
	            if (this.criterion === "any") {
	                return null;
	            }

	            var options = {
	                type: this.type,
	                dataType: this.criterion,
	                comparerType: this.comparer,
	                from: this.from,
	                to: this.to,
	                allowNulls: this.ignoreBlank,
	                showButton: this.showButton
	            };

	            if (this.useCustomMessages) {
	                options.messageTemplate = this.shouldBuild ? this.hintMessageTemplate : this.hintMessage;
	                options.titleTemplate = this.hintTitle;
	            }

	            return options;
	        }
	    });

	    var ValidationDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            var messages = kendo.spreadsheet.messages.dialogs.validationDialog || MESSAGES;
	            var defaultOptions = {
	                title: messages.title,
	                hintMessage: messages.hintMessage,
	                hintTitle: messages.hintTitle,
	                criteria: [
	                    { type: "any", name: messages.criteria.any },
	                    { type: "number", name: messages.criteria.number },
	                    { type: "text", name: messages.criteria.text },
	                    { type: "date", name: messages.criteria.date },
	                    { type: "custom", name: messages.criteria.custom },
	                    { type: "list", name: messages.criteria.list }
	                ],
	                comparers: [
	                    { type: "greaterThan", name: messages.comparers.greaterThan },
	                    { type: "lessThan",    name: messages.comparers.lessThan },
	                    { type: "between",     name: messages.comparers.between },
	                    { type: "notBetween",  name: messages.comparers.notBetween },
	                    { type: "equalTo",     name: messages.comparers.equalTo },
	                    { type: "notEqualTo",  name: messages.comparers.notEqualTo },
	                    { type: "greaterThanOrEqualTo", name: messages.comparers.greaterThanOrEqualTo },
	                    { type: "lessThanOrEqualTo",    name: messages.comparers.lessThanOrEqualTo }
	                ],
	                comparerMessages: messages.comparerMessages
	            };

	            SpreadsheetDialog.fn.init.call(this, $.extend(defaultOptions, options));
	        },
	        options: {
	            width: 450,
	            criterion: "any",
	            type: "reject",
	            ignoreBlank: true,
	            showButton: true,
	            useCustomMessages: false,
	            errorTemplate:
	                '<div class="k-tooltip k-tooltip-error k-validator-tooltip">' +
	                    '<span class="k-tooltip-icon k-icon k-i-warning"></span>' +
	                    '<span class="k-tooltip-content">#= message #</span>' +
	                    '<span class="k-callout k-callout-n"></span>' +
	                '</div>',
	            template:
	                '<div class="k-edit-form-container">' +
	                    '<div class="k-edit-label"><label>#: messages.validationDialog.labels.criteria #:</label></div>' +
	                    '<div class="k-edit-field">' +
	                        '<select data-#:ns#role="dropdownlist" ' +
	                            'title="#: messages.validationDialog.labels.criteria #"' +
	                            'data-#:ns#text-field="name" ' +
	                            'data-#:ns#value-field="type" ' +
	                            'data-#:ns#bind="value: criterion, source: criteria"></select>' +
	                    '</div>' +

	                    '<div data-#:ns#bind="visible: isNumber">' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.comparer #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<select data-#:ns#role="dropdownlist" ' +
	                                'title="#: messages.validationDialog.labels.comparer #"' +
	                                'data-#:ns#text-field="name" ' +
	                                'data-#:ns#value-field="type" ' +
	                                'data-#:ns#bind="value: comparer, source: comparers"></select>' +
	                        '</div>' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.min #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input name="#: messages.validationDialog.labels.min #" title="#: messages.validationDialog.labels.min #" placeholder="e.g. 10" class="k-input-inner" data-#:ns#bind="value: from, enabled: isNumber" required="required" /></span>' +
	                        '</div>' +
	                        '<div data-#:ns#bind="visible: showTo">' +
	                            '<div class="k-edit-label"><label>#: messages.validationDialog.labels.max #:</label></div>' +
	                            '<div class="k-edit-field">' +
	                                '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input name="#: messages.validationDialog.labels.max #" title="#: messages.validationDialog.labels.max #" placeholder="e.g. 100" class="k-input-inner" data-#:ns#bind="value: to, enabled: showToForNumber" required="required" /></span>' +
	                            '</div>' +
	                        '</div>' +
	                    '</div>' +

	                    '<div data-#:ns#bind="visible: isText">' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.comparer #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<select data-#:ns#role="dropdownlist" ' +
	                                'title="#: messages.validationDialog.labels.comparer #"' +
	                                'data-#:ns#text-field="name" ' +
	                                'data-#:ns#value-field="type" ' +
	                                'data-#:ns#bind="value: comparer, source: comparers"></select>' +
	                        '</div>' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.value #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input name="#: messages.validationDialog.labels.value #" title="#: messages.validationDialog.labels.value #" class="k-input-inner" data-#:ns#bind="value: from, enabled: isText" required="required" /></span>' +
	                        '</div>' +
	                    '</div>' +

	                    '<div data-#:ns#bind="visible: isDate">' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.comparer #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<select data-#:ns#role="dropdownlist" ' +
	                                'title="#: messages.validationDialog.labels.comparer #"' +
	                                'data-#:ns#text-field="name" ' +
	                                'data-#:ns#value-field="type" ' +
	                                'data-#:ns#bind="value: comparer, source: comparers"></select>' +
	                        '</div>' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.start #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input name="#: messages.validationDialog.labels.start #" title="#: messages.validationDialog.labels.start #" class="k-input-inner" data-#:ns#bind="value: from, enabled: isDate" required="required" /></span>' +
	                        '</div>' +
	                        '<div data-#:ns#bind="visible: showTo">' +
	                            '<div class="k-edit-label"><label>#: messages.validationDialog.labels.end #:</label></div>' +
	                            '<div class="k-edit-field">' +
	                                '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input name="#: messages.validationDialog.labels.end #" title="#: messages.validationDialog.labels.end #" class="k-input-inner" data-#:ns#bind="value: to, enabled: showToForDate" required="required" /></span>' +
	                            '</div>' +
	                        '</div>' +
	                    '</div>' +

	                    '<div data-#:ns#bind="visible: isCustom">' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.value #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input name="#: messages.validationDialog.labels.value #" title="#: messages.validationDialog.labels.value #" class="k-input-inner" data-#:ns#bind="value: from, enabled: isCustom" required="required" /></span>' +
	                        '</div>' +
	                    '</div>' +

	                    '<div data-#:ns#bind="visible: isList">' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.value #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input name="#: messages.validationDialog.labels.value #" title="#: messages.validationDialog.labels.value #" class="k-input-inner" data-#:ns#bind="value: from, enabled: isList" required="required" /></span>' +
	                        '</div>' +
	                    '</div>' +

	                    '<div data-#:ns#bind="visible: isList">' +
	                        '<div class="k-edit-field">' +
	                            '<input type="checkbox" name="showButton" id="listShowButton" class="k-checkbox k-checkbox-md k-rounded-md" data-#:ns#bind="checked: showButton"/>' +
	                            '<label for="listShowButton" class="k-checkbox-label">' +
	                                ' #: messages.validationDialog.labels.showListButton #' +
	                            '</label>' +
	                        '</div>' +
	                    "</div>" +

	                    '<div data-#:ns#bind="visible: isDate">' +
	                        '<div class="k-edit-field">' +
	                            '<input type="checkbox" name="showButton" id="dateShowButton" class="k-checkbox k-checkbox-md k-rounded-md" data-#:ns#bind="checked: showButton"/>' +
	                            '<label for="dateShowButton" class="k-checkbox-label">' +
	                                ' #: messages.validationDialog.labels.showCalendarButton #' +
	                            '</label>' +
	                        '</div>' +
	                    "</div>" +

	                    '<div data-#:ns#bind="invisible: isAny">' +
	                        '<div class="k-edit-field">' +
	                            '<input type="checkbox" title="#: messages.validationDialog.labels.ignoreBlank #" name="ignoreBlank" id="ignoreBlank" class="k-checkbox k-checkbox-md k-rounded-md" data-#:ns#bind="checked: ignoreBlank"/>' +
	                            '<label for="ignoreBlank" class="k-checkbox-label">' +
	                                ' #: messages.validationDialog.labels.ignoreBlank #' +
	                            '</label>' +
	                        '</div>' +
	                    '</div>' +

	                    '<div data-#:ns#bind="invisible: isAny">' +
	                        '<div class="k-hr"></div>' +
	                        '<div class="k-edit-label"><label>#: messages.validationDialog.labels.onInvalidData #:</label></div>' +
	                        '<div class="k-edit-field">' +
	                            '<input type="radio" title="#: messages.validationDialog.labels.rejectInput #" id="validationTypeReject" name="validationType" value="reject" data-#:ns#bind="checked: type" class="k-radio k-radio-md" />' +
	                            '<label for="validationTypeReject" class="k-radio-label">' +
	                                 "#: messages.validationDialog.labels.rejectInput #" +
	                            '</label> ' +
	                            '<input type="radio" title="#: messages.validationDialog.labels.showWarning #" id="validationTypeWarning"  name="validationType" value="warning" data-#:ns#bind="checked: type" class="k-radio k-radio-md" />' +
	                            '<label for="validationTypeWarning" class="k-radio-label">' +
	                                 "#: messages.validationDialog.labels.showWarning #" +
	                            '</label>' +
	                        '</div>' +
	                    '</div>' +

	                    '<div data-#:ns#bind="invisible: isAny" class="hint-wrapper">' +
	                        '<div class="k-edit-field">' +
	                            '<input type="checkbox" title="#: messages.validationDialog.labels.showHint #" name="useCustomMessages" id="useCustomMessages" class="k-checkbox k-checkbox-md k-rounded-md" data-#:ns#bind="checked: useCustomMessages" />' +
	                            '<label class="k-checkbox-label" for="useCustomMessages">'+
	                                ' #: messages.validationDialog.labels.showHint #' +
	                            '</label>' +
	                        '</div>' +
	                        '<div data-#:ns#bind="visible: useCustomMessages">' +
	                            '<div class="k-edit-label"><label>#: messages.validationDialog.labels.hintTitle #:</label></div>' +
	                            '<div class="k-edit-field">' +
	                                '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" title="#: messages.validationDialog.labels.hintTitle #" placeholder="#: messages.validationDialog.placeholders.typeTitle #" data-#:ns#bind="value: hintTitle" /></span>' +
	                            '</div>' +
	                            '<div class="k-edit-label"><label>#: messages.validationDialog.labels.hintMessage #:</label></div>' +
	                            '<div class="k-edit-field">' +
	                                '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" title="#: messages.validationDialog.labels.hintMessage #" placeholder="#: messages.validationDialog.placeholders.typeMessage #" data-#:ns#bind="value: hintMessage" /></span>' +
	                            '</div>' +
	                        '</div>' +
	                    '</div>' +

	                    '<div class="k-action-buttons">' +
	                        '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" data-#:ns#bind="visible: showRemove, click: remove"><span class="k-button-text">#: messages.remove #</span></button>' +
	                        '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" data-#:ns#bind="click: apply"><span class="k-button-text">#: messages.apply #</span></button>' +
	                        '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" data-#:ns#bind="click: close"><span class="k-button-text">#: messages.cancel #</span></button>' +
	                    "</div>" +
	                "</div>"
	        },
	        open: function(range) {
	            var options = this.options;
	            var element;

	            this.viewModel = new ValidationViewModel({
	                type: options.type,
	                defaultHintMessage: options.hintMessage,
	                defaultHintTitle: options.hintTitle,
	                defaultComparers: options.comparers.slice(0),
	                comparerMessages: options.comparerMessages,
	                criteria: options.criteria.slice(0),
	                criterion: options.criterion,
	                ignoreBlank: options.ignoreBlank,
	                showButton: options.showButton,
	                apply: this.apply.bind(this),
	                close: this.close.bind(this),
	                remove: this.remove.bind(this)
	            });

	            this.viewModel.update(range.validation());

	            SpreadsheetDialog.fn.open.call(this);

	            element = this.dialog().element;

	            if (this.validatable) {
	                this.validatable.destroy();
	            }

	            kendo.bind(element, this.viewModel);

	            this.validatable = new kendo.ui.Validator(element.find(".k-edit-form-container"), {
	                validateOnBlur: false,
	                errorTemplate: this.options.errorTemplate || undefined
	            });
	        },
	        apply: function() {

	            if (this.validatable.validate()) {
	                SpreadsheetDialog.fn.apply.call(this);

	                this.trigger("action", {
	                    command: "EditValidationCommand",
	                    options: {
	                        value: this.viewModel.toValidationObject()
	                    }
	                });
	            }
	        },
	        remove: function() {
	            this.viewModel.set("criterion", "any");
	            this.apply();
	        }
	    });

	    kendo.spreadsheet.dialogs.register("validation", ValidationDialog);
	    kendo.spreadsheet.dialogs.ValidationDialog = ValidationDialog;

	    function PDF_PAPER_SIZE(size) {
	        return {
	            value: size,
	            text: TEXT("exportAsDialog.pdf.paper." + size)
	        };
	    }

	    var ExportAsDialog = SpreadsheetDialog.extend({
	        init: function(options) {
	            SpreadsheetDialog.fn.init.call(this, options);
	            options = this.options;

	            this.viewModel = kendo.observable({
	                title: options.title,
	                name: options.name,
	                extension: options.extension,
	                fileFormats:options.fileFormats,
	                excel: options.excelExport,
	                pdf: {
	                    proxyURL: options.pdfExport.proxyURL,
	                    forceProxy: options.pdfExport.forceProxy,
	                    title: options.pdfExport.title,
	                    author: options.pdfExport.author,
	                    autoPrint: options.pdfExport.autoPrint,
	                    subject: options.pdfExport.subject,
	                    keywords: options.pdfExport.keywords,
	                    creator: options.pdfExport.creator,
	                    date: options.pdfExport.date,

	                    fitWidth: options.pdf.fitWidth,
	                    area: options.pdf.area,
	                    areas: options.pdf.areas,
	                    paperSize: options.pdf.paperSize,
	                    paperSizes: options.pdf.paperSizes,
	                    margin: options.pdf.margin,
	                    margins: options.pdf.margins,
	                    landscape: options.pdf.landscape,
	                    guidelines: options.pdf.guidelines,
	                    hCenter: options.pdf.hCenter,
	                    vCenter: options.pdf.vCenter
	                },
	                apply: this.apply.bind(this),
	                close: this.close.bind(this)
	            });

	            var dialog = this.dialog();
	            this.viewModel.bind("change", function(e) {
	                if (e.field === "extension") {
	                    this.set("showPdfOptions", this.extension === ".pdf" ? true : false);
	                    dialog.center();
	                }
	            });

	            kendo.bind(dialog.element, this.viewModel);
	        },
	        options: {
	            title: TEXT("exportAsDialog.title", "Export..."),
	            name: TEXT("exportAsDialog.defaultFileName", "Workbook"),
	            extension: ".xlsx",
	            fileFormats: [{
	                description: TEXT("exportAsDialog.xlsx.description", "Excel Workbook (.xlsx)"),
	                extension: ".xlsx"
	            }, {
	                description: TEXT("exportAsDialog.pdf.description", "Portable Document Format (.pdf)"),
	                extension: ".pdf"
	            }],
	            pdf: {
	                fitWidth: true,
	                area: "workbook",
	                areas: [{
	                    area: "workbook",
	                    text: TEXT("exportAsDialog.pdf.area.workbook", "Entire Workbook")
	                },{
	                    area: "sheet",
	                    text: TEXT("exportAsDialog.pdf.area.sheet", "Active Sheet")
	                },{
	                    area: "selection",
	                    text: TEXT("exportAsDialog.pdf.area.selection", "Selection")
	                }],
	                paperSize: "a4",
	                paperSizes: [
	                    "a2", "a3", "a4", "a5", "b3", "b4", "b5", "folio", "legal", "letter", "tabloid", "executive"
	                ].map(PDF_PAPER_SIZE),
	                margin: {bottom: "0.75in", left: "0.7in", right: "0.7in", top: "0.75in"},
	                margins: [
	                    { value: { bottom: "0.75in", left: "0.7in", right: "0.7in", top: "0.75in" },
	                      text: TEXT("exportAsDialog.pdf.margin.normal", "Normal")
	                    },
	                    { value: { bottom: "0.75in", left: "0.25in", right: "0.25in", top: "0.75in" },
	                      text: TEXT("exportAsDialog.pdf.margin.narrow", "Narrow")
	                    },
	                    { value: { bottom: "1in", left: "1in", right: "1in", top: "1in" },
	                      text: TEXT("exportAsDialog.pdf.margin.wide", "Wide")
	                    }
	                ],
	                landscape: true,
	                guidelines: true,
	                hCenter: true,
	                vCenter: true
	            },
	            width: 520,
	            template:
	                "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.fileName #:</label></div>" +
	                "<div class='k-edit-field'>" +
	                    "<span class='k-textbox k-input k-input-md k-rounded-md k-input-solid'><input class='k-input-inner' data-#:ns#bind='value: name' /></span>" +
	                "</div>" +
	                "<div >" +
	                    "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.saveAsType #:</label></div>" +
	                    "<div class='k-edit-field'>" +
	                    "<select data-#:ns#role='dropdownlist' class='k-file-format' " +
	                        "data-#:ns#text-field='description' " +
	                        "data-#:ns#value-field='extension' " +
	                        "data-#:ns#bind='value: extension, source: fileFormats'></select>" +
	                    "</div>" +
	                "</div>" +
	                "<div class='k-export-config' data-#:ns#bind='visible: showPdfOptions'>" +
	                    "<hr class='k-hr' />" +
	                    "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.exportArea #:</label></div>" +
	                    "<div class='k-edit-field'>" +
	                        "<select data-#:ns#role='dropdownlist' class='k-file-format' " +
	                            "data-#:ns#text-field='text' " +
	                            "data-#:ns#value-field='area' " +
	                            "data-#:ns#bind='value: pdf.area, source: pdf.areas'></select>" +
	                    "</div>" +
	                    "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.paperSize#:</label></div>" +
	                    "<div class='k-edit-field'>" +
	                        "<select data-#:ns#role='dropdownlist' class='k-file-format' " +
	                            "data-#:ns#text-field='text' " +
	                            "data-#:ns#value-field='value' " +
	                            "data-#:ns#bind='value: pdf.paperSize, source: pdf.paperSizes'></select>" +
	                    "</div>" +
	                    "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.margins #:</label></div>" +
	                    "<div class='k-edit-field'>" +
	                        "<select data-#:ns#role='dropdownlist' class='k-file-format' " +
	                            "data-#:ns#value-primitive='true'" +
	                            "data-#:ns#text-field='text' " +
	                            "data-#:ns#value-field='value' " +
	                            "data-#:ns#bind='value: pdf.margin, source: pdf.margins'></select>" +
	                    "</div>" +
	                    "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.orientation #:</label></div>" +
	                    "<div class='k-edit-field'>" +
	                        "<div class='k-button-group'>" +
	                            "<input type='radio' id='k-orientation-portrait' name='orientation' data-#:ns#type='boolean' data-#:ns#bind='checked: pdf.landscape' value='false' />" +
	                            "<label class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-group-start k-orientation-button' for='k-orientation-portrait'><span class='k-button-icon k-icon k-i-page-portrait'></span></label>" +
	                            "<input type='radio' id='k-orientation-landscape' name='orientation' data-#:ns#type='boolean' data-#:ns#bind='checked: pdf.landscape' value='true' />" +
	                            "<label class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-group-end k-orientation-button' for='k-orientation-landscape'><span class='k-button-icon k-icon k-i-page-landscape'></span></label>" +
	                        "</div>" +
	                    "</div>" +
	                    "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.print #:</label></div>" +
	                    "<div class='k-edit-field'>" +
	                        "<input class='k-checkbox k-checkbox-md k-rounded-md' id='guidelines' type='checkbox' data-#:ns#bind='checked: pdf.guidelines'/><label class='k-checkbox-label' for='guidelines'>#: messages.exportAsDialog.labels.guidelines#</label>" +
	                    "</div>" +
	                    "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.scale #:</label></div>" +
	                    "<div class='k-edit-field'>" +
	                        "<input class='k-checkbox k-checkbox-md k-rounded-md' id='fitWidth' type='checkbox' data-#:ns#bind='checked: pdf.fitWidth'/><label class='k-checkbox-label' for='fitWidth'>#: messages.exportAsDialog.labels.fit #</label>" +
	                    "</div>" +
	                    "<div class='k-edit-label'><label>#: messages.exportAsDialog.labels.center #:</label></div>" +
	                    "<div class='k-edit-field'>" +
	                        "<input class='k-checkbox k-checkbox-md k-rounded-md' id='hCenter' type='checkbox' data-#:ns#bind='checked: pdf.hCenter'/><label class='k-checkbox-label' for='hCenter'>#: messages.exportAsDialog.labels.horizontally #</label>" +
	                        "<input class='k-checkbox k-checkbox-md k-rounded-md' id='vCenter' type='checkbox' data-#:ns#bind='checked: pdf.vCenter'/><label class='k-checkbox-label' for='vCenter'>#: messages.exportAsDialog.labels.vertically #</label>" +
	                    "</div>" +
	                    "<div class='k-page-orientation'>" +
	                        "<span class='k-icon k-i-page-portrait' data-#:ns#bind='invisible: pdf.landscape'></span>" +
	                        "<span class='k-icon k-i-page-landscape' data-#:ns#bind='visible: pdf.landscape'></span>" +
	                    "</div>" +
	                "</div>" +
	                "<div class='k-action-buttons'>" +
	                    "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: apply'><span class='k-button-text'>#: messages.save #</span></button>" +
	                    "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: close'><span class='k-button-text'>#: messages.cancel #</span></button>" +
	                "</div>"
	        },
	        apply: function() {
	            SpreadsheetDialog.fn.apply.call(this);

	            this.trigger("action", {
	                command: "SaveAsCommand",
	                options: this.viewModel
	            });
	        }
	    });
	    kendo.spreadsheet.dialogs.register("exportAs", ExportAsDialog);

	    function basicErrorDialog(id, msg) {
	        kendo.spreadsheet.dialogs.register(
	            id,
	            MessageDialog.extend({
	                options: { messageId: msg }
	            })
	        );
	    }

	    basicErrorDialog("modifyMerged", "modifyMergedDialog.errorMessage");
	    basicErrorDialog("rangeDisabled", "rangeDisabledDialog.errorMessage");
	    basicErrorDialog("intersectsArray", "intersectsArrayDialog.errorMessage");
	    basicErrorDialog("overflow", "overflowDialog.errorMessage");
	    basicErrorDialog("unsupportedSelection", "unsupportedSelectionDialog.errorMessage");
	    basicErrorDialog("incompatibleRanges", "incompatibleRangesDialog.errorMessage");
	    basicErrorDialog("noFillDirection", "noFillDirectionDialog.errorMessage");
	    basicErrorDialog("duplicateSheetName", "duplicateSheetNameDialog.errorMessage");

	    var ImportErrorDialog = MessageDialog.extend({
	        options: {
	            width: 640,
	            title: "Errors in import",
	            template:
	                "<div class='k-spreadsheet-message-content k-spreadsheet-import-errors'>" +
	                  "<div class='k--header-message'>We encountered #= errors.length # errors while reading this file.  Please be aware that some formulas might be missing, or contain invalid results.</div>" +
	                  "<div class='k--errors'>" +
	                    "<table>" +
	                      "<thead>" +
	                        "<tr><th>Context</th><th>Error message</th></tr>" +
	                      "</thead>" +
	                      "# for (var i = 0; i < errors.length; ++i) { #" +
	                        "# var err = errors[i]; #" +
	                        "<tr><td>#: err.context #</td><td>#: err.error #</td></tr>" +
	                      "# } #" +
	                    "</table>" +
	                  "</div>" +
	                "</div>" +
	                "<div class='k-action-buttons'>" +
	                  "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: close'>" +
	                    "<span class='k-button-text'>#: messages.okText #</span>" +
	                  "</button>" +
	                "</div>"
	        }
	    });

	    kendo.spreadsheet.dialogs.register("importError", ImportErrorDialog);

	    var UseKeyboardDialog = MessageDialog.extend({
	        options: {
	            title: TEXT("useKeyboardDialog.title", "Copying and pasting"),
	            template:
	                "#: messages.useKeyboardDialog.errorMessage #" +
	                "<div>Ctrl+C #: messages.useKeyboardDialog.labels.forCopy #</div>" +
	                "<div>Ctrl+X #: messages.useKeyboardDialog.labels.forCut #</div>" +
	                "<div>Ctrl+V #: messages.useKeyboardDialog.labels.forPaste #</div>" +
	                '<div class="k-action-buttons">' +
	                    "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: close'>" +
	                        "<span class='k-button-text'>#= messages.okText #</span>" +
	                    "</button>" +
	                "</div>"
	        }
	    });

	    kendo.spreadsheet.dialogs.register("useKeyboard", UseKeyboardDialog);

	    var HyperlinkDialog = SpreadsheetDialog.extend({
	        options: {
	            title: TEXT("linkDialog.title", "Hyperlink"),
	            template:
	            ("<div class='k-edit-label'><label>#: messages.linkDialog.labels.url #:</label></div>" +
	             "<div class='k-edit-field'><span class='k-textbox k-input k-input-md k-rounded-md k-input-solid'><input class='k-input-inner' data-#:ns#bind='value: url' title='#: messages.linkDialog.labels.url #' /></span></div>" +
	             "<div class='k-action-buttons'>" + (
	                 ("<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-left' data-#:ns#bind='click: remove'><span class='k-button-text'>#= messages.linkDialog.labels.removeLink #</span></button>" +
	                  "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: apply'><span class='k-button-text'>#= messages.okText #</span></button>" +
	                  "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: cancel'><span class='k-button-text'>#= messages.cancel #</span></button>")
	             ) + "</div>"
	            ),
	            autoFocus: false
	        },
	        open: function(range) {
	            var self = this;
	            SpreadsheetDialog.fn.open.apply(self, arguments);
	            var element = self.dialog().element;
	            var model = kendo.observable({
	                url: range.link(),
	                apply: function() {
	                    if (!/\S/.test(model.url)) {
	                        model.url = null;
	                    }
	                    self.trigger("action", {
	                        command: "HyperlinkCommand",
	                        options: {
	                            link: model.url
	                        }
	                    });
	                    self.close();
	                },
	                remove: function() {
	                    model.url = null;
	                    model.apply();
	                },
	                cancel: self.close.bind(self)
	            });
	            kendo.bind(element, model);

	            // it would be nice if we could easily handle that in one
	            // place for all dialogs, but it doesn't seem easily
	            // doable.
	            element.find("input")
	                .trigger("focus")
	                .on("keydown", function(ev){
	                    if (ev.keyCode == 13 /*ENTER*/) {
	                        model.url = $(this).val(); // there won't be a "change" event and the model wouldn't update :-\
	                        ev.stopPropagation();
	                        ev.preventDefault();
	                        model.apply();
	                    } else if (ev.keyCode == 27 /*ESC*/) {
	                        ev.stopPropagation();
	                        ev.preventDefault();
	                        model.cancel();
	                    }
	                });
	        }
	    });

	    kendo.spreadsheet.dialogs.register("hyperlink", HyperlinkDialog);

	    var InsertCommentDialog = SpreadsheetDialog.extend({
	        options: {
	            className: "k-spreadsheet-insert-comment",
	            template: "\
	<div class='k-edit-label'><label>#: messages.insertCommentDialog.labels.comment #:</label></div>\
	<div class='k-edit-field'><span class='k-input k-textarea k-input-solid k-input-md k-rounded-md'><textarea rows='5' class='k-input-inner' data-#:ns#bind='value: comment'></textarea></span></div>\
	<div class='k-action-buttons'>\
	  <button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-left' data-#:ns#bind='click: remove'><span class='k-button-text'>#: messages.insertCommentDialog.labels.removeComment #</span></button>\
	  <button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='click: apply'><span class='k-button-text'>#: messages.okText #</span></button>\
	  <button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: cancel'><span class='k-button-text'>#= messages.cancel #</span></button>\
	</div>\
	",
	            title: TEXT("insertCommentDialog.title", "Insert comment"),
	            autoFocus: false,
	            width: 450
	        },
	        open: function(range) {
	            var self = this;
	            SpreadsheetDialog.fn.open.apply(self, arguments);
	            var element = self.dialog().element;
	            var model = kendo.observable({
	                comment: range.comment(),
	                apply: function() {
	                    if (!/\S/.test(model.comment)) {
	                        model.comment = null;
	                    }
	                    self.trigger("action", {
	                        command: "InsertCommentCommand",
	                        options: {
	                            value: model.comment
	                        }
	                    });
	                    self.close();
	                },
	                remove: function() {
	                    model.comment = null;
	                    model.apply();
	                },
	                cancel: self.close.bind(self)
	            });
	            kendo.bind(element, model);

	            element.find("textarea").trigger("focus");
	        }
	    });

	    kendo.spreadsheet.dialogs.register("insertComment", InsertCommentDialog);

	    var InsertImageDialog = SpreadsheetDialog.extend({
	        options: {
	            template: "\
	<div class='k-spreadsheet-insert-image-dialog'>\
	  <label data-#:ns#bind='style: { background-image: imageUrl },\
	                    css: { k-spreadsheet-has-image: hasImage, k-hover: isHovered },\
	                    events: { dragenter: dragEnter, dragover: stopEvent, dragleave: dragLeave, drop: drop }'>\
	    <div data-#:ns#bind='text: info'></div>\
	    <input type='file' data-#:ns#bind='events: { change: change }'\
	           accept='image/png, image/jpeg, image/gif' />\
	  </label>\
	</div>\
	<div class='k-action-buttons'>\
	  <button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-#:ns#bind='enabled: okEnabled, click: apply'><span class='k-button-text'>#: messages.okText #</span></button>\
	  <button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-#:ns#bind='click: cancel'><span class='k-button-text'>#= messages.cancel #</span></button>\
	</div>",
	            title: TEXT("insertImageDialog.title", "Insert image"),
	            width: "auto"
	        },
	        open: function() {
	            var self = this;
	            SpreadsheetDialog.fn.open.apply(self, arguments);
	            var element = self.dialog().element;
	            var model = kendo.observable({
	                okEnabled: false,
	                info: kendo.spreadsheet.messages.dialogs.insertImageDialog.info,
	                imageUrl: "",
	                hasImage: false,
	                isHovered: false,
	                _url: null,
	                _image: null,
	                apply: function() {
	                    window.URL.revokeObjectURL(model._url);
	                    self.trigger("action", {
	                        command: "InsertImageCommand",
	                        options: {
	                            blob   : model._image,
	                            width  : model._width,
	                            height : model._height
	                        }
	                    });
	                    self.close();
	                },
	                cancel: self.close.bind(self),
	                stopEvent: function(ev) {
	                    ev.stopPropagation();
	                    ev.preventDefault();
	                },
	                drop: function(ev) {
	                    model.stopEvent(ev);
	                    model.selectFile(ev.originalEvent.dataTransfer.files);
	                    model.set("isHovered", false);
	                },
	                dragEnter: function(ev) {
	                    model.stopEvent(ev);
	                    model.set("isHovered", true);
	                },
	                dragLeave: function(ev) {
	                    model.stopEvent(ev);
	                    model.set("isHovered", false);
	                },
	                change: function(ev) {
	                    model.selectFile(ev.target.files);
	                },
	                selectFile: function(files) {
	                    var image;
	                    for (var i = 0; i < files.length; ++i) {
	                        if (/^image\//i.test(files[i].type)) {
	                            image = files[i];
	                            break;
	                        }
	                    }
	                    if (model._url) {
	                        window.URL.revokeObjectURL(model._url);
	                    }
	                    if (image) {
	                        model._image = image;
	                        model._url = window.URL.createObjectURL(image);
	                        var img = new Image();
	                        img.src = model._url;
	                        img.onload = function() {
	                            model._width = img.width;
	                            model._height = img.height;
	                            model.set("info", kendo.spreadsheet.messages.dialogs.insertImageDialog.info);
	                            model.set("okEnabled", true);
	                            model.set("imageUrl", "url('" + model._url + "')");
	                            model.set("hasImage", true);
	                        };
	                    } else {
	                        model._image = null;
	                        model.set("info", kendo.spreadsheet.messages.dialogs.insertImageDialog.typeError);
	                        model.set("okEnabled", false);
	                        model.set("imageUrl", "");
	                        model.set("hasImage", false);
	                    }
	                }
	            });
	            kendo.bind(element, model);
	        }
	    });

	    kendo.spreadsheet.dialogs.register("insertImage", InsertImageDialog);

	    function Localizable(path, def) {
	        this.path = path.split(".");
	        this.def = def;
	    }

	    Localizable.prototype.trans = function() {
	        var msg = kendo.spreadsheet.messages.dialogs;
	        for (var i = 0; i < this.path.length; ++i) {
	            msg = msg[this.path[i]];
	            if (!msg) {
	                return this.def;
	            }
	        }
	        return msg;
	    };

	    function TEXT(path, def) {
	        return new Localizable(path, def);
	    }

	    function translate(thing) {
	        if (thing instanceof Localizable) {
	            return thing.trans();
	        }
	        else if (Array.isArray(thing)) {
	            return thing.map(translate);
	        }
	        else if (thing != null && typeof thing == "object") {
	            return Object.keys(thing).reduce(function(ret, key){
	                ret[key] = translate(thing[key]);
	                return ret;
	            }, {});
	        }
	        return thing;
	    }

	})(window.kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });