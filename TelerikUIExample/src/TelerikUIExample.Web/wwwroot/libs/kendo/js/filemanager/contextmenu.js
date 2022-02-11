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

	__webpack_require__(1035);
	module.exports = __webpack_require__(1035);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1036)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var kendo = window.kendo,
	        extend = $.extend,
	        proxy = $.proxy,
	        template = kendo.template,
	        ContextMenu = kendo.ui.ContextMenu,

	        ACTION = "action";

	    var FileManagerContextMenu = ContextMenu.extend({
	        init: function(element, options) {
	            var that = this;

	            ContextMenu.fn.init.call(that, element, options);

	            that._overrideTemplates();
	            that._restrictDefaultItems();
	            that._extendItems();

	            that.bind("select", proxy(that._onSelect, that));
	            that.bind("open", proxy(that._onOpen, that));
	        },

	        _overrideTemplates: function(){
	            this.templates.sprite = template("#if(spriteCssClass) {#<span class='#= spriteCssClass #'></span>#}#");
	        },

	        _restrictDefaultItems: function() {
	            var that = this;

	            if (that.options.isLocalBinding) {
	                that.defaultItems = {};
	            }
	        },

	        defaultItems: {
	            "rename": { text: "Rename", spriteCssClass: "k-icon k-i-edit", command: "RenameCommand" },
	            "delete": { text: "Delete", spriteCssClass: "k-icon k-i-delete", command: "DeleteCommand" }
	        },

	        events: ContextMenu.fn.events.concat([
	            ACTION
	        ]),

	        _extendItems: function(){
	            var that = this,
	                items = that.options.items,
	                item, isBuiltInTool;

	            if(items && items.length){
	                for (var i = 0; i < items.length; i++) {
	                    item = items[i];
	                    isBuiltInTool =  $.isPlainObject(item) && Object.keys(item).length === 1 && item.name;

	                    if(isBuiltInTool){
	                        item = item.name;
	                    }

	                    if($.isPlainObject(item) ) {
	                        that._extendItem(item);
	                        that.append(item);
	                    } else if (that.defaultItems[item]){
	                        item = that.defaultItems[item];
	                        that._extendItem(item);
	                        that.append(item);
	                    }
	                }
	            } else {
	                for (var key in that.defaultItems) {
	                    item = that.defaultItems[key];
	                    that._extendItem(item);
	                    that.append(item);
	                }
	            }
	        },

	        _extendItem: function(item) {
	            var that = this,
	                messages = that.options.messages;

	            extend(item, {
	                text: messages[item.text],
	                spriteCssClass: item.spriteCssClass || "",
	                attr: {
	                    "data-command": item.command
	                }
	            });
	        },

	        _onSelect: function(ev) {
	            var command = $(ev.item).data("command");
	            var target = $(ev.target);

	            if (!command) {
	                return;
	            }

	            this.action({
	                command: command,
	                options: { target: target }
	            });
	        },

	        _onOpen: function(ev) {
	            var menu = ev.sender,
	                items = menu.options.items;

	            if (!items && $.isEmptyObject(this.defaultItems)) {
	                ev.preventDefault();
	            }
	        },

	        action: function (args) {
	            this.trigger(ACTION, args);
	        }
	    });

	    extend(kendo.ui.filemanager, {
	        ContextMenu: FileManagerContextMenu
	    });

	    })(window.kendo.jQuery);

	    return window.kendo;

	    }, __webpack_require__(3));

/***/ }),

/***/ 1036:
/***/ (function(module, exports) {

	module.exports = require("../kendo.menu");

/***/ })

/******/ });