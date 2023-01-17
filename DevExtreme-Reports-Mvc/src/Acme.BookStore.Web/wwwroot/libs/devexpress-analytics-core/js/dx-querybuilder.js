/**
* DevExpress Analytics (dist\js\dx-querybuilder.js)
* Version:  22.2.3
* Build date: Dec 6, 2022
* Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = ko;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Internal;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Utils;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets.Internal;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Elements;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Criteria;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Criteria.Utils;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = window["ace"];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets.Filtering;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = DevExpress.config;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = DevExpress.localization;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Localization;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/analytics-diagram.js
var analytics_diagram_namespaceObject = {};
__webpack_require__.r(analytics_diagram_namespaceObject);
__webpack_require__.d(analytics_diagram_namespaceObject, "name", function() { return metadata_name; });
__webpack_require__.d(analytics_diagram_namespaceObject, "text", function() { return metadata_text; });
__webpack_require__.d(analytics_diagram_namespaceObject, "size", function() { return metadata_size; });
__webpack_require__.d(analytics_diagram_namespaceObject, "location", function() { return metadata_location; });
__webpack_require__.d(analytics_diagram_namespaceObject, "sizeLocation", function() { return sizeLocation; });
__webpack_require__.d(analytics_diagram_namespaceObject, "unknownSerializationsInfo", function() { return unknownSerializationsInfo; });
__webpack_require__.d(analytics_diagram_namespaceObject, "ConnectingPointDragHandler", function() { return connectingPointDragHandler_ConnectingPointDragHandler; });
__webpack_require__.d(analytics_diagram_namespaceObject, "ConnectionPointDragHandler", function() { return connectionPointDragHandler_ConnectionPointDragHandler; });
__webpack_require__.d(analytics_diagram_namespaceObject, "DiagramElementBaseViewModel", function() { return diagramElementBaseViewModel_DiagramElementBaseViewModel; });
__webpack_require__.d(analytics_diagram_namespaceObject, "diagramElementSerializationInfo", function() { return diagramElementSerializationInfo; });
__webpack_require__.d(analytics_diagram_namespaceObject, "DiagramElementViewModel", function() { return diagramElementViewModel_DiagramElementViewModel; });
__webpack_require__.d(analytics_diagram_namespaceObject, "DiagramElementBaseSurface", function() { return diagramElementBaseSurface_DiagramElementBaseSurface; });
__webpack_require__.d(analytics_diagram_namespaceObject, "DiagramElementSurface", function() { return diagramElementSurface_DiagramElementSurface; });
__webpack_require__.d(analytics_diagram_namespaceObject, "DiagramViewModel", function() { return diagramModel_DiagramViewModel; });
__webpack_require__.d(analytics_diagram_namespaceObject, "margins", function() { return margins; });
__webpack_require__.d(analytics_diagram_namespaceObject, "pageWidth", function() { return pageWidth; });
__webpack_require__.d(analytics_diagram_namespaceObject, "pageHeight", function() { return pageHeight; });
__webpack_require__.d(analytics_diagram_namespaceObject, "diagramSerializationsInfo", function() { return diagramSerializationsInfo; });
__webpack_require__.d(analytics_diagram_namespaceObject, "DiagramSurface", function() { return diagramSurface_DiagramSurface; });
__webpack_require__.d(analytics_diagram_namespaceObject, "ConnectionPointViewModel", function() { return connectionPointModel_ConnectionPointViewModel; });
__webpack_require__.d(analytics_diagram_namespaceObject, "connectionPointSerializationInfo", function() { return connectionPointSerializationInfo; });
__webpack_require__.d(analytics_diagram_namespaceObject, "ConnectionPointSurface", function() { return connectionPointSurface_ConnectionPointSurface; });
__webpack_require__.d(analytics_diagram_namespaceObject, "ConnectorViewModel", function() { return connectorModel_ConnectorViewModel; });
__webpack_require__.d(analytics_diagram_namespaceObject, "ConnectorSurface", function() { return connectorSurface_ConnectorSurface; });
__webpack_require__.d(analytics_diagram_namespaceObject, "RoutedConnectorViewModel", function() { return routedConnectorModel_RoutedConnectorViewModel; });
__webpack_require__.d(analytics_diagram_namespaceObject, "RoutedConnectorSurface", function() { return routedConnectorSurface_RoutedConnectorSurface; });
__webpack_require__.d(analytics_diagram_namespaceObject, "ConnectingPointViewModel", function() { return connectingPointModel_ConnectingPointViewModel; });
__webpack_require__.d(analytics_diagram_namespaceObject, "connectingPointSerializationInfo", function() { return connectingPointSerializationInfo; });
__webpack_require__.d(analytics_diagram_namespaceObject, "ConnectingPointSurface", function() { return connectingPointSurface_ConnectingPointSurface; });
__webpack_require__.d(analytics_diagram_namespaceObject, "diagramControlsFactory", function() { return diagramControlsFactory; });
__webpack_require__.d(analytics_diagram_namespaceObject, "registerControls", function() { return registerControls; });
__webpack_require__.d(analytics_diagram_namespaceObject, "groups", function() { return initializer_groups; });
__webpack_require__.d(analytics_diagram_namespaceObject, "createDiagramDesigner", function() { return createDiagramDesigner; });
__webpack_require__.d(analytics_diagram_namespaceObject, "PointSide", function() { return PointSide; });
__webpack_require__.d(analytics_diagram_namespaceObject, "GRID_SIZE", function() { return GRID_SIZE; });
__webpack_require__.d(analytics_diagram_namespaceObject, "determineConnectingPoints", function() { return determineConnectingPoints; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/analytics-data.js
var analytics_data_namespaceObject = {};
__webpack_require__.r(analytics_data_namespaceObject);
__webpack_require__.d(analytics_data_namespaceObject, "DBSchemaProvider", function() { return dbSchemaProvider_DBSchemaProvider; });
__webpack_require__.d(analytics_data_namespaceObject, "DBStoredProcedure", function() { return dbStoredProcedure_DBStoredProcedure; });
__webpack_require__.d(analytics_data_namespaceObject, "DBStoredProcedureArgumentDirection", function() { return DBStoredProcedureArgumentDirection; });
__webpack_require__.d(analytics_data_namespaceObject, "DBStoredProcedureArgument", function() { return DBStoredProcedureArgument; });
__webpack_require__.d(analytics_data_namespaceObject, "DBTable", function() { return dbTable_DBTable; });
__webpack_require__.d(analytics_data_namespaceObject, "ResultSet", function() { return resultSet_ResultSet; });
__webpack_require__.d(analytics_data_namespaceObject, "ResultTable", function() { return resultTable_ResultTable; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonNodeType", function() { return JsonNodeType; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonNode", function() { return jsonSchemaNode_JsonNode; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonSchemaNode", function() { return jsonSchemaNode_JsonSchemaNode; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonSchemaRootNode", function() { return jsonSchemaNode_JsonSchemaRootNode; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonAuthenticationInfo", function() { return jsonAuthenticationInfo_JsonAuthenticationInfo; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonParameterType", function() { return JsonParameterType; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonParameter", function() { return jsonParameter_JsonParameter; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonSource", function() { return jsonSource_JsonSource; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonDataSource", function() { return jsonDataSource_JsonDataSource; });
__webpack_require__.d(analytics_data_namespaceObject, "JsonSchemaProvider", function() { return jsonSchemaProvider_JsonSchemaProvider; });
__webpack_require__.d(analytics_data_namespaceObject, "ConnectionOptions", function() { return connectionOptions_ConnectionOptions; });
__webpack_require__.d(analytics_data_namespaceObject, "CustomSqlQuery", function() { return customSqlQuery_CustomSqlQuery; });
__webpack_require__.d(analytics_data_namespaceObject, "MasterDetailRelation", function() { return masterDetailRelation_MasterDetailRelation; });
__webpack_require__.d(analytics_data_namespaceObject, "SqlDataConnection", function() { return sqlDataConnection_SqlDataConnection; });
__webpack_require__.d(analytics_data_namespaceObject, "SqlDataSource", function() { return sqlDataSource_SqlDataSource; });
__webpack_require__.d(analytics_data_namespaceObject, "StoredProcQuery", function() { return storedProcQuery_StoredProcQuery; });
__webpack_require__.d(analytics_data_namespaceObject, "TableQuery", function() { return tableQuery_TableQuery; });
__webpack_require__.d(analytics_data_namespaceObject, "DataSourceParameter", function() { return dataSourceParameter_DataSourceParameter; });
__webpack_require__.d(analytics_data_namespaceObject, "DBColumnType", function() { return DBColumnType; });
__webpack_require__.d(analytics_data_namespaceObject, "DBColumn", function() { return DBColumn; });
__webpack_require__.d(analytics_data_namespaceObject, "DBForeignKey", function() { return DBForeignKey; });
__webpack_require__.d(analytics_data_namespaceObject, "DBSchema", function() { return dbSchema_DBSchema; });
__webpack_require__.d(analytics_data_namespaceObject, "ObjectDataSource", function() { return objectDataSource_ObjectDataSource; });
__webpack_require__.d(analytics_data_namespaceObject, "ObjectDataMemberBase", function() { return ObjectDataMemberBase; });
__webpack_require__.d(analytics_data_namespaceObject, "ObjectParameter", function() { return ObjectParameter; });
__webpack_require__.d(analytics_data_namespaceObject, "ObjectDataSourceMethodBase", function() { return objectSchema_ObjectDataSourceMethodBase; });
__webpack_require__.d(analytics_data_namespaceObject, "ObjectDataMember", function() { return objectSchema_ObjectDataMember; });
__webpack_require__.d(analytics_data_namespaceObject, "ObjectCtor", function() { return ObjectCtor; });
__webpack_require__.d(analytics_data_namespaceObject, "ObjectType", function() { return objectSchema_ObjectType; });
__webpack_require__.d(analytics_data_namespaceObject, "sourceQuerySerializationsInfo", function() { return sourceQuerySerializationsInfo; });
__webpack_require__.d(analytics_data_namespaceObject, "SourceQuery", function() { return sourceQuery_SourceQuery; });
__webpack_require__.d(analytics_data_namespaceObject, "selectQuerySerializationsInfo", function() { return selectQuerySerializationsInfo; });
__webpack_require__.d(analytics_data_namespaceObject, "SelectQuery", function() { return selectQuery_SelectQuery; });
__webpack_require__.d(analytics_data_namespaceObject, "subNodeSerializationInfo", function() { return subNodeSerializationInfo; });
__webpack_require__.d(analytics_data_namespaceObject, "SubNode", function() { return subNode_SubNode; });
__webpack_require__.d(analytics_data_namespaceObject, "transformQuerySerializationsInfo", function() { return transformQuerySerializationsInfo; });
__webpack_require__.d(analytics_data_namespaceObject, "transformationRuleSerializationsInfo", function() { return transformationRuleSerializationsInfo; });
__webpack_require__.d(analytics_data_namespaceObject, "TransformQuery", function() { return transformQuery_TransformQuery; });
__webpack_require__.d(analytics_data_namespaceObject, "FederationTransformationRule", function() { return transformQuery_FederationTransformationRule; });
__webpack_require__.d(analytics_data_namespaceObject, "FederationDataSource", function() { return federationDataSource_FederationDataSource; });
__webpack_require__.d(analytics_data_namespaceObject, "FederationSource", function() { return federationSource_FederationSource; });
__webpack_require__.d(analytics_data_namespaceObject, "FederationMasterDetailRelation", function() { return federationMasterDetailRelation_FederationMasterDetailRelation; });
__webpack_require__.d(analytics_data_namespaceObject, "SerializableDataFederationDataSource", function() { return federationSerializableModel_SerializableDataFederationDataSource; });
__webpack_require__.d(analytics_data_namespaceObject, "FederatedQueriesContainer", function() { return federatedQueriesContainer_FederatedQueriesContainer; });
__webpack_require__.d(analytics_data_namespaceObject, "expressionSerializationInfo", function() { return expressionSerializationInfo; });
__webpack_require__.d(analytics_data_namespaceObject, "FederatedQueryExpressionType", function() { return FederatedQueryExpressionType; });
__webpack_require__.d(analytics_data_namespaceObject, "FederatedQueryExpression", function() { return federatedQueryExpression_FederatedQueryExpression; });
__webpack_require__.d(analytics_data_namespaceObject, "unionQuerySerializationsInfo", function() { return unionQuerySerializationsInfo; });
__webpack_require__.d(analytics_data_namespaceObject, "UnionTypes", function() { return UnionTypes; });
__webpack_require__.d(analytics_data_namespaceObject, "UnionQuery", function() { return unionQuery_UnionQuery; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/analytics-data-internal.js
var analytics_data_internal_namespaceObject = {};
__webpack_require__.r(analytics_data_internal_namespaceObject);
__webpack_require__.d(analytics_data_internal_namespaceObject, "getDBSchemaCallback", function() { return getDBSchemaCallback; });
__webpack_require__.d(analytics_data_internal_namespaceObject, "getDBStoredProceduresCallback", function() { return getDBStoredProceduresCallback; });
__webpack_require__.d(analytics_data_internal_namespaceObject, "DBSchemaFederationDataSourceProvider", function() { return _dbSchemaFederationDataSourceProvider_DBSchemaFederationDataSourceProvider; });
__webpack_require__.d(analytics_data_internal_namespaceObject, "generateQueryUniqueName", function() { return generateQueryUniqueName; });
__webpack_require__.d(analytics_data_internal_namespaceObject, "getJsonSchemaCallback", function() { return getJsonSchemaCallback; });
__webpack_require__.d(analytics_data_internal_namespaceObject, "_setGetJsonSchemaCallback", function() { return _setGetJsonSchemaCallback; });
__webpack_require__.d(analytics_data_internal_namespaceObject, "_resetGetJsonSchemaCallback", function() { return _resetGetJsonSchemaCallback; });
__webpack_require__.d(analytics_data_internal_namespaceObject, "deserializeToCollection", function() { return deserializeToCollection; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/analytics-data-utils.js
var analytics_data_utils_namespaceObject = {};
__webpack_require__.r(analytics_data_utils_namespaceObject);
__webpack_require__.d(analytics_data_utils_namespaceObject, "SqlQueryType", function() { return SqlQueryType; });
__webpack_require__.d(analytics_data_utils_namespaceObject, "JsonSourceType", function() { return JsonSourceType; });
__webpack_require__.d(analytics_data_utils_namespaceObject, "FederationQueryType", function() { return FederationQueryType; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/analytics-data-metadata.js
var analytics_data_metadata_namespaceObject = {};
__webpack_require__.r(analytics_data_metadata_namespaceObject);
__webpack_require__.d(analytics_data_metadata_namespaceObject, "customQuerySerializationsInfo", function() { return customQuerySerializationsInfo; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "masterDetailRelationSerializationsInfo", function() { return masterDetailRelationSerializationsInfo; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "storedProcQuerySerializationsInfo", function() { return storedProcQuerySerializationsInfo; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "tableQuerySerializationsInfo", function() { return tableQuerySerializationsInfo; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "federationDataSourceSerializationInfo", function() { return federationDataSourceSerializationInfo; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "sourceSerializationInfo", function() { return sourceSerializationInfo; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "validateName", function() { return validateName; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "dsParameterNameValidationRules", function() { return dsParameterNameValidationRules; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "parameterValueSerializationsInfo", function() { return parameterValueSerializationsInfo; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "dsParameterSerializationInfo", function() { return dsParameterSerializationInfo; });
__webpack_require__.d(analytics_data_metadata_namespaceObject, "storedProcParameterSerializationsInfo", function() { return storedProcParameterSerializationsInfo; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/analytics-wizard.js
var analytics_wizard_namespaceObject = {};
__webpack_require__.r(analytics_wizard_namespaceObject);
__webpack_require__.d(analytics_wizard_namespaceObject, "DataSourceWizardPageId", function() { return DataSourceWizardPageId; });
__webpack_require__.d(analytics_wizard_namespaceObject, "SqlDataSourceWizardPageId", function() { return SqlDataSourceWizardPageId; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FederationDataSourceWizardPageId", function() { return FederationDataSourceWizardPageId; });
__webpack_require__.d(analytics_wizard_namespaceObject, "JsonDataSourceWizardPageId", function() { return JsonDataSourceWizardPageId; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ObjectDataSourceWizardPageId", function() { return ObjectDataSourceWizardPageId; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FullscreenDataSourceWizardPageId", function() { return FullscreenDataSourceWizardPageId; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FullscreenDataSourceWizardSectionId", function() { return FullscreenDataSourceWizardSectionId; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_restoreSqlDataSourceFromState", function() { return _restoreSqlDataSourceFromState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_setRestoreSqlDataSourceFromState", function() { return _setRestoreSqlDataSourceFromState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_resetRestoreSqlDataSourceFromState", function() { return _resetRestoreSqlDataSourceFromState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_restoreFederationDataSourceFromState", function() { return _restoreFederationDataSourceFromState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_restoreJsonDataSourceFromState", function() { return _restoreJsonDataSourceFromState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_setRestoreJsonDataSourceFromState", function() { return _setRestoreJsonDataSourceFromState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_resetRestoreJsonDataSourceFromState", function() { return _resetRestoreJsonDataSourceFromState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_restoreObjectDataSourceFromState", function() { return _restoreObjectDataSourceFromState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_createDefaultDataSourceWizardState", function() { return _createDefaultDataSourceWizardState; });
__webpack_require__.d(analytics_wizard_namespaceObject, "WizardPageBase", function() { return wizardPageBase_WizardPageBase; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_WrappedWizardPage", function() { return _wrappedWizardPage_WrappedWizardPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "DataSourceType", function() { return DataSourceType; });
__webpack_require__.d(analytics_wizard_namespaceObject, "TypeItem", function() { return chooseDataSourceTypePage_TypeItem; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseDataSourceTypePage", function() { return chooseDataSourceTypePage_ChooseDataSourceTypePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerChooseDataSourceTypePage", function() { return _registerChooseDataSourceTypePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseSqlConnectionPage", function() { return chooseSqlConnectionPage_ChooseSqlConnectionPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerChooseSqlConnectionPage", function() { return _registerChooseSqlConnectionPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ConfigureObjectDataSourceParametersPage", function() { return configureObjectDataSourceParametersPage_ConfigureObjectDataSourceParametersPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerConfigureObjectDataSourceParametersPage", function() { return _registerConfigureObjectDataSourceParametersPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseObjectDataSourceTypesPage", function() { return chooseObjectDataSourceTypesPage_ChooseObjectDataSourceTypesPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerChooseObjectDataSourceTypesPage", function() { return _registerChooseObjectDataSourceTypesPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseObjectDataSourceDataMembersPage", function() { return chooseObjectDataSourceDataMembersPage_ChooseObjectDataSourceDataMembersPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerChooseObjectDataSourceDataMembersPage", function() { return _registerChooseObjectDataSourceDataMembersPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseAvailableItemPage", function() { return chooseAvailablePage_ChooseAvailableItemPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseAvailableDataSourcePage", function() { return chooseAvailableDataSourcePage_ChooseAvailableDataSourcePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerChooseAvailableDataSourcePage", function() { return _registerChooseAvailableDataSourcePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseJsonConnectionPage", function() { return chooseJsonConnectionPage_ChooseJsonConnectionPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerChooseJsonConnectionPage", function() { return _registerChooseJsonConnectionPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "SpecifyJsonConnectionPage", function() { return specifyJsonConnectionPage_SpecifyJsonConnectionPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerSpecifyJsonConnectionPage", function() { return _registerSpecifyJsonConnectionPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseJsonSourcePage", function() { return chooseJsonSourcePage_ChooseJsonSourcePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerChooseJsonSourcePage", function() { return _registerChooseJsonSourcePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ChooseJsonSchemaPage", function() { return chooseJsonSchemaPage_ChooseJsonSchemaPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerChooseJsonSchemaPage", function() { return _registerChooseJsonSchemaPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_SqlDataSourceWrapper", function() { return _sqlDataSourceWrapper_SqlDataSourceWrapper; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ConfigureQueryPage", function() { return configureQueryPage_ConfigureQueryPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerConfigureQueryPage", function() { return _registerConfigureQueryPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ConfigureQueryParametersPage", function() { return configureParametersPage_ConfigureQueryParametersPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerConfigureParametersPage", function() { return _registerConfigureParametersPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "MultiQueryConfigurePage", function() { return multiQueryConfigurePage_MultiQueryConfigurePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerMultiQueryConfigurePage", function() { return _registerMultiQueryConfigurePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_canEditQueryParameters", function() { return _canEditQueryParameters; });
__webpack_require__.d(analytics_wizard_namespaceObject, "MultiQueryConfigureParametersPage", function() { return multiQueryConfigureParametersPage_MultiQueryConfigureParametersPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerMultiQueryConfigureParametersPage", function() { return _registerMultiQueryConfigureParametersPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "MasterDetailRelationshipsPageBase", function() { return masterDetailRelationshipsPageBase_MasterDetailRelationshipsPageBase; });
__webpack_require__.d(analytics_wizard_namespaceObject, "ConfigureMasterDetailRelationshipsPage", function() { return configureMasterDetailRelationshipsPage_ConfigureMasterDetailRelationshipsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerConfigureMasterDetailRelationshipsPage", function() { return _registerConfigureMasterDetailRelationshipsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FederatedQueryConfigurePage", function() { return federatedQueryConfigurePage_FederatedQueryConfigurePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerFederatedQueryConfigurePage", function() { return _registerFederatedQueryConfigurePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FederatedMasterDetailRelationshipsPage", function() { return federatedMasterDetailRelationshipsPage_FederatedMasterDetailRelationshipsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerFederatedMasterDetailRelationshipsPage", function() { return _registerFederatedMasterDetailRelationshipsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "PageFactory", function() { return PageFactory; });
__webpack_require__.d(analytics_wizard_namespaceObject, "StateManager", function() { return stateManager_StateManager; });
__webpack_require__.d(analytics_wizard_namespaceObject, "PageIterator", function() { return pageIterator_PageIterator; });
__webpack_require__.d(analytics_wizard_namespaceObject, "__loadingStateFunctionName", function() { return __loadingStateFunctionName; });
__webpack_require__.d(analytics_wizard_namespaceObject, "__nextActionFunctionName", function() { return __nextActionFunctionName; });
__webpack_require__.d(analytics_wizard_namespaceObject, "BaseWizard", function() { return wizard_BaseWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "PopupWizard", function() { return popupWizard_PopupWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_DataSourceWizardOptionsBase", function() { return dataSourceWizard_DataSourceWizardOptionsBase; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_DataSourceWizardOptions", function() { return _DataSourceWizardOptions; });
__webpack_require__.d(analytics_wizard_namespaceObject, "DataSourceWizardSettings", function() { return DataSourceWizardSettings; });
__webpack_require__.d(analytics_wizard_namespaceObject, "DataSourceWizardPageIterator", function() { return dataSourceWizard_DataSourceWizardPageIterator; });
__webpack_require__.d(analytics_wizard_namespaceObject, "DataSourceWizard", function() { return dataSourceWizard_DataSourceWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerDataSourceWizardPages", function() { return _registerDataSourceWizardPages; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_createDataSourceWizard", function() { return _createDataSourceWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_MultiQueryDataSourceWizardOptions", function() { return multiQueryDataSourceWizard_MultiQueryDataSourceWizardOptions; });
__webpack_require__.d(analytics_wizard_namespaceObject, "MultiQueryDataSourceWizard", function() { return multiQueryDataSourceWizard_MultiQueryDataSourceWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "MultiQueryDataSourceWizardPageIterator", function() { return multiQueryDataSourceWizard_MultiQueryDataSourceWizardPageIterator; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerMultiQueryDataSourcePages", function() { return _registerMultiQueryDataSourcePages; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_createMultiQueryDataSourceWizard", function() { return _createMultiQueryDataSourceWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FullscreenWizardPageFactory", function() { return fullscreenWizardPageFactory_FullscreenWizardPageFactory; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FullscreenWizardPage", function() { return fullscreenWizardPage_FullscreenWizardPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "SelectDataSourcePage", function() { return selectDataSourcePage_SelectDataSourcePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerSelectDataSourcePage", function() { return _registerSelectDataSourcePage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "SpecifyJsonDataSourceSettingsPage", function() { return specifyJsonDataSourceSettingsPage_SpecifyJsonDataSourceSettingsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerSpecifyJsonDataSourceSettingsPage", function() { return _registerSpecifyJsonDataSourceSettingsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "SpecifySqlDataSourceSettingsPage", function() { return specifySqlDataSourceSettingsPage_SpecifySqlDataSourceSettingsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerSpecifySqlDataSourceSettingsPage", function() { return _registerSpecifySqlDataSourceSettingsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "SpecifyFederationDataSourceSettingsPage", function() { return specifyFederationDataSourceSettingsPage_SpecifyFederationDataSourceSettingsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerSpecifyFederationDataSourceSettingsPage", function() { return _registerSpecifyFederationDataSourceSettingsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FullscreenWizard", function() { return fullscreenWizard_FullscreenWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "WizardNavigationPanel", function() { return fullscreenWizardNavigation_WizardNavigationPanel; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FullscreenDataSourceWizard", function() { return fullscreenMultiQueryDataSourceWizard_FullscreenDataSourceWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "FullscreenDataSourceWizardPageIterator", function() { return fullscreenMultiQueryDataSourceWizard_FullscreenDataSourceWizardPageIterator; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_createDataSourceFullscreenWizard", function() { return _createDataSourceFullscreenWizard; });
__webpack_require__.d(analytics_wizard_namespaceObject, "parameterTypeToPropertyMap", function() { return parameterTypeToPropertyMap; });
__webpack_require__.d(analytics_wizard_namespaceObject, "SpecifyObjectDataSourceSettingsPage", function() { return specifyObjectDataSourceSettingsPage_SpecifyObjectDataSourceSettingsPage; });
__webpack_require__.d(analytics_wizard_namespaceObject, "_registerSpecifyObjectDataSourceSettingsPage", function() { return _registerSpecifyObjectDataSourceSettingsPage; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/analytics-wizard-internal.js
var analytics_wizard_internal_namespaceObject = {};
__webpack_require__.r(analytics_wizard_internal_namespaceObject);
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "WrappedWizardPageSection", function() { return _wrappedWizardPageSection_WrappedWizardPageSection; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "WizardPageSection", function() { return _wizardPageSectionIterator_WizardPageSection; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "WizardPageSectionIterator", function() { return _wizardPageSectionIterator_WizardPageSectionIterator; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "WizardPageSectionFactory", function() { return _wizardPageSectionFactory_WizardPageSectionFactory; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "WizardPageProcessor", function() { return _wizardPageProcessor_WizardPageProcessor; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "getLocalizedValidationErrorMessage", function() { return getLocalizedValidationErrorMessage; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "JsonStringEditor", function() { return _jsonDataSourceWidgets_JsonStringEditor; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "JsonDataSourceJsonSourcePageSettingsBase", function() { return _jsonSourceSettings_JsonDataSourceJsonSourcePageSettingsBase; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "JsonDataSourceJsonSourcePageStringSettings", function() { return _jsonSourceSettings_JsonDataSourceJsonSourcePageStringSettings; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "JsonDataSourceJsonSourcePageUriSettings", function() { return _jsonSourceSettings_JsonDataSourceJsonSourcePageUriSettings; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "WizardSectionPosition", function() { return WizardSectionPosition; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "CustomQueryTreeListItem", function() { return _utils_CustomQueryTreeListItem; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "MultiQueryTreeListItemFactory", function() { return _utils_MultiQueryTreeListItemFactory; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "getSectionStyle", function() { return getSectionStyle; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "subscribeArray", function() { return subscribeArray; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "subscribeProperties", function() { return subscribeProperties; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "subscribeObject", function() { return subscribeObject; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "_createBeforeInitializePageEventArgs", function() { return _createBeforeInitializePageEventArgs; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "_createPageEventArgs", function() { return _createPageEventArgs; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "_isMoreThanOneDataSourceTypeAvailable", function() { return _isMoreThanOneDataSourceTypeAvailable; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ParametersTreeListItemBase", function() { return _configureParametersUtils_ParametersTreeListItemBase; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ParametersTreeListItem", function() { return ParametersTreeListItem; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ParametersTreeListRootItemBase", function() { return _configureParametersUtils_ParametersTreeListRootItemBase; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ParametersTreeListRootItem", function() { return ParametersTreeListRootItem; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ParametersTreeListController", function() { return _configureParametersUtils_ParametersTreeListController; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "DBSchemaItemsProvider", function() { return _dbSchemaItemsProvider_DBSchemaItemsProvider; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "DBSchemaTreeListController", function() { return _dbSchemaTreeListController_DBSchemaTreeListController; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FederationTreeNodeProvider", function() { return _federationTreeNodeProvider_FederationTreeNodeProvider; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FederatedQueriesTreeNode", function() { return _federatedQueriesTreeNode_FederatedQueriesTreeNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FederationDataSourceItemsExtender", function() { return FederationDataSourceItemsExtender; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FederationTablesExpressionFieldListProvider", function() { return _federationTablesExpressionFieldListProvider_FederationTablesExpressionFieldListProvider; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FederationSelectQueryBuilderPopup", function() { return _federationSelectQueryBuilderPopup_FederationSelectQueryBuilderPopup; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FederationUnionQueryBuilderPopup", function() { return _federationUnionQueryBuilderPopup_FederationUnionQueryBuilderPopup; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FederationQueryBuilderPopupBase", function() { return _federationQueryBuilderPopupBase_FederationQueryBuilderPopupBase; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FederationTransformQueryBuilderPopup", function() { return _federationTransformQueryBuilderPopup_FederationTransformQueryBuilderPopup; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "TransformResultSchemaProvider", function() { return _federationTransformResultSchemaProvider_TransformResultSchemaProvider; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "QueryBuilderPopupBase", function() { return _queryBuilderPopup_QueryBuilderPopupBase; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "QueryBuilderPopup", function() { return _queryBuilderPopup_QueryBuilderPopup; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "SelectQuerySqlTextProvider", function() { return _selectQuerySqlTextProvider_SelectQuerySqlTextProvider; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "SelectStatementQueryControl", function() { return _selectStatementQueryControl_SelectStatementQueryControl; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "StoredProceduresQueryControl", function() { return _storedProceduresQueryControl_StoredProceduresQueryControl; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "defaultObjectDataSourceItemSpecifics", function() { return defaultObjectDataSourceItemSpecifics; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "TreeNodeBase", function() { return _treeListNode_TreeNodeBase; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "TreeLeafNode", function() { return TreeLeafNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "TreeNode", function() { return _treeListNode_TreeNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ParameterTreeNode", function() { return _treeListNode_ParameterTreeNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "QueriesTreeNode", function() { return _treeListNode_QueriesTreeNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "TreeQueryNode", function() { return _treeListNode_TreeQueryNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "FieldTreeNode", function() { return _treeListNode_FieldTreeNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "DataMemberTreeNode", function() { return _treeListNode_DataMemberTreeNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "SingleCheckedDataMemberTreeNode", function() { return _treeListNode_SingleCheckedDataMemberTreeNode; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "TreeNodeItemsProvider", function() { return _treeNodeItemsProvider_TreeNodeItemsProvider; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "JsonTreeNodeItemsProvider", function() { return _jsonTreeNodeItemsProvider_JsonTreeNodeItemsProvider; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "WizardAction", function() { return _wizardAction_WizardAction; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ObjectTypeDescriptions", function() { return _objectSchemaProvider_ObjectTypeDescriptions; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "getObjectTypeDescriptionsCallback", function() { return getObjectTypeDescriptionsCallback; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ObjectSchemaProvider", function() { return _objectSchemaProvider_ObjectSchemaProvider; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ChooseObjectTypesTreelistController", function() { return _chooseObjectTypes_ChooseObjectTypesTreelistController; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ChooseObjectTypes", function() { return _chooseObjectTypes_ChooseObjectTypes; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ObjectDataSourceParameterProperty", function() { return _chooseObjectParameters_ObjectDataSourceParameterProperty; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ObjectDataSourceParametersModel", function() { return _chooseObjectParameters_ObjectDataSourceParametersModel; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ChooseObjectMemberParameters", function() { return _chooseObjectParameters_ChooseObjectMemberParameters; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ChooseObjectParameters", function() { return ChooseObjectParameters; });
__webpack_require__.d(analytics_wizard_internal_namespaceObject, "ChooseObjectDataMembers", function() { return _chooseObjectDataMembers_ChooseObjectDataMembers; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/queryBuilder-widgets.js
var queryBuilder_widgets_namespaceObject = {};
__webpack_require__.r(queryBuilder_widgets_namespaceObject);
__webpack_require__.d(queryBuilder_widgets_namespaceObject, "expressionFunctions", function() { return expressionFunctions; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/queryBuilder-widgets-internal.js
var queryBuilder_widgets_internal_namespaceObject = {};
__webpack_require__.r(queryBuilder_widgets_internal_namespaceObject);
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "editorTemplates", function() { return editorTemplates; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "createDefaultSQLAceOptions", function() { return createDefaultSQLAceOptions; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "createDefaultSQLAdditionalOptions", function() { return createDefaultSQLAdditionalOptions; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "createDefaultSQLLanguageHelper", function() { return createDefaultSQLLanguageHelper; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "UndoEditor", function() { return _undoEditor_UndoEditor; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "ManageFederatedQueriesEditor", function() { return _manageFederatedQueriesEditor_ManageFederatedQueriesEditor; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "FederatedQueriesHelper", function() { return _federatedQueriesHelper_FederatedQueriesHelper; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "RightPanelSwitcher", function() { return _rightPanelSwitcher_RightPanelSwitcher; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "GroupFilterEditorSerializer", function() { return _groupFilterEditorSerializer_GroupFilterEditorSerializer; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "OperandParameterQBSurface", function() { return _operandParameterQBSurface_OperandParameterQBSurface; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "OperandPropertyQBSurface", function() { return _operandPropertyQBSurface_OperandPropertyQBSurface; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "isAggregatedExpression", function() { return isAggregatedExpression; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "QueryBuilderObjectsProvider", function() { return _queryBuilderObjectsProvider_QueryBuilderObjectsProvider; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "QBFilterEditorHelper", function() { return _qbFilterEditorHelper_QBFilterEditorHelper; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "QBFilterEditorHelperDefault", function() { return QBFilterEditorHelperDefault; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "_setQBFilterEditorHelperDefault", function() { return _setQBFilterEditorHelperDefault; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "QBFilterStringOptions", function() { return _qbFilterStringOptions_QBFilterStringOptions; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "KeyColumnSurface", function() { return _keyColumnSurface_KeyColumnSurface; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "MasterDetailEditor", function() { return _masterDetailEditor_MasterDetailEditor; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "MasterDetailEditorPopupManager", function() { return MasterDetailEditorPopupManager; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "MasterDetailRelationSurface", function() { return _masterDetailRelationSurface_MasterDetailRelationSurface; });
__webpack_require__.d(queryBuilder_widgets_internal_namespaceObject, "MasterQuerySurface", function() { return _masterQuerySurface_MasterQuerySurface; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/queryBuilder-metadata.js
var queryBuilder_metadata_namespaceObject = {};
__webpack_require__.r(queryBuilder_metadata_namespaceObject);
__webpack_require__.d(queryBuilder_metadata_namespaceObject, "name", function() { return query_builder_metadata_name; });
__webpack_require__.d(queryBuilder_metadata_namespaceObject, "alias", function() { return metadata_alias; });
__webpack_require__.d(queryBuilder_metadata_namespaceObject, "text", function() { return query_builder_metadata_text; });
__webpack_require__.d(queryBuilder_metadata_namespaceObject, "selected", function() { return selected; });
__webpack_require__.d(queryBuilder_metadata_namespaceObject, "size", function() { return query_builder_metadata_size; });
__webpack_require__.d(queryBuilder_metadata_namespaceObject, "location", function() { return query_builder_metadata_location; });
__webpack_require__.d(queryBuilder_metadata_namespaceObject, "sizeLocation", function() { return metadata_sizeLocation; });
__webpack_require__.d(queryBuilder_metadata_namespaceObject, "unknownSerializationsInfo", function() { return metadata_unknownSerializationsInfo; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/queryBuilder-utils.js
var queryBuilder_utils_namespaceObject = {};
__webpack_require__.r(queryBuilder_utils_namespaceObject);
__webpack_require__.d(queryBuilder_utils_namespaceObject, "ActionId", function() { return ActionId; });
__webpack_require__.d(queryBuilder_utils_namespaceObject, "HandlerUri", function() { return HandlerUri; });
__webpack_require__.d(queryBuilder_utils_namespaceObject, "controlsFactory", function() { return controlsFactory; });
__webpack_require__.d(queryBuilder_utils_namespaceObject, "RequestWrapper", function() { return requestwrapper_RequestWrapper; });
__webpack_require__.d(queryBuilder_utils_namespaceObject, "SqlQueryType", function() { return SqlQueryType; });
__webpack_require__.d(queryBuilder_utils_namespaceObject, "JsonSourceType", function() { return JsonSourceType; });
__webpack_require__.d(queryBuilder_utils_namespaceObject, "FederationQueryType", function() { return FederationQueryType; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/queryBuilder-internal.js
var queryBuilder_internal_namespaceObject = {};
__webpack_require__.r(queryBuilder_internal_namespaceObject);
__webpack_require__.d(queryBuilder_internal_namespaceObject, "ColumnDragHandler", function() { return _columnDragHandler_ColumnDragHandler; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "DbObjectDragDropHandler", function() { return _dbObjectDragDropHandler_DbObjectDragDropHandler; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "FederationColumnViewModel", function() { return _federationColumnModel_FederationColumnViewModel; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "FederationAllColumnsViewModel", function() { return _federationColumnModel_FederationAllColumnsViewModel; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "federationQuerySerializationsInfo", function() { return federationQuerySerializationsInfo; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "FederationQueryViewModel", function() { return _federationQueryModel_FederationQueryViewModel; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "FederationQuerySurface", function() { return _federationQueryModel_FederationQuerySurface; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "FederationTableViewModel", function() { return _federationQueryModel_FederationTableViewModel; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "FederationTableSurface", function() { return _federationQueryModel_FederationTableSurface; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "ColumnExpressionCollectionHelper", function() { return _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "registerControls", function() { return _controlsFactory_registerControls; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "serializeDataConnection", function() { return serializeDataConnection; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "FederatedUnionQueryBuilderTreeListController", function() { return _federationUnionQueryBuilderTreeListController_FederatedUnionQueryBuilderTreeListController; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "FederatedTransformQueryBuilderTreeListController", function() { return FederatedTransformQueryBuilderTreeListController; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "QueryBuilderTreeListController", function() { return _queryBuilderTreeListController_QueryBuilderTreeListController; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "wrapGetSelectStatement", function() { return wrapGetSelectStatement; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "wrapRebuildResultSchema", function() { return wrapRebuildResultSchema; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "wrapGetFederationdResultSchema", function() { return wrapGetFederationdResultSchema; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "AccordionTabInfo", function() { return _accordionTabInfo_AccordionTabInfo; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "SelectedTabInfo", function() { return _accordionTabInfo_SelectedTabInfo; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "updateQueryBuilderSurfaceContentSize", function() { return updateQueryBuilderSurfaceContentSize; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "createIsLoadingFlag", function() { return createIsLoadingFlag; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "createQueryBuilder", function() { return createQueryBuilder; });
__webpack_require__.d(queryBuilder_internal_namespaceObject, "createQueryBuilderSurface", function() { return createQueryBuilderSurface; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/queryBuilder-elements.js
var queryBuilder_elements_namespaceObject = {};
__webpack_require__.r(queryBuilder_elements_namespaceObject);
__webpack_require__.d(queryBuilder_elements_namespaceObject, "QueryElementBaseViewModel", function() { return queryElementModel_QueryElementBaseViewModel; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "AllColumnsViewModel", function() { return allColumnsModel_AllColumnsViewModel; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "AllColumnsSurface", function() { return allColumnsSurface_AllColumnsSurface; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "ColumnViewModel", function() { return columnModel_ColumnViewModel; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "ColumnExpression", function() { return columnExpression_ColumnExpression; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "ColumnSurface", function() { return columnSurface_ColumnSurface; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "JoinConditionViewModel", function() { return joinConditionModel_JoinConditionViewModel; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "JoinConditionSurface", function() { return joinConditionSurface_JoinConditionSurface; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "ParameterViewModel", function() { return parameterModel_ParameterViewModel; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "QueryElementBaseSurface", function() { return queryElementSurface_QueryElementBaseSurface; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "QueryViewModelBase", function() { return queryModel_QueryViewModelBase; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "QueryViewModel", function() { return queryModel_QueryViewModel; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "QuerySurface", function() { return querySurface_QuerySurface; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "RelationViewModel", function() { return relationModel_RelationViewModel; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "RelationSurface", function() { return relationSurface_RelationSurface; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "TableViewModel", function() { return tableModel_TableViewModel; });
__webpack_require__.d(queryBuilder_elements_namespaceObject, "TableSurface", function() { return tableSurface_TableSurface; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/queryBuilder-elements-metadata.js
var queryBuilder_elements_metadata_namespaceObject = {};
__webpack_require__.r(queryBuilder_elements_metadata_namespaceObject);
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "allColumnsSerializationInfo", function() { return allColumnsSerializationInfo; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "AggregationType", function() { return AggregationType; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "columnSerializationInfo", function() { return columnSerializationInfo; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "ColumnType", function() { return ColumnType; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "columnExpressionSerializationsInfo", function() { return columnExpressionSerializationsInfo; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "ConditionType", function() { return ConditionType; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "joinConditionSerializationInfo", function() { return joinConditionSerializationInfo; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "ParametersMode", function() { return ParametersMode; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "querySerializationsInfo", function() { return querySerializationsInfo; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "relationSerializationInfo", function() { return relationSerializationInfo; });
__webpack_require__.d(queryBuilder_elements_metadata_namespaceObject, "tableSerializationInfo", function() { return tableSerializationInfo; });

// NAMESPACE OBJECT: ./node_modules/@devexpress/analytics-core/querybuilder.js
var querybuilder_namespaceObject = {};
__webpack_require__.r(querybuilder_namespaceObject);
__webpack_require__.d(querybuilder_namespaceObject, "JSQueryBuilder", function() { return jsQueryBuilder_JSQueryBuilder; });
__webpack_require__.d(querybuilder_namespaceObject, "JSQueryBuilderBinding", function() { return jsQueryBuilderBinding_JSQueryBuilderBinding; });
__webpack_require__.d(querybuilder_namespaceObject, "DxQueryBuilder", function() { return jsQueryBuilderBinding_DxQueryBuilder; });
__webpack_require__.d(querybuilder_namespaceObject, "EventGenerator", function() { return eventGenerator_EventGenerator; });

// EXTERNAL MODULE: external "DevExpress.Analytics.Widgets"
var external_DevExpress_Analytics_Widgets_ = __webpack_require__(6);

// EXTERNAL MODULE: external "DevExpress.Analytics.Internal"
var external_DevExpress_Analytics_Internal_ = __webpack_require__(1);

// EXTERNAL MODULE: external "DevExpress.Analytics.Elements"
var external_DevExpress_Analytics_Elements_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/metadata.js




var metadata_name = { propertyName: 'name', modelName: '@Name', displayName: 'Name', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text'), validationRules: external_DevExpress_Analytics_Internal_["nameValidationRules"] };
var metadata_text = { propertyName: 'text', modelName: '@Text', displayName: 'Text', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') };
var metadata_size = { propertyName: 'size', modelName: '@Size', defaultVal: '100,50', from: external_DevExpress_Analytics_Elements_["Size"].fromString, displayName: 'Size', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') };
var metadata_location = { propertyName: 'location', modelName: '@Location', from: external_DevExpress_Analytics_Elements_["Point"].fromString, displayName: 'Location', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') };
var sizeLocation = [metadata_size, metadata_location];
var unknownSerializationsInfo = [metadata_name].concat(sizeLocation);

// EXTERNAL MODULE: external "ko"
var external_ko_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/diagramElementBaseSurface.js



class diagramElementBaseSurface_DiagramElementBaseSurface extends external_DevExpress_Analytics_Elements_["SurfaceElementBase"] {
    constructor(control, context, unitProperties) {
        super(control, context, Object(external_DevExpress_Analytics_Internal_["extend"])({}, diagramElementBaseSurface_DiagramElementBaseSurface._unitProperties, unitProperties));
        this.template = 'dx-diagram-element';
        this.selectiontemplate = 'dx-diagram-element-selection';
        this.contenttemplate = 'dx-diagram-element-content';
        this.margin = external_ko_["observable"](0);
        this._disposables.push(this.positionWidthWithoutMargins = external_ko_["pureComputed"](() => {
            return this['position'].width() - this.margin() * 2;
        }));
        this._disposables.push(this.positionLineHeightWithoutMargins = external_ko_["pureComputed"](() => {
            return this['position'].lineHeight() - this.margin() * 2;
        }));
    }
}
diagramElementBaseSurface_DiagramElementBaseSurface._unitProperties = {
    _height: (o) => {
        return o.size.height;
    },
    _width: (o) => {
        return o.size.width;
    },
    _x: (o) => {
        return o.location.x;
    },
    _y: (o) => {
        return o.location.y;
    }
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/connectingPointSurface.js


class connectingPointSurface_ConnectingPointSurface extends diagramElementBaseSurface_DiagramElementBaseSurface {
    constructor(control, context) {
        super(control, context, connectingPointSurface_ConnectingPointSurface._unitProperties);
        this.template = 'dxdd-connecting-point';
        this.selectiontemplate = 'dxdd-connection-point-selection';
        this.contenttemplate = '';
    }
}
connectingPointSurface_ConnectingPointSurface._unitProperties = {
    _x: (o) => {
        return external_ko_["pureComputed"](() => { return o.location.x() - o.parentModel().location.x(); });
    },
    _y: (o) => {
        return external_ko_["pureComputed"](() => { return o.location.y() - o.parentModel().location.y(); });
    }
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/utils.js
var PointSide;
(function (PointSide) {
    PointSide[PointSide["East"] = 0] = "East";
    PointSide[PointSide["South"] = 1] = "South";
    PointSide[PointSide["North"] = 2] = "North";
    PointSide[PointSide["West"] = 3] = "West";
})(PointSide || (PointSide = {}));
const GRID_SIZE = 10;
function determineConnectingPoints(startObject, endObject) {
    var result = { start: null, end: null };
    if (endObject.leftConnectionPoint.location.x() > startObject.rightConnectionPoint.location.x() + GRID_SIZE * 2) {
        result.start = startObject.rightConnectionPoint;
        result.end = endObject.leftConnectionPoint;
    }
    else if (startObject.leftConnectionPoint.location.x() > endObject.rightConnectionPoint.location.x() + GRID_SIZE * 2) {
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

// EXTERNAL MODULE: external "DevExpress.Analytics.Utils"
var external_DevExpress_Analytics_Utils_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/controlsFactory.js

var diagramControlsFactory = new external_DevExpress_Analytics_Utils_["ControlsFactory"]();

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/diagramElementBaseViewModel.js



class diagramElementBaseViewModel_DiagramElementBaseViewModel extends external_DevExpress_Analytics_Elements_["ElementViewModel"] {
    constructor(control, parent, serializer) {
        super(control, parent, serializer);
    }
    getControlFactory() {
        return diagramControlsFactory;
    }
}
var diagramElementSerializationInfo = [metadata_size, metadata_location, metadata_name, metadata_text, { propertyName: 'type', modelName: '@Type' }];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/connectingPointModel.js







class connectingPointModel_ConnectingPointViewModel extends diagramElementBaseViewModel_DiagramElementBaseViewModel {
    constructor(control, parent, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])({ '@ControlType': 'ConnectingPoint' }, control), parent, serializer);
        this.side = external_ko_["pureComputed"](() => {
            if (this.percentOffsetY() >= this.percentOffsetX()) {
                if (this.percentOffsetY() > 1 - this.percentOffsetX()) {
                    return PointSide.South;
                }
                else {
                    return PointSide.West;
                }
            }
            else {
                if (this.percentOffsetY() > 1 - this.percentOffsetX()) {
                    return PointSide.East;
                }
                else {
                    return PointSide.North;
                }
            }
        });
        this.size = new external_DevExpress_Analytics_Elements_["Size"](7, 7);
        this.location = new external_DevExpress_Analytics_Elements_["Point"](0, 0);
        this.location.x = external_ko_["pureComputed"](() => {
            var parentModel = this.parentModel();
            return parentModel.location.x() + parentModel.size.width() * this.percentOffsetX();
        });
        this.location.y = external_ko_["pureComputed"](() => {
            var parentModel = this.parentModel();
            return parentModel.location.y() + parentModel.size.height() * this.percentOffsetY();
        });
    }
}
var connectingPointSerializationInfo = [
    { propertyName: 'percentOffsetX', modelName: '@PercentOffsetX', defaultVal: 0.5, from: external_DevExpress_Analytics_Utils_["floatFromModel"] },
    { propertyName: 'percentOffsetY', modelName: '@PercentOffsetY', defaultVal: 0.5, from: external_DevExpress_Analytics_Utils_["floatFromModel"] }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/diagramElementViewModel.js




class diagramElementViewModel_DiagramElementViewModel extends diagramElementBaseViewModel_DiagramElementBaseViewModel {
    constructor(control, parent, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])({ '@ControlType': 'DiagramElement' }, control), parent, serializer);
        this.connectingPoints = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(control && control.ConnectingPoints || [], (item) => { return new connectingPointModel_ConnectingPointViewModel(item, this, serializer); });
        if (this.text() === undefined) {
            this.text(this.name());
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/dragDrop/connectingPointDragHandler.js






class connectingPointDragHandler_ConnectingPointDragHandler extends external_DevExpress_Analytics_Internal_["DragDropHandler"] {
    constructor(surface, selection, undoEngine, snapHelper, dragHelperContent) {
        super(surface, selection, undoEngine, snapHelper, dragHelperContent);
        this.startConnectingPoint = null;
        this.newConnector = null;
        this.cursor = 'arrow';
        this.containment = '.dxrd-ghost-container';
        this['helper'] = (draggable) => {
            dragHelperContent.update(draggable);
        };
    }
    startDrag(control) {
        if (!(control instanceof connectingPointSurface_ConnectingPointSurface)) {
            throw new Error('ConnectingPointDragHandler can be applied to the ConnectingPoint only.');
        }
        this.startConnectingPoint = control;
        var diagramElement = this.startConnectingPoint.parent.getControlModel();
        this.newConnector = diagramElement.parentModel().createChild({ '@ControlType': 'RoutedConnector' });
        this.newConnector.startPoint().connectingPoint(this.startConnectingPoint.getControlModel());
    }
    drag(event, uiElement) {
        uiElement.dataset.leftPosition = Object(external_DevExpress_Analytics_Internal_["convertToCssPixelUnits"])(Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.leftPosition) + uiElement['scroll'].left);
        uiElement.dataset.topPosition = Object(external_DevExpress_Analytics_Internal_["convertToCssPixelUnits"])(Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.topPosition) + uiElement['scroll'].top);
        var position = this._getAbsoluteSurfacePosition(uiElement);
        this.newConnectorSurface.endPoint().rect({ top: position.top, left: position.left });
    }
    doStopDrag() {
        this.dragHelperContent.reset();
        if (this.selection.dropTarget) {
            var dropTarget = this.selection.dropTarget.getControlModel();
            if (dropTarget instanceof connectingPointModel_ConnectingPointViewModel) {
                this.newConnector.endPoint().connectingPoint(dropTarget);
            }
            else if (dropTarget instanceof diagramElementViewModel_DiagramElementViewModel) {
                var connectings = dropTarget.connectingPoints();
                this.newConnector.endPoint().connectingPoint(connectings[0]);
            }
            this.selection.initialize(this.newConnectorSurface);
        }
    }
    get newConnectorSurface() {
        return this.newConnector && Object(external_DevExpress_Analytics_Internal_["findSurface"])(this.newConnector);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/connectors/connectionPointSurface.js


class connectionPointSurface_ConnectionPointSurface extends external_DevExpress_Analytics_Elements_["SurfaceElementBase"] {
    constructor(control, context) {
        super(control, context, connectionPointSurface_ConnectionPointSurface._unitProperties);
        this.template = 'dx-diagram-connection-point';
        this.selectiontemplate = 'dx-diagram-connection-point';
        this.relativeX = external_ko_["pureComputed"](() => {
            return this.rect().left - this.parent.rect().left;
        });
        this.relativeY = external_ko_["pureComputed"](() => {
            return this.rect().top - this.parent.rect().top;
        });
    }
    container() {
        return this.getRoot();
    }
}
connectionPointSurface_ConnectionPointSurface._unitProperties = {
    _x: (o) => {
        return o.location.x;
    },
    _y: (o) => {
        return o.location.y;
    }
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/dragDrop/connectionPointDragHandler.js





class connectionPointDragHandler_ConnectionPointDragHandler extends external_DevExpress_Analytics_Internal_["DragDropHandler"] {
    constructor(surface, selection, undoEngine, snapHelper, dragHelperContent) {
        super(surface, selection, undoEngine, snapHelper, dragHelperContent);
        this.currentConnectionPoint = null;
        this.cursor = 'arrow';
        this.containment = '.dxrd-ghost-container';
        this['helper'] = (draggable) => {
            dragHelperContent.update(draggable);
        };
    }
    startDrag(control) {
        if (!(control instanceof connectionPointSurface_ConnectionPointSurface)) {
            throw new Error('ConnectionPointDragHandler can be applied to the ConnectionPoint only.');
        }
        this.currentConnectionPoint = control;
    }
    drag(event, uiElement) {
        uiElement.dataset.leftPosition = Object(external_DevExpress_Analytics_Internal_["convertToCssPixelUnits"])(Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.leftPosition) + uiElement['scroll'].left);
        uiElement.dataset.topPosition = Object(external_DevExpress_Analytics_Internal_["convertToCssPixelUnits"])(Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.topPosition) + uiElement['scroll'].top);
        var position = this._getAbsoluteSurfacePosition(uiElement);
        this.currentConnectionPoint.rect({ top: position.top, left: position.left });
    }
    doStopDrag() {
        this.dragHelperContent.reset();
        if (this.selection.dropTarget) {
            var dropTarget = this.selection.dropTarget.getControlModel();
            if (dropTarget instanceof connectingPointModel_ConnectingPointViewModel) {
                var connector = this.currentConnectionPoint.parent.getControlModel();
                if (this.currentConnectionPoint.getControlModel() === connector.startPoint()) {
                    connector.startPoint().connectingPoint(dropTarget);
                }
                else {
                    connector.endPoint().connectingPoint(dropTarget);
                }
            }
            else if (dropTarget instanceof diagramElementViewModel_DiagramElementViewModel) {
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
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/diagramElementSurface.js

class diagramElementSurface_DiagramElementSurface extends diagramElementBaseSurface_DiagramElementBaseSurface {
    constructor(control, context) {
        super(control, context, null);
        this.contenttemplate = 'dxdd-element-content-with-connecting-points';
    }
    _getChildrenHolderName() { return 'connectingPoints'; }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/diagramModel.js







class diagramModel_DiagramViewModel extends diagramElementBaseViewModel_DiagramElementBaseViewModel {
    constructor(diagramSource) {
        var serializer = new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        super(diagramSource, null, serializer);
        this.controlType = 'Diagram';
        this.controls = external_ko_["observableArray"]();
        this.name('Diagram');
    }
    getInfo() {
        return diagramSerializationsInfo;
    }
}
var margins = { propertyName: 'margins', modelName: '@Margins', from: external_DevExpress_Analytics_Elements_["Margins"].fromString, displayName: 'Margins' };
var pageWidth = { propertyName: 'pageWidth', modelName: '@PageWidth', defaultVal: 850, from: external_DevExpress_Analytics_Utils_["floatFromModel"], displayName: 'Page Width', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('numeric') };
var pageHeight = { propertyName: 'pageHeight', modelName: '@PageHeight', defaultVal: 1250, from: external_DevExpress_Analytics_Utils_["floatFromModel"], displayName: 'Page Height', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('numeric') };
var diagramSerializationsInfo = [metadata_name, pageWidth, pageHeight, margins];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/diagramSurface.js




class diagramSurface_DiagramSurface extends external_DevExpress_Analytics_Elements_["SurfaceElementBase"] {
    constructor(diagram, zoom = external_ko_["observable"](1)) {
        super(diagram, {
            measureUnit: external_ko_["observable"]('Pixels'),
            zoom: zoom,
            dpi: external_ko_["observable"](100)
        }, diagramSurface_DiagramSurface._unitProperties);
        this.measureUnit = external_ko_["observable"]('Pixels');
        this.dpi = external_ko_["observable"](100);
        this.controls = external_ko_["observableArray"]();
        this.allowMultiselect = false;
        this.focused = external_ko_["observable"](false);
        this.selected = external_ko_["observable"](false);
        this.underCursor = external_ko_["observable"](new external_DevExpress_Analytics_Internal_["HoverInfo"]());
        this.templateName = 'dx-diagram-surface';
        this.margins = { bottom: this['_bottom'], left: this['_left'], right: this['_right'], top: this['_top'] };
        this.zoom = zoom;
        this._context = this;
        Object(external_DevExpress_Analytics_Internal_["createObservableArrayMapCollection"])(diagram.controls, this.controls, this._createSurface);
    }
    checkParent(surfaceParent) { return false; }
    get parent() {
        return this._parent;
    }
    set parent(newVal) {
        this._parent = newVal;
    }
    getChildrenCollection() {
        return external_ko_["observableArray"]([]);
    }
}
diagramSurface_DiagramSurface._unitProperties = {
    _width: (o) => { return o.pageWidth; },
    _height: (o) => { return o.pageWidth; },
    pageWidth: (o) => { return o.pageWidth; },
    pageHeight: (o) => { return o.pageHeight; },
    _bottom: (o) => { return o.margins.bottom; },
    _left: (o) => { return o.margins.left; },
    _right: (o) => { return o.margins.right; },
    _top: (o) => { return o.margins.top; }
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/connectors/connectionPointModel.js




class connectionPointModel_ConnectionPointViewModel extends diagramElementBaseViewModel_DiagramElementBaseViewModel {
    constructor(control, parent, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])(control, { '@ControlType': 'ConnectionPoint' }), parent, serializer);
        var _x = this.location.x, _y = this.location.y;
        this.location.x = external_ko_["pureComputed"]({
            read: () => {
                return this.connectingPoint() && this.connectingPoint().location.x() || _x();
            },
            write: (value) => {
                this.connectingPoint(null);
                _x(value);
            }
        });
        this.location.y = external_ko_["pureComputed"]({
            read: () => {
                return this.connectingPoint() && this.connectingPoint().location.y() || _y();
            },
            write: (value) => {
                this.connectingPoint(null);
                _y(value);
            }
        });
    }
}
var connectionPointSerializationInfo = [
    metadata_location,
    { propertyName: 'connectingPoint', modelName: '@ConnectingPoint', link: true }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/connectors/connectorModel.js






class connectorModel_ConnectorViewModel extends diagramElementBaseViewModel_DiagramElementBaseViewModel {
    constructor(control, parent, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])({ '@ControlType': 'Connector' }, control), parent, serializer);
        this.startPoint(this.startPoint() || new connectionPointModel_ConnectionPointViewModel({ '@Location': '0, 0' }, this, serializer));
        this.endPoint(this.endPoint() || new connectionPointModel_ConnectionPointViewModel({ '@Location': '150, 75' }, this, serializer));
        this.location = new external_DevExpress_Analytics_Elements_["Point"](0, 0);
        this._disposables.push(this.location.x = external_ko_["pureComputed"]({
            read: () => {
                return this.getX();
            },
            write: (value) => {
                var oldValue = this.startPoint().location.x() < this.endPoint().location.x() ? this.startPoint().location.x() : this.endPoint().location.x();
                var delta = value - oldValue;
                this.startPoint().location.x(this.startPoint().location.x() + delta);
                this.endPoint().location.x(this.endPoint().location.x() + delta);
            }
        }));
        this._disposables.push(this.location.y = external_ko_["pureComputed"]({
            read: () => {
                return this.getY();
            },
            write: (value) => {
                var oldValue = this.startPoint().location.y() < this.endPoint().location.y() ? this.startPoint().location.y() : this.endPoint().location.y();
                var delta = value - oldValue;
                this.startPoint().location.y(this.startPoint().location.y() + delta);
                this.endPoint().location.y(this.endPoint().location.y() + delta);
            }
        }));
        this.size = new external_DevExpress_Analytics_Elements_["Size"](0, 0);
        this._disposables.push(this.size.width = external_ko_["pureComputed"]({
            read: () => {
                return this.getWidth();
            },
            write: (value) => {
                if (this.startPoint().location.x() < this.endPoint().location.x()) {
                    this.endPoint().location.x(this.startPoint().location.x() + value);
                }
                else {
                    this.startPoint().location.x(this.endPoint().location.x() + value);
                }
            }
        }));
        this._disposables.push(this.size.height = external_ko_["pureComputed"]({
            read: () => {
                return this.getHeight();
            },
            write: (value) => {
                if (this.startPoint().location.y() < this.endPoint().location.y()) {
                    this.endPoint().location.y(this.startPoint().location.y() + value);
                }
                else {
                    this.startPoint().location.y(this.endPoint().location.y() + value);
                }
            }
        }));
    }
    getX() {
        return this.startPoint().location.x() < this.endPoint().location.x() ? this.startPoint().location.x() : this.endPoint().location.x();
    }
    getY() {
        return this.startPoint().location.y() < this.endPoint().location.y() ? this.startPoint().location.y() : this.endPoint().location.y();
    }
    getWidth() {
        return Math.abs(this.startPoint().location.x() - this.endPoint().location.x()) || connectorModel_ConnectorViewModel.MIN_LINE_THICKNESS;
    }
    getHeight() {
        return Math.abs(this.startPoint().location.y() - this.endPoint().location.y()) || connectorModel_ConnectorViewModel.MIN_LINE_THICKNESS;
    }
}
connectorModel_ConnectorViewModel.MIN_LINE_THICKNESS = 3;

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/connectors/connectorSurface.js



class connectorSurface_ConnectorSurface extends diagramElementBaseSurface_DiagramElementBaseSurface {
    constructor(control, context) {
        super(control, context, null);
        this.template = 'dxdd-connector';
        this.selectiontemplate = 'dxdd-connector-selection';
        this.startPoint = external_ko_["pureComputed"](() => {
            return new connectionPointSurface_ConnectionPointSurface(control.startPoint(), context);
        });
        this.endPoint = external_ko_["pureComputed"](() => {
            return new connectionPointSurface_ConnectionPointSurface(control.endPoint(), context);
        });
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/connectors/routedConnectorModel.js





class routedConnectorModel_RoutedConnectorViewModel extends connectorModel_ConnectorViewModel {
    constructor(control, parent, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])({ '@ControlType': 'RoutedConnector' }, control), parent, serializer);
        this._isUpdating = false;
        this._getPower = function (_n) {
            for (var i = 0; i < 10; i++) {
                if (_n >= Math.pow(2, i) && _n < Math.pow(2, i + 1)) {
                    return i + 1;
                }
            }
            return 1;
        };
        this.seriesNumber = external_ko_["observable"](1);
        this.routePoints = external_ko_["observable"]([]);
        this.freezeRoute = external_ko_["observable"](false);
        this._disposables.push(external_ko_["computed"](() => {
            var freezeRoute = !(1 + this.startPoint().location.x() + this.startPoint().location.y()
                + this.endPoint().location.x() + this.endPoint().location.y());
            if (!this._isUpdating) {
                this.freezeRoute(freezeRoute);
            }
        }));
        this._disposables.push(external_ko_["computed"](() => {
            if (!this.freezeRoute()) {
                var result = [];
                var startPointSide = this._getStartPointSide();
                var endPointSide = this._getEndPointSide();
                var startPoint = new external_DevExpress_Analytics_Elements_["Point"](this.startPoint().location.x(), this.startPoint().location.y()), endPoint = new external_DevExpress_Analytics_Elements_["Point"](this.endPoint().location.x(), this.endPoint().location.y());
                if (this.startPoint().connectingPoint()) {
                    this._fixPoint(startPoint, this.startPoint().connectingPoint().side());
                    result.push(startPoint);
                }
                if (this.endPoint().connectingPoint()) {
                    this._fixPoint(endPoint, this.endPoint().connectingPoint().side());
                }
                var baseX = Math.min(startPoint.x(), endPoint.x()), baseY = Math.min(startPoint.y(), endPoint.y()), width = Math.abs(startPoint.x() - endPoint.x()), height = Math.abs(startPoint.y() - endPoint.y());
                var number = this.seriesNumber();
                var ratio = this._getRatio(number);
                var indent = (number - 1) * GRID_SIZE;
                if (startPoint.y() - endPoint.y() > 0) {
                    if (startPoint.x() - endPoint.x() > 0) {
                        if (startPointSide === PointSide.North || startPointSide === PointSide.East) {
                            if (endPointSide === PointSide.North || endPointSide === PointSide.East) {
                                if (number !== 1) {
                                    width += indent;
                                    result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY + height));
                                }
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY));
                            }
                            else {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY + height * ratio));
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY + height * ratio));
                            }
                        }
                        else {
                            if (endPointSide === PointSide.South || endPointSide === PointSide.West) {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY + height));
                            }
                            else {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width * ratio, baseY + height));
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width * ratio, baseY));
                            }
                        }
                    }
                    else {
                        if (startPointSide === PointSide.North || startPointSide === PointSide.West) {
                            if (endPointSide === PointSide.North || endPointSide === PointSide.West) {
                                if (number !== 1) {
                                    baseX -= indent;
                                    result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY + height));
                                }
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY));
                            }
                            else {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY + height * ratio));
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY + height * ratio));
                            }
                        }
                        else {
                            if (endPointSide === PointSide.South || endPointSide === PointSide.East) {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY + height));
                            }
                            else {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width * ratio, baseY + height));
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width * ratio, baseY));
                            }
                        }
                    }
                }
                else {
                    if (startPoint.x() - endPoint.x() > 0) {
                        if (startPointSide === PointSide.South || startPointSide === PointSide.East) {
                            if (endPointSide === PointSide.South || endPointSide === PointSide.East) {
                                if (number !== 1) {
                                    width += indent;
                                    result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY));
                                }
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY + height));
                            }
                            else {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY + height * ratio));
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY + height * ratio));
                            }
                        }
                        else {
                            if (endPointSide === PointSide.North || endPointSide === PointSide.West) {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY));
                            }
                            else {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width * ratio, baseY));
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width * ratio, baseY + height));
                            }
                        }
                    }
                    else {
                        if (startPointSide === PointSide.South || startPointSide === PointSide.West) {
                            if (endPointSide === PointSide.South || endPointSide === PointSide.West) {
                                if (number !== 1) {
                                    baseX -= indent;
                                    result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY));
                                }
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY + height));
                            }
                            else {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX, baseY + height * ratio));
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY + height * ratio));
                            }
                        }
                        else {
                            if (endPointSide === PointSide.North || endPointSide === PointSide.East) {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width, baseY));
                            }
                            else {
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width * ratio, baseY));
                                result.push(new external_DevExpress_Analytics_Elements_["Point"](baseX + width * ratio, baseY + height));
                            }
                        }
                    }
                }
                if (this.endPoint().connectingPoint()) {
                    result.push(endPoint);
                }
                this.routePoints(result);
            }
        }));
    }
    getX() {
        var result = super.getX();
        this.routePoints && this.routePoints().forEach((point) => {
            if (point.x() < result) {
                result = point.x();
            }
        });
        return result;
    }
    getY() {
        var result = super.getY();
        this.routePoints && this.routePoints().forEach((point) => {
            if (point.y() < result) {
                result = point.y();
            }
        });
        return result;
    }
    getWidth() {
        var result = super.getWidth();
        var baseX = this.getX();
        this.routePoints && [this.startPoint().location, this.endPoint().location].concat(this.routePoints()).forEach((point) => {
            if (point.x() - baseX > result) {
                result = point.x() - baseX;
            }
        });
        return result;
    }
    getHeight() {
        var result = super.getHeight();
        var baseY = this.getY();
        this.routePoints && [this.startPoint().location, this.endPoint().location].concat(this.routePoints()).forEach((point) => {
            if (point.y() - baseY > result) {
                result = point.y() - baseY;
            }
        });
        return Math.round(result);
    }
    _fixPoint(point, side) {
        switch (side) {
            case PointSide.North:
                point.y(point.y() - GRID_SIZE);
                break;
            case PointSide.East:
                point.x(point.x() + GRID_SIZE);
                break;
            case PointSide.West:
                point.x(point.x() - GRID_SIZE);
                break;
            case PointSide.South:
                point.y(point.y() + GRID_SIZE);
        }
    }
    _getStartPointSide() {
        if (this.startPoint().connectingPoint()) {
            return this.startPoint().connectingPoint().side();
        }
        if (this.startPoint().location.y() !== this.endPoint().location.y()) {
            if (this.startPoint().location.y() > this.endPoint().location.y()) {
                return PointSide.North;
            }
            else {
                return PointSide.South;
            }
        }
        else {
            if (this.startPoint().location.x() > this.endPoint().location.x()) {
                return PointSide.West;
            }
            else {
                return PointSide.East;
            }
        }
    }
    _getEndPointSide() {
        if (this.endPoint().connectingPoint()) {
            return this.endPoint().connectingPoint().side();
        }
        if (this.startPoint().location.y() !== this.endPoint().location.y()) {
            if (this.startPoint().location.y() > this.endPoint().location.y()) {
                return PointSide.South;
            }
            else {
                return PointSide.North;
            }
        }
        else {
            if (this.startPoint().location.x() > this.endPoint().location.x()) {
                return PointSide.East;
            }
            else {
                return PointSide.West;
            }
        }
    }
    _getRatio(n) {
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
    }
    beginUpdate() { this._isUpdating = true; }
    endUpdate() { this._isUpdating = false; }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/elements/connectors/routedConnectorSurface.js



class routedConnectorSurface_RoutedConnectorSurface extends diagramElementBaseSurface_DiagramElementBaseSurface {
    constructor(control, context) {
        super(control, context, null);
        this.template = 'dxdd-routed-connector';
        this.selectiontemplate = 'dxdd-routed-connector-selection';
        this.showArrow = external_ko_["observable"](false);
        this.showRightArrow = external_ko_["observable"](false);
        this.isVisible = external_ko_["observable"](true);
        this.routePoints = external_ko_["observableArray"]();
        this.routePointsSet = external_ko_["pureComputed"](() => {
            var points = [];
            this.routePoints().forEach((point) => {
                points.push(point.x() + ' ' + point.y());
            });
            return points.join(', ');
        });
        this.routeLineWrappers = external_ko_["pureComputed"](() => {
            var result = [];
            for (var i = 1; i < this.routePoints().length; i++) {
                result.push(this._createRouteLineWrapper(this.routePoints()[i - 1], this.routePoints()[i], i === 1 || i === this.routePoints().length - 1));
            }
            return result;
        });
        this.connectorID = () => this._connectorID;
        this._disposables.push(control);
        this._connectorID = routedConnectorSurface_RoutedConnectorSurface._connectorsCount++;
        this.startPoint = external_ko_["pureComputed"](() => {
            return new connectionPointSurface_ConnectionPointSurface(control.startPoint(), context);
        });
        this.endPoint = external_ko_["pureComputed"](() => {
            return new connectionPointSurface_ConnectionPointSurface(control.endPoint(), context);
        });
        this._disposables.push(control.routePoints.subscribe((routePoints) => {
            this._updateRoutePoints();
        }));
        this._updateRoutePoints();
    }
    _createRoutePoint(point, base) {
        return {
            x: external_ko_["pureComputed"](() => {
                if (this._context.rtl()) {
                    return Math.round(this.getControlModel().size.width() - (point.x() - base.x()));
                }
                else {
                    return Math.round(point.x() - base.x());
                }
            }),
            y: external_ko_["pureComputed"](() => { return Math.round(point.y() - base.y()); }),
            modelPoint: point
        };
    }
    _createRouteLineWrapper(point1, point2, isLocked = false) {
        var _self = this, isVerticalLine = Math.abs(point1.x.peek() - point2.x.peek()) < 1, absoluteTop = point1.modelPoint.y.peek(), absoluteLeft = point1.modelPoint.x.peek(), position = {
            top: Math.min(point1.y.peek(), point2.y.peek()) - 2,
            left: Math.min(point1.x.peek(), point2.x.peek()) - 2,
            width: Math.abs(point1.x.peek() - point2.x.peek()) + 6,
            height: Math.abs(point1.y.peek() - point2.y.peek()) + 6
        }, resizeHandler = (params) => {
            _self._control.freezeRoute(true);
            try {
                _self._control.beginUpdate();
                if (isVerticalLine) {
                    if (this._context.rtl()) {
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
            resizeStopped: () => {
                _self._control.routePoints.notifySubscribers(_self._control.routePoints());
            },
            isLocked: external_ko_["observable"](isLocked)
        };
    }
    _updateRoutePoints() {
        var points = [], control = this.getControlModel(), base = control.location;
        points.push(this._createRoutePoint(control.startPoint().location, base));
        control.routePoints().forEach((point) => {
            points.push(this._createRoutePoint(point, base));
        });
        points.push(this._createRoutePoint(control.endPoint().location, base));
        this.routePoints(points);
    }
}
routedConnectorSurface_RoutedConnectorSurface._connectorsCount = 0;

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/controlRegistrator.js


















function registerControls() {
    diagramControlsFactory.registerControl('Unknown', {
        info: unknownSerializationsInfo,
        type: external_DevExpress_Analytics_Elements_["ElementViewModel"],
        nonToolboxItem: true,
        surfaceType: external_DevExpress_Analytics_Elements_["SurfaceElementBase"]
    });
    diagramControlsFactory.registerControl('Connector', {
        info: [
            metadata_name,
            { propertyName: 'location', displayName: 'Location', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'startPoint', modelName: '@StartPoint', link: true },
            { propertyName: 'endPoint', modelName: '@EndPoint', link: true }
        ],
        surfaceType: connectorSurface_ConnectorSurface,
        type: connectorModel_ConnectorViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    diagramControlsFactory.registerControl('RoutedConnector', {
        info: [
            metadata_name,
            { propertyName: 'location', displayName: 'Location', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'startPoint', modelName: '@StartPoint', link: true },
            { propertyName: 'endPoint', modelName: '@EndPoint', link: true }
        ],
        surfaceType: routedConnectorSurface_RoutedConnectorSurface,
        type: routedConnectorModel_RoutedConnectorViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    diagramControlsFactory.registerControl('ConnectionPoint', {
        info: connectionPointSerializationInfo,
        surfaceType: connectionPointSurface_ConnectionPointSurface,
        type: connectionPointModel_ConnectionPointViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    diagramControlsFactory.registerControl('Diagram', {
        info: diagramSerializationsInfo,
        surfaceType: diagramSurface_DiagramSurface,
        popularProperties: ['name'],
        type: diagramModel_DiagramViewModel,
        elementActionsTypes: [],
        isContainer: true,
        nonToolboxItem: true
    });
    diagramControlsFactory.registerControl('DiagramElement', {
        info: diagramElementSerializationInfo,
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
        surfaceType: diagramElementSurface_DiagramElementSurface,
        popularProperties: ['text'],
        type: diagramElementViewModel_DiagramElementViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    diagramControlsFactory.registerControl('Ellipse', {
        info: diagramElementSerializationInfo,
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
        surfaceType: diagramElementSurface_DiagramElementSurface,
        popularProperties: ['text'],
        type: diagramElementViewModel_DiagramElementViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    diagramControlsFactory.registerControl('Condition', {
        info: diagramElementSerializationInfo,
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
        surfaceType: diagramElementSurface_DiagramElementSurface,
        popularProperties: ['text'],
        type: diagramElementViewModel_DiagramElementViewModel,
        elementActionsTypes: [],
        nonToolboxItem: false
    });
    diagramControlsFactory.registerControl('ConnectingPoint', {
        info: connectingPointSerializationInfo,
        surfaceType: connectingPointSurface_ConnectingPointSurface,
        type: connectingPointModel_ConnectingPointViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
}

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/initializer.js













var initializer_groups = {
    'Appearance': { info: [] },
    'Behavior': { info: [] },
    'Design': { info: [metadata_name] },
    'Layout': { info: [metadata_location, metadata_size, pageWidth, pageHeight] }
};
function createDiagramDesigner(element, diagramSource, localization, rtl) {
    if (localization) {
        Object(external_DevExpress_Analytics_Utils_["addCultureInfo"])({
            messages: localization
        });
    }
    registerControls();
    var diagram = external_ko_["pureComputed"](() => { return new diagramModel_DiagramViewModel(diagramSource()); }), surface = external_ko_["pureComputed"](() => {
        var surface = new diagramSurface_DiagramSurface(diagram());
        return surface;
    });
    var designerModel = Object(external_DevExpress_Analytics_Internal_["createDesigner"])(diagram, surface, diagramControlsFactory, initializer_groups, undefined, undefined, rtl);
    designerModel.connectionPointDragHandler = new connectionPointDragHandler_ConnectionPointDragHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.connectingPointDragHandler = new connectingPointDragHandler_ConnectingPointDragHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.isLoading(false);
    designerModel.selection.focused(surface());
    external_jQuery_["fn"].constructor(element).children().remove();
    external_ko_["applyBindings"](designerModel, element);
    var updateSurfaceContentSize_ = Object(external_DevExpress_Analytics_Internal_["updateSurfaceContentSize"])(designerModel.surfaceSize, element);
    var onResize = () => {
        updateSurfaceContentSize_();
    };
    window.addEventListener('resize', onResize);
    Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
        window.removeEventListener('resize', onResize);
    });
    designerModel.tabPanel.width.subscribe(() => {
        updateSurfaceContentSize_();
    });
    updateSurfaceContentSize_();
    return designerModel;
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/bindings.js






external_ko_["bindingHandlers"]['routeLineDraggable'] = {
    init: (element, valueAccessor) => {
        let startDragPosition = null;
        var values = valueAccessor(), options = Object(external_DevExpress_Analytics_Internal_["extend"])({ snap: '.dxrd-drag-snap-line', snapTolerance: external_DevExpress_Analytics_Internal_["SnapLinesHelper"].snapTolerance }, external_ko_["unwrap"](values), {
            start: function (event, uiElement) {
                values.starting();
            },
            stop: function (event, uiElement) {
                values.stopped();
            },
            drag: function (event, uiElement) {
                startDragPosition = startDragPosition || { left: Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.leftPosition), top: Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.topPosition) };
                var dragDeltaLeft = startDragPosition && event.pageX - startDragPosition.left;
                var dragDeltaTop = startDragPosition && event.pageY - startDragPosition.top;
                values.forceResize({ delta: { dx: dragDeltaLeft || 0, dy: dragDeltaTop || 0 } });
            }
        });
        const draggable = new external_DevExpress_Analytics_Internal_["Draggable"](element, options);
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, () => {
            draggable.dispose();
            element = null;
        });
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
external_ko_["bindingHandlers"]['updateConnectorArrow'] = {
    init: (svgNode, valueAccessor, allBindings, viewModel, bindingContext) => {
        var ieVersion = getInternetExplorerVersion();
        if (ieVersion > -1 && ieVersion <= 11) {
            var updateSubscription = bindingContext.$data.routePointsSet.subscribe(() => {
                if (bindingContext.$data.showArrow())
                    svgNode.parentNode.insertBefore(svgNode, svgNode);
            });
            Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(svgNode.parentNode, () => updateSubscription.dispose());
        }
    }
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/diagram/_legacy.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/analytics-diagram.js















































// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/dbColumn.js
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
})(DBColumnType || (DBColumnType = {}));
class DBColumn {
    constructor(model) {
        this.name = model['Name'];
        this.type = model['ColumnType'];
        this.size = model['Size'];
    }
    static GetType(dbColumnType) {
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
    }
    static GetSpecific(type) {
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
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/dbForeignKey.js
class DBForeignKey {
    constructor(model) {
        this.name = model['Name'];
        this.primaryKeyTable = model['PrimaryKeyTable'];
        this.columns = model['Columns'];
        this.primaryKeyColumns = model['PrimaryKeyTableKeyColumns'];
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/_dbSchema.js
function deserializeToCollection(model, createItem, collection) {
    var collection = collection || [];
    if (model) {
        model.forEach((value) => {
            collection.push(createItem(value));
        });
    }
    return collection;
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/dbTable.js



class dbTable_DBTable {
    constructor(model) {
        this.name = model['Name'];
        this.isView = model['IsView'] === 'true' || model['IsView'] === true;
        this.columns = deserializeToCollection(model['columns'], (columnModel) => new DBColumn(columnModel));
        this.foreignKeys = deserializeToCollection(model['foreignKeys'], (columnModel) => new DBForeignKey(columnModel));
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/dbStoredProcedure.js

class dbStoredProcedure_DBStoredProcedure {
    constructor(model) {
        this.name = model['Name'];
        this.arguments = deserializeToCollection(model['arguments'], (argModel) => new DBStoredProcedureArgument(argModel));
    }
}
var DBStoredProcedureArgumentDirection;
(function (DBStoredProcedureArgumentDirection) {
    DBStoredProcedureArgumentDirection[DBStoredProcedureArgumentDirection["In"] = 0] = "In";
    DBStoredProcedureArgumentDirection[DBStoredProcedureArgumentDirection["Out"] = 1] = "Out";
    DBStoredProcedureArgumentDirection[DBStoredProcedureArgumentDirection["InOut"] = 2] = "InOut";
})(DBStoredProcedureArgumentDirection || (DBStoredProcedureArgumentDirection = {}));
class DBStoredProcedureArgument {
    constructor(model) {
        this.name = model['Name'];
        this.type = model['Type'];
        this.direction = model['Direction'];
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/dbSchema.js



class dbSchema_DBSchema {
    constructor(model) {
        var tables = deserializeToCollection(model['Tables'], (tableModel) => new dbTable_DBTable(tableModel));
        tables.sort((a, b) => { return a.name.localeCompare(b.name); });
        var views = deserializeToCollection(model['Views'], (tableModel) => new dbTable_DBTable(tableModel));
        views.sort((a, b) => { return a.name.localeCompare(b.name); });
        this.tables = tables.concat(views);
        this.procedures = deserializeToCollection(model['StoredProcedures'], (procModel) => new dbStoredProcedure_DBStoredProcedure(procModel));
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/_dbSchemaProvider.js





function getDBSchemaCallback(requestWrapper, connection, tables) {
    var deferred = external_jQuery_["Deferred"]();
    requestWrapper.getDbSchema(connection, tables)
        .done(data => {
        deferred.resolve(new dbSchema_DBSchema(JSON.parse(data.dbSchemaJSON)));
    })
        .fail(data => {
        Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Schema loading failed. {0}', 'DxDesignerStringId.Error_SchemaLoadingFailed'), Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(data)));
        deferred.reject();
    });
    return deferred.promise();
}
function getDBStoredProceduresCallback(requestWrapper, connection) {
    var deferred = external_jQuery_["Deferred"]();
    requestWrapper.getDbStoredProcedures(connection)
        .done(data => {
        deferred.resolve(new dbSchema_DBSchema(JSON.parse(data.dbSchemaJSON)).procedures);
    })
        .fail(data => {
        Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Stored procedures loading failed. {0}', 'DxDesignerStringId.Error_SchemaLoadingFailed'), Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(data)));
        deferred.reject();
    });
    return deferred.promise();
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/initializer.js

var ActionId = {
    Save: 'dxqb-save',
    DataPreview: 'dxqb-data-preview',
    SelectStatementPreview: 'dxqb-select-statement-preview'
};
var HandlerUri = Object(external_DevExpress_Analytics_Internal_["createGlobalModuleVariableFunc"])('DXQB.axd');

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/_dataConnection.js


function serializeDataConnection(connection) {
    var serializer = new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
    var data = { 'DataConnection': serializer.serialize(connection) };
    if (!!connection.options)
        Object(external_DevExpress_Analytics_Internal_["extend"])(data, { 'ConnectionOptions': serializer.serialize(connection.options) });
    return JSON.stringify(data);
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/requestwrapper.js




class requestwrapper_RequestWrapper {
    sendRequest(action, arg) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), action, arg);
    }
    _sendRequest(settings) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(settings);
    }
    getDbSchema(connection, tables) {
        var requestModel = {
            connectionJSON: serializeDataConnection(connection),
            tables: null,
            views: null
        };
        if (tables && tables.length > 0) {
            requestModel.tables = (tables || []).filter(x => !x.isView).map(x => x.name);
            requestModel.views = (tables || []).filter(x => x.isView).map(x => x.name);
        }
        return this.sendRequest('getDBSchema', encodeURIComponent(JSON.stringify(requestModel)));
    }
    getDbStoredProcedures(connection) {
        var requestJson = JSON.stringify({
            connectionJSON: serializeDataConnection(connection)
        });
        return this.sendRequest('getDBStoredProcedures', encodeURIComponent(requestJson));
    }
    getSelectStatement(connection, queryJSON) {
        var requestJson = JSON.stringify({
            connectionJSON: serializeDataConnection(connection),
            sqlQueryJSON: queryJSON
        });
        return this.sendRequest('getSelectStatement', encodeURIComponent(requestJson));
    }
    getDataPreview(connection, queryJSON) {
        var requestJson = JSON.stringify({
            connectionJSON: serializeDataConnection(connection),
            sqlQueryJSON: queryJSON
        });
        return this.sendRequest('getDataPreview', encodeURIComponent(requestJson));
    }
    rebuildResultSchema(dataSource, queryName, relationsEditing = false) {
        var requestJson = JSON.stringify({
            sqlDataSourceJSON: JSON.stringify({ 'SqlDataSource': new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(dataSource) }),
            queryName: queryName,
            relationsEditing: relationsEditing
        });
        return this.sendRequest('rebuildResultSchema', encodeURIComponent(requestJson));
    }
    getFederationResultSchema(dataSource) {
        var serializedModel = dataSource.getSerializableModel().getSerializableFederationDataSourceInfo();
        var requestJson = JSON.stringify({
            federationDataSourceJSON: JSON.stringify({ 'FederationDataSource': new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(dataSource) }),
            dataSources: serializedModel.dataSources
        });
        return this.sendRequest('getFederationResultSchema', encodeURIComponent(requestJson));
    }
    validateJsonUri(jsonDataSource) {
        var uriJsonSourceJSON = JSON.stringify(jsonDataSource.source.serialize(true));
        var requestJson = JSON.stringify({
            uriJsonSourceJSON: uriJsonSourceJSON
        });
        var ajaxSettings = {
            uri: HandlerUri(),
            action: 'validateJsonEndPoint',
            arg: encodeURIComponent(requestJson),
            ignoreError: () => true
        };
        return this._sendRequest(ajaxSettings);
    }
    saveJsonSource(connectionName, jsonDataSource) {
        var jsonSource = jsonDataSource.source;
        var jsonSourceJSON = JSON.stringify(jsonSource.serialize(true));
        var requestString = JSON.stringify({
            connectionName: connectionName,
            customJson: jsonSource.json(),
            uriJsonSourceJSON: jsonSourceJSON
        });
        return this.sendRequest('saveJsonSource', encodeURIComponent(requestString));
    }
    getJsonSchema(jsonDataSource, parameters) {
        var jsonSource = jsonDataSource.source;
        var jsonSourceJSON = JSON.stringify(jsonSource.serialize(true));
        var requestString = JSON.stringify({
            connectionName: jsonDataSource.connectionName(),
            customJson: jsonSource.json(),
            uriJsonSourceJSON: jsonSourceJSON,
            parameters: parameters
        });
        return this.sendRequest('getJsonSchema', encodeURIComponent(requestString));
    }
    getObjectTypeDescriptions(context) {
        return this.sendRequest('getObjectSchema', context);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/dbSchemaProvider.js









class dbSchemaProvider_DBSchemaProvider extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(connection, _requestWrapper = new requestwrapper_RequestWrapper()) {
        super();
        this._requestWrapper = _requestWrapper;
        this._tables = {};
        this._tableRequests = external_ko_["observableArray"]([]).extend({ deferred: true });
        this.connection = connection;
        this._disposables.push(this.connection.name.subscribe(() => {
            this._tables = {};
            this._dbSchema = null;
            this._dbStoredProceduresSchema = null;
        }));
        this._disposables.push(external_ko_["computed"](() => {
            var tableRequests = this._tableRequests();
            if (!tableRequests.length)
                return;
            this._tableRequests([]);
            var tables = tableRequests.map(x => x.table);
            this._getDBSchema(tables).done(dbSchema => {
                tableRequests.forEach(tableRequest => {
                    var schemaTable = dbSchema.tables.filter(x => x.name === tableRequest.table.name)[0];
                    if (!schemaTable) {
                        tableRequest.deferred.reject();
                        return;
                    }
                    tableRequest.table.columns = schemaTable.columns;
                    tableRequest.deferred.resolve(tableRequest.table);
                });
            }).fail(() => tableRequests.forEach(request => request.deferred.reject()));
        }));
        this.getItems = (pathRequest) => {
            var deferred = external_jQuery_["Deferred"]();
            if (!pathRequest.fullPath) {
                this.getDbSchema().done((dbSchema) => {
                    deferred.resolve(external_jQuery_["map"](dbSchema.tables, (item) => {
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
    }
    _getDBSchema(tables) {
        return this._getDBSchemaCallback(this.connection, tables);
    }
    _getDBSchemaCallback(connection, tables) {
        return getDBSchemaCallback(this._requestWrapper, connection, tables);
    }
    _getDBStoredProcedures(connection) {
        return getDBStoredProceduresCallback(this._requestWrapper, connection);
    }
    getDbSchema() {
        if (!this._dbSchema || this._dbSchema.state() === 'rejected')
            this._dbSchema = this._getDBSchema();
        return this._dbSchema;
    }
    getDbStoredProcedures() {
        if (!this._dbStoredProceduresSchema || this._dbStoredProceduresSchema.state() === 'rejected')
            this._dbStoredProceduresSchema = this._getDBStoredProcedures(this.connection);
        return this._dbStoredProceduresSchema;
    }
    getDbTable(tableName) {
        if (!this._tables[tableName]) {
            var deferred = external_jQuery_["Deferred"]();
            this._tables[tableName] = deferred.promise();
            this.getDbSchema().done((dbSchema) => {
                var table = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(dbSchema.tables, table => table.name === tableName);
                if (!table) {
                    deferred.reject();
                    Object(external_DevExpress_Analytics_Internal_["isCustomizedWithUpdateLocalizationMethod"])('The schema does not contain the specified table: ') ?
                        Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The schema does not contain the specified table: ') + "'" + tableName + "'." :
                        Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The schema does not contain the specified table: "{0}".', 'DataAccessStringId.TableNotInSchemaValidationException'), tableName);
                }
                else if (table.columns.length > 0) {
                    deferred.resolve(table);
                }
                else {
                    this._tableRequests.push({ table: table, deferred: deferred });
                }
            }).fail(() => deferred.reject());
        }
        return this._tables[tableName];
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/resultTable.js

var resultTableSerializationInfo = [
    { propertyName: 'tableName', modelName: '@Name' },
    {
        propertyName: 'columns', modelName: 'Fields', array: true, info: [
            { propertyName: 'name', modelName: '@Name' },
            { propertyName: 'propertyType', modelName: '@Type' }
        ]
    }
];
class resultTable_ResultTable {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    getInfo() {
        return resultTableSerializationInfo;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/resultSet.js



var resultSetSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'tables', modelName: 'Views', array: true }
];
class resultSet_ResultSet {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
        this.tables = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model && model['Views'] || [], (item) => {
            return new resultTable_ResultTable(item, serializer);
        });
    }
    getInfo() {
        return resultSetSerializationInfo;
    }
    static from(model, serializer) {
        return model && new resultSet_ResultSet(model['DataSet'], serializer) || null;
    }
    static toJson(value, serializer, refs) {
        return { 'DataSet': serializer.serialize(value, resultSetSerializationInfo, refs) };
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/json/jsonSchemaNode.js





var JsonNodeType;
(function (JsonNodeType) {
    JsonNodeType[JsonNodeType["Object"] = 0] = "Object";
    JsonNodeType[JsonNodeType["Array"] = 1] = "Array";
    JsonNodeType[JsonNodeType["Property"] = 2] = "Property";
})(JsonNodeType || (JsonNodeType = {}));
class jsonSchemaNode_JsonNode {
    constructor(model, serializer) {
        this.nodes = [];
        if (!model)
            return;
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
        var innerNodes = model['Node'];
        var currentNodes = innerNodes instanceof Array ?
            deserializeToCollection(innerNodes, (nodeModel) => new jsonSchemaNode_JsonNode(nodeModel)).sort((a, b) => { return a.name().localeCompare(b.name()); })
            : !innerNodes ? [] : [new jsonSchemaNode_JsonNode(innerNodes)];
        this.nodes = currentNodes;
    }
    static from(model, serializer) {
        return new jsonSchemaNode_JsonNode(model, serializer);
    }
    static toJsonNodes(value, serializer, refs) {
        return (value || []).map(item => jsonSchemaNode_JsonNode.toJsonNode(item, serializer, refs));
    }
    static toJsonNode(value, serializer, refs, recoursive = true) {
        var obj = serializer.serialize(value, jsonSchemaNodeSerializationInfo, refs);
        var nodes = recoursive ? jsonSchemaNode_JsonNode.toJsonNodes(value.nodes, serializer, refs) : [];
        if (nodes.length > 0)
            obj['Node'] = nodes;
        return obj;
    }
    getInfo() {
        return jsonSchemaNodeSerializationInfo;
    }
}
class jsonSchemaNode_JsonSchemaNode extends jsonSchemaNode_JsonNode {
    constructor(model, serializer) {
        super(model['Node'], serializer);
        this.nodeType = JsonNodeType[JsonNodeType.Object];
        this.valueType = 'Unknown';
        this.displayName = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('root');
        this.selected = external_ko_["observable"](false);
    }
    static from(model, serializer) {
        return new jsonSchemaNode_JsonSchemaNode(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        if (!value)
            return {};
        var obj = { Node: jsonSchemaNode_JsonNode.toJsonNode(value, serializer, refs, false) };
        obj.Node['Node'] = jsonSchemaNode_JsonNode.toJsonNodes(value.nodes, serializer, refs);
        return obj;
    }
    getInfo() {
        return jsonSchemaNodeSerializationInfo;
    }
}
class jsonSchemaNode_JsonSchemaRootNode extends jsonSchemaNode_JsonNode {
    constructor(model, serializer) {
        super(model);
        this._rootElementList = null;
    }
    static from(model, serializer) {
        return new jsonSchemaNode_JsonSchemaRootNode(model, serializer);
    }
    static toJson(value, serializer, refs) {
        return jsonSchemaNode_JsonSchemaNode.toJson(value.nodes[0], serializer, refs);
    }
    getInfo() {
        return jsonSchemaRootNodeSerializationInfo;
    }
    getRootElementPartList(allowObjectRootElements = true) {
        if (this._rootElementList)
            return this._rootElementList;
        if (this.nodes.length === 0)
            return [];
        this._rootElementList = [];
        var node = this.nodes[0];
        var currentPath = {
            fullPath: external_ko_["unwrap"](node.name),
            path: '',
            pathParts: [external_ko_["unwrap"](node.name)]
        };
        this._fillRootElementList(node, currentPath, allowObjectRootElements);
        this._rootElementList.sort((a, b) => { return a.fullPath.localeCompare(b.fullPath); });
        return this._rootElementList;
    }
    _fillRootElementList(node = this.nodes[0], currentPath = { fullPath: 'root', path: '', pathParts: ['root'] }, allowObjectRootElements) {
        if (!node)
            return this._rootElementList;
        var nodeType = external_ko_["unwrap"](node.nodeType);
        if (nodeType == JsonNodeType[JsonNodeType.Property])
            return;
        if (nodeType === JsonNodeType[JsonNodeType.Array]) {
            this._rootElementList.push(currentPath);
            return;
        }
        if ((allowObjectRootElements && nodeType === JsonNodeType[JsonNodeType.Object])) {
            this._rootElementList.push(currentPath);
        }
        (node.nodes || []).forEach(x => {
            var nextPath = this._getNextPath(currentPath, x.name());
            this._fillRootElementList(x, nextPath, allowObjectRootElements);
        });
        return this._rootElementList;
    }
    _getNextPath(currentPath, nodeName) {
        var _nodeName = !currentPath.fullPath ? nodeName : [currentPath.fullPath, nodeName].join('.');
        return {
            pathParts: currentPath.pathParts.concat(nodeName),
            fullPath: _nodeName,
            path: nodeName
        };
    }
}
var jsonSchemaNodeSerializationInfo = [
    { propertyName: 'nodes', modelName: 'Node', from: jsonSchemaNode_JsonNode.from, toJsonObject: jsonSchemaNode_JsonNode.toJsonNodes },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'selected', modelName: '@Selected', from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'nodeType', modelName: '@NodeType' },
    { propertyName: 'type', modelName: '@Type' }
];
var jsonSchemaRootNodeSerializationInfo = [
    { propertyName: 'nodes', modelName: 'Node', from: jsonSchemaNode_JsonSchemaRootNode.from, toJsonObject: jsonSchemaNode_JsonSchemaRootNode.toJsonNodes }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/json/jsonAuthenticationInfo.js

class jsonAuthenticationInfo_JsonAuthenticationInfo {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model || {});
    }
    static from(model, serializer) {
        return new jsonAuthenticationInfo_JsonAuthenticationInfo(model, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    getInfo() {
        return [
            { propertyName: 'password', modelName: '@password', defaultVal: '' },
            { propertyName: 'userName', modelName: '@user', defaultVal: '' }
        ];
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/json/jsonParameter.js





var JsonParameterType;
(function (JsonParameterType) {
    JsonParameterType[JsonParameterType["PathParameter"] = 0] = "PathParameter";
    JsonParameterType[JsonParameterType["QueryParameter"] = 1] = "QueryParameter";
    JsonParameterType[JsonParameterType["Header"] = 2] = "Header";
})(JsonParameterType || (JsonParameterType = {}));
class jsonParameter_JsonParameter extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer) {
        super();
        this.expression_Prefix = 'expression:';
        this.namePlaceholder = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Name', 'AnalyticsCoreStringId.CollectionEditor_Name_Placeholder');
        this.valuePlaceholder = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Value', 'AnalyticsCoreStringId.CollectionEditor_Value_Placeholder');
        this._editingValue = external_ko_["observable"]('');
        this._expression = { value: external_ko_["observable"]('') };
        this.isExpression = external_ko_["observable"](false);
        this.itemsProvider = null;
        this._parameterTypes = parameterTypes;
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
        this._initEditingProperties();
        this._disposables.push(this.value = external_ko_["computed"](() => {
            var expressionValue = (this.expression_Prefix + this._expression.value());
            var editingValue = this._editingValue();
            return this.isExpression.peek() ? expressionValue : editingValue;
        }));
    }
    static from(model, serializer) {
        return new jsonParameter_JsonParameter(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    _initEditingProperties() {
        var currentValue = this.value() || '';
        if (currentValue.indexOf(this.expression_Prefix) === 0) {
            this.isExpression(true);
            this._expression.value(currentValue.substring(this.expression_Prefix.length));
        }
        else {
            this._editingValue(currentValue);
        }
    }
    switchEditors() {
        var newIsExpression = !this.isExpression();
        this.isExpression(newIsExpression);
        if (newIsExpression) {
            this._expression.value(this._editingValue() ? "'" + this._editingValue() + "'" : '');
        }
        else {
            this._editingValue('');
        }
    }
    getInfo() {
        return [
            { propertyName: 'name', modelName: '@Name', displayName: 'Name', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
            { propertyName: 'value', modelName: '@Value', displayName: 'Value', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
            { propertyName: 'itemType', modelName: '@ItemType', defaultVal: JsonParameterType[JsonParameterType.PathParameter], alwaysSerialize: true }
        ];
    }
}
var parameterTypes = [
    { value: JsonParameterType[JsonParameterType.PathParameter], displayValue: 'Path Parameter', localizationId: 'AnalyticsCoreStringId.JsonDSWizard_ChooseJsonSourcePage_PathParameter' },
    { value: JsonParameterType[JsonParameterType.QueryParameter], displayValue: 'Query Parameter', localizationId: 'AnalyticsCoreStringId.JsonDSWizard_ChooseJsonSourcePage_QueryParameter' },
    { value: JsonParameterType[JsonParameterType.Header], displayValue: 'Header', localizationId: 'AnalyticsCoreStringId.JsonDSWizard_ChooseJsonSourcePage_Header' }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/json/jsonSource.js





class jsonSource_JsonSource extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model = {}, serializer) {
        super();
        this.sourceType = external_ko_["observable"]();
        this.uri = external_ko_["observable"]();
        this.json = external_ko_["observable"]();
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
        this._disposables.push(this.uri.subscribe((newUri) => {
            newUri && this.sourceType(jsonSource_JsonSource._URIJSONSOURCE_TYPE);
        }));
        this._disposables.push(this.json.subscribe((newJsonString) => {
            newJsonString && this.sourceType(jsonSource_JsonSource._CUSTOMJSONSOURCE_TYPE);
        }));
        function _getJsonParametersModelDeserialized(parameterModels, itemType) {
            if (parameterModels && Array.isArray(parameterModels[JsonParameterType[itemType]]) && parameterModels[JsonParameterType[itemType]])
                parameterModels = parameterModels[JsonParameterType[itemType]];
            return Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(parameterModels, (item) => {
                if (!item['@ItemType'])
                    item['@ItemType'] = JsonParameterType[itemType];
                return new jsonParameter_JsonParameter(item, serializer);
            });
        }
        this.queryParameters = _getJsonParametersModelDeserialized(model['QueryParameters'], JsonParameterType.QueryParameter);
        this.headers = _getJsonParametersModelDeserialized(model['Headers'], JsonParameterType.Header);
        this.pathParameters = _getJsonParametersModelDeserialized(model['PathParameters'], JsonParameterType.PathParameter);
    }
    static from(model, serializer) {
        return new jsonSource_JsonSource(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, jsonSourceSerializationInfo, refs);
    }
    getInfo() {
        return jsonSourceSerializationInfo;
    }
    serialize(includeRootTag = false) {
        return includeRootTag ? { 'Source': this.serialize() } : (new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).serialize(this);
    }
    resetSource() {
        this.sourceType('');
        this.json('');
        this.uri('');
    }
}
jsonSource_JsonSource._URIJSONSOURCE_TYPE = 'DevExpress.DataAccess.Json.UriJsonSource';
jsonSource_JsonSource._CUSTOMJSONSOURCE_TYPE = 'DevExpress.DataAccess.Json.CustomJsonSource';
var jsonSourceSerializationInfo = [
    { propertyName: 'sourceType', modelName: '@SourceType', defaultVal: '' },
    { propertyName: 'json', modelName: '@Json', defaultVal: '' },
    { propertyName: 'uri', modelName: '@Uri', defaultVal: '' },
    { propertyName: 'authenticationInfo', modelName: 'AuthenticationInfo', from: jsonAuthenticationInfo_JsonAuthenticationInfo.from, toJsonObject: jsonAuthenticationInfo_JsonAuthenticationInfo.toJson },
    { propertyName: 'headers', modelName: 'Headers', array: true },
    { propertyName: 'queryParameters', modelName: 'QueryParameters', array: true },
    { propertyName: 'pathParameters', modelName: 'PathParameters', array: true }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/json/_jsonSchemaProvider.js





var _getJsonSchemaCallback = (requestWrapper, jsonDataSource, parameters = []) => {
    var deferred = external_jQuery_["Deferred"]();
    requestWrapper.getJsonSchema(jsonDataSource, parameters)
        .done(data => {
        try {
            var jsonSchema = JSON.parse(data.jsonSchemaJSON);
            var jsonSchemaModel = new jsonSchemaNode_JsonSchemaRootNode(jsonSchema);
            deferred.resolve(jsonSchemaModel);
        }
        finally {
            if (deferred.state() === 'pending')
                deferred.reject();
        }
    })
        .fail(data => {
        Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Schema loading failed. {0}', 'DxDesignerStringId.Error_SchemaLoadingFailed'), Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(data)));
        deferred.reject();
    });
    return deferred.promise();
};
var getJsonSchemaCallback = _getJsonSchemaCallback;
function _setGetJsonSchemaCallback(func) { getJsonSchemaCallback = func; }
function _resetGetJsonSchemaCallback() { getJsonSchemaCallback = _getJsonSchemaCallback; }

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/json/jsonSchemaProvider.js




class jsonSchemaProvider_JsonSchemaProvider extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(jsonDataSource, _requestWrapper = new requestwrapper_RequestWrapper()) {
        super();
        this._requestWrapper = _requestWrapper;
        this._jsonDataSource = jsonDataSource;
        this._disposables.push(this._jsonDataSource.source.sourceType.subscribe(() => {
            this._jsonSchemaPromise = null;
        }));
        this.getItems = (pathRequest) => {
            var getItemsDeferred = external_jQuery_["Deferred"]();
            var loadSchemaPromise = !this._jsonSchema ? this.getJsonSchema() : external_jQuery_["Deferred"]().resolve(this._jsonSchema).promise();
            loadSchemaPromise
                .done((jsonSchema) => {
                this._jsonSchema = jsonSchema;
                var schemaByPath = this.getSchemaByPath(pathRequest, jsonSchema);
                getItemsDeferred.resolve(schemaByPath);
            })
                .fail(getItemsDeferred.reject);
            return getItemsDeferred.promise();
        };
    }
    reset() {
        this._jsonSchemaPromise = null;
    }
    mapToDataMemberContract(nodes) {
        return external_jQuery_["map"]((nodes || []), (node) => {
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
    }
    getSchemaByPath(pathRequest, jsonSchema) {
        if (!pathRequest.fullPath) {
            return this.mapToDataMemberContract(jsonSchema.nodes);
        }
        else {
            var currentNodes = jsonSchema.nodes;
            for (var i = 0; i < pathRequest.pathParts.length; i++) {
                var pathPart = (currentNodes || []).filter((node) => node.name() == pathRequest.pathParts[i])[0];
                if (!pathPart)
                    return [];
                currentNodes = pathPart.nodes;
            }
            return this.mapToDataMemberContract(currentNodes);
        }
    }
    getJsonSchema(parameters = []) {
        if (!this._jsonSchemaPromise || this._jsonSchemaPromise.state() === 'rejected')
            this._jsonSchemaPromise = getJsonSchemaCallback(this._requestWrapper, this._jsonDataSource, parameters);
        return this._jsonSchemaPromise;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/json/jsonDataSource.js







class jsonDataSource_JsonDataSource extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer, requestWrapper = new requestwrapper_RequestWrapper()) {
        super();
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
        this.jsonSchemaProvider = new jsonSchemaProvider_JsonSchemaProvider(this, requestWrapper);
        this.source && this._disposables.push(this.source);
        this._disposables.push(this.connectionName.subscribe(() => {
            this.source.resetSource();
        }));
    }
    getInfo() {
        return jsonDataSourceSerializationInfo;
    }
    clone(serializer) {
        var serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        var serialized = serializer.serialize(this);
        return new jsonDataSource_JsonDataSource(serialized);
    }
    static from(model, serializer) {
        return new jsonDataSource_JsonDataSource(model, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, jsonDataSourceSerializationInfo, refs);
    }
    getSchema(parameters = []) {
        var deferred = external_jQuery_["Deferred"]();
        this.jsonSchemaProvider.getJsonSchema(parameters)
            .done((schema) => {
            this.schema = schema;
            deferred.resolve(schema);
        })
            .fail(() => {
            this.schema = null;
            deferred.reject();
        });
        return deferred.promise();
    }
}
var jsonDataSourceSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'connectionName', modelName: '@ConnectionName' },
    { propertyName: 'rootElement', modelName: '@RootElement', defaultVal: 'root' },
    { propertyName: 'schema', modelName: 'Schema', from: jsonSchemaNode_JsonSchemaRootNode.from, toJsonObject: jsonSchemaNode_JsonSchemaRootNode.toJson },
    { propertyName: 'source', modelName: 'Source', from: jsonSource_JsonSource.from, toJsonObject: jsonSource_JsonSource.toJson }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/connectionOptions.js



var connectionOptionsSerializationInfo = [
    { propertyName: 'closeConnection', modelName: '@CloseConnection', from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'commandTimeout', modelName: '@DbCommandTimeout', from: s => { var val = parseInt(s); if (isNaN(val))
            val = null; return external_ko_["observable"](val); }, defaultVal: null },
];
class connectionOptions_ConnectionOptions {
    constructor(model, serializer) {
        this.closeConnection = external_ko_["observable"](true);
        this.commandTimeout = external_ko_["observable"](null);
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    getInfo() {
        return connectionOptionsSerializationInfo;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/utils.js
var SqlQueryType = {
    customSqlQuery: 'CustomSqlQuery',
    tableQuery: 'SelectQuery',
    storedProcQuery: 'StoredProcQuery'
};
var JsonSourceType = {
    fileJsonSource: 'FileJsonSource',
    customJsonSource: 'CustomJsonSource',
    uriJsonSource: 'UriJsonSource'
};
var FederationQueryType;
(function (FederationQueryType) {
    FederationQueryType[FederationQueryType["SelectNode"] = 0] = "SelectNode";
    FederationQueryType[FederationQueryType["UnionNode"] = 1] = "UnionNode";
    FederationQueryType[FederationQueryType["SourceNode"] = 2] = "SourceNode";
    FederationQueryType[FederationQueryType["TransformationNode"] = 3] = "TransformationNode";
})(FederationQueryType || (FederationQueryType = {}));

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/dataSourceParameterMeta.js




function validateName(nameCandidate) {
    return nameCandidate && !nameCandidate.match(/[~`!"№;%\^:\?*\(\)&\-\+={}\[\]\|\\\/,\.<>'\s]/);
}
var dsParameterNameValidationRules = [{
        type: 'custom',
        validationCallback: (options) => { return validateName(options.value); },
        get message() {
            return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Name is required and should be a valid identifier.', 'AnalyticsCoreStringId.NameIsRequired_Error');
        }
    }];
var parameterValueSerializationsInfo = { propertyName: 'value', displayName: 'Value', localizationId: 'DevExpress.DataAccess.Parameter.Value', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') };
var dsParameterName = { propertyName: 'name', displayName: 'Name', localizationId: 'DevExpress.DataAccess.Parameter.Name', validationRules: dsParameterNameValidationRules, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') };
var dsParameterType = {
    propertyName: 'type', displayName: 'Type', localizationId: 'DevExpress.DataAccess.Parameter.Type', modelName: '@Type', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), valuesArray: [
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
        { value: external_DevExpress_Analytics_Internal_["ExpressionType"], displayValue: 'Expression', localizationId: 'DataAccessUIStringId.ParametersColumn_Expression' }
    ]
};
var dsExpressionResultType = {
    propertyName: 'resultType',
    displayName: 'Result Type',
    localizationId: 'DataAccessWebStringId.QueryBuilder_ResultType',
    modelName: '@ResultType',
    editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'),
    valuesArray: dsParameterType.valuesArray.filter(x => !Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(x.value))
};
var baseDSParamterSerializationsInfo = [
    { propertyName: '_name', modelName: '@Name' },
    { propertyName: '_value', modelName: '#text' },
    parameterValueSerializationsInfo,
    { propertyName: 'itemType', modelName: '@ItemType' }
];
var dsParameterSerializationInfo = [dsParameterName, dsParameterType, dsExpressionResultType].concat(baseDSParamterSerializationsInfo);
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
    var copyParamType = Object(external_DevExpress_Analytics_Internal_["extend"])(true, {}, dsParameterType);
    var newValuesArray = [];
    newValuesArray.push(dsParameterType.valuesArray.filter(item => item.value === type)[0] || storedProcAdditionValuesArray.filter(item => item.value === type)[0]);
    newValuesArray.push(dsParameterType.valuesArray.filter(item => Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(item.value))[0]);
    copyParamType.valuesArray = newValuesArray;
    var copyResultType = Object(external_DevExpress_Analytics_Internal_["extend"])(true, {}, dsExpressionResultType);
    copyResultType.valuesArray = newValuesArray.slice(0, 0);
    copyResultType.disabled = true;
    return [
        Object(external_DevExpress_Analytics_Internal_["extend"])({ disabled: true }, dsParameterName),
        copyParamType,
        copyResultType
    ].concat(baseDSParamterSerializationsInfo);
}

// EXTERNAL MODULE: external "DevExpress.Analytics.Widgets.Internal"
var external_DevExpress_Analytics_Widgets_Internal_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/expressionFunctions.js

var expressionFunctions = ((addins) => Object(external_DevExpress_Analytics_Widgets_Internal_["insertInFunctionDisplay"])(addins))({
    'String': {
        'CreateTable': [{ paramCount: 1, text: 'CreateTable(, )', displayName: 'CreateTable(Column1, ..., ColumnN)', descriptionStringId: 'ExpressionEditorStringId.Function_CreateTable' }],
        'FormatString': [{ paramCount: 1, text: 'FormatString(, )', displayName: 'FormatString(Format, Value1, ... , ValueN)', descriptionStringId: 'ExpressionEditorStringId.Function_FormatString' }]
    }
});

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/dataSourceParameter.js











function integerValueConverter(val, defaultVal, type) {
    return Object(external_DevExpress_Analytics_Internal_["integerValueConverter"])(val, defaultVal, type);
}
function floatValueConverter(val, defaultVal, type) {
    return Object(external_DevExpress_Analytics_Internal_["floatValueConverter"])(val, defaultVal, type);
}
function expressionValueConverter(val) {
    if (val instanceof Date) {
        var prependZero = (x) => (x < 10 ? '0' : '') + x;
        return Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])('#{0}/{1}/{2} {3}:{4}#', prependZero(val.getMonth() + 1), prependZero(val.getDate()), val.getFullYear(), prependZero(val.getHours()), prependZero(val.getMinutes()));
    }
    return (val || '').toString();
}
class dataSourceParameter_DataSourceParameterTypeValue {
    constructor(name, defaultValue, _valueConverter, realTypeName) {
        this.name = name;
        this.defaultValue = defaultValue;
        this.realTypeName = realTypeName;
        if (_valueConverter)
            this.valueConverter = (val) => _valueConverter(val, defaultValue, this.name);
    }
    get specifics() {
        return DBColumn.GetSpecific(this.realTypeName || this.name);
    }
}
var tryParseDate = val => {
    var date;
    try {
        date = Object(external_DevExpress_Analytics_Internal_["parseDate"])(val);
    }
    catch (e) {
        date = dateDefaultValue();
    }
    return date;
};
var dateDefaultValue = () => {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
};
class dataSourceParameter_DataSourceParameter extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer, _serializationsInfo = dsParameterSerializationInfo) {
        super();
        this._serializationsInfo = _serializationsInfo;
        this._valueInfo = external_ko_["observable"](parameterValueSerializationsInfo);
        this._parametersFunctions = expressionFunctions;
        this.isValid = external_ko_["observable"](true);
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Parameter' }));
        this._disposables.push(this.name = external_ko_["pureComputed"]({
            read: () => { return this._name(); },
            write: (value) => { if (validateName(value))
                this._name(value); }
        }));
        this._expressionValue = external_ko_["observable"]({
            value: this._value,
            functions: this._parametersFunctions
        });
        this._disposables.push(this.type.subscribe((val) => {
            if (Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(val)) {
                this.resultType(this._previousResultType);
            }
            else {
                this.resultType(null);
                this._previousResultType = val;
            }
            this._updateValueInfo(val);
        }));
        this._previousResultType = (Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(this.type.peek()))
            ? this.resultType()
            : this.type();
        this.value = external_ko_["pureComputed"]({
            read: () => {
                return Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(this.type()) ? this._expressionValue() : this._value();
            },
            write: (val) => {
                this._value(val);
            }
        });
        this._updateValueInfo(this.type.peek());
    }
    static _getTypeValue(typeName, resultType = null) {
        var result = dataSourceParameter_DataSourceParameter._typeValues.filter((type) => { return type.name === typeName; });
        if (result.length > 0) {
            if (resultType && Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(typeName))
                result[0].realTypeName = resultType;
            return result[0];
        }
        return { name: typeName, defaultValue: null, specifics: 'String', disableEditor: true };
    }
    _getTypeValue(typeName) {
        return dataSourceParameter_DataSourceParameter._getTypeValue(typeName, this.resultType());
    }
    _tryConvertValue(value, typeValue) {
        if (!dataSourceParameter_DataSourceParameter._isValueValid(value))
            return typeValue.defaultValue;
        var converter = typeValue.valueConverter || (val => { return val; }), newValue = converter(value);
        return dataSourceParameter_DataSourceParameter._isValueValid(newValue) ? newValue : typeValue.defaultValue;
    }
    static _isValueValid(value) {
        return value !== void 0 && value !== null && !isNaN(typeof value === 'string' ? '' : value);
    }
    getEditorType(type) {
        return Object(external_DevExpress_Analytics_Internal_["getEditorType"])(type);
    }
    _updateValueInfo(newType) {
        var typeValue = this._getTypeValue(newType);
        var newValue = this._tryConvertValue(this._value(), typeValue);
        var expressionOptions = this._expressionValue.peek();
        this._expressionValue(null);
        this._value(null);
        this._valueInfo(Object(external_DevExpress_Analytics_Internal_["extend"])({}, parameterValueSerializationsInfo, {
            editor: this.getEditorType(typeValue.name),
            disabled: typeValue.disableEditor === true,
            editorOptions: {
                onFocusOut: (params) => {
                    this.isValid(params.component.option('isValid'));
                }
            }
        }));
        this._expressionValue(expressionOptions);
        this._value(newValue);
    }
    get specifics() {
        var realTypeName = (Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(this.type.peek()))
            ? this.resultType()
            : this.type();
        var result = dataSourceParameter_DataSourceParameter._typeValues.filter((type) => { return type.name === realTypeName; });
        if (result.length > 0)
            return result[0].specifics;
        return 'string';
    }
    getInfo() {
        if (this.type) {
            var info = Object(external_DevExpress_Analytics_Internal_["extend"])(true, [], this._serializationsInfo);
            info.splice(info.indexOf(info.filter((prop) => { return prop.propertyName === 'value'; })[0]), 1, this._valueInfo());
            return info;
        }
        return this._serializationsInfo;
    }
    isPropertyVisible(propName) {
        if (propName === 'resultType')
            return Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(this.type());
        return true;
    }
}
dataSourceParameter_DataSourceParameter._typeValues = [
    new dataSourceParameter_DataSourceParameterTypeValue('System.DateTime', dateDefaultValue(), tryParseDate),
    new dataSourceParameter_DataSourceParameterTypeValue('System.String', ''),
    new dataSourceParameter_DataSourceParameterTypeValue('System.SByte', '0', integerValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Int16', '0', integerValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Int32', '0', integerValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Int64', '0', integerValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Byte', '0', integerValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.UInt16', '0', integerValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.UInt32', '0', integerValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.UInt64', '0', integerValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Decimal', '0', floatValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Double', '0', floatValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Single', '0', floatValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Boolean', false, val => val !== void 0 ? String(val).toLowerCase() === 'true' : val),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Guid', '00000000-0000-0000-0000-000000000000'),
    new dataSourceParameter_DataSourceParameterTypeValue(external_DevExpress_Analytics_Internal_["ExpressionType"], '', expressionValueConverter),
    new dataSourceParameter_DataSourceParameterTypeValue('System.Char', ''),
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/customSqlQueryMeta.js
var customQuerySerializationsInfo = [
    { propertyName: 'type', modelName: '@Type' },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'sqlString', modelName: 'Sql', defaultVal: '' },
    { propertyName: 'parameters', modelName: 'Parameters', array: true },
    { propertyName: 'itemType', modelName: '@ItemType' }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/customSqlQuery.js







class customSqlQuery_CustomSqlQuery {
    constructor(model, parent, serializer) {
        this.parent = parent;
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Query' }));
        this.type = external_ko_["pureComputed"](() => SqlQueryType.customSqlQuery);
        this.parameters = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Parameters'], (item) => {
            return new dataSourceParameter_DataSourceParameter(item, serializer);
        });
    }
    getInfo() {
        return customQuerySerializationsInfo;
    }
    generateName() {
        return 'CustomSqlQuery';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/masterDetailRelationMeta.js
var masterDetailRelationSerializationsInfo = [
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

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/masterDetailRelation.js





class masterDetailRelation_MasterDetailRelation extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer) {
        super();
        this.name = external_ko_["pureComputed"]({
            read: () => {
                return this._customName() || this.masterQuery() + this.detailQuery();
            },
            write: (value) => {
                this._customName(value);
            },
            deferEvaluation: true
        });
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Relation' }));
        this._disposables.push(this.name);
    }
    dispose() {
        super.dispose();
        this.disposeObservableArray(this.keyColumns);
    }
    createKeyColumn() {
        var newKeyColumn = {
            masterColumn: external_ko_["observable"](),
            detailColumn: external_ko_["observable"](),
            itemType: 'KeyColumn'
        };
        this.keyColumns.push(newKeyColumn);
    }
    getInfo() {
        return masterDetailRelationSerializationsInfo;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/sqlDataConnection.js



class sqlDataConnection_SqlDataConnection {
    constructor(model, serializer) {
        this.name = external_ko_["observable"]();
        this.parameteres = external_ko_["observable"]();
        this.fromAppConfig = external_ko_["observable"](true);
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new sqlDataConnection_SqlDataConnection(model, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, sqlDataConnectionSerializationInfo, refs);
    }
    getInfo() {
        return sqlDataConnectionSerializationInfo;
    }
}
var sqlDataConnectionSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'parameteres', modelName: 'Parameters' },
    { propertyName: 'fromAppConfig', modelName: '@FromAppConfig', defaultVal: false, from: external_DevExpress_Analytics_Utils_["parseBool"] }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/tableQueryMeta.js
var tableQuerySerializationsInfo = [
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

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/tableQuery.js







class tableQuery_TableQuery {
    constructor(model, parent, serializer) {
        this.parent = parent;
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Query' }));
        this.type = external_ko_["pureComputed"](() => { return SqlQueryType.tableQuery; });
        this.parameters = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Parameters'], item => new dataSourceParameter_DataSourceParameter(item, serializer));
    }
    tables() {
        return this['_tablesObject']['tables']();
    }
    getInfo() {
        return tableQuerySerializationsInfo;
    }
    generateName() {
        return this.tables().length > 0 ? (this.tables()[0].alias() || this.tables()[0].name()) : 'SelectQuery';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/storedProcQueryMeta.js
var storedProcQuerySerializationsInfo = [
    { propertyName: 'type', modelName: '@Type' },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'procName', modelName: 'ProcName' },
    { propertyName: 'parameters', modelName: 'Parameters', array: true },
    { propertyName: 'itemType', modelName: '@ItemType' }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/storedProcQuery.js









class storedProcQuery_StoredProcQuery {
    constructor(model, parent, serializer) {
        this.parent = parent;
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Query' }));
        this.type = external_ko_["pureComputed"](() => SqlQueryType.storedProcQuery);
        this.parameters = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Parameters'], item => {
            var parameterValueType = item['@Type'];
            if (Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(parameterValueType))
                parameterValueType = item['@ResultType'] || parameterValueType;
            return new dataSourceParameter_DataSourceParameter(item, serializer, storedProcParameterSerializationsInfo(parameterValueType));
        });
    }
    getInfo() {
        return storedProcQuerySerializationsInfo;
    }
    generateName() {
        return this.procName() || 'Query';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/sql/sqlDataSource.js













var sqlDataSourceSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'connection', modelName: 'Connection', from: sqlDataConnection_SqlDataConnection.from, toJsonObject: sqlDataConnection_SqlDataConnection.toJson },
    { propertyName: 'queries', modelName: 'Queries', array: true },
    { propertyName: 'relations', modelName: 'Relations', array: true },
    { propertyName: 'resultSet', modelName: 'ResultSchema', from: resultSet_ResultSet.from, toJsonObject: resultSet_ResultSet.toJson },
    { propertyName: 'itemType', modelName: '@ItemType' }
];
class sqlDataSource_SqlDataSource extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer, requestWrapper = new requestwrapper_RequestWrapper()) {
        super();
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'SqlDataSource' }));
        var deprecateName = this['_model']['Name'];
        if (deprecateName) {
            if (!this.name()) {
                this.name(deprecateName);
            }
            delete this['_model']['Name'];
        }
        this.queries = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Queries'], (item) => this.createQuery(item, serializer));
        this.relations = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Relations'], (item) => {
            return new masterDetailRelation_MasterDetailRelation(item, serializer);
        });
        if (this.connection && model['ConnectionOptions'])
            this.connection.options = new connectionOptions_ConnectionOptions(model['ConnectionOptions'], serializer);
        this.dbSchemaProvider = new dbSchemaProvider_DBSchemaProvider(this.connection, requestWrapper);
        this._disposables.push(this.connection.name.subscribe(() => {
            this.queries([]);
            this.relations([]);
            this.resultSet = null;
        }));
    }
    getInfo() {
        return sqlDataSourceSerializationInfo;
    }
    createQuery(item, serializer) {
        if (item['@Type'] === SqlQueryType.customSqlQuery) {
            return new customSqlQuery_CustomSqlQuery(item, this, serializer);
        }
        else if (item['@Type'] === SqlQueryType.tableQuery) {
            return new tableQuery_TableQuery(item, this, serializer);
        }
        else if (item['@Type'] === SqlQueryType.storedProcQuery) {
            return new storedProcQuery_StoredProcQuery(item, this, serializer);
        }
        else {
            throw new Error('Unknown sql query type.');
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/object/objectDataSource.js



class objectDataSource_ObjectDataSource extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor() {
        super(...arguments);
        this.name = external_ko_["observable"]();
    }
    setState(state) {
        this.ctor = state.ctor;
        this.dataMember = state.dataMember;
        this.selectedType = state.selectedType;
        this.id = Object(external_DevExpress_Analytics_Internal_["guid"])().replace(/-/g, '');
        this.name(state.dataSourceName);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/object/objectSchema.js



class ObjectDataMemberBase {
    constructor(model) {
        model && (() => {
            this.name = model.name;
            this.displayName = model.displayName;
            this.dataMember = model.dataMember;
        })();
    }
}
class ObjectParameter extends ObjectDataMemberBase {
    constructor(model) {
        super(model);
        model && (() => {
            this.value = model.value;
            this.type = model.type;
            this.resultType = model.resultType;
        })();
    }
}
class objectSchema_ObjectDataSourceMethodBase extends ObjectDataMemberBase {
    constructor(model) {
        super(model);
        this.parameters = deserializeToCollection(model.parameters, (parameters) => new ObjectParameter(parameters));
    }
}
class objectSchema_ObjectDataMember extends objectSchema_ObjectDataSourceMethodBase {
    constructor(model) {
        super(model);
        this.disabled = external_ko_["observable"](false);
        this.memberType = model && model.memberType;
        this.isStatic = model.isStatic;
    }
    static empty() {
        return new objectSchema_ObjectDataMember({
            displayName: objectSchema_ObjectDataMember.entireObject(),
            name: objectSchema_ObjectDataMember.entireObject(),
            parameters: []
        });
    }
    isEntireObject() {
        return this.name == objectSchema_ObjectDataMember.entireObject() && this.displayName == objectSchema_ObjectDataMember.entireObject();
    }
    isAvailable() {
        return !this.disabled();
    }
}
objectSchema_ObjectDataMember.entireObject = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Entire Object', 'AnalyticsCoreStringId.ObjectDSWizard_ConfigureParameters_EntireObject');
class ObjectCtor extends objectSchema_ObjectDataSourceMethodBase {
}
class objectSchema_ObjectType extends ObjectDataMemberBase {
    constructor(model) {
        super(model);
        this.ctors = deserializeToCollection(model.ctors, (ctor) => new ObjectCtor(ctor));
        this.members = deserializeToCollection(model.members, (member) => new objectSchema_ObjectDataMember(member));
    }
    updateMembers(selectedCtor) {
        this.members.forEach(member => {
            if (selectedCtor) {
                member.disabled(false);
            }
            else {
                member.disabled(member.isEntireObject() ? true : !member.isStatic);
            }
        });
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/editorTemplates.js

var editorTemplates = new external_DevExpress_Analytics_Widgets_["EditorTemplates"]();

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/metadata.js



var query_builder_metadata_name = { propertyName: 'name', modelName: '@Name', displayName: 'Name', localizationId: 'DevExpress.DataAccess.Sql.SqlQuery.Name', disabled: true, editor: editorTemplates.getEditor('text') };
var metadata_alias = { propertyName: 'alias', modelName: '@Alias', displayName: 'Alias', localizationId: 'DataAccessUIStringId.QueryBuilderColumns_Alias', defaultVal: '', editor: editorTemplates.getEditor('text') };
var query_builder_metadata_text = { propertyName: 'text', modelName: '@Text', displayName: 'Text', editor: editorTemplates.getEditor('text') };
var selected = { propertyName: 'selected', displayName: 'Output', editor: editorTemplates.getEditor('bool'), localizationId: 'DataAccessUIStringId.QueryBuilderColumns_Output' };
var query_builder_metadata_size = { propertyName: 'size', modelName: '@Size', defaultVal: '100,125', from: external_DevExpress_Analytics_Elements_["Size"].fromString };
var query_builder_metadata_location = { propertyName: 'location', modelName: '@Location', from: external_DevExpress_Analytics_Elements_["Point"].fromString };
var metadata_sizeLocation = [query_builder_metadata_size, query_builder_metadata_location];
var metadata_unknownSerializationsInfo = [query_builder_metadata_name].concat(metadata_sizeLocation);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federatedQueries/sourceQuery.js





var sourceQuerySerializationsInfo = [
    { propertyName: 'queryType', modelName: '@QueryType' },
    query_builder_metadata_name,
    metadata_alias,
    { propertyName: 'sourceName', modelName: '@SourceName' },
];
class sourceQuery_SourceQuery extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer, sourceName, _sourcePath) {
        super();
        this._sourcePath = _sourcePath;
        model['@SourceName'] = model['@SourceName'] || sourceName;
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, model);
        this._disposables.push(this.queryType = external_ko_["pureComputed"](() => { return FederationQueryType[FederationQueryType.SourceNode]; }));
    }
    getInfo() {
        return sourceQuerySerializationsInfo;
    }
    getPath() {
        if (this._sourcePath)
            return this._sourcePath;
        if (this.name()) {
            if (this.name() === this.sourceName())
                return this.name();
            var dataSourceName = this.sourceName().slice(0, this.sourceName().indexOf(this.name()) - 1);
            return dataSourceName + '.' + this.name();
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federatedQueryExpression.js



var expressionSerializationInfo = [
    { propertyName: 'table', modelName: '@NodeAlias' },
    query_builder_metadata_name,
    metadata_alias,
    { propertyName: 'expressionType', modelName: '@ExpressionType' },
    { propertyName: 'columnExpression', modelName: '@ColumnExpression' }
];
var FederatedQueryExpressionType;
(function (FederatedQueryExpressionType) {
    FederatedQueryExpressionType[FederatedQueryExpressionType["SelectColumnExpression"] = 0] = "SelectColumnExpression";
    FederatedQueryExpressionType[FederatedQueryExpressionType["SelectExpression"] = 1] = "SelectExpression";
    FederatedQueryExpressionType[FederatedQueryExpressionType["SelectAllColumnsExpression"] = 2] = "SelectAllColumnsExpression";
    FederatedQueryExpressionType[FederatedQueryExpressionType["SelectAllNodeColumnsExpression"] = 3] = "SelectAllNodeColumnsExpression";
    FederatedQueryExpressionType[FederatedQueryExpressionType["SelectRowCountExpression"] = 4] = "SelectRowCountExpression";
})(FederatedQueryExpressionType || (FederatedQueryExpressionType = {}));
class federatedQueryExpression_FederatedQueryExpression {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Expression' }));
    }
    getInfo() {
        return expressionSerializationInfo;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federationDataSourceMeta.js
var federationDataSourceSerializationInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'queries', modelName: 'Queries', array: true },
    { propertyName: 'relations', modelName: 'Relations', array: true },
    { propertyName: 'sources', modelName: 'Sources', array: true },
    {
        modelName: 'SerializableSourceMap',
        propertyName: 'serializableSourceMap',
        array: true,
        info: [
            { modelName: '@DataSource', propertyName: 'dataSource', link: true },
            { modelName: '@Name', propertyName: 'name' }
        ]
    }
];
var sourceSerializationInfo = [
    { propertyName: 'sourceName', modelName: '@SourceName' },
    { propertyName: 'dataMember', modelName: '@DataMember' },
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federationSource.js




class federationSource_FederationSource extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer, path, sourceName) {
        super();
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        if (path) {
            var pathParts = path.split('.');
            if (pathParts.length > 1) {
                model['@DataMember'] = pathParts.slice(1).join('_');
            }
        }
        if (sourceName) {
            model['@SourceName'] = sourceName;
        }
        serializer.deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Source' }));
    }
    getInfo() {
        return sourceSerializationInfo;
    }
    getDataSourceName() {
        return this.hasDataMember() ? this.sourceName().slice(0, this.sourceName().lastIndexOf(this.dataMember()) - 1)
            : this.sourceName();
    }
    getPath() {
        return this.getDataSourceName() + (this.hasDataMember() ? '.' + this.dataMember() : '');
    }
    hasDataMember() {
        return this.dataMember() && this.sourceName().lastIndexOf(this.dataMember()) !== 0;
    }
}

// EXTERNAL MODULE: external "DevExpress.Analytics.Criteria"
var external_DevExpress_Analytics_Criteria_ = __webpack_require__(7);

// EXTERNAL MODULE: external "DevExpress.Analytics.Criteria.Utils"
var external_DevExpress_Analytics_Criteria_Utils_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/controlsFactory.js

var controlsFactory = new external_DevExpress_Analytics_Utils_["ControlsFactory"]();

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/queryElementModel.js


class queryElementModel_QueryElementBaseViewModel extends external_DevExpress_Analytics_Elements_["ElementViewModel"] {
    constructor(control, parent, serializer) {
        super(control, parent, serializer);
    }
    getControlFactory() {
        return controlsFactory;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/joinConditionModel.js





class joinConditionModel_JoinConditionViewModel extends routedConnectorModel_RoutedConnectorViewModel {
    constructor(control, relation, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])(control, { '@ControlType': 'JoinCondition', '@ItemType': 'KeyColumn' }), relation, serializer);
        this.parentColumn = external_ko_["pureComputed"](() => relation.parentTable().getColumn(this.parentColumnName()));
        this.nestedColumn = external_ko_["pureComputed"](() => relation.nestedTable().getColumn(this.nestedColumnName()));
        this.joinType = relation.joinType;
        this.left = external_ko_["pureComputed"](() => relation.parentTableName() + '.' + this.parentColumnName());
        this.right = external_ko_["pureComputed"](() => relation.nestedTableName() + '.' + this.nestedColumnName());
        this._disposables.push(external_ko_["computed"](() => {
            if (this.parentColumn() && this.nestedColumn()) {
                var result = determineConnectingPoints(this.parentColumn(), this.nestedColumn());
                this.startPoint().connectingPoint(result.start);
                this.endPoint().connectingPoint(result.end);
            }
        }));
    }
    getControlFactory() {
        return controlsFactory;
    }
    preInitProperties() {
        this.startPoint = external_ko_["observable"]();
        this.endPoint = external_ko_["observable"]();
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/relationModelMeta.js
var relationSerializationInfo = [
    { propertyName: 'joinType', modelName: '@Type' },
    { propertyName: 'parentTableName', modelName: '@Parent' },
    { propertyName: 'nestedTableName', modelName: '@Nested' },
    { propertyName: 'conditions', modelName: 'KeyColumns', defaultVal: [], array: true },
    { propertyName: 'itemType', modelName: '@itemType' }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/relationModel.js






class relationModel_RelationViewModel extends queryElementModel_QueryElementBaseViewModel {
    constructor(model, query, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ControlType': 'Relation', '@ItemType': 'Relation' }), query, serializer);
        this.parentTable = external_ko_["observable"](query.getTable(this.parentTableName.peek()));
        this.nestedTable = external_ko_["observable"](query.getTable(this.nestedTableName.peek()));
        this.parentTableName = external_ko_["pureComputed"](() => this.parentTable().actualName());
        this.nestedTableName = external_ko_["pureComputed"](() => this.nestedTable().actualName());
        this.conditions = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['KeyColumns'], (item) => {
            return new joinConditionModel_JoinConditionViewModel(item, this, serializer);
        });
    }
    _getConditionNumber() {
        var result = this.conditions().length + 1;
        var existingNumbers = this.conditions().map(_c => _c.seriesNumber());
        for (var index = 0; index < this.conditions().length; index++) {
            if (existingNumbers.indexOf(index + 1) !== -1)
                continue;
            result = index + 1;
            break;
        }
        return result;
    }
    getInfo() {
        return relationSerializationInfo;
    }
    addChild(control) {
        var condition = control;
        if (this.conditions && this.conditions.indexOf(condition) === -1) {
            condition.seriesNumber(this._getConditionNumber());
            condition.parentModel(this);
            this.conditions.push(condition);
        }
    }
    removeChild(control) {
        var index = this.conditions().indexOf(control);
        if (index > -1)
            this.conditions.splice(index, 1);
        if (this.conditions().length === 0)
            this.parentModel().removeChild(this);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federatedQueries/subNode.js










var subNodeSerializationInfo = [
    { propertyName: 'condition', modelName: '@Condition', defaultVal: '' },
    {
        propertyName: 'joinType',
        modelName: '@JoinType',
        defaultVal: 'Inner',
    },
    { propertyName: 'query', modelName: 'Query' },
];
class subNode_SubNode {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'JoinElement' }));
        if (model['Query'])
            this.query = external_ko_["observable"](new sourceQuery_SourceQuery(model['Query']));
    }
    static deserializeRelationModel(subNodeQuery, relation) {
        var parentTableName = relation.parentTableName();
        var nestedTableName = relation.nestedTableName();
        var conditionStrings = [];
        relation.conditions().forEach(condition => {
            var firstCondition = '[' + nestedTableName + '.' + condition.nestedColumnName() + ']';
            var secondCondition = '[' + parentTableName + '.' + condition.parentColumnName() + ']';
            var operator = external_DevExpress_Analytics_Criteria_Utils_["operatorTokens"][condition.operator()];
            var conditionString = firstCondition + ' ' + operator + ' ' + secondCondition;
            conditionStrings.push(conditionString);
        });
        var subNode = new subNode_SubNode({ '@JoinType': relation.joinType(), '@Condition': conditionStrings.join(' And ') });
        subNode.query(subNodeQuery);
        return subNode;
    }
    _parsePath(condition) {
        if (condition[0] === '[' && condition[condition.length - 1] === ']')
            return external_DevExpress_Analytics_Criteria_Utils_["CriteriaOperatorStateMachine"].parse(condition)['propertyName'];
        return condition;
    }
    _createCondition(parent, nested, operator) {
        return {
            '@ControlType': 'JoinCondition',
            '@ItemType': 'KeyColumn',
            '@Operator': operator,
            '@Nested': nested,
            '@Parent': parent
        };
    }
    _conditionBinary(operator) {
        var leftPath = this._parsePath(operator.leftPart['propertyName']);
        var rightPath = this._parsePath(operator.rightPart['propertyName']);
        var _operator = external_DevExpress_Analytics_Criteria_["BinaryOperatorType"][operator.operatorType];
        return this._createCondition(rightPath.split('.')[1], leftPath.split('.')[1], _operator);
    }
    createRelationModel(query) {
        var result = external_DevExpress_Analytics_Criteria_Utils_["CriteriaOperatorStateMachine"].parse(this.condition());
        var _operands = [];
        if (result instanceof external_DevExpress_Analytics_Criteria_["GroupOperator"]) {
            result.operands.forEach(operand => {
                if (operand instanceof external_DevExpress_Analytics_Criteria_["BinaryOperator"])
                    _operands.push(operand);
            });
        }
        else if (result instanceof external_DevExpress_Analytics_Criteria_["BinaryOperator"]) {
            _operands.push(result);
        }
        var parentTable = this._parsePath(_operands[0].rightPart['propertyName']).split('.')[0];
        var nestedTable = this._parsePath(_operands[0].leftPart['propertyName']).split('.')[0];
        var _keyColumns = {};
        for (var j = 0; j < _operands.length; j++) {
            var operator = _operands[j];
            _keyColumns['Item' + (j + 1)] = this._conditionBinary(operator);
        }
        return new relationModel_RelationViewModel({
            '@Parent': parentTable,
            '@Nested': nestedTable,
            '@Type': this.joinType(),
            'KeyColumns': _keyColumns
        }, query, new external_DevExpress_Analytics_Utils_["ModelSerializer"]());
    }
    getInfo() {
        return subNodeSerializationInfo;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federatedQueries/selectQuery.js









var selectQuerySerializationsInfo = [
    { propertyName: 'queryType', modelName: '@QueryType' },
    { propertyName: 'alias', modelName: '@Alias' },
    { propertyName: 'expressions', modelName: 'Expressions', array: true },
    { propertyName: 'subNodes', modelName: 'SubNodes', array: true },
    { propertyName: 'root', modelName: 'Root' },
    { propertyName: 'itemType', modelName: '@ItemType' }
];
class selectQuery_SelectQuery extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer, _path) {
        super();
        this._path = _path;
        this.init(model, serializer, _path);
    }
    get sources() {
        return external_ko_["observableArray"]([this.root()].concat(this.subNodes().map(node => node.query())).map(sourceQuery => new federationSource_FederationSource({}, new external_DevExpress_Analytics_Utils_["ModelSerializer"](), sourceQuery.getPath(), sourceQuery.sourceName())));
    }
    getInfo() {
        return selectQuerySerializationsInfo;
    }
    generateName() {
        return this.root() ? this.root().alias() : 'SelectQuery';
    }
    init(model, serializer, rootPath) {
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Query' }));
        this._disposables.push(this.queryType = external_ko_["pureComputed"](() => { return FederationQueryType[FederationQueryType.SelectNode]; }));
        this.expressions = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Expressions'], (item) => {
            return new federatedQueryExpression_FederatedQueryExpression(item, serializer);
        });
        this.subNodes = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['SubNodes'], (item) => {
            return new subNode_SubNode(item, serializer);
        });
        if (model['Root'])
            this.root = external_ko_["observable"](new sourceQuery_SourceQuery(model['Root'], serializer, this.alias(), rootPath));
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federatedQueries/transformQuery.js







var transformQuerySerializationsInfo = [
    { propertyName: 'queryType', modelName: '@QueryType' },
    { propertyName: 'alias', modelName: '@Alias' },
    { propertyName: 'transformationRules', modelName: 'TransformationRules', array: true },
    { propertyName: 'root', modelName: 'Root' },
    { propertyName: 'itemType', modelName: '@ItemType' }
];
var transformationRuleSerializationsInfo = [
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'alias', modelName: '@Alias' },
    { propertyName: 'unfold', modelName: '@Unfold' },
    { propertyName: 'flatten', modelName: '@Flatten' },
    { propertyName: 'itemType', modelName: '@ItemType' }
];
class transformQuery_TransformQuery extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, serializer) {
        super();
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Query' }));
        this._disposables.push(this.queryType = external_ko_["pureComputed"](() => { return FederationQueryType[FederationQueryType.TransformationNode]; }));
        this.transformationRules = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['TransformationRules'], (item) => {
            return new transformQuery_FederationTransformationRule(item, serializer);
        });
        if (model['Root'])
            this.root = external_ko_["observable"](new sourceQuery_SourceQuery(model['Root'], serializer));
    }
    get sources() {
        return external_ko_["observableArray"]([new federationSource_FederationSource({}, new external_DevExpress_Analytics_Utils_["ModelSerializer"](), this.root().getPath(), this.root().sourceName())]);
    }
    getInfo() {
        return transformQuerySerializationsInfo;
    }
    generateName() {
        return this.root() && this.root().sourceName().split('_').pop();
    }
}
class transformQuery_FederationTransformationRule {
    constructor(model, serializer) {
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'TransformationRule' }));
    }
    getInfo() {
        return transformationRuleSerializationsInfo;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federatedQueriesContainer.js








class federatedQueriesContainer_FederatedQueriesContainer extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, dataSources, _serializer) {
        super();
        this.dataSources = dataSources;
        this._serializer = _serializer;
        this.sources = external_ko_["observableArray"]();
        this._serializer = _serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
    }
    _dataSourceName(dataSource) {
        var _a;
        return ((_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.data) === null || _a === void 0 ? void 0 : _a.name()) || (dataSource === null || dataSource === void 0 ? void 0 : dataSource.name);
    }
    getQueryNameFromPath(path) {
        var pathParts = path.split('.');
        var dataSource = this.dataSources().filter(x => x.ref == pathParts[0] || x.id == pathParts[0])[0];
        pathParts[0] = this._dataSourceName(dataSource) || pathParts[0];
        return pathParts.join('_');
    }
    getPathFromQueryName(sourceName) {
        for (var source of this.sources()) {
            if (source.sourceName() === sourceName) {
                var path = source.getPath();
                var pathParts = path.split('.');
                var dataSourceId = pathParts.shift();
                var dataSource = this.dataSources().filter(x => this._dataSourceName(x) == dataSourceId)[0];
                dataSourceId = dataSource && (dataSource.ref || dataSource.id) || dataSourceId;
                return dataSourceId + (pathParts.length > 0 ? '.' + pathParts.join('.') : '');
            }
        }
    }
    createQuery(item, dataSource) {
        if (item['@QueryType'] === FederationQueryType[FederationQueryType.SelectNode]) {
            return new selectQuery_SelectQuery(item, this._serializer, (dataSource || this).getPathFromQueryName(item['Root'] && item['Root']['@SourceName']));
        }
        return null;
    }
    addSource(source, queryPath) {
        if (source instanceof federationSource_FederationSource) {
            var existedSource = this.sources().filter(x => x.sourceName() == source.sourceName())[0];
            !existedSource && this.sources.push(source);
            return;
        }
        var existedSource = this.sources().filter(x => x.sourceName() == source)[0];
        !existedSource && this.sources.push(new federationSource_FederationSource({}, this._serializer, queryPath, source));
    }
    removeSource(sourceName) {
        var source = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this.sources(), source => source.sourceName() === sourceName);
        if (!this.queries().some(query => query.expressions().some(exp => exp.table() === sourceName)))
            this.sources.remove(source);
    }
    addSelectQuery(queryPath, columnName) {
        var queryName = this.getQueryNameFromPath(queryPath);
        var query = this.queries().filter(query => query.alias() === queryName)[0];
        if (!query) {
            query = new selectQuery_SelectQuery({
                '@Alias': queryName,
                'Root': {},
            }, this._serializer, queryPath);
            this.queries.push(query);
            this.addSource(queryName, queryPath);
        }
        if (!columnName || query.expressions().filter(expression => expression.name() == columnName)[0]) {
            return;
        }
        var expression = new federatedQueryExpression_FederatedQueryExpression({
            '@NodeAlias': queryName,
            '@Name': columnName,
            '@ExpressionType': FederatedQueryExpressionType[FederatedQueryExpressionType.SelectColumnExpression]
        }, this._serializer);
        query.expressions.push(expression);
    }
    removeQuery(queryName) {
        var query = this.queries().filter(query => query.alias() === queryName)[0];
        this.queries.remove(query);
        var source = this.sources().filter(x => x.sourceName() == queryName)[0];
        source && this.sources.remove(source);
    }
    removeExpression(columnName, queryPath) {
        var queryName = this.getQueryNameFromPath(queryPath);
        var query = this.queries().filter(query => query.alias() === queryName)[0];
        var expression = query.expressions().filter(x => x.name() == columnName)[0];
        query.expressions.remove(expression);
        if (query.expressions().length == 0) {
            this.removeQuery(queryName);
        }
    }
    dispose() {
        super.dispose();
        this.disposeObservableArray(this.sources);
        this.disposeObservableArray(this.queries);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federatedQueries/unionQuery.js






var unionQuerySerializationsInfo = [
    { propertyName: 'queryType', modelName: '@QueryType' },
    { propertyName: 'unionType', modelName: '@UnionType' },
    { propertyName: 'alias', modelName: '@Alias' },
    { propertyName: 'queries', modelName: 'UnionElements', array: true }
];
var UnionTypes;
(function (UnionTypes) {
    UnionTypes[UnionTypes["Union"] = 0] = "Union";
    UnionTypes[UnionTypes["UnionAll"] = 1] = "UnionAll";
})(UnionTypes || (UnionTypes = {}));
class unionQuery_UnionQuery extends federatedQueriesContainer_FederatedQueriesContainer {
    constructor(model, dataSources, serializer) {
        super(model, dataSources, serializer);
        (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Query' }));
        this._disposables.push(this.queryType = external_ko_["pureComputed"](() => { return FederationQueryType[FederationQueryType.UnionNode]; }));
        this.queries = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['UnionElements'], (item) => this.createQuery(item));
    }
    getInfo() {
        return unionQuerySerializationsInfo;
    }
    generateName() {
        return this.queries()[0] && this.queries()[0].alias().split('_').pop();
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federationMasterDetailRelation.js



var keyColumnInfoArray = [
    { propertyName: 'masterColumn', modelName: '@Parent' },
    { propertyName: 'detailColumn', modelName: '@Nested' },
    { propertyName: 'itemType', modelName: '@ItemType' }
];
var masterDetailRelationSerializationInfoArray = [
    { propertyName: 'masterQuery', modelName: '@MasterQueryName' },
    { propertyName: 'detailQuery', modelName: '@DetailQueryName' },
    { propertyName: '_customName', modelName: '@RelationName' },
    { propertyName: 'keyColumns', modelName: 'KeyColumns', array: true, info: keyColumnInfoArray },
    { propertyName: 'itemType', modelName: '@ItemType' }
];
class federationMasterDetailRelation_FederationMasterDetailRelation extends masterDetailRelation_MasterDetailRelation {
    static create(relation) {
        var serializer = new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        var relation = new federationMasterDetailRelation_FederationMasterDetailRelation(serializer.serialize(relation), serializer);
        relation.keyColumns().forEach(x => x['getInfo'] = () => keyColumnInfoArray);
        return relation;
    }
    constructor(model, serializer) {
        super(model, serializer);
        this.getInfo = () => masterDetailRelationSerializationInfoArray;
        if (model['@MasterQueryName'] && model['@DetailQueryName']) {
            (serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'Relation' }));
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federationSerializableModel.js



class federationSerializableModel_SerializableDataFederationDataSource extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(dataSource, serializer) {
        super();
        this.dataSources = external_ko_["observableArray"]([]);
        this.serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        if (dataSource) {
            this.dataSource = dataSource;
            this.dataSources(this._currentDataSources);
        }
    }
    get _currentDataSources() {
        var dataSources = [];
        this.dataSource && this.dataSource.serializableSourceMap().reduce((result, x) => {
            if (result.indexOf(x.dataSource()) === -1)
                result.push(x.dataSource());
            return result;
        }, dataSources);
        return dataSources;
    }
    _collectDependentDataSources(item, resultArray) {
        if (item.serializableSourceMap) {
            item.serializableSourceMap().forEach(x => this._collectDependentDataSources(x.dataSource(), resultArray));
        }
        var existedItem = resultArray.filter(x => external_ko_["unwrap"](x.name) === external_ko_["unwrap"](item.name))[0];
        !existedItem && resultArray.push(item);
    }
    dispose() {
        this.dataSource = null;
        this.dataSources = null;
    }
    getInfo() {
        return [
            { propertyName: 'dataSources', modelName: 'dataSources', array: true },
            { propertyName: 'dataSource', modelName: 'dataSource' }
        ];
    }
    collectDependentDataSources() {
        var dependentDataSources = [];
        this._currentDataSources.forEach(item => this._collectDependentDataSources(item, dependentDataSources));
        return dependentDataSources;
    }
    serialize() {
        var clonedModel = new federationSerializableModel_SerializableDataFederationDataSource(null);
        clonedModel.dataSource = this.dataSource;
        clonedModel.dataSources(this.collectDependentDataSources());
        var serializedModel = this.serializer.serialize(clonedModel);
        clonedModel.dispose();
        return serializedModel;
    }
    getSerializableFederationDataSourceInfo() {
        var serializedModel = this.serialize();
        return {
            dataSource: JSON.stringify(serializedModel.dataSource),
            dataSources: Object.keys(serializedModel.dataSources).map(key => JSON.stringify(serializedModel.dataSources[key]))
        };
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/_dbSchemaFederationDataSourceProvider.js




class _dbSchemaFederationDataSourceProvider_DBSchemaFederationDataSourceProvider extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(itemsProvider) {
        super();
        this._rootItems = [];
        this.getItems = itemsProvider.getItems;
    }
    getDbSchema() {
        var deferred = external_jQuery_["Deferred"]();
        if (this._rootItems.length)
            deferred.resolve(this._rootItems);
        else {
            this.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"]('')).done(rootItems => {
                deferred.resolve(rootItems);
            });
        }
        return deferred.promise();
    }
    getDbTable(tableName, path) {
        var $deferred = external_jQuery_["Deferred"]();
        this.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](path)).done(items => {
            var columns = items.map(x => {
                return {
                    Name: x.displayName || x.name
                };
            });
            $deferred.resolve(new dbTable_DBTable({ Name: tableName, columns: columns }));
        });
        return $deferred.promise();
    }
    dispose() {
        super.dispose();
        this.getItems = null;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/federation/federationDataSource.js












class federationDataSource_FederationDataSource extends federatedQueriesContainer_FederatedQueriesContainer {
    constructor(model, dataSources, fielListProvider, serializer) {
        super(model, dataSources, serializer);
        this.dataSources = dataSources;
        this.fielListProvider = fielListProvider;
        this.serializableSourceMap = external_ko_["observableArray"]();
        this._serializer.deserialize(this, Object(external_DevExpress_Analytics_Internal_["extend"])(model, { '@ItemType': 'FederationDataSource' }));
        this.sources = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Sources'], (item) => {
            return new federationSource_FederationSource(item, serializer);
        });
        this.queries = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Queries'], (item) => this.createQuery(item));
        this.relations = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(model['Relations'], (item) => {
            return new federationMasterDetailRelation_FederationMasterDetailRelation(item, this._serializer);
        });
        if (fielListProvider)
            this._disposables.push(this.dbSchemaProvider = new _dbSchemaFederationDataSourceProvider_DBSchemaFederationDataSourceProvider(this.fielListProvider));
        this.updateSerializableModel();
    }
    getInfo() {
        return federationDataSourceSerializationInfo;
    }
    getSerializableModel() {
        return this._serializableModel;
    }
    createQuery(item) {
        var query = super.createQuery(item);
        if (!query) {
            if (item['@QueryType'] === FederationQueryType[FederationQueryType.UnionNode]) {
                return new unionQuery_UnionQuery(item, this.dataSources, this._serializer);
            }
            else if (item['@QueryType'] === FederationQueryType[FederationQueryType.TransformationNode]) {
                return new transformQuery_TransformQuery(item, this._serializer);
            }
        }
        return query;
    }
    updateSerializableModel() {
        this.serializableSourceMap = external_ko_["observableArray"]();
        this.sources().forEach(source => {
            var dataSourceName = source.getDataSourceName();
            dataSourceName && this.serializableSourceMap().push({
                name: external_ko_["observable"](source.sourceName()),
                dataSource: external_ko_["observable"](this.dataSources().filter(x => this._dataSourceName(x) === dataSourceName)[0].data)
            });
        });
        this._serializableModel = new federationSerializableModel_SerializableDataFederationDataSource(this, this._serializer);
    }
    dispose() {
        super.dispose();
        this.disposeObservableArray(this.relations);
        this._serializableModel.dispose();
    }
    get dependentDataSources() {
        var serializableModel = this.getSerializableModel();
        return serializableModel.getSerializableFederationDataSourceInfo().dataSources;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/analytics-data.js







































































// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dataSource/_utils.js


function generateQueryUniqueName(queries, query, nameProperty = 'name') {
    var name = (query[nameProperty]() || query.generateName()).replace('.', '_');
    return Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(queries, item => item[nameProperty]() === name) ?
        Object(external_DevExpress_Analytics_Internal_["getUniqueNameForNamedObjectsArray"])(queries, name + '_') : name;
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/analytics-data-internal.js











// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/analytics-data-utils.js



// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/analytics-data-metadata.js













// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pageId.js
var DataSourceWizardPageId = {
    ChoosePredefinedDataSourcePage: 'choosePredefinedDataSourcePage',
    ChooseDataSourceTypePage: 'chooseDataSourceTypePage',
    ConfigureMasterDetailRelationshipsPage: 'configureMasterDetailRelationshipsPage'
};
var SqlDataSourceWizardPageId = {
    ChooseConnectionPage: 'chooseSqlConnectionPage',
    ConfigureQueryPage: 'configureSqlQueryPage',
    ConfigureParametersPage: 'configureSqlParametersPage',
    MultiQueryConfigurePage: 'multiSqlQueryConfigurePage',
    MultiQueryConfigureParametersPage: 'multiSqlQueryConfigureParametersPage',
    FederatedQueryConfigurePage: 'federatedQueryConfigurePage'
};
var FederationDataSourceWizardPageId = {
    FederatedQueryConfigurePage: 'federatedQueryConfigurePage',
    FederatedMasterDetailRelationshipsPage: 'federatedMasterDetailRelationshipsPage'
};
var JsonDataSourceWizardPageId = {
    ChooseJsonSourcePage: 'chooseJsonSourcePage',
    ChooseJsonSchemaPage: 'chooseJsonSchemaPage',
    ChooseConnectionPage: 'chooseJsonConnectionPage',
    SpecifyJsonConnectionPage: 'specifyJsonConnectionPage'
};
var ObjectDataSourceWizardPageId = {
    ChooseTypesPage: 'chooseObjectDataSourceTypesPage',
    ChooseDataMembersPage: 'chooseObjectDataSourceDataMembersPage',
    ConfigureParametersPage: 'configureObjectDataSourceParametersPage'
};
var FullscreenDataSourceWizardPageId = {
    ChooseDataSourceTypePage: DataSourceWizardPageId.ChooseDataSourceTypePage,
    SpecifySqlDataSourceSettingsPage: 'specifySqlDataSourceSettingsPage',
    SpecifyJsonDataSourceSettingsPage: 'specifyJsonDataSourceSettingsPage',
    SpecifyObjectDataSourceSettingsPage: 'specifyObjectDataSourceSettingsPage',
    SpecifyFederationDataSourceSettingsPage: 'specifyFederationDataSourceSettingsPage',
    SelectDataSourcePage: 'selectDataSourcePage'
};
var FullscreenDataSourceWizardSectionId = {
    SpecifyJsonConnectionPage: JsonDataSourceWizardPageId.SpecifyJsonConnectionPage,
    ChooseJsonSchemaPage: JsonDataSourceWizardPageId.ChooseJsonSchemaPage,
    ChooseJsonSourcePage: JsonDataSourceWizardPageId.ChooseJsonSourcePage,
    ChooseSqlConnectionPage: SqlDataSourceWizardPageId.ChooseConnectionPage,
    ConfigureFederatedQueriesPage: FederationDataSourceWizardPageId.FederatedQueryConfigurePage,
    ConfigureFederatedMasterDetailRelationshipsPage: FederationDataSourceWizardPageId.FederatedMasterDetailRelationshipsPage,
    ConfigureQueryPage: SqlDataSourceWizardPageId.MultiQueryConfigurePage,
    ConfigureQueryParametersPage: SqlDataSourceWizardPageId.MultiQueryConfigureParametersPage,
    ConfigureMasterDetailRelationshipsPage: DataSourceWizardPageId.ConfigureMasterDetailRelationshipsPage
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_constants.js
const __loadingStateFunctionName = '__loadingState';
const __nextActionFunctionName = '__nextAction';

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/wizardPageBase.js


class wizardPageBase_WizardPageBase extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor() {
        super(...arguments);
        this.changeAlways = false;
        this._onChange = () => void 0;
    }
    dispose() {
        super.dispose();
        this._onChange = () => void 0;
    }
    commit() {
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    onChange(callback) {
        this._onChange = callback;
    }
    initialize(state, stateChanged) {
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    canNext() {
        return true;
    }
    canFinish() {
        return false;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/chooseDataSourceTypePage.js







var DataSourceType;
(function (DataSourceType) {
    DataSourceType[DataSourceType["NoData"] = 0] = "NoData";
    DataSourceType[DataSourceType["Sql"] = 1] = "Sql";
    DataSourceType[DataSourceType["Json"] = 2] = "Json";
    DataSourceType[DataSourceType["Object"] = 3] = "Object";
    DataSourceType[DataSourceType["Federation"] = 4] = "Federation";
})(DataSourceType || (DataSourceType = {}));
class chooseDataSourceTypePage_TypeItem {
    constructor(textDefault, textID, imageClassName, imageTemplateName, type) {
        this.text = Object(external_DevExpress_Analytics_Utils_["getLocalization"])(textDefault, textID);
        this.imageClassName = imageClassName;
        this.imageTemplateName = imageTemplateName;
        this.type = type;
    }
}
class chooseDataSourceTypePage_ChooseDataSourceTypePage extends wizardPageBase_WizardPageBase {
    constructor(_dataSourceTypeOptions) {
        super();
        this._dataSourceTypeOptions = _dataSourceTypeOptions;
        this._itemClick = (item) => {
            this.selectedItem(item);
        };
        this._IsSelected = (item) => {
            return this.selectedItem().type === item.type;
        };
        this.selectedItem = external_ko_["observable"]();
        this.typeItems = this._createTypeItems();
        this._disposables.push(this.selectedItem.subscribe(() => this._onChange()));
        this._extendCssClass = external_jQuery_["noop"];
    }
    canNext() {
        return this.selectedItem() != null;
    }
    canFinish() {
        return false;
    }
    _goToNextPage() {
        this[__nextActionFunctionName] && this[__nextActionFunctionName]();
    }
    commit() {
        return external_jQuery_["Deferred"]().resolve({ dataSourceType: this.selectedItem().type }).promise();
    }
    _createTypeItems() {
        var typeItems = [];
        if (this._dataSourceTypeOptions.sqlDataSourceAvailable) {
            typeItems.push(new chooseDataSourceTypePage_TypeItem('Database', 'DataAccessUIStringId.DSTypeSql', 'sqldatasource', 'dxrd-svg-wizard-SqlDataSource', DataSourceType.Sql));
        }
        if (this._dataSourceTypeOptions.jsonDataSourceAvailable) {
            typeItems.push(new chooseDataSourceTypePage_TypeItem('JSON', 'DataAccessUIStringId.DSTypeJson', 'jsondatasource', 'dxrd-svg-wizard-JsonDataSource', DataSourceType.Json));
        }
        if (this._dataSourceTypeOptions.objectDataSourceAvailable) {
            typeItems.push(new chooseDataSourceTypePage_TypeItem('Object', 'DataAccessUIStringId.DSTypeObject', 'objectdatasource', 'dxrd-svg-wizard-ObjectDataSource', DataSourceType.Object));
        }
        if (this._dataSourceTypeOptions.federationDataSourceAvailable) {
            typeItems.push(new chooseDataSourceTypePage_TypeItem('Data Federation', 'DataAccessUIStringId.DSTypeFederation', 'federationdatasource', 'dxrd-svg-wizard-FederationDataSource', DataSourceType.Federation));
        }
        return typeItems;
    }
    initialize(state) {
        if (!this.typeItems || this.typeItems.length === 0) {
            this.selectedItem(null);
        }
        else {
            var type = state.dataSourceType !== undefined ? state.dataSourceType : this.typeItems[0].type;
            this.selectedItem(Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this.typeItems, (item) => item.type === type));
        }
        return external_jQuery_["Deferred"]().resolve().promise();
    }
}
function _registerChooseDataSourceTypePage(factory, dataSourceTypeOptions) {
    factory.registerMetadata(DataSourceWizardPageId.ChooseDataSourceTypePage, {
        setState: (data, state) => {
            state.dataSourceType = data.dataSourceType;
        },
        getState: (state) => {
            return state;
        },
        resetState: (state, defaultState) => {
            state.dataSourceType = defaultState.dataSourceType;
        },
        create: () => {
            return new chooseDataSourceTypePage_ChooseDataSourceTypePage(dataSourceTypeOptions);
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Select the data source type.', 'DataAccessUIStringId.WizardPageChooseDSType'),
        template: 'dxrd-page-choose-datasource-type'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/sqlDataSourceWizard/_sqlDataSourceWrapper.js


class _sqlDataSourceWrapper_SqlDataSourceWrapper {
    constructor(sqlDataSourceJSON, queryName, requestWrapper) {
        this.sqlDataSourceJSON = sqlDataSourceJSON;
        this.customQueries = [];
        this.sqlDataSource = new sqlDataSource_SqlDataSource(sqlDataSourceJSON ? JSON.parse(sqlDataSourceJSON) : {}, undefined, requestWrapper);
        if (queryName) {
            this.sqlDataSource.queries().some((value, index) => {
                if (value.name() === queryName) {
                    this._queryIndex = index;
                    return true;
                }
                return false;
            });
        }
        else {
            this._queryIndex = this.sqlDataSource.queries().length;
        }
    }
    get sqlQuery() {
        return this.sqlDataSource.queries()[this._queryIndex];
    }
    set sqlQuery(val) {
        if (val)
            val.parent = this.sqlDataSource;
        this.sqlDataSource.queries()[this._queryIndex] = val;
    }
    saveCustomQueries() {
        var serializer = new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        return this.customQueries.length > 0 && this.customQueries.map(x => JSON.stringify(serializer.serialize(x)));
    }
    save() {
        return JSON.stringify(new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(this.sqlDataSource));
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/dataSourceWizardState.js









var _defaultRestoreSqlDataSourceFromState = (state, requestWrapper, dataSourceId) => {
    var wrapper = new _sqlDataSourceWrapper_SqlDataSourceWrapper(state.sqlDataSourceJSON, state.queryName, requestWrapper);
    state.name && wrapper.sqlDataSource.connection.name(state.name);
    var serializer = new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
    if (state.customQueries && state.customQueries.length > 0) {
        wrapper.customQueries = state.customQueries.map((query) => wrapper.sqlDataSource.createQuery(JSON.parse(query), serializer));
        wrapper.sqlDataSource.queries.push(...wrapper.customQueries);
    }
    if (state.relations && state.relations.length > 0) {
        wrapper.sqlDataSource.relations.push(...state.relations.map((relation) => new masterDetailRelation_MasterDetailRelation(JSON.parse(relation), serializer)));
    }
    wrapper.sqlDataSource.id = dataSourceId || Object(external_DevExpress_Analytics_Internal_["guid"])().replace(/-/g, '');
    return wrapper;
};
var _restoreSqlDataSourceFromState = _defaultRestoreSqlDataSourceFromState;
var _setRestoreSqlDataSourceFromState = (func) => { _restoreSqlDataSourceFromState = func; };
var _resetRestoreSqlDataSourceFromState = () => { _restoreSqlDataSourceFromState = _defaultRestoreSqlDataSourceFromState; };
var _defaultRestoreFederationDataSourceFromState = (state, usedDataSources, dataSourceId) => {
    var dataSource = new federationDataSource_FederationDataSource(JSON.parse(state.federationDataSourceJSON), usedDataSources);
    if (dataSourceId) {
        dataSource.id = dataSourceId;
    }
    if (state.relations && state.relations.length > 0) {
        dataSource.relations.push(...state.relations.map((relation) => new federationMasterDetailRelation_FederationMasterDetailRelation(JSON.parse(relation), new external_DevExpress_Analytics_Utils_["ModelSerializer"]())));
    }
    return dataSource;
};
var _restoreFederationDataSourceFromState = _defaultRestoreFederationDataSourceFromState;
var _defaultRestoreJsonDataSourceFromState = (state, requestWrapper, dataSourceId) => {
    var jsonDataSource = new jsonDataSource_JsonDataSource({
        'Source': state.jsonSource && JSON.parse(state.jsonSource) || {},
        'Schema': state.jsonScheme && JSON.parse(state.jsonScheme) || {},
        '@RootElement': state.rootElement || ''
    }, undefined, requestWrapper);
    state.connectionName && jsonDataSource.connectionName(state.connectionName);
    state.dataSourceName && jsonDataSource.name(state.dataSourceName);
    jsonDataSource.id = dataSourceId || Object(external_DevExpress_Analytics_Internal_["guid"])().replace(/-/g, '');
    return jsonDataSource;
};
var _restoreJsonDataSourceFromState = _defaultRestoreJsonDataSourceFromState;
function _setRestoreJsonDataSourceFromState(func) { _restoreJsonDataSourceFromState = func; }
function _resetRestoreJsonDataSourceFromState() { _restoreJsonDataSourceFromState = _defaultRestoreJsonDataSourceFromState; }
function _restoreObjectDataSourceFromState(state, requestWrapper, dataSourceId) {
    var objectDataSource = new objectDataSource_ObjectDataSource();
    objectDataSource.setState(state);
    if (dataSourceId)
        objectDataSource.id = dataSourceId;
    return objectDataSource;
}
function _createDefaultDataSourceWizardState(sqlDataSourceWizardState = {}, jsonDataSourceWizardState = { jsonSource: '' }, objectDataSourceWizardState = {}, federationDataSourceWizardState = {}) {
    return {
        dataSourceType: DataSourceType.Sql,
        jsonDataSourceWizard: jsonDataSourceWizardState,
        sqlDataSourceWizard: sqlDataSourceWizardState,
        objectDataSourceWizard: objectDataSourceWizardState,
        federationDataSourceWizard: federationDataSourceWizardState,
        dataSourceId: Object(external_DevExpress_Analytics_Internal_["guid"])().replace(/-/g, '')
    };
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/wizardPageMetadata.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/__wrappedWizardPage.js



class _wrappedWizardPage_WrappedWizardPage extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(pageId, page, template, description) {
        super();
        this.pageId = pageId;
        this.page = page;
        this.template = template;
        this.description = description;
        this._isInitialized = false;
        this._initDef = null;
        this.isChanged = true;
        if (page.onChange) {
            this.onChange = (callback) => page.onChange(callback);
        }
    }
    dispose() {
        this.onChange = null;
        this[__loadingStateFunctionName] = null;
        this.page.dispose();
        this._initDef && this._initDef.reject();
        this._initDef = null;
    }
    resetCommitedState() {
        this._lastCommitedState = null;
    }
    commit() {
        return this.page.commit().done((result) => {
            this.isChanged = JSON.stringify(this._lastCommitedState) !== JSON.stringify(result);
            this._lastCommitedState = result;
        });
    }
    initialize(state, force = false, stateChanged = false) {
        this._initDef && this._initDef.reject();
        this._initDef = external_jQuery_["Deferred"]();
        if (!this._isInitialized || force) {
            this._isInitialized = true;
            this.page.initialize(state, stateChanged).fail(() => {
                this._isInitialized = false;
                this._initDef && this._initDef.reject();
            }).done((result) => {
                this._initDef && this._initDef.resolve(result);
            });
        }
        else {
            this._initDef.resolve();
        }
        return this._initDef.promise();
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/IWizardPage.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/chooseSqlConnectionPage.js







class chooseSqlConnectionPage_ChooseSqlConnectionPage extends wizardPageBase_WizardPageBase {
    constructor(connectionStrings, _getSqlConnectionsCallback) {
        super();
        this._getSqlConnectionsCallback = _getSqlConnectionsCallback;
        this._connectionStrings = external_ko_["observableArray"]([]);
        this._selectedConnectionString = external_ko_["observableArray"]([]);
        this._connectionStrings = connectionStrings;
        this._disposables.push(this._selectedConnectionString.subscribe(() => this._onChange()));
    }
    initialize(state) {
        var selectConnection = (connections) => {
            if (connections.length === 1) {
                this._selectedConnectionString([connections[0]]);
            }
            else {
                var selectedString = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(connections, 'name', state.name) || connections[0];
                this._selectedConnectionString(selectedString ? [selectedString] : []);
            }
        };
        if (this._getSqlConnectionsCallback) {
            var deferred = external_jQuery_["Deferred"]();
            this._getSqlConnectionsCallback().done(connections => {
                this._connectionStrings(connections);
                selectConnection(connections);
                deferred.resolve(connections);
            }).fail(() => {
                deferred.reject();
            });
            return deferred.promise();
        }
        var connectionStrings = this._connectionStrings();
        selectConnection(connectionStrings);
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    canNext() {
        return this._selectedConnectionString().length !== 0;
    }
    commit() {
        var deferred = external_jQuery_["Deferred"]();
        if (this._selectedConnectionString()[0]) {
            deferred.resolve({
                name: this._selectedConnectionString()[0].name
            });
        }
        else {
            deferred.resolve();
        }
        return deferred.promise();
    }
}
function _registerChooseSqlConnectionPage(factory, connectionStrings, getSqlConnectionsCallback) {
    factory.registerMetadata(SqlDataSourceWizardPageId.ChooseConnectionPage, {
        create: () => {
            return new chooseSqlConnectionPage_ChooseSqlConnectionPage(connectionStrings, getSqlConnectionsCallback);
        },
        setState: (data, state) => {
            state.name = data.name;
        },
        getState: (state) => {
            return state.sqlDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.name = defaultState.name;
        },
        template: 'dxrd-page-connectionstring',
        description: Object(external_DevExpress_Analytics_Internal_["localizeWithUpdateLocalizationMethod"])('Choose a data connection') || Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose a data connection.', 'AnalyticsCoreStringId.SqlDSWizard_PageChooseConnection')
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/objectDataSource/_chooseObjectParameters.js







class _chooseObjectParameters_ObjectDataSourceParameterProperty extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(_parameter, _itemsProvider) {
        super();
        this._parameter = _parameter;
        this._itemsProvider = _itemsProvider;
        this.type = external_ko_["observable"]('');
        this.type(this._parameter.type);
        var typeValue = dataSourceParameter_DataSourceParameter._getTypeValue(this._parameter.resultType);
        this._initGetInfo(typeValue);
        new external_DevExpress_Analytics_Utils_["ModelSerializer"]().deserialize(this, {});
        this._subscribeProperties();
        this._afterInitialize();
    }
    switchPropertyType() {
        if (this.isExpression()) {
            this.type(this._parameter.resultType);
            this._parameter.value = this.value();
        }
        else {
            this.type(external_DevExpress_Analytics_Internal_["ExpressionType"]);
            this._parameter.value = this.expression.value();
        }
    }
    isExpression() {
        return Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(this.type());
    }
    _generateInfo(info, propertyName = 'value') {
        return Object(external_DevExpress_Analytics_Internal_["extend"])({}, {
            displayName: this._parameter.displayName,
            propertyName: propertyName,
            modelName: propertyName,
            editorOptions: {}
        }, info);
    }
    _initGetInfo(typeValue) {
        var info = [
            this._generateInfo({
                editor: Object(external_DevExpress_Analytics_Internal_["getEditorType"])(this._parameter.resultType),
                from: (val) => external_ko_["observable"]((typeValue.valueConverter || ((val) => val))(val)),
                defaultVal: !this.isExpression() && this._parameter.value || typeValue.defaultValue
            }),
            this._generateInfo({
                editor: { header: 'dx-objectdatasource-expression-popup' },
                from: (val) => {
                    return { value: external_ko_["observable"](val), itemsProvider: this._itemsProvider };
                },
                defaultVal: this.isExpression() && this._parameter.value || ''
            }, 'expression')
        ];
        this._disposables.push({ dispose: () => this.getInfo = undefined });
        this.getInfo = () => info;
    }
    _isDateTimeParamerterType() {
        return this._parameter.resultType === 'System.DateTime';
    }
    _patchOriginalParameterValue(value) {
        if (value && this._isDateTimeParamerterType() && value instanceof Date)
            this._parameter.value = Object(external_DevExpress_Analytics_Utils_["serializeDate"])(value);
        else
            this._parameter.value = value;
    }
    _afterInitialize() {
        if (!this.isExpression() && this._isDateTimeParamerterType()) {
            this._patchOriginalParameterValue(this.value());
        }
    }
    _subscribeProperties() {
        this._disposables.push(this.type.subscribe((newVal) => {
            this._parameter.type = newVal;
        }), this.expression.value.subscribe((newVal) => {
            this.isExpression() && (this._patchOriginalParameterValue(newVal));
        }), this.value.subscribe((newVal) => {
            !this.isExpression() && (this._patchOriginalParameterValue(newVal));
        }));
    }
    isPropertyVisible(propertyName) {
        return this.isExpression() ? propertyName === 'expression' : propertyName === 'value';
    }
}
class ObjectDataSourceParameterEditorAddon {
    constructor(_editor) {
        this._editor = _editor;
        this.imageTemplateName = 'dx-objectdatasource-expression';
    }
    _doWithModel(action) {
        var model = this._editor._model();
        if (model instanceof _chooseObjectParameters_ObjectDataSourceParameterProperty) {
            return action(model);
        }
    }
    switchEditors() {
        this._doWithModel((model) => model.switchPropertyType());
    }
    isExpression() {
        return this._doWithModel((model) => model.isExpression());
    }
}
class _chooseObjectParameters_ObjectDataSourceParameterGrid extends external_DevExpress_Analytics_Widgets_["ObjectProperties"] {
    constructor(x) {
        super(external_ko_["observable"](x));
        this.createEditorAddOn = (editor) => {
            var addon = new ObjectDataSourceParameterEditorAddon(editor);
            return {
                data: addon,
                templateName: 'dx-wizard-menu-box-editorswitch'
            };
        };
    }
}
class _chooseObjectParameters_ObjectDataSourceParametersModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(parametersMethod, itemsProvider) {
        super();
        this.displayName = parametersMethod.displayName;
        this._grids = parametersMethod.parameters.map(x => {
            var param = new _chooseObjectParameters_ObjectDataSourceParameterProperty(x, itemsProvider);
            var grid = new _chooseObjectParameters_ObjectDataSourceParameterGrid(param);
            this._disposables.push(param);
            this._disposables.push(grid);
            return grid;
        });
    }
}
class _chooseObjectParameters_ChooseObjectMemberParameters extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(_itemsProvider) {
        super();
        this._itemsProvider = _itemsProvider;
        this._ctorParametersObject = external_ko_["observable"]();
        this._dataMemberParametersObject = external_ko_["observable"]();
        this.hasParameters = () => {
            return this._dataMemberParametersObject() || this._ctorParametersObject();
        };
    }
    _updateParameters(propertyName, method) {
        this[propertyName]() && this[propertyName]().dispose();
        if (method && method.parameters.length > 0)
            this[propertyName](new _chooseObjectParameters_ObjectDataSourceParametersModel(method, this._itemsProvider));
        else
            this[propertyName](null);
    }
    updateCtorParameters(method) {
        this._updateParameters('_ctorParametersObject', method);
    }
    updateMethodParameters(method) {
        this._updateParameters('_dataMemberParametersObject', method);
    }
}
class ChooseObjectParameters extends _chooseObjectParameters_ChooseObjectMemberParameters {
    constructor(selectedCtor, selectedDataMembers, itemsProvider) {
        super(itemsProvider);
        this._disposables.push(selectedCtor.subscribe((ctor) => {
            this.updateCtorParameters(ctor);
        }));
        this._disposables.push(selectedDataMembers.subscribe(a => {
            this.updateMethodParameters(a[0]);
        }));
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/objectDataSourceWizard/configureObjectDataSourceParametersPage.js






class configureObjectDataSourceParametersPage_ConfigureObjectDataSourceParametersPage extends wizardPageBase_WizardPageBase {
    constructor(itemsProvider) {
        super();
        this._objectDataSource = new objectDataSource_ObjectDataSource();
        this._disposables.push(this._chooseObjectParameters = new _chooseObjectParameters_ChooseObjectMemberParameters(itemsProvider));
    }
    canNext() {
        return false;
    }
    canFinish() {
        return true;
    }
    commit() {
        return external_jQuery_["Deferred"]().resolve({
            selectedType: this._objectDataSource.selectedType,
            ctor: this._objectDataSource.ctor,
            dataMember: this._objectDataSource.dataMember,
            dataSourceName: this._objectDataSource.name(),
        }).promise();
    }
    initialize(state) {
        this._objectDataSource.setState(state);
        this._chooseObjectParameters.updateCtorParameters(this._objectDataSource.ctor);
        this._chooseObjectParameters.updateMethodParameters(this._objectDataSource.dataMember);
        return external_jQuery_["Deferred"]().resolve().promise();
    }
}
function _registerConfigureObjectDataSourceParametersPage(factory, getItemsProviderCallback) {
    factory.registerMetadata(ObjectDataSourceWizardPageId.ConfigureParametersPage, {
        setState: (data, state) => {
            state.ctor = data.ctor;
            state.dataMember = data.dataMember;
            state.selectedType = data.selectedType;
        },
        getState: (state) => {
            return state.objectDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.dataMember = defaultState.dataMember;
        },
        create: () => {
            return new configureObjectDataSourceParametersPage_ConfigureObjectDataSourceParametersPage(getItemsProviderCallback && getItemsProviderCallback());
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure constructor parameters and/or method parameters.', 'AnalyticsCoreStringId.ObjectDSWizard_ConfigureParameters_Description'),
        template: 'dx-objectdatasource-configureparameters-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/objectDataSource/_objectSchemaProvider.js









class _objectSchemaProvider_ObjectTypeDescriptions {
    constructor(model) {
        var types = deserializeToCollection(model, (key) => new objectSchema_ObjectType(key));
        this.types = types.sort((a, b) => { return a.displayName.localeCompare(b.displayName); });
    }
}
function getObjectTypeDescriptionsCallback(requestWrapper, context) {
    var deferred = external_jQuery_["Deferred"]();
    requestWrapper.getObjectTypeDescriptions(context)
        .done(data => {
        try {
            var objectTypeDescriptionsModel = new _objectSchemaProvider_ObjectTypeDescriptions(data.objectDataSourceInfoJson);
            deferred.resolve(objectTypeDescriptionsModel);
        }
        finally {
            if (deferred.state() === 'pending')
                deferred.reject();
        }
    })
        .fail(data => {
        Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Schema loading failed. {0}', 'DxDesignerStringId.Error_SchemaLoadingFailed'), Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(data)));
        deferred.reject();
    });
    return deferred.promise();
}
class _objectSchemaProvider_ObjectSchemaProvider extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(_requestWrapper = new requestwrapper_RequestWrapper()) {
        super();
        this._requestWrapper = _requestWrapper;
        this.getItems = (pathRequest) => {
            var getItemsDeferred = external_jQuery_["Deferred"]();
            var loadSchemaPromise = this.getObjectTypeDescriptions();
            loadSchemaPromise
                .done((objectSchema) => {
                getItemsDeferred.resolve(this.getSchemaByPath(pathRequest, objectSchema));
            })
                .fail(getItemsDeferred.reject);
            return getItemsDeferred.promise();
        };
    }
    dispose() {
        this._objectTypeDescriptionsPromise = null;
    }
    getSchemaByPath(pathRequest, objectSchema) {
        if (!pathRequest.fullPath) {
            return objectSchema.types.map(type => Object(external_DevExpress_Analytics_Internal_["extend"])({}, type, { isList: true, specifics: 'List' }));
        }
        else {
            var currentCtros = [];
            for (var i = 0; i < pathRequest.pathParts.length; i++) {
                var pathPart = (objectSchema.types || []).filter((type) => type.name == pathRequest.pathParts[i])[0];
                if (!pathPart)
                    return [];
                currentCtros = pathPart.ctors;
            }
            return currentCtros.map(ctor => Object(external_DevExpress_Analytics_Internal_["extend"])({}, ctor, { isList: false, specifics: 'default' }));
        }
    }
    getObjectTypeDescriptions(context = '') {
        if (!this._objectTypeDescriptionsPromise || this._objectTypeDescriptionsPromise.state() === 'rejected')
            this._objectTypeDescriptionsPromise = getObjectTypeDescriptionsCallback(this._requestWrapper, context);
        return this._objectTypeDescriptionsPromise;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/objectDataSource/_chooseObjectTypes.js



class _chooseObjectTypes_ChooseObjectTypesTreelistController extends external_DevExpress_Analytics_Widgets_Internal_["TreeListController"] {
    canSelect(value) {
        return true;
    }
}
class _chooseObjectTypes_ChooseObjectTypes extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(types, provider) {
        super();
        this.types = types;
        this.selectedType = external_ko_["observable"]();
        this.selectedCtor = external_ko_["observable"]();
        this.selectedPath = external_ko_["observable"]('');
        this._scrollViewHeight = 'calc(100% - 36px)';
        this.availableTypesTreelistModel = {
            expandRootItems: true,
            itemsProvider: provider,
            selectedPath: this.selectedPath,
            treeListController: new _chooseObjectTypes_ChooseObjectTypesTreelistController()
        };
        this._disposables.push(this.availableTypesTreelistModel.selectedPath.subscribe(newValue => {
            types().forEach((type) => {
                if (type.name == newValue) {
                    this.selectedType(type);
                    if (this.selectedCtor() == null)
                        this.selectedCtor.valueHasMutated();
                    else
                        this.selectedCtor(null);
                }
                else {
                    type.ctors.forEach(ctor => {
                        if (type.name.concat('.').concat(ctor.name) == newValue) {
                            this.selectedType(type);
                            this.selectedCtor(ctor);
                        }
                    });
                }
            });
        }));
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/objectDataSourceWizard/chooseObjectDataSourceTypesPage.js










class chooseObjectDataSourceTypesPage_ChooseObjectDataSourceTypesPage extends wizardPageBase_WizardPageBase {
    constructor(_requestWrapper = new requestwrapper_RequestWrapper()) {
        super();
        this._requestWrapper = _requestWrapper;
        this._objectDataSource = new objectDataSource_ObjectDataSource();
        this._types = external_ko_["observableArray"]([]);
        this._disposables.push(this._provider = new _objectSchemaProvider_ObjectSchemaProvider(this._requestWrapper), this._chooseObjectType = new _chooseObjectTypes_ChooseObjectTypes(this._types, this._provider));
    }
    canNext() {
        return !!this._selectedTypeName;
    }
    canFinish() {
        return false;
    }
    commit() {
        return external_jQuery_["Deferred"]().resolve({
            selectedType: this._selectedTypeName,
            selectedObjectType: this._chooseObjectType.selectedType(),
            ctor: this._chooseObjectType.selectedCtor()
        }).promise();
    }
    initialize(state) {
        this._objectDataSource.setState(state);
        this._provider.getObjectTypeDescriptions(state.context).done((schema) => {
            schema.types.forEach(type => type.members.splice(0, 0, objectSchema_ObjectDataMember.empty()));
            this._types(schema.types || []);
            if (schema.types.length > 0) {
                this._chooseObjectType.selectedPath(schema.types[0].name);
            }
        });
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    get _selectedTypeName() {
        return !!this._chooseObjectType.selectedType() ? this._chooseObjectType.selectedType().name : null;
    }
}
function _registerChooseObjectDataSourceTypesPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(ObjectDataSourceWizardPageId.ChooseTypesPage, {
        setState: (data, state) => {
            state.selectedType = data.selectedType;
            state.selectedObjectType = data.selectedObjectType;
            state.ctor = data.ctor;
        },
        getState: (state) => {
            return state.objectDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.selectedType = defaultState.selectedType;
            state.selectedObjectType = defaultState.selectedObjectType;
            state.ctor = defaultState.ctor;
        },
        create: () => {
            return new chooseObjectDataSourceTypesPage_ChooseObjectDataSourceTypesPage(dataSourceWizardOptions.requestWrapper);
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose the type and its constructor.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseType_Description'),
        template: 'dxrd-page-objectdatasource-types'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/objectDataSource/_chooseObjectDataMembers.js


class _chooseObjectDataMembers_ChooseObjectDataMembers extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(type, ctor) {
        super();
        this.dataMembers = external_ko_["observableArray"]([]);
        this.selectedDataMembers = external_ko_["observableArray"]([]);
        var oldType = type() && type().name;
        this._disposables.push(ctor.subscribe(newVal => {
            type().updateMembers(newVal);
            if (oldType != type().name) {
                this.dataMembers(type().members);
                this.selectedDataMembers([]);
                oldType = type().name;
            }
            this.coerceSelection();
        }));
    }
    coerceSelection() {
        var selectedMember = this.selectedDataMembers()[0];
        var bestItem = selectedMember && selectedMember.isAvailable() ? selectedMember : this.dataMembers().filter(a => a.isAvailable())[0];
        this.selectedDataMembers([bestItem]);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/objectDataSourceWizard/chooseObjectDataSourceDataMembersPage.js








class chooseObjectDataSourceDataMembersPage_ChooseObjectDataSourceDataMembersPage extends wizardPageBase_WizardPageBase {
    constructor(_requestWrapper = new requestwrapper_RequestWrapper()) {
        super();
        this._requestWrapper = _requestWrapper;
        this._objectDataSource = new objectDataSource_ObjectDataSource();
        this._type = external_ko_["observable"]();
        this._ctor = external_ko_["observable"]();
        this._disposables.push(this._chooseObjectDataMember = new _chooseObjectDataMembers_ChooseObjectDataMembers(this._type, this._ctor));
    }
    initialize(state) {
        this._objectDataSource.setState(state);
        this._type(state.selectedObjectType);
        this._ctor(state.ctor);
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    canNext() {
        return !!this._needParametersPage;
    }
    canFinish() {
        return !this._needParametersPage;
    }
    commit() {
        return external_jQuery_["Deferred"]().resolve({
            selectedType: this._type().name,
            ctor: this._ctor(),
            dataMember: !this._selectedDataMember || this._selectedDataMember.isEntireObject() ? undefined : this._selectedDataMember,
        }).promise();
    }
    get _selectedDataMember() {
        const selectedDataMembers = this._chooseObjectDataMember.selectedDataMembers();
        return !!selectedDataMembers ? selectedDataMembers[0] : null;
    }
    get _needParametersPage() {
        return (!!this._selectedDataMember && this._selectedDataMember.parameters.length > 0) ||
            (!!this._ctor() && this._ctor().parameters.length > 0);
    }
}
function _registerChooseObjectDataSourceDataMembersPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(ObjectDataSourceWizardPageId.ChooseDataMembersPage, {
        setState: (data, state) => {
            state.selectedType = data.selectedType;
            state.ctor = data.ctor;
            state.dataMember = data.dataMember;
        },
        getState: (state) => {
            return state.objectDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.dataMember = defaultState.dataMember;
        },
        create: () => {
            return new chooseObjectDataSourceDataMembersPage_ChooseObjectDataSourceDataMembersPage(dataSourceWizardOptions.requestWrapper);
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose the entire object or a data member to bind.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseDataMember_Description'),
        template: 'dxrd-page-objectdatasource-datamembers'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_utils.js


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
})(WizardSectionPosition || (WizardSectionPosition = {}));
class _utils_CustomQueryTreeListItem extends external_DevExpress_Analytics_Widgets_Internal_["TreeListItemViewModel"] {
    constructor() {
        super(...arguments);
        this.queryName = external_ko_["computed"]({
            read: () => this.data && this.data.name,
            write: (newVal) => {
                var data = this.data;
                if (data && data.name !== newVal) {
                    data.name = newVal;
                    data['_afterCheckToggled'] && data['_afterCheckToggled'](data);
                }
            }
        });
        this.editingMode = external_ko_["observable"](false);
    }
    dispose() {
        super.dispose();
        this.queryName.dispose();
    }
    _getTemplateName() {
        return this._getCustomizedTemplateName(true);
    }
    _getCustomizedTemplateName(isEditable) {
        return isEditable ? 'dxd-custom-query-treelisitem' : super._getTemplateName();
    }
}
class _utils_MultiQueryTreeListItemFactory extends external_DevExpress_Analytics_Widgets_Internal_["DefaultTreeListItemFactory"] {
    createItem(options, path, onItemsVisibilityChanged, rtl, resolver) {
        if (path[0] === 'queries') {
            return new _utils_CustomQueryTreeListItem(options, path, onItemsVisibilityChanged, rtl, resolver);
        }
        return super.createItem(options, path, onItemsVisibilityChanged, rtl, resolver);
    }
}
function getSectionStyle(position, defaultMargin = 30, isVisible = true) {
    var _clearStyle = 'inherit';
    var _defaultHalfMargin = '-' + (defaultMargin / 2) + 'px';
    var _fullSize = 100;
    var _defaultSize = _fullSize / 2;
    var _inPercent = (size) => {
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
        top: (position === WizardSectionPosition.Left || position === WizardSectionPosition.Right || position === WizardSectionPosition.Top || position === WizardSectionPosition.TopLeft || position === WizardSectionPosition.TopRight) ? _defaultHalfMargin : _clearStyle,
        bottom: (position === WizardSectionPosition.Left || position === WizardSectionPosition.Right || position === WizardSectionPosition.Bottom || position === WizardSectionPosition.BottomLeft || position === WizardSectionPosition.BottomRight) ? _defaultHalfMargin : _clearStyle,
        left: (position === WizardSectionPosition.Top || position === WizardSectionPosition.Bottom || position === WizardSectionPosition.Left || position === WizardSectionPosition.TopLeft || position === WizardSectionPosition.BottomLeft) ? _defaultHalfMargin : _clearStyle,
        right: (position === WizardSectionPosition.Top || position === WizardSectionPosition.Bottom || position === WizardSectionPosition.Right || position === WizardSectionPosition.TopRight || position === WizardSectionPosition.BottomRight) ? _defaultHalfMargin : _clearStyle,
        width: (position === WizardSectionPosition.Top || position === WizardSectionPosition.Bottom) ? _clearStyle : _inPercent(_defaultSize),
        height: (position === WizardSectionPosition.Left || position === WizardSectionPosition.Right) ? _clearStyle : _inPercent(_defaultSize),
        display: isVisible ? 'block' : 'none'
    };
}
function subscribeArray(array, subscribeItem, onChange) {
    array().forEach((item) => subscribeItem(item, onChange));
    return array.subscribe((changeSet) => {
        changeSet.forEach((change) => {
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
function subscribeProperties(properties, onChange) {
    var subscriptions = [];
    properties.forEach((property) => {
        if (property && property.subscribe) {
            subscriptions.push(property.subscribe((val) => onChange(val)));
        }
    });
    return subscriptions;
}
function subscribeObject(object, subscribeProperties, onChange) {
    subscribeProperties(object(), onChange);
    return object.subscribe((newVal) => {
        subscribeProperties(newVal, onChange);
        onChange();
    });
}
function _createBeforeInitializePageEventArgs(page, self) {
    return {
        page: page.page,
        pageId: page.pageId,
        wizard: self,
        state: self.stateManager.getPageState(page.pageId)
    };
}
function _createPageEventArgs(page, self) {
    return {
        page: page.page,
        pageId: page.pageId,
        wizard: self
    };
}
function _isMoreThanOneDataSourceTypeAvailable(dataSourceOptions) {
    return [dataSourceOptions.jsonDataSourceAvailable, dataSourceOptions.sqlDataSourceAvailable,
        dataSourceOptions.objectDataSourceAvailable, dataSourceOptions.federationDataSourceAvailable].filter(x => !!x).length > 1;
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/chooseAvailablePage.js






class chooseAvailablePage_ChooseAvailableItemPage extends wizardPageBase_WizardPageBase {
    constructor(items, canCreateNew = true, _getJsonConnectionsCallback) {
        super();
        this.items = items;
        this._getJsonConnectionsCallback = _getJsonConnectionsCallback;
        this.selectedItems = external_ko_["observableArray"]([]);
        this.operations = [
            { text: this.existingOperationText, createNew: false },
            { text: this.createNewOperationText, createNew: true }
        ];
        this.selectedOperation = external_ko_["observable"](this.operations[0]);
        this._createNew = external_ko_["pureComputed"](() => this.selectedOperation().createNew);
        this.canCreateNew = external_ko_["observable"](canCreateNew);
        this._disposables.push(...subscribeProperties([this.selectedOperation, this.selectedItems], () => this._onChange()));
    }
    canNext() {
        return this.selectedItems().length !== 0 || this.selectedOperation().createNew;
    }
    initialize(state) {
        if (this._getJsonConnectionsCallback) {
            var deferred = external_jQuery_["Deferred"]();
            this._getJsonConnectionsCallback().done(connections => {
                this.items(connections);
                var item = this._getSelectedItem(state);
                this.selectedItems(item ? [item] : []);
                deferred.resolve(connections);
            }).fail(() => {
                deferred.reject();
            });
            return deferred.promise();
        }
        var item = this._getSelectedItem(state);
        this.selectedItems(item ? [item] : []);
        return external_jQuery_["Deferred"]().resolve(this).promise();
    }
    _displayExpr(item) {
        return item.description || item.name;
    }
    _getSelectedItem(state) {
        return this.items()[0];
    }
    onDblClick() {
        this[__nextActionFunctionName] && this[__nextActionFunctionName]();
    }
    get createNewOperationText() {
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])("No, I'd like to create a new data source", 'AnalyticsCoreStringId.Wizard_CreateNewDataSource');
    }
    get existingOperationText() {
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Yes, let me choose an existing data source from the list', 'AnalyticsCoreStringId.Wizard_ChooseDataSourceFromList');
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/chooseAvailableDataSourcePage.js




class chooseAvailableDataSourcePage_ChooseAvailableDataSourcePage extends chooseAvailablePage_ChooseAvailableItemPage {
    commit() {
        return external_jQuery_["Deferred"]().resolve({
            predeifnedDataSourceName: this.selectedOperation().createNew ? null : this.selectedItems()[0].name
        }).promise();
    }
    _getSelectedItem(state) {
        var availableDataSources = this.items() || [];
        if (state.predeifnedDataSourceName) {
            return availableDataSources.filter(x => x.name === state.predeifnedDataSourceName)[0];
        }
        else if (availableDataSources.length === 0) {
            return null;
        }
        else {
            return availableDataSources[0];
        }
    }
    canNext() {
        return this.selectedOperation().createNew;
    }
    canFinish() {
        return !this.selectedOperation().createNew;
    }
}
function _registerChooseAvailableDataSourcePage(factory, wizardOptions) {
    factory.registerMetadata(DataSourceWizardPageId.ChoosePredefinedDataSourcePage, {
        setState: (data, state) => {
            state.predeifnedDataSourceName = data.predeifnedDataSourceName;
        },
        getState: (state) => {
            return state;
        },
        resetState: (state, defaultState) => {
            state.predeifnedDataSourceName = null;
        },
        create: () => {
            return new chooseAvailableDataSourcePage_ChooseAvailableDataSourcePage(wizardOptions.predefinedDataSources, wizardOptions.canCreateDataSource);
        },
        template: 'dxrd-page-selectitems',
        description: Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Do you want to use an existing data source?', 'AnalyticsCoreStringId.Wizard_UseExisting_DataSource') + ' ' +
            Object(external_DevExpress_Analytics_Internal_["getLocalization"])('The Wizard assigns the selected or a newly created data source to the report.', 'AnalyticsCoreStringId.Wizard_DataSourceAssignment_Description')
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/jsonDataSourceWizard/chooseJsonConnectionPage.js





class chooseJsonConnectionPage_ChooseJsonConnectionPage extends chooseAvailablePage_ChooseAvailableItemPage {
    commit() {
        return external_jQuery_["Deferred"]().resolve({
            connectionName: !this.selectedOperation().createNew ? this.selectedItems()[0].name : null
        }).promise();
    }
    _getSelectedItem(data) {
        return Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this.items(), 'name', data.connectionName) || super._getSelectedItem();
    }
    get createNewOperationText() {
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])("No, I'd like to create a new data connection", 'AnalyticsCoreStringId.JsonDSWizard_CreateNewConnection');
    }
    get existingOperationText() {
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Yes, let me choose an existing data connection from the list', 'AnalyticsCoreStringId.JsonDSWizard_UseExistingConnection');
    }
}
function _registerChooseJsonConnectionPage(factory, wizardOptions) {
    factory.registerMetadata(JsonDataSourceWizardPageId.ChooseConnectionPage, {
        create: () => {
            return new chooseJsonConnectionPage_ChooseJsonConnectionPage(wizardOptions.connectionStrings && wizardOptions.connectionStrings.json, wizardOptions.allowCreateNewJsonConnection, wizardOptions.getJsonConnectionStrings);
        },
        description: wizardOptions.allowCreateNewJsonConnection ?
            Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Do you want to use an existing data connection?', 'AnalyticsCoreStringId.JsonDSWizard_ChooseConnection_Description') :
            Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose a data connection.', 'AnalyticsCoreStringId.SqlDSWizard_PageChooseConnection'),
        getState: (state) => state.jsonDataSourceWizard,
        setState: (data, state) => state.connectionName = data.connectionName,
        resetState: (state, defaultState) => {
            state.connectionName = defaultState.connectionName;
        },
        template: 'dxrd-page-selectitems'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/jsonSourceSettings.js
var parameterTypeToPropertyMap = {
    'PathParameter': 'pathParameters',
    'QueryParameter': 'queryParameters',
    'Header': 'headers',
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_jsonDataSourceWidgets.js





function getLocalizedValidationErrorMessage(emptyValueErrorMessage, localizedPropertyName, subProperty) {
    var requiredMessageSuffix = emptyValueErrorMessage || Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The value cannot be empty', 'AnalyticsCoreStringId.ParametersPanel_DateTimeValueValidationError');
    if (!localizedPropertyName)
        return requiredMessageSuffix;
    var propertyNamesPrefix = !subProperty ? localizedPropertyName : Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])('{0}. {1}', localizedPropertyName, subProperty);
    if (!Object(external_DevExpress_Analytics_Utils_["_stringEndsWith"])(propertyNamesPrefix, ':'))
        propertyNamesPrefix += ':';
    return Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])('{0} {1}', propertyNamesPrefix, requiredMessageSuffix);
}
class _jsonDataSourceWidgets_JsonStringEditor extends external_DevExpress_Analytics_Widgets_["Editor"] {
    constructor(modelPropertyInfo, level, parentDisabled, textToSearch) {
        super(modelPropertyInfo, level, parentDisabled, textToSearch);
        this.aceEditorHasErrors = external_ko_["observable"](false);
        this.aceAvailable = Object(external_DevExpress_Analytics_Widgets_Internal_["aceAvailable"])();
        this.editorContainer = external_ko_["observable"]();
        this.languageHelper = {
            getLanguageMode: () => 'ace/mode/json',
            createCompleters: () => { return []; }
        };
        this.aceOptions = {
            showLineNumbers: false,
            highlightActiveLine: false,
            showPrintMargin: false,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        };
        this.isValid = external_ko_["computed"](() => {
            return this._model() && this._model().isValid();
        });
        this.additionalOptions = {
            onChangeAnnotation: (session) => {
                var annotations = session && session.getAnnotations() || [];
                this._model() && this._model().aceEditorHasErrors && this._model().aceEditorHasErrors(annotations.filter(annotation => annotation.type === 'error' || annotation.type === 'warning').length > 0);
            },
            onBlur: () => {
                var editorContainer = this.editorContainer();
                if (editorContainer) {
                    this.value(editorContainer.getValue());
                }
            }
        };
        this.jsonStringValidationRules = [{
                type: 'custom',
                reevaluate: true,
                validationCallback: (options) => { return this.isValid(); },
                get message() {
                    return getLocalizedValidationErrorMessage(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The value cannot be empty and should have a valid format.', 'AnalyticsCoreStringId.ValueIsRequiredOrInvalidFormat_Error'), Object(external_DevExpress_Analytics_Utils_["getLocalization"])('JSON String:', 'DataAccessUIStringId.WizardPageChooseJsonSource_Custom'));
                }
            }];
    }
    uploadFile(e) {
        if (e && e.event) {
            e.event.stopPropagation();
            e.event.preventDefault();
        }
        Object(external_DevExpress_Analytics_Internal_["uploadFile"])({
            accept: '.json,.txt'
        }).done((result) => {
            var fileContent = atob(result.content);
            if (fileContent.indexOf('ï»¿') === 0) {
                fileContent = fileContent.substr('ï»¿'.length);
            }
            this.value(fileContent);
        });
    }
    getUploadTitle() {
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Upload JSON File', 'AnalyticsCoreStringId.UploadJsonFile_Title');
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_jsonSourceSettings.js














class _jsonSourceSettings_JsonDataSourceJsonSourcePageSettingsBase extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor() {
        super();
        this._validationGroup = null;
        this._validationSummary = null;
        this.validationGroup = {
            onInitialized: (args) => this._onValidationGroupInitialized(args),
            onDisposing: (args) => this._onValidationGroupDisposing(args),
            validate: () => this._validate()
        };
        this.validationSummary = {
            onInitialized: (args) => this._onValidationSummaryInitialized(args),
            onDisposing: (args) => this._onValidationSummaryDisposing(args)
        };
        this._disposables.push(this.grid = new external_DevExpress_Analytics_Widgets_["ObjectProperties"](external_ko_["observable"](this)));
    }
    dispose() {
        this._validationSummary && this._validationSummary.dispose();
        this._validationGroup && this._validationGroup.dispose();
        this._validationSummary = null;
        this._validationGroup = null;
        super.dispose();
    }
    _onValidationGroupInitialized(args) {
        this._validationGroup = args.component;
    }
    _onValidationGroupDisposing(args) {
        this._validationGroup = null;
    }
    _onValidationSummaryInitialized(args) {
        this._validationSummary = args.component;
    }
    _onValidationSummaryDisposing(args) {
        this._validationSummary = null;
    }
    _repaintSummary() {
        this._validationSummary && this._validationSummary.repaint();
    }
    _validate() {
        this._validationSummary && this._validationGroup && this._validationGroup.validate();
    }
}
class _jsonSourceSettings_JsonDataSourceJsonSourcePageStringSettings extends _jsonSourceSettings_JsonDataSourceJsonSourcePageSettingsBase {
    constructor() {
        super();
        this._validatorsReady = external_ko_["observable"](false);
        this.isValid = external_ko_["pureComputed"](() => {
            var isJsonValid = this._isJsonSourceValid(this.stringSource());
            var aceHasErrors = this.aceEditorHasErrors();
            return isJsonValid && !aceHasErrors;
        });
        this.validationGroup = null;
        this.validationSummary = null;
        this.stringSource = external_ko_["observable"]('');
        this.aceEditorHasErrors = external_ko_["observable"](false);
        this.cssClass = { 'dxrd-wizard-json-string-source-grid': true };
        this._disposables.push(this.grid = new external_DevExpress_Analytics_Widgets_["ObjectProperties"](external_ko_["observable"](this)));
    }
    onChange(_onChange) {
        var timeoutId = null;
        var localOnChange = () => {
            _onChange();
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => this._validate(), 1);
        };
        this._disposables.push(this.stringSource.subscribe((newVal) => localOnChange()));
    }
    _isJsonSourceValid(jsonString) {
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
    }
    isEmpty() {
        return !this.stringSource();
    }
    reset() {
        this.stringSource('');
    }
    setValue(dataSource) {
        this.stringSource(dataSource.source.json());
    }
    getInfo() {
        return [
            {
                propertyName: 'stringSource', defaultVal: '', displayName: 'JSON String', editor: {
                    header: 'dx-jsonwizard-jsonstring-editor', editorType: _jsonDataSourceWidgets_JsonStringEditor, custom: 'dx-property-json-string-editor'
                }
            }
        ];
    }
    applySettings(jsonDataSource) {
        jsonDataSource.source.uri(undefined);
        jsonDataSource.source.json(this.stringSource());
        jsonDataSource.source.authenticationInfo = new jsonAuthenticationInfo_JsonAuthenticationInfo({});
        jsonDataSource.source.headers([]);
        jsonDataSource.source.queryParameters([]);
        jsonDataSource.source.pathParameters([]);
    }
}
class _jsonSourceSettings_JsonDataSourceJsonSourcePageUriSettings extends _jsonSourceSettings_JsonDataSourceJsonSourcePageSettingsBase {
    constructor(_requestWrapper, _itemsProvider) {
        super();
        this._requestWrapper = _requestWrapper;
        this._itemsProvider = _itemsProvider;
        this._isUriValid = external_ko_["observable"](false);
        this._lastValidatedJsonSourceJSON = '';
        this._authNameValidatorInstance = null;
        this._isInitUri = true;
        this._collectionItemNamePlaceholder = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Name', 'AnalyticsCoreStringId.CollectionEditor_Name_Placeholder');
        this._lastValidateDeferred = null;
        this._sourceUriValidatorsReady = external_ko_["observable"](true);
        this._basicAuthValidatorsReady = external_ko_["observable"](false);
        this._validationRequested = external_ko_["observable"](false).extend({ deferred: true });
        this._noEmptyProperties = external_ko_["pureComputed"](() => {
            var isBasicHttpAuthValid = this._isBasicHttpAuthValid();
            var isParametersValid = this._isParametersValid();
            var sourceUriNotEmpty = !!this.sourceUri();
            return isBasicHttpAuthValid && isParametersValid && sourceUriNotEmpty;
        });
        this._lastValidationMessage = external_ko_["observable"]();
        this._getSerializedUriSource = (jsonDataSource = new jsonDataSource_JsonDataSource({})) => {
            this.applySettings(jsonDataSource);
            return JSON.stringify(jsonDataSource.source.serialize(true));
        };
        this._sourceUriValidationCallback = (params) => {
            if (!this.sourceUri()) {
                if (this._isInitUri) {
                    this._isInitUri = false;
                    return true;
                }
                params.rule.message = getLocalizedValidationErrorMessage(null, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Web Service Endpoint (URI):', 'DataAccessUIStringId.WizardPageChooseJsonSource_URI'));
                return false;
            }
            var serverValidationResult = false;
            this._isInitUri = false;
            var serializedJsonSource = this._getSerializedUriSource();
            if (serializedJsonSource != this._lastValidatedJsonSourceJSON) {
                if (!this._lastValidationMessage())
                    this._lastValidationMessage(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Validation...', 'AnalyticsCoreStringId.Validation'));
                this._validateUriSource().done((result) => {
                    serverValidationResult = params.rule.isValid = result.isUriValid;
                    result.faultMessage && (params.rule.message = result.faultMessage);
                    this._lastValidationMessage(serverValidationResult ? null : result.faultMessage);
                    params.validator.validate();
                    setTimeout(() => this._repaintSummary(), 1);
                });
            }
            else {
                return !this._lastValidationMessage();
            }
            return serverValidationResult;
        };
        this.isValid = external_ko_["pureComputed"](() => {
            var isPropertiesNotEmpty = this._noEmptyProperties();
            var isUriValid = this._isUriValid();
            return isPropertiesNotEmpty && isUriValid;
        });
        this._validatorsReady = external_ko_["pureComputed"]({
            read: () => {
                var sourceUriValidatorReady = this._sourceUriValidatorsReady();
                var authIsEmpty = !this.basicHttpAuth.password() && !this.basicHttpAuth.userName();
                var authInitialized = this._basicAuthValidatorsReady();
                return sourceUriValidatorReady && (authInitialized || authIsEmpty);
            },
            write: (newVal) => {
                this._basicAuthValidatorsReady(newVal);
            }
        });
        this.sourceUri = external_ko_["observable"]('');
        this.basicHttpAuth = {
            password: external_ko_["observable"](''),
            userName: external_ko_["observable"](''),
        };
        this.parameters = external_ko_["observableArray"]([]);
        this._disposables.push(this.resultUri = external_ko_["pureComputed"](() => {
            return this._getResultUri();
        }));
        this._disposables.push(this.grid = new external_DevExpress_Analytics_Widgets_["ObjectProperties"](external_ko_["observable"](this)));
        this._disposables.push(external_ko_["computed"](() => {
            var editorsInitialized = this._validatorsReady();
            var validationRequested = this._validationRequested();
            if (editorsInitialized && validationRequested) {
                this._validate();
            }
        }));
        this._disposables.push(this._validatorsReady);
    }
    _validateUriSource() {
        var defaultValidationErrorMessage = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Invalid URI.', 'AnalyticsCoreStringId.ReportDesigner_Wizard_JsonSource_UriValidationError');
        var endpointUriDisplayName = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Web Service Endpoint (URI):', 'DataAccessUIStringId.WizardPageChooseJsonSource_URI');
        this._isUriValid(false);
        if (this._lastValidateDeferred) {
            this._lastValidateDeferred.reject();
        }
        var resultDeferred = external_jQuery_["Deferred"]();
        this._lastValidateDeferred = resultDeferred;
        try {
            var jsonDataSource = new jsonDataSource_JsonDataSource({});
            var serializedJsonSource = this._getSerializedUriSource(jsonDataSource);
            this._lastValidatedJsonSourceJSON = serializedJsonSource;
            var validationResultHandler = (data) => {
                if (resultDeferred.state && resultDeferred.state() === 'rejected')
                    return;
                this._isUriValid(data.isUriValid);
                var faultMessage = getLocalizedValidationErrorMessage((data.isUriValid ? '' : data && data.faultMessage) || defaultValidationErrorMessage, endpointUriDisplayName);
                resultDeferred.resolve({
                    isUriValid: data.isUriValid,
                    faultMessage: faultMessage
                });
            };
            this._requestWrapper.validateJsonUri(jsonDataSource)
                .done(validationResultHandler)
                .fail((data = {}) => {
                data.isValid = false;
                validationResultHandler(data);
            });
        }
        catch (ex) {
            this._isUriValid(false);
        }
        return resultDeferred.promise();
    }
    _isCollectionValid(collectionName) {
        return !this[collectionName]().length || this[collectionName]().every(x => x.name());
    }
    _isParametersValid() {
        return this._isCollectionValid('parameters');
    }
    _isBasicHttpAuthValid() {
        return !this.basicHttpAuth.password() || !!this.basicHttpAuth.userName();
    }
    _getSourceUriInfo() {
        var sourceUri = {
            propertyName: 'sourceUri',
            displayName: 'Web Service Endpoint (URI):',
            localizationId: 'DataAccessUIStringId.WizardPageChooseJsonSource_URI',
            defaultVal: '',
            editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text'),
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
            onInitialized: (e) => {
                this._sourceUriValidatorsReady(true);
            },
            onDisposed: () => {
                this._sourceUriValidatorsReady(false);
            },
            validationRules: [
                {
                    type: 'custom',
                    assignValueFirst: true,
                    isDeferred: external_ko_["pureComputed"](() => this._noEmptyProperties()),
                    get message() {
                        return _self._lastValidationMessage();
                    },
                    validationCallback: this._sourceUriValidationCallback
                }
            ]
        };
        return sourceUri;
    }
    _getBasicHttpAuthInfo() {
        var basicHttpAuthName = {
            propertyName: 'userName', displayName: 'Username:', localizationId: 'DataAccessUIStringId.WizardPageConfigureJsonConnection_UsernameText', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text'),
            validatorOptions: undefined,
        };
        var basicHttpAuth = {
            propertyName: 'basicHttpAuth', displayName: 'Basic HTTP Authentication', localizationId: 'DataAccessUIStringId.WizardPageConfigureJsonConnection_BasicHttpAuthText', info: [
                basicHttpAuthName,
                Object(external_DevExpress_Analytics_Internal_["createPasswordSerializationInfo"])({ propertyName: 'password', displayName: 'Password:', localizationId: 'DataAccessUIStringId.WizardPageConfigureJsonConnection_PasswordText' }, false),
            ], editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor')
        };
        var onValidatorInitialied = (e) => {
            var authNmeValidatorInstance = e && e.component;
            if (this._authNameValidatorInstance && this._authNameValidatorInstance != authNmeValidatorInstance) {
                this._authNameValidatorInstance.dispose();
            }
            this._authNameValidatorInstance = authNmeValidatorInstance;
            this._basicAuthValidatorsReady(true);
        };
        var authNameValidatorDisposed = () => {
            this._authNameValidatorInstance = null;
        };
        basicHttpAuthName.validatorOptions = {
            onInitialized: onValidatorInitialied,
            onDisposed: authNameValidatorDisposed,
            validationRules: [{
                    type: 'custom',
                    reevaluate: true,
                    assignValueFirst: true,
                    get message() {
                        return getLocalizedValidationErrorMessage(null, Object(external_DevExpress_Analytics_Utils_["getLocalization"])(basicHttpAuth.displayName, basicHttpAuth.localizationId), Object(external_DevExpress_Analytics_Utils_["getLocalization"])(basicHttpAuthName.displayName, basicHttpAuthName.localizationId));
                    },
                    validationCallback: (params) => {
                        return this._isBasicHttpAuthValid();
                    }
                }]
        };
        return basicHttpAuth;
    }
    _getParametersInfo() {
        var parameters = {
            propertyName: 'parameters', displayName: 'Parameters', localizationId: 'AnalyticsCoreStringId.QueryBuilder_Parameters',
            array: true,
            addHandler: () => {
                var newName = Object(external_DevExpress_Analytics_Internal_["getUniqueNameForNamedObjectsArray"])(this.parameters(), 'parameter');
                return jsonParameter_JsonParameter.from({ '@Name': newName });
            },
            editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('commonCollection'),
            editorOptions: null,
            template: '#dx-jsonwizard-parametercollection'
        };
        parameters.editorOptions = {
            itemsProvider: this._itemsProvider,
            nameValidationRules: [{
                    type: 'required',
                    get message() {
                        return getLocalizedValidationErrorMessage(null, Object(external_DevExpress_Analytics_Utils_["getLocalization"])(parameters.displayName, parameters.localizationId), this._collectionItemNamePlaceholder);
                    }
                }]
        };
        return parameters;
    }
    _getResultUriInfo() {
        var _resultUri = {
            propertyName: 'resultUri',
            displayName: 'Resulting URI:',
            localizationId: 'DataAccessUIStringId.WizardPageChooseJsonSource_ResultingUri',
            defaultVal: '',
            editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text'),
            editorOptions: {
                readOnly: true,
                elementAttr: {
                    title: this.resultUri
                }
            }
        };
        return _resultUri;
    }
    _getResultUri() {
        if (!this.sourceUri() || !this._isUriValid() || !this._isParametersValid())
            return null;
        if (this.sourceUri() && this.parameters().length === 0)
            return this.sourceUri();
        var uriParts = this.sourceUri().split('?');
        var url = uriParts[0];
        var query = uriParts[1];
        url = this._appendPathSegmentsToUri(uriParts[0]);
        return this._appendQuerySegmentsToUri(url, query);
    }
    _appendPathSegmentsToUri(uri) {
        var segments = this.parameters()
            .filter(p => p.itemType() === 'PathParameter')
            .map(p => '{' + p.name() + '}');
        segments.forEach(segment => {
            uri = uri.replace(/[\/]+$/g, '') + '/' + segment.replace(/^[\/]+/g, '');
        });
        return uri;
    }
    _appendQuerySegmentsToUri(uri, originalQuery) {
        var separator = '';
        var uriArguments = originalQuery || '';
        var querySegments = this.parameters()
            .filter(p => p.itemType() === 'QueryParameter')
            .map(p => p.name() + '={?}');
        querySegments.forEach(q => {
            if (!!uriArguments)
                uriArguments += '&';
            uriArguments += q;
        });
        if (uriArguments.length > 0)
            uri += '?' + uriArguments;
        return uri;
    }
    _onValidationSummaryInitialized(args) {
        super._onValidationSummaryInitialized(args);
        this._isInitUri = true;
        setTimeout(() => {
            this._validate();
        }, 1);
    }
    _applyParametersToSource(jsonDataSource) {
        var parametersByType = this.parameters().reduce((result, parameter) => (Object.assign(Object.assign({}, result), { [parameter.itemType()]: [...(result[parameter.itemType()] || []), parameter] })), {});
        ['PathParameter', 'QueryParameter', 'Header'].forEach(type => {
            if (parametersByType[type])
                jsonDataSource.source[parameterTypeToPropertyMap[type]](parametersByType[type]);
        });
    }
    applySettings(jsonDataSource) {
        jsonDataSource.source.uri(this.sourceUri());
        jsonDataSource.source.json(undefined);
        jsonDataSource.source.authenticationInfo.password(this.basicHttpAuth.password());
        jsonDataSource.source.authenticationInfo.userName(this.basicHttpAuth.userName());
        this._applyParametersToSource(jsonDataSource);
    }
    getInfo() {
        var sourceUri = this._getSourceUriInfo();
        var basicHttpAuth = this._getBasicHttpAuthInfo();
        var parameters = this._getParametersInfo();
        var resultUriInfo = this._getResultUriInfo();
        return [sourceUri, basicHttpAuth, parameters, resultUriInfo];
    }
    reset() {
        this.sourceUri('');
        this.basicHttpAuth.password('');
        this.basicHttpAuth.userName('');
        this.parameters([]);
    }
    setValue(dataSource) {
        this.sourceUri(dataSource.source.uri());
        this.basicHttpAuth.userName(dataSource.source.authenticationInfo.userName());
        this.basicHttpAuth.password(dataSource.source.authenticationInfo.password());
        var sourceParameters = [].concat.apply([], [dataSource.source.pathParameters(), dataSource.source.queryParameters(), dataSource.source.headers()]);
        this.parameters(sourceParameters);
    }
    dispose() {
        this._authNameValidatorInstance && this._authNameValidatorInstance.dispose();
        if (this._lastValidateDeferred) {
            this._lastValidateDeferred.reject();
            this._lastValidateDeferred = null;
        }
        super.dispose();
        this.disposeObservableArray(this.parameters);
    }
    onChange(_onChange) {
        var timeoutId = null;
        var localOnChange = () => {
            _onChange();
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => this._validate(), 1);
        };
        this._disposables.push(...subscribeProperties([this.sourceUri, this.basicHttpAuth.password, this.basicHttpAuth.userName, this.resultUri], localOnChange));
        this._disposables.push(subscribeArray(this.parameters, (item) => {
            item._disposables.push(...subscribeProperties([item.name, item.itemType, item.value], localOnChange));
        }, localOnChange));
    }
    isEmpty() {
        return !this.sourceUri();
    }
    _validate() {
        if (this._validationSummary && this._validationGroup) {
            if (this._validatorsReady()) {
                this._validationGroup.validate();
                this._validationRequested(false);
            }
            else {
                this._validationRequested(true);
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/jsonDataSourceWizard/chooseJsonSourcePage.js











class chooseJsonSourcePage_ChooseJsonSourcePage extends wizardPageBase_WizardPageBase {
    constructor(_requestWrapper = new requestwrapper_RequestWrapper(), itemsProvider) {
        super();
        this._requestWrapper = _requestWrapper;
        this.__validationGroup = null;
        this.__validationSummary = null;
        this._jsonSourceTitle = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('JSON Source:', 'DataAccessUIStringId.WizardPageChooseJsonSource_SourceType');
        this._jsonConnectionTitle = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Connection Name:', 'AnalyticsCoreStringId.ReportDesigner_Wizard_Json_ConnectionName');
        this._connectionNameValidationRules = [{
                type: 'required',
                get message() {
                    return getLocalizedValidationErrorMessage(null, this._jsonConnectionTitle);
                }
            }];
        this._connectionName = external_ko_["observable"]('');
        this._validationGroup = {
            onInitialized: (args) => this._onValidationGroupInitialized(args),
            onDisposing: (args) => this._onValidationGroupDisposing(args)
        };
        this._validationSummary = {
            onInitialized: (args) => this._onValidationSummaryInitialized(args),
            onDisposing: (args) => this._onValidationSummaryDisposing(args)
        };
        this._sources = [];
        this._disposables.push(this._jsonStringSettings = new _jsonSourceSettings_JsonDataSourceJsonSourcePageStringSettings());
        this._jsonStringSettings.onChange(() => this._onChange());
        this._disposables.push(this._jsonUriSetting = new _jsonSourceSettings_JsonDataSourceJsonSourcePageUriSettings(this._requestWrapper, itemsProvider));
        this._jsonUriSetting.onChange(() => this._onChange());
        this._sources = [
            { value: this._jsonUriSetting, displayValue: 'Web Service Endpoint (URI)', localizationId: 'DataAccessUIStringId.WizardPageChooseJsonSource_SourceType_Uri' },
            { value: this._jsonStringSettings, displayValue: 'JSON String', localizationId: 'DataAccessUIStringId.WizardPageChooseJsonSource_SourceType_Custom' }
        ];
        var selectedSource = external_ko_["observable"]();
        this._selectedSource = external_ko_["pureComputed"]({
            read: () => selectedSource(),
            write: (newVal) => {
                if (selectedSource() === newVal)
                    return;
                selectedSource(newVal);
                newVal._validatorsReady && newVal._validatorsReady(false);
                setTimeout(() => {
                    newVal._validate && newVal._validate();
                }, 1);
                this._onChange();
            }
        });
        this._selectedSource(this._sources[0].value);
        this._disposables.push(this._selectedSource);
        this._disposables.push(this._connectionName.subscribe(() => this._onChange()));
    }
    _onValidationGroupInitialized(e) {
        this.__validationGroup = e.component;
    }
    _onValidationGroupDisposing(e) {
        this.__validationGroup = null;
    }
    _onValidationSummaryInitialized(e) {
        this.__validationSummary = e.component;
        this.__validationGroup && this.__validationSummary && this._connectionName && this._connectionName() && setTimeout(() => {
            this.__validationGroup && this.__validationGroup.validate();
        }, 1);
    }
    _onValidationSummaryDisposing(e) {
        this.__validationSummary = null;
    }
    canNext() {
        var connectionNameNotEmpty = !!this._connectionName();
        var isCurrentSourceValid = this._selectedSource().isValid();
        var isCurrentSourceEmpty = this._selectedSource().isEmpty();
        return connectionNameNotEmpty && isCurrentSourceValid && !isCurrentSourceEmpty;
    }
    commit() {
        var jsonDataSource = new jsonDataSource_JsonDataSource({});
        this._selectedSource().applySettings(jsonDataSource);
        var serialized = new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(jsonDataSource);
        return external_jQuery_["Deferred"]().resolve({
            jsonSource: JSON.stringify(serialized.Source),
            newConnectionName: this._connectionName()
        }).promise();
    }
    initialize(state) {
        this.__validationGroup = null;
        this.__validationSummary = null;
        var jsonDataSource = _restoreJsonDataSourceFromState(state);
        if (jsonDataSource.source.uri()) {
            this._selectedSource(this._jsonUriSetting);
        }
        else if (jsonDataSource.source.json()) {
            this._selectedSource(this._jsonStringSettings);
        }
        this._selectedSource().setValue(jsonDataSource);
        return external_jQuery_["Deferred"]().resolve().promise();
    }
}
function _registerChooseJsonSourcePage(factory, requestWrapper, getItemsProviderCallback) {
    factory.registerMetadata(JsonDataSourceWizardPageId.ChooseJsonSourcePage, {
        setState: (data, state) => {
            state.jsonSource = data.jsonSource;
            state.newConnectionName = data.newConnectionName;
        },
        getState: (state) => {
            return state.jsonDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.jsonSource = defaultState.jsonSource;
        },
        create: () => {
            return new chooseJsonSourcePage_ChooseJsonSourcePage(requestWrapper, getItemsProviderCallback && getItemsProviderCallback());
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Create a data connection.', 'AnalyticsCoreStringId.JsonDSWizard_CreateNewConnectionPage_Description'),
        template: 'dxrd-page-jsonsource'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/jsonDataSourceWizard/specifyJsonConnectionPage.js






class specifyJsonConnectionPage_SpecifyJsonConnectionPage extends chooseJsonConnectionPage_ChooseJsonConnectionPage {
    constructor(connections, allowCreateNewJsonConnection, itemsProvider, _requestWrapper = new requestwrapper_RequestWrapper(), _getJsonConnectionsCallback) {
        super(connections, allowCreateNewJsonConnection, _getJsonConnectionsCallback);
        this._requestWrapper = _requestWrapper;
        this._disposables.push(this._specifySourceData = new chooseJsonSourcePage_ChooseJsonSourcePage(_requestWrapper, itemsProvider));
        this._specifySourceData.onChange(() => this._onChange());
    }
    commit() {
        var deffered = external_jQuery_["Deferred"]();
        var _promise;
        if (this._createNew()) {
            _promise = this._specifySourceData.commit();
        }
        else {
            _promise = super.commit();
        }
        _promise.done(state => {
            deffered.resolve(state);
        });
        return deffered.promise();
    }
    canNext() {
        if (this._createNew()) {
            return this._specifySourceData.canNext();
        }
        else {
            return super.canNext();
        }
    }
    initialize(state) {
        var deffered = external_jQuery_["Deferred"]();
        super.initialize(state).done(() => {
            this._specifySourceData.initialize(state).done(() => {
                deffered.resolve(this);
            });
        });
        return deffered.promise();
    }
}
function _registerSpecifyJsonConnectionPage(factory, connections, allowCreateNewJsonConnection, getItemsProviderCallBack, getJsonConnectionsCallback) {
    factory.registerMetadata(JsonDataSourceWizardPageId.SpecifyJsonConnectionPage, {
        create: () => new specifyJsonConnectionPage_SpecifyJsonConnectionPage(connections, allowCreateNewJsonConnection, getItemsProviderCallBack && getItemsProviderCallBack(), undefined, getJsonConnectionsCallback),
        description: allowCreateNewJsonConnection ?
            Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Do you want to use an existing data connection?', 'AnalyticsCoreStringId.JsonDSWizard_ChooseConnection_Description') :
            Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose a data connection.', 'AnalyticsCoreStringId.SqlDSWizard_PageChooseConnection'),
        getState: (state) => state.jsonDataSourceWizard,
        setState: (data, state) => {
            state.connectionName = data.connectionName;
            state.jsonSource = data.jsonSource;
            state.newConnectionName = data.newConnectionName;
        },
        resetState: (state, defaultState) => {
            state.connectionName = defaultState.connectionName;
            state.jsonSource = defaultState.jsonSource;
            state.newConnectionName = defaultState.newConnectionName;
        },
        template: 'dxrd-page-specify-connection'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_treeListNode.js




var defaultObjectDataSourceItemSpecifics = 'Default';
class _treeListNode_TreeNodeBase extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(name, displayName, specifics, isChecked = false, afterCheckToggled) {
        super();
        this.name = name;
        this.displayName = displayName;
        this.specifics = specifics;
        this.checked = external_ko_["pureComputed"](() => this._checked());
        this.isList = false;
        this._checked = external_ko_["observable"](isChecked);
        this._afterCheckToggled = afterCheckToggled || external_jQuery_["noop"];
    }
    unChecked() {
        return this.checked() === false;
    }
    toggleChecked() {
        this.setChecked(!this.checked.peek());
        this._afterCheckToggled(this);
    }
    setChecked(value) {
        this._checked(value);
    }
}
class TreeLeafNode extends _treeListNode_TreeNodeBase {
    constructor(name, displayName, specifics, isChecked = false, nodeArguments = null, afterCheckToggled) {
        super(name, displayName, specifics, isChecked, afterCheckToggled);
        this.name = name;
        this.displayName = displayName;
        this.specifics = specifics;
        this.hasQuery = false;
        this.arguments = nodeArguments;
    }
}
class _treeListNode_TreeNode extends _treeListNode_TreeNodeBase {
    constructor(name, displayName, specifics, isChecked, afterCheckToggled) {
        super(name, displayName, specifics, isChecked, afterCheckToggled);
        this.countChecked = external_ko_["pureComputed"](() => {
            var count = 0;
            for (var i = 0; i < this.children().length; i++) {
                if (!this.children()[i].unChecked()) {
                    if (count > 1)
                        break;
                    count++;
                }
            }
            return count;
        });
        this.isList = true;
        this.children = external_ko_["observableArray"]([]);
        this.checked = external_ko_["pureComputed"]({
            read: () => {
                if (!this.initialized()) {
                    return this._checked();
                }
                else {
                    var selectedItems = 0;
                    var partiallySelectedItems = 0;
                    this.children().forEach(item => {
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
                    if (selectedItems === this.children.peek().length) {
                        return true;
                    }
                    return undefined;
                }
            }
        });
    }
    initialized() {
        return this.children().length > 0;
    }
    setChecked(value) {
        this._checked(value);
        this.children.peek().forEach(item => {
            item.setChecked(value);
        });
    }
    initializeChildren(children) {
        this.children(children || []);
    }
}
class _treeListNode_ParameterTreeNode extends _treeListNode_TreeNode {
    constructor(name, displayName, specifics, isChecked, afterCheckToggled) {
        super(name, displayName, specifics, isChecked, afterCheckToggled);
        this.countChecked = external_ko_["pureComputed"](() => {
            var count = 0;
            this.hasParamsToEdit(false);
            for (var i = 0; i < this.children().length; i++) {
                var child = this.children()[i];
                if (!child.unChecked()) {
                    if (count > 1)
                        break;
                    count++;
                    if (child.arguments && child.arguments.length > 0)
                        this.hasParamsToEdit(true);
                    if (child.specifics === 'query')
                        this.hasParamsToEdit(true);
                }
            }
            return count;
        });
        this.hasParamsToEdit = external_ko_["observable"](false);
    }
}
class _treeListNode_QueriesTreeNode extends _treeListNode_ParameterTreeNode {
    constructor(name, displayName, specifics, isChecked, callbacks, afterCheckToggled) {
        super(name, displayName, specifics, isChecked, afterCheckToggled);
        this.addAction = {
            clickAction: (item) => {
                if (this.disableCustomSql()) {
                    return this.addQuery();
                }
                else {
                    return this.showPopover();
                }
            },
            imageClassName: 'dxrd-image-add',
            imageTemplateName: 'dxrd-svg-operations-add',
            templateName: 'dx-treelist-action-with-popover',
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Add query', 'AnalyticsCoreStringId.SqlDSWizard_AddQuery')
        };
        this.itemClickAction = (e) => {
            this.popoverVisible(false);
            e.itemData.addAction();
        };
        this.className = 'dx-addqueries-popover';
        this.popoverVisible = external_ko_["observable"](false);
        this.path = name;
        this.addQuery = () => {
            callbacks().showQbCallBack();
        };
        this.addCustomQuery = () => {
            callbacks().showQbCallBack(null, true);
        };
        this.disableCustomSql = () => callbacks && callbacks().disableCustomSql;
        this.target = '.' + this.addAction.templateName;
        this.selectionDisabled = external_ko_["pureComputed"](() => {
            return !this.children().length;
        });
    }
    getActions(context) {
        var result = [];
        if (context.path.indexOf('queries') === 0) {
            result.push(this.addAction);
        }
        return result;
    }
    popoverListItems() {
        return [
            {
                name: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Run Query Builder', 'DataAccessUIStringId.Button_QueryBuilder'),
                addAction: () => this.addQuery()
            },
            {
                name: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Write Custom SQL', 'AnalyticsCoreStringId.SqlDSWizard_WriteCustomSQL'),
                addAction: () => this.addCustomQuery()
            }
        ];
    }
    showPopover() {
        this.popoverVisible(true);
    }
}
class _treeListNode_TreeQueryNode extends TreeLeafNode {
    constructor(name, displayName, specifics, isChecked, parameters, callbacks, afterCheckToggled, query) {
        super(name, displayName, specifics, isChecked, null, afterCheckToggled);
        this.query = query;
        this.editAction = {
            clickAction: (item) => {
                return this.editQuery();
            },
            imageClassName: 'dx-image-edit',
            imageTemplateName: 'dxrd-svg-operations-edit',
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Edit query', 'AnalyticsCoreStringId.SqlDSWizard_EditQuery')
        };
        this.removeAction = {
            clickAction: (item) => {
                this.removeQuery({ model: item.data });
            },
            imageClassName: 'dxrd-image-recycle-bin',
            imageTemplateName: 'dxrd-svg-operations-recycle_bin',
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Remove query', 'AnalyticsCoreStringId.SqlDSWizard_RemoveQuery')
        };
        this.parameters = parameters;
        this.removeQuery = (e) => {
            if (!e.model.unChecked()) {
                e.model.toggleChecked();
            }
            callbacks().deleteAction(e.model.name);
        };
        this.editQuery = (e) => {
            callbacks().showQbCallBack(this.name);
        };
        this.hasQuery = true;
    }
    setObservableName(name) {
        this._name = name;
        ['name', 'displayName'].forEach((propertyName) => Object.defineProperty(this, propertyName, {
            get() {
                return this._name();
            },
            set(newVal) {
                return this._name(newVal);
            },
            configurable: true
        }));
    }
    getActions(context) {
        var result = [];
        result.push(this.removeAction);
        result.push(this.editAction);
        return result;
    }
}
class _treeListNode_FieldTreeNode extends _treeListNode_TreeNodeBase {
    constructor(name, displayName, specifics, isChecked, path, afterCheckToggled, isDraggable = false) {
        super(name, displayName, specifics, isChecked, afterCheckToggled);
        this.visible = external_ko_["observable"](true);
        this.disabled = external_ko_["observable"](false);
        this.path = path;
        this.isComplex = specifics === defaultObjectDataSourceItemSpecifics;
        if (isDraggable)
            this.dragData = { noDragable: false };
    }
}
class _treeListNode_DataMemberTreeNode extends _treeListNode_TreeNode {
    constructor(name, displayName, specifics, isChecked, path, afterCheckToggled) {
        super(name, displayName, specifics, isChecked, afterCheckToggled);
        this.visible = external_ko_["observable"](true);
        this.path = path;
        this.isComplex = this.isList && specifics === defaultObjectDataSourceItemSpecifics;
        this.checked = external_ko_["pureComputed"]({
            read: () => {
                if (!this.initialized()) {
                    return this._checked();
                }
                else {
                    var selectedItems = 0;
                    var partiallySelectedItems = 0;
                    var visibleChildren = this.children().filter(item => item.visible());
                    visibleChildren.forEach(item => {
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
    }
    setChecked(value) {
        super.setChecked(this.visible() ? value : false);
    }
}
class _treeListNode_SingleCheckedDataMemberTreeNode extends _treeListNode_DataMemberTreeNode {
    constructor(name, displayName, specifics, isChecked, path, afterCheckToggled) {
        super(name, displayName, specifics, isChecked, path, afterCheckToggled);
        this.checked = external_ko_["pureComputed"]({
            read: () => {
                return this._checked();
            }
        });
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_treeNodeItemsProvider.js






class _treeNodeItemsProvider_TreeNodeItemsProvider extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(fieldListProvider, rootItems, generateTreeNode, generateTreeLeafNode) {
        super();
        this._fullTreeLoaded = false;
        this._rootItems = external_ko_["observableArray"]([]);
        this._checkedRootNodesCount = external_ko_["computed"](() => {
            if (!this._rootItems || this._rootItems().length === 0)
                return 0;
            var count = 0;
            for (var i = 0; i < this._rootItems().length && count < 1; i++) {
                count += this._rootItems()[i].unChecked() ? 0 : 1;
            }
            return count;
        });
        this.hasCheckedItems = external_ko_["computed"](() => {
            return !(this._checkedRootNodesCount() === 0);
        });
        this.getRootItems = () => this._rootItems();
        this.getItems = (pathRequest, collectChilds = false) => {
            var result = external_jQuery_["Deferred"]();
            if (!pathRequest.fullPath && pathRequest.pathParts.length === 0) {
                result.resolve(this._rootItems());
            }
            else {
                fieldListProvider.getItems(pathRequest).done((value) => {
                    var currentParentNode = this._getParentNode(pathRequest);
                    if (!currentParentNode || !currentParentNode.children)
                        return result.reject();
                    if (currentParentNode.children().length === 0) {
                        var array = [];
                        var listPath = [];
                        value.forEach(item => {
                            var isChecked = this._getDefaultTreeNodeCheckState(item);
                            if (this.isList(item, currentParentNode)) {
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
                            external_jQuery_["when"](...listPath.map(x => this.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](x.join('.'), x), collectChilds))).always(() => result.resolve(array));
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
        this._disposables.push(rootItems.subscribe((newValue) => {
            this._fullTreeLoaded = false;
            this._rootItems(newValue.map(item => {
                var isChecked = this._getDefaultTreeNodeCheckState(item);
                return generateTreeNode(item, isChecked, item.name);
            }));
        }));
        this._disposables.push(this.hasCheckedItems);
    }
    _createTree() {
        if (!this._fullTreeLoaded)
            return external_jQuery_["when"](...this._rootItems().map(item => this.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](item.path), true))).always(() => this._fullTreeLoaded = true);
        else {
            return external_jQuery_["Deferred"]().resolve().promise();
        }
    }
    _createTreePart(pathParts, deferred = external_jQuery_["Deferred"](), checkedPath) {
        if (this._fullTreeLoaded)
            return deferred.resolve().promise();
        if (pathParts.length === 0)
            return deferred.resolve();
        if (!checkedPath) {
            var deferred = external_jQuery_["Deferred"]();
            if (pathParts.length === 1) {
                this.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](pathParts[0], pathParts)).done(() => deferred.resolve()).fail(() => deferred.reject());
            }
            else
                this._createTreePart(pathParts.slice(1), deferred, [pathParts[0]]);
            return deferred;
        }
        else {
            var newParentPath = [].concat([], checkedPath, pathParts[0]);
            var request = new external_DevExpress_Analytics_Utils_["PathRequest"](newParentPath.join('.'), newParentPath);
            if (!this._getParentNode(request)) {
                this.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](checkedPath.join('.'), checkedPath)).done((res) => {
                    this._createTreePart(pathParts.slice(1), deferred, newParentPath);
                }).fail(() => deferred.reject());
            }
            else {
                this._createTreePart(pathParts.slice(1), deferred, newParentPath);
            }
        }
    }
    _setChecked(item) {
        item.setChecked(true);
        if (item instanceof _treeListNode_DataMemberTreeNode) {
            item.children().forEach(x => this._setChecked(x));
        }
    }
    selectAllItems(onlyRoot = true) {
        var deferred = external_jQuery_["Deferred"]();
        this._createTree().always(() => {
            if (onlyRoot) {
                this._rootItems().forEach(x => x.setChecked(true));
            }
            else {
                this._rootItems().forEach(x => this._setChecked(x));
            }
            deferred.resolve();
        });
        return deferred.promise();
    }
    selectItemsByPath(path) {
        var deferred = external_jQuery_["Deferred"]();
        var pathParts = path.split('.');
        this._createTreePart(pathParts).done(() => {
            this.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](pathParts.join('.'), pathParts)).done((items) => {
                items.forEach(item => {
                    if (item instanceof _treeListNode_TreeNodeBase) {
                        item.setChecked(true);
                    }
                });
            }).always(() => deferred.resolve());
        });
        return deferred.promise();
    }
    selectItemByPath(path) {
        var deferred = external_jQuery_["Deferred"]();
        var pathParts = path.split('.');
        this._createTreePart(pathParts).done(() => {
            var fieldName = pathParts.pop();
            this.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](pathParts.join('.'), pathParts)).done((items) => {
                var item = items.filter(x => x.name === fieldName)[0];
                if (item instanceof _treeListNode_TreeNodeBase) {
                    item.setChecked(true);
                }
            }).always(() => deferred.resolve());
        });
        return deferred.promise();
    }
    _getParentNode(pathRequest) {
        var parentNode = this._rootItems().filter(item => item.path === (pathRequest.id || pathRequest.ref))[0];
        if (!parentNode)
            return;
        var childPath = parentNode.path;
        for (var index = 1; index < pathRequest.pathParts.length; index++) {
            if (!parentNode)
                return;
            childPath += '.' + pathRequest.pathParts[index];
            parentNode = parentNode.children().filter(item => Object(external_DevExpress_Analytics_Internal_["isList"])(item) && item.path == childPath)[0];
        }
        return parentNode;
    }
    _getDefaultTreeNodeCheckState(item) {
        return false;
    }
    isList(dataMember, parentNode) {
        return Object(external_DevExpress_Analytics_Internal_["isList"])(dataMember);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_jsonTreeNodeItemsProvider.js

class _jsonTreeNodeItemsProvider_JsonTreeNodeItemsProvider extends _treeNodeItemsProvider_TreeNodeItemsProvider {
    constructor(fieldListProvider, rootItems, generateTreeNode, generateTreeLeafNode) {
        super(fieldListProvider, rootItems, generateTreeNode, generateTreeLeafNode);
    }
    _getDefaultTreeNodeCheckState(item) {
        return item.isSelected;
    }
    getNodeByPath(pathRequest) {
        var listNode = this._rootItems().filter(item => item.path === (pathRequest.pathParts || [])[0])[0];
        if (!listNode)
            return;
        var childPath = listNode.path;
        for (var index = 1; index < pathRequest.pathParts.length; index++) {
            if (!listNode)
                return;
            childPath += '.' + pathRequest.pathParts[index];
            listNode = listNode.children().filter(item => item.path == childPath)[0];
        }
        return listNode;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/jsonDataSourceWizard/chooseJsonSchemaPage.js












class chooseJsonSchemaPage_ChooseJsonSchemaPage extends wizardPageBase_WizardPageBase {
    constructor(_requestWrapper = new requestwrapper_RequestWrapper(), _allowObjectRootElements = true, _callbacks) {
        super();
        this._requestWrapper = _requestWrapper;
        this._allowObjectRootElements = _allowObjectRootElements;
        this._callbacks = _callbacks;
        this._rootItems = external_ko_["observableArray"]([]);
        this._fieldListItemsProvider = external_ko_["observable"](null);
        this._fieldSelectedPath = external_ko_["observable"](null);
        this._cachedState = {
            connectionName: null,
            jsonSource: null
        };
        this._createTreeNode = (item, isChecked, path) => {
            var node = new _treeListNode_DataMemberTreeNode(item.name, item.displayName, item.specifics, isChecked, path);
            this._disposables.push(node.checked.subscribe(() => this._onChange()));
            return node;
        };
        this._createLeafTreeNode = (item, isChecked, path) => {
            var node = new _treeListNode_FieldTreeNode(item.name, item.displayName, item.specifics, isChecked, path);
            this._disposables.push(node.checked.subscribe(() => this._onChange()));
            return node;
        };
        this._rootElementTitle = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Root element:', 'DataAccessUIStringId.WizardPageChooseJsonSchema_RootElement');
        this._rootElementList = external_ko_["observable"]([]);
        this._selectedRootElement = external_ko_["observable"](null);
        var rootElementSubscription = null;
        this._disposables.push(this._rootElementList.subscribe((rootElements) => {
            rootElementSubscription && rootElementSubscription.dispose();
            rootElementSubscription = this._selectedRootElement.subscribe((selectedPath) => {
                if (!selectedPath)
                    return this._rootItems([]);
                var rootNode = this._getSchemaToDataMemberInfo(selectedPath);
                if (rootNode) {
                    this._rootItems([{
                            name: external_ko_["unwrap"](rootNode.name),
                            isSelected: external_ko_["unwrap"](rootNode.selected),
                            displayName: external_ko_["unwrap"](rootNode.displayName) || external_ko_["unwrap"](rootNode.name),
                            data: rootNode,
                            specifics: rootNode.nodes.length > 0 ? 'List' : 'Default'
                        }]);
                }
            });
            this._selectedRootElement(rootElements[0]);
        }));
        var fieldListProvider = new external_DevExpress_Analytics_Internal_["FieldListProvider"](this._createFieldListCallback(), this._rootItems);
        this._fieldListItemsProvider(new _jsonTreeNodeItemsProvider_JsonTreeNodeItemsProvider(fieldListProvider, this._rootItems, this._createTreeNode, this._createLeafTreeNode));
        this._disposables.push(this._fieldListItemsProvider());
        this._fieldListModel = {
            expandRootItems: true,
            itemsProvider: this._fieldListItemsProvider(),
            selectedPath: this._fieldSelectedPath,
            treeListController: null,
            templateName: 'dxrd-treelist-with-checkbox'
        };
    }
    _clear() {
        this._rootItems([]);
        this._fieldSelectedPath('');
        this._rootElementList([]);
        this._selectedRootElement(null);
        this._dataSource && this._dataSource.jsonSchemaProvider.reset();
        this._cachedState = {
            connectionName: null,
            jsonSource: null
        };
    }
    _createFieldListCallback() {
        return (pathRequest) => {
            var parentNode = new jsonSchemaNode_JsonNode({});
            parentNode.nodes = [this._rootItems()[0].data];
            var itemsByPath = this._getInnerItemsByPath(pathRequest, parentNode);
            return external_jQuery_["Deferred"]().resolve(itemsByPath).promise();
        };
    }
    _getSchemaToDataMemberInfo(path) {
        var nodeAcc = this._dataSource.schema;
        for (var i = 0; i < path.pathParts.length; i++) {
            nodeAcc = nodeAcc.nodes.filter(node => node.name() === path.pathParts[i])[0];
            if (!nodeAcc)
                return null;
        }
        return nodeAcc;
    }
    _mapJsonNodesToTreelistItems(nodes) {
        return external_jQuery_["map"]((nodes || []), (node) => {
            var dataMemberInfo = {
                name: node.name(),
                displayName: node.displayName || node.name(),
                isSelected: node.selected(),
                isList: node.nodes && node.nodes.length > 0,
                specifics: 'Default'
            };
            return dataMemberInfo;
        });
    }
    _getNodesByPath(pathRequest, parentNode) {
        if (!pathRequest.fullPath) {
            return parentNode.nodes;
        }
        else {
            var currentNodes = parentNode.nodes;
            for (var i = 0; i < pathRequest.pathParts.length; i++) {
                var pathPart = (currentNodes || []).filter((node) => node.name() == pathRequest.pathParts[i])[0];
                if (!pathPart)
                    return [];
                currentNodes = pathPart.nodes;
            }
            return currentNodes;
        }
    }
    _getInnerItemsByPath(pathRequest, parentNode) {
        var nodes = this._getNodesByPath(pathRequest, parentNode);
        return this._mapJsonNodesToTreelistItems(nodes);
    }
    _beginInternal(state) {
        if ((state.connectionName && this._cachedState.connectionName === state.connectionName) ||
            (state.jsonSource && this._cachedState.jsonSource === state.jsonSource))
            return external_jQuery_["Deferred"]().resolve().promise();
        this._clear();
        this._cachedState = {
            connectionName: state.connectionName,
            jsonSource: state.jsonSource
        };
        var oldDataSourceId = this._dataSource && this._dataSource.id;
        this._dataSource = _restoreJsonDataSourceFromState(state, this._requestWrapper);
        if ((oldDataSourceId && oldDataSourceId != this._dataSource.id) || !this._dataSource.schema.nodes.length) {
            return this._dataSource.getSchema(this._callbacks && this._callbacks.getParameters && this._callbacks.getParameters())
                .done((schema) => this._updatePage(schema));
        }
        return external_jQuery_["Deferred"]().done((schema) => this._updatePage(schema)).resolve(this._dataSource.schema).promise();
    }
    _updatePage(jsonSchema) {
        var rootElementList = jsonSchema.getRootElementPartList(this._allowObjectRootElements);
        if (this._rootElementList() !== rootElementList) {
            this._rootElementList(this._filterRootElementList(rootElementList, jsonSchema));
        }
        if (this._dataSource.rootElement()) {
            var dataSourceRootElementPath = ['root', this._dataSource.rootElement()].join('.');
            var rootElementToSelect = this._rootElementList().filter(item => item.fullPath === dataSourceRootElementPath)[0] || this._rootElementList()[0];
            this._selectedRootElement(rootElementToSelect);
        }
        this._onChange();
    }
    _resetSelectionRecursive(currentNode, selectedRootElement) {
        if (currentNode === selectedRootElement) {
            return;
        }
        currentNode.selected && currentNode.selected(false);
        (currentNode.nodes || []).forEach(node => this._resetSelectionRecursive(node, selectedRootElement));
    }
    _mapJsonSchema(jsonNode, path) {
        var treelistNode = this._fieldListItemsProvider().getNodeByPath(path);
        if (!treelistNode)
            return;
        jsonNode.selected(treelistNode.checked() !== false);
        (jsonNode.nodes || []).forEach(innerJsonNode => {
            var nextPathParts = path.pathParts.concat(innerJsonNode.name());
            var nextFullPath = nextPathParts.join('.');
            var nextPath = { fullPath: nextFullPath, path: innerJsonNode.name(), id: nextFullPath, pathParts: nextPathParts };
            this._mapJsonSchema(innerJsonNode, nextPath);
        });
        return jsonNode;
    }
    _filterRootElementList(rootElementList, jsonSchema) {
        return rootElementList;
    }
    canNext() {
        return false;
    }
    canFinish() {
        return this._fieldListItemsProvider().hasCheckedItems();
    }
    commit() {
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
        var serialized = new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(this._dataSource);
        return external_jQuery_["Deferred"]().resolve({
            connectionName: this._dataSource.connectionName(),
            dataSourceName: serialized['@Name'],
            jsonScheme: JSON.stringify(serialized.Schema),
            rootElement: serialized['@RootElement']
        }).promise();
    }
    initialize(state) {
        return this._beginInternal(state);
    }
    reset() {
        this._clear();
    }
}
function _registerChooseJsonSchemaPage(factory, requestWrapper, callbacks) {
    factory.registerMetadata(JsonDataSourceWizardPageId.ChooseJsonSchemaPage, {
        setState: (data, state) => {
            state.dataSourceName = data.dataSourceName;
            state.jsonScheme = data.jsonScheme;
            state.rootElement = data.rootElement;
        },
        getState: (state) => {
            return state.jsonDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.dataSourceName = defaultState.dataSourceName;
            state.jsonScheme = defaultState.jsonScheme;
            state.rootElement = defaultState.rootElement;
        },
        create: () => {
            return new chooseJsonSchemaPage_ChooseJsonSchemaPage(requestWrapper, undefined, callbacks);
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Select data fields.', 'DataAccessUIStringId.WizardPageChooseJsonSchema'),
        template: 'dxrd-jsondatasource-fields-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/_requestwrapper.js

function wrapGetSelectStatement(callback) {
    return (connection, queryJSON) => {
        if (callback)
            return callback(connection, queryJSON);
        return new requestwrapper_RequestWrapper().getSelectStatement(connection, queryJSON);
    };
}
function wrapRebuildResultSchema(callback) {
    return (dataSource, queryName, relationsEditing) => {
        if (callback)
            return callback(dataSource, queryName, relationsEditing);
        return new requestwrapper_RequestWrapper().rebuildResultSchema(dataSource, queryName, relationsEditing);
    };
}
function wrapGetFederationdResultSchema(callback) {
    return (dataSource) => {
        if (callback)
            return callback(dataSource);
        return new requestwrapper_RequestWrapper().getFederationResultSchema(dataSource);
    };
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_queryBuilderPopup.js







class _queryBuilderPopup_QueryBuilderPopupBase extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(applyNewQuery, rtl = false, customizeQBInitializationData = (options) => options) {
        super();
        this.customizeQBInitializationData = customizeQBInitializationData;
        this._querySource = external_ko_["observable"](null);
        this._dbSchemaProvider = external_ko_["observable"](null);
        this.designer = external_ko_["observable"]();
        this.qbOptions = external_ko_["observable"](null);
        this.okButtonDisabled = external_ko_["pureComputed"](() => { return this.designer() && !this.designer().model().isValid(); });
        this.isVisible = external_ko_["observable"](false);
        this.showLoadIndicator = external_ko_["observable"](false);
        this.localizationIdMap = {
            'title': { text: 'Query Builder', localizationId: 'DataAccessUIStringId.QueryBuilder' },
            'loading': { text: 'Loading...', localizationId: 'AnalyticsCoreStringId.Loading' },
            'previewResults': { text: 'Preview Results...', localizationId: 'DataAccessUIStringId.QueryBuilderButtons_PreviewResults' },
            'cancel': { text: 'Cancel', localizationId: 'AnalyticsCoreStringId.SearchDialog_Cancel' },
            'ok': { text: 'OK', localizationId: 'DataAccessUIStringId.Button_OK' }
        };
        this._rtl = rtl;
        this._applyQuery = applyNewQuery;
        this.qbOptions(this.qbOptions() || this.customizeQBInitializationData({
            queryBuilderModel: this.designer,
            dbSchemaProvider: this._dbSchemaProvider,
            querySource: this._querySource,
            callbacks: { CustomizeMenuActions: _queryBuilderPopup_QueryBuilderPopup.customizeQueryBuilderActions },
            rtl: this._rtl
        }));
    }
    show(query, dataSource) {
        this._dataSource = dataSource;
        this._dbSchemaProvider(dataSource.dbSchemaProvider);
        this._querySource(new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(query));
        this.isVisible(true);
        this.designer().updateSurface();
    }
    cancelHandler() {
        this.isVisible(false);
    }
    previewHandler() {
        this.designer().showPreview();
    }
    okHandler() {
        if (this.designer().model().canSave()) {
            this._applyQuery(this.createQuery(), this.showLoadIndicator)
                .done(() => {
                this.isVisible(false);
            });
        }
    }
    onHiddingHandler() {
        this.designer().dataPreview.isVisible(false);
    }
    popupViewModel(element) {
        var $container = Object(external_DevExpress_Analytics_Internal_["getParentContainer"])(element);
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
            onHidding: this.onHiddingHandler
        };
    }
    getDisplayText(key) {
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])(this.localizationIdMap[key].text, this.localizationIdMap[key].localizationId);
    }
}
_queryBuilderPopup_QueryBuilderPopupBase.customizeQueryBuilderActions = (sender, args) => {
    var actions = args.Actions;
    var del = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(actions, action => action.text === 'Delete'), undo = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(actions, action => action.text === 'Undo'), redo = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(actions, action => action.text === 'Redo');
    actions.splice(0, actions.length, del, undo, redo);
};
class _queryBuilderPopup_QueryBuilderPopup extends _queryBuilderPopup_QueryBuilderPopupBase {
    constructor(applyNewQuery, rtl = false, customizeQBInitializationData = (options) => options) {
        super(applyNewQuery, rtl, customizeQBInitializationData);
        this.customizeQBInitializationData = customizeQBInitializationData;
    }
    getDataSource() {
        return this._dataSource;
    }
    createQuery() {
        return new tableQuery_TableQuery(this.designer().model().serialize(), this.getDataSource());
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_selectQuerySqlTextProvider.js


class _selectQuerySqlTextProvider_SelectQuerySqlTextProvider {
    constructor(_selectStatementCallback, _connection) {
        this._selectStatementCallback = _selectStatementCallback;
        this._connection = _connection;
    }
    getQuerySqlText(newQuery) {
        var queryJSON = JSON.stringify({ 'Query': new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(newQuery) });
        return this._selectStatementCallback(this._connection(), queryJSON)
            .fail((data) => {
            var error = Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(data);
            Object(external_DevExpress_Analytics_Internal_["ShowMessage"])('Unable to build a SQL string' + (error ? ': ' + error : '.'));
        });
    }
}

// EXTERNAL MODULE: external "window[\"ace\"]"
var external_window_ace_ = __webpack_require__(9);
var external_window_ace_default = /*#__PURE__*/__webpack_require__.n(external_window_ace_);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/ace/_ace-mode-sql.js

if (!!external_window_ace_default.a) {
    external_window_ace_default.a.define('ace/mode/sql_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules', 'ace/mode/doc_comment_highlight_rules'], function (require, exports, module) {
        'use strict';
        var oop = external_window_ace_default.a.require('ace/lib/oop');
        var DocCommentHighlightRules = external_window_ace_default.a.require('ace/mode/doc_comment_highlight_rules').DocCommentHighlightRules;
        var TextHighlightRules = external_window_ace_default.a.require('ace/mode/text_highlight_rules').TextHighlightRules;
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
    external_window_ace_default.a.define('ace/mode/sql', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/sql_highlight_rules', 'ace/range'], function (require, exports, module) {
        'use strict';
        var oop = external_window_ace_default.a.require('ace/lib/oop');
        var TextMode = external_window_ace_default.a.require('ace/mode/text').Mode;
        var SqlHighlightRules = external_window_ace_default.a.require('ace/mode/sql_highlight_rules').SqlHighlightRules;
        var Range = external_window_ace_default.a.require('ace/range').Range;
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

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/ace/_options.js

function createDefaultSQLAceOptions(readOnly = false) {
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
function createDefaultSQLAdditionalOptions(value) {
    return {
        onChange: (session) => {
            value(session.getValue());
        },
        onValueChange: (editor) => {
            editor.resize(true);
        },
        changeTimeout: 200,
        overrideEditorFocus: true,
        setUseWrapMode: true
    };
}
function createDefaultSQLLanguageHelper() {
    return {
        getLanguageMode: () => 'ace/mode/sql',
        createCompleters: () => { return []; }
    };
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_selectStatementQueryControl.js









class _selectStatementQueryControl_SelectStatementQueryControl extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(sqlTextProvider, disableCustomSql) {
        super();
        this._tableQueryString = external_ko_["observable"]('');
        this._query = external_ko_["observable"]();
        this._needToCustomizeParameters = external_ko_["pureComputed"](() => {
            return this._query() && (this._query().type() === SqlQueryType.customSqlQuery || this._query().parameters().length > 0);
        });
        this.template = 'dxrd-select-control';
        this.aceOptions = createDefaultSQLAceOptions();
        this.additionalOptions = createDefaultSQLAdditionalOptions((newVal) => { this.sqlString(newVal); });
        this.aceAvailable = Object(external_DevExpress_Analytics_Widgets_Internal_["aceAvailable"])();
        this.languageHelper = createDefaultSQLLanguageHelper();
        this.caption = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('SQL string:', 'DataAccessUIStringId.QueryControl_SqlString');
        this.sqlString = external_ko_["pureComputed"]({
            read: () => {
                return this._query() && this._query().type() === SqlQueryType.customSqlQuery ? this._query().sqlString() : this._tableQueryString();
            },
            write: (val) => {
                if (this._query().type() !== SqlQueryType.customSqlQuery) {
                    var customQuery = new customSqlQuery_CustomSqlQuery({ '@Name': this._query().name() }, this._query().parent);
                    customQuery.parameters(this._query().parameters());
                    customQuery.sqlString(val);
                    this._query(customQuery);
                }
                else {
                    this._query().sqlString(val);
                }
            }
        });
        this.isNextDisabled = external_ko_["pureComputed"](() => {
            return !this.sqlString() || !this._needToCustomizeParameters();
        });
        this.isFinishDisabled = external_ko_["pureComputed"](() => {
            return !this.sqlString() || this._needToCustomizeParameters();
        });
        this._sqlTextProvider = sqlTextProvider;
        this.disableCustomSql = () => disableCustomSql;
        this.aceOptions.readOnly = this.disableCustomSql();
        this._disposables.push(this._needToCustomizeParameters, this.sqlString);
    }
    setQuery(query, isInProcess) {
        if (this._query() !== query && query.type() === SqlQueryType.tableQuery) {
            isInProcess && isInProcess(true);
            return this._sqlTextProvider.getQuerySqlText(query)
                .done((response) => {
                if (response.errorMessage)
                    Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(response.errorMessage);
                this._tableQueryString(response.sqlSelectStatement);
                this._query(query);
            })
                .always(() => { isInProcess && isInProcess(false); });
        }
        else {
            this._query(query);
            return external_jQuery_["Deferred"]().resolve().promise();
        }
    }
    getQuery() {
        return this._query();
    }
    get runQueryBuilderDisabled() {
        return false;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_storedProceduresQueryControl.js










class _storedProceduresQueryControl_StoredProceduresQueryControl extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor() {
        super();
        this.template = 'dxrd-procedures-control';
        this.storedProcedures = external_ko_["observableArray"]([]);
        this.selectedProcedure = external_ko_["observableArray"]([]);
        this.caption = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Select a stored procedure:', 'DataAccessUIStringId.StoredProcControl_Caption');
        this.generateStoredProcedureDisplayName = procedure => _storedProceduresQueryControl_StoredProceduresQueryControl.generateStoredProcedureDisplayName(procedure);
        this.isNextDisabled = external_ko_["pureComputed"](() => {
            return !this._selectedProcedure || !this._needToProcessParameters(this._selectedProcedure);
        });
        this.isFinishDisabled = external_ko_["pureComputed"](() => {
            return !this._selectedProcedure || this._needToProcessParameters(this._selectedProcedure);
        });
        this.storedProcedures.subscribe((newProcedures) => {
            if (!newProcedures) {
                this._selectedProcedure = null;
            }
            else if (this._selectedProcedure) {
                this._selectedProcedure = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this.storedProcedures(), 'name', this._selectedProcedure.name);
            }
            else if (this._query && this._query.procName()) {
                this._selectedProcedure = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this.storedProcedures(), 'name', this._query.procName());
            }
            else {
                this._selectedProcedure = newProcedures[0];
            }
        });
    }
    _needToProcessParameters(procedure) {
        return procedure.arguments.some(_storedProceduresQueryControl_StoredProceduresQueryControl._availableConvertToParameter);
    }
    static _availableConvertToParameter(arg) {
        return arg.direction !== DBStoredProcedureArgumentDirection.Out;
    }
    get _selectedProcedure() {
        return this.selectedProcedure()[0];
    }
    set _selectedProcedure(value) {
        this.selectedProcedure(value ? [value] : []);
    }
    scrollActiveItem(e) {
        var model = e.model;
        var procedure = model.selectedProcedure.peek();
        e.component.scrollToItem(procedure[0]);
    }
    static generateStoredProcedureDisplayName(procedure) {
        if (procedure.arguments.length === 0)
            return procedure.name;
        return procedure.arguments.reduce((value, item, index, array) => {
            return value += item.name + (index < array.length - 1 ? ', ' : ')');
        }, procedure.name + '(');
    }
    setQuery(query) {
        this._query = query;
        this._selectedProcedure = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this.storedProcedures(), 'name', query.procName());
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    getQuery() {
        if (!this._selectedProcedure)
            return null;
        var newQuery = new storedProcQuery_StoredProcQuery({ '@Name': this._query.name() || this._selectedProcedure.name, 'ProcName': this._selectedProcedure.name }, this._query.parent);
        this._selectedProcedure.arguments.forEach((arg) => {
            if (_storedProceduresQueryControl_StoredProceduresQueryControl._availableConvertToParameter(arg)) {
                newQuery.parameters.push(Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this._query.parameters(), 'name', arg.name) || new dataSourceParameter_DataSourceParameter({ '@Name': arg.name, '@Type': DBColumn.GetType(arg.type) }, null, storedProcParameterSerializationsInfo(DBColumn.GetType(arg.type))));
            }
        });
        return newQuery;
    }
    get runQueryBuilderDisabled() {
        return true;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/sqlDataSourceWizard/configureQueryPage.js




















class configureQueryPage_ConfigureQueryPage extends wizardPageBase_WizardPageBase {
    constructor(_options) {
        super();
        this._options = _options;
        this._connection = () => {
            return this._dataSource().connection;
        };
        this._dataSource = () => {
            return this._dataSourceWrapper && this._dataSourceWrapper.sqlDataSource;
        };
        this.queryNameCaption = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Query Name', 'AnalyticsCoreStringId.SqlDSWizard_QueryName') + ':';
        this.queryControl = external_ko_["observable"]();
        this.runQueryBuilderBtnText = external_ko_["pureComputed"](() => {
            return (!this._selectStatementControl.sqlString() || this._selectStatementControl.getQuery().type() === SqlQueryType.tableQuery) ?
                Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Run Query Builder...', 'DataAccessUIStringId.Button_QueryBuilder') :
                Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Create New Query...', 'AnalyticsCoreStringId.SqlDSWizard_CreateNewQuery');
        }).extend({ deferred: true });
        this.placeholder = () => {
            var queryControl = this.queryControl();
            var query = queryControl && queryControl.getQuery();
            var queryName = this.initialName || (query && query.generateName());
            return queryName ? Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Type custom query name (current name: {0})', 'AnalyticsCoreStringId.SqlDSWizard_QueryNamePlaceholder'), queryName) : queryName;
        };
        this.queryName = external_ko_["observable"]('');
        this.queryTypeItems = [configureQueryPage_ConfigureQueryPage.QUERY_TEXT, configureQueryPage_ConfigureQueryPage.SP_TEXT];
        this.selectedQueryType = external_ko_["observable"]();
        this.initialName = '';
        this._proceduresList = new _storedProceduresQueryControl_StoredProceduresQueryControl();
        this._disposables.push(this._selectStatementControl = new _selectStatementQueryControl_SelectStatementQueryControl(new _selectQuerySqlTextProvider_SelectQuerySqlTextProvider(wrapGetSelectStatement(this._options.callbacks.selectStatement), this._connection), this._options.disableCustomSql));
        this._disposables.push(this.selectedQueryType.subscribe((value) => {
            if (value === configureQueryPage_ConfigureQueryPage.SP_TEXT) {
                this[__loadingStateFunctionName] && this[__loadingStateFunctionName](true);
                this._dataSource().dbSchemaProvider.getDbStoredProcedures().done((procedures) => {
                    this._proceduresList.storedProcedures([]);
                    this._proceduresList.storedProcedures(procedures);
                }).always((x) => this[__loadingStateFunctionName] && this[__loadingStateFunctionName](false));
                this.queryControl(this._proceduresList);
            }
            else {
                this.queryControl(this._selectStatementControl);
            }
        }));
        this.selectedQueryType(configureQueryPage_ConfigureQueryPage.QUERY_TEXT);
        this.popupQueryBuilder = new _queryBuilderPopup_QueryBuilderPopup((newQuery, isInProcess) => {
            this.queryName(newQuery.name() || newQuery.generateName());
            return this._selectStatementControl.setQuery(newQuery, isInProcess);
        }, this._options.rtl, this._options.callbacks.customizeQBInitData);
    }
    canNext() {
        return !this.queryControl().isNextDisabled();
    }
    canFinish() {
        return !this.queryControl().isFinishDisabled() || !this.queryControl().isNextDisabled();
    }
    runQueryBuilder() {
        var query = this.queryControl().getQuery();
        if (query && query.type() === SqlQueryType.tableQuery) {
            query.name(this.queryName());
            this.popupQueryBuilder.show(query, this._dataSource());
        }
        else {
            this.popupQueryBuilder.show(new tableQuery_TableQuery({ '@Name': this.queryName() }, this._dataSource()), this._dataSource());
        }
    }
    localizeQueryType(queryTypeString) {
        return configureQueryPage_ConfigureQueryPage.QUERY_TEXT === queryTypeString ?
            Object(external_DevExpress_Analytics_Utils_["getLocalization"])(configureQueryPage_ConfigureQueryPage.QUERY_TEXT, 'DataAccessUIStringId.WizardPageConfigureQuery_Query') :
            Object(external_DevExpress_Analytics_Utils_["getLocalization"])(configureQueryPage_ConfigureQueryPage.SP_TEXT, 'DataAccessUIStringId.WizardPageConfigureQuery_StoredProcedure');
    }
    initialize(state) {
        this._dataSourceWrapper = _restoreSqlDataSourceFromState(state, this._options.requestWrapper);
        this._proceduresList.setQuery(new storedProcQuery_StoredProcQuery({}, this._dataSource()));
        this._selectStatementControl.setQuery(new customSqlQuery_CustomSqlQuery({}, this._dataSource()));
        this.popupQueryBuilder.isVisible(false);
        if (this._dataSourceWrapper.sqlQuery) {
            this.initialName = this._dataSourceWrapper.sqlQuery.name();
            this.queryName(this.initialName);
            this.selectedQueryType(this._dataSourceWrapper.sqlQuery.type() === SqlQueryType.storedProcQuery ? configureQueryPage_ConfigureQueryPage.SP_TEXT : configureQueryPage_ConfigureQueryPage.QUERY_TEXT);
            return this.queryControl().setQuery(this._dataSourceWrapper.sqlQuery);
        }
        else {
            this.selectedQueryType(configureQueryPage_ConfigureQueryPage.QUERY_TEXT);
        }
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    commit() {
        var query = this.queryControl().getQuery();
        if (query) {
            var newQueryName = this.queryName() || this.initialName;
            newQueryName && query.name(newQueryName);
            if (!query.name() || !this._dataSourceWrapper.sqlQuery || this._dataSourceWrapper.sqlQuery.name() !== query.name())
                query.name(generateQueryUniqueName(this._dataSource().queries(), query));
            this._dataSourceWrapper.sqlQuery = query;
        }
        return external_jQuery_["Deferred"]().resolve({
            queryName: this._dataSourceWrapper.sqlQuery.name(),
            sqlDataSourceJSON: this._dataSourceWrapper.save()
        }).promise();
    }
}
configureQueryPage_ConfigureQueryPage.QUERY_TEXT = 'Query';
configureQueryPage_ConfigureQueryPage.SP_TEXT = 'Stored Procedure';
function _registerConfigureQueryPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(SqlDataSourceWizardPageId.ConfigureQueryPage, {
        create: () => {
            return new configureQueryPage_ConfigureQueryPage(dataSourceWizardOptions);
        },
        setState: (data, state) => {
            state.queryName = data.queryName;
            state.sqlDataSourceJSON = data.sqlDataSourceJSON;
        },
        getState: (state) => {
            return state.sqlDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.sqlDataSourceJSON = defaultState.sqlDataSourceJSON;
            state.queryName = defaultState.queryName;
        },
        template: 'dxrd-wizard-create-query-page',
        description: Object(external_DevExpress_Analytics_Internal_["localizeWithUpdateLocalizationMethod"])('Create a query or select a stored procedure') || Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Create a query or select a stored procedure.', external_DevExpress_Analytics_Internal_["StringId"].WizardPageConfigureQuery)
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/sqlDataSourceWizard/configureParametersPage.js











class configureParametersPage_ConfigureQueryParametersPage extends wizardPageBase_WizardPageBase {
    constructor(parametersConverter = {
        createParameterViewModel: parameter => parameter,
        getParameterFromViewModel: parameterViewModel => parameterViewModel
    }, _requestWrapper) {
        super();
        this.parametersConverter = parametersConverter;
        this._requestWrapper = _requestWrapper;
        this._sqlDataSourceWrapper = new _sqlDataSourceWrapper_SqlDataSourceWrapper(undefined, undefined, this._requestWrapper);
        this.removeButtonTitle = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Remove', 'DataAccessUIStringId.Button_Remove');
        this.parametersEditorOptions = {
            addHandler: () => {
                return this.parametersConverter.createParameterViewModel(new dataSourceParameter_DataSourceParameter({
                    '@Name': Object(external_DevExpress_Analytics_Internal_["getUniqueNameForNamedObjectsArray"])(this.parametersEditorOptions.values.peek().peek(), 'param'),
                    '@Type': 'System.Int32'
                }));
            },
            values: external_ko_["observable"](external_ko_["observableArray"]([])),
            displayName: 'Parameters',
            level: 0,
            info: external_ko_["observable"]({
                displayName: 'Parameters', localizationId: 'DevExpress.DataAccess.Sql.SqlQuery.Parameters',
                propertyName: 'parameters',
                modelName: 'Parameter',
                array: true,
                editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('commonCollection'),
                template: '#dxrd-parameter-collection-item'
            }),
            editorTemplate: '#dxrd-wizard-datasource-parameters',
            hideButtons: external_ko_["observable"](false),
            collapsed: false
        };
    }
    _isParametersValid() {
        return this.getParameters().every(x => x.isValid());
    }
    canNext() {
        return false;
    }
    canFinish() {
        return this._isParametersValid();
    }
    getParameters() {
        return this.parametersEditorOptions.values()();
    }
    initialize(data) {
        this._sqlDataSourceWrapper = _restoreSqlDataSourceFromState(data, this._requestWrapper);
        this.parametersEditorOptions.hideButtons(this._sqlDataSourceWrapper.sqlQuery.type() === SqlQueryType.storedProcQuery);
        setTimeout(() => {
            this.parametersEditorOptions.values(external_ko_["observableArray"](this._sqlDataSourceWrapper.sqlQuery.parameters().map(item => this.parametersConverter.createParameterViewModel(item))));
        }, 100);
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    commit() {
        this._sqlDataSourceWrapper.sqlQuery.parameters(this.parametersEditorOptions.values()().map(item => this.parametersConverter.getParameterFromViewModel(item)));
        return external_jQuery_["Deferred"]().resolve({
            sqlDataSourceJSON: this._sqlDataSourceWrapper.save()
        }).promise();
    }
}
function _registerConfigureParametersPage(factory, requestWrapper, parametersConverter) {
    factory.registerMetadata(SqlDataSourceWizardPageId.ConfigureParametersPage, {
        create: () => new configureParametersPage_ConfigureQueryParametersPage(parametersConverter, requestWrapper),
        getState: (state) => state.sqlDataSourceWizard,
        setState: (result, state) => state.sqlDataSourceJSON = result.sqlDataSourceJSON,
        resetState: () => void 0,
        template: 'dxrd-page-configure-parameters',
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure query parameters.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureParameters')
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_dbSchemaItemsProvider.js







class _dbSchemaItemsProvider_DBSchemaItemsProvider extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(dbSchemaProvider, customQueries, showQbCallBack, disableCustomSql, afterCheckToggled) {
        super();
        this._callBack = external_ko_["observable"]({
            deleteAction: (name) => {
                this._customQueries
                    .remove(Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._customQueries(), item => (item.name() || item.generateName()) === name));
            },
            showQbCallBack: null,
            disableCustomSql: false,
        });
        this._checkedRootNodesCount = external_ko_["pureComputed"](() => {
            var count = 0;
            for (var i = 0; i < this._rootItems.length && count < 2; i++) {
                count += this._rootItems[i].countChecked();
            }
            return count;
        });
        this.hasCheckedItems = external_ko_["pureComputed"](() => {
            return !(this._checkedRootNodesCount() === 0);
        });
        this.nextButtonDisabled = external_ko_["pureComputed"](() => {
            if (this._checkedRootNodesCount() > 1) {
                return false;
            }
            return !this.hasParametersToEdit();
        });
        this.hasParametersToEdit = external_ko_["pureComputed"](() => {
            for (var i = 0; i < this._rootItems.length; i++) {
                if (this._rootItems[i]['hasParamsToEdit'] && this._rootItems[i]['hasParamsToEdit']())
                    return true;
            }
            return false;
        });
        this.tables = () => this._tables;
        this.views = () => this._views;
        this.procedures = () => this._procedures;
        this.queries = () => this._queries;
        this.customQueries = () => this._customQueries;
        this._callBack().showQbCallBack = showQbCallBack;
        this._callBack().disableCustomSql = disableCustomSql;
        this._tables = new _treeListNode_TreeNode('tables', Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Tables', 'DataAccessStringId.ConfigureMultiQueryPage_TableCategory'), 'list', false, afterCheckToggled);
        this._views = new _treeListNode_TreeNode('views', Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Views', 'DataAccessStringId.ConfigureMultiQueryPage_ViewCategory'), 'list', false, afterCheckToggled);
        this._procedures = new _treeListNode_ParameterTreeNode('procedures', Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Stored Procedures', 'DataAccessStringId.ConfigureMultiQueryPage_SpCategory'), 'list', false, afterCheckToggled);
        this._queries = new _treeListNode_QueriesTreeNode('queries', Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Queries', 'DataAccessStringId.ConfigureMultiQueryPage_QueryCategory'), 'list', false, this._callBack, afterCheckToggled);
        this._disposables.push(...[this._tables, this._views, this._procedures, this._queries]);
        this._rootItems = [
            this._tables,
            this._views,
            this._procedures,
            this._queries
        ];
        this.getItems = (pathRequest) => {
            var result = external_jQuery_["Deferred"]();
            if (!pathRequest.fullPath) {
                result.resolve(this._rootItems);
            }
            else if (pathRequest.fullPath === 'tables') {
                dbSchemaProvider.getDbSchema().done((dbSchema) => {
                    if (this._tables.children().length === 0) {
                        var tables = [];
                        dbSchema.tables.forEach(table => {
                            if (!table.isView) {
                                tables.push(new _treeListNode_TreeNode(table.name, table.name, 'table', this._tables.checked.peek(), afterCheckToggled));
                            }
                        });
                        this._tables.initializeChildren(tables);
                        result.resolve(tables);
                    }
                    else {
                        result.resolve(this._tables.children());
                    }
                }).fail(result.reject);
            }
            else if (pathRequest.fullPath === 'views') {
                dbSchemaProvider.getDbSchema().done((dbSchema) => {
                    if (this._views.children().length === 0) {
                        var views = [];
                        dbSchema.tables.forEach(table => {
                            if (table.isView) {
                                views.push(new _treeListNode_TreeNode(table.name, table.name, 'view', this._views.checked.peek(), afterCheckToggled));
                            }
                        });
                        this._views.initializeChildren(views);
                        result.resolve(views);
                    }
                    else {
                        result.resolve(this._views.children());
                    }
                }).fail(result.reject);
            }
            else if (pathRequest.fullPath === 'procedures') {
                dbSchemaProvider.getDbStoredProcedures().done((storedProcedures) => {
                    if (this._procedures.children().length === 0) {
                        var procedures = storedProcedures.map(proc => {
                            var node = new TreeLeafNode(proc.name, _storedProceduresQueryControl_StoredProceduresQueryControl.generateStoredProcedureDisplayName(proc), 'procedure', this._procedures.checked.peek(), proc.arguments, afterCheckToggled);
                            this._disposables.push(node);
                            return node;
                        });
                        this._procedures.initializeChildren(procedures);
                        result.resolve(procedures);
                    }
                    else {
                        result.resolve(this._procedures.children());
                    }
                }).fail(result.reject);
            }
            else if (pathRequest.fullPath === 'queries') {
                var queries = customQueries().map(query => {
                    var name = query.name() || query.generateName();
                    var currentQuery = this._queries.children().filter(q => q['query'] === query)[0];
                    if (currentQuery)
                        return currentQuery;
                    var queryNode = new _treeListNode_TreeQueryNode(name, name, 'query', !!currentQuery && currentQuery.checked(), query.parameters, this._callBack, afterCheckToggled, query);
                    this._disposables.push(queryNode);
                    queryNode.setObservableName(external_ko_["computed"]({
                        read: () => query.name() || query.generateName(),
                        write: (newVal) => query.name(newVal)
                    }));
                    return queryNode;
                });
                this._queries.initializeChildren(queries);
                result.resolve(queries);
            }
            else {
                dbSchemaProvider.getDbTable(pathRequest.path).done((table) => {
                    var tableTreeNode;
                    if (table.isView) {
                        tableTreeNode = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._views.children(), item => item.name === table.name);
                    }
                    else {
                        tableTreeNode = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._tables.children(), item => item.name === table.name);
                    }
                    if (tableTreeNode.children().length === 0) {
                        var columns = table.columns.map(column => {
                            var node = new TreeLeafNode(column.name, column.name, 'column', tableTreeNode.checked.peek(), null, afterCheckToggled);
                            this._disposables.push(node);
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
        this._customQueries = customQueries;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/stateManager.js

class stateManager_StateManager {
    constructor(globalState, pageFactory) {
        this.globalState = globalState;
        this.pageFactory = pageFactory;
        this.defaultState = Object(external_DevExpress_Analytics_Internal_["extend"])(true, {}, globalState);
    }
    _getPageState(pageId, state = this.globalState) {
        return this.pageFactory.getMetadata(pageId).getState(state);
    }
    setPageState(pageId, data) {
        this.pageFactory.getMetadata(pageId).setState(data, this.getPageState(pageId));
    }
    getPageState(pageId) {
        return this._getPageState(pageId);
    }
    resetPageState(pageId) {
        var defaultState = Object(external_DevExpress_Analytics_Internal_["extend"])(true, {}, this._getPageState(pageId, this.defaultState));
        this.pageFactory.getMetadata(pageId).resetState(this.getPageState(pageId), defaultState);
    }
    getCurrentState() {
        return this.globalState;
    }
    reset() {
        this.globalState.reset();
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pageIterator.js



class pageIterator_PageIterator extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(pageFactory, stateManager, _onResetPage = () => void 0) {
        super();
        this.pageFactory = pageFactory;
        this.stateManager = stateManager;
        this._onResetPage = _onResetPage;
        this._pages = [];
        this._currentIndex = 0;
    }
    dispose() {
        this._pages.forEach(x => x.dispose());
        this._pages = [];
    }
    __resetPages(fromIndex) {
        if (fromIndex < this._pages.length) {
            for (var index = this._pages.length - 1; index >= fromIndex; index--) {
                this.stateManager.resetPageState(this._pages[index].pageId);
                this._onResetPage(this._pages[index]);
                this._pages[index].dispose();
                this._pages.splice(index, 1);
            }
        }
    }
    _nextPage() {
        return this._pages[this._currentIndex + 1];
    }
    _getNextExistingPage() {
        this._currentIndex += 1;
        var deferred = external_jQuery_["Deferred"]();
        deferred.resolve(this._pages[this._currentIndex]);
        return deferred.promise();
    }
    _resetPages() {
        this.__resetPages(this._currentIndex + 1);
    }
    _getNextNewPage(nextPageId) {
        this._currentIndex += 1;
        var deferred = external_jQuery_["Deferred"]();
        this.__resetPages(this._currentIndex);
        var pageMetadata = this.pageFactory.getMetadata(nextPageId);
        var newPage = new _wrappedWizardPage_WrappedWizardPage(nextPageId, pageMetadata.create(), pageMetadata.template, pageMetadata.description);
        this._pages.push(newPage);
        deferred.resolve(newPage);
        return deferred.promise();
    }
    _getStartPage(pageId) {
        pageId = pageId || this.getNextPageId();
        var pageMetadata = this.pageFactory.getMetadata(pageId);
        var startPage = new _wrappedWizardPage_WrappedWizardPage(pageId, pageMetadata.create(), pageMetadata.template, pageMetadata.description);
        this._pages.push(startPage);
        return startPage;
    }
    _getNextPage() {
        var currentPage = this._getCurrentPage();
        if (currentPage.isChanged || !this._nextPage()) {
            var nextPageId = this.getNextPageId(this._getCurrentPage().pageId);
            if (!nextPageId)
                return external_jQuery_["Deferred"]().reject().promise();
            currentPage.isChanged = false;
            return this._getNextNewPage(nextPageId);
        }
        else
            return this._getNextExistingPage();
    }
    _getPreviousPage() {
        var deferred = external_jQuery_["Deferred"]();
        if (this._currentIndex - 1 < 0) {
            deferred.reject(null);
        }
        else {
            this._currentIndex -= 1;
            deferred.resolve(this._pages[this._currentIndex]);
        }
        return deferred.promise();
    }
    _goToPage(pageId) {
        var deferred = external_jQuery_["Deferred"]();
        var page = this._pages.filter(page => page.pageId === pageId)[0];
        if (page) {
            this._currentIndex = this._pages.indexOf(page);
            deferred.resolve(page);
        }
        else {
            deferred.reject(null);
        }
        return deferred.promise();
    }
    _getCurrentPage() {
        return this._pages[this._currentIndex];
    }
    _getCurrentState() {
        return this.stateManager.getCurrentState();
    }
    getNextPageId(pageId) {
        return '';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/wizard.js







class wizard_BaseWizard extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(pageFactory, finishCallback) {
        super();
        this.pageFactory = pageFactory;
        this.events = new external_DevExpress_Analytics_Utils_["EventManager"]();
        this._loadingTimeout = null;
        this.isLoading = external_ko_["observable"](false);
        this._currentPage = external_ko_["observable"]();
        this.isVisible = external_ko_["observable"](false);
        this._finishCallback = finishCallback;
        this._disposables.push(this.events);
    }
    _createLoadingState(page) {
        if (!page[__loadingStateFunctionName]) {
            page[__loadingStateFunctionName] = (newVal) => this._loadingState(newVal);
        }
    }
    _createNextAction(page) {
        if (!page[__nextActionFunctionName]) {
            page[__nextActionFunctionName] = () => this.nextAction();
        }
    }
    _loadingState(active) {
        if (active) {
            this._loadingTimeout && clearTimeout(this._loadingTimeout);
            this._loadingTimeout = setTimeout(() => {
                this.isLoading(true);
            }, 100);
        }
        else {
            this._loadingTimeout && clearTimeout(this._loadingTimeout);
            this.isLoading(false);
        }
    }
    _callBeforeFinishHandler(state, wizardModel) {
        this.events.call('beforeFinish', { state: state });
    }
    _callAfterFinishHandler(state, result) {
        this.events.call('afterFinish', { state: state });
    }
    onFinish() {
        this.iterator.dispose();
    }
    initialize(state = {}, createIterator = (pageFactory, stateManager) => new pageIterator_PageIterator(pageFactory, stateManager)) {
        this.events.call('beforeInitialize', { wizard: this, state: state });
        this.stateManager = new stateManager_StateManager(state, this.pageFactory);
        this.iterator = createIterator(this.pageFactory, this.stateManager);
        this.events.call('afterInitialize', { wizard: this });
    }
    isFirstPage() {
        return this._currentPage() && this._currentPage().pageId == this.iterator.getNextPageId();
    }
    canNext() {
        return !this.isLoading() && this._currentPage() && this.pageFactory.getMetadata(this._currentPage().pageId).canNext(this._currentPage().page);
    }
    canFinish() {
        return !this.isLoading() && this._currentPage() && this.pageFactory.getMetadata(this._currentPage().pageId).canFinish(this._currentPage().page);
    }
    _initPage(page) {
        this.events.call('beforePageInitialize', _createBeforeInitializePageEventArgs(page, this));
        this._createLoadingState(page.page);
        this._createNextAction(page.page);
        return page.initialize(this.stateManager.getPageState(page.pageId));
    }
    start() {
        this.events.call('beforeStart', { wizard: this });
        this._loadingState(true);
        var startPage = this.iterator._getStartPage();
        this._initPage(startPage).done(() => {
            this._currentPage(startPage);
            this.events.call('afterPageInitialize', _createPageEventArgs(startPage, this));
        }).always(() => this._loadingState(false)).fail(() => {
            this.isVisible(false);
        });
    }
    canRunWizard() {
        return true;
    }
    nextAction() {
        if (!this.canNext())
            return;
        var currentPage = this.iterator._getCurrentPage();
        this._loadingState(true);
        var revertPreviosPage = () => this.iterator._getPreviousPage().always(() => {
            this.iterator._resetPages();
            this._loadingState(false);
        });
        currentPage.commit().done((result) => {
            if (currentPage.isChanged)
                this.stateManager.setPageState(currentPage.pageId, result);
            this.iterator._getNextPage().done(page => {
                if (page) {
                    this._initPage(page).done(() => {
                        this._currentPage(page);
                        this.events.call('afterPageInitialize', _createPageEventArgs(page, this));
                        this._loadingState(false);
                    }).fail(() => revertPreviosPage());
                }
                else
                    revertPreviosPage();
            }).fail(() => this._loadingState(false));
        }).fail(() => this._loadingState(false));
    }
    previousAction() {
        if (this.isFirstPage())
            return;
        this._loadingState(true);
        this.iterator._getPreviousPage().done((page) => {
            if (page) {
                this._currentPage(page);
            }
        }).always(() => this._loadingState(false));
    }
    goToPage(pageId) {
        this._loadingState(true);
        this.iterator._goToPage(pageId).done((page) => {
            if (page) {
                this._currentPage(page);
            }
        }).always(() => this._loadingState(false));
    }
    finishAction() {
        if (!this.canFinish())
            return;
        this._loadingState(true);
        var currentPage = this.iterator._getCurrentPage();
        currentPage.commit().done((result) => {
            this.stateManager.setPageState(currentPage.pageId, result);
            this.iterator._resetPages();
            if (this._finishCallback) {
                var currentState = this.stateManager.getCurrentState();
                this._callBeforeFinishHandler(currentState);
                this._finishCallback(currentState)
                    .done((result) => {
                    this.onFinish();
                    this._callAfterFinishHandler(currentState, result);
                    this.isVisible(false);
                })
                    .always(() => {
                    this._loadingState(false);
                });
            }
            else {
                this._loadingState(false);
                this.isVisible(false);
            }
        });
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/popupWizard.js






class popupWizard_PopupWizard extends wizard_BaseWizard {
    constructor(pageFactory, finishCallback) {
        super(pageFactory, finishCallback);
        this.height = external_ko_["observable"](520);
        this.width = external_ko_["observable"](690);
        this._extendCssClass = '';
        this._container = external_DevExpress_Analytics_Internal_["getParentContainer"];
        this.itemsProvider = external_ko_["observable"]();
        this.nextButton = {
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Next', 'AnalyticsCoreStringId.Wizard_Next'),
            disabled: external_ko_["computed"](() => !this.canNext()),
            onClick: () => this.nextAction()
        };
        this.cancelButton = {
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'),
            onClick: () => {
                this.iterator.dispose();
                this.isVisible(false);
            }
        };
        this.previousButton = {
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Previous', 'AnalyticsCoreStringId.Wizard_Previous'),
            disabled: external_ko_["computed"](() => this.isFirstPage()),
            onClick: () => this.previousAction()
        };
        this.finishButton = {
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Finish', 'AnalyticsCoreStringId.Wizard_Finish'),
            type: 'default',
            disabled: external_ko_["computed"](() => {
                return !this.canFinish();
            }),
            onClick: () => this.finishAction()
        };
        this._titleTemplate = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dx-wizard-headerNew');
        this.title = 'Popup Wizard';
    }
    static _getLoadPanelViewModel(element, observableVisible) {
        var $container = external_jQuery_["fn"].constructor(element).closest('.dxrd-wizard-content');
        return {
            animation: {
                show: { type: 'fade', from: 0, to: 1, duration: 700 },
                hide: { type: 'fade', from: 1, to: 0, duration: 700 }
            },
            deferRendering: false,
            message: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Loading...', 'AnalyticsCoreStringId.Loading'),
            visible: observableVisible,
            shading: true,
            shadingColor: 'transparent',
            position: { of: $container },
            container: $container
        };
    }
    start() {
        super.start();
        this.isVisible(true);
    }
    _wizardPopupPosition(element) {
        return {
            of: Object(external_DevExpress_Analytics_Internal_["getParentContainer"])(element)
        };
    }
    _loadPanelViewModel(element) {
        return this._getLoadPanelViewModel(element, this.isLoading);
    }
    _getLoadPanelViewModel(element, observableVisible) {
        return popupWizard_PopupWizard._getLoadPanelViewModel(element, observableVisible);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_dbSchemaTreeListController.js


class _dbSchemaTreeListController_DBSchemaTreeListController extends external_DevExpress_Analytics_Widgets_Internal_["TreeListController"] {
    constructor(_customizeDBSchemaTreeListActions) {
        super();
        this._customizeDBSchemaTreeListActions = _customizeDBSchemaTreeListActions;
    }
    getActions(value) {
        if (!value.data)
            return [];
        if (!(value.data instanceof _treeListNode_QueriesTreeNode || value.data instanceof _treeListNode_TreeQueryNode))
            return [];
        var result = value.data.getActions(value);
        this._customizeDBSchemaTreeListActions && this._customizeDBSchemaTreeListActions(value.data, result);
        return result;
    }
    canSelect(value) {
        return true;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/multiQueryWizard/multiQueryConfigurePage.js




























class multiQueryConfigurePage_MultiQueryConfigurePage extends wizardPageBase_WizardPageBase {
    constructor(_options) {
        super();
        this._options = _options;
        this._selectedPath = external_ko_["observable"](null);
        this._itemsProvider = external_ko_["observable"]();
        this._customQueries = external_ko_["observableArray"]([]);
        this._checkedQueries = external_ko_["observableArray"]([]);
        this._sqlDataSourceWrapper = new _sqlDataSourceWrapper_SqlDataSourceWrapper(undefined, undefined, undefined);
        this._dataSource = () => {
            return this._sqlDataSourceWrapper && this._sqlDataSourceWrapper.sqlDataSource;
        };
        this._dataConnection = () => {
            return this._dataSource() && this._dataSource().connection;
        };
        this._showStatementPopup = (query) => {
            this._popupSelectStatement.isVisible(true);
            this._popupSelectStatement.query = query;
            this._popupSelectStatement.data(query.sqlString());
        };
        this._showQbCallBack = (name = null, isCustomQuery = false) => {
            if (name !== null) {
                var query = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._customQueries(), item => name === (item.name() || item.generateName()));
                this._queryEditIndex(this._customQueries().indexOf(query));
                if (query.type() === SqlQueryType.customSqlQuery) {
                    this._showStatementPopup(query);
                }
                else {
                    this._popupQueryBuilder.show(query, this._dataSource());
                }
            }
            else {
                this._queryEditIndex(-1);
                if (isCustomQuery) {
                    this._showStatementPopup(new customSqlQuery_CustomSqlQuery({ '@Name': null }, this._dataSource()));
                }
                else {
                    var queryNew = new tableQuery_TableQuery({ '@Name': null }, this._dataSource());
                    this._popupQueryBuilder.show(queryNew, this._dataSource());
                }
            }
        };
        this._popupSelectStatement = ({
            isVisible: external_ko_["observable"](false),
            title: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Custom SQL Editor', 'AnalyticsCoreStringId.SqlDSWizard_CustomSqlEditor'),
            query: null,
            data: external_ko_["observable"](),
            okButtonText: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('OK', 'DataAccessUIStringId.Button_OK'),
            okButtonHandler: (e) => {
                this._popupSelectStatement.query.sqlString(e.model.data());
                this._setCustomSqlQuery(this._popupSelectStatement.query);
                e.model.isVisible(false);
            },
            aceOptions: createDefaultSQLAceOptions(),
            aceAvailable: Object(external_DevExpress_Analytics_Widgets_Internal_["aceAvailable"])(),
            additionalOptions: createDefaultSQLAdditionalOptions((newVal) => { this._popupSelectStatement.data(newVal); }),
            languageHelper: createDefaultSQLLanguageHelper(),
            closest(element, parentSelector) {
                return external_jQuery_["fn"].constructor(element).closest(parentSelector);
            }
        });
        this._customResetOptions = external_jQuery_["noop"];
        this._queryEditIndex = external_ko_["observable"](-1);
        this.disableCustomSql = true;
        this._scrollViewHeight = 'calc(100% - 37px)';
        this._customizeDBSchemaTreeListActions = null;
        this._isDataLoadingInProcess = external_ko_["observable"](false);
        this._callbacks = this._options.callbacks;
        this._sqlTextProvider = new _selectQuerySqlTextProvider_SelectQuerySqlTextProvider(wrapGetSelectStatement(this._callbacks.selectStatement), this._dataConnection);
        this._popupQueryBuilder = new _queryBuilderPopup_QueryBuilderPopup((newQuery, isInProcess) => this._setTableQuery(newQuery, isInProcess), _options.rtl, _options.callbacks.customizeQBInitData);
        this._fieldListModel = external_ko_["observable"](null);
        this._disposables.push(this._hasParametersToEdit = external_ko_["pureComputed"](() => this._itemsProvider().hasParametersToEdit()));
        this._disposables.push(this._isDataLoadingInProcess.subscribe((newVal) => {
            if (!newVal)
                this._onChange();
            this[__loadingStateFunctionName] && this[__loadingStateFunctionName](newVal);
        }));
        this.disableCustomSql = this._options.disableCustomSql;
        this._getItemsAfterCheck = (node) => {
            this._resetDataSourceResult();
            this._isDataLoadingInProcess(true);
            if (node.checked.peek() && node.isList) {
                if (node.name === 'tables' || node.name === 'views') {
                    this._itemsProvider().getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](node.name)).done(() => {
                        if (node.isList && node.children.peek().length > 0) {
                            external_jQuery_["when"](...node.children.peek().map(item => this._getItemsPromise(new external_DevExpress_Analytics_Utils_["PathRequest"](node.name + '.' + item.name)))).always(() => this._isDataLoadingInProcess(false));
                        }
                        else {
                            this._isDataLoadingInProcess(false);
                        }
                    });
                }
                else if (node.specifics === 'table' || node.specifics === 'view') {
                    this['_itemsProvider']().getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](node.specifics + '.' + node.name))
                        .always(() => this._isDataLoadingInProcess(false));
                }
                else if (node.name === 'procedures') {
                    this['_itemsProvider']().getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](node.name))
                        .always(() => this._isDataLoadingInProcess(false));
                }
                else {
                    this._isDataLoadingInProcess(false);
                }
            }
            else {
                this._isDataLoadingInProcess(false);
            }
        };
    }
    _addQueryAlgorithm(elements, specifics, dataSource, customQueries) {
        if (!elements.unChecked() || specifics === 'queries') {
            if (elements.children().length === 0) {
                this._itemsProvider().getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](specifics));
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
            elements.children().forEach(node => {
                multiQueryConfigurePage_MultiQueryConfigurePage._removeQuery(dataSource.queries, node);
            });
        }
    }
    _addQueryFromTables(elements, dataSource) {
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
                    this._itemsProvider().getItems(new external_DevExpress_Analytics_Utils_["PathRequest"]('tables.' + table.name)).done(() => {
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
                multiQueryConfigurePage_MultiQueryConfigurePage._pushQuery(new tableQuery_TableQuery(queryJSON, dataSource), table, dataSource.queries);
            }
            else {
                multiQueryConfigurePage_MultiQueryConfigurePage._removeQuery(dataSource.queries, table);
            }
        }
    }
    _addQueryFromStoredProcedures(elements, dataSource) {
        for (var i = 0; i < elements.children().length; i++) {
            var procedure = elements.children()[i];
            if (procedure.checked()) {
                var newQuery = new storedProcQuery_StoredProcQuery({ '@Name': procedure.name, 'ProcName': procedure.name }, dataSource);
                procedure.arguments.forEach((arg) => {
                    newQuery.parameters.push(new dataSourceParameter_DataSourceParameter({ '@Name': arg.name, '@Type': DBColumn.GetType(arg.type) }, null, storedProcParameterSerializationsInfo(DBColumn.GetType(arg.type))));
                });
                multiQueryConfigurePage_MultiQueryConfigurePage._pushQuery(newQuery, procedure, dataSource.queries);
            }
            else {
                multiQueryConfigurePage_MultiQueryConfigurePage._removeQuery(dataSource.queries, procedure);
            }
        }
    }
    _addQueryFromCustomQueries(elements, queries, allQueries) {
        for (var i = 0; i < elements.children().length; i++) {
            var queryNode = elements.children()[i];
            var query = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(queries.peek(), item => queryNode.name === (item.name() || item.generateName()));
            if (queryNode.checked()) {
                query.name(generateQueryUniqueName(allQueries.peek(), query));
                this._checkedQueries.push(query);
            }
        }
    }
    _getItemsPromise(pathRequest) {
        return this._itemsProvider().getItems(pathRequest);
    }
    _resetDataSourceResult() {
        this._customResetOptions();
        this._dataSource().relations([]);
        this._dataSource().resultSet = null;
        this._onChange();
    }
    _setQueryCore(query) {
        var provider = this._fieldListModel().itemsProvider;
        var queryEditIndex = this._queryEditIndex();
        if (queryEditIndex >= 0) {
            this._itemsProvider().queries().children()[queryEditIndex].name = query.name();
            provider.customQueries().splice(queryEditIndex, 1, query);
        }
        else {
            query.name(generateQueryUniqueName(provider.customQueries().peek(), query));
            provider.customQueries().push(query);
            this._selectedPath('queries.' + query.name());
            var childrens = this._itemsProvider().queries().children();
            var children = childrens[childrens.length - 1];
            children.setChecked(true);
            children['_afterCheckToggled'] && children['_afterCheckToggled'](children);
        }
        this._resetDataSourceResult();
    }
    static _pushQuery(newQuery, node, queries) {
        if (!Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(queries.peek(), item => item.name() === (newQuery.name() || newQuery.generateName()))) {
            newQuery.name(generateQueryUniqueName(queries.peek(), newQuery));
            queries.push(newQuery);
        }
        node.hasQuery = true;
    }
    static _removeQuery(queries, node) {
        if (node.hasQuery) {
            var queryIndex = -1;
            var existUncheck = queries.peek().some((value, index) => {
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
    }
    canNext() {
        return !this._itemsProvider().nextButtonDisabled() && this.canFinish();
    }
    canFinish() {
        return this._itemsProvider() && this._itemsProvider().hasCheckedItems() && !this._isDataLoadingInProcess();
    }
    _AddQueryWithBuilder() {
    }
    _runQueryBuilder() {
    }
    _loadPanelViewModel(element) {
        return popupWizard_PopupWizard._getLoadPanelViewModel(element, this._isDataLoadingInProcess);
    }
    _setTableQuery(query, isInProcess) {
        isInProcess && isInProcess(true);
        return this._sqlTextProvider.getQuerySqlText(query)
            .done(() => this._setQueryCore(query))
            .always(() => {
            isInProcess && isInProcess(false);
        });
    }
    _setCustomSqlQuery(query) {
        this._setQueryCore(query);
    }
    _createTreeListFactory() {
        return new _utils_MultiQueryTreeListItemFactory();
    }
    commit() {
        this._dataSource().queries.removeAll();
        this._checkedQueries.removeAll();
        this._addQueryAlgorithm(this._itemsProvider().tables(), 'tables', this._dataSource());
        this._addQueryAlgorithm(this._itemsProvider().views(), 'views', this._dataSource());
        this._addQueryAlgorithm(this._itemsProvider().procedures(), 'procedures', this._dataSource());
        this._addQueryAlgorithm(this._itemsProvider().queries(), 'queries', this._dataSource(), this._customQueries);
        external_ko_["utils"].arrayPushAll(this._dataSource().queries(), this._checkedQueries());
        this._dataSource().queries.valueHasMutated();
        var checkedCustomQueries = this._itemsProvider().queries().children().filter((x) => x.checked()).map(query => query.name);
        var customQueries = this._sqlDataSourceWrapper.sqlDataSource.queries().filter(x => checkedCustomQueries.some(queryName => queryName === x.name()) || x instanceof storedProcQuery_StoredProcQuery);
        customQueries.forEach((item) => this._sqlDataSourceWrapper.sqlDataSource.queries.remove(item));
        var serializer = new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        return external_jQuery_["Deferred"]().resolve({
            sqlDataSourceJSON: this._sqlDataSourceWrapper.save(),
            customQueries: customQueries.map(x => JSON.stringify(serializer.serialize(x)))
        }).promise();
    }
    initialize(state) {
        this._sqlDataSourceWrapper = _restoreSqlDataSourceFromState(state, this._options.requestWrapper);
        var customQueriesPromise = this._callbacks.customQueriesPreset
            ? this._callbacks.customQueriesPreset(this._dataSource())
            : external_jQuery_["Deferred"]().resolve([]).promise();
        var deferred = external_jQuery_["Deferred"]();
        customQueriesPromise.done((queries) => {
            this._customQueries(queries);
            this._selectedPath('');
            var itemsProvider = new _dbSchemaItemsProvider_DBSchemaItemsProvider(this._dataSource().dbSchemaProvider, this._customQueries, this._showQbCallBack, this.disableCustomSql, this._getItemsAfterCheck);
            this._disposables.push(itemsProvider);
            this._itemsProvider(itemsProvider);
            this._getItemsPromise(new external_DevExpress_Analytics_Utils_["PathRequest"]('queries'));
            this._fieldListModel({
                factory: this._createTreeListFactory(),
                itemsProvider: this._itemsProvider(),
                selectedPath: this._selectedPath,
                treeListController: new _dbSchemaTreeListController_DBSchemaTreeListController(this._customizeDBSchemaTreeListActions),
                templateName: 'dxrd-treelist-with-checkbox'
            });
            this._popupQueryBuilder.isVisible(false);
            this._dataSource()
                .dbSchemaProvider.getDbSchema()
                .done(() => {
                deferred.resolve();
            })
                .fail(deferred.reject);
        })
            .fail(deferred.reject);
        return deferred.promise();
    }
}
function _registerMultiQueryConfigurePage(factory, wizardOptions) {
    factory.registerMetadata(SqlDataSourceWizardPageId.MultiQueryConfigurePage, {
        create: () => {
            return new multiQueryConfigurePage_MultiQueryConfigurePage(wizardOptions);
        },
        setState: (data, state) => {
            state.sqlDataSourceJSON = data.sqlDataSourceJSON;
            state.customQueries = data.customQueries;
        },
        getState: (state) => {
            return state.sqlDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.sqlDataSourceJSON = defaultState.sqlDataSourceJSON;
            state.customQueries = defaultState.customQueries;
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Columns selected from specific tables and/or views will be automatically included into a separate query.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMultiQuery'),
        template: 'dxrd-wizard-add-queries-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_configureParametersUtils.js







class _configureParametersUtils_ParametersTreeListItemBase extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(parameter) {
        super();
        this.editor = external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('commonCollection');
        this.isList = false;
        this.contenttemplate = 'dx-treelist-accordion-contenttemplate-custom-with-actions';
        this.actionsTemplate = 'dx-treelist-item-actions';
        this.dataSourceParameter = external_ko_["observable"](parameter);
        this._name = parameter.name;
        this._displayName = parameter.displayName;
    }
    get name() {
        return this._name();
    }
    get displayName() {
        return this._displayName || this.name;
    }
}
class ParametersTreeListItem extends _configureParametersUtils_ParametersTreeListItemBase {
    constructor(parameter, parent) {
        super(parameter);
        this.parent = parent;
    }
    query() {
        return this.parent.query();
    }
}
class _configureParametersUtils_ParametersTreeListRootItemBase {
    constructor(name) {
        this.isList = true;
        this.specifics = 'List';
        this.visible = external_ko_["observable"](true);
        this.name = this.displayName = name;
        this.parameters = external_ko_["observableArray"]([]);
    }
    removeChild(parameter) {
        this.parameters.remove(parameter);
    }
}
class ParametersTreeListRootItem extends _configureParametersUtils_ParametersTreeListRootItemBase {
    constructor(query) {
        super(query.name());
        this._query = query;
    }
    query() {
        return this._query;
    }
}
class _configureParametersUtils_ParametersTreeListController extends external_DevExpress_Analytics_Widgets_Internal_["TreeListController"] {
    constructor(rootItems, createNewParameter) {
        super();
        this._createNewParameter = createNewParameter;
        this._rootItems = rootItems;
    }
    hasItems(item) {
        return item.isList;
    }
    getActions(treeListItem) {
        var actions = [];
        if (!treeListItem.data)
            return actions;
        if (treeListItem.data.query().type() === SqlQueryType.storedProcQuery) {
            return treeListItem.data.isList ? [] : [external_DevExpress_Analytics_Widgets_Internal_["treeListEditAction"]];
        }
        if (treeListItem.data.isList) {
            var item = treeListItem.data;
            actions.push({
                clickAction: () => {
                    return item.parameters.push(new ParametersTreeListItem(this._createNewParameter(item.name, item.parameters()), item));
                },
                imageClassName: 'dxrd-image-add',
                imageTemplateName: 'dxrd-svg-operations-add',
                text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Add parameter', 'AnalyticsCoreStringId.FieldListActions_AddParameter')
            });
        }
        else {
            var parameter = treeListItem.data;
            actions.push({
                clickAction: () => {
                    parameter.parent.removeChild(parameter);
                },
                imageClassName: 'dxrd-image-recycle-bin',
                imageTemplateName: 'dxrd-svg-operations-recycle_bin',
                text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Remove parameter', 'DataAccessUIStringId.Button_Remove'),
            });
            actions.push(external_DevExpress_Analytics_Widgets_Internal_["treeListEditAction"]);
        }
        return actions;
    }
    canSelect(value) {
        return true;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/multiQueryWizard/multiQueryConfigureParametersPage.js














function _canEditQueryParameters(query, customQueries) {
    if (query.type() === SqlQueryType.tableQuery || query.type() === SqlQueryType.customSqlQuery) {
        return customQueries.indexOf(query) > -1;
    }
    return query.type() === SqlQueryType.storedProcQuery && query.parameters().length > 0;
}
class multiQueryConfigureParametersPage_MultiQueryConfigureParametersPage extends wizardPageBase_WizardPageBase {
    constructor(parametersConverter = {
        createParameterViewModel: parameter => parameter,
        getParameterFromViewModel: parameterViewModel => parameterViewModel
    }, _requestWrapper) {
        super();
        this.parametersConverter = parametersConverter;
        this._requestWrapper = _requestWrapper;
        this._sqlDataSourceWrapper = new _sqlDataSourceWrapper_SqlDataSourceWrapper(undefined, undefined, this._requestWrapper);
        this._selectedPath = external_ko_["observable"](null);
        this._rootItems = external_ko_["observableArray"]();
        this._createNewParameter = (queryName, parameters) => {
            var newParameter = new dataSourceParameter_DataSourceParameter({
                '@Name': Object(external_DevExpress_Analytics_Internal_["getUniqueNameForNamedObjectsArray"])(parameters, 'parameter'),
                '@Type': 'System.Int32'
            });
            this._selectedPath(queryName + '.' + newParameter.name());
            return this.parametersConverter.createParameterViewModel(newParameter);
        };
        this._scrollViewHeight = '100%';
        this._fieldListModel = external_ko_["observable"](null);
        this._removeButtonTitle = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Remove', 'DataAccessUIStringId.Button_Remove');
        var callback = () => this._onChange();
        this._disposables.push(subscribeArray(this._rootItems, (item) => {
            this._disposables.push(subscribeArray(item.parameters, (parameter) => {
                this._disposables.push(subscribeObject(parameter.dataSourceParameter, (value) => {
                    this._disposables.push(...subscribeProperties([value.name, value['value'], value['type']], callback));
                }, callback));
            }, callback));
        }, callback));
        this._parametersEditorOptions = {
            addHandler: () => {
                return this.parametersConverter.createParameterViewModel(new dataSourceParameter_DataSourceParameter({
                    '@Name': Object(external_DevExpress_Analytics_Internal_["getUniqueNameForNamedObjectsArray"])(this._parametersEditorOptions.values.peek().peek(), 'param'),
                    '@Type': 'System.Int32'
                }));
            },
            values: external_ko_["observable"](external_ko_["observableArray"]([])),
            displayName: 'Parameters',
            level: 0,
            info: external_ko_["observable"]({
                displayName: 'Parameters', localizationId: 'DevExpress.DataAccess.Sql.SqlQuery.Parameters',
                propertyName: 'parameters',
                modelName: 'Parameter',
                array: true,
                editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('commonCollection'),
                template: '#dxrd-parameter-collection-item'
            }),
            editorTemplate: '#dxrd-wizard-datasource-parameters',
            hideButtons: external_ko_["observable"](false),
            collapsed: false
        };
    }
    _isParametersValid() {
        return this._getParameters().every(x => x.isValid());
    }
    canNext() {
        return this._isParametersValid() && this._sqlDataSourceWrapper.sqlDataSource.queries().length > 1;
    }
    canFinish() {
        return this._isParametersValid() && this._sqlDataSourceWrapper.sqlDataSource.queries().length >= 1;
    }
    _getParameters() {
        return [].concat.apply([], (this._rootItems() || []).map((x) => {
            return x.parameters().map((param) => {
                return param.dataSourceParameter();
            });
        }));
    }
    initialize(state) {
        var newRootItemsWithParameters = [];
        var rootItems = this._rootItems();
        this._sqlDataSourceWrapper = _restoreSqlDataSourceFromState(state, this._requestWrapper);
        this._sqlDataSourceWrapper.sqlDataSource.queries().forEach(query => {
            if (_canEditQueryParameters(query, this._sqlDataSourceWrapper.customQueries)) {
                var parent = new ParametersTreeListRootItem(query);
                parent.parameters(query.parameters().map(parameterModel => {
                    return new ParametersTreeListItem(this.parametersConverter.createParameterViewModel(parameterModel), parent);
                }));
                newRootItemsWithParameters.push(parent);
            }
        });
        rootItems.filter(x => newRootItemsWithParameters.every(newItem => newItem.name !== x.name)).forEach((removedItem) => {
            rootItems.splice(this._rootItems().indexOf(removedItem), 1);
        });
        newRootItemsWithParameters.forEach((newItem) => {
            var currentItem = rootItems.filter(x => x.name === newItem.name)[0];
            if (currentItem) {
                newItem.parameters().filter(newParam => currentItem.parameters().every(x => x.name !== newParam.name)).forEach((param) => {
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
                getItems: pathRequest => {
                    var result = external_jQuery_["Deferred"]();
                    if (!pathRequest.fullPath) {
                        result.resolve(this._rootItems());
                    }
                    else {
                        var parent = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._rootItems(), item => item.name === pathRequest.ref);
                        result.resolve(parent.parameters());
                    }
                    return result.promise();
                }
            },
            templateName: 'dx-treelist-item-with-hover',
            selectedPath: this._selectedPath,
            treeListController: new _configureParametersUtils_ParametersTreeListController(this._rootItems(), this._createNewParameter),
        });
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    commit() {
        this._rootItems().forEach(item => {
            item.query().parameters(item.parameters().map(parameterViewModel => {
                return this.parametersConverter.getParameterFromViewModel(parameterViewModel.dataSourceParameter());
            }));
        });
        return external_jQuery_["Deferred"]().resolve({
            sqlDataSourceJSON: this._sqlDataSourceWrapper.sqlDataSourceJSON,
            customQueries: this._sqlDataSourceWrapper.saveCustomQueries()
        }).promise();
    }
}
function _registerMultiQueryConfigureParametersPage(factory, requestWrapper, parametersConverter) {
    factory.registerMetadata(SqlDataSourceWizardPageId.MultiQueryConfigureParametersPage, {
        create: () => new multiQueryConfigureParametersPage_MultiQueryConfigureParametersPage(parametersConverter, requestWrapper),
        getState: (state) => state.sqlDataSourceWizard,
        setState: (result, state) => state.customQueries = result.customQueries,
        resetState: () => void 0,
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure query parameters.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureParameters'),
        template: 'dxrd-configure-query-parameters-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/masterdetaileditor/_masterDetailEditorPopupManager.js
class MasterDetailEditorPopupManager {
    constructor(target, popupService, action, popupItems) {
        this.showPopup = (_, element) => {
            if (this._popupService['subscription']) {
                this._popupService['subscription'].dispose();
            }
            this._popupService.title('');
            this._updateActions(this.target);
            this._popupService.target(element);
            this._popupService.visible(true);
        };
        this.target = target;
        this._action = action;
        this._popupService = popupService;
        this._popupItems = popupItems;
    }
    _updateActions(viewModel) {
        this._popupService['subscription'] = this._popupService.visible.subscribe((newVal) => {
            this.target.isSelected && this.target.isSelected(newVal);
        });
        this._popupService.data({
            data: this._popupItems,
            template: 'dx-filtereditor-popup-common',
            click: (data) => {
                viewModel[this._action](data);
                this._popupService.visible(false);
            }
        });
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/masterdetaileditor/_keyColumnSurface.js


class _keyColumnSurface_KeyColumnSurface {
    constructor(column, queryName, _isMaster = false) {
        this._isMaster = _isMaster;
        this.getTitle = () => this._isMaster ? Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Master Query', 'AnalyticsCoreStringId.Wizard_MasterDetailRelationship_MasterQuery') : Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Detail Query', 'AnalyticsCoreStringId.Wizard_MasterDetailRelationship_DetailQuery');
        this.isSelected = external_ko_["observable"](false);
        this.selectColumnText = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('<Select a Column>', 'DataAccessUIStringId.JoinEditorEmptyColumnText');
        this.column = column;
        this.queryName = queryName;
        this.setColumn = (resultColumn) => {
            this.column(resultColumn.name());
        };
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/masterdetaileditor/_masterDetailRelationSurface.js


class _masterDetailRelationSurface_MasterDetailRelationSurface {
    constructor(relation, parent) {
        this.isEditable = external_ko_["observable"](false);
        this.relationName = relation.name;
        this.keyColumns = external_ko_["pureComputed"](() => {
            return relation.keyColumns().map((item) => {
                return {
                    master: new _keyColumnSurface_KeyColumnSurface(item.masterColumn, relation.masterQuery(), true),
                    detail: new _keyColumnSurface_KeyColumnSurface(item.detailColumn, relation.detailQuery(), false)
                };
            });
        });
        this.create = () => {
            relation.createKeyColumn();
        };
        this.remove = (data) => {
            relation.keyColumns.remove(item => item.masterColumn === data.master.column && item.detailColumn === data.detail.column);
            if (relation.keyColumns().length === 0)
                parent.remove(this);
        };
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/masterdetaileditor/_masterQuerySurface.js





class _masterQuerySurface_MasterQuerySurface {
    constructor(masterQueryName, relations) {
        this.relations = external_ko_["observableArray"]();
        this.queryName = masterQueryName;
        this.add = (relation) => {
            this.relations.push(new _masterDetailRelationSurface_MasterDetailRelationSurface(relation, this));
        };
        this.create = (detailQueryItem) => {
            var newRelation = new masterDetailRelation_MasterDetailRelation({ '@Master': this.queryName, '@Detail': detailQueryItem.name });
            if (Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this.relations(), 'relationName', newRelation.name())) {
                newRelation.name(Object(external_DevExpress_Analytics_Internal_["getUniqueName"])(this.relations().map(item => item.relationName()), newRelation.name() + '_'));
            }
            newRelation.createKeyColumn();
            this.add(newRelation);
            relations.push(newRelation);
        };
        this.remove = (relationSurface) => {
            this.relations.remove(relationSurface);
            relations.remove(item => item.name === relationSurface.relationName);
        };
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/masterdetaileditor/_masterDetailEditor.js










class _masterDetailEditor_MasterDetailEditor extends external_DevExpress_Analytics_Widgets_Internal_["PopupEditorBase"] {
    constructor(relations, resultSet, saveCallBack) {
        super();
        this.isValid = external_ko_["observable"](true);
        this.loadPanelVisible = external_ko_["observable"](false);
        this.masterQueries = external_ko_["observableArray"]();
        this.popupService = new external_DevExpress_Analytics_Internal_["PopupService"]();
        this.save = () => {
            var emptyFieldsExist = relations().some((relation) => {
                return !relation.detailQuery() || !relation.masterQuery() ||
                    relation.keyColumns().some(column => (!column.detailColumn() || !column.masterColumn()));
            });
            if (emptyFieldsExist) {
                Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Some fields are empty. Please fill all empty fields or remove the corresponding conditions to proceed.', 'DataAccessUIStringId.JoinEditorFillAllFieldsException'));
            }
            else {
                saveCallBack().done(() => { this.popupVisible(false); });
            }
        };
        this.createRelation = (target) => {
            var popupItems = resultSet.tables()
                .filter(table => table.tableName() !== target.queryName)
                .map(table => { return { name: table.tableName() }; });
            return {
                data: new MasterDetailEditorPopupManager(target, this.popupService, 'create', popupItems),
                templateName: 'dx-filtereditor-create'
            };
        };
        this.setColumn = (target) => {
            var table = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(resultSet.tables(), 'tableName', target.queryName);
            return {
                data: new MasterDetailEditorPopupManager(target, this.popupService, 'setColumn', table ? table.columns() : []),
                templateName: 'dx-masterdetail-editor-setColumn'
            };
        };
        this._createMainPopupButtons();
        var masterQueries = {};
        resultSet.tables().forEach((table) => {
            masterQueries[table.tableName()] = new _masterQuerySurface_MasterQuerySurface(table.tableName(), relations);
        });
        relations().forEach((relation) => {
            masterQueries[relation.masterQuery()] = masterQueries[relation.masterQuery()] || new _masterQuerySurface_MasterQuerySurface(relation.masterQuery(), relations);
            masterQueries[relation.masterQuery()].add(relation);
        });
        this.masterQueries(external_jQuery_["map"](masterQueries, value => value));
    }
    title() {
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Master-Detail Relation Editor', external_DevExpress_Analytics_Internal_["StringId"].MasterDetailRelationsEditor);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/multiQueryWizard/masterDetailRelationshipsPageBase.js







class masterDetailRelationshipsPageBase_MasterDetailRelationshipsPageBase extends wizardPageBase_WizardPageBase {
    constructor(_getResultSchema) {
        super();
        this._getResultSchema = _getResultSchema;
        this._relations = external_ko_["observableArray"]([]);
        this._customResetOptions = external_jQuery_["noop"];
        this._relationsEditor = external_ko_["observable"](null);
        var callback = () => this._onChange();
        this._disposables.push(subscribeArray(this._relations, (relation) => {
            relation._disposables.push(...subscribeProperties([relation.detailQuery, relation.name, relation.masterQuery], callback));
            relation._disposables.push(subscribeArray(relation.keyColumns, (column) => {
                relation._disposables.push(...subscribeProperties([column.detailColumn, column.masterColumn], callback));
            }, callback));
        }, callback));
    }
    _getResultSet(dataSource) {
        var deferred = external_jQuery_["Deferred"]();
        if (dataSource.resultSet) {
            deferred.resolve((dataSource.resultSet));
        }
        else {
            this._getResultSchema(dataSource).done(((result) => {
                deferred.resolve(new resultSet_ResultSet(JSON.parse(result.resultSchemaJSON)));
            })).fail(result => {
                deferred.reject(result);
            });
        }
        return deferred.promise();
    }
    _dataSource() {
        return null;
    }
    _restoreDataSource(state) {
    }
    _updateRelations() {
        var relations = this._relations();
        relations.forEach((relation, index) => {
            var detailTable = this._resultSet.tables().filter(table => table.tableName() === relation.detailQuery())[0];
            var masterTable = this._resultSet.tables().filter(table => table.tableName() === relation.masterQuery())[0];
            if (!detailTable || !masterTable) {
                relations.splice(index, 1);
                return;
            }
            var keyColumns = relation.keyColumns();
            keyColumns.forEach((keyColumn, index) => {
                if (detailTable.columns().every(x => x.name() !== keyColumn.detailColumn()) ||
                    masterTable.columns().every(x => x.name() !== keyColumn.masterColumn()))
                    keyColumns.splice(index, 1);
            });
            if (keyColumns.length === 0)
                relations.splice(index, 1);
        });
        this._relations.valueHasMutated();
    }
    canNext() {
        return false;
    }
    canFinish() {
        return this._relations().every(relation => relation.keyColumns()
            .every(keyColumn => !!keyColumn.detailColumn() && !!keyColumn.masterColumn()));
    }
    initialize(state) {
        this.relationsSubscription && this.relationsSubscription.dispose();
        this._restoreDataSource(state);
        this._disposables.push(this.relationsSubscription = this._relations.subscribe((changes) => {
            var isRelationsChanged = changes.some(change => {
                return !change['moved'] && change['moved'] !== 0;
            });
            if (isRelationsChanged) {
                this._customResetOptions();
            }
        }, null, 'arrayChange'));
        return this._getResultSet(this._dataSource())
            .done((result) => {
            this._resultSet = result;
            this._updateRelations();
            this._relationsEditor(new _masterDetailEditor_MasterDetailEditor(this._relations, this._resultSet, external_jQuery_["noop"]));
        })
            .fail(result => {
            if (Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(result))
                Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(result));
        });
    }
    dispose() {
        super.dispose();
        this.disposeObservableArray(this._relations);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/multiQueryWizard/configureMasterDetailRelationshipsPage.js







class configureMasterDetailRelationshipsPage_ConfigureMasterDetailRelationshipsPage extends masterDetailRelationshipsPageBase_MasterDetailRelationshipsPageBase {
    constructor() {
        super(...arguments);
        this._customResetOptions = external_jQuery_["noop"];
        this._relationsEditor = external_ko_["observable"](null);
    }
    _restoreDataSource(state) {
        this._sqlDataSourceWrapper = _restoreSqlDataSourceFromState(state);
    }
    _dataSource() {
        return this._sqlDataSourceWrapper.sqlDataSource;
    }
    commit() {
        this.relationsSubscription.dispose();
        this._sqlDataSourceWrapper.sqlDataSource.relations(this._relations());
        this._sqlDataSourceWrapper.sqlDataSource.resultSet = this._resultSet;
        var serializer = new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        return external_jQuery_["Deferred"]().resolve({
            sqlDataSourceJSON: this._sqlDataSourceWrapper.sqlDataSourceJSON,
            customQueries: this._sqlDataSourceWrapper.saveCustomQueries(),
            relations: this._relations().map(x => JSON.stringify(serializer.serialize(x))),
        }).promise();
    }
}
function _registerConfigureMasterDetailRelationshipsPage(factory, sqlDataSourceResultSchema) {
    factory.registerMetadata(DataSourceWizardPageId.ConfigureMasterDetailRelationshipsPage, {
        create: () => {
            return new configureMasterDetailRelationshipsPage_ConfigureMasterDetailRelationshipsPage(sqlDataSourceResultSchema);
        },
        setState: (data, state) => {
            state.relations = data.relations;
        },
        getState: (state) => {
            return state.sqlDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.relations = defaultState.relations;
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure master-detail relationships.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMasterDetailRelations'),
        template: 'dxrd-wizard-configure-relations-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/columnModelMeta.js


var AggregationType = {
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
var columnSerializationInfo = [
    query_builder_metadata_name,
    { propertyName: 'displayType', displayName: 'Type', localizationId: 'DataAccessUIStringId.ParametersColumn_Type', disabled: true, editor: editorTemplates.getEditor('text') },
    { propertyName: 'alias', displayName: 'Alias', localizationId: 'DataAccessUIStringId.QueryBuilderColumns_Alias', editor: editorTemplates.getEditor('text') },
    selected,
    {
        propertyName: 'sortingType',
        displayName: 'Sort Type',
        editor: editorTemplates.getEditor('combobox'),
        defaultVal: 'Unsorted',
        valuesArray: [
            { value: 'Unsorted', displayValue: 'Unsorted', localizationId: 'DataAccessUIStringId.SortingTypeNone' },
            { value: 'Ascending', displayValue: 'Ascending', localizationId: 'DataAccessUIStringId.SortingTypeAscending' },
            { value: 'Descending', displayValue: 'Descending', localizationId: 'DataAccessUIStringId.SortingTypeDescending' }
        ],
        localizationId: 'AnalyticsCoreStringId.QueryBuilder_SortType'
    },
    { propertyName: 'sortOrder', displayName: 'Sort Order', editor: editorTemplates.getEditor('numeric'), localizationId: 'DataAccessUIStringId.QueryBuilderColumns_SortOrder' },
    { propertyName: 'groupBy', displayName: 'Group By', editor: editorTemplates.getEditor('bool'), defaultVal: false, localizationId: 'DataAccessUIStringId.QueryBuilderColumns_GroupBy' },
    {
        propertyName: 'aggregate',
        displayName: 'Aggregate',
        editor: editorTemplates.getEditor('comboboxUndo'),
        values: AggregationType,
        defaultVal: AggregationType.None,
        localizationId: 'DataAccessUIStringId.QueryBuilderColumns_Aggregate'
    }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/columnExpressionMeta.js

var ColumnType = {
    RecordsCount: 'RecordsCount',
    Column: 'Column',
    Expression: 'Expression',
    AllColumns: 'AllColumns',
    AllColumnsQuery: 'AllColumnsQuery'
};
var columnExpressionSerializationsInfo = [
    { propertyName: 'expression', modelName: '#text' },
    { propertyName: 'table', modelName: '@Table' },
    { propertyName: 'column', modelName: '@Name' },
    { propertyName: 'aggregate', modelName: '@Aggregate', defaultVal: AggregationType.None },
    { propertyName: 'alias', modelName: '@Alias' },
    { propertyName: 'descending', modelName: '@Descending', defaultVal: false },
    { propertyName: 'itemType', modelName: '@ItemType' }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/allColumnsModelMeta.js

var allColumnsSerializationInfo = [query_builder_metadata_name, selected];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/columnExpression.js







class columnExpression_ColumnExpression {
    constructor(model, query, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
        this._dependedTables = [];
        if (this.table()) {
            var tableRef = query.getTable(this.table());
            this.table = external_ko_["pureComputed"](() => tableRef.actualName());
            this._dependedTables.push(tableRef);
        }
        else if (this.expression()) {
            try {
                this._criteria = external_DevExpress_Analytics_Criteria_Utils_["CriteriaOperatorStateMachine"].parse(this.expression());
                Object(external_DevExpress_Analytics_Criteria_Utils_["criteriaForEach"])(this._criteria, (operand) => {
                    if (operand instanceof external_DevExpress_Analytics_Criteria_["OperandProperty"]) {
                        var dependedTable = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(query.tables(), table => operand.propertyName.indexOf(table.actualName() + '.') === 0);
                        dependedTable && this._dependedTables.push(dependedTable);
                    }
                });
            }
            catch (e) {
            }
        }
        this.__table = this.table;
        this.__column = this.column;
        this.__expression = this.expression;
    }
    actualName() {
        return this.alias() || this.column();
    }
    toTable() {
        this.table = this.__table;
        this.column = this.__column;
        this.expression = external_ko_["observable"](null);
        this.itemType(ColumnType[ColumnType.Column]);
        if (!!this.__column.peek() && this.alias().indexOf('Expr') === 0)
            this.alias(null);
    }
    getInfo() {
        return columnExpressionSerializationsInfo;
    }
    isDepended(tableActualName) {
        return !!Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._dependedTables, depended => depended.actualName() === tableActualName);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/allColumnsModel.js







class allColumnsModel_AllColumnsViewModel extends queryElementModel_QueryElementBaseViewModel {
    constructor(parent, serializer) {
        super({ '@ControlType': 'Column' }, parent, serializer);
        var query = parent.parentModel();
        var targetColumn = external_ko_["pureComputed"](() => {
            return Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(query.columns(), item => {
                return parent.actualName() === item.table() && ColumnType.AllColumns === item.itemType();
            });
        });
        this.selected = external_ko_["pureComputed"]({
            read: () => !!targetColumn(),
            write: (value) => {
                if (!!targetColumn() === value)
                    return;
                if (value) {
                    query.columns.push(new columnExpression_ColumnExpression({ '@ItemType': ColumnType.AllColumns, '@Table': parent.actualName() }, query, serializer));
                }
                else {
                    query.columns.remove(item => parent.actualName() === item.table() && ColumnType.AllColumns === item.itemType());
                }
            }
        });
        this.name = external_ko_["pureComputed"](allColumnsModel_AllColumnsViewModel.DisplayName);
        this._disposables.push(this.name);
    }
    getInfo() {
        return allColumnsSerializationInfo;
    }
}
allColumnsModel_AllColumnsViewModel.DisplayName = () => {
    var name = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('(All Columns)', 'DataAccessStringId.QueryBuilder_AllColumns');
    return name.charAt(0) === '*' ? name : '* ' + name;
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/_columnExpressionCollectionHelper.js






class _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper {
    static find(collection, tableName, columnName) {
        return Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(collection(), item => item.column() === columnName && item.table() === tableName);
    }
    static findByName(collection, actualName) {
        return Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(collection(), (item) => item.actualName() === actualName);
    }
    static removeDependend(collection, tableName) {
        collection.remove((item) => item.isDepended(tableName));
    }
    static toExpresson(column, columns, value) {
        column.table = external_ko_["observable"](null);
        column.column = external_ko_["observable"](null);
        column.expression = column['__expression'];
        column.itemType(ColumnType[ColumnType.Expression]);
        if (!column.alias())
            column.alias(_columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.setUniqueAlias(columns, 'Expr'));
        column.expression(value);
    }
    static setUniqueAlias(collection, alias) {
        if (_columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.findByName(collection, alias)) {
            return Object(external_DevExpress_Analytics_Internal_["getUniqueName"])(collection().map((item) => item.actualName()), alias + '_');
        }
        return alias;
    }
    static createNew(query, collection, table, column) {
        var newItem = new columnExpression_ColumnExpression({ '@Table': table, '@Name': column, '@ItemType': 'Column' }, query);
        if (query.columns === collection && !newItem.alias() && _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.findByName(collection, newItem.actualName())) {
            newItem.alias(this.setUniqueAlias(collection, newItem.table() + '_' + newItem.column()));
        }
        return newItem;
    }
    static addNew(query, collection, table, column, lazy = false) {
        var newItem = this.createNew(query, collection, table, column);
        (lazy ? collection() : collection).push(newItem);
        return newItem;
    }
    static remove(collection, tableName, columnName, lazy = false) {
        if (!lazy) {
            collection.remove(item => item.column() === columnName && item.table() === tableName);
        }
        else
            for (var i = 0; i < collection().length; i++) {
                if (collection()[i].column() === columnName && collection()[i].table() === tableName) {
                    collection().splice(i, 1);
                    return;
                }
            }
    }
    static columnTypeToFederated(type) {
        switch (type) {
            case ColumnType[ColumnType.Expression]:
                return FederatedQueryExpressionType[FederatedQueryExpressionType.SelectExpression];
            case ColumnType[ColumnType.AllColumns]:
                return FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllNodeColumnsExpression];
            case ColumnType[ColumnType.AllColumnsQuery]:
                return FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllColumnsExpression];
            default:
                return FederatedQueryExpressionType[FederatedQueryExpressionType.SelectColumnExpression];
        }
    }
    static federatedTypeToColumn(type) {
        switch (type) {
            case FederatedQueryExpressionType[FederatedQueryExpressionType.SelectExpression]:
                return ColumnType[ColumnType.Expression];
            case FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllNodeColumnsExpression]:
                return ColumnType[ColumnType.AllColumns];
            case FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllColumnsExpression]:
                return ColumnType[ColumnType.AllColumnsQuery];
            default:
                return ColumnType[ColumnType.Column];
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/parameterModelMeta.js
var ParametersMode = {
    ReadWrite: 'ReadWrite',
    Read: 'Read',
    Disabled: 'Disabled'
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/filterEditor/_queryBuilderObjectsProvider.js




function isAggregatedExpression(object) {
    return object.aggregate() !== AggregationType.None;
}
class _queryBuilderObjectsProvider_QueryBuilderObjectsProvider {
    constructor(query, objectFilter) {
        this.getItems = (pathRequest) => {
            var result = external_jQuery_["Deferred"]();
            var items = [];
            if (pathRequest.fullPath === '') {
                items = objectFilter.filterTables(query().tables())
                    .map(_queryBuilderObjectsProvider_QueryBuilderObjectsProvider._createTableInfo);
            }
            else {
                var table = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(query().tables(), table => table.actualName() === pathRequest.fullPath);
                items = objectFilter.filterColumns(table && table.columns() || [])
                    .map(column => _queryBuilderObjectsProvider_QueryBuilderObjectsProvider._createColumnInfo(column, objectFilter));
            }
            result.resolve(items);
            return result.promise();
        };
        this.hasParameter = (name) => {
            return query().parameters().filter((parameter) => { return parameter.name() === name; }).length > 0;
        };
        this.getColumnInfo = (propertyName) => {
            if (propertyName) {
                var table = Object(external_DevExpress_Analytics_Internal_["find"])(query().tables(), t => propertyName.indexOf(t.actualName() + '.') === 0);
                if (table) {
                    var column = Object(external_DevExpress_Analytics_Internal_["find"])(objectFilter.filterColumns(table.columns() || []), c => propertyName === (table.actualName() + '.' + objectFilter.getColumnName(c)));
                    return column ? _queryBuilderObjectsProvider_QueryBuilderObjectsProvider._createColumnInfo(column, objectFilter) : null;
                }
            }
            return null;
        };
    }
    static _createTableInfo(table) {
        return {
            displayName: table.actualName(),
            name: table.actualName(),
            isList: true,
            specifics: 'Default',
            collapsed: external_ko_["observable"](true)
        };
    }
    static _createColumnInfo(column, objectFilter) {
        return {
            displayName: objectFilter.getColumnName(column),
            isList: false,
            specifics: objectFilter.getSpecifics(column),
            dataType: objectFilter.getDataType(column),
            name: objectFilter.getColumnName(column)
        };
    }
}
_queryBuilderObjectsProvider_QueryBuilderObjectsProvider.whereClauseObjectsFilter = {
    filterColumns: columns => columns,
    filterTables: tables => tables,
    getColumnName: column => column.name.peek(),
    getSpecifics: column => column.specifics,
    getDataType: column => column.dataType.peek()
};
_queryBuilderObjectsProvider_QueryBuilderObjectsProvider.groupByObjectsFilter = {
    filterColumns: columns => columns.filter(isAggregatedExpression),
    filterTables: tables => tables.filter(table => table.columns().some(isAggregatedExpression)),
    getColumnName: column => column.actualName.peek(),
    getSpecifics: (column) => {
        switch (column.aggregate()) {
            case AggregationType.Avg:
            case AggregationType.AvgDistinct:
                return 'Float';
            case AggregationType.Count:
            case AggregationType.CountDistinct:
                return 'Integer';
            default:
                return column.specifics;
        }
    },
    getDataType: column => null
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/filterEditor/_groupFilterEditorSerializer.js






class _groupFilterEditorSerializer_GroupFilterEditorSerializer extends external_DevExpress_Analytics_Widgets_Internal_["FilterEditorSerializer"] {
    constructor(_columns) {
        super();
        this._columns = _columns;
        this._aggregatePropertyName = (operand) => {
            var itemColumnAggregate = this._findAggregatedColumn(c => c.actualName() === operand.propertyName);
            return itemColumnAggregate ? this._columnDisplayName(itemColumnAggregate) : operand.propertyName;
        };
    }
    _columnDisplayName(column) {
        return column.table() + '.' + column.actualName();
    }
    _findAggregatedColumn(predicate) {
        return Object(external_DevExpress_Analytics_Internal_["find"])(this._columns(), c => isAggregatedExpression(c) && predicate(c));
    }
    serializeOperandProperty(operand) {
        var column = this._findAggregatedColumn(c => operand.propertyName === this._columnDisplayName(c));
        return '[' + (column ? column.actualName() : operand.propertyName) + ']';
    }
    deserialize(stringCriteria) {
        var operand = external_DevExpress_Analytics_Criteria_Utils_["CriteriaOperatorStateMachine"].parse(stringCriteria);
        if (operand) {
            Object(external_DevExpress_Analytics_Criteria_Utils_["criteriaForEach"])(operand, operator => {
                if (operator instanceof external_DevExpress_Analytics_Criteria_["OperandProperty"]) {
                    operator['propertyName'] = this._aggregatePropertyName(operator);
                }
            });
        }
        return super.deserializeOperand(operand);
    }
}

// EXTERNAL MODULE: external "DevExpress.Analytics.Widgets.Filtering"
var external_DevExpress_Analytics_Widgets_Filtering_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/parameterModel.js


class parameterModel_ParameterViewModel extends dataSourceParameter_DataSourceParameter {
    getEditorType(type) {
        if (Object(external_DevExpress_Analytics_Internal_["IsDataAccessExpression"])(type))
            return { header: 'dxqb-expressionstring' };
        return Object(external_DevExpress_Analytics_Internal_["getEditorType"])(type);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/filterEditor/_operandParameterQBSurface.js




class _operandParameterQBSurface_OperandParameterQBSurface extends external_DevExpress_Analytics_Widgets_Filtering_["OperandParameterSurface"] {
    constructor(operator, parent, fieldListProvider, path) {
        super(operator, parent, fieldListProvider, path);
        this.createParameter = () => {
            if (this.canCreateParameters) {
                this.model.parameterName = this.parameterName();
                this._createParameter(this.parameterName(), this._parameterType);
                this.helper.onChange();
            }
        };
        this._parameterName = external_ko_["observable"]('');
        this.isEditable = external_ko_["observable"](false);
        this.defaultDisplay = _operandParameterQBSurface_OperandParameterQBSurface.defaultDisplay;
        this._parameterName(external_ko_["unwrap"](operator.parameterName));
        this.canCreateParameters = this.helper.canCreateParameters;
        this.fieldsOptions = parent.leftPart.fieldsOptions;
        this.parameterName = external_ko_["pureComputed"]({
            read: () => {
                return this._parameterName() || (this.canCreateParameters && _operandParameterQBSurface_OperandParameterQBSurface.defaultDisplay() || '');
            },
            write: (newVal) => {
                if (newVal !== _operandParameterQBSurface_OperandParameterQBSurface.defaultDisplay() && newVal) {
                    this.model.parameterName = external_ko_["unwrap"](newVal);
                    this._parameterName(this.model.parameterName);
                }
            }
        });
        if (this.canCreateParameters && !this.isDefaultTextDisplayed() && !external_ko_["unwrap"](this.fieldListProvider).hasParameter(operator.parameterName)) {
            this.createParameter();
        }
    }
    get _parameterType() {
        return this.fieldsOptions() && this.fieldsOptions().selected() && this.fieldsOptions().selected()['dataType'] || 'System.String';
    }
    _createParameter(name, dataType) {
        if (name !== '' && name !== _operandParameterQBSurface_OperandParameterQBSurface.defaultDisplay() && this.helper.parameters().filter((parameter) => { return parameter.name() === name; }).length === 0) {
            var parameter = new parameterModel_ParameterViewModel({ '@Name': name, '@Type': dataType });
            this.helper.newParameters.push(parameter);
        }
    }
    isDefaultTextDisplayed() {
        return this.parameterName() === _operandParameterQBSurface_OperandParameterQBSurface.defaultDisplay();
    }
}
_operandParameterQBSurface_OperandParameterQBSurface.defaultDisplay = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Create new parameter', 'AnalyticsCoreStringId.FilterEditor_Operand_CreateNewParameter');

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/filterEditor/_operandPropertyQBSurface.js


class _operandPropertyQBSurface_OperandPropertyQBSurface extends external_DevExpress_Analytics_Widgets_Filtering_["OperandPropertySurface"] {
    constructor(operator, parent, fieldListProvider, path) {
        super(operator, parent, fieldListProvider, path);
    }
    _updateSpecifics() {
        _operandPropertyQBSurface_OperandPropertyQBSurface.updateSpecifics(this);
    }
    static updateSpecifics(propertySurface) {
        var fieldList = external_ko_["unwrap"](propertySurface.fieldListProvider);
        if (fieldList && fieldList.getColumnInfo) {
            var item = fieldList.getColumnInfo(propertySurface.propertyName());
            if (item) {
                propertySurface.specifics(item.specifics.toLowerCase());
                propertySurface.dataType(item.dataType);
                var _fieldsOptions = external_ko_["unwrap"](propertySurface.fieldsOptions);
                if (_fieldsOptions)
                    _fieldsOptions.selected(item);
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/filterEditor/_qbFilterEditorHelper.js









class _qbFilterEditorHelper_QBFilterEditorHelper extends external_DevExpress_Analytics_Widgets_["FilterEditorHelper"] {
    constructor(parametersMode) {
        super();
        this.handlers.changeParameter = (criteria, popupService) => {
            return {
                data: new external_DevExpress_Analytics_Widgets_Internal_["FilterEditorAddOn"](criteria, popupService, 'changeParameter', 'items', 'dxqb-filtereditor-parameterspopup'),
                templateName: 'dxqb-filtereditor-changeparameter'
            };
        };
        this.mapper.parameter = _operandParameterQBSurface_OperandParameterQBSurface;
        this.mapper.property = _operandPropertyQBSurface_OperandPropertyQBSurface;
        if (parametersMode === ParametersMode.ReadWrite) {
            this.canCreateParameters = true;
            this.newParameters = external_ko_["observableArray"]([]);
            this.onEditorFocusOut = (criteria) => {
                if (!criteria)
                    return;
                var parameters = this.newParameters();
                var usesParameters = [];
                Object(external_DevExpress_Analytics_Criteria_Utils_["criteriaForEach"])(criteria, (child) => {
                    if (child instanceof external_DevExpress_Analytics_Criteria_["OperandParameter"]) {
                        var parameter = parameters.filter(x => x.name() === child.parameterName)[0];
                        if (parameter)
                            usesParameters.push(parameter);
                    }
                });
                if (usesParameters.length === 0) {
                    this.newParameters.splice(0);
                    return;
                }
                var uselessParameters = parameters.filter(x => usesParameters.indexOf(x) === -1);
                for (var i = 0; i < uselessParameters.length; i++) {
                    var parameterIndex = parameters.indexOf(uselessParameters[i]);
                    if (parameterIndex !== -1)
                        parameters.splice(parameterIndex, 1);
                }
                this.newParameters.valueHasMutated();
            };
            this.onClosing = () => {
                this.newParameters([]);
            };
        }
        this.canSelectLists = false;
        this.getDisplayPropertyName = () => external_jQuery_["Deferred"]().resolve('').promise();
    }
}
var QBFilterEditorHelperDefault = _qbFilterEditorHelper_QBFilterEditorHelper;
function _setQBFilterEditorHelperDefault(helperType) {
    QBFilterEditorHelperDefault = helperType;
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/filterEditor/_qbFilterStringOptions.js





class _qbFilterStringOptions_QBFilterStringOptions extends external_DevExpress_Analytics_Widgets_["FilterStringOptions"] {
    constructor(filterString, dataMember, disabled, title) {
        super(filterString, dataMember, disabled, title);
    }
    initializeFilterStringHelper(parameters, parametersMode, serializer) {
        var helper = new QBFilterEditorHelperDefault(parametersMode);
        helper.canChoiceParameters = parametersMode !== ParametersMode.Disabled;
        if (serializer) {
            helper.serializer = serializer;
        }
        if (parametersMode === ParametersMode.ReadWrite) {
            helper.parameters = external_ko_["computed"](() => [].concat(parameters(), helper.newParameters()));
            helper.onSave = (operandProperty) => {
                var newParameters = helper.newParameters();
                parameters.push.apply(parameters, newParameters);
                helper.newParameters([]);
            };
        }
        else {
            if (parametersMode === ParametersMode.Read)
                helper.parameters = parameters;
            var oldCheckRightPart = helper.criteriaTreeValidator._checkRightPart;
            helper.criteriaTreeValidator._checkRightPart = (criteriaOperator) => {
                if (!(criteriaOperator instanceof external_DevExpress_Analytics_Criteria_["OperandParameter"]))
                    return oldCheckRightPart.apply(this, [criteriaOperator]);
                if (parametersMode === ParametersMode.Disabled) {
                    return false;
                }
                else if (parametersMode === ParametersMode.Read) {
                    var parameterName = criteriaOperator.parameterName;
                    return parameters.peek().filter(x => x.name() === parameterName).length !== 0;
                }
            };
        }
        this.helper = helper;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/queryModelMeta.js


var querySerializationsInfo = [
    {
        propertyName: '_tablesObject', modelName: 'Tables', info: [
            { propertyName: 'tables', modelName: 'SelectedTables', array: true },
            { propertyName: 'relations', modelName: 'Relations', array: true }
        ]
    },
    { propertyName: 'parameters', modelName: 'Parameters', array: true },
    { propertyName: 'type', modelName: '@Type' },
    { propertyName: 'name', modelName: '@Name' },
    { propertyName: 'editableName', displayName: 'Name', localizationId: 'DevExpress.DataAccess.Sql.SqlQuery.Name', editor: editorTemplates.getEditor('text') },
    { propertyName: '_filterString', modelName: 'Filter', defaultVal: '' },
    { propertyName: 'filterString', defaultVal: '', displayName: 'Filter', localizationId: 'DataAccessUIStringId.FiltersView_Filter', editor: editorTemplates.getEditor('filterEditor') },
    { propertyName: '_groupFilterString', modelName: 'GroupFilter', defaultVal: '' },
    { propertyName: 'groupFilterString', defaultVal: '', displayName: 'Group Filter', localizationId: 'DataAccessUIStringId.FiltersView_GroupFilter', editor: editorTemplates.getEditor('filterGroupEditor') },
    { propertyName: 'columns', modelName: 'Columns', array: true },
    { propertyName: 'sorting', modelName: 'Sorting', array: true },
    { propertyName: 'grouping', modelName: 'Grouping', array: true },
    { propertyName: 'itemType', modelName: '@ItemType' },
    { propertyName: 'allColumnsInTablesSelected', displayName: 'Select All (*)', localizationId: 'AnalyticsCoreStringId.QueryBuilder_SelectAll', editor: editorTemplates.getEditor('bool') },
    { propertyName: 'top', modelName: '@Top', displayName: 'Select Top', defaultVal: 0, from: external_DevExpress_Analytics_Utils_["floatFromModel"], localizationId: 'AnalyticsCoreStringId.QueryBuilder_SelectTop', editor: editorTemplates.getEditor('numeric'), editorOptions: { format: '#0', min: 0 } },
    { propertyName: 'skip', modelName: '@Skip', displayName: 'Offset', defaultVal: 0, from: external_DevExpress_Analytics_Utils_["floatFromModel"], localizationId: 'AnalyticsCoreStringId.QueryBuilder_Offset', editor: editorTemplates.getEditor('numeric'), editorOptions: { format: '#0', min: 0 } },
    { propertyName: 'distinct', modelName: '@Distinct', defaultVal: false, from: external_DevExpress_Analytics_Utils_["parseBool"], displayName: 'Select distinct', localizationId: 'AnalyticsCoreStringId.QueryBuilder_SelectDistinct', editor: editorTemplates.getEditor('bool') }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/columnModel.js







class columnModel_ColumnViewModel extends queryElementModel_QueryElementBaseViewModel {
    constructor(model, dbColumn, parent, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])({ '@ControlType': 'Column' }, model), parent, serializer);
        this.isNotAvailable = external_ko_["observable"](false);
        this._type = external_ko_["observable"](DBColumnType.Unknown);
        this._size = external_ko_["observable"]('');
        if (dbColumn.size)
            this._size(dbColumn.size);
        if (dbColumn.type)
            this._type(dbColumn.type);
        this.displayType = external_ko_["pureComputed"](() => {
            return DBColumnType[this._type()] + (this._size() ? '(' + this._size() + ')' : '');
        });
        this.dataType = external_ko_["pureComputed"](() => {
            return DBColumn.GetType(this._type());
        });
        this.actualName = external_ko_["pureComputed"](() => {
            return this.alias() || this.name();
        });
        var points = parent.getColumnConnectionPoints(this);
        this.rightConnectionPoint = {
            side: external_ko_["observable"](PointSide.East),
            location: points.right
        };
        this.leftConnectionPoint = {
            side: external_ko_["observable"](PointSide.West),
            location: points.left
        };
        var query = parent.parentModel();
        var targetColumn = external_ko_["pureComputed"](() => _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.find(query.columns, parent.actualName(), this.name()));
        this.aggregate = external_ko_["pureComputed"]({
            read: () => targetColumn() ? targetColumn().aggregate() : AggregationType.None,
            write: (value) => {
                targetColumn() && targetColumn().aggregate(value);
            }
        });
        this.alias = external_ko_["pureComputed"]({
            read: () => targetColumn() ? targetColumn().alias() : '',
            write: (value) => {
                targetColumn() && targetColumn().alias(value || null);
            }
        });
        var orderByItem = external_ko_["pureComputed"](() => _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.find(query.sorting, parent.actualName(), this.name()));
        this.sortingType = external_ko_["computed"]({
            read: () => {
                if (!orderByItem())
                    return 'Unsorted';
                return orderByItem().descending() ? 'Descending' : 'Ascending';
            },
            write: (newValue) => {
                if (newValue !== 'Unsorted') {
                    if (orderByItem()) {
                        orderByItem().descending(newValue === 'Descending');
                    }
                    else {
                        _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.addNew(query, query.sorting, parent.actualName(), this.name())
                            .descending(newValue === 'Descending');
                    }
                }
                else if (orderByItem()) {
                    _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.remove(query.sorting, parent.actualName(), this.name());
                }
            }
        });
        this.sortOrder = external_ko_["computed"]({
            read: () => {
                var index = query.sorting().indexOf(orderByItem());
                return index < 0 ? undefined : index + 1;
            },
            write: (newValue) => {
                if (!orderByItem())
                    return;
                newValue = Math.min(newValue, query.sorting().length);
                newValue = Math.max(newValue, 1);
                var oldValue = query.sorting().indexOf(orderByItem());
                var item = query.sorting.splice(oldValue, 1);
                query.sorting.splice(newValue - 1, 0, item[0]);
            }
        });
        var groupByItem = external_ko_["computed"](() => _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.find(query.grouping, parent.actualName(), this.name()));
        this.aggregate.subscribe((value) => {
            var parentTable = this.parentModel();
            if (value !== AggregationType.None) {
                this.groupBy(false);
                if (!this.alias() || this._isAliasAutoGenerated(parentTable.actualName())) {
                    var aggregateAlias = this.name() + '_' + value;
                    this.alias(_columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.setUniqueAlias(query.columns, aggregateAlias));
                }
            }
            else if (this._isAliasAutoGenerated(parentTable.actualName())) {
                this.alias(null);
            }
        });
        this.groupBy = external_ko_["computed"]({
            read: () => !!groupByItem(),
            write: (value) => {
                if (value) {
                    _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.addNew(query, query.grouping, parent.actualName(), this.name());
                    this.aggregate(AggregationType.None);
                }
                else {
                    _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.remove(query.grouping, parent.actualName(), this.name());
                }
            }
        });
        this.toggleSelected = (value, lazy = false) => {
            if (!!targetColumn() === value)
                return;
            if (value) {
                _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.addNew(query, query.columns, parent.actualName(), this.name(), lazy);
            }
            else {
                _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.remove(query.columns, parent.actualName(), this.name(), lazy);
                this.groupBy(false);
            }
        };
        this.selected = external_ko_["pureComputed"]({
            read: () => !!targetColumn(),
            write: (value) => this.toggleSelected(value)
        });
    }
    _isAliasAutoGenerated(addedTableName) {
        if (addedTableName && this.alias() && this.alias().indexOf(addedTableName + '_') === 0) {
            if (this.alias().substring(addedTableName.length + 1) === this.name())
                return true;
        }
        if (!this.alias() || this.alias().indexOf(this.name() + '_') !== 0)
            return false;
        var funcName = this.alias().substring(this.name().length + 1);
        if (funcName.match(new RegExp('_[0-9]+$')))
            funcName = funcName.substring(0, funcName.indexOf('_'));
        return Object.keys(AggregationType).indexOf(funcName) > 0;
    }
    getInfo() {
        return columnSerializationInfo;
    }
    isPropertyDisabled(name) {
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
    }
    get specifics() {
        return DBColumn.GetSpecific(this.dataType());
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/tableModelMeta.js

var tableSerializationInfo = [
    query_builder_metadata_name, metadata_alias, { propertyName: 'controlType', modelName: '@ControlType' }, { propertyName: 'itemType', modelName: '@ItemType' }
];

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/tableModel.js








class tableModel_TableViewModel extends queryElementModel_QueryElementBaseViewModel {
    constructor(model, parent, serializer) {
        super(model, parent, serializer);
        this.serializer = serializer;
        this._columnsConnectionPointLeftX = external_ko_["pureComputed"](() => { return this.location.x(); });
        this._columnsConnectionPointRightX = external_ko_["pureComputed"](() => { return this.location.x() + this.size.width(); });
        this._columns = external_ko_["observableArray"]();
        this._initialized = external_ko_["observable"](false);
        this.tableOffset = external_ko_["observable"](0);
        this.size = new external_DevExpress_Analytics_Elements_["Size"](199, 123);
        this.location = new external_DevExpress_Analytics_Elements_["Point"](0, 0);
        this.isReady = external_ko_["observable"](false);
        this.allColumnsSelected = external_ko_["computed"]({
            read: () => {
                var selectedColumns = this.columns().filter(item => item.selected());
                if (selectedColumns.length === 0) {
                    return false;
                }
                if (selectedColumns.length === this._columns.peek().length) {
                    return true;
                }
                return false;
            },
            deferEvaluation: true
        });
        this.isInitialized = external_ko_["pureComputed"](() => this._initialized());
        this.itemType = 'Table';
        this.controlType = 'Table';
        this._disposables.push(this.size.height = external_ko_["pureComputed"]({
            read: () => {
                if (this._columns().length === 0) {
                    return tableModel_TableViewModel.TABLE_DEFAULT_HEIGHT + this.tableOffset();
                }
                return tableModel_TableViewModel.COLUMNS_OFFSET + (tableModel_TableViewModel.COLUMN_HEIGHT + tableModel_TableViewModel.COLUMN_MARGIN) * (this._columns().length + 1) + this.tableOffset();
            },
            write: () => {
            }
        }));
        this.asterisk = new allColumnsModel_AllColumnsViewModel(this, this.serializer);
        this._disposables.push(this.actualName = external_ko_["pureComputed"](() => this.alias() || this.name()));
    }
    columns() {
        return this._columns();
    }
    toggleSelectedColumns() {
        var value = !this.allColumnsSelected.peek();
        var query = (this.parentModel());
        this._columns.peek().forEach((column) => column.toggleSelected(value, true));
        query.columns.valueHasMutated();
    }
    getColumnConnectionPoints(column) {
        var y = external_ko_["pureComputed"]({
            read: () => {
                var index = this._columns.indexOf(column) + 1;
                return this.location.y() + tableModel_TableViewModel.COLUMNS_OFFSET + tableModel_TableViewModel.COLUMN_MARGIN * index + tableModel_TableViewModel.COLUMN_HEIGHT * (index + 0.5) + this.tableOffset();
            },
            deferEvaluation: true
        });
        this._disposables.push(y);
        return {
            left: { x: this._columnsConnectionPointLeftX, y: y },
            right: { x: this._columnsConnectionPointRightX, y: y }
        };
    }
    getInfo() {
        return tableSerializationInfo;
    }
    getInvalidColumns() {
        return this.columns().filter(x => x.isNotAvailable() && x.selected());
    }
    getColumn(name) {
        return Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this._columns(), 'name', name);
    }
    _initColumns(columns, update = false) {
        var result = [];
        columns.forEach((item) => {
            result.push(this.createChildColumn(item));
        });
        this._columns(update ? [].concat([], this.columns(), result) : result);
    }
    createChildColumn(item) {
        return new columnModel_ColumnViewModel({ '@Name': item.name }, item, this, this.serializer);
    }
    createColumns(dbTable) {
        var notAvailableColumnsCount = 0;
        this.columns().forEach((column) => {
            var expectedColumn = dbTable.columns.filter(x => x.name === column.name())[0];
            if (expectedColumn) {
                column._type(expectedColumn.type);
                column._size(expectedColumn.size);
            }
            else {
                column.isNotAvailable(dbTable.columns.every(x => x.name !== column.name()));
                notAvailableColumnsCount++;
            }
        });
        if (this.columns().length - notAvailableColumnsCount < dbTable.columns.length) {
            this._initColumns(dbTable.columns.filter(x => this.columns().every(c => c.name() !== x.name)), true);
        }
        this._initialized(true);
    }
}
tableModel_TableViewModel.COLUMNS_OFFSET = 37;
tableModel_TableViewModel.COLUMN_HEIGHT = 32;
tableModel_TableViewModel.COLUMN_MARGIN = 1;
tableModel_TableViewModel.TABLE_MIN_WIDTH = 80;
tableModel_TableViewModel.TABLE_DEFAULT_HEIGHT = 136;

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/queryModel.js























class queryModel_QueryViewModelBase extends queryElementModel_QueryElementBaseViewModel {
    constructor(querySource, dbSchemaProvider, parametersMode = ParametersMode.ReadWrite, beforeSaveCallback, serializer) {
        super(querySource, null, serializer);
        this.topOffset = 65;
        this._findAncestorsRelations = (table) => {
            var result = { inner: 0, outer: 0, relations: [] };
            this.relations().forEach((item) => {
                if (item.nestedTable() === table) {
                    result.relations.push(item);
                    item.joinType() === 'LeftOuter' ? result.outer++ : result.inner++;
                    var parentResult = this._findAncestorsRelations(item.parentTable());
                    result.inner += parentResult.inner;
                    result.outer += parentResult.outer;
                    result.relations.push.apply(result.relations, parentResult.relations);
                }
            });
            return result;
        };
        this.aggregatedColumnsCount = external_ko_["observable"](0);
        this.defaultPageHeight = 500;
        this.defaultPageWidth = 500;
        this.dbSchemaProvider = dbSchemaProvider;
        this.onSave = beforeSaveCallback;
        this.editableName = external_ko_["observable"](this.name());
        this._disposables.push(this.name = external_ko_["pureComputed"]({
            read: this.editableName,
            write: val => { }
        }));
        var _pageWidth = external_ko_["observable"](0);
        this._disposables.push(this.pageWidth = external_ko_["pureComputed"]({
            read: () => {
                var result = this.defaultPageWidth;
                this.tables().forEach((table) => {
                    var right = table.location.x() + table.size.width();
                    if (right > result) {
                        result = right;
                    }
                });
                return Math.max(_pageWidth(), result);
            },
            write: (value) => {
                _pageWidth(value);
            }
        }));
        this._disposables.push(this.pageHeight = external_ko_["pureComputed"](() => {
            var result = this.defaultPageHeight;
            this.tables().forEach((table) => {
                var bottom = table.location.y() + table.size.height();
                if (bottom > result) {
                    result = bottom + queryModel_QueryViewModel.pageMargin;
                }
            });
            return result;
        }));
        this.margins = external_DevExpress_Analytics_Elements_["Margins"].fromString();
        this._disposables.push(this.isValid = external_ko_["pureComputed"](() => this._validate()));
        var isAllColumnsAllTablesExpression = column => !column.table() && column.itemType() === ColumnType.AllColumns;
        this._disposables.push(this.allColumnsInTablesSelected = external_ko_["pureComputed"]({
            read: () => this.columns().some(isAllColumnsAllTablesExpression),
            write: (value) => {
                if (value) {
                    this.columns.push(new columnExpression_ColumnExpression({ '@ItemType': 'AllColumns' }, this, serializer));
                }
                else {
                    this.columns.remove(isAllColumnsAllTablesExpression);
                }
            }
        }));
        if (!this.sorting)
            this.sorting = external_ko_["observableArray"]([]);
        if (!this.grouping)
            this.grouping = external_ko_["observableArray"]([]);
    }
    _initializeTable(table) {
        this.dbSchemaProvider.getDbTable(table.name())
            .done((dbTable) => {
            table.createColumns(dbTable);
        });
    }
    _addColumnsToTable(table, columns) {
        table._initColumns(columns.map(x => {
            return new DBColumn({
                Name: x.column()
            });
        }));
    }
    dispose() {
        super.dispose();
        this.onSave = null;
    }
    addChild(control) {
        if (control instanceof relationModel_RelationViewModel) {
            if (this.relations.indexOf(control) > -1)
                return;
            control.parentModel(this);
            this.relations.push(control);
        }
        else if (control instanceof tableModel_TableViewModel) {
            if (this.tables.indexOf(control) > -1)
                return;
            control.parentModel(this);
            if (Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this.tables(), 'actualName', control.name()) !== null) {
                control.alias(Object(external_DevExpress_Analytics_Internal_["getUniqueName"])(this.tables().map((table) => { return table.actualName(); }), control.name() + '_'));
            }
            this.tables.push(control);
        }
        else {
            Object(external_DevExpress_Analytics_Internal_["NotifyAboutWarning"])('Attempt to add wrong child control.');
        }
    }
    removeChild(control) {
        if (control instanceof relationModel_RelationViewModel) {
            if (this.relations().length < 1)
                return;
            var relation = control;
            var indexRelation = this.relations().indexOf(relation);
            while (relation.conditions().length > 0)
                relation.conditions.pop();
            this.relations.splice(indexRelation, 1);
        }
        else if (control instanceof tableModel_TableViewModel) {
            if (this.tables().length < 1)
                return;
            this.tables.splice(this.tables().indexOf(control), 1);
            var relations = this.relations();
            for (var i = relations.length - 1; i > -1; i--) {
                if (relations[i].parentTable() === control || relations[i].nestedTable() === control) {
                    this.removeChild(relations[i]);
                }
            }
            this.sorting.remove((item) => item.isDepended(control.actualName()));
            this.grouping.remove((item) => item.isDepended(control.actualName()));
            this.columns.remove((item) => item.isDepended(control.actualName()));
        }
        else {
            Object(external_DevExpress_Analytics_Internal_["NotifyAboutWarning"])('Attempt to remove wrong child control.');
        }
    }
    validateRelations() {
        var tables = this.tables().map(table => table.actualName());
        this._validateTable(tables, tables[0]);
        return tables.length < 1;
    }
    _validate() {
        if (this.tables().length === 0)
            return false;
        if (!(this.allColumnsInTablesSelected() || this.columns().length > 0))
            return false;
        return this.validateRelations();
    }
    _validateTable(tables, tableName) {
        var index = tables.indexOf(tableName);
        if (index < 0)
            return;
        tables.splice(index, 1);
        var connectedTables = this.relations().map((relation) => {
            if (relation.parentTableName() === tableName)
                return relation.nestedTableName();
            if (relation.nestedTableName() === tableName)
                return relation.parentTableName();
            return null;
        });
        connectedTables.forEach((item) => this._validateTable(tables, item));
    }
    createChild(info, tableViewModel, path) {
        if (!tableViewModel)
            return super.createChild(info);
        this._initializeTable(tableViewModel);
        this.addChild(tableViewModel);
        return tableViewModel;
    }
    init() {
        this.tables().forEach((table) => {
            var columns = [];
            var sorting = this.sorting && this.sorting() || [];
            var grouping = this.grouping && this.grouping() || [];
            [this.columns(), sorting, grouping].forEach((currentColumns) => {
                currentColumns.forEach((column) => {
                    if (table.name() === column.table() && column.itemType() === ColumnType.Column &&
                        columns.every(x => x.column() !== column.column())) {
                        columns.push(column);
                    }
                });
            });
            this._addColumnsToTable(table, columns);
            this._initializeTable(table);
        });
        this.tables().reduce((posX, tableModel) => {
            tableModel.location.x(posX);
            tableModel.location.y(this.topOffset);
            return posX + tableModel.size.width() + tableModel.size.width() / 2;
        }, 30);
        var inProcess = false;
        this._disposables.push(external_ko_["computed"](() => {
            if (!inProcess) {
                inProcess = true;
                var allColumns = this.getAllColumns();
                var withoutAggregate = allColumns.filter(x => x.aggregate() === AggregationType.None);
                this.aggregatedColumnsCount(allColumns.length - withoutAggregate.length);
                if (allColumns.length !== withoutAggregate.length) {
                    withoutAggregate.filter(x => x.selected() && !x.groupBy.peek()).forEach(x => x.groupBy(true));
                }
                else {
                    if (!allColumns.every(x => !x.selected.peek() || x.groupBy.peek())) {
                        allColumns.forEach(x => { if (x.groupBy.peek()) {
                            x.groupBy(false);
                        } });
                    }
                }
                inProcess = false;
            }
        }));
    }
    getTable(name) {
        return Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this.tables(), item => item.actualName() === name);
    }
    canSave(showMessage = true) {
        var message = [];
        this.tables().forEach((t) => {
            t.getInvalidColumns().forEach((column) => {
                message.push(Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The schema does not contain the following column: "{0}"."{1}".', 'DataAccessStringId.ColumnNotInSchemaValidationException'), t.actualName(), column.actualName()));
            });
        });
        if (message.length > 0) {
            showMessage && Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(message.join('\n'), 'error');
            return false;
        }
        return true;
    }
    save() {
        if (!this.canSave())
            return;
        var data = this.serialize(true);
        if (this.onSave) {
            this.onSave(data);
        }
        return data;
    }
    serialize(includeRootTag = false) {
        return includeRootTag ? { 'Query': this.serialize() } : (new external_DevExpress_Analytics_Utils_["ModelSerializer"]()).serialize(this);
    }
    _findTableInAncestors(child, probablyAncestor) {
        return this.relations().some((relation) => {
            return relation.nestedTable() === child && (relation.parentTable() === probablyAncestor || this._findTableInAncestors(relation.parentTable(), probablyAncestor));
        });
    }
    _findHead(table) {
        var result = null;
        this.relations().some((relation) => {
            if (relation.nestedTable() === table)
                result = relation;
            return !!result;
        });
        return result ? this._findHead(result.parentTable()) : table;
    }
    _isHead(table) {
        return !this.relations().some(relation => relation.nestedTable() === table);
    }
    _reverseRelations(table, relationsToReverse) {
        relationsToReverse.forEach((item) => {
            var tempTable = item.parentTable();
            item.parentTable(item.nestedTable());
            item.nestedTable(tempTable);
            item.conditions().forEach((condition) => {
                var tempColumn = condition.parentColumnName();
                condition.parentColumnName(condition.nestedColumnName());
                condition.nestedColumnName(tempColumn);
            });
        });
    }
    getAllColumns() {
        return [].concat.apply([], this.tables().map(x => x.columns()));
    }
    cerateJoinCondition(parentColumn, nestedColumn) {
        var parentTable = parentColumn.parentModel();
        var nestedTable = nestedColumn.parentModel();
        if (parentTable === nestedTable)
            return null;
        var isColumnsReplaced = false;
        var relation = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this.relations(), (relation) => {
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
        var joinCondition = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(relation.conditions(), (condition) => {
            return condition.parentColumn() === parentColumn && condition.nestedColumn() === nestedColumn;
        });
        if (!joinCondition) {
            joinCondition = relation.createChild({ '@ControlType': 'JoinCondition', '@Parent': parentColumn.name(), '@Nested': nestedColumn.name() });
        }
        return joinCondition;
    }
    tryToCreateRelationsByFK(sourceTable) { }
}
queryModel_QueryViewModelBase.pageMargin = 20;
class queryModel_QueryViewModel extends queryModel_QueryViewModelBase {
    constructor(querySource, dbSchemaProvider, parametersMode = ParametersMode.ReadWrite, beforeSaveCallback, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])(true, querySource, queryModel_QueryViewModel.emptyModel, querySource), dbSchemaProvider, parametersMode, beforeSaveCallback, serializer);
        this.controlType = 'Query';
        this['type']('SelectQuery');
        this.tables = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(querySource['Tables']['SelectedTables'], item => new tableModel_TableViewModel(item, this, serializer));
        this.columns = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(querySource['Columns'], item => new columnExpression_ColumnExpression(item, this, serializer));
        this.sorting = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(querySource['Sorting'], item => new columnExpression_ColumnExpression(item, this, serializer));
        this.grouping = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(querySource['Grouping'], item => new columnExpression_ColumnExpression(item, this, serializer));
        this.relations = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(querySource['Tables']['Relations'], item => new relationModel_RelationViewModel(item, this, serializer));
        this.init();
        this['_tablesObject']['tables'] = this.tables;
        this['_tablesObject']['relations'] = this.relations;
        var parameters = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(querySource['Parameters'], item => new parameterModel_ParameterViewModel(item, serializer));
        if (parametersMode === ParametersMode.ReadWrite) {
            this.parameters = parameters;
            this._disposables.push(this.parameters.subscribe((changes) => {
                changes.forEach((change) => {
                    if (change.status === 'added' && !change.value.name())
                        change.value.name(Object(external_DevExpress_Analytics_Internal_["getUniqueName"])(this.parameters().filter(x => x !== change.value).map(x => x.name()), 'parameter'));
                });
            }, null, 'arrayChange'));
        }
        else {
            this._disposables.push(this.parameters = external_ko_["computed"](() => { return parameters(); }));
        }
        this.filterString = new _qbFilterStringOptions_QBFilterStringOptions(this._filterString, null, external_ko_["pureComputed"](() => (this.tables().length === 0) && (this.filterString && this.filterString.value().length === 0)));
        this.filterString.initializeFilterStringHelper(this.parameters, parametersMode);
        this.groupFilterString = new _qbFilterStringOptions_QBFilterStringOptions(this._groupFilterString, null, external_ko_["pureComputed"](() => !this.columns().some(isAggregatedExpression) && (this.groupFilterString && (this.groupFilterString.value() || '').length === 0)));
        this.groupFilterString.initializeFilterStringHelper(this.parameters, parametersMode, new _groupFilterEditorSerializer_GroupFilterEditorSerializer(this.columns));
    }
    isPropertyDisabled(name) {
        if (name === 'skip')
            return this.skip() === 0 && !this.sorting().length;
        return false;
    }
    getInfo() {
        return querySerializationsInfo;
    }
    createChild(info) {
        return super.createChild(info, info['@ControlType'] === 'Table' ? new tableModel_TableViewModel(info, this) : undefined);
    }
    tryToCreateRelationsByFK(sourceTable) {
        this.dbSchemaProvider.getDbSchema().done((dbSchema) => {
            var dbSourceTable = dbSchema.tables.filter((item) => { return item.name === sourceTable.name(); })[0];
            if (dbSourceTable) {
                dbSourceTable.foreignKeys.forEach((fk) => {
                    var pkTable = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(this.tables.peek(), 'name', fk.primaryKeyTable);
                    if (pkTable) {
                        for (var i = 0; i < fk.primaryKeyColumns.length; i++) {
                            var column1 = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(sourceTable.columns(), 'name', fk.columns[i]);
                            var column2 = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(pkTable.columns(), 'name', fk.primaryKeyColumns[i]);
                            if (column1 && column2) {
                                this.cerateJoinCondition(column1, column2);
                            }
                        }
                    }
                });
            }
            this.tables.peek().forEach((table) => {
                var dbTable = dbSchema.tables.filter((item) => { return item.name === table.name(); })[0];
                if (dbTable) {
                    dbTable.foreignKeys.forEach((fk) => {
                        if (fk.primaryKeyTable === sourceTable.name()) {
                            for (var i = 0; i < fk.primaryKeyColumns.length; i++) {
                                var column1 = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(sourceTable.columns(), 'name', fk.primaryKeyColumns[i]);
                                var column2 = Object(external_DevExpress_Analytics_Internal_["getFirstItemByPropertyValue"])(table.columns(), 'name', fk.columns[i]);
                                if (column1 && column2) {
                                    this.cerateJoinCondition(column2, column1);
                                }
                            }
                        }
                    });
                }
            });
        });
    }
}
queryModel_QueryViewModel.emptyModel = { '@ItemType': 'Query', 'Tables': { 'SelectedTables': {}, 'Relations': {} }, 'Columns': {}, 'Sorting': {}, 'Grouping': {} };

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/querySurface.js





class querySurface_QuerySurface extends external_DevExpress_Analytics_Elements_["SurfaceElementBase"] {
    constructor(query, zoom = external_ko_["observable"](1)) {
        super(query, {
            measureUnit: external_ko_["observable"]('Pixels'),
            zoom: zoom,
            dpi: external_ko_["observable"](100)
        }, querySurface_QuerySurface._unitProperties);
        this.placeholder = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Drop a table or view here to create a query.', 'AnalyticsCoreStringId.QueryBuilder_SurfacePlaceholder');
        this.tables = external_ko_["observableArray"]();
        this.relations = external_ko_["observableArray"]();
        this.allowMultiselect = false;
        this.focused = external_ko_["observable"](false);
        this.selected = external_ko_["observable"](false);
        this.underCursor = external_ko_["observable"](new external_DevExpress_Analytics_Internal_["HoverInfo"]());
        this.templateName = 'dx-query-surface';
        this.rtl = external_ko_["observable"](false);
        this.measureUnit = this._context.measureUnit;
        this.dpi = this._context.dpi;
        this._context = this;
        this.margins = { bottom: this['_bottom'], left: this['_left'], right: this['_right'], top: this['_top'] };
        this.zoom = zoom;
        Object(external_DevExpress_Analytics_Internal_["createObservableArrayMapCollection"])(query.tables, this.tables, this._createSurface);
        Object(external_DevExpress_Analytics_Internal_["createObservableArrayMapCollection"])(query.relations, this.relations, this._createSurface);
        this._joinedColumns = external_ko_["computed"](() => {
            var resultColumns = [];
            this.relations().forEach(relation => {
                relation.conditions().forEach(condition => {
                    var joinModel = condition.getControlModel();
                    joinModel.parentColumn() && resultColumns.push(joinModel.parentColumn());
                    joinModel.nestedColumn() && resultColumns.push(joinModel.nestedColumn());
                });
            });
            return resultColumns;
        });
    }
    checkParent(surfaceParent) { return false; }
    getChildrenCollection() {
        return this.tables;
    }
    isJoined(column) {
        return this._joinedColumns().indexOf(column.getControlModel()) > -1;
    }
}
querySurface_QuerySurface._unitProperties = {
    _width: (o) => { return o.pageWidth; },
    _height: (o) => { return o.pageWidth; },
    pageWidth: (o) => { return o.pageWidth; },
    pageHeight: (o) => { return o.pageHeight; },
    _bottom: (o) => { return o.margins.bottom; },
    _left: (o) => { return o.margins.left; },
    _right: (o) => { return o.margins.right; },
    _top: (o) => { return o.margins.top; }
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/queryElementSurface.js



class queryElementSurface_QueryElementBaseSurface extends external_DevExpress_Analytics_Elements_["SurfaceElementBase"] {
    constructor(control, context, unitProperties) {
        super(control, context, Object(external_DevExpress_Analytics_Internal_["extend"])({}, queryElementSurface_QueryElementBaseSurface._unitProperties, unitProperties));
        this.template = 'dx-diagram-element';
        this.selectiontemplate = 'dx-diagram-element-selection';
        this.contenttemplate = 'dx-diagram-element-content';
        this.margin = external_ko_["observable"](0);
    }
}
queryElementSurface_QueryElementBaseSurface._unitProperties = {
    _height: (o) => {
        return o.size.height;
    },
    _width: (o) => {
        return o.size.width;
    },
    _x: (o) => {
        return o.location.x;
    },
    _y: (o) => {
        return o.location.y;
    }
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/columnSurface.js




class columnSurface_ColumnSurface extends external_DevExpress_Analytics_Elements_["SurfaceElementBase"] {
    constructor(control, context) {
        super(control, context, null);
        this.template = 'dxqb-table-field';
        this.toggleSelected = () => {
            this.getControlModel().selected(!this.getControlModel().selected());
        };
        this.selectedWrapper = external_ko_["pureComputed"](() => {
            return this.getControlModel().selected();
        });
        this.isNotAvailable = external_ko_["pureComputed"](() => this._control.isNotAvailable());
        this.isAggregate = external_ko_["pureComputed"](() => isAggregatedExpression(this.getControlModel()));
        this.isAscending = external_ko_["pureComputed"](() => {
            return this.getControlModel().sortingType() === 'Ascending';
        });
        this.isDescending = external_ko_["pureComputed"](() => {
            return this.getControlModel().sortingType() === 'Descending';
        });
        this.cssClasses = (query, columnDragHandler, parent) => {
            if (!this._isJoined) {
                this._isJoined = external_ko_["pureComputed"](() => {
                    return query.isJoined(this) || this.getControlModel() === columnDragHandler.getDragColumn();
                });
            }
            if (!this._isHovered) {
                this._isHovered = external_ko_["pureComputed"](() => {
                    var isColumnDragStarted = !!columnDragHandler.getDragColumn();
                    var isCurrentTableNotParentForDraggedColumn = isColumnDragStarted && this.getControlModel().parentModel() !== columnDragHandler.getDragColumn().parentModel();
                    return this.underCursor().isOver && (!external_DevExpress_Analytics_Internal_["DragDropHandler"].started() || isCurrentTableNotParentForDraggedColumn);
                });
            }
            return {
                'dxd-state-invalid': this.isNotAvailable,
                'dxd-state-active': this.selected(),
                'dxd-state-joined': this._isJoined,
                'dxd-state-hovered': this._isHovered,
            };
        };
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/allColumnsSurface.js



class allColumnsSurface_AllColumnsSurface extends external_DevExpress_Analytics_Elements_["SurfaceElementBase"] {
    constructor(control, context) {
        super(control, context, null);
        this.template = 'dxqb-table-asterisk-field';
        this.toggleSelected = () => {
            this.getControlModel().selected(!this.getControlModel().selected());
        };
        this.selectedWrapper = external_ko_["pureComputed"](() => {
            return this.getControlModel().selected();
        });
        this.isOverAsterisk = external_ko_["pureComputed"](() => {
            return this.underCursor().isOver && !external_DevExpress_Analytics_Internal_["DragDropHandler"].started();
        });
        this.cssClasses = () => {
            return {
                'dxd-state-active': this.selected,
                'dxd-state-hovered': this.isOverAsterisk()
            };
        };
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/tableSurface.js







class tableSurface_TableSurface extends queryElementSurface_QueryElementBaseSurface {
    constructor(control, context) {
        super(control, context, null);
        this.showSourceName = false;
        this.contenttemplate = 'dxqb-table';
        this.titletemplate = 'dxqb-table-title';
        this.template = 'dxqb-table-main';
        this.toggleSelected = () => {
            this.getControlModel().toggleSelectedColumns();
        };
        this.selectedWrapper = external_ko_["pureComputed"](() => {
            return this.getControlModel().allColumnsSelected();
        });
        this.isInitialized = control.isInitialized;
        this.columns = external_ko_["pureComputed"](() => {
            return control.columns().map(columnVewModel => new columnSurface_ColumnSurface(columnVewModel, context));
        });
        this.asterisk = new allColumnsSurface_AllColumnsSurface(control.asterisk, context);
    }
    resizable(resizeHandler, element) {
        return Object(external_DevExpress_Analytics_Internal_["extend"])({}, resizeHandler, {
            handles: 'e,w',
            $selectedNodes: external_jQuery_["fn"].constructor(element),
            minWidth: tableModel_TableViewModel.TABLE_MIN_WIDTH,
        });
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/_federationColumnModel.js




class _federationColumnModel_FederationColumnViewModel extends columnModel_ColumnViewModel {
    constructor(model, dbColumn, parent, serializer) {
        super(model, dbColumn, parent, serializer);
    }
    getInfo() {
        return expressionSerializationInfo;
    }
}
class _federationColumnModel_FederationAllColumnsViewModel extends allColumnsModel_AllColumnsViewModel {
    constructor(parent, serializer) {
        super(parent, serializer);
    }
    getInfo() {
        return [query_builder_metadata_name];
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/_federationQueryModel.js

















var federationQuerySerializationsInfo = [
    { propertyName: 'name', modelName: '@Alias' },
    { propertyName: 'type', modelName: '@Type' },
    { propertyName: 'itemType', modelName: '@ItemType' },
    { propertyName: 'queryType', modelName: '@QueryType' },
    { propertyName: 'rootModel', modelName: 'Root' },
    { propertyName: 'expressions', modelName: 'Expressions', array: true },
    { propertyName: 'subNodes', modelName: 'SubNodes', array: true },
];
class _federationQueryModel_FederationQueryViewModel extends queryModel_QueryViewModelBase {
    constructor(querySource, dataSource, _dbSchemaProvider, parametersMode = ParametersMode.ReadWrite, serializer) {
        super(Object(external_DevExpress_Analytics_Internal_["extend"])(true, querySource, _federationQueryModel_FederationQueryViewModel.emptyModel, querySource), _dbSchemaProvider, parametersMode, (data) => data, serializer);
        this._dbSchemaProvider = _dbSchemaProvider;
        this.serializer = serializer;
        this.expressions = external_ko_["observableArray"]();
        this.subNodes = external_ko_["observableArray"]();
        this.controlType = 'FQuery';
        this.defaultPageHeight = 300;
        this.topOffset = 20;
        this.dataSource = dataSource;
        var _relations = [];
        this.tables = external_ko_["observableArray"]();
        if (querySource['Root']) {
            this.tables.push(this._createTableViewModel(querySource['Root']));
        }
        this.tables.push(...Object.keys(querySource['SubNodes']).map(key => this._createTableViewModel(querySource['SubNodes'][key]['Query'])));
        _relations.push(...Object.keys(querySource['SubNodes']).map(key => new subNode_SubNode(querySource['SubNodes'][key], serializer).createRelationModel(this)));
        this.columns = Object(external_DevExpress_Analytics_Utils_["deserializeArray"])(querySource['Expressions'], item => new columnExpression_ColumnExpression({ '@Name': item['@Name'], '@Alias': item['@Alias'], '@Table': item['@NodeAlias'], '#text': item['@ColumnExpression'], '@ItemType': _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.federatedTypeToColumn(item['@ExpressionType']) }, this, serializer));
        this.relations = external_ko_["observableArray"](_relations);
        this.init();
    }
    _initializeTable(table) {
        this._dbSchemaProvider.getDbTable(table.name(), table.path)
            .done((dbTable) => {
            table.createColumns(dbTable);
        });
    }
    _createTableViewModel(model) {
        var path = this.dataSource.getPathFromQueryName(model['@SourceName']);
        return new _federationQueryModel_FederationTableViewModel(model, this, path, this.serializer);
    }
    dispose() {
        super.dispose();
        this.dataSource = null;
    }
    serialize(includeRootTag) {
        var serializer = this.serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        this.expressions(this.columns().map(column => {
            var model = {
                '@Alias': column.alias(),
                '@ColumnExpression': column.expression(),
                '@Name': column.column(),
                '@NodeAlias': column.table()
            };
            model['@ExpressionType'] = _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.columnTypeToFederated(column.itemType());
            return new federatedQueryExpression_FederatedQueryExpression(model, serializer);
        }));
        this.rootModel(this.tables()[0]);
        var _tables = this.tables();
        _tables.shift();
        var _relations = this.relations();
        this.subNodes(_tables.map(table => {
            var relation = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(_relations, relation => relation.nestedTable() === table);
            if (!relation)
                relation = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(_relations, relation => relation.parentTable() === table);
            _relations.splice(_relations.indexOf(relation), 1);
            return subNode_SubNode.deserializeRelationModel(table, relation);
        }));
        return super.serialize(includeRootTag);
    }
    createChild(info, model, path) {
        return super.createChild(info, info['@ControlType'] === 'FTable' ? new _federationQueryModel_FederationTableViewModel(info, this, path) : undefined);
    }
    cerateJoinCondition(parentColumn, nestedColumn) {
        var parentTable = parentColumn.parentModel();
        var nestedTable = nestedColumn.parentModel();
        if (this.tables().indexOf(parentTable) > this.tables.indexOf(nestedTable))
            return null;
        return super.cerateJoinCondition(parentColumn, nestedColumn);
    }
    getInfo() {
        return federationQuerySerializationsInfo;
    }
}
_federationQueryModel_FederationQueryViewModel.emptyModel = { '@ItemType': 'Query', 'SubNodes': {}, 'Expressions': {} };
class _federationQueryModel_FederationQuerySurface extends querySurface_QuerySurface {
}
class _federationQueryModel_FederationTableViewModel extends tableModel_TableViewModel {
    constructor(model, parent, path, serializer) {
        super(model, parent, serializer);
        this.controlType = 'FTable';
        if (path && !model['@SourceName'])
            this.sourceName(parent.dataSource.getQueryNameFromPath(path));
        if (!this.name()) {
            this.name(this.sourceName());
        }
        !this.alias() && this.alias(this.name());
        this._disposables.push(this.queryType = external_ko_["pureComputed"](() => { return FederationQueryType[FederationQueryType.SourceNode]; }));
        this.tableOffset(12);
        var pathParts = path.split('.');
        var dataSource = parent.dataSource.dataSources().filter(x => {
            return x.id === pathParts[0] || x.ref === pathParts[0] || x.name === pathParts[0];
        })[0];
        this.path = (dataSource.id || dataSource.ref) + (pathParts.length > 1 ? '.' + pathParts.slice(1).join('.') : '');
        this.displaySourceName = external_ko_["observable"](dataSource.name);
        this.asterisk = new _federationColumnModel_FederationAllColumnsViewModel(this, this.serializer);
    }
    getInfo() {
        return sourceQuerySerializationsInfo;
    }
    getPath() {
        return this.path;
    }
    createChildColumn(item) {
        return new _federationColumnModel_FederationColumnViewModel({ '@Name': item.name }, item, this, this.serializer);
    }
}
class _federationQueryModel_FederationTableSurface extends tableSurface_TableSurface {
    constructor() {
        super(...arguments);
        this.titletemplate = 'dxqb-federation-table-title';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/_federationUnionQueryBuilderTreeListController.js

class _federationUnionQueryBuilderTreeListController_FederatedUnionQueryBuilderTreeListController extends external_DevExpress_Analytics_Widgets_Internal_["TreeListController"] {
    constructor(dragDropHandler, dblClickHandler) {
        super();
        this.dragDropHandler = dragDropHandler;
        this.dblClickHandler = dblClickHandler;
    }
    itemsFilter(item, path, model) {
        if (item.specifics === 'none')
            return false;
        return true;
    }
    isDraggable(item) {
        if (!item.data)
            return false;
        if (item.data.isListType || item.data.isSupportQueries === false) {
            var parent = item.parent;
            while (parent && parent.data) {
                if (parent.data.isListType)
                    return false;
                parent = parent.parent;
            }
            return true;
        }
        return false;
    }
}
class FederatedTransformQueryBuilderTreeListController extends _federationUnionQueryBuilderTreeListController_FederatedUnionQueryBuilderTreeListController {
    itemsFilter(item, path, model) {
        return super.itemsFilter(item, path, model) && item.isList;
    }
    hasItems(item) {
        return super.hasItems(item) && (!item.isListType || item.isSupportQueries === false);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federationQueryBuilderPopupBase.js









class _federationQueryBuilderPopupBase_FederationQueryBuilderPopupBase extends external_DevExpress_Analytics_Widgets_Internal_["PopupEditorBase"] {
    constructor(onSaveCallback, _dataSource, rtl = false, onCloseCallback) {
        super();
        this.onSaveCallback = onSaveCallback;
        this._dataSource = _dataSource;
        this.rtl = rtl;
        this.onCloseCallback = onCloseCallback;
        this.selectedPath = external_ko_["observable"]();
        this.title = () => Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Query Builder', 'DataAccessUIStringId.QueryBuilder');
        this.getPopupContainer = external_DevExpress_Analytics_Internal_["getParentContainer"];
        this.loaded = external_ko_["observable"](false);
        this.maxHeight = '90%';
        this.width = '900px';
        this.height = '710px';
        this.cssClass = 'dxrd-querybuilder-federation-popup-wrapper';
        this.resultGridHeight = external_ko_["observable"](250);
        this.dragDropHandler = new external_DevExpress_Analytics_Internal_["WizardDragDropHandler"]({
            dragHelperContent: new external_DevExpress_Analytics_Internal_["DragHelperContent"](null),
            parent: '.dx-designer-viewport .dxrd-querybuilder-federation-popup-wrapper > .dx-popup-normal',
            containment: '.dxrd-querybuilder-federation-popup',
            target: this.popupTarget(),
            addHandler: (dropTarget, item, position) => {
                if (dropTarget && dropTarget instanceof _federationQueryBuilderPopupBase_FederationQueryBuilderPopupBase || dropTarget instanceof querySurface_QuerySurface)
                    this.addDataMember(item, position);
            }
        });
        var treeListController = new _federationUnionQueryBuilderTreeListController_FederatedUnionQueryBuilderTreeListController(this.dragDropHandler, (item) => treeListController.isDraggable(item) && this.addDataMember(item));
        this.fieldListModel = {
            itemsProvider: this._dataSource.dbSchemaProvider,
            treeListController: treeListController,
            selectedPath: this.selectedPath,
            pageSize: 100,
            expandRootItems: true,
            onItemsChanged: (items) => {
                items.forEach(item => {
                    if (item.parent && treeListController.isDraggable(item.parent) && item.parent.data.isListType)
                        item.parent.collapsed(true);
                });
            },
            rtl: rtl
        };
        this._disposables.push(this.dragDropHandler, treeListController);
        this._aliasValidationRule = {
            type: 'custom',
            validationCallback: (options) => {
                if (!options.value)
                    return true;
                return this._aliasValidationCallback(options.value, options.data);
            },
            get message() { return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Alias is not unique', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_AliasUniqueMessage'); }
        };
        this.resizeHelper = new external_DevExpress_Analytics_Widgets_Internal_["ResizeHelper"]();
    }
    _aliasValidationCallback(alias, data) {
        return true;
    }
    dispose() {
        super.dispose();
        this.fieldListModel = null;
        this.onSaveCallback = null;
        this._dataSource = null;
    }
    addDataMember(item, position) { }
    save() {
        this.close();
    }
    close() {
        this.onCloseCallback && this.onCloseCallback();
        this.popupVisible(false);
    }
    popupTarget() {
        return '.dxrd-result-source-grid';
    }
    onHiding() { }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federationTablesExpressionFieldListProvider.js



class _federationTablesExpressionFieldListProvider_FederationTablesExpressionFieldListProvider {
    constructor(provider, tables) {
        this.provider = provider;
        this.tables = tables;
    }
    getItems(pathRequest) {
        var result = external_jQuery_["Deferred"]();
        if (pathRequest.path === '') {
            result.resolve(this.tables().map(table => {
                return { name: table.actualName(), displayName: table.actualName(), isList: true, specifics: 'List', dragData: { noDragable: false } };
            }));
        }
        else {
            var paths = pathRequest.fullPath.split('.');
            paths.shift();
            var table = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this.tables(), table => table.actualName() === paths.join('.'));
            if (table) {
                this.provider.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](table.path)).done(items => result.resolve(items));
            }
        }
        return result.promise();
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federationSelectQueryBuilderPopup.js



















class _federationSelectQueryBuilderPopup_FederationSelectQueryBuilderPopup extends _federationQueryBuilderPopupBase_FederationQueryBuilderPopupBase {
    constructor(onSaveCallback, dataSource, rtl = false, onCloseCallback) {
        super(onSaveCallback, dataSource, rtl, onCloseCallback);
        this.popupContentTemplate = 'dxrd-querybuilder-select-popup-content';
        this._querySource = external_ko_["observable"](null);
        this.designer = external_ko_["observable"](null);
        this.joinResultCollapsed = external_ko_["observable"](false);
        this.width = '90%';
        this.height = '90%';
        this.cssClass = 'dxrd-querybuilder-federation-popup-wrapper dxrd-querybuilder-select-federation-popup';
        this._qbOptions = {
            queryBuilderModel: this.designer,
            dataSource: dataSource,
            dbSchemaProvider: external_ko_["observable"](dataSource.dbSchemaProvider),
            showPropertyGridCondition: (model) => model.controlType === 'JoinCondition' || model.controlType === 'FTable' || model.controlType === 'Column',
            querySource: this._querySource,
        };
        this.queryBuilderSurfaceCreator = {
            options: this._qbOptions,
            creator: (options) => {
                return new _federationQueryModel_FederationQueryViewModel(options.querySource(), options.dataSource, options.dbSchemaProvider(), options.parametersMode, new external_DevExpress_Analytics_Utils_["ModelSerializer"]());
            }
        };
        var rootItems = [{ name: 'DataSource', needPrefix: false, rootPath: 'Root' }];
        this.allColumns = external_ko_["pureComputed"](() => {
            var columns = [];
            if (this._getQuery()) {
                var tableName = '';
                columns.push({ column: allColumnsModel_AllColumnsViewModel.DisplayName(), table: tableName, key: FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllColumnsExpression] });
                var allColumns = this._getQuery().getAllColumns().map(x => {
                    var tableModel = x.parentModel();
                    return {
                        column: x.name(),
                        table: tableModel.actualName(),
                        key: this._generateKey(tableModel.actualName(), x.name(), x.actualName(), x.alias())
                    };
                });
                allColumns.forEach(column => {
                    if (column.table && tableName !== column.table) {
                        columns.push({ column: allColumnsModel_AllColumnsViewModel.DisplayName(), table: column.table, key: column.table + '_' + FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllNodeColumnsExpression] });
                    }
                    tableName = column.table;
                    columns.push(column);
                });
            }
            return columns;
        });
        this.columnsExpressions = external_ko_["pureComputed"](() => this._getQuery() && this._getQuery().columns().map((x, index) => {
            var key;
            var column;
            if (x.actualName()) {
                key = this._generateKey(x.table(), x.column(), x.actualName(), x.alias());
            }
            if (x.itemType() === ColumnType[ColumnType.Column]) {
                column = x.column();
            }
            else if (x.itemType() === ColumnType[ColumnType.Expression]) {
                column = x.expression();
            }
            else if (x.itemType() === ColumnType[ColumnType.AllColumns]) {
                key = x.table() + '_' + FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllNodeColumnsExpression];
                column = allColumnsModel_AllColumnsViewModel.DisplayName();
            }
            else if (x.itemType() === ColumnType[ColumnType.AllColumnsQuery]) {
                key = FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllColumnsExpression];
                column = allColumnsModel_AllColumnsViewModel.DisplayName();
            }
            return {
                alias: x.alias(),
                key: key,
                index: index,
                column: column,
                table: x.table(),
                isExpression: external_ko_["observable"](x.itemType() === ColumnType[ColumnType.Expression] ? true : false),
                expression: x.expression
            };
        }));
        this._disposables.push(this.columnsExpressions, this.allColumns);
        var cellTemplateMask = (container, options) => {
            if (options.data.key && this._isSelectAllItemByKey(options.data.key)) {
                return cellTemplate(container, options);
            }
            var templateHtml = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrd-querybuilder-column-combobox-masked'), $element = external_jQuery_["fn"].constructor(container).append(templateHtml);
            var model = {
                cellInfo: options.data,
                isExpression: options.data.isExpression || external_ko_["observable"](false),
                switchEditors: () => null
            };
            external_ko_["applyBindings"](model, $element[0]);
        };
        var cellTemplate = (container, options) => {
            var $container = external_jQuery_["fn"].constructor(container);
            var childContext = this._bindingContext.createChildContext({
                allColumns: this.allColumns,
                itemsProvider: new _federationTablesExpressionFieldListProvider_FederationTablesExpressionFieldListProvider(this._dataSource.dbSchemaProvider, this._getQuery().tables),
                cellInfo: options.data,
                expression: { value: options.data.expression, onContentReady: this._onContentReady, path: external_ko_["observable"](rootItems[0].name), customizeCategories: () => { }, rootItems, functions: Object(external_DevExpress_Analytics_Widgets_Internal_["functionDisplay"])().filter(cat => cat.category != 'Aggregate') },
                isExpression: options.data.isExpression || external_ko_["observable"](false),
                changeColumn: (selectionChangedArgs) => {
                    this._changeColumn(selectionChangedArgs.selectedRowsData[0], selectionChangedArgs.model.cellInfo.index);
                },
                switchEditors: (e) => {
                    this._switchEditors(e.model.cellInfo);
                }
            });
            var child = document.createElement('div'), $container = $container.append(child);
            external_ko_["renderTemplate"]('dxrd-querybuilder-column-combobox', childContext, {}, child, 'replaceNode');
            Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(container, function () {
                $container = null;
                child = null;
                childContext = null;
            });
        };
        this._disposables.push(this.addRowDisabled = external_ko_["pureComputed"](() => {
            return !this._getQuery() || this._getQuery().tables().length === 0;
        }));
        this.columnsGrid = {
            rtlEnabled: rtl,
            dataSource: this.columnsExpressions,
            disabled: this.addRowDisabled,
            showRowLines: true,
            height: '100%',
            showBorders: true,
            editing: {
                allowUpdating: (grid) => {
                    return !(grid.row && grid.row.data.key &&
                        this._isSelectAllItemByKey(grid.row.data.key));
                },
                newRowPosition: 'last',
                mode: 'cell',
                texts: {
                    confirmDeleteMessage: '',
                }
            },
            paging: { enabled: false },
            columns: [{
                    dataField: 'column',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Column Name', 'DataAccessUIStringId.QueryBuilderColumns_ColumnName');
                    },
                    cssClass: 'dx-editor-cell',
                    editCellTemplate: cellTemplate,
                    cellTemplate: cellTemplateMask
                }, {
                    dataField: 'table',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Table Name', 'DataAccessUIStringId.QueryBuilderColumns_TableName');
                    },
                    allowEditing: false
                }, {
                    dataField: 'alias',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Alias', 'DataAccessUIStringId.QueryBuilderColumns_Alias');
                    },
                    disabled: true,
                    validationRules: [this._aliasValidationRule, {
                            type: 'custom',
                            validationCallback: (options) => {
                                if (options.value === '' && options.data && options.data.key) {
                                    var existedColumn = _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.findByName(this._getQuery().columns, options.data.key);
                                    if (existedColumn && existedColumn.itemType() === ColumnType[ColumnType.Expression])
                                        return false;
                                }
                                return true;
                            },
                            get message() { return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('The column name is not specified.', 'DataAccessStringId.UnnamedColumnValidationException'); }
                        }]
                },
                {
                    type: 'buttons',
                    width: 50,
                    buttons: [
                        {
                            icon: 'delete',
                            onClick: (e) => {
                                this._deleteRow(e.row.data.index != null ? e.row.data.index : this._getQuery().columns().length);
                            },
                            cssClass: 'dxrd-querybuilder-grid-actions dxd-icon-highlighted dxrd-image-recycle-bin',
                            template: Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrd-svg-operations-recycle_bin'),
                        }
                    ]
                }
            ],
            onInitialized: (e) => {
                this._bindingContext = external_ko_["contextFor"](external_jQuery_["fn"].constructor(e.element)[0]);
                this._gridComponent = e.component;
            },
            onRowUpdating: (event) => {
                this._onRowUpdating(event.oldData, event.newData);
            }
        };
        this.gridResizeHelper = new external_DevExpress_Analytics_Widgets_Internal_["ResizeHelper"](this.resultGridHeight, this.joinResultCollapsed);
    }
    _onContentReady(e) {
        if (!e.component._isFirstLoad) {
            e.component._isFirstLoad = true;
            var element = external_jQuery_["fn"].constructor(e.component.content())[0];
            var contentEl = element.parentElement;
            contentEl.className += '  dx-dropdowneditor-overlay';
        }
    }
    _getQuery() {
        return this.designer() && this.designer().model();
    }
    _afterChangeColumn(colIndex, notifyCallback) {
        this._gridComponent.saveEditData().then(() => {
            this._gridComponent.cancelEditData();
            var event = () => {
                var rows = this._gridComponent.getVisibleRows();
                var index = colIndex != null ? colIndex : rows.length - 1;
                this._gridComponent.editCell(index, 0);
                this._gridComponent.navigateToRow(this.columnsExpressions()[index]);
                this._gridComponent.off('contentReady', event);
            };
            this._gridComponent.on('contentReady', event);
            notifyCallback();
        });
    }
    _changeColumn(columnData, insertIndex) {
        if (columnData) {
            var query = _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.createNew(this._getQuery(), this._getQuery().columns, columnData.table, columnData.column);
            if (this._isSelectAllItemByKey(columnData.key)) {
                query = columnData.table ?
                    new columnExpression_ColumnExpression({ '@Table': columnData.table, '@ItemType': ColumnType[ColumnType.AllColumns] }, this._getQuery()) :
                    new columnExpression_ColumnExpression({ '@ItemType': ColumnType[ColumnType.AllColumnsQuery] }, this._getQuery());
            }
            var callback = () => insertIndex != null ? this._getQuery().columns.splice(insertIndex, 1, query) : this._getQuery().columns.push(query);
            this._afterChangeColumn(insertIndex, callback);
        }
    }
    _switchEditors(model) {
        var column;
        var callback = () => this._getQuery().columns.notifySubscribers();
        if (model.index != null) {
            column = this._getQuery().columns()[model.index];
            if (model.isExpression()) {
                column.toTable();
            }
            else if (column.itemType() === ColumnType[ColumnType.AllColumns] || column.itemType() === ColumnType[ColumnType.AllColumnsQuery]) {
                column = new columnExpression_ColumnExpression({}, this._getQuery());
                _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.toExpresson(column, this._getQuery().columns, '');
                this._getQuery().columns.splice(model.index, 1, column);
            }
            else {
                var epressionValue = column.column() ? '[' + column.table() + '.' + column.column() + ']' : '';
                _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.toExpresson(column, this._getQuery().columns, epressionValue);
            }
        }
        else {
            column = new columnExpression_ColumnExpression({}, this._getQuery());
            _columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.toExpresson(column, this._getQuery().columns, '');
            callback = () => this._getQuery().columns.push(column);
        }
        this._afterChangeColumn(model.index, callback);
    }
    _deleteRow(deleteIndex) {
        this._gridComponent.deleteRow(deleteIndex);
        this._gridComponent.deselectAll();
        this._getQuery().columns.splice(deleteIndex, 1);
    }
    _onRowUpdating(oldData, newData) {
        var column = this._getQuery().columns()[oldData.index];
        if (column) {
            column.alias(newData.alias);
        }
        oldData.alias = newData.alias;
        this._gridComponent.saveEditData();
    }
    _aliasValidationCallback(alias, data) {
        if (alias === data.alias && alias === data.key)
            return true;
        return !_columnExpressionCollectionHelper_ColumnExpressionCollectionHelper.findByName(this._getQuery().columns, alias);
    }
    dispose() {
        super.dispose();
        this._bindingContext = null;
        this._gridComponent = null;
        this._qbOptions = null;
        this.queryBuilderSurfaceCreator = null;
        this.columnsGrid = null;
    }
    _generateKey(tableName, columnName, actualName, alias) {
        return alias === actualName ? actualName : tableName + '_' + columnName;
    }
    _isSelectAllItemByKey(key) {
        return key === FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllColumnsExpression] ||
            key.indexOf(FederatedQueryExpressionType[FederatedQueryExpressionType.SelectAllNodeColumnsExpression]) !== -1;
    }
    save() {
        this.selectQuery.init(this._getQuery().serialize());
        this.onSaveCallback(this.selectQuery);
        this.close();
    }
    addRow() {
        this._gridComponent.addRow();
        this._gridComponent.deselectAll();
    }
    canSave() {
        return this._getQuery() && this._getQuery().isValid();
    }
    addDataMember(item, position) {
        var query = this._getQuery();
        if (query.tables().length > 1 && !query.validateRelations())
            return;
        var name = item.data.displayName || item.data.name;
        var newControl = query.createChild(Object(external_DevExpress_Analytics_Internal_["extend"])({
            '@ControlType': 'FTable',
            '@Name': name
        }, controlsFactory.controlsMap['FTable'].defaultVal), undefined, item.path);
        var controlSurface = external_ko_["unwrap"](Object(external_DevExpress_Analytics_Internal_["findSurface"])(newControl));
        if (!position) {
            var posX = Math.max.apply(null, query.tables.peek()
                .filter(t => t !== newControl)
                .map((t) => t.location.x.peek() + t.size.width.peek() * 1.25)
                .concat([30]));
            newControl.location.x(posX);
            newControl.location.y(20);
        }
        else {
            var _querySurface = external_ko_["unwrap"](Object(external_DevExpress_Analytics_Internal_["findSurface"])(this.designer()));
            _querySurface.underCursor().x = position.left - _querySurface['absolutePosition'].x();
            _querySurface.underCursor().y = position.top - _querySurface['absolutePosition'].y();
            controlSurface.rect({ left: _querySurface.underCursor().x, top: _querySurface.underCursor().y, width: 199 });
        }
        this.designer().selection.initialize(controlSurface);
    }
    show(query) {
        this.selectQuery = query;
        this._querySource(new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(query));
        this.popupVisible(true);
    }
    popupTarget() {
        return '.dxrd-select-querybuilder-surface .dxqb-main';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federationTransformResultSchemaProvider.js



class _federationTransformResultSchemaProvider_TransformResultSchemaProvider {
    constructor(itemsProvider, transformData, currentPath) {
        this.getItems = (path) => {
            var result = external_jQuery_["Deferred"]();
            if (!currentPath() || path.fullPath.split('.').length > currentPath().split('.').length) {
                return result.resolve([]).promise();
            }
            itemsProvider.getItems(path).done(resultItems => {
                var itemsArray = [];
                var listPath = [];
                resultItems.forEach(item => {
                    var column = transformData().filter(x => x.name == item.name)[0];
                    if (Object(external_DevExpress_Analytics_Internal_["isList"])(item) && column && column.transform.value()) {
                        listPath.push(column);
                    }
                    else {
                        item.displayName = (column && column.alias) || item.displayName;
                        itemsArray.push(item);
                    }
                });
                if (listPath.length === 0) {
                    result.resolve(itemsArray);
                }
                else {
                    external_jQuery_["when"](...listPath.map(x => itemsProvider.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](path.fullPath + '.' + x.name)).always((subNodes) => {
                        subNodes.forEach(element => {
                            var name = (x.alias || x.column) + '_' + element.displayName;
                            element.displayName = name;
                            element.name = name;
                        });
                        result.resolve(subNodes.concat(itemsArray));
                    })));
                }
            });
            return result.promise();
        };
        this.dispose = () => {
            this.getItems = null;
            itemsProvider = null;
        };
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federationTransformQueryBuilderPopup.js











class _federationTransformQueryBuilderPopup_FederationTransformQueryBuilderPopup extends _federationQueryBuilderPopupBase_FederationQueryBuilderPopupBase {
    constructor(onSaveCallback, dataSource, rtl = false, onCloseCallback) {
        super(onSaveCallback, dataSource, rtl, onCloseCallback);
        this.transformGridTitle = external_ko_["observable"]();
        this.transformResultGridTitle = external_ko_["observable"]();
        this.transformResultCollapsed = external_ko_["observable"](false);
        this.transformSources = external_ko_["observable"]([]);
        this.currentPath = external_ko_["observable"]();
        this.transformQuery = external_ko_["observable"]();
        this.popupContentTemplate = 'dxrd-querybuilder-transform-popup-content';
        this.transformGrid = {
            rtlEnabled: rtl,
            noDataText: () => '',
            dataSource: this.transformSources,
            showRowLines: true,
            paging: { enabled: false },
            scrolling: { mode: 'infinite' },
            editing: {
                allowUpdating: true,
                mode: 'cell',
            },
            height: '100%',
            columns: [{
                    dataField: 'column',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Column Name', 'DataAccessUIStringId.QueryBuilderColumns_ColumnName');
                    },
                    allowEditing: false
                }, {
                    dataField: 'alias',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Alias', 'DataAccessUIStringId.QueryBuilderColumns_Alias');
                    },
                    validationRules: [this._aliasValidationRule]
                }, {
                    type: 'buttons',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Transform', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_NodeType_Transform');
                    },
                    buttons: [{
                            template: function (element, object) {
                                var child = document.createElement('div');
                                element.append(child);
                                external_ko_["renderTemplate"]('dxrd-querybuilder-transform-checkbox', object.data, {}, child, 'replaceNode');
                            },
                        }]
                }
            ],
            onRowUpdating: (event) => {
                event.oldData.alias = event.newData.alias;
                this.resultFieldListModel.valueHasMutated();
                this.transformSources.valueHasMutated();
            }
        };
        var transformResultSchemaProvider = new _federationTransformResultSchemaProvider_TransformResultSchemaProvider(this._dataSource.dbSchemaProvider, this.transformSources, this.currentPath);
        this.resultFieldListModel = external_ko_["observable"]({
            itemsProvider: transformResultSchemaProvider,
            path: this.currentPath,
            selectedPath: external_ko_["observable"](),
            treeListController: null
        });
        var treeListController = new FederatedTransformQueryBuilderTreeListController(this.dragDropHandler, (item) => treeListController.isDraggable(item) && this.addDataMember(item));
        this.fieldListModel = {
            itemsProvider: this._dataSource.dbSchemaProvider,
            treeListController: treeListController,
            selectedPath: this.selectedPath,
            pageSize: 100,
            expandRootItems: true
        };
        this._disposables.push(this.currentPath.subscribe(path => {
            this.selectedPath(path);
            this.transformGridTitle(Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Transformation node root: {0}', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_TransformationNodeRoot'), this._dataSource.getQueryNameFromPath(path)));
        }), treeListController, transformResultSchemaProvider, treeListController);
        this.transformResultGridTitle(Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Transformation result', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_TransformationResult'));
    }
    _updateColumns(columns, path) {
        this.transformSources(columns.map(x => {
            var disabled = !x.isList;
            return {
                columns: columns,
                column: x.displayName,
                name: x.name,
                key: path + '.' + x.name,
                alias: undefined,
                transform: {
                    value: external_ko_["observable"](disabled ? undefined : false),
                    disabled: disabled,
                    onValueChanged: () => { this.resultFieldListModel.valueHasMutated(); }
                }
            };
        }));
    }
    _aliasValidationCallback(alias, data) {
        var existedColumn = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this.transformSources(), source => source.alias === alias);
        if (existedColumn && existedColumn.key === data.key)
            return true;
        return !existedColumn;
    }
    dispose() {
        super.dispose();
        this.resultFieldListModel = null;
        this.transformGrid = null;
    }
    addDataMember(item) {
        this.currentPath(item.path);
        this.updateColumns();
        this.transformSources.valueHasMutated();
    }
    updateColumns() {
        var path = this.currentPath();
        this._dataSource.fielListProvider.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](this.currentPath())).done((result) => {
            this._updateColumns(result, path);
        });
    }
    canSave() {
        return this.transformSources().some(source => source.transform.value() || source.alias);
    }
    save() {
        var query = this.transformQuery();
        query.root(new sourceQuery_SourceQuery({}, new external_DevExpress_Analytics_Utils_["ModelSerializer"](), this._dataSource.getQueryNameFromPath(this.currentPath()), this.currentPath()));
        query.transformationRules([]);
        this.transformSources().forEach(source => {
            if (source.transform.value() || source.alias) {
                query.transformationRules.push(new transformQuery_FederationTransformationRule({
                    '@Name': source.name,
                    '@Alias': source.alias,
                    '@Unfold': source.transform.value(),
                    '@Flatten': source.transform.value()
                }));
            }
        });
        this.onSaveCallback(this.transformQuery());
        this.close();
    }
    onHiding() {
        this.transformQuery(null);
        this.transformResultCollapsed(false);
        this.currentPath('');
        this.transformSources([]);
    }
    show(query) {
        this.transformQuery(query);
        if (query.root && query.root()) {
            var path = this._dataSource.getPathFromQueryName(query.root().sourceName());
            this.currentPath(path);
            this._dataSource.fielListProvider.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](path)).done((result) => {
                this._updateColumns(result, path);
                query.transformationRules().forEach(rule => {
                    var column = this.transformSources().filter(x => x.name === rule.name())[0];
                    column.alias = rule.alias();
                    column.transform.value(rule.unfold());
                });
            });
        }
        if (!this.currentPath()) {
            var firstDataSource = this._dataSource.dataSources()[0];
            var firstDataSourceName = firstDataSource.ref || firstDataSource.id;
            if (firstDataSource.isListType) {
                this.currentPath(firstDataSourceName);
                this.updateColumns();
            }
            else {
                this._dataSource.fielListProvider.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](firstDataSourceName)).done(items => {
                    this.currentPath(items[0] && items[0].isListType ? firstDataSourceName + '.' + items[0].name : firstDataSourceName);
                    this.updateColumns();
                });
            }
        }
        this.popupVisible(true);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federationUnionQueryBuilderPopup.js







class _federationUnionQueryBuilderPopup_FederationUnionQueryBuilderPopup extends _federationQueryBuilderPopupBase_FederationQueryBuilderPopupBase {
    constructor(onSaveCallback, dataSource, rtl = false, onCloseCallback) {
        super(onSaveCallback, dataSource, rtl, onCloseCallback);
        this.unionQuery = external_ko_["observable"]();
        this.unionAll = external_ko_["observable"](false);
        this.columns = external_ko_["observableArray"]();
        this.popupContentTemplate = 'dxrd-querybuilder-union-popup-content';
        this.buttonItems.push({
            toolbar: 'bottom', location: 'before', widget: 'dxCheckBox', options: { text: Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Union All', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_NodeType_UnionAll'), value: this.unionAll }
        });
        var sources = external_ko_["pureComputed"](() => this.unionQuery() && this.unionQuery().queries().map(x => {
            var alias = x.alias.peek();
            return {
                source: alias.split('_').join(' - '),
                name: alias
            };
        }));
        this._disposables.push(sources);
        this.sourcesGrid = {
            rtlEnabled: rtl,
            noDataText: () => Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Drop a table or view here to create a query.', 'AnalyticsCoreStringId.QueryBuilder_SurfacePlaceholder'),
            dataSource: sources,
            showRowLines: true,
            paging: { enabled: false },
            scrolling: { mode: 'infinite' },
            columns: [{
                    dataField: 'source',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Source', 'DataAccessUIStringId.QueryBuilderColumns_Source');
                    },
                }, {
                    type: 'buttons',
                    width: 30,
                    buttons: [{
                            icon: 'delete',
                            onClick: (e) => {
                                this.unionQuery().removeQuery(e.row.data.name);
                                this.unionQuery.valueHasMutated();
                            },
                            cssClass: 'dxrd-image-recycle-bin',
                            template: Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrd-svg-operations-recycle_bin'),
                        }]
                }
            ]
        };
        this._disposables.push(this.unionQuery.subscribe((unionQuery) => {
            var expressionArrays = [];
            var resultExpressions = [];
            this.columns([]);
            if (!unionQuery || unionQuery.queries().length === 0) {
                return;
            }
            unionQuery.queries().forEach(query => expressionArrays.push(query.expressions()));
            expressionArrays[0] && expressionArrays[0].forEach(expression => {
                if (expressionArrays.every(array => !!array.filter(x => x.name() === expression.name())[0])) {
                    resultExpressions.push({
                        name: expression.name(),
                        alias: expression.alias(),
                        key: expression.table() + '.' + expression.name()
                    });
                }
            });
            this.columns(resultExpressions);
        }));
        this._disposables.push(this.unionAll.subscribe((value) => {
            if (!this.unionQuery())
                return;
            if (value) {
                this.unionQuery().unionType(UnionTypes[UnionTypes.UnionAll]);
            }
            else {
                this.unionQuery().unionType(UnionTypes[UnionTypes.Union]);
            }
        }));
        this.aliasGrid = {
            rtlEnabled: rtl,
            dataSource: this.columns,
            showRowLines: true,
            editing: {
                allowUpdating: true,
                mode: 'cell',
            },
            paging: { enabled: false },
            scrolling: { mode: 'infinite' },
            height: '100%',
            columns: [{
                    dataField: 'name',
                    caption: 'Column Name',
                    allowEditing: false
                }, {
                    dataField: 'alias',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Alias', 'DataAccessUIStringId.QueryBuilderColumns_Alias');
                    },
                    validationRules: [this._aliasValidationRule]
                }],
            onRowUpdating: (event) => {
                event.oldData.alias = event.newData.alias;
            }
        };
    }
    _aliasValidationCallback(alias, data) {
        var existedColumn = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this.columns(), source => source.alias === alias);
        if (existedColumn && existedColumn.key === data.key)
            return true;
        return !existedColumn;
    }
    dispose() {
        super.dispose();
        this.sourcesGrid = null;
        this.aliasGrid = null;
    }
    addDataMember(item) {
        this._dataSource.fielListProvider.getItems(new external_DevExpress_Analytics_Utils_["PathRequest"](item.path)).done((result) => {
            result.forEach(x => this.unionQuery().addSelectQuery(item.path, x.name));
            this.unionQuery.valueHasMutated();
        });
    }
    canSave() {
        return this.unionQuery() && this.unionQuery().queries().length > 0;
    }
    save() {
        this.unionQuery().queries().forEach(query => {
            query.expressions(query.expressions().filter(expression => {
                var column = this.columns().filter(column => column.name === expression.name())[0];
                if (column) {
                    expression.alias(column.alias);
                    return true;
                }
                return false;
            }));
        });
        this.onSaveCallback(this.unionQuery());
        this.close();
    }
    onHiding() {
        this.unionQuery(null);
        this.unionAll(false);
    }
    show(query) {
        this.unionQuery(query);
        this.popupVisible(true);
        this.unionAll(query.unionType() === UnionTypes[UnionTypes.UnionAll]);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/_federatedQueriesHelper.js










class _federatedQueriesHelper_FederatedQueriesHelper extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(_dataSource, queries, callbacks, rtl = false) {
        super();
        this._dataSource = _dataSource;
        this.queries = queries;
        this._showSelectQbCallBack = (name = null) => {
            this._popupSelectQueryBuilder.show(this._getQuery(() => new selectQuery_SelectQuery({}), name));
        };
        this._showUnionQbCallBack = (name = null) => {
            this._popupUnionQueryBuilder.show(this._getQuery(() => new unionQuery_UnionQuery({}, this._dataSource.dataSources), name));
        };
        this._showTransformQbCallBack = (name = null) => {
            this._popupTransformQueryBuilder.show(this._getQuery(() => new transformQuery_TransformQuery({}), name));
        };
        this.template = 'dx-querybuilder-federation-popup-templates';
        var saveCallback = (query) => {
            this._setQuery(query);
            queries.valueHasMutated();
            callbacks.onSave && callbacks.onSave();
        };
        this._afterAddQuery = callbacks.afterAddQuery;
        this._disposables.push(queries.subscribe(queries => queries.forEach(query => {
            query.sources().forEach(x => this._dataSource.addSource(x));
        })));
        this._disposables.push(this._popupSelectQueryBuilder = new _federationSelectQueryBuilderPopup_FederationSelectQueryBuilderPopup(saveCallback, this._dataSource, rtl, callbacks.onClose));
        this._disposables.push(this._popupUnionQueryBuilder = new _federationUnionQueryBuilderPopup_FederationUnionQueryBuilderPopup(saveCallback, this._dataSource, rtl, callbacks.onClose));
        this._disposables.push(this._popupTransformQueryBuilder = new _federationTransformQueryBuilderPopup_FederationTransformQueryBuilderPopup(saveCallback, this._dataSource, rtl, callbacks.onClose));
        this.callBacks = {
            joinCallBack: this._showSelectQbCallBack,
            unionCallBack: this._showUnionQbCallBack,
            transformCallBack: this._showTransformQbCallBack
        };
        this.popupItems = [
            { template: 'dxrd-querybuilder-federation-popup', model: this._popupSelectQueryBuilder },
            { template: 'dxrd-querybuilder-federation-popup', model: this._popupUnionQueryBuilder },
            { template: 'dxrd-querybuilder-federation-popup', model: this._popupTransformQueryBuilder }
        ];
    }
    _getQuery(creator, name) {
        return name ? Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this.queries(), item => name === item.alias()) : creator();
    }
    _setQuery(query) {
        if (!query)
            return;
        if (this.queries.indexOf(query) === -1) {
            query.alias(query.alias() || query.generateName());
            if (this._dataSource.queries().filter(x => x.alias() === query.alias())[0]) {
                query.alias(Object(external_DevExpress_Analytics_Internal_["getUniqueName"])(this._dataSource.queries().map(x => x.alias()), query.alias()));
            }
            this.queries.push(query);
            this._afterAddQuery && this._afterAddQuery(query);
        }
    }
    editQuery(type, name) {
        switch (type) {
            case FederationQueryType.SelectNode:
                this.callBacks.joinCallBack(name);
                break;
            case FederationQueryType.UnionNode:
                this.callBacks.unionCallBack(name);
                break;
            case FederationQueryType.TransformationNode:
                this.callBacks.transformCallBack(name);
                break;
        }
    }
    dispose() {
        super.dispose();
        this._dataSource = null;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federationDataSourceItemsExtender.js
class FederationDataSourceItemsExtender {
    constructor(_rootItems) {
        this._rootItems = _rootItems;
    }
    afterItemsFilled(request, items) {
        items.forEach(x => {
            if (x.isListType === undefined) {
                x.isListType = x.specifics === 'List';
            }
        });
    }
    beforeItemsFilled(request, items) {
        if (!request.fullPath) {
            items.push(...this._rootItems().map(item => {
                return {
                    name: item.id || item.ref,
                    displayName: item.name,
                    isList: true,
                    specifics: item.specifics || 'ListSource',
                    isSupportQueries: item.isSupportQueries,
                    isListType: item.isListType
                };
            }));
            return true;
        }
        return false;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federatedQueriesTreeNode.js


class _federatedQueriesTreeNode_FederatedQueriesTreeNode extends _treeListNode_QueriesTreeNode {
    constructor(name, displayName, specifics, isChecked, callbacks, afterCheckToggled) {
        super(name, displayName, specifics, isChecked, callbacks, afterCheckToggled);
        this.callbacks = callbacks;
        this.addAction = {
            clickAction: () => {
                return this.showPopover();
            },
            imageClassName: 'dxrd-image-add',
            imageTemplateName: 'dxrd-svg-operations-add',
            templateName: 'dx-treelist-federation-action-with-popover',
            text: Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Add query', 'AnalyticsCoreStringId.SqlDSWizard_AddQuery')
        };
        this.className = 'dxrd-federation-addqueries-popover';
    }
    getActions(context) {
        var result = [];
        if (context.path.indexOf('queries') === 0) {
            result.push(this.addAction);
        }
        return result;
    }
    popoverListItems() {
        return [
            {
                name: Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Join', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_NodeType_Select'),
                addAction: () => this.callbacks().showQbCallBacks.joinCallBack(),
                className: this.className
            },
            {
                name: Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Union', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_NodeType_Union'),
                addAction: () => this.callbacks().showQbCallBacks.unionCallBack(),
                className: this.className
            },
            {
                name: Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Transform', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_NodeType_Transform'),
                addAction: () => this.callbacks().showQbCallBacks.transformCallBack(),
                className: this.className
            }
        ];
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/federationDataSource/_federationTreeNodeProvider.js










class _federationTreeNodeProvider_FederationTreeNodeProvider extends _treeNodeItemsProvider_TreeNodeItemsProvider {
    constructor(fieldListProvider, rootItems, callBacks, customQueries, afterCheckToggled) {
        super(fieldListProvider, rootItems, (item, isChecked, path) => new _federationTreeNodeProvider_FederationDataMemberTreeNode(item.name, item.displayName, item.specifics, item.isListType, isChecked, path, afterCheckToggled), (item, isChecked, path) => new _treeListNode_FieldTreeNode(item.name, item.displayName, item.specifics, isChecked, path, afterCheckToggled));
        this._callBack = external_ko_["observable"]({
            deleteAction: (name) => {
                this._customQueries
                    .remove(Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._customQueries(), item => (item.alias() || item.generateName()) === name));
            },
            disableCustomSql: false,
            showQbCallBack: null,
            showQbCallBacks: null
        });
        var getCurrentItems = this.getItems;
        this._customQueries = customQueries;
        this.getItems = (pathRequest) => {
            var result = external_jQuery_["Deferred"]();
            if (pathRequest.fullPath && pathRequest.fullPath.split('.').length > 2) {
                result.resolve([]);
            }
            if (pathRequest.fullPath === 'queries') {
                var queries = customQueries().map(query => {
                    var name = query.alias() || query.generateName();
                    var currentQuery = this._queries.children().filter(q => q['query'] === query)[0];
                    if (currentQuery)
                        return currentQuery;
                    if (query instanceof unionQuery_UnionQuery) {
                        var callback = external_ko_["observable"](Object(external_DevExpress_Analytics_Internal_["extend"])(this._callBack(), { showQbCallBack: callBacks.unionCallBack }));
                    }
                    else if (query instanceof transformQuery_TransformQuery) {
                        var callback = external_ko_["observable"](Object(external_DevExpress_Analytics_Internal_["extend"])(this._callBack(), { showQbCallBack: callBacks.transformCallBack }));
                    }
                    else {
                        var callback = external_ko_["observable"](Object(external_DevExpress_Analytics_Internal_["extend"])(this._callBack(), { showQbCallBack: callBacks.joinCallBack }));
                    }
                    var queryNode = new _treeListNode_TreeQueryNode(name, name, 'query', !!currentQuery && currentQuery.checked(), external_ko_["observableArray"]([]), callback, afterCheckToggled, query);
                    queryNode.path = 'queries.' + queryNode.name;
                    this._disposables.push(queryNode);
                    return queryNode;
                });
                this._queries.initializeChildren(queries);
                result.resolve(queries);
            }
            else {
                getCurrentItems(pathRequest, true).done(value => result.resolve(value));
            }
            return result.promise();
        };
        this._callBack().showQbCallBacks = callBacks;
        this._disposables.push(this._queries = new _federatedQueriesTreeNode_FederatedQueriesTreeNode('queries', Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Federated Queries', 'DataAccessUIStringId.FederatedQueryCollectionList_Title'), 'list', false, this._callBack, afterCheckToggled));
        rootItems.valueHasMutated();
        this._rootItems.push(this._queries);
        this.dispose = () => {
            super.dispose();
            this.removeProperties();
        };
    }
    isList(dataMember, parentNode) {
        return !parentNode.isListType && super.isList(dataMember, parentNode);
    }
}
class _federationTreeNodeProvider_FederationDataMemberTreeNode extends _treeListNode_DataMemberTreeNode {
    constructor(name, displayName, specifics, isListType, isChecked, path, afterCheckToggled) {
        super(name, displayName, specifics, isChecked, path, afterCheckToggled);
        this.isListType = isListType;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/federationDataSourceWizard/federatedQueryConfigurePage.js
















class federatedQueryConfigurePage_FederatedQueryConfigurePage extends wizardPageBase_WizardPageBase {
    constructor(_options) {
        super();
        this._options = _options;
        this._selectedPath = external_ko_["observable"](null);
        this._itemsProvider = external_ko_["observable"]();
        this._customQueries = external_ko_["observableArray"]([]);
        this._setQueryChecked = (query) => {
            var rootItems = this._itemsProvider().getRootItems();
            this._selectedPath('queries.' + query.alias());
            var queries = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(rootItems, (data) => data.name === 'queries');
            var children = queries.children();
            var child = children[children.length - 1];
            child.setChecked(true);
            child['_afterCheckToggled'] && child['_afterCheckToggled'](child);
        };
        this._dataSources = external_ko_["observableArray"]();
        this._scrollViewHeight = 'calc(100% - 37px)';
        this._isDataLoadingInProcess = external_ko_["observable"](false);
        this._customizeDBSchemaTreeListActions = null;
        this._dataSources(this._options.dataSources());
        this._disposables.push(this._fieldListProvider = new external_DevExpress_Analytics_Internal_["FieldListProvider"](this._wrapFieldListCallback(this._options.callbacks.fieldListsCallback), this._dataSources, [
            new FederationDataSourceItemsExtender(this._dataSources)
        ], true));
        this._disposables.push(this._dataSource = new federationDataSource_FederationDataSource({}, this._dataSources, this._fieldListProvider, new external_DevExpress_Analytics_Utils_["ModelSerializer"]()));
        this._disposables.push(this._queriesPopupHelper = new _federatedQueriesHelper_FederatedQueriesHelper(this._dataSource, this._customQueries, { afterAddQuery: this._setQueryChecked }, this._options.rtl));
        this._fieldListModel = external_ko_["observable"](null);
        this._getItemsAfterCheck = (node) => {
            var pathParts = node.path.split('.');
            if (node.specifics == 'query') {
                var query = node['query'] || Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._customQueries(), (data) => (data.alias() || query.generateName()) === node.name);
                query.alias(node.name);
                if (node.checked.peek()) {
                    this._dataSource.queries.indexOf(query) === -1 && this._dataSource.queries.push(query);
                }
                else {
                    this._dataSource.queries.remove(query);
                }
            }
            else if (!node.isList || pathParts.length > 2) {
                var columnName = pathParts.pop();
                var queryName = pathParts.join('.');
                node.checked.peek() ? this._dataSource.addSelectQuery(queryName, columnName) : this._dataSource.removeExpression(columnName, queryName);
            }
            else {
                node.children().forEach(x => this._getItemsAfterCheck(x));
            }
            this._onChange();
            this[__loadingStateFunctionName] && this[__loadingStateFunctionName](false);
        };
    }
    _wrapFieldListCallback(itemsCallback) {
        return (pathRequest) => {
            var _dataSource = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._dataSources(), x => {
                return x.id != null && pathRequest.id != null && x.id === pathRequest.id ||
                    x.ref != null && pathRequest.id != null && x.ref === pathRequest.ref;
            });
            if (_dataSource)
                return itemsCallback(pathRequest, _dataSource);
            else
                return itemsCallback(pathRequest);
        };
    }
    canNext() {
        return this._dataSource.queries().length > 1;
    }
    canFinish() {
        return this._dataSource.queries().length > 0;
    }
    _createTreeListFactory() {
        return new _utils_MultiQueryTreeListItemFactory();
    }
    _loadPanelViewModel(element) {
        return popupWizard_PopupWizard._getLoadPanelViewModel(element, this._isDataLoadingInProcess);
    }
    commit() {
        return external_jQuery_["Deferred"]().resolve({
            federationDataSourceJSON: JSON.stringify(new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(this._dataSource)),
            federatedQueries: []
        }).promise();
    }
    initialize(state) {
        var deferred = external_jQuery_["Deferred"]();
        var rootItems = external_ko_["observableArray"](external_jQuery_["map"](this._dataSources(), (item) => {
            return {
                name: item.id || item.ref,
                displayName: item.name,
                isList: true,
                specifics: item.specifics || 'ListSource',
                isListType: item.isListType,
                dragData: { noDragable: false }
            };
        }));
        var itemsProvider = new _federationTreeNodeProvider_FederationTreeNodeProvider(this._fieldListProvider, rootItems, this._queriesPopupHelper.callBacks, this._customQueries, this._getItemsAfterCheck);
        this._disposables.push(itemsProvider);
        this._itemsProvider(itemsProvider);
        this._fieldListModel({
            factory: this._createTreeListFactory(),
            itemsProvider: this._itemsProvider(),
            selectedPath: this._selectedPath,
            treeListController: new _dbSchemaTreeListController_DBSchemaTreeListController(this._customizeDBSchemaTreeListActions),
            templateName: 'dxrd-treelist-with-checkbox'
        });
        return deferred.resolve().promise();
    }
}
function _registerFederatedQueryConfigurePage(factory, wizardOptions) {
    factory.registerMetadata(FederationDataSourceWizardPageId.FederatedQueryConfigurePage, {
        create: () => {
            return new federatedQueryConfigurePage_FederatedQueryConfigurePage(wizardOptions);
        },
        setState: (data, state) => {
            state.federationDataSourceJSON = data.federationDataSourceJSON;
            state.federatedQueries = data.federatedQueries;
        },
        getState: (state) => {
            return state.federationDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.federationDataSourceJSON = defaultState.federationDataSourceJSON;
            state.federatedQueries = defaultState.federatedQueries;
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Columns selected from specific tables and/or views will be automatically included into a separate query.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMultiQuery'),
        template: 'dxrd-wizard-add-federated-queries-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pages/federationDataSourceWizard/federatedMasterDetailRelationshipsPage.js








class federatedMasterDetailRelationshipsPage_FederatedMasterDetailRelationshipsPage extends masterDetailRelationshipsPageBase_MasterDetailRelationshipsPageBase {
    constructor(federationDataSourceResultSchema, _options) {
        super(federationDataSourceResultSchema);
        this._options = _options;
        this._customResetOptions = external_jQuery_["noop"];
        this._relationsEditor = external_ko_["observable"](null);
    }
    _restoreDataSource(state) {
        this._federationDataSource = _restoreFederationDataSourceFromState(state, this._options.dataSources);
    }
    _dataSource() {
        return this._federationDataSource;
    }
    commit() {
        this.relationsSubscription.dispose();
        var relations = this._relations().map(x => federationMasterDetailRelation_FederationMasterDetailRelation.create(x));
        this._federationDataSource.relations(relations);
        this._federationDataSource.resultSet = this._resultSet;
        var serializer = new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        return external_jQuery_["Deferred"]().resolve({
            federationDataSourceJSON: JSON.stringify(new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(this._federationDataSource)),
            relations: relations.map(x => JSON.stringify(serializer.serialize(x))),
        }).promise();
    }
}
function _registerFederatedMasterDetailRelationshipsPage(factory, federationDataSourceResultSchema, wizardOptions) {
    factory.registerMetadata(FederationDataSourceWizardPageId.FederatedMasterDetailRelationshipsPage, {
        create: () => {
            return new federatedMasterDetailRelationshipsPage_FederatedMasterDetailRelationshipsPage(federationDataSourceResultSchema, wizardOptions);
        },
        setState: (data, state) => {
            state.relations = data.relations;
        },
        getState: (state) => {
            return state.federationDataSourceWizard;
        },
        resetState: (state, defaultState) => {
            state.relations = defaultState.relations;
        },
        description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure master-detail relationships.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMasterDetailRelations'),
        template: 'dxrd-wizard-configure-relations-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/pageFactory.js
class PageFactory {
    constructor() {
        this.metadata = {};
    }
    registerMetadata(pageId, metadata) {
        if (!metadata.canFinish)
            metadata.canFinish = (page) => page.canFinish();
        if (!metadata.canNext)
            metadata.canNext = (page) => page.canNext();
        this.metadata[pageId] = metadata;
    }
    getMetadata(pageId) {
        return this.metadata[pageId];
    }
    unregisterMetadata(pageId) {
        delete this.metadata[pageId];
    }
    reset() {
        this.metadata = {};
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/wizardEventManager.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/wizardPageSectionMetadata.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/dataSourceWizard.js
















class dataSourceWizard_DataSourceWizardOptionsBase {
    constructor() {
        this.connectionStrings = {
            json: external_ko_["observableArray"]([]),
            sql: external_ko_["observableArray"]([])
        };
        this.callbacks = {};
        this.rtl = false;
        this.disableCustomSql = false;
        this.wizardSettings = new DataSourceWizardSettings().createDefault();
        this.allowCreateNewJsonConnection = false;
        this.predefinedDataSources = external_ko_["observable"]([]);
    }
    get jsonDataSourceAvailable() {
        return this.wizardSettings.enableJsonDataSource && (this.allowCreateNewJsonConnection || (external_ko_["unwrap"](this.connectionStrings.json) || []).length > 0);
    }
    get sqlDataSourceAvailable() {
        return this.wizardSettings.enableSqlDataSource && (external_ko_["unwrap"](this.connectionStrings.sql) || []).length > 0;
    }
    get objectDataSourceAvailable() {
        return this.wizardSettings.enableObjectDataSource;
    }
    get canCreateDataSource() {
        return this.jsonDataSourceAvailable || this.sqlDataSourceAvailable || this.objectDataSourceAvailable;
    }
    get federationDataSourceAvailable() {
        return this.wizardSettings.enableFederationDataSource && this.dataSources && this.dataSources() && this.dataSources().length > 0;
    }
}
class _DataSourceWizardOptions extends dataSourceWizard_DataSourceWizardOptionsBase {
}
class DataSourceWizardSettings {
    createDefault(settings) {
        var newSettings = { enableJsonDataSource: true, enableSqlDataSource: true, enableObjectDataSource: true, enableFederationDataSource: true };
        if (!settings)
            return newSettings;
        if (settings.enableJsonDataSource !== undefined)
            newSettings.enableJsonDataSource = settings.enableJsonDataSource;
        if (settings.enableSqlDataSource !== undefined)
            newSettings.enableSqlDataSource = settings.enableSqlDataSource;
        if (settings.enableObjectDataSource != undefined)
            newSettings.enableObjectDataSource = settings.enableObjectDataSource;
        if (settings.enableFederationDataSource != undefined)
            newSettings.enableFederationDataSource = settings.enableFederationDataSource;
        return newSettings;
    }
}
class dataSourceWizard_DataSourceWizardPageIterator extends pageIterator_PageIterator {
    constructor(pageFactory, stateManager, _dataSourceWizardOptions) {
        super(pageFactory, stateManager);
        this._dataSourceWizardOptions = _dataSourceWizardOptions;
    }
    getNextPageId(pageId) {
        if (!pageId && _isMoreThanOneDataSourceTypeAvailable(this._dataSourceWizardOptions)) {
            return DataSourceWizardPageId.ChooseDataSourceTypePage;
        }
        else if (!pageId) {
            return this.getNextPageId(DataSourceWizardPageId.ChooseDataSourceTypePage);
        }
        else if (pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Sql) {
            return SqlDataSourceWizardPageId.ChooseConnectionPage;
        }
        else if (pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Federation) {
            return FederationDataSourceWizardPageId.FederatedQueryConfigurePage;
        }
        else if (pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Json && this._dataSourceWizardOptions.connectionStrings.json().length > 0) {
            return JsonDataSourceWizardPageId.ChooseConnectionPage;
        }
        else if (this._dataSourceWizardOptions.allowCreateNewJsonConnection && pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Json) {
            return JsonDataSourceWizardPageId.ChooseJsonSourcePage;
        }
        else if (pageId === JsonDataSourceWizardPageId.ChooseConnectionPage && this._getCurrentState().jsonDataSourceWizard.connectionName) {
            return JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
        }
        else if (this._dataSourceWizardOptions.allowCreateNewJsonConnection && pageId === JsonDataSourceWizardPageId.ChooseConnectionPage && !this._getCurrentState().jsonDataSourceWizard.connectionName) {
            return JsonDataSourceWizardPageId.ChooseJsonSourcePage;
        }
        else if (pageId === JsonDataSourceWizardPageId.ChooseJsonSourcePage) {
            return JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
        }
        else if (pageId === SqlDataSourceWizardPageId.ChooseConnectionPage && this._getCurrentState().sqlDataSourceWizard.name) {
            return SqlDataSourceWizardPageId.ConfigureQueryPage;
        }
        else if (pageId === SqlDataSourceWizardPageId.ConfigureQueryPage && this._getCurrentState().sqlDataSourceWizard.sqlDataSourceJSON) {
            return SqlDataSourceWizardPageId.ConfigureParametersPage;
        }
    }
}
class dataSourceWizard_DataSourceWizard extends popupWizard_PopupWizard {
    constructor(pageFactory, _wizardOptions) {
        super(pageFactory, _wizardOptions.callbacks.finishCallback);
        this._wizardOptions = _wizardOptions;
        this._extendCssClass = 'dxrd-sqldatasource-wizard';
        this.title = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Data Source Wizard', 'AnalyticsCoreStringId.DSWizard_Title');
    }
    initialize(state, createIterator = (pageFactory, stateManager) => new dataSourceWizard_DataSourceWizardPageIterator(pageFactory, stateManager, this._wizardOptions)) {
        if (this._wizardOptions.sqlDataSourceAvailable || !Object(external_DevExpress_Analytics_Internal_["isEmptyObject"])(state.sqlDataSourceWizard)) {
            state.dataSourceType = DataSourceType.Sql;
        }
        else if (this._wizardOptions.jsonDataSourceAvailable || state.jsonDataSourceWizard.jsonSource) {
            state.dataSourceType = DataSourceType.Json;
        }
        super.initialize(state, createIterator);
    }
    canRunWizard() {
        return this._wizardOptions.jsonDataSourceAvailable || this._wizardOptions.sqlDataSourceAvailable;
    }
}
function _registerDataSourceWizardPages(factory = new PageFactory(), dataSourceWizardOptions) {
    _registerChooseDataSourceTypePage(factory, dataSourceWizardOptions);
    _registerChooseJsonSourcePage(factory, dataSourceWizardOptions.requestWrapper, dataSourceWizardOptions.callbacks.getItemsProviderCallback);
    _registerChooseJsonConnectionPage(factory, dataSourceWizardOptions);
    _registerChooseJsonSchemaPage(factory, dataSourceWizardOptions.requestWrapper, dataSourceWizardOptions.callbacks);
    _registerConfigureObjectDataSourceParametersPage(factory, dataSourceWizardOptions.callbacks.getItemsProviderCallback);
    _registerConfigureQueryPage(factory, dataSourceWizardOptions);
    _registerChooseSqlConnectionPage(factory, dataSourceWizardOptions.connectionStrings.sql);
    _registerConfigureParametersPage(factory, dataSourceWizardOptions.requestWrapper);
    return factory;
}
function _createDataSourceWizard(factory = new PageFactory(), dataSourceWizardOptions) {
    factory = _registerDataSourceWizardPages(factory, dataSourceWizardOptions);
    return new dataSourceWizard_DataSourceWizard(factory, dataSourceWizardOptions);
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/pages/specifyObjectDataSourceSettingsPage.js












class specifyObjectDataSourceSettingsPage_SpecifyObjectDataSourceSettingsPage extends wizardPageBase_WizardPageBase {
    constructor(_dataSourceWizardOptions) {
        super();
        this._dataSourceWizardOptions = _dataSourceWizardOptions;
        this._types = external_ko_["observableArray"]([]);
        this._objectDataSource = new objectDataSource_ObjectDataSource();
        var getItemsProviderCallback = this._dataSourceWizardOptions.callbacks.getItemsProviderCallback;
        this._disposables.push(this._provider = new _objectSchemaProvider_ObjectSchemaProvider(this._dataSourceWizardOptions.requestWrapper), this._chooseObjectType = new _chooseObjectTypes_ChooseObjectTypes(this._types, this._provider), this._chooseObjectDataMember = new _chooseObjectDataMembers_ChooseObjectDataMembers(this._chooseObjectType.selectedType, this._chooseObjectType.selectedCtor), this._chooseObjectParameters = new ChooseObjectParameters(this._chooseObjectType.selectedCtor, this._chooseObjectDataMember.selectedDataMembers, getItemsProviderCallback && getItemsProviderCallback()));
        this._initSections();
    }
    _initSections() {
        this._sections = [
            {
                data: this._chooseObjectType,
                disabled: () => false,
                description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose the type and its constructor.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseType_Description'),
                position: getSectionStyle(this._dataSourceWizardOptions.rtl ? WizardSectionPosition.Right : WizardSectionPosition.Left),
                template: 'dx-objectdatasource-types-section'
            },
            {
                data: this._chooseObjectDataMember,
                disabled: () => !this._chooseObjectDataMember.dataMembers().length,
                description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose the entire object or a data member to bind.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseDataMember_Description'),
                position: getSectionStyle(this._dataSourceWizardOptions.rtl ? WizardSectionPosition.TopLeft : WizardSectionPosition.TopRight),
                disabledText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('To select a data member, choose a type that contains at least one data member.', 'AnalyticsCoreStringId.ObjectDSWizard_ChooseDataMember_Disabled_Description'),
                template: 'dx-objectdatasource-datamembers-section'
            },
            {
                data: this._chooseObjectParameters,
                disabled: () => !this._chooseObjectParameters.hasParameters(),
                position: getSectionStyle(this._dataSourceWizardOptions.rtl ? WizardSectionPosition.BottomLeft : WizardSectionPosition.BottomRight),
                description: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure constructor parameters and/or method parameters.', 'AnalyticsCoreStringId.ObjectDSWizard_ConfigureParameters_Description'),
                disabledText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('To specify parameters, select a parameterized constructor or method.', 'AnalyticsCoreStringId.ObjectDSWizard_ConfigureParameters_Disabled_Description'),
                template: 'dx-objectdatasource-parameters-section'
            }
        ];
    }
    showDescription(index, text) {
        return [index + 1, text].join('. ');
    }
    canNext() {
        return false;
    }
    canFinish() {
        return !!this._chooseObjectDataMember.selectedDataMembers().length;
    }
    commit() {
        var selectedDataMember = this._chooseObjectDataMember.selectedDataMembers()[0];
        return external_jQuery_["Deferred"]().resolve({
            selectedType: this._chooseObjectType.selectedType().name,
            ctor: this._chooseObjectType.selectedCtor(),
            dataSourceName: this._objectDataSource.name(),
            context: this._context,
            dataMember: !selectedDataMember || selectedDataMember.isEntireObject() ? undefined : selectedDataMember,
        }).promise();
    }
    initialize(state) {
        this._context = state.objectDataSourceWizard.context;
        this._objectDataSource.setState(state.objectDataSourceWizard);
        this._chooseObjectType.selectedCtor(this._objectDataSource.ctor);
        this._chooseObjectDataMember.selectedDataMembers([this._objectDataSource.dataMember]);
        this._provider.getObjectTypeDescriptions(state.objectDataSourceWizard.context).done((schema) => {
            schema.types.forEach(type => type.members.splice(0, 0, objectSchema_ObjectDataMember.empty()));
            this._types(schema.types || []);
            if (schema.types.length > 0) {
                this._chooseObjectType.selectedPath(schema.types[0].name);
            }
        });
        return external_jQuery_["Deferred"]().resolve().promise();
    }
}
function _registerSpecifyObjectDataSourceSettingsPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(FullscreenDataSourceWizardPageId.SpecifyObjectDataSourceSettingsPage, {
        setState: (data, state) => {
            state.objectDataSourceWizard.ctor = data.ctor;
            state.objectDataSourceWizard.dataMember = data.dataMember;
            state.objectDataSourceWizard.selectedType = data.selectedType;
            state.objectDataSourceWizard.dataSourceName = data.dataSourceName;
        },
        getState: (state) => {
            return state;
        },
        resetState: (state, defaultState) => {
            state.objectDataSourceWizard.ctor = defaultState.objectDataSourceWizard.ctor;
            state.objectDataSourceWizard.dataMember = defaultState.objectDataSourceWizard.dataMember;
            state.objectDataSourceWizard.selectedType = defaultState.objectDataSourceWizard.selectedType;
            state.objectDataSourceWizard.dataSourceName = defaultState.objectDataSourceWizard.dataSourceName;
        },
        create: () => {
            return new specifyObjectDataSourceSettingsPage_SpecifyObjectDataSourceSettingsPage(dataSourceWizardOptions);
        },
        template: 'dxrd-page-objectsource',
        navigationPanelText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Specify Data Source Settings', 'AnalyticsCoreStringId.Wizard_SpecifyDataSourceSettingsPage')
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/multiQueryDataSourceWizard.js

























class multiQueryDataSourceWizard_MultiQueryDataSourceWizardOptions extends dataSourceWizard_DataSourceWizardOptionsBase {
}
class multiQueryDataSourceWizard_MultiQueryDataSourceWizard extends popupWizard_PopupWizard {
    constructor(pageFactory, _wizardOptions) {
        super(pageFactory, _wizardOptions.callbacks.finishCallback);
        this._wizardOptions = _wizardOptions;
        this.title = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Data Source Wizard', 'AnalyticsCoreStringId.SqlDSWizard_Title');
        this._extendCssClass = 'dxrd-multiqueries-sqldatasource-wizard';
        this.height(443);
    }
    canRunWizard() {
        return this._wizardOptions.jsonDataSourceAvailable || this._wizardOptions.sqlDataSourceAvailable || this._wizardOptions.objectDataSourceAvailable;
    }
    initialize(state, createIterator = (pageFactory, stateManager) => new multiQueryDataSourceWizard_MultiQueryDataSourceWizardPageIterator(pageFactory, stateManager, this._wizardOptions)) {
        if (this._wizardOptions.sqlDataSourceAvailable || !Object(external_DevExpress_Analytics_Internal_["isEmptyObject"])(state.sqlDataSourceWizard)) {
            state.dataSourceType = DataSourceType.Sql;
        }
        else if (this._wizardOptions.jsonDataSourceAvailable || state.jsonDataSourceWizard.jsonSource) {
            state.dataSourceType = DataSourceType.Json;
        }
        else if (this._wizardOptions.objectDataSourceAvailable) {
            state.dataSourceType = DataSourceType.Object;
        }
        super.initialize(state, createIterator);
    }
}
class multiQueryDataSourceWizard_MultiQueryDataSourceWizardPageIterator extends pageIterator_PageIterator {
    constructor(pagesFactory, stateManager, _wizardOptions) {
        super(pagesFactory, stateManager);
        this._wizardOptions = _wizardOptions;
    }
    getNextPageId(pageId) {
        if (!pageId && this._wizardOptions.predefinedDataSources().length > 0) {
            return DataSourceWizardPageId.ChoosePredefinedDataSourcePage;
        }
        else if ((!pageId || pageId === DataSourceWizardPageId.ChoosePredefinedDataSourcePage) && _isMoreThanOneDataSourceTypeAvailable(this._wizardOptions)) {
            return DataSourceWizardPageId.ChooseDataSourceTypePage;
        }
        else if (!pageId || pageId === DataSourceWizardPageId.ChoosePredefinedDataSourcePage) {
            return this.getNextPageId(DataSourceWizardPageId.ChooseDataSourceTypePage);
        }
        else if (pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Sql) {
            return SqlDataSourceWizardPageId.ChooseConnectionPage;
        }
        else if (pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Federation) {
            return FederationDataSourceWizardPageId.FederatedQueryConfigurePage;
        }
        else if (pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Object) {
            return ObjectDataSourceWizardPageId.ChooseTypesPage;
        }
        else if (pageId === ObjectDataSourceWizardPageId.ChooseTypesPage && this._getCurrentState().objectDataSourceWizard.selectedType) {
            return ObjectDataSourceWizardPageId.ChooseDataMembersPage;
        }
        else if (pageId === ObjectDataSourceWizardPageId.ChooseDataMembersPage) {
            return ObjectDataSourceWizardPageId.ConfigureParametersPage;
        }
        else if (pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Json && this._wizardOptions.connectionStrings.json().length > 0) {
            return JsonDataSourceWizardPageId.ChooseConnectionPage;
        }
        else if (this._wizardOptions.allowCreateNewJsonConnection && pageId === DataSourceWizardPageId.ChooseDataSourceTypePage && this._getCurrentState().dataSourceType === DataSourceType.Json) {
            return JsonDataSourceWizardPageId.ChooseJsonSourcePage;
        }
        else if (pageId === JsonDataSourceWizardPageId.ChooseConnectionPage && this._getCurrentState().jsonDataSourceWizard.connectionName) {
            return JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
        }
        else if (this._wizardOptions.allowCreateNewJsonConnection && pageId === JsonDataSourceWizardPageId.ChooseConnectionPage && !this._getCurrentState().jsonDataSourceWizard.connectionName) {
            return JsonDataSourceWizardPageId.ChooseJsonSourcePage;
        }
        else if (pageId === JsonDataSourceWizardPageId.ChooseJsonSourcePage) {
            return JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
        }
        else if (pageId === SqlDataSourceWizardPageId.ChooseConnectionPage && this._getCurrentState().sqlDataSourceWizard.name) {
            return SqlDataSourceWizardPageId.MultiQueryConfigurePage;
        }
        else if (this._getCurrentState().sqlDataSourceWizard.sqlDataSourceJSON && pageId === SqlDataSourceWizardPageId.MultiQueryConfigurePage && this._getCurrentState().sqlDataSourceWizard.customQueries.length > 0) {
            return SqlDataSourceWizardPageId.MultiQueryConfigureParametersPage;
        }
        else if (pageId === SqlDataSourceWizardPageId.MultiQueryConfigurePage || pageId === SqlDataSourceWizardPageId.MultiQueryConfigureParametersPage) {
            var sqlDataSourceWrapped = _restoreSqlDataSourceFromState(this._getCurrentState().sqlDataSourceWizard);
            if (sqlDataSourceWrapped.sqlDataSource.queries().length > 1) {
                return DataSourceWizardPageId.ConfigureMasterDetailRelationshipsPage;
            }
        }
        else if (pageId === FederationDataSourceWizardPageId.FederatedQueryConfigurePage) {
            var federationDataSource = _restoreFederationDataSourceFromState(this._getCurrentState().federationDataSourceWizard, this._wizardOptions.dataSources);
            if (federationDataSource.queries().length > 1) {
                return FederationDataSourceWizardPageId.FederatedMasterDetailRelationshipsPage;
            }
        }
    }
}
function _registerMultiQueryDataSourcePages(factory = new PageFactory(), dataSourceWizardOptions) {
    _registerChooseAvailableDataSourcePage(factory, dataSourceWizardOptions);
    _registerChooseDataSourceTypePage(factory, dataSourceWizardOptions);
    _registerChooseJsonConnectionPage(factory, dataSourceWizardOptions);
    _registerChooseJsonSourcePage(factory, dataSourceWizardOptions.requestWrapper, dataSourceWizardOptions.callbacks.getItemsProviderCallback);
    _registerChooseJsonSchemaPage(factory, dataSourceWizardOptions.requestWrapper, dataSourceWizardOptions.callbacks);
    _registerChooseSqlConnectionPage(factory, dataSourceWizardOptions.connectionStrings.sql, dataSourceWizardOptions.getSqlConnectionStrings);
    _registerSpecifyObjectDataSourceSettingsPage(factory, dataSourceWizardOptions);
    _registerFederatedQueryConfigurePage(factory, dataSourceWizardOptions);
    _registerFederatedMasterDetailRelationshipsPage(factory, wrapGetFederationdResultSchema(dataSourceWizardOptions.callbacks.federationDataSourceResultSchema), dataSourceWizardOptions);
    _registerMultiQueryConfigurePage(factory, dataSourceWizardOptions);
    _registerMultiQueryConfigureParametersPage(factory, dataSourceWizardOptions.requestWrapper);
    _registerConfigureMasterDetailRelationshipsPage(factory, wrapRebuildResultSchema(dataSourceWizardOptions.callbacks.sqlDataSourceResultSchema));
    _registerChooseObjectDataSourceTypesPage(factory, dataSourceWizardOptions);
    _registerChooseObjectDataSourceDataMembersPage(factory, dataSourceWizardOptions);
    _registerConfigureObjectDataSourceParametersPage(factory, dataSourceWizardOptions.callbacks.getItemsProviderCallback);
    return factory;
}
function _createMultiQueryDataSourceWizard(factory = new PageFactory(), dataSourceWizardOptions) {
    _registerMultiQueryDataSourcePages(factory, dataSourceWizardOptions);
    return new multiQueryDataSourceWizard_MultiQueryDataSourceWizard(factory, dataSourceWizardOptions);
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/fullscreenWizardPageFactory.js

class fullscreenWizardPageFactory_FullscreenWizardPageFactory extends PageFactory {
    constructor() {
        super(...arguments);
        this.metadata = {};
    }
    registerMetadata(pageId, metadata) {
        super.registerMetadata(pageId, metadata);
    }
    getMetadata(key) {
        return super.getMetadata(key);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_wizardPageSectionFactory.js

class _wizardPageSectionFactory_WizardPageSectionFactory extends PageFactory {
    registerMetadata(pageId, metadata) {
        super.registerMetadata(pageId, metadata);
        if (metadata.position === undefined)
            metadata.position = Object.keys(this.metadata).length - 1;
        if (metadata.recreate === undefined)
            metadata.recreate = false;
        if (metadata.disabledText === undefined)
            metadata.disabledText = '';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_wrappedWizardPageSection.js

class _wrappedWizardPageSection_WrappedWizardPageSection extends _wrappedWizardPage_WrappedWizardPage {
    constructor(pageId, page, metadata) {
        super(pageId, page, metadata.template, metadata.description);
        this.pageId = pageId;
        this.page = page;
        if (page.onChange) {
            this.onChange = (callback) => {
                page.onChange(() => {
                    callback();
                    metadata.onChange && metadata.onChange();
                });
            };
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_wizardPageSectionIterator.js



class _wizardPageSectionIterator_WizardPageSection {
    constructor(pageId, metadata) {
        this.pageId = pageId;
        this.metadata = metadata;
        this.page = external_ko_["observable"](null);
    }
    resetPage() {
        this.page() && this.page().dispose();
        this.page(null);
    }
    setPage(page) {
        if (this.page() !== page)
            this.page(page);
    }
}
class _wizardPageSectionIterator_WizardPageSectionIterator {
    constructor(pageFactory, stateManager, _resetPageCallback) {
        this.pageFactory = pageFactory;
        this.stateManager = stateManager;
        this._resetPageCallback = _resetPageCallback;
        this._pagesIds = [];
        this._pages = [];
    }
    _resetPages(fromIndex, resetPage = (pageId) => this._resetPage(pageId)) {
        if (fromIndex < this._pagesIds.length) {
            for (var index = this._pagesIds.length - 1; index >= fromIndex; index--) {
                this._pagesIds[index].forEach((pageId) => resetPage(pageId));
                this._pagesIds.splice(index, 1);
            }
        }
    }
    _tryResetPageByMetadata(pageId) {
        if (this.pageFactory.getMetadata(pageId)['recreate']) {
            this._resetPage(pageId);
            return true;
        }
        return false;
    }
    _resetPage(pageId) {
        this.stateManager.resetPageState(pageId);
        this._resetPageCallback(pageId);
        var page = this._getPage(pageId);
        if (page) {
            page.dispose();
            this._pages.splice(this._pages.indexOf(page), 1);
        }
    }
    _createNewPage(nextPageId) {
        var pageMetadata = this.pageFactory.getMetadata(nextPageId);
        return new _wrappedWizardPageSection_WrappedWizardPageSection(nextPageId, pageMetadata.create(), pageMetadata);
    }
    _getPage(pageId) {
        return this._pages.filter(x => x.pageId === pageId)[0];
    }
    _getNextPage(nextPageIds) {
        return external_jQuery_["Deferred"]().resolve(nextPageIds.map((nextPageId) => {
            var page = this._getPage(nextPageId);
            if (!page || this._tryResetPageByMetadata(nextPageId)) {
                page = this._createNewPage(nextPageId);
                this._pages.push(page);
            }
            return page;
        })).promise();
    }
    _getPageIndex(pageId) {
        return this._pagesIds.indexOf(this._pagesIds.filter(x => x.some(y => y === pageId))[0]);
    }
    resetNextPages(pageId) {
        this._resetPages(this._getPageIndex(pageId) + 1);
    }
    getStartPage() {
        var startPageId = this.getNextPageId();
        var pageMetadata = this.pageFactory.getMetadata(startPageId);
        var page = new _wrappedWizardPageSection_WrappedWizardPageSection(startPageId, pageMetadata.create(), pageMetadata);
        this._pagesIds.push([startPageId]);
        return page;
    }
    getNextPage(currentPageId) {
        var index = this._getPageIndex(currentPageId);
        var nextPageIds = this.getNextPageId(currentPageId);
        if (!nextPageIds) {
            this.resetNextPages(currentPageId);
            return external_jQuery_["Deferred"]().reject().promise();
        }
        if (!nextPageIds['push']) {
            nextPageIds = [nextPageIds];
        }
        if (JSON.stringify(this._pagesIds[index + 1]) !== JSON.stringify(nextPageIds)) {
            this._resetPages(index + 1, (pageId) => {
                if (nextPageIds.indexOf(pageId) === -1) {
                    this._resetPage(pageId);
                }
            });
            this._pagesIds.push(nextPageIds);
        }
        return this._getNextPage(nextPageIds);
    }
    getCurrentState() {
        return this.stateManager.getCurrentState();
    }
    getNextPageId(pageId) {
        return '';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_wizardPageProcessor.js








class _wizardPageProcessor_WizardPageProcessor extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(pageFactory, _loadingState, _nextAction) {
        super();
        this.pageFactory = pageFactory;
        this.events = new external_DevExpress_Analytics_Utils_["EventManager"]();
        this._loadingTimeout = null;
        this._changeTimeout = null;
        this.sections = [];
        this.isLoading = external_ko_["observable"](false);
        if (_loadingState)
            this._loadingState = _loadingState;
        if (_nextAction)
            this._extendedNextAction = _nextAction;
        this._disposables.push(this.events);
    }
    dispose() {
        super.dispose();
        this.sections.forEach(x => x.resetPage());
        this.sections = [];
    }
    _createLoadingState(page) {
        if (!page[_wizardPageProcessor_WizardPageProcessor.__loadingStateFunctionName]) {
            page[_wizardPageProcessor_WizardPageProcessor.__loadingStateFunctionName] = (newVal) => this._loadingState(newVal);
        }
    }
    _createNextAction(page) {
        if (!page[__nextActionFunctionName])
            page[__nextActionFunctionName] = () => this._extendedNextAction();
    }
    _loadingState(active) {
        if (active) {
            this._loadingTimeout && clearTimeout(this._loadingTimeout);
            this._loadingTimeout = setTimeout(() => {
                this.isLoading(true);
            }, 100);
        }
        else {
            this._loadingTimeout && clearTimeout(this._loadingTimeout);
            this.isLoading(false);
        }
    }
    _extendedNextAction() { }
    _resetPageById(pageId) {
        var page = this.getPageById(pageId);
        page.resetPage();
    }
    initialize(state, createIterator = (pageFactory, stateManager) => new _wizardPageSectionIterator_WizardPageSectionIterator(pageFactory, stateManager, (pageId) => this._resetPageById(pageId))) {
        this.events.call('beforeInitialize', { wizard: this, state });
        this.stateManager = new stateManager_StateManager(state, this.pageFactory);
        this.iterator = createIterator(this.pageFactory, this.stateManager);
        this.sections = [];
        Object.keys(this.pageFactory.metadata).forEach((key) => {
            this.sections.push(new _wizardPageSectionIterator_WizardPageSection(key, this.pageFactory.metadata[key]));
        });
        this.sections = this.sections.sort((a, b) => a.metadata.position - b.metadata.position);
        this.events.call('afterInitialize', { wizard: this });
    }
    _canNext(currentPage) {
        var pageMetadata = !this.isLoading() && currentPage && currentPage.page && this.pageFactory.getMetadata(currentPage.pageId);
        return pageMetadata && pageMetadata.canNext(currentPage.page);
    }
    _canFinish(currentPage) {
        return !this.isLoading() && currentPage && this.pageFactory.getMetadata(currentPage.pageId).canFinish(currentPage.page);
    }
    _initPage(page, force = false, stateChanged = false) {
        this._createNextAction(page.page);
        if (page.onChange) {
            page.onChange(() => {
                this._changeTimeout && clearTimeout(this._changeTimeout);
                this._changeTimeout = setTimeout(() => {
                    this._nextAction(page);
                }, 100);
            });
        }
        else
            throw Error('Page with id ' + page.pageId + ' cannot be used in AutoNavigation, because it does not have method OnChange');
        return page.initialize(this.stateManager.getPageState(page.pageId), force, stateChanged).always(() => this._loadingState(false));
    }
    getPageById(pageId) {
        return this.sections.filter(x => x.pageId === pageId)[0];
    }
    start() {
        this.events.call('beforeStart', { wizard: this });
        this._loadingState(true);
        var page = this.iterator.getStartPage();
        this.events.call('beforePageInitialize', _createBeforeInitializePageEventArgs(page, this));
        this._initPage(page).done(() => {
            var pageSection = this.getPageById(page.pageId);
            if (pageSection) {
                pageSection.setPage(page);
                this.events.call('afterPageInitialize', _createPageEventArgs(page, this));
                this._nextAction(page);
            }
            else {
                throw Error('Page Section with id ' + page.pageId + ' is not found.');
            }
        });
    }
    finishAction() {
        var deferred = external_jQuery_["Deferred"]();
        var resolved = false;
        for (var i = this.sections.length - 1; i >= 0; i--) {
            if (this.sections[i].page()) {
                this.sections[i].page().commit().done((result) => {
                    if (this.sections[i].page().isChanged) {
                        this.events.call('beforeFinish', { wizardModel: this, state: this.stateManager.getCurrentState() });
                        this.stateManager.setPageState(this.sections[i].page().pageId, result);
                        this.events.call('afterFinish', { wizardResult: this, state: this.stateManager.getCurrentState() });
                    }
                }).always(() => deferred.resolve());
                resolved = true;
                break;
            }
        }
        if (!resolved)
            deferred.resolve();
        return deferred.promise();
    }
    _nextAction(currentPage, parentIsChanged = false) {
        if (!this._canNext(currentPage) && !this._canFinish(currentPage)) {
            currentPage.resetCommitedState();
            return this.iterator.resetNextPages(currentPage.pageId);
        }
        this._loadingState(true);
        currentPage.commit().done((result) => {
            if (currentPage.isChanged || parentIsChanged || currentPage.page && currentPage.page.changeAlways) {
                this.stateManager.setPageState(currentPage.pageId, result);
                this.iterator.getNextPage(currentPage.pageId).done(pages => {
                    if (pages && pages.length > 0) {
                        pages.forEach((page) => {
                            var containedPage = this.getPageById(page.pageId);
                            var page = containedPage && containedPage.page() || page;
                            this.events.call('beforePageInitialize', _createBeforeInitializePageEventArgs(page, this));
                            this._initPage(page, !!containedPage.page(), currentPage.isChanged || parentIsChanged).done(() => {
                                this.getPageById(page.pageId).setPage(page);
                                this.events.call('afterPageInitialize', _createPageEventArgs(page, this));
                                this._nextAction(page, currentPage.isChanged);
                            });
                        });
                    }
                    else
                        this._loadingState(false);
                    currentPage.isChanged = false;
                }).fail(() => this._loadingState(false));
            }
            else
                this._loadingState(false);
        }).fail(() => this._loadingState(false));
    }
}
_wizardPageProcessor_WizardPageProcessor.__loadingStateFunctionName = '__loadingState';

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/pages/fullscreenWizardPage.js









class fullscreenWizardPage_FullscreenWizardPage extends wizardPageBase_WizardPageBase {
    constructor() {
        super();
        this._sectionsToUnregister = [];
        this._sectionsToRegister = [];
        this._sectionPositions = [];
        this._initInProgress = external_ko_["observable"](false);
        this._defaultMargin = 24;
        this._parentMarginOffset = this._defaultMargin + this._defaultMargin / 2;
        this._className = '';
        this._pageCss = {};
        this.events = new external_DevExpress_Analytics_Utils_["EventManager"]();
        this._factory = new _wizardPageSectionFactory_WizardPageSectionFactory();
        this._sectionsProcessor = new _wizardPageProcessor_WizardPageProcessor(this._factory, (state) => {
            this[__loadingStateFunctionName] && this[__loadingStateFunctionName](state);
        }, () => this[__nextActionFunctionName] && this[__nextActionFunctionName]());
        this._sectionsProcessor.events.addHandler('beforeStart', () => {
            this._sections = this._sectionsProcessor.sections;
            this._beforeStart();
            this._patchOnChange();
        });
        this._sectionsProcessor.events.addHandler('beforePageInitialize', (args) => {
            this.events.call('beforeSectionInitialize', {
                section: args.page,
                sectionId: args.pageId,
                page: this,
                state: args.state
            });
        });
        this._sectionsProcessor.events.addHandler('afterPageInitialize', (args) => {
            this.events.call('afterSectionInitialize', {
                section: args.page,
                sectionId: args.pageId,
                page: this
            });
        });
    }
    dispose() {
        this._sectionsProcessor.dispose();
        this._factory.reset();
        this._sections = [];
    }
    _patchOnChange() {
        Object.keys(this._factory.metadata).forEach(key => {
            this._factory.metadata[key].onChange = () => this._onChange();
        });
    }
    _getPageStyle(position, isVisible = true) {
        return getSectionStyle(position, this._defaultMargin, isVisible);
    }
    _applyCustomizations() {
        this._sectionsToUnregister.forEach(x => x());
        this._sectionsToUnregister = [];
        this._sectionPositions.forEach(x => x());
        this._sectionPositions = [];
        this._sectionsToRegister.forEach(x => x());
        this._sectionsToRegister = [];
    }
    _setSectionPosition(pageId, position) {
        this._pageCss[pageId] = external_ko_["observable"](this._getPageStyle(position));
    }
    registerSections() { }
    canNext() {
        return this._sectionsProcessor.sections.every(this._sectionCondition);
    }
    _sectionCondition(section) {
        if (section.metadata.required)
            return section.page() && section.metadata.canNext(section.page().page);
        else {
            return !section.page() || section.metadata.canNext(section.page().page);
        }
    }
    canFinish() {
        for (var i = this._sections.length - 1; i >= 0; i--) {
            if (this._sections[i].page() && this._sections[i].metadata.canFinish(this._sections[i].page().page))
                return true;
        }
        return false;
    }
    setSectionPosition(sectionId, position) {
        this._sectionPositions.push(() => {
            this._setSectionPosition(sectionId, position);
        });
    }
    registerSection(sectionId, metadata) {
        this._sectionsToRegister.push(() => {
            this._factory.registerMetadata(sectionId, metadata);
        });
    }
    unregisterSection(sectionId) {
        this._sectionsToUnregister.push(() => this._factory.unregisterMetadata(sectionId));
    }
    _loadPanelViewModel(element) {
        return false;
    }
    getNextSectionId(sectionId) { return undefined; }
    initialize(state, stateChanged) {
        this.registerSections();
        this._applyCustomizations();
        this._sectionsProcessor.initialize(Object(external_DevExpress_Analytics_Internal_["extend"])(true, {}, state));
        this._stateManager = this._sectionsProcessor.stateManager;
        this._sectionsProcessor.iterator.getNextPageId = (pageId) => this.getNextSectionId(pageId);
        this._sectionsProcessor.start();
        return external_jQuery_["Deferred"]().resolve().promise();
    }
    _beforeStart() { }
    commit() {
        var deferred = external_jQuery_["Deferred"]();
        this._sectionsProcessor.finishAction().done(() => {
            deferred.resolve(Object(external_DevExpress_Analytics_Internal_["extend"])(true, {}, this._stateManager.getCurrentState()));
        });
        return deferred.promise();
    }
    _getPageDescription(index, page) {
        return (index + 1) + '. ' + page.metadata.description;
    }
    _showPageDescription() {
        return this._sections.length > 1;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/pages/selectDataSourcePage.js






class selectDataSourcePage_SelectDataSourcePage extends fullscreenWizardPage_FullscreenWizardPage {
    constructor(wizardOptions, dataSources) {
        super();
        this.wizardOptions = wizardOptions;
        this.dataSources = dataSources;
        this.disabledSectionText = Object(external_DevExpress_Analytics_Internal_["getLocalization"])("To specify a data source, select \"No, I'd like to create a new data source\".", 'AnalyticsCoreStringId.Wizard_SelectDataSourceType_Placeholder');
    }
    registerSections() {
        if (this.showPredefinedDataSourceSection()) {
            _registerChooseAvailableDataSourcePage(this._factory, this.wizardOptions);
            this._setSectionPosition(DataSourceWizardPageId.ChoosePredefinedDataSourcePage);
        }
        if (this.showChooseDataSourceTypeSection()) {
            _registerChooseDataSourceTypePage(this._factory, this.wizardOptions);
            this._setSectionPosition(DataSourceWizardPageId.ChooseDataSourceTypePage);
            var meta = this._factory.getMetadata(DataSourceWizardPageId.ChooseDataSourceTypePage);
            meta['disabledText'] = this.disabledSectionText;
        }
        if (this.showPredefinedDataSourceSection() && this.showChooseDataSourceTypeSection()) {
            this._setSectionPosition(DataSourceWizardPageId.ChoosePredefinedDataSourcePage, WizardSectionPosition.Top);
            this._setSectionPosition(DataSourceWizardPageId.ChooseDataSourceTypePage, WizardSectionPosition.Bottom);
        }
    }
    showPredefinedDataSourceSection() {
        return this.dataSources.length > 0;
    }
    showChooseDataSourceTypeSection() {
        return this.wizardOptions.canCreateDataSource && _isMoreThanOneDataSourceTypeAvailable(this.wizardOptions);
    }
    getNextSectionId(sectionId) {
        if (!sectionId && this.showPredefinedDataSourceSection())
            return DataSourceWizardPageId.ChoosePredefinedDataSourcePage;
        else if (!sectionId && this.showChooseDataSourceTypeSection())
            return DataSourceWizardPageId.ChooseDataSourceTypePage;
        else if (sectionId === DataSourceWizardPageId.ChoosePredefinedDataSourcePage && !this._stateManager.getCurrentState().predeifnedDataSourceName && this.showChooseDataSourceTypeSection())
            return DataSourceWizardPageId.ChooseDataSourceTypePage;
    }
}
function _registerSelectDataSourcePage(factory, wizardOptions) {
    factory.registerMetadata(FullscreenDataSourceWizardPageId.SelectDataSourcePage, {
        setState: (data, state) => {
            state.dataSourceType = data.dataSourceType;
            state.predeifnedDataSourceName = data.predeifnedDataSourceName;
        },
        getState: (state) => {
            return state;
        },
        resetState: (state, defaultState) => {
            state.dataSource = defaultState.dataSource;
            state.predeifnedDataSourceName = null;
        },
        create: () => {
            return new selectDataSourcePage_SelectDataSourcePage(wizardOptions, wizardOptions.predefinedDataSources());
        },
        navigationPanelText: Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Select Data Source', 'ASPxReportsStringId.ReportDesigner_Wizard_SelectDataSource'),
        template: 'dx-wizard-fullscreen-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/pages/specifyJsonDataSourceSettingsPage.js







class specifyJsonDataSourceSettingsPage_SpecifyJsonDataSourceSettingsPage extends fullscreenWizardPage_FullscreenWizardPage {
    constructor(_dataSourceWizardOptions) {
        super();
        this._dataSourceWizardOptions = _dataSourceWizardOptions;
    }
    registerSections() {
        if (this._dataSourceWizardOptions.connectionStrings.json().length > 0) {
            _registerSpecifyJsonConnectionPage(this._factory, this._dataSourceWizardOptions.connectionStrings.json, this._dataSourceWizardOptions.allowCreateNewJsonConnection, this._dataSourceWizardOptions.callbacks.getItemsProviderCallback, this._dataSourceWizardOptions.getJsonConnectionStrings);
            this._setSectionPosition(FullscreenDataSourceWizardSectionId.SpecifyJsonConnectionPage, this._dataSourceWizardOptions.rtl ? WizardSectionPosition.Right : WizardSectionPosition.Left);
        }
        if (this._dataSourceWizardOptions.allowCreateNewJsonConnection) {
            if (this._dataSourceWizardOptions.connectionStrings.json().length === 0) {
                _registerChooseJsonSourcePage(this._factory, this._dataSourceWizardOptions.requestWrapper, this._dataSourceWizardOptions.callbacks.getItemsProviderCallback);
                this._setSectionPosition(FullscreenDataSourceWizardSectionId.ChooseJsonSourcePage, this._dataSourceWizardOptions.rtl ? WizardSectionPosition.Right : WizardSectionPosition.Left);
                var meta = this._factory.getMetadata(FullscreenDataSourceWizardSectionId.ChooseJsonSourcePage);
                meta['disabledText'] = Object(external_DevExpress_Analytics_Utils_["getLocalization"])("To create a data connection, select \"No, I'd like to create a new data connection\".", 'AnalyticsCoreStringId.JsonDSWizard_CreateNewConnectionPage_Placeholder');
            }
        }
        _registerChooseJsonSchemaPage(this._factory, this._dataSourceWizardOptions.requestWrapper, this._dataSourceWizardOptions.callbacks);
        this._setSectionPosition(FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage, this._dataSourceWizardOptions.rtl ? WizardSectionPosition.Left : WizardSectionPosition.Right);
        var meta = this._factory.getMetadata(FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage);
        meta['disabledText'] = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('To select data fields, choose or create a data connection.', 'AnalyticsCoreStringId.JsonDSWizard_ChooseJsonSchemaPage_Placeholder');
    }
    getNextSectionId(sectionId) {
        if (!sectionId && this._dataSourceWizardOptions.connectionStrings.json().length > 0) {
            return FullscreenDataSourceWizardSectionId.SpecifyJsonConnectionPage;
        }
        else if (!sectionId) {
            return FullscreenDataSourceWizardSectionId.ChooseJsonSourcePage;
        }
        else if (this._dataSourceWizardOptions.allowCreateNewJsonConnection) {
            if (sectionId === FullscreenDataSourceWizardSectionId.SpecifyJsonConnectionPage)
                return FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage;
            else if (sectionId === FullscreenDataSourceWizardSectionId.ChooseJsonSourcePage)
                return FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage;
        }
        else {
            if (sectionId === FullscreenDataSourceWizardSectionId.SpecifyJsonConnectionPage)
                return FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage;
        }
    }
    canNext() {
        var section = this._sectionsProcessor.getPageById(FullscreenDataSourceWizardSectionId.ChooseJsonSchemaPage);
        return section && section.page() && section.metadata.canNext(section.page().page);
    }
}
function _registerSpecifyJsonDataSourceSettingsPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(FullscreenDataSourceWizardPageId.SpecifyJsonDataSourceSettingsPage, {
        setState: (data, state) => {
            state.jsonDataSourceWizard.connectionName = data.jsonDataSourceWizard.connectionName;
            state.jsonDataSourceWizard.newConnectionName = data.jsonDataSourceWizard.newConnectionName;
            state.jsonDataSourceWizard.jsonSource = data.jsonDataSourceWizard.jsonSource;
            state.jsonDataSourceWizard.dataSourceName = data.jsonDataSourceWizard.dataSourceName;
            state.jsonDataSourceWizard.jsonScheme = data.jsonDataSourceWizard.jsonScheme;
            state.jsonDataSourceWizard.rootElement = data.jsonDataSourceWizard.rootElement;
        },
        getState: (state) => state,
        resetState: (state, defaultState) => {
            state.jsonDataSourceWizard.connectionName = defaultState.jsonDataSourceWizard.connectionName;
            state.jsonDataSourceWizard.jsonSource = defaultState.jsonDataSourceWizard.jsonSource;
            state.jsonDataSourceWizard.dataSourceName = defaultState.jsonDataSourceWizard.dataSourceName;
            state.jsonDataSourceWizard.newConnectionName = defaultState.jsonDataSourceWizard.newConnectionName;
            state.jsonDataSourceWizard.jsonScheme = defaultState.jsonDataSourceWizard.jsonScheme;
            state.jsonDataSourceWizard.rootElement = defaultState.jsonDataSourceWizard.rootElement;
        },
        create: () => {
            return new specifyJsonDataSourceSettingsPage_SpecifyJsonDataSourceSettingsPage(dataSourceWizardOptions);
        },
        navigationPanelText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Specify Data Source Settings', 'AnalyticsCoreStringId.Wizard_SpecifyDataSourceSettingsPage'),
        template: 'dx-wizard-fullscreen-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/pages/specifySqlDataSourceSettingsPage.js











class specifySqlDataSourceSettingsPage_SpecifySqlDataSourceSettingsPage extends fullscreenWizardPage_FullscreenWizardPage {
    constructor(_dataSourceWizardOptions) {
        super();
        this._dataSourceWizardOptions = _dataSourceWizardOptions;
    }
    getNextSectionId(sectionId) {
        if (!sectionId)
            return FullscreenDataSourceWizardSectionId.ChooseSqlConnectionPage;
        else if (sectionId === FullscreenDataSourceWizardSectionId.ChooseSqlConnectionPage && this._stateManager.getCurrentState().sqlDataSourceWizard.name) {
            return FullscreenDataSourceWizardSectionId.ConfigureQueryPage;
        }
        else if (sectionId === FullscreenDataSourceWizardSectionId.ConfigureQueryPage) {
            var sections = [];
            var sqlDataSourceWizardState = this._stateManager.getCurrentState().sqlDataSourceWizard;
            if ((sqlDataSourceWizardState.customQueries || []).length > 0) {
                sections.push(FullscreenDataSourceWizardSectionId.ConfigureQueryParametersPage);
            }
            var sqlDataSourceWrapped = _restoreSqlDataSourceFromState(sqlDataSourceWizardState);
            if (sqlDataSourceWrapped.sqlDataSource.queries().length > 1) {
                sections.push(FullscreenDataSourceWizardSectionId.ConfigureMasterDetailRelationshipsPage);
            }
            return sections;
        }
    }
    registerSections() {
        _registerChooseSqlConnectionPage(this._factory, this._dataSourceWizardOptions.connectionStrings.sql, this._dataSourceWizardOptions.getSqlConnectionStrings);
        _registerMultiQueryConfigurePage(this._factory, this._dataSourceWizardOptions);
        _registerConfigureMasterDetailRelationshipsPage(this._factory, wrapRebuildResultSchema(this._dataSourceWizardOptions.callbacks.sqlDataSourceResultSchema));
        _registerMultiQueryConfigureParametersPage(this._factory, this._dataSourceWizardOptions.requestWrapper);
        var meta = this._factory.getMetadata(FullscreenDataSourceWizardSectionId.ChooseSqlConnectionPage);
        meta.description = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose a data connection.', 'AnalyticsCoreStringId.SqlDSWizard_PageChooseConnection');
        var meta = this._factory.getMetadata(FullscreenDataSourceWizardSectionId.ConfigureQueryPage);
        meta['recreate'] = true;
        meta.description = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose predefined queries and/or create custom queries.', 'AnalyticsCoreStringId.Wizard_Queries_Description');
        meta['required'] = true;
        var meta = this._factory.getMetadata(FullscreenDataSourceWizardSectionId.ConfigureMasterDetailRelationshipsPage);
        meta.description = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure master-detail relationships.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMasterDetailRelations');
        meta['disabledText'] = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('To create a master-detail relationship, select two or more queries.', 'AnalyticsCoreStringId.Wizard_MasterDetailRelationship_Placeholder');
        var meta = this._factory.getMetadata(FullscreenDataSourceWizardSectionId.ConfigureQueryParametersPage);
        meta.description = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure query parameters.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureParameters');
        meta['disabledText'] = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('To specify query parameters, select a parameterized stored procedure or create a custom query.', 'AnalyticsCoreStringId.Wizard_ConfigureQueryParameters_Placeholder');
        this._setSectionPosition(FullscreenDataSourceWizardSectionId.ChooseSqlConnectionPage, this._dataSourceWizardOptions.rtl ? WizardSectionPosition.TopRight : WizardSectionPosition.TopLeft);
        this._setSectionPosition(FullscreenDataSourceWizardSectionId.ConfigureQueryPage, this._dataSourceWizardOptions.rtl ? WizardSectionPosition.TopLeft : WizardSectionPosition.TopRight);
        this._setSectionPosition(FullscreenDataSourceWizardSectionId.ConfigureQueryParametersPage, this._dataSourceWizardOptions.rtl ? WizardSectionPosition.BottomLeft : WizardSectionPosition.BottomRight);
        this._setSectionPosition(FullscreenDataSourceWizardSectionId.ConfigureMasterDetailRelationshipsPage, this._dataSourceWizardOptions.rtl ? WizardSectionPosition.BottomRight : WizardSectionPosition.BottomLeft);
    }
}
function _registerSpecifySqlDataSourceSettingsPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(FullscreenDataSourceWizardPageId.SpecifySqlDataSourceSettingsPage, {
        setState: (data, state) => {
            state.sqlDataSourceWizard.customQueries = data.sqlDataSourceWizard.customQueries;
            state.sqlDataSourceWizard.name = data.sqlDataSourceWizard.name;
            state.sqlDataSourceWizard.queryName = data.sqlDataSourceWizard.name;
            state.sqlDataSourceWizard.sqlDataSourceJSON = data.sqlDataSourceWizard.sqlDataSourceJSON;
            state.sqlDataSourceWizard.relations = data.sqlDataSourceWizard.relations;
        },
        getState: (state) => state,
        resetState: (state, defaulState) => {
            state.sqlDataSourceWizard = Object(external_DevExpress_Analytics_Internal_["extend"])(true, {}, defaulState);
        },
        create: () => {
            return new specifySqlDataSourceSettingsPage_SpecifySqlDataSourceSettingsPage(dataSourceWizardOptions);
        },
        navigationPanelText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Specify Data Source Settings', 'AnalyticsCoreStringId.Wizard_SpecifyDataSourceSettingsPage'),
        template: 'dx-wizard-fullscreen-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/pages/specifyFederationDataSourceSettingsPage.js









class specifyFederationDataSourceSettingsPage_SpecifyFederationDataSourceSettingsPage extends fullscreenWizardPage_FullscreenWizardPage {
    constructor(_dataSourceWizardOptions) {
        super();
        this._dataSourceWizardOptions = _dataSourceWizardOptions;
    }
    getNextSectionId(sectionId) {
        if (!sectionId)
            return FullscreenDataSourceWizardSectionId.ConfigureFederatedQueriesPage;
        else if (sectionId === FullscreenDataSourceWizardSectionId.ConfigureFederatedQueriesPage) {
            var federationDataSourceWizard = _restoreFederationDataSourceFromState(this._stateManager.getCurrentState().federationDataSourceWizard, this._dataSourceWizardOptions.dataSources);
            if (federationDataSourceWizard.queries().length > 1) {
                return FullscreenDataSourceWizardSectionId.ConfigureFederatedMasterDetailRelationshipsPage;
            }
        }
    }
    _showPageDescription() {
        return true;
    }
    registerSections() {
        _registerFederatedQueryConfigurePage(this._factory, this._dataSourceWizardOptions);
        _registerFederatedMasterDetailRelationshipsPage(this._factory, wrapGetFederationdResultSchema(this._dataSourceWizardOptions.callbacks.federationDataSourceResultSchema), this._dataSourceWizardOptions);
        var meta = this._factory.getMetadata(FullscreenDataSourceWizardSectionId.ConfigureFederatedQueriesPage);
        meta.description = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Create a federated query.', 'DataAccessUIStringId.WizardPageConfigureFederatedQueryPage');
        var meta = this._factory.getMetadata(FullscreenDataSourceWizardSectionId.ConfigureFederatedMasterDetailRelationshipsPage);
        meta.description = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Configure master-detail relationships.', 'AnalyticsCoreStringId.SqlDSWizard_PageConfigureMasterDetailRelations');
        meta['disabledText'] = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('To create a master-detail relationship, select two or more queries.', 'AnalyticsCoreStringId.Wizard_MasterDetailRelationship_Placeholder');
        this._setSectionPosition(FullscreenDataSourceWizardSectionId.ConfigureFederatedQueriesPage, WizardSectionPosition.Top);
        this._setSectionPosition(FullscreenDataSourceWizardSectionId.ConfigureFederatedMasterDetailRelationshipsPage, WizardSectionPosition.Bottom);
    }
}
function _registerSpecifyFederationDataSourceSettingsPage(factory, dataSourceWizardOptions) {
    factory.registerMetadata(FullscreenDataSourceWizardPageId.SpecifyFederationDataSourceSettingsPage, {
        setState: (data, state) => {
            state.federationDataSourceWizard.federationDataSourceJSON = data.federationDataSourceWizard.federationDataSourceJSON;
            state.federationDataSourceWizard.federatedQueries = data.federationDataSourceWizard.federatedQueries;
            state.federationDataSourceWizard.relations = data.federationDataSourceWizard.relations;
            state.federationDataSourceWizard.name = data.federationDataSourceWizard.name;
        },
        getState: (state) => state,
        resetState: (state, defaulState) => {
            state.federationDataSourceWizard = Object(external_DevExpress_Analytics_Internal_["extend"])(true, {}, defaulState);
        },
        create: () => {
            return new specifyFederationDataSourceSettingsPage_SpecifyFederationDataSourceSettingsPage(dataSourceWizardOptions);
        },
        navigationPanelText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Specify Data Source Settings', 'AnalyticsCoreStringId.Wizard_SpecifyDataSourceSettingsPage'),
        template: 'dx-wizard-fullscreen-page'
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/fullscreenWizardNavigation.js


class fullscreenWizardNavigation_WizardNavigationPanel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(wizard) {
        super();
        this._steps = [];
        this._disposables.push(wizard._currentPage.subscribe((newPage) => {
            var currentStep = this._steps.filter(step => step.pageIds.some(x => x === newPage.pageId))[0];
            if (currentStep) {
                currentStep.currentPageId = newPage.pageId;
                currentStep.disabled(false);
                this._setStepVisible(currentStep.stepIndex);
            }
        }));
        Object.keys(wizard.pageFactory.metadata).forEach((pageId) => {
            var item = wizard.pageFactory.metadata[pageId];
            var navigationItem = this._steps.filter(x => x.text === item.navigationPanelText)[0];
            if (navigationItem) {
                navigationItem.pageIds.push(pageId);
            }
            else {
                var navigationStep = {
                    text: item.navigationPanelText,
                    pageIds: [pageId],
                    currentPageId: null,
                    stepIndex: this._steps.length,
                    disabled: external_ko_["observable"](true),
                    visible: external_ko_["observable"](true)
                };
                this._disposables.push(navigationStep.isActive = external_ko_["computed"](() => {
                    return wizard._currentPage() && navigationStep.currentPageId === wizard._currentPage().pageId;
                }));
                navigationStep.clickAction = () => {
                    if (!navigationStep.isActive())
                        wizard.goToPage(navigationStep.currentPageId);
                };
                this._steps.push(navigationStep);
            }
        });
        this._disposables.push(this.isVisible = external_ko_["computed"](() => {
            return this._steps.filter(step => step.visible()).length > 1;
        }));
    }
    resetAll() {
        this._steps.forEach(step => {
            step.disabled(true);
        });
    }
    _currentStep(pageId) {
        return this._steps.filter(x => x.currentPageId === pageId)[0];
    }
    _reset(pageId) {
        var currentStep = this._currentStep(pageId);
        currentStep && currentStep.disabled(true);
    }
    _resetNextPages(pageId) {
        var currentStep = this._currentStep(pageId);
        if (!currentStep)
            return;
        for (var i = currentStep.stepIndex + 1; i < this._steps.length; i++) {
            this._steps[i].disabled(true);
        }
    }
    _setStepVisible(currentPageIndex) {
        var previousSteps = this._steps.filter((_, index) => index < currentPageIndex);
        if (previousSteps.length > 0 && !previousSteps.some(step => !step.disabled())) {
            previousSteps.forEach(step => step.visible(false));
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/fullscreenWizard.js



class fullscreenWizard_FullscreenWizard extends popupWizard_PopupWizard {
    constructor(pageFactory, finishCallback) {
        super(pageFactory, finishCallback);
        this._extendCssClass = 'dx-wizard-fullscreen';
        this.navigationPanel = external_ko_["observable"](null);
        this.isVisible.subscribe(newValue => {
            if (!newValue) {
                this.navigationPanel() && this.navigationPanel().resetAll();
                this.navigationPanel() && this.navigationPanel().dispose();
                this._onCloseCallback && this._onCloseCallback();
            }
        });
    }
    _onClose(callback) {
        this._onCloseCallback = callback;
    }
    onFinish() {
        super.onFinish();
        this.navigationPanel().dispose();
    }
    _initPage(page) {
        if (page.onChange)
            page.onChange(() => this.navigationPanel()._resetNextPages(page.pageId));
        return super._initPage(page);
    }
    _onResetPage(page) {
        this.navigationPanel()._reset(page.pageId);
    }
    start(finishCallback) {
        if (finishCallback)
            this['_finishCallback'] = finishCallback;
        this.navigationPanel() && this.navigationPanel().resetAll();
        this.navigationPanel() && this.navigationPanel().dispose();
        this.navigationPanel(new fullscreenWizardNavigation_WizardNavigationPanel(this));
        super.start();
    }
    _pageDescription() {
        var currentStep = this.navigationPanel()._steps.filter(x => x.isActive())[0];
        if (currentStep) {
            return currentStep.text;
        }
        else {
            return this.pageFactory.getMetadata(this._currentPage().pageId).description;
        }
    }
    _description() {
        return '';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/fullscreen/fullscreenMultiQueryDataSourceWizard.js













class fullscreenMultiQueryDataSourceWizard_FullscreenDataSourceWizard extends fullscreenWizard_FullscreenWizard {
    constructor(factory, _dataSourceWizardOptions) {
        super(factory, _dataSourceWizardOptions.callbacks.finishCallback);
        this._dataSourceWizardOptions = _dataSourceWizardOptions;
    }
    initialize(state, createIterator = (pageFactory, stateManager) => new fullscreenMultiQueryDataSourceWizard_FullscreenDataSourceWizardPageIterator(pageFactory, stateManager, this._dataSourceWizardOptions, (page) => this._onResetPage(page))) {
        if (this._dataSourceWizardOptions.sqlDataSourceAvailable || !Object(external_DevExpress_Analytics_Internal_["isEmptyObject"])(state.sqlDataSourceWizard)) {
            state.dataSourceType = DataSourceType.Sql;
        }
        else if (this._dataSourceWizardOptions.jsonDataSourceAvailable || state.jsonDataSourceWizard.jsonSource) {
            state.dataSourceType = DataSourceType.Json;
        }
        else if (this._dataSourceWizardOptions.objectDataSourceAvailable || !Object(external_DevExpress_Analytics_Internal_["isEmptyObject"])(state.objectDataSourceWizard)) {
            state.dataSourceType = DataSourceType.Object;
        }
        super.initialize(state, createIterator);
    }
    canRunWizard() {
        return this._dataSourceWizardOptions.canCreateDataSource;
    }
    _description() {
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Data Source Wizard', 'AnalyticsCoreStringId.DSWizard_Title');
    }
}
class fullscreenMultiQueryDataSourceWizard_FullscreenDataSourceWizardPageIterator extends pageIterator_PageIterator {
    constructor(factory, stateManager, _dataSourceOptions, onResetPage) {
        super(factory, stateManager, onResetPage);
        this._dataSourceOptions = _dataSourceOptions;
    }
    _shouldSelectDataSource() {
        return _isMoreThanOneDataSourceTypeAvailable(this._dataSourceOptions) || this._dataSourceOptions.predefinedDataSources().length > 0;
    }
    getNextPageId(pageId) {
        if (!pageId && this._shouldSelectDataSource()) {
            return FullscreenDataSourceWizardPageId.SelectDataSourcePage;
        }
        else if (!pageId && this._dataSourceOptions.sqlDataSourceAvailable) {
            return FullscreenDataSourceWizardPageId.SpecifySqlDataSourceSettingsPage;
        }
        else if (!pageId && this._dataSourceOptions.jsonDataSourceAvailable) {
            return FullscreenDataSourceWizardPageId.SpecifyJsonDataSourceSettingsPage;
        }
        else if (!pageId && this._dataSourceOptions.objectDataSourceAvailable) {
            return FullscreenDataSourceWizardPageId.SpecifyObjectDataSourceSettingsPage;
        }
        else if (pageId === FullscreenDataSourceWizardPageId.SelectDataSourcePage && this._getCurrentState().dataSourceType === DataSourceType.Json) {
            return FullscreenDataSourceWizardPageId.SpecifyJsonDataSourceSettingsPage;
        }
        else if (pageId === FullscreenDataSourceWizardPageId.SelectDataSourcePage && this._getCurrentState().dataSourceType === DataSourceType.Sql) {
            return FullscreenDataSourceWizardPageId.SpecifySqlDataSourceSettingsPage;
        }
        else if (pageId === FullscreenDataSourceWizardPageId.SelectDataSourcePage && this._getCurrentState().dataSourceType === DataSourceType.Object) {
            return FullscreenDataSourceWizardPageId.SpecifyObjectDataSourceSettingsPage;
        }
        else if (pageId === FullscreenDataSourceWizardPageId.SelectDataSourcePage && this._getCurrentState().dataSourceType === DataSourceType.Federation) {
            return FullscreenDataSourceWizardPageId.SpecifyFederationDataSourceSettingsPage;
        }
    }
}
function _createDataSourceFullscreenWizard(dataSourceWizardOptions) {
    var factory = new fullscreenWizardPageFactory_FullscreenWizardPageFactory();
    var wizard = new fullscreenMultiQueryDataSourceWizard_FullscreenDataSourceWizard(factory, dataSourceWizardOptions);
    _registerSelectDataSourcePage(factory, dataSourceWizardOptions);
    _registerSpecifySqlDataSourceSettingsPage(factory, dataSourceWizardOptions);
    _registerSpecifyFederationDataSourceSettingsPage(factory, dataSourceWizardOptions);
    _registerSpecifyJsonDataSourceSettingsPage(factory, dataSourceWizardOptions);
    _registerSpecifyObjectDataSourceSettingsPage(factory, dataSourceWizardOptions);
    return wizard;
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/initializer.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/analytics-wizard.js

































































































// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/wizard/internal/_wizardAction.js

class _wizardAction_WizardAction {
    constructor(handler, text) {
        this.handler = handler;
        this.isVisible = external_ko_["observable"](true);
        this.isDisabled = external_ko_["observable"](false);
        this.text = text;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/analytics-wizard-internal.js































































// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/queryBuilder-widgets.js



// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/_undoEditor.js


class _undoEditor_UndoEditor extends external_DevExpress_Analytics_Widgets_["Editor"] {
    constructor(info, level, parentDisabled, textToSearch) {
        super(info, level, parentDisabled, textToSearch);
    }
    generateValue(undoEngine) {
        if (!this.undoValue) {
            this._disposables.push(this.undoValue = external_ko_["computed"]({
                read: () => {
                    return this.value();
                },
                write: (val) => {
                    undoEngine().start();
                    this.value(val);
                    undoEngine().end();
                }
            }));
        }
        return this.undoValue;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/_manageFederatedQueriesEditor.js








class _manageFederatedQueriesEditor_ManageFederatedQueriesEditor extends external_DevExpress_Analytics_Widgets_Internal_["PopupEditorBase"] {
    constructor(_dataSource, _callBack, rtl = false) {
        super();
        this._dataSource = _dataSource;
        this._callBack = _callBack;
        this.rtl = rtl;
        this.className = 'dxrd-federated-manageQueries-editor';
        this._disposables.push(this._queriesPopupHelper = new _federatedQueriesHelper_FederatedQueriesHelper(this._dataSource, this._dataSource.queries, {}, rtl));
        this._createAddQueryButton();
        this.queriesStoreData = external_ko_["pureComputed"](() => this._dataSource && this._dataSource.queries().map(x => {
            return {
                name: x.alias(),
                id: x.alias(),
                type: FederationQueryType[x.queryType()]
            };
        }));
        this._disposables.push(this.queriesStoreData);
        this.queriesGrid = {
            rtlEnabled: rtl,
            dataSource: this.queriesStoreData,
            showColumnLines: false,
            hoverStateEnabled: true,
            scrolling: { mode: 'infinite' },
            height: '100%',
            editing: {
                mode: 'cell',
                allowUpdating: true,
            },
            onRowUpdating: (event) => {
                event.oldData.alias = event.newData.name;
            },
            columns: [{
                    dataField: 'name',
                    get caption() {
                        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Name', 'AnalyticsCoreStringId.CollectionEditor_Name_Placeholder');
                    },
                }, {
                    type: 'buttons',
                    width: 100,
                    buttons: [
                        {
                            icon: 'edit',
                            onClick: (e) => {
                                this._queriesPopupHelper.editQuery(e.row.data.type, e.row.data.id);
                            },
                            cssClass: 'dxrd-manage-queries-actions dxd-icon-highlighted dxrd-image-operations-edit-query',
                            template: Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrd-svg-operations-edit'),
                        },
                        {
                            icon: 'delete',
                            onClick: (e) => {
                                this._dataSource.removeQuery(e.row.data.id);
                            },
                            cssClass: 'dxrd-manage-queries-actions dxd-icon-highlighted dxrd-image-recycle-bin',
                            template: Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrd-svg-operations-recycle_bin'),
                        }
                    ]
                }
            ]
        };
    }
    _createAddQueryButton() {
        var addQueryTemplate = 'dxrd-managequeries-selectbox';
        var queriesTreeNode = new _federatedQueriesTreeNode_FederatedQueriesTreeNode('queries', Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Federated Queries', 'DataAccessUIStringId.FederatedQueryCollectionList_Title'), 'list', false, external_ko_["observable"]({ showQbCallBacks: this._queriesPopupHelper.callBacks }));
        var popoverListItems = queriesTreeNode.popoverListItems();
        var addAction = {
            text: Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Add query', 'AnalyticsCoreStringId.SqlDSWizard_AddQuery'),
            items: popoverListItems.map(x => {
                return {
                    text: x.name,
                    onClick: x.addAction
                };
            }),
            dropDownOptions: {
                width: 150,
                container: '.dx-designer-viewport',
            },
            useItemTextAsTitle: false
        };
        this.buttonItems.push({ toolbar: 'bottom', location: 'before', template: function () { return Object(external_DevExpress_Analytics_Widgets_["getTemplate"])(addQueryTemplate); }, options: addAction });
    }
    save() {
        this.queriesStoreData().forEach(data => {
            var query = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(this._dataSource.queries(), query => query.alias() === data.id);
            query.sources().forEach(x => this._dataSource.addSource(x));
            if (query && data.id !== data.name) {
                query.alias(data.name);
            }
        });
        this._callBack();
        super.save();
        this.dispose();
    }
    canSave() {
        return !!this.queriesStoreData().length;
    }
    close() {
        super.close();
        this.dispose();
    }
    dispose() {
        super.dispose();
        this.queriesGrid = null;
        this._dataSource = null;
        this._callBack = null;
    }
    title() {
        return Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Manage Queries', 'DataAccessUIStringId.FederatedQueryCollectionEditorForm_Title');
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/_rightPanelSwitcher.js


class _rightPanelSwitcher_RightPanelSwitcher extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(collapsed, editableObj, visibleCondition = (_) => true, getDisplayName) {
        super();
        this.editableObj = editableObj;
        this.getDisplayName = getDisplayName;
        this._collapsed = collapsed;
        this._disposables.push(this.visible = external_ko_["pureComputed"](() => {
            return !this.disabled() && !this._collapsed();
        }));
        this._disposables.push(this.disabled = external_ko_["pureComputed"](() => {
            var disabled = !editableObj() || !visibleCondition(editableObj());
            if (disabled && !this._collapsed())
                this._collapsed(true);
            return disabled;
        }));
    }
    dispose() {
        super.dispose();
        this._collapsed = null;
    }
    toogle() {
        this._collapsed(!this._collapsed());
    }
    get title() {
        return this.getDisplayName(this.editableObj());
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/widgets/registerEditorTemplates.js


function registerEditorTemplates() {
    editorTemplates.registerEditors({
        bool: { header: 'dx-boolean-select', custom: 'dxqb-property-editor' },
        combobox: { header: 'dx-combobox', custom: 'dxqb-property-editor' },
        comboboxUndo: { header: 'dx-combobox-undo', custom: 'dxqb-property-editor', editorType: _undoEditor_UndoEditor },
        text: { header: 'dx-text', custom: 'dxqb-property-editor' },
        filterEditor: { header: 'dxrd-filterstring', custom: 'dxqb-property-editor' },
        filterGroupEditor: { header: 'dxrd-filterstringgroup', custom: 'dxqb-property-editor' },
        numeric: { header: 'dx-numeric', custom: 'dxqb-property-editor' }
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/queryBuilder-widgets-internal.js



















registerEditorTemplates();



















// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/queryBuilder-metadata.js



// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/queryBuilder-utils.js









// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/dx-query-builder-bindings.js

Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { x1: startPoint().relativeX, y1: startPoint().relativeY, x2: endPoint().relativeX, y2: endPoint().relativeY }', function ($context, $element) { return { 'attr': function () { return { 'x1': $context.$data.startPoint().relativeX, 'y1': $context.$data.startPoint().relativeY, 'x2': $context.$data.endPoint().relativeX, 'y2': $context.$data.endPoint().relativeY }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: position, trackCursor: underCursor, style: { \'marginLeft\': -3 * _context.zoom() + \'px\', \'marginTop\': -3 * _context.zoom() + \'px\' }, draggable: $root.connectingPointDragHandler', function ($context, $element) { return { 'styleunit': function () { return $context.$data.position; }, 'trackCursor': function () { return $context.$data.underCursor; }, 'style': function () { return { 'marginLeft': -3 * $context.$data._context.zoom() + 'px', 'marginTop': -3 * $context.$data._context.zoom() + 'px' }; }, 'draggable': function () { return $context.$root.connectingPointDragHandler; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('draggable: $root.connectionPointDragHandler, styleunit: { top: relativeY, left: relativeX }', function ($context, $element) { return { 'draggable': function () { return $context.$root.connectionPointDragHandler; }, 'styleunit': function () { return { 'top': $context.$data.relativeY, 'left': $context.$data.relativeX }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: position, trackCursor: underCursor', function ($context, $element) { return { 'styleunit': function () { return $context.$data.position; }, 'trackCursor': function () { return $context.$data.underCursor; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: position, dxclick: function() {}, draggable: $root.dragHandler', function ($context, $element) { return { 'styleunit': function () { return $context.$data.position; }, 'dxclick': function () { return function () { }; }, 'draggable': function () { return $context.$root.dragHandler; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxdd-connection-line\' }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxdd-connection-line' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: startPoint', function ($context, $element) { return { 'with': function () { return $context.$data.startPoint; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxdd-connection-point-selection\' }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxdd-connection-point-selection' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: endPoint', function ($context, $element) { return { 'with': function () { return $context.$data.endPoint; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { id: \'dxqb-arrow_end\' + connectorID() }', function ($context, $element) { return { 'attr': function () { return { 'id': 'dxqb-arrow_end' + $context.$data.connectorID() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { id: \'dxqb-arrow_start\' + connectorID() }', function ($context, $element) { return { 'attr': function () { return { 'id': 'dxqb-arrow_start' + $context.$data.connectorID() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { points: routePointsSet, \'marker-end\': showArrow() ? \'url(#dxqb-arrow_end\' + connectorID() + \')\' : \'\', \'marker-start\': showRightArrow() ? \'url(#dxqb-arrow_start\' + connectorID() + \')\' : \'\' }, updateConnectorArrow: $data', function ($context, $element) { return { 'attr': function () { return { 'points': $context.$data.routePointsSet, 'marker-end': $context.$data.showArrow() ? 'url(#dxqb-arrow_end' + $context.$data.connectorID() + ')' : '', 'marker-start': $context.$data.showRightArrow() ? 'url(#dxqb-arrow_start' + $context.$data.connectorID() + ')' : '' }; }, 'updateConnectorArrow': function () { return $context.$data; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: showArrow', function ($context, $element) { return { 'if': function () { return $context.$data.showArrow; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: showRightArrow', function ($context, $element) { return { 'if': function () { return $context.$data.showRightArrow; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: position, visible: isVisible', function ($context, $element) { return { 'styleunit': function () { return $context.$data.position; }, 'visible': function () { return $context.$data.isVisible; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: position', function ($context, $element) { return { 'styleunit': function () { return $context.$data.position; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('trackCursor: underCursor, click: $root.selectItemProperties', function ($context, $element) { return { 'trackCursor': function () { return $context.$data.underCursor; }, 'click': function () { return $context.$root.selectItemProperties; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: position, dxclick: function() {}, visible: isVisible', function ($context, $element) { return { 'styleunit': function () { return $context.$data.position; }, 'dxclick': function () { return function () { }; }, 'visible': function () { return $context.$data.isVisible; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: position, style: { cursor: isVerticalLine ? \'ew-resize\' : \'ns-resize\' }, routeLineDraggable: { starting: $root.resizeHandler.starting, stopped: function() { resizeStopped(); $root.resizeHandler.stopped(); }, forceResize: resizeHandler }', function ($context, $element) { return { 'styleunit': function () { return $context.$data.position; }, 'style': function () { return { 'cursor': $context.$data.isVerticalLine ? 'ew-resize' : 'ns-resize' }; }, 'routeLineDraggable': function () { return { 'starting': $context.$root.resizeHandler.starting, 'stopped': function () { $context.$data.resizeStopped(); $context.$root.resizeHandler.stopped(); }, 'forceResize': $context.$data.resizeHandler }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxdd-routed-connection-line\' }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxdd-routed-connection-line' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: routeLineWrappers', function ($context, $element) { return { 'foreach': function () { return $context.$data.routeLineWrappers; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: $parent', function ($context, $element) { return { 'with': function () { return $context.$parent; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: isLocked', function ($context, $element) { return { 'ifnot': function () { return $context.$data.isLocked; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: isLocked', function ($context, $element) { return { 'if': function () { return $context.$data.isLocked; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { lineHeight: positionLineHeightWithoutMargins }, style: css', function ($context, $element) { return { 'styleunit': function () { return { 'lineHeight': $context.$data.positionLineHeightWithoutMargins }; }, 'style': function () { return $context.$data.css; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: contenttemplate, styleunit: { \'height\': positionLineHeightWithoutMargins, \'width\': positionWidthWithoutMargins }', function ($context, $element) { return { 'template': function () { return $context.$data.contenttemplate; }, 'styleunit': function () { return { 'height': $context.$data.positionLineHeightWithoutMargins, 'width': $context.$data.positionWidthWithoutMargins }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('event: { dblclick: $root.inlineTextEdit.show }, css: {\'dxrd-selected\': selected, \'dxrd-focused\': focused }, resizable: $root.resizeHandler, draggable: $root.dragHandler, styleunit: position, trackCursor: underCursor', function ($context, $element) { return { 'event': function () { return { 'dblclick': $context.$root.inlineTextEdit.show }; }, 'css': function () { return { 'dxrd-selected': $context.$data.selected, 'dxrd-focused': $context.$data.focused }; }, 'resizable': function () { return $context.$root.resizeHandler; }, 'draggable': function () { return $context.$root.dragHandler; }, 'styleunit': function () { return $context.$data.position; }, 'trackCursor': function () { return $context.$data.underCursor; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: contenttemplate, styleunit: { \'height\': positionLineHeightWithoutMargins, \'width\': positionWidthWithoutMargins}', function ($context, $element) { return { 'template': function () { return $context.$data.contenttemplate; }, 'styleunit': function () { return { 'height': $context.$data.positionLineHeightWithoutMargins, 'width': $context.$data.positionWidthWithoutMargins }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextArea: { value: text, onKeyUp: keypressAction, valueChangeEvent: \'keyup\' }', function ($context, $element) { return { 'dxTextArea': function () { return { 'value': $context.$data.text, 'onKeyUp': $context.$data.keypressAction, 'valueChangeEvent': 'keyup' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: getControlModel().text', function ($context, $element) { return { 'text': function () { return $context.$data.getControlModel().text; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !$root.inlineTextEdit.visible()', function ($context, $element) { return { 'if': function () { return !$context.$root.inlineTextEdit.visible(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $root.inlineTextEdit.visible', function ($context, $element) { return { 'if': function () { return $context.$root.inlineTextEdit.visible; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: $root.inlineTextEdit', function ($context, $element) { return { 'with': function () { return $context.$root.inlineTextEdit; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: getControlModel().type() === \'Ellipse\'', function ($context, $element) { return { 'if': function () { return $context.$data.getControlModel().type() === 'Ellipse'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: getControlModel().type() === \'Condition\'', function ($context, $element) { return { 'if': function () { return $context.$data.getControlModel().type() === 'Condition'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !getControlModel().type()', function ($context, $element) { return { 'if': function () { return !$context.$data.getControlModel().type(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: connectingPoints', function ($context, $element) { return { 'foreach': function () { return $context.$data.connectingPoints; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxdd-connecting-point\'', function ($context, $element) { return { 'template': function () { return 'dxdd-connecting-point'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { \'width\': Math.min(pageWidth(), $root.surfaceSize()) }, click: function(_, e) { $root.selection.clickHandler(null, e); e.stopPropagation(); }, keyDownActions: $root.actionLists', function ($context, $element) { return { 'styleunit': function () { return { 'width': Math.min($context.$data.pageWidth(), $context.$root.surfaceSize()) }; }, 'click': function () { return function (_, e) { $context.$root.selection.clickHandler(null, e); e.stopPropagation(); }; }, 'keyDownActions': function () { return $context.$root.actionLists; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { minWidth: Math.min(pageWidth(), $root.surfaceSize()), maxWidth: pageWidth(),  maxHeight: pageHeight() + 20 }', function ($context, $element) { return { 'styleunit': function () { return { 'minWidth': Math.min($context.$data.pageWidth(), $context.$root.surfaceSize()), 'maxWidth': $context.$data.pageWidth(), 'maxHeight': $context.$data.pageHeight() + 20 }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('selectable: { selection: $root.selection, zoom: zoom }', function ($context, $element) { return { 'selectable': function () { return { 'selection': $context.$root.selection, 'zoom': $context.$data.zoom }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { \'width\': pageWidth(), \'height\': pageHeight() }, trackCursor: underCursor', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$data.pageWidth(), 'height': $context.$data.pageHeight() }; }, 'trackCursor': function () { return $context.$data.underCursor; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: controls', function ($context, $element) { return { 'foreach': function () { return $context.$data.controls; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: isSelected() ? selectiontemplate : template }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.isSelected() ? $context.$data.selectiontemplate : $context.$data.template }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { x1: startPoint.x, y1: startPoint.y, x2: endPoint.x, y2: endPoint.y }', function ($context, $element) { return { 'attr': function () { return { 'x1': $context.$data.startPoint.x, 'y1': $context.$data.startPoint.y, 'x2': $context.$data.endPoint.x, 'y2': $context.$data.endPoint.y }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { \'width\': $root.surfaceSize }, click: function(_, e) { $root.selection.clickHandler(null, e); e.stopPropagation(); }, keyDownActions: $root.actionLists', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$root.surfaceSize }; }, 'click': function () { return function (_, e) { $context.$root.selection.clickHandler(null, e); e.stopPropagation(); }; }, 'keyDownActions': function () { return $context.$root.actionLists; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { direction: \'both\', showScrollbar: \'onHover\', scrollByContent: false, scrollByThumb: true, bounceEnabled: false, useNative: false, height: \'100%\' }', function ($context, $element) { return { 'dxScrollView': function () { return { 'direction': 'both', 'showScrollbar': 'onHover', 'scrollByContent': false, 'scrollByThumb': true, 'bounceEnabled': false, 'useNative': false, 'height': '100%' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { \'minWidth\': pageWidth, \'minHeight\': pageHeight }, trackCursor: { recalculateBounds: true, underCursor: underCursor }', function ($context, $element) { return { 'styleunit': function () { return { 'minWidth': $context.$data.pageWidth, 'minHeight': $context.$data.pageHeight }; }, 'trackCursor': function () { return { 'recalculateBounds': true, 'underCursor': $context.$data.underCursor }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('trackCursor: { recalculateBounds: true, underCursor: underCursor }, style: { \'z-index\' : $parent.dragDropStarted() ? 2 : null }', function ($context, $element) { return { 'trackCursor': function () { return { 'recalculateBounds': true, 'underCursor': $context.$data.underCursor }; }, 'style': function () { return { 'z-index': $context.$parent.dragDropStarted() ? 2 : null }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: placeholder()', function ($context, $element) { return { 'text': function () { return $context.$data.placeholder(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { top: position.top(), left: position.left() }', function ($context, $element) { return { 'styleunit': function () { return { 'top': $context.$data.position.top(), 'left': $context.$data.position.left() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: {x1 : $data.x, y1: $data.y, x2: $parent.routePoints()[$index()+1].x, y2: $parent.routePoints()[$index()+1].y }', function ($context, $element) { return { 'attr': function () { return { 'x1': $context.$data.x, 'y1': $context.$data.y, 'x2': $context.$parent.routePoints()[$context.$index() + 1].x, 'y2': $context.$parent.routePoints()[$context.$index() + 1].y }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: tables().length === 0', function ($context, $element) { return { 'if': function () { return $context.$data.tables().length === 0; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: relations', function ($context, $element) { return { 'foreach': function () { return $context.$data.relations; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: conditions', function ($context, $element) { return { 'foreach': function () { return $context.$data.conditions; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !isSelected()', function ($context, $element) { return { 'if': function () { return !$context.$data.isSelected(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: tables', function ($context, $element) { return { 'foreach': function () { return $context.$data.tables; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: isSelected()', function ($context, $element) { return { 'if': function () { return $context.$data.isSelected(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: selectiontemplate', function ($context, $element) { return { 'template': function () { return $context.$data.selectiontemplate; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: $root.columnDragHandler.dragDropConnector', function ($context, $element) { return { 'with': function () { return $context.$root.columnDragHandler.dragDropConnector; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: routePoints', function ($context, $element) { return { 'foreach': function () { return $context.$data.routePoints; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $index() < ($parent.routePoints().length - 1)', function ($context, $element) { return { 'if': function () { return $context.$index() < ($context.$parent.routePoints().length - 1); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('trackCursor: { recalculateBounds: true, underCursor: underCursor }, draggable: $root.columnDragHandler, css: cssClasses($root.surface(), $root.columnDragHandler, $parent), click: $root.selectItemProperties', function ($context, $element) { return { 'trackCursor': function () { return { 'recalculateBounds': true, 'underCursor': $context.$data.underCursor }; }, 'draggable': function () { return $context.$root.columnDragHandler; }, 'css': function () { return $context.$data.cssClasses($context.$root.surface(), $context.$root.columnDragHandler, $context.$parent); }, 'click': function () { return $context.$root.selectItemProperties; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCheckBox: { value: selectedWrapper }, click: function(surface, e) { surface.toggleSelected(); e.stopPropagation(); return true;  }', function ($context, $element) { return { 'dxCheckBox': function () { return { 'value': $context.$data.selectedWrapper }; }, 'click': function () { return function (surface, e) { surface.toggleSelected(); e.stopPropagation(); return true; }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { title: getControlModel().actualName }', function ($context, $element) { return { 'attr': function () { return { 'title': $context.$data.getControlModel().actualName }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: getControlModel().actualName', function ($context, $element) { return { 'text': function () { return $context.$data.getControlModel().actualName; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('trackCursor: underCursor, css: cssClasses(), click: $root.selectItemProperties', function ($context, $element) { return { 'trackCursor': function () { return $context.$data.underCursor; }, 'css': function () { return $context.$data.cssClasses(); }, 'click': function () { return $context.$root.selectItemProperties; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { title: getControlModel().name }', function ($context, $element) { return { 'attr': function () { return { 'title': $context.$data.getControlModel().name }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: getControlModel().name', function ($context, $element) { return { 'text': function () { return $context.$data.getControlModel().name; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if:  $data.isAscending()', function ($context, $element) { return { 'if': function () { return $context.$data.isAscending(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-queryBuilder-sorting_asc\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-queryBuilder-sorting_asc'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if:  $data.isDescending()', function ($context, $element) { return { 'if': function () { return $context.$data.isDescending(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-queryBuilder-sorting_desc\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-queryBuilder-sorting_desc'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.getControlModel().groupBy', function ($context, $element) { return { 'if': function () { return $context.$data.getControlModel().groupBy; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-queryBuilder-group_by\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-queryBuilder-group_by'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.isAggregate()', function ($context, $element) { return { 'if': function () { return $context.$data.isAggregate(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-queryBuilder-aggregate\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-queryBuilder-aggregate'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('resizable: resizable($root.resizeHandler, $element), styleunit: position', function ($context, $element) { return { 'resizable': function () { return $context.$data.resizable($context.$root.resizeHandler, $element); }, 'styleunit': function () { return $context.$data.position; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: {\'dxrd-selected\': selected, \'dxrd-focused\': focused }, draggable: $root.dragHandler, styleunit: position, trackCursor: underCursor, click: $root.selectItemProperties', function ($context, $element) { return { 'css': function () { return { 'dxrd-selected': $context.$data.selected, 'dxrd-focused': $context.$data.focused }; }, 'draggable': function () { return $context.$root.dragHandler; }, 'styleunit': function () { return $context.$data.position; }, 'trackCursor': function () { return $context.$data.underCursor; }, 'click': function () { return $context.$root.selectItemProperties; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { lineHeight: position.lineHeight }, style: css', function ($context, $element) { return { 'styleunit': function () { return { 'lineHeight': $context.$data.position.lineHeight }; }, 'style': function () { return $context.$data.css; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: contenttemplate, styleunit: { \'height\': position.lineHeight, \'width\': position.width }', function ($context, $element) { return { 'template': function () { return $context.$data.contenttemplate; }, 'styleunit': function () { return { 'height': $context.$data.position.lineHeight, 'width': $context.$data.position.width }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCheckBox: { value: selectedWrapper }, click: function(surface, e) { $root.undoEngine().start(); surface.toggleSelected(); $root.undoEngine().end(); e.stopPropagation(); return true; }', function ($context, $element) { return { 'dxCheckBox': function () { return { 'value': $context.$data.selectedWrapper }; }, 'click': function () { return function (surface, e) { $context.$root.undoEngine().start(); surface.toggleSelected(); $context.$root.undoEngine().end(); e.stopPropagation(); return true; }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.columnsLoadingMsg()', function ($context, $element) { return { 'text': function () { return $context.$root.columnsLoadingMsg(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: { cursor: selected() ? \'move\' : \'default\' }', function ($context, $element) { return { 'style': function () { return { 'cursor': $context.$data.selected() ? 'move' : 'default' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('event: { dblclick: $root.inlineTextEdit.show }, style: { cursor: selected() ? \'move\' : \'default\' }', function ($context, $element) { return { 'event': function () { return { 'dblclick': $context.$root.inlineTextEdit.show }; }, 'style': function () { return { 'cursor': $context.$data.selected() ? 'move' : 'default' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: getControlModel().displaySourceName', function ($context, $element) { return { 'text': function () { return $context.$data.getControlModel().displaySourceName; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.isSelected()', function ($context, $element) { return { 'if': function () { return $context.$data.isSelected(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: titletemplate', function ($context, $element) { return { 'template': function () { return $context.$data.titletemplate; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $data.isInitialized()', function ($context, $element) { return { 'ifnot': function () { return $context.$data.isInitialized(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.isInitialized()', function ($context, $element) { return { 'if': function () { return $context.$data.isInitialized(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: asterisk.template, data: asterisk }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.asterisk.template, 'data': $context.$data.asterisk }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: columns', function ($context, $element) { return { 'foreach': function () { return $context.$data.columns; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('lazy: { template: $data.template  }', function ($context, $element) { return { 'lazy': function () { return { 'template': $context.$data.template }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !$root.inlineTextEdit.visible() || !selected()', function ($context, $element) { return { 'if': function () { return !$context.$root.inlineTextEdit.visible() || !$context.$data.selected(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $root.inlineTextEdit.visible() && selected()', function ($context, $element) { return { 'if': function () { return $context.$root.inlineTextEdit.visible() && $context.$data.selected(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { showTitle: true, resizeEnabled: true, width: 700, height: 500, maxHeight: \'95%\', maxWidth: \'95%\', minHeight: 300, minWidth: 400, title: title(), visible: popupVisible, wrapperAttr: { class: \'dx-filtereditor\' }, toolbarItems: buttonItems, showCloseButton: true, container: $root.getPopupContainer($element), position: { of: $root.getPopupContainer($element) }, }', function ($context, $element) { return { 'dxPopup': function () { return { 'showTitle': true, 'resizeEnabled': true, 'width': 700, 'height': 500, 'maxHeight': '95%', 'maxWidth': '95%', 'minHeight': 300, 'minWidth': 400, 'title': $context.$data.title(), 'visible': $context.$data.popupVisible, 'wrapperAttr': { 'class': 'dx-filtereditor' }, 'toolbarItems': $context.$data.buttonItems, 'showCloseButton': true, 'container': $context.$root.getPopupContainer($element), 'position': { 'of': $context.$root.getPopupContainer($element) } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: queryName', function ($context, $element) { return { 'text': function () { return $context.$data.queryName; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('service: { name: \'createRelation\' }', function ($context, $element) { return { 'service': function () { return { 'name': 'createRelation' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopupWithAutoHeight: { height: \'300px\', focusStateEnabled: false, wrapperAttr: { class: \'dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay\' }, position: $root.rtl ? { my: \'right top\', at: \'right bottom\', of: popupService.target } : { my: \'left top\', at: \'left bottom\', of: popupService.target }, container: $root.getPopupContainer($element), target: popupService.target, showTitle: false, showCloseButton: false, animation: {}, hideOnOutsideClick: true, shading: false, minWidth:\'170px\', maxWidth:\'500px\', width: \'auto\', visible: popupService.visible }', function ($context, $element) { return { 'dxPopupWithAutoHeight': function () { return { 'height': '300px', 'focusStateEnabled': false, 'wrapperAttr': { 'class': 'dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay' }, 'position': $context.$root.rtl ? { 'my': 'right top', 'at': 'right bottom', 'of': $context.$data.popupService.target } : { 'my': 'left top', 'at': 'left bottom', 'of': $context.$data.popupService.target }, 'container': $context.$root.getPopupContainer($element), 'target': $context.$data.popupService.target, 'showTitle': false, 'showCloseButton': false, 'animation': {}, 'hideOnOutsideClick': true, 'shading': false, 'minWidth': '170px', 'maxWidth': '500px', 'width': 'auto', 'visible': $context.$data.popupService.visible }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: masterQueries', function ($context, $element) { return { 'foreach': function () { return $context.$data.masterQueries; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-masterDetail-editor-relation\', foreach: relations }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-masterDetail-editor-relation', 'foreach': $context.$data.relations }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { title: $data.getTitle() }, text: queryName', function ($context, $element) { return { 'attr': function () { return { 'title': $context.$data.getTitle() }; }, 'text': function () { return $context.$data.queryName; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('service: { name: \'setColumn\' }', function ($context, $element) { return { 'service': function () { return { 'name': 'setColumn' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: function() {  $parent.remove($data); }', function ($context, $element) { return { 'dxclick': function () { return function () { $context.$parent.remove($context.$data); }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: relationName, onFocusOut: function() { isEditable(false); } }, focus: { on: isEditable }', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data.relationName, 'onFocusOut': function () { $context.$data.isEditable(false); } }; }, 'focus': function () { return { 'on': $context.$data.isEditable }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: relationName, click: function() { isEditable(true); }', function ($context, $element) { return { 'text': function () { return $context.$data.relationName; }, 'click': function () { return function () { $context.$data.isEditable(true); }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: create', function ($context, $element) { return { 'dxclick': function () { return $context.$data.create; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: keyColumns', function ($context, $element) { return { 'foreach': function () { return $context.$data.keyColumns; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-masterDetail-editor-keyColumn\', data: master }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-masterDetail-editor-keyColumn', 'data': $context.$data.master }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-masterDetail-editor-keyColumn\', data: detail }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-masterDetail-editor-keyColumn', 'data': $context.$data.detail }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: target.column() || target.selectColumnText(), dxclick: showPopup, css: { \'dxd-state-selected\': target.isSelected, \'default\': !target.column() }', function ($context, $element) { return { 'text': function () { return $context.$data.target.column() || $context.$data.target.selectColumnText(); }, 'dxclick': function () { return $context.$data.showPopup; }, 'css': function () { return { 'dxd-state-selected': $context.$data.target.isSelected, 'default': !$context.$data.target.column() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxdTableView: $data.value', function ($context, $element) { return { 'dxdTableView': function () { return $context.$data.value; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, wrapperAttr: { class: \'dxqb-preview\' }, visible: isVisible, title: title(), showTitle: true, resizeEnabled: true, shading: true, shadingColor: \'transparent\', fullScreen: false, width: 800, height: 544, container: container($element), position: { of: container($element) }, onHidden: function() { $data.data.value(null) }, focusStateEnabled: false }', function ($context, $element) { return { 'dxPopup': function () { return { 'animation': { 'show': { 'type': 'fade', 'from': 0, 'to': 1, 'duration': 700 }, 'hide': { 'type': 'fade', 'from': 1, 'to': 0, 'duration': 700 } }, 'wrapperAttr': { 'class': 'dxqb-preview' }, 'visible': $context.$data.isVisible, 'title': $context.$data.title(), 'showTitle': true, 'resizeEnabled': true, 'shading': true, 'shadingColor': 'transparent', 'fullScreen': false, 'width': 800, 'height': 544, 'container': $context.$data.container($element), 'position': { 'of': $context.$data.container($element) }, 'onHidden': function () { $context.$data.data.value(null); }, 'focusStateEnabled': false }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxLoadIndicator: { visible: true }', function ($context, $element) { return { 'dxLoadIndicator': function () { return { 'visible': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { text: okButtonText(), onClick: okButtonHandler, disabled: isLoading }', function ($context, $element) { return { 'dxButton': function () { return { 'text': $context.$data.okButtonText(), 'onClick': $context.$data.okButtonHandler, 'disabled': $context.$data.isLoading }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextArea: { value: value, valueChangeEvent: \'keyup\', readOnly: true }', function ($context, $element) { return { 'dxTextArea': function () { return { 'value': $context.$data.value, 'valueChangeEvent': 'keyup', 'readOnly': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxAceEditor: { value: value, options: aceOptions, additionalOptions: additionalOptions }', function ($context, $element) { return { 'dxAceEditor': function () { return { 'value': $context.$data.value, 'options': $context.$data.aceOptions, 'additionalOptions': $context.$data.additionalOptions }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: data && !isLoading()', function ($context, $element) { return { 'if': function () { return $context.$data.data && !$context.$data.isLoading(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: template, data: data }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.template, 'data': $context.$data.data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { class: \'dxd-tableview-title-cell dxd-border-secondary dxd-tableview-resizable\' }', function ($context, $element) { return { 'attr': function () { return { 'class': 'dxd-tableview-title-cell dxd-border-secondary dxd-tableview-resizable' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: name', function ($context, $element) { return { 'text': function () { return $context.$data.name; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { direction: \'both\', scrollByContent: false, showScrollbar: \'always\', scrollByThumb: true, bounceEnabled: false, useNative: false, onScroll: $data.onDataScroll, onInitialized: $data.onDataScrollInitialized }', function ($context, $element) { return { 'dxScrollView': function () { return { 'direction': 'both', 'scrollByContent': false, 'showScrollbar': 'always', 'scrollByThumb': true, 'bounceEnabled': false, 'useNative': false, 'onScroll': $context.$data.onDataScroll, 'onInitialized': $context.$data.onDataScrollInitialized }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data, attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }', function ($context, $element) { return { 'text': function () { return $context.$data; }, 'attr': function () { return { 'class': 'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable' + $context.$index() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $parents[1].getImageTooLargeText($data), attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }', function ($context, $element) { return { 'text': function () { return $context.$parents[1].getImageTooLargeText($context.$data); }, 'attr': function () { return { 'class': 'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable' + $context.$index() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }', function ($context, $element) { return { 'attr': function () { return { 'class': 'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable' + $context.$index() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { src: \'data:image/bmp;base64,\' + $data }', function ($context, $element) { return { 'attr': function () { return { 'src': 'data:image/bmp;base64,' + $context.$data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: noDataText()', function ($context, $element) { return { 'text': function () { return $context.$data.noDataText(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: rtl ? data.schema.reverse() : data.schema', function ($context, $element) { return { 'foreach': function () { return $context.$data.rtl ? $context.$data.data.schema.reverse() : $context.$data.data.schema; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: data.values', function ($context, $element) { return { 'if': function () { return $context.$data.data.values; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: data.values', function ($context, $element) { return { 'foreach': function () { return $context.$data.data.values; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: $parent.rtl ? $data.reverse() : $data', function ($context, $element) { return { 'foreach': function () { return $context.$parent.rtl ? $context.$data.reverse() : $context.$data; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $parents[1].isImage($index())', function ($context, $element) { return { 'ifnot': function () { return $context.$parents[1].isImage($context.$index()); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $parents[1].isImage($index())', function ($context, $element) { return { 'if': function () { return $context.$parents[1].isImage($context.$index()); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $parents[1].isImageTooLarge($data)', function ($context, $element) { return { 'if': function () { return $context.$parents[1].isImageTooLarge($context.$data); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $parents[1].isImageTooLarge($data)', function ($context, $element) { return { 'ifnot': function () { return $context.$parents[1].isImageTooLarge($context.$data); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: data.values[0]', function ($context, $element) { return { 'foreach': function () { return $context.$data.data.values[0]; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: data.values', function ($context, $element) { return { 'ifnot': function () { return $context.$data.data.values; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treelist: treeListOptions', function ($context, $element) { return { 'treelist': function () { return $context.$data.treeListOptions; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treeListSearchPanel: { controllers: $data.fieldListModel.treeListOptions().treeListController }', function ($context, $element) { return { 'treeListSearchPanel': function () { return { 'controllers': $context.$data.fieldListModel.treeListOptions().treeListController }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', scrollByContent: false, scrollByThumb: true, bounceEnabled: false, useNative: false }', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'scrollByContent': false, 'scrollByThumb': true, 'bounceEnabled': false, 'useNative': false }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCollectionEditor: $data', function ($context, $element) { return { 'dxCollectionEditor': function () { return $context.$data; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dx-image-expanded\': !collapsed() }, template: \'dxrd-svg-collapsed\'', function ($context, $element) { return { 'css': function () { return { 'dx-image-expanded': !$context.$data.collapsed() }; }, 'template': function () { return 'dxrd-svg-collapsed'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization($parent.name), attr: { title: $root.getLocalization($parent.name) }', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization($context.$parent.name); }, 'attr': function () { return { 'title': $context.$root.getLocalization($context.$parent.name) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPropertyGrid: { target: value, level: 1, parentDisabled: editor.disabled }', function ($context, $element) { return { 'dxPropertyGrid': function () { return { 'target': $context.$data.value, 'level': 1, 'parentDisabled': $context.$data.editor.disabled }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: properties.getEditors()', function ($context, $element) { return { 'foreach': function () { return $context.$data.properties.getEditors(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: "dxqb-fieldlist-wrapper", data: fieldListModel }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxqb-fieldlist-wrapper', 'data': $context.$data.fieldListModel }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('click: $root.findControl', function ($context, $element) { return { 'click': function () { return $context.$root.findControl; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: {name: \'dxqb-toolbar-items\', data: actionLists.toolbarItems }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxqb-toolbar-items', 'data': $context.$data.actionLists.toolbarItems }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: {name: ko.unwrap($data.imageTemplateName), if: !!ko.unwrap($data.imageTemplateName)}, attr: { class: \'dxrd-toolbar-item-image dxd-icon-highlighted dxd-state-normal \' + (ko.unwrap($data.imageClassName) || \'\'), title: $data.displayText && $data.displayText() || text }, dxclick: function() { if((typeof $data.disabled === \'function\') && !disabled() || !disabled) { clickAction($root.model && $root.model()); } }, css: {\'dxrd-disabled-button\': disabled, \'dxd-state-active\': $data.selected }', function ($context, $element) { return { 'template': function () { return { 'name': $context.ko.unwrap($context.$data.imageTemplateName), 'if': !!$context.ko.unwrap($context.$data.imageTemplateName) }; }, 'attr': function () { return { 'class': 'dxrd-toolbar-item-image dxd-icon-highlighted dxd-state-normal ' + ($context.ko.unwrap($context.$data.imageClassName) || ''), 'title': $context.$data.displayText && $context.$data.displayText() || $context.$data.text }; }, 'dxclick': function () { return function () { if ((typeof $context.$data.disabled === 'function') && !$context.$data.disabled() || !$context.$data.disabled) {
        $context.$data.clickAction($context.$root.model && $context.$root.model());
    } }; }, 'css': function () { return { 'dxrd-disabled-button': $context.$data.disabled, 'dxd-state-active': $context.$data.selected }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('lazy: { template: templateName }', function ($context, $element) { return { 'lazy': function () { return { 'template': $context.$data.templateName }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxExpressionEditor: getOptions({ options: value, fieldListProvider: $root.parametersBindingsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() })', function ($context, $element) { return { 'dxExpressionEditor': function () { return $context.$data.getOptions({ 'options': $context.$data.value, 'fieldListProvider': $context.$root.parametersBindingsProvider, 'displayNameProvider': $context.$root.displayNameProvider && $context.$root.displayNameProvider() }); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: target.isEditable', function ($context, $element) { return { 'visible': function () { return $context.$data.target.isEditable; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: target._parameterName, onFocusOut: function() { target.createParameter(); target.isEditable(false); } }', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data.target._parameterName, 'onFocusOut': function () { $context.$data.target.createParameter(); $context.$data.target.isEditable(false); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: target.parameterName, dxclick: showPopup, css: { \'dxd-state-selected\': target.isSelected, \'default\': target.isDefaultTextDisplayed() }, visible: $data.target.isEditable() === false', function ($context, $element) { return { 'text': function () { return $context.$data.target.parameterName; }, 'dxclick': function () { return $context.$data.showPopup; }, 'css': function () { return { 'dxd-state-selected': $context.$data.target.isSelected, 'default': $context.$data.target.isDefaultTextDisplayed() }; }, 'visible': function () { return $context.$data.target.isEditable() === false; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: name, attr: { \'title\': name }, click: function() { $parents[1].click($data); }', function ($context, $element) { return { 'text': function () { return $context.$data.name; }, 'attr': function () { return { 'title': $context.$data.name }; }, 'click': function () { return function () { $context.$parents[1].click($context.$data); }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $parent.viewModel.defaultDisplay(), click: function() { $parent.viewModel.isEditable(true); $parent.viewModel._parameterName(\'\'); $parent.visible(false); }', function ($context, $element) { return { 'text': function () { return $context.$parent.viewModel.defaultDisplay(); }, 'click': function () { return function () { $context.$parent.viewModel.isEditable(true); $context.$parent.viewModel._parameterName(''); $context.$parent.visible(false); }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: name, click: function() { $parent.click($data); }', function ($context, $element) { return { 'text': function () { return $context.$data.name; }, 'click': function () { return function () { $context.$parent.click($context.$data); }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $parent.viewModel.canCreateParameters', function ($context, $element) { return { 'if': function () { return $context.$parent.viewModel.canCreateParameters; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('event: { dblclick: function() { $data.dblClickHandler ? $data.dblClickHandler($data) : $data.toggleCollapsed() } }, styleunit: padding, css: { \'dx-treelist-item-selected dxd-state-selected\': isSelected() || isMultiSelected() }', function ($context, $element) { return { 'event': function () { return { 'dblclick': function () { $context.$data.dblClickHandler ? $context.$data.dblClickHandler($context.$data) : $context.$data.toggleCollapsed(); } }; }, 'styleunit': function () { return $context.$data.padding; }, 'css': function () { return { 'dx-treelist-item-selected dxd-state-selected': $context.$data.isSelected() || $context.$data.isMultiSelected() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: "dxqb-treelist-header-item-with-search"', function ($context, $element) { return { 'template': function () { return 'dxqb-treelist-header-item-with-search'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: $data._extendCssClass(\'type-page\')', function ($context, $element) { return { 'css': function () { return $context.$data._extendCssClass('type-page'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('event: { click: $parent._itemClick, dblclick: function() { $parent._goToNextPage() } }, attr: { class: \'dxd-back-highlighted dxd-state-normal dxrd-wizard-type-item dx-fontsize-reestablished dxrd-wizard-type-item-border-color dxd-list-item-back-color \' + $parent._extendCssClass(\'type-item\')}, css: { \'dxd-border-secondary dxd-back-secondary\': $parent._IsSelected($data) }', function ($context, $element) { return { 'event': function () { return { 'click': $context.$parent._itemClick, 'dblclick': function () { $context.$parent._goToNextPage(); } }; }, 'attr': function () { return { 'class': 'dxd-back-highlighted dxd-state-normal dxrd-wizard-type-item dx-fontsize-reestablished dxrd-wizard-type-item-border-color dxd-list-item-back-color ' + $context.$parent._extendCssClass('type-item') }; }, 'css': function () { return { 'dxd-border-secondary dxd-back-secondary': $context.$parent._IsSelected($context.$data) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { class: \'dxrd-wizard-type-image \' + $parent._extendCssClass(\'type-image\') }, css: imageClassName, template: imageTemplateName', function ($context, $element) { return { 'attr': function () { return { 'class': 'dxrd-wizard-type-image ' + $context.$parent._extendCssClass('type-image') }; }, 'css': function () { return $context.$data.imageClassName; }, 'template': function () { return $context.$data.imageTemplateName; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('searchHighlighting: { text: text, textToSearch: $parent._textToSearch }, attr: { title: text }, css: $parent._extendCssClass(\'type-text\')', function ($context, $element) { return { 'searchHighlighting': function () { return { 'text': $context.$data.text, 'textToSearch': $context.$parent._textToSearch }; }, 'attr': function () { return { 'title': $context.$data.text }; }, 'css': function () { return $context.$parent._extendCssClass('type-text'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: text, attr: { title: text }, css: $parent._extendCssClass(\'type-text\')', function ($context, $element) { return { 'text': function () { return $context.$data.text; }, 'attr': function () { return { 'title': $context.$data.text }; }, 'css': function () { return $context.$parent._extendCssClass('type-text'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: typeItems', function ($context, $element) { return { 'foreach': function () { return $context.$data.typeItems; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-page-choose-type-item\'', function ($context, $element) { return { 'template': function () { return 'dxrd-page-choose-type-item'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !!$parent._textToSearch', function ($context, $element) { return { 'if': function () { return !!$context.$parent._textToSearch; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: !!$parent._textToSearch', function ($context, $element) { return { 'ifnot': function () { return !!$context.$parent._textToSearch; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treeListSearchPanel: {controllers: ko.unwrap(_fieldListModel).treeListController}', function ($context, $element) { return { 'treeListSearchPanel': function () { return { 'controllers': $context.ko.unwrap($context.$data._fieldListModel).treeListController }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight }', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'height': $context.$data._scrollViewHeight }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treelist: _fieldListModel', function ($context, $element) { return { 'treelist': function () { return $context.$data._fieldListModel; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxLoadPanel: _loadPanelViewModel($element)', function ($context, $element) { return { 'dxLoadPanel': function () { return $context.$data._loadPanelViewModel($element); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName , disabled: $data.disabled && $data.disabled() }, attr: { title: text }', function ($context, $element) { return { 'dxButtonWithTemplate': function () { return { 'onClick': function () { $context.$data.clickAction($context.$parent); }, 'icon': $context.$data.imageTemplateName, 'iconClass': $context.$data.imageClassName, 'disabled': $context.$data.disabled && $context.$data.disabled() }; }, 'attr': function () { return { 'title': $context.$data.text }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-popover-list-items\', data: ko.utils.extend($parent.data, { className: \'dxrd-federation-addqueries-popover\', position: $root.rtl ? \'right\' : \'left\', popupContainer: $root.getPopupContainer, width: 150 }) }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-popover-list-items', 'data': $context.ko.utils.extend($context.$parent.data, { 'className': 'dxrd-federation-addqueries-popover', 'position': $context.$root.rtl ? 'right' : 'left', 'popupContainer': $context.$root.getPopupContainer, 'width': 150 }) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('resizable: gridResizeHelper.resizable($root.resizeHandler, \'s\')', function ($context, $element) { return { 'resizable': function () { return $context.$data.gridResizeHelper.resizable($context.$root.resizeHandler, 's'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxQueryBuilderSurface: queryBuilderSurfaceCreator', function ($context, $element) { return { 'dxQueryBuilderSurface': function () { return $context.$data.queryBuilderSurfaceCreator; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxdAccordion: { collapsed: joinResultCollapsed }', function ($context, $element) { return { 'dxdAccordion': function () { return { 'collapsed': $context.$data.joinResultCollapsed }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !joinResultCollapsed() }', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-collapsed'; }, 'css': function () { return { 'dx-image-expanded': !$context.$data.joinResultCollapsed() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'Join result\', \'DataAccessUIStringId.FederationDataSourceQueryBuilder_SelectResult\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('Join result', 'DataAccessUIStringId.FederationDataSourceQueryBuilder_SelectResult'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: { height: resultGridHeight }', function ($context, $element) { return { 'style': function () { return { 'height': $context.$data.resultGridHeight }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { icon: \'add\', disabled: addRowDisabled, onClick:addRow }', function ($context, $element) { return { 'dxButton': function () { return { 'icon': 'add', 'disabled': $context.$data.addRowDisabled, 'onClick': $context.$data.addRow }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxDataGrid: columnsGrid', function ($context, $element) { return { 'dxDataGrid': function () { return $context.$data.columnsGrid; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: cellInfo.column', function ($context, $element) { return { 'text': function () { return $context.$data.cellInfo.column; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxDropDownBox: { dataSource: $data.allColumns, dropDownOptions: { container: $root.getPopupContainer($element), width:  $root.calculateWithZoomFactor(357)  }, popupPosition: { boundary: $root.getPopupContainer($element) }, value: cellInfo.key, valueExpr: \'key\', displayExpr: \'column\' }, visible: !$data.isExpression()', function ($context, $element) { return { 'dxDropDownBox': function () { return { 'dataSource': $context.$data.allColumns, 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element), 'width': $context.$root.calculateWithZoomFactor(357) }, 'popupPosition': { 'boundary': $context.$root.getPopupContainer($element) }, 'value': $context.$data.cellInfo.key, 'valueExpr': 'key', 'displayExpr': 'column' }; }, 'visible': function () { return !$context.$data.isExpression(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxDataGrid: { dataSource: $data.allColumns, keyExpr: \'key\', remoteOperations: true, height: $root.calculateWithZoomFactor(250), columns: [{ dataField: \'column\', sortOrder: \'asc\' } , { dataField: \'table\'}], hoverStateEnabled: true, selection: { mode: \'single\' }, selectedRowKeys: [cellInfo.key], focusedRowEnabled: true, focusedRowKey: cellInfo.key, onSelectionChanged: $data.changeColumn }', function ($context, $element) { return { 'dxDataGrid': function () { return { 'dataSource': $context.$data.allColumns, 'keyExpr': 'key', 'remoteOperations': true, 'height': $context.$root.calculateWithZoomFactor(250), 'columns': [{ 'dataField': 'column', 'sortOrder': 'asc' }, { 'dataField': 'table' }], 'hoverStateEnabled': true, 'selection': { 'mode': 'single' }, 'selectedRowKeys': [$context.$data.cellInfo.key], 'focusedRowEnabled': true, 'focusedRowKey': $context.$data.cellInfo.key, 'onSelectionChanged': $context.$data.changeColumn }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxExpressionEditor: { options: expression, fieldListProvider: itemsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() }, visible: $data.isExpression', function ($context, $element) { return { 'dxExpressionEditor': function () { return { 'options': $context.$data.expression, 'fieldListProvider': $context.$data.itemsProvider, 'displayNameProvider': $context.$root.displayNameProvider && $context.$root.displayNameProvider() }; }, 'visible': function () { return $context.$data.isExpression; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-wizard-menu-box-editorswitch\', data: $data }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-wizard-menu-box-editorswitch', 'data': $context.$data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data.transformGridTitle', function ($context, $element) { return { 'text': function () { return $context.$data.transformGridTitle; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxDataGrid: transformGrid', function ($context, $element) { return { 'dxDataGrid': function () { return $context.$data.transformGrid; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxdAccordion: { collapsed: transformResultCollapsed }', function ($context, $element) { return { 'dxdAccordion': function () { return { 'collapsed': $context.$data.transformResultCollapsed }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !transformResultCollapsed() }', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-collapsed'; }, 'css': function () { return { 'dx-image-expanded': !$context.$data.transformResultCollapsed() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data.transformResultGridTitle', function ($context, $element) { return { 'text': function () { return $context.$data.transformResultGridTitle; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treelist: resultFieldListModel', function ($context, $element) { return { 'treelist': function () { return $context.$data.resultFieldListModel; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCheckBox: transform', function ($context, $element) { return { 'dxCheckBox': function () { return $context.$data.transform; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { showTitle: true, title: title(), wrapperAttr: { class: cssClass }, visible: popupVisible, toolbarItems: buttonItems, showCloseButton: true, fullScreen: false, maxHeight: maxHeight, height: height, width: width, onShowing: function(e) { $data.loaded(true); }, rtlEnabled: rtl, onHiding: onHiding, container: getPopupContainer($element), position: { of: getPopupContainer($element)}, resizeEnabled: true, minHeight: 450, minWidth: 650 }', function ($context, $element) { return { 'dxPopup': function () { return { 'showTitle': true, 'title': $context.$data.title(), 'wrapperAttr': { 'class': $context.$data.cssClass }, 'visible': $context.$data.popupVisible, 'toolbarItems': $context.$data.buttonItems, 'showCloseButton': true, 'fullScreen': false, 'maxHeight': $context.$data.maxHeight, 'height': $context.$data.height, 'width': $context.$data.width, 'onShowing': function (e) { $context.$data.loaded(true); }, 'rtlEnabled': $context.$data.rtl, 'onHiding': $context.$data.onHiding, 'container': $context.$data.getPopupContainer($element), 'position': { 'of': $context.$data.getPopupContainer($element) }, 'resizeEnabled': true, 'minHeight': 450, 'minWidth': 650 }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('resizable: resizeHelper.resizable($root.resizeHandler, \'e\')', function ($context, $element) { return { 'resizable': function () { return $context.$data.resizeHelper.resizable($context.$root.resizeHandler, 'e'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treelist: fieldListModel', function ($context, $element) { return { 'treelist': function () { return $context.$data.fieldListModel; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxDataGrid: sourcesGrid', function ($context, $element) { return { 'dxDataGrid': function () { return $context.$data.sourcesGrid; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxDataGrid: aliasGrid', function ($context, $element) { return { 'dxDataGrid': function () { return $context.$data.aliasGrid; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: loaded', function ($context, $element) { return { 'if': function () { return $context.$data.loaded; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: popupContentTemplate }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.popupContentTemplate }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dx-rtl\': $root.rtl, \'dx-ltr\': !$root.rtl }', function ($context, $element) { return { 'css': function () { return { 'dx-rtl': $context.$root.rtl, 'dx-ltr': !$context.$root.rtl }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: _extendCssClass', function ($context, $element) { return { 'css': function () { return $context.$data._extendCssClass; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: $data.navigationPanel().isVisible', function ($context, $element) { return { 'visible': function () { return $context.$data.navigationPanel().isVisible; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: _description(), attr: {\'title\': _description() }', function ($context, $element) { return { 'text': function () { return $context.$data._description(); }, 'attr': function () { return { 'title': $context.$data._description() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: _steps', function ($context, $element) { return { 'foreach': function () { return $context.$data._steps; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: $data.visible', function ($context, $element) { return { 'visible': function () { return $context.$data.visible; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('click: $data.clickAction, text: $data.text, attr: {\'title\': $data.text }, css: { \'dxrd-disabled\': $data.disabled, \'dxd-back-secondary\': $data.isActive() }', function ($context, $element) { return { 'click': function () { return $context.$data.clickAction; }, 'text': function () { return $context.$data.text; }, 'attr': function () { return { 'title': $context.$data.text }; }, 'css': function () { return { 'dxrd-disabled': $context.$data.disabled, 'dxd-back-secondary': $context.$data.isActive() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: $data.isActive', function ($context, $element) { return { 'visible': function () { return $context.$data.isActive; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'withoutPanel\': !$data.navigationPanel().isVisible() }', function ($context, $element) { return { 'css': function () { return { 'withoutPanel': !$context.$data.navigationPanel().isVisible() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: _pageDescription()', function ($context, $element) { return { 'text': function () { return $context.$data._pageDescription(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: template, data: page }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.template, 'data': $context.$data.page }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: cancelButton', function ($context, $element) { return { 'dxButton': function () { return $context.$data.cancelButton; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: finishButton', function ($context, $element) { return { 'dxButton': function () { return $context.$data.finishButton; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: nextButton', function ($context, $element) { return { 'dxButton': function () { return $context.$data.nextButton; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: previousButton', function ($context, $element) { return { 'dxButton': function () { return $context.$data.previousButton; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: _sections, css: _className, styleunit: { top: _parentMarginOffset, left: _parentMarginOffset, right: _parentMarginOffset, bottom: _parentMarginOffset }', function ($context, $element) { return { 'foreach': function () { return $context.$data._sections; }, 'css': function () { return $context.$data._className; }, 'styleunit': function () { return { 'top': $context.$data._parentMarginOffset, 'left': $context.$data._parentMarginOffset, 'right': $context.$data._parentMarginOffset, 'bottom': $context.$data._parentMarginOffset }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dxrd-disabled\': !$data.page() }, style: $parent._pageCss[$data.pageId]', function ($context, $element) { return { 'css': function () { return { 'dxrd-disabled': !$context.$data.page() }; }, 'style': function () { return $context.$parent._pageCss[$context.$data.pageId]; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: $parent._showPageDescription(), text: $parent._getPageDescription($index(), $data), attr: { title: $parent._getPageDescription($index(), $data) }', function ($context, $element) { return { 'visible': function () { return $context.$parent._showPageDescription(); }, 'text': function () { return $context.$parent._getPageDescription($context.$index(), $context.$data); }, 'attr': function () { return { 'title': $context.$parent._getPageDescription($context.$index(), $context.$data) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: $parent.metadata.template, data: page }, dxScrollView: { showScrollbar: \'onHover\'}', function ($context, $element) { return { 'template': function () { return { 'name': $context.$parent.metadata.template, 'data': $context.$data.page }; }, 'dxScrollView': function () { return { 'showScrollbar': 'onHover' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: metadata.disabledText', function ($context, $element) { return { 'text': function () { return $context.$data.metadata.disabledText; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data && $data.isVisible()', function ($context, $element) { return { 'if': function () { return $context.$data && $context.$data.isVisible(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: navigationPanel', function ($context, $element) { return { 'with': function () { return $context.$data.navigationPanel; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: _currentPage', function ($context, $element) { return { 'with': function () { return $context.$data._currentPage; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data._sections.length > 0', function ($context, $element) { return { 'if': function () { return $context.$data._sections.length > 0; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.page() !== null', function ($context, $element) { return { 'if': function () { return $context.$data.page() !== null; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: page', function ($context, $element) { return { 'with': function () { return $context.$data.page; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.page() === null', function ($context, $element) { return { 'if': function () { return $context.$data.page() === null; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: _rootElementTitle', function ($context, $element) { return { 'text': function () { return $context.$data._rootElementTitle; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxSelectBox: { dataSource: _rootElementList, value: _selectedRootElement, displayExpr: \'fullPath\', displayCustomValue: true, useItemTextAsTitle: true, dropDownOptions: { container: $root.getPopupContainer($element) } }', function ($context, $element) { return { 'dxSelectBox': function () { return { 'dataSource': $context.$data._rootElementList, 'value': $context.$data._selectedRootElement, 'displayExpr': 'fullPath', 'displayCustomValue': true, 'useItemTextAsTitle': true, 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element) } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }, dxValidationGroup: $data._validationGroup || {}', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'useNative': false, 'scrollByThumb': true }; }, 'dxValidationGroup': function () { return $context.$data._validationGroup || {}; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: _jsonConnectionTitle, attr: { \'title\': _jsonConnectionTitle }', function ($context, $element) { return { 'text': function () { return $context.$data._jsonConnectionTitle; }, 'attr': function () { return { 'title': $context.$data._jsonConnectionTitle }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: _connectionName }, dxValidator: { validationRules: $data._connectionNameValidationRules || [] }', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data._connectionName }; }, 'dxValidator': function () { return { 'validationRules': $context.$data._connectionNameValidationRules || [] }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: _jsonSourceTitle, attr: { \'title\': _jsonSourceTitle }', function ($context, $element) { return { 'text': function () { return $context.$data._jsonSourceTitle; }, 'attr': function () { return { 'title': $context.$data._jsonSourceTitle }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxLocalizedSelectBox: { dataSource: _sources, value: _selectedSource, valueExpr:\'value\', displayExpr: \'displayValue\', displayCustomValue: true, dropDownOptions: { container: $root.getPopupContainer($element) } }', function ($context, $element) { return { 'dxLocalizedSelectBox': function () { return { 'dataSource': $context.$data._sources, 'value': $context.$data._selectedSource, 'valueExpr': 'value', 'displayExpr': 'displayValue', 'displayCustomValue': true, 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element) } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxValidationGroup: $data.validationGroup || {}', function ($context, $element) { return { 'dxValidationGroup': function () { return $context.$data.validationGroup || {}; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: $data.cssClass', function ($context, $element) { return { 'css': function () { return $context.$data.cssClass; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxValidationSummary: $data.validationSummary || {}, visible: $data.validationSummary && !isValid()', function ($context, $element) { return { 'dxValidationSummary': function () { return $context.$data.validationSummary || {}; }, 'visible': function () { return $context.$data.validationSummary && !$context.$data.isValid(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxValidationSummary: $data._validationSummary || {}, visible: $data._validationSummary && _selectedSource().validationSummary && !canNext()', function ($context, $element) { return { 'dxValidationSummary': function () { return $context.$data._validationSummary || {}; }, 'visible': function () { return $context.$data._validationSummary && $context.$data._selectedSource().validationSummary && !$context.$data.canNext(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: _selectedSource', function ($context, $element) { return { 'with': function () { return $context.$data._selectedSource; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-propertieseditor\', data: grid }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-propertieseditor', 'data': $context.$data.grid }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxRadioGroup: { value: selectedDataSourceOperation, items: dataSourceOperations, layout: \'vertical\' }', function ($context, $element) { return { 'dxRadioGroup': function () { return { 'value': $context.$data.selectedDataSourceOperation, 'items': $context.$data.dataSourceOperations, 'layout': 'vertical' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: text, attr: { \'title\': text }', function ($context, $element) { return { 'text': function () { return $context.$data.text; }, 'attr': function () { return { 'title': $context.$data.text }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxList: { dataSource: availableDataSources, selectedItems: selectedDataSource, focusStateEnabled:false, editEnabled: true, height: dataSourcesListHeight, editConfig: { selectionEnabled: false }, selectionMode: \'single\', activeStateEnabled: false, disabled: createNewDataSource, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true }', function ($context, $element) { return { 'dxList': function () { return { 'dataSource': $context.$data.availableDataSources, 'selectedItems': $context.$data.selectedDataSource, 'focusStateEnabled': false, 'editEnabled': true, 'height': $context.$data.dataSourcesListHeight, 'editConfig': { 'selectionEnabled': false }, 'selectionMode': 'single', 'activeStateEnabled': false, 'disabled': $context.$data.createNewDataSource, 'noDataText': $context.$root.dx._static.noDataText(), 'encodeNoDataText': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: isDataSourceCreationAvailable', function ($context, $element) { return { 'if': function () { return $context.$data.isDataSourceCreationAvailable; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTemplate : { name: \'item\' }', function () { return { dxTemplate: { name: 'item' } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxRadioGroup: { value: selectedOperation, items: operations, layout: \'vertical\' }', function ($context, $element) { return { 'dxRadioGroup': function () { return { 'value': $context.$data.selectedOperation, 'items': $context.$data.operations, 'layout': 'vertical' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { top: $data.canCreateNew() ? 65 : 0 }', function ($context, $element) { return { 'styleunit': function () { return { 'top': $context.$data.canCreateNew() ? 65 : 0 }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxList: { dataSource: items, onSelectionChanged: function(e) { selectedItems(e.addedItems) }, selectedItems: selectedItems.peek(), hoverStateEnabled:false, editEnabled: true, height: \'100%\', editConfig: { selectionEnabled: false }, searchExpr: \'name\', searchEnabled: true, selectionMode: \'single\', activeStateEnabled: false, disabled: _createNew, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true, searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }', function ($context, $element) { return { 'dxList': function () { return { 'dataSource': $context.$data.items, 'onSelectionChanged': function (e) { $context.$data.selectedItems(e.addedItems); }, 'selectedItems': $context.$data.selectedItems.peek(), 'hoverStateEnabled': false, 'editEnabled': true, 'height': '100%', 'editConfig': { 'selectionEnabled': false }, 'searchExpr': 'name', 'searchEnabled': true, 'selectionMode': 'single', 'activeStateEnabled': false, 'disabled': $context.$data._createNew, 'noDataText': $context.$root.dx._static.noDataText(), 'encodeNoDataText': true, 'searchEditorOptions': { 'placeholder': $context.$root.dx._static.searchPlaceholder() } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('event: { dblclick: function(e){ $parent.onDblClick() } }', function ($context, $element) { return { 'event': function () { return { 'dblclick': function (e) { $context.$parent.onDblClick(); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $parent._displayExpr($data)', function ($context, $element) { return { 'text': function () { return $context.$parent._displayExpr($context.$data); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrd-page-selectitems-radio-group\', data: $data }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-page-selectitems-radio-group', 'data': $context.$data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrd-page-selectitems-list\', data: $data }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-page-selectitems-list', 'data': $context.$data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: canCreateNew', function ($context, $element) { return { 'if': function () { return $context.$data.canCreateNew; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !_createNew()', function ($context, $element) { return { 'if': function () { return !$context.$data._createNew(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: _createNew', function ($context, $element) { return { 'if': function () { return $context.$data._createNew; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrd-page-jsonsource\', data: _specifySourceData }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-page-jsonsource', 'data': $context.$data._specifySourceData }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxLocalizedSelectBox: { dataSource: _parameterTypes, value: itemType, valueExpr:\'value\', displayExpr: \'displayValue\', displayCustomValue: true, dropDownOptions: { container: $root.getPopupContainer($element) } }', function ($context, $element) { return { 'dxLocalizedSelectBox': function () { return { 'dataSource': $context.$data._parameterTypes, 'value': $context.$data.itemType, 'valueExpr': 'value', 'displayExpr': 'displayValue', 'displayCustomValue': true, 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element) } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: name, placeholder: $data.namePlaceholder() }, dxValidator: { validationRules: $parent.editor.editorOptions.nameValidationRules || [] }', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data.name, 'placeholder': $context.$data.namePlaceholder() }; }, 'dxValidator': function () { return { 'validationRules': $context.$parent.editor.editorOptions.nameValidationRules || [] }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: _editingValue, placeholder: $data.valuePlaceholder() }, visible: !$data.isExpression()', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data._editingValue, 'placeholder': $context.$data.valuePlaceholder() }; }, 'visible': function () { return !$context.$data.isExpression(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxExpressionEditor: { options: _expression, fieldListProvider: $parent.editor.editorOptions.itemsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() }, visible: $data.isExpression', function ($context, $element) { return { 'dxExpressionEditor': function () { return { 'options': $context.$data._expression, 'fieldListProvider': $context.$parent.editor.editorOptions.itemsProvider, 'displayNameProvider': $context.$root.displayNameProvider && $context.$root.displayNameProvider() }; }, 'visible': function () { return $context.$data.isExpression; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxFileImagePicker: { value: value, placeholderId: \'File\', accept:\'.json,.txt\' }', function ($context, $element) { return { 'dxFileImagePicker': function () { return { 'value': $context.$data.value, 'placeholderId': 'File', 'accept': '.json,.txt' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextArea: { value: value, spellcheck: false, isValid: isValid }, dxValidator: $data.validator || { validationRules: jsonStringValidationRules || [] }', function ($context, $element) { return { 'dxTextArea': function () { return { 'value': $context.$data.value, 'spellcheck': false, 'isValid': $context.$data.isValid }; }, 'dxValidator': function () { return $context.$data.validator || { 'validationRules': $context.$data.jsonStringValidationRules || [] }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxAceEditor: { value: value, editorContainer: editorContainer, options: aceOptions, additionalOptions: additionalOptions }, css: { \'dx-invalid\' : !value() || !isValid() }', function ($context, $element) { return { 'dxAceEditor': function () { return { 'value': $context.$data.value, 'editorContainer': $context.$data.editorContainer, 'options': $context.$data.aceOptions, 'additionalOptions': $context.$data.additionalOptions }; }, 'css': function () { return { 'dx-invalid': !$context.$data.value() || !$context.$data.isValid() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButtonWithTemplate: { onClick: uploadFile, hint: $data.getUploadTitle(), icon: \'dxrd-svg-wizard-Download\' }', function ($context, $element) { return { 'dxButtonWithTemplate': function () { return { 'onClick': $context.$data.uploadFile, 'hint': $context.$data.getUploadTitle(), 'icon': 'dxrd-svg-wizard-Download' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: padding, css: { \'dx-treelist-item-selected dxd-state-selected dxd-back-secondary\': isSelected }', function ($context, $element) { return { 'styleunit': function () { return $context.$data.padding; }, 'css': function () { return { 'dx-treelist-item-selected dxd-state-selected dxd-back-secondary': $context.$data.isSelected }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: nodeImageClass', function ($context, $element) { return { 'css': function () { return $context.$data.nodeImageClass; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName, disabled: $data.disabled && $data.disabled() }, attr: { title: text }', function ($context, $element) { return { 'dxButtonWithTemplate': function () { return { 'onClick': function () { $context.$data.clickAction($context.$parent); }, 'icon': $context.$data.imageTemplateName, 'iconClass': $context.$data.imageClassName, 'disabled': $context.$data.disabled && $context.$data.disabled() }; }, 'attr': function () { return { 'title': $context.$data.text }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCheckBox: { value: data.checked }, click: function(treeNode, e) { treeNode.data.toggleChecked(); e.stopPropagation(); return true; }', function ($context, $element) { return { 'dxCheckBox': function () { return { 'value': $context.$data.data.checked }; }, 'click': function () { return function (treeNode, e) { treeNode.data.toggleChecked(); e.stopPropagation(); return true; }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: queryName }', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data.queryName }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $data.disableCustomSql', function ($context, $element) { return { 'ifnot': function () { return $context.$data.disableCustomSql; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxqb-popup-selectStatment\', data: _popupSelectStatement }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxqb-popup-selectStatment', 'data': $context.$data._popupSelectStatement }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrd-querybuilder-popup\', data: _popupQueryBuilder }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-querybuilder-popup', 'data': $context.$data._popupQueryBuilder }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !!$data._fieldListModel()', function ($context, $element) { return { 'if': function () { return !!$context.$data._fieldListModel(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data._relationsEditor()', function ($context, $element) { return { 'if': function () { return $context.$data._relationsEditor(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrd-masterDetail-editor-complete-wizard\', data: $data._relationsEditor }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-masterDetail-editor-complete-wizard', 'data': $context.$data._relationsEditor }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopupWithAutoHeight: { height: \'235px\', focusStateEnabled: false, position: $root.rtl ? { my: \'right top\', at: \'right bottom\', of: popupService.target, collision: \'flipfit\' } : { my: \'left top\', at: \'left bottom\', of: popupService.target, collision: \'flipfit\' }, wrapperAttr: { class: \'dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay\' }, container: $root.getPopupContainer($element), target: popupService.target, showTitle: false, showCloseButton: false, animation: {}, hideOnOutsideClick: true, shading: false, minWidth:\'170px\', maxWidth:\'500px\', width: \'auto\', visible: popupService.visible }', function ($context, $element) { return { 'dxPopupWithAutoHeight': function () { return { 'height': '235px', 'focusStateEnabled': false, 'position': $context.$root.rtl ? { 'my': 'right top', 'at': 'right bottom', 'of': $context.$data.popupService.target, 'collision': 'flipfit' } : { 'my': 'left top', 'at': 'left bottom', 'of': $context.$data.popupService.target, 'collision': 'flipfit' }, 'wrapperAttr': { 'class': 'dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay' }, 'container': $context.$root.getPopupContainer($element), 'target': $context.$data.popupService.target, 'showTitle': false, 'showCloseButton': false, 'animation': {}, 'hideOnOutsideClick': true, 'shading': false, 'minWidth': '170px', 'maxWidth': '500px', 'width': 'auto', 'visible': $context.$data.popupService.visible }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, wrapperAttr: { class: \'dxqb-preview\' }, visible: isVisible, title: title(), showTitle: true, resizeEnabled: true, shading: true, shadingColor: \'transparent\', fullScreen: false, width: 800, height: 544, container: closest($element, \'.dxrd-wizard\'), position: { of: closest($element, \'.dx-designer-viewport\') }, onHidden: function() { $data.data(null) }, focusStateEnabled: false }', function ($context, $element) { return { 'dxPopup': function () { return { 'animation': { 'show': { 'type': 'fade', 'from': 0, 'to': 1, 'duration': 700 }, 'hide': { 'type': 'fade', 'from': 1, 'to': 0, 'duration': 700 } }, 'wrapperAttr': { 'class': 'dxqb-preview' }, 'visible': $context.$data.isVisible, 'title': $context.$data.title(), 'showTitle': true, 'resizeEnabled': true, 'shading': true, 'shadingColor': 'transparent', 'fullScreen': false, 'width': 800, 'height': 544, 'container': $context.$data.closest($element, '.dxrd-wizard'), 'position': { 'of': $context.$data.closest($element, '.dx-designer-viewport') }, 'onHidden': function () { $context.$data.data(null); }, 'focusStateEnabled': false }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextArea: { value: data, valueChangeEvent: \'keyup\', disabled: false }', function ($context, $element) { return { 'dxTextArea': function () { return { 'value': $context.$data.data, 'valueChangeEvent': 'keyup', 'disabled': false }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxAceEditor: { value: data, additionalOptions: additionalOptions, options: aceOptions }', function ($context, $element) { return { 'dxAceEditor': function () { return { 'value': $context.$data.data, 'additionalOptions': $context.$data.additionalOptions, 'options': $context.$data.aceOptions }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { text: okButtonText(), onClick: okButtonHandler }', function ($context, $element) { return { 'dxButton': function () { return { 'text': $context.$data.okButtonText(), 'onClick': $context.$data.okButtonHandler }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('event: { dblclick: function() { $data.dblClickHandler ? $data.dblClickHandler($data) : $data.toggleCollapsed() }, mouseenter: mouseenter, mouseleave: mouseleave }, attr: { class: \'dx-treeview-item dx-treelist-item dx-fontsize-reestablished dxd-list-item-back-color \' + ($data.hasItems ? \'dx-treelist-list-item-content \' : \'dx-treelist-field-item-content \') + ($data.isSelected() ? \'dx-treelist-item-selected dxd-state-selected dxd-back-secondary\' : \'\') }, styleunit: padding, css: { \'dx-state-hover\': isHovered }', function ($context, $element) { return { 'event': function () { return { 'dblclick': function () { $context.$data.dblClickHandler ? $context.$data.dblClickHandler($context.$data) : $context.$data.toggleCollapsed(); }, 'mouseenter': $context.$data.mouseenter, 'mouseleave': $context.$data.mouseleave }; }, 'attr': function () { return { 'class': 'dx-treeview-item dx-treelist-item dx-fontsize-reestablished dxd-list-item-back-color ' + ($context.$data.hasItems ? 'dx-treelist-list-item-content ' : 'dx-treelist-field-item-content ') + ($context.$data.isSelected() ? 'dx-treelist-item-selected dxd-state-selected dxd-back-secondary' : '') }; }, 'styleunit': function () { return $context.$data.padding; }, 'css': function () { return { 'dx-state-hover': $context.$data.isHovered }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: nodeImageClass, visible: hasItems, template: \'dxrd-svg-collapsed\', click: toggleCollapsed', function ($context, $element) { return { 'css': function () { return $context.$data.nodeImageClass; }, 'visible': function () { return $context.$data.hasItems; }, 'template': function () { return 'dxrd-svg-collapsed'; }, 'click': function () { return $context.$data.toggleCollapsed; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('event: { dblclick: function() { $data.dblClickHandler && $data.dblClickHandler($data); } }, click: toggleSelected,  draggable: isDraggable ? dragDropHandler : null, css: { \'dxrd-disabled\': $data.data.disabled && $data.data.disabled() }', function ($context, $element) { return { 'event': function () { return { 'dblclick': function () { $context.$data.dblClickHandler && $context.$data.dblClickHandler($context.$data); } }; }, 'click': function () { return $context.$data.toggleSelected; }, 'draggable': function () { return $context.$data.isDraggable ? $context.$data.dragDropHandler : null; }, 'css': function () { return { 'dxrd-disabled': $context.$data.data.disabled && $context.$data.data.disabled() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCheckBox: { value: data.checked, disabled: data.selectionDisabled }, click: function(treeNode, e) { treeNode.data.toggleChecked(); e.stopPropagation(); return true; }', function ($context, $element) { return { 'dxCheckBox': function () { return { 'value': $context.$data.data.checked, 'disabled': $context.$data.data.selectionDisabled }; }, 'click': function () { return function (treeNode, e) { treeNode.data.toggleChecked(); e.stopPropagation(); return true; }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPropertyGrid: { target: $parent.data.dataSourceParameter, level: $parent.data.editor.level + 1 }', function ($context, $element) { return { 'dxPropertyGrid': function () { return { 'target': $context.$parent.data.dataSourceParameter, 'level': $context.$parent.data.editor.level + 1 }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: "dx-treelist-accordion-item-with-checkbox"', function ($context, $element) { return { 'template': function () { return 'dx-treelist-accordion-item-with-checkbox'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: "dx-treelist-header-item-with-checkbox"', function ($context, $element) { return { 'template': function () { return 'dx-treelist-header-item-with-checkbox'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $data.hasItems', function ($context, $element) { return { 'ifnot': function () { return $context.$data.hasItems; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.showIcon', function ($context, $element) { return { 'if': function () { return $context.$data.showIcon; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $data.showIcon', function ($context, $element) { return { 'ifnot': function () { return $context.$data.showIcon; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-popover-list-items\', data: ko.utils.extend($parent.data, { position: $root.rtl ? \'left\' : \'right\', popupContainer: $root.getPopupContainer }) }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-popover-list-items', 'data': $context.ko.utils.extend($context.$parent.data, { 'position': $context.$root.rtl ? 'left' : 'right', 'popupContainer': $context.$root.getPopupContainer }) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxList: { dataSource: _chooseObjectDataMember.dataMembers, selectedItems: _chooseObjectDataMember.selectedDataMembers, selectionMode: \'single\', activeStateEnabled: false, focusStateEnabled: false, searchExpr: \'displayName\', searchEnabled: true, noDataText: $dx._static.noDataText(), encodeNoDataText: true, searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }', function ($context, $element) { return { 'dxList': function () { return { 'dataSource': $context.$data._chooseObjectDataMember.dataMembers, 'selectedItems': $context.$data._chooseObjectDataMember.selectedDataMembers, 'selectionMode': 'single', 'activeStateEnabled': false, 'focusStateEnabled': false, 'searchExpr': 'displayName', 'searchEnabled': true, 'noDataText': $context.$data.$dx._static.noDataText(), 'encodeNoDataText': true, 'searchEditorOptions': { 'placeholder': $context.$root.dx._static.searchPlaceholder() } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treeListSearchPanel: {controllers: _chooseObjectType.availableTypesTreelistModel.treeListController}', function ($context, $element) { return { 'treeListSearchPanel': function () { return { 'controllers': $context.$data._chooseObjectType.availableTypesTreelistModel.treeListController }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', height: _chooseObjectType._scrollViewHeight}', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'height': $context.$data._chooseObjectType._scrollViewHeight }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treelist: _chooseObjectType.availableTypesTreelistModel', function ($context, $element) { return { 'treelist': function () { return $context.$data._chooseObjectType.availableTypesTreelistModel; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.dx._static.noDataText()', function ($context, $element) { return { 'text': function () { return $context.$root.dx._static.noDataText(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: _chooseObjectType.types && !_chooseObjectType.types().length', function ($context, $element) { return { 'if': function () { return $context.$data._chooseObjectType.types && !$context.$data._chooseObjectType.types().length; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: position, css: { \'dxrd-disabled\': $data.disabled() }', function ($context, $element) { return { 'style': function () { return $context.$data.position; }, 'css': function () { return { 'dxrd-disabled': $context.$data.disabled() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $parent.showDescription($index(), description), attr: { title: $parent.showDescription($index(), description) }', function ($context, $element) { return { 'text': function () { return $context.$parent.showDescription($context.$index(), $context.$data.description); }, 'attr': function () { return { 'title': $context.$parent.showDescription($context.$index(), $context.$data.description) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: disabledText', function ($context, $element) { return { 'text': function () { return $context.$data.disabledText; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treeListSearchPanel: {controllers: availableTypesTreelistModel.treeListController}', function ($context, $element) { return { 'treeListSearchPanel': function () { return { 'controllers': $context.$data.availableTypesTreelistModel.treeListController }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight}', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'height': $context.$data._scrollViewHeight }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treelist: availableTypesTreelistModel', function ($context, $element) { return { 'treelist': function () { return $context.$data.availableTypesTreelistModel; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxList: { dataSource: dataMembers, selectedItems: selectedDataMembers, selectionMode: \'single\', activeStateEnabled: false, focusStateEnabled: false, searchExpr: \'displayName\', searchEnabled: true, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true, searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }', function ($context, $element) { return { 'dxList': function () { return { 'dataSource': $context.$data.dataMembers, 'selectedItems': $context.$data.selectedDataMembers, 'selectionMode': 'single', 'activeStateEnabled': false, 'focusStateEnabled': false, 'searchExpr': 'displayName', 'searchEnabled': true, 'noDataText': $context.$root.dx._static.noDataText(), 'encodeNoDataText': true, 'searchEditorOptions': { 'placeholder': $context.$root.dx._static.searchPlaceholder() } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data.displayName, attr: { \'title\': $data.displayName}', function ($context, $element) { return { 'text': function () { return $context.$data.displayName; }, 'attr': function () { return { 'title': $context.$data.displayName }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxExpressionEditor: getOptions({ options: value, fieldListProvider: value().itemsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() })', function ($context, $element) { return { 'dxExpressionEditor': function () { return $context.$data.getOptions({ 'options': $context.$data.value, 'fieldListProvider': $context.$data.value().itemsProvider, 'displayNameProvider': $context.$root.displayNameProvider && $context.$root.displayNameProvider() }); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\'}', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: _sections', function ($context, $element) { return { 'foreach': function () { return $context.$data._sections; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !$data.disabled()', function ($context, $element) { return { 'if': function () { return !$context.$data.disabled(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.disabled()', function ($context, $element) { return { 'if': function () { return $context.$data.disabled(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !!$data', function ($context, $element) { return { 'if': function () { return !!$context.$data; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: _grids', function ($context, $element) { return { 'foreach': function () { return $context.$data._grids; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-objectdatasource-parameters-grid\', data: _ctorParametersObject }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-objectdatasource-parameters-grid', 'data': $context.$data._ctorParametersObject }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-objectdatasource-parameters-grid\', data: _dataMemberParametersObject }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-objectdatasource-parameters-grid', 'data': $context.$data._dataMemberParametersObject }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-objectdatasource-parameters-section\', data: _chooseObjectParameters }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-objectdatasource-parameters-section', 'data': $context.$data._chooseObjectParameters }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCollectionEditor: parametersEditorOptions', function ($context, $element) { return { 'dxCollectionEditor': function () { return $context.$data.parametersEditorOptions; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { \'marginLeft\' : editor.padding }, css: { \'dxrd-group-header-collapsed\': collapsed() }', function ($context, $element) { return { 'styleunit': function () { return { 'marginLeft': $context.$data.editor.padding }; }, 'css': function () { return { 'dxrd-group-header-collapsed': $context.$data.collapsed() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: value().name', function ($context, $element) { return { 'text': function () { return $context.$data.value().name; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPropertyGrid: { target: value, level: editor.level + 1 }', function ($context, $element) { return { 'dxPropertyGrid': function () { return { 'target': $context.$data.value, 'level': $context.$data.editor.level + 1 }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true  }', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'useNative': false, 'scrollByThumb': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: $parents[1].select, css: { \'dxd-state-selected dxd-back-secondary\' : $parents[1].selectedIndex() === $index() }', function ($context, $element) { return { 'dxclick': function () { return $context.$parents[1].select; }, 'css': function () { return { 'dxd-state-selected dxd-back-secondary': $context.$parents[1].selectedIndex() === $context.$index() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: showButtons', function ($context, $element) { return { 'visible': function () { return $context.$data.showButtons; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { onClick: add, text: getDisplayTextButton(\'add\') }, attr: { title: getDisplayTextButton(\'add\') }', function ($context, $element) { return { 'dxButton': function () { return { 'onClick': $context.$data.add, 'text': $context.$data.getDisplayTextButton('add') }; }, 'attr': function () { return { 'title': $context.$data.getDisplayTextButton('add') }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { onClick: remove, disabled: selectedIndex() === null, text: $parent.removeButtonTitle }, attr: { title: $parent.removeButtonTitle }', function ($context, $element) { return { 'dxButton': function () { return { 'onClick': $context.$data.remove, 'disabled': $context.$data.selectedIndex() === null, 'text': $context.$parent.removeButtonTitle }; }, 'attr': function () { return { 'title': $context.$parent.removeButtonTitle }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: values().length === 0', function ($context, $element) { return { 'if': function () { return $context.$data.values().length === 0; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxList: { dataSource: _connectionStrings, onSelectionChanged: function(e) { _selectedConnectionString(e.addedItems) },  selectedItems: _selectedConnectionString.peek(), focusStateEnabled: false, searchEnabled: true, searchExpr: \'description\', editEnabled: true, editConfig: { selectionEnabled: true }, selectionMode: \'single\', activeStateEnabled: false, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true, searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }', function ($context, $element) { return { 'dxList': function () { return { 'dataSource': $context.$data._connectionStrings, 'onSelectionChanged': function (e) { $context.$data._selectedConnectionString(e.addedItems); }, 'selectedItems': $context.$data._selectedConnectionString.peek(), 'focusStateEnabled': false, 'searchEnabled': true, 'searchExpr': 'description', 'editEnabled': true, 'editConfig': { 'selectionEnabled': true }, 'selectionMode': 'single', 'activeStateEnabled': false, 'noDataText': $context.$root.dx._static.noDataText(), 'encodeNoDataText': true, 'searchEditorOptions': { 'placeholder': $context.$root.dx._static.searchPlaceholder() } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data[\'description\'] || $data[\'name\']', function ($context, $element) { return { 'text': function () { return $context.$data['description'] || $context.$data['name']; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: caption()', function ($context, $element) { return { 'text': function () { return $context.$data.caption(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: !runQueryBuilderDisabled, text: $parent.runQueryBuilderBtnText, click: function() { $parent.runQueryBuilder() }', function ($context, $element) { return { 'visible': function () { return !$context.$data.runQueryBuilderDisabled; }, 'text': function () { return $context.$parent.runQueryBuilderBtnText; }, 'click': function () { return function () { $context.$parent.runQueryBuilder(); }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextArea: { value: sqlString, valueChangeEvent: \'keyup input blur\', readOnly: disableCustomSql() }', function ($context, $element) { return { 'dxTextArea': function () { return { 'value': $context.$data.sqlString, 'valueChangeEvent': 'keyup input blur', 'readOnly': $context.$data.disableCustomSql() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxAceEditor: { value: sqlString, additionalOptions: additionalOptions, options: aceOptions }, css: { \'dx-disabled-ace\': disableCustomSql() }', function ($context, $element) { return { 'dxAceEditor': function () { return { 'value': $context.$data.sqlString, 'additionalOptions': $context.$data.additionalOptions, 'options': $context.$data.aceOptions }; }, 'css': function () { return { 'dx-disabled-ace': $context.$data.disableCustomSql() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxList: { dataSource: storedProcedures, searchEnabled: true, searchExpr: \'name\', onContentReady: scrollActiveItem, selectedItems: selectedProcedure, editEnabled: true, editConfig: { selectionEnabled: true }, selectionMode: \'single\', activeStateEnabled: false, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true }', function ($context, $element) { return { 'dxList': function () { return { 'dataSource': $context.$data.storedProcedures, 'searchEnabled': true, 'searchExpr': 'name', 'onContentReady': $context.$data.scrollActiveItem, 'selectedItems': $context.$data.selectedProcedure, 'editEnabled': true, 'editConfig': { 'selectionEnabled': true }, 'selectionMode': 'single', 'activeStateEnabled': false, 'noDataText': $context.$root.dx._static.noDataText(), 'encodeNoDataText': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $parent.generateStoredProcedureDisplayName($data)', function ($context, $element) { return { 'text': function () { return $context.$parent.generateStoredProcedureDisplayName($context.$data); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: queryNameCaption()', function ($context, $element) { return { 'text': function () { return $context.$data.queryNameCaption(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: queryName, placeholder: $data.placeholder() }', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data.queryName, 'placeholder': $context.$data.placeholder() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxRadioGroup: { value: selectedQueryType, layout: \'horizontal\', items: queryTypeItems }', function ($context, $element) { return { 'dxRadioGroup': function () { return { 'value': $context.$data.selectedQueryType, 'layout': 'horizontal', 'items': $context.$data.queryTypeItems }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $parent.localizeQueryType($data), attr: { \'title\': $parent.localizeQueryType($data) }', function ($context, $element) { return { 'text': function () { return $context.$parent.localizeQueryType($context.$data); }, 'attr': function () { return { 'title': $context.$parent.localizeQueryType($context.$data) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: queryControl().template, data: queryControl() }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.queryControl().template, 'data': $context.$data.queryControl() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrd-querybuilder-popup\', data: popupQueryBuilder }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-querybuilder-popup', 'data': $context.$data.popupQueryBuilder }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: popupViewModel($element)', function ($context, $element) { return { 'dxPopup': function () { return $context.$data.popupViewModel($element); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxQueryBuilder: qbOptions', function ($context, $element) { return { 'dxQueryBuilder': function () { return $context.$data.qbOptions; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { text: getDisplayText(\'previewResults\'), onClick: previewHandler, disabled: okButtonDisabled }', function ($context, $element) { return { 'dxButton': function () { return { 'text': $context.$data.getDisplayText('previewResults'), 'onClick': $context.$data.previewHandler, 'disabled': $context.$data.okButtonDisabled }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { text: getDisplayText(\'cancel\'), onClick: cancelHandler }', function ($context, $element) { return { 'dxButton': function () { return { 'text': $context.$data.getDisplayText('cancel'), 'onClick': $context.$data.cancelHandler }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { text: getDisplayText(\'ok\'), type: \'default\', onClick: okHandler, disabled: okButtonDisabled }', function ($context, $element) { return { 'dxButton': function () { return { 'text': $context.$data.getDisplayText('ok'), 'type': 'default', 'onClick': $context.$data.okHandler, 'disabled': $context.$data.okButtonDisabled }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxLoadPanel:{ animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, deferRendering: false, message: getDisplayText(\'loading\'), visible: showLoadIndicator, shading: true, shadingColor: \'transparent\'}', function ($context, $element) { return { 'dxLoadPanel': function () { return { 'animation': { 'show': { 'type': 'fade', 'from': 0, 'to': 1, 'duration': 700 }, 'hide': { 'type': 'fade', 'from': 1, 'to': 0, 'duration': 700 } }, 'deferRendering': false, 'message': $context.$data.getDisplayText('loading'), 'visible': $context.$data.showLoadIndicator, 'shading': true, 'shadingColor': 'transparent' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-designer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-designer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: qbOptions', function ($context, $element) { return { 'if': function () { return $context.$data.qbOptions; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: isVisible', function ($context, $element) { return { 'if': function () { return $context.$data.isVisible; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dxd-state-active\': $data.isExpression() }, dxButtonWithTemplate: { onClick: switchEditors, icon: \'dxrd-svg-wizard-expressions\' }', function ($context, $element) { return { 'css': function () { return { 'dxd-state-active': $context.$data.isExpression() }; }, 'dxButtonWithTemplate': function () { return { 'onClick': $context.$data.switchEditors, 'icon': 'dxrd-svg-wizard-expressions' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopover: { wrapperAttr: { class: $data.className }, width: $data.width || 200, position: position, visible: popoverVisible, target: target, container: popupContainer($element)}', function ($context, $element) { return { 'dxPopover': function () { return { 'wrapperAttr': { 'class': $context.$data.className }, 'width': $context.$data.width || 200, 'position': $context.$data.position, 'visible': $context.$data.popoverVisible, 'target': $context.$data.target, 'container': $context.$data.popupContainer($element) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { class: $data.className + \'-list\'}, dxList: { dataSource: popoverListItems(), onItemClick: itemClickAction }', function ($context, $element) { return { 'attr': function () { return { 'class': $context.$data.className + '-list' }; }, 'dxList': function () { return { 'dataSource': $context.$data.popoverListItems(), 'onItemClick': $context.$data.itemClickAction }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { class: $data.className + \'-list-item\'}', function ($context, $element) { return { 'attr': function () { return { 'class': $context.$data.className + '-list-item' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: name, attr: { title: name }', function ($context, $element) { return { 'text': function () { return $context.$data.name; }, 'attr': function () { return { 'title': $context.$data.name }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data.title || $parent.title', function ($context, $element) { return { 'text': function () { return $context.$data.title || $context.$parent.title; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: description, attr: { title: description }', function ($context, $element) { return { 'text': function () { return $context.$data.description; }, 'attr': function () { return { 'title': $context.$data.description }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { animation: { show: { type: \'fadeIn\', duration: 700 }, hide: { type: \'fadeOut\', duration: 700 } }, visible: isVisible, wrapperAttr: { class: \'dxrd-wizard dx-editors dxd-text-primary\' }, title: isVisible() ? title : \'\', showTitle: true, fullScreen: false, width: width, height: height, container: $element, visualContainer: _container($element), titleTemplate: _titleTemplate, position: _wizardPopupPosition($element) }, cssArray: [ $data._extendCssClass, { \'dx-rtl\': $root.rtl, \'dx-ltr\': !$root.rtl }]', function ($context, $element) { return { 'dxPopup': function () { return { 'animation': { 'show': { 'type': 'fadeIn', 'duration': 700 }, 'hide': { 'type': 'fadeOut', 'duration': 700 } }, 'visible': $context.$data.isVisible, 'wrapperAttr': { 'class': 'dxrd-wizard dx-editors dxd-text-primary' }, 'title': $context.$data.isVisible() ? $context.$data.title : '', 'showTitle': true, 'fullScreen': false, 'width': $context.$data.width, 'height': $context.$data.height, 'container': $element, 'visualContainer': $context.$data._container($element), 'titleTemplate': $context.$data._titleTemplate, 'position': $context.$data._wizardPopupPosition($element) }; }, 'cssArray': function () { return [$context.$data._extendCssClass, { 'dx-rtl': $context.$root.rtl, 'dx-ltr': !$context.$root.rtl }]; } }; });

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/dx-query-builder-templates.js

external_DevExpress_Analytics_Widgets_Internal_["SvgTemplatesEngine"].addTemplates({
    'dxdd-connection-line': '<svg class="dxdd-connection-line" style="width:100%; height: 100%"> <line class="dxd-qb-relationship-line-color" data-bind="attr: { x1: startPoint().relativeX, y1: startPoint().relativeY, x2: endPoint().relativeX, y2: endPoint().relativeY }" /> </svg>',
    'dxdd-connecting-point': '<div class="dxdd-connecting-point" data-bind="styleunit: position, trackCursor: underCursor, style: { \'marginLeft\': -3 * _context.zoom() + \'px\', \'marginTop\': -3 * _context.zoom() + \'px\' }, draggable: $root.connectingPointDragHandler"> <svg style="width:100%; height: 100%"> <line x1="0" y1="0" x2="100%" y2="100%" /> <line x1=0 y1="100%" x2="100%" y2="0" /> </svg> </div>',
    'dxdd-connection-point-selection': '<div class="dxrd-control" data-bind="draggable: $root.connectionPointDragHandler, styleunit: { top: relativeY, left: relativeX }"> </div>',
    'dxdd-connector': '<div class="dxdd-connector" data-bind="styleunit: position, trackCursor: underCursor"> <!-- ko template: { name: \'dxdd-connection-line\' } --> <!-- /ko --> </div>',
    'dxdd-connector-selection': '<div class="dxdd-connector" data-bind="styleunit: position, dxclick: function() {}, draggable: $root.dragHandler"> <!-- ko template: { name: \'dxdd-connection-line\' } --> <!-- /ko --> <!-- ko with: startPoint --> <!-- ko template: { name: \'dxdd-connection-point-selection\' } --> <!-- /ko --> <!-- /ko --> <!-- ko with: endPoint --> <!-- ko template: { name: \'dxdd-connection-point-selection\' } --> <!-- /ko --> <!-- /ko --> </div>',
    'dxdd-routed-connection-line': '<svg class="dxdd-connection-line"> <defs> <!-- ko if: showArrow --> <marker data-bind="attr: { id: \'dxqb-arrow_end\' + connectorID() }" viewBox="0 0 5 10" refX="5" refY="5" markerUnits="userSpaceOnUse" orient="auto" markerWidth="14" markerHeight="14"> <polyline class="dxd-qb-relationship-line-color" points="0,0 5,5 0,10" /> </marker> <!-- /ko --> <!-- ko if: showRightArrow --> <marker data-bind="attr: { id: \'dxqb-arrow_start\' + connectorID() }" viewBox="0 0 5 10" refX="5" refY="5" markerUnits="userSpaceOnUse" orient="auto-start-reverse" markerWidth="14" markerHeight="14"> <polyline class="dxd-qb-relationship-line-color" points="0,0 5,5 0,10" /> </marker> <!-- /ko --> </defs> <polyline class="dxd-qb-relationship-line-color" fill="none" data-bind="attr: { points: routePointsSet, \'marker-end\': showArrow() ? \'url(#dxqb-arrow_end\' + connectorID() + \')\' : \'\', \'marker-start\': showRightArrow() ? \'url(#dxqb-arrow_start\' + connectorID() + \')\' : \'\' }, updateConnectorArrow: $data" /> </svg>',
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
    'dxqb-table': '<div class="dxqb-table dxd-qb-table-back-color dxd-back-primary2"> <div class="dx-border-inheritor dxd-border-accented"> <div class="dxqb-table-head-field dxd-qb-table-field-border-color dxd-qb-table-field-back-color dxd-back-highlighted dxd-border-primary"> <div class="dxqb-table-checkbox-all"> <div data-bind="dxCheckBox: { value: selectedWrapper }, click: function(surface, e) { $root.undoEngine().start(); surface.toggleSelected(); $root.undoEngine().end(); e.stopPropagation(); return true; }"></div> </div> <!-- ko template: titletemplate --> <!-- /ko --> </div> </div> <div class="dxqb-table-content"> <div class="dxqb-tableFields-wrapper"> <!-- ko ifnot: $data.isInitialized() --> <div class="dxqb-table-loading"> <div class="dxqb-table-loading-text dxd-text-primary" data-bind="text: $root.columnsLoadingMsg()"></div> </div> <!-- /ko --> <!-- ko if: $data.isInitialized() --> <!-- ko template: { name: asterisk.template, data: asterisk } --> <!-- /ko --> <!-- ko foreach: columns --> <!-- ko lazy: { template: $data.template  }--> <!-- /ko --> <!-- /ko --> <!-- /ko --> </div> </div> </div>',
    'dxqb-table-title': '<div class="dxqb-table-title" data-bind="style: { cursor: selected() ? \'move\' : \'default\' }"> <div class="dxqb-table-title-content dxd-text-primary" data-bind="text: getControlModel().actualName"></div> </div>',
    'dxqb-federation-table-title': '<div class="dxqb-table-title dxqb-federation-table-title" data-bind="event: { dblclick: $root.inlineTextEdit.show }, style: { cursor: selected() ? \'move\' : \'default\' }"> <div class="dxqb-federation-table-title-container"> <!-- ko if: !$root.inlineTextEdit.visible() || !selected()  --> <div class="dxqb-table-title-content dxd-text-primary" data-bind="text: getControlModel().actualName"></div> <!-- /ko --> <!-- ko if: $root.inlineTextEdit.visible() && selected() --> <!-- ko with: $root.inlineTextEdit --> <div class="inline-text-edit" data-bind="dxTextArea: { value: text, onKeyUp: keypressAction, valueChangeEvent: \'keyup\' }"></div> <!-- /ko --> <!-- /ko --> </div> <div class="dxqb-table-subtitle dxd-text-info" data-bind="text: getControlModel().displaySourceName"></div> </div>',
    'dxrd-masterDetail-editor': '<!-- ko if: $data --> <div> <div data-bind="dxPopup: { showTitle: true, resizeEnabled: true, width: 700, height: 500, maxHeight: \'95%\', maxWidth: \'95%\', minHeight: 300, minWidth: 400, title: title(), visible: popupVisible, wrapperAttr: { class: \'dx-filtereditor\' }, toolbarItems: buttonItems, showCloseButton: true, container: $root.getPopupContainer($element), position: { of: $root.getPopupContainer($element) }, }"> <div class="dx-filtereditor-tree dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', direction: \'both\' }" style="cursor: default"> <!-- ko foreach: masterQueries --> <div class="criteria-operator-group"> <div class="criteria-operator-group-item"> <div class="criteria-operator-text dxd-filter-editor-text-color criteria-operator-item-group dxd-filter-editor-group-back-color dxd-state-no-hover stylized" data-bind="text: queryName"></div> <div data-bind="service: { name: \'createRelation\' }"></div> </div> <div class="criteria-operator-content"> <!-- ko template: { name: \'dx-masterDetail-editor-relation\', foreach: relations }--> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div> <div class="dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay" data-bind="dxPopupWithAutoHeight: { height: \'300px\', focusStateEnabled: false, wrapperAttr: { class: \'dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay\' }, position: $root.rtl ? { my: \'right top\', at: \'right bottom\', of: popupService.target } : { my: \'left top\', at: \'left bottom\', of: popupService.target }, container: $root.getPopupContainer($element), target: popupService.target, showTitle: false, showCloseButton: false, animation: {}, hideOnOutsideClick: true, shading: false, minWidth:\'170px\', maxWidth:\'500px\', width: \'auto\', visible: popupService.visible }"> <!-- ko with: popupService--> <!-- ko with: data --> <!-- ko template: template--> <!-- /ko --> <!-- /ko --> <!-- /ko --> </div> </div> <!-- /ko -->',
    'dx-masterDetail-editor-keyColumn': '<div class="criteria-operator-text dxd-filter-editor-text-color criteria-operator-item-field dxd-filter-editor-field-back-color dxd-state-no-hover stylized" data-bind="attr: { title: $data.getTitle() }, text: queryName"></div> <div class="criteria-operator-text dxd-filter-editor-text-color">.</div> <div class="criteria-operator-text dxd-filter-editor-text-color"> <div data-bind="service: { name: \'setColumn\' }"></div> </div>',
    'dx-masterDetail-editor-relation': '<div class="criteria-operator-group"> <div class="criteria-operator-group-item"> <div class="criteria-operator-action" data-bind="dxclick: function() {  $parent.remove($data); }"> <div class="criteria-operator-action-image dx-image-filtereditor-remove"><!-- ko template: \'dxrd-svg-filtereditor-remove\' --><!-- /ko --></div> </div> <div class="criteria-operator-item" data-bind="visible: isEditable"> <div class="criteria-operator-item-editor" data-bind="dxTextBox: { value: relationName, onFocusOut: function() { isEditable(false); } }, focus: { on: isEditable }"></div> </div> <div class="criteria-operator-text dxd-filter-editor-text-color criteria-operator-item-value dxd-filter-editor-value-back-color" data-bind="visible: !isEditable()"> <div class="criteria-operator-text dxd-filter-editor-text-color clickable" data-bind="text: relationName, click: function() { isEditable(true); }"></div> </div> <div class="criteria-operator-action" data-bind="dxclick: create"> <div class="criteria-operator-action-image dx-image-filtereditor-add"><!-- ko template: \'dxrd-svg-filtereditor-add\' --><!-- /ko --></div> </div> </div> <div class="criteria-operator-content"> <!-- ko foreach: keyColumns --> <div class="criteria-operator-group"> <div class="criteria-operator-group-item"> <div class="criteria-operator-action" data-bind="dxclick: function() {  $parent.remove($data); }"> <div class="criteria-operator-action-image dx-image-filtereditor-remove"><!-- ko template: \'dxrd-svg-filtereditor-remove\' --><!-- /ko --></div> </div> <!-- ko template: { name: \'dx-masterDetail-editor-keyColumn\', data: master } --> <!-- /ko --> <div class="criteria-operator-text dxd-filter-editor-text-color"> = </div> <!-- ko template: { name: \'dx-masterDetail-editor-keyColumn\', data: detail } --> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div>',
    'dx-masterdetail-editor-setColumn': '<div class="criteria-operator-text dxd-filter-editor-text-color clickable criteria-operator-item-field dxd-filter-editor-field-back-color" data-bind="text: target.column() || target.selectColumnText(), dxclick: showPopup, css: { \'dxd-state-selected\': target.isSelected, \'default\': !target.column() }"></div>',
    'dxqb-data-preview': '<div style="height: 100%" data-bind="dxdTableView: $data.value"></div>',
    'dxqb-popup': '<div data-bind="dxPopup: { animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, wrapperAttr: { class: \'dxqb-preview\' }, visible: isVisible, title: title(), showTitle: true, resizeEnabled: true, shading: true, shadingColor: \'transparent\', fullScreen: false, width: 800, height: 544, container: container($element), position: { of: container($element) }, onHidden: function() { $data.data.value(null) }, focusStateEnabled: false }"> <div class="dxqb-preview-popup-content"> <!-- ko if: data && !isLoading() --> <!-- ko template: { name: template, data: data } --> <!-- /ko --> <!-- /ko --> <!-- ko if: isLoading --> <div style="text-align: center; padding-top: 25%;"> <div data-bind="dxLoadIndicator: { visible: true }"></div> </div> <!-- /ko --> </div> <div class="dxqb-preview-popup-buttons dxd-border-secondary"> <div class="dxqb-preview-popup-button" data-bind="dxButton: { text: okButtonText(), onClick: okButtonHandler, disabled: isLoading }"></div> </div> </div>',
    'dxqb-selectstatment-preview': '<div class="dxqb-show-query-string-content dx-widget"> <!-- ko if: !aceAvailable --> <div class="dxrd-show-query-string-editor" data-bind="dxTextArea: { value: value, valueChangeEvent: \'keyup\', readOnly: true }"></div> <!-- /ko --> <!-- ko if: aceAvailable --> <div class="dxrd-show-query-string-editor"> <div class="dxrd-show-query-string-editor-content"> <div class="dx-sql_editor dx-disabled-ace dxd-back-primary2" data-bind="dxAceEditor: { value: value, options: aceOptions, additionalOptions: additionalOptions }"></div> </div> </div> <!-- /ko --> </div>',
    'dxd-tableview': '<div class="dxd-tableview"> <div class="dxd-tableview-titles"> <table> <tbody> <tr> <!-- ko foreach: rtl ? data.schema.reverse() : data.schema --> <td data-bind="attr: { class: \'dxd-tableview-title-cell dxd-border-secondary dxd-tableview-resizable\' }"> <div class="dxd-tableview-cell-text dxd-qb-data-preview-cell-text-color dxd-text-info" data-bind="text: name"></div> </td> <!-- /ko --> </tr> </tbody> </table> </div> <!-- ko if: data.values --> <div class="dxd-tableview-data" data-bind="dxScrollView: { direction: \'both\', scrollByContent: false, showScrollbar: \'always\', scrollByThumb: true, bounceEnabled: false, useNative: false, onScroll: $data.onDataScroll, onInitialized: $data.onDataScrollInitialized }"> <table> <tbody> <!-- ko foreach: data.values --> <tr> <!-- ko foreach: $parent.rtl ? $data.reverse() : $data --> <td class="dxd-tableview-cell dxd-border-secondary"> <!-- ko ifnot: $parents[1].isImage($index()) --> <div data-bind="text: $data, attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }"></div> <!-- /ko --> <!-- ko if: $parents[1].isImage($index()) --> <!-- ko if: $parents[1].isImageTooLarge($data) --> <div data-bind="text: $parents[1].getImageTooLargeText($data), attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }"></div> <!-- /ko --> <!-- ko ifnot: $parents[1].isImageTooLarge($data) --> <div data-bind="attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }"> <img data-bind="attr: { src: \'data:image/bmp;base64,\' + $data }" /> </div> <!-- /ko --> <!-- /ko --> </td> <!-- /ko --> </tr> <!-- /ko --> <tr class="dxd-tableview-data-fakerow"> <!-- ko foreach: data.values[0] --> <td class="dxd-tableview-cell dxd-border-secondary"> <div data-bind="attr: { class: \'dxd-tableview-cell-text dxd-text-primary dxd-tableview-resizable\' + $index() }"></div> </td> <!-- /ko --> </tr> </tbody> </table> </div> <!-- /ko --> <!-- ko ifnot: data.values --> <div class="dxd-tableview-empty-message" data-bind="text: noDataText()"></div> <!-- /ko --> </div>',
    'dxqb-fieldlist-wrapper': '<div id="tree" data-bind="treelist: treeListOptions" style="width:100%; height: 100%;"></div>',
    'dxqb-properties-wrapper': '<div class="dxrd-properties-wrapper" data-bind="visible: active() && visible()"> <div class="dxd-text-primary dxrd-properties-wrapper-full-height"> <!-- ko with: model --> <div class="dxrd-properties-grid dxd-border-primary" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }" style="top: 0px;"> <div> <!-- ko foreach: groups --> <div class="dx-fieldset" data-bind="visible: visible"> <div class="dx-accordion" data-bind="dxdAccordion: { collapsed: collapsed }"> <div class="dxrd-group-header dx-accordion-header dxd-border-primary" data-bind="css: { \'dxrd-group-header-collapsed\': collapsed() }"> <div class="dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !collapsed() }" style="display:inline-block;"></div> <span class="dxrd-group-header-text" data-bind="text: displayName()"></span> </div> <div class="dx-accordion-content dxd-back-primary dxd-border-primary"> <!-- ko ifnot: editorsCreated --> <div class="dx-accordion-content-loading-panel"> <div data-bind="dxLoadIndicator: { visible: !editorsCreated() }"></div> </div> <!-- /ko --> <!-- ko if: $data.editorsRendered() --> <div data-bind="visible: editorsCreated"> <div class="dx-editors"> <!-- ko foreach: editors --> <!-- ko template: editorTemplate --> <!-- /ko --> <!-- ko if: ($index() === $parent.editors().length - 1 && $parent.editorsCreated(true)) --> <!-- /ko --> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div> </div> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div>',
    'dxqb-propertygrid': '<!-- ko with: value --> <div class="dx-fieldset dxqb-selected-properties"> <!-- ko foreach: properties.getEditors() --> <!-- ko template: editorTemplate --> <!-- /ko --> <!-- /ko --> </div> <!-- /ko -->',
    'dxqb-fieldspanel': '<!-- ko with: value --> <div data-bind="treeListSearchPanel: { controllers: $data.fieldListModel.treeListOptions().treeListController }"></div> <div class="dxqb-right-panel-fields" data-bind="dxScrollView: { showScrollbar: \'onHover\', scrollByContent: false, scrollByThumb: true, bounceEnabled: false, useNative: false }"> <!-- ko template: { name: "dxqb-fieldlist-wrapper", data: fieldListModel } --> <!-- /ko --> </div> <!-- /ko -->',
    'dxqb-parameterspanel': '<!-- ko with: value --> <div class="dxqb-right-panel-parameters" data-bind="dxScrollView: { showScrollbar: \'onHover\', scrollByContent: false, scrollByThumb: true, bounceEnabled: false, useNative: false }"> <div style="width: 100%" data-bind="dxCollectionEditor: $data"></div> </div> <!-- /ko -->',
    'dxqb-collectioneditor-template': '<div class="dxrd-accordion-collection-item" data-bind="dxdAccordion: { collapsed: collapsed }"> <div class="dxrd-group-header dx-accordion-header"> <div> <div class="propertygrid-editor-collapsed dx-collapsing-image" data-bind="css: { \'dx-image-expanded\': !collapsed() }, template: \'dxrd-svg-collapsed\'"></div> <div class="dx-group-header-font" data-bind="text: $root.getLocalization($parent.name), attr: { title: $root.getLocalization($parent.name) }"></div> </div> </div> <div class="dx-accordion-content"> <div data-bind="dxPropertyGrid: { target: value, level: 1, parentDisabled: editor.disabled }"></div> </div> </div>',
    'dxqb-properties-wrapper-editorlist': '<div class="dxrd-properties-wrapper" data-bind="visible: active() && visible()"> <div style="height:100%" class="dxd-text-primary"> <!-- ko with: model --> <div class="dxrd-properties-grid dxd-border-primary" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }" style="top: 0px;"> <div class="dx-fieldset dxqb-selected-properties"> <!-- ko foreach: getEditors() --> <!-- ko template: editorTemplate --> <!-- /ko --> <!-- /ko --> </div> </div> <!-- /ko --> </div> </div>',
    'dxqb-toolbar': '<div class="dxrd-toolbar-wrapper dxd-toolbar-back-color" data-bind="click: $root.findControl"> <div class="dxqb-toolbar-background dxd-back-primary-invariant"></div> <div class="dxrd-toolbar" data-bind="template: {name: \'dxqb-toolbar-items\', data: actionLists.toolbarItems }"></div> </div>',
    'dxqb-toolbar-items': '<!-- ko foreach: $data --> <!-- ko if: $data.templateName --> <!-- ko template: templateName  --> <!-- /ko --> <!-- /ko --> <!-- ko if: !$data.templateName --> <div class="dxrd-toolbar-item" data-bind="visible: visible"> <div class="dxqb-toolbar-item-container"> <div class="dxqb-toolbar-item-background dxd-back-secondary"></div> <div data-bind="template: {name: ko.unwrap($data.imageTemplateName), if: !!ko.unwrap($data.imageTemplateName)}, attr: { class: \'dxrd-toolbar-item-image dxd-icon-highlighted dxd-state-normal \' + (ko.unwrap($data.imageClassName) || \'\'), title: $data.displayText && $data.displayText() || text }, dxclick: function() { if((typeof $data.disabled === \'function\') && !disabled() || !disabled) { clickAction($root.model && $root.model()); } }, css: {\'dxrd-disabled-button\': disabled, \'dxd-state-active\': $data.selected }"> </div> </div> <div class="dxrd-toolbar-item-separator dxd-toolbar-separator-color dxd-border-secondary" data-bind="visible: $data.hasSeparator"></div> </div> <!-- /ko --> <!-- /ko -->',
    'dxqb-property-editor': '<div class="dxrd-editor" data-bind="visible: visible"> <div class="dxrd-editor-header"> <div class="dx-field dxd-back-primary"> <div class="dx-field-label dxd-text-primary"> <div class="propertygrid-editor-displayName" data-bind="text: displayName, attr: { \'title\': displayName }"></div> </div> <div class="dx-field-value"> <div data-bind="service: { name: \'createEditorAddOn\' }"></div> <!-- ko lazy: { template: templateName } --> <!-- /ko --> </div> </div> </div> </div>',
    'dxqb-expressionstring': '<!-- ko if: $data.value() --> <div data-bind="dxExpressionEditor: getOptions({ options: value, fieldListProvider: $root.parametersBindingsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() })"></div> <!-- /ko -->',
    'dxqb-filtereditor-changeparameter': '<div class="criteria-operator-item" data-bind="visible: target.isEditable"> <div class="criteria-operator-item" data-bind="dxTextBox: { value: target._parameterName, onFocusOut: function() { target.createParameter(); target.isEditable(false); } }"></div> </div> <div class="criteria-operator-text dxd-filter-editor-text-color clickable " data-bind="text: target.parameterName, dxclick: showPopup, css: { \'dxd-state-selected\': target.isSelected, \'default\': target.isDefaultTextDisplayed() }, visible: $data.target.isEditable() === false"></div>',
    'dxqb-filtereditor-propertiespopup': '<div class="dx-widget" data-bind="dxScrollView: { showScrollbar: \'onHover\' }"> <!-- ko foreach: data --> <div data-bind="dxdAccordion: { collapsed: collapsed }"> <div class="dx-accordion-header"> <div class="dx-filtereditor-popup-item dxd-list-item-back-color dx-item dx-list-item dxd-back-highlighted"> <div class="dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !collapsed() }" style="display:inline-block;  margin-left: 5px;"></div> <span class="dx-item-content dx-list-item-content" style="padding-left: 17px" data-bind="text: name"></span> </div> </div> <div class="dx-accordion-content dxd-back-primary"> <!-- ko foreach: items --> <div class="dx-filtereditor-popup-item dx-item dx-list-item dxd-list-item-back-color dxd-back-highlighted"> <span class="dx-item-content dx-list-item-content" style="padding-left: 17px" data-bind="text: name, attr: { \'title\': name }, click: function() { $parents[1].click($data); }"></span> </div> <!--/ko --> </div> </div> <!--/ko --> </div>',
    'dxqb-filtereditor-parameterspopup': '<div class="dx-widget" data-bind="dxScrollView: { showScrollbar: \'onHover\' }"> <!-- ko if: $parent.viewModel.canCreateParameters --> <div class="dx-filtereditor-popup-item dx-item dx-list-item dxd-list-item-back-color dxd-back-highlighted"> <span class="dx-item-content dx-list-item-content" data-bind="text: $parent.viewModel.defaultDisplay(), click: function() { $parent.viewModel.isEditable(true); $parent.viewModel._parameterName(\'\'); $parent.visible(false); }"></span> </div> <!-- /ko --> <!-- ko foreach: data --> <div class="dx-filtereditor-popup-item dx-item dx-list-item dxd-list-item-back-color dxd-back-highlighted"> <span class="dx-item-content dx-list-item-content" data-bind="text: name, click: function() { $parent.click($data); } "></span> </div> <!-- /ko --> </div>',
    'dxqb-treelist-item-with-search': '<div data-bind="visible: visible"> <!-- ko template: "dxqb-treelist-header-item-with-search" --> <!-- /ko --> </div>',
    'dxqb-treelist-header-item-with-search': '<div class="dx-treelist-item dxd-list-item-back-color dxd-back-highlighted" data-bind="event: { dblclick: function() { $data.dblClickHandler ? $data.dblClickHandler($data) : $data.toggleCollapsed() } }, styleunit: padding, css: { \'dx-treelist-item-selected dxd-state-selected\': isSelected() || isMultiSelected() }"> <div class="dx-treelist-collapsedbutton"></div> <div class="dx-treelist-caption"> <div class="dx-treelist-selectedcontent" data-bind="click: toggleSelected,  draggable: isDraggable ? dragDropHandler : null"> <div class="dx-treelist-image" data-bind="css: $data.imageClassName, template: {name: $data.imageTemplateName, if: !!ko.unwrap($data.imageTemplateName)}, attr: { title: text }"> </div> <!-- ko template: { name: \'dx-treelist-item-text-content\' } --> <!-- /ko --> </div> </div> </div>',
    'dxrd-page-choose-datasource-type': '<div class="dxrd-wizard-type-page" data-bind="css: $data._extendCssClass(\'type-page\')"> <!-- ko foreach: typeItems --> <!-- ko template: \'dxrd-page-choose-type-item\' --> <!-- /ko --> <!-- /ko --> </div>',
    'dxrd-page-choose-type-item': '<div data-bind="event: { click: $parent._itemClick, dblclick: function() { $parent._goToNextPage() } }, attr: { class: \'dxd-back-highlighted dxd-state-normal dxrd-wizard-type-item dx-fontsize-reestablished dxrd-wizard-type-item-border-color dxd-list-item-back-color \' + $parent._extendCssClass(\'type-item\')}, css: { \'dxd-border-secondary dxd-back-secondary\': $parent._IsSelected($data) } "> <div data-bind="attr: { class: \'dxrd-wizard-type-image \' + $parent._extendCssClass(\'type-image\') }, css: imageClassName, template: imageTemplateName"> </div> <!-- ko if: !!$parent._textToSearch --> <div class="dxrd-wizard-type-text" data-bind="searchHighlighting: { text: text, textToSearch: $parent._textToSearch }, attr: { title: text }, css: $parent._extendCssClass(\'type-text\')"></div> <!-- /ko --> <!-- ko ifnot: !!$parent._textToSearch --> <div class="dxrd-wizard-type-text" data-bind="text: text, attr: { title: text }, css: $parent._extendCssClass(\'type-text\')"></div> <!-- /ko --> </div>',
    'dxrd-wizard-add-federated-queries-page': '<div class="dxrd-wizard-page dxrd-wizard-add-federation-queries-page dxrd-wizard-page-treelist-accordion-style"> <div data-bind="treeListSearchPanel: {controllers: ko.unwrap(_fieldListModel).treeListController}"></div> <div class="dxrd-wizard-dataMember dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight }"> <div class="dxrd-wizard-dataMember-treelist" data-bind="treelist: _fieldListModel" style="width:100%; height: 100%;"></div> </div> <!-- ko template: { name: $data._queriesPopupHelper.template, data: _queriesPopupHelper } --> <!-- /ko --> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel: _loadPanelViewModel($element)"> </div> </div>',
    'dx-treelist-federation-action-with-popover': '<div class="dx-treelist-action-with-popover" style="display: inline-block"> <div class="dx-treelist-action" data-bind="dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName , disabled: $data.disabled && $data.disabled() }, attr: { title: text }"></div> <!-- ko template: { name: \'dx-popover-list-items\', data: ko.utils.extend($parent.data, { className: \'dxrd-federation-addqueries-popover\', position: $root.rtl ? \'right\' : \'left\', popupContainer: $root.getPopupContainer, width: 150 }) }--> <!-- /ko  --> </div>',
    'dxrd-querybuilder-select-popup-content': '<div class="dxrd-federation-result-grids dxrd-federation-data-container-column"> <div class="dxd-border-secondary dxrd-select-querybuilder-surface" data-bind="resizable: gridResizeHelper.resizable($root.resizeHandler, \'s\')"> <div style="height:100%;" data-bind="dxQueryBuilderSurface: queryBuilderSurfaceCreator"></div> </div> <div class="dx-accordion dxd-border-secondary dxrd-select-result-alias-grid" data-bind="dxdAccordion: { collapsed: joinResultCollapsed }"> <div class="dxd-back-secondary dx-accordion-header dxd-text-primary"> <div class="dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !joinResultCollapsed() }" style="display:inline-block;"></div> <span class="dxrd-group-header-text" data-bind="text: $root.getLocalization(\'Join result\', \'DataAccessUIStringId.FederationDataSourceQueryBuilder_SelectResult\')"></span> </div> <div class="dx-accordion-content dxd-border-secondary" data-bind="style: { height: resultGridHeight }"> <div class="dxrd-federation-action-add dxrd-collectioneditor-action" data-bind="dxButton: { icon: \'add\', disabled: addRowDisabled, onClick:addRow }"></div> <div data-bind="dxDataGrid: columnsGrid"></div> </div> </div> </div>',
    'dxrd-querybuilder-column-combobox-masked': '<div class="dxrd-querybuilder-column-container dxrd-querybuilder-column-container-masked"> <div class="dxrd-querybuilder-column-data"> <div class="dx-texteditor-input" data-bind="text: cellInfo.column"></div> </div> <div class="dxrd-querybuilder-column-editorswitch"> <!-- ko template: { name: \'dx-wizard-menu-box-editorswitch\', data: $data } --> <!-- /ko  --> </div> </div>',
    'dxrd-querybuilder-column-combobox': '<div class="dxrd-querybuilder-column-container dxrd-querybuilder-column-container-full"> <div class="dxrd-querybuilder-column-data"> <div class="dx-texteditor-input dx-padding-none" data-bind="dxDropDownBox: { dataSource: $data.allColumns, dropDownOptions: { container: $root.getPopupContainer($element), width:  $root.calculateWithZoomFactor(357)  }, popupPosition: { boundary: $root.getPopupContainer($element) }, value: cellInfo.key, valueExpr: \'key\', displayExpr: \'column\' }, visible: !$data.isExpression()"> <div data-bind="dxDataGrid: { dataSource: $data.allColumns, keyExpr: \'key\', remoteOperations: true, height: $root.calculateWithZoomFactor(250), columns: [{ dataField: \'column\', sortOrder: \'asc\' } , { dataField: \'table\'}], hoverStateEnabled: true, selection: { mode: \'single\' }, selectedRowKeys: [cellInfo.key], focusedRowEnabled: true, focusedRowKey: cellInfo.key, onSelectionChanged: $data.changeColumn } "></div> </div> <div class="dx-texteditor-input dx-padding-none" data-bind="dxExpressionEditor: { options: expression, fieldListProvider: itemsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() }, visible: $data.isExpression"></div> </div> <div class="dxrd-querybuilder-column-editorswitch"> <!-- ko template: { name: \'dx-wizard-menu-box-editorswitch\', data: $data } --> <!-- /ko  --> </div> </div>',
    'dxrd-querybuilder-transform-popup-content': '<div class="dxrd-federation-result-grids dxrd-federation-data-container-column"> <div class="dx-accordion dxd-border-secondary dxrd-transform-source-grid dxrd-result-source-grid"> <div class="dxd-back-secondary dx-accordion-header dxd-text-primary"> <span class="dxrd-group-header-text" data-bind="text: $data.transformGridTitle"></span> </div> <div class="dx-accordion-content dxd-border-secondary"> <div class="dxd-border-primary dxrd-transform-source-grid dxrd-result-source-grid" data-bind="dxDataGrid: transformGrid"></div> </div> </div> <div class="dx-accordion dxd-border-secondary dxrd-transform-result-grid"  data-bind="dxdAccordion: { collapsed: transformResultCollapsed }"> <div class="dxd-back-secondary dx-accordion-header dxd-text-primary"> <div class="dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !transformResultCollapsed() }" style="display:inline-block;"></div> <span class="dxrd-group-header-text" data-bind="text: $data.transformResultGridTitle"></span> </div> <div class="dx-accordion-content dxd-border-secondary"> <div data-bind="dxScrollView: { showScrollbar: \'onHover\' }"> <div data-bind="treelist: resultFieldListModel" style="width:100%; height: 100%;"></div> </div> </div> </div> </div>',
    'dxrd-querybuilder-transform-checkbox': '<div class="dxrd-querybuilder-transform-checkbox" data-bind="dxCheckBox: transform"></div>',
    'dxrd-querybuilder-federation-popup': '<div data-bind="dxPopup: { showTitle: true, title: title(), wrapperAttr: { class: cssClass }, visible: popupVisible, toolbarItems: buttonItems, showCloseButton: true, fullScreen: false, maxHeight: maxHeight, height: height, width: width, onShowing: function(e) { $data.loaded(true); }, rtlEnabled: rtl, onHiding: onHiding, container: getPopupContainer($element), position: { of: getPopupContainer($element)}, resizeEnabled: true, minHeight: 450, minWidth: 650 }"> <div class="dxrd-querybuilder-federation-popup"> <!-- ko if: popupVisible --> <!-- ko if: loaded --> <div class="dxrd-federation-treelist-wrapper dxd-border-secondary" data-bind="resizable: resizeHelper.resizable($root.resizeHandler, \'e\')"> <div class="dxrd-federation-treelist" data-bind="dxScrollView: { showScrollbar: \'onHover\' }"> <div data-bind="treelist: fieldListModel" style="width:100%; height: 100%;"></div> </div> </div> <div class="dxrd-federation-data-container"> <!-- ko template: { name: popupContentTemplate } --> <!-- /ko --> </div> <!-- /ko --> <!-- /ko --> </div> </div>',
    'dxrd-querybuilder-union-popup-content': '<div class="dxrd-federation-result-grids dxrd-federation-data-container-column"> <div class="dxd-border-secondary dxrd-union-result-source-grid dxrd-result-source-grid" data-bind="dxDataGrid: sourcesGrid"></div> <div class="dxd-border-secondary dxrd-union-result-alias-grid"> <div data-bind="dxDataGrid: aliasGrid"></div> </div> </div>',
    'dx-wizard-fullscreen': '<!-- ko if: $data && $data.isVisible() --> <div class="dx-fullscreen-wizard dx-editors" data-bind="css: { \'dx-rtl\': $root.rtl, \'dx-ltr\': !$root.rtl }"> <div class="dxrd-wizard dxrd-report-wizard dx-editors dxd-text-primary dxd-back-primary2" data-bind="css: _extendCssClass"> <div class="dxrd-wizard-steps-container dxd-back-primary" data-bind="visible: $data.navigationPanel().isVisible"> <div class="dxrd-wizard-title dxd-border-primary" data-bind="text: _description(), attr: {\'title\': _description() }"></div> <!-- ko with: navigationPanel --> <div class="dxrd-wizard-steps" data-bind="foreach: _steps"> <div class="dxrd-wizard-steps-relative" style="position:relative" data-bind="visible: $data.visible"> <div class="dxrd-wizard-steps-content" data-bind="click: $data.clickAction, text: $data.text, attr: {\'title\': $data.text }, css: { \'dxrd-disabled\': $data.disabled, \'dxd-back-secondary\': $data.isActive() }"></div> <div class="dxrd-wizard-steps-marker dxd-back-primary2" data-bind="visible: $data.isActive"></div> </div> </div> <!-- /ko --> </div> <div class="dxrd-wizard-content" data-bind="css: { \'withoutPanel\': !$data.navigationPanel().isVisible() }"> <div class="dxrd-wizard-part-description dxd-back-contrast"> <div class="dxrd-wizard-part-description-text dxd-text-primary dxd-border-primary" data-bind="text: _pageDescription()"></div> </div> <!-- ko with: _currentPage --> <div class="dxrd-wizard-work-content"> <div class="dxrd-wizard-work-content-relative"> <div data-bind="template: { name: template, data: page } "></div> </div> </div> <!-- /ko --> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel: _loadPanelViewModel($element)"> </div> <div class="dxrd-wizard-navigation"> <div data-bind="dxButton: cancelButton" class="dxrd-wizard-btn left"></div> <div data-bind="dxButton: finishButton" class="dxrd-wizard-btn right"></div> <div data-bind="dxButton: nextButton" class="dxrd-wizard-btn right"></div> <div data-bind="dxButton: previousButton" class="dxrd-wizard-btn right"></div> </div> </div> </div> </div> <!-- /ko -->',
    'dx-wizard-fullscreen-page': '<!-- ko if: $data._sections.length > 0 --> <div style="position:absolute;" data-bind="foreach: _sections, css: _className, styleunit: { top: _parentMarginOffset, left: _parentMarginOffset, right: _parentMarginOffset, bottom: _parentMarginOffset }"> <div class="dx-border-inheritor dxd-border-accented"> <div class="dxrd-report-page-tile dxd-border-secondary" data-bind="css: { \'dxrd-disabled\': !$data.page() }, style: $parent._pageCss[$data.pageId]"> <div class="dxrd-report-page-tile-title" data-bind="visible: $parent._showPageDescription(), text: $parent._getPageDescription($index(), $data), attr: { title: $parent._getPageDescription($index(), $data) }"></div> <!-- ko if: $data.page() !== null --> <!-- ko with: page --> <div class="dxrd-report-page-tile-content" data-bind="template: { name: $parent.metadata.template, data: page }, dxScrollView: { showScrollbar: \'onHover\'}"></div> <!-- /ko --> <!-- /ko --> <!-- ko if: $data.page() === null --> <div class="dxrd-report-page-tile-content dx-default-border-style dxd-border-secondary"> <div class="dxrd-wizard-page dxrd-wizard-disabled-content" data-bind="text: metadata.disabledText"></div> </div> <!-- /ko --> </div> </div> </div> <!-- /ko -->',
    'dxrd-jsondatasource-fields-page': '<div class="dxrd-wizard-page dx-jsonschema-page dx-frameless-style"> <div class="dx-default-border-style dxd-border-secondary dxrd-wizard-dataMember dx-fieldset" style="height:100%"> <div class="dx-field"> <div class="dx-field-label" data-bind="text: _rootElementTitle"></div> <div class="dx-field-value" data-bind="dxSelectBox: { dataSource: _rootElementList, value: _selectedRootElement, displayExpr: \'fullPath\', displayCustomValue: true, useItemTextAsTitle: true, dropDownOptions: { container: $root.getPopupContainer($element) } }"></div> </div> <div class="dxrd-wizard-add-queries-page dxrd-wizard-page-treelist-accordion-style dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\' }"> <div data-bind="treelist: _fieldListModel" style="width:100%; height: 100%;"></div> </div> </div> </div>',
    'dxrd-page-jsonsource': '<div class="dxrd-wizard-page dx-jsonsource-page dx-frameless-style"> <div class="dx-default-border-style dxd-border-secondary dxrd-wizard-dataMember dx-fieldset" style="height: 100%" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }, dxValidationGroup: $data._validationGroup || {}"> <div class="dx-field"> <div class="dx-property-required dx-field-label" data-bind="text: _jsonConnectionTitle, attr: { \'title\': _jsonConnectionTitle }"></div> <div class="dx-field-value" data-bind="dxTextBox: { value: _connectionName }, dxValidator: { validationRules: $data._connectionNameValidationRules || [] }"></div> </div> <div class="dx-field"> <div class="dx-field-label" data-bind="text: _jsonSourceTitle, attr: { \'title\': _jsonSourceTitle }"></div> <div class="dx-field-value" data-bind="dxLocalizedSelectBox: { dataSource: _sources, value: _selectedSource, valueExpr:\'value\', displayExpr: \'displayValue\', displayCustomValue: true, dropDownOptions: { container: $root.getPopupContainer($element) } }"></div> </div> <!-- ko with: _selectedSource --> <div data-bind="dxValidationGroup: $data.validationGroup || {}"> <div data-bind="css: $data.cssClass"> <!-- ko template: { name: \'dx-propertieseditor\', data: grid } --> <!-- /ko --> </div> <div class="dxrd-wizard-validationsummary" data-bind="dxValidationSummary: $data.validationSummary || {}, visible: $data.validationSummary && !isValid()"></div> </div> <!-- /ko --> <div class="dxrd-wizard-validationsummary" data-bind="dxValidationSummary: $data._validationSummary || {}, visible: $data._validationSummary && _selectedSource().validationSummary && !canNext()"></div> </div> </div>',
    'dx-property-json-string-editor': '<div class="dx-field" data-bind="visible: visible"> <!-- ko template: templateName --> <!-- /ko --> </div>',
    'dxrd-page-dataSource': '<div class="dxrd-wizard-page"> <!-- ko if: isDataSourceCreationAvailable --> <div class="dxrd-wizard-datasourceoperation dxrd-radio-nowrap-ellipsis" data-bind="dxRadioGroup: { value: selectedDataSourceOperation, items: dataSourceOperations, layout: \'vertical\' }"> <div data-options="dxTemplate : { name: \'item\' }"> <div class="dxrd-radio-nowrap-ellipsis-text" data-bind="text: text, attr: { \'title\': text }"></div> </div> </div> <!-- /ko --> <div class="dxrd-wizard-availabledatasources dx-default-border-style dxd-border-secondary"> <div class="dxrd-wizard-list" data-bind="dxList: { dataSource: availableDataSources, selectedItems: selectedDataSource, focusStateEnabled:false, editEnabled: true, height: dataSourcesListHeight, editConfig: { selectionEnabled: false }, selectionMode: \'single\', activeStateEnabled: false, disabled: createNewDataSource, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: name"></div> </div> </div> </div></div>',
    'dxrd-page-selectitems': '<div class="dxrd-wizard-page"> <!-- ko template: { name: \'dxrd-page-selectitems-radio-group\', data: $data } --> <!-- /ko --> <!-- ko template: { name: \'dxrd-page-selectitems-list\', data: $data } --> <!-- /ko --> </div>',
    'dxrd-page-selectitems-radio-group': '<!-- ko if: canCreateNew --> <div class="dxrd-wizard-datasourceoperation dxrd-radio-nowrap-ellipsis" data-bind="dxRadioGroup: { value: selectedOperation, items: operations, layout: \'vertical\' }"> <div data-options="dxTemplate : { name: \'item\' }"> <div class="dxrd-radio-nowrap-ellipsis-text" data-bind="text: text, attr: { \'title\': text }"></div> </div> </div> <!-- /ko -->',
    'dxrd-page-selectitems-list': '<div class="dxrd-wizard-availabledatasources dx-default-border-style dxd-border-secondary" data-bind="styleunit: { top: $data.canCreateNew() ? 65 : 0 }"> <div class="dxrd-wizard-list dxd-border-primary" data-bind="dxList: { dataSource: items, onSelectionChanged: function(e) { selectedItems(e.addedItems) }, selectedItems: selectedItems.peek(), hoverStateEnabled:false, editEnabled: true, height: \'100%\', editConfig: { selectionEnabled: false }, searchExpr: \'name\', searchEnabled: true, selectionMode: \'single\', activeStateEnabled: false, disabled: _createNew, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true, searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }"> <div data-options="dxTemplate : { name: \'item\' }" data-bind="event: { dblclick: function(e){ $parent.onDblClick() } }"> <div data-bind="text: $parent._displayExpr($data)"></div> </div> </div> </div>',
    'dxrd-page-specify-connection': '<div class="dxrd-wizard-page"> <!-- ko template: { name: \'dxrd-page-selectitems-radio-group\', data: $data } --> <!-- /ko --> <!-- ko if: !_createNew() --> <!-- ko template: { name: \'dxrd-page-selectitems-list\', data: $data } --> <!-- /ko --> <!-- /ko --> <!-- ko if: _createNew --> <div class="dxrd-page-specify-connection_createNew"> <!-- ko template: { name: \'dxrd-page-jsonsource\', data: _specifySourceData } --> <!-- /ko --> </div> <!-- /ko --></div>',
    'dx-jsonwizard-parametercollection': '<div class="dx-field"> <!-- ko with: value --> <div class="dx-jsonwizard-parameter-left-container"> <div class="dx-jsonwizard-parameter"> <div data-bind="dxLocalizedSelectBox: { dataSource: _parameterTypes, value: itemType, valueExpr:\'value\', displayExpr: \'displayValue\', displayCustomValue: true, dropDownOptions: { container: $root.getPopupContainer($element) } }"></div> </div> </div> <div class="dx-jsonwizard-parameter-middle-container"> <div data-bind="dxTextBox: { value: name, placeholder: $data.namePlaceholder() }, dxValidator: { validationRules: $parent.editor.editorOptions.nameValidationRules || [] }"></div> </div> <div class="dx-jsonwizard-parameter-right-container"> <div class="dx-jsonwizard-parameter"> <div data-bind="dxTextBox: { value: _editingValue, placeholder: $data.valuePlaceholder() }, visible: !$data.isExpression()"></div> <div data-bind="dxExpressionEditor: { options: _expression, fieldListProvider: $parent.editor.editorOptions.itemsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() }, visible: $data.isExpression"></div> </div> </div> <!-- ko template: { name: \'dx-wizard-menu-box-editorswitch\', data: $data } --> <!-- /ko  --> <!-- /ko --> </div>',
    'dx-jsonwizard-loadfile-editor': '<div data-bind="dxFileImagePicker: { value: value, placeholderId: \'File\', accept:\'.json,.txt\' }"></div>',
    'dx-jsonwizard-jsonstring-editor': '<!-- ko if: !aceAvailable --> <div class="dxrd-jsonwizard-jsonstring-editor dxd-border-secondary dxd-back-primary2" data-bind="dxTextArea: { value: value, spellcheck: false, isValid: isValid }, dxValidator: $data.validator || { validationRules: jsonStringValidationRules || [] }"></div> <!-- /ko --> <!-- ko if: aceAvailable --> <div class="dx-texteditor dx-editor-outlined dxrd-jsonwizard-jsonstring-editor dxd-wizard-jsoneditor dxd-border-secondary dxd-back-primary2" data-bind="dxAceEditor: { value: value, editorContainer: editorContainer, options: aceOptions, additionalOptions: additionalOptions }, css: { \'dx-invalid\' : !value() || !isValid() }"></div> <!-- /ko --> <div class="dxd-upload-file"> <div class="dxd-back-primary2"></div> <div data-bind="dxButtonWithTemplate: { onClick: uploadFile, hint: $data.getUploadTitle(), icon: \'dxrd-svg-wizard-Download\' }"></div> </div>',
    'dxrd-wizard-add-queries-page': '<div class="dxrd-wizard-page dxrd-wizard-add-queries-page dxrd-wizard-page-treelist-accordion-style"> <div data-bind="treeListSearchPanel: {controllers: ko.unwrap(_fieldListModel).treeListController}"></div> <div class="dxrd-wizard-dataMember dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight }"> <div data-bind="treelist: _fieldListModel" style="width:100%; height: 100%;"></div> </div> <!-- ko ifnot: $data.disableCustomSql --> <!-- ko template: { name: \'dxqb-popup-selectStatment\', data: _popupSelectStatement } --> <!-- /ko --> <!-- /ko --> <!-- ko template: { name: \'dxrd-querybuilder-popup\', data: _popupQueryBuilder } --> <!-- /ko --> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel: _loadPanelViewModel($element)"> </div> </div>',
    'dxd-custom-query-treelisitem': '<div data-bind="visible: visible"> <div class="dx-background-inheritor dxd-back-highlighted dxd-state-selected"> <div class="dx-treelist-item dx-fontsize-reestablished dxd-list-item-back-color" data-bind=" styleunit: padding, css: { \'dx-treelist-item-selected dxd-state-selected dxd-back-secondary\': isSelected }"> <div class="dx-treelist-collapsedbutton" data-bind="css: nodeImageClass"></div> <div class="dx-treelist-caption"> <!-- ko if: actions && actions.length > 0 --> <div class="dx-treelist-action-container" data-bind="visible: isSelected() || isHovered()"> <!-- ko foreach: actions --> <!-- ko if: $data.templateName --> <!-- ko template: templateName  --> <!-- /ko --> <!-- /ko --> <!-- ko if: !$data.templateName --> <div class="dx-treelist-action" data-bind="dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName, disabled: $data.disabled && $data.disabled() }, attr: { title: text }"></div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko  --> <div class="dx-treelist-selectedcontent" data-bind="click: toggleSelected"> <div class="dx-treelist-text-wrapper"> <div class="dx-add-queries-page-checkbox" data-bind="dxCheckBox: { value: data.checked }, click: function(treeNode, e) { treeNode.data.toggleChecked(); e.stopPropagation(); return true; }"></div> <div class="dx-treelist-text dx-treelist-text-with-checkbox"> <div class="dx-queryname-textbox" data-bind="dxTextBox: { value: queryName }"></div> </div> </div> </div> </div> </div> </div> </div>',
    'dxrd-configure-query-parameters-page': '<div class="dxrd-wizard-page dxrd-configure-query-parameters-page dxrd-wizard-page-treelist-accordion-style"> <div class="dxrd-wizard-dataMember dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight }"> <!-- ko if: !!$data._fieldListModel() --> <div data-bind="treelist: _fieldListModel" style="width:100%; height: 100%;"></div> <!-- /ko --> </div> </div>',
    'dxrd-wizard-configure-relations-page': '<div class="dxrd-wizard-page dxrd-wizard-configure-relations-page"> <!-- ko if: $data._relationsEditor() --> <!-- ko template: { name: \'dxrd-masterDetail-editor-complete-wizard\', data: $data._relationsEditor }--> <!-- /ko --> <!-- /ko --> </div>',
    'dxrd-masterDetail-editor-complete-wizard': '<div class="dx-filtereditor dxrd-masterDetail-editor-complete-wizard dxd-border-secondary"> <!-- ko if: $data --> <div class="dx-filtereditor-tree dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', direction: \'both\' }" style="cursor: default"> <!-- ko foreach: masterQueries --> <div class="criteria-operator-group"> <div class="criteria-operator-group-item"> <div class="criteria-operator-text dxd-filter-editor-text-color criteria-operator-item-group dxd-filter-editor-group-back-color stylized" data-bind="text: queryName"></div> <div data-bind="service: { name: \'createRelation\' }"></div> </div> <div class="criteria-operator-content"> <!-- ko template: { name: \'dx-masterDetail-editor-relation\', foreach: relations }--> <!-- /ko --> </div> </div> <!-- /ko --> </div> <div class="dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay" data-bind="dxPopupWithAutoHeight: { height: \'235px\', focusStateEnabled: false, position: $root.rtl ? { my: \'right top\', at: \'right bottom\', of: popupService.target, collision: \'flipfit\' } : { my: \'left top\', at: \'left bottom\', of: popupService.target, collision: \'flipfit\' }, wrapperAttr: { class: \'dx-selectbox-popup-wrapper dx-dropdownlist-popup-wrapper dx-filtereditor-criteriaoperator-popup dx-dropdowneditor-overlay\' }, container: $root.getPopupContainer($element), target: popupService.target, showTitle: false, showCloseButton: false, animation: {}, hideOnOutsideClick: true, shading: false, minWidth:\'170px\', maxWidth:\'500px\', width: \'auto\', visible: popupService.visible }"> <!-- ko with: popupService--> <!-- ko with: data --> <!-- ko template: template--> <!-- /ko --> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> </div>',
    'dxqb-popup-selectStatment': '<div data-bind="dxPopup: { animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, wrapperAttr: { class: \'dxqb-preview\' }, visible: isVisible, title: title(), showTitle: true, resizeEnabled: true, shading: true, shadingColor: \'transparent\', fullScreen: false, width: 800, height: 544, container: closest($element, \'.dxrd-wizard\'), position: { of: closest($element, \'.dx-designer-viewport\') }, onHidden: function() { $data.data(null) }, focusStateEnabled: false }"> <div class="dxqb-preview-popup-content"> <div class="dxqb-show-query-string-content dx-widget"> <!-- ko if: !aceAvailable --> <div class="dxrd-show-query-string-editor" data-bind="dxTextArea: { value: data, valueChangeEvent: \'keyup\', disabled: false }"></div> <!-- /ko --> <!-- ko if: aceAvailable --> <div class="dxrd-show-query-string-editor"> <div class="dxrd-show-query-string-editor-content"> <div class="dx-sql_editor dxd-back-primary2" data-bind="dxAceEditor: { value: data, additionalOptions: additionalOptions, options: aceOptions }"></div> </div> </div> <!-- /ko --> </div> </div> <div class="dxqb-preview-popup-buttons dxd-border-secondary"> <div data-bind="dxButton: { text: okButtonText(), onClick: okButtonHandler }" class="dxqb-preview-popup-button"></div> </div> </div>',
    'dxrd-treelist-with-checkbox': '<div data-bind="visible: visible"> <!-- ko if: hasContent --> <!-- ko template: "dx-treelist-accordion-item-with-checkbox" --> <!-- /ko --> <!-- /ko --> <!-- ko ifnot: hasContent --> <!-- ko template: "dx-treelist-header-item-with-checkbox" --> <!-- /ko --> <!-- /ko --> </div>',
    'dx-treelist-accordion-item-with-checkbox': '<div data-bind="dxdAccordionExt: { collapsed: collapsed, lazyContentRendering: true }"> <!-- ko template: "dx-treelist-header-item-with-checkbox" --> <!-- /ko --> <div class="dx-fieldset dx-accordion-content dxd-back-primary"> <!-- ko with: data --> <!-- ko template: { name: contenttemplate } --> <!-- /ko --> <!-- /ko --> </div> </div>',
    'dx-treelist-header-item-with-checkbox': '<div class="dx-background-inheritor dxd-back-highlighted dxd-state-selected"> <div data-bind="event: { dblclick: function() { $data.dblClickHandler ? $data.dblClickHandler($data) : $data.toggleCollapsed() }, mouseenter: mouseenter, mouseleave: mouseleave }, attr: { class: \'dx-treeview-item dx-treelist-item dx-fontsize-reestablished dxd-list-item-back-color \' + ($data.hasItems ? \'dx-treelist-list-item-content \' : \'dx-treelist-field-item-content \') + ($data.isSelected() ? \'dx-treelist-item-selected dxd-state-selected dxd-back-secondary\' : \'\') }, styleunit: padding, css: { \'dx-state-hover\': isHovered }"> <!-- ko ifnot: $data.hasItems--> <!-- ko if: $data.showIcon --> <div class="dx-treelist-image" data-bind="css: $data.imageClassName, template: {name: $data.imageTemplateName, if: !!ko.unwrap($data.imageTemplateName)}, attr: { title: text }"> </div> <!-- /ko --> <!-- ko ifnot: $data.showIcon --> <div class="dx-treelist-collapsedbutton" data-bind="css: nodeImageClass"></div> <!-- /ko --> <!-- /ko --> <!-- ko if: $data.hasItems --> <div class="dx-treelist-collapsedbutton" data-bind="css: nodeImageClass, visible: hasItems, template: \'dxrd-svg-collapsed\', click: toggleCollapsed"></div> <!-- /ko --> <div class="dx-treelist-caption"> <!-- ko if: actions && actions.length > 0 --> <div class="dx-treelist-action-container" data-bind="visible: isSelected() || isHovered()"> <!-- ko foreach: actions --> <!-- ko if: $data.templateName --> <!-- ko template: templateName  --> <!-- /ko --> <!-- /ko --> <!-- ko if: !$data.templateName --> <div class="dx-treelist-action" data-bind="dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName, disabled: $data.disabled && $data.disabled() }, attr: { title: text }"></div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko  --> <div class="dx-treelist-selectedcontent" data-bind="event: { dblclick: function() { $data.dblClickHandler && $data.dblClickHandler($data); } }, click: toggleSelected,  draggable: isDraggable ? dragDropHandler : null, css: { \'dxrd-disabled\': $data.data.disabled && $data.data.disabled() }"> <div class="dx-treelist-text-wrapper"> <div class="dx-add-queries-page-checkbox" data-bind="dxCheckBox: { value: data.checked, disabled: data.selectionDisabled }, click: function(treeNode, e) { treeNode.data.toggleChecked(); e.stopPropagation(); return true; }"></div> <!--ko if: treeListController.searchEnabled --> <div class="dx-treelist-text dx-highlighted-search-text dx-treelist-text-with-checkbox" data-bind="searchHighlighting: { text: text, textToSearch: treeListController.textToSearch, searchOptions: treeListController.searchOptions }, attr: { title: text }"></div> <!-- /ko  --> <!--ko ifnot: treeListController.searchEnabled --> <div class="dx-treelist-text dx-treelist-text-with-checkbox" data-bind="text: text, attr: { title: text }"></div> <!-- /ko  --> </div> </div> </div> </div></div>',
    'dx-treelist-action-with-popover': '<div class="dx-treelist-action-with-popover" style="display: inline-block"> <div class="dx-treelist-action" data-bind="dxButtonWithTemplate: { onClick: function() { clickAction($parent); }, icon: $data.imageTemplateName, iconClass: $data.imageClassName , disabled: $data.disabled && $data.disabled() }, attr: { title: text }"></div> <!-- ko template: { name: \'dx-popover-list-items\', data: ko.utils.extend($parent.data, { position: $root.rtl ? \'left\' : \'right\', popupContainer: $root.getPopupContainer }) }--> <!-- /ko  --> </div>',
    'dx-treelist-accordion-contenttemplate-custom-with-actions': '<div data-bind="dxPropertyGrid: { target: $parent.data.dataSourceParameter, level: $parent.data.editor.level + 1 }"></div>',
    'dxrd-page-objectdatasource-datamembers': '<div class="dx-objectdatasource-datamembers-page"> <div data-bind="dxList: { dataSource: _chooseObjectDataMember.dataMembers, selectedItems: _chooseObjectDataMember.selectedDataMembers, selectionMode: \'single\', activeStateEnabled: false, focusStateEnabled: false, searchExpr: \'displayName\', searchEnabled: true, noDataText: $dx._static.noDataText(), encodeNoDataText: true, searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: $data.displayName"></div> </div> </div> </div>',
    'dxrd-page-objectdatasource-types': '<div class="dx-objectdatasource-types-page"> <div class="dxd-border-primary" data-bind="treeListSearchPanel: {controllers: _chooseObjectType.availableTypesTreelistModel.treeListController}"></div> <div data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _chooseObjectType._scrollViewHeight}"> <div data-bind="treelist: _chooseObjectType.availableTypesTreelistModel"></div> <!-- ko if: _chooseObjectType.types && !_chooseObjectType.types().length --> <div class="dxa-no-data-message" data-bind="text: $root.dx._static.noDataText()"></div> <!-- /ko--> </div> </div>',
    'dxrd-page-objectsource': '<div class="dxrd-wizard-page dx-objectsource-page dx-frameless-style" style="position: absolute; top: 45px; left: 45px; right: 45px; bottom: 45px; margin:0"> <!-- ko foreach: _sections--> <div class="dx-border-inheritor dxd-border-accented"> <div class="dxrd-report-page-tile dxd-border-secondary" data-bind="style: position, css: { \'dxrd-disabled\': $data.disabled() }"> <div class="dxrd-report-page-tile-title" data-bind="text: $parent.showDescription($index(), description), attr: { title: $parent.showDescription($index(), description) }"></div> <div class="dxrd-report-page-tile-content dx-default-border-style dxd-border-secondary"> <!-- ko if: !$data.disabled() --> <!-- ko template: { name: template, data: data } --> <!-- /ko --> <!-- /ko --> <!-- ko if: $data.disabled() --> <div class="dxrd-wizard-page dxrd-wizard-disabled-content" data-bind="text: disabledText"></div> <!-- /ko --> </div> </div> </div> <!-- /ko --> </div>',
    'dx-objectdatasource-types-section': '<div class="dx-objectdatasource-types-section"> <div data-bind="treeListSearchPanel: {controllers: availableTypesTreelistModel.treeListController}"></div> <div data-bind="dxScrollView: { showScrollbar: \'onHover\', height: _scrollViewHeight}"> <div data-bind="treelist: availableTypesTreelistModel"></div> </div> </div>',
    'dx-objectdatasource-datamembers-section': '<div class="dx-objectdatasource-parameters-datamembers-section"> <div class="dxd-border-primary" data-bind="dxList: { dataSource: dataMembers, selectedItems: selectedDataMembers, selectionMode: \'single\', activeStateEnabled: false, focusStateEnabled: false, searchExpr: \'displayName\', searchEnabled: true, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true, searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: $data.displayName"></div> </div> </div> </div>',
    'dx-objectdatasource-parameters-grid': '<!-- ko if: !!$data --> <div class="dx-field dxd-back-primary"> <div class="dx-field-label" data-bind="text: $data.displayName, attr: { \'title\': $data.displayName}"></div> </div> <div class="dxrd-properties-wrapper"> <!-- ko foreach: _grids --> <!-- ko template: { name: \'dx-propertieseditor\', data: $data }--> <!-- /ko --> <!-- /ko --> </div> <!-- /ko -->',
    'dx-objectdatasource-expression-popup': '<!-- ko if: $data.value() --> <div data-bind="dxExpressionEditor: getOptions({ options: value, fieldListProvider: value().itemsProvider, displayNameProvider: $root.displayNameProvider && $root.displayNameProvider() })"></div> <!-- /ko -->',
    'dx-objectdatasource-parameters-section': '<div class="dx-objectdatasource-parameters-section"> <div class="dx-fieldset" data-bind="dxScrollView: { showScrollbar: \'onHover\'}"> <!-- ko template: { name: \'dx-objectdatasource-parameters-grid\', data: _ctorParametersObject }--> <!-- /ko --> <!-- ko template: { name: \'dx-objectdatasource-parameters-grid\', data: _dataMemberParametersObject }--> <!-- /ko --> </div> </div>',
    'dx-objectdatasource-configureparameters-page': '<div class="dxrd-report-page-tile-content dx-default-border-style dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\'}"> <!-- ko template: { name: \'dx-objectdatasource-parameters-section\', data: _chooseObjectParameters } --> <!-- /ko  --> </div>',
    'dxrd-page-configure-parameters': '<div class="dxrd-wizard-page"> <div class="dxrd-datasource-parameters" data-bind="dxCollectionEditor: parametersEditorOptions"></div> </div>',
    'dxrd-parameter-collection-item': '<div class="dx-accordion" data-bind="dxdAccordion: { collapsed: collapsed }"> <div class="dxrd-group-header dx-accordion-header dxd-text-primary dxd-border-primary" style="border-bottom: 0" data-bind="styleunit: { \'marginLeft\' : editor.padding }, css: { \'dxrd-group-header-collapsed\': collapsed() }"> <div class="dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !collapsed() }" style="display:inline-block;"></div> <span class="dxrd-group-header-text dxd-text-primary" data-bind="text: value().name"></span> </div> <div class="dx-accordion-content dxd-border-primary"> <div data-bind="dxPropertyGrid: { target: value, level: editor.level + 1 }"></div> </div> </div>',
    'dxrd-wizard-datasource-parameters': '<div class="dx-fieldset" style="height:100%"> <div class="dx-collectioneditor" style="height:100%"> <div class="dxrd-datasource-parameters-collection"> <div class="dxrd-datasource-parameters-container dxd-border-secondary" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true  }"> <!-- ko if: values().length === 0 --> <div class="dx-collectioneditor-empty dxd-empty-area-placeholder-text-color dxd-text-info"> <span class="dxrd-datasource-parameters-empty-text" data-bind="text: getDisplayTextEmptyArray()"></span> </div> <!-- /ko --> <!-- ko if: values().length !== 0 --> <div class="dx-collectioneditor-items" data-bind="foreach: values"> <div class="dx-background-inheritor dxd-back-highlighted dxd-state-selected" data-bind="with: $parent.createCollectionItemWrapper($parents[1], $index, $element)"> <div class="dx-collectioneditor-item-container dx-fontsize-reestablished dxd-list-item-back-color" data-bind="dxclick: $parents[1].select, css: { \'dxd-state-selected dxd-back-secondary\' : $parents[1].selectedIndex() === $index() }"> <div class="dx-collection-item"></div> </div> </div> </div> <!-- /ko --> </div> </div> <div class="dxrd-collectioneditor-wizard-buttons" data-bind="visible: showButtons"> <div class="dxrd-collectioneditor-action" data-bind="dxButton: { onClick: add, text: getDisplayTextButton(\'add\') }, attr: { title: getDisplayTextButton(\'add\') }"></div> <div class="dxrd-collectioneditor-action" data-bind="dxButton: { onClick: remove, disabled: selectedIndex() === null, text: $parent.removeButtonTitle }, attr: { title: $parent.removeButtonTitle }"></div> </div> </div> </div>',
    'dxrd-page-connectionstring': '<div class="dxrd-wizard-page"> <div class="dx-wizard-connections dx-default-border-style dxd-border-secondary"> <div class="dxrd-wizard-list dxd-border-primary" data-bind="dxList: { dataSource: _connectionStrings, onSelectionChanged: function(e) { _selectedConnectionString(e.addedItems) },  selectedItems: _selectedConnectionString.peek(), focusStateEnabled: false, searchEnabled: true, searchExpr: \'description\', editEnabled: true, editConfig: { selectionEnabled: true }, selectionMode: \'single\', activeStateEnabled: false, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true, searchEditorOptions: { placeholder: $root.dx._static.searchPlaceholder() } }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: $data[\'description\'] || $data[\'name\']"></div> </div> </div> </div> </div>',
    'dxrd-select-control': '<div class="dxrd-create-query-page-query-header"> <div class="dx-editquery-editor" data-bind="text: caption()"></div> <div class="dxd-hyperlink-color dxd-text-accented" data-bind="visible: !runQueryBuilderDisabled, text: $parent.runQueryBuilderBtnText, click: function() { $parent.runQueryBuilder() }"></div> </div> <!-- ko if: !aceAvailable --> <div class="dxrd-wizard-list dxrd-create-query-page-editor dx-default-border-style dxd-border-secondary dx-editquery-editor" data-bind="dxTextArea: { value: sqlString, valueChangeEvent: \'keyup input blur\', readOnly: disableCustomSql() }"></div> <!-- /ko --> <!-- ko if: aceAvailable --> <div class="dxrd-create-query-page-editor dxrd-create-query-page-editor-border dxd-border-secondary dx-editquery-editor"> <div class="dxrd-create-query-page-editor-content"> <div class="dx-sql_editor dxd-back-primary2" data-bind="dxAceEditor: { value: sqlString, additionalOptions: additionalOptions, options: aceOptions }, css: { \'dx-disabled-ace\': disableCustomSql() }"></div> </div> </div> <!-- /ko -->',
    'dxrd-procedures-control': '<div style="margin-top: 20px" class="dx-editquery-editor" data-bind="text: caption()"></div> <div class="dx-editquery-editor dx-default-border-style dxd-border-secondary"> <div class="dxrd-wizard-list dxrd-create-query-page-editor" data-bind="dxList: { dataSource: storedProcedures, searchEnabled: true, searchExpr: \'name\', onContentReady: scrollActiveItem, selectedItems: selectedProcedure, editEnabled: true, editConfig: { selectionEnabled: true }, selectionMode: \'single\', activeStateEnabled: false, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true }"> <div data-options="dxTemplate : { name: \'item\' }"> <div data-bind="text: $parent.generateStoredProcedureDisplayName($data)"></div> </div> </div> </div>',
    'dxrd-wizard-create-query-page': '<div class="dxrd-wizard-page dxrd-wizard-create-query-page"> <div class="dxrd-create-query-page-content"> <div data-bind="text: queryNameCaption()"></div> <div class="dx-editquery-editor" data-bind="dxTextBox: { value: queryName, placeholder: $data.placeholder() }"></div> <div class="dxrd-radio-nowrap-ellipsis" data-bind="dxRadioGroup: { value: selectedQueryType, layout: \'horizontal\', items: queryTypeItems }"> <div data-options="dxTemplate : { name: \'item\' }"> <div class="dxrd-radio-nowrap-ellipsis-text" data-bind="text: $parent.localizeQueryType($data), attr: { \'title\': $parent.localizeQueryType($data) }"></div> </div> </div> <!-- ko template: { name: queryControl().template, data: queryControl() } --> <!-- /ko --> </div> <!-- ko template: { name: \'dxrd-querybuilder-popup\', data: popupQueryBuilder } --> <!-- /ko --> </div>',
    'dxrd-querybuilder-popup': '<div data-bind="dxPopup: popupViewModel($element)"> <!-- ko if: qbOptions --> <!-- ko if: isVisible --> <div class="dxrd-querybuilder-popup-content"> <div style="height:100%;" data-bind="dxQueryBuilder: qbOptions"></div> </div> <!-- /ko --> <div class="dxrd-querybuilder-popup-buttons dxd-border-secondary"> <div data-bind="dxButton: { text: getDisplayText(\'previewResults\'), onClick: previewHandler, disabled: okButtonDisabled }" class="dxrd-querybuilder-popup-button-left"></div> <div data-bind="dxButton: { text: getDisplayText(\'cancel\'), onClick: cancelHandler }" class="dxrd-querybuilder-popup-button"></div> <div data-bind="dxButton: { text: getDisplayText(\'ok\'), type: \'default\', onClick: okHandler, disabled: okButtonDisabled }" class="dxrd-querybuilder-popup-button"></div> </div> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel:{ animation: { show: { type: \'fade\', from: 0, to: 1, duration: 700 }, hide: { type: \'fade\', from: 1, to: 0, duration: 700 } }, deferRendering: false, message: getDisplayText(\'loading\'), visible: showLoadIndicator, shading: true, shadingColor: \'transparent\'}"> </div> <!-- /ko --> </div>',
    'dxrd-querybuilder': '<div class="dx-designer dx-querybuilder" data-bind="template: \'dxrd-designer\'"> </div>',
    'dx-wizard-menu-box-editorswitch': '<div class="dxrd-editormenu-box dxd-property-grid-menu-box-color dxd-back-highlighted" data-bind="css: { \'dxd-state-active\': $data.isExpression() }, dxButtonWithTemplate: { onClick: switchEditors, icon: \'dxrd-svg-wizard-expressions\' }"> </div>',
    'dx-popover-list-items': '<div data-bind="dxPopover: { wrapperAttr: { class: $data.className }, width: $data.width || 200, position: position, visible: popoverVisible, target: target, container: popupContainer($element)}"> <div data-bind="attr: { class: $data.className + \'-list\'}, dxList: { dataSource: popoverListItems(), onItemClick: itemClickAction }"> <div data-bind="attr: { class: $data.className + \'-list-item\'}"  data-options="dxTemplate : { name: \'item\' }"> <div class="dx-text-content" data-bind="text: name, attr: { title: name }"></div> </div> </div> </div>',
    'dx-wizard-headerNew': '<div class="dxrd-wizard-header-custom"> <!-- ko with: _currentPage --> <div class="dxrd-span-title" data-bind="text: $data.title || $parent.title"></div> <div class="dxrd-span-description" data-bind="text: description, attr: { title: description }"></div> <!-- /ko --> </div>',
    'dx-wizard-newlayout': '<div class="dxrd-wizard dx-editors dxd-text-primary" data-bind="dxPopup: { animation: { show: { type: \'fadeIn\', duration: 700 }, hide: { type: \'fadeOut\', duration: 700 } }, visible: isVisible, wrapperAttr: { class: \'dxrd-wizard dx-editors dxd-text-primary\' }, title: isVisible() ? title : \'\', showTitle: true, fullScreen: false, width: width, height: height, container: $element, visualContainer: _container($element), titleTemplate: _titleTemplate, position: _wizardPopupPosition($element) }, cssArray: [ $data._extendCssClass, { \'dx-rtl\': $root.rtl, \'dx-ltr\': !$root.rtl }]"> <div class="dxrd-wizard-content"> <!-- ko with: _currentPage --> <div style="height: 100%" data-bind="template: { name: template, data: page } "></div> <!-- /ko --> <div class="dxrd-wizard-load-panel dxd-text-primary" data-bind="dxLoadPanel: _loadPanelViewModel($element)"></div> </div> <div class="dxrd-wizard-navigation"> <div data-bind="dxButton: cancelButton" class="dxrd-wizard-btn left"></div> <div data-bind="dxButton: finishButton" class="dxrd-wizard-btn right"></div> <div data-bind="dxButton: nextButton" class="dxrd-wizard-btn right"></div> <div data-bind="dxButton: previousButton" class="dxrd-wizard-btn right"></div> </div> </div>'
});

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dragDrop/_columnDragHandler.js










class _columnDragHandler_ColumnDragHandler extends external_DevExpress_Analytics_Internal_["DragDropHandler"] {
    constructor(querySurface, selection, undoEngine, snapHelper, dragHelperContent) {
        super(querySurface, selection, undoEngine, snapHelper, dragHelperContent);
        this.querySurface = querySurface;
        this.undoEngine = undoEngine;
        this._dragColumn = external_ko_["observable"](null);
        this._dragConditionSurface = null;
        this.dragDropConnector = external_ko_["observable"](null);
        this.cursor = 'arrow';
        this.containment = '.dxrd-ghost-container';
        this['helper'] = undefined;
    }
    _needToCreateRelation() {
        if (!(this.selection.dropTarget && this.selection.dropTarget instanceof columnSurface_ColumnSurface))
            return false;
        var table = this.selection.dropTarget.getControlModel().parentModel();
        return table !== this.getDragColumn().parentModel();
    }
    startDrag(control) {
        this._scrollProcessor = new external_DevExpress_Analytics_Internal_["dxScrollProcessor"](document.getElementsByClassName('dxqb-mainwin')[0]);
        if (control instanceof connectionPointSurface_ConnectionPointSurface) {
            var condition = control.getControlModel().parentModel();
            this._dragConditionSurface = Object(external_DevExpress_Analytics_Internal_["findSurface"])(condition);
            if (!this._dragConditionSurface)
                return;
            this._dragConditionSurface.isVisible(false);
            this._dragColumn((condition.startPoint() === control.getControlModel()) ? condition.nestedColumn() : condition.parentColumn());
        }
        else if (!(control instanceof columnSurface_ColumnSurface)) {
            throw new Error('ColumnDragHandler can be applied to the Column only.');
        }
        else {
            this._dragColumn(control.getControlModel());
        }
        var connectorModel = new routedConnectorModel_RoutedConnectorViewModel({}, this.querySurface().getControlModel());
        this.dragDropConnector(new routedConnectorSurface_RoutedConnectorSurface(connectorModel, this.surface()));
    }
    setConnectorPoints(cursorPosition) {
        var startColumn = this._dragColumn(), connectorModel = this.dragDropConnector().getControlModel();
        if (this._needToCreateRelation()) {
            var points = determineConnectingPoints(startColumn, this.selection.dropTarget.getControlModel());
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
    }
    drag(event, uiElement) {
        var scrollOffset = this._scrollProcessor.getScrollOffset();
        uiElement.dataset.leftPosition = Object(external_DevExpress_Analytics_Internal_["convertToCssPixelUnits"])(Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.leftPosition) + (uiElement['scroll'].left + scrollOffset.left));
        uiElement.dataset.topPosition = Object(external_DevExpress_Analytics_Internal_["convertToCssPixelUnits"])(Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.topPosition) + (uiElement['scroll'].top + scrollOffset.top));
        uiElement['delta'].left = Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.leftPosition) - this.surface()['underCursor']().x - 6;
        uiElement['delta'].top = Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(uiElement.dataset.topPosition) - this.surface()['underCursor']().y - 6;
        this.setConnectorPoints(this._getAbsoluteSurfacePosition(uiElement));
        this._scrollProcessor.processOffset({ x: event.clientX, y: event.clientY });
    }
    doStopDrag() {
        this._scrollProcessor.dispose();
        this._scrollProcessor = null;
        this.dragHelperContent.reset();
        this.dragDropConnector() && this.dragDropConnector().dispose();
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
                    this.selection.initialize(Object(external_DevExpress_Analytics_Internal_["findSurface"])(condition));
                }
            }
        }
        finally {
            this._dragColumn(null);
        }
    }
    getDragColumn() {
        return this._dragColumn();
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/dragDrop/_dbObjectDragDropHandler.js







class _dbObjectDragDropHandler_DbObjectDragDropHandler extends external_DevExpress_Analytics_Internal_["DragDropHandler"] {
    constructor(surface, selection, _undoEngine, snapHelper, dragHelperContent) {
        super(surface, selection, _undoEngine, snapHelper, dragHelperContent);
        this._undoEngine = _undoEngine;
        this._query = () => this._querySurface().getControlModel();
        this.getDropCallback = (undoEngine, suggestLocation) => ((item, query) => {
            var newControl = query.createChild(Object(external_DevExpress_Analytics_Internal_["extend"])({ '@ControlType': 'Table', '@Name': item.data.name }, controlsFactory.controlsMap['Table'].defaultVal));
            if (newControl.isInitialized()) {
                query.tryToCreateRelationsByFK(newControl);
            }
            else {
                newControl.isInitialized.subscribe(() => {
                    undoEngine().start();
                    query.tryToCreateRelationsByFK(newControl);
                    undoEngine().end();
                });
            }
            if (suggestLocation) {
                this.suggestLocation(newControl, query);
            }
            return newControl;
        });
        this._querySurface = surface;
        this.cursor = 'arrow';
        this.containment = '.dxqb-designer';
        this['cursorAt'] = {
            top: 0,
            left: 0
        };
        this['helper'] = (draggable) => {
            super.helper(draggable);
            this.recalculateSize(external_DevExpress_Analytics_Elements_["Size"].fromString('199, 123'));
            dragHelperContent.setContent(new external_DevExpress_Analytics_Elements_["Rectangle"](0, 0, this._size.width(), this._size.height()));
        };
    }
    suggestLocation(newControl, query) {
        var posX = Math.max.apply(null, query.tables.peek()
            .filter(t => t !== newControl)
            .map((t) => t.location.x.peek() + t.size.width.peek() * 3 / 2)
            .concat([30]));
        newControl.location.x(posX);
        newControl.location.y(65);
    }
    startDrag(draggable) {
        if (draggable && draggable.name) {
            this._query().dbSchemaProvider.getDbTable(draggable.name);
        }
    }
    doStopDrag(uiElement, _) {
        this.dragHelperContent.reset();
        if (this.selection.dropTarget) {
            var position = this._getAbsoluteSurfacePosition(uiElement);
            this._querySurface().underCursor().x = position.left - this._querySurface()['absolutePosition'].x();
            this._querySurface().underCursor().y = position.top - this._querySurface()['absolutePosition'].y();
            var item = external_ko_["dataFor"](uiElement);
            var control = this.getDropCallback(this._undoEngine, false)(item, this._query());
            this.addControl(control, this._querySurface(), this._size);
        }
    }
    addControl(control, dropTargetSurface, size) {
        dropTargetSurface.getControlModel().addChild(control);
        var controlSurface = Object(external_DevExpress_Analytics_Internal_["findSurface"])(control);
        if (!controlSurface)
            return;
        controlSurface.rect({ left: dropTargetSurface.underCursor().x, top: dropTargetSurface.underCursor().y, width: size.width() });
        this.selection.initialize(controlSurface);
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/_callbacks.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/relationSurface.js



class relationSurface_RelationSurface extends external_DevExpress_Analytics_Elements_["SurfaceElementBase"] {
    constructor(control, context) {
        super(control, context, null);
        this.conditions = external_ko_["observableArray"]();
        this.template = 'dxqb-relation';
        Object(external_DevExpress_Analytics_Internal_["createObservableArrayMapCollection"])(control.conditions, this.conditions, this._createSurface);
    }
    _getChildrenHolderName() {
        return 'conditions';
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/joinConditionModelMeta.js

var ConditionType = {
    Equal: 'Equal',
    NotEqual: 'NotEqual',
    Greater: 'Greater',
    GreaterOrEqual: 'GreaterOrEqual',
    Less: 'Less',
    LessOrEqual: 'LessOrEqual'
};
var joinConditionSerializationInfo = [
    { propertyName: 'left', displayName: 'Left', editor: editorTemplates.getEditor('text'), disabled: true, localizationId: 'AnalyticsCoreStringId.QueryBuilder_LeftOperand' },
    { propertyName: 'right', displayName: 'Right', editor: editorTemplates.getEditor('text'), disabled: true, localizationId: 'AnalyticsCoreStringId.QueryBuilder_RightOperand' },
    { propertyName: 'parentColumnName', modelName: '@Parent' },
    { propertyName: 'nestedColumnName', modelName: '@Nested' },
    {
        propertyName: 'joinType',
        displayName: 'Join Type',
        editor: editorTemplates.getEditor('combobox'),
        defaultVal: 'Inner',
        valuesArray: [
            { value: 'Inner', displayValue: 'Inner join', localizationId: 'DataAccessStringId.RelationEditorRelationTypeInnerJoin' },
            { value: 'LeftOuter', displayValue: 'Left outer join', localizationId: 'DataAccessStringId.RelationEditorRelationTypeLeftOuterJoin' },
            { value: 'RightOuter', displayValue: 'Right outer join', localizationId: 'DataAccessStringId.RelationEditorRelationTypeRightOuterJoin' },
            { value: 'FullOuter', displayValue: 'Full outer join', localizationId: 'DataAccessStringId.RelationEditorRelationTypeFullOuterJoin' },
        ],
        localizationId: 'AnalyticsCoreStringId.QueryBuilder_JoinType'
    },
    {
        propertyName: 'operator',
        modelName: '@Operator',
        displayName: 'Operator',
        editor: editorTemplates.getEditor('combobox'),
        defaultVal: ConditionType.Equal,
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

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/elements/joinConditionSurface.js


class joinConditionSurface_JoinConditionSurface extends routedConnectorSurface_RoutedConnectorSurface {
    constructor(control, context) {
        super(control, context);
        this._disposables.push(this.showArrow = external_ko_["pureComputed"](() => {
            return control.joinType() === 'LeftOuter' || control.joinType() === 'FullOuter';
        }));
        this._disposables.push(this.showRightArrow = external_ko_["pureComputed"](() => {
            return control.joinType() === 'RightOuter' || control.joinType() === 'FullOuter';
        }));
    }
    container() {
        return this.getRoot();
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/_controlsFactory.js





















function _controlsFactory_registerControls() {
    registerControls();
    controlsFactory.registerControl('Unknown', {
        info: metadata_unknownSerializationsInfo,
        type: external_DevExpress_Analytics_Elements_["ElementViewModel"],
        nonToolboxItem: true,
        surfaceType: external_DevExpress_Analytics_Elements_["SurfaceElementBase"],
        isDeleteDeny: true
    });
    controlsFactory.registerControl('Relation', {
        info: relationSerializationInfo,
        defaultVal: {},
        surfaceType: relationSurface_RelationSurface,
        popularProperties: [],
        type: relationModel_RelationViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    controlsFactory.registerControl('JoinCondition', {
        info: joinConditionSerializationInfo,
        defaultVal: {},
        surfaceType: joinConditionSurface_JoinConditionSurface,
        popularProperties: ['_parentColumnName', '_nestedColumnName', 'joinType'],
        type: joinConditionModel_JoinConditionViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    controlsFactory.registerControl('Table', {
        info: tableSerializationInfo,
        defaultVal: {},
        surfaceType: tableSurface_TableSurface,
        popularProperties: ['name', 'alias', 'columns'],
        type: tableModel_TableViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    controlsFactory.registerControl('Column', {
        info: columnSerializationInfo,
        defaultVal: {},
        surfaceType: columnSurface_ColumnSurface,
        popularProperties: ['name', 'alias', 'selected'],
        type: columnModel_ColumnViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true,
        isDeleteDeny: true
    });
    controlsFactory.registerControl('Query', {
        info: querySerializationsInfo,
        surfaceType: querySurface_QuerySurface,
        popularProperties: ['name', 'filterString', 'groupFilterString'],
        type: queryModel_QueryViewModel,
        elementActionsTypes: [],
        isContainer: true,
        nonToolboxItem: true,
        isDeleteDeny: true
    });
    controlsFactory.registerControl('FTable', {
        info: tableSerializationInfo,
        defaultVal: {},
        surfaceType: _federationQueryModel_FederationTableSurface,
        popularProperties: ['name', 'alias', 'columns'],
        type: _federationQueryModel_FederationTableViewModel,
        elementActionsTypes: [],
        nonToolboxItem: true
    });
    controlsFactory.registerControl('FQuery', {
        info: federationQuerySerializationsInfo,
        surfaceType: _federationQueryModel_FederationQuerySurface,
        popularProperties: ['name'],
        type: _federationQueryModel_FederationQueryViewModel,
        elementActionsTypes: [],
        isContainer: true,
        nonToolboxItem: true,
        isDeleteDeny: true
    });
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/utils/_queryBuilderTreeListController.js

class _queryBuilderTreeListController_QueryBuilderTreeListController extends external_DevExpress_Analytics_Widgets_Internal_["TreeListController"] {
    constructor(undoEngine, query, dragDropHandler) {
        super();
        this.undoEngine = undoEngine;
        this.query = query;
        this._dragDropHandler = dragDropHandler.getDropCallback(undoEngine, true);
    }
    dblClickHandler(item) {
        this.undoEngine().start();
        this._dragDropHandler(item, this.query());
        this.undoEngine().end();
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/_accordionTabInfo.js







var parametersInfo = { propertyName: 'parameters', displayName: 'parameters', editor: { custom: 'dxqb-parameterspanel' } };
var selectedItemInfo = { propertyName: 'selectedItem', displayName: 'selectedItem', editor: { custom: 'dxqb-propertygrid' } };
var fieldsInfo = { propertyName: 'fields', displayName: 'fields', editor: { custom: 'dxqb-fieldspanel' } };
var queryInfo = { propertyName: 'query', displayName: 'query', editor: { custom: 'dxqb-propertygrid' } };
class _accordionTabInfo_AccordionTabInfo extends external_DevExpress_Analytics_Utils_["TabInfo"] {
    constructor(query, itemPropertiesTabInfoModel, undoEngine, focused, showParameters) {
        super({
            text: 'Properties',
            template: 'dxqb-properties-wrapper',
            model: _accordionTabInfo_AccordionTabInfo._createQBPropertyGrid(query, itemPropertiesTabInfoModel, undoEngine, showParameters)
        });
        this.active(true);
        this._getGroupByName('Fields').collapsed(false);
        this._disposables.push(focused.subscribe((newVal) => {
            if (!(newVal instanceof queryModel_QueryViewModel)) {
                var group = this._getGroupByName('SelectedItem');
                group.collapsed(false);
            }
        }));
    }
    static _getSelectedItemPropertyName(model) {
        var text = 'Selection Properties';
        var id = 'AnalyticsCoreStringId.QueryBuilder_SelectionProperties';
        switch (model && model.controlType) {
            case 'Query':
            case 'FQuery':
                text = 'Query Properties';
                id = 'AnalyticsCoreStringId.QueryBuilder_QueryProperties';
                break;
            case 'Table':
            case 'FTable':
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
        return Object(external_DevExpress_Analytics_Utils_["getLocalization"])(text, id);
    }
    static _createWrappedObject(query, commonModel, undoEngine, showParameters) {
        var modelProperties = new external_DevExpress_Analytics_Widgets_["ObjectProperties"](query, null, 1);
        var modelValues = external_ko_["computed"](() => query() && query().parameters);
        var info = [queryInfo, selectedItemInfo, fieldsInfo];
        var object = {
            selectedItem: commonModel,
            query: {
                editableObject: query,
                properties: modelProperties
            },
            fields: commonModel,
            isPropertyVisible: (propertyName) => {
                if (propertyName === 'selectedItem') {
                    return commonModel.editableObject() !== query();
                }
                return true;
            }
        };
        if (showParameters) {
            object['parameters'] = {
                values: modelValues,
                addHandler: () => new parameterModel_ParameterViewModel({ '@Type': 'System.String' }),
                collapsed: false,
                undoEngine: undoEngine,
                isVisibleButton: (index, button) => button === 'add' || button === 'delete',
                template: '#dxqb-collectioneditor-template',
                textEmptyArray: { text: 'Click the Add button to create a parameter.', localizationId: 'AnalyticsCoreStringId.QueryBuilder_PageConfigureParametersEmpty' }
            };
            info.push(parametersInfo);
        }
        object['getInfo'] = () => info;
        return object;
    }
    static _createGroups(editableObject, showParameters) {
        var groups = {
            'Query': {
                info: [queryInfo],
                displayName: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Query Properties', 'AnalyticsCoreStringId.QueryBuilder_QueryProperties')
            },
            'SelectedItem': {
                info: [selectedItemInfo],
                displayName: () => this._getSelectedItemPropertyName(editableObject())
            },
            'Fields': {
                info: [fieldsInfo],
                displayName: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Available tables and views', 'AnalyticsCoreStringId.QueryBuilder_AvailableTables')
            }
        };
        if (showParameters)
            groups['Parameters'] = {
                info: [parametersInfo],
                displayName: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Parameters', 'AnalyticsCoreStringId.QueryBuilder_Parameters')
            };
        return groups;
    }
    static _createQBPropertyGrid(query, commonModel, undoEngine, showParameters) {
        var object = this._createWrappedObject(query, commonModel, undoEngine, showParameters);
        var grid = new external_DevExpress_Analytics_Internal_["ControlProperties"](external_ko_["observable"](object), {
            groups: this._createGroups(commonModel.editableObject, showParameters),
            editors: object['getInfo']()
        }, undefined, false);
        return grid;
    }
    _getGroupByName(name) {
        return this.model.groups.filter(x => x['_displayName'] === name)[0];
    }
}
class _accordionTabInfo_SelectedTabInfo extends external_DevExpress_Analytics_Utils_["TabInfo"] {
    constructor(model) {
        super({
            text: 'Properties',
            template: 'dxqb-properties-wrapper-editorlist',
            model: model
        });
        this.model = model;
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/_bindings.js







external_ko_["bindingHandlers"]['dxdTableView'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var templateHtml = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxd-tableview'), $element = external_jQuery_["fn"].constructor(element).append(templateHtml), $titles, $content, rtl = !!bindingContext.$root.rtl, value = external_ko_["unwrap"](valueAccessor());
        var onDataScroll = (e) => {
            if (e.scrollOffset.left >= 0) {
                if (!$titles)
                    $titles = $element.find('.dxd-tableview-titles');
                if (!$content)
                    $content = $element.find('.dxd-tableview-data table');
                $titles.offset({ left: $content.offset().left, top: $titles.offset().top });
            }
        };
        var onDataScrollInitialized = (e) => {
            $content = null;
            if (!rtl)
                return;
            var dxScroll = e.component;
            setTimeout(() => dxScroll.scrollTo({ left: dxScroll.scrollWidth(), top: 0 }), 1);
        };
        external_ko_["applyBindings"]({
            onDataScroll: onDataScroll,
            onDataScrollInitialized: onDataScrollInitialized,
            data: value,
            rtl: rtl,
            noDataText: external_DevExpress_Analytics_Internal_["noDataText"],
            isImage: index => value.schema[index].type === 'System.Byte[]',
            isImageTooLarge: cellValue => cellValue[0] === '!',
            getImageTooLargeText: cellValue => 'Image too large (' + cellValue.substring(1) + ' bytes)'
        }, $element.children()[0]);
        $element.find('.dxd-tableview-titles .dxd-tableview-resizable').each((index, resizable) => {
            var $title = external_jQuery_["fn"].constructor(resizable).find('.dxd-tableview-cell-text');
            var $column = $element.find('.dxd-tableview-data .dxd-tableview-resizable' + index);
            if (index < value.schema.length - 1) {
                var resizableElement = new external_DevExpress_Analytics_Internal_["Resizable"](resizable, {
                    handles: 'e',
                    start: (e, ui) => { },
                    stop: () => { },
                    resize: (e, element) => {
                        const startResizePosition = Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(element.dataset.originalLeftMousePosition);
                        const originalWidth = Object(external_DevExpress_Analytics_Internal_["convertFromCssPixelUnits"])(element.dataset.originalWidth);
                        const sizeDiff = e.x - startResizePosition;
                        const newWidth = originalWidth + sizeDiff;
                        element.style.width = Object(external_DevExpress_Analytics_Internal_["convertToCssPixelUnits"])(newWidth);
                        $title.outerWidth(newWidth);
                        $column.outerWidth(newWidth);
                        $column.parent().width(newWidth);
                    }
                }).initialize();
                Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(resizable, () => {
                    resizableElement.dispose();
                });
            }
            var maxWidth = Math.max($title.width(), $column.width());
            $title.width(maxWidth);
            $column.width(maxWidth);
        });
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])($element.children()[0], () => {
            $element = null;
        });
        return { controlsDescendantBindings: true };
    }
};

// EXTERNAL MODULE: external "DevExpress.config"
var external_DevExpress_config_ = __webpack_require__(11);
var external_DevExpress_config_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_config_);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/_initializer.js


































var QueryBuilderElements = {
    Surface: 'dxrd-surface-template-base',
    Toolbar: 'dxqb-toolbar',
    RightPanel: 'dx-right-panel-lightweight',
    RightPanelSwitcher: 'dx-right-panel-switcher',
    DataPreview: 'dxqb-popup#data',
    SqlPreview: 'dxqb-popup#sql'
};
function customizeDesignerActions(designerModel, nextCustomizer) {
    var query = designerModel.model;
    return ((actions) => {
        var del = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(actions, action => action.text === 'Delete');
        del.imageClassName = 'dx-icon-dxrd-image-recycle-bin';
        del.imageTemplateName = 'dxrd-svg-operations-recycle_bin_xl';
        var undo = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(actions, action => action.text === 'Undo');
        undo.disabled = external_ko_["pureComputed"](() => designerModel.isLoading() || !designerModel.undoEngine().undoEnabled());
        var redo = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(actions, action => action.text === 'Redo');
        actions.splice(0, actions.length, del, undo, redo);
        actions.push({
            id: ActionId.Save,
            text: 'Save',
            displayText: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Save', 'AnalyticsCoreStringId.MenuButtons_Save'),
            imageClassName: 'dxqb-image-save',
            imageTemplateName: 'dxrd-svg-menu-save',
            disabled: designerModel.isLoading,
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 'S'.charCodeAt(0) },
            clickAction: () => {
                query().save();
            },
            hasSeparator: true
        });
        actions.push({
            id: ActionId.DataPreview,
            text: 'Preview Results',
            displayText: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Preview Results', 'DataAccessUIStringId.QueryBuilderButtons_PreviewResults'),
            imageClassName: 'dxrd-image-data-preview',
            imageTemplateName: 'dxrd-svg-queryBuilder-data_preview',
            disabled: designerModel.isLoading,
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 'P'.charCodeAt(0) },
            clickAction: () => {
                if (!query().canSave())
                    return;
                designerModel.showPreview();
            },
            hasSeparator: true
        });
        actions.push({
            id: ActionId.SelectStatementPreview,
            text: 'Preview Select Statement',
            displayText: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Preview Select Statement', 'AnalyticsCoreStringId.QueryBuilder_PreviewSelectStatement_Tooltip'),
            imageClassName: 'dxrd-image-selectstatement-preview',
            imageTemplateName: 'dxrd-svg-queryBuilder-select_statment',
            disabled: designerModel.isLoading,
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 'E'.charCodeAt(0) },
            clickAction: () => {
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
    return () => {
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
function createIsLoadingFlag(model, dbSchemaProvider) {
    var isDbSchemaLoaded = external_ko_["observable"](false);
    model()._disposables.push(dbSchemaProvider.subscribe(() => { isDbSchemaLoaded(false); }));
    return external_ko_["pureComputed"](function () {
        dbSchemaProvider.peek().getDbSchema().done(() => {
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
function _createDesignerModel(query, surface, options) {
    var querySubscription = query.subscribe((newValue) => {
        surface(new querySurface_QuerySurface(newValue));
        surface().rtl(!!options.rtl);
    });
    var selection = new external_DevExpress_Analytics_Internal_["SurfaceSelection"](['alias', 'name', 'sortOrder']);
    var designer = Object(external_DevExpress_Analytics_Internal_["createDesigner"])(query, surface, controlsFactory, undefined, undefined, undefined, !!options.rtl, selection);
    designer.addDisposables(querySubscription);
    designer.findControl = (s, e) => {
        var $childs = external_jQuery_["fn"].constructor('.dxqb-main').children('.dxrd-control');
        $childs.each((_, child) => {
            var $child = external_jQuery_["fn"].constructor(child);
            if ($child.offset().top <= e.clientY && $child.offset().left <= e.clientX) {
                designer.selection.focused(external_ko_["dataFor"]($child[0]));
                return;
            }
        });
    };
    designer.addDisposables({ dispose: () => designer.findControl = null });
    return designer;
}
function _updateSurfaceContentSizeSubscription(element, designerModel, surface, callback) {
    var updateSurfaceContentSize_ = updateQueryBuilderSurfaceContentSize(() => external_jQuery_["fn"].constructor(element).find('.dxqb-designer'), designerModel.surfaceSize, surface);
    designerModel.addDisposables(surface.subscribe(() => { updateSurfaceContentSize_(); }));
    var onResize = () => {
        setTimeout(() => updateSurfaceContentSize_());
    };
    window.addEventListener('resize', onResize);
    Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
        window.removeEventListener('resize', onResize);
        designerModel.disposableContainer.dispose();
    });
    designerModel.addDisposables(designerModel.tabPanel.width.subscribe(() => {
        updateSurfaceContentSize_();
    }));
    designerModel.updateSurfaceSize = () => {
        updateSurfaceContentSize_();
    };
    designerModel.updateSurface = () => {
        updateSurfaceContentSize_();
        callback && callback();
    };
}
function _createQueryBuilder(element, options, callbacks, applyBindings = true) {
    const disposableCallback = callbacks && callbacks.onServerError && Object(external_DevExpress_Analytics_Internal_["processErrorEvent"])(callbacks.onServerError);
    var wrapper = options.requestWrapper || new requestwrapper_RequestWrapper();
    var parametersMode = options.parametersMode || ParametersMode.ReadWrite;
    HandlerUri(options.handlerUri);
    if (options.queryModelJson) {
        var dataSource = new sqlDataSource_SqlDataSource(JSON.parse(options.dataSourceJson));
        options.dbSchemaProvider = Object(external_DevExpress_Analytics_Internal_["_wrapModelInObservable"])(options.dbSchemaProvider);
        options.dbSchemaProvider(new dbSchemaProvider_DBSchemaProvider(dataSource.connection));
        options.querySource = Object(external_DevExpress_Analytics_Internal_["_wrapModelInObservable"])(options.querySource);
        options.querySource(JSON.parse(options.queryModelJson));
    }
    var dataConnection = options.dbSchemaProvider().connection;
    var query = external_ko_["observable"](), surface = external_ko_["observable"](), treeListOptions = external_ko_["observable"]();
    var beforeSaveCallback = (data) => {
        callbacks.saveQueryRequested({
            queryLayout: encodeURIComponent(JSON.stringify(data)),
            connection: encodeURIComponent(serializeDataConnection(dataConnection))
        });
    };
    var initQuery = (querySource) => {
        query(new queryModel_QueryViewModel(querySource, options.dbSchemaProvider(), parametersMode, (data) => beforeSaveCallback(data)));
    };
    initQuery(options.querySource());
    var designerModel = _createDesignerModel(query, surface, options);
    disposableCallback && designerModel.addDisposables(disposableCallback);
    designerModel.rootStyle = 'dxqb-designer dxd-back-primary-invariant';
    var previewPopupContainer = external_DevExpress_Analytics_Internal_["getParentContainer"];
    designerModel.dataPreview = {
        isLoading: external_ko_["observable"](false),
        isVisible: external_ko_["observable"](false),
        title: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Data Preview (First 100 Rows Displayed)', 'AnalyticsCoreStringId.DataPreview_Title'),
        template: 'dxqb-data-preview',
        data: {
            value: external_ko_["observable"]()
        },
        okButtonText: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('OK', 'DataAccessUIStringId.Button_OK'),
        okButtonHandler: (e) => {
            e.model.isVisible(false);
        },
        container: previewPopupContainer
    };
    designerModel.selectStatmentPreview = {
        isLoading: external_ko_["observable"](false),
        isVisible: external_ko_["observable"](false),
        template: 'dxqb-selectstatment-preview',
        title: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Select Statement Preview', 'AnalyticsCoreStringId.QueryBuilder_SelectStatementPreview_Title'),
        data: {
            value: external_ko_["observable"](),
            aceOptions: createDefaultSQLAceOptions(true),
            aceAvailable: Object(external_DevExpress_Analytics_Widgets_Internal_["aceAvailable"])(),
            additionalOptions: createDefaultSQLAdditionalOptions((newVal) => { designerModel.selectStatmentPreview.data.value(newVal); }),
            languageHelper: createDefaultSQLLanguageHelper()
        },
        okButtonText: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('OK', 'DataAccessUIStringId.Button_OK'),
        okButtonHandler: (e) => {
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
    designerModel.columnDragHandler = new _columnDragHandler_ColumnDragHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.fieldDragHandler = new _dbObjectDragDropHandler_DbObjectDragDropHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.connectionPointDragHandler = designerModel.columnDragHandler;
    designerModel.resizeHandler['handles'] = 'e,w';
    designerModel.columnsLoadingMsg = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Loading...', 'DataAccessWebStringId.QueryBuilder_ColumnsLoading');
    var init = (querySource) => {
        initQuery(querySource);
        treeListOptions({
            itemsProvider: options.dbSchemaProvider(),
            treeListController: new _queryBuilderTreeListController_QueryBuilderTreeListController(designerModel.undoEngine, query, designerModel.fieldDragHandler),
            selectedPath: external_ko_["observable"](),
            pageSize: 100,
            templateName: 'dxqb-treelist-item-with-search'
        });
    };
    designerModel.addDisposables(options.querySource.subscribe((newValue) => {
        init(newValue);
    }));
    init(options.querySource());
    var tablesTop = external_ko_["observable"](Object(external_DevExpress_Analytics_Internal_["calculateWithZoomFactor"])(355)), itemPropertiesTabInfoModel = {
        editableObject: designerModel.editableObject,
        properties: new external_DevExpress_Analytics_Widgets_["ObjectProperties"](designerModel.editableObject, null, 1),
        fieldListModel: { treeListOptions: treeListOptions },
        tablesTop: tablesTop,
        searchPlaceholder: () => Object(external_DevExpress_Analytics_Internal_["searchPlaceholder"])()
    };
    var tabPanelItem = new _accordionTabInfo_AccordionTabInfo(query, itemPropertiesTabInfoModel, designerModel.undoEngine, designerModel.selection.focused, parametersMode === ParametersMode.ReadWrite);
    var tabPanel = designerModel.tabPanel;
    tabPanel.tabs.length = 0;
    tabPanel.tabs.push(tabPanelItem);
    tabPanel.width(Object(external_DevExpress_Analytics_Internal_["calculateWithZoomFactor"])(375));
    designerModel.fieldDragHandler = new _dbObjectDragDropHandler_DbObjectDragDropHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.fieldListProvider = new _queryBuilderObjectsProvider_QueryBuilderObjectsProvider(query, _queryBuilderObjectsProvider_QueryBuilderObjectsProvider.whereClauseObjectsFilter);
    designerModel.dataBindingsProvider = designerModel.fieldListProvider;
    designerModel.parametersBindingsProvider = options.parametersItemsProvider || designerModel.dataBindingsProvider;
    designerModel.dataBindingsGroupProvider = new _queryBuilderObjectsProvider_QueryBuilderObjectsProvider(query, _queryBuilderObjectsProvider_QueryBuilderObjectsProvider.groupByObjectsFilter);
    designerModel.isLoading = createIsLoadingFlag(designerModel.model, options.dbSchemaProvider);
    designerModel.actionLists = new external_DevExpress_Analytics_Internal_["ActionLists"](surface, designerModel.selection, designerModel.undoEngine, customizeDesignerActions(designerModel, callbacks && callbacks.customizeActions));
    if (!designerModel.isLoading()) {
        designerModel.undoEngine && designerModel.undoEngine().clearHistory();
    }
    designerModel.addDisposables(designerModel.isLoading.subscribe((value) => {
        designerModel.undoEngine && designerModel.undoEngine().clearHistory();
    }));
    designerModel.selection.focused(surface());
    var subscribe = surface.subscribe((newValue) => {
        designerModel.selection.focused(newValue);
    });
    designerModel.addDisposables({ dispose: () => subscribe.dispose() });
    designerModel.addDisposables(designerModel.editableObject.subscribe((newValue) => {
        tablesTop.notifySubscribers(null);
    }));
    Object(external_DevExpress_Analytics_Internal_["appendStaticContextToRootViewModel"])(designerModel);
    if (applyBindings) {
        callbacks && callbacks.beforeRender && callbacks.beforeRender(designerModel);
        external_jQuery_["fn"].constructor(element).empty();
        external_ko_["cleanNode"](element);
        external_ko_["applyBindings"](designerModel, element);
    }
    _updateSurfaceContentSizeSubscription(element, designerModel, surface, () => tablesTop(355));
    if (applyBindings) {
        designerModel.updateSurface();
    }
    designerModel.showPreview = () => {
        designerModel.dataPreview.isLoading(true);
        designerModel.dataPreview.isVisible(true);
        wrapper.getDataPreview(dataConnection, JSON.stringify(query().serialize(true)))
            .done((data) => {
            designerModel.dataPreview.data.value(JSON.parse(data.dataPreviewJSON));
            designerModel.dataPreview.isLoading(false);
        }).fail((data) => {
            designerModel.dataPreview.isVisible(false);
            Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(data));
        });
    };
    designerModel.showStatement = () => {
        designerModel.selectStatmentPreview.isLoading(true);
        designerModel.selectStatmentPreview.isVisible(true);
        wrapper.getSelectStatement(dataConnection, JSON.stringify(query().serialize(true)))
            .done((data) => {
            if (data.errorMessage)
                Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(data.errorMessage);
            designerModel.selectStatmentPreview.data.value(data.sqlSelectStatement);
            designerModel.selectStatmentPreview.isLoading(false);
        }).fail((data) => {
            designerModel.selectStatmentPreview.isVisible(false);
            Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(data));
        });
    };
    return designerModel;
}
function createQueryBuilder(element, options, callbacks, applyBindings = true) {
    if (options.localization) {
        Object(external_DevExpress_Analytics_Utils_["addCultureInfo"])({
            messages: options.localization
        });
    }
    external_DevExpress_config_default()({ rtlEnabled: !!options.rtl });
    _controlsFactory_registerControls();
    var promises = [];
    callbacks && callbacks.customizeLocalization && callbacks.customizeLocalization(promises);
    return Object(external_DevExpress_Analytics_Internal_["resolveFromPromises"])(promises, () => _createQueryBuilder(element, options, callbacks, applyBindings));
}
function createQueryBuilderSurface(element, options, queryCreator) {
    var query = external_ko_["observable"](), surface = external_ko_["observable"]();
    _controlsFactory_registerControls();
    var designerModel = _createDesignerModel(query, surface, options);
    var selectedTabPanel = new _accordionTabInfo_SelectedTabInfo(new external_DevExpress_Analytics_Widgets_["ObjectProperties"](designerModel.editableObject, null, 1));
    var tabPanel = designerModel.tabPanel;
    var switcher = new _rightPanelSwitcher_RightPanelSwitcher(tabPanel.collapsed, designerModel.editableObject, options.showPropertyGridCondition, _accordionTabInfo_AccordionTabInfo._getSelectedItemPropertyName);
    designerModel.addDisposables(selectedTabPanel, tabPanel, switcher);
    tabPanel.tabs.length = 0;
    tabPanel.tabs.push(selectedTabPanel);
    tabPanel.width(Object(external_DevExpress_Analytics_Internal_["calculateWithZoomFactor"])(325));
    designerModel.parts = [
        { id: QueryBuilderElements.Surface, templateName: QueryBuilderElements.Surface, model: designerModel },
        { id: QueryBuilderElements.RightPanel, templateName: QueryBuilderElements.RightPanel, model: designerModel },
        { id: QueryBuilderElements.RightPanelSwitcher, templateName: QueryBuilderElements.RightPanelSwitcher, model: switcher },
    ];
    designerModel.columnDragHandler = new _columnDragHandler_ColumnDragHandler(surface, designerModel.selection, designerModel.undoEngine, designerModel.snapHelper, designerModel.dragHelperContent);
    designerModel.connectionPointDragHandler = designerModel.columnDragHandler;
    designerModel.selection.focused(surface());
    designerModel.addDisposables(surface.subscribe((newValue) => {
        designerModel.selection.focused(newValue);
    }));
    designerModel.rootStyle = 'dxqb-designer dxd-back-primary-invariant';
    designerModel.resizeHandler['handles'] = 'e,w';
    designerModel.columnsLoadingMsg = () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Loading...', 'DataAccessWebStringId.QueryBuilder_ColumnsLoading');
    Object(external_DevExpress_Analytics_Internal_["appendStaticContextToRootViewModel"])(designerModel);
    query(queryCreator(options));
    external_jQuery_["fn"].constructor(element).empty();
    external_ko_["cleanNode"](element);
    external_ko_["applyBindings"](designerModel, element);
    _updateSurfaceContentSizeSubscription(element, designerModel, surface);
    designerModel.isLoading(false);
    designerModel.updateSurface();
    Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
        query() && query().dispose();
        surface() && surface().dispose();
        queryCreator = null;
        designerModel.disposableContainer.dispose();
        designerModel.dispose();
    });
    return designerModel;
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/_legacy.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/_queryBuilderModel.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/queryBuilder-internal.js


































// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/queryBuilder-elements.js

































// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/queryBuilder-elements-metadata.js

















// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/binding/jsQueryBuilder.js



class jsQueryBuilder_JSQueryBuilder {
    constructor(_queryBuilderModel) {
        this._queryBuilderModel = _queryBuilderModel;
    }
    get queryBuilderModel() {
        return this._queryBuilderModel();
    }
    set queryBuilderModel(newVal) {
        this._queryBuilderModel(newVal);
    }
    UpdateLocalization(localization) {
        Object(external_DevExpress_Analytics_Utils_["updateLocalization"])(localization);
    }
    GetQueryBuilderModel() {
        return this.queryBuilderModel;
    }
    GetJsonQueryModel() {
        return { 'Query': this.queryBuilderModel.model().serialize() };
    }
    GetSaveQueryModel() {
        return {
            queryLayout: JSON.stringify(this.GetJsonQueryModel()),
            connection: this.SerializeDataConnection()
        };
    }
    SerializeDataConnection() {
        var connection = this.queryBuilderModel.model().dbSchemaProvider.connection;
        return serializeDataConnection(connection);
    }
    AdjustControlCore() {
        this.queryBuilderModel && this.queryBuilderModel.updateSurfaceSize();
    }
    Save() {
        this.queryBuilderModel && this.queryBuilderModel.model().onSave();
    }
    ShowPreview() {
        this.queryBuilderModel && this.queryBuilderModel.showPreview();
    }
    IsQueryValid() {
        return this.queryBuilderModel && this.queryBuilderModel.model().isValid();
    }
    OnCallback(result) {
        if (result.queryValidationError) {
            Object(external_DevExpress_Analytics_Internal_["NotifyAboutWarning"])(result.queryValidationError, true);
        }
    }
}

// EXTERNAL MODULE: external "DevExpress.localization"
var external_DevExpress_localization_ = __webpack_require__(12);

// EXTERNAL MODULE: external "DevExpress.Analytics.Localization"
var external_DevExpress_Analytics_Localization_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/binding/eventGenerator.js


class eventGenerator_EventGenerator {
    static generateQueryBuilderEvents(fireEvent) {
        var beforeRenderEvent = { publicName: 'BeforeRender', privateName: 'beforeRender' };
        var saveQueryRequestedEvent = { publicName: 'SaveQueryRequested', privateName: 'saveQueryRequested' };
        var customizeActionsEvent = { publicName: 'CustomizeMenuActions', privateName: 'customizeActions' };
        var customizeLocalizationEvent = { publicName: 'CustomizeLocalization', privateName: 'customizeLocalization' };
        var onServerErrorEvent = { publicName: 'OnServerError', 'privateName': 'onServerError' };
        customizeActionsEvent['callback'] = function customizeActions(actions) {
            fireEvent(customizeActionsEvent.publicName, {
                Actions: actions,
                GetById: (actionId) => {
                    return actionId ? actions.filter(function (item) { return actionId === item.id; })[0] : null;
                }
            });
        };
        customizeLocalizationEvent['callback'] = function customizeLocalization(localizationCallbacks) {
            fireEvent(customizeLocalizationEvent.publicName, {
                LoadMessages: (messages) => {
                    if (!messages)
                        return;
                    if (typeof messages.then === 'function') {
                        localizationCallbacks.push(messages);
                    }
                    else {
                        Object(external_DevExpress_Analytics_Localization_["loadMessages"])(messages);
                    }
                },
                WidgetLocalization: external_DevExpress_localization_
            });
        };
        onServerErrorEvent['callback'] = function onServerError(args) {
            fireEvent(onServerErrorEvent.publicName, { Error: args });
        };
        beforeRenderEvent['callback'] = function beforeRender(designerModel) {
            fireEvent(beforeRenderEvent.publicName, designerModel);
        };
        saveQueryRequestedEvent['callback'] = function saveQueryRequested(queryModel) {
            fireEvent(saveQueryRequestedEvent.publicName, queryModel);
        };
        return [
            beforeRenderEvent,
            saveQueryRequestedEvent,
            customizeActionsEvent,
            customizeLocalizationEvent,
            onServerErrorEvent
        ];
    }
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/binding/jsQueryBuilderBinding.js










class jsQueryBuilderBinding_JSQueryBuilderBinding extends external_DevExpress_Analytics_Internal_["JSDesignerBindingCommon"] {
    constructor(options, customEventRaiser) {
        super(external_ko_["unwrap"](options), customEventRaiser);
        this.options = options;
        this._deferreds = [];
        this._templateHtml = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrd-querybuilder');
        options.queryBuilderModel = Object(external_DevExpress_Analytics_Internal_["_wrapModelInObservable"])(options.queryBuilderModel);
        this.sender = new jsQueryBuilder_JSQueryBuilder(options.queryBuilderModel);
        options.callbacks && options.callbacks._eventSenderCreated && options.callbacks._eventSenderCreated(this.sender);
    }
    _applyBindings(model, _$element) {
        this._disposables.push(model);
        _$element.children().remove();
        var child = _$element.append(this._templateHtml).children()[0];
        if (!child)
            return;
        external_ko_["cleanNode"](child);
        this._callbacks && this._callbacks.beforeRender && this._callbacks.beforeRender(model);
        external_ko_["applyBindings"](model, child);
        var updateSizeTimeout = setTimeout(() => {
            model && model.updateSurfaceSize();
        }, 1);
        this._disposables.push({ dispose: () => clearTimeout(updateSizeTimeout) });
    }
    _initializeCallbacks() {
        if (this._options.callbacks) {
            var queryBuilderEvents = eventGenerator_EventGenerator.generateQueryBuilderEvents((eventName, args) => {
                this._fireEvent(eventName, args);
            });
            this._checkCallbackName(queryBuilderEvents);
            var availableEvents = this._generateCallbackDictionary(queryBuilderEvents);
            return availableEvents;
        }
    }
    _createModel(element) {
        this._callbacks = this._initializeCallbacks();
        return createQueryBuilder(element, this._options, this._callbacks, false);
    }
    dispose() {
        (this._deferreds || []).forEach((deferred) => {
            deferred.reject();
        });
        super.dispose();
    }
    applyBindings(element) {
        var _$element = external_jQuery_["fn"].constructor(element);
        var requestOptions = this._options.requestOptions;
        var applyModel = () => {
            if (requestOptions && requestOptions.invokeAction) {
                this._options.handlerUri = this._getServerActionUrl(requestOptions.host, requestOptions.invokeAction);
            }
            this._deferreds.push(this._createModel(element)
                .done((queryBuilderModel) => {
                this.options.queryBuilderModel(queryBuilderModel);
                this.sender.queryBuilderModel = queryBuilderModel;
                this._createDisposeFunction(element);
                this._applyBindings(this.sender.queryBuilderModel, _$element);
            }));
        };
        if (requestOptions) {
            this._getLocalizationRequest().done((localization) => {
                localization && Object(external_DevExpress_Analytics_Utils_["addCultureInfo"])(localization);
            }).always(() => {
                applyModel();
            });
        }
        else {
            applyModel();
        }
    }
}
const queryBuilderBindingName = 'dxQueryBuilder';
class jsQueryBuilderBinding_DxQueryBuilder extends external_DevExpress_Analytics_Internal_["DxAnalyticsComponentCommon"] {
    getBindingName() {
        return queryBuilderBindingName;
    }
}
Object(external_DevExpress_Analytics_Widgets_Internal_["registerBaseBinding"])(queryBuilderBindingName, '$data');
external_ko_["bindingHandlers"][queryBuilderBindingName] = {
    init: function (element, valueAccessor) {
        var values = external_ko_["unwrap"](valueAccessor());
        new jsQueryBuilderBinding_JSQueryBuilderBinding(values || {}).applyBindings(element);
        return { controlsDescendantBindings: true };
    }
};
external_ko_["bindingHandlers"]['dxQueryBuilderSurface'] = {
    init: function (element, valueAccessor) {
        var values = external_ko_["unwrap"](valueAccessor());
        var options = values.options;
        var templateHtml = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrd-querybuilder'), $element = external_jQuery_["fn"].constructor(element).append(templateHtml);
        var model = createQueryBuilderSurface($element.children()[0], options, values.creator);
        options.queryBuilderModel(model);
        return { controlsDescendantBindings: true };
    }
};

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/query-builder/binding/jsQueryBuilderBindingOptions.js


// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/querybuilder.js









// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/bundle/_add-querybuilder-to-bundle.js















function _addQueryBuilderToBundle(bundle) {
    bundle.Analytics = bundle.Analytics || {};
    bundle.QueryBuilder = querybuilder_namespaceObject;
    bundle.Analytics.Diagram = analytics_diagram_namespaceObject;
    bundle.Analytics.Data = analytics_data_namespaceObject;
    bundle.Analytics.Data.Internal = analytics_data_internal_namespaceObject;
    bundle.Analytics.Data.Utils = analytics_data_utils_namespaceObject;
    bundle.Analytics.Data.Metadata = analytics_data_metadata_namespaceObject;
    bundle.Analytics.Wizard = analytics_wizard_namespaceObject;
    bundle.Analytics.Wizard.Internal = analytics_wizard_internal_namespaceObject;
    bundle.QueryBuilder.Widgets = queryBuilder_widgets_namespaceObject;
    bundle.QueryBuilder.Widgets.Internal = queryBuilder_widgets_internal_namespaceObject;
    bundle.QueryBuilder.Metadata = queryBuilder_metadata_namespaceObject;
    bundle.QueryBuilder.Utils = queryBuilder_utils_namespaceObject;
    bundle.QueryBuilder.Internal = queryBuilder_internal_namespaceObject;
    bundle.QueryBuilder.Elements = queryBuilder_elements_namespaceObject;
    bundle.QueryBuilder.Elements.Metadata = queryBuilder_elements_metadata_namespaceObject;
    return bundle;
}

// CONCATENATED MODULE: ./node_modules/@devexpress/analytics-core/bundle/query-builder-bundle.js

const DevExpress = window.DevExpress || {};
_addQueryBuilderToBundle(DevExpress);
/* harmony default export */ var query_builder_bundle = __webpack_exports__["default"] = ({
    QueryBuilder: DevExpress['QueryBuilder'],
    Analytics: DevExpress['Analytics'],
});


/***/ })
/******/ ]);