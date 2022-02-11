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

	__webpack_require__(12);
	module.exports = __webpack_require__(12);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(13) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($, undefined) {
	    var kendo = window.kendo,
	        extend = $.extend,
	        isFunction = kendo.isFunction;

	    extend(true, kendo.data, {
	        schemas: {
	            "imagebrowser-aspnetmvc": {
	                data: function(data) {
	                    return data || [];
	                },
	                model: {
	                    id: "name",
	                    fields: {
	                        name: { field: "Name" },
	                        size: { field: "Size" },
	                        type: { field: "EntryType", parse: function(value) {  return value == 0 ? "f" : "d"; } } // jshint ignore:line, afraid to break something with strict equality
	                    }
	                }
	            }
	        }
	    });

	    extend(true, kendo.data, {
	        schemas: {
	            "filebrowser-aspnetmvc": kendo.data.schemas["imagebrowser-aspnetmvc"]
	        }
	    });

	    extend(true, kendo.data, {
	        transports: {
	            "imagebrowser-aspnetmvc": kendo.data.RemoteTransport.extend({
	                init: function(options) {
	                    kendo.data.RemoteTransport.fn.init.call(this, $.extend(true, {}, this.options, options));
	                },
	                _call: function(type, options) {
	                    options.data = $.extend({}, options.data, { path: this.options.path() });

	                    if (isFunction(this.options[type])) {
	                        this.options[type].call(this, options);
	                    } else {
	                        kendo.data.RemoteTransport.fn[type].call(this, options);
	                    }
	                },
	                read: function(options) {
	                    this._call("read", options);
	                },
	                create: function(options) {
	                    this._call("create", options);
	                },
	                destroy: function(options) {
	                    this._call("destroy", options);
	                },
	                update: function() {
	                    //updates are handled by the upload
	                },
	                options: {
	                    read: {
	                        type: "POST"
	                    },
	                    update: {
	                        type: "POST"
	                    },
	                    create: {
	                        type: "POST"
	                    },
	                    destroy: {
	                        type: "POST"
	                    },
	                    parameterMap: function(options, type) {
	                        if (type != "read") {
	                            options.EntryType = options.EntryType === "f" ? 0 : 1;
	                        }
	                        return options;
	                    }
	                }
	            })
	        }
	    });

	    extend(true, kendo.data, {
	        transports: {
	            "filebrowser-aspnetmvc": kendo.data.transports["imagebrowser-aspnetmvc"]
	        }
	    });

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	module.exports = require("./kendo.multiselect.aspnetmvc");

/***/ })

/******/ });