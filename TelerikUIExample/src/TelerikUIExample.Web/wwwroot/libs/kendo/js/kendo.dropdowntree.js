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

	module.exports = __webpack_require__(1216);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1058:
/***/ (function(module, exports) {

	module.exports = require("./kendo.popup");

/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

	module.exports = require("./html/button");

/***/ }),

/***/ 1109:
/***/ (function(module, exports) {

	module.exports = require("./html/input");

/***/ }),

/***/ 1115:
/***/ (function(module, exports) {

	module.exports = require("./kendo.binder");

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1217), __webpack_require__(1058), __webpack_require__(1115), __webpack_require__(1218), __webpack_require__(1219), __webpack_require__(1095), __webpack_require__(1109) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "dropdowntree",
	    name: "DropDownTree",
	    category: "web",
	    description: "The DropDownTree widget displays a hierarchy of items and allows the selection of single or multiple items.",
	    depends: [ "treeview", "popup", "binder" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        html = kendo.html,
	        Widget = ui.Widget,
	        TreeView = ui._dropdowntree,
	        ObservableArray = kendo.data.ObservableArray,
	        ObservableObject = kendo.data.ObservableObject,
	        extend = $.extend,
	        activeElement = kendo._activeElement,
	        ns = ".kendoDropDownTree",
	        keys = kendo.keys,
	        support = kendo.support,
	        HIDDENCLASS = "k-hidden",
	        WIDTH = "width",
	        browser = support.browser,
	        outerWidth = kendo._outerWidth,
	        DOT = ".",
	        DISABLED = "disabled",
	        READONLY = "readonly",
	        STATEDISABLED = "k-disabled",
	        ARIA_DISABLED = "aria-disabled",
	        HOVER = "k-hover",
	        FOCUSED = "k-focus",
	        HOVEREVENTS = "mouseenter" + ns + " mouseleave" + ns,
	        TABINDEX = "tabindex",
	        CLICK = "click",
	        OPEN = "open",
	        CLOSE = "close",
	        CHANGE = "change",
	        quotRegExp = /"/g,
	        proxy = $.proxy,
	        LABELIDPART = "_label",

	        CHIP = ".k-chip";

	    var DropDownTree = kendo.ui.Widget.extend( {
	        init: function(element, options) {
	            this.ns = ns;

	            kendo.ui.Widget.fn.init.call(this, element, options);
	            this._selection = this._getSelection();
	            this._focusInputHandler = $.proxy(this._focusInput, this);
	            this._initial = this.element.val();

	            this._values = [];

	            var value = this.options.value;

	            if (value === null || !value.length) {
	                this._noInitialValue = true;
	            }

	            if (!this._isNullorUndefined(value)) {
	                this._valueMethodCalled = true;
	                this._values = Array.isArray(value) ? value.slice(0) : [value];
	            }

	            this._inputTemplate();

	            this._accessors();
	            this._setTreeViewOptions(this.options);
	            this._dataSource();
	            this._selection._initWrapper();
	            this._applyCssClasses();
	            this._placeholder(true);
	            this._tabindex();
	            this.wrapper.data(TABINDEX, this.wrapper.attr(TABINDEX));

	            this.tree = $('<div/>')
	            .attr({
	                tabIndex: -1,
	                "aria-hidden": true
	            });

	            this.list = $("<div class='k-list-container'/>")
	                .append(this.tree);

	            this._header();
	            this._noData();
	            this._footer();
	            this._reset();
	            this._popup();
	            this.popup.one("open", proxy(this._popupOpen, this));
	            this._clearButton();
	            this._filterHeader();
	            this._treeview();

	            this._renderFooter();

	            this._checkAll();
	            this._enable();
	            this._toggleCloseVisibility();

	            this._aria();

	            if (!this.options.autoBind) {
	                var text = options.text || "";
	                if (!this._isNullorUndefined(options.value)) {
	                    this._preselect(options.value);
	                } else if (text) {
	                    this._textAccessor(text);
	                } else if (options.placeholder) {
	                    this._placeholder(true);
	                }
	            }

	            var disabled = $(this.element).parents("fieldset").is(':disabled');

	            if (disabled) {
	                this.enable(false);
	            }
	            this._valueMethodCalled = false;
	            kendo.notify(this);
	        },

	        _preselect: function(data, value){
	            this._selection._preselect(data, value);
	        },

	        _setTreeViewOptions: function(options) {
	            var treeviewOptions = {
	                autoBind: options.autoBind,
	                checkboxes: options.checkboxes,
	                dataImageUrlField: options.dataImageUrlField,
	                dataSpriteCssClassField: options.dataSpriteCssClassField,
	                dataTextField: options.dataTextField,
	                dataUrlField: options.dataUrlField,
	                loadOnDemand: options.loadOnDemand,
	                size: options.size
	            };

	            this.options.treeview = $.extend({}, treeviewOptions, this.options.treeview);

	            if (options.template) {
	                this.options.treeview.template = options.template;
	            }

	            if (options.size) {
	                this.options.treeview.size = options.size;
	            }
	        },

	        _dataSource: function() {
	            var rootDataSource = this.options.dataSource;

	            this.dataSource = kendo.data.HierarchicalDataSource.create(rootDataSource);
	            if (rootDataSource) {
	                $.extend(this.options.treeview,{
	                    dataSource: this.dataSource
	                });
	            }
	        },

	        _popupOpen: function() {
	            var popup = this.popup;
	            popup.wrapper = kendo.wrap(popup.element);
	        },

	        _getSelection: function() {
	            if (this._isMultipleSelection()) {
	                this.options._altname = "MultiSelectDropDownTree";
	                return new ui.DropDownTree.MultipleSelection(this);
	            } else {
	                return new ui.DropDownTree.SingleSelection(this);
	            }
	        },

	        setDataSource: function(dataSource) {
	            this._isDataSourceSet = true;
	            if(this._tags){
	                this._noInitialValue = true;
	                this.setValue([]);
	                this._tags.empty();
	                this.span.show();
	                this._multipleTags.empty();
	            }
	            this.dataSource = dataSource;
	            this.treeview.setDataSource(dataSource);
	            this._isDataSourceSet = false;
	        },

	        _isMultipleSelection: function() {
	            return this.options && (this.options.treeview.checkboxes || this.options.checkboxes);
	        },

	        options: {
	            name: "DropDownTree",
	            animation: {},
	            autoBind: true,
	            autoClose: true,
	            autoWidth: false,
	            clearButton: true,
	            dataTextField: "",
	            dataValueField: "",
	            dataImageUrlField: "",
	            dataSpriteCssClassField: "",
	            dataUrlField: "",
	            delay: 500,
	            enabled: true,
	            enforceMinLength: false,
	            filter: "none",
	            height: 200,
	            ignoreCase: true,
	            index: 0,
	            loadOnDemand: false,
	            messages: {
	                "singleTag": "item(s) selected",
	                "clear": "clear",
	                "deleteTag": "delete",
	                "noData": "No data found."
	            },
	            minLength: 1,
	            checkboxes: false,
	            noDataTemplate: true,
	            placeholder: "",
	            checkAll:false,
	            checkAllTemplate: "Check all",
	            tagMode: "multiple",
	            template: null,
	            text: null,
	            treeview: {},
	            valuePrimitive: false,
	            footerTemplate: "",
	            headerTemplate: "",
	            value: null,
	            valueTemplate: null,
	            popup: null,
	            filterLabel: null,
	            size: "medium",
	            fillMode: "solid",
	            rounded: "medium"
	        },

	        events: [
	            "open",
	            "close",
	            "dataBound",
	            CHANGE,
	            "select",
	            "filtering"
	        ],

	        focus: function() {
	            this.wrapper.trigger("focus");
	        },

	        dataItem: function (node){
	            return this.treeview.dataItem(node);
	        },

	        readonly: function(readonly) {
	            this._editable({
	                readonly: readonly === undefined ? true : readonly,
	                disable: false
	            });
	            this._toggleCloseVisibility();
	        },

	        enable: function(enable) {
	            this._editable({
	                readonly: false,
	                disable: !(enable = enable === undefined ? true : enable)
	            });
	            this._toggleCloseVisibility();
	        },

	        toggle: function(open) {
	            this._toggle(open);
	        },

	        open: function() {
	            var popup = this.popup;

	            if(!this.options.autoBind && !this.dataSource.data().length){
	                this.treeview._progress(true);
	                if(this._isFilterEnabled()){
	                    this._search();
	                } else {
	                    this.dataSource.fetch();
	                }
	            }

	            if (popup.visible() || !this._allowOpening()) {
	                return;
	            }

	            if(this._isMultipleSelection()){
	                popup.element.addClass("k-multiple-selection");
	            }
	            popup.element.addClass("k-popup-dropdowntree");

	            popup.one("activate", this._focusInputHandler);
	            popup._hovered = true;
	            popup.open();
	        },

	        close: function() {
	            this.popup.close();
	        },

	        search: function(word) {
	            var options = this.options;
	            var filter;
	            clearTimeout(this._typingTimeout);

	            if ((!options.enforceMinLength && !word.length) || word.length >= options.minLength) {
	                filter = this._getFilter(word);
	                if(this.trigger("filtering", { filter: filter }) ||
	                 Array.isArray(this.options.dataTextField)){
	                    return;
	                }

	                this._filtering = true;
	                this.treeview.dataSource.filter(filter);
	            }
	        },

	        _getFilter: function (word){
	            return {
	                field: this.options.dataTextField,
	                operator: this.options.filter,
	                value: word,
	                ignoreCase: this.options.ignoreCase
	              };
	        },

	        refresh: function() {
	            var data = this.treeview.dataSource.flatView();
	            this._renderFooter();
	            this._renderNoData();
	            if (this.filterInput && this.checkAll) {
	                this.checkAll.toggle(!this.filterInput.val().length);
	            }

	            this.tree.toggle(!!data.length);
	            $(this.noData).toggle(!data.length);
	        },

	        setOptions: function(options) {
	            Widget.fn.setOptions.call(this, options);

	            this._setTreeViewOptions(options);
	            this._dataSource();
	            if (this.options.treeview || options.size) {
	                this.treeview.setOptions(this.options.treeview);
	            }

	            if (options.height && this.tree) {
	                this.tree.css('max-height', options.height);
	            }

	            this._header();
	            this._noData();
	            this._footer();

	            this._renderFooter();
	            this._renderNoData();
	            if (this.span && (this._isMultipleSelection() || this.span.hasClass("k-readonly"))) {
	                this._placeholder(true);
	            }
	            this._inputTemplate();
	            this._accessors();
	            this._filterHeader();
	            this._checkAll();
	            this._enable();
	            if (options && (options.enable || options.enabled)) {
	                this.enable(true);
	            }
	            this._clearButton();
	        },

	        destroy: function() {
	            kendo.ui.Widget.fn.destroy.call(this);
	            if(this.treeview){
	                this.treeview.destroy();
	            }
	            this.popup.destroy();

	            this.wrapper.off(ns);
	            this._clear.off(ns);
	            if (this.filterInput) {
	                this.filterInput.off(ns);
	            }

	            if(this.tagList){
	                this.tagList.off(ns);
	            }

	            kendo.unbind(this.tagList);
	            if (this.options.checkAll && this.checkAll) {
	                this.checkAll.off(ns);
	            }

	            if (this._form) {
	                this._form.off("reset", this._resetHandler);
	            }
	        },

	        setValue: function(value) {
	            value = Array.isArray(value) || value instanceof ObservableArray ? value.slice(0) : [value];

	            this._values = value;
	        },

	        items: function() {
	            return this.treeview.items();
	        },

	        value: function(value) {
	            var that = this;

	            if(value){
	                if(that.filterInput && that.dataSource._filter){
	                    that._filtering = true;
	                    that.dataSource.filter({});
	                } else if (!that.dataSource.data().length || !that.treeview.dataSource.data().length){
	                    that.dataSource.fetch(function() {
	                        if(that.options.loadOnDemand){
	                            that._selection._setValue(value);
	                        } else {
	                            that.one('allNodesAreLoaded', function(){
	                                that._selection._setValue(value);
	                            });
	                        }
	                    });

	                    return;
	                }
	            }

	            return that._selection._setValue(value);
	        },

	        text: function(text) {
	            var loweredText;
	            var ignoreCase = this.options.ignoreCase;

	            text = text === null ? "" : text;

	            if (text !== undefined && !this._isMultipleSelection()) {
	                if (typeof text !== "string") {
	                    this._textAccessor(text);
	                    return;
	                }

	                loweredText = ignoreCase ? text : text.toLowerCase();

	                this._selectItemByText(loweredText);

	                this._textAccessor(loweredText);
	            } else {
	                return this._textAccessor();
	            }
	        },

	        _aria: function() {
	            var input = this.wrapper.find("span.k-input-inner");

	            this.wrapper.attr({
	                "aria-haspopup": "tree",
	                "aria-expanded": false,
	                "aria-owns": this.treeview.element.attr("id"),
	                "role": "listbox"
	            });

	            this._activeId = kendo.guid();
	            this._ariaLabel();

	            if(!this.options.checkboxes && input.text().length) {
	                input.attr("role", "option");
	                input.attr("aria-selected", "true");
	                input.attr("id", this._activeId);

	                this.wrapper.attr("aria-activedescendant", this._activeId);
	            } else if(this.options.checkboxes) {
	                this.wrapper.attr({
	                    "aria-multiselectable": true,
	                    "aria-describedby": this.tagList[0].id
	                });

	                this.tagList.attr("role", "none");
	            }
	        },

	        _ariaLabel: function(){
	            var inputElm = this.element,
	                inputId = inputElm.attr("id"),
	                wrapper = this.wrapper,
	                labelElm = $("label[for=\"" + inputId  + "\"]"),
	                ariaLabel = inputElm.attr("aria-label"),
	                ariaLabelledBy = inputElm.attr("aria-labelledby"),
	                labelId;

	            if (ariaLabel) {
	                wrapper.attr("aria-label", ariaLabel);
	            } else if (ariaLabelledBy){
	                wrapper.attr("aria-labelledby", ariaLabelledBy);
	            } else if (labelElm.length){
	                labelId = labelElm.attr("id") || this._generateLabelId(labelElm, inputId || kendo.guid());
	                wrapper.attr("aria-labelledby", labelId);
	            }

	            if(this.filterInput && this.options.filterLabel) {
	                this.filterInput.attr("aria-label", this.options.filterLabel);
	            }
	        },

	        _generateLabelId: function(label, inputId){
	            var labelId = inputId + LABELIDPART;

	            label.attr("id", labelId);

	            return labelId;
	        },

	        _header: function() {
	            var list = this;
	            var header = $(list.header);
	            var template = list.options.headerTemplate;

	            this._angularElement(header, "cleanup");
	            kendo.destroy(header);
	            header.remove();

	            if (!template) {
	                list.header = null;
	                return;
	            }

	            var headerTemplate = typeof template !== "function" ? kendo.template(template) : template;
	            header = $(headerTemplate({}));

	            list.header = header[0] ? header : null;
	            list.list.prepend(header);

	            this._angularElement(list.header, "compile");
	        },

	        _noData: function() {
	            var list = this;
	            var noData = $(list.noData);
	            var template = list.options.noDataTemplate === true ?  list.options.messages.noData : list.options.noDataTemplate;

	            list.angular("cleanup", function() { return { elements: noData }; });
	            kendo.destroy(noData);
	            noData.remove();

	            if (!template) {
	                list.noData = null;
	                return;
	            }

	            list.noData = $('<div class="k-no-data" style="display: none;"></div>').appendTo(list.list);
	            list.noDataTemplate = typeof template !== "function" ? kendo.template(template) : template;
	        },

	        _renderNoData: function() {
	            var list = this;
	            var noData = list.noData;

	            if (!noData) {
	                return;
	            }

	            this._angularElement(noData, "cleanup");
	            noData.html(list.noDataTemplate({ instance: list }));
	            this._angularElement(noData, "compile");
	        },

	        _footer: function() {
	            var list = this;
	            var footer = $(list.footer);
	            var template = list.options.footerTemplate;

	            this._angularElement(footer, "cleanup");
	            kendo.destroy(footer);
	            footer.remove();

	            if (!template) {
	                list.footer = null;
	                return;
	            }

	            list.footer = $('<div class="k-footer"></div>').appendTo(list.list);
	            list.footerTemplate = typeof template !== "function" ? kendo.template(template) : template;
	        },

	        _renderFooter: function() {
	            var list = this;
	            var footer = list.footer;

	            if (!footer) {
	                return;
	            }

	            this._angularElement(footer, "cleanup");
	            footer.html(list.footerTemplate({ instance: list }));
	            this._angularElement(footer, "compile");
	        },

	        _enable: function() {
	            var that = this,
	                options = that.options,
	                disabled = that.element.is("[disabled]");

	            if (options.enable !== undefined) {
	                options.enabled = options.enable;
	            }

	            if (!options.enabled || disabled) {
	                that.enable(false);
	            } else {
	                that.readonly(that.element.is("[readonly]"));
	            }
	        },

	        _adjustListWidth: function() {
	            var that = this,
	                list = that.list,
	                width = list[0].style.width,
	                wrapper = that.wrapper,
	                computedStyle, computedWidth;

	            if (!list.data(WIDTH) && width) {
	                return;
	            }

	            computedStyle = window.getComputedStyle ? window.getComputedStyle(wrapper[0], null) : 0;
	            computedWidth = parseFloat(computedStyle  && computedStyle.width) || outerWidth(wrapper);

	            if (computedStyle && browser.msie) { // getComputedStyle returns different box in IE.
	                computedWidth += parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight) + parseFloat(computedStyle.borderLeftWidth) + parseFloat(computedStyle.borderRightWidth);
	            }

	            if (list.css("box-sizing") !== "border-box") {
	                width = computedWidth - (outerWidth(list) - list.width());
	            } else {
	                width = computedWidth;
	            }

	            list.css({
	                fontFamily: wrapper.css("font-family"),
	                width: that.options.autoWidth ? "auto" : width,
	                minWidth: width,
	                whiteSpace: that.options.autoWidth ? "nowrap" : "normal"
	            })
	            .data(WIDTH, width);

	            return true;
	        },

	        _reset: function() {
	            var that = this,
	                element = that.element,
	                formId = element.attr("form"),
	                form = formId ? $("#" + formId) : element.closest("form");

	            if (form[0]) {
	                that._resetHandler = function() {
	                    setTimeout(function() {
	                        that.value(that._initial);
	                    });
	                };

	                that._form = form.on("reset", that._resetHandler);
	            }
	        },

	        _popup: function() {
	            var list = this;

	            if(list.options.checkboxes && list.options.checkAll) {
	                list.list.attr("role", "application");
	            }

	            list.popup = new ui.Popup(list.list, extend({}, list.options.popup, {
	                anchor: list.wrapper,
	                open: proxy(list._openHandler, list),
	                close: proxy(list._closeHandler, list),
	                animation: list.options.animation,
	                isRtl: support.isRtl(list.wrapper),
	                autosize :list.options.autoWidth
	            }));
	        },

	        _angularElement: function(element, action) {
	            if (!element) {
	                return;
	            }

	            this.angular(action, function() {
	                return { elements: element };
	            });
	        },

	        _allowOpening: function() {
	            return this.options.noDataTemplate || this.treeview.dataSource.flatView().length;
	        },

	        _placeholder: function(show) {
	            if (this.span) {
	                this.span.toggleClass("k-readonly", show).text(show? this.options.placeholder: "");
	            }

	            if(this.span.text().trim().length > 0) {
	                this.span.parent().attr({
	                    role: "option",
	                    "aria-selected": true
	                });
	            } else {
	                this.span.parent().removeAttr("role");
	                this.span.parent().removeAttr("aria-selected");
	            }
	        },

	        _currentValue: function(dataItem) {
	            var currentValue = this._value(dataItem);
	            if (!currentValue && currentValue !== 0) {
	                currentValue = dataItem;
	            }

	            return currentValue;
	        },

	        _checkValue: function(dataItem) {
	            var value = "";
	            var indexOfValue = -1;
	            var currentValue = this.value();
	            var isMultiple = this.options.tagMode === "multiple";

	            if (dataItem || dataItem === 0) {
	                if(dataItem.level){
	                    dataItem._level = dataItem.level();
	                }

	                value = this._currentValue(dataItem);

	                indexOfValue = currentValue.indexOf(value);
	            }

	            if (dataItem.checked) {
	                var alreadyAddedTag = $.grep(this._tags, function( item ) {
	                    return item.uid === dataItem._tagUid;
	                });

	                if (alreadyAddedTag.length){
	                    return;
	                }

	                var itemToAdd = new ObservableObject(dataItem.toJSON());
	                dataItem._tagUid = itemToAdd.uid;
	                this._tags.push(itemToAdd);

	                if (this._tags.length === 1) {
	                    this.span.hide();

	                    if (!isMultiple) {
	                        this._multipleTags.push(itemToAdd);
	                    }
	                }

	                if (indexOfValue === -1) {
	                    currentValue.push(value);
	                    this.setValue(currentValue);
	                }
	            } else {
	                var itemToRemove = this._tags.find(function(item){
	                    return item.uid === dataItem._tagUid;
	                });

	                var idx = this._tags.indexOf(itemToRemove);

	                if (idx !== -1) {
	                    this._tags.splice(idx, 1);
	                } else {
	                    this._treeViewCheckAllCheck(dataItem);
	                    return;
	                }

	                if (this._tags.length === 0) {
	                    this.span.show();
	                    if (!isMultiple) {
	                        this._multipleTags.splice(0, 1);
	                    }
	                }
	                if (indexOfValue !== -1) {
	                    currentValue.splice(indexOfValue, 1);
	                    this.setValue(currentValue);
	                }
	            }

	            this._treeViewCheckAllCheck(dataItem);
	            if (!this._preventChangeTrigger && !this._valueMethodCalled && !this._noInitialValue) {
	                this.trigger(CHANGE);
	            }

	            if (this.options.autoClose && this.popup.visible()) {
	                this.close();
	                this.wrapper.trigger("focus");
	            }
	            this.popup.position();
	            this._toggleCloseVisibility();
	            this._updateSelectedOptions();
	        },

	        _updateSelectedOptions: function(){
	            if(this.element[0].tagName.toLowerCase() !== 'select'){
	                return;
	            }

	            var selectedItems = this._tags;
	            var options = '';
	            var dataItem = null;
	            var value = null;

	            if (selectedItems.length) {
	                for (var idx = 0; idx < selectedItems.length; idx++) {
	                    dataItem = selectedItems[idx];

	                    value = this._value(dataItem);
	                    options += this._option(value, this._text(dataItem), true);
	                }
	            }

	            this.element.html(options);
	        },

	        _option: function(dataValue, dataText, selected) {
	            var option = "<option";

	            if (dataValue !== undefined) {
	                dataValue += "";

	                if (dataValue.indexOf('"') !== -1) {
	                    dataValue = dataValue.replace(quotRegExp, "&quot;");
	                }

	                option += ' value="' + dataValue + '"';
	            }

	            if (selected) {
	                option += ' selected';
	            }

	            option += ">";

	            if (dataText !== undefined) {
	                option += kendo.htmlEncode(dataText);
	            }

	            return option += "</option>";
	        },

	        _selectValue: function(dataItem) {
	            var value = "";
	            var text = "";

	            if (dataItem || dataItem === 0) {
	                if(dataItem.level){
	                    dataItem._level = dataItem.level();
	                }
	                text = this._text(dataItem) || dataItem;
	                value = this._currentValue(dataItem);
	            }

	            if (value === null) {
	                value = "";
	            }
	            this.setValue(value);
	            this._textAccessor(text, dataItem);
	            this._accessor(value);

	            if(!this._preventChangeTrigger && !this._valueMethodCalled){
	                this.trigger(CHANGE);
	            }
	            this._valueMethodCalled = false;

	            if (this.options.autoClose && this.popup.visible()) {
	                this.close();
	                this.wrapper.trigger("focus");
	            }
	            this.popup.position();
	            this._toggleCloseVisibility();
	        },

	        _clearClick: function(e) {
	            e.stopPropagation();
	            this.wrapper.trigger("focus");
	            this._clearTextAndValue();
	        },

	        _clearTextAndValue: function() {
	            this.setValue([]);
	            this._clearInput();
	            this._clearText();
	            this._selection._clearValue();
	            this.popup.position();
	            this._toggleCloseVisibility();
	        },

	        _clearText: function() {
	            if (this.options.placeholder) {
	                this._placeholder(true);
	            } else {
	                if (this.span) {
	                    this.span.html("");
	                }
	            }
	        },

	        _inputTemplate: function() {
	            var template = this.options.valueTemplate;

	            if (!template) {
	                template = $.proxy(kendo.template('#:this._text(data)#', { useWithBlock: false }), this);
	            } else {
	                template = kendo.template(template);
	            }

	            this.valueTemplate = template;
	        },

	        _assignInstance: function(text, value) {
	            var dataTextField = this.options.dataTextField;
	            var dataItem = {};

	            if (dataTextField) {
	                assign(dataItem, dataTextField.split(DOT), text);
	                assign(dataItem, this.options.dataValueField.split(DOT), value);
	                dataItem = new ObservableObject(dataItem);
	            } else {
	                dataItem = text;
	            }

	            return dataItem;
	        },

	        _textAccessor: function(text, dataItem) {
	            var valueTemplate = this.valueTemplate;
	            var span = this.span;

	            if (text === undefined) {
	                return span.text();
	            }

	            span.removeClass("k-readonly");

	            if (!dataItem && ($.isPlainObject(text) || text instanceof ObservableObject)) {
	                dataItem = text;
	            }

	            if (!dataItem) {
	                dataItem = this._assignInstance(text, this._accessor());
	            }

	            var getElements = function() {
	                return {
	                    elements: span.get(),
	                    data: [ { dataItem: dataItem } ]
	                };
	            };

	            this.angular("cleanup", getElements);

	            try {
	                span.html(valueTemplate(dataItem));
	            } catch(e) {
	                //dataItem has missing fields required in custom template
	                if (span) {
	                    span.html("");
	                }
	            }

	            this.angular("compile", getElements);
	        },

	        _accessors: function() {
	            var element = this.element;
	            var options = this.options;
	            var getter = kendo.getter;
	            var textField = element.attr(kendo.attr("text-field"));
	            var valueField = element.attr(kendo.attr("value-field"));

	            var getterFunction = function (field) {
	                if (Array.isArray(field)) {
	                    var count = field.length;
	                    var levels = $.map(field, function(x) {
	                        return function(d){ return d[x];};
	                    });

	                    return function (dataItem) {
	                        var level = dataItem._level;

	                        if(!level && level !== 0){
	                            return;
	                        }

	                        return levels[Math.min(level, count-1)](dataItem);
	                    };
	                } else {
	                    return getter(field);
	                }
	            };

	            if (!options.dataTextField && textField) {
	                options.dataTextField = textField;
	            }

	            if (!options.dataValueField && valueField) {
	                options.dataValueField = valueField;
	            }

	            options.dataTextField = options.dataTextField || "text";
	            options.dataValueField = options.dataValueField || "value";

	            this._text = getterFunction(options.dataTextField);
	            this._value = getterFunction(options.dataValueField);
	        },

	        _accessor: function(value, idx) {
	            return this._accessorInput(value, idx);
	        },

	        _accessorInput: function(value) {
	            var element = this.element[0];

	            if (value === undefined) {
	                return element.value;
	            } else {
	                if (value === null) {
	                    value = "";
	                }
	                element.value = value;
	            }
	        },

	        _clearInput: function() {
	            var element = this.element[0];
	            element.value = "";
	        },

	        _clearButton: function() {
	            var clearTitle = this.options.messages.clear;

	            if(!this._clear){
	                this._clear = $('<span unselectable="on" class="k-clear-value" title="' + clearTitle + '"><span class="k-icon k-i-x"></span></span>').attr({
	                    "role": "button",
	                    "tabIndex": -1
	                });
	            }

	            if (this.options.clearButton) {
	                this._clear.insertAfter(this.tagList || this.span.parent());
	                this.wrapper.addClass("k-dropdowntree-clearable");
	            } else {
	                if (!this.options.clearButton) {
	                    this._clear.remove();
	                }
	            }
	        },

	        _toggleCloseVisibility: function() {
	            var isReadOnly = this.element.attr(READONLY);
	            var hasValue = (this.value() && !this._isMultipleSelection()) || this.value().length;
	            var valueDoesNotEqualPlaceHolder = this.element.val() && this.element.val() !== this.options.placeholder;

	            if ((!isReadOnly && (hasValue || valueDoesNotEqualPlaceHolder))) {
	                this._showClear();
	            } else {
	                this._hideClear();
	            }
	        },

	        _showClear: function() {
	            if(this._clear) {
	                this._clear.removeClass(HIDDENCLASS);
	            }
	        },

	        _hideClear: function() {
	            if(this._clear) {
	                this._clear.addClass(HIDDENCLASS);
	            }
	        },

	        _openHandler: function(e) {
	            this._adjustListWidth();

	            if (this.trigger(OPEN)) {
	                e.preventDefault();
	            } else {
	                 this.wrapper.attr("aria-expanded", true);
	                 this.tree.attr("aria-hidden", false).attr("role", "tree");
	            }
	        },

	        _closeHandler: function(e) {
	            if (this.trigger(CLOSE)) {
	                e.preventDefault();
	            } else {
	                 this.wrapper.attr("aria-expanded", false);
	                 this.tree.attr("aria-hidden", true);
	            }
	        },

	        _treeview: function() {
	            var that = this;
	            if (that.options.height) {
	                that.tree.css('max-height',that.options.height);
	            }
	            that.tree.attr('id', kendo.guid());
	            that.treeview = new TreeView(that.tree, extend({ size: that.options.size }, that.options.treeview), that);
	            that.dataSource = that.treeview.dataSource;

	            that.treeview.bind("select",function(e) {
	                that.trigger("select", e);
	            });
	        },

	        _treeViewDataBound: function(e) {
	            if (e.node && this._prev && this._prev.length) {
	                e.sender.expand(e.node);
	            }

	            if(this._filtering){
	                if(!e.node){
	                    this._filtering = false;
	                }

	                if (!this._isMultipleSelection()) {
	                    this._deselectItem(e);
	                }
	                return;
	            }

	            if (!this.treeview) {
	                this.treeview = e.sender;
	            }

	            if (!e.node) {
	                var rootItems = e.sender.dataSource.data();

	                this._checkLoadedItems(rootItems);
	                if(this._noInitialValue){
	                    this._noInitialValue = false;
	                }
	            } else {
	                var rootItem = e.sender.dataItem(e.node);
	                if (rootItem) {
	                    var subItems = rootItem.children.data();
	                    this._checkLoadedItems(subItems);
	                }
	            }
	            this.trigger("dataBound", e);
	        },

	        _deselectItem: function(e){
	            var items = [];
	            if (!e.node) {
	                items = e.sender.dataSource.data();
	            } else {
	                var rootItem = e.sender.dataItem(e.node);
	                if (rootItem) {
	                    items = rootItem.children.data();
	                }
	            }

	            for (var i = 0; i < items.length; i++) {
	                if (items[i].selected &&
	                    !this._valueComparer(items[i], this.value())) {
	                    items[i].set("selected", false);
	                }
	            }
	        },

	        _checkLoadedItems: function(items) {
	            var value = this.value();

	            if(!items){
	                return;
	            }

	            for (var idx = 0; idx < items.length; idx++) {
	                this._selection._checkLoadedItem(items[idx], value);
	            }
	        },

	        _treeViewCheckAllCheck: function(dataItem) {
	            if (this.options.checkAll && this.checkAll) {
	                this._getAllChecked();

	                if (dataItem.checked) {
	                    this._checkCheckAll();
	                } else {
	                    this._uncheckCheckAll();
	                }
	            }
	        },

	        _checkCheckAll: function() {
	            var checkAllCheckbox = this.checkAll.find('.k-checkbox');

	            if (this._allItemsAreChecked) {
	                checkAllCheckbox.prop('checked', true)
	                                .prop('indeterminate', false);
	            } else {
	                checkAllCheckbox.prop('indeterminate', true);
	            }
	        },

	        _uncheckCheckAll: function() {
	            var checkAllCheckbox = this.checkAll.find('.k-checkbox');

	            if (this._allItemsAreUnchecked) {
	                checkAllCheckbox.prop('checked', false)
	                                .prop('indeterminate', false);
	            } else {
	                checkAllCheckbox.prop('indeterminate', true);
	            }
	        },

	        _filterHeader: function() {
	            var filterTemplate = '<div class="k-list-filter">' +
	                '<span class="k-searchbox k-input k-input-md k-rounded-md k-input-solid" type="text" autocomplete="off">' +
	                    '<span class="k-input-icon k-icon k-i-search"></span>' +
	                '</span>' +
	            '</div>';

	            if (this.filterInput) {
	                this.filterInput
	                    .off(ns)
	                    .parent()
	                    .remove();

	                this.filterInput = null;
	            }

	            if (this._isFilterEnabled()) {
	                this._disableCheckChildren();

	                this.filterInput = $('<input class="k-input-inner" type="text" />')
	                    .attr({
	                        placeholder: this.element.attr("placeholder"),
	                        title: this.element.attr("title"),
	                        role: "searchbox",
	                        "aria-haspopup": "listbox",
	                        "aria-autocomplete": "list"
	                    });

	                this.filterInput.on("input" , proxy(this._filterChange, this));

	                $(filterTemplate)
	                    .insertBefore(this.tree)
	                    .find(".k-searchbox")
	                    .append(this.filterInput);
	            }
	        },

	        _filterChange: function() {
	            if (this.filterInput) {
	                this._search();
	            }
	        },

	        _disableCheckChildren: function() {
	            if (this._isMultipleSelection() && this.options.treeview.checkboxes && this.options.treeview.checkboxes.checkChildren) {
	                this.options.treeview.checkboxes.checkChildren = false;
	            }
	        },

	        _checkAll: function() {
	            if (this.checkAll) {
	                this.checkAll.find(".k-checkbox-label, .k-checkbox")
	                    .off(ns);
	                this.checkAll.remove();

	                this.checkAll = null;
	            }

	            if (this._isMultipleSelection() && this.options.checkAll) {
	                var checkAllCheckbox = html.renderCheckBox(extend({}, this.options, {
	                    label: "Check All",
	                    rounded: "medium"
	                }));
	                this.checkAll = $('<div class="k-check-all">' + checkAllCheckbox + '</div>').insertBefore(this.tree);
	                this.checkAll.find(".k-checkbox-label").html(kendo.template(this.options.checkAllTemplate)({ instance: this }));
	                this.checkAll.find(".k-checkbox")
	                                .on("change" + ns, proxy(this._changeCheckAll, this))
	                                .on("keydown" + ns, proxy(this._keydownCheckAll, this));
	                this._disabledCheckedItems = [];
	                this._disabledUnCheckedItems = [];

	                this._getAllChecked();

	                if (!this._allItemsAreUnchecked) {
	                    this._checkCheckAll();
	                }
	            }
	        },

	        _changeCheckAll: function() {
	            var checkAllCheckbox = this.checkAll.find('.k-checkbox');
	            var isChecked = checkAllCheckbox.prop('checked');

	            this._updateCheckAll(isChecked);
	        },

	        _updateCheckAll: function(isChecked) {
	            var checkAllCheckbox = this.checkAll.find('.k-checkbox');
	            this._toggleCheckAllItems(isChecked);
	            checkAllCheckbox.prop('checked', isChecked);
	            if (this._disabledCheckedItems.length && this._disabledUnCheckedItems.length) {
	                checkAllCheckbox.prop('indeterminate', true);
	            } else if (this._disabledCheckedItems.length) {
	                checkAllCheckbox.prop('indeterminate', !isChecked);
	            } else if (this._disabledUnCheckedItems.length) {
	                checkAllCheckbox.prop('indeterminate', isChecked);
	            } else {
	                checkAllCheckbox.prop('indeterminate', false);
	            }
	            this._disabledCheckedItems = [];
	            this._disabledUnCheckedItems = [];
	        },

	        _keydownCheckAll: function(e) {
	            var key = e.keyCode;
	            var altKey = e.altKey;

	            if ((altKey && key === keys.UP) || key === keys.ESC || key === keys.TAB) {
	                this.close();
	                this.wrapper.trigger("focus");
	                e.preventDefault();
	                return;
	            }

	            if (key === keys.UP) {
	                if (this.filterInput) {
	                    this.filterInput.trigger("focus");
	                } else {
	                    this.wrapper.trigger("focus");
	                }

	                e.preventDefault();
	            }

	            if (key === keys.DOWN) {
	                if (this.tree && this.tree.is(":visible")) {
	                    this.tree.focus();
	                }

	                e.preventDefault();
	            }

	            if (key === keys.SPACEBAR && (browser.msie || browser.edge)) {
	                this._clickCheckAll();
	                e.preventDefault();
	            }
	        },

	        _clickCheckAll: function() {
	            var checkAllCheckbox = this.checkAll.find('.k-checkbox');
	            var isChecked = checkAllCheckbox.prop('checked');

	            this._updateCheckAll(!isChecked);

	            checkAllCheckbox.trigger("focus");

	        },
	        //treeview
	        _dfs: function(items, action, prop) {
	            for (var idx = 0; idx < items.length; idx++) {
	                if (!this[action](items[idx], prop)) {
	                    break;
	                }
	                this._traverceChildren(items[idx], action, prop);
	            }
	        },

	        _uncheckItemByUid: function(uid) {
	            this._dfs(this.dataSource.data(), '_uncheckItemEqualsUid', uid);
	        },

	        _uncheckItemEqualsUid: function(item, uid) {
	            if (item.enabled !== false && item._tagUid == uid) {
	                item.set("checked", false);
	                return false;
	            }
	            return true;
	        },

	        _selectItemByText: function(text) {
	            this._dfs(this.dataSource.data(), '_itemEqualsText', text);
	        },

	        _itemEqualsText: function(item, text) {
	            if (item.enabled !== false && this._text(item) === text) {
	                this.treeview.select(this.treeview.findByUid(item.uid));
	                this._selectValue(item);
	                return false;
	            }
	            return true;
	        },

	        _selectItemByValue: function(value) {
	            this._dfs(this.dataSource.data(), '_itemEqualsValue', value);
	        },

	        _itemEqualsValue: function(item, value) {
	            if (item.enabled !== false && this._valueComparer(item, value)) {

	                this.treeview.select(this.treeview.findByUid(item.uid));

	                return false;
	            }
	            return true;
	        },

	        _checkItemByValue: function(value) {
	            var items = this.treeview.dataItems();
	            for (var idx = 0; idx < value.length; idx++) {
	                this._dfs(items, '_checkItemEqualsValue', value[idx]);
	            }
	        },

	        _checkItemEqualsValue: function(item, value) {
	            if (item.enabled !== false && this._valueComparer(item, value)) {
	                    item.set("checked", true);
	                return false;
	            }
	            return true;
	        },

	        _valueComparer: function(item, value) {
	            var itemValue = this._value(item);
	            var itemText;

	            if (!this._isNullorUndefined(itemValue)) {
	                if(this._isNullorUndefined(value)){
	                    return false;
	                }

	                var newValue = this._value(value);

	                if(newValue){
	                    return itemValue == newValue;
	                }else{
	                    return itemValue == value;
	                }
	            }

	            itemText = this._text(item);
	            if (itemText) {
	                if (this._text(value)) {
	                    return itemText == this._text(value);
	                } else {
	                    return itemText == value;
	                }
	            }

	            return false;
	        },

	        _isNullorUndefined: function(value){
	            return value === undefined || value === null;
	        },

	        _getAllChecked: function() {
	            this._allCheckedItems = [];
	            this._allItemsAreChecked = true;
	            this._allItemsAreUnchecked = true;

	            this._dfs(this.dataSource.data(), '_getAllCheckedItems');

	            return this._allCheckedItems;
	        },

	        _getAllCheckedItems: function(item) {
	            if (this._allItemsAreChecked) {
	                this._allItemsAreChecked =  item.checked;
	            }

	            if (this._allItemsAreUnchecked) {
	                this._allItemsAreUnchecked = !item.checked;
	            }

	            if (item.checked) {
	                this._allCheckedItems.push(item);
	            }
	            return true;
	        },

	        _traverceChildren: function(item, action, prop) {
	            var childrenField = (item._childrenOptions && item._childrenOptions.schema) ? item._childrenOptions.schema.data : null;
	            var subItems = item[childrenField] || item.items || item.children;

	            if (!subItems) {
	                return;
	            }

	            this._dfs(subItems, action, prop);
	        },

	        _toggleCheckAllItems: function(checked) {
	            this._dfs(this.dataSource.data(), '_checkAllCheckItem', checked);
	        },

	        _checkAllCheckItem: function(item, checked) {
	            if (item.enabled === false) {
	                if (item.checked) {
	                    this._disabledCheckedItems.push(item);
	                } else {
	                    this._disabledUnCheckedItems.push(item);
	                }
	            } else {
	                item.set("checked", checked);
	            }
	            return true;
	        },

	        _isFilterEnabled: function() {
	            var filter = this.options.filter;
	            return filter && filter !== "none";
	        },

	        _editable: function(options) {
	            var that = this;
	            var element = that.element;
	            var disable = options.disable;
	            var readonly = options.readonly;
	            var wrapper = that.wrapper.add(that.filterInput).off(ns);
	            var dropDownWrapper = that.wrapper.off(HOVEREVENTS);
	            if (that._isMultipleSelection()) {
	                that.tagList.off(CLICK + ns);
	            }
	            if (!readonly && !disable) {
	                element.prop(DISABLED, false).prop(READONLY, false);

	                dropDownWrapper
	                    .removeClass(STATEDISABLED)
	                    .on(HOVEREVENTS, that._toggleHover);

	                that._clear.on("click" + ns, proxy(that._clearClick, that));
	                wrapper
	                    .attr(TABINDEX, wrapper.data(TABINDEX))
	                    .attr(ARIA_DISABLED, false)
	                    .on("keydown" + ns, proxy(that._keydown, that))
	                    .on("focusin" + ns, proxy(that._focusinHandler, that))
	                    .on("focusout" + ns, proxy(that._focusoutHandler, that));

	                that.wrapper.on(CLICK + ns, proxy(that._wrapperClick, that));

	                if (this._isMultipleSelection()) {
	                    that.tagList.on(CLICK + ns, "span.k-chip", function(e) {
	                        $(e.currentTarget).addClass(FOCUSED);
	                    });

	                    that.tagList.on(CLICK + ns, ".k-i-close", function(e) {
	                        that._removeTagClick(e);
	                    });
	                }
	            } else if (disable) {
	                wrapper.removeAttr(TABINDEX);
	                dropDownWrapper
	                    .addClass(STATEDISABLED);
	            } else {
	                wrapper
	                    .attr(TABINDEX, wrapper.data(TABINDEX));

	                dropDownWrapper
	                    .removeClass(STATEDISABLED);

	                wrapper
	                    .on("focusin" + ns, proxy(that._focusinHandler, that))
	                    .on("focusout" + ns, proxy(that._focusoutHandler, that));
	            }

	            element.attr(DISABLED, disable)
	                   .attr(READONLY, readonly);

	            wrapper.attr(ARIA_DISABLED, disable);
	        },

	        _focusinHandler: function() {
	            this.wrapper.addClass(FOCUSED);
	            this._prevent = false;
	        },

	        _focusoutHandler: function() {
	            var that = this;

	            if (this._isMultipleSelection()) {
	                this.tagList.find(DOT + FOCUSED).removeClass(FOCUSED);
	            }
	            if (!that._prevent) {
	                this.wrapper.removeClass(FOCUSED);
	                that._prevent = true;
	                that.element.trigger("blur");
	            }
	        },

	        _toggle: function(open) {
	            open = open !== undefined ? open : !this.popup.visible();

	            this[open ? OPEN : CLOSE]();
	        },

	        _wrapperClick: function(e) {
	            e.preventDefault();
	            this.popup.unbind("activate", this._focusInputHandler);
	            this._focused = this.wrapper;
	            this._prevent = false;
	            this._toggle();
	        },

	        _toggleHover: function(e) {
	            $(e.currentTarget).toggleClass(HOVER, e.type === "mouseenter");
	        },

	        _focusInput: function() {
	            if (this.filterInput) {
	                this.filterInput.trigger("focus");
	            } else if (this.checkAll) {
	                this.checkAll.find(".k-checkbox").trigger("focus");
	            } else if (this.tree.is(":visible")) {
	                this.tree[0].focus({preventScroll: true});
	                this._ie11PreventScrollOnFocus();
	            }
	        },

	        _ie11PreventScrollOnFocus: function(){
	            if (browser.msie && browser.version == 11) {
	                var popup = this.popup;
	                popup._toggleResize(false);
	                setTimeout(function () {
	                    popup._toggleResize(true);
	                },50);
	            }
	        },

	        _keydown: function(e) {
	            var key = e.keyCode;
	            var altKey = e.altKey;
	            var isFilterInputActive;
	            var isWrapperActive;
	            var focused, tagItem;

	            var isPopupVisible = this.popup.visible();

	            if (this.filterInput) {
	                isFilterInputActive = this.filterInput[0] === activeElement();
	            }

	            if (this.wrapper) {
	                isWrapperActive = this.wrapper[0] === activeElement();
	            }

	            if(isWrapperActive){
	                if (key === keys.ESC) {
	                    this._clearTextAndValue();
	                    e.preventDefault();
	                    return;
	                }

	                if(this._isMultipleSelection()){
	                    if (key === keys.LEFT) {
	                        this._focusPrevTag();
	                        e.preventDefault();
	                        return;
	                    }

	                    if (key === keys.RIGHT) {
	                        this._focusNextTag();
	                          e.preventDefault();
	                        return;
	                    }

	                    if (key === keys.HOME) {
	                        this._focusFirstTag();
	                        e.preventDefault();
	                        return;
	                    }

	                    if (key === keys.END) {
	                        this._focusLastTag();
	                        e.preventDefault();
	                        return;
	                    }

	                    if (key === keys.DELETE) {
	                        focused = this.tagList.find(DOT + FOCUSED).first();
	                        if(focused.length){
	                            tagItem = this._tags[focused.index()];
	                            this._removeTag(tagItem);
	                        }
	                        e.preventDefault();
	                        return;
	                    }

	                    if (key === keys.BACKSPACE) {
	                        focused = this.tagList.find(DOT + FOCUSED).first();
	                        if (focused.length) {
	                            tagItem = this._tags[focused.index()];
	                            this._removeTag(tagItem);
	                        } else {
	                            focused = this._focusLastTag();
	                            if (focused.length) {
	                                tagItem = this._tags[focused.index()];
	                                this._removeTag(tagItem);
	                            }
	                        }
	                        e.preventDefault();
	                        return;
	                    }
	                }
	            }


	            if (isFilterInputActive) {
	                if (key === keys.ESC) {
	                    this._clearFilter();
	                }

	                if ((key === keys.UP) && !altKey) {
	                    this.wrapper.trigger("focus");
	                    e.preventDefault();
	                }

	                if(browser.msie && browser.version < 10){
	                    if (key === keys.BACKSPACE || key === keys.DELETE) {
	                        this._search();
	                    }
	                }

	                if(key === keys.TAB){
	                    this.close();
	                    this.wrapper.trigger("focus");
	                    e.preventDefault();
	                    return;
	                }
	            }

	            if ((altKey && key === keys.UP) || key === keys.ESC) {
	                this.close();
	                this.wrapper.trigger("focus");
	                e.preventDefault();
	                return;
	            }

	            if (key === keys.ENTER && this._typingTimeout && this.filterInput && isPopupVisible) {
	                e.preventDefault();
	                return;
	            }

	            if (key === keys.SPACEBAR && !isFilterInputActive) {
	                this._toggle(!isPopupVisible);
	                e.preventDefault();
	            }

	            if ((altKey && key === keys.DOWN) && !isPopupVisible) {
	                this.open();
	                e.preventDefault();
	            }

	            if ((key === keys.DOWN) && isPopupVisible) {
	                if (this.filterInput && !isFilterInputActive) {
	                    this.filterInput.trigger("focus");
	                } else if (this.checkAll && this.checkAll.is(":visible")) {
	                    this.checkAll.find('input').trigger("focus");
	                } else if(this.tree.is(":visible")) {
	                    this.tree[0].focus({preventScroll: true});
	                    this._ie11PreventScrollOnFocus();
	                }
	                e.preventDefault();
	            }

	            if(key === keys.TAB && isPopupVisible){
	                this.close();
	                this.wrapper.trigger("focus");
	                e.preventDefault();
	            }
	        },

	        _focusPrevTag: function() {
	            var focused = this.tagList.find(DOT + FOCUSED);
	            if (focused.length) {
	                var activedescendant = this._activeId;

	                focused.first()
	                    .removeClass(FOCUSED)
	                    .removeAttr("id")
	                    .prev(CHIP)
	                    .addClass(FOCUSED)
	                    .attr("id", activedescendant);

	                this.wrapper.attr("aria-activedescendant", activedescendant);
	            } else {
	                this._focusLastTag();
	            }
	        },

	        _focusNextTag: function() {
	            var focused = this.tagList.find(DOT + FOCUSED);

	            if (focused.length) {
	                var activedescendant = this._activeId;

	                focused.first()
	                    .removeClass(FOCUSED)
	                    .removeAttr("id")
	                    .next(CHIP)
	                    .addClass(FOCUSED)
	                    .attr("id", activedescendant);

	                this.wrapper.attr("aria-activedescendant", activedescendant);
	            } else {
	                this._focusFirstTag();
	            }
	        },

	        _focusFirstTag: function() {
	            var activedescendant = this._activeId;

	            this._clearDisabledTag();

	            var firstTag = this.tagList.children(CHIP).first()
	                .addClass(FOCUSED)
	                .attr("id", activedescendant);

	            this.wrapper.attr("aria-activedescendant", activedescendant);

	            return firstTag;
	        },

	        _focusLastTag: function() {
	            var activedescendant = this._activeId;

	            this._clearDisabledTag();

	            var lastTag = this.tagList.children(CHIP).last()
	                .addClass(FOCUSED)
	                .attr("id", activedescendant);

	            this.wrapper.attr("aria-activedescendant", activedescendant);

	            return lastTag;
	        },

	        _clearDisabledTag: function() {
	            this.tagList.find(DOT + FOCUSED).removeClass(FOCUSED).removeAttr("id");
	        },

	        _search: function() {
	            var that = this;
	            clearTimeout(that._typingTimeout);

	            that._typingTimeout = setTimeout(function() {
	                var value = that.filterInput.val();

	                if (that._prev !== value) {
	                    that._prev = value;
	                    that.search(value);
	                }

	                that._typingTimeout = null;
	            }, that.options.delay);
	        },

	        _clearFilter: function() {
	            if(this.filterInput.val().length){
	                this.filterInput.val("");
	                this._prev = "";
	                this._filtering = true;
	                this.treeview.dataSource.filter({});
	            }
	        },

	        _removeTagClick: function(e) {
	            e.stopPropagation();
	            var tagItem = this._tags[$(e.currentTarget.parentElement).index()];
	            this._removeTag(tagItem);
	        },

	        _removeTag: function(tagItem) {
	           if(!tagItem){
	                return;
	           }

	           var uid = tagItem.uid;
	           this._uncheckItemByUid(uid);
	        }
	    });

	    function assign(instance, fields, value) {
	        var idx = 0,
	            lastIndex = fields.length - 1,
	            field;

	        for (; idx < lastIndex; ++idx) {
	            field = fields[idx];

	            if (!(field in instance)) {
	                instance[field] = {};
	            }

	            instance = instance[field];
	        }

	        instance[fields[lastIndex]] = value;
	    }

	    ui.plugin(DropDownTree);

	    kendo.cssProperties.registerPrefix("DropDownTree", "k-picker-");

	    kendo.cssProperties.registerValues("DropDownTree", [{
	        prop: "rounded",
	        values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
	    }]);

	    kendo.cssProperties.registerPrefix("MultiSelectDropDownTree", "k-input-");

	    kendo.cssProperties.registerValues("MultiSelectDropDownTree", [{
	        prop: "rounded",
	        values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
	    }]);

	    var SingleSelection = kendo.Class.extend({
	        init: function(view) {
	            this._dropdowntree = view;
	        },

	        _initWrapper: function() {
	            this._wrapper();
	            this._span();
	        },

	        _preselect: function(data){
	            var dropdowntree = this._dropdowntree;

	            dropdowntree._selectValue(data);
	        },

	        _wrapper: function() {
	            var dropdowntree = this._dropdowntree,
	                element = dropdowntree.element,
	                DOMelement = element[0],
	                wrapper;

	            wrapper = element.parent();

	            if (!wrapper.is("span.k-dropdowntree")) {
	                wrapper = element.wrap("<span />").parent();
	                wrapper[0].style.cssText = DOMelement.style.cssText;
	                wrapper[0].title = DOMelement.title;
	            }

	            dropdowntree._focused = dropdowntree.wrapper = wrapper
	                .addClass("k-dropdowntree k-picker")
	                .addClass(DOMelement.className)
	                .removeClass('input-validation-error')
	                .removeClass('k-invalid')
	                .css("display", "")
	                .attr({
	                    accesskey: element.attr("accesskey"),
	                    unselectable: "on"
	                });

	            element.hide().removeAttr("accesskey");
	        },

	        _span: function() {
	            var dropdowntree = this._dropdowntree,
	                wrapper = dropdowntree.wrapper,
	                SELECTOR = "span.k-input-value-text",
	                span;

	            span = wrapper.find(SELECTOR);

	            if (!span[0]) {
	                wrapper.append('<span unselectable="on" class="k-input-inner"><span class="k-input-value-text"></span></span>' +
	                                html.renderButton('<button unselectable="on" class="k-select k-input-button" aria-label="select" tabindex="-1"></button>', extend({}, dropdowntree.options, {
	                                    icon: "arrow-s",
	                                    shape: null,
	                                    rounded: null
	                                })))
	                       .append(dropdowntree.element);

	                span = wrapper.find(SELECTOR);
	            }

	            dropdowntree.span = span;
	            dropdowntree._arrow = wrapper.find(".k-select");
	            dropdowntree._arrowIcon = dropdowntree._arrow.find(".k-icon");
	        },

	        _setValue: function(value) {
	            var dropdowntree = this._dropdowntree;
	            var currentValue;

	            if (value === undefined || value === null) {
	                currentValue = dropdowntree._values.slice()[0];
	                value = (typeof currentValue === "object") ? currentValue : dropdowntree._accessor() || currentValue;
	                return value === undefined || value === null ? "" : value;
	            }
	            dropdowntree._valueMethodCalled = true;
	            if (value.length === 0) {
	                dropdowntree._clearTextAndValue();
	                dropdowntree._valueMethodCalled = false;
	                return;
	            }

	            dropdowntree._selectItemByValue(value);
	            dropdowntree._toggleCloseVisibility();
	        },

	        _clearValue: function() {
	            var dropdowntree = this._dropdowntree;
	            var selectedNode = dropdowntree.treeview.select();

	            if (dropdowntree.treeview.dataItem(selectedNode)) {
	                dropdowntree.treeview.dataItem(selectedNode).set('selected', false);
	                if(!dropdowntree._valueMethodCalled){
	                    dropdowntree.trigger(CHANGE);
	                }
	            }
	        },

	        _checkLoadedItem: function(tempItem, value) {
	            var dropdowntree = this._dropdowntree;

	            if (!dropdowntree._isNullorUndefined(value) && value!=="") {
	                if(dropdowntree._valueComparer(tempItem, value)){
	                    dropdowntree._preventChangeTrigger = true;
	                    tempItem.set("selected", true);
	                    dropdowntree._preventChangeTrigger = false;
	                } else if (tempItem.selected){
	                    dropdowntree.treeview.select(dropdowntree.treeview.findByUid(tempItem.uid));
	                }

	            } else if (!value && tempItem.selected){
	                dropdowntree.treeview.select(dropdowntree.treeview.findByUid(tempItem.uid));
	            }
	        }
	    });

	    var MultipleSelection = kendo.Class.extend({
	        init: function(view) {
	            this._dropdowntree = view;
	        },

	        _initWrapper: function() {
	            var dropdowntree = this._dropdowntree;

	            this._tagTemplate();
	            dropdowntree.element.attr("multiple", "multiple").hide();
	            this._wrapper();
	            dropdowntree._tags = new ObservableArray([]);
	            dropdowntree._multipleTags = new ObservableArray([]);
	            this._tagList();
	            dropdowntree.span = $('<span unselectable="on" class="k-input-inner"><span class="k-input-value-text"></span></span>').appendTo(dropdowntree.tagList).find(".k-input-value-text");

	        },

	        _preselect: function(data, value){
	            var dropdowntree = this._dropdowntree;
	            var valueToSelect = value || dropdowntree.options.value;

	            if (!Array.isArray(data) && !(data instanceof kendo.data.ObservableArray)) {
	                data = [data];
	            }

	            if ($.isPlainObject(data[0]) || data[0] instanceof kendo.data.ObservableObject || !dropdowntree.options.dataValueField) {
	                dropdowntree.dataSource.data(data);

	                dropdowntree.value(valueToSelect);
	            }
	        },

	        _tagTemplate: function() {
	            var dropdowntree = this._dropdowntree;
	            var options = dropdowntree.options;
	            var tagTemplate = options.valueTemplate;
	            var isMultiple = options.tagMode === "multiple";
	            var singleTag = options.messages.singleTag;

	            tagTemplate = tagTemplate ? kendo.template(tagTemplate) : dropdowntree.valueTemplate;

	            dropdowntree.valueTemplate = function(data) {
	                return html.renderChip('<span unselectable="on" role="option"' +
	                    'class="' + ((data.enabled === false) ? "k-disabled" : "") + '"' +
	                    ((data.enabled === false) ? 'aria-disabled="true"' : '') +
	                    '>' +
	                        (isMultiple ?  tagTemplate(data) : ('<span unselectable="on" data-bind="text: tags.length"></span>' +
	                                                                '<span unselectable="on">&nbsp;' + singleTag +'</span>' )) +
	                    '</span>', $.extend({}, options, {
	                            fillMode: "solid",
	                            themeColor: "base",
	                            rounded: "medium",
	                            attr: {
	                                unselectable: "on"
	                            },
	                            removable: isMultiple,
	                            removeIcon: "close",
	                            removableAttr: {
	                                unselectable: "on",
	                                "aria-hidden": true,
	                                "aria-label": dropdowntree.options.messages.deleteTag,
	                                title: dropdowntree.options.messages.deleteTag
	                            }
	                        }));
	            };
	        },

	        _wrapper: function() {
	            var dropdowntree = this._dropdowntree,
	                element = dropdowntree.element,
	                wrapper = element.parent("span.k-dropdowntree");

	            if (!wrapper[0]) {
	                wrapper = element.wrap('<span class="k-dropdowntree k-input" unselectable="on" />').parent();
	                wrapper[0].style.cssText = element[0].style.cssText;
	                wrapper[0].title = element[0].title;
	            }

	            dropdowntree.wrapper = wrapper.addClass(element[0].className).css("display", "");
	        },

	        _tagList: function() {
	            var dropdowntree = this._dropdowntree,
	                tagList = dropdowntree.wrapper.children("div.k-input-values");

	            if (!tagList[0]) {
	                var isMultiple = dropdowntree.options.tagMode === "multiple";
	                var tagCollection = isMultiple ? "tags": "multipleTag";

	                tagList = $(html.renderChipList('<div unselectable="on" class="k-input-values" data-template="tagTemplate" data-bind="source: ' + tagCollection + '" />', $.extend({}, dropdowntree.options))).appendTo(dropdowntree.wrapper);
	            }

	            dropdowntree.tagList = tagList;
	            dropdowntree.tagList.attr('id', kendo.guid() + "_tagList");
	            dropdowntree.wrapper.attr("aria-owns", dropdowntree.tagList.attr('id'));
	            var viewModel = kendo.observable({
	                multipleTag: dropdowntree._multipleTags,
	                tags: dropdowntree._tags,
	                tagTemplate: dropdowntree.valueTemplate
	            });
	            kendo.bind(dropdowntree.tagList, viewModel);
	            dropdowntree.tagList.attr("data-stop", true);
	        },

	        _setValue: function(value) {
	            var dropdowntree = this._dropdowntree;
	            var oldValues = dropdowntree._values;
	            if (value === undefined || value === null) {
	                return dropdowntree._values.slice();
	            }

	            dropdowntree.setValue(value);
	            dropdowntree._valueMethodCalled = true;
	            if (value.length) {
	                this._removeValues(oldValues, value);

	                dropdowntree._checkItemByValue(value);
	            } else {
	                dropdowntree._clearTextAndValue();
	            }

	            dropdowntree._valueMethodCalled = false;
	            dropdowntree._toggleCloseVisibility();
	        },

	        _removeValues: function(oldValues, value) {
	            var dropdowntree = this._dropdowntree;
	            var removedValues = this._getNewValues(oldValues, value);

	            for (var idx = 0; idx < removedValues.length; idx++) {
	                for (var j = 0; j < dropdowntree._tags.length; j++) {
	                    if (dropdowntree._valueComparer(dropdowntree._tags[j],removedValues[idx])){
	                        dropdowntree._uncheckItemByUid(dropdowntree._tags[j].uid);
	                    }
	                }
	            }
	        },

	        _getNewValues: function(oldValues, value){
	            var removedValues = [];

	            for (var idx = 0; idx < oldValues.length; idx++) {
	                if(value.indexOf(oldValues[idx]) === -1){
	                    removedValues.push(oldValues[idx]);
	                }
	            }

	            return removedValues;
	        },

	        _clearValue: function() {
	            var dropdowntree = this._dropdowntree;
	            var tagsArray = dropdowntree._tags.slice();

	            for (var idx = 0; idx < tagsArray.length; idx++) {
	                var uid = tagsArray[idx].uid;
	                dropdowntree._preventChangeTrigger = true;
	                dropdowntree._uncheckItemByUid(uid);
	            }

	            if (tagsArray.length) {
	                dropdowntree._preventChangeTrigger = false;
	                if(!dropdowntree._valueMethodCalled){
	                    dropdowntree.trigger(CHANGE);
	                }
	            }
	        },

	        _checkLoadedItem: function(tempItem, value) {
	            var dropdowntree = this._dropdowntree;

	            if (dropdowntree._noInitialValue && tempItem.checked) {
	                dropdowntree._checkValue(tempItem);
	                return;
	            }

	            if ((value.length || this._isDataSourceSet) &&
	                (value.indexOf(dropdowntree._currentValue(tempItem)) !== -1 || value.indexOf(tempItem)) !== -1 &&
	                !this._findTag(dropdowntree._currentValue(tempItem))) {
	                if (tempItem.checked) {
	                    dropdowntree._checkValue(tempItem);
	                } else {
	                    dropdowntree._preventChangeTrigger = true;
	                    tempItem.set("checked", true);
	                    dropdowntree._preventChangeTrigger = false;
	                }
	            }
	        },

	        _findTag: function(tempItemValue) {
	            var dropdowntree = this._dropdowntree;

	            return dropdowntree._tags.find(function(item) {
	                return dropdowntree._valueComparer(item, tempItemValue);
	            });
	        }
	    });

	    kendo.ui.DropDownTree.SingleSelection = SingleSelection;
	    kendo.ui.DropDownTree.MultipleSelection = MultipleSelection;

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1217:
/***/ (function(module, exports) {

	module.exports = require("./dropdowntree/treeview");

/***/ }),

/***/ 1218:
/***/ (function(module, exports) {

	module.exports = require("./html/chip");

/***/ }),

/***/ 1219:
/***/ (function(module, exports) {

	module.exports = require("./html/chiplist");

/***/ })

/******/ });