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

	__webpack_require__(1677);
	module.exports = __webpack_require__(1677);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var $ = kendo.jQuery;

	    var CLASS_NAMES = {
	        input: "k-spreadsheet-name-editor",
	        list: "k-spreadsheet-name-list"
	    };

	    var NameEditor = kendo.ui.Widget.extend({
	        init: function(element, options) {
	            kendo.ui.Widget.call(this, element, options);
	            element.addClass(CLASS_NAMES.input);

	            var comboBoxTitle = options.messages.nameBox || "Name Box";
	            var dataSource = new kendo.data.DataSource({
	                transport: {
	                    read: function(options) {
	                        var data = [];
	                        this._workbook.forEachName(function(def){
	                            if (!def.hidden && def.value instanceof kendo.spreadsheet.Ref) {
	                                data.push({ name: def.name });
	                            }
	                        });
	                        options.success(data);
	                    }.bind(this),
	                    cache: false
	                }
	            });

	            var comboElement = $("<input />")
	                .attr("title", comboBoxTitle)
	                .attr("aria-label", comboBoxTitle);

	            this.combo = comboElement.appendTo(element)
	                .kendoComboBox({
	                    clearButton: false,
	                    dataTextField: "name",
	                    dataValueField: "name",
	                    template: "#:data.name#<a role='button' class='k-button-delete' href='\\#'><span class='k-icon k-i-close'></span></a>",
	                    dataSource: dataSource,
	                    autoBind: false,
	                    ignoreCase: true,
	                    change: this._on_listChange.bind(this),
	                    noDataTemplate: "<div></div>",
	                    open: function() {
	                        dataSource.read();
	                    }
	                }).getKendoComboBox();

	            this.combo.input
	                .on("keydown", this._on_keyDown.bind(this))
	                .on("focus", this._on_focus.bind(this));

	            this.combo.popup.element
	                .addClass("k-spreadsheet-names-popup")

	                .on("mousemove", function(ev){
	                    // XXX: should remove this when we find a better
	                    // solution for the popup closing as we hover the
	                    // resize handles.
	                    ev.stopPropagation();
	                })

	                .on("click", ".k-button-delete", function(ev){
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                    var item = $(ev.target).closest(".k-item");
	                    item = this.combo.dataItem(item);
	                    this._deleteItem(item.name);
	                }.bind(this));
	        },
	        value: function(val) {
	            if (val === undefined) {
	                return this.combo.value();
	            } else {
	                this.combo.value(val);
	            }
	        },
	        _deleteItem: function(name) {
	            this.trigger("delete", { name: name });
	        },
	        _on_keyDown: function(ev) {
	            switch (ev.keyCode) {
	              case 27:
	                this.combo.value(this._prevValue);
	                this.trigger("cancel");
	                break;
	              case 13:
	                this.trigger("enter");
	                break;
	            }
	        },
	        _on_focus: function() {
	            this._prevValue = this.combo.value();
	        },
	        _on_listChange: function() {
	            var name = this.combo.value();
	            if (name) {
	                this.trigger("select", { name: name });
	            }
	        }
	    });

	    kendo.spreadsheet.NameEditor = NameEditor;
	})(window.kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });