/**
* DevExpress Analytics (dist\js\dx-querybuilder.js)
* Version:  21.2.3
* Build date: Oct 28, 2021
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Internal;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Utils;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ko;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Elements;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceWizardPageId = {
    ChooseDataSourceTypePage: 'chooseDataSourceTypePage',
    ConfigureMasterDetailRelationshipsPage: 'configureMasterDetailRelationshipsPage'
};
exports.SqlDataSourceWizardPageId = {
    ChooseConnectionPage: 'chooseSqlConnectionPage',
    ConfigureQueryPage: 'configureSqlQueryPage',
    ConfigureParametersPage: 'configureSqlParametersPage',
    MultiQueryConfigurePage: 'multiSqlQueryConfigurePage',
    MultiQueryConfigureParametersPage: 'multiSqlQueryConfigureParametersPage'
};
exports.JsonDataSourceWizardPageId = {
    ChooseJsonSourcePage: 'chooseJsonSourcePage',
    ChooseJsonSchemaPage: 'chooseJsonSchemaPage',
    ChooseConnectionPage: 'chooseJsonConnectionPage',
    SpecifyJsonConnectionPage: 'specifyJsonConnectionPage'
};
exports.ObjectDataSourceWizardPageId = {
    ChooseTypesPage: 'chooseObjectDataSourceTypesPage',
    ChooseDataMembersPage: 'chooseObjectDataSourceDataMembersPage',
    ConfigureParametersPage: 'configureObjectDataSourceParametersPage'
};
exports.FullscreenDataSourceWizardPageId = {
    ChooseDataSourceTypePage: exports.DataSourceWizardPageId.ChooseDataSourceTypePage,
    SpecifySqlDataSourceSettingsPage: 'specifySqlDataSourceSettingsPage',
    SpecifyJsonDataSourceSettingsPage: 'specifyJsonDataSourceSettingsPage',
    SpecifyObjectDataSourceSettingsPage: 'specifyObjectDataSourceSettingsPage'
};
exports.FullscreenDataSourceWizardSectionId = {
    SpecifyJsonConnectionPage: exports.JsonDataSourceWizardPageId.SpecifyJsonConnectionPage,
    ChooseJsonSchemaPage: exports.JsonDataSourceWizardPageId.ChooseJsonSchemaPage,
    ChooseJsonSourcePage: exports.JsonDataSourceWizardPageId.ChooseJsonSourcePage,
    ChooseSqlConnectionPage: exports.SqlDataSourceWizardPageId.ChooseConnectionPage,
    ConfigureQueryPage: exports.SqlDataSourceWizardPageId.MultiQueryConfigurePage,
    ConfigureQueryParametersPage: exports.SqlDataSourceWizardPageId.MultiQueryConfigureParametersPage,
    ConfigureMasterDetailRelationshipsPage: exports.DataSourceWizardPageId.ConfigureMasterDetailRelationshipsPage
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(1);
var WizardPageBase = (function (_super) {
    __extends(WizardPageBase, _super);
    function WizardPageBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeAlways = false;
        _this._onChange = function () { return void 0; };
        return _this;
    }
    WizardPageBase.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._onChange = function () { return void 0; };
    };
    WizardPageBase.prototype.commit = function () {
        return $.Deferred().resolve().promise();
    };
    WizardPageBase.prototype.onChange = function (callback) {
        this._onChange = callback;
    };
    WizardPageBase.prototype.initialize = function (state, stateChanged) {
        return $.Deferred().resolve().promise();
    };
    WizardPageBase.prototype.canNext = function () {
        return true;
    };
    WizardPageBase.prototype.canFinish = function () {
        return false;
    };
    return WizardPageBase;
}(utils_1.Disposable));
exports.WizardPageBase = WizardPageBase;
var _WrappedWizardPage = (function (_super) {
    __extends(_WrappedWizardPage, _super);
    function _WrappedWizardPage(pageId, page, template, description) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.page = page;
        _this.template = template;
        _this.description = description;
        _this._isInitialized = false;
        _this._initDef = null;
        _this.isChanged = true;
        if (page.onChange) {
            _this.onChange = function (callback) { return page.onChange(callback); };
        }
        return _this;
    }
    _WrappedWizardPage.prototype.dispose = function () {
        this.onChange = null;
        this[wizard_1.BaseWizard.__loadingStateFunctionName] = null;
        this.page.dispose();
        this._initDef && this._initDef.reject();
        this._initDef = null;
    };
    _WrappedWizardPage.prototype.resetCommitedState = function () {
        this._lastCommitedState = null;
    };
    _WrappedWizardPage.prototype.commit = function () {
        var _this = this;
        return this.page.commit().done(function (result) {
            _this.isChanged = JSON.stringify(_this._lastCommitedState) !== JSON.stringify(result);
            _this._lastCommitedState = result;
        });
    };
    _WrappedWizardPage.prototype.initialize = function (state, force, stateChanged) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (stateChanged === void 0) { stateChanged = false; }
        this._initDef && this._initDef.reject();
        this._initDef = $.Deferred();
        if (!this._isInitialized || force) {
            this._isInitialized = true;
            this.page.initialize(state, stateChanged).fail(function () {
                _this._isInitialized = false;
                _this._initDef && _this._initDef.reject();
            }).done(function (result) {
                _this._initDef && _this._initDef.resolve(result);
            });
        }
        else {
            this._initDef.resolve();
        }
        return this._initDef.promise();
    };
    return _WrappedWizardPage;
}(utils_1.Disposable));
exports._WrappedWizardPage = _WrappedWizardPage;
var wizard_1 = __webpack_require__(14);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = __webpack_require__(0);
var initializer_1 = __webpack_require__(70);
var serializer_1 = __webpack_require__(1);
var _requestwrapper_1 = __webpack_require__(16);
var RequestWrapper = (function () {
    function RequestWrapper() {
    }
    RequestWrapper.prototype.sendRequest = function (action, arg) {
        return _utils_1.ajax(initializer_1.HandlerUri(), action, arg);
    };
    RequestWrapper.prototype._sendRequest = function (settings) {
        return _utils_1.ajax(settings);
    };
    RequestWrapper.prototype.getDbSchema = function (connection, tables) {
        var requestModel = {
            connectionJSON: _requestwrapper_1.serializeDataConnection(connection),
            tables: null,
            views: null
        };
        if (tables && tables.length > 0) {
            requestModel.tables = (tables || []).filter(function (x) { return !x.isView; }).map(function (x) { return x.name; });
            requestModel.views = (tables || []).filter(function (x) { return x.isView; }).map(function (x) { return x.name; });
        }
        return this.sendRequest('getDBSchema', encodeURIComponent(JSON.stringify(requestModel)));
    };
    RequestWrapper.prototype.getDbStoredProcedures = function (connection) {
        var requestJson = JSON.stringify({
            connectionJSON: _requestwrapper_1.serializeDataConnection(connection)
        });
        return this.sendRequest('getDBStoredProcedures', encodeURIComponent(requestJson));
    };
    RequestWrapper.prototype.getSelectStatement = function (connection, queryJSON) {
        var requestJson = JSON.stringify({
            connectionJSON: _requestwrapper_1.serializeDataConnection(connection),
            sqlQueryJSON: queryJSON
        });
        return this.sendRequest('getSelectStatement', encodeURIComponent(requestJson));
    };
    RequestWrapper.prototype.getDataPreview = function (connection, queryJSON) {
        var requestJson = JSON.stringify({
            connectionJSON: _requestwrapper_1.serializeDataConnection(connection),
            sqlQueryJSON: queryJSON
        });
        return this.sendRequest('getDataPreview', encodeURIComponent(requestJson));
    };
    RequestWrapper.prototype.rebuildResultSchema = function (dataSource, queryName, relationsEditing) {
        if (relationsEditing === void 0) { relationsEditing = false; }
        var requestJson = JSON.stringify({
            sqlDataSourceJSON: JSON.stringify({ 'SqlDataSource': new serializer_1.ModelSerializer().serialize(dataSource) }),
            queryName: queryName,
            relationsEditing: relationsEditing
        });
        return this.sendRequest('rebuildResultSchema', encodeURIComponent(requestJson));
    };
    RequestWrapper.prototype.validateJsonUri = function (jsonDataSource) {
        var uriJsonSourceJSON = JSON.stringify(jsonDataSource.source.serialize(true));
        var requestJson = JSON.stringify({
            uriJsonSourceJSON: uriJsonSourceJSON
        });
        var ajaxSettings = {
            uri: initializer_1.HandlerUri(),
            action: 'validateJsonEndPoint',
            arg: encodeURIComponent(requestJson),
            ignoreError: function () { return true; }
        };
        return this._sendRequest(ajaxSettings);
    };
    RequestWrapper.prototype.saveJsonSource = function (connectionName, jsonDataSource) {
        var jsonSource = jsonDataSource.source;
        var jsonSourceJSON = JSON.stringify(jsonSource.serialize(true));
        var requestString = JSON.stringify({
            connectionName: connectionName,
            customJson: jsonSource.json(),
            uriJsonSourceJSON: jsonSourceJSON
        });
        return this.sendRequest('saveJsonSource', encodeURIComponent(requestString));
    };
    RequestWrapper.prototype.getJsonSchema = function (jsonDataSource, parameters) {
        var jsonSource = jsonDataSource.source;
        var jsonSourceJSON = JSON.stringify(jsonSource.serialize(true));
        var requestString = JSON.stringify({
            connectionName: jsonDataSource.connectionName(),
            customJson: jsonSource.json(),
            uriJsonSourceJSON: jsonSourceJSON,
            parameters: parameters
        });
        return this.sendRequest('getJsonSchema', encodeURIComponent(requestString));
    };
    RequestWrapper.prototype.getObjectTypeDescriptions = function (context) {
        return this.sendRequest('getObjectSchema', context);
    };
    return RequestWrapper;
}());
exports.RequestWrapper = RequestWrapper;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlQueryType = {
    customSqlQuery: 'CustomSqlQuery',
    tableQuery: 'SelectQuery',
    storedProcQuery: 'StoredProcQuery'
};
exports.JsonSourceType = {
    fileJsonSource: 'FileJsonSource',
    customJsonSource: 'CustomJsonSource',
    uriJsonSource: 'UriJsonSource'
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets.Internal;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var _utils_1 = __webpack_require__(0);
var _utils_2 = __webpack_require__(0);
var dbColumn_1 = __webpack_require__(18);
var _localization_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var _editorTypeMapper_1 = __webpack_require__(0);
var dataSourceParameterMeta_1 = __webpack_require__(33);
var expressionFunctions_1 = __webpack_require__(111);
var serializer_1 = __webpack_require__(1);
var _utils_3 = __webpack_require__(0);
function integerValueConverter(val, defaultVal, type) {
    return _utils_1.integerValueConverter(val, defaultVal, type);
}
function floatValueConverter(val, defaultVal, type) {
    return _utils_1.floatValueConverter(val, defaultVal, type);
}
function expressionValueConverter(val) {
    if (val instanceof Date) {
        var prependZero = function (x) { return (x < 10 ? '0' : '') + x; };
        return _utils_2.formatUnicorn('#{0}/{1}/{2} {3}:{4}#', prependZero(val.getMonth() + 1), prependZero(val.getDate()), val.getFullYear(), prependZero(val.getHours()), prependZero(val.getMinutes()));
    }
    return (val || '').toString();
}
var DataSourceParameterTypeValue = (function () {
    function DataSourceParameterTypeValue(name, defaultValue, _valueConverter, realTypeName) {
        var _this = this;
        this.name = name;
        this.defaultValue = defaultValue;
        this.realTypeName = realTypeName;
        if (_valueConverter)
            this.valueConverter = function (val) { return _valueConverter(val, defaultValue, _this.name); };
    }
    Object.defineProperty(DataSourceParameterTypeValue.prototype, "specifics", {
        get: function () {
            return dbColumn_1.DBColumn.GetSpecific(this.realTypeName || this.name);
        },
        enumerable: true,
        configurable: true
    });
    return DataSourceParameterTypeValue;
}());
var tryParseDate = function (val) {
    var date;
    try {
        date = _localization_1.parseDate(val);
    }
    catch (e) {
        date = dateDefaultValue();
    }
    return date;
};
var dateDefaultValue = function () {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
};
var DataSourceParameter = (function (_super) {
    __extends(DataSourceParameter, _super);
    function DataSourceParameter(model, serializer, _serializationsInfo) {
        if (_serializationsInfo === void 0) { _serializationsInfo = dataSourceParameterMeta_1.dsParameterSerializationInfo; }
        var _this = _super.call(this) || this;
        _this._serializationsInfo = _serializationsInfo;
        _this._valueInfo = ko.observable(dataSourceParameterMeta_1.parameterValueSerializationsInfo);
        _this._parametersFunctions = expressionFunctions_1.expressionFunctions;
        _this.isValid = ko.observable(true);
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(_this, _utils_3.extend(model, { '@ItemType': 'Parameter' }));
        _this.name = ko.pureComputed({
            read: function () { return _this._name(); },
            write: function (value) { if (DataSourceParameter.validateName(value))
                _this._name(value); }
        });
        _this._expressionValue = ko.observable({
            value: _this._value,
            functions: _this._parametersFunctions
        });
        _this._disposables.push(_this.type.subscribe(function (val) {
            if (_editorTypeMapper_1.IsDataAccessExpression(val)) {
                _this.resultType(_this._previousResultType);
            }
            else {
                _this.resultType(null);
                _this._previousResultType = val;
            }
            _this._updateValueInfo(val);
        }));
        _this._previousResultType = (_editorTypeMapper_1.IsDataAccessExpression(_this.type.peek()))
            ? _this.resultType()
            : _this.type();
        _this.value = ko.pureComputed({
            read: function () {
                return _editorTypeMapper_1.IsDataAccessExpression(_this.type()) ? _this._expressionValue() : _this._value();
            },
            write: function (val) {
                _this._value(val);
            }
        });
        _this._updateValueInfo(_this.type.peek());
        return _this;
    }
    DataSourceParameter._getTypeValue = function (typeName, resultType) {
        if (resultType === void 0) { resultType = null; }
        var result = DataSourceParameter._typeValues.filter(function (type) { return type.name === typeName; });
        if (result.length > 0) {
            if (resultType && _editorTypeMapper_1.IsDataAccessExpression(typeName))
                result[0].realTypeName = resultType;
            return result[0];
        }
        return { name: typeName, defaultValue: null, specifics: 'String', disableEditor: true };
    };
    DataSourceParameter.prototype._getTypeValue = function (typeName) {
        return DataSourceParameter._getTypeValue(typeName, this.resultType());
    };
    DataSourceParameter.prototype._tryConvertValue = function (value, typeValue) {
        if (!DataSourceParameter._isValueValid(value))
            return typeValue.defaultValue;
        var converter = typeValue.valueConverter || (function (val) { return val; }), newValue = converter(value);
        return DataSourceParameter._isValueValid(newValue) ? newValue : typeValue.defaultValue;
    };
    DataSourceParameter._isValueValid = function (value) {
        return value !== void 0 && value !== null && !isNaN(typeof value === 'string' ? '' : value);
    };
    DataSourceParameter.prototype.getEditorType = function (type) {
        return _editorTypeMapper_1.getEditorType(type);
    };
    DataSourceParameter.prototype._updateValueInfo = function (newType) {
        var _this = this;
        var typeValue = this._getTypeValue(newType);
        var newValue = this._tryConvertValue(this._value(), typeValue);
        var expressionOptions = this._expressionValue.peek();
        this._expressionValue(null);
        this._value(null);
        this._valueInfo(_utils_3.extend({}, dataSourceParameterMeta_1.parameterValueSerializationsInfo, {
            editor: this.getEditorType(typeValue.name),
            disabled: typeValue.disableEditor === true,
            editorOptions: {
                onFocusOut: function (params) {
                    _this.isValid(params.component.option('isValid'));
                }
            }
        }));
        this._expressionValue(expressionOptions);
        this._value(newValue);
    };
    Object.defineProperty(DataSourceParameter.prototype, "specifics", {
        get: function () {
            var realTypeName = (_editorTypeMapper_1.IsDataAccessExpression(this.type.peek()))
                ? this.resultType()
                : this.type();
            var result = DataSourceParameter._typeValues.filter(function (type) { return type.name === realTypeName; });
            if (result.length > 0)
                return result[0].specifics;
            return 'string';
        },
        enumerable: true,
        configurable: true
    });
    DataSourceParameter.validateName = function (nameCandidate) {
        return nameCandidate && !nameCandidate.match(/[~`!"№;%\^:\?*\(\)&\-\+={}\[\]\|\\\/,\.<>'\s]/);
    };
    DataSourceParameter.prototype.getInfo = function () {
        if (this.type) {
            var info = _utils_3.extend(true, [], this._serializationsInfo);
            info.splice(info.indexOf(info.filter(function (prop) { return prop.propertyName === 'value'; })[0]), 1, this._valueInfo());
            return info;
        }
        return this._serializationsInfo;
    };
    DataSourceParameter.prototype.isPropertyVisible = function (propName) {
        if (propName === 'resultType')
            return _editorTypeMapper_1.IsDataAccessExpression(this.type());
        return true;
    };
    DataSourceParameter._typeValues = [
        new DataSourceParameterTypeValue('System.DateTime', dateDefaultValue(), tryParseDate),
        new DataSourceParameterTypeValue('System.String', ''),
        new DataSourceParameterTypeValue('System.SByte', '0', integerValueConverter),
        new DataSourceParameterTypeValue('System.Int16', '0', integerValueConverter),
        new DataSourceParameterTypeValue('System.Int32', '0', integerValueConverter),
        new DataSourceParameterTypeValue('System.Int64', '0', integerValueConverter),
        new DataSourceParameterTypeValue('System.Byte', '0', integerValueConverter),
        new DataSourceParameterTypeValue('System.UInt16', '0', integerValueConverter),
        new DataSourceParameterTypeValue('System.UInt32', '0', integerValueConverter),
        new DataSourceParameterTypeValue('System.UInt64', '0', integerValueConverter),
        new DataSourceParameterTypeValue('System.Decimal', '0', floatValueConverter),
        new DataSourceParameterTypeValue('System.Double', '0', floatValueConverter),
        new DataSourceParameterTypeValue('System.Single', '0', floatValueConverter),
        new DataSourceParameterTypeValue('System.Boolean', false, function (val) { return val !== void 0 ? String(val).toLowerCase() === 'true' : val; }),
        new DataSourceParameterTypeValue('System.Guid', '00000000-0000-0000-0000-000000000000'),
        new DataSourceParameterTypeValue(_editorTypeMapper_1.ExpressionType, '', expressionValueConverter),
        new DataSourceParameterTypeValue('System.Char', ''),
    ];
    return DataSourceParameter;
}(utils_1.Disposable));
exports.DataSourceParameter = DataSourceParameter;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chooseDataSourceTypePage_1 = __webpack_require__(36);
var configureQueryPage_1 = __webpack_require__(24);
var serializer_1 = __webpack_require__(1);
var masterDetailRelation_1 = __webpack_require__(51);
var _utils_1 = __webpack_require__(0);
var jsonDataSource_1 = __webpack_require__(50);
var objectDataSource_1 = __webpack_require__(23);
var _defaultRestoreSqlDataSourceFromState = function (state, requestWrapper, dataSourceId) {
    var _a, _b;
    var wrapper = new configureQueryPage_1._SqlDataSourceWrapper(state.sqlDataSourceJSON, state.queryName, requestWrapper);
    state.name && wrapper.sqlDataSource.connection.name(state.name);
    var serializer = new serializer_1.ModelSerializer();
    if (state.customQueries && state.customQueries.length > 0) {
        wrapper.customQueries = state.customQueries.map(function (query) {
            return wrapper.sqlDataSource.createQuery(JSON.parse(query), serializer);
        });
        (_a = wrapper.sqlDataSource.queries).push.apply(_a, wrapper.customQueries);
    }
    if (state.relations && state.relations.length > 0) {
        (_b = wrapper.sqlDataSource.relations).push.apply(_b, state.relations.map(function (relation) {
            return new masterDetailRelation_1.MasterDetailRelation(JSON.parse(relation), serializer);
        }));
    }
    wrapper.sqlDataSource.id = dataSourceId || _utils_1.guid().replace(/-/g, '');
    return wrapper;
};
exports._restoreSqlDataSourceFromState = _defaultRestoreSqlDataSourceFromState;
exports._setRestoreSqlDataSourceFromState = function (func) { return exports._restoreSqlDataSourceFromState = func; };
exports._resetRestoreSqlDataSourceFromState = function () { return exports._restoreSqlDataSourceFromState = _defaultRestoreSqlDataSourceFromState; };
var _defaultRestoreJsonDataSourceFromState = function (state, requestWrapper, dataSourceId) {
    var jsonDataSource = new jsonDataSource_1.JsonDataSource({
        'Source': state.jsonSource && JSON.parse(state.jsonSource) || {},
        'Schema': state.jsonScheme && JSON.parse(state.jsonScheme) || {},
        '@RootElement': state.rootElement || ''
    }, undefined, requestWrapper);
    state.connectionName && jsonDataSource.connectionName(state.connectionName);
    state.dataSourceName && jsonDataSource.name(state.dataSourceName);
    jsonDataSource.id = dataSourceId || _utils_1.guid().replace(/-/g, '');
    return jsonDataSource;
};
exports._restoreJsonDataSourceFromState = _defaultRestoreJsonDataSourceFromState;
function _setRestoreJsonDataSourceFromState(func) { exports._restoreJsonDataSourceFromState = func; }
exports._setRestoreJsonDataSourceFromState = _setRestoreJsonDataSourceFromState;
function _resetRestoreJsonDataSourceFromState() { exports._restoreJsonDataSourceFromState = _defaultRestoreJsonDataSourceFromState; }
exports._resetRestoreJsonDataSourceFromState = _resetRestoreJsonDataSourceFromState;
function _restoreObjectDataSourceFromState(state, requestWrapper, dataSourceId) {
    var objectDataSource = new objectDataSource_1.ObjectDataSource();
    objectDataSource.setState(state);
    if (dataSourceId)
        objectDataSource.id = dataSourceId;
    return objectDataSource;
}
exports._restoreObjectDataSourceFromState = _restoreObjectDataSourceFromState;
function _createDefaultDataSourceWizardState(sqlDataSourceWizardState, jsonDataSourceWizardState, objectDataSourceWizardState) {
    if (sqlDataSourceWizardState === void 0) { sqlDataSourceWizardState = {}; }
    if (jsonDataSourceWizardState === void 0) { jsonDataSourceWizardState = { jsonSource: '' }; }
    if (objectDataSourceWizardState === void 0) { objectDataSourceWizardState = {}; }
    return {
        dataSourceType: chooseDataSourceTypePage_1.DataSourceType.Sql,
        jsonDataSourceWizard: jsonDataSourceWizardState,
        sqlDataSourceWizard: sqlDataSourceWizardState,
        objectDataSourceWizard: objectDataSourceWizardState,
        dataSourceId: _utils_1.guid().replace(/-/g, '')
    };
}
exports._createDefaultDataSourceWizardState = _createDefaultDataSourceWizardState;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var _treelistItem_1 = __webpack_require__(10);
var fullscreenWizardPage_1 = __webpack_require__(38);
var CustomQueryTreeListItem = (function (_super) {
    __extends(CustomQueryTreeListItem, _super);
    function CustomQueryTreeListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queryName = ko.computed({
            read: function () { return _this.data && _this.data.name; },
            write: function (newVal) {
                if (_this.data && _this.data.name !== newVal) {
                    _this.data.name = newVal;
                    _this.data['_afterCheckToggled'] && _this.data['_afterCheckToggled'](_this.data);
                }
            }
        });
        _this.editingMode = ko.observable(false);
        return _this;
    }
    CustomQueryTreeListItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.queryName.dispose();
    };
    CustomQueryTreeListItem.prototype._getTemplateName = function () {
        return this._getCustomizedTemplateName(true);
    };
    CustomQueryTreeListItem.prototype._getCustomizedTemplateName = function (isEditable) {
        return isEditable ? 'dxd-custom-query-treelisitem' : _super.prototype._getTemplateName.call(this);
    };
    return CustomQueryTreeListItem;
}(_treelistItem_1.TreeListItemViewModel));
exports.CustomQueryTreeListItem = CustomQueryTreeListItem;
var MultiQueryTreeListItemFactory = (function (_super) {
    __extends(MultiQueryTreeListItemFactory, _super);
    function MultiQueryTreeListItemFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiQueryTreeListItemFactory.prototype.createItem = function (options, path, onItemsVisibilityChanged, rtl, resolver) {
        if (path[0] === 'queries') {
            return new CustomQueryTreeListItem(options, path, onItemsVisibilityChanged, rtl, resolver);
        }
        return _super.prototype.createItem.call(this, options, path, onItemsVisibilityChanged, rtl, resolver);
    };
    return MultiQueryTreeListItemFactory;
}(_treelistItem_1.DefaultTreeListItemFactory));
exports.MultiQueryTreeListItemFactory = MultiQueryTreeListItemFactory;
function getSectionStyle(position, defaultMargin, isVisible) {
    if (defaultMargin === void 0) { defaultMargin = 30; }
    if (isVisible === void 0) { isVisible = true; }
    var _clearStyle = 'inherit';
    var _defaultHalfMargin = '-' + (defaultMargin / 2) + 'px';
    var _fullSize = 100;
    var _defaultSize = _fullSize / 2;
    var _inPercent = function (size) {
        return size + '%';
    };
    if (!position) {
        return {
            top: _defaultHalfMargin,
            bottom: _defaultHalfMargin,
            left: _defaultHalfMargin,
            right: _defaultHalfMargin,
            width: _clearStyle,
            height: _clearStyle,
            display: isVisible ? 'block' : 'none'
        };
    }
    return {
        top: (position === fullscreenWizardPage_1.WizardSectionPosition.Left || position === fullscreenWizardPage_1.WizardSectionPosition.Right || position === fullscreenWizardPage_1.WizardSectionPosition.Top || position === fullscreenWizardPage_1.WizardSectionPosition.TopLeft || position === fullscreenWizardPage_1.WizardSectionPosition.TopRight) ? _defaultHalfMargin : _clearStyle,
        bottom: (position === fullscreenWizardPage_1.WizardSectionPosition.Left || position === fullscreenWizardPage_1.WizardSectionPosition.Right || position === fullscreenWizardPage_1.WizardSectionPosition.Bottom || position === fullscreenWizardPage_1.WizardSectionPosition.BottomLeft || position === fullscreenWizardPage_1.WizardSectionPosition.BottomRight) ? _defaultHalfMargin : _clearStyle,
        left: (position === fullscreenWizardPage_1.WizardSectionPosition.Top || position === fullscreenWizardPage_1.WizardSectionPosition.Bottom || position === fullscreenWizardPage_1.WizardSectionPosition.Left || position === fullscreenWizardPage_1.WizardSectionPosition.TopLeft || position === fullscreenWizardPage_1.WizardSectionPosition.BottomLeft) ? _defaultHalfMargin : _clearStyle,
        right: (position === fullscreenWizardPage_1.WizardSectionPosition.Top || position === fullscreenWizardPage_1.WizardSectionPosition.Bottom || position === fullscreenWizardPage_1.WizardSectionPosition.Right || position === fullscreenWizardPage_1.WizardSectionPosition.TopRight || position === fullscreenWizardPage_1.WizardSectionPosition.BottomRight) ? _defaultHalfMargin : _clearStyle,
        width: (position === fullscreenWizardPage_1.WizardSectionPosition.Top || position === fullscreenWizardPage_1.WizardSectionPosition.Bottom) ? _clearStyle : _inPercent(_defaultSize),
        height: (position === fullscreenWizardPage_1.WizardSectionPosition.Left || position === fullscreenWizardPage_1.WizardSectionPosition.Right) ? _clearStyle : _inPercent(_defaultSize),
        display: isVisible ? 'block' : 'none'
    };
}
exports.getSectionStyle = getSectionStyle;
function subscribeArray(array, subscribeItem, onChange) {
    array().forEach(function (item) { return subscribeItem(item, onChange); });
    return array.subscribe(function (changeSet) {
        changeSet.forEach(function (change) {
            if (change.status === 'added') {
                subscribeItem(change.value, onChange);
            }
            else if (change.status === 'deleted') {
                change.value['dispose'] && change.value['dispose']();
            }
        });
        onChange();
    }, null, 'arrayChange');
}
exports.subscribeArray = subscribeArray;
function subscribeProperties(properties, onChange) {
    var subscriptions = [];
    properties.forEach(function (property) {
        if (property && property.subscribe) {
            subscriptions.push(property.subscribe(function (val) { return onChange(val); }));
        }
    });
    return subscriptions;
}
exports.subscribeProperties = subscribeProperties;
function subscribeObject(object, subscribeProperties, onChange) {
    subscribeProperties(object(), onChange);
    return object.subscribe(function (newVal) {
        subscribeProperties(newVal, onChange);
        onChange();
    });
}
exports.subscribeObject = subscribeObject;
function _createBeforeInitializePageEventArgs(page, self) {
    return {
        page: page.page,
        pageId: page.pageId,
        wizard: self,
        state: self.stateManager.getPageState(page.pageId)
    };
}
exports._createBeforeInitializePageEventArgs = _createBeforeInitializePageEventArgs;
function _createPageEventArgs(page, self) {
    return {
        page: page.page,
        pageId: page.pageId,
        wizard: self
    };
}
exports._createPageEventArgs = _createPageEventArgs;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var stateManager_1 = __webpack_require__(76);
var pageIterator_1 = __webpack_require__(37);
var eventManager_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(13);
var BaseWizard = (function (_super) {
    __extends(BaseWizard, _super);
    function BaseWizard(pageFactory, finishCallback) {
        var _this = _super.call(this) || this;
        _this.pageFactory = pageFactory;
        _this.events = new eventManager_1.EventManager();
        _this._loadingTimeout = null;
        _this.isLoading = ko.observable(false);
        _this._currentPage = ko.observable();
        _this.isVisible = ko.observable(false);
        _this._finishCallback = finishCallback;
        _this._disposables.push(_this.events);
        return _this;
    }
    BaseWizard.prototype._createLoadingState = function (page) {
        var _this = this;
        if (!page[BaseWizard.__loadingStateFunctionName]) {
            page[BaseWizard.__loadingStateFunctionName] = function (newVal) { return _this._loadingState(newVal); };
        }
    };
    BaseWizard.prototype._createNextAction = function (page) {
        var _this = this;
        if (!page[BaseWizard.__nextActionFunctionName]) {
            page[BaseWizard.__nextActionFunctionName] = function () { return _this.nextAction(); };
        }
    };
    BaseWizard.prototype._loadingState = function (active) {
        var _this = this;
        if (active) {
            this._loadingTimeout && clearTimeout(this._loadingTimeout);
            this._loadingTimeout = setTimeout(function () {
                _this.isLoading(true);
            }, 100);
        }
        else {
            this._loadingTimeout && clearTimeout(this._loadingTimeout);
            this.isLoading(false);
        }
    };
    BaseWizard.prototype._callBeforeFinishHandler = function (state, wizardModel) {
        this.events.call('beforeFinish', { state: state });
    };
    BaseWizard.prototype._callAfterFinishHandler = function (state, result) {
        this.events.call('afterFinish', { state: state });
    };
    BaseWizard.prototype.onFinish = function () {
        this.iterator.dispose();
    };
    BaseWizard.prototype.initialize = function (state, createIterator) {
        if (state === void 0) { state = {}; }
        if (createIterator === void 0) { createIterator = function (pageFactory, stateManager) { return new pageIterator_1.PageIterator(pageFactory, stateManager); }; }
        this.events.call('beforeInitialize', { wizard: this, state: state });
        this.stateManager = new stateManager_1.StateManager(state, this.pageFactory);
        this.iterator = createIterator(this.pageFactory, this.stateManager);
        this.events.call('afterInitialize', { wizard: this });
    };
    BaseWizard.prototype.isFirstPage = function () {
        return this._currentPage() && this._currentPage().pageId == this.iterator.getNextPageId();
    };
    BaseWizard.prototype.canNext = function () {
        return !this.isLoading() && this._currentPage() && this.pageFactory.getMetadata(this._currentPage().pageId).canNext(this._currentPage().page);
    };
    BaseWizard.prototype.canFinish = function () {
        return !this.isLoading() && this._currentPage() && this.pageFactory.getMetadata(this._currentPage().pageId).canFinish(this._currentPage().page);
    };
    BaseWizard.prototype._initPage = function (page) {
        this.events.call('beforePageInitialize', _utils_1._createBeforeInitializePageEventArgs(page, this));
        this._createLoadingState(page.page);
        this._createNextAction(page.page);
        return page.initialize(this.stateManager.getPageState(page.pageId));
    };
    BaseWizard.prototype.start = function () {
        var _this = this;
        this.events.call('beforeStart', { wizard: this });
        this._loadingState(true);
        var startPage = this.iterator._getStartPage();
        this._initPage(startPage).done(function () {
            _this._currentPage(startPage);
            _this.events.call('afterPageInitialize', _utils_1._createPageEventArgs(startPage, _this));
        }).always(function () { return _this._loadingState(false); }).fail(function () {
            _this.isVisible(false);
        });
    };
    BaseWizard.prototype.canRunWizard = function () {
        return true;
    };
    BaseWizard.prototype.nextAction = function () {
        var _this = this;
        if (!this.canNext())
            return;
        var currentPage = this.iterator._getCurrentPage();
        this._loadingState(true);
        var revertPreviosPage = function () { return _this.iterator._getPreviousPage().always(function () {
            _this.iterator._resetPages();
            _this._loadingState(false);
        }); };
        currentPage.commit().done(function (result) {
            if (currentPage.isChanged)
                _this.stateManager.setPageState(currentPage.pageId, result);
            _this.iterator._getNextPage().done(function (page) {
                if (page) {
                    _this._initPage(page).done(function () {
                        _this._currentPage(page);
                        _this.events.call('afterPageInitialize', _utils_1._createPageEventArgs(page, _this));
                        _this._loadingState(false);
                    }).fail(function () { return revertPreviosPage(); });
                }
                else
                    revertPreviosPage();
            }).fail(function () { return _this._loadingState(false); });
        }).fail(function () { return _this._loadingState(false); });
    };
    BaseWizard.prototype.previousAction = function () {
        var _this = this;
        if (this.isFirstPage())
            return;
        this._loadingState(true);
        this.iterator._getPreviousPage().done(function (page) {
            if (page) {
                _this._currentPage(page);
            }
        }).always(function () { return _this._loadingState(false); });
    };
    BaseWizard.prototype.goToPage = function (pageId) {
        var _this = this;
        this._loadingState(true);
        this.iterator._goToPage(pageId).done(function (page) {
            if (page) {
                _this._currentPage(page);
            }
        }).always(function () { return _this._loadingState(false); });
    };
    BaseWizard.prototype.finishAction = function () {
        var _this = this;
        if (!this.canFinish())
            return;
        this._loadingState(true);
        var currentPage = this.iterator._getCurrentPage();
        currentPage.commit().done(function (result) {
            _this.stateManager.setPageState(currentPage.pageId, result);
            _this.iterator._resetPages();
            if (_this._finishCallback) {
                var currentState = _this.stateManager.getCurrentState();
                _this._callBeforeFinishHandler(currentState);
                _this._finishCallback(currentState)
                    .done(function (result) {
                    _this.onFinish();
                    _this._callAfterFinishHandler(currentState, result);
                    _this.isVisible(false);
                })
                    .always(function () {
                    _this._loadingState(false);
                });
            }
            else {
                _this._loadingState(false);
                _this.isVisible(false);
            }
        });
    };
    BaseWizard.__loadingStateFunctionName = '__loadingState';
    BaseWizard.__nextActionFunctionName = '__nextAction';
    return BaseWizard;
}(utils_1.Disposable));
exports.BaseWizard = BaseWizard;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var elementViewModel_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(20);
var _utils_1 = __webpack_require__(0);
var DiagramElementBaseViewModel = (function (_super) {
    __extends(DiagramElementBaseViewModel, _super);
    function DiagramElementBaseViewModel(control, parent, serializer) {
        return _super.call(this, control, parent, serializer) || this;
    }
    DiagramElementBaseViewModel.prototype.getControlFactory = function () {
        return controlsFactory_1.diagramControlsFactory;
    };
    return DiagramElementBaseViewModel;
}(elementViewModel_1.ElementViewModel));
exports.DiagramElementBaseViewModel = DiagramElementBaseViewModel;
var DiagramElementViewModel = (function (_super) {
    __extends(DiagramElementViewModel, _super);
    function DiagramElementViewModel(control, parent, serializer) {
        var _this = _super.call(this, _utils_1.extend({ '@ControlType': 'DiagramElement' }, control), parent, serializer) || this;
        _this.connectingPoints = utils_1.deserializeArray(control && control.ConnectingPoints || [], function (item) { return new connectingPointModel_1.ConnectingPointViewModel(item, _this, serializer); });
        if (_this.text() === undefined) {
            _this.text(_this.name());
        }
        return _this;
    }
    return DiagramElementViewModel;
}(DiagramElementBaseViewModel));
exports.DiagramElementViewModel = DiagramElementViewModel;
exports.diagramElementSerializationInfo = [metadata_1.size, metadata_1.location, metadata_1.name, metadata_1.text, { propertyName: 'type', modelName: '@Type' }];
var connectingPointModel_1 = __webpack_require__(30);
var controlsFactory_1 = __webpack_require__(47);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestwrapper_1 = __webpack_require__(8);
var serializer_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
function wrapGetSelectStatement(callback) {
    return function (connection, queryJSON) {
        if (callback)
            return callback(connection, queryJSON);
        return new requestwrapper_1.RequestWrapper().getSelectStatement(connection, queryJSON);
    };
}
exports.wrapGetSelectStatement = wrapGetSelectStatement;
function wrapRebuildResultSchema(callback) {
    return function (dataSource, queryName, relationsEditing) {
        if (callback)
            return callback(dataSource, queryName, relationsEditing);
        return new requestwrapper_1.RequestWrapper().rebuildResultSchema(dataSource, queryName, relationsEditing);
    };
}
exports.wrapRebuildResultSchema = wrapRebuildResultSchema;
function serializeDataConnection(connection) {
    var serializer = new serializer_1.ModelSerializer();
    var data = { 'DataConnection': serializer.serialize(connection) };
    if (!!connection.options)
        _utils_1.extend(data, { 'ConnectionOptions': serializer.serialize(connection.options) });
    return JSON.stringify(data);
}
exports.serializeDataConnection = serializeDataConnection;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = { default: "" };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DBColumnType;
(function (DBColumnType) {
    DBColumnType[DBColumnType["Unknown"] = 0] = "Unknown";
    DBColumnType[DBColumnType["Boolean"] = 1] = "Boolean";
    DBColumnType[DBColumnType["Byte"] = 2] = "Byte";
    DBColumnType[DBColumnType["SByte"] = 3] = "SByte";
    DBColumnType[DBColumnType["Char"] = 4] = "Char";
    DBColumnType[DBColumnType["Decimal"] = 5] = "Decimal";
    DBColumnType[DBColumnType["Double"] = 6] = "Double";
    DBColumnType[DBColumnType["Single"] = 7] = "Single";
    DBColumnType[DBColumnType["Int32"] = 8] = "Int32";
    DBColumnType[DBColumnType["UInt32"] = 9] = "UInt32";
    DBColumnType[DBColumnType["Int16"] = 10] = "Int16";
    DBColumnType[DBColumnType["UInt16"] = 11] = "UInt16";
    DBColumnType[DBColumnType["Int64"] = 12] = "Int64";
    DBColumnType[DBColumnType["UInt64"] = 13] = "UInt64";
    DBColumnType[DBColumnType["String"] = 14] = "String";
    DBColumnType[DBColumnType["DateTime"] = 15] = "DateTime";
    DBColumnType[DBColumnType["Guid"] = 16] = "Guid";
    DBColumnType[DBColumnType["TimeSpan"] = 17] = "TimeSpan";
    DBColumnType[DBColumnType["ByteArray"] = 18] = "ByteArray";
})(DBColumnType = exports.DBColumnType || (exports.DBColumnType = {}));
var DBColumn = (function () {
    function DBColumn(model) {
        this.name = model['Name'];
        this.type = model['ColumnType'];
        this.size = model['Size'];
    }
    DBColumn.GetType = function (dbColumnType) {
        switch (dbColumnType) {
            case DBColumnType.Boolean:
                return 'System.Boolean';
            case DBColumnType.Byte:
                return 'System.Byte';
            case DBColumnType.SByte:
                return 'System.SByte';
            case DBColumnType.Char:
                return 'System.Char';
            case DBColumnType.Decimal:
                return 'System.Decimal';
            case DBColumnType.Double:
                return 'System.Double';
            case DBColumnType.Single:
                return 'System.Single';
            case DBColumnType.Int32:
                return 'System.Int32';
            case DBColumnType.UInt32:
                return 'System.UInt32';
            case DBColumnType.Int16:
                return 'System.Int16';
            case DBColumnType.UInt16:
                return 'System.UInt16';
            case DBColumnType.Int64:
                return 'System.Int64';
            case DBColumnType.UInt64:
                return 'System.UInt64';
            case DBColumnType.String:
                return 'System.String';
            case DBColumnType.DateTime:
                return 'System.DateTime';
            case DBColumnType.Guid:
                return 'System.Guid';
            case DBColumnType.TimeSpan:
                return 'System.TimeSpan';
            case DBColumnType.ByteArray:
                return 'System.Byte[]';
            default:
                return 'System.Object';
        }
    };
    DBColumn.GetSpecific = function (type) {
        switch (type) {
            case 'System.Boolean':
                return 'Bool';
            case 'System.Byte':
            case 'System.SByte':
            case 'System.Int16':
            case 'System.UInt16':
            case 'System.Int32':
            case 'System.UInt32':
            case 'System.Int64':
            case 'System.UInt64':
                return 'Integer';
            case 'System.Char':
            case 'System.Guid':
            case 'System.ByteArray':
            case 'System.String':
                return 'String';
            case 'System.Double':
            case 'System.Single':
            case 'System.Decimal':
                return 'Float';
            case 'System.DateTime':
            case 'System.TimeSpan':
                return 'Date';
            default:
                return 'String';
        }
    };
    return DBColumn;
}());
exports.DBColumn = DBColumn;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function deserializeToCollection(model, createItem, collection) {
    var collection = collection || [];
    if (model) {
        model.forEach(function (value) {
            collection.push(createItem(value));
        });
    }
    return collection;
}
exports.deserializeToCollection = deserializeToCollection;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editorsInfo_1 = __webpack_require__(6);
var _validation_1 = __webpack_require__(0);
var size_1 = __webpack_require__(4);
var point_1 = __webpack_require__(4);
exports.name = { propertyName: 'name', modelName: '@Name', displayName: 'Name', editor: editorsInfo_1.editorTemplates.getEditor('text'), validationRules: _validation_1.nameValidationRules };
exports.text = { propertyName: 'text', modelName: '@Text', displayName: 'Text', editor: editorsInfo_1.editorTemplates.getEditor('text') };
exports.size = { propertyName: 'size', modelName: '@Size', defaultVal: '100,50', from: size_1.Size.fromString, displayName: 'Size', editor: editorsInfo_1.editorTemplates.getEditor('objecteditor') };
exports.location = { propertyName: 'location', modelName: '@Location', from: point_1.Point.fromString, displayName: 'Location', editor: editorsInfo_1.editorTemplates.getEditor('objecteditor') };
exports.sizeLocation = [exports.size, exports.location];
exports.unknownSerializationsInfo = [exports.name].concat(exports.sizeLocation);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var routedConnectorModel_1 = __webpack_require__(31);
var PointSide;
(function (PointSide) {
    PointSide[PointSide["East"] = 0] = "East";
    PointSide[PointSide["South"] = 1] = "South";
    PointSide[PointSide["North"] = 2] = "North";
    PointSide[PointSide["West"] = 3] = "West";
})(PointSide = exports.PointSide || (exports.PointSide = {}));
function determineConnectingPoints(startObject, endObject) {
    var result = { start: null, end: null };
    if (endObject.leftConnectionPoint.location.x() > startObject.rightConnectionPoint.location.x() + routedConnectorModel_1.RoutedConnectorViewModel.GRID_SIZE * 2) {
        result.start = startObject.rightConnectionPoint;
        result.end = endObject.leftConnectionPoint;
    }
    else if (startObject.leftConnectionPoint.location.x() > endObject.rightConnectionPoint.location.x() + routedConnectorModel_1.RoutedConnectorViewModel.GRID_SIZE * 2) {
        result.start = startObject.leftConnectionPoint;
        result.end = endObject.rightConnectionPoint;
    }
    else {
        var startCenter = (startObject.rightConnectionPoint.location.x() + startObject.rightConnectionPoint.location.x()) / 2;
        var endCenter = (endObject.rightConnectionPoint.location.x() + endObject.rightConnectionPoint.location.x()) / 2;
        if (startCenter > endCenter) {
            result.start = startObject.rightConnectionPoint;
            result.end = endObject.rightConnectionPoint;
        }
        else {
            result.start = startObject.leftConnectionPoint;
            result.end = endObject.leftConnectionPoint;
        }
    }
    return result;
}
exports.determineConnectingPoints = determineConnectingPoints;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var baseSurface_1 = __webpack_require__(4);
var ConnectionPointSurface = (function (_super) {
    __extends(ConnectionPointSurface, _super);
    function ConnectionPointSurface(control, context) {
        var _this = _super.call(this, control, context, ConnectionPointSurface._unitProperties) || this;
        _this.template = 'dx-diagram-connection-point';
        _this.selectiontemplate = 'dx-diagram-connection-point';
        _this.relativeX = ko.pureComputed(function () {
            return _this.rect().left - _this.parent.rect().left;
        });
        _this.relativeY = ko.pureComputed(function () {
            return _this.rect().top - _this.parent.rect().top;
        });
        return _this;
    }
    ConnectionPointSurface.prototype.container = function () {
        return this.getRoot();
    };
    ConnectionPointSurface._unitProperties = {
        _x: function (o) {
            return o.location.x;
        },
        _y: function (o) {
            return o.location.y;
        }
    };
    return ConnectionPointSurface;
}(baseSurface_1.SurfaceElementBase));
exports.ConnectionPointSurface = ConnectionPointSurface;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
var ObjectDataSource = (function (_super) {
    __extends(ObjectDataSource, _super);
    function ObjectDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = ko.observable();
        return _this;
    }
    ObjectDataSource.prototype.setState = function (state) {
        this.ctor = state.ctor;
        this.dataMember = state.dataMember;
        this.selectedType = state.selectedType;
        this.id = _utils_1.guid().replace(/-/g, '');
        this.name(state.dataSourceName);
    };
    return ObjectDataSource;
}(utils_1.Disposable));
exports.ObjectDataSource = ObjectDataSource;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var sqlDataSource_1 = __webpack_require__(74);
var utils_1 = __webpack_require__(9);
var serializer_1 = __webpack_require__(1);
var wizardPage_1 = __webpack_require__(7);
var dataSourceWizardState_1 = __webpack_require__(12);
var _storedProceduresQueryControl_1 = __webpack_require__(77);
var _selectStatementQueryControl_1 = __webpack_require__(121);
var _utils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var _selectQuerySqlTextProvider_1 = __webpack_require__(78);
var _requestwrapper_1 = __webpack_require__(16);
var wizard_1 = __webpack_require__(14);
var _queryBuilderPopup_1 = __webpack_require__(79);
var tableQuery_1 = __webpack_require__(34);
var storedProcQuery_1 = __webpack_require__(35);
var customSqlQuery_1 = __webpack_require__(32);
var _utils_2 = __webpack_require__(75);
var pageId_1 = __webpack_require__(5);
var _localization_1 = __webpack_require__(0);
var _localizationStringIds_1 = __webpack_require__(0);
var _SqlDataSourceWrapper = (function () {
    function _SqlDataSourceWrapper(sqlDataSourceJSON, queryName, requestWrapper) {
        var _this = this;
        this.sqlDataSourceJSON = sqlDataSourceJSON;
        this.customQueries = [];
        this.sqlDataSource = new sqlDataSource_1.SqlDataSource(sqlDataSourceJSON ? JSON.parse(sqlDataSourceJSON) : {}, undefined, requestWrapper);
        if (queryName) {
            this.sqlDataSource.queries().some(function (value, index) {
                if (value.name() === queryName) {
                    _this._queryIndex = index;
                    return true;
                }
                return false;
            });
        }
        else {
            this._queryIndex = this.sqlDataSource.queries().length;
        }
    }
    Object.defineProperty(_SqlDataSourceWrapper.prototype, "sqlQuery", {
        get: function () {
            return this.sqlDataSource.queries()[this._queryIndex];
        },
        set: function (val) {
            if (val)
                val.parent = this.sqlDataSource;
            this.sqlDataSource.queries()[this._queryIndex] = val;
        },
        enumerable: true,
        configurable: true
    });
    _SqlDataSourceWrapper.prototype.saveCustomQueries = function () {
        var serializer = new serializer_1.ModelSerializer();
        return this.customQueries.length > 0 && this.customQueries.map(function (x) { return JSON.stringify(serializer.serialize(x)); });
    };
    _SqlDataSourceWrapper.prototype.save = function () {
        return JSON.stringify(new serializer_1.ModelSerializer().serialize(this.sqlDataSource));
    };
    return _SqlDataSourceWrapper;
}());
exports._SqlDataSourceWrapper = _SqlDataSourceWrapper;
var ConfigureQueryPage = (function (_super) {
    __extends(ConfigureQueryPage, _super);
    function ConfigureQueryPage(_options) {
        var _this = _super.call(this) || this;
        _this._options = _options;
        _this._connection = function () {
            return _this._dataSource().connection;
        };
        _this._dataSource = function () {
            return _this._dataSourceWrapper && _this._dataSourceWrapper.sqlDataSource;
        };
        _this.queryNameCaption = function () { return localization_utils_1.getLocalization('Query Name', 'AnalyticsCoreStringId.SqlDSWizard_QueryName') + ':'; };
        _this.queryControl = ko.observable();
        _this.runQueryBuilderBtnText = ko.pureComputed(function () {
            return (!_this._selectStatementControl.sqlString() || _this._selectStatementControl.getQuery().type() === utils_1.SqlQueryType.tableQuery) ?
                localization_utils_1.getLocalization('Run Query Builder...', 'DataAccessUIStringId.Button_QueryBuilder') :
                localization_utils_1.getLocalization('Create New Query...', 'AnalyticsCoreStringId.SqlDSWizard_CreateNewQuery');
        }).extend({ deferred: true });
        _this.placeholder = function () {
            var queryControl = _this.queryControl();
            var query = queryControl && queryControl.getQuery();
            var queryName = _this.initialName || (query && query.generateName());
            return queryName ? _utils_1.formatUnicorn(localization_utils_1.getLocalization('Type custom query name (current name: {0})', 'AnalyticsCoreStringId.SqlDSWizard_QueryNamePlaceholder'), queryName) : queryName;
        };
        _this.queryName = ko.observable('');
        _this.queryTypeItems = [ConfigureQueryPage.QUERY_TEXT, ConfigureQueryPage.SP_TEXT];
        _this.selectedQueryType = ko.observable();
        _this.initialName = '';
        _this._proceduresList = new _storedProceduresQueryControl_1.StoredProceduresQueryControl();
        _this._disposables.push(_this._selectStatementControl = new _selectStatementQueryControl_1.SelectStatementQueryControl(new _selectQuerySqlTextProvider_1.SelectQuerySqlTextProvider(_requestwrapper_1.wrapGetSelectStatement(_this._options.callbacks.selectStatement), _this._connection), _this._options.disableCustomSql));
        _this._disposables.push(_this.selectedQueryType.subscribe(function (value) {
            if (value === ConfigureQueryPage.SP_TEXT) {
                _this[wizard_1.BaseWizard.__loadingStateFunctionName] && _this[wizard_1.BaseWizard.__loadingStateFunctionName](true);
                _this._dataSource().dbSchemaProvider.getDbStoredProcedures().done(function (procedures) {
                    _this._proceduresList.storedProcedures([]);
                    _this._proceduresList.storedProcedures(procedures);
                }).always(function (x) { return _this[wizard_1.BaseWizard.__loadingStateFunctionName] && _this[wizard_1.BaseWizard.__loadingStateFunctionName](false); });
                _this.queryControl(_this._proceduresList);
            }
            else {
                _this.queryControl(_this._selectStatementControl);
            }
        }));
        _this.selectedQueryType(ConfigureQueryPage.QUERY_TEXT);
        _this.popupQueryBuilder = new _queryBuilderPopup_1.QueryBuilderPopup(function (newQuery, isInProcess) {
            _this.queryName(newQuery.name() || newQuery.generateName());
            return _this._selectStatementControl.setQuery(newQuery, isInProcess);
        }, _this._options.rtl, _this._options.callbacks.customizeQBInitData);
        return _this;
    }
    ConfigureQueryPage.prototype.canNext = function () {
        return !this.queryControl().isNextDisabled();
    };
    ConfigureQueryPage.prototype.canFinish = function () {
        return !this.queryControl().isFinishDisabled() || !this.queryControl().isNextDisabled();
    };
    ConfigureQueryPage.prototype.runQueryBuilder = function () {
        var query = this.queryControl().getQuery();
        if (query && query.type() === utils_1.SqlQueryType.tableQuery) {
            query.name(this.queryName());
            this.popupQueryBuilder.show(query, this._dataSource());
        }
        else {
            this.popupQueryBuilder.show(new tableQuery_1.TableQuery({ '@Name': this.queryName() }, this._dataSource()), this._dataSource());
        }
    };
    ConfigureQueryPage.prototype.localizeQueryType = function (queryTypeString) {
        return ConfigureQueryPage.QUERY_TEXT === queryTypeString ?
            localization_utils_1.getLocalization(ConfigureQueryPage.QUERY_TEXT, 'DataAccessUIStringId.WizardPageConfigureQuery_Query') :
            localization_utils_1.getLocalization(ConfigureQueryPage.SP_TEXT, 'DataAccessUIStringId.WizardPageConfigureQuery_StoredProcedure');
    };
    ConfigureQueryPage.prototype.initialize = function (state) {
        this._dataSourceWrapper = dataSourceWizardState_1._restoreSqlDataSourceFromState(state, this._options.requestWrapper);
        this._proceduresList.setQuery(new storedProcQuery_1.StoredProcQuery({}, this._dataSource()));
        this._selectStatementControl.setQuery(new customSqlQuery_1.CustomSqlQuery({}, this._dataSource()));
        this.popupQueryBuilder.isVisible(false);
        if (this._dataSourceWrapper.sqlQuery) {
            this.initialName = this._dataSourceWrapper.sqlQuery.name();
            this.queryName(this.initialName);
            this.selectedQueryType(this._dataSourceWrapper.sqlQuery.type() === utils_1.SqlQueryType.storedProcQuery ? ConfigureQueryPage.SP_TEXT : ConfigureQueryPage.QUERY_TEXT);
            return this.queryControl().setQuery(this._dataSourceWrapper.sqlQuery);
        }
        else {
            this.selectedQueryType(ConfigureQueryPage.QUERY_TEXT);
        }
        return $.Deferred().resolve().promise();
    };
    ConfigureQueryPage.prototype.commit = function () {
        var query = this.queryControl().getQuery();
        if (query) {
            var newQueryName = this.queryName() || this.initialName;
            newQueryName && query.name(newQueryName);
            if (!query.name() || !this._dataSourceWrapper.sqlQuery || this._dataSourceWrapper.sqlQuery.name() !== query.name())
                query.name(_utils_2.generateQueryUniqueName(this._dataSource().queries(), query));
            this._dataSourceWrapper.sqlQuery = query;
        }
        return $.Deferred().resolve({
            queryName: this._dataSourceWrapper.sqlQuery.name(),
            sqlDataSourceJSON: this._dataSourceWrapper.save()
        }).promise();
    };
    ConfigureQueryPage.QUERY_TEXT = 'Query';
    ConfigureQueryPage.SP_TEXT = 'Stored Procedure';
    return ConfigureQueryPage;
}(wizardPage_1.WizardPageBase));
exports.ConfigureQueryPage = ConfigureQueryPage;
function _registerConfigureQueryPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(pageId_1.SqlDataSourceWizardPageId.ConfigureQueryPage, {
        create: function () {
            return new ConfigureQueryPage(dataSourceWizardOptions);
        },
        setState: function (data, state) {
            state.queryName = data.queryName;
            state.sqlDataSourceJSON = data.sqlDataSourceJSON;
        },
        getState: function (state) {
            return state.sqlDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.sqlDataSourceJSON = defaultState.sqlDataSourceJSON;
            state.queryName = defaultState.queryName;
        },
        template: 'dxrd-wizard-create-query-page',
        description: _localization_1.isCustomizedWithUpdateLocalizationMethod('Create a query or select a stored procedure') || localization_utils_1.getLocalization('Create a query or select a stored procedure.', _localizationStringIds_1.StringId.WizardPageConfigureQuery)
    });
}
exports._registerConfigureQueryPage = _registerConfigureQueryPage;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editorsInfo_1 = __webpack_require__(6);
exports.editorTemplates = new editorsInfo_1.EditorTemplates();


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(44);
var editorTemplates_1 = __webpack_require__(25);
exports.AggregationType = {
    None: 'None',
    Count: 'Count',
    Max: 'Max',
    Min: 'Min',
    Avg: 'Avg',
    Sum: 'Sum',
    CountDistinct: 'CountDistinct',
    AvgDistinct: 'AvgDistinct',
    SumDistinct: 'SumDistinct'
};
exports.columnSerializationInfo = [
    metadata_1.name,
    { propertyName: 'displayType', displayName: 'Type', localizationId: 'DataAccessUIStringId.ParametersColumn_Type', disabled: true, editor: editorTemplates_1.editorTemplates.getEditor('text') },
    { propertyName: 'alias', displayName: 'Alias', localizationId: 'DataAccessUIStringId.QueryBuilderColumns_Alias', editor: editorTemplates_1.editorTemplates.getEditor('text') },
    metadata_1.selected,
    {
        propertyName: 'sortingType',
        displayName: 'Sort Type',
        editor: editorTemplates_1.editorTemplates.getEditor('combobox'),
        defaultVal: 'Unsorted',
        valuesArray: [
            { value: 'Unsorted', displayValue: 'Unsorted', localizationId: 'DataAccessUIStringId.SortingTypeNone' },
            { value: 'Ascending', displayValue: 'Ascending', localizationId: 'DataAccessUIStringId.SortingTypeAscending' },
            { value: 'Descending', displayValue: 'Descending', localizationId: 'DataAccessUIStringId.SortingTypeDescending' }
        ],
        localizationId: 'AnalyticsCoreStringId.QueryBuilder_SortType'
    },
    { propertyName: 'sortOrder', displayName: 'Sort Order', editor: editorTemplates_1.editorTemplates.getEditor('numeric'), localizationId: 'DataAccessUIStringId.QueryBuilderColumns_SortOrder' },
    { propertyName: 'groupBy', displayName: 'Group By', editor: editorTemplates_1.editorTemplates.getEditor('bool'), defaultVal: false, localizationId: 'DataAccessUIStringId.QueryBuilderColumns_GroupBy' },
    {
        propertyName: 'aggregate',
        displayName: 'Aggregate',
        editor: editorTemplates_1.editorTemplates.getEditor('comboboxUndo'),
        values: exports.AggregationType,
        defaultVal: exports.AggregationType.None,
        localizationId: 'DataAccessUIStringId.QueryBuilderColumns_Aggregate'
    }
];


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var controlsFactory_1 = __webpack_require__(1);
exports.controlsFactory = new controlsFactory_1.ControlsFactory();


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var elementViewModel_1 = __webpack_require__(4);
var controlsFactory_1 = __webpack_require__(27);
var QueryElementBaseViewModel = (function (_super) {
    __extends(QueryElementBaseViewModel, _super);
    function QueryElementBaseViewModel(control, parent, serializer) {
        return _super.call(this, control, parent, serializer) || this;
    }
    QueryElementBaseViewModel.prototype.getControlFactory = function () {
        return controlsFactory_1.controlsFactory;
    };
    return QueryElementBaseViewModel;
}(elementViewModel_1.ElementViewModel));
exports.QueryElementBaseViewModel = QueryElementBaseViewModel;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var baseSurface_1 = __webpack_require__(4);
var _utils_1 = __webpack_require__(0);
var DiagramElementBaseSurface = (function (_super) {
    __extends(DiagramElementBaseSurface, _super);
    function DiagramElementBaseSurface(control, context, unitProperties) {
        var _this = _super.call(this, control, context, _utils_1.extend({}, DiagramElementBaseSurface._unitProperties, unitProperties)) || this;
        _this.template = 'dx-diagram-element';
        _this.selectiontemplate = 'dx-diagram-element-selection';
        _this.contenttemplate = 'dx-diagram-element-content';
        _this.margin = ko.observable(0);
        _this._disposables.push(_this.positionWidthWithoutMargins = ko.pureComputed(function () {
            return _this['position'].width() - _this.margin() * 2;
        }));
        _this._disposables.push(_this.positionLineHeightWithoutMargins = ko.pureComputed(function () {
            return _this['position'].lineHeight() - _this.margin() * 2;
        }));
        return _this;
    }
    DiagramElementBaseSurface._unitProperties = {
        _height: function (o) {
            return o.size.height;
        },
        _width: function (o) {
            return o.size.width;
        },
        _x: function (o) {
            return o.location.x;
        },
        _y: function (o) {
            return o.location.y;
        }
    };
    return DiagramElementBaseSurface;
}(baseSurface_1.SurfaceElementBase));
exports.DiagramElementBaseSurface = DiagramElementBaseSurface;
var DiagramElementSurface = (function (_super) {
    __extends(DiagramElementSurface, _super);
    function DiagramElementSurface(control, context) {
        var _this = _super.call(this, control, context, null) || this;
        _this.contenttemplate = 'dxdd-element-content-with-connecting-points';
        return _this;
    }
    DiagramElementSurface.prototype._getChildrenHolderName = function () { return 'connectingPoints'; };
    return DiagramElementSurface;
}(DiagramElementBaseSurface));
exports.DiagramElementSurface = DiagramElementSurface;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var point_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(21);
var diagramElementModel_1 = __webpack_require__(15);
var size_1 = __webpack_require__(4);
var parsers_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
var ConnectingPointViewModel = (function (_super) {
    __extends(ConnectingPointViewModel, _super);
    function ConnectingPointViewModel(control, parent, serializer) {
        var _this = _super.call(this, _utils_1.extend({ '@ControlType': 'ConnectingPoint' }, control), parent, serializer) || this;
        _this.side = ko.pureComputed(function () {
            if (_this.percentOffsetY() >= _this.percentOffsetX()) {
                if (_this.percentOffsetY() > 1 - _this.percentOffsetX()) {
                    return utils_1.PointSide.South;
                }
                else {
                    return utils_1.PointSide.West;
                }
            }
            else {
                if (_this.percentOffsetY() > 1 - _this.percentOffsetX()) {
                    return utils_1.PointSide.East;
                }
                else {
                    return utils_1.PointSide.North;
                }
            }
        });
        _this.size = new size_1.Size(7, 7);
        _this.location = new point_1.Point(0, 0);
        _this.location.x = ko.pureComputed(function () {
            var parentModel = _this.parentModel();
            return parentModel.location.x() + parentModel.size.width() * _this.percentOffsetX();
        });
        _this.location.y = ko.pureComputed(function () {
            var parentModel = _this.parentModel();
            return parentModel.location.y() + parentModel.size.height() * _this.percentOffsetY();
        });
        return _this;
    }
    return ConnectingPointViewModel;
}(diagramElementModel_1.DiagramElementBaseViewModel));
exports.ConnectingPointViewModel = ConnectingPointViewModel;
exports.connectingPointSerializationInfo = [
    { propertyName: 'percentOffsetX', modelName: '@PercentOffsetX', defaultVal: 0.5, from: parsers_1.floatFromModel },
    { propertyName: 'percentOffsetY', modelName: '@PercentOffsetY', defaultVal: 0.5, from: parsers_1.floatFromModel }
];


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var connectorModel_1 = __webpack_require__(64);
var point_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(21);
var _utils_1 = __webpack_require__(0);
var RoutedConnectorViewModel = (function (_super) {
    __extends(RoutedConnectorViewModel, _super);
    function RoutedConnectorViewModel(control, parent, serializer) {
        var _this = _super.call(this, _utils_1.extend({ '@ControlType': 'RoutedConnector' }, control), parent, serializer) || this;
        _this._isUpdating = false;
        _this._getPower = function (_n) {
            for (var i = 0; i < 10; i++) {
                if (_n >= Math.pow(2, i) && _n < Math.pow(2, i + 1)) {
                    return i + 1;
                }
            }
            return 1;
        };
        _this.seriesNumber = ko.observable(1);
        _this.routePoints = ko.observable([]);
        _this.freezeRoute = ko.observable(false);
        _this._disposables.push(ko.computed(function () {
            var freezeRoute = !(1 + _this.startPoint().location.x() + _this.startPoint().location.y()
                + _this.endPoint().location.x() + _this.endPoint().location.y());
            if (!_this._isUpdating) {
                _this.freezeRoute(freezeRoute);
            }
        }));
        _this._disposables.push(ko.computed(function () {
            if (!_this.freezeRoute()) {
                var result = [];
                var startPointSide = _this._getStartPointSide();
                var endPointSide = _this._getEndPointSide();
                var startPoint = new point_1.Point(_this.startPoint().location.x(), _this.startPoint().location.y()), endPoint = new point_1.Point(_this.endPoint().location.x(), _this.endPoint().location.y());
                if (_this.startPoint().connectingPoint()) {
                    _this._fixPoint(startPoint, _this.startPoint().connectingPoint().side());
                    result.push(startPoint);
                }
                if (_this.endPoint().connectingPoint()) {
                    _this._fixPoint(endPoint, _this.endPoint().connectingPoint().side());
                }
                var baseX = Math.min(startPoint.x(), endPoint.x()), baseY = Math.min(startPoint.y(), endPoint.y()), width = Math.abs(startPoint.x() - endPoint.x()), height = Math.abs(startPoint.y() - endPoint.y());
                var number = _this.seriesNumber();
                var ratio = _this._getRatio(number);
                var indent = (number - 1) * RoutedConnectorViewModel.GRID_SIZE;
                if (startPoint.y() - endPoint.y() > 0) {
                    if (startPoint.x() - endPoint.x() > 0) {
                        if (startPointSide === utils_1.PointSide.North || startPointSide === utils_1.PointSide.East) {
                            if (endPointSide === utils_1.PointSide.North || endPointSide === utils_1.PointSide.East) {
                                if (number !== 1) {
                                    width += indent;
                                    result.push(new point_1.Point(baseX + width, baseY + height));
                                }
                                result.push(new point_1.Point(baseX + width, baseY));
                            }
                            else {
                                result.push(new point_1.Point(baseX + width, baseY + height * ratio));
                                result.push(new point_1.Point(baseX, baseY + height * ratio));
                            }
                        }
                        else {
                            if (endPointSide === utils_1.PointSide.South || endPointSide === utils_1.PointSide.West) {
                                result.push(new point_1.Point(baseX, baseY + height));
                            }
                            else {
                                result.push(new point_1.Point(baseX + width * ratio, baseY + height));
                                result.push(new point_1.Point(baseX + width * ratio, baseY));
                            }
                        }
                    }
                    else {
                        if (startPointSide === utils_1.PointSide.North || startPointSide === utils_1.PointSide.West) {
                            if (endPointSide === utils_1.PointSide.North || endPointSide === utils_1.PointSide.West) {
                                if (number !== 1) {
                                    baseX -= indent;
                                    result.push(new point_1.Point(baseX, baseY + height));
                                }
                                result.push(new point_1.Point(baseX, baseY));
                            }
                            else {
                                result.push(new point_1.Point(baseX, baseY + height * ratio));
                                result.push(new point_1.Point(baseX + width, baseY + height * ratio));
                            }
                        }
                        else {
                            if (endPointSide === utils_1.PointSide.South || endPointSide === utils_1.PointSide.East) {
                                result.push(new point_1.Point(baseX + width, baseY + height));
                            }
                            else {
                                result.push(new point_1.Point(baseX + width * ratio, baseY + height));
                                result.push(new point_1.Point(baseX + width * ratio, baseY));
                            }
                        }
                    }
                }
                else {
                    if (startPoint.x() - endPoint.x() > 0) {
                        if (startPointSide === utils_1.PointSide.South || startPointSide === utils_1.PointSide.East) {
                            if (endPointSide === utils_1.PointSide.South || endPointSide === utils_1.PointSide.East) {
                                if (number !== 1) {
                                    width += indent;
                                    result.push(new point_1.Point(baseX + width, baseY));
                                }
                                result.push(new point_1.Point(baseX + width, baseY + height));
                            }
                            else {
                                result.push(new point_1.Point(baseX + width, baseY + height * ratio));
                                result.push(new point_1.Point(baseX, baseY + height * ratio));
                            }
                        }
                        else {
                            if (endPointSide === utils_1.PointSide.North || endPointSide === utils_1.PointSide.West) {
                                result.push(new point_1.Point(baseX, baseY));
                            }
                            else {
                                result.push(new point_1.Point(baseX + width * ratio, baseY));
                                result.push(new point_1.Point(baseX + width * ratio, baseY + height));
                            }
                        }
                    }
                    else {
                        if (startPointSide === utils_1.PointSide.South || startPointSide === utils_1.PointSide.West) {
                            if (endPointSide === utils_1.PointSide.South || endPointSide === utils_1.PointSide.West) {
                                if (number !== 1) {
                                    baseX -= indent;
                                    result.push(new point_1.Point(baseX, baseY));
                                }
                                result.push(new point_1.Point(baseX, baseY + height));
                            }
                            else {
                                result.push(new point_1.Point(baseX, baseY + height * ratio));
                                result.push(new point_1.Point(baseX + width, baseY + height * ratio));
                            }
                        }
                        else {
                            if (endPointSide === utils_1.PointSide.North || endPointSide === utils_1.PointSide.East) {
                                result.push(new point_1.Point(baseX + width, baseY));
                            }
                            else {
                                result.push(new point_1.Point(baseX + width * ratio, baseY));
                                result.push(new point_1.Point(baseX + width * ratio, baseY + height));
                            }
                        }
                    }
                }
                if (_this.endPoint().connectingPoint()) {
                    result.push(endPoint);
                }
                _this.routePoints(result);
            }
        }));
        return _this;
    }
    RoutedConnectorViewModel.prototype.getX = function () {
        var result = _super.prototype.getX.call(this);
        this.routePoints && this.routePoints().forEach(function (point) {
            if (point.x() < result) {
                result = point.x();
            }
        });
        return result;
    };
    RoutedConnectorViewModel.prototype.getY = function () {
        var result = _super.prototype.getY.call(this);
        this.routePoints && this.routePoints().forEach(function (point) {
            if (point.y() < result) {
                result = point.y();
            }
        });
        return result;
    };
    RoutedConnectorViewModel.prototype.getWidth = function () {
        var result = _super.prototype.getWidth.call(this);
        var baseX = this.getX();
        this.routePoints && [this.startPoint().location, this.endPoint().location].concat(this.routePoints()).forEach(function (point) {
            if (point.x() - baseX > result) {
                result = point.x() - baseX;
            }
        });
        return result;
    };
    RoutedConnectorViewModel.prototype.getHeight = function () {
        var result = _super.prototype.getHeight.call(this);
        var baseY = this.getY();
        this.routePoints && [this.startPoint().location, this.endPoint().location].concat(this.routePoints()).forEach(function (point) {
            if (point.y() - baseY > result) {
                result = point.y() - baseY;
            }
        });
        return Math.round(result);
    };
    RoutedConnectorViewModel.prototype._fixPoint = function (point, side) {
        switch (side) {
            case utils_1.PointSide.North:
                point.y(point.y() - RoutedConnectorViewModel.GRID_SIZE);
                break;
            case utils_1.PointSide.East:
                point.x(point.x() + RoutedConnectorViewModel.GRID_SIZE);
                break;
            case utils_1.PointSide.West:
                point.x(point.x() - RoutedConnectorViewModel.GRID_SIZE);
                break;
            case utils_1.PointSide.South:
                point.y(point.y() + RoutedConnectorViewModel.GRID_SIZE);
        }
    };
    RoutedConnectorViewModel.prototype._getStartPointSide = function () {
        if (this.startPoint().connectingPoint()) {
            return this.startPoint().connectingPoint().side();
        }
        if (this.startPoint().location.y() !== this.endPoint().location.y()) {
            if (this.startPoint().location.y() > this.endPoint().location.y()) {
                return utils_1.PointSide.North;
            }
            else {
                return utils_1.PointSide.South;
            }
        }
        else {
            if (this.startPoint().location.x() > this.endPoint().location.x()) {
                return utils_1.PointSide.West;
            }
            else {
                return utils_1.PointSide.East;
            }
        }
    };
    RoutedConnectorViewModel.prototype._getEndPointSide = function () {
        if (this.endPoint().connectingPoint()) {
            return this.endPoint().connectingPoint().side();
        }
        if (this.startPoint().location.y() !== this.endPoint().location.y()) {
            if (this.startPoint().location.y() > this.endPoint().location.y()) {
                return utils_1.PointSide.South;
            }
            else {
                return utils_1.PointSide.North;
            }
        }
        else {
            if (this.startPoint().location.x() > this.endPoint().location.x()) {
                return utils_1.PointSide.East;
            }
            else {
                return utils_1.PointSide.West;
            }
        }
    };
    RoutedConnectorViewModel.prototype._getRatio = function (n) {
        var pow2Delimiter = this._getPower(n);
        var delimiter = Math.pow(2, pow2Delimiter);
        var halfDelimeter = Math.pow(2, pow2Delimiter - 1);
        var arr = [];
        for (var i = 1; i < halfDelimeter; i++) {
            if (i % 2 == 0) {
                continue;
            }
            arr.push(delimiter - i);
            arr.push(i);
        }
        arr.reverse();
        var delta = n - halfDelimeter;
        var number = arr[delta] || 1;
        return number / delimiter;
    };
    RoutedConnectorViewModel.prototype.beginUpdate = function () { this._isUpdating = true; };
    RoutedConnectorViewModel.prototype.endUpdate = function () { this._isUpdating = false; };
    RoutedConnectorViewModel.GRID_SIZE = 10;
    return RoutedConnectorViewModel;
}(connectorModel_1.ConnectorViewModel));
exports.RoutedConnectorViewModel = RoutedConnectorViewModel;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(9);
var serializer_1 = __webpack_require__(1);
var utils_2 = __webpack_require__(1);
var dataSourceParameter_1 = __webpack_require__(11);
var customSqlQueryMeta_1 = __webpack_require__(112);
var _utils_1 = __webpack_require__(0);
var CustomSqlQuery = (function () {
    function CustomSqlQuery(model, parent, serializer) {
        this.parent = parent;
        (serializer || new serializer_1.ModelSerializer()).deserialize(this, _utils_1.extend(model, { '@ItemType': 'Query' }));
        this.type = ko.pureComputed(function () { return utils_1.SqlQueryType.customSqlQuery; });
        this.parameters = utils_2.deserializeArray(model['Parameters'], function (item) {
            return new dataSourceParameter_1.DataSourceParameter(item, serializer);
        });
    }
    CustomSqlQuery.prototype.getInfo = function () {
        return customSqlQueryMeta_1.customQuerySerializationsInfo;
    };
    CustomSqlQuery.prototype.generateName = function () {
        return 'CustomSqlQuery';
    };
    return CustomSqlQuery;
}());
exports.CustomSqlQuery = CustomSqlQuery;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dataSourceParameter_1 = __webpack_require__(11);
var localization_utils_1 = __webpack_require__(1);
var editorsInfo_1 = __webpack_require__(6);
var _editorTypeMapper_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(0);
exports.dsParameterNameValidationRules = [{
        type: 'custom',
        validationCallback: function (options) { return dataSourceParameter_1.DataSourceParameter.validateName(options.value); },
        get message() {
            return localization_utils_1.getLocalization('Name is required and should be a valid identifier.', 'AnalyticsCoreStringId.NameIsRequired_Error');
        }
    }];
exports.parameterValueSerializationsInfo = { propertyName: 'value', displayName: 'Value', localizationId: 'DevExpress.DataAccess.Parameter.Value', editor: editorsInfo_1.editorTemplates.getEditor('text') };
var dsParameterName = { propertyName: 'name', displayName: 'Name', localizationId: 'DevExpress.DataAccess.Parameter.Name', validationRules: exports.dsParameterNameValidationRules, editor: editorsInfo_1.editorTemplates.getEditor('text') };
var dsParameterType = {
    propertyName: 'type', displayName: 'Type', localizationId: 'DevExpress.DataAccess.Parameter.Type', modelName: '@Type', editor: editorsInfo_1.editorTemplates.getEditor('combobox'), valuesArray: [
        { value: 'System.String', displayValue: 'String', localizationId: 'AnalyticsCoreStringId.Parameter_Type_String' },
        { value: 'System.DateTime', displayValue: 'Date', localizationId: 'AnalyticsCoreStringId.Parameter_Type_DateTime' },
        { value: 'System.Int16', displayValue: 'Number (16 bit integer)', localizationId: 'AnalyticsCoreStringId.Parameter_Type_Int16' },
        { value: 'System.Int32', displayValue: 'Number (32 bit integer)', localizationId: 'AnalyticsCoreStringId.Parameter_Type_Int32' },
        { value: 'System.Int64', displayValue: 'Number (64 bit integer)', localizationId: 'AnalyticsCoreStringId.Parameter_Type_Int64' },
        { value: 'System.Single', displayValue: 'Number (floating-point)', localizationId: 'AnalyticsCoreStringId.Parameter_Type_Float' },
        { value: 'System.Double', displayValue: 'Number (double-precision floating-point)', localizationId: 'AnalyticsCoreStringId.Parameter_Type_Double' },
        { value: 'System.Decimal', displayValue: 'Number (decimal)', localizationId: 'AnalyticsCoreStringId.Parameter_Type_Decimal' },
        { value: 'System.Boolean', displayValue: 'Boolean', localizationId: 'AnalyticsCoreStringId.Parameter_Type_Boolean' },
        { value: 'System.Guid', displayValue: 'Guid', localizationId: 'AnalyticsCoreStringId.Parameter_Type_Guid' },
        { value: _editorTypeMapper_1.ExpressionType, displayValue: 'Expression', localizationId: 'DataAccessUIStringId.ParametersColumn_Expression' }
    ]
};
var dsExpressionResultType = {
    propertyName: 'resultType',
    displayName: 'Result Type',
    localizationId: 'DataAccessWebStringId.QueryBuilder_ResultType',
    modelName: '@ResultType',
    editor: editorsInfo_1.editorTemplates.getEditor('combobox'),
    valuesArray: dsParameterType.valuesArray.filter(function (x) { return !_editorTypeMapper_1.IsDataAccessExpression(x.value); })
};
var baseDSParamterSerializationsInfo = [
    { propertyName: '_name', modelName: '@Name' },
    { propertyName: '_value', modelName: '#text' },
    exports.parameterValueSerializationsInfo,
    { propertyName: 'itemType', modelName: '@ItemType' }
];
exports.dsParameterSerializationInfo = [dsParameterName, dsParameterType, dsExpressionResultType].concat(baseDSParamterSerializationsInfo);
var storedProcAdditionValuesArray = [
    { value: 'System.Byte', displayValue: 'Non-negative number (8 bit integer)', localizationId: 'DataAccessStringId.Type_Byte' },
    { value: 'System.SByte', displayValue: 'Number (8 bit integer)', localizationId: 'DataAccessStringId.Type_SByte' },
    { value: 'System.UInt32', displayValue: 'Non-negative number (32 bit integer)', localizationId: 'DataAccessStringId.Type_UInt' },
    { value: 'System.UInt16', displayValue: 'Non-negative number (16 bit integer)', localizationId: 'DataAccessStringId.Type_UShort' },
    { value: 'System.UInt64', displayValue: 'Non-negative number (64 bit integer)', localizationId: 'DataAccessStringId.Type_ULong' },
    { value: 'System.Char', displayValue: 'Char', localizationId: 'DataAccessStringId.Type_Char' },
    { value: 'System.Object', displayValue: 'Object', localizationId: 'DataAccessStringId.Type_Object' },
    { value: 'System.Byte[]', displayValue: 'Byte array', localizationId: 'DataAccessStringId.Type_ByteArray' },
    { value: 'System.TimeSpan', displayValue: 'Time interval', localizationId: 'DataAccessStringId.Type_TimeSpan' },
];
function storedProcParameterSerializationsInfo(type) {
    var copyParamType = _utils_1.extend(true, {}, dsParameterType);
    var newValuesArray = [];
    newValuesArray.push(dsParameterType.valuesArray.filter(function (item) { return item.value === type; })[0] || storedProcAdditionValuesArray.filter(function (item) { return item.value === type; })[0]);
    newValuesArray.push(dsParameterType.valuesArray.filter(function (item) { return _editorTypeMapper_1.IsDataAccessExpression(item.value); })[0]);
    copyParamType.valuesArray = newValuesArray;
    var copyResultType = _utils_1.extend(true, {}, dsExpressionResultType);
    copyResultType.valuesArray = newValuesArray.slice(0, 0);
    copyResultType.disabled = true;
    return [
        _utils_1.extend({ disabled: true }, dsParameterName),
        copyParamType,
        copyResultType
    ].concat(baseDSParamterSerializationsInfo);
}
exports.storedProcParameterSerializationsInfo = storedProcParameterSerializationsInfo;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(9);
var serializer_1 = __webpack_require__(1);
var utils_2 = __webpack_require__(1);
var dataSourceParameter_1 = __webpack_require__(11);
var tableQueryMeta_1 = __webpack_require__(115);
var _utils_1 = __webpack_require__(0);
var TableQuery = (function () {
    function TableQuery(model, parent, serializer) {
        this.parent = parent;
        (serializer || new serializer_1.ModelSerializer()).deserialize(this, _utils_1.extend(model, { '@ItemType': 'Query' }));
        this.type = ko.pureComputed(function () { return utils_1.SqlQueryType.tableQuery; });
        this.parameters = utils_2.deserializeArray(model['Parameters'], function (item) { return new dataSourceParameter_1.DataSourceParameter(item, serializer); });
    }
    TableQuery.prototype.tables = function () {
        return this['_tablesObject']['tables']();
    };
    TableQuery.prototype.getInfo = function () {
        return tableQueryMeta_1.tableQuerySerializationsInfo;
    };
    TableQuery.prototype.generateName = function () {
        return this.tables().length > 0 ? (this.tables()[0].alias() || this.tables()[0].name()) : 'SelectQuery';
    };
    return TableQuery;
}());
exports.TableQuery = TableQuery;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(9);
var serializer_1 = __webpack_require__(1);
var utils_2 = __webpack_require__(1);
var dataSourceParameter_1 = __webpack_require__(11);
var _editorTypeMapper_1 = __webpack_require__(0);
var dataSourceParameterMeta_1 = __webpack_require__(33);
var storedProcQueryMeta_1 = __webpack_require__(116);
var _utils_1 = __webpack_require__(0);
var StoredProcQuery = (function () {
    function StoredProcQuery(model, parent, serializer) {
        this.parent = parent;
        (serializer || new serializer_1.ModelSerializer()).deserialize(this, _utils_1.extend(model, { '@ItemType': 'Query' }));
        this.type = ko.pureComputed(function () { return utils_1.SqlQueryType.storedProcQuery; });
        this.parameters = utils_2.deserializeArray(model['Parameters'], function (item) {
            var parameterValueType = item['@Type'];
            if (_editorTypeMapper_1.IsDataAccessExpression(parameterValueType))
                parameterValueType = item['@ResultType'] || parameterValueType;
            return new dataSourceParameter_1.DataSourceParameter(item, serializer, dataSourceParameterMeta_1.storedProcParameterSerializationsInfo(parameterValueType));
        });
    }
    StoredProcQuery.prototype.getInfo = function () {
        return storedProcQueryMeta_1.storedProcQuerySerializationsInfo;
    };
    StoredProcQuery.prototype.generateName = function () {
        return this.procName() || 'Query';
    };
    return StoredProcQuery;
}());
exports.StoredProcQuery = StoredProcQuery;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var localization_utils_1 = __webpack_require__(1);
var wizardPage_1 = __webpack_require__(7);
var wizard_1 = __webpack_require__(14);
var _arrayutils_1 = __webpack_require__(0);
var pageId_1 = __webpack_require__(5);
var DataSourceType;
(function (DataSourceType) {
    DataSourceType[DataSourceType["NoData"] = 0] = "NoData";
    DataSourceType[DataSourceType["Sql"] = 1] = "Sql";
    DataSourceType[DataSourceType["Json"] = 2] = "Json";
    DataSourceType[DataSourceType["Object"] = 3] = "Object";
})(DataSourceType = exports.DataSourceType || (exports.DataSourceType = {}));
var TypeItem = (function () {
    function TypeItem(textDefault, textID, imageClassName, imageTemplateName, type) {
        this.text = localization_utils_1.getLocalization(textDefault, textID);
        this.imageClassName = imageClassName;
        this.imageTemplateName = imageTemplateName;
        this.type = type;
    }
    return TypeItem;
}());
exports.TypeItem = TypeItem;
var ChooseDataSourceTypePage = (function (_super) {
    __extends(ChooseDataSourceTypePage, _super);
    function ChooseDataSourceTypePage(_dataSourceTypeOptions) {
        var _this = _super.call(this) || this;
        _this._dataSourceTypeOptions = _dataSourceTypeOptions;
        _this._itemClick = function (item) {
            _this.selectedItem(item);
        };
        _this._IsSelected = function (item) {
            return _this.selectedItem().type === item.type;
        };
        _this.selectedItem = ko.observable();
        _this.typeItems = _this._createTypeItems();
        _this._disposables.push(_this.selectedItem.subscribe(function () { return _this._onChange(); }));
        _this._extendCssClass = $.noop;
        return _this;
    }
    ChooseDataSourceTypePage.prototype.canNext = function () {
        return this.selectedItem() != null;
    };
    ChooseDataSourceTypePage.prototype.canFinish = function () {
        return false;
    };
    ChooseDataSourceTypePage.prototype._goToNextPage = function () {
        this[wizard_1.BaseWizard.__nextActionFunctionName] && this[wizard_1.BaseWizard.__nextActionFunctionName]();
    };
    ChooseDataSourceTypePage.prototype.commit = function () {
        return $.Deferred().resolve({ dataSourceType: this.selectedItem().type }).promise();
    };
    ChooseDataSourceTypePage.prototype._createTypeItems = function () {
        var typeItems = [];
        if (this._dataSourceTypeOptions.sqlDataSourceAvailable) {
            typeItems.push(new TypeItem('Database', 'DataAccessUIStringId.DSTypeSql', 'sqldatasource', 'dxrd-svg-wizard-SqlDataSource', DataSourceType.Sql));
        }
        if (this._dataSourceTypeOptions.jsonDataSourceAvailable) {
            typeItems.push(new TypeItem('JSON', 'DataAccessUIStringId.DSTypeJson', 'jsondatasource', 'dxrd-svg-wizard-JsonDataSource', DataSourceType.Json));
        }
        if (this._dataSourceTypeOptions.objectDataSourceAvailable) {
            typeItems.push(new TypeItem('Object', 'DataAccessUIStringId.DSTypeObject', 'objectdatasource', 'dxrd-svg-wizard-ObjectDataSource', DataSourceType.Object));
        }
        return typeItems;
    };
    ChooseDataSourceTypePage.prototype.initialize = function (state) {
        if (!this.typeItems || this.typeItems.length === 0) {
            this.selectedItem(null);
        }
        else {
            var type = state.dataSourceType !== undefined ? state.dataSourceType : this.typeItems[0].type;
            this.selectedItem(_arrayutils_1.findFirstItemMatchesCondition(this.typeItems, function (item) { return item.type === type; }));
        }
        return $.Deferred().resolve().promise();
    };
    return ChooseDataSourceTypePage;
}(wizardPage_1.WizardPageBase));
exports.ChooseDataSourceTypePage = ChooseDataSourceTypePage;
function _registerChooseDataSourceTypePage(factory, dataSourceTypeOptions) {
    factory.registerMetadata(pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage, {
        setState: function (data, state) {
            state.dataSourceType = data.dataSourceType;
        },
        getState: function (state) {
            return state;
        },
        resetState: function (state, defaultState) {
            state.dataSourceType = defaultState.dataSourceType;
        },
        create: function () {
            return new ChooseDataSourceTypePage(dataSourceTypeOptions);
        },
        description: localization_utils_1.getLocalization('Select the data source type.', 'DataAccessUIStringId.WizardPageChooseDSType'),
        template: 'dxrd-page-choose-datasource-type'
    });
}
exports._registerChooseDataSourceTypePage = _registerChooseDataSourceTypePage;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(1);
var wizardPage_1 = __webpack_require__(7);
var PageIterator = (function (_super) {
    __extends(PageIterator, _super);
    function PageIterator(pageFactory, stateManager, _onResetPage) {
        if (_onResetPage === void 0) { _onResetPage = function () { return void 0; }; }
        var _this = _super.call(this) || this;
        _this.pageFactory = pageFactory;
        _this.stateManager = stateManager;
        _this._onResetPage = _onResetPage;
        _this._pages = [];
        _this._currentIndex = 0;
        return _this;
    }
    PageIterator.prototype.dispose = function () {
        this._pages.forEach(function (x) { return x.dispose(); });
        this._pages = [];
    };
    PageIterator.prototype.__resetPages = function (fromIndex) {
        if (fromIndex < this._pages.length) {
            for (var index = this._pages.length - 1; index >= fromIndex; index--) {
                this.stateManager.resetPageState(this._pages[index].pageId);
                this._onResetPage(this._pages[index]);
                this._pages[index].dispose();
                this._pages.splice(index, 1);
            }
        }
    };
    PageIterator.prototype._nextPage = function () {
        return this._pages[this._currentIndex + 1];
    };
    PageIterator.prototype._getNextExistingPage = function () {
        this._currentIndex += 1;
        var deferred = $.Deferred();
        deferred.resolve(this._pages[this._currentIndex]);
        return deferred.promise();
    };
    PageIterator.prototype._resetPages = function () {
        this.__resetPages(this._currentIndex + 1);
    };
    PageIterator.prototype._getNextNewPage = function (nextPageId) {
        this._currentIndex += 1;
        var deferred = $.Deferred();
        this.__resetPages(this._currentIndex);
        var pageMetadata = this.pageFactory.getMetadata(nextPageId);
        var newPage = new wizardPage_1._WrappedWizardPage(nextPageId, pageMetadata.create(), pageMetadata.template, pageMetadata.description);
        this._pages.push(newPage);
        deferred.resolve(newPage);
        return deferred.promise();
    };
    PageIterator.prototype._getStartPage = function (pageId) {
        pageId = pageId || this.getNextPageId();
        var pageMetadata = this.pageFactory.getMetadata(pageId);
        var startPage = new wizardPage_1._WrappedWizardPage(pageId, pageMetadata.create(), pageMetadata.template, pageMetadata.description);
        this._pages.push(startPage);
        return startPage;
    };
    PageIterator.prototype._getNextPage = function () {
        var currentPage = this._getCurrentPage();
        if (currentPage.isChanged || !this._nextPage()) {
            var nextPageId = this.getNextPageId(this._getCurrentPage().pageId);
            if (!nextPageId)
                return $.Deferred().reject().promise();
            currentPage.isChanged = false;
            return this._getNextNewPage(nextPageId);
        }
        else
            return this._getNextExistingPage();
    };
    PageIterator.prototype._getPreviousPage = function () {
        var deferred = $.Deferred();
        if (this._currentIndex - 1 < 0) {
            deferred.reject(null);
        }
        else {
            this._currentIndex -= 1;
            deferred.resolve(this._pages[this._currentIndex]);
        }
        return deferred.promise();
    };
    PageIterator.prototype._goToPage = function (pageId) {
        var deferred = $.Deferred();
        var page = this._pages.filter(function (page) { return page.pageId === pageId; })[0];
        if (page) {
            this._currentIndex = this._pages.indexOf(page);
            deferred.resolve(page);
        }
        else {
            deferred.reject(null);
        }
        return deferred.promise();
    };
    PageIterator.prototype._getCurrentPage = function () {
        return this._pages[this._currentIndex];
    };
    PageIterator.prototype._getCurrentState = function () {
        return this.stateManager.getCurrentState();
    };
    PageIterator.prototype.getNextPageId = function (pageId) {
        return '';
    };
    return PageIterator;
}(utils_1.Disposable));
exports.PageIterator = PageIterator;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var _utils_1 = __webpack_require__(13);
var _wizardPageSectionFactory_1 = __webpack_require__(117);
var _wizardPageProcessor_1 = __webpack_require__(118);
var wizard_1 = __webpack_require__(14);
var eventManager_1 = __webpack_require__(1);
var _utils_2 = __webpack_require__(0);
var WizardSectionPosition;
(function (WizardSectionPosition) {
    WizardSectionPosition[WizardSectionPosition["Left"] = 1] = "Left";
    WizardSectionPosition[WizardSectionPosition["TopLeft"] = 2] = "TopLeft";
    WizardSectionPosition[WizardSectionPosition["BottomLeft"] = 3] = "BottomLeft";
    WizardSectionPosition[WizardSectionPosition["Right"] = 4] = "Right";
    WizardSectionPosition[WizardSectionPosition["TopRight"] = 5] = "TopRight";
    WizardSectionPosition[WizardSectionPosition["BottomRight"] = 6] = "BottomRight";
    WizardSectionPosition[WizardSectionPosition["Top"] = 7] = "Top";
    WizardSectionPosition[WizardSectionPosition["Bottom"] = 8] = "Bottom";
})(WizardSectionPosition = exports.WizardSectionPosition || (exports.WizardSectionPosition = {}));
var FullscreenWizardPage = (function (_super) {
    __extends(FullscreenWizardPage, _super);
    function FullscreenWizardPage() {
        var _this = _super.call(this) || this;
        _this._sectionsToUnregister = [];
        _this._sectionsToRegister = [];
        _this._sectionPositions = [];
        _this._initInProgress = ko.observable(false);
        _this._defaultMargin = 30;
        _this._parentMarginOffset = _this._defaultMargin + _this._defaultMargin / 2;
        _this._className = '';
        _this._pageCss = {};
        _this.events = new eventManager_1.EventManager();
        _this._factory = new _wizardPageSectionFactory_1.WizardPageSectionFactory();
        _this._sectionsProcessor = new _wizardPageProcessor_1.WizardPageProcessor(_this._factory, function (state) {
            _this[wizard_1.BaseWizard.__loadingStateFunctionName] && _this[wizard_1.BaseWizard.__loadingStateFunctionName](state);
        }, function () { return _this[wizard_1.BaseWizard.__nextActionFunctionName] && _this[wizard_1.BaseWizard.__nextActionFunctionName](); });
        _this._sectionsProcessor.events.addHandler('beforeStart', function () {
            _this._sections = _this._sectionsProcessor.sections;
            _this._beforeStart();
            _this._patchOnChange();
        });
        _this._sectionsProcessor.events.addHandler('beforePageInitialize', function (args) {
            _this.events.call('beforeSectionInitialize', {
                section: args.page,
                sectionId: args.pageId,
                page: _this,
                state: args.state
            });
        });
        _this._sectionsProcessor.events.addHandler('afterPageInitialize', function (args) {
            _this.events.call('afterSectionInitialize', {
                section: args.page,
                sectionId: args.pageId,
                page: _this
            });
        });
        return _this;
    }
    FullscreenWizardPage.prototype.dispose = function () {
        this._sectionsProcessor.dispose();
        this._factory.reset();
        this._sections = [];
    };
    FullscreenWizardPage.prototype._patchOnChange = function () {
        var _this = this;
        Object.keys(this._factory.metadata).forEach(function (key) {
            _this._factory.metadata[key].onChange = function () { return _this._onChange(); };
        });
    };
    FullscreenWizardPage.prototype._getPageStyle = function (position, isVisible) {
        if (isVisible === void 0) { isVisible = true; }
        return _utils_1.getSectionStyle(position, this._defaultMargin, isVisible);
    };
    FullscreenWizardPage.prototype._applyCustomizations = function () {
        this._sectionsToUnregister.forEach(function (x) { return x(); });
        this._sectionsToUnregister = [];
        this._sectionPositions.forEach(function (x) { return x(); });
        this._sectionPositions = [];
        this._sectionsToRegister.forEach(function (x) { return x(); });
        this._sectionsToRegister = [];
    };
    FullscreenWizardPage.prototype._setSectionPosition = function (pageId, position) {
        this._pageCss[pageId] = ko.observable(this._getPageStyle(position));
    };
    FullscreenWizardPage.prototype.registerSections = function () { };
    FullscreenWizardPage.prototype.canNext = function () {
        return this._sectionsProcessor.sections.every(this._sectionCondition);
    };
    FullscreenWizardPage.prototype._sectionCondition = function (section) {
        if (section.metadata.required)
            return section.page() && section.metadata.canNext(section.page().page);
        else {
            return !section.page() || section.metadata.canNext(section.page().page);
        }
    };
    FullscreenWizardPage.prototype.canFinish = function () {
        for (var i = this._sections.length - 1; i >= 0; i--) {
            if (this._sections[i].page() && this._sections[i].metadata.canFinish(this._sections[i].page().page))
                return true;
        }
        return false;
    };
    FullscreenWizardPage.prototype.setSectionPosition = function (sectionId, position) {
        var _this = this;
        this._sectionPositions.push(function () {
            _this._setSectionPosition(sectionId, position);
        });
    };
    FullscreenWizardPage.prototype.registerSection = function (sectionId, metadata) {
        var _this = this;
        this._sectionsToRegister.push(function () {
            _this._factory.registerMetadata(sectionId, metadata);
        });
    };
    FullscreenWizardPage.prototype.unregisterSection = function (sectionId) {
        var _this = this;
        this._sectionsToUnregister.push(function () { return _this._factory.unregisterMetadata(sectionId); });
    };
    FullscreenWizardPage.prototype._loadPanelViewModel = function (element) {
        return false;
    };
    FullscreenWizardPage.prototype.getNextSectionId = function (sectionId) { return undefined; };
    FullscreenWizardPage.prototype.initialize = function (state, stateChanged) {
        var _this = this;
        this.registerSections();
        this._applyCustomizations();
        this._sectionsProcessor.initialize(_utils_2.extend(true, {}, state));
        this._stateManager = this._sectionsProcessor.stateManager;
        this._sectionsProcessor.iterator.getNextPageId = function (pageId) { return _this.getNextSectionId(pageId); };
        this._sectionsProcessor.start();
        return $.Deferred().resolve().promise();
    };
    FullscreenWizardPage.prototype._beforeStart = function () { };
    FullscreenWizardPage.prototype.commit = function () {
        var _this = this;
        var deferred = $.Deferred();
        this._sectionsProcessor.finishAction().done(function () {
            deferred.resolve(_utils_2.extend(true, {}, _this._stateManager.getCurrentState()));
        });
        return deferred.promise();
    };
    FullscreenWizardPage.prototype._getPageDescription = function (index, page) {
        return (index + 1) + '. ' + page.metadata.description;
    };
    FullscreenWizardPage.prototype._showPageDescription = function () {
        return this._sections.length > 1;
    };
    return FullscreenWizardPage;
}(wizardPage_1.WizardPageBase));
exports.FullscreenWizardPage = FullscreenWizardPage;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PageFactory = (function () {
    function PageFactory() {
        this.metadata = {};
    }
    PageFactory.prototype.registerMetadata = function (pageId, metadata) {
        if (!metadata.canFinish)
            metadata.canFinish = function (page) { return page.canFinish(); };
        if (!metadata.canNext)
            metadata.canNext = function (page) { return page.canNext(); };
        this.metadata[pageId] = metadata;
    };
    PageFactory.prototype.getMetadata = function (pageId) {
        return this.metadata[pageId];
    };
    PageFactory.prototype.unregisterMetadata = function (pageId) {
        delete this.metadata[pageId];
    };
    PageFactory.prototype.reset = function () {
        this.metadata = {};
    };
    return PageFactory;
}());
exports.PageFactory = PageFactory;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var dataSourceWizardState_1 = __webpack_require__(12);
var _jsonSourceSettings_1 = __webpack_require__(85);
var requestwrapper_1 = __webpack_require__(8);
var jsonDataSource_1 = __webpack_require__(50);
var serializer_1 = __webpack_require__(1);
var localization_utils_1 = __webpack_require__(1);
var pageId_1 = __webpack_require__(5);
var ChooseJsonSourcePage = (function (_super) {
    __extends(ChooseJsonSourcePage, _super);
    function ChooseJsonSourcePage(_requestWrapper, itemsProvider) {
        if (_requestWrapper === void 0) { _requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this) || this;
        _this._requestWrapper = _requestWrapper;
        _this.__validationGroup = null;
        _this.__validationSummary = null;
        _this._jsonSourceTitle = localization_utils_1.getLocalization('JSON Source:', 'DataAccessUIStringId.WizardPageChooseJsonSource_SourceType');
        _this._jsonConnectionTitle = localization_utils_1.getLocalization('Connection Name:', 'AnalyticsCoreStringId.ReportDesigner_Wizard_Json_ConnectionName');
        _this._connectionNameValidationRules = [{
                type: 'required',
                get message() {
                    return _jsonSourceSettings_1.getLocalizedValidationErrorMessage(null, this._jsonConnectionTitle);
                }
            }];
        _this._connectionName = ko.observable('');
        _this._validationGroup = {
            onInitialized: function (args) { return _this._onValidationGroupInitialized(args); },
            onDisposing: function (args) { return _this._onValidationGroupDisposing(args); }
        };
        _this._validationSummary = {
            onInitialized: function (args) { return _this._onValidationSummaryInitialized(args); },
            onDisposing: function (args) { return _this._onValidationSummaryDisposing(args); }
        };
        _this._sources = [];
        _this._disposables.push(_this._jsonStringSettings = new _jsonSourceSettings_1.JsonDataSourceJsonSourcePageStringSettings());
        _this._jsonStringSettings.onChange(function () { return _this._onChange(); });
        _this._disposables.push(_this._jsonUriSetting = new _jsonSourceSettings_1.JsonDataSourceJsonSourcePageUriSettings(_this._requestWrapper, itemsProvider));
        _this._jsonUriSetting.onChange(function () { return _this._onChange(); });
        _this._sources = [
            { value: _this._jsonUriSetting, displayValue: 'Web Service Endpoint (URI)', localizationId: 'DataAccessUIStringId.WizardPageChooseJsonSource_SourceType_Uri' },
            { value: _this._jsonStringSettings, displayValue: 'JSON String', localizationId: 'DataAccessUIStringId.WizardPageChooseJsonSource_SourceType_Custom' }
        ];
        var selectedSource = ko.observable();
        _this._selectedSource = ko.pureComputed({
            read: function () { return selectedSource(); },
            write: function (newVal) {
                if (selectedSource() === newVal)
                    return;
                selectedSource(newVal);
                newVal._validatorsReady && newVal._validatorsReady(false);
                setTimeout(function () {
                    newVal._validate && newVal._validate();
                }, 1);
                _this._onChange();
            }
        });
        _this._selectedSource(_this._sources[0].value);
        _this._disposables.push(_this._selectedSource);
        _this._disposables.push(_this._connectionName.subscribe(function () { return _this._onChange(); }));
        return _this;
    }
    ChooseJsonSourcePage.prototype._onValidationGroupInitialized = function (e) {
        this.__validationGroup = e.component;
    };
    ChooseJsonSourcePage.prototype._onValidationGroupDisposing = function (e) {
        this.__validationGroup = null;
    };
    ChooseJsonSourcePage.prototype._onValidationSummaryInitialized = function (e) {
        var _this = this;
        this.__validationSummary = e.component;
        this.__validationGroup && this.__validationSummary && this._connectionName && this._connectionName() && setTimeout(function () {
            _this.__validationGroup && _this.__validationGroup.validate();
        }, 1);
    };
    ChooseJsonSourcePage.prototype._onValidationSummaryDisposing = function (e) {
        this.__validationSummary = null;
    };
    ChooseJsonSourcePage.prototype.canNext = function () {
        var connectionNameNotEmpty = !!this._connectionName();
        var isCurrentSourceValid = this._selectedSource().isValid();
        var isCurrentSourceEmpty = this._selectedSource().isEmpty();
        return connectionNameNotEmpty && isCurrentSourceValid && !isCurrentSourceEmpty;
    };
    ChooseJsonSourcePage.prototype.commit = function () {
        var jsonDataSource = new jsonDataSource_1.JsonDataSource({});
        this._selectedSource().applySettings(jsonDataSource);
        var serialized = new serializer_1.ModelSerializer().serialize(jsonDataSource);
        return $.Deferred().resolve({
            jsonSource: JSON.stringify(serialized.Source),
            newConnectionName: this._connectionName()
        }).promise();
    };
    ChooseJsonSourcePage.prototype.initialize = function (state) {
        this.__validationGroup = null;
        this.__validationSummary = null;
        var jsonDataSource = dataSourceWizardState_1._restoreJsonDataSourceFromState(state);
        if (jsonDataSource.source.uri()) {
            this._selectedSource(this._jsonUriSetting);
        }
        else if (jsonDataSource.source.json()) {
            this._selectedSource(this._jsonStringSettings);
        }
        this._selectedSource().setValue(jsonDataSource);
        return $.Deferred().resolve().promise();
    };
    return ChooseJsonSourcePage;
}(wizardPage_1.WizardPageBase));
exports.ChooseJsonSourcePage = ChooseJsonSourcePage;
function _registerChooseJsonSourcePage(factory, requestWrapper, getItemsProviderCallback) {
    factory.registerMetadata(pageId_1.JsonDataSourceWizardPageId.ChooseJsonSourcePage, {
        setState: function (data, state) {
            state.jsonSource = data.jsonSource;
            state.newConnectionName = data.newConnectionName;
        },
        getState: function (state) {
            return state.jsonDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.jsonSource = defaultState.jsonSource;
        },
        create: function () {
            return new ChooseJsonSourcePage(requestWrapper, getItemsProviderCallback && getItemsProviderCallback());
        },
        description: localization_utils_1.getLocalization('Create a data connection.', 'AnalyticsCoreStringId.JsonDSWizard_CreateNewConnectionPage_Description'),
        template: 'dxrd-page-jsonsource'
    });
}
exports._registerChooseJsonSourcePage = _registerChooseJsonSourcePage;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var localization_utils_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(1);
exports.defaultObjectDataSourceItemSpecifics = 'Default';
var TreeNodeBase = (function (_super) {
    __extends(TreeNodeBase, _super);
    function TreeNodeBase(name, displayName, specifics, isChecked, afterCheckToggled) {
        if (isChecked === void 0) { isChecked = false; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.displayName = displayName;
        _this.specifics = specifics;
        _this.checked = ko.pureComputed(function () { return _this._checked(); });
        _this.isList = false;
        _this._checked = ko.observable(isChecked);
        _this._afterCheckToggled = afterCheckToggled || $.noop;
        return _this;
    }
    TreeNodeBase.prototype.unChecked = function () {
        return this.checked() === false;
    };
    TreeNodeBase.prototype.toggleChecked = function () {
        this.setChecked(!this.checked.peek());
        this._afterCheckToggled(this);
    };
    TreeNodeBase.prototype.setChecked = function (value) {
        this._checked(value);
    };
    return TreeNodeBase;
}(utils_1.Disposable));
exports.TreeNodeBase = TreeNodeBase;
var TreeLeafNode = (function (_super) {
    __extends(TreeLeafNode, _super);
    function TreeLeafNode(name, displayName, specifics, isChecked, nodeArguments, afterCheckToggled) {
        if (isChecked === void 0) { isChecked = false; }
        if (nodeArguments === void 0) { nodeArguments = null; }
        var _this = _super.call(this, name, displayName, specifics, isChecked, afterCheckToggled) || this;
        _this.name = name;
        _this.displayName = displayName;
        _this.specifics = specifics;
        _this.hasQuery = false;
        _this.arguments = nodeArguments;
        return _this;
    }
    return TreeLeafNode;
}(TreeNodeBase));
exports.TreeLeafNode = TreeLeafNode;
var TreeNode = (function (_super) {
    __extends(TreeNode, _super);
    function TreeNode(name, displayName, specifics, isChecked, afterCheckToggled) {
        var _this = _super.call(this, name, displayName, specifics, isChecked, afterCheckToggled) || this;
        _this.countChecked = ko.pureComputed(function () {
            var count = 0;
            for (var i = 0; i < _this.children().length; i++) {
                if (!_this.children()[i].unChecked()) {
                    if (count > 1)
                        break;
                    count++;
                }
            }
            return count;
        });
        _this.isList = true;
        _this.children = ko.observableArray([]);
        _this.checked = ko.pureComputed({
            read: function () {
                if (!_this.initialized()) {
                    return _this._checked();
                }
                else {
                    var selectedItems = 0;
                    var partiallySelectedItems = 0;
                    _this.children().forEach(function (item) {
                        if (item.checked() === true) {
                            selectedItems++;
                        }
                        else if (item.checked() !== false) {
                            partiallySelectedItems++;
                        }
                    });
                    if (selectedItems === 0 && partiallySelectedItems === 0) {
                        return false;
                    }
                    if (selectedItems === _this.children.peek().length) {
                        return true;
                    }
                    return undefined;
                }
            }
        });
        return _this;
    }
    TreeNode.prototype.initialized = function () {
        return this.children().length > 0;
    };
    TreeNode.prototype.setChecked = function (value) {
        this._checked(value);
        this.children.peek().forEach(function (item) {
            item.setChecked(value);
        });
    };
    TreeNode.prototype.initializeChildren = function (children) {
        this.children(children || []);
    };
    return TreeNode;
}(TreeNodeBase));
exports.TreeNode = TreeNode;
var ParameterTreeNode = (function (_super) {
    __extends(ParameterTreeNode, _super);
    function ParameterTreeNode(name, displayName, specifics, isChecked, afterCheckToggled) {
        var _this = _super.call(this, name, displayName, specifics, isChecked, afterCheckToggled) || this;
        _this.countChecked = ko.pureComputed(function () {
            var count = 0;
            _this.hasParamsToEdit(false);
            for (var i = 0; i < _this.children().length; i++) {
                var child = _this.children()[i];
                if (!child.unChecked()) {
                    if (count > 1)
                        break;
                    count++;
                    if (child.arguments && child.arguments.length > 0)
                        _this.hasParamsToEdit(true);
                    if (child.specifics === 'query')
                        _this.hasParamsToEdit(true);
                }
            }
            return count;
        });
        _this.hasParamsToEdit = ko.observable(false);
        return _this;
    }
    return ParameterTreeNode;
}(TreeNode));
exports.ParameterTreeNode = ParameterTreeNode;
var QueriesTreeNode = (function (_super) {
    __extends(QueriesTreeNode, _super);
    function QueriesTreeNode(name, displayName, specifics, isChecked, callbacks, afterCheckToggled) {
        var _this = _super.call(this, name, displayName, specifics, isChecked, afterCheckToggled) || this;
        _this.addAction = {
            clickAction: function (item) {
                if (_this.disableCustomSql()) {
                    return _this.addQuery();
                }
                else {
                    return _this.showPopover();
                }
            },
            imageClassName: 'dxrd-image-add',
            imageTemplateName: 'dxrd-svg-operations-add',
            templateName: 'dx-treelist-action-with-popover',
            text: localization_utils_1.getLocalization('Add query', 'AnalyticsCoreStringId.SqlDSWizard_AddQuery')
        };
        _this.itemClickAction = function (e) {
            _this.popoverVisible(false);
            e.itemData.addAction();
        };
        _this.popoverVisible = ko.observable(false);
        _this.addQuery = function () {
            callbacks().showQbCallBack();
        };
        _this.addCustomQuery = function () {
            callbacks().showQbCallBack(null, true);
        };
        _this.disableCustomSql = function () { return callbacks && callbacks().disableCustomSql; };
        return _this;
    }
    QueriesTreeNode.prototype.getActions = function (context) {
        var result = [];
        if (context.path.indexOf('queries') === 0) {
            result.push(this.addAction);
        }
        return result;
    };
    QueriesTreeNode.prototype.popoverListItems = function () {
        var _this = this;
        return [
            {
                name: localization_utils_1.getLocalization('Run Query Builder', 'DataAccessUIStringId.Button_QueryBuilder'),
                addAction: function () { return _this.addQuery(); }
            },
            {
                name: localization_utils_1.getLocalization('Write Custom SQL', 'AnalyticsCoreStringId.SqlDSWizard_WriteCustomSQL'),
                addAction: function () { return _this.addCustomQuery(); }
            }
        ];
    };
    QueriesTreeNode.prototype.showPopover = function () {
        this.popoverVisible(true);
    };
    return QueriesTreeNode;
}(ParameterTreeNode));
exports.QueriesTreeNode = QueriesTreeNode;
var TreeQueryNode = (function (_super) {
    __extends(TreeQueryNode, _super);
    function TreeQueryNode(name, displayName, specifics, isChecked, parameters, callbacks, afterCheckToggled, query) {
        var _this = _super.call(this, name, displayName, specifics, isChecked, null, afterCheckToggled) || this;
        _this.query = query;
        _this.editAction = {
            clickAction: function (item) {
                return _this.editQuery();
            },
            imageClassName: 'dx-image-edit',
            imageTemplateName: 'dxrd-svg-operations-edit',
            text: localization_utils_1.getLocalization('Edit query', 'AnalyticsCoreStringId.SqlDSWizard_EditQuery')
        };
        _this.removeAction = {
            clickAction: function (item) {
                _this.removeQuery({ model: item.data });
            },
            imageClassName: 'dxrd-image-recycle-bin',
            imageTemplateName: 'dxrd-svg-operations-recycle_bin',
            text: localization_utils_1.getLocalization('Remove query', 'AnalyticsCoreStringId.SqlDSWizard_RemoveQuery')
        };
        _this.parameters = parameters;
        _this.removeQuery = function (e) {
            if (!e.model.unChecked()) {
                e.model.toggleChecked();
            }
            callbacks().deleteAction(e.model.name);
        };
        _this.editQuery = function (e) {
            callbacks().showQbCallBack(_this.name);
        };
        _this.hasQuery = true;
        return _this;
    }
    TreeQueryNode.prototype.setObservableName = function (name) {
        var _this = this;
        this._name = name;
        ['name', 'displayName'].forEach(function (propertyName) {
            return Object.defineProperty(_this, propertyName, {
                get: function () {
                    return this._name();
                },
                set: function (newVal) {
                    return this._name(newVal);
                },
                configurable: true
            });
        });
    };
    TreeQueryNode.prototype.getActions = function (context) {
        var result = [];
        result.push(this.removeAction);
        result.push(this.editAction);
        return result;
    };
    return TreeQueryNode;
}(TreeLeafNode));
exports.TreeQueryNode = TreeQueryNode;
var FieldTreeNode = (function (_super) {
    __extends(FieldTreeNode, _super);
    function FieldTreeNode(name, displayName, specifics, isChecked, path, afterCheckToggled, isDraggable) {
        if (isDraggable === void 0) { isDraggable = false; }
        var _this = _super.call(this, name, displayName, specifics, isChecked, afterCheckToggled) || this;
        _this.visible = ko.observable(true);
        _this.disabled = ko.observable(false);
        _this.path = path;
        _this.isComplex = specifics === exports.defaultObjectDataSourceItemSpecifics;
        if (isDraggable)
            _this.dragData = { noDragable: false };
        return _this;
    }
    return FieldTreeNode;
}(TreeNodeBase));
exports.FieldTreeNode = FieldTreeNode;
var DataMemberTreeNode = (function (_super) {
    __extends(DataMemberTreeNode, _super);
    function DataMemberTreeNode(name, displayName, specifics, isChecked, path, afterCheckToggled) {
        var _this = _super.call(this, name, displayName, specifics, isChecked, afterCheckToggled) || this;
        _this.visible = ko.observable(true);
        _this.path = path;
        _this.isComplex = _this.isList && specifics === exports.defaultObjectDataSourceItemSpecifics;
        _this.checked = ko.pureComputed({
            read: function () {
                if (!_this.initialized()) {
                    return _this._checked();
                }
                else {
                    var selectedItems = 0;
                    var partiallySelectedItems = 0;
                    var visibleChildren = _this.children().filter(function (item) { return item.visible(); });
                    visibleChildren.forEach(function (item) {
                        if (item.checked() === true) {
                            selectedItems++;
                        }
                        else if (item.checked() !== false) {
                            partiallySelectedItems++;
                        }
                    });
                    if (selectedItems === 0 && partiallySelectedItems === 0) {
                        return false;
                    }
                    if (selectedItems === visibleChildren.length) {
                        return true;
                    }
                    return undefined;
                }
            }
        });
        return _this;
    }
    DataMemberTreeNode.prototype.setChecked = function (value) {
        _super.prototype.setChecked.call(this, this.visible() ? value : false);
    };
    return DataMemberTreeNode;
}(TreeNode));
exports.DataMemberTreeNode = DataMemberTreeNode;
var SingleCheckedDataMemberTreeNode = (function (_super) {
    __extends(SingleCheckedDataMemberTreeNode, _super);
    function SingleCheckedDataMemberTreeNode(name, displayName, specifics, isChecked, path, afterCheckToggled) {
        var _this = _super.call(this, name, displayName, specifics, isChecked, path, afterCheckToggled) || this;
        _this.checked = ko.pureComputed({
            read: function () {
                return _this._checked();
            }
        });
        return _this;
    }
    return SingleCheckedDataMemberTreeNode;
}(DataMemberTreeNode));
exports.SingleCheckedDataMemberTreeNode = SingleCheckedDataMemberTreeNode;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizard_1 = __webpack_require__(14);
var localization_utils_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
var templateUtils_1 = __webpack_require__(6);
var PopupWizard = (function (_super) {
    __extends(PopupWizard, _super);
    function PopupWizard(pageFactory, finishCallback) {
        var _this = _super.call(this, pageFactory, finishCallback) || this;
        _this.height = ko.observable(505);
        _this.width = ko.observable(690);
        _this._extendCssClass = '';
        _this._container = _utils_1.getParentContainer;
        _this.itemsProvider = ko.observable();
        _this.nextButton = {
            text: localization_utils_1.getLocalization('Next', 'AnalyticsCoreStringId.Wizard_Next'),
            disabled: ko.computed(function () { return !_this.canNext(); }),
            onClick: function () { return _this.nextAction(); }
        };
        _this.cancelButton = {
            text: localization_utils_1.getLocalization('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'),
            onClick: function () { return _this.isVisible(false); }
        };
        _this.previousButton = {
            text: localization_utils_1.getLocalization('Previous', 'AnalyticsCoreStringId.Wizard_Previous'),
            disabled: ko.computed(function () { return _this.isFirstPage(); }),
            onClick: function () { return _this.previousAction(); }
        };
        _this.finishButton = {
            text: localization_utils_1.getLocalization('Finish', 'AnalyticsCoreStringId.Wizard_Finish'),
            disabled: ko.computed(function () {
                return !_this.canFinish();
            }),
            onClick: function () { return _this.finishAction(); }
        };
        _this._titleTemplate = templateUtils_1.getTemplate('dx-wizard-headerNew');
        _this.title = 'Popup Wizard';
        return _this;
    }
    PopupWizard._getLoadPanelViewModel = function (element, observableVisible) {
        var $container = $(element).closest('.dxrd-wizard-content');
        return {
            animation: {
                show: { type: 'fade', from: 0, to: 1, duration: 700 },
                hide: { type: 'fade', from: 1, to: 0, duration: 700 }
            },
            deferRendering: false,
            message: localization_utils_1.getLocalization('Loading...', 'AnalyticsCoreStringId.Loading'),
            visible: observableVisible,
            shading: true,
            shadingColor: 'transparent',
            position: { of: $container },
            container: $container
        };
    };
    PopupWizard.prototype.start = function () {
        _super.prototype.start.call(this);
        this.isVisible(true);
    };
    PopupWizard.prototype._wizardPopupPosition = function (element) {
        return {
            of: _utils_1.getParentContainer(element)
        };
    };
    PopupWizard.prototype._loadPanelViewModel = function (element) {
        return this._getLoadPanelViewModel(element, this.isLoading);
    };
    PopupWizard.prototype._getLoadPanelViewModel = function (element, observableVisible) {
        return PopupWizard._getLoadPanelViewModel(element, observableVisible);
    };
    return PopupWizard;
}(wizard_1.BaseWizard));
exports.PopupWizard = PopupWizard;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var columnModelMeta_1 = __webpack_require__(26);
var _arrayutils_1 = __webpack_require__(0);
function isAggregatedExpression(object) {
    return object.aggregate() !== columnModelMeta_1.AggregationType.None;
}
exports.isAggregatedExpression = isAggregatedExpression;
var QueryBuilderObjectsProvider = (function () {
    function QueryBuilderObjectsProvider(query, objectFilter) {
        this.getItems = function (pathRequest) {
            var result = $.Deferred();
            var items = [];
            if (pathRequest.fullPath === '') {
                items = objectFilter.filterTables(query().tables())
                    .map(QueryBuilderObjectsProvider._createTableInfo);
            }
            else {
                var table = _arrayutils_1.findFirstItemMatchesCondition(query().tables(), function (table) { return table.actualName() === pathRequest.fullPath; });
                items = objectFilter.filterColumns(table && table.columns() || [])
                    .map(function (column) { return QueryBuilderObjectsProvider._createColumnInfo(column, objectFilter); });
            }
            result.resolve(items);
            return result.promise();
        };
        this.hasParameter = function (name) {
            return query().parameters().filter(function (parameter) { return parameter.name() === name; }).length > 0;
        };
        this.getColumnInfo = function (propertyName) {
            if (propertyName) {
                var table = _arrayutils_1.find(query().tables(), function (t) { return propertyName.indexOf(t.actualName() + '.') === 0; });
                if (table) {
                    var column = _arrayutils_1.find(objectFilter.filterColumns(table.columns() || []), function (c) { return propertyName === (table.actualName() + '.' + objectFilter.getColumnName(c)); });
                    return column ? QueryBuilderObjectsProvider._createColumnInfo(column, objectFilter) : null;
                }
            }
            return null;
        };
    }
    QueryBuilderObjectsProvider._createTableInfo = function (table) {
        return {
            displayName: table.actualName(),
            name: table.actualName(),
            isList: true,
            specifics: 'Default',
            collapsed: ko.observable(true)
        };
    };
    QueryBuilderObjectsProvider._createColumnInfo = function (column, objectFilter) {
        return {
            displayName: objectFilter.getColumnName(column),
            isList: false,
            specifics: objectFilter.getSpecifics(column),
            dataType: objectFilter.getDataType(column),
            name: objectFilter.getColumnName(column)
        };
    };
    QueryBuilderObjectsProvider.whereClauseObjectsFilter = {
        filterColumns: function (columns) { return columns; },
        filterTables: function (tables) { return tables; },
        getColumnName: function (column) { return column.name.peek(); },
        getSpecifics: function (column) { return column.specifics; },
        getDataType: function (column) { return column.dataType.peek(); }
    };
    QueryBuilderObjectsProvider.groupByObjectsFilter = {
        filterColumns: function (columns) { return columns.filter(isAggregatedExpression); },
        filterTables: function (tables) { return tables.filter(function (table) { return table.columns().some(isAggregatedExpression); }); },
        getColumnName: function (column) { return column.actualName.peek(); },
        getSpecifics: function (column) {
            switch (column.aggregate()) {
                case columnModelMeta_1.AggregationType.Avg:
                case columnModelMeta_1.AggregationType.AvgDistinct:
                    return 'Float';
                case columnModelMeta_1.AggregationType.Count:
                case columnModelMeta_1.AggregationType.CountDistinct:
                    return 'Integer';
                default:
                    return column.specifics;
            }
        },
        getDataType: function (column) { return null; }
    };
    return QueryBuilderObjectsProvider;
}());
exports.QueryBuilderObjectsProvider = QueryBuilderObjectsProvider;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editorTemplates_1 = __webpack_require__(25);
var size_1 = __webpack_require__(4);
var point_1 = __webpack_require__(4);
exports.name = { propertyName: 'name', modelName: '@Name', displayName: 'Name', localizationId: 'DevExpress.DataAccess.Sql.SqlQuery.Name', disabled: true, editor: editorTemplates_1.editorTemplates.getEditor('text') };
exports.alias = { propertyName: 'alias', modelName: '@Alias', displayName: 'Alias', localizationId: 'DataAccessUIStringId.QueryBuilderColumns_Alias', defaultVal: '', editor: editorTemplates_1.editorTemplates.getEditor('text') };
exports.text = { propertyName: 'text', modelName: '@Text', displayName: 'Text', editor: editorTemplates_1.editorTemplates.getEditor('text') };
exports.selected = { propertyName: 'selected', displayName: 'Output', editor: editorTemplates_1.editorTemplates.getEditor('bool'), localizationId: 'DataAccessUIStringId.QueryBuilderColumns_Output' };
exports.size = { propertyName: 'size', modelName: '@Size', defaultVal: '100,125', from: size_1.Size.fromString };
exports.location = { propertyName: 'location', modelName: '@Location', from: point_1.Point.fromString };
exports.sizeLocation = [exports.size, exports.location];
exports.unknownSerializationsInfo = [exports.name].concat(exports.sizeLocation);


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Criteria;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametersMode = {
    ReadWrite: 'ReadWrite',
    Read: 'Read',
    Disabled: 'Disabled'
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var controlsFactory_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(20);
var elementViewModel_1 = __webpack_require__(4);
var baseSurface_1 = __webpack_require__(4);
var connectorSurface_1 = __webpack_require__(100);
var diagramElementModel_1 = __webpack_require__(15);
var diagramElementSurface_1 = __webpack_require__(29);
var connectorModel_1 = __webpack_require__(64);
var routedConnectorSurface_1 = __webpack_require__(48);
var routedConnectorModel_1 = __webpack_require__(31);
var connectionPointModel_1 = __webpack_require__(65);
var connectionPointSurface_1 = __webpack_require__(22);
var diagramModel_1 = __webpack_require__(66);
var diagramSurface_1 = __webpack_require__(67);
var connectingPointModel_1 = __webpack_require__(30);
var connectingPointSurface_1 = __webpack_require__(63);
var editorsInfo_1 = __webpack_require__(6);
exports.diagramControlsFactory = new controlsFactory_1.ControlsFactory();
function registerControls() {
    exports.diagramControlsFactory.registerControl('Unknown', {
        info: metadata_1.unknownSerializationsInfo,
        type: elementViewModel_1.ElementViewModel,
        nonToolboxItem: true,
        surfaceType: baseSurface_1.SurfaceElementBase
    });
    exports.diagramControlsFactory.registerControl('Connector', {
        info: [
            metadata_1.name,
            { propertyName: 'location', displayName: 'Location', editor: editorsInfo_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'startPoint', modelName: '@StartPoint', link: true },
            { propertyName: 'endPoint', modelName: '@EndPoint', link: true }
        ],
        surfaceType: connectorSurface_1.ConnectorSurface,
        type: connectorModel_1.ConnectorViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    exports.diagramControlsFactory.registerControl('RoutedConnector', {
        info: [
            metadata_1.name,
            { propertyName: 'location', displayName: 'Location', editor: editorsInfo_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'startPoint', modelName: '@StartPoint', link: true },
            { propertyName: 'endPoint', modelName: '@EndPoint', link: true }
        ],
        surfaceType: routedConnectorSurface_1.RoutedConnectorSurface,
        type: routedConnectorModel_1.RoutedConnectorViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    exports.diagramControlsFactory.registerControl('ConnectionPoint', {
        info: connectionPointModel_1.connectionPointSerializationInfo,
        surfaceType: connectionPointSurface_1.ConnectionPointSurface,
        type: connectionPointModel_1.ConnectionPointViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    exports.diagramControlsFactory.registerControl('Diagram', {
        info: diagramModel_1.diagramSerializationsInfo,
        surfaceType: diagramSurface_1.DiagramSurface,
        popularProperties: ['name'],
        type: diagramModel_1.DiagramViewModel,
        elementActionsTypes: [],
        isContainer: true,
        nonToolboxItem: true
    });
    exports.diagramControlsFactory.registerControl('DiagramElement', {
        info: diagramElementModel_1.diagramElementSerializationInfo,
        defaultVal: {
            '@SizeF': '150,50',
            'ConnectingPoints': {
                'Item1': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '1',
                    '@PercentOffsetY': '0.5',
                },
                'Item2': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0.5',
                    '@PercentOffsetY': '1',
                },
                'Item3': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0.5',
                    '@PercentOffsetY': '0',
                },
                'Item4': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0',
                    '@PercentOffsetY': '0.5',
                }
            }
        },
        surfaceType: diagramElementSurface_1.DiagramElementSurface,
        popularProperties: ['text'],
        type: diagramElementModel_1.DiagramElementViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    exports.diagramControlsFactory.registerControl('Ellipse', {
        info: diagramElementModel_1.diagramElementSerializationInfo,
        defaultVal: {
            '@SizeF': '150,50',
            '@Type': 'Ellipse',
            'ConnectingPoints': {
                'Item1': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '1',
                    '@PercentOffsetY': '0.5',
                },
                'Item2': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0.5',
                    '@PercentOffsetY': '1',
                },
                'Item3': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0.5',
                    '@PercentOffsetY': '0',
                },
                'Item4': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0',
                    '@PercentOffsetY': '0.5',
                }
            }
        },
        surfaceType: diagramElementSurface_1.DiagramElementSurface,
        popularProperties: ['text'],
        type: diagramElementModel_1.DiagramElementViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    exports.diagramControlsFactory.registerControl('Condition', {
        info: diagramElementModel_1.diagramElementSerializationInfo,
        defaultVal: {
            '@SizeF': '150,50',
            '@Type': 'Condition',
            'ConnectingPoints': {
                'Item1': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '1',
                    '@PercentOffsetY': '0.5',
                },
                'Item2': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0.5',
                    '@PercentOffsetY': '1',
                },
                'Item3': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0.5',
                    '@PercentOffsetY': '0',
                },
                'Item4': {
                    '@ControlType': 'ConnectingPoint',
                    '@PercentOffsetX': '0',
                    '@PercentOffsetY': '0.5',
                }
            }
        },
        surfaceType: diagramElementSurface_1.DiagramElementSurface,
        popularProperties: ['text'],
        type: diagramElementModel_1.DiagramElementViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    exports.diagramControlsFactory.registerControl('ConnectingPoint', {
        info: connectingPointModel_1.connectingPointSerializationInfo,
        surfaceType: connectingPointSurface_1.ConnectingPointSurface,
        type: connectingPointModel_1.ConnectingPointViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
}
exports.registerControls = registerControls;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var diagramElementSurface_1 = __webpack_require__(29);
var connectionPointSurface_1 = __webpack_require__(22);
var RoutedConnectorSurface = (function (_super) {
    __extends(RoutedConnectorSurface, _super);
    function RoutedConnectorSurface(control, context) {
        var _this = _super.call(this, control, context, null) || this;
        _this.template = 'dxdd-routed-connector';
        _this.selectiontemplate = 'dxdd-routed-connector-selection';
        _this.showArrow = ko.observable(false);
        _this.isVisible = ko.observable(true);
        _this.routePoints = ko.observableArray();
        _this.routePointsSet = ko.pureComputed(function () {
            var points = [];
            _this.routePoints().forEach(function (point) {
                points.push(point.x() + ' ' + point.y());
            });
            return points.join(', ');
        });
        _this.routeLineWrappers = ko.pureComputed(function () {
            var result = [];
            for (var i = 1; i < _this.routePoints().length; i++) {
                result.push(_this._createRouteLineWrapper(_this.routePoints()[i - 1], _this.routePoints()[i], i === 1 || i === _this.routePoints().length - 1));
            }
            return result;
        });
        _this.connectorID = function () { return _this._connectorID; };
        _this._connectorID = RoutedConnectorSurface._connectorsCount++;
        _this.startPoint = ko.pureComputed(function () {
            return new connectionPointSurface_1.ConnectionPointSurface(control.startPoint(), context);
        });
        _this.endPoint = ko.pureComputed(function () {
            return new connectionPointSurface_1.ConnectionPointSurface(control.endPoint(), context);
        });
        _this._disposables.push(control.routePoints.subscribe(function (routePoints) {
            _this._updateRoutePoints();
        }));
        _this._updateRoutePoints();
        return _this;
    }
    RoutedConnectorSurface.prototype._createRoutePoint = function (point, base) {
        var _this = this;
        return {
            x: ko.pureComputed(function () {
                if (_this._context.rtl()) {
                    return Math.round(_this.getControlModel().size.width() - (point.x() - base.x()));
                }
                else {
                    return Math.round(point.x() - base.x());
                }
            }),
            y: ko.pureComputed(function () { return Math.round(point.y() - base.y()); }),
            modelPoint: point
        };
    };
    RoutedConnectorSurface.prototype._createRouteLineWrapper = function (point1, point2, isLocked) {
        var _this = this;
        if (isLocked === void 0) { isLocked = false; }
        var _self = this, isVerticalLine = Math.abs(point1.x.peek() - point2.x.peek()) < 1, absoluteTop = point1.modelPoint.y.peek(), absoluteLeft = point1.modelPoint.x.peek(), position = {
            top: Math.min(point1.y.peek(), point2.y.peek()) - 2,
            left: Math.min(point1.x.peek(), point2.x.peek()) - 2,
            width: Math.abs(point1.x.peek() - point2.x.peek()) + 6,
            height: Math.abs(point1.y.peek() - point2.y.peek()) + 6
        }, resizeHandler = function (params) {
            _self._control.freezeRoute(true);
            try {
                _self._control.beginUpdate();
                if (isVerticalLine) {
                    if (_this._context.rtl()) {
                        var newX = absoluteLeft - params.delta.dx;
                    }
                    else {
                        var newX = absoluteLeft + params.delta.dx;
                    }
                    point1.modelPoint.x(newX);
                    point2.modelPoint.x(newX);
                }
                else {
                    var newY = absoluteTop + params.delta.dy;
                    point1.modelPoint.y(newY);
                    point2.modelPoint.y(newY);
                }
            }
            finally {
                _self._control.endUpdate();
            }
        };
        return {
            position: position,
            isVerticalLine: isVerticalLine,
            resizeHandler: resizeHandler,
            resizeStopped: function () {
                _self._control.routePoints.notifySubscribers(_self._control.routePoints());
            },
            isLocked: ko.observable(isLocked)
        };
    };
    RoutedConnectorSurface.prototype._updateRoutePoints = function () {
        var _this = this;
        var points = [], control = this.getControlModel(), base = control.location;
        points.push(this._createRoutePoint(control.startPoint().location, base));
        control.routePoints().forEach(function (point) {
            points.push(_this._createRoutePoint(point, base));
        });
        points.push(this._createRoutePoint(control.endPoint().location, base));
        this.routePoints(points);
    };
    RoutedConnectorSurface._connectorsCount = 0;
    return RoutedConnectorSurface;
}(diagramElementSurface_1.DiagramElementBaseSurface));
exports.RoutedConnectorSurface = RoutedConnectorSurface;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var serializer_1 = __webpack_require__(1);
var _dbSchema_1 = __webpack_require__(19);
var localization_utils_1 = __webpack_require__(1);
var parsers_1 = __webpack_require__(1);
var JsonNodeType;
(function (JsonNodeType) {
    JsonNodeType[JsonNodeType["Object"] = 0] = "Object";
    JsonNodeType[JsonNodeType["Array"] = 1] = "Array";
    JsonNodeType[JsonNodeType["Property"] = 2] = "Property";
})(JsonNodeType = exports.JsonNodeType || (exports.JsonNodeType = {}));
var JsonNode = (function () {
    function JsonNode(model, serializer) {
        this.nodes = [];
        if (!model)
            return;
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(this, model);
        var innerNodes = model['Node'];
        var currentNodes = innerNodes instanceof Array ?
            _dbSchema_1.deserializeToCollection(innerNodes, function (nodeModel) { return new JsonNode(nodeModel); }).sort(function (a, b) { return a.name().localeCompare(b.name()); })
            : !innerNodes ? [] : [new JsonNode(innerNodes)];
        this.nodes = currentNodes;
    }
    JsonNode.from = function (model, serializer) {
        return new JsonNode(model, serializer);
    };
    JsonNode.toJsonNodes = function (value, serializer, refs) {
        return (value || []).map(function (item) { return JsonNode.toJsonNode(item, serializer, refs); });
    };
    JsonNode.toJsonNode = function (value, serializer, refs, recoursive) {
        if (recoursive === void 0) { recoursive = true; }
        var obj = serializer.serialize(value, jsonSchemaNodeSerializationInfo, refs);
        var nodes = recoursive ? JsonNode.toJsonNodes(value.nodes, serializer, refs) : [];
        if (nodes.length > 0)
            obj['Node'] = nodes;
        return obj;
    };
    JsonNode.prototype.getInfo = function () {
        return jsonSchemaNodeSerializationInfo;
    };
    return JsonNode;
}());
exports.JsonNode = JsonNode;
var JsonSchemaNode = (function (_super) {
    __extends(JsonSchemaNode, _super);
    function JsonSchemaNode(model, serializer) {
        var _this = _super.call(this, model['Node'], serializer) || this;
        _this.nodeType = JsonNodeType[JsonNodeType.Object];
        _this.valueType = 'Unknown';
        _this.displayName = localization_utils_1.getLocalization('root');
        _this.selected = ko.observable(false);
        return _this;
    }
    JsonSchemaNode.from = function (model, serializer) {
        return new JsonSchemaNode(model || {}, serializer);
    };
    JsonSchemaNode.toJson = function (value, serializer, refs) {
        if (!value)
            return {};
        var obj = { Node: JsonNode.toJsonNode(value, serializer, refs, false) };
        obj.Node['Node'] = JsonNode.toJsonNodes(value.nodes, serializer, refs);
        return obj;
    };
    JsonSchemaNode.prototype.getInfo = function () {
        return jsonSchemaNodeSerializationInfo;
    };
    return JsonSchemaNode;
}(JsonNode));
exports.JsonSchemaNode = JsonSchemaNode;
var JsonSchemaRootNode = (function (_super) {
    __extends(JsonSchemaRootNode, _super);
    function JsonSchemaRootNode(model, serializer) {
        var _this = _super.call(this, model) || this;
        _this._rootElementList = null;
        return _this;
    }
    JsonSchemaRootNode.from = function (model, serializer) {
        return new JsonSchemaRootNode(model, serializer);
    };
    JsonSchemaRootNode.toJson = function (value, serializer, refs) {
        return JsonSchemaNode.toJson(value.nodes[0], serializer, refs);
    };
    JsonSchemaRootNode.prototype.getInfo = function () {
        return jsonSchemaRootNodeSerializationInfo;
    };
    JsonSchemaRootNode.prototype.getRootElementPartList = function (allowObjectRootElements) {
        if (allowObjectRootElements === void 0) { allowObjectRootElements = true; }
        if (this._rootElementList)
            return this._rootElementList;
        if (this.nodes.length === 0)
            return [];
        this._rootElementList = [];
        var node = this.nodes[0];
        var currentPath = {
            fullPath: ko.unwrap(node.name),
            path: '',
            pathParts: [ko.unwrap(node.name)]
        };
        this._fillRootElementList(node, currentPath, allowObjectRootElements);
        this._rootElementList.sort(function (a, b) { return a.fullPath.localeCompare(b.fullPath); });
        return this._rootElementList;
    };
    JsonSchemaRootNode.prototype._fillRootElementList = function (node, currentPath, allowObjectRootElements) {
        var _this = this;
        if (node === void 0) { node = this.nodes[0]; }
        if (currentPath === void 0) { currentPath = { fullPath: 'root', path: '', pathParts: ['root'] }; }
        if (!node)
            return this._rootElementList;
        var nodeType = ko.unwrap(node.nodeType);
        if (nodeType == JsonNodeType[JsonNodeType.Property])
            return;
        if (nodeType === JsonNodeType[JsonNodeType.Array]) {
            this._rootElementList.push(currentPath);
            return;
        }
        if ((allowObjectRootElements && nodeType === JsonNodeType[JsonNodeType.Object])) {
            this._rootElementList.push(currentPath);
        }
        (node.nodes || []).forEach(function (x) {
            var nextPath = _this._getNextPath(currentPath, x.name());
            _this._fillRootElementList(x, nextPath, allowObjectRootElements);
        });
        return this._rootElementList;
    };
    JsonSchemaRootNode.prototype._getNextPath = function (currentPath, nodeName) {
        var _nodeName = !currentPath.fullPath ? nodeName : [currentPath.fullPath, nodeName].join('.');
        return {
            pathParts: currentPath.pathParts.concat(nodeName),
            fullPath: _nodeName,
            path: nodeName
        };
    };
    return JsonSchemaRootNode;
}(JsonNode));
exports.JsonSchemaRootNode = JsonSchemaRootNode;
var jsonSchemaNodeSerializationInfo = [
    { propertyName: 'nodes', modelName: 'Node', from: JsonNode.from, toJsonObject: JsonNode.toJsonNodes },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'selected', modelName: '@Selected', from: parsers_1.parseBool },
    { propertyName: 'nodeType', modelName: '@NodeType' },
    { propertyName: 'type', modelName: '@Type' }
];
var jsonSchemaRootNodeSerializationInfo = [
    { propertyName: 'nodes', modelName: 'Node', from: JsonSchemaRootNode.from, toJsonObject: JsonSchemaRootNode.toJsonNodes }
];


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(1);
var serializer_1 = __webpack_require__(1);
var requestwrapper_1 = __webpack_require__(8);
var jsonSchemaProvider_1 = __webpack_require__(108);
var jsonSchemaNode_1 = __webpack_require__(49);
var jsonSource_1 = __webpack_require__(107);
var JsonDataSource = (function (_super) {
    __extends(JsonDataSource, _super);
    function JsonDataSource(model, serializer, requestWrapper) {
        if (requestWrapper === void 0) { requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this) || this;
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(_this, model);
        _this.jsonSchemaProvider = new jsonSchemaProvider_1.JsonSchemaProvider(_this, requestWrapper);
        _this.source && _this._disposables.push(_this.source);
        _this._disposables.push(_this.connectionName.subscribe(function () {
            _this.source.resetSource();
        }));
        return _this;
    }
    JsonDataSource.prototype.getInfo = function () {
        return jsonDataSourceSerializationInfo;
    };
    JsonDataSource.prototype.clone = function (serializer) {
        var serializer = serializer || new serializer_1.ModelSerializer();
        var serialized = serializer.serialize(this);
        return new JsonDataSource(serialized);
    };
    JsonDataSource.from = function (model, serializer) {
        return new JsonDataSource(model, serializer);
    };
    JsonDataSource.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, jsonDataSourceSerializationInfo, refs);
    };
    JsonDataSource.prototype.getSchema = function (parameters) {
        var _this = this;
        if (parameters === void 0) { parameters = []; }
        var deferred = $.Deferred();
        this.jsonSchemaProvider.getJsonSchema(parameters)
            .done(function (schema) {
            _this.schema = schema;
            deferred.resolve(schema);
        })
            .fail(function () {
            _this.schema = null;
            deferred.reject();
        });
        return deferred.promise();
    };
    return JsonDataSource;
}(utils_1.Disposable));
exports.JsonDataSource = JsonDataSource;
var jsonDataSourceSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'connectionName', modelName: '@ConnectionName' },
    { propertyName: 'rootElement', modelName: '@RootElement', defaultVal: 'root' },
    { propertyName: 'schema', modelName: 'Schema', from: jsonSchemaNode_1.JsonSchemaRootNode.from, toJsonObject: jsonSchemaNode_1.JsonSchemaRootNode.toJson },
    { propertyName: 'source', modelName: 'Source', from: jsonSource_1.JsonSource.from, toJsonObject: jsonSource_1.JsonSource.toJson }
];


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var serializer_1 = __webpack_require__(1);
var masterDetailRelationMeta_1 = __webpack_require__(113);
var _utils_1 = __webpack_require__(0);
var MasterDetailRelation = (function (_super) {
    __extends(MasterDetailRelation, _super);
    function MasterDetailRelation(model, serializer) {
        var _this = _super.call(this) || this;
        _this.name = ko.pureComputed({
            read: function () {
                return _this._customName() || _this.masterQuery() + _this.detailQuery();
            },
            write: function (value) {
                _this._customName(value);
            },
            deferEvaluation: true
        });
        (serializer || new serializer_1.ModelSerializer()).deserialize(_this, _utils_1.extend(model, { '@ItemType': 'Relation' }));
        _this._disposables.push(_this.name);
        return _this;
    }
    MasterDetailRelation.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.disposeObservableArray(this.keyColumns);
    };
    MasterDetailRelation.prototype.createKeyColumn = function () {
        var newKeyColumn = {
            masterColumn: ko.observable(),
            detailColumn: ko.observable(),
            itemType: 'KeyColumn'
        };
        this.keyColumns.push(newKeyColumn);
    };
    MasterDetailRelation.prototype.getInfo = function () {
        return masterDetailRelationMeta_1.masterDetailRelationSerializationsInfo;
    };
    return MasterDetailRelation;
}(utils_1.Disposable));
exports.MasterDetailRelation = MasterDetailRelation;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var _dbSchema_1 = __webpack_require__(19);
var localization_utils_1 = __webpack_require__(1);
var ObjectDataMemberBase = (function () {
    function ObjectDataMemberBase(model) {
        var _this = this;
        model && (function () {
            _this.name = model.name;
            _this.displayName = model.displayName;
            _this.dataMember = model.dataMember;
        })();
    }
    return ObjectDataMemberBase;
}());
exports.ObjectDataMemberBase = ObjectDataMemberBase;
var ObjectParameter = (function (_super) {
    __extends(ObjectParameter, _super);
    function ObjectParameter(model) {
        var _this = _super.call(this, model) || this;
        model && (function () {
            _this.value = model.value;
            _this.type = model.type;
            _this.resultType = model.resultType;
        })();
        return _this;
    }
    return ObjectParameter;
}(ObjectDataMemberBase));
exports.ObjectParameter = ObjectParameter;
var ObjectDataSourceMethodBase = (function (_super) {
    __extends(ObjectDataSourceMethodBase, _super);
    function ObjectDataSourceMethodBase(model) {
        var _this = _super.call(this, model) || this;
        _this.parameters = _dbSchema_1.deserializeToCollection(model.parameters, function (parameters) { return new ObjectParameter(parameters); });
        return _this;
    }
    return ObjectDataSourceMethodBase;
}(ObjectDataMemberBase));
exports.ObjectDataSourceMethodBase = ObjectDataSourceMethodBase;
var ObjectDataMember = (function (_super) {
    __extends(ObjectDataMember, _super);
    function ObjectDataMember(model) {
        var _this = _super.call(this, model) || this;
        _this.disabled = ko.observable(false);
        _this.memberType = model && model.memberType;
        _this.isStatic = model.isStatic;
        return _this;
    }
    ObjectDataMember.empty = function () {
        return new ObjectDataMember({
            displayName: ObjectDataMember.entireObject(),
            name: ObjectDataMember.entireObject(),
            parameters: []
        });
    };
    ObjectDataMember.prototype.isEntireObject = function () {
        return this.name == ObjectDataMember.entireObject() && this.displayName == ObjectDataMember.entireObject();
    };
    ObjectDataMember.prototype.isAvailable = function () {
        return !this.disabled();
    };
    ObjectDataMember.entireObject = function () { return localization_utils_1.getLocalization('Entire Object', 'AnalyticsCoreStringId.ObjectDSWizard_ConfigureParameters_EntireObject'); };
    return ObjectDataMember;
}(ObjectDataSourceMethodBase));
exports.ObjectDataMember = ObjectDataMember;
var ObjectCtor = (function (_super) {
    __extends(ObjectCtor, _super);
    function ObjectCtor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ObjectCtor;
}(ObjectDataSourceMethodBase));
exports.ObjectCtor = ObjectCtor;
var ObjectType = (function (_super) {
    __extends(ObjectType, _super);
    function ObjectType(model) {
        var _this = _super.call(this, model) || this;
        _this.ctors = _dbSchema_1.deserializeToCollection(model.ctors, function (ctor) { return new ObjectCtor(ctor); });
        _this.members = _dbSchema_1.deserializeToCollection(model.members, function (member) { return new ObjectDataMember(member); });
        return _this;
    }
    ObjectType.prototype.updateMembers = function (selectedCtor) {
        this.members.forEach(function (member) {
            if (selectedCtor) {
                member.disabled(false);
            }
            else {
                member.disabled(member.isEntireObject() ? true : !member.isStatic);
            }
        });
    };
    return ObjectType;
}(ObjectDataMemberBase));
exports.ObjectType = ObjectType;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(168);
function createDefaultSQLAceOptions(readOnly) {
    if (readOnly === void 0) { readOnly = false; }
    return {
        showLineNumbers: false,
        showPrintMargin: false,
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        readOnly: readOnly,
        highlightSelectedWord: readOnly,
        showGutter: false,
        highlightActiveLine: false
    };
}
exports.createDefaultSQLAceOptions = createDefaultSQLAceOptions;
function createDefaultSQLAdditionalOptions(value) {
    return {
        onChange: function (session) {
            value(session.getValue());
        },
        onValueChange: function (editor) {
            editor.resize(true);
        },
        changeTimeout: 200,
        overrideEditorFocus: true,
        setUseWrapMode: true
    };
}
exports.createDefaultSQLAdditionalOptions = createDefaultSQLAdditionalOptions;
function createDefaultSQLLanguageHelper() {
    return {
        getLanguageMode: function () { return 'ace/mode/sql'; },
        createCompleters: function () { return []; }
    };
}
exports.createDefaultSQLLanguageHelper = createDefaultSQLLanguageHelper;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var _arrayutils_1 = __webpack_require__(0);
var pageId_1 = __webpack_require__(5);
var _localization_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var ChooseSqlConnectionPage = (function (_super) {
    __extends(ChooseSqlConnectionPage, _super);
    function ChooseSqlConnectionPage(connectionStrings) {
        var _this = _super.call(this) || this;
        _this._connectionStrings = ko.observableArray([]);
        _this._selectedConnectionString = ko.observableArray([]);
        _this._connectionStrings = connectionStrings;
        _this._disposables.push(_this._selectedConnectionString.subscribe(function () { return _this._onChange(); }));
        return _this;
    }
    ChooseSqlConnectionPage.prototype.initialize = function (state) {
        var connectionStrings = this._connectionStrings();
        if (connectionStrings.length === 1) {
            this._selectedConnectionString([connectionStrings[0]]);
        }
        else {
            var selectedString = _arrayutils_1.getFirstItemByPropertyValue(connectionStrings, 'name', state.name) || connectionStrings[0];
            this._selectedConnectionString(selectedString ? [selectedString] : []);
        }
        return $.Deferred().resolve().promise();
    };
    ChooseSqlConnectionPage.prototype.canNext = function () {
        return this._selectedConnectionString().length !== 0;
    };
    ChooseSqlConnectionPage.prototype.commit = function () {
        var deferred = $.Deferred();
        if (this._selectedConnectionString()[0]) {
            deferred.resolve({
                name: this._selectedConnectionString()[0].name
            });
        }
        else {
            deferred.resolve();
        }
        return deferred.promise();
    };
    return ChooseSqlConnectionPage;
}(wizardPage_1.WizardPageBase));
exports.ChooseSqlConnectionPage = ChooseSqlConnectionPage;
function _registerChooseSqlConnectionPage(factory, connectionStrings) {
    factory.registerMetadata(pageId_1.SqlDataSourceWizardPageId.ChooseConnectionPage, {
        create: function () {
            return new ChooseSqlConnectionPage(connectionStrings);
        },
        setState: function (data, state) {
            state.name = data.name;
        },
        getState: function (state) {
            return state.sqlDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.name = defaultState.name;
        },
        template: 'dxrd-page-connectionstring',
        description: _localization_1.isCustomizedWithUpdateLocalizationMethod('Choose a data connection') || localization_utils_1.getLocalization('Choose a data connection.', 'AnalyticsCoreStringId.SqlDSWizard_PageChooseConnection')
    });
}
exports._registerChooseSqlConnectionPage = _registerChooseSqlConnectionPage;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var chooseAvailablePage_1 = __webpack_require__(124);
var _arrayutils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var pageId_1 = __webpack_require__(5);
var ChooseJsonConnectionPage = (function (_super) {
    __extends(ChooseJsonConnectionPage, _super);
    function ChooseJsonConnectionPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseJsonConnectionPage.prototype.commit = function () {
        return $.Deferred().resolve({
            connectionName: !this.selectedOperation().createNew ? this.selectedItems()[0].name : null
        }).promise();
    };
    ChooseJsonConnectionPage.prototype._getSelectedItem = function (data) {
        return _arrayutils_1.getFirstItemByPropertyValue(this.items(), 'name', data.connectionName) || _super.prototype._getSelectedItem.call(this);
    };
    Object.defineProperty(ChooseJsonConnectionPage.prototype, "createNewOperationText", {
        get: function () {
            return localization_utils_1.getLocalization("No, I'd like to create a new data connection", 'AnalyticsCoreStringId.JsonDSWizard_CreateNewConnection');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChooseJsonConnectionPage.prototype, "existingOperationText", {
        get: function () {
            return localization_utils_1.getLocalization('Yes, let me choose an existing data connection from the list', 'AnalyticsCoreStringId.JsonDSWizard_UseExistingConnection');
        },
        enumerable: true,
        configurable: true
    });
    return ChooseJsonConnectionPage;
}(chooseAvailablePage_1.ChooseAvailableItemPage));
exports.ChooseJsonConnectionPage = ChooseJsonConnectionPage;
function _registerChooseJsonConnectionPage(factory, wizardOptions) {
    factory.registerMetadata(pageId_1.JsonDataSourceWizardPageId.ChooseConnectionPage, {
        create: function () {
            return new ChooseJsonConnectionPage(wizardOptions.connectionStrings && wizardOptions.connectionStrings.json, wizardOptions.allowCreateNewJsonConnection);
        },
        description: wizardOptions.allowCreateNewJsonConnection ?
            localization_utils_1.getLocalization('Do you want to use an existing data connection?', 'AnalyticsCoreStringId.JsonDSWizard_ChooseConnection_Description') :
            localization_utils_1.getLocalization('Choose a data connection.', 'AnalyticsCoreStringId.SqlDSWizard_PageChooseConnection'),
        getState: function (state) { return state.jsonDataSourceWizard; },
        setState: function (data, state) { return state.connectionName = data.connectionName; },
        resetState: function (state, defaultState) {
            state.connectionName = defaultState.connectionName;
        },
        template: 'dxrd-page-selectitems'
    });
}
exports._registerChooseJsonConnectionPage = _registerChooseJsonConnectionPage;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var dataSourceWizardState_1 = __webpack_require__(12);
var _jsonTreeNodeItemsProvider_1 = __webpack_require__(128);
var jsonSchemaNode_1 = __webpack_require__(49);
var _treeListNode_1 = __webpack_require__(41);
var requestwrapper_1 = __webpack_require__(8);
var _fieldListProvider_1 = __webpack_require__(0);
var serializer_1 = __webpack_require__(1);
var localization_utils_1 = __webpack_require__(1);
var pageId_1 = __webpack_require__(5);
var ChooseJsonSchemaPage = (function (_super) {
    __extends(ChooseJsonSchemaPage, _super);
    function ChooseJsonSchemaPage(_requestWrapper, _allowObjectRootElements, _callbacks) {
        if (_requestWrapper === void 0) { _requestWrapper = new requestwrapper_1.RequestWrapper(); }
        if (_allowObjectRootElements === void 0) { _allowObjectRootElements = true; }
        var _this = _super.call(this) || this;
        _this._requestWrapper = _requestWrapper;
        _this._allowObjectRootElements = _allowObjectRootElements;
        _this._callbacks = _callbacks;
        _this._rootItems = ko.observableArray([]);
        _this._fieldListItemsProvider = ko.observable(null);
        _this._fieldSelectedPath = ko.observable(null);
        _this._cachedState = {
            connectionName: null,
            jsonSource: null
        };
        _this._createTreeNode = function (item, isChecked, path) {
            var node = new _treeListNode_1.DataMemberTreeNode(item.name, item.displayName, item.specifics, isChecked, path);
            _this._disposables.push(node.checked.subscribe(function () { return _this._onChange(); }));
            return node;
        };
        _this._createLeafTreeNode = function (item, isChecked, path) {
            var node = new _treeListNode_1.FieldTreeNode(item.name, item.displayName, item.specifics, isChecked, path);
            _this._disposables.push(node.checked.subscribe(function () { return _this._onChange(); }));
            return node;
        };
        _this._rootElementTitle = localization_utils_1.getLocalization('Root element:', 'DataAccessUIStringId.WizardPageChooseJsonSchema_RootElement');
        _this._rootElementList = ko.observable([]);
        _this._selectedRootElement = ko.observable(null);
        var rootElementSubscription = null;
        _this._disposables.push(_this._rootElementList.subscribe(function (rootElements) {
            rootElementSubscription && rootElementSubscription.dispose();
            rootElementSubscription = _this._selectedRootElement.subscribe(function (selectedPath) {
                if (!selectedPath)
                    return _this._rootItems([]);
                var rootNode = _this._getSchemaToDataMemberInfo(selectedPath);
                if (rootNode) {
                    _this._rootItems([{
                            name: ko.unwrap(rootNode.name),
                            isSelected: ko.unwrap(rootNode.selected),
                            displayName: ko.unwrap(rootNode.displayName) || ko.unwrap(rootNode.name),
                            data: rootNode,
                            specifics: rootNode.nodes.length > 0 ? 'List' : 'Default'
                        }]);
                }
            });
            _this._selectedRootElement(rootElements[0]);
        }));
        var fieldListProvider = new _fieldListProvider_1.FieldListProvider(_this._createFieldListCallback(), _this._rootItems);
        _this._fieldListItemsProvider(new _jsonTreeNodeItemsProvider_1.JsonTreeNodeItemsProvider(fieldListProvider, _this._rootItems, _this._createTreeNode, _this._createLeafTreeNode));
        _this._disposables.push(_this._fieldListItemsProvider());
        _this._fieldListModel = {
            expandRootItems: true,
            itemsProvider: _this._fieldListItemsProvider(),
            selectedPath: _this._fieldSelectedPath,
            treeListController: null,
            templateName: 'dxrd-treelist-with-checkbox'
        };
        return _this;
    }
    ChooseJsonSchemaPage.prototype._clear = function () {
        this._rootItems([]);
        this._fieldSelectedPath('');
        this._rootElementList([]);
        this._selectedRootElement(null);
        this._dataSource && this._dataSource.jsonSchemaProvider.reset();
        this._cachedState = {
            connectionName: null,
            jsonSource: null
        };
    };
    ChooseJsonSchemaPage.prototype._createFieldListCallback = function () {
        var _this = this;
        return function (pathRequest) {
            var parentNode = new jsonSchemaNode_1.JsonNode({});
            parentNode.nodes = [_this._rootItems()[0].data];
            var itemsByPath = _this._getInnerItemsByPath(pathRequest, parentNode);
            return $.Deferred().resolve(itemsByPath).promise();
        };
    };
    ChooseJsonSchemaPage.prototype._getSchemaToDataMemberInfo = function (path) {
        var nodeAcc = this._dataSource.schema;
        for (var i = 0; i < path.pathParts.length; i++) {
            nodeAcc = nodeAcc.nodes.filter(function (node) { return node.name() === path.pathParts[i]; })[0];
            if (!nodeAcc)
                return null;
        }
        return nodeAcc;
    };
    ChooseJsonSchemaPage.prototype._mapJsonNodesToTreelistItems = function (nodes) {
        return $.map((nodes || []), function (node) {
            var dataMemberInfo = {
                name: node.name(),
                displayName: node.displayName || node.name(),
                isSelected: node.selected(),
                isList: node.nodes && node.nodes.length > 0,
                specifics: 'Default'
            };
            return dataMemberInfo;
        });
    };
    ChooseJsonSchemaPage.prototype._getNodesByPath = function (pathRequest, parentNode) {
        if (!pathRequest.fullPath) {
            return parentNode.nodes;
        }
        else {
            var currentNodes = parentNode.nodes;
            for (var i = 0; i < pathRequest.pathParts.length; i++) {
                var pathPart = (currentNodes || []).filter(function (node) { return node.name() == pathRequest.pathParts[i]; })[0];
                if (!pathPart)
                    return [];
                currentNodes = pathPart.nodes;
            }
            return currentNodes;
        }
    };
    ChooseJsonSchemaPage.prototype._getInnerItemsByPath = function (pathRequest, parentNode) {
        var nodes = this._getNodesByPath(pathRequest, parentNode);
        return this._mapJsonNodesToTreelistItems(nodes);
    };
    ChooseJsonSchemaPage.prototype._beginInternal = function (state) {
        var _this = this;
        if ((state.connectionName && this._cachedState.connectionName === state.connectionName) ||
            (state.jsonSource && this._cachedState.jsonSource === state.jsonSource))
            return $.Deferred().resolve().promise();
        this._clear();
        this._cachedState = {
            connectionName: state.connectionName,
            jsonSource: state.jsonSource
        };
        var oldDataSourceId = this._dataSource && this._dataSource.id;
        this._dataSource = dataSourceWizardState_1._restoreJsonDataSourceFromState(state, this._requestWrapper);
        if ((oldDataSourceId && oldDataSourceId != this._dataSource.id) || !this._dataSource.schema.nodes.length) {
            return this._dataSource.getSchema(this._callbacks && this._callbacks.getParameters && this._callbacks.getParameters())
                .done(function (schema) { return _this._updatePage(schema); });
        }
        return $.Deferred().done(function (schema) { return _this._updatePage(schema); }).resolve(this._dataSource.schema).promise();
    };
    ChooseJsonSchemaPage.prototype._updatePage = function (jsonSchema) {
        var rootElementList = jsonSchema.getRootElementPartList(this._allowObjectRootElements);
        if (this._rootElementList() !== rootElementList) {
            this._rootElementList(this._filterRootElementList(rootElementList, jsonSchema));
        }
        if (this._dataSource.rootElement()) {
            var dataSourceRootElementPath = ['root', this._dataSource.rootElement()].join('.');
            var rootElementToSelect = this._rootElementList().filter(function (item) { return item.fullPath === dataSourceRootElementPath; })[0] || this._rootElementList()[0];
            this._selectedRootElement(rootElementToSelect);
        }
        this._onChange();
    };
    ChooseJsonSchemaPage.prototype._resetSelectionRecursive = function (currentNode, selectedRootElement) {
        var _this = this;
        if (currentNode === selectedRootElement) {
            return;
        }
        currentNode.selected && currentNode.selected(false);
        (currentNode.nodes || []).forEach(function (node) { return _this._resetSelectionRecursive(node, selectedRootElement); });
    };
    ChooseJsonSchemaPage.prototype._mapJsonSchema = function (jsonNode, path) {
        var _this = this;
        var treelistNode = this._fieldListItemsProvider().getNodeByPath(path);
        if (!treelistNode)
            return;
        jsonNode.selected(treelistNode.checked() !== false);
        (jsonNode.nodes || []).forEach(function (innerJsonNode) {
            var nextPathParts = path.pathParts.concat(innerJsonNode.name());
            var nextFullPath = nextPathParts.join('.');
            var nextPath = { fullPath: nextFullPath, path: innerJsonNode.name(), id: nextFullPath, pathParts: nextPathParts };
            _this._mapJsonSchema(innerJsonNode, nextPath);
        });
        return jsonNode;
    };
    ChooseJsonSchemaPage.prototype._filterRootElementList = function (rootElementList, jsonSchema) {
        return rootElementList;
    };
    ChooseJsonSchemaPage.prototype.canNext = function () {
        return false;
    };
    ChooseJsonSchemaPage.prototype.canFinish = function () {
        return this._fieldListItemsProvider().hasCheckedItems();
    };
    ChooseJsonSchemaPage.prototype.commit = function () {
        var rootItem = this._rootItems()[0];
        if (!rootItem)
            return;
        var currentRootNode = this._rootItems()[0].data;
        this._resetSelectionRecursive(this._dataSource.schema, currentRootNode);
        var currentRootPath = currentRootNode.name();
        var pathFromCurrentRoot = { fullPath: currentRootPath, path: '', id: currentRootPath, pathParts: [currentRootPath] };
        this._mapJsonSchema(this._rootItems()[0].data, pathFromCurrentRoot);
        var selectedRootElementPath = this._selectedRootElement().pathParts.slice(1).join('.');
        this._dataSource.rootElement(selectedRootElementPath);
        var serialized = new serializer_1.ModelSerializer().serialize(this._dataSource);
        return $.Deferred().resolve({
            connectionName: this._dataSource.connectionName(),
            dataSourceName: serialized['@Name'],
            jsonScheme: JSON.stringify(serialized.Schema),
            rootElement: serialized['@RootElement']
        }).promise();
    };
    ChooseJsonSchemaPage.prototype.initialize = function (state) {
        return this._beginInternal(state);
    };
    ChooseJsonSchemaPage.prototype.reset = function () {
        this._clear();
    };
    return ChooseJsonSchemaPage;
}(wizardPage_1.WizardPageBase));
exports.ChooseJsonSchemaPage = ChooseJsonSchemaPage;
function _registerChooseJsonSchemaPage(factory, requestWrapper, callbacks) {
    factory.registerMetadata(pageId_1.JsonDataSourceWizardPageId.ChooseJsonSchemaPage, {
        setState: function (data, state) {
            state.dataSourceName = data.dataSourceName;
            state.jsonScheme = data.jsonScheme;
            state.rootElement = data.rootElement;
        },
        getState: function (state) {
            return state.jsonDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.dataSourceName = defaultState.dataSourceName;
            state.jsonScheme = defaultState.jsonScheme;
            state.rootElement = defaultState.rootElement;
        },
        create: function () {
            return new ChooseJsonSchemaPage(requestWrapper, undefined, callbacks);
        },
        description: localization_utils_1.getLocalization('Select data fields.', 'DataAccessUIStringId.WizardPageChooseJsonSchema'),
        template: 'dxrd-jsondatasource-fields-page'
    });
}
exports._registerChooseJsonSchemaPage = _registerChooseJsonSchemaPage;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dataSourceParameter_1 = __webpack_require__(11);
var _editorTypeMapper_1 = __webpack_require__(0);
var ParameterViewModel = (function (_super) {
    __extends(ParameterViewModel, _super);
    function ParameterViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParameterViewModel.prototype.getEditorType = function (type) {
        if (_editorTypeMapper_1.IsDataAccessExpression(type))
            return { header: 'dxqb-expressionstring' };
        return _editorTypeMapper_1.getEditorType(type);
    };
    return ParameterViewModel;
}(dataSourceParameter_1.DataSourceParameter));
exports.ParameterViewModel = ParameterViewModel;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var queryElementModel_1 = __webpack_require__(28);
var tableModel_1 = __webpack_require__(59);
var columnExpression_1 = __webpack_require__(60);
var dbColumn_1 = __webpack_require__(18);
var parameterModelMeta_1 = __webpack_require__(46);
var serializer_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(1);
var columnExpressionMeta_1 = __webpack_require__(61);
var relationModel_1 = __webpack_require__(93);
var parameterModel_1 = __webpack_require__(57);
var _getNameHelpers_1 = __webpack_require__(0);
var _qbFilterStringOptions_1 = __webpack_require__(151);
var columnModelMeta_1 = __webpack_require__(26);
var _queryBuilderObjectsProvider_1 = __webpack_require__(43);
var _groupFilterEditorSerializer_1 = __webpack_require__(146);
var margins_1 = __webpack_require__(4);
var _utils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var _infoMessageHelpers_1 = __webpack_require__(0);
var queryModelMeta_1 = __webpack_require__(96);
var _initializer_1 = __webpack_require__(90);
var _arrayutils_1 = __webpack_require__(0);
var _utils_2 = __webpack_require__(0);
var QueryViewModel = (function (_super) {
    __extends(QueryViewModel, _super);
    function QueryViewModel(querySource, dbSchemaProvider, parametersMode, beforeSaveCallback, serializer) {
        if (parametersMode === void 0) { parametersMode = parameterModelMeta_1.ParametersMode.ReadWrite; }
        var _this = _super.call(this, _utils_2.extend(true, querySource, QueryViewModel.emptyModel, querySource), null, serializer) || this;
        _this.aggregatedColumnsCount = ko.observable(0);
        _this._findAncestorsRelations = function (table) {
            var result = { inner: 0, outer: 0, relations: [] };
            _this.relations().forEach(function (item) {
                if (item.nestedTable() === table) {
                    result.relations.push(item);
                    item.joinType() === 'LeftOuter' ? result.outer++ : result.inner++;
                    var parentResult = _this._findAncestorsRelations(item.parentTable());
                    result.inner += parentResult.inner;
                    result.outer += parentResult.outer;
                    result.relations.push.apply(result.relations, parentResult.relations);
                }
            });
            return result;
        };
        _this['type']('SelectQuery');
        _this.controlType = 'Query';
        _this.dbSchemaProvider = dbSchemaProvider;
        _this.onSave = beforeSaveCallback;
        _this.tables = utils_1.deserializeArray(querySource['Tables']['SelectedTables'], function (item) { return new tableModel_1.TableViewModel(item, _this, serializer); });
        _this.columns = utils_1.deserializeArray(querySource['Columns'], function (item) { return new columnExpression_1.ColumnExpression(item, _this, serializer); });
        _this.sorting = utils_1.deserializeArray(querySource['Sorting'], function (item) { return new columnExpression_1.ColumnExpression(item, _this, serializer); });
        _this.grouping = utils_1.deserializeArray(querySource['Grouping'], function (item) { return new columnExpression_1.ColumnExpression(item, _this, serializer); });
        _this.tables().forEach(function (table) {
            var columns = [];
            [_this.columns(), _this.sorting(), _this.grouping()].forEach(function (currentColumns) {
                currentColumns.forEach(function (column) {
                    if (table.name() === column.table() && column.itemType() === columnExpressionMeta_1.ColumnType.Column &&
                        columns.every(function (x) { return x.column() !== column.column(); })) {
                        columns.push(column);
                    }
                });
            });
            _this._addColumnsToTable(table, columns);
            _this._initializeTable(table);
        });
        _this.relations = utils_1.deserializeArray(querySource['Tables']['Relations'], function (item) { return new relationModel_1.RelationViewModel(item, _this, serializer); });
        _this['_tablesObject']['tables'] = _this.tables;
        _this['_tablesObject']['relations'] = _this.relations;
        _this.tables().reduce(function (posX, tableModel) {
            tableModel.location.x(posX);
            tableModel.location.y(65);
            return posX + tableModel.size.width() + tableModel.size.width() / 2;
        }, 30);
        var parameters = utils_1.deserializeArray(querySource['Parameters'], function (item) { return new parameterModel_1.ParameterViewModel(item, serializer); });
        if (parametersMode === parameterModelMeta_1.ParametersMode.ReadWrite) {
            _this.parameters = parameters;
            _this._disposables.push(_this.parameters.subscribe(function (changes) {
                changes.forEach(function (change) {
                    if (change.status === 'added' && !change.value.name())
                        change.value.name(_getNameHelpers_1.getUniqueName(_this.parameters().filter(function (x) { return x !== change.value; }).map(function (x) { return x.name(); }), 'parameter'));
                });
            }, null, 'arrayChange'));
        }
        else {
            _this.parameters = ko.computed(function () { return parameters(); });
        }
        _this.editableName = ko.observable(_this.name());
        _this.name = ko.pureComputed({
            read: _this.editableName,
            write: function (val) { }
        });
        _this.filterString = new _qbFilterStringOptions_1.QBFilterStringOptions(_this._filterString, null, ko.pureComputed(function () { return (_this.tables().length === 0) && (_this.filterString && _this.filterString.value().length === 0); }));
        _this.filterString.initializeFilterStringHelper(_this.parameters, parametersMode);
        var inProcess = false;
        _this._disposables.push(ko.computed(function () {
            if (!inProcess) {
                inProcess = true;
                var allColumns = _this.getAllColumns();
                var withoutAggregate = allColumns.filter(function (x) { return x.aggregate() === columnModelMeta_1.AggregationType.None; });
                _this.aggregatedColumnsCount(allColumns.length - withoutAggregate.length);
                if (allColumns.length !== withoutAggregate.length) {
                    withoutAggregate.filter(function (x) { return x.selected() && !x.groupBy.peek(); }).forEach(function (x) { return x.groupBy(true); });
                }
                else {
                    if (!allColumns.every(function (x) { return !x.selected.peek() || x.groupBy.peek(); })) {
                        allColumns.forEach(function (x) { if (x.groupBy.peek()) {
                            x.groupBy(false);
                        } });
                    }
                }
                inProcess = false;
            }
        }));
        _this.groupFilterString = new _qbFilterStringOptions_1.QBFilterStringOptions(_this._groupFilterString, null, ko.pureComputed(function () { return !_this.columns().some(_queryBuilderObjectsProvider_1.isAggregatedExpression) && (_this.groupFilterString && (_this.groupFilterString.value() || '').length === 0); }));
        _this.groupFilterString.initializeFilterStringHelper(_this.parameters, parametersMode, new _groupFilterEditorSerializer_1.GroupFilterEditorSerializer(_this.columns));
        var _pageWidth = ko.observable(0);
        _this.pageWidth = ko.pureComputed({
            read: function () {
                var result = 500;
                _this.tables().forEach(function (table) {
                    var right = table.location.x() + table.size.width();
                    if (right > result) {
                        result = right;
                    }
                });
                return Math.max(_pageWidth(), result);
            },
            write: function (value) {
                _pageWidth(value);
            }
        });
        _this.pageHeight = ko.pureComputed(function () {
            var result = 500;
            _this.tables().forEach(function (table) {
                var bottom = table.location.y() + table.size.height();
                if (bottom > result) {
                    result = bottom + QueryViewModel.pageMargin;
                }
            });
            return result;
        });
        _this.margins = margins_1.Margins.fromString();
        _this.isValid = ko.pureComputed(function () { return _this._validate(); });
        var isAllColumnsAllTablesExpression = function (column) { return !column.table() && column.itemType() === columnExpressionMeta_1.ColumnType.AllColumns; };
        _this.allColumnsInTablesSelected = ko.computed({
            read: function () { return _this.columns().some(isAllColumnsAllTablesExpression); },
            write: function (value) {
                if (value) {
                    _this.columns.push(new columnExpression_1.ColumnExpression({ '@ItemType': 'AllColumns' }, _this, serializer));
                }
                else {
                    _this.columns.remove(isAllColumnsAllTablesExpression);
                }
            }
        });
        return _this;
    }
    QueryViewModel.prototype._initializeTable = function (table) {
        this.dbSchemaProvider.getDbTable(table.name())
            .done(function (dbTable) {
            table.createColumns(dbTable);
        });
    };
    QueryViewModel.prototype._addColumnsToTable = function (table, columns) {
        table._initColumns(columns.map(function (x) {
            return new dbColumn_1.DBColumn({
                Name: x.column()
            });
        }));
    };
    QueryViewModel.prototype.isPropertyDisabled = function (name) {
        if (name === 'skip')
            return this.skip() === 0 && !this.sorting().length;
        return false;
    };
    QueryViewModel.prototype.canSave = function (showMessage) {
        if (showMessage === void 0) { showMessage = true; }
        var message = [];
        this.tables().forEach(function (t) {
            t.getInvalidColumns().forEach(function (column) {
                message.push(_utils_1.formatUnicorn(localization_utils_1.getLocalization('The schema does not contain the following column: "{0}"."{1}".', 'DataAccessStringId.ColumnNotInSchemaValidationException'), t.actualName(), column.actualName()));
            });
        });
        if (message.length > 0) {
            showMessage && _infoMessageHelpers_1.ShowMessage(message.join('\n'), 'error');
            return false;
        }
        return true;
    };
    QueryViewModel.prototype.getInfo = function () {
        return queryModelMeta_1.querySerializationsInfo;
    };
    QueryViewModel.prototype.createChild = function (info) {
        if (info['@ControlType'] !== 'Table') {
            return _super.prototype.createChild.call(this, info);
        }
        var table = new tableModel_1.TableViewModel(info, this);
        this._initializeTable(table);
        this.addChild(table);
        return table;
    };
    QueryViewModel.prototype.getAllColumns = function () {
        return [].concat.apply([], this.tables().map(function (x) { return x.columns(); }));
    };
    QueryViewModel.prototype.tryToCreateRelationsByFK = function (sourceTable) {
        var _this = this;
        if (_initializer_1.isJoinsResolvingDisabled)
            return;
        this.dbSchemaProvider.getDbSchema().done(function (dbSchema) {
            var dbSourceTable = dbSchema.tables.filter(function (item) { return item.name === sourceTable.name(); })[0];
            if (dbSourceTable) {
                dbSourceTable.foreignKeys.forEach(function (fk) {
                    var pkTable = _arrayutils_1.getFirstItemByPropertyValue(_this.tables.peek(), 'name', fk.primaryKeyTable);
                    if (pkTable) {
                        for (var i = 0; i < fk.primaryKeyColumns.length; i++) {
                            var column1 = _arrayutils_1.getFirstItemByPropertyValue(sourceTable.columns(), 'name', fk.columns[i]);
                            var column2 = _arrayutils_1.getFirstItemByPropertyValue(pkTable.columns(), 'name', fk.primaryKeyColumns[i]);
                            if (column1 && column2) {
                                _this.cerateJoinCondition(column1, column2);
                            }
                        }
                    }
                });
            }
            _this.tables.peek().forEach(function (table) {
                var dbTable = dbSchema.tables.filter(function (item) { return item.name === table.name(); })[0];
                if (dbTable) {
                    dbTable.foreignKeys.forEach(function (fk) {
                        if (fk.primaryKeyTable === sourceTable.name()) {
                            for (var i = 0; i < fk.primaryKeyColumns.length; i++) {
                                var column1 = _arrayutils_1.getFirstItemByPropertyValue(sourceTable.columns(), 'name', fk.primaryKeyColumns[i]);
                                var column2 = _arrayutils_1.getFirstItemByPropertyValue(table.columns(), 'name', fk.columns[i]);
                                if (column1 && column2) {
                                    _this.cerateJoinCondition(column2, column1);
                                }
                            }
                        }
                    });
                }
            });
        });
    };
    QueryViewModel.prototype.addChild = function (control) {
        if (control instanceof relationModel_1.RelationViewModel) {
            if (this.relations.indexOf(control) > -1)
                return;
            control.parentModel(this);
            this.relations.push(control);
        }
        else if (control instanceof tableModel_1.TableViewModel) {
            if (this.tables.indexOf(control) > -1)
                return;
            control.parentModel(this);
            if (_arrayutils_1.getFirstItemByPropertyValue(this.tables(), 'actualName', control.name()) !== null) {
                control.alias(_getNameHelpers_1.getUniqueName(this.tables().map(function (table) { return table.actualName(); }), control.name() + '_'));
            }
            this.tables.push(control);
        }
        else {
            _infoMessageHelpers_1.NotifyAboutWarning('Attempt to add wrong child control.');
        }
    };
    QueryViewModel.prototype.removeChild = function (control) {
        if (control instanceof relationModel_1.RelationViewModel) {
            if (this.relations().length < 1)
                return;
            var relation = control;
            var indexRelation = this.relations().indexOf(relation);
            while (relation.conditions().length > 0)
                relation.conditions.pop();
            this.relations.splice(indexRelation, 1);
        }
        else if (control instanceof tableModel_1.TableViewModel) {
            if (this.tables().length < 1)
                return;
            this.tables.splice(this.tables().indexOf(control), 1);
            var relations = this.relations();
            for (var i = relations.length - 1; i > -1; i--) {
                if (relations[i].parentTable() === control || relations[i].nestedTable() === control) {
                    this.removeChild(relations[i]);
                }
            }
            this.sorting.remove(function (item) { return item.isDepended(control.actualName()); });
            this.grouping.remove(function (item) { return item.isDepended(control.actualName()); });
            this.columns.remove(function (item) { return item.isDepended(control.actualName()); });
        }
        else {
            _infoMessageHelpers_1.NotifyAboutWarning('Attempt to remove wrong child control.');
        }
    };
    QueryViewModel.prototype.getTable = function (name) {
        return _arrayutils_1.findFirstItemMatchesCondition(this.tables(), function (item) { return item.actualName() === name; });
    };
    QueryViewModel.prototype._findTableInAncestors = function (child, probablyAncestor) {
        var _this = this;
        return this.relations().some(function (relation) {
            return relation.nestedTable() === child && (relation.parentTable() === probablyAncestor || _this._findTableInAncestors(relation.parentTable(), probablyAncestor));
        });
    };
    QueryViewModel.prototype._findHead = function (table) {
        var result = null;
        this.relations().some(function (relation) {
            if (relation.nestedTable() === table)
                result = relation;
            return !!result;
        });
        return result ? this._findHead(result.parentTable()) : table;
    };
    QueryViewModel.prototype._isHead = function (table) {
        return !this.relations().some(function (relation) { return relation.nestedTable() === table; });
    };
    QueryViewModel.prototype._reverseRelations = function (table, relationsToReverse) {
        relationsToReverse.forEach(function (item) {
            var tempTable = item.parentTable();
            item.parentTable(item.nestedTable());
            item.nestedTable(tempTable);
            item.conditions().forEach(function (condition) {
                var tempColumn = condition.parentColumnName();
                condition.parentColumnName(condition.nestedColumnName());
                condition.nestedColumnName(tempColumn);
            });
        });
    };
    QueryViewModel.prototype.cerateJoinCondition = function (parentColumn, nestedColumn) {
        var parentTable = parentColumn.parentModel();
        var nestedTable = nestedColumn.parentModel();
        if (parentTable === nestedTable)
            return null;
        var isColumnsReplaced = false;
        var relation = _arrayutils_1.findFirstItemMatchesCondition(this.relations(), function (relation) {
            isColumnsReplaced = relation.parentTable() === nestedTable && relation.nestedTable() === parentTable;
            return relation.parentTable() === parentTable && relation.nestedTable() === nestedTable || isColumnsReplaced;
        });
        if (relation) {
        }
        else if (this._findTableInAncestors(parentTable, nestedTable)) {
            isColumnsReplaced = true;
        }
        else if (this._findHead(parentTable) !== this._findHead(nestedTable) && !this._isHead(nestedTable)) {
            var parentRelations = this._findAncestorsRelations(parentTable);
            var nestedRelations = this._findAncestorsRelations(nestedTable);
            if (parentRelations.outer > nestedRelations.outer) {
                this._reverseRelations(nestedTable, nestedRelations.relations);
            }
            else if (parentRelations.outer < nestedRelations.outer) {
                this._reverseRelations(parentTable, parentRelations.relations);
                isColumnsReplaced = true;
            }
            else if (parentRelations.inner >= nestedRelations.inner) {
                this._reverseRelations(nestedTable, nestedRelations.relations);
            }
            else if (parentRelations.inner < nestedRelations.inner) {
                this._reverseRelations(parentTable, parentRelations.relations);
                isColumnsReplaced = true;
            }
        }
        if (isColumnsReplaced) {
            var tempTable = parentTable;
            parentTable = nestedTable;
            nestedTable = tempTable;
            var tempColumn = parentColumn;
            parentColumn = nestedColumn;
            nestedColumn = tempColumn;
        }
        relation = relation || this.createChild({
            '@ControlType': 'Relation',
            '@Parent': parentTable.actualName(),
            '@Nested': nestedTable.actualName(),
            '@Type': 'Inner'
        });
        var joinCondition = _arrayutils_1.findFirstItemMatchesCondition(relation.conditions(), function (condition) {
            return condition.parentColumn() === parentColumn && condition.nestedColumn() === nestedColumn;
        });
        if (!joinCondition) {
            joinCondition = relation.createChild({ '@ControlType': 'JoinCondition', '@Parent': parentColumn.name(), '@Nested': nestedColumn.name() });
        }
        return joinCondition;
    };
    QueryViewModel.prototype._validate = function () {
        if (this.tables().length === 0)
            return false;
        if (!(this.allColumnsInTablesSelected() || this.tables().some(function (t) { return t.asterisk.selected() || t.columns().some(function (c) { return c.selected(); }); })))
            return false;
        var tables = this.tables().map(function (table) { return table.actualName(); });
        this._validateTable(tables, tables[0]);
        return tables.length < 1;
    };
    QueryViewModel.prototype._validateTable = function (tables, tableName) {
        var _this = this;
        var index = tables.indexOf(tableName);
        if (index < 0)
            return;
        tables.splice(index, 1);
        var connectedTables = this.relations().map(function (relation) {
            if (relation.parentTableName() === tableName)
                return relation.nestedTableName();
            if (relation.nestedTableName() === tableName)
                return relation.parentTableName();
            return null;
        });
        connectedTables.forEach(function (item) { return _this._validateTable(tables, item); });
    };
    QueryViewModel.prototype.serialize = function (includeRootTag) {
        if (includeRootTag === void 0) { includeRootTag = false; }
        return includeRootTag ? { 'Query': this.serialize() } : (new serializer_1.ModelSerializer()).serialize(this);
    };
    QueryViewModel.prototype.save = function () {
        if (!this.canSave())
            return;
        var data = this.serialize(true);
        if (this.onSave) {
            this.onSave(data);
        }
        return data;
    };
    QueryViewModel.pageMargin = 20;
    QueryViewModel.emptyModel = { '@ItemType': 'Query', 'Tables': { 'SelectedTables': {}, 'Relations': {} }, 'Columns': {}, 'Sorting': {}, 'Grouping': {} };
    return QueryViewModel;
}(queryElementModel_1.QueryElementBaseViewModel));
exports.QueryViewModel = QueryViewModel;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var queryElementModel_1 = __webpack_require__(28);
var columnModel_1 = __webpack_require__(91);
var allColumnsModel_1 = __webpack_require__(153);
var size_1 = __webpack_require__(4);
var point_1 = __webpack_require__(4);
var tableModelMeta_1 = __webpack_require__(92);
var _arrayutils_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(0);
var TableViewModel = (function (_super) {
    __extends(TableViewModel, _super);
    function TableViewModel(model, parent, serializer) {
        var _this = _super.call(this, _utils_1.extend(model, { '@ControlType': 'Table', '@ItemType': 'Table' }), parent, serializer) || this;
        _this.serializer = serializer;
        _this._columnsConnectionPointLeftX = ko.pureComputed(function () { return _this.location.x(); });
        _this._columnsConnectionPointRightX = ko.pureComputed(function () { return _this.location.x() + _this.size.width(); });
        _this._columns = ko.observableArray();
        _this._initialized = ko.observable(false);
        _this.size = new size_1.Size(199, 123);
        _this.location = new point_1.Point(0, 0);
        _this.actualName = ko.pureComputed(function () { return _this.alias() || _this.name(); });
        _this.isReady = ko.observable(false);
        _this.allColumnsSelected = ko.computed({
            read: function () {
                var selectedColumns = _this.columns().filter(function (item) { return item.selected(); });
                if (selectedColumns.length === 0) {
                    return false;
                }
                if (selectedColumns.length === _this._columns.peek().length) {
                    return true;
                }
                return false;
            },
            deferEvaluation: true
        });
        _this.isInitialized = ko.pureComputed(function () { return _this._initialized(); });
        _this.size.height = ko.pureComputed({
            read: function () {
                if (_this._columns().length === 0) {
                    return TableViewModel.TABLE_DEFAULT_HEIGHT;
                }
                return TableViewModel.COLUMNS_OFFSET + (TableViewModel.COLUMN_HEIGHT + TableViewModel.COLUMN_MARGIN) * (_this._columns().length + 1);
            },
            write: function () {
            }
        });
        _this.asterisk = new allColumnsModel_1.AllColumnsViewModel(_this, _this.serializer);
        return _this;
    }
    TableViewModel.prototype.columns = function () {
        return this._columns();
    };
    TableViewModel.prototype.toggleSelectedColumns = function () {
        var value = !this.allColumnsSelected.peek();
        this._columns.peek().forEach(function (column) { column.selected(value); });
    };
    TableViewModel.prototype.getColumnConnectionPoints = function (column) {
        var _this = this;
        var y = ko.pureComputed({
            read: function () {
                var index = _this._columns.indexOf(column) + 1;
                return _this.location.y() + TableViewModel.COLUMNS_OFFSET + TableViewModel.COLUMN_MARGIN * index + TableViewModel.COLUMN_HEIGHT * (index + 0.5);
            },
            deferEvaluation: true
        });
        return {
            left: { x: this._columnsConnectionPointLeftX, y: y },
            right: { x: this._columnsConnectionPointRightX, y: y }
        };
    };
    TableViewModel.prototype.getInfo = function () {
        return tableModelMeta_1.tableSerializationInfo;
    };
    TableViewModel.prototype.getInvalidColumns = function () {
        return this.columns().filter(function (x) { return x.isNotAvailable() && x.selected(); });
    };
    TableViewModel.prototype.getColumn = function (name) {
        return _arrayutils_1.getFirstItemByPropertyValue(this._columns(), 'name', name);
    };
    TableViewModel.prototype._initColumns = function (columns, update) {
        var _this = this;
        if (update === void 0) { update = false; }
        var result = [];
        columns.forEach(function (item) {
            result.push(new columnModel_1.ColumnViewModel({ '@Name': item.name }, item, _this, _this.serializer));
        });
        this._columns(update ? [].concat([], this.columns(), result) : result);
    };
    TableViewModel.prototype.createColumns = function (dbTable) {
        var _this = this;
        var notAvailableColumnsCount = 0;
        this.columns().forEach(function (column) {
            var expectedColumn = dbTable.columns.filter(function (x) { return x.name === column.name(); })[0];
            if (expectedColumn) {
                column._type(expectedColumn.type);
                column._size(expectedColumn.size);
            }
            else {
                column.isNotAvailable(dbTable.columns.every(function (x) { return x.name !== column.name(); }));
                notAvailableColumnsCount++;
            }
        });
        if (this.columns().length - notAvailableColumnsCount < dbTable.columns.length) {
            this._initColumns(dbTable.columns.filter(function (x) { return _this.columns().every(function (c) { return c.name() !== x.name; }); }), true);
        }
        this._initialized(true);
    };
    TableViewModel.COLUMNS_OFFSET = 37;
    TableViewModel.COLUMN_HEIGHT = 32;
    TableViewModel.COLUMN_MARGIN = 1;
    TableViewModel.TABLE_MIN_WIDTH = 80;
    TableViewModel.TABLE_DEFAULT_HEIGHT = 136;
    return TableViewModel;
}(queryElementModel_1.QueryElementBaseViewModel));
exports.TableViewModel = TableViewModel;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var criteriaOperator_1 = __webpack_require__(45);
var serializer_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(147);
var property_1 = __webpack_require__(45);
var _arrayutils_1 = __webpack_require__(0);
var columnExpressionMeta_1 = __webpack_require__(61);
var ColumnExpression = (function () {
    function ColumnExpression(model, query, serializer) {
        var _this = this;
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(this, model);
        this._dependedTables = [];
        if (this.table()) {
            var tableRef = query.getTable(this.table());
            this.table = ko.pureComputed(function () { return tableRef.actualName(); });
            this._dependedTables.push(tableRef);
        }
        else if (this.expression()) {
            try {
                this._criteria = criteriaOperator_1.CriteriaOperator.parse(this.expression());
                utils_1.criteriaForEach(this._criteria, function (operand) {
                    if (operand instanceof property_1.OperandProperty) {
                        var dependedTable = _arrayutils_1.findFirstItemMatchesCondition(query.tables(), function (table) { return operand.propertyName.indexOf(table.actualName() + '.') === 0; });
                        dependedTable && _this._dependedTables.push(dependedTable);
                    }
                });
            }
            catch (e) {
            }
        }
    }
    ColumnExpression.prototype.actualName = function () {
        return this.alias() || this.column();
    };
    ColumnExpression.prototype.getInfo = function () {
        return columnExpressionMeta_1.columnExpressionSerializationsInfo;
    };
    ColumnExpression.prototype.isDepended = function (tableActualName) {
        return !!_arrayutils_1.findFirstItemMatchesCondition(this._dependedTables, function (depended) { return depended.actualName() === tableActualName; });
    };
    return ColumnExpression;
}());
exports.ColumnExpression = ColumnExpression;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var columnModelMeta_1 = __webpack_require__(26);
exports.ColumnType = {
    RecordsCount: 'RecordsCount',
    Column: 'Column',
    Expression: 'Expression',
    AllColumns: 'AllColumns'
};
exports.columnExpressionSerializationsInfo = [
    { propertyName: 'expression', modelName: '#text' },
    { propertyName: 'table', modelName: '@Table' },
    { propertyName: 'column', modelName: '@Name' },
    { propertyName: 'aggregate', modelName: '@Aggregate', defaultVal: columnModelMeta_1.AggregationType.None },
    { propertyName: 'alias', modelName: '@Alias' },
    { propertyName: 'descending', modelName: '@Descending', defaultVal: false },
    { propertyName: 'itemType', modelName: '@ItemType' }
];


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var baseSurface_1 = __webpack_require__(4);
var _queryBuilderObjectsProvider_1 = __webpack_require__(43);
var _dragDropHandler_1 = __webpack_require__(0);
var ColumnSurface = (function (_super) {
    __extends(ColumnSurface, _super);
    function ColumnSurface(control, context) {
        var _this = _super.call(this, control, context, null) || this;
        _this.template = 'dxqb-table-field';
        _this.toggleSelected = function () {
            _this.getControlModel().selected(!_this.getControlModel().selected());
        };
        _this.selectedWrapper = ko.pureComputed(function () {
            return _this.getControlModel().selected();
        });
        _this.isNotAvailable = ko.pureComputed(function () { return _this._control.isNotAvailable(); });
        _this.isAggregate = ko.pureComputed(function () { return _queryBuilderObjectsProvider_1.isAggregatedExpression(_this.getControlModel()); });
        _this.isAscending = ko.pureComputed(function () {
            return _this.getControlModel().sortingType() === 'Ascending';
        });
        _this.isDescending = ko.pureComputed(function () {
            return _this.getControlModel().sortingType() === 'Descending';
        });
        _this.cssClasses = function (query, columnDragHandler, parent) {
            if (!_this._isJoined) {
                _this._isJoined = ko.pureComputed(function () {
                    return query.isJoined(_this) || _this.getControlModel() === columnDragHandler.getDragColumn();
                });
            }
            if (!_this._isHovered) {
                _this._isHovered = ko.pureComputed(function () {
                    var isColumnDragStarted = !!columnDragHandler.getDragColumn();
                    var isCurrentTableNotParentForDraggedColumn = isColumnDragStarted && _this.getControlModel().parentModel() !== columnDragHandler.getDragColumn().parentModel();
                    return _this.underCursor().isOver && (!_dragDropHandler_1.DragDropHandler.started() || isCurrentTableNotParentForDraggedColumn);
                });
            }
            return {
                'dxd-state-invalid': _this.isNotAvailable,
                'dxd-state-active': _this.selected(),
                'dxd-state-joined': _this._isJoined,
                'dxd-state-hovered': _this._isHovered,
            };
        };
        return _this;
    }
    return ColumnSurface;
}(baseSurface_1.SurfaceElementBase));
exports.ColumnSurface = ColumnSurface;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var diagramElementSurface_1 = __webpack_require__(29);
var ConnectingPointSurface = (function (_super) {
    __extends(ConnectingPointSurface, _super);
    function ConnectingPointSurface(control, context) {
        var _this = _super.call(this, control, context, ConnectingPointSurface._unitProperties) || this;
        _this.template = 'dxdd-connecting-point';
        _this.selectiontemplate = 'dxdd-connection-point-selection';
        _this.contenttemplate = '';
        return _this;
    }
    ConnectingPointSurface._unitProperties = {
        _x: function (o) {
            return ko.pureComputed(function () { return o.location.x() - o.parentModel().location.x(); });
        },
        _y: function (o) {
            return ko.pureComputed(function () { return o.location.y() - o.parentModel().location.y(); });
        }
    };
    return ConnectingPointSurface;
}(diagramElementSurface_1.DiagramElementBaseSurface));
exports.ConnectingPointSurface = ConnectingPointSurface;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var diagramElementModel_1 = __webpack_require__(15);
var connectionPointModel_1 = __webpack_require__(65);
var point_1 = __webpack_require__(4);
var size_1 = __webpack_require__(4);
var _utils_1 = __webpack_require__(0);
var ConnectorViewModel = (function (_super) {
    __extends(ConnectorViewModel, _super);
    function ConnectorViewModel(control, parent, serializer) {
        var _this = _super.call(this, _utils_1.extend({ '@ControlType': 'Connector' }, control), parent, serializer) || this;
        _this.startPoint(_this.startPoint() || new connectionPointModel_1.ConnectionPointViewModel({ '@Location': '0, 0' }, _this, serializer));
        _this.endPoint(_this.endPoint() || new connectionPointModel_1.ConnectionPointViewModel({ '@Location': '150, 75' }, _this, serializer));
        _this.location = new point_1.Point(0, 0);
        _this.location.x = ko.pureComputed({
            read: function () {
                return _this.getX();
            },
            write: function (value) {
                var oldValue = _this.startPoint().location.x() < _this.endPoint().location.x() ? _this.startPoint().location.x() : _this.endPoint().location.x();
                var delta = value - oldValue;
                _this.startPoint().location.x(_this.startPoint().location.x() + delta);
                _this.endPoint().location.x(_this.endPoint().location.x() + delta);
            }
        });
        _this.location.y = ko.pureComputed({
            read: function () {
                return _this.getY();
            },
            write: function (value) {
                var oldValue = _this.startPoint().location.y() < _this.endPoint().location.y() ? _this.startPoint().location.y() : _this.endPoint().location.y();
                var delta = value - oldValue;
                _this.startPoint().location.y(_this.startPoint().location.y() + delta);
                _this.endPoint().location.y(_this.endPoint().location.y() + delta);
            }
        });
        _this.size = new size_1.Size(0, 0);
        _this.size.width = ko.pureComputed({
            read: function () {
                return _this.getWidth();
            },
            write: function (value) {
                if (_this.startPoint().location.x() < _this.endPoint().location.x()) {
                    _this.endPoint().location.x(_this.startPoint().location.x() + value);
                }
                else {
                    _this.startPoint().location.x(_this.endPoint().location.x() + value);
                }
            }
        });
        _this.size.height = ko.pureComputed({
            read: function () {
                return _this.getHeight();
            },
            write: function (value) {
                if (_this.startPoint().location.y() < _this.endPoint().location.y()) {
                    _this.endPoint().location.y(_this.startPoint().location.y() + value);
                }
                else {
                    _this.startPoint().location.y(_this.endPoint().location.y() + value);
                }
            }
        });
        return _this;
    }
    ConnectorViewModel.prototype.getX = function () {
        return this.startPoint().location.x() < this.endPoint().location.x() ? this.startPoint().location.x() : this.endPoint().location.x();
    };
    ConnectorViewModel.prototype.getY = function () {
        return this.startPoint().location.y() < this.endPoint().location.y() ? this.startPoint().location.y() : this.endPoint().location.y();
    };
    ConnectorViewModel.prototype.getWidth = function () {
        return Math.abs(this.startPoint().location.x() - this.endPoint().location.x()) || ConnectorViewModel.MIN_LINE_THICKNESS;
    };
    ConnectorViewModel.prototype.getHeight = function () {
        return Math.abs(this.startPoint().location.y() - this.endPoint().location.y()) || ConnectorViewModel.MIN_LINE_THICKNESS;
    };
    ConnectorViewModel.MIN_LINE_THICKNESS = 3;
    return ConnectorViewModel;
}(diagramElementModel_1.DiagramElementBaseViewModel));
exports.ConnectorViewModel = ConnectorViewModel;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var diagramElementModel_1 = __webpack_require__(15);
var metadata_1 = __webpack_require__(20);
var _utils_1 = __webpack_require__(0);
var ConnectionPointViewModel = (function (_super) {
    __extends(ConnectionPointViewModel, _super);
    function ConnectionPointViewModel(control, parent, serializer) {
        var _this = _super.call(this, _utils_1.extend(control, { '@ControlType': 'ConnectionPoint' }), parent, serializer) || this;
        var _x = _this.location.x, _y = _this.location.y;
        _this.location.x = ko.pureComputed({
            read: function () {
                return _this.connectingPoint() && _this.connectingPoint().location.x() || _x();
            },
            write: function (value) {
                _this.connectingPoint(null);
                _x(value);
            }
        });
        _this.location.y = ko.pureComputed({
            read: function () {
                return _this.connectingPoint() && _this.connectingPoint().location.y() || _y();
            },
            write: function (value) {
                _this.connectingPoint(null);
                _y(value);
            }
        });
        return _this;
    }
    return ConnectionPointViewModel;
}(diagramElementModel_1.DiagramElementBaseViewModel));
exports.ConnectionPointViewModel = ConnectionPointViewModel;
exports.connectionPointSerializationInfo = [
    metadata_1.location,
    { propertyName: 'connectingPoint', modelName: '@ConnectingPoint', link: true }
];


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var diagramElementModel_1 = __webpack_require__(15);
var serializer_1 = __webpack_require__(1);
var margins_1 = __webpack_require__(4);
var parsers_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(20);
var editorsInfo_1 = __webpack_require__(6);
var DiagramViewModel = (function (_super) {
    __extends(DiagramViewModel, _super);
    function DiagramViewModel(diagramSource) {
        var _this = this;
        var serializer = new serializer_1.ModelSerializer();
        _this = _super.call(this, diagramSource, null, serializer) || this;
        _this.controlType = 'Diagram';
        _this.controls = ko.observableArray();
        _this.name('Diagram');
        return _this;
    }
    DiagramViewModel.prototype.getInfo = function () {
        return exports.diagramSerializationsInfo;
    };
    return DiagramViewModel;
}(diagramElementModel_1.DiagramElementBaseViewModel));
exports.DiagramViewModel = DiagramViewModel;
exports.margins = { propertyName: 'margins', modelName: '@Margins', from: margins_1.Margins.fromString, displayName: 'Margins' };
exports.pageWidth = { propertyName: 'pageWidth', modelName: '@PageWidth', defaultVal: 850, from: parsers_1.floatFromModel, displayName: 'Page Width', editor: editorsInfo_1.editorTemplates.getEditor('numeric') };
exports.pageHeight = { propertyName: 'pageHeight', modelName: '@PageHeight', defaultVal: 1250, from: parsers_1.floatFromModel, displayName: 'Page Height', editor: editorsInfo_1.editorTemplates.getEditor('numeric') };
exports.diagramSerializationsInfo = [metadata_1.name, exports.pageWidth, exports.pageHeight, exports.margins];


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var baseSurface_1 = __webpack_require__(4);
var _arrayutils_1 = __webpack_require__(0);
var _hoverInfo_1 = __webpack_require__(0);
var DiagramSurface = (function (_super) {
    __extends(DiagramSurface, _super);
    function DiagramSurface(diagram, zoom) {
        if (zoom === void 0) { zoom = ko.observable(1); }
        var _this = _super.call(this, diagram, {
            measureUnit: ko.observable('Pixels'),
            zoom: zoom,
            dpi: ko.observable(100)
        }, DiagramSurface._unitProperties) || this;
        _this.measureUnit = ko.observable('Pixels');
        _this.dpi = ko.observable(100);
        _this.controls = ko.observableArray();
        _this.allowMultiselect = false;
        _this.focused = ko.observable(false);
        _this.selected = ko.observable(false);
        _this.underCursor = ko.observable(new _hoverInfo_1.HoverInfo());
        _this.parent = null;
        _this.templateName = 'dx-diagram-surface';
        _this.margins = { bottom: _this['_bottom'], left: _this['_left'], right: _this['_right'], top: _this['_top'] };
        _this.zoom = zoom;
        _this._context = _this;
        _arrayutils_1.createObservableArrayMapCollection(diagram.controls, _this.controls, _this._createSurface);
        return _this;
    }
    DiagramSurface.prototype.checkParent = function (surfaceParent) { return false; };
    DiagramSurface.prototype.getChildrenCollection = function () {
        return ko.observableArray([]);
    };
    DiagramSurface._unitProperties = {
        _width: function (o) { return o.pageWidth; },
        _height: function (o) { return o.pageWidth; },
        pageWidth: function (o) { return o.pageWidth; },
        pageHeight: function (o) { return o.pageHeight; },
        _bottom: function (o) { return o.margins.bottom; },
        _left: function (o) { return o.margins.left; },
        _right: function (o) { return o.margins.right; },
        _top: function (o) { return o.margins.top; }
    };
    return DiagramSurface;
}(baseSurface_1.SurfaceElementBase));
exports.DiagramSurface = DiagramSurface;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(1);
var _dbSchemaProvider_1 = __webpack_require__(102);
var requestwrapper_1 = __webpack_require__(8);
var _arrayutils_1 = __webpack_require__(0);
var _localization_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
var DBSchemaProvider = (function (_super) {
    __extends(DBSchemaProvider, _super);
    function DBSchemaProvider(connection, _requestWrapper) {
        if (_requestWrapper === void 0) { _requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this) || this;
        _this._requestWrapper = _requestWrapper;
        _this._tables = {};
        _this._tableRequests = ko.observableArray([]).extend({ deferred: true });
        _this.connection = connection;
        _this._disposables.push(_this.connection.name.subscribe(function () {
            _this._tables = {};
            _this._dbSchema = null;
            _this._dbStoredProceduresSchema = null;
        }));
        _this._disposables.push(ko.computed(function () {
            var tableRequests = _this._tableRequests();
            if (!tableRequests.length)
                return;
            _this._tableRequests([]);
            var tables = tableRequests.map(function (x) { return x.table; });
            _this._getDBSchema(tables).done(function (dbSchema) {
                tableRequests.forEach(function (tableRequest) {
                    var schemaTable = dbSchema.tables.filter(function (x) { return x.name === tableRequest.table.name; })[0];
                    if (!schemaTable) {
                        tableRequest.deferred.reject();
                        return;
                    }
                    tableRequest.table.columns = schemaTable.columns;
                    tableRequest.deferred.resolve(tableRequest.table);
                });
            }).fail(function () { return tableRequests.forEach(function (request) { return request.deferred.reject(); }); });
        }));
        _this.getItems = function (pathRequest) {
            var deferred = $.Deferred();
            if (!pathRequest.fullPath) {
                _this.getDbSchema().done(function (dbSchema) {
                    deferred.resolve($.map(dbSchema.tables, function (item) {
                        var dataMemberInfo = {
                            name: item.name,
                            displayName: item.name,
                            isList: false,
                            specifics: item.isView ? 'view' : 'table',
                            dragData: { noDragable: false }
                        };
                        return dataMemberInfo;
                    }));
                });
            }
            else {
                deferred.resolve([]);
            }
            return deferred.promise();
        };
        return _this;
    }
    DBSchemaProvider.prototype._getDBSchema = function (tables) {
        return this._getDBSchemaCallback(this.connection, tables);
    };
    DBSchemaProvider.prototype._getDBSchemaCallback = function (connection, tables) {
        return _dbSchemaProvider_1.getDBSchemaCallback(this._requestWrapper, connection, tables);
    };
    DBSchemaProvider.prototype._getDBStoredProcedures = function (connection) {
        return _dbSchemaProvider_1.getDBStoredProceduresCallback(this._requestWrapper, connection);
    };
    DBSchemaProvider.prototype.getDbSchema = function () {
        if (!this._dbSchema || this._dbSchema.state() === 'rejected')
            this._dbSchema = this._getDBSchema();
        return this._dbSchema;
    };
    DBSchemaProvider.prototype.getDbStoredProcedures = function () {
        if (!this._dbStoredProceduresSchema || this._dbStoredProceduresSchema.state() === 'rejected')
            this._dbStoredProceduresSchema = this._getDBStoredProcedures(this.connection);
        return this._dbStoredProceduresSchema;
    };
    DBSchemaProvider.prototype.getDbTable = function (tableName) {
        var _this = this;
        if (!this._tables[tableName]) {
            var deferred = $.Deferred();
            this._tables[tableName] = deferred.promise();
            this.getDbSchema().done(function (dbSchema) {
                var table = _arrayutils_1.findFirstItemMatchesCondition(dbSchema.tables, function (table) { return table.name === tableName; });
                if (!table) {
                    deferred.reject();
                    _localization_1.isCustomizedWithUpdateLocalizationMethod('The schema does not contain the specified table: ') ?
                        localization_utils_1.getLocalization('The schema does not contain the specified table: ') + "'" + tableName + "'." :
                        _utils_1.formatUnicorn(localization_utils_1.getLocalization('The schema does not contain the specified table: "{0}".', 'DataAccessStringId.TableNotInSchemaValidationException'), tableName);
                }
                else if (table.columns.length > 0) {
                    deferred.resolve(table);
                }
                else {
                    _this._tableRequests.push({ table: table, deferred: deferred });
                }
            }).fail(function () { return deferred.reject(); });
        }
        return this._tables[tableName];
    };
    return DBSchemaProvider;
}(utils_1.Disposable));
exports.DBSchemaProvider = DBSchemaProvider;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _dbSchema_1 = __webpack_require__(19);
var DBStoredProcedure = (function () {
    function DBStoredProcedure(model) {
        this.name = model['Name'];
        this.arguments = _dbSchema_1.deserializeToCollection(model['arguments'], function (argModel) { return new DBStoredProcedureArgument(argModel); });
    }
    return DBStoredProcedure;
}());
exports.DBStoredProcedure = DBStoredProcedure;
var DBStoredProcedureArgumentDirection;
(function (DBStoredProcedureArgumentDirection) {
    DBStoredProcedureArgumentDirection[DBStoredProcedureArgumentDirection["In"] = 0] = "In";
    DBStoredProcedureArgumentDirection[DBStoredProcedureArgumentDirection["Out"] = 1] = "Out";
    DBStoredProcedureArgumentDirection[DBStoredProcedureArgumentDirection["InOut"] = 2] = "InOut";
})(DBStoredProcedureArgumentDirection = exports.DBStoredProcedureArgumentDirection || (exports.DBStoredProcedureArgumentDirection = {}));
var DBStoredProcedureArgument = (function () {
    function DBStoredProcedureArgument(model) {
        this.name = model['Name'];
        this.type = model['Type'];
        this.direction = model['Direction'];
    }
    return DBStoredProcedureArgument;
}());
exports.DBStoredProcedureArgument = DBStoredProcedureArgument;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _internal_1 = __webpack_require__(0);
exports.ActionId = {
    Save: 'dxqb-save',
    DataPreview: 'dxqb-data-preview',
    SelectStatementPreview: 'dxqb-select-statement-preview'
};
exports.HandlerUri = _internal_1.createGlobalModuleVariableFunc('DXQB.axd');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(1);
var resultTable_1 = __webpack_require__(106);
var resultSetSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'tables', modelName: 'Views', array: true }
];
var ResultSet = (function () {
    function ResultSet(model, serializer) {
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(this, model);
        this.tables = utils_1.deserializeArray(model && model['Views'] || [], function (item) {
            return new resultTable_1.ResultTable(item, serializer);
        });
    }
    ResultSet.prototype.getInfo = function () {
        return resultSetSerializationInfo;
    };
    ResultSet.from = function (model, serializer) {
        return model && new ResultSet(model['DataSet'], serializer) || null;
    };
    ResultSet.toJson = function (value, serializer, refs) {
        return { 'DataSet': serializer.serialize(value, resultSetSerializationInfo, refs) };
    };
    return ResultSet;
}());
exports.ResultSet = ResultSet;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = __webpack_require__(1);
var JsonAuthenticationInfo = (function () {
    function JsonAuthenticationInfo(model, serializer) {
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(this, model || {});
    }
    JsonAuthenticationInfo.from = function (model, serializer) {
        return new JsonAuthenticationInfo(model, serializer);
    };
    JsonAuthenticationInfo.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    JsonAuthenticationInfo.prototype.getInfo = function () {
        return [
            { propertyName: 'password', modelName: '@password', defaultVal: '' },
            { propertyName: 'userName', modelName: '@user', defaultVal: '' }
        ];
    };
    return JsonAuthenticationInfo;
}());
exports.JsonAuthenticationInfo = JsonAuthenticationInfo;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var serializer_1 = __webpack_require__(1);
var editorsInfo_1 = __webpack_require__(6);
var localization_utils_1 = __webpack_require__(1);
var JsonParameterType;
(function (JsonParameterType) {
    JsonParameterType[JsonParameterType["PathParameter"] = 0] = "PathParameter";
    JsonParameterType[JsonParameterType["QueryParameter"] = 1] = "QueryParameter";
    JsonParameterType[JsonParameterType["Header"] = 2] = "Header";
})(JsonParameterType = exports.JsonParameterType || (exports.JsonParameterType = {}));
var JsonParameter = (function (_super) {
    __extends(JsonParameter, _super);
    function JsonParameter(model, serializer) {
        var _this = _super.call(this) || this;
        _this.expression_Prefix = 'expression:';
        _this.namePlaceholder = function () { return localization_utils_1.getLocalization('Name', 'AnalyticsCoreStringId.CollectionEditor_Name_Placeholder'); };
        _this.valuePlaceholder = function () { return localization_utils_1.getLocalization('Value', 'AnalyticsCoreStringId.CollectionEditor_Value_Placeholder'); };
        _this._editingValue = ko.observable('');
        _this._expression = { value: ko.observable('') };
        _this.isExpression = ko.observable(false);
        _this.itemsProvider = null;
        _this._parameterTypes = parameterTypes;
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(_this, model);
        _this._initEditingProperties();
        _this._disposables.push(_this.value = ko.computed(function () {
            var expressionValue = (_this.expression_Prefix + _this._expression.value());
            var editingValue = _this._editingValue();
            return _this.isExpression.peek() ? expressionValue : editingValue;
        }));
        return _this;
    }
    JsonParameter.from = function (model, serializer) {
        return new JsonParameter(model || {}, serializer);
    };
    JsonParameter.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    JsonParameter.prototype._initEditingProperties = function () {
        var currentValue = this.value() || '';
        if (currentValue.indexOf(this.expression_Prefix) === 0) {
            this.isExpression(true);
            this._expression.value(currentValue.substring(this.expression_Prefix.length));
        }
        else {
            this._editingValue(currentValue);
        }
    };
    JsonParameter.prototype.switchEditors = function () {
        var newIsExpression = !this.isExpression();
        this.isExpression(newIsExpression);
        if (newIsExpression) {
            this._expression.value(this._editingValue() ? "'" + this._editingValue() + "'" : '');
        }
        else {
            this._editingValue('');
        }
    };
    JsonParameter.prototype.getInfo = function () {
        return [
            { propertyName: 'name', modelName: '@Name', displayName: 'Name', editor: editorsInfo_1.editorTemplates.getEditor('text') },
            { propertyName: 'value', modelName: '@Value', displayName: 'Value', editor: editorsInfo_1.editorTemplates.getEditor('text') },
            { propertyName: 'itemType', modelName: '@ItemType', defaultVal: JsonParameterType[JsonParameterType.PathParameter], alwaysSerialize: true }
        ];
    };
    return JsonParameter;
}(utils_1.Disposable));
exports.JsonParameter = JsonParameter;
var parameterTypes = [
    { value: JsonParameterType[JsonParameterType.PathParameter], displayValue: 'Path Parameter', localizationId: 'AnalyticsCoreStringId.JsonDSWizard_ChooseJsonSourcePage_PathParameter' },
    { value: JsonParameterType[JsonParameterType.QueryParameter], displayValue: 'Query Parameter', localizationId: 'AnalyticsCoreStringId.JsonDSWizard_ChooseJsonSourcePage_QueryParameter' },
    { value: JsonParameterType[JsonParameterType.Header], displayValue: 'Header', localizationId: 'AnalyticsCoreStringId.JsonDSWizard_ChooseJsonSourcePage_Header' }
];


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sqlDataConnection_1 = __webpack_require__(114);
var resultSet_1 = __webpack_require__(71);
var utils_1 = __webpack_require__(1);
var utils_2 = __webpack_require__(9);
var customSqlQuery_1 = __webpack_require__(32);
var tableQuery_1 = __webpack_require__(34);
var storedProcQuery_1 = __webpack_require__(35);
var serializer_1 = __webpack_require__(1);
var requestwrapper_1 = __webpack_require__(8);
var masterDetailRelation_1 = __webpack_require__(51);
var connectionOptions_1 = __webpack_require__(110);
var dbSchemaProvider_1 = __webpack_require__(68);
var _utils_1 = __webpack_require__(0);
var sqlDataSourceSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'connection', modelName: 'Connection', from: sqlDataConnection_1.SqlDataConnection.from, toJsonObject: sqlDataConnection_1.SqlDataConnection.toJson },
    { propertyName: 'queries', modelName: 'Queries', array: true },
    { propertyName: 'relations', modelName: 'Relations', array: true },
    { propertyName: 'resultSet', modelName: 'ResultSchema', from: resultSet_1.ResultSet.from, toJsonObject: resultSet_1.ResultSet.toJson },
    { propertyName: 'itemType', modelName: '@ItemType' }
];
var SqlDataSource = (function (_super) {
    __extends(SqlDataSource, _super);
    function SqlDataSource(model, serializer, requestWrapper) {
        if (requestWrapper === void 0) { requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this) || this;
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(_this, _utils_1.extend(model, { '@ItemType': 'SqlDataSource' }));
        var deprecateName = _this['_model']['Name'];
        if (deprecateName) {
            if (!_this.name()) {
                _this.name(deprecateName);
            }
            delete _this['_model']['Name'];
        }
        _this.queries = utils_1.deserializeArray(model['Queries'], function (item) {
            return _this.createQuery(item, serializer);
        });
        _this.relations = utils_1.deserializeArray(model['Relations'], function (item) {
            return new masterDetailRelation_1.MasterDetailRelation(item, serializer);
        });
        if (_this.connection && model['ConnectionOptions'])
            _this.connection.options = new connectionOptions_1.ConnectionOptions(model['ConnectionOptions'], serializer);
        _this.dbSchemaProvider = new dbSchemaProvider_1.DBSchemaProvider(_this.connection, requestWrapper);
        _this._disposables.push(_this.connection.name.subscribe(function () {
            _this.queries([]);
            _this.relations([]);
            _this.resultSet = null;
        }));
        return _this;
    }
    SqlDataSource.prototype.getInfo = function () {
        return sqlDataSourceSerializationInfo;
    };
    SqlDataSource.prototype.createQuery = function (item, serializer) {
        if (item['@Type'] === utils_2.SqlQueryType.customSqlQuery) {
            return new customSqlQuery_1.CustomSqlQuery(item, this, serializer);
        }
        else if (item['@Type'] === utils_2.SqlQueryType.tableQuery) {
            return new tableQuery_1.TableQuery(item, this, serializer);
        }
        else if (item['@Type'] === utils_2.SqlQueryType.storedProcQuery) {
            return new storedProcQuery_1.StoredProcQuery(item, this, serializer);
        }
        else {
            throw new Error('Unknown sql query type.');
        }
    };
    return SqlDataSource;
}(utils_1.Disposable));
exports.SqlDataSource = SqlDataSource;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _arrayutils_1 = __webpack_require__(0);
var _getNameHelpers_1 = __webpack_require__(0);
function generateQueryUniqueName(queries, query) {
    var name = (query.name() || query.generateName()).replace('.', '_');
    return _arrayutils_1.findFirstItemMatchesCondition(queries, function (item) { return item.name() === name; }) ?
        _getNameHelpers_1.getUniqueNameForNamedObjectsArray(queries, name + '_') : name;
}
exports.generateQueryUniqueName = generateQueryUniqueName;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = __webpack_require__(0);
var StateManager = (function () {
    function StateManager(globalState, pageFactory) {
        this.globalState = globalState;
        this.pageFactory = pageFactory;
        this.defaultState = _utils_1.extend(true, {}, globalState);
    }
    StateManager.prototype._getPageState = function (pageId, state) {
        if (state === void 0) { state = this.globalState; }
        return this.pageFactory.getMetadata(pageId).getState(state);
    };
    StateManager.prototype.setPageState = function (pageId, data) {
        this.pageFactory.getMetadata(pageId).setState(data, this.getPageState(pageId));
    };
    StateManager.prototype.getPageState = function (pageId) {
        return this._getPageState(pageId);
    };
    StateManager.prototype.resetPageState = function (pageId) {
        var defaultState = _utils_1.extend(true, {}, this._getPageState(pageId, this.defaultState));
        this.pageFactory.getMetadata(pageId).resetState(this.getPageState(pageId), defaultState);
    };
    StateManager.prototype.getCurrentState = function () {
        return this.globalState;
    };
    StateManager.prototype.reset = function () {
        this.globalState.reset();
    };
    return StateManager;
}());
exports.StateManager = StateManager;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(1);
var storedProcQuery_1 = __webpack_require__(35);
var dbStoredProcedure_1 = __webpack_require__(69);
var _arrayutils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var dataSourceParameter_1 = __webpack_require__(11);
var dbColumn_1 = __webpack_require__(18);
var dataSourceParameterMeta_1 = __webpack_require__(33);
var StoredProceduresQueryControl = (function (_super) {
    __extends(StoredProceduresQueryControl, _super);
    function StoredProceduresQueryControl() {
        var _this = _super.call(this) || this;
        _this.template = 'dxrd-procedures-control';
        _this.storedProcedures = ko.observableArray([]);
        _this.selectedProcedure = ko.observableArray([]);
        _this.caption = function () { return localization_utils_1.getLocalization('Select a stored procedure:', 'DataAccessUIStringId.StoredProcControl_Caption'); };
        _this.generateStoredProcedureDisplayName = function (procedure) { return StoredProceduresQueryControl.generateStoredProcedureDisplayName(procedure); };
        _this.isNextDisabled = ko.pureComputed(function () {
            return !_this._selectedProcedure || !_this._needToProcessParameters(_this._selectedProcedure);
        });
        _this.isFinishDisabled = ko.pureComputed(function () {
            return !_this._selectedProcedure || _this._needToProcessParameters(_this._selectedProcedure);
        });
        _this.storedProcedures.subscribe(function (newProcedures) {
            if (!newProcedures) {
                _this._selectedProcedure = null;
            }
            else if (_this._selectedProcedure) {
                _this._selectedProcedure = _arrayutils_1.getFirstItemByPropertyValue(_this.storedProcedures(), 'name', _this._selectedProcedure.name);
            }
            else if (_this._query && _this._query.procName()) {
                _this._selectedProcedure = _arrayutils_1.getFirstItemByPropertyValue(_this.storedProcedures(), 'name', _this._query.procName());
            }
            else {
                _this._selectedProcedure = newProcedures[0];
            }
        });
        return _this;
    }
    StoredProceduresQueryControl.prototype._needToProcessParameters = function (procedure) {
        return procedure.arguments.some(StoredProceduresQueryControl._availableConvertToParameter);
    };
    StoredProceduresQueryControl._availableConvertToParameter = function (arg) {
        return arg.direction !== dbStoredProcedure_1.DBStoredProcedureArgumentDirection.Out;
    };
    Object.defineProperty(StoredProceduresQueryControl.prototype, "_selectedProcedure", {
        get: function () {
            return this.selectedProcedure()[0];
        },
        set: function (value) {
            this.selectedProcedure(value ? [value] : []);
        },
        enumerable: true,
        configurable: true
    });
    StoredProceduresQueryControl.prototype.scrollActiveItem = function (e) {
        var model = e.model;
        var procedure = model.selectedProcedure.peek();
        e.component.scrollToItem(procedure[0]);
    };
    StoredProceduresQueryControl.generateStoredProcedureDisplayName = function (procedure) {
        if (procedure.arguments.length === 0)
            return procedure.name;
        return procedure.arguments.reduce(function (value, item, index, array) {
            return value += item.name + (index < array.length - 1 ? ', ' : ')');
        }, procedure.name + '(');
    };
    StoredProceduresQueryControl.prototype.setQuery = function (query) {
        this._query = query;
        this._selectedProcedure = _arrayutils_1.getFirstItemByPropertyValue(this.storedProcedures(), 'name', query.procName());
        return $.Deferred().resolve().promise();
    };
    StoredProceduresQueryControl.prototype.getQuery = function () {
        var _this = this;
        if (!this._selectedProcedure)
            return null;
        var newQuery = new storedProcQuery_1.StoredProcQuery({ '@Name': this._query.name() || this._selectedProcedure.name, 'ProcName': this._selectedProcedure.name }, this._query.parent);
        this._selectedProcedure.arguments.forEach(function (arg) {
            if (StoredProceduresQueryControl._availableConvertToParameter(arg)) {
                newQuery.parameters.push(_arrayutils_1.getFirstItemByPropertyValue(_this._query.parameters(), 'name', arg.name) || new dataSourceParameter_1.DataSourceParameter({ '@Name': arg.name, '@Type': dbColumn_1.DBColumn.GetType(arg.type) }, null, dataSourceParameterMeta_1.storedProcParameterSerializationsInfo(dbColumn_1.DBColumn.GetType(arg.type))));
            }
        });
        return newQuery;
    };
    Object.defineProperty(StoredProceduresQueryControl.prototype, "runQueryBuilderDisabled", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return StoredProceduresQueryControl;
}(utils_1.Disposable));
exports.StoredProceduresQueryControl = StoredProceduresQueryControl;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = __webpack_require__(1);
var _infoMessageHelpers_1 = __webpack_require__(0);
var SelectQuerySqlTextProvider = (function () {
    function SelectQuerySqlTextProvider(_selectStatementCallback, _connection) {
        this._selectStatementCallback = _selectStatementCallback;
        this._connection = _connection;
    }
    SelectQuerySqlTextProvider.prototype.getQuerySqlText = function (newQuery) {
        var queryJSON = JSON.stringify({ 'Query': new serializer_1.ModelSerializer().serialize(newQuery) });
        return this._selectStatementCallback(this._connection(), queryJSON)
            .fail(function (data) {
            var error = _infoMessageHelpers_1.getErrorMessage(data);
            _infoMessageHelpers_1.ShowMessage('Unable to build a SQL string' + (error ? ': ' + error : '.'));
        });
    };
    return SelectQuerySqlTextProvider;
}());
exports.SelectQuerySqlTextProvider = SelectQuerySqlTextProvider;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var _arrayutils_1 = __webpack_require__(0);
var tableQuery_1 = __webpack_require__(34);
var serializer_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var QueryBuilderPopup = (function () {
    function QueryBuilderPopup(applyNewQuery, rtl, customizeQBInitializationData) {
        if (rtl === void 0) { rtl = false; }
        if (customizeQBInitializationData === void 0) { customizeQBInitializationData = function (options) { return options; }; }
        var _this = this;
        this.customizeQBInitializationData = customizeQBInitializationData;
        this._query = ko.observable(null);
        this._dbSchemaProvider = ko.observable(null);
        this.designer = ko.observable();
        this.qbOptions = ko.observable(null);
        this.okButtonDisabled = ko.pureComputed(function () { return _this.designer() && !_this.designer().model().isValid(); });
        this.isVisible = ko.observable(false);
        this.showLoadIndicator = ko.observable(false);
        this.localizationIdMap = {
            'title': { text: 'Query Builder', localizationId: 'DataAccessUIStringId.QueryBuilder' },
            'loading': { text: 'Loading...', localizationId: 'AnalyticsCoreStringId.Loading' },
            'previewResults': { text: 'Preview Results...', localizationId: 'DataAccessUIStringId.QueryBuilderButtons_PreviewResults' },
            'cancel': { text: 'Cancel', localizationId: 'AnalyticsCoreStringId.SearchDialog_Cancel' },
            'ok': { text: 'OK', localizationId: 'DataAccessUIStringId.Button_OK' }
        };
        this._applyQuery = applyNewQuery;
        this._rtl = rtl;
    }
    QueryBuilderPopup.prototype.show = function (query, dataSource) {
        this._dataSource = dataSource;
        this._dbSchemaProvider(dataSource.dbSchemaProvider);
        this._query(new serializer_1.ModelSerializer().serialize(query));
        this.qbOptions(this.qbOptions() || this.customizeQBInitializationData({
            queryBuilderModel: this.designer,
            querySource: this._query,
            dbSchemaProvider: this._dbSchemaProvider,
            callbacks: { customizeActions: QueryBuilderPopup.customizeQueryBuilderActions },
            rtl: this._rtl
        }));
        this.isVisible(true);
        this.designer().updateSurface();
    };
    QueryBuilderPopup.prototype.cancelHandler = function () {
        this.isVisible(false);
    };
    QueryBuilderPopup.prototype.previewHandler = function () {
        this.designer().showPreview();
    };
    QueryBuilderPopup.prototype.okHandler = function () {
        var _this = this;
        if (this.designer().model().canSave()) {
            this._applyQuery(new tableQuery_1.TableQuery(this.designer().model().serialize(), this._dataSource), this.showLoadIndicator)
                .done(function () {
                _this.isVisible(false);
            });
        }
    };
    QueryBuilderPopup.prototype.onHiddenHandler = function () {
        this.designer().dataPreview.isVisible(false);
    };
    QueryBuilderPopup.prototype.popupViewModel = function (element) {
        var $container = _utils_1.getParentContainer(element);
        return {
            visible: this.isVisible,
            title: this.getDisplayText('title'),
            showTitle: true,
            shading: true,
            fullScreen: false,
            width: '95%',
            height: '95%',
            container: $container,
            wrapperAttr: { class: 'dxrd-querybuilder-popup' },
            position: { of: $container },
            onHidden: this.onHiddenHandler
        };
    };
    QueryBuilderPopup.prototype.getDisplayText = function (key) {
        return localization_utils_1.getLocalization(this.localizationIdMap[key].text, this.localizationIdMap[key].localizationId);
    };
    QueryBuilderPopup.customizeQueryBuilderActions = function (actions) {
        var del = _arrayutils_1.findFirstItemMatchesCondition(actions, function (action) { return action.text === 'Delete'; }), undo = _arrayutils_1.findFirstItemMatchesCondition(actions, function (action) { return action.text === 'Undo'; }), redo = _arrayutils_1.findFirstItemMatchesCondition(actions, function (action) { return action.text === 'Redo'; });
        actions.splice(0, actions.length, del, undo, redo);
    };
    return QueryBuilderPopup;
}());
exports.QueryBuilderPopup = QueryBuilderPopup;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var objectDataSource_1 = __webpack_require__(23);
var _chooseObjectParameters_1 = __webpack_require__(81);
var pageId_1 = __webpack_require__(5);
var localization_utils_1 = __webpack_require__(1);
var ConfigureObjectDataSourceParametersPage = (function (_super) {
    __extends(ConfigureObjectDataSourceParametersPage, _super);
    function ConfigureObjectDataSourceParametersPage(itemsProvider) {
        var _this = _super.call(this) || this;
        _this._objectDataSource = new objectDataSource_1.ObjectDataSource();
        _this._disposables.push(_this._chooseObjectParameters = new _chooseObjectParameters_1.ChooseObjectMemberParameters(itemsProvider));
        return _this;
    }
    ConfigureObjectDataSourceParametersPage.prototype.canNext = function () {
        return false;
    };
    ConfigureObjectDataSourceParametersPage.prototype.canFinish = function () {
        return true;
    };
    ConfigureObjectDataSourceParametersPage.prototype.commit = function () {
        return $.Deferred().resolve({
            selectedType: this._objectDataSource.selectedType,
            ctor: this._objectDataSource.ctor,
            dataMember: this._objectDataSource.dataMember,
            dataSourceName: this._objectDataSource.name(),
        }).promise();
    };
    ConfigureObjectDataSourceParametersPage.prototype.initialize = function (state) {
        this._objectDataSource.setState(state);
        this._chooseObjectParameters.updateCtorParameters(this._objectDataSource.ctor);
        this._chooseObjectParameters.updateMethodParameters(this._objectDataSource.dataMember);
        return $.Deferred().resolve().promise();
    };
    return ConfigureObjectDataSourceParametersPage;
}(wizardPage_1.WizardPageBase));
exports.ConfigureObjectDataSourceParametersPage = ConfigureObjectDataSourceParametersPage;
function _registerConfigureObjectDataSourceParametersPage(factory, getItemsProviderCallback) {
    factory.registerMetadata(pageId_1.ObjectDataSourceWizardPageId.ConfigureParametersPage, {
        setState: function (data, state) {
            state.ctor = data.ctor;
            state.dataMember = data.dataMember;
            state.selectedType = data.selectedType;
        },
        getState: function (state) {
            return state.objectDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.dataMember = defaultState.dataMember;
        },
        create: function () {
            return new ConfigureObjectDataSourceParametersPage(getItemsProviderCallback && getItemsProviderCallback());
        },
        description: localization_utils_1.getLocalization('Configure constructor parameters and/or method parameters.', 'AnalyticsCoreStringId.ObjectDSWizard_ConfigureParameters_Description'),
        template: 'dx-objectdatasource-configureparameters-page'
    });
}
exports._registerConfigureObjectDataSourceParametersPage = _registerConfigureObjectDataSourceParametersPage;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var _editorTypeMapper_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(0);
var dataSourceParameter_1 = __webpack_require__(11);
var serializer_1 = __webpack_require__(1);
var propertygrid_1 = __webpack_require__(6);
var ObjectDataSourceParameterProperty = (function (_super) {
    __extends(ObjectDataSourceParameterProperty, _super);
    function ObjectDataSourceParameterProperty(_parameter, _itemsProvider) {
        var _this = _super.call(this) || this;
        _this._parameter = _parameter;
        _this._itemsProvider = _itemsProvider;
        _this.type = ko.observable('');
        _this.type(_this._parameter.type);
        var typeValue = dataSourceParameter_1.DataSourceParameter._getTypeValue(_this._parameter.resultType);
        _this._initGetInfo(typeValue);
        new serializer_1.ModelSerializer().deserialize(_this, {});
        _this._subscribeProperties();
        return _this;
    }
    ObjectDataSourceParameterProperty.prototype.switchPropertyType = function () {
        if (this.isExpression()) {
            this.type(this._parameter.resultType);
            this._parameter.value = this.value();
        }
        else {
            this.type(_editorTypeMapper_1.ExpressionType);
            this._parameter.value = this.expression.value();
        }
    };
    ObjectDataSourceParameterProperty.prototype.isExpression = function () {
        return _editorTypeMapper_1.IsDataAccessExpression(this.type());
    };
    ObjectDataSourceParameterProperty.prototype._generateInfo = function (info, propertyName) {
        if (propertyName === void 0) { propertyName = 'value'; }
        return _utils_1.extend({}, {
            displayName: this._parameter.displayName,
            propertyName: propertyName,
            modelName: propertyName,
            editorOptions: {}
        }, info);
    };
    ObjectDataSourceParameterProperty.prototype._initGetInfo = function (typeValue) {
        var _this = this;
        var info = [
            this._generateInfo({
                editor: _editorTypeMapper_1.getEditorType(this._parameter.resultType),
                from: function (val) { return ko.observable((typeValue.valueConverter || (function (val) { return val; }))(val)); },
                defaultVal: !this.isExpression() && this._parameter.value || typeValue.defaultValue
            }),
            this._generateInfo({
                editor: { header: 'dx-objectdatasource-expression-popup' },
                from: function (val) {
                    return { value: ko.observable(val), itemsProvider: _this._itemsProvider };
                },
                defaultVal: this.isExpression() && this._parameter.value || ''
            }, 'expression')
        ];
        this._disposables.push({ dispose: function () { return _this.getInfo = undefined; } });
        this.getInfo = function () { return info; };
    };
    ObjectDataSourceParameterProperty.prototype._subscribeProperties = function () {
        var _this = this;
        this._disposables.push(this.type.subscribe(function (newVal) {
            _this._parameter.type = newVal;
        }), this.expression.value.subscribe(function (newVal) {
            _this.isExpression() && (_this._parameter.value = newVal);
        }), this.value.subscribe(function (newVal) {
            !_this.isExpression() && (_this._parameter.value = newVal);
        }));
    };
    ObjectDataSourceParameterProperty.prototype.isPropertyVisible = function (propertyName) {
        return this.isExpression() ? propertyName === 'expression' : propertyName === 'value';
    };
    return ObjectDataSourceParameterProperty;
}(utils_1.Disposable));
exports.ObjectDataSourceParameterProperty = ObjectDataSourceParameterProperty;
var ObjectDataSourceParameterEditorAddon = (function () {
    function ObjectDataSourceParameterEditorAddon(_editor) {
        this._editor = _editor;
        this.imageTemplateName = 'dx-objectdatasource-expression';
    }
    ObjectDataSourceParameterEditorAddon.prototype._doWithModel = function (action) {
        var model = this._editor._model();
        if (model instanceof ObjectDataSourceParameterProperty) {
            return action(model);
        }
    };
    ObjectDataSourceParameterEditorAddon.prototype.switchEditors = function () {
        this._doWithModel(function (model) { return model.switchPropertyType(); });
    };
    ObjectDataSourceParameterEditorAddon.prototype.isExpression = function () {
        return this._doWithModel(function (model) { return model.isExpression(); });
    };
    return ObjectDataSourceParameterEditorAddon;
}());
var ObjectDataSourceParameterGrid = (function (_super) {
    __extends(ObjectDataSourceParameterGrid, _super);
    function ObjectDataSourceParameterGrid(x) {
        var _this = _super.call(this, ko.observable(x)) || this;
        _this.createEditorAddOn = function (editor) {
            var addon = new ObjectDataSourceParameterEditorAddon(editor);
            return {
                data: addon,
                templateName: 'dx-wizard-menu-box-editorswitch'
            };
        };
        return _this;
    }
    return ObjectDataSourceParameterGrid;
}(propertygrid_1.ObjectProperties));
var ObjectDataSourceParametersModel = (function (_super) {
    __extends(ObjectDataSourceParametersModel, _super);
    function ObjectDataSourceParametersModel(parametersMethod, itemsProvider) {
        var _this = _super.call(this) || this;
        _this.displayName = parametersMethod.displayName;
        _this._grids = parametersMethod.parameters.map(function (x) {
            var param = new ObjectDataSourceParameterProperty(x, itemsProvider);
            var grid = new ObjectDataSourceParameterGrid(param);
            _this._disposables.push(param);
            _this._disposables.push(grid);
            return grid;
        });
        return _this;
    }
    return ObjectDataSourceParametersModel;
}(utils_1.Disposable));
exports.ObjectDataSourceParametersModel = ObjectDataSourceParametersModel;
var ChooseObjectMemberParameters = (function (_super) {
    __extends(ChooseObjectMemberParameters, _super);
    function ChooseObjectMemberParameters(_itemsProvider) {
        var _this = _super.call(this) || this;
        _this._itemsProvider = _itemsProvider;
        _this._ctorParametersObject = ko.observable();
        _this._dataMemberParametersObject = ko.observable();
        _this.hasParameters = function () {
            return _this._dataMemberParametersObject() || _this._ctorParametersObject();
        };
        return _this;
    }
    ChooseObjectMemberParameters.prototype._updateParameters = function (propertyName, method) {
        this[propertyName]() && this[propertyName]().dispose();
        if (method && method.parameters.length > 0)
            this[propertyName](new ObjectDataSourceParametersModel(method, this._itemsProvider));
        else
            this[propertyName](null);
    };
    ChooseObjectMemberParameters.prototype.updateCtorParameters = function (method) {
        this._updateParameters('_ctorParametersObject', method);
    };
    ChooseObjectMemberParameters.prototype.updateMethodParameters = function (method) {
        this._updateParameters('_dataMemberParametersObject', method);
    };
    return ChooseObjectMemberParameters;
}(utils_1.Disposable));
exports.ChooseObjectMemberParameters = ChooseObjectMemberParameters;
var ChooseObjectParameters = (function (_super) {
    __extends(ChooseObjectParameters, _super);
    function ChooseObjectParameters(selectedCtor, selectedDataMembers, itemsProvider) {
        var _this = _super.call(this, itemsProvider) || this;
        _this._disposables.push(selectedCtor.subscribe(function (ctor) {
            _this.updateCtorParameters(ctor);
        }));
        _this._disposables.push(selectedDataMembers.subscribe(function (a) {
            _this.updateMethodParameters(a[0]);
        }));
        return _this;
    }
    return ChooseObjectParameters;
}(ChooseObjectMemberParameters));
exports.ChooseObjectParameters = ChooseObjectParameters;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var objectSchema_1 = __webpack_require__(52);
var _dbSchema_1 = __webpack_require__(19);
var requestwrapper_1 = __webpack_require__(8);
var _infoMessageHelpers_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(1);
var _utils_2 = __webpack_require__(0);
var ObjectTypeDescriptions = (function () {
    function ObjectTypeDescriptions(model) {
        var types = _dbSchema_1.deserializeToCollection(model, function (key) { return new objectSchema_1.ObjectType(key); });
        this.types = types.sort(function (a, b) { return a.displayName.localeCompare(b.displayName); });
    }
    return ObjectTypeDescriptions;
}());
exports.ObjectTypeDescriptions = ObjectTypeDescriptions;
function getObjectTypeDescriptionsCallback(requestWrapper, context) {
    var deferred = $.Deferred();
    requestWrapper.getObjectTypeDescriptions(context)
        .done(function (data) {
        try {
            var objectTypeDescriptionsModel = new ObjectTypeDescriptions(data.objectDataSourceInfoJson);
            deferred.resolve(objectTypeDescriptionsModel);
        }
        finally {
            if (deferred.state() === 'pending')
                deferred.reject();
        }
    })
        .fail(function (data) {
        _infoMessageHelpers_1.ShowMessage(_utils_1.formatUnicorn(localization_utils_1.getLocalization('Schema loading failed. {0}', 'DxDesignerStringId.Error_SchemaLoadingFailed'), _infoMessageHelpers_1.getErrorMessage(data)));
        deferred.reject();
    });
    return deferred.promise();
}
exports.getObjectTypeDescriptionsCallback = getObjectTypeDescriptionsCallback;
var ObjectSchemaProvider = (function (_super) {
    __extends(ObjectSchemaProvider, _super);
    function ObjectSchemaProvider(_requestWrapper) {
        if (_requestWrapper === void 0) { _requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this) || this;
        _this._requestWrapper = _requestWrapper;
        _this.getItems = function (pathRequest) {
            var getItemsDeferred = $.Deferred();
            var loadSchemaPromise = _this.getObjectTypeDescriptions();
            loadSchemaPromise
                .done(function (objectSchema) {
                getItemsDeferred.resolve(_this.getSchemaByPath(pathRequest, objectSchema));
            })
                .fail(getItemsDeferred.reject);
            return getItemsDeferred.promise();
        };
        return _this;
    }
    ObjectSchemaProvider.prototype.dispose = function () {
        this._objectTypeDescriptionsPromise = null;
    };
    ObjectSchemaProvider.prototype.getSchemaByPath = function (pathRequest, objectSchema) {
        if (!pathRequest.fullPath) {
            return objectSchema.types.map(function (type) { return _utils_2.extend({}, type, { isList: true, specifics: 'List' }); });
        }
        else {
            var currentCtros = [];
            for (var i = 0; i < pathRequest.pathParts.length; i++) {
                var pathPart = (objectSchema.types || []).filter(function (type) { return type.name == pathRequest.pathParts[i]; })[0];
                if (!pathPart)
                    return [];
                currentCtros = pathPart.ctors;
            }
            return currentCtros.map(function (ctor) { return _utils_2.extend({}, ctor, { isList: false, specifics: 'default' }); });
        }
    };
    ObjectSchemaProvider.prototype.getObjectTypeDescriptions = function (context) {
        if (context === void 0) { context = ''; }
        if (!this._objectTypeDescriptionsPromise || this._objectTypeDescriptionsPromise.state() === 'rejected')
            this._objectTypeDescriptionsPromise = getObjectTypeDescriptionsCallback(this._requestWrapper, context);
        return this._objectTypeDescriptionsPromise;
    };
    return ObjectSchemaProvider;
}(utils_1.Disposable));
exports.ObjectSchemaProvider = ObjectSchemaProvider;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var _treelistController_1 = __webpack_require__(10);
var utils_1 = __webpack_require__(1);
var ChooseObjectTypesTreelistController = (function (_super) {
    __extends(ChooseObjectTypesTreelistController, _super);
    function ChooseObjectTypesTreelistController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseObjectTypesTreelistController.prototype.canSelect = function (value) {
        return true;
    };
    return ChooseObjectTypesTreelistController;
}(_treelistController_1.TreeListController));
exports.ChooseObjectTypesTreelistController = ChooseObjectTypesTreelistController;
var ChooseObjectTypes = (function (_super) {
    __extends(ChooseObjectTypes, _super);
    function ChooseObjectTypes(types, provider) {
        var _this = _super.call(this) || this;
        _this.types = types;
        _this.selectedType = ko.observable();
        _this.selectedCtor = ko.observable();
        _this.selectedPath = ko.observable('');
        _this._scrollViewHeight = 'calc(100% - 36px)';
        _this.availableTypesTreelistModel = {
            expandRootItems: true,
            itemsProvider: provider,
            selectedPath: _this.selectedPath,
            treeListController: new ChooseObjectTypesTreelistController()
        };
        _this._disposables.push(_this.availableTypesTreelistModel.selectedPath.subscribe(function (newValue) {
            types().forEach(function (type) {
                if (type.name == newValue) {
                    _this.selectedType(type);
                    if (_this.selectedCtor() == null)
                        _this.selectedCtor.valueHasMutated();
                    else
                        _this.selectedCtor(null);
                }
                else {
                    type.ctors.forEach(function (ctor) {
                        if (type.name.concat('.').concat(ctor.name) == newValue) {
                            _this.selectedType(type);
                            _this.selectedCtor(ctor);
                        }
                    });
                }
            });
        }));
        return _this;
    }
    return ChooseObjectTypes;
}(utils_1.Disposable));
exports.ChooseObjectTypes = ChooseObjectTypes;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var ChooseObjectDataMembers = (function (_super) {
    __extends(ChooseObjectDataMembers, _super);
    function ChooseObjectDataMembers(type, ctor) {
        var _this = _super.call(this) || this;
        _this.dataMembers = ko.observableArray([]);
        _this.selectedDataMembers = ko.observableArray([]);
        var oldType = type() && type().name;
        _this._disposables.push(ctor.subscribe(function (newVal) {
            type().updateMembers(newVal);
            if (oldType != type().name) {
                _this.dataMembers(type().members);
                _this.selectedDataMembers([]);
                oldType = type().name;
            }
            _this.coerceSelection();
        }));
        return _this;
    }
    ChooseObjectDataMembers.prototype.coerceSelection = function () {
        var selectedMember = this.selectedDataMembers()[0];
        var bestItem = selectedMember && selectedMember.isAvailable() ? selectedMember : this.dataMembers().filter(function (a) { return a.isAvailable(); })[0];
        this.selectedDataMembers([bestItem]);
    };
    return ChooseObjectDataMembers;
}(utils_1.Disposable));
exports.ChooseObjectDataMembers = ChooseObjectDataMembers;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var localization_utils_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var jsonSourceSettings_1 = __webpack_require__(126);
var propertygrid_1 = __webpack_require__(6);
var jsonDataSource_1 = __webpack_require__(50);
var _jsonDataSourceWidgets_1 = __webpack_require__(127);
var jsonAuthenticationInfo_1 = __webpack_require__(72);
var editorsInfo_1 = __webpack_require__(6);
var _getNameHelpers_1 = __webpack_require__(0);
var jsonParameter_1 = __webpack_require__(73);
var _utils_2 = __webpack_require__(13);
var _utils_3 = __webpack_require__(0);
function getLocalizedValidationErrorMessage(emptyValueErrorMessage, localizedPropertyName, subProperty) {
    var requiredMessageSuffix = emptyValueErrorMessage || localization_utils_1.getLocalization('The value cannot be empty', 'AnalyticsCoreStringId.ParametersPanel_DateTimeValueValidationError');
    if (!localizedPropertyName)
        return requiredMessageSuffix;
    var propertyNamesPrefix = !subProperty ? localizedPropertyName : _utils_1.formatUnicorn('{0}. {1}', localizedPropertyName, subProperty);
    if (!localization_utils_1._stringEndsWith(propertyNamesPrefix, ':'))
        propertyNamesPrefix += ':';
    return _utils_1.formatUnicorn('{0} {1}', propertyNamesPrefix, requiredMessageSuffix);
}
exports.getLocalizedValidationErrorMessage = getLocalizedValidationErrorMessage;
var JsonDataSourceJsonSourcePageSettingsBase = (function (_super) {
    __extends(JsonDataSourceJsonSourcePageSettingsBase, _super);
    function JsonDataSourceJsonSourcePageSettingsBase() {
        var _this = _super.call(this) || this;
        _this._validationGroup = null;
        _this._validationSummary = null;
        _this.validationGroup = {
            onInitialized: function (args) { return _this._onValidationGroupInitialized(args); },
            onDisposing: function (args) { return _this._onValidationGroupDisposing(args); },
            validate: function () { return _this._validate(); }
        };
        _this.validationSummary = {
            onInitialized: function (args) { return _this._onValidationSummaryInitialized(args); },
            onDisposing: function (args) { return _this._onValidationSummaryDisposing(args); }
        };
        _this._disposables.push(_this.grid = new propertygrid_1.ObjectProperties(ko.observable(_this)));
        return _this;
    }
    JsonDataSourceJsonSourcePageSettingsBase.prototype.dispose = function () {
        this._validationSummary && this._validationSummary.dispose();
        this._validationGroup && this._validationGroup.dispose();
        this._validationSummary = null;
        this._validationGroup = null;
        _super.prototype.dispose.call(this);
    };
    JsonDataSourceJsonSourcePageSettingsBase.prototype._onValidationGroupInitialized = function (args) {
        this._validationGroup = args.component;
    };
    JsonDataSourceJsonSourcePageSettingsBase.prototype._onValidationGroupDisposing = function (args) {
        this._validationGroup = null;
    };
    JsonDataSourceJsonSourcePageSettingsBase.prototype._onValidationSummaryInitialized = function (args) {
        this._validationSummary = args.component;
    };
    JsonDataSourceJsonSourcePageSettingsBase.prototype._onValidationSummaryDisposing = function (args) {
        this._validationSummary = null;
    };
    JsonDataSourceJsonSourcePageSettingsBase.prototype._repaintSummary = function () {
        this._validationSummary && this._validationSummary.repaint();
    };
    JsonDataSourceJsonSourcePageSettingsBase.prototype._validate = function () {
        this._validationSummary && this._validationGroup && this._validationGroup.validate();
    };
    return JsonDataSourceJsonSourcePageSettingsBase;
}(utils_1.Disposable));
exports.JsonDataSourceJsonSourcePageSettingsBase = JsonDataSourceJsonSourcePageSettingsBase;
var JsonDataSourceJsonSourcePageStringSettings = (function (_super) {
    __extends(JsonDataSourceJsonSourcePageStringSettings, _super);
    function JsonDataSourceJsonSourcePageStringSettings() {
        var _this = _super.call(this) || this;
        _this._validatorsReady = ko.observable(false);
        _this.isValid = ko.pureComputed(function () {
            var isJsonValid = _this._isJsonSourceValid(_this.stringSource());
            var aceHasErrors = _this.aceEditorHasErrors();
            return isJsonValid && !aceHasErrors;
        });
        _this.validationGroup = null;
        _this.validationSummary = null;
        _this.stringSource = ko.observable('');
        _this.aceEditorHasErrors = ko.observable(false);
        _this.cssClass = { 'dxrd-wizard-json-string-source-grid': true };
        _this._disposables.push(_this.grid = new propertygrid_1.ObjectProperties(ko.observable(_this)));
        return _this;
    }
    JsonDataSourceJsonSourcePageStringSettings.prototype.onChange = function (_onChange) {
        var _this = this;
        var timeoutId = null;
        var localOnChange = function () {
            _onChange();
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () { return _this._validate(); }, 1);
        };
        this._disposables.push(this.stringSource.subscribe(function (newVal) { return localOnChange(); }));
    };
    JsonDataSourceJsonSourcePageStringSettings.prototype._isJsonSourceValid = function (jsonString) {
        if (!jsonString)
            return false;
        var isJsonSourceValid = true;
        try {
            JSON.parse(jsonString);
        }
        catch (ex) {
            isJsonSourceValid = false;
        }
        return isJsonSourceValid;
    };
    JsonDataSourceJsonSourcePageStringSettings.prototype.isEmpty = function () {
        return !this.stringSource();
    };
    JsonDataSourceJsonSourcePageStringSettings.prototype.reset = function () {
        this.stringSource('');
    };
    JsonDataSourceJsonSourcePageStringSettings.prototype.setValue = function (dataSource) {
        this.stringSource(dataSource.source.json());
    };
    JsonDataSourceJsonSourcePageStringSettings.prototype.getInfo = function () {
        return [
            {
                propertyName: 'stringSource', defaultVal: '', displayName: 'JSON String', editor: {
                    header: 'dx-jsonwizard-jsonstring-editor', editorType: _jsonDataSourceWidgets_1.JsonStringEditor, custom: 'dx-property-json-string-editor'
                }
            }
        ];
    };
    JsonDataSourceJsonSourcePageStringSettings.prototype.applySettings = function (jsonDataSource) {
        jsonDataSource.source.uri(undefined);
        jsonDataSource.source.json(this.stringSource());
        jsonDataSource.source.authenticationInfo = new jsonAuthenticationInfo_1.JsonAuthenticationInfo({});
        jsonDataSource.source.headers([]);
        jsonDataSource.source.queryParameters([]);
        jsonDataSource.source.pathParameters([]);
    };
    return JsonDataSourceJsonSourcePageStringSettings;
}(JsonDataSourceJsonSourcePageSettingsBase));
exports.JsonDataSourceJsonSourcePageStringSettings = JsonDataSourceJsonSourcePageStringSettings;
var JsonDataSourceJsonSourcePageUriSettings = (function (_super) {
    __extends(JsonDataSourceJsonSourcePageUriSettings, _super);
    function JsonDataSourceJsonSourcePageUriSettings(_requestWrapper, _itemsProvider) {
        var _this = _super.call(this) || this;
        _this._requestWrapper = _requestWrapper;
        _this._itemsProvider = _itemsProvider;
        _this._isUriValid = ko.observable(false);
        _this._lastValidatedJsonSourceJSON = '';
        _this._authNameValidatorInstance = null;
        _this._isInitUri = true;
        _this._collectionItemNamePlaceholder = localization_utils_1.getLocalization('Name', 'AnalyticsCoreStringId.CollectionEditor_Name_Placeholder');
        _this._lastValidateDeferred = null;
        _this._sourceUriValidatorsReady = ko.observable(true);
        _this._basicAuthValidatorsReady = ko.observable(false);
        _this._validationRequested = ko.observable(false).extend({ deferred: true });
        _this._noEmptyProperties = ko.pureComputed(function () {
            var isBasicHttpAuthValid = _this._isBasicHttpAuthValid();
            var isParametersValid = _this._isParametersValid();
            var sourceUriNotEmpty = !!_this.sourceUri();
            return isBasicHttpAuthValid && isParametersValid && sourceUriNotEmpty;
        });
        _this._lastValidationMessage = ko.observable();
        _this._getSerializedUriSource = function (jsonDataSource) {
            if (jsonDataSource === void 0) { jsonDataSource = new jsonDataSource_1.JsonDataSource({}); }
            _this.applySettings(jsonDataSource);
            return JSON.stringify(jsonDataSource.source.serialize(true));
        };
        _this._sourceUriValidationCallback = function (params) {
            if (!_this.sourceUri()) {
                if (_this._isInitUri) {
                    _this._isInitUri = false;
                    return true;
                }
                params.rule.message = getLocalizedValidationErrorMessage(null, localization_utils_1.getLocalization('Web Service Endpoint (URI):', 'DataAccessUIStringId.WizardPageChooseJsonSource_URI'));
                return false;
            }
            var serverValidationResult = false;
            _this._isInitUri = false;
            var serializedJsonSource = _this._getSerializedUriSource();
            if (serializedJsonSource != _this._lastValidatedJsonSourceJSON) {
                if (!_this._lastValidationMessage())
                    _this._lastValidationMessage(localization_utils_1.getLocalization('Validation...', 'AnalyticsCoreStringId.Validation'));
                _this._validateUriSource().done(function (result) {
                    serverValidationResult = params.rule.isValid = result.isUriValid;
                    result.faultMessage && (params.rule.message = result.faultMessage);
                    _this._lastValidationMessage(serverValidationResult ? null : result.faultMessage);
                    params.validator.validate();
                    setTimeout(function () { return _this._repaintSummary(); }, 1);
                });
            }
            else {
                return !_this._lastValidationMessage();
            }
            return serverValidationResult;
        };
        _this.isValid = ko.pureComputed(function () {
            var isPropertiesNotEmpty = _this._noEmptyProperties();
            var isUriValid = _this._isUriValid();
            return isPropertiesNotEmpty && isUriValid;
        });
        _this._validatorsReady = ko.pureComputed({
            read: function () {
                var sourceUriValidatorReady = _this._sourceUriValidatorsReady();
                var authIsEmpty = !_this.basicHttpAuth.password() && !_this.basicHttpAuth.userName();
                var authInitialized = _this._basicAuthValidatorsReady();
                return sourceUriValidatorReady && (authInitialized || authIsEmpty);
            },
            write: function (newVal) {
                _this._basicAuthValidatorsReady(newVal);
            }
        });
        _this.sourceUri = ko.observable('');
        _this.basicHttpAuth = {
            password: ko.observable(''),
            userName: ko.observable(''),
        };
        _this.parameters = ko.observableArray([]);
        _this._disposables.push(_this.resultUri = ko.pureComputed(function () {
            return _this._getResultUri();
        }));
        _this._disposables.push(_this.grid = new propertygrid_1.ObjectProperties(ko.observable(_this)));
        _this._disposables.push(ko.computed(function () {
            var editorsInitialized = _this._validatorsReady();
            var validationRequested = _this._validationRequested();
            if (editorsInitialized && validationRequested) {
                _this._validate();
            }
        }));
        _this._disposables.push(_this._validatorsReady);
        return _this;
    }
    JsonDataSourceJsonSourcePageUriSettings.prototype._validateUriSource = function () {
        var _this = this;
        var defaultValidationErrorMessage = localization_utils_1.getLocalization('Invalid URI.', 'AnalyticsCoreStringId.ReportDesigner_Wizard_JsonSource_UriValidationError');
        var endpointUriDisplayName = localization_utils_1.getLocalization('Web Service Endpoint (URI):', 'DataAccessUIStringId.WizardPageChooseJsonSource_URI');
        this._isUriValid(false);
        if (this._lastValidateDeferred) {
            this._lastValidateDeferred.reject();
        }
        var resultDeferred = $.Deferred();
        this._lastValidateDeferred = resultDeferred;
        try {
            var jsonDataSource = new jsonDataSource_1.JsonDataSource({});
            var serializedJsonSource = this._getSerializedUriSource(jsonDataSource);
            this._lastValidatedJsonSourceJSON = serializedJsonSource;
            var validationResultHandler = function (data) {
                if (resultDeferred.state && resultDeferred.state() === 'rejected')
                    return;
                _this._isUriValid(data.isUriValid);
                var faultMessage = getLocalizedValidationErrorMessage((data.isUriValid ? '' : data && data.faultMessage) || defaultValidationErrorMessage, endpointUriDisplayName);
                resultDeferred.resolve({
                    isUriValid: data.isUriValid,
                    faultMessage: faultMessage
                });
            };
            this._requestWrapper.validateJsonUri(jsonDataSource)
                .done(validationResultHandler)
                .fail(function (data) {
                if (data === void 0) { data = {}; }
                data.isValid = false;
                validationResultHandler(data);
            });
        }
        catch (ex) {
            this._isUriValid(false);
        }
        return resultDeferred.promise();
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._isCollectionValid = function (collectionName) {
        return !this[collectionName]().length || this[collectionName]().every(function (x) { return x.name(); });
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._isParametersValid = function () {
        return this._isCollectionValid('parameters');
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._isBasicHttpAuthValid = function () {
        return !this.basicHttpAuth.password() || !!this.basicHttpAuth.userName();
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._getSourceUriInfo = function () {
        var _this = this;
        var sourceUri = {
            propertyName: 'sourceUri',
            displayName: 'Web Service Endpoint (URI):',
            localizationId: 'DataAccessUIStringId.WizardPageChooseJsonSource_URI',
            defaultVal: '',
            editor: editorsInfo_1.editorTemplates.getEditor('text'),
            validatorOptions: null,
            isRequired: true,
            editorOptions: {
                elementAttr: {
                    title: this.sourceUri
                }
            }
        };
        var _self = this;
        sourceUri.validatorOptions = {
            onInitialized: function (e) {
                _this._sourceUriValidatorsReady(true);
            },
            onDisposed: function () {
                _this._sourceUriValidatorsReady(false);
            },
            validationRules: [
                {
                    type: 'custom',
                    assignValueFirst: true,
                    isDeferred: ko.pureComputed(function () { return _this._noEmptyProperties(); }),
                    get message() {
                        return _self._lastValidationMessage();
                    },
                    validationCallback: this._sourceUriValidationCallback
                }
            ]
        };
        return sourceUri;
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._getBasicHttpAuthInfo = function () {
        var _this = this;
        var basicHttpAuthName = {
            propertyName: 'userName', displayName: 'Username:', localizationId: 'DataAccessUIStringId.WizardPageConfigureJsonConnection_UsernameText', editor: editorsInfo_1.editorTemplates.getEditor('text'),
            validatorOptions: undefined,
        };
        var basicHttpAuth = {
            propertyName: 'basicHttpAuth', displayName: 'Basic HTTP Authentication', localizationId: 'DataAccessUIStringId.WizardPageConfigureJsonConnection_BasicHttpAuthText', info: [
                basicHttpAuthName,
                _utils_3.createPasswordSerializationInfo({ propertyName: 'password', displayName: 'Password:', localizationId: 'DataAccessUIStringId.WizardPageConfigureJsonConnection_PasswordText' }, false),
            ], editor: editorsInfo_1.editorTemplates.getEditor('objecteditor')
        };
        var onValidatorInitialied = function (e) {
            var authNmeValidatorInstance = e && e.component;
            if (_this._authNameValidatorInstance && _this._authNameValidatorInstance != authNmeValidatorInstance) {
                _this._authNameValidatorInstance.dispose();
            }
            _this._authNameValidatorInstance = authNmeValidatorInstance;
            _this._basicAuthValidatorsReady(true);
        };
        var authNameValidatorDisposed = function () {
            _this._authNameValidatorInstance = null;
        };
        basicHttpAuthName.validatorOptions = {
            onInitialized: onValidatorInitialied,
            onDisposed: authNameValidatorDisposed,
            validationRules: [{
                    type: 'custom',
                    reevaluate: true,
                    assignValueFirst: true,
                    get message() {
                        return getLocalizedValidationErrorMessage(null, localization_utils_1.getLocalization(basicHttpAuth.displayName, basicHttpAuth.localizationId), localization_utils_1.getLocalization(basicHttpAuthName.displayName, basicHttpAuthName.localizationId));
                    },
                    validationCallback: function (params) {
                        return _this._isBasicHttpAuthValid();
                    }
                }]
        };
        return basicHttpAuth;
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._getParametersInfo = function () {
        var _this = this;
        var parameters = {
            propertyName: 'parameters', displayName: 'Parameters', localizationId: 'AnalyticsCoreStringId.QueryBuilder_Parameters',
            array: true,
            addHandler: function () {
                var newName = _getNameHelpers_1.getUniqueNameForNamedObjectsArray(_this.parameters(), 'parameter');
                return jsonParameter_1.JsonParameter.from({ '@Name': newName });
            },
            editor: editorsInfo_1.editorTemplates.getEditor('commonCollection'),
            editorOptions: null,
            template: '#dx-jsonwizard-parametercollection'
        };
        parameters.editorOptions = {
            itemsProvider: this._itemsProvider,
            nameValidationRules: [{
                    type: 'required',
                    get message() {
                        return getLocalizedValidationErrorMessage(null, localization_utils_1.getLocalization(parameters.displayName, parameters.localizationId), this._collectionItemNamePlaceholder);
                    }
                }]
        };
        return parameters;
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._getResultUriInfo = function () {
        var _resultUri = {
            propertyName: 'resultUri',
            displayName: 'Resulting URI:',
            localizationId: 'DataAccessUIStringId.WizardPageChooseJsonSource_ResultingUri',
            defaultVal: '',
            editor: editorsInfo_1.editorTemplates.getEditor('text'),
            editorOptions: {
                readOnly: true,
                elementAttr: {
                    title: this.resultUri
                }
            }
        };
        return _resultUri;
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._getResultUri = function () {
        if (!this.sourceUri() || !this._isUriValid() || !this._isParametersValid())
            return null;
        if (this.sourceUri() && this.parameters().length === 0)
            return this.sourceUri();
        var uriParts = this.sourceUri().split('?');
        var url = uriParts[0];
        var query = uriParts[1];
        url = this._appendPathSegmentsToUri(uriParts[0]);
        return this._appendQuerySegmentsToUri(url, query);
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._appendPathSegmentsToUri = function (uri) {
        var segments = this.parameters()
            .filter(function (p) { return p.itemType() === 'PathParameter'; })
            .map(function (p) { return '{' + p.name() + '}'; });
        segments.forEach(function (segment) {
            uri = uri.replace(/[\/]+$/g, '') + '/' + segment.replace(/^[\/]+/g, '');
        });
        return uri;
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._appendQuerySegmentsToUri = function (uri, originalQuery) {
        var separator = '';
        var uriArguments = originalQuery || '';
        var querySegments = this.parameters()
            .filter(function (p) { return p.itemType() === 'QueryParameter'; })
            .map(function (p) { return p.name() + '={?}'; });
        querySegments.forEach(function (q) {
            if (!!uriArguments)
                uriArguments += '&';
            uriArguments += q;
        });
        if (uriArguments.length > 0)
            uri += '?' + uriArguments;
        return uri;
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._onValidationSummaryInitialized = function (args) {
        var _this = this;
        _super.prototype._onValidationSummaryInitialized.call(this, args);
        this._isInitUri = true;
        setTimeout(function () {
            _this._validate();
        }, 1);
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._applyParametersToSource = function (jsonDataSource) {
        var parametersByType = this.parameters().reduce(function (result, parameter) {
            var _a;
            return (__assign({}, result, (_a = {}, _a[parameter.itemType()] = (result[parameter.itemType()] || []).concat([parameter]), _a)));
        }, {});
        ['PathParameter', 'QueryParameter', 'Header'].forEach(function (type) {
            if (parametersByType[type])
                jsonDataSource.source[jsonSourceSettings_1.parameterTypeToPropertyMap[type]](parametersByType[type]);
        });
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype.applySettings = function (jsonDataSource) {
        jsonDataSource.source.uri(this.sourceUri());
        jsonDataSource.source.json(undefined);
        jsonDataSource.source.authenticationInfo.password(this.basicHttpAuth.password());
        jsonDataSource.source.authenticationInfo.userName(this.basicHttpAuth.userName());
        this._applyParametersToSource(jsonDataSource);
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype.getInfo = function () {
        var sourceUri = this._getSourceUriInfo();
        var basicHttpAuth = this._getBasicHttpAuthInfo();
        var parameters = this._getParametersInfo();
        var resultUriInfo = this._getResultUriInfo();
        return [sourceUri, basicHttpAuth, parameters, resultUriInfo];
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype.reset = function () {
        this.sourceUri('');
        this.basicHttpAuth.password('');
        this.basicHttpAuth.userName('');
        this.parameters([]);
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype.setValue = function (dataSource) {
        this.sourceUri(dataSource.source.uri());
        this.basicHttpAuth.userName(dataSource.source.authenticationInfo.userName());
        this.basicHttpAuth.password(dataSource.source.authenticationInfo.password());
        var sourceParameters = [].concat.apply([], [dataSource.source.pathParameters(), dataSource.source.queryParameters(), dataSource.source.headers()]);
        this.parameters(sourceParameters);
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype.dispose = function () {
        this._authNameValidatorInstance && this._authNameValidatorInstance.dispose();
        if (this._lastValidateDeferred) {
            this._lastValidateDeferred.reject();
            this._lastValidateDeferred = null;
        }
        _super.prototype.dispose.call(this);
        this.disposeObservableArray(this.parameters);
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype.onChange = function (_onChange) {
        var _this = this;
        var _a;
        var timeoutId = null;
        var localOnChange = function () {
            _onChange();
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () { return _this._validate(); }, 1);
        };
        (_a = this._disposables).push.apply(_a, _utils_2.subscribeProperties([this.sourceUri, this.basicHttpAuth.password, this.basicHttpAuth.userName, this.resultUri], localOnChange));
        this._disposables.push(_utils_2.subscribeArray(this.parameters, function (item) {
            var _a;
            (_a = item._disposables).push.apply(_a, _utils_2.subscribeProperties([item.name, item.itemType, item.value], localOnChange));
        }, localOnChange));
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype.isEmpty = function () {
        return !this.sourceUri();
    };
    JsonDataSourceJsonSourcePageUriSettings.prototype._validate = function () {
        if (this._validationSummary && this._validationGroup) {
            if (this._validatorsReady()) {
                this._validationGroup.validate();
                this._validationRequested(false);
            }
            else {
                this._validationRequested(true);
            }
        }
    };
    return JsonDataSourceJsonSourcePageUriSettings;
}(JsonDataSourceJsonSourcePageSettingsBase));
exports.JsonDataSourceJsonSourcePageUriSettings = JsonDataSourceJsonSourcePageUriSettings;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var dataSourceWizardState_1 = __webpack_require__(12);
var _utils_1 = __webpack_require__(13);
var _dbSchemaItemsProvider_1 = __webpack_require__(131);
var tableQuery_1 = __webpack_require__(34);
var utils_1 = __webpack_require__(9);
var _selectQuerySqlTextProvider_1 = __webpack_require__(78);
var configureQueryPage_1 = __webpack_require__(24);
var pathRequest_1 = __webpack_require__(1);
var storedProcQuery_1 = __webpack_require__(35);
var dataSourceParameter_1 = __webpack_require__(11);
var dbColumn_1 = __webpack_require__(18);
var dataSourceParameterMeta_1 = __webpack_require__(33);
var _arrayutils_1 = __webpack_require__(0);
var _utils_2 = __webpack_require__(75);
var _requestwrapper_1 = __webpack_require__(16);
var _queryBuilderPopup_1 = __webpack_require__(79);
var wizard_1 = __webpack_require__(14);
var popupWizard_1 = __webpack_require__(42);
var customSqlQuery_1 = __webpack_require__(32);
var serializer_1 = __webpack_require__(1);
var _dbSchemaTreeListController_1 = __webpack_require__(132);
var localization_utils_1 = __webpack_require__(1);
var _options_1 = __webpack_require__(53);
var pageId_1 = __webpack_require__(5);
var _ace_available_1 = __webpack_require__(10);
var MultiQueryConfigurePage = (function (_super) {
    __extends(MultiQueryConfigurePage, _super);
    function MultiQueryConfigurePage(_options) {
        var _this = _super.call(this) || this;
        _this._options = _options;
        _this._selectedPath = ko.observable(null);
        _this._itemsProvider = ko.observable();
        _this._customQueries = ko.observableArray([]);
        _this._checkedQueries = ko.observableArray([]);
        _this._sqlDataSourceWrapper = new configureQueryPage_1._SqlDataSourceWrapper(undefined, undefined, undefined);
        _this._dataSource = function () {
            return _this._sqlDataSourceWrapper && _this._sqlDataSourceWrapper.sqlDataSource;
        };
        _this._dataConnection = function () {
            return _this._dataSource() && _this._dataSource().connection;
        };
        _this._showStatementPopup = function (query) {
            _this._popupSelectStatement.isVisible(true);
            _this._popupSelectStatement.query = query;
            _this._popupSelectStatement.data(query.sqlString());
        };
        _this._showQbCallBack = function (name, isCustomQuery) {
            if (name === void 0) { name = null; }
            if (isCustomQuery === void 0) { isCustomQuery = false; }
            if (name !== null) {
                var query = _arrayutils_1.findFirstItemMatchesCondition(_this._customQueries(), function (item) { return name === (item.name() || item.generateName()); });
                if (query.type() === utils_1.SqlQueryType.customSqlQuery) {
                    _this._queryEditIndex(_this._customQueries().indexOf(query));
                    _this._showStatementPopup(query);
                }
                else {
                    _this._queryEditIndex(_this._customQueries().indexOf(query));
                    _this._popupQueryBuilder.show(query, _this._dataSource());
                }
            }
            else {
                _this._queryEditIndex(-1);
                if (isCustomQuery) {
                    _this._showStatementPopup(new customSqlQuery_1.CustomSqlQuery({ '@Name': null }, _this._dataSource()));
                }
                else {
                    var queryNew = new tableQuery_1.TableQuery({ '@Name': null }, _this._dataSource());
                    _this._popupQueryBuilder.show(queryNew, _this._dataSource());
                }
            }
        };
        _this._popupSelectStatement = ({
            isVisible: ko.observable(false),
            title: function () { return localization_utils_1.getLocalization('Custom SQL Editor', 'AnalyticsCoreStringId.SqlDSWizard_CustomSqlEditor'); },
            query: null,
            data: ko.observable(),
            okButtonText: function () { return localization_utils_1.getLocalization('OK', 'DataAccessUIStringId.Button_OK'); },
            okButtonHandler: function (e) {
                _this._popupSelectStatement.query.sqlString(e.model.data());
                _this._setCustomSqlQuery(_this._popupSelectStatement.query);
                e.model.isVisible(false);
            },
            aceOptions: _options_1.createDefaultSQLAceOptions(),
            aceAvailable: _ace_available_1.aceAvailable(),
            additionalOptions: _options_1.createDefaultSQLAdditionalOptions(function (newVal) { _this._popupSelectStatement.data(newVal); }),
            languageHelper: _options_1.createDefaultSQLLanguageHelper(),
            closest: function (element, parentSelector) {
                return $(element).closest(parentSelector);
            }
        });
        _this._customResetOptions = $.noop;
        _this._queryEditIndex = ko.observable(-1);
        _this.disableCustomSql = true;
        _this._scrollViewHeight = 'calc(100% - 36px)';
        _this._customizeDBSchemaTreeListActions = null;
        _this._isDataLoadingInProcess = ko.observable(false);
        _this._callbacks = _this._options.callbacks;
        _this._sqlTextProvider = new _selectQuerySqlTextProvider_1.SelectQuerySqlTextProvider(_requestwrapper_1.wrapGetSelectStatement(_this._callbacks.selectStatement), _this._dataConnection);
        _this._popupQueryBuilder = new _queryBuilderPopup_1.QueryBuilderPopup(function (newQuery, isInProcess) { return _this._setTableQuery(newQuery, isInProcess); }, _options.rtl, _options.callbacks.customizeQBInitData);
        _this._fieldListModel = ko.observable(null);
        _this._disposables.push(_this._hasParametersToEdit = ko.pureComputed(function () { return _this._itemsProvider().hasParametersToEdit(); }));
        _this._disposables.push(_this._isDataLoadingInProcess.subscribe(function (newVal) {
            if (!newVal)
                _this._onChange();
            _this[wizard_1.BaseWizard.__loadingStateFunctionName] && _this[wizard_1.BaseWizard.__loadingStateFunctionName](newVal);
        }));
        _this.disableCustomSql = _this._options.disableCustomSql;
        _this._getItemsAfterCheck = function (node) {
            _this._resetDataSourceResult();
            _this._isDataLoadingInProcess(true);
            if (node.checked.peek() && node.isList) {
                if (node.name === 'tables' || node.name === 'views') {
                    _this._itemsProvider().getItems(new pathRequest_1.PathRequest(node.name)).done(function () {
                        if (node.isList && node.children.peek().length > 0) {
                            $.when.apply($, node.children.peek().map(function (item) {
                                return _this._getItemsPromise(new pathRequest_1.PathRequest(node.name + '.' + item.name));
                            })).always(function () { return _this._isDataLoadingInProcess(false); });
                        }
                        else {
                            _this._isDataLoadingInProcess(false);
                        }
                    });
                }
                else if (node.specifics === 'table' || node.specifics === 'view') {
                    _this['_itemsProvider']().getItems(new pathRequest_1.PathRequest(node.specifics + '.' + node.name))
                        .always(function () { return _this._isDataLoadingInProcess(false); });
                }
                else if (node.name === 'procedures') {
                    _this['_itemsProvider']().getItems(new pathRequest_1.PathRequest(node.name))
                        .always(function () { return _this._isDataLoadingInProcess(false); });
                }
                else {
                    _this._isDataLoadingInProcess(false);
                }
            }
            else {
                _this._isDataLoadingInProcess(false);
            }
        };
        return _this;
    }
    MultiQueryConfigurePage.prototype._addQueryAlgorithm = function (elements, specifics, dataSource, customQueries) {
        if (!elements.unChecked() || specifics === 'queries') {
            if (elements.children().length === 0) {
                this._itemsProvider().getItems(new pathRequest_1.PathRequest(specifics));
            }
            if (specifics === 'tables' || specifics === 'views') {
                this._addQueryFromTables(elements, dataSource);
            }
            else if (specifics === 'procedures') {
                this._addQueryFromStoredProcedures(elements, dataSource);
            }
            else {
                this._addQueryFromCustomQueries(elements, customQueries, dataSource.queries);
            }
        }
        else {
            elements.children().forEach(function (node) {
                MultiQueryConfigurePage._removeQuery(dataSource.queries, node);
            });
        }
    };
    MultiQueryConfigurePage.prototype._addQueryFromTables = function (elements, dataSource) {
        for (var i = 0; i < elements.children().length; i++) {
            var table = elements.children()[i];
            if (!table.unChecked()) {
                var columns = {};
                var queryJSON = {
                    'Columns': columns,
                    'Tables': {
                        'SelectedTables': {
                            'Item1': {
                                '@Name': table.name,
                                '@ControlType': 'Table',
                                '@ItemType': 'Table'
                            }
                        },
                    }
                };
                if (table.children().length === 0) {
                    this._itemsProvider().getItems(new pathRequest_1.PathRequest('tables.' + table.name)).done(function () {
                        table.initializeChildren(table.children());
                    });
                }
                for (var j = 0; j < table.children().length; j++) {
                    var column = table.children()[j];
                    if (column.checked()) {
                        columns['Item' + (j + 1)] = {
                            '@Table': table.name,
                            '@Name': column.name,
                            '@ItemType': 'Column'
                        };
                    }
                }
                MultiQueryConfigurePage._pushQuery(new tableQuery_1.TableQuery(queryJSON, dataSource), table, dataSource.queries);
            }
            else {
                MultiQueryConfigurePage._removeQuery(dataSource.queries, table);
            }
        }
    };
    MultiQueryConfigurePage.prototype._addQueryFromStoredProcedures = function (elements, dataSource) {
        for (var i = 0; i < elements.children().length; i++) {
            var procedure = elements.children()[i];
            if (procedure.checked()) {
                var newQuery = new storedProcQuery_1.StoredProcQuery({ '@Name': procedure.name, 'ProcName': procedure.name }, dataSource);
                procedure.arguments.forEach(function (arg) {
                    newQuery.parameters.push(new dataSourceParameter_1.DataSourceParameter({ '@Name': arg.name, '@Type': dbColumn_1.DBColumn.GetType(arg.type) }, null, dataSourceParameterMeta_1.storedProcParameterSerializationsInfo(dbColumn_1.DBColumn.GetType(arg.type))));
                });
                MultiQueryConfigurePage._pushQuery(newQuery, procedure, dataSource.queries);
            }
            else {
                MultiQueryConfigurePage._removeQuery(dataSource.queries, procedure);
            }
        }
    };
    MultiQueryConfigurePage.prototype._addQueryFromCustomQueries = function (elements, queries, allQueries) {
        for (var i = 0; i < elements.children().length; i++) {
            var queryNode = elements.children()[i];
            var query = _arrayutils_1.findFirstItemMatchesCondition(queries.peek(), function (item) { return queryNode.name === (item.name() || item.generateName()); });
            if (queryNode.checked()) {
                query.name(_utils_2.generateQueryUniqueName(allQueries.peek(), query));
                this._checkedQueries.push(query);
            }
        }
    };
    MultiQueryConfigurePage.prototype._getItemsPromise = function (pathRequest) {
        return this._itemsProvider().getItems(pathRequest);
    };
    MultiQueryConfigurePage.prototype._resetDataSourceResult = function () {
        this._customResetOptions();
        this._dataSource().relations([]);
        this._dataSource().resultSet = null;
        this._onChange();
    };
    MultiQueryConfigurePage.prototype._setQueryCore = function (query) {
        var provider = this._fieldListModel().itemsProvider;
        var queryEditIndex = this._queryEditIndex();
        if (queryEditIndex >= 0) {
            this._itemsProvider().queries().children()[queryEditIndex].name = query.name();
            provider.customQueries().splice(queryEditIndex, 1, query);
        }
        else {
            query.name(_utils_2.generateQueryUniqueName(provider.customQueries().peek(), query));
            provider.customQueries().push(query);
            this._selectedPath('queries.' + query.name());
            var childrens = this._itemsProvider().queries().children();
            var children = childrens[childrens.length - 1];
            children.setChecked(true);
            children['_afterCheckToggled'] && children['_afterCheckToggled'](children);
        }
        this._resetDataSourceResult();
    };
    MultiQueryConfigurePage._pushQuery = function (newQuery, node, queries) {
        if (!_arrayutils_1.findFirstItemMatchesCondition(queries.peek(), function (item) { return item.name() === (newQuery.name() || newQuery.generateName()); })) {
            newQuery.name(_utils_2.generateQueryUniqueName(queries.peek(), newQuery));
            queries.push(newQuery);
        }
        node.hasQuery = true;
    };
    MultiQueryConfigurePage._removeQuery = function (queries, node) {
        if (node.hasQuery) {
            var queryIndex = -1;
            var existUncheck = queries.peek().some(function (value, index) {
                if (value.name() === node.name || value.generateName() === node.name) {
                    queryIndex = index;
                    return true;
                }
                return false;
            });
            if (existUncheck) {
                queries.splice(queryIndex, 1);
            }
            node.hasQuery = false;
        }
    };
    MultiQueryConfigurePage.prototype.canNext = function () {
        return !this._itemsProvider().nextButtonDisabled() && this.canFinish();
    };
    MultiQueryConfigurePage.prototype.canFinish = function () {
        return this._itemsProvider() && this._itemsProvider().hasCheckedItems() && !this._isDataLoadingInProcess();
    };
    MultiQueryConfigurePage.prototype._AddQueryWithBuilder = function () {
    };
    MultiQueryConfigurePage.prototype._runQueryBuilder = function () {
    };
    MultiQueryConfigurePage.prototype._loadPanelViewModel = function (element) {
        return popupWizard_1.PopupWizard._getLoadPanelViewModel(element, this._isDataLoadingInProcess);
    };
    MultiQueryConfigurePage.prototype._setTableQuery = function (query, isInProcess) {
        var _this = this;
        isInProcess && isInProcess(true);
        return this._sqlTextProvider.getQuerySqlText(query)
            .done(function () { return _this._setQueryCore(query); })
            .always(function () {
            isInProcess && isInProcess(false);
        });
    };
    MultiQueryConfigurePage.prototype._setCustomSqlQuery = function (query) {
        this._setQueryCore(query);
    };
    MultiQueryConfigurePage.prototype._createTreeListFactory = function () {
        return new _utils_1.MultiQueryTreeListItemFactory();
    };
    MultiQueryConfigurePage.prototype.commit = function () {
        var _this = this;
        this._dataSource().queries.removeAll();
        this._checkedQueries.removeAll();
        this._addQueryAlgorithm(this._itemsProvider().tables(), 'tables', this._dataSource());
        this._addQueryAlgorithm(this._itemsProvider().views(), 'views', this._dataSource());
        this._addQueryAlgorithm(this._itemsProvider().procedures(), 'procedures', this._dataSource());
        this._addQueryAlgorithm(this._itemsProvider().queries(), 'queries', this._dataSource(), this._customQueries);
        ko.utils.arrayPushAll(this._dataSource().queries(), this._checkedQueries());
        this._dataSource().queries.valueHasMutated();
        var checkedCustomQueries = this._itemsProvider().queries().children().filter(function (x) { return x.checked(); }).map(function (query) { return query.name; });
        var customQueries = this._sqlDataSourceWrapper.sqlDataSource.queries().filter(function (x) {
            return checkedCustomQueries.some(function (queryName) { return queryName === x.name(); }) || x instanceof storedProcQuery_1.StoredProcQuery;
        });
        customQueries.forEach(function (item) { return _this._sqlDataSourceWrapper.sqlDataSource.queries.remove(item); });
        var serializer = new serializer_1.ModelSerializer();
        return $.Deferred().resolve({
            sqlDataSourceJSON: this._sqlDataSourceWrapper.save(),
            customQueries: customQueries.map(function (x) { return JSON.stringify(serializer.serialize(x)); })
        }).promise();
    };
    MultiQueryConfigurePage.prototype.initialize = function (state) {
        var _this = this;
        this._sqlDataSourceWrapper = dataSourceWizardState_1._restoreSqlDataSourceFromState(state, this._options.requestWrapper);
        var customQueriesPromise = this._callbacks.customQueriesPreset
            ? this._callbacks.customQueriesPreset(this._dataSource())
            : $.Deferred().resolve([]).promise();
        var deferred = $.Deferred();
        customQueriesPromise.done(function (queries) {
            _this._customQueries(queries);
            _this._selectedPath('');
            var itemsProvider = new _dbSchemaItemsProvider_1.DBSchemaItemsProvider(_this._dataSource().dbSchemaProvider, _this._customQueries, _this._showQbCallBack, _this.disableCustomSql, _this._getItemsAfterCheck);
            _this._disposables.push(itemsProvider);
            _this._itemsProvider(itemsProvider);
            _this._getItemsPromise(new pathRequest_1.PathRequest('queries'));
            _this._fieldListModel({
                factory: _this._createTreeListFactory(),
                itemsProvider: _this._itemsProvider(),
                selectedPath: _this._selectedPath,
                treeListController: new _dbSchemaTreeListController_1.DBSchemaTreeListController(_this._customizeDBSchemaTreeListActions),
                templateName: 'dxrd-treelist-with-checkbox'
            });
            _this._popupQueryBuilder.isVisible(false);
            _this._dataSource()
                .dbSchemaProvider.getDbSchema()
                .done(function () {
                deferred.resolve();
            })
                .fail(deferred.reject);
        })
            .fail(deferred.reject);
        return deferred.promise();
    };
    return MultiQueryConfigurePage;
}(wizardPage_1.WizardPageBase));
exports.MultiQueryConfigurePage = MultiQueryConfigurePage;
function _registerMultiQueryConfigurePage(factory, wizardOptions) {
    factory.registerMetadata(pageId_1.SqlDataSourceWizardPageId.MultiQueryConfigurePage, {
        create: function () {
            return new MultiQueryConfigurePage(wizardOptions);
        },
        setState: function (data, state) {
            state.sqlDataSourceJSON = data.sqlDataSourceJSON;
            state.customQueries = data.customQueries;
        },
        getState: function (state) {
            return state.sqlDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.sqlDataSourceJSON = defaultState.sqlDataSourceJSON;
            state.customQueries = defaultState.customQueries;
        },
        description: localization_utils_1.getLocalization('Columns selected from specific tables and/or views will be automatically included into a separate query.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMultiQuery'),
        template: 'dxrd-wizard-add-queries-page'
    });
}
exports._registerMultiQueryConfigurePage = _registerMultiQueryConfigurePage;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(9);
var wizardPage_1 = __webpack_require__(7);
var dataSourceWizardState_1 = __webpack_require__(12);
var configureQueryPage_1 = __webpack_require__(24);
var _configureParametersUtils_1 = __webpack_require__(133);
var dataSourceParameter_1 = __webpack_require__(11);
var _getNameHelpers_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(13);
var editorsInfo_1 = __webpack_require__(6);
var _arrayutils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var pageId_1 = __webpack_require__(5);
function _canEditQueryParameters(query, customQueries) {
    if (query.type() === utils_1.SqlQueryType.tableQuery || query.type() === utils_1.SqlQueryType.customSqlQuery) {
        return customQueries.indexOf(query) > -1;
    }
    return query.type() === utils_1.SqlQueryType.storedProcQuery && query.parameters().length > 0;
}
exports._canEditQueryParameters = _canEditQueryParameters;
var MultiQueryConfigureParametersPage = (function (_super) {
    __extends(MultiQueryConfigureParametersPage, _super);
    function MultiQueryConfigureParametersPage(parametersConverter, _requestWrapper) {
        if (parametersConverter === void 0) { parametersConverter = {
            createParameterViewModel: function (parameter) { return parameter; },
            getParameterFromViewModel: function (parameterViewModel) { return parameterViewModel; }
        }; }
        var _this = _super.call(this) || this;
        _this.parametersConverter = parametersConverter;
        _this._requestWrapper = _requestWrapper;
        _this._sqlDataSourceWrapper = new configureQueryPage_1._SqlDataSourceWrapper(undefined, undefined, _this._requestWrapper);
        _this._selectedPath = ko.observable(null);
        _this._rootItems = ko.observableArray();
        _this._createNewParameter = function (queryName, parameters) {
            var newParameter = new dataSourceParameter_1.DataSourceParameter({
                '@Name': _getNameHelpers_1.getUniqueNameForNamedObjectsArray(parameters, 'parameter'),
                '@Type': 'System.Int32'
            });
            _this._selectedPath(queryName + '.' + newParameter.name());
            return _this.parametersConverter.createParameterViewModel(newParameter);
        };
        _this._scrollViewHeight = '100%';
        _this._fieldListModel = ko.observable(null);
        _this._removeButtonTitle = localization_utils_1.getLocalization('Remove', 'DataAccessUIStringId.Button_Remove');
        var callback = function () { return _this._onChange(); };
        _this._disposables.push(_utils_1.subscribeArray(_this._rootItems, function (item) {
            _this._disposables.push(_utils_1.subscribeArray(item.parameters, function (parameter) {
                _this._disposables.push(_utils_1.subscribeObject(parameter.dataSourceParameter, function (value) {
                    var _a;
                    (_a = _this._disposables).push.apply(_a, _utils_1.subscribeProperties([value.name, value['value'], value['type']], callback));
                }, callback));
            }, callback));
        }, callback));
        _this._parametersEditorOptions = {
            addHandler: function () {
                return _this.parametersConverter.createParameterViewModel(new dataSourceParameter_1.DataSourceParameter({
                    '@Name': _getNameHelpers_1.getUniqueNameForNamedObjectsArray(_this._parametersEditorOptions.values.peek().peek(), 'param'),
                    '@Type': 'System.Int32'
                }));
            },
            values: ko.observable(ko.observableArray([])),
            displayName: 'Parameters',
            level: 0,
            info: ko.observable({
                displayName: 'Parameters', localizationId: 'DevExpress.DataAccess.Sql.SqlQuery.Parameters',
                propertyName: 'parameters',
                modelName: 'Parameter',
                array: true,
                editor: editorsInfo_1.editorTemplates.getEditor('commonCollection'),
                template: '#dxrd-parameter-collection-item'
            }),
            editorTemplate: '#dxrd-wizard-datasource-parameters',
            hideButtons: ko.observable(false),
            collapsed: false
        };
        return _this;
    }
    MultiQueryConfigureParametersPage.prototype._isParametersValid = function () {
        return this._getParameters().every(function (x) { return x.isValid(); });
    };
    MultiQueryConfigureParametersPage.prototype.canNext = function () {
        return this._isParametersValid() && this._sqlDataSourceWrapper.sqlDataSource.queries().length > 1;
    };
    MultiQueryConfigureParametersPage.prototype.canFinish = function () {
        return this._isParametersValid() && this._sqlDataSourceWrapper.sqlDataSource.queries().length >= 1;
    };
    MultiQueryConfigureParametersPage.prototype._getParameters = function () {
        return [].concat.apply([], (this._rootItems() || []).map(function (x) {
            return x.parameters().map(function (param) {
                return param.dataSourceParameter();
            });
        }));
    };
    MultiQueryConfigureParametersPage.prototype.initialize = function (state) {
        var _this = this;
        var newRootItemsWithParameters = [];
        var rootItems = this._rootItems();
        this._sqlDataSourceWrapper = dataSourceWizardState_1._restoreSqlDataSourceFromState(state, this._requestWrapper);
        this._sqlDataSourceWrapper.sqlDataSource.queries().forEach(function (query) {
            if (_canEditQueryParameters(query, _this._sqlDataSourceWrapper.customQueries)) {
                var parent = new _configureParametersUtils_1.ParametersTreeListRootItem(query);
                parent.parameters(query.parameters().map(function (parameterModel) {
                    return new _configureParametersUtils_1.ParametersTreeListItem(_this.parametersConverter.createParameterViewModel(parameterModel), parent);
                }));
                newRootItemsWithParameters.push(parent);
            }
        });
        rootItems.filter(function (x) { return newRootItemsWithParameters.every(function (newItem) { return newItem.name !== x.name; }); }).forEach(function (removedItem) {
            rootItems.splice(_this._rootItems().indexOf(removedItem), 1);
        });
        newRootItemsWithParameters.forEach(function (newItem) {
            var currentItem = rootItems.filter(function (x) { return x.name === newItem.name; })[0];
            if (currentItem) {
                newItem.parameters().filter(function (newParam) { return currentItem.parameters().every(function (x) { return x.name !== newParam.name; }); }).forEach(function (param) {
                    currentItem.parameters.push(param);
                });
            }
            else {
                rootItems.push(newItem);
            }
        });
        this._rootItems.valueHasMutated();
        this._fieldListModel({
            itemsProvider: {
                getItems: function (pathRequest) {
                    var result = $.Deferred();
                    if (!pathRequest.fullPath) {
                        result.resolve(_this._rootItems());
                    }
                    else {
                        var parent = _arrayutils_1.findFirstItemMatchesCondition(_this._rootItems(), function (item) { return item.name === pathRequest.ref; });
                        result.resolve(parent.parameters());
                    }
                    return result.promise();
                }
            },
            templateName: 'dx-treelist-item-with-hover',
            selectedPath: this._selectedPath,
            treeListController: new _configureParametersUtils_1.ParametersTreeListController(this._rootItems(), this._createNewParameter),
        });
        return $.Deferred().resolve().promise();
    };
    MultiQueryConfigureParametersPage.prototype.commit = function () {
        var _this = this;
        this._rootItems().forEach(function (item) {
            item.query().parameters(item.parameters().map(function (parameterViewModel) {
                return _this.parametersConverter.getParameterFromViewModel(parameterViewModel.dataSourceParameter());
            }));
        });
        return $.Deferred().resolve({
            sqlDataSourceJSON: this._sqlDataSourceWrapper.sqlDataSourceJSON,
            customQueries: this._sqlDataSourceWrapper.saveCustomQueries()
        }).promise();
    };
    return MultiQueryConfigureParametersPage;
}(wizardPage_1.WizardPageBase));
exports.MultiQueryConfigureParametersPage = MultiQueryConfigureParametersPage;
function _registerMultiQueryConfigureParametersPage(factory, requestWrapper, parametersConverter) {
    factory.registerMetadata(pageId_1.SqlDataSourceWizardPageId.MultiQueryConfigureParametersPage, {
        create: function () { return new MultiQueryConfigureParametersPage(parametersConverter, requestWrapper); },
        getState: function (state) { return state.sqlDataSourceWizard; },
        setState: function (result, state) { return state.customQueries = result.customQueries; },
        resetState: function () { return void 0; },
        description: localization_utils_1.getLocalization('Configure query parameters.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureParameters'),
        template: 'dxrd-configure-query-parameters-page'
    });
}
exports._registerMultiQueryConfigureParametersPage = _registerMultiQueryConfigureParametersPage;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var dataSourceWizardState_1 = __webpack_require__(12);
var resultSet_1 = __webpack_require__(71);
var _utils_1 = __webpack_require__(13);
var _masterDetailEditor_1 = __webpack_require__(134);
var _infoMessageHelpers_1 = __webpack_require__(0);
var serializer_1 = __webpack_require__(1);
var pageId_1 = __webpack_require__(5);
var localization_utils_1 = __webpack_require__(1);
var ConfigureMasterDetailRelationshipsPage = (function (_super) {
    __extends(ConfigureMasterDetailRelationshipsPage, _super);
    function ConfigureMasterDetailRelationshipsPage(_sqlDataSourceResultSchema) {
        var _this = _super.call(this) || this;
        _this._sqlDataSourceResultSchema = _sqlDataSourceResultSchema;
        _this._relations = ko.observableArray([]);
        _this._customResetOptions = $.noop;
        _this._relationsEditor = ko.observable(null);
        var callback = function () { return _this._onChange(); };
        _this._disposables.push(_utils_1.subscribeArray(_this._relations, function (relation) {
            var _a;
            (_a = relation._disposables).push.apply(_a, _utils_1.subscribeProperties([relation.detailQuery, relation.name, relation.masterQuery], callback));
            relation._disposables.push(_utils_1.subscribeArray(relation.keyColumns, function (column) {
                var _a;
                (_a = relation._disposables).push.apply(_a, _utils_1.subscribeProperties([column.detailColumn, column.masterColumn], callback));
            }, callback));
        }, callback));
        return _this;
    }
    ConfigureMasterDetailRelationshipsPage.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.disposeObservableArray(this._relations);
    };
    ConfigureMasterDetailRelationshipsPage.prototype._updateRelations = function () {
        var _this = this;
        var relations = this._relations();
        relations.forEach(function (relation, index) {
            var detailTable = _this._resultSet.tables().filter(function (table) { return table.tableName() === relation.detailQuery(); })[0];
            var masterTable = _this._resultSet.tables().filter(function (table) { return table.tableName() === relation.masterQuery(); })[0];
            if (!detailTable || !masterTable) {
                relations.splice(index, 1);
                return;
            }
            var keyColumns = relation.keyColumns();
            keyColumns.forEach(function (keyColumn, index) {
                if (detailTable.columns().every(function (x) { return x.name() !== keyColumn.detailColumn(); }) ||
                    masterTable.columns().every(function (x) { return x.name() !== keyColumn.masterColumn(); }))
                    keyColumns.splice(index, 1);
            });
            if (keyColumns.length === 0)
                relations.splice(index, 1);
        });
        this._relations.valueHasMutated();
    };
    ConfigureMasterDetailRelationshipsPage.prototype.canNext = function () {
        return false;
    };
    ConfigureMasterDetailRelationshipsPage.prototype.canFinish = function () {
        return this._relations().every(function (relation) { return relation.keyColumns()
            .every(function (keyColumn) { return !!keyColumn.detailColumn() && !!keyColumn.masterColumn(); }); });
    };
    ConfigureMasterDetailRelationshipsPage.prototype._getResultSet = function (dataSource) {
        var deferred = $.Deferred();
        if (dataSource.resultSet) {
            deferred.resolve((dataSource.resultSet));
        }
        else {
            this._sqlDataSourceResultSchema(dataSource).done((function (result) {
                deferred.resolve(new resultSet_1.ResultSet(JSON.parse(result.resultSchemaJSON)));
            })).fail(function (result) {
                deferred.reject(result);
            });
        }
        return deferred.promise();
    };
    ConfigureMasterDetailRelationshipsPage.prototype.initialize = function (state) {
        var _this = this;
        this.relationsSubscription && this.relationsSubscription.dispose();
        this._sqlDataSourceWrapper = dataSourceWizardState_1._restoreSqlDataSourceFromState(state);
        this._disposables.push(this.relationsSubscription = this._relations.subscribe(function (changes) {
            var isRelationsChanged = changes.some(function (change) {
                return !change['moved'] && change['moved'] !== 0;
            });
            if (isRelationsChanged) {
                _this._customResetOptions();
            }
        }, null, 'arrayChange'));
        return this._getResultSet(this._sqlDataSourceWrapper.sqlDataSource)
            .done(function (result) {
            _this._resultSet = result;
            _this._updateRelations();
            _this._relationsEditor(new _masterDetailEditor_1.MasterDetailEditor(_this._relations, _this._resultSet, $.noop));
        })
            .fail(function (result) {
            if (_infoMessageHelpers_1.getErrorMessage(result))
                _infoMessageHelpers_1.ShowMessage(_infoMessageHelpers_1.getErrorMessage(result));
        });
    };
    ConfigureMasterDetailRelationshipsPage.prototype.commit = function () {
        this.relationsSubscription.dispose();
        this._sqlDataSourceWrapper.sqlDataSource.relations(this._relations());
        this._sqlDataSourceWrapper.sqlDataSource.resultSet = this._resultSet;
        var serializer = new serializer_1.ModelSerializer();
        return $.Deferred().resolve({
            sqlDataSourceJSON: this._sqlDataSourceWrapper.sqlDataSourceJSON,
            customQueries: this._sqlDataSourceWrapper.saveCustomQueries(),
            relations: this._relations().map(function (x) { return JSON.stringify(serializer.serialize(x)); }),
        }).promise();
    };
    return ConfigureMasterDetailRelationshipsPage;
}(wizardPage_1.WizardPageBase));
exports.ConfigureMasterDetailRelationshipsPage = ConfigureMasterDetailRelationshipsPage;
function _registerConfigureMasterDetailRelationshipsPage(factory, sqlDataSourceResultSchema) {
    factory.registerMetadata(pageId_1.DataSourceWizardPageId.ConfigureMasterDetailRelationshipsPage, {
        create: function () {
            return new ConfigureMasterDetailRelationshipsPage(sqlDataSourceResultSchema);
        },
        setState: function (data, state) {
            state.relations = data.relations;
        },
        getState: function (state) {
            return state.sqlDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.relations = defaultState.relations;
        },
        description: localization_utils_1.getLocalization('Configure master-detail relationships.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMasterDetailRelations'),
        template: 'dxrd-wizard-configure-relations-page'
    });
}
exports._registerConfigureMasterDetailRelationshipsPage = _registerConfigureMasterDetailRelationshipsPage;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var _utils_1 = __webpack_require__(13);
var wizardPage_1 = __webpack_require__(7);
var objectSchema_1 = __webpack_require__(52);
var objectDataSource_1 = __webpack_require__(23);
var _objectSchemaProvider_1 = __webpack_require__(82);
var _chooseObjectTypes_1 = __webpack_require__(83);
var _chooseObjectDataMembers_1 = __webpack_require__(84);
var _chooseObjectParameters_1 = __webpack_require__(81);
var localization_utils_1 = __webpack_require__(1);
var fullscreenWizardPage_1 = __webpack_require__(38);
var pageId_1 = __webpack_require__(5);
var SpecifyObjectDataSourceSettingsPage = (function (_super) {
    __extends(SpecifyObjectDataSourceSettingsPage, _super);
    function SpecifyObjectDataSourceSettingsPage(_dataSourceWizardOptions) {
        var _this = _super.call(this) || this;
        _this._dataSourceWizardOptions = _dataSourceWizardOptions;
        _this._types = ko.observableArray([]);
        _this._objectDataSource = new objectDataSource_1.ObjectDataSource();
        var getItemsProviderCallback = _this._dataSourceWizardOptions.callbacks.getItemsProviderCallback;
        _this._disposables.push(_this._provider = new _objectSchemaProvider_1.ObjectSchemaProvider(_this._dataSourceWizardOptions.requestWrapper), _this._chooseObjectType = new _chooseObjectTypes_1.ChooseObjectTypes(_this._types, _this._provider), _this._chooseObjectDataMember = new _chooseObjectDataMembers_1.ChooseObjectDataMembers(_this._chooseObjectType.selectedType, _this._chooseObjectType.selectedCtor), _this._chooseObjectParameters = new _chooseObjectParameters_1.ChooseObjectParameters(_this._chooseObjectType.selectedCtor, _this._chooseObjectDataMember.selectedDataMembers, getItemsProviderCallback && getItemsProviderCallback()));
        _this._initSections();
        return _this;
    }
    SpecifyObjectDataSourceSettingsPage.prototype._initSections = function () {
        var _this = this;
        this._sections = [
            {
                data: this._chooseObjectType,
                disabled: function () { return false; },
                description: localization_utils_1.getLocalization('Choose the type and its constructor.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseType_Description'),
                position: _utils_1.getSectionStyle(this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.Right : fullscreenWizardPage_1.WizardSectionPosition.Left),
                template: 'dx-objectdatasource-types-section'
            },
            {
                data: this._chooseObjectDataMember,
                disabled: function () { return !_this._chooseObjectDataMember.dataMembers().length; },
                description: localization_utils_1.getLocalization('Choose the entire object or a data member to bind.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseDataMember_Description'),
                position: _utils_1.getSectionStyle(this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.TopLeft : fullscreenWizardPage_1.WizardSectionPosition.TopRight),
                disabledText: localization_utils_1.getLocalization('To select a data member, choose a type that contains at least one data member.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseDataMember_Disabled_Description'),
                template: 'dx-objectdatasource-datamembers-section'
            },
            {
                data: this._chooseObjectParameters,
                disabled: function () { return !_this._chooseObjectParameters.hasParameters(); },
                position: _utils_1.getSectionStyle(this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.BottomLeft : fullscreenWizardPage_1.WizardSectionPosition.BottomRight),
                description: localization_utils_1.getLocalization('Configure constructor parameters and/or method parameters.', 'AnalyticsCoreStringId.ObjectDSWizard_ConfigureParameters_Description'),
                disabledText: localization_utils_1.getLocalization('To specify parameters, select a parameterized constructor or method.', 'AnalyticsCoreStringId.ObjectDSWizard_ConfigureParameters_Disabled_Description'),
                template: 'dx-objectdatasource-parameters-section'
            }
        ];
    };
    SpecifyObjectDataSourceSettingsPage.prototype.showDescription = function (index, text) {
        return [index + 1, text].join('. ');
    };
    SpecifyObjectDataSourceSettingsPage.prototype.canNext = function () {
        return false;
    };
    SpecifyObjectDataSourceSettingsPage.prototype.canFinish = function () {
        return !!this._chooseObjectDataMember.selectedDataMembers().length;
    };
    SpecifyObjectDataSourceSettingsPage.prototype.commit = function () {
        var selectedDataMember = this._chooseObjectDataMember.selectedDataMembers()[0];
        return $.Deferred().resolve({
            selectedType: this._chooseObjectType.selectedType().name,
            ctor: this._chooseObjectType.selectedCtor(),
            dataSourceName: this._objectDataSource.name(),
            context: this._context,
            dataMember: !selectedDataMember || selectedDataMember.isEntireObject() ? undefined : selectedDataMember,
        }).promise();
    };
    SpecifyObjectDataSourceSettingsPage.prototype.initialize = function (state) {
        var _this = this;
        this._context = state.objectDataSourceWizard.context;
        this._objectDataSource.setState(state.objectDataSourceWizard);
        this._chooseObjectType.selectedCtor(this._objectDataSource.ctor);
        this._chooseObjectDataMember.selectedDataMembers([this._objectDataSource.dataMember]);
        this._provider.getObjectTypeDescriptions(state.objectDataSourceWizard.context).done(function (schema) {
            schema.types.forEach(function (type) { return type.members.splice(0, 0, objectSchema_1.ObjectDataMember.empty()); });
            _this._types(schema.types || []);
            if (schema.types.length > 0) {
                _this._chooseObjectType.selectedPath(schema.types[0].name);
            }
        });
        return $.Deferred().resolve().promise();
    };
    return SpecifyObjectDataSourceSettingsPage;
}(wizardPage_1.WizardPageBase));
exports.SpecifyObjectDataSourceSettingsPage = SpecifyObjectDataSourceSettingsPage;
function _registerSpecifyObjectDataSourceSettingsPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(pageId_1.FullscreenDataSourceWizardPageId.SpecifyObjectDataSourceSettingsPage, {
        setState: function (data, state) {
            state.objectDataSourceWizard.ctor = data.ctor;
            state.objectDataSourceWizard.dataMember = data.dataMember;
            state.objectDataSourceWizard.selectedType = data.selectedType;
            state.objectDataSourceWizard.dataSourceName = data.dataSourceName;
        },
        getState: function (state) {
            return state;
        },
        resetState: function (state, defaultState) {
            state.objectDataSourceWizard.ctor = defaultState.objectDataSourceWizard.ctor;
            state.objectDataSourceWizard.dataMember = defaultState.objectDataSourceWizard.dataMember;
            state.objectDataSourceWizard.selectedType = defaultState.objectDataSourceWizard.selectedType;
            state.objectDataSourceWizard.dataSourceName = defaultState.objectDataSourceWizard.dataSourceName;
        },
        create: function () {
            return new SpecifyObjectDataSourceSettingsPage(dataSourceWizardOptions);
        },
        template: 'dxrd-page-objectsource',
        navigationPanelText: localization_utils_1.getLocalization('Specify Data Source Settings', 'AnalyticsCoreStringId.Wizard_SpecifyDataSourceSettingsPage')
    });
}
exports._registerSpecifyObjectDataSourceSettingsPage = _registerSpecifyObjectDataSourceSettingsPage;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var queryModel_1 = __webpack_require__(58);
var _arrayutils_1 = __webpack_require__(0);
var initializer_1 = __webpack_require__(70);
var localization_utils_1 = __webpack_require__(1);
var querySurface_1 = __webpack_require__(97);
var dbSchemaProvider_1 = __webpack_require__(68);
var requestwrapper_1 = __webpack_require__(8);
var _utils_1 = __webpack_require__(0);
var _designerInitializer_1 = __webpack_require__(0);
var _processError_1 = __webpack_require__(0);
var parameterModelMeta_1 = __webpack_require__(46);
var _selection_1 = __webpack_require__(0);
var controlsFactory_1 = __webpack_require__(27);
var _utils_2 = __webpack_require__(0);
var _options_1 = __webpack_require__(53);
var _columnDragHandler_1 = __webpack_require__(155);
var _queryBuilderTreeListController_1 = __webpack_require__(156);
var propertygrid_1 = __webpack_require__(6);
var _localization_1 = __webpack_require__(0);
var _accordionTabInfo_1 = __webpack_require__(157);
var _dbObjectDragDropHandler_1 = __webpack_require__(98);
var _queryBuilderObjectsProvider_1 = __webpack_require__(43);
var _actionList_1 = __webpack_require__(0);
var _infoMessageHelpers_1 = __webpack_require__(0);
var _controlsFactory_1 = __webpack_require__(158);
var config_1 = __webpack_require__(196);
var sqlDataSource_1 = __webpack_require__(74);
var _requestwrapper_1 = __webpack_require__(16);
var _ace_available_1 = __webpack_require__(10);
var _internal_1 = __webpack_require__(0);
var QueryBuilderElements = {
    Surface: 'dxrd-surface-template-base',
    Toolbar: 'dxqb-toolbar',
    RightPanel: 'dx-right-panel-lightweight',
    DataPreview: 'dxqb-popup#data',
    SqlPreview: 'dxqb-popup#sql'
};
function customizeDesignerActions(designerModel, nextCustomizer) {
    var query = designerModel.model;
    return (function (actions) {
        var del = _arrayutils_1.findFirstItemMatchesCondition(actions, function (action) { return action.text === 'Delete'; });
        del.imageClassName = 'dx-icon-dxrd-image-recycle-bin';
        del.imageTemplateName = 'dxrd-svg-operations-recycle_bin';
        var undo = _arrayutils_1.findFirstItemMatchesCondition(actions, function (action) { return action.text === 'Undo'; });
        undo.disabled = ko.pureComputed(function () { return designerModel.isLoading() || !designerModel.undoEngine().undoEnabled(); });
        var redo = _arrayutils_1.findFirstItemMatchesCondition(actions, function (action) { return action.text === 'Redo'; });
        actions.splice(0, actions.length, del, undo, redo);
        actions.push({
            id: initializer_1.ActionId.Save,
            text: 'Save',
            displayText: function () { return localization_utils_1.getLocalization('Save', 'AnalyticsCoreStringId.MenuButtons_Save'); },
            imageClassName: 'dxqb-image-save',
            imageTemplateName: 'dxrd-svg-menu-save',
            disabled: designerModel.isLoading,
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 'S'.charCodeAt(0) },
            clickAction: function () {
                query().save();
            },
            hasSeparator: true
        });
        actions.push({
            id: initializer_1.ActionId.DataPreview,
            text: 'Preview Results',
            displayText: function () { return localization_utils_1.getLocalization('Preview Results', 'DataAccessUIStringId.QueryBuilderButtons_PreviewResults'); },
            imageClassName: 'dxrd-image-data-preview',
            imageTemplateName: 'dxrd-svg-queryBuilder-data_preview',
            disabled: designerModel.isLoading,
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 'P'.charCodeAt(0) },
            clickAction: function () {
                if (!query().canSave())
                    return;
                designerModel.showPreview();
            },
            hasSeparator: true
        });
        actions.push({
            id: initializer_1.ActionId.SelectStatementPreview,
            text: 'Preview Select Statement',
            displayText: function () { return localization_utils_1.getLocalization('Preview Select Statement', 'AnalyticsCoreStringId.QueryBuilder_PreviewSelectStatement_Tooltip'); },
            imageClassName: 'dxrd-image-selectstatement-preview',
            imageTemplateName: 'dxrd-svg-queryBuilder-select_statment',
            disabled: designerModel.isLoading,
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 'E'.charCodeAt(0) },
            clickAction: function () {
                if (!query().canSave())
                    return;
                designerModel.showStatement();
            },
            hasSeparator: true
        });
        nextCustomizer && nextCustomizer(actions);
    });
}
function updateQueryBuilderSurfaceContentSize(getRoot, surfaceSize, surface, updateLayoutCallbacks) {
    return function () {
        var $root = getRoot();
        var rightAreaWidth = $root.find('.dxrd-right-panel:visible').outerWidth() || 0;
        var surfaceWidth = $root.width() - (rightAreaWidth + 5);
        $root.find('.dxrd-surface-wrapper').css(surface().rtl() ?
            { 'left': rightAreaWidth, 'right': 0, 'width': surfaceWidth } :
            { 'left': 0, 'right': rightAreaWidth, 'width': surfaceWidth });
        surfaceSize(surfaceWidth);
        surface().pageWidth(surfaceWidth);
    };
}
exports.updateQueryBuilderSurfaceContentSize = updateQueryBuilderSurfaceContentSize;
function createIsLoadingFlag(model, dbSchemaProvider) {
    var isDbSchemaLoaded = ko.observable(false);
    dbSchemaProvider.subscribe(function () { isDbSchemaLoaded(false); });
    return ko.pureComputed(function () {
        dbSchemaProvider.peek().getDbSchema().done(function () {
            isDbSchemaLoaded(true);
        });
        if (isDbSchemaLoaded()) {
            return model().tables.peek().some(function (table) {
                return !table.isInitialized();
            });
        }
        else {
            return true;
        }
    });
}
exports.createIsLoadingFlag = createIsLoadingFlag;
exports.isJoinsResolvingDisabled = false;
function _createQueryBuilder(element, options, callbacks, applyBindings) {
    if (applyBindings === void 0) { applyBindings = true; }
    var disposableCallback = callbacks && callbacks.onServerError && _processError_1.processErrorEvent(callbacks.onServerError);
    var wrapper = options.requestWrapper || new requestwrapper_1.RequestWrapper();
    var parametersMode = options.parametersMode || parameterModelMeta_1.ParametersMode.ReadWrite;
    initializer_1.HandlerUri(options.handlerUri);
    if (options.queryModelJson) {
        var dataSource = new sqlDataSource_1.SqlDataSource(JSON.parse(options.dataSourceJson));
        options.dbSchemaProvider = _utils_1._wrapModelInObservable(options.dbSchemaProvider);
        options.dbSchemaProvider(new dbSchemaProvider_1.DBSchemaProvider(dataSource.connection));
        options.querySource = _utils_1._wrapModelInObservable(options.querySource);
        options.querySource(JSON.parse(options.queryModelJson));
    }
    var dataConnection = options.dbSchemaProvider().connection;
    var query = ko.observable(), surface = ko.observable(), treeListOptions = ko.observable();
    query.subscribe(function (newValue) {
        surface(new querySurface_1.QuerySurface(newValue));
        surface().rtl(!!options.rtl);
    });
    var beforeSaveCallback = function (data) {
        callbacks.saveQueryRequested({
            queryLayout: encodeURIComponent(JSON.stringify(data)),
            connection: encodeURIComponent(_requestwrapper_1.serializeDataConnection(dataConnection))
        });
    };
    var initQuery = function (querySource) {
        query(new queryModel_1.QueryViewModel(querySource, options.dbSchemaProvider(), parametersMode, function (data) { return beforeSaveCallback(data); }));
    };
    initQuery(options.querySource());
    var selection = new _selection_1.SurfaceSelection(['alias', 'name', 'sortOrder']);
    var designerModel = _designerInitializer_1.createDesigner(query, surface, controlsFactory_1.controlsFactory, undefined, undefined, undefined, !!options.rtl, selection);
    if (disposableCallback) {
        designerModel.dispose = function () {
            disposableCallback.dispose();
        };
    }
    designerModel.rootStyle = 'dxqb-designer dxd-back-primary-invariant';
    var previewPopupContainer = _utils_2.getParentContainer;
    designerModel.dataPreview = {
        isLoading: ko.observable(false),
        isVisible: ko.observable(false),
        title: function () { return localization_utils_1.getLocalization('Data Preview (First 100 Rows Displayed)', 'AnalyticsCoreStringId.DataPreview_Title'); },
        template: 'dxqb-data-preview',
        data: {
            value: ko.observable()
        },
        okButtonText: function () { return localization_utils_1.getLocalization('OK', 'DataAccessUIStringId.Button_OK'); },
        okButtonHandler: function (e) {
            e.model.isVisible(false);
        },
        container: previewPopupContainer
    };
    designerModel.selectStatmentPreview = {
        isLoading: ko.observable(false),
        isVisible: ko.observable(false),
        template: 'dxqb-selectstatment-preview',
        title: function () { return localization_utils_1.getLocalization('Select Statement Preview', 'AnalyticsCoreStringId.QueryBuilder_SelectStatementPreview_Title'); },
        data: {
            value: ko.observable(),
            aceOptions: _options_1.createDefaultSQLAceOptions(true),
            aceAvailable: _ace_available_1.aceAvailable(),
            additionalOptions: _options_1.createDefaultSQLAdditionalOptions(function (newVal) { designerModel.selectStatmentPreview.data.value(newVal); }),
            languageHelper: _options_1.createDefaultSQLLanguageHelper()
        },
        okButtonText: function () { return localization_utils_1.getLocalization('OK', 'DataAccessUIStringId.Button_OK'); },
        okButtonHandler: function (e) {
            e.model.isVisible(false);
        },
        container: previewPopupContainer
    };
    designerModel.parts = [
        { id: QueryBuilderElements.Surface, templateName: QueryBuilderElements.Surface, model: designerModel },
        { id: QueryBuilderElements.Toolbar, templateName: QueryBuilderElements.Toolbar, model: designerModel },
        { id: QueryBuilderElements.RightPanel, templateName: QueryBuilderElements.RightPanel, model: designerModel },
        { id: QueryBuilderElements.DataPreview, templateName: QueryBuilderElements.DataPreview.split('#')[0], model: designerModel.dataPreview },
        { id: QueryBuilderElements.SqlPreview, templateName: QueryBuilderElements.SqlPreview.split('#')[0], model: designerModel.selectStatmentPreview }
    ];
    designerModel.columnDragHandler = new _columnDragHandler_1.ColumnDragHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.connectionPointDragHandler = designerModel.columnDragHandler;
    designerModel.resizeHandler['handles'] = 'e, w';
    designerModel.columnsLoadingMsg = function () { return localization_utils_1.getLocalization('Loading...', 'DataAccessWebStringId.QueryBuilder_ColumnsLoading'); };
    var init = function (querySource) {
        initQuery(querySource);
        treeListOptions({
            itemsProvider: options.dbSchemaProvider(),
            treeListController: new _queryBuilderTreeListController_1.QueryBuilderTreeListController(designerModel.undoEngine, query),
            selectedPath: ko.observable(),
            pageSize: 100,
            templateName: 'dxqb-treelist-item-with-search'
        });
    };
    options.querySource.subscribe(function (newValue) {
        init(newValue);
    });
    init(options.querySource());
    var tablesTop = ko.observable(355), itemPropertiesTabInfoModel = {
        editableObject: designerModel.editableObject,
        properties: new propertygrid_1.ObjectProperties(designerModel.editableObject, null, 1),
        fieldListModel: { treeListOptions: treeListOptions },
        tablesTop: tablesTop,
        searchPlaceholder: function () { return _localization_1.searchPlaceholder(); }
    };
    var tabPanelItem = new _accordionTabInfo_1.AccordionTabInfo(query, itemPropertiesTabInfoModel, designerModel.undoEngine, selection.focused, parametersMode === parameterModelMeta_1.ParametersMode.ReadWrite);
    var tabPanel = designerModel.tabPanel;
    tabPanel.tabs.length = 0;
    tabPanel.tabs.push(tabPanelItem);
    tabPanel.width(375);
    designerModel.fieldDragHandler = new _dbObjectDragDropHandler_1.DbObjectDragDropHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.fieldListProvider = new _queryBuilderObjectsProvider_1.QueryBuilderObjectsProvider(query, _queryBuilderObjectsProvider_1.QueryBuilderObjectsProvider.whereClauseObjectsFilter);
    designerModel.dataBindingsProvider = designerModel.fieldListProvider;
    designerModel.parametersBindingsProvider = options.parametersItemsProvider || designerModel.dataBindingsProvider;
    designerModel.dataBindingsGroupProvider = new _queryBuilderObjectsProvider_1.QueryBuilderObjectsProvider(query, _queryBuilderObjectsProvider_1.QueryBuilderObjectsProvider.groupByObjectsFilter);
    designerModel.isLoading = createIsLoadingFlag(designerModel.model, options.dbSchemaProvider);
    designerModel.actionLists = new _actionList_1.ActionLists(surface, designerModel.selection, designerModel.undoEngine, customizeDesignerActions(designerModel, callbacks && callbacks.customizeActions));
    designerModel.selection.focused(surface());
    surface.subscribe(function (newValue) {
        designerModel.selection.focused(newValue);
    });
    if (!designerModel.isLoading()) {
        designerModel.undoEngine && designerModel.undoEngine().clearHistory();
    }
    designerModel.isLoading.subscribe(function (value) {
        designerModel.undoEngine && designerModel.undoEngine().clearHistory();
    });
    designerModel.editableObject.subscribe(function (newValue) {
        tablesTop.notifySubscribers(null);
    });
    _utils_1.appendStaticContextToRootViewModel(designerModel);
    if (applyBindings) {
        callbacks && callbacks.beforeRender && callbacks.beforeRender(designerModel);
        $(element).empty();
        ko.cleanNode(element);
        ko.applyBindings(designerModel, element);
    }
    var updateSurfaceContentSize_ = updateQueryBuilderSurfaceContentSize(function () { return $(element).find('.dxqb-designer'); }, designerModel.surfaceSize, surface);
    surface.subscribe(function () { updateSurfaceContentSize_(); });
    var onResize = function () {
        setTimeout(function () { return updateSurfaceContentSize_(); });
    };
    window.addEventListener('resize', onResize);
    _internal_1.addDisposeCallback(element, function () {
        window.removeEventListener('resize', onResize);
    });
    designerModel.tabPanel.width.subscribe(function () {
        updateSurfaceContentSize_();
    });
    designerModel.updateSurfaceSize = function () {
        updateSurfaceContentSize_();
    };
    designerModel.updateSurface = function () {
        updateSurfaceContentSize_();
        tablesTop(355);
    };
    designerModel.findControl = function (s, e) {
        var $childs = $('.dxqb-main').children('.dxrd-control');
        $childs.each(function (_, child) {
            var $child = $(child);
            if ($child.offset().top <= e.clientY && $child.offset().left <= e.clientX) {
                designerModel.selection.focused(ko.dataFor($child[0]));
                return;
            }
        });
    };
    if (applyBindings) {
        designerModel.updateSurface();
    }
    designerModel.showPreview = function () {
        designerModel.dataPreview.isLoading(true);
        designerModel.dataPreview.isVisible(true);
        wrapper.getDataPreview(dataConnection, JSON.stringify(query().serialize(true)))
            .done(function (data) {
            designerModel.dataPreview.data.value(JSON.parse(data.dataPreviewJSON));
            designerModel.dataPreview.isLoading(false);
        }).fail(function (data) {
            designerModel.dataPreview.isVisible(false);
            _infoMessageHelpers_1.ShowMessage(_infoMessageHelpers_1.getErrorMessage(data));
        });
    };
    designerModel.showStatement = function () {
        designerModel.selectStatmentPreview.isLoading(true);
        designerModel.selectStatmentPreview.isVisible(true);
        wrapper.getSelectStatement(dataConnection, JSON.stringify(query().serialize(true)))
            .done(function (data) {
            if (data.errorMessage)
                _infoMessageHelpers_1.ShowMessage(data.errorMessage);
            designerModel.selectStatmentPreview.data.value(data.sqlSelectStatement);
            designerModel.selectStatmentPreview.isLoading(false);
        }).fail(function (data) {
            designerModel.selectStatmentPreview.isVisible(false);
            _infoMessageHelpers_1.ShowMessage(_infoMessageHelpers_1.getErrorMessage(data));
        });
    };
    return designerModel;
}
function createQueryBuilder(element, options, callbacks, applyBindings) {
    if (applyBindings === void 0) { applyBindings = true; }
    if (options.localization) {
        localization_utils_1.addCultureInfo({
            messages: options.localization
        });
    }
    config_1.default({ rtlEnabled: !!options.rtl });
    _controlsFactory_1.registerControls();
    var promises = [];
    callbacks && callbacks.customizeLocalization && callbacks.customizeLocalization(promises);
    return _localization_1.resolveFromPromises(promises, function () { return _createQueryBuilder(element, options, callbacks, applyBindings); });
}
exports.createQueryBuilder = createQueryBuilder;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var queryElementModel_1 = __webpack_require__(28);
var columnModelMeta_1 = __webpack_require__(26);
var dbColumn_1 = __webpack_require__(18);
var utils_1 = __webpack_require__(21);
var _columnExpressionCollectionHelper_1 = __webpack_require__(152);
var _utils_1 = __webpack_require__(0);
var ColumnViewModel = (function (_super) {
    __extends(ColumnViewModel, _super);
    function ColumnViewModel(model, dbColumn, parent, serializer) {
        var _this = _super.call(this, _utils_1.extend({ '@ControlType': 'Column' }, model), parent, serializer) || this;
        _this.isNotAvailable = ko.observable(false);
        _this._type = ko.observable(dbColumn_1.DBColumnType.Unknown);
        _this._size = ko.observable('');
        if (dbColumn.size)
            _this._size(dbColumn.size);
        if (dbColumn.type)
            _this._type(dbColumn.type);
        _this.displayType = ko.pureComputed(function () {
            return dbColumn_1.DBColumnType[_this._type()] + (_this._size() ? '(' + _this._size() + ')' : '');
        });
        _this.dataType = ko.pureComputed(function () {
            return dbColumn_1.DBColumn.GetType(_this._type());
        });
        _this.actualName = ko.pureComputed(function () {
            return _this.alias() || _this.name();
        });
        var points = parent.getColumnConnectionPoints(_this);
        _this.rightConnectionPoint = {
            side: ko.observable(utils_1.PointSide.East),
            location: points.right
        };
        _this.leftConnectionPoint = {
            side: ko.observable(utils_1.PointSide.West),
            location: points.left
        };
        var query = parent.parentModel();
        var targetColumn = ko.pureComputed(function () { return _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.find(query.columns, parent.actualName(), _this.name()); });
        _this.aggregate = ko.pureComputed({
            read: function () { return targetColumn() ? targetColumn().aggregate() : columnModelMeta_1.AggregationType.None; },
            write: function (value) {
                targetColumn() && targetColumn().aggregate(value);
            }
        });
        _this.alias = ko.pureComputed({
            read: function () { return targetColumn() ? targetColumn().alias() : ''; },
            write: function (value) {
                targetColumn() && targetColumn().alias(value || null);
            }
        });
        var orderByItem = ko.pureComputed(function () { return _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.find(query.sorting, parent.actualName(), _this.name()); });
        _this.sortingType = ko.computed({
            read: function () {
                if (!orderByItem())
                    return 'Unsorted';
                return orderByItem().descending() ? 'Descending' : 'Ascending';
            },
            write: function (newValue) {
                if (newValue !== 'Unsorted') {
                    if (orderByItem()) {
                        orderByItem().descending(newValue === 'Descending');
                    }
                    else {
                        _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.addNew(query, query.sorting, parent.actualName(), _this.name())
                            .descending(newValue === 'Descending');
                    }
                }
                else if (orderByItem()) {
                    _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.remove(query.sorting, parent.actualName(), _this.name());
                }
            }
        });
        _this.sortOrder = ko.computed({
            read: function () {
                var index = query.sorting().indexOf(orderByItem());
                return index < 0 ? undefined : index + 1;
            },
            write: function (newValue) {
                if (!orderByItem())
                    return;
                newValue = Math.min(newValue, query.sorting().length);
                newValue = Math.max(newValue, 1);
                var oldValue = query.sorting().indexOf(orderByItem());
                var item = query.sorting.splice(oldValue, 1);
                query.sorting.splice(newValue - 1, 0, item[0]);
            }
        });
        var groupByItem = ko.computed(function () { return _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.find(query.grouping, parent.actualName(), _this.name()); });
        _this.aggregate.subscribe(function (value) {
            var parentTable = _this.parentModel();
            if (value !== columnModelMeta_1.AggregationType.None) {
                _this.groupBy(false);
                if (!_this.alias() || _this._isAliasAutoGenerated(parentTable.actualName())) {
                    var aggregateAlias = _this.name() + '_' + value;
                    _this.alias(_columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.setUniqueAlias(query.columns, aggregateAlias));
                }
            }
            else if (_this._isAliasAutoGenerated(parentTable.actualName())) {
                _this.alias(null);
            }
        });
        _this.groupBy = ko.computed({
            read: function () { return !!groupByItem(); },
            write: function (value) {
                if (value) {
                    _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.addNew(query, query.grouping, parent.actualName(), _this.name());
                    _this.aggregate(columnModelMeta_1.AggregationType.None);
                }
                else {
                    _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.remove(query.grouping, parent.actualName(), _this.name());
                }
            }
        });
        _this.selected = ko.pureComputed({
            read: function () { return !!targetColumn(); },
            write: function (value) {
                if (!!targetColumn() === value)
                    return;
                if (value) {
                    _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.addNew(query, query.columns, parent.actualName(), _this.name());
                }
                else {
                    _columnExpressionCollectionHelper_1.ColumnExpressionCollectionHelper.remove(query.columns, parent.actualName(), _this.name());
                    _this.groupBy(false);
                }
            }
        });
        return _this;
    }
    ColumnViewModel.prototype._isAliasAutoGenerated = function (addedTableName) {
        if (addedTableName && this.alias() && this.alias().indexOf(addedTableName + '_') === 0) {
            if (this.alias().substring(addedTableName.length + 1) === this.name())
                return true;
        }
        if (!this.alias() || this.alias().indexOf(this.name() + '_') !== 0)
            return false;
        var funcName = this.alias().substring(this.name().length + 1);
        if (funcName.match(new RegExp('_[0-9]+$')))
            funcName = funcName.substring(0, funcName.indexOf('_'));
        return Object.keys(columnModelMeta_1.AggregationType).indexOf(funcName) > 0;
    };
    ColumnViewModel.prototype.getInfo = function () {
        return columnModelMeta_1.columnSerializationInfo;
    };
    ColumnViewModel.prototype.isPropertyDisabled = function (name) {
        if (this.isNotAvailable())
            return true;
        if (name === 'sortOrder') {
            return this.sortingType() === 'Unsorted';
        }
        else if (name === 'aggregate' || name === 'alias') {
            return !this.selected();
        }
        else if (name === 'groupBy') {
            var query = this.root;
            return this.aggregate() && query.aggregatedColumnsCount() === 1;
        }
        else
            return false;
    };
    Object.defineProperty(ColumnViewModel.prototype, "specifics", {
        get: function () {
            return dbColumn_1.DBColumn.GetSpecific(this.dataType());
        },
        enumerable: true,
        configurable: true
    });
    return ColumnViewModel;
}(queryElementModel_1.QueryElementBaseViewModel));
exports.ColumnViewModel = ColumnViewModel;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(44);
exports.tableSerializationInfo = [
    metadata_1.name, metadata_1.alias, { propertyName: 'itemType', modelName: '@ItemType' }
];


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var queryElementModel_1 = __webpack_require__(28);
var utils_1 = __webpack_require__(1);
var joinConditionModel_1 = __webpack_require__(94);
var relationModelMeta_1 = __webpack_require__(95);
var _utils_1 = __webpack_require__(0);
var RelationViewModel = (function (_super) {
    __extends(RelationViewModel, _super);
    function RelationViewModel(model, query, serializer) {
        var _this = _super.call(this, _utils_1.extend(model, { '@ControlType': 'Relation', '@ItemType': 'Relation' }), query, serializer) || this;
        _this.parentTable = ko.observable(query.getTable(_this.parentTableName.peek()));
        _this.nestedTable = ko.observable(query.getTable(_this.nestedTableName.peek()));
        _this.parentTableName = ko.pureComputed(function () { return _this.parentTable().actualName(); });
        _this.nestedTableName = ko.pureComputed(function () { return _this.nestedTable().actualName(); });
        _this.conditions = utils_1.deserializeArray(model['KeyColumns'], function (item) {
            return new joinConditionModel_1.JoinConditionViewModel(item, _this, serializer);
        });
        return _this;
    }
    RelationViewModel.prototype._getConditionNumber = function () {
        var result = this.conditions().length + 1;
        var existingNumbers = this.conditions().map(function (_c) { return _c.seriesNumber(); });
        for (var index = 0; index < this.conditions().length; index++) {
            if (existingNumbers.indexOf(index + 1) !== -1)
                continue;
            result = index + 1;
            break;
        }
        return result;
    };
    RelationViewModel.prototype.getInfo = function () {
        return relationModelMeta_1.relationSerializationInfo;
    };
    RelationViewModel.prototype.addChild = function (control) {
        var condition = control;
        if (this.conditions && this.conditions.indexOf(condition) === -1) {
            condition.seriesNumber(this._getConditionNumber());
            condition.parentModel(this);
            this.conditions.push(condition);
        }
    };
    RelationViewModel.prototype.removeChild = function (control) {
        var index = this.conditions().indexOf(control);
        if (index > -1)
            this.conditions.splice(index, 1);
        if (this.conditions().length === 0)
            this.parentModel().removeChild(this);
    };
    return RelationViewModel;
}(queryElementModel_1.QueryElementBaseViewModel));
exports.RelationViewModel = RelationViewModel;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var routedConnectorModel_1 = __webpack_require__(31);
var controlsFactory_1 = __webpack_require__(27);
var utils_1 = __webpack_require__(21);
var _utils_1 = __webpack_require__(0);
var JoinConditionViewModel = (function (_super) {
    __extends(JoinConditionViewModel, _super);
    function JoinConditionViewModel(control, relation, serializer) {
        var _this = _super.call(this, _utils_1.extend(control, { '@ControlType': 'JoinCondition', '@ItemType': 'KeyColumn' }), relation, serializer) || this;
        _this.parentColumn = ko.pureComputed(function () { return relation.parentTable().getColumn(_this.parentColumnName()); });
        _this.nestedColumn = ko.pureComputed(function () { return relation.nestedTable().getColumn(_this.nestedColumnName()); });
        _this.joinType = relation.joinType;
        _this.left = ko.pureComputed(function () { return relation.parentTableName() + '.' + _this.parentColumnName(); });
        _this.right = ko.pureComputed(function () { return relation.nestedTableName() + '.' + _this.nestedColumnName(); });
        _this._disposables.push(ko.computed(function () {
            if (_this.parentColumn() && _this.nestedColumn()) {
                var result = utils_1.determineConnectingPoints(_this.parentColumn(), _this.nestedColumn());
                _this.startPoint().connectingPoint(result.start);
                _this.endPoint().connectingPoint(result.end);
            }
        }));
        return _this;
    }
    JoinConditionViewModel.prototype.getControlFactory = function () {
        return controlsFactory_1.controlsFactory;
    };
    JoinConditionViewModel.prototype.preInitProperties = function () {
        this.startPoint = ko.observable();
        this.endPoint = ko.observable();
    };
    return JoinConditionViewModel;
}(routedConnectorModel_1.RoutedConnectorViewModel));
exports.JoinConditionViewModel = JoinConditionViewModel;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.relationSerializationInfo = [
    { propertyName: 'joinType', modelName: '@Type' },
    { propertyName: 'parentTableName', modelName: '@Parent' },
    { propertyName: 'nestedTableName', modelName: '@Nested' },
    { propertyName: 'conditions', modelName: 'KeyColumns', defaultVal: [], array: true },
    { propertyName: 'itemType', modelName: '@itemType' }
];


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editorTemplates_1 = __webpack_require__(25);
var parsers_1 = __webpack_require__(1);
exports.querySerializationsInfo = [
    {
        propertyName: '_tablesObject', modelName: 'Tables', info: [
            { propertyName: 'tables', modelName: 'SelectedTables', array: true },
            { propertyName: 'relations', modelName: 'Relations', array: true }
        ]
    },
    { propertyName: 'parameters', modelName: 'Parameters', array: true },
    { propertyName: 'type', modelName: '@Type' },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'editableName', displayName: 'Name', localizationId: 'DevExpress.DataAccess.Sql.SqlQuery.Name', editor: editorTemplates_1.editorTemplates.getEditor('text') },
    { propertyName: '_filterString', modelName: 'Filter', defaultVal: '' },
    { propertyName: 'filterString', defaultVal: '', displayName: 'Filter', localizationId: 'DataAccessUIStringId.FiltersView_Filter', editor: editorTemplates_1.editorTemplates.getEditor('filterEditor') },
    { propertyName: '_groupFilterString', modelName: 'GroupFilter', defaultVal: '' },
    { propertyName: 'groupFilterString', defaultVal: '', displayName: 'Group Filter', localizationId: 'DataAccessUIStringId.FiltersView_GroupFilter', editor: editorTemplates_1.editorTemplates.getEditor('filterGroupEditor') },
    { propertyName: 'columns', modelName: 'Columns', array: true },
    { propertyName: 'sorting', modelName: 'Sorting', array: true },
    { propertyName: 'grouping', modelName: 'Grouping', array: true },
    { propertyName: 'itemType', modelName: '@ItemType' },
    { propertyName: 'allColumnsInTablesSelected', displayName: 'Select All (*)', localizationId: 'AnalyticsCoreStringId.QueryBuilder_SelectAll', editor: editorTemplates_1.editorTemplates.getEditor('bool') },
    { propertyName: 'top', modelName: '@Top', displayName: 'Select Top', defaultVal: 0, from: parsers_1.floatFromModel, localizationId: 'AnalyticsCoreStringId.QueryBuilder_SelectTop', editor: editorTemplates_1.editorTemplates.getEditor('numeric'), editorOptions: { format: '#0', min: 0 } },
    { propertyName: 'skip', modelName: '@Skip', displayName: 'Offset', defaultVal: 0, from: parsers_1.floatFromModel, localizationId: 'AnalyticsCoreStringId.QueryBuilder_Offset', editor: editorTemplates_1.editorTemplates.getEditor('numeric'), editorOptions: { format: '#0', min: 0 } },
    { propertyName: 'distinct', modelName: '@Distinct', defaultVal: false, from: parsers_1.parseBool, displayName: 'Select distinct', localizationId: 'AnalyticsCoreStringId.QueryBuilder_SelectDistinct', editor: editorTemplates_1.editorTemplates.getEditor('bool') }
];


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var baseSurface_1 = __webpack_require__(4);
var _arrayutils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var _hoverInfo_1 = __webpack_require__(0);
var QuerySurface = (function (_super) {
    __extends(QuerySurface, _super);
    function QuerySurface(query, zoom) {
        if (zoom === void 0) { zoom = ko.observable(1); }
        var _this = _super.call(this, query, {
            measureUnit: ko.observable('Pixels'),
            zoom: zoom,
            dpi: ko.observable(100)
        }, QuerySurface._unitProperties) || this;
        _this.placeholder = function () { return localization_utils_1.getLocalization('Drop a table or view here to create a query.', 'AnalyticsCoreStringId.QueryBuilder_SurfacePlaceholder'); };
        _this.tables = ko.observableArray();
        _this.relations = ko.observableArray();
        _this.allowMultiselect = false;
        _this.focused = ko.observable(false);
        _this.selected = ko.observable(false);
        _this.underCursor = ko.observable(new _hoverInfo_1.HoverInfo());
        _this.templateName = 'dx-query-surface';
        _this.rtl = ko.observable(false);
        _this.measureUnit = _this._context.measureUnit;
        _this.dpi = _this._context.dpi;
        _this._context = _this;
        _this.margins = { bottom: _this['_bottom'], left: _this['_left'], right: _this['_right'], top: _this['_top'] };
        _this.zoom = zoom;
        _arrayutils_1.createObservableArrayMapCollection(query.tables, _this.tables, _this._createSurface);
        _arrayutils_1.createObservableArrayMapCollection(query.relations, _this.relations, _this._createSurface);
        _this._joinedColumns = ko.computed(function () {
            var resultColumns = [];
            _this.relations().forEach(function (relation) {
                relation.conditions().forEach(function (condition) {
                    var joinModel = condition.getControlModel();
                    joinModel.parentColumn() && resultColumns.push(joinModel.parentColumn());
                    joinModel.nestedColumn() && resultColumns.push(joinModel.nestedColumn());
                });
            });
            return resultColumns;
        });
        return _this;
    }
    QuerySurface.prototype.checkParent = function (surfaceParent) { return false; };
    QuerySurface.prototype.getChildrenCollection = function () {
        return this.tables;
    };
    QuerySurface.prototype.isJoined = function (column) {
        return this._joinedColumns().indexOf(column.getControlModel()) > -1;
    };
    QuerySurface._unitProperties = {
        _width: function (o) { return o.pageWidth; },
        _height: function (o) { return o.pageWidth; },
        pageWidth: function (o) { return o.pageWidth; },
        pageHeight: function (o) { return o.pageHeight; },
        _bottom: function (o) { return o.margins.bottom; },
        _left: function (o) { return o.margins.left; },
        _right: function (o) { return o.margins.right; },
        _top: function (o) { return o.margins.top; }
    };
    return QuerySurface;
}(baseSurface_1.SurfaceElementBase));
exports.QuerySurface = QuerySurface;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _dragDropHandler_1 = __webpack_require__(0);
var controlsFactory_1 = __webpack_require__(27);
var size_1 = __webpack_require__(4);
var rectangle_1 = __webpack_require__(4);
var _surfaceHelpers_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(0);
var DbObjectDragDropHandler = (function (_super) {
    __extends(DbObjectDragDropHandler, _super);
    function DbObjectDragDropHandler(surface, selection, _undoEngine, snapHelper, dragHelperContent) {
        var _this = _super.call(this, surface, selection, _undoEngine, snapHelper, dragHelperContent) || this;
        _this._undoEngine = _undoEngine;
        _this._query = function () { return _this._querySurface().getControlModel(); };
        _this._querySurface = surface;
        _this.cursor = 'arrow';
        _this.containment = '.dxqb-designer';
        _this['cursorAt'] = {
            top: 0,
            left: 0
        };
        _this['helper'] = function (draggable) {
            _super.prototype.helper.call(_this, draggable);
            _this.recalculateSize(size_1.Size.fromString('199, 123'));
            dragHelperContent.setContent(new rectangle_1.Rectangle(0, 0, _this._size.width(), _this._size.height()));
        };
        _this._drop = DbObjectDragDropHandler.getDropCallback(_this._undoEngine, false);
        return _this;
    }
    DbObjectDragDropHandler.prototype.startDrag = function (draggable) {
        if (draggable && draggable.name) {
            this._query().dbSchemaProvider.getDbTable(draggable.name);
        }
    };
    DbObjectDragDropHandler.prototype.doStopDrag = function (ui, draggable) {
        this.dragHelperContent.reset();
        if (this.selection.dropTarget) {
            var position = this._getAbsoluteSurfacePosition(ui);
            this._querySurface().underCursor().x = position.left - this._querySurface()['absolutePosition'].x();
            this._querySurface().underCursor().y = position.top - this._querySurface()['absolutePosition'].y();
            var item = draggable;
            var control = this._drop(item.data, this._query());
            this.addControl(control, this._querySurface(), this._size);
        }
    };
    DbObjectDragDropHandler.prototype.addControl = function (control, dropTargetSurface, size) {
        dropTargetSurface.getControlModel().addChild(control);
        var controlSurface = _surfaceHelpers_1.findSurface(control);
        if (!controlSurface)
            return;
        controlSurface.rect({ left: dropTargetSurface.underCursor().x, top: dropTargetSurface.underCursor().y, width: size.width() });
        this.selection.initialize(controlSurface);
    };
    DbObjectDragDropHandler.getDropCallback = function (undoEngine, suggestLocation) { return (function (memberInfo, query) {
        var newControl = query.createChild(_utils_1.extend({ '@ControlType': 'Table', '@Name': memberInfo.name }, controlsFactory_1.controlsFactory.controlsMap['Table'].defaultVal));
        if (newControl.isInitialized()) {
            query.tryToCreateRelationsByFK(newControl);
        }
        else {
            newControl.isInitialized.subscribe(function () {
                undoEngine().start();
                query.tryToCreateRelationsByFK(newControl);
                undoEngine().end();
            });
        }
        if (suggestLocation) {
            var posX = Math.max.apply(null, query.tables.peek()
                .filter(function (t) { return t !== newControl; })
                .map(function (t) { return t.location.x.peek() + t.size.width.peek() * 3 / 2; })
                .concat([30]));
            newControl.location.x(posX);
            newControl.location.y(65);
        }
        return newControl;
    }); };
    return DbObjectDragDropHandler;
}(_dragDropHandler_1.DragDropHandler));
exports.DbObjectDragDropHandler = DbObjectDragDropHandler;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _dragDropHandler_1 = __webpack_require__(0);
var connectingPointSurface_1 = __webpack_require__(63);
var diagramElementModel_1 = __webpack_require__(15);
var connectingPointModel_1 = __webpack_require__(30);
var _surfaceHelpers_1 = __webpack_require__(0);
var ConnectingPointDragHandler = (function (_super) {
    __extends(ConnectingPointDragHandler, _super);
    function ConnectingPointDragHandler(surface, selection, undoEngine, snapHelper, dragHelperContent) {
        var _this = _super.call(this, surface, selection, undoEngine, snapHelper, dragHelperContent) || this;
        _this.startConnectingPoint = null;
        _this.newConnector = null;
        _this.cursor = 'arrow';
        _this.containment = '.dxrd-ghost-container';
        _this['helper'] = function (draggable) {
            dragHelperContent.update(draggable);
        };
        return _this;
    }
    ConnectingPointDragHandler.prototype.startDrag = function (control) {
        if (!(control instanceof connectingPointSurface_1.ConnectingPointSurface)) {
            throw new Error('ConnectingPointDragHandler can be applied to the ConnectingPoint only.');
        }
        this.startConnectingPoint = control;
        var diagramElement = this.startConnectingPoint.parent.getControlModel();
        this.newConnector = diagramElement.parentModel().createChild({ '@ControlType': 'RoutedConnector' });
        this.newConnector.startPoint().connectingPoint(this.startConnectingPoint.getControlModel());
    };
    ConnectingPointDragHandler.prototype.drag = function (event, ui) {
        ui.position.left += ui['scroll'].left;
        ui.position.top += ui['scroll'].top;
        var position = this._getAbsoluteSurfacePosition(ui);
        this.newConnectorSurface.endPoint().rect({ top: position.top, left: position.left });
    };
    ConnectingPointDragHandler.prototype.doStopDrag = function () {
        this.dragHelperContent.reset();
        if (this.selection.dropTarget) {
            var dropTarget = this.selection.dropTarget.getControlModel();
            if (dropTarget instanceof connectingPointModel_1.ConnectingPointViewModel) {
                this.newConnector.endPoint().connectingPoint(dropTarget);
            }
            else if (dropTarget instanceof diagramElementModel_1.DiagramElementViewModel) {
                var connectings = dropTarget.connectingPoints();
                this.newConnector.endPoint().connectingPoint(connectings[0]);
            }
            this.selection.initialize(this.newConnectorSurface);
        }
    };
    Object.defineProperty(ConnectingPointDragHandler.prototype, "newConnectorSurface", {
        get: function () {
            return this.newConnector && _surfaceHelpers_1.findSurface(this.newConnector);
        },
        enumerable: true,
        configurable: true
    });
    return ConnectingPointDragHandler;
}(_dragDropHandler_1.DragDropHandler));
exports.ConnectingPointDragHandler = ConnectingPointDragHandler;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var diagramElementSurface_1 = __webpack_require__(29);
var connectionPointSurface_1 = __webpack_require__(22);
var ConnectorSurface = (function (_super) {
    __extends(ConnectorSurface, _super);
    function ConnectorSurface(control, context) {
        var _this = _super.call(this, control, context, null) || this;
        _this.template = 'dxdd-connector';
        _this.selectiontemplate = 'dxdd-connector-selection';
        _this.startPoint = ko.pureComputed(function () {
            return new connectionPointSurface_1.ConnectionPointSurface(control.startPoint(), context);
        });
        _this.endPoint = ko.pureComputed(function () {
            return new connectionPointSurface_1.ConnectionPointSurface(control.endPoint(), context);
        });
        return _this;
    }
    return ConnectorSurface;
}(diagramElementSurface_1.DiagramElementBaseSurface));
exports.ConnectorSurface = ConnectorSurface;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _dragDropHandler_1 = __webpack_require__(0);
var connectionPointSurface_1 = __webpack_require__(22);
var connectingPointModel_1 = __webpack_require__(30);
var diagramElementModel_1 = __webpack_require__(15);
var ConnectionPointDragHandler = (function (_super) {
    __extends(ConnectionPointDragHandler, _super);
    function ConnectionPointDragHandler(surface, selection, undoEngine, snapHelper, dragHelperContent) {
        var _this = _super.call(this, surface, selection, undoEngine, snapHelper, dragHelperContent) || this;
        _this.currentConnectionPoint = null;
        _this.cursor = 'arrow';
        _this.containment = '.dxrd-ghost-container';
        _this['helper'] = function (draggable) {
            dragHelperContent.update(draggable);
        };
        return _this;
    }
    ConnectionPointDragHandler.prototype.startDrag = function (control) {
        if (!(control instanceof connectionPointSurface_1.ConnectionPointSurface)) {
            throw new Error('ConnectionPointDragHandler can be applied to the ConnectionPoint only.');
        }
        this.currentConnectionPoint = control;
    };
    ConnectionPointDragHandler.prototype.drag = function (event, ui) {
        ui.position.left += ui['scroll'].left;
        ui.position.top += ui['scroll'].top;
        var position = this._getAbsoluteSurfacePosition(ui);
        this.currentConnectionPoint.rect({ top: position.top, left: position.left });
    };
    ConnectionPointDragHandler.prototype.doStopDrag = function () {
        this.dragHelperContent.reset();
        if (this.selection.dropTarget) {
            var dropTarget = this.selection.dropTarget.getControlModel();
            if (dropTarget instanceof connectingPointModel_1.ConnectingPointViewModel) {
                var connector = this.currentConnectionPoint.parent.getControlModel();
                if (this.currentConnectionPoint.getControlModel() === connector.startPoint()) {
                    connector.startPoint().connectingPoint(dropTarget);
                }
                else {
                    connector.endPoint().connectingPoint(dropTarget);
                }
            }
            else if (dropTarget instanceof diagramElementModel_1.DiagramElementViewModel) {
                var connector = this.currentConnectionPoint.parent.getControlModel();
                var connectings = dropTarget.connectingPoints();
                if (this.currentConnectionPoint.getControlModel() === connector.startPoint()) {
                    connector.startPoint().connectingPoint(connectings[0]);
                }
                else {
                    connector.endPoint().connectingPoint(connectings[0]);
                }
            }
        }
    };
    return ConnectionPointDragHandler;
}(_dragDropHandler_1.DragDropHandler));
exports.ConnectionPointDragHandler = ConnectionPointDragHandler;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var dbSchema_1 = __webpack_require__(103);
var _infoMessageHelpers_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
function getDBSchemaCallback(requestWrapper, connection, tables) {
    var deferred = $.Deferred();
    requestWrapper.getDbSchema(connection, tables)
        .done(function (data) {
        deferred.resolve(new dbSchema_1.DBSchema(JSON.parse(data.dbSchemaJSON)));
    })
        .fail(function (data) {
        _infoMessageHelpers_1.ShowMessage(_utils_1.formatUnicorn(localization_utils_1.getLocalization('Schema loading failed. {0}', 'DxDesignerStringId.Error_SchemaLoadingFailed'), _infoMessageHelpers_1.getErrorMessage(data)));
        deferred.reject();
    });
    return deferred.promise();
}
exports.getDBSchemaCallback = getDBSchemaCallback;
function getDBStoredProceduresCallback(requestWrapper, connection) {
    var deferred = $.Deferred();
    requestWrapper.getDbStoredProcedures(connection)
        .done(function (data) {
        deferred.resolve(new dbSchema_1.DBSchema(JSON.parse(data.dbSchemaJSON)).procedures);
    })
        .fail(function (data) {
        _infoMessageHelpers_1.ShowMessage(_utils_1.formatUnicorn(localization_utils_1.getLocalization('Stored procedures loading failed. {0}', 'DxDesignerStringId.Error_SchemaLoadingFailed'), _infoMessageHelpers_1.getErrorMessage(data)));
        deferred.reject();
    });
    return deferred.promise();
}
exports.getDBStoredProceduresCallback = getDBStoredProceduresCallback;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dbTable_1 = __webpack_require__(104);
var dbStoredProcedure_1 = __webpack_require__(69);
var _dbSchema_1 = __webpack_require__(19);
var DBSchema = (function () {
    function DBSchema(model) {
        var tables = _dbSchema_1.deserializeToCollection(model['Tables'], function (tableModel) { return new dbTable_1.DBTable(tableModel); });
        tables.sort(function (a, b) { return a.name.localeCompare(b.name); });
        var views = _dbSchema_1.deserializeToCollection(model['Views'], function (tableModel) { return new dbTable_1.DBTable(tableModel); });
        views.sort(function (a, b) { return a.name.localeCompare(b.name); });
        this.tables = tables.concat(views);
        this.procedures = _dbSchema_1.deserializeToCollection(model['StoredProcedures'], function (procModel) { return new dbStoredProcedure_1.DBStoredProcedure(procModel); });
    }
    return DBSchema;
}());
exports.DBSchema = DBSchema;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dbColumn_1 = __webpack_require__(18);
var dbForeignKey_1 = __webpack_require__(105);
var _dbSchema_1 = __webpack_require__(19);
var DBTable = (function () {
    function DBTable(model) {
        this.name = model['Name'];
        this.isView = model['IsView'] === 'true' || model['IsView'] === true;
        this.columns = _dbSchema_1.deserializeToCollection(model['columns'], function (columnModel) { return new dbColumn_1.DBColumn(columnModel); });
        this.foreignKeys = _dbSchema_1.deserializeToCollection(model['foreignKeys'], function (columnModel) { return new dbForeignKey_1.DBForeignKey(columnModel); });
    }
    return DBTable;
}());
exports.DBTable = DBTable;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DBForeignKey = (function () {
    function DBForeignKey(model) {
        this.name = model['Name'];
        this.primaryKeyTable = model['PrimaryKeyTable'];
        this.columns = model['Columns'];
        this.primaryKeyColumns = model['PrimaryKeyTableKeyColumns'];
    }
    return DBForeignKey;
}());
exports.DBForeignKey = DBForeignKey;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = __webpack_require__(1);
var resultTableSerializationInfo = [
    { propertyName: 'tableName', modelName: '@Name' },
    {
        propertyName: 'columns', modelName: 'Fields', array: true, info: [
            { propertyName: 'name', modelName: '@Name' },
            { propertyName: 'propertyType', modelName: '@Type' }
        ]
    }
];
var ResultTable = (function () {
    function ResultTable(model, serializer) {
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    ResultTable.prototype.getInfo = function () {
        return resultTableSerializationInfo;
    };
    return ResultTable;
}());
exports.ResultTable = ResultTable;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var serializer_1 = __webpack_require__(1);
var jsonParameter_1 = __webpack_require__(73);
var jsonAuthenticationInfo_1 = __webpack_require__(72);
var JsonSource = (function (_super) {
    __extends(JsonSource, _super);
    function JsonSource(model, serializer) {
        if (model === void 0) { model = {}; }
        var _this = _super.call(this) || this;
        _this.sourceType = ko.observable();
        _this.uri = ko.observable();
        _this.json = ko.observable();
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(_this, model);
        _this._disposables.push(_this.uri.subscribe(function (newUri) {
            newUri && _this.sourceType(JsonSource._URIJSONSOURCE_TYPE);
        }));
        _this._disposables.push(_this.json.subscribe(function (newJsonString) {
            newJsonString && _this.sourceType(JsonSource._CUSTOMJSONSOURCE_TYPE);
        }));
        function _getJsonParametersModelDeserialized(parameterModels, itemType) {
            if (parameterModels && Array.isArray(parameterModels[jsonParameter_1.JsonParameterType[itemType]]) && parameterModels[jsonParameter_1.JsonParameterType[itemType]])
                parameterModels = parameterModels[jsonParameter_1.JsonParameterType[itemType]];
            return utils_1.deserializeArray(parameterModels, function (item) {
                if (!item['@ItemType'])
                    item['@ItemType'] = jsonParameter_1.JsonParameterType[itemType];
                return new jsonParameter_1.JsonParameter(item, serializer);
            });
        }
        _this.queryParameters = _getJsonParametersModelDeserialized(model['QueryParameters'], jsonParameter_1.JsonParameterType.QueryParameter);
        _this.headers = _getJsonParametersModelDeserialized(model['Headers'], jsonParameter_1.JsonParameterType.Header);
        _this.pathParameters = _getJsonParametersModelDeserialized(model['PathParameters'], jsonParameter_1.JsonParameterType.PathParameter);
        return _this;
    }
    JsonSource.from = function (model, serializer) {
        return new JsonSource(model || {}, serializer);
    };
    JsonSource.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, jsonSourceSerializationInfo, refs);
    };
    JsonSource.prototype.getInfo = function () {
        return jsonSourceSerializationInfo;
    };
    JsonSource.prototype.serialize = function (includeRootTag) {
        if (includeRootTag === void 0) { includeRootTag = false; }
        return includeRootTag ? { 'Source': this.serialize() } : (new serializer_1.ModelSerializer()).serialize(this);
    };
    JsonSource.prototype.resetSource = function () {
        this.sourceType('');
        this.json('');
        this.uri('');
    };
    JsonSource._URIJSONSOURCE_TYPE = 'DevExpress.DataAccess.Json.UriJsonSource';
    JsonSource._CUSTOMJSONSOURCE_TYPE = 'DevExpress.DataAccess.Json.CustomJsonSource';
    return JsonSource;
}(utils_1.Disposable));
exports.JsonSource = JsonSource;
var jsonSourceSerializationInfo = [
    { propertyName: 'sourceType', modelName: '@SourceType', defaultVal: '' },
    { propertyName: 'json', modelName: '@Json', defaultVal: '' },
    { propertyName: 'uri', modelName: '@Uri', defaultVal: '' },
    { propertyName: 'authenticationInfo', modelName: 'AuthenticationInfo', from: jsonAuthenticationInfo_1.JsonAuthenticationInfo.from, toJsonObject: jsonAuthenticationInfo_1.JsonAuthenticationInfo.toJson },
    { propertyName: 'headers', modelName: 'Headers', array: true },
    { propertyName: 'queryParameters', modelName: 'QueryParameters', array: true },
    { propertyName: 'pathParameters', modelName: 'PathParameters', array: true }
];


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(1);
var requestwrapper_1 = __webpack_require__(8);
var _jsonSchemaProvider_1 = __webpack_require__(109);
var JsonSchemaProvider = (function (_super) {
    __extends(JsonSchemaProvider, _super);
    function JsonSchemaProvider(jsonDataSource, _requestWrapper) {
        if (_requestWrapper === void 0) { _requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this) || this;
        _this._requestWrapper = _requestWrapper;
        _this._jsonDataSource = jsonDataSource;
        _this._disposables.push(_this._jsonDataSource.source.sourceType.subscribe(function () {
            _this._jsonSchemaPromise = null;
        }));
        _this.getItems = function (pathRequest) {
            var getItemsDeferred = $.Deferred();
            var loadSchemaPromise = !_this._jsonSchema ? _this.getJsonSchema() : $.Deferred().resolve(_this._jsonSchema).promise();
            loadSchemaPromise
                .done(function (jsonSchema) {
                _this._jsonSchema = jsonSchema;
                var schemaByPath = _this.getSchemaByPath(pathRequest, jsonSchema);
                getItemsDeferred.resolve(schemaByPath);
            })
                .fail(getItemsDeferred.reject);
            return getItemsDeferred.promise();
        };
        return _this;
    }
    JsonSchemaProvider.prototype.reset = function () {
        this._jsonSchemaPromise = null;
    };
    JsonSchemaProvider.prototype.mapToDataMemberContract = function (nodes) {
        return $.map((nodes || []), function (node) {
            var dataMemberInfo = {
                name: node.name(),
                displayName: node.displayName || node.name(),
                isSelected: node.selected(),
                isList: node.nodes && node.nodes.length > 0,
                specifics: 'table',
                dragData: { noDragable: false }
            };
            return dataMemberInfo;
        });
    };
    JsonSchemaProvider.prototype.getSchemaByPath = function (pathRequest, jsonSchema) {
        if (!pathRequest.fullPath) {
            return this.mapToDataMemberContract(jsonSchema.nodes);
        }
        else {
            var currentNodes = jsonSchema.nodes;
            for (var i = 0; i < pathRequest.pathParts.length; i++) {
                var pathPart = (currentNodes || []).filter(function (node) { return node.name() == pathRequest.pathParts[i]; })[0];
                if (!pathPart)
                    return [];
                currentNodes = pathPart.nodes;
            }
            return this.mapToDataMemberContract(currentNodes);
        }
    };
    JsonSchemaProvider.prototype.getJsonSchema = function (parameters) {
        if (parameters === void 0) { parameters = []; }
        if (!this._jsonSchemaPromise || this._jsonSchemaPromise.state() === 'rejected')
            this._jsonSchemaPromise = _jsonSchemaProvider_1.getJsonSchemaCallback(this._requestWrapper, this._jsonDataSource, parameters);
        return this._jsonSchemaPromise;
    };
    return JsonSchemaProvider;
}(utils_1.Disposable));
exports.JsonSchemaProvider = JsonSchemaProvider;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var jsonSchemaNode_1 = __webpack_require__(49);
var _infoMessageHelpers_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var _getJsonSchemaCallback = function (requestWrapper, jsonDataSource, parameters) {
    if (parameters === void 0) { parameters = []; }
    var deferred = $.Deferred();
    requestWrapper.getJsonSchema(jsonDataSource, parameters)
        .done(function (data) {
        try {
            var jsonSchema = JSON.parse(data.jsonSchemaJSON);
            var jsonSchemaModel = new jsonSchemaNode_1.JsonSchemaRootNode(jsonSchema);
            deferred.resolve(jsonSchemaModel);
        }
        finally {
            if (deferred.state() === 'pending')
                deferred.reject();
        }
    })
        .fail(function (data) {
        _infoMessageHelpers_1.ShowMessage(_utils_1.formatUnicorn(localization_utils_1.getLocalization('Schema loading failed. {0}', 'DxDesignerStringId.Error_SchemaLoadingFailed'), _infoMessageHelpers_1.getErrorMessage(data)));
        deferred.reject();
    });
    return deferred.promise();
};
exports.getJsonSchemaCallback = _getJsonSchemaCallback;
function _setGetJsonSchemaCallback(func) { exports.getJsonSchemaCallback = func; }
exports._setGetJsonSchemaCallback = _setGetJsonSchemaCallback;
function _resetGetJsonSchemaCallback() { exports.getJsonSchemaCallback = _getJsonSchemaCallback; }
exports._resetGetJsonSchemaCallback = _resetGetJsonSchemaCallback;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var parsers_1 = __webpack_require__(1);
var serializer_1 = __webpack_require__(1);
var connectionOptionsSerializationInfo = [
    { propertyName: 'closeConnection', modelName: '@CloseConnection', from: parsers_1.parseBool },
    { propertyName: 'commandTimeout', modelName: '@DbCommandTimeout', from: function (s) { var val = parseInt(s); if (isNaN(val))
            val = null; return ko.observable(val); }, defaultVal: null },
];
var ConnectionOptions = (function () {
    function ConnectionOptions(model, serializer) {
        this.closeConnection = ko.observable(true);
        this.commandTimeout = ko.observable(null);
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    ConnectionOptions.prototype.getInfo = function () {
        return connectionOptionsSerializationInfo;
    };
    return ConnectionOptions;
}());
exports.ConnectionOptions = ConnectionOptions;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _functions_1 = __webpack_require__(10);
exports.expressionFunctions = (function (addins) { return _functions_1.insertInFunctionDisplay(addins); })({
    'String': {
        'CreateTable': [{ paramCount: 1, text: 'CreateTable(, )', displayName: 'CreateTable(Column1, ..., ColumnN)', descriptionStringId: 'ExpressionEditorStringId.Function_CreateTable' }]
    }
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.customQuerySerializationsInfo = [
    { propertyName: 'type', modelName: '@Type' },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'sqlString', modelName: 'Sql', defaultVal: '' },
    { propertyName: 'parameters', modelName: 'Parameters', array: true },
    { propertyName: 'itemType', modelName: '@ItemType' }
];


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.masterDetailRelationSerializationsInfo = [
    { propertyName: 'masterQuery', modelName: '@Master' },
    { propertyName: 'detailQuery', modelName: '@Detail' },
    { propertyName: '_customName', modelName: '@Name' },
    {
        propertyName: 'keyColumns', modelName: 'KeyColumns', array: true, info: [
            { propertyName: 'masterColumn', modelName: '@Master' },
            { propertyName: 'detailColumn', modelName: '@Detail' },
            { propertyName: 'itemType', modelName: '@ItemType' }
        ]
    },
    { propertyName: 'itemType', modelName: '@ItemType' }
];


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var serializer_1 = __webpack_require__(1);
var parsers_1 = __webpack_require__(1);
var SqlDataConnection = (function () {
    function SqlDataConnection(model, serializer) {
        this.name = ko.observable();
        this.parameteres = ko.observable();
        this.fromAppConfig = ko.observable(true);
        serializer = serializer || new serializer_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    SqlDataConnection.from = function (model, serializer) {
        return new SqlDataConnection(model, serializer);
    };
    SqlDataConnection.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, sqlDataConnectionSerializationInfo, refs);
    };
    SqlDataConnection.prototype.getInfo = function () {
        return sqlDataConnectionSerializationInfo;
    };
    return SqlDataConnection;
}());
exports.SqlDataConnection = SqlDataConnection;
var sqlDataConnectionSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'parameteres', modelName: 'Parameters' },
    { propertyName: 'fromAppConfig', modelName: '@FromAppConfig', defaultVal: false, from: parsers_1.parseBool }
];


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tableQuerySerializationsInfo = [
    { propertyName: 'type', modelName: '@Type' },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'parameters', modelName: 'Parameters', array: true },
    {
        propertyName: '_tablesObject', modelName: 'Tables', info: [
            {
                propertyName: 'tables', modelName: 'SelectedTables', array: true, info: [
                    { propertyName: 'name', modelName: '@Name' },
                    { propertyName: 'alias', modelName: '@Alias' }
                ]
            }
        ]
    },
    { propertyName: 'filterString', modelName: 'Filter', defaultVal: '' },
    { propertyName: 'itemType', modelName: '@ItemType' }
];


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.storedProcQuerySerializationsInfo = [
    { propertyName: 'type', modelName: '@Type' },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'procName', modelName: 'ProcName' },
    { propertyName: 'parameters', modelName: 'Parameters', array: true },
    { propertyName: 'itemType', modelName: '@ItemType' }
];


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pageFactory_1 = __webpack_require__(39);
var WizardPageSectionFactory = (function (_super) {
    __extends(WizardPageSectionFactory, _super);
    function WizardPageSectionFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardPageSectionFactory.prototype.registerMetadata = function (pageId, metadata) {
        _super.prototype.registerMetadata.call(this, pageId, metadata);
        if (metadata.position === undefined)
            metadata.position = Object.keys(this.metadata).length - 1;
        if (metadata.recreate === undefined)
            metadata.recreate = false;
        if (metadata.disabledText === undefined)
            metadata.disabledText = '';
    };
    return WizardPageSectionFactory;
}(pageFactory_1.PageFactory));
exports.WizardPageSectionFactory = WizardPageSectionFactory;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(1);
var stateManager_1 = __webpack_require__(76);
var _wizardPageSectionIterator_1 = __webpack_require__(119);
var eventManager_1 = __webpack_require__(1);
var wizard_1 = __webpack_require__(14);
var _utils_1 = __webpack_require__(13);
var WizardPageProcessor = (function (_super) {
    __extends(WizardPageProcessor, _super);
    function WizardPageProcessor(pageFactory, _loadingState, _nextAction) {
        var _this = _super.call(this) || this;
        _this.pageFactory = pageFactory;
        _this.events = new eventManager_1.EventManager();
        _this._loadingTimeout = null;
        _this._changeTimeout = null;
        _this.sections = [];
        _this.isLoading = ko.observable(false);
        if (_loadingState)
            _this._loadingState = _loadingState;
        if (_nextAction)
            _this._extendedNextAction = _nextAction;
        _this._disposables.push(_this.events);
        return _this;
    }
    WizardPageProcessor.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.sections.forEach(function (x) { return x.resetPage(); });
        this.sections = [];
    };
    WizardPageProcessor.prototype._createLoadingState = function (page) {
        var _this = this;
        if (!page[WizardPageProcessor.__loadingStateFunctionName]) {
            page[WizardPageProcessor.__loadingStateFunctionName] = function (newVal) { return _this._loadingState(newVal); };
        }
    };
    WizardPageProcessor.prototype._createNextAction = function (page) {
        var _this = this;
        if (!page[wizard_1.BaseWizard.__nextActionFunctionName])
            page[wizard_1.BaseWizard.__nextActionFunctionName] = function () { return _this._extendedNextAction(); };
    };
    WizardPageProcessor.prototype._loadingState = function (active) {
        var _this = this;
        if (active) {
            this._loadingTimeout && clearTimeout(this._loadingTimeout);
            this._loadingTimeout = setTimeout(function () {
                _this.isLoading(true);
            }, 100);
        }
        else {
            this._loadingTimeout && clearTimeout(this._loadingTimeout);
            this.isLoading(false);
        }
    };
    WizardPageProcessor.prototype._extendedNextAction = function () { };
    WizardPageProcessor.prototype._resetPageById = function (pageId) {
        var page = this.getPageById(pageId);
        page.resetPage();
    };
    WizardPageProcessor.prototype.initialize = function (state, createIterator) {
        var _this = this;
        if (createIterator === void 0) { createIterator = function (pageFactory, stateManager) { return new _wizardPageSectionIterator_1.WizardPageSectionIterator(pageFactory, stateManager, function (pageId) { return _this._resetPageById(pageId); }); }; }
        this.events.call('beforeInitialize', { wizard: this, state: state });
        this.stateManager = new stateManager_1.StateManager(state, this.pageFactory);
        this.iterator = createIterator(this.pageFactory, this.stateManager);
        this.sections = [];
        Object.keys(this.pageFactory.metadata).forEach(function (key) {
            _this.sections.push(new _wizardPageSectionIterator_1.WizardPageSection(key, _this.pageFactory.metadata[key]));
        });
        this.sections = this.sections.sort(function (a, b) { return a.metadata.position - b.metadata.position; });
        this.events.call('afterInitialize', { wizard: this });
    };
    WizardPageProcessor.prototype._canNext = function (currentPage) {
        var pageMetadata = !this.isLoading() && currentPage && currentPage.page && this.pageFactory.getMetadata(currentPage.pageId);
        return pageMetadata && pageMetadata.canNext(currentPage.page);
    };
    WizardPageProcessor.prototype._canFinish = function (currentPage) {
        return !this.isLoading() && currentPage && this.pageFactory.getMetadata(currentPage.pageId).canFinish(currentPage.page);
    };
    WizardPageProcessor.prototype._initPage = function (page, force, stateChanged) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (stateChanged === void 0) { stateChanged = false; }
        this._createNextAction(page.page);
        if (page.onChange) {
            page.onChange(function () {
                _this._changeTimeout && clearTimeout(_this._changeTimeout);
                _this._changeTimeout = setTimeout(function () {
                    _this._nextAction(page);
                }, 100);
            });
        }
        else
            throw Error('Page with id ' + page.pageId + ' cannot be used in AutoNavigation, because it does not have method OnChange');
        return page.initialize(this.stateManager.getPageState(page.pageId), force, stateChanged).always(function () { return _this._loadingState(false); });
    };
    WizardPageProcessor.prototype.getPageById = function (pageId) {
        return this.sections.filter(function (x) { return x.pageId === pageId; })[0];
    };
    WizardPageProcessor.prototype.start = function () {
        var _this = this;
        this.events.call('beforeStart', { wizard: this });
        this._loadingState(true);
        var page = this.iterator.getStartPage();
        this.events.call('beforePageInitialize', _utils_1._createBeforeInitializePageEventArgs(page, this));
        this._initPage(page).done(function () {
            var pageSection = _this.getPageById(page.pageId);
            if (pageSection) {
                pageSection.setPage(page);
                _this.events.call('afterPageInitialize', _utils_1._createPageEventArgs(page, _this));
                _this._nextAction(page);
            }
            else {
                throw Error('Page Section with id ' + page.pageId + ' is not found.');
            }
        });
    };
    WizardPageProcessor.prototype.finishAction = function () {
        var _this = this;
        var deferred = $.Deferred();
        var resolved = false;
        for (var i = this.sections.length - 1; i >= 0; i--) {
            if (this.sections[i].page()) {
                this.sections[i].page().commit().done(function (result) {
                    if (_this.sections[i].page().isChanged) {
                        _this.events.call('beforeFinish', { wizardModel: _this, state: _this.stateManager.getCurrentState() });
                        _this.stateManager.setPageState(_this.sections[i].page().pageId, result);
                        _this.events.call('afterFinish', { wizardResult: _this, state: _this.stateManager.getCurrentState() });
                    }
                }).always(function () { return deferred.resolve(); });
                resolved = true;
                break;
            }
        }
        if (!resolved)
            deferred.resolve();
        return deferred.promise();
    };
    WizardPageProcessor.prototype._nextAction = function (currentPage, parentIsChanged) {
        var _this = this;
        if (parentIsChanged === void 0) { parentIsChanged = false; }
        if (!this._canNext(currentPage) && !this._canFinish(currentPage)) {
            currentPage.resetCommitedState();
            return this.iterator.resetNextPages(currentPage.pageId);
        }
        this._loadingState(true);
        currentPage.commit().done(function (result) {
            if (currentPage.isChanged || parentIsChanged || currentPage.page && currentPage.page.changeAlways) {
                _this.stateManager.setPageState(currentPage.pageId, result);
                _this.iterator.getNextPage(currentPage.pageId).done(function (pages) {
                    if (pages && pages.length > 0) {
                        pages.forEach(function (page) {
                            var containedPage = _this.getPageById(page.pageId);
                            var page = containedPage && containedPage.page() || page;
                            _this.events.call('beforePageInitialize', _utils_1._createBeforeInitializePageEventArgs(page, _this));
                            _this._initPage(page, !!containedPage.page(), currentPage.isChanged || parentIsChanged).done(function () {
                                _this.getPageById(page.pageId).setPage(page);
                                _this.events.call('afterPageInitialize', _utils_1._createPageEventArgs(page, _this));
                                _this._nextAction(page, currentPage.isChanged);
                            });
                        });
                    }
                    else
                        _this._loadingState(false);
                    currentPage.isChanged = false;
                }).fail(function () { return _this._loadingState(false); });
            }
            else
                _this._loadingState(false);
        }).fail(function () { return _this._loadingState(false); });
    };
    WizardPageProcessor.__loadingStateFunctionName = '__loadingState';
    return WizardPageProcessor;
}(utils_1.Disposable));
exports.WizardPageProcessor = WizardPageProcessor;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var _wrappedWizardPageSection_1 = __webpack_require__(120);
var WizardPageSection = (function () {
    function WizardPageSection(pageId, metadata) {
        this.pageId = pageId;
        this.metadata = metadata;
        this.page = ko.observable(null);
    }
    WizardPageSection.prototype.resetPage = function () {
        this.page() && this.page().dispose();
        this.page(null);
    };
    WizardPageSection.prototype.setPage = function (page) {
        if (this.page() !== page)
            this.page(page);
    };
    return WizardPageSection;
}());
exports.WizardPageSection = WizardPageSection;
var WizardPageSectionIterator = (function () {
    function WizardPageSectionIterator(pageFactory, stateManager, _resetPageCallback) {
        this.pageFactory = pageFactory;
        this.stateManager = stateManager;
        this._resetPageCallback = _resetPageCallback;
        this._pagesIds = [];
        this._pages = [];
    }
    WizardPageSectionIterator.prototype._resetPages = function (fromIndex, resetPage) {
        var _this = this;
        if (resetPage === void 0) { resetPage = function (pageId) { return _this._resetPage(pageId); }; }
        if (fromIndex < this._pagesIds.length) {
            for (var index = this._pagesIds.length - 1; index >= fromIndex; index--) {
                this._pagesIds[index].forEach(function (pageId) { return resetPage(pageId); });
                this._pagesIds.splice(index, 1);
            }
        }
    };
    WizardPageSectionIterator.prototype._tryResetPageByMetadata = function (pageId) {
        if (this.pageFactory.getMetadata(pageId)['recreate']) {
            this._resetPage(pageId);
            return true;
        }
        return false;
    };
    WizardPageSectionIterator.prototype._resetPage = function (pageId) {
        this.stateManager.resetPageState(pageId);
        this._resetPageCallback(pageId);
        var page = this._getPage(pageId);
        if (page) {
            page.dispose();
            this._pages.splice(this._pages.indexOf(page), 1);
        }
    };
    WizardPageSectionIterator.prototype._createNewPage = function (nextPageId) {
        var pageMetadata = this.pageFactory.getMetadata(nextPageId);
        return new _wrappedWizardPageSection_1.WrappedWizardPageSection(nextPageId, pageMetadata.create(), pageMetadata);
    };
    WizardPageSectionIterator.prototype._getPage = function (pageId) {
        return this._pages.filter(function (x) { return x.pageId === pageId; })[0];
    };
    WizardPageSectionIterator.prototype._getNextPage = function (nextPageIds) {
        var _this = this;
        return $.Deferred().resolve(nextPageIds.map(function (nextPageId) {
            var page = _this._getPage(nextPageId);
            if (!page || _this._tryResetPageByMetadata(nextPageId)) {
                page = _this._createNewPage(nextPageId);
                _this._pages.push(page);
            }
            return page;
        })).promise();
    };
    WizardPageSectionIterator.prototype._getPageIndex = function (pageId) {
        return this._pagesIds.indexOf(this._pagesIds.filter(function (x) { return x.some(function (y) { return y === pageId; }); })[0]);
    };
    WizardPageSectionIterator.prototype.resetNextPages = function (pageId) {
        this._resetPages(this._getPageIndex(pageId) + 1);
    };
    WizardPageSectionIterator.prototype.getStartPage = function () {
        var startPageId = this.getNextPageId();
        var pageMetadata = this.pageFactory.getMetadata(startPageId);
        var page = new _wrappedWizardPageSection_1.WrappedWizardPageSection(startPageId, pageMetadata.create(), pageMetadata);
        this._pagesIds.push([startPageId]);
        return page;
    };
    WizardPageSectionIterator.prototype.getNextPage = function (currentPageId) {
        var _this = this;
        var index = this._getPageIndex(currentPageId);
        var nextPageIds = this.getNextPageId(currentPageId);
        if (!nextPageIds) {
            this.resetNextPages(currentPageId);
            return $.Deferred().reject().promise();
        }
        if (!nextPageIds['push']) {
            nextPageIds = [nextPageIds];
        }
        if (JSON.stringify(this._pagesIds[index + 1]) !== JSON.stringify(nextPageIds)) {
            this._resetPages(index + 1, function (pageId) {
                if (nextPageIds.indexOf(pageId) === -1) {
                    _this._resetPage(pageId);
                }
            });
            this._pagesIds.push(nextPageIds);
        }
        return this._getNextPage(nextPageIds);
    };
    WizardPageSectionIterator.prototype.getCurrentState = function () {
        return this.stateManager.getCurrentState();
    };
    WizardPageSectionIterator.prototype.getNextPageId = function (pageId) {
        return '';
    };
    return WizardPageSectionIterator;
}());
exports.WizardPageSectionIterator = WizardPageSectionIterator;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var wizardPage_1 = __webpack_require__(7);
var WrappedWizardPageSection = (function (_super) {
    __extends(WrappedWizardPageSection, _super);
    function WrappedWizardPageSection(pageId, page, metadata) {
        var _this = _super.call(this, pageId, page, metadata.template, metadata.description) || this;
        _this.pageId = pageId;
        _this.page = page;
        if (page.onChange) {
            _this.onChange = function (callback) {
                page.onChange(function () {
                    callback();
                    metadata.onChange && metadata.onChange();
                });
            };
        }
        return _this;
    }
    return WrappedWizardPageSection;
}(wizardPage_1._WrappedWizardPage));
exports.WrappedWizardPageSection = WrappedWizardPageSection;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(9);
var utils_2 = __webpack_require__(1);
var _options_1 = __webpack_require__(53);
var localization_utils_1 = __webpack_require__(1);
var customSqlQuery_1 = __webpack_require__(32);
var _infoMessageHelpers_1 = __webpack_require__(0);
var _ace_available_1 = __webpack_require__(10);
var SelectStatementQueryControl = (function (_super) {
    __extends(SelectStatementQueryControl, _super);
    function SelectStatementQueryControl(sqlTextProvider, disableCustomSql) {
        var _this = _super.call(this) || this;
        _this._tableQueryString = ko.observable('');
        _this._query = ko.observable();
        _this._needToCustomizeParameters = ko.pureComputed(function () {
            return _this._query() && (_this._query().type() === utils_1.SqlQueryType.customSqlQuery || _this._query().parameters().length > 0);
        });
        _this.template = 'dxrd-select-control';
        _this.aceOptions = _options_1.createDefaultSQLAceOptions();
        _this.additionalOptions = _options_1.createDefaultSQLAdditionalOptions(function (newVal) { _this.sqlString(newVal); });
        _this.aceAvailable = _ace_available_1.aceAvailable();
        _this.languageHelper = _options_1.createDefaultSQLLanguageHelper();
        _this.caption = function () { return localization_utils_1.getLocalization('SQL string:', 'DataAccessUIStringId.QueryControl_SqlString'); };
        _this.sqlString = ko.pureComputed({
            read: function () {
                return _this._query() && _this._query().type() === utils_1.SqlQueryType.customSqlQuery ? _this._query().sqlString() : _this._tableQueryString();
            },
            write: function (val) {
                if (_this._query().type() !== utils_1.SqlQueryType.customSqlQuery) {
                    var customQuery = new customSqlQuery_1.CustomSqlQuery({ '@Name': _this._query().name() }, _this._query().parent);
                    customQuery.parameters(_this._query().parameters());
                    customQuery.sqlString(val);
                    _this._query(customQuery);
                }
                else {
                    _this._query().sqlString(val);
                }
            }
        });
        _this.isNextDisabled = ko.pureComputed(function () {
            return !_this.sqlString() || !_this._needToCustomizeParameters();
        });
        _this.isFinishDisabled = ko.pureComputed(function () {
            return !_this.sqlString() || _this._needToCustomizeParameters();
        });
        _this._sqlTextProvider = sqlTextProvider;
        _this.disableCustomSql = function () { return disableCustomSql; };
        _this.aceOptions.readOnly = _this.disableCustomSql();
        _this._disposables.push(_this._needToCustomizeParameters, _this.sqlString);
        return _this;
    }
    SelectStatementQueryControl.prototype.setQuery = function (query, isInProcess) {
        var _this = this;
        if (this._query() !== query && query.type() === utils_1.SqlQueryType.tableQuery) {
            isInProcess && isInProcess(true);
            return this._sqlTextProvider.getQuerySqlText(query)
                .done(function (response) {
                if (response.errorMessage)
                    _infoMessageHelpers_1.ShowMessage(response.errorMessage);
                _this._tableQueryString(response.sqlSelectStatement);
                _this._query(query);
            })
                .always(function () { isInProcess && isInProcess(false); });
        }
        else {
            this._query(query);
            return $.Deferred().resolve().promise();
        }
    };
    SelectStatementQueryControl.prototype.getQuery = function () {
        return this._query();
    };
    Object.defineProperty(SelectStatementQueryControl.prototype, "runQueryBuilderDisabled", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return SelectStatementQueryControl;
}(utils_2.Disposable));
exports.SelectStatementQueryControl = SelectStatementQueryControl;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var requestwrapper_1 = __webpack_require__(8);
var _objectSchemaProvider_1 = __webpack_require__(82);
var _chooseObjectTypes_1 = __webpack_require__(83);
var objectDataSource_1 = __webpack_require__(23);
var objectSchema_1 = __webpack_require__(52);
var pageId_1 = __webpack_require__(5);
var localization_utils_1 = __webpack_require__(1);
var ChooseObjectDataSourceTypesPage = (function (_super) {
    __extends(ChooseObjectDataSourceTypesPage, _super);
    function ChooseObjectDataSourceTypesPage(_requestWrapper) {
        if (_requestWrapper === void 0) { _requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this) || this;
        _this._requestWrapper = _requestWrapper;
        _this._objectDataSource = new objectDataSource_1.ObjectDataSource();
        _this._types = ko.observableArray([]);
        _this._disposables.push(_this._provider = new _objectSchemaProvider_1.ObjectSchemaProvider(_this._requestWrapper), _this._chooseObjectType = new _chooseObjectTypes_1.ChooseObjectTypes(_this._types, _this._provider));
        return _this;
    }
    ChooseObjectDataSourceTypesPage.prototype.canNext = function () {
        return !!this._selectedTypeName;
    };
    ChooseObjectDataSourceTypesPage.prototype.canFinish = function () {
        return false;
    };
    ChooseObjectDataSourceTypesPage.prototype.commit = function () {
        return $.Deferred().resolve({
            selectedType: this._selectedTypeName,
            selectedObjectType: this._chooseObjectType.selectedType(),
            ctor: this._chooseObjectType.selectedCtor()
        }).promise();
    };
    ChooseObjectDataSourceTypesPage.prototype.initialize = function (state) {
        var _this = this;
        this._objectDataSource.setState(state);
        this._provider.getObjectTypeDescriptions(state.context).done(function (schema) {
            schema.types.forEach(function (type) { return type.members.splice(0, 0, objectSchema_1.ObjectDataMember.empty()); });
            _this._types(schema.types || []);
            if (schema.types.length > 0) {
                _this._chooseObjectType.selectedPath(schema.types[0].name);
            }
        });
        return $.Deferred().resolve().promise();
    };
    Object.defineProperty(ChooseObjectDataSourceTypesPage.prototype, "_selectedTypeName", {
        get: function () {
            return !!this._chooseObjectType.selectedType() ? this._chooseObjectType.selectedType().name : null;
        },
        enumerable: true,
        configurable: true
    });
    return ChooseObjectDataSourceTypesPage;
}(wizardPage_1.WizardPageBase));
exports.ChooseObjectDataSourceTypesPage = ChooseObjectDataSourceTypesPage;
function _registerChooseObjectDataSourceTypesPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(pageId_1.ObjectDataSourceWizardPageId.ChooseTypesPage, {
        setState: function (data, state) {
            state.selectedType = data.selectedType;
            state.selectedObjectType = data.selectedObjectType;
            state.ctor = data.ctor;
        },
        getState: function (state) {
            return state.objectDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.selectedType = defaultState.selectedType;
            state.selectedObjectType = defaultState.selectedObjectType;
            state.ctor = defaultState.ctor;
        },
        create: function () {
            return new ChooseObjectDataSourceTypesPage(dataSourceWizardOptions.requestWrapper);
        },
        description: localization_utils_1.getLocalization('Choose the type and its constructor.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseType_Description'),
        template: 'dxrd-page-objectdatasource-types'
    });
}
exports._registerChooseObjectDataSourceTypesPage = _registerChooseObjectDataSourceTypesPage;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var requestwrapper_1 = __webpack_require__(8);
var _chooseObjectDataMembers_1 = __webpack_require__(84);
var objectDataSource_1 = __webpack_require__(23);
var pageId_1 = __webpack_require__(5);
var localization_utils_1 = __webpack_require__(1);
var ChooseObjectDataSourceDataMembersPage = (function (_super) {
    __extends(ChooseObjectDataSourceDataMembersPage, _super);
    function ChooseObjectDataSourceDataMembersPage(_requestWrapper) {
        if (_requestWrapper === void 0) { _requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this) || this;
        _this._requestWrapper = _requestWrapper;
        _this._objectDataSource = new objectDataSource_1.ObjectDataSource();
        _this._type = ko.observable();
        _this._ctor = ko.observable();
        _this._disposables.push(_this._chooseObjectDataMember = new _chooseObjectDataMembers_1.ChooseObjectDataMembers(_this._type, _this._ctor));
        return _this;
    }
    ChooseObjectDataSourceDataMembersPage.prototype.initialize = function (state) {
        this._objectDataSource.setState(state);
        this._type(state.selectedObjectType);
        this._ctor(state.ctor);
        return $.Deferred().resolve().promise();
    };
    ChooseObjectDataSourceDataMembersPage.prototype.canNext = function () {
        return !!this._needParametersPage;
    };
    ChooseObjectDataSourceDataMembersPage.prototype.canFinish = function () {
        return !this._needParametersPage;
    };
    ChooseObjectDataSourceDataMembersPage.prototype.commit = function () {
        return $.Deferred().resolve({
            selectedType: this._type().name,
            ctor: this._ctor(),
            dataMember: !this._selectedDataMember || this._selectedDataMember.isEntireObject() ? undefined : this._selectedDataMember,
        }).promise();
    };
    Object.defineProperty(ChooseObjectDataSourceDataMembersPage.prototype, "_selectedDataMember", {
        get: function () {
            var selectedDataMembers = this._chooseObjectDataMember.selectedDataMembers();
            return !!selectedDataMembers ? selectedDataMembers[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChooseObjectDataSourceDataMembersPage.prototype, "_needParametersPage", {
        get: function () {
            return (!!this._selectedDataMember && this._selectedDataMember.parameters.length > 0) ||
                (!!this._ctor() && this._ctor().parameters.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    return ChooseObjectDataSourceDataMembersPage;
}(wizardPage_1.WizardPageBase));
exports.ChooseObjectDataSourceDataMembersPage = ChooseObjectDataSourceDataMembersPage;
function _registerChooseObjectDataSourceDataMembersPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(pageId_1.ObjectDataSourceWizardPageId.ChooseDataMembersPage, {
        setState: function (data, state) {
            state.selectedType = data.selectedType;
            state.ctor = data.ctor;
            state.dataMember = data.dataMember;
        },
        getState: function (state) {
            return state.objectDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.dataMember = defaultState.dataMember;
        },
        create: function () {
            return new ChooseObjectDataSourceDataMembersPage(dataSourceWizardOptions.requestWrapper);
        },
        description: localization_utils_1.getLocalization('Choose the entire object or a data member to bind.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseDataMember_Description'),
        template: 'dxrd-page-objectdatasource-datamembers'
    });
}
exports._registerChooseObjectDataSourceDataMembersPage = _registerChooseObjectDataSourceDataMembersPage;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var _utils_1 = __webpack_require__(13);
var localization_utils_1 = __webpack_require__(1);
var ChooseAvailableItemPage = (function (_super) {
    __extends(ChooseAvailableItemPage, _super);
    function ChooseAvailableItemPage(items, canCreateNew) {
        var _a;
        if (canCreateNew === void 0) { canCreateNew = true; }
        var _this = _super.call(this) || this;
        _this.items = items;
        _this.selectedItems = ko.observableArray([]);
        _this.operations = [
            { text: _this.existingOperationText, createNew: false },
            { text: _this.createNewOperationText, createNew: true }
        ];
        _this.selectedOperation = ko.observable(_this.operations[0]);
        _this._createNew = ko.pureComputed(function () { return _this.selectedOperation().createNew; });
        _this.canCreateNew = ko.observable(canCreateNew);
        (_a = _this._disposables).push.apply(_a, _utils_1.subscribeProperties([_this.selectedOperation, _this.selectedItems], function () { return _this._onChange(); }));
        return _this;
    }
    ChooseAvailableItemPage.prototype.canNext = function () {
        return this.selectedItems().length !== 0 || this.selectedOperation().createNew;
    };
    ChooseAvailableItemPage.prototype.initialize = function (state) {
        var item = this._getSelectedItem(state);
        this.selectedItems(item ? [item] : []);
        return $.Deferred().resolve(this).promise();
    };
    ChooseAvailableItemPage.prototype._displayExpr = function (item) {
        return item.description || item.name;
    };
    ChooseAvailableItemPage.prototype._getSelectedItem = function (state) {
        return this.items()[0];
    };
    ChooseAvailableItemPage.prototype.onDblClick = function () {
        this[wizard_1.BaseWizard.__nextActionFunctionName] && this[wizard_1.BaseWizard.__nextActionFunctionName]();
    };
    Object.defineProperty(ChooseAvailableItemPage.prototype, "createNewOperationText", {
        get: function () {
            return localization_utils_1.getLocalization("No, I'd like to create a new data source", 'AnalyticsCoreStringId.Wizard_CreateNewDataSource');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChooseAvailableItemPage.prototype, "existingOperationText", {
        get: function () {
            return localization_utils_1.getLocalization('Yes, let me choose an existing data source from the list', 'AnalyticsCoreStringId.Wizard_ChooseDataSourceFromList');
        },
        enumerable: true,
        configurable: true
    });
    return ChooseAvailableItemPage;
}(wizardPage_1.WizardPageBase));
exports.ChooseAvailableItemPage = ChooseAvailableItemPage;
var wizard_1 = __webpack_require__(14);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var chooseJsonConnectionPage_1 = __webpack_require__(55);
var requestwrapper_1 = __webpack_require__(8);
var chooseJsonSourcePage_1 = __webpack_require__(40);
var pageId_1 = __webpack_require__(5);
var localization_utils_1 = __webpack_require__(1);
var SpecifyJsonConnectionPage = (function (_super) {
    __extends(SpecifyJsonConnectionPage, _super);
    function SpecifyJsonConnectionPage(connections, allowCreateNewJsonConnection, itemsProvider, _requestWrapper) {
        if (_requestWrapper === void 0) { _requestWrapper = new requestwrapper_1.RequestWrapper(); }
        var _this = _super.call(this, connections, allowCreateNewJsonConnection) || this;
        _this._requestWrapper = _requestWrapper;
        _this._disposables.push(_this._specifySourceData = new chooseJsonSourcePage_1.ChooseJsonSourcePage(_requestWrapper, itemsProvider));
        _this._specifySourceData.onChange(function () { return _this._onChange(); });
        return _this;
    }
    SpecifyJsonConnectionPage.prototype.commit = function () {
        var deffered = $.Deferred();
        var _promise;
        if (this._createNew()) {
            _promise = this._specifySourceData.commit();
        }
        else {
            _promise = _super.prototype.commit.call(this);
        }
        _promise.done(function (state) {
            deffered.resolve(state);
        });
        return deffered.promise();
    };
    SpecifyJsonConnectionPage.prototype.canNext = function () {
        if (this._createNew()) {
            return this._specifySourceData.canNext();
        }
        else {
            return _super.prototype.canNext.call(this);
        }
    };
    SpecifyJsonConnectionPage.prototype.initialize = function (state) {
        var _this = this;
        var deffered = $.Deferred();
        _super.prototype.initialize.call(this, state).done(function () {
            _this._specifySourceData.initialize(state).done(function () {
                deffered.resolve(_this);
            });
        });
        return deffered.promise();
    };
    return SpecifyJsonConnectionPage;
}(chooseJsonConnectionPage_1.ChooseJsonConnectionPage));
exports.SpecifyJsonConnectionPage = SpecifyJsonConnectionPage;
function _registerSpecifyJsonConnectionPage(factory, connections, allowCreateNewJsonConnection, getItemsProviderCallBack) {
    factory.registerMetadata(pageId_1.JsonDataSourceWizardPageId.SpecifyJsonConnectionPage, {
        create: function () { return new SpecifyJsonConnectionPage(connections, allowCreateNewJsonConnection, getItemsProviderCallBack && getItemsProviderCallBack()); },
        description: allowCreateNewJsonConnection ?
            localization_utils_1.getLocalization('Do you want to use an existing data connection?', 'AnalyticsCoreStringId.JsonDSWizard_ChooseConnection_Description') :
            localization_utils_1.getLocalization('Choose a data connection.', 'AnalyticsCoreStringId.SqlDSWizard_PageChooseConnection'),
        getState: function (state) { return state.jsonDataSourceWizard; },
        setState: function (data, state) {
            state.connectionName = data.connectionName;
            state.jsonSource = data.jsonSource;
            state.newConnectionName = data.newConnectionName;
        },
        resetState: function (state, defaultState) {
            state.connectionName = defaultState.connectionName;
            state.jsonSource = defaultState.jsonSource;
            state.newConnectionName = defaultState.newConnectionName;
        },
        template: 'dxrd-page-specify-connection'
    });
}
exports._registerSpecifyJsonConnectionPage = _registerSpecifyJsonConnectionPage;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parameterTypeToPropertyMap = {
    'PathParameter': 'pathParameters',
    'QueryParameter': 'queryParameters',
    'Header': 'headers',
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var editor_1 = __webpack_require__(6);
var _utils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var _jsonSourceSettings_1 = __webpack_require__(85);
var _ace_available_1 = __webpack_require__(10);
var JsonStringEditor = (function (_super) {
    __extends(JsonStringEditor, _super);
    function JsonStringEditor(modelPropertyInfo, level, parentDisabled, textToSearch) {
        var _this = _super.call(this, modelPropertyInfo, level, parentDisabled, textToSearch) || this;
        _this.aceEditorHasErrors = ko.observable(false);
        _this.aceAvailable = _ace_available_1.aceAvailable();
        _this.editorContainer = ko.observable();
        _this.languageHelper = {
            getLanguageMode: function () { return 'ace/mode/json'; },
            createCompleters: function () { return []; }
        };
        _this.aceOptions = {
            showLineNumbers: false,
            highlightActiveLine: false,
            showPrintMargin: false,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        };
        _this.isValid = ko.computed(function () {
            return _this._model() && _this._model().isValid();
        });
        _this.additionalOptions = {
            onChangeAnnotation: function (session) {
                var annotations = session && session.getAnnotations() || [];
                _this._model() && _this._model().aceEditorHasErrors && _this._model().aceEditorHasErrors(annotations.filter(function (annotation) { return annotation.type === 'error' || annotation.type === 'warning'; }).length > 0);
            },
            onBlur: function () {
                var editorContainer = _this.editorContainer();
                if (editorContainer) {
                    _this.value(editorContainer.getValue());
                }
            }
        };
        _this.jsonStringValidationRules = [{
                type: 'custom',
                reevaluate: true,
                validationCallback: function (options) { return _this.isValid(); },
                get message() {
                    return _jsonSourceSettings_1.getLocalizedValidationErrorMessage(localization_utils_1.getLocalization('The value cannot be empty and should have a valid format.', 'AnalyticsCoreStringId.ValueIsRequiredOrInvalidFormat_Error'), localization_utils_1.getLocalization('JSON String:', 'DataAccessUIStringId.WizardPageChooseJsonSource_Custom'));
                }
            }];
        return _this;
    }
    JsonStringEditor.prototype.uploadFile = function (e) {
        var _this = this;
        if (e && e.event) {
            e.event.stopPropagation();
            e.event.preventDefault();
        }
        _utils_1.uploadFile({
            accept: '.json,.txt'
        }).done(function (result) {
            var fileContent = atob(result.content);
            if (fileContent.indexOf('ï»¿') === 0) {
                fileContent = fileContent.substr('ï»¿'.length);
            }
            _this.value(fileContent);
        });
    };
    JsonStringEditor.prototype.getUploadTitle = function () {
        return localization_utils_1.getLocalization('Upload JSON File', 'AnalyticsCoreStringId.UploadJsonFile_Title');
    };
    return JsonStringEditor;
}(editor_1.Editor));
exports.JsonStringEditor = JsonStringEditor;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _treeNodeItemsProvider_1 = __webpack_require__(129);
var JsonTreeNodeItemsProvider = (function (_super) {
    __extends(JsonTreeNodeItemsProvider, _super);
    function JsonTreeNodeItemsProvider(fieldListProvider, rootItems, generateTreeNode, generateTreeLeafNode) {
        return _super.call(this, fieldListProvider, rootItems, generateTreeNode, generateTreeLeafNode) || this;
    }
    JsonTreeNodeItemsProvider.prototype._getDefaultTreeNodeCheckState = function (item) {
        return item.isSelected;
    };
    JsonTreeNodeItemsProvider.prototype.getNodeByPath = function (pathRequest) {
        var listNode = this._rootItems().filter(function (item) { return item.path === (pathRequest.pathParts || [])[0]; })[0];
        if (!listNode)
            return;
        var childPath = listNode.path;
        for (var index = 1; index < pathRequest.pathParts.length; index++) {
            if (!listNode)
                return;
            childPath += '.' + pathRequest.pathParts[index];
            listNode = listNode.children().filter(function (item) { return item.path == childPath; })[0];
        }
        return listNode;
    };
    return JsonTreeNodeItemsProvider;
}(_treeNodeItemsProvider_1.TreeNodeItemsProvider));
exports.JsonTreeNodeItemsProvider = JsonTreeNodeItemsProvider;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var utils_1 = __webpack_require__(1);
var _treeListNode_1 = __webpack_require__(41);
var pathRequest_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
var TreeNodeItemsProvider = (function (_super) {
    __extends(TreeNodeItemsProvider, _super);
    function TreeNodeItemsProvider(fieldListProvider, rootItems, generateTreeNode, generateTreeLeafNode) {
        var _this = _super.call(this) || this;
        _this._fullTreeLoaded = false;
        _this._rootItems = ko.observableArray([]);
        _this._checkedRootNodesCount = ko.computed(function () {
            if (!_this._rootItems || _this._rootItems().length === 0)
                return 0;
            var count = 0;
            for (var i = 0; i < _this._rootItems().length && count < 1; i++) {
                count += _this._rootItems()[i].unChecked() ? 0 : 1;
            }
            return count;
        });
        _this.hasCheckedItems = ko.computed(function () {
            return !(_this._checkedRootNodesCount() === 0);
        });
        _this.getRootItems = function () { return _this._rootItems(); };
        _this.getItems = function (pathRequest, collectChilds) {
            if (collectChilds === void 0) { collectChilds = false; }
            var result = $.Deferred();
            if (!pathRequest.fullPath && pathRequest.pathParts.length === 0) {
                result.resolve(_this._rootItems());
            }
            else {
                fieldListProvider.getItems(pathRequest).done(function (value) {
                    var currentParentNode = _this._getParentNode(pathRequest);
                    if (!currentParentNode)
                        return result.reject();
                    if (currentParentNode.children().length === 0) {
                        var array = [];
                        var listPath = [];
                        value.forEach(function (item) {
                            var isChecked = _this._getDefaultTreeNodeCheckState(item);
                            if (_utils_1.isList(item)) {
                                if (pathRequest.pathParts.length <= 5) {
                                    listPath.push([].concat(pathRequest.fullPath.split('.'), [item.name]));
                                    array.push(generateTreeNode(item, isChecked, [pathRequest.fullPath, item.name].join('.')));
                                }
                            }
                            else {
                                array.push(generateTreeLeafNode(item, isChecked, [pathRequest.fullPath, item.name].join('.')));
                            }
                        });
                        currentParentNode.initializeChildren(array);
                        if (collectChilds)
                            $.when.apply($, listPath.map(function (x) { return _this.getItems(new pathRequest_1.PathRequest(x.join('.'), x), collectChilds); })).always(function () { return result.resolve(array); });
                        else
                            result.resolve(array);
                    }
                    else {
                        result.resolve(currentParentNode.children());
                    }
                });
            }
            return result.promise();
        };
        _this._disposables.push(rootItems.subscribe(function (newValue) {
            _this._fullTreeLoaded = false;
            _this._rootItems(newValue.map(function (item) {
                var isChecked = _this._getDefaultTreeNodeCheckState(item);
                return generateTreeNode(item, isChecked, item.name);
            }));
        }));
        _this._disposables.push(_this.hasCheckedItems);
        return _this;
    }
    TreeNodeItemsProvider.prototype._createTree = function () {
        var _this = this;
        if (!this._fullTreeLoaded)
            return $.when.apply($, this._rootItems().map(function (item) { return _this.getItems(new pathRequest_1.PathRequest(item.path), true); })).always(function () { return _this._fullTreeLoaded = true; });
        else {
            return $.Deferred().resolve().promise();
        }
    };
    TreeNodeItemsProvider.prototype._createTreePart = function (pathParts, deferred, checkedPath) {
        var _this = this;
        if (deferred === void 0) { deferred = $.Deferred(); }
        if (this._fullTreeLoaded)
            return deferred.resolve().promise();
        if (pathParts.length === 0)
            return deferred.resolve();
        if (!checkedPath) {
            var deferred = $.Deferred();
            if (pathParts.length === 1) {
                this.getItems(new pathRequest_1.PathRequest(pathParts[0], pathParts)).done(function () { return deferred.resolve(); }).fail(function () { return deferred.reject(); });
            }
            else
                this._createTreePart(pathParts.slice(1), deferred, [pathParts[0]]);
            return deferred;
        }
        else {
            var newParentPath = [].concat([], checkedPath, pathParts[0]);
            var request = new pathRequest_1.PathRequest(newParentPath.join('.'), newParentPath);
            if (!this._getParentNode(request)) {
                this.getItems(new pathRequest_1.PathRequest(checkedPath.join('.'), checkedPath)).done(function (res) {
                    _this._createTreePart(pathParts.slice(1), deferred, newParentPath);
                }).fail(function () { return deferred.reject(); });
            }
            else {
                this._createTreePart(pathParts.slice(1), deferred, newParentPath);
            }
        }
    };
    TreeNodeItemsProvider.prototype._setChecked = function (item) {
        var _this = this;
        item.setChecked(true);
        if (item instanceof _treeListNode_1.DataMemberTreeNode) {
            item.children().forEach(function (x) { return _this._setChecked(x); });
        }
    };
    TreeNodeItemsProvider.prototype.selectAllItems = function (onlyRoot) {
        var _this = this;
        if (onlyRoot === void 0) { onlyRoot = true; }
        var deferred = $.Deferred();
        this._createTree().always(function () {
            if (onlyRoot) {
                _this._rootItems().forEach(function (x) { return x.setChecked(true); });
            }
            else {
                _this._rootItems().forEach(function (x) { return _this._setChecked(x); });
            }
            deferred.resolve();
        });
        return deferred.promise();
    };
    TreeNodeItemsProvider.prototype.selectItemsByPath = function (path) {
        var _this = this;
        var deferred = $.Deferred();
        var pathParts = path.split('.');
        this._createTreePart(pathParts).done(function () {
            _this.getItems(new pathRequest_1.PathRequest(pathParts.join('.'), pathParts)).done(function (items) {
                items.forEach(function (item) {
                    if (item instanceof _treeListNode_1.TreeNodeBase) {
                        item.setChecked(true);
                    }
                });
            }).always(function () { return deferred.resolve(); });
        });
        return deferred.promise();
    };
    TreeNodeItemsProvider.prototype.selectItemByPath = function (path) {
        var _this = this;
        var deferred = $.Deferred();
        var pathParts = path.split('.');
        this._createTreePart(pathParts).done(function () {
            var fieldName = pathParts.pop();
            _this.getItems(new pathRequest_1.PathRequest(pathParts.join('.'), pathParts)).done(function (items) {
                var item = items.filter(function (x) { return x.name === fieldName; })[0];
                if (item instanceof _treeListNode_1.TreeNodeBase) {
                    item.setChecked(true);
                }
            }).always(function () { return deferred.resolve(); });
        });
        return deferred.promise();
    };
    TreeNodeItemsProvider.prototype._getParentNode = function (pathRequest) {
        var parentNode = this._rootItems().filter(function (item) { return item.path === (pathRequest.id || pathRequest.ref); })[0];
        if (!parentNode)
            return;
        var childPath = parentNode.path;
        for (var index = 1; index < pathRequest.pathParts.length; index++) {
            if (!parentNode)
                return;
            childPath += '.' + pathRequest.pathParts[index];
            parentNode = parentNode.children().filter(function (item) { return _utils_1.isList(item) && item.path == childPath; })[0];
        }
        return parentNode;
    };
    TreeNodeItemsProvider.prototype._getDefaultTreeNodeCheckState = function (item) {
        return false;
    };
    return TreeNodeItemsProvider;
}(utils_1.Disposable));
exports.TreeNodeItemsProvider = TreeNodeItemsProvider;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var wizardPage_1 = __webpack_require__(7);
var dataSourceWizardState_1 = __webpack_require__(12);
var configureQueryPage_1 = __webpack_require__(24);
var dataSourceParameter_1 = __webpack_require__(11);
var _getNameHelpers_1 = __webpack_require__(0);
var editorsInfo_1 = __webpack_require__(6);
var utils_1 = __webpack_require__(9);
var localization_utils_1 = __webpack_require__(1);
var pageId_1 = __webpack_require__(5);
var ConfigureQueryParametersPage = (function (_super) {
    __extends(ConfigureQueryParametersPage, _super);
    function ConfigureQueryParametersPage(parametersConverter, _requestWrapper) {
        if (parametersConverter === void 0) { parametersConverter = {
            createParameterViewModel: function (parameter) { return parameter; },
            getParameterFromViewModel: function (parameterViewModel) { return parameterViewModel; }
        }; }
        var _this = _super.call(this) || this;
        _this.parametersConverter = parametersConverter;
        _this._requestWrapper = _requestWrapper;
        _this._sqlDataSourceWrapper = new configureQueryPage_1._SqlDataSourceWrapper(undefined, undefined, _this._requestWrapper);
        _this.removeButtonTitle = localization_utils_1.getLocalization('Remove', 'DataAccessUIStringId.Button_Remove');
        _this.parametersEditorOptions = {
            addHandler: function () {
                return _this.parametersConverter.createParameterViewModel(new dataSourceParameter_1.DataSourceParameter({
                    '@Name': _getNameHelpers_1.getUniqueNameForNamedObjectsArray(_this.parametersEditorOptions.values.peek().peek(), 'param'),
                    '@Type': 'System.Int32'
                }));
            },
            values: ko.observable(ko.observableArray([])),
            displayName: 'Parameters',
            level: 0,
            info: ko.observable({
                displayName: 'Parameters', localizationId: 'DevExpress.DataAccess.Sql.SqlQuery.Parameters',
                propertyName: 'parameters',
                modelName: 'Parameter',
                array: true,
                editor: editorsInfo_1.editorTemplates.getEditor('commonCollection'),
                template: '#dxrd-parameter-collection-item'
            }),
            editorTemplate: '#dxrd-wizard-datasource-parameters',
            hideButtons: ko.observable(false),
            collapsed: false
        };
        return _this;
    }
    ConfigureQueryParametersPage.prototype._isParametersValid = function () {
        return this.getParameters().every(function (x) { return x.isValid(); });
    };
    ConfigureQueryParametersPage.prototype.canNext = function () {
        return false;
    };
    ConfigureQueryParametersPage.prototype.canFinish = function () {
        return this._isParametersValid();
    };
    ConfigureQueryParametersPage.prototype.getParameters = function () {
        return this.parametersEditorOptions.values()();
    };
    ConfigureQueryParametersPage.prototype.initialize = function (data) {
        var _this = this;
        this._sqlDataSourceWrapper = dataSourceWizardState_1._restoreSqlDataSourceFromState(data, this._requestWrapper);
        this.parametersEditorOptions.hideButtons(this._sqlDataSourceWrapper.sqlQuery.type() === utils_1.SqlQueryType.storedProcQuery);
        setTimeout(function () {
            _this.parametersEditorOptions.values(ko.observableArray(_this._sqlDataSourceWrapper.sqlQuery.parameters().map(function (item) { return _this.parametersConverter.createParameterViewModel(item); })));
        }, 100);
        return $.Deferred().resolve().promise();
    };
    ConfigureQueryParametersPage.prototype.commit = function () {
        var _this = this;
        this._sqlDataSourceWrapper.sqlQuery.parameters(this.parametersEditorOptions.values()().map(function (item) { return _this.parametersConverter.getParameterFromViewModel(item); }));
        return $.Deferred().resolve({
            sqlDataSourceJSON: this._sqlDataSourceWrapper.save()
        }).promise();
    };
    return ConfigureQueryParametersPage;
}(wizardPage_1.WizardPageBase));
exports.ConfigureQueryParametersPage = ConfigureQueryParametersPage;
function _registerConfigureParametersPage(factory, requestWrapper, parametersConverter) {
    factory.registerMetadata(pageId_1.SqlDataSourceWizardPageId.ConfigureParametersPage, {
        create: function () { return new ConfigureQueryParametersPage(parametersConverter, requestWrapper); },
        getState: function (state) { return state.sqlDataSourceWizard; },
        setState: function (result, state) { return state.sqlDataSourceJSON = result.sqlDataSourceJSON; },
        resetState: function () { return void 0; },
        template: 'dxrd-page-configure-parameters',
        description: localization_utils_1.getLocalization('Configure query parameters.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureParameters')
    });
}
exports._registerConfigureParametersPage = _registerConfigureParametersPage;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var _arrayutils_1 = __webpack_require__(0);
var _treeListNode_1 = __webpack_require__(41);
var localization_utils_1 = __webpack_require__(1);
var _storedProceduresQueryControl_1 = __webpack_require__(77);
var utils_1 = __webpack_require__(1);
var DBSchemaItemsProvider = (function (_super) {
    __extends(DBSchemaItemsProvider, _super);
    function DBSchemaItemsProvider(dbSchemaProvider, customQueries, showQbCallBack, disableCustomSql, afterCheckToggled) {
        var _a;
        var _this = _super.call(this) || this;
        _this._callBack = ko.observable({
            deleteAction: function (name) {
                _this._customQueries
                    .remove(_arrayutils_1.findFirstItemMatchesCondition(_this._customQueries(), function (item) { return (item.name() || item.generateName()) === name; }));
            },
            showQbCallBack: null,
            disableCustomSql: false,
        });
        _this._checkedRootNodesCount = ko.pureComputed(function () {
            var count = 0;
            for (var i = 0; i < _this._rootItems.length && count < 2; i++) {
                count += _this._rootItems[i].countChecked();
            }
            return count;
        });
        _this.hasCheckedItems = ko.pureComputed(function () {
            return !(_this._checkedRootNodesCount() === 0);
        });
        _this.nextButtonDisabled = ko.pureComputed(function () {
            if (_this._checkedRootNodesCount() > 1) {
                return false;
            }
            return !_this.hasParametersToEdit();
        });
        _this.hasParametersToEdit = ko.pureComputed(function () {
            for (var i = 0; i < _this._rootItems.length; i++) {
                if (_this._rootItems[i]['hasParamsToEdit'] && _this._rootItems[i]['hasParamsToEdit']())
                    return true;
            }
            return false;
        });
        _this.tables = function () { return _this._tables; };
        _this.views = function () { return _this._views; };
        _this.procedures = function () { return _this._procedures; };
        _this.queries = function () { return _this._queries; };
        _this.customQueries = function () { return _this._customQueries; };
        _this._callBack().showQbCallBack = showQbCallBack;
        _this._callBack().disableCustomSql = disableCustomSql;
        _this._tables = new _treeListNode_1.TreeNode('tables', localization_utils_1.getLocalization('Tables', 'DataAccessStringId.ConfigureMultiQueryPage_TableCategory'), 'list', false, afterCheckToggled);
        _this._views = new _treeListNode_1.TreeNode('views', localization_utils_1.getLocalization('Views', 'DataAccessStringId.ConfigureMultiQueryPage_ViewCategory'), 'list', false, afterCheckToggled);
        _this._procedures = new _treeListNode_1.ParameterTreeNode('procedures', localization_utils_1.getLocalization('Stored Procedures', 'DataAccessStringId.ConfigureMultiQueryPage_SpCategory'), 'list', false, afterCheckToggled);
        _this._queries = new _treeListNode_1.QueriesTreeNode('queries', localization_utils_1.getLocalization('Queries', 'DataAccessStringId.ConfigureMultiQueryPage_QueryCategory'), 'list', false, _this._callBack, afterCheckToggled);
        (_a = _this._disposables).push.apply(_a, [_this._tables, _this._views, _this._procedures, _this._queries]);
        _this._rootItems = [
            _this._tables,
            _this._views,
            _this._procedures,
            _this._queries
        ];
        _this.getItems = function (pathRequest) {
            var result = $.Deferred();
            if (!pathRequest.fullPath) {
                result.resolve(_this._rootItems);
            }
            else if (pathRequest.fullPath === 'tables') {
                dbSchemaProvider.getDbSchema().done(function (dbSchema) {
                    if (_this._tables.children().length === 0) {
                        var tables = [];
                        dbSchema.tables.forEach(function (table) {
                            if (!table.isView) {
                                tables.push(new _treeListNode_1.TreeNode(table.name, table.name, 'table', _this._tables.checked.peek(), afterCheckToggled));
                            }
                        });
                        _this._tables.initializeChildren(tables);
                        result.resolve(tables);
                    }
                    else {
                        result.resolve(_this._tables.children());
                    }
                }).fail(result.reject);
            }
            else if (pathRequest.fullPath === 'views') {
                dbSchemaProvider.getDbSchema().done(function (dbSchema) {
                    if (_this._views.children().length === 0) {
                        var views = [];
                        dbSchema.tables.forEach(function (table) {
                            if (table.isView) {
                                views.push(new _treeListNode_1.TreeNode(table.name, table.name, 'view', _this._views.checked.peek(), afterCheckToggled));
                            }
                        });
                        _this._views.initializeChildren(views);
                        result.resolve(views);
                    }
                    else {
                        result.resolve(_this._views.children());
                    }
                }).fail(result.reject);
            }
            else if (pathRequest.fullPath === 'procedures') {
                dbSchemaProvider.getDbStoredProcedures().done(function (storedProcedures) {
                    if (_this._procedures.children().length === 0) {
                        var procedures = storedProcedures.map(function (proc) {
                            var node = new _treeListNode_1.TreeLeafNode(proc.name, _storedProceduresQueryControl_1.StoredProceduresQueryControl.generateStoredProcedureDisplayName(proc), 'procedure', _this._procedures.checked.peek(), proc.arguments, afterCheckToggled);
                            _this._disposables.push(node);
                            return node;
                        });
                        _this._procedures.initializeChildren(procedures);
                        result.resolve(procedures);
                    }
                    else {
                        result.resolve(_this._procedures.children());
                    }
                }).fail(result.reject);
            }
            else if (pathRequest.fullPath === 'queries') {
                var queries = customQueries().map(function (query) {
                    var name = query.name() || query.generateName();
                    var currentQuery = _this._queries.children().filter(function (q) { return q['query'] === query; })[0];
                    if (currentQuery)
                        return currentQuery;
                    var queryNode = new _treeListNode_1.TreeQueryNode(name, name, 'query', !!currentQuery && currentQuery.checked(), query.parameters, _this._callBack, afterCheckToggled, query);
                    _this._disposables.push(queryNode);
                    queryNode.setObservableName(ko.computed({
                        read: function () { return query.name() || query.generateName(); },
                        write: function (newVal) { return query.name(newVal); }
                    }));
                    return queryNode;
                });
                _this._queries.initializeChildren(queries);
                result.resolve(queries);
            }
            else {
                dbSchemaProvider.getDbTable(pathRequest.path).done(function (table) {
                    var tableTreeNode;
                    if (table.isView) {
                        tableTreeNode = _arrayutils_1.findFirstItemMatchesCondition(_this._views.children(), function (item) { return item.name === table.name; });
                    }
                    else {
                        tableTreeNode = _arrayutils_1.findFirstItemMatchesCondition(_this._tables.children(), function (item) { return item.name === table.name; });
                    }
                    if (tableTreeNode.children().length === 0) {
                        var columns = table.columns.map(function (column) {
                            var node = new _treeListNode_1.TreeLeafNode(column.name, column.name, 'column', tableTreeNode.checked.peek(), null, afterCheckToggled);
                            _this._disposables.push(node);
                            return node;
                        });
                        tableTreeNode.initializeChildren(columns);
                        result.resolve(columns);
                    }
                    else {
                        result.resolve(tableTreeNode.children());
                    }
                }).fail(result.reject);
            }
            return result.promise();
        };
        _this._customQueries = customQueries;
        return _this;
    }
    return DBSchemaItemsProvider;
}(utils_1.Disposable));
exports.DBSchemaItemsProvider = DBSchemaItemsProvider;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _treelistController_1 = __webpack_require__(10);
var _treeListNode_1 = __webpack_require__(41);
var DBSchemaTreeListController = (function (_super) {
    __extends(DBSchemaTreeListController, _super);
    function DBSchemaTreeListController(_customizeDBSchemaTreeListActions) {
        var _this = _super.call(this) || this;
        _this._customizeDBSchemaTreeListActions = _customizeDBSchemaTreeListActions;
        return _this;
    }
    DBSchemaTreeListController.prototype.getActions = function (value) {
        if (!value.data)
            return [];
        if (!(value.data instanceof _treeListNode_1.QueriesTreeNode || value.data instanceof _treeListNode_1.TreeQueryNode))
            return [];
        var result = value.data.getActions(value);
        this._customizeDBSchemaTreeListActions && this._customizeDBSchemaTreeListActions(value.data, result);
        return result;
    };
    DBSchemaTreeListController.prototype.canSelect = function (value) {
        return true;
    };
    return DBSchemaTreeListController;
}(_treelistController_1.TreeListController));
exports.DBSchemaTreeListController = DBSchemaTreeListController;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var editorsInfo_1 = __webpack_require__(6);
var utils_2 = __webpack_require__(9);
var _treelistController_1 = __webpack_require__(10);
var _treelistItem_1 = __webpack_require__(10);
var localization_utils_1 = __webpack_require__(1);
var ParametersTreeListItemBase = (function (_super) {
    __extends(ParametersTreeListItemBase, _super);
    function ParametersTreeListItemBase(parameter) {
        var _this = _super.call(this) || this;
        _this.editor = editorsInfo_1.editorTemplates.getEditor('commonCollection');
        _this.isList = false;
        _this.contenttemplate = 'dx-treelist-accordion-contenttemplate-custom-with-actions';
        _this.actionsTemplate = 'dx-treelist-item-actions';
        _this.dataSourceParameter = ko.observable(parameter);
        _this._name = parameter.name;
        _this._displayName = parameter.displayName;
        return _this;
    }
    Object.defineProperty(ParametersTreeListItemBase.prototype, "name", {
        get: function () {
            return this._name();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParametersTreeListItemBase.prototype, "displayName", {
        get: function () {
            return this._displayName || this.name;
        },
        enumerable: true,
        configurable: true
    });
    return ParametersTreeListItemBase;
}(utils_1.Disposable));
exports.ParametersTreeListItemBase = ParametersTreeListItemBase;
var ParametersTreeListItem = (function (_super) {
    __extends(ParametersTreeListItem, _super);
    function ParametersTreeListItem(parameter, parent) {
        var _this = _super.call(this, parameter) || this;
        _this.parent = parent;
        return _this;
    }
    ParametersTreeListItem.prototype.query = function () {
        return this.parent.query();
    };
    return ParametersTreeListItem;
}(ParametersTreeListItemBase));
exports.ParametersTreeListItem = ParametersTreeListItem;
var ParametersTreeListRootItemBase = (function () {
    function ParametersTreeListRootItemBase(name) {
        this.isList = true;
        this.specifics = 'List';
        this.visible = ko.observable(true);
        this.name = this.displayName = name;
        this.parameters = ko.observableArray([]);
    }
    ParametersTreeListRootItemBase.prototype.removeChild = function (parameter) {
        this.parameters.remove(parameter);
    };
    return ParametersTreeListRootItemBase;
}());
exports.ParametersTreeListRootItemBase = ParametersTreeListRootItemBase;
var ParametersTreeListRootItem = (function (_super) {
    __extends(ParametersTreeListRootItem, _super);
    function ParametersTreeListRootItem(query) {
        var _this = _super.call(this, query.name()) || this;
        _this._query = query;
        return _this;
    }
    ParametersTreeListRootItem.prototype.query = function () {
        return this._query;
    };
    return ParametersTreeListRootItem;
}(ParametersTreeListRootItemBase));
exports.ParametersTreeListRootItem = ParametersTreeListRootItem;
var ParametersTreeListController = (function (_super) {
    __extends(ParametersTreeListController, _super);
    function ParametersTreeListController(rootItems, createNewParameter) {
        var _this = _super.call(this) || this;
        _this._createNewParameter = createNewParameter;
        _this._rootItems = rootItems;
        return _this;
    }
    ParametersTreeListController.prototype.hasItems = function (item) {
        return item.isList;
    };
    ParametersTreeListController.prototype.getActions = function (treeListItem) {
        var _this = this;
        var actions = [];
        if (!treeListItem.data)
            return actions;
        if (treeListItem.data.query().type() === utils_2.SqlQueryType.storedProcQuery) {
            return treeListItem.data.isList ? [] : [_treelistItem_1.treeListEditAction];
        }
        if (treeListItem.data.isList) {
            var item = treeListItem.data;
            actions.push({
                clickAction: function () {
                    return item.parameters.push(new ParametersTreeListItem(_this._createNewParameter(item.name, item.parameters()), item));
                },
                imageClassName: 'dxrd-image-add',
                imageTemplateName: 'dxrd-svg-operations-add',
                text: localization_utils_1.getLocalization('Add parameter', 'AnalyticsCoreStringId.FieldListActions_AddParameter')
            });
        }
        else {
            var parameter = treeListItem.data;
            actions.push({
                clickAction: function () {
                    parameter.parent.removeChild(parameter);
                },
                imageClassName: 'dxrd-image-recycle-bin',
                imageTemplateName: 'dxrd-svg-operations-recycle_bin',
                text: localization_utils_1.getLocalization('Remove parameter', 'DataAccessUIStringId.Button_Remove'),
            });
            actions.push(_treelistItem_1.treeListEditAction);
        }
        return actions;
    };
    ParametersTreeListController.prototype.canSelect = function (value) {
        return true;
    };
    return ParametersTreeListController;
}(_treelistController_1.TreeListController));
exports.ParametersTreeListController = ParametersTreeListController;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var localization_utils_1 = __webpack_require__(1);
var _localizationStringIds_1 = __webpack_require__(0);
var _popupService_1 = __webpack_require__(0);
var _infoMessageHelpers_1 = __webpack_require__(0);
var _masterDetailEditorPopupManager_1 = __webpack_require__(135);
var _arrayutils_1 = __webpack_require__(0);
var _masterQuerySurface_1 = __webpack_require__(136);
var MasterDetailEditor = (function () {
    function MasterDetailEditor(relations, resultSet, saveCallBack) {
        var _this = this;
        this.isValid = ko.observable(true);
        this.popupVisible = ko.observable(false);
        this.loadPanelVisible = ko.observable(false);
        this.buttonItems = [];
        this.masterQueries = ko.observableArray();
        this.popupService = new _popupService_1.PopupService();
        this.save = function () {
            var emptyFieldsExist = relations().some(function (relation) {
                return !relation.detailQuery() || !relation.masterQuery() ||
                    relation.keyColumns().some(function (column) { return (!column.detailColumn() || !column.masterColumn()); });
            });
            if (emptyFieldsExist) {
                _infoMessageHelpers_1.ShowMessage(localization_utils_1.getLocalization('Some fields are empty. Please fill all empty fields or remove the corresponding conditions to proceed.', 'DataAccessUIStringId.JoinEditorFillAllFieldsException'));
            }
            else {
                saveCallBack().done(function () { _this.popupVisible(false); });
            }
        };
        this.createRelation = function (target) {
            var popupItems = resultSet.tables()
                .filter(function (table) { return table.tableName() !== target.queryName; })
                .map(function (table) { return { name: table.tableName() }; });
            return {
                data: new _masterDetailEditorPopupManager_1.MasterDetailEditorPopupManager(target, _this.popupService, 'create', popupItems),
                templateName: 'dx-filtereditor-create'
            };
        };
        this.setColumn = function (target) {
            var table = _arrayutils_1.getFirstItemByPropertyValue(resultSet.tables(), 'tableName', target.queryName);
            return {
                data: new _masterDetailEditorPopupManager_1.MasterDetailEditorPopupManager(target, _this.popupService, 'setColumn', table ? table.columns() : []),
                templateName: 'dx-masterdetail-editor-setColumn'
            };
        };
        this._createMainPopupButtons();
        var masterQueries = {};
        resultSet.tables().forEach(function (table) {
            masterQueries[table.tableName()] = new _masterQuerySurface_1.MasterQuerySurface(table.tableName(), relations);
        });
        relations().forEach(function (relation) {
            masterQueries[relation.masterQuery()] = masterQueries[relation.masterQuery()] || new _masterQuerySurface_1.MasterQuerySurface(relation.masterQuery(), relations);
            masterQueries[relation.masterQuery()].add(relation);
        });
        this.masterQueries($.map(masterQueries, function (value) { return value; }));
    }
    MasterDetailEditor.prototype._createMainPopupButtons = function () {
        var self = this;
        this.buttonItems = [
            { toolbar: 'bottom', location: 'after', widget: 'dxButton', options: { text: localization_utils_1.getLocalization('Save', _localizationStringIds_1.StringId.DataAccessBtnOK), onClick: function () { self.save(); } } },
            { toolbar: 'bottom', location: 'after', widget: 'dxButton', options: { text: localization_utils_1.getLocalization('Cancel', _localizationStringIds_1.StringId.DataAccessBtnCancel), onClick: function () { self.popupVisible(false); } } }
        ];
    };
    MasterDetailEditor.prototype.title = function () {
        return localization_utils_1.getLocalization('Master-Detail Relation Editor', _localizationStringIds_1.StringId.MasterDetailRelationsEditor);
    };
    return MasterDetailEditor;
}());
exports.MasterDetailEditor = MasterDetailEditor;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MasterDetailEditorPopupManager = (function () {
    function MasterDetailEditorPopupManager(target, popupService, action, popupItems) {
        var _this = this;
        this.showPopup = function (_, element) {
            if (_this._popupService['subscription']) {
                _this._popupService['subscription'].dispose();
            }
            _this._popupService.title('');
            _this._updateActions(_this.target);
            _this._popupService.target(element);
            _this._popupService.visible(true);
        };
        this.target = target;
        this._action = action;
        this._popupService = popupService;
        this._popupItems = popupItems;
    }
    MasterDetailEditorPopupManager.prototype._updateActions = function (viewModel) {
        var _this = this;
        this._popupService['subscription'] = this._popupService.visible.subscribe(function (newVal) {
            _this.target.isSelected && _this.target.isSelected(newVal);
        });
        this._popupService.data({
            data: this._popupItems,
            template: 'dx-filtereditor-popup-common',
            click: function (data) {
                viewModel[_this._action](data);
                _this._popupService.visible(false);
            }
        });
    };
    return MasterDetailEditorPopupManager;
}());
exports.MasterDetailEditorPopupManager = MasterDetailEditorPopupManager;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var masterDetailRelation_1 = __webpack_require__(51);
var _masterDetailRelationSurface_1 = __webpack_require__(137);
var _arrayutils_1 = __webpack_require__(0);
var _getNameHelpers_1 = __webpack_require__(0);
var MasterQuerySurface = (function () {
    function MasterQuerySurface(masterQueryName, relations) {
        var _this = this;
        this.relations = ko.observableArray();
        this.queryName = masterQueryName;
        this.add = function (relation) {
            _this.relations.push(new _masterDetailRelationSurface_1.MasterDetailRelationSurface(relation, _this));
        };
        this.create = function (detailQueryItem) {
            var newRelation = new masterDetailRelation_1.MasterDetailRelation({ '@Master': _this.queryName, '@Detail': detailQueryItem.name });
            if (_arrayutils_1.getFirstItemByPropertyValue(_this.relations(), 'relationName', newRelation.name())) {
                newRelation.name(_getNameHelpers_1.getUniqueName(_this.relations().map(function (item) { return item.relationName(); }), newRelation.name() + '_'));
            }
            newRelation.createKeyColumn();
            _this.add(newRelation);
            relations.push(newRelation);
        };
        this.remove = function (relationSurface) {
            _this.relations.remove(relationSurface);
            relations.remove(function (item) { return item.name === relationSurface.relationName; });
        };
    }
    return MasterQuerySurface;
}());
exports.MasterQuerySurface = MasterQuerySurface;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var _keyColumnSurface_1 = __webpack_require__(138);
var MasterDetailRelationSurface = (function () {
    function MasterDetailRelationSurface(relation, parent) {
        var _this = this;
        this.isEditable = ko.observable(false);
        this.relationName = relation.name;
        this.keyColumns = ko.pureComputed(function () {
            return relation.keyColumns().map(function (item) {
                return {
                    master: new _keyColumnSurface_1.KeyColumnSurface(item.masterColumn, relation.masterQuery(), true),
                    detail: new _keyColumnSurface_1.KeyColumnSurface(item.detailColumn, relation.detailQuery(), false)
                };
            });
        });
        this.create = function () {
            relation.createKeyColumn();
        };
        this.remove = function (data) {
            relation.keyColumns.remove(function (item) { return item.masterColumn === data.master.column && item.detailColumn === data.detail.column; });
            if (relation.keyColumns().length === 0)
                parent.remove(_this);
        };
    }
    return MasterDetailRelationSurface;
}());
exports.MasterDetailRelationSurface = MasterDetailRelationSurface;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var localization_utils_1 = __webpack_require__(1);
var KeyColumnSurface = (function () {
    function KeyColumnSurface(column, queryName, _isMaster) {
        if (_isMaster === void 0) { _isMaster = false; }
        var _this = this;
        this._isMaster = _isMaster;
        this.getTitle = function () { return _this._isMaster ? localization_utils_1.getLocalization('Master Query', 'AnalyticsCoreStringId.Wizard_MasterDetailRelationship_MasterQuery') : localization_utils_1.getLocalization('Detail Query', 'AnalyticsCoreStringId.Wizard_MasterDetailRelationship_DetailQuery'); };
        this.isSelected = ko.observable(false);
        this.selectColumnText = function () { return localization_utils_1.getLocalization('<Select a Column>', 'DataAccessUIStringId.JoinEditorEmptyColumnText'); };
        this.column = column;
        this.queryName = queryName;
        this.setColumn = function (resultColumn) {
            _this.column(resultColumn.name());
        };
    }
    return KeyColumnSurface;
}());
exports.KeyColumnSurface = KeyColumnSurface;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var pageIterator_1 = __webpack_require__(37);
var pageFactory_1 = __webpack_require__(39);
var pageId_1 = __webpack_require__(5);
var chooseDataSourceTypePage_1 = __webpack_require__(36);
var popupWizard_1 = __webpack_require__(42);
var _utils_1 = __webpack_require__(0);
var localization_utils_1 = __webpack_require__(1);
var chooseJsonSourcePage_1 = __webpack_require__(40);
var chooseJsonConnectionPage_1 = __webpack_require__(55);
var chooseJsonSchemaPage_1 = __webpack_require__(56);
var configureObjectDataSourceParametersPage_1 = __webpack_require__(80);
var configureQueryPage_1 = __webpack_require__(24);
var chooseSqlConnectionPage_1 = __webpack_require__(54);
var configureParametersPage_1 = __webpack_require__(130);
var _DataSourceWizardOptionsBase = (function () {
    function _DataSourceWizardOptionsBase() {
        this.connectionStrings = {
            json: ko.observableArray([]),
            sql: ko.observableArray([])
        };
        this.callbacks = {};
        this.rtl = false;
        this.disableCustomSql = false;
        this.wizardSettings = new DataSourceWizardSettings().createDefault();
        this.allowCreateNewJsonConnection = false;
    }
    Object.defineProperty(_DataSourceWizardOptionsBase.prototype, "jsonDataSourceAvailable", {
        get: function () {
            return this.wizardSettings.enableJsonDataSource && (this.allowCreateNewJsonConnection || (ko.unwrap(this.connectionStrings.json) || []).length > 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_DataSourceWizardOptionsBase.prototype, "sqlDataSourceAvailable", {
        get: function () {
            return this.wizardSettings.enableSqlDataSource && (ko.unwrap(this.connectionStrings.sql) || []).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_DataSourceWizardOptionsBase.prototype, "objectDataSourceAvailable", {
        get: function () {
            return this.wizardSettings.enableObjectDataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_DataSourceWizardOptionsBase.prototype, "canCreateDataSource", {
        get: function () {
            return this.jsonDataSourceAvailable || this.sqlDataSourceAvailable || this.objectDataSourceAvailable;
        },
        enumerable: true,
        configurable: true
    });
    return _DataSourceWizardOptionsBase;
}());
exports._DataSourceWizardOptionsBase = _DataSourceWizardOptionsBase;
var _DataSourceWizardOptions = (function (_super) {
    __extends(_DataSourceWizardOptions, _super);
    function _DataSourceWizardOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _DataSourceWizardOptions;
}(_DataSourceWizardOptionsBase));
exports._DataSourceWizardOptions = _DataSourceWizardOptions;
var DataSourceWizardSettings = (function () {
    function DataSourceWizardSettings() {
    }
    DataSourceWizardSettings.prototype.createDefault = function (settings) {
        var newSettings = { enableJsonDataSource: true, enableSqlDataSource: true, enableObjectDataSource: true };
        if (!settings)
            return newSettings;
        if (settings.enableJsonDataSource !== undefined)
            newSettings.enableJsonDataSource = settings.enableJsonDataSource;
        if (settings.enableSqlDataSource !== undefined)
            newSettings.enableSqlDataSource = settings.enableSqlDataSource;
        if (settings.enableObjectDataSource != undefined)
            newSettings.enableObjectDataSource = settings.enableObjectDataSource;
        return newSettings;
    };
    return DataSourceWizardSettings;
}());
exports.DataSourceWizardSettings = DataSourceWizardSettings;
var DataSourceWizardPageIterator = (function (_super) {
    __extends(DataSourceWizardPageIterator, _super);
    function DataSourceWizardPageIterator(pageFactory, stateManager, _dataSourceWizardOptions) {
        var _this = _super.call(this, pageFactory, stateManager) || this;
        _this._dataSourceWizardOptions = _dataSourceWizardOptions;
        return _this;
    }
    DataSourceWizardPageIterator.prototype.getNextPageId = function (pageId) {
        if (!pageId && this._dataSourceWizardOptions.jsonDataSourceAvailable && this._dataSourceWizardOptions.sqlDataSourceAvailable) {
            return pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage;
        }
        else if (!pageId) {
            return this.getNextPageId(pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage);
        }
        else if (pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Sql) {
            return pageId_1.SqlDataSourceWizardPageId.ChooseConnectionPage;
        }
        else if (pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Json && this._dataSourceWizardOptions.connectionStrings.json().length > 0) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseConnectionPage;
        }
        else if (this._dataSourceWizardOptions.allowCreateNewJsonConnection && pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Json) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseJsonSourcePage;
        }
        else if (pageId === pageId_1.JsonDataSourceWizardPageId.ChooseConnectionPage && this._getCurrentState().jsonDataSourceWizard.connectionName) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
        }
        else if (this._dataSourceWizardOptions.allowCreateNewJsonConnection && pageId === pageId_1.JsonDataSourceWizardPageId.ChooseConnectionPage && !this._getCurrentState().jsonDataSourceWizard.connectionName) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseJsonSourcePage;
        }
        else if (pageId === pageId_1.JsonDataSourceWizardPageId.ChooseJsonSourcePage) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
        }
        else if (pageId === pageId_1.SqlDataSourceWizardPageId.ChooseConnectionPage && this._getCurrentState().sqlDataSourceWizard.name) {
            return pageId_1.SqlDataSourceWizardPageId.ConfigureQueryPage;
        }
        else if (pageId === pageId_1.SqlDataSourceWizardPageId.ConfigureQueryPage && this._getCurrentState().sqlDataSourceWizard.sqlDataSourceJSON) {
            return pageId_1.SqlDataSourceWizardPageId.ConfigureParametersPage;
        }
    };
    return DataSourceWizardPageIterator;
}(pageIterator_1.PageIterator));
exports.DataSourceWizardPageIterator = DataSourceWizardPageIterator;
var DataSourceWizard = (function (_super) {
    __extends(DataSourceWizard, _super);
    function DataSourceWizard(pageFactory, _wizardOptions) {
        var _this = _super.call(this, pageFactory, _wizardOptions.callbacks.finishCallback) || this;
        _this._wizardOptions = _wizardOptions;
        _this._extendCssClass = 'dxrd-sqldatasource-wizard';
        _this.title = localization_utils_1.getLocalization('Data Source Wizard', 'AnalyticsCoreStringId.DSWizard_Title');
        return _this;
    }
    DataSourceWizard.prototype.initialize = function (state, createIterator) {
        var _this = this;
        if (createIterator === void 0) { createIterator = function (pageFactory, stateManager) { return new DataSourceWizardPageIterator(pageFactory, stateManager, _this._wizardOptions); }; }
        if (this._wizardOptions.sqlDataSourceAvailable || !_utils_1.isEmptyObject(state.sqlDataSourceWizard)) {
            state.dataSourceType = chooseDataSourceTypePage_1.DataSourceType.Sql;
        }
        else if (this._wizardOptions.jsonDataSourceAvailable || state.jsonDataSourceWizard.jsonSource) {
            state.dataSourceType = chooseDataSourceTypePage_1.DataSourceType.Json;
        }
        _super.prototype.initialize.call(this, state, createIterator);
    };
    DataSourceWizard.prototype.canRunWizard = function () {
        return this._wizardOptions.jsonDataSourceAvailable || this._wizardOptions.sqlDataSourceAvailable;
    };
    return DataSourceWizard;
}(popupWizard_1.PopupWizard));
exports.DataSourceWizard = DataSourceWizard;
function _registerDataSourceWizardPages(factory, dataSourceWizardOptions) {
    if (factory === void 0) { factory = new pageFactory_1.PageFactory(); }
    chooseDataSourceTypePage_1._registerChooseDataSourceTypePage(factory, dataSourceWizardOptions);
    chooseJsonSourcePage_1._registerChooseJsonSourcePage(factory, dataSourceWizardOptions.requestWrapper, dataSourceWizardOptions.callbacks.getItemsProviderCallback);
    chooseJsonConnectionPage_1._registerChooseJsonConnectionPage(factory, dataSourceWizardOptions);
    chooseJsonSchemaPage_1._registerChooseJsonSchemaPage(factory, dataSourceWizardOptions.requestWrapper, dataSourceWizardOptions.callbacks);
    configureObjectDataSourceParametersPage_1._registerConfigureObjectDataSourceParametersPage(factory, dataSourceWizardOptions.callbacks.getItemsProviderCallback);
    configureQueryPage_1._registerConfigureQueryPage(factory, dataSourceWizardOptions);
    chooseSqlConnectionPage_1._registerChooseSqlConnectionPage(factory, dataSourceWizardOptions.connectionStrings.sql);
    configureParametersPage_1._registerConfigureParametersPage(factory, dataSourceWizardOptions.requestWrapper);
    return factory;
}
exports._registerDataSourceWizardPages = _registerDataSourceWizardPages;
function _createDataSourceWizard(factory, dataSourceWizardOptions) {
    if (factory === void 0) { factory = new pageFactory_1.PageFactory(); }
    factory = _registerDataSourceWizardPages(factory, dataSourceWizardOptions);
    return new DataSourceWizard(factory, dataSourceWizardOptions);
}
exports._createDataSourceWizard = _createDataSourceWizard;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pageFactory_1 = __webpack_require__(39);
var FullscreenWizardPageFactory = (function (_super) {
    __extends(FullscreenWizardPageFactory, _super);
    function FullscreenWizardPageFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.metadata = {};
        return _this;
    }
    FullscreenWizardPageFactory.prototype.registerMetadata = function (pageId, metadata) {
        _super.prototype.registerMetadata.call(this, pageId, metadata);
    };
    FullscreenWizardPageFactory.prototype.getMetadata = function (key) {
        return _super.prototype.getMetadata.call(this, key);
    };
    return FullscreenWizardPageFactory;
}(pageFactory_1.PageFactory));
exports.FullscreenWizardPageFactory = FullscreenWizardPageFactory;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fullscreenWizardPage_1 = __webpack_require__(38);
var specifyJsonConnectionPage_1 = __webpack_require__(125);
var pageId_1 = __webpack_require__(5);
var chooseJsonSourcePage_1 = __webpack_require__(40);
var localization_utils_1 = __webpack_require__(1);
var chooseJsonSchemaPage_1 = __webpack_require__(56);
var SpecifyJsonDataSourceSettingsPage = (function (_super) {
    __extends(SpecifyJsonDataSourceSettingsPage, _super);
    function SpecifyJsonDataSourceSettingsPage(_dataSourceWizardOptions) {
        var _this = _super.call(this) || this;
        _this._dataSourceWizardOptions = _dataSourceWizardOptions;
        return _this;
    }
    SpecifyJsonDataSourceSettingsPage.prototype.registerSections = function () {
        if (this._dataSourceWizardOptions.connectionStrings.json().length > 0) {
            specifyJsonConnectionPage_1._registerSpecifyJsonConnectionPage(this._factory, this._dataSourceWizardOptions.connectionStrings.json, this._dataSourceWizardOptions.allowCreateNewJsonConnection, this._dataSourceWizardOptions.callbacks.getItemsProviderCallback);
            this._setSectionPosition(pageId_1.FullscreenDataSourceWizardSectionId.SpecifyJsonConnectionPage, this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.Right : fullscreenWizardPage_1.WizardSectionPosition.Left);
        }
        if (this._dataSourceWizardOptions.allowCreateNewJsonConnection) {
            if (this._dataSourceWizardOptions.connectionStrings.json().length === 0) {
                chooseJsonSourcePage_1._registerChooseJsonSourcePage(this._factory, this._dataSourceWizardOptions.requestWrapper, this._dataSourceWizardOptions.callbacks.getItemsProviderCallback);
                this._setSectionPosition(pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSourcePage, this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.Right : fullscreenWizardPage_1.WizardSectionPosition.Left);
                var meta = this._factory.getMetadata(pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSourcePage);
                meta['disabledText'] = localization_utils_1.getLocalization("To create a data connection, select \"No, I'd like to create a new data connection\".", 'AnalyticsCoreStringId.JsonDSWizard_CreateNewConnectionPage_Placeholder');
            }
        }
        chooseJsonSchemaPage_1._registerChooseJsonSchemaPage(this._factory, this._dataSourceWizardOptions.requestWrapper, this._dataSourceWizardOptions.callbacks);
        this._setSectionPosition(pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage, this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.Left : fullscreenWizardPage_1.WizardSectionPosition.Right);
        var meta = this._factory.getMetadata(pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage);
        meta['disabledText'] = localization_utils_1.getLocalization('To select data fields, choose or create a data connection.', 'AnalyticsCoreStringId.JsonDSWizard_ChooseJsonSchemaPage_Placeholder');
    };
    SpecifyJsonDataSourceSettingsPage.prototype.getNextSectionId = function (sectionId) {
        if (!sectionId && this._dataSourceWizardOptions.connectionStrings.json().length > 0) {
            return pageId_1.FullscreenDataSourceWizardSectionId.SpecifyJsonConnectionPage;
        }
        else if (!sectionId) {
            return pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSourcePage;
        }
        else if (this._dataSourceWizardOptions.allowCreateNewJsonConnection) {
            if (sectionId === pageId_1.FullscreenDataSourceWizardSectionId.SpecifyJsonConnectionPage)
                return pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage;
            else if (sectionId === pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSourcePage)
                return pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage;
        }
        else {
            if (sectionId === pageId_1.FullscreenDataSourceWizardSectionId.SpecifyJsonConnectionPage)
                return pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage;
        }
    };
    SpecifyJsonDataSourceSettingsPage.prototype.canNext = function () {
        var section = this._sectionsProcessor.getPageById(pageId_1.FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage);
        return section && section.page() && section.metadata.canNext(section.page().page);
    };
    return SpecifyJsonDataSourceSettingsPage;
}(fullscreenWizardPage_1.FullscreenWizardPage));
exports.SpecifyJsonDataSourceSettingsPage = SpecifyJsonDataSourceSettingsPage;
function _registerSpecifyJsonDataSourceSettingsPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(pageId_1.FullscreenDataSourceWizardPageId.SpecifyJsonDataSourceSettingsPage, {
        setState: function (data, state) {
            state.jsonDataSourceWizard.connectionName = data.jsonDataSourceWizard.connectionName;
            state.jsonDataSourceWizard.newConnectionName = data.jsonDataSourceWizard.newConnectionName;
            state.jsonDataSourceWizard.jsonSource = data.jsonDataSourceWizard.jsonSource;
            state.jsonDataSourceWizard.dataSourceName = data.jsonDataSourceWizard.dataSourceName;
            state.jsonDataSourceWizard.jsonScheme = data.jsonDataSourceWizard.jsonScheme;
            state.jsonDataSourceWizard.rootElement = data.jsonDataSourceWizard.rootElement;
        },
        getState: function (state) { return state; },
        resetState: function (state, defaultState) {
            state.jsonDataSourceWizard.connectionName = defaultState.jsonDataSourceWizard.connectionName;
            state.jsonDataSourceWizard.jsonSource = defaultState.jsonDataSourceWizard.jsonSource;
            state.jsonDataSourceWizard.dataSourceName = defaultState.jsonDataSourceWizard.dataSourceName;
            state.jsonDataSourceWizard.newConnectionName = defaultState.jsonDataSourceWizard.newConnectionName;
            state.jsonDataSourceWizard.jsonScheme = defaultState.jsonDataSourceWizard.jsonScheme;
            state.jsonDataSourceWizard.rootElement = defaultState.jsonDataSourceWizard.rootElement;
        },
        create: function () {
            return new SpecifyJsonDataSourceSettingsPage(dataSourceWizardOptions);
        },
        navigationPanelText: localization_utils_1.getLocalization('Specify Data Source Settings', 'AnalyticsCoreStringId.Wizard_SpecifyDataSourceSettingsPage'),
        template: 'dx-wizard-fullscreen-page'
    });
}
exports._registerSpecifyJsonDataSourceSettingsPage = _registerSpecifyJsonDataSourceSettingsPage;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fullscreenWizardPage_1 = __webpack_require__(38);
var pageId_1 = __webpack_require__(5);
var dataSourceWizardState_1 = __webpack_require__(12);
var chooseSqlConnectionPage_1 = __webpack_require__(54);
var multiQueryConfigurePage_1 = __webpack_require__(86);
var configureMasterDetailRelationshipsPage_1 = __webpack_require__(88);
var _requestwrapper_1 = __webpack_require__(16);
var multiQueryConfigureParametersPage_1 = __webpack_require__(87);
var localization_utils_1 = __webpack_require__(1);
var _utils_1 = __webpack_require__(0);
var SpecifySqlDataSourceSettingsPage = (function (_super) {
    __extends(SpecifySqlDataSourceSettingsPage, _super);
    function SpecifySqlDataSourceSettingsPage(_dataSourceWizardOptions) {
        var _this = _super.call(this) || this;
        _this._dataSourceWizardOptions = _dataSourceWizardOptions;
        return _this;
    }
    SpecifySqlDataSourceSettingsPage.prototype.getNextSectionId = function (sectionId) {
        if (!sectionId)
            return pageId_1.FullscreenDataSourceWizardSectionId.ChooseSqlConnectionPage;
        else if (sectionId === pageId_1.FullscreenDataSourceWizardSectionId.ChooseSqlConnectionPage && this._stateManager.getCurrentState().sqlDataSourceWizard.name) {
            return pageId_1.FullscreenDataSourceWizardSectionId.ConfigureQueryPage;
        }
        else if (sectionId === pageId_1.FullscreenDataSourceWizardSectionId.ConfigureQueryPage) {
            var sections = [];
            var sqlDataSourceWizardState = this._stateManager.getCurrentState().sqlDataSourceWizard;
            if ((sqlDataSourceWizardState.customQueries || []).length > 0) {
                sections.push(pageId_1.FullscreenDataSourceWizardSectionId.ConfigureQueryParametersPage);
            }
            var sqlDataSourceWrapped = dataSourceWizardState_1._restoreSqlDataSourceFromState(sqlDataSourceWizardState);
            if (sqlDataSourceWrapped.sqlDataSource.queries().length > 1) {
                sections.push(pageId_1.FullscreenDataSourceWizardSectionId.ConfigureMasterDetailRelationshipsPage);
            }
            return sections;
        }
    };
    SpecifySqlDataSourceSettingsPage.prototype.registerSections = function () {
        chooseSqlConnectionPage_1._registerChooseSqlConnectionPage(this._factory, this._dataSourceWizardOptions.connectionStrings.sql);
        multiQueryConfigurePage_1._registerMultiQueryConfigurePage(this._factory, this._dataSourceWizardOptions);
        configureMasterDetailRelationshipsPage_1._registerConfigureMasterDetailRelationshipsPage(this._factory, _requestwrapper_1.wrapRebuildResultSchema(this._dataSourceWizardOptions.callbacks.sqlDataSourceResultSchema));
        multiQueryConfigureParametersPage_1._registerMultiQueryConfigureParametersPage(this._factory, this._dataSourceWizardOptions.requestWrapper);
        var meta = this._factory.getMetadata(pageId_1.FullscreenDataSourceWizardSectionId.ChooseSqlConnectionPage);
        meta.description = localization_utils_1.getLocalization('Choose a data connection.', 'AnalyticsCoreStringId.SqlDSWizard_PageChooseConnection');
        var meta = this._factory.getMetadata(pageId_1.FullscreenDataSourceWizardSectionId.ConfigureQueryPage);
        meta['recreate'] = true;
        meta.description = localization_utils_1.getLocalization('Choose predefined queries and/or create custom queries.', 'AnalyticsCoreStringId.Wizard_Queries_Description');
        meta['required'] = true;
        var meta = this._factory.getMetadata(pageId_1.FullscreenDataSourceWizardSectionId.ConfigureMasterDetailRelationshipsPage);
        meta.description = localization_utils_1.getLocalization('Configure master-detail relationships.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMasterDetailRelations');
        meta['disabledText'] = localization_utils_1.getLocalization('To create a master-detail relationship, select two or more queries.', 'AnalyticsCoreStringId.Wizard_MasterDetailRelationship_Placeholder');
        var meta = this._factory.getMetadata(pageId_1.FullscreenDataSourceWizardSectionId.ConfigureQueryParametersPage);
        meta.description = localization_utils_1.getLocalization('Configure query parameters.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureParameters');
        meta['disabledText'] = localization_utils_1.getLocalization('To specify query parameters, select a parameterized stored procedure or create a custom query.', 'AnalyticsCoreStringId.Wizard_ConfigureQueryParameters_Placeholder');
        this._setSectionPosition(pageId_1.FullscreenDataSourceWizardSectionId.ChooseSqlConnectionPage, this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.TopRight : fullscreenWizardPage_1.WizardSectionPosition.TopLeft);
        this._setSectionPosition(pageId_1.FullscreenDataSourceWizardSectionId.ConfigureQueryPage, this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.TopLeft : fullscreenWizardPage_1.WizardSectionPosition.TopRight);
        this._setSectionPosition(pageId_1.FullscreenDataSourceWizardSectionId.ConfigureQueryParametersPage, this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.BottomLeft : fullscreenWizardPage_1.WizardSectionPosition.BottomRight);
        this._setSectionPosition(pageId_1.FullscreenDataSourceWizardSectionId.ConfigureMasterDetailRelationshipsPage, this._dataSourceWizardOptions.rtl ? fullscreenWizardPage_1.WizardSectionPosition.BottomRight : fullscreenWizardPage_1.WizardSectionPosition.BottomLeft);
    };
    return SpecifySqlDataSourceSettingsPage;
}(fullscreenWizardPage_1.FullscreenWizardPage));
exports.SpecifySqlDataSourceSettingsPage = SpecifySqlDataSourceSettingsPage;
function _registerSpecifySqlDataSourceSettingsPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(pageId_1.FullscreenDataSourceWizardPageId.SpecifySqlDataSourceSettingsPage, {
        setState: function (data, state) {
            state.sqlDataSourceWizard.customQueries = data.sqlDataSourceWizard.customQueries;
            state.sqlDataSourceWizard.name = data.sqlDataSourceWizard.name;
            state.sqlDataSourceWizard.queryName = data.sqlDataSourceWizard.name;
            state.sqlDataSourceWizard.sqlDataSourceJSON = data.sqlDataSourceWizard.sqlDataSourceJSON;
            state.sqlDataSourceWizard.relations = data.sqlDataSourceWizard.relations;
        },
        getState: function (state) { return state; },
        resetState: function (state, defaulState) {
            state.sqlDataSourceWizard = _utils_1.extend(true, {}, defaulState);
        },
        create: function () {
            return new SpecifySqlDataSourceSettingsPage(dataSourceWizardOptions);
        },
        navigationPanelText: localization_utils_1.getLocalization('Specify Data Source Settings', 'AnalyticsCoreStringId.Wizard_SpecifyDataSourceSettingsPage'),
        template: 'dx-wizard-fullscreen-page'
    });
}
exports._registerSpecifySqlDataSourceSettingsPage = _registerSpecifySqlDataSourceSettingsPage;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var popupWizard_1 = __webpack_require__(42);
var fullscreenWizardNavigation_1 = __webpack_require__(144);
var FullscreenWizard = (function (_super) {
    __extends(FullscreenWizard, _super);
    function FullscreenWizard(pageFactory, finishCallback) {
        var _this = _super.call(this, pageFactory, finishCallback) || this;
        _this._extendCssClass = 'dx-wizard-fullscreen';
        _this.navigationPanel = ko.observable(null);
        _this.isVisible.subscribe(function (newValue) {
            if (!newValue) {
                _this.navigationPanel() && _this.navigationPanel().resetAll();
                _this.navigationPanel() && _this.navigationPanel().dispose();
                _this._onCloseCallback && _this._onCloseCallback();
            }
        });
        return _this;
    }
    FullscreenWizard.prototype._onClose = function (callback) {
        this._onCloseCallback = callback;
    };
    FullscreenWizard.prototype.onFinish = function () {
        _super.prototype.onFinish.call(this);
        this.navigationPanel().dispose();
    };
    FullscreenWizard.prototype._initPage = function (page) {
        var _this = this;
        if (page.onChange)
            page.onChange(function () { return _this.navigationPanel()._resetNextPages(page.pageId); });
        return _super.prototype._initPage.call(this, page);
    };
    FullscreenWizard.prototype._onResetPage = function (page) {
        this.navigationPanel()._reset(page.pageId);
    };
    FullscreenWizard.prototype.start = function (finishCallback) {
        if (finishCallback)
            this['_finishCallback'] = finishCallback;
        this.navigationPanel() && this.navigationPanel().resetAll();
        this.navigationPanel() && this.navigationPanel().dispose();
        this.navigationPanel(new fullscreenWizardNavigation_1.WizardNavigationPanel(this));
        _super.prototype.start.call(this);
    };
    FullscreenWizard.prototype._pageDescription = function () {
        var currentStep = this.navigationPanel()._steps.filter(function (x) { return x.isActive(); })[0];
        if (currentStep) {
            return currentStep.text;
        }
        else {
            return this.pageFactory.getMetadata(this._currentPage().pageId).description;
        }
    };
    FullscreenWizard.prototype._description = function () {
        return '';
    };
    return FullscreenWizard;
}(popupWizard_1.PopupWizard));
exports.FullscreenWizard = FullscreenWizard;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var utils_1 = __webpack_require__(1);
var WizardNavigationPanel = (function (_super) {
    __extends(WizardNavigationPanel, _super);
    function WizardNavigationPanel(wizard) {
        var _this = _super.call(this) || this;
        _this._steps = [];
        _this._disposables.push(wizard._currentPage.subscribe(function (newPage) {
            var currentStep = _this._steps.filter(function (step) { return step.pageIds.some(function (x) { return x === newPage.pageId; }); })[0];
            if (currentStep) {
                currentStep.currentPageId = newPage.pageId;
                currentStep.disabled(false);
                _this._setStepVisible(currentStep.stepIndex);
            }
        }));
        Object.keys(wizard.pageFactory.metadata).forEach(function (pageId) {
            var item = wizard.pageFactory.metadata[pageId];
            var navigationItem = _this._steps.filter(function (x) { return x.text === item.navigationPanelText; })[0];
            if (navigationItem) {
                navigationItem.pageIds.push(pageId);
            }
            else {
                var navigationStep = {
                    text: item.navigationPanelText,
                    pageIds: [pageId],
                    currentPageId: null,
                    stepIndex: _this._steps.length,
                    disabled: ko.observable(true),
                    visible: ko.observable(true)
                };
                _this._disposables.push(navigationStep.isActive = ko.computed(function () {
                    return wizard._currentPage() && navigationStep.currentPageId === wizard._currentPage().pageId;
                }));
                navigationStep.clickAction = function () {
                    if (!navigationStep.isActive())
                        wizard.goToPage(navigationStep.currentPageId);
                };
                _this._steps.push(navigationStep);
            }
        });
        _this._disposables.push(_this.isVisible = ko.computed(function () {
            return _this._steps.filter(function (step) { return step.visible(); }).length > 1;
        }));
        return _this;
    }
    WizardNavigationPanel.prototype.resetAll = function () {
        this._steps.forEach(function (step) {
            step.disabled(true);
        });
    };
    WizardNavigationPanel.prototype._currentStep = function (pageId) {
        return this._steps.filter(function (x) { return x.currentPageId === pageId; })[0];
    };
    WizardNavigationPanel.prototype._reset = function (pageId) {
        var currentStep = this._currentStep(pageId);
        currentStep && currentStep.disabled(true);
    };
    WizardNavigationPanel.prototype._resetNextPages = function (pageId) {
        var currentStep = this._currentStep(pageId);
        if (!currentStep)
            return;
        for (var i = currentStep.stepIndex + 1; i < this._steps.length; i++) {
            this._steps[i].disabled(true);
        }
    };
    WizardNavigationPanel.prototype._setStepVisible = function (currentPageIndex) {
        var previousSteps = this._steps.filter(function (_, index) { return index < currentPageIndex; });
        if (previousSteps.length > 0 && !previousSteps.some(function (step) { return !step.disabled(); })) {
            previousSteps.forEach(function (step) { return step.visible(false); });
        }
    };
    return WizardNavigationPanel;
}(utils_1.Disposable));
exports.WizardNavigationPanel = WizardNavigationPanel;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var editor_1 = __webpack_require__(6);
var UndoEditor = (function (_super) {
    __extends(UndoEditor, _super);
    function UndoEditor(info, level, parentDisabled, textToSearch) {
        return _super.call(this, info, level, parentDisabled, textToSearch) || this;
    }
    UndoEditor.prototype.generateValue = function (undoEngine) {
        var _this = this;
        if (!this.undoValue) {
            this._disposables.push(this.undoValue = ko.computed({
                read: function () {
                    return _this.value();
                },
                write: function (val) {
                    undoEngine().start();
                    _this.value(val);
                    undoEngine().end();
                }
            }));
        }
        return this.undoValue;
    };
    return UndoEditor;
}(editor_1.Editor));
exports.UndoEditor = UndoEditor;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _serializer_1 = __webpack_require__(10);
var _arrayutils_1 = __webpack_require__(0);
var _queryBuilderObjectsProvider_1 = __webpack_require__(43);
var property_1 = __webpack_require__(45);
var criteriaOperator_1 = __webpack_require__(45);
var utils_1 = __webpack_require__(147);
var GroupFilterEditorSerializer = (function (_super) {
    __extends(GroupFilterEditorSerializer, _super);
    function GroupFilterEditorSerializer(_columns) {
        var _this = _super.call(this) || this;
        _this._columns = _columns;
        _this._aggregatePropertyName = function (operand) {
            var itemColumnAggregate = _this._findAggregatedColumn(function (c) { return c.actualName() === operand.propertyName; });
            return itemColumnAggregate ? _this._columnDisplayName(itemColumnAggregate) : operand.propertyName;
        };
        return _this;
    }
    GroupFilterEditorSerializer.prototype._columnDisplayName = function (column) {
        return column.table() + '.' + column.actualName();
    };
    GroupFilterEditorSerializer.prototype._findAggregatedColumn = function (predicate) {
        return _arrayutils_1.find(this._columns(), function (c) { return _queryBuilderObjectsProvider_1.isAggregatedExpression(c) && predicate(c); });
    };
    GroupFilterEditorSerializer.prototype.serializeOperandProperty = function (operand) {
        var _this = this;
        var column = this._findAggregatedColumn(function (c) { return operand.propertyName === _this._columnDisplayName(c); });
        return '[' + (column ? column.actualName() : operand.propertyName) + ']';
    };
    GroupFilterEditorSerializer.prototype.deserialize = function (stringCriteria) {
        var _this = this;
        var operand = criteriaOperator_1.CriteriaOperator.parse(stringCriteria);
        if (operand) {
            utils_1.criteriaForEach(operand, function (operator) {
                if (operator instanceof property_1.OperandProperty) {
                    operator['propertyName'] = _this._aggregatePropertyName(operator);
                }
            });
        }
        return _super.prototype.deserializeOperand.call(this, operand);
    };
    return GroupFilterEditorSerializer;
}(_serializer_1.FilterEditorSerializer));
exports.GroupFilterEditorSerializer = GroupFilterEditorSerializer;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Criteria.Utils;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var operandParameterSurface_1 = __webpack_require__(172);
var localization_utils_1 = __webpack_require__(1);
var parameterModel_1 = __webpack_require__(57);
var OperandParameterQBSurface = (function (_super) {
    __extends(OperandParameterQBSurface, _super);
    function OperandParameterQBSurface(operator, parent, fieldListProvider, path) {
        var _this = _super.call(this, operator, parent, fieldListProvider, path) || this;
        _this.createParameter = function () {
            if (_this.canCreateParameters) {
                _this.model.parameterName = _this.parameterName();
                _this._createParameter(_this.parameterName(), _this._parameterType);
                _this.helper.onChange();
            }
        };
        _this._parameterName = ko.observable('');
        _this.isEditable = ko.observable(false);
        _this.defaultDisplay = OperandParameterQBSurface.defaultDisplay;
        _this._parameterName(ko.unwrap(operator.parameterName));
        _this.canCreateParameters = _this.helper.canCreateParameters;
        _this.fieldsOptions = parent.leftPart.fieldsOptions;
        _this.parameterName = ko.pureComputed({
            read: function () {
                return _this._parameterName() || (_this.canCreateParameters && OperandParameterQBSurface.defaultDisplay() || '');
            },
            write: function (newVal) {
                if (newVal !== OperandParameterQBSurface.defaultDisplay() && newVal) {
                    _this.model.parameterName = ko.unwrap(newVal);
                    _this._parameterName(_this.model.parameterName);
                }
            }
        });
        if (_this.canCreateParameters && !_this.isDefaultTextDisplayed() && !ko.unwrap(_this.fieldListProvider).hasParameter(operator.parameterName)) {
            _this.createParameter();
        }
        return _this;
    }
    Object.defineProperty(OperandParameterQBSurface.prototype, "_parameterType", {
        get: function () {
            return this.fieldsOptions() && this.fieldsOptions().selected() && this.fieldsOptions().selected()['dataType'] || 'System.String';
        },
        enumerable: true,
        configurable: true
    });
    OperandParameterQBSurface.prototype._createParameter = function (name, dataType) {
        if (name !== '' && name !== OperandParameterQBSurface.defaultDisplay() && this.helper.parameters().filter(function (parameter) { return parameter.name() === name; }).length === 0) {
            var parameter = new parameterModel_1.ParameterViewModel({ '@Name': name, '@Type': dataType });
            this.helper.newParameters.push(parameter);
        }
    };
    OperandParameterQBSurface.prototype.isDefaultTextDisplayed = function () {
        return this.parameterName() === OperandParameterQBSurface.defaultDisplay();
    };
    OperandParameterQBSurface.defaultDisplay = function () { return localization_utils_1.getLocalization('Create new parameter', 'AnalyticsCoreStringId.FilterEditor_Operand_CreateNewParameter'); };
    return OperandParameterQBSurface;
}(operandParameterSurface_1.OperandParameterSurface));
exports.OperandParameterQBSurface = OperandParameterQBSurface;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var operandPropertySurface_1 = __webpack_require__(172);
var OperandPropertyQBSurface = (function (_super) {
    __extends(OperandPropertyQBSurface, _super);
    function OperandPropertyQBSurface(operator, parent, fieldListProvider, path) {
        return _super.call(this, operator, parent, fieldListProvider, path) || this;
    }
    OperandPropertyQBSurface.prototype._updateSpecifics = function () {
        OperandPropertyQBSurface.updateSpecifics(this);
    };
    OperandPropertyQBSurface.updateSpecifics = function (propertySurface) {
        var fieldList = ko.unwrap(propertySurface.fieldListProvider);
        if (fieldList && fieldList.getColumnInfo) {
            var item = fieldList.getColumnInfo(propertySurface.propertyName());
            if (item) {
                propertySurface.specifics(item.specifics.toLowerCase());
                propertySurface.dataType(item.dataType);
                var _fieldsOptions = ko.unwrap(propertySurface.fieldsOptions);
                if (_fieldsOptions)
                    _fieldsOptions.selected(item);
            }
        }
    };
    return OperandPropertyQBSurface;
}(operandPropertySurface_1.OperandPropertySurface));
exports.OperandPropertyQBSurface = OperandPropertyQBSurface;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var helper_1 = __webpack_require__(6);
var _addon_1 = __webpack_require__(10);
var _operandParameterQBSurface_1 = __webpack_require__(148);
var _operandPropertyQBSurface_1 = __webpack_require__(149);
var parameterModelMeta_1 = __webpack_require__(46);
var utils_1 = __webpack_require__(147);
var parameter_1 = __webpack_require__(45);
var QBFilterEditorHelper = (function (_super) {
    __extends(QBFilterEditorHelper, _super);
    function QBFilterEditorHelper(parametersMode) {
        var _this = _super.call(this) || this;
        _this.handlers.changeParameter = function (criteria, popupService) {
            return {
                data: new _addon_1.FilterEditorAddOn(criteria, popupService, 'changeParameter', 'items', 'dxqb-filtereditor-parameterspopup'),
                templateName: 'dxqb-filtereditor-changeparameter'
            };
        };
        _this.mapper.Parameter = _operandParameterQBSurface_1.OperandParameterQBSurface;
        _this.mapper.Property = _operandPropertyQBSurface_1.OperandPropertyQBSurface;
        if (parametersMode === parameterModelMeta_1.ParametersMode.ReadWrite) {
            _this.canCreateParameters = true;
            _this.newParameters = ko.observableArray([]);
            _this.onEditorFocusOut = function (criteria) {
                if (!criteria)
                    return;
                var parameters = _this.newParameters();
                var usesParameters = [];
                utils_1.criteriaForEach(criteria, function (child) {
                    if (child instanceof parameter_1.OperandParameter) {
                        var parameter = parameters.filter(function (x) { return x.name() === child.parameterName; })[0];
                        if (parameter)
                            usesParameters.push(parameter);
                    }
                });
                if (usesParameters.length === 0) {
                    _this.newParameters.splice(0);
                    return;
                }
                var uselessParameters = parameters.filter(function (x) { return usesParameters.indexOf(x) === -1; });
                for (var i = 0; i < uselessParameters.length; i++) {
                    var parameterIndex = parameters.indexOf(uselessParameters[i]);
                    if (parameterIndex !== -1)
                        parameters.splice(parameterIndex, 1);
                }
                _this.newParameters.valueHasMutated();
            };
            _this.onClosing = function () {
                _this.newParameters([]);
            };
        }
        _this.canSelectLists = false;
        _this.getDisplayPropertyName = function () { return $.Deferred().resolve('').promise(); };
        return _this;
    }
    return QBFilterEditorHelper;
}(helper_1.FilterEditorHelper));
exports.QBFilterEditorHelper = QBFilterEditorHelper;
exports.QBFilterEditorHelperDefault = QBFilterEditorHelper;
function _setQBFilterEditorHelperDefault(helperType) {
    exports.QBFilterEditorHelperDefault = helperType;
}
exports._setQBFilterEditorHelperDefault = _setQBFilterEditorHelperDefault;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var filtereditoroptions_1 = __webpack_require__(6);
var _qbFilterEditorHelper_1 = __webpack_require__(150);
var parameterModelMeta_1 = __webpack_require__(46);
var parameter_1 = __webpack_require__(45);
var QBFilterStringOptions = (function (_super) {
    __extends(QBFilterStringOptions, _super);
    function QBFilterStringOptions(filterString, dataMember, disabled, title) {
        return _super.call(this, filterString, dataMember, disabled, title) || this;
    }
    QBFilterStringOptions.prototype.initializeFilterStringHelper = function (parameters, parametersMode, serializer) {
        var _this = this;
        var helper = new _qbFilterEditorHelper_1.QBFilterEditorHelperDefault(parametersMode);
        helper.canChoiceParameters = parametersMode !== parameterModelMeta_1.ParametersMode.Disabled;
        if (serializer) {
            helper.serializer = serializer;
        }
        if (parametersMode === parameterModelMeta_1.ParametersMode.ReadWrite) {
            helper.parameters = ko.computed(function () { return [].concat(parameters(), helper.newParameters()); });
            helper.onSave = function (operandProperty) {
                var newParameters = helper.newParameters();
                parameters.push.apply(parameters, newParameters);
                helper.newParameters([]);
            };
        }
        else {
            if (parametersMode === parameterModelMeta_1.ParametersMode.Read)
                helper.parameters = parameters;
            var oldCheckRightPart = helper.criteriaTreeValidator._checkRightPart;
            helper.criteriaTreeValidator._checkRightPart = function (criteriaOperator) {
                if (!(criteriaOperator instanceof parameter_1.OperandParameter))
                    return oldCheckRightPart.apply(_this, [criteriaOperator]);
                if (parametersMode === parameterModelMeta_1.ParametersMode.Disabled) {
                    return false;
                }
                else if (parametersMode === parameterModelMeta_1.ParametersMode.Read) {
                    var parameterName = criteriaOperator.parameterName;
                    return parameters.peek().filter(function (x) { return x.name() === parameterName; }).length !== 0;
                }
            };
        }
        this.helper = helper;
    };
    return QBFilterStringOptions;
}(filtereditoroptions_1.FilterStringOptions));
exports.QBFilterStringOptions = QBFilterStringOptions;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var columnExpression_1 = __webpack_require__(60);
var _arrayutils_1 = __webpack_require__(0);
var _getNameHelpers_1 = __webpack_require__(0);
var ColumnExpressionCollectionHelper = (function () {
    function ColumnExpressionCollectionHelper() {
    }
    ColumnExpressionCollectionHelper.find = function (collection, tableName, columnName) {
        return _arrayutils_1.findFirstItemMatchesCondition(collection(), function (item) { return item.column() === columnName && item.table() === tableName; });
    };
    ColumnExpressionCollectionHelper.findByName = function (collection, actualName) {
        return _arrayutils_1.findFirstItemMatchesCondition(collection(), function (item) { return item.actualName() === actualName; });
    };
    ColumnExpressionCollectionHelper.removeDependend = function (collection, tableName) {
        collection.remove(function (item) { return item.isDepended(tableName); });
    };
    ColumnExpressionCollectionHelper.setUniqueAlias = function (collection, alias) {
        if (ColumnExpressionCollectionHelper.findByName(collection, alias)) {
            return _getNameHelpers_1.getUniqueName(collection().map(function (item) { return item.actualName(); }), alias + '_');
        }
        return alias;
    };
    ColumnExpressionCollectionHelper.addNew = function (query, collection, table, column) {
        var newItem = new columnExpression_1.ColumnExpression({ '@Table': table, '@Name': column, '@ItemType': 'Column' }, query);
        if (query.columns === collection && !newItem.alias() && ColumnExpressionCollectionHelper.findByName(collection, newItem.actualName())) {
            newItem.alias(this.setUniqueAlias(collection, newItem.table() + '_' + newItem.column()));
        }
        collection.push(newItem);
        return newItem;
    };
    ColumnExpressionCollectionHelper.remove = function (collection, tableName, columnName) {
        collection.remove(function (item) { return item.column() === columnName && item.table() === tableName; });
    };
    return ColumnExpressionCollectionHelper;
}());
exports.ColumnExpressionCollectionHelper = ColumnExpressionCollectionHelper;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var queryElementModel_1 = __webpack_require__(28);
var columnExpression_1 = __webpack_require__(60);
var _arrayutils_1 = __webpack_require__(0);
var columnExpressionMeta_1 = __webpack_require__(61);
var localization_utils_1 = __webpack_require__(1);
var allColumnsModelMeta_1 = __webpack_require__(154);
var AllColumnsViewModel = (function (_super) {
    __extends(AllColumnsViewModel, _super);
    function AllColumnsViewModel(parent, serializer) {
        var _this = _super.call(this, { '@ControlType': 'Column' }, parent, serializer) || this;
        var query = parent.parentModel();
        var targetColumn = ko.pureComputed(function () {
            return _arrayutils_1.findFirstItemMatchesCondition(query.columns(), function (item) {
                return parent.actualName() === item.table() && columnExpressionMeta_1.ColumnType.AllColumns === item.itemType();
            });
        });
        _this.selected = ko.pureComputed({
            read: function () { return !!targetColumn(); },
            write: function (value) {
                if (!!targetColumn() === value)
                    return;
                if (value) {
                    query.columns.push(new columnExpression_1.ColumnExpression({ '@ItemType': columnExpressionMeta_1.ColumnType.AllColumns, '@Table': parent.actualName() }, query, serializer));
                }
                else {
                    query.columns.remove(function (item) { return parent.actualName() === item.table() && columnExpressionMeta_1.ColumnType.AllColumns === item.itemType(); });
                }
            }
        });
        var name = localization_utils_1.getLocalization('(All Columns)', 'DataAccessStringId.QueryBuilder_AllColumns');
        _this.name = ko.pureComputed(function () { return (name.charAt(0) === '*' ? name : '* ' + name); });
        return _this;
    }
    AllColumnsViewModel.prototype.getInfo = function () {
        return allColumnsModelMeta_1.allColumnsSerializationInfo;
    };
    return AllColumnsViewModel;
}(queryElementModel_1.QueryElementBaseViewModel));
exports.AllColumnsViewModel = AllColumnsViewModel;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(44);
exports.allColumnsSerializationInfo = [metadata_1.name, metadata_1.selected];


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var _dragDropHandler_1 = __webpack_require__(0);
var columnSurface_1 = __webpack_require__(62);
var connectionPointSurface_1 = __webpack_require__(22);
var _surfaceHelpers_1 = __webpack_require__(0);
var routedConnectorModel_1 = __webpack_require__(31);
var routedConnectorSurface_1 = __webpack_require__(48);
var utils_1 = __webpack_require__(21);
var _scrollProcessor_1 = __webpack_require__(0);
var ColumnDragHandler = (function (_super) {
    __extends(ColumnDragHandler, _super);
    function ColumnDragHandler(querySurface, selection, undoEngine, snapHelper, dragHelperContent) {
        var _this = _super.call(this, querySurface, selection, undoEngine, snapHelper, dragHelperContent) || this;
        _this.querySurface = querySurface;
        _this.undoEngine = undoEngine;
        _this._dragColumn = ko.observable(null);
        _this._dragConditionSurface = null;
        _this.dragDropConnector = ko.observable(null);
        _this.cursor = 'arrow';
        _this.containment = '.dxrd-ghost-container';
        _this['helper'] = undefined;
        return _this;
    }
    ColumnDragHandler.prototype._needToCreateRelation = function () {
        if (!(this.selection.dropTarget && this.selection.dropTarget instanceof columnSurface_1.ColumnSurface))
            return false;
        var table = this.selection.dropTarget.getControlModel().parentModel();
        return table !== this.getDragColumn().parentModel();
    };
    ColumnDragHandler.prototype.startDrag = function (control) {
        this._scrollProcessor = new _scrollProcessor_1.dxScrollProcessor(document.getElementsByClassName('dxqb-mainwin')[0]);
        if (control instanceof connectionPointSurface_1.ConnectionPointSurface) {
            var condition = control.getControlModel().parentModel();
            this._dragConditionSurface = _surfaceHelpers_1.findSurface(condition);
            if (!this._dragConditionSurface)
                return;
            this._dragConditionSurface.isVisible(false);
            this._dragColumn((condition.startPoint() === control.getControlModel()) ? condition.nestedColumn() : condition.parentColumn());
        }
        else if (!(control instanceof columnSurface_1.ColumnSurface)) {
            throw new Error('ColumnDragHandler can be applied to the Column only.');
        }
        else {
            this._dragColumn(control.getControlModel());
        }
        var connectorModel = new routedConnectorModel_1.RoutedConnectorViewModel({}, this.querySurface().getControlModel());
        this.dragDropConnector(new routedConnectorSurface_1.RoutedConnectorSurface(connectorModel, this.surface()));
    };
    ColumnDragHandler.prototype.setConnectorPoints = function (cursorPosition) {
        var startColumn = this._dragColumn(), connectorModel = this.dragDropConnector().getControlModel();
        if (this._needToCreateRelation()) {
            var points = utils_1.determineConnectingPoints(startColumn, this.selection.dropTarget.getControlModel());
            connectorModel.startPoint().connectingPoint(points.start);
            connectorModel.endPoint().connectingPoint(points.end);
        }
        else {
            var _leftConnectionPointX = this.querySurface().rtl() ? this.querySurface().pageWidth() - startColumn.leftConnectionPoint.location.x() : startColumn.leftConnectionPoint.location.x();
            var _rightConnectionPointX = this.querySurface().rtl() ? this.querySurface().pageWidth() - startColumn.rightConnectionPoint.location.x() : startColumn.rightConnectionPoint.location.x();
            var point = Math.abs(_leftConnectionPointX - cursorPosition.left) > Math.abs(_rightConnectionPointX - cursorPosition.left) ?
                startColumn.rightConnectionPoint : startColumn.leftConnectionPoint;
            connectorModel.startPoint().connectingPoint(point);
            this.dragDropConnector().endPoint().rect({ top: cursorPosition.top, left: cursorPosition.left });
        }
    };
    ColumnDragHandler.prototype.drag = function (event, ui) {
        var scrollOffset = this._scrollProcessor.getScrollOffset();
        ui.position.left += (ui['scroll'].left + scrollOffset.left);
        ui.position.top += (ui['scroll'].top + scrollOffset.top);
        ui['delta'].left = ui.position.left - this.surface()['underCursor']().x - 6;
        ui['delta'].top = ui.position.top - this.surface()['underCursor']().y - 6;
        this.setConnectorPoints(this._getAbsoluteSurfacePosition(ui));
        this._scrollProcessor.processOffset({ x: event.clientX, y: event.clientY });
    };
    ColumnDragHandler.prototype.doStopDrag = function () {
        this._scrollProcessor.dispose();
        this._scrollProcessor = null;
        this.dragHelperContent.reset();
        this.dragDropConnector(null);
        try {
            var editableCondition = null;
            if (this._dragConditionSurface && !this._dragConditionSurface.isVisible()) {
                editableCondition = this._dragConditionSurface.getControlModel();
                this._dragConditionSurface.isVisible(true);
            }
            var query = this.querySurface().getControlModel();
            if (this._needToCreateRelation()) {
                var nestedColumn = this.selection.dropTarget.getControlModel();
                this.undoEngine().start();
                if (editableCondition) {
                    editableCondition.parentModel().removeChild(editableCondition);
                }
                var condition = query.cerateJoinCondition(this._dragColumn(), nestedColumn);
                this.undoEngine().end();
                if (condition !== null) {
                    this.selection.initialize(_surfaceHelpers_1.findSurface(condition));
                }
            }
        }
        finally {
            this._dragColumn(null);
        }
    };
    ColumnDragHandler.prototype.getDragColumn = function () {
        return this._dragColumn();
    };
    return ColumnDragHandler;
}(_dragDropHandler_1.DragDropHandler));
exports.ColumnDragHandler = ColumnDragHandler;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _treelistController_1 = __webpack_require__(10);
var _dbObjectDragDropHandler_1 = __webpack_require__(98);
var QueryBuilderTreeListController = (function (_super) {
    __extends(QueryBuilderTreeListController, _super);
    function QueryBuilderTreeListController(undoEngine, query) {
        var _this = _super.call(this) || this;
        var dropCallback = _dbObjectDragDropHandler_1.DbObjectDragDropHandler.getDropCallback(undoEngine, true);
        _this.dblClickHandler = function (item) {
            undoEngine().start();
            dropCallback(item.data, query());
            undoEngine().end();
        };
        return _this;
    }
    return QueryBuilderTreeListController;
}(_treelistController_1.TreeListController));
exports.QueryBuilderTreeListController = QueryBuilderTreeListController;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var propertygrid_1 = __webpack_require__(6);
var tabPanel_1 = __webpack_require__(1);
var localization_utils_1 = __webpack_require__(1);
var parameterModel_1 = __webpack_require__(57);
var queryModel_1 = __webpack_require__(58);
var _controlProperties_1 = __webpack_require__(0);
var parametersInfo = { propertyName: 'parameters', displayName: 'parameters', editor: { custom: 'dxqb-parameterspanel' } };
var selectedItemInfo = { propertyName: 'selectedItem', displayName: 'selectedItem', editor: { custom: 'dxqb-propertygrid' } };
var fieldsInfo = { propertyName: 'fields', displayName: 'fields', editor: { custom: 'dxqb-fieldspanel' } };
var queryInfo = { propertyName: 'query', displayName: 'query', editor: { custom: 'dxqb-propertygrid' } };
var AccordionTabInfo = (function (_super) {
    __extends(AccordionTabInfo, _super);
    function AccordionTabInfo(query, itemPropertiesTabInfoModel, undoEngine, focused, showParameters) {
        var _this = _super.call(this, {
            text: 'Properties',
            template: 'dxqb-properties-wrapper',
            model: AccordionTabInfo._createQBPropertyGrid(query, itemPropertiesTabInfoModel, undoEngine, showParameters)
        }) || this;
        _this.active(true);
        _this._getGroupByName('Fields').collapsed(false);
        _this._disposables.push(focused.subscribe(function (newVal) {
            if (!(newVal instanceof queryModel_1.QueryViewModel)) {
                var group = _this._getGroupByName('SelectedItem');
                group.collapsed(false);
            }
        }));
        return _this;
    }
    AccordionTabInfo._getSelectedItemPropertyName = function (model) {
        var text = 'Selection Properties';
        var id = 'AnalyticsCoreStringId.QueryBuilder_SelectionProperties';
        switch (model && model.controlType) {
            case 'Query':
                text = 'Query Properties';
                id = 'AnalyticsCoreStringId.QueryBuilder_QueryProperties';
                break;
            case 'Table':
                text = 'Table Properties';
                id = 'AnalyticsCoreStringId.QueryBuilder_TableProperties';
                break;
            case 'Column':
                text = 'Column Properties';
                id = 'AnalyticsCoreStringId.QueryBuilder_ColumnProperties';
                break;
            case 'JoinCondition':
                text = 'Relation Properties';
                id = 'AnalyticsCoreStringId.QueryBuilder_RelationProperties';
                break;
        }
        return localization_utils_1.getLocalization(text, id);
    };
    AccordionTabInfo._createWrappedObject = function (query, commonModel, undoEngine, showParameters) {
        var modelProperties = new propertygrid_1.ObjectProperties(query, null, 1);
        var modelValues = ko.computed(function () { return query() && query().parameters; });
        var info = [queryInfo, selectedItemInfo, fieldsInfo];
        var object = {
            selectedItem: commonModel,
            query: {
                editableObject: query,
                properties: modelProperties
            },
            fields: commonModel,
            isPropertyVisible: function (propertyName) {
                if (propertyName === 'selectedItem') {
                    return commonModel.editableObject() !== query();
                }
                return true;
            }
        };
        if (showParameters) {
            object['parameters'] = {
                values: modelValues,
                addHandler: function () { return new parameterModel_1.ParameterViewModel({ '@Type': 'System.String' }); },
                collapsed: false,
                undoEngine: undoEngine,
                isVisibleButton: function (index, button) { return button === 'add' || button === 'delete'; },
                template: '#dxqb-collectioneditor-template',
                textEmptyArray: { text: 'Click the Add button to create a parameter.', localizationId: 'AnalyticsCoreStringId.QueryBuilder_PageConfigureParametersEmpty' }
            };
            info.push(parametersInfo);
        }
        object['getInfo'] = function () { return info; };
        return object;
    };
    AccordionTabInfo._createGroups = function (editableObject, showParameters) {
        var _this = this;
        var groups = {
            'Query': {
                info: [queryInfo],
                displayName: function () { return localization_utils_1.getLocalization('Query Properties', 'AnalyticsCoreStringId.QueryBuilder_QueryProperties'); }
            },
            'SelectedItem': {
                info: [selectedItemInfo],
                displayName: function () { return _this._getSelectedItemPropertyName(editableObject()); }
            },
            'Fields': {
                info: [fieldsInfo],
                displayName: function () { return localization_utils_1.getLocalization('Available tables and views', 'AnalyticsCoreStringId.QueryBuilder_AvailableTables'); }
            }
        };
        if (showParameters)
            groups['Parameters'] = {
                info: [parametersInfo],
                displayName: function () { return localization_utils_1.getLocalization('Parameters', 'AnalyticsCoreStringId.QueryBuilder_Parameters'); }
            };
        return groups;
    };
    AccordionTabInfo._createQBPropertyGrid = function (query, commonModel, undoEngine, showParameters) {
        var object = this._createWrappedObject(query, commonModel, undoEngine, showParameters);
        var grid = new _controlProperties_1.ControlProperties(ko.observable(object), {
            groups: this._createGroups(commonModel.editableObject, showParameters),
            editors: object['getInfo']()
        }, undefined, false);
        return grid;
    };
    AccordionTabInfo.prototype._getGroupByName = function (name) {
        return this.model.groups.filter(function (x) { return x['_displayName'] === name; })[0];
    };
    return AccordionTabInfo;
}(tabPanel_1.TabInfo));
exports.AccordionTabInfo = AccordionTabInfo;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var controlsFactory_1 = __webpack_require__(47);
var controlsFactory_2 = __webpack_require__(27);
var metadata_1 = __webpack_require__(44);
var elementViewModel_1 = __webpack_require__(4);
var baseSurface_1 = __webpack_require__(4);
var relationModelMeta_1 = __webpack_require__(95);
var relationSurface_1 = __webpack_require__(159);
var relationModel_1 = __webpack_require__(93);
var joinConditionModelMeta_1 = __webpack_require__(160);
var joinConditionSurface_1 = __webpack_require__(161);
var joinConditionModel_1 = __webpack_require__(94);
var tableModelMeta_1 = __webpack_require__(92);
var tableSurface_1 = __webpack_require__(162);
var tableModel_1 = __webpack_require__(59);
var columnModelMeta_1 = __webpack_require__(26);
var columnSurface_1 = __webpack_require__(62);
var columnModel_1 = __webpack_require__(91);
var queryModelMeta_1 = __webpack_require__(96);
var querySurface_1 = __webpack_require__(97);
var queryModel_1 = __webpack_require__(58);
function registerControls() {
    controlsFactory_1.registerControls();
    controlsFactory_2.controlsFactory.registerControl('Unknown', {
        info: metadata_1.unknownSerializationsInfo,
        type: elementViewModel_1.ElementViewModel,
        nonToolboxItem: true,
        surfaceType: baseSurface_1.SurfaceElementBase,
        isDeleteDeny: true
    });
    controlsFactory_2.controlsFactory.registerControl('Relation', {
        info: relationModelMeta_1.relationSerializationInfo,
        defaultVal: {},
        surfaceType: relationSurface_1.RelationSurface,
        popularProperties: [],
        type: relationModel_1.RelationViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    controlsFactory_2.controlsFactory.registerControl('JoinCondition', {
        info: joinConditionModelMeta_1.joinConditionSerializationInfo,
        defaultVal: {},
        surfaceType: joinConditionSurface_1.JoinConditionSurface,
        popularProperties: ['_parentColumnName', '_nestedColumnName', 'joinType'],
        type: joinConditionModel_1.JoinConditionViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    controlsFactory_2.controlsFactory.registerControl('Table', {
        info: tableModelMeta_1.tableSerializationInfo,
        defaultVal: {},
        surfaceType: tableSurface_1.TableSurface,
        popularProperties: ['name', 'alias', 'columns'],
        type: tableModel_1.TableViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    controlsFactory_2.controlsFactory.registerControl('Column', {
        info: columnModelMeta_1.columnSerializationInfo,
        defaultVal: {},
        surfaceType: columnSurface_1.ColumnSurface,
        popularProperties: ['name', 'alias', 'selected'],
        type: columnModel_1.ColumnViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true,
        isDeleteDeny: true
    });
    controlsFactory_2.controlsFactory.registerControl('Query', {
        info: queryModelMeta_1.querySerializationsInfo,
        surfaceType: querySurface_1.QuerySurface,
        popularProperties: ['name', 'filterString', 'groupFilterString'],
        type: queryModel_1.QueryViewModel,
        elementActionsTypes: [],
        isContainer: true,
        nonToolboxItem: true,
        isDeleteDeny: true
    });
}
exports.registerControls = registerControls;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var baseSurface_1 = __webpack_require__(4);
var _arrayutils_1 = __webpack_require__(0);
var RelationSurface = (function (_super) {
    __extends(RelationSurface, _super);
    function RelationSurface(control, context) {
        var _this = _super.call(this, control, context, null) || this;
        _this.conditions = ko.observableArray();
        _this.template = 'dxqb-relation';
        _arrayutils_1.createObservableArrayMapCollection(control.conditions, _this.conditions, _this._createSurface);
        return _this;
    }
    RelationSurface.prototype._getChildrenHolderName = function () {
        return 'conditions';
    };
    return RelationSurface;
}(baseSurface_1.SurfaceElementBase));
exports.RelationSurface = RelationSurface;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editorTemplates_1 = __webpack_require__(25);
exports.ConditionType = {
    Equal: 'Equal',
    NotEqual: 'NotEqual',
    Greater: 'Greater',
    GreaterOrEqual: 'GreaterOrEqual',
    Less: 'Less',
    LessOrEqual: 'LessOrEqual'
};
exports.joinConditionSerializationInfo = [
    { propertyName: 'left', displayName: 'Left', editor: editorTemplates_1.editorTemplates.getEditor('text'), disabled: true, localizationId: 'AnalyticsCoreStringId.QueryBuilder_LeftOperand' },
    { propertyName: 'right', displayName: 'Right', editor: editorTemplates_1.editorTemplates.getEditor('text'), disabled: true, localizationId: 'AnalyticsCoreStringId.QueryBuilder_RightOperand' },
    { propertyName: 'parentColumnName', modelName: '@Parent' },
    { propertyName: 'nestedColumnName', modelName: '@Nested' },
    {
        propertyName: 'joinType',
        displayName: 'Join Type',
        editor: editorTemplates_1.editorTemplates.getEditor('combobox'),
        defaultVal: 'Inner',
        valuesArray: [
            { value: 'Inner', displayValue: 'Inner join', localizationId: 'DataAccessStringId.RelationEditorRelationTypeInnerJoin' },
            { value: 'LeftOuter', displayValue: 'Left outer join', localizationId: 'DataAccessStringId.RelationEditorRelationTypeLeftOuterJoin' }
        ],
        localizationId: 'AnalyticsCoreStringId.QueryBuilder_JoinType'
    },
    {
        propertyName: 'operator',
        modelName: '@Operator',
        displayName: 'Operator',
        editor: editorTemplates_1.editorTemplates.getEditor('combobox'),
        defaultVal: exports.ConditionType.Equal,
        valuesArray: [
            { value: 'Equal', displayValue: 'Equals to', localizationId: 'DataAccessUIStringId.JoinEditorEqualOperator' },
            { value: 'NotEqual', displayValue: 'Does not equal to', localizationId: 'DataAccessUIStringId.JoinEditorNotEqualOperator' },
            { value: 'Greater', displayValue: 'Is greater than', localizationId: 'DataAccessUIStringId.JoinEditorGreaterOperator' },
            { value: 'GreaterOrEqual', displayValue: 'Is greater than or equal to', localizationId: 'DataAccessUIStringId.JoinEditorGreaterOrEqualOperator' },
            { value: 'Less', displayValue: 'Is less than', localizationId: 'DataAccessUIStringId.JoinEditorLessOperator' },
            { value: 'LessOrEqual', displayValue: 'Is less than or equal to', localizationId: 'DataAccessUIStringId.JoinEditorLessOrEqualOperator' }
        ],
        localizationId: 'AnalyticsCoreStringId.QueryBuilder_Operator'
    },
    { propertyName: 'itemType', modelName: '@itemType' }
];


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var routedConnectorSurface_1 = __webpack_require__(48);
var JoinConditionSurface = (function (_super) {
    __extends(JoinConditionSurface, _super);
    function JoinConditionSurface(control, context) {
        var _this = _super.call(this, control, context) || this;
        _this.showArrow = ko.pureComputed(function () {
            return control.joinType() === 'LeftOuter';
        });
        return _this;
    }
    JoinConditionSurface.prototype.container = function () {
        return this.getRoot();
    };
    return JoinConditionSurface;
}(routedConnectorSurface_1.RoutedConnectorSurface));
exports.JoinConditionSurface = JoinConditionSurface;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var ko = __webpack_require__(2);
var queryElementSurface_1 = __webpack_require__(163);
var tableModel_1 = __webpack_require__(59);
var columnSurface_1 = __webpack_require__(62);
var allColumnsSurface_1 = __webpack_require__(164);
var _utils_1 = __webpack_require__(0);
var TableSurface = (function (_super) {
    __extends(TableSurface, _super);
    function TableSurface(control, context) {
        var _this = _super.call(this, control, context, null) || this;
        _this.contenttemplate = 'dxqb-table';
        _this.template = 'dxqb-table-main';
        _this.toggleSelected = function () {
            _this.getControlModel().toggleSelectedColumns();
        };
        _this.selectedWrapper = ko.pureComputed(function () {
            return _this.getControlModel().allColumnsSelected();
        });
        _this.isInitialized = control.isInitialized;
        _this.columns = ko.pureComputed(function () {
            return control.columns().map(function (columnVewModel) { return new columnSurface_1.ColumnSurface(columnVewModel, context); });
        });
        _this.asterisk = new allColumnsSurface_1.AllColumnsSurface(control.asterisk, context);
        return _this;
    }
    TableSurface.prototype.resizable = function (resizeHandler, element) {
        return _utils_1.extend({}, resizeHandler, {
            handles: 'e, w',
            $selectedNodes: $(element),
            minWidth: tableModel_1.TableViewModel.TABLE_MIN_WIDTH,
        });
    };
    return TableSurface;
}(queryElementSurface_1.QueryElementBaseSurface));
exports.TableSurface = TableSurface;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var baseSurface_1 = __webpack_require__(4);
var _utils_1 = __webpack_require__(0);
var QueryElementBaseSurface = (function (_super) {
    __extends(QueryElementBaseSurface, _super);
    function QueryElementBaseSurface(control, context, unitProperties) {
        var _this = _super.call(this, control, context, _utils_1.extend({}, QueryElementBaseSurface._unitProperties, unitProperties)) || this;
        _this.template = 'dx-diagram-element';
        _this.selectiontemplate = 'dx-diagram-element-selection';
        _this.contenttemplate = 'dx-diagram-element-content';
        _this.margin = ko.observable(0);
        return _this;
    }
    QueryElementBaseSurface._unitProperties = {
        _height: function (o) {
            return o.size.height;
        },
        _width: function (o) {
            return o.size.width;
        },
        _x: function (o) {
            return o.location.x;
        },
        _y: function (o) {
            return o.location.y;
        }
    };
    return QueryElementBaseSurface;
}(baseSurface_1.SurfaceElementBase));
exports.QueryElementBaseSurface = QueryElementBaseSurface;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var baseSurface_1 = __webpack_require__(4);
var _dragDropHandler_1 = __webpack_require__(0);
var AllColumnsSurface = (function (_super) {
    __extends(AllColumnsSurface, _super);
    function AllColumnsSurface(control, context) {
        var _this = _super.call(this, control, context, null) || this;
        _this.template = 'dxqb-table-asterisk-field';
        _this.toggleSelected = function () {
            _this.getControlModel().selected(!_this.getControlModel().selected());
        };
        _this.selectedWrapper = ko.pureComputed(function () {
            return _this.getControlModel().selected();
        });
        _this.isOverAsterisk = ko.pureComputed(function () {
            return _this.underCursor().isOver && !_dragDropHandler_1.DragDropHandler.started();
        });
        _this.cssClasses = function () {
            return {
                'dxd-state-active': _this.selected,
                'dxd-state-hovered': _this.isOverAsterisk()
            };
        };
        return _this;
    }
    return AllColumnsSurface;
}(baseSurface_1.SurfaceElementBase));
exports.AllColumnsSurface = AllColumnsSurface;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var localization_utils_1 = __webpack_require__(1);
var _infoMessageHelpers_1 = __webpack_require__(0);
var _requestwrapper_1 = __webpack_require__(16);
var JSQueryBuilder = (function () {
    function JSQueryBuilder(_queryBuilderModel) {
        this._queryBuilderModel = _queryBuilderModel;
    }
    Object.defineProperty(JSQueryBuilder.prototype, "queryBuilderModel", {
        get: function () {
            return this._queryBuilderModel();
        },
        set: function (newVal) {
            this._queryBuilderModel(newVal);
        },
        enumerable: true,
        configurable: true
    });
    JSQueryBuilder.prototype.UpdateLocalization = function (localization) {
        localization_utils_1.updateLocalization(localization);
    };
    JSQueryBuilder.prototype.GetQueryBuilderModel = function () {
        return this.queryBuilderModel;
    };
    JSQueryBuilder.prototype.GetJsonQueryModel = function () {
        return { 'Query': this.queryBuilderModel.model().serialize() };
    };
    JSQueryBuilder.prototype.GetSaveQueryModel = function () {
        return {
            queryLayout: JSON.stringify(this.GetJsonQueryModel()),
            connection: this.SerializeDataConnection()
        };
    };
    JSQueryBuilder.prototype.SerializeDataConnection = function () {
        var connection = this.queryBuilderModel.model().dbSchemaProvider.connection;
        return _requestwrapper_1.serializeDataConnection(connection);
    };
    JSQueryBuilder.prototype.AdjustControlCore = function () {
        this.queryBuilderModel && this.queryBuilderModel.updateSurfaceSize();
    };
    JSQueryBuilder.prototype.Save = function () {
        this.queryBuilderModel && this.queryBuilderModel.model().onSave();
    };
    JSQueryBuilder.prototype.ShowPreview = function () {
        this.queryBuilderModel && this.queryBuilderModel.showPreview();
    };
    JSQueryBuilder.prototype.IsQueryValid = function () {
        return this.queryBuilderModel && this.queryBuilderModel.model().isValid();
    };
    JSQueryBuilder.prototype.OnCallback = function (result) {
        if (result.queryValidationError) {
            _infoMessageHelpers_1.NotifyAboutWarning(result.queryValidationError, true);
        }
    };
    return JSQueryBuilder;
}());
exports.JSQueryBuilder = JSQueryBuilder;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var localization = __webpack_require__(205);
var localization_1 = __webpack_require__(206);
var EventGenerator = (function () {
    function EventGenerator() {
    }
    EventGenerator.generateQueryBuilderEvents = function (fireEvent) {
        function customizeActions(actions) {
            fireEvent('CustomizeMenuActions', {
                Actions: actions,
                GetById: function (actionId) {
                    return actionId ? actions.filter(function (item) { return actionId === item.id; })[0] : null;
                }
            });
        }
        function customizeLocalization(localizationCallbacks) {
            fireEvent('CustomizeLocalization', {
                LoadMessages: function (messages) {
                    if (!messages)
                        return;
                    if (typeof messages.then === 'function') {
                        localizationCallbacks.push(messages);
                    }
                    else {
                        localization_1.loadMessages(messages);
                    }
                },
                WidgetLocalization: localization
            });
        }
        function onServerError(args) {
            fireEvent('OnServerError', { Error: args });
        }
        function beforeRender(designerModel) {
            fireEvent('BeforeRender', designerModel);
        }
        function saveQueryRequested(queryModel) {
            fireEvent('SaveQueryRequested', queryModel);
        }
        return {
            beforeRender: beforeRender,
            saveQueryRequested: saveQueryRequested,
            customizeActions: customizeActions,
            customizeLocalization: customizeLocalization,
            onServerError: onServerError
        };
    };
    return EventGenerator;
}());
exports.EventGenerator = EventGenerator;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var metadata_1 = __webpack_require__(20);
var diagramModel_1 = __webpack_require__(66);
var localization_utils_1 = __webpack_require__(1);
var controlsFactory_1 = __webpack_require__(47);
var diagramSurface_1 = __webpack_require__(67);
var _designerInitializer_1 = __webpack_require__(0);
var connectionPointDragHandler_1 = __webpack_require__(101);
var connectingPointDragHandler_1 = __webpack_require__(99);
var _surfaceHelpers_1 = __webpack_require__(0);
var _internal_1 = __webpack_require__(0);
exports.groups = {
    'Appearance': { info: [] },
    'Behavior': { info: [] },
    'Design': { info: [metadata_1.name] },
    'Layout': { info: [metadata_1.location, metadata_1.size, diagramModel_1.pageWidth, diagramModel_1.pageHeight] }
};
function createDiagramDesigner(element, diagramSource, localization, rtl) {
    if (localization) {
        localization_utils_1.addCultureInfo({
            messages: localization
        });
    }
    controlsFactory_1.registerControls();
    var diagram = ko.pureComputed(function () { return new diagramModel_1.DiagramViewModel(diagramSource()); }), surface = ko.pureComputed(function () {
        var surface = new diagramSurface_1.DiagramSurface(diagram());
        return surface;
    });
    var designerModel = _designerInitializer_1.createDesigner(diagram, surface, controlsFactory_1.diagramControlsFactory, exports.groups, undefined, undefined, rtl);
    designerModel.connectionPointDragHandler = new connectionPointDragHandler_1.ConnectionPointDragHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.connectingPointDragHandler = new connectingPointDragHandler_1.ConnectingPointDragHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.isLoading(false);
    designerModel.selection.focused(surface());
    $(element).children().remove();
    ko.applyBindings(designerModel, element);
    var updateSurfaceContentSize_ = _surfaceHelpers_1.updateSurfaceContentSize(designerModel.surfaceSize, element);
    var onResize = function () {
        updateSurfaceContentSize_();
    };
    window.addEventListener('resize', onResize);
    _internal_1.addDisposeCallback(element, function () {
        window.removeEventListener('resize', onResize);
    });
    designerModel.tabPanel.width.subscribe(function () {
        updateSurfaceContentSize_();
    });
    updateSurfaceContentSize_();
    return designerModel;
}
exports.createDiagramDesigner = createDiagramDesigner;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ace_1 = __webpack_require__(184);
if (!!ace_1.default) {
    ace_1.default.define('ace/mode/sql_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules', 'ace/mode/doc_comment_highlight_rules'], function (require, exports, module) {
        'use strict';
        var oop = ace_1.default.require('ace/lib/oop');
        var DocCommentHighlightRules = ace_1.default.require('ace/mode/doc_comment_highlight_rules').DocCommentHighlightRules;
        var TextHighlightRules = ace_1.default.require('ace/mode/text_highlight_rules').TextHighlightRules;
        var SqlServerHighlightRules = function () {
            var logicalOperators = 'ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|SOME';
            logicalOperators += '|NULL|IS|APPLY|INNER|OUTER|LEFT|RIGHT|JOIN|CROSS';
            var builtinFunctions = ('OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|' +
                'AVG|CHECKSUM_AGG|COUNT|COUNT_BIG|GROUPING|GROUPING_ID|MAX|MIN|STDEV|STDEVP|SUM|VAR|VARP|' +
                'DENSE_RANK|NTILE|RANK|ROW_NUMBER' +
                '@@DATEFIRST|@@DBTS|@@LANGID|@@LANGUAGE|@@LOCK_TIMEOUT|@@MAX_CONNECTIONS|@@MAX_PRECISION|@@NESTLEVEL|@@OPTIONS|@@REMSERVER|@@SERVERNAME|@@SERVICENAME|@@SPID|@@TEXTSIZE|@@VERSION|' +
                'CAST|CONVERT|PARSE|TRY_CAST|TRY_CONVERT|TRY_PARSE' +
                '@@CURSOR_ROWS|@@FETCH_STATUS|CURSOR_STATUS|' +
                '@@DATEFIRST|@@LANGUAGE|CURRENT_TIMESTAMP|DATEADD|DATEDIFF|DATEFROMPARTS|DATENAME|DATEPART|DATETIME2FROMPARTS|DATETIMEFROMPARTS|DATETIMEOFFSETFROMPARTS|DAY|EOMONTH|GETDATE|GETUTCDATE|ISDATE|MONTH|SET DATEFIRST|SET DATEFORMAT|SET LANGUAGE|SMALLDATETIMEFROMPARTS|SP_HELPLANGUAGE|SWITCHOFFSET|SYSDATETIME|SYSDATETIMEOFFSET|SYSUTCDATETIME|TIMEFROMPARTS|TODATETIMEOFFSET|YEAR|' +
                'CHOOSE|IIF|' +
                'ABS|ACOS|ASIN|ATAN|ATN2|CEILING|COS|COT|DEGREES|EXP|FLOOR|LOG|LOG10|PI|POWER|RADIANS|RAND|ROUND|SIGN|SIN|SQRT|SQUARE|TAN|' +
                '@@PROCID|APPLOCK_MODE|APPLOCK_TEST|APP_NAME|ASSEMBLYPROPERTY|COLUMNPROPERTY|COL_LENGTH|COL_NAME|DATABASEPROPERTYEX|DATABASE_PRINCIPAL_ID|DB_ID|DB_NAME|FILEGROUPPROPERTY|FILEGROUP_ID|FILEGROUP_NAME|FILEPROPERTY|FILE_ID|FILE_IDEX|FILE_NAME|FULLTEXTCATALOGPROPERTY|FULLTEXTSERVICEPROPERTY|INDEXKEY_PROPERTY|INDEXPROPERTY|INDEX_COL|OBJECTPROPERTY|OBJECTPROPERTYEX|OBJECT_DEFINITION|OBJECT_ID|OBJECT_NAME|OBJECT_SCHEMA_NAME|ORIGINAL_DB_NAME|PARSENAME|SCHEMA_ID|SCHEMA_NAME|SCOPE_IDENTITY|SERVERPROPERTY|STATS_DATE|TYPEPROPERTY|TYPE_ID|TYPE_NAME|' +
                'CERTENCODED|CERTPRIVATEKEY|CURRENT_USER|DATABASE_PRINCIPAL_ID|HAS_PERMS_BY_NAME|IS_MEMBER|IS_ROLEMEMBER|IS_SRVROLEMEMBER|ORIGINAL_LOGIN|PERMISSIONS|PWDCOMPARE|PWDENCRYPT|SCHEMA_ID|SCHEMA_NAME|SESSION_USER|SUSER_ID|SUSER_NAME|SUSER_SID|SUSER_SNAME|SYS.FN_BUILTIN_PERMISSIONS|SYS.FN_GET_AUDIT_FILE|SYS.FN_MY_PERMISSIONS|SYSTEM_USER|USER_ID|USER_NAME|' +
                'ASCII|CHAR|CHARINDEX|CONCAT|DIFFERENCE|FORMAT|LEN|LOWER|LTRIM|NCHAR|PATINDEX|QUOTENAME|REPLACE|REPLICATE|REVERSE|RTRIM|SOUNDEX|SPACE|STR|STUFF|SUBSTRING|UNICODE|UPPER|' +
                '$PARTITION|@@ERROR|@@IDENTITY|@@PACK_RECEIVED|@@ROWCOUNT|@@TRANCOUNT|BINARY_CHECKSUM|CHECKSUM|CONNECTIONPROPERTY|CONTEXT_INFO|CURRENT_REQUEST_ID|ERROR_LINE|ERROR_MESSAGE|ERROR_NUMBER|ERROR_PROCEDURE|ERROR_SEVERITY|ERROR_STATE|FORMATMESSAGE|GETANSINULL|GET_FILESTREAM_TRANSACTION_CONTEXT|HOST_ID|HOST_NAME|ISNULL|ISNUMERIC|MIN_ACTIVE_ROWVERSION|NEWID|NEWSEQUENTIALID|ROWCOUNT_BIG|XACT_STATE|' +
                '@@CONNECTIONS|@@CPU_BUSY|@@IDLE|@@IO_BUSY|@@PACKET_ERRORS|@@PACK_RECEIVED|@@PACK_SENT|@@TIMETICKS|@@TOTAL_ERRORS|@@TOTAL_READ|@@TOTAL_WRITE|FN_VIRTUALFILESTATS|' +
                'PATINDEX|TEXTPTR|TEXTVALID|' +
                'COALESCE|NULLIF');
            var dataTypes = ('BIGINT|BINARY|BIT|CHAR|CURSOR|DATE|DATETIME|DATETIME2|DATETIMEOFFSET|DECIMAL|FLOAT|HIERARCHYID|IMAGE|INTEGER|INT|MONEY|NCHAR|NTEXT|NUMERIC|NVARCHAR|REAL|SMALLDATETIME|SMALLINT|SMALLMONEY|SQL_VARIANT|TABLE|TEXT|TIME|TIMESTAMP|TINYINT|UNIQUEIDENTIFIER|VARBINARY|VARCHAR|XML');
            var builtInStoredProcedures = 'sp_addextendedproc|sp_addextendedproperty|sp_addmessage|sp_addtype|sp_addumpdevice|sp_add_data_file_recover_suspect_db|sp_add_log_file_recover_suspect_db|sp_altermessage|sp_attach_db|sp_attach_single_file_db|sp_autostats|sp_bindefault|sp_bindrule|sp_bindsession|sp_certify_removable|sp_clean_db_file_free_space|sp_clean_db_free_space|sp_configure|sp_control_plan_guide|sp_createstats|sp_create_plan_guide|sp_create_plan_guide_from_handle|sp_create_removable|sp_cycle_errorlog|sp_datatype_info|sp_dbcmptlevel|sp_dbmmonitoraddmonitoring|sp_dbmmonitorchangealert|sp_dbmmonitorchangemonitoring|sp_dbmmonitordropalert|sp_dbmmonitordropmonitoring|sp_dbmmonitorhelpalert|sp_dbmmonitorhelpmonitoring|sp_dbmmonitorresults|sp_db_increased_partitions|sp_delete_backuphistory|sp_depends|sp_describe_first_result_set|sp_describe_undeclared_parameters|sp_detach_db|sp_dropdevice|sp_dropextendedproc|sp_dropextendedproperty|sp_dropmessage|sp_droptype|sp_execute|sp_executesql|sp_getapplock|sp_getbindtoken|sp_help|sp_helpconstraint|sp_helpdb|sp_helpdevice|sp_helpextendedproc|sp_helpfile|sp_helpfilegroup|sp_helpindex|sp_helplanguage|sp_helpserver|sp_helpsort|sp_helpstats|sp_helptext|sp_helptrigger|sp_indexoption|sp_invalidate_textptr|sp_lock|sp_monitor|sp_prepare|sp_prepexec|sp_prepexecrpc|sp_procoption|sp_recompile|sp_refreshview|sp_releaseapplock|sp_rename|sp_renamedb|sp_resetstatus|sp_sequence_get_range|sp_serveroption|sp_setnetname|sp_settriggerorder|sp_spaceused|sp_tableoption|sp_unbindefault|sp_unbindrule|sp_unprepare|sp_updateextendedproperty|sp_updatestats|sp_validname|sp_who|sys.sp_merge_xtp_checkpoint_files|sys.sp_xtp_bind_db_resource_pool|sys.sp_xtp_checkpoint_force_garbage_collection|sys.sp_xtp_control_proc_exec_stats|sys.sp_xtp_control_query_exec_stats|sys.sp_xtp_unbind_db_resource_pool';
            var keywords = 'ABSOLUTE|ACTION|ADA|ADD|ADMIN|AFTER|AGGREGATE|ALIAS|ALL|ALLOCATE|ALTER|AND|ANY|ARE|ARRAY|AS|ASC|ASENSITIVE|ASSERTION|ASYMMETRIC|AT|ATOMIC|AUTHORIZATION|BACKUP|BEFORE|BEGIN|BETWEEN|BIT_LENGTH|BLOB|BOOLEAN|BOTH|BREADTH|BREAK|BROWSE|BULK|BY|CALL|CALLED|CARDINALITY|CASCADE|CASCADED|CASE|CATALOG|CHARACTER|CHARACTER_LENGTH|CHAR_LENGTH|CHECK|CHECKPOINT|CLASS|CLOB|CLOSE|CLUSTERED|COALESCE|COLLATE|COLLATION|COLLECT|COLUMN|COMMIT|COMPLETION|COMPUTE|CONDITION|CONNECT|CONNECTION|CONSTRAINT|CONSTRAINTS|CONSTRUCTOR|CONTAINS|CONTAINSTABLE|CONTINUE|CORR|CORRESPONDING|COVAR_POP|COVAR_SAMP|CREATE|CROSS|CUBE|CUME_DIST|CURRENT|CURRENT_CATALOG|CURRENT_DATE|CURRENT_DEFAULT_TRANSFORM_GROUP|CURRENT_PATH|CURRENT_ROLE|CURRENT_SCHEMA|CURRENT_TIME|CURRENT_TRANSFORM_GROUP_FOR_TYPE|CYCLE|DATA|DATABASE|DBCC|DEALLOCATE|DEC|DECLARE|DEFAULT|DEFERRABLE|DEFERRED|DELETE|DENY|DEPTH|DEREF|DESC|DESCRIBE|DESCRIPTOR|DESTROY|DESTRUCTOR|DETERMINISTIC|DIAGNOSTICS|DICTIONARY|DISCONNECT|DISK|DISTINCT|DISTRIBUTED|DOMAIN|DOUBLE|DROP|DUMP|DYNAMIC|EACH|ELEMENT|ELSE|END|END-EXEC|EQUALS|ERRLVL|ESCAPE|EVERY|EXCEPT|EXCEPTION|EXEC|EXECUTE|EXISTS|EXIT|EXTERNAL|EXTRACT|FETCH|FILE|FILLFACTOR|FILTER|FIRST|FOR|FOREIGN|FORTRAN|FOUND|FREE|FREETEXT|FREETEXTTABLE|FROM|FULL|FULLTEXTTABLE|FUNCTION|FUSION|GENERAL|GET|GLOBAL|GO|GOTO|GRANT|GROUP|HAVING|HOLD|HOLDLOCK|HOST|HOUR|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IGNORE|IMMEDIATE|IN|INCLUDE|INDEX|INDICATOR|INITIALIZE|INITIALLY|INNER|INOUT|INPUT|INSENSITIVE|INSERT|INTEGER|INTERSECT|INTERSECTION|INTERVAL|INTO|IS|ISOLATION|ITERATE|JOIN|KEY|KILL|LANGUAGE|LARGE|LAST|LATERAL|LEADING|LESS|LEVEL|LIKE|LIKE_REGEX|LIMIT|LINENO|LN|LOAD|LOCAL|LOCALTIME|LOCALTIMESTAMP|LOCATOR|MAP|MATCH|MEMBER|MERGE|METHOD|MINUTE|MOD|MODIFIES|MODIFY|MODULE|MULTISET|NAMES|NATIONAL|NATURAL|NCLOB|NEW|NEXT|NO|NOCHECK|NONCLUSTERED|NONE|NORMALIZE|NOT|NULL|NULLIF|OBJECT|OCCURRENCES_REGEX|OCTET_LENGTH|OF|OFF|OFFSETS|OLD|ON|ONLY|OPEN|OPERATION|OPTION|OR|ORDER|ORDINALITY|OUT|OUTER|OUTPUT|OVER|OVERLAPS|OVERLAY|PAD|PARAMETER|PARAMETERS|PARTIAL|PARTITION|PASCAL|PATH|PERCENT|PERCENTILE_CONT|PERCENTILE_DISC|PERCENT_RANK|PIVOT|PLAN|POSITION|POSITION_REGEX|POSTFIX|PRECISION|PREFIX|PREORDER|PREPARE|PRESERVE|PRIMARY|PRINT|PRIOR|PRIVILEGES|PROC|PROCEDURE|PUBLIC|RAISERROR|RANGE|READ|READS|READTEXT|RECONFIGURE|RECURSIVE|REF|REFERENCES|REFERENCING|REGR_AVGX|REGR_AVGY|REGR_COUNT|REGR_INTERCEPT|REGR_R2|REGR_SLOPE|REGR_SXX|REGR_SXY|REGR_SYY|RELATIVE|RELEASE|REPLICATION|RESTORE|RESTRICT|RESULT|RETURN|RETURNS|REVERT|REVOKE|ROLE|ROLLBACK|ROLLUP|ROUTINE|ROW|ROWCOUNT|ROWGUIDCOL|ROWS|RULE|SAVE|SAVEPOINT|SCHEMA|SCOPE|SCROLL|SEARCH|SECOND|SECTION|SECURITYAUDIT|SELECT|SEMANTICKEYPHRASETABLE|SEMANTICSIMILARITYDETAILSTABLE|SEMANTICSIMILARITYTABLE|SENSITIVE|SEQUENCE|SESSION|SET|SETS|SETUSER|SHUTDOWN|SIMILAR|SIZE|SOME|SPECIFIC|SPECIFICTYPE|SQL|SQLCA|SQLCODE|SQLERROR|SQLEXCEPTION|SQLSTATE|SQLWARNING|START|STATE|STATEMENT|STATIC|STATISTICS|STDDEV_POP|STDDEV_SAMP|STRUCTURE|SUBMULTISET|SUBSTRING_REGEX|SYMMETRIC|SYSTEM|TABLESAMPLE|TEMPORARY|TERMINATE|TEXTSIZE|THAN|THEN|TIMEZONE_HOUR|TIMEZONE_MINUTE|TO|TOP|TRAILING|TRAN|TRANSACTION|TRANSLATE|TRANSLATE_REGEX|TRANSLATION|TREAT|TRIGGER|TRIM|TRUNCATE|TSEQUAL|UESCAPE|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARIABLE|VARYING|VAR_POP|VAR_SAMP|VIEW|WAITFOR|WHEN|WHENEVER|WHERE|WHILE|WIDTH_BUCKET|WINDOW|WITH|WITHIN|WITHIN GROUP|WITHOUT|WORK|WRITE|WRITETEXT|XMLAGG|XMLATTRIBUTES|XMLBINARY|XMLCAST|XMLCOMMENT|XMLCONCAT|XMLDOCUMENT|XMLELEMENT|XMLEXISTS|XMLFOREST|XMLITERATE|XMLNAMESPACES|XMLPARSE|XMLPI|XMLQUERY|XMLSERIALIZE|XMLTABLE|XMLTEXT|XMLVALIDATE|ZONE';
            keywords += '|KEEPIDENTITY|KEEPDEFAULTS|IGNORE_CONSTRAINTS|IGNORE_TRIGGERS|XLOCK|FORCESCAN|FORCESEEK|HOLDLOCK|NOLOCK|NOWAIT|PAGLOCK|READCOMMITTED|READCOMMITTEDLOCK|READPAST|READUNCOMMITTED|REPEATABLEREAD|ROWLOCK|SERIALIZABLE|SNAPSHOT|SPATIAL_WINDOW_MAX_CELLS|TABLOCK|TABLOCKX|UPDLOCK|XLOCK|IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX|EXPAND|VIEWS|FAST|FORCE|KEEP|KEEPFIXED|MAXDOP|MAXRECURSION|OPTIMIZE|PARAMETERIZATION|SIMPLE|FORCED|RECOMPILE|ROBUST|PLAN|SPATIAL_WINDOW_MAX_CELLS|NOEXPAND|HINT';
            keywords += '|LOOP|HASH|MERGE|REMOTE';
            keywords += '|TRY|CATCH|THROW';
            keywords += '|TYPE';
            keywords = keywords.split('|');
            keywords = keywords.filter(function (value, index, self) {
                return logicalOperators.split('|').indexOf(value) === -1 && builtinFunctions.split('|').indexOf(value) === -1 && dataTypes.split('|').indexOf(value) === -1;
            });
            keywords = keywords.sort().join('|');
            var keywordMapper = this.createKeywordMapper({
                'constant.language': logicalOperators,
                'storage.type': dataTypes,
                'support.function': builtinFunctions,
                'support.storedprocedure': builtInStoredProcedures,
                'keyword': keywords
            }, 'identifier', true);
            var setStatements = 'SET ANSI_DEFAULTS|SET ANSI_NULLS|SET ANSI_NULL_DFLT_OFF|SET ANSI_NULL_DFLT_ON|SET ANSI_PADDING|SET ANSI_WARNINGS|SET ARITHABORT|SET ARITHIGNORE|SET CONCAT_NULL_YIELDS_NULL|SET CURSOR_CLOSE_ON_COMMIT|SET DATEFIRST|SET DATEFORMAT|SET DEADLOCK_PRIORITY|SET FIPS_FLAGGER|SET FMTONLY|SET FORCEPLAN|SET IDENTITY_INSERT|SET IMPLICIT_TRANSACTIONS|SET LANGUAGE|SET LOCK_TIMEOUT|SET NOCOUNT|SET NOEXEC|SET NUMERIC_ROUNDABORT|SET OFFSETS|SET PARSEONLY|SET QUERY_GOVERNOR_COST_LIMIT|SET QUOTED_IDENTIFIER|SET REMOTE_PROC_TRANSACTIONS|SET ROWCOUNT|SET SHOWPLAN_ALL|SET SHOWPLAN_TEXT|SET SHOWPLAN_XML|SET STATISTICS IO|SET STATISTICS PROFILE|SET STATISTICS TIME|SET STATISTICS XML|SET TEXTSIZE|SET XACT_ABORT'.split('|');
            var isolationLevels = 'READ UNCOMMITTED|READ COMMITTED|REPEATABLE READ|SNAPSHOP|SERIALIZABLE'.split('|');
            for (var i = 0; i < isolationLevels.length; i++) {
                setStatements.push('SET TRANSACTION ISOLATION LEVEL ' + isolationLevels[i]);
            }
            this.$rules = {
                start: [{
                        token: 'string.start',
                        regex: "'",
                        next: [{
                                token: 'constant.language.escape',
                                regex: /''/
                            }, {
                                token: 'string.end',
                                next: 'start',
                                regex: "'"
                            }, {
                                defaultToken: 'string'
                            }]
                    },
                    DocCommentHighlightRules.getStartRule('doc-start'), {
                        token: 'comment',
                        regex: '--.*$'
                    }, {
                        token: 'comment',
                        start: '/\\*',
                        end: '\\*/'
                    }, {
                        token: 'constant.numeric',
                        regex: '[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b'
                    }, {
                        token: keywordMapper,
                        regex: '@{0,2}[a-zA-Z_$][a-zA-Z0-9_$]*\\b(?!])'
                    }, {
                        token: 'constant.class',
                        regex: '@@?[a-zA-Z_$][a-zA-Z0-9_$]*\\b'
                    }, {
                        token: 'keyword.operator',
                        regex: '\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|=|\\*'
                    }, {
                        token: 'paren.lparen',
                        regex: '[\\(]'
                    }, {
                        token: 'paren.rparen',
                        regex: '[\\)]'
                    }, {
                        token: 'punctuation',
                        regex: ',|;'
                    }, {
                        token: 'text',
                        regex: '\\s+'
                    }],
                comment: [
                    DocCommentHighlightRules.getTagRule(), {
                        token: 'comment',
                        regex: '\\*\\/',
                        next: 'no_regex'
                    }, {
                        defaultToken: 'comment',
                        caseInsensitive: true
                    }
                ]
            };
            for (var i = 0; i < setStatements.length; i++) {
                this.$rules.start.unshift({
                    token: 'set.statement',
                    regex: setStatements[i]
                });
            }
            this.embedRules(DocCommentHighlightRules, 'doc-', [DocCommentHighlightRules.getEndRule('start')]);
            this.normalizeRules();
            var completions = [];
            var addCompletions = function (arr, meta) {
                arr.forEach(function (v) {
                    completions.push({
                        name: v,
                        value: v,
                        score: 0,
                        meta: meta
                    });
                });
            };
            addCompletions(builtInStoredProcedures.split('|'), 'procedure');
            addCompletions(logicalOperators.split('|'), 'operator');
            addCompletions(builtinFunctions.split('|'), 'function');
            addCompletions(dataTypes.split('|'), 'type');
            addCompletions(setStatements, 'statement');
            addCompletions(keywords.split('|'), 'keyword');
            this.completions = completions;
        };
        oop.inherits(SqlServerHighlightRules, TextHighlightRules);
        exports.SqlHighlightRules = SqlServerHighlightRules;
    });
    ace_1.default.define('ace/mode/sql', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/sql_highlight_rules', 'ace/range'], function (require, exports, module) {
        'use strict';
        var oop = ace_1.default.require('ace/lib/oop');
        var TextMode = ace_1.default.require('ace/mode/text').Mode;
        var SqlHighlightRules = ace_1.default.require('ace/mode/sql_highlight_rules').SqlHighlightRules;
        var Range = ace_1.default.require('ace/range').Range;
        var Mode = function () {
            this.HighlightRules = SqlHighlightRules;
        };
        oop.inherits(Mode, TextMode);
        (function () {
            this.lineCommentStart = '--';
            this.$id = 'ace/mode/sql';
        }).call(Mode.prototype);
        exports.Mode = Mode;
    });
}


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dataSourceWizard_1 = __webpack_require__(139);
var popupWizard_1 = __webpack_require__(42);
var dataSourceWizardState_1 = __webpack_require__(12);
var pageFactory_1 = __webpack_require__(39);
var pageIterator_1 = __webpack_require__(37);
var _utils_1 = __webpack_require__(0);
var chooseDataSourceTypePage_1 = __webpack_require__(36);
var localization_utils_1 = __webpack_require__(1);
var pageId_1 = __webpack_require__(5);
var chooseJsonConnectionPage_1 = __webpack_require__(55);
var chooseJsonSourcePage_1 = __webpack_require__(40);
var chooseJsonSchemaPage_1 = __webpack_require__(56);
var chooseSqlConnectionPage_1 = __webpack_require__(54);
var specifyObjectDataSourceSettingsPage_1 = __webpack_require__(89);
var multiQueryConfigurePage_1 = __webpack_require__(86);
var multiQueryConfigureParametersPage_1 = __webpack_require__(87);
var configureMasterDetailRelationshipsPage_1 = __webpack_require__(88);
var _requestwrapper_1 = __webpack_require__(16);
var chooseObjectDataSourceTypesPage_1 = __webpack_require__(122);
var chooseObjectDataSourceDataMembersPage_1 = __webpack_require__(123);
var configureObjectDataSourceParametersPage_1 = __webpack_require__(80);
var _MultiQueryDataSourceWizardOptions = (function (_super) {
    __extends(_MultiQueryDataSourceWizardOptions, _super);
    function _MultiQueryDataSourceWizardOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _MultiQueryDataSourceWizardOptions;
}(dataSourceWizard_1._DataSourceWizardOptionsBase));
exports._MultiQueryDataSourceWizardOptions = _MultiQueryDataSourceWizardOptions;
var MultiQueryDataSourceWizard = (function (_super) {
    __extends(MultiQueryDataSourceWizard, _super);
    function MultiQueryDataSourceWizard(pageFactory, _wizardOptions) {
        var _this = _super.call(this, pageFactory, _wizardOptions.callbacks.finishCallback) || this;
        _this._wizardOptions = _wizardOptions;
        _this.title = localization_utils_1.getLocalization('Data Source Wizard', 'AnalyticsCoreStringId.SqlDSWizard_Title');
        _this._extendCssClass = 'dxrd-multiqueries-sqldatasource-wizard';
        _this.height(443);
        return _this;
    }
    MultiQueryDataSourceWizard.prototype.canRunWizard = function () {
        return this._wizardOptions.jsonDataSourceAvailable || this._wizardOptions.sqlDataSourceAvailable || this._wizardOptions.objectDataSourceAvailable;
    };
    MultiQueryDataSourceWizard.prototype.initialize = function (state, createIterator) {
        var _this = this;
        if (createIterator === void 0) { createIterator = function (pageFactory, stateManager) { return new MultiQueryDataSourceWizardPageIterator(pageFactory, stateManager, _this._wizardOptions); }; }
        if (this._wizardOptions.sqlDataSourceAvailable || !_utils_1.isEmptyObject(state.sqlDataSourceWizard)) {
            state.dataSourceType = chooseDataSourceTypePage_1.DataSourceType.Sql;
        }
        else if (this._wizardOptions.jsonDataSourceAvailable || state.jsonDataSourceWizard.jsonSource) {
            state.dataSourceType = chooseDataSourceTypePage_1.DataSourceType.Json;
        }
        else if (this._wizardOptions.objectDataSourceAvailable) {
            state.dataSourceType = chooseDataSourceTypePage_1.DataSourceType.Object;
        }
        _super.prototype.initialize.call(this, state, createIterator);
    };
    return MultiQueryDataSourceWizard;
}(popupWizard_1.PopupWizard));
exports.MultiQueryDataSourceWizard = MultiQueryDataSourceWizard;
var MultiQueryDataSourceWizardPageIterator = (function (_super) {
    __extends(MultiQueryDataSourceWizardPageIterator, _super);
    function MultiQueryDataSourceWizardPageIterator(pagesFactory, stateManager, _wizardOptions) {
        var _this = _super.call(this, pagesFactory, stateManager) || this;
        _this._wizardOptions = _wizardOptions;
        return _this;
    }
    MultiQueryDataSourceWizardPageIterator.prototype.getNextPageId = function (pageId) {
        if (!pageId && this._wizardOptions.jsonDataSourceAvailable && this._wizardOptions.sqlDataSourceAvailable) {
            return pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage;
        }
        else if (!pageId) {
            return this.getNextPageId(pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage);
        }
        else if (pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Sql) {
            return pageId_1.SqlDataSourceWizardPageId.ChooseConnectionPage;
        }
        else if (pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Object) {
            return pageId_1.ObjectDataSourceWizardPageId.ChooseTypesPage;
        }
        else if (pageId === pageId_1.ObjectDataSourceWizardPageId.ChooseTypesPage && this._getCurrentState().objectDataSourceWizard.selectedType) {
            return pageId_1.ObjectDataSourceWizardPageId.ChooseDataMembersPage;
        }
        else if (pageId === pageId_1.ObjectDataSourceWizardPageId.ChooseDataMembersPage) {
            return pageId_1.ObjectDataSourceWizardPageId.ConfigureParametersPage;
        }
        else if (pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Json && this._wizardOptions.connectionStrings.json().length > 0) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseConnectionPage;
        }
        else if (this._wizardOptions.allowCreateNewJsonConnection && pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Json) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseJsonSourcePage;
        }
        else if (pageId === pageId_1.JsonDataSourceWizardPageId.ChooseConnectionPage && this._getCurrentState().jsonDataSourceWizard.connectionName) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
        }
        else if (this._wizardOptions.allowCreateNewJsonConnection && pageId === pageId_1.JsonDataSourceWizardPageId.ChooseConnectionPage && !this._getCurrentState().jsonDataSourceWizard.connectionName) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseJsonSourcePage;
        }
        else if (pageId === pageId_1.JsonDataSourceWizardPageId.ChooseJsonSourcePage) {
            return pageId_1.JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
        }
        else if (pageId === pageId_1.SqlDataSourceWizardPageId.ChooseConnectionPage && this._getCurrentState().sqlDataSourceWizard.name) {
            return pageId_1.SqlDataSourceWizardPageId.MultiQueryConfigurePage;
        }
        else if (this._getCurrentState().sqlDataSourceWizard.sqlDataSourceJSON && pageId === pageId_1.SqlDataSourceWizardPageId.MultiQueryConfigurePage && this._getCurrentState().sqlDataSourceWizard.customQueries.length > 0) {
            return pageId_1.SqlDataSourceWizardPageId.MultiQueryConfigureParametersPage;
        }
        else if (pageId === pageId_1.SqlDataSourceWizardPageId.MultiQueryConfigurePage || pageId === pageId_1.SqlDataSourceWizardPageId.MultiQueryConfigureParametersPage) {
            var sqlDataSourceWrapped = dataSourceWizardState_1._restoreSqlDataSourceFromState(this._getCurrentState().sqlDataSourceWizard);
            if (sqlDataSourceWrapped.sqlDataSource.queries().length > 1) {
                return pageId_1.DataSourceWizardPageId.ConfigureMasterDetailRelationshipsPage;
            }
        }
    };
    return MultiQueryDataSourceWizardPageIterator;
}(pageIterator_1.PageIterator));
exports.MultiQueryDataSourceWizardPageIterator = MultiQueryDataSourceWizardPageIterator;
function _registerMultiQueryDataSourcePages(factory, dataSourceWizardOptions) {
    if (factory === void 0) { factory = new pageFactory_1.PageFactory(); }
    chooseDataSourceTypePage_1._registerChooseDataSourceTypePage(factory, dataSourceWizardOptions);
    chooseJsonConnectionPage_1._registerChooseJsonConnectionPage(factory, dataSourceWizardOptions);
    chooseJsonSourcePage_1._registerChooseJsonSourcePage(factory, dataSourceWizardOptions.requestWrapper, dataSourceWizardOptions.callbacks.getItemsProviderCallback);
    chooseJsonSchemaPage_1._registerChooseJsonSchemaPage(factory, dataSourceWizardOptions.requestWrapper, dataSourceWizardOptions.callbacks);
    chooseSqlConnectionPage_1._registerChooseSqlConnectionPage(factory, dataSourceWizardOptions.connectionStrings.sql);
    specifyObjectDataSourceSettingsPage_1._registerSpecifyObjectDataSourceSettingsPage(factory, dataSourceWizardOptions);
    multiQueryConfigurePage_1._registerMultiQueryConfigurePage(factory, dataSourceWizardOptions);
    multiQueryConfigureParametersPage_1._registerMultiQueryConfigureParametersPage(factory, dataSourceWizardOptions.requestWrapper);
    configureMasterDetailRelationshipsPage_1._registerConfigureMasterDetailRelationshipsPage(factory, _requestwrapper_1.wrapRebuildResultSchema(dataSourceWizardOptions.callbacks.sqlDataSourceResultSchema));
    chooseObjectDataSourceTypesPage_1._registerChooseObjectDataSourceTypesPage(factory, dataSourceWizardOptions);
    chooseObjectDataSourceDataMembersPage_1._registerChooseObjectDataSourceDataMembersPage(factory, dataSourceWizardOptions);
    configureObjectDataSourceParametersPage_1._registerConfigureObjectDataSourceParametersPage(factory, dataSourceWizardOptions.callbacks.getItemsProviderCallback);
    return factory;
}
exports._registerMultiQueryDataSourcePages = _registerMultiQueryDataSourcePages;
function _createMultiQueryDataSourceWizard(factory, dataSourceWizardOptions) {
    if (factory === void 0) { factory = new pageFactory_1.PageFactory(); }
    _registerMultiQueryDataSourcePages(factory, dataSourceWizardOptions);
    return new MultiQueryDataSourceWizard(factory, dataSourceWizardOptions);
}
exports._createMultiQueryDataSourceWizard = _createMultiQueryDataSourceWizard;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fullscreenWizard_1 = __webpack_require__(143);
var pageIterator_1 = __webpack_require__(37);
var _utils_1 = __webpack_require__(0);
var chooseDataSourceTypePage_1 = __webpack_require__(36);
var localization_utils_1 = __webpack_require__(1);
var pageId_1 = __webpack_require__(5);
var fullscreenWizardPageFactory_1 = __webpack_require__(140);
var specifySqlDataSourceSettingsPage_1 = __webpack_require__(142);
var specifyJsonDataSourceSettingsPage_1 = __webpack_require__(141);
var specifyObjectDataSourceSettingsPage_1 = __webpack_require__(89);
var FullscreenDataSourceWizard = (function (_super) {
    __extends(FullscreenDataSourceWizard, _super);
    function FullscreenDataSourceWizard(factory, _dataSourceWizardOptions) {
        var _this = _super.call(this, factory, _dataSourceWizardOptions.callbacks.finishCallback) || this;
        _this._dataSourceWizardOptions = _dataSourceWizardOptions;
        return _this;
    }
    FullscreenDataSourceWizard.prototype.initialize = function (state, createIterator) {
        var _this = this;
        if (createIterator === void 0) { createIterator = function (pageFactory, stateManager) { return new FullscreenDataSourceWizardPageIterator(pageFactory, stateManager, _this._dataSourceWizardOptions, function (page) { return _this._onResetPage(page); }); }; }
        if (this._dataSourceWizardOptions.sqlDataSourceAvailable || !_utils_1.isEmptyObject(state.sqlDataSourceWizard)) {
            state.dataSourceType = chooseDataSourceTypePage_1.DataSourceType.Sql;
        }
        else if (this._dataSourceWizardOptions.jsonDataSourceAvailable || state.jsonDataSourceWizard.jsonSource) {
            state.dataSourceType = chooseDataSourceTypePage_1.DataSourceType.Json;
        }
        else if (this._dataSourceWizardOptions.objectDataSourceAvailable || !_utils_1.isEmptyObject(state.objectDataSourceWizard)) {
            state.dataSourceType = chooseDataSourceTypePage_1.DataSourceType.Object;
        }
        _super.prototype.initialize.call(this, state, createIterator);
    };
    FullscreenDataSourceWizard.prototype.canRunWizard = function () {
        return this._dataSourceWizardOptions.canCreateDataSource;
    };
    FullscreenDataSourceWizard.prototype._description = function () {
        return localization_utils_1.getLocalization('Data Source Wizard', 'AnalyticsCoreStringId.DSWizard_Title');
    };
    return FullscreenDataSourceWizard;
}(fullscreenWizard_1.FullscreenWizard));
exports.FullscreenDataSourceWizard = FullscreenDataSourceWizard;
var FullscreenDataSourceWizardPageIterator = (function (_super) {
    __extends(FullscreenDataSourceWizardPageIterator, _super);
    function FullscreenDataSourceWizardPageIterator(factory, stateManager, _dataSourceOptions, onResetPage) {
        var _this = _super.call(this, factory, stateManager, onResetPage) || this;
        _this._dataSourceOptions = _dataSourceOptions;
        return _this;
    }
    FullscreenDataSourceWizardPageIterator.prototype._isMoreThanOneDataSourceTypeAvailable = function () {
        return this._dataSourceOptions.sqlDataSourceAvailable
            ? (this._dataSourceOptions.jsonDataSourceAvailable || this._dataSourceOptions.objectDataSourceAvailable)
            : (this._dataSourceOptions.jsonDataSourceAvailable && this._dataSourceOptions.objectDataSourceAvailable);
    };
    FullscreenDataSourceWizardPageIterator.prototype.getNextPageId = function (pageId) {
        if (!pageId && this._isMoreThanOneDataSourceTypeAvailable())
            return pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage;
        else if (!pageId && this._dataSourceOptions.sqlDataSourceAvailable) {
            return pageId_1.FullscreenDataSourceWizardPageId.SpecifySqlDataSourceSettingsPage;
        }
        else if (!pageId && this._dataSourceOptions.jsonDataSourceAvailable) {
            return pageId_1.FullscreenDataSourceWizardPageId.SpecifyJsonDataSourceSettingsPage;
        }
        else if (!pageId && this._dataSourceOptions.objectDataSourceAvailable) {
            return pageId_1.FullscreenDataSourceWizardPageId.SpecifyObjectDataSourceSettingsPage;
        }
        else if (pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Json) {
            return pageId_1.FullscreenDataSourceWizardPageId.SpecifyJsonDataSourceSettingsPage;
        }
        else if (pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Sql) {
            return pageId_1.FullscreenDataSourceWizardPageId.SpecifySqlDataSourceSettingsPage;
        }
        else if (pageId === pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === chooseDataSourceTypePage_1.DataSourceType.Object) {
            return pageId_1.FullscreenDataSourceWizardPageId.SpecifyObjectDataSourceSettingsPage;
        }
    };
    return FullscreenDataSourceWizardPageIterator;
}(pageIterator_1.PageIterator));
exports.FullscreenDataSourceWizardPageIterator = FullscreenDataSourceWizardPageIterator;
function _createDataSourceFullscreenWizard(dataSourceWizardOptions) {
    var factory = new fullscreenWizardPageFactory_1.FullscreenWizardPageFactory();
    chooseDataSourceTypePage_1._registerChooseDataSourceTypePage(factory, dataSourceWizardOptions);
    factory.getMetadata(pageId_1.DataSourceWizardPageId.ChooseDataSourceTypePage).navigationPanelText = localization_utils_1.getLocalization('Select Data Source Type', 'AnalyticsCoreStringId.Wizard_SelectDataSourceType');
    specifySqlDataSourceSettingsPage_1._registerSpecifySqlDataSourceSettingsPage(factory, dataSourceWizardOptions);
    specifyJsonDataSourceSettingsPage_1._registerSpecifyJsonDataSourceSettingsPage(factory, dataSourceWizardOptions);
    specifyObjectDataSourceSettingsPage_1._registerSpecifyObjectDataSourceSettingsPage(factory, dataSourceWizardOptions);
    return new FullscreenDataSourceWizard(factory, dataSourceWizardOptions);
}
exports._createDataSourceFullscreenWizard = _createDataSourceFullscreenWizard;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var WizardAction = (function () {
    function WizardAction(handler, text) {
        this.handler = handler;
        this.isVisible = ko.observable(true);
        this.isDisabled = ko.observable(false);
        this.text = text;
    }
    return WizardAction;
}());
exports.WizardAction = WizardAction;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets.Filtering;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
var jsQueryBuilder_1 = __webpack_require__(165);
var _jsDesignerBindingCommon_1 = __webpack_require__(0);
var _initializer_1 = __webpack_require__(90);
var localization_utils_1 = __webpack_require__(1);
var eventGenerator_1 = __webpack_require__(166);
var _utils_1 = __webpack_require__(0);
var templateUtils_1 = __webpack_require__(6);
var JSQueryBuilderBinding = (function (_super) {
    __extends(JSQueryBuilderBinding, _super);
    function JSQueryBuilderBinding(options, customEventRaiser) {
        var _this = _super.call(this, ko.unwrap(options), customEventRaiser) || this;
        _this.options = options;
        _this._deferreds = [];
        _this._templateHtml = templateUtils_1.getTemplate('dxrd-querybuilder');
        options.queryBuilderModel = _utils_1._wrapModelInObservable(options.queryBuilderModel);
        _this.sender = new jsQueryBuilder_1.JSQueryBuilder(options.queryBuilderModel);
        options.callbacks && options.callbacks._eventSenderCreated && options.callbacks._eventSenderCreated(_this.sender);
        return _this;
    }
    JSQueryBuilderBinding.prototype._applyBindings = function (model, _$element) {
        this._disposables.push(model);
        _$element.children().remove();
        var child = _$element.append(this._templateHtml).children()[0];
        if (!child)
            return;
        ko.cleanNode(child);
        this._callbacks && this._callbacks.beforeRender && this._callbacks.beforeRender(model);
        ko.applyBindings(model, child);
        var updateSizeTimeout = setTimeout(function () {
            model && model.updateSurfaceSize();
        }, 1);
        this._disposables.push({ dispose: function () { return clearTimeout(updateSizeTimeout); } });
    };
    JSQueryBuilderBinding.prototype._initializeEvents = function () {
        var _this = this;
        return this._getAvailableEvents(eventGenerator_1.EventGenerator.generateQueryBuilderEvents(function (eventName, args) {
            _this._fireEvent(eventName, args);
        }));
    };
    JSQueryBuilderBinding.prototype._initializeCallbacks = function () {
        if (this._options.callbacks) {
            return this._initializeEvents();
        }
    };
    JSQueryBuilderBinding.prototype._createModel = function (element) {
        this._callbacks = this._initializeCallbacks();
        return _initializer_1.createQueryBuilder(element, this._options, this._callbacks, false);
    };
    JSQueryBuilderBinding.prototype.dispose = function () {
        (this._deferreds || []).forEach(function (deferred) {
            deferred.reject();
        });
    };
    JSQueryBuilderBinding.prototype.applyBindings = function (element) {
        var _this = this;
        var _$element = $(element);
        var requestOptions = this._options.requestOptions;
        var applyModel = function () {
            if (requestOptions && requestOptions.invokeAction) {
                _this._options.handlerUri = _this._getServerActionUrl(requestOptions.host, requestOptions.invokeAction);
            }
            _this._deferreds.push(_this._createModel(element)
                .done(function (queryBuilderModel) {
                _this.options.queryBuilderModel(queryBuilderModel);
                _this.sender.queryBuilderModel = queryBuilderModel;
                _this._createDisposeFunction(element);
                _this._applyBindings(_this.sender.queryBuilderModel, _$element);
            }));
        };
        if (requestOptions) {
            this._getLocalizationRequest().done(function (localization) {
                localization && localization_utils_1.addCultureInfo(localization);
            }).always(function () {
                applyModel();
            });
        }
        else {
            applyModel();
        }
    };
    return JSQueryBuilderBinding;
}(_jsDesignerBindingCommon_1.JSDesignerBindingCommon));
exports.JSQueryBuilderBinding = JSQueryBuilderBinding;
ko.bindingHandlers['dxQueryBuilder'] = {
    init: function (element, valueAccessor) {
        var values = ko.unwrap(valueAccessor());
        new JSQueryBuilderBinding(values || {}).applyBindings(element);
        return { controlsDescendantBindings: true };
    }
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _add_querybuilder_to_bundle_1 = __webpack_require__(175);
var DevExpress = window.DevExpress || {};
_add_querybuilder_to_bundle_1._addQueryBuilderToBundle(DevExpress);
module.exports = {
    Analytics: DevExpress['Analytics'],
    QueryBuilder: DevExpress['QueryBuilder']
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Diagram = __webpack_require__(176);
var Data = __webpack_require__(179);
var DataInternal = __webpack_require__(180);
var DataUtils = __webpack_require__(181);
var DataMetadata = __webpack_require__(182);
var Wizard = __webpack_require__(183);
var WizardInternal = __webpack_require__(189);
var QueryBuilderWidgets = __webpack_require__(190);
var QueryBuilderWidgetsInternal = __webpack_require__(191);
var QueryBuilderMetadata = __webpack_require__(193);
var QueryBuilderUtils = __webpack_require__(194);
var QueryBuilderInternal = __webpack_require__(195);
var QueryBuilderElements = __webpack_require__(202);
var QueryBuilderElementsMetadata = __webpack_require__(203);
var QueryBuilder = __webpack_require__(204);
function _addQueryBuilderToBundle(bundle) {
    bundle.Analytics = bundle.Analytics || {};
    bundle.QueryBuilder = QueryBuilder;
    bundle.Analytics.Diagram = Diagram;
    bundle.Analytics.Data = Data;
    bundle.Analytics.Data.Internal = DataInternal;
    bundle.Analytics.Data.Utils = DataUtils;
    bundle.Analytics.Data.Metadata = DataMetadata;
    bundle.Analytics.Wizard = Wizard;
    bundle.Analytics.Wizard.Internal = WizardInternal;
    bundle.QueryBuilder.Widgets = QueryBuilderWidgets;
    bundle.QueryBuilder.Widgets.Internal = QueryBuilderWidgetsInternal;
    bundle.QueryBuilder.Metadata = QueryBuilderMetadata;
    bundle.QueryBuilder.Utils = QueryBuilderUtils;
    bundle.QueryBuilder.Internal = QueryBuilderInternal;
    bundle.QueryBuilder.Elements = QueryBuilderElements;
    bundle.QueryBuilder.Elements.Metadata = QueryBuilderElementsMetadata;
    return bundle;
}
exports._addQueryBuilderToBundle = _addQueryBuilderToBundle;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(20);
__webpack_require__(99);
__webpack_require__(101);
__webpack_require__(15);
__webpack_require__(29);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(65);
__webpack_require__(22);
__webpack_require__(64);
__webpack_require__(100);
__webpack_require__(31);
__webpack_require__(48);
__webpack_require__(30);
__webpack_require__(63);
__webpack_require__(47);
__webpack_require__(167);
__webpack_require__(21);
__webpack_require__(177);
__webpack_require__(178);
__export(__webpack_require__(20));
__export(__webpack_require__(99));
__export(__webpack_require__(101));
__export(__webpack_require__(15));
__export(__webpack_require__(29));
__export(__webpack_require__(66));
__export(__webpack_require__(67));
__export(__webpack_require__(65));
__export(__webpack_require__(22));
__export(__webpack_require__(64));
__export(__webpack_require__(100));
__export(__webpack_require__(31));
__export(__webpack_require__(48));
__export(__webpack_require__(30));
__export(__webpack_require__(63));
__export(__webpack_require__(47));
__export(__webpack_require__(167));
__export(__webpack_require__(21));


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
__webpack_require__(17);
__webpack_require__(17);
__webpack_require__(17);
__webpack_require__(17);
var _snapLinesHelper_1 = __webpack_require__(0);
var _internal_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(0);
ko.bindingHandlers['routeLineDraggable'] = {
    init: function (element, valueAccessor) {
        var values = valueAccessor(), options = _utils_1.extend({ snap: '.dxrd-drag-snap-line', snapTolerance: _snapLinesHelper_1.SnapLinesHelper.snapTolerance }, ko.unwrap(values), {
            start: function (event, ui) {
                values.starting();
            },
            stop: function (event, ui) {
                values.stopped();
            },
            drag: function (event, ui) {
                var dx = ui.position.left - ui['originalPosition'].left, dy = ui.position.top - ui['originalPosition'].top;
                values.forceResize({ delta: { dx: dx, dy: dy } });
            }
        });
        $(element)['draggable'](options);
    }
};
function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
        if (re.exec(navigator.userAgent) != null)
            rv = parseFloat(RegExp.$1);
    }
    else if (navigator.appName == 'Netscape') {
        var re = new RegExp('Trident/.*rv:([0-9]{1,}[\.0-9]{0,})');
        if (re.exec(navigator.userAgent) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
ko.bindingHandlers['updateConnectorArrow'] = {
    init: function (svgNode, valueAccessor, allBindings, viewModel, bindingContext) {
        var ieVersion = getInternetExplorerVersion();
        if (ieVersion > -1 && ieVersion <= 11) {
            var updateSubscription = bindingContext.$data.routePointsSet.subscribe(function () {
                if (bindingContext.$data.showArrow())
                    svgNode.parentNode.insertBefore(svgNode, svgNode);
            });
            _internal_1.addDisposeCallback(svgNode.parentNode, function () { return updateSubscription.dispose(); });
        }
    }
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(104);
__webpack_require__(71);
__webpack_require__(106);
__webpack_require__(49);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(107);
__webpack_require__(50);
__webpack_require__(108);
__webpack_require__(110);
__webpack_require__(32);
__webpack_require__(51);
__webpack_require__(114);
__webpack_require__(74);
__webpack_require__(35);
__webpack_require__(34);
__webpack_require__(11);
__webpack_require__(18);
__webpack_require__(105);
__webpack_require__(103);
__webpack_require__(23);
__webpack_require__(52);
__export(__webpack_require__(68));
__export(__webpack_require__(69));
__export(__webpack_require__(104));
__export(__webpack_require__(71));
__export(__webpack_require__(106));
__export(__webpack_require__(49));
__export(__webpack_require__(72));
__export(__webpack_require__(73));
__export(__webpack_require__(107));
__export(__webpack_require__(50));
__export(__webpack_require__(108));
__export(__webpack_require__(110));
__export(__webpack_require__(32));
__export(__webpack_require__(51));
__export(__webpack_require__(114));
__export(__webpack_require__(74));
__export(__webpack_require__(35));
__export(__webpack_require__(34));
__export(__webpack_require__(11));
__export(__webpack_require__(18));
__export(__webpack_require__(105));
__export(__webpack_require__(103));
__export(__webpack_require__(23));
__export(__webpack_require__(52));


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(102);
__webpack_require__(75);
__webpack_require__(109);
__webpack_require__(19);
__export(__webpack_require__(102));
__export(__webpack_require__(75));
__export(__webpack_require__(109));
__export(__webpack_require__(19));


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(9);
__export(__webpack_require__(9));


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(112);
__webpack_require__(113);
__webpack_require__(116);
__webpack_require__(115);
__webpack_require__(33);
__export(__webpack_require__(112));
__export(__webpack_require__(113));
__export(__webpack_require__(116));
__export(__webpack_require__(115));
__export(__webpack_require__(33));


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(5);
__webpack_require__(12);
__webpack_require__(185);
__webpack_require__(7);
__webpack_require__(36);
__webpack_require__(54);
__webpack_require__(80);
__webpack_require__(122);
__webpack_require__(123);
__webpack_require__(124);
__webpack_require__(55);
__webpack_require__(125);
__webpack_require__(40);
__webpack_require__(56);
__webpack_require__(24);
__webpack_require__(130);
__webpack_require__(86);
__webpack_require__(87);
__webpack_require__(88);
__webpack_require__(39);
__webpack_require__(76);
__webpack_require__(37);
__webpack_require__(186);
__webpack_require__(14);
__webpack_require__(187);
__webpack_require__(42);
__webpack_require__(139);
__webpack_require__(169);
__webpack_require__(140);
__webpack_require__(38);
__webpack_require__(141);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(170);
__webpack_require__(188);
__webpack_require__(126);
__webpack_require__(89);
__export(__webpack_require__(5));
__export(__webpack_require__(12));
__export(__webpack_require__(7));
__export(__webpack_require__(36));
__export(__webpack_require__(54));
__export(__webpack_require__(80));
__export(__webpack_require__(122));
__export(__webpack_require__(123));
__export(__webpack_require__(124));
__export(__webpack_require__(55));
__export(__webpack_require__(125));
__export(__webpack_require__(40));
__export(__webpack_require__(56));
__export(__webpack_require__(24));
__export(__webpack_require__(130));
__export(__webpack_require__(86));
__export(__webpack_require__(87));
__export(__webpack_require__(88));
__export(__webpack_require__(39));
__export(__webpack_require__(76));
__export(__webpack_require__(37));
__export(__webpack_require__(14));
__export(__webpack_require__(42));
__export(__webpack_require__(139));
__export(__webpack_require__(169));
__export(__webpack_require__(140));
__export(__webpack_require__(38));
__export(__webpack_require__(141));
__export(__webpack_require__(142));
__export(__webpack_require__(143));
__export(__webpack_require__(144));
__export(__webpack_require__(170));
__export(__webpack_require__(126));
__export(__webpack_require__(89));


/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = { default: window["ace"] };

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(120);
__webpack_require__(119);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(127);
__webpack_require__(85);
__webpack_require__(13);
__webpack_require__(133);
__webpack_require__(131);
__webpack_require__(132);
__webpack_require__(79);
__webpack_require__(78);
__webpack_require__(121);
__webpack_require__(77);
__webpack_require__(41);
__webpack_require__(129);
__webpack_require__(128);
__webpack_require__(171);
__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(81);
__webpack_require__(84);
__export(__webpack_require__(120));
__export(__webpack_require__(119));
__export(__webpack_require__(117));
__export(__webpack_require__(118));
__export(__webpack_require__(127));
__export(__webpack_require__(85));
__export(__webpack_require__(13));
__export(__webpack_require__(133));
__export(__webpack_require__(131));
__export(__webpack_require__(132));
__export(__webpack_require__(79));
__export(__webpack_require__(78));
__export(__webpack_require__(121));
__export(__webpack_require__(77));
__export(__webpack_require__(41));
__export(__webpack_require__(129));
__export(__webpack_require__(128));
__export(__webpack_require__(171));
__export(__webpack_require__(82));
__export(__webpack_require__(83));
__export(__webpack_require__(81));
__export(__webpack_require__(84));


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(111);
__export(__webpack_require__(111));


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(25);
__webpack_require__(168);
__webpack_require__(53);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(148);
__webpack_require__(149);
__webpack_require__(43);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(138);
__webpack_require__(134);
__webpack_require__(135);
__webpack_require__(137);
__webpack_require__(136);
var registerEditorTemplates_1 = __webpack_require__(192);
registerEditorTemplates_1.registerEditorTemplates();
__export(__webpack_require__(25));
__export(__webpack_require__(53));
__export(__webpack_require__(145));
__export(__webpack_require__(146));
__export(__webpack_require__(148));
__export(__webpack_require__(149));
__export(__webpack_require__(43));
__export(__webpack_require__(150));
__export(__webpack_require__(151));
__export(__webpack_require__(138));
__export(__webpack_require__(134));
__export(__webpack_require__(135));
__export(__webpack_require__(137));
__export(__webpack_require__(136));


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _undoEditor_1 = __webpack_require__(145);
var editorTemplates_1 = __webpack_require__(25);
function registerEditorTemplates() {
    editorTemplates_1.editorTemplates.registerEditors({
        bool: { header: 'dx-boolean-select', custom: 'dxqb-property-editor' },
        combobox: { header: 'dx-combobox', custom: 'dxqb-property-editor' },
        comboboxUndo: { header: 'dx-combobox-undo', custom: 'dxqb-property-editor', editorType: _undoEditor_1.UndoEditor },
        text: { header: 'dx-text', custom: 'dxqb-property-editor' },
        filterEditor: { header: 'dxrd-filterstring', custom: 'dxqb-property-editor' },
        filterGroupEditor: { header: 'dxrd-filterstringgroup', custom: 'dxqb-property-editor' },
        numeric: { header: 'dx-numeric', custom: 'dxqb-property-editor' }
    });
}
exports.registerEditorTemplates = registerEditorTemplates;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(44);
__export(__webpack_require__(44));


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(70);
__webpack_require__(27);
__webpack_require__(8);
__webpack_require__(9);
__export(__webpack_require__(70));
__export(__webpack_require__(27));
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(90);
__webpack_require__(197);
__webpack_require__(157);
__webpack_require__(198);
__webpack_require__(152);
__webpack_require__(158);
__webpack_require__(156);
__webpack_require__(16);
__webpack_require__(155);
__webpack_require__(98);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__export(__webpack_require__(90));
__export(__webpack_require__(157));
__export(__webpack_require__(152));
__export(__webpack_require__(158));
__export(__webpack_require__(156));
__export(__webpack_require__(16));
__export(__webpack_require__(155));
__export(__webpack_require__(98));


/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.config };

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var $ = __webpack_require__(3);
__webpack_require__(17);
__webpack_require__(17);
__webpack_require__(17);
__webpack_require__(17);
var _localization_1 = __webpack_require__(0);
var _internal_1 = __webpack_require__(0);
var templateUtils_1 = __webpack_require__(6);
ko.bindingHandlers['dxdTableView'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var templateHtml = templateUtils_1.getTemplate('dxd-tableview'), $element = $(element).append(templateHtml), $titles, $content, rtl = !!bindingContext.$root.rtl, value = ko.unwrap(valueAccessor());
        var onDataScroll = function (e) {
            if (e.scrollOffset.left >= 0) {
                if (!$titles)
                    $titles = $element.find('.dxd-tableview-titles');
                if (!$content)
                    $content = $element.find('.dxd-tableview-data table');
                $titles.offset({ left: $content.offset().left, top: $titles.offset().top });
            }
        };
        var onDataScrollInitialized = function (e) {
            $content = null;
            if (!rtl)
                return;
            var dxScroll = e.component;
            setTimeout(function () { return dxScroll.scrollTo({ left: dxScroll.scrollWidth(), top: 0 }); }, 1);
        };
        ko.applyBindings({
            onDataScroll: onDataScroll,
            onDataScrollInitialized: onDataScrollInitialized,
            data: value,
            rtl: rtl,
            noDataText: _localization_1.noDataText,
            isImage: function (index) { return value.schema[index].type === 'System.Byte[]'; },
            isImageTooLarge: function (cellValue) { return cellValue[0] === '!'; },
            getImageTooLargeText: function (cellValue) { return 'Image too large (' + cellValue.substring(1) + ' bytes)'; }
        }, $element.children()[0]);
        $element.find('.dxd-tableview-titles .dxd-tableview-resizable').each(function (index, resizable) {
            var $title = $(resizable).find('.dxd-tableview-cell-text');
            var $column = $element.find('.dxd-tableview-data .dxd-tableview-resizable' + index);
            if (index < value.schema.length - 1) {
                $(resizable)['resizable']({
                    handles: 'e',
                    alsoResize: $column.parent(),
                    resize: function (e, ui) {
                        $title.outerWidth(ui.size.width);
                        $column.outerWidth(ui.size.width);
                    }
                });
            }
            var maxWidth = Math.max($title.width(), $column.width());
            $title.width(maxWidth);
            $column.width(maxWidth);
        });
        _internal_1.addDisposeCallback($element.children()[0], function () {
            $element.find('.dxd-tableview-titles .dxd-tableview-resizable').each(function (_, resizable) {
                if ($(resizable).data('ui-resizable'))
                    $(resizable)['resizable']('destroy');
            });
            $element = null;
        });
        return { controlsDescendantBindings: true };
    }
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _svgTemplateEngine_1 = __webpack_require__(10);
_svgTemplateEngine_1.SvgTemplatesEngine.addTemplates({
    'dxdd-connection-line': '<svg class="dxdd-connection-line" style="width:100%; height: 100%"> <line class="dxd-qb-relationship-line-color" data-bind="attr: { x1: startPoint().relativeX, y1: startPoint().relativeY, x2: endPoint().relativeX, y2: endPoint().relativeY }" /> </svg>',
    'dxdd-connecting-point': '<div class="dxdd-connecting-point" data-bind="styleunit: position, trackCursor: underCursor, style: { \'marginLeft\': -3 * _context.zoom() + \'px\', \'marginTop\': -3 * _context.zoom() + \'px\' }, draggable: $root.connectingPointDragHandler"> <svg style="width:100%; height: 100%"> <line x1="0" y1="0" x2="100%" y2="100%" /> <line x1=0 y1="100%" x2="100%" y2="0" /> </svg> </div>',
    'dxdd-connection-point-selection': '<div class="dxrd-control" data-bind="draggable: $root.connectionPointDragHandler, styleunit: { top: relativeY, left: relativeX }"> </div>',
    'dxdd-connector': '<div class="dxdd-connector" data-bind="styleunit: position, trackCursor: underCursor"> <!-- ko template: { name: \'dxdd-connection-line\' } --> <!-- /ko --> </div>',
    'dxdd-connector-selection': '<div class="dxdd-connector" data-bind="styleunit: position, dxclick: function() {}, draggable: $root.dragHandler"> <!-- ko template: { name: \'dxdd-connection-line\' } --> <!-- /ko --> <!-- ko with: startPoint --> <!-- ko template: { name: \'dxdd-connection-point-selection\' } --> <!-- /ko --> <!-- /ko --> <!-- ko with: endPoint --> <!-- ko template: { name: \'dxdd-connection-point-selection\' } --> <!-- /ko --> <!-- /ko --> </div>',
    'dxdd-routed-connection-line': '<svg class="dxdd-connection-line"> <!-- ko if: showArrow --> <defs> <marker data-bind="attr: { id: \'dxqb-arrow_\' + connectorID() }" viewBox="0 0 5 10" refX="5" refY="5" markerUnits="userSpaceOnUse" orient="auto" markerWidth="14" markerHeight="14"> <polyline class="dxd-qb-relationship-line-color" points="0,0 5,5 0,10" /> </marker> </defs> <!-- /ko --> <polyline class="dxd-qb-relationship-line-color" fill="none" data-bind="attr: { points: routePointsSet, \'marker-end\': showArrow() ? \'url(#dxqb-arrow_\' + connectorID() + \')\' : \'\' }, updateConnectorArrow: $data" /> </svg>',
    'dxdd-routed-connector': '<div class="dxdd-connector" data-bind="styleunit: position, visible: isVisible"> <!-- ko template: { name: \'dxdd-routed-connection-line\' } --> <!-- /ko --> <!-- ko foreach: routeLineWrappers --> <div data-bind="styleunit: position" style="position: absolute;"> <!-- ko with: $parent --> <div class="dxd-selectable" data-bind="trackCursor: underCursor, click: $root.selectItemProperties" style="position: relative; width: 100%; height: 100%;"></div> <!-- /ko --> </div> <!-- /ko --> </div>',
    'dxdd-routed-connector-selection': '<div class="dxdd-connector dxrd-selected dxd-state-selected" data-bind="styleunit: position, dxclick: function() {}, visible: isVisible"> <!-- ko template: { name: \'dxdd-routed-connection-line\' } --> <!-- /ko --> <!-- ko foreach: routeLineWrappers --> <!-- ko ifnot: isLocked --> <div data-bind="styleunit: position, style: { cursor: isVerticalLine ? \'ew-resize\' : \'ns-resize\' }, routeLineDraggable: { starting: $root.resizeHandler.starting, stopped: function() { resizeStopped(); $root.resizeHandler.stopped(); }, forceResize: resizeHandler }" style="position: absolute;"> </div> <!-- /ko --> <!-- ko if: isLocked --> <div data-bind="styleunit: position" style="position: absolute;"> </div> <!-- /ko --> <!-- /ko --> <!-- ko with: startPoint --> <!-- ko template: { name: \'dxdd-connection-point-selection\' } --> <!-- /ko --> <!-- /ko --> <!-- ko with: endPoint --> <!-- ko template: { name: \'dxdd-connection-point-selection\' } --> <!-- /ko --> <!-- /ko --> </div>',
    'dx-diagram-element': '<div class="dxrd-control dxd-selectable" data-bind="styleunit: position, trackCursor: underCursor"> <div class="dxrd-control-content-main" data-bind="styleunit: { lineHeight: positionLineHeightWithoutMargins }, style: css"> <div data-bind="template: contenttemplate, styleunit: { \'height\': positionLineHeightWithoutMargins, \'width\': positionWidthWithoutMargins }"> </div> </div> </div>',
    'dx-diagram-element-selection': '<div class="dxrd-control" data-bind="event: { dblclick: $root.inlineTextEdit.show }, css: {\'dxrd-selected\': selected, \'dxrd-focused\': focused }, resizable: $root.resizeHandler, draggable: $root.dragHandler, styleunit: position, trackCursor: underCursor"> <!-- ko if: !$root.inlineTextEdit.visible() --> <div class="dxrd-control-content-main" data-bind="styleunit: { lineHeight: positionLineHeightWithoutMargins }, style: css"> <div data-bind="template: contenttemplate, styleunit: { \'height\': positionLineHeightWithoutMargins, \'width\': positionWidthWithoutMargins}"> </div> </div> <!-- /ko --> <!-- ko if: $root.inlineTextEdit.visible --> <!-- ko with: $root.inlineTextEdit --> <div class="inline-text-edit" data-bind="dxTextArea: { value: text, onKeyUp: keypressAction, valueChangeEvent: \'keyup\' }"></div> <!-- /ko --> <!-- /ko --> </div>',
    'dx-diagram-element-content': '<div style="width: 100%; height: 100%; border: 1px solid black"> <div data-bind="text: getControlModel().text"></div> </div>',
    'dxdd-element-content-with-connecting-points': '<div style="width: 100%; height: 100%; overflow: hidden"> <svg style="top:0; left: 0; width: 100%; height: 100%; stroke: black; fill: transparent; stroke-width: 1"> <!-- ko if: getControlModel().type() === \'Ellipse\' --> <ellipse cx="50%" cy="50%" rx="50%" ry="50%" /> <!-- /ko --> <!-- ko if: getControlModel().type() === \'Condition\' --> <line x1="50%" y1="0" x2="100%" y2="50%" /> <line x1="100%" y1="50%" x2="50%" y2="100%" /> <line x1="50%" y1="100%" x2="0" y2="50%" /> <line x1="0" y1="50%" x2="50%" y2="0" /> <!-- /ko --> <!-- ko if: !getControlModel().type() --> <rect height="100%" width="100%" /> <!-- /ko --> <text x="50%" y="50%" alignment-baseline="middle" style="text-anchor: middle; cursor:default;" data-bind="text: getControlModel().text"></text> </svg> <!-- ko foreach: connectingPoints --> <!-- ko template: \'dxdd-connecting-point\' --> <!-- /ko --> <!-- /ko --> </div>',
    'dx-diagram-surface': '<div class="dxrd-surface" style="height: 100%; display:inline-block;" data-bind="styleunit: { \'width\': Math.min(pageWidth(), $root.surfaceSize()) }, click: function(_, e) { $root.selection.clickHandler(null, e); e.stopPropagation(); }, keyDownActions: $root.actionLists"> <div class="dxrd-viewport" style="overflow:auto;width:inherit;height:inherit;" data-bind="styleunit: { minWidth: Math.min(pageWidth(), $root.surfaceSize()), maxWidth: pageWidth(),  maxHeight: pageHeight() + 20 }"> <div data-bind="selectable: { selection: $root.selection, zoom: zoom }"> <div class="dxrd-ghost-containment"> <div class="dxrd-ghost-container" style="background: white;position: relative;" data-bind="styleunit: { \'width\': pageWidth(), \'height\': pageHeight() }, trackCursor: underCursor"> <!-- ko foreach: controls --> <!-- ko template: { name: isSelected() ? selectiontemplate : template } --> <!-- /ko --> <!-- /ko --> </div> </div> </div> </div> </div>',
    'dxqb-joincondition': '<div class="dxdd-connector" data-bind="styleunit: position, trackCursor: underCursor"> <svg style="width:100%; height: 100%"> <line data-bind="attr: { x1: startPoint.x, y1: startPoint.y, x2: endPoint.x, y2: endPoint.y }" /> </svg> </div>',
    'dx-query-surface': '<div class="dxrd-surface" style="display:inline-block;" data-bind="styleunit: { \'width\': $root.surfaceSize }, click: function(_, e) { $root.selection.clickHandler(null, e); e.stopPropagation(); }, keyDownActions: $root.actionLists"> <div class="dxrd-viewport" style="width:inherit;height:inherit;"> <div class="dxqb-mainwin" data-bind="dxScrollView: { direction: \'both\', showScrollbar: \'onHover\', scrollByContent: false, scrollByThumb: true, bounceEnabled: false, useNative: false, height: \'100%\' }"> <div style="height:100%;"> <div class="dxrd-ghost-containment" style="height:100%;"> <div class="dxrd-ghost-container dxqb-ghost-container" data-bind="styleunit: { \'minWidth\': pageWidth, \'minHeight\': pageHeight }, trackCursor: { recalculateBounds: true, underCursor: underCursor }"> <div class="dxqb-main" data-bind="trackCursor: { recalculateBounds: true, underCursor: underCursor }, style: { \'z-index\' : $parent.dragDropStarted() ? 2 : null }"> <!-- ko if: tables().length === 0--> <div class="dxqb-placeholder dxd-empty-area-placeholder-text-color dxd-text-info" data-bind="text: placeholder()"></div> <!-- /ko --> <!-- ko foreach: relations --> <!-- ko foreach: conditions --> <!-- ko if: !isSelected()--> <!-- ko template: template --> <!-- /ko --> <!-- /ko --> <!-- /ko --> <!-- /ko --> <!-- ko foreach: tables --> <!-- ko template: template --> <!-- /ko --> <!-- /ko --> <!-- ko foreach: relations --> <!-- ko foreach: conditions --> <!-- ko if: isSelected()--> <!-- ko template: selectiontemplate --> <!-- /ko --> <!-- /ko --> <!-- /ko --> <!-- /ko --> <!-- ko with: $root.columnDragHandler.dragDropConnector --> <svg class="dxdd-connection-line-draggable" data-bind="styleunit: { top: position.top(), left: position.left() }"> <!-- ko foreach: routePoints --> <!-- ko if: $index() < ($parent.routePoints().length - 1) --> <line class="dxd-qb-relationship-line-color" fill="none" data-bind="attr: {x1 : $data.x, y1: $data.y, x2: $parent.routePoints()[$index()+1].x, y2: $parent.routePoints()[$index()+1].y }"></line> <!-- /ko --> <!-- /ko --> </svg> <!-- /ko --> </div> </div> </div> </div> </div> </div> </div>',
    'dxqb-relation': '<!-- ko foreach: conditions --> <!-- ko template: { name: isSelected() ? selectiontemplate : template } --> <!-- /ko --> <!-- /ko -->',
    'dxqb-table-field': '<div class="dx-border-inheritor dxd-border-accented"> <div class="dxqb-table-field dxd-qb-table-field-border-color dxd-qb-table-field-back-color dxd-back-highlighted dxd-qb-table-field-separator-color dxd-border-primary" data-bind="trackCursor: { recalculateBounds: true, underCursor: underCursor }, draggable: $root.columnDragHandler, css: cssClasses($root.surface(), $root.columnDragHandler, $parent), click: $root.selectItemProperties"> <div class="dxqb-table-field-background dxd-back-accented"></div> <div class="dxqb-table-field-checkbox-wrapper"> <div class="dxqb-table-field-checkbox" data-bind="dxCheckBox: { value: selectedWrapper }, click: function(surface, e) { surface.toggleSelected(); e.stopPropagation(); return true;  }"></div> </div> <div class="dxqb-table-field-content dxd-text-primary" data-bind="attr: { title: getControlModel().actualName }"> <div class="dxqb-table-field-state"> <!-- ko if:  $data.isAscending() --> <div class="dxqb-image-field-state dxqb-image-field-sorting-asc"><!-- ko template: \'dxrd-svg-queryBuilder-sorting_asc\' --><!-- /ko --></div> <!-- /ko --> <!-- ko if:  $data.isDescending() --> <div class="dxqb-image-field-state dxqb-image-field-sorting-desc"><!-- ko template: \'dxrd-svg-queryBuilder-sorting_desc\' --><!-- /ko --></div> <!-- /ko --> <!-- ko if: $data.getControlModel().groupBy --> <div class="dxqb-image-field-state dxqb-image-field-group-by"><!-- ko template: \'dxrd-svg-queryBuilder-group_by\' --><!-- /ko --></div> <!-- /ko --> <!-- ko if: $data.isAggregate() --> <div class="dxqb-image-field-state dxqb-image-field-aggregate"><!-- ko template: \'dxrd-svg-queryBuilder-aggregate\' --><!-- /ko --></div> <!-- /ko --> </div> <div class="dxqb-table-field-caption"> <div class="dxqb-table-field-text dxd-qb-table-field-text-color" data-bind="text: getControlModel().actualName"></div> </div> </div> </div> </div>',
    'dxqb-table-asterisk-field': '<div class="dx-border-inheritor dxd-border-accented"> <div class="dxqb-table-field dxd-qb-table-field-border-color dxd-qb-table-field-back-color dxd-back-highlighted dxd-border-primary" data-bind="trackCursor: underCursor, css: cssClasses(), click: $root.selectItemProperties"> <div class="dxqb-table-field-background dxd-back-accented"></div> <div class="dxqb-table-field-checkbox-wrapper"> <div class="dxqb-table-field-checkbox" data-bind="dxCheckBox: { value: selectedWrapper }, click: function(surface, e) { surface.toggleSelected(); e.stopPropagation(); return true;  }"></div> </div> <div class="dxqb-table-field-content dxd-text-primary" data-bind="attr: { title: getControlModel().name }"> <div class="dxqb-table-field-caption"> <div class="dxqb-table-field-text dxd-qb-table-field-text-color" data-bind="text: getControlModel().name"></div> </div> </div> </div> </div>',
    'dxqb-table-main': '<!-- ko if: $data.isSelected() --> <div class="dxqb-table-resize-ghost" data-bind="resizable: resizable($root.resizeHandler, $element), styleunit: position"></div> <!-- /ko --> <div class="dxrd-control" data-bind="css: {\'dxrd-selected\': selected, \'dxrd-focused\': focused }, draggable: $root.dragHandler, styleunit: position, trackCursor: underCursor, click: $root.selectItemProperties"> <div class="dxrd-control-content-main dxd-qb-table-back-color dxd-back-primary2" data-bind="styleunit: { lineHeight: position.lineHeight }, style: css"> <div class="dxqb-table-background dxd-back-accented"></div> <div class="dx-background-inheritor dxd-back-accented"> <div class="dxqb-table-border dxd-qb-table-border-color dxd-back-highlighted dxd-state-active dxd-state-no-hover"></div> </div> <div data-bind="template: contenttemplate, styleunit: { \'height\': position.lineHeight, \'width\': position.width }"> </div> </div> </div>',
    'dxqb-table': '<div class="dxqb-table dxd-qb-table-back-color dxd-back-primary2"> <div class="dx-border-inheritor dxd-border-accented"> <div class="dxqb-table-head-field dxd-qb-table-field-border-color dxd-qb-table-field-back-color dxd-back-highlighted dxd-border-primary"> <div class="dxqb-table-checkbox-all"> <div data-bind="dxCheckBox: { value: selectedWrapper }, click: function(surface, e) { $root.undoEngine().start(); surface.toggleSelected(); $root.undoEngine().end(); e.stopPropagation(); return true; }"></div> </div> <div class="dxqb-table-title dxd-text-primary" data-bind="text: getControlModel().actualName, style: { cursor: selected() ? \'move\' : \'default\' }"></div> </div> </div> <div class="dxqb-table-content"> <div class="dxqb-tableFields-wrapper"> <!-- ko ifnot: $data.isInitialized() --> <div class="dxqb-table-loading"> <div class="dxqb-table-loading-text dxd-text-primary" data-bind="text: $root.columnsLoadingMsg()"></div> </div> <!-- /ko --> <!-- ko if: $data.isInitialized() --> <!-- ko template: { name: asterisk.template, data: asterisk } --> <!-- /ko --> <!-- ko foreach: columns --> <!-- ko lazy: { template: $data.template  }--> <!-- /ko --> <!-- /ko --> <!-- /ko --> </div> </div> </div>',
    'dxrd-masterDetail-editor': '<!-- ko if: $data --> <div> <div data-bind="dxPopup: { showTitle: true, width: \'95%\', height: \'95%\', title: title(), visible: popupVisible, wrapperAttr: { class: \'dx-filtereditor\' }, toolbarItems: buttonItems, showCloseButton: true, container: $root.getPopupContainer($element), position: { of: $root.getPopupContainer($element) }, }"> <div class="dx-filtereditor-tree dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', direction: \'both\' }" style="cursor: default"> <!-- ko foreach: masterQueries --> <div class="criteria-operator-group"> <div class="criteria-operator-group-item"> <div class="criteria-operator-text dxd-filter-editor-text-color criteria-operator-item-group dxd-filter-editor-group-back-color dxd-state-no-hover stylized" data-bind="text: queryName"></div> <div data-bind="service: { name: \'createRelation\' }"></div> </div> <div class="criteria-operator-content"> <!-- ko template: { name: \'dx-masterDetail-editor-relation\', foreach: relations }--> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div> <div class="dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay" data-bind="dxPopupWithAutoHeight: { width: \'170px\', height: \'300px\', focusStateEnabled: false, wrapperAttr: { class: \'dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay\' }, position: $root.rtl ? { my: \'right top\', at: \'right bottom\', of: popupService.target } : { my: \'left top\', at: \'left bottom\', of: popupService.target }, container: $root.getPopupContainer($element), target: popupService.target, showTitle: false, showCloseButton: false, animation: {}, closeOnOutsideClick: true, shading: false, visible: popupService.visible }"> <!-- ko with: popupService--> <!-- ko with: data --> <!-- ko template: template--> <!-- /ko --> <!-- /ko --> <!-- /ko --> </div> </div> <!-- /ko -->',
    'dx-masterDetail-editor-keyColumn': '<div class="criteria-operator-text dxd-filter-editor-text-color criteria-operator-item-field dxd-filter-editor-field-back-color dxd-state-no-hover stylized" data-bind="attr: { title: $data.getTitle() }, text: queryName"></div> <div class="criteria-operator-text dxd-filter-editor-text-color">.</div> <div class="criteria-operator-text dxd-filter-editor-text-color"> <div data-bind="service: { name: \'setColumn\' }"></div> </div>',
    'dx-masterDetail-editor-relation': '<div class="criteria-operator-group"> <div class="criteria-operator-group-item"> <div class="criteria-operator-action" data-bind="dxclick: function() {  $parent.remove($data); }"> <div class="criteria-operator-action-image dx-image-filtereditor-remove"><!-- ko template: \'dxrd-svg-filtereditor-remove\' --><!-- /ko --></div> </div> <div class="criteria-operator-item" data-bind="visible: isEditable"> <div class="criteria-operator-item-editor" data-bind="dxTextBox: { value: relationName, onFocusOut: function() { isEditable(false); } }, focus: { on: isEditable }"></div> </div> <div class="criteria-operator-text dxd-filter-editor-text-color criteria-operator-item-value dxd-filter-editor-value-back-color" data-bind="visible: !isEditable()"> <div class="criteria-operator-text dxd-filter-editor-text-color clickable" data-bind="text: relationName, click: function() { isEditable(true); }"></div> </div> <div class="criteria-operator-action" data-bind="dxclick: create"> <div class="criteria-operator-action-image dx-image-filtereditor-add"><!-- ko template: \'dxrd-svg-filtereditor-add\' --><!-- /ko --></div> </div> </div> <div class="criteria-operator-content"> <!-- ko foreach: keyColumns --> <div class="criteria-operator-group"> <div class="criteria-operator-group-item"> <div class="criteria-operator-action" data-bind="dxclick: function() {  $parent.remove($data); }"> <div class="criteria-operator-action-image dx-image-filtereditor-remove"><!-- ko template: \'dxrd-svg-filtereditor-remove\' --><!-- /ko --></div> </div> <!-- ko template: { name: \'dx-masterDetail-editor-keyColumn\', data: master } --> <!-- /ko --> <div class="criteria-operator-text dxd-filter-editor-text-color"> = </div> <!-- ko template: { name: \'dx-masterDetail-editor-keyColumn\', data: detail } --> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div>',
    'dx-masterdetail-editor-setColumn': '<div class="criteria-operator-text dxd-filter-editor-text-color clickable criteria-operator-item-field dxd-filter-editor-field-back-color" data-bind="text: target.column() || target.selectColumnText(), dxclick: showPopup, css: { \'dxd-state-selected\': target.isSelected, \'default\': !target.column() }"></div>',
    'dxqb-data-preview': '<div style="height: 100%" data-bind="dxdTableView: $data.value"></div>',
    'dxqb-popup': '<div data-bind="dxPopup: { animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, wrapperAttr: { class: \'dxqb-preview\' }, visible: isVisible, title: title(), showTitle: true, resizeEnabled: true, shading: true, shadingColor: \'transparent\', fullScreen: false, width: 800, height: 544, container: container($element), position: { of: container($element) }, onHidden: function() { $data.data.value(null) }, focusStateEnabled: false }"> <div class="dxqb-preview-popup-content"> <!-- ko if: data && !isLoading() --> <!-- ko template: { name: template, data: data } --> <!-- /ko --> <!-- /ko --> <!-- ko if: isLoading --> <div style="text-align: center; padding-top: 25%;"> <div data-bind="dxLoadIndicator: { visible: true }"></div> </div> <!-- /ko --> </div> <div class="dxqb-preview-popup-buttons dxd-border-secondary"> <div class="dxqb-preview-popup-button" data-bind="dxButton: { text: okButtonText(), onClick: okButtonHandler, disabled: isLoading }"></div> </div> </div>',
    'dxqb-selectstatment-preview': '<div class="dxqb-show-query-string-content dx-widget"> <!-- ko if: !aceAvailable --> <div class="dxrd-show-query-string-editor" data-bind="dxTextArea: { value: value, valueChangeEvent: \'keyup\', readOnly: true }"></div> <!-- /ko --> <!-- ko if: aceAvailable --> <div class="dxrd-show-query-string-editor"> <div class="dxrd-show-query-string-editor-content"> <div class="dx-sql_editor dx-disabled-ace dxd-back-primary2" data-bind="dxAceEditor: { value: value, options: aceOptions, additionalOptions: additionalOptions }"></div> </div> </div> <!-- /ko --> </div>',
    'dxd-tableview': '<div class="dxd-tableview"> <div class="dxd-tableview-titles"> <table> <tbody> <tr> <!-- ko foreach: rtl ? data.schema.reverse() : data.schema --> <td data-bind="attr: { class: \'dxd-tableview-title-cell dxd-border-secondary dxd-tableview-resizable\' }"> <div class="dxd-tableview-cell-text dxd-qb-data-preview-cell-text-color dxd-text-info" data-bind="text: name"></div> </td> <!-- /ko --> </tr> </tbody> </table> </div> <!-- ko if: data.values --> <div class="dxd-tableview-data" data-bind="dxScrollView: { direction: \'both\', scrollByContent: false, showScrollbar: \'always\', scrollByThumb: true, bounceEnabled: false, useNative: false, onScroll: $data.onDataScroll, onInitialized: $data.onDataScrollInitialized }"> <table> <tbody> <!-- ko foreach: data.values --> <tr> <!-- ko foreach: $parent.rtl ? $data.reverse() : $data --> <td class="dxd-tableview-cell dxd-border-secondary"> <!-- ko ifnot: $parents[1].isImage($index()) --> <div data-bind="text: $data, attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }"></div> <!-- /ko --> <!-- ko if: $parents[1].isImage($index()) --> <!-- ko if: $parents[1].isImageTooLarge($data) --> <div data-bind="text: $parents[1].getImageTooLargeText($data), attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }"></div> <!-- /ko --> <!-- ko ifnot: $parents[1].isImageTooLarge($data) --> <div data-bind="attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }"> <img data-bind="attr: { src: \'data:image/bmp;base64,\' + $data }" /> </div> <!-- /ko --> <!-- /ko --> </td> <!-- /ko --> </tr> <!-- /ko --> <tr class="dxd-tableview-data-fakerow"> <!-- ko foreach: data.values[0] --> <td class="dxd-tableview-cell dxd-border-secondary"> <div data-bind="attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }"></div> </td> <!-- /ko --> </tr> </tbody> </table> </div> <!-- /ko --> <!-- ko ifnot: data.values --> <div class="dxd-tableview-empty-message" data-bind="text: noDataText()"></div> <!-- /ko --> </div>',
    'dxqb-fieldlist-wrapper': '<div id="tree" data-bind="treelist: treeListOptions" style="width:100%; height: 100%;"></div>',
    'dxqb-properties-wrapper': '<div class="dxrd-properties-wrapper" data-bind="visible: active() && visible()"> <div style="height:100%" class="dxd-text-primary"> <!-- ko with: model --> <div class="dxrd-properties-grid dxd-border-primary" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }" style="top: 0px;"> <div> <!-- ko foreach: groups --> <div class="dx-fieldset" data-bind="visible: visible"> <div data-bind="dxdAccordion: { collapsed: collapsed }"> <div class="dxrd-group-header dx-accordion-header" data-bind="css: { \'dxrd-group-header-collapsed dxd-border-primary\': collapsed() }"> <div class="dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !collapsed() }" style="display:inline-block;"></div> <span class="dxrd-group-header-text" data-bind="text: displayName()"></span> </div> <div class="dx-accordion-content dxd-back-primary"> <!-- ko ifnot: editorsCreated --> <div class="dx-accordion-content-loading-panel"> <div data-bind="dxLoadIndicator: { visible: !editorsCreated() }"></div> </div> <!-- /ko --> <!-- ko if: $data.editorsRendered() --> <div data-bind="visible: editorsCreated"> <div class="dx-editors"> <!-- ko foreach: editors --> <!-- ko template: editorTemplate --> <!-- /ko --> <!-- ko if: ($index() === $parent.editors().length - 1 && $parent.editorsCreated(true)) --> <!-- /ko --> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div> </div> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div>',
    'dxqb-propertygrid': '<!-- ko with: value --> <div class="dx-fieldset dxqb-selected-properties"> <!-- ko foreach: properties.getEditors() --> <!-- ko template: editorTemplate --> <!-- /ko --> <!-- /ko --> </div> <!-- /ko -->',
    'dxqb-fieldspanel': '<!-- ko with: value --> <div data-bind="treeListSearchPanel: { controllers: $data.fieldListModel.treeListOptions().treeListController }"></div> <div class="dxqb-right-panel-fields" data-bind="dxScrollView: { showScrollbar: \'onHover\', scrollByContent: false, scrollByThumb: true, bounceEnabled: false, useNative: false }"> <!-- ko template: { name: "dxqb-fieldlist-wrapper", data: fieldListModel } --> <!-- /ko --> </div> <!-- /ko -->',
    'dxqb-parameterspanel': '<!-- ko with: value --> <div class="dxqb-right-panel-parameters" data-bind="dxScrollView: { showScrollbar: \'onHover\', scrollByContent: false, scrollByThumb: true, bounceEnabled: false, useNative: false }"> <div style="width: 100%" data-bind="dxCollectionEditor: $data"></div> </div> <!-- /ko -->',
    'dxqb-collectioneditor-template': '<div class="dxrd-accordion-collection-item" data-bind="dxdAccordion: { collapsed: collapsed }"> <div class="dxrd-group-header dx-accordion-header"> <div> <div class="propertygrid-editor-collapsed dx-collapsing-image" data-bind="css: { \'dx-image-expanded\': !collapsed() }, template: \'dxrd-svg-collapsed\'"></div> <div class="dx-group-header-font" data-bind="text: $root.getLocalization($parent.name), attr: { title: $root.getLocalization($parent.name) }"></div> </div> </div> <div class="dx-accordion-content"> <div data-bind="dxPropertyGrid: { target: value, level: 1, parentDisabled: editor.disabled }"></div> </div> </div>',
    'dxqb-toolbar': '<div class="dxrd-toolbar-wrapper dxd-toolbar-back-color" data-bind="click: $root.findControl"> <div class="dxqb-toolbar-background dxd-back-primary-invariant"></div> <div class="dxrd-toolbar" data-bind="template: {name: \'dxqb-toolbar-items\', data: actionLists.toolbarItems }"></div> </div>',
    'dxqb-toolbar-items': '<!-- ko foreach: $data --> <!-- ko if: $data.templateName --> <!-- ko template: templateName  --> <!-- /ko --> <!-- /ko --> <!-- ko if: !$data.templateName --> <div class="dxrd-toolbar-item" data-bind="visible: visible"> <div class="dxqb-toolbar-item-container"> <div class="dxqb-toolbar-item-background dxd-back-secondary"></div> <div data-bind="template: {name: ko.unwrap($data.imageTemplateName), if: !!ko.unwrap($data.imageTemplateName)}, attr: { class: \'dxrd-toolbar-item-image dxd-icon-highlighted dxd-state-normal \' + (ko.unwrap($data.imageClassName) || \'\'), title: $data.displayText && $data.displayText() || text }, dxclick: function() { if((typeof $data.disabled === \'function\') && !disabled() || !disabled) { clickAction($root.model && $root.model()); } }, css: {\'dxrd-disabled-button\': disabled, \'dxd-state-active\': $data.selected }"> </div> </div> <div class="dxrd-toolbar-item-separator dxd-toolbar-separator-color dxd-border-secondary" data-bind="visible: $data.hasSeparator"></div> </div> <!-- /ko --> <!-- /ko -->',
    'dxqb-property-editor': '<div class="dxrd-editor" data-bind="visible: visible"> <div class="dxrd-editor-header"> <div class="dx-field dxd-back-primary"> <div class="dx-field-label dxd-text-primary"> <div class="propertygrid-editor-displayName" data-bind="text: displayName, attr: { \'title\': displayName }"></div> </div> <div class="dx-field-value"> <div data-bind="service: { name: \'createEditorAddOn\' }"></div> <!-- ko lazy: { template: templateName } --> <!-- /ko --> </div> </div> </div> </div>',
    'dxqb-expressionstring': '<!-- ko if: $data.value() --> <div data-bind="dxExpressionEditor: getOptions({ options: value, fieldListProvider: $root.parametersBindingsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() })"></div> <!-- /ko -->',
    'dxqb-filtereditor-changeparameter': '<div class="criteria-operator-item" data-bind="visible: target.isEditable"> <div class="criteria-operator-item" data-bind="dxTextBox: { value: target._parameterName, onFocusOut: function() { target.createParameter(); target.isEditable(false); } }"></div> </div> <div class="criteria-operator-text dxd-filter-editor-text-color clickable " data-bind="text: target.parameterName, dxclick: showPopup, css: { \'dxd-state-selected\': target.isSelected, \'default\': target.isDefaultTextDisplayed() }, visible: $data.target.isEditable() === false"></div>',
    'dxqb-filtereditor-propertiespopup': '<div class="dx-widget" data-bind="dxScrollView: { showScrollbar: \'onHover\' }"> <!-- ko foreach: data --> <div data-bind="dxdAccordion: { collapsed: collapsed }"> <div class="dx-accordion-header"> <div class="dx-filtereditor-popup-item dxd-list-item-back-color dx-item dx-list-item dxd-back-highlighted"> <div class="dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !collapsed() }" style="display:inline-block;  margin-left: 5px;"></div> <span class="dx-item-content dx-list-item-content" style="padding-left: 17px" data-bind="text: name"></span> </div> </div> <div class="dx-accordion-content dxd-back-primary"> <!-- ko foreach: items --> <div class="dx-filtereditor-popup-item dx-item dx-list-item dxd-list-item-back-color dxd-back-highlighted"> <span class="dx-item-content dx-list-item-content" style="padding-left: 17px" data-bind="text: name, attr: { \'title\': name }, click: function() { $parents[1].click($data); }"></span> </div> <!--/ko --> </div> </div> <!--/ko --> </div>',
    'dxqb-filtereditor-parameterspopup': '<div class="dx-widget" data-bind="dxScrollView: { showScrollbar: \'onHover\' }"> <!-- ko if: $parent.viewModel.canCreateParameters --> <div class="dx-filtereditor-popup-item dx-item dx-list-item dxd-list-item-back-color dxd-back-highlighted"> <span class="dx-item-content dx-list-item-content" data-bind="text: $parent.viewModel.defaultDisplay(), click: function() { $parent.viewModel.isEditable(true); $parent.viewModel._parameterName(\'\'); $parent.visible(false); }"></span> </div> <!-- /ko --> <!-- ko foreach: data --> <div class="dx-filtereditor-popup-item dx-item dx-list-item dxd-list-item-back-color dxd-back-highlighted"> <span class="dx-item-content dx-list-item-content" data-bind="text: name, click: function() { $parent.click($data); } "></span> </div> <!-- /ko --> </div>',
    'dxqb-treelist-item-with-search': '<div data-bind="visible: visible"> <!-- ko template: "dxqb-treelist-header-item-with-search" --> <!-- /ko --> </div>',
    'dxqb-treelist-header-item-with-search': '<div class="dx-treelist-item dxd-list-item-back-color dxd-back-highlighted" data-bind="event: { dblclick: function() { $data.dblClickHandler ? $data.dblClickHandler($data) : $data.toggleCollapsed() } }, styleunit: padding, css: { \'dx-treelist-item-selected dxd-state-selected\': isSelected() || isMultiSelected() }"> <div class="dx-treelist-collapsedbutton"></div> <div class="dx-treelist-caption"> <div class="dx-treelist-selectedcontent" data-bind="click: toggleSelected,  draggable: isDraggable ? dragDropHandler : null"> <div class="dx-treelist-image" data-bind="css: $data.imageClassName, template: {name: $data.imageTemplateName, if: !!ko.unwrap($data.imageTemplateName)}, attr: { title: text }"> </div> <!-- ko template: { name: \'dx-treelist-item-text-content\' } --> <!-- /ko --> </div> </div> </div>',
    'dxrd-page-choose-datasource-type': '<div class="dxrd-wizard-type-page" data-bind="css: $data._extendCssClass(\'type-page\')"> <!-- ko foreach: typeItems --> <div data-bind="event: { click: $parent._itemClick, dblclick: function() { $parent._goToNextPage() } }, attr: { class: \'dxd-back-highlighted dxd-state-normal dxrd-wizard-type-item dx-fontsize-reestablished dxrd-wizard-type-item-border-color dxd-list-item-back-color \' + $parent._extendCssClass(\'type-item\')}, css: { \'dxd-border-secondary dxd-back-secondary\': $parent._IsSelected($data) } "> <div data-bind="attr: { class: \'dxrd-wizard-type-image \' + $parent._extendCssClass(\'type-image\') }, css: imageClassName, template: imageTemplateName"> </div> <div class="dxrd-wizard-type-text" data-bind="text: text, attr: { title: text }, css: $parent._extendCssClass(\'type-text\')"></div> </div> <!-- /ko --> </div>',
    'dx-wizard-fullscreen': '<!-- ko if: $data && $data.isVisible() --> <div class="dx-fullscreen-wizard dx-editors" data-bind="css: { \'dx-rtl\': $root.rtl, \'dx-ltr\': !$root.rtl }"> <div class="dxrd-wizard dxrd-report-wizard dx-editors dxd-text-primary dxd-back-primary2" data-bind="css: _extendCssClass"> <div class="dxrd-wizard-steps-container dxd-back-primary" data-bind="visible: $data.navigationPanel().isVisible"> <div class="dxrd-wizard-title dxd-border-primary" data-bind="text: _description(), attr: {\'title\': _description() }"></div> <!-- ko with: navigationPanel --> <div class="dxrd-wizard-steps" data-bind="foreach: _steps"> <div class="dxrd-wizard-steps-relative" style="position:relative" data-bind="visible: $data.visible"> <div class="dxrd-wizard-steps-content" data-bind="click: $data.clickAction, text: $data.text, attr: {\'title\': $data.text }, css: { \'dxrd-disabled\': $data.disabled, \'dxd-back-secondary\': $data.isActive() }"></div> <div class="dxrd-wizard-steps-marker dxd-back-primary2" data-bind="visible: $data.isActive"></div> </div> </div> <!-- /ko --> </div> <div class="dxrd-wizard-content" data-bind="css: { \'withoutPanel\': !$data.navigationPanel().isVisible() }"> <div class="dxrd-wizard-part-description dxd-back-contrast"> <div class="dxrd-wizard-part-description-text dxd-text-primary dxd-border-primary" data-bind="text: _pageDescription()"></div> </div> <!-- ko with: _currentPage --> <div class="dxrd-wizard-work-content"> <div class="dxrd-wizard-work-content-relative"> <div data-bind="template: { name: template, data: page } "></div> </div> </div> <!-- /ko --> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel: _loadPanelViewModel($element)"> </div> <div class="dxrd-wizard-navigation"> <div data-bind="dxButton: cancelButton" class="dxrd-wizard-btn left"></div> <div data-bind="dxButton: finishButton" class="dxrd-wizard-btn right"></div> <div data-bind="dxButton: nextButton" class="dxrd-wizard-btn right"></div> <div data-bind="dxButton: previousButton" class="dxrd-wizard-btn right"></div> </div> </div> </div> </div> <!-- /ko -->',
    'dx-wizard-fullscreen-page': '<!-- ko if: $data._sections.length > 0 --> <div style="position:absolute;" data-bind="foreach: _sections, css: _className, styleunit: { top: _parentMarginOffset, left: _parentMarginOffset, right: _parentMarginOffset, bottom: _parentMarginOffset }"> <div class="dx-border-inheritor dxd-border-accented"> <div class="dxrd-report-page-tile dxd-border-secondary" data-bind="css: { \'dxrd-disabled\': !$data.page() }, style: $parent._pageCss[$data.pageId]"> <div class="dxrd-report-page-tile-title" data-bind="visible: $parent._showPageDescription(), text: $parent._getPageDescription($index(), $data), attr: { title: $parent._getPageDescription($index(), $data) }"></div> <!-- ko if: $data.page() !== null --> <!-- ko with: page --> <div class="dxrd-report-page-tile-content" data-bind="template: { name: $parent.metadata.template, data: page }, dxScrollView: { showScrollbar: \'onHover\'}"></div> <!-- /ko --> <!-- /ko --> <!-- ko if: $data.page() === null --> <div class="dxrd-report-page-tile-content dx-default-border-style dxd-border-secondary"> <div class="dxrd-wizard-page dxrd-wizard-disabled-content" data-bind="text: metadata.disabledText"></div> </div> <!-- /ko --> </div> </div> </div> <!-- /ko -->',
    'dxrd-jsondatasource-fields-page': '<div class="dxrd-wizard-page dx-jsonschema-page dx-frameless-style"> <div class="dx-default-border-style dxd-border-secondary dxrd-wizard-dataMember dx-fieldset" style="height:100%"> <div class="dx-field"> <div class="dx-field-label" data-bind="text: _rootElementTitle"></div> <div class="dx-field-value" data-bind="dxSelectBox: { dataSource: _rootElementList, value: _selectedRootElement, displayExpr: \'fullPath\', displayCustomValue: true, useItemTextAsTitle: true, dropDownOptions: { container: $root.getPopupContainer($element) } }"></div> </div> <div class="dxrd-wizard-add-queries-page dxrd-wizard-page-treelist-accordion-style dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\' }"> <div data-bind="treelist: _fieldListModel" style="width:100%; height: 100%;"></div> </div> </div> </div>',
    'dxrd-page-jsonsource': '<div class="dxrd-wizard-page dx-jsonsource-page dx-frameless-style"> <div class="dx-default-border-style dxd-border-secondary dxrd-wizard-dataMember dx-fieldset" style="height: 100%" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }, dxValidationGroup: $data._validationGroup || {}"> <div class="dx-field"> <div class="dx-property-required dx-field-label" data-bind="text: _jsonConnectionTitle, attr: { \'title\': _jsonConnectionTitle }"></div> <div class="dx-field-value" data-bind="dxTextBox: { value: _connectionName }, dxValidator: { validationRules: $data._connectionNameValidationRules || [] }"></div> </div> <div class="dx-field"> <div class="dx-field-label" data-bind="text: _jsonSourceTitle, attr: { \'title\': _jsonSourceTitle }"></div> <div class="dx-field-value" data-bind="dxLocalizedSelectBox: { dataSource: _sources, value: _selectedSource, valueExpr:\'value\', displayExpr: \'displayValue\', displayCustomValue: true, dropDownOptions: { container: $root.getPopupContainer($element) } }"></div> </div> <!-- ko with: _selectedSource --> <div data-bind="dxValidationGroup: $data.validationGroup || {}"> <div data-bind="css: $data.cssClass"> <!-- ko template: { name: \'dx-propertieseditor\', data: grid } --> <!-- /ko --> </div> <div class="dxrd-wizard-validationsummary" data-bind="dxValidationSummary: $data.validationSummary || {}, visible: $data.validationSummary && !isValid()"></div> </div> <!-- /ko --> <div class="dxrd-wizard-validationsummary" data-bind="dxValidationSummary: $data._validationSummary || {}, visible: $data._validationSummary && _selectedSource().validationSummary && !canNext()"></div> </div> </div>',
    'dx-property-json-string-editor': '<div class="dx-field" data-bind="visible: visible"> <!-- ko template: templateName --> <!-- /ko --> </div>',
    'dxrd-page-dataSource': '<div class="dxrd-wizard-page"> <!-- ko if: isDataSourceCreationAvailable --> <div class="dxrd-wizard-datasourceoperation dxrd-radio-nowrap-ellipsis" style="margin-bottom: 15px" data-bind="dxRadioGroup: { value: selectedDataSourceOperation, items: dataSourceOperations, layout: \'vertical\' }"> <div data-options="dxTemplate : { name: \'item\' }"> <div class="dxrd-radio-nowrap-ellipsis-text" data-bind="text: text, attr: { \'title\': text }"></div> </div> </div> <!-- /ko --> <div class="dxrd-wizard-availabledatasources dx-default-border-style dxd-border-secondary"> <div class="dxrd-wizard-list" data-bind="dxList: { dataSource: availableDataSources, selectedItems: selectedDataSource, focusStateEnabled:false, editEnabled: true, height: dataSourcesListHeight, editConfig: { selectionEnabled: false }, selectionMode: \'single\', activeStateEnabled: false, disabled: createNewDataSource, noDataText: $root.dx._static.noDataText() }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: name"></div> </div> </div> </div></div>',
    'dxrd-page-selectitems': '<div class="dxrd-wizard-page"> <!-- ko template: { name: \'dxrd-page-selectitems-radio-group\', data: $data } --> <!-- /ko --> <!-- ko template: { name: \'dxrd-page-selectitems-list\', data: $data } --> <!-- /ko --> </div>',
    'dxrd-page-selectitems-radio-group': '<!-- ko if: canCreateNew --> <div class="dxrd-wizard-datasourceoperation dxrd-radio-nowrap-ellipsis" style="margin-bottom: 15px" data-bind="dxRadioGroup: { value: selectedOperation, items: operations, layout: \'vertical\' }"> <div data-options="dxTemplate : { name: \'item\' }"> <div class="dxrd-radio-nowrap-ellipsis-text" data-bind="text: text, attr: { \'title\': text }"></div> </div> </div> <!-- /ko -->',
    'dxrd-page-selectitems-list': '<div class="dxrd-wizard-availabledatasources dx-default-border-style dxd-border-secondary" data-bind="styleunit: { top: $data.canCreateNew() ? 65 : 0 }"> <div class="dxrd-wizard-list dxd-border-primary" data-bind="dxList: { dataSource: items, onSelectionChanged: function(e) { selectedItems(e.addedItems) }, selectedItems: selectedItems.peek(), hoverStateEnabled:false, editEnabled: true, height: \'100%\', editConfig: { selectionEnabled: false }, searchExpr: \'name\', searchEnabled: true, selectionMode: \'single\', activeStateEnabled: false, disabled: _createNew, noDataText: $root.dx._static.noDataText(), searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }"> <div data-options="dxTemplate : { name: \'item\' }" data-bind="event: { dblclick: function(e){ $parent.onDblClick() } }"> <div data-bind="text: $parent._displayExpr($data)"></div> </div> </div> </div>',
    'dxrd-page-specify-connection': '<div class="dxrd-wizard-page"> <!-- ko template: { name: \'dxrd-page-selectitems-radio-group\', data: $data } --> <!-- /ko --> <!-- ko if: !_createNew() --> <!-- ko template: { name: \'dxrd-page-selectitems-list\', data: $data } --> <!-- /ko --> <!-- /ko --> <!-- ko if: _createNew --> <div style="position:relative; top: 65px; height: calc(100% - 65px)"> <!-- ko template: { name: \'dxrd-page-jsonsource\', data: _specifySourceData } --> <!-- /ko --> </div> <!-- /ko --></div>',
    'dx-jsonwizard-parametercollection': '<div class="dx-field"> <!-- ko with: value --> <div class="dx-jsonwizard-parameter-left-container"> <div class="dx-jsonwizard-parameter"> <div data-bind="dxLocalizedSelectBox: { dataSource: _parameterTypes, value: itemType, valueExpr:\'value\', displayExpr: \'displayValue\', displayCustomValue: true, dropDownOptions: { container: $root.getPopupContainer($element) } }"></div> </div> </div> <div class="dx-jsonwizard-parameter-middle-container"> <div data-bind="dxTextBox: { value: name, placeholder: $data.namePlaceholder() }, dxValidator: { validationRules: $parent.editor.editorOptions.nameValidationRules || [] }"></div> </div> <div class="dx-jsonwizard-parameter-right-container"> <div class="dx-jsonwizard-parameter"> <div data-bind="dxTextBox: { value: _editingValue, placeholder: $data.valuePlaceholder() }, visible: !$data.isExpression()"></div> <div data-bind="dxExpressionEditor: { options: _expression, fieldListProvider: $parent.editor.editorOptions.itemsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() }, visible: $data.isExpression"></div> </div> </div> <!-- ko template: { name: \'dx-wizard-menu-box-editorswitch\', data: $data } --> <!-- /ko  --> <!-- /ko --> </div>',
    'dx-jsonwizard-loadfile-editor': '<div data-bind="dxFileImagePicker: { value: value, placeholderId: \'File\', accept:\'.json,.txt\' }"></div>',
    'dx-jsonwizard-jsonstring-editor': '<!-- ko if: !aceAvailable --> <div class="dxrd-jsonwizard-jsonstring-editor dxd-border-secondary dxd-back-primary2" data-bind="dxTextArea: { value: value, spellcheck: false, isValid: isValid }, dxValidator: $data.validator || { validationRules: jsonStringValidationRules || [] }"></div> <!-- /ko --> <!-- ko if: aceAvailable --> <div class="dx-texteditor dx-editor-outlined dxrd-jsonwizard-jsonstring-editor dxd-wizard-jsoneditor dxd-border-secondary dxd-back-primary2" data-bind="dxAceEditor: { value: value, editorContainer: editorContainer, options: aceOptions, additionalOptions: additionalOptions }, css: { \'dx-invalid\' : !value() || !isValid() }"></div> <!-- /ko --> <div class="dxd-upload-file"> <div class="dxd-back-primary2"></div> <div data-bind="dxButtonWithTemplate: { onClick: uploadFile, hint: $data.getUploadTitle(), icon: \'dxrd-svg-wizard-Download\' }"></div> </div>',
    'dxrd-wizard-add-queries-page': '<div class="dxrd-wizard-page dxrd-wizard-add-queries-page dxrd-wizard-page-treelist-accordion-style"> <div data-bind="treeListSearchPanel: {controllers: ko.unwrap(_fieldListModel).treeListController}"></div> <div class="dxrd-wizard-dataMember dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight }"> <div data-bind="treelist: _fieldListModel" style="width:100%; height: 100%;"></div> </div> <!-- ko ifnot: $data.disableCustomSql --> <!-- ko template: { name: \'dxqb-popup-selectStatment\', data: _popupSelectStatement } --> <!-- /ko --> <!-- /ko --> <!-- ko template: { name: \'dxrd-querybuilder-popup\', data: _popupQueryBuilder } --> <!-- /ko --> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel: _loadPanelViewModel($element)"> </div> </div>',
    'dxd-custom-query-treelisitem': '<div data-bind="visible: visible"> <div class="dx-background-inheritor dxd-back-highlighted dxd-state-selected"> <div class="dx-treelist-item dx-fontsize-reestablished dxd-list-item-back-color" data-bind=" styleunit: padding, css: { \'dx-treelist-item-selected dxd-state-selected dxd-back-secondary\': isSelected }"> <div class="dx-treelist-collapsedbutton" data-bind="css: nodeImageClass"></div> <div class="dx-treelist-caption"> <!-- ko if: actions && actions.length > 0 --> <div class="dx-treelist-action-container" data-bind="visible: isSelected() || isHovered()"> <!-- ko foreach: actions --> <!-- ko if: $data.templateName --> <!-- ko template: templateName  --> <!-- /ko --> <!-- /ko --> <!-- ko if: !$data.templateName --> <div class="dx-treelist-action" data-bind="dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName, disabled: $data.disabled && $data.disabled() }, attr: { title: text }"></div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko  --> <div class="dx-treelist-selectedcontent" data-bind="click: toggleSelected"> <div class="dx-treelist-text-wrapper"> <div class="dx-add-queries-page-checkbox" data-bind="dxCheckBox: { value: data.checked }, click: function(treeNode, e) { treeNode.data.toggleChecked(); e.stopPropagation(); return true; }"></div> <div class="dx-treelist-text dx-treelist-text-with-checkbox"> <div class="dx-queryname-textbox" data-bind="dxTextBox: { value: queryName }"></div> </div> </div> </div> </div> </div> </div> </div>',
    'dxrd-configure-query-parameters-page': '<div class="dxrd-wizard-page dxrd-configure-query-parameters-page dxrd-wizard-page-treelist-accordion-style"> <div class="dxrd-wizard-dataMember dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight }"> <!-- ko if: !!$data._fieldListModel() --> <div data-bind="treelist: _fieldListModel" style="width:100%; height: 100%;"></div> <!-- /ko --> </div> </div>',
    'dxrd-wizard-configure-relations-page': '<div class="dxrd-wizard-page dxrd-wizard-configure-relations-page"> <!-- ko if: $data._relationsEditor() --> <!-- ko template: { name: \'dxrd-masterDetail-editor-complete-wizard\', data: $data._relationsEditor }--> <!-- /ko --> <!-- /ko --> </div>',
    'dxrd-masterDetail-editor-complete-wizard': '<div class="dx-filtereditor dxrd-masterDetail-editor-complete-wizard dxd-border-secondary"> <!-- ko if: $data --> <div class="dx-filtereditor-tree dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', direction: \'both\' }" style="cursor: default"> <!-- ko foreach: masterQueries --> <div class="criteria-operator-group"> <div class="criteria-operator-group-item"> <div class="criteria-operator-text dxd-filter-editor-text-color criteria-operator-item-group dxd-filter-editor-group-back-color stylized" data-bind="text: queryName"></div> <div data-bind="service: { name: \'createRelation\' }"></div> </div> <div class="criteria-operator-content"> <!-- ko template: { name: \'dx-masterDetail-editor-relation\', foreach: relations }--> <!-- /ko --> </div> </div> <!-- /ko --> </div> <div class="dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay" data-bind="dxPopupWithAutoHeight: { width: \'170px\', height: \'235px\', focusStateEnabled: false, position: $root.rtl ? { my: \'right top\', at: \'right bottom\', of: popupService.target, collision: \'flipfit\' } : { my: \'left top\', at: \'left bottom\', of: popupService.target, collision: \'flipfit\' }, wrapperAttr: { class: \'dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay\' }, container: $root.getPopupContainer($element), target: popupService.target, showTitle: false, showCloseButton: false, animation: {}, closeOnOutsideClick: true, shading: false, visible: popupService.visible }"> <!-- ko with: popupService--> <!-- ko with: data --> <!-- ko template: template--> <!-- /ko --> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> </div>',
    'dxqb-popup-selectStatment': '<div data-bind="dxPopup: { animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, wrapperAttr: { class: \'dxqb-preview\' }, visible: isVisible, title: title(), showTitle: true, resizeEnabled: true, shading: true, shadingColor: \'transparent\', fullScreen: false, width: 800, height: 544, container: closest($element, \'.dxrd-wizard\'), position: { of: closest($element, \'.dx-designer-viewport\') }, onHidden: function() { $data.data(null) }, focusStateEnabled: false }"> <div class="dxqb-preview-popup-content"> <div class="dxqb-show-query-string-content dx-widget"> <!-- ko if: !aceAvailable --> <div class="dxrd-show-query-string-editor" data-bind="dxTextArea: { value: data, valueChangeEvent: \'keyup\', disabled: false }"></div> <!-- /ko --> <!-- ko if: aceAvailable --> <div class="dxrd-show-query-string-editor"> <div class="dxrd-show-query-string-editor-content"> <div class="dx-sql_editor dxd-back-primary2" data-bind="dxAceEditor: { value: data, additionalOptions: additionalOptions, options: aceOptions }"></div> </div> </div> <!-- /ko --> </div> </div> <div class="dxqb-preview-popup-buttons dxd-border-secondary"> <div data-bind="dxButton: { text: okButtonText(), onClick: okButtonHandler }" class="dxqb-preview-popup-button"></div> </div> </div>',
    'dxrd-treelist-with-checkbox': '<div data-bind="visible: visible"> <!-- ko if: hasContent --> <!-- ko template: "dx-treelist-accordion-item-with-checkbox" --> <!-- /ko --> <!-- /ko --> <!-- ko ifnot: hasContent --> <!-- ko template: "dx-treelist-header-item-with-checkbox" --> <!-- /ko --> <!-- /ko --> </div>',
    'dx-treelist-accordion-item-with-checkbox': '<div data-bind="dxdAccordionExt: { collapsed: collapsed, lazyContentRendering: true }"> <!-- ko template: "dx-treelist-header-item-with-checkbox" --> <!-- /ko --> <div class="dx-fieldset dx-accordion-content dxd-back-primary"> <!-- ko with: data --> <!-- ko template: { name: contenttemplate } --> <!-- /ko --> <!-- /ko --> </div> </div>',
    'dx-treelist-header-item-with-checkbox': '<div class="dx-background-inheritor dxd-back-highlighted dxd-state-selected"> <div data-bind="event: { dblclick: function() { $data.dblClickHandler ? $data.dblClickHandler($data) : $data.toggleCollapsed() }, mouseenter: mouseenter, mouseleave: mouseleave }, attr: { class: \'dx-treelist-item dx-fontsize-reestablished dxd-list-item-back-color \' + ($data.hasItems ? \'dx-treelist-list-item-content \' : \'dx-treelist-field-item-content \') + ($data.isSelected() ? \'dx-treelist-item-selected dxd-state-selected dxd-back-secondary\' : \'\') }, styleunit: padding"> <!-- ko ifnot: $data.hasItems--> <!-- ko if: $data.showIcon --> <div class="dx-treelist-image" data-bind="css: $data.imageClassName, template: {name: $data.imageTemplateName, if: !!ko.unwrap($data.imageTemplateName)}, attr: { title: text }"> </div> <!-- /ko --> <!-- ko ifnot: $data.showIcon --> <div class="dx-treelist-collapsedbutton" data-bind="css: nodeImageClass"></div> <!-- /ko --> <!-- /ko --> <!-- ko if: $data.hasItems --> <div class="dx-treelist-collapsedbutton" data-bind="css: nodeImageClass, visible: hasItems, template: \'dxrd-svg-collapsed\', click: toggleCollapsed"></div> <!-- /ko --> <div class="dx-treelist-caption"> <!-- ko if: actions && actions.length > 0 --> <div class="dx-treelist-action-container" data-bind="visible: isSelected() || isHovered()"> <!-- ko foreach: actions --> <!-- ko if: $data.templateName --> <!-- ko template: templateName  --> <!-- /ko --> <!-- /ko --> <!-- ko if: !$data.templateName --> <div class="dx-treelist-action" data-bind="dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName, disabled: $data.disabled && $data.disabled() }, attr: { title: text }"></div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko  --> <div class="dx-treelist-selectedcontent" data-bind="event: { dblclick: function() { $data.dblClickHandler && $data.dblClickHandler($data); } }, click: toggleSelected,  draggable: isDraggable ? dragDropHandler : null, css: { \'dxrd-disabled\': $data.data.disabled && $data.data.disabled() }"> <div class="dx-treelist-text-wrapper"> <div class="dx-add-queries-page-checkbox" data-bind="dxCheckBox: { value: data.checked }, click: function(treeNode, e) { treeNode.data.toggleChecked(); e.stopPropagation(); return true; }"></div> <!--ko if: treeListController.searchEnabled --> <div class="dx-treelist-text dx-highlighted-search-text dx-treelist-text-with-checkbox" data-bind="searchHighlighting: { text: text, textToSearch: treeListController.textToSearch, searchOptions: treeListController.searchOptions }, attr: { title: text }"></div> <!-- /ko  --> <!--ko ifnot: treeListController.searchEnabled --> <div class="dx-treelist-text dx-treelist-text-with-checkbox" data-bind="text: text, attr: { title: text }"></div> <!-- /ko  --> </div> </div> </div> </div></div>',
    'dx-treelist-action-with-popover': '<div class="dx-treelist-action-with-popover" style="display: inline-block"> <div class="dx-treelist-action" data-bind="dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName , disabled: $data.disabled && $data.disabled() }, attr: { title: text }"></div> <div data-bind="dxPopover: { width: 200, position: !$root.rtl ? \'left\' : \'right\', visible: $parent.data.popoverVisible, target: \'.dx-treelist-action-with-popover\', container: $root.getPopupContainer($element)}"> <div data-bind="dxList: { dataSource: $parent.data.popoverListItems(), onItemClick: $parent.data.itemClickAction }"> <div data-options="dxTemplate : { name: \'item\' }"> <div class="dx-text-content" data-bind="text: name, attr: { title: name }"></div> </div> </div> </div> </div>',
    'dx-treelist-accordion-contenttemplate-custom-with-actions': '<div data-bind="dxPropertyGrid: { target: $parent.data.dataSourceParameter, level: $parent.data.editor.level + 1 }"></div>',
    'dxrd-page-objectdatasource-datamembers': '<div class="dx-objectdatasource-datamembers-page"> <div data-bind="dxList: { dataSource: _chooseObjectDataMember.dataMembers, selectedItems: _chooseObjectDataMember.selectedDataMembers, selectionMode: \'single\', activeStateEnabled: false, focusStateEnabled: false, searchExpr: \'displayName\', searchEnabled: true, noDataText: $dx._static.noDataText(), searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: $data.displayName"></div> </div> </div> </div>',
    'dxrd-page-objectdatasource-types': '<div class="dx-objectdatasource-types-page"> <div class="dxd-border-primary" data-bind="treeListSearchPanel: {controllers: _chooseObjectType.availableTypesTreelistModel.treeListController}"></div> <div data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _chooseObjectType._scrollViewHeight}"> <div data-bind="treelist: _chooseObjectType.availableTypesTreelistModel"></div> <!-- ko if: _chooseObjectType.types && !_chooseObjectType.types().length --> <div class="dxa-no-data-message" data-bind="text: $root.dx._static.noDataText()"></div> <!-- /ko--> </div> </div>',
    'dxrd-page-objectsource': '<div class="dxrd-wizard-page dx-objectsource-page dx-frameless-style" style="position: absolute; top: 45px; left: 45px; right: 45px; bottom: 45px; margin:0"> <!-- ko foreach: _sections--> <div class="dx-border-inheritor dxd-border-accented"> <div class="dxrd-report-page-tile dxd-border-secondary" data-bind="style: position, css: { \'dxrd-disabled\': $data.disabled() }"> <div class="dxrd-report-page-tile-title" data-bind="text: $parent.showDescription($index(), description), attr: { title: $parent.showDescription($index(), description) }"></div> <div class="dxrd-report-page-tile-content dx-default-border-style dxd-border-secondary"> <!-- ko if: !$data.disabled() --> <!-- ko template: { name: template, data: data } --> <!-- /ko --> <!-- /ko --> <!-- ko if: $data.disabled() --> <div class="dxrd-wizard-page dxrd-wizard-disabled-content" data-bind="text: disabledText"></div> <!-- /ko --> </div> </div> </div> <!-- /ko --> </div>',
    'dx-objectdatasource-types-section': '<div class="dx-objectdatasource-types-section"> <div data-bind="treeListSearchPanel: {controllers: availableTypesTreelistModel.treeListController}"></div> <div data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight}"> <div data-bind="treelist: availableTypesTreelistModel"></div> </div> </div>',
    'dx-objectdatasource-datamembers-section': '<div class="dx-objectdatasource-parameters-datamembers-section"> <div class="dxd-border-primary" data-bind="dxList: { dataSource: dataMembers, selectedItems: selectedDataMembers, selectionMode: \'single\', activeStateEnabled: false, focusStateEnabled: false, searchExpr: \'displayName\', searchEnabled: true, noDataText: $root.dx._static.noDataText(), searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: $data.displayName"></div> </div> </div> </div>',
    'dx-objectdatasource-parameters-grid': '<!-- ko if: !!$data --> <div class="dx-field dxd-back-primary"> <div class="dx-field-label" data-bind="text: $data.displayName, attr: { \'title\': $data.displayName}"></div> </div> <div class="dxrd-properties-wrapper"> <!-- ko foreach: _grids --> <!-- ko template: { name: \'dx-propertieseditor\', data: $data }--> <!-- /ko --> <!-- /ko --> </div> <!-- /ko -->',
    'dx-objectdatasource-expression-popup': '<!-- ko if: $data.value() --> <div data-bind="dxExpressionEditor: getOptions({ options: value, fieldListProvider: value().itemsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() })"></div> <!-- /ko -->',
    'dx-objectdatasource-parameters-section': '<div class="dx-objectdatasource-parameters-section"> <div class="dx-fieldset" data-bind="dxScrollView: { showScrollbar: \'onHover\'}"> <!-- ko template: { name: \'dx-objectdatasource-parameters-grid\', data: _ctorParametersObject }--> <!-- /ko --> <!-- ko template: { name: \'dx-objectdatasource-parameters-grid\', data: _dataMemberParametersObject }--> <!-- /ko --> </div> </div>',
    'dx-objectdatasource-configureparameters-page': '<div class="dxrd-report-page-tile-content dx-default-border-style dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\'}"> <!-- ko template: { name: \'dx-objectdatasource-parameters-section\', data: _chooseObjectParameters } --> <!-- /ko  --> </div>',
    'dxrd-page-configure-parameters': '<div class="dxrd-wizard-page"> <div class="dxrd-datasource-parameters" data-bind="dxCollectionEditor: parametersEditorOptions"></div> </div>',
    'dxrd-parameter-collection-item': '<div data-bind="dxdAccordion: { collapsed: collapsed }"> <div class="dxrd-group-header dx-accordion-header dxd-text-primary" style="border-bottom: 0" data-bind="styleunit: { \'marginLeft\' : editor.padding }, css: { \'dxrd-group-header-collapsed dxd-border-primary\': collapsed() }"> <div class="dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !collapsed() }" style="display:inline-block;"></div> <span class="dxrd-group-header-text dxd-text-primary" data-bind="text: value().name"></span> </div> <div class="dx-accordion-content"> <div data-bind="dxPropertyGrid: { target: value, level: editor.level + 1 }"></div> </div> </div>',
    'dxrd-wizard-datasource-parameters': '<div class="dx-fieldset" style="height:100%"> <div class="dx-collectioneditor" style="height:100%"> <div class="dxrd-datasource-parameters-collection"> <div class="dxrd-datasource-parameters-container dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true  }"> <!-- ko if: values().length === 0 --> <div class="dx-collectioneditor-empty dxd-empty-area-placeholder-text-color dxd-text-info"> <span class="dxrd-datasource-parameters-empty-text" data-bind="text: getDisplayTextEmptyArray()"></span> </div> <!-- /ko --> <!-- ko if: values().length !== 0 --> <div class="dx-collectioneditor-items" data-bind="foreach: values"> <div class="dx-background-inheritor dxd-back-highlighted dxd-state-selected" data-bind="with: $parent.createCollectionItemWrapper($parents[1], $index, $element)"> <div class="dx-collectioneditor-item-container dx-fontsize-reestablished dxd-list-item-back-color" data-bind="dxclick: $parents[1].select, css: { \'dxd-state-selected dxd-back-secondary\' : $parents[1].selectedIndex() === $index() }"> <div class="dx-collection-item"></div> </div> </div> </div> <!-- /ko --> </div> </div> <div class="dxrd-collectioneditor-wizard-buttons" data-bind="visible: showButtons"> <div class="dxrd-collectioneditor-action" data-bind="dxButton: { onClick: add, text: getDisplayTextButton(\'add\') }, attr: { title: getDisplayTextButton(\'add\') }"></div> <div class="dxrd-collectioneditor-action" data-bind="dxButton: { onClick: remove, disabled: selectedIndex() === null, text: $parent.removeButtonTitle }, attr: { title: $parent.removeButtonTitle }"></div> </div> </div> </div>',
    'dxrd-page-connectionstring': '<div class="dxrd-wizard-page"> <div class="dx-wizard-connections dx-default-border-style dxd-border-secondary"> <div class="dxrd-wizard-list dxd-border-primary" data-bind="dxList: { dataSource: _connectionStrings, onSelectionChanged: function(e) { _selectedConnectionString(e.addedItems) },  selectedItems: _selectedConnectionString.peek(), focusStateEnabled: false, searchEnabled: true, searchExpr: \'description\', editEnabled: true, editConfig: { selectionEnabled: true }, selectionMode: \'single\', activeStateEnabled: false, noDataText: $root.dx._static.noDataText(), searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: $data[\'description\'] || $data[\'name\']"></div> </div> </div> </div> </div>',
    'dxrd-select-control': '<div class="dxrd-create-query-page-query-header"> <div class="dx-editquery-editor" data-bind="text: caption()"></div> <div class="dxd-hyperlink-color dxd-text-accented" data-bind="visible: !runQueryBuilderDisabled, text: $parent.runQueryBuilderBtnText, click: function() { $parent.runQueryBuilder() }"></div> </div> <!-- ko if: !aceAvailable --> <div class="dxrd-wizard-list dxrd-create-query-page-editor dx-default-border-style dxd-border-secondary dx-editquery-editor" data-bind="dxTextArea: { value: sqlString, valueChangeEvent: \'keyup input blur\', readOnly: disableCustomSql() }"></div> <!-- /ko --> <!-- ko if: aceAvailable --> <div class="dxrd-create-query-page-editor dxrd-create-query-page-editor-border dxd-border-secondary dx-editquery-editor"> <div class="dxrd-create-query-page-editor-content"> <div class="dx-sql_editor dxd-back-primary2" data-bind="dxAceEditor: { value: sqlString, additionalOptions: additionalOptions, options: aceOptions }, css: { \'dx-disabled-ace\': disableCustomSql() }"></div> </div> </div> <!-- /ko -->',
    'dxrd-procedures-control': '<div style="margin-top: 20px" class="dx-editquery-editor" data-bind="text: caption()"></div> <div class="dx-editquery-editor dx-default-border-style dxd-border-secondary"> <div class="dxrd-wizard-list dxrd-create-query-page-editor" data-bind="dxList: { dataSource: storedProcedures, searchEnabled: true, searchExpr: \'name\', onContentReady: scrollActiveItem, selectedItems: selectedProcedure, editEnabled: true, editConfig: { selectionEnabled: true }, selectionMode: \'single\', activeStateEnabled: false, noDataText: $root.dx._static.noDataText() }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: $parent.generateStoredProcedureDisplayName($data)"></div> </div> </div> </div>',
    'dxrd-wizard-create-query-page': '<div class="dxrd-wizard-page dxrd-wizard-create-query-page"> <div class="dxrd-create-query-page-content"> <div data-bind="text: queryNameCaption()"></div> <div class="dx-editquery-editor" data-bind="dxTextBox: { value: queryName, placeholder: $data.placeholder() }"></div> <div class="dxrd-radio-nowrap-ellipsis" data-bind="dxRadioGroup: { value: selectedQueryType, layout: \'horizontal\', items: queryTypeItems }"> <div data-options="dxTemplate : { name: \'item\' }"> <div class="dxrd-radio-nowrap-ellipsis-text" data-bind="text: $parent.localizeQueryType($data), attr: { \'title\': $parent.localizeQueryType($data) }"></div> </div> </div> <!-- ko template: { name: queryControl().template, data: queryControl() } --> <!-- /ko --> </div> <!-- ko template: { name: \'dxrd-querybuilder-popup\', data: popupQueryBuilder } --> <!-- /ko --> </div>',
    'dxrd-querybuilder-popup': '<div data-bind="dxPopup: popupViewModel($element)"> <!-- ko if: qbOptions --> <!-- ko if: isVisible --> <div class="dxrd-querybuilder-popup-content"> <div style="height:100%;" data-bind="dxQueryBuilder: qbOptions"></div> </div> <!-- /ko --> <div class="dxrd-querybuilder-popup-buttons dxd-border-secondary"> <div data-bind="dxButton: { text: getDisplayText(\'previewResults\'), onClick: previewHandler, disabled: okButtonDisabled }" class="dxrd-querybuilder-popup-button-left"></div> <div data-bind="dxButton: { text: getDisplayText(\'cancel\'), onClick: cancelHandler }" class="dxrd-querybuilder-popup-button"></div> <div data-bind="dxButton: { text: getDisplayText(\'ok\'), onClick: okHandler, disabled: okButtonDisabled }" class="dxrd-querybuilder-popup-button"></div> </div> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel:{ animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, deferRendering: false, message: getDisplayText(\'loading\'), visible: showLoadIndicator, shading: true, shadingColor: \'transparent\'}"> </div> <!-- /ko --> </div>',
    'dxrd-querybuilder': '<div class="dx-designer dx-querybuilder" data-bind="template: \'dxrd-designer\'"> </div>',
    'dx-wizard-menu-box-editorswitch': '<div class="dxrd-editormenu-box dxd-property-grid-menu-box-color dxd-back-highlighted" data-bind="css: { \'dxd-state-active\': $data.isExpression() }, dxButtonWithTemplate: { onClick: switchEditors, icon: \'dxrd-svg-wizard-expressions\' }"> </div>',
    'dx-wizard-headerNew': '<div class="dxrd-wizard-header-custom"> <!-- ko with: _currentPage --> <div class="dxrd-span-title" data-bind="text: $data.title || $parent.title"></div> <div class="dxrd-span-description" data-bind="text: description, attr: { title: description }"></div> <!-- /ko --> </div>',
    'dx-wizard-newlayout': '<div class="dxrd-wizard dx-editors dxd-text-primary" data-bind="dxPopup: { visible: isVisible, wrapperAttr: { class: \'dxrd-wizard dx-editors dxd-text-primary\' }, title: isVisible() ? title : \'\', showTitle: true, fullScreen: false, width: width, height: height, container: _container($element), titleTemplate: _titleTemplate, position: _wizardPopupPosition($element) }, cssArray: [ $data._extendCssClass, { \'dx-rtl\': $root.rtl, \'dx-ltr\': !$root.rtl }]"> <div class="dxrd-wizard-content"> <!-- ko with: _currentPage --> <div style="height: 100%" data-bind="template: { name: template, data: page } "></div> <!-- /ko --> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel: _loadPanelViewModel($element)"></div> </div> <div class="dxrd-wizard-navigation"> <div data-bind="dxButton: cancelButton" class="dxrd-wizard-btn left"></div> <div data-bind="dxButton: finishButton" class="dxrd-wizard-btn right"></div> <div data-bind="dxButton: nextButton" class="dxrd-wizard-btn right"></div> <div data-bind="dxButton: previousButton" class="dxrd-wizard-btn right"></div> </div> </div>',
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(28);
__webpack_require__(153);
__webpack_require__(164);
__webpack_require__(91);
__webpack_require__(60);
__webpack_require__(62);
__webpack_require__(94);
__webpack_require__(161);
__webpack_require__(57);
__webpack_require__(163);
__webpack_require__(58);
__webpack_require__(97);
__webpack_require__(93);
__webpack_require__(159);
__webpack_require__(59);
__webpack_require__(162);
__export(__webpack_require__(28));
__export(__webpack_require__(153));
__export(__webpack_require__(164));
__export(__webpack_require__(91));
__export(__webpack_require__(60));
__export(__webpack_require__(62));
__export(__webpack_require__(94));
__export(__webpack_require__(161));
__export(__webpack_require__(57));
__export(__webpack_require__(163));
__export(__webpack_require__(58));
__export(__webpack_require__(97));
__export(__webpack_require__(93));
__export(__webpack_require__(159));
__export(__webpack_require__(59));
__export(__webpack_require__(162));


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(154);
__webpack_require__(26);
__webpack_require__(61);
__webpack_require__(160);
__webpack_require__(46);
__webpack_require__(96);
__webpack_require__(95);
__webpack_require__(92);
__export(__webpack_require__(154));
__export(__webpack_require__(26));
__export(__webpack_require__(61));
__export(__webpack_require__(160));
__export(__webpack_require__(46));
__export(__webpack_require__(96));
__export(__webpack_require__(95));
__export(__webpack_require__(92));


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(165);
__webpack_require__(173);
__webpack_require__(207);
__webpack_require__(166);
__export(__webpack_require__(165));
__export(__webpack_require__(173));
__export(__webpack_require__(166));


/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = DevExpress.localization;

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Localization;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ })
/******/ ]);