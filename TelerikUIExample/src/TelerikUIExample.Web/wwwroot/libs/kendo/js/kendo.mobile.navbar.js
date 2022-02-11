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

	module.exports = __webpack_require__(1357);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "mobile.navbar",
	    name: "NavBar",
	    category: "mobile",
	    description: "The Kendo mobile NavBar widget is used inside a mobile View or Layout Header element to display an application navigation bar.",
	    depends: [ "core" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        mobile = kendo.mobile,
	        ui = mobile.ui,
	        Widget = ui.Widget;

	    function createContainer(align, element) {
	        var items = element.find("[" + kendo.attr("align") + "=" + align + "]");

	        if (items[0]) {
	            return $('<div class="km-' + align + 'item" />').append(items).prependTo(element);
	        }
	    }

	    function toggleTitle(centerElement) {
	        var siblings = centerElement.siblings(),
	            noTitle = !!centerElement.children("ul")[0],
	            showTitle = (!!siblings[0] && kendo.trim(centerElement.text()) === ""),
	            android = !!(kendo.mobile.application && kendo.mobile.application.element.is(".km-android"));

	        centerElement.prevAll().toggleClass("km-absolute", noTitle);
	        centerElement.toggleClass("km-show-title", showTitle);
	        centerElement.toggleClass("km-fill-title", showTitle && !kendo.trim(centerElement.html()));
	        centerElement.toggleClass("km-no-title", noTitle);
	        centerElement.toggleClass("km-hide-title", android && !siblings.children().is(":visible"));
	    }

	    var NavBar = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            element = that.element;

	            that.container().bind("show", $.proxy(this, "refresh"));

	            element.addClass("km-navbar").wrapInner($('<div class="km-view-title km-show-title" />'));
	            that.leftElement = createContainer("left", element);
	            that.rightElement = createContainer("right", element);
	            that.centerElement = element.find(".km-view-title");
	        },

	        options: {
	            name: "NavBar"
	        },

	        title: function(value) {
	            this.element.find(kendo.roleSelector("view-title")).text(value);
	            toggleTitle(this.centerElement);
	        },

	        refresh: function(e) {
	            var view = e.view;
	            this.title(view.options.title);
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            kendo.destroy(this.element);
	        }
	    });

	    ui.plugin(NavBar);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });