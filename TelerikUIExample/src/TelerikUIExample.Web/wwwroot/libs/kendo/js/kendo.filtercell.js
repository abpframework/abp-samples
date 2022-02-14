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

	module.exports = __webpack_require__(1278);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1070:
/***/ (function(module, exports) {

	module.exports = require("./kendo.combobox");

/***/ }),

/***/ 1071:
/***/ (function(module, exports) {

	module.exports = require("./kendo.dropdownlist");

/***/ }),

/***/ 1119:
/***/ (function(module, exports) {

	module.exports = require("./kendo.numerictextbox");

/***/ }),

/***/ 1202:
/***/ (function(module, exports) {

	module.exports = require("./kendo.datepicker");

/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1279), __webpack_require__(1202), __webpack_require__(1119), __webpack_require__(1070), __webpack_require__(1071) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "filtercell",
	    name: "Row filter",
	    category: "framework",
	    depends: [ "autocomplete" ],
	    advanced: true
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        DataSource = kendo.data.DataSource,
	        Widget = ui.Widget,
	        CHANGE = "change",
	        BOOL = "boolean",
	        ENUM = "enums",
	        STRING = "string",
	        EQ = "Is equal to",
	        NEQ = "Is not equal to",
	        proxy = $.proxy,
	        nonValueOperators = ["isnull", "isnotnull", "isempty", "isnotempty", "isnullorempty", "isnotnullorempty"];

	    function isNonValueFilter(filter) {
	        var operator = typeof filter === "string" ? filter : filter.operator;
	        return $.inArray(operator, nonValueOperators) > -1;
	    }

	    function findFilterForField(filter, field) {
	        var filters = [];
	        if ($.isPlainObject(filter)) {
	            if (filter.hasOwnProperty("filters")) {
	                filters = filter.filters;
	            } else if(filter.field == field) {
	                return filter;
	            }
	        }
	        if ((Array.isArray(filter))) {
	           filters = filter;
	        }

	        for (var i = 0; i < filters.length; i++) {
	          var result = findFilterForField(filters[i], field);
	          if (result) {
	             return result;
	          }
	        }
	    }

	    function removeFiltersForField(expression, field) {
	        if (expression.filters) {
	            expression.filters = $.grep(expression.filters, function(filter) {
	                removeFiltersForField(filter, field);
	                if (filter.filters) {
	                    return filter.filters.length;
	                } else {
	                    return filter.field != field;
	                }
	            });
	        }
	    }

	    function removeDuplicates (dataSelector, dataTextField) {
	        var getter = kendo.getter(dataTextField, true);

	        return function(e) {
	            var items = dataSelector(e),
	                result = [],
	                index = 0,
	                seen = {};

	            while (index < items.length) {
	                var item = items[index++],
	                    text = getter(item);

	                if(!seen.hasOwnProperty(text)){
	                    result.push(item);
	                    seen[text] = true;
	                }
	            }

	            return result;
	        };
	    }

	    var FilterCell = Widget.extend( {
	        init: function(element, options) {
	            element = $(element).addClass("k-filtercell");
	            var wrapper = this.wrapper = $("<span/>").appendTo(element);
	            var that = this,
	                dataSource,
	                viewModel,
	                passedOptions = options,
	                first,
	                type,
	                operators = that.operators = options.operators || {},
	                input = that.input = $("<input/>")
	                    .attr(kendo.attr("bind"), "value: value")
	                    .appendTo(wrapper);

	            var suggestDataSource = options ? options.suggestDataSource : null;

	            if (suggestDataSource) {
	                // avoid deep cloning the suggest data source
	                options = $.extend({}, options, { suggestDataSource: {} });
	            }

	            Widget.fn.init.call(that, element[0], options);

	            if (suggestDataSource) {
	                that.options.suggestDataSource = suggestDataSource;
	            }

	            options = that.options;

	            dataSource = that.dataSource = options.dataSource;

	            //gets the type from the dataSource or sets default to string
	            that.model = dataSource.reader.model;
	            type = options.type = STRING;
	            var fields = kendo.getter("reader.model.fields", true)(dataSource) || {};
	            var target = fields[options.field];
	            if (target && target.type) {
	                type = options.type = target.type;
	            }
	            if (options.values) {
	                options.type = type = ENUM;
	            }

	            operators = operators[type] || options.operators[type];

	            if (!passedOptions.operator) {
	                for (first in operators) { // get the first operator
	                    options.operator = first;
	                    break;
	                }
	            }

	            that._parse = function(value) {
	                /*jshint eqnull: true */
	                return value != null ? (value + "") : value;
	            };

	            if (that.model && that.model.fields) {
	                var field = that.model.fields[options.field];

	                if (field) {
	                    if (field.parse) {
	                        that._parse = proxy(field.parse, field);
	                    }
	                }
	            }

	            that.defaultOperator = options.operator;

	            that.viewModel = viewModel = kendo.observable({
	                operator: options.operator,
	                value: null,
	                operatorVisible: function() {
	                    var val = this.get("value");
	                    return  (val !== null && val !== undefined && val != "undefined") || (isNonValueFilter(this.get("operator")) && that.dataSource.filter() && !that._clearInProgress);
	                }
	            });
	            that._prevOperator = options.operator;
	            viewModel.bind(CHANGE, proxy(that.updateDsFilter, that));

	            if (type == STRING) {
	                that.initSuggestDataSource(options);
	            }

	            if (options.inputWidth !== null) {
	                input.addClass('k-sized-input');
	                input.width(options.inputWidth);
	            }

	            input.attr("aria-label", that._getColumnTitle());
	            input.attr("title", that._getColumnTitle());

	            that._setInputType(options, type);

	            if (type != BOOL && options.showOperators !== false) {
	                that._createOperatorDropDown(operators);
	            } else {
	                $('<div unselectable="on" />')
	                    .css("display", "none")
	                    .text("eq")
	                    .appendTo(wrapper);

	                wrapper.addClass("k-operator-hidden");
	            }

	            that._createClearIcon();

	            kendo.bind(this.wrapper, viewModel);

	            if (type == STRING) {
	                if (!options.template) {
	                    that.setAutoCompleteSource();
	                }
	            }

	            if (type == ENUM) {
	                that.setComboBoxSource(that.options.values);
	            }

	            that._refreshUI();

	            that._refreshHandler = proxy(that._refreshUI, that);

	            that.dataSource.bind(CHANGE, that._refreshHandler);

	        },

	        _setInputType: function(options, type) {
	            var that = this,
	                input = that.input;

	            if (typeof (options.template) == "function") {
	                options.template.call(that.viewModel, {
	                    element: that.input,
	                    dataSource: that.suggestDataSource
	                });

	                that._angularItems("compile");

	            } else if (type == STRING) {
	                input.attr(kendo.attr("role"), "autocomplete")
	                        .attr(kendo.attr("text-field"), options.dataTextField || options.field)
	                        .attr(kendo.attr("filter"), options.suggestionOperator)
	                        .attr(kendo.attr("delay"), options.delay)
	                        .attr(kendo.attr("min-length"), options.minLength)
	                        .attr(kendo.attr("value-primitive"), true);
	            } else if (type == "date") {
	                input.attr(kendo.attr("role"), "datepicker")
	                    .attr("id", kendo.guid());
	            } else if (type == BOOL) {
	                input.remove();
	                var radioInput = $("<input type='radio'/>");
	                var wrapper = that.wrapper;
	                var inputName = kendo.guid();

	                var labelTrue = $("<label/>").text(options.messages.isTrue).append(radioInput);
	                radioInput.attr(kendo.attr("bind"), "checked:value")
	                    .attr("name", inputName)
	                    .val("true");

	                var labelFalse = labelTrue.clone().text(options.messages.isFalse);
	                radioInput.clone().val("false").appendTo(labelFalse);
	                wrapper.append([labelTrue, labelFalse]);

	            } else if (type == "number") {
	                input.attr(kendo.attr("role"), "numerictextbox")
	                        .attr("title", that._getColumnTitle());
	            } else if (type == ENUM) {
	                input.attr(kendo.attr("role"), "combobox")
	                        .attr(kendo.attr("text-field"), "text")
	                        .attr(kendo.attr("suggest"), true)
	                        .attr(kendo.attr("filter"), "contains")
	                        .attr(kendo.attr("value-field"), "value")
	                        .attr(kendo.attr("value-primitive"), true);
	            }
	        },

	        _getColumnTitle: function() {
	            var column = this.options.column;
	            return column ? column.title || column.field : "";
	        },

	        _createOperatorDropDown: function(operators) {
	            var items = [],
	                viewModel = this.viewModel;
	            for (var prop in operators) {
	                items.push({
	                    text: operators[prop],
	                    value: prop
	                });
	            }
	            var dropdown = $('<input class="k-dropdown-operator" ' + kendo.attr("bind") + '="value: operator"/>').appendTo(this.wrapper);
	            dropdown.attr("aria-label", this._getColumnTitle());

	            this.operatorDropDown = dropdown.kendoDropDownList({
	                dataSource: items,
	                dataTextField: "text",
	                dataValueField: "value",
	                open: function() {
	                    //TODO calc this
	                    this.popup.element.width(150);
	                },
	                valuePrimitive: true
	            }).data("kendoDropDownList");

	            viewModel.bind("change", function() {
	                var ariaLabel = operators[viewModel.operator];
	                dropdown.attr("aria-label", ariaLabel);
	            });

	            this.operatorDropDown.wrapper
	                .attr("aria-label", this._getColumnTitle())
	                .find(".k-i-arrow-s")
	                .removeClass("k-i-arrow-s")
	                .addClass("k-i-filter");
	        },

	        initSuggestDataSource: function(options) {
	            var suggestDataSource = options.suggestDataSource;

	            if (!(suggestDataSource instanceof DataSource)) {
	                if (!options.customDataSource && suggestDataSource) {
	                    suggestDataSource.group = undefined;
	                }
	                suggestDataSource =
	                    this.suggestDataSource =
	                        DataSource.create(suggestDataSource);


	            }

	            if (!options.customDataSource) {
	                suggestDataSource._pageSize = undefined;
	                suggestDataSource.reader.data = removeDuplicates(suggestDataSource.reader.data, this.options.field);
	            }

	            this.suggestDataSource = suggestDataSource;
	        },

	        setAutoCompleteSource: function() {
	            var autoComplete = this.input.data("kendoAutoComplete");
	            if (autoComplete) {
	                autoComplete.setDataSource(this.suggestDataSource);
	            }
	        },

	        setComboBoxSource: function(values) {
	            var dataSource = DataSource.create({
	                data: values
	            });
	            var comboBox = this.input.data("kendoComboBox");
	            if (comboBox && !this.options.template) {
	                comboBox.setDataSource(dataSource);
	            }
	        },

	        _refreshUI: function() {
	            var that = this,
	                filter = findFilterForField(that.dataSource.filter(), this.options.field) || {},
	                viewModel = that.viewModel;

	            that.manuallyUpdatingVM = true;
	            filter = $.extend(true, {}, filter);
	            //MVVM check binding does not update the UI when changing the value to null/undefined
	            if (that.options.type == BOOL) {
	                if (viewModel.value !== filter.value) {
	                    that.wrapper.find(":radio").prop("checked", false);
	                }
	            }

	            if (filter.operator) {
	                viewModel.set("operator", filter.operator);
	            }
	            viewModel.set("value", filter.value);
	            if ($.isEmptyObject(filter)) {
	                viewModel.trigger(CHANGE, { field: "operatorVisible" });
	            }
	            that.manuallyUpdatingVM = false;
	        },

	        _applyFilter: function(filter) {
	            if (filter.filters.length) {
	                this.dataSource.filter(filter);
	            } else {
	                this.dataSource.filter({});
	            }
	        },

	        updateDsFilter: function(e) {
	            var that = this,
	                model = that.viewModel,
	                filter;

	            if (e.field == "operator" && model.value === undefined && !isNonValueFilter(model) && isNonValueFilter(that._prevOperator)) {
	                filter = that.dataSource.filter() || { filters:[], logic: "and" };
	                removeFiltersForField(filter, that.options.field);
	                that._prevOperator = model.operator;
	                that._applyFilter(filter);
	                return;
	            }

	            if (that.manuallyUpdatingVM || (e.field == "operator" && model.value === undefined && !isNonValueFilter(model)) ||
	                (e.field == "operator" && that._clearInProgress && model.value !== null))  {
	                return;
	            }

	            var currentFilter = $.extend({}, that.viewModel.toJSON(), { field: that.options.field });
	            that._prevOperator = currentFilter.operator;

	            var expression = {
	                logic: "and",
	                filters: []
	            };

	            var prevented = false;

	            if ((currentFilter.value !== undefined && currentFilter.value !== null) || (isNonValueFilter(currentFilter) && !this._clearInProgress)) {
	                expression.filters.push(currentFilter);

	                prevented = that.trigger(CHANGE, { filter: expression, field: that.options.field });
	            }

	            if (that._clearInProgress || currentFilter.value === null) {
	                prevented = that.trigger(CHANGE, { filter: null, field: that.options.field });
	            }

	            if (prevented) {
	                return;
	            }

	            var mergeResult = that._merge(expression);
	            that._applyFilter(mergeResult);
	        },

	        _merge: function(expression) {
	            var that = this,
	                logic = expression.logic || "and",
	                filters = expression.filters,
	                filter,
	                result = that.dataSource.filter() || { filters:[], logic: "and" },
	                idx,
	                length;

	            removeFiltersForField(result, that.options.field);

	            for (idx = 0, length = filters.length; idx < length; idx++) {
	                filter = filters[idx];
	                filter.value = that._parse(filter.value);
	            }

	            filters = $.grep(filters, function(filter) {
	                return (filter.value !== "" && filter.value !== null) || isNonValueFilter(filter);
	            });

	            if (filters.length) {
	                if (result.filters.length) {
	                    expression.filters = filters;

	                    if (result.logic !== "and") {
	                        result.filters = [ { logic: result.logic, filters: result.filters }];
	                        result.logic = "and";
	                    }

	                    if (filters.length > 1) {
	                        result.filters.push(expression);
	                    } else {
	                        result.filters.push(filters[0]);
	                    }
	                } else {
	                    result.filters = filters;
	                    result.logic = logic;
	                }
	            }

	            return result;
	        },

	        _createClearIcon: function() {
	            var that = this;

	            $("<button type='button' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button' title = '" + that.options.messages.clear + "'/>")
	                .attr("aria-label", that.options.messages.clear)
	                .attr(kendo.attr("bind"), "visible:operatorVisible")
	                .html("<span class='k-button-icon k-icon k-i-filter-clear'></span>")
	                .on("click", proxy(that.clearFilter, that))
	                .appendTo(that.wrapper);
	        },

	        clearFilter: function() {
	            this._clearInProgress = true;

	            if (isNonValueFilter(this.viewModel.operator)) {
	                this.viewModel.set("operator", this.defaultOperator);
	            }

	            this.viewModel.set("value", null);
	            this._clearInProgress = false;
	        },

	        _angularItems: function(action) {
	            var elements = this.wrapper.closest("th").get();
	            var column = this.options.column;

	            this.angular(action, function() {
	                return {
	                    elements: elements,
	                    data: [{ column: column }]
	                };
	            });
	        },

	        destroy: function() {
	            var that = this;

	            that.filterModel = null;
	            that.operatorDropDown = null;

	            that._angularItems("cleanup");

	            if (that._refreshHandler) {
	                that.dataSource.bind(CHANGE, that._refreshHandler);
	                that._refreshHandler = null;
	            }

	            kendo.unbind(that.element);

	            Widget.fn.destroy.call(that);

	            kendo.destroy(that.element);
	        },

	        events: [
	            CHANGE
	        ],

	        options: {
	            name: "FilterCell",
	            delay: 200,
	            minLength: 1,
	            inputWidth: null,
	            values: undefined,
	            customDataSource: false,
	            field: "",
	            dataTextField: "",
	            type: "string",
	            suggestDataSource: null,
	            suggestionOperator: "startswith",
	            operator: "eq",
	            showOperators: true,
	            template: null,
	            messages: {
	                isTrue: "is true",
	                isFalse: "is false",
	                filter: "Filter",
	                clear: "Clear",
	                operator: "Operator"
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
	                enums: {
	                    eq: EQ,
	                    neq: NEQ,
	                    isnull: "Is null",
	                    isnotnull: "Is not null"
	                }
	            }
	        }
	    });

	    ui.plugin(FilterCell);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1279:
/***/ (function(module, exports) {

	module.exports = require("./kendo.autocomplete");

/***/ })

/******/ });