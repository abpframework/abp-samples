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

	module.exports = __webpack_require__(1276);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1277)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "filter",
	    name: "Filter",
	    category: "web",
	    depends: [ "core", "buttongroup"]
	};

	var editors = {
	    "number": "<input id='#=id#' type='text' aria-label='#=field#' title='#=field#' data-#=ns#role='numerictextbox' data-#=ns#bind='value: value'/>",
	    "string": "<span class='k-textbox k-input k-input-md k-rounded-md k-input-solid'><input id='#=id#' type='text' aria-label='#=field#' title='#=field#' class='k-input-inner' data-#=ns#bind='value: value'/></span>",
	    "boolean": "<input id='#=id#' class='k-checkbox k-checkbox-md k-rounded-md' aria-label='#=field#' data-#=ns#role='checkbox' data-#=ns#bind='checked: value' type='checkbox'>",
	    "date": "<input id='#=id#' type='text' aria-label='#=field#' title='#=field#' data-#=ns#role='datepicker' data-#=ns#bind='value: value'/>"
	};

	var operatorsTemplate =
	    "<select data-#=ns#bind='value: operator' title='#=operatorsLabel#' data-#=ns#role='dropdownlist'>" +
	        "#for(var op in operators){#"+
	            "<option value='#=op#'>#=operators[op].text || operators[op]#</option>" +
	        "#}#" +
	    "</select>";

	var logicTemplate =
	    "<div data-#=ns#bind='value: logic' data-#=ns#role='filterbuttongroup'>" +
	        "#for(var op in operators){#"+
	            "<span value='#=op#'>#=operators[op]#</span>" +
	        "#}#" +
	    "</div>";

	var mainContainer =
	    "<ul class='k-filter-container'>" +
	        "<li class='k-filter-group-main'></li>" +
	    "</ul>";

	var mainLogicTemplate =
	    "<div class='k-filter-toolbar'>" +
	        "<div class='k-toolbar' id='#=uid#'>" +
	            "<div class='k-filter-toolbar-item'>" +
	                logicTemplate +
	            "</div>" +
	            "<div class='k-filter-toolbar-item'>" +
	                "<button data-role='button' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button' role='button' aria-disabled='false' title='#=addExpression#' aria-label='#=addExpression#' tabindex='0'>" +
	                    "<span class='k-button-icon k-icon k-i-filter-add-expression'>" +
	                    "</span>" +
	                "</button>" +
	            "</div>" +
	            "<div class='k-filter-toolbar-item'>" +
	                "<button data-role='button' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button' role='button' aria-disabled='false' title='#=addGroup#' aria-label='#=addGroup#' tabindex='0'>" +
	                    "<span class='k-button-icon k-icon k-i-filter-add-group'>" +
	                    "</span>" +
	                "</button>" +
	            "</div>" +
	            "<div class='k-filter-toolbar-item'>" +
	                "<button data-role='button' class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button' role='button' title='#=close#' aria-label='#=close#' aria-disabled='false' tabindex='0'>" +
	                    "<span class='k-button-icon k-icon k-i-close'>" +
	                    "</span>" +
	                "</button>" +
	            "</div>" +
	        "</div>" +
	    "</div>" ;

	var logicItemTemplate =
	"<li class='k-filter-item'>" +
	    "<div class='k-filter-toolbar'>" +
	        "<div class='k-toolbar'>" +
	            "<div class='k-filter-toolbar-item'>" +
	                logicTemplate +
	            "</div>" +
	            "<div class='k-filter-toolbar-item'>" +
	                "<button data-role='button' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button' role='button' title='#=addExpression#' aria-label='#=addExpression#' aria-disabled='false' tabindex='0'>" +
	                    "<span class='k-button-icon k-icon k-i-filter-add-expression'>" +
	                    "</span>" +
	                "</button>" +
	            "</div>" +
	            "<div class='k-filter-toolbar-item'>" +
	                "<button data-role='button' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button' role='button' title='#=addGroup#' aria-label='#=addGroup#' aria-disabled='false' tabindex='0'>" +
	                    "<span class='k-button-icon k-icon k-i-filter-add-group'>" +
	                    "</span>" +
	                "</button>" +
	            "</div>" +
	            "<div class='k-filter-toolbar-item'>" +
	                "<button data-role='button' class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button' role='button' title='#=close#' aria-label='#=close#' aria-disabled='false' tabindex='0'>" +
	                    "<span class='k-button-icon k-icon k-i-close'>" +
	                    "</span>" +
	                "</button>" +
	            "</div>" +
	        "</div>" +
	    "</div>" +
	"</li>";

	var expressionItemTemplate =
	"<li class='k-filter-item'>" +
	    "<div class='k-filter-toolbar'>" +
	       "<div class='k-toolbar' id='#=uid#'>" +
	         "<div class='k-filter-toolbar-item k-filter-field'>" +
	            "<select data-#=ns#bind='value: field' title='#=fieldsLabel#' class='k-filter-dropdown' data-auto-width='true' data-#=ns#role='dropdownlist'>" +
	                "#for(var current in fields){#" +
	                    "<option value='#=fields[current].name#'>#=fields[current].label#</option>" +
	                "#}#" +
	            "</select>" +
	         "</div>" +
	         "<div class='k-filter-toolbar-item k-filter-operator'>" +
	         "</div>" +
	         "<div class='k-filter-toolbar-item k-filter-value'>" +
	         "</div>" +
	         "<div class='k-filter-toolbar-item'>" +
	            "<button data-role='button' class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button' role='button' title='#=close#' aria-label='#=close#' aria-disabled='false' tabindex='0'>" +
	                "<span class='k-button-icon k-icon k-i-close'>" +
	                "</span>" +
	            "</button>" +
	         "</div>" +
	       "</div>" +
	    "</div>"+
	"</li>";


	(function($) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        ButtonGroup = ui.ButtonGroup,
	        CHANGE = "change",
	        NS = ".kendoFilter",
	        EQ = "Is equal to",
	        NEQ = "Is not equal to",
	        proxy = $.proxy;

	    var FilterButtonGroup = ButtonGroup.extend({
	        init: function(element, options) {
	            var that = this;
	            ButtonGroup.fn.init.call(that, element, options);
	        },

	        options: {
	            name: "FilterButtonGroup"
	        },

	        value: function (value) {
	            if (value === undefined) {
	                return this._value;
	            }
	            this._value = value;
	            ButtonGroup.fn.select.call(this, this.wrapper.find("[value='" + value + "']")[0]);
	            this.trigger(CHANGE);
	        },

	        select: function (button) {
	            if (button !== -1) {
	                this.value($(button).attr("value"));
	            }
	        }
	    });

	    var Filter = Widget.extend( {
	        init: function(element, options) {
	            var that = this;
	            var html;

	            Widget.fn.init.call(that, element, options);

	            that.element = $(element).addClass("k-widget k-filter");
	            that.dataSource = options.dataSource;
	            that.operators = $.extend(that.options.operators, options.operators);

	            that._getFieldsInfo();
	            that._modelChangeHandler = proxy(that._modelChange, that);
	            that._renderMain();
	            if (options.expression) {
	                that._addExpressionTree(that.filterModel);
	            }
	            that._renderApplyButton();
	            if (that.options.expressionPreview) {
	                if (!that._previewContainer) {
	                    that._previewContainer = $('<div class="k-filter-preview"></div>').insertAfter(that.element.children().eq(0));
	                }
	                html = that._createPreview(that.filterModel.toJSON());
	                that._previewContainer.html(html);
	            }
	            that._attachEvents();
	            that.hasCustomOperators();
	        },

	        events: [
	            CHANGE
	        ],

	        options: {
	            name: "Filter",
	            dataSource: null,
	            expression: null,
	            applyButton: false,
	            fields: [],
	            mainLogic: "and",
	            messages: {
	                and: "And",
	                or: "Or",
	                apply: "Apply",
	                close: "Close",
	                addExpression: "Add Expression",
	                fields: "Fields",
	                operators: "Operators",
	                addGroup: "Add Group"
	            },
	            operators: {
	                string: {
	                    eq: EQ,
	                    neq: NEQ,
	                    startswith: "Starts with",
	                    contains: "Contains",
	                    doesnotcontain: "Does not contain",
	                    endswith: "Ends with",
	                    isnull: "Is null",
	                    isnotnull: "Is not null",
	                    isempty: "Is empty",
	                    isnotempty: "Is not empty",
	                    isnullorempty: "Has no value",
	                    isnotnullorempty: "Has value"
	                },
	                number: {
	                    eq: EQ,
	                    neq: NEQ,
	                    gte: "Is greater than or equal to",
	                    gt: "Is greater than",
	                    lte: "Is less than or equal to",
	                    lt: "Is less than",
	                    isnull: "Is null",
	                    isnotnull: "Is not null"
	                },
	                date: {
	                    eq: EQ,
	                    neq: NEQ,
	                    gte: "Is after or equal to",
	                    gt: "Is after",
	                    lte: "Is before or equal to",
	                    lt: "Is before",
	                    isnull: "Is null",
	                    isnotnull: "Is not null"
	                },
	                "boolean": {
	                    eq: EQ,
	                    neq: NEQ
	                }
	            }
	        },

	        applyFilter: function () {
	            var filter = this.filterModel.toJSON();

	            if(this._hasCustomOperators){
	                this._mapOperators(filter);
	            }
	            if (this._hasFieldsFilter(filter.filters || [])) {
	                this._removeEmptyGroups(filter.filters);
	                this.dataSource.filter(filter);
	            } else {
	                this.dataSource.filter({});
	            }
	        },

	        destroy: function() {
	            this.element.off(NS);
	            kendo.destroy(this.element.find(".k-filter-group-main"));
	            this._previewContainer = null;
	            this._applyButton = null;
	            this._modelChangeHandler = null;
	            Widget.fn.destroy.call(this);
	        },

	        setOptions: function(options) {
	            kendo.deepExtend(this.options, options);
	            this.destroy();
	            this.element.empty();
	            this.init(this.element, this.options);
	        },

	        getOptions: function() {
	            var result = $.extend(true, {}, this.options);
	            delete result.dataSource;
	            result.expression = this.filterModel.toJSON();

	            return result;
	        },

	        _addExpressionTree: function (model) {
	            if (model.filters) {
	                var parent = this.element.find("[id=" + model.uid + "]");
	                for (var i = 0; i < model.filters.length; i++) {
	                    if (model.filters[i].logic) {
	                        this._addGroup(parent, model.filters[i]);
	                    } else {
	                        this._addExpression(parent, model.filters[i]);
	                    }
	                    if (model.filters[i].filters) {
	                        this._addExpressionTree(model.filters[i]);
	                    }
	                }
	            }
	        },

	        _attachEvents: function () {
	            var that = this;

	            that.element.on("click" + NS, "button.k-button" , function (e) {
	                e.preventDefault();

	                var button  = $(e.currentTarget);
	                var icon = button.find("span");
	                var command = (icon.length ? icon : button).attr("class").split("-").pop();

	                if (command == "close") {
	                    that._removeExpression(button.closest(".k-toolbar"));
	                } else if (command == "expression") {
	                    that._addExpression(button.closest(".k-toolbar"));
	                } else if (command == "group") {
	                    that._addGroup(button.closest(".k-toolbar"));
	                } else if (command == "apply") {
	                    that.applyFilter();
	                }
	            });
	        },

	        _addExpression: function (parentContainer, model) {
	            var that = this;
	            var parentUID = parentContainer.attr("id");
	            var itemsContainer  = parentContainer.closest(".k-filter-toolbar").next("ul.k-filter-lines");
	            var field = model ? that._fields[model.field] : that._defaultField;
	            var expressionModel;
	            var itemHTML = "";

	            if (model) {
	                expressionModel = model;
	            } else {
	                expressionModel = findModel(that.filterModel, parentUID);

	                if (!expressionModel.filters) {
	                    expressionModel.set("filters", []);
	                }

	                expressionModel = that._addNewModel(expressionModel.filters, field);
	            }

	            if (!itemsContainer.length) {
	                itemsContainer = $("<ul class='k-filter-lines'></ul>").appendTo(parentContainer.closest("li"));
	            }

	            itemHTML = $(kendo.template(expressionItemTemplate)({
	                fields: that._fields,
	                operators: that.operators[field.type],
	                close: that.options.messages.close,
	                fieldsLabel: that.options.messages.fields,
	                uid: expressionModel.uid,
	                ns: kendo.ns
	            })).appendTo(itemsContainer);

	            that._addExpressionControls(itemHTML.find(".k-toolbar"), field, expressionModel);

	            if (!model) {
	                that._expressionChange();
	            }
	        },

	        _addExpressionControls: function (container, field, filterModel) {
	            var items = container.find(".k-filter-toolbar-item");
	            var operatorsContainer = items.eq(1);
	            var editorContainer = items.eq(2);

	            kendo.destroy(operatorsContainer);
	            kendo.destroy(editorContainer);
	            operatorsContainer.empty();
	            editorContainer.empty();

	            this._appendOperators(operatorsContainer, field);
	            this._appendEditor(editorContainer, field);
	            this._bindModel(container, filterModel);
	            this._showHideEditor(container, filterModel);
	        },

	        _appendOperators: function (container, field) {
	            $(kendo.template(operatorsTemplate)({
	                operators: field.operators && field.operators[field.type] ? field.operators[field.type] : this.operators[field.type],
	                operatorsLabel: this.options.messages.operators,
	                ns: kendo.ns
	            })).appendTo(container);
	        },

	        _appendEditor: function (container, field) {
	            if (kendo.isFunction(field.editor)) {
	                field.editor(container, $.extend(true, {}, { field: field.name }));
	            } else {
	                $(kendo.template(field.editor)({ns: kendo.ns, field: field.name, id: kendo.guid()})).appendTo(container);
	            }
	        },

	        _addNewModel: function (parent, field) {
	            var filterModel;
	            var type = field.type;
	            var operators = field.operators;
	            var operator;
	            if (!operators) {
	                operators = this.options.operators;
	            }

	            operator = Object.keys(operators[type])[0];

	            parent.push({ field: field.name });
	            filterModel = parent[parent.length - 1];

	            filterModel.set("value", field.defaultValue);
	            filterModel.set("operator", operator);

	            return filterModel;
	        },

	        _addGroup: function (parent, model) {
	            var that = this;
	            var filterModel = that.filterModel;
	            var parentUID = parent.attr("id");
	            var itemsContainer  = parent.closest(".k-filter-toolbar").next("ul.k-filter-lines");
	            var logicHTML;

	            if (model) {
	                filterModel = model;

	            } else {
	                filterModel = findModel(filterModel, parentUID);

	                if (!filterModel.filters) {
	                    filterModel.set("filters", []);
	                }
	                filterModel.filters.push({ logic: that.options.mainLogic });
	                filterModel = filterModel.filters[filterModel.filters.length - 1];
	            }

	            if (!itemsContainer.length) {
	                itemsContainer = $("<ul class='k-filter-lines'></ul>").appendTo(parent.closest("li"));
	            }

	            logicHTML = $(kendo.template(logicItemTemplate)({
	                operators: {
	                    and : that.options.messages.and,
	                    or : that.options.messages.or
	                },
	                addExpression: that.options.messages.addExpression,
	                addGroup: that.options.messages.addGroup,
	                close: that.options.messages.close,
	                ns: kendo.ns
	            })).appendTo(itemsContainer);

	            that._bindModel(logicHTML.find(".k-toolbar"), filterModel);

	            if (!model) {
	                that._expressionChange();
	            }
	        },

	        _bindModel: function (container, model) {
	            container.attr("id", model.uid);

	            model.bind("change", this._modelChangeHandler);
	            kendo.bind(container, model);

	            container.parent().attr(kendo.attr("stop"), true);
	        },

	        _createPreview:  function (filter) {
	            var html = "";
	            var createdField = false;
	            var haveFields = this._hasFieldsFilter(filter.filters || []);
	            var childhtml = "";
	            var current;
	            var field;

	            if (!filter.filters || !filter.filters.length || !haveFields) {
	                return "";
	            }
	            html += '<span class="k-filter-preview-bracket">(</span>';
	            for (var i = 0 ; i < filter.filters.length; i++) {
	                current = filter.filters[i];

	                if (current.filters) {
	                    childhtml = this._createPreview(current);
	                    if (childhtml) {
	                        if (createdField) {
	                            html += '<span class="k-filter-preview-operator"> ' + filter.logic.toLocaleUpperCase() + ' </span>';
	                        }
	                        createdField = true;
	                    }
	                    html += childhtml;
	                }
	                if (current.field) {
	                    field = this._fields[current.field];
	                    if (createdField) {
	                        html += '<span class="k-filter-preview-operator"> ' + filter.logic.toLocaleUpperCase() + ' </span>';
	                    }
	                    createdField = true;
	                    html += '<span class="k-filter-preview-field">' + field.label + '</span>';
	                    html += '<span class="k-filter-preview-criteria"> ' + this._getOperatorText(current.field, current.operator);
	                    if (current.operator.indexOf("is") < 0) {
	                        html += ' </span>';
	                        html += "<span class='k-filter-preview-value'>'" + kendo.htmlEncode(field.previewFormat ? kendo.toString(current.value, field.previewFormat) : current.value) + "'</span>";
	                    } else {
	                        html += '</span>';
	                    }
	                }
	            }
	            html += '<span class="k-filter-preview-bracket">)</span>';
	            return html;
	        },

	        _expressionChange: function() {
	            var that = this;
	            var filter = that.filterModel.toJSON();
	            var html = "";

	            if (that.options.expressionPreview) {
	                html = that._createPreview(filter);
	                that._previewContainer.html(html);
	            }

	            that.trigger(CHANGE, { expression: filter });
	        },

	        _getOperatorText: function (field, operator) {
	            var type = this._fields[field].type;
	            var operators = this._fields[field].operators;

	            if (!operators) {
	                operators = this.options.operators;
	            }

	            return operators[type][operator].text || operators[type][operator];
	        },

	        _addField: function(fieldInfo, field) {
	            var that = this;
	            fieldInfo = $.extend(true, {}, {
	                name: fieldInfo.name || field,
	                editor : fieldInfo.editorTemplate || editors[fieldInfo.type || "string"],
	                defaultValue : (fieldInfo.defaultValue || fieldInfo.defaultValue === false || fieldInfo.defaultValue === 0) ? fieldInfo.defaultValue : "",
	                type : fieldInfo.type || "string",
	                label : fieldInfo.label || fieldInfo.name || field,
	                operators: fieldInfo.operators,
	                previewFormat: fieldInfo.previewFormat
	            });
	            that._fields[fieldInfo.name] = fieldInfo;
	            if (!that._defaultField) {
	                that._defaultField = fieldInfo;
	            }
	        },

	        _getFieldsInfo: function () {
	            var that = this;
	            var fieldsCollection = that.options.fields.length ? that.options.fields : (that.options.dataSource.options.schema.model || {}).fields;
	            var fieldInfo;

	            that._fields = {};

	            if (Array.isArray(fieldsCollection)) {
	                for (var i = 0; i < fieldsCollection.length; i++) {
	                    fieldInfo = fieldsCollection[i];
	                    that._addField(fieldInfo);
	                }
	            } else {
	                for (var field in fieldsCollection) {
	                    fieldInfo = fieldsCollection[field];
	                    that._addField(fieldInfo, field);
	                }
	            }
	        },

	        _hasFieldsFilter: function (filters, haveField) {
	            haveField = !!haveField;

	            for (var i = 0 ; i < filters.length; i++) {
	                if (filters[i].filters) {
	                    haveField = this._hasFieldsFilter(filters[i].filters, haveField);
	                }
	                if (filters[i].field) {
	                    return true;
	                }
	            }

	            return haveField;
	        },

	        _removeEmptyGroups: function (filters) {
	            if (!filters) {
	                return;
	            }
	            for (var i = filters.length - 1; i >= 0; i--) {
	                if ((filters[i].logic && !filters[i].filters) || (filters[i].filters && !this._hasFieldsFilter(filters[i].filters)) ) {
	                    filters.splice(i, 1);
	                    continue;
	                }

	                if (filters[i].filters) {
	                    this._removeEmptyGroups(filters[i].filters);
	                }
	            }
	        },

	        _modelChange: function (e) {
	            var that = this;
	            var container = that.element.find("[id=" + e.sender.uid + "]");

	            that._showHideEditor(container, e.sender);
	            if (e.field !== "field") {
	                if (e.field !== "filters") {
	                  that._expressionChange();
	                }
	                return;
	            }

	            var newField = e.sender.field;
	            var parent = e.sender.parent();
	            var field = that._fields[newField];
	            var filterModel = that._addNewModel(parent, field);

	            e.sender.unbind("change", that._modelChangeHandler);

	            parent.remove(e.sender);

	            that._addExpressionControls(container, field, filterModel);

	            that._expressionChange();
	        },

	        _renderMain: function() {
	            var that = this;

	            $(mainContainer).appendTo(that.element);

	            if (that.options.expression) {
	                that.filterModel = kendo.observable(that.options.expression);
	            } else {
	                that.filterModel = kendo.observable({
	                    logic: that.options.mainLogic
	                });
	            }

	            $(kendo.template(mainLogicTemplate)({
	                operators: {
	                    and : that.options.messages.and,
	                    or : that.options.messages.or
	                },
	                addExpression: that.options.messages.addExpression,
	                addGroup: that.options.messages.addGroup,
	                close: that.options.messages.close,
	                uid: that.filterModel.uid,
	                ns: kendo.ns
	            })).appendTo(that.element.find("li").first());

	            that._bindModel(that.element.find(".k-toolbar").first(), that.filterModel);
	        },

	        _removeExpression: function (parent) {
	            var that = this;
	            var parentUID = parent.attr("id");
	            var itemContainer = parent.closest("li");
	            var isMain = itemContainer.hasClass("k-filter-group-main");
	            var parentModel;
	            var model;

	            if (isMain) {
	                itemContainer = itemContainer.find(".k-filter-lines");
	                if (that.filterModel.filters) {
	                    that.filterModel.filters.empty();
	                    delete that.filterModel.filters;
	                }
	            } else {
	                model = findModel(that.filterModel, parentUID);
	                parentModel = model.parent();
	                model.unbind("change", that._modelChangeHandler);
	                parentModel.remove(model);
	                if (!parentModel.length) {
	                    delete parentModel.parent().filters;
	                }
	                if (!itemContainer.siblings().length) {
	                    itemContainer = itemContainer.parent();
	                }
	            }

	            kendo.destroy(itemContainer);
	            itemContainer.remove();
	            that._expressionChange();
	        },

	        _renderApplyButton: function() {
	            var that = this;

	            if (!that.options.applyButton) {
	                return;
	            }

	            if (!that._applyButton) {
	                that._applyButton = $(kendo.format('<button type="button" aria-label="{0}" title="{0}" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-filter-apply">{0}</button>', that.options.messages.apply)).appendTo(that.element);
	            }
	        },

	        _showHideEditor: function (container, model) {
	            if (model.logic) {
	                return;
	            }

	            var operator = model.operator;
	            var editorContainer = container.find(".k-filter-toolbar-item").eq(2);
	            if (operator == "isnull" || operator == "isnotnull" || operator == "isempty" ||
	                operator == "isnotempty" || operator == "isnullorempty" || operator == "isnotnullorempty") {
	                editorContainer.hide();
	            } else {
	                editorContainer.show();
	            }
	        },

	        _mapOperators: function (expression) {
	            var that = this;
	            if (expression.filters) {
	                expression.filters.forEach(function (filter) {
	                    if (filter.filters) {
	                        that._mapOperators(filter);
	                    } else {
	                        var operator;
	                        var field = that._fields[filter.field];
	                        var type = field.type;
	                        if (field.operators && field.operators[type][filter.operator]) {
	                            operator = field.operators[type][filter.operator];
	                        } else {
	                            operator = that.operators[type][filter.operator];
	                        }

	                        if (operator) {
	                            filter.operator = operator.handler || filter.operator;
	                        }
	                    }
	                });
	            }
	        },

	        hasCustomOperators: function () {
	            var operators = $.extend(true, {}, this.operators);

	            for (var field in this._fields) {
	                operators = $.extend(true, {}, operators, this._fields[field].operators);
	            }
	            this._hasCustomOperators = findCustomOperators(operators);
	        }

	    });

	    function findCustomOperators(operators) {
	        for (var field in operators) {
	            var operator = operators[field];
	            if ((operator.handler && typeof operator.handler === "function") ||
	                (typeof operator === 'object' && operator !== null && findCustomOperators(operator))) {
	                return true;
	            }
	        }
	        return false;
	    }

	    function findModel(model, uid) {

	        if (model.uid === uid) {
	            return model;
	        }

	        if (model.filters) {
	            for(var i = 0; i < model.filters.length; i++) {
	                var temp = findModel(model.filters[i], uid);
	                if (temp) {
	                    return temp;
	                }
	            }
	        }
	    }

	    ui.plugin(Filter);
	    ui.plugin(FilterButtonGroup);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1277:
/***/ (function(module, exports) {

	module.exports = require("./kendo.buttongroup");

/***/ })

/******/ });