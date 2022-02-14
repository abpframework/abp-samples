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

	module.exports = __webpack_require__(1283);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1283:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1284) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	    var __meta__ = { // jshint ignore:line
	        id: "form",
	        name: "Form",
	        category: "web",
	        description: "The Form widget.",
	        depends: [ "editable" ],
	        features: [{
	            id: "form-dropdowns",
	            name: "DropDowns",
	            description: "Support for DropDown editors",
	            depends: [ "autocomplete", "combobox", "multiselect", "dropdowntree", "multicolumncombobox" ]
	        }, {
	            id: "form-datepickers",
	            name: "DatePickers",
	            description: "Support for DatePicker editors",
	            depends: [ "dateinput", "datepicker", "datetimepicker", "timepicker" ]
	        }, {
	            id: "form-inputs",
	            name: "Inputs",
	            description: "Support for Input editors",
	            depends: [ "numerictextbox", "maskedtextbox", "switch", "rating", "slider", "colorpicker", "radiogroup", "checkboxgroup", "textbox", "textarea", "checkbox" ]
	        }, {
	            id: "form-editor",
	            name: "Editor",
	            description: "Support for Editor editor",
	            depends: [ "editor" ]
	        }]
	    };

	    (function($, undefined) {
	        var kendo = window.kendo,
	            ui = kendo.ui,
	            NS = ".kendoForm",
	            Widget = ui.Widget,
	            extend = $.extend,
	            proxy = $.proxy,
	            VALIDATE = "validate",
	            VALIDATEFIELD = "validateField",
	            VALIDATEINPUT = "validateInput",
	            CHANGE = "change",
	            CLICK = "click" + NS,
	            SUBMIT = "submit",
	            CLEAR = "clear",
	            MAX_WIDTH = "max-width",
	            SET = "set",
	            EQUAL_SET = "equalSet",
	            GROUP = "group",
	            ARIA_DESCRIBEDBY = "aria-describedby",
	            DATA_STOP = "data-stop",
	            DATA_ROLE = "data-role",
	            EDITABLE = "editable",
	            FORM = "form",
	            DOT = ".",
	            DATA_ROLE_RADIO_GROUP = "[data-role='radiogroup']",
	            DATA_ROLE_CHECKBOX_GROUP = "[data-role='checkboxgroup']";

	        var formStyles = {
	            form: "k-widget k-form",
	            horizontal: "k-form-horizontal",
	            vertical: "",
	            field: "k-form-field",
	            fieldsContainer: "k-form-fields-container",
	            fieldWrap: "k-form-field-wrap",
	            fieldError: "k-form-field-error",
	            fieldHint: "k-form-hint",
	            fieldset: "k-form-fieldset",
	            layout: "k-form-layout",
	            legend: "k-form-legend",
	            label: "k-label k-form-label",
	            optional: "k-label-optional",
	            buttonsContainer: "k-form-buttons",
	            buttonsEnd: "k-buttons-end",
	            submit: "k-form-submit",
	            clear: "k-form-clear",
	            invalid: "k-invalid",
	            hidden: "k-hidden"
	        };

	        var formOrientation = {
	            horizontal: "horizontal",
	            vertical: "vertical"
	        };

	        var Form = Widget.extend({
	            init: function(element, options) {
	                var that = this;

	                Widget.fn.init.call(that, element, options);

	                that.options = kendo.deepExtend({}, that.options, options);

	                if (options && options.formData) {
	                    that.options.formData = options.formData;
	                }

	                that._wrapper();

	                that._setFields();

	                that._setModel();

	                that._renderContainers();

	                that._renderButtons();

	                that._editable();

	                that._renderFieldsHints();

	                that._setEvents();
	            },

	            events: [
	                VALIDATEFIELD,
	                VALIDATE,
	                CHANGE,
	                SUBMIT,
	                CLEAR
	            ],

	            options: {
	                name: "Form",
	                orientation: formOrientation.vertical,
	                validatable: {
	                    validateOnBlur: true,
	                    validationSummary: false,
	                    errorTemplate: null
	                },
	                buttonsTemplate: null,
	                messages: {
	                    submit: "Submit",
	                    clear: "Clear",
	                    optional: "(Optional)"
	                },
	                layout: "",
	                grid: {},
	                formData: {},
	                items: [],
	                formatLabel: null,
	                focusFirst: false
	            },

	            _fieldTemplate: "<div class='#:styles.field# #if (colSpan) { # k-colspan-#:colSpan# # } # #if (hidden) { ##:styles.hidden## } #'>" +
	                                "# if (label && !hidden) { # " +
	                                    "<label class='#:styles.label#' for='#:id#' id='#:id#-form-label'>" +
	                                        "# if (typeof label.encoded != 'undefined' && label.encoded === false) {#" +
	                                            "#= label.text || label #" +
	                                        "# } else { #" +
	                                            "#: label.text || label #" +
	                                        "# } #" +
	                                        "# if (label.optional) { # <span class='#:styles.optional#'>#:optional#</span>  #}#" +
	                                    "</label>" +
	                                "# } #"  +
	                                "<div class='k-form-field-wrap' data-container-for='#:field#'></div>" +
	                            "</div>",

	            _groupTemplate: "<fieldset class='#:styles.fieldset# #if (colSpan) { #  k-colspan-#:colSpan# # }#'>" +
	                                "<legend class='#:styles.legend#'>#:label.text || label #</legend>" +
	                            "</fieldset>",

	            _buttonsTemplate: "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary #:styles.submit#' type='submit'><span class='k-button-text'>#:messages.submit#</span></button>" +
	                              "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base #:styles.clear#'><span class='k-button-text'>#:messages.clear#</span></button>",

	            _errorTemplate:  "<span class='k-form-error' id='#=field#-form-error'><div>#=message#</div></span>",

	            _hintTemplate: "<div class='k-form-hint' id='#=id#-form-hint'><span>#=message#</span></div>",

	            _wrapper: function() {
	                var that = this,
	                    options = that.options,
	                    formStyles = Form.styles,
	                    width = options.width,
	                    height = options.height;

	                that.wrapper = that.element
	                    .addClass(formStyles.form)
	                    .addClass(formStyles[options.orientation]);

	                if (height) {
	                    that.wrapper.height(height);
	                }

	                if (width) {
	                    that.wrapper.css(MAX_WIDTH, width);
	                }

	                that.layoutWrapper = that._setupLayoutContainer(that.wrapper, {
	                    grid: options.grid,
	                    layout: options.layout
	                });
	            },

	            _flattenFields: function(fields) {
	                var items = [].concat(fields),
	                    item = items.shift(),
	                    result = [],
	                    push = [].push;

	                while (item) {
	                    if (item.items) {
	                        push.apply(items, item.items);
	                    } else {
	                        push.call(result, item);
	                    }

	                    item = items.shift();
	                }

	                return result;
	            },

	            _defaultLabel: function(fieldName) {
	                var that = this,
	                    customFormat = that.options.formatLabel;

	                if (!fieldName.length) {
	                    return;
	                }

	                if (kendo.isFunction(customFormat)) {
	                    return customFormat(fieldName);
	                }

	                return fieldName.split(/(.*[a-z])(?=[A-Z])/).join(" ").trim() + ":";
	            },

	            _formatLabel: function(field, label) {
	                var that = this,
	                    text = $.isPlainObject(label) ? label.text : label;

	                if (text !== undefined) {
	                    return label;
	                }

	                return that._defaultLabel(field);
	            },

	            _defaultFields: function() {
	                var that = this,
	                    options = that.options,
	                    formDataFields = Object.keys(options.formData || {}),
	                    itemFields = options.items || {},
	                    defaultFormDataFields = [],
	                    field;

	                if (itemFields.length) {
	                    return itemFields;
	                }

	                for (var i = 0; i < formDataFields.length; i += 1) {
	                    field = formDataFields[i];

	                    defaultFormDataFields.push({
	                        field: field,
	                        id: field
	                    });
	                }

	                return defaultFormDataFields;
	            },

	            _setFields: function () {
	                var that = this,
	                    defaultFields = that._flattenFields(that._defaultFields()),
	                    formData = that.options.formData || {},
	                    fieldInfo, fieldValue, type, editor, attributes;

	                that._fields = [];

	                for (var field in defaultFields) {
	                    fieldInfo = defaultFields[field];
	                    fieldValue = formData[fieldInfo.field];

	                    type = typeof fieldInfo.editor === "string" ? fieldInfo.editor :
	                        kendo.type(fieldValue ? kendo.parseDate(fieldValue.toString()) || fieldValue : fieldValue);

	                    editor = kendo.isFunction(fieldInfo.editor) ? fieldInfo.editor :
	                         ui.Editable.fn.options.editors[type] ? "" : fieldInfo.editor;

	                    if(!that._isHidden(fieldInfo.editor)) {
	                        if (fieldInfo.label) {
	                            attributes = {
	                                "aria-labelledby": fieldInfo.id || fieldInfo.field + "-form-label"
	                            };
	                        } else if (!fieldInfo.attributes || !fieldInfo.attributes["aria-label"]) {
	                            attributes = {
	                                "aria-label": fieldInfo.name || fieldInfo.field
	                            };
	                        }
	                    }

	                    fieldInfo = extend(true, {}, fieldInfo, {
	                        id: fieldInfo.id || fieldInfo.field,
	                        name: fieldInfo.name || fieldInfo.field,
	                        type: type,
	                        editor: editor,
	                        attributes: attributes,
	                        isHidden: that._isHidden(fieldInfo.editor) || that._isAntiForgeryToken(fieldInfo.name || fieldInfo.field)
	                    });

	                    that._fields[field] = fieldInfo;
	                }
	            },

	            _setModel: function() {
	                var that = this,
	                    options = that.options,
	                    formData = options.formData || {};

	                if(options.formData instanceof kendo.data.ObservableObject) {
	                    that._model = formData;
	                    return;
	                }

	                var MyModel = kendo.data.Model.define({ fields: that._fields });

	                that._model = new MyModel(formData);
	            },

	            _editable: function() {
	                var that = this,
	                    options = that.options,
	                    validatorOptions = that.options.validatable;

	                that._addEditableMvvmAttributes();

	                that.editable = that.wrapper.kendoEditable({
	                    model: that._model,
	                    fields: that._fields || [],
	                    validateOnBlur: validatorOptions.validateOnBlur,
	                    validationSummary: validatorOptions.validationSummary,
	                    errorTemplate: validatorOptions.errorTemplate || that._errorTemplate,
	                    clearContainer: false,
	                    skipFocus: !options.focusFirst,
	                    target: that
	                }).getKendoEditable();

	                that.validator = that.editable.validatable;

	                that._removeEditableMvvmAttributes();
	            },

	            _addEditableMvvmAttributes: function() {
	                // required for two mvvm bindable widgets on one element
	                this.wrapper.attr(DATA_ROLE, EDITABLE);
	            },

	            _removeEditableMvvmAttributes: function() {
	                // required for two mvvm bindable widgets on one element
	                this.wrapper
	                    .attr(DATA_STOP, true)
	                    .attr(DATA_ROLE, FORM);
	            },

	            _getItemTemplate: function(type) {
	                var that = this,
	                    template;

	                if (type === GROUP) {
	                    template = that._groupTemplate;
	                } else {
	                    template = that._fieldTemplate;
	                }

	                return template;
	            },

	            _isHidden: function (editor) {
	                return typeof editor === "string" && editor === "hidden";
	            },

	            _isAntiForgeryToken: function (field) {
	                return field === ui.Editable.antiForgeryTokenName;

	            },

	            _renderField: function(item) {
	                var that = this,
	                    formStyles = Form.styles,
	                    renderedField;

	                renderedField = (kendo.template(that._fieldTemplate)({
	                    styles: formStyles,
	                    id: item.id || item.field || "",
	                    field: item.field || "",
	                    label: that._formatLabel(item.field, item.label),
	                    colSpan: item.colSpan || "",
	                    optional: that.options.messages.optional,
	                    hidden: that._isHidden(item.editor) || that._isAntiForgeryToken(item.field)
	                }));

	                return renderedField;
	            },

	            _toggleFieldErrorState: function(element, state) {
	                var field = element.closest(DOT + formStyles.field);

	                if (field.length) {
	                    field.toggleClass(formStyles.fieldError, state);
	                }
	            },

	            _renderFieldsHints: function() {
	                var that = this,
	                    fields = that._fields,
	                    field, fieldWidgetInstance, fieldElement, hint;

	                for (var i = 0; i < fields.length; i += 1) {
	                    field = fields[i];
	                    fieldElement = that.wrapper.find("[name='" + field.name + "']");

	                    if (!fieldElement || !field.hint || field.isHidden) {
	                        continue;
	                    }

	                    hint = $(kendo.template(that._hintTemplate)({ message: field.hint || "", id: field.id }));

	                    that._associateHintContainer(fieldElement, hint.attr("id"));

	                    fieldWidgetInstance = kendo.widgetInstance(fieldElement);
	                    if (fieldWidgetInstance) {
	                        fieldElement = fieldWidgetInstance.wrapper;
	                    }

	                    if (that.validator._errorsByName(field.name).length) {
	                        hint.toggleClass(formStyles.hidden);
	                        kendo.removeAttribute(fieldElement, ARIA_DESCRIBEDBY, hint.attr("id"));
	                    }

	                    hint.insertAfter(fieldElement);
	                }
	            },

	            _associateHintContainer: function(input, hintId) {
	                var nextFocusable = kendo.getWidgetFocusableElement(input);

	                if (!nextFocusable || !hintId) {
	                    return;
	                }

	                kendo.toggleAttribute(nextFocusable, ARIA_DESCRIBEDBY, hintId);
	            },

	            _toggleHint: function(element, state) {
	                var that = this,
	                    field = element.closest(DOT + formStyles.field),
	                    hint;

	                if (field.length) {
	                    hint = field.find(DOT + formStyles.fieldHint);

	                    if (hint.length) {
	                        hint.toggleClass(formStyles.hidden, state);
	                        that._associateHintContainer(element, hint.attr("id"));
	                    }
	                }
	            },

	            _renderGroup: function(item) {
	                var that = this,
	                    type = item.type,
	                    child, renderedGroup, fieldsContainer;

	                fieldsContainer = renderedGroup = $(kendo.template(that._getItemTemplate(type))({
	                    styles: formStyles,
	                    label: item.label || "",
	                    colSpan: item.colSpan
	                }));

	                fieldsContainer = that._setupLayoutContainer(renderedGroup, {
	                    grid: item.grid,
	                    layout: item.layout
	                }) || renderedGroup;

	                for (var i = 0; i < item.items.length; i += 1) {
	                    child = item.items[i];
	                    fieldsContainer.append(that._renderField(child));
	                }

	                return renderedGroup;
	            },

	            _renderContainers: function() {
	                var that = this,
	                    defaultFields = that._defaultFields(),
	                    columnsLayout = that.options.layout === "grid",
	                    targetContainer = columnsLayout ? that.layoutWrapper : that.wrapper,
	                    item, type, container;

	                for (var i = 0; i < defaultFields.length; i += 1) {
	                    item = defaultFields[i];
	                    type = item.type;

	                    if (type === GROUP) {
	                        container = that._renderGroup(item);
	                    } else {
	                        container = that._renderField(item);
	                    }

	                    targetContainer.append(container);
	                }
	            },

	            _renderButtons: function() {
	                var that = this,
	                    wrapper = that.wrapper,
	                    options = that.options,
	                    messages = options.messages,
	                    formStyles = Form.styles,
	                    isHorizontal = options.orientation === formOrientation.horizontal,
	                    buttonsContainer = wrapper.find(DOT + formStyles.buttonsContainer),
	                    buttonsTemplate;

	                if (!buttonsContainer.length) {
	                    buttonsContainer = $("<div />")
	                        .addClass(formStyles.buttonsContainer)
	                        .addClass(isHorizontal ? formStyles.buttonsEnd : "");
	                }

	                buttonsTemplate = options.buttonsTemplate !== null ? options.buttonsTemplate : that._buttonsTemplate;

	                buttonsContainer.append(kendo.template(buttonsTemplate)({
	                    styles: formStyles,
	                    messages: messages
	                }));

	                that.element.append(buttonsContainer);
	            },

	            _setupLayoutContainer: function(appendTarget, options) {
	                var layout = options.layout,
	                    grid = options.grid,
	                    layoutClassNames = [],
	                    layoutContainer;

	                if (typeof layout === "string" && layout !== "") {
	                    layoutContainer = $("<div></div>")
	                        .appendTo(appendTarget)
	                        .addClass(formStyles.layout);

	                    layoutClassNames.push("k-d-" + layout);
	                }

	                if (layout === "grid" && typeof grid === "object") {
	                    if (typeof grid.cols === "number") {
	                        layoutClassNames.push("k-grid-cols-" + grid.cols);
	                    } else if (typeof grid.cols === "string") {
	                        layoutContainer.css("grid-template-columns", grid.cols);
	                    }

	                    if (typeof grid.gutter === "number" || typeof grid.gutter === "string") {
	                        layoutContainer.css("grid-gap", grid.gutter);
	                    }
	                }

	                if (layoutContainer) {
	                    layoutContainer.addClass(layoutClassNames.join(" "));
	                }

	                return layoutContainer;
	            },

	            _setEvents: function() {
	                var that = this,
	                    validator = that.validator;

	                validator
	                    .bind(VALIDATEINPUT, proxy(that._validateField, that))
	                    .bind(VALIDATE, proxy(that._validate, that));

	                that.wrapper
	                    .on(SUBMIT + NS, proxy(that._submit, that))
	                    .on(CLEAR + NS, proxy(that._clear, that))
	                    .on(CLICK + NS, DOT + formStyles.clear, proxy(that._clear, that));

	                that._model.bind(CHANGE, proxy(that._change, that));
	            },

	            _validateField: function(ev) {
	                var that = this,
	                    data = {
	                        model: that._model.toJSON(),
	                        valid: ev.valid,
	                        field: ev.field,
	                        error: ev.error,
	                        input: ev.input
	                    };

	                that._toggleFieldErrorState(data.input, !data.valid);

	                that._toggleHint(data.input, !data.valid);

	                if(that.trigger(VALIDATEFIELD, data)){
	                    ev.preventDefault();
	                }
	            },

	            _validate: function(ev) {
	                var that = this,
	                    data = {
	                        model: that._model.toJSON(),
	                        valid: ev.valid,
	                        errors: ev.errors
	                    };

	                that.trigger(VALIDATE, data);
	            },

	            _change: function(ev) {
	                var that = this,
	                    field = ev.field,
	                    data = {
	                        field: field,
	                        value: that._model[field]
	                    };

	                that.trigger(CHANGE, data);
	            },

	            _submit: function(ev) {
	                var that = this,
	                    jsonModel = that._model.toJSON();

	                if(that.trigger(SUBMIT, { model: jsonModel })){
	                    ev.preventDefault();
	                }
	            },

	            _clear: function(ev) {
	                var that = this;

	                ev.preventDefault();

	                that.clear();

	                that.trigger(CLEAR);
	            },

	            validate: function() {
	                var that = this,
	                    validator = that.validator;

	                if (!validator) {
	                    return;
	                }

	                return validator.validate();
	            },

	            clear: function() {
	                var that = this,
	                    fields = that._fields,
	                    model = that._model,
	                    editable = that.editable,
	                    validateOnBlur = that.validator.options.validateOnBlur;

	                that.validator.reset();

	                if (validateOnBlur) {
	                    model
	                        .unbind(SET)
	                        .unbind(EQUAL_SET);
	                }

	                for(var i = 0; i < fields.length; i += 1) {
	                    var field = fields[i].field;
	                    var element = that.wrapper.find("[name='" + field + "']");
	                    var widgetInstance = kendo.widgetInstance(element);
	                    var isHiddenInput = element.is("input[type=hidden]");

	                    if(!element.is(DATA_ROLE_CHECKBOX_GROUP) && !element.is(DATA_ROLE_RADIO_GROUP) && !isHiddenInput) {
	                        element.val("");
	                    }

	                    if (widgetInstance) {
	                        widgetInstance.value(null);
	                    }

	                    that._toggleHint(element, false);

	                    if (typeof model[field] === "boolean") {
	                        element.val("false");
	                        model.set(field, false);
	                    } else if (!isHiddenInput) {
	                        model.set(field, null);
	                    }
	                }

	                that.wrapper.find(DOT + formStyles.fieldError)
	                    .removeClass(formStyles.fieldError);

	                if (validateOnBlur) {
	                    model
	                        .bind(SET, editable._validateProxy)
	                        .bind(EQUAL_SET, editable._validateProxy);
	                }
	            },

	            setOptions: function(newOptions) {
	                var that = this;

	                that.destroy();

	                that.wrapper
	                    .removeClass(formStyles.horizontal)
	                    .removeAttr(DATA_STOP)
	                    .empty();

	                that.init(that.element, newOptions);
	            },

	            destroy: function() {
	                var that = this;

	                that.wrapper.off(NS);

	                Widget.fn.destroy.call(that.editable);

	                Widget.fn.destroy.call(that);

	                if (that.editable) {
	                    that.editable.destroy();
	                    that.editable = null;
	                }
	            }
	        });

	        ui.plugin(Form);

	        extend(true, Form, { styles: formStyles });

	  })(window.kendo.jQuery);

	  return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1284:
/***/ (function(module, exports) {

	module.exports = require("./kendo.editable");

/***/ })

/******/ });