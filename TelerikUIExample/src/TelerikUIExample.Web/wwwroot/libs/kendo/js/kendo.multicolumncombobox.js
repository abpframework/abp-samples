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

	module.exports = __webpack_require__(1367);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1070:
/***/ (function(module, exports) {

	module.exports = require("./kendo.combobox");

/***/ }),

/***/ 1367:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1070) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "multicolumncombobox",
	    name: "MultiColumnComboBox",
	    category: "web",
	    description: "The MultiColumnComboBox widget allows the selection from pre-defined values or entering a new value where the list popup is rendered in table layout.",
	    depends: [ "combobox" ],
	    features: [ {
	        id: "mobile-scroller",
	        name: "Mobile scroller",
	        description: "Support for kinetic scrolling in mobile device",
	        depends: [ "mobile.scroller" ]
	    }, {
	        id: "virtualization",
	        name: "VirtualList",
	        description: "Support for virtualization",
	        depends: [ "virtuallist" ]
	    } ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        ComboBox = ui.ComboBox,
	        percentageUnitsRegex = /^\d+(\.\d+)?%$/i,
	        MCCOMBOBOX = "k-dropdowngrid",
	        POPUPCLASS = "k-dropdowngrid-popup k-popup-flush";

	    var MultiColumnComboBox = ComboBox.extend({
	        init: function(element, options) {
	            ComboBox.fn.init.call(this, element, options);
	            this.list.addClass(POPUPCLASS);

	            if (this._allColumnsWidthsAreSet(this.options)) {
	                this.list.width(this._calculateDropDownWidth(this.options));
	            } else if (this.options.dropDownWidth) {
	                this.list.width(this.options.dropDownWidth);
	            }
	        },

	        options: {
	            name: "MultiColumnComboBox",
	            ns: ".kendoMultiColumnComboBox",
	            columns: [],
	            dropDownWidth: null,
	            filterFields: []
	        },

	        setOptions: function(options) {
	            ComboBox.fn.setOptions.call(this, options);
	            if (this._allColumnsWidthsAreSet(options)) {
	                this.list.width(this._calculateDropDownWidth(options));
	            } else if (this.options.dropDownWidth) {
	                this.list.width(this.options.dropDownWidth);
	            }
	        },

	        _allColumnsWidthsAreSet: function (options) {
	            var columns = options.columns;

	            if (!columns || !columns.length) {
	                return false;
	            }

	            for (var i = 0; i < columns.length; i++) {
	                var currentWidth = columns[i].width;
	                if(!currentWidth  || isNaN(parseInt(currentWidth, 10)) || percentageUnitsRegex.test(currentWidth)){
	                    return false;
	                }
	            }

	            return true;
	        },

	        _calculateDropDownWidth: function (options) {
	            var columns = options.columns;
	            var totalWidth = kendo.support.scrollbar();

	            for (var i = 0; i < columns.length; i++) {
	                var currentWidth = columns[i].width;
	                totalWidth = totalWidth + parseInt(currentWidth, 10);
	            }

	            return totalWidth;
	        },

	        _wrapper: function() {
	            ComboBox.fn._wrapper.call(this);
	            this.wrapper.addClass(MCCOMBOBOX);
	        }
	    });

	    ui.plugin(MultiColumnComboBox);

	    kendo.cssProperties.registerPrefix("MultiColumnComboBox", "k-input-");

	    kendo.cssProperties.registerValues("MultiColumnComboBox", [{
	        prop: "rounded",
	        values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
	    }]);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });