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

	__webpack_require__(1707);
	module.exports = __webpack_require__(1707);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1036:
/***/ (function(module, exports) {

	module.exports = require("../kendo.menu");

/***/ }),

/***/ 1707:
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

	    var TaskBoardCardMenu = ContextMenu.extend({
	        init: function(element, options) {
	            var that = this;

	            ContextMenu.fn.init.call(that, element, options);

	            that._overrideTemplates();
	            that._extendItems();

	            that.bind("select", proxy(that._onSelect, that));
	            that.bind("open", proxy(that._onOpen, that));
	            that.bind("activate", proxy(that._focus, that));
	        },

	        _overrideTemplates: function(){
	            this.templates.sprite = template("#if(spriteCssClass) {#<span class='#: spriteCssClass #'></span>#}#");
	        },

	        defaultItems: {
	            "editCard": { name: "editCard", text: "Edit card", icon: "edit", command: "EditCardCommand", rules: "isEditable" },
	            "deleteCard": { name: "deleteCard", text: "Delete card", icon: "delete", command: "DeleteCardCommand", rules: "isEditable" }
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

	                    if (isBuiltInTool) {
	                        item = item.name;
	                    }

	                    if ($.isPlainObject(item)) {
	                        that._append(item);
	                    } else if (that.defaultItems[item]) {
	                        item = that.defaultItems[item];
	                        that._append(item);
	                    } else if (typeof(item) === "string") {
	                        item = { name: item, text: item, spriteCssClass: item, command: item + "Command" };
	                        that._append(item);
	                    }
	                }
	            } else {
	                for (var key in that.defaultItems) {
	                    item = that.defaultItems[key];
	                    that._append(item);
	                }
	            }
	        },

	        _append: function (item) {
	            var that = this;

	            that._extendItem(item);

	            if (that._validateRules(item)) {
	                that.append(item);
	            }
	        },

	        _extendItem: function(item) {
	            var that = this,
	                messages = that.options.messages,
	                icon = item.icon ? "k-icon k-i-" + item.icon : "",
	                attr = {};

	            attr[kendo.attr("command")] = item.command;

	            if(item.options) {
	                attr[kendo.attr("options")] = item.options;
	            }

	            extend(item, {
	                text: messages[item.name],
	                spriteCssClass: icon + " " + item.spriteCssClass || "",
	                attr: attr,
	                uid: kendo.guid()
	            });
	        },

	        _validateRules: function (tool) {
	            var that = this,
	                states = that.options.states,
	                rules = tool.rules ? tool.rules.split(";") : [];

	            if(!rules.length) {
	                return true;
	            }

	            for (var i = 0; i < rules.length; i++) {
	                if(!states[rules[i]]){
	                    return false;
	                }
	            }

	            return true;
	        },

	        _onSelect: function(ev) {
	            var command = $(ev.item).attr(kendo.attr("command")),
	                options = $(ev.item).attr(kendo.attr("options")),
	                target = $(ev.target);

	            options = typeof(options) === "string" ? { value: options } : options;

	            if (!command) {
	                return;
	            }

	            this.action({
	                command: command,
	                options: extend({ target: target }, options)
	            });
	        },

	        _onOpen: function(ev) {
	            var menu = ev.sender,
	                items = menu.options.items;

	            if (!items && $.isEmptyObject(this.defaultItems)) {
	                ev.preventDefault();
	            }
	        },

	        _focus: function (ev) {
	            if (ev.sender) {
	                ev.sender.element.trigger("focus");
	            }
	        },

	        action: function (args) {
	            this.trigger(ACTION, args);
	        }
	    });

	    extend(kendo.ui.taskboard, {
	        CardMenu: TaskBoardCardMenu
	    });

	    })(window.kendo.jQuery);

	    return window.kendo;

	    }, __webpack_require__(3));

/***/ })

/******/ });