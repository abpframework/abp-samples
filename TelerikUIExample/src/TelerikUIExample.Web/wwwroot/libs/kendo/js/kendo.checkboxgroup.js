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

	module.exports = __webpack_require__(1110);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1111), __webpack_require__(1112) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "checkboxgroup",
	    name: "CheckBoxGroup",
	    category: "web",
	    description: "The CheckBoxGroup component.",
	    depends: [ "core", "inputgroupbase", "checkbox" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        InputGroupBase = ui.InputGroupBase,
	        CHANGE = "change",
	        DOT = ".",
	        CHECKED = "checked",
	        VERTICAL = "vertical",
	        AFTER = "after";

	    var CheckBoxGroup = InputGroupBase.extend({
	        options: {
	            name: "CheckBoxGroup",
	            inputName: "",
	            inputRounded: "medium",
	            inputSize: "medium",
	            enabled: true,
	            labelPosition: AFTER,
	            layout: VERTICAL,
	            items: []
	        },

	        ITEM_TEMPLATE: '<li class="k-checkbox-item">' +
	            '<input type="checkbox" class="k-checkbox" >' +
	        '</li>',

	        NS: ".kendoCheckBoxGroup",

	        COMPONENT: "kendoCheckBox",

	        groupStyles: {
	            item: "k-checkbox-item",
	            input: "k-checkbox",
	            label: "k-checkbox-label",
	            list: "k-checkbox-list",
	            vertical: "k-list-vertical",
	            horizontal: "k-list-horizontal",
	            disabled: "k-disabled"
	        },

	        checkAll: function(shouldCheck) {
	            var that = this,
	                inputs = that.element.find("input"),
	                getValues = function(i, input) {
	                    that._value.push(input.value);
	                };

	            if(shouldCheck === true) {
	                inputs.prop(CHECKED, true);
	                that._value = [];
	                inputs.each(getValues);
	            } else if(shouldCheck === false) {
	                inputs.prop(CHECKED, false);
	                that._value = [];
	            }
	        },

	        value: function(values) {
	            var that = this,
	                currentInput,
	                selectedValues = [],
	                selectedElements, updatedSelectedElements, i;

	            if(values === undefined) {
	                if(!that._value){
	                    that._value = [];
	                }
	                return that._value;
	            } else if(values === null || values == []) {
	                that._value = [];
	                that.element.find(DOT + that.groupStyles.input).prop(CHECKED, false);
	                return;
	            } else if(!values || values.length < 1) {
	                return;
	            }

	            selectedElements = that.element.find("input[value='" + values[0] + "']");

	            if(selectedElements.length) {
	                selectedValues.push(values[0]);
	            }

	            for(i = 1; i < values.length; i++) {
	                currentInput = that.element.find("input[value='" + values[i] + "']");
	                updatedSelectedElements = selectedElements.add(currentInput);

	                if(updatedSelectedElements.length > selectedElements.length) {
	                    selectedElements = updatedSelectedElements;
	                    selectedValues.push(values[i]);
	                }
	            }

	            that._value = selectedValues;
	            that.element.find(DOT + that.groupStyles.input).prop(CHECKED, false);
	            selectedElements.prop(CHECKED, true);
	        },

	        _changeHandler: function(e) {
	            var target = $(e.target),
	                value = target.val(),
	                filterOut = function(item){
	                    return item !== value;
	                };

	            if(this._targetForPreventedChange === e.target) {
	                this._targetForPreventedChange = null;
	                return;
	            }

	            if(!this._value){
	                this._value = [];
	            }

	            if(target.is(":checked")) {
	                this._value.push(value);
	            } else {
	                this._value = this._value.filter(filterOut);
	            }

	            this.trigger(CHANGE, {
	                target: target
	            });
	        },

	        _dataValRequired: function(validationAttributes) {
	            validationAttributes["data-msg-required"] = this.wrapper.attr("data-val-required");
	            validationAttributes["data-rule-required"] = "true";
	        }
	    });

	    kendo.cssProperties.registerPrefix("CheckBoxGroup", "k-checkbox-");

	    kendo.cssProperties.registerValues("CheckBoxGroup", [{
	        prop: "rounded",
	        values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
	    }]);

	    ui.plugin(CheckBoxGroup);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ }),

/***/ 1111:
/***/ (function(module, exports) {

	module.exports = require("./kendo.inputgroupbase");

/***/ }),

/***/ 1112:
/***/ (function(module, exports) {

	module.exports = require("./kendo.checkbox");

/***/ })

/******/ });