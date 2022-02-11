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

	module.exports = __webpack_require__(1365);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1365:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "mobile.tabstrip",
	    name: "TabStrip",
	    category: "mobile",
	    description: "The mobile TabStrip widget is used inside a mobile view or layout footer element to display an application-wide group of navigation buttons.",
	    depends: [ "core" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.mobile.ui,
	        Widget = ui.Widget,
	        ACTIVE_STATE_CLASS = "km-state-active",
	        SELECT = "select";

	    function createBadge(value) {
	        return $('<span class="km-badge">' + value + '</span>');
	    }

	    var TabStrip = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);
	            that.container().bind("show", $.proxy(this, "refresh"));

	            that.element
	               .addClass("km-tabstrip")
	               .find("a").each(that._buildButton)
	               .eq(that.options.selectedIndex).addClass(ACTIVE_STATE_CLASS);

	            that.element.on("down", "a", "_release");
	        },

	        events: [
	            SELECT
	        ],

	        switchTo: function(url) {
	            var tabs = this.element.find('a'),
	                tab,
	                path,
	                idx = 0,
	                length = tabs.length;

	            if(isNaN(url)) {
	                for (; idx < length; idx ++) {
	                    tab = tabs[idx];
	                    path = tab.href.replace(/(\#.+)(\?.+)$/, "$1"); // remove the fragment query string - http://www.foo.com?foo#bar**?baz=qux**

	                    if (path.indexOf(url, path.length - url.length) !== -1) {
	                        this._setActiveItem($(tab));
	                        return true;
	                    }
	                }
	            } else {
	                this._setActiveItem(tabs.eq(url));
	                return true;
	            }

	            return false;
	        },

	        switchByFullUrl: function(url) {
	            var tab;

	            tab = this.element.find("a[href$='" + url + "']");
	            this._setActiveItem(tab);
	        },

	        clear: function() {
	            this.currentItem().removeClass(ACTIVE_STATE_CLASS);
	        },

	        currentItem: function() {
	            return this.element.children("." + ACTIVE_STATE_CLASS);
	        },

	        badge: function(item, value) {
	            var tabstrip = this.element, badge;

	            if (!isNaN(item)) {
	                item = tabstrip.children().get(item);
	            }

	            item = tabstrip.find(item);
	            badge = $(item.find(".km-badge")[0] || createBadge(value).insertAfter(item.children(".km-icon")));

	            if (value || value === 0) {
	                badge.html(value);
	                return this;
	            }

	            if (value === false) {
	                badge.empty().remove();
	                return this;
	            }

	            return badge.html();
	        },

	        _release: function(e) {
	            if (e.which > 1) {
	                return;
	            }

	            var that = this,
	                item = $(e.currentTarget);

	            if (item[0] === that.currentItem()[0]) {
	                return;
	            }

	            if (that.trigger(SELECT, {item: item})) {
	                e.preventDefault();
	            } else {
	                that._setActiveItem(item);
	            }
	        },

	        _setActiveItem: function(item) {
	            if (!item[0]) {
	                return;
	            }
	            this.clear();
	            item.addClass(ACTIVE_STATE_CLASS);
	        },

	        _buildButton: function() {
	            var button = $(this),
	                icon = kendo.attrValue(button, "icon"),
	                badge = kendo.attrValue(button, "badge"),
	                image = button.find("img"),
	                iconSpan = $('<span class="km-icon"/>');

	            button
	                .addClass("km-button")
	                .attr(kendo.attr("role"), "tab")
	                    .contents().not(image)
	                    .wrapAll('<span class="km-text"/>');

	            if (image[0]) {
	                image.addClass("km-image").prependTo(button);
	            } else {
	                button.prepend(iconSpan);
	                if (icon) {
	                    iconSpan.addClass("km-" + icon);
	                    if (badge || badge === 0) {
	                        createBadge(badge).insertAfter(iconSpan);
	                    }
	                }
	            }
	        },

	        refresh: function(e) {
	            var url = e.view.id;

	            if (url && !this.switchTo(e.view.id)) {
	                this.switchTo(url);
	            }
	        },

	        options: {
	            name: "TabStrip",
	            selectedIndex: 0,
	            enable: true
	        }
	    });

	    ui.plugin(TabStrip);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });