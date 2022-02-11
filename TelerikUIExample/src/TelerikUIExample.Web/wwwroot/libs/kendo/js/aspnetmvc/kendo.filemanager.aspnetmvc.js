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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	module.exports = __webpack_require__(11);


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("./kendo.data.aspnetmvc");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($, undefined) {
	    var kendo = window.kendo,
	        extend = $.extend;

	    extend(true, kendo.data, {
	        schemas: {
	            "filemanager": {
	                data: function(data) {
	                    return data || [];
	                },
	                model: {
	                    id: "path",
	                    hasChildren: "hasDirectories",
	                    fields: {
	                        name: {field: "Name", editable: true, type: "string", defaultValue: "New Folder" },
	                        size: {field: "Size", editable: false, type: "number"},
	                        path: {field: "Path", editable: false, type: "string"},
	                        extension: {field: "Extension", editable: false, type: "string"},
	                        isDirectory: {field: "IsDirectory", editable: false, defaultValue: true, type: "boolean"},
	                        hasDirectories: {field: "HasDirectories", editable: false, defaultValue: false, type: "boolean"},
	                        created: {field: "Created", type: "date", editable: false},
	                        createdUtc: {field: "CreatedUtc", type: "date", editable: false },
	                        modified: {field: "Modified", type: "date", editable: false},
	                        modifiedUtc: {field: "ModifiedUtc", type: "date", editable: false }
	                    }
	                }
	            }
	        }
	    });
	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })
/******/ ]);