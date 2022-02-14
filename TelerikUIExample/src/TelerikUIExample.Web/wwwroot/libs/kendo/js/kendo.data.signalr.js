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

	module.exports = __webpack_require__(1133);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1076:
/***/ (function(module, exports) {

	module.exports = require("./kendo.data");

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1076) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "data.signalr",
	    name: "SignalR",
	    category: "framework",
	    depends: [ "data" ],
	    hidden: true
	};

	(function($) {
	    var kendo = window.kendo;
	    var isFunction = kendo.isFunction;

	    function isJQueryPromise(promise) {
	        return promise && isFunction(promise.done) && isFunction(promise.fail);
	    }

	    function isNativePromise(promise) {
	        return promise && isFunction(promise.then) && isFunction(promise.catch); // jshint ignore:line
	    }

	    var transport = kendo.data.RemoteTransport.extend({
	        init: function (options) {
	            var signalr = options && options.signalr ? options.signalr : {};

	            var promise = signalr.promise;

	            if (!promise) {
	                throw new Error('The "promise" option must be set.');
	            }

	            if (!isJQueryPromise(promise) && !isNativePromise(promise)) {
	                throw new Error('The "promise" option must be a Promise.');
	            }

	            this.promise = promise;

	            var hub = signalr.hub;

	            if (!hub) {
	                throw new Error('The "hub" option must be set.');
	            }

	            if (typeof hub.on != "function" || typeof hub.invoke != "function") {
	                throw new Error('The "hub" option is not a valid SignalR hub proxy.');
	            }

	            this.hub = hub;

	            kendo.data.RemoteTransport.fn.init.call(this, options);
	        },

	        push: function(callbacks) {
	            var client = this.options.signalr.client || {};

	            if (client.create) {
	                this.hub.on(client.create, callbacks.pushCreate);
	            }

	            if (client.update) {
	                this.hub.on(client.update, callbacks.pushUpdate);
	            }

	            if (client.destroy) {
	                this.hub.on(client.destroy, callbacks.pushDestroy);
	            }
	        },

	        _crud: function(options, type) {
	            var hub = this.hub;
	            var promise = this.promise;
	            var server = this.options.signalr.server;

	            if (!server || !server[type]) {
	                throw new Error(kendo.format('The "server.{0}" option must be set.', type));
	            }

	            var args = [server[type]];

	            var data = this.parameterMap(options.data, type);

	            if (!$.isEmptyObject(data)) {
	                args.push(data);
	            }

	            if (isJQueryPromise(promise)) {
	                promise.done(function() {
	                    hub.invoke.apply(hub, args)
	                              .done(options.success)
	                              .fail(options.error);
	                });
	            } else if (isNativePromise(promise)) {
	                promise.then(function() {
	                    hub.invoke.apply(hub, args)
	                              .then(options.success)
	                              .catch(options.error); // jshint ignore:line
	                });
	            }
	        },

	        read: function(options) {
	            this._crud(options, "read");
	        },

	        create: function(options) {
	            this._crud(options, "create");
	        },

	        update: function(options) {
	            this._crud(options, "update");
	        },

	        destroy: function(options) {
	            this._crud(options, "destroy");
	        }
	    });

	    $.extend(true, kendo.data, {
	        transports: {
	            signalr: transport
	        }
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });