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

	__webpack_require__(968);
	module.exports = __webpack_require__(968);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(969) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {

	var kendo = window.kendo,
	    DropDownList = kendo.ui.DropDownList,
	    dom = kendo.ui.editor.Dom;

	var SelectBox = DropDownList.extend({
	    init: function(element, options) {
	        var that = this;

	        DropDownList.fn.init.call(that, element, options);

	        // overlay drop-down with popout for snappier interaction
	        if (kendo.support.mobileOS.ios) {
	            this._initSelectOverlay();
	            this.bind("dataBound", $.proxy(this._initSelectOverlay, this));
	        }

	        that.text(that.options.title);

	        that.element.attr("title", that.options.title);
	        that.wrapper.attr("title", that.options.title);

	        that.bind("open", function() {
	            if (that.options.autoSize) {
	                var list = that.list,
	                    listWidth;

	                list.css({
	                        whiteSpace: "nowrap",
	                        width: "auto"
	                    });

	                listWidth = list.width();

	                if (listWidth > 0) {
	                    listWidth += 20;
	                } else {
	                    listWidth = that._listWidth;
	                }

	                list.css("width", listWidth + kendo.support.scrollbar());

	                that._listWidth = listWidth;
	            }
	        });
	    },
	    options: {
	        name: "SelectBox",
	        index: -1
	    },

	    _initSelectOverlay: function() {
	        var selectBox = this;
	        var value = selectBox.value();
	        var view = this.dataSource.view();
	        var item;
	        var html = "";
	        var encode = kendo.htmlEncode;

	        for (var i = 0; i < view.length; i++) {
	            item = view[i];

	            html += "<option value='" + encode(item.value) + "'";

	            if (item.value == value) {
	                html += " selected";
	            }

	            html += ">" + encode(item.text) + "</option>";
	        }

	        var select = $("<select class='k-select-overlay'>" + html + "</select>");
	        var wrapper = $(this.element).closest(".k-widget");

	        wrapper.next(".k-select-overlay").remove();

	        select.insertAfter(wrapper);

	        select.on("change", function() {
	            selectBox.value(this.value);
	            selectBox.trigger("change");
	        });
	    },

	    value: function(value) {
	        var that = this,
	            result = DropDownList.fn.value.call(that, value);

	        if (value === undefined) {
	            return result;
	        }

	        if (!DropDownList.fn.value.call(that)) {
	           that.text(that.options.title);
	        }
	    },

	    decorate: function(body) {
	        var that = this,
	            dataSource = that.dataSource,
	            items = dataSource.data(),
	            i, tag, className, style;

	        if (body) {
	            that.list.css("background-color", dom.getEffectiveBackground($(body)));
	        }

	        for (i = 0; i < items.length; i++) {
	            tag = items[i].tag || "span";
	            className = items[i].className;

	            style = dom.inlineStyle(body, tag, { className : className });

	            style = style.replace(/"/g, "'");

	            items[i].style = style + ";display:inline-block";
	        }

	        dataSource.trigger("change");
	    }
	});


	kendo.ui.plugin(SelectBox);
	kendo.ui.editor.SelectBox = SelectBox;

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 969:
/***/ (function(module, exports) {

	module.exports = require("./serializer");

/***/ })

/******/ });