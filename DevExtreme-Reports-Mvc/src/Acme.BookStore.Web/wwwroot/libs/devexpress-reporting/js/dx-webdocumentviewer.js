/**
* DevExpress HTML/JS Reporting (dist\js\dx-webdocumentviewer.js)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets.Internal;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ko;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Utils;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Internal;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = DevExpress.events;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = DevExpress.utils.browser;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = DevExpress.ui.dxGallery;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = DevExpress.ui.dxPopup;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = DevExpress.data.DataSource;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = DevExpress.ui.dxTextBox;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = DevExpress.data.ArrayStore;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = DevExpress.registerComponent;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Internal.dxversions;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Localization;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = DevExpress.localization;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Elements;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = DevExpress.config;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = DevExpress.ui.dxScrollView;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting.js
var reporting_namespaceObject = {};
__webpack_require__.r(reporting_namespaceObject);
__webpack_require__.d(reporting_namespaceObject, "ImageSource", function() { return imageSource_ImageSource; });
__webpack_require__.d(reporting_namespaceObject, "convertMapToKeyValuePair", function() { return convertMapToKeyValuePair; });
__webpack_require__.d(reporting_namespaceObject, "EventGenerator", function() { return eventGenerator_EventGenerator; });
__webpack_require__.d(reporting_namespaceObject, "CustomizeExportOptionsEventArgs", function() { return exportOptionsEventArgs_CustomizeExportOptionsEventArgs; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-editing.js
var reporting_editing_namespaceObject = {};
__webpack_require__.r(reporting_editing_namespaceObject);
__webpack_require__.d(reporting_editing_namespaceObject, "Categories", function() { return Categories; });
__webpack_require__.d(reporting_editing_namespaceObject, "EditingFieldExtensions", function() { return editingFieldExtensions_EditingFieldExtensions; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-export.js
var reporting_export_namespaceObject = {};
__webpack_require__.r(reporting_export_namespaceObject);
__webpack_require__.d(reporting_export_namespaceObject, "CsvExportOptions", function() { return csvExportOptions_CsvExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "DocxExportDocumentOptions", function() { return docxExportDocumentOptions_DocxExportDocumentOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "docxExportDocumentOptionsSerializationInfo", function() { return docxExportDocumentOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_namespaceObject, "DocxExportOptions", function() { return docxExportOptions_DocxExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "AdditionalRecipientModel", function() { return emailExportOptions_AdditionalRecipientModel; });
__webpack_require__.d(reporting_export_namespaceObject, "additionalRecipientSerializationsInfo", function() { return additionalRecipientSerializationsInfo; });
__webpack_require__.d(reporting_export_namespaceObject, "ExportOptions", function() { return exportOptions_ExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "HtmlExportOptions", function() { return htmlExportOptions_HtmlExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "ImageExportOptions", function() { return imageExportOptions_ImageExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "MhtExportOptions", function() { return mhtExportOptions_MhtExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "PdfExportDocumentOptions", function() { return pdfExportDocumentOptions_PdfExportDocumentOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "author", function() { return author; });
__webpack_require__.d(reporting_export_namespaceObject, "application", function() { return application; });
__webpack_require__.d(reporting_export_namespaceObject, "title", function() { return title; });
__webpack_require__.d(reporting_export_namespaceObject, "subject", function() { return subject; });
__webpack_require__.d(reporting_export_namespaceObject, "pdfExportDocumentOptionsSerializationInfo", function() { return pdfExportDocumentOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_namespaceObject, "PdfPermissionsOptions", function() { return pdfPermissionsOptions_PdfPermissionsOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "pdfExportPermissionsOptionsSerializationInfo", function() { return pdfExportPermissionsOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_namespaceObject, "PdfPasswordSecurityOptions", function() { return pdfPasswordSecurityOptions_PdfPasswordSecurityOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "pdfEncryptionLevel", function() { return pdfEncryptionLevel; });
__webpack_require__.d(reporting_export_namespaceObject, "pdfExportPasswordSecurityOptionsSerializationInfo", function() { return pdfExportPasswordSecurityOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_namespaceObject, "PdfExportOptions", function() { return pdfExportOptions_PdfExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "PrintPreviewOptions", function() { return printPreviewOptions_PrintPreviewOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "RtfExportOptions", function() { return rtfExportOptions_RtfExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "TextExportOptions", function() { return textExportOptions_TextExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "XlsExportOptions", function() { return xlsExportOptions_XlsExportOptions; });
__webpack_require__.d(reporting_export_namespaceObject, "XlsxExportOptions", function() { return xlsxExportOptions_XlsxExportOptions; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-export-metadata.js
var reporting_export_metadata_namespaceObject = {};
__webpack_require__.r(reporting_export_metadata_namespaceObject);
__webpack_require__.d(reporting_export_metadata_namespaceObject, "csvExportOptionsSerializationInfo", function() { return csvExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "docxDocumentOptions", function() { return docxDocumentOptions; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "docxExportOptionsSerializationInfo", function() { return docxExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "nativeFormatOptionsSerializationInfo", function() { return nativeFormatOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "additionalRecipients", function() { return additionalRecipients; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "emailOptionsSerializationInfo", function() { return emailOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "exportOptionsSerializationInfo", function() { return exportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "htmlExportOptionsSerializationInfoBase", function() { return htmlExportOptionsSerializationInfoBase; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "htmlExportOptionsSerializationInfo", function() { return htmlExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "imageExportOptionsSerializationInfoBase", function() { return imageExportOptionsSerializationInfoBase; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "imageExportOptionsSerializationInfo", function() { return imageExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "pageBorderColor", function() { return pageBorderColor; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "pageBorderWidth", function() { return pageBorderWidth; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "pageRange", function() { return pageRange; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "expotOptionsTitle", function() { return expotOptionsTitle; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "htmlTableLayout", function() { return htmlTableLayout; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "docxTableLayout", function() { return docxTableLayout; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "allowURLsWithJSContent", function() { return allowURLsWithJSContent; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "rasterizationResolution", function() { return rasterizationResolution; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "rasterizeImages", function() { return rasterizeImages; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "useHRefHyperlinks", function() { return useHRefHyperlinks; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "exportWatermarks", function() { return exportWatermarks; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "inlineCss", function() { return inlineCss; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "removeSecondarySymbols", function() { return removeSecondarySymbols; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "characterSet", function() { return characterSet; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "getExportModeValues", function() { return getExportModeValues; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "exportPageBreaks", function() { return exportPageBreaks; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "rtfExportMode", function() { return rtfExportMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "docxExportMode", function() { return docxExportMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "htmlExportMode", function() { return htmlExportMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "embedImagesInHTML", function() { return embedImagesInHTML; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "imageExportMode", function() { return imageExportMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsExportMode", function() { return xlsExportMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsxExportMode", function() { return xlsxExportMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "textExportMode", function() { return textExportMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsTextExportMode", function() { return xlsTextExportMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "csvTextSeparator", function() { return csvTextSeparator; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "useCustomSeparator", function() { return useCustomSeparator; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "textEncodingType", function() { return textEncodingType; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsExportHyperlinks", function() { return xlsExportHyperlinks; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsRawDataMode", function() { return xlsRawDataMode; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsShowGridLines", function() { return xlsShowGridLines; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsExportOptionsSheetName", function() { return xlsExportOptionsSheetName; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "mhtExportOptionsSerializationInfoBase", function() { return mhtExportOptionsSerializationInfoBase; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "mhtExportOptionsSerializationInfo", function() { return mhtExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "pdfACompatibilityValues", function() { return pdfACompatibilityValues; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "pdfACompatibility", function() { return pdfACompatibility; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "pdfUACompatibilityValues", function() { return pdfUACompatibilityValues; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "pdfUACompatibility", function() { return pdfUACompatibility; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "pdfExportOptionsSerializationInfo", function() { return pdfExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "printPreviewOptionsSerializationInfo", function() { return printPreviewOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "rtfExportOptionsSerializationInfoBase", function() { return rtfExportOptionsSerializationInfoBase; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "emptyFirstPageHeaderFooter", function() { return emptyFirstPageHeaderFooter; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "keepRowHeight", function() { return keepRowHeight; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "rtfExportOptionsSerializationInfo", function() { return rtfExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "textExportOptionsSerializationInfo", function() { return textExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsExportOptionsSerializationInfoCommon", function() { return xlsExportOptionsSerializationInfoCommon; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsExportOptionsSerializationInfoBase", function() { return xlsExportOptionsSerializationInfoBase; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsExportOptionsSerializationInfo", function() { return xlsExportOptionsSerializationInfo; });
__webpack_require__.d(reporting_export_metadata_namespaceObject, "xlsxExportOptionsSerializationInfo", function() { return xlsxExportOptionsSerializationInfo; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-internal.js
var reporting_internal_namespaceObject = {};
__webpack_require__.r(reporting_internal_namespaceObject);
__webpack_require__.d(reporting_internal_namespaceObject, "Locker", function() { return Locker; });
__webpack_require__.d(reporting_internal_namespaceObject, "cultureInfo", function() { return cultureInfo; });
__webpack_require__.d(reporting_internal_namespaceObject, "generateGuid", function() { return generateGuid; });
__webpack_require__.d(reporting_internal_namespaceObject, "createFullscreenComputed", function() { return createFullscreenComputed; });
__webpack_require__.d(reporting_internal_namespaceObject, "processZoomFactor", function() { return processZoomFactor; });
__webpack_require__.d(reporting_internal_namespaceObject, "transformNewLineCharacters", function() { return transformNewLineCharacters; });
__webpack_require__.d(reporting_internal_namespaceObject, "editorTemplates", function() { return editorTemplates; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-metadata.js
var reporting_metadata_namespaceObject = {};
__webpack_require__.r(reporting_metadata_namespaceObject);
__webpack_require__.d(reporting_metadata_namespaceObject, "previewBackColor", function() { return previewBackColor; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewSides", function() { return previewSides; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewBorderColor", function() { return previewBorderColor; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewBorderStyle", function() { return previewBorderStyle; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewBorderDashStyle", function() { return previewBorderDashStyle; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewBorderWidth", function() { return previewBorderWidth; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewForeColor", function() { return previewForeColor; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewFont", function() { return previewFont; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewPadding", function() { return previewPadding; });
__webpack_require__.d(reporting_metadata_namespaceObject, "previewTextAlignment", function() { return previewTextAlignment; });
__webpack_require__.d(reporting_metadata_namespaceObject, "brickStyleSerializationsInfo", function() { return brickStyleSerializationsInfo; });
__webpack_require__.d(reporting_metadata_namespaceObject, "defaultCulture", function() { return defaultCulture; });
__webpack_require__.d(reporting_metadata_namespaceObject, "availableCultures", function() { return availableCultures; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer.js
var reporting_viewer_namespaceObject = {};
__webpack_require__.r(reporting_viewer_namespaceObject);
__webpack_require__.d(reporting_viewer_namespaceObject, "ActionId", function() { return ActionId; });
__webpack_require__.d(reporting_viewer_namespaceObject, "ExportFormatID", function() { return ExportFormatID; });
__webpack_require__.d(reporting_viewer_namespaceObject, "PreviewElements", function() { return PreviewElements; });
__webpack_require__.d(reporting_viewer_namespaceObject, "ZoomAutoBy", function() { return ZoomAutoBy; });
__webpack_require__.d(reporting_viewer_namespaceObject, "ReportPreview", function() { return reportPreview_ReportPreview; });
__webpack_require__.d(reporting_viewer_namespaceObject, "JSReportViewer", function() { return jsReportViewer_JSReportViewer; });
__webpack_require__.d(reporting_viewer_namespaceObject, "JSReportViewerBinding", function() { return jsReportViewerBinding_JSReportViewerBinding; });
__webpack_require__.d(reporting_viewer_namespaceObject, "DxReportViewer", function() { return jsReportViewerBinding_DxReportViewer; });
__webpack_require__.d(reporting_viewer_namespaceObject, "DateRangeDialogElementsKeyboardHelper", function() { return _dateRangeKeyboardHelper_DateRangeDialogElementsKeyboardHelper; });
__webpack_require__.d(reporting_viewer_namespaceObject, "PredefinedDateRangesKeyboardHelper", function() { return _dateRangeKeyboardHelper_PredefinedDateRangesKeyboardHelper; });
__webpack_require__.d(reporting_viewer_namespaceObject, "PreviewBricksKeyboardHelper", function() { return _previewBricksKeyboardHelper_PreviewBricksKeyboardHelper; });
__webpack_require__.d(reporting_viewer_namespaceObject, "PreviewEditingFieldsKeyboardHelper", function() { return _previewEditingFieldsKeyboardHelper_PreviewEditingFieldsKeyboardHelper; });
__webpack_require__.d(reporting_viewer_namespaceObject, "SearchKeyboardHelper", function() { return _searchKeyboardHelper_SearchKeyboardHelper; });
__webpack_require__.d(reporting_viewer_namespaceObject, "MobilePreviewElements", function() { return MobilePreviewElements; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-editing.js
var reporting_viewer_editing_namespaceObject = {};
__webpack_require__.r(reporting_viewer_editing_namespaceObject);
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "ImageAlignment", function() { return ImageAlignment; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "ImageSizeMode", function() { return ImageSizeMode; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "sizing", function() { return sizing; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "imageAlignment", function() { return imageAlignment; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "EditingField", function() { return editingField_EditingField; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "CharacterCombEditingFieldViewModel", function() { return characterCombEditingField_CharacterCombEditingFieldViewModel; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "GlyphStyle", function() { return GlyphStyle; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "CheckState", function() { return CheckState; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "createCustomGlyphStyleCss", function() { return createCustomGlyphStyleCss; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "getCheckBoxTemplate", function() { return getCheckBoxTemplate; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "CheckEditingFieldViewModel", function() { return checkEditingField_CheckEditingFieldViewModel; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "ImageEditingFieldViewModel", function() { return imageEditingField_ImageEditingFieldViewModel; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "PopupImageEditingFieldViewModel", function() { return popupImageEditingField_PopupImageEditingFieldViewModel; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "DefaultImageEditingFieldViewModel", function() { return DefaultImageEditingFieldViewModel; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "TextEditingFieldViewModelBase", function() { return textEditingField_TextEditingFieldViewModelBase; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "TextEditingFieldViewModel", function() { return textEditingField_TextEditingFieldViewModel; });
__webpack_require__.d(reporting_viewer_editing_namespaceObject, "focusTextElement", function() { return focusTextElement; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-export.js
var reporting_viewer_export_namespaceObject = {};
__webpack_require__.r(reporting_viewer_export_namespaceObject);
__webpack_require__.d(reporting_viewer_export_namespaceObject, "CsvExportOptionsPreview", function() { return csvExportOptionsPreview_CsvExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "DocxExportOptionsPreview", function() { return docxExportOptionsPreview_DocxExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "DocxExportOptionsMergedPreview", function() { return docxExportOptionsPreview_DocxExportOptionsMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "ExportOptionsModel", function() { return exportOptionsModel_ExportOptionsModel; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "ExportOptionsEventHandlers", function() { return ExportOptionsEventHandlers; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "ExportOptionsPreview", function() { return exportOptionsPreview_ExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "ExportOptionsMergedPreview", function() { return exportOptionsPreview_ExportOptionsMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "HtmlExportOptionsPreview", function() { return htmlExportOptionsPreview_HtmlExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "HtmlExportOptionsMergedPreview", function() { return htmlExportOptionsPreview_HtmlExportOptionsMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "ImageExportOptionsPreview", function() { return imageExportOptionsPreview_ImageExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "ImageExportOptionsMergedPreview", function() { return imageExportOptionsPreview_ImageExportOptionsMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "rtfExportModeMergedPreview", function() { return rtfExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "docxExportModeMergedPreview", function() { return docxExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "excludeModesForMergedDocuments", function() { return excludeModesForMergedDocuments; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "excludeDifferentFilesMode", function() { return excludeDifferentFilesMode; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "htmlExportModePreviewBase", function() { return htmlExportModePreviewBase; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "htmlExportModePreview", function() { return htmlExportModePreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "htmlExportModeMergedPreview", function() { return htmlExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "xlsExportModePreviewBase", function() { return xlsExportModePreviewBase; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "xlsExportModePreview", function() { return xlsExportModePreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "xlsExportModeMergedPreview", function() { return xlsExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "imageExportModePreviewBase", function() { return imageExportModePreviewBase; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "imageExportModePreview", function() { return imageExportModePreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "imageExportModeMergedPreview", function() { return imageExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "xlsxExportModePreviewBase", function() { return xlsxExportModePreviewBase; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "xlsxExportModePreview", function() { return xlsxExportModePreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "xlsxExportModeMergedPreview", function() { return xlsxExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "MhtExportOptionsPreview", function() { return mhtExportOptionsPreview_MhtExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "MhtExportOptionsMergedPreview", function() { return mhtExportOptionsPreview_MhtExportOptionsMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "RtfExportOptionsPreview", function() { return rtfExportOptionsPreview_RtfExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "RtfExportOptionsMergedPreview", function() { return rtfExportOptionsPreview_RtfExportOptionsMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "XlsExportOptionsPreview", function() { return xlsExportOptionsPreview_XlsExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "XlsExportOptionsMergedPreview", function() { return xlsExportOptionsPreview_XlsExportOptionsMergedPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "XlsxExportOptionsPreview", function() { return xlsxExportOptionsPreview_XlsxExportOptionsPreview; });
__webpack_require__.d(reporting_viewer_export_namespaceObject, "XlsxExportOptionsMergedPreview", function() { return xlsxExportOptionsPreview_XlsxExportOptionsMergedPreview; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-export-metadata.js
var reporting_viewer_export_metadata_namespaceObject = {};
__webpack_require__.r(reporting_viewer_export_metadata_namespaceObject);
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "rtfExportModeMergedPreview", function() { return rtfExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "docxExportModeMergedPreview", function() { return docxExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "excludeModesForMergedDocuments", function() { return excludeModesForMergedDocuments; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "excludeDifferentFilesMode", function() { return excludeDifferentFilesMode; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "htmlExportModePreviewBase", function() { return htmlExportModePreviewBase; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "htmlExportModePreview", function() { return htmlExportModePreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "htmlExportModeMergedPreview", function() { return htmlExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "xlsExportModePreviewBase", function() { return xlsExportModePreviewBase; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "xlsExportModePreview", function() { return xlsExportModePreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "xlsExportModeMergedPreview", function() { return xlsExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "imageExportModePreviewBase", function() { return imageExportModePreviewBase; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "imageExportModePreview", function() { return imageExportModePreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "imageExportModeMergedPreview", function() { return imageExportModeMergedPreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "xlsxExportModePreviewBase", function() { return xlsxExportModePreviewBase; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "xlsxExportModePreview", function() { return xlsxExportModePreview; });
__webpack_require__.d(reporting_viewer_export_metadata_namespaceObject, "xlsxExportModeMergedPreview", function() { return xlsxExportModeMergedPreview; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-internal.js
var reporting_viewer_internal_namespaceObject = {};
__webpack_require__.r(reporting_viewer_internal_namespaceObject);
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "DocumentMapItemsProvider", function() { return _documentMapItemsProvider_DocumentMapItemsProvider; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "DocumentMapModel", function() { return _documentMapModel_DocumentMapModel; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "DocumentMapTreeListController", function() { return _documentMapTreeListController_DocumentMapTreeListController; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "PreviewDesignerActions", function() { return _actions_PreviewDesignerActions; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "ActionLists", function() { return _actions_ActionLists; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "PreviewActions", function() { return _actions_PreviewActions; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "convertToPercent", function() { return convertToPercent; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "getBrickValueForKey", function() { return getBrickValueForKey; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "brickText", function() { return brickText; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "updateBricksPosition", function() { return updateBricksPosition; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "initializeBrick", function() { return initializeBrick; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "ExportResultRequestData", function() { return ExportResultRequestData; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "ExportHandler", function() { return _exportHandler_ExportHandler; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "createDesktopPreview", function() { return createDesktopPreview; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "createPreview", function() { return createPreview; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "createAndInitPreviewModel", function() { return createAndInitPreviewModel; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "createPreviewModel", function() { return createPreviewModel; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "initPreviewModel", function() { return initPreviewModel; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "PreviewPage", function() { return _page_PreviewPage; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "PreviewHandlersHelper", function() { return _previewHandlersHelper_PreviewHandlersHelper; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "PreviewDisposableModel", function() { return _previewModel_PreviewDisposableModel; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "PreviewModel", function() { return PreviewModel; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "ColumnSortOrder", function() { return ColumnSortOrder; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "PreviewRequestWrapper", function() { return _previewRequestWrapper_PreviewRequestWrapper; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "PreviewSelection", function() { return _previewSelection_PreviewSelection; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "getUpdateProgressBarCallback", function() { return getUpdateProgressBarCallback; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "ProgressViewModel", function() { return _progressViewModel_ProgressViewModel; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "stringToPosition", function() { return stringToPosition; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "getDockedElementCallback", function() { return getDockedElementCallback; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "updatePreviewContentSize", function() { return updatePreviewContentSize; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "updatePreviewZoomWithAutoFit", function() { return updatePreviewZoomWithAutoFit; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "SortingProcessor", function() { return _sortingProcessor_SortingProcessor; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "getCurrentResolution", function() { return getCurrentResolution; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "getImageBase64", function() { return getImageBase64; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "getEnumValues", function() { return getEnumValues; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "safelyRunWindowOpen", function() { return safelyRunWindowOpen; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "dxSearchEditor", function() { return _dxSearchEditor_dxSearchEditor; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "SearchResultNavigator", function() { return _searchResultNavigator_SearchResultNavigator; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "SearchViewModel", function() { return _searchViewModel_SearchViewModel; });
__webpack_require__.d(reporting_viewer_internal_namespaceObject, "formatSearchResult", function() { return formatSearchResult; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-mobile.js
var reporting_viewer_mobile_namespaceObject = {};
__webpack_require__.r(reporting_viewer_mobile_namespaceObject);
__webpack_require__.d(reporting_viewer_mobile_namespaceObject, "MobileReportPreview", function() { return mobilePreview_MobileReportPreview; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-mobile-internal.js
var reporting_viewer_mobile_internal_namespaceObject = {};
__webpack_require__.r(reporting_viewer_mobile_internal_namespaceObject);
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "editorTemplates", function() { return _editorTemplates_editorTemplates; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "slowdownDisctanceFactor", function() { return slowdownDisctanceFactor; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "minScale", function() { return minScale; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "EventProcessor", function() { return _eventProcessor_EventProcessor; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "MobilePreviewPage", function() { return _mobilePage_MobilePreviewPage; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "MobilePreviewModel", function() { return _mobilePreviewModel_MobilePreviewModel; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "MobilePreviewParameterHelper", function() { return _mobilePreviewParameterHelper_MobilePreviewParameterHelper; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "MobileSearchViewModel", function() { return _mobileSearch_MobileSearchViewModel; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "SearchBarModel", function() { return _mobileSearch_SearchBarModel; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "MobilePaginator", function() { return _paginator_MobilePaginator; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "ParametersPopupModelBase", function() { return _parametersPopup_ParametersPopupModelBase; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "ParametersPopupModel", function() { return _parametersPopup_ParametersPopupModel; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "DateRangeParemeterPopupModel", function() { return _parametersPopup_DateRangeParemeterPopupModel; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "updatePreviewContentSizeMobile", function() { return updatePreviewContentSizeMobile; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "dxGalleryReportPreview", function() { return _galleryComponent_dxGalleryReportPreview; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "GalleryModel", function() { return _galleryModel_GalleryModel; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "MobileActionList", function() { return _mobileActionList_MobileActionList; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "getPreviewActionsMobile", function() { return getPreviewActionsMobile; });
__webpack_require__.d(reporting_viewer_mobile_internal_namespaceObject, "createMobilePreview", function() { return createMobilePreview; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-parameters.js
var reporting_viewer_parameters_namespaceObject = {};
__webpack_require__.r(reporting_viewer_parameters_namespaceObject);
__webpack_require__.d(reporting_viewer_parameters_namespaceObject, "MultiValuesHelper", function() { return multiValuesHelper_MultiValuesHelper; });
__webpack_require__.d(reporting_viewer_parameters_namespaceObject, "getEditorType", function() { return getEditorType; });
__webpack_require__.d(reporting_viewer_parameters_namespaceObject, "ParameterHelper", function() { return parameterHelper_ParameterHelper; });
__webpack_require__.d(reporting_viewer_parameters_namespaceObject, "ParameterPanelItemBase", function() { return parameterPanelItemBase_ParameterPanelItemBase; });
__webpack_require__.d(reporting_viewer_parameters_namespaceObject, "PreviewParameter", function() { return previewParameter_PreviewParameter; });
__webpack_require__.d(reporting_viewer_parameters_namespaceObject, "PreviewParameterHelper", function() { return previewParameterHelper_PreviewParameterHelper; });
__webpack_require__.d(reporting_viewer_parameters_namespaceObject, "PreviewParametersViewModel", function() { return previewParametersViewModel_PreviewParametersViewModel; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-settings.js
var reporting_viewer_settings_namespaceObject = {};
__webpack_require__.r(reporting_viewer_settings_namespaceObject);
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "EditablePreviewEnabled", function() { return EditablePreviewEnabled; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "SearchAvailable", function() { return SearchAvailable; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "ReportServerInvokeUri", function() { return ReportServerInvokeUri; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "ReportServerExportUri", function() { return ReportServerExportUri; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "AsyncExportApproach", function() { return AsyncExportApproach; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "MessageHandler", function() { return MessageHandler; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "HandlerUri", function() { return HandlerUri; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "previewDefaultResolution", function() { return previewDefaultResolution; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "ReportServerDownloadUri", function() { return ReportServerDownloadUri; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "PollingDelay", function() { return PollingDelay; });
__webpack_require__.d(reporting_viewer_settings_namespaceObject, "TimeOut", function() { return TimeOut; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-utils.js
var reporting_viewer_utils_namespaceObject = {};
__webpack_require__.r(reporting_viewer_utils_namespaceObject);

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-widgets.js
var reporting_viewer_widgets_namespaceObject = {};
__webpack_require__.r(reporting_viewer_widgets_namespaceObject);
__webpack_require__.d(reporting_viewer_widgets_namespaceObject, "viewerEditorTemplates", function() { return viewerEditorTemplates; });
__webpack_require__.d(reporting_viewer_widgets_namespaceObject, "predefinedDateRanges", function() { return predefinedDateRanges; });
__webpack_require__.d(reporting_viewer_widgets_namespaceObject, "DateRangeEditor", function() { return dateRangeEditor_DateRangeEditor; });
__webpack_require__.d(reporting_viewer_widgets_namespaceObject, "PictureEditMode", function() { return PictureEditMode; });

// NAMESPACE OBJECT: ./node_modules/devexpress-reporting/scopes/reporting-viewer-widgets-internal.js
var reporting_viewer_widgets_internal_namespaceObject = {};
__webpack_require__.r(reporting_viewer_widgets_internal_namespaceObject);
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "MultiValueEditorOptions", function() { return _multiValueEditor_MultiValueEditorOptions; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "ParametersGroupEditor", function() { return _groupEditor_ParametersGroupEditor; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "ImagePainter", function() { return _imagePainter_ImagePainter; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "Painter", function() { return _painter_Painter; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "PictureEditorActionId", function() { return PictureEditorActionId; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "PictureEditorActionProvider", function() { return _pictureEditorActionProvider_PictureEditorActionProvider; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "PictureEditorModel", function() { return _pictureEditorModel_PictureEditorModel; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "PictureEditorToolbarItem", function() { return PictureEditorToolbarItem; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "PictureEditorToolbarItemWithPopup", function() { return _pictureEditorToolbarItem_PictureEditorToolbarItemWithPopup; });
__webpack_require__.d(reporting_viewer_widgets_internal_namespaceObject, "SignaturePainter", function() { return _signaturePainter_SignaturePainter; });

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/customTypes.js


// EXTERNAL MODULE: external "DevExpress.Analytics.Internal"
var external_DevExpress_Analytics_Internal_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/imageSource.js

class imageSource_ImageSource {
    constructor(sourceType, data) {
        this.sourceType = sourceType;
        this.data = data;
    }
    getDataUrl() {
        switch (this.sourceType) {
            case 'svg':
                return 'data:image/svg+xml;charset=UTF-8;base64,' + encodeURI(this.data);
            case 'img':
                return 'data:image/x;base64,' + this.data;
        }
        if (this.sourceType === 'png' || this.sourceType === 'jpg' || this.sourceType === 'jpeg')
            return 'data:image/' + this.sourceType + ';base64,' + this.data;
    }
    static parse(val) {
        var sourceType, data;
        [sourceType, data] = (val || '').split(',');
        return sourceType && new imageSource_ImageSource(sourceType, data);
    }
    static toString(val) {
        return Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])('{0},{1}', val.sourceType, val.data);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/types.js
function convertMapToKeyValuePair(object) {
    var result = [];
    if (object) {
        Object.keys(object).forEach(key => {
            result.push({ Key: key, Value: object[key] });
        });
    }
    return result;
}

// EXTERNAL MODULE: external "DevExpress.Analytics.Localization"
var external_DevExpress_Analytics_Localization_ = __webpack_require__(16);

// EXTERNAL MODULE: external "DevExpress.localization"
var external_DevExpress_localization_ = __webpack_require__(17);

// EXTERNAL MODULE: external "DevExpress.Analytics.Elements"
var external_DevExpress_Analytics_Elements_ = __webpack_require__(18);

// EXTERNAL MODULE: external "DevExpress.Analytics.Utils"
var external_DevExpress_Analytics_Utils_ = __webpack_require__(2);

// EXTERNAL MODULE: external "ko"
var external_ko_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/metadata.js



var previewBackColor = { propertyName: 'backColor', modelName: '@BackColor', from: external_DevExpress_Analytics_Utils_["colorFromString"], toJsonObject: external_DevExpress_Analytics_Utils_["colorToString"] };
var previewSides = { propertyName: 'borders', modelName: '@Sides' };
var previewBorderColor = { propertyName: 'borderColor', modelName: '@BorderColor', from: external_DevExpress_Analytics_Utils_["colorFromString"], toJsonObject: external_DevExpress_Analytics_Utils_["colorToString"] };
var previewBorderStyle = { propertyName: 'borderStyle', modelName: '@BorderStyle' };
var previewBorderDashStyle = { propertyName: 'borderDashStyle', modelName: '@BorderDashStyle' };
var previewBorderWidth = { propertyName: 'borderWidth', modelName: '@BorderWidthSerializable', from: external_DevExpress_Analytics_Utils_["floatFromModel"] };
var previewForeColor = { propertyName: 'foreColor', modelName: '@ForeColor', from: external_DevExpress_Analytics_Utils_["colorFromString"], toJsonObject: external_DevExpress_Analytics_Utils_["colorToString"] };
var previewFont = { propertyName: 'font', modelName: '@Font' };
var previewPadding = { propertyName: 'padding', modelName: '@Padding', from: external_DevExpress_Analytics_Elements_["PaddingModel"].from };
var previewTextAlignment = { propertyName: 'textAlignment', modelName: '@TextAlignment' };
var brickStyleSerializationsInfo = [
    previewBackColor,
    previewSides,
    previewBorderColor,
    previewBorderStyle,
    previewBorderDashStyle,
    previewBorderWidth,
    previewForeColor,
    previewFont,
    previewPadding,
    previewTextAlignment
];
var defaultCulture = 'Default';
var availableCultures = external_ko_["observable"]({
    'Default': '(Default)'
});

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/binding/exportOptionsEventArgs.js

class exportOptionsEventArgs_CustomizeExportOptionsEventArgs {
    constructor(options) {
        this._options = options;
    }
    HideExportOptionsPanel() { this._options.panelVisible = false; }
    HideFormat(format) { delete this._options.exportOptions[format.propertyName || format.format]; }
    HideProperties(format, ...paths) {
        var patchPropName = (propName, obj) => {
            var info = obj.getInfo && obj.getInfo();
            if (info) {
                var p = info.filter(x => x.modelName === propName || x.modelName === '@' + propName)[0];
                if (p)
                    return p.propertyName;
            }
            return propName;
        };
        var addPredicate = (obj, propName) => {
            propName = patchPropName(propName, obj);
            var oldPredicate = obj.isPropertyVisible;
            obj.isPropertyVisible =
                oldPredicate
                    ? ((x) => oldPredicate(x) && x !== propName)
                    : ((x) => x !== propName);
        };
        if (paths.length == 0) {
            addPredicate(this._options.exportOptions, format.format);
        }
        else {
            paths.forEach(property => {
                var path = Array.isArray(property)
                    ? property
                    : property.split('.');
                var obj = this._options.exportOptions[format.format];
                while (path.length > 1) {
                    obj = external_ko_["unwrap"](obj[patchPropName(path[0], obj)]);
                    path.splice(0, 1);
                }
                addPredicate(obj, path[0]);
            });
        }
    }
    GetExportOptionsModel(format) { return this._options.exportOptions[format.format]; }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/binding/eventGenerator.js





class eventGenerator_EventGenerator {
    static generateCustomizeLocalizationCallback(fireEvent) {
        return function (localizationCallbacks) {
            fireEvent('CustomizeLocalization', {
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
                SetAvailableCultures: (customCultures) => {
                    var newCultures = {};
                    newCultures[defaultCulture] = availableCultures()[defaultCulture];
                    Object(external_DevExpress_Analytics_Internal_["extend"])(newCultures, customCultures);
                    availableCultures(newCultures);
                },
                WidgetLocalization: external_DevExpress_localization_
            });
        };
    }
    static generateDesignerEvents(fireEvent) {
        var customizeActionsEvent = { publicName: 'CustomizeMenuActions', privateName: 'customizeActions' };
        var reportTabClosingEvent = { publicName: 'ReportTabClosing', privateName: 'reportTabClosing' };
        var reportTabClosedEvent = { publicName: 'ReportTabClosed', privateName: 'reportTabClosed' };
        var customizeParameterEditorsEvent = { publicName: 'CustomizeParameterEditors', privateName: 'customizeParameterEditors' };
        var customizeParameterLookUpSourceEvent = { publicName: 'CustomizeParameterLookUpSource', privateName: 'customizeParameterLookUpSource' };
        var exitDesignerEvent = { publicName: 'ExitDesigner', privateName: 'exitDesigner' };
        var reportSavingEvent = { publicName: 'ReportSaving', privateName: 'reportSaving' };
        var reportSavedEvent = { publicName: 'ReportSaved', privateName: 'reportSaved' };
        var reportOpeningEvent = { publicName: 'ReportOpening', privateName: 'reportOpening' };
        var reportOpenedEvent = { publicName: 'ReportOpened', privateName: 'reportOpened' };
        var tabChangedEvent = { publicName: 'TabChanged', privateName: 'tabChanged' };
        var onServerErrorEvent = { publicName: 'OnServerError', privateName: 'onServerError' };
        var customizePartsEvent = { publicName: 'CustomizeElements', privateName: 'customizeParts' };
        var componentAddedEvent = { publicName: 'ComponentAdded', privateName: 'componentAdded' };
        var customizeSaveDialogEvent = { publicName: 'CustomizeSaveDialog', privateName: 'customizeSaveDialog' };
        var customizeSaveAsDialogEvent = { publicName: 'CustomizeSaveAsDialog', privateName: 'customizeSaveAsDialog' };
        var customizeOpenDialogEvent = { publicName: 'CustomizeOpenDialog', privateName: 'customizeOpenDialog' };
        var customizeToolboxEvent = { publicName: 'CustomizeToolbox', privateName: 'customizeToolbox' };
        var customizeLocalizationEvent = { publicName: 'CustomizeLocalization', privateName: 'customizeLocalization' };
        var customizeFieldListActionsEvent = { publicName: 'CustomizeFieldListActions', privateName: 'customizeFieldListActions' };
        var beforeRenderEvent = { publicName: 'BeforeRender', privateName: 'beforeRender' };
        var customizeWizardEvent = { publicName: 'CustomizeWizard', privateName: 'customizeWizard' };
        customizeLocalizationEvent['callback'] = eventGenerator_EventGenerator.generateCustomizeLocalizationCallback(fireEvent);
        customizeActionsEvent['callback'] = function customizeActions(actions) {
            fireEvent(customizeActionsEvent.publicName, {
                Actions: actions,
                GetById: (actionId) => {
                    return actionId ? actions.filter(function (item) { return actionId === item.id; })[0] : null;
                }
            });
        };
        beforeRenderEvent['callback'] = function beforeRender(designerModel) {
            fireEvent(beforeRenderEvent.publicName, designerModel);
        };
        customizeParameterEditorsEvent['callback'] = function customizeParameterEditors(parameter, info) {
            fireEvent(customizeParameterEditorsEvent.publicName, {
                parameter: parameter,
                info: info
            });
        };
        customizeParameterLookUpSourceEvent['callback'] = function customizeParameterLookUpSource(parameter, items) {
            var arg = {
                parameter,
                items,
                dataSource: null
            };
            fireEvent(customizeParameterLookUpSourceEvent.publicName, arg);
            return arg.dataSource;
        };
        exitDesignerEvent['callback'] = function exitDesigner() {
            fireEvent(exitDesignerEvent.publicName);
        };
        reportSavingEvent['callback'] = function reportSaving(args) {
            var arg = {
                Url: args.url,
                Report: args.report,
                Cancel: args.cancel
            };
            fireEvent(reportSavingEvent.publicName, arg);
            args.cancel = arg.Cancel;
        };
        reportSavedEvent['callback'] = function reportSaved(args) {
            var arg = {
                Url: args.url,
                Report: args.report
            };
            fireEvent(reportSavedEvent.publicName, arg);
        };
        reportOpenedEvent['callback'] = function reportOpened(args) {
            var arg = {
                Url: args.url,
                Report: args.report
            };
            fireEvent(reportOpenedEvent.publicName, arg);
        };
        reportOpeningEvent['callback'] = function reportOpening(args) {
            var arg = {
                Url: args.url,
                Report: args.report,
                Cancel: args.cancel
            };
            fireEvent(reportOpeningEvent.publicName, arg);
            args.cancel = arg.Cancel;
        };
        tabChangedEvent['callback'] = function tabChanged(tab) {
            fireEvent(tabChangedEvent.publicName, {
                Tab: tab
            });
        };
        onServerErrorEvent['callback'] = function onServerError(args) {
            fireEvent(onServerErrorEvent.publicName, { Error: args });
        };
        componentAddedEvent['callback'] = function componentAdded(args) {
            fireEvent(componentAddedEvent.publicName, { Model: args.model, Parent: args.parent });
        };
        customizePartsEvent['callback'] = function customizeParts(parts) {
            fireEvent(customizePartsEvent.publicName, {
                Elements: parts,
                GetById: id => {
                    return id
                        ? parts.filter(item => id === item.id)[0]
                        : null;
                }
            });
        };
        customizeSaveDialogEvent['callback'] = function customizeSaveDialog(popup) {
            fireEvent(customizeSaveDialogEvent.publicName, {
                Popup: popup,
                Customize: (template, model) => {
                    popup.customize(template, model);
                }
            });
        };
        customizeSaveAsDialogEvent['callback'] = function customizeSaveAsDialog(popup) {
            fireEvent(customizeSaveAsDialogEvent.publicName, {
                Popup: popup,
                Customize: (template, model) => {
                    popup.customize(template, model);
                }
            });
        };
        customizeOpenDialogEvent['callback'] = function customizeOpenDialog(popup) {
            fireEvent(customizeOpenDialogEvent.publicName, {
                Popup: popup,
                Customize: (template, model) => {
                    popup.customize(template, model);
                }
            });
        };
        customizeToolboxEvent['callback'] = function customizeToolbox(controlsFactory) {
            fireEvent(customizeToolboxEvent.publicName, {
                ControlsFactory: controlsFactory
            });
        };
        customizeFieldListActionsEvent['callback'] = function customizeFieldListActions(item, actions) {
            fireEvent(customizeFieldListActionsEvent.publicName, {
                Item: item,
                Actions: actions
            });
        };
        customizeWizardEvent['callback'] = function customizeWizard(type, wizard) {
            fireEvent(customizeWizardEvent.publicName, {
                Type: type,
                Wizard: wizard
            });
        };
        reportTabClosingEvent['callback'] = function reportTabClosing(tab, deffered) {
            var args = {
                Tab: tab,
                ReadyToClose: deffered,
                Handled: false
            };
            fireEvent(reportTabClosingEvent.publicName, args);
            return args.Handled;
        };
        reportTabClosedEvent['callback'] = function reportTabClosed(tab) {
            fireEvent(reportTabClosedEvent.publicName, {
                Tab: tab
            });
        };
        return [
            customizeActionsEvent,
            reportTabClosingEvent,
            reportTabClosedEvent,
            customizeParameterEditorsEvent,
            customizeParameterLookUpSourceEvent,
            exitDesignerEvent,
            reportSavingEvent,
            reportSavedEvent,
            reportOpeningEvent,
            reportOpenedEvent,
            tabChangedEvent,
            onServerErrorEvent,
            customizePartsEvent,
            componentAddedEvent,
            customizeSaveDialogEvent,
            customizeSaveAsDialogEvent,
            customizeOpenDialogEvent,
            customizeToolboxEvent,
            customizeLocalizationEvent,
            customizeFieldListActionsEvent,
            beforeRenderEvent,
            customizeWizardEvent
        ];
    }
    static generatePreviewEvents(fireEvent, prefix) {
        function generateBrickMethods(brick) {
            return {
                GetBrickText: function () { return brick() && brick().text(); },
                GetBrickValue: function (key = 'value') {
                    var contentValue = brick() && brick().content && brick().content.filter(function (x) { return x.Key === key; })[0];
                    return contentValue && contentValue.Value;
                },
            };
        }
        var previewClickEvent = { publicName: 'PreviewClick', privateName: 'previewClick' };
        var documentReadyEvent = { publicName: [prefix, 'DocumentReady'].join(''), privateName: 'documentReady' };
        var editingFieldChangedEvent = { publicName: [prefix, 'EditingFieldChanged'].join(''), privateName: 'editingFieldChanged' };
        var parametersSubmittedEvent = { publicName: [prefix, 'ParametersSubmitted'].join(''), privateName: 'parametersSubmitted' };
        var parametersInitializedEvent = { publicName: [prefix, 'ParametersInitialized'].join(''), privateName: 'parametersInitialized' };
        var parametersResetEvent = { publicName: [prefix, 'ParametersReset'].join(''), privateName: 'parametersReset' };
        var customizeParameterLookUpSourceEvent = { publicName: 'CustomizeParameterLookUpSource', privateName: 'customizeParameterLookUpSource' };
        var customizeParameterEditorsEvent = { publicName: 'CustomizeParameterEditors', privateName: 'customizeParameterEditors' };
        var customizeActionsEvent = { publicName: [prefix, 'CustomizeMenuActions'].join(''), privateName: 'customizeActions' };
        var customizePartsEvent = { publicName: [prefix, 'CustomizeElements'].join(''), privateName: 'customizeParts' };
        var customizeExportOptionsEvent = { publicName: [prefix, 'CustomizeExportOptions'].join(''), privateName: 'customizeExportOptions' };
        var onServerErrorEvent = { publicName: 'OnServerError', privateName: 'onServerError' };
        var onExportEvent = { publicName: [prefix, 'OnExport'].join(''), privateName: 'onExport' };
        customizeParameterEditorsEvent['callback'] = function customizeParameterEditors(parameter, info) {
            fireEvent(customizeParameterEditorsEvent.publicName, { parameter, info });
        };
        customizePartsEvent['callback'] = function customizeParts(parts) {
            fireEvent(customizePartsEvent.publicName, {
                Elements: parts,
                GetById: (templateId) => {
                    return templateId ? parts.filter(function (item) { return templateId === item.templateName; })[0] : null;
                }
            });
        };
        customizeActionsEvent['callback'] = function customizeActions(actions) {
            fireEvent(customizeActionsEvent.publicName, {
                Actions: actions,
                GetById: (actionId) => {
                    return actionId ? actions.filter(function (item) { return actionId === item.id; })[0] : null;
                }
            });
        };
        customizeParameterLookUpSourceEvent['callback'] = function customizeParameterLookUpSource(parameter, items) {
            var arg = {
                parameter,
                items,
                dataSource: null
            };
            fireEvent(customizeParameterLookUpSourceEvent.publicName, arg);
            return arg.dataSource;
        };
        previewClickEvent['callback'] = function previewClick(pageIndex, brick, defaultHandler) {
            var arg = Object.assign(Object.assign({ PageIndex: pageIndex, Brick: brick, DefaultHandler: defaultHandler }, generateBrickMethods(() => brick)), { Handled: false });
            fireEvent(previewClickEvent.publicName, arg);
            return arg.Handled;
        };
        parametersResetEvent['callback'] = function parametersReset(model, parameters) {
            fireEvent(parametersResetEvent.publicName, {
                ParametersViewModel: model,
                Parameters: parameters
            });
        };
        parametersSubmittedEvent['callback'] = function parametersSubmitted(model, parameters) {
            fireEvent(parametersSubmittedEvent.publicName, {
                ParametersViewModel: model,
                Parameters: parameters
            });
        };
        parametersInitializedEvent['callback'] = function parametersInitialized(model, info, submit, shouldRequestParameters) {
            fireEvent(parametersInitializedEvent.publicName, {
                ParametersModel: model,
                ActualParametersInfo: info,
                Submit: submit,
                ShouldRequestParameters: shouldRequestParameters
            });
        };
        editingFieldChangedEvent['callback'] = function editingFieldChanged(field, oldValue, newValue) {
            var arg = Object.assign({ Field: field, OldValue: oldValue, NewValue: newValue }, generateBrickMethods(() => field.brick));
            fireEvent(editingFieldChangedEvent.publicName, arg);
            return arg.NewValue;
        };
        documentReadyEvent['callback'] = function documentReady(documentId, reportId, pageCount) {
            fireEvent(documentReadyEvent.publicName, {
                ReportId: reportId,
                DocumentId: documentId,
                PageCount: pageCount
            });
        };
        onServerErrorEvent['callback'] = function onServerError(args) {
            fireEvent(onServerErrorEvent.publicName, { Error: args });
        };
        onExportEvent['callback'] = function onExport(args) {
            fireEvent(onExportEvent.publicName, args);
        };
        customizeExportOptionsEvent['callback'] = function customizeExportOptions(options) {
            var arg = new exportOptionsEventArgs_CustomizeExportOptionsEventArgs(options);
            fireEvent(customizeExportOptionsEvent.publicName, arg);
        };
        var result = [
            previewClickEvent,
            documentReadyEvent,
            editingFieldChangedEvent,
            parametersSubmittedEvent,
            parametersInitializedEvent,
            parametersResetEvent,
            customizeParameterLookUpSourceEvent,
            customizeParameterEditorsEvent,
            customizeActionsEvent,
            customizePartsEvent,
            customizeExportOptionsEvent,
            onServerErrorEvent,
            onExportEvent,
        ];
        if (!prefix) {
            var beforeRenderEvent = { publicName: 'BeforeRender', privateName: 'beforeRender' };
            beforeRenderEvent['callback'] = function beforeRender(designerModel) {
                fireEvent(beforeRenderEvent.publicName, designerModel);
            };
            result.push(beforeRenderEvent);
            var customizeLocalizationEvent = { publicName: 'CustomizeLocalization', privateName: 'customizeLocalization' };
            customizeLocalizationEvent['callback'] = eventGenerator_EventGenerator.generateCustomizeLocalizationCallback(fireEvent);
            result.push(customizeLocalizationEvent);
        }
        return result;
    }
}

// EXTERNAL MODULE: external "DevExpress.Analytics.Internal.dxversions"
var external_DevExpress_Analytics_Internal_dxversions_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/dx-reporting-version.js
const version = '22.2.3';

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/versions.js


(external_DevExpress_Analytics_Internal_dxversions_["dxversions"] || external_DevExpress_Analytics_Internal_dxversions_)['reporting'] = version;

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting.js













// EXTERNAL MODULE: external "DevExpress.Analytics.Widgets.Internal"
var external_DevExpress_Analytics_Widgets_Internal_ = __webpack_require__(0);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/pictureEditor/pictureEditMode.js
var PictureEditMode;
(function (PictureEditMode) {
    PictureEditMode[PictureEditMode["Image"] = 0] = "Image";
    PictureEditMode[PictureEditMode["Signature"] = 1] = "Signature";
    PictureEditMode[PictureEditMode["ImageAndSignature"] = 2] = "ImageAndSignature";
})(PictureEditMode || (PictureEditMode = {}));

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/pictureEditor/_pictureEditorTypes.js
var PictureEditorActionId;
(function (PictureEditorActionId) {
    PictureEditorActionId[PictureEditorActionId["OpenFile"] = 0] = "OpenFile";
    PictureEditorActionId[PictureEditorActionId["PickImage"] = 1] = "PickImage";
    PictureEditorActionId[PictureEditorActionId["Alignment"] = 2] = "Alignment";
    PictureEditorActionId[PictureEditorActionId["Brush"] = 3] = "Brush";
    PictureEditorActionId[PictureEditorActionId["Clear"] = 4] = "Clear";
    PictureEditorActionId[PictureEditorActionId["Reset"] = 5] = "Reset";
})(PictureEditorActionId || (PictureEditorActionId = {}));

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/utils/editingFieldExtensions.js






var Categories = {
    Image: () => 'Image',
    Numeric: () => 'Numeric',
    DateTime: () => 'Date-Time',
    Letters: () => 'Letters'
};
class editingFieldExtensions_EditingFieldExtensions {
    constructor() {
        this._editors = {};
    }
    static instance() {
        if (!editingFieldExtensions_EditingFieldExtensions._instance) {
            editingFieldExtensions_EditingFieldExtensions._instance = new editingFieldExtensions_EditingFieldExtensions();
            editingFieldExtensions_EditingFieldExtensions._instance._registerStandartEditors();
        }
        return editingFieldExtensions_EditingFieldExtensions._instance;
    }
    _registerStandartEditors() {
        var getLocalizedString = external_DevExpress_Analytics_Utils_["getLocalization"];
        editingFieldExtensions_EditingFieldExtensions.registerRegExpEditor('Integer', getLocalizedString('Integer', 'PreviewStringId.EditingFieldEditors_Integer'), Categories.Numeric(), /^-?\d*$/, /^-?\d+$/, '0');
        editingFieldExtensions_EditingFieldExtensions.registerRegExpEditor('IntegerPositive', getLocalizedString('Integer Positive', 'PreviewStringId.EditingFieldEditors_IntegerPositive'), Categories.Numeric(), /^\d+$/, /^\d+$/, '0');
        editingFieldExtensions_EditingFieldExtensions.registerRegExpEditor('FixedPoint', getLocalizedString('Fixed-Point', 'PreviewStringId.EditingFieldEditors_FixedPoint'), Categories.Numeric(), /^-?(\d+([\.,]?\d*)?)?$/, /^-?\d+([\.,]?\d*)?$/, '0');
        editingFieldExtensions_EditingFieldExtensions.registerRegExpEditor('FixedPointPositive', getLocalizedString('Fixed-Point Positive', 'PreviewStringId.EditingFieldEditors_FixedPointPositive'), Categories.Numeric(), /^\d+([\.,]?\d*)?$/, /^\d+([\.,]?\d*)?$/, '0');
        var dateEditorOptions = {
            onPreRender: (data) => {
                if (!(data.options.value() instanceof Date)) {
                    data.options.value(Object(external_DevExpress_Analytics_Internal_["parseDate"])(data.options.value(), false) || new Date(Date.now()));
                }
            },
            onHideEditor: (field) => {
                field.editValue(Object(external_DevExpress_Analytics_Internal_["formatDate"])(field._editorValue()));
            }
        };
        editingFieldExtensions_EditingFieldExtensions.registerEditor('Date', getLocalizedString('Date', 'PreviewStringId.EditingFieldEditors_Date'), Categories.DateTime(), dateEditorOptions, 'dxrp-editing-field-datetime');
        editingFieldExtensions_EditingFieldExtensions.registerImageEditor({
            name: 'Image',
            displayName: getLocalizedString('Image', 'PreviewStringId.EditingFieldEditors_Image'),
            drawingEnabled: false,
            imageLoadEnabled: true
        });
        editingFieldExtensions_EditingFieldExtensions.registerImageEditor({
            name: 'Signature',
            displayName: getLocalizedString('Signature', 'PreviewStringId.EditingFieldEditors_Signature'),
            drawingEnabled: true,
            imageLoadEnabled: false
        });
        editingFieldExtensions_EditingFieldExtensions.registerImageEditor({
            name: 'ImageAndSignature',
            displayName: getLocalizedString('Image And Signature', 'PreviewStringId.EditingFieldEditors_ImageAndSignature'),
            drawingEnabled: true,
            imageLoadEnabled: true
        });
        editingFieldExtensions_EditingFieldExtensions.registerRegExpEditor('OnlyLatinLetters', getLocalizedString('Only Latin Letters', 'PreviewStringId.EditingFieldEditors_OnlyLatinLetters'), Categories.Letters(), /^[a-zA-Z]*$/, /^[a-zA-Z]*$/, '');
    }
    static enableImageEditorShading() {
        ['Image', 'ImageAndSignature', 'Signature'].forEach(editorType => {
            var editor = editingFieldExtensions_EditingFieldExtensions.instance()._editors[editorType];
            Object(external_DevExpress_Analytics_Internal_["extend"])(true, editor, { options: { registrationOptions: { shadingEnabled: true } } });
        });
    }
    static registerImageEditor(imageRegistrationOptions) {
        imageRegistrationOptions.imageLoadEnabled = imageRegistrationOptions.imageLoadEnabled === undefined ? !imageRegistrationOptions.images : imageRegistrationOptions.imageLoadEnabled;
        imageRegistrationOptions.drawingEnabled = imageRegistrationOptions.drawingEnabled === undefined ? false : imageRegistrationOptions.drawingEnabled;
        var editMode = PictureEditMode.ImageAndSignature;
        if (!imageRegistrationOptions.imageLoadEnabled)
            editMode = PictureEditMode.Signature;
        if (!imageRegistrationOptions.drawingEnabled)
            editMode = PictureEditMode.Image;
        var options = {
            editMode: editMode,
            registrationOptions: imageRegistrationOptions
        };
        options['callbacks'] = {
            customizeActions: (s, actions) => {
                if (imageRegistrationOptions.images) {
                    var imagePickerAction = s.actionsProvider.createImagePickerAction(imageRegistrationOptions.images, imageRegistrationOptions.searchEnabled, (base64) => {
                        s.painter.image(base64);
                        s.painter.refresh();
                    });
                    actions.splice(0, 0, imagePickerAction);
                    if (!imageRegistrationOptions.sizeOptionsEnabled) {
                        var alignmentAction = actions.filter(x => x.id === PictureEditorActionId.Alignment)[0];
                        alignmentAction && actions.splice(actions.indexOf(alignmentAction), 1);
                    }
                }
                if (!imageRegistrationOptions.imageLoadEnabled) {
                    var openFile = actions.filter((x => x.id === PictureEditorActionId.OpenFile))[0];
                    openFile && actions.splice(actions.indexOf(openFile), 1);
                }
                if (imageRegistrationOptions.sizeOptionsEnabled !== undefined && !imageRegistrationOptions.sizeOptionsEnabled) {
                    var alignmentAction = actions.filter(x => x.id === PictureEditorActionId.Alignment)[0];
                    alignmentAction && actions.splice(actions.indexOf(alignmentAction), 1);
                }
                if (imageRegistrationOptions.clearEnabled !== undefined && !imageRegistrationOptions.clearEnabled) {
                    var clearAction = actions.filter(x => x.id === PictureEditorActionId.Clear)[0];
                    clearAction && actions.splice(actions.indexOf(clearAction), 1);
                }
                if (imageRegistrationOptions.customizeActions) {
                    imageRegistrationOptions.customizeActions(s, actions);
                    return;
                }
            }
        };
        editingFieldExtensions_EditingFieldExtensions.registerEditor(imageRegistrationOptions.name, imageRegistrationOptions.displayName, Categories.Image(), options, 'dxrp-editing-field-image');
    }
    static registerEditor(name, displayName, category, options, template, validate, defaultVal = '') {
        var initValue;
        var extendOptions = {
            onInitialized: e => {
                if (validate) {
                    external_DevExpress_Analytics_Widgets_Internal_["ValueEditorHelper"].validateWidgetValue(e, validate, defaultVal);
                }
                initValue = e.component.option('value');
            },
            onKeyUp: e => {
                var editor = e.component;
                Object(external_DevExpress_Analytics_Internal_["processTextEditorHotKeys"])(e.event, {
                    esc: () => {
                        editor.blur();
                        editor.option('value', initValue);
                    },
                    ctrlEnter: () => {
                        editor.blur();
                    }
                });
            }
        };
        editingFieldExtensions_EditingFieldExtensions.instance()._editors[name] = {
            name: name,
            displayName: displayName,
            category: category,
            options: external_jQuery_["extend"]({}, options, extendOptions),
            template: template
        };
    }
    static registerMaskEditor(editorID, displayName, category, mask) {
        editingFieldExtensions_EditingFieldExtensions.registerEditor(editorID, displayName, category, { mask: mask });
    }
    static registerRegExpEditor(editorID, displayName, category, regExpEditing, regExpFinal, defaultVal) {
        var validate = (val) => { return regExpFinal.test(val); };
        editingFieldExtensions_EditingFieldExtensions.registerEditor(editorID, displayName, category, external_DevExpress_Analytics_Widgets_Internal_["ValueEditorHelper"].getValueEditorOptions(regExpEditing, validate, defaultVal), null, validate, defaultVal);
    }
    static unregisterEditor(editorID) {
        delete editingFieldExtensions_EditingFieldExtensions.instance()._editors[editorID];
    }
    categories(excludeCategories = []) {
        var categories = [];
        Object.keys(this._editors).forEach(p => {
            var category = this._editors[p].category;
            if (excludeCategories.indexOf(category) === -1 && categories.indexOf(category) === -1) {
                categories.push(category);
            }
        });
        return categories;
    }
    editors() {
        return Object.keys(this._editors).map(key => this._editors[key]);
    }
    editorsByCategories(categories = []) {
        var editors = [];
        Object.keys(this._editors).forEach(p => {
            if (categories.indexOf(this._editors[p].category) != -1) {
                editors.push(this._editors[p]);
            }
        });
        return editors;
    }
    editor(editorID) {
        return this._editors[editorID];
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-editing.js



// EXTERNAL MODULE: external "DevExpress.Analytics.Widgets"
var external_DevExpress_Analytics_Widgets_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/utils/_utils.js



var cultureInfo = {};
var generateGuid = () => {
    var getNewQuartet = function (i) {
        return Math.floor((1 + Math.random()) * Math.pow(0x10000, i)).toString(16).substring(1);
    };
    return getNewQuartet(2) + '-' + getNewQuartet(1) + '-' + getNewQuartet(1) + '-' + getNewQuartet(1) + '-' + getNewQuartet(3);
};
var commonBlur = HTMLElement.prototype.blur;
var fullscreenEventsList = ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'MSFullscreenChange'];
function createFullscreenComputed(element, parent) {
    var _fullscreen = external_ko_["observable"](false);
    var func = () => {
        var isFullscreen = document.fullscreen || !!document['msFullscreenElement'] || !!document['webkitFullscreenElement'];
        if (element['msRequestFullscreen']) {
            HTMLElement.prototype.blur = isFullscreen ? function () {
                try {
                    commonBlur.apply(this);
                }
                catch (e) {
                    document.body.blur();
                }
            } : commonBlur;
        }
        _fullscreen(isFullscreen);
    };
    var fullscreen = external_ko_["computed"]({
        read: () => _fullscreen(),
        write: (newVal) => {
            _fullscreen(newVal);
            toggleFullscreen(element, newVal);
        }
    });
    addFullscreenListener(document, func);
    parent._disposables.push({
        dispose: () => {
            removeFullscreenListener(document, func);
            commonBlur = null;
            func = null;
        }
    }, fullscreen);
    return fullscreen;
}
function processZoomFactor(accessibilityCompliant) {
    if (!accessibilityCompliant)
        return;
    var defaultFontSize = 16;
    var zoomFactor = (parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('font-size')) || defaultFontSize) / defaultFontSize;
    if (zoomFactor !== Object(external_DevExpress_Analytics_Internal_["accessibilityFontSizeZoomFactor"])()) {
        Object(external_DevExpress_Analytics_Widgets_Internal_["propertiesGridEditorsPaddingLeft"])(zoomFactor * Object(external_DevExpress_Analytics_Widgets_Internal_["propertiesGridEditorsPaddingLeft"])());
        Object(external_DevExpress_Analytics_Internal_["accessibilityFontSizeZoomFactor"])(zoomFactor);
    }
}
function addFullscreenListener(element, func) {
    fullscreenEventsList.forEach((eventName) => {
        element.addEventListener(eventName, func);
    });
}
function removeFullscreenListener(element, func) {
    fullscreenEventsList.forEach((eventName) => {
        element.removeEventListener(eventName, func);
    });
}
function showFullscreen(element) {
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element['mozRequestFullScreen'])
        element['mozRequestFullScreen']();
    else if (element['webkitRequestFullscreen'])
        element['webkitRequestFullscreen']();
    else if (element['msRequestFullscreen']) {
        element['msRequestFullscreen']();
    }
}
function exitFullscreen() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document['mozCancelFullScreen'])
        document['mozCancelFullScreen']();
    else if (document['webkitExitFullscreen'])
        document['webkitExitFullscreen']();
    else if (document['msExitFullscreen']) {
        HTMLElement.prototype.blur = commonBlur;
        document['msExitFullscreen']();
    }
}
function toggleFullscreen(element, value) {
    if (!element)
        return;
    if (value)
        showFullscreen(element);
    else
        exitFullscreen();
}
function transformNewLineCharacters(value) {
    return value.replace(/(\r\n|\n|\r)/g, '\r\n');
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/widgets/_editorTemplates.js



var editorTemplates = {
    csvSeparator: { header: 'dx-text',
        extendedOptions: { placeholder: external_ko_["pureComputed"](() => (cultureInfo['csvTextSeparator'] || '') + ' ' + Object(external_DevExpress_Analytics_Utils_["getLocalization"])('(Using System Separator)', 'PreviewStringId.ExportOption_CsvSeparator_UsingSystem')) }
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/metadata.js




var pageBorderColor = { propertyName: 'pageBorderColor', modelName: '@PageBorderColor', from: external_DevExpress_Analytics_Utils_["colorFromString"], toJsonObject: external_DevExpress_Analytics_Utils_["colorToString"], displayName: 'Page Border Color', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.PageBorderColor', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('customColorEditor'), defaultVal: 'Black' };
var pageBorderWidth = { propertyName: 'pageBorderWidth', modelName: '@PageBorderWidth', displayName: 'Page Border Width', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.PageBorderWidth', from: external_DevExpress_Analytics_Utils_["floatFromModel"], editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('numeric'), defaultVal: 1 };
var pageRange = { propertyName: 'pageRange', modelName: '@PageRange', displayName: 'Page Range', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.PageRange', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text'), defaultVal: '' };
var expotOptionsTitle = { propertyName: 'title', modelName: '@Title', displayName: 'Title', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.Title', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text'), defaultVal: 'Document' };
var htmlTableLayout = { propertyName: 'tableLayout', modelName: '@TableLayout', displayName: 'Table Layout', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.TableLayout', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"], defaultVal: true };
var docxTableLayout = { propertyName: 'tableLayout', modelName: '@TableLayout', displayName: 'Table Layout', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions.TableLayout', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"], defaultVal: false };
var allowURLsWithJSContent = { propertyName: 'allowURLsWithJSContent', modelName: '@AllowURLsWithJSContent', displayName: 'Allow URLs with JS Content', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.AllowURLsWithJSContent', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"], defaultVal: false };
var rasterizationResolution = { propertyName: 'rasterizationResolution', modelName: '@RasterizationResolution', displayName: 'Rasterization Resolution', localizationId: 'DevExpress.XtraPrinting.PageByPageExportOptionsBase.RasterizationResolution', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('numeric'), defaultVal: 96 };
var rasterizeImages = { propertyName: 'rasterizeImages', modelName: '@RasterizeImages', displayName: 'Rasterize Images', localizationId: 'DevExpress.XtraPrinting.PageByPageExportOptionsBase.RasterizeImages', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] };
var useHRefHyperlinks = { propertyName: 'useHRefHyperlinks', modelName: '@UseHRefHyperlinks', displayName: 'Use HRef Hyperlinks', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.UseHRefHyperlinks', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"], defaultVal: false };
var exportWatermarks = { propertyName: 'exportWatermarks', modelName: '@ExportWatermarks', displayName: 'Export Watermarks', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.ExportWatermarks', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] };
var inlineCss = { propertyName: 'inlineCss', modelName: '@InlineCss', displayName: 'Inline CSS', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.InlineCss', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] };
var removeSecondarySymbols = { propertyName: 'removeSecondarySymbols', modelName: '@RemoveSecondarySymbols', displayName: 'Remove Secondary Symbols', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.RemoveSecondarySymbols', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"], defaultVal: false };
var characterSet = {
    propertyName: 'characterSet', modelName: '@CharacterSet', displayName: 'Character Set', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.CharacterSet', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: 'utf-8',
    valuesArray: [{ value: 'windows-1256', displayValue: 'Arabic (Windows)' }, { value: 'iso-8859-4', displayValue: 'Baltic (ISO)' }, { value: 'windows-1257', displayValue: 'Baltic (Windows)' }, { value: 'iso-8859-2', displayValue: 'Central European (ISO)' }, { value: 'windows-1250', displayValue: 'Central European (Windows)' }, { value: 'iso-8859-5', displayValue: 'Cyrillic (ISO)' }, { value: 'koi8-r', displayValue: 'Cyrillic (KOI8-r)' }, { value: 'windows-1251', displayValue: 'Cyrillic (Windows)' }, { value: 'iso-8859-15', displayValue: 'Latin 9 (ISO)' }, { value: 'utf-7', displayValue: 'Unicode (UTF-7)' }, { value: 'utf-8', displayValue: 'Unicode (UTF-8)' }, { value: 'iso-8859-1', displayValue: 'Western European (ISO)' }, { value: 'windows-1252', displayValue: 'Western European (Windows)' }]
};
function getExportModeValues(format = 'Html', preview, merged) {
    var singleFile = { value: 'SingleFile', displayValue: 'Single File', localizationId: Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])('PreviewStringId.ExportOption_{0}ExportMode_SingleFile', format) };
    var singleFilePageByPage = { value: 'SingleFilePageByPage', displayValue: 'Single File PageByPage', localizationId: Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])('PreviewStringId.ExportOption_{0}ExportMode_SingleFilePageByPage', format) };
    var differentFiles = { value: 'DifferentFiles', displayValue: 'Different Files', localizationId: Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])('PreviewStringId.ExportOption_{0}ExportMode_DifferentFiles', format) };
    if (merged) {
        return [singleFilePageByPage];
    }
    else if (preview) {
        return [singleFile, singleFilePageByPage];
    }
    else {
        return [singleFile, singleFilePageByPage, differentFiles];
    }
}
var exportPageBreaks = { propertyName: 'exportPageBreaks', modelName: '@ExportPageBreaks', displayName: 'Export Page Breaks', localizationId: 'DevExpress.XtraPrinting.FormattedTextExportOptions.ExportPageBreaks', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] };
var rtfExportMode = {
    propertyName: 'rtfExportMode', modelName: '@ExportMode', defaultVal: 'SingleFilePageByPage',
    editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.RtfExportOptions.ExportMode',
    valuesArray: getExportModeValues('Rtf', true)
};
var docxExportMode = {
    propertyName: 'docxExportMode', modelName: '@ExportMode', defaultVal: 'SingleFilePageByPage',
    editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions.ExportMode',
    valuesArray: getExportModeValues('Docx', true)
};
var htmlExportMode = {
    propertyName: 'htmlExportMode', modelName: '@ExportMode', defaultVal: 'SingleFile',
    editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.ExportMode',
    valuesArray: getExportModeValues('Html')
};
var embedImagesInHTML = {
    propertyName: 'embedImagesInHTML', modelName: '@EmbedImagesInHTML', defaultVal: false,
    editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"], displayName: 'Embed Images In HTML', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptions.EmbedImagesInHTML'
};
var imageExportMode = {
    propertyName: 'imageExportMode', modelName: '@ExportMode', defaultVal: 'SingleFile',
    editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.ExportMode',
    valuesArray: getExportModeValues('Image')
};
var xlsExportMode = {
    propertyName: 'xlsExportMode', modelName: '@ExportMode', defaultVal: 'SingleFile',
    editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.ExportMode',
    valuesArray: getExportModeValues('Xls')
};
var xlsxExportMode = {
    propertyName: 'xlsxExportMode', modelName: '@ExportMode', defaultVal: 'SingleFile',
    editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.XlsxExportOptions.ExportMode',
    valuesArray: getExportModeValues('Xlsx')
};
function getTextExportModeValues() {
    return [
        { value: 'Text', displayValue: 'Text', localizationId: 'DevExpress.XtraPrinting.TextExportMode.Text' },
        { value: 'Value', displayValue: 'Value', localizationId: 'DevExpress.XtraPrinting.TextExportMode.Value' }
    ];
}
var textExportMode = {
    propertyName: 'textExportMode', modelName: '@TextExportMode', displayName: 'Text Export Mode', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.TextExportMode', defaultVal: 'Text', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'),
    valuesArray: getTextExportModeValues()
};
var xlsTextExportMode = {
    propertyName: 'textExportMode', modelName: '@TextExportMode', displayName: 'Text Export Mode', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.TextExportMode', defaultVal: 'Value', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'),
    valuesArray: getTextExportModeValues()
};
var csvTextSeparator = { propertyName: 'separator', modelName: '@Separator', defaultVal: '', displayName: 'Separator', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.Separator', editor: editorTemplates.csvSeparator };
var useCustomSeparator = { propertyName: 'useCustomSeparator', displayName: 'Use Custom Separator', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions.UseCustomSeparator', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool') };
var textEncodingType = {
    propertyName: 'encodingType', modelName: '@EncodingType', displayName: 'Encoding', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.Encoding', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: 'Default', from: external_DevExpress_Analytics_Utils_["fromEnum"],
    valuesArray: [
        { value: 'Default', displayValue: 'Windows-1252', localizationId: 'DevExpress.XtraPrinting.EncodingType.Default' },
        { value: 'ASCII', displayValue: 'us-ascii', localizationId: 'DevExpress.XtraPrinting.EncodingType.ASCII' },
        { value: 'Unicode', displayValue: 'utf-16', localizationId: 'DevExpress.XtraPrinting.EncodingType.Unicode' },
        { value: 'BigEndianUnicode', displayValue: 'utf-16BE', localizationId: 'DevExpress.XtraPrinting.EncodingType.BigEndianUnicode' },
        { value: 'UTF7', displayValue: 'utf-7', localizationId: 'DevExpress.XtraPrinting.EncodingType.UTF7' },
        { value: 'UTF8', displayValue: 'utf-8', localizationId: 'DevExpress.XtraPrinting.EncodingType.UTF8' },
        { value: 'UTF32', displayValue: 'utf-32', localizationId: 'DevExpress.XtraPrinting.EncodingType.UTF32' }
    ]
};
var xlsExportHyperlinks = {
    propertyName: 'exportHyperlinks', modelName: '@ExportHyperlinks', displayName: 'Export Hyperlinks', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.ExportHyperlinks', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"]
};
var xlsRawDataMode = {
    propertyName: 'rawDataMode', modelName: '@RawDataMode', displayName: 'Raw Data Mode', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.RawDataMode', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"]
};
var xlsShowGridLines = {
    propertyName: 'showGridLines', modelName: '@ShowGridLines', displayName: 'Show Grid Lines', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.ShowGridLines', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"]
};
var xlsExportOptionsSheetName = {
    propertyName: 'sheetName', modelName: '@SheetName', displayName: 'Sheet Name', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.SheetName', defaultVal: 'Sheet', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text')
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/csvMetaData.js



var csvExportOptionsSerializationInfo = [
    textEncodingType,
    textExportMode,
    { propertyName: 'quoteStringsWithSeparators', modelName: '@QuoteStringsWithSeparators', displayName: 'Quote Strings with Separators', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.QuoteStringsWithSeparators', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    useCustomSeparator, csvTextSeparator,
    { propertyName: 'skipEmptyRows', modelName: '@SkipEmptyRows', displayName: 'Skip Empty Rows', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions.SkipEmptyRows', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'skipEmptyColumns', modelName: '@SkipEmptyColumns', displayName: 'Skip Empty Columns', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions.SkipEmptyColumns', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] }
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/csvExportOptions.js



class csvExportOptions_CsvExportOptions {
    constructor(model, serializer) {
        this.defaultSeparatorValue = '';
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
        this.useCustomSeparator = external_ko_["observable"](this.separator && this.separator() !== this.defaultSeparatorValue);
        var separatorValue = external_ko_["observable"](this.separator());
        this.useCustomSeparator.subscribe((newValue) => {
            if (!newValue)
                separatorValue(this.defaultSeparatorValue);
        });
        this.separator = external_ko_["computed"]({
            read: () => { return separatorValue(); },
            write: (newValue) => {
                separatorValue(newValue);
                if (this.useCustomSeparator)
                    this.useCustomSeparator(newValue !== this.defaultSeparatorValue);
            }
        });
    }
    static from(model, serializer) {
        return new csvExportOptions_CsvExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, csvExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return csvExportOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        return (name === 'separator') && !(this.useCustomSeparator && this.useCustomSeparator());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/options/docxExportDocumentOptions.js


class docxExportDocumentOptions_DocxExportDocumentOptions {
    static from(model, serializer) {
        return new docxExportDocumentOptions_DocxExportDocumentOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, docxExportDocumentOptionsSerializationInfo, refs);
    }
    getInfo() {
        return docxExportDocumentOptionsSerializationInfo;
    }
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
}
var docxExportDocumentOptionsSerializationInfo = [
    { propertyName: 'title', modelName: '@Title', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Title', displayName: 'Title', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'subject', modelName: '@Subject', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Subject', displayName: 'Subject', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'keywords', modelName: '@Keywords', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Keywords', displayName: 'Keywords', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'category', modelName: '@Category', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Category', displayName: 'Category', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'comments', modelName: '@Comments', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Comments', displayName: 'Comments', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'author', modelName: '@Author', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Author', displayName: 'Author', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/rtfMetaData.js



var rtfExportOptionsSerializationInfoBase = [
    pageRange,
    rasterizationResolution,
    exportPageBreaks,
    exportWatermarks
];
var emptyFirstPageHeaderFooter = { propertyName: 'emptyFirstPageHeaderFooter', modelName: '@EmptyFirstPageHeaderFooter', displayName: 'Empty First Page Header/Footer', localizationId: 'DevExpress.XtraPrinting.FormattedTextExportOptions.EmptyFirstPageHeaderFooter', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] };
var keepRowHeight = { propertyName: 'keepRowHeight', modelName: '@KeepRowHeight', displayName: 'Keep Row Height', localizationId: 'DevExpress.XtraPrinting.FormattedTextExportOptions.KeepRowHeight', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] };
var rtfExportOptionsSerializationInfo = [
    emptyFirstPageHeaderFooter,
    keepRowHeight,
    rtfExportMode
].concat(rtfExportOptionsSerializationInfoBase);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/docxMetaData.js





var docxDocumentOptions = { propertyName: 'documentOptions', modelName: 'DocumentOptions', displayName: 'Document Options', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions.DocumentOptions', from: docxExportDocumentOptions_DocxExportDocumentOptions.from, toJsonObject: docxExportDocumentOptions_DocxExportDocumentOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') };
var docxExportOptionsSerializationInfo = [
    docxExportMode,
    exportWatermarks,
    pageRange,
    rasterizeImages,
    rasterizationResolution,
    emptyFirstPageHeaderFooter,
    keepRowHeight,
    exportPageBreaks,
    docxTableLayout,
    { propertyName: 'allowFloatingPictures', modelName: '@AllowFloatingPictures', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions.AllowFloatingPictures', displayName: 'Allow Floating Pictures', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"], defaultVal: false },
    docxDocumentOptions,
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/docxExportOptions.js



class docxExportOptions_DocxExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new docxExportOptions_DocxExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, docxExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return docxExportOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        var exportMode = this.docxExportMode ? this.docxExportMode() : docxExportMode.defaultVal;
        if (name === 'pageRange' || name === 'tableLayout')
            return exportMode === 'SingleFile';
        else if (name === 'emptyFirstPageHeaderFooter' || name === 'exportPageBreaks') {
            return exportMode === 'SingleFilePageByPage';
        }
        else if (name === 'keepRowHeight') {
            return exportMode === 'SingleFilePageByPage' && !this.tableLayout();
        }
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/emailExportOptions.js


class emailExportOptions_AdditionalRecipientModel {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    getInfo() {
        return additionalRecipientSerializationsInfo;
    }
}
emailExportOptions_AdditionalRecipientModel.createNew = () => {
    return new emailExportOptions_AdditionalRecipientModel({});
};
var additionalRecipientSerializationsInfo = [
    { propertyName: 'ContactName', modelName: '@ContactName', displayName: 'ContactName', localizationId: 'DevExpress.XtraPrinting.Recipient.ContactName', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'Address', modelName: '@Address', displayName: 'Address', localizationId: 'DevExpress.XtraPrinting.Recipient.Address', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'Prefix', modelName: '@Prefix', displayName: 'Prefix', localizationId: 'DevExpress.XtraPrinting.Recipient.Prefix', defaultVal: 'SMTP:', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    {
        propertyName: 'fieldType', modelName: '@FieldType', displayName: 'Field Type', localizationId: 'DevExpress.XtraPrinting.Recipient.FieldType', defaultVal: 'TO', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), from: external_DevExpress_Analytics_Utils_["fromEnum"],
        valuesArray: [
            { value: 'TO', displayValue: 'TO', localizationId: 'DevExpress.XtraPrinting.RecipientFieldType.TO' },
            { value: 'CC', displayValue: 'CC', localizationId: 'DevExpress.XtraPrinting.RecipientFieldType.CC' },
            { value: 'BCC', displayValue: 'BCC', localizationId: 'DevExpress.XtraPrinting.RecipientFieldType.BCC' }
        ]
    },
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/emailMetaData.js



var nativeFormatOptionsSerializationInfo = [
    { propertyName: 'compressed', modelName: '@Compressed', displayName: 'Compressed', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.Compressed', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'showOptionsBeforeSave', modelName: '@ShowOptionsBeforeSave', displayName: 'Show Options Before Save', localizationId: 'DevExpress.XtraPrinting.NativeFormatOptions.ShowOptionsBeforeSave', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] }
];
var additionalRecipients = { propertyName: 'additionalRecipients', modelName: 'AdditionalRecipients', displayName: 'Additional Recipients', localizationId: 'DevExpress.XtraPrinting.EmailOptions.AdditionalRecipients', array: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('commonCollection'), addHandler: emailExportOptions_AdditionalRecipientModel.createNew, template: '#dxrd-commonCollectionItem' };
var emailOptionsSerializationInfo = [
    { propertyName: 'recipientName', modelName: '@RecipientName', displayName: 'Recipient Name', localizationId: 'DevExpress.XtraPrinting.EmailOptions.RecipientName', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'recipientAddress', modelName: '@RecipientAddress', displayName: 'Recipient Address', localizationId: 'DevExpress.XtraPrinting.EmailOptions.RecipientAddress', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'recipientAddressPrefix', modelName: '@RecipientAddressPrefix', displayName: 'Recipient Address Prefix', localizationId: 'DevExpress.XtraPrinting.EmailOptions.RecipientAddressPrefix', defaultVal: 'SMTP:', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'subject', modelName: '@Subject', displayName: 'Subject', localizationId: 'DevExpress.XtraPrinting.EmailOptions.Subject', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'body', modelName: '@Body', displayName: 'Body', localizationId: 'DevExpress.XtraPrinting.EmailOptions.Body', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    additionalRecipients
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/htmlMetaData.js

var htmlExportOptionsSerializationInfoBase = [
    pageBorderColor,
    pageBorderWidth,
    pageRange,
    rasterizationResolution,
    expotOptionsTitle,
    htmlTableLayout,
    useHRefHyperlinks,
    allowURLsWithJSContent,
    removeSecondarySymbols,
    exportWatermarks,
    characterSet
];
var htmlExportOptionsSerializationInfo = [htmlExportMode, embedImagesInHTML, inlineCss].concat(htmlExportOptionsSerializationInfoBase);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/htmlExportOptions.js



class htmlExportOptions_HtmlExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new htmlExportOptions_HtmlExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, htmlExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return htmlExportOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        return ((name === 'pageRange') || (name === 'pageBorderWidth') || (name === 'exportWatermarks')) && ((this.htmlExportMode ? this.htmlExportMode() : htmlExportMode.defaultVal) === 'SingleFile');
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/imageMetaData.js



var imageExportOptionsSerializationInfoBase = [
    pageBorderColor,
    pageBorderWidth,
    pageRange,
    { propertyName: 'resolution', modelName: '@Resolution', displayName: 'Resolution', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.Resolution', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('numeric'), defaultVal: 96 },
    {
        propertyName: 'format', modelName: '@Format', displayName: 'Format', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.Format', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: 'Png', from: external_DevExpress_Analytics_Utils_["fromEnum"],
        valuesArray: [
            { value: 'Bmp', displayValue: 'BMP' },
            { value: 'Gif', displayValue: 'GIF' },
            { value: 'Jpeg', displayValue: 'JPEG' },
            { value: 'Png', displayValue: 'PNG' },
            { value: 'Emf', displayValue: 'EMF' },
            { value: 'Wmf', displayValue: 'WMF' },
            { value: 'Tiff', displayValue: 'TIFF' }
        ]
    }
];
var imageExportOptionsSerializationInfo = [imageExportMode, { propertyName: 'retainBackgroundTransparency', modelName: '@RetainBackgroundTransparency', displayName: 'Retain Background Transparency', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.RetainBackgroundTransparency', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    {
        propertyName: 'textRenderingMode', modelName: '@TextRenderingMode', displayName: 'Text Rendering Mode', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.TextRenderingMode', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: 'SystemDefault', from: external_DevExpress_Analytics_Utils_["fromEnum"],
        valuesArray: [
            { value: 'SystemDefault', displayValue: 'SystemDefault', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.SystemDefault' },
            { value: 'SingleBitPerPixelGridFit', displayValue: 'SingleBitPerPixelGridFit', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.SingleBitPerPixelGridFit' },
            { value: 'SingleBitPerPixel', displayValue: 'SingleBitPerPixel', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.SingleBitPerPixel' },
            { value: 'AntiAliasGridFit', displayValue: 'AntiAliasGridFit', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.AntiAliasGridFit' },
            { value: 'AntiAlias', displayValue: 'AntiAlias', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.AntiAlias' },
            { value: 'ClearTypeGridFit', displayValue: 'ClearTypeGridFit', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.ClearTypeGridFit' }
        ]
    }
].concat(imageExportOptionsSerializationInfoBase);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/imageExportOptions.js



class imageExportOptions_ImageExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new imageExportOptions_ImageExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, imageExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return imageExportOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        return ((name === 'pageRange') || (name === 'pageBorderWidth')) && ((this.imageExportMode ? this.imageExportMode() : imageExportMode.defaultVal) === 'SingleFile');
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/mhtMetaData.js

var mhtExportOptionsSerializationInfoBase = [
    pageBorderColor,
    pageBorderWidth,
    pageRange,
    rasterizationResolution,
    expotOptionsTitle,
    characterSet,
    htmlTableLayout,
    useHRefHyperlinks,
    allowURLsWithJSContent,
    removeSecondarySymbols,
    exportWatermarks
];
var mhtExportOptionsSerializationInfo = [htmlExportMode, inlineCss].concat(mhtExportOptionsSerializationInfoBase);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/mhtExportOptions.js



class mhtExportOptions_MhtExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new mhtExportOptions_MhtExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, mhtExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return mhtExportOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        return ((name === 'pageRange') || (name === 'pageBorderWidth')) && ((this.htmlExportMode ? this.htmlExportMode() : htmlExportMode.defaultVal) === 'SingleFile');
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/options/pdfExportDocumentOptions.js


class pdfExportDocumentOptions_PdfExportDocumentOptions {
    static from(model, serializer) {
        return new pdfExportDocumentOptions_PdfExportDocumentOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, pdfExportDocumentOptionsSerializationInfo, refs);
    }
    getInfo() {
        return pdfExportDocumentOptionsSerializationInfo;
    }
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
}
var author = { propertyName: 'author', modelName: '@Author', displayName: 'Author', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Author', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') };
var application = { propertyName: 'application', modelName: '@Application', displayName: 'Application', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Application', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') };
var title = { propertyName: 'title', modelName: '@Title', displayName: 'Title', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Title', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') };
var subject = { propertyName: 'subject', modelName: '@Subject', displayName: 'Subject', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Subject', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') };
var pdfExportDocumentOptionsSerializationInfo = [
    author, application, title, subject,
    { propertyName: 'keywords', modelName: '@Keywords', displayName: 'Keywords', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Keywords', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') }
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/options/pdfPermissionsOptions.js


class pdfPermissionsOptions_PdfPermissionsOptions {
    static from(model, serializer) {
        return new pdfPermissionsOptions_PdfPermissionsOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, pdfExportPermissionsOptionsSerializationInfo, refs);
    }
    getInfo() {
        return pdfExportPermissionsOptionsSerializationInfo;
    }
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
}
var pdfExportPermissionsOptionsSerializationInfo = [
    {
        propertyName: 'printingPermissions', modelName: '@PrintingPermissions', displayName: 'Printing Permissions', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions.PrintingPermissions', defaultVal: 'None', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'),
        valuesArray: [
            { value: 'None', displayValue: 'None', localizationId: 'DevExpress.XtraPrinting.PrintingPermissions.None' },
            { value: 'LowResolution', displayValue: 'LowResolution', localizationId: 'DevExpress.XtraPrinting.PrintingPermissions.LowResolution' },
            { value: 'HighResolution', displayValue: 'HighResolution', localizationId: 'DevExpress.XtraPrinting.PrintingPermissions.HighResolution' }
        ]
    },
    {
        propertyName: 'changingPermissions', modelName: '@ChangingPermissions', displayName: 'Changing Permissions', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions.ChangingPermissions', defaultVal: 'None', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'),
        valuesArray: [
            { value: 'None', displayValue: 'None', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.None' },
            { value: 'InsertingDeletingRotating', displayValue: 'InsertingDeletingRotating', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.InsertingDeletingRotating' },
            { value: 'FillingSigning', displayValue: 'FillingSigning', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.FillingSigning' },
            { value: 'CommentingFillingSigning', displayValue: 'CommentingFillingSigning', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.CommentingFillingSigning' },
            { value: 'AnyExceptExtractingPages', displayValue: 'AnyExceptExtractingPages', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.AnyExceptExtractingPages' }
        ]
    },
    { propertyName: 'enableCopying', modelName: '@EnableCopying', displayName: 'Enable Copying', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions.EnableCopying', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'enableScreenReaders', modelName: '@EnableScreenReaders', displayName: 'Enable Screen Readers', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions.EnableScreenReaders', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] }
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/options/pdfPasswordSecurityOptions.js




class pdfPasswordSecurityOptions_PdfPasswordSecurityOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new pdfPasswordSecurityOptions_PdfPasswordSecurityOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, pdfExportPasswordSecurityOptionsSerializationInfo, refs);
    }
    getInfo() {
        return pdfExportPasswordSecurityOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        if (!(this.permissionsPassword && this.permissionsPassword())) {
            if (name === 'permissionsOptions')
                return true;
            if (name === pdfEncryptionLevel.propertyName)
                return !(this.openPassword && this.openPassword());
            return false;
        }
    }
    hasSensitiveData() {
        return !!(this.openPassword && this.openPassword() || this.permissionsPassword && this.permissionsPassword());
    }
}
var pdfEncryptionLevel = {
    propertyName: 'encryptionLevel', modelName: '@EncryptionLevel', displayName: 'Encryption Level', localizationId: 'DevExpress.XtraPrinting.PdfPasswordSecurityOptions.EncryptionLevel', defaultVal: 'AES128', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'),
    valuesArray: [
        { value: 'ARC4', displayValue: 'ARC4', localizationId: 'DevExpress.XtraPrinting.PdfEncryptionLevel.ARC4' },
        { value: 'AES128', displayValue: 'AES128', localizationId: 'DevExpress.XtraPrinting.PdfEncryptionLevel.AES128' },
        { value: 'AES256', displayValue: 'AES256', localizationId: 'DevExpress.XtraPrinting.PdfEncryptionLevel.AES256' },
    ]
};
var pdfExportPasswordSecurityOptionsSerializationInfo = [
    Object(external_DevExpress_Analytics_Internal_["createPasswordSerializationInfo"])({ propertyName: 'openPassword', modelName: '@OpenPassword', displayName: 'Open Password', localizationId: 'DevExpress.XtraPrinting.PdfPasswordSecurityOptions.OpenPassword', defaultVal: '' }),
    pdfEncryptionLevel,
    Object(external_DevExpress_Analytics_Internal_["createPasswordSerializationInfo"])({ propertyName: 'permissionsPassword', modelName: '@PermissionsPassword', displayName: 'Permissions Password', localizationId: 'DevExpress.XtraPrinting.PdfPasswordSecurityOptions.PermissionsPassword', defaultVal: '' }),
    { propertyName: 'permissionsOptions', modelName: 'PermissionsOptions', displayName: 'Pdf Permissions Options', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions', from: pdfPermissionsOptions_PdfPermissionsOptions.from, toJsonObject: pdfPermissionsOptions_PdfPermissionsOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') }
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/pdfMetaData.js





var pdfACompatibilityValues = { None: 'None', PdfA1b: 'PdfA1b', PdfA2b: 'PdfA2b', PdfA3b: 'PdfA3b' };
var pdfACompatibility = {
    propertyName: 'pdfACompatibility', modelName: '@PdfACompatibility', displayName: 'PDF A Compatibility', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.PdfACompatibility', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: pdfACompatibilityValues.None, from: external_DevExpress_Analytics_Utils_["fromEnum"],
    valuesArray: [
        { value: pdfACompatibilityValues.None, displayValue: pdfACompatibilityValues.None, localizationId: 'DevExpress.XtraPrinting.PdfACompatibility.None' },
        { value: pdfACompatibilityValues.PdfA1b, displayValue: pdfACompatibilityValues.PdfA1b, localizationId: 'DevExpress.XtraPrinting.PdfACompatibility.PdfA1b' },
        { value: pdfACompatibilityValues.PdfA2b, displayValue: pdfACompatibilityValues.PdfA2b, localizationId: 'DevExpress.XtraPrinting.PdfACompatibility.PdfA2b' },
        { value: pdfACompatibilityValues.PdfA3b, displayValue: pdfACompatibilityValues.PdfA3b, localizationId: 'DevExpress.XtraPrinting.PdfACompatibility.PdfA3b' }
    ]
};
var pdfUACompatibilityValues = { None: 'None', PdfUA1: 'PdfUA1' };
var pdfUACompatibility = {
    propertyName: 'pdfUACompatibility', modelName: '@PdfUACompatibility', displayName: 'PDF UA Compatibility', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.PdfUACompatibility', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: pdfUACompatibilityValues.None, from: external_DevExpress_Analytics_Utils_["fromEnum"],
    valuesArray: [
        { value: pdfUACompatibilityValues.None, displayValue: pdfACompatibilityValues.None, localizationId: 'DevExpress.XtraPrinting.PdfUACompatibility.None' },
        { value: pdfUACompatibilityValues.PdfUA1, displayValue: pdfUACompatibilityValues.PdfUA1, localizationId: 'DevExpress.XtraPrinting.PdfUACompatibility.PdfUA1' }
    ]
};
var pdfExportOptionsSerializationInfo = [
    { propertyName: 'convertImagesToJpeg', modelName: '@ConvertImagesToJpeg', displayName: 'Convert Images to Jpeg', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.ConvertImagesToJpeg', defaultVal: true, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'showPrintDialogOnOpen', modelName: '@ShowPrintDialogOnOpen', displayName: 'Show Print Dialog on Open', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.ShowPrintDialogOnOpen', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'neverEmbeddedFonts', modelName: '@NeverEmbeddedFonts', displayName: 'Never Embedded Fonts', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.NeverEmbeddedFonts', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'exportEditingFieldsToAcroForms', modelName: '@ExportEditingFieldsToAcroForms', displayName: 'Export Editing Fields To AcroForms', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.ExportEditingFieldsToAcroForms', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    {
        propertyName: 'imageQuality', modelName: '@ImageQuality', displayName: 'Image Quality', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.ImageQuality', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: 'Highest', from: external_DevExpress_Analytics_Utils_["fromEnum"],
        valuesArray: [
            { value: 'Lowest', displayValue: 'Lowest', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.Lowest' },
            { value: 'Low', displayValue: 'Low', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.Low' },
            { value: 'Medium', displayValue: 'Medium', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.Medium' },
            { value: 'High', displayValue: 'High', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.High' },
            { value: 'Highest', displayValue: 'Highest', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.Highest' }
        ]
    },
    pdfACompatibility,
    pdfUACompatibility,
    pageRange,
    rasterizationResolution,
    rasterizeImages,
    { propertyName: 'documentOptions', modelName: 'DocumentOptions', displayName: 'Document Options', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.DocumentOptions', from: pdfExportDocumentOptions_PdfExportDocumentOptions.from, toJsonObject: pdfExportDocumentOptions_PdfExportDocumentOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'pdfPasswordSecurityOptions', modelName: 'PasswordSecurityOptions', displayName: 'Pdf Password Security Options', localizationId: 'DevExpress.XtraPrinting.PdfPasswordSecurityOptions', from: pdfPasswordSecurityOptions_PdfPasswordSecurityOptions.from, toJsonObject: pdfPasswordSecurityOptions_PdfPasswordSecurityOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') }
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/pdfExportOptions.js


class pdfExportOptions_PdfExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new pdfExportOptions_PdfExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, pdfExportOptionsSerializationInfo, refs);
    }
    isPropertyDisabled(propertyName) {
        var _pdfACompatibility = this.pdfACompatibility ? this.pdfACompatibility() : pdfACompatibility.defaultVal;
        var _pdfUACompatibility = this.pdfUACompatibility ? this.pdfUACompatibility() : pdfUACompatibility.defaultVal;
        if (propertyName === 'exportEditingFieldsToAcroForms')
            return _pdfACompatibility === pdfACompatibilityValues.PdfA1b;
        else if (propertyName === 'neverEmbeddedFonts')
            return _pdfACompatibility != pdfACompatibilityValues.None || _pdfUACompatibility != pdfUACompatibilityValues.None;
        else if (propertyName === 'pdfPasswordSecurityOptions' || propertyName === 'showPrintDialogOnOpen')
            return _pdfACompatibility != pdfACompatibilityValues.None;
    }
    getInfo() {
        return pdfExportOptionsSerializationInfo;
    }
    hasSensitiveData() {
        return this.pdfPasswordSecurityOptions && this.pdfPasswordSecurityOptions.hasSensitiveData();
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/printPreviewMetaData.js

var printPreviewOptionsSerializationInfo = [
    { propertyName: 'defaultFileName', modelName: '@DefaultFileName', displayName: 'Default File Name', localizationId: 'DevExpress.XtraPrinting.PrintPreviewOptions.DefaultFileName', defaultVal: 'Document', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') }
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/printPreviewOptions.js


class printPreviewOptions_PrintPreviewOptions {
    static from(model, serializer) {
        return new printPreviewOptions_PrintPreviewOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, printPreviewOptionsSerializationInfo, refs);
    }
    getInfo() {
        return printPreviewOptionsSerializationInfo;
    }
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/rtfExportOptions.js



class rtfExportOptions_RtfExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new rtfExportOptions_RtfExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, rtfExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return rtfExportOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        var exportMode = this.rtfExportMode ? this.rtfExportMode() : rtfExportMode.defaultVal;
        if (name === 'pageRange')
            return exportMode === 'SingleFile';
        else if (name === 'emptyFirstPageHeaderFooter' || name === 'exportPageBreaks' || name === 'keepRowHeight') {
            return exportMode === 'SingleFilePageByPage';
        }
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/textMetaData.js



var textExportOptionsSerializationInfo = [
    textEncodingType,
    { propertyName: 'quoteStringsWithSeparators', modelName: '@QuoteStringsWithSeparators', displayName: 'Quote Strings with Separators', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.QuoteStringsWithSeparators', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'separator', modelName: '@Separator', displayName: 'Separator', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.Separator', defaultVal: 'TAB', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    textExportMode
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/textExportOptions.js


class textExportOptions_TextExportOptions {
    static from(model, serializer) {
        return new textExportOptions_TextExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, textExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return textExportOptionsSerializationInfo;
    }
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/xlsMetaData.js





var documentOptionsSerializationsInfo = [
    author, application, title, subject,
    { propertyName: 'tags', modelName: '@Tags', displayName: 'Tags', localizationId: 'DevExpress.XtraPrinting.XlDocumentOptions.Tags', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'category', modelName: '@Category', displayName: 'Category', localizationId: 'DevExpress.XtraPrinting.XlDocumentOptions.Category', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'comments', modelName: '@Comments', displayName: 'Comments', localizationId: 'DevExpress.XtraPrinting.XlDocumentOptions.Comments', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') },
    { propertyName: 'company', modelName: '@Company', displayName: 'Company', localizationId: 'DevExpress.XtraPrinting.XlDocumentOptions.Company', defaultVal: '', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('text') }
];
var documentOptions = { propertyName: 'documentOptions', modelName: 'DocumentOptions', displayName: 'Document Options', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.DocumentOptions', info: documentOptionsSerializationsInfo, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') };
var encryptionOptionsSerializationsInfo = [
    {
        propertyName: 'type', modelName: '@Type', displayName: 'Type', localizationId: 'DevExpress.XtraPrinting.XlEncryptionOptions.Type', defaultVal: 'Strong', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), from: external_DevExpress_Analytics_Utils_["fromEnum"],
        valuesArray: [
            { value: 'Strong', displayValue: 'Strong', localizationId: 'DevExpress.XtraPrinting.XlEncryptionType.Strong' },
            { value: 'Compatible', displayValue: 'Compatible', localizationId: 'DevExpress.XtraPrinting.XlEncryptionType.Compatible' }
        ]
    },
    Object(external_DevExpress_Analytics_Internal_["createPasswordSerializationInfo"])({ propertyName: 'password', modelName: '@Password', displayName: 'Password', localizationId: 'DevExpress.XtraPrinting.XlEncryptionOptions.Password', defaultVal: '' })
];
var encryptionOptions = { propertyName: 'encryptionOptions', modelName: 'EncryptionOptions', displayName: 'Encryption Options', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.EncryptionOptions', info: encryptionOptionsSerializationsInfo, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') };
var xlsExportOptionsSerializationInfoCommon = [
    xlsExportHyperlinks,
    pageRange,
    xlsRawDataMode,
    xlsExportOptionsSheetName,
    xlsShowGridLines,
    xlsTextExportMode,
    rasterizeImages,
    rasterizationResolution,
    { propertyName: 'fitToPrintedPageWidth', modelName: '@FitToPrintedPageWidth', displayName: 'Fit To Printed Page Width', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.FitToPrintedPageWidth', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'fitToPrintedPageHeight', modelName: '@FitToPrintedPageHeight', displayName: 'Fit To Printed Page Height', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.FitToPrintedPageHeight', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    {
        propertyName: 'ignoreErrors', modelName: '@IgnoreErrors', displayName: 'Ignore Errors', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.IgnoreErrors', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: 'None', from: external_DevExpress_Analytics_Utils_["fromEnum"], valuesArray: [
            { value: 'None', displayValue: 'None', localizationId: 'DevExpress.XtraPrinting.XlIgnoreErrors.None' },
            { value: 'NumberStoredAsText', displayValue: 'Number Stored As Text', localizationId: 'DevExpress.XtraPrinting.XlIgnoreErrors.NumberStoredAsText' }
        ]
    },
    {
        propertyName: 'rightToLeftDocument', modelName: '@RightToLeftDocument', displayName: 'Right To Left Document', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.RightToLeftDocument', defaultVal: 'Default', from: external_DevExpress_Analytics_Utils_["fromEnum"], editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), valuesArray: [
            { value: 'True', displayValue: 'True', localizationId: 'DevExpress.Utils.DefaultBoolean.True' },
            { value: 'False', displayValue: 'False', localizationId: 'DevExpress.Utils.DefaultBoolean.False' },
            { value: 'Default', displayValue: 'Default', localizationId: 'DevExpress.Utils.DefaultBoolean.Default' }
        ]
    },
    documentOptions,
    encryptionOptions
];
var xlsExportOptionsSerializationInfoBase = [
    { propertyName: 'suppress256ColumnsWarning', modelName: '@Suppress256ColumnsWarning', displayName: 'Suppress 256 Columns Warning', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.Suppress256ColumnsWarning', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    { propertyName: 'suppress65536RowsWarning', modelName: '@Suppress65536RowsWarning', displayName: 'Suppress 65536 Rows Warning', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.Suppress65536RowsWarning', defaultVal: false, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('bool'), from: external_DevExpress_Analytics_Utils_["parseBool"] },
    {
        propertyName: 'workbookColorPaletteCompliance', modelName: '@WorkbookColorPaletteCompliance', displayName: 'Workbook Color Palette Compliance', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.WorkbookColorPaletteCompliance', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), defaultVal: 'ReducePaletteForExactColors', from: external_DevExpress_Analytics_Utils_["fromEnum"],
        valuesArray: [
            { value: 'ReducePaletteForExactColors', displayValue: 'ReducePaletteForExactColors', localizationId: 'DevExpress.XtraPrinting.WorkbookColorPaletteCompliance.ReducePaletteForExactColors' },
            { value: 'AdjustColorsToDefaultPalette', displayValue: 'AdjustColorsToDefaultPalette', localizationId: 'DevExpress.XtraPrinting.WorkbookColorPaletteCompliance.AdjustColorsToDefaultPalette' }
        ]
    }
];
var xlsExportOptionsSerializationInfo = [xlsExportMode].concat(xlsExportOptionsSerializationInfoCommon, xlsExportOptionsSerializationInfoBase);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/xlsExportOptions.js



class xlsExportOptions_XlsExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new xlsExportOptions_XlsExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, xlsExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return xlsExportOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        return name === 'pageRange' && (this.xlsExportMode ? this.xlsExportMode() : xlsExportMode.defaultVal) === 'SingleFile';
    }
    hasSensitiveData() {
        return !!(this.encryptionOptions && this.encryptionOptions.password());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/xlsxMetaData.js


var xlsxExportOptionsSerializationInfo = [xlsxExportMode].concat(xlsExportOptionsSerializationInfoCommon);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/xlsxExportOptions.js



class xlsxExportOptions_XlsxExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new xlsxExportOptions_XlsxExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, xlsxExportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return xlsxExportOptionsSerializationInfo;
    }
    isPropertyDisabled(name) {
        return name === 'pageRange' && (this.xlsxExportMode ? this.xlsxExportMode() : xlsxExportMode.defaultVal) === 'SingleFile';
    }
    hasSensitiveData() {
        return !!(this.encryptionOptions && this.encryptionOptions.password());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/exportOptionsMetaData.js













var exportOptionsSerializationInfo = [
    { propertyName: 'csv', modelName: 'Csv', displayName: 'CSV Export Options', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions', from: csvExportOptions_CsvExportOptions.from, toJsonObject: csvExportOptions_CsvExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'email', modelName: 'Email', displayName: 'E-mail Options', localizationId: 'DevExpress.XtraPrinting.EmailOptions', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor'), info: emailOptionsSerializationInfo },
    { propertyName: 'html', modelName: 'Html', displayName: 'HTML Export Options', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptions', from: htmlExportOptions_HtmlExportOptions.from, toJsonObject: htmlExportOptions_HtmlExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'image', modelName: 'Image', displayName: 'Image Export Options', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions', from: imageExportOptions_ImageExportOptions.from, toJsonObject: imageExportOptions_ImageExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'mailMessage', modelName: 'MailMessage', displayName: 'Mail Message Export Options', localizationId: 'DevExpress.XtraPrinting.MailMessageExportOptions', from: mhtExportOptions_MhtExportOptions.from, toJsonObject: mhtExportOptions_MhtExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'mht', modelName: 'Mht', displayName: 'MHT Export Options', localizationId: 'DevExpress.XtraPrinting.MhtExportOptions', from: mhtExportOptions_MhtExportOptions.from, toJsonObject: mhtExportOptions_MhtExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'nativeFormat', modelName: 'NativeFormat', displayName: 'Native Format Options', localizationId: 'DevExpress.XtraPrinting.NativeFormatOptions', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor'), info: nativeFormatOptionsSerializationInfo },
    { propertyName: 'pdf', modelName: 'Pdf', displayName: 'PDF Export Options', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions', from: pdfExportOptions_PdfExportOptions.from, toJsonObject: pdfExportOptions_PdfExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'printPreview', modelName: 'PrintPreview', displayName: 'Print Preview Options', localizationId: 'DevExpress.XtraPrinting.PrintPreviewOptions', from: printPreviewOptions_PrintPreviewOptions.from, toJsonObject: printPreviewOptions_PrintPreviewOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'rtf', modelName: 'Rtf', displayName: 'RTF Export Options', localizationId: 'DevExpress.XtraPrinting.RtfExportOptions', from: rtfExportOptions_RtfExportOptions.from, toJsonObject: rtfExportOptions_RtfExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'textExportOptions', modelName: 'Text', displayName: 'Text Export Options', localizationId: 'DevExpress.XtraPrinting.TextExportOptions', from: textExportOptions_TextExportOptions.from, toJsonObject: textExportOptions_TextExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'xls', modelName: 'Xls', displayName: 'XLS Export Options', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions', from: xlsExportOptions_XlsExportOptions.from, toJsonObject: xlsExportOptions_XlsExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'xlsx', modelName: 'Xlsx', displayName: 'XLSx Export Options', localizationId: 'DevExpress.XtraPrinting.XlsxExportOptions', from: xlsxExportOptions_XlsxExportOptions.from, toJsonObject: xlsxExportOptions_XlsxExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
    { propertyName: 'docx', modelName: 'Docx', displayName: 'Docx Export Options', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions', from: docxExportOptions_DocxExportOptions.from, toJsonObject: docxExportOptions_DocxExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') }
];

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/exportOptions/exportOptions.js


class exportOptions_ExportOptions {
    constructor(model, serializer) {
        serializer = serializer || new external_DevExpress_Analytics_Utils_["ModelSerializer"]();
        serializer.deserialize(this, model);
    }
    static from(model, serializer) {
        return new exportOptions_ExportOptions(model || {}, serializer);
    }
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, exportOptionsSerializationInfo, refs);
    }
    getInfo() {
        return exportOptionsSerializationInfo;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-export.js



































// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-export-metadata.js





























// CONCATENATED MODULE: ./node_modules/devexpress-reporting/common/utils/_locker.js
class Locker {
    constructor() {
        this.lock = (action) => {
            if (!this.isUpdate) {
                this.isUpdate = true;
                action();
                this.isUpdate = false;
            }
        };
        this.isUpdate = false;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-internal.js







// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-metadata.js



// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/constants.js
var ActionId = {
    Design: 'dxxrp-design',
    FirstPage: 'dxxrp-first-page',
    PrevPage: 'dxxrp-prev-page',
    Pagination: 'dxxrp-pagination',
    NextPage: 'dxxrp-next-page',
    LastPage: 'dxxrp-last-page',
    MultipageToggle: 'dxxrp-multipage-toggle',
    HighlightEditingFields: 'dxxrp-highlight-editing-fields',
    ZoomOut: 'dxxrp-zoom-out',
    ZoomSelector: 'dxxrp-zoom-selector',
    ZoomIn: 'dxxrp-zoom-in',
    Print: 'dxxrp-print',
    PrintPage: 'dxxrp-print-page',
    ExportTo: 'dxxrp-export-menu',
    Search: 'dxxrp-search',
    FullScreen: 'dxrd-fullscreen'
};
var ExportFormatID = {
    PDF: { text: 'PDF', textId: 'ASPxReportsStringId.ExportName_pdf', format: 'pdf' },
    XLS: { text: 'XLS', textId: 'ASPxReportsStringId.ExportName_xls', format: 'xls' },
    XLSX: { text: 'XLSX', textId: 'ASPxReportsStringId.ExportName_xlsx', format: 'xlsx' },
    RTF: { text: 'RTF', textId: 'ASPxReportsStringId.ExportName_rtf', format: 'rtf' },
    MHT: { text: 'MHT', textId: 'ASPxReportsStringId.ExportName_mht', format: 'mht' },
    HTML: { text: 'HTML', textId: 'ASPxReportsStringId.ExportName_html', format: 'html' },
    Text: { text: 'Text', textId: 'ASPxReportsStringId.ExportName_txt', format: 'txt', propertyName: 'textExportOptions' },
    CSV: { text: 'CSV', textId: 'ASPxReportsStringId.ExportName_csv', format: 'csv' },
    Image: { text: 'Image', textId: 'ASPxReportsStringId.ExportName_png', format: 'image' },
    DOCX: { text: 'DOCX', textId: 'ASPxReportsStringId.ExportName_docx', format: 'docx' }
};
var PreviewElements = {
    Toolbar: 'dxrd-preview-toolbar-scrollable',
    Surface: 'dxrdp-surface',
    RightPanel: 'dxrd-right-panel-template-base',
    ExportTool: 'dxrd-export-tool'
};
var ZoomAutoBy = {
    None: 1,
    WholePage: 0,
    PageWidth: -1
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/accessibility/_previewBricksKeyboardHelper.js


class _previewBricksKeyboardHelper_PreviewBricksKeyboardHelper extends external_DevExpress_Analytics_Internal_["KeyboardHelperWithArrowButtonBase"] {
    constructor(viewModel) {
        super();
        this.controlElementClassName = 'dx-accessibility-page-item';
        this.liveRegionId = 'dxrd-preview-bricks-live-region';
        this._needFocusNext = false;
        this._firstSelectedBrickIndex = 0;
        this._lastSelectedBrickIndex = 0;
        this._resetBricksIndexes = () => {
            this._firstSelectedBrickIndex = 0;
            this._lastSelectedBrickIndex = 0;
        };
        this._resetBricks = () => {
            return this._currentPage.selectBrick('');
        };
        this.delayedInit = () => {
            this._initTimeout && clearTimeout(this._initTimeout);
            this._initTimeout = setTimeout(() => {
                this.initialize();
            }, 20);
        };
        this.reset = () => {
            this._resetBricks();
            this._resetBricksIndexes();
        };
        this.active = false;
        this._getSelectedContent = viewModel.getSelectedContent;
        this._pages = viewModel.pages;
        this._goToPage = viewModel.goToPage.bind(viewModel);
        this._usePageKeyboardNavigation = viewModel.showMultipagePreview;
        this._disposables.push(viewModel.currentPage.subscribe(newPage => {
            if (newPage) {
                this._currentPage = newPage;
                this.delayedInit();
            }
        }));
    }
    dispose() {
        this._activeBricksSubscription && this._activeBricksSubscription.dispose();
        this._afterInitializeCallback = null;
        this._initTimeout && clearTimeout(this._initTimeout);
        super.dispose();
    }
    initialize() {
        if (!this._currentPage)
            return;
        this._bricks = this._currentPage.bricks;
        if (this._usePageKeyboardNavigation()) {
            this.startIndex = this._pages().indexOf(this._currentPage);
        }
        else {
            this.startIndex = 0;
        }
        super.initialize();
        this._afterInitializeCallback && this._afterInitializeCallback();
        this._afterInitializeCallback = null;
        if (this._needFocusNext) {
            this.controlElements[this.startIndex].element.focus();
            this.lastFocusItem().setAttribute('tabindex', '-1');
            this._needFocusNext = false;
        }
        this._activeBricksSubscription && this._activeBricksSubscription.dispose();
        this._activeBricksSubscription = this._currentPage.activeBricks.subscribe(activeBricks => {
            this._liveRegionTimeout && clearTimeout(this._liveRegionTimeout);
            if (!activeBricks.length)
                return;
            this._liveRegionTimeout = this.liveRegion().changeText(this._getSelectedContent(','));
            var _bricks = this._bricks();
            for (var i = 0; i < _bricks.length; i++) {
                const brick = _bricks[i];
                if (brick === activeBricks[0])
                    this._firstSelectedBrickIndex = i;
                if (brick === activeBricks[activeBricks.length - 1]) {
                    this._lastSelectedBrickIndex = i;
                    break;
                }
            }
        });
    }
    clickHandler() { }
    itemHandleEscKey(e, index) {
        if (!this.active)
            return false;
        this.controlElements[index].element.classList.remove('dx-accessibility-active-state');
        this.active = false;
        this._resetBricks();
        return true;
    }
    _actionExecute(brick, e) {
        if (brick.navigation) {
            brick.onClick(e);
        }
        else if (brick.efIndex) {
            var editField = this._currentPage.editingFields()[brick.efIndex - 1];
            var efItems = Array.prototype.slice.call(e.target.querySelectorAll('.dx-accessibility-editing-field-item'));
            var efItem = Object(external_DevExpress_Analytics_Internal_["findFirstItemMatchesCondition"])(efItems, (item) => external_ko_["dataFor"](item) === editField);
            if (efItem && editField.activateEditor) {
                editField.activateEditor(editField, { target: efItem, currentTarget: efItem });
                var subscription = editField.active.subscribe(value => {
                    if (!value) {
                        if (document.activeElement === document.body) {
                            e.target.focus();
                        }
                        brick.active(true);
                        this.active = true;
                        e.target.classList.add('dx-accessibility-active-state');
                        subscription.dispose();
                    }
                });
                this._disposables.push(subscription);
            }
            else if (editField.onClick) {
                editField.onClick(editField, e);
            }
        }
    }
    _getNonEmptyBrick(index, reverse) {
        var nextIndex = index + (reverse ? -1 : 1);
        var _bricks = this._bricks();
        var brick = _bricks[nextIndex];
        if (reverse && nextIndex < 0 || nextIndex > _bricks.length - 1) {
            brick = this._getNonEmptyBrick(reverse ? _bricks.length : -1, reverse);
        }
        if (brick.efIndex && brick.efIndex > 0)
            return brick;
        else if (brick.accessibleDescription || brick.text() || brick.efIndex || brick.navigation)
            return brick;
        return this._getNonEmptyBrick(nextIndex, reverse);
    }
    _pageChangeHandle(action, newIndex, reverse = false) {
        this._needFocusNext = true;
        this.reset();
        if (!this.active) {
            if (this._usePageKeyboardNavigation())
                return action();
            else {
                var lastFocusItem = this.lastFocusItem();
                lastFocusItem.setAttribute('tabindex', '0');
                lastFocusItem.focus();
                return false;
            }
        }
        this._getNonEmptyBrick(newIndex, reverse).active(true);
        return true;
    }
    _activatePage(e, index) {
        if (this._bricks().length) {
            var page = this.controlElements[index];
            this.active = true;
            page.element.classList.add('dx-accessibility-active-state');
            var lastBrick = this._getNonEmptyBrick(this._lastSelectedBrickIndex - 1, false);
            lastBrick && lastBrick.active(true);
        }
    }
    itemHandleHomeKey(e, index) {
        return this._pageChangeHandle(() => super.itemHandleHomeKey(e, index), -1);
    }
    itemHandleEndKey(e, index) {
        return this._pageChangeHandle(() => super.itemHandleEndKey(e, index), this._bricks().length, true);
    }
    itemHandleLeftArrowKey(e, index) {
        return this._pageChangeHandle(() => {
            this.setFocusToPrevious(index);
            return true;
        }, this._firstSelectedBrickIndex, true);
    }
    itemHandleRightArrowKey(e, index) {
        return this._pageChangeHandle(() => {
            this.setFocusToNext(index);
            return true;
        }, this._lastSelectedBrickIndex);
    }
    itemHandleEnterKey(e, index) {
        if (this.active) {
            if (this._lastSelectedBrickIndex !== this._firstSelectedBrickIndex)
                return false;
            var brick = this._bricks()[this._lastSelectedBrickIndex];
            if (brick && brick.active()) {
                this._actionExecute(brick, e);
            }
        }
        else if (this._usePageKeyboardNavigation() && this._currentPage !== this._pages()[index]) {
            this._goToPage(index);
            this._afterInitializeCallback = () => {
                this._activatePage(e, index);
            };
        }
        else {
            this._activatePage(e, index);
        }
        return true;
    }
    itemHandleSpaceKey(e, index) {
        return this.itemHandleEnterKey(e, index);
    }
    setFocusToPrevious(currentIndex) {
        return super.setFocusToPrevious(currentIndex);
    }
    setFocusToNext(currentIndex) {
        return super.setFocusToNext(currentIndex);
    }
    createControlElement(element, index) {
        return new _previewBricksKeyboardHelper_PreviewPageControlsElement(element, this);
    }
}
class _previewBricksKeyboardHelper_PreviewPageControlsElement extends external_DevExpress_Analytics_Internal_["AccessibilityControlElementBase"] {
    constructor(element, _keyboardHelper) {
        super(element);
        this.element = element;
        this._keyboardHelper = _keyboardHelper;
        this._focusHandler = () => {
            this._keyboardHelper.liveRegion().changeText(Object(external_DevExpress_Analytics_Internal_["getLocalization"])('Press Enter or Space to switch to the document reading mode.', 'ASPxReportsStringId.WebDocumentViewer_AriaSwitchToDocumentReadingMode'));
            this.element.classList.remove('dx-accessibility-active-state');
            if (this._keyboardHelper.active) {
                this._keyboardHelper.reset();
            }
            this._keyboardHelper.active = false;
        };
        element.addEventListener('focus', this._focusHandler);
    }
    dispose() {
        this.element.removeEventListener('focus', this._focusHandler);
        super.dispose();
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/settings.js


var EditablePreviewEnabled = external_ko_["observable"](true);
var SearchAvailable = external_ko_["observable"](true);
var ReportServerInvokeUri = '/RSWebDocumentViewerApi/Invoke';
var ReportServerExportUri = '/RSWebDocumentViewerApi/Download';
var AsyncExportApproach = Object(external_DevExpress_Analytics_Internal_["createGlobalModuleVariableFunc"])(false);
var MessageHandler = Object(external_DevExpress_Analytics_Internal_["createGlobalModuleVariableFunc"])({
    processError: (message, showForUser, prefix = '', element) => {
        showForUser && Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(message.substr(prefix.length), undefined, undefined, undefined, undefined, element);
        Object(external_DevExpress_Analytics_Internal_["NotifyAboutWarning"])(message, false);
    },
    processMessage: (message, showForUser, element) => { showForUser && Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(message, external_DevExpress_Analytics_Internal_["NotifyType"].success, 10000, undefined, undefined, element); },
    processWarning: (message, showForUser, element) => { showForUser && Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(message, undefined, undefined, undefined, undefined, element); }
});
var HandlerUri = Object(external_DevExpress_Analytics_Internal_["createGlobalModuleVariableFunc"])('DXXRDV.axd');
var previewDefaultResolution = Object(external_DevExpress_Analytics_Internal_["createGlobalModuleVariableFunc"])(96);
var ReportServerDownloadUri = Object(external_DevExpress_Analytics_Internal_["createGlobalModuleVariableFunc"])('');
var PollingDelay = Object(external_DevExpress_Analytics_Internal_["createGlobalModuleVariableFunc"])(300);
var TimeOut = Object(external_DevExpress_Analytics_Internal_["createGlobalModuleVariableFunc"])(105000);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/editing/models/textEditingField.js






class textEditingField_TextEditingFieldViewModelBase {
    keypressAction(data, event) {
        Object(external_DevExpress_Analytics_Internal_["processTextEditorHotKeys"])(event, {
            esc: () => {
                this.hideEditor(false);
            },
            ctrlEnter: () => {
                this.hideEditor(true);
            }
        });
    }
}
class textEditingField_TextEditingFieldViewModel extends textEditingField_TextEditingFieldViewModelBase {
    constructor(field, pageWidth, pageHeight, zoom, bounds) {
        super();
        this.template = 'dxrp-editing-field-container';
        this.htmlValue = () => this.field.htmlValue();
        this.wordWrap = true;
        this.active = external_ko_["observable"](false);
        var brickStyle = field.model().brickOptions;
        var style = { rtl: () => brickStyle.rtl };
        new external_DevExpress_Analytics_Utils_["ModelSerializer"]().deserialize(style, JSON.parse(brickStyle.style), brickStyleSerializationsInfo);
        var cssCalculator = new external_DevExpress_Analytics_Internal_["CssCalculator"](style, external_ko_["observable"](!!brickStyle.rtlLayout));
        var padding = cssCalculator.paddingsCss();
        var verticalPadding = parseInt(padding['paddingTop']) + parseInt(padding['paddingBottom']);
        if (cssCalculator.borderCss()['borderTop'] !== 'none') {
            verticalPadding += style['borderWidth']();
        }
        if (cssCalculator.borderCss()['borderBottom'] !== 'none') {
            verticalPadding += style['borderWidth']();
        }
        this.breakOffsetStyle = () => {
            return {
                top: bounds.offset.y * -100 / bounds.height + '%',
                left: bounds.offset.x * -100 / bounds.width + '%'
            };
        };
        this.textStyle = () => external_jQuery_["extend"]({}, cssCalculator.fontCss(), cssCalculator.foreColorCss(), cssCalculator.textAlignmentCss());
        this.zoom = zoom;
        this.field = field;
        if (brickStyle.wordWrap != undefined) {
            this.wordWrap = brickStyle.wordWrap;
        }
        this.hideEditor = (shouldCommit) => {
            setTimeout(() => {
                if (shouldCommit) {
                    if (editorOptions.onHideEditor) {
                        editorOptions.onHideEditor(field);
                    }
                    else {
                        field.editValue(field._editorValue());
                    }
                }
                else {
                    field._editorValue(field.editValue());
                }
                this.active(false);
            }, 1);
        };
        var editor = editingFieldExtensions_EditingFieldExtensions.instance().editor(field.editorName());
        var editorOptions = external_jQuery_["extend"](true, {}, editor && editor.options || {});
        this.data = {
            value: field._editorValue,
            hideEditor: this.hideEditor,
            keypressAction: this.keypressAction,
            textStyle: this.textStyle,
            options: editorOptions,
            getOptions: (templateOptions) => { return external_jQuery_["extend"]({}, this.data.options, templateOptions); }
        };
        var isCustomEditor = !!(editor && editor.template && editor.template !== 'dxrp-editing-field-datetime');
        if (!isCustomEditor) {
            var self = this;
            this.data.options = external_jQuery_["extend"](true, {}, editorOptions, {
                value: field._editorValue,
                onFocusOut: (e) => {
                    self.hideEditor(true);
                }
            });
        }
        if (editor) {
            this.editorTemplate = editor.template || 'dxrp-editing-field-mask';
        }
        else {
            this.editorTemplate = 'dxrp-editing-field-text';
        }
        this.containerStyle = external_ko_["pureComputed"](() => {
            return external_jQuery_["extend"]({
                width: bounds.width + 'px',
                height: bounds.height + 'px',
                'line-height': (bounds.height - verticalPadding) + 'px',
                top: bounds.top * 100 / pageHeight + '%',
                left: bounds.left * 100 / pageWidth + '%',
                cursor: this.field.readOnly() ? 'auto' : 'text'
            }, this.active() || !this.htmlValue() ? cssCalculator.borderCss() : { border: 'none' }, isCustomEditor && this.active() || (!!this.htmlValue() && !this.active()) ? { padding: 0 } : cssCalculator.paddingsCss(), { 'border-color': 'transparent' });
        });
        this.borderStyle = external_ko_["pureComputed"](() => {
            if (style['borderWidth']() > 0 && style['borders']() !== 'None') {
                return {
                    left: '-' + style['borderWidth']() + 'px',
                    top: '-' + style['borderWidth']() + 'px',
                    paddingRight: (style['borderWidth']() * 2 - 2) + 'px',
                    paddingBottom: (style['borderWidth']() * 2 - 2) + 'px'
                };
            }
        });
    }
    activateEditor(viewModel, e) {
        if (this.field.readOnly() || this.active()) {
            return;
        }
        var data = viewModel.data;
        if (data && data.options && data.options.onPreRender) {
            data.options.onPreRender(this.data);
        }
        this.active(true);
        var elementFocused = false;
        if (viewModel.options && viewModel.options.onEditorShown) {
            elementFocused = viewModel.options.onEditorShown(this.data, external_jQuery_["fn"].constructor(e && e.currentTarget).first().get(0));
        }
        if (!elementFocused) {
            focusTextElement(e && e.currentTarget);
        }
    }
}
function focusTextElement(target) {
    var element = external_jQuery_["fn"].constructor(target).find('input').eq(0)[0];
    if (!element)
        element = external_jQuery_["fn"].constructor(target).find('textarea').eq(0)[0];
    element.focus();
    if (element['setSelectionRange']) {
        element['setSelectionRange'](element['value'].length, element['value'].length);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/editing/models/characterCombEditingField.js






class characterCombEditingField_CharacterCombEditingFieldViewModel extends textEditingField_TextEditingFieldViewModelBase {
    constructor(field, pageWidth, pageHeight, zoom, bounds) {
        super();
        this.field = field;
        this.template = 'dxrp-character-comb-editing-field';
        this.active = external_ko_["observable"](false);
        var brickStyle = field.model().brickOptions;
        var style = { rtl: () => brickStyle.rtl };
        new external_DevExpress_Analytics_Utils_["ModelSerializer"]().deserialize(style, JSON.parse(brickStyle.style), brickStyleSerializationsInfo);
        var cssCalculator = new external_DevExpress_Analytics_Internal_["CssCalculator"](style, external_ko_["observable"](!!brickStyle.rtlLayout));
        var verticalPadding = parseInt(cssCalculator.paddingsCss()['paddingTop']) + parseInt(cssCalculator.paddingsCss()['paddingBottom']);
        var borderCss = cssCalculator.borderCss();
        if (borderCss['borderTop'] !== 'none') {
            verticalPadding += style['borderWidth']();
        }
        if (borderCss['borderBottom'] !== 'none') {
            verticalPadding += style['borderWidth']();
        }
        this.textStyle = () => external_jQuery_["extend"]({}, cssCalculator.fontCss(), cssCalculator.foreColorCss(), cssCalculator.textAlignmentCss());
        this.hideEditor = (shouldCommit) => {
            setTimeout(() => {
                if (shouldCommit) {
                    field.editValue(field._editorValue());
                }
                else {
                    field._editorValue(field.editValue());
                }
                this.active(false);
            });
        };
        this.containerStyle = external_ko_["pureComputed"](() => {
            return external_jQuery_["extend"]({
                width: bounds.width + 'px',
                height: bounds.height + 'px',
                'line-height': (bounds.height - verticalPadding) + 'px',
                top: bounds.top * 100 / pageHeight + '%',
                left: bounds.left * 100 / pageWidth + '%'
            }, cssCalculator.fontCss(), cssCalculator.foreColorCss());
        });
        var cellVerticalPadding = 0;
        var borderCellStyle = 'none';
        ['Left', 'Top', 'Right', 'Bottom'].forEach((item) => {
            if (borderCss['border' + item] !== 'none') {
                borderCellStyle = borderCss['border' + item];
                cellVerticalPadding = style['borderWidth']() * 2;
            }
        });
        var cellStyle = {
            'border': borderCellStyle,
            'text-align': 'center',
            'position': 'absolute',
            'box-sizing': 'border-box',
            'border-color': 'transparent'
        };
        var characterCombBounds = field.model().brickOptions.characterCombBounds;
        this.cells = [];
        var rowTops = {};
        for (var i = 0; i < characterCombBounds.length; i++) {
            this.cells.push({
                style: external_jQuery_["extend"]({
                    width: characterCombBounds[i].width + 'px',
                    height: characterCombBounds[i].height + 'px',
                    'line-height': (characterCombBounds[i].height - cellVerticalPadding) + 'px',
                    top: characterCombBounds[i].top + 'px',
                    left: characterCombBounds[i].left + 'px'
                }, cellStyle),
                text: ''
            });
            rowTops[characterCombBounds[i].top] = i;
        }
        var rowsCount = Object.keys(rowTops).length;
        var colsCount = this.cells.length / rowsCount;
        characterCombEditingField_CharacterCombEditingFieldViewModel.setText(this.cells, style['textAlignment'](), style.rtl(), field.editValue.peek(), rowsCount, colsCount);
        field.editValue.subscribe(newValue => {
            characterCombEditingField_CharacterCombEditingFieldViewModel.setText(this.cells, style['textAlignment'](), style.rtl(), newValue, rowsCount, colsCount);
        });
        this.zoom = zoom;
    }
    activateEditor(viewModel, e) {
        if (!this.field.readOnly() && !this.active()) {
            this.active(true);
            focusTextElement(e && e.currentTarget);
        }
    }
    static setText(cells, textAlignment, rtl, text, rowsCount, colsCount) {
        for (var j = 0; j < cells.length; j++) {
            cells[j].text = '';
        }
        var textRowsCount = Math.ceil(text.length / colsCount);
        var textLastRowColCount = text.length % colsCount;
        var startRow = -1;
        if (textAlignment.indexOf('Bottom') === 0) {
            startRow = rowsCount - textRowsCount;
        }
        else if (textAlignment.indexOf('Middle') === 0) {
            startRow = Math.floor((rowsCount - textRowsCount) / 2);
        }
        else {
            startRow = 0;
        }
        var lastRowStartCol = -1;
        if (textAlignment.indexOf('Right') > 0) {
            lastRowStartCol = rtl ? 0 : (colsCount - textLastRowColCount);
        }
        else if (textAlignment.indexOf('Center') > 0) {
            lastRowStartCol = Math.floor((colsCount - textLastRowColCount) / 2);
        }
        else {
            lastRowStartCol = rtl ? (colsCount - textLastRowColCount) : 0;
        }
        var j = startRow * colsCount;
        var i = 0;
        for (; i < text.length - textLastRowColCount; i++, j++) {
            if (j >= 0 && j < cells.length) {
                cells[j].text = text[i];
            }
        }
        for (; i < text.length; i++, j++) {
            if (j >= 0 && j < cells.length) {
                cells[j + lastRowStartCol].text = text[i];
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/editing/models/checkEditingField.js






var GlyphStyle;
(function (GlyphStyle) {
    GlyphStyle[GlyphStyle["StandardBox1"] = 0] = "StandardBox1";
    GlyphStyle[GlyphStyle["StandardBox2"] = 1] = "StandardBox2";
    GlyphStyle[GlyphStyle["YesNoBox"] = 2] = "YesNoBox";
    GlyphStyle[GlyphStyle["YesNoSolidBox"] = 3] = "YesNoSolidBox";
    GlyphStyle[GlyphStyle["YesNo"] = 4] = "YesNo";
    GlyphStyle[GlyphStyle["RadioButton"] = 5] = "RadioButton";
    GlyphStyle[GlyphStyle["Smiley"] = 6] = "Smiley";
    GlyphStyle[GlyphStyle["Thumb"] = 7] = "Thumb";
    GlyphStyle[GlyphStyle["Toggle"] = 8] = "Toggle";
    GlyphStyle[GlyphStyle["Star"] = 9] = "Star";
    GlyphStyle[GlyphStyle["Heart"] = 10] = "Heart";
})(GlyphStyle || (GlyphStyle = {}));
var CheckState;
(function (CheckState) {
    CheckState[CheckState["Unchecked"] = 0] = "Unchecked";
    CheckState[CheckState["Checked"] = 1] = "Checked";
    CheckState[CheckState["Indeterminate"] = 2] = "Indeterminate";
})(CheckState || (CheckState = {}));
function createCustomGlyphStyleCss(imageSource) {
    var backgroundResult = {};
    if (imageSource) {
        var urlContent = imageSource.getDataUrl();
        if (urlContent) {
            backgroundResult = { background: 'url(' + urlContent + ') no-repeat' };
            backgroundResult['backgroundPosition'] = 'center center';
            backgroundResult['backgroundSize'] = 'cover';
        }
    }
    return backgroundResult;
}
function getCheckBoxTemplate(style, state, customGlyph) {
    if (!external_jQuery_["isEmptyObject"](customGlyph)) {
        return 'dxrd-checkboxcustomglyph';
    }
    else {
        return external_DevExpress_Analytics_Widgets_Internal_["SvgTemplatesEngine"].getExistingTemplate('dxrd-svg-checkboxglyphs-' + style + '_' + state);
    }
}
class checkEditingField_CheckEditingFieldViewModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(field, pageWidth, pageHeight, zoom, editingFieldsProvider) {
        super();
        this.focused = external_ko_["observable"](false);
        this._editingFieldsProvider = editingFieldsProvider;
        this.template = 'dxrp-editing-field-checkbox';
        this.field = field;
        this.zoom = zoom;
        var bounds = this.field.model().bounds;
        var checkBounds = this.field.model().brickOptions.checkBoxBounds;
        var rtl = this.field.model().brickOptions.rtlLayout;
        this.containerStyle = () => {
            return {
                height: bounds.height + 'px',
                width: bounds.width + 'px',
                top: bounds.top * 100 / pageHeight + '%',
                left: bounds.left * 100 / pageWidth + '%',
                cursor: this.field.readOnly() ? 'auto' : 'pointer'
            };
        };
        this.checkStyle = () => {
            var result = {
                height: checkBounds.height + 'px',
                width: checkBounds.width + 'px',
                top: checkBounds.top + 'px',
                left: (rtl ? (bounds.width - checkBounds.left - checkBounds.width) : checkBounds.left) + 'px'
            };
            return result;
        };
        this._disposables.push(this.customGlyphStyleCss = external_ko_["pureComputed"](() => {
            var imageSourceData = field.model().brickOptions.checkBoxGlyphOptions.customGlyphs.filter(item => item.key === this.field.editValue())[0];
            if (!imageSourceData.value)
                return {};
            var imageSource = new imageSource_ImageSource(imageSourceData.value.imageType, imageSourceData.value.image);
            return createCustomGlyphStyleCss(imageSource);
        }));
        this._disposables.push(this.checkStateStyleIcon = external_ko_["pureComputed"](() => {
            return getCheckBoxTemplate(GlyphStyle[field.model().brickOptions.checkBoxGlyphOptions.glyphStyle], CheckState[this.field.editValue()], this.customGlyphStyleCss());
        }));
    }
    _toggleCheckState() {
        if (this.field.editValue() === CheckState.Checked) {
            this.field.editValue(CheckState.Unchecked);
        }
        else {
            this.field.editValue(CheckState.Checked);
        }
    }
    onKeyDown(_, e) {
        if (e.key == external_DevExpress_Analytics_Internal_["KeyboardEnum"].Space) {
            this.toggleCheckState();
        }
        else {
        }
    }
    onBlur() {
        this.focused(false);
    }
    onFocus() {
        this.focused(true);
    }
    onClick(_, e) {
        e.target.focus();
        this.toggleCheckState();
        e.stopPropagation();
    }
    checked() {
        if (this.field.editValue() === CheckState.Checked) {
            return true;
        }
        if (this.field.editValue() === CheckState.Unchecked) {
            return false;
        }
    }
    toggleCheckState() {
        if (this.field.readOnly())
            return;
        if (!this.field.groupID()) {
            this._toggleCheckState();
        }
        else if (this.checked() === false) {
            this._editingFieldsProvider().forEach(value => {
                if (value.groupID() === this.field.groupID()) {
                    value.editValue(CheckState.Unchecked);
                }
            });
            this._toggleCheckState();
        }
    }
}

// EXTERNAL MODULE: external "DevExpress.ui.dxPopup"
var external_DevExpress_ui_dxPopup_ = __webpack_require__(9);
var external_DevExpress_ui_dxPopup_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_ui_dxPopup_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_previewSelection.js




function rectIntersection(r1, r2) {
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);
}
class _previewSelection_PreviewSelection {
    constructor(_element, _page, _click) {
        this._element = _element;
        this._page = _page;
        this._click = _click;
        this._bodyEvents = {
            move: null,
            up: null
        };
        this.dispose = () => this._dispose && this._dispose();
        this._$element = external_jQuery_["fn"].constructor(this._element);
        var mousemove = event => this._mouseMove(event);
        var mouseup = event => this._mouseUp(event);
        var mousedown = event => this._mouseDown(event);
        this._element.addEventListener('mousemove', mousemove);
        this._element.addEventListener('mouseup', mouseup);
        this._element.addEventListener('mousedown', mousedown);
        this._dispose = () => {
            this._element.removeEventListener('mousemove', mousemove);
            this._element.removeEventListener('mouseup', mouseup);
            this._element.removeEventListener('mousedown', mousedown);
            this._dispose = null;
            this._click = null;
            this._page = null;
            this._element = null;
            mousemove = null;
            mouseup = null;
            mousedown = null;
        };
    }
    _getBodyScrollTop() {
        return document.documentElement && document.documentElement.scrollTop || (document.body && document.body.scrollTop);
    }
    _getBodyScrollLeft() {
        return document.documentElement && document.documentElement.scrollLeft || (document.body && document.body.scrollLeft);
    }
    _updateSelectionContent(event) {
        if (this._startRect.left > event.clientX) {
            this._$selectionContent.css('left', event.clientX);
        }
        else {
            this._$selectionContent.css('right', document.documentElement.clientWidth - event.clientX);
        }
        if (this._startRect.top > event.clientY) {
            this._$selectionContent.css('top', event.clientY);
        }
        else {
            this._$selectionContent.css('bottom', document.documentElement.clientHeight - event.clientY);
        }
        var offset = this._$element.offset();
        var currentRect = {
            left: (parseInt(this._$selectionContent.css('left')) - offset.left + this._getBodyScrollLeft()) / this._$element.width() * 100,
            width: this._$selectionContent.width() / this._$element.width() * 100,
            top: (parseInt(this._$selectionContent.css('top')) - offset.top + this._getBodyScrollTop()) / this._$element.height() * 100,
            height: this._$selectionContent.height() / this._$element.height() * 100
        };
        currentRect['right'] = currentRect.left + currentRect.width;
        currentRect['bottom'] = currentRect.top + currentRect.height;
        var bricks = this._page.bricks();
        for (var i = 0; i < bricks.length; i++) {
            if (!bricks[i].bricks) {
                bricks[i].active(rectIntersection({
                    left: parseFloat(bricks[i].leftP),
                    top: parseFloat(bricks[i].topP),
                    right: parseFloat(bricks[i].leftP) + parseFloat(bricks[i].widthP),
                    bottom: parseFloat(bricks[i].topP) + parseFloat(bricks[i].heightP),
                }, currentRect));
            }
        }
    }
    _mouseMove(event) {
        if (!this._startRect || !this._page.active() || _previewSelection_PreviewSelection.disabled)
            return;
        var leftButtonPressed = event.which === 1;
        if (leftButtonPressed) {
            if (!this._$selectionContainer) {
                if (Math.abs(this._startRect.left - event.clientX) >= 2 || Math.abs(this._startRect.top - event.clientY) >= 2) {
                    _previewSelection_PreviewSelection.started = true;
                    this._$selectionContainer = external_jQuery_["fn"].constructor('<div style="position: fixed; top: 0; bottom: 0; left: 0; right: 0">').appendTo(document.body);
                    this._$selectionContent = external_jQuery_["fn"].constructor('<div>').appendTo(this._$selectionContainer);
                    this._$selectionContent.css(this._startRect);
                    this._$selectionContent.addClass('dxrd-selection-content ui-selectable-helper');
                    if (external_DevExpress_ui_dxPopup_default.a.prototype._zIndexInitValue)
                        this._$selectionContent.css('z-index', external_DevExpress_ui_dxPopup_default.a.prototype._zIndexInitValue() + 100);
                    this._updateSelectionContent(event);
                    this._bodyEvents.move = event => this._mouseMove(event);
                    this._bodyEvents.up = event => this._mouseUp(event);
                    document.body.addEventListener('mousemove', this._bodyEvents.move);
                    document.body.addEventListener('mouseup', this._bodyEvents.up);
                }
            }
            else {
                this._updateSelectionContent(event);
            }
        }
    }
    _mouseUp(event) {
        this._$selectionContainer && this._$selectionContainer.remove();
        this._$selectionContainer = null;
        this._bodyEvents.move && document.body.removeEventListener('mousemove', this._bodyEvents.move);
        this._bodyEvents.up && document.body.removeEventListener('mouseup', this._bodyEvents.up);
        this._startRect = null;
        setTimeout(() => {
            _previewSelection_PreviewSelection.started = false;
        }, 1);
    }
    _mouseDown(event) {
        if (_previewSelection_PreviewSelection.disabled) {
            return;
        }
        this._startRect = {
            left: event.clientX,
            top: event.clientY,
            right: document.documentElement.clientWidth - event.clientX,
            bottom: document.documentElement.clientHeight - event.clientY
        };
        this._click(this._page.pageIndex);
    }
}
_previewSelection_PreviewSelection.started = false;
_previewSelection_PreviewSelection.disabled = false;
external_ko_["bindingHandlers"]['brick-selection-prog'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var values = valueAccessor(), unwrappedValues = external_ko_["unwrap"](values);
        var selection = new _previewSelection_PreviewSelection(element, unwrappedValues.page, unwrappedValues.click);
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, () => {
            selection.dispose();
        });
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/editing/models/imageEditingField.js







class imageEditingField_ImageEditingFieldViewModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(field, pageWidth, pageHeight, zoom, bounds) {
        var _a;
        super();
        this.field = field;
        this.zoom = zoom;
        this.bounds = bounds;
        this.popupTarget = '.dx-designer';
        this.popupOptions = {
            target: this.popupTarget,
            boundary: this.popupTarget,
            container: this.popupTarget
        };
        this.template = 'dxrp-editing-field-image';
        this.active = external_ko_["observable"](false);
        this.shadingEnabled = external_ko_["observable"](true);
        var brickStyle = field.model().brickOptions;
        var style = { rtl: () => brickStyle.rtl };
        new external_DevExpress_Analytics_Utils_["ModelSerializer"]().deserialize(style, JSON.parse(brickStyle.style), brickStyleSerializationsInfo);
        var cssCalculator = new external_DevExpress_Analytics_Internal_["CssCalculator"](style, external_ko_["observable"](!!brickStyle.rtlLayout));
        this._disposables.push(this.alignment = external_ko_["computed"](() => {
            return field.editValue().alignment;
        }), this.sizeMode = external_ko_["computed"](() => {
            return field.editValue().sizeMode;
        }));
        var editor = editingFieldExtensions_EditingFieldExtensions.instance().editor(field.editorName()) || editingFieldExtensions_EditingFieldExtensions.instance().editor('ImageAndSignature');
        var options = editor.options;
        this.shadingEnabled(!!((_a = options.registrationOptions) === null || _a === void 0 ? void 0 : _a.shadingEnabled));
        this.editMode = options.editMode;
        this.containerStyle = () => {
            return external_jQuery_["extend"]({
                height: this.bounds.height * zoom() + 'px',
                width: this.bounds.width * zoom() + 'px',
                zIndex: this.active() ? 10 : 0,
                top: this.bounds.top * 100 / pageHeight + '%',
                left: this.bounds.left * 100 / pageWidth + '%'
            }, cssCalculator.borderCss(), cssCalculator.paddingsCss());
        };
        this.callbacks = external_jQuery_["extend"]({
            onDraw: (s) => this.onDraw(s),
            onFocusIn: (s) => this.onFocusIn(s),
            onFocusOut: (s) => this.onBlur(s)
        }, options.callbacks);
    }
    getImage() {
        return this.field.editValue().image;
    }
    getImageType() {
        return this.field.editValue().imageType;
    }
    getPictureEditorOptions() {
        return {
            image: this.getImage(),
            imageType: this.getImageType(),
            imageMode: external_ko_["observable"](this.editMode),
            alignment: this.alignment,
            sizeMode: this.sizeMode,
            callbacks: this.callbacks,
            active: this.active,
            zoom: this.zoom,
            popupOptions: this.popupOptions,
            shadingEnabled: this.shadingEnabled
        };
    }
    onKeyDown(_, e) {
        if (e.key == external_DevExpress_Analytics_Internal_["KeyboardEnum"].Space) {
        }
        else {
        }
    }
    onFocusIn(s) {
        _previewSelection_PreviewSelection.disabled = true;
    }
    onDraw(s) {
        _previewSelection_PreviewSelection.disabled = true;
    }
    onBlur(s) {
        var options = s.getCurrentOptions();
        var result = external_jQuery_["extend"]({}, this.field.editValue(), options);
        if (!!result.imageType) {
            result.imageType = result.imageType === 'svg' ? 'svg' : imageEditingField_ImageEditingFieldViewModel.__DefaultImageType;
        }
        var currentVal = this.field.editValue();
        var isNotEqual = Object.keys(currentVal).some(x => {
            if (!result[x] && !currentVal[x])
                return false;
            return result[x] !== currentVal[x];
        });
        if (isNotEqual)
            this.field.editValue(result);
        _previewSelection_PreviewSelection.disabled = false;
    }
}
imageEditingField_ImageEditingFieldViewModel.__DefaultImageType = 'img';

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/editing/models/popupImageEditingField.js



class popupImageEditingField_PopupImageEditingFieldViewModel extends imageEditingField_ImageEditingFieldViewModel {
    constructor() {
        super(...arguments);
        this.parentPopupClass = 'dxrp-editing-field-popup-container';
        this._popupInitializedClass = 'dxrp-editing-field-popup-container-initialized';
        this._getPopupContainer = (element) => external_jQuery_["fn"].constructor(element).closest('.' + this.parentPopupClass);
        this._getPainterModel = (element) => {
            var $painter = this._getPopupContainer(element).find('.dx-painter');
            return $painter.length ? external_ko_["dataFor"]($painter[0]) : null;
        };
        this._getPictureEditorModel = (element) => {
            var $popupEditing = external_jQuery_["fn"].constructor(element).find('.dx-picture-editing');
            return $popupEditing.length ? external_ko_["dataFor"]($popupEditing[0]) : null;
        };
        this._resetPictureEditor = (pictureEditorModel) => {
            pictureEditorModel.reset(this.painterData.imageSource, this.painterData.alignment, this.painterData.sizeMode, this.painterData.imageType);
            this._resetPainter(pictureEditorModel.painter);
        };
        this._resetPainter = (painter) => {
            painter.imagePainter.format(painter.imageFormatByType(this.getImageType()));
            painter.imagePainter.sizeMode(this.sizeMode());
            painter.imagePainter.alignment(this.alignment());
            painter.imagePainter.image(this.getImage());
            painter.refresh();
        };
        this.template = 'dxrp-popup-editing-field-image';
    }
    isPopupActive(element) {
        return this.active() && this._getPopupContainer(element).hasClass(this._popupInitializedClass);
    }
    getPainter() {
        if (this.painterData == null) {
            this.painterData = {
                imageSource: this.getImage(),
                imageType: this.getImageType(),
                alignment: this.alignment(),
                sizeMode: this.sizeMode(),
                zoom: this.zoom,
                canDraw: external_ko_["observable"](false)
            };
        }
        return this.painterData;
    }
    getPopupData() {
        var _showContent = external_ko_["observable"](false);
        this.popupData = {
            contentData: this,
            paintData: this.painterData,
            contentTemplate: 'dxrp-editing-field-image-editor',
            isVisible: (element) => this.isPopupActive(element),
            getContainer: () => this.popupTarget,
            getPositionTarget: (element) => this._getPopupContainer(element),
            shading: this.shadingEnabled,
            showContent: _showContent,
            onShown: (e) => {
                _showContent(true);
            },
            onHiding: (e) => {
                this._getPictureEditorModel(e.component._$popupContent[0]).painter.signaturePainter.resetLastPosition();
                this._resetPainter(this._getPainterModel(e.element));
                document.activeElement['blur']();
                this.active(false);
            },
            onContentReady: (e) => {
                this._resetPainter(this._getPainterModel(e.element));
                e.component && e.component.registerKeyHandler('tab', (_) => {
                    this.popupData.onHiding(e);
                });
            },
            renderedHandler: (element, model) => {
                this._resetPictureEditor(this._getPictureEditorModel(element));
            }
        };
        return this.popupData;
    }
    activateEditor(viewModel, e) {
        if (!this.field.readOnly()) {
            var _parentPopup = this._getPopupContainer(e.target);
            if (!_parentPopup.hasClass(this._popupInitializedClass))
                _parentPopup.addClass(this._popupInitializedClass);
            this.active(true);
        }
    }
}
var DefaultImageEditingFieldViewModel = popupImageEditingField_PopupImageEditingFieldViewModel;

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/editing/editingField.js









var ImageAlignment;
(function (ImageAlignment) {
    ImageAlignment[ImageAlignment["TopLeft"] = 1] = "TopLeft";
    ImageAlignment[ImageAlignment["TopCenter"] = 2] = "TopCenter";
    ImageAlignment[ImageAlignment["TopRight"] = 3] = "TopRight";
    ImageAlignment[ImageAlignment["MiddleLeft"] = 4] = "MiddleLeft";
    ImageAlignment[ImageAlignment["MiddleCenter"] = 5] = "MiddleCenter";
    ImageAlignment[ImageAlignment["MiddleRight"] = 6] = "MiddleRight";
    ImageAlignment[ImageAlignment["BottomLeft"] = 7] = "BottomLeft";
    ImageAlignment[ImageAlignment["BottomCenter"] = 8] = "BottomCenter";
    ImageAlignment[ImageAlignment["BottomRight"] = 9] = "BottomRight";
})(ImageAlignment || (ImageAlignment = {}));
var ImageSizeMode;
(function (ImageSizeMode) {
    ImageSizeMode[ImageSizeMode["Normal"] = 0] = "Normal";
    ImageSizeMode[ImageSizeMode["StretchImage"] = 1] = "StretchImage";
    ImageSizeMode[ImageSizeMode["ZoomImage"] = 4] = "ZoomImage";
    ImageSizeMode[ImageSizeMode["Squeeze"] = 5] = "Squeeze";
    ImageSizeMode[ImageSizeMode["Cover"] = 7] = "Cover";
})(ImageSizeMode || (ImageSizeMode = {}));
var sizing = {
    propertyName: 'sizing', modelName: '@Sizing', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), displayName: 'Sizing', localizationId: 'DevExpress.XtraReports.UI.XRPictureBox.Sizing', defaultVal: 'Normal', from: external_DevExpress_Analytics_Utils_["fromEnum"], valuesArray: [
        { value: 'Normal', displayValue: 'Normal', localizationId: 'DevExpress.XtraPrinting.ImageSizeMode.Normal' },
        { value: 'StretchImage', displayValue: 'Stretch Image', localizationId: 'DevExpress.XtraPrinting.ImageSizeMode.StretchImage' },
        { value: 'AutoSize', displayValue: 'Auto-Size', localizationId: 'DevExpress.XtraPrinting.ImageSizeMode.AutoSize' },
        { value: 'CenterImage', displayValue: 'Center Image', localizationId: 'DevExpress.XtraPrinting.ImageSizeMode.CenterImage' },
        { value: 'ZoomImage', displayValue: 'Zoom Image', localizationId: 'DevExpress.XtraPrinting.ImageSizeMode.ZoomImage' },
        { value: 'Squeeze', displayValue: 'Squeeze', localizationId: 'DevExpress.XtraPrinting.ImageSizeMode.Squeeze' },
        { value: 'Tile', displayValue: 'Tile', localizationId: 'DevExpress.XtraPrinting.ImageSizeMode.Tile' },
        { value: 'Cover', displayValue: 'Cover', localizationId: 'DevExpress.XtraPrinting.ImageSizeMode.Cover' }
    ]
};
var imageAlignment = {
    propertyName: 'imageAlignment', modelName: '@ImageAlignment', editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('combobox'), displayName: 'Alignment', localizationId: 'DevExpress.XtraReports.UI.XRPictureBox.Alignment', defaultVal: 'Default', from: external_DevExpress_Analytics_Utils_["fromEnum"], valuesArray: [
        { value: 'Default', displayValue: 'Default', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.Default' },
        { value: 'TopLeft', displayValue: 'Top Left', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.TopLeft' },
        { value: 'TopCenter', displayValue: 'Top Center', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.TopCenter' },
        { value: 'TopRight', displayValue: 'Top Right', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.TopRight' },
        { value: 'MiddleLeft', displayValue: 'Middle Left', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.MiddleLeft' },
        { value: 'MiddleCenter', displayValue: 'Middle Center', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.MiddleCenter' },
        { value: 'MiddleRight', displayValue: 'Middle Right', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.MiddleRight' },
        { value: 'BottomLeft', displayValue: 'Bottom Left', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.BottomLeft' },
        { value: 'BottomCenter', displayValue: 'Bottom Center', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.BottomCenter' },
        { value: 'BottomRight', displayValue: 'Bottom Right', localizationId: 'DevExpress.XtraPrinting.ImageAlignment.BottomRight' }
    ]
};
class editingField_EditingField extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(model, index, htmlProvider) {
        super();
        this._needToUseHtml = false;
        this._index = -1;
        this._model = model;
        this._index = index;
        this._readOnly = external_ko_["observable"](model.readOnly);
        this._disposables.push(this.readOnly = external_ko_["pureComputed"]({
            read: () => {
                return this._readOnly() || !EditablePreviewEnabled();
            },
            write: (newVal) => {
                this._readOnly(newVal);
            }
        }));
        this.modelValue = external_ko_["observable"](model.editValue);
        this.editValue = external_ko_["computed"]({
            read: () => {
                return this.modelValue();
            },
            write: (newVal) => {
                var oldVal = this.modelValue();
                this.modelValue(newVal);
                var val = this.editingFieldChanged(this, oldVal, newVal);
                val = val == null ? newVal : val;
                if (val !== oldVal) {
                    this._refreshHtmlValue(val);
                }
                if (val !== newVal) {
                    this.modelValue(val);
                    this._editorValue(val);
                }
            }
        });
        this._editorValue = external_ko_["observable"](model.editValue);
        this.htmlValue = external_ko_["observable"](model.htmlValue);
        this._htmlProvider = htmlProvider;
    }
    _refreshHtmlValue(newValue) {
        this.htmlValue(null);
        if (this._needToUseHtml) {
            this._htmlProvider.getEditingFieldHtml(newValue, this._index).done((html) => {
                this.htmlValue(html);
            });
        }
    }
    editingFieldChanged(field, oldVal, newVal) {
        return newVal;
    }
    editorName() { return this._model.editorName; }
    id() { return this._model.id; }
    groupID() { return this._model.groupID; }
    pageIndex() { return this._model.pageIndex; }
    type() { return this._model.type; }
    model() {
        return external_jQuery_["extend"]({}, this._model, {
            readOnly: this.readOnly.peek(),
            editValue: this.editValue.peek(),
            htmlValue: this.htmlValue.peek(),
        });
    }
    createViewModel(zoom, pageWidth, pageHeight, editingFieldsProvider, bounds) {
        if (this._model.type === 'check') {
            return new checkEditingField_CheckEditingFieldViewModel(this, pageWidth, pageHeight, zoom, editingFieldsProvider);
        }
        else if (this._model.type === 'text') {
            this._needToUseHtml = bounds.height !== this._model.bounds.height || !!this._model.brickOptions.formatString;
            if (!this._needToUseHtml) {
                this.htmlValue(null);
            }
            return new textEditingField_TextEditingFieldViewModel(this, pageWidth, pageHeight, zoom, bounds);
        }
        else if (this._model.type === 'charactercomb') {
            return new characterCombEditingField_CharacterCombEditingFieldViewModel(this, pageWidth, pageHeight, zoom, bounds);
        }
        else if (this._model.type === 'image') {
            return new DefaultImageEditingFieldViewModel(this, pageWidth, pageHeight, zoom, bounds);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/csvExportOptionsPreview.js


class csvExportOptionsPreview_CsvExportOptionsPreview extends csvExportOptions_CsvExportOptions {
    static from(model, serializer) {
        return new csvExportOptionsPreview_CsvExportOptionsPreview(model || {}, serializer);
    }
    isPropertyVisible(name) {
        return name !== useCustomSeparator.propertyName;
    }
    isPropertyDisabled(name) {
        return false;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/metadata.js



var rtfExportModeMergedPreview = external_jQuery_["extend"]({}, rtfExportMode, {
    valuesArray: getExportModeValues('Rtf', true, true)
});
var docxExportModeMergedPreview = external_jQuery_["extend"]({}, docxExportMode, {
    valuesArray: getExportModeValues('Docx', true, true)
});
function excludeModesForMergedDocuments(val) {
    return external_ko_["observable"]('SingleFilePageByPage');
}
function excludeDifferentFilesMode(val) {
    return external_ko_["observable"](val === 'DifferentFiles' ? 'SingleFile' : val);
}
var htmlExportModePreviewBase = {
    propertyName: htmlExportMode.propertyName, modelName: htmlExportMode.modelName, defaultVal: htmlExportMode.defaultVal,
    editor: htmlExportMode.editor, displayName: htmlExportMode.displayName, localizationId: htmlExportMode.localizationId
};
var htmlExportModePreview = external_jQuery_["extend"]({}, htmlExportModePreviewBase, {
    from: excludeDifferentFilesMode,
    valuesArray: getExportModeValues('Html', true)
});
var htmlExportModeMergedPreview = external_jQuery_["extend"]({}, htmlExportModePreviewBase, {
    valuesArray: getExportModeValues('Html', true, true)
});
var xlsExportModePreviewBase = {
    propertyName: xlsExportMode.propertyName, modelName: xlsExportMode.modelName, defaultVal: xlsExportMode.defaultVal,
    editor: xlsExportMode.editor, displayName: xlsExportMode.displayName, localizationId: xlsExportMode.localizationId
};
var xlsExportModePreview = external_jQuery_["extend"]({}, xlsExportModePreviewBase, {
    from: excludeDifferentFilesMode,
    valuesArray: getExportModeValues('Xls', true)
});
var xlsExportModeMergedPreview = external_jQuery_["extend"]({}, xlsExportModePreviewBase, {
    valuesArray: getExportModeValues('Xls', true, true)
});
var imageExportModePreviewBase = {
    propertyName: imageExportMode.propertyName, modelName: imageExportMode.modelName, defaultVal: imageExportMode.defaultVal,
    editor: imageExportMode.editor, displayName: imageExportMode.displayName, localizationId: imageExportMode.localizationId
};
var imageExportModePreview = external_jQuery_["extend"]({}, imageExportModePreviewBase, {
    from: excludeDifferentFilesMode,
    valuesArray: getExportModeValues('Image', true)
});
var imageExportModeMergedPreview = external_jQuery_["extend"]({}, imageExportModePreviewBase, {
    valuesArray: getExportModeValues('Image', true, true)
});
var xlsxExportModePreviewBase = {
    propertyName: xlsxExportMode.propertyName, modelName: xlsxExportMode.modelName, defaultVal: xlsxExportMode.defaultVal,
    editor: xlsxExportMode.editor, displayName: xlsxExportMode.displayName, localizationId: xlsxExportMode.localizationId
};
var xlsxExportModePreview = external_jQuery_["extend"]({}, xlsxExportModePreviewBase, {
    from: excludeDifferentFilesMode,
    valuesArray: getExportModeValues('Xlsx', true)
});
var xlsxExportModeMergedPreview = external_jQuery_["extend"]({}, xlsxExportModePreviewBase, {
    valuesArray: getExportModeValues('Xlsx', true, true)
});

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/htmlExportOptionsPreview.js



var htmlExportOptionsSerializationInfoPreview = [].concat(htmlExportOptionsSerializationInfoBase);
class htmlExportOptionsPreview_HtmlExportOptionsPreview extends htmlExportOptions_HtmlExportOptions {
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    getInfo() {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(htmlExportOptionsSerializationInfoPreview);
    }
    _getVariableInfo() {
        return [htmlExportModePreview];
    }
}
class htmlExportOptionsPreview_HtmlExportOptionsMergedPreview extends htmlExportOptionsPreview_HtmlExportOptionsPreview {
    _getVariableInfo() {
        return [htmlExportModeMergedPreview];
    }
    isPropertyDisabled(name) {
        return super.isPropertyDisabled(name) || name === htmlExportModeMergedPreview.propertyName;
    }
    constructor(model, serializer) {
        super(model, serializer);
        this.htmlExportMode(excludeModesForMergedDocuments(this.htmlExportMode())());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/imageExportOptionsPreview.js



var imageExportOptionsSerializationInfoPreview = [].concat(imageExportOptionsSerializationInfoBase);
class imageExportOptionsPreview_ImageExportOptionsPreview extends imageExportOptions_ImageExportOptions {
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    getInfo() {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(imageExportOptionsSerializationInfoPreview);
    }
    _getVariableInfo() {
        return [imageExportModePreview];
    }
}
class imageExportOptionsPreview_ImageExportOptionsMergedPreview extends imageExportOptionsPreview_ImageExportOptionsPreview {
    _getVariableInfo() {
        return [imageExportModeMergedPreview];
    }
    isPropertyDisabled(name) {
        return super.isPropertyDisabled(name) || name === imageExportModeMergedPreview.propertyName;
    }
    constructor(model, serializer) {
        super(model, serializer);
        this.imageExportMode(excludeModesForMergedDocuments(this.imageExportMode())());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/mhtExportOptionsPreview.js



var mhtExportOptionsSerializationInfoPreview = [].concat(mhtExportOptionsSerializationInfoBase);
class mhtExportOptionsPreview_MhtExportOptionsPreview extends mhtExportOptions_MhtExportOptions {
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    getInfo() {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(mhtExportOptionsSerializationInfoPreview);
    }
    _getVariableInfo() {
        return [htmlExportModePreview];
    }
}
class mhtExportOptionsPreview_MhtExportOptionsMergedPreview extends mhtExportOptionsPreview_MhtExportOptionsPreview {
    _getVariableInfo() {
        return [htmlExportModeMergedPreview];
    }
    isPropertyDisabled(name) {
        return super.isPropertyDisabled(name) || name === htmlExportModeMergedPreview.propertyName;
    }
    constructor(model, serializer) {
        super(model, serializer);
        this.htmlExportMode(excludeModesForMergedDocuments(this.htmlExportMode())());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/rtfExportOptionsPreview.js




var rtfExportOptionsSerializationInfoPreview = [].concat(rtfExportOptionsSerializationInfoBase);
class rtfExportOptionsPreview_RtfExportOptionsPreview extends rtfExportOptions_RtfExportOptions {
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    getInfo() {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(rtfExportOptionsSerializationInfoPreview);
    }
    _getVariableInfo() {
        return [rtfExportMode];
    }
}
class rtfExportOptionsPreview_RtfExportOptionsMergedPreview extends rtfExportOptionsPreview_RtfExportOptionsPreview {
    _getVariableInfo() {
        return [rtfExportModeMergedPreview];
    }
    isPropertyDisabled(name) {
        return super.isPropertyDisabled(name) || name === rtfExportModeMergedPreview.propertyName;
    }
    constructor(model, serializer) {
        super(model, serializer);
        this.rtfExportMode(excludeModesForMergedDocuments(this.rtfExportMode())());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/xlsExportOptionsPreview.js



var xlsExportOptionsSerializationInfoPreview = [].concat(xlsExportOptionsSerializationInfoBase, xlsExportOptionsSerializationInfoCommon);
class xlsExportOptionsPreview_XlsExportOptionsPreview extends xlsExportOptions_XlsExportOptions {
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    getInfo() {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(xlsExportOptionsSerializationInfoPreview);
    }
    _getVariableInfo() {
        return [xlsExportModePreview];
    }
}
class xlsExportOptionsPreview_XlsExportOptionsMergedPreview extends xlsExportOptionsPreview_XlsExportOptionsPreview {
    _getVariableInfo() {
        return [xlsExportModeMergedPreview];
    }
    isPropertyDisabled(name) {
        return super.isPropertyDisabled(name) || name === xlsExportModeMergedPreview.propertyName;
    }
    constructor(model, serializer) {
        super(model, serializer);
        this.xlsExportMode(excludeModesForMergedDocuments(this.xlsExportMode())());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/xlsxExportOptionsPreview.js



var xlsxExportOptionsSerializationInfoPreview = [].concat(xlsExportOptionsSerializationInfoCommon);
class xlsxExportOptionsPreview_XlsxExportOptionsPreview extends xlsxExportOptions_XlsxExportOptions {
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    getInfo() {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(xlsxExportOptionsSerializationInfoPreview);
    }
    _getVariableInfo() {
        return [xlsxExportModePreview];
    }
}
class xlsxExportOptionsPreview_XlsxExportOptionsMergedPreview extends xlsxExportOptionsPreview_XlsxExportOptionsPreview {
    _getVariableInfo() {
        return [xlsxExportModeMergedPreview];
    }
    isPropertyDisabled(name) {
        return super.isPropertyDisabled(name) || name === xlsxExportModeMergedPreview.propertyName;
    }
    constructor(model, serializer) {
        super(model, serializer);
        this.xlsxExportMode(excludeModesForMergedDocuments(this.xlsxExportMode())());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/docxExportOptionsPreview.js





var docxExportOptionsSerializationInfoPreview = [
    pageRange,
    docxTableLayout,
    keepRowHeight,
    rasterizeImages,
    rasterizationResolution,
    exportPageBreaks,
    exportWatermarks,
    docxDocumentOptions,
];
class docxExportOptionsPreview_DocxExportOptionsPreview extends docxExportOptions_DocxExportOptions {
    static toJson(value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    }
    getInfo() {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(docxExportOptionsSerializationInfoPreview);
    }
    _getVariableInfo() {
        return [docxExportMode];
    }
}
class docxExportOptionsPreview_DocxExportOptionsMergedPreview extends docxExportOptionsPreview_DocxExportOptionsPreview {
    _getVariableInfo() {
        return [docxExportModeMergedPreview];
    }
    isPropertyDisabled(name) {
        return super.isPropertyDisabled(name) || name === docxExportModeMergedPreview.propertyName;
    }
    constructor(model, serializer) {
        super(model, serializer);
        this.docxExportMode(excludeModesForMergedDocuments(this.docxExportMode())());
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/exportOptionsPreview.js












class exportOptionsPreview_ExportOptionsPreview extends exportOptions_ExportOptions {
    _generateFromFunction(exportType) {
        return (model, serializer) => {
            return new exportType(model || {}, serializer);
        };
    }
    _generateInfo() {
        return [
            { propertyName: 'csv', modelName: 'Csv', displayName: 'CSV Export Options', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions', from: csvExportOptionsPreview_CsvExportOptionsPreview.from, toJsonObject: csvExportOptionsPreview_CsvExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'html', modelName: 'Html', displayName: 'HTML Export Options', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptions', from: this._generateFromFunction(htmlExportOptionsPreview_HtmlExportOptionsPreview), toJsonObject: htmlExportOptionsPreview_HtmlExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'image', modelName: 'Image', displayName: 'Image Export Options', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions', from: this._generateFromFunction(imageExportOptionsPreview_ImageExportOptionsPreview), toJsonObject: imageExportOptionsPreview_ImageExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'mht', modelName: 'Mht', displayName: 'MHT Export Options', localizationId: 'DevExpress.XtraPrinting.MhtExportOptions', from: this._generateFromFunction(mhtExportOptionsPreview_MhtExportOptionsPreview), toJsonObject: mhtExportOptionsPreview_MhtExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'pdf', modelName: 'Pdf', displayName: 'PDF Export Options', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions', from: pdfExportOptions_PdfExportOptions.from, toJsonObject: pdfExportOptions_PdfExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'rtf', modelName: 'Rtf', displayName: 'RTF Export Options', localizationId: 'DevExpress.XtraPrinting.RtfExportOptions', from: this._generateFromFunction(rtfExportOptionsPreview_RtfExportOptionsPreview), toJsonObject: rtfExportOptionsPreview_RtfExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'textExportOptions', modelName: 'Text', displayName: 'Text Export Options', localizationId: 'DevExpress.XtraPrinting.TextExportOptions', from: textExportOptions_TextExportOptions.from, toJsonObject: textExportOptions_TextExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'xls', modelName: 'Xls', displayName: 'XLS Export Options', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions', from: this._generateFromFunction(xlsExportOptionsPreview_XlsExportOptionsPreview), toJsonObject: xlsExportOptionsPreview_XlsExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'xlsx', modelName: 'Xlsx', displayName: 'XLSx Export Options', localizationId: 'DevExpress.XtraPrinting.XlsxExportOptions', from: this._generateFromFunction(xlsxExportOptionsPreview_XlsxExportOptionsPreview), toJsonObject: xlsxExportOptionsPreview_XlsxExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'docx', modelName: 'Docx', displayName: 'Docx Export Options', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions', from: this._generateFromFunction(docxExportOptionsPreview_DocxExportOptionsPreview), toJsonObject: docxExportOptionsPreview_DocxExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') }
        ];
    }
    hasSensitiveData() {
        return (this.xls && this.xls.hasSensitiveData())
            || (this.xlsx && this.xlsx.hasSensitiveData())
            || (this.pdf && this.pdf.hasSensitiveData());
    }
    getInfo() {
        return this._generateInfo();
    }
}
class exportOptionsPreview_ExportOptionsMergedPreview extends exportOptionsPreview_ExportOptionsPreview {
    _generateInfo() {
        return [
            { propertyName: 'html', modelName: 'Html', displayName: 'HTML Export Options', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptions', from: this._generateFromFunction(htmlExportOptionsPreview_HtmlExportOptionsMergedPreview), toJsonObject: htmlExportOptionsPreview_HtmlExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'image', modelName: 'Image', displayName: 'Image Export Options', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions', from: this._generateFromFunction(imageExportOptionsPreview_ImageExportOptionsMergedPreview), toJsonObject: imageExportOptionsPreview_ImageExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'mht', modelName: 'Mht', displayName: 'MHT Export Options', localizationId: 'DevExpress.XtraPrinting.MhtExportOptions', from: this._generateFromFunction(mhtExportOptionsPreview_MhtExportOptionsMergedPreview), toJsonObject: mhtExportOptionsPreview_MhtExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'pdf', modelName: 'Pdf', displayName: 'PDF Export Options', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions', from: pdfExportOptions_PdfExportOptions.from, toJsonObject: pdfExportOptions_PdfExportOptions.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'rtf', modelName: 'Rtf', displayName: 'RTF Export Options', localizationId: 'DevExpress.XtraPrinting.RtfExportOptions', from: this._generateFromFunction(rtfExportOptionsPreview_RtfExportOptionsMergedPreview), toJsonObject: rtfExportOptionsPreview_RtfExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'xls', modelName: 'Xls', displayName: 'XLS Export Options', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions', from: this._generateFromFunction(xlsExportOptionsPreview_XlsExportOptionsMergedPreview), toJsonObject: xlsExportOptionsPreview_XlsExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'xlsx', modelName: 'Xlsx', displayName: 'XLSx Export Options', localizationId: 'DevExpress.XtraPrinting.XlsxExportOptions', from: this._generateFromFunction(xlsxExportOptionsPreview_XlsxExportOptionsMergedPreview), toJsonObject: xlsxExportOptionsPreview_XlsxExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') },
            { propertyName: 'docx', modelName: 'Docx', displayName: 'Docx Export Options', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions', from: this._generateFromFunction(docxExportOptionsPreview_DocxExportOptionsMergedPreview), toJsonObject: docxExportOptionsPreview_DocxExportOptionsPreview.toJson, editor: external_DevExpress_Analytics_Widgets_["editorTemplates"].getEditor('objecteditor') }
        ];
    }
}

// EXTERNAL MODULE: external "DevExpress.utils.browser"
var external_DevExpress_utils_browser_ = __webpack_require__(7);
var external_DevExpress_utils_browser_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_utils_browser_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_previewRequestWrapper.js



var ColumnSortOrder;
(function (ColumnSortOrder) {
    ColumnSortOrder[ColumnSortOrder["None"] = 0] = "None";
    ColumnSortOrder[ColumnSortOrder["Ascending"] = 1] = "Ascending";
    ColumnSortOrder[ColumnSortOrder["Descending"] = 2] = "Descending";
})(ColumnSortOrder || (ColumnSortOrder = {}));
class _previewRequestWrapper_PreviewRequestWrapper {
    constructor(handlers, _callbacks) {
        this._callbacks = _callbacks;
        Object.keys(handlers || {}).forEach((name) => {
            this[name] = handlers[name];
        });
    }
    static getProcessErrorCallback(reportPreview, defaultErrorMessage, showMessage = true) {
        return function (message, jqXHR, textStatus) {
            if (jqXHR) {
                var statusCodeText = Object(external_DevExpress_Analytics_Utils_["getLocalization"])(jqXHR.statusText, 'ASPxReportsStringId.HttpResponseStatusCode_' + jqXHR.status);
                if (defaultErrorMessage) {
                    var stringFormat = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('{0} ({1} {2})', 'ASPxReportsStringId.Error_WithStatus');
                    var messageWithStatusCode = Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(stringFormat, defaultErrorMessage, jqXHR.status, statusCodeText);
                }
                else {
                    messageWithStatusCode = statusCodeText;
                }
            }
            if (!reportPreview) {
                var error = Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(jqXHR);
                MessageHandler().processError(error || messageWithStatusCode || defaultErrorMessage || 'Internal Server Error', showMessage);
            }
            else {
                reportPreview._processError(messageWithStatusCode || defaultErrorMessage, jqXHR, showMessage);
            }
        };
    }
    static getPage(url, ignoreError) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(url, undefined, undefined, _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(), ignoreError, { type: 'GET' });
    }
    initialize(reportPreview, parametersModel, searchModel) {
        this._reportPreview = reportPreview;
        this._parametersModel = parametersModel;
        this._searchModel = searchModel;
    }
    findTextRequest(text, ignore) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'findText', encodeURIComponent(JSON.stringify({
            text: text,
            documentId: this._reportPreview.documentId,
            matchCase: this._searchModel.matchCase(),
            wholeWord: this._searchModel.matchWholeWord(),
            searchUp: this._searchModel.searchUp()
        })), _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('An error occurred during search', 'ASPxReportsStringId.WebDocumentViewer_SearchError')), ignore);
    }
    stopBuild(id) {
        Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'stopBuild', encodeURIComponent(id), undefined, () => true);
    }
    sendCloseRequest(documentId, reportId) {
        Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'close', encodeURIComponent(JSON.stringify({
            reportId: reportId,
            documentId: documentId
        })), undefined, () => true);
    }
    startBuildRequest(shouldIgnoreError) {
        var parameters = this._parametersModel.serializeParameters();
        this._callbacks && this._callbacks.parametersSubmitted && this._callbacks.parametersSubmitted(this._parametersModel, parameters);
        return Object(external_DevExpress_Analytics_Internal_["ajax"])({
            uri: HandlerUri(),
            action: 'startBuild',
            arg: encodeURIComponent(JSON.stringify({
                reportId: this._reportPreview.reportId,
                reportUrl: this._reportPreview.reportUrl,
                drillDownKeys: this._reportPreview['_drillDownState'],
                sortingState: this._reportPreview['_sortingState'],
                timeZoneOffset: 0 - new Date().getTimezoneOffset(),
                parameters: parameters
            })),
            ignoreError: shouldIgnoreError,
            isError: (data) => !!data.error || !!(data.result && data.result.faultMessage),
            processErrorCallback: _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cannot create a document for the current report', 'ASPxReportsStringId.WebDocumentViewer_DocumentCreationError'))
        });
    }
    getBuildStatusRequest(documentId, shouldIgnoreError) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])({
            uri: HandlerUri(),
            action: 'getBuildStatus',
            arg: encodeURIComponent(JSON.stringify({
                documentId: documentId,
                timeOut: Math.max(5000, TimeOut())
            })),
            processErrorCallback: _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Error obtaining a build status', 'ASPxReportsStringId.WebDocumentViewer_GetBuildStatusError')),
            ignoreError: shouldIgnoreError,
            isError: (data) => !!data.error || !!(data.result && data.result.faultMessage) || !data.success,
            getErrorMessage: this._reportPreview._getErrorMessage
        });
    }
    getDocumentData(documentId, shouldIgnoreError) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'getDocumentData', encodeURIComponent(documentId), _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cannot obtain additional document data for the current document', 'ASPxReportsStringId.WebDocumentViewer_GetDocumentDataError')), shouldIgnoreError);
    }
    customDocumentOperation(documentId, serializedExportOptions, editindFields, customData, hideMessageFromUser) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'documentOperation', encodeURIComponent(JSON.stringify({
            documentId: documentId,
            customData: customData,
            exportOptions: serializedExportOptions,
            editingFieldValues: editindFields
        })), _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The requested document operation cannot be performed.', 'ASPxReportsStringId.WebDocumentViewer_CustomDocumentOperationsDenied_Error'), !hideMessageFromUser));
    }
    openReport(reportName) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'openReport', encodeURIComponent(reportName), _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Could not open report', 'ASPxReportsStringId.WebDocumentViewer_OpenReportError') + " '" + reportName + "'"));
    }
    drillThrough(customData) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'drillThrough', encodeURIComponent(JSON.stringify({
            reportId: this._reportPreview.reportId,
            reportUrl: this._reportPreview.reportUrl,
            documentId: this._reportPreview.documentId,
            parameters: this._parametersModel.serializeParameters(),
            editingFields: this._reportPreview.editingFieldsProvider().map(field => field.model()),
            customData: customData
        })), _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Drill through operation failed', 'ASPxReportsStringId.WebDocumentViewer_DrillThroughError')));
    }
    getStartExportOperation(arg, shouldIgnoreError) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'startExport', arg, _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('An error occurred during the export', 'ASPxReportsStringId.WebDocumentViewer_ExportError')), shouldIgnoreError);
    }
    cancelExportRequest(operationId, shouldIgnoreError) {
        var arg = encodeURIComponent(JSON.stringify({
            id: operationId
        }));
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'cancelExport', arg, _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('An error occurred during the export', 'ASPxReportsStringId.WebDocumentViewer_ExportError')), shouldIgnoreError);
    }
    getExportStatusRequest(operationId) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])({
            uri: HandlerUri(),
            action: 'getExportStatus',
            arg: encodeURIComponent(JSON.stringify({
                id: operationId,
                timeOut: Math.max(5000, TimeOut())
            })),
            processErrorCallback: _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Error obtaining an export status', 'ASPxReportsStringId.WebDocumentViewer_GetExportStatusError')),
            isError: (data) => !!data.error || !!(data.result && data.result.faultMessage) || !data.success,
            getErrorMessage: this._reportPreview._getErrorMessage
        });
    }
    getEditingFieldHtml(value, editingFieldIndex) {
        return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'getEditingFieldHtmlValue', encodeURIComponent(JSON.stringify({
            documentId: this._reportPreview.documentId,
            value: value,
            editingFieldIndex: editingFieldIndex
        })));
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_utils.js


function getCurrentResolution(zoom) {
    return Math.floor((zoom || 1) * previewDefaultResolution());
}
function getImageBase64(url) {
    var deferred = external_jQuery_["Deferred"]();
    var background = new Image();
    background.src = url;
    background.crossOrigin = 'anonymous';
    background.onload = () => {
        var canvas = document.createElement('canvas');
        canvas.width = background.width;
        canvas.height = background.height;
        canvas.getContext('2d').drawImage(background, 0, 0);
        try {
            deferred.resolve(canvas.toDataURL());
        }
        catch (e) {
            deferred.reject(e);
        }
    };
    return deferred.promise();
}
function getEnumValues(enumType) {
    return Object.keys(enumType).filter(key => !isNaN(Number(enumType[key])));
}
function safelyRunWindowOpen(url, target = '_blank') {
    var newWindow = window.open(url, target);
    target === '_blank' && newWindow && (newWindow.opener = newWindow);
    return newWindow;
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_exportHandler.js










class ExportResultRequestData {
    constructor() {
        this.RequestUrl = '';
        this.FormData = {};
        this.QueryParameters = {};
    }
}
class _exportHandler_ExportHandler extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(exportSetting, preview) {
        super();
        this.preview = preview;
        this.exportActionUri = external_ko_["observable"](null);
        this.exportFormData = external_ko_["observable"]([]);
        this.reportDisplayName = external_ko_["observable"](null);
        this.popupVisible = external_ko_["observable"](false);
        this.popupWidth = external_ko_["observable"](510);
        this.popupHeight = external_ko_["observable"](260);
        this.exportingFrameName = 'dxrd-exporting-frame' + generateGuid();
        this.popupButtons = [
            {
                toolbar: 'bottom', location: 'after', widget: 'dxButton',
                options: {
                    text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Ok', external_DevExpress_Analytics_Internal_["StringId"].DataAccessBtnOK), type: 'default', stylingMode: 'contained',
                    onClick: () => this.popupVisible(false)
                }
            }
        ];
        this.printingLinkCallback = () => { };
        this.printingTextPrefix = external_ko_["observable"]('');
        this.printingTextPostfix = external_ko_["observable"]('');
        this.getPopupTitle = () => this.reportDisplayName() || '';
        this._exportResultRequestData = new ExportResultRequestData();
        this._showPrintNotificationDialog = true;
        this._useSameTabExport = true;
        this._useAsynchronousExport = true;
        this._workerTicker = null;
        this._workerFunctionBlobUrl = null;
        this._workerTickerFunction = function () {
            var started, interval;
            self.onmessage = function (e) {
                if (e.data === 'stop') {
                    clearInterval(interval);
                    return;
                }
                if (started)
                    return;
                interval = setInterval(() => {
                    postMessage.apply(self, ['tick']);
                }, 10);
                started = true;
            };
        };
        this._window = null;
        this._timeouts = [];
        if (exportSetting) {
            if (exportSetting.useAsynchronousExport !== undefined)
                this._useAsynchronousExport = exportSetting.useAsynchronousExport;
            if (exportSetting.useSameTab !== undefined)
                this._useSameTabExport = exportSetting.useSameTab;
            if (exportSetting.showPrintNotificationDialog !== undefined)
                this._showPrintNotificationDialog = exportSetting.showPrintNotificationDialog;
        }
    }
    _getUrlObject() {
        return window.URL || window['webkitURL'] || window['mozURL'] || window['msURL'] || window['oURL'];
    }
    _createWorker() {
        this._terminateWorker();
        var blob = new Blob(['(' + this._workerTickerFunction.toString() + ')()'], { type: 'text/javascript' });
        var _url = this._getUrlObject();
        this._workerFunctionBlobUrl = _url.createObjectURL(blob);
        this._workerTicker = new Worker(this._workerFunctionBlobUrl);
        return this._workerTicker;
    }
    _terminateWorker() {
        if (this._workerTicker) {
            this._workerTicker.terminate();
            this._workerTicker = null;
        }
        if (this._workerFunctionBlobUrl) {
            var _url = this._getUrlObject();
            _url && _url.revokeObjectURL(this._workerFunctionBlobUrl);
            this._workerFunctionBlobUrl = null;
        }
    }
    _callPrint(_window) {
        var browserVersion = parseInt(external_DevExpress_utils_browser_default.a.version);
        if (_window && (external_DevExpress_utils_browser_default.a.chrome && 76 <= browserVersion)) {
            var worker = this._createWorker();
            var checkOnTick = () => {
                try {
                    if (_window.document && _window.document.contentType === 'application/pdf') {
                        _window.print();
                        worker.postMessage('stop');
                        this._terminateWorker();
                    }
                }
                catch (ex) {
                    this._terminateWorker();
                }
            };
            worker.onerror = (e) => { checkOnTick(); };
            worker.onmessage = (e) => { checkOnTick(); };
            worker.postMessage('start');
        }
    }
    _clearExportingFrame() {
        if (this._isNewBrowser()) {
            var iframe = this.exportingFrame.contentWindow;
            iframe && iframe.location.replace('about:blank');
        }
    }
    _initPrintingWindow() {
        var printingTextParts = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('If the operation fails, you can download the {0} and print it out from another application.', 'ASPxReportsStringId.WebDocumentViewer_Print_Popup_Text').split('{0}');
        this.printingTextPrefix(printingTextParts[0]);
        this.printingTextPostfix(printingTextParts[1]);
        if (this._showPrintNotificationDialog) {
            var subscription = this.popupVisible.subscribe((newVal) => {
                if (!newVal) {
                    this.printingLinkCallback = () => { };
                    this._clearExportingFrame();
                    subscription.dispose();
                }
            });
            this._disposables.push(subscription);
            this.popupVisible(true);
        }
    }
    _setPrintingLinkCallback(printingLinkCallback) {
        if (this._showPrintNotificationDialog) {
            this.printingLinkCallback = printingLinkCallback;
        }
    }
    _formSubmit(_requestData, _formTarget) {
        if (this.postingForm) {
            this.postingForm.target = _formTarget;
            this.exportActionUri(_requestData.RequestUrl);
            var formData = [];
            for (var key in _requestData.FormData) {
                formData.push({ name: key, value: _requestData.FormData[key] });
            }
            this.exportFormData(formData);
            this.postingForm.submit();
        }
    }
    _doExportSync(_exportWindow, printable, useSameTab) {
        this.onExportCustomEvent && this.onExportCustomEvent(this._exportResultRequestData);
        var _requestData = this._exportResultRequestData;
        useSameTab && printable && this._initPrintingWindow();
        var formTarget = useSameTab ? this.exportingFrameName : '_blank';
        if (!printable || !this._isNewBrowser()) {
            this._useSameTabExport ? this._formSubmit(_requestData, formTarget) : this._replaceLocation(_exportWindow, _requestData);
        }
        else {
            if (!_exportWindow) {
                _exportWindow = (useSameTab && this.exportingFrame) ? this.exportingFrame.contentWindow : this._replaceLocation(null, null);
            }
            var method = this._useSameTabExport ? 'POST' : 'GET';
            this._printUsingBlob(_exportWindow, _requestData, method);
        }
    }
    _initExportWindow() {
        var message = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Do not close this tab to get the resulting file.', 'ASPxReportsStringId.WebDocumentViewer_AsyncExportCloseWarning');
        var div = this._window.document.createElement('div');
        div.style['text-align'] = 'center';
        div.innerText = message;
        div.style.position = 'absolute';
        div.style.left = '0';
        div.style.top = '0';
        div.style.right = '0';
        div.style.fontSize = '20px';
        this._window.document.title = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Exporting...', 'ASPxReportsStringId.WebDocumentViewer_AsyncExportTabTitle');
        this._window.document.body.appendChild(div);
        div = this._window.document.createElement('div');
        div.id = 'loading';
        div.style.position = 'absolute';
        div.style.left = '0';
        div.style.top = '0';
        div.style.bottom = '0';
        div.style.right = '0';
        div.style['text-align'] = 'center';
        div.style.margin = 'auto';
        div.style.height = '0';
        div.style.fontSize = '32px';
        this._window.document.body.appendChild(div);
    }
    _startExportAsync(args, useSameTabLocal, deferred, inlineResult, printable = false) {
        if (useSameTabLocal) {
            this._setPrintingLinkCallback(() => this._startExportAsync(args, false, deferred, inlineResult, printable));
        }
        else {
            if (!this._useSameTabExport) {
                this._window = window.open();
                this._window.onunload = () => {
                    this.preview.progressBar.stop();
                    this._terminateWorker();
                };
                this._initExportWindow();
            }
        }
        this.preview.progressBar.text(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Exporting the document...', 'PreviewStringId.Msg_ExportingDocument'));
        this.preview.progressBar.cancelText(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'));
        var exportOperationIdDeferred = external_jQuery_["Deferred"]();
        var startExportOperationId = generateGuid();
        var shouldIgnoreError = (operationId) => () => this.preview.progressBar.wasCancelRequested(operationId || startExportOperationId);
        this.preview.progressBar.startProgress(startExportOperationId, (operationId) => {
            this.preview.requestWrapper.cancelExportRequest(operationId, shouldIgnoreError(operationId));
        }, exportOperationIdDeferred.promise());
        this.preview.requestWrapper.getStartExportOperation(args, shouldIgnoreError())
            .done((response) => {
            this.preview.previewHandlersHelper.doneStartExportHandler(deferred, inlineResult, response, exportOperationIdDeferred, startExportOperationId, useSameTabLocal, printable);
        })
            .fail((error) => {
            this.preview.previewHandlersHelper.errorStartExportHandler(deferred, startExportOperationId, error);
            exportOperationIdDeferred.reject();
            !this._useSameTabExport && error.responseJSON && error.responseJSON['error'] && this._showAsyncExportError(this._window, error.responseJSON['error']);
        });
    }
    export(args, actionUri, inlineResult, printable = false) {
        this._terminateWorker();
        var deferred = external_jQuery_["Deferred"]();
        var requestData = this._exportResultRequestData;
        requestData.RequestUrl = actionUri;
        if (this.preview._editingFields().length > 0 || AsyncExportApproach() || this._useAsynchronousExport || (this.preview.exportOptionsModel() && this.preview.exportOptionsModel().hasSensitiveData())) {
            setTimeout(() => {
                this._startExportAsync(args(), this._useSameTabExport, deferred, inlineResult, printable);
            });
        }
        else {
            deferred.resolve(true);
            if (this._useSameTabExport) {
                requestData.FormData['arg'] = args();
                requestData.FormData['actionKey'] = 'exportTo';
                this._setPrintingLinkCallback(() => this._doExportSync(null, true, false));
            }
            else {
                requestData.QueryParameters['arg'] = args();
                requestData.QueryParameters['actionKey'] = 'exportTo';
            }
            this._doExportSync(null, printable, this._useSameTabExport);
        }
        return deferred.promise();
    }
    _isNewBrowser() {
        var isNewChrome = external_DevExpress_utils_browser_default.a.chrome && (parseInt(external_DevExpress_utils_browser_default.a.version) >= 76);
        return (isNewChrome || external_DevExpress_utils_browser_default.a.mozilla || external_DevExpress_utils_browser_default.a['safari']);
    }
    _showAsyncExportError(window, message, status, statusText) {
        if (window) {
            var div = window.document.getElementById('loading');
            if (div) {
                if (status || statusText) {
                    var stringFormat = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('{0} ({1} {2})', 'ASPxReportsStringId.Error_WithStatus');
                    div.innerText = Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(stringFormat, message, status, statusText);
                }
                else
                    div.innerText = message;
            }
        }
    }
    _printUsingBlob(_exportWindow, _requestData, _method) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var _url = _this._getUrlObject();
                var blobUrl = _url.createObjectURL(this.response);
                _exportWindow && _exportWindow.location.replace(blobUrl);
                setTimeout(() => { _url.revokeObjectURL(blobUrl); }, 1);
                _this._callPrint(_exportWindow);
            }
            else if (this.readyState == 4 && this.status >= 400) {
                var message = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('An error occurred during the export', 'ASPxReportsStringId.WebDocumentViewer_ExportError');
                _previewRequestWrapper_PreviewRequestWrapper.getProcessErrorCallback(_this.preview, message, true)('', this, '');
                if (_exportWindow && _exportWindow.name != _this.exportingFrameName) {
                    _this._showAsyncExportError(_exportWindow, message, this.status, this.statusText);
                }
            }
        };
        var _exportUrl = (_method === 'GET') ? this._addQueryParamsToUri(_requestData.RequestUrl, _requestData.QueryParameters) : _requestData.RequestUrl;
        xhr.open(_method, _exportUrl);
        xhr.responseType = 'blob';
        var formData = new FormData();
        for (var key in _requestData.FormData) {
            formData.append(key, _requestData.FormData[key]);
        }
        xhr.send(formData);
    }
    _addQueryParamsToUri(_exportUri, _queryParameters) {
        var keys = Object.keys(_queryParameters || {});
        if (keys.length > 0) {
            _exportUri += '?';
            _exportUri += keys.map(x => x + '=' + _queryParameters[x]).join('&');
        }
        return _exportUri;
    }
    _replaceLocation(_exportWindow, _requestData) {
        if (!_requestData) {
            return safelyRunWindowOpen('');
        }
        var _exportUrl = this._addQueryParamsToUri(_requestData.RequestUrl, _requestData.QueryParameters);
        _exportWindow ? _exportWindow.location.replace(_exportUrl) : (_exportWindow = safelyRunWindowOpen(_exportUrl));
        return _exportWindow;
    }
    dispose() {
        super.dispose();
        (this._timeouts || []).forEach(tic => clearTimeout(tic));
        this.removeProperties();
    }
    updateExportStatus(progress, operationId) {
        this.preview.progressBar && this.preview.progressBar.progress(progress);
        if (this._window) {
            var div = this._window.document.getElementById('loading');
            div && (div.innerText = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Exporting the document...', 'PreviewStringId.Msg_ExportingDocument') + ' ' + progress + '%');
            this._window.document.title = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Exporting...', 'ASPxReportsStringId.WebDocumentViewer_AsyncExportTabTitle') + progress + '%';
        }
        if (progress >= 100) {
            this.preview.progressBar.complete(operationId);
        }
    }
    getExportStatus(operationId) {
        var deferred = external_jQuery_["Deferred"]();
        this._timeouts.push(setTimeout(() => {
            this.preview.requestWrapper.getExportStatusRequest(operationId)
                .done((response) => {
                this.preview.previewHandlersHelper.doneExportStatusHandler(deferred, operationId, response);
            })
                .fail((error) => {
                this.preview.previewHandlersHelper.errorExportStatusHandler(deferred, operationId, error);
                !this._useSameTabExport && error.responseJSON && error.responseJSON['error'] && this._showAsyncExportError(this._window, error.responseJSON['error']);
            });
        }, 250));
        return deferred.promise();
    }
    getExportResult(operationId, inlineDisposition, useSameTab, token, printable = false, uri = '') {
        var requestData = this._exportResultRequestData;
        if (uri) {
            requestData.RequestUrl = uri;
        }
        else if (token) {
            requestData.RequestUrl = ReportServerDownloadUri();
            requestData.QueryParameters['token'] = token;
            requestData.QueryParameters['printable'] = printable.toString();
        }
        else {
            var arg = encodeURIComponent(JSON.stringify({ id: operationId, inlineResult: !!inlineDisposition }));
            requestData.RequestUrl = HandlerUri();
            if (this._useSameTabExport) {
                requestData.FormData['actionKey'] = 'getExportResult';
                requestData.FormData['arg'] = arg;
            }
            else {
                requestData.QueryParameters['actionKey'] = 'getExportResult';
                requestData.QueryParameters['arg'] = arg;
            }
        }
        this._window && (this._window.onunload = null);
        this._doExportSync(this._window, printable, useSameTab);
        this._window = null;
    }
}
external_ko_["bindingHandlers"]['dxViewerExport'] = {
    init: function (element, valueAccessor) {
        var exportHandler = valueAccessor();
        var templateHtml = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrd-export-tool-content');
        external_jQuery_["fn"].constructor(element).append(templateHtml);
        var exportFrame = document.createElement('iframe');
        exportFrame.name = exportHandler.exportingFrameName;
        element.querySelector('.dxrd-visually-hidden').appendChild(exportFrame);
        exportHandler.exportingFrame = exportFrame;
        exportHandler.postingForm = element.querySelector('form');
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/accessibility/_previewEditingFieldsKeyboardHelper.js


class _previewEditingFieldsKeyboardHelper_PreviewEditingFieldsKeyboardHelper extends external_DevExpress_Analytics_Internal_["AccessibilityKeyboardHelperBase"] {
    constructor() {
        super(...arguments);
        this.controlElementClassName = 'dx-accessibility-editing-field-item';
        this.accessibilityCompliantEnabled = true;
    }
    initialize() {
        super.initialize();
        this.setTabIndexes(0);
    }
    clickHandler() { }
    itemHandleEnterKey(e, index) {
        var item = this.controlElements[index];
        item.actionExecute(e);
        return true;
    }
    itemHandleSpaceKey(e, index) {
        return this.itemHandleEnterKey(e, index);
    }
    createControlElement(element, index) {
        return new _previewEditingFieldsKeyboardHelper_PreviewEditingFieldsElement(element, external_ko_["dataFor"](element));
    }
}
class _previewEditingFieldsKeyboardHelper_PreviewEditingFieldsElement extends external_DevExpress_Analytics_Internal_["AccessibilityControlElementBase"] {
    constructor(element, model) {
        super(element);
        this.element = element;
        this.model = model;
        this._processFocus = true;
        this._isClick = (e) => this._processFocus = false;
        this._activateHandler = (e) => {
            if (this.model.activateEditor && this._processFocus) {
                this.model.activateEditor(this.model, { target: this.element, currentTarget: this.element });
                this.element.setAttribute('tabindex', '-1');
                var subscription = this.model.active.subscribe(value => {
                    if (!value) {
                        this.element.setAttribute('tabindex', '0');
                        if (document.activeElement === document.body) {
                            this._processFocus = false;
                            this.element.focus();
                        }
                        subscription.dispose();
                    }
                });
                this._disposables.push(subscription);
            }
        };
        this._blur = (e) => {
            this._processFocus = true;
        };
        element.addEventListener('mousedown', this._isClick);
        element.addEventListener('focus', this._activateHandler);
        element.addEventListener('blur', this._blur);
    }
    dispose() {
        this.element.removeEventListener('mousedown', this._isClick);
        this.element.removeEventListener('focus', this._activateHandler);
        this.element.removeEventListener('blur', this._blur);
        super.dispose();
    }
    actionExecute(e) {
        if (this.model.activateEditor)
            this._activateHandler(e);
        else if (this.model.onClick)
            this.model.onClick(this.model, e);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_brickUtils.js

function convertToPercent(childSize, parentSize) {
    return childSize * 100 / parentSize + '%';
}
function getBrickValueForKey(brick, key = 'text') {
    var brickTextProperty = brick.content && brick.content.filter(x => x.Key === key)[0];
    return brickTextProperty && brickTextProperty.Value;
}
function brickText(brick, editingFieldsProvider) {
    var fields = editingFieldsProvider ? editingFieldsProvider() : [];
    if (brick.efIndex && brick.efIndex > 0 && brick.efIndex <= fields.length && fields[brick.efIndex - 1].type() === 'text') {
        return fields[brick.efIndex - 1].editValue();
    }
    else {
        return getBrickValueForKey(brick);
    }
}
function updateBricksPosition(brick, height, width) {
    if (!brick) {
        return;
    }
    brick[brick.rtl ? 'rightP' : 'leftP'] = convertToPercent(brick.left, width);
    brick.widthP = convertToPercent(brick.width, width);
    brick.topP = convertToPercent(brick.top, height);
    brick.heightP = convertToPercent(brick.height, height);
    brick.bricks && brick.bricks.forEach((childBrick) => {
        updateBricksPosition(childBrick, height, width);
    });
}
function initializeBrick(brick, processClick, zoom, editingFieldBricks) {
    if (!brick) {
        return;
    }
    !!brick.active ? brick.active(false) : (brick.active = external_ko_["observable"](false));
    brick['onClick'] = (e) => { processClick && processClick(brick, e); };
    brick.bricks && brick.bricks.forEach(childBrick => {
        if (!childBrick)
            return;
        childBrick.top += brick.top;
        childBrick.left += brick.left;
        initializeBrick(childBrick, processClick, zoom, editingFieldBricks);
    });
    if (brick.efIndex > 0) {
        editingFieldBricks.push(brick);
    }
    brick.text = () => brickText(brick);
    brick.accessibleDescription = getBrickValueForKey(brick, 'AccessibleDescription');
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_page.js










class _page_PreviewPage extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(preview, pageIndex, processClick, loading) {
        super();
        this.isClientVisible = external_ko_["observable"](false);
        this.originalHeight = external_ko_["observable"](0);
        this.originalWidth = external_ko_["observable"](0);
        this.loadingText = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Loading...', 'AnalyticsCoreStringId.Loading');
        this.realZoom = external_ko_["observable"](1);
        this.actualResolution = 0;
        this.currentScaleFactor = external_ko_["observable"](1);
        this.imageHeight = external_ko_["observable"](0);
        this.imageWidth = external_ko_["observable"](0);
        this.imageSrc = external_ko_["observable"]('').extend({ rateLimit: { timeout: 100, method: 'notifyWhenChangesStop' } });
        this.displayImageSrc = external_ko_["observable"]('');
        this.brick = external_ko_["observable"](null);
        this.brickLoading = external_ko_["observable"](true);
        this.bricks = external_ko_["computed"](() => {
            return this.getBricksFlatList(this.brick());
        });
        this.activeBricks = external_ko_["computed"](() => {
            return this.bricks().filter((x) => x.active());
        });
        this.clickableBricks = external_ko_["computed"](() => {
            return this.bricks().filter((x) => !!x.navigation);
        });
        this.active = external_ko_["observable"](false);
        this.maxZoom = 0;
        this.disableResolutionReduction = false;
        this._lastZoom = 0;
        this._selectedBrickPath = null;
        this.pageIndex = pageIndex;
        this.documentId = preview._currentDocumentId || external_ko_["observable"](null);
        this._disposables.push(this.imageSrc.subscribe((newVal) => {
            var documentId = this.documentId.peek();
            this._lastGetPageDeferred && this._lastGetPageDeferred.resolve(null);
            var currentGetPageDeferred = external_jQuery_["Deferred"]();
            currentGetPageDeferred
                .done((response) => {
                if (!response)
                    return;
                this.imageHeight(response.height);
                this.imageWidth(response.width);
                this.currentScaleFactor(this._currentScaleFactor);
                this.displayImageSrc('data:image/png;base64,' + response.base64string);
                this._onPageLoaded(response, processClick, preview._editingFields);
            }).fail((_e) => {
                this._onPageLoadFailed();
            });
            var ignoreError = preview._closeDocumentRequests && (() => preview._closeDocumentRequests[documentId] || currentGetPageDeferred.state() != 'pending');
            _previewRequestWrapper_PreviewRequestWrapper.getPage(newVal, ignoreError)
                .done((response) => {
                currentGetPageDeferred.resolve(response);
            }).fail((_e) => {
                currentGetPageDeferred.reject(_e);
            });
            this._lastGetPageDeferred = currentGetPageDeferred;
        }));
        var unifier = external_ko_["isObservable"](preview._unifier) ? preview._unifier : external_ko_["observable"](preview._unifier || generateGuid());
        this.pageLoading = loading || external_ko_["observable"](true);
        this.originalHeight(external_ko_["unwrap"](preview._pageHeight));
        this.originalWidth(external_ko_["unwrap"](preview._pageWidth));
        this.zoom = preview._zoom;
        this.imageWidth(this.originalWidth() * this._getPixelRatio());
        this.imageHeight(this.originalHeight() * this._getPixelRatio());
        this._disposables.push(this.isClientVisible.subscribe((newVal) => {
            if (newVal) {
                this._setPageImgSrc(this.documentId(), unifier(), this.zoom());
            }
        }));
        this.color = external_ko_["isObservable"](preview._pageBackColor) ? preview._pageBackColor.peek() : '';
        this.width = external_ko_["pureComputed"](() => {
            return this.imageWidth() * this.zoom() / this.currentScaleFactor() / this._getPixelRatio();
        }).extend({ deferred: true });
        this.height = external_ko_["pureComputed"](() => {
            return this.imageHeight() * this.zoom() / this.currentScaleFactor() / this._getPixelRatio();
        }).extend({ deferred: true });
        this.isEmpty = pageIndex === -1 && !this.brick() && !processClick;
        this.resetBrickRecusive = (brick) => {
            if (brick && brick.active) {
                brick.active(false);
                if (brick.bricks) {
                    brick.bricks.forEach((childBrick) => { this.resetBrickRecusive(childBrick); });
                }
            }
        };
        this.selectBrick = (path, ctrlKey) => {
            if (_previewSelection_PreviewSelection.started)
                return;
            processClick && processClick(null);
            var currentBrick = this.brick();
            !ctrlKey && this.resetBrickRecusive(currentBrick);
            if (!path) {
                return;
            }
            if (!currentBrick) {
                this._selectedBrickPath = path;
                return;
            }
            var pathElements = path.split(',');
            pathElements.forEach((el) => {
                currentBrick = currentBrick.bricks[parseInt(el)];
            });
            currentBrick.active(true);
        };
        this._disposables.push(external_ko_["computed"](() => {
            if (!this.active()) {
                this.resetBrickRecusive(this.brick());
                this._selectedBrickPath = null;
            }
        }));
        this.editingFieldsKeyboardHelper = new _previewEditingFieldsKeyboardHelper_PreviewEditingFieldsKeyboardHelper();
        this._disposables.push(this.editingFieldsKeyboardHelper);
    }
    _initializeEditingFields(editingFieldBricks, previewEditngFields, originalWidth, originalHeight) {
        if (this.editingFields) {
            var oldEditFields = external_ko_["unwrap"](this.editingFields());
            if (oldEditFields && oldEditFields.length > 0) {
                oldEditFields.forEach(field => field.dispose && field.dispose());
            }
            this.editingFields.dispose();
        }
        this.editingFields = external_ko_["pureComputed"](() => {
            if (!previewEditngFields || editingFieldBricks.length === 0) {
                return [];
            }
            var allEditingFields = previewEditngFields();
            var pageFieldViewModels = [];
            for (var i = 0; i < editingFieldBricks.length; i++) {
                var brick = editingFieldBricks[i];
                var editingField = allEditingFields[brick.efIndex - 1];
                if (!editingField)
                    return [];
                editingField.brick = brick;
                pageFieldViewModels.push(editingField.createViewModel(this.zoom, originalWidth, originalHeight, () => allEditingFields, brick.absoluteBounds));
                brick.text = (brick => (() => brickText(brick, () => allEditingFields)))(brick);
            }
            return pageFieldViewModels;
        });
    }
    _getPixelRatio() {
        return window['devicePixelRatio'] || 1;
    }
    _onPageLoaded(result, processClick, previewEditingFields) {
        if (this._isDisposed)
            return;
        this.pageLoading(false);
        try {
            if (!result || !result.brick) {
                return;
            }
            this.brickColumnWidthArray = result.columnWidthArray;
            this.originalWidth(result.brick.width);
            this.originalHeight(result.brick.height);
            var editignFieldBricks = [];
            this.initializeBrick(result.brick, processClick, this.zoom, editignFieldBricks);
            this._initializeEditingFields(editignFieldBricks, previewEditingFields, result.brick.width, result.brick.height);
            this._selectedBrickPath && this.selectBrick(this._selectedBrickPath);
        }
        finally {
            this.brickLoading(false);
        }
    }
    _onPageLoadFailed() {
        if (this._isDisposed)
            return;
        if (this.isClientVisible()) {
            this.pageLoading(false);
            this.pageIndex !== -1 && this.brickLoading(false);
        }
    }
    updateSize(zoom) {
        var newResolution = getCurrentResolution(zoom);
        this.realZoom(newResolution / previewDefaultResolution());
        return newResolution;
    }
    clearBricks() {
        this.brickLoading(true);
    }
    dispose() {
        super.dispose();
        this._isDisposed = true;
    }
    _setPageImgSrc(documentId, unifier, zoom) {
        if (!documentId || this.pageIndex === -1) {
            return;
        }
        if (this.maxZoom && this.maxZoom < zoom) {
            zoom = this.maxZoom;
        }
        if (this._lastZoom < zoom) {
            this._lastZoom = zoom;
        }
        else {
            if (this.actualResolution && this.disableResolutionReduction && this.imageSrc())
                return;
        }
        var newResolution = this.updateSize(zoom);
        if ((this.actualResolution === newResolution || newResolution < 9) && this.imageSrc()) {
            return;
        }
        this.actualResolution = newResolution;
        this._currentScaleFactor = zoom;
        var imageResolution = Math.floor(newResolution * this._getPixelRatio());
        this.imageSrc(HandlerUri() +
            '?actionKey=getPage&unifier=' + unifier +
            '&arg=' + encodeURIComponent(JSON.stringify({ pageIndex: this.pageIndex, documentId: documentId, resolution: imageResolution, includeBricks: this.brickLoading() })));
    }
    _clear() {
        this.pageIndex = -1;
        this.isClientVisible(false);
        this._setPageImgSrc(null, null, 1);
        this.actualResolution = 0;
    }
    initializeBrick(brick, processClick, zoom, editingFieldBricks) {
        initializeBrick(brick, processClick, this.zoom, editingFieldBricks);
        updateBricksPosition(brick, brick.height, brick.width);
        this.brick(brick);
    }
    clickToBrick(s, e) {
        var target = external_jQuery_["fn"].constructor(e.currentTarget);
        var offset = target.offset();
        var xPerc = (e.clientX - offset.left + window.scrollX) / target.width() * 100;
        var yPerc = (e.clientY - offset.top + window.scrollY) / target.height() * 100;
        var bricks = s.bricks();
        for (var i = 0; i < bricks.length; i++) {
            if (parseFloat(bricks[i].topP) < yPerc && parseFloat(bricks[i].topP) + parseFloat(bricks[i].heightP) > yPerc
                && parseFloat(bricks[i].leftP) < xPerc && parseFloat(bricks[i].leftP) + parseFloat(bricks[i].widthP) > xPerc) {
                bricks[i].onClick && bricks[i].onClick(e);
                break;
            }
        }
    }
    getBricksFlatList(brick) {
        if (brick) {
            var bricks = [];
            var innerBricksLength = brick.bricks && brick.bricks.length || 0;
            for (var i = 0; i < innerBricksLength; i++) {
                bricks = bricks.concat(this.getBricksFlatList(brick.bricks[i]));
            }
            bricks.push(brick);
            return bricks;
        }
        return [];
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_previewHandlersHelper.js


class _previewHandlersHelper_PreviewHandlersHelper {
    constructor(preview) {
        this._preview = preview;
    }
    doneStartExportHandler(deferred, inlineResult, response, exportOperationIdDeferred, startExportOperationId, useSameTab = false, printable = false) {
        try {
            if (!response) {
                exportOperationIdDeferred.reject();
                this._preview.progressBar.complete(startExportOperationId);
                return;
            }
            var exportOperationId = response;
            exportOperationIdDeferred.resolve(exportOperationId);
            var progress = 0;
            var doGetExportStatus = (operationId) => {
                var promise = this._preview.exportHandler.getExportStatus(operationId);
                promise.done((result) => {
                    if (result && result.requestAgain) {
                        if (progress < result.progress) {
                            progress = result.progress;
                            this._preview.exportHandler.updateExportStatus(result.progress, operationId);
                        }
                        var doStatusRequest = () => { doGetExportStatus(operationId); };
                        PollingDelay() ? setTimeout(doStatusRequest, PollingDelay()) : doStatusRequest();
                    }
                    else {
                        this._preview.progressBar.complete(operationId);
                        if (!result.requestAgain && result.completed && !this._preview._cancelExportRequests[operationId]) {
                            this._preview.exportHandler.updateExportStatus(result.progress, operationId);
                            this._preview.exportHandler.getExportResult(operationId, inlineResult, useSameTab, result.token, printable, result.uri);
                        }
                    }
                });
            };
            doGetExportStatus(exportOperationId);
        }
        finally {
            deferred.resolve(true);
            this._preview._startBuildOperationId = '';
        }
    }
    errorStartExportHandler(deferred, startExportOperationId, error) {
        this._preview.progressBar.complete(startExportOperationId);
        deferred.reject();
    }
    doneExportStatusHandler(deferred, operationId, response) {
        try {
            if (!response) {
                deferred.resolve({ requestAgain: false });
                this._preview.progressBar.complete(operationId);
                return;
            }
            this._preview.progressBar && this._preview.progressBar.progress() < response.progress && this._preview.progressBar.progress(response.progress);
            deferred.resolve(response);
        }
        finally {
            if (!deferred.state || deferred.state() === 'pending') {
                deferred.resolve({ requestAgain: false });
            }
        }
    }
    errorExportStatusHandler(deferred, operationId, error) {
        this._preview.progressBar.complete(operationId);
        deferred.resolve({ requestAgain: false, completed: false });
    }
    doneStartBuildHandler(deferred, response, startBuildOperationId, doucmentIdDeferred) {
        try {
            var removeAllEmptyPages = (all) => {
                all && this._preview.pages.removeAll();
                this._preview.removeEmptyPages();
            };
            if (!response || !response.documentId) {
                doucmentIdDeferred.reject();
                this._preview.progressBar.complete(startBuildOperationId);
                removeAllEmptyPages();
                return;
            }
            var documentId = response.documentId;
            var stopBuildRequest = this._preview._stopBuildRequests[startBuildOperationId];
            var closeDocumentRequest = this._preview._closeDocumentRequests[startBuildOperationId];
            if (startBuildOperationId && (stopBuildRequest || closeDocumentRequest)) {
                if (closeDocumentRequest) {
                    closeDocumentRequest && this._preview.closeDocument(documentId);
                }
                else {
                    stopBuildRequest && this._preview.stopBuild(documentId);
                }
                doucmentIdDeferred.reject();
                this._preview.progressBar.complete(startBuildOperationId);
                removeAllEmptyPages();
                return;
            }
            this._preview._currentDocumentId(documentId);
            doucmentIdDeferred.resolve(documentId);
            var doGetBuildStatus = this._preview.getDoGetBuildStatusFunc();
            doGetBuildStatus(documentId);
        }
        finally {
            deferred.resolve(true);
        }
    }
    errorStartBuildHandler(deferred, startBuildOperationId, error) {
        this._preview.pageLoading(false);
        this._preview.errorMessage(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Document creation was cancelled due to server error', 'WebDocumentViewer_DocumentCreationCancelled'));
        this._preview.progressBar.complete(startBuildOperationId);
        deferred.resolve(true);
        this._preview.removeEmptyPages();
    }
    errorGetBuildStatusHandler(deferred, error, ignoreError) {
        deferred.resolve({ requestAgain: false, completed: false });
    }
    processPages(pageCount, stopProcessingPredicate) {
        var wereNoPagesAndNewOnesExist = this._preview.pageIndex() === -1 && pageCount > 0;
        if (wereNoPagesAndNewOnesExist) {
            this._preview.pageIndex(0);
        }
        for (var i = 0; i < pageCount && !stopProcessingPredicate(); i++) {
            var createNewPage = (index) => {
                return this._preview.createPage(index, this._preview.createBrickClickProcessor(index));
            };
            if (i < this._preview.pages().length) {
                var page = this._preview.pages()[i];
                if (!page || page.isEmpty) {
                    page = createNewPage(i);
                    this._preview.pages.splice(i, 1, page);
                }
                if (page.pageIndex === -1) {
                    page.pageIndex = i;
                    if (this._preview.pageIndex.peek() === i) {
                        page.isClientVisible(true);
                    }
                }
            }
            else {
                var newPage = createNewPage(i);
                this._preview.pages.push(newPage);
            }
        }
        this._preview._raiseOnSizeChanged();
        if (wereNoPagesAndNewOnesExist) {
            var pageIndex = this._preview.pages().length ? 0 : -1;
            this._preview.goToPage(pageIndex, true);
        }
    }
    doneGetBuildStatusHandler(deferred, documentId, response, stopProcessingPredicate) {
        try {
            if (!response) {
                deferred.resolve({ requestAgain: false });
                return;
            }
            this._preview.progressBar.progress() < response.progress && !this._preview._stopBuildRequests[documentId] && !stopProcessingPredicate()
                && this._preview.progressBar.progress(response.progress);
            this.processPages(response.pageCount, stopProcessingPredicate);
            deferred.resolve(response);
        }
        finally {
            if (deferred.state() === 'pending') {
                deferred.resolve({ requestAgain: false });
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_progressViewModel.js




class _progressViewModel_ProgressViewModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(enableKeyboardSupport) {
        super();
        this.progress = external_ko_["observable"](0);
        this._forceInvisible = external_ko_["observable"](false);
        this._cancelExportRequests = {};
        this.inProgress = external_ko_["observable"](false);
        this.cancelText = external_ko_["observable"](Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'));
        this.operationId = external_ko_["observable"]();
        this.text = external_ko_["observable"]('');
        this.cssClasses = external_ko_["observable"]();
        this.cancelVisible = external_ko_["pureComputed"](() => !!this.operationId() && !this.isCancelling());
        this.isCancelling = external_ko_["observable"](false);
        this.visible = external_ko_["pureComputed"]({
            read: () => {
                if (this._forceInvisible()) {
                    return false;
                }
                return this.inProgress();
            },
            write: (visibleState) => {
                this._forceInvisible(!visibleState);
            }
        });
        if (enableKeyboardSupport) {
            this.progressBarAccessibility = new external_DevExpress_Analytics_Internal_["ListKeyboardHelper"]();
            this._disposables.push(this.progressBarAccessibility);
        }
        this._disposables.push(this.cancelVisible, this.visible);
    }
    wasCancelRequested(id) {
        return !!(id && this._cancelExportRequests[id]);
    }
    setPosition(position) {
        if (!position) {
            this.cssClasses({
                'dxrd-align-default': true
            });
        }
        else {
            this.cssClasses({
                'dxrd-align-bottom': position.bottom,
                'dxrd-align-top': position.top,
                'dxrd-align-left': position.left,
                'dxrd-align-right': position.right
            });
        }
    }
    complete(completeOperationId) {
        if (completeOperationId === this.operationId() || this._startOperationId === completeOperationId || !completeOperationId) {
            this.inProgress(false);
            this.progress(0);
            this._startOperationId = null;
            this.operationId(null);
            this._lastOperationDeferred && this._lastOperationDeferred.resolve(completeOperationId);
            this.rejectLastOperationIdDeferred();
            this.isCancelling(false);
        }
    }
    dispose() {
        this.rejectLastOperationIdDeferred();
        super.dispose();
    }
    rejectLastOperationIdDeferred() {
        this._lastOperationIdDeferred && this._lastOperationIdDeferred.reject();
    }
    rejectLastOperationDeferred() {
        this._lastOperationDeferred && this._lastOperationDeferred.reject();
    }
    startProgress(startOperationId, onStop, operationIdPromise) {
        if (this.inProgress()) {
            this.stop();
            this.rejectLastOperationDeferred();
            this.rejectLastOperationIdDeferred();
        }
        this._startOperationId = startOperationId;
        this.inProgress(true);
        this.progress(0);
        var newOperationDeferred = external_jQuery_["Deferred"]();
        var newOperationIdDeferred = external_jQuery_["Deferred"]();
        this._lastOperationDeferred = newOperationDeferred;
        this._lastOperationIdDeferred = newOperationIdDeferred;
        operationIdPromise
            .done(operationId => {
            newOperationIdDeferred.resolve(operationId);
        }).fail(() => {
            newOperationIdDeferred.reject();
            newOperationDeferred.reject();
            this.complete(startOperationId);
        });
        newOperationIdDeferred.done(operationId => {
            this.operationId(operationId);
        });
        this.stop = () => {
            this.isCancelling(true);
            this.text(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cancelling...', 'ASPxReportsStringId.WebDocumentViewer_Cancelling'));
            var operationId = this.operationId();
            var finalizeId = operationId || this._startOperationId;
            try {
                external_jQuery_["isFunction"](onStop) && onStop(finalizeId);
                if (operationId)
                    this._cancelExportRequests[operationId] = true;
                if (this._startOperationId)
                    this._cancelExportRequests[this._startOperationId] = true;
            }
            finally {
            }
        };
        return this._lastOperationDeferred.promise();
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_sortingProcessor.js

class _sortingProcessor_SortingProcessor {
    constructor(_getSortingStage) {
        this._getSortingStage = _getSortingStage;
    }
    doSorting(sortData, shiftKey, ctrlKey) {
        if (!sortData)
            return;
        if (ctrlKey) {
            if (this._detachSorting(sortData))
                return;
        }
        else if (shiftKey)
            this._appendSorting(sortData);
        else
            this._applySorting(sortData);
        return true;
    }
    _applySorting(sortData) {
        var sortingStage = this._getSortingStage();
        for (var i = 0; i < sortingStage.length; i++) {
            if (sortingStage[i] && sortingStage[i].Key === sortData.target) {
                var value = sortingStage[i].Value || [];
                for (var index = 0; index < value.length; index++) {
                    if (value[index] && (value[index].fieldName === sortData.field)) {
                        if (index != 0) {
                            var x = value.splice(index, 1)[0];
                            this._changeSortOrder(x);
                            value.unshift(x);
                        }
                        else
                            this._changeSortOrder(value[index]);
                    }
                    else
                        value[index].sortOrder = ColumnSortOrder.None;
                }
                return;
            }
        }
    }
    _appendSorting(sortData) {
        var sortingStage = this._getSortingStage();
        for (var i = 0; i < sortingStage.length; i++) {
            if (sortingStage[i] && sortingStage[i].Key === sortData.target) {
                var value = sortingStage[i].Value || [];
                for (var index = 0; index < value.length; index++) {
                    if (value[index] && (value[index].fieldName === sortData.field)) {
                        if (index != value.length - 1) {
                            var x = value.splice(index, 1)[0];
                            this._changeSortOrder(x);
                            value.push(x);
                            return;
                        }
                        this._changeSortOrder(value[index]);
                        return;
                    }
                }
            }
        }
    }
    _detachSorting(sortData) {
        var skipProcessing = false;
        var sortingStage = this._getSortingStage();
        for (var i = 0; i < sortingStage.length; i++) {
            if (sortingStage[i] && sortingStage[i].Key === sortData.target) {
                (sortingStage[i].Value || []).forEach(f => {
                    if (f.sortOrder === ColumnSortOrder.None)
                        skipProcessing = true;
                    else
                        f.sortOrder = ColumnSortOrder.None;
                });
                return;
            }
        }
        return skipProcessing;
    }
    _changeSortOrder(fieldInfo) {
        fieldInfo.sortOrder = fieldInfo.sortOrder === ColumnSortOrder.Ascending ? ColumnSortOrder.Descending : ColumnSortOrder.Ascending;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/reportPreview.js

















class reportPreview_ReportPreview extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(handlerUri, previewRequestWrapper, previewHandlersHelper, callbacks, rtl = false, enableKeyboardSupport, exportSettings, element) {
        super();
        this.enableKeyboardSupport = enableKeyboardSupport;
        this.element = element;
        this.predefinedZoomLevels = external_ko_["observableArray"]([5, 2, 1.5, 1, 0.75, 0.5, 0.25]);
        this._pageWidth = external_ko_["observable"](818);
        this._pageHeight = external_ko_["observable"](1058);
        this._pageBackColor = external_ko_["observable"]('');
        this._currentReportId = external_ko_["observable"](null);
        this._currentReportUrl = external_ko_["observable"](null);
        this._currentDocumentId = external_ko_["observable"](null);
        this._unifier = external_ko_["observable"]('');
        this._stopBuildRequests = {};
        this._closeReportRequests = {};
        this._closeDocumentRequests = {};
        this._cancelExportRequests = {};
        this._editingFields = external_ko_["observable"]([]);
        this._startBuildOperationId = '';
        this._editingValuesSubscriptions = [];
        this._drillDownState = [];
        this._sortingState = [];
        this._sortingProcessor = new _sortingProcessor_SortingProcessor(() => this._sortingState || []);
        this._getBuildStatusDeferreds = [];
        this._timeouts = [];
        this._deferreds = [];
        this.getSelectedContent = (punctuationMark = '') => {
            var currentPage = this.pages()[this.pageIndex()];
            if (!currentPage || !currentPage.brickColumnWidthArray) {
                return '';
            }
            var activeBricks = [];
            var getActiveBricks = function (currentBrick, resultArray) {
                if (!currentBrick) {
                    return;
                }
                currentBrick.active() && currentBrick.genlIndex != -1 && activeBricks.push(currentBrick);
                currentBrick.bricks && currentBrick.bricks.length != 0 && currentBrick.bricks.forEach((innerBrick) => { getActiveBricks(innerBrick, resultArray); });
            };
            getActiveBricks(currentPage.brick(), activeBricks);
            if (!activeBricks) {
                return '';
            }
            var sortedActiveBricks = [];
            var extendWithSpaces = function (width, text) {
                var spaceCount = width - text.length;
                for (var i = 0; i <= spaceCount; i++) {
                    text += ' ';
                }
                return text;
            };
            var firstUsedColumn = currentPage.brickColumnWidthArray.length, lastUsedColumn = -1;
            activeBricks.forEach((activeBrick) => {
                var row = sortedActiveBricks[activeBrick.row];
                if (!row) {
                    row = [];
                    sortedActiveBricks[activeBrick.row] = row;
                }
                row[activeBrick.col] = activeBrick.accessibleDescription || activeBrick.text();
                if (firstUsedColumn > activeBrick.col) {
                    firstUsedColumn = activeBrick.col;
                }
                if (lastUsedColumn < activeBrick.col) {
                    lastUsedColumn = activeBrick.col;
                }
            });
            var result = '';
            sortedActiveBricks.forEach((row, index) => {
                for (var c = firstUsedColumn; c <= lastUsedColumn; c++) {
                    var rowText = row[c] ? row[c] + punctuationMark : '';
                    result += c == lastUsedColumn ? rowText : extendWithSpaces(currentPage.brickColumnWidthArray[c], rowText);
                }
                if (index != sortedActiveBricks.length - 1) {
                    result += '\r\n';
                }
            });
            return result;
        };
        this.rtlReport = external_ko_["observable"](false);
        this.currentPage = external_ko_["observable"](null);
        this.originalParametersInfo = external_ko_["observable"](null);
        this.pageIndex = external_ko_["observable"](-1);
        this.showMultipagePreview = external_ko_["observable"](false);
        this.documentMap = external_ko_["observable"]();
        this.exportOptionsModel = external_ko_["observable"]();
        this.pageLoading = external_ko_["observable"](false);
        this.errorMessage = external_ko_["observable"]('');
        this.documentBuilding = external_ko_["observable"](false);
        this.reportOpening = external_ko_["observable"](false);
        this.pages = external_ko_["observableArray"]([]).extend({ rateLimit: { timeout: 20, method: 'notifyWhenChangesStop' } });
        this.isAutoFit = external_ko_["observable"](true);
        this.autoFitBy = external_ko_["observable"](ZoomAutoBy.WholePage);
        this.exportDisabled = external_ko_["pureComputed"](() => {
            var inProgress = this.progressBar.inProgress();
            var documentBuilding = this.documentBuilding();
            return this.pageIndex() === -1 || inProgress || documentBuilding;
        });
        this._zoom = external_ko_["observable"](1);
        this.zoom = external_ko_["pureComputed"]({
            read: () => {
                var autoFitBy = this.autoFitBy();
                if (autoFitBy != ZoomAutoBy.None || this._zoom() === 0) {
                    return autoFitBy;
                }
                return this._zoom();
            },
            write: (val) => {
                if (val > 0) {
                    this.autoFitBy(ZoomAutoBy.None);
                    this._zoom(val);
                }
                else {
                    this.autoFitBy(val);
                }
            }
        });
        this.editingFieldsProvider = () => this._editingFields();
        this._currentPageText = external_ko_["pureComputed"](() => {
            if (this.pageIndex() === -1) {
                return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('0 pages', 'ASPxReportsStringId.WebDocumentViewer_0Pages');
            }
            else {
                var ofText = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('of', 'ASPxReportsStringId.ToolBarItemText_OfLabel');
                return (this.pageIndex() + 1) + ' ' + ofText + ' ' + this.pages().length;
            }
        });
        this._raiseOnSizeChanged = () => { this.onSizeChanged() && this.onSizeChanged()(); };
        this.previewSize = external_ko_["observable"](0);
        this.onSizeChanged = external_ko_["observable"]();
        this.previewVisible = external_ko_["observable"](false);
        this.editingFieldsHighlighted = external_ko_["observable"](false);
        this.canSwitchToDesigner = true;
        this.allowURLsWithJSContent = false;
        this.zoomStep = external_ko_["observable"](0.05);
        this._progressFirstTime = false;
        this.emptyDocumentCaption = external_ko_["pureComputed"](() => {
            var parametersInfo = this.originalParametersInfo();
            var parametersExist = parametersInfo && parametersInfo.parameters.some(x => x.Visible);
            var newCaption = '';
            if (this.documentBuilding()) {
                if (this.currentPage()) {
                    if (!this._progressFirstTime)
                        newCaption = Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Progress {0}%', 'ASPxReportsStringId.WebDocumentViewer_AriaDocumentProgress'), this.progressBar.progress().toString());
                    else
                        newCaption = this.progressBar.progress() + '%';
                    this._progressFirstTime = true;
                }
                else {
                    newCaption = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Creating the document...', 'PreviewStringId.Msg_CreatingDocument');
                }
            }
            else if (parametersExist && !this.documentId) {
                newCaption = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Waiting for parameter values...', 'PreviewStringId.Msg_WaitingForParameterValues');
            }
            else if (this.documentId) {
                this._progressFirstTime = false;
                if (this.pageIndex() !== -1 && !this.progressBar.inProgress()) {
                    newCaption = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Document is ready', 'ASPxReportsStringId.WebDocumentViewer_AriaDocumentReady');
                }
                else {
                    newCaption = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The document does not contain any pages.', 'PreviewStringId.Msg_EmptyDocument');
                }
            }
            else if (this.reportOpening()) {
                this._progressFirstTime = false;
                newCaption = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Loading...', 'AnalyticsCoreStringId.Loading');
            }
            else if (this.errorMessage()) {
                newCaption = this.errorMessage();
            }
            return newCaption;
        }).extend({ rateLimit: { timeout: 1000 } });
        this.exportOptionsTabVisible = external_ko_["observable"](true);
        HandlerUri(handlerUri || HandlerUri());
        this.progressBar = new _progressViewModel_ProgressViewModel(enableKeyboardSupport);
        this.editingFieldChanged = callbacks && callbacks.editingFieldChanged;
        this.previewHandlersHelper = previewHandlersHelper || new _previewHandlersHelper_PreviewHandlersHelper(this);
        this.requestWrapper = previewRequestWrapper || new _previewRequestWrapper_PreviewRequestWrapper(null, callbacks);
        this.rtlViewer = rtl;
        this.exportHandler = new _exportHandler_ExportHandler(exportSettings, this);
        if (callbacks) {
            this.customProcessBrickClick = callbacks.previewClick;
            this.customizeExportOptions = callbacks.customizeExportOptions;
            this.exportHandler.onExportCustomEvent = callbacks.onExport;
            this._onGetBuildStatus = callbacks._onGetBuildStatus;
            this._onGetDocumentDetails = callbacks._onGetDocumentDetails;
        }
        this._disposables.push(EditablePreviewEnabled.subscribe((newValue) => !newValue && this.editingFieldsHighlighted(false)));
        this._disposables.push(this.documentBuilding.subscribe((newVal) => {
            if (!newVal) {
                this._unifier(generateGuid());
                var documentId = this._currentDocumentId();
                var pageCount = this.pages().length;
                for (var i = 0; i < pageCount; i++) {
                    var page = this.pages()[i];
                    if (!page.pageLoading()) {
                        page.clearBricks();
                    }
                    page.updateSize(this._zoom());
                    page.actualResolution = 0;
                    page.isClientVisible() && page._setPageImgSrc(documentId, this._unifier(), this._zoom());
                }
                if (callbacks && callbacks.documentReady && documentId) {
                    var self = this;
                    this._timeouts.push(setTimeout(function () {
                        callbacks.documentReady(documentId, self._currentReportId(), pageCount);
                    }));
                }
            }
        }));
        this._disposables.push(this._currentDocumentId.subscribe((newVal) => {
            this._unifier(newVal ? generateGuid() : '');
        }));
        this._disposables.push(this.previewSize.subscribe(() => this._raiseOnSizeChanged()));
        this._disposables.push(this.zoom);
        this._disposables.push(this.exportDisabled);
        this._disposables.push(this._currentPageText);
        this._disposables.push(this.progressBar);
        this._disposables.push(this.emptyDocumentCaption);
        this._disposables.push(this.showMultipagePreview.subscribe(() => {
            if (!this.showMultipagePreview()) {
                var currentPage = this.pages()[this.pageIndex()];
                currentPage && currentPage.isClientVisible(true);
            }
        }));
        this._disposables.push(this._zoom.subscribe(() => {
            if (this.showMultipagePreview()) {
                this.pages().forEach((page) => {
                    page.updateSize(page.zoom());
                    page.isClientVisible(false);
                });
                this._raiseOnSizeChanged();
            }
            else {
                var currentPage = this.pages()[this.pageIndex()];
                currentPage && currentPage.isClientVisible.notifySubscribers(currentPage.isClientVisible.peek());
            }
        }));
        this._disposables.push(external_ko_["computed"](() => {
            var pagesArray = this.pages();
            var pageIndex = this.pageIndex();
            if (!pagesArray || pageIndex >= pagesArray.length)
                return;
            var currentPage = null;
            if (pageIndex >= 0)
                currentPage = pagesArray[pageIndex];
            if (currentPage != this.currentPage.peek())
                this.currentPage(currentPage);
        }));
        if (enableKeyboardSupport) {
            this.previewBrickKeyboardHelper = new _previewBricksKeyboardHelper_PreviewBricksKeyboardHelper(this);
            this._disposables.push(this.previewBrickKeyboardHelper);
        }
    }
    _doDrillDown(drillDownKey) {
        this._drillDownState.forEach((x) => x.Key === drillDownKey && (x.Value = !x.Value));
        var documentId = this._currentDocumentId();
        this.closeDocument();
        this.progressBar.complete(documentId);
        this.documentMap(null);
        for (var i = this.pages().length - 1; i >= 0; i--) {
            var page = this.pages()[i];
            if (i > this.pageIndex()) {
                this.pages.remove(page);
            }
            else {
                page._clear();
            }
        }
        this._startBuildRequest();
    }
    _doSorting(sortData, shiftKey, ctrlKey) {
        if (!this._sortingProcessor.doSorting(sortData, shiftKey, ctrlKey))
            return;
        this.closeDocument();
        this.documentMap(null);
        this.pages().forEach(page => page._clear());
        this._startBuildRequest();
    }
    dispose() {
        super.dispose();
        (this._timeouts || []).forEach(tic => clearTimeout(tic));
        (this._deferreds || []).forEach(deferred => deferred.reject());
        this.exportHandler && this.exportHandler.dispose();
        this.removeProperties();
        this._sortingProcessor = null;
    }
    removeEmptyPages(all) {
        all && this.pages.removeAll();
        for (var idx = this.pages().length - 1; idx >= 0; idx--) {
            var tempPage = this.pages()[idx];
            (tempPage.isEmpty || tempPage.pageIndex === -1) && this.pages.remove(tempPage);
        }
    }
    _initialize() {
        this._drillDownState = [];
        this._sortingState = [];
        this.closeDocument();
        this._editingFields([]);
        this._editingValuesSubscriptions.forEach(item => item.dispose());
        this._editingValuesSubscriptions = [];
        this.documentMap(null);
        this.pageIndex(-1);
        this.pageLoading(true);
        this.errorMessage('');
        this.progressBar.complete(null);
        this._getBuildStatusDeferreds.forEach(a => a.reject());
        this._getBuildStatusDeferreds = [];
        this.pages().forEach(x => x.dispose());
        this.pages([this.createPage(-1, undefined, this.pageLoading)]);
        this.exportHandler.reportDisplayName(null);
    }
    createPage(pageIndex, processClick, loading) {
        return new _page_PreviewPage(this, pageIndex, processClick, loading);
    }
    _cleanTabInfo() {
        this.exportOptionsModel(null);
        this.documentMap(null);
    }
    _clearReportInfo() {
        this._cleanTabInfo();
        this.closeReport();
        this.originalParametersInfo(null);
    }
    createBrickClickProcessor(cyclePageIndex) {
        var _self = this;
        return (brick, e) => {
            _self.goToPage(cyclePageIndex, true);
            if (!brick)
                return;
            var page = _self.pages()[cyclePageIndex];
            if (!page)
                return;
            page.selectBrick('');
            var shiftKey = !!(e && e.shiftKey);
            var ctrlKey = !!(e && e.ctrlKey);
            var brickNavigation = brick && brick.navigation;
            var defaultHandler = () => {
                if (brickNavigation) {
                    if (brickNavigation.drillDownKey && _self.reportId && _self._doDrillDown && _self._drillDownState.length > 0) {
                        if (_self._startBuildOperationId)
                            return;
                        _self._doDrillDown(brickNavigation.drillDownKey);
                    }
                    else if (brickNavigation.sortData && _self.reportId && _self._doSorting && _self._sortingState.length > 0) {
                        if (_self._startBuildOperationId)
                            return;
                        _self._doSorting(brickNavigation.sortData, shiftKey, ctrlKey);
                    }
                    if (brickNavigation.pageIndex >= 0) {
                        var targetPage = _self.pages().filter(page => page.pageIndex === brickNavigation.pageIndex)[0];
                        if (targetPage) {
                            _self.goToPage(brickNavigation.pageIndex);
                            targetPage.selectBrick(brickNavigation.indexes);
                            _self.brickClickDocumentMapHandler && _self.brickClickDocumentMapHandler(brickNavigation);
                        }
                    }
                    else {
                        var validateUrl = function (url) {
                            var isUrlString = typeof url === 'string';
                            if (isUrlString) {
                                url = url.toLowerCase();
                            }
                            if (url === 'empty') {
                                return false;
                            }
                            return _self.allowURLsWithJSContent || (isUrlString && (url.indexOf('javascript:') === -1));
                        };
                        if (brickNavigation.url && validateUrl(brickNavigation.url)) {
                            safelyRunWindowOpen(brickNavigation.url, brickNavigation.target || '_blank');
                        }
                    }
                }
            };
            if (_self.customProcessBrickClick && _self.customProcessBrickClick(cyclePageIndex, brick, defaultHandler))
                return;
            defaultHandler();
        };
    }
    delayedInit() {
        this.previewBrickKeyboardHelper && this.previewBrickKeyboardHelper.delayedInit();
    }
    openReport(reportName) {
        this._clearReportInfo();
        var deferred = external_jQuery_["Deferred"]();
        this._deferreds.push(deferred);
        this._openReportOperationDeferred = deferred;
        this.requestWrapper.openReport(reportName).done((response) => {
            deferred.resolve(response);
        }).fail((error) => {
            deferred.reject(error);
        });
        return this.initialize(deferred.promise());
    }
    drillThrough(customData, closeCurrentReport = true) {
        var deferred = external_jQuery_["Deferred"]();
        this.requestWrapper.drillThrough(customData).done(response => {
            if (closeCurrentReport) {
                this._clearReportInfo();
                this.initialize(deferred.promise());
            }
            deferred.resolve(response);
        }).fail((error) => {
            deferred.reject(error);
        });
        return deferred.promise();
    }
    initialize(initializeDataPromise) {
        this.reportOpening(true);
        this._currentReportId(null);
        this._currentReportUrl(null);
        this._currentDocumentId(null);
        this._initialize();
        var _initializeDeferred = external_jQuery_["Deferred"]();
        this._deferreds.push(_initializeDeferred);
        _initializeDeferred.done(() => {
            initializeDataPromise.done((previewInitialize) => {
                this.reportOpening(false);
                if (previewInitialize && !previewInitialize.error && (previewInitialize.reportId || previewInitialize.documentId)) {
                    this._currentReportId(previewInitialize.reportId);
                    this._currentReportUrl(previewInitialize.reportUrl);
                    this._currentDocumentId(previewInitialize.documentId);
                    this.rtlReport(previewInitialize.rtlReport);
                    var pageSettings = previewInitialize.pageSettings;
                    if (pageSettings) {
                        if (pageSettings.height)
                            this._pageHeight(pageSettings.height);
                        if (pageSettings.width)
                            this._pageWidth(pageSettings.width);
                        this._pageBackColor((pageSettings.color && this.readerMode) ? 'rgba(' + pageSettings.color + ')' : '');
                    }
                    var deserializedExportOptions = this._deserializeExportOptions(previewInitialize.exportOptions, !this.reportId && (!previewInitialize.documentData || !previewInitialize.documentData.canPerformContinuousExport));
                    var customizeExportOptionsArgs = { exportOptions: deserializedExportOptions, panelVisible: true };
                    this.customizeExportOptions && this.customizeExportOptions(customizeExportOptionsArgs);
                    this.exportOptionsTabVisible(customizeExportOptionsArgs.panelVisible);
                    this.exportOptionsModel(deserializedExportOptions);
                    this.originalParametersInfo(previewInitialize.parametersInfo);
                    if (previewInitialize.documentId) {
                        var documentIdPromise = external_jQuery_["Deferred"]().resolve(previewInitialize.documentId).promise();
                        this.progressBar.startProgress(null, () => { this.stopBuild(); }, documentIdPromise)
                            .always(() => { this.documentBuilding(false); });
                        this.documentBuilding(true);
                        var doGetBuildStatusFunc = this.getDoGetBuildStatusFunc();
                        doGetBuildStatusFunc(previewInitialize.documentId);
                    }
                }
                else {
                    this.pageLoading(false);
                    this._processError(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The report preview initialization has failed', 'ASPxReportsStringId.WebDocumentViewer_InitializationError'), previewInitialize && previewInitialize.error);
                }
            }).fail((error) => {
                this.reportOpening(false);
                this.removeEmptyPages();
            });
        }).resolve();
        return initializeDataPromise;
    }
    _deserializeExportOptions(exportOptionsString, isMerged) {
        var jsonModel = exportOptionsString && JSON.parse(exportOptionsString);
        return isMerged ? new exportOptionsPreview_ExportOptionsMergedPreview(jsonModel) : new exportOptionsPreview_ExportOptionsPreview(jsonModel);
    }
    deactivate() {
        this._initialize();
        this._cleanTabInfo();
        this.closeReport();
        this._currentDocumentId(null);
        this._currentReportId(null);
        this._currentReportUrl(null);
        this.originalParametersInfo(null);
    }
    startBuild() {
        this._initialize();
        return this._startBuildRequest();
    }
    customDocumentOperation(customData, hideMessageFromUser) {
        var documentId = this._currentDocumentId();
        if (this.documentBuilding() || !documentId)
            return;
        var serializedExportOptions = this.exportOptionsModel() ? JSON.stringify(new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(this.exportOptionsModel())) : null;
        var editingFields = () => this._editingFields && this._editingFields().map(item => item.editValue());
        var deferred = external_jQuery_["Deferred"]();
        setTimeout(() => this.requestWrapper.customDocumentOperation(documentId, serializedExportOptions, editingFields(), customData, hideMessageFromUser)
            .done((response) => {
            try {
                if (response && response.message) {
                    if (response.succeeded) {
                        MessageHandler().processMessage(response.message, !hideMessageFromUser, this._getToastMessageContainer());
                    }
                    else {
                        MessageHandler().processError(response.message, !hideMessageFromUser, undefined, this._getToastMessageContainer());
                    }
                }
            }
            finally {
                deferred.resolve(response);
            }
        })
            .fail(error => {
            var response = { message: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('The requested document operation cannot be performed.', 'ASPxReportsStringId.WebDocumentViewer_CustomDocumentOperationsDenied_Error') };
            deferred.reject(response);
        }));
        return deferred.promise();
    }
    _initializeStartBuild(documentIdPromise) {
        if (this.documentBuilding() || this._startBuildOperationId) {
            return false;
        }
        this._startBuildOperationId = generateGuid();
        this._currentDocumentId(null);
        this.progressBar.text(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Creating the document...', 'PreviewStringId.Msg_CreatingDocument'));
        this.progressBar.cancelText(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'));
        this.progressBar.startProgress(this._startBuildOperationId, () => { this.stopBuild(); }, documentIdPromise)
            .always(() => { this.documentBuilding(false); });
        this.documentBuilding(true);
        return true;
    }
    _startBuildRequest() {
        var docuemntIdDeferred = external_jQuery_["Deferred"]();
        if (!this._initializeStartBuild(docuemntIdDeferred)) {
            return null;
        }
        var deferred = external_jQuery_["Deferred"]();
        var currentReportId = this._currentReportId();
        var startBuildOperationId = this._startBuildOperationId;
        var shouldIgnoreError = () => this._closeReportRequests[currentReportId];
        this.requestWrapper.startBuildRequest(shouldIgnoreError)
            .done((response) => {
            this.previewHandlersHelper && this.previewHandlersHelper.doneStartBuildHandler(deferred, response, startBuildOperationId, docuemntIdDeferred);
        })
            .fail((error) => {
            this.previewHandlersHelper && this.previewHandlersHelper.errorStartBuildHandler(deferred, startBuildOperationId, error);
            docuemntIdDeferred.reject();
        });
        deferred.always(() => this._startBuildOperationId = '');
        return deferred.promise();
    }
    getBuildStatus(documentId) {
        var deferred = external_jQuery_["Deferred"]();
        this._deferreds.push(deferred);
        var sessionDeferred = external_jQuery_["Deferred"]();
        this._getBuildStatusDeferreds.push(sessionDeferred);
        this._timeouts.push(setTimeout(() => {
            var ignorePredicate = () => this._closeDocumentRequests[documentId];
            this.requestWrapper.getBuildStatusRequest(documentId, ignorePredicate)
                .done((response) => {
                sessionDeferred.resolve(response);
            })
                .fail((error) => {
                sessionDeferred.reject(error);
            });
            sessionDeferred.done((response) => {
                this._onGetBuildStatus && this._onGetBuildStatus(response);
                this.previewHandlersHelper && this.previewHandlersHelper.doneGetBuildStatusHandler(deferred, documentId, response, ignorePredicate);
            }).fail((error) => {
                this.previewHandlersHelper && this.previewHandlersHelper.errorGetBuildStatusHandler(deferred, error, ignorePredicate);
            });
        }, 250));
        return deferred.promise();
    }
    getDoGetBuildStatusFunc() {
        var preview = this;
        var doGetBuildStatus = (documentId) => {
            var promise = preview.getBuildStatus(documentId);
            promise.done((result) => {
                if (documentId !== preview._currentDocumentId())
                    return;
                if (result && result.requestAgain && !preview._closeDocumentRequests[documentId]) {
                    var doStatusRequest = () => {
                        if (!preview._closeDocumentRequests[documentId]) {
                            doGetBuildStatus(documentId);
                        }
                    };
                    PollingDelay() ? this._timeouts.push(setTimeout(doStatusRequest, PollingDelay())) : doStatusRequest();
                }
                else {
                    try {
                        if (result.error || !result.requestAgain && !result.pageCount) {
                            preview.pageLoading(false);
                            preview.removeEmptyPages(!result.pageCount);
                            if (!preview.pages().length)
                                preview.pageIndex(-1);
                            return;
                        }
                        if (!result.completed) {
                            return;
                        }
                        else if (result.pageCount < preview.pages().length) {
                            preview.pageIndex(Math.min(result.pageCount - 1, preview.pageIndex()));
                            preview.pages.splice(result.pageCount, preview.pages().length);
                        }
                        preview.getDocumentData(documentId);
                    }
                    finally {
                        preview.progressBar.complete(documentId);
                        this._timeouts.push(setTimeout(preview._raiseOnSizeChanged, 1000));
                    }
                }
            });
        };
        return doGetBuildStatus;
    }
    getDocumentData(documentId) {
        var ignoreErrorPredicate = () => this._closeDocumentRequests[documentId];
        var documentDataDeferred = external_jQuery_["Deferred"]();
        this._deferreds.push(documentDataDeferred);
        documentDataDeferred.done((response) => {
            if (!response) {
                return;
            }
            this.previewHandlersHelper.processPages(response.pageCount, () => false);
            this._onGetDocumentDetails && this._onGetDocumentDetails(response);
            this.exportHandler.reportDisplayName(response.displayName);
            this._drillDownState = response.drillDownKeys || [];
            this._sortingState = response.sortingState || [];
            if (response.canPerformContinuousExport === false && this.reportId) {
                var deserializedExportOptions = this._deserializeExportOptions(response.exportOptions || {}, true);
                var customizeExportOptionsArgs = { exportOptions: deserializedExportOptions, panelVisible: true };
                this.customizeExportOptions && this.customizeExportOptions(customizeExportOptionsArgs);
                this.exportOptionsTabVisible(customizeExportOptionsArgs.panelVisible);
                this.exportOptionsModel(deserializedExportOptions);
            }
            this.documentMap(response.documentMap);
            this._editingValuesSubscriptions.forEach(item => item.dispose());
            this._editingValuesSubscriptions = [];
            this._editingFields((response.editingFields || []).map((item, index) => {
                var field = this.createEditingField(item, index);
                if (this.editingFieldChanged) {
                    field.editingFieldChanged = this.editingFieldChanged;
                }
                this._editingValuesSubscriptions.push(field.editValue);
                return field;
            }));
        });
        this.requestWrapper.getDocumentData(documentId, ignoreErrorPredicate)
            .done(response => {
            documentDataDeferred.resolve(response);
        })
            .fail(error => {
            documentDataDeferred.reject(error);
        });
    }
    exportDocumentTo(format, inlineResult) {
        if (!this._currentDocumentId())
            return;
        var serializedExportOptions = this.exportOptionsModel() ? JSON.stringify(new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(this.exportOptionsModel())) : null;
        var args = () => encodeURIComponent(JSON.stringify({
            documentId: this._currentDocumentId(),
            exportOptions: serializedExportOptions,
            format: format,
            inlineResult: inlineResult,
            editingFieldValues: this._editingFields && this._editingFields().map(item => {
                var editValue = item.editValue();
                if (typeof editValue === 'string')
                    return transformNewLineCharacters(editValue);
                return editValue;
            })
        }));
        this.exportHandler.export(args, HandlerUri(), inlineResult);
    }
    printDocument(pageIndex) {
        if (!this._currentDocumentId())
            return;
        var exportOptions = new exportOptionsPreview_ExportOptionsPreview({});
        exportOptions.pdf['showPrintDialogOnOpen'] = true;
        pageIndex = parseInt(pageIndex);
        if ((!!pageIndex && pageIndex > 0 || pageIndex === 0) && (this.pages().length > pageIndex)) {
            (exportOptions.pdf['pageRange'] = pageIndex + 1);
        }
        var serializedExportOptions = JSON.stringify(new external_DevExpress_Analytics_Utils_["ModelSerializer"]().serialize(exportOptions));
        var args = () => encodeURIComponent(JSON.stringify({
            documentId: this._currentDocumentId(),
            exportOptions: serializedExportOptions,
            format: 'printpdf',
            inlineResult: true,
            editingFieldValues: this._editingFields && this._editingFields().map(item => item.editValue())
        }));
        this.exportHandler.export(args, HandlerUri(), true, true);
    }
    stopBuild(documentId) {
        var id = documentId || this._currentDocumentId();
        if (!id) {
            this._startBuildOperationId && (this._stopBuildRequests[this._startBuildOperationId] = true);
            return;
        }
        this._stopBuildRequests[id] = true;
        this.requestWrapper.stopBuild(id);
    }
    closeDocument(documentId) {
        var _documentId = documentId || this._currentDocumentId();
        if (!_documentId) {
            this._startBuildOperationId && (this._closeDocumentRequests[this._startBuildOperationId] = true);
            return;
        }
        this._closeDocumentRequests[_documentId] = true;
        this.progressBar.complete(documentId);
        this.requestWrapper.sendCloseRequest(_documentId);
    }
    closeReport() {
        this._openReportOperationDeferred && this._openReportOperationDeferred.reject();
        var currentReportId = this._currentReportId();
        if (!currentReportId) {
            return;
        }
        this._closeReportRequests[currentReportId] = true;
        this.requestWrapper.sendCloseRequest(null, currentReportId);
    }
    goToPage(pageIndex, forcePageChanging, throttle) {
        if (!forcePageChanging && this.pageIndex.peek() === pageIndex || this.pages.peek().length === 0 || pageIndex < 0 || pageIndex >= this.pages.peek().length) {
            return;
        }
        if (this._goToPageTimer !== undefined) {
            clearTimeout(this._goToPageTimer);
        }
        var updateActivePage = (activePageIndex) => {
            this.pages.peek().forEach((page) => {
                var visible = page.pageIndex === activePageIndex;
                page.active(visible);
                page.isClientVisible(visible);
            });
            this._goToPageTimer = undefined;
        };
        if (throttle)
            this._timeouts.push(this._goToPageTimer = setTimeout(() => updateActivePage(this.pageIndex()), throttle));
        else
            updateActivePage(pageIndex);
        this.pageIndex(pageIndex);
    }
    createEditingField(item, index) {
        return new editingField_EditingField(item, index, this.requestWrapper);
    }
    currentPageAriaLabelImgAlt(index) {
        return Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Report Preview page {0} of {1}', 'ASPxReportsStringId.WebDocumentViewer_AriaLabelPreviewPage'), index + 1, this.pages().length);
    }
    _getErrorMessage(jqXHR) {
        var serverError = Object(external_DevExpress_Analytics_Internal_["getErrorMessage"])(jqXHR);
        if (!serverError)
            return jqXHR && jqXHR.responseJSON && jqXHR.responseJSON.result && jqXHR.responseJSON.result.faultMessage ?
                jqXHR.responseJSON.result.faultMessage :
                serverError;
        return serverError;
    }
    _processError(error, jqXHR, showForUser = true) {
        var prefix = error + ': ';
        var serverError = this._getErrorMessage(jqXHR);
        serverError && (error = prefix + serverError);
        MessageHandler().processError(error, showForUser, serverError && prefix, this._getToastMessageContainer());
    }
    _getToastMessageContainer() {
        var _a;
        return (_a = this.element) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('dx-designer-viewport')[0];
    }
    get reportId() {
        return this._currentReportId();
    }
    get reportUrl() {
        return this._currentReportUrl();
    }
    get documentId() {
        return this._currentDocumentId();
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/binding/jsReportViewer.js

class jsReportViewer_JSReportViewer {
    constructor(_previewModel) {
        this._previewModel = _previewModel;
    }
    get previewModel() {
        return this._previewModel();
    }
    set previewModel(newVal) {
        this._previewModel(newVal);
    }
    previewExists() {
        return this.previewModel && this.previewModel.reportPreview;
    }
    GetReportPreview() {
        return this.previewExists();
    }
    GetPreviewModel() {
        return this.previewModel;
    }
    GetParametersModel() {
        return this.previewModel && this.previewModel.GetParametersModel();
    }
    PerformCustomDocumentOperation(customData, hideMessageFromUser) {
        return this.previewExists() && this.previewModel.PerformCustomDocumentOperation(customData, hideMessageFromUser);
    }
    OpenReport(reportName) {
        return this.previewExists() && this.previewModel.OpenReport(reportName);
    }
    Print(pageIndex) {
        return this.previewExists() && this.previewModel.Print(pageIndex);
    }
    ExportTo(format, inlineResult) {
        this.previewExists() && this.previewModel.ExportTo(format, inlineResult);
    }
    GetCurrentPageIndex() {
        return this.previewExists() && this.previewModel.GetCurrentPageIndex();
    }
    GoToPage(pageIndex) {
        this.previewExists() && this.previewModel.GoToPage(pageIndex);
    }
    Close() {
        this.previewExists() && this.previewModel.Close();
    }
    ResetParameters() {
        this.previewModel && this.previewModel.ResetParameters();
    }
    StartBuild() {
        return this.previewModel && this.previewModel.StartBuild();
    }
    UpdateLocalization(localization) {
        Object(external_DevExpress_Analytics_Utils_["updateLocalization"])(localization);
    }
    AdjustControlCore() {
        this.previewModel && this.previewModel.updateSurfaceSize && this.previewModel.updateSurfaceSize();
    }
}

// EXTERNAL MODULE: external "DevExpress.config"
var external_DevExpress_config_ = __webpack_require__(19);
var external_DevExpress_config_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_config_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/documentMap/_documentMapItemsProvider.js

class _documentMapItemsProvider_DocumentMapItemsProvider {
    constructor(bookmark) {
        this.bookmarkDict = {};
        this.getItems = (pathRequest) => {
            var result = external_jQuery_["Deferred"]();
            if (bookmark) {
                if (pathRequest.fullPath) {
                    var nodes = this._selectNode(bookmark, pathRequest.fullPath);
                    result.resolve(nodes);
                }
                else {
                    var root = this._getRootNode(bookmark);
                    result.resolve(root);
                }
            }
            else {
                result.reject();
            }
            return result.promise();
        };
    }
    _selectNode(root, path) {
        if (!!this.bookmarkDict[path]) {
            return this.bookmarkDict[path];
        }
        var pathComponents = path.split('.'), currentNode = root;
        if (pathComponents[0] !== '0') {
            return null;
        }
        for (var i = 1, index = pathComponents[i]; i < pathComponents.length; i++, index = pathComponents[i]) {
            if (currentNode && currentNode.nodes && currentNode.nodes[index]) {
                currentNode = currentNode.nodes[index];
            }
            else {
                return null;
            }
        }
        var result = _documentMapItemsProvider_DocumentMapItemsProvider.fillNode(currentNode);
        if (result && result.length !== 0) {
            this.bookmarkDict[path] = result;
        }
        return result;
    }
    static fillNode(bookmark) {
        if (!bookmark || !bookmark.nodes || bookmark.nodes.length <= 0) {
            return null;
        }
        return bookmark.nodes.map((node, i) => { return { name: i + '', displayName: node.text, isList: node.nodes && node.nodes.length > 0, bookmark: node, specifics: 'node' }; });
    }
    _getRootNode(bookmark) {
        return [{ name: '0', displayName: bookmark.text, isList: bookmark.nodes && bookmark.nodes.length > 0, bookmark: bookmark, specifics: 'node' }];
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/documentMap/_documentMapTreeListController.js

class _documentMapTreeListController_DocumentMapTreeListController {
    constructor() {
        this.selectedItem = external_ko_["observable"](null);
        this.clickHandler = (item) => void 0;
    }
    itemsFilter(item) {
        return true;
    }
    hasItems(item) {
        return item.isList === true;
    }
    canSelect(value) {
        return true;
    }
    select(value) {
        if (this.canSelect(value) && value !== this.selectedItem.peek()) {
            this.selectedItem.peek() && this.selectedItem.peek().isSelected(false);
            this.selectedItem(value);
            value.isSelected(true);
        }
    }
    showIconsForChildItems() {
        return false;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/documentMap/_documentMapModel.js





class _documentMapModel_DocumentMapModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(reportPreview) {
        super();
        this._selectedPath = external_ko_["observable"]('0');
        this._setSelectedPathByNavigationNode = (nodes, brickNavigation, path = '0') => {
            nodes.forEach((item, index) => {
                if (item.indexes === brickNavigation.indexes && item.pageIndex === brickNavigation.pageIndex) {
                    this._selectedPath(path + '.' + index.toString());
                }
                else if (item.nodes) {
                    this._selectedPath(this._setSelectedPathByNavigationNode(item.nodes, brickNavigation, path + '.' + index.toString()));
                }
            });
            return this._selectedPath();
        };
        var treeListController = new _documentMapTreeListController_DocumentMapTreeListController();
        this.isEmpty = external_ko_["pureComputed"](() => {
            return !(reportPreview.documentMap() && reportPreview.documentMap().nodes && (reportPreview.documentMap().nodes.length !== 0));
        });
        treeListController.clickHandler = (item) => {
            var bookmark = item.data.bookmark;
            if (bookmark) {
                var pageIndex = bookmark.pageIndex < 0 ? 0 : bookmark.pageIndex;
                reportPreview.pages.peek()[pageIndex].selectBrick(bookmark.indexes);
            }
        };
        reportPreview.brickClickDocumentMapHandler = (brickNavigation) => {
            if (reportPreview.documentMap && reportPreview.documentMap())
                this._setSelectedPathByNavigationNode(reportPreview.documentMap().nodes, brickNavigation);
        };
        this._disposables.push({ dispose: () => delete reportPreview.brickClickDocumentMapHandler });
        var documentMapTabVisible = external_ko_["pureComputed"](() => !this.isEmpty());
        this.tabInfo = new external_DevExpress_Analytics_Utils_["TabInfo"]({
            text: 'Document Map',
            template: 'dxrd-preview-document-map',
            model: this,
            keyboardHelper: new external_DevExpress_Analytics_Internal_["TreeListKeyboardHelper"](),
            localizationId: 'DevExpress.XtraPrinting.PrintingSystemCommand.DocumentMap',
            imageClassName: 'reportexplorer',
            imageTemplateName: 'dxrd-svg-tabs-reportexplorer',
            visible: documentMapTabVisible
        });
        this.documentMapOptions = external_ko_["pureComputed"](() => {
            return {
                itemsProvider: new _documentMapItemsProvider_DocumentMapItemsProvider(reportPreview.documentMap()),
                expandRootItems: true,
                selectedPath: this._selectedPath,
                treeListController: treeListController,
                onItemsVisibilityChanged: () => { var _a, _b; return (_b = (_a = this.tabInfo) === null || _a === void 0 ? void 0 : _a.keyboardHelper) === null || _b === void 0 ? void 0 : _b.initialize(); }
            };
        });
        this._disposables.push(this.tabInfo, documentMapTabVisible, this.documentMapOptions, this.isEmpty);
    }
    dispose() {
        super.dispose();
        this.removeProperties();
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/exportOptions/exportOptionsModel.js




class exportOptionsModel_ExportOptionsModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(reportPreview, enableKeyboardSupport) {
        super();
        this.actions = [];
        this._reportPreview = reportPreview;
        var tabPanelVisible = external_ko_["pureComputed"](() => !!reportPreview.exportOptionsModel() && (!reportPreview.exportOptionsTabVisible || reportPreview.exportOptionsTabVisible()));
        this.tabInfo = new external_DevExpress_Analytics_Utils_["TabInfo"]({
            text: 'Export Options',
            template: 'dxrd-preview-export-options',
            model: reportPreview.exportOptionsModel,
            keyboardHelper: enableKeyboardSupport ? new external_DevExpress_Analytics_Internal_["AccordionKeyboardHelper"]() : undefined,
            localizationId: 'DevExpress.XtraPrinting.ExportOptions',
            imageClassName: 'properties',
            imageTemplateName: 'dxrd-svg-tabs-properties',
            visible: tabPanelVisible
        });
        var actionExportTo = {
            id: ActionId.ExportTo,
            text: 'Export To',
            textId: 'ASPxReportsStringId.WebDocumentViewer_ExportToText',
            disabled: reportPreview.exportDisabled,
            visible: true,
            clickAction: (model) => {
                if (reportPreview.exportDisabled())
                    return;
                this._exportDocumentByFormat(model.itemData.format);
            },
            templateName: 'dxrd-preview-export-to',
            imageTemplateName: 'dxrd-svg-preview-export-export-to',
            eventHandlers: new ExportOptionsEventHandlers()
        };
        var exportItems = external_ko_["pureComputed"](() => {
            var result = this._getExportFormatItems();
            return [{
                    text: 'Export To',
                    textId: 'ASPxReportsStringId.WebDocumentViewer_ExportToText',
                    imageClassName: 'dxrd-image-export-to',
                    imageTemplateName: actionExportTo.imageTemplateName,
                    items: result
                }];
        });
        actionExportTo['items'] = exportItems;
        this.actions.push(actionExportTo);
        this._disposables.push(tabPanelVisible, this.tabInfo, exportItems);
    }
    _getExportFormatItems() {
        var result = [];
        var exportOptionsModel = this._reportPreview.exportOptionsModel();
        if (exportOptionsModel) {
            exportOptionsModel.pdf && result.push(ExportFormatID.PDF);
            exportOptionsModel.xls && result.push(ExportFormatID.XLS);
            exportOptionsModel.xlsx && result.push(ExportFormatID.XLSX);
            exportOptionsModel.rtf && result.push(ExportFormatID.RTF);
            exportOptionsModel.docx && result.push(ExportFormatID.DOCX);
            exportOptionsModel.mht && result.push(ExportFormatID.MHT);
            exportOptionsModel.html && result.push(ExportFormatID.HTML);
            exportOptionsModel.textExportOptions && result.push(ExportFormatID.Text);
            exportOptionsModel.csv && result.push(ExportFormatID.CSV);
            exportOptionsModel.image && result.push(ExportFormatID.Image);
        }
        return result;
    }
    _exportDocumentByFormat(format) {
        format && this._reportPreview.exportDocumentTo(format);
    }
    getActions(context) {
        return this.actions;
    }
    dispose() {
        super.dispose();
        this.disposeArray(this.actions);
        this.removeProperties();
    }
}
class ExportOptionsEventHandlers {
    onSubmenuShowing(popupContainer, element) {
        return (e) => {
            e.submenu._overlay.option('container', popupContainer);
            e.submenu._overlay.option('focusStateEnabled', false);
            e.submenu._overlay.option('position', { my: 'left top', at: 'left bottom', of: element, collision: 'none', boundary: popupContainer });
            this._menuButton = e.component.option('focusedElement');
            e.submenu._attachHoverEvents();
        };
    }
    onSubmenuShown(e) {
        var submenu = e.submenu;
        submenu.registerKeyHandler('escape', (e) => submenu.hide());
        submenu.registerKeyHandler('leftArrow', (e) => submenu.hide());
        submenu.registerKeyHandler('rightArrow', (e) => submenu.hide());
    }
    onSubmenuHiding(e) {
        if (e.model.eventHandlers._menuButton) {
            e.component.option('focusedElement', e.model.eventHandlers._menuButton);
            e.component.focus();
        }
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_mobilePage.js

class _mobilePage_MobilePreviewPage extends _page_PreviewPage {
    constructor(preview, pageIndex, processClick, loading) {
        super(preview, pageIndex, processClick, loading);
        this.maxZoom = 1;
        this.selectBrick = (path, ctrlKey) => {
            var currentBrick = this.brick();
            !ctrlKey && this.resetBrickRecusive(currentBrick);
            if (!path) {
                return;
            }
            if (!currentBrick) {
                this['_selectedBrickPath'] = path;
                return;
            }
            this.bricks().forEach((brick) => { brick.indexes === path && brick.active(true); });
        };
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/mobilePreview.js




class mobilePreview_MobileReportPreview extends reportPreview_ReportPreview {
    constructor(handlerUri, previewRequestWrapper, previewHandlersHelper, callbacks, rtl = false, mobileSettings = { readerMode: true, animationEnabled: true }) {
        super(handlerUri, previewRequestWrapper, previewHandlersHelper, callbacks, rtl);
        this.availablePages = external_ko_["observable"](null);
        this.visiblePages = external_ko_["computed"](() => {
            if (!this.availablePages()) {
                return this.pages();
            }
            else {
                return this.pages().filter((x) => { return this.availablePages().indexOf(x.pageIndex) !== -1; });
            }
        });
        this.topOffset = external_ko_["observable"](0);
        this.previewWrapperSize = external_ko_["observable"]({ width: 0, height: 0 });
        this.searchPanelVisible = external_ko_["observable"](false);
        this.actionsVisible = external_ko_["observable"](false);
        this.scrollReachedLeft = external_ko_["observable"](false);
        this.scrollReachedRight = external_ko_["observable"](false);
        this.scrollReachedTop = external_ko_["observable"](true);
        this.scrollReachedBottom = external_ko_["observable"](true);
        this.zoomUpdating = external_ko_["observable"](false);
        this.mobileZoom = external_ko_["computed"]({
            read: () => {
                var currentZoom = this.zoom();
                return currentZoom > 0 ? currentZoom : this._zoom();
            },
            write: (newVal) => {
                this.zoom(newVal);
            }
        });
        this.readerMode = mobileSettings.readerMode;
        var globalAnimationEnabled = mobileSettings.animationEnabled;
        this.animationSettings = { zoomEnabled: external_ko_["observable"](globalAnimationEnabled), swipeEnabled: external_ko_["observable"](globalAnimationEnabled) };
        this.canSwitchToDesigner = false;
        this.autoFitBy(ZoomAutoBy.PageWidth);
        this.showMultipagePreview(true);
        this._disposables.push(this.interactionDisabled = external_ko_["pureComputed"](() => this.pages().length === 0), this.searchPanelVisible.subscribe((newVal) => {
            if (newVal) {
                this.actionsVisible(false);
            }
        }));
    }
    createPage(pageIndex, processClick, loading) {
        return new _mobilePage_MobilePreviewPage(this, pageIndex, processClick, loading);
    }
    createBrickClickProcessor(cyclePageIndex) {
        var _clickHandler = super.createBrickClickProcessor(cyclePageIndex);
        var func = (brick) => {
            if (this.zoomUpdating())
                return;
            if (cyclePageIndex !== this.pageIndex()) {
                this.actionsVisible(false);
                var supscription = this.actionsVisible.subscribe((newVal) => {
                    supscription.dispose();
                    this.actionsVisible(false);
                });
            }
            _clickHandler(brick);
        };
        return func;
    }
    _hasActiveEditingFields() {
        return this.visiblePages().some(p => {
            var pageEditFields = external_ko_["unwrap"](p.editingFields);
            return pageEditFields && pageEditFields.some(x => external_ko_["unwrap"](x.active));
        });
    }
    showActions(s) {
        if (s.zoomUpdating() || s.interactionDisabled())
            return;
        var searchVisible = s.searchPanelVisible();
        if (!searchVisible) {
            if (!this._hasActiveEditingFields()) {
                s.actionsVisible(!s.actionsVisible());
            }
        }
        else {
            s.searchPanelVisible(!searchVisible);
        }
    }
    onSlide(e) {
        this.scrollReachedLeft(true);
        this.scrollReachedRight(true);
        if (this.autoFitBy() === ZoomAutoBy.None && e.removedItems && e.removedItems[0].blocks().length === 1 && e.addedItems && e.addedItems[0].blocks().length === 1)
            this.autoFitBy(ZoomAutoBy.PageWidth);
    }
    goToPage(pageIndex, forcePage) {
        super.goToPage(pageIndex, forcePage);
    }
    getScrollViewOptions() {
        var options = {
            onUpdated: (e) => { this.setScrollReached(e); },
            direction: 'both',
            pushBackValue: 0,
            bounceEnabled: false,
            disabled: this.zoomUpdating
        };
        return options;
    }
    setScrollReached(e) {
        this.scrollReachedLeft(e.reachedLeft);
        this.scrollReachedRight(e.reachedRight);
        this.scrollReachedTop(e.reachedTop);
        this.scrollReachedBottom(e.reachedBottom);
    }
    dispose() {
        this.mobileZoom.dispose();
        this.visiblePages.dispose();
        super.dispose();
    }
}

// EXTERNAL MODULE: external "DevExpress.data.DataSource"
var external_DevExpress_data_DataSource_ = __webpack_require__(10);
var external_DevExpress_data_DataSource_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_data_DataSource_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/accessibility/_searchKeyboardHelper.js

class _searchKeyboardHelper_SearchKeyboardHelper extends external_DevExpress_Analytics_Internal_["ListKeyboardHelper"] {
    constructor(searchModel) {
        super();
        this.liveRegionId = 'dxrd-preview-search-live-region';
        this._disposables.push(searchModel.searchResult.subscribe(result => {
            if (result.length > 0)
                this.liveRegion().changeText(Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Internal_["getLocalization"])('{0} results are available', 'ASPxReportsStringId.WebDocumentViewer_AriaSearchResultsAvailable'), result.length));
            else if (!searchModel.loading() && !!searchModel.searchText())
                this.liveRegion().changeText(searchModel.noResultText());
        }));
        this._disposables.push(searchModel.searchText.subscribe(inputValue => {
            if (!!inputValue)
                this.liveRegion().changeText(Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Internal_["getLocalization"])('You searched for {0}', 'ASPxReportsStringId.WebDocumentViewer_AriaSearchString'), '"' + inputValue + '"'));
        }));
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/search/_searchResultNavigator.js


class _searchResultNavigator_SearchResultNavigator extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(searchModel, reportPreview) {
        super();
        this.currentResult = external_ko_["observable"](null);
        var goToMatchedResult = (foundResult) => {
            if (!foundResult) {
                return;
            }
            reportPreview.goToPage && reportPreview.goToPage(foundResult.pageIndex);
            var page = reportPreview.pages.peek()[foundResult.pageIndex];
            page && page.selectBrick(foundResult.indexes);
        };
        this.getFirstMatchFromPage = (pageIndex, up, thisPageOnly) => {
            if (!searchModel.searchResult() || searchModel.searchResult().length === 0) {
                return null;
            }
            var firstMatch;
            var sortOutResult = (index) => {
                searchModel.searchResult().forEach((m) => {
                    if (thisPageOnly && m.pageIndex === index) {
                        if (!firstMatch || (m.id < firstMatch.id && !up || m.id > firstMatch.id && up)) {
                            firstMatch = m;
                        }
                    }
                    else {
                        if (m.pageIndex >= index && !up && (!firstMatch || m.id < firstMatch.id) || m.pageIndex <= index && up && (!firstMatch || m.id > firstMatch.id)) {
                            firstMatch = m;
                        }
                    }
                });
            };
            sortOutResult(pageIndex);
            !firstMatch && sortOutResult(up ? reportPreview.pages().length : 0);
            return firstMatch;
        };
        var _setCurrentResult = (highlight, resultId, thisPageOnly) => {
            if (searchModel.searchResult() && searchModel.searchResult().length !== 0) {
                var currentResult = (resultId >= 0 && searchModel.searchResult().length > resultId) ?
                    searchModel.searchResult()[resultId] :
                    this.getFirstMatchFromPage(reportPreview.pageIndex.peek(), searchModel.searchUp.peek(), thisPageOnly);
                this.currentResult(currentResult);
                highlight && goToMatchedResult(this.currentResult.peek());
            }
            else {
                reportPreview.pages() && reportPreview.pages()[reportPreview.pageIndex()] && reportPreview.pages()[reportPreview.pageIndex()].selectBrick('');
            }
        };
        this.goToResult = (id) => {
            if (id !== 0 && !id) {
                return null;
            }
            _setCurrentResult(true, id);
        };
        this._disposables.push(reportPreview.pageIndex.subscribe((newPageIndex) => {
            if (this.currentResult() && newPageIndex === this.currentResult().pageIndex)
                return;
            this.currentResult(null);
        }));
        this._disposables.push(searchModel.searchResult.subscribe(() => {
            _setCurrentResult(true);
        }));
        this.next = (up) => {
            if (!searchModel.searchResult()) {
                return false;
            }
            if (!this.currentResult()) {
                var prevPageIndex = (reportPreview.pageIndex() === 0 ? reportPreview.pages.length : reportPreview.pageIndex()) - 1;
                var pageIndexToSearchFrom = up ? prevPageIndex : reportPreview.pageIndex();
                var firstResult = this.getFirstMatchFromPage(pageIndexToSearchFrom, up);
                this.currentResult(firstResult);
                if (firstResult) {
                    goToMatchedResult(firstResult);
                    return true;
                }
                else {
                    return false;
                }
            }
            var id, currentId = this.currentResult().id;
            if (up) {
                id = (currentId === 0) ? searchModel.searchResult().length - 1 : (currentId - 1);
            }
            else {
                id = (currentId === searchModel.searchResult().length - 1) ? 0 : (currentId + 1);
            }
            this.currentResult(searchModel.searchResult()[id]);
            goToMatchedResult(this.currentResult());
            return true;
        };
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/search/_searchViewModel.js








class _searchViewModel_SearchViewModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(reportPreview, enableKeyboardSupport) {
        super();
        this._searchIgnoreObs = external_ko_["observable"](false);
        this.itemClickAction = (e) => {
            this.goToResult(e.data);
        };
        this.actions = [];
        this.focusRequested = external_ko_["observable"](true);
        this.matchWholeWord = external_ko_["observable"](false);
        this.matchCase = external_ko_["observable"](false);
        this.searchUp = external_ko_["observable"](false);
        this.searchText = external_ko_["observable"]();
        this.searchResult = external_ko_["observable"]();
        this.loading = external_ko_["observable"](false);
        this._renderedSearchResult = external_ko_["observable"]([]);
        this.resetSearchResult();
        this._resultNavigator = _searchViewModel_SearchViewModel.createResultNavigator(this, reportPreview);
        this.clean = () => { this.searchText(''); };
        this._disposables.push(reportPreview._currentDocumentId.subscribe((newVal) => {
            this.resetSearchResult();
        }));
        this._disposables.push(reportPreview._currentReportId.subscribe((newVal) => {
            this.resetSearchResult();
        }));
        this.findUp = () => { this.searchUp(true); this.findNext(); };
        this.findDown = () => { this.searchUp(false); this.findNext(); };
        this.goToResult = (result) => { this._resultNavigator.goToResult(result.id); };
        var newSearch = (text, matchCase, matchWholeWord) => {
            this._searchTimeout && clearTimeout(this._searchTimeout);
            this._searchTimeout = setTimeout(() => {
                this._resultNavigator.currentResult(null);
                if (!text) {
                    reportPreview.pages() && reportPreview.pages()[reportPreview.pageIndex()] && reportPreview.pages()[reportPreview.pageIndex()].selectBrick('');
                    this.searchResult([]);
                    return;
                }
                var mCase = this.matchCase();
                text = mCase ? this.searchText() : this.searchText().toLocaleLowerCase();
                var cache = this.matchWholeWord()
                    ? mCase ? this._cachedWholeWordWithCaseRequests : this._cachedWholeWordRequests
                    : mCase ? this._cachedCaseSensitiveRequests : this._cachedRequests;
                if (cache[text]) {
                    this.loading(false);
                    this.searchResult(cache[text]);
                    return;
                }
                this.loading(true);
                this._searchIgnoreObs(true);
                this._searchIgnoreObs = external_ko_["observable"](false);
                var self = this;
                ((ignore) => {
                    reportPreview.requestWrapper.findTextRequest(text, ignore).done(function (result) {
                        if (!ignore())
                            self.findTextRequestDone(result, cache[text]);
                    }).fail(function (error) {
                        if (!ignore()) {
                            self.searchResult([]);
                            self.loading(false);
                        }
                    });
                })(this._searchIgnoreObs);
            }, 100);
        };
        this.findNext = () => {
            if (this.loading()) {
                return;
            }
            this._resultNavigator.next(this.searchUp()) || newSearch(this.searchText(), this.matchCase(), this.matchWholeWord());
        };
        this._disposables.push(this.searchText.subscribe(newVal => { newSearch(newVal, this.matchCase(), this.matchWholeWord()); }), this.matchCase.subscribe(newVal => { newSearch(this.searchText(), newVal, this.matchWholeWord()); }), this.matchWholeWord.subscribe(newVal => { newSearch(this.searchText(), this.matchCase(), newVal); }));
        var disabled = external_ko_["pureComputed"](() => {
            var documentId = reportPreview['_currentDocumentId']();
            var pageIndex = reportPreview.pageIndex();
            return reportPreview.documentBuilding() || !documentId || pageIndex === -1;
        });
        var visible = external_ko_["pureComputed"](() => SearchAvailable());
        this._disposables.push(disabled, visible);
        this.actions.push({
            id: ActionId.Search,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Search', 'ASPxReportsStringId.SearchDialog_Header'),
            imageClassName: 'dxrd-image-search',
            imageTemplateName: 'dxrd-svg-preview-search',
            disabled: disabled,
            visible: visible,
            hasSeparator: true,
            hotKey: { ctrlKey: false, keyCode: 70 },
            clickAction: () => {
                if (!this.tabInfo.active()) {
                    this.tabInfo.active(true);
                }
                else {
                    this.tabInfo.active.notifySubscribers(true);
                }
            }
        });
        this.tabInfo = new external_DevExpress_Analytics_Utils_["TabInfo"]({
            text: 'Search',
            template: 'dxrd-preview-search',
            model: this,
            keyboardHelper: enableKeyboardSupport ? new _searchKeyboardHelper_SearchKeyboardHelper(this) : undefined,
            localizationId: 'ASPxReportsStringId.SearchDialog_Header',
            imageClassName: 'search',
            imageTemplateName: 'dxrd-svg-preview-search',
            visible: external_ko_["pureComputed"](() => !disabled() && SearchAvailable())
        });
        this._disposables.push(this.searchResult.subscribe((newVal) => {
            if (newVal) {
                this._renderedSearchResult(newVal.map((item) => { return { data: item }; }));
            }
        }));
        this._disposables.push(this.tabInfo);
        var dataSource = null;
        this._disposables.push(this.searchResultDataSource = external_ko_["pureComputed"](() => {
            dataSource && dataSource.dispose();
            dataSource = new external_DevExpress_data_DataSource_default.a({
                store: this._renderedSearchResult(),
                paginate: this._renderedSearchResult().length > 20,
                pageSize: 20
            });
            return dataSource;
        }));
    }
    resetSearchResult() {
        this._cachedRequests = {};
        this._cachedWholeWordRequests = {};
        this._cachedCaseSensitiveRequests = {};
        this._cachedWholeWordWithCaseRequests = {};
        this.searchResult([]);
        this.searchText('');
    }
    findTextRequestDone(result, cache) {
        this.loading(false);
        if (!result) {
            this.searchResult([]);
            return;
        }
        cache = (result.success ? result.matches : []) || [];
        this.searchResult(cache);
    }
    dispose() {
        this._searchTimeout && clearTimeout(this._searchTimeout);
        super.dispose();
    }
    onItemRendered(e) {
        this._timeoutItemRendered && clearTimeout(this._timeoutItemRendered);
        this._timeoutItemRendered = setTimeout(() => {
            this.tabInfo.keyboardHelper && this.tabInfo.keyboardHelper.initialize();
        }, 100);
    }
    getActions(context) {
        return this.actions;
    }
    noResultText() {
        return Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('No results found for {0}', 'ASPxReportsStringId.WebDocumentViewer_AriaSearchNoResults'), '"' + this.searchText() + '"');
    }
    get disabled() { return this.loading(); }
}
_searchViewModel_SearchViewModel.createResultNavigator = (seacrhModel, reportPreview) => {
    return new _searchResultNavigator_SearchResultNavigator(seacrhModel, reportPreview);
};

// EXTERNAL MODULE: external "DevExpress.ui.dxTextBox"
var external_DevExpress_ui_dxTextBox_ = __webpack_require__(11);
var external_DevExpress_ui_dxTextBox_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_ui_dxTextBox_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_mobileSearch.js







class _mobileSearch_MobileSearchViewModel extends _searchViewModel_SearchViewModel {
    constructor(reportPreview, gallery) {
        super(reportPreview);
        this.height = external_ko_["observable"](0);
        this['_resultNavigator']['_disposables'].forEach((x) => { x.dispose(); });
        var _galleryCurrentItemBlocksSubscription;
        var currentBlocksSubscribe = (selectedIndex) => {
            this._killSubscription(_galleryCurrentItemBlocksSubscription);
            _galleryCurrentItemBlocksSubscription = gallery.items()[selectedIndex].blocks.subscribe((newBlocks) => this.updatePagesInBlocks(newBlocks));
            this.updatePagesInBlocks(gallery.items()[selectedIndex].blocks());
        };
        var _gallerySelectedIndexSubscription;
        var currentIndexSubscribe = () => {
            this._killSubscription(_gallerySelectedIndexSubscription);
            _gallerySelectedIndexSubscription = gallery.selectedIndex.subscribe((newSelectedIndex) => currentBlocksSubscribe(newSelectedIndex));
            currentBlocksSubscribe(gallery.selectedIndex());
        };
        this._disposables.push(gallery.items.subscribe((newItems) => currentIndexSubscribe()));
        currentIndexSubscribe();
        this._disposables.push(this.searchResult.subscribe((newResult) => {
            if (!newResult || newResult.length === 0) {
                reportPreview.availablePages(null);
                reportPreview.pages().forEach(page => page.resetBrickRecusive(page.brick()));
            }
            else {
                reportPreview.availablePages(newResult.map(x => x.pageIndex));
            }
            var blocks = gallery.items()[gallery.selectedIndex()].blocks();
            blocks.forEach(block => {
                block.page && block.page.resetBrickRecusive(block.page.brick());
                this._updateBricks(block.page, this.searchResult());
            });
        }));
        this.searchPanelVisible = reportPreview.searchPanelVisible;
        this.editorVisible = external_ko_["observable"](false);
        this._disposables.push(this.searchPanelVisible.subscribe((newVal) => {
            if (!newVal || !SearchAvailable()) {
                this.stopSearching();
            }
            else {
                this.height(_mobileSearch_MobileSearchViewModel.maxHeight);
            }
        }));
        this.enabled = SearchAvailable;
    }
    focusEditor(event) {
        if (this.searchPanelVisible()) {
            this.editorVisible(true);
            var previewSearch = external_jQuery_["fn"].constructor('.dxrdp-search-editor');
            var searchEditor = external_DevExpress_ui_dxTextBox_default.a['getInstance'](previewSearch.get(0));
            searchEditor.focus();
            setTimeout(() => {
                event.currentTarget.blur();
                searchEditor.focus();
            }, 1);
        }
    }
    _killSubscription(subscription) {
        var index = this._disposables.indexOf(subscription);
        if (index == -1)
            return;
        subscription && subscription.dispose();
        this._disposables.splice(index, 1);
    }
    _updateBricks(page, searchResult) {
        if (page.brick() && searchResult && searchResult.length > 0) {
            var results = searchResult.filter((x) => { return x.pageIndex === page.pageIndex; });
            for (var i = 0; i < results.length; i++) {
                page.selectBrick(results[i].indexes, true);
            }
        }
        else {
            var subscription = page.brick.subscribe((newVal) => {
                subscription.dispose();
                this._updateBricks(page, this.searchResult());
            });
        }
    }
    updatePagesInBlocks(blocks) {
        blocks.forEach(block => {
            if (block.page && this.searchResult() && this.searchResult().length > 0) {
                this._updateBricks(block.page, this.searchResult());
            }
        });
    }
    stopSearching() {
        this.height(0);
        this.editorVisible(false);
        this.searchResult(null);
    }
    startSearch() {
        if (this.searchResult() === null)
            this.findNext();
    }
}
_mobileSearch_MobileSearchViewModel.maxHeight = 80;
class _mobileSearch_SearchBarModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(viewModel, element, $searchText) {
        super();
        this.viewModel = viewModel;
        this._disposables.push(viewModel.height.subscribe((newValue) => {
            if (!newValue) {
                element.style.display = 'none';
            }
            else {
                element.style.display = 'block';
            }
            $searchText.css({
                'opacity': Math.min((newValue / _mobileSearch_MobileSearchViewModel.maxHeight), 1)
            });
        }));
    }
    dispose() {
        super.dispose();
        this.viewModel.stopSearching();
    }
}
external_ko_["bindingHandlers"]['dxrdSearchBar'] = {
    init: function (element, valueAccessor) {
        var viewModel = external_ko_["unwrap"](valueAccessor());
        var $element = external_jQuery_["fn"].constructor(element);
        element.style.display = 'none';
        var $searchText = $element.find('.dxrdp-taptosearch-text');
        var searchBarModel = new _mobileSearch_SearchBarModel(viewModel, element, $searchText);
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
            searchBarModel.dispose();
        });
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/gallery/_galleryModel.js





class _galleryModel_GalleryModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(preview, previewWrapperSize) {
        super();
        this.preview = preview;
        this.previewWrapperSize = previewWrapperSize;
        this._spacing = 1;
        this._animationTimeout = null;
        this.repaint = external_ko_["observable"]({});
        this.repaintTimeout = external_ko_["observable"]();
        this.horizontal = external_ko_["observable"](1);
        this.vertical = external_ko_["observable"](1);
        this.pageCount = 0;
        this.isAnimated = external_ko_["observable"](false);
        this.items = external_ko_["observableArray"]([{ blocks: external_ko_["observableArray"]([]) }, { blocks: external_ko_["observableArray"]([]) }, { blocks: external_ko_["observableArray"]([]) }]);
        this.currentBlockText = external_ko_["observable"]('');
        this.selectedIndexReal = external_ko_["observable"](0);
        this.selectedIndex = external_ko_["observable"](0);
        var oldIndex = this.selectedIndex();
        this._disposables.push(this.contentSize = external_ko_["pureComputed"](() => {
            var blocks = this.items()[this.selectedIndex()].blocks();
            var width, height;
            if (blocks.length === 1) {
                var block = blocks[0];
                var position = block.position();
                width = Math.max(position.width, block.page.width());
                height = Math.max(position.height, block.page.height());
            }
            return { width: width ? width + 'px' : 'auto', height: height ? height + 'px' : 'auto' };
        }));
        this.animationEnabled = preview.animationSettings.swipeEnabled;
        var _calcHorizontalVertical = () => {
            var _zoom = preview._zoom();
            var pageHeight = Math.ceil(preview._pageHeight() * getCurrentResolution(_zoom) / previewDefaultResolution());
            var pageWidth = Math.ceil(preview._pageWidth() * getCurrentResolution(_zoom) / previewDefaultResolution());
            var _containerSize = previewWrapperSize();
            var horizontal = (preview.autoFitBy() != ZoomAutoBy.PageWidth && (Math.floor(_containerSize.width / (pageWidth + 2 * this._spacing)))) || 1;
            var vertical = Math.floor(_containerSize.height / (pageHeight + 2 * this._spacing)) || 1;
            this.horizontal(horizontal);
            this.vertical(vertical);
        };
        var updateGalleryContent = () => {
            _calcHorizontalVertical();
            this.pageCount = this.horizontal() * this.vertical();
            this.updateContent(preview, this.pageCount);
        };
        this._disposables.push(previewWrapperSize.subscribe(() => {
            this.items().forEach(item => item.blocks().forEach(block => block.repaint = true));
            updateGalleryContent();
            var currentGalleryItem = this.items()[this.selectedIndex()];
            this.updateBlocks(currentGalleryItem, this.pageCount, preview, this.selectedIndexReal(), preview.animationSettings.zoomEnabled());
            this.repaint.valueHasMutated();
        }));
        this._disposables.push(preview.visiblePages.subscribe(() => {
            for (var i = 0; i < this.items().length; i++) {
                this.items()[i].blocks([]);
                this.items()[i].realIndex = -1;
            }
            updateGalleryContent();
        }));
        this._disposables.push(preview.pageIndex.subscribe(updateGalleryContent));
        this._disposables.push(preview.zoomUpdating.subscribe((newVal) => {
            if (newVal)
                return;
            clearTimeout(this.repaintTimeout());
            this.repaintTimeout(setTimeout(() => this.repaint.valueHasMutated(), 410));
        }));
        this._disposables.push(preview._zoom.subscribe(() => {
            _calcHorizontalVertical();
            var pageCount = this.horizontal() * this.vertical();
            if (this.pageCount !== pageCount) {
                this.pageCount = pageCount;
                this.items().forEach(item => item.blocks().forEach(block => block.repaint = true));
                this.updateContent(preview, pageCount);
            }
            else if (this.pageCount === 1) {
                var block = this.items()[this.selectedIndex()].blocks()[0];
                this.items().forEach((item, index) => {
                    if (index != this.selectedIndex())
                        item.blocks().forEach(block => block.repaint = true);
                });
                setTimeout(() => {
                    block.position({
                        left: block.position().left,
                        top: block.position().top,
                        height: Math.max(this.previewWrapperSize().height, block.page.height()),
                        width: Math.max(this.previewWrapperSize().width, block.page.width())
                    });
                });
            }
        }));
        this._disposables.push(this.selectedIndexReal.subscribe((newVal) => {
            if (newVal >= 0) {
                this.changePage(preview);
            }
            else if (newVal < 0) {
                this.selectedIndexReal(0);
            }
        }));
        this._disposables.push(this.selectedIndex.subscribe((newVal) => {
            var result = newVal - oldIndex;
            if (result === -2 || result === 1) {
                this.selectedIndexReal(this.selectedIndexReal() + 1);
            }
            else if (result === 2 || result === -1) {
                this.selectedIndexReal(this.selectedIndexReal() - 1);
            }
            oldIndex = newVal;
        }));
        this._disposables.push(this.swipeLeftEnable = external_ko_["computed"](() => {
            return this.selectedIndexReal() !== 0;
        }));
        this._disposables.push(this.swipeRightEnable = external_ko_["computed"](() => {
            return this.selectedIndexReal() != (Math.ceil(preview.visiblePages().length / (this.horizontal() * this.vertical())) - 1);
        }));
    }
    _createBlock(previewPage, className, visible) {
        previewPage.disableResolutionReduction = true;
        previewPage.maxZoom = 1;
        var classSet = {};
        if (this.animationEnabled() && this.pageCount > 1) {
            className && (classSet[className] = true);
            classSet['dxrdp-animation'] = true;
        }
        return {
            page: previewPage,
            visible: visible,
            classSet: classSet,
            position: external_ko_["observable"]({ top: 0, left: 0, width: 0, height: 0 })
        };
    }
    dispose() {
        clearTimeout(this.repaintTimeout());
        super.dispose();
    }
    updatePagesVisible(preview) {
        if (this.items()[this.selectedIndex()]) {
            var someActive = false;
            var pages = this.items()[this.selectedIndex()].blocks();
            if (pages.length > 0) {
                for (var i = 0; i < pages.length; i++) {
                    if (pages[i].page) {
                        pages[i].page.isClientVisible(true);
                        if (pages[i].page.active()) {
                            someActive = true;
                        }
                    }
                }
                if (!someActive) {
                    pages[0].page && preview.goToPage(pages[0].page.pageIndex);
                }
            }
        }
    }
    updateCurrentBlock() {
        if (this.items()[this.selectedIndex()]) {
            var blocks = this.items()[this.selectedIndex()].blocks();
            if (blocks.length > 0) {
                if (blocks.length > 1) {
                    this.currentBlockText([blocks[0].page.pageIndex + 1, blocks[blocks.length - 1].page.pageIndex + 1].join(' - '));
                }
                else {
                    if (blocks[0].page) {
                        this.currentBlockText((this.preview.pageIndex() + 1).toString());
                    }
                }
            }
        }
    }
    updateContent(preview, pagesCount) {
        var itemsCount = Math.ceil(preview.visiblePages().length / pagesCount);
        var pageIndex = 0;
        var isCurrentBlock = false;
        var realIndex = 0;
        for (var i = 0; i < itemsCount; i++) {
            for (var j = 0; j < pagesCount; j++) {
                if (preview.visiblePages()[pageIndex].active()) {
                    isCurrentBlock = true;
                    realIndex = i;
                    break;
                }
                pageIndex++;
                if (preview.visiblePages().length === pageIndex) {
                    break;
                }
            }
            if (isCurrentBlock)
                break;
        }
        if (this.selectedIndexReal() !== realIndex) {
            this.selectedIndexReal(realIndex);
        }
        else {
            this.changePage(preview);
        }
    }
    updateBlockPositions(blocks, visible) {
        var height = this.previewWrapperSize().height / this.vertical();
        var width = this.previewWrapperSize().width / this.horizontal();
        for (var i = 0; i < blocks.length; i++) {
            var vertical = Math.floor((i) / this.horizontal());
            var horizontal = i - (this.horizontal() * vertical);
            var left = horizontal * width;
            if (blocks[i].visible === visible || blocks[i].visible === true) {
                blocks[i].position({
                    top: vertical * height,
                    left: left,
                    width: width,
                    height: height
                });
                blocks[i].visible = true;
            }
            else {
                blocks[i].position({
                    top: vertical * height,
                    left: blocks[i].classSet['left'] ? ((this.previewWrapperSize().width + left) * -1) : this.previewWrapperSize().width + left,
                    width: width,
                    height: height
                });
            }
        }
    }
    updateStartBlocks(galleryItem, pages) {
        var currentBlockPages = galleryItem.blocks().map(x => x.page);
        var firstPage = pages.indexOf(currentBlockPages[0]);
        if (firstPage !== -1) {
            for (var i = 0; i < firstPage; i++) {
                galleryItem.blocks.splice(i, 0, this._createBlock(pages[i], 'left', false));
            }
        }
        else {
            firstPage = currentBlockPages.indexOf(pages[0]);
            if (firstPage !== -1) {
                galleryItem.blocks.splice(0, firstPage);
            }
        }
        return firstPage;
    }
    updateLastBlocks(galleryItem, pages) {
        var currentBlockPages = galleryItem.blocks().map(x => x.page);
        var lastPage = pages.indexOf(currentBlockPages[currentBlockPages.length - 1]);
        if (lastPage === pages.length - 1) {
            return 0;
        }
        if (lastPage !== -1) {
            for (var i = lastPage + 1; i < pages.length; i++) {
                galleryItem.blocks.splice(i, 0, this._createBlock(pages[i], 'right', false));
            }
        }
        else {
            lastPage = currentBlockPages.indexOf(pages[pages.length - 1]);
            galleryItem.blocks.splice(lastPage + 1, currentBlockPages.length - lastPage);
        }
        return lastPage;
    }
    updateBlocks(galleryItem, pagesCount, preview, index, useAnimation = false) {
        var blocks = galleryItem.blocks();
        if (galleryItem.realIndex !== index
            || (blocks.length !== pagesCount || blocks[0].page.pageIndex === -1)
            || blocks.some(x => x.repaint)) {
            galleryItem.realIndex = index;
            clearTimeout(this._animationTimeout);
            var startIndex = pagesCount * index;
            if (startIndex < 0 || startIndex >= preview.visiblePages().length) {
                galleryItem.blocks([]);
                return;
            }
            var pages = [];
            for (var i = startIndex; i < startIndex + pagesCount; i++) {
                if (i >= preview.visiblePages().length) {
                    break;
                }
                pages.push(preview.visiblePages()[i]);
            }
            var first = this.updateStartBlocks(galleryItem, pages);
            var last = this.updateLastBlocks(galleryItem, pages);
            if (first === -1 && last === -1) {
                galleryItem.blocks([]);
                for (var i = 0; i < pages.length; i++) {
                    galleryItem.blocks.splice(i, 0, this._createBlock(pages[i], null, true));
                }
            }
            this.updateBlockPositions(galleryItem.blocks(), true);
            var self = this;
            if (useAnimation) {
                this._animationTimeout = setTimeout(() => {
                    self.updateBlockPositions(galleryItem.blocks(), false);
                }, 400);
            }
            else {
                self.updateBlockPositions(galleryItem.blocks(), false);
            }
        }
    }
    changePage(preview) {
        var pagesCount = this.horizontal() * this.vertical();
        var itemsCount = Math.ceil(preview.visiblePages().length / pagesCount);
        if (this.selectedIndex() === this.items().length - 1) {
            this.updateBlocks(this.items()[0], pagesCount, preview, this.selectedIndexReal() + 1);
            this.updateBlocks(this.items()[1], pagesCount, preview, this.selectedIndexReal() - 1);
        }
        else if (this.selectedIndex() === 0) {
            this.updateBlocks(this.items()[2], pagesCount, preview, this.selectedIndexReal() - 1);
            this.updateBlocks(this.items()[1], pagesCount, preview, this.selectedIndexReal() + 1);
        }
        else {
            this.updateBlocks(this.items()[0], pagesCount, preview, this.selectedIndexReal() - 1);
            this.updateBlocks(this.items()[2], pagesCount, preview, this.selectedIndexReal() + 1);
        }
        var currentGalleryItem = this.items()[this.selectedIndex()];
        this.updateBlocks(currentGalleryItem, pagesCount, preview, this.selectedIndexReal(), preview.animationSettings.zoomEnabled());
        if (!this.isAnimated()) {
            this.updatePagesVisible(preview);
        }
        this.updateCurrentBlock();
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_paginator.js



class _paginator_MobilePaginator extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(reportPreview, gallery) {
        super();
        this.visible = external_ko_["observable"](false).extend({ notify: 'always' });
        this._disposables.push(this.text = external_ko_["computed"](() => {
            setTimeout(() => { this.visible(true); }, 1);
            if (reportPreview.pageIndex() === -1) {
                return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('0 pages', 'ASPxReportsStringId.WebDocumentViewer_0Pages');
            }
            else {
                var ofText = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('of', 'ASPxReportsStringId.ToolBarItemText_OfLabel');
                var pageText = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Page', 'ASPxReportsStringId.ToolBarItemText_PageLabel');
                return pageText + ' ' + gallery.currentBlockText() + ' ' + ofText + ' ' + reportPreview.pages().length;
            }
        }));
    }
}
external_ko_["bindingHandlers"]['dxrdMobilePaginator'] = {
    init: function (element, valueAccessor) {
        var values = valueAccessor();
        var $element = external_jQuery_["fn"].constructor(element);
        var timeoutId = null;
        var hideAnimationTimeoutId = null;
        values.visible.subscribe((newVal) => {
            if (newVal) {
                $element.removeClass('dxrdp-hide').addClass('dxrdp-show');
                timeoutId && clearTimeout(timeoutId);
                timeoutId = setTimeout(() => { values.visible(false); }, 2000);
            }
            else {
                $element.removeClass('dxrdp-show').addClass('dxrdp-hide');
                hideAnimationTimeoutId && clearTimeout(hideAnimationTimeoutId);
                hideAnimationTimeoutId = setTimeout(() => {
                    $element.removeClass('dxrdp-hide');
                }, 500);
            }
        });
    }
};

// EXTERNAL MODULE: external "DevExpress.data.ArrayStore"
var external_DevExpress_data_ArrayStore_ = __webpack_require__(12);
var external_DevExpress_data_ArrayStore_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_data_ArrayStore_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/parameters/multiValuesHelper.js


class multiValuesHelper_MultiValuesHelper {
    constructor(value, items, selectAllValues) {
        this.items = items;
        this.selectedItems = external_ko_["observableArray"]([]);
        this.value = value;
        this.dataSource = items;
        var allValues;
        this.maxDisplayedTags = Math.min(((items && items.length) || 1) - 1, multiValuesHelper_MultiValuesHelper.maxDisplayedTags);
        this.isSelectedAll = external_ko_["pureComputed"]({
            read: () => this.value().length == items.length,
            write: (selectAll) => {
                var newValue = selectAll ? (allValues || (allValues = items.map(x => x.value))) : [];
                if (!Object(external_DevExpress_Analytics_Internal_["compareArrays"])(this.value.peek(), newValue))
                    this.value(newValue);
            }
        });
        if (selectAllValues)
            this.isSelectedAll(true);
    }
}
multiValuesHelper_MultiValuesHelper.maxDisplayedTags = 3;

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/_groupEditor.js

class _groupEditor_ParametersGroupEditor extends external_DevExpress_Analytics_Widgets_["PropertyGridEditor"] {
    constructor(info, level, parentDisabled, textToSearch) {
        super(info, level, parentDisabled, textToSearch);
        this.isGroupLabel = true;
    }
    _setPadding(position, value) {
        var padding = super._setPadding(position, value);
        padding['padding-' + position] = 10;
        padding['padding-bottom'] = 6;
        return padding;
    }
    createObjectProperties() {
        this.collapsed(!this.editorOptions.expanded && this.editorOptions.titleVisible);
        this.hideEditorHeader = !this.editorOptions.titleVisible;
        this.hideCollapsingImage = !this.editorOptions.showExpandButton;
        this.hideBorder = this.editorOptions.borderVisible === false;
        this.showHorizontally = this.editorOptions.orientation === 'Horizontal';
        this.level = -1;
        this.editorCreated(true);
        return super.createObjectProperties();
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/editorTemplates.js



var viewerEditorTemplates = {
    multiValue: {
        header: 'dxrd-multivalue', extendedOptions: {
            onMultiTagPreparing: (args) => {
                var selectedItemsLength = args.selectedItems.length, totalCount = args.model.items.length;
                if (selectedItemsLength === totalCount) {
                    var stringFormat = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('All selected ({0})', 'ASPxReportsStringId.WebDocumentViewer_MultiValueEditor_AllSelected');
                    args.text = Object(external_DevExpress_Analytics_Internal_["formatUnicorn"])(stringFormat, selectedItemsLength);
                }
            }
        }
    },
    groupEditor: { header: 'dx-emptyHeader', custom: 'dxrd-parameters-property-editor', content: 'dxrd-parameters-editor-content', editorType: _groupEditor_ParametersGroupEditor },
    rangeEditor: { header: 'dxrv-range-parameter' },
    multiValueEditable: { custom: 'dxrd-multivalue-editable' },
    selectBox: { header: 'dx-selectbox' },
    separatorEditor: { header: 'dx-emptyHeader', custom: 'dxrd-parameters-separator' }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/parameters/parameterHelper.js








function getEditorType(typeString) {
    if (typeString === 'multiValueWithLookUp') {
        return viewerEditorTemplates.multiValue;
    }
    if (typeString === 'multiValue') {
        return viewerEditorTemplates.multiValueEditable;
    }
    if (typeString === 'Enum') {
        return viewerEditorTemplates.selectBox;
    }
    return undefined;
}
class parameterHelper_ParameterHelper {
    constructor() {
        this._customizeParameterEditors = external_ko_["observable"]();
        this.getUnspecifiedDisplayText = () => { return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('(none)', 'PreviewStringId.NoneString'); };
    }
    _isKnownEnumType(type) {
        return !!this._knownEnums && this._knownEnums.some((knownEnumType) => { return knownEnumType.enumType === type; });
    }
    static getSerializationValue(value, dateConverter) {
        if (value instanceof Array) {
            return value.map((item) => {
                var itemValue = external_ko_["isObservable"](item === null || item === void 0 ? void 0 : item.value) ? item.value() : item;
                return (itemValue instanceof Date) ? dateConverter(itemValue) : itemValue;
            });
        }
        return (value instanceof Date) ? dateConverter(value) : value;
    }
    static createDefaultDataSource(store) {
        return new external_DevExpress_data_DataSource_default.a({
            store: store,
            paginate: true,
            pageSize: 100
        });
    }
    initialize(knownEnums, callbacks) {
        if (arguments.length > 0) {
            this._knownEnums = knownEnums;
            if (callbacks) {
                callbacks.customizeParameterEditors && this._customizeParameterEditors(callbacks.customizeParameterEditors);
                callbacks.customizeParameterLookUpSource && (this.customizeParameterLookUpSource = callbacks.customizeParameterLookUpSource);
            }
        }
    }
    createInfo(parameter) {
        var parameterDescriptor = parameter.getParameterDescriptor();
        var typeString = this.isEnumType(parameter) ? 'Enum' : external_ko_["unwrap"](parameterDescriptor.type);
        var editorType = getEditorType(typeString);
        var info = {
            propertyName: 'value',
            displayName: parameterDescriptor['displayName'],
            localizationId: parameterDescriptor['localizationId'],
            editor: editorType || Object(external_DevExpress_Analytics_Internal_["getEditorType"])(typeString),
            editorOptions: {}
        };
        if (parameterDescriptor.type === 'System.Guid') {
            info.editorOptions.isNullable = parameterDescriptor.allowNull;
        }
        this.assignValueStore(info, parameter);
        return info;
    }
    addShowCleanButton(info, parameter) {
        info.editorOptions.showClearButton = parameter.allowNull;
        info.editorOptions.placeholder = external_ko_["computed"](() => {
            if (external_ko_["unwrap"](parameter.allowNull))
                return this.getUnspecifiedDisplayText();
            return external_ko_["unwrap"](parameter.isMultiValue) ? Object(external_DevExpress_Analytics_Internal_["selectPlaceholder"])() : '';
        });
    }
    assignValueStore(info, parameter) {
        var items = this.getEnumCollection(parameter);
        info['valueStore'] = this.getItemsSource(parameter.getParameterDescriptor(), items, true);
    }
    createMultiValue(parameter, value) {
        var newValue = external_ko_["observable"]();
        if (value !== null && value !== void 0) {
            newValue(value);
        }
        return { value: newValue, getInfo: () => { return [parameter.multiValueInfo()]; } };
    }
    createMultiValueArray(fromArray, parameter, convertSingleValue) {
        var converter = convertSingleValue ? convertSingleValue : this.getValueConverter(external_ko_["unwrap"](parameter.type));
        return external_ko_["observableArray"](fromArray.map((item) => {
            return this.createMultiValue(parameter, converter(item));
        }));
    }
    isEnumType(parameter) {
        return this._isKnownEnumType(external_ko_["unwrap"](parameter.type));
    }
    getItemsSource(parameterDescriptor, items, sort) {
        if (items) {
            var newItems;
            if (this.customizeParameterLookUpSource)
                newItems = this.customizeParameterLookUpSource(parameterDescriptor, items.slice(0));
            return newItems ? newItems : parameterHelper_ParameterHelper.createDefaultDataSource(sort ? new external_DevExpress_Analytics_Internal_["SortedArrayStore"](items, 'displayValue') : new external_DevExpress_data_ArrayStore_default.a(items));
        }
        return items;
    }
    getEnumCollection(parameter) {
        var type = external_ko_["unwrap"](parameter.type);
        if (this._isKnownEnumType(type)) {
            var currentKnownEnumInfo = this._knownEnums.filter((knownEnumType) => { return knownEnumType.enumType === type; })[0];
            if (currentKnownEnumInfo && currentKnownEnumInfo.values && currentKnownEnumInfo.values.length !== 0) {
                return currentKnownEnumInfo.values.map((val) => { return { value: val.value, displayValue: val.displayName }; });
            }
        }
    }
    getParameterInfo(parameter) {
        var valueInfo = this.createInfo(parameter);
        parameter.multiValueInfo(external_jQuery_["extend"](true, {}, valueInfo, { propertyName: 'value' }));
        if (parameter.allowNull !== undefined) {
            this.addShowCleanButton(valueInfo, parameter);
        }
        if (external_ko_["unwrap"](parameter.isMultiValue)) {
            valueInfo.editor = getEditorType(parameter['isMultiValueWithLookUp'] ? 'multiValueWithLookUp' : 'multiValue');
            valueInfo['addHandler'] = () => { return this.createMultiValue(parameter); };
        }
        valueInfo.editor.custom = valueInfo.editor.custom || 'dxrd-parameters-property-editor';
        if (this._customizeParameterEditors()) {
            this._customizeParameterEditors()(parameter.getParameterDescriptor(), valueInfo);
        }
        return valueInfo;
    }
    getValueConverter(type) {
        return (val => { return val; });
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/parameters/previewParameterHelper.js





class previewParameterHelper_PreviewParameterHelper extends parameterHelper_ParameterHelper {
    constructor(knownEnums, callbacks) {
        super();
        this.callbacks = callbacks;
        this.initialize(knownEnums, callbacks);
    }
    mapLookUpValues(type, lookUpValues) {
        var converter = this.getValueConverter(type);
        return external_jQuery_["map"](lookUpValues || [], (lookUpValue) => { return { value: converter(lookUpValue.Value), displayValue: lookUpValue.Description }; });
    }
    static fixPropertyName(propertyName) {
        return propertyName.replace(/\./g, '_');
    }
    static getPrivatePropertyName(propertyName) {
        return '_' + previewParameterHelper_PreviewParameterHelper.fixPropertyName(propertyName);
    }
    createInfo(parameter) {
        var info = super.createInfo(parameter);
        info.propertyName = previewParameterHelper_PreviewParameterHelper.getPrivatePropertyName(parameter.path);
        if (!parameter.isMultiValue && (parameter.lookUpValues() || this.isEnumType(parameter))) {
            info.editorOptions.searchEnabled = true;
            if (!parameter.allowNull)
                info.editorOptions.allowClearing = false;
        }
        if (parameter.isRange) {
            info.editor = this.getRangeEditor();
            return info;
        }
        if ((parameter.type === 'System.DateTime' || parameter.isTypesCurrentType(parameter.intTypes.concat(parameter.floatTypes), parameter.type)) && !parameter.allowNull && !parameter.isMultiValue && !parameter.isMultiValueWithLookUp) {
            info.validationRules = external_DevExpress_Analytics_Widgets_Internal_["requiredValidationRules"];
        }
        else if (parameter.type === 'System.Guid') {
            info.editorOptions.displayCustomValue = false;
        }
        return info;
    }
    assignValueStore(info, parameter) {
        var _helper = this;
        if (!parameter.isMultiValueWithLookUp) {
            Object.defineProperty(info, 'valueStore', {
                get: () => {
                    var items = [];
                    var needSorting = false;
                    if (parameter.isFilteredLookUpSettings || parameter.lookUpValues() && parameter.lookUpValues().length !== 0) {
                        items = parameter.lookUpValues();
                    }
                    else {
                        items = _helper.getEnumCollection(parameter);
                        needSorting = true;
                    }
                    if (parameter.valueStoreCache)
                        return parameter.valueStoreCache;
                    var itemsSource = _helper.getItemsSource(parameter.getParameterDescriptor(), items, needSorting);
                    if (itemsSource)
                        parameter.valueStoreCache = itemsSource;
                    return itemsSource;
                },
                set: (values) => {
                    parameter.lookUpValues(values);
                }
            });
        }
    }
    isEnumType(parameter) {
        return parameter.isFilteredLookUpSettings || !!parameter.lookUpValues() || super.isEnumType(parameter);
    }
    getValueConverter(type) {
        if (type === 'System.DateTime') {
            return (dateString) => { return Object(external_DevExpress_Analytics_Internal_["parseDate"])(dateString); };
        }
        else if (['System.Int16', 'System.Int32', 'System.Int64'].indexOf(type) > -1) {
            return val => Object(external_DevExpress_Analytics_Internal_["integerValueConverter"])(val, '0');
        }
        else if (['System.Single', 'System.Double', 'System.Decimal'].indexOf(type) > -1) {
            return val => Object(external_DevExpress_Analytics_Internal_["floatValueConverter"])(val, '0');
        }
        return super.getValueConverter(type);
    }
    getRangeEditor() {
        return viewerEditorTemplates.rangeEditor;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/parameters/previewParameter.js








class previewParameter_PreviewParameter extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(parameterInfo, parameterHelper) {
        super();
        this.hasVerticalLabel = external_ko_["observable"](false);
        this.valueInfo = external_ko_["observable"]();
        this.lookUpValues = external_ko_["observableArray"]();
        this.valueStoreCache = null;
        this.multiValueInfo = external_ko_["observable"]();
        this.intTypes = ['System.Int16', 'System.Int32', 'System.Int64'];
        this.floatTypes = ['System.Single', 'System.Double', 'System.Decimal'];
        this.isTypesCurrentType = (types, type) => types.indexOf(type) > -1;
        this.tag = parameterInfo.Tag;
        this.type = parameterInfo.TypeName;
        this.isRange = parameterInfo.Value && parameterInfo.Value.Start !== undefined && parameterInfo.Value.End !== undefined;
        this.path = parameterInfo.Path;
        this.visible = external_ko_["observable"](parameterInfo.Visible);
        this.enabled = external_ko_["observable"](parameterInfo.Enabled);
        this.isFilteredLookUpSettings = parameterInfo.IsFilteredLookUpSettings;
        this.hasBindedExpressions = !!(parameterInfo.EnabledExpression || parameterInfo.VisibleExpression);
        this.hasVisibleExpression = !!parameterInfo.VisibleExpression;
        this._originalLookUpValues = parameterInfo.LookUpValues ? parameterHelper.mapLookUpValues(this.type, parameterInfo.LookUpValues || []) : null;
        this.lookUpValues(this._originalLookUpValues);
        this.lookUpValues.subscribe(() => { this.valueStoreCache = null; });
        this.isMultiValue = parameterInfo.MultiValue;
        this.selectAllValues = parameterInfo.SelectAllValues;
        this.allowNull = parameterInfo.AllowNull;
        this.isMultiValueWithLookUp = this.isMultiValue && !!this.lookUpValues();
        this._originalValue = parameterInfo.Value;
        if (parameterInfo.ValueInfo && this.isTypesCurrentType(this.intTypes.concat(this.floatTypes), this.type) && !this.isMultiValueWithLookUp) {
            this._originalValue = parameterInfo.ValueInfo;
        }
        this.getParameterDescriptor = () => {
            return {
                description: parameterInfo.Description,
                displayName: parameterInfo.Description || parameterInfo.Name,
                name: parameterInfo.Name,
                tag: parameterInfo.Tag,
                type: parameterInfo.TypeName,
                value: this._originalValue,
                multiValue: parameterInfo.MultiValue,
                selectAllValues: parameterInfo.SelectAllValues,
                allowNull: parameterInfo.AllowNull,
                hasLookUpValues: !!this.lookUpValues() || parameterHelper.isEnumType(this),
                visible: parameterInfo.Visible,
                enabled: parameterInfo.Enabled
            };
        };
        this._disposables.push(external_ko_["computed"](() => {
            var info = parameterHelper.getParameterInfo(this);
            info.propertyName = previewParameterHelper_PreviewParameterHelper.getPrivatePropertyName(parameterInfo.Path);
            info.editor.editorType = info.editor.editorType || external_DevExpress_Analytics_Widgets_["Editor"];
            info.editorOptions.hasVerticalLabel = this.hasVerticalLabel();
            this.valueInfo(info);
        }));
        this.initialize(this._originalValue, parameterHelper);
    }
    static _compareValues(value1, value2) {
        if (value1 instanceof Date && value2 instanceof Date) {
            return value1 - value2 === 0;
        }
        return value1 === value2;
    }
    safeAssignObservable(name, value) {
        if (this[name]) {
            if (previewParameter_PreviewParameter._compareValues(this[name](), value()))
                this[name](null);
            var isEqual = false;
            if (value() instanceof multiValuesHelper_MultiValuesHelper && Array.isArray(value().items))
                isEqual = Object(external_DevExpress_Analytics_Internal_["compareArrays"])(this[name]().items, value().items);
            else if (Array.isArray(value()))
                isEqual = Object(external_DevExpress_Analytics_Internal_["compareArrays"])(this[name](), value());
            if (!isEqual) {
                this[name](value());
            }
        }
        else {
            this[name] = value;
        }
    }
    initialize(value, parameterHelper) {
        var resultValue;
        if (this.isMultiValueWithLookUp) {
            this.safeAssignObservable('_value', external_ko_["observableArray"]((value || []).map((arrayItem) => {
                return parameterHelper.getValueConverter(this.type)(arrayItem);
            })));
            var multiValuesHelper = new multiValuesHelper_MultiValuesHelper(this._value, this.lookUpValues(), this.selectAllValues);
            var newItems;
            if (parameterHelper.customizeParameterLookUpSource)
                newItems = parameterHelper.customizeParameterLookUpSource(this.getParameterDescriptor(), multiValuesHelper.dataSource);
            if (newItems) {
                multiValuesHelper.dataSource = newItems;
            }
            else {
                var store = new external_DevExpress_data_ArrayStore_default.a({
                    data: multiValuesHelper.dataSource,
                    key: 'value',
                });
                multiValuesHelper.dataSource = parameterHelper_ParameterHelper.createDefaultDataSource(store);
            }
            resultValue = external_ko_["observable"](multiValuesHelper);
        }
        else if (this.isMultiValue) {
            resultValue = value ? parameterHelper.createMultiValueArray(value, this) : external_ko_["observableArray"]();
        }
        else if (this.allowNull && !value && value !== false) {
            resultValue = external_ko_["observable"](null);
        }
        else if (this.isRange) {
            var converter = parameterHelper.getValueConverter(this.type);
            resultValue = external_ko_["observableArray"]([this._originalValue.Start, this._originalValue.End].map(x => external_ko_["unwrap"](converter(x))));
        }
        else {
            resultValue = external_ko_["observable"](parameterHelper.getValueConverter(this.type)(value));
        }
        this.safeAssignObservable('value', resultValue);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/parameters/parameterPanelItemBase.js






class parameterPanelItemBase_ParameterPanelItemBase extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(parameterHelper, layoutInfo) {
        super();
        this.parameterHelper = parameterHelper;
        this.layoutInfo = layoutInfo;
        this._parameters = [];
        this._separatorNames = [];
        this._groupLayoutItems = [];
        this.isEmpty = external_ko_["observable"](true);
        this.getInfo = external_ko_["observable"]([]);
        this.parameterHelper = parameterHelper || new previewParameterHelper_PreviewParameterHelper();
    }
    _fixGroupPropertyName(name) {
        return Object(external_DevExpress_Analytics_Internal_["getUniqueName"])(Object.keys(this), name.toLocaleLowerCase().replace(/\s/g, '_'));
    }
    _proceedLayoutInfo(layoutInfo, previewParameters) {
        this.getInfo([]);
        this._groupLayoutItems = [];
        layoutInfo.layoutItems.forEach(itemInfo => {
            if (itemInfo.type === 'Group') {
                var groupItemInfo = itemInfo;
                var name = this._fixGroupPropertyName(groupItemInfo.title);
                var info = {
                    propertyName: name,
                    displayName: groupItemInfo.title,
                    editor: viewerEditorTemplates.groupEditor,
                    editorOptions: {
                        expanded: groupItemInfo.expanded,
                        titleVisible: groupItemInfo.titleVisible,
                        showExpandButton: groupItemInfo.showExpandButton,
                        borderVisible: itemInfo.borderVisible,
                        orientation: groupItemInfo.orientation
                    }
                };
                var item = new parameterPanelItemBase_ParameterPanelItemBase(this.parameterHelper, groupItemInfo);
                this[name] = item;
                this._groupLayoutItems.push(item);
                this.getInfo(this.getInfo().concat(info));
            }
            else if (itemInfo.type === 'Parameter') {
                var parameterLayoutInfo = itemInfo;
                var previewParameter = previewParameters.filter(x => x.path === parameterLayoutInfo.path)[0];
                previewParameter && this._add(previewParameter, parameterLayoutInfo);
            }
            else if (itemInfo.type === 'Separator') {
                var generatedName = this._fixGroupPropertyName('Separator');
                this[generatedName] = { name: external_ko_["observable"](generatedName) };
                info = {
                    propertyName: generatedName,
                    editor: viewerEditorTemplates.separatorEditor
                };
                this.getInfo(this.getInfo().concat(info));
                this._separatorNames.push(generatedName);
            }
        });
    }
    _add(parameter, parameterInfo) {
        if (this._parameters.indexOf(parameter) === -1) {
            this._parameters.push(parameter);
        }
        if (!parameter.visible() && !parameter.hasVisibleExpression) {
            return parameter;
        }
        parameter.hasVerticalLabel(parameterInfo.labelOrientation === 'Vertical');
        this[previewParameterHelper_PreviewParameterHelper.getPrivatePropertyName(parameter.path)] = parameter.value;
        var parameterPropertyName = previewParameterHelper_PreviewParameterHelper.fixPropertyName(parameter.path);
        if (parameter.isMultiValue || !parameter.isTypesCurrentType(parameter.intTypes.concat(parameter.floatTypes), parameter.type)) {
            this[parameterPropertyName] = parameter.value;
        }
        else {
            this[parameterPropertyName] = external_ko_["pureComputed"]({
                read: () => {
                    var parseValue = parameter.value();
                    if (parseValue === null || parseValue === undefined) {
                        return parseValue;
                    }
                    if (parameter.isTypesCurrentType(parameter.intTypes, parameter.type)) {
                        parseValue = parseInt(parseValue);
                    }
                    else if (parameter.isTypesCurrentType(parameter.floatTypes, parameter.type)) {
                        parseValue = parseFloat(parseValue);
                    }
                    return parseValue;
                },
                write: (newVal) => {
                    var expandValue = newVal;
                    if (parameter.allowNull && (expandValue === '' || expandValue === undefined)) {
                        expandValue = null;
                    }
                    else if (parameter.isTypesCurrentType(parameter.intTypes, parameter.type)) {
                        expandValue = Object(external_DevExpress_Analytics_Internal_["integerValueConverter"])(expandValue, '0');
                    }
                    else if (parameter.isTypesCurrentType(parameter.floatTypes, parameter.type)) {
                        expandValue = Object(external_DevExpress_Analytics_Internal_["floatValueConverter"])(expandValue, '0');
                    }
                    parameter.value(expandValue);
                }
            });
        }
        this.getInfo(this.getInfo().concat(parameter.valueInfo()));
        return parameter;
    }
    isPropertyDisabled(name) {
        var parameter = this._parameters.filter(parameter => previewParameterHelper_PreviewParameterHelper.getPrivatePropertyName(parameter.path) === name)[0];
        return parameter && !parameter.enabled();
    }
    isPropertyVisible(name) {
        var parameter = this._parameters.filter(parameter => previewParameterHelper_PreviewParameterHelper.getPrivatePropertyName(parameter.path) === name)[0];
        return !parameter || parameter.visible();
    }
    initialize(originalParametersInfo, parameters) {
        this._parameters.forEach((usedParameter) => {
            delete this[previewParameterHelper_PreviewParameterHelper.fixPropertyName(usedParameter.path)];
            delete this[previewParameterHelper_PreviewParameterHelper.getPrivatePropertyName(usedParameter.path)];
        });
        this._parameters = [];
        if (!originalParametersInfo) {
            this.isEmpty(true);
            this.getInfo([]);
            return;
        }
        parameters = parameters || (originalParametersInfo.parameters || []).map((parameter) => {
            var previewParameter = new previewParameter_PreviewParameter(parameter, this.parameterHelper);
            this._parameters.push(previewParameter);
            return previewParameter;
        });
        var layoutInfo = originalParametersInfo.parameterPanelLayout || this.layoutInfo;
        layoutInfo && this._proceedLayoutInfo(layoutInfo, parameters);
        this._groupLayoutItems.forEach(item => item.initialize({}, parameters));
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/parameters/previewParametersViewModel.js







class previewParametersViewModel_PreviewParametersViewModel extends parameterPanelItemBase_ParameterPanelItemBase {
    constructor(reportPreview, parameterHelper, enableKeyboardSupport) {
        super(parameterHelper);
        this._getParametersStateRequest = (argsObject) => {
            return Object(external_DevExpress_Analytics_Internal_["ajax"])(HandlerUri(), 'getParametersState', encodeURIComponent(JSON.stringify(argsObject)), (message, jqXHR, textStatus) => this._reportPreview._processError(Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cannot supply filtered lookup values to a report parameter editor', 'ASPxReportsStringId.WebDocumentViewer_GetLookUpValuesError'), jqXHR));
        };
        this._getDoneGetParametersStateHandler = (changedParameter) => {
            var parametersViewModel = this;
            return (response) => {
                try {
                    if (!response || !response.parameters) {
                        return;
                    }
                    response.parameters.forEach((parametersInfoCollection) => {
                        var matchedParameter = parametersViewModel._parameters.filter((p) => { return p.path === parametersInfoCollection.Key; })[0];
                        if (!parametersViewModel._shouldProcessParameter(matchedParameter))
                            return;
                        matchedParameter.visible(parametersInfoCollection.Value.visible);
                        matchedParameter.enabled(parametersInfoCollection.Value.enabled);
                        if (parametersViewModel._parameters.indexOf(changedParameter) < parametersViewModel._parameters.indexOf(matchedParameter)) {
                            parametersViewModel._setLookUpValues(matchedParameter, parametersInfoCollection.Value.lookUpValues, matchedParameter.visible() && !matchedParameter.allowNull);
                        }
                    });
                }
                finally {
                    parametersViewModel.parametersLoading(false);
                }
            };
        };
        this._getFailGetParametersStateHandler = () => {
            var parametersViewModel = this;
            return (jqXHRError) => {
                parametersViewModel.parametersLoading(false);
            };
        };
        this.restore = () => {
            if (this.parametersLoading()) {
                return;
            }
            try {
                this.parametersLoading(true);
                this._parameters.forEach((parameter) => {
                    if (!this._shouldProcessParameter(parameter))
                        return;
                    parameter.lookUpValues(parameter._originalLookUpValues);
                    parameter.initialize(parameter._originalValue, this.parameterHelper);
                });
            }
            finally {
                this.parameterHelper.callbacks && this.parameterHelper.callbacks.parametersReset && this.parameterHelper.callbacks.parametersReset(this, this._parameters);
                this.parametersLoading(false);
            }
        };
        this.getInfo = external_ko_["observable"](null);
        this.needToUpdateParameter = external_ko_["observable"](false);
        this.processInvisibleParameters = false;
        this.parametersLoading = external_ko_["observable"](false);
        this._reportPreview = reportPreview;
        this.validateAndSubmit = (params) => {
            var result = params && params.validationGroup && params.validationGroup.validate && params.validationGroup.validate();
            if (!result || result.isValid)
                this.submit();
        };
        this.submit = () => {
            if (this.parametersLoading())
                return;
            this.parametersLoading(true);
            var promise = reportPreview.startBuild();
            promise && promise.done((val) => { this.parametersLoading(false); });
        };
        this._disposables.push(reportPreview.originalParametersInfo.subscribe((originalParametersInfo) => {
            this.initialize(originalParametersInfo);
        }));
        this.initialize(reportPreview.originalParametersInfo());
        var notEmpty = external_ko_["pureComputed"](() => !this.isEmpty());
        this.tabInfo = new external_DevExpress_Analytics_Utils_["TabInfoWithPropertyGrid"]({
            text: 'Parameters',
            template: 'dxrd-preview-parameters',
            model: this,
            keyboardHelper: enableKeyboardSupport ? new external_DevExpress_Analytics_Internal_["AccordionKeyboardHelper"]() : undefined,
            localizationId: 'PreviewStringId.RibbonPreview_Parameters_Caption',
            imageClassName: 'parameters',
            imageTemplateName: 'dxrd-svg-tabs-parameters',
            visible: notEmpty
        });
        var popupVisibleSwitch = external_ko_["observable"](false);
        var popupVisible = external_ko_["pureComputed"]({
            read: () => {
                return notEmpty() && popupVisibleSwitch();
            },
            write: (newVal) => {
                return popupVisibleSwitch(newVal);
            }
        });
        this.popupInfo = { visible: popupVisible, notEmpty: notEmpty };
        this._disposables.push(this.popupInfo);
    }
    get _visibleParameters() {
        return this._parameters.filter((p) => { return p.visible(); });
    }
    _shouldProcessParameter(param) {
        return this.processInvisibleParameters || (param && (param.visible() || param.hasVisibleExpression || param.isFilteredLookUpSettings));
    }
    _convertLocalDateToUTC(localDate) {
        return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), localDate.getHours(), localDate.getMinutes(), localDate.getSeconds()));
    }
    subscribeParameter(parameter) {
        var needToUpdateParameter = this.needToUpdateParameter() || (this._shouldProcessParameter(parameter)) &&
            (parameter.isFilteredLookUpSettings || parameter.hasBindedExpressions);
        this.needToUpdateParameter(needToUpdateParameter);
        if (this._shouldProcessParameter(parameter)) {
            this._disposables.push((parameter.isMultiValueWithLookUp ? parameter._value : parameter.value).subscribe((newValue) => {
                if (!this.parametersLoading() && this.needToUpdateParameter()) {
                    this.updateParameters(parameter);
                }
            }));
        }
    }
    _setLookUpValues(parameter, lookUpValues, assignFirstLookUpValue) {
        if (!lookUpValues) {
            parameter.lookUpValues([]);
            return;
        }
        parameter.lookUpValues(this.parameterHelper.mapLookUpValues(parameter.type, lookUpValues));
        var _parameterValuesContainedInLookUps = this._getParameterValuesContainedInLookups(lookUpValues, parameter);
        if (parameter.isMultiValue) {
            parameter.initialize(_parameterValuesContainedInLookUps.length > 0 ? _parameterValuesContainedInLookUps : [], this.parameterHelper);
        }
        else {
            parameter.initialize(_parameterValuesContainedInLookUps[0] && _parameterValuesContainedInLookUps[0].Value || (assignFirstLookUpValue && lookUpValues.length > 0 ? lookUpValues[0].Value : null), this.parameterHelper);
        }
    }
    _getParameterValuesContainedInLookups(parameterLookUpValues, parameter) {
        if (parameterLookUpValues) {
            if (parameter.isMultiValue) {
                var selectedItems = parameter.value().value();
                return selectedItems.filter((item) => this._filterParameterValuesContainsInLookups(parameterLookUpValues, parameter.type, item).length > 0);
            }
            else {
                return this._filterParameterValuesContainsInLookups(parameterLookUpValues, parameter.type, parameter.value());
            }
        }
        return [];
    }
    _filterParameterValuesContainsInLookups(parameterLookUpValues, parameterType, value) {
        return parameterLookUpValues.filter((x) => previewParameter_PreviewParameter._compareValues(this.parameterHelper.getValueConverter(parameterType)(x.Value), value));
    }
    initialize(originalParametersInfo) {
        originalParametersInfo && this.parameterHelper.initialize(originalParametersInfo.knownEnums);
        super.initialize(originalParametersInfo);
        if (!originalParametersInfo)
            return;
        var layout = originalParametersInfo.parameterPanelLayout;
        if ((!layout || layout.layoutItems.length === 0) && originalParametersInfo.parameters) {
            this._parameters.forEach(x => this._add(x, {}));
        }
        this.isEmpty(this._visibleParameters.length === 0);
        var actualParametersInfo = [];
        this._parameters.forEach(x => {
            this.subscribeParameter(x);
            actualParametersInfo.push({ value: x.value, parameterDescriptor: x.getParameterDescriptor(), lookUpValues: x.lookUpValues });
        });
        if (this.parameterHelper.callbacks && this.parameterHelper.callbacks.parametersInitialized) {
            this.parameterHelper.callbacks.parametersInitialized(this, actualParametersInfo, this.submit, originalParametersInfo.shouldRequestParameters);
        }
        if (this._reportPreview.documentId)
            return;
        if (!originalParametersInfo.shouldRequestParameters || this.isEmpty()) {
            this.submit();
        }
        else {
            this._reportPreview.removeEmptyPages();
            this.tabInfo.active(true);
            if (this.tabInfo.visible() && external_ko_["isWriteableObservable"](this.tabInfo.collapsed))
                this.tabInfo.collapsed(false);
            this.popupInfo.visible(true);
            this._reportPreview.pageLoading(false);
        }
    }
    getPathsAfterPath(parameterPath) {
        var startIndex = 0;
        for (var index = 0; index < this._parameters.length; index++) {
            if (this._parameters[index].path === parameterPath) {
                startIndex = index + 1;
                break;
            }
        }
        var paths = this._parameters
            .filter((param, index) => {
            return this._shouldProcessParameter(param) &&
                (param.hasBindedExpressions || param.isFilteredLookUpSettings && index >= startIndex);
        })
            .map((x) => x.path);
        return paths || [];
    }
    serializeParameters() {
        var params = [], self = this;
        this._parameters.forEach((parameter) => {
            var convertItem = (item) => {
                return (parameter.type === 'System.DateTime' && !!item && (item instanceof Date)) ? self._convertLocalDateToUTC(item) : item;
            };
            var value = parameter.isMultiValueWithLookUp ? parameter._value() : parameter.value();
            if (parameter.allowNull) {
                if ((parameter.isMultiValue && Array.isArray(value) && value.length === 0) || value === '') {
                    value = null;
                }
            }
            params.push({ Value: parameterHelper_ParameterHelper.getSerializationValue(value, convertItem), Key: parameter.path, TypeName: parameter.type });
        });
        return params;
    }
    updateParameters(changedParameter) {
        var requiredParameterPaths = this.getPathsAfterPath(changedParameter.path);
        if (!requiredParameterPaths || requiredParameterPaths.length === 0) {
            return;
        }
        var argsObject = {
            reportId: this._reportPreview.reportId,
            reportUrl: this._reportPreview.reportUrl,
            requiredParameterPaths: requiredParameterPaths,
            parameters: this.serializeParameters(),
            timeZoneOffset: 0 - new Date().getTimezoneOffset()
        };
        setTimeout(() => {
            this.parametersLoading(true);
            this._getParametersStateRequest(argsObject)
                .done(this._getDoneGetParametersStateHandler(changedParameter))
                .fail(this._getFailGetParametersStateHandler());
        }, 10);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_sizeUtils.js
function updatePreviewContentSizeMobile(previewWrapperSize, $root) {
    return () => {
        var height = $root.outerHeight();
        var width = $root.outerWidth();
        previewWrapperSize({ width, height });
    };
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_editorTemplates.js
var _editorTemplates_editorTemplates = {
    rangeEditor: { header: 'dxrv-range-parameter-mobile' },
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_mobilePreviewParameterHelper.js


class _mobilePreviewParameterHelper_MobilePreviewParameterHelper extends previewParameterHelper_PreviewParameterHelper {
    getRangeEditor() {
        return _editorTemplates_editorTemplates.rangeEditor;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/utils/_mobileActionList.js




class _mobileActionList_MobileActionList extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(actions) {
        super();
        this.actions = actions;
        this.visible = external_ko_["observable"](false);
    }
    dispose() {
        this.actions.forEach(action => {
            if (action.content && action.content.dispose) {
                action.content.dispose();
                delete action.content.dispose;
            }
        });
        super.dispose();
    }
}
function getPreviewActionsMobile(options) {
    var exportToModel = {
        visible: external_ko_["observable"](false),
        items: external_ko_["pureComputed"](() => {
            var allFormats = options.exportModel._getExportFormatItems();
            var availableFormats = options.exportTypes().filter(x => allFormats.indexOf(x) !== -1);
            if (availableFormats.length > 9) {
                availableFormats.splice(9, availableFormats.length - 9);
            }
            else if (availableFormats.length < 9) {
                var notUsedFormats = allFormats.filter(x => availableFormats.indexOf(x) === -1);
                availableFormats.push.apply(availableFormats, notUsedFormats.slice(0, 9 - availableFormats.length));
            }
            return availableFormats.map((item) => {
                item.action = (model) => { options.exportModel._exportDocumentByFormat(model && model.format); };
                return item;
            });
        })
    };
    var actions = [
        {
            clickAction: () => {
                options.searchModel.searchPanelVisible(true);
                options.searchModel.editorVisible(true);
                options.searchModel.focusEditor({ currentTarget: external_jQuery_["fn"].constructor('.dxrdp-taptosearch') });
                options.reportPreview.actionsVisible(false);
            },
            imageClassName: 'dxrd-image-search',
            imageTemplateName: 'dxrd-svg-preview-search',
            visible: SearchAvailable
        },
        {
            clickAction: () => { exportToModel.visible(!exportToModel.visible()); },
            imageClassName: 'dxrd-image-export-to',
            imageTemplateName: 'dxrd-svg-preview-export-export-to',
            visible: true,
            content: {
                name: 'dxrd-menu-export-content',
                data: exportToModel,
                dispose: () => {
                    exportToModel.items().forEach(item => {
                        delete item.action;
                    });
                    exportToModel.items.dispose();
                }
            }
        },
        {
            clickAction: () => {
                options.parametersModel.popupInfo.visible(!options.parametersModel.popupInfo.visible());
                options.reportPreview.actionsVisible(false);
            },
            imageClassName: 'dxrd-image-parameters',
            imageTemplateName: 'dxrd-svg-tabs-parameters',
            visible: options.parametersModel.popupInfo.notEmpty
        }
    ];
    options.callbacks && options.callbacks.customizeActions && options.callbacks.customizeActions(actions);
    return new _mobileActionList_MobileActionList(actions);
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_previewModel.js

class _previewModel_PreviewDisposableModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(options) {
        super();
        this.rootStyle = options.rootStyle;
        this.reportPreview = options.reportPreview;
        this.parametersModel = options.parametersModel;
        this.exportModel = options.exportModel;
        this.searchModel = options.searchModel;
        this.rtl = options.rtl;
        this._disposables.push(options.reportPreview);
        this._disposables.push(options.parametersModel);
        this._disposables.push(options.exportModel);
        this._disposables.push(options.searchModel);
    }
    _addDisposable(object) {
        this._disposables.push(object);
    }
    dispose() {
        super.dispose();
        this.removeProperties();
    }
    GetParametersModel() {
        return this.parametersModel;
    }
    OpenReport(reportName) {
        this.reportPreview.openReport(reportName);
    }
    Print(pageIndex) {
        this.reportPreview.printDocument(pageIndex);
    }
    ExportTo(format, inlineResult) {
        if (!this.reportPreview.exportDisabled()) {
            this.reportPreview.exportDocumentTo(format || 'pdf', inlineResult);
        }
    }
    GetCurrentPageIndex() {
        return this.reportPreview.pageIndex();
    }
    GoToPage(pageIndex) {
        this.reportPreview.goToPage(pageIndex);
    }
    Close() {
        this.reportPreview.deactivate();
    }
    ResetParameters() {
        this.parametersModel && this.parametersModel.restore();
    }
    StartBuild() {
        this.parametersModel && this.parametersModel.submit();
    }
    PerformCustomDocumentOperation(customData, hideMessageFromUser) {
        return this.reportPreview.customDocumentOperation(customData, hideMessageFromUser);
    }
}
class PreviewModel extends _previewModel_PreviewDisposableModel {
    constructor(options) {
        super(options);
        this.documentMapModel = options.documentMapModel;
        this.tabPanel = options.tabPanel;
        this.actionLists = options.actionLists;
        this.accessibilityCompliant = options.accessibilityCompliant;
        this._disposables.push(options.documentMapModel);
        this._disposables.push(options.tabPanel);
        this._disposables.push(options.actionLists);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_mobilePreviewModel.js


class _mobilePreviewModel_MobilePreviewModel extends _previewModel_PreviewDisposableModel {
    constructor(options) {
        super(options);
        this.slideOptions = options.slideOptions;
        this.gallery = options.gallery;
        this.paginator = options.paginator;
        this.brickEventsDisabled = options.brickEventsDisabled;
        this.availableFormats = options.availableFormats;
        this._disposables.push(options.gallery);
        if (external_ko_["isComputed"](options.brickEventsDisabled))
            this._disposables.push(options.brickEventsDisabled);
        if (options.slideOptions && external_ko_["isComputed"](options.slideOptions.scrollAvailable))
            this._disposables.push(options.slideOptions.scrollAvailable);
        if (options.slideOptions && external_ko_["isComputed"](options.slideOptions.swipeEnabled))
            this._disposables.push(options.slideOptions.swipeEnabled);
        this._disposables.push(options.paginator);
        this._disposables.push(options.searchModel);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_parametersPopup.js




class _parametersPopup_ParametersPopupModelBase extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(formModel) {
        super();
        this.formModel = formModel;
        this._submit = (params) => {
            var result = params.validationGroup && params.validationGroup.validate && params.validationGroup.validate();
            if (!result || result.isValid) {
                this.formModel.submit && this.formModel.submit();
                this.visible(false);
            }
        };
        this._reset = () => {
            this.formModel.reset && this.formModel.reset();
        };
        this._cancel = () => {
            this.formModel.cancel && this.formModel.cancel();
            this.visible(false);
        };
        this.showIcons = external_ko_["observable"](false);
        this.className = '';
        this.visible = formModel.visible;
        this.cancelDisabled = external_ko_["observable"](false);
        this.actionButtons = [
            { className: 'dxrdp-parameters-reset', text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Reset', 'ASPxReportsStringId.ParametersPanel_Reset'), action: this._reset, disabled: false, visible: !!formModel.reset, id: 'dxrv-mobile-reset' },
            { className: 'dxrdp-parameters-cancel', text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'), action: this._cancel, disabled: this.cancelDisabled, visible: true, id: 'dxrv-mobile-cancel' },
            { className: 'dxrdp-parameters-submit', text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Submit', 'ASPxReportsStringId.ParametersPanel_Submit'), action: this._submit, disabled: false, visible: true, id: 'dxrv-mobile-submit' }
        ];
        this.actionIcons = [
            { className: 'dxrdp-parameters-reset dxrdp-image-parameters-reset', action: this._reset, disabled: false, visible: !!formModel.reset },
            { className: 'dxrdp-parameters-cancel dxrdp-image-parameters-cancel', action: this._cancel, disabled: this.cancelDisabled, visible: true },
            { className: 'dxrdp-parameters-submit dxrdp-image-parameters-submit', action: this._submit, disabled: false, visible: true }
        ];
    }
    cacheElementContent(element) {
        this._parametersButtonContaner = element;
        this.initVisibilityIcons();
    }
    dispose() {
        super.dispose();
        this._parametersButtonContaner = null;
    }
    initVisibilityIcons() {
        if (!this._parametersButtonContaner)
            return;
        var result = this.showIcons();
        var nodeTop = this._parametersButtonContaner.offset().top;
        this._parametersButtonContaner.find('.dxrdp-parameter-action').each((_, el) => {
            result = nodeTop !== el.getBoundingClientRect().top;
        });
        this.showIcons(result);
    }
}
class _parametersPopup_ParametersPopupModel extends _parametersPopup_ParametersPopupModelBase {
    constructor(model, _reportPreview) {
        super({ visible: model.popupInfo.visible, submit: model.submit, reset: model.restore });
        this.model = model;
        this._reportPreview = _reportPreview;
        this._disposables.push(external_ko_["computed"](() => {
            this.cancelDisabled(!this._reportPreview._currentDocumentId() || this._reportPreview.pages().length === 0);
        }));
        this.contentTemplate = 'dxrv-preview-parameters-mobile-content';
        this.title = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Parameters', 'DevExpress.XtraReports.UI.XtraReport.Parameters');
    }
}
class _parametersPopup_DateRangeParemeterPopupModel extends _parametersPopup_ParametersPopupModelBase {
    constructor(model) {
        super({
            visible: model._popupVisible, cancel: () => {
                this.model.startDate(this._oldStart);
                this.model.endDate(this._oldEnd);
                this.model.applyValue();
            }
        });
        this.model = model;
        this._dateEditorClassName = 'dxrv-daterange-editor-item';
        this._dateButtonEditorClassName = 'dxrv-daterange-editor-button';
        this.getStringDate = (value) => {
            return Object(external_DevExpress_Analytics_Internal_["formatDate"])(value());
        };
        this.focusButton = (e) => {
            var $element = external_jQuery_["fn"].constructor(e.element);
            var dateEditor = $element.siblings('.' + this._dateEditorClassName);
            var parent = $element.closest('.' + this.className);
            parent.find('.' + this._dateButtonEditorClassName).removeClass('dx-button-default');
            $element.addClass('dx-button-default');
            parent.find('.' + this._dateEditorClassName).css('zIndex', 1);
            dateEditor.css('zIndex', 2);
        };
        var submitAction = this.actionButtons.filter(action => action.id == 'dxrv-mobile-submit')[0];
        if (submitAction)
            submitAction.text = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('OK', external_DevExpress_Analytics_Internal_["StringId"].DataAccessBtnOK);
        this._disposables.push(this.textRangeValue = external_ko_["computed"]({
            read: () => { return this.model._displayText(); },
            write: (val) => { this.model.applyDate(val.range(), true); }
        }));
        this._oldStart = this.model.startDate();
        this._oldEnd = this.model.endDate();
        this.contentTemplate = 'dxrv-preview-date-range-mobile';
        this.title = Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Date Range Parameter', 'AnalyticsCoreStringId.Mobile_DateRange_Title');
        this.className = 'dxrv-preview-date-range-mobile-popup';
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/constants.js
var MobilePreviewElements = {
    Surface: 'dxrdp-surface-mobile',
    Search: 'dxrdp-search-mobile',
    Pages: 'dxrdp-pages-mobile',
    MobileActions: 'dxrdp-surface-mobile-bottom',
    Parameters: 'dxrd-menu-parameters-content'
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_sizeUtils.js




function stringToPosition(position) {
    var lowerCased = (position || '').toLowerCase();
    if (!lowerCased || lowerCased === 'default') {
        return null;
    }
    var top = lowerCased.indexOf('top') !== -1;
    var right = lowerCased.indexOf('right') !== -1;
    return { top: top, bottom: !top, right: right, left: !right };
}
function getDockedElementCallback($targetElement, $viewer, $window, selector, position = null) {
    if (!selector)
        return external_jQuery_["noop"];
    return (viewer) => {
        if ($viewer.length === 0)
            $viewer = external_jQuery_["fn"].constructor(viewer);
        if ($targetElement.length === 0)
            $targetElement = $viewer.find(selector);
        if ($window.length === 0)
            $window = external_jQuery_["fn"].constructor(window);
        if (!position || position.bottom) {
            var elementTop = parseInt($targetElement.css('bottom')) + $targetElement.height();
            var viewerTop = $viewer.offset().top;
            var viewerHeight = $viewer.height();
            var windowContentHeight = $window.height() + $window.scrollTop();
            var result = viewerTop + viewerHeight - windowContentHeight;
            if (result < viewerHeight - elementTop) {
                result = Math.max(0, result);
                var transform = 'translateY(-' + result * Object(external_DevExpress_Analytics_Internal_["accessibilityFontSizeZoomFactor"])() + 'px)';
                $targetElement.css({
                    '-webkit-transform': transform,
                    'transform': transform
                });
            }
        }
        else {
            var previewWrapper = $viewer.find('.dxrd-preview-wrapper')[0];
            var clientRect = previewWrapper && previewWrapper.getBoundingClientRect();
            if (!clientRect || clientRect.top < 0 && (clientRect.height + clientRect.top < $targetElement.outerHeight()))
                return;
            var translateY = clientRect.top < 0 ? -clientRect.top : 0;
            var transform = 'translateY(' + translateY * Object(external_DevExpress_Analytics_Internal_["accessibilityFontSizeZoomFactor"])() + 'px)';
            $targetElement.css({
                '-webkit-transform': transform,
                'transform': transform
            });
        }
    };
}
function _getRightAreaWidth($container) {
    var rightAreaWidth = ($container.find('.dxrd-right-panel:visible').outerWidth() || 0) + ($container.find('.dxrd-right-tabs:visible').outerWidth() || 0);
    return isNaN(rightAreaWidth) ? 0 : rightAreaWidth;
}
function updatePreviewContentSize(previewSize, root, rtl) {
    var _cashedSizeFactorClass = 'lg';
    return (tabPanelPosition) => {
        var $_root = external_jQuery_["fn"].constructor(root);
        var $root = $_root.find('.dxrd-preview');
        var $viewPort = external_jQuery_["fn"].constructor(root).children('.dx-designer-viewport');
        var sizeFactor = Object(external_DevExpress_Analytics_Internal_["getSizeFactor"])($_root.outerWidth());
        if (!!$viewPort.length && _cashedSizeFactorClass !== sizeFactor) {
            $viewPort.removeClass('dx-designer-viewport-' + _cashedSizeFactorClass);
            $viewPort.addClass('dx-designer-viewport-' + sizeFactor);
        }
        _cashedSizeFactorClass = sizeFactor;
        var rightAreaWidth = _getRightAreaWidth($root);
        var surfaceWidth = ($root.width() - rightAreaWidth - 10) * Object(external_DevExpress_Analytics_Internal_["accessibilityFontSizeZoomFactor"])();
        var cssStyleData = (tabPanelPosition === external_DevExpress_Analytics_Utils_["TabPanel"].Position.Left) ? { 'right': '', 'left': rightAreaWidth } : { 'right': rightAreaWidth, 'left': '' };
        $root.find('.dxrd-preview-wrapper').css(cssStyleData);
        previewSize(surfaceWidth);
    };
}
function updatePreviewZoomWithAutoFit(width, height, $element, autoFitBy = ZoomAutoBy.WholePage) {
    var $previewWrapper = $element.closest('.dxrd-preview-wrapper');
    var $preview = $element.closest('.dxrd-preview');
    if ($previewWrapper.length === 0 || $preview.length === 0) {
        return 1;
    }
    var surfaceWidth = $preview.width() - _getRightAreaWidth($preview) - 10;
    var topAreaHeight = parseFloat($previewWrapper.css('top').split('px')[0]);
    var designerHeight = $preview.outerHeight();
    var surfaceHeight = designerHeight - topAreaHeight;
    if (autoFitBy === ZoomAutoBy.PageWidth) {
        return (surfaceWidth - 12) / width;
    }
    var heightZoom = surfaceHeight / (height + 6);
    var widthZoom = surfaceWidth / width;
    return Math.min(heightZoom, widthZoom);
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_progressBarUtils.js



function getUpdateProgressBarCallback(progressBarSettings, designerModel, reportPreview, rootElement, $window = external_jQuery_["fn"].constructor(window)) {
    var keepProgressBarVisible = !progressBarSettings || progressBarSettings.keepOnVisibleArea !== false;
    var position = stringToPosition(progressBarSettings && progressBarSettings.position);
    reportPreview.progressBar.setPosition(position);
    if (!keepProgressBarVisible)
        return external_jQuery_["noop"];
    var $root = external_jQuery_["fn"].constructor(rootElement);
    var $progress = $root.find('.dxrd-preview-progress');
    var updateProgressBarPosition = getDockedElementCallback($progress, $root, $window, '.dxrd-preview-progress', position);
    designerModel._addDisposable(reportPreview.progressBar.visible.subscribe((isVisible) => {
        isVisible && updateProgressBarPosition(rootElement);
    }));
    var wrappedUpdateProgressPosition = () => {
        if (reportPreview.progressBar && external_ko_["unwrap"](reportPreview.progressBar.visible))
            updateProgressBarPosition(rootElement);
    };
    window.addEventListener('scroll', wrappedUpdateProgressPosition);
    designerModel._addDisposable({
        dispose: () => {
            window.removeEventListener('scroll', wrappedUpdateProgressPosition);
        }
    });
    return wrappedUpdateProgressPosition;
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/utils/_mobileInitializer.js



















function createMobilePreview(bindingSettings) {
    var callbacks = bindingSettings.callbacks;
    var bindingModel = bindingSettings.model;
    var bindingElement = bindingSettings.element;
    var previewWrapper = new _previewRequestWrapper_PreviewRequestWrapper(null, callbacks), reportPreview = new mobilePreview_MobileReportPreview(bindingModel.handlerUri, previewWrapper, undefined, callbacks, undefined, bindingModel.mobileModeSettings);
    var $root = external_jQuery_["fn"].constructor(bindingElement);
    var updatePreviewContentSize_ = updatePreviewContentSizeMobile(reportPreview.previewWrapperSize, $root);
    updatePreviewContentSize_();
    var gallery = new _galleryModel_GalleryModel(reportPreview, reportPreview.previewWrapperSize);
    var searchModel = new _mobileSearch_MobileSearchViewModel(reportPreview, gallery);
    var parametersModel = new previewParametersViewModel_PreviewParametersViewModel(reportPreview, new _mobilePreviewParameterHelper_MobilePreviewParameterHelper(bindingModel.parametersInfo && bindingModel.parametersInfo.knownEnums, callbacks));
    var exportModel = new exportOptionsModel_ExportOptionsModel(reportPreview);
    reportPreview.allowURLsWithJSContent = bindingModel.allowURLsWithJSContent;
    previewWrapper.initialize(reportPreview, parametersModel, searchModel);
    var exportTypes = external_ko_["observableArray"]([
        ExportFormatID.PDF, ExportFormatID.XLS, ExportFormatID.XLSX,
        ExportFormatID.RTF, ExportFormatID.DOCX, ExportFormatID.HTML,
        ExportFormatID.Text, ExportFormatID.CSV, ExportFormatID.Image
    ]);
    var mobileActions = getPreviewActionsMobile({ reportPreview, exportModel, parametersModel, searchModel, exportTypes, callbacks: callbacks });
    reportPreview.pageIndex.subscribe(function (newVal) { mobileActions.visible(false); });
    reportPreview.actionsVisible = mobileActions.visible;
    var designerModelOptions = {
        rootStyle: 'dxrd-preview dxrdp-mobile dxd-back-primary',
        reportPreview: reportPreview,
        parametersModel: parametersModel,
        exportModel: exportModel,
        searchModel: searchModel,
        rtl: reportPreview.rtlViewer,
        brickEventsDisabled: external_ko_["observable"](false),
        gallery: gallery,
        paginator: new _paginator_MobilePaginator(reportPreview, gallery),
        availableFormats: exportTypes
    };
    var designerModel = new _mobilePreviewModel_MobilePreviewModel(designerModelOptions);
    designerModel.slideOptions = {
        dispose: () => {
            var model = designerModel.slideOptions;
            if (external_ko_["isComputed"](model.swipeEnabled))
                model.swipeEnabled.dispose();
            if (external_ko_["isComputed"](model.scrollAvailable))
                model.scrollAvailable.dispose();
        },
        readerMode: reportPreview.readerMode,
        animationSettings: reportPreview.animationSettings,
        searchPanel: searchModel,
        topOffset: reportPreview.topOffset,
        previewWrapperSize: reportPreview.previewWrapperSize,
        reachedTop: reportPreview.scrollReachedTop,
        reachedLeft: reportPreview.scrollReachedLeft,
        reachedRight: reportPreview.scrollReachedRight,
        scrollAvailable: external_ko_["computed"](() => {
            return !(reportPreview.scrollReachedTop() && reportPreview.scrollReachedLeft()
                && reportPreview.scrollReachedRight() && reportPreview.scrollReachedBottom());
        }),
        disabled: reportPreview.interactionDisabled,
        swipeEnabled: external_ko_["computed"](() => {
            if (reportPreview.zoomUpdating()) {
                return false;
            }
            if (searchModel.height() > 0 && !searchModel.editorVisible()) {
                return false;
            }
            if (!reportPreview.scrollReachedLeft() && !reportPreview.scrollReachedRight()) {
                return false;
            }
            return true;
        }),
        autoFitBy: reportPreview.autoFitBy,
        galleryIsAnimated: gallery.isAnimated,
        repaintTimeout: gallery.repaintTimeout,
        zoomUpdating: reportPreview.zoomUpdating,
        brickEventsDisabled: designerModel.brickEventsDisabled
    };
    var parametersPopup = new _parametersPopup_ParametersPopupModel(parametersModel, reportPreview);
    designerModel.parts = [
        { id: MobilePreviewElements.Surface, templateName: MobilePreviewElements.Surface, model: designerModel.reportPreview },
        { id: MobilePreviewElements.Search, templateName: MobilePreviewElements.Search, model: designerModel.searchModel },
        { id: MobilePreviewElements.Pages, templateName: MobilePreviewElements.Pages, model: designerModel.paginator },
        { id: MobilePreviewElements.MobileActions, templateName: MobilePreviewElements.MobileActions, model: mobileActions },
        { id: MobilePreviewElements.Parameters, templateName: MobilePreviewElements.Parameters, model: parametersPopup },
        { id: PreviewElements.ExportTool, templateName: PreviewElements.ExportTool, model: designerModel.reportPreview.exportHandler }
    ];
    callbacks && callbacks.customizeParts && callbacks.customizeParts(designerModel.parts);
    var $actions = $root.find('.dxrdp-mobile-actions');
    var $window = external_jQuery_["fn"].constructor(window);
    var updateProgressPosition = getUpdateProgressBarCallback(bindingModel.progressBarSettings, designerModel, reportPreview, bindingElement, $window);
    var updateMobilePreviewActionsPosition_ = getDockedElementCallback($actions, $root, $window, '.dxrdp-mobile-actions');
    var updateSizesCallback = () => {
        updatePreviewContentSize_ && updatePreviewContentSize_();
        updateProgressPosition && updateProgressPosition();
    };
    designerModel.updateSurfaceSize = updateSizesCallback;
    designerModel.resizeCallback = () => {
        if (parametersModel.popupInfo.visible()) {
            parametersPopup.initVisibilityIcons();
        }
        updateSizesCallback();
        if (reportPreview.actionsVisible())
            updateMobilePreviewActionsPosition_(bindingElement);
    };
    window.addEventListener('resize', designerModel.resizeCallback);
    var onScroll = () => {
        if (reportPreview.actionsVisible())
            updateMobilePreviewActionsPosition_(bindingElement);
    };
    window.addEventListener('scroll', onScroll);
    designerModel._addDisposable({
        dispose: () => {
            window.removeEventListener('resize', designerModel.resizeCallback);
            window.removeEventListener('scroll', onScroll);
            designerModel.slideOptions.dispose();
            mobileActions.dispose();
        }
    });
    designerModel._addDisposable(reportPreview.actionsVisible.subscribe((newValue) => {
        if (newValue)
            updateMobilePreviewActionsPosition_(bindingElement);
    }));
    Object(external_DevExpress_Analytics_Internal_["appendStaticContextToRootViewModel"])(designerModel, external_DevExpress_Analytics_Internal_["staticContext"]);
    if (bindingElement && !reportPreview.canSwitchToDesigner && bindingSettings.applyBindings) {
        callbacks.beforeRender && callbacks.beforeRender(designerModel);
        external_jQuery_["fn"].constructor(bindingElement).children().remove();
        external_ko_["applyBindings"](designerModel, bindingElement);
    }
    return designerModel;
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/search/_utils.js

var formatSearchResult = function (value) { return value && (Object(external_DevExpress_Analytics_Utils_["getLocalization"])('page', 'ASPxReportsStringId.WebDocumentViewer_SearchPageNumberText') + ' ' + (value.pageIndex + 1)); };

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_actions.js






class _actions_PreviewDesignerActions extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(reportPreview, fullscreen) {
        super();
        this.actions = [];
        var designAction = {
            id: ActionId.Design,
            text: 'Design',
            displayText: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Design', 'ASPxReportsStringId.ToolBarItemText_Design'),
            imageClassName: 'dxrd-image-design',
            imageTemplateName: 'dxrd-svg-preview-report_designer',
            templateName: reportPreview.canSwitchToDesigner ? 'dxrd-toolbar-two-way-switch' : undefined,
            disabled: external_ko_["observable"](false),
            visible: reportPreview.canSwitchToDesigner,
            hotKey: { ctrlKey: true, keyCode: 68 },
            clickAction: () => {
                reportPreview.previewVisible(false);
                reportPreview.deactivate();
            }
        };
        designAction.contentData = {
            items: [
                { itemData: designAction, active: false },
                { getDisplayText: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Preview', 'ASPxReportsStringId.ToolBarItemText_Preview'), active: true }
            ]
        };
        this.actions.push(designAction);
        this.actions.push({
            id: ActionId.FullScreen,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Full Screen', 'ASPxReportsStringId.ToolBarItemText_FullScreen'),
            imageClassName: 'dxrd-image-fullscreen',
            imageTemplateName: () => fullscreen() ? 'dxrd-svg-toolbar-fullscreen-exit' : 'dxrd-svg-toolbar-fullscreen',
            disabled: external_ko_["observable"](false),
            visible: !reportPreview.canSwitchToDesigner,
            selected: fullscreen,
            clickAction: () => {
                fullscreen(!fullscreen());
            }
        });
        this._disposables.push(fullscreen);
    }
    dispose() {
        super.dispose();
        this.removeProperties();
    }
    getActions(context) {
        return this.actions;
    }
}
class _actions_ActionLists extends external_DevExpress_Analytics_Internal_["ActionListsBase"] {
    constructor(reportPreview, globalActionProviders, customizeActions, enabled) {
        super(enabled);
        this._reportPreview = reportPreview;
        this.globalActionProviders = globalActionProviders;
        this.toolbarItems = external_ko_["computed"](() => {
            var globalActions = [];
            globalActionProviders().forEach((actionProvider) => {
                globalActions.push.apply(globalActions, actionProvider.getActions(reportPreview));
            });
            customizeActions && customizeActions(globalActions);
            return globalActions;
        });
        this._disposables.push(this.toolbarItems);
    }
    processShortcut(actions, e) {
        if (this.shouldIgnoreProcessing(e))
            return;
        super.processShortcut(actions, e);
    }
    dispose() {
        super.dispose();
        this.resetObservableArray(this.globalActionProviders);
        this.removeProperties();
    }
}
class _actions_PreviewActions extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(reportPreview) {
        super();
        this.actions = [];
        var printDisabled = reportPreview.exportDisabled;
        this.actions.push({
            id: ActionId.FirstPage,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('First Page', 'ASPxReportsStringId.DocumentViewer_RibbonCommandText_FirstPage'),
            imageClassName: 'dxrd-image-preview-first',
            imageTemplateName: 'dxrd-svg-preview-first_page',
            disabled: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.pageIndex() < 1; })),
            visible: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: true, keyCode: 37 },
            clickAction: () => {
                if (reportPreview.pageIndex() > 0) {
                    reportPreview.goToPage(0);
                }
            }
        });
        this.actions.push({
            id: ActionId.PrevPage,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Previous Page', 'ASPxReportsStringId.ToolBarItemText_PreviousPage'),
            imageClassName: 'dxrd-image-preview-prev',
            imageTemplateName: 'dxrd-svg-preview-previous_page',
            disabled: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.pageIndex() < 1; })),
            visible: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: false, keyCode: 37 },
            clickAction: () => {
                if (reportPreview.pageIndex() >= 1) {
                    reportPreview.goToPage(reportPreview.pageIndex() - 1, false, 500);
                }
            },
        });
        var paginationSelectBoxViewModel = {
            id: ActionId.Pagination,
            text: 'Pagination',
            imageClassName: 'dxrd-image-pager',
            disabled: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.pages().length === 0 || reportPreview.pageIndex() === -1; })),
            visible: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.previewVisible(); })),
            clickAction: external_jQuery_["noop"],
            selectedItem: this.wrapDisposable(external_ko_["pureComputed"]({
                read: () => {
                    if (reportPreview.pageIndex() < 0) {
                        return null;
                    }
                    var items = paginationSelectBoxViewModel.pageItems();
                    return items && items.store && (items.store.length > reportPreview.pageIndex()) && items.store[reportPreview.pageIndex()];
                },
                write: (newValue) => {
                    if (!!newValue && (newValue.index || newValue.index === 0)) {
                        reportPreview.goToPage(newValue.index);
                    }
                },
                deferEvaluation: true
            })),
            pageItems: this.wrapDisposable(external_ko_["pureComputed"](() => {
                var pageCount = reportPreview.pages().length;
                if (pageCount === 0 || reportPreview.pageIndex.peek() === -1) {
                    return [];
                }
                var pagesArray = new Array();
                for (var i = 0; i < pageCount;) {
                    pagesArray.push({ index: i, text: ++i });
                }
                return {
                    store: pagesArray,
                    paginate: pageCount > 200,
                    pageSize: 100
                };
            })),
            currentPage: reportPreview._currentPageText,
            focusOut: (e) => {
                if (!paginationSelectBoxViewModel._isPageChanged(e.component.option('text'))) {
                    reportPreview._currentPageText.notifySubscribers(reportPreview._currentPageText());
                }
            },
            keyUp: (e) => {
                if (e.event.which !== 13)
                    return;
                if (paginationSelectBoxViewModel._isPageChanged(e.component.option('text'))) {
                    paginationSelectBoxViewModel.opened(false);
                }
            },
            _isPageChanged: (value) => {
                var val = parseInt && parseInt(value);
                if (!!val && val-- > 0 && val < reportPreview.pages().length) {
                    reportPreview.goToPage(val);
                    return true;
                }
                return false;
            },
            displayExpr: function (value) {
                var pageIndex = reportPreview.pageIndex.peek();
                if (pageIndex === -1 || !value || pageIndex === value.index) {
                    return reportPreview._currentPageText.peek();
                }
                else {
                    return value.text;
                }
            },
            itemTemplate: function (value) { return value.text; },
            searchMode: 'startswith',
            searchEnabled: external_ko_["observable"](true),
            searchTimeout: 10,
            opened: external_ko_["observable"](false),
            templateName: 'dxrd-preview-pager'
        };
        this.actions.push(paginationSelectBoxViewModel);
        this.actions.push({
            id: ActionId.NextPage,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Next Page', 'ASPxReportsStringId.ToolBarItemText_NextPage'),
            imageClassName: 'dxrd-image-preview-next',
            imageTemplateName: 'dxrd-svg-preview-next_page',
            disabled: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.pageIndex() < 0 || reportPreview.pageIndex() >= reportPreview.pages().length - 1; })),
            visible: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: false, keyCode: 39 },
            clickAction: () => {
                if (reportPreview.pageIndex() < reportPreview.pages().length - 1) {
                    reportPreview.goToPage(reportPreview.pageIndex() + 1, false, 500);
                }
            }
        });
        this.actions.push({
            id: ActionId.LastPage,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Last Page', 'ASPxReportsStringId.DocumentViewer_RibbonCommandText_LastPage'),
            imageClassName: 'dxrd-image-preview-last',
            imageTemplateName: 'dxrd-svg-preview-last_page',
            disabled: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.pageIndex() < 0 || reportPreview.pageIndex() >= reportPreview.pages().length - 1; })),
            visible: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: true, keyCode: 39 },
            clickAction: () => {
                if (reportPreview.pageIndex() < reportPreview.pages().length - 1) {
                    reportPreview.goToPage(reportPreview.pages().length - 1);
                }
            }
        });
        this.actions.push({
            id: ActionId.MultipageToggle,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Toggle Multipage Mode', 'ASPxReportsStringId.WebDocumentViewer_ToggleMultipageMode'),
            imageClassName: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.showMultipagePreview() ? 'dxrd-image-preview-single-page' : 'dxrd-image-preview-multipage'; })),
            imageTemplateName: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.showMultipagePreview() ? 'dxrd-svg-preview-single_page' : 'dxrd-svg-preview-multi_page_preview'; })),
            disabled: external_ko_["observable"](false),
            visible: this.wrapDisposable(external_ko_["pureComputed"](() => { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: true, keyCode: 77 },
            clickAction: () => {
                var zoom = reportPreview._zoom();
                reportPreview.showMultipagePreview(!reportPreview.showMultipagePreview());
                reportPreview.zoom(zoom);
            },
            hasSeparator: true
        });
        this.actions.push({
            id: ActionId.ZoomOut,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Zoom Out', 'DevExpress.XtraPrinting.PrintingSystemCommand.ZoomOut'),
            imageClassName: 'dxrd-image-zoomout',
            imageTemplateName: 'dxrd-svg-toolbar-zoomout',
            disabled: external_ko_["observable"](false),
            visible: true,
            zoomStep: reportPreview.zoomStep,
            hotKey: { ctrlKey: false, keyCode: 109 },
            clickAction: () => {
                var currentZoom = reportPreview.zoom();
                var zoomLevel = currentZoom > 0 ? currentZoom : reportPreview._zoom();
                reportPreview.zoom(Math.max(zoomLevel - reportPreview.zoomStep(), 0.1));
            },
            hasSeparator: true
        });
        this.actions.push({
            id: ActionId.ZoomSelector,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Zoom to Whole Page', 'DevExpress.XtraPrinting.PrintingSystemCommand.ZoomToWholePage'),
            imageClassName: 'dxrd-image-zoom',
            disabled: external_ko_["observable"](false),
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 187 },
            clickAction: () => {
                reportPreview.zoom(0);
            },
            templateName: 'dxrd-zoom-autofit-select-template',
            displayExpr: (val) => {
                if (val === ZoomAutoBy.PageWidth) {
                    return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Page Width', 'DevExpress.XtraReports.UI.XtraReport.PageWidth');
                }
                else if (Math.round(val * 100) === 0) {
                    return Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Whole Page', 'PreviewStringId.MenuItem_ZoomWholePage');
                }
                else {
                    return Math.round((val || reportPreview.zoom.peek()) * 100) + '%';
                }
            },
            onCustomItemCreating: (e) => { e.customItem = Object(external_DevExpress_Analytics_Internal_["parseZoom"])(e.text); },
            zoom: reportPreview.zoom,
            zoomLevels: reportPreview.predefinedZoomLevels,
            zoomItems: this.wrapDisposable(external_ko_["pureComputed"](() => {
                var items = reportPreview.predefinedZoomLevels.slice(0);
                if (reportPreview.showMultipagePreview() === false && items.indexOf(0) === -1) {
                    items.push(ZoomAutoBy.PageWidth);
                    items.push(ZoomAutoBy.WholePage);
                }
                return items;
            }))
        });
        this.actions.push({
            id: ActionId.ZoomIn,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Zoom In', 'DevExpress.XtraPrinting.PrintingSystemCommand.ZoomIn'),
            imageClassName: 'dxrd-image-zoomin',
            imageTemplateName: 'dxrd-svg-toolbar-zoomin',
            disabled: external_ko_["observable"](false),
            visible: true,
            zoomStep: reportPreview.zoomStep,
            hotKey: { ctrlKey: false, keyCode: 107 },
            clickAction: () => {
                var currentZoom = reportPreview.zoom();
                var zoomLevel = currentZoom > 0 ? currentZoom : reportPreview._zoom();
                reportPreview.zoom(Math.min(zoomLevel + reportPreview.zoomStep(), 10));
            }
        });
        this.actions.push({
            id: ActionId.HighlightEditingFields,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Highlight Editing Fields', 'DevExpress.XtraPrinting.PrintingSystemCommand.HighlightEditingFields'),
            imageClassName: 'dxrp-image-hightlight-editing-fields',
            imageTemplateName: 'dxrd-svg-toolbar-hightlightEditingFields',
            disabled: this.wrapDisposable(external_ko_["pureComputed"](() => reportPreview.editingFieldsProvider().length < 1)),
            visible: this.wrapDisposable(external_ko_["pureComputed"](() => {
                var available = EditablePreviewEnabled();
                var viewerVisible = reportPreview.previewVisible();
                return available && viewerVisible;
            })),
            selected: this.wrapDisposable(external_ko_["pureComputed"](() => reportPreview.editingFieldsHighlighted())),
            hotKey: { ctrlKey: true, keyCode: 72 },
            clickAction: () => {
                reportPreview.editingFieldsHighlighted(!reportPreview.editingFieldsHighlighted());
            },
            hasSeparator: true
        });
        this.actions.push({
            id: ActionId.Print,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Print', 'ASPxReportsStringId.DocumentViewer_RibbonPrintGroupText'),
            imageClassName: 'dxrd-image-print',
            imageTemplateName: 'dxrd-svg-preview-print',
            hasSeparator: true,
            disabled: printDisabled,
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 80 },
            clickAction: () => {
                if (printDisabled()) {
                    return;
                }
                reportPreview.printDocument();
            }
        });
        this.actions.push({
            id: ActionId.PrintPage,
            text: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Print Page', 'ASPxReportsStringId.DocumentViewer_RibbonCommandText_PrintPage'),
            imageClassName: 'dxrd-image-print-page',
            imageTemplateName: 'dxrd-svg-preview-print_page',
            disabled: printDisabled,
            visible: true,
            clickAction: () => {
                if (printDisabled()) {
                    return;
                }
                reportPreview.printDocument(reportPreview.pageIndex());
            }
        });
    }
    wrapDisposable(object) {
        this._disposables.push(object);
        return object;
    }
    dispose() {
        super.dispose();
        this.removeProperties();
    }
    getActions(context) {
        return this.actions;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_initializer.js





















function createDesktopPreview(bindingSettings) {
    processZoomFactor(bindingSettings.model.accessibilityCompliant);
    var enableKeyboardSupport = !!bindingSettings.model.accessibilityCompliant;
    var callbacks = bindingSettings.callbacks;
    var bindingModel = bindingSettings.model;
    var bindingElement = bindingSettings.element;
    var previewWrapper = new _previewRequestWrapper_PreviewRequestWrapper(null, callbacks), reportPreview = new reportPreview_ReportPreview(bindingModel.handlerUri, previewWrapper, undefined, callbacks, bindingModel.rtl, enableKeyboardSupport, bindingModel.exportSettings, bindingSettings.element), searchModel = new _searchViewModel_SearchViewModel(reportPreview, enableKeyboardSupport);
    var documentMapModel = new _documentMapModel_DocumentMapModel(reportPreview);
    var parametersModel = new previewParametersViewModel_PreviewParametersViewModel(reportPreview, new previewParameterHelper_PreviewParameterHelper(bindingModel.parametersInfo && bindingModel.parametersInfo.knownEnums, bindingSettings.callbacks), enableKeyboardSupport);
    var exportModel = new exportOptionsModel_ExportOptionsModel(reportPreview, enableKeyboardSupport);
    reportPreview.canSwitchToDesigner = !bindingModel.previewVisible;
    reportPreview.allowURLsWithJSContent = bindingModel.allowURLsWithJSContent;
    previewWrapper.initialize(reportPreview, parametersModel, searchModel);
    var tabPanel = new external_DevExpress_Analytics_Utils_["TabPanel"]({
        tabs: [
            parametersModel.tabInfo,
            exportModel.tabInfo,
            searchModel.tabInfo,
            documentMapModel.tabInfo
        ],
        width: 400,
        autoSelectTab: true,
        rtl: bindingModel.rtl
    });
    tabPanel.collapsed(true);
    var fullscreenEnabled = createFullscreenComputed(bindingElement, reportPreview);
    var previewActions = new _actions_PreviewActions(reportPreview);
    var designPreviewActions = new _actions_PreviewDesignerActions(reportPreview, fullscreenEnabled);
    var globalActionProviders = external_ko_["observableArray"]([previewActions, exportModel, searchModel, designPreviewActions]);
    var actionLists = new _actions_ActionLists(reportPreview, globalActionProviders, callbacks && callbacks.customizeActions, reportPreview.previewVisible);
    reportPreview.previewVisible(bindingModel.previewVisible);
    var designerModelOptions = {
        rootStyle: 'dxrd-preview dxd-back-primary-invariant' + (reportPreview.canSwitchToDesigner ? ' dxrd-designer-preview' : ''),
        reportPreview: reportPreview,
        parametersModel: parametersModel,
        exportModel: exportModel,
        searchModel: searchModel,
        documentMapModel: documentMapModel,
        tabPanel: tabPanel,
        actionLists: actionLists,
        rtl: reportPreview.rtlViewer,
        accessibilityCompliant: bindingModel.accessibilityCompliant
    };
    var designerModel = new PreviewModel(designerModelOptions);
    designerModel._addDisposable(previewActions);
    designerModel._addDisposable(designPreviewActions);
    designerModel.parts = [
        { id: PreviewElements.Toolbar, templateName: PreviewElements.Toolbar, model: { actionLists: actionLists, keyboardHelper: new external_DevExpress_Analytics_Internal_["ToolbarKeyboardHelper"](actionLists.toolbarItems), canSwitchToDesigner: reportPreview.canSwitchToDesigner } },
        { id: PreviewElements.Surface, templateName: PreviewElements.Surface, model: designerModel.reportPreview },
        { id: PreviewElements.RightPanel, templateName: PreviewElements.RightPanel, model: designerModel },
        { id: PreviewElements.ExportTool, templateName: PreviewElements.ExportTool, model: designerModel.reportPreview.exportHandler }
    ];
    callbacks && callbacks.customizeParts && callbacks.customizeParts(designerModel.parts);
    var $window = external_jQuery_["fn"].constructor(window);
    var timers = [];
    var updateProgressPosition = getUpdateProgressBarCallback(bindingModel.progressBarSettings, designerModel, reportPreview, bindingElement, $window);
    var updatePreviewContentSize_ = updatePreviewContentSize(reportPreview.previewSize, bindingElement, bindingModel.rtl);
    if (bindingModel.tabPanelSettings) {
        bindingModel.tabPanelSettings.width && tabPanel.width(parseInt(bindingModel.tabPanelSettings.width));
        bindingModel.tabPanelSettings.position && tabPanel.position(bindingModel.tabPanelSettings.position);
    }
    var updateSizesCallback = () => {
        updatePreviewContentSize_ && updatePreviewContentSize_(tabPanel.position());
        updateProgressPosition && updateProgressPosition();
    };
    designerModel.updateSurfaceSize = updateSizesCallback;
    designerModel.resizeCallback = updateSizesCallback;
    window.addEventListener('resize', designerModel.resizeCallback);
    designerModel._addDisposable(fullscreenEnabled);
    designerModel._addDisposable(fullscreenEnabled.subscribe(designerModel.resizeCallback));
    designerModel._addDisposable(tabPanel.width.subscribe(() => {
        timers.push(setTimeout(() => updatePreviewContentSize_(tabPanel.position()), 1));
    }));
    designerModel._addDisposable(tabPanel.position.subscribe((newVal) => {
        updatePreviewContentSize_(newVal);
    }));
    designerModel._addDisposable(tabPanel.isEmpty.subscribe(() => {
        timers.push(setTimeout(() => {
            updatePreviewContentSize_(tabPanel.position());
        }, 1));
    }));
    updateSizesCallback();
    designerModel._addDisposable({
        dispose: () => {
            window.removeEventListener('resize', designerModel.resizeCallback);
            designerModel.updateSurfaceSize = null;
            designerModel.resizeCallback = null;
            timers.forEach(x => clearTimeout(x));
            updatePreviewContentSize_ = null;
            updateProgressPosition = null;
        }
    });
    Object(external_DevExpress_Analytics_Internal_["appendStaticContextToRootViewModel"])(designerModel, {
        _static: Object.assign(Object.assign({}, external_DevExpress_Analytics_Internal_["staticContext"]._static), { formatSearchResult: formatSearchResult })
    }, 'dx-report-viewer');
    if (bindingElement && !reportPreview.canSwitchToDesigner && bindingSettings.applyBindings) {
        callbacks.beforeRender && callbacks.beforeRender(designerModel);
        external_jQuery_["fn"].constructor(bindingElement).children().remove();
        external_ko_["applyBindings"](designerModel, bindingElement);
    }
    return designerModel;
}
function _createPreview(bindingSettings) {
    var bindingModel = bindingSettings.model;
    bindingModel.previewVisible = bindingModel.previewVisible !== undefined ? bindingModel.previewVisible : true;
    bindingModel.allowURLsWithJSContent = bindingModel.allowURLsWithJSContent !== undefined ? bindingModel.allowURLsWithJSContent : false;
    bindingModel.accessibilityCompliant = bindingModel.accessibilityCompliant !== undefined ? bindingModel.accessibilityCompliant : false;
    bindingSettings.applyBindings = bindingSettings.applyBindings !== undefined ? bindingSettings.applyBindings : true;
    const disposableCallback = bindingSettings.callbacks && bindingSettings.callbacks.onServerError && Object(external_DevExpress_Analytics_Internal_["processErrorEvent"])(bindingSettings.callbacks.onServerError);
    external_DevExpress_config_default()({ rtlEnabled: !!bindingModel.rtl });
    if (bindingModel.remoteSettings && (bindingModel.remoteSettings.authToken || bindingModel.remoteSettings.serverUri)) {
        AsyncExportApproach(true);
        bindingModel.handlerUri = external_DevExpress_Analytics_Internal_["RequestHelper"].generateUri(bindingModel.remoteSettings.serverUri, ReportServerInvokeUri);
        SearchAvailable(false);
        EditablePreviewEnabled(false);
        ReportServerDownloadUri(external_DevExpress_Analytics_Internal_["RequestHelper"].generateUri(bindingModel.remoteSettings.serverUri, ReportServerExportUri));
        if (bindingModel.remoteSettings.authToken) {
            external_DevExpress_Analytics_Utils_["ajaxSetup"].ajaxSettings = {
                headers: {
                    'Authorization': 'Bearer ' + bindingModel.remoteSettings.authToken
                }
            };
        }
    }
    var designerModel;
    if (bindingModel.isMobile) {
        designerModel = createMobilePreview(bindingSettings);
    }
    else {
        designerModel = createDesktopPreview(bindingSettings);
    }
    if (disposableCallback) {
        designerModel._addDisposable(disposableCallback);
    }
    return designerModel;
}
function createPreview(bindingSettings) {
    if (bindingSettings.model && bindingSettings.model.localization) {
        Object(external_DevExpress_Analytics_Utils_["addCultureInfo"])({
            messages: bindingSettings.model.localization
        });
    }
    var localizationCallbacks = [];
    bindingSettings.callbacks && bindingSettings.callbacks.customizeLocalization && bindingSettings.callbacks.customizeLocalization(localizationCallbacks);
    return Object(external_DevExpress_Analytics_Internal_["resolveFromPromises"])(localizationCallbacks, () => {
        return _createPreview(bindingSettings);
    });
}
function createAndInitPreviewModel(viewerModel, element, callbacks, applyBindings) {
    return createPreviewModel(viewerModel, element, callbacks, applyBindings).done((previewModel) => {
        initPreviewModel(previewModel, viewerModel);
    });
}
function createPreviewModel(viewerModel, element, callbacks, applyBindings) {
    Object(external_DevExpress_Analytics_Internal_["initGlobalize"])(viewerModel);
    return createPreview({ model: viewerModel, element: element, callbacks: callbacks, applyBindings: applyBindings }).done(() => {
        external_jQuery_["extend"](true, cultureInfo, viewerModel.cultureInfoList);
    });
}
function initPreviewModel(previewModel, viewerModel) {
    if (viewerModel.reportId || viewerModel.documentId) {
        previewModel.reportPreview.initialize(external_jQuery_["Deferred"]().resolve(viewerModel).promise());
    }
    else {
        var unwrappedUrl = external_ko_["unwrap"](viewerModel.reportUrl);
        if (unwrappedUrl) {
            previewModel.OpenReport(unwrappedUrl);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/binding/jsReportViewerBinding.js








class jsReportViewerBinding_JSReportViewerBinding extends external_DevExpress_Analytics_Internal_["JSDesignerBindingCommon"] {
    constructor(_options, customEventRaiser) {
        super(_options, customEventRaiser);
        this._deferreds = [];
        _options.viewerModel = Object(external_DevExpress_Analytics_Internal_["_wrapModelInObservable"])(_options.viewerModel);
        this.sender = new jsReportViewer_JSReportViewer(_options.viewerModel);
        this._closeReportOnDisposing = !_options.keepReportOnComponentDisposal;
        _options.callbacks && _options.callbacks._eventSenderCreated && _options.callbacks._eventSenderCreated(this.sender);
    }
    dispose() {
        if (this._closeReportOnDisposing && this.sender && this.sender.Close)
            this.sender.Close();
        (this._deferreds || []).forEach((deferred) => {
            deferred.reject();
        });
        super.dispose();
    }
    _initializeCallbacks() {
        if (this._options.callbacks) {
            var previewEvents = eventGenerator_EventGenerator.generatePreviewEvents((eventName, args) => {
                this._fireEvent(eventName, args);
            });
            this._checkCallbackName(previewEvents);
            var availablePreviewEvents = this._generateCallbackDictionary(previewEvents);
            return availablePreviewEvents;
        }
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
        this._fireEvent('Init');
    }
    _createModel(element) {
        this._callbacks = this._initializeCallbacks();
        return createPreviewModel(this._options, element, this._callbacks, false);
    }
    applyBindings(element) {
        var _$element = external_jQuery_["fn"].constructor(element);
        _$element.addClass('dx-designer');
        if (this._options.reportPreview && this._options.parts) {
            this._applyBindings(this._options, _$element);
            return;
        }
        var requestOptions = this._options.requestOptions;
        var applyModel = () => {
            if (requestOptions && requestOptions.invokeAction) {
                this._options.handlerUri = this._getServerActionUrl(requestOptions.host, requestOptions.invokeAction);
            }
            this._deferreds.push(this._createModel(element)
                .done((previewModel) => {
                this.sender.previewModel = previewModel;
                if (this._options.reportUrl) {
                    if (external_ko_["isSubscribable"](this._options.reportUrl)) {
                        this._disposables.push(this._options.reportUrl.subscribe((newVal) => {
                            this.sender.OpenReport(newVal);
                        }));
                    }
                }
                this._createDisposeFunction(element);
                this._applyBindings(this.sender.previewModel, _$element);
                initPreviewModel(previewModel, this._options);
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
const dxReportViewerBindingName = 'dxReportViewer';
class jsReportViewerBinding_DxReportViewer extends external_DevExpress_Analytics_Internal_["DxAnalyticsComponentCommon"] {
    getBindingName() {
        return dxReportViewerBindingName;
    }
}
Object(external_DevExpress_Analytics_Widgets_Internal_["registerBaseBinding"])(dxReportViewerBindingName, '$data');
external_ko_["bindingHandlers"][dxReportViewerBindingName] = {
    init: function (element, valueAccessor) {
        new jsReportViewerBinding_JSReportViewerBinding(external_ko_["unwrap"](valueAccessor()) || {}).applyBindings(element);
        return { controlsDescendantBindings: true };
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/accessibility/_dateRangeKeyboardHelper.js

class _dateRangeKeyboardHelper_DateRangeDialogElementsKeyboardHelper extends external_DevExpress_Analytics_Internal_["AccessibilityKeyboardHelperBase"] {
    constructor(_hide, _visible) {
        super();
        this._hide = _hide;
        this._visible = _visible;
        this.controlElementClassName = 'dx-accessibility-daterange-item';
        this.predefinedDateRangesKeyboardHelper = new _dateRangeKeyboardHelper_PredefinedDateRangesKeyboardHelper(this);
        this._disposables.push(this.predefinedDateRangesKeyboardHelper, this._visible.subscribe(newVal => {
            var timeout = setTimeout(() => { newVal && this.predefinedDateRangesKeyboardHelper.focus(); }, 300);
            this._disposables.push({ dispose: () => clearTimeout(timeout) });
        }));
    }
    createControlElement(element, index) {
        return new external_DevExpress_Analytics_Internal_["ControlElementWithParentHighlight"](element, this.getContainer().getElementsByClassName('dxrv-daterange-editor-item')[index]);
    }
    itemHandleEscKey(e, index) {
        this._hide();
        return true;
    }
    itemHandleUpArrowKey(e, index) {
        if (!!(e && e.altKey)) {
            this._hide();
            return true;
        }
        return super.itemHandleUpArrowKey(e, index);
    }
    itemHandleTabKey(e, index) {
        var nextIndex = this.setFocusToNext(index);
        if (nextIndex == 0) {
            this.predefinedDateRangesKeyboardHelper.focus();
        }
        return true;
    }
    itemHandleShiftTabKey(e, index) {
        var nextIndex = this.setFocusToPrevious(index);
        if (nextIndex == 0) {
            this.predefinedDateRangesKeyboardHelper.focus();
        }
        return true;
    }
}
class _dateRangeKeyboardHelper_PredefinedDateRangesKeyboardHelper extends external_DevExpress_Analytics_Internal_["ListKeyboardHelper"] {
    constructor(owner) {
        super();
        this.owner = owner;
    }
    itemHandleEscKey(e, index) {
        this.owner.itemHandleEscKey.call(this.owner, e, 0);
        return true;
    }
    itemHandleTabKey(e, index) {
        this.owner.setFocusToNext(0);
        return true;
    }
    itemHandleShiftTabKey(e, index) {
        this.owner.setFocusToPrevious(0);
        return true;
    }
    itemHandleUpArrowKey(e, index) {
        if (!!(e && e.altKey)) {
            return this.owner.itemHandleUpArrowKey.call(this.owner, e);
        }
        return super.itemHandleUpArrowKey(e, index);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer.js



















// CONCATENATED MODULE: ./node_modules/devexpress-reporting/dx-reporting-svg-bindings.js

Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-add_field_to_column_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-add_field_to_column_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-add_field_to_data_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-add_field_to_data_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-add_field_to_filter_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-add_field_to_filter_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-add_field_to_row_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-add_field_to_row_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-add_group\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-add_group'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-add_parameter\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-add_parameter'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-add_separator\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-add_separator'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-align_bottoms\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-align_bottoms'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-align_centers\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-align_centers'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-align_lefts\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-align_lefts'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-align_middles\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-align_middles'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-align_rights\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-align_rights'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-align_tops\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-align_tops'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-align_to_grid\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-align_to_grid'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-apply_localization_service\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-apply_localization_service'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-bottom_margin\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-bottom_margin'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-bring_to_front\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-bring_to_front'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-center_horizontally\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-center_horizontally'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-center_vertically\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-center_vertically'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-convert\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-convert'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-convertation\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-convertation'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-decrease_horizontal_spacing\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-decrease_horizontal_spacing'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-decrease_vertical_spacing\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-decrease_vertical_spacing'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-delete_cell\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-delete_cell'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-delete_column\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-delete_column'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-delete_row\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-delete_row'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-detail\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-detail'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-detail_report\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-detail_report'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-distribute_columns_evenly\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-distribute_columns_evenly'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-distribute_rows_evenly\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-distribute_rows_evenly'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-fit_bounds_to_text\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-fit_bounds_to_text'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-fit_text_to_bounds\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-fit_text_to_bounds'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-fit_to_container\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-fit_to_container'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-group_footer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-group_footer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-group_header\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-group_header'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-increase_horizontal_spacing\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-increase_horizontal_spacing'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-increase_vertical_spacing\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-increase_vertical_spacing'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-insert_cell\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-insert_cell'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-insert_column_to_left\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-insert_column_to_left'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-insert_column_to_right\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-insert_column_to_right'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-insert_row_above\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-insert_row_above'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-insert_row_below\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-insert_row_below'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-make_horizontal_spacing_equal\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-make_horizontal_spacing_equal'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-make_same_height\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-make_same_height'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-make_same_sizes\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-make_same_sizes'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-make_same_width\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-make_same_width'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-make_vertical_spacing_equal\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-make_vertical_spacing_equal'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-master_report\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-master_report'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-none\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-none'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-page_footer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-page_footer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-page_header\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-page_header'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-remove_horizontal_spacing\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-remove_horizontal_spacing'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-remove_vertical_spacing\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-remove_vertical_spacing'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-report_footer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-report_footer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-report_header\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-report_header'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-reset\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-reset'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-send_to_back\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-send_to_back'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-size_to_grid\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-size_to_grid'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-subband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-subband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-top_margin\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-top_margin'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-ungroup\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-ungroup'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-vertical_detail\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-vertical_detail'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-vertical_header\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-vertical_header'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-actions-vertical_total\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-actions-vertical_total'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-bottom_margin\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-bottom_margin'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-detail\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-detail'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-detail_report\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-detail_report'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-group_footer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-group_footer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-group_header\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-group_header'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-master_report\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-master_report'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-page_footer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-page_footer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-page_header\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-page_header'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-report_footer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-report_footer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-report_header\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-report_header'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-sub_band\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-sub_band'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-top_margin\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-top_margin'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-vertical_detail\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-vertical_detail'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-vertical_header\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-vertical_header'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-bands-vertical_total\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-bands-vertical_total'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-axes\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-axes'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-axisx\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-axisx'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-axisy\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-axisy'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-chart\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-chart'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-constantline\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-constantline'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-constantlines\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-constantlines'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-defaultpane\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-defaultpane'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-diagram\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-diagram'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-legend\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-legend'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-panes\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-panes'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-series\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-series'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-seriescollection\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-seriescollection'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-title\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-title'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-chartstructure-titles\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-chartstructure-titles'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Heart_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Heart_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Heart_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Heart_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-RadioButton_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-RadioButton_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-RadioButton_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-RadioButton_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Smiley_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Smiley_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Smiley_Indeterminate\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Smiley_Indeterminate'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Smiley_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Smiley_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-StandardBox1_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-StandardBox1_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-StandardBox1_Indeterminate\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-StandardBox1_Indeterminate'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-StandardBox1_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-StandardBox1_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-StandardBox2_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-StandardBox2_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-StandardBox2_Indeterminate\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-StandardBox2_Indeterminate'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-StandardBox2_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-StandardBox2_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Star_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Star_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Star_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Star_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Thumb_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Thumb_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Thumb_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Thumb_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Toggle_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Toggle_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-Toggle_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-Toggle_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-YesNoBox_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-YesNoBox_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-YesNoBox_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-YesNoBox_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-YesNoSolidBox_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-YesNoSolidBox_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-YesNoSolidBox_Indeterminate\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-YesNoSolidBox_Indeterminate'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-YesNoSolidBox_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-YesNoSolidBox_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-YesNo_Checked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-YesNo_Checked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-checkboxglyphs-YesNo_Unchecked\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-checkboxglyphs-YesNo_Unchecked'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-color_gear\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-color_gear'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-errorPanel-collectErrors\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-errorPanel-collectErrors'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-errorPanel-error\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-errorPanel-error'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-errorPanel-information\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-errorPanel-information'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-errorPanel-notification\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-errorPanel-notification'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-errorPanel-notification_empty\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-errorPanel-notification_empty'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-errorPanel-warning\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-errorPanel-warning'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-bottommarginband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-bottommarginband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-calcbool\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-calcbool'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-calcdate\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-calcdate'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-calcdefault\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-calcdefault'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-calcfloat\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-calcfloat'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-calcinteger\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-calcinteger'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-calcstring\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-calcstring'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-component\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-component'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-components\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-components'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-detailband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-detailband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-detailreportband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-detailreportband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-formattingrule\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-formattingrule'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-formattingrules\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-formattingrules'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-groupfooterband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-groupfooterband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-groupheaderband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-groupheaderband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-master_report\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-master_report'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-pagefooterband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-pagefooterband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-pageheaderband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-pageheaderband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-parametergroup\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-parametergroup'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-parameterseparator\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-parameterseparator'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-reportfooterband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-reportfooterband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-reportheaderband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-reportheaderband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-stylemodel\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-stylemodel'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-styles\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-styles'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-subband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-subband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-topmarginband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-topmarginband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-verticaldetailband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-verticaldetailband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-verticalheaderband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-verticalheaderband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-verticaltotalband\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-verticaltotalband'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrbarcode\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrbarcode'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrcharactercomb\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrcharactercomb'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrchart\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrchart'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrcheckbox\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrcheckbox'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrcrossbandbox\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrcrossbandbox'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrcrossbandline\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrcrossbandline'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrcrosstab\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrcrosstab'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrgauge\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrgauge'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrlabel\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrlabel'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrline\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrline'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrpagebreak\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrpagebreak'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrpageinfo\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrpageinfo'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrpanel\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrpanel'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrpdfcontent\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrpdfcontent'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrpdfsignature\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrpdfsignature'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrpicturebox\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrpicturebox'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrpivotgrid\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrpivotgrid'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrrichtext\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrrichtext'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrshape\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrshape'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrsparkline\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrsparkline'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrsubreport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrsubreport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrtable\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrtable'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrtablecell\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrtablecell'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrtableofcontents\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrtableofcontents'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrtablerow\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrtablerow'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-fieldlist-xrzipcode\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-fieldlist-xrzipcode'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-landscape\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-landscape'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-menu-add_datasource\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-menu-add_datasource'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-menu-back\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-menu-back'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-menu-exit\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-menu-exit'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-menu-localization\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-menu-localization'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-menu-newreport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-menu-newreport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-menu-new_via_wizard\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-menu-new_via_wizard'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-menu-run_wizard\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-menu-run_wizard'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-multi_select\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-multi_select'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-none\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-none'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_bottomcenter\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_bottomcenter'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_bottomleft\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_bottomleft'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_bottomright\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_bottomright'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_middlecenter\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_middlecenter'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_middleleft\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_middleleft'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_middleright\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_middleright'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_topcenter\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_topcenter'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_topleft\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_topleft'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-alignment_topright\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-alignment_topright'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-image_gallery\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-image_gallery'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-size_mode_cover\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-size_mode_cover'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-size_mode_normal\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-size_mode_normal'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-size_mode_squeeze\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-size_mode_squeeze'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-size_mode_stretchimage\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-size_mode_stretchimage'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-size_mode_zoomimage\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-size_mode_zoomimage'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-toolbar_brush_options\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-toolbar_brush_options'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-toolbar_clear\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-toolbar_clear'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-toolbar_open\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-toolbar_open'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-toolbar_reset\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-toolbar_reset'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-pictureeditor-toolbar_size_mode_and_alignment\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-pictureeditor-toolbar_size_mode_and_alignment'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-portrait\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-portrait'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-csv\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-csv'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-html\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-html'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-image\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-image'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-mht\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-mht'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-pdf\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-pdf'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-rtf\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-rtf'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-txt\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-txt'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-xls\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-xls'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to-xlsx\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to-xlsx'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-export-to\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-export-to'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-export-Export\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-export-Export'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-first_page\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-first_page'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-last_page\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-last_page'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-multi_page_preview\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-multi_page_preview'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-next_page\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-next_page'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-previous_page\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-previous_page'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-print\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-print'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-print_page\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-print_page'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-print_preview\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-print_preview'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-report_designer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-report_designer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-search\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-search'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-single_page\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-single_page'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-sort_asc\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-sort_asc'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-preview-sort_desc\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-preview-sort_desc'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-reportexplorer-component\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-reportexplorer-component'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-reportexplorer-components\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-reportexplorer-components'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-reportexplorer-formatting_rule\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-reportexplorer-formatting_rule'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-reportexplorer-formatting_rules\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-reportexplorer-formatting_rules'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-reportexplorer-style\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-reportexplorer-style'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-reportexplorer-styles\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-reportexplorer-styles'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-reportexplorer-tablecell\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-reportexplorer-tablecell'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-reportexplorer-tablerow\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-reportexplorer-tablerow'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-area3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-area3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-bubbles\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-bubbles'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-candle_stick\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-candle_stick'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-doughnut\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-doughnut'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-doughnut3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-doughnut3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-full_stacked_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-full_stacked_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-full_stacked_area3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-full_stacked_area3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-full_stacked_bar\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-full_stacked_bar'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-full_stacked_bar3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-full_stacked_bar3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-full_stacked_line\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-full_stacked_line'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-full_stacked_line3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-full_stacked_line3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-full_stacked_spline_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-full_stacked_spline_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-full_stacked_spline_area3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-full_stacked_spline_area3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-funnel\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-funnel'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-funnel3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-funnel3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-gantt\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-gantt'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-line\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-line'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-line3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-line3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-manhattan_bar3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-manhattan_bar3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-nested_doughnut\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-nested_doughnut'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-pie\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-pie'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-pie3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-pie3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-point\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-point'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-polar_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-polar_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-polar_line\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-polar_line'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-polar_point\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-polar_point'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-radar_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-radar_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-radar_line\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-radar_line'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-radar_point\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-radar_point'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-range_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-range_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-range_area3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-range_area3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-range_bar\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-range_bar'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-scatter_line\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-scatter_line'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-side_by_side_bar\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-side_by_side_bar'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-side_by_side_bar3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-side_by_side_bar3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-side_by_side_full_stacked_bar\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-side_by_side_full_stacked_bar'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-side_by_side_full_stacked_bar3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-side_by_side_full_stacked_bar3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-side_by_side_gantt\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-side_by_side_gantt'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-side_by_side_range_bar\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-side_by_side_range_bar'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-side_by_side_stacked_bar\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-side_by_side_stacked_bar'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-side_by_side_stacked_bar3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-side_by_side_stacked_bar3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-spline\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-spline'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-spline3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-spline3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-spline_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-spline_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-spline_area3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-spline_area3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stacked_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stacked_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stacked_area3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stacked_area3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stacked_bar\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stacked_bar'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stacked_bar3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stacked_bar3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stacked_line\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stacked_line'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stacked_line3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stacked_line3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stacked_spline_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stacked_spline_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stacked_spline_area3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stacked_spline_area3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-step_area\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-step_area'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-step_area3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-step_area3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-step_line\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-step_line'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-step_line3d\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-step_line3d'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-stock\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-stock'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-swift_plot\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-swift_plot'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-series-waterfall\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-series-waterfall'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-tabs-collapse\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-tabs-collapse'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-tabs-expand\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-tabs-expand'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-tabs-expressions\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-tabs-expressions'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-tabs-fieldlist\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-tabs-fieldlist'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-tabs-parameters\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-tabs-parameters'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-tabs-reportexplorer\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-tabs-reportexplorer'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-tabs-search\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-tabs-search'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-bottom_center\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-bottom_center'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-bottom_left\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-bottom_left'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-bottom_right\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-bottom_right'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-left_bottom_vertical\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-left_bottom_vertical'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-left_center_vertical\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-left_center_vertical'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-left_top_vertical\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-left_top_vertical'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-right_bottom_vertical\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-right_bottom_vertical'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-right_center_vertical\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-right_center_vertical'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-right_top_vertical\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-right_top_vertical'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-top_center\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-top_center'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-top_left\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-top_left'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-titles-top_right\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-titles-top_right'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-todo-chart\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-todo-chart'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-todo-pdfcontent\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-todo-pdfcontent'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-todo-pdfsignature\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-todo-pdfsignature'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-todo-pivotgrid\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-todo-pivotgrid'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-todo-sparkline\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-todo-sparkline'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbar-fullscreen-exit\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbar-fullscreen-exit'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbar-fullscreen\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbar-fullscreen'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbar-hightlightEditingFields\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbar-hightlightEditingFields'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbar-scripts\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbar-scripts'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbar-validateBindingMode\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbar-validateBindingMode'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-barcode\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-barcode'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-charactercomb\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-charactercomb'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-chart\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-chart'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-checkbox\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-checkbox'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-crossbandbox\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-crossbandbox'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-crossbandline\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-crossbandline'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-crosstab\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-crosstab'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-gauge\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-gauge'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-label\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-label'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-line\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-line'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-pagebreak\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-pagebreak'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-pageinfo\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-pageinfo'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-panel\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-panel'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-pdfcontent\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-pdfcontent'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-pdfsignature\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-pdfsignature'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-picturebox\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-picturebox'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-pivotgrid\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-pivotgrid'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-richtext\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-richtext'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-shape\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-shape'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-sparkline\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-sparkline'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-subreport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-subreport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-table\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-table'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-tableofcontents\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-tableofcontents'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-toolbox-zipcode\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-toolbox-zipcode'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-crosstab-columns\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-crosstab-columns'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-crosstab-data\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-crosstab-data'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-crosstab-fields\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-crosstab-fields'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-crosstab-rows\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-crosstab-rows'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-CrossTabReport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-CrossTabReport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-EmptyReport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-EmptyReport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-LabelReport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-LabelReport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-StandardReport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-StandardReport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-UndefinedReport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-UndefinedReport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-VerticalReport\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-VerticalReport'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-svg-wizard-warning\'', function ($context, $element) { return { 'template': function () { return 'dxrd-svg-wizard-warning'; } }; });

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/dx-reporting-svg-templates.js

external_DevExpress_Analytics_Widgets_Internal_["SvgTemplatesEngine"].addTemplates({
    'dxrd-svg-actions-add_field_to_column_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_2_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 12h4v4h-4v-4zm0-2h4V6h-4v4zm0-6h4V0h-4v4zM6 16h4v-4H6v4zm0-6h4V6H6v4zm0-6h4V0H6v4z"/></g><path class="dxd-icon-fill" d="M0 0h4v16H0z"/></svg>',
    'dxrd-svg-actions-add_field_to_data_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_1_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><path class="dxd-icon-fill" d="M9 0C5.1 0 2 1.5 2 3.5v10C2 15.4 5.1 17 9 17s7-1.6 7-3.5v-10c0-2-3.1-3.5-7-3.5zm0 2c2.9 0 4.4 1.1 4.5 1.5C13.4 3.8 11.9 5 9 5S4.6 3.8 4.5 3.4C4.6 3.1 6.1 2 9 2z"/></svg>',
    'dxrd-svg-actions-add_field_to_filter_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="Parameters" class="dxd-icon-fill" d="M.2 3.2L7 10v9c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-9l6.8-6.8c.4-.4.1-1.2-.5-1.2H.7c-.6 0-.9.8-.5 1.2zm10.8 6V18H9V9.2L3.8 4h12.3L11 9.2z"/><path id="ZoomIn" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/></svg>',
    'dxrd-svg-actions-add_field_to_row_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_3_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><path class="dxd-icon-fill" d="M0 0h16v4H0z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 12h4v4h-4v-4zm0-2h4V6h-4v4zm-6 6h4v-4H6v4zm0-6h4V6H6v4zm-6 6h4v-4H0v4zm0-6h4V6H0v4z"/></g></svg>',
    'dxrd-svg-actions-add_group': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M15.5 11H13V8.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5V11H8.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5H11v2.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V13h2.5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5z"/><path class="dxd-icon-fill" d="M4 4h5.5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5V4zm-1-.5c0-.3.2-.5.5-.5H7V1.5c0-.3-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5H3V3.5z"/></svg>',
    'dxrd-svg-actions-add_parameter': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M9.5 10h-7c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5z"/><path class="dxd-icon-fill" d="M15.5 11H13V8.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5V11H8.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5H11v2.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V13h2.5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5z"/></svg>',
    'dxrd-svg-actions-add_separator': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M15.5 11H13V8.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5V11H8.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5H11v2.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V13h2.5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5zM12.5 7h-11c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h11c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z"/></svg>',
    'dxrd-svg-actions-align_bottoms': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 18H6c-.6 0-1-.5-1-1V3c0-.5.4-1 1-1h4c.6 0 1 .5 1 1v14c0 .5-.4 1-1 1zM18 18h-4c-.6 0-1-.5-1-1v-6c0-.6.4-1 1-1h4c.5 0 1 .4 1 1v6c0 .5-.5 1-1 1zM2 20h20v2H2z"/></svg>',
    'dxrd-svg-actions-align_centers': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M15 11H9c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1zM19 19H5c-.6 0-1-.5-1-1v-4c0-.6.4-1 1-1h14c.5 0 1 .4 1 1v4c0 .5-.5 1-1 1z"/><path class="dxd-icon-fill" d="M11 2h2v20h-2z"/></svg>',
    'dxrd-svg-actions-align_lefts': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 2h2v20H2zM13 11H7c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1zM21 19H7c-.6 0-1-.5-1-1v-4c0-.6.4-1 1-1h14c.5 0 1 .4 1 1v4c0 .5-.5 1-1 1z"/></svg>',
    'dxrd-svg-actions-align_middles': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 11h20v2H2z"/><path class="dxd-icon-fill" d="M18 20h-4c-.6 0-1-.5-1-1V5c0-.6.4-1 1-1h4c.5 0 1 .4 1 1v14c0 .5-.5 1-1 1zM10 16H6c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1z"/></svg>',
    'dxrd-svg-actions-align_rights': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 2h2v20h-2zM17 11h-6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h6c.5 0 1 .4 1 1v4c0 .6-.5 1-1 1zM17 19H3c-.5 0-1-.5-1-1v-4c0-.6.5-1 1-1h14c.5 0 1 .4 1 1v4c0 .5-.5 1-1 1z"/></svg>',
    'dxrd-svg-actions-align_tops': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 22H6c-.6 0-1-.5-1-1V7c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v14c0 .5-.4 1-1 1zM18 14h-4c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h4c.5 0 1 .4 1 1v6c0 .6-.5 1-1 1zM2 2h20v2H2z"/></svg>',
    'dxrd-svg-actions-align_to_grid': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 8V6h-5V1h-2v5H8V1H6v5H1v2h5v8H1v2h5v5h2v-5h8v5h2v-5h5v-2h-5V8h5zm-7 8H8v-2h6V8h2v8z"/></svg>',
    'dxrd-svg-actions-apply_localization_service': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 6h-9V3c0-.6-.4-1-1-1s-1 .4-1 1v3H2c-.6 0-1 .4-1 1s.4 1 1 1h12c0 2.3-.7 4.5-2 6.3-.7-1.1-1.3-2.3-1.6-3.5-.2-.5-.5-.8-1-.8-.6 0-1.1.6-.9 1.2.4 1.7 1.2 3.3 2.3 4.6C8.7 17.8 6 19 3 19c-.6 0-1 .4-1 1s.4 1 1 1c3.5 0 6.7-1.4 9-3.6 2.3 2.3 5.5 3.6 9 3.6.6 0 1-.4 1-1s-.4-1-1-1c-3 0-5.7-1.2-7.7-3.1C15 13.7 16 11 16 8h6c.6 0 1-.4 1-1s-.4-1-1-1z"/></svg>',
    'dxrd-svg-actions-bottom_margin': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M21 16V3c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1v13h18z"/></g><path class="dxd-icon-fill" d="M3 18v3c0 .5.5 1 1 1h16c.5 0 1-.5 1-1v-3H3z"/></svg>',
    'dxrd-svg-actions-bring_to_front': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 8h-5V3c0-.5-.5-1-1-1H3c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h5v5c0 .5.5 1 1 1h12c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 12H10v-4h5c.5 0 1-.5 1-1v-5h4v10z"/></svg>',
    'dxrd-svg-actions-center_horizontally': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M4 22H2V2h2v20zM22 2h-2v20h2V2zm-7 16V6c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v12c0 .5.4 1 1 1h4c.6 0 1-.5 1-1z"/></svg>',
    'dxrd-svg-actions-center_vertically': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 20h20v2H2v-2zM2 2v2h20V2H2zm16 7H6c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h12c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1z"/></svg>',
    'dxrd-svg-actions-convert': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 10l-4.7 4.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.3-2.3H11c-.6 0-1-.4-1-1s.4-1 1-1h8.2l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L23 10zM1 14l4.7 4.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L4.8 15H13c.6 0 1-.4 1-1s-.4-1-1-1H4.8l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L1 14z"/></svg>',
    'dxrd-svg-actions-convertation': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 10l-4.7 4.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.3-2.3H11c-.6 0-1-.4-1-1s.4-1 1-1h8.2l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L23 10zM1 14l4.7 4.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L4.8 15H13c.6 0 1-.4 1-1s-.4-1-1-1H4.8l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L1 14z"/></svg>',
    'dxrd-svg-actions-decrease_horizontal_spacing': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 18l-4.7 4.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L6.2 19H1c-.6 0-1-.4-1-1s.4-1 1-1h5.2l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 18zm4 0l4.7 4.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L17.8 19H23c.6 0 1-.4 1-1s-.4-1-1-1h-5.2l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L14 18zm1-11V5h-2v2h2zm-4 0V5H9v2h2zm6-5v8c0 .5.4 1 1 1h4c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1zM1 2v8c0 .5.4 1 1 1h4c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1H2c-.5 0-1 .5-1 1z"/></svg>',
    'dxrd-svg-actions-decrease_vertical_spacing': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 10l4.7-4.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L19 6.2V1c0-.6-.4-1-1-1s-1 .4-1 1v5.2l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L18 10zm0 4l4.7 4.7c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L19 17.8V23c0 .6-.4 1-1 1s-1-.4-1-1v-5.2l-2.3 2.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L18 14zM5 13h2v2H5v-2zm0-4h2v2H5V9zm6 9v4c0 .5-.5 1-1 1H2c-.5 0-1-.5-1-1v-4c0-.6.5-1 1-1h8c.5 0 1 .5 1 1zm0-16v4c0 .5-.5 1-1 1H2c-.5 0-1-.5-1-1V2c0-.6.5-1 1-1h8c.5 0 1 .5 1 1z"/></svg>',
    'dxrd-svg-actions-delete_cell': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M8 8h4v4H8z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M14 12h4V8h-4v4zm0-6h4V2h-4v4zM8 18h4v-4H8v4zM8 6h4V2H8v4zM2 18h4v-4H2v4zm0-6h4V8H2v4zm0-6h4V2H2v4z"/></g><path class="dxd-icon-fill" d="M19.4 18l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L18 16.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l2.3-2.3 2.3 2.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L19.4 18z"/></svg>',
    'dxrd-svg-actions-delete_column': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M14 12h4V8h-4v4zm0-6h4V2h-4v4zM8 18h4v-4H8v4zm0-6h4V8H8v4zm0-6h4V2H8v4z"/></g><path class="dxd-icon-fill" d="M2 2h4v16H2zM19.4 18l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L18 16.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l2.3-2.3 2.3 2.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L19.4 18z"/></svg>',
    'dxrd-svg-actions-delete_row': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M8 14h4v4H8v-4zm0-2h4V8H8v4zm0-6h4V2H8v4zM2 18h4v-4H2v4zm0-6h4V8H2v4zm0-6h4V2H2v4z"/></g><path class="dxd-icon-fill" d="M19.4 18l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L18 16.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l2.3-2.3 2.3 2.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L19.4 18zM14 2h4v10h-4z"/></svg>',
    'dxrd-svg-actions-detail': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 2H4c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-1 18H5V4h14v16zM16 9H8V7h8v2zm0 4H8v-2h8v2zm0 4H8v-2h8v2z"/></svg>',
    'dxrd-svg-actions-detail_report': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 3v19c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h3v2H5v17h14V4h-2V2h3c.5 0 1 .5 1 1zm-7-1V1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1H8v3h8V2h-2zm2 6H8v2h8V8zm0 6H8v-2h8v2zm0 4H8v-2h8v2z"/></svg>',
    'dxrd-svg-actions-distribute_columns_evenly': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 22H2c-.5 0-1-.5-1-1v-8c0-.6.5-1 1-1h8c.6 0 1 .4 1 1v8c0 .5-.4 1-1 1zm13-1v-8c0-.6-.5-1-1-1h-8c-.6 0-1 .4-1 1v8c0 .5.4 1 1 1h8c.5 0 1-.5 1-1zM21 2v3h-8V2h-2v3H3V2H1v8h2V7h8v3h2V7h8v3h2V2h-2z"/></svg>',
    'dxrd-svg-actions-distribute_rows_evenly': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 14v8c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-8c0-.5.5-1 1-1h8c.5 0 1 .5 1 1zM11 1H3c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h8c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm11 2V1h-8v2h3v8h-3v2h3v8h-3v2h8v-2h-3v-8h3v-2h-3V3h3z"/></svg>',
    'dxrd-svg-actions-fit_bounds_to_text': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 3V1c0-.6-.4-1-1-1s-1 .4-1 1v4h4c.6 0 1-.4 1-1s-.4-1-1-1h-2zM3 3H1c-.6 0-1 .4-1 1s.4 1 1 1h4V1c0-.6-.4-1-1-1S3 .4 3 1v2zM21 21v2c0 .6-.4 1-1 1s-1-.4-1-1v-4h4c.6 0 1 .4 1 1s-.4 1-1 1h-2zM3 21H1c-.6 0-1-.4-1-1s.4-1 1-1h4v4c0 .6-.4 1-1 1s-1-.4-1-1v-2z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M3 15h2v2H3v-2zm4 6h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 13h2v-2H3v2zm0-4h2V7H3v2zm4-4h2V3H7v2zm4 0h2V3h-2v2zm4 0h2V3h-2v2zm4 12h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2V7h-2v2z"/></g><path class="dxd-icon-fill" d="M16.7 14.5h-.6l-2.9-7.3c0-.1-.2-.2-.3-.2H11c-.1 0-.2.1-.3.2l-2.9 7.3h-.5c-.2 0-.3.1-.3.3v.9c0 .2.1.3.3.3h3.4c.2 0 .3-.1.3-.3v-.9c0-.2-.1-.3-.3-.3H10l.4-1h3.2l.4 1h-.7c-.2 0-.3.1-.3.3v.9c0 .2.1.3.3.3h3.4c.2 0 .3-.1.3-.3v-.9c0-.2-.1-.3-.3-.3zM11 12l1-3.1 1 3.1h-2z"/></svg>',
    'dxrd-svg-actions-fit_text_to_bounds': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 22v-2c0-.6-.4-1-1-1s-1 .4-1 1v4h4c.6 0 1-.4 1-1s-.4-1-1-1H2zM22 22h-2c-.6 0-1 .4-1 1s.4 1 1 1h4v-4c0-.6-.4-1-1-1s-1 .4-1 1v2zM2 2v2c0 .6-.4 1-1 1s-1-.4-1-1V0h4c.6 0 1 .4 1 1s-.4 1-1 1H2zM22 2h-2c-.6 0-1-.4-1-1s.4-1 1-1h4v4c0 .6-.4 1-1 1s-1-.4-1-1V2z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M0 11h2v2H0v-2zm0-2h2V7H0v2zm11-7h2V0h-2v2zM7 2h2V0H7v2zm8 0h2V0h-2v2zm-4 22h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zM0 17h2v-2H0v2zm22-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8h2v-2h-2v2z"/></g><path class="dxd-icon-fill" d="M18.5 16h-.9L13.5 5.3c-.1-.2-.3-.3-.5-.3h-2.1c-.2 0-.4.1-.5.3L6.3 16h-.8c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h4c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-.7l.7-2h4.8l.7 2h-.6c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h4.1c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5zm-8.2-4l1.6-4.8h.1l1.7 4.8h-3.4z"/></svg>',
    'dxrd-svg-actions-fit_to_container': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 22v-2c0-.6-.4-1-1-1s-1 .4-1 1v4h4c.6 0 1-.4 1-1s-.4-1-1-1H2zM22 22h-2c-.6 0-1 .4-1 1s.4 1 1 1h4v-4c0-.6-.4-1-1-1s-1 .4-1 1v2zM2 2v2c0 .6-.4 1-1 1s-1-.4-1-1V0h4c.6 0 1 .4 1 1s-.4 1-1 1H2zM22 2h-2c-.6 0-1-.4-1-1s.4-1 1-1h4v4c0 .6-.4 1-1 1s-1-.4-1-1V2z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M0 11h2v2H0v-2zm0-2h2V7H0v2zm11-7h2V0h-2v2zM7 2h2V0H7v2zm8 0h2V0h-2v2zm-4 22h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zM0 17h2v-2H0v2zm22-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8h2v-2h-2v2z"/></g><path class="dxd-icon-fill" d="M16 17H8c-.6 0-1-.5-1-1V8c0-.6.4-1 1-1h8c.5 0 1 .4 1 1v8c0 .5-.5 1-1 1z"/></svg>',
    'dxrd-svg-actions-group_footer': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M15 23H3c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1h12c.6 0 1 .5 1 1v4c0 .5-.4 1-1 1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M15 7H3c-.5 0-1-.4-1-1V2c0-.5.5-1 1-1h12c.6 0 1 .5 1 1v4c0 .6-.4 1-1 1zm7 2H8v2h14V9zm0 4H8v2h14v-2z"/></g></svg>',
    'dxrd-svg-actions-group_header': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M15 7H3c-.5 0-1-.4-1-1V2c0-.5.5-1 1-1h12c.6 0 1 .5 1 1v4c0 .6-.4 1-1 1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M15 23H3c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1h12c.6 0 1 .5 1 1v4c0 .5-.4 1-1 1zm7-14H8v2h14V9zm0 4H8v2h14v-2z"/></g></svg>',
    'dxrd-svg-actions-increase_horizontal_spacing': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M19.3 13.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3H15c-.6 0-1 .4-1 1s.4 1 1 1h5.2l-2.3 2.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L24 18l-4.7-4.7zM9 17H3.8l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L0 18l4.7 4.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L3.8 19H9c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM13 5h2v2h-2zM9 5h2v2H9zM17 2v8c0 .5.4 1 1 1h4c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1zM1 2v8c0 .5.4 1 1 1h4c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1H2c-.5 0-1 .5-1 1z"/></svg>',
    'dxrd-svg-actions-increase_vertical_spacing': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 24l4.7-4.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L19 20.2V15c0-.6-.4-1-1-1s-1 .4-1 1v5.2l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L18 24zm0-24l4.7 4.7c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L19 3.8V9c0 .6-.4 1-1 1s-1-.4-1-1V3.8l-2.3 2.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L18 0zM5 13h2v2H5zM5 9h2v2H5zM10 17H2c-.5 0-1 .4-1 1v4c0 .5.5 1 1 1h8c.5 0 1-.5 1-1v-4c0-.5-.4-1-1-1zM10 1H2c-.5 0-1 .4-1 1v4c0 .5.5 1 1 1h8c.5 0 1-.5 1-1V2c0-.5-.4-1-1-1z"/></svg>',
    'dxrd-svg-actions-insert_cell': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_5_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><path class="dxd-icon-fill" d="M6 6h4v4H6z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 12h4v4h-4v-4zm0-2h4V6h-4v4zm0-6h4V0h-4v4zM6 16h4v-4H6v4zM6 4h4V0H6v4zM0 16h4v-4H0v4zm0-6h4V6H0v4zm0-6h4V0H0v4z"/></g></svg>',
    'dxrd-svg-actions-insert_column_to_left': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_4_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 12h4v4h-4v-4zm0-2h4V6h-4v4zm0-6h4V0h-4v4zM6 16h4v-4H6v4zm0-6h4V6H6v4zm0-6h4V0H6v4z"/></g><path class="dxd-icon-fill" d="M0 0h4v16H0z"/></svg>',
    'dxrd-svg-actions-insert_column_to_right': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_6_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><path class="dxd-icon-fill" d="M12 0h4v16h-4z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M6 12h4v4H6v-4zm0-2h4V6H6v4zm0-6h4V0H6v4zM0 16h4v-4H0v4zm0-6h4V6H0v4zm0-6h4V0H0v4z"/></g></svg>',
    'dxrd-svg-actions-insert_row_above': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_7_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 12h4v4h-4v-4zm0-2h4V6h-4v4zm-6 6h4v-4H6v4zm0-6h4V6H6v4zm-6 6h4v-4H0v4zm0-6h4V6H0v4z"/></g><path class="dxd-icon-fill" d="M0 0h16v4H0z"/></svg>',
    'dxrd-svg-actions-insert_row_below': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_8_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><path class="dxd-icon-fill" d="M0 12h16v4H0z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 6h4v4h-4V6zm0-2h4V0h-4v4zm-6 6h4V6H6v4zm0-6h4V0H6v4zm-6 6h4V6H0v4zm0-6h4V0H0v4z"/></g></svg>',
    'dxrd-svg-actions-make_horizontal_spacing_equal': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 5h-4c-.5 0-1 .5-1 1v5h-3V3c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1v8H6V9c0-.5-.5-1-1-1H1c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-2h3v8c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-8h3v5c0 .5.5 1 1 1h4c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1z"/></svg>',
    'dxrd-svg-actions-make_same_height': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M9 2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h6c.6 0 1-.5 1-1V3c0-.5-.4-1-1-1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M21 8h-6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6c.5 0 1-.4 1-1V9c0-.6-.5-1-1-1z"/></g><path class="dxd-icon-fill" d="M14 2h8v2h-8zM14 20h8v2h-8z"/></svg>',
    'dxrd-svg-actions-make_same_sizes': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M16 4H8V2h8v2zm0 16H8v2h8v-2zM4 8H2v8h2V8zm18 0h-2v8h2V8z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M15 16H9c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1z"/></g></svg>',
    'dxrd-svg-actions-make_same_width': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 2H3c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M15 14H9c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1h6c.5 0 1-.5 1-1v-6c0-.5-.5-1-1-1z"/></g><path class="dxd-icon-fill" d="M20 14h2v8h-2zM2 14h2v8H2z"/></svg>',
    'dxrd-svg-actions-make_vertical_spacing_equal': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M19 23v-4c0-.5-.5-1-1-1h-5v-3h8c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1h-8V6h2c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1H9c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h2v3H3c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h8v3H6c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h12c.5 0 1-.5 1-1z"/></svg>',
    'dxrd-svg-actions-master_report': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-1 18H4V6h16v14z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M18 12H6V8h12v4zm0 2H6v4h12v-4z"/></g></svg>',
    'dxrd-svg-actions-none': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M4 0v22h16V0H4zm14 14l-2 2-4-4-4 4-2-2 4-4-4-4 2-2 4 4 4-4 2 2-4 4 4 4z"/></svg>',
    'dxrd-svg-actions-page_footer': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M3 20h3v3H4c-.5 0-1-.5-1-1v-2zm5 3h8v-3H8v3zM3 2v2h3V1H4c-.5 0-1 .5-1 1zm5 11h8V6H8v7zm-5 5h3V6H3v12zm15 5h2c.5 0 1-.5 1-1v-2h-3v3zm0-5h3V6h-3v12zm2-17h-2v3h3V2c0-.5-.5-1-1-1zM8 4h8V1H8v3z"/></g><path class="dxd-icon-fill" d="M8 15h8v3H8z"/></svg>',
    'dxrd-svg-actions-page_header': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M3 20h3v3H4c-.5 0-1-.5-1-1v-2zm5 3h8v-3H8v3zM3 2v2h3V1H4c-.5 0-1 .5-1 1zm5 16h8v-7H8v7zm-5 0h3V6H3v12zm15 5h2c.5 0 1-.5 1-1v-2h-3v3zm0-5h3V6h-3v12zm2-17h-2v3h3V2c0-.5-.5-1-1-1zM8 4h8V1H8v3z"/></g><path class="dxd-icon-fill" d="M8 6h8v3H8z"/></svg>',
    'dxrd-svg-actions-remove_horizontal_spacing': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 18l-4.7 4.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L6.2 19H1c-.6 0-1-.4-1-1s.4-1 1-1h5.2l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 18zm4 0l4.7 4.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L17.8 19H23c.6 0 1-.4 1-1s-.4-1-1-1h-5.2l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L14 18zM10 11H6c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1h4c.6 0 1 .5 1 1v8c0 .6-.4 1-1 1zm9-1V2c0-.5-.5-1-1-1h-4c-.6 0-1 .5-1 1v8c0 .6.4 1 1 1h4c.5 0 1-.4 1-1z"/></svg>',
    'dxrd-svg-actions-remove_vertical_spacing': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 10l4.7-4.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L19 6.2V1c0-.6-.4-1-1-1s-1 .4-1 1v5.2l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L18 10zm0 4l4.7 4.7c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L19 17.8V23c0 .6-.4 1-1 1s-1-.4-1-1v-5.2l-2.3 2.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L18 14zM11 14v4c0 .5-.5 1-1 1H2c-.5 0-1-.5-1-1v-4c0-.6.5-1 1-1h8c.5 0 1 .5 1 1zm-1-9H2c-.5 0-1 .4-1 1v4c0 .5.5 1 1 1h8c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1z"/></svg>',
    'dxrd-svg-actions-report_footer': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 3v19c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h3v2H5v17h14V4h-2V2h3c.5 0 1 .5 1 1zm-7-1V1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1H8v2h8V2h-2z"/><path class="dxd-icon-fill" d="M7 16h10v3H7z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M7 6h10v8H7z"/></g></svg>',
    'dxrd-svg-actions-report_header': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 3v19c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h3v2H5v17h14V4h-2V2h3c.5 0 1 .5 1 1zm-7-1V1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1H8v2h8V2h-2z"/><path class="dxd-icon-fill" d="M7 6h10v3H7z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M7 11h10v8H7z"/></g></svg>',
    'dxrd-svg-actions-reset': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 12h2c0 5.5-4.5 10-10 10-3.3 0-6.2-1.6-8-4v3c0 .6-.4 1-1 1s-1-.4-1-1v-7h7c.6 0 1 .4 1 1s-.4 1-1 1H5.1c1.4 2.4 4 4 6.9 4 4.4 0 8-3.6 8-8zm1-10c-.6 0-1 .4-1 1v3c-1.8-2.4-4.7-4-8-4C6.5 2 2 6.5 2 12h2c0-4.4 3.6-8 8-8 3 0 5.5 1.6 6.9 4H15c-.6 0-1 .4-1 1s.4 1 1 1h7V3c0-.6-.4-1-1-1z"/></svg>',
    'dxrd-svg-actions-send_to_back': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 8h-5V3c0-.5-.5-1-1-1H3c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h5v5c0 .5.5 1 1 1h12c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 12H10V10h10v10z"/></svg>',
    'dxrd-svg-actions-size_to_grid': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 8V6h-5V1h-2v5H8V1H6v5H1v2h5v8H1v2h5v5h2v-5h8v5h2v-5h5v-2h-5V8z"/></svg>',
    'dxrd-svg-actions-subband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M14 11H2c-.5 0-1-.4-1-1V4c0-.5.5-1 1-1h12c.6 0 1 .5 1 1v6c0 .6-.4 1-1 1z"/></g><path class="dxd-icon-fill" d="M22 21H10c-.6 0-1-.5-1-1v-6c0-.6.4-1 1-1h12c.5 0 1 .4 1 1v6c0 .5-.5 1-1 1z"/></svg>',
    'dxrd-svg-actions-top_margin': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M3 8v13c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V8H3z"/></g><path class="dxd-icon-fill" d="M20 2H4c-.5 0-1 .5-1 1v3h18V3c0-.5-.5-1-1-1z"/></svg>',
    'dxrd-svg-actions-ungroup': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M8 4H4.5c-.3 0-.5.2-.5.5V8H2.5c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5V4zm-.9 5.9c-.3-.3-.4-.6-.4-1s.2-.8.5-1.1l.7-.7c.3-.3.7-.5 1.1-.5s.8.2 1.1.5l.9 1.1V5.5c0-.3-.2-.5-.5-.5H5v5.5c0 .3.2.5.5.5h2.7L7.1 9.9z"/><path class="dxd-icon-fill" d="M14.2 12.8L12.4 11l1.8-1.8c.2-.2.2-.5 0-.7l-.7-.7c-.2-.2-.5-.2-.7 0L11 9.6 9.2 7.8c-.2-.2-.5-.2-.7 0l-.7.7c-.2.2-.2.5 0 .7L9.6 11l-1.8 1.8c-.2.2-.2.5 0 .7l.7.7c.2.2.5.2.7 0l1.8-1.8 1.8 1.8c.2.2.5.2.7 0l.7-.7c.2-.2.2-.5 0-.7z"/></svg>',
    'dxrd-svg-actions-vertical_detail': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M1 3h2v3H0V4c0-.5.5-1 1-1zM0 16h3V8H0v8zm5 5h14v-3H5v3zm-5-1c0 .5.5 1 1 1h2v-3H0v2zM23 3h-2v3h3V4c0-.5-.5-1-1-1zm-2 18h2c.5 0 1-.5 1-1v-2h-3v3zm-5-5h3V8h-3v8zM5 16h3V8H5v8zm16 0h3V8h-3v8zM5 6h14V3H5v3z"/></g><path class="dxd-icon-fill" d="M10 8h4v8h-4z"/></svg>',
    'dxrd-svg-actions-vertical_header': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M1 3h2v3H0V4c0-.5.5-1 1-1zM0 16h3V8H0v8zm5 5h14v-3H5v3zm-5-1c0 .5.5 1 1 1h2v-3H0v2zM23 3h-2v3h3V4c0-.5-.5-1-1-1zm-2 18h2c.5 0 1-.5 1-1v-2h-3v3zm-11-5h9V8h-9v8zm11 0h3V8h-3v8zM5 6h14V3H5v3z"/></g><path class="dxd-icon-fill" d="M5 8h3v8H5z"/></svg>',
    'dxrd-svg-actions-vertical_total': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M0 8h3v8H0V8zm0 12c0 .5.5 1 1 1h2v-3H0v2zM0 4v2h3V3H1c-.5 0-1 .5-1 1zm14 4H5v8h9V8zM5 6h14V3H5v3zm16 10h3V8h-3v8zm2-13h-2v3h3V4c0-.5-.5-1-1-1zm-2 18h2c.5 0 1-.5 1-1v-2h-3v3zM5 21h14v-3H5v3z"/></g><path class="dxd-icon-fill" d="M16 8h3v8h-3z"/></svg>',
    'dxrd-svg-bands-bottom_margin': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M6 20h10v2H6z"/><path class="dxd-icon-fill dxd-opacity-80" d="M6 0h10v2H6zM18 0h2v2h-2zM2 4h2v14H2zM6 4h10v14H6z"/><path class="dxd-icon-fill" d="M18 20h2v2h-2zM2 20h2v2H2z"/><path class="dxd-icon-fill dxd-opacity-80" d="M18 4h2v14h-2zM2 0h2v2H2z"/></svg>',
    'dxrd-svg-bands-detail': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v22h18V0H2zm14 18H6v-2h10v2zm0-4H6v-2h10v2zm0-4H6V8h10v2zm0-4H6V4h10v2z"/></svg>',
    'dxrd-svg-bands-detail_report': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M16 2h-2V0H8v2H6v2h10z"/><path class="dxd-icon-fill" d="M18 2v4H4V2H2v22h18V2h-2zm-2 18H6v-2h10v2zm0-4H6v-2h10v2zm0-4H6v-2h10v2z"/></svg>',
    'dxrd-svg-bands-group_footer': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M0 0h12v6H0z"/><path class="dxd-icon-fill" d="M0 16h12v6H0z"/><path class="dxd-icon-fill dxd-opacity-80" d="M8 8h14v2H8zM8 12h14v2H8z"/></svg>',
    'dxrd-svg-bands-group_header': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M0 16h12v6H0z"/><path class="dxd-icon-fill" d="M0 0h12v6H0z"/><path class="dxd-icon-fill dxd-opacity-80" d="M8 12h14v2H8zM8 8h14v2H8z"/></svg>',
    'dxrd-svg-bands-master_report': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 2h-2V0H6v2H4v2h8zM14 14h10v4H14zM14 20h10v4H14z"/><path class="dxd-icon-fill" d="M12 12h4V2h-2v4H2V2H0v20h12z"/></svg>',
    'dxrd-svg-bands-page_footer': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M6 0h10v2H6zM6 4h10v8H6z"/><path class="dxd-icon-fill" d="M6 14h10v4H6z"/><path class="dxd-icon-fill dxd-opacity-80" d="M18 0h2v2h-2zM6 20h10v2H6zM2 20h2v2H2zM2 4h2v14H2zM18 20h2v2h-2zM2 0h2v2H2zM18 4h2v14h-2z"/></svg>',
    'dxrd-svg-bands-page_header': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M6 10h10v8H6zM6 20h10v2H6zM18 0h2v2h-2zM2 4h2v14H2z"/><path class="dxd-icon-fill" d="M6 4h10v4H6z"/><path class="dxd-icon-fill dxd-opacity-80" d="M6 0h10v2H6zM18 20h2v2h-2zM2 20h2v2H2zM2 0h2v2H2zM18 4h2v14h-2z"/></svg>',
    'dxrd-svg-bands-report_footer': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M16 2h-2V0H8v2H6v2h10zM6 22h10v2H6z"/><path class="dxd-icon-fill" d="M6 16h10v4H6z"/><path class="dxd-icon-fill dxd-opacity-80" d="M18 2h2v2h-2zM6 6h10v8H6zM2 6h2v14H2zM18 22h2v2h-2zM2 22h2v2H2zM2 2h2v2H2zM18 6h2v14h-2z"/></svg>',
    'dxrd-svg-bands-report_header': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M16 2h-2V0H8v2H6v2h10zM6 22h10v2H6z"/><path class="dxd-icon-fill" d="M6 6h10v4H6z"/><path class="dxd-icon-fill dxd-opacity-80" d="M18 2h2v2h-2zM6 12h10v8H6zM2 6h2v14H2zM18 22h2v2h-2zM2 22h2v2H2zM2 2h2v2H2zM18 6h2v14h-2z"/></svg>',
    'dxrd-svg-bands-sub_band': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M2 4h14v6H2z"/><path class="dxd-icon-fill" d="M8 14h14v6H8z"/></svg>',
    'dxrd-svg-bands-top_margin': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M6 20h10v2H6z"/><path class="dxd-icon-fill" d="M6 0h10v2H6zM18 0h2v2h-2z"/><path class="dxd-icon-fill dxd-opacity-80" d="M2 4h2v14H2zM6 4h10v14H6zM18 20h2v2h-2zM2 20h2v2H2zM18 4h2v14h-2z"/><path class="dxd-icon-fill" d="M2 0h2v2H2z"/></svg>',
    'dxrd-svg-bands-vertical_detail': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g id="VerticalDetail"><path class="dxd-icon-fill" d="M10 6h4v10h-4z"/><path class="dxd-icon-fill" d="M2 4H0V2h2v2zm0 2H0v10h2V6zm0 12H0v2h2v-2zM20 6h-4v10h4V6zM8 6H4v10h4V6zm12-4H4v2h16V2zm4 0h-2v2h2V2zm0 4h-2v10h2V6zm0 12h-2v2h2v-2zM4 20h16v-2H4v2z" opacity=".72"/></g></svg>',
    'dxrd-svg-bands-vertical_header': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g id="VerticalHeader"><path class="dxd-icon-fill" d="M4 6h4v10H4z"/><path class="dxd-icon-fill" d="M2 4H0V2h2v2zm0 2H0v10h2V6zm0 12H0v2h2v-2zM20 6H10v10h10V6zm0-4H4v2h16V2zm4 0h-2v2h2V2zm0 4h-2v10h2V6zm0 12h-2v2h2v-2zM4 20h16v-2H4v2z" opacity=".72"/></g></svg>',
    'dxrd-svg-bands-vertical_total': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g id="VerticalTotal"><path class="dxd-icon-fill" d="M16 6h4v10h-4z"/><path class="dxd-icon-fill" d="M2 4H0V2h2v2zm0 2H0v10h2V6zm0 12H0v2h2v-2zM14 6H4v10h10V6zm6-4H4v2h16V2zm4 0h-2v2h2V2zm0 4h-2v10h2V6zm0 12h-2v2h2v-2zM4 20h16v-2H4v2z" opacity=".72"/></g></svg>',
    'dxrd-svg-chartstructure-axes': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M24 20H4V0H2v4H0v2h2v4H0v2h2v4H0v2h2v4h4v2h2v-2h4v2h2v-2h4v2h2v-2h4z"/><path class="dxd-icon-fill" d="M24 6V4h-2V2h-2V0h-2v2h-4V0h-2v2H8V0H6v4h14v14h4v-2h-2v-4h2v-2h-2V6z"/><path class="dxd-icon-fill dxd-opacity-80" d="M10 14V6H6v2h2v4H6v2h2v2h2v2h2v-2h4v2h2v-4z"/></svg>',
    'dxrd-svg-chartstructure-axisx': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 17l-6-5v4h-4v-2h-2v2H6v-2H4v2H0v2h4v2h2v-2h4v2h2v-2h4v4zM4 8h2V6h4v4l6-5-6-5v4H6V2H4v2H0v2h4z"/></svg>',
    'dxrd-svg-chartstructure-axisy': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M17 0l-5 6h4v4h-2v2h2v4h-2v2h2v4h2v-4h2v-2h-2v-4h2v-2h-2V6h4zM8 18v-2H6v-4h4L5 6l-5 6h4v4H2v2h2v4h2v-4z"/></svg>',
    'dxrd-svg-chartstructure-chart': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M10 22V12H0c.5 5 5 9.5 10 10zM12 12v10c5-.5 9.5-5 10-10H12z"/><path class="dxd-icon-fill" d="M0 6h4v4H0zM6 4h4v6H6zM12 2h4v8h-4z"/><g><path class="dxd-icon-fill" d="M18 0h4v10h-4z"/></g></svg>',
    'dxrd-svg-chartstructure-constantline': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M24 6h-6V0h-2v6H0v2h16v16h2V8h6z"/></svg>',
    'dxrd-svg-chartstructure-constantlines': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M24 20H4V0H2v4H0v2h2v4H0v2h2v4H0v2h2v4h4v2h2v-2h4v2h2v-2h4v2h2v-2h4z"/><path class="dxd-icon-fill" d="M24 6V4h-4V0h-2v4h-4V0h-2v4H6v2h6v4H6v2h6v6h2v-6h4v6h2v-6h4v-2h-4V6h4zm-10 4V6h4v4h-4z"/></svg>',
    'dxrd-svg-chartstructure-defaultpane': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0h10v22H0z"/><path class="dxd-icon-fill dxd-opacity-80" d="M12 0v10h10V0H12zm8 8h-6V2h6v6zM12 22h10V12H12v10zm2-8h6v6h-6v-6z"/></svg>',
    'dxrd-svg-chartstructure-diagram': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M0 16h4v6H0zM12 10h4v12h-4z"/><path class="dxd-icon-fill" d="M18 2h4v20h-4zM6 6h4v16H6z"/></svg>',
    'dxrd-svg-chartstructure-legend': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0h10v10H0z"/><path class="dxd-icon-fill dxd-opacity-80" d="M0 12h10v10H0z"/><path class="dxd-icon-fill" d="M12 2h10v2H12zM12 6h10v2H12zM12 14h10v2H12zM12 18h10v2H12z"/></svg>',
    'dxrd-svg-chartstructure-panes': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0h10v22H0z"/><path class="dxd-icon-fill" d="M12 0v10h10V0H12z"/><path class="dxd-icon-fill dxd-opacity-80" d="M12 22h10V12H12v10z"/></svg>',
    'dxrd-svg-chartstructure-series': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 22h22V10l-4-4-8 8-4-4-6 6z"/><path class="dxd-icon-fill dxd-opacity-80" d="M18 0l-8 8-4-4-6 6v4l6-6 4 4 8-8 4 4V4z"/></svg>',
    'dxrd-svg-chartstructure-seriescollection': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M24 20H4V0H2v4H0v2h2v4H0v2h2v4H0v2h2v4h4v2h2v-2h4v2h2v-2h4v2h2v-2h4z"/><path class="dxd-icon-fill" d="M15 7l-9 9v2h18v-2z"/><path class="dxd-icon-fill" d="M15 4l9 9V4z"/><path class="dxd-icon-fill dxd-opacity-80" d="M6 13l9-9-9-4z"/></svg>',
    'dxrd-svg-chartstructure-title': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M4 8v14h14V8H4zm12 8h-2v-2h2v2zm-6 0v-2h2v2h-2zm2 2v2h-2v-2h2zm-4-2H6v-2h2v2zm8-6v2h-2v-2h2zm-4 2h-2v-2h2v2zm-4-2v2H6v-2h2zm-2 8h2v2H6v-2zm8 2v-2h2v2h-2z"/><path class="dxd-icon-fill" d="M8 0h6v6H8z"/></svg>',
    'dxrd-svg-chartstructure-titles': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 2h4v4H2zM10 2h4v4h-4zM10 18h4v4h-4zM18 2h4v4h-4zM2 18h4v4H2zM2 10h4v4H2zM18 17.9h4v4h-4zM18 10h4v4h-4z"/><path class="dxd-icon-fill dxd-opacity-80" d="M8 8v8h8V8H8zm6 6h-4v-4h4v4z"/></svg>',
    'dxrd-svg-checkboxglyphs-Heart_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Red{fill:#d11c1c}</style><path class="Red" d="M16 5.5C16 3 14 1 11.5 1c-1.4 0-2.7.7-3.5 1.7C7.2 1.7 5.9 1 4.5 1 2 1 0 3 0 5.5c0 1.2.5 2.4 1.3 3.2L8 15.4l6.7-6.7c.8-.8 1.3-2 1.3-3.2z"/></svg>',
    'dxrd-svg-checkboxglyphs-Heart_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Black{fill:#727272}</style><path class="Black" d="M11.5 1c-1.4 0-2.7.7-3.5 1.7C7.2 1.7 5.9 1 4.5 1 2 1 0 3 0 5.5c0 1.2.5 2.4 1.3 3.2L8 15.4l6.7-6.7c.8-.8 1.3-2 1.3-3.2C16 3 14 1 11.5 1zm1.8 6.3L8 12.5 2.7 7.3C2.3 6.8 2 6.2 2 5.5 2 4.1 3.1 3 4.5 3c.7 0 1.5.3 1.9 1L8 6l1.6-2c.5-.6 1.2-1 1.9-1C12.9 3 14 4.1 14 5.5c0 .7-.3 1.3-.7 1.8z"/></svg>',
    'dxrd-svg-checkboxglyphs-RadioButton_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Black{fill:#727272}</style><path class="Black" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm4-6c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/></svg>',
    'dxrd-svg-checkboxglyphs-RadioButton_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Black{fill:#727272}</style><path class="Black" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/></svg>',
    'dxrd-svg-checkboxglyphs-Smiley_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Green{fill:#039c23}</style><path class="Green" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM7 5.5C7 6.3 6.3 7 5.5 7S4 6.3 4 5.5 4.7 4 5.5 4 7 4.7 7 5.5zm5 0c0 .8-.7 1.5-1.5 1.5S9 6.3 9 5.5 9.7 4 10.5 4s1.5.7 1.5 1.5zM10.9 8c.7 0 1.2.6.9 1.3-.5 1.6-2 2.7-3.8 2.7-1.8 0-3.3-1.1-3.8-2.7-.2-.7.3-1.3.9-1.3.4 0 .8.2 1 .6.3.8 1 1.4 1.9 1.4.9 0 1.6-.6 1.9-1.4.1-.4.5-.6 1-.6z"/></svg>',
    'dxrd-svg-checkboxglyphs-Smiley_Indeterminate': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Black{fill:#727272}</style><path class="Black" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM7 5.5C7 6.3 6.3 7 5.5 7S4 6.3 4 5.5 4.7 4 5.5 4 7 4.7 7 5.5zm5 0c0 .8-.7 1.5-1.5 1.5S9 6.3 9 5.5 9.7 4 10.5 4s1.5.7 1.5 1.5zM11 11H5c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z"/></svg>',
    'dxrd-svg-checkboxglyphs-Smiley_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Red{fill:#d11c1c}</style><path class="Red" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM7 5.5C7 6.3 6.3 7 5.5 7S4 6.3 4 5.5 4.7 4 5.5 4 7 4.7 7 5.5zm5 0c0 .8-.7 1.5-1.5 1.5S9 6.3 9 5.5 9.7 4 10.5 4s1.5.7 1.5 1.5zM10.9 12c-.4 0-.8-.2-1-.6-.3-.8-1-1.4-1.9-1.4-.9 0-1.6.6-1.9 1.4-.1.4-.5.6-1 .6-.7 0-1.2-.6-.9-1.3C4.7 9.1 6.2 8 8 8c1.8 0 3.3 1.1 3.8 2.7.2.7-.3 1.3-.9 1.3z"/></svg>',
    'dxrd-svg-checkboxglyphs-StandardBox1_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 12 12" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v12h12V0H0zm11 11H1V1h10v10z"/><path class="dxd-icon-fill" d="M10 4V2L4 8 2 6v2l2 2z"/></svg>',
    'dxrd-svg-checkboxglyphs-StandardBox1_Indeterminate': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 12 12" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v12h12V0H0zm11 11H1V1h10v10z"/><path class="dxd-icon-fill" d="M4 4h4v4H4z"/></svg>',
    'dxrd-svg-checkboxglyphs-StandardBox1_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 12 12" xml:space="preserve"><path class="dxd-icon-fill" d="M12 12H0V0h12v12zM1 11h10V1H1v10z"/></svg>',
    'dxrd-svg-checkboxglyphs-StandardBox2_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Black{fill:#727272}</style><path class="Black" d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V1c0-.5-.4-1-1-1zm-1 14H2V2h12v12z"/><path class="Black" d="M11.6 4.6L13 6l-6 6-4-4 1.4-1.4L7 9.2l4.6-4.6z"/></svg>',
    'dxrd-svg-checkboxglyphs-StandardBox2_Indeterminate': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Black{fill:#727272}</style><path class="Black" d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.6 0 1-.5 1-1V1c0-.5-.4-1-1-1zm-1 14H2V2h12v12z"/><path class="Black" d="M4 4h8v8H4z"/></svg>',
    'dxrd-svg-checkboxglyphs-StandardBox2_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Black{fill:#727272}</style><path class="Black" d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.6 0 1-.5 1-1V1c0-.5-.4-1-1-1zm-1 14H2V2h12v12z"/></svg>',
    'dxrd-svg-checkboxglyphs-Star_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Yellow{fill:#ffb115}</style><path class="Yellow" d="M8 .6l2.5 4.9 5.5.7-4 3.9.9 5.3L8 12.9l-4.9 2.5.9-5.3-4-3.9 5.5-.7z"/></svg>',
    'dxrd-svg-checkboxglyphs-Star_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Black{fill:#727272}</style><path class="Black" d="M16 6.2l-5.5-.7L8 .6 5.5 5.5 0 6.2l4 3.9-.9 5.3L8 12.9l4.9 2.5-.9-5.3 4-3.9zm-5.7 5.6L8 10.7l-2.3 1.2.4-2.4-1.7-1.8 2.4-.3L8 5l1.2 2.3 2.4.3-1.7 1.8.4 2.4z"/></svg>',
    'dxrd-svg-checkboxglyphs-Thumb_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Green{fill:#039c23}</style><path class="Green" d="M0 6h2c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H0V6zm6 9h5.7c.8 0 1.5-.5 1.8-1.2l2.3-5.4c.1-.3.2-.5.2-.8V6c0-.6-.4-1-1-1H9l1.1-3.7c.1-.4 0-.8-.2-1-.3-.3-.8-.3-1.1 0L4.6 4.4c-.4.4-.6.9-.6 1.4V13c0 1.1.9 2 2 2z"/></svg>',
    'dxrd-svg-checkboxglyphs-Thumb_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Red{fill:#d11c1c}</style><path class="Red" d="M16 10h-2c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h2v8zm-6-9H4.3c-.8 0-1.5.5-1.8 1.2L.2 7.6c-.1.3-.2.5-.2.8V10c0 .6.4 1 1 1h6l-1.1 3.7c-.1.4 0 .8.2 1 .3.3.8.3 1.1 0l4.2-4.2c.4-.4.6-.9.6-1.4V3c0-1.1-.9-2-2-2z"/></svg>',
    'dxrd-svg-checkboxglyphs-Toggle_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Green{fill:#039c23}</style><path class="Green" d="M12 4H4C1.8 4 0 5.8 0 8s1.8 4 4 4h8c2.2 0 4-1.8 4-4s-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>',
    'dxrd-svg-checkboxglyphs-Toggle_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Red{fill:#d11c1c}</style><path class="Red" d="M12 4H4C1.8 4 0 5.8 0 8s1.8 4 4 4h8c2.2 0 4-1.8 4-4s-1.8-4-4-4zm-8 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>',
    'dxrd-svg-checkboxglyphs-YesNoBox_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Green{fill:#039c23}</style><path class="Green" d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V1c0-.5-.4-1-1-1zm-1 14H2V2h12v12z"/><path class="Green" d="M11.6 4.6L13 6l-6 6-4-4 1.4-1.4L7 9.2l4.6-4.6z"/></svg>',
    'dxrd-svg-checkboxglyphs-YesNoBox_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Red{fill:#d11c1c}</style><path class="Red" d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 14H2V2h12v12z"/><path class="Red" d="M13 4.4L11.6 3 8 6.6 4.4 3 3 4.4 6.6 8 3 11.6 4.4 13 8 9.4l3.6 3.6 1.4-1.4L9.4 8z"/></svg>',
    'dxrd-svg-checkboxglyphs-YesNoSolidBox_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Green{fill:#039c23}</style><path class="Green" d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zM6.9 12L3 8.1l1.4-1.4 2.5 2.5 5.7-5.7L14 4.9 6.9 12z"/></svg>',
    'dxrd-svg-checkboxglyphs-YesNoSolidBox_Indeterminate': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Yellow{fill:#ffb115}</style><path class="Yellow" d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zM9 13H7v-2h2v2zm0-4H7V3h2v6z"/></svg>',
    'dxrd-svg-checkboxglyphs-YesNoSolidBox_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Red{fill:#d11c1c}</style><path class="Red" d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-2 11.6L11.6 13 8 9.4 4.4 13 3 11.6 6.6 8 3 4.4 4.4 3 8 6.6 11.6 3 13 4.4 9.4 8l3.6 3.6z"/></svg>',
    'dxrd-svg-checkboxglyphs-YesNo_Checked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Green{fill:#039c23}</style><path class="Green" d="M0 8l2-2 4 4 8-8 2 2L6 14z"/></svg>',
    'dxrd-svg-checkboxglyphs-YesNo_Unchecked': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><style>.Red{fill:#d11c1c}</style><path class="Red" d="M14 4l-2-2-4 4-4-4-2 2 4 4-4 4 2 2 4-4 4 4 2-2-4-4z"/></svg>',
    'dxrd-svg-color_gear': '<svg data-bind="svgAttrs" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.White{fill:#fff}</style><path class="White" d="M30 18v-4l-4.4-.7c-.2-.8-.5-1.5-.9-2.1l2.6-3.6-2.8-2.8-3.6 2.6c-.7-.4-1.4-.7-2.1-.9L18 2h-4l-.7 4.4c-.8.2-1.5.5-2.1.9L7.5 4.7 4.7 7.5l2.6 3.6c-.4.7-.7 1.4-.9 2.1L2 14v4l4.4.7c.2.8.5 1.5.9 2.1l-2.6 3.6 2.8 2.8 3.6-2.6c.7.4 1.4.7 2.1.9L14 30h4l.7-4.4c.8-.2 1.5-.5 2.1-.9l3.6 2.6 2.8-2.8-2.6-3.6c.4-.7.7-1.4.9-2.1L30 18zm-14 2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/></svg>',
    'dxrd-svg-errorPanel-collectErrors': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M1.1 7C1.6 3.6 4.5 1 8 1c2 0 3.7.8 5 2.1V2c0-.5.5-1 1-1s1 .5 1 1v5h-5c-.5 0-1-.5-1-1s.5-1 1-1h2c-.9-1.2-2.3-2-4-2-2.4 0-4.4 1.7-4.9 4h-2zm11.8 2c-.5 2.3-2.5 4-4.9 4-1.6 0-3.1-.8-4-2h2c.5 0 1-.5 1-1s-.5-1-1-1H1v5c0 .5.5 1 1 1s1-.5 1-1v-1.1C4.3 14.2 6 15 8 15c3.5 0 6.4-2.6 6.9-6h-2z"/></svg>',
    'dxrd-svg-errorPanel-error': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.9 10.4c.2.2.2.5 0 .7l-.7.7c-.2.2-.5.2-.7 0L12 13.4l-2.4 2.4c-.2.2-.6.2-.7.1l-.7-.7c-.2-.2-.2-.6-.1-.8l2.4-2.4-2.4-2.4c-.1-.2-.1-.6 0-.7l.7-.7c.2-.2.6-.2.8-.1l2.4 2.4 2.4-2.4c.2-.1.6-.1.7 0l.7.7c.2.2.2.6.1.8L13.4 12l2.5 2.4z"/></svg>',
    'dxrd-svg-errorPanel-information': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-.5 3h1c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5zm1 10h-1c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5z"/></svg>',
    'dxrd-svg-errorPanel-notification': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 19h4c0 1.1-.9 2-2 2s-2-.9-2-2zm7.6-4.8c-.4-.4-.6-.9-.6-1.4v-.9c-2.3-.5-4-2.5-4-4.9 0-.6.1-1.2.3-1.8-.1 0-.2-.1-.3-.1V4c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-2.3.5-4 2.5-4 4.9v2.8c0 .5-.2 1-.6 1.4l-2.1 2.1c-.6.6-.2 1.7.7 1.7h14c.9 0 1.3-1.1.7-1.7l-2.1-2.1z"/><circle cx="18" cy="7" r="4" fill="#d03044"/></svg>',
    'dxrd-svg-errorPanel-notification_empty': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 19h4c0 1.1-.9 2-2 2s-2-.9-2-2zm9.7-2.7l-2.1-2.1c-.4-.4-.6-.9-.6-1.4V10c0-2.4-1.7-4.4-4-4.9V4c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-2.3.5-4 2.5-4 4.9v2.8c0 .5-.2 1-.6 1.4l-2.1 2.1c-.6.6-.2 1.7.7 1.7h14c.9 0 1.3-1.1.7-1.7z"/></svg>',
    'dxrd-svg-errorPanel-warning': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21.8 18.3L12.9 3.5c-.4-.7-1.4-.7-1.8 0L2.2 18.3c-.5.7 0 1.7.9 1.7h17.8c.9 0 1.4-1 .9-1.7zM12.5 17h-1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zm0-4h-1c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5z"/></svg>',
    'dxrd-svg-fieldlist-bottommarginband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M5 15v-2h6v2H5zm-1-2H2v1.5c0 .3.2.5.5.5H4v-2zm8 0v2h1.5c.3 0 .5-.2.5-.5V13h-2z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M2 4h2v8H2V4zm10-1h2V1.5c0-.3-.2-.5-.5-.5H12v2zM5 4v8h6V4H5zm0-3v2h6V1H5zm9 3h-2v8h2V4zM4 3V1H2.5c-.3 0-.5.2-.5.5V3h2z"/></g></svg>',
    'dxrd-svg-fieldlist-calcbool': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v22h22V0H0zm18 8L8 18l-4-4v-4l4 4L18 4v4z"/></svg>',
    'dxrd-svg-fieldlist-calcdate': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v22h22V0H0zm11 18c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/><path class="dxd-icon-fill" d="M15 10h-3V7c0-.5-.4-1-1-1-.5 0-1 .4-1 1v4c0 .5.4 1 1 1h4c.5 0 1-.4 1-1s-.4-1-1-1z"/></svg>',
    'dxrd-svg-fieldlist-calcdefault': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v22h22V0H0zm17.6 5.8c-.2.1-.4.2-.7.2-.3 0-.5-.1-.7-.2-.2-.1-.2-.3-.2-.4 0-.2 0-.4.1-.6.1-.1.2-.2.2-.3 0-.1 0-.1-.1-.1s-.1-.1-.2-.1c-.4 0-.8.3-1.2.6-.7.6-1.4 2.1-1.8 3.1h2l-1 1.9h-1.6l-.8 2.3c-.6 1.7-1.1 2.8-1.6 3.6-.5.7-1.2 1.3-1.9 1.6-.7.4-1.6.6-2.5.6-.6 0-1-.1-1.3-.3-.2-.1-.3-.5-.3-.7s.2-1 1.2-1c.9 0 1 .8 1 1s-.1.3-.2.4-.2.1-.2.2l.1.1H6c.2 0 .4 0 .5-.1.4-.2.6-.5.8-.9.1-.2.4-.7.7-1.7l1.7-5H8l1-1.9h1.3c.2-.1.6-.9.7-1.1.8-1 1.4-1.7 2.2-2.2.9-.6 1.8-.8 2.9-.8.7 0 1.1.1 1.4.3.3.2.5.4.5.7s-.2.6-.4.8z"/></svg>',
    'dxrd-svg-fieldlist-calcfloat': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v22h22V0H0zm8 16H2v-2h2v-4H2V8h2V6h2v8h2v2zm4 0h-2v-2h2v2zm8-8v2h-2v2h-2v2h4v2h-6v-4h2v-2h2V8h-4V6h6v2z"/></svg>',
    'dxrd-svg-fieldlist-calcinteger': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v22h22V0H0zm6 16H4v-6H2V8h2V6h2v10zm6-9v3h-2v4h2v2H8v-6h2V8H8V6h4v1zm8 0v9h-6v-2h4v-2h-2v-2h2V8h-4V6h6v1z"/></svg>',
    'dxrd-svg-fieldlist-calcstring': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v22h22V0H0zm10 18H4v-6h4v-2H4V8h6v10zm8-4.3V18h-6V4h2v6h4v3.7z"/><path class="dxd-icon-fill" d="M6 14h2v2H6zM14 12h2v4h-2z"/></svg>',
    'dxrd-svg-fieldlist-component': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M8 2C5.2 2 3 3.3 3 5v6c0 1.7 2.2 3 5 3s5-1.3 5-3V5c0-1.7-2.2-3-5-3zm0 4c-1.8 0-2.9-.8-3-1 .1-.2 1.2-1 3-1s2.9.8 3 1c-.1.2-1.2 1-3 1z"/></svg>',
    'dxrd-svg-fieldlist-components': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><g class="st1"><path class="dxd-icon-fill" d="M8.3 9V7H11V3c0-1.7-2-3-4.5-3S2 1.3 2 3v5c0 1.7 2 3 4.5 3 2 0 3.6-.8 4.2-2H8.3zm-4-6c0-.4.9-1 2.3-1s2.3.6 2.3 1-1 1-2.4 1-2.2-.6-2.2-1z"/></g><path class="dxd-icon-fill" d="M10.5 5C8 5 6 6.3 6 8v5c0 1.7 2 3 4.5 3s4.5-1.3 4.5-3V8c0-1.7-2-3-4.5-3zm0 4c-1.4 0-2.2-.6-2.2-1s.9-1 2.3-1 2.3.6 2.3 1-1 1-2.4 1z"/></svg>',
    'dxrd-svg-fieldlist-detailband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M13.5 1h-11c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-12c0-.3-.2-.5-.5-.5zM12 12H4V3h8v9zm-2-6H6V5h4v1zm0 2H6V7h4v1zm0 2H6V9h4v1z"/></svg>',
    'dxrd-svg-fieldlist-detailreportband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M14.5 1h-13c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-12c0-.3-.2-.5-.5-.5zM13 12H3V3h10v9z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M11 7H5V5h6v2zm0 1H5v2h6V8z"/></g></svg>',
    'dxrd-svg-fieldlist-formattingrule': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M6.6 10H3V3h7v3h2V2c0-.5-.5-1-1-1H2c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h6.6l-2-2z"/><path class="dxd-icon-fill" d="M15.3 7H6.7c-.6 0-.9.8-.5 1.2L10 12v4h2v-4l3.8-3.8c.4-.4.1-1.2-.5-1.2z"/></svg>',
    'dxrd-svg-fieldlist-formattingrules': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M9 12.4L7.6 11H5V5h6v1h2V3.5c0-.3-.2-.5-.5-.5H10V.5c0-.3-.2-.5-.5-.5h-9C.2 0 0 .2 0 .5v9c0 .3.2.5.5.5H3v2.5c0 .3.2.5.5.5H9v-.6zM3 3.5V8H2V2h6v1H3.5c-.3 0-.5.2-.5.5z"/><path class="dxd-icon-fill" d="M15.3 7H6.7c-.6 0-.9.8-.5 1.2L10 12v4h2v-4l3.8-3.8c.4-.4.1-1.2-.5-1.2z"/></svg>',
    'dxrd-svg-fieldlist-groupfooterband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M8.5 14h-6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M8.5 5h-6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM14 6H7v1h7V6zm0 2H7v1h7V8z"/></g></svg>',
    'dxrd-svg-fieldlist-groupheaderband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M9 4.5v-3c0-.3-.2-.5-.5-.5h-6c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M8.5 14h-6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM7 9h7V8H7v1zm0-3v1h7V6H7z"/></g></svg>',
    'dxrd-svg-fieldlist-master_report': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M11 2v2H5V2h1V.5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5V2h1zm-1 4H6v1h4V6zm0 2H6v1h4V8zm0 2H6v1h4v-1zm3.5-8H12v11H4V2H2.5c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-12c0-.3-.2-.5-.5-.5z"/></svg>',
    'dxrd-svg-fieldlist-pagefooterband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M5 10h6v2H5z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M5 15v-2h6v2H5zm-1-2H2v1.5c0 .3.2.5.5.5H4v-2zm8 0v2h1.5c.3 0 .5-.2.5-.5V13h-2zm-1-4V4H5v5h6zM4 1H2.5c-.3 0-.5.2-.5.5V3h2V1zm7 0H5v2h6V1zM4 4H2v8h2V4zm9.5-3H12v2h2V1.5c0-.3-.2-.5-.5-.5zM12 12h2V4h-2v8z"/></g></svg>',
    'dxrd-svg-fieldlist-pageheaderband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M5 4h6v2H5z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M5 15v-2h6v2H5zm-1-2H2v1.5c0 .3.2.5.5.5H4v-2zm8 0v2h1.5c.3 0 .5-.2.5-.5V13h-2zM4 1H2.5c-.3 0-.5.2-.5.5V3h2V1zm7 0H5v2h6V1zM4 4H2v8h2V4zm9.5-3H12v2h2V1.5c0-.3-.2-.5-.5-.5zM5 7v5h6V7H5zm7 5h2V4h-2v8z"/></g></svg>',
    'dxrd-svg-fieldlist-parametergroup': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M6 6h6.5c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5h-6c-.3 0-.5-.2-.5-.5V6zm-1-.5c0-.3.2-.5.5-.5H10V3.5c0-.3-.2-.5-.5-.5h-6c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5H5V5.5z"/></svg>',
    'dxrd-svg-fieldlist-parameterseparator': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M13.5 9h-11c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h11c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z"/></svg>',
    'dxrd-svg-fieldlist-reportfooterband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M11 2v2H5V2h1V.5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5V2h1zm2.5 0H12v11H4V2H2.5c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-12c0-.3-.2-.5-.5-.5z"/><path class="dxd-icon-fill" d="M5 10h6v2H5z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M5 5h6v4H5z"/></g></svg>',
    'dxrd-svg-fieldlist-reportheaderband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M11 2v2H5V2h1V.5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5V2h1zm2.5 0H12v11H4V2H2.5c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-12c0-.3-.2-.5-.5-.5z"/><path class="dxd-icon-fill" d="M5 5h6v2H5z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M5 8h6v4H5z"/></g></svg>',
    'dxrd-svg-fieldlist-stylemodel': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M8.4 11l1.6 1.6C9.2 15 6.9 15 5 15c1.8-1.8 1.9-4 3.4-4zm-.3-1H3V3h7v4.7l2-2V2c0-.5-.5-1-1-1H2c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h3.9c.5-.9 1.1-1.8 2.2-2zm7.8-3.6l-1.3-1.3c-.2-.1-.4-.1-.6 0L9.1 10c-.2.2-.2.4 0 .5l1.3 1.3c.2.2.4.2.5 0l5-4.8c.1-.2.1-.4 0-.6z"/></svg>',
    'dxrd-svg-fieldlist-styles': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M5 16c1.9 0 4.2 0 5-2.4L8.4 12c-1.5 0-1.6 2.2-3.4 4zM8.1 11H5V5h6v2.7l2-2V3.5c0-.3-.2-.5-.5-.5H10V.5c0-.3-.2-.5-.5-.5h-9C.2 0 0 .2 0 .5v9c0 .3.2.5.5.5H3v2.5c0 .3.2.5.5.5h2.4c.5-.9 1.1-1.8 2.2-2zM3 3.5V8H2V2h6v1H3.5c-.3 0-.5.2-.5.5zM15.9 7.4l-1.3-1.3c-.2-.1-.4-.1-.6 0L9.1 11c-.2.2-.2.4 0 .5l1.3 1.3c.2.2.4.2.5 0l5-4.8c.1-.2.1-.4 0-.6z"/></svg>',
    'dxrd-svg-fieldlist-subband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M9.5 7h-8c-.2 0-.5-.2-.5-.5v-4c0-.3.3-.5.5-.5h8c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5z"/></g><path class="dxd-icon-fill" d="M14.5 14h-8c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h8c.2 0 .5.2.5.5v4c0 .3-.3.5-.5.5z"/></svg>',
    'dxrd-svg-fieldlist-topmarginband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M4 3H2V1.5c0-.3.2-.5.5-.5H4v2zm7-2H5v2h6V1zm2.5 0H12v2h2V1.5c0-.3-.2-.5-.5-.5z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M5 15v-2h6v2H5zm-1-2H2v1.5c0 .3.2.5.5.5H4v-2zm8 0v2h1.5c.3 0 .5-.2.5-.5V13h-2zm-1-1V4H5v8h6zM4 4H2v8h2V4zm8 8h2V4h-2v8z"/></g></svg>',
    'dxrd-svg-fieldlist-verticaldetailband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M7 5h2v6H7z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M1 5h2v6H1V5zm0 8.5c0 .3.2.5.5.5H3v-2H1v1.5zm3 .5h8v-2H4v2zm2-9H4v6h2V5zM1 2.5V4h2V2H1.5c-.3 0-.5.2-.5.5zM14.5 2H13v2h2V2.5c0-.3-.2-.5-.5-.5zM13 11h2V5h-2v6zm0 3h1.5c.3 0 .5-.2.5-.5V12h-2v2zm-3-3h2V5h-2v6zM4 4h8V2H4v2z"/></g></svg>',
    'dxrd-svg-fieldlist-verticalheaderband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M4 4h2v6H4z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M1 4h2v6H1V4zm0 8.5c0 .3.2.5.5.5H3v-2H1v1.5zm3 .5h8v-2H4v2zM1 1.5V3h2V1H1.5c-.3 0-.5.2-.5.5zM14.5 1H13v2h2V1.5c0-.3-.2-.5-.5-.5zM13 10h2V4h-2v6zm0 3h1.5c.3 0 .5-.2.5-.5V11h-2v2zm-6-3h5V4H7v6zM4 3h8V1H4v2z"/></g></svg>',
    'dxrd-svg-fieldlist-verticaltotalband': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M10 4h2v6h-2z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M1 4h2v6H1V4zm0 8.5c0 .3.2.5.5.5H3v-2H1v1.5zm3 .5h8v-2H4v2zm5-9H4v6h5V4zM1 1.5V3h2V1H1.5c-.3 0-.5.2-.5.5zM14.5 1H13v2h2V1.5c0-.3-.2-.5-.5-.5zM13 10h2V4h-2v6zm0 3h1.5c.3 0 .5-.2.5-.5V11h-2v2zM4 3h8V1H4v2z"/></g></svg>',
    'dxrd-svg-fieldlist-xrbarcode': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M2 14H0V2h2v12zM9 2H7v12h2V2zm3 0h-2v12h2V2zm4 0h-3v12h3V2zM6 2H3v12h3V2z"/></svg>',
    'dxrd-svg-fieldlist-xrcharactercomb': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 3H1c-.5 0-1 .5-1 1v15c0 .5.5 1 1 1h22c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1zM11 18H2V5h9v13zm11 0h-9V5h9v13zM8.3 9.6c.5.4.7 1.1.7 2V15H7.6v-.7c-.3.6-.8.8-1.6.8-.4 0-.8-.1-1.1-.2-.3-.2-.5-.4-.7-.6-.2-.3-.2-.6-.2-.9 0-.6.2-1 .6-1.3.4-.3.9-.5 1.7-.5h1.2c0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.9-.3-.3 0-.6 0-.8.1-.3.1-.5.2-.7.4l-.7-1.2c.3-.2.6-.4 1-.5C5.6 9 6 9 6.4 9c.9 0 1.5.2 1.9.6zM7 13.7c.2-.1.4-.3.4-.6v-.6h-1c-.6 0-1 .2-1 .7 0 .2.1.4.2.5.2.1.4.2.6.2.4 0 .6 0 .8-.2zm12.4-4.4c.4.3.7.6.9 1.1.2.5.3 1 .3 1.6 0 .6-.1 1.2-.3 1.6-.2.5-.5.8-.9 1.1-.4.3-.9.4-1.4.4-.7 0-1.2-.3-1.6-.8v.7H15V7h1.5v2.7c.4-.5.9-.7 1.6-.7.4-.1.9.1 1.3.3zm-.7 3.9c.2-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.3-.6-.4-.9-.4-.4 0-.7.1-.9.4-.2.3-.4.7-.4 1.2s.1.9.4 1.2c.2.3.6.5.9.5.4 0 .7-.2.9-.5z"/></svg>',
    'dxrd-svg-fieldlist-xrchart': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M10 5.5v9c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5zm-9 4v5c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5zM14.5 1h-3c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5z"/></svg>',
    'dxrd-svg-fieldlist-xrcheckbox': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M7.4 11L3.7 7.3l1.4-1.4 2.3 2.3L14.6 1 16 2.4z"/><path class="dxd-icon-fill" d="M13 6.8V13H3V3h8.2l2-2H1.5c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V4.8l-2 2z"/></svg>',
    'dxrd-svg-fieldlist-xrcrossbandbox': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M15.5 7H.5C.2 7 0 6.8 0 6.5v-2c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5zm.5 4.5v-2c0-.3-.2-.5-.5-.5H.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5z"/></g><path class="dxd-icon-fill" d="M14 9h-2V7h2v2zM4 4V2h8v2h2V0H2v4h2zM2 9h2V7H2v2zm10 3v2H4v-2H2v4h12v-4h-2z"/></svg>',
    'dxrd-svg-fieldlist-xrcrossbandline': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M15.5 7H.5C.2 7 0 6.8 0 6.5v-2c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5zm.5 4.5v-2c0-.3-.2-.5-.5-.5H.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5z"/></g><path class="dxd-icon-fill" d="M7 0h2v4H7zM7 7h2v2H7zM7 12h2v4H7z"/></svg>',
    'dxrd-svg-fieldlist-xrcrosstab': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M14 15H2c-.9 0-1.3-1.1-.7-1.7L6.6 8 1.3 2.7C.7 2.1 1.1 1 2 1h12v3h-2V3H4.4l5 5-5 5H12v-1h2v3z"/></svg>',
    'dxrd-svg-fieldlist-xrgauge': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M5 8c0 .8.3 1.6.9 2.1l-1.4 1.4C3.6 10.6 3 9.4 3 8c0-2.8 2.2-5 5-5 .6 0 1.3.1 1.8.4L8.2 5H8C6.3 5 5 6.3 5 8zm6-.2V8c0 .8-.3 1.6-.9 2.1l1.4 1.4c.9-.9 1.5-2.1 1.5-3.5 0-.6-.1-1.3-.4-1.8L11 7.8z"/></g><path class="dxd-icon-fill" d="M12 5c0-.6-.4-1-1-1-.3 0-.5.1-.7.3L8.5 6.1C8.3 6 8.2 6 8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.2 0-.3-.1-.5l1.8-1.8c.2-.2.3-.4.3-.7z"/></svg>',
    'dxrd-svg-fieldlist-xrlabel': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M14.5 12h-.9L9.5 1.3C9.4 1.1 9.2 1 9 1H6.9c-.2 0-.4.1-.5.3L2.3 12h-.8c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h4c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-.7l.7-2h4.8l.7 2h-.6c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h4c.3 0 .5-.2.5-.5v-1c.1-.3-.1-.5-.4-.5zM6.3 8L8 3.2 9.6 8H6.3z"/></svg>',
    'dxrd-svg-fieldlist-xrline': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path transform="rotate(-45.001 8 8)" class="dxd-icon-fill" d="M7-.5h2v17H7z"/><path class="dxd-icon-fill" d="M4.5 5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM14.5 15h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5z"/></svg>',
    'dxrd-svg-fieldlist-xrpagebreak': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M1 7h2v2H1zM4 7h2v2H4zM7 7h2v2H7zM10 7h2v2h-2zM13 7h2v2h-2zM13 1v3H3V1H1v4.5c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V1h-2zM13 15v-3H3v3H1v-4.5c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5V15h-2z"/></svg>',
    'dxrd-svg-fieldlist-xrpageinfo': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M5 11H3V3h8v2c.7 0 1.4.1 2 .3V1.5c0-.3-.2-.5-.5-.5h-11c-.3 0-.5.2-.5.5v11c0 .3.2.5.5.5h3.8c-.2-.6-.3-1.3-.3-2z"/><path class="dxd-icon-fill" d="M11 6c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm1 8h-2v-3h2v3zm0-4h-2V8h2v2z"/></svg>',
    'dxrd-svg-fieldlist-xrpanel': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M14.5 1h-13c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5zM13 13H3V3h10v10z"/></svg>',
    'dxrd-svg-fieldlist-xrpdfcontent': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M19 18h2v4c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1v-4h2v3h14v-3zM5 3h14v2h2V2c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1v3h2V3zm2.1 6.9h-1v1.7h1c.4 0 .6-.1.8-.2.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3zM23 6v11H1V6h22zM9.4 10.8c0-.4-.1-.7-.3-1-.2-.2-.4-.4-.7-.6C8 9.1 7.6 9 7.2 9H5v5h1.2v-1.4h1c.4 0 .8-.1 1.2-.2.3-.1.6-.4.8-.6s.2-.6.2-1zm5.9.7c0-.5-.1-.9-.3-1.3-.2-.4-.6-.7-1-.9-.5-.2-.9-.3-1.5-.3h-2.3v5h2.3c.5 0 1-.1 1.5-.3.4-.2.7-.5 1-.9.2-.4.3-.8.3-1.3zM20 9h-3.8v5h1.2v-1.8h2.3v-.9h-2.3V9.9H20V9zm-7.5.9h-1.1V13h1.1c.5 0 .9-.1 1.2-.4.3-.3.5-.7.5-1.1 0-.5-.2-.9-.5-1.1-.3-.3-.7-.5-1.2-.5z"/></svg>',
    'dxrd-svg-fieldlist-xrpdfsignature': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M1.8 15c-.5 0-.8-.3-.8-.8 0-.2.1-.4.2-.6.4-.4.7-.8 1.1-1.1.3-.3.5-.6.8-.8-.5-1.2-.9-2.8-.9-4.3C2.2 3 4.5 1 6.7 1c1.5 0 2.6 1.7 2.6 3.9C9.3 6.6 8.1 8.6 5 12c.4.5.7.8 1 .8.9 0 1.3-.6 2-2 .4-.9 1-2.4 2.4-2.4 1.2 0 1.2 1.5 1.2 2.1v.9c.2-.2.5-.6.8-1l.1-.1c.6-.9 1.4-2 2.7-2 .5 0 .8.3.8.8s-.3.8-.8.8-.8.4-1.5 1.4l-.1.1c-.5.8-1.1 1.7-2.2 1.7-1.6 0-1.6-2-1.6-2.6v-.1c-.1.2-.3.6-.5.9-.6 1.3-1.4 3-3.3 3-.8 0-1.6-.4-2.2-1.2l-.9.9-.6.6c-.1.3-.3.4-.5.4zM6.7 2.6c-1.4 0-2.8 1.5-2.8 4.7 0 1 .2 2 .5 3C6.8 7.6 7.8 6 7.8 4.9 7.7 3.4 7 2.6 6.7 2.6z"/></svg>',
    'dxrd-svg-fieldlist-xrpicturebox': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M14.5 1H2c-.6 0-1 .4-1 1v12.5c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5zM13 13H3V3h10v10zm-3-9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 8V9l2-2 5 5H4z"/></svg>',
    'dxrd-svg-fieldlist-xrpivotgrid': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M14 15H2c-.9 0-1.3-1.1-.7-1.7L6.6 8 1.3 2.7C.7 2.1 1.1 1 2 1h12v3h-2V3H4.4l5 5-5 5H12v-1h2v3z"/></svg>',
    'dxrd-svg-fieldlist-xrrichtext': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M12 7.4V12H4V4h4.6l2-2H2.5c-.3 0-.5.2-.5.5v11c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5V5.4l-2 2z"/><path transform="rotate(-45.001 14.177 1.823)" class="dxd-icon-fill" d="M13 .4h2.3v2.8H13z"/><path class="dxd-icon-fill" d="M11.6 2.4L7 7v2h2l4.6-4.6z"/><g><path transform="rotate(-45.001 14.177 1.823)" class="dxd-icon-fill" d="M13 .4h2.3v2.8H13z"/><path class="dxd-icon-fill" d="M11.6 2.4L7 7v2h2l4.6-4.6z"/></g></svg>',
    'dxrd-svg-fieldlist-xrshape': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M10 5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zM4.3 8c-.2.6-.3 1.3-.3 2H2c-.5 0-1-.4-1-1V2c0-.6.5-1 1-1h7c.5 0 1 .4 1 1v2c-.7 0-1.4.1-2 .3V3H3v5h1.3z"/></svg>',
    'dxrd-svg-fieldlist-xrsparkline': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M14.5 1h-13c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5zM13 3v.6l-5 5-2-2-3 3V3h10zM3 13v-.6l3-3 2 2 5-5V13H3z"/></svg>',
    'dxrd-svg-fieldlist-xrsubreport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M11 2v2H5V2h1V.5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5V2h1zm-1 4H6v1h4V6zm0 2H6v1h4V8zm0 2H6v1h4v-1zm3.5-8H12v11H4V2H2.5c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-12c0-.3-.2-.5-.5-.5z"/></svg>',
    'dxrd-svg-fieldlist-xrtable': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M14.5 1h-13c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5zM13 13H3V3h10v10z"/><path class="dxd-icon-fill" d="M4 4h2v2H4zM7 4h2v2H7zM10 4h2v2h-2zM4 7h2v2H4zM7 7h2v2H7zM10 7h2v2h-2zM4 10h2v2H4zM7 10h2v2H7zM10 10h2v2h-2z"/></svg>',
    'dxrd-svg-fieldlist-xrtablecell': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M6 6h4v4H6z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M5 5H1V1h4v4zm5-4H6v4h4V1zm5 0h-4v4h4V1zM5 6H1v4h4V6zm10 0h-4v4h4V6zM5 11H1v4h4v-4zm5 0H6v4h4v-4zm5 0h-4v4h4v-4z"/></g></svg>',
    'dxrd-svg-fieldlist-xrtableofcontents': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 4h-2V2h2v2zm0 1h-2v2h2V5zm0 3h-2v2h2V8zm0 3h-2v2h2v-2z"/></g><path class="dxd-icon-fill" d="M9 4H1V2h8v2zm6-2h-2v2h2V2zM9 5H1v2h8V5zm6 0h-2v2h2V5zM9 8H1v2h8V8zm6 0h-2v2h2V8zm-6 3H1v2h8v-2zm6 0h-2v2h2v-2z"/></svg>',
    'dxrd-svg-fieldlist-xrtablerow': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M1 6h14v4H1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M5 5H1V1h4v4zm5-4H6v4h4V1zm5 0h-4v4h4V1zM5 11H1v4h4v-4zm5 0H6v4h4v-4zm5 0h-4v4h4v-4z"/></g></svg>',
    'dxrd-svg-fieldlist-xrzipcode': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><path class="dxd-icon-fill" d="M5 3H2V1.5c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5V3zM2 3H.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5H2V3zm3 3H2v2h3V6zm1.5-3H5v3h1.5c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zM2 8H.5c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5H2V8zm3 4H2v1.5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V12zm1.5-4H5v4h1.5c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5zM13 3h-3V1.5c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5V3zm-3 0H8.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5H10V3zm3 3h-3v2h3V6zm1.5-3H13v3h1.5c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zM10 8H8.5c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5H10V8zm3 4h-3v1.5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V12zm1.5-4H13v4h1.5c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5z"/></svg>',
    'dxrd-svg-landscape': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 34 34" xml:space="preserve"><style>.st0{opacity:.5}</style><g id="Landscape"><path class="dxd-icon-fill" d="M33 4H1c-.5 0-1 .5-1 1v24c0 .5.5 1 1 1h32c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1zm-1 24H2V6h30v22z"/><g class="st0"><path class="dxd-icon-fill" d="M28 12H6v-2h22v2zm0 2H6v2h22v-2zm0 4H6v2h22v-2zm0 4H6v2h22v-2z"/></g></g></svg>',
    'dxrd-svg-menu-add_datasource': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1zM9 0C5.1 0 2 1.5 2 3.5v10C2 15.4 5.1 17 9 17s7-1.6 7-3.5v-10c0-2-3.1-3.5-7-3.5zm0 2c2.9 0 4.4 1.1 4.5 1.5C13.4 3.8 11.9 5 9 5S4.6 3.8 4.5 3.4C4.6 3.1 6.1 2 9 2z"/></svg>',
    'dxrd-svg-menu-back': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M6 12l9-9 2 2-7 7 7 7-2 2z"/></svg>',
    'dxrd-svg-menu-exit': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M15 20c.6 0 1 .4 1 1 0 .5-.4 1-1 1H4c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h11c.6 0 1 .5 1 1 0 .6-.4 1-1 1H5v16h10zm4.3-12.7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3H11c-.5 0-1 .5-1 1s.5 1 1 1h9.2l-2.3 2.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L24 12l-4.7-4.7z"/></svg>',
    'dxrd-svg-menu-localization': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 6h-8V4c0-.5-.5-1-1-1s-1 .5-1 1v2H3c-.5 0-1 .5-1 1s.5 1 1 1h11c0 2.5-.7 4.7-2 6.6-.8-1.1-1.3-2.4-1.7-3.8-.1-.5-.5-.8-1-.8-.6 0-1.1.6-1 1.2.4 1.8 1.2 3.5 2.3 4.9C8.9 17.9 6.6 19 4 19c-.6 0-1 .4-1 1s.4 1 1 1c3.1 0 5.9-1.3 8-3.3 2.1 2.1 4.9 3.3 8 3.3.6 0 1-.4 1-1s-.4-1-1-1c-2.6 0-4.9-1.1-6.7-2.8C15 13.9 16 11.1 16 8h5c.5 0 1-.5 1-1s-.5-1-1-1z"/></svg>',
    'dxrd-svg-menu-newreport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M16 8V3c0-.6-.4-1-1-1H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V9c0-.6-.4-1-1-1h-5zm4 12H4V4h10v5c0 .5.5 1 1 1h5v10z"/></svg>',
    'dxrd-svg-menu-new_via_wizard': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M19.2 22H3c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h18c.5 0 1 .5 1 1v16.2l-2-2V4H4v16h13.2l2 2zm4.5 1.7c.4-.4.4-1 0-1.4l-7-7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l7 7c.4.4 1 .4 1.4 0zm-6.2-10.4l-3.2 1-1 3.2c-.2.6-1 .8-1.4.2L10 15H6.6c-.7 0-1-.8-.6-1.3L8 11 6.9 7.9c-.2-.6.4-1.2 1-1L11.1 8l2.7-2c.5-.4 1.3 0 1.3.6V10l2.7 1.9c.4.4.3 1.2-.3 1.4zm-3-1.2L13 11V9l-1.6 1.2-1.8-.6.6 1.8L9 13h2l1.1 1.5.6-1.9 1.8-.5z"/></svg>',
    'dxrd-svg-menu-run_wizard': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21.3 22.7l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0zm-2.9-9.9l-4.2 1.3-1.3 4.2c-.2.8-1.3 1-1.8.3L8.5 15H4c-.8 0-1.3-.9-.8-1.6l2.6-3.5-1.4-4.2c-.2-.8.5-1.5 1.3-1.3l4.2 1.4 3.5-2.6A1 1 0 0115 4v4.4l3.6 2.6c.7.5.5 1.6-.2 1.8zm-2.6-1.3l-2.8-2V6l-2.7 2.1L7 7l1.1 3.3L6 13h3.5l2 2.8 1-3.3 3.3-1z"/></svg>',
    'dxrd-svg-multi_select': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 12h12v12H12zM12 0H0v12h4V4h8z"/><path class="dxd-icon-fill" d="M18 6H6v12h4v-8h8z"/></svg>',
    'dxrd-svg-none': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M4 0v22h16V0H4zm14 14l-2 2-4-4-4 4-2-2 4-4-4-4 2-2 4 4 4-4 2 2-4 4 4 4z"/></svg>',
    'dxrd-svg-pictureeditor-alignment_bottomcenter': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentBottomCenter"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M10 16h12v12H10z"/></g></svg>',
    'dxrd-svg-pictureeditor-alignment_bottomleft': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentBottomLeft"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M4 16h12v12H4z"/></g></svg>',
    'dxrd-svg-pictureeditor-alignment_bottomright': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentBottomRight"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M16 16h12v12H16z"/></g></svg>',
    'dxrd-svg-pictureeditor-alignment_middlecenter': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentCenterCenter"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M10 10h12v12H10z"/></g></svg>',
    'dxrd-svg-pictureeditor-alignment_middleleft': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentCenterLeft"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M4 10h12v12H4z"/></g></svg>',
    'dxrd-svg-pictureeditor-alignment_middleright': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentCenterRight"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M16 10h12v12H16z"/></g></svg>',
    'dxrd-svg-pictureeditor-alignment_topcenter': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentTopCenter"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M10 4h12v12H10z"/></g></svg>',
    'dxrd-svg-pictureeditor-alignment_topleft': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentTopLeft"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M4 4h12v12H4z"/></g></svg>',
    'dxrd-svg-pictureeditor-alignment_topright': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Green{fill:#039c23}</style><g id="AlignmentTopRight"><path class="Black" d="M31 0H1C.5 0 0 .5 0 1v30c0 .5.5 1 1 1h30c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 30H2V2h28v28z"/><path class="Green" d="M16 4h12v12H16z"/></g></svg>',
    'dxrd-svg-pictureeditor-image_gallery': '<svg data-bind="svgAttrs" version="1.1" id="Image" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><style>.White{fill:#fff}.st0{opacity:.5}</style><path class="White" d="M22 2H2c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h20c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-1 18H3V4h18v16zM15.5 6C16.9 6 18 7.1 18 8.5S16.9 11 15.5 11 13 9.9 13 8.5 14.1 6 15.5 6zM15 19l-8-8-3 3v5h11z"/><g class="st0"><path class="White" d="M16.4 19H19l-4-4-1.3 1.3z"/></g></svg>',
    'dxrd-svg-pictureeditor-size_mode_cover': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Blue{fill:#1177d7}</style><g id="Cover"><path class="Blue" d="M10 10h12v12H10z"/><path class="Black" d="M6.2 4.8l2.1 2.1-1.4 1.4-2.1-2.1L2 9V2h7L6.2 4.8zm19.6 0l-2.1 2.1 1.4 1.4 2.1-2.1L30 9V2h-7l2.8 2.8zM6.2 27.2l2.1-2.1-1.4-1.4-2.1 2.1L2 23v7h7l-2.8-2.8zM23 30h7v-7l-2.8 2.8-2.1-2.1-1.4 1.4 2.1 2.1L23 30z"/></g></svg>',
    'dxrd-svg-pictureeditor-size_mode_normal': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Blue{fill:#1177d7}.st0{opacity:.35}</style><g id="Normal"><path class="Blue" d="M10 10h12v12H10z"/><g class="st0"><path class="Black" d="M5 15h3v2H5v4l-5-5 5-5v4zm6-10h4v3h2V5h4l-5-5-5 5zm21 11l-5-5v4h-3v2h3v4l5-5zm-15 8h-2v3h-4l5 5 5-5h-4v-3z"/></g><path class="Black" d="M28 22c-2.2 0-4 1.8-4 4v5c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-5c0-2.2-1.8-4-4-4zm0 2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z"/></g></svg>',
    'dxrd-svg-pictureeditor-size_mode_squeeze': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Blue{fill:#1177d7}</style><g id="Squeeze"><path class="Blue" d="M10 10h12v12H10z"/><path class="Black" d="M28.2 26.8l2.1 2.1-1.4 1.4-2.1-2.1L24 31v-7h7l-2.8 2.8zm-24.4 0l-2.1 2.1 1.4 1.4 2.1-2.1L8 31v-7H1l2.8 2.8zM28.2 5.2l2.1-2.1-1.4-1.4-2.1 2.1L24 1v7h7l-2.8-2.8zM1 8h7V1L5.2 3.8 3.1 1.7 1.7 3.1l2.1 2.1L1 8z"/></g></svg>',
    'dxrd-svg-pictureeditor-size_mode_stretchimage': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Blue{fill:#1177d7}</style><g id="Stretch"><path class="Blue" d="M10 10h12v12H10z"/><path class="Black" d="M5 15h3v2H5v4l-5-5 5-5v4zm6-10h4v3h2V5h4l-5-5-5 5zm21 11l-5-5v4h-3v2h3v4l5-5zm-15 8h-2v3h-4l5 5 5-5h-4v-3z"/></g></svg>',
    'dxrd-svg-pictureeditor-size_mode_zoomimage': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Black{fill:#727272}.Blue{fill:#1177d7}</style><g id="Zoom"><path class="Blue" d="M10 10h12v12H10z"/><path class="Black" d="M6.2 4.8l2.1 2.1-1.4 1.4-2.1-2.1L2 9V2h7L6.2 4.8zm19.6 0l-2.1 2.1 1.4 1.4 2.1-2.1L30 9V2h-7l2.8 2.8zM6.2 27.2l2.1-2.1-1.4-1.4-2.1 2.1L2 23v7h7l-2.8-2.8zM23 30h7v-7l-2.8 2.8-2.1-2.1-1.4 1.4 2.1 2.1L23 30z"/></g></svg>',
    'dxrd-svg-pictureeditor-toolbar_brush_options': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><style>.White{fill:#fff}.BrushColor{fill:#000}</style><g id="Painting"><path class="BrushColor" d="M2 21c8.5 8.6 11.8-4.5 19 0-8.4-8.6-11.8 4.6-19 0z"/><path class="White" d="M8 13l2 2c-2.5 4.2-4 4-8 4 2.5-2.5 3.3-6 6-6zm6-1l6.5-6.5c.3-.3.3-.7 0-1l-2-2c-.3-.3-.7-.3-1 0L11 9l3 3zm-5-1c-.3.3-.3.7 0 1l2 2c.3.3.7.3 1 0l1-1-3-3-1 1z"/></g></svg>',
    'dxrd-svg-pictureeditor-toolbar_clear': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><style>.White{fill:#fff}</style><path class="White" d="M19 5c.6 0 1 .4 1 1v1H4V6c0-.6.4-1 1-1h5V4c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1h5zm0 3v12c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V8h14zM9 10H7v9h2v-9zm4 0h-2v9h2v-9zm4 0h-2v9h2v-9z"/></svg>',
    'dxrd-svg-pictureeditor-toolbar_open': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><style>.White{fill:#fff}.st0{opacity:.75}</style><g id="Open"><g class="st0"><path class="White" d="M7.9 11.9c.4-.6 1-.9 1.7-.9H19V8.7c0-.4-.3-.7-.7-.7H10V5.7c0-.4-.3-.7-.7-.7H3.7c-.4 0-.7.3-.7.7v14l4.9-7.8z"/></g><path class="White" d="M9.6 12h13.2c.5 0 .9.6.6 1.1l-4 6.5c-.2.3-.5.5-.8.5H4l4.7-7.5c.2-.4.5-.6.9-.6z"/></g></svg>',
    'dxrd-svg-pictureeditor-toolbar_reset': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><style>.White{fill:#fff}</style><path class="White" d="M12 3C9.5 3 7.3 4 5.6 5.6L3 3v8h8L7.8 7.8C8.9 6.7 10.3 6 12 6c3.3 0 6 2.7 6 6s-2.7 6-6 6c-2.6 0-4.8-1.7-5.6-4H3.2c.9 4 4.5 7 8.8 7 5 0 9-4 9-9s-4-9-9-9z"/></svg>',
    'dxrd-svg-pictureeditor-toolbar_size_mode_and_alignment': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><style>.White{fill:#fff}</style><path class="White" d="M20 12V4h-8l3 3-8 8-3-3v8h8l-3-3 8-8z" id="Sizing"/></svg>',
    'dxrd-svg-portrait': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 34 34" xml:space="preserve"><style>.st0{opacity:.5}</style><g id="Portrait"><path class="dxd-icon-fill" d="M29 0H5c-.5 0-1 .5-1 1v32c0 .5.5 1 1 1h24c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 32H6V2h22v30z"/><g class="st0"><path class="dxd-icon-fill" d="M24 8H10V6h14v2zm0 2H10v2h14v-2zm0 4H10v2h14v-2zm0 4H10v2h14v-2zm0 4H10v2h14v-2zm0 4H10v2h14v-2z"/></g></g></svg>',
    'dxrd-svg-preview-export-export-to-csv': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h12v9H2v11h10v-7l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3zM0 3v7h13V3H0zm4 2H2v3h2v1H2V8H1V5h1V4h2v1zm4 0H6v1h1v1h1v1H7v1H5V8h2V7H6V6H5V5h1V4h2v1zm4 3h-1v1h-1V8H9V4h1v4h1V4h1v4z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4z"/></svg>',
    'dxrd-svg-preview-export-export-to-html': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h18v9H2v12h10v-8l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4zM0 3v7h19V3H0zm4 6H3V7H2v2H1V4h1v2h1V4h1v5zm4-4H7v4H6V5H5V4h3v1zm6 4h-1V6h-1v1h-1V6h-1v3H9V4h1v1h1v1h1V5h1V4h1v5zm4 0h-3V4h1v4h2v1z"/></svg>',
    'dxrd-svg-preview-export-export-to-image': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h14v9H2v12h10v-8l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4zM0 3v7h15V3H0zm2 6H1V4h1v5zm6 0H7V6H6v1H5V6H4v3H3V4h1v1h1v1h1V5h1V4h1v5zm5-4h-3v3h2V7h1v2h-3V8H9V5h1V4h3v1z"/></svg>',
    'dxrd-svg-preview-export-export-to-mht': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h12v9H2v12h10v-8l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4zM2 5h1v1H2z"/><path class="dxd-icon-fill" d="M0 3v7h13V3H0zm4 3H3v1h1v2H3V7H2v2H1V4h2v1h1v1zm4-1H7v4H6V5H5V4h3v1zm4 0h-2v1h1v1h-1v2H9V4h3v1z"/></svg>',
    'dxrd-svg-preview-export-export-to-pdf': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h12v9H2v12h10v-8l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4zM2 5h1v1H2z"/><path class="dxd-icon-fill" d="M0 3v7h13V3H0zm4 3H3v1H2v2H1V4h2v1h1v1zm4 2H7v1H5V4h2v1h1v3zm4-3h-2v1h1v1h-1v2H9V4h3v1z"/><path class="dxd-icon-fill" d="M6 5h1v3H6z"/></svg>',
    'dxrd-svg-preview-export-export-to-rtf': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h14v9H2v12h10v-8l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4zM0 3v7h15V3H0zm6 6H5V6H4v1H3V6H2v3H1V4h1v1h1v1h1V5h1V4h1v5zm4 0H9V7H8v2H7V4h1v2h1V4h1v5zm4-4h-1v4h-1V5h-1V4h3v1z"/></svg>',
    'dxrd-svg-preview-export-export-to-txt': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h18v9H2v12h10v-8l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4zM18 3H0v7h19V3h-1zM4 6H3v1h1v2H3V7H2v2H1V7h1V6H1V4h1v2h1V4h1v2zm4 3H5V4h1v4h2v1zm4-4h-2v1h1v1h1v1h-1v1H9V8h2V7h-1V6H9V5h1V4h2v1zm4 1h-1v1h1v2h-1V7h-1v2h-1V7h1V6h-1V4h1v2h1V4h1v2z"/></svg>',
    'dxrd-svg-preview-export-export-to-xls': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h12v9H2v12h10v-8l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4zM12.3 3H0v7h13V3h-.7zM4 6H3v1h1v2H3V7H2v2H1V7h1V6H1V4h1v2h1V4h1v2zm4 3H5V4h1v4h2v1zm4-4h-2v1h1v1h1v1h-1v1H9V8h2V7h-1V6H9V5h1V4h2v1z"/></svg>',
    'dxrd-svg-preview-export-export-to-xlsx': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v2h12v9H2v12h10v-8l2-2h7V0z"/><path class="dxd-icon-fill" d="M17 14h3v3h-3z"/><path class="dxd-icon-fill" d="M21 14v4h-6v-4l-2 2v8h10V14h-2zm0 9h-6v-4h6v4zM0 3v7h13V3H0zm4 2H3v4H2V5H1V4h3v1zm4 1H7v1h1v2H7V7H6v2H5V7h1V6H5V4h1v2h1V4h1v2zm4-1h-1v4h-1V5H9V4h3v1z"/></svg>',
    'dxrd-svg-preview-export-export-to': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M7.7 9.1L11 5.8V16c0 .6.4 1 1 1s1-.4 1-1V5.8l3.3 3.3c.4.4 1 .4 1.4 0s.4-1 0-1.4L12 2 6.3 7.7c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0zM22 16v4c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1s1 .5 1 1v3h16v-3c0-.5.5-1 1-1s1 .5 1 1z"/></svg>',
    'dxrd-svg-preview-export-Export': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 10l-4-4v2h-1.4C11.8 8 8 11.1 8 15.9V18c1-4.2 4.6-6 8.6-6H18v2l4-4z"/><path class="dxd-icon-fill" d="M18 22H4V2h14l2 2V0H2v24h18v-8l-2 2z"/></svg>',
    'dxrd-svg-preview-first_page': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M7 19c-.6 0-1-.4-1-1V6c0-.5.4-1 1-1 .5 0 1 .4 1 1v12c0 .6-.4 1-1 1zm11.7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L10.6 12l6.7 6.7c.4.4 1 .4 1.4 0z"/></svg>',
    'dxrd-svg-preview-last_page': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 6v12c0 .5-.5 1-1 1s-1-.5-1-1V6c0-.5.5-1 1-1s1 .5 1 1zM5.3 5.3c-.4.4-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l6.7-6.7-6.7-6.7c-.4-.4-1-.4-1.4 0z"/></svg>',
    'dxrd-svg-preview-multi_page_preview': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 1H2c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h8c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zM9 9H3V3h6v6zm13-8h-8c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h8c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm-1 8h-6V3h6v6zm-11 4H2c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h8c.5 0 1-.5 1-1v-8c0-.5-.5-1-1-1zm-1 8H3v-6h6v6z"/></svg>',
    'dxrd-svg-preview-next_page': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M9.7 5.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l6.7-6.7-6.7-6.7z"/></svg>',
    'dxrd-svg-preview-previous_page': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M14.3 18.7L7.6 12l6.7-6.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10.4 12l5.3 5.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z"/></svg>',
    'dxrd-svg-preview-print': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 9c0-.6-.5-1-1-1h-3V2c0-.5-.5-1-1-1H7c-.6 0-1 .5-1 1v6H3c-.5 0-1 .4-1 1v10h4v2c0 .5.4 1 1 1h10c.5 0 1-.5 1-1v-2h4V9zM8 3h8v5H8V3zm8 17H8v-5h8v5zm4-3h-2v-4H6v4H4v-7h16v7z"/></svg>',
    'dxrd-svg-preview-print_page': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M3 10h16v1h2V9c0-.5-.5-1-1-1h-3V2c0-.5-.5-1-1-1H6c-.5 0-1 .5-1 1v6H2c-.5 0-1 .5-1 1v10h11v-2H3v-7zm4-7h8v5H7V3zm16 9h-9c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h9c.5 0 1-.5 1-1V13c0-.5-.5-1-1-1zm-1 10h-7v-8h7v8zM5 13h7v2H5v-2z"/></svg>',
    'dxrd-svg-preview-print_preview': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 4l-4-4v4zM21.7 22.3l-4.5-4.5c.5-.8.8-1.8.8-2.8 0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5c1 0 2-.3 2.8-.8l4.5 4.5c.4.4 1 .4 1.4 0s.4-1 0-1.4zM13.1 18c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.4 3-3 3z"/><path class="dxd-icon-fill" d="M13 8c2 0 3.7.8 5 2.1V6h-6V0H0v20h8.1C6.8 18.7 6 17 6 15c0-3.9 3.1-7 7-7z"/></svg>',
    'dxrd-svg-preview-report_designer': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 6l-4-4v4h4zM14 18h2l8-8-2-2-8 8z"/><path class="dxd-icon-fill" d="M12 20v-4l6-6V8h-6V2H0v20h18v-4l-2 2h-4zm-6-4c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/><path class="dxd-icon-fill" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2H6v-2z"/></svg>',
    'dxrd-svg-preview-search': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21.7 20.3l-5.4-5.4c1.1-1.4 1.7-3.1 1.7-4.9 0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.8 0 3.5-.6 4.9-1.7l5.4 5.4c.4.4 1 .4 1.4 0s.4-1 0-1.4zM4 10c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"/></svg>',
    'dxrd-svg-preview-single_page': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 6V2c0-.6-.4-1-1-1H2c-.5 0-1 .5-1 1v20c0 .5.5 1 1 1h20c.5 0 1-.5 1-1V7c0-.6-.4-1-1-1h-4zm3 15H3V3h13v4c0 .5.5 1 1 1h4v13z"/></svg>',
    'dxrd-svg-preview-sort_asc': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11 11" xml:space="preserve"><path class="dxd-icon-fill" d="M0 7l5-5 5 5z"/></svg>',
    'dxrd-svg-preview-sort_desc': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11 11" xml:space="preserve"><path class="dxd-icon-fill" d="M10 3L5 8 0 3z"/></svg>',
    'dxrd-svg-reportexplorer-component': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 2C7.6 2 4 3.8 4 6v12c0 2.2 3.6 4 8 4s8-1.8 8-4V6c0-2.2-3.6-4-8-4zm0 6C8.1 8 6 6.5 6 6s2.1-2 6-2 6 1.5 6 2-2.1 2-6 2z"/></svg>',
    'dxrd-svg-reportexplorer-components': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M8 11c0-2.5 2.4-4.3 6-4.9V3c0-1.7-2.7-3-6-3S2 1.3 2 3v10c0 1.7 2.7 3 6 3v-5zm0-9c2.1 0 3.4.6 3.9 1-.5.4-1.8 1-3.9 1s-3.4-.6-3.9-1c.5-.4 1.8-1 3.9-1zm8 6c-3.3 0-6 1.3-6 3v10c0 1.7 2.7 3 6 3s6-1.3 6-3V11c0-1.7-2.7-3-6-3zm0 4c-2.1 0-3.4-.6-3.9-1 .5-.4 1.8-1 3.9-1s3.4.6 3.9 1c-.5.4-1.8 1-3.9 1z"/></svg>',
    'dxrd-svg-reportexplorer-formatting_rule': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 10h6V2H2v18h12v-2l-4-4z"/><path class="dxd-icon-fill" d="M12 12v2l4 4v4h2v-4l4-4v-2z"/></svg>',
    'dxrd-svg-reportexplorer-formatting_rules': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 0H0v16h2V2h10z"/><path class="dxd-icon-fill" d="M10 10h6V4H4v16h10v-2l-4-4z"/><path class="dxd-icon-fill" d="M12 12v2l4 4v4h2v-4l4-4v-2z"/></svg>',
    'dxrd-svg-reportexplorer-style': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M6 20c1-.3 1.5-1.1 1.7-2 .2-.5.4-1 .8-1.4.3-.3.5-.5.9-.6 0 0 .7-.1 1-.5.1-.1.2-.3.2-.3l.7-1.3c.1-.2.8-.9.8-.9.6-.7 1.3-1.4 1.9-2.1V2H0v18h6zm5.4-6.4c-.1.3-.2.4 0 0zM21.8 8.1c-.2-.2-.5-.1-.8.1-.4.4-.9.7-1.3 1.1-2 1.7-3.5 3.4-5.3 5.3-.1.1-.5.5-.5.6-.2.2-.3.4-.6.8.6.5 1.5 1.2 2.1 1.7.4-.3.6-.6.6-.6l.4-.4c.7-.9 1.1-1.5 1.8-2.4 1.3-1.7 2.5-3.5 3.5-5.4.4-.3.3-.6.1-.8zM12.5 18.1c-.1-.1-.2-.1-.3-.1-.7-.1-1.2.2-1.7.7-.3.3-.6.8-.8 1.3-.2.9-.7 1.7-1.7 2h2.6c1 0 1.8-.4 2.5-1.1.4-.4.7-.9.6-1.5 0-.2-.1-.4-.2-.5-.3-.3-.7-.5-1-.8z"/></svg>',
    'dxrd-svg-reportexplorer-styles': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 0v2H2v14H0V0z"/><path class="dxd-icon-fill" d="M8 20c1-.3 1.5-1.1 1.7-2 .2-.5.4-1 .8-1.4.3-.3.5-.5.9-.6 0 0 .7-.1 1-.5.1-.1.2-.3.2-.3l.7-1.3c.1-.2.8-.9.8-.9.6-.7 1.3-1.4 1.9-2.1V4H4v16h4zm5.4-6.4c-.1.3-.2.4 0 0zM23.8 8.1c-.2-.2-.5-.1-.8.1-.4.4-.9.7-1.3 1.1-2 1.7-3.5 3.4-5.3 5.3-.1.1-.5.5-.5.6-.2.2-.3.4-.6.8.6.5 1.5 1.2 2.1 1.7.4-.3.6-.6.6-.6l.4-.4c.7-.9 1.1-1.5 1.8-2.4 1.3-1.7 2.5-3.5 3.5-5.4.4-.3.3-.6.1-.8zM14.5 18.1c-.1-.1-.2-.1-.3-.1-.7-.1-1.2.2-1.7.7-.4.4-.6.9-.8 1.4-.3.9-.7 1.6-1.7 2h2.6c1 0 1.8-.4 2.5-1.1.4-.4.7-.9.6-1.5 0-.2-.1-.4-.2-.5-.3-.4-.7-.6-1-.9z"/></svg>',
    'dxrd-svg-reportexplorer-tablecell': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M8 8v8h8V8H8zm6 6h-4v-4h4v4z"/><path class="dxd-icon-fill dxd-opacity-80" d="M2 2v20h20V2H2zm18 6h-4v2h4v4h-4v2h4v4h-4v-4h-2v4h-4v-4H8v4H4v-4h4v-2H4v-4h4V8H4V4h4v4h2V4h4v4h2V4h4v4z"/></svg>',
    'dxrd-svg-reportexplorer-tablerow': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M16 8H2v8h20V8h-6zm-8 6H4v-4h4v4zm6 0h-4v-4h4v4zm6 0h-4v-4h4v4z"/><path class="dxd-icon-fill dxd-opacity-80" d="M4 8V4h4v4h2V4h4v4h2V4h4v4h2V2H2v6zM20 16v4h-4v-4h-2v4h-4v-4H8v4H4v-4H2v6h20v-6z"/></svg>',
    'dxrd-svg-series-area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 20v-4l8-8 4 4 8-8v16z"/></svg>',
    'dxrd-svg-series-area3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M8 12v2h4v2H8v2h4v2H8v2h6V12zM20 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6z"/><path class="dxd-icon-fill" d="M12 8L8 4l-8 8v4h6v-6h14V0z"/></svg>',
    'dxrd-svg-series-bubbles': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><circle class="dxd-icon-fill" cx="8" cy="4" r="2"/><circle class="dxd-icon-fill" cx="16" cy="10" r="4"/><circle class="dxd-icon-fill" cx="7" cy="19" r="3"/></svg>',
    'dxrd-svg-series-candle_stick': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 4V2h-2v2h-2v16h2v2h2v-2h2V4h-2zm0 14h-2V6h2v12zM8 2H6v2H4v16h2v2h2v-2h2V4H8z"/></svg>',
    'dxrd-svg-series-doughnut': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M5.1 10C5.5 7 7 5.5 10 5.1V0C5 .5.5 5 0 10h5.1zM12 5.1c3 .5 5 2.9 5 5.9 0 1.3-.4 2.5-1.1 3.5l3.6 3.6c1.5-2 2.5-4.4 2.5-7.1C22 5.3 18 .5 12 0v5.1zM14.5 15.9c-1 .7-2.2 1.1-3.5 1.1-3 0-5.4-2-5.9-5H0c.5 6 5.2 10 11 10 2.7 0 5.1-1 7-2.6l-3.5-3.5z"/></svg>',
    'dxrd-svg-series-doughnut3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12v2h4v2h-4v2h4v2h-4v2h6V12h-2zM22 12h-4v10h4l2-2.5v-5.9L22 12zm0 8h-2v-6h2v6zM10 4.9V0C5 .5.5 5 0 10h5c.5-3 2-4.6 5-5.1zM12 0v4.9c2 .4 4.5 2.1 4.9 5.1h5C21.5 5 17 .5 12 0zM5.1 12H0c.4 5 4 7.9 8 9.1v-5.3C6 14.9 5.4 14 5.1 12z"/></svg>',
    'dxrd-svg-series-full_stacked_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 2v14L12 6l4 4 6-6V2z"/><path class="dxd-icon-fill" d="M12 10L2 20v2h20V8l-6 6z"/></svg>',
    'dxrd-svg-series-full_stacked_area3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM14 8l6-6V0H0v14L10 4z"/><path class="dxd-icon-fill" d="M10 8L0 18v2h8v-8h6zM20 6l-6 6h6z"/></svg>',
    'dxrd-svg-series-full_stacked_bar': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M4 4h4v10H4zM10 4h4v6h-4zM10 12h4v8h-4zM16 4h4v8h-4zM16 14h4v6h-4zM4 16h4v4H4z"/></svg>',
    'dxrd-svg-series-full_stacked_bar3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0h4v10H2zM8 0h4v6H8zM8 8h4v4H8zM14 0h4v8h-4zM14 10h4v2h-4zM2 12h4v4H2zM8 14v2h4v2H8v2h4v2H8v2h6V14h-2zM20 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6z"/></svg>',
    'dxrd-svg-series-full_stacked_line': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 2h20v2H2zM12 8L2 18v4l10-10 4 4 6-6V6l-6 6z"/></svg>',
    'dxrd-svg-series-full_stacked_line3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M8 14v2h4v2H8v2h4v2H8v2h6V14h-2zM20 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM0 0h20v2H0z"/><path class="dxd-icon-fill" d="M12 12h4l4-4V4l-6 6-4-4L0 16v4l10-10z"/></svg>',
    'dxrd-svg-series-full_stacked_spline_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 11.9c1.8 0 2.6 1.3 3.3 2.3S6.5 16 8 16c1.4 0 2.6-2.1 3.7-4.2C13.3 9.1 14.9 6 18 6c1.5 0 2.8.7 4 1.8V2H2v9.9z"/><path class="dxd-icon-fill" d="M18 8c-1.9 0-3.2 2.4-4.5 4.7C12.1 15.3 10.6 18 8 18s-3.7-1.6-4.4-2.7C3 14.3 2.7 14 2 14v8h20V10.7C20.8 9.3 19.4 8 18 8z"/></svg>',
    'dxrd-svg-series-full_stacked_spline_area3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM16 4c1.5 0 2.8.7 4 1.8V0H0v9.9c1.8 0 2.6 1.3 3.3 2.3C4 13.2 4.5 14 6 14c1.4 0 2.6-2.1 3.7-4.2C11.3 7.1 12.9 4 16 4z"/><path class="dxd-icon-fill" d="M11.5 10.8l-.6 1.2H20V8.7C18.8 7.3 17.4 6 16 6c-1.9 0-3.2 2.5-4.5 4.8zM1.6 13.3C1 12.3.7 12 0 12v8h8v-4.6c-1 .4-1.2.6-2 .6-2.6 0-3.6-1.6-4.4-2.7z"/></svg>',
    'dxrd-svg-series-funnel': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12h4l6-6H4zM4 2h16v2H4zM10 22l4-2v-6h-4z"/></svg>',
    'dxrd-svg-series-funnel3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12v2h4v2h-4v2h4v2h-4v2h6V12h-2zM22 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM6 10h4l6-6H0zM0 0h16v2H0zM6 20l2-1v-7H6z"/></svg>',
    'dxrd-svg-series-gantt': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 4h8v4H2zM6 10h14v4H6zM2 16h12v4H2z"/></svg>',
    'dxrd-svg-series-line': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 16L12 6l4 4 6-6v4l-6 6-4-4L2 20z"/></svg>',
    'dxrd-svg-series-line3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 0l-6 6-4-4L0 12v4L10 6l4 4 6-6z"/><path class="dxd-icon-fill" d="M8 12v2h4v2H8v2h4v2H8v2h6V12h-2zM20 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6z"/></svg>',
    'dxrd-svg-series-manhattan_bar3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12v2h4v2h-4v2h4v2h-4v2h6V12h-2zM22 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM0 12h4v8H0z"/><path class="dxd-icon-fill dxd-opacity-80" d="M12 5.9h4V10h-4z"/><path class="dxd-icon-fill" d="M8 10h2V2H6v18h2z"/></svg>',
    'dxrd-svg-series-nested_doughnut': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 10h2c-.5-5-5-9.5-10-10v2c4 .5 7.5 4 8 8z"/><path class="dxd-icon-fill" d="M11 20c-5 0-9-4-9-9 0-4.6 3-8.5 8-9V0C4 .5 0 5.2 0 11c0 6.1 4.9 11 11 11 5.7 0 10.5-4 11-10h-2c-.5 5-4.3 8-9 8z"/><path class="dxd-icon-fill" d="M11 16c-2.4 0-4.4-2-4.9-4h-2c.5 3 3.4 6 6.9 6 1.4 0 2.7-.4 3.8-1.2l-1.5-1.5c-.6.5-1.4.7-2.3.7zM4.1 10h2c.5-2 2.5-4 4.9-4 2.8 0 5 2.2 5 5 0 .9-.2 1.7-.7 2.4l1.5 1.5c.8-1.1 1.2-2.5 1.2-3.9 0-3.9-3.1-7-7-7-3.5 0-6.4 3-6.9 6z"/></svg>',
    'dxrd-svg-series-pie': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 2v10H2c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2z"/><path class="dxd-icon-fill" d="M10 0C4.5 0 0 4.5 0 10h10V0z"/></svg>',
    'dxrd-svg-series-pie3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12v2h4v2h-4v2h4v2h-4v2h6V12h-2zM22 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM10 0C4.5 0 0 4.5 0 10h10V0zM12 2v8h9.8c-.9-4.6-5-8-9.8-8zM8 21.1V12H2c0 4.1 2 7.6 6 9.1z"/></svg>',
    'dxrd-svg-series-point': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><circle class="dxd-icon-fill" cx="4" cy="16" r="2"/><circle class="dxd-icon-fill" cx="8" cy="8" r="2"/><circle class="dxd-icon-fill" cx="14" cy="12" r="2"/><circle class="dxd-icon-fill" cx="20" cy="6" r="2"/></svg>',
    'dxrd-svg-series-polar_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M11.1 0H11C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11C22 5 17.1.1 11.1 0zm.9 19.9V17c0-.5-.5-1-1-1s-1 .5-1 1v3c-4-.4-7.5-3.8-8-8h3.1c.5 0 1-.5 1-1s-.5-1-1-1h-3H2c.5-4.2 4-7.5 8-8v1c0 .5.5 1 1 1s1-.5 1-1v-.9c4 .5 7.5 3.8 7.9 7.9H19c-.5 0-1 .5-1 1s.5 1 1 1h.9c-.4 4.1-3.9 7.4-7.9 7.9z"/><path class="dxd-icon-fill" d="M6 6h10v10z"/></svg>',
    'dxrd-svg-series-polar_line': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M11.1 0H11C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11C22 5 17.1.1 11.1 0zm.9 19.9V17c0-.5-.5-1-1-1s-1 .5-1 1v3c-4-.4-7.5-3.8-8-8h3.1c.5 0 1-.5 1-1s-.5-1-1-1h-3H2c.5-4.2 4-7.5 8-8v1c0 .5.5 1 1 1s1-.5 1-1v-.9c4 .5 7.5 3.8 7.9 7.9H19c-.5 0-1 .5-1 1s.5 1 1 1h.9c-.4 4.1-3.9 7.4-7.9 7.9z"/><path class="dxd-icon-fill" d="M16 16L6 6h10v10zm-6-8l4 4V8h-4z"/></svg>',
    'dxrd-svg-series-polar_point': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M11.1 0H11C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11C22 5 17.1.1 11.1 0zm8.8 10H12V2.1c4 .5 7.5 3.8 7.9 7.9zM10 2v8H2.1 2c.5-4.2 4-7.5 8-8zm0 18c-4-.4-7.5-3.8-8-8h8v8zm2-.1V12h7.9c-.4 4.1-3.9 7.4-7.9 7.9z"/><circle class="dxd-icon-fill" cx="7" cy="7" r="1"/><circle class="dxd-icon-fill" cx="7" cy="15" r="1"/><circle class="dxd-icon-fill" cx="15" cy="7" r="1"/><circle class="dxd-icon-fill" cx="15" cy="15" r="1"/></svg>',
    'dxrd-svg-series-radar_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M16 16L6 6h10v10zm-6-8l4 4V8h-4z"/><path class="dxd-icon-fill dxd-opacity-80" d="M11.9 15.9c-.3.1-.6.1-.9.1-2.8 0-5-2.2-5-5 0-.3 0-.6.1-.9L4.5 8.5c-.3.8-.5 1.6-.5 2.5 0 3.9 3.1 7 7 7 .9 0 1.7-.2 2.5-.5l-1.6-1.6z"/><path class="dxd-icon-fill dxd-opacity-80" d="M11.1 0H11C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11C22 5 17.1.1 11.1 0zM11 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"/></svg>',
    'dxrd-svg-series-radar_line': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M11.1 0H11C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11C22 5 17.1.1 11.1 0zM11 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"/><circle class="dxd-icon-fill" cx="7" cy="7" r="1"/><circle class="dxd-icon-fill" cx="7" cy="15" r="1"/><circle class="dxd-icon-fill" cx="15" cy="7" r="1"/><circle class="dxd-icon-fill" cx="15" cy="15" r="1"/><g><path class="dxd-icon-fill dxd-opacity-80" d="M13.1 15.5c-.6.3-1.4.5-2.1.5-.7 0-1.4-.2-2.1-.5-.2.7-.8 1.3-1.6 1.4 1.1.7 2.3 1 3.6 1 1.3 0 2.6-.4 3.7-1-.7-.1-1.3-.6-1.5-1.4zM17 7.4c-.1.8-.7 1.4-1.4 1.6.2.6.4 1.3.4 2s-.2 1.4-.5 2.1c.7.2 1.3.8 1.4 1.6.6-1.1 1-2.3 1-3.6s-.3-2.7-.9-3.7zM8.9 6.5c.7-.3 1.4-.5 2.1-.5.7 0 1.5.2 2.1.5.2-.7.8-1.3 1.6-1.4-1.1-.7-2.3-1-3.7-1-1.3-.1-2.6.3-3.6.9.7.2 1.3.7 1.5 1.5zM6.5 13.1c-.3-.7-.5-1.4-.5-2.1s.2-1.4.5-2.1c-.8-.2-1.3-.8-1.5-1.6-.6 1.1-1 2.4-1 3.7s.4 2.6 1 3.7c.2-.8.7-1.4 1.5-1.6z"/></g></svg>',
    'dxrd-svg-series-radar_point': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill dxd-opacity-80" d="M11.1 0H11C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11C22 5 17.1.1 11.1 0zM11 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"/><circle class="dxd-icon-fill" cx="7" cy="7" r="1"/><circle class="dxd-icon-fill" cx="15" cy="7" r="1"/><circle class="dxd-icon-fill" cx="15" cy="15" r="1"/><g><path class="dxd-icon-fill dxd-opacity-80" d="M13.1 15.5c-.6.3-1.4.5-2.1.5-.3 0-.6 0-.9-.1h-.2c-.2-.1-.5-.1-.7-.2-.1 0-.2-.1-.3-.1-1.1-.5-2-1.4-2.5-2.5-.1-.1-.1-.2-.1-.3-.1-.2-.2-.4-.2-.7v-.2c-.1-.3-.1-.6-.1-.9 0-.5.1-1 .2-1.5.1-.2.1-.4.2-.6-.7-.2-1.2-.8-1.4-1.6-.1.3-.2.5-.4.8 0 .1-.1.1-.1.2 0 .2-.1.4-.2.6 0 .1-.1.2-.1.3 0 .2-.1.4-.1.6v.3c-.1.3-.1.6-.1.9 0 .3 0 .6.1.9v.2c0 .3.1.5.2.8v.1c.5 1.7 1.6 3.1 3.1 4 .5.3 1.1.6 1.7.8h.1c.3.1.5.1.8.2h.2c.3 0 .6.1.9.1h.5c1.1-.1 2.2-.4 3.1-1-.8-.3-1.4-.8-1.6-1.6zM17 7.4c-.1.8-.7 1.4-1.4 1.6.2.6.4 1.3.4 2s-.2 1.4-.5 2.1c.7.2 1.3.8 1.4 1.6.6-1.1 1-2.3 1-3.6s-.3-2.7-.9-3.7zM7.4 5c.8.1 1.4.7 1.6 1.4.6-.2 1.3-.4 2-.4s1.5.2 2.1.5c.2-.7.8-1.3 1.6-1.4-1.1-.7-2.3-1-3.7-1-1.3-.1-2.6.3-3.6.9z"/></g></svg>',
    'dxrd-svg-series-range_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 14L12 4l4 4 6-6v6l-6 6-4-4L2 20z"/></svg>',
    'dxrd-svg-series-range_area3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12v2h4v2h-4v2h4v2h-4v2h6V12h-2zM22 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6z"/><path class="dxd-icon-fill" d="M20 0l-6 6-4-4L0 12v6L10 8l2 2h4l4-4z"/></svg>',
    'dxrd-svg-series-range_bar': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M4 12h4v8H4zM16 6h4v14h-4zM10 2h4v14h-4z"/></svg>',
    'dxrd-svg-series-scatter_line': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22.8 8c-1.5-2.7-4-4.7-7-5.5-3-.8-6.1-.8-8.8.8C3 5.6.5 10 0 14h2.1c.4-4 2.5-6.9 6-8.9 2.2-1.3 4.8-1.4 7.2-.7 2.4.6 4.4 2.3 5.7 4.5 1 1.7 1.2 3.8.7 5.7-.5 1.9-1.8 3.5-3.5 4.5-2.7 1.6-6.2.6-7.8-2.2-1.2-2.1-.4-4.8 1.6-6 .8-.4 1.6-.5 2.5-.3.8.2 1.5.8 2 1.6.3.6.4 1.2.2 1.9-.2.6-.6 1.2-1.1 1.5-.8.5-1.9.2-2.4-.7-.3-.6-.1-1.3.4-1.6l-1-1.8c-1.5.9-2.1 2.9-1.2 4.4 1 1.8 3.3 2.5 5.1 1.4 2.1-1.2 2.9-4 1.7-6.1-.7-1.3-1.8-2.1-3.2-2.5-1.4-.4-2.8-.2-4 .5C8 11 6.9 14.9 8.7 18c2.1 3.8 6.8 5.1 10.6 2.9 2.2-1.3 3.8-3.3 4.4-5.7.6-2.4.3-5-.9-7.2z"/></svg>',
    'dxrd-svg-series-side_by_side_bar': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M4 12h4v8H4zM16 6h4v14h-4zM10 2h4v18h-4z"/></svg>',
    'dxrd-svg-series-side_by_side_bar3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12v2h4v2h-4v2h4v2h-4v2h6V12h-2zM22 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM0 10h4v8H0zM12 4h4v6h-4zM10 0H6v18h2v-8h2z"/></svg>',
    'dxrd-svg-series-side_by_side_full_stacked_bar': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0h4v12H0zM0 14h4v8H0zM12 0h4v16h-4zM12 18h4v4h-4zM18 8h4v14h-4zM18 0h4v6h-4zM6 8h4v14H6zM6 0h4v6H6z"/></svg>',
    'dxrd-svg-series-side_by_side_full_stacked_bar3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM0 0h4v12H0zM0 14h4v8H0zM12 0h4v12h-4zM18 8h4v4h-4zM18 0h4v6h-4zM6 0h4v6H6zM10 8H6v14h2V12h2z"/></svg>',
    'dxrd-svg-series-side_by_side_gantt': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0h8v4H2zM4 12h12v4H4zM6 18h12v4H6zM6 6h14v4H6z"/></svg>',
    'dxrd-svg-series-side_by_side_range_bar': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 12h4v8H0zM12 6h4v12h-4zM18 4h4v12h-4zM6 2h4v14H6z"/></svg>',
    'dxrd-svg-series-side_by_side_stacked_bar': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 10h4v2H0zM0 14h4v8H0zM6 12h4v10H6zM6 0h4v10H6zM12 4h4v4h-4zM12 10h4v12h-4zM18 2h4v4h-4zM18 8h4v14h-4z"/></svg>',
    'dxrd-svg-series-side_by_side_stacked_bar3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM0 8h4v4H0zM0 14h4v8H0zM6 12h2v10H6zM6 0h4v10H6zM12 4h4v4h-4zM12 10h4v2h-4zM18 2h4v4h-4zM18 8h4v2h-4z"/></svg>',
    'dxrd-svg-series-spline': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M24 11.5C22.1 8.6 19.7 6 17 6c-3 0-4.7 3.1-6.2 5.8C9.6 13.8 8.4 16 7 16c-1.5 0-2-.8-2.7-1.8-.6-1-1.5-2.2-3.3-2.3-.4 0-.7.1-1 .2V15c0-.1.1-.5.4-.8.2-.2.5-.3.6-.3.7 0 1 .4 1.6 1.3C3.4 16.4 4.4 18 7 18c2.6 0 4.1-2.7 5.5-5.2C13.8 10.4 15.1 8 17 8c2.9 0 5.9 5.4 6.9 7.2l.1.2v-3.9z"/></svg>',
    'dxrd-svg-series-spline3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12v2h4v2h-4v2h4v2h-4v2h6V12h-2zM22 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM15 2c2.9 0 5.9 5.4 6.9 7.2l.1.2V5.5C20.1 2.6 17.7 0 15 0c-3 0-4.7 3.1-6.2 5.8C7.6 7.8 6.4 10 5 10c-1.5 0-2-.8-2.7-1.8-.5-.8-1.1-1.7-2.3-2.1v2.3c.2.2.4.5.6.9C1.4 10.4 2.4 12 5 12c2.6 0 4.1-2.7 5.5-5.2C11.8 4.4 13.1 2 15 2z"/></svg>',
    'dxrd-svg-series-spline_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M15 2c-3 0-4.7 3.1-6.2 5.8C7.6 9.8 6.4 12 5 12c-1.5 0-2-.8-2.7-1.8-.5-.8-1.1-1.7-2.3-2.1V20h22V7.5C20.1 4.6 17.8 2 15 2z"/></svg>',
    'dxrd-svg-series-spline_area3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6z"/><path class="dxd-icon-fill" d="M22 7.5C20.1 4.6 17.8 2 15 2c-3 0-4.7 3.1-6.2 5.8C7.6 9.8 6.4 12 5 12c-1.5 0-2-.8-2.7-1.8-.5-.8-1.1-1.7-2.3-2.1V20h8v-8h14V7.5z"/></svg>',
    'dxrd-svg-series-stacked_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M16 8l-4-4L2 14v4L12 8l4 4 6-6V2z"/><path class="dxd-icon-fill" d="M12 12L2 22h20V10l-6 6z"/></svg>',
    'dxrd-svg-series-stacked_area3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 12v2h4v2h-4v2h4v2h-4v2h6V12h-2zM22 12h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM8 22v-8l-8 8z"/><path class="dxd-icon-fill" d="M20 2l-6 6-4-4L0 14v4L10 8l2 2h4l4-4z"/></svg>',
    'dxrd-svg-series-stacked_bar': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M4 8h4v4H4zM4 14h4v6H4zM10 2h4v6h-4zM10 10h4v10h-4zM16 6h4v4h-4zM16 12h4v8h-4z"/></svg>',
    'dxrd-svg-series-stacked_bar3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM0 6h4v4H0zM0 12h4v6H0zM6 0h4v6H6zM10 8H6v10h2v-6h2zM12 4h4v4h-4zM12 10h4v2h-4z"/></svg>',
    'dxrd-svg-series-stacked_line': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M14 8l-4-4L0 14v4L10 8l4 4 8-8V0z"/><path class="dxd-icon-fill" d="M10 10L0 20v4l10-10 8 8 4-4v-4l-4 4z"/></svg>',
    'dxrd-svg-series-stacked_line3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M14 12l8-8V0l-8 8-4-4L0 14v4L10 8zM10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6z"/><path class="dxd-icon-fill" d="M10 10l-2 2h4zM0 24l8-8v-4l-8 8zM22 10V6l-6 6h4z"/></svg>',
    'dxrd-svg-series-stacked_spline_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M15 0c-3 0-4.7 3.1-6.2 5.8C7.6 7.8 6.4 10 5 10c-1.5 0-2-.8-2.7-1.8-.5-.8-1.1-1.7-2.3-2.1v6c1.2.4 1.8 1.3 2.3 2.1C3 15.2 3.5 16 5 16c1.4 0 2.6-2.1 3.7-4.2C10.3 9.1 12 6 15 6c2.8 0 5.1 2.6 7 5.5v-6C20.1 2.6 17.8 0 15 0z"/><path class="dxd-icon-fill" d="M15 9c-3 0-4.7 3.1-6.2 5.8C7.6 16.8 6.4 19 5 19c-1.5 0-2-.8-2.7-1.8-.5-.8-1.1-1.7-2.3-2.1V22h22v-7.5C20.1 11.6 17.8 9 15 9z"/></svg>',
    'dxrd-svg-series-stacked_spline_area3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6z"/><path class="dxd-icon-fill" d="M15 6c2.8 0 5.1 2.6 7 5.5v-6C20.1 2.6 17.8 0 15 0c-3 0-4.7 3.1-6.2 5.8C7.6 7.8 6.4 10 5 10c-1.5 0-2-.8-2.7-1.8-.5-.8-1.1-1.7-2.3-2.1v6c1.2.4 1.8 1.3 2.3 2.1C3 15.2 3.5 16 5 16c1.4 0 2.6-2.1 3.7-4.2C10.3 9.1 12 6 15 6z"/><path class="dxd-icon-fill" d="M5.1 19c-1.5 0-2.1-.8-2.8-1.8-.5-.8-1.2-1.7-2.3-2.1V22h8v-5.7C7 17.8 6.1 19 5.1 19zM10.4 12h9.7c-1.5-1.7-3.2-3-5.2-3-1.9 0-3.3 1.3-4.5 3z"/></svg>',
    'dxrd-svg-series-step_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 6V0h-6v12H6V8H0v14h24V6z"/></svg>',
    'dxrd-svg-series-step_area3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM18 14v10h4l2-2v-6l-2-2h-4zm4 8h-2v-6h2v6z"/><path class="dxd-icon-fill" d="M18 6V0h-6v10H6V6H0v14h8v-8h16V6z"/></svg>',
    'dxrd-svg-series-step_line': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M14 2v18H8v-6H0v2h6v6h10V4h6v8h2V2z"/></svg>',
    'dxrd-svg-series-step_line3d': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M10 14v2h4v2h-4v2h4v2h-4v2h6V14h-2zM22 14h-4v10h4l2-2v-6l-2-2zm0 8h-2v-6h2v6zM6 12H0v2h4v6h4v-2H6zM16 10h4V8h-2V0h-8v12h2V2h4v6z"/></svg>',
    'dxrd-svg-series-stock': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M8 0H4v4H0v4h4v14h4v-4h4v-4H8zM20 18V0h-8v4h4v18h8v-4z"/></svg>',
    'dxrd-svg-series-swift_plot': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M24 8l-4 4-2-2-6 6-4-4-2 2-4-4-2 2v-2l2-2 4 4 2-2 4 4 6-6 2 2 4-4"/></svg>',
    'dxrd-svg-series-waterfall': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M19 1h4v22h-4V1zm-6 14h4V1h-4v14zm-6 0h4V9H7v6zm-6 8h4V9H1v14z"/><g class="dxd-icon-fill"><path class="dxd-icon-fill" d="M17 1h2v2h-2V1zM5 11h2V9H5v2zm6 4h2v-2h-2v2z"/></g></svg>',
    'dxrd-svg-tabs-collapse': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M16 12l-6 6-2-2 4-4-4-4 2-2z"/></svg>',
    'dxrd-svg-tabs-expand': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M8 12l6 6 2-2-4-4 4-4-2-2z"/></svg>',
    'dxrd-svg-tabs-expressions': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 2c-.9 0-2.2.1-3.6.4-2.4.5-2.7 2.2-2.9 3.1L10.9 9H9c-.6 0-1 .4-1 1s.4 1 1 1h1.5l-1.1 6.1-.2 1.4c-.1.5-.2 1-.9 1.2-1.2.2-1.9.3-2.3.3-.6 0-1 .4-1 1s.4 1 1 1c.9 0 1.5-.1 2.9-.4 2.4-.5 2.7-2.2 2.9-3.1l.3-1.4 1.1-6.1h2.9c.6 0 1-.4 1-1s-.4-1-1-1h-2.5l.6-3.5c.1-.5.2-1 .9-1.2 1.1-.2 2.5-.3 2.9-.3.6 0 1-.4 1-1s-.4-1-1-1z"/></svg>',
    'dxrd-svg-tabs-fieldlist': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 2C7.6 2 4 3.8 4 6v12c0 2.2 3.6 4 8 4s8-1.8 8-4V6c0-2.2-3.6-4-8-4zm0 6C8.4 8 6.5 6.5 6.5 6S8.4 4 12 4s5.5 1.5 5.5 2-1.9 2-5.5 2z"/></svg>',
    'dxrd-svg-tabs-parameters': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M14 22h-4c-.6 0-1-.4-1-1v-8.6L1.3 4.7C.7 4.1 1.1 3 2 3h20c.9 0 1.3 1.1.7 1.7L15 12.4V21c0 .6-.4 1-1 1zm-3-2h2v-8.4L19.6 5H4.4l6.6 6.6V20z"/></svg>',
    'dxrd-svg-tabs-reportexplorer': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 15h-3v-3c0-.6-.4-1-1-1h-5V9h3c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1H8c-.6 0-1 .5-1 1v6c0 .5.4 1 1 1h3v2H6c-.6 0-1 .4-1 1v3H2c-.6 0-1 .5-1 1v6c0 .5.4 1 1 1h8c.6 0 1-.5 1-1v-6c0-.5-.4-1-1-1H7v-2h10v2h-3c-.6 0-1 .5-1 1v6c0 .5.4 1 1 1h8c.6 0 1-.5 1-1v-6c0-.5-.4-1-1-1zM9 7V3h6v4H9zm0 10v4H3v-4h6zm12 4h-6v-4h6v4z"/></svg>',
    'dxrd-svg-tabs-search': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2.6 21.4c.8.8 2 .8 2.8 0l4.6-4.5c1.1.7 2.5 1.1 4 1.1 4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8c0 1.5.4 2.9 1.1 4.1l-4.6 4.6c-.7.7-.7 1.9.1 2.7zM10 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/></svg>',
    'dxrd-svg-titles-bottom_center': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M4 0v14h14V0H4zm6 8V6h2v2h-2zm2 2v2h-2v-2h2zm-2-6V2h2v2h-2zM6 2h2v2H6V2zm0 4h2v2H6V6zm0 4h2v2H6v-2zm10 2h-2v-2h2v2zm0-4h-2V6h2v2zm-2-4V2h2v2h-2z"/><path class="dxd-icon-fill" d="M6 18h10v4H6z"/></svg>',
    'dxrd-svg-titles-bottom_left': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M6 0v14h14V0H6zm6 8V6h1.9v2H12zm1.9 2v2H12v-2h1.9zM12 4V2h1.9v2H12zM8 2h1.9v2H8V2zm0 4h1.9v2H8V6zm0 4h1.9v2H8v-2zm9.9 2H16v-2h1.9v2zm0-4H16V6h1.9v2zM16 4V2h1.9v2H16z"/><path class="dxd-icon-fill" d="M2 18h10v4H2z"/></svg>',
    'dxrd-svg-titles-bottom_right': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 0v14h14V0H2zm6 8V6h2v2H8zm2 2v2H8v-2h2zM8 4V2h2v2H8zm6 0h-2V2h2v2zm0 4h-2V6h2v2zm0 4h-2v-2h2v2zM4 10h2v2H4v-2zm0-4h2v2H4V6zm0-2V2h2v2H4z"/><path class="dxd-icon-fill" d="M10 18h10v4H10z"/></svg>',
    'dxrd-svg-titles-left_bottom_vertical': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 2H8v14h14V2zm-8 6h2v2h-2V8zm-2 2h-2V8h2v2zm6-2h2v2h-2V8zm0 6v-2h2v2h-2zm-4 0v-2h2v2h-2zm-4 0v-2h2v2h-2zm2-10v2h-2V4h2zm4 0v2h-2V4h2zm2 0h2v2h-2V4z"/><path class="dxd-icon-fill" d="M0 10h4v10H0z"/></svg>',
    'dxrd-svg-titles-left_center_vertical': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 4H8v14h14V4zm-8 6h2v2h-2v-2zm-2 2h-2v-2h2v2zm6-2h2v2h-2v-2zm2-4v2h-2V6h2zm-4 0v2h-2V6h2zm-4 0v2h-2V6h2zm-2 10v-2h2v2h-2zm4 0v-2h2v2h-2zm4-2h2v2h-2v-2z"/><path class="dxd-icon-fill" d="M0 6h4v10H0z"/></svg>',
    'dxrd-svg-titles-left_top_vertical': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 6H8v14h14V6zm-8 6h2v2h-2v-2zm-2 2h-2v-2h2v2zm6-2h2v2h-2v-2zm2-4v2h-2V8h2zm-4 0v2h-2V8h2zm-4 0v2h-2V8h2zm-2 10v-2h2v2h-2zm4 0v-2h2v2h-2zm4-2h2v2h-2v-2z"/><path class="dxd-icon-fill" d="M0 2h4v10H0z"/></svg>',
    'dxrd-svg-titles-right_bottom_vertical': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 16h14V2H0v14zm8-6H6V8h2v2zm2-2h2v2h-2V8zm-6 2H2V8h2v2zm-2 4v-2h2v2H2zm4 0v-2h2v2H6zm4 0v-2h2v2h-2zm2-10v2h-2V4h2zM8 4v2H6V4h2zM4 6H2V4h2v2z"/><path class="dxd-icon-fill" d="M18 10h4v10h-4z"/></svg>',
    'dxrd-svg-titles-right_center_vertical': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 18h14V4H0v14zm8-6H6v-2h2v2zm2-2h2v2h-2v-2zm-6 2H2v-2h2v2zm0-6v2H2V6h2zm4 0v2H6V6h2zm4 0v2h-2V6h2zm-2 10v-2h2v2h-2zm-4 0v-2h2v2H6zm-2 0H2v-2h2v2z"/><path class="dxd-icon-fill" d="M18 6h4v10h-4z"/></svg>',
    'dxrd-svg-titles-right_top_vertical': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 20h14V6H0v14zm8-6H6v-2h2v2zm2-2h2v2h-2v-2zm-6 2H2v-2h2v2zm0-6v2H2V8h2zm4 0v2H6V8h2zm4 0v2h-2V8h2zm-2 10v-2h2v2h-2zm-4 0v-2h2v2H6zm-2 0H2v-2h2v2z"/><path class="dxd-icon-fill" d="M18 2h4v10h-4z"/></svg>',
    'dxrd-svg-titles-top_center': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M18 22V8H4v14h14zm-6-8v2h-2v-2h2zm-2-2v-2h2v2h-2zm2 6v2h-2v-2h2zm-6 0h2v2H6v-2zm0-4h2v2H6v-2zm0-4h2v2H6v-2zm10 2h-2v-2h2v2zm0 4h-2v-2h2v2zm0 2v2h-2v-2h2z"/><path class="dxd-icon-fill" d="M6 0h10v4H6z"/></svg>',
    'dxrd-svg-titles-top_left': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 22V8H6v14h14zm-6-8v2h-2v-2h2zm-2-2v-2h2v2h-2zm2 6v2h-2v-2h2zm-6 0h2v2H8v-2zm0-4h2v2H8v-2zm0-4h2v2H8v-2zm10 2h-2v-2h2v2zm0 4h-2v-2h2v2zm0 2v2h-2v-2h2z"/><path class="dxd-icon-fill" d="M2 0h10v4H2z"/></svg>',
    'dxrd-svg-titles-top_right': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M16 22V8H2v14h14zm-6-8v2H8v-2h2zm-2-2v-2h2v2H8zm2 6v2H8v-2h2zm4 2h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zM4 10h2v2H4v-2zm0 4h2v2H4v-2zm2 4v2H4v-2h2z"/><path class="dxd-icon-fill" d="M10 0h10v4H10z"/></svg>',
    'dxrd-svg-todo-chart': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 10h4v12H0zM18 12h4v10h-4zM6 6h4v16H6zM12 2h4v20h-4z"/></svg>',
    'dxrd-svg-todo-pdfcontent': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve"><style>.Red{fill:#d02027}</style><path class="Red" d="M6 8h2v2H6V8zm8 6h2V8h-2v6zM30 2v18H0V2h30zM10 8c0-1-1-2-2-2H4v10h2v-4h2c1 0 2-1 2-2V8zm8 0c0-1-1-2-2-2h-4v10h4c1 0 2-1 2-2V8zm8-2h-6v10h2v-4h2v-2h-2V8h4V6z"/></svg>',
    'dxrd-svg-todo-pdfsignature': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 12c-2.1 0-3.3 1.8-4.3 3.2-.6.9-1.2 1.8-1.7 1.8-.2-.2-.2-1.4-.2-1.9 0-1.2-.1-3.1-1.7-3.1-2 0-2.9 1.9-3.6 3.6C10.4 17.7 9.7 19 8 19c-.7 0-1.4-.6-2.1-1.6C11.2 11.7 13 8.7 13 6c0-3.4-1.8-6-4-6-3.4 0-7 3.1-7 10 0 2.2.5 4.9 1.5 7-1 1-2 2.1-3.2 3.3-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3 1-1 1.9-2 2.8-2.8C5.4 20.2 6.6 21 8 21c3.1 0 4.3-2.7 5.2-4.6.6-1.2 1-2 1.4-2.3v1.1c0 1.3.1 3.9 2.3 3.9 1.6 0 2.5-1.4 3.4-2.7 1-1.5 1.7-2.4 2.7-2.4.6 0 1-.4 1-1s-.4-1-1-1zM5 15.4c-.6-1.6-1-3.5-1-5.4 0-5.5 2.6-8 5-8 .8 0 2 1.5 2 4 0 2-1.7 4.7-6 9.4z"/></svg>',
    'dxrd-svg-todo-pivotgrid': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 2H4v2l8 8-8 8v2h16v-2H7l8-8-8-8h13z"/></svg>',
    'dxrd-svg-todo-sparkline': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 4v16h20V4H2zm18 10l-2-2-4 4-2-2-4 4-2-2-2 2v-4l2-2 2 2 4-4 2 2 4-4 2 2v4z"/></svg>',
    'dxrd-svg-toolbar-fullscreen-exit': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="FullScreen" class="dxd-icon-fill" d="M21 15c.6 0 1 .4 1 1s-.4 1-1 1h-2.6l3.3 3.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L17 18.4V21c0 .6-.4 1-1 1s-1-.4-1-1v-6h6zM3 15c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-3.3 3.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L7 18.4V21c0 .6.4 1 1 1s1-.4 1-1v-6H3zm18-6c.6 0 1-.4 1-1s-.4-1-1-1h-2.6l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L17 5.6V3c0-.6-.4-1-1-1s-1 .4-1 1v6h6zM3 9c-.6 0-1-.4-1-1s.4-1 1-1h2.6L2.3 3.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L7 5.6V3c0-.6.4-1 1-1s1 .4 1 1v6H3z"/></svg>',
    'dxrd-svg-toolbar-fullscreen': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="FullScreen" class="dxd-icon-fill" d="M8 2c.6 0 1 .4 1 1s-.4 1-1 1H5.4l3.3 3.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L4 5.4V8c0 .6-.4 1-1 1s-1-.4-1-1V2h6zm8 0c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-3.3 3.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L20 5.4V8c0 .6.4 1 1 1s1-.4 1-1V2h-6zM8 22c.6 0 1-.4 1-1s-.4-1-1-1H5.4l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4 18.6V16c0-.6-.4-1-1-1s-1 .4-1 1v6h6zm8 0c-.6 0-1-.4-1-1s.4-1 1-1h2.6l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3V16c0-.6.4-1 1-1s1 .4 1 1v6h-6z"/></svg>',
    'dxrd-svg-toolbar-hightlightEditingFields': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M15 18.9l2-2V21c0 .5-.5 1-1 1H1c-.5 0-1-.5-1-1v-7c0-.5.5-1 1-1h8.1l-.1.1V15H2v5h13v-1.1zM1 11h10.1l2-2H2V4h13v3.1l2-2V3c0-.5-.5-1-1-1H1c-.5 0-1 .5-1 1v7c0 .5.5 1 1 1zm22.7-2.2L14.5 18H10v-4.5l9.2-9.2c.4-.4 1-.4 1.4 0l3.1 3.1c.4.4.4 1 0 1.4zm-5 2.2L17 9.3l-5 5V16h1.7l5-5zm2.9-2.8l-1.7-1.7L18.4 8 20 9.6l1.6-1.4z"/></svg>',
    'dxrd-svg-toolbar-scripts': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 6c-.1-1-1.4-3.4-3-4-.7.5-1.5 1.3-.5 4H22z"/><path class="dxd-icon-fill" d="M16 4c0-1.5.8-2.7 1.9-3.4-.4-.3-1.1-.6-2-.6h-12C1.7 0 0 1.8 0 4v.2L3.4 16H17.2s.2 1.9.4 2.4c.1.3.3 1 .5 1.2.4.6.7 1.1.8 1.1C19.6 20 20 19 20 18L16 4zM17.9.6c.2.1-.1-.1 0 0z"/><path class="dxd-icon-fill" d="M16.4 19.9c-.3-.8-.4-1.9-.4-1.9H0c0 2.2 1.7 4 3.9 4h12c.6 0 1.1-.1 1.6-.3 0-.1-.2-.3-.5-.8-.2-.2-.3-.5-.6-1z"/></svg>',
    'dxrd-svg-toolbar-validateBindingMode': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M6.4 16.8L9.2 14c.4-.4 1-.4 1.4 0l2.4 2.4 3-3V4.5C16 2.6 12.9 1 9 1S2 2.6 2 4.5v12c0 1.8 2.7 3.3 6.1 3.5l-1.8-1.8c-.3-.4-.3-1 .1-1.4zM4.5 4.5C4.6 4.1 6.1 3 9 3s4.4 1.1 4.5 1.5C13.4 4.9 11.9 6 9 6S4.6 4.9 4.5 4.5zM24 11L13 22l-4.5-4.5 1.4-1.4 3.1 3.1 9.6-9.6L24 11z"/></svg>',
    'dxrd-svg-toolbox-barcode': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M3 22H1V2h2v20zM9 2H5v20h4V2zm4 0h-2v20h2V2zm4 0h-2v20h2V2zm6 0h-4v20h4V2z"/></svg>',
    'dxrd-svg-toolbox-charactercomb': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 3H1c-.5 0-1 .5-1 1v15c0 .5.5 1 1 1h22c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1zM11 18H2V5h9v13zm11 0h-9V5h9v13zM8.3 9.6c.5.4.7 1.1.7 2V15H7.6v-.7c-.3.6-.8.8-1.6.8-.4 0-.8-.1-1.1-.2-.3-.2-.5-.4-.7-.6-.2-.3-.2-.6-.2-.9 0-.6.2-1 .6-1.3.4-.3.9-.5 1.7-.5h1.2c0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.9-.3-.3 0-.6 0-.8.1-.3.1-.5.2-.7.4l-.7-1.2c.3-.2.6-.4 1-.5C5.6 9 6 9 6.4 9c.9 0 1.5.2 1.9.6zM7 13.7c.2-.1.4-.3.4-.6v-.6h-1c-.6 0-1 .2-1 .7 0 .2.1.4.2.5.2.1.4.2.6.2.4 0 .6 0 .8-.2zm12.4-4.4c.4.3.7.6.9 1.1.2.5.3 1 .3 1.6 0 .6-.1 1.2-.3 1.6-.2.5-.5.8-.9 1.1-.4.3-.9.4-1.4.4-.7 0-1.2-.3-1.6-.8v.7H15V7h1.5v2.7c.4-.5.9-.7 1.6-.7.4-.1.9.1 1.3.3zm-.7 3.9c.2-.3.4-.7.4-1.2s-.1-.9-.4-1.2c-.2-.3-.6-.4-.9-.4-.4 0-.7.1-.9.4-.2.3-.4.7-.4 1.2s.1.9.4 1.2c.2.3.6.5.9.5.4 0 .7-.2.9-.5z"/></svg>',
    'dxrd-svg-toolbox-chart': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M1 14v8h6v-8H1zm4 6H3v-4h2v4zM9 8v14h6V8H9zm4 12h-2V10h2v10zm4-18v20h6V2h-6zm4 18h-2V4h2v16z"/></svg>',
    'dxrd-svg-toolbox-checkbox': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 9.4V20c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1V4c0-.5.5-1 1-1h12.1l-2 2H5v14h14v-7.6l2-2zm.3-7.4L11 12.3 7.7 9l-1.4 1.4 4.7 4.7L22.7 3.4 21.3 2z"/></svg>',
    'dxrd-svg-toolbox-crossbandbox': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M0 6v4c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1zm0 8v4c0 .6.4 1 1 1h22c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1z"/></g><path class="dxd-icon-fill" d="M21 1v2c0 .5-.5 1-1 1v1h-2V4c-.5 0-1-.5-1-1H7c0 .5-.5 1-1 1v1H4V4c-.5 0-1-.5-1-1V1c0-.5.5-1 1-1h2c.5 0 1 .5 1 1h10c0-.5.5-1 1-1h2c.5 0 1 .5 1 1zm-1 19v-1h-2v1c-.5 0-1 .5-1 1H7c0-.5-.5-1-1-1v-1H4v1c-.5 0-1 .5-1 1v2c0 .5.5 1 1 1h2c.5 0 1-.5 1-1h10c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2c0-.5-.5-1-1-1zM6 11H4v2h2v-2zm14 0h-2v2h2v-2z"/></svg>',
    'dxrd-svg-toolbox-crossbandline': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M0 6v4c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1zm0 8v4c0 .6.4 1 1 1h22c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1zm2 3"/></g><path class="dxd-icon-fill" d="M14 1v2c0 .5-.5 1-1 1v1h-2V4c-.5 0-1-.5-1-1V1c0-.5.5-1 1-1h2c.5 0 1 .5 1 1zm-1 19v-1h-2v1c-.5 0-1 .5-1 1v2c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2c0-.5-.5-1-1-1zm0-9h-2v2h2v-2z"/></svg>',
    'dxrd-svg-toolbox-crosstab': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 2H4v2l8 8-8 8v2h16v-2H7l8-8-8-8h13z"/></svg>',
    'dxrd-svg-toolbox-gauge': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M8 12c0 1.1.4 2.1 1.2 2.8l-2.1 2.1C5.8 15.7 5 13.9 5 12c0-3.9 3.1-7 7-7 1.3 0 2.5.4 3.6 1l-2.2 2.2c-.5-.1-.9-.2-1.4-.2-2.2 0-4 1.8-4 4zm10-3.6l-2.2 2.2c.2.4.2.9.2 1.3 0 1.1-.4 2.1-1.1 2.8l2.1 2.1c1.2-1.3 2-3 2-4.9 0-1.2-.4-2.4-1-3.5z"/></g><path class="dxd-icon-fill" d="M17.4 7.6c-.3-.4-.6-.7-1-1l-2.1 2.1-1.5 1.5c-.2-.1-.5-.2-.8-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.3-.1-.6-.2-.8l1.5-1.5 2.1-2.1z"/></svg>',
    'dxrd-svg-toolbox-label': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M3.5 19h1.2l5.4-15.4c.2-.3.6-.6 1-.6h1.8c.4 0 .8.3.9.7L19.2 19h1.3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1.2l-1.4-4H8.7l-1.4 4h1.2c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5zm5.8-6h5.3L12 5.3h-.1L9.3 13z"/></svg>',
    'dxrd-svg-toolbox-line': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 18h-1.6L6 4.6V3c0-.5-.5-1-1-1H3c-.5 0-1 .5-1 1v2c0 .5.5 1 1 1h1.6L18 19.4V21c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2c0-.5-.5-1-1-1z"/></svg>',
    'dxrd-svg-toolbox-pagebreak': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 1v7c0 .5-.5 1-1 1H2c-.5 0-1-.5-1-1V1h2v6h18V1h2zM3 23v-6h18v6h2v-7c0-.5-.5-1-1-1H2c-.5 0-1 .5-1 1v7h2zm3-1h12v-2H6v2zM6 2v2h12V2H6zm-3 9H1v2h2v-2zm4 0H5v2h2v-2zm4 0H9v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>',
    'dxrd-svg-toolbox-pageinfo': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M9.1 18H3V3h15v6.1c.7.1 1.4.3 2 .5V2c0-.5-.5-1-1-1H2c-.5 0-1 .5-1 1v17c0 .5.5 1 1 1h7.6c-.3-.6-.4-1.3-.5-2z"/><path class="dxd-icon-fill" d="M17 10c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm1 11h-2v-4h2v4zm0-6h-2v-2h2v2z"/></svg>',
    'dxrd-svg-toolbox-panel': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-1 18H4V4h16v16z"/></svg>',
    'dxrd-svg-toolbox-pdfcontent': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M19 18h2v4c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1v-4h2v3h14v-3zM5 3h14v2h2V2c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1v3h2V3zm2.1 6.9h-1v1.7h1c.4 0 .6-.1.8-.2.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3zM23 6v11H1V6h22zM9.4 10.8c0-.4-.1-.7-.3-1-.2-.2-.4-.4-.7-.6C8 9.1 7.6 9 7.2 9H5v5h1.2v-1.4h1c.4 0 .8-.1 1.2-.2.3-.1.6-.4.8-.6s.2-.6.2-1zm5.9.7c0-.5-.1-.9-.3-1.3-.2-.4-.6-.7-1-.9-.5-.2-.9-.3-1.5-.3h-2.3v5h2.3c.5 0 1-.1 1.5-.3.4-.2.7-.5 1-.9.2-.4.3-.8.3-1.3zM20 9h-3.8v5h1.2v-1.8h2.3v-.9h-2.3V9.9H20V9zm-7.5.9h-1.1V13h1.1c.5 0 .9-.1 1.2-.4.3-.3.5-.7.5-1.1 0-.5-.2-.9-.5-1.1-.3-.3-.7-.5-1.2-.5z"/></svg>',
    'dxrd-svg-toolbox-pdfsignature': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 13c-2.1 0-3.3 1.8-4.3 3.2-.6.9-1.2 1.8-1.7 1.8-.2-.2-.2-1.4-.2-1.9 0-1.2-.1-3.1-1.7-3.1-2 0-2.9 1.9-3.6 3.6C10.4 18.7 9.7 20 8 20c-.7 0-1.4-.6-2.1-1.6C11.2 12.7 13 9.7 13 7c0-3.4-1.8-6-4-6-3.4 0-7 3.1-7 10 0 2.2.5 4.9 1.5 7-1 1-2 2.1-3.2 3.3-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3 1-1 1.9-2 2.8-2.8C5.4 21.2 6.6 22 8 22c3.1 0 4.3-2.7 5.2-4.6.6-1.2 1-2 1.4-2.3v1.1c0 1.3.1 3.9 2.3 3.9 1.6 0 2.5-1.4 3.4-2.7 1-1.5 1.7-2.4 2.7-2.4.6 0 1-.4 1-1s-.4-1-1-1zM5 16.4c-.6-1.6-1-3.5-1-5.4 0-5.5 2.6-8 5-8 .8 0 2 1.5 2 4 0 2-1.7 4.7-6 9.4z"/></svg>',
    'dxrd-svg-toolbox-picturebox': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-1 18H4V4h16v16z"/><circle class="dxd-icon-fill" cx="15.5" cy="8.5" r="2.5"/><path class="dxd-icon-fill" d="M6 18v-5l3-3 7 8z"/></svg>',
    'dxrd-svg-toolbox-pivotgrid': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 21H4c-.9 0-1.3-1.1-.7-1.7l7.3-7.3-7.3-7.3C2.7 4.1 3.1 3 4 3h16v4h-2V5H6.4l7 7-7 7H18v-2h2v4z"/></svg>',
    'dxrd-svg-toolbox-richtext': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 12.7V20H4V4h7.3l2-2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V10.7l-2 2z"/><path id="EditingFields" class="dxd-icon-fill" d="M23.7 3.4L20.6.3c-.4-.4-1-.4-1.4 0L9 10.5V15h4.5L23.7 4.8c.4-.4.4-1 0-1.4zm-11 9.6H11v-1.7l6-6L18.6 7l-5.9 6zM20 5.6L18.4 4l1.5-1.5 1.7 1.7L20 5.6z"/></svg>',
    'dxrd-svg-toolbox-shape': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M7 16H3c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h12c.5 0 1 .5 1 1v4h-.5c-.5 0-1 .1-1.5.1V4H4v10h3.1c0 .5-.1 1-.1 1.5v.5zm16-.5c0 4.1-3.4 7.5-7.5 7.5S8 19.6 8 15.5 11.4 8 15.5 8s7.5 3.4 7.5 7.5zm-2 0c0-3-2.5-5.5-5.5-5.5S10 12.5 10 15.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5z"/></svg>',
    'dxrd-svg-toolbox-sparkline': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-1 2v2.6l-7 7-3-3-6 6V4h16zM4 20v-.6l6-6 3 3 7-7V20H4z"/></svg>',
    'dxrd-svg-toolbox-subreport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 3v19c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h3v2H5v17h14V4h-2V2h3c.5 0 1 .5 1 1zm-7-1V1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1H8v3h8V2h-2zm2 6H8v2h8V8zm0 6H8v-2h8v2zm0 4H8v-2h8v2z"/></svg>',
    'dxrd-svg-toolbox-table': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-7 2v4h-4V4h4zm-4 6h4v4h-4v-4zM4 4h4v4H4V4zm0 6h4v4H4v-4zm0 10v-4h4v4H4zm6 0v-4h4v4h-4zm10 0h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>',
    'dxrd-svg-toolbox-tableofcontents': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M18 5h-2V3h2v2zm0 2h-2v2h2V7zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z"/></g><path class="dxd-icon-fill" d="M14 5H2V3h12v2zm8-2h-2v2h2V3zm-8 4H2v2h12V7zm8 0h-2v2h2V7zm-8 4H2v2h12v-2zm8 0h-2v2h2v-2zm-8 4H2v2h12v-2zm8 0h-2v2h2v-2zm-8 4H2v2h12v-2zm8 0h-2v2h2v-2z"/></svg>',
    'dxrd-svg-toolbox-zipcode': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M2 2h6v2H2zM0 4h2v6H0zM8 4h2v6H8zM0 12h2v8H0zM8 12h2v8H8zM2 10h6v2H2zM2 20h6v2H2zM14 2h6v2h-6zM12 4h2v6h-2zM20 4h2v6h-2zM12 12h2v8h-2zM20 12h2v8h-2zM14 10h6v2h-6zM14 20h6v2h-6z"/></svg>',
    'dxrd-svg-wizard-crosstab-columns': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-7 2v4h-4V4h4zm-4 6h4v4h-4v-4zM4 4h4v4H4V4zm0 6h4v4H4v-4zm0 10v-4h4v4H4zm6 0v-4h4v4h-4zm10 0h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M4 10h16v4H4z"/></g></svg>',
    'dxrd-svg-wizard-crosstab-data': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M20 21H4c-.9 0-1.3-1.1-.7-1.7l7.3-7.3-7.3-7.3C2.7 4.1 3.1 3 4 3h16v4h-2V5H6.4l7 7-7 7H18v-2h2v4z"/></svg>',
    'dxrd-svg-wizard-crosstab-fields': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 7H3V5h18v2zm0 4H3v2h18v-2zm0 6H3v2h18v-2z"/></svg>',
    'dxrd-svg-wizard-crosstab-rows': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M21 2H3c-.5 0-1 .5-1 1v18c0 .5.5 1 1 1h18c.5 0 1-.5 1-1V3c0-.5-.5-1-1-1zm-7 2v4h-4V4h4zm-4 6h4v4h-4v-4zM4 4h4v4H4V4zm0 6h4v4H4v-4zm0 10v-4h4v4H4zm6 0v-4h4v4h-4zm10 0h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M10 4h4v16h-4z"/></g></svg>',
    'dxrd-svg-wizard-CrossTabReport': '<svg data-bind="svgAttrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><style>.Black{fill:#727272}.White{fill:#fff}.Blue{fill:#1177d7}.st0{opacity:.75}.st1{opacity:.25}.st2{opacity:.5}</style><g id="Layer_1"><g class="st0"><path class="Black" d="M84 92H14c-.6 0-1-.5-1-1V5c0-.6.4-1 1-1h70c.6 0 1 .4 1 1v86c0 .5-.4 1-1 1z"/></g><path class="White" d="M14 5h70v86H14z"/><g class="st1"><path class="Black" d="M48 45H36V35h12v10z"/></g><g class="st2"><path class="Black" d="M34 45H22V35h12v10zm14-12H36V23h12v10zm-14 0H22V23h12v10z"/></g><g class="st2"><path class="Blue" d="M48 47H36v10h12V47zm14-12H50v10h12V35zm0-12H50v10h12V23zM34 57H22V47h12v10z"/></g><path class="Blue" d="M75 47H51c-.6 0-1 .4-1 1v24c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V48c0-.6-.4-1-1-1zm-4 8h-8.8l5 5-5 5H71v3H55l8-8-8-8h16v3z"/></g></svg>',
    'dxrd-svg-wizard-EmptyReport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 96 96" xml:space="preserve"><style>.Black{fill:#727272}.White{fill:#fff}.st0{opacity:.75}.st1{opacity:.25}</style><g id="EmptyReport"><g class="st0"><path class="Black" d="M83 93H13c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h70c.6 0 1 .4 1 1v86c0 .6-.4 1-1 1z"/></g><path class="White" d="M13 6h70v86H13z"/><g class="st1"><path class="Black" d="M83 14v-1h-7V6h-1v7H21V6h-1v7h-7v1h7v70h-7v1h7v7h1v-7h54v7h1v-7h7v-1h-7V14h7zm-8 70H21V14h54v70z"/></g></g></svg>',
    'dxrd-svg-wizard-LabelReport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 96 96" xml:space="preserve"><style>.Black{fill:#727272}.White{fill:#fff}.Blue{fill:#1177d7}.st0{opacity:.75}.st1{opacity:.25}</style><g id="LabelReport"><g class="st0"><path class="Black" d="M83 92H13c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h70c.6 0 1 .4 1 1v86c0 .6-.4 1-1 1z"/></g><path class="White" d="M13 5h70v86H13z"/><g class="st1"><path class="Blue" d="M47 29H21V13h26v16zm28 0H49V13h26v16zM47 47H21V31h26v16zm28 0H49V31h26v16zM47 65H21V49h26v16zm28 0H49V49h26v16zM47 83H21V67h26v16zm28 0H49V67h26v16z"/></g></g></svg>',
    'dxrd-svg-wizard-StandardReport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 96 96" xml:space="preserve"><style>.Black{fill:#727272}.White{fill:#fff}.Blue{fill:#1177d7}.st0{opacity:.75}.st1{opacity:.25}.st2{opacity:.5}</style><g id="StandardReport"><g class="st2"><path class="Black" d="M27.5 15C17.8 15 10 13 10 10.5v32C10 45 17.8 47 27.5 47S45 45 45 42.5v-32C45 13 37.2 15 27.5 15z"/></g><g class="st1"><ellipse class="Black" cx="27.5" cy="8.5" rx="17.5" ry="4.5"/></g><g class="st0"><path class="Black" d="M85.8 30h-13L60 42.8 47.2 30H33.9c-.6 0-1 .4-1 1v60c0 .6.4 1 1 1h51.9c.6 0 1-.4 1-1V31c0-.6-.5-1-1-1z"/></g><path transform="rotate(90 59.864 61)" class="White" d="M29.9 35.1h60V87h-60z"/><g class="st1"><path class="Black" d="M48.9 46h-8v6h8v-6zm10 0h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-29.9 8h-8v6h8v-6zm10 0h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-29.9 8h-8v6h8v-6zm10 0h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-29.9 8h-8v6h8v-6zm10 0h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-29.9 8h-8v6h8v-6zm10 0h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6z"/></g><g class="st2"><path class="Black" d="M41 38h8v6h-8v-6zm14.2 0H51v6h8v-2.2L55.2 38zm5.8 3.8V44h8v-6h-4.2L61 41.8zM71 38v6h8v-6h-8z"/></g><path class="Blue" d="M64 30c0-7.2-6.7-13-15-13 3.9 0 7 5.8 7 13h-6l10 10 10-10h-6z"/></g></svg>',
    'dxrd-svg-wizard-UndefinedReport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 96 96" xml:space="preserve"><style>.Black{fill:#727272;color:#727272}.White{fill:#fff}.st0{opacity:.75}</style><g id="UndefinedReport"><g class="st0"><path class="Black" d="M83 92H13c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h70c.6 0 1 .4 1 1v86c0 .6-.4 1-1 1z"/></g><path class="White" d="M13 5h70v86H13V5z"/><foreignObject x="12" y="5" width="70" height="86"><div class="Black dxrd-report-type-item-text" data-bind="text: $root.getLocalization(`Report Template`, `ASPxReportsStringId.ReportDesigner_Wizard_ReportTemplate_Thumbnail`)"/></foreignObject></g></svg>',
    'dxrd-svg-wizard-VerticalReport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 96 96" xml:space="preserve"><style>.Black{fill:#727272}.White{fill:#fff}.Blue{fill:#1177d7}.st0{opacity:.75}.st1{opacity:.25}.st2{opacity:.5}</style><g id="VerticalReport"><g class="st2"><path class="Black" d="M27.5 15C17.8 15 10 13 10 10.5v32C10 45 17.8 47 27.5 47S45 45 45 42.5v-32C45 13 37.2 15 27.5 15z"/></g><g class="st1"><ellipse class="Black" cx="27.5" cy="8.5" rx="17.5" ry="4.5"/></g><g class="st0"><path class="Black" d="M85.8 30h-13L60 42.8 47.2 30H33.9c-.6 0-1 .4-1 1v60c0 .6.4 1 1 1h51.9c.6 0 1-.4 1-1V31c0-.6-.5-1-1-1z"/></g><path transform="rotate(90 59.864 61)" class="White" d="M29.9 35.1h60V87h-60z"/><g class="st1"><path class="Black" d="M55.2 38H51v6h8v-2.2L55.2 38zm5.8 3.8V44h8v-6h-4.2L61 41.8zM71 38v6h8v-6h-8zm-12.1 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-19.9 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-19.9 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-19.9 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-19.9 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6z"/></g><g class="st2"><path class="Black" d="M41 38h8v6h-8v-6zm7.9 8h-8v6h8v-6zm0 8h-8v6h8v-6zm0 8h-8v6h8v-6zm0 8h-8v6h8v-6zm0 8h-8v6h8v-6z"/></g><path class="Blue" d="M64 30c0-7.2-6.7-13-15-13 3.9 0 7 5.8 7 13h-6l10 10 10-10h-6z"/></g></svg>',
    'dxrd-svg-wizard-warning': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 31 31" xml:space="preserve"><path class="dxd-icon-fill" d="M15.5 0C6.9 0 0 6.9 0 15.5S6.9 31 15.5 31 31 24.1 31 15.5 24.1 0 15.5 0zm0 25c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-7C14.1 18 13 9.9 13 8.5 13 7.1 14.1 6 15.5 6S18 7.1 18 8.5 16.9 18 15.5 18z"/></svg>',
});

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/dx-viewer-bindings.js

Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: $data.customGlyphStyleCss', function ($context, $element) { return { 'style': function () { return $context.$data.customGlyphStyleCss; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxSelectBox: { dataSource: items, displayExpr: \'displayName\', value: popupModel.textRangeValue, useItemTextAsTitle: true , placeholder: $root.getLocalization(\'Select Period\', \'AnalyticsCoreStringId.Mobile_DateRange_SelectPeriod\') }', function ($context, $element) { return { 'dxSelectBox': function () { return { 'dataSource': $context.$data.items, 'displayExpr': 'displayName', 'value': $context.$data.popupModel.textRangeValue, 'useItemTextAsTitle': true, 'placeholder': $context.$root.getLocalization('Select Period', 'AnalyticsCoreStringId.Mobile_DateRange_SelectPeriod') }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'From\',\'AnalyticsCoreStringId.Mobile_DateRange_From\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('From', 'AnalyticsCoreStringId.Mobile_DateRange_From'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: popupModel._dateButtonEditorClassName, dxButton: { text: startDate && popupModel.getStringDate(startDate) || $root.getLocalization(\'Start Date\',\'AnalyticsCoreStringId.Mobile_DateRange_StartDate\'), stylingMode: \'contained\', onClick: popupModel.focusButton, focusStateEnabled: false, activeStateEnabled: false }', function ($context, $element) { return { 'css': function () { return $context.$data.popupModel._dateButtonEditorClassName; }, 'dxButton': function () { return { 'text': $context.$data.startDate && $context.$data.popupModel.getStringDate($context.$data.startDate) || $context.$root.getLocalization('Start Date', 'AnalyticsCoreStringId.Mobile_DateRange_StartDate'), 'stylingMode': 'contained', 'onClick': $context.$data.popupModel.focusButton, 'focusStateEnabled': false, 'activeStateEnabled': false }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: popupModel._dateEditorClassName', function ($context, $element) { return { 'css': function () { return $context.$data.popupModel._dateEditorClassName; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'Until\',\'AnalyticsCoreStringId.Mobile_DateRange_Until\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('Until', 'AnalyticsCoreStringId.Mobile_DateRange_Until'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: popupModel._dateButtonEditorClassName, dxButton: { text: endDate && popupModel.getStringDate(endDate) || $root.getLocalization(\'End Date\',\'AnalyticsCoreStringId.Mobile_DateRange_EndDate\'), stylingMode: \'contained\', type:\'default\', onClick: popupModel.focusButton, focusStateEnabled: false, activeStateEnabled: false }', function ($context, $element) { return { 'css': function () { return $context.$data.popupModel._dateButtonEditorClassName; }, 'dxButton': function () { return { 'text': $context.$data.endDate && $context.$data.popupModel.getStringDate($context.$data.endDate) || $context.$root.getLocalization('End Date', 'AnalyticsCoreStringId.Mobile_DateRange_EndDate'), 'stylingMode': 'contained', 'type': 'default', 'onClick': $context.$data.popupModel.focusButton, 'focusStateEnabled': false, 'activeStateEnabled': false }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(startDate, undefined) }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrv-daterange-calendar', 'data': $context.$data._createTemplateData($context.$data.startDate, undefined) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(endDate, startDate) }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrv-daterange-calendar', 'data': $context.$data._createTemplateData($context.$data.endDate, $context.$data.startDate) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: clickToBrick, styleunit: { width: width, height: height }, autoFit: { autoFitBy: $root.reportPreview.autoFitBy, zoom: zoom, width: originalWidth, height: originalHeight, previewSize: $root.reportPreview.previewSize, brickLoading: brickLoading, skipIfInvisible: true }', function ($context, $element) { return { 'dxclick': function () { return $context.$data.clickToBrick; }, 'styleunit': function () { return { 'width': $context.$data.width, 'height': $context.$data.height }; }, 'autoFit': function () { return { 'autoFitBy': $context.$root.reportPreview.autoFitBy, 'zoom': $context.$data.zoom, 'width': $context.$data.originalWidth, 'height': $context.$data.originalHeight, 'previewSize': $context.$root.reportPreview.previewSize, 'brickLoading': $context.$data.brickLoading, 'skipIfInvisible': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { width: width, height: height, lineHeight: height }, style: { \'background-color\': color }, visible: pageLoading, text: loadingText', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$data.width, 'height': $context.$data.height, 'lineHeight': $context.$data.height }; }, 'style': function () { return { 'background-color': $context.$data.color }; }, 'visible': function () { return $context.$data.pageLoading; }, 'text': function () { return $context.$data.loadingText; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { src: displayImageSrc }, style:{ \'background-color\': color }', function ($context, $element) { return { 'attr': function () { return { 'src': $context.$data.displayImageSrc }; }, 'style': function () { return { 'background-color': $context.$data.color }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dxrdp-active\': active() && $parents[1].blocks().length > 1 }, visible: !$root.slideOptions.readerMode', function ($context, $element) { return { 'css': function () { return { 'dxrdp-active': $context.$data.active() && $context.$parents[1].blocks().length > 1 }; }, 'visible': function () { return !$context.$root.slideOptions.readerMode; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: { top: topP, left: $data.leftP, right: $data.rightP, height: heightP, width: widthP }, css: { \'dxrd-report-preview-brick-selected\': $data.active }', function ($context, $element) { return { 'style': function () { return { 'top': $context.$data.topP, 'left': $context.$data.leftP, 'right': $context.$data.rightP, 'height': $context.$data.heightP, 'width': $context.$data.widthP }; }, 'css': function () { return { 'dxrd-report-preview-brick-selected': $context.$data.active }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: activeBricks', function ($context, $element) { return { 'foreach': function () { return $context.$data.activeBricks; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: "dxrd-page-brick-mobile", data: $data }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-page-brick-mobile', 'data': $context.$data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !brickLoading() && $data.editingFields', function ($context, $element) { return { 'if': function () { return !$context.$data.brickLoading() && $context.$data.editingFields; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: editingFields', function ($context, $element) { return { 'foreach': function () { return $context.$data.editingFields; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit:{ height: height }, dxrdSearchBar: $data', function ($context, $element) { return { 'styleunit': function () { return { 'height': $context.$data.height }; }, 'dxrdSearchBar': function () { return $context.$data; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: !$data.editorVisible(), dxclick: function(s, e) { $data.focusEditor(e); }', function ($context, $element) { return { 'visible': function () { return !$context.$data.editorVisible(); }, 'dxclick': function () { return function (s, e) { $context.$data.focusEditor(e); }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'Tap here to Search\', \'ASPxReportsStringId.WebDocumentViewer_Mobile_TapHereToSearch\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('Tap here to Search', 'ASPxReportsStringId.WebDocumentViewer_Mobile_TapHereToSearch'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: $data.editorVisible()', function ($context, $element) { return { 'visible': function () { return $context.$data.editorVisible(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: searchText, onEnterKey: function() { $data.startSearch(); } }', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data.searchText, 'onEnterKey': function () { $context.$data.startSearch(); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxMenu: { wrapperAttr: { class: \'dxrd-preview-export-to\' }, items: items, onItemClick: clickAction }, attr: { title: $root.getLocalization(text, $data.textId) }', function ($context, $element) { return { 'dxMenu': function () { return { 'wrapperAttr': { 'class': 'dxrd-preview-export-to' }, 'items': $context.$data.items, 'onItemClick': $context.$data.clickAction }; }, 'attr': function () { return { 'title': $context.$root.getLocalization($context.$data.text, $context.$data.textId) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { title: $root.getLocalization(text, $data.textId) }', function ($context, $element) { return { 'attr': function () { return { 'title': $context.$root.getLocalization($context.$data.text, $context.$data.textId) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization($data.text, $data.textId)', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization($context.$data.text, $context.$data.textId); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: ko.unwrap($data.imageClassName), template: { name: ko.unwrap($data.imageTemplateName), if: !!ko.unwrap($data.imageTemplateName)}', function ($context, $element) { return { 'css': function () { return $context.ko.unwrap($context.$data.imageClassName); }, 'template': function () { return { 'name': $context.ko.unwrap($context.$data.imageTemplateName), 'if': !!$context.ko.unwrap($context.$data.imageTemplateName) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: visible, css: $data.imageClassName, template: { name: $data.imageTemplateName, if: !!ko.unwrap($data.imageTemplateName)}, dxclick: clickAction', function ($context, $element) { return { 'visible': function () { return $context.$data.visible; }, 'css': function () { return $context.$data.imageClassName; }, 'template': function () { return { 'name': $context.$data.imageTemplateName, 'if': !!$context.ko.unwrap($context.$data.imageTemplateName) }; }, 'dxclick': function () { return $context.$data.clickAction; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxrdMobilePaginator: $data', function ($context, $element) { return { 'dxrdMobilePaginator': function () { return $context.$data; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text : text', function ($context, $element) { return { 'text': function () { return $context.$data.text; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopover: { wrapperAttr: { class: \'dxrd-menu-export-popover\' }, width: \'266px\', height: \'266px\', visible: visible, target: \'.dxrdp-mobile-action.dxrd-image-export-to\', container: $root.getPopupContainer($element), }', function ($context, $element) { return { 'dxPopover': function () { return { 'wrapperAttr': { 'class': 'dxrd-menu-export-popover' }, 'width': '266px', 'height': '266px', 'visible': $context.$data.visible, 'target': '.dxrdp-mobile-action.dxrd-image-export-to', 'container': $context.$root.getPopupContainer($element) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: action, text: text', function ($context, $element) { return { 'dxclick': function () { return $context.$data.action; }, 'text': function () { return $context.$data.text; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { wrapperAttr: { class: \'dxrd-menu-parameters-popup\' }, showTitle: false, width: function() {return window.innerWidth }, height: function() {return window.innerHeight }, visible: visible, container: $root.getPopupContainer($element), }', function ($context, $element) { return { 'dxPopup': function () { return { 'wrapperAttr': { 'class': 'dxrd-menu-parameters-popup' }, 'showTitle': false, 'width': function () { return window.innerWidth; }, 'height': function () { return window.innerHeight; }, 'visible': $context.$data.visible, 'container': $context.$root.getPopupContainer($element) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxValidationGroup: {}, css: className', function ($context, $element) { return { 'dxValidationGroup': function () { return {}; }, 'css': function () { return $context.$data.className; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data.title', function ($context, $element) { return { 'text': function () { return $context.$data.title; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, bounceEnabled: false }', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'useNative': false, 'scrollByThumb': true, 'bounceEnabled': false }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: { data: $data.actionButtons }, cacheElement: { action: function(element) { $data.cacheElementContent(element); } }', function ($context, $element) { return { 'foreach': function () { return { 'data': $context.$data.actionButtons }; }, 'cacheElement': function () { return { 'action': function (element) { $context.$data.cacheElementContent(element); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { text: text, onClick: function(params){ $data.action(params) }, disabled: disabled, visible: visible }, css: className', function ($context, $element) { return { 'dxButton': function () { return { 'text': $context.$data.text, 'onClick': function (params) { $context.$data.action(params); }, 'disabled': $context.$data.disabled, 'visible': $context.$data.visible }; }, 'css': function () { return $context.$data.className; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: showIcons, foreach: { data: $data.actionIcons }', function ($context, $element) { return { 'visible': function () { return $context.$data.showIcons; }, 'foreach': function () { return { 'data': $context.$data.actionIcons }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { onClick: function(params){ $data.action(params)}, disabled: disabled }, css: className', function ($context, $element) { return { 'dxButton': function () { return { 'onClick': function (params) { $context.$data.action(params); }, 'disabled': $context.$data.disabled }; }, 'css': function () { return $context.$data.className; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPropertyGrid: { target: ko.observable($data) }', function ($context, $element) { return { 'dxPropertyGrid': function () { return { 'target': $context.ko.observable($context.$data) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxrvDateRangeEditor: {value: $data.value(), isMobile: true }', function ($context, $element) { return { 'dxrvDateRangeEditor': function () { return { 'value': $context.$data.value(), 'isMobile': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.format', function ($context, $element) { return { 'if': function () { return $context.$data.format; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $data.format', function ($context, $element) { return { 'ifnot': function () { return $context.$data.format; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.enabled', function ($context, $element) { return { 'if': function () { return $context.$data.enabled; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.content', function ($context, $element) { return { 'if': function () { return $context.$data.content; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: $data.content', function ($context, $element) { return { 'template': function () { return $context.$data.content; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrv-preview-parameters-mobile\', data: $data }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrv-preview-parameters-mobile', 'data': $context.$data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: $data.contentTemplate, data: model }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.contentTemplate, 'data': $context.$data.model }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: { pointerEvents: $data.documentId === null ? \'none\' : \'\', touchEvents: $data.documentId === null ? \'none\' : \'\' }, styleunit: { top: topOffset, height: previewWrapperSize().height, width: previewWrapperSize().width }, slide: $root.slideOptions, mobileZoom: { zoom: mobileZoom, zoomUpdating: zoomUpdating }, dxclick: function(s,e) { if(!$root.brickEventsDisabled()) { $data.showActions(s,e); } }, css: { \'dxrp-editing-fields-hightlighted\': editingFieldsHighlighted }', function ($context, $element) { return { 'style': function () { return { 'pointerEvents': $context.$data.documentId === null ? 'none' : '', 'touchEvents': $context.$data.documentId === null ? 'none' : '' }; }, 'styleunit': function () { return { 'top': $context.$data.topOffset, 'height': $context.$data.previewWrapperSize().height, 'width': $context.$data.previewWrapperSize().width }; }, 'slide': function () { return $context.$root.slideOptions; }, 'mobileZoom': function () { return { 'zoom': $context.$data.mobileZoom, 'zoomUpdating': $context.$data.zoomUpdating }; }, 'dxclick': function () { return function (s, e) { if (!$context.$root.brickEventsDisabled()) {
        $context.$data.showActions(s, e);
    } }; }, 'css': function () { return { 'dxrp-editing-fields-hightlighted': $context.$data.editingFieldsHighlighted }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: { pointerEvents: $data.zoomUpdating() ? \'none\' : \'\', touchEvents: $data.zoomUpdating() ? \'none\' : \'\' }, dxGalleryReportPreview: { dataSource: $root.gallery.items, gallery: $root.gallery, animationEnabled: $root.gallery.animationEnabled, disabled: $data.zoomUpdating, selectedIndex: $root.gallery.selectedIndex, width:\'100%\', height: \'100%\', showIndicator: false, loop: true, onSelectionChanged: onSlide, swipeEnabled: $root.slideOptions.swipeEnabled }', function ($context, $element) { return { 'style': function () { return { 'pointerEvents': $context.$data.zoomUpdating() ? 'none' : '', 'touchEvents': $context.$data.zoomUpdating() ? 'none' : '' }; }, 'dxGalleryReportPreview': function () { return { 'dataSource': $context.$root.gallery.items, 'gallery': $context.$root.gallery, 'animationEnabled': $context.$root.gallery.animationEnabled, 'disabled': $context.$data.zoomUpdating, 'selectedIndex': $context.$root.gallery.selectedIndex, 'width': '100%', 'height': '100%', 'showIndicator': false, 'loop': true, 'onSelectionChanged': $context.$data.onSlide, 'swipeEnabled': $context.$root.slideOptions.swipeEnabled }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: $root.reportPreview.getScrollViewOptions()', function ($context, $element) { return { 'dxScrollView': function () { return $context.$root.reportPreview.getScrollViewOptions(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: $root.gallery.contentSize()', function ($context, $element) { return { 'style': function () { return $context.$root.gallery.contentSize(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: position, css: $data.classSet', function ($context, $element) { return { 'styleunit': function () { return $context.$data.position; }, 'css': function () { return $context.$data.classSet; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { width: Math.max(page.width(), position().width), height: Math.max(page.height(), position().height) }, style: { \'background-color\': page.color }', function ($context, $element) { return { 'styleunit': function () { return { 'width': Math.max($context.$data.page.width(), $context.$data.position().width), 'height': Math.max($context.$data.page.height(), $context.$data.position().height) }; }, 'style': function () { return { 'background-color': $context.$data.page.color }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dxrdp-active\': page.active() && $parents[0].blocks().length > 1, \'dxrdp-page-padding\': $parents[0].blocks().length > 1 }, visible: $root.slideOptions.readerMode', function ($context, $element) { return { 'css': function () { return { 'dxrdp-active': $context.$data.page.active() && $context.$parents[0].blocks().length > 1, 'dxrdp-page-padding': $context.$parents[0].blocks().length > 1 }; }, 'visible': function () { return $context.$root.slideOptions.readerMode; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { width: page.width, height: page.height }, style: { pointerEvents: $root.brickEventsDisabled() ? \'none\' : \'\', touchEvents: $root.brickEventsDisabled() ? \'none\' : \'\' }', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$data.page.width, 'height': $context.$data.page.height }; }, 'style': function () { return { 'pointerEvents': $context.$root.brickEventsDisabled() ? 'none' : '', 'touchEvents': $context.$root.brickEventsDisabled() ? 'none' : '' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: {name: \'dxrd-preview-progress-bar\', data: progressBar }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-preview-progress-bar', 'data': $context.$data.progressBar }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: $data.blocks()', function ($context, $element) { return { 'foreach': function () { return $context.$data.blocks(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.page', function ($context, $element) { return { 'if': function () { return $context.$data.page; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name :\'dxrd-preview-page-mobile\', data: page }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-preview-page-mobile', 'data': $context.$data.page }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: containerStyle(), zoom: zoom, css: { active: active(), readonly: field.readOnly() }', function ($context, $element) { return { 'style': function () { return $context.$data.containerStyle(); }, 'zoom': function () { return $context.$data.zoom; }, 'css': function () { return { 'active': $context.$data.active(), 'readonly': $context.$data.field.readOnly() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: borderStyle()', function ($context, $element) { return { 'style': function () { return $context.$data.borderStyle(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: activateEditor', function ($context, $element) { return { 'dxclick': function () { return $context.$data.activateEditor; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: textStyle(), css: {\'dxrp-editing-field-text-wordwrap\': !wordWrap}', function ($context, $element) { return { 'style': function () { return $context.$data.textStyle(); }, 'css': function () { return { 'dxrp-editing-field-text-wordwrap': !$context.$data.wordWrap }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: breakOffsetStyle(), html: htmlValue()', function ($context, $element) { return { 'style': function () { return $context.$data.breakOffsetStyle(); }, 'html': function () { return $context.$data.htmlValue(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: breakOffsetStyle(), text: field.editValue()', function ($context, $element) { return { 'style': function () { return $context.$data.breakOffsetStyle(); }, 'text': function () { return $context.$data.field.editValue(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('value: value, valueUpdate: \'keypress\', style: textStyle(), event: { blur: hideEditor, keyup: keypressAction }', function ($context, $element) { return { 'value': function () { return $context.$data.value; }, 'valueUpdate': function () { return 'keypress'; }, 'style': function () { return $context.$data.textStyle(); }, 'event': function () { return { 'blur': $context.$data.hideEditor, 'keyup': $context.$data.keypressAction }; }, '_ko_property_writers': function () { return { 'value': function (_z) { $context.$data.value = _z; } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: options, childStyle: { style: textStyle(), selector: \'.dx-texteditor-input\'}', function ($context, $element) { return { 'dxTextBox': function () { return $context.$data.options; }, 'childStyle': function () { return { 'style': $context.$data.textStyle(), 'selector': '.dx-texteditor-input' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxNumberBox: options, childStyle: { style: textStyle(), selector: \'.dx-texteditor-input\'}', function ($context, $element) { return { 'dxNumberBox': function () { return $context.$data.options; }, 'childStyle': function () { return { 'style': $context.$data.textStyle(), 'selector': '.dx-texteditor-input' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxDateBox: $data.getOptions({ dropDownOptions: { container: $root.getPopupContainer($element), position: { at: \'left bottom\', collision: \'flipfit flip\', my: \'left top\', boundary: $root.getPopupContainer($element), of: $element } } }), childStyle: { style: textStyle(), selector: \'.dx-texteditor-input\'}', function ($context, $element) { return { 'dxDateBox': function () { return $context.$data.getOptions({ 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element), 'position': { 'at': 'left bottom', 'collision': 'flipfit flip', 'my': 'left top', 'boundary': $context.$root.getPopupContainer($element), 'of': $element } } }); }, 'childStyle': function () { return { 'style': $context.$data.textStyle(), 'selector': '.dx-texteditor-input' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: containerStyle()', function ($context, $element) { return { 'style': function () { return $context.$data.containerStyle(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPictureEditor: $data.getPictureEditorOptions()', function ($context, $element) { return { 'dxPictureEditor': function () { return $context.$data.getPictureEditorOptions(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: containerStyle(), zoom: zoom, click: onClick', function ($context, $element) { return { 'style': function () { return $context.$data.containerStyle(); }, 'zoom': function () { return $context.$data.zoom; }, 'click': function () { return $context.$data.onClick; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: checkStyle(), template: {name: $data.checkStateStyleIcon, if: !!ko.unwrap($data.checkStateStyleIcon)}', function ($context, $element) { return { 'style': function () { return $context.$data.checkStyle(); }, 'template': function () { return { 'name': $context.$data.checkStateStyleIcon, 'if': !!$context.ko.unwrap($context.$data.checkStateStyleIcon) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: checkStyle()', function ($context, $element) { return { 'style': function () { return $context.$data.checkStyle(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: { fill: checked() ? \'black\' : \'transparent\' }', function ($context, $element) { return { 'style': function () { return { 'fill': $context.$data.checked() ? 'black' : 'transparent' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: containerStyle(), dxclick: activateEditor, zoom: zoom, css: { active: active(), readonly: field.readOnly() }', function ($context, $element) { return { 'style': function () { return $context.$data.containerStyle(); }, 'dxclick': function () { return $context.$data.activateEditor; }, 'zoom': function () { return $context.$data.zoom; }, 'css': function () { return { 'active': $context.$data.active(), 'readonly': $context.$data.field.readOnly() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: style, text: text', function ($context, $element) { return { 'style': function () { return $context.$data.style; }, 'text': function () { return $context.$data.text; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('value: field._editorValue, valueUpdate: \'keypress\', style: textStyle(), event: { blur: hideEditor, keyup: keypressAction }', function ($context, $element) { return { 'value': function () { return $context.$data.field._editorValue; }, 'valueUpdate': function () { return 'keypress'; }, 'style': function () { return $context.$data.textStyle(); }, 'event': function () { return { 'blur': $context.$data.hideEditor, 'keyup': $context.$data.keypressAction }; }, '_ko_property_writers': function () { return { 'value': function (_z) { Object($context.$data.field)._editorValue = _z; } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !active() || field.readOnly()', function ($context, $element) { return { 'if': function () { return !$context.$data.active() || $context.$data.field.readOnly(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: htmlValue()', function ($context, $element) { return { 'if': function () { return $context.$data.htmlValue(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: htmlValue()', function ($context, $element) { return { 'ifnot': function () { return $context.$data.htmlValue(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: active() && !field.readOnly()', function ($context, $element) { return { 'if': function () { return $context.$data.active() && !$context.$data.field.readOnly(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: editorTemplate, data: data }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.editorTemplate, 'data': $context.$data.data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrp-editing-field-image-editor\'', function ($context, $element) { return { 'template': function () { return 'dxrp-editing-field-image-editor'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: cells', function ($context, $element) { return { 'foreach': function () { return $context.$data.cells; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { \'action\': exportActionUri }, foreach: exportFormData', function ($context, $element) { return { 'attr': function () { return { 'action': $context.$data.exportActionUri }; }, 'foreach': function () { return $context.$data.exportFormData; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: {\'name\': name, \'value\': value}', function ($context, $element) { return { 'attr': function () { return { 'name': $context.$data.name, 'value': $context.$data.value }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { width: popupWidth, height: popupHeight, title: getPopupTitle(), visible: popupVisible, showCloseButton: true, toolbarItems: popupButtons, wrapperAttr: { class: \'dxrd-print-dialog dx-editors dx-widget\' }, container: $root.getPopupContainer($element), position: { of: $root.getPopupContainer($element) } }', function ($context, $element) { return { 'dxPopup': function () { return { 'width': $context.$data.popupWidth, 'height': $context.$data.popupHeight, 'title': $context.$data.getPopupTitle(), 'visible': $context.$data.popupVisible, 'showCloseButton': true, 'toolbarItems': $context.$data.popupButtons, 'wrapperAttr': { 'class': 'dxrd-print-dialog dx-editors dx-widget' }, 'container': $context.$root.getPopupContainer($element), 'position': { 'of': $context.$root.getPopupContainer($element) } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'The browser sent the document to the printer.\', \'ASPxReportsStringId.WebDocumentViewer_Print_Popup_Caption\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('The browser sent the document to the printer.', 'ASPxReportsStringId.WebDocumentViewer_Print_Popup_Caption'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: printingTextPrefix', function ($context, $element) { return { 'text': function () { return $context.$data.printingTextPrefix; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('click: printingLinkCallback, text: $root.getLocalization(\'document in PDF format\', \'ASPxReportsStringId.WebDocumentViewer_Print_Popup_LinkText\')', function ($context, $element) { return { 'click': function () { return $context.$data.printingLinkCallback; }, 'text': function () { return $context.$root.getLocalization('document in PDF format', 'ASPxReportsStringId.WebDocumentViewer_Print_Popup_LinkText'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: printingTextPostfix', function ($context, $element) { return { 'text': function () { return $context.$data.printingTextPostfix; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.printingTextPrefix', function ($context, $element) { return { 'if': function () { return $context.$data.printingTextPrefix; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.printingTextPostfix', function ($context, $element) { return { 'if': function () { return $context.$data.printingTextPostfix; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'Export Options\', \'DevExpress.XtraReports.UI.XtraReport.ExportOptions\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('Export Options', 'DevExpress.XtraReports.UI.XtraReport.ExportOptions'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); }  }', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'useNative': false, 'scrollByThumb': true, 'onInitialized': function (e) { e.component.option('useKeyboard', false); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('accessibilityKeyboardHelper: $data.keyboardHelper', function ($context, $element) { return { 'accessibilityKeyboardHelper': function () { return $context.$data.keyboardHelper; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPropertyGrid: { target: model }', function ($context, $element) { return { 'dxPropertyGrid': function () { return { 'target': $context.$data.model }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { \'aria-label\': $root.getLocalization(text, $data.textId), \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }', function ($context, $element) { return { 'attr': function () { return { 'aria-label': $context.$root.getLocalization($context.$data.text, $context.$data.textId), 'aria-hidden': $context.ko.unwrap($context.$data.visible) ? 'false' : 'true', 'aria-disabled': $context.$data.disabled() ? 'true' : 'false' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxMenu: { wrapperAttr: { class: \'dxrd-preview-export-to dxd-button-back-color dxd-state-normal dxd-icon-highlighted\' }, disabled: $data.disabled(), items: items, cssClass: \'dxrdp-export-to-menu\', onItemClick: clickAction, onSubmenuShowing: $data.eventHandlers.onSubmenuShowing($root.getPopupContainer($element), $element), onSubmenuShown: $data.eventHandlers.onSubmenuShown, onSubmenuHiding: $data.eventHandlers.onSubmenuHiding, tabIndex: \'-1\' }, attr: { title: $root.getLocalization(text, $data.textId) }', function ($context, $element) { return { 'dxMenu': function () { return { 'wrapperAttr': { 'class': 'dxrd-preview-export-to dxd-button-back-color dxd-state-normal dxd-icon-highlighted' }, 'disabled': $context.$data.disabled(), 'items': $context.$data.items, 'cssClass': 'dxrdp-export-to-menu', 'onItemClick': $context.$data.clickAction, 'onSubmenuShowing': $context.$data.eventHandlers.onSubmenuShowing($context.$root.getPopupContainer($element), $element), 'onSubmenuShown': $context.$data.eventHandlers.onSubmenuShown, 'onSubmenuHiding': $context.$data.eventHandlers.onSubmenuHiding, 'tabIndex': '-1' }; }, 'attr': function () { return { 'title': $context.$root.getLocalization($context.$data.text, $context.$data.textId) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: ko.unwrap($data.imageClassName), template: ko.unwrap($data.imageTemplateName)', function ($context, $element) { return { 'css': function () { return $context.ko.unwrap($context.$data.imageClassName); }, 'template': function () { return $context.ko.unwrap($context.$data.imageTemplateName); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: model', function ($context, $element) { return { 'if': function () { return $context.$data.model; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: function(_, event){ onClick(event); event.stopPropagation(); }, style: { top: topP, left: $data.leftP, right: $data.rightP, height: heightP, width: widthP }, css: { \'dxrd-report-preview-brick-selected\': $data.active, \'dxrd-report-preview-brick-selectable\': !($data.bricks) }', function ($context, $element) { return { 'dxclick': function () { return function (_, event) { $context.$data.onClick(event); event.stopPropagation(); }; }, 'style': function () { return { 'top': $context.$data.topP, 'left': $context.$data.leftP, 'right': $context.$data.rightP, 'height': $context.$data.heightP, 'width': $context.$data.widthP }; }, 'css': function () { return { 'dxrd-report-preview-brick-selected': $context.$data.active, 'dxrd-report-preview-brick-selectable': !($context.$data.bricks) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dxrdp-navigation-brick-drill-down\' : !!navigation.drillDownKey, \'dxrdp-navigation-brick-sorting\' : !!navigation.sortData, \'dxrdp-navigation-brick-sorting-desc\': navigation.sortData && navigation.sortData.order === 1, \'dxrdp-navigation-brick-sorting-asc\': navigation.sortData && navigation.sortData.order === 2 }', function ($context, $element) { return { 'css': function () { return { 'dxrdp-navigation-brick-drill-down': !!$context.$data.navigation.drillDownKey, 'dxrdp-navigation-brick-sorting': !!$context.$data.navigation.sortData, 'dxrdp-navigation-brick-sorting-desc': $context.$data.navigation.sortData && $context.$data.navigation.sortData.order === 1, 'dxrdp-navigation-brick-sorting-asc': $context.$data.navigation.sortData && $context.$data.navigation.sortData.order === 2 }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: {\'aria-label\': $parent.currentPageAriaLabelImgAlt($data.pageIndex) }, dxclick: clickToBrick, \'brick-selection-prog\': { page: $data, preview: $parent, click: function(pageIndex) { $parent.goToPage(pageIndex) } }', function ($context, $element) { return { 'attr': function () { return { 'aria-label': $context.$parent.currentPageAriaLabelImgAlt($context.$data.pageIndex) }; }, 'dxclick': function () { return $context.$data.clickToBrick; }, 'brick-selection-prog': function () { return { 'page': $context.$data, 'preview': $context.$parent, 'click': function (pageIndex) { $context.$parent.goToPage(pageIndex); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { \'width\': width() + 2, \'height\': height() + 2 }, visible: pageLoading', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$data.width() + 2, 'height': $context.$data.height() + 2 }; }, 'visible': function () { return $context.$data.pageLoading; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { \'paddingTop\': height() / 2.3 }', function ($context, $element) { return { 'styleunit': function () { return { 'paddingTop': $context.$data.height() / 2.3 }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: loadingText', function ($context, $element) { return { 'text': function () { return $context.$data.loadingText; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { src: displayImageSrc, \'alt\': $parent.currentPageAriaLabelImgAlt($data.pageIndex) }', function ($context, $element) { return { 'attr': function () { return { 'src': $context.$data.displayImageSrc, 'alt': $context.$parent.currentPageAriaLabelImgAlt($context.$data.pageIndex) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('accessibilityKeyboardHelper: $data.editingFieldsKeyboardHelper', function ($context, $element) { return { 'accessibilityKeyboardHelper': function () { return $context.$data.editingFieldsKeyboardHelper; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.navigation', function ($context, $element) { return { 'if': function () { return $context.$data.navigation; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: clickableBricks', function ($context, $element) { return { 'foreach': function () { return $context.$data.clickableBricks; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: "dxrd-page-brick-clickable", data: $data }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-page-brick-clickable', 'data': $context.$data }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: activateEditor, css: parentPopupClass', function ($context, $element) { return { 'dxclick': function () { return $context.$data.activateEditor; }, 'css': function () { return $context.$data.parentPopupClass; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPainter: $data.getPainter()', function ($context, $element) { return { 'dxPainter': function () { return $context.$data.getPainter(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { width: contentData.containerStyle().width, height: contentData.containerStyle().height, position: { boundary: getContainer(), of: getPositionTarget($element), collision: \'flipfit flipfit\' }, container: getContainer(), showTitle: false, target: getContainer(), deferRendering: false, hideOnOutsideClick: true, showCloseButton: false, onContentReady: onContentReady, onHiding: onHiding, onShown: onShown, shading: shading, wrapperAttr: { class: \'dx-picture-edit-popup-content dx-picture-edit-popup-content-fullscreen\' }, animation: { show: { type: \'slide\', duration: 0, to: { opacity: 1 }, from: { opacity: 0 } }, hide: { type: \'fade\', duration: 100, to: { opacity: 0 }, from: { opacity: 1 } } }, visible: isVisible($element) }', function ($context, $element) { return { 'dxPopup': function () { return { 'width': $context.$data.contentData.containerStyle().width, 'height': $context.$data.contentData.containerStyle().height, 'position': { 'boundary': $context.$data.getContainer(), 'of': $context.$data.getPositionTarget($element), 'collision': 'flipfit flipfit' }, 'container': $context.$data.getContainer(), 'showTitle': false, 'target': $context.$data.getContainer(), 'deferRendering': false, 'hideOnOutsideClick': true, 'showCloseButton': false, 'onContentReady': $context.$data.onContentReady, 'onHiding': $context.$data.onHiding, 'onShown': $context.$data.onShown, 'shading': $context.$data.shading, 'wrapperAttr': { 'class': 'dx-picture-edit-popup-content dx-picture-edit-popup-content-fullscreen' }, 'animation': { 'show': { 'type': 'slide', 'duration': 0, 'to': { 'opacity': 1 }, 'from': { 'opacity': 0 } }, 'hide': { 'type': 'fade', 'duration': 100, 'to': { 'opacity': 0 }, 'from': { 'opacity': 1 } } }, 'visible': $context.$data.isVisible($element) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-picture-editing-popup\', data: $data.getPopupData() }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-picture-editing-popup', 'data': $context.$data.getPopupData() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: showContent', function ($context, $element) { return { 'if': function () { return $context.$data.showContent; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: contentTemplate, data: contentData, afterRender: $data.renderedHandler }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.contentTemplate, 'data': $context.$data.contentData, 'afterRender': $context.$data.renderedHandler }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { \'aria-label\': $root.getLocalization(\'Zoom\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelZoomCombobox\'), \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }', function ($context, $element) { return { 'attr': function () { return { 'aria-label': $context.$root.getLocalization('Zoom', 'ASPxReportsStringId.WebDocumentViewer_AriaLabelZoomCombobox'), 'aria-hidden': $context.ko.unwrap($context.$data.visible) ? 'false' : 'true', 'aria-disabled': $context.$data.disabled() ? 'true' : 'false' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxSelectBox: { items: zoomItems, value: $data.zoom, displayExpr: displayExpr, displayCustomValue: true, acceptCustomValue: true, onCustomItemCreating: onCustomItemCreating, useItemTextAsTitle: true, width: 140, dropDownOptions: { container: $root.getPopupContainer($element), position: { my: \'left top\', at: \'left bottom\', of: $element }, wrapperAttr: { class: \'dx-zoom-selectbox-popup-wrapper\' } }, tabIndex: \'-1\', inputAttr: { \'aria-label\': $root.getLocalization(\'Zoom\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelZoomCombobox\') }}', function ($context, $element) { return { 'dxSelectBox': function () { return { 'items': $context.$data.zoomItems, 'value': $context.$data.zoom, 'displayExpr': $context.$data.displayExpr, 'displayCustomValue': true, 'acceptCustomValue': true, 'onCustomItemCreating': $context.$data.onCustomItemCreating, 'useItemTextAsTitle': true, 'width': 140, 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element), 'position': { 'my': 'left top', 'at': 'left bottom', 'of': $element }, 'wrapperAttr': { 'class': 'dx-zoom-selectbox-popup-wrapper' } }, 'tabIndex': '-1', 'inputAttr': { 'aria-label': $context.$root.getLocalization('Zoom', 'ASPxReportsStringId.WebDocumentViewer_AriaLabelZoomCombobox') } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', direction: \'horizontal\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'direction': 'horizontal', 'useNative': false, 'scrollByThumb': true, 'onInitialized': function (e) { e.component.option('useKeyboard', false); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('keyDownActions: actionLists, accessibilityKeyboardHelper: $data.keyboardHelper', function ($context, $element) { return { 'keyDownActions': function () { return $context.$data.actionLists; }, 'accessibilityKeyboardHelper': function () { return $context.$data.keyboardHelper; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: active() && visible(), accessibilityKeyboardHelper: $data.keyboardHelper', function ($context, $element) { return { 'visible': function () { return $context.$data.active() && $context.$data.visible(); }, 'accessibilityKeyboardHelper': function () { return $context.$data.keyboardHelper; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'Search\', \'ASPxReportsStringId.SearchDialog_Header\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('Search', 'ASPxReportsStringId.SearchDialog_Header'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxSearchEditor: { searchModel: $data, inputAttr: { \'type\': \'search\', \'title\': $root.getLocalization(\'Search\', \'ASPxReportsStringId.SearchDialog_Header\') }}', function ($context, $element) { return { 'dxSearchEditor': function () { return { 'searchModel': $context.$data, 'inputAttr': { 'type': 'search', 'title': $context.$root.getLocalization('Search', 'ASPxReportsStringId.SearchDialog_Header') } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCheckBox: { value: matchCase, text: $root.getLocalization(\'Match case\', \'ASPxReportsStringId.SearchDialog_Case\')}', function ($context, $element) { return { 'dxCheckBox': function () { return { 'value': $context.$data.matchCase, 'text': $context.$root.getLocalization('Match case', 'ASPxReportsStringId.SearchDialog_Case') }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCheckBox: { value: matchWholeWord, text: $root.getLocalization(\'Match whole word only\', \'ASPxReportsStringId.SearchDialog_WholeWord\')}', function ($context, $element) { return { 'dxCheckBox': function () { return { 'value': $context.$data.matchWholeWord, 'text': $context.$root.getLocalization('Match whole word only', 'ASPxReportsStringId.SearchDialog_WholeWord') }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'Search result\', \'ASPxReportsStringId.WebDocumentViewer_SearchResultText\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('Search result', 'ASPxReportsStringId.WebDocumentViewer_SearchResultText'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxLoadIndicator: { visible: $data.loading }', function ($context, $element) { return { 'dxLoadIndicator': function () { return { 'visible': $context.$data.loading }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxList: { dataSource: searchResultDataSource, pageLoadMode: \'scrollBottom\', focusStateEnabled:false, hoverStateEnabled:false, onItemRendered: onItemRendered, noDataText:  loading() ? \'\' : noResultText(), encodeNoDataText: true, visible: !loading() }', function ($context, $element) { return { 'dxList': function () { return { 'dataSource': $context.$data.searchResultDataSource, 'pageLoadMode': 'scrollBottom', 'focusStateEnabled': false, 'hoverStateEnabled': false, 'onItemRendered': $context.$data.onItemRendered, 'noDataText': $context.$data.loading() ? '' : $context.$data.noResultText(), 'encodeNoDataText': true, 'visible': !$context.$data.loading() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxAction: { model: $data, action: $parent.itemClickAction }, attr: {\'aria-label\': $data.data.text + \', \' + $root.dx._static.formatSearchResult($data.data) + \', \' + ($parent.searchResult().indexOf($data.data) + 1) + \' of \' + $parent.searchResult().length }', function ($context, $element) { return { 'dxAction': function () { return { 'model': $context.$data, 'action': $context.$parent.itemClickAction }; }, 'attr': function () { return { 'aria-label': $context.$data.data.text + ', ' + $context.$root.dx._static.formatSearchResult($context.$data.data) + ', ' + ($context.$parent.searchResult().indexOf($context.$data.data) + 1) + ' of ' + $context.$parent.searchResult().length }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data.data.text', function ($context, $element) { return { 'text': function () { return $context.$data.data.text; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.dx._static.formatSearchResult($data.data)', function ($context, $element) { return { 'text': function () { return $context.$root.dx._static.formatSearchResult($context.$data.data); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: visible, css: $data.cssClasses, accessibilityKeyboardHelper: $data.progressBarAccessibility', function ($context, $element) { return { 'visible': function () { return $context.$data.visible; }, 'css': function () { return $context.$data.cssClasses; }, 'accessibilityKeyboardHelper': function () { return $context.$data.progressBarAccessibility; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style : { width: progress()  + \'%\' }', function ($context, $element) { return { 'style': function () { return { 'width': $context.$data.progress() + '%' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: cancelText, visible: $data.cancelVisible, dxAction: { model: $data, action: function() { $data.stop && stop(); }}', function ($context, $element) { return { 'text': function () { return $context.$data.cancelText; }, 'visible': function () { return $context.$data.cancelVisible; }, 'dxAction': function () { return { 'model': $context.$data, 'action': function () { $context.$data.stop && $context.$data.stop(); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'Preview Parameters\', \'ASPxReportsStringId.ReportDesigner_Preview_ParametersTitle\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('Preview Parameters', 'ASPxReportsStringId.ReportDesigner_Preview_ParametersTitle'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'The report does not contain any parameters.\', \'ASPxReportsStringId.WebDocumentViewer_NoParameters\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('The report does not contain any parameters.', 'ASPxReportsStringId.WebDocumentViewer_NoParameters'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }, dxValidationGroup: {}, accessibilityKeyboardHelper: $data.keyboardHelper', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'useNative': false, 'scrollByThumb': true, 'onInitialized': function (e) { e.component.option('useKeyboard', false); } }; }, 'dxValidationGroup': function () { return {}; }, 'accessibilityKeyboardHelper': function () { return $context.$data.keyboardHelper; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxLoadIndicator: { visible: model.parametersLoading }', function ($context, $element) { return { 'dxLoadIndicator': function () { return { 'visible': $context.$data.model.parametersLoading }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { text: $root.getLocalization(\'Reset\', \'ASPxReportsStringId.ParametersPanel_Reset\'), onClick: function() { model.restore(); } }', function ($context, $element) { return { 'dxButton': function () { return { 'text': $context.$root.getLocalization('Reset', 'ASPxReportsStringId.ParametersPanel_Reset'), 'onClick': function () { $context.$data.model.restore(); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxButton: { text: $root.getLocalization(\'Submit\', \'ASPxReportsStringId.ParametersPanel_Submit\'), onClick: function(params) { model.validateAndSubmit(params); } }', function ($context, $element) { return { 'dxButton': function () { return { 'text': $context.$root.getLocalization('Submit', 'ASPxReportsStringId.ParametersPanel_Submit'), 'onClick': function (params) { $context.$data.model.validateAndSubmit(params); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { \'aria-label\': $root.getLocalization(\'Pager\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelPagerCombobox\') , \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }', function ($context, $element) { return { 'attr': function () { return { 'aria-label': $context.$root.getLocalization('Pager', 'ASPxReportsStringId.WebDocumentViewer_AriaLabelPagerCombobox'), 'aria-hidden': $context.ko.unwrap($context.$data.visible) ? 'false' : 'true', 'aria-disabled': $context.$data.disabled() ? 'true' : 'false' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxSelectBox: { dataSource: pageItems, value: selectedItem, opened: opened, displayExpr: displayExpr, useItemTextAsTitle: true, onFocusOut: focusOut, onKeyUp: keyUp, itemTemplate: itemTemplate, searchMode: searchMode, searchEnabled: searchEnabled, searchTimeout: searchTimeout, disabled: disabled, dropDownOptions: { container: $root.getPopupContainer($element), wrapperAttr: { class: \'dx-page-selectbox-popup-wrapper\' }, }, tabIndex: \'-1\', inputAttr: { \'aria-label\': $root.getLocalization(\'Pager\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelPagerCombobox\') } }', function ($context, $element) { return { 'dxSelectBox': function () { return { 'dataSource': $context.$data.pageItems, 'value': $context.$data.selectedItem, 'opened': $context.$data.opened, 'displayExpr': $context.$data.displayExpr, 'useItemTextAsTitle': true, 'onFocusOut': $context.$data.focusOut, 'onKeyUp': $context.$data.keyUp, 'itemTemplate': $context.$data.itemTemplate, 'searchMode': $context.$data.searchMode, 'searchEnabled': $context.$data.searchEnabled, 'searchTimeout': $context.$data.searchTimeout, 'disabled': $context.$data.disabled, 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element), 'wrapperAttr': { 'class': 'dx-page-selectbox-popup-wrapper' } }, 'tabIndex': '-1', 'inputAttr': { 'aria-label': $context.$root.getLocalization('Pager', 'ASPxReportsStringId.WebDocumentViewer_AriaLabelPagerCombobox') } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $root.getLocalization(\'Document Map\', \'ASPxReportsStringId.DocumentViewer_RibbonCommandText_DocumentMap\')', function ($context, $element) { return { 'text': function () { return $context.$root.getLocalization('Document Map', 'ASPxReportsStringId.DocumentViewer_RibbonCommandText_DocumentMap'); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }, accessibilityKeyboardHelper: $parent.keyboardHelper', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'useNative': false, 'scrollByThumb': true, 'onInitialized': function (e) { e.component.option('useKeyboard', false); } }; }, 'accessibilityKeyboardHelper': function () { return $context.$parent.keyboardHelper; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('treelist: documentMapOptions', function ($context, $element) { return { 'treelist': function () { return $context.$data.documentMapOptions; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: searchText().length', function ($context, $element) { return { 'if': function () { return $context.$data.searchText().length; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: (model && !model.isEmpty())', function ($context, $element) { return { 'if': function () { return ($context.$data.model && !$context.$data.model.isEmpty()); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: (!model || model.isEmpty())', function ($context, $element) { return { 'if': function () { return (!$context.$data.model || $context.$data.model.isEmpty()); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dx-propertieseditor\', data: $data.propertyGrid }', function ($context, $element) { return { 'template': function () { return { 'name': 'dx-propertieseditor', 'data': $context.$data.propertyGrid }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('visible: reportPreview.previewVisible, cssArray: [ $data.rootStyle , { \'dx-rtl\' : $data.rtl, \'dx-ltr\': !$data.rtl } ]', function ($context, $element) { return { 'visible': function () { return $context.$data.reportPreview.previewVisible; }, 'cssArray': function () { return [$context.$data.rootStyle, { 'dx-rtl': $context.$data.rtl, 'dx-ltr': !$context.$data.rtl }]; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('textCopier, css: { \'dx-rtl\': $data.rtlReport, \'dxrp-editing-fields-hightlighted\': editingFieldsHighlighted }', function ($context, $element) { return { 'textCopier': function () { return undefined; }, 'css': function () { return { 'dx-rtl': $context.$data.rtlReport, 'dxrp-editing-fields-hightlighted': $context.$data.editingFieldsHighlighted }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('accessibilityKeyboardHelper: $data.previewBrickKeyboardHelper', function ($context, $element) { return { 'accessibilityKeyboardHelper': function () { return $context.$data.previewBrickKeyboardHelper; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('autoFit: { autoFitBy: $parent.autoFitBy, zoom: zoom, width: originalWidth, height: originalHeight, rightPanelWidth: $root.tabPanel.width, previewSize: $parent.previewSize, brickLoading: brickLoading }, styleunit: { width: width, height: height }', function ($context, $element) { return { 'autoFit': function () { return { 'autoFitBy': $context.$parent.autoFitBy, 'zoom': $context.$data.zoom, 'width': $context.$data.originalWidth, 'height': $context.$data.originalHeight, 'rightPanelWidth': $context.$root.tabPanel.width, 'previewSize': $context.$parent.previewSize, 'brickLoading': $context.$data.brickLoading }; }, 'styleunit': function () { return { 'width': $context.$data.width, 'height': $context.$data.height }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('lazyImages: { enabled: showMultipagePreview, updateCallback: onSizeChanged }', function ($context, $element) { return { 'lazyImages': function () { return { 'enabled': $context.$data.showMultipagePreview, 'updateCallback': $context.$data.onSizeChanged }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { \'width\': width(), \'height\': height() }, toView: { active: active }, css : { \'dxrd-report-preview-active\': active }', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$data.width(), 'height': $context.$data.height() }; }, 'toView': function () { return { 'active': $context.$data.active }; }, 'css': function () { return { 'dxrd-report-preview-active': $context.$data.active }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dxrd-visually-hidden\': currentPage() }', function ($context, $element) { return { 'css': function () { return { 'dxrd-visually-hidden': $context.$data.currentPage() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: emptyDocumentCaption()', function ($context, $element) { return { 'text': function () { return $context.$data.emptyDocumentCaption(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { \'aria-label\': $root.getLocalization(\'Clipboard\', \'ASPxReportsStringId.WebDocumentViewer_AriaClipboard\') }', function ($context, $element) { return { 'attr': function () { return { 'aria-label': $context.$root.getLocalization('Clipboard', 'ASPxReportsStringId.WebDocumentViewer_AriaClipboard') }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxViewerExport: $data', function ($context, $element) { return { 'dxViewerExport': function () { return $context.$data; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: progressBar', function ($context, $element) { return { 'with': function () { return $context.$data.progressBar; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-preview-progress-bar\'', function ($context, $element) { return { 'template': function () { return 'dxrd-preview-progress-bar'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: !showMultipagePreview()', function ($context, $element) { return { 'if': function () { return !$context.$data.showMultipagePreview(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('with: currentPage', function ($context, $element) { return { 'with': function () { return $context.$data.currentPage; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: pageLoading() || (!pageLoading() && displayImageSrc())', function ($context, $element) { return { 'if': function () { return $context.$data.pageLoading() || (!$context.$data.pageLoading() && $context.$data.displayImageSrc()); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrd-preview-page\', afterRender: function() { $parent.delayedInit() } }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-preview-page', 'afterRender': function () { $context.$parent.delayedInit(); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: showMultipagePreview() && !!currentPage()', function ($context, $element) { return { 'if': function () { return $context.$data.showMultipagePreview() && !!$context.$data.currentPage(); } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: {data: pages, afterRender: function() { $parent.model.delayedInit() } }', function ($context, $element) { return { 'foreach': function () { return { 'data': $context.$data.pages, 'afterRender': function () { $context.$parent.model.delayedInit(); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('lazy: { if: pageLoading() || (!pageLoading() && displayImageSrc()) }', function ($context, $element) { return { 'lazy': function () { return { 'if': $context.$data.pageLoading() || (!$context.$data.pageLoading() && $context.$data.displayImageSrc()) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dxrd-preview-page\'', function ($context, $element) { return { 'template': function () { return 'dxrd-preview-page'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('cacheElement: { action: function(element) { $data._$element = element; } }, dxEllipsisEditor: { value: _displayText, readOnly:true, inputAttr: { \'aria-label\': $parent.displayName }, openOnFieldClick: true, buttonAction: function() { $data._showPopup(); } }', function ($context, $element) { return { 'cacheElement': function () { return { 'action': function (element) { $context.$data._$element = element; } }; }, 'dxEllipsisEditor': function () { return { 'value': $context.$data._displayText, 'readOnly': true, 'inputAttr': { 'aria-label': $context.$parent.displayName }, 'openOnFieldClick': true, 'buttonAction': function () { $context.$data._showPopup(); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { width: \'max-content\', height: $root.calculateWithZoomFactor(362), wrapperAttr: { class: \'dxrv-daterange-editor-popup-wrapper\' }, position: { my: \'right top\', at: \'right bottom\', of: $data._$element, collision: \'fit fit\', offset: \'1 -1\' }, container: $root.getPopupContainer($element), target: $root.getPopupContainer($element), showTitle: false, showCloseButton: false, hideOnOutsideClick: true, animation: {}, shading: false, visible: _popupVisible }', function ($context, $element) { return { 'dxPopup': function () { return { 'width': 'max-content', 'height': $context.$root.calculateWithZoomFactor(362), 'wrapperAttr': { 'class': 'dxrv-daterange-editor-popup-wrapper' }, 'position': { 'my': 'right top', 'at': 'right bottom', 'of': $context.$data._$element, 'collision': 'fit fit', 'offset': '1 -1' }, 'container': $context.$root.getPopupContainer($element), 'target': $context.$root.getPopupContainer($element), 'showTitle': false, 'showCloseButton': false, 'hideOnOutsideClick': true, 'animation': {}, 'shading': false, 'visible': $context.$data._popupVisible }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxScrollView: { showScrollbar: \'always\', direction: \'horizontal\', useNative: false, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }', function ($context, $element) { return { 'dxScrollView': function () { return { 'showScrollbar': 'always', 'direction': 'horizontal', 'useNative': false, 'onInitialized': function (e) { e.component.option('useKeyboard', false); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('accessibilityKeyboardHelper: $data.dialogKeyboardHelper', function ($context, $element) { return { 'accessibilityKeyboardHelper': function () { return $context.$data.dialogKeyboardHelper; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('accessibilityKeyboardHelper: $data.dialogKeyboardHelper.predefinedDateRangesKeyboardHelper, dxScrollView: { showScrollbar: \'onHover\', scrollByContent: false, bounceEnabled: false, useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }', function ($context, $element) { return { 'accessibilityKeyboardHelper': function () { return $context.$data.dialogKeyboardHelper.predefinedDateRangesKeyboardHelper; }, 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'scrollByContent': false, 'bounceEnabled': false, 'useNative': false, 'scrollByThumb': true, 'onInitialized': function (e) { e.component.option('useKeyboard', false); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { \'aria-selected\': $parent._isSelected($data) }, css: { \'dxd-state-selected\': $parent._isSelected($data) }, dxAction: { model: $data, action: function() { $parent.applyDate($data.range(), true) }}', function ($context, $element) { return { 'attr': function () { return { 'aria-selected': $context.$parent._isSelected($context.$data) }; }, 'css': function () { return { 'dxd-state-selected': $context.$parent._isSelected($context.$data) }; }, 'dxAction': function () { return { 'model': $context.$data, 'action': function () { $context.$parent.applyDate($context.$data.range(), true); } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCalendar: { value: value, cellTemplate: \'select_cell\', height: \'100%\', min: min }', function ($context, $element) { return { 'dxCalendar': function () { return { 'value': $context.$data.value, 'cellTemplate': 'select_cell', 'height': '100%', 'min': $context.$data.min }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dxd-back-accented\': $parent.inRange(date) }', function ($context, $element) { return { 'css': function () { return { 'dxd-back-accented': $context.$parent.inRange($context.$data.date) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxrvDateRangeEditor: {value: $data.value() }', function ($context, $element) { return { 'dxrvDateRangeEditor': function () { return { 'value': $context.$data.value() }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: popupTemplate, data: popupModel }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.popupTemplate, 'data': $context.$data.popupModel }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTemplate:{ name:\'select_cell\' }', function () { return { dxTemplate: { name: 'select_cell' } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: \'dxrd-propertieseditor\', data: viewmodel }, css: { \'dxrd-parameters-border\' : !$data.hideBorder, \'dxrd-parameters-horizontal\' : $data.showHorizontally, }', function ($context, $element) { return { 'template': function () { return { 'name': 'dxrd-propertieseditor', 'data': $context.$data.viewmodel }; }, 'css': function () { return { 'dxrd-parameters-border': !$context.$data.hideBorder, 'dxrd-parameters-horizontal': $context.$data.showHorizontally }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTagBox: $parent.getOptions({ dataSource: $data.dataSource, searchEnabled: true, useItemTextAsTitle: true, searchExpr: $data.searchExpr || [\'displayValue\'], value: $data.value, displayExpr: $data.displayExpr || \'displayValue\', valueExpr: $data.valueExpr || \'value\', multiline: false, showSelectionControls: true, showDropDownButton: !!$data.showDropDownButton, selectAllMode: \'allPages\', selectedItems: $data.selectedItems, inputAttr: { \'aria-label\': $parent.displayName }, disabled: $parent.disabled, selectAllText: $root.getLocalization(\'Select All\', \'AnalyticsCoreStringId.SelectAll\'), placeholder: $root.dx._static.selectPlaceholder(), maxDisplayedTags: $data.maxDisplayedTags, showMultiTagOnly: true, dropDownOptions: { container: $root.getPopupContainer($element), position: { boundary: $root.getPopupContainer($element), collision: \'flipfit flipfit\', of: $element, at: \'bottom\', my: \'top\' } } }), dxValidator: { validationRules: $parent.validationRules || [] }', function ($context, $element) { return { 'dxTagBox': function () { return $context.$parent.getOptions({ 'dataSource': $context.$data.dataSource, 'searchEnabled': true, 'useItemTextAsTitle': true, 'searchExpr': $context.$data.searchExpr || ['displayValue'], 'value': $context.$data.value, 'displayExpr': $context.$data.displayExpr || 'displayValue', 'valueExpr': $context.$data.valueExpr || 'value', 'multiline': false, 'showSelectionControls': true, 'showDropDownButton': !!$context.$data.showDropDownButton, 'selectAllMode': 'allPages', 'selectedItems': $context.$data.selectedItems, 'inputAttr': { 'aria-label': $context.$parent.displayName }, 'disabled': $context.$parent.disabled, 'selectAllText': $context.$root.getLocalization('Select All', 'AnalyticsCoreStringId.SelectAll'), 'placeholder': $context.$root.dx._static.selectPlaceholder(), 'maxDisplayedTags': $context.$data.maxDisplayedTags, 'showMultiTagOnly': true, 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element), 'position': { 'boundary': $context.$root.getPopupContainer($element), 'collision': 'flipfit flipfit', 'of': $element, 'at': 'bottom', 'my': 'top' } } }); }, 'dxValidator': function () { return { 'validationRules': $context.$parent.validationRules || [] }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxCollectionEditor: { values: value, info: info, level: level, displayName: $root.getLocalization(displayName) }', function ($context, $element) { return { 'dxCollectionEditor': function () { return { 'values': $context.$data.value, 'info': $context.$data.info, 'level': $context.$data.level, 'displayName': $context.$root.getLocalization($context.$data.displayName) }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: value', function ($context, $element) { return { 'if': function () { return $context.$data.value; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxdAccordion: { collapsed: $data.collapsed, alwaysShow: $data.hideCollapsingImage }', function ($context, $element) { return { 'dxdAccordion': function () { return { 'collapsed': $context.$data.collapsed, 'alwaysShow': $context.$data.hideCollapsingImage }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { \'dxrd-empty-header\': $data.hideEditorHeader }', function ($context, $element) { return { 'css': function () { return { 'dxrd-empty-header': $context.$data.hideEditorHeader }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('attr: { role: isComplexEditor && \'tab\', \'id\': isComplexEditor && getIdByDisplayName(\'dxrd-accordion-trigger\'), \'aria-controls\': isComplexEditor && getIdByDisplayName(\'dxrd-accordion-pannel\'), \'aria-expanded\': isComplexEditor && (!collapsed() ? \'true\' : \'false\') }, css: { \'dxrd-accessibility-accordion-trigger dx-accessibility-focus-border-accented\': isComplexEditor, \'dxrd-vertical-label\': $data.editorOptions && $data.editorOptions.hasVerticalLabel }', function ($context, $element) { return { 'attr': function () { return { 'role': $context.$data.isComplexEditor && 'tab', 'id': $context.$data.isComplexEditor && $context.$data.getIdByDisplayName('dxrd-accordion-trigger'), 'aria-controls': $context.$data.isComplexEditor && $context.$data.getIdByDisplayName('dxrd-accordion-pannel'), 'aria-expanded': $context.$data.isComplexEditor && (!$context.$data.collapsed() ? 'true' : 'false') }; }, 'css': function () { return { 'dxrd-accessibility-accordion-trigger dx-accessibility-focus-border-accented': $context.$data.isComplexEditor, 'dxrd-vertical-label': $context.$data.editorOptions && $context.$data.editorOptions.hasVerticalLabel }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: padding, css: { \'dx-accordion-empty\': templateName === \'dx-emptyHeader\', \'dxd-back-secondary\': $data.isGroupLabel, \'dx-accordion-hide-collapsing-image\': $data.hideCollapsingImage }', function ($context, $element) { return { 'styleunit': function () { return $context.$data.padding; }, 'css': function () { return { 'dx-accordion-empty': $context.$data.templateName === 'dx-emptyHeader', 'dxd-back-secondary': $context.$data.isGroupLabel, 'dx-accordion-hide-collapsing-image': $context.$data.hideCollapsingImage }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $data.hideEditorHeader', function ($context, $element) { return { 'ifnot': function () { return $context.$data.hideEditorHeader; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $data.hideCollapsingImage', function ($context, $element) { return { 'ifnot': function () { return $context.$data.hideCollapsingImage; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('zoom: painter.scale', function ($context, $element) { return { 'zoom': function () { return $context.$data.painter.scale; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopup: { width: 48, height: \'auto\', wrapperAttr: { class: \'dx-picture-editing-active\' }, position:{ my: \'left top\', at: \'right top\', boundary: \'.dxrd-preview-surface\', of: $data.$element, collision: \'fit fit\', offset: \'1 -1\' }, container: shadingEnabled() ? \'.dx-overlay-wrapper.dx-picture-edit-popup-content-fullscreen\' : \'.dx-designer\', target: \'.dx-designer\', showTitle: false, onContentReady: function(e) { e.component && e.component.registerKeyHandler(\'tab\', function(_) { $data.active(false); }); }, showCloseButton: false, animation: {}, shading: false, visible: $data.active }', function ($context, $element) { return { 'dxPopup': function () { return { 'width': 48, 'height': 'auto', 'wrapperAttr': { 'class': 'dx-picture-editing-active' }, 'position': { 'my': 'left top', 'at': 'right top', 'boundary': '.dxrd-preview-surface', 'of': $context.$data.$element, 'collision': 'fit fit', 'offset': '1 -1' }, 'container': $context.$data.shadingEnabled() ? '.dx-overlay-wrapper.dx-picture-edit-popup-content-fullscreen' : '.dx-designer', 'target': '.dx-designer', 'showTitle': false, 'onContentReady': function (e) { e.component && e.component.registerKeyHandler('tab', function (_) { $context.$data.active(false); }); }, 'showCloseButton': false, 'animation': {}, 'shading': false, 'visible': $context.$data.active }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: $data.actions', function ($context, $element) { return { 'foreach': function () { return $context.$data.actions; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxclick: $data.action, attr: { title: title }', function ($context, $element) { return { 'dxclick': function () { return $context.$data.action; }, 'attr': function () { return { 'title': $context.$data.title }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: icon, afterRender: $data.renderedHandler }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.icon, 'afterRender': $context.$data.renderedHandler }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('zoom: scale', function ($context, $element) { return { 'zoom': function () { return $context.$data.scale; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxPopover: { width: width, height: height, wrapperAttr: { class: \'dx-picture-edit-popup-content\' }, hideOnOutsideClick: $data.hideOnOutsideClick, onShown: $data.onShown, onContentReady: $data.onContentReady, position: { my: \'left top\', at: \'right top\', boundary: \'.dx-designer\', of: getPositionTarget(), collision: \'flipfit fit\', offset: \'-10 0\' }, container: getPositionTarget(), showTitle: false, target: getPositionTarget(), showCloseButton: false, shading: false, animation: {}, visible: visible }', function ($context, $element) { return { 'dxPopover': function () { return { 'width': $context.$data.width, 'height': $context.$data.height, 'wrapperAttr': { 'class': 'dx-picture-edit-popup-content' }, 'hideOnOutsideClick': $context.$data.hideOnOutsideClick, 'onShown': $context.$data.onShown, 'onContentReady': $context.$data.onContentReady, 'position': { 'my': 'left top', 'at': 'right top', 'boundary': '.dx-designer', 'of': $context.$data.getPositionTarget(), 'collision': 'flipfit fit', 'offset': '-10 0' }, 'container': $context.$data.getPositionTarget(), 'showTitle': false, 'target': $context.$data.getPositionTarget(), 'showCloseButton': false, 'shading': false, 'animation': {}, 'visible': $context.$data.visible }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: brushWidthText', function ($context, $element) { return { 'text': function () { return $context.$data.brushWidthText; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxSlider: { min: 1, max: 9, value: $data.lineWidth, label: { visible: true }, tooltip: { enabled: true, showMode: \'always\', position: \'bottom\' } }', function ($context, $element) { return { 'dxSlider': function () { return { 'min': 1, 'max': 9, 'value': $context.$data.lineWidth, 'label': { 'visible': true }, 'tooltip': { 'enabled': true, 'showMode': 'always', 'position': 'bottom' } }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: brushColorText', function ($context, $element) { return { 'text': function () { return $context.$data.brushColorText; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: $data.colors', function ($context, $element) { return { 'foreach': function () { return $context.$data.colors; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { selected: $data.isSelected }', function ($context, $element) { return { 'css': function () { return { 'selected': $context.$data.isSelected }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: { background: $data.value }, dxclick: $data.action', function ($context, $element) { return { 'style': function () { return { 'background': $context.$data.value }; }, 'dxclick': function () { return $context.$data.action; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: sizeModeText', function ($context, $element) { return { 'text': function () { return $context.$data.sizeModeText; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: { data: sizeModeValues }', function ($context, $element) { return { 'foreach': function () { return { 'data': $context.$data.sizeModeValues }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { selected: isSelected }, template: $data.iconTemplate, dxclick: $data.action, attr: { title: $data.attrTitle }', function ($context, $element) { return { 'css': function () { return { 'selected': $context.$data.isSelected }; }, 'template': function () { return $context.$data.iconTemplate; }, 'dxclick': function () { return $context.$data.action; }, 'attr': function () { return { 'title': $context.$data.attrTitle }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: alignmentText', function ($context, $element) { return { 'text': function () { return $context.$data.alignmentText; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: { data: alignmentValues }', function ($context, $element) { return { 'foreach': function () { return { 'data': $context.$data.alignmentValues }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('css: { selected: isSelected }, template: $data.iconTemplate, dxclick: $data.action, , attr: { title: $data.attrTitle }', function ($context, $element) { return { 'css': function () { return { 'selected': $context.$data.isSelected }; }, 'template': function () { return $context.$data.iconTemplate; }, 'dxclick': function () { return $context.$data.action; }, '': function () { return undefined; }, 'attr': function () { return { 'title': $context.$data.attrTitle }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { width: contentWidth }', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$data.contentWidth }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxTextBox: { value: filter, valueChangeEvent: \'keyup\', placeholder: searchPlaceholder(), showClearButton: true  }', function ($context, $element) { return { 'dxTextBox': function () { return { 'value': $context.$data.filter, 'valueChangeEvent': 'keyup', 'placeholder': $context.$data.searchPlaceholder(), 'showClearButton': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { width: contentWidth }, dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$data.contentWidth }; }, 'dxScrollView': function () { return { 'showScrollbar': 'onHover', 'useNative': false, 'scrollByThumb': true }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { width: $parent.width + 10 }, visible: visible, click: function() { $parent.action($data); }', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$parent.width + 10 }; }, 'visible': function () { return $context.$data.visible; }, 'click': function () { return function () { $context.$parent.action($context.$data); }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('styleunit: { width: $parent.width, height: $parent.height }, style: { backgroundImage: \'url(\' + ($data.url || $data.data) + \')\' }', function ($context, $element) { return { 'styleunit': function () { return { 'width': $context.$parent.width, 'height': $context.$parent.height }; }, 'style': function () { return { 'backgroundImage': 'url(' + ($context.$data.url || $context.$data.data) + ')' }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('searchHighlighting: { text: $data.text, textToSearch: $parent.filter }, attr: { title: $data.text }', function ($context, $element) { return { 'searchHighlighting': function () { return { 'text': $context.$data.text, 'textToSearch': $context.$parent.filter }; }, 'attr': function () { return { 'title': $context.$data.text }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('text: $data.text, attr: { title: $data.text }', function ($context, $element) { return { 'text': function () { return $context.$data.text; }, 'attr': function () { return { 'title': $context.$data.text }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { if: $data.template, name: $data.template, data: $data.templateOptions }', function ($context, $element) { return { 'template': function () { return { 'if': $context.$data.template, 'name': $context.$data.template, 'data': $context.$data.templateOptions }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: { name: contentTemplate, data: contentData }', function ($context, $element) { return { 'template': function () { return { 'name': $context.$data.contentTemplate, 'data': $context.$data.contentData }; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('template: \'dx-picture-editing-imagespicker\'', function ($context, $element) { return { 'template': function () { return 'dx-picture-editing-imagespicker'; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('foreach: images', function ($context, $element) { return { 'foreach': function () { return $context.$data.images; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $data.text', function ($context, $element) { return { 'if': function () { return $context.$data.text; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('if: $parent.filterEnabled', function ($context, $element) { return { 'if': function () { return $context.$parent.filterEnabled; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('ifnot: $parent.filterEnabled', function ($context, $element) { return { 'ifnot': function () { return $context.$parent.filterEnabled; } }; });
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('dxSelectBox: getOptions({ dataSource: values, value: value, valueExpr: \'value\', displayExpr: \'displayValue\', displayCustomValue: true, disabled: disabled, useItemTextAsTitle: true, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true, dropDownOptions: { container: $root.getPopupContainer($element) }, popupPosition: { boundary: $root.getPopupContainer($element) }, inputAttr: { \'aria-label\': displayName } }), dxValidator: { validationRules: $data.validationRules || [] }', function ($context, $element) { return { 'dxSelectBox': function () { return $context.$data.getOptions({ 'dataSource': $context.$data.values, 'value': $context.$data.value, 'valueExpr': 'value', 'displayExpr': 'displayValue', 'displayCustomValue': true, 'disabled': $context.$data.disabled, 'useItemTextAsTitle': true, 'noDataText': $context.$root.dx._static.noDataText(), 'encodeNoDataText': true, 'dropDownOptions': { 'container': $context.$root.getPopupContainer($element) }, 'popupPosition': { 'boundary': $context.$root.getPopupContainer($element) }, 'inputAttr': { 'aria-label': $context.$data.displayName } }); }, 'dxValidator': function () { return { 'validationRules': $context.$data.validationRules || [] }; } }; });

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/dx-viewer-templates.js

external_DevExpress_Analytics_Widgets_Internal_["SvgTemplatesEngine"].addTemplates({
    'dxrd-checkboxcustomglyph': '<div class="dxrd-checkbox-custom-glyph" data-bind="style: $data.customGlyphStyleCss"></div>',
    'dxrv-preview-date-range-mobile': '<div class="dxrv-preview-date-range-mobile"> <div class="dx-fieldset"> <div class="dx-field"> <div data-bind="dxSelectBox: { dataSource: items, displayExpr: \'displayName\', value: popupModel.textRangeValue, useItemTextAsTitle: true , placeholder: $root.getLocalization(\'Select Period\', \'AnalyticsCoreStringId.Mobile_DateRange_SelectPeriod\') }"></div> </div> <div class="dx-field"> <div class="dx-fieldset-column"> <div class="dx-fieldset-header" data-bind="text: $root.getLocalization(\'From\',\'AnalyticsCoreStringId.Mobile_DateRange_From\')"></div> <div data-bind="css: popupModel._dateButtonEditorClassName, dxButton: { text: startDate && popupModel.getStringDate(startDate) || $root.getLocalization(\'Start Date\',\'AnalyticsCoreStringId.Mobile_DateRange_StartDate\'), stylingMode: \'contained\', onClick: popupModel.focusButton, focusStateEnabled: false, activeStateEnabled: false }"></div> <div data-bind="css: popupModel._dateEditorClassName"> <!-- ko template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(startDate, undefined) } --> <!-- /ko --> </div> </div> <div class="dx-fieldset-column dx-fieldset-column-right"> <div class="dx-fieldset-header" data-bind="text: $root.getLocalization(\'Until\',\'AnalyticsCoreStringId.Mobile_DateRange_Until\')"></div> <div class="dxd-back-secondary dx-fieldset-column-separator"></div> <div data-bind="css: popupModel._dateButtonEditorClassName, dxButton: { text: endDate && popupModel.getStringDate(endDate) || $root.getLocalization(\'End Date\',\'AnalyticsCoreStringId.Mobile_DateRange_EndDate\'), stylingMode: \'contained\', type:\'default\', onClick: popupModel.focusButton, focusStateEnabled: false, activeStateEnabled: false }"></div> <div data-bind="css: popupModel._dateEditorClassName"> <!-- ko template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(endDate, startDate) } --> <!-- /ko --> </div> </div> </div> </div> </div>',
    'dxrd-preview-page-mobile': '<div class="dxrdp-content" data-bind="dxclick: clickToBrick, styleunit: { width: width, height: height }, autoFit: { autoFitBy: $root.reportPreview.autoFitBy, zoom: zoom, width: originalWidth, height: originalHeight, previewSize: $root.reportPreview.previewSize, brickLoading: brickLoading, skipIfInvisible: true }"> <div class="dxrdp-loading-wrapper" data-bind="styleunit: { width: width, height: height, lineHeight: height }, style: { \'background-color\': color }, visible: pageLoading, text: loadingText"> </div> <img style="width:100%; height:100%;" data-bind="attr: { src: displayImageSrc }, style:{ \'background-color\': color }" /> <div class="dxrdp-active-border" data-bind="css: { \'dxrdp-active\': active() && $parents[1].blocks().length > 1 }, visible: !$root.slideOptions.readerMode"></div> <!-- ko foreach: activeBricks --> <!-- ko template: { name: "dxrd-page-brick-mobile", data: $data } --> <!--/ko--> <!--/ko--> <!-- ko if: !brickLoading() && $data.editingFields--> <!-- ko foreach: editingFields --> <!-- ko template: template --> <!--/ko--> <!--/ko--> <!--/ko--> </div>',
    'dxrd-page-brick-mobile': '<div class="dxrd-report-preview-brick" data-bind="style: { top: topP, left: $data.leftP, right: $data.rightP, height: heightP, width: widthP }, css: { \'dxrd-report-preview-brick-selected\': $data.active }"> </div>',
    'dxrdp-search-mobile': '<!-- ko if: $data.enabled --> <div class="dxrdp-search-wrapper" data-bind="styleunit:{ height: height }, dxrdSearchBar: $data"> <div class="dxrd-mobile-search"> <div class="dxrdp-taptosearch" data-bind="visible: !$data.editorVisible(), dxclick: function(s, e) { $data.focusEditor(e); }"> <div class="dxrdp-taptosearch-text" data-bind="text: $root.getLocalization(\'Tap here to Search\', \'ASPxReportsStringId.WebDocumentViewer_Mobile_TapHereToSearch\')"></div> </div> <div class="dxrdp-search-panel" data-bind="visible: $data.editorVisible()"> <div class="dxrdp-search-editor" data-bind="dxTextBox: { value: searchText, onEnterKey: function() { $data.startSearch(); } }"></div> </div> </div> </div> <!-- /ko -->',
    'dxrd-preview-export-to-mobile': '<div class="dxrd-preview-export-to" data-bind="dxMenu: { wrapperAttr: { class: \'dxrd-preview-export-to\' }, items: items, onItemClick: clickAction }, attr: { title: $root.getLocalization(text, $data.textId) }"> <div class="dxrd-preview-export-menu-item" data-options="dxTemplate: { name: \'item\' }" data-bind="attr: { title: $root.getLocalization(text, $data.textId) }"> <!--ko if: $data.format --> <div class="dxrd-preview-export-item-text" data-bind="text: $root.getLocalization($data.text, $data.textId)"></div> <!-- /ko --> <!--ko ifnot: $data.format --> <div class="dxrd-preview-export-item-image-wrapper"> <div class="dxrd-preview-export-item-image" data-bind="css: ko.unwrap($data.imageClassName), template: { name: ko.unwrap($data.imageTemplateName), if: !!ko.unwrap($data.imageTemplateName)}"> </div> </div> <div class="dx-menu-item-popout-container"> <div class="dx-menu-item-popout"></div> </div> <!-- /ko --> </div> </div>',
    'dxrdp-surface-mobile-bottom': '<div class="dxrdp-mobile-actions" data-bind="visible: visible"> <div class="dxrdp-mobile-actions-content"> <!-- ko foreach: actions --> <div class="dxrdp-mobile-action" data-bind="visible: visible, css: $data.imageClassName, template: { name: $data.imageTemplateName, if: !!ko.unwrap($data.imageTemplateName)}, dxclick: clickAction"> </div> <!-- ko if: $data.content --> <!-- ko template: $data.content --> <!-- /ko --> <!-- /ko --> <!-- /ko --> </div> </div>',
    'dxrdp-pages-mobile': '<div class="dxrdp-mobile-paginator" data-bind="dxrdMobilePaginator: $data"> <div class="dxrdp-mobile-paginator-content"> <div class="dxrdp-mobile-paginator-text" data-bind="text : text"></div> </div> </div>',
    'dxrd-menu-export-content': '<div class="dxrd-menu-export-popover" data-bind="dxPopover: { wrapperAttr: { class: \'dxrd-menu-export-popover\' }, width: \'266px\', height: \'266px\', visible: visible, target: \'.dxrdp-mobile-action.dxrd-image-export-to\', container: $root.getPopupContainer($element), }"> <!-- ko foreach: items --> <div class="dxrd-menu-export-item" data-bind="dxclick: action, text: text"> </div> <!-- /ko--> </div>',
    'dxrd-menu-parameters-content': '<div data-bind="dxPopup: { wrapperAttr: { class: \'dxrd-menu-parameters-popup\' }, showTitle: false, width: function() {return window.innerWidth }, height: function() {return window.innerHeight }, visible: visible, container: $root.getPopupContainer($element), }"> <!-- ko template: { name: \'dxrv-preview-parameters-mobile\', data: $data }--> <!-- /ko --> </div>',
    'dxrv-preview-parameters-mobile': '<div class="dxrdp-parameters-mobile" data-bind="dxValidationGroup: {}, css: className"> <div class="dxrdp-parameters-title" data-bind="text: $data.title"> </div> <div class="dxrdp-parameters-scroll" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, bounceEnabled: false }"> <!-- ko template: { name: $data.contentTemplate, data: model }--> <!-- /ko --> </div> <div class="dxrdp-parameters-buttons text-buttons" data-bind="foreach: { data: $data.actionButtons }, cacheElement: { action: function(element) { $data.cacheElementContent(element); } }"> <div class="dxrdp-parameter-action" data-bind="dxButton: { text: text, onClick: function(params){ $data.action(params) }, disabled: disabled, visible: visible }, css: className"></div> </div> <div class="dxrdp-parameters-buttons" data-bind="visible: showIcons, foreach: { data: $data.actionIcons }"> <div class="dxrdp-parameter-icon" data-bind="dxButton: { onClick: function(params){ $data.action(params)}, disabled: disabled }, css: className"></div> </div> </div>',
    'dxrv-preview-parameters-mobile-content': '<div class="dx-fieldset"> <div data-bind="dxPropertyGrid: { target: ko.observable($data) }"></div> </div>',
    'dxrv-range-parameter-mobile': '<div data-bind="dxrvDateRangeEditor: {value: $data.value(), isMobile: true }"></div>',
    'dxrdp-surface-mobile': '<div class="dxrd-preview-wrapper dxrdp-fullscreen dxrd-preview-surface" data-bind="style: { pointerEvents: $data.documentId === null ? \'none\' : \'\', touchEvents: $data.documentId === null ? \'none\' : \'\' }, styleunit: { top: topOffset, height: previewWrapperSize().height, width: previewWrapperSize().width }, slide: $root.slideOptions, mobileZoom: { zoom: mobileZoom, zoomUpdating: zoomUpdating }, dxclick: function(s,e) { if(!$root.brickEventsDisabled()) { $data.showActions(s,e); } }, css: { \'dxrp-editing-fields-hightlighted\': editingFieldsHighlighted }"> <!-- ko template: {name: \'dxrd-preview-progress-bar\', data: progressBar }--> <!-- /ko --> <div class="dxrd-mobile-content"> <div class="dxrd-mobile-gallery" data-bind="style: { pointerEvents: $data.zoomUpdating() ? \'none\' : \'\', touchEvents: $data.zoomUpdating() ? \'none\' : \'\' }, dxGalleryReportPreview: { dataSource: $root.gallery.items, gallery: $root.gallery, animationEnabled: $root.gallery.animationEnabled, disabled: $data.zoomUpdating, selectedIndex: $root.gallery.selectedIndex, width:\'100%\', height: \'100%\', showIndicator: false, loop: true, onSelectionChanged: onSlide, swipeEnabled: $root.slideOptions.swipeEnabled }"> <div data-options="dxTemplate: { name: \'item\' }"> <div class="dxrd-scrollView-mobile" data-bind="dxScrollView: $root.reportPreview.getScrollViewOptions()"> <div class="dxrd-gallery-blocks" data-bind="style: $root.gallery.contentSize()"> <!-- ko foreach: $data.blocks() --> <!-- ko if: $data.page --> <div class="dxrd-gallery-block" data-bind="styleunit: position, css: $data.classSet"> <div class="dxrd-gallery-block-content" data-bind="styleunit: { width: Math.max(page.width(), position().width), height: Math.max(page.height(), position().height) }, style: { \'background-color\': page.color }"> <div class="dxrdp-active-border" data-bind="css: { \'dxrdp-active\': page.active() && $parents[0].blocks().length > 1, \'dxrdp-page-padding\': $parents[0].blocks().length > 1 }, visible: $root.slideOptions.readerMode"></div> <div class="dxrd-mobile-page" data-bind="styleunit: { width: page.width, height: page.height }, style: { pointerEvents: $root.brickEventsDisabled() ? \'none\' : \'\', touchEvents: $root.brickEventsDisabled() ? \'none\' : \'\' }"> <!-- ko template: { name :\'dxrd-preview-page-mobile\', data: page } --> <!-- /ko --> </div> </div> </div> <!-- /ko --> <!-- /ko --> </div> </div> </div> </div> </div> </div> <input type="text" style="display:none" />',
    'dxrp-editing-field-container': '<div class="dxrp-editing-field-container dx-accessibility-editing-field-item dx-accessibility-border-accented" data-bind="style: containerStyle(), zoom: zoom, css: { active: active(), readonly: field.readOnly() }"> <div class="dxrp-editing-field-borders" data-bind="style: borderStyle()"></div> <div class="dxrp-editing-field-content" data-bind="dxclick: activateEditor"> <!-- ko if: !active() || field.readOnly()  --> <div class="dxrp-editing-field-readonly-text" data-bind="style: textStyle(), css: {\'dxrp-editing-field-text-wordwrap\': !wordWrap}"> <!-- ko if: htmlValue()  --> <div class="dxrp-editing-field-text-html dxrp-editing-field-text-html-complex" data-bind="style: breakOffsetStyle(), html: htmlValue()"></div> <!--/ko--> <!-- ko ifnot: htmlValue()  --> <div class="dxrp-editing-field-text-html" data-bind="style: breakOffsetStyle(), text: field.editValue()"></div> <!--/ko--> </div> <!--/ko--> <!-- ko if: active() && !field.readOnly() --> <!-- ko template: { name: editorTemplate, data: data } --> <!--/ko--> <!--/ko--> </div> </div>',
    'dxrp-editing-field-text': '<textarea class="dxrp-editing-field-text" data-bind="value: value, valueUpdate: \'keypress\', style: textStyle(), event: { blur: hideEditor, keyup: keypressAction }"></textarea>',
    'dxrp-editing-field-mask': '<div class="dxrp-editing-field-mask" data-bind="dxTextBox: options, childStyle: { style: textStyle(), selector: \'.dx-texteditor-input\'}"></div>',
    'dxrp-editing-field-number': '<div class="dxrp-editing-field-mask" data-bind="dxNumberBox: options, childStyle: { style: textStyle(), selector: \'.dx-texteditor-input\'}"></div>',
    'dxrp-editing-field-datetime': '<div style="width: 100%" class="dxrp-editing-field-datetime" data-bind="dxDateBox: $data.getOptions({ dropDownOptions: { container: $root.getPopupContainer($element), position: { at: \'left bottom\', collision: \'flipfit flip\', my: \'left top\', boundary: $root.getPopupContainer($element), of: $element } } }), childStyle: { style: textStyle(), selector: \'.dx-texteditor-input\'}"></div>',
    'dxrp-editing-field-image': '<div class="dxrp-editing-field-container dx-accessibility-editing-field-item dx-accessibility-border-accented" data-bind="style: containerStyle() "> <!-- ko template: \'dxrp-editing-field-image-editor\' --> <!-- /ko --> </div>',
    'dxrp-editing-field-image-editor': '<div style="height: 100%; width: 100%;" data-bind="dxPictureEditor: $data.getPictureEditorOptions()"></div>',
    'dxrp-editing-field-checkbox': '<div class="dxrp-editing-field-check-container dx-accessibility-editing-field-item dx-accessibility-border-accented" data-bind="style: containerStyle(), zoom: zoom, click: onClick"> <div class="dxrp-editing-field-check" tabindex="1" data-bind="style: checkStyle(), template: {name: $data.checkStateStyleIcon, if: !!ko.unwrap($data.checkStateStyleIcon)}"> </div> </div>',
    'dxrp-editing-field-radio': '<div class="dxrp-editing-field-check-container dx-accessibility-editing-field-item dx-accessibility-border-accented" data-bind="style: containerStyle(), zoom: zoom, click: onClick"> <div class="dxrp-editing-field-check" data-bind="style: checkStyle()"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 760 760" preserveAspectRatio="xMidYMid meet"> <g fill="#010101" stroke="none"> <path d="M32,380a348,348 0 1,0 696,0a348,348 0 1,0 -696,0" class="highlight" style="stroke-width: 50;stroke: rgb(0, 0, 0);" /> <path d="M185,380a195,195 0 1,0 390,0a195,195 0 1,0 -390,0" data-bind="style: { fill: checked() ? \'black\' : \'transparent\' }" /> </g> </svg> </div> </div>',
    'dxrp-character-comb-editing-field': '<div class="dxrp-editing-field-charactercomb dx-accessibility-editing-field-item dx-accessibility-border-accented" data-bind="style: containerStyle(), dxclick: activateEditor, zoom: zoom, css: { active: active(), readonly: field.readOnly() }"> <!-- ko if: !active() || field.readOnly()  --> <!-- ko foreach: cells --> <div class="dxrp-editing-field-charactercomb-cell" data-bind="style: style, text: text"></div> <!-- /ko --> <!-- /ko --> <!-- ko if: active() && !field.readOnly() --> <textarea style="background:white" class="dxrp-editing-field-text" data-bind="value: field._editorValue, valueUpdate: \'keypress\', style: textStyle(), event: { blur: hideEditor, keyup: keypressAction }"></textarea> <!--/ko--> </div>',
    'dxrd-export-tool-content': '<div class="dxrd-visually-hidden"> <form data-bind="attr: { \'action\': exportActionUri }, foreach: exportFormData" method="post"> <input data-bind="attr: {\'name\': name, \'value\': value}"/> </form> </div> <div data-bind="dxPopup: { width: popupWidth, height: popupHeight, title: getPopupTitle(), visible: popupVisible, showCloseButton: true, toolbarItems: popupButtons, wrapperAttr: { class: \'dxrd-print-dialog dx-editors dx-widget\' }, container: $root.getPopupContainer($element), position: { of: $root.getPopupContainer($element) } }"> <div class="dx-popup-content"> <div data-bind="text: $root.getLocalization(\'The browser sent the document to the printer.\', \'ASPxReportsStringId.WebDocumentViewer_Print_Popup_Caption\')"></div> <p></p> <!-- ko if: $data.printingTextPrefix --> <div class="dxrdp-print-text-prefix" data-bind="text: printingTextPrefix"></div> <!-- /ko --> <a href="" class="dxrd-preview-printing-link" data-bind="click: printingLinkCallback, text: $root.getLocalization(\'document in PDF format\', \'ASPxReportsStringId.WebDocumentViewer_Print_Popup_LinkText\')"></a> <!-- ko if: $data.printingTextPostfix --> <div class="dxrdp-print-text-postfix" data-bind="text: printingTextPostfix"></div> <!-- /ko --> </div> </div>',
    'dxrd-preview-export-options': '<div class="dxrd-preview-export-options-wrapper dxrd-preview-property-wrapper" data-bind="visible: active() && visible()"> <div class="dxrd-right-panel-header dxd-text-primary"> <span data-bind="text: $root.getLocalization(\'Export Options\', \'DevExpress.XtraReports.UI.XtraReport.ExportOptions\')"></span> </div> <!-- ko if: model--> <div class="dxrd-right-panel-body" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); }  }"> <div class="dx-fieldset" data-bind="accessibilityKeyboardHelper: $data.keyboardHelper"> <div role="tablist" class="dxrd-right-panel-content dxrd-export-options-content" data-bind="dxPropertyGrid: { target: model }"></div> </div> </div> <!-- /ko --></div>',
    'dxrd-preview-export-to': '<div class="dxrd-preview-export-toolbar-item dxrd-toolbar-item" data-bind="visible: visible"> <div role="menu" class="dx-accessibility-toolbar-item dx-accessibility-focus-border-accented" data-bind="attr: { \'aria-label\': $root.getLocalization(text, $data.textId), \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }" > <div class="dxrd-preview-export-to dxd-button-back-color dxd-state-normal dxd-icon-highlighted" data-bind="dxMenu: { wrapperAttr: { class: \'dxrd-preview-export-to dxd-button-back-color dxd-state-normal dxd-icon-highlighted\' }, disabled: $data.disabled(), items: items, cssClass: \'dxrdp-export-to-menu\', onItemClick: clickAction, onSubmenuShowing: $data.eventHandlers.onSubmenuShowing($root.getPopupContainer($element), $element), onSubmenuShown: $data.eventHandlers.onSubmenuShown, onSubmenuHiding: $data.eventHandlers.onSubmenuHiding, tabIndex: \'-1\' }, attr: { title: $root.getLocalization(text, $data.textId) }"> <div class="dxrd-preview-export-menu-item" data-options="dxTemplate: { name: \'item\' }" data-bind="attr: { title: $root.getLocalization(text, $data.textId) }"> <!--ko if: $data.format --> <div class="dxrd-preview-export-item-text" data-bind="text: $root.getLocalization($data.text, $data.textId)"></div> <!-- /ko --> <!--ko ifnot: $data.format --> <div class="dxrd-preview-export-item-image-wrapper"> <div class="dxrd-preview-export-item-image" data-bind="css: ko.unwrap($data.imageClassName), template: ko.unwrap($data.imageTemplateName)"> </div> </div> <div class="dx-menu-item-popout-container"> <div class="dx-menu-item-popout"></div> </div> <!-- /ko --> </div> </div> </div> <div class="dxrd-toolbar-item-separator dxd-toolbar-separator-color dxd-border-secondary" data-bind="visible: $data.hasSeparator"></div> </div>',
    'dxrd-page-brick-clickable': '<div class="dxrd-report-preview-brick" data-bind="dxclick: function(_, event){ onClick(event); event.stopPropagation(); }, style: { top: topP, left: $data.leftP, right: $data.rightP, height: heightP, width: widthP }, css: { \'dxrd-report-preview-brick-selected\': $data.active, \'dxrd-report-preview-brick-selectable\': !($data.bricks) }"> <!-- ko if: $data.navigation --> <div class="dxrd-report-preview-brick-navigation" data-bind="css: { \'dxrdp-navigation-brick-drill-down\' : !!navigation.drillDownKey, \'dxrdp-navigation-brick-sorting\' : !!navigation.sortData, \'dxrdp-navigation-brick-sorting-desc\': navigation.sortData && navigation.sortData.order === 1, \'dxrdp-navigation-brick-sorting-asc\': navigation.sortData && navigation.sortData.order === 2 }"></div> <!--/ko--> </div>',
    'dxrd-preview-page': '<div role="img" class="dxrd-report-preview-content" style="position: relative; width: 100%; height: 100%" data-bind="attr: {\'aria-label\': $parent.currentPageAriaLabelImgAlt($data.pageIndex) }, dxclick: clickToBrick, \'brick-selection-prog\': { page: $data, preview: $parent, click: function(pageIndex) { $parent.goToPage(pageIndex) } }"> <div class="dxrd-report-preview-content-loading-wrapper" style="background: white;" data-bind="styleunit: { \'width\': width() + 2, \'height\': height() + 2 }, visible: pageLoading"> <div class="dxrd-report-preview-content-loading-panel" style="text-align: center;" data-bind="styleunit: { \'paddingTop\': height() / 2.3 }"> <div class="dxrd-report-preview-content-loading-panel-text" data-bind="text: loadingText"></div> </div> </div> <div> <img style="pointer-events: none; width: 100%; height: 100%;" data-bind="attr: { src: displayImageSrc, \'alt\': $parent.currentPageAriaLabelImgAlt($data.pageIndex) }" /> <!-- ko foreach: activeBricks --> <!-- ko template: { name: "dxrd-page-brick-mobile", data: $data } --> <!--/ko--> <!--/ko--> <!-- ko foreach: clickableBricks --> <!-- ko template: { name: "dxrd-page-brick-clickable", data: $data } --> <!--/ko--> <!--/ko--> <!-- ko if: !brickLoading() && $data.editingFields--> <div data-bind="accessibilityKeyboardHelper: $data.editingFieldsKeyboardHelper"> <!-- ko foreach: editingFields --> <!-- ko template: template --> <!--/ko--> <!--/ko--> </div> <!--/ko--> </div> </div>',
    'dxrp-popup-editing-field-image': '<div class="dxrp-editing-field-container" data-bind="style: containerStyle() "> <div class="dx-accessibility-editing-field-item dx-accessibility-border-accented" data-bind="dxclick: activateEditor, css: parentPopupClass"> <div class="dxrp-editing-field-popup-container-cloned" data-bind="dxPainter: $data.getPainter()"></div> <!-- ko template: { name: \'dx-picture-editing-popup\', data: $data.getPopupData() } --> <!-- /ko --> </div> </div>',
    'dx-picture-editing-popup': '<div class="dx-picture-edit-popup-content dx-picture-edit-popup-content-fullscreen" data-bind="dxPopup: { width: contentData.containerStyle().width, height: contentData.containerStyle().height, position: { boundary: getContainer(), of: getPositionTarget($element), collision: \'flipfit flipfit\' }, container: getContainer(), showTitle: false, target: getContainer(), deferRendering: false, hideOnOutsideClick: true, showCloseButton: false, onContentReady: onContentReady, onHiding: onHiding, onShown: onShown, shading: shading, wrapperAttr: { class: \'dx-picture-edit-popup-content dx-picture-edit-popup-content-fullscreen\' }, animation: { show: { type: \'slide\', duration: 0, to: { opacity: 1 }, from: { opacity: 0 } }, hide: { type: \'fade\', duration: 100, to: { opacity: 0 }, from: { opacity: 1 } } }, visible: isVisible($element) }"> <!-- ko if: showContent --> <!-- ko template: { name: contentTemplate, data: contentData, afterRender: $data.renderedHandler } --> <!--/ko--> <!--/ko--> </div>',
    'dxrd-zoom-autofit-select-template': '<div class="dxrd-toolbar-item-zoom" data-bind="visible: visible"> <div role="combobox" class="dx-accessibility-toolbar-item dx-accessibility-focus-border-accented" data-bind="attr: { \'aria-label\': $root.getLocalization(\'Zoom\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelZoomCombobox\'), \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }" > <div class="dxrd-toolbar-item-zoom-editor" data-bind="dxSelectBox: { items: zoomItems, value: $data.zoom, displayExpr: displayExpr, displayCustomValue: true, acceptCustomValue: true, onCustomItemCreating: onCustomItemCreating, useItemTextAsTitle: true, width: 140, dropDownOptions: { container: $root.getPopupContainer($element), position: { my: \'left top\', at: \'left bottom\', of: $element }, wrapperAttr: { class: \'dx-zoom-selectbox-popup-wrapper\' } }, tabIndex: \'-1\', inputAttr: { \'aria-label\': $root.getLocalization(\'Zoom\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelZoomCombobox\') }}"> </div> </div> </div>',
    'dxrd-preview-toolbar-scrollable': '<div class="dxrd-toolbar-wrapper dxrdp-toolbar-scrollable dx-shadow-top dxd-back-secondary-invariant" data-bind="dxScrollView: { showScrollbar: \'onHover\', direction: \'horizontal\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }"> <div class="dxrd-toolbar" role="toolbar" data-bind="keyDownActions: actionLists, accessibilityKeyboardHelper: $data.keyboardHelper"> <div id="dxrd-preview-toolbar-live-region" class="dxrd-visually-hidden" aria-live="polite" aria-atomic="true"></div> <div class="dx-accessibility-container-background dxd-back-accented"></div> <!-- ko template: {name: \'dxrd-toolbar-tmplt\', data: actionLists.toolbarItems } --> <!-- /ko --> </div> </div>',
    'dxrd-preview-search': '<div role="search" aria-haspopup="listbox" class="dxrd-preview-search-wrapper" data-bind="visible: active() && visible(), accessibilityKeyboardHelper: $data.keyboardHelper"> <div id="dxrd-preview-search-live-region" class="dxrd-visually-hidden" aria-live="polite" aria-atomic="true"></div> <!-- ko with: model --> <div class="dxrd-preview-search-tab-header"> <span class="dxrd-preview-search-tab-header-text dxrd-right-panel-header dxd-text-primary" data-bind="text: $root.getLocalization(\'Search\', \'ASPxReportsStringId.SearchDialog_Header\')"></span> <div class="dxrd-preview-search-editor" data-bind="dxSearchEditor: { searchModel: $data, inputAttr: { \'type\': \'search\', \'title\': $root.getLocalization(\'Search\', \'ASPxReportsStringId.SearchDialog_Header\') }}"></div> <div class="dxrd-preview-search-checkbox" data-bind="dxCheckBox: { value: matchCase, text: $root.getLocalization(\'Match case\', \'ASPxReportsStringId.SearchDialog_Case\')}"></div> <div class="dxrd-preview-search-checkbox" data-bind="dxCheckBox: { value: matchWholeWord, text: $root.getLocalization(\'Match whole word only\', \'ASPxReportsStringId.SearchDialog_WholeWord\')}"></div> </div> <div class="dxrd-preview-search-result-header dxd-border-primary"> <div class="dx-accessibility-focus-border-accented dxrd-preview-search-result-header-text dxd-text-primary" data-bind="text: $root.getLocalization(\'Search result\', \'ASPxReportsStringId.WebDocumentViewer_SearchResultText\')"></div> </div> <!-- ko if: searchText().length --> <div class="dx-accessibility-container-background dxd-back-accented"></div> <div class="dxrdp-search-loading" data-bind="dxLoadIndicator: { visible: $data.loading }"></div> <div class="dxrd-preview-search-result dxd-border-accented" data-bind="dxList: { dataSource: searchResultDataSource, pageLoadMode: \'scrollBottom\', focusStateEnabled:false, hoverStateEnabled:false, onItemRendered: onItemRendered, noDataText:  loading() ? \'\' : noResultText(), encodeNoDataText: true, visible: !loading() }"> <div class="dxrd-preview-search-result-item dxd-list-item-back-color dxd-back-highlighted dx-accessibility-list-item dx-accessibility-focus-border-accented" data-bind="dxAction: { model: $data, action: $parent.itemClickAction }, attr: {\'aria-label\': $data.data.text + \', \' + $root.dx._static.formatSearchResult($data.data) + \', \' + ($parent.searchResult().indexOf($data.data) + 1) + \' of \' + $parent.searchResult().length }" data-options="dxTemplate : { name: \'item\' }" > <div class="dx-accessibility-field-background dxd-back-accented"></div> <div class="dxrd-preview-search-tab-item-text propertygrid-editor-displayName dxd-text-primary" data-bind="text: $data.data.text"></div> <div class="dxrd-preview-search-tab-item-info dxd-text-primary" data-bind="text: $root.dx._static.formatSearchResult($data.data)"></div> </div> </div> <!-- /ko --> <!-- /ko --> </div>',
    'dxrd-preview-progress-bar': '<div role="dialog" class="dxrd-preview-progress dxd-popup-back-color dxd-back-primary2 dxd-border-primary" data-bind="visible: visible, css: $data.cssClasses, accessibilityKeyboardHelper: $data.progressBarAccessibility"> <div class="dxrd-preview-progress-text dxd-text-primary" data-bind="text : text"></div> <div class="dxrd-preview-progress-bar dxd-back-primary"> <div class="dxrd-preview-progress-value dxd-preview-progress-bar-value-color dxd-back-accented" data-bind="style : { width: progress()  + \'%\' }"></div> </div> <div role="button" class="dxrd-preview-progress-cancel dxd-hyperlink-color dxd-border-accented dxd-text-accented dx-accessibility-list-item dx-accessibility-border-accented" data-bind="text: cancelText, visible: $data.cancelVisible, dxAction: { model: $data, action: function() { $data.stop && stop(); }}"></div> </div>',
    'dxrd-preview-parameters': '<div class="dxrd-preview-parameters-wrapper dxrd-preview-property-wrapper" data-bind="visible: active() && visible()"> <div class="dxrd-right-panel-header dxd-text-primary"> <span data-bind="text: $root.getLocalization(\'Preview Parameters\', \'ASPxReportsStringId.ReportDesigner_Preview_ParametersTitle\')"></span> <!-- ko if: (model && !model.isEmpty()) --> <!-- /ko --> </div> <!-- ko if: (!model || model.isEmpty()) --> <div class="dxrd-group-header-parameters-empty dxd-text-primary" data-bind="text: $root.getLocalization(\'The report does not contain any parameters.\', \'ASPxReportsStringId.WebDocumentViewer_NoParameters\')"></div> <!-- /ko --> <!-- ko if: (model && !model.isEmpty()) --> <div class="dxrd-right-panel-body" id="propertiesPanel" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }, dxValidationGroup: {}, accessibilityKeyboardHelper: $data.keyboardHelper"> <div role="tablist" class="dx-fieldset dxrd-right-panel-content"> <!-- ko template: { name: \'dx-propertieseditor\', data: $data.propertyGrid } --> <!-- /ko --> </div> <div class="dxrd-preview-parameter-actions-container"> <div class="dxrd-preview-parameter-action dxrd-preview-loading" data-bind="dxLoadIndicator: { visible: model.parametersLoading }"></div> <div class="dxrd-preview-parameter-action dxrdp-parameters-reset dx-accessibility-focus-border-accented" data-bind="dxButton: { text: $root.getLocalization(\'Reset\', \'ASPxReportsStringId.ParametersPanel_Reset\'), onClick: function() { model.restore(); } }"></div> <div class="dxrd-preview-parameter-action dxrdp-parameters-submit dx-accessibility-focus-border-accented" data-bind="dxButton: { text: $root.getLocalization(\'Submit\', \'ASPxReportsStringId.ParametersPanel_Submit\'), onClick: function(params) { model.validateAndSubmit(params); } }"></div> </div> </div> <!-- /ko --> </div>',
    'dxrd-preview-pager': '<div class="dxrd-preview-pager dxrd-toolbar-item" data-bind="visible: visible"> <div role="combobox" class="dx-accessibility-toolbar-item dx-accessibility-focus-border-accented" data-bind="attr: { \'aria-label\': $root.getLocalization(\'Pager\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelPagerCombobox\') , \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }" > <div class="dxrd-preview-pager-selectbox" data-bind="dxSelectBox: { dataSource: pageItems, value: selectedItem, opened: opened, displayExpr: displayExpr, useItemTextAsTitle: true, onFocusOut: focusOut, onKeyUp: keyUp, itemTemplate: itemTemplate, searchMode: searchMode, searchEnabled: searchEnabled, searchTimeout: searchTimeout, disabled: disabled, dropDownOptions: { container: $root.getPopupContainer($element), wrapperAttr: { class: \'dx-page-selectbox-popup-wrapper\' }, }, tabIndex: \'-1\', inputAttr: { \'aria-label\': $root.getLocalization(\'Pager\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelPagerCombobox\') } }"> </div> </div> <div class="dxrd-toolbar-item-separator dxd-toolbar-separator-color dxd-border-secondary" data-bind="visible: $data.hasSeparator"></div> </div>',
    'dxrd-preview-document-map': '<div class="dxrd-preview-document-map" data-bind="visible: active() && visible()" style="height: 100%; overflow:hidden"> <div class="dxrd-right-panel-header dxd-text-primary"> <div style="display: inline-block;" data-bind="text: $root.getLocalization(\'Document Map\', \'ASPxReportsStringId.DocumentViewer_RibbonCommandText_DocumentMap\')"></div> </div> <!-- ko if: model --> <!-- ko with: model --> <div class="dxrd-right-panel-body" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }, accessibilityKeyboardHelper: $parent.keyboardHelper"> <div role="tree" id="documentMapTree" data-bind="treelist: documentMapOptions" style="width:100%; height: 100%;"></div> </div> <!-- /ko --> <!-- /ko --></div>',
    'dxrd-report-preview': '<div class="dxrd-preview dxrd-designer-wrapper dxd-scrollbar-color dxd-surface-back-color" data-bind="visible: reportPreview.previewVisible, cssArray: [ $data.rootStyle , { \'dx-rtl\' : $data.rtl, \'dx-ltr\': !$data.rtl } ]"> <!-- ko foreach: parts --> <!-- ko template: { name: templateName, data: model }--> <!-- /ko --> <!-- /ko --> </div>',
    'dxrdp-surface': '<div class="dxrd-preview-wrapper" data-bind="textCopier, css: { \'dx-rtl\': $data.rtlReport, \'dxrp-editing-fields-hightlighted\': editingFieldsHighlighted } "> <!-- ko with: progressBar--> <!-- ko template: \'dxrd-preview-progress-bar\'--> <!-- /ko --> <!-- /ko --> <div class="dxrd-preview-surface" data-bind="accessibilityKeyboardHelper: $data.previewBrickKeyboardHelper"> <!-- ko if: !showMultipagePreview() --> <div class="dxrd-report-preview-holder"> <!-- ko with: currentPage--> <!-- ko if: pageLoading() || (!pageLoading() && displayImageSrc()) --> <div role="tab" class="dxrd-report-preview dx-accessibility-page-item dx-accessibility-border-accented" data-bind="autoFit: { autoFitBy: $parent.autoFitBy, zoom: zoom, width: originalWidth, height: originalHeight, rightPanelWidth: $root.tabPanel.width, previewSize: $parent.previewSize, brickLoading: brickLoading }, styleunit: { width: width, height: height }"> <!-- ko template: { name: \'dxrd-preview-page\', afterRender: function() { $parent.delayedInit() } }--> <!-- /ko --> </div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> <!-- ko if: showMultipagePreview() && !!currentPage() --> <div class="dxrd-report-preview-holder" data-bind="lazyImages: { enabled: showMultipagePreview, updateCallback: onSizeChanged }"> <!-- ko foreach: {data: pages, afterRender: function() { $parent.model.delayedInit() } }  --> <!-- ko lazy: { if: pageLoading() || (!pageLoading() && displayImageSrc()) } --> <div role="tab" class="dxrd-report-preview dxrd-report-preview-multipage dx-accessibility-page-item dx-accessibility-border-accented" data-bind="styleunit: { \'width\': width(), \'height\': height() }, toView: { active: active }, css : { \'dxrd-report-preview-active\': active }"> <!-- ko template: \'dxrd-preview-page\'--> <!-- /ko --> </div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> <div data-bind="css: { \'dxrd-visually-hidden\': currentPage() }" class="dxrd-report-preview-placeholder"> <div aria-live="assertive" aria-atomic="true" class="dxd-empty-area-placeholder-text-color dxd-text-info" data-bind="text: emptyDocumentCaption()"></div> </div> </div> </div> <div id="dxrd-preview-bricks-live-region" class="dxrd-visually-hidden" aria-live="polite" aria-atomic="true"></div> <div id="clipboard-container" style="position:absolute;top:-100px;"><textarea disabled data-bind="attr: { \'aria-label\': $root.getLocalization(\'Clipboard\', \'ASPxReportsStringId.WebDocumentViewer_AriaClipboard\') }" id="clipboard"></textarea></div>',
    'dxrd-export-tool': '<div data-bind="dxViewerExport: $data"></div>',
    'dxrv-daterange-editor': '<div class="dxrv-daterange-editor"> <div data-bind="cacheElement: { action: function(element) { $data._$element = element; } }, dxEllipsisEditor: { value: _displayText, readOnly:true, inputAttr: { \'aria-label\': $parent.displayName }, openOnFieldClick: true, buttonAction: function() { $data._showPopup(); } }"></div> <!-- ko template: { name: popupTemplate, data: popupModel } --> <!-- /ko --> </div>',
    'dxrv-daterange-editor-popup': '<div role="dialog" aria-modal="true" data-bind="dxPopup: { width: \'max-content\', height: $root.calculateWithZoomFactor(362), wrapperAttr: { class: \'dxrv-daterange-editor-popup-wrapper\' }, position: { my: \'right top\', at: \'right bottom\', of: $data._$element, collision: \'fit fit\', offset: \'1 -1\' }, container: $root.getPopupContainer($element), target: $root.getPopupContainer($element), showTitle: false, showCloseButton: false, hideOnOutsideClick: true, animation: {}, shading: false, visible: _popupVisible }"> <div data-bind="dxScrollView: { showScrollbar: \'always\', direction: \'horizontal\', useNative: false, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }"> <div class="dxrv-daterange-editor-popup-container" data-bind="accessibilityKeyboardHelper: $data.dialogKeyboardHelper"> <div role="listbox" class="dxrv-daterange-editor-list dxrv-daterange-editor-item dxd-border-primary dx-accessibility-daterange-item" data-bind="accessibilityKeyboardHelper: $data.dialogKeyboardHelper.predefinedDateRangesKeyboardHelper, dxScrollView: { showScrollbar: \'onHover\', scrollByContent: false, bounceEnabled: false, useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }"> <div class="dx-accessibility-container-background dxd-back-accented"></div> <!-- ko foreach: items --> <div role="option" class="dxrv-daterange-editor-list-item dxd-state-normal dxd-back-highlighted dx-accessibility-list-item dx-accessibility-focus-border-accented" data-bind="attr: { \'aria-selected\': $parent._isSelected($data) }, css: { \'dxd-state-selected\': $parent._isSelected($data) }, dxAction: { model: $data, action: function() { $parent.applyDate($data.range(), true) }}"> <div class="dx-accessibility-field-background dxd-back-accented"></div> <!-- ko text: displayName --> <!-- /ko --> </div> <!-- /ko --> </div> <div class="dxrv-daterange-editor-item"> <div class="dx-accessibility-container-background dxd-back-accented"></div> <!-- ko template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(startDate, undefined) } --> <!-- /ko --> </div> <div class="dxrv-daterange-editor-item"> <div class="dx-accessibility-container-background dxd-back-accented"></div> <!-- ko template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(endDate, startDate) } --> <!-- /ko --> </div> </div> </div> </div>',
    'dxrv-daterange-calendar': '<div tabIndex="0" class="dx-accessibility-calendar-item dx-accessibility-daterange-item" data-bind="dxCalendar: { value: value, cellTemplate: \'select_cell\', height: \'100%\', min: min }"> <div class="dxrv-daterange-cell" data-options="dxTemplate:{ name:\'select_cell\' }"> <div class="dxrv-daterange-cell-text" data-bind="text: text"></div> <div data-bind="css: { \'dxd-back-accented\': $parent.inRange(date) }"></div> </div> </div>',
    'dxrv-range-parameter': '<div data-bind="dxrvDateRangeEditor: {value: $data.value() }"></div>',
    'dxrd-propertieseditor': '<div data-bind="css: { \'dx-rtl\' : rtl }"> <div class="dx-editors"> <div class="dx-fieldset dxrd-parameters-fieldset dxd-border-primary"> <!-- ko foreach: getEditors() --> <!-- ko template: editorTemplate --> <!-- /ko --> <!-- /ko --> </div> </div> </div>',
    'dxrd-parameters-editor-content': '<!-- ko if: visible --> <div class="dxrd-parameters-group" data-bind="template: { name: \'dxrd-propertieseditor\', data: viewmodel }, css: { \'dxrd-parameters-border\' : !$data.hideBorder, \'dxrd-parameters-horizontal\' : $data.showHorizontally, }"> </div> <!-- /ko -->',
    'dxrd-parameters-separator': '<div class="dxrd-parameters-item-separator"> <div class="dxrd-item-separator dxd-border-secondary"></div> </div>',
    'dxrd-multivalue': '<!-- ko with: value --> <div data-bind="dxTagBox: $parent.getOptions({ dataSource: $data.dataSource, searchEnabled: true, useItemTextAsTitle: true, searchExpr: $data.searchExpr || [\'displayValue\'], value: $data.value, displayExpr: $data.displayExpr || \'displayValue\', valueExpr: $data.valueExpr || \'value\', multiline: false, showSelectionControls: true, showDropDownButton: !!$data.showDropDownButton, selectAllMode: \'allPages\', selectedItems: $data.selectedItems, inputAttr: { \'aria-label\': $parent.displayName }, disabled: $parent.disabled, selectAllText: $root.getLocalization(\'Select All\', \'AnalyticsCoreStringId.SelectAll\'), placeholder: $root.dx._static.selectPlaceholder(), maxDisplayedTags: $data.maxDisplayedTags, showMultiTagOnly: true, dropDownOptions: { container: $root.getPopupContainer($element), position: { boundary: $root.getPopupContainer($element), collision: \'flipfit flipfit\', of: $element, at: \'bottom\', my: \'top\' } } }), dxValidator: { validationRules: $parent.validationRules || [] }"> </div> <!-- /ko -->',
    'dxrd-multivalue-editable': '<!-- ko if: value --> <div class="dxrd-editor" data-bind="visible: visible"> <div data-bind="dxCollectionEditor: { values: value, info: info, level: level, displayName: $root.getLocalization(displayName) }"> <div data-bind="dxPropertyGrid: { target: value, level: editor.level + 1 }"></div> </div> </div> <!-- /ko -->',
    'dxrd-parameters-property-editor': '<div class="dx-editor" data-bind="visible: visible"> <div class="dx-group" data-bind="dxdAccordion: { collapsed: $data.collapsed, alwaysShow: $data.hideCollapsingImage }"> <div class="dx-editor-header" data-bind="css: { \'dxrd-empty-header\': $data.hideEditorHeader }"> <!-- ko ifnot: $data.hideEditorHeader --> <div class="dx-field" data-bind="attr: { role: isComplexEditor && \'tab\', \'id\': isComplexEditor && getIdByDisplayName(\'dxrd-accordion-trigger\'), \'aria-controls\': isComplexEditor && getIdByDisplayName(\'dxrd-accordion-pannel\'), \'aria-expanded\': isComplexEditor && (!collapsed() ? \'true\' : \'false\') }, css: { \'dxrd-accessibility-accordion-trigger dx-accessibility-focus-border-accented\': isComplexEditor, \'dxrd-vertical-label\': $data.editorOptions && $data.editorOptions.hasVerticalLabel }"> <div class="dx-field-label dxrd-group-label dxd-back-secondary dx-accordion-header dxd-text-primary" data-bind="styleunit: padding, css: { \'dx-accordion-empty\': templateName === \'dx-emptyHeader\', \'dxd-back-secondary\': $data.isGroupLabel, \'dx-accordion-hide-collapsing-image\': $data.hideCollapsingImage }"> <!-- ko if: isComplexEditor --> <div data-bind="enable: templateName === \'dx-emptyHeader\'"> <!-- ko ifnot: $data.hideCollapsingImage --> <div class="propertygrid-editor-collapsed dx-collapsing-image" data-bind="template: \'dxrd-svg-collapsed\', css: { \'dx-image-expanded\': !collapsed() }"></div> <!-- /ko --> <!-- ko if: !!$data.textToSearch --> <div class="dx-group-header-font" data-bind="searchHighlighting: { text: displayName, textToSearch: textToSearch }, attr: { \'title\': displayName }"></div> <!-- /ko --> <!-- ko ifnot: !!$data.textToSearch --> <div class="dx-group-header-font" data-bind="text: displayName, attr: { \'title\': displayName }"></div> <!-- /ko --> </div> <!-- /ko --> <!-- ko if: !isComplexEditor --> <!-- ko if: !!$data.textToSearch --> <div class="propertygrid-editor-displayName" data-bind="searchHighlighting: { text: displayName, textToSearch: textToSearch }, attr: { \'title\': displayName }, css: { \'dx-field-label-required\': isRequired }, style: { fontWeight: isPropertyModified() ? \'Bold\' : \'\'}"></div> <!-- /ko --> <!-- ko ifnot: !!$data.textToSearch --> <div class="propertygrid-editor-displayName" data-bind="text: displayName, attr: { \'title\': displayName }, css: { \'dx-property-required\': isRequired }, style: { fontWeight: isPropertyModified() ? \'Bold\' : \'\'}"></div> <!-- /ko --> <!-- /ko --> </div> <div class="dx-field-value" data-bind="css: { \'dxd-border-accented\': $data.isPropertyHighlighted }"> <div data-bind="service: { name: \'createEditorAddOn\' }"></div> <!-- ko if: templateName !== \'dx-emptyHeader\' --> <!-- ko lazy: { innerBindings: { template: templateName }, isResolved: $data.isRendered } --> <!-- /ko --> <!-- /ko --> </div> </div> <!-- /ko --> </div> <!-- ko if: isComplexEditor --> <div class="dx-editor-content dx-accordion-content" role="tabpanel" data-bind="attr:{\'aria-labelledby\': getIdByDisplayName(\'dxrd-accordion-trigger\'), \'id\': getIdByDisplayName(\'dxrd-accordion-pannel\'), \'aria-hidden\': collapsed() ? \'true\' : \'false\' }"> <!-- ko if: (!$data.editorCreated || editorCreated) --> <!-- ko template: contentTemplateName --> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> </div> </div>',
    'dx-picture-editing': '<div class="dx-picture-editing"> <canvas data-bind="zoom: painter.scale"></canvas> <div class="dx-picture-editing-active" data-bind="dxPopup: { width: 48, height: \'auto\', wrapperAttr: { class: \'dx-picture-editing-active\' }, position:{ my: \'left top\', at: \'right top\', boundary: \'.dxrd-preview-surface\', of: $data.$element, collision: \'fit fit\', offset: \'1 -1\' }, container: shadingEnabled() ? \'.dx-overlay-wrapper.dx-picture-edit-popup-content-fullscreen\' : \'.dx-designer\', target: \'.dx-designer\', showTitle: false, onContentReady: function(e) { e.component && e.component.registerKeyHandler(\'tab\', function(_) { $data.active(false); }); }, showCloseButton: false, animation: {}, shading: false, visible: $data.active }"> <div data-options="dxTemplate: { name: \'content\' }"> <div class="dx-picture-editing-toolbar" data-bind="foreach: $data.actions"> <div class="dx-picture-editing-toolbar-item" data-bind="dxclick: $data.action, attr: { title: title }"> <div class="dx-picture-editing-toolbar-item-icon" data-bind="template: { name: icon, afterRender: $data.renderedHandler }"> </div> </div> <!-- ko template: { if: $data.template, name: $data.template, data: $data.templateOptions }--> <!-- /ko --> </div> </div> </div> </div>',
    'dx-painter': '<div class="dx-painter"> <canvas data-bind="zoom: scale"></canvas> </div>',
    'dx-picture-editing-toolbar-popup': '<div class="dx-picture-edit-popup-content" data-bind="dxPopover: { width: width, height: height, wrapperAttr: { class: \'dx-picture-edit-popup-content\' }, hideOnOutsideClick: $data.hideOnOutsideClick, onShown: $data.onShown, onContentReady: $data.onContentReady, position: { my: \'left top\', at: \'right top\', boundary: \'.dx-designer\', of: getPositionTarget(), collision: \'flipfit fit\', offset: \'-10 0\' }, container: getPositionTarget(), showTitle: false, target: getPositionTarget(), showCloseButton: false, shading: false, animation: {}, visible: visible }"> <!-- ko template: { name: contentTemplate, data: contentData } --> <!--/ko--> </div>',
    'dx-picture-editing-brush-options': '<div class="dx-picture-editing-brush-options"> <div class="dx-picture-editing-line-width"> <div class="dx-picture-editing-text" data-bind="text: brushWidthText"></div> <div class="dx-picture-editing-line-width-slider" data-bind="dxSlider: { min: 1, max: 9, value: $data.lineWidth, label: { visible: true }, tooltip: { enabled: true, showMode: \'always\', position: \'bottom\' } }"></div> </div> <div class="dx-picture-editing-line-color"> <div class="dx-picture-editing-text" data-bind="text: brushColorText"></div> <div class="dx-picture-editing-brush-options-colors" data-bind="foreach: $data.colors"> <div class="dx-picture-editing-brush-options-color" data-bind="css: { selected: $data.isSelected }"> <div class="dx-picture-editing-brush-options-color-cell" data-bind="style: { background: $data.value }, dxclick: $data.action"></div> </div> </div> </div> </div>',
    'dx-picture-editing-sizemode-alignment': '<div class="dx-picture-editing-sizemode-alignment"> <div class="dx-picture-editing-sizemode"> <div class="dx-picture-editing-text" data-bind="text: sizeModeText"></div> <div class="dx-picture-editing-sizemode-values" data-bind="foreach: { data: sizeModeValues }"> <div class="dx-picture-editing-sizemode-alignment-value" data-bind="css: { selected: isSelected }, template: $data.iconTemplate, dxclick: $data.action, attr: { title: $data.attrTitle }"> </div> </div> </div> <div class="dx-picture-editing-alignment"> <div class="dx-picture-editing-text" data-bind="text: alignmentText"></div> <div class="dx-picture-editing-alignment-values" data-bind="foreach: { data: alignmentValues }"> <div class="dx-picture-editing-sizemode-alignment-value" data-bind="css: { selected: isSelected }, template: $data.iconTemplate, dxclick: $data.action, , attr: { title: $data.attrTitle }"> </div> </div> </div> </div>',
    'dx-picture-editing-imagepickerwithfilter': '<div class="dx-picture-editing-filtercontent" data-bind="styleunit: { width: contentWidth }"> <div class="dx-picture-editing-filtercontent-editor" data-bind="dxTextBox: { value: filter, valueChangeEvent: \'keyup\', placeholder: searchPlaceholder(), showClearButton: true  }"></div> <div class="dx-picture-editing-filtercontent-images"> <!-- ko template: \'dx-picture-editing-imagespicker\' --> <!-- /ko --> </div> </div>',
    'dx-picture-editing-imagespicker': '<div class="dx-picture-editing-imagescontainer dxd-text-primary" data-bind="styleunit: { width: contentWidth }, dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }"> <!-- ko foreach: images --> <div class="dx-picture-editing-block dxd-state-normal dxd-back-highlighted" data-bind="styleunit: { width: $parent.width + 10 }, visible: visible, click: function() { $parent.action($data); }"> <div class="dx-picture-editing-block-image" data-bind="styleunit: { width: $parent.width, height: $parent.height }, style: { backgroundImage: \'url(\' + ($data.url || $data.data) + \')\' }"></div> <!-- ko if: $data.text--> <!-- ko if: $parent.filterEnabled --> <div class="dx-picture-editing-block-text" data-bind="searchHighlighting: { text: $data.text, textToSearch: $parent.filter }, attr: { title: $data.text }"></div> <!-- /ko --> <!-- ko ifnot: $parent.filterEnabled --> <div class="dx-picture-editing-block-text" data-bind="text: $data.text, attr: { title: $data.text }"></div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> </div>',
    'dx-selectbox': '<div data-bind="dxSelectBox: getOptions({ dataSource: values, value: value, valueExpr: \'value\', displayExpr: \'displayValue\', displayCustomValue: true, disabled: disabled, useItemTextAsTitle: true, noDataText: $root.dx._static.noDataText(), encodeNoDataText: true, dropDownOptions: { container: $root.getPopupContainer($element) }, popupPosition: { boundary: $root.getPopupContainer($element) }, inputAttr: { \'aria-label\': displayName } }), dxValidator: { validationRules: $data.validationRules || [] }"></div>'
});

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-editing.js

















// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-export.js























// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-export-metadata.js



// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/internal/_bindings.js





external_ko_["bindingHandlers"]['toView'] = {
    init: (element, valueAccessor, allBindings, viewModel, bindingContext) => {
        var $previewPage = external_jQuery_["fn"].constructor(element), $container = $previewPage.parent('.dxrd-report-preview-holder'), pageActive = valueAccessor().active, subscription = pageActive.subscribe((active) => {
            if (active) {
                var pageTop = $previewPage.position().top;
                if (pageTop < 0 && (pageTop + $previewPage.height() < 0) || pageTop >= $container.height()) {
                    $container.scrollTop($container.scrollTop() + pageTop);
                }
            }
        });
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
            subscription.dispose();
        });
    }
};
external_ko_["bindingHandlers"]['lazyImages'] = {
    init: (element, valueAccessor, allBindings, viewModel, bindingContext) => {
        var $element = external_jQuery_["fn"].constructor(element), enabled = valueAccessor().enabled, load = null, loadVisibleImages = (time = 300) => {
            load && clearTimeout(load);
            load = setTimeout(function () {
                if (!enabled()) {
                    return;
                }
                var visibleArea = $element.height() + 100;
                for (var i = 0; i < element.children.length; i++) {
                    var previewPage = element.children[i], rect = previewPage.getBoundingClientRect(), pageTop = rect.top;
                    if (visibleArea > pageTop && pageTop >= 0 || pageTop < 0 && pageTop + rect.height > -100) {
                        var previewPageModel = external_ko_["dataFor"](previewPage);
                        previewPageModel && previewPageModel.isClientVisible && previewPageModel.isClientVisible(true);
                    }
                }
            }, time);
        };
        if (external_ko_["isObservable"](valueAccessor().updateCallback)) {
            valueAccessor().updateCallback(loadVisibleImages);
        }
        var subscribtion = enabled.subscribe((newVal) => {
            newVal && loadVisibleImages(500);
        });
        var scrollLoad = () => loadVisibleImages(700);
        element.addEventListener('scroll', scrollLoad);
        loadVisibleImages(500);
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
            element.removeEventListener('scroll', scrollLoad);
            subscribtion.dispose();
        });
    }
};
external_ko_["bindingHandlers"]['textCopier'] = {
    init: (element, valueAccessor, allBindings, viewModel, bindingContext) => {
        var keyDownHandler = function (e) {
            var value = viewModel.getSelectedContent();
            if (!value || !(e.ctrlKey || e.metaKey)
                || external_jQuery_["fn"].constructor(e.target).is('input:visible,textarea:visible')
                || window.getSelection && window.getSelection() && window.getSelection().toString()
                || document['selection'] && document['selection'].createRange().text) {
                return;
            }
            var $clipboardContainer = external_jQuery_["fn"].constructor('#clipboard-container');
            $clipboardContainer.empty().show();
            external_jQuery_["fn"].constructor("<textarea id='clipboard'></textarea>").val(value)
                .appendTo($clipboardContainer)
                .focus()
                .select();
        };
        var keyUpHandler = function (e) {
            if (external_jQuery_["fn"].constructor(e.target).is('#clipboard')) {
                external_jQuery_["fn"].constructor('#clipboard-container').empty().hide();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keyup', keyUpHandler);
        });
    }
};
external_ko_["bindingHandlers"]['autoFit'] = {
    init: (element, valueAccessor) => {
        var options = valueAccessor();
        var subscriptions = [];
        var updateZoom = (newOptions) => {
            var $element = external_jQuery_["fn"].constructor(element);
            var autoFitBy = newOptions.autoFitBy();
            if (autoFitBy != ZoomAutoBy.None) {
                if (options.skipIfInvisible && $element.filter(':visible').length == 0)
                    return;
                var newZoom = Object(external_DevExpress_Analytics_Internal_["roundingXDecimals"])(updatePreviewZoomWithAutoFit(newOptions.width(), newOptions.height(), $element, autoFitBy), true);
                newOptions.zoom(Math.max(newZoom, 0.1));
            }
        };
        updateZoom(options);
        var onResize = () => {
            updateZoom(options);
        };
        window.addEventListener('resize', onResize);
        var subscribe = (value) => {
            if (value) {
                subscriptions.push(value.subscribe((newVal) => {
                    updateZoom(options);
                }));
            }
        };
        subscribe(options.rightPanelWidth);
        subscribe(options.width);
        subscribe(options.height);
        subscribe(options.autoFitBy);
        subscribe(options.brickLoading);
        subscribe(options.previewSize);
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
            window.removeEventListener('resize', onResize);
            subscriptions.forEach((subscription) => {
                subscription.dispose();
            });
        });
    }
};
external_ko_["bindingHandlers"]['childStyle'] = {
    init: function (element, valueAccessor) {
        var values = valueAccessor();
        external_jQuery_["fn"].constructor(element).find(values.selector).css(values.style);
    }
};

// EXTERNAL MODULE: external "DevExpress.registerComponent"
var external_DevExpress_registerComponent_ = __webpack_require__(13);
var external_DevExpress_registerComponent_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_registerComponent_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/search/_dxSearchEditor.js






var editor_prefix = 'dx-searcheditor', EDITOR_CLASS = editor_prefix + '', EDITOR_BUTTON_CLASS = editor_prefix + '-button dx-widget dx-dropdowneditor-button', EDITOR_BUTTON_SELECTOR = '.' + editor_prefix + '-button', EDITOR_BUTTON_ICON_CLASS = editor_prefix + '-icon dx-dropdowneditor-icon dx-icon-dxrd-image-move', EDITOR_BUTTON_ICON_UP_TEMPLATE = 'dxrd-svg-operations-moveup', EDITOR_BUTTON_ICON_DOWN_TEMPLATE = 'dxrd-svg-operations-movedown';
class _dxSearchEditor_dxSearchEditor extends external_DevExpress_ui_dxTextBox_default.a {
    constructor(element, options) {
        super(element, options);
        this.option('onKeyDown', function (e) {
            if (e.event.key === external_DevExpress_Analytics_Internal_["KeyboardEnum"].Enter) {
                e.event.stopPropagation();
                e.event.preventDefault();
                e.component['findNext'](e.event.shiftKey);
            }
        });
        this.option('onFocusOut', function (e) {
            e.component['_searchModel'].searchText(e.component.option('text'));
        });
        this._activeStateUnit = EDITOR_BUTTON_SELECTOR;
        this._focusRequestRaised = () => { this.focus(); };
        this._searchModel = options.searchModel;
        this._searchModel.focusRequested.subscribe((val) => this._focusRequestRaised());
    }
    findNext(searchUp) {
        if (this._searchModel.searchText() !== this.option('text')) {
            this._searchModel.searchText(this.option('text'));
        }
        else {
            try {
                if (searchUp) {
                    (!this._searchModel.loading()) && this._searchModel.findUp();
                }
                else {
                    (!this._searchModel.loading()) && this._searchModel.findDown();
                }
            }
            finally {
                return true;
            }
        }
    }
    _init() {
        super['_init'].apply(this);
        var $element = external_jQuery_["fn"].constructor(this.element());
        $element.addClass(EDITOR_CLASS);
        this._koContext = external_ko_["contextFor"]($element.get(0));
    }
    _render() {
        super['_render'].apply(this);
        this._$buttons = [];
        this.on('keyDown', (e) => {
            if (e.event.key == 'ArrowUp')
                this.findNext(true) && e.event.stopPropagation();
            if (e.event.key == 'ArrowDown')
                this.findNext(false) && e.event.stopPropagation();
        });
        this._renderButton('Up');
        this._renderButton('Down');
    }
    _renderButton(direction) {
        this._$button = external_jQuery_["fn"].constructor('<div />').addClass(EDITOR_BUTTON_CLASS);
        this._attachButtonEvents(direction);
        this._$buttonIcon = external_jQuery_["fn"].constructor('<div />').addClass(EDITOR_BUTTON_ICON_CLASS + direction.toLowerCase())
            .append(external_DevExpress_Analytics_Widgets_Internal_["SvgTemplatesEngine"].templates[direction.toLowerCase() === 'up' ? EDITOR_BUTTON_ICON_UP_TEMPLATE : EDITOR_BUTTON_ICON_DOWN_TEMPLATE])
            .appendTo(this._$button);
        external_ko_["applyBindingsToDescendants"](this._koContext, this._$buttonIcon[0]);
        var buttonsContainer = this['_buttonsContainer']();
        this._$button.appendTo(buttonsContainer);
        this._$buttons.push(this._$button);
    }
    _attachButtonEvents(direction) {
        this._$button.off('click');
        var onClick = (e) => {
            this.findNext(direction.toLowerCase() === 'up') && e.stopPropagation();
        };
        if (!this.option('disabled')) {
            this._$button.on('click', onClick);
            Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(this._$button[0], () => {
                this._$buttons.forEach($button => {
                    $button.off('click');
                });
            });
        }
    }
}
external_DevExpress_registerComponent_default()('dxSearchEditor', _dxSearchEditor_dxSearchEditor);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-internal.js













































// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-mobile.js



// EXTERNAL MODULE: external "DevExpress.ui.dxGallery"
var external_DevExpress_ui_dxGallery_ = __webpack_require__(8);
var external_DevExpress_ui_dxGallery_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_ui_dxGallery_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_eventProcessor.js





var slowdownDisctanceFactor = 2.5;
var minScale = 0.92;
function setTransform($element, transform) {
    $element.css({
        '-webkit-transform': transform,
        'transform': transform
    });
}
class _eventProcessor_EventProcessor {
    constructor(element, slideOptions) {
        this.element = element;
        this.slideOptions = slideOptions;
        this._direction = {
            vertical: false,
            horizontal: false,
            scrollDown: false
        };
        this.isLeftMove = false;
        this.isRightMove = false;
        this.$window = external_jQuery_["fn"].constructor(window);
        this.$element = external_jQuery_["fn"].constructor(element),
            this.$body = external_jQuery_["fn"].constructor(document.body),
            this.$gallery = this.$element.find('.dxrd-mobile-gallery');
        this.$galleryblocks = this.$gallery.find('.dxrd-gallery-blocks');
        this.firstMobilePageOffset = this._getFirstPageOffset();
        this.slideOptions.searchPanel.height.subscribe((newVal) => {
            if (slideOptions.disabled())
                return;
            if (!this.firstMobilePageOffset)
                this.firstMobilePageOffset = this._getFirstPageOffset();
            if (this.slideOptions.readerMode) {
                this.slideOptions.topOffset(newVal);
            }
            else {
                this.slideOptions.topOffset(Math.min(newVal, Math.max(0, _mobileSearch_MobileSearchViewModel.maxHeight - this.firstMobilePageOffset.top)));
            }
            if (!newVal) {
                this.applySearchAnimation(newVal);
            }
            else if (newVal === _mobileSearch_MobileSearchViewModel.maxHeight) {
                this.slideOptions.searchPanel.searchPanelVisible(true);
                this.applySearchAnimation(newVal);
            }
            else {
                var dif = 1 - minScale;
                var perc = newVal / _mobileSearch_MobileSearchViewModel.maxHeight;
                var scale = 1 - dif * perc;
                setTransform(this.$galleryblocks, 'scale(' + Math.max(minScale, scale) + ')');
            }
        });
    }
    _getFirstPageOffset() {
        return this.$galleryblocks.find('.dxrd-mobile-page').eq(0).offset();
    }
    getDirection(x, y) {
        var differenceY = y - this._startingPositionY;
        var distanceY = Math.abs(differenceY);
        var distanceX = Math.abs(x - this._startingPositionX);
        if (distanceY === 0 && distanceX === 0) {
            this._direction.horizontal = false;
            this._direction.vertical = false;
            return this._direction;
        }
        var tg = !distanceX ? 10 : distanceY / distanceX;
        if (tg < 2) {
            this._direction.horizontal = true;
            this._direction.vertical = false;
            this._direction.scrollDown = false;
        }
        else {
            this._direction.horizontal = false;
            this._direction.vertical = true;
            this._direction.scrollDown = differenceY > 0;
        }
        return this._direction;
    }
    setPosition(x, y) {
        this.isLeftMove = this.latestX > x;
        this.isRightMove = this.latestX < x;
        this.latestY = y;
        this.latestX = x;
    }
    initialize(x, y) {
        this._startingPositionX = x;
        this._startingPositionY = y;
        this.latestX = x;
        this.latestY = y;
        this._direction = { horizontal: false, vertical: false, scrollDown: false };
    }
    start(e) {
        this.$body.addClass('dxrd-prevent-refresh');
        this.$galleryblocks = this.$gallery.find('.dxrd-gallery-blocks');
        if (!this.slideOptions.topOffset()) {
            this.firstMobilePageOffset = this._getFirstPageOffset();
            if (this.firstMobilePageOffset) {
                this.firstMobilePageOffset.top = this.firstMobilePageOffset.top * minScale;
            }
        }
        this.initialize(e.pageX, e.pageY);
    }
    move(e) {
        if (this.slideOptions.zoomUpdating() || this.slideOptions.galleryIsAnimated() || this.slideOptions.disabled()) {
            return;
        }
        if (SearchAvailable() && !this.slideOptions.searchPanel.editorVisible()) {
            var direction = this.getDirection(e.pageX, e.pageY);
            if (!direction.vertical && !direction.horizontal)
                return;
            if (direction.vertical && direction.scrollDown || this.slideOptions.searchPanel.height() !== 0) {
                if (this.slideOptions.reachedTop() && (_mobileSearch_MobileSearchViewModel.maxHeight + this.$element.offset().top) > this.$window.scrollTop()) {
                    this.slideOptions.brickEventsDisabled(true);
                    e.stopPropagation();
                    var currentHeight = this.slideOptions.searchPanel.height();
                    var difference = currentHeight + (e.clientY - this.latestY) / slowdownDisctanceFactor;
                    var distance = difference > 0 ? Math.min(difference, _mobileSearch_MobileSearchViewModel.maxHeight) : 0;
                    this.slideOptions.searchPanel.height(distance);
                }
            }
        }
        this.setPosition(e.clientX, e.clientY);
    }
    end(e) {
        if (this.slideOptions.zoomUpdating() || this.slideOptions.galleryIsAnimated()) {
            var touches = e['touches'];
            if (!touches || touches.length === 0) {
                if (this.slideOptions.zoomUpdating()) {
                    e.stopPropagation();
                }
                this.slideOptions.zoomUpdating(false);
            }
            return;
        }
        var direction = this.getDirection(e.pageX, e.pageY);
        if (this.slideOptions.scrollAvailable()) {
            if (direction.horizontal && this.slideOptions.swipeEnabled()) {
                var galleryInstance = external_DevExpress_ui_dxGallery_default.a.getInstance(this.$gallery.get(0));
                var repaintTimeout = this.slideOptions.repaintTimeout;
                if (this.slideOptions.reachedLeft() && this.isRightMove && galleryInstance.gallery.swipeLeftEnable()) {
                    galleryInstance.prevItem();
                    clearTimeout(repaintTimeout());
                    repaintTimeout(setTimeout(() => galleryInstance.repaint(), 410));
                }
                else if (this.slideOptions.reachedRight() && this.isLeftMove && galleryInstance.gallery.swipeRightEnable()) {
                    galleryInstance.nextItem();
                    clearTimeout(repaintTimeout());
                    repaintTimeout(setTimeout(() => galleryInstance.repaint(), 410));
                }
            }
        }
        if (SearchAvailable() && !this.slideOptions.searchPanel.editorVisible()) {
            if (this.slideOptions.searchPanel.height() >= _mobileSearch_MobileSearchViewModel.maxHeight / 2) {
                this.slideOptions.searchPanel.height(_mobileSearch_MobileSearchViewModel.maxHeight);
            }
            else {
                this.slideOptions.searchPanel.height(0);
            }
            if (this.slideOptions.searchPanel.height() == _mobileSearch_MobileSearchViewModel.maxHeight) {
                this.slideOptions.autoFitBy(ZoomAutoBy.PageWidth);
            }
        }
        this.$body.removeClass('dxrd-prevent-refresh');
        setTimeout(() => { this.slideOptions.brickEventsDisabled(false); }, 10);
    }
    applySearchAnimation(value) {
        if (this.slideOptions.animationSettings.zoomEnabled()) {
            this.$galleryblocks.addClass('dxrdp-animation');
            this.$element.addClass('dxrdp-animation');
            setTimeout(() => {
                this.$galleryblocks.removeClass('dxrdp-animation');
                this.$element.removeClass('dxrdp-animation');
            }, 410);
        }
        setTransform(this.$galleryblocks, !value ? '' : 'scale(0.92)');
    }
}

// EXTERNAL MODULE: external "DevExpress.events"
var external_DevExpress_events_ = __webpack_require__(6);

// EXTERNAL MODULE: external "\"\""
var external_ = __webpack_require__(15);

// EXTERNAL MODULE: external "DevExpress.ui.dxScrollView"
var external_DevExpress_ui_dxScrollView_ = __webpack_require__(20);
var external_DevExpress_ui_dxScrollView_default = /*#__PURE__*/__webpack_require__.n(external_DevExpress_ui_dxScrollView_);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/_mobileBindings.js






external_ko_["bindingHandlers"]['mobileZoom'] = {
    init: function (element, valueAccessor) {
        var options = valueAccessor();
        var scroll;
        var zoom = options.zoom();
        Object(external_DevExpress_events_["on"])(element, 'dxpinch', (e) => {
            e.stopPropagation();
            e.preventDefault();
            var scale = e['scale'];
            var newZoom = zoom;
            newZoom *= scale;
            newZoom = Math.max(0.15, Math.min(2, newZoom));
            options.zoom(newZoom);
        });
        Object(external_DevExpress_events_["on"])(element, 'dxpinchstart', (e) => {
            scroll = external_DevExpress_ui_dxScrollView_default.a.getInstance(element.getElementsByClassName('dxrd-scrollView-mobile')[0]);
            e.stopPropagation();
            e.preventDefault();
            options.zoomUpdating(true);
            scroll && scroll.option('disabled', true);
            zoom = options.zoom.peek();
        });
        Object(external_DevExpress_events_["on"])(element, 'dxpinchend', (e) => {
            e.stopPropagation();
            options.zoomUpdating(false);
            setTimeout(() => {
                scroll && scroll.option('disabled', false);
                scroll && scroll.refresh();
            }, 10);
        });
    }
};
external_ko_["bindingHandlers"]['slide'] = {
    init: function (element, valueAccessor) {
        var slideOptionsValue = valueAccessor();
        var isStarted = false;
        var processor = new _eventProcessor_EventProcessor(element, slideOptionsValue);
        Object(external_DevExpress_events_["on"])(element, 'dxpointerdown', (e) => {
            processor.start(e);
            isStarted = true;
        });
        Object(external_DevExpress_events_["on"])(element, 'dxpointermove', (e) => {
            isStarted && processor.move(e);
        });
        ['dxpointercancel', 'dxpointerleave', 'dxpointerup'].forEach((value) => {
            Object(external_DevExpress_events_["on"])(element, value, (e) => {
                if (isStarted) {
                    processor.end(e);
                    isStarted = false;
                }
            });
        });
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/mobile/internal/gallery/_galleryComponent.js





class _galleryComponent_dxGalleryReportPreview extends external_DevExpress_ui_dxGallery_default.a {
    constructor(element, options) {
        super(element, options);
        this._animationClassName = 'dxrdp-gallery-item-animation';
        this.currentBlockItem = null;
        this.nextBlockItem = null;
        this.initializeBlockItems = () => {
            this.blockItems = [];
            var $items = this['_getAvailableItems']();
            for (var i = 0; i < $items.length; i++) {
                var left = parseFloat($items[i]['style'].left);
                left = isNaN(left) ? 0 : left;
                this.blockItems.push({
                    element: external_jQuery_["fn"].constructor($items[i]),
                    left: left
                });
            }
        };
        this.initializeBlockItems();
        this.gallery = this['option']('gallery');
        var subscription = this.gallery.repaint.subscribe((newVal) => {
            if (!this.gallery.preview._hasActiveEditingFields()) {
                this.repaint();
            }
        });
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, () => {
            subscription.dispose();
        });
    }
    repaint() {
        super.repaint.apply(this);
        this.initializeBlockItems();
    }
    _swipeStartHandler(e) {
        super['_swipeStartHandler'].apply(this, [e]);
        var swipeRightEnable = this.gallery.swipeRightEnable();
        var swipeLeftEnable = this.gallery.swipeLeftEnable();
        if (!swipeRightEnable || !swipeLeftEnable) {
            var selectedIndex = swipeRightEnable ? 0 : 2;
            var startOffset = 3 - selectedIndex - 1, endOffset = selectedIndex;
            if (!swipeRightEnable && !swipeLeftEnable) {
                startOffset = 0;
                endOffset = 0;
            }
            e.event.maxLeftOffset = startOffset;
            e.event.maxRightOffset = endOffset;
        }
        this.gallery.isAnimated(true);
        if (this.gallery.animationEnabled()) {
            this.currentBlockItem && this.currentBlockItem.element.removeClass(this._animationClassName);
            this.nextBlockItem && this.nextBlockItem.element.removeClass(this._animationClassName);
        }
    }
    _getNextIndex(offset) {
        var index = this.gallery.selectedIndex();
        if (offset < 0) {
            if (index === 2) {
                index = 0;
            }
            else {
                index++;
            }
        }
        else {
            if (index === 0) {
                index = 2;
            }
            else {
                index--;
            }
        }
        return index;
    }
    _setSwipeAnimation(element, difference, offset, right) {
        var diffperc = 100 * offset / 4;
        var newLeft = '0%';
        if (right) {
            newLeft = (element.left + diffperc) + '%';
        }
        else {
            newLeft = (element.left - diffperc) + '%';
        }
        element.element.css({
            'opacity': difference,
            'transform': 'scale(' + difference + ')',
            'left': newLeft
        });
    }
    _addAnimation(item) {
        if (item) {
            if (this.gallery.animationEnabled()) {
                item.element.addClass(this._animationClassName);
            }
        }
    }
    _restoreDefault(item) {
        if (item) {
            item.element.css({
                'opacity': 1,
                'transform': 'scale(' + 1 + ')',
                'left': item.left + '%'
            });
        }
    }
    _getItem(index, loopTest) {
        var realIndex = index;
        var currentBlockIndex = this.blockItems.indexOf(this.currentBlockItem);
        if (loopTest) {
            if (currentBlockIndex === 2 && index === 0) {
                realIndex = 3;
            }
            else if (currentBlockIndex === 0 && index === 2) {
                realIndex = 4;
            }
        }
        var item = this.blockItems[realIndex];
        if (this.gallery.animationEnabled()) {
            item.element.removeClass(this._animationClassName);
        }
        return item;
    }
    _swipeUpdateHandler(e) {
        super['_swipeUpdateHandler'].apply(this, [e]);
        var offset = e.event.offset;
        var nextIndex = this._getNextIndex(offset);
        var currentIndex = this.gallery.selectedIndex();
        var currentBlockIndex = this.blockItems.indexOf(this.currentBlockItem);
        var nextBlockIndex = this.blockItems.indexOf(this.nextBlockItem);
        if (!this.currentBlockItem || currentBlockIndex !== currentIndex) {
            this.currentBlockItem = this._getItem(currentIndex, false);
        }
        if (!this.nextBlockItem || nextBlockIndex !== nextIndex) {
            this.nextBlockItem = this._getItem(nextIndex, true);
        }
        if (this.gallery.animationEnabled()) {
            offset = Math.abs(offset);
            var right = (nextIndex - currentIndex === 1) || (currentIndex === 2 && nextIndex === 0);
            this._setSwipeAnimation(this.currentBlockItem, Math.min(1, (1 - offset)), offset, right);
            this._setSwipeAnimation(this.nextBlockItem, Math.min(1, offset * 1.5), offset, !right);
        }
    }
    _swipeEndHandler(e) {
        super['_swipeEndHandler'].apply(this, [e]);
        if (this.gallery.animationEnabled()) {
            for (var i = 0; i < this.blockItems.length; i++) {
                if (this.blockItems[i] === this.currentBlockItem || this.blockItems[i] === this.nextBlockItem) {
                    this._addAnimation(this.blockItems[i]);
                }
                this._restoreDefault(this.blockItems[i]);
            }
        }
        else {
            this.gallery.isAnimated(false);
            this.gallery.updatePagesVisible(this.gallery.preview);
        }
    }
    _endSwipe() {
        super['_endSwipe'].apply(this, arguments);
        this.gallery.isAnimated(false);
        this.gallery.updatePagesVisible(this.gallery.preview);
    }
}
external_DevExpress_registerComponent_default()('dxGalleryReportPreview', _galleryComponent_dxGalleryReportPreview);

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-mobile-internal.js





























// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-parameters.js













// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-settings.js



// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/utils/initializer.js


// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/utils/utils.js


// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-utils.js





// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/dateRange/dateRangeEditor.js








class CSDateTime {
    constructor(_date = null) {
        this._date = _date;
    }
    static get today() {
        return new CSDateTime().now();
    }
    get date() {
        return this._date;
    }
    get day() {
        return this._date.getDay();
    }
    get month() {
        return this._date.getMonth();
    }
    get year() {
        return this._date.getFullYear();
    }
    addMonths(months) {
        return new CSDateTime(new Date(this._date.setMonth(CSDateTime.today.month + months)));
    }
    addDays(days) {
        var newDate = this.date.getDate() + days;
        return new CSDateTime(new Date(this._date.setDate(newDate)));
    }
    addHours(hours) {
        var newDate = this.date.getHours() + hours;
        return new CSDateTime(new Date(this._date.setHours(newDate)));
    }
    addYears(years) {
        return new CSDateTime(new Date(this._date.setFullYear(this._date.getFullYear() + years)));
    }
    now() {
        return new CSDateTime(new Date(new Date().setHours(0, 0, 0, 0)));
    }
}
function createRangeItem(displayName, localizationId, range) {
    var item = {
        displayName: Object(external_DevExpress_Analytics_Utils_["getLocalization"])(displayName, localizationId),
        range: range
    };
    Object.defineProperty(item, 'displayName', {
        get: () => Object(external_DevExpress_Analytics_Utils_["getLocalization"])(displayName, localizationId),
        configurable: true
    });
    return item;
}
var predefinedDateRanges = [
    createRangeItem('Today', 'PreviewStringId.DateRangeParameterEditor_Today', () => [
        CSDateTime.today.date,
        CSDateTime.today.date
    ]),
    createRangeItem('Yesterday', 'PreviewStringId.DateRangeParameterEditor_Yesterday', () => [
        CSDateTime.today.addDays(-1).date,
        CSDateTime.today.addDays(-1).date
    ]),
    createRangeItem('Current Week', 'PreviewStringId.DateRangeParameterEditor_CurrentWeek', () => [
        CSDateTime.today.addDays(-CSDateTime.today.day).date,
        CSDateTime.today.addDays(-CSDateTime.today.day).addDays(6).date
    ]),
    createRangeItem('Last Week', 'PreviewStringId.DateRangeParameterEditor_LastWeek', () => [
        CSDateTime.today.addDays(-7).date,
        CSDateTime.today.date
    ]),
    createRangeItem('Previous Week', 'PreviewStringId.DateRangeParameterEditor_PreviousWeek', () => [
        CSDateTime.today.addDays(-CSDateTime.today.day - 7).date,
        CSDateTime.today.addDays(-CSDateTime.today.day - 1).date
    ]),
    createRangeItem('Current Month', 'PreviewStringId.DateRangeParameterEditor_CurrentMonth', () => [
        new Date(CSDateTime.today.year, CSDateTime.today.month, 1),
        new Date(CSDateTime.today.year, CSDateTime.today.month + 1, 0),
    ]),
    createRangeItem('Last Month', 'PreviewStringId.DateRangeParameterEditor_LastMonth', () => [
        CSDateTime.today.addMonths(-1).date,
        CSDateTime.today.date
    ]),
    createRangeItem('Previous Month', 'PreviewStringId.DateRangeParameterEditor_PreviousMonth', () => [
        new Date(CSDateTime.today.year, CSDateTime.today.month - 1, 1),
        new Date(CSDateTime.today.year, CSDateTime.today.month, 0),
    ]),
    createRangeItem('Current Quarter', 'PreviewStringId.DateRangeParameterEditor_CurrentQuarter', () => [
        CSDateTime.today.addMonths(-CSDateTime.today.month % 3).date,
        CSDateTime.today.addMonths(-CSDateTime.today.month % 3 + 3).date,
    ]),
    createRangeItem('Previous Quarter', 'PreviewStringId.DateRangeParameterEditor_PreviousQuarter', () => [
        CSDateTime.today.addMonths(-CSDateTime.today.month % 3 - 3).date,
        CSDateTime.today.addMonths(-CSDateTime.today.month % 3).date,
    ]),
    createRangeItem('Current Year', 'PreviewStringId.DateRangeParameterEditor_CurrentYear', () => [
        new Date(CSDateTime.today.year, 0, 1),
        new Date(CSDateTime.today.year, 11, 31),
    ]),
    createRangeItem('Last Year', 'PreviewStringId.DateRangeParameterEditor_LastYear', () => [
        CSDateTime.today.addYears(-1).date,
        CSDateTime.today.date
    ]),
    createRangeItem('Previous Year', 'PreviewStringId.DateRangeParameterEditor_PreviousYear', () => [
        new Date(CSDateTime.today.year - 1, 0, 1),
        new Date(CSDateTime.today.year - 1, 11, 31),
    ])
];
class dateRangeEditor_DateRangeEditor extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(_options) {
        super();
        this._options = _options;
        this._locker = new Locker();
        this._popupVisible = external_ko_["observable"](false);
        this._showPopup = () => {
            this._popupVisible(true);
        };
        this._hidePopup = () => {
            this._popupVisible(false);
            this._$element.get(0).querySelector('input').focus();
        };
        this._accessibilityDialogItems = external_ko_["observableArray"]([]);
        this.popupTemplate = 'dxrv-daterange-editor-popup';
        this.items = [];
        this.startDate = external_ko_["observable"](new Date(new Date().setHours(0, 0, 0, 0)));
        this.endDate = external_ko_["observable"](new Date(new Date().setHours(0, 0, 0, 0)));
        this._disposables.push(_options.value.subscribe((newVal) => this.applyDate(newVal)), this._displayText = external_ko_["computed"](() => this._getStringValue([this.startDate(), this.endDate()])), this.startDate.subscribe(() => this.applyValue(this.startDate() > this.endDate())), this.endDate.subscribe(() => this.applyValue()));
        this.applyDate(this._options.value());
        this.items = predefinedDateRanges;
        if (_options.isMobile) {
            this.popupTemplate = 'dxrd-menu-parameters-content';
            this.popupModel = new _parametersPopup_DateRangeParemeterPopupModel(this);
        }
        else {
            this.popupModel = this;
        }
        this.dialogKeyboardHelper = new _dateRangeKeyboardHelper_DateRangeDialogElementsKeyboardHelper(this._hidePopup, this._popupVisible);
        this._disposables.push(this.dialogKeyboardHelper);
    }
    _getStringValue(range) {
        return range.map(x => Object(external_DevExpress_Analytics_Internal_["formatDate"])(x)).join(' - ');
    }
    _isSelected(item) {
        return this._displayText() === this._getStringValue(item.range());
    }
    _toParameterValue() {
        return [this.startDate(), this.endDate()];
    }
    _createTemplateData(value, min) {
        return {
            value,
            min,
            inRange: (date) => this.inRange(date)
        };
    }
    applyDate(range, force = false) {
        this._locker.lock(() => {
            if (range[1] < this.startDate()) {
                this.startDate(range[0]);
                this.endDate(range[1]);
            }
            else {
                this.endDate(range[1]);
                this.startDate(range[0]);
            }
        });
        if (force)
            this.applyValue();
    }
    inRange(date) {
        var _end = new Date(this.endDate().getTime());
        var _start = new Date(this.startDate().getTime());
        return date <= new Date(_end.setHours(0, 0, 0, 0)) &&
            date >= new Date(_start.setHours(0, 0, 0, 0));
    }
    applyValue(updateEndDate = false) {
        this._locker.lock(() => {
            updateEndDate && this.endDate(this.startDate());
            this._options.value(this._toParameterValue());
        });
    }
}
external_ko_["bindingHandlers"]['dxrvDateRangeEditor'] = {
    init: (element, valueAccessor, bindings, model, bindingContext) => {
        var rangeEditor = new dateRangeEditor_DateRangeEditor(valueAccessor());
        external_jQuery_["fn"].constructor(element).children().remove();
        var templateHtml = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dxrv-daterange-editor'), $element = external_jQuery_["fn"].constructor(element).append(templateHtml);
        var context = bindingContext.createChildContext(rangeEditor);
        external_ko_["applyBindingsToDescendants"](context, $element.children()[0]);
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, () => rangeEditor.dispose());
        return { controlsDescendantBindings: true };
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-widgets.js







// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/_multiValueEditor.js


class _multiValueEditor_MultiValueEditorOptions extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(value, items) {
        super();
        this.selectedItems = external_ko_["observable"]([]);
        var values = value();
        this.value = value;
        var valueHasMutated = () => {
            this.editorValue.notifySubscribers(this.displayItems[0]);
        };
        this._items = items.map((item) => {
            var selected = external_ko_["observable"](this._isValueSelected(item.value, values));
            return { selected: selected, value: item.value, displayValue: item.displayValue || item.value, toggleSelected: () => { selected(!selected()); valueHasMutated(); } };
        });
        this._disposables.push(this.selectedItems = external_ko_["pureComputed"](() => {
            return this._items.filter((item) => { return item.selected(); });
        }));
        var selectionInProcess = external_ko_["observable"](false), isSelectedAllState, stringValue;
        this._disposables.push(this.selectedValuesString = external_ko_["pureComputed"]({
            read: () => {
                if (selectionInProcess())
                    return stringValue;
                stringValue = '';
                this.selectedItems().forEach((item, index, array) => {
                    stringValue += item.displayValue;
                    if (index < array.length - 1) {
                        stringValue += ', ';
                    }
                });
                return stringValue;
            },
            write: (newValue) => { }
        }));
        this._disposables.push(this.isSelectedAll = external_ko_["pureComputed"]({
            read: () => {
                if (selectionInProcess())
                    return isSelectedAllState;
                var selectedItemCount = this.selectedItems().length;
                if (selectedItemCount > 0 && selectedItemCount < this._items.length) {
                    return undefined;
                }
                isSelectedAllState = selectedItemCount === this._items.length;
                return isSelectedAllState;
            },
            write: (newValue) => {
                isSelectedAllState = newValue;
                try {
                    selectionInProcess(true);
                    this._items.forEach((item) => { item.selected(newValue); });
                }
                finally {
                    selectionInProcess(false);
                }
            }
        }));
        var selectAllItem = { selected: this.isSelectedAll, value: null, displayValue: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('(Select All)', 'AnalyticsCoreStringId.SelectAll'), toggleSelected: () => { this.isSelectedAll(!this.isSelectedAll()); valueHasMutated(); } };
        this.displayItems = [selectAllItem].concat(this._items);
        this.dataSource = this.displayItems;
        this.editorValue = external_ko_["observable"](selectAllItem);
        this.updateValue = () => {
            value(this._items.filter((item) => { return item.selected(); }).map((item) => { return item.value; }));
            valueHasMutated();
        };
        this.onOptionChanged = (e) => {
            if (e.name !== 'opened' || e.value)
                return;
            this.updateValue();
        };
    }
    _isValueSelected(value, array) {
        if (value instanceof Date) {
            return array.filter((item) => { return item - value === 0; }).length > 0;
        }
        return array.indexOf(value) !== -1;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/pictureEditor/_imagePainter.js



class _imagePainter_ImagePainter {
    constructor(options) {
        this.format = external_ko_["observable"]();
        this.image = options.imageSource;
        this.sizeMode = options.sizeMode;
        this.alignment = options.alignment;
    }
    _drawImage(imageSource, context, scale, contentSize) {
        var deferred = external_jQuery_["Deferred"]();
        if (!imageSource)
            return deferred.resolve().promise();
        var background = new Image();
        var prefix = 'data:image/' + (this.format() || 'png') + ';base64,';
        if (this.format() === 'svg') {
            prefix = 'data:image/svg+xml;charset=UTF-8;base64,';
        }
        var imageBase64 = imageSource.indexOf('base64,') !== -1 ? imageSource : prefix + imageSource;
        background.src = imageBase64;
        background.onload = () => {
            var size = this._getImageSize(background, scale, contentSize);
            var location = this._getImageCoordinate(size, contentSize);
            context.drawImage(background, location.x, location.y, size.width, size.height);
            deferred.resolve();
        };
        return deferred.promise();
    }
    _getImageSize(image, scale, contentSize) {
        var sizeMode = this.sizeMode();
        var width = image.width * scale, height = image.height * scale;
        if (sizeMode === ImageSizeMode.StretchImage) {
            width = contentSize.width;
            height = contentSize.height;
        }
        else if (sizeMode === ImageSizeMode.Cover || sizeMode === ImageSizeMode.ZoomImage || (sizeMode === ImageSizeMode.Squeeze && (contentSize.width < width || contentSize.height < height))) {
            var ratio = (sizeMode === ImageSizeMode.Cover ? Math.max : Math.min)(contentSize.width / width, contentSize.height / height);
            width *= ratio;
            height *= ratio;
        }
        return { width: width, height: height };
    }
    _getImageCoordinate(imageSize, contentSize) {
        var alignment = this.alignment();
        var x = 0, y = 0;
        if (!(alignment in ImageAlignment) && (this.sizeMode() === ImageSizeMode.Cover || this.sizeMode() === ImageSizeMode.ZoomImage || this.sizeMode() === ImageSizeMode.Squeeze)) {
            alignment = ImageAlignment.MiddleCenter;
        }
        if (alignment === ImageAlignment.MiddleLeft || alignment === ImageAlignment.MiddleCenter || alignment === ImageAlignment.MiddleRight) {
            y = (contentSize.height - imageSize.height) / 2;
        }
        else if (alignment === ImageAlignment.BottomLeft || alignment === ImageAlignment.BottomCenter || alignment === ImageAlignment.BottomRight) {
            y = contentSize.height - imageSize.height;
        }
        if (alignment === ImageAlignment.TopCenter || alignment === ImageAlignment.MiddleCenter || alignment === ImageAlignment.BottomCenter) {
            x = (contentSize.width - imageSize.width) / 2;
        }
        else if (alignment === ImageAlignment.TopRight || alignment === ImageAlignment.MiddleRight || alignment === ImageAlignment.BottomRight) {
            x = contentSize.width - imageSize.width;
        }
        return { x: x, y: y };
    }
    refresh(context, scale = 1, contentSize) {
        contentSize = contentSize || {
            width: context.canvas.width,
            height: context.canvas.height
        };
        return this._drawImage(this.image(), context, scale, contentSize);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/pictureEditor/_signaturePainter.js


class _signaturePainter_SignaturePainter extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor() {
        super();
        this._points = external_ko_["observableArray"]([]);
        this.hasPoints = external_ko_["computed"](() => { return this._points().length > 0; });
        this._disposables.push(this.hasPoints);
    }
    dispose() {
        super.dispose();
        this.reset();
    }
    _drawPath(context, x, y, lastX, lastY, color, lineWidth) {
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.lineJoin = 'round';
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.closePath();
        context.stroke();
    }
    _drawCircle(context, x, y, color, lineWidth) {
        context.beginPath();
        context.fillStyle = color;
        context.arc(x, y, lineWidth / 2, 0, 2 * Math.PI, false);
        context.fill();
    }
    _drawAllPoints(context) {
        this._points().forEach((point) => {
            if (point.isStart) {
                this._drawCircle(context, point.x, point.y, point.color, point.width);
            }
            else {
                this._drawPath(context, point.x, point.y, point.lastX, point.lastY, point.color, point.width);
            }
        });
    }
    drawCircle(context, x, y, color, width) {
        this._lastX = x;
        this._lastY = y;
        this._drawCircle(context, x, y, color, width);
        this._points.push({ x: this._lastX, y: this._lastY, color: color, width: width, isStart: true });
    }
    drawPath(context, x, y, color, width) {
        this._drawPath(context, x, y, this._lastX, this._lastY, color, width);
        this._points.push({ x: x, y: y, lastX: this._lastX, lastY: this._lastY, color: color, width: width });
        this._lastX = x;
        this._lastY = y;
    }
    resetLastPosition() {
        this._lastX = undefined;
        this._lastY = undefined;
    }
    resetPoints() {
        this._points([]);
    }
    reset() {
        this.resetLastPosition();
        this.resetPoints();
    }
    refresh(context) {
        this._drawAllPoints(context);
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/pictureEditor/_painter.js










class _painter_Painter extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(options) {
        super();
        this._pointerDownHandler = (e) => {
            var point = this._getContextPoint(e);
            point && this.signaturePainter.drawCircle(this._context, point.x, point.y, this.lineColor(), this.lineWidth());
        };
        this._pointerMoveHandler = (e) => {
            if (e.pointerType === 'touch' || e.pointerType === 'pen' || (e.pointerType === 'mouse' && e.originalEvent['buttons'] == 1)) {
                var point = this._getContextPoint(e);
                point && this.signaturePainter.drawPath(this._context, point.x, point.y, this.lineColor(), this.lineWidth());
            }
        };
        this._pointerLeaveHandler = (e) => {
            this.signaturePainter.resetLastPosition();
        };
        this.format = (newVal) => {
            if (newVal)
                this.imagePainter.format(newVal);
            return this.imagePainter.format();
        };
        this.imageSizeMode = external_ko_["observable"](ImageSizeMode.Normal);
        this.imageAlignment = external_ko_["observable"](ImageAlignment.TopLeft);
        this.lineWidth = external_ko_["observable"](1);
        this.lineColor = external_ko_["observable"]('#000000');
        this.zoom = options.zoom;
        this.image = external_ko_["observable"](options.imageSource);
        this.imageSizeMode(options.sizeMode);
        this.imageAlignment(options.alignment);
        this.imagePainter = new _imagePainter_ImagePainter({
            alignment: this.imageAlignment,
            imageSource: this.image,
            sizeMode: this.imageSizeMode
        });
        this.format(options.imageType);
        this._disposables.push(this.signaturePainter = new _signaturePainter_SignaturePainter());
        this._disposables.push(this.signaturePainter.hasPoints.subscribe((newVal) => {
            if (newVal)
                this._setCanvasSize(this.initialSize.width, this.initialSize.height);
            else
                this._setCanvasSize(this.initialSize.width * this.zoom(), this.initialSize.height * this.zoom());
            this.refresh();
        }));
        this._disposables.push(this.scale = external_ko_["computed"](() => {
            return this.hasSignature() ? this.zoom() : 1;
        }));
        if (options.canDraw) {
            this._disposables.push((options.canDraw).subscribe((newValue) => {
                if (newValue) {
                    this._addEvents();
                }
                else {
                    this._removeEvents();
                }
            }));
        }
        this._disposables.push(this.zoom.subscribe((newVal) => {
            if (!this.signaturePainter.hasPoints()) {
                this._setCanvasSize(this.initialSize.width * newVal, this.initialSize.height * newVal);
                this.refresh();
            }
        }));
    }
    _getContextPoint(e) {
        if (e.target.nodeName !== 'CANVAS')
            return;
        var zoom = this.zoom();
        var x, y;
        if (e.offsetX && e.offsetY) {
            zoom = this.hasSignature() ? 1 : zoom;
            x = e.offsetX / zoom;
            y = e.offsetY / zoom;
        }
        else {
            var rect = this._context.canvas.getBoundingClientRect();
            x = (e.clientX - rect.left) / zoom;
            y = (e.clientY - rect.top) / zoom;
        }
        return { x, y };
    }
    _addEvents() {
        var element = this.$element.get(0);
        external_DevExpress_events_["on"](element, 'dxpointerdown', this._pointerDownHandler);
        external_DevExpress_events_["on"](element, 'dxpointermove', this._pointerMoveHandler);
        external_DevExpress_events_["on"](element, 'dxpointerleave', this._pointerLeaveHandler);
    }
    _removeEvents() {
        var element = this.$element.get(0);
        external_DevExpress_events_["off"](element, 'dxpointerdown', this._pointerDownHandler);
        external_DevExpress_events_["off"](element, 'dxpointermove', this._pointerMoveHandler);
        external_DevExpress_events_["off"](element, 'dxpointerleave', this._pointerLeaveHandler);
    }
    _setCanvasSize(width, height) {
        this._context.canvas.setAttribute('width', width);
        this._context.canvas.setAttribute('height', height);
    }
    _cleanCanvas() {
        this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    }
    clear() {
        this.image(null);
        this.signaturePainter.reset();
        this._cleanCanvas();
    }
    refresh() {
        this._cleanCanvas();
        var zoom = this.signaturePainter.hasPoints() ? 1 : this.zoom();
        var size = this.signaturePainter.hasPoints() ? this.initialSize : undefined;
        this.imagePainter.refresh(this._context, zoom, size)
            .done(() => this.signaturePainter.refresh(this._context));
    }
    initSize(element, zoom) {
        this.$element = element;
        this.initialSize = {
            width: this.$element.outerWidth() / zoom,
            height: this.$element.outerHeight() / zoom
        };
    }
    initCanvas(element, zoom) {
        var canvas = this.$element.find('canvas')[0];
        this._context = canvas.getContext('2d');
        this._setCanvasSize(this.initialSize.width * zoom, this.initialSize.height * zoom);
        this.imagePainter.refresh(this._context, zoom, {
            width: this._context.canvas.offsetWidth,
            height: this._context.canvas.offsetHeight
        });
    }
    imageFormatByType(imageType) {
        return imageType === imageEditingField_ImageEditingFieldViewModel.__DefaultImageType ? 'png' : imageType;
    }
    getImage() {
        return this._context.canvas.toDataURL('image/png');
    }
    hasSignature() {
        return this.signaturePainter.hasPoints();
    }
    dispose() {
        super.dispose();
        this._removeEvents();
        this.$element = null;
        this._context = null;
    }
    reset(initialImage, initialAlignment, initialSizeMode, initialImageType) {
        this.image(initialImage);
        this.imageAlignment(initialAlignment);
        this.imageSizeMode(initialSizeMode);
        this.format(this.imageFormatByType(initialImageType));
        this.signaturePainter.reset();
        this.refresh();
    }
}
external_ko_["bindingHandlers"]['dxPainter'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var options = (valueAccessor());
        external_jQuery_["fn"].constructor(element).children().remove();
        var templateHtml = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dx-painter');
        var $element = external_jQuery_["fn"].constructor(element).append(templateHtml);
        var child = $element.children()[0];
        var $child = external_jQuery_["fn"].constructor(child);
        var model = new _painter_Painter(options);
        model.initSize($child, options.zoom());
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
            model.dispose();
        });
        external_ko_["applyBindings"](model, child);
        model.initCanvas($child, options.zoom());
        return { controlsDescendantBindings: true };
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/pictureEditor/_pictureEditorToolbarItem.js


class PictureEditorToolbarItem {
    constructor(options) {
        this.id = options.id;
        this.icon = options.icon;
        this.action = options.action;
        this.active = options.active;
        this.renderedHandler = options.renderedHandler;
        this.title = options.title;
    }
    dispose() {
        this.renderedHandler = null;
        this.action = null;
    }
}
class _pictureEditorToolbarItem_PictureEditorToolbarItemWithPopup extends PictureEditorToolbarItem {
    constructor(options) {
        super(options);
        this.template = options.template;
        if (options.templateOptions) {
            this.templateOptions = options.templateOptions;
            this._popup = new external_DevExpress_Analytics_Widgets_Internal_["PopupComponentBase"]();
            this.templateOptions.onContentReady = this._popup.onContentReady;
            this.templateOptions.hideOnOutsideClick = this._popup.hideOnOutsideClick;
            this.templateOptions.onShown = (e) => {
                var $element = external_jQuery_["fn"].constructor(e.element);
                var topElement = $element.position().top;
                var popupsOffset = e['model'].getPositionTarget().offset().top - external_jQuery_["fn"].constructor(e.component.content()).offset().top;
                var $arrow = external_jQuery_["fn"].constructor($element.find('.dx-popover-arrow')[0]);
                $arrow.css('top', popupsOffset + topElement - 24 - 11);
            };
        }
    }
    dispose() {
        super.dispose();
        this._popup.dispose();
        this.templateOptions = null;
    }
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/pictureEditor/_pictureEditorActionProvider.js









class _pictureEditorActionProvider_PictureEditorActionProvider extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(_editorModel, _popupOptions) {
        super();
        this._editorModel = _editorModel;
        this._popupOptions = _popupOptions;
    }
    _getValues(enumType, prefix, propertyName, info) {
        var array = [];
        getEnumValues(enumType).forEach((item) => {
            var attrTitle = undefined;
            if (info && info.valuesArray.length > 0) {
                var displayValue = info.valuesArray.filter((value) => value.value === item)[0];
                attrTitle = Object(external_DevExpress_Analytics_Utils_["getLocalization"])(displayValue.displayValue || displayValue.value, displayValue.localizationId);
            }
            array.push({
                value: item,
                iconTemplate: 'dxrd-svg-pictureeditor-' + prefix + '_' + item.toLowerCase(),
                attrTitle,
                isSelected: external_ko_["computed"](() => { return this._editorModel.painter[propertyName]() === enumType[item]; }),
                action: () => {
                    this._editorModel.painter[propertyName](enumType[item]);
                    this._editorModel.painter.refresh();
                }
            });
        });
        return array;
    }
    _getColorValues() {
        var array = [];
        _pictureEditorActionProvider_PictureEditorActionProvider.colors.forEach((item) => {
            array.push({
                value: item,
                isSelected: external_ko_["computed"](() => { return this._editorModel.painter.lineColor() === item; }),
                action: (e) => {
                    this._editorModel.painter.lineColor(item);
                }
            });
        });
        return array;
    }
    _initPopupOptions(options) {
        options.boundary = this._popupOptions.boundary;
        options.getPositionTarget = () => this._popupOptions.getPositionTarget();
        options.target = this._popupOptions.target;
        options.container = this._popupOptions.container;
        return options;
    }
    createOpenFileAction(action) {
        var openFileActionOptions = {
            id: PictureEditorActionId.OpenFile,
            icon: 'dxrd-svg-pictureeditor-toolbar_open',
            title: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Load Image', 'PreviewStringId.ImageEditingFieldEditor_LoadImage'),
            active: external_ko_["observable"](false),
            action: (e) => action(e)
        };
        return new PictureEditorToolbarItem(openFileActionOptions);
    }
    createImagePickerAction(images, filterEnabled, action) {
        filterEnabled = filterEnabled && images.every((image) => image.text !== undefined);
        var active = external_ko_["observable"](false);
        var filter = external_ko_["observable"]('');
        images.forEach((image) => {
            if (filterEnabled) {
                this._disposables.push(image.visible = external_ko_["computed"](() => !!Object(external_DevExpress_Analytics_Internal_["findMatchesInString"])(image.text, filter())));
            }
            else {
                image.visible = true;
            }
        });
        var popupOptions = this._initPopupOptions({
            width: 'auto',
            height: Object(external_DevExpress_Analytics_Internal_["calculateWithZoomFactor"])(300) + 'px',
            visible: active,
            contentTemplate: filterEnabled ? 'dx-picture-editing-imagepickerwithfilter' : 'dx-picture-editing-imagespicker',
            contentData: {
                filterEnabled: filterEnabled,
                filter: filter,
                searchPlaceholder: () => Object(external_DevExpress_Analytics_Internal_["searchPlaceholder"])(),
                contentWidth: this._editorModel.painter.initialSize.width * 2 + 35,
                width: Math.min(this._editorModel.painter.initialSize.width, 150),
                height: Math.min(this._editorModel.painter.initialSize.height, 150),
                action: (data) => {
                    if (data.url) {
                        getImageBase64(data.url).done((result) => {
                            action(result);
                        }).fail((e) => {
                            Object(external_DevExpress_Analytics_Internal_["ShowMessage"])(e.name + ' :' + e.message.split(':').pop(), 'error');
                        });
                    }
                    else {
                        action(data.data);
                    }
                },
                images: images
            }
        });
        return new _pictureEditorToolbarItem_PictureEditorToolbarItemWithPopup({
            id: PictureEditorActionId.PickImage,
            icon: 'dxrd-svg-pictureeditor-image_gallery',
            title: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Choose Image', 'PreviewStringId.ImageEditingFieldEditor_ChooseImage'),
            active: active,
            template: 'dx-picture-editing-toolbar-popup',
            templateOptions: popupOptions
        });
    }
    createSizingAction() {
        var alignmentActive = external_ko_["observable"](false);
        var popupOptions = this._initPopupOptions({
            width: Object(external_DevExpress_Analytics_Internal_["calculateWithZoomFactor"])(174) + 'px',
            height: Object(external_DevExpress_Analytics_Internal_["calculateWithZoomFactor"])(300) + 'px',
            visible: alignmentActive,
            contentTemplate: 'dx-picture-editing-sizemode-alignment',
            contentData: {
                sizeModeText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Size Mode', 'PreviewStringId.ImageEditingFieldEditor_SizeMode'),
                sizeMode: this._editorModel.painter.imageSizeMode,
                sizeModeValues: this._getValues(ImageSizeMode, 'size_mode', 'imageSizeMode', sizing),
                alignmentText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Alignment', 'PreviewStringId.ImageEditingFieldEditor_Alignment'),
                alignment: this._editorModel.painter.imageAlignment,
                alignmentValues: this._getValues(ImageAlignment, 'alignment', 'imageAlignment', imageAlignment),
            }
        });
        return new _pictureEditorToolbarItem_PictureEditorToolbarItemWithPopup({
            id: PictureEditorActionId.Alignment,
            icon: 'dxrd-svg-pictureeditor-toolbar_size_mode_and_alignment',
            title: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Size Mode and Alignment', 'PreviewStringId.ImageEditingFieldEditor_SizeModeAndAlignment'),
            active: alignmentActive,
            template: 'dx-picture-editing-toolbar-popup',
            templateOptions: popupOptions
        });
    }
    createBrushAction() {
        var brushItemActive = external_ko_["observable"](false);
        var popupOptions = this._initPopupOptions({
            width: Object(external_DevExpress_Analytics_Internal_["calculateWithZoomFactor"])(226) + 'px',
            height: Object(external_DevExpress_Analytics_Internal_["calculateWithZoomFactor"])(295) + 'px',
            visible: brushItemActive,
            contentTemplate: 'dx-picture-editing-brush-options',
            contentData: {
                lineWidth: this._editorModel.painter.lineWidth,
                lineColor: this._editorModel.painter.lineColor,
                colors: this._getColorValues(),
                brushWidthText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Brush size', 'PreviewStringId.ImageEditingFieldEditor_BrushSize'),
                brushColorText: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Brush color', 'PreviewStringId.ImageEditingFieldEditor_BrushColor'),
            }
        });
        return new _pictureEditorToolbarItem_PictureEditorToolbarItemWithPopup({
            id: PictureEditorActionId.Brush,
            icon: 'dxrd-svg-pictureeditor-toolbar_brush_options',
            title: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Brush Options', 'PreviewStringId.ImageEditingFieldEditor_BrushOptions'),
            active: brushItemActive,
            template: 'dx-picture-editing-toolbar-popup',
            templateOptions: popupOptions,
            renderedHandler: (elem, mod) => {
                if (elem[0].nodeName.toLowerCase() === 'svg') {
                    var brushIcon = external_jQuery_["fn"].constructor(elem[0]).find('.BrushColor');
                    if (brushIcon) {
                        brushIcon.attr('data-bind', '{ style: { fill: $data.templateOptions.contentData.lineColor }}');
                        external_ko_["applyBindingsToDescendants"](mod, brushIcon[0]);
                    }
                }
            }
        });
    }
    createResetItem(action) {
        var clearItemOptions = {
            id: PictureEditorActionId.Reset,
            icon: 'dxrd-svg-pictureeditor-toolbar_reset',
            title: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Reset', 'PreviewStringId.ImageEditingFieldEditor_Reset'),
            active: external_ko_["observable"](false),
            action: (e) => action()
        };
        return new PictureEditorToolbarItem(clearItemOptions);
    }
    createClearItem(action) {
        var clearItemOptions = {
            id: PictureEditorActionId.Clear,
            icon: 'dxrd-svg-pictureeditor-toolbar_clear',
            title: Object(external_DevExpress_Analytics_Utils_["getLocalization"])('Clear', 'PreviewStringId.ImageEditingFieldEditor_Clear'),
            active: external_ko_["observable"](false),
            action: (e) => action()
        };
        return new PictureEditorToolbarItem(clearItemOptions);
    }
}
_pictureEditorActionProvider_PictureEditorActionProvider.colors = ['#FFFFFF', '#FFC0C0', '#FFE0C0', '#FFFFC0', '#C0FFC0', '#C0FFFF', '#C0C0FF', '#FFC0FF', '#E0E0E0', '#FF8080', '#FFC080', '#FFFF80', '#80FF80', '#80FFFF', '#8080FF', '#FF80FF', '#C0C0C0', '#FF0000', '#FF8000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#808080', '#C00000', '#C04000', '#C0C000', '#00C000', '#00C0C0', '#0000C0', '#C000C0', '#404040', '#800000', '#804000', '#808000', '#008000', '#008080', '#000080', '#800080', '#000000', '#400000', '#804040', '#404000', '#004000', '#004040', '#000040', '#400040'];
Object(external_DevExpress_Analytics_Widgets_Internal_["addToBindingsCache"])('style: { fill: $data.templateOptions.contentData.lineColor }', function ($context, $element) {
    return {
        'style': function () {
            return {
                'fill': $context.$data.templateOptions.contentData.lineColor
            };
        }
    };
});

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/viewer/widgets/pictureEditor/_pictureEditorModel.js











class _pictureEditorModel_PictureEditorModel extends external_DevExpress_Analytics_Utils_["Disposable"] {
    constructor(options, element) {
        super();
        this.GESTURE_COVER_CLASS = 'dx-gesture-cover';
        this.ACTIVE_POPUP_CLASS = '.dx-picture-editing-active';
        this._getPopupContent = () => {
            var popupInstance = external_DevExpress_ui_dxPopup_default.a['getInstance'](this.$element.find(this.ACTIVE_POPUP_CLASS).get(0));
            return popupInstance && external_jQuery_["fn"].constructor(popupInstance.content());
        };
        this.actions = [];
        this.canDraw = external_ko_["observable"](false);
        this._initialImageType = external_ko_["unwrap"](options.imageType) || 'png';
        this.zoom = options.zoom || external_ko_["observable"](1);
        this.editMode = external_ko_["unwrap"](options.imageMode) || PictureEditMode.Image;
        this._initialImage = external_ko_["unwrap"](options.image);
        this._initialAlignment = external_ko_["unwrap"](options.alignment);
        this._initialSizeMode = external_ko_["unwrap"](options.sizeMode);
        this._callbacks = options.callbacks;
        this.$element = external_jQuery_["fn"].constructor(element);
        this.shadingEnabled = options.shadingEnabled;
        this.active = external_ko_["isObservable"](options.active) ? options.active : external_ko_["observable"](!!options.active);
        var painterOptions = {
            alignment: this._initialAlignment,
            canDraw: this.editMode !== PictureEditMode.Image && this.canDraw,
            imageSource: this._initialImage,
            imageType: this._initialImageType,
            sizeMode: this._initialSizeMode,
            zoom: this.zoom
        };
        this.painter = new _painter_Painter(painterOptions);
        this._disposables.push(this.painter);
        this.painter.initSize(this.$element, this.zoom());
        this.actionsProvider = new _pictureEditorActionProvider_PictureEditorActionProvider(this, external_jQuery_["extend"](true, {
            getPositionTarget: () => {
                return this._getPopupContent().find('.dx-picture-editing-toolbar');
            }
        }, (options.popupOptions || {})));
        this._disposables.push(this.actionsProvider);
        this._initActions(options.callbacks && options.callbacks.customizeActions);
        this.applyBindings();
    }
    _takeFocus() {
        if (!this.active()) {
            this._callbacks && this._callbacks.onFocusIn && this._callbacks.onFocusIn(this);
            this.active(true);
        }
        else if (this.editMode !== PictureEditMode.Image) {
            this.canDraw(true);
            this._callbacks && this._callbacks.onDraw && this._callbacks.onDraw(this);
        }
    }
    _releaseFocus() {
        if (this.active()) {
            this._callbacks && this._callbacks.onFocusOut && this._callbacks.onFocusOut(this);
            this.active(false);
            this.canDraw(false);
        }
    }
    _wrapButtonAction(item, model) {
        var oldAction = item.action;
        item.action = (sender, event) => {
            model.changeActiveButton(sender);
            if (oldAction)
                oldAction(event, model);
        };
    }
    _initActions(customizeActionsCallback) {
        if (this.editMode == PictureEditMode.Image || this.editMode == PictureEditMode.ImageAndSignature) {
            this.actions.push(this.actionsProvider.createOpenFileAction((e) => this._loadImage(e)));
            this.actions.push(this.actionsProvider.createSizingAction());
        }
        if (this.editMode == PictureEditMode.Signature || this.editMode == PictureEditMode.ImageAndSignature) {
            this.actions.push(this.actionsProvider.createBrushAction());
        }
        if (!!this._initialImage) {
            this.actions.push(this.actionsProvider.createResetItem(() => {
                this.painter.reset(this._initialImage, this._initialAlignment, this._initialSizeMode, this._initialImageType);
            }));
        }
        this.actions.push(this.actionsProvider.createClearItem(() => {
            this.painter.clear();
        }));
        customizeActionsCallback && customizeActionsCallback(this, this.actions);
        this.actions.forEach((item) => this._wrapButtonAction(item, this));
    }
    _loadImage(event) {
        event.stopPropagation();
        event.preventDefault();
        Object(external_DevExpress_Analytics_Internal_["uploadFile"])({
            accept: 'image/*'
        }).done(result => {
            this.painter.format(result.format);
            this.painter.image(result.content);
            this.painter.refresh();
        });
    }
    _addEvents() {
        this._pointerDownHandler = (e) => {
            this._takeFocus();
        };
        this._pointerCancelHandler = (e) => {
            this._releaseFocus();
        };
        this._pointerUpHandler = (e) => {
            if (!this.active())
                return;
            var isUnderCursor = (componentContent) => {
                return componentContent && (componentContent.is(e.target) || componentContent.has(e.target).length > 0);
            };
            var isEditorContainer = this.$element.is(e.target) || this.$element.has(e.target).length > 0
                || isUnderCursor(this._getPopupContent())
                || this.actions.some(a => {
                    if (!a.active())
                        return false;
                    var component = external_ko_["unwrap"](a.component);
                    return isUnderCursor(component && external_jQuery_["fn"].constructor(component.content()));
                })
                || (e.target && e.target.className && e.target.className.indexOf && e.target.className.indexOf(this.GESTURE_COVER_CLASS) !== -1);
            if (!isEditorContainer) {
                this._releaseFocus();
            }
        };
        var element = this.$element.get(0);
        external_DevExpress_events_["on"](element, 'dxpointerdown', this._pointerDownHandler);
        external_DevExpress_events_["on"](element, 'dxpointercancel', this._pointerCancelHandler);
        external_DevExpress_events_["on"](document, 'dxpointerup', this._pointerUpHandler);
    }
    changeActiveButton(selectedItem) {
        this.actions.forEach(action => {
            action.active(action === selectedItem && !action.active());
        });
    }
    applyBindings() {
        external_ko_["cleanNode"](this.$element[0]);
        external_ko_["applyBindings"](this, this.$element[0]);
        this._addEvents();
        this.painter.initCanvas(this.$element, this.zoom());
    }
    dispose() {
        super.dispose();
        var element = this.$element.get(0);
        external_DevExpress_events_["off"](element, 'dxpointerdown', this._pointerDownHandler);
        external_DevExpress_events_["off"](element, 'dxpointercancel', this._pointerCancelHandler);
        external_DevExpress_events_["off"](document, 'dxpointerup', this._pointerUpHandler);
        this.actions.forEach(action => action.dispose && action.dispose());
        this.$element = null;
    }
    getImage() {
        return this.painter.getImage();
    }
    reset(image, alignment, sizeMode, imageType) {
        this._initialImage = image;
        this._initialAlignment = alignment;
        this._initialSizeMode = sizeMode;
        this._initialImageType = imageType;
        this.painter.reset(this._initialImage, this._initialAlignment, this._initialSizeMode, this._initialImageType);
    }
    getCurrentOptions() {
        var imageBase64 = (this.painter.hasSignature() ? this.painter.getImage() : this.painter.image()) || '';
        var imageParts = imageBase64.split(',');
        return {
            sizeMode: this.painter.imageSizeMode(),
            alignment: this.painter.imageAlignment(),
            imageType: this.painter.hasSignature() ? imageEditingField_ImageEditingFieldViewModel.__DefaultImageType : this.painter.format(),
            image: imageParts[imageParts.length - 1]
        };
    }
}
external_ko_["bindingHandlers"]['dxPictureEditor'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var options = (valueAccessor());
        external_jQuery_["fn"].constructor(element).children().remove();
        var templateHtml = Object(external_DevExpress_Analytics_Widgets_["getTemplate"])('dx-picture-editing');
        var $element = external_jQuery_["fn"].constructor(element).append(templateHtml);
        var child = $element.children()[0];
        var model = new _pictureEditorModel_PictureEditorModel(options, child);
        Object(external_DevExpress_Analytics_Internal_["addDisposeCallback"])(element, function () {
            model.dispose();
        });
        return { controlsDescendantBindings: true };
    }
};

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/scopes/reporting-viewer-widgets-internal.js



















// CONCATENATED MODULE: ./node_modules/devexpress-reporting/bundle/_add-viewer-to-bundle.js



















function _addViewerToBundle(bundle) {
    bundle.Reporting = reporting_namespaceObject;
    bundle.Reporting.Editing = reporting_editing_namespaceObject;
    bundle.Reporting.Export = reporting_export_namespaceObject;
    bundle.Reporting.Export.Metadata = reporting_export_metadata_namespaceObject;
    bundle.Reporting.Internal = reporting_internal_namespaceObject;
    bundle.Reporting.Metadata = reporting_metadata_namespaceObject;
    bundle.Reporting.Viewer = reporting_viewer_namespaceObject;
    bundle.Reporting.Viewer.Editing = reporting_viewer_editing_namespaceObject;
    bundle.Reporting.Viewer.Export = reporting_viewer_export_namespaceObject;
    bundle.Reporting.Viewer.Export.Metadata = reporting_viewer_export_metadata_namespaceObject;
    bundle.Reporting.Viewer.Internal = reporting_viewer_internal_namespaceObject;
    bundle.Reporting.Viewer.Mobile = reporting_viewer_mobile_namespaceObject;
    bundle.Reporting.Viewer.Mobile.Internal = reporting_viewer_mobile_internal_namespaceObject;
    bundle.Reporting.Viewer.Parameters = reporting_viewer_parameters_namespaceObject;
    bundle.Reporting.Viewer.Settings = reporting_viewer_settings_namespaceObject;
    bundle.Reporting.Viewer.Utils = reporting_viewer_utils_namespaceObject;
    bundle.Reporting.Viewer.Widgets = reporting_viewer_widgets_namespaceObject;
    bundle.Reporting.Viewer.Widgets.Internal = reporting_viewer_widgets_internal_namespaceObject;
    bundle.Reporting.VERSION = version;
    return bundle;
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/bundle/_validator.js
const _validator_version = '%VERSION%';
function checkVersions() {
    const DevExpress = window.DevExpress;
    var reportingVersion = DevExpress['Reporting']['VERSION'];
    var analyticsVersion = DevExpress['Analytics']['VERSION'];
    if (reportingVersion != analyticsVersion)
        console.warn(`Reporting (v${reportingVersion}) and Analytics-Core (v${analyticsVersion}) versions do not match.`);
}

// CONCATENATED MODULE: ./node_modules/devexpress-reporting/bundle/viewer-bundle.js


const DevExpress = window.DevExpress || {};
_addViewerToBundle(DevExpress);
checkVersions();
/* harmony default export */ var viewer_bundle = __webpack_exports__["default"] = (DevExpress['Reporting']);


/***/ })
/******/ ]);