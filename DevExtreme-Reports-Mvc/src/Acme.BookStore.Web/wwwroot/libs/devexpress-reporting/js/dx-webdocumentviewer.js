/**
* DevExpress HTML/JS Reporting (dist\js\dx-webdocumentviewer.js)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Utils;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ko;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Internal;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var analytics_widgets_1 = __webpack_require__(5);
var _editorTemplates_1 = __webpack_require__(56);
exports.pageBorderColor = { propertyName: 'pageBorderColor', modelName: '@PageBorderColor', from: analytics_utils_1.colorFromString, toJsonObject: analytics_utils_1.colorToString, displayName: 'Page Border Color', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.PageBorderColor', editor: analytics_widgets_1.editorTemplates.getEditor('customColorEditor'), defaultVal: 'Black' };
exports.pageBorderWidth = { propertyName: 'pageBorderWidth', modelName: '@PageBorderWidth', displayName: 'Page Border Width', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.PageBorderWidth', from: analytics_utils_1.floatFromModel, editor: analytics_widgets_1.editorTemplates.getEditor('numeric'), defaultVal: 1 };
exports.pageRange = { propertyName: 'pageRange', modelName: '@PageRange', displayName: 'Page Range', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.PageRange', editor: analytics_widgets_1.editorTemplates.getEditor('text'), defaultVal: '' };
exports.expotOptionsTitle = { propertyName: 'title', modelName: '@Title', displayName: 'Title', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.Title', editor: analytics_widgets_1.editorTemplates.getEditor('text'), defaultVal: 'Document' };
exports.htmlTableLayout = { propertyName: 'tableLayout', modelName: '@TableLayout', displayName: 'Table Layout', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.TableLayout', editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool, defaultVal: true };
exports.docxTableLayout = { propertyName: 'tableLayout', modelName: '@TableLayout', displayName: 'Table Layout', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions.TableLayout', editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool, defaultVal: false };
exports.allowURLsWithJSContent = { propertyName: 'allowURLsWithJSContent', modelName: '@AllowURLsWithJSContent', displayName: 'Allow URLs with JS Content', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.AllowURLsWithJSContent', editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool, defaultVal: false };
exports.rasterizationResolution = { propertyName: 'rasterizationResolution', modelName: '@RasterizationResolution', displayName: 'Rasterization Resolution', localizationId: 'DevExpress.XtraPrinting.PageByPageExportOptionsBase.RasterizationResolution', editor: analytics_widgets_1.editorTemplates.getEditor('numeric'), defaultVal: 96 };
exports.rasterizeImages = { propertyName: 'rasterizeImages', modelName: '@RasterizeImages', displayName: 'Rasterize Images', localizationId: 'DevExpress.XtraPrinting.PageByPageExportOptionsBase.RasterizeImages', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool };
exports.useHRefHyperlinks = { propertyName: 'useHRefHyperlinks', modelName: '@UseHRefHyperlinks', displayName: 'Use HRef Hyperlinks', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.UseHRefHyperlinks', editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool, defaultVal: false };
exports.exportWatermarks = { propertyName: 'exportWatermarks', modelName: '@ExportWatermarks', displayName: 'Export Watermarks', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.ExportWatermarks', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool };
exports.inlineCss = { propertyName: 'inlineCss', modelName: '@InlineCss', displayName: 'Inline CSS', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.InlineCss', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool };
exports.removeSecondarySymbols = { propertyName: 'removeSecondarySymbols', modelName: '@RemoveSecondarySymbols', displayName: 'Remove Secondary Symbols', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.RemoveSecondarySymbols', editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool, defaultVal: false };
exports.characterSet = {
    propertyName: 'characterSet', modelName: '@CharacterSet', displayName: 'Character Set', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.CharacterSet', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: 'utf-8',
    valuesArray: [{ value: 'windows-1256', displayValue: 'Arabic (Windows)' }, { value: 'iso-8859-4', displayValue: 'Baltic (ISO)' }, { value: 'windows-1257', displayValue: 'Baltic (Windows)' }, { value: 'iso-8859-2', displayValue: 'Central European (ISO)' }, { value: 'windows-1250', displayValue: 'Central European (Windows)' }, { value: 'iso-8859-5', displayValue: 'Cyrillic (ISO)' }, { value: 'koi8-r', displayValue: 'Cyrillic (KOI8-r)' }, { value: 'windows-1251', displayValue: 'Cyrillic (Windows)' }, { value: 'iso-8859-15', displayValue: 'Latin 9 (ISO)' }, { value: 'utf-7', displayValue: 'Unicode (UTF-7)' }, { value: 'utf-8', displayValue: 'Unicode (UTF-8)' }, { value: 'iso-8859-1', displayValue: 'Western European (ISO)' }, { value: 'windows-1252', displayValue: 'Western European (Windows)' }]
};
function getExportModeValues(format, preview, merged) {
    if (format === void 0) { format = 'Html'; }
    var singleFile = { value: 'SingleFile', displayValue: 'Single File', localizationId: analytics_internal_1.formatUnicorn('PreviewStringId.ExportOption_{0}ExportMode_SingleFile', format) };
    var singleFilePageByPage = { value: 'SingleFilePageByPage', displayValue: 'Single File PageByPage', localizationId: analytics_internal_1.formatUnicorn('PreviewStringId.ExportOption_{0}ExportMode_SingleFilePageByPage', format) };
    var differentFiles = { value: 'DifferentFiles', displayValue: 'Different Files', localizationId: analytics_internal_1.formatUnicorn('PreviewStringId.ExportOption_{0}ExportMode_DifferentFiles', format) };
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
exports.getExportModeValues = getExportModeValues;
exports.exportPageBreaks = { propertyName: 'exportPageBreaks', modelName: '@ExportPageBreaks', displayName: 'Export Page Breaks', localizationId: 'DevExpress.XtraPrinting.FormattedTextExportOptions.ExportPageBreaks', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool };
exports.rtfExportMode = {
    propertyName: 'rtfExportMode', modelName: '@ExportMode', defaultVal: 'SingleFilePageByPage',
    editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.RtfExportOptions.ExportMode',
    valuesArray: getExportModeValues('Rtf', true)
};
exports.docxExportMode = {
    propertyName: 'docxExportMode', modelName: '@ExportMode', defaultVal: 'SingleFilePageByPage',
    editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions.ExportMode',
    valuesArray: getExportModeValues('Docx', true)
};
exports.htmlExportMode = {
    propertyName: 'htmlExportMode', modelName: '@ExportMode', defaultVal: 'SingleFile',
    editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptionsBase.ExportMode',
    valuesArray: getExportModeValues('Html')
};
exports.embedImagesInHTML = {
    propertyName: 'embedImagesInHTML', modelName: '@EmbedImagesInHTML', defaultVal: false,
    editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool, displayName: 'Embed Images In HTML', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptions.EmbedImagesInHTML'
};
exports.imageExportMode = {
    propertyName: 'imageExportMode', modelName: '@ExportMode', defaultVal: 'SingleFile',
    editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.ExportMode',
    valuesArray: getExportModeValues('Image')
};
exports.xlsExportMode = {
    propertyName: 'xlsExportMode', modelName: '@ExportMode', defaultVal: 'SingleFile',
    editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.ExportMode',
    valuesArray: getExportModeValues('Xls')
};
exports.xlsxExportMode = {
    propertyName: 'xlsxExportMode', modelName: '@ExportMode', defaultVal: 'SingleFile',
    editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), displayName: 'Export Mode', localizationId: 'DevExpress.XtraPrinting.XlsxExportOptions.ExportMode',
    valuesArray: getExportModeValues('Xlsx')
};
function getTextExportModeValues() {
    return [
        { value: 'Text', displayValue: 'Text', localizationId: 'DevExpress.XtraPrinting.TextExportMode.Text' },
        { value: 'Value', displayValue: 'Value', localizationId: 'DevExpress.XtraPrinting.TextExportMode.Value' }
    ];
}
exports.textExportMode = {
    propertyName: 'textExportMode', modelName: '@TextExportMode', displayName: 'Text Export Mode', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.TextExportMode', defaultVal: 'Text', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'),
    valuesArray: getTextExportModeValues()
};
exports.xlsTextExportMode = {
    propertyName: 'textExportMode', modelName: '@TextExportMode', displayName: 'Text Export Mode', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.TextExportMode', defaultVal: 'Value', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'),
    valuesArray: getTextExportModeValues()
};
exports.csvTextSeparator = { propertyName: 'separator', modelName: '@Separator', defaultVal: '', displayName: 'Separator', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.Separator', editor: _editorTemplates_1.editorTemplates.csvSeparator };
exports.useCustomSeparator = { propertyName: 'useCustomSeparator', displayName: 'Use Custom Separator', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions.UseCustomSeparator', editor: analytics_widgets_1.editorTemplates.getEditor('bool') };
exports.textEncodingType = {
    propertyName: 'encodingType', modelName: '@EncodingType', displayName: 'Encoding', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.Encoding', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: 'Default', from: analytics_utils_1.fromEnum,
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
exports.xlsExportHyperlinks = {
    propertyName: 'exportHyperlinks', modelName: '@ExportHyperlinks', displayName: 'Export Hyperlinks', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.ExportHyperlinks', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool
};
exports.xlsRawDataMode = {
    propertyName: 'rawDataMode', modelName: '@RawDataMode', displayName: 'Raw Data Mode', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.RawDataMode', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool
};
exports.xlsShowGridLines = {
    propertyName: 'showGridLines', modelName: '@ShowGridLines', displayName: 'Show Grid Lines', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.ShowGridLines', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool
};
exports.xlsExportOptionsSheetName = {
    propertyName: 'sheetName', modelName: '@SheetName', displayName: 'Sheet Name', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.SheetName', defaultVal: 'Sheet', editor: analytics_widgets_1.editorTemplates.getEditor('text')
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_internal_1 = __webpack_require__(2);
var ko = __webpack_require__(1);
exports.EditablePreviewEnabled = ko.observable(true);
exports.SearchAvailable = ko.observable(true);
exports.ReportServerInvokeUri = '/RSWebDocumentViewerApi/Invoke';
exports.ReportServerExportUri = '/RSWebDocumentViewerApi/Download';
exports.AsyncExportApproach = analytics_internal_1.createGlobalModuleVariableFunc(false);
exports.MessageHandler = analytics_internal_1.createGlobalModuleVariableFunc({
    processError: function (message, showForUser, prefix) {
        if (prefix === void 0) { prefix = ''; }
        showForUser && analytics_internal_1.ShowMessage(message.substr(prefix.length));
        analytics_internal_1.NotifyAboutWarning(message, false);
    },
    processMessage: function (message, showForUser) { showForUser && analytics_internal_1.ShowMessage(message, analytics_internal_1.NotifyType.success, 10000); },
    processWarning: function (message, showForUser) { showForUser && analytics_internal_1.ShowMessage(message); }
});
exports.HandlerUri = analytics_internal_1.createGlobalModuleVariableFunc('DXXRDV.axd');
exports.previewDefaultResolution = analytics_internal_1.createGlobalModuleVariableFunc(96);
exports.ReportServerDownloadUri = analytics_internal_1.createGlobalModuleVariableFunc('');
exports.PollingDelay = analytics_internal_1.createGlobalModuleVariableFunc(300);
exports.TimeOut = analytics_internal_1.createGlobalModuleVariableFunc(105000);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionId = {
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
exports.ExportFormatID = {
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
exports.PreviewElements = {
    Toolbar: 'dxrd-preview-toolbar-scrollable',
    Surface: 'dxrdp-surface',
    RightPanel: 'dxrd-right-panel-template-base',
    ExportTool: 'dxrd-export-tool'
};
exports.ZoomAutoBy = {
    None: 1,
    WholePage: 0,
    PageWidth: -1
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
exports.rtfExportModeMergedPreview = $.extend({}, metadata_1.rtfExportMode, {
    valuesArray: metadata_1.getExportModeValues('Rtf', true, true)
});
exports.docxExportModeMergedPreview = $.extend({}, metadata_1.docxExportMode, {
    valuesArray: metadata_1.getExportModeValues('Docx', true, true)
});
function excludeModesForMergedDocuments(val) {
    return ko.observable('SingleFilePageByPage');
}
exports.excludeModesForMergedDocuments = excludeModesForMergedDocuments;
function excludeDifferentFilesMode(val) {
    return ko.observable(val === 'DifferentFiles' ? 'SingleFile' : val);
}
exports.excludeDifferentFilesMode = excludeDifferentFilesMode;
exports.htmlExportModePreviewBase = {
    propertyName: metadata_1.htmlExportMode.propertyName, modelName: metadata_1.htmlExportMode.modelName, defaultVal: metadata_1.htmlExportMode.defaultVal,
    editor: metadata_1.htmlExportMode.editor, displayName: metadata_1.htmlExportMode.displayName, localizationId: metadata_1.htmlExportMode.localizationId
};
exports.htmlExportModePreview = $.extend({}, exports.htmlExportModePreviewBase, {
    from: excludeDifferentFilesMode,
    valuesArray: metadata_1.getExportModeValues('Html', true)
});
exports.htmlExportModeMergedPreview = $.extend({}, exports.htmlExportModePreviewBase, {
    valuesArray: metadata_1.getExportModeValues('Html', true, true)
});
exports.xlsExportModePreviewBase = {
    propertyName: metadata_1.xlsExportMode.propertyName, modelName: metadata_1.xlsExportMode.modelName, defaultVal: metadata_1.xlsExportMode.defaultVal,
    editor: metadata_1.xlsExportMode.editor, displayName: metadata_1.xlsExportMode.displayName, localizationId: metadata_1.xlsExportMode.localizationId
};
exports.xlsExportModePreview = $.extend({}, exports.xlsExportModePreviewBase, {
    from: excludeDifferentFilesMode,
    valuesArray: metadata_1.getExportModeValues('Xls', true)
});
exports.xlsExportModeMergedPreview = $.extend({}, exports.xlsExportModePreviewBase, {
    valuesArray: metadata_1.getExportModeValues('Xls', true, true)
});
exports.imageExportModePreviewBase = {
    propertyName: metadata_1.imageExportMode.propertyName, modelName: metadata_1.imageExportMode.modelName, defaultVal: metadata_1.imageExportMode.defaultVal,
    editor: metadata_1.imageExportMode.editor, displayName: metadata_1.imageExportMode.displayName, localizationId: metadata_1.imageExportMode.localizationId
};
exports.imageExportModePreview = $.extend({}, exports.imageExportModePreviewBase, {
    from: excludeDifferentFilesMode,
    valuesArray: metadata_1.getExportModeValues('Image', true)
});
exports.imageExportModeMergedPreview = $.extend({}, exports.imageExportModePreviewBase, {
    valuesArray: metadata_1.getExportModeValues('Image', true, true)
});
exports.xlsxExportModePreviewBase = {
    propertyName: metadata_1.xlsxExportMode.propertyName, modelName: metadata_1.xlsxExportMode.modelName, defaultVal: metadata_1.xlsxExportMode.defaultVal,
    editor: metadata_1.xlsxExportMode.editor, displayName: metadata_1.xlsxExportMode.displayName, localizationId: metadata_1.xlsxExportMode.localizationId
};
exports.xlsxExportModePreview = $.extend({}, exports.xlsxExportModePreviewBase, {
    from: excludeDifferentFilesMode,
    valuesArray: metadata_1.getExportModeValues('Xlsx', true)
});
exports.xlsxExportModeMergedPreview = $.extend({}, exports.xlsxExportModePreviewBase, {
    valuesArray: metadata_1.getExportModeValues('Xlsx', true, true)
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = __webpack_require__(6);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var ColumnSortOrder;
(function (ColumnSortOrder) {
    ColumnSortOrder[ColumnSortOrder["None"] = 0] = "None";
    ColumnSortOrder[ColumnSortOrder["Ascending"] = 1] = "Ascending";
    ColumnSortOrder[ColumnSortOrder["Descending"] = 2] = "Descending";
})(ColumnSortOrder = exports.ColumnSortOrder || (exports.ColumnSortOrder = {}));
var PreviewRequestWrapper = (function () {
    function PreviewRequestWrapper(handlers, _callbacks) {
        var _this = this;
        this._callbacks = _callbacks;
        Object.keys(handlers || {}).forEach(function (name) {
            _this[name] = handlers[name];
        });
    }
    PreviewRequestWrapper.getProcessErrorCallback = function (reportPreview, defaultErrorMessage, showMessage) {
        if (showMessage === void 0) { showMessage = true; }
        return function (message, jqXHR, textStatus) {
            if (jqXHR) {
                var statusCodeText = analytics_utils_1.getLocalization(jqXHR.statusText, 'ASPxReportsStringId.HttpResponseStatusCode_' + jqXHR.status);
                if (defaultErrorMessage) {
                    var stringFormat = analytics_utils_1.getLocalization('{0} ({1} {2})', 'ASPxReportsStringId.Error_WithStatus');
                    var messageWithStatusCode = analytics_internal_1.formatUnicorn(stringFormat, defaultErrorMessage, jqXHR.status, statusCodeText);
                }
                else {
                    messageWithStatusCode = statusCodeText;
                }
            }
            if (!reportPreview) {
                var error = analytics_internal_1.getErrorMessage(jqXHR);
                settings_1.MessageHandler().processError(error || messageWithStatusCode || defaultErrorMessage || 'Internal Server Error', showMessage);
            }
            else {
                reportPreview._processError(messageWithStatusCode, jqXHR, showMessage);
            }
        };
    };
    PreviewRequestWrapper.getPage = function (url, ignoreError) {
        return analytics_internal_1.ajax(url, undefined, undefined, PreviewRequestWrapper.getProcessErrorCallback(), ignoreError, { type: 'GET' });
    };
    PreviewRequestWrapper.prototype.initialize = function (reportPreview, parametersModel, searchModel) {
        this._reportPreview = reportPreview;
        this._parametersModel = parametersModel;
        this._searchModel = searchModel;
    };
    PreviewRequestWrapper.prototype.findTextRequest = function (text, ignore) {
        return analytics_internal_1.ajax(settings_1.HandlerUri(), 'findText', encodeURIComponent(JSON.stringify({
            text: text,
            documentId: this._reportPreview.documentId,
            matchCase: this._searchModel.matchCase(),
            wholeWord: this._searchModel.matchWholeWord(),
            searchUp: this._searchModel.searchUp()
        })), PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('An error occurred during search', 'ASPxReportsStringId.WebDocumentViewer_SearchError')), ignore);
    };
    PreviewRequestWrapper.prototype.stopBuild = function (id) {
        analytics_internal_1.ajax(settings_1.HandlerUri(), 'stopBuild', encodeURIComponent(id), undefined, function () { return true; });
    };
    PreviewRequestWrapper.prototype.sendCloseRequest = function (documentId, reportId) {
        analytics_internal_1.ajax(settings_1.HandlerUri(), 'close', encodeURIComponent(JSON.stringify({
            reportId: reportId,
            documentId: documentId
        })), undefined, function () { return true; });
    };
    PreviewRequestWrapper.prototype.startBuildRequest = function (shouldIgnoreError) {
        var parameters = this._parametersModel.serializeParameters();
        this._callbacks && this._callbacks.parametersSubmitted && this._callbacks.parametersSubmitted(this._parametersModel, parameters);
        return analytics_internal_1.ajax({
            uri: settings_1.HandlerUri(),
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
            isError: function (data) { return !!data.error || !!(data.result && data.result.faultMessage); },
            processErrorCallback: PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('Cannot create a document for the current report', 'ASPxReportsStringId.WebDocumentViewer_DocumentCreationError'))
        });
    };
    PreviewRequestWrapper.prototype.getBuildStatusRequest = function (documentId, shouldIgnoreError) {
        return analytics_internal_1.ajax({
            uri: settings_1.HandlerUri(),
            action: 'getBuildStatus',
            arg: encodeURIComponent(JSON.stringify({
                documentId: documentId,
                timeOut: Math.max(5000, settings_1.TimeOut())
            })),
            processErrorCallback: PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('Error obtaining a build status', 'ASPxReportsStringId.WebDocumentViewer_GetBuildStatusError')),
            ignoreError: shouldIgnoreError,
            isError: function (data) { return !!data.error || !!(data.result && data.result.faultMessage) || !data.success; },
            getErrorMessage: this._reportPreview._getErrorMessage
        });
    };
    PreviewRequestWrapper.prototype.getDocumentData = function (documentId, shouldIgnoreError) {
        return analytics_internal_1.ajax(settings_1.HandlerUri(), 'getDocumentData', encodeURIComponent(documentId), PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('Cannot obtain additional document data for the current document', 'ASPxReportsStringId.WebDocumentViewer_GetDocumentDataError')), shouldIgnoreError);
    };
    PreviewRequestWrapper.prototype.customDocumentOperation = function (documentId, serializedExportOptions, editindFields, customData, hideMessageFromUser) {
        return analytics_internal_1.ajax(settings_1.HandlerUri(), 'documentOperation', encodeURIComponent(JSON.stringify({
            documentId: documentId,
            customData: customData,
            exportOptions: serializedExportOptions,
            editingFieldValues: editindFields
        })), PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('The requested document operation cannot be performed.', 'ASPxReportsStringId.WebDocumentViewer_CustomDocumentOperationsDenied_Error'), !hideMessageFromUser));
    };
    PreviewRequestWrapper.prototype.openReport = function (reportName) {
        return analytics_internal_1.ajax(settings_1.HandlerUri(), 'openReport', encodeURIComponent(reportName), PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('Could not open report', 'ASPxReportsStringId.WebDocumentViewer_OpenReportError') + " '" + reportName + "'"));
    };
    PreviewRequestWrapper.prototype.drillThrough = function (customData) {
        return analytics_internal_1.ajax(settings_1.HandlerUri(), 'drillThrough', encodeURIComponent(JSON.stringify({
            reportId: this._reportPreview.reportId,
            reportUrl: this._reportPreview.reportUrl,
            documentId: this._reportPreview.documentId,
            parameters: this._parametersModel.serializeParameters(),
            editingFields: this._reportPreview.editingFieldsProvider().map(function (field) { return field.model(); }),
            customData: customData
        })), PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('Drill through operation failed', 'ASPxReportsStringId.WebDocumentViewer_DrillThroughError')));
    };
    PreviewRequestWrapper.prototype.getStartExportOperation = function (arg) {
        return analytics_internal_1.ajax(settings_1.HandlerUri(), 'startExport', arg, PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('An error occurred during the export', 'ASPxReportsStringId.WebDocumentViewer_ExportError')));
    };
    PreviewRequestWrapper.prototype.getExportStatusRequest = function (operationId) {
        return analytics_internal_1.ajax({
            uri: settings_1.HandlerUri(),
            action: 'getExportStatus',
            arg: encodeURIComponent(JSON.stringify({
                id: operationId,
                timeOut: Math.max(5000, settings_1.TimeOut())
            })),
            processErrorCallback: PreviewRequestWrapper.getProcessErrorCallback(this._reportPreview, analytics_utils_1.getLocalization('Error obtaining an export status', 'ASPxReportsStringId.WebDocumentViewer_GetExportStatusError')),
            isError: function (data) { return !!data.error || !!(data.result && data.result.faultMessage) || !data.success; },
            getErrorMessage: this._reportPreview._getErrorMessage
        });
    };
    PreviewRequestWrapper.prototype.getEditingFieldHtml = function (value, editingFieldIndex) {
        return analytics_internal_1.ajax(settings_1.HandlerUri(), 'getEditingFieldHtmlValue', encodeURIComponent(JSON.stringify({
            documentId: this._reportPreview.documentId,
            value: value,
            editingFieldIndex: editingFieldIndex
        })));
    };
    return PreviewRequestWrapper;
}());
exports.PreviewRequestWrapper = PreviewRequestWrapper;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Widgets.Internal;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
var analytics_widgets_internal_1 = __webpack_require__(10);
var analytics_internal_1 = __webpack_require__(2);
exports.cultureInfo = {};
exports.generateGuid = function () {
    var getNewQuartet = function (i) {
        return Math.floor((1 + Math.random()) * Math.pow(0x10000, i)).toString(16).substring(1);
    };
    return getNewQuartet(2) + '-' + getNewQuartet(1) + '-' + getNewQuartet(1) + '-' + getNewQuartet(1) + '-' + getNewQuartet(3);
};
var commonBlur = HTMLElement.prototype.blur;
var fullscreenEventsList = ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'MSFullscreenChange'];
function createFullscreenComputed(element, parent) {
    var _fullscreen = ko.observable(false);
    var func = function () {
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
    var fullscreen = ko.computed({
        read: function () { return _fullscreen(); },
        write: function (newVal) {
            _fullscreen(newVal);
            toggleFullscreen(element, newVal);
        }
    });
    addFullscreenListener(document, func);
    parent._disposables.push({
        dispose: function () {
            removeFullscreenListener(document, func);
            commonBlur = null;
            func = null;
        }
    }, fullscreen);
    return fullscreen;
}
exports.createFullscreenComputed = createFullscreenComputed;
function processZoomFactor(accessibilityCompliant) {
    if (!accessibilityCompliant)
        return;
    var defaultFontSize = 16;
    var zoomFactor = (parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('font-size')) || defaultFontSize) / defaultFontSize;
    if (zoomFactor !== analytics_internal_1.accessibilityFontSizeZoomFactor()) {
        analytics_widgets_internal_1.propertiesGridEditorsPaddingLeft(zoomFactor * analytics_widgets_internal_1.propertiesGridEditorsPaddingLeft());
        analytics_internal_1.accessibilityFontSizeZoomFactor(zoomFactor);
    }
}
exports.processZoomFactor = processZoomFactor;
function addFullscreenListener(element, func) {
    fullscreenEventsList.forEach(function (eventName) {
        element.addEventListener(eventName, func);
    });
}
function removeFullscreenListener(element, func) {
    fullscreenEventsList.forEach(function (eventName) {
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
exports.transformNewLineCharacters = transformNewLineCharacters;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = __webpack_require__(6);
var $ = __webpack_require__(3);
function getCurrentResolution(zoom) {
    return Math.floor((zoom || 1) * settings_1.previewDefaultResolution());
}
exports.getCurrentResolution = getCurrentResolution;
function getImageBase64(url) {
    var deferred = $.Deferred();
    var background = new Image();
    background.src = url;
    background.crossOrigin = 'anonymous';
    background.onload = function () {
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
exports.getImageBase64 = getImageBase64;
function getEnumValues(enumType) {
    return Object.keys(enumType).filter(function (key) { return !isNaN(Number(enumType[key])); });
}
exports.getEnumValues = getEnumValues;
function safelyRunWindowOpen(url, target) {
    if (target === void 0) { target = '_blank'; }
    var newWindow = window.open(url, target);
    target === '_blank' && newWindow && (newWindow.opener = newWindow);
    return newWindow;
}
exports.safelyRunWindowOpen = safelyRunWindowOpen;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var analytics_elements_1 = __webpack_require__(136);
exports.previewBackColor = { propertyName: 'backColor', modelName: '@BackColor', from: analytics_utils_1.colorFromString, toJsonObject: analytics_utils_1.colorToString };
exports.previewSides = { propertyName: 'borders', modelName: '@Sides' };
exports.previewBorderColor = { propertyName: 'borderColor', modelName: '@BorderColor', from: analytics_utils_1.colorFromString, toJsonObject: analytics_utils_1.colorToString };
exports.previewBorderStyle = { propertyName: 'borderStyle', modelName: '@BorderStyle' };
exports.previewBorderDashStyle = { propertyName: 'borderDashStyle', modelName: '@BorderDashStyle' };
exports.previewBorderWidth = { propertyName: 'borderWidth', modelName: '@BorderWidthSerializable', from: analytics_utils_1.floatFromModel };
exports.previewForeColor = { propertyName: 'foreColor', modelName: '@ForeColor', from: analytics_utils_1.colorFromString, toJsonObject: analytics_utils_1.colorToString };
exports.previewFont = { propertyName: 'font', modelName: '@Font' };
exports.previewPadding = { propertyName: 'padding', modelName: '@Padding', from: analytics_elements_1.PaddingModel.from };
exports.previewTextAlignment = { propertyName: 'textAlignment', modelName: '@TextAlignment' };
exports.brickStyleSerializationsInfo = [
    exports.previewBackColor,
    exports.previewSides,
    exports.previewBorderColor,
    exports.previewBorderStyle,
    exports.previewBorderDashStyle,
    exports.previewBorderWidth,
    exports.previewForeColor,
    exports.previewFont,
    exports.previewPadding,
    exports.previewTextAlignment
];
exports.defaultCulture = 'Default';
exports.availableCultures = ko.observable((_a = {},
    _a[exports.defaultCulture] = '(Default)',
    _a));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
exports.rtfExportOptionsSerializationInfoBase = [
    metadata_1.pageRange,
    metadata_1.rasterizationResolution,
    metadata_1.exportPageBreaks,
    metadata_1.exportWatermarks
];
exports.emptyFirstPageHeaderFooter = { propertyName: 'emptyFirstPageHeaderFooter', modelName: '@EmptyFirstPageHeaderFooter', displayName: 'Empty First Page Header/Footer', localizationId: 'DevExpress.XtraPrinting.FormattedTextExportOptions.EmptyFirstPageHeaderFooter', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool };
exports.keepRowHeight = { propertyName: 'keepRowHeight', modelName: '@KeepRowHeight', displayName: 'Keep Row Height', localizationId: 'DevExpress.XtraPrinting.FormattedTextExportOptions.KeepRowHeight', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool };
exports.rtfExportOptionsSerializationInfo = [
    exports.emptyFirstPageHeaderFooter,
    exports.keepRowHeight,
    metadata_1.rtfExportMode
].concat(exports.rtfExportOptionsSerializationInfoBase);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
var pdfExportDocumentOptions_1 = __webpack_require__(34);
var analytics_internal_1 = __webpack_require__(2);
var documentOptionsSerializationsInfo = [
    pdfExportDocumentOptions_1.author, pdfExportDocumentOptions_1.application, pdfExportDocumentOptions_1.title, pdfExportDocumentOptions_1.subject,
    { propertyName: 'tags', modelName: '@Tags', displayName: 'Tags', localizationId: 'DevExpress.XtraPrinting.XlDocumentOptions.Tags', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'category', modelName: '@Category', displayName: 'Category', localizationId: 'DevExpress.XtraPrinting.XlDocumentOptions.Category', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'comments', modelName: '@Comments', displayName: 'Comments', localizationId: 'DevExpress.XtraPrinting.XlDocumentOptions.Comments', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'company', modelName: '@Company', displayName: 'Company', localizationId: 'DevExpress.XtraPrinting.XlDocumentOptions.Company', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') }
];
var documentOptions = { propertyName: 'documentOptions', modelName: 'DocumentOptions', displayName: 'Document Options', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.DocumentOptions', info: documentOptionsSerializationsInfo, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') };
var encryptionOptionsSerializationsInfo = [
    {
        propertyName: 'type', modelName: '@Type', displayName: 'Type', localizationId: 'DevExpress.XtraPrinting.XlEncryptionOptions.Type', defaultVal: 'Strong', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), from: analytics_utils_1.fromEnum,
        valuesArray: [
            { value: 'Strong', displayValue: 'Strong', localizationId: 'DevExpress.XtraPrinting.XlEncryptionType.Strong' },
            { value: 'Compatible', displayValue: 'Compatible', localizationId: 'DevExpress.XtraPrinting.XlEncryptionType.Compatible' }
        ]
    },
    analytics_internal_1.createPasswordSerializationInfo({ propertyName: 'password', modelName: '@Password', displayName: 'Password', localizationId: 'DevExpress.XtraPrinting.XlEncryptionOptions.Password', defaultVal: '' })
];
var encryptionOptions = { propertyName: 'encryptionOptions', modelName: 'EncryptionOptions', displayName: 'Encryption Options', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.EncryptionOptions', info: encryptionOptionsSerializationsInfo, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') };
exports.xlsExportOptionsSerializationInfoCommon = [
    metadata_1.xlsExportHyperlinks,
    metadata_1.pageRange,
    metadata_1.xlsRawDataMode,
    metadata_1.xlsExportOptionsSheetName,
    metadata_1.xlsShowGridLines,
    metadata_1.xlsTextExportMode,
    metadata_1.rasterizeImages,
    metadata_1.rasterizationResolution,
    { propertyName: 'fitToPrintedPageWidth', modelName: '@FitToPrintedPageWidth', displayName: 'Fit To Printed Page Width', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.FitToPrintedPageWidth', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    { propertyName: 'fitToPrintedPageHeight', modelName: '@FitToPrintedPageHeight', displayName: 'Fit To Printed Page Height', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.FitToPrintedPageHeight', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    {
        propertyName: 'ignoreErrors', modelName: '@IgnoreErrors', displayName: 'Ignore Errors', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.IgnoreErrors', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: 'None', from: analytics_utils_1.fromEnum, valuesArray: [
            { value: 'None', displayValue: 'None', localizationId: 'DevExpress.XtraPrinting.XlIgnoreErrors.None' },
            { value: 'NumberStoredAsText', displayValue: 'Number Stored As Text', localizationId: 'DevExpress.XtraPrinting.XlIgnoreErrors.NumberStoredAsText' }
        ]
    },
    {
        propertyName: 'rightToLeftDocument', modelName: '@RightToLeftDocument', displayName: 'Right To Left Document', localizationId: 'DevExpress.XtraPrinting.XlExportOptionsBase.RightToLeftDocument', defaultVal: 'Default', from: analytics_utils_1.fromEnum, editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), valuesArray: [
            { value: 'True', displayValue: 'True', localizationId: 'DevExpress.Utils.DefaultBoolean.True' },
            { value: 'False', displayValue: 'False', localizationId: 'DevExpress.Utils.DefaultBoolean.False' },
            { value: 'Default', displayValue: 'Default', localizationId: 'DevExpress.Utils.DefaultBoolean.Default' }
        ]
    },
    documentOptions,
    encryptionOptions
];
exports.xlsExportOptionsSerializationInfoBase = [
    { propertyName: 'suppress256ColumnsWarning', modelName: '@Suppress256ColumnsWarning', displayName: 'Suppress 256 Columns Warning', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.Suppress256ColumnsWarning', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    { propertyName: 'suppress65536RowsWarning', modelName: '@Suppress65536RowsWarning', displayName: 'Suppress 65536 Rows Warning', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.Suppress65536RowsWarning', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    {
        propertyName: 'workbookColorPaletteCompliance', modelName: '@WorkbookColorPaletteCompliance', displayName: 'Workbook Color Palette Compliance', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions.WorkbookColorPaletteCompliance', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: 'ReducePaletteForExactColors', from: analytics_utils_1.fromEnum,
        valuesArray: [
            { value: 'ReducePaletteForExactColors', displayValue: 'ReducePaletteForExactColors', localizationId: 'DevExpress.XtraPrinting.WorkbookColorPaletteCompliance.ReducePaletteForExactColors' },
            { value: 'AdjustColorsToDefaultPalette', displayValue: 'AdjustColorsToDefaultPalette', localizationId: 'DevExpress.XtraPrinting.WorkbookColorPaletteCompliance.AdjustColorsToDefaultPalette' }
        ]
    }
];
exports.xlsExportOptionsSerializationInfo = [metadata_1.xlsExportMode].concat(exports.xlsExportOptionsSerializationInfoCommon, exports.xlsExportOptionsSerializationInfoBase);


/***/ }),
/* 16 */
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
var checkEditingField_1 = __webpack_require__(70);
var textEditingField_1 = __webpack_require__(40);
var characterCombEditingField_1 = __webpack_require__(71);
var popupImageEditingField_1 = __webpack_require__(72);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var settings_1 = __webpack_require__(6);
var analytics_utils_1 = __webpack_require__(0);
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
})(ImageAlignment = exports.ImageAlignment || (exports.ImageAlignment = {}));
var ImageSizeMode;
(function (ImageSizeMode) {
    ImageSizeMode[ImageSizeMode["Normal"] = 0] = "Normal";
    ImageSizeMode[ImageSizeMode["StretchImage"] = 1] = "StretchImage";
    ImageSizeMode[ImageSizeMode["ZoomImage"] = 4] = "ZoomImage";
    ImageSizeMode[ImageSizeMode["Squeeze"] = 5] = "Squeeze";
    ImageSizeMode[ImageSizeMode["Cover"] = 7] = "Cover";
})(ImageSizeMode = exports.ImageSizeMode || (exports.ImageSizeMode = {}));
var EditingField = (function (_super) {
    __extends(EditingField, _super);
    function EditingField(model, index, htmlProvider) {
        var _this = _super.call(this) || this;
        _this._needToUseHtml = false;
        _this._index = -1;
        _this._model = model;
        _this._index = index;
        _this._readOnly = ko.observable(model.readOnly);
        _this._disposables.push(_this.readOnly = ko.pureComputed({
            read: function () {
                return _this._readOnly() || !settings_1.EditablePreviewEnabled();
            },
            write: function (newVal) {
                _this._readOnly(newVal);
            }
        }));
        _this.modelValue = ko.observable(model.editValue);
        _this.editValue = ko.computed({
            read: function () {
                return _this.modelValue();
            },
            write: function (newVal) {
                var oldVal = _this.modelValue();
                _this.modelValue(newVal);
                var val = _this.editingFieldChanged(_this, oldVal, newVal);
                val = val == null ? newVal : val;
                if (val !== oldVal) {
                    _this._refreshHtmlValue(val);
                }
                if (val !== newVal) {
                    _this.modelValue(val);
                    _this._editorValue(val);
                }
            }
        });
        _this._editorValue = ko.observable(model.editValue);
        _this.htmlValue = ko.observable(model.htmlValue);
        _this._htmlProvider = htmlProvider;
        return _this;
    }
    EditingField.prototype._refreshHtmlValue = function (newValue) {
        var _this = this;
        this.htmlValue(null);
        if (this._needToUseHtml) {
            this._htmlProvider.getEditingFieldHtml(newValue, this._index).done(function (html) {
                _this.htmlValue(html);
            });
        }
    };
    EditingField.prototype.editingFieldChanged = function (field, oldVal, newVal) {
        return newVal;
    };
    EditingField.prototype.editorName = function () { return this._model.editorName; };
    EditingField.prototype.id = function () { return this._model.id; };
    EditingField.prototype.groupID = function () { return this._model.groupID; };
    EditingField.prototype.pageIndex = function () { return this._model.pageIndex; };
    EditingField.prototype.type = function () { return this._model.type; };
    EditingField.prototype.model = function () {
        return $.extend({}, this._model, {
            readOnly: this.readOnly.peek(),
            editValue: this.editValue.peek(),
            htmlValue: this.htmlValue.peek(),
        });
    };
    EditingField.prototype.createViewModel = function (zoom, pageWidth, pageHeight, editingFieldsProvider, bounds) {
        if (this._model.type === 'check') {
            return new checkEditingField_1.CheckEditingFieldViewModel(this, pageWidth, pageHeight, zoom, editingFieldsProvider);
        }
        else if (this._model.type === 'text') {
            this._needToUseHtml = bounds.height !== this._model.bounds.height || !!this._model.brickOptions.formatString;
            if (!this._needToUseHtml) {
                this.htmlValue(null);
            }
            return new textEditingField_1.TextEditingFieldViewModel(this, pageWidth, pageHeight, zoom, bounds);
        }
        else if (this._model.type === 'charactercomb') {
            return new characterCombEditingField_1.CharacterCombEditingFieldViewModel(this, pageWidth, pageHeight, zoom, bounds);
        }
        else if (this._model.type === 'image') {
            return new popupImageEditingField_1.DefaultImageEditingFieldViewModel(this, pageWidth, pageHeight, zoom, bounds);
        }
    };
    return EditingField;
}(analytics_utils_1.Disposable));
exports.EditingField = EditingField;


/***/ }),
/* 17 */
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
var parameterHelper_1 = __webpack_require__(21);
var editorTemplates_1 = __webpack_require__(45);
var analytics_internal_1 = __webpack_require__(2);
var analytics_widgets_internal_1 = __webpack_require__(10);
var $ = __webpack_require__(3);
var PreviewParameterHelper = (function (_super) {
    __extends(PreviewParameterHelper, _super);
    function PreviewParameterHelper(knownEnums, callbacks) {
        var _this = _super.call(this) || this;
        _this.callbacks = callbacks;
        _this.initialize(knownEnums, callbacks);
        return _this;
    }
    PreviewParameterHelper.prototype.mapLookUpValues = function (type, lookUpValues) {
        var converter = this.getValueConverter(type);
        return $.map(lookUpValues || [], function (lookUpValue) { return { value: converter(lookUpValue.Value), displayValue: lookUpValue.Description }; });
    };
    PreviewParameterHelper.fixPropertyName = function (propertyName) {
        return propertyName.replace(/\./g, '_');
    };
    PreviewParameterHelper.getPrivatePropertyName = function (propertyName) {
        return '_' + PreviewParameterHelper.fixPropertyName(propertyName);
    };
    PreviewParameterHelper.prototype.createInfo = function (parameter) {
        var info = _super.prototype.createInfo.call(this, parameter);
        info.propertyName = PreviewParameterHelper.getPrivatePropertyName(parameter.path);
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
            info.validationRules = analytics_widgets_internal_1.requiredValidationRules;
        }
        else if (parameter.type === 'System.Guid') {
            info.editorOptions.displayCustomValue = false;
        }
        return info;
    };
    PreviewParameterHelper.prototype.assignValueStore = function (info, parameter) {
        var _helper = this;
        if (!parameter.isMultiValueWithLookUp) {
            Object.defineProperty(info, 'valueStore', {
                get: function () {
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
                set: function (values) {
                    parameter.lookUpValues(values);
                }
            });
        }
    };
    PreviewParameterHelper.prototype.isEnumType = function (parameter) {
        return parameter.isFilteredLookUpSettings || !!parameter.lookUpValues() || _super.prototype.isEnumType.call(this, parameter);
    };
    PreviewParameterHelper.prototype.getValueConverter = function (type) {
        if (type === 'System.DateTime') {
            return function (dateString) { return analytics_internal_1.parseDate(dateString); };
        }
        else if (['System.Int16', 'System.Int32', 'System.Int64'].indexOf(type) > -1) {
            return function (val) { return analytics_internal_1.integerValueConverter(val, '0'); };
        }
        else if (['System.Single', 'System.Double', 'System.Decimal'].indexOf(type) > -1) {
            return function (val) { return analytics_internal_1.floatValueConverter(val, '0'); };
        }
        return _super.prototype.getValueConverter.call(this, type);
    };
    PreviewParameterHelper.prototype.getRangeEditor = function () {
        return editorTemplates_1.viewerEditorTemplates.rangeEditor;
    };
    return PreviewParameterHelper;
}(parameterHelper_1.ParameterHelper));
exports.PreviewParameterHelper = PreviewParameterHelper;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(7);
var analytics_internal_1 = __webpack_require__(2);
var analytics_utils_1 = __webpack_require__(0);
var $ = __webpack_require__(3);
function stringToPosition(position) {
    var lowerCased = (position || '').toLowerCase();
    if (!lowerCased || lowerCased === 'default') {
        return null;
    }
    var top = lowerCased.indexOf('top') !== -1;
    var right = lowerCased.indexOf('right') !== -1;
    return { top: top, bottom: !top, right: right, left: !right };
}
exports.stringToPosition = stringToPosition;
function getDockedElementCallback($targetElement, $viewer, $window, selector, position) {
    if (position === void 0) { position = null; }
    if (!selector)
        return $.noop;
    return function (viewer) {
        if ($viewer.length === 0)
            $viewer = $(viewer);
        if ($targetElement.length === 0)
            $targetElement = $viewer.find(selector);
        if ($window.length === 0)
            $window = $(window);
        if (!position || position.bottom) {
            var elementTop = parseInt($targetElement.css('bottom')) + $targetElement.height();
            var viewerTop = $viewer.offset().top;
            var viewerHeight = $viewer.height();
            var windowContentHeight = $window.height() + $window.scrollTop();
            var result = viewerTop + viewerHeight - windowContentHeight;
            if (result < viewerHeight - elementTop) {
                result = Math.max(0, result);
                var transform = 'translateY(-' + result * analytics_internal_1.accessibilityFontSizeZoomFactor() + 'px)';
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
            var transform = 'translateY(' + translateY * analytics_internal_1.accessibilityFontSizeZoomFactor() + 'px)';
            $targetElement.css({
                '-webkit-transform': transform,
                'transform': transform
            });
        }
    };
}
exports.getDockedElementCallback = getDockedElementCallback;
function _getRightAreaWidth($container) {
    var rightAreaWidth = ($container.find('.dxrd-right-panel:visible').outerWidth() || 0) + ($container.find('.dxrd-right-tabs:visible').outerWidth() || 0);
    return isNaN(rightAreaWidth) ? 0 : rightAreaWidth;
}
function updatePreviewContentSize(previewSize, root, rtl) {
    var _cashedSizeFactorClass = 'lg';
    return function (tabPanelPosition) {
        var $_root = $(root);
        var $root = $_root.find('.dxrd-preview');
        var $viewPort = $(root).children('.dx-designer-viewport');
        var sizeFactor = analytics_internal_1.getSizeFactor($_root.outerWidth());
        if (!!$viewPort.length && _cashedSizeFactorClass !== sizeFactor) {
            $viewPort.removeClass('dx-designer-viewport-' + _cashedSizeFactorClass);
            $viewPort.addClass('dx-designer-viewport-' + sizeFactor);
        }
        _cashedSizeFactorClass = sizeFactor;
        var rightAreaWidth = _getRightAreaWidth($root);
        var surfaceWidth = ($root.width() - rightAreaWidth - 10) * analytics_internal_1.accessibilityFontSizeZoomFactor();
        var cssStyleData = (tabPanelPosition === analytics_utils_1.TabPanel.Position.Left) ? { 'right': '', 'left': rightAreaWidth } : { 'right': rightAreaWidth, 'left': '' };
        $root.find('.dxrd-preview-wrapper').css(cssStyleData);
        previewSize(surfaceWidth);
    };
}
exports.updatePreviewContentSize = updatePreviewContentSize;
function updatePreviewZoomWithAutoFit(width, height, $element, autoFitBy) {
    if (autoFitBy === void 0) { autoFitBy = constants_1.ZoomAutoBy.WholePage; }
    var $previewWrapper = $element.closest('.dxrd-preview-wrapper');
    var $preview = $element.closest('.dxrd-preview');
    if ($previewWrapper.length === 0 || $preview.length === 0) {
        return 1;
    }
    var surfaceWidth = $preview.width() - _getRightAreaWidth($preview) - 10;
    var topAreaHeight = parseFloat($previewWrapper.css('top').split('px')[0]);
    var designerHeight = $preview.outerHeight();
    var surfaceHeight = designerHeight - topAreaHeight;
    if (autoFitBy === constants_1.ZoomAutoBy.PageWidth) {
        return (surfaceWidth - 12) / width;
    }
    var heightZoom = surfaceHeight / (height + 6);
    var widthZoom = surfaceWidth / width;
    return Math.min(heightZoom, widthZoom);
}
exports.updatePreviewZoomWithAutoFit = updatePreviewZoomWithAutoFit;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PictureEditMode;
(function (PictureEditMode) {
    PictureEditMode[PictureEditMode["Image"] = 0] = "Image";
    PictureEditMode[PictureEditMode["Signature"] = 1] = "Signature";
    PictureEditMode[PictureEditMode["ImageAndSignature"] = 2] = "ImageAndSignature";
})(PictureEditMode = exports.PictureEditMode || (exports.PictureEditMode = {}));


/***/ }),
/* 20 */
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
var metadata_1 = __webpack_require__(13);
var editingFieldExtensions_1 = __webpack_require__(22);
var pictureEditMode_1 = __webpack_require__(19);
var _previewSelection_1 = __webpack_require__(42);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var ImageEditingFieldViewModel = (function (_super) {
    __extends(ImageEditingFieldViewModel, _super);
    function ImageEditingFieldViewModel(field, pageWidth, pageHeight, zoom, bounds) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.zoom = zoom;
        _this.bounds = bounds;
        _this.popupTarget = '.dx-designer';
        _this.popupOptions = {
            target: _this.popupTarget,
            boundary: _this.popupTarget,
            container: _this.popupTarget
        };
        _this.template = 'dxrp-editing-field-image';
        _this.active = ko.observable(false);
        var brickStyle = field.model().brickOptions;
        var style = { rtl: function () { return brickStyle.rtl; } };
        new analytics_utils_1.ModelSerializer().deserialize(style, JSON.parse(brickStyle.style), metadata_1.brickStyleSerializationsInfo);
        var cssCalculator = new analytics_internal_1.CssCalculator(style, ko.observable(!!brickStyle.rtlLayout));
        _this._disposables.push(_this.alignment = ko.computed(function () {
            return field.editValue().alignment;
        }), _this.sizeMode = ko.computed(function () {
            return field.editValue().sizeMode;
        }));
        var editor = editingFieldExtensions_1.EditingFieldExtensions.instance().editor(field.editorName());
        var options = editor ? editor.options : { editMode: pictureEditMode_1.PictureEditMode.ImageAndSignature };
        _this.editMode = options.editMode;
        _this.containerStyle = function () {
            return $.extend({
                height: _this.bounds.height * zoom() + 'px',
                width: _this.bounds.width * zoom() + 'px',
                zIndex: _this.active() ? 10 : 0,
                top: _this.bounds.top * 100 / pageHeight + '%',
                left: _this.bounds.left * 100 / pageWidth + '%'
            }, cssCalculator.borderCss(), cssCalculator.paddingsCss());
        };
        _this.callbacks = $.extend({
            onDraw: function (s) { return _this.onDraw(s); },
            onFocusIn: function (s) { return _this.onFocusIn(s); },
            onFocusOut: function (s) { return _this.onBlur(s); }
        }, options.callbacks);
        return _this;
    }
    ImageEditingFieldViewModel.prototype.getImage = function () {
        return this.field.editValue().image;
    };
    ImageEditingFieldViewModel.prototype.getImageType = function () {
        return this.field.editValue().imageType;
    };
    ImageEditingFieldViewModel.prototype.getPictureEditorOptions = function () {
        return {
            image: this.getImage(),
            imageType: this.getImageType(),
            imageMode: ko.observable(this.editMode),
            alignment: this.alignment,
            sizeMode: this.sizeMode,
            callbacks: this.callbacks,
            active: this.active,
            zoom: this.zoom,
            popupOptions: this.popupOptions
        };
    };
    ImageEditingFieldViewModel.prototype.onKeyDown = function (_, e) {
        if (e.key == analytics_internal_1.KeyboardEnum.Space) {
        }
        else {
        }
    };
    ImageEditingFieldViewModel.prototype.onFocusIn = function (s) {
        _previewSelection_1.PreviewSelection.disabled = true;
    };
    ImageEditingFieldViewModel.prototype.onDraw = function (s) {
        _previewSelection_1.PreviewSelection.disabled = true;
    };
    ImageEditingFieldViewModel.prototype.onBlur = function (s) {
        var options = s.getCurrentOptions();
        this.field.editValue($.extend({}, this.field.editValue(), options, { imageType: options.imageType === 'svg' ? 'svg' : ImageEditingFieldViewModel.__DefaultImageType }));
        _previewSelection_1.PreviewSelection.disabled = false;
    };
    ImageEditingFieldViewModel.__DefaultImageType = 'img';
    return ImageEditingFieldViewModel;
}(analytics_utils_1.Disposable));
exports.ImageEditingFieldViewModel = ImageEditingFieldViewModel;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editorTemplates_1 = __webpack_require__(45);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var array_store_1 = __webpack_require__(122);
var analytics_internal_2 = __webpack_require__(2);
var data_source_1 = __webpack_require__(123);
function getEditorType(typeString) {
    if (typeString === 'multiValueWithLookUp') {
        return editorTemplates_1.viewerEditorTemplates.multiValue;
    }
    if (typeString === 'multiValue') {
        return editorTemplates_1.viewerEditorTemplates.multiValueEditable;
    }
    if (typeString === 'Enum') {
        return editorTemplates_1.viewerEditorTemplates.selectBox;
    }
    return undefined;
}
exports.getEditorType = getEditorType;
var ParameterHelper = (function () {
    function ParameterHelper() {
        this._customizeParameterEditors = ko.observable();
        this.getUnspecifiedDisplayText = function () { return analytics_utils_1.getLocalization('(none)', 'PreviewStringId.NoneString'); };
    }
    ParameterHelper.prototype._isKnownEnumType = function (type) {
        return !!this._knownEnums && this._knownEnums.some(function (knownEnumType) { return knownEnumType.enumType === type; });
    };
    ParameterHelper.getSerializationValue = function (value, dateConverter) {
        if (value instanceof Array) {
            return value.map(function (item) {
                var itemValue = ko.isObservable(item.value) ? item.value() : item;
                return (itemValue instanceof Date) ? dateConverter(itemValue) : itemValue;
            });
        }
        return (value instanceof Date) ? dateConverter(value) : value;
    };
    ParameterHelper.createDefaultDataSource = function (store) {
        return new data_source_1.default({
            store: store,
            paginate: true,
            pageSize: 100
        });
    };
    ParameterHelper.prototype.initialize = function (knownEnums, callbacks) {
        if (arguments.length > 0) {
            this._knownEnums = knownEnums;
            if (callbacks) {
                callbacks.customizeParameterEditors && this._customizeParameterEditors(callbacks.customizeParameterEditors);
                callbacks.customizeParameterLookUpSource && (this.customizeParameterLookUpSource = callbacks.customizeParameterLookUpSource);
            }
        }
    };
    ParameterHelper.prototype.createInfo = function (parameter) {
        var parameterDescriptor = parameter.getParameterDescriptor();
        var typeString = this.isEnumType(parameter) ? 'Enum' : ko.unwrap(parameterDescriptor.type);
        var info = {
            propertyName: 'value',
            displayName: parameterDescriptor['displayName'],
            localizationId: parameterDescriptor['localizationId'],
            editor: getEditorType(typeString) || analytics_internal_2.getEditorType(typeString),
            editorOptions: {}
        };
        if (parameterDescriptor.type === 'System.Guid') {
            info.editorOptions.isNullable = parameterDescriptor.allowNull;
        }
        this.assignValueStore(info, parameter);
        return info;
    };
    ParameterHelper.prototype.addShowCleanButton = function (info, parameter) {
        var _this = this;
        info.editorOptions.showClearButton = parameter.allowNull;
        info.editorOptions.placeholder = ko.computed(function () {
            if (ko.unwrap(parameter.allowNull))
                return _this.getUnspecifiedDisplayText();
            return ko.unwrap(parameter.isMultiValue) ? analytics_internal_1.selectPlaceholder() : '';
        });
    };
    ParameterHelper.prototype.assignValueStore = function (info, parameter) {
        var items = this.getEnumCollection(parameter);
        info['valueStore'] = this.getItemsSource(parameter.getParameterDescriptor(), items, true);
    };
    ParameterHelper.prototype.createMultiValue = function (parameter, value) {
        var newValue = ko.observable();
        if (value !== null && value !== void 0) {
            newValue(value);
        }
        return { value: newValue, getInfo: function () { return [parameter.multiValueInfo()]; } };
    };
    ParameterHelper.prototype.createMultiValueArray = function (fromArray, parameter, convertSingleValue) {
        var _this = this;
        var converter = convertSingleValue ? convertSingleValue : this.getValueConverter(ko.unwrap(parameter.type));
        return ko.observableArray(fromArray.map(function (item) {
            return _this.createMultiValue(parameter, converter(item));
        }));
    };
    ParameterHelper.prototype.isEnumType = function (parameter) {
        return this._isKnownEnumType(ko.unwrap(parameter.type));
    };
    ParameterHelper.prototype.getItemsSource = function (parameterDescriptor, items, sort) {
        if (items) {
            var newItems;
            if (this.customizeParameterLookUpSource)
                newItems = this.customizeParameterLookUpSource(parameterDescriptor, items.slice(0));
            return newItems ? newItems : ParameterHelper.createDefaultDataSource(sort ? new analytics_internal_1.SortedArrayStore(items, 'displayValue') : new array_store_1.default(items));
        }
        return items;
    };
    ParameterHelper.prototype.getEnumCollection = function (parameter) {
        var type = ko.unwrap(parameter.type);
        if (this._isKnownEnumType(type)) {
            var currentKnownEnumInfo = this._knownEnums.filter(function (knownEnumType) { return knownEnumType.enumType === type; })[0];
            if (currentKnownEnumInfo && currentKnownEnumInfo.values && currentKnownEnumInfo.values.length !== 0) {
                return currentKnownEnumInfo.values.map(function (val) { return { value: val.value, displayValue: val.displayName }; });
            }
        }
    };
    ParameterHelper.prototype.getParameterInfo = function (parameter) {
        var _this = this;
        var valueInfo = this.createInfo(parameter);
        parameter.multiValueInfo($.extend(true, {}, valueInfo, { propertyName: 'value' }));
        if (parameter.allowNull !== undefined) {
            this.addShowCleanButton(valueInfo, parameter);
        }
        if (ko.unwrap(parameter.isMultiValue)) {
            valueInfo.editor = getEditorType(parameter['isMultiValueWithLookUp'] ? 'multiValueWithLookUp' : 'multiValue');
            valueInfo['addHandler'] = function () { return _this.createMultiValue(parameter); };
        }
        if (this._customizeParameterEditors()) {
            this._customizeParameterEditors()(parameter.getParameterDescriptor(), valueInfo);
        }
        return valueInfo;
    };
    ParameterHelper.prototype.getValueConverter = function (type) {
        return (function (val) { return val; });
    };
    return ParameterHelper;
}());
exports.ParameterHelper = ParameterHelper;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _pictureEditorTypes_1 = __webpack_require__(23);
var pictureEditMode_1 = __webpack_require__(19);
var analytics_internal_1 = __webpack_require__(2);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_internal_1 = __webpack_require__(10);
var $ = __webpack_require__(3);
exports.Categories = {
    Image: function () { return 'Image'; },
    Numeric: function () { return 'Numeric'; },
    DateTime: function () { return 'Date-Time'; },
    Letters: function () { return 'Letters'; }
};
var EditingFieldExtensions = (function () {
    function EditingFieldExtensions() {
        this._editors = {};
    }
    EditingFieldExtensions.instance = function () {
        if (!EditingFieldExtensions._instance) {
            EditingFieldExtensions._instance = new EditingFieldExtensions();
            EditingFieldExtensions._instance._registerStandartEditors();
        }
        return EditingFieldExtensions._instance;
    };
    EditingFieldExtensions.prototype._registerStandartEditors = function () {
        var getLocalizedString = analytics_utils_1.getLocalization;
        EditingFieldExtensions.registerRegExpEditor('Integer', getLocalizedString('Integer', 'PreviewStringId.EditingFieldEditors_Integer'), exports.Categories.Numeric(), /^-?\d*$/, /^-?\d+$/, '0');
        EditingFieldExtensions.registerRegExpEditor('IntegerPositive', getLocalizedString('Integer Positive', 'PreviewStringId.EditingFieldEditors_IntegerPositive'), exports.Categories.Numeric(), /^\d+$/, /^\d+$/, '0');
        EditingFieldExtensions.registerRegExpEditor('FixedPoint', getLocalizedString('Fixed-Point', 'PreviewStringId.EditingFieldEditors_FixedPoint'), exports.Categories.Numeric(), /^-?(\d+([\.,]?\d*)?)?$/, /^-?\d+([\.,]?\d*)?$/, '0');
        EditingFieldExtensions.registerRegExpEditor('FixedPointPositive', getLocalizedString('Fixed-Point Positive', 'PreviewStringId.EditingFieldEditors_FixedPointPositive'), exports.Categories.Numeric(), /^\d+([\.,]?\d*)?$/, /^\d+([\.,]?\d*)?$/, '0');
        var dateEditorOptions = {
            onPreRender: function (data) {
                if (!(data.options.value() instanceof Date)) {
                    data.options.value(analytics_internal_1.parseDate(data.options.value(), false) || new Date(Date.now()));
                }
            },
            onHideEditor: function (field) {
                field.editValue(analytics_internal_1.formatDate(field._editorValue()));
            }
        };
        EditingFieldExtensions.registerEditor('Date', getLocalizedString('Date', 'PreviewStringId.EditingFieldEditors_Date'), exports.Categories.DateTime(), dateEditorOptions, 'dxrp-editing-field-datetime');
        EditingFieldExtensions.registerImageEditor({
            name: 'Image',
            displayName: getLocalizedString('Image', 'PreviewStringId.EditingFieldEditors_Image'),
            drawingEnabled: false,
            imageLoadEnabled: true
        });
        EditingFieldExtensions.registerImageEditor({
            name: 'Signature',
            displayName: getLocalizedString('Signature', 'PreviewStringId.EditingFieldEditors_Signature'),
            drawingEnabled: true,
            imageLoadEnabled: false
        });
        EditingFieldExtensions.registerImageEditor({
            name: 'ImageAndSignature',
            displayName: getLocalizedString('Image And Signature', 'PreviewStringId.EditingFieldEditors_ImageAndSignature'),
            drawingEnabled: true,
            imageLoadEnabled: true
        });
        EditingFieldExtensions.registerRegExpEditor('OnlyLatinLetters', getLocalizedString('Only Latin Letters', 'PreviewStringId.EditingFieldEditors_OnlyLatinLetters'), exports.Categories.Letters(), /^[a-zA-Z]*$/, /^[a-zA-Z]*$/, '');
    };
    EditingFieldExtensions.registerImageEditor = function (imageRegistrationOptions) {
        imageRegistrationOptions.imageLoadEnabled = imageRegistrationOptions.imageLoadEnabled === undefined ? !imageRegistrationOptions.images : imageRegistrationOptions.imageLoadEnabled;
        imageRegistrationOptions.drawingEnabled = imageRegistrationOptions.drawingEnabled === undefined ? false : imageRegistrationOptions.drawingEnabled;
        var editMode = pictureEditMode_1.PictureEditMode.ImageAndSignature;
        if (!imageRegistrationOptions.imageLoadEnabled)
            editMode = pictureEditMode_1.PictureEditMode.Signature;
        if (!imageRegistrationOptions.drawingEnabled)
            editMode = pictureEditMode_1.PictureEditMode.Image;
        var options = {
            editMode: editMode,
            registrationOptions: imageRegistrationOptions
        };
        options['callbacks'] = {
            customizeActions: function (s, actions) {
                if (imageRegistrationOptions.images) {
                    var imagePickerAction = s.actionsProvider.createImagePickerAction(imageRegistrationOptions.images, imageRegistrationOptions.searchEnabled, function (base64) {
                        s.painter.image(base64);
                        s.painter.refresh();
                    });
                    actions.splice(0, 0, imagePickerAction);
                    if (!imageRegistrationOptions.sizeOptionsEnabled) {
                        var alignmentAction = actions.filter(function (x) { return x.id === _pictureEditorTypes_1.PictureEditorActionId.Alignment; })[0];
                        alignmentAction && actions.splice(actions.indexOf(alignmentAction), 1);
                    }
                }
                if (!imageRegistrationOptions.imageLoadEnabled) {
                    var openFile = actions.filter((function (x) { return x.id === _pictureEditorTypes_1.PictureEditorActionId.OpenFile; }))[0];
                    openFile && actions.splice(actions.indexOf(openFile), 1);
                }
                if (imageRegistrationOptions.sizeOptionsEnabled !== undefined && !imageRegistrationOptions.sizeOptionsEnabled) {
                    var alignmentAction = actions.filter(function (x) { return x.id === _pictureEditorTypes_1.PictureEditorActionId.Alignment; })[0];
                    alignmentAction && actions.splice(actions.indexOf(alignmentAction), 1);
                }
                if (imageRegistrationOptions.clearEnabled !== undefined && !imageRegistrationOptions.clearEnabled) {
                    var clearAction = actions.filter(function (x) { return x.id === _pictureEditorTypes_1.PictureEditorActionId.Clear; })[0];
                    clearAction && actions.splice(actions.indexOf(clearAction), 1);
                }
                if (imageRegistrationOptions.customizeActions) {
                    imageRegistrationOptions.customizeActions(s, actions);
                    return;
                }
            }
        };
        EditingFieldExtensions.registerEditor(imageRegistrationOptions.name, imageRegistrationOptions.displayName, exports.Categories.Image(), options, 'dxrp-editing-field-image');
    };
    EditingFieldExtensions.registerEditor = function (name, displayName, category, options, template, validate, defaultVal) {
        if (defaultVal === void 0) { defaultVal = ''; }
        var initValue;
        var extendOptions = {
            onInitialized: function (e) {
                if (validate) {
                    analytics_widgets_internal_1.ValueEditorHelper.validateWidgetValue(e, validate, defaultVal);
                }
                initValue = e.component.option('value');
            },
            onKeyUp: function (e) {
                var editor = e.component;
                analytics_internal_1.processTextEditorHotKeys(e.event, {
                    esc: function () {
                        editor.blur();
                        editor.option('value', initValue);
                    },
                    ctrlEnter: function () {
                        editor.blur();
                    }
                });
            }
        };
        EditingFieldExtensions.instance()._editors[name] = {
            name: name,
            displayName: displayName,
            category: category,
            options: $.extend({}, options, extendOptions),
            template: template
        };
    };
    EditingFieldExtensions.registerMaskEditor = function (editorID, displayName, category, mask) {
        EditingFieldExtensions.registerEditor(editorID, displayName, category, { mask: mask });
    };
    EditingFieldExtensions.registerRegExpEditor = function (editorID, displayName, category, regExpEditing, regExpFinal, defaultVal) {
        var validate = function (val) { return regExpFinal.test(val); };
        EditingFieldExtensions.registerEditor(editorID, displayName, category, analytics_widgets_internal_1.ValueEditorHelper.getValueEditorOptions(regExpEditing, validate, defaultVal), null, validate, defaultVal);
    };
    EditingFieldExtensions.unregisterEditor = function (editorID) {
        delete EditingFieldExtensions.instance()._editors[editorID];
    };
    EditingFieldExtensions.prototype.categories = function (excludeCategories) {
        var _this = this;
        if (excludeCategories === void 0) { excludeCategories = []; }
        var categories = [];
        Object.keys(this._editors).forEach(function (p) {
            var category = _this._editors[p].category;
            if (excludeCategories.indexOf(category) === -1 && categories.indexOf(category) === -1) {
                categories.push(category);
            }
        });
        return categories;
    };
    EditingFieldExtensions.prototype.editors = function () {
        var _this = this;
        return Object.keys(this._editors).map(function (key) { return _this._editors[key]; });
    };
    EditingFieldExtensions.prototype.editorsByCategories = function (categories) {
        var _this = this;
        if (categories === void 0) { categories = []; }
        var editors = [];
        Object.keys(this._editors).forEach(function (p) {
            if (categories.indexOf(_this._editors[p].category) != -1) {
                editors.push(_this._editors[p]);
            }
        });
        return editors;
    };
    EditingFieldExtensions.prototype.editor = function (editorID) {
        return this._editors[editorID];
    };
    return EditingFieldExtensions;
}());
exports.EditingFieldExtensions = EditingFieldExtensions;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PictureEditorActionId;
(function (PictureEditorActionId) {
    PictureEditorActionId[PictureEditorActionId["OpenFile"] = 0] = "OpenFile";
    PictureEditorActionId[PictureEditorActionId["PickImage"] = 1] = "PickImage";
    PictureEditorActionId[PictureEditorActionId["Alignment"] = 2] = "Alignment";
    PictureEditorActionId[PictureEditorActionId["Brush"] = 3] = "Brush";
    PictureEditorActionId[PictureEditorActionId["Clear"] = 4] = "Clear";
    PictureEditorActionId[PictureEditorActionId["Reset"] = 5] = "Reset";
})(PictureEditorActionId = exports.PictureEditorActionId || (exports.PictureEditorActionId = {}));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var CsvExportOptions = (function () {
    function CsvExportOptions(model, serializer) {
        var _this = this;
        this.defaultSeparatorValue = '';
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
        this.useCustomSeparator = ko.observable(this.separator && this.separator() !== this.defaultSeparatorValue);
        var separatorValue = ko.observable(this.separator());
        this.useCustomSeparator.subscribe(function (newValue) {
            if (!newValue)
                separatorValue(_this.defaultSeparatorValue);
        });
        this.separator = ko.computed({
            read: function () { return separatorValue(); },
            write: function (newValue) {
                separatorValue(newValue);
                if (_this.useCustomSeparator)
                    _this.useCustomSeparator(newValue !== _this.defaultSeparatorValue);
            }
        });
    }
    CsvExportOptions.from = function (model, serializer) {
        return new CsvExportOptions(model || {}, serializer);
    };
    CsvExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, csvMetaData_1.csvExportOptionsSerializationInfo, refs);
    };
    CsvExportOptions.prototype.getInfo = function () {
        return csvMetaData_1.csvExportOptionsSerializationInfo;
    };
    CsvExportOptions.prototype.isPropertyDisabled = function (name) {
        return (name === 'separator') && !(this.useCustomSeparator && this.useCustomSeparator());
    };
    return CsvExportOptions;
}());
exports.CsvExportOptions = CsvExportOptions;
var csvMetaData_1 = __webpack_require__(55);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var DocxExportOptions = (function () {
    function DocxExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    DocxExportOptions.from = function (model, serializer) {
        return new DocxExportOptions(model || {}, serializer);
    };
    DocxExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, docxMetaData_1.docxExportOptionsSerializationInfo, refs);
    };
    DocxExportOptions.prototype.getInfo = function () {
        return docxMetaData_1.docxExportOptionsSerializationInfo;
    };
    DocxExportOptions.prototype.isPropertyDisabled = function (name) {
        var exportMode = this.docxExportMode ? this.docxExportMode() : metadata_1.docxExportMode.defaultVal;
        if (name === 'pageRange' || name === 'tableLayout')
            return exportMode === 'SingleFile';
        else if (name === 'emptyFirstPageHeaderFooter' || name === 'exportPageBreaks') {
            return exportMode === 'SingleFilePageByPage';
        }
        else if (name === 'keepRowHeight') {
            return exportMode === 'SingleFilePageByPage' && !this.tableLayout();
        }
    };
    return DocxExportOptions;
}());
exports.DocxExportOptions = DocxExportOptions;
var metadata_1 = __webpack_require__(4);
var docxMetaData_1 = __webpack_require__(26);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
var metadata_1 = __webpack_require__(4);
var rtfMetaData_1 = __webpack_require__(14);
var docxExportDocumentOptions_1 = __webpack_require__(57);
exports.docxDocumentOptions = { propertyName: 'documentOptions', modelName: 'DocumentOptions', displayName: 'Document Options', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions.DocumentOptions', from: docxExportDocumentOptions_1.DocxExportDocumentOptions.from, toJsonObject: docxExportDocumentOptions_1.DocxExportDocumentOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') };
exports.docxExportOptionsSerializationInfo = [
    metadata_1.docxExportMode,
    metadata_1.exportWatermarks,
    metadata_1.pageRange,
    metadata_1.rasterizeImages,
    metadata_1.rasterizationResolution,
    rtfMetaData_1.emptyFirstPageHeaderFooter,
    rtfMetaData_1.keepRowHeight,
    metadata_1.exportPageBreaks,
    metadata_1.docxTableLayout,
    { propertyName: 'allowFloatingPictures', modelName: '@AllowFloatingPictures', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions.AllowFloatingPictures', displayName: 'Allow Floating Pictures', editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool, defaultVal: false },
    exports.docxDocumentOptions,
];


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var HtmlExportOptions = (function () {
    function HtmlExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    HtmlExportOptions.from = function (model, serializer) {
        return new HtmlExportOptions(model || {}, serializer);
    };
    HtmlExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, htmlMetaData_1.htmlExportOptionsSerializationInfo, refs);
    };
    HtmlExportOptions.prototype.getInfo = function () {
        return htmlMetaData_1.htmlExportOptionsSerializationInfo;
    };
    HtmlExportOptions.prototype.isPropertyDisabled = function (name) {
        return ((name === 'pageRange') || (name === 'pageBorderWidth') || (name === 'exportWatermarks')) && ((this.htmlExportMode ? this.htmlExportMode() : metadata_1.htmlExportMode.defaultVal) === 'SingleFile');
    };
    return HtmlExportOptions;
}());
exports.HtmlExportOptions = HtmlExportOptions;
var htmlMetaData_1 = __webpack_require__(28);
var metadata_1 = __webpack_require__(4);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
exports.htmlExportOptionsSerializationInfoBase = [
    metadata_1.pageBorderColor,
    metadata_1.pageBorderWidth,
    metadata_1.pageRange,
    metadata_1.rasterizationResolution,
    metadata_1.expotOptionsTitle,
    metadata_1.htmlTableLayout,
    metadata_1.useHRefHyperlinks,
    metadata_1.allowURLsWithJSContent,
    metadata_1.removeSecondarySymbols,
    metadata_1.exportWatermarks,
    metadata_1.characterSet
];
exports.htmlExportOptionsSerializationInfo = [metadata_1.htmlExportMode, metadata_1.embedImagesInHTML, metadata_1.inlineCss].concat(exports.htmlExportOptionsSerializationInfoBase);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var ImageExportOptions = (function () {
    function ImageExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    ImageExportOptions.from = function (model, serializer) {
        return new ImageExportOptions(model || {}, serializer);
    };
    ImageExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, imageMetaData_1.imageExportOptionsSerializationInfo, refs);
    };
    ImageExportOptions.prototype.getInfo = function () {
        return imageMetaData_1.imageExportOptionsSerializationInfo;
    };
    ImageExportOptions.prototype.isPropertyDisabled = function (name) {
        return ((name === 'pageRange') || (name === 'pageBorderWidth')) && ((this.imageExportMode ? this.imageExportMode() : metadata_1.imageExportMode.defaultVal) === 'SingleFile');
    };
    return ImageExportOptions;
}());
exports.ImageExportOptions = ImageExportOptions;
var imageMetaData_1 = __webpack_require__(30);
var metadata_1 = __webpack_require__(4);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
exports.imageExportOptionsSerializationInfoBase = [
    metadata_1.pageBorderColor,
    metadata_1.pageBorderWidth,
    metadata_1.pageRange,
    { propertyName: 'resolution', modelName: '@Resolution', displayName: 'Resolution', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.Resolution', editor: analytics_widgets_1.editorTemplates.getEditor('numeric'), defaultVal: 96 },
    {
        propertyName: 'format', modelName: '@Format', displayName: 'Format', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.Format', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: 'Png', from: analytics_utils_1.fromEnum,
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
exports.imageExportOptionsSerializationInfo = [metadata_1.imageExportMode,
    { propertyName: 'retainBackgroundTransparency', modelName: '@RetainBackgroundTransparency', displayName: 'Retain Background Transparency', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.RetainBackgroundTransparency', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    {
        propertyName: 'textRenderingMode', modelName: '@TextRenderingMode', displayName: 'Text Rendering Mode', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions.TextRenderingMode', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: 'SystemDefault', from: analytics_utils_1.fromEnum,
        valuesArray: [
            { value: 'SystemDefault', displayValue: 'SystemDefault', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.SystemDefault' },
            { value: 'SingleBitPerPixelGridFit', displayValue: 'SingleBitPerPixelGridFit', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.SingleBitPerPixelGridFit' },
            { value: 'SingleBitPerPixel', displayValue: 'SingleBitPerPixel', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.SingleBitPerPixel' },
            { value: 'AntiAliasGridFit', displayValue: 'AntiAliasGridFit', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.AntiAliasGridFit' },
            { value: 'AntiAlias', displayValue: 'AntiAlias', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.AntiAlias' },
            { value: 'ClearTypeGridFit', displayValue: 'ClearTypeGridFit', localizationId: 'DevExpress.XtraPrinting.TextRenderingMode.ClearTypeGridFit' }
        ]
    }
].concat(exports.imageExportOptionsSerializationInfoBase);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var MhtExportOptions = (function () {
    function MhtExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    MhtExportOptions.from = function (model, serializer) {
        return new MhtExportOptions(model || {}, serializer);
    };
    MhtExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, mhtMetaData_1.mhtExportOptionsSerializationInfo, refs);
    };
    MhtExportOptions.prototype.getInfo = function () {
        return mhtMetaData_1.mhtExportOptionsSerializationInfo;
    };
    MhtExportOptions.prototype.isPropertyDisabled = function (name) {
        return ((name === 'pageRange') || (name === 'pageBorderWidth')) && ((this.htmlExportMode ? this.htmlExportMode() : metadata_1.htmlExportMode.defaultVal) === 'SingleFile');
    };
    return MhtExportOptions;
}());
exports.MhtExportOptions = MhtExportOptions;
var mhtMetaData_1 = __webpack_require__(32);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
exports.mhtExportOptionsSerializationInfoBase = [
    metadata_1.pageBorderColor,
    metadata_1.pageBorderWidth,
    metadata_1.pageRange,
    metadata_1.rasterizationResolution,
    metadata_1.expotOptionsTitle,
    metadata_1.characterSet,
    metadata_1.htmlTableLayout,
    metadata_1.useHRefHyperlinks,
    metadata_1.allowURLsWithJSContent,
    metadata_1.removeSecondarySymbols,
    metadata_1.exportWatermarks
];
exports.mhtExportOptionsSerializationInfo = [metadata_1.htmlExportMode, metadata_1.inlineCss].concat(exports.mhtExportOptionsSerializationInfoBase);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var pdfMetaData_1 = __webpack_require__(62);
var PdfExportOptions = (function () {
    function PdfExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    PdfExportOptions.from = function (model, serializer) {
        return new PdfExportOptions(model || {}, serializer);
    };
    PdfExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, pdfMetaData_1.pdfExportOptionsSerializationInfo, refs);
    };
    PdfExportOptions.prototype.isPropertyDisabled = function (propertyName) {
        var _pdfACompatibility = this.pdfACompatibility ? this.pdfACompatibility() : pdfMetaData_1.pdfACompatibility.defaultVal;
        var _pdfUACompatibility = this.pdfUACompatibility ? this.pdfUACompatibility() : pdfMetaData_1.pdfUACompatibility.defaultVal;
        if (propertyName === 'exportEditingFieldsToAcroForms')
            return _pdfACompatibility === pdfMetaData_1.pdfACompatibilityValues.PdfA1b;
        else if (propertyName === 'neverEmbeddedFonts')
            return _pdfACompatibility != pdfMetaData_1.pdfACompatibilityValues.None || _pdfUACompatibility != pdfMetaData_1.pdfUACompatibilityValues.None;
        else if (propertyName === 'pdfPasswordSecurityOptions' || propertyName === 'showPrintDialogOnOpen')
            return _pdfACompatibility != pdfMetaData_1.pdfACompatibilityValues.None;
    };
    PdfExportOptions.prototype.getInfo = function () {
        return pdfMetaData_1.pdfExportOptionsSerializationInfo;
    };
    PdfExportOptions.prototype.hasSensitiveData = function () {
        return this.pdfPasswordSecurityOptions && this.pdfPasswordSecurityOptions.hasSensitiveData();
    };
    return PdfExportOptions;
}());
exports.PdfExportOptions = PdfExportOptions;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
var PdfExportDocumentOptions = (function () {
    function PdfExportDocumentOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    PdfExportDocumentOptions.from = function (model, serializer) {
        return new PdfExportDocumentOptions(model || {}, serializer);
    };
    PdfExportDocumentOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, exports.pdfExportDocumentOptionsSerializationInfo, refs);
    };
    PdfExportDocumentOptions.prototype.getInfo = function () {
        return exports.pdfExportDocumentOptionsSerializationInfo;
    };
    return PdfExportDocumentOptions;
}());
exports.PdfExportDocumentOptions = PdfExportDocumentOptions;
exports.author = { propertyName: 'author', modelName: '@Author', displayName: 'Author', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Author', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') };
exports.application = { propertyName: 'application', modelName: '@Application', displayName: 'Application', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Application', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') };
exports.title = { propertyName: 'title', modelName: '@Title', displayName: 'Title', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Title', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') };
exports.subject = { propertyName: 'subject', modelName: '@Subject', displayName: 'Subject', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Subject', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') };
exports.pdfExportDocumentOptionsSerializationInfo = [
    exports.author, exports.application, exports.title, exports.subject,
    { propertyName: 'keywords', modelName: '@Keywords', displayName: 'Keywords', localizationId: 'DevExpress.XtraPrinting.PdfDocumentOptions.Keywords', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') }
];


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rtfMetaData_1 = __webpack_require__(14);
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var RtfExportOptions = (function () {
    function RtfExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    RtfExportOptions.from = function (model, serializer) {
        return new RtfExportOptions(model || {}, serializer);
    };
    RtfExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, rtfMetaData_1.rtfExportOptionsSerializationInfo, refs);
    };
    RtfExportOptions.prototype.getInfo = function () {
        return rtfMetaData_1.rtfExportOptionsSerializationInfo;
    };
    RtfExportOptions.prototype.isPropertyDisabled = function (name) {
        var exportMode = this.rtfExportMode ? this.rtfExportMode() : metadata_1.rtfExportMode.defaultVal;
        if (name === 'pageRange')
            return exportMode === 'SingleFile';
        else if (name === 'emptyFirstPageHeaderFooter' || name === 'exportPageBreaks' || name === 'keepRowHeight') {
            return exportMode === 'SingleFilePageByPage';
        }
    };
    return RtfExportOptions;
}());
exports.RtfExportOptions = RtfExportOptions;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var textMetaData_1 = __webpack_require__(67);
var analytics_utils_1 = __webpack_require__(0);
var TextExportOptions = (function () {
    function TextExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    TextExportOptions.from = function (model, serializer) {
        return new TextExportOptions(model || {}, serializer);
    };
    TextExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, textMetaData_1.textExportOptionsSerializationInfo, refs);
    };
    TextExportOptions.prototype.getInfo = function () {
        return textMetaData_1.textExportOptionsSerializationInfo;
    };
    return TextExportOptions;
}());
exports.TextExportOptions = TextExportOptions;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var XlsExportOptions = (function () {
    function XlsExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    XlsExportOptions.from = function (model, serializer) {
        return new XlsExportOptions(model || {}, serializer);
    };
    XlsExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, xlsMetaData_1.xlsExportOptionsSerializationInfo, refs);
    };
    XlsExportOptions.prototype.getInfo = function () {
        return xlsMetaData_1.xlsExportOptionsSerializationInfo;
    };
    XlsExportOptions.prototype.isPropertyDisabled = function (name) {
        return name === 'pageRange' && (this.xlsExportMode ? this.xlsExportMode() : metadata_1.xlsExportMode.defaultVal) === 'SingleFile';
    };
    XlsExportOptions.prototype.hasSensitiveData = function () {
        return !!(this.encryptionOptions && this.encryptionOptions.password());
    };
    return XlsExportOptions;
}());
exports.XlsExportOptions = XlsExportOptions;
var xlsMetaData_1 = __webpack_require__(15);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var XlsxExportOptions = (function () {
    function XlsxExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    XlsxExportOptions.from = function (model, serializer) {
        return new XlsxExportOptions(model || {}, serializer);
    };
    XlsxExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, xlsxMetaData_1.xlsxExportOptionsSerializationInfo, refs);
    };
    XlsxExportOptions.prototype.getInfo = function () {
        return xlsxMetaData_1.xlsxExportOptionsSerializationInfo;
    };
    XlsxExportOptions.prototype.isPropertyDisabled = function (name) {
        return name === 'pageRange' && (this.xlsxExportMode ? this.xlsxExportMode() : metadata_1.xlsxExportMode.defaultVal) === 'SingleFile';
    };
    XlsxExportOptions.prototype.hasSensitiveData = function () {
        return !!(this.encryptionOptions && this.encryptionOptions.password());
    };
    return XlsxExportOptions;
}());
exports.XlsxExportOptions = XlsxExportOptions;
var xlsxMetaData_1 = __webpack_require__(68);


/***/ }),
/* 39 */
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
var editingField_1 = __webpack_require__(16);
var _previewRequestWrapper_1 = __webpack_require__(9);
var _sortingProcessor_1 = __webpack_require__(73);
var _page_1 = __webpack_require__(43);
var settings_1 = __webpack_require__(6);
var _previewHandlersHelper_1 = __webpack_require__(76);
var _utils_1 = __webpack_require__(11);
var exportOptionsPreview_1 = __webpack_require__(77);
var _progressViewModel_1 = __webpack_require__(86);
var constants_1 = __webpack_require__(7);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var _previewBricksKeyboardHelper_1 = __webpack_require__(87);
var _exportHandler_1 = __webpack_require__(147);
var _utils_2 = __webpack_require__(12);
var ReportPreview = (function (_super) {
    __extends(ReportPreview, _super);
    function ReportPreview(handlerUri, previewRequestWrapper, previewHandlersHelper, callbacks, rtl, enableKeyboardSupport, exportSettings) {
        if (rtl === void 0) { rtl = false; }
        var _this = _super.call(this) || this;
        _this.enableKeyboardSupport = enableKeyboardSupport;
        _this.predefinedZoomLevels = ko.observableArray([5, 2, 1.5, 1, 0.75, 0.5, 0.25]);
        _this._pageWidth = ko.observable(818);
        _this._pageHeight = ko.observable(1058);
        _this._pageBackColor = ko.observable('');
        _this._currentReportId = ko.observable(null);
        _this._currentReportUrl = ko.observable(null);
        _this._currentDocumentId = ko.observable(null);
        _this._unifier = ko.observable('');
        _this._currentOperationId = ko.observable(null);
        _this._stopBuildRequests = {};
        _this._closeReportRequests = {};
        _this._closeDocumentRequests = {};
        _this._editingFields = ko.observable([]);
        _this._startBuildOperationId = '';
        _this._editingValuesSubscriptions = [];
        _this._drillDownState = [];
        _this._sortingState = [];
        _this._sortingProcessor = new _sortingProcessor_1.SortingProcessor(function () { return _this._sortingState || []; });
        _this._getBuildStatusDeferreds = [];
        _this._timeouts = [];
        _this._deferreds = [];
        _this.getSelectedContent = function (punctuationMark) {
            if (punctuationMark === void 0) { punctuationMark = ''; }
            var currentPage = _this.pages()[_this.pageIndex()];
            if (!currentPage || !currentPage.brickColumnWidthArray) {
                return '';
            }
            var activeBricks = [];
            var getActiveBricks = function (currentBrick, resultArray) {
                if (!currentBrick) {
                    return;
                }
                currentBrick.active() && currentBrick.genlIndex != -1 && activeBricks.push(currentBrick);
                currentBrick.bricks && currentBrick.bricks.length != 0 && currentBrick.bricks.forEach(function (innerBrick) { getActiveBricks(innerBrick, resultArray); });
            };
            getActiveBricks(currentPage.brick(), activeBricks);
            if (!activeBricks) {
                return '';
            }
            var sortedActiveBricks = [];
            var extendWithSpaces = function (width, text) {
                text = text ? text + punctuationMark : '';
                var spaceCount = width - text.length;
                for (var i = 0; i <= spaceCount; i++) {
                    text += ' ';
                }
                return text;
            };
            var firstUsedColumn = currentPage.brickColumnWidthArray.length, lastUsedColumn = -1;
            activeBricks.forEach(function (activeBrick) {
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
            sortedActiveBricks.forEach(function (row, index) {
                for (var c = firstUsedColumn; c <= lastUsedColumn; c++) {
                    result += extendWithSpaces(currentPage.brickColumnWidthArray[c], row[c]);
                }
                if (index != sortedActiveBricks.length - 1)
                    result += '\r\n';
            });
            return result;
        };
        _this.rtlReport = ko.observable(false);
        _this.currentPage = ko.observable(null);
        _this.originalParametersInfo = ko.observable(null);
        _this.pageIndex = ko.observable(-1);
        _this.showMultipagePreview = ko.observable(false);
        _this.documentMap = ko.observable();
        _this.exportOptionsModel = ko.observable();
        _this.pageLoading = ko.observable(false);
        _this.errorMessage = ko.observable('');
        _this.documentBuilding = ko.observable(false);
        _this.reportOpening = ko.observable(false);
        _this.pages = ko.observableArray([]).extend({ rateLimit: { timeout: 20, method: 'notifyWhenChangesStop' } });
        _this.isAutoFit = ko.observable(true);
        _this.autoFitBy = ko.observable(constants_1.ZoomAutoBy.WholePage);
        _this.exportDisabled = ko.pureComputed(function () {
            var inProgress = _this.progressBar.inProgress();
            var documentBuilding = _this.documentBuilding();
            return _this.pageIndex() === -1 || inProgress || documentBuilding;
        });
        _this._zoom = ko.observable(1);
        _this.zoom = ko.pureComputed({
            read: function () {
                var autoFitBy = _this.autoFitBy();
                if (autoFitBy != constants_1.ZoomAutoBy.None || _this._zoom() === 0) {
                    return autoFitBy;
                }
                return _this._zoom();
            },
            write: function (val) {
                if (val > 0) {
                    _this.autoFitBy(constants_1.ZoomAutoBy.None);
                    _this._zoom(val);
                }
                else {
                    _this.autoFitBy(val);
                }
            }
        });
        _this.editingFieldsProvider = function () { return _this._editingFields(); };
        _this._currentPageText = ko.pureComputed(function () {
            if (_this.pageIndex() === -1) {
                return analytics_utils_1.getLocalization('0 pages', 'ASPxReportsStringId.WebDocumentViewer_0Pages');
            }
            else {
                var ofText = analytics_utils_1.getLocalization('of', 'ASPxReportsStringId.ToolBarItemText_OfLabel');
                return (_this.pageIndex() + 1) + ' ' + ofText + ' ' + _this.pages().length;
            }
        });
        _this._raiseOnSizeChanged = function () { _this.onSizeChanged() && _this.onSizeChanged()(); };
        _this.previewSize = ko.observable(0);
        _this.onSizeChanged = ko.observable();
        _this.previewVisible = ko.observable(false);
        _this.editingFieldsHighlighted = ko.observable(false);
        _this.canSwitchToDesigner = true;
        _this.allowURLsWithJSContent = false;
        _this.zoomStep = ko.observable(0.05);
        _this._progressFirstTime = false;
        _this.emptyDocumentCaption = ko.pureComputed(function () {
            var parametersInfo = _this.originalParametersInfo();
            var parametersExist = parametersInfo && parametersInfo.parameters.some(function (x) { return x.Visible; });
            var newCaption = '';
            if (_this.documentBuilding()) {
                if (_this.currentPage()) {
                    if (!_this._progressFirstTime)
                        newCaption = analytics_internal_1.formatUnicorn(analytics_utils_1.getLocalization('Progress {0}%', 'ASPxReportsStringId.WebDocumentViewer_AriaDocumentProgress'), _this.progressBar.progress().toString());
                    else
                        newCaption = _this.progressBar.progress() + '%';
                    _this._progressFirstTime = true;
                }
                else {
                    newCaption = analytics_utils_1.getLocalization('Creating the document...', 'PreviewStringId.Msg_CreatingDocument');
                }
            }
            else if (parametersExist && !_this.documentId) {
                newCaption = analytics_utils_1.getLocalization('Waiting for parameter values...', 'PreviewStringId.Msg_WaitingForParameterValues');
            }
            else if (_this.documentId) {
                _this._progressFirstTime = false;
                if (_this.pageIndex() !== -1 && !_this.progressBar.inProgress()) {
                    newCaption = analytics_utils_1.getLocalization('Document is ready', 'ASPxReportsStringId.WebDocumentViewer_AriaDocumentReady');
                }
                else {
                    newCaption = analytics_utils_1.getLocalization('The document does not contain any pages.', 'PreviewStringId.Msg_EmptyDocument');
                }
            }
            else if (_this.reportOpening()) {
                _this._progressFirstTime = false;
                newCaption = analytics_utils_1.getLocalization('Loading...', 'AnalyticsCoreStringId.Loading');
            }
            else if (_this.errorMessage()) {
                newCaption = _this.errorMessage();
            }
            return newCaption;
        }).extend({ rateLimit: { timeout: 1000 } });
        _this.exportOptionsTabVisible = ko.observable(true);
        settings_1.HandlerUri(handlerUri || settings_1.HandlerUri());
        _this.progressBar = new _progressViewModel_1.ProgressViewModel(enableKeyboardSupport);
        _this.editingFieldChanged = callbacks && callbacks.editingFieldChanged;
        _this.previewHandlersHelper = previewHandlersHelper || new _previewHandlersHelper_1.PreviewHandlersHelper(_this);
        _this.requestWrapper = previewRequestWrapper || new _previewRequestWrapper_1.PreviewRequestWrapper(null, callbacks);
        _this.rtlViewer = rtl;
        _this.exportHandler = new _exportHandler_1.ExportHandler(exportSettings, _this);
        if (callbacks) {
            _this.customProcessBrickClick = callbacks.previewClick;
            _this.customizeExportOptions = callbacks.customizeExportOptions;
            _this.exportHandler.onExportCustomEvent = callbacks.onExport;
            _this._onGetBuildStatus = callbacks._onGetBuildStatus;
            _this._onGetDocumentDetails = callbacks._onGetDocumentDetails;
        }
        _this._disposables.push(settings_1.EditablePreviewEnabled.subscribe(function (newValue) { return !newValue && _this.editingFieldsHighlighted(false); }));
        _this._disposables.push(_this.documentBuilding.subscribe(function (newVal) {
            if (!newVal) {
                _this._unifier(_utils_1.generateGuid());
                var documentId = _this._currentDocumentId();
                var pageCount = _this.pages().length;
                for (var i = 0; i < pageCount; i++) {
                    var page = _this.pages()[i];
                    if (!page.pageLoading()) {
                        page.clearBricks();
                    }
                    page.updateSize(_this._zoom());
                    page.actualResolution = 0;
                    page.isClientVisible() && page._setPageImgSrc(documentId, _this._unifier(), _this._zoom());
                }
                if (callbacks && callbacks.documentReady && documentId) {
                    var self = _this;
                    setTimeout(function () {
                        callbacks.documentReady(documentId, self._currentReportId(), pageCount);
                    });
                }
            }
        }));
        _this._disposables.push(_this._currentDocumentId.subscribe(function (newVal) {
            _this._unifier(newVal ? _utils_1.generateGuid() : '');
        }));
        _this._disposables.push(_this.previewSize.subscribe(function () { return _this._raiseOnSizeChanged(); }));
        _this._disposables.push(_this.zoom);
        _this._disposables.push(_this.exportDisabled);
        _this._disposables.push(_this._currentPageText);
        _this._disposables.push(_this.progressBar);
        _this._disposables.push(_this.emptyDocumentCaption);
        _this._disposables.push(_this._zoom.subscribe(function () {
            if (_this.showMultipagePreview()) {
                _this.pages().forEach(function (page) {
                    page.updateSize(page.zoom());
                    page.isClientVisible(false);
                });
                _this._raiseOnSizeChanged();
            }
            else {
                var currentPage = _this.pages()[_this.pageIndex()];
                currentPage && currentPage.isClientVisible.notifySubscribers(currentPage.isClientVisible.peek());
            }
        }));
        _this._disposables.push(ko.computed(function () {
            var pagesArray = _this.pages();
            var pageIndex = _this.pageIndex();
            if (!pagesArray || pageIndex >= pagesArray.length)
                return;
            var currentPage = null;
            if (pageIndex >= 0)
                currentPage = pagesArray[pageIndex];
            if (currentPage != _this.currentPage.peek())
                _this.currentPage(currentPage);
        }));
        if (enableKeyboardSupport) {
            _this.previewBrickKeyboardHelper = new _previewBricksKeyboardHelper_1.PreviewBricksKeyboardHelper(_this);
            _this._disposables.push(_this.progressBar.visible, _this.previewBrickKeyboardHelper);
        }
        return _this;
    }
    ReportPreview.prototype._doDrillDown = function (drillDownKey) {
        this._drillDownState.forEach(function (x) { return x.Key === drillDownKey && (x.Value = !x.Value); });
        this.closeDocument();
        this.progressBar.complete();
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
    };
    ReportPreview.prototype._doSorting = function (sortData, shiftKey, ctrlKey) {
        if (!this._sortingProcessor.doSorting(sortData, shiftKey, ctrlKey))
            return;
        this.closeDocument();
        this.progressBar.complete();
        this.documentMap(null);
        this.pages().forEach(function (page) { return page._clear(); });
        this._startBuildRequest();
    };
    ReportPreview.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        (this._timeouts || []).forEach(function (tic) { return clearTimeout(tic); });
        (this._deferreds || []).forEach(function (deferred) { return deferred.reject(); });
        this.exportHandler && this.exportHandler.dispose();
        this.removeProperties();
        this._sortingProcessor = null;
    };
    ReportPreview.prototype.removeEmptyPages = function (all) {
        all && this.pages.removeAll();
        for (var idx = this.pages().length - 1; idx >= 0; idx--) {
            var tempPage = this.pages()[idx];
            (tempPage.isEmpty || tempPage.pageIndex === -1) && this.pages.remove(tempPage);
        }
    };
    ReportPreview.prototype._initialize = function () {
        this._drillDownState = [];
        this._sortingState = [];
        this.closeDocument();
        this._editingFields([]);
        this._editingValuesSubscriptions.forEach(function (item) { return item.dispose(); });
        this._editingValuesSubscriptions = [];
        this.documentMap(null);
        this.pageIndex(-1);
        this.pageLoading(true);
        this.errorMessage('');
        this.progressBar.complete();
        this._getBuildStatusDeferreds.forEach(function (a) { return a.reject(); });
        this._getBuildStatusDeferreds = [];
        this.pages().forEach(function (x) { return x.dispose(); });
        this.pages([this.createPage(-1, undefined, this.pageLoading)]);
        this.exportHandler.reportDisplayName(null);
    };
    ReportPreview.prototype.createPage = function (pageIndex, processClick, loading) {
        return new _page_1.PreviewPage(this, pageIndex, processClick, loading);
    };
    ReportPreview.prototype._cleanTabInfo = function () {
        this.exportOptionsModel(null);
        this.documentMap(null);
    };
    ReportPreview.prototype._clearReportInfo = function () {
        this._cleanTabInfo();
        this.closeReport();
        this.originalParametersInfo(null);
    };
    ReportPreview.prototype.createBrickClickProcessor = function (cyclePageIndex) {
        var _self = this;
        return function (brick, e) {
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
            var defaultHandler = function () {
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
                        var targetPage = _self.pages().filter(function (page) { return page.pageIndex === brickNavigation.pageIndex; })[0];
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
                                url = url.toLocaleLowerCase();
                            }
                            if (url === 'empty') {
                                return false;
                            }
                            return _self.allowURLsWithJSContent || (isUrlString && (url.indexOf('javascript:') === -1));
                        };
                        if (brickNavigation.url && validateUrl(brickNavigation.url)) {
                            _utils_2.safelyRunWindowOpen(brickNavigation.url, brickNavigation.target || '_blank');
                        }
                    }
                }
            };
            if (_self.customProcessBrickClick && _self.customProcessBrickClick(cyclePageIndex, brick, defaultHandler))
                return;
            defaultHandler();
        };
    };
    ReportPreview.prototype.delayedInit = function () {
        this.previewBrickKeyboardHelper && this.previewBrickKeyboardHelper.delayedInit();
    };
    ReportPreview.prototype.openReport = function (reportName) {
        this._clearReportInfo();
        var deferred = $.Deferred();
        this._deferreds.push(deferred);
        this._openReportOperationDeferred = deferred;
        this.requestWrapper.openReport(reportName).done(function (response) {
            deferred.resolve(response);
        }).fail(function (error) {
            deferred.reject(error);
        });
        return this.initialize(deferred.promise());
    };
    ReportPreview.prototype.drillThrough = function (customData, closeCurrentReport) {
        var _this = this;
        if (closeCurrentReport === void 0) { closeCurrentReport = true; }
        var deferred = $.Deferred();
        this.requestWrapper.drillThrough(customData).done(function (response) {
            if (closeCurrentReport) {
                _this._clearReportInfo();
                _this.initialize(deferred.promise());
            }
            deferred.resolve(response);
        }).fail(function (error) {
            deferred.reject(error);
        });
        return deferred.promise();
    };
    ReportPreview.prototype.initialize = function (initializeDataPromise) {
        var _this = this;
        this.reportOpening(true);
        this._currentReportId(null);
        this._currentReportUrl(null);
        this._currentDocumentId(null);
        this._initialize();
        var _initializeDeferred = $.Deferred();
        this._deferreds.push(_initializeDeferred);
        _initializeDeferred.done(function () {
            initializeDataPromise.done(function (previewInitialize) {
                _this.reportOpening(false);
                if (previewInitialize && !previewInitialize.error && (previewInitialize.reportId || previewInitialize.documentId)) {
                    _this._currentReportId(previewInitialize.reportId);
                    _this._currentReportUrl(previewInitialize.reportUrl);
                    _this._currentDocumentId(previewInitialize.documentId);
                    _this.rtlReport(previewInitialize.rtlReport);
                    var pageSettings = previewInitialize.pageSettings;
                    if (pageSettings) {
                        if (pageSettings.height)
                            _this._pageHeight(pageSettings.height);
                        if (pageSettings.width)
                            _this._pageWidth(pageSettings.width);
                        _this._pageBackColor((pageSettings.color && _this.readerMode) ? 'rgba(' + pageSettings.color + ')' : '');
                    }
                    var deserializedExportOptions = _this._deserializeExportOptions(previewInitialize.exportOptions, !_this.reportId && (!previewInitialize.documentData || !previewInitialize.documentData.canPerformContinuousExport));
                    var customizeExportOptionsArgs = { exportOptions: deserializedExportOptions, panelVisible: true };
                    _this.customizeExportOptions && _this.customizeExportOptions(customizeExportOptionsArgs);
                    _this.exportOptionsTabVisible(customizeExportOptionsArgs.panelVisible);
                    _this.exportOptionsModel(deserializedExportOptions);
                    _this.originalParametersInfo(previewInitialize.parametersInfo);
                    if (previewInitialize.documentId) {
                        _this.progressBar.startProgress(function () { _this.documentBuilding(false); }, function () { _this.stopBuild(); });
                        _this.documentBuilding(true);
                        var doGetBuildStatusFunc = _this.getDoGetBuildStatusFunc();
                        doGetBuildStatusFunc(previewInitialize.documentId);
                    }
                }
                else {
                    _this.pageLoading(false);
                    _this._processError(analytics_utils_1.getLocalization('The report preview initialization has failed', 'ASPxReportsStringId.WebDocumentViewer_InitializationError'), previewInitialize && previewInitialize.error);
                }
            }).fail(function (error) {
                _this.reportOpening(false);
                _this.removeEmptyPages();
            });
        }).resolve();
        return initializeDataPromise;
    };
    ReportPreview.prototype._deserializeExportOptions = function (exportOptionsString, isMerged) {
        var jsonModel = exportOptionsString && JSON.parse(exportOptionsString);
        return isMerged ? new exportOptionsPreview_1.ExportOptionsMergedPreview(jsonModel) : new exportOptionsPreview_1.ExportOptionsPreview(jsonModel);
    };
    ReportPreview.prototype.deactivate = function () {
        this._initialize();
        this._cleanTabInfo();
        this.closeReport();
        this._currentDocumentId(null);
        this._currentReportId(null);
        this._currentReportUrl(null);
        this.originalParametersInfo(null);
    };
    ReportPreview.prototype.startBuild = function () {
        this._initialize();
        return this._startBuildRequest();
    };
    ReportPreview.prototype.customDocumentOperation = function (customData, hideMessageFromUser) {
        var documentId = this._currentDocumentId();
        if (this.documentBuilding() || !documentId)
            return;
        var serializedExportOptions = this.exportOptionsModel() ? JSON.stringify(new analytics_utils_1.ModelSerializer().serialize(this.exportOptionsModel())) : null;
        var editingFields = this._editingFields && this._editingFields().map(function (item) { return item.editValue(); });
        var deferred = $.Deferred();
        this.requestWrapper.customDocumentOperation(documentId, serializedExportOptions, editingFields, customData, hideMessageFromUser)
            .done(function (response) {
            try {
                if (response && response.message) {
                    var handler = response.succeeded ? settings_1.MessageHandler().processMessage : settings_1.MessageHandler().processError;
                    handler(response.message, !hideMessageFromUser);
                }
            }
            finally {
                deferred.resolve(response);
            }
        })
            .fail(function (error) {
            var response = { message: analytics_utils_1.getLocalization('The requested document operation cannot be performed.', 'ASPxReportsStringId.WebDocumentViewer_CustomDocumentOperationsDenied_Error') };
            deferred.reject(response);
        });
        return deferred.promise();
    };
    ReportPreview.prototype._initializeStartBuild = function () {
        var _this = this;
        if (this.documentBuilding() || this._startBuildOperationId) {
            return false;
        }
        this._startBuildOperationId = _utils_1.generateGuid();
        this._currentDocumentId(null);
        this.progressBar.text(analytics_utils_1.getLocalization('Creating the document...', 'PreviewStringId.Msg_CreatingDocument'));
        this.progressBar.cancelText(analytics_utils_1.getLocalization('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'));
        this.progressBar.startProgress(function () { _this.documentBuilding(false); }, function () { _this.stopBuild(); });
        this.documentBuilding(true);
        return true;
    };
    ReportPreview.prototype._startBuildRequest = function () {
        var _this = this;
        if (!this._initializeStartBuild()) {
            return null;
        }
        var deffered = $.Deferred();
        var currentReportId = this._currentReportId();
        var startBuildOperationId = this._startBuildOperationId;
        var shouldIgnoreError = function () { return _this._closeReportRequests[currentReportId]; };
        this.requestWrapper.startBuildRequest(shouldIgnoreError)
            .done(function (response) { _this.previewHandlersHelper.doneStartBuildHandler(deffered, response, startBuildOperationId); })
            .fail(function (error) { _this.previewHandlersHelper.errorStartBuildHandler(deffered, error); });
        deffered.always(function () { return _this._startBuildOperationId = ''; });
        return deffered.promise();
    };
    ReportPreview.prototype.getBuildStatus = function (documentId) {
        var _this = this;
        var deffered = $.Deferred();
        this._deferreds.push(deffered);
        var sessionDeffered = $.Deferred();
        this._getBuildStatusDeferreds.push(sessionDeffered);
        this._timeouts.push(setTimeout(function () {
            var ignorePredicate = function () { return _this._closeDocumentRequests[documentId]; };
            _this.requestWrapper.getBuildStatusRequest(documentId, ignorePredicate)
                .done(function (response) {
                sessionDeffered.resolve(response);
            })
                .fail(function (error) {
                sessionDeffered.reject(error);
            });
            sessionDeffered.done(function (response) {
                _this._onGetBuildStatus && _this._onGetBuildStatus(response);
                _this.previewHandlersHelper && _this.previewHandlersHelper.doneGetBuildStatusHandler(deffered, documentId, response, ignorePredicate);
            }).fail(function (error) {
                _this.previewHandlersHelper && _this.previewHandlersHelper.errorGetBuildStatusHandler(deffered, error, ignorePredicate);
            });
        }, 250));
        return deffered.promise();
    };
    ReportPreview.prototype.getDoGetBuildStatusFunc = function () {
        var _this = this;
        var preview = this;
        var doGetBuildStatus = function (documentId) {
            var promise = preview.getBuildStatus(documentId);
            promise.done(function (result) {
                if (documentId !== preview._currentDocumentId())
                    return;
                if (result && result.requestAgain && !preview._stopBuildRequests[documentId] && !preview._closeDocumentRequests[documentId]) {
                    var doStatusRequest = function () {
                        if (!preview._stopBuildRequests[documentId] && !preview._closeDocumentRequests[documentId]) {
                            doGetBuildStatus(documentId);
                        }
                    };
                    settings_1.PollingDelay() ? _this._timeouts.push(setTimeout(doStatusRequest, settings_1.PollingDelay())) : doStatusRequest();
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
                        preview.progressBar.complete();
                        _this._timeouts.push(setTimeout(preview._raiseOnSizeChanged, 1000));
                    }
                }
            });
        };
        return doGetBuildStatus;
    };
    ReportPreview.prototype.getDocumentData = function (documentId) {
        var _this = this;
        var ignoreErrorPredicate = function () { return _this._closeDocumentRequests[documentId]; };
        this.requestWrapper.getDocumentData(documentId, ignoreErrorPredicate)
            .done(function (response) {
            if (!response) {
                return;
            }
            _this._onGetDocumentDetails && _this._onGetDocumentDetails(response);
            _this.exportHandler.reportDisplayName(response.displayName);
            _this._drillDownState = response.drillDownKeys || [];
            _this._sortingState = response.sortingState || [];
            if (response.canPerformContinuousExport === false && _this.reportId) {
                var deserializedExportOptions = _this._deserializeExportOptions(response.exportOptions || {}, true);
                var customizeExportOptionsArgs = { exportOptions: deserializedExportOptions, panelVisible: true };
                _this.customizeExportOptions && _this.customizeExportOptions(customizeExportOptionsArgs);
                _this.exportOptionsTabVisible(customizeExportOptionsArgs.panelVisible);
                _this.exportOptionsModel(deserializedExportOptions);
            }
            _this.documentMap(response.documentMap);
            _this._editingValuesSubscriptions.forEach(function (item) { return item.dispose(); });
            _this._editingValuesSubscriptions = [];
            _this._editingFields((response.editingFields || []).map(function (item, index) {
                var field = _this.createEditingField(item, index);
                if (_this.editingFieldChanged) {
                    field.editingFieldChanged = _this.editingFieldChanged;
                }
                _this._editingValuesSubscriptions.push(field.editValue);
                return field;
            }));
        });
    };
    ReportPreview.prototype.exportDocumentTo = function (format, inlineResult) {
        if (!this._currentDocumentId())
            return;
        var serializedExportOptions = this.exportOptionsModel() ? JSON.stringify(new analytics_utils_1.ModelSerializer().serialize(this.exportOptionsModel())) : null;
        var args = encodeURIComponent(JSON.stringify({
            documentId: this._currentDocumentId(),
            exportOptions: serializedExportOptions,
            format: format,
            inlineResult: inlineResult,
            editingFieldValues: this._editingFields && this._editingFields().map(function (item) {
                var editValue = item.editValue();
                if (typeof editValue === 'string')
                    return _utils_1.transformNewLineCharacters(editValue);
                return editValue;
            })
        }));
        this.exportHandler.export(args, settings_1.HandlerUri(), inlineResult);
    };
    ReportPreview.prototype.printDocument = function (pageIndex) {
        if (!this._currentDocumentId())
            return;
        var exportOptions = new exportOptionsPreview_1.ExportOptionsPreview({});
        exportOptions.pdf['showPrintDialogOnOpen'] = true;
        pageIndex = parseInt(pageIndex);
        if ((!!pageIndex && pageIndex > 0 || pageIndex === 0) && (this.pages().length > pageIndex)) {
            (exportOptions.pdf['pageRange'] = pageIndex + 1);
        }
        var serializedExportOptions = JSON.stringify(new analytics_utils_1.ModelSerializer().serialize(exportOptions));
        var args = encodeURIComponent(JSON.stringify({
            documentId: this._currentDocumentId(),
            exportOptions: serializedExportOptions,
            format: 'printpdf',
            inlineResult: true,
            editingFieldValues: this._editingFields && this._editingFields().map(function (item) { return item.editValue(); })
        }));
        this.exportHandler.export(args, settings_1.HandlerUri(), true, true);
    };
    ReportPreview.prototype.stopBuild = function (documentId) {
        var id = documentId || this._currentDocumentId();
        if (!id) {
            this._startBuildOperationId && (this._stopBuildRequests[this._startBuildOperationId] = true);
            return;
        }
        this._stopBuildRequests[id] = true;
        this.progressBar.complete();
        this.requestWrapper.stopBuild(id);
    };
    ReportPreview.prototype.closeDocument = function (documentId) {
        var _documentId = documentId || this._currentDocumentId();
        if (!_documentId) {
            this._startBuildOperationId && (this._closeDocumentRequests[this._startBuildOperationId] = true);
            return;
        }
        this._closeDocumentRequests[_documentId] = true;
        this.progressBar.complete();
        this.requestWrapper.sendCloseRequest(_documentId);
    };
    ReportPreview.prototype.closeReport = function () {
        this._openReportOperationDeferred && this._openReportOperationDeferred.reject();
        var currentReportId = this._currentReportId();
        if (!currentReportId) {
            return;
        }
        this._closeReportRequests[currentReportId] = true;
        this.requestWrapper.sendCloseRequest(null, currentReportId);
    };
    ReportPreview.prototype.goToPage = function (pageIndex, forcePageChanging, throttle) {
        var _this = this;
        if (!forcePageChanging && this.pageIndex.peek() === pageIndex || this.pages.peek().length === 0 || pageIndex < 0 || pageIndex >= this.pages.peek().length) {
            return;
        }
        if (this._goToPageTimer !== undefined) {
            clearTimeout(this._goToPageTimer);
        }
        var updateActivePage = function (activePageIndex) {
            _this.pages.peek().forEach(function (page) {
                var visible = page.pageIndex === activePageIndex;
                page.active(visible);
                page.isClientVisible(visible);
            });
            _this._goToPageTimer = undefined;
        };
        if (throttle)
            this._timeouts.push(this._goToPageTimer = setTimeout(function () { return updateActivePage(_this.pageIndex()); }, throttle));
        else
            updateActivePage(pageIndex);
        this.pageIndex(pageIndex);
    };
    ReportPreview.prototype.createEditingField = function (item, index) {
        return new editingField_1.EditingField(item, index, this.requestWrapper);
    };
    ReportPreview.prototype.currentPageAriaLabelImgAlt = function (index) {
        return analytics_internal_1.formatUnicorn(analytics_utils_1.getLocalization('Report Preview page {0} of {1}', 'ASPxReportsStringId.WebDocumentViewer_AriaLabelPreviewPage'), index + 1, this.pages().length);
    };
    ReportPreview.prototype._getErrorMessage = function (jqXHR) {
        var serverError = analytics_internal_1.getErrorMessage(jqXHR);
        if (!serverError)
            return jqXHR && jqXHR.responseJSON && jqXHR.responseJSON.result && jqXHR.responseJSON.result.faultMessage ?
                jqXHR.responseJSON.result.faultMessage :
                serverError;
        return serverError;
    };
    ReportPreview.prototype._processError = function (error, jqXHR, showForUser) {
        if (showForUser === void 0) { showForUser = true; }
        var prefix = error + ': ';
        var serverError = this._getErrorMessage(jqXHR);
        serverError && (error = prefix + serverError);
        settings_1.MessageHandler().processError(error, showForUser, serverError && prefix);
    };
    Object.defineProperty(ReportPreview.prototype, "reportId", {
        get: function () {
            return this._currentReportId();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPreview.prototype, "reportUrl", {
        get: function () {
            return this._currentReportUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPreview.prototype, "documentId", {
        get: function () {
            return this._currentDocumentId();
        },
        enumerable: true,
        configurable: true
    });
    return ReportPreview;
}(analytics_utils_1.Disposable));
exports.ReportPreview = ReportPreview;


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
var metadata_1 = __webpack_require__(13);
var editingFieldExtensions_1 = __webpack_require__(22);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
__webpack_require__(41);
var TextEditingFieldViewModelBase = (function () {
    function TextEditingFieldViewModelBase() {
    }
    TextEditingFieldViewModelBase.prototype.keypressAction = function (data, event) {
        var _this = this;
        analytics_internal_1.processTextEditorHotKeys(event, {
            esc: function () {
                _this.hideEditor(false);
            },
            ctrlEnter: function () {
                _this.hideEditor(true);
            }
        });
    };
    return TextEditingFieldViewModelBase;
}());
exports.TextEditingFieldViewModelBase = TextEditingFieldViewModelBase;
var TextEditingFieldViewModel = (function (_super) {
    __extends(TextEditingFieldViewModel, _super);
    function TextEditingFieldViewModel(field, pageWidth, pageHeight, zoom, bounds) {
        var _this = _super.call(this) || this;
        _this.template = 'dxrp-editing-field-container';
        _this.htmlValue = function () { return _this.field.htmlValue(); };
        _this.wordWrap = true;
        _this.active = ko.observable(false);
        var brickStyle = field.model().brickOptions;
        var style = { rtl: function () { return brickStyle.rtl; } };
        new analytics_utils_1.ModelSerializer().deserialize(style, JSON.parse(brickStyle.style), metadata_1.brickStyleSerializationsInfo);
        var cssCalculator = new analytics_internal_1.CssCalculator(style, ko.observable(!!brickStyle.rtlLayout));
        var padding = cssCalculator.paddingsCss();
        var verticalPadding = parseInt(padding['paddingTop']) + parseInt(padding['paddingBottom']);
        if (cssCalculator.borderCss()['borderTop'] !== 'none') {
            verticalPadding += style['borderWidth']();
        }
        if (cssCalculator.borderCss()['borderBottom'] !== 'none') {
            verticalPadding += style['borderWidth']();
        }
        _this.breakOffsetStyle = function () {
            return {
                top: bounds.offset.y * -100 / bounds.height + '%',
                left: bounds.offset.x * -100 / bounds.width + '%'
            };
        };
        _this.textStyle = function () { return $.extend({}, cssCalculator.fontCss(), cssCalculator.foreColorCss(), cssCalculator.textAlignmentCss()); };
        _this.zoom = zoom;
        _this.field = field;
        if (brickStyle.wordWrap != undefined) {
            _this.wordWrap = brickStyle.wordWrap;
        }
        _this.hideEditor = function (shouldCommit) {
            setTimeout(function () {
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
                _this.active(false);
            }, 1);
        };
        var editor = editingFieldExtensions_1.EditingFieldExtensions.instance().editor(field.editorName());
        var editorOptions = $.extend(true, {}, editor && editor.options || {});
        _this.data = {
            value: field._editorValue,
            hideEditor: _this.hideEditor,
            keypressAction: _this.keypressAction,
            textStyle: _this.textStyle,
            options: editorOptions,
            getOptions: function (templateOptions) { return $.extend({}, _this.data.options, templateOptions); }
        };
        var isCustomEditor = !!(editor && editor.template && editor.template !== 'dxrp-editing-field-datetime');
        if (!isCustomEditor) {
            var self = _this;
            _this.data.options = $.extend(true, {}, editorOptions, {
                value: field._editorValue,
                onFocusOut: function (e) {
                    self.hideEditor(true);
                }
            });
        }
        if (editor) {
            _this.editorTemplate = editor.template || 'dxrp-editing-field-mask';
        }
        else {
            _this.editorTemplate = 'dxrp-editing-field-text';
        }
        _this.containerStyle = ko.pureComputed(function () {
            return $.extend({
                width: bounds.width + 'px',
                height: bounds.height + 'px',
                'line-height': (bounds.height - verticalPadding) + 'px',
                top: bounds.top * 100 / pageHeight + '%',
                left: bounds.left * 100 / pageWidth + '%',
                cursor: _this.field.readOnly() ? 'auto' : 'text'
            }, _this.active() || !_this.htmlValue() ? cssCalculator.borderCss() : { border: 'none' }, isCustomEditor && _this.active() || (!!_this.htmlValue() && !_this.active()) ? { padding: 0 } : cssCalculator.paddingsCss(), { 'border-color': 'transparent' });
        });
        _this.borderStyle = ko.pureComputed(function () {
            if (style['borderWidth']() > 0 && style['borders']() !== 'None') {
                return {
                    left: '-' + style['borderWidth']() + 'px',
                    top: '-' + style['borderWidth']() + 'px',
                    paddingRight: (style['borderWidth']() * 2 - 2) + 'px',
                    paddingBottom: (style['borderWidth']() * 2 - 2) + 'px'
                };
            }
        });
        return _this;
    }
    TextEditingFieldViewModel.prototype.activateEditor = function (viewModel, e) {
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
            elementFocused = viewModel.options.onEditorShown(this.data, $(e && e.currentTarget).first().get(0));
        }
        if (!elementFocused) {
            var element = $(e && e.currentTarget).find(':focusable').eq(0)[0];
            element.focus();
            if (element['setSelectionRange']) {
                element['setSelectionRange'](element['value'].length, element['value'].length);
            }
        }
    };
    return TextEditingFieldViewModel;
}(TextEditingFieldViewModelBase));
exports.TextEditingFieldViewModel = TextEditingFieldViewModel;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = { default: "" };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_internal_1 = __webpack_require__(2);
var popup_1 = __webpack_require__(120);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
function rectIntersection(r1, r2) {
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);
}
var PreviewSelection = (function () {
    function PreviewSelection(_element, _page, _click) {
        var _this = this;
        this._element = _element;
        this._page = _page;
        this._click = _click;
        this._bodyEvents = {
            move: null,
            up: null
        };
        this.dispose = function () { return _this._dispose && _this._dispose(); };
        this._$element = $(this._element);
        var mousemove = function (event) { return _this._mouseMove(event); };
        var mouseup = function (event) { return _this._mouseUp(event); };
        var mousedown = function (event) { return _this._mouseDown(event); };
        this._element.addEventListener('mousemove', mousemove);
        this._element.addEventListener('mouseup', mouseup);
        this._element.addEventListener('mousedown', mousedown);
        this._dispose = function () {
            _this._element.removeEventListener('mousemove', mousemove);
            _this._element.removeEventListener('mouseup', mouseup);
            _this._element.removeEventListener('mousedown', mousedown);
            _this._dispose = null;
            _this._click = null;
            _this._page = null;
            _this._element = null;
            mousemove = null;
            mouseup = null;
            mousedown = null;
        };
    }
    PreviewSelection.prototype._updateSelectionContent = function (event) {
        if (this._startRect.left > event.pageX) {
            this._$selectionContent.css('left', event.pageX);
        }
        else {
            this._$selectionContent.css('right', window.innerWidth - event.pageX);
        }
        if (this._startRect.top > event.pageY) {
            this._$selectionContent.css('top', event.pageY);
        }
        else {
            this._$selectionContent.css('bottom', window.innerHeight - event.pageY);
        }
        var offset = this._$element.offset();
        var currentRect = {
            left: (parseInt(this._$selectionContent.css('left')) - offset.left) / this._$element.width() * 100,
            width: this._$selectionContent.width() / this._$element.width() * 100,
            top: (parseInt(this._$selectionContent.css('top')) - offset.top) / this._$element.height() * 100,
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
    };
    PreviewSelection.prototype._mouseMove = function (event) {
        var _this = this;
        if (!this._startRect || !this._page.active() || PreviewSelection.disabled)
            return;
        var leftButtonPressed = event.which === 1;
        if (leftButtonPressed) {
            if (!this._$selectionContent) {
                if (Math.abs(this._startRect.left - event.pageX) >= 2 || Math.abs(this._startRect.top - event.pageY) >= 2) {
                    PreviewSelection.started = true;
                    this._$selectionContent = $('<div>').appendTo(document.body);
                    this._$selectionContent.css(this._startRect);
                    this._$selectionContent.addClass('dxrd-selection-content ui-selectable-helper');
                    if (popup_1.default.prototype._zIndexInitValue)
                        this._$selectionContent.css('z-index', popup_1.default.prototype._zIndexInitValue() + 100);
                    this._updateSelectionContent(event);
                    this._bodyEvents.move = function (event) { return _this._mouseMove(event); };
                    this._bodyEvents.up = function (event) { return _this._mouseUp(event); };
                    document.body.addEventListener('mousemove', this._bodyEvents.move);
                    document.body.addEventListener('mouseup', this._bodyEvents.up);
                }
            }
            else {
                this._updateSelectionContent(event);
            }
        }
    };
    PreviewSelection.prototype._mouseUp = function (event) {
        this._$selectionContent && this._$selectionContent.remove();
        this._$selectionContent = null;
        this._bodyEvents.move && document.body.removeEventListener('mousemove', this._bodyEvents.move);
        this._bodyEvents.up && document.body.removeEventListener('mouseup', this._bodyEvents.up);
        this._startRect = null;
        setTimeout(function () {
            PreviewSelection.started = false;
        }, 1);
    };
    PreviewSelection.prototype._mouseDown = function (event) {
        if (PreviewSelection.disabled) {
            return;
        }
        this._startRect = {
            left: event.pageX,
            top: event.pageY,
            right: window.innerWidth - event.pageX,
            bottom: window.innerHeight - event.pageY
        };
        this._click(this._page.pageIndex);
    };
    PreviewSelection.started = false;
    PreviewSelection.disabled = false;
    return PreviewSelection;
}());
exports.PreviewSelection = PreviewSelection;
ko.bindingHandlers['brick-selection-prog'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var values = valueAccessor(), unwrappedValues = ko.unwrap(values);
        var selection = new PreviewSelection(element, unwrappedValues.page, unwrappedValues.click);
        analytics_internal_1.addDisposeCallback(element, function () {
            selection.dispose();
        });
    }
};


/***/ }),
/* 43 */
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
var _brickUtils_1 = __webpack_require__(74);
var _previewRequestWrapper_1 = __webpack_require__(9);
var _utils_1 = __webpack_require__(11);
var _previewSelection_1 = __webpack_require__(42);
var _utils_2 = __webpack_require__(12);
var settings_1 = __webpack_require__(6);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var _previewEditingFieldsKeyboardHelper_1 = __webpack_require__(75);
var PreviewPage = (function (_super) {
    __extends(PreviewPage, _super);
    function PreviewPage(preview, pageIndex, processClick, loading) {
        var _this = _super.call(this) || this;
        _this.isClientVisible = ko.observable(false);
        _this.originalHeight = ko.observable(0);
        _this.originalWidth = ko.observable(0);
        _this.loadingText = analytics_utils_1.getLocalization('Loading...', 'AnalyticsCoreStringId.Loading');
        _this.realZoom = ko.observable(1);
        _this.actualResolution = 0;
        _this.currentScaleFactor = ko.observable(1);
        _this.imageHeight = ko.observable(0);
        _this.imageWidth = ko.observable(0);
        _this.imageSrc = ko.observable('').extend({ rateLimit: { timeout: 100, method: 'notifyWhenChangesStop' } });
        _this.displayImageSrc = ko.observable('');
        _this.brick = ko.observable(null);
        _this.brickLoading = ko.observable(true);
        _this.bricks = ko.computed(function () {
            return _this.getBricksFlatList(_this.brick());
        });
        _this.activeBricks = ko.computed(function () {
            return _this.bricks().filter(function (x) { return x.active(); });
        });
        _this.clickableBricks = ko.computed(function () {
            return _this.bricks().filter(function (x) { return !!x.navigation; });
        });
        _this.active = ko.observable(false);
        _this.maxZoom = 0;
        _this.disableResolutionReduction = false;
        _this._lastZoom = 0;
        _this._selectedBrickPath = null;
        _this.pageIndex = pageIndex;
        _this.documentId = preview._currentDocumentId || ko.observable(null);
        _this._disposables.push(_this.imageSrc.subscribe(function (newVal) {
            var documentId = _this.documentId.peek();
            _this._lastGetPageDeferred && _this._lastGetPageDeferred.resolve(null);
            var currentGetPageDeferred = $.Deferred();
            currentGetPageDeferred
                .done(function (response) {
                if (!response)
                    return;
                _this.imageHeight(response.height);
                _this.imageWidth(response.width);
                _this.currentScaleFactor(_this._currentScaleFactor);
                _this.displayImageSrc('data:image/png;base64,' + response.base64string);
                _this._onPageLoaded(response, processClick, preview._editingFields);
            }).fail(function (_e) {
                _this._onPageLoadFailed();
            });
            var ignoreError = preview._closeDocumentRequests && (function () { return preview._closeDocumentRequests[documentId] || currentGetPageDeferred.state() != 'pending'; });
            _previewRequestWrapper_1.PreviewRequestWrapper.getPage(newVal, ignoreError)
                .done(function (response) {
                currentGetPageDeferred.resolve(response);
            }).fail(function (_e) {
                currentGetPageDeferred.reject(_e);
            });
            _this._lastGetPageDeferred = currentGetPageDeferred;
        }));
        var unifier = ko.isObservable(preview._unifier) ? preview._unifier : ko.observable(preview._unifier || _utils_1.generateGuid());
        _this.pageLoading = loading || ko.observable(true);
        _this.originalHeight(ko.unwrap(preview._pageHeight));
        _this.originalWidth(ko.unwrap(preview._pageWidth));
        _this.zoom = preview._zoom;
        _this.imageWidth(_this.originalWidth() * _this.zoom() / _this._getPixelRatio());
        _this.imageHeight(_this.originalHeight() * _this.zoom() / _this._getPixelRatio());
        _this._disposables.push(_this.isClientVisible.subscribe(function (newVal) {
            if (newVal) {
                _this._setPageImgSrc(_this.documentId(), unifier(), _this.zoom());
            }
        }));
        _this.color = ko.isObservable(preview._pageBackColor) ? preview._pageBackColor.peek() : '';
        _this.width = ko.pureComputed(function () {
            return _this.imageWidth() * _this.zoom() / _this.currentScaleFactor() / _this._getPixelRatio();
        });
        _this.height = ko.pureComputed(function () {
            return _this.imageHeight() * _this.zoom() / _this.currentScaleFactor() / _this._getPixelRatio();
        });
        _this.isEmpty = pageIndex === -1 && !_this.brick() && !processClick;
        _this.resetBrickRecusive = function (brick) {
            if (brick && brick.active) {
                brick.active(false);
                if (brick.bricks) {
                    brick.bricks.forEach(function (childBrick) { _this.resetBrickRecusive(childBrick); });
                }
            }
        };
        _this.selectBrick = function (path, ctrlKey) {
            if (_previewSelection_1.PreviewSelection.started)
                return;
            processClick && processClick(null);
            var currentBrick = _this.brick();
            !ctrlKey && _this.resetBrickRecusive(currentBrick);
            if (!path) {
                return;
            }
            if (!currentBrick) {
                _this._selectedBrickPath = path;
                return;
            }
            var pathElements = path.split(',');
            pathElements.forEach(function (el) {
                currentBrick = currentBrick.bricks[parseInt(el)];
            });
            currentBrick.active(true);
        };
        _this._disposables.push(ko.computed(function () {
            if (!_this.active()) {
                _this.resetBrickRecusive(_this.brick());
                _this._selectedBrickPath = null;
            }
        }));
        _this.editingFieldsKeyboardHelper = new _previewEditingFieldsKeyboardHelper_1.PreviewEditingFieldsKeyboardHelper();
        _this._disposables.push(_this.editingFieldsKeyboardHelper);
        return _this;
    }
    PreviewPage.prototype._initializeEditingFields = function (editingFieldBricks, previewEditngFields, originalWidth, originalHeight) {
        var _this = this;
        if (this.editingFields) {
            var oldEditFields = ko.unwrap(this.editingFields());
            if (oldEditFields && oldEditFields.length > 0) {
                oldEditFields.forEach(function (field) { return field.dispose && field.dispose(); });
            }
            this.editingFields.dispose();
        }
        this.editingFields = ko.pureComputed(function () {
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
                pageFieldViewModels.push(editingField.createViewModel(_this.zoom, originalWidth, originalHeight, function () { return allEditingFields; }, brick.absoluteBounds));
                brick.text = (function (brick) { return (function () { return _brickUtils_1.brickText(brick, function () { return allEditingFields; }); }); })(brick);
            }
            return pageFieldViewModels;
        });
    };
    PreviewPage.prototype._getPixelRatio = function () {
        return window['devicePixelRatio'] || 1;
    };
    PreviewPage.prototype._onPageLoaded = function (result, processClick, previewEditingFields) {
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
    };
    PreviewPage.prototype._onPageLoadFailed = function () {
        if (this._isDisposed)
            return;
        if (this.isClientVisible()) {
            this.pageLoading(false);
            this.pageIndex !== -1 && this.brickLoading(false);
        }
    };
    PreviewPage.prototype.updateSize = function (zoom) {
        var newResolution = _utils_2.getCurrentResolution(zoom);
        this.realZoom(newResolution / settings_1.previewDefaultResolution());
        return newResolution;
    };
    PreviewPage.prototype.clearBricks = function () {
        this.brickLoading(true);
    };
    PreviewPage.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._isDisposed = true;
    };
    PreviewPage.prototype._setPageImgSrc = function (documentId, unifier, zoom) {
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
        this.imageSrc(settings_1.HandlerUri() +
            '?actionKey=getPage&unifier=' + unifier +
            '&arg=' + encodeURIComponent(JSON.stringify({ pageIndex: this.pageIndex, documentId: documentId, resolution: imageResolution, includeBricks: this.brickLoading() })));
    };
    PreviewPage.prototype._clear = function () {
        this.pageIndex = -1;
        this.isClientVisible(false);
        this._setPageImgSrc(null, null, 1);
        this.actualResolution = 0;
    };
    PreviewPage.prototype.initializeBrick = function (brick, processClick, zoom, editingFieldBricks) {
        _brickUtils_1.initializeBrick(brick, processClick, this.zoom, editingFieldBricks);
        _brickUtils_1.updateBricksPosition(brick, brick.height, brick.width);
        this.brick(brick);
    };
    PreviewPage.prototype.clickToBrick = function (s, e) {
        var target = $(e.currentTarget);
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
    };
    PreviewPage.prototype.getBricksFlatList = function (brick) {
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
    };
    return PreviewPage;
}(analytics_utils_1.Disposable));
exports.PreviewPage = PreviewPage;


/***/ }),
/* 44 */
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
var previewParameter_1 = __webpack_require__(90);
var settings_1 = __webpack_require__(6);
var previewParameterHelper_1 = __webpack_require__(17);
var parameterHelper_1 = __webpack_require__(21);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var analytics_internal_1 = __webpack_require__(2);
var PreviewParametersViewModel = (function (_super) {
    __extends(PreviewParametersViewModel, _super);
    function PreviewParametersViewModel(reportPreview, parameterHelper, enableKeyboardSupport) {
        var _this = _super.call(this) || this;
        _this._parameters = [];
        _this._getParametersStateRequest = function (argsObject) {
            return analytics_internal_1.ajax(settings_1.HandlerUri(), 'getParametersState', encodeURIComponent(JSON.stringify(argsObject)), function (message, jqXHR, textStatus) { return _this._reportPreview._processError(analytics_utils_1.getLocalization('Cannot supply filtered lookup values to a report parameter editor', 'ASPxReportsStringId.WebDocumentViewer_GetLookUpValuesError'), jqXHR); });
        };
        _this._getDoneGetParametersStateHandler = function (changedParameter) {
            var parametersViewModel = _this;
            return function (response) {
                try {
                    if (!response || !response.parameters) {
                        return;
                    }
                    response.parameters.forEach(function (parametersInfoCollection) {
                        var matchedParameter = parametersViewModel._parameters.filter(function (p) { return p.path === parametersInfoCollection.Key; })[0];
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
        _this._getFailGetParametersStateHandler = function () {
            var parametersViewModel = _this;
            return function (jqXHRError) {
                parametersViewModel.parametersLoading(false);
            };
        };
        _this.restore = function () {
            if (_this.parametersLoading()) {
                return;
            }
            try {
                _this.parametersLoading(true);
                _this._parameters.forEach(function (parameter) {
                    if (!_this._shouldProcessParameter(parameter))
                        return;
                    parameter.lookUpValues(parameter._originalLookUpValues);
                    parameter.initialize(parameter._originalValue, _this.parameterHelper);
                });
            }
            finally {
                _this.parameterHelper.callbacks && _this.parameterHelper.callbacks.parametersReset && _this.parameterHelper.callbacks.parametersReset(_this, _this._parameters);
                _this.parametersLoading(false);
            }
        };
        _this.getInfo = ko.observable(null);
        _this.needToUpdateParameter = ko.observable(false);
        _this.isEmpty = ko.observable(true);
        _this.processInvisibleParameters = false;
        _this.parametersLoading = ko.observable(false);
        _this._reportPreview = reportPreview;
        _this.parameterHelper = parameterHelper || new previewParameterHelper_1.PreviewParameterHelper();
        _this.validateAndSubmit = function (params) {
            var result = params && params.validationGroup && params.validationGroup.validate && params.validationGroup.validate();
            if (!result || result.isValid)
                _this.submit();
        };
        _this.submit = function () {
            if (_this.parametersLoading())
                return;
            _this.parametersLoading(true);
            var promise = reportPreview.startBuild();
            promise && promise.done(function (val) { _this.parametersLoading(false); });
        };
        _this._disposables.push(reportPreview.originalParametersInfo.subscribe(function (originalParametersInfo) {
            _this.initialize(originalParametersInfo);
        }));
        _this.initialize(reportPreview.originalParametersInfo());
        var notEmpty = ko.pureComputed(function () { return !_this.isEmpty(); });
        _this.tabInfo = new analytics_utils_1.TabInfoWithPropertyGrid({
            text: 'Parameters',
            template: 'dxrd-preview-parameters',
            model: _this,
            keyboardHelper: enableKeyboardSupport ? new analytics_internal_1.AccordionKeyboardHelper() : undefined,
            localizationId: 'PreviewStringId.RibbonPreview_Parameters_Caption',
            imageClassName: 'parameters',
            imageTemplateName: 'dxrd-svg-tabs-parameters',
            visible: notEmpty
        });
        var popupVisibleSwitch = ko.observable(false);
        var popupVisible = ko.pureComputed({
            read: function () {
                return notEmpty() && popupVisibleSwitch();
            },
            write: function (newVal) {
                return popupVisibleSwitch(newVal);
            }
        });
        _this.popupInfo = { visible: popupVisible, notEmpty: notEmpty };
        _this._disposables.push(_this.popupInfo);
        return _this;
    }
    Object.defineProperty(PreviewParametersViewModel.prototype, "_visibleParameters", {
        get: function () {
            return this._parameters.filter(function (p) { return p.visible(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreviewParametersViewModel.prototype, "_processedParameters", {
        get: function () {
            return this._parameters.filter(function (p) { return p.visible() || p.hasVisibleExpression; });
        },
        enumerable: true,
        configurable: true
    });
    PreviewParametersViewModel.prototype._shouldProcessParameter = function (param) {
        return this.processInvisibleParameters || (param && (param.visible() || param.hasVisibleExpression));
    };
    PreviewParametersViewModel.prototype._convertLocalDateToUTC = function (localDate) {
        return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), localDate.getHours(), localDate.getMinutes(), localDate.getSeconds()));
    };
    PreviewParametersViewModel.prototype._add = function (parameterInfo) {
        var _this = this;
        var parameter = new previewParameter_1.PreviewParameter(parameterInfo, this.parameterHelper);
        this._parameters.push(parameter);
        var needToUpdateParameter = this.needToUpdateParameter() || (this._shouldProcessParameter(parameter)) &&
            (parameter.isFilteredLookUpSettings || parameter.hasBindedExpressions);
        this.needToUpdateParameter(needToUpdateParameter);
        if (this._shouldProcessParameter(parameter)) {
            this._disposables.push((parameter.isMultiValueWithLookUp ? parameter._value : parameter.value).subscribe(function (newValue) {
                if (!_this.parametersLoading() && _this.needToUpdateParameter()) {
                    _this.updateParameters(parameter);
                }
            }));
        }
        if (!parameterInfo.Visible && !parameterInfo.VisibleExpression) {
            return;
        }
        this.isEmpty(false);
        this[previewParameterHelper_1.PreviewParameterHelper.getPrivatePropertyName(parameter.path)] = parameter.value;
        var parameterPropertyName = previewParameterHelper_1.PreviewParameterHelper.fixPropertyName(parameter.path);
        if (parameter.isMultiValue || !parameter.isTypesCurrentType(parameter.intTypes.concat(parameter.floatTypes), parameter.type)) {
            this[parameterPropertyName] = parameter.value;
        }
        else {
            this[parameterPropertyName] = ko.pureComputed({
                read: function () {
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
                write: function (newVal) {
                    var expandValue = newVal;
                    if (parameter.allowNull && (expandValue === '' || expandValue === undefined)) {
                        expandValue = null;
                    }
                    else if (parameter.isTypesCurrentType(parameter.intTypes, parameter.type)) {
                        expandValue = analytics_internal_1.integerValueConverter(expandValue, '0');
                    }
                    else if (parameter.isTypesCurrentType(parameter.floatTypes, parameter.type)) {
                        expandValue = analytics_internal_1.floatValueConverter(expandValue, '0');
                    }
                    parameter.value(expandValue);
                }
            });
        }
    };
    PreviewParametersViewModel.prototype._setLookUpValues = function (parameter, lookUpValues, assignFirstLookUpValue) {
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
    };
    PreviewParametersViewModel.prototype._getParameterValuesContainedInLookups = function (parameterLookUpValues, parameter) {
        var _this = this;
        if (parameterLookUpValues) {
            if (parameter.isMultiValue) {
                var selectedItems = parameter.value().value();
                return selectedItems.filter(function (item) { return _this._filterParameterValuesContainsInLookups(parameterLookUpValues, parameter.type, item).length > 0; });
            }
            else {
                return this._filterParameterValuesContainsInLookups(parameterLookUpValues, parameter.type, parameter.value());
            }
        }
        return [];
    };
    PreviewParametersViewModel.prototype._filterParameterValuesContainsInLookups = function (parameterLookUpValues, parameterType, value) {
        var _this = this;
        return parameterLookUpValues.filter(function (x) {
            return previewParameter_1.PreviewParameter._compareValues(_this.parameterHelper.getValueConverter(parameterType)(x.Value), value);
        });
    };
    PreviewParametersViewModel.prototype.initialize = function (originalParametersInfo) {
        var _this = this;
        this._parameters.forEach(function (usedParameter) {
            delete _this[previewParameterHelper_1.PreviewParameterHelper.fixPropertyName(usedParameter.path)];
            delete _this[previewParameterHelper_1.PreviewParameterHelper.getPrivatePropertyName(usedParameter.path)];
        });
        this._parameters = [];
        if (!originalParametersInfo) {
            this.isEmpty(true);
            this.getInfo([]);
            return;
        }
        this.parameterHelper.initialize(originalParametersInfo.knownEnums);
        (originalParametersInfo.parameters || []).forEach(function (parameter) {
            _this._add(parameter);
        });
        if (this._visibleParameters.length === 0) {
            this.isEmpty(true);
        }
        var info = this._processedParameters.map(function (parameter) {
            return parameter.valueInfo();
        });
        var actualParametersInfo = [];
        this._parameters.forEach(function (x) { return actualParametersInfo.push({ value: x.value, parameterDescriptor: x.getParameterDescriptor(), lookUpValues: x.lookUpValues }); });
        if (this.parameterHelper.callbacks && this.parameterHelper.callbacks.parametersInitialized) {
            this.parameterHelper.callbacks.parametersInitialized(this, actualParametersInfo, this.submit, originalParametersInfo.shouldRequestParameters);
        }
        this.getInfo(info);
        if (this._reportPreview.documentId)
            return;
        if (!originalParametersInfo.shouldRequestParameters || this.isEmpty()) {
            this.submit();
        }
        else {
            this._reportPreview.removeEmptyPages();
            this.tabInfo.active(true);
            this.popupInfo.visible(true);
            this._reportPreview.pageLoading(false);
        }
    };
    PreviewParametersViewModel.prototype.getPathsAfterPath = function (parameterPath) {
        var _this = this;
        var startIndex = 0;
        for (var index = 0; index < this._parameters.length; index++) {
            if (this._parameters[index].path === parameterPath) {
                startIndex = index + 1;
                break;
            }
        }
        var paths = this._parameters
            .filter(function (param, index) {
            return _this._shouldProcessParameter(param) &&
                (param.hasBindedExpressions || param.isFilteredLookUpSettings && index >= startIndex);
        })
            .map(function (x) { return x.path; });
        return paths || [];
    };
    PreviewParametersViewModel.prototype.serializeParameters = function () {
        var params = [], self = this;
        this._parameters.forEach(function (parameter) {
            var convertItem = function (item) {
                return (parameter.type === 'System.DateTime' && !!item && (item instanceof Date)) ? self._convertLocalDateToUTC(item) : item;
            };
            var value = parameter.isMultiValueWithLookUp ? parameter._value() : parameter.value();
            if (parameter.allowNull) {
                if ((parameter.isMultiValue && Array.isArray(value) && value.length === 0) || value === '') {
                    value = null;
                }
            }
            params.push({ Value: parameterHelper_1.ParameterHelper.getSerializationValue(value, convertItem), Key: parameter.path, TypeName: parameter.type });
        });
        return params;
    };
    PreviewParametersViewModel.prototype.isPropertyDisabled = function (name) {
        return this.parametersLoading() ||
            !this._parameters.filter(function (parameter) { return previewParameterHelper_1.PreviewParameterHelper.getPrivatePropertyName(parameter.path) === name; })[0].enabled();
    };
    PreviewParametersViewModel.prototype.isPropertyVisible = function (name) {
        return this._parameters.filter(function (parameter) { return previewParameterHelper_1.PreviewParameterHelper.getPrivatePropertyName(parameter.path) === name; })[0].visible();
    };
    PreviewParametersViewModel.prototype.updateParameters = function (changedParameter) {
        var _this = this;
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
        setTimeout(function () {
            _this.parametersLoading(true);
            _this._getParametersStateRequest(argsObject)
                .done(_this._getDoneGetParametersStateHandler(changedParameter))
                .fail(_this._getFailGetParametersStateHandler());
        }, 10);
    };
    return PreviewParametersViewModel;
}(analytics_utils_1.Disposable));
exports.PreviewParametersViewModel = PreviewParametersViewModel;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
exports.viewerEditorTemplates = {
    multiValue: {
        header: 'dxrd-multivalue', extendedOptions: {
            onMultiTagPreparing: function (args) {
                var selectedItemsLength = args.selectedItems.length, totalCount = args.model.items.length;
                if (selectedItemsLength === totalCount) {
                    var stringFormat = analytics_utils_1.getLocalization('All selected ({0})', 'ASPxReportsStringId.WebDocumentViewer_MultiValueEditor_AllSelected');
                    args.text = analytics_internal_1.formatUnicorn(stringFormat, selectedItemsLength);
                }
            }
        }
    },
    rangeEditor: { header: 'dxrv-range-parameter' },
    multiValueEditable: { custom: 'dxrd-multivalue-editable' },
    selectBox: { header: 'dx-selectbox' }
};


/***/ }),
/* 46 */
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
var analytics_utils_1 = __webpack_require__(0);
var PreviewDisposableModel = (function (_super) {
    __extends(PreviewDisposableModel, _super);
    function PreviewDisposableModel(options) {
        var _this = _super.call(this) || this;
        _this.rootStyle = options.rootStyle;
        _this.reportPreview = options.reportPreview;
        _this.parametersModel = options.parametersModel;
        _this.exportModel = options.exportModel;
        _this.searchModel = options.searchModel;
        _this.rtl = options.rtl;
        _this._disposables.push(options.reportPreview);
        _this._disposables.push(options.parametersModel);
        _this._disposables.push(options.exportModel);
        _this._disposables.push(options.searchModel);
        return _this;
    }
    PreviewDisposableModel.prototype._addDisposable = function (object) {
        this._disposables.push(object);
    };
    PreviewDisposableModel.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeProperties();
    };
    PreviewDisposableModel.prototype.GetParametersModel = function () {
        return this.parametersModel;
    };
    PreviewDisposableModel.prototype.OpenReport = function (reportName) {
        this.reportPreview.openReport(reportName);
    };
    PreviewDisposableModel.prototype.Print = function (pageIndex) {
        this.reportPreview.printDocument(pageIndex);
    };
    PreviewDisposableModel.prototype.ExportTo = function (format, inlineResult) {
        if (!this.reportPreview.exportDisabled()) {
            this.reportPreview.exportDocumentTo(format || 'pdf', inlineResult);
        }
    };
    PreviewDisposableModel.prototype.GetCurrentPageIndex = function () {
        return this.reportPreview.pageIndex();
    };
    PreviewDisposableModel.prototype.GoToPage = function (pageIndex) {
        this.reportPreview.goToPage(pageIndex);
    };
    PreviewDisposableModel.prototype.Close = function () {
        this.reportPreview.deactivate();
    };
    PreviewDisposableModel.prototype.ResetParameters = function () {
        this.parametersModel && this.parametersModel.restore();
    };
    PreviewDisposableModel.prototype.StartBuild = function () {
        this.parametersModel && this.parametersModel.submit();
    };
    PreviewDisposableModel.prototype.PerformCustomDocumentOperation = function (customData, hideMessageFromUser) {
        return this.reportPreview.customDocumentOperation(customData, hideMessageFromUser);
    };
    return PreviewDisposableModel;
}(analytics_utils_1.Disposable));
exports.PreviewDisposableModel = PreviewDisposableModel;
var PreviewModel = (function (_super) {
    __extends(PreviewModel, _super);
    function PreviewModel(options) {
        var _this = _super.call(this, options) || this;
        _this.documentMapModel = options.documentMapModel;
        _this.tabPanel = options.tabPanel;
        _this.actionLists = options.actionLists;
        _this.accessibilityCompliant = options.accessibilityCompliant;
        _this._disposables.push(options.documentMapModel);
        _this._disposables.push(options.tabPanel);
        _this._disposables.push(options.actionLists);
        return _this;
    }
    return PreviewModel;
}(PreviewDisposableModel));
exports.PreviewModel = PreviewModel;


/***/ }),
/* 47 */
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
var _searchResultNavigator_1 = __webpack_require__(92);
var constants_1 = __webpack_require__(7);
var settings_1 = __webpack_require__(6);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var analytics_internal_1 = __webpack_require__(2);
var data_source_1 = __webpack_require__(123);
var _searchKeyboardHelper_1 = __webpack_require__(93);
var SearchViewModel = (function (_super) {
    __extends(SearchViewModel, _super);
    function SearchViewModel(reportPreview, enableKeyboardSupport) {
        var _this = _super.call(this) || this;
        _this._searchIgnoreObs = ko.observable(false);
        _this.itemClickAction = function (e) {
            _this.goToResult(e.data);
        };
        _this.actions = [];
        _this.focusRequested = ko.observable(true);
        _this.matchWholeWord = ko.observable(false);
        _this.matchCase = ko.observable(false);
        _this.searchUp = ko.observable(false);
        _this.searchText = ko.observable();
        _this.searchResult = ko.observable();
        _this.loading = ko.observable(false);
        _this._renderedSearchResult = ko.observable([]);
        _this.resetSearchResult();
        _this._resultNavigator = SearchViewModel.createResultNavigator(_this, reportPreview);
        _this.clean = function () { _this.searchText(''); };
        _this._disposables.push(reportPreview._currentDocumentId.subscribe(function (newVal) {
            _this.resetSearchResult();
        }));
        _this._disposables.push(reportPreview._currentReportId.subscribe(function (newVal) {
            _this.resetSearchResult();
        }));
        _this.findUp = function () { _this.searchUp(true); _this.findNext(); };
        _this.findDown = function () { _this.searchUp(false); _this.findNext(); };
        _this.goToResult = function (result) { _this._resultNavigator.goToResult(result.id); };
        var newSearch = function (text, matchCase, matchWholeWord) {
            _this._searchTimeout && clearTimeout(_this._searchTimeout);
            _this._searchTimeout = setTimeout(function () {
                _this._resultNavigator.currentResult(null);
                if (!text) {
                    reportPreview.pages() && reportPreview.pages()[reportPreview.pageIndex()] && reportPreview.pages()[reportPreview.pageIndex()].selectBrick('');
                    _this.searchResult([]);
                    return;
                }
                var mCase = _this.matchCase();
                text = mCase ? _this.searchText() : _this.searchText().toLocaleLowerCase();
                var cache = _this.matchWholeWord()
                    ? mCase ? _this._cachedWholeWordWithCaseRequests : _this._cachedWholeWordRequests
                    : mCase ? _this._cachedCaseSensitiveRequests : _this._cachedRequests;
                if (cache[text]) {
                    _this.loading(false);
                    _this.searchResult(cache[text]);
                    return;
                }
                _this.loading(true);
                _this._searchIgnoreObs(true);
                _this._searchIgnoreObs = ko.observable(false);
                var self = _this;
                (function (ignore) {
                    reportPreview.requestWrapper.findTextRequest(text, ignore).done(function (result) {
                        if (!ignore())
                            self.findTextRequestDone(result, cache[text]);
                    }).fail(function (error) {
                        if (!ignore()) {
                            self.searchResult([]);
                            self.loading(false);
                        }
                    });
                })(_this._searchIgnoreObs);
            }, 100);
        };
        _this.findNext = function () {
            if (_this.loading()) {
                return;
            }
            _this._resultNavigator.next(_this.searchUp()) || newSearch(_this.searchText(), _this.matchCase(), _this.matchWholeWord());
        };
        _this._disposables.push(_this.searchText.subscribe(function (newVal) { newSearch(newVal, _this.matchCase(), _this.matchWholeWord()); }), _this.matchCase.subscribe(function (newVal) { newSearch(_this.searchText(), newVal, _this.matchWholeWord()); }), _this.matchWholeWord.subscribe(function (newVal) { newSearch(_this.searchText(), _this.matchCase(), newVal); }));
        var disabled = ko.pureComputed(function () {
            var documentId = reportPreview['_currentDocumentId']();
            var pageIndex = reportPreview.pageIndex();
            return reportPreview.documentBuilding() || !documentId || pageIndex === -1;
        });
        var visible = ko.pureComputed(function () { return settings_1.SearchAvailable(); });
        _this._disposables.push(disabled, visible);
        _this.actions.push({
            id: constants_1.ActionId.Search,
            text: analytics_utils_1.getLocalization('Search', 'ASPxReportsStringId.SearchDialog_Header'),
            imageClassName: 'dxrd-image-search',
            imageTemplateName: 'dxrd-svg-preview-search',
            disabled: disabled,
            visible: visible,
            hasSeparator: true,
            hotKey: { ctrlKey: false, keyCode: 70 },
            clickAction: function () {
                if (!_this.tabInfo.active()) {
                    _this.tabInfo.active(true);
                }
                else {
                    _this.tabInfo.active.notifySubscribers(true);
                }
            }
        });
        _this.tabInfo = new analytics_utils_1.TabInfo({
            text: 'Search',
            template: 'dxrd-preview-search',
            model: _this,
            keyboardHelper: enableKeyboardSupport ? new _searchKeyboardHelper_1.SearchKeyboardHelper(_this) : undefined,
            localizationId: 'ASPxReportsStringId.SearchDialog_Header',
            imageClassName: 'search',
            imageTemplateName: 'dxrd-svg-preview-search',
            visible: ko.pureComputed(function () { return !disabled() && settings_1.SearchAvailable(); })
        });
        _this._disposables.push(_this.searchResult.subscribe(function (newVal) {
            if (newVal) {
                _this._renderedSearchResult(newVal.map(function (item) { return { data: item }; }));
            }
        }));
        _this._disposables.push(_this.tabInfo);
        var dataSource = null;
        _this._disposables.push(_this.searchResultDataSource = ko.pureComputed(function () {
            dataSource && dataSource.dispose();
            dataSource = new data_source_1.default({
                store: _this._renderedSearchResult(),
                paginate: _this._renderedSearchResult().length > 20,
                pageSize: 20
            });
            return dataSource;
        }));
        return _this;
    }
    SearchViewModel.prototype.resetSearchResult = function () {
        this._cachedRequests = {};
        this._cachedWholeWordRequests = {};
        this._cachedCaseSensitiveRequests = {};
        this._cachedWholeWordWithCaseRequests = {};
        this.searchResult([]);
        this.searchText('');
    };
    SearchViewModel.prototype.findTextRequestDone = function (result, cache) {
        this.loading(false);
        if (!result) {
            this.searchResult([]);
            return;
        }
        cache = (result.success ? result.matches : []) || [];
        this.searchResult(cache);
    };
    SearchViewModel.prototype.onItemRendered = function (e) {
        var _this = this;
        this._timeoutItemRendered && clearTimeout(this._timeoutItemRendered);
        this._timeoutItemRendered = setTimeout(function () {
            _this.tabInfo.keyboardHelper && _this.tabInfo.keyboardHelper.initialize();
        }, 100);
    };
    SearchViewModel.prototype.getActions = function (context) {
        return this.actions;
    };
    SearchViewModel.prototype.noResultText = function () {
        return analytics_internal_1.formatUnicorn(analytics_utils_1.getLocalization('No results found for {0}', 'ASPxReportsStringId.WebDocumentViewer_AriaSearchNoResults'), '"' + this.searchText() + '"');
    };
    Object.defineProperty(SearchViewModel.prototype, "disabled", {
        get: function () { return this.loading(); },
        enumerable: true,
        configurable: true
    });
    SearchViewModel.createResultNavigator = function (seacrhModel, reportPreview) {
        return new _searchResultNavigator_1.SearchResultNavigator(seacrhModel, reportPreview);
    };
    return SearchViewModel;
}(analytics_utils_1.Disposable));
exports.SearchViewModel = SearchViewModel;


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
var ko = __webpack_require__(1);
var constants_1 = __webpack_require__(7);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var ExportOptionsModel = (function (_super) {
    __extends(ExportOptionsModel, _super);
    function ExportOptionsModel(reportPreview, enableKeyboardSupport) {
        var _this = _super.call(this) || this;
        _this.actions = [];
        _this._reportPreview = reportPreview;
        var tabPanelVisible = ko.pureComputed(function () { return !!reportPreview.exportOptionsModel() && (!reportPreview.exportOptionsTabVisible || reportPreview.exportOptionsTabVisible()); });
        _this.tabInfo = new analytics_utils_1.TabInfo({
            text: 'Export Options',
            template: 'dxrd-preview-export-options',
            model: reportPreview.exportOptionsModel,
            keyboardHelper: enableKeyboardSupport ? new analytics_internal_1.AccordionKeyboardHelper() : undefined,
            localizationId: 'DevExpress.XtraPrinting.ExportOptions',
            imageClassName: 'properties',
            imageTemplateName: 'dxrd-svg-tabs-properties',
            visible: tabPanelVisible
        });
        var exportItems = ko.pureComputed(function () {
            var result = _this._getExportFormatItems();
            return [{
                    text: 'Export To',
                    textId: 'ASPxReportsStringId.WebDocumentViewer_ExportToText',
                    imageClassName: 'dxrd-image-export-to',
                    imageTemplateName: 'dxrd-svg-preview-export-export-to',
                    items: result
                }];
        });
        _this.actions.push({
            id: constants_1.ActionId.ExportTo,
            text: 'Export To',
            textId: 'ASPxReportsStringId.WebDocumentViewer_ExportToText',
            disabled: reportPreview.exportDisabled,
            visible: true,
            clickAction: function (model) {
                if (reportPreview.exportDisabled())
                    return;
                _this._exportDocumentByFormat(model.itemData.format);
            },
            items: exportItems,
            templateName: 'dxrd-preview-export-to',
            eventHandlers: new ExportOptionsEventHandlers()
        });
        _this._disposables.push(tabPanelVisible, _this.tabInfo, exportItems);
        return _this;
    }
    ExportOptionsModel.prototype._getExportFormatItems = function () {
        var result = [];
        var exportOptionsModel = this._reportPreview.exportOptionsModel();
        if (exportOptionsModel) {
            exportOptionsModel.pdf && result.push(constants_1.ExportFormatID.PDF);
            exportOptionsModel.xls && result.push(constants_1.ExportFormatID.XLS);
            exportOptionsModel.xlsx && result.push(constants_1.ExportFormatID.XLSX);
            exportOptionsModel.rtf && result.push(constants_1.ExportFormatID.RTF);
            exportOptionsModel.docx && result.push(constants_1.ExportFormatID.DOCX);
            exportOptionsModel.mht && result.push(constants_1.ExportFormatID.MHT);
            exportOptionsModel.html && result.push(constants_1.ExportFormatID.HTML);
            exportOptionsModel.textExportOptions && result.push(constants_1.ExportFormatID.Text);
            exportOptionsModel.csv && result.push(constants_1.ExportFormatID.CSV);
            exportOptionsModel.image && result.push(constants_1.ExportFormatID.Image);
        }
        return result;
    };
    ExportOptionsModel.prototype._exportDocumentByFormat = function (format) {
        format && this._reportPreview.exportDocumentTo(format);
    };
    ExportOptionsModel.prototype.getActions = function (context) {
        return this.actions;
    };
    ExportOptionsModel.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.disposeArray(this.actions);
        this.removeProperties();
    };
    return ExportOptionsModel;
}(analytics_utils_1.Disposable));
exports.ExportOptionsModel = ExportOptionsModel;
var ExportOptionsEventHandlers = (function () {
    function ExportOptionsEventHandlers() {
    }
    ExportOptionsEventHandlers.prototype.onSubmenuShowing = function (popupContainer, element) {
        var _this = this;
        return function (e) {
            e.submenu._overlay.option('container', popupContainer);
            e.submenu._overlay.option('focusStateEnabled', false);
            e.submenu._overlay.option('position', { my: 'left top', at: 'left bottom', of: element, collision: 'none', boundary: popupContainer });
            _this._menuButton = e.component.option('focusedElement');
        };
    };
    ExportOptionsEventHandlers.prototype.onSubmenuShown = function (e) {
        var submenu = e.submenu;
        submenu.registerKeyHandler('escape', function (e) { return submenu.hide(); });
        submenu.registerKeyHandler('leftArrow', function (e) { return submenu.hide(); });
        submenu.registerKeyHandler('rightArrow', function (e) { return submenu.hide(); });
    };
    ExportOptionsEventHandlers.prototype.onSubmenuHiding = function (e) {
        if (e.model.eventHandlers._menuButton) {
            e.component.option('focusedElement', e.model.eventHandlers._menuButton);
            e.component.focus();
        }
    };
    return ExportOptionsEventHandlers;
}());
exports.ExportOptionsEventHandlers = ExportOptionsEventHandlers;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _sizeUtils_1 = __webpack_require__(18);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
function getUpdateProgressBarCallback(progressBarSettings, designerModel, reportPreview, rootElement, $window) {
    if ($window === void 0) { $window = $(window); }
    var keepProgressBarVisible = !progressBarSettings || progressBarSettings.keepOnVisibleArea !== false;
    var position = _sizeUtils_1.stringToPosition(progressBarSettings && progressBarSettings.position);
    reportPreview.progressBar.setPosition(position);
    if (!keepProgressBarVisible)
        return $.noop;
    var $root = $(rootElement);
    var $progress = $root.find('.dxrd-preview-progress');
    var updateProgressBarPosition = _sizeUtils_1.getDockedElementCallback($progress, $root, $window, '.dxrd-preview-progress', position);
    designerModel._addDisposable(reportPreview.progressBar.visible.subscribe(function (isVisible) {
        isVisible && updateProgressBarPosition(rootElement);
    }));
    var wrappedUpdateProgressPosition = function () {
        if (reportPreview.progressBar && ko.unwrap(reportPreview.progressBar.visible))
            updateProgressBarPosition(rootElement);
    };
    window.addEventListener('scroll', wrappedUpdateProgressPosition);
    designerModel._addDisposable({
        dispose: function () {
            window.removeEventListener('scroll', wrappedUpdateProgressPosition);
        }
    });
    return wrappedUpdateProgressPosition;
}
exports.getUpdateProgressBarCallback = getUpdateProgressBarCallback;


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
var _searchViewModel_1 = __webpack_require__(47);
var settings_1 = __webpack_require__(6);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var text_box_1 = __webpack_require__(124);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var MobileSearchViewModel = (function (_super) {
    __extends(MobileSearchViewModel, _super);
    function MobileSearchViewModel(reportPreview, gallery) {
        var _this = _super.call(this, reportPreview) || this;
        _this.height = ko.observable(0);
        _this['_resultNavigator']['_disposables'].forEach(function (x) { x.dispose(); });
        var _galleryCurrentItemBlocksSubscription;
        var currentBlocksSubscribe = function (selectedIndex) {
            _this._killSubscription(_galleryCurrentItemBlocksSubscription);
            _galleryCurrentItemBlocksSubscription = gallery.items()[selectedIndex].blocks.subscribe(function (newBlocks) { return _this.updatePagesInBlocks(newBlocks); });
            _this.updatePagesInBlocks(gallery.items()[selectedIndex].blocks());
        };
        var _gallerySelectedIndexSubscription;
        var currentIndexSubscribe = function () {
            _this._killSubscription(_gallerySelectedIndexSubscription);
            _gallerySelectedIndexSubscription = gallery.selectedIndex.subscribe(function (newSelectedIndex) { return currentBlocksSubscribe(newSelectedIndex); });
            currentBlocksSubscribe(gallery.selectedIndex());
        };
        _this._disposables.push(gallery.items.subscribe(function (newItems) { return currentIndexSubscribe(); }));
        currentIndexSubscribe();
        _this._disposables.push(_this.searchResult.subscribe(function (newResult) {
            if (!newResult || newResult.length === 0) {
                reportPreview.availablePages(null);
                reportPreview.pages().forEach(function (page) { return page.resetBrickRecusive(page.brick()); });
            }
            else {
                reportPreview.availablePages(newResult.map(function (x) { return x.pageIndex; }));
            }
            var blocks = gallery.items()[gallery.selectedIndex()].blocks();
            blocks.forEach(function (block) {
                block.page && block.page.resetBrickRecusive(block.page.brick());
                _this._updateBricks(block.page, _this.searchResult());
            });
        }));
        _this.searchPanelVisible = reportPreview.searchPanelVisible;
        _this.editorVisible = ko.observable(false);
        _this._disposables.push(_this.searchPanelVisible.subscribe(function (newVal) {
            if (!newVal || !settings_1.SearchAvailable()) {
                _this.stopSearching();
            }
            else {
                _this.height(MobileSearchViewModel.maxHeight);
            }
        }));
        _this.enabled = settings_1.SearchAvailable;
        return _this;
    }
    MobileSearchViewModel.prototype.focusEditor = function (event) {
        if (this.searchPanelVisible()) {
            this.editorVisible(true);
            var previewSearch = $('.dxrdp-search-editor');
            var searchEditor = text_box_1.default['getInstance'](previewSearch.get(0));
            searchEditor.focus();
            setTimeout(function () {
                event.currentTarget.blur();
                searchEditor.focus();
            }, 1);
        }
    };
    MobileSearchViewModel.prototype._killSubscription = function (subscription) {
        var index = this._disposables.indexOf(subscription);
        if (index == -1)
            return;
        subscription && subscription.dispose();
        this._disposables.splice(index, 1);
    };
    MobileSearchViewModel.prototype._updateBricks = function (page, searchResult) {
        var _this = this;
        if (page.brick() && searchResult && searchResult.length > 0) {
            var results = searchResult.filter(function (x) { return x.pageIndex === page.pageIndex; });
            for (var i = 0; i < results.length; i++) {
                page.selectBrick(results[i].indexes, true);
            }
        }
        else {
            var subscription = page.brick.subscribe(function (newVal) {
                subscription.dispose();
                _this._updateBricks(page, _this.searchResult());
            });
        }
    };
    MobileSearchViewModel.prototype.updatePagesInBlocks = function (blocks) {
        var _this = this;
        blocks.forEach(function (block) {
            if (block.page && _this.searchResult() && _this.searchResult().length > 0) {
                _this._updateBricks(block.page, _this.searchResult());
            }
        });
    };
    MobileSearchViewModel.prototype.stopSearching = function () {
        this.height(0);
        this.editorVisible(false);
        this.searchResult(null);
    };
    MobileSearchViewModel.prototype.startSearch = function () {
        if (this.searchResult() === null)
            this.findNext();
    };
    MobileSearchViewModel.maxHeight = 80;
    return MobileSearchViewModel;
}(_searchViewModel_1.SearchViewModel));
exports.MobileSearchViewModel = MobileSearchViewModel;
var SearchBarModel = (function (_super) {
    __extends(SearchBarModel, _super);
    function SearchBarModel(viewModel, element, $searchText) {
        var _this = _super.call(this) || this;
        _this.viewModel = viewModel;
        _this._disposables.push(viewModel.height.subscribe(function (newValue) {
            if (!newValue) {
                element.style.display = 'none';
            }
            else {
                element.style.display = 'block';
            }
            $searchText.css({
                'opacity': Math.min((newValue / MobileSearchViewModel.maxHeight), 1)
            });
        }));
        return _this;
    }
    SearchBarModel.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.viewModel.stopSearching();
    };
    return SearchBarModel;
}(analytics_utils_1.Disposable));
exports.SearchBarModel = SearchBarModel;
ko.bindingHandlers['dxrdSearchBar'] = {
    init: function (element, valueAccessor) {
        var viewModel = ko.unwrap(valueAccessor());
        var $element = $(element);
        element.style.display = 'none';
        var $searchText = $element.find('.dxrdp-taptosearch-text');
        var searchBarModel = new SearchBarModel(viewModel, element, $searchText);
        analytics_internal_1.addDisposeCallback(element, function () {
            searchBarModel.dispose();
        });
    }
};


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
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var ParametersPopupModelBase = (function (_super) {
    __extends(ParametersPopupModelBase, _super);
    function ParametersPopupModelBase(formModel) {
        var _this = _super.call(this) || this;
        _this.formModel = formModel;
        _this._submit = function (params) {
            var result = params.validationGroup && params.validationGroup.validate && params.validationGroup.validate();
            if (!result || result.isValid) {
                _this.formModel.submit && _this.formModel.submit();
                _this.visible(false);
            }
        };
        _this._reset = function () {
            _this.formModel.reset && _this.formModel.reset();
        };
        _this._cancel = function () {
            _this.formModel.cancel && _this.formModel.cancel();
            _this.visible(false);
        };
        _this.showIcons = ko.observable(false);
        _this.className = '';
        _this.visible = formModel.visible;
        _this.cancelDisabled = ko.observable(false);
        _this.actionButtons = [
            { className: 'dxrdp-parameters-reset', text: analytics_utils_1.getLocalization('Reset', 'ASPxReportsStringId.ParametersPanel_Reset'), action: _this._reset, disabled: false, visible: !!formModel.reset, id: 'dxrv-mobile-reset' },
            { className: 'dxrdp-parameters-cancel', text: analytics_utils_1.getLocalization('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'), action: _this._cancel, disabled: _this.cancelDisabled, visible: true, id: 'dxrv-mobile-cancel' },
            { className: 'dxrdp-parameters-submit', text: analytics_utils_1.getLocalization('Submit', 'ASPxReportsStringId.ParametersPanel_Submit'), action: _this._submit, disabled: false, visible: true, id: 'dxrv-mobile-submit' }
        ];
        _this.actionIcons = [
            { className: 'dxrdp-parameters-reset dxrdp-image-parameters-reset', action: _this._reset, disabled: false, visible: !!formModel.reset },
            { className: 'dxrdp-parameters-cancel dxrdp-image-parameters-cancel', action: _this._cancel, disabled: _this.cancelDisabled, visible: true },
            { className: 'dxrdp-parameters-submit dxrdp-image-parameters-submit', action: _this._submit, disabled: false, visible: true }
        ];
        return _this;
    }
    ParametersPopupModelBase.prototype.cacheElementContent = function (element) {
        this._parametersButtonContaner = element;
        this.initVisibilityIcons();
    };
    ParametersPopupModelBase.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._parametersButtonContaner = null;
    };
    ParametersPopupModelBase.prototype.initVisibilityIcons = function () {
        if (!this._parametersButtonContaner)
            return;
        var result = this.showIcons();
        var nodeTop = this._parametersButtonContaner.offset().top;
        this._parametersButtonContaner.find('.dxrdp-parameter-action').each(function (_, el) {
            result = nodeTop !== el.getBoundingClientRect().top;
        });
        this.showIcons(result);
    };
    return ParametersPopupModelBase;
}(analytics_utils_1.Disposable));
exports.ParametersPopupModelBase = ParametersPopupModelBase;
var ParametersPopupModel = (function (_super) {
    __extends(ParametersPopupModel, _super);
    function ParametersPopupModel(model, _reportPreview) {
        var _this = _super.call(this, { visible: model.popupInfo.visible, submit: model.submit, reset: model.restore }) || this;
        _this.model = model;
        _this._reportPreview = _reportPreview;
        _this._disposables.push(ko.computed(function () {
            _this.cancelDisabled(!_this._reportPreview._currentDocumentId() || _this._reportPreview.pages().length === 0);
        }));
        _this.contentTemplate = 'dxrv-preview-parameters-mobile-content';
        _this.title = analytics_utils_1.getLocalization('Parameters', 'DevExpress.XtraReports.UI.XtraReport.Parameters');
        return _this;
    }
    return ParametersPopupModel;
}(ParametersPopupModelBase));
exports.ParametersPopupModel = ParametersPopupModel;
var DateRangeParemeterPopupModel = (function (_super) {
    __extends(DateRangeParemeterPopupModel, _super);
    function DateRangeParemeterPopupModel(model) {
        var _this = _super.call(this, {
            visible: model._popupVisible, cancel: function () {
                _this.model.startDate(_this._oldStart);
                _this.model.endDate(_this._oldEnd);
                _this.model.applyValue();
            }
        }) || this;
        _this.model = model;
        _this._dateEditorClassName = 'dxrv-daterange-editor-item';
        _this._dateButtonEditorClassName = 'dxrv-daterange-editor-button';
        _this.getStringDate = function (value) {
            return analytics_internal_1.formatDate(value());
        };
        _this.focusButton = function (e) {
            var $element = $(e.element);
            var dateEditor = $element.siblings('.' + _this._dateEditorClassName);
            var parent = $element.closest('.' + _this.className);
            parent.find('.' + _this._dateButtonEditorClassName).removeClass('dx-button-default');
            $element.addClass('dx-button-default');
            parent.find('.' + _this._dateEditorClassName).css('zIndex', 1);
            dateEditor.css('zIndex', 2);
        };
        var submitAction = _this.actionButtons.filter(function (action) { return action.id == 'dxrv-mobile-submit'; })[0];
        if (submitAction)
            submitAction.text = analytics_utils_1.getLocalization('OK', analytics_internal_1.StringId.DataAccessBtnOK);
        _this._disposables.push(_this.textRangeValue = ko.computed({
            read: function () { return _this.model._displayText(); },
            write: function (val) { _this.model.applyDate(val.range(), true); }
        }));
        _this._oldStart = _this.model.startDate();
        _this._oldEnd = _this.model.endDate();
        _this.contentTemplate = 'dxrv-preview-date-range-mobile';
        _this.title = analytics_utils_1.getLocalization('Date Range Parameter', 'AnalyticsCoreStringId.Mobile_DateRange_Title');
        _this.className = 'dxrv-preview-date-range-mobile-popup';
        return _this;
    }
    return DateRangeParemeterPopupModel;
}(ParametersPopupModelBase));
exports.DateRangeParemeterPopupModel = DateRangeParemeterPopupModel;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_internal_1 = __webpack_require__(2);
var ImageSource = (function () {
    function ImageSource(sourceType, data) {
        this.sourceType = sourceType;
        this.data = data;
    }
    ImageSource.prototype.getDataUrl = function () {
        switch (this.sourceType) {
            case 'svg':
                return 'data:image/svg+xml;charset=UTF-8;base64,' + encodeURI(this.data);
            case 'img':
                return 'data:image/x;base64,' + this.data;
        }
        if (this.sourceType === 'png' || this.sourceType === 'jpg' || this.sourceType === 'jpeg')
            return 'data:image/' + this.sourceType + ';base64,' + this.data;
    };
    ImageSource.parse = function (val) {
        var _a;
        var sourceType, data;
        _a = (val || '').split(','), sourceType = _a[0], data = _a[1];
        return sourceType && new ImageSource(sourceType, data);
    };
    ImageSource.toString = function (val) {
        return analytics_internal_1.formatUnicorn('{0},{1}', val.sourceType, val.data);
    };
    return ImageSource;
}());
exports.ImageSource = ImageSource;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(13);
var exportOptionsEventArgs_1 = __webpack_require__(54);
var analytics_localization_1 = __webpack_require__(137);
var analytics_internal_1 = __webpack_require__(2);
var localization = __webpack_require__(138);
var EventGenerator = (function () {
    function EventGenerator() {
    }
    EventGenerator.generateCustomizeLocalizationCallback = function (fireEvent) {
        return function (localizationCallbacks) {
            fireEvent('CustomizeLocalization', {
                LoadMessages: function (messages) {
                    if (!messages)
                        return;
                    if (typeof messages.then === 'function') {
                        localizationCallbacks.push(messages);
                    }
                    else {
                        analytics_localization_1.loadMessages(messages);
                    }
                },
                SetAvailableCultures: function (customCultures) {
                    var newCultures = {};
                    newCultures[metadata_1.defaultCulture] = metadata_1.availableCultures()[metadata_1.defaultCulture];
                    analytics_internal_1.extend(newCultures, customCultures);
                    metadata_1.availableCultures(newCultures);
                },
                WidgetLocalization: localization
            });
        };
    };
    EventGenerator.generateDesignerEvents = function (fireEvent) {
        var self = this;
        function customizeActions(actions) {
            fireEvent('CustomizeMenuActions', {
                Actions: actions,
                GetById: function (actionId) {
                    return actionId ? actions.filter(function (item) { return actionId === item.id; })[0] : null;
                }
            });
        }
        function beforeRender(designerModel) {
            fireEvent('BeforeRender', designerModel);
        }
        function customizeParameterEditors(parameter, info) {
            fireEvent('CustomizeParameterEditors', {
                parameter: parameter,
                info: info
            });
        }
        function customizeParameterLookUpSource(parameter, items) {
            var arg = {
                parameter: parameter,
                items: items,
                dataSource: null
            };
            fireEvent('CustomizeParameterLookUpSource', arg);
            return arg.dataSource;
        }
        function exitDesigner() {
            fireEvent('ExitDesigner');
        }
        function reportSaving(args) {
            var arg = {
                Url: args.url,
                Report: args.report,
                Cancel: args.cancel
            };
            fireEvent('ReportSaving', arg);
            args.cancel = arg.Cancel;
        }
        function reportSaved(args) {
            var arg = {
                Url: args.url,
                Report: args.report
            };
            fireEvent('ReportSaved', arg);
        }
        function reportOpened(args) {
            var arg = {
                Url: args.url,
                Report: args.report
            };
            fireEvent('ReportOpened', arg);
        }
        function reportOpening(args) {
            var arg = {
                Url: args.url,
                Report: args.report,
                Cancel: args.cancel
            };
            fireEvent('ReportOpening', arg);
            args.cancel = arg.Cancel;
        }
        function tabChanged(tab) {
            fireEvent('TabChanged', {
                Tab: tab
            });
        }
        function onServerError(args) {
            fireEvent('OnServerError', { Error: args });
        }
        function componentAdded(args) {
            fireEvent('ComponentAdded', { Model: args.model, Parent: args.parent });
        }
        function customizeParts(parts) {
            fireEvent('CustomizeElements', {
                Elements: parts,
                GetById: function (id) {
                    return id
                        ? parts.filter(function (item) { return id === item.id; })[0]
                        : null;
                }
            });
        }
        function customizeSaveDialog(popup) {
            fireEvent('CustomizeSaveDialog', {
                Popup: popup,
                Customize: function (template, model) {
                    popup.customize(template, model);
                }
            });
        }
        function customizeSaveAsDialog(popup) {
            fireEvent('CustomizeSaveAsDialog', {
                Popup: popup,
                Customize: function (template, model) {
                    popup.customize(template, model);
                }
            });
        }
        function customizeOpenDialog(popup) {
            fireEvent('CustomizeOpenDialog', {
                Popup: popup,
                Customize: function (template, model) {
                    popup.customize(template, model);
                }
            });
        }
        function customizeToolbox(controlsFactory) {
            fireEvent('CustomizeToolbox', {
                ControlsFactory: controlsFactory
            });
        }
        function customizeFieldListActions(item, actions) {
            fireEvent('CustomizeFieldListActions', {
                Item: item,
                Actions: actions
            });
        }
        function customizeWizard(type, wizard) {
            fireEvent('CustomizeWizard', {
                Type: type,
                Wizard: wizard
            });
        }
        function reportTabClosing(tab, deffered) {
            var args = {
                Tab: tab,
                ReadyToClose: deffered,
                Handled: false
            };
            fireEvent('ReportTabClosing', args);
            return args.Handled;
        }
        function reportTabClosed(tab) {
            fireEvent('ReportTabClosed', {
                Tab: tab
            });
        }
        return {
            customizeActions: customizeActions,
            reportTabClosing: reportTabClosing,
            reportTabClosed: reportTabClosed,
            customizeParameterEditors: customizeParameterEditors,
            customizeParameterLookUpSource: customizeParameterLookUpSource,
            exitDesigner: exitDesigner,
            reportSaving: reportSaving,
            reportSaved: reportSaved,
            reportOpening: reportOpening,
            reportOpened: reportOpened,
            tabChanged: tabChanged,
            onServerError: onServerError,
            customizeParts: customizeParts,
            componentAdded: componentAdded,
            customizeSaveDialog: customizeSaveDialog,
            customizeSaveAsDialog: customizeSaveAsDialog,
            customizeOpenDialog: customizeOpenDialog,
            customizeToolbox: customizeToolbox,
            customizeLocalization: EventGenerator.generateCustomizeLocalizationCallback(fireEvent),
            customizeFieldListActions: customizeFieldListActions,
            beforeRender: beforeRender,
            customizeWizard: customizeWizard
        };
    };
    EventGenerator.generatePreviewEvents = function (fireEvent, prefix) {
        function customizeParameterEditors(parameter, info) {
            fireEvent('CustomizeParameterEditors', { parameter: parameter, info: info });
        }
        function customizeParts(parts) {
            fireEvent([prefix, 'CustomizeElements'].join(''), {
                Elements: parts,
                GetById: function (templateId) {
                    return templateId ? parts.filter(function (item) { return templateId === item.templateName; })[0] : null;
                }
            });
        }
        function beforeRender(designerModel) {
            fireEvent('BeforeRender', designerModel);
        }
        function customizeActions(actions) {
            fireEvent([prefix, 'CustomizeMenuActions'].join(''), {
                Actions: actions,
                GetById: function (actionId) {
                    return actionId ? actions.filter(function (item) { return actionId === item.id; })[0] : null;
                }
            });
        }
        function customizeParameterLookUpSource(parameter, items) {
            var arg = {
                parameter: parameter,
                items: items,
                dataSource: null
            };
            fireEvent('CustomizeParameterLookUpSource', arg);
            return arg.dataSource;
        }
        function previewClick(pageIndex, brick, defaultHandler) {
            var arg = {
                PageIndex: pageIndex,
                Brick: brick,
                DefaultHandler: defaultHandler,
                GetBrickText: function () { return brick && brick.text(); },
                GetBrickValue: function (key) {
                    if (key === void 0) { key = 'value'; }
                    var contentValue = brick && brick.content && brick.content.filter(function (x) { return x.Key === key; })[0];
                    return contentValue && contentValue.Value;
                },
                Handled: false
            };
            fireEvent('PreviewClick', arg);
            return arg.Handled;
        }
        function parametersReset(model, parameters) {
            fireEvent([prefix, 'ParametersReset'].join(''), {
                ParametersViewModel: model,
                Parameters: parameters
            });
        }
        function parametersSubmitted(model, parameters) {
            fireEvent([prefix, 'ParametersSubmitted'].join(''), {
                ParametersViewModel: model,
                Parameters: parameters
            });
        }
        function parametersInitialized(model, info, submit, shouldRequestParameters) {
            fireEvent([prefix, 'ParametersInitialized'].join(''), {
                ParametersModel: model,
                ActualParametersInfo: info,
                Submit: submit,
                ShouldRequestParameters: shouldRequestParameters
            });
        }
        function editingFieldChanged(field, oldValue, newValue) {
            var arg = {
                Field: field,
                OldValue: oldValue,
                NewValue: newValue
            };
            fireEvent([prefix, 'EditingFieldChanged'].join(''), arg);
            return arg.NewValue;
        }
        function documentReady(documentId, reportId, pageCount) {
            fireEvent([prefix, 'DocumentReady'].join(''), {
                ReportId: reportId,
                DocumentId: documentId,
                PageCount: pageCount
            });
        }
        function onServerError(args) {
            fireEvent('OnServerError', { Error: args });
        }
        function onExport(args) {
            fireEvent([prefix, 'OnExport'].join(''), args);
        }
        function customizeExportOptions(options) {
            var arg = new exportOptionsEventArgs_1.CustomizeExportOptionsEventArgs(options);
            fireEvent([prefix, 'CustomizeExportOptions'].join(''), arg);
        }
        var result = {
            previewClick: previewClick,
            documentReady: documentReady,
            editingFieldChanged: editingFieldChanged,
            parametersSubmitted: parametersSubmitted,
            parametersInitialized: parametersInitialized,
            parametersReset: parametersReset,
            customizeParameterLookUpSource: customizeParameterLookUpSource,
            customizeParameterEditors: customizeParameterEditors,
            customizeActions: customizeActions,
            customizeParts: customizeParts,
            customizeExportOptions: customizeExportOptions,
            onServerError: onServerError,
            onExport: onExport
        };
        if (!prefix) {
            result['beforeRender'] = beforeRender;
            result['customizeLocalization'] = EventGenerator.generateCustomizeLocalizationCallback(fireEvent);
        }
        return result;
    };
    return EventGenerator;
}());
exports.EventGenerator = EventGenerator;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
var CustomizeExportOptionsEventArgs = (function () {
    function CustomizeExportOptionsEventArgs(options) {
        this._options = options;
    }
    CustomizeExportOptionsEventArgs.prototype.HideExportOptionsPanel = function () { this._options.panelVisible = false; };
    CustomizeExportOptionsEventArgs.prototype.HideFormat = function (format) { delete this._options.exportOptions[format.propertyName || format.format]; };
    CustomizeExportOptionsEventArgs.prototype.HideProperties = function (format) {
        var _this = this;
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        var patchPropName = function (propName, obj) {
            var info = obj.getInfo && obj.getInfo();
            if (info) {
                var p = info.filter(function (x) { return x.modelName === propName || x.modelName === '@' + propName; })[0];
                if (p)
                    return p.propertyName;
            }
            return propName;
        };
        var addPredicate = function (obj, propName) {
            propName = patchPropName(propName, obj);
            var oldPredicate = obj.isPropertyVisible;
            obj.isPropertyVisible =
                oldPredicate
                    ? (function (x) { return oldPredicate(x) && x !== propName; })
                    : (function (x) { return x !== propName; });
        };
        if (paths.length == 0) {
            addPredicate(this._options.exportOptions, format.format);
        }
        else {
            paths.forEach(function (property) {
                var path = Array.isArray(property)
                    ? property
                    : property.split('.');
                var obj = _this._options.exportOptions[format.format];
                while (path.length > 1) {
                    obj = ko.unwrap(obj[patchPropName(path[0], obj)]);
                    path.splice(0, 1);
                }
                addPredicate(obj, path[0]);
            });
        }
    };
    CustomizeExportOptionsEventArgs.prototype.GetExportOptionsModel = function (format) { return this._options.exportOptions[format.format]; };
    return CustomizeExportOptionsEventArgs;
}());
exports.CustomizeExportOptionsEventArgs = CustomizeExportOptionsEventArgs;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
exports.csvExportOptionsSerializationInfo = [
    metadata_1.textEncodingType,
    metadata_1.textExportMode,
    { propertyName: 'quoteStringsWithSeparators', modelName: '@QuoteStringsWithSeparators', displayName: 'Quote Strings with Separators', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.QuoteStringsWithSeparators', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    metadata_1.useCustomSeparator, metadata_1.csvTextSeparator,
    { propertyName: 'skipEmptyRows', modelName: '@SkipEmptyRows', displayName: 'Skip Empty Rows', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions.SkipEmptyRows', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    { propertyName: 'skipEmptyColumns', modelName: '@SkipEmptyColumns', displayName: 'Skip Empty Columns', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions.SkipEmptyColumns', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool }
];


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
var analytics_utils_1 = __webpack_require__(0);
var _utils_1 = __webpack_require__(11);
exports.editorTemplates = {
    csvSeparator: { header: 'dx-text',
        extendedOptions: { placeholder: ko.pureComputed(function () { return (_utils_1.cultureInfo['csvTextSeparator'] || '') + ' ' + analytics_utils_1.getLocalization('(Using System Separator)', 'PreviewStringId.ExportOption_CsvSeparator_UsingSystem'); }) }
    }
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
var DocxExportDocumentOptions = (function () {
    function DocxExportDocumentOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    DocxExportDocumentOptions.from = function (model, serializer) {
        return new DocxExportDocumentOptions(model || {}, serializer);
    };
    DocxExportDocumentOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, exports.docxExportDocumentOptionsSerializationInfo, refs);
    };
    DocxExportDocumentOptions.prototype.getInfo = function () {
        return exports.docxExportDocumentOptionsSerializationInfo;
    };
    return DocxExportDocumentOptions;
}());
exports.DocxExportDocumentOptions = DocxExportDocumentOptions;
exports.docxExportDocumentOptionsSerializationInfo = [
    { propertyName: 'title', modelName: '@Title', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Title', displayName: 'Title', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'subject', modelName: '@Subject', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Subject', displayName: 'Subject', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'keywords', modelName: '@Keywords', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Keywords', displayName: 'Keywords', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'category', modelName: '@Category', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Category', displayName: 'Category', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'comments', modelName: '@Comments', localizationId: 'DevExpress.XtraPrinitng.DocxDocumentOptions.Comments', displayName: 'Comments', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'author', modelName: '@Author', localizationId: 'DevExpress.XtraPrinting.DocxDocumentOptions.Author', displayName: 'Author', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
];


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
var AdditionalRecipientModel = (function () {
    function AdditionalRecipientModel(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    AdditionalRecipientModel.prototype.getInfo = function () {
        return exports.additionalRecipientSerializationsInfo;
    };
    AdditionalRecipientModel.createNew = function () {
        return new AdditionalRecipientModel({});
    };
    return AdditionalRecipientModel;
}());
exports.AdditionalRecipientModel = AdditionalRecipientModel;
exports.additionalRecipientSerializationsInfo = [
    { propertyName: 'ContactName', modelName: '@ContactName', displayName: 'ContactName', localizationId: 'DevExpress.XtraPrinting.Recipient.ContactName', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'Address', modelName: '@Address', displayName: 'Address', localizationId: 'DevExpress.XtraPrinting.Recipient.Address', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'Prefix', modelName: '@Prefix', displayName: 'Prefix', localizationId: 'DevExpress.XtraPrinting.Recipient.Prefix', defaultVal: 'SMTP:', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    {
        propertyName: 'fieldType', modelName: '@FieldType', displayName: 'Field Type', localizationId: 'DevExpress.XtraPrinting.Recipient.FieldType', defaultVal: 'TO', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), from: analytics_utils_1.fromEnum,
        valuesArray: [
            { value: 'TO', displayValue: 'TO', localizationId: 'DevExpress.XtraPrinting.RecipientFieldType.TO' },
            { value: 'CC', displayValue: 'CC', localizationId: 'DevExpress.XtraPrinting.RecipientFieldType.CC' },
            { value: 'BCC', displayValue: 'BCC', localizationId: 'DevExpress.XtraPrinting.RecipientFieldType.BCC' }
        ]
    },
];


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exportOptionsMetaData_1 = __webpack_require__(60);
var analytics_utils_1 = __webpack_require__(0);
var ExportOptions = (function () {
    function ExportOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    ExportOptions.from = function (model, serializer) {
        return new ExportOptions(model || {}, serializer);
    };
    ExportOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, exportOptionsMetaData_1.exportOptionsSerializationInfo, refs);
    };
    ExportOptions.prototype.getInfo = function () {
        return exportOptionsMetaData_1.exportOptionsSerializationInfo;
    };
    return ExportOptions;
}());
exports.ExportOptions = ExportOptions;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var csvExportOptions_1 = __webpack_require__(24);
var emailMetaData_1 = __webpack_require__(61);
var htmlExportOptions_1 = __webpack_require__(27);
var imageExportOptions_1 = __webpack_require__(29);
var mhtExportOptions_1 = __webpack_require__(31);
var pdfExportOptions_1 = __webpack_require__(33);
var printPreviewOptions_1 = __webpack_require__(65);
var rtfExportOptions_1 = __webpack_require__(35);
var textExportOptions_1 = __webpack_require__(36);
var xlsExportOptions_1 = __webpack_require__(37);
var xlsxExportOptions_1 = __webpack_require__(38);
var docxExportOptions_1 = __webpack_require__(25);
var analytics_widgets_1 = __webpack_require__(5);
exports.exportOptionsSerializationInfo = [
    { propertyName: 'csv', modelName: 'Csv', displayName: 'CSV Export Options', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions', from: csvExportOptions_1.CsvExportOptions.from, toJsonObject: csvExportOptions_1.CsvExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'email', modelName: 'Email', displayName: 'E-mail Options', localizationId: 'DevExpress.XtraPrinting.EmailOptions', editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor'), info: emailMetaData_1.emailOptionsSerializationInfo },
    { propertyName: 'html', modelName: 'Html', displayName: 'HTML Export Options', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptions', from: htmlExportOptions_1.HtmlExportOptions.from, toJsonObject: htmlExportOptions_1.HtmlExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'image', modelName: 'Image', displayName: 'Image Export Options', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions', from: imageExportOptions_1.ImageExportOptions.from, toJsonObject: imageExportOptions_1.ImageExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'mailMessage', modelName: 'MailMessage', displayName: 'Mail Message Export Options', localizationId: 'DevExpress.XtraPrinting.MailMessageExportOptions', from: mhtExportOptions_1.MhtExportOptions.from, toJsonObject: mhtExportOptions_1.MhtExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'mht', modelName: 'Mht', displayName: 'MHT Export Options', localizationId: 'DevExpress.XtraPrinting.MhtExportOptions', from: mhtExportOptions_1.MhtExportOptions.from, toJsonObject: mhtExportOptions_1.MhtExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'nativeFormat', modelName: 'NativeFormat', displayName: 'Native Format Options', localizationId: 'DevExpress.XtraPrinting.NativeFormatOptions', editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor'), info: emailMetaData_1.nativeFormatOptionsSerializationInfo },
    { propertyName: 'pdf', modelName: 'Pdf', displayName: 'PDF Export Options', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions', from: pdfExportOptions_1.PdfExportOptions.from, toJsonObject: pdfExportOptions_1.PdfExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'printPreview', modelName: 'PrintPreview', displayName: 'Print Preview Options', localizationId: 'DevExpress.XtraPrinting.PrintPreviewOptions', from: printPreviewOptions_1.PrintPreviewOptions.from, toJsonObject: printPreviewOptions_1.PrintPreviewOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'rtf', modelName: 'Rtf', displayName: 'RTF Export Options', localizationId: 'DevExpress.XtraPrinting.RtfExportOptions', from: rtfExportOptions_1.RtfExportOptions.from, toJsonObject: rtfExportOptions_1.RtfExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'textExportOptions', modelName: 'Text', displayName: 'Text Export Options', localizationId: 'DevExpress.XtraPrinting.TextExportOptions', from: textExportOptions_1.TextExportOptions.from, toJsonObject: textExportOptions_1.TextExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'xls', modelName: 'Xls', displayName: 'XLS Export Options', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions', from: xlsExportOptions_1.XlsExportOptions.from, toJsonObject: xlsExportOptions_1.XlsExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'xlsx', modelName: 'Xlsx', displayName: 'XLSx Export Options', localizationId: 'DevExpress.XtraPrinting.XlsxExportOptions', from: xlsxExportOptions_1.XlsxExportOptions.from, toJsonObject: xlsxExportOptions_1.XlsxExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'docx', modelName: 'Docx', displayName: 'Docx Export Options', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions', from: docxExportOptions_1.DocxExportOptions.from, toJsonObject: docxExportOptions_1.DocxExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') }
];


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var emailExportOptions_1 = __webpack_require__(58);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
exports.nativeFormatOptionsSerializationInfo = [
    { propertyName: 'compressed', modelName: '@Compressed', displayName: 'Compressed', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.Compressed', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    { propertyName: 'showOptionsBeforeSave', modelName: '@ShowOptionsBeforeSave', displayName: 'Show Options Before Save', localizationId: 'DevExpress.XtraPrinting.NativeFormatOptions.ShowOptionsBeforeSave', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool }
];
exports.additionalRecipients = { propertyName: 'additionalRecipients', modelName: 'AdditionalRecipients', displayName: 'Additional Recipients', localizationId: 'DevExpress.XtraPrinting.EmailOptions.AdditionalRecipients', array: true, editor: analytics_widgets_1.editorTemplates.getEditor('commonCollection'), addHandler: emailExportOptions_1.AdditionalRecipientModel.createNew, template: '#dxrd-commonCollectionItem' };
exports.emailOptionsSerializationInfo = [
    { propertyName: 'recipientName', modelName: '@RecipientName', displayName: 'Recipient Name', localizationId: 'DevExpress.XtraPrinting.EmailOptions.RecipientName', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'recipientAddress', modelName: '@RecipientAddress', displayName: 'Recipient Address', localizationId: 'DevExpress.XtraPrinting.EmailOptions.RecipientAddress', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'recipientAddressPrefix', modelName: '@RecipientAddressPrefix', displayName: 'Recipient Address Prefix', localizationId: 'DevExpress.XtraPrinting.EmailOptions.RecipientAddressPrefix', defaultVal: 'SMTP:', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'subject', modelName: '@Subject', displayName: 'Subject', localizationId: 'DevExpress.XtraPrinting.EmailOptions.Subject', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'body', modelName: '@Body', displayName: 'Body', localizationId: 'DevExpress.XtraPrinting.EmailOptions.Body', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    exports.additionalRecipients
];


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
var pdfExportDocumentOptions_1 = __webpack_require__(34);
var pdfPasswordSecurityOptions_1 = __webpack_require__(63);
exports.pdfACompatibilityValues = { None: 'None', PdfA1b: 'PdfA1b', PdfA2b: 'PdfA2b', PdfA3b: 'PdfA3b' };
exports.pdfACompatibility = {
    propertyName: 'pdfACompatibility', modelName: '@PdfACompatibility', displayName: 'PDF A Compatibility', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.PdfACompatibility', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: exports.pdfACompatibilityValues.None, from: analytics_utils_1.fromEnum,
    valuesArray: [
        { value: exports.pdfACompatibilityValues.None, displayValue: exports.pdfACompatibilityValues.None, localizationId: 'DevExpress.XtraPrinting.PdfACompatibility.None' },
        { value: exports.pdfACompatibilityValues.PdfA1b, displayValue: exports.pdfACompatibilityValues.PdfA1b, localizationId: 'DevExpress.XtraPrinting.PdfACompatibility.PdfA1b' },
        { value: exports.pdfACompatibilityValues.PdfA2b, displayValue: exports.pdfACompatibilityValues.PdfA2b, localizationId: 'DevExpress.XtraPrinting.PdfACompatibility.PdfA2b' },
        { value: exports.pdfACompatibilityValues.PdfA3b, displayValue: exports.pdfACompatibilityValues.PdfA3b, localizationId: 'DevExpress.XtraPrinting.PdfACompatibility.PdfA3b' }
    ]
};
exports.pdfUACompatibilityValues = { None: 'None', PdfUA1: 'PdfUA1' };
exports.pdfUACompatibility = {
    propertyName: 'pdfUACompatibility', modelName: '@PdfUACompatibility', displayName: 'PDF UA Compatibility', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.PdfUACompatibility', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: exports.pdfUACompatibilityValues.None, from: analytics_utils_1.fromEnum,
    valuesArray: [
        { value: exports.pdfUACompatibilityValues.None, displayValue: exports.pdfACompatibilityValues.None, localizationId: 'DevExpress.XtraPrinting.PdfUACompatibility.None' },
        { value: exports.pdfUACompatibilityValues.PdfUA1, displayValue: exports.pdfUACompatibilityValues.PdfUA1, localizationId: 'DevExpress.XtraPrinting.PdfUACompatibility.PdfUA1' }
    ]
};
exports.pdfExportOptionsSerializationInfo = [
    { propertyName: 'convertImagesToJpeg', modelName: '@ConvertImagesToJpeg', displayName: 'Convert Images to Jpeg', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.ConvertImagesToJpeg', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    { propertyName: 'showPrintDialogOnOpen', modelName: '@ShowPrintDialogOnOpen', displayName: 'Show Print Dialog on Open', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.ShowPrintDialogOnOpen', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    { propertyName: 'neverEmbeddedFonts', modelName: '@NeverEmbeddedFonts', displayName: 'Never Embedded Fonts', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.NeverEmbeddedFonts', defaultVal: '', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    { propertyName: 'exportEditingFieldsToAcroForms', modelName: '@ExportEditingFieldsToAcroForms', displayName: 'Export Editing Fields To AcroForms', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.ExportEditingFieldsToAcroForms', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    {
        propertyName: 'imageQuality', modelName: '@ImageQuality', displayName: 'Image Quality', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.ImageQuality', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'), defaultVal: 'Highest', from: analytics_utils_1.fromEnum,
        valuesArray: [
            { value: 'Lowest', displayValue: 'Lowest', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.Lowest' },
            { value: 'Low', displayValue: 'Low', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.Low' },
            { value: 'Medium', displayValue: 'Medium', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.Medium' },
            { value: 'High', displayValue: 'High', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.High' },
            { value: 'Highest', displayValue: 'Highest', localizationId: 'DevExpress.XtraPrinting.PdfJpegImageQuality.Highest' }
        ]
    },
    exports.pdfACompatibility,
    metadata_1.pageRange,
    metadata_1.rasterizationResolution,
    metadata_1.rasterizeImages,
    { propertyName: 'documentOptions', modelName: 'DocumentOptions', displayName: 'Document Options', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions.DocumentOptions', from: pdfExportDocumentOptions_1.PdfExportDocumentOptions.from, toJsonObject: pdfExportDocumentOptions_1.PdfExportDocumentOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
    { propertyName: 'pdfPasswordSecurityOptions', modelName: 'PasswordSecurityOptions', displayName: 'Pdf Password Security Options', localizationId: 'DevExpress.XtraPrinting.PdfPasswordSecurityOptions', from: pdfPasswordSecurityOptions_1.PdfPasswordSecurityOptions.from, toJsonObject: pdfPasswordSecurityOptions_1.PdfPasswordSecurityOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') }
];


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_internal_1 = __webpack_require__(2);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
var pdfPermissionsOptions_1 = __webpack_require__(64);
var PdfPasswordSecurityOptions = (function () {
    function PdfPasswordSecurityOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    PdfPasswordSecurityOptions.from = function (model, serializer) {
        return new PdfPasswordSecurityOptions(model || {}, serializer);
    };
    PdfPasswordSecurityOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, exports.pdfExportPasswordSecurityOptionsSerializationInfo, refs);
    };
    PdfPasswordSecurityOptions.prototype.getInfo = function () {
        return exports.pdfExportPasswordSecurityOptionsSerializationInfo;
    };
    PdfPasswordSecurityOptions.prototype.isPropertyDisabled = function (name) {
        if (!(this.permissionsPassword && this.permissionsPassword())) {
            if (name === 'permissionsOptions')
                return true;
            if (name === exports.pdfEncryptionLevel.propertyName)
                return !(this.openPassword && this.openPassword());
            return false;
        }
    };
    PdfPasswordSecurityOptions.prototype.hasSensitiveData = function () {
        return !!(this.openPassword && this.openPassword() || this.permissionsPassword && this.permissionsPassword());
    };
    return PdfPasswordSecurityOptions;
}());
exports.PdfPasswordSecurityOptions = PdfPasswordSecurityOptions;
exports.pdfEncryptionLevel = {
    propertyName: 'encryptionLevel', modelName: '@EncryptionLevel', displayName: 'Encryption Level', localizationId: 'DevExpress.XtraPrinting.PdfPasswordSecurityOptions.EncryptionLevel', defaultVal: 'AES128', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'),
    valuesArray: [
        { value: 'ARC4', displayValue: 'ARC4', localizationId: 'DevExpress.XtraPrinting.PdfEncryptionLevel.ARC4' },
        { value: 'AES128', displayValue: 'AES128', localizationId: 'DevExpress.XtraPrinting.PdfEncryptionLevel.AES128' },
        { value: 'AES256', displayValue: 'AES256', localizationId: 'DevExpress.XtraPrinting.PdfEncryptionLevel.AES256' },
    ]
};
exports.pdfExportPasswordSecurityOptionsSerializationInfo = [
    analytics_internal_1.createPasswordSerializationInfo({ propertyName: 'openPassword', modelName: '@OpenPassword', displayName: 'Open Password', localizationId: 'DevExpress.XtraPrinting.PdfPasswordSecurityOptions.OpenPassword', defaultVal: '' }),
    exports.pdfEncryptionLevel,
    analytics_internal_1.createPasswordSerializationInfo({ propertyName: 'permissionsPassword', modelName: '@PermissionsPassword', displayName: 'Permissions Password', localizationId: 'DevExpress.XtraPrinting.PdfPasswordSecurityOptions.PermissionsPassword', defaultVal: '' }),
    { propertyName: 'permissionsOptions', modelName: 'PermissionsOptions', displayName: 'Pdf Permissions Options', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions', from: pdfPermissionsOptions_1.PdfPermissionsOptions.from, toJsonObject: pdfPermissionsOptions_1.PdfPermissionsOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') }
];


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
var PdfPermissionsOptions = (function () {
    function PdfPermissionsOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    PdfPermissionsOptions.from = function (model, serializer) {
        return new PdfPermissionsOptions(model || {}, serializer);
    };
    PdfPermissionsOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, exports.pdfExportPermissionsOptionsSerializationInfo, refs);
    };
    PdfPermissionsOptions.prototype.getInfo = function () {
        return exports.pdfExportPermissionsOptionsSerializationInfo;
    };
    return PdfPermissionsOptions;
}());
exports.PdfPermissionsOptions = PdfPermissionsOptions;
exports.pdfExportPermissionsOptionsSerializationInfo = [
    {
        propertyName: 'printingPermissions', modelName: '@PrintingPermissions', displayName: 'Printing Permissions', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions.PrintingPermissions', defaultVal: 'None', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'),
        valuesArray: [
            { value: 'None', displayValue: 'None', localizationId: 'DevExpress.XtraPrinting.PrintingPermissions.None' },
            { value: 'LowResolution', displayValue: 'LowResolution', localizationId: 'DevExpress.XtraPrinting.PrintingPermissions.LowResolution' },
            { value: 'HighResolution', displayValue: 'HighResolution', localizationId: 'DevExpress.XtraPrinting.PrintingPermissions.HighResolution' }
        ]
    },
    {
        propertyName: 'changingPermissions', modelName: '@ChangingPermissions', displayName: 'Changing Permissions', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions.ChangingPermissions', defaultVal: 'None', editor: analytics_widgets_1.editorTemplates.getEditor('combobox'),
        valuesArray: [
            { value: 'None', displayValue: 'None', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.None' },
            { value: 'InsertingDeletingRotating', displayValue: 'InsertingDeletingRotating', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.InsertingDeletingRotating' },
            { value: 'FillingSigning', displayValue: 'FillingSigning', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.FillingSigning' },
            { value: 'CommentingFillingSigning', displayValue: 'CommentingFillingSigning', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.CommentingFillingSigning' },
            { value: 'AnyExceptExtractingPages', displayValue: 'AnyExceptExtractingPages', localizationId: 'DevExpress.XtraPrinting.ChangingPermissions.AnyExceptExtractingPages' }
        ]
    },
    { propertyName: 'enableCopying', modelName: '@EnableCopying', displayName: 'Enable Copying', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions.EnableCopying', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    { propertyName: 'enableScreenReaders', modelName: '@EnableScreenReaders', displayName: 'Enable Screen Readers', localizationId: 'DevExpress.XtraPrinting.PdfPermissionsOptions.EnableScreenReaders', defaultVal: true, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool }
];


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var PrintPreviewOptions = (function () {
    function PrintPreviewOptions(model, serializer) {
        serializer = serializer || new analytics_utils_1.ModelSerializer();
        serializer.deserialize(this, model);
    }
    PrintPreviewOptions.from = function (model, serializer) {
        return new PrintPreviewOptions(model || {}, serializer);
    };
    PrintPreviewOptions.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, printPreviewMetaData_1.printPreviewOptionsSerializationInfo, refs);
    };
    PrintPreviewOptions.prototype.getInfo = function () {
        return printPreviewMetaData_1.printPreviewOptionsSerializationInfo;
    };
    return PrintPreviewOptions;
}());
exports.PrintPreviewOptions = PrintPreviewOptions;
var printPreviewMetaData_1 = __webpack_require__(66);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_widgets_1 = __webpack_require__(5);
exports.printPreviewOptionsSerializationInfo = [
    { propertyName: 'defaultFileName', modelName: '@DefaultFileName', displayName: 'Default File Name', localizationId: 'DevExpress.XtraPrinting.PrintPreviewOptions.DefaultFileName', defaultVal: 'Document', editor: analytics_widgets_1.editorTemplates.getEditor('text') }
];


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var analytics_utils_1 = __webpack_require__(0);
var analytics_widgets_1 = __webpack_require__(5);
exports.textExportOptionsSerializationInfo = [
    metadata_1.textEncodingType,
    { propertyName: 'quoteStringsWithSeparators', modelName: '@QuoteStringsWithSeparators', displayName: 'Quote Strings with Separators', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.QuoteStringsWithSeparators', defaultVal: false, editor: analytics_widgets_1.editorTemplates.getEditor('bool'), from: analytics_utils_1.parseBool },
    { propertyName: 'separator', modelName: '@Separator', displayName: 'Separator', localizationId: 'DevExpress.XtraPrinting.TextExportOptionsBase.Separator', defaultVal: 'TAB', editor: analytics_widgets_1.editorTemplates.getEditor('text') },
    metadata_1.textExportMode
];


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var xlsMetaData_1 = __webpack_require__(15);
exports.xlsxExportOptionsSerializationInfo = [metadata_1.xlsxExportMode].concat(xlsMetaData_1.xlsExportOptionsSerializationInfoCommon);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Locker = (function () {
    function Locker() {
        var _this = this;
        this.lock = function (action) {
            if (!_this.isUpdate) {
                _this.isUpdate = true;
                action();
                _this.isUpdate = false;
            }
        };
        this.isUpdate = false;
    }
    return Locker;
}());
exports.Locker = Locker;


/***/ }),
/* 70 */
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
var imageSource_1 = __webpack_require__(52);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_widgets_internal_1 = __webpack_require__(10);
var analytics_internal_1 = __webpack_require__(2);
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
})(GlyphStyle = exports.GlyphStyle || (exports.GlyphStyle = {}));
var CheckState;
(function (CheckState) {
    CheckState[CheckState["Unchecked"] = 0] = "Unchecked";
    CheckState[CheckState["Checked"] = 1] = "Checked";
    CheckState[CheckState["Indeterminate"] = 2] = "Indeterminate";
})(CheckState = exports.CheckState || (exports.CheckState = {}));
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
exports.createCustomGlyphStyleCss = createCustomGlyphStyleCss;
function getCheckBoxTemplate(style, state, customGlyph) {
    if (!$.isEmptyObject(customGlyph)) {
        return 'dxrd-checkboxcustomglyph';
    }
    else {
        return analytics_widgets_internal_1.SvgTemplatesEngine.getExistingTemplate('dxrd-svg-checkboxglyphs-' + style + '_' + state);
    }
}
exports.getCheckBoxTemplate = getCheckBoxTemplate;
var CheckEditingFieldViewModel = (function (_super) {
    __extends(CheckEditingFieldViewModel, _super);
    function CheckEditingFieldViewModel(field, pageWidth, pageHeight, zoom, editingFieldsProvider) {
        var _this = _super.call(this) || this;
        _this.focused = ko.observable(false);
        _this._editingFieldsProvider = editingFieldsProvider;
        _this.template = 'dxrp-editing-field-checkbox';
        _this.field = field;
        _this.zoom = zoom;
        var bounds = _this.field.model().bounds;
        var checkBounds = _this.field.model().brickOptions.checkBoxBounds;
        var rtl = _this.field.model().brickOptions.rtlLayout;
        _this.containerStyle = function () {
            return {
                height: bounds.height + 'px',
                width: bounds.width + 'px',
                top: bounds.top * 100 / pageHeight + '%',
                left: bounds.left * 100 / pageWidth + '%',
                cursor: _this.field.readOnly() ? 'auto' : 'pointer'
            };
        };
        _this.checkStyle = function () {
            var result = {
                height: checkBounds.height + 'px',
                width: checkBounds.width + 'px',
                top: checkBounds.top + 'px',
                left: (rtl ? (bounds.width - checkBounds.left - checkBounds.width) : checkBounds.left) + 'px'
            };
            return result;
        };
        _this._disposables.push(_this.customGlyphStyleCss = ko.pureComputed(function () {
            var imageSourceData = field.model().brickOptions.checkBoxGlyphOptions.customGlyphs.filter(function (item) { return item.key === _this.field.editValue(); })[0];
            if (!imageSourceData.value)
                return {};
            var imageSource = new imageSource_1.ImageSource(imageSourceData.value.imageType, imageSourceData.value.image);
            return createCustomGlyphStyleCss(imageSource);
        }));
        _this._disposables.push(_this.checkStateStyleIcon = ko.pureComputed(function () {
            return getCheckBoxTemplate(GlyphStyle[field.model().brickOptions.checkBoxGlyphOptions.glyphStyle], CheckState[_this.field.editValue()], _this.customGlyphStyleCss());
        }));
        return _this;
    }
    CheckEditingFieldViewModel.prototype._toggleCheckState = function () {
        if (this.field.editValue() === CheckState.Checked) {
            this.field.editValue(CheckState.Unchecked);
        }
        else {
            this.field.editValue(CheckState.Checked);
        }
    };
    CheckEditingFieldViewModel.prototype.onKeyDown = function (_, e) {
        if (e.key == analytics_internal_1.KeyboardEnum.Space) {
            this.toggleCheckState();
        }
        else {
        }
    };
    CheckEditingFieldViewModel.prototype.onBlur = function () {
        this.focused(false);
    };
    CheckEditingFieldViewModel.prototype.onFocus = function () {
        this.focused(true);
    };
    CheckEditingFieldViewModel.prototype.onClick = function (_, e) {
        e.target.focus();
        this.toggleCheckState();
        e.stopPropagation();
    };
    CheckEditingFieldViewModel.prototype.checked = function () {
        if (this.field.editValue() === CheckState.Checked) {
            return true;
        }
        if (this.field.editValue() === CheckState.Unchecked) {
            return false;
        }
    };
    CheckEditingFieldViewModel.prototype.toggleCheckState = function () {
        var _this = this;
        if (this.field.readOnly())
            return;
        if (!this.field.groupID()) {
            this._toggleCheckState();
        }
        else if (this.checked() === false) {
            this._editingFieldsProvider().forEach(function (value) {
                if (value.groupID() === _this.field.groupID()) {
                    value.editValue(CheckState.Unchecked);
                }
            });
            this._toggleCheckState();
        }
    };
    return CheckEditingFieldViewModel;
}(analytics_utils_1.Disposable));
exports.CheckEditingFieldViewModel = CheckEditingFieldViewModel;


/***/ }),
/* 71 */
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
var textEditingField_1 = __webpack_require__(40);
var metadata_1 = __webpack_require__(13);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
__webpack_require__(41);
var CharacterCombEditingFieldViewModel = (function (_super) {
    __extends(CharacterCombEditingFieldViewModel, _super);
    function CharacterCombEditingFieldViewModel(field, pageWidth, pageHeight, zoom, bounds) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.template = 'dxrp-character-comb-editing-field';
        _this.active = ko.observable(false);
        var brickStyle = field.model().brickOptions;
        var style = { rtl: function () { return brickStyle.rtl; } };
        new analytics_utils_1.ModelSerializer().deserialize(style, JSON.parse(brickStyle.style), metadata_1.brickStyleSerializationsInfo);
        var cssCalculator = new analytics_internal_1.CssCalculator(style, ko.observable(!!brickStyle.rtlLayout));
        var verticalPadding = parseInt(cssCalculator.paddingsCss()['paddingTop']) + parseInt(cssCalculator.paddingsCss()['paddingBottom']);
        var borderCss = cssCalculator.borderCss();
        if (borderCss['borderTop'] !== 'none') {
            verticalPadding += style['borderWidth']();
        }
        if (borderCss['borderBottom'] !== 'none') {
            verticalPadding += style['borderWidth']();
        }
        _this.textStyle = function () { return $.extend({}, cssCalculator.fontCss(), cssCalculator.foreColorCss(), cssCalculator.textAlignmentCss()); };
        _this.hideEditor = function (shouldCommit) {
            setTimeout(function () {
                if (shouldCommit) {
                    field.editValue(field._editorValue());
                }
                else {
                    field._editorValue(field.editValue());
                }
                _this.active(false);
            });
        };
        _this.containerStyle = ko.pureComputed(function () {
            return $.extend({
                width: bounds.width + 'px',
                height: bounds.height + 'px',
                'line-height': (bounds.height - verticalPadding) + 'px',
                top: bounds.top * 100 / pageHeight + '%',
                left: bounds.left * 100 / pageWidth + '%'
            }, cssCalculator.fontCss(), cssCalculator.foreColorCss());
        });
        var cellVerticalPadding = 0;
        var borderCellStyle = 'none';
        ['Left', 'Top', 'Right', 'Bottom'].forEach(function (item) {
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
        _this.cells = [];
        var rowTops = {};
        for (var i = 0; i < characterCombBounds.length; i++) {
            _this.cells.push({
                style: $.extend({
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
        var colsCount = _this.cells.length / rowsCount;
        CharacterCombEditingFieldViewModel.setText(_this.cells, style['textAlignment'](), style.rtl(), field.editValue.peek(), rowsCount, colsCount);
        field.editValue.subscribe(function (newValue) {
            CharacterCombEditingFieldViewModel.setText(_this.cells, style['textAlignment'](), style.rtl(), newValue, rowsCount, colsCount);
        });
        _this.zoom = zoom;
        return _this;
    }
    CharacterCombEditingFieldViewModel.prototype.activateEditor = function (viewModel, e) {
        if (!this.field.readOnly() && !this.active()) {
            this.active(true);
            var element = $(e && e.currentTarget).find(':focusable').eq(0)[0];
            element.focus();
            if (element['setSelectionRange']) {
                element['setSelectionRange'](element['value'].length, element['value'].length);
            }
        }
    };
    CharacterCombEditingFieldViewModel.setText = function (cells, textAlignment, rtl, text, rowsCount, colsCount) {
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
    };
    return CharacterCombEditingFieldViewModel;
}(textEditingField_1.TextEditingFieldViewModelBase));
exports.CharacterCombEditingFieldViewModel = CharacterCombEditingFieldViewModel;


/***/ }),
/* 72 */
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
var imageEditingField_1 = __webpack_require__(20);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var PopupImageEditingFieldViewModel = (function (_super) {
    __extends(PopupImageEditingFieldViewModel, _super);
    function PopupImageEditingFieldViewModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parentPopupClass = 'dxrp-editing-field-popup-container';
        _this._popupInitializedClass = 'dxrp-editing-field-popup-container-initialized';
        _this._getPopupContainer = function (element) { return $(element).closest('.' + _this.parentPopupClass); };
        _this._getPainterModel = function (element) {
            var $painter = _this._getPopupContainer(element).find('.dx-painter');
            return $painter.length ? ko.dataFor($painter[0]) : null;
        };
        _this._getPictureEditorModel = function (element) {
            var $popupEditing = $(element).find('.dx-picture-editing');
            return $popupEditing.length ? ko.dataFor($popupEditing[0]) : null;
        };
        _this._resetPictureEditor = function (pictureEditorModel) {
            pictureEditorModel.reset(_this.painterData.imageSource, _this.painterData.alignment, _this.painterData.sizeMode, _this.painterData.imageType);
            _this._resetPainter(pictureEditorModel.painter);
        };
        _this._resetPainter = function (painter) {
            painter.imagePainter.format(painter.imageFormatByType(_this.getImageType()));
            painter.imagePainter.sizeMode(_this.sizeMode());
            painter.imagePainter.alignment(_this.alignment());
            painter.imagePainter.image(_this.getImage());
            painter.refresh();
        };
        _this.template = 'dxrp-popup-editing-field-image';
        return _this;
    }
    PopupImageEditingFieldViewModel.prototype.isPopupActive = function (element) {
        return this.active() && this._getPopupContainer(element).hasClass(this._popupInitializedClass);
    };
    PopupImageEditingFieldViewModel.prototype.getPainter = function () {
        if (this.painterData == null) {
            this.painterData = {
                imageSource: this.getImage(),
                imageType: this.getImageType(),
                alignment: this.alignment(),
                sizeMode: this.sizeMode(),
                zoom: this.zoom,
                canDraw: ko.observable(false)
            };
        }
        return this.painterData;
    };
    PopupImageEditingFieldViewModel.prototype.getPopupData = function () {
        var _this = this;
        var _showContent = ko.observable(false);
        this.popupData = {
            contentData: this,
            paintData: this.painterData,
            contentTemplate: 'dxrp-editing-field-image-editor',
            isVisible: function (element) { return _this.isPopupActive(element); },
            getContainer: function () { return _this.popupTarget; },
            getPositionTarget: function (element) { return _this._getPopupContainer(element); },
            showContent: _showContent,
            onShown: function (e) {
                _showContent(true);
            },
            onHiding: function (e) {
                _this._getPictureEditorModel(e.component._$popupContent[0]).painter.signaturePainter.resetLastPosition();
                _this._resetPainter(_this._getPainterModel(e.element));
                document.activeElement['blur']();
                _this.active(false);
            },
            onContentReady: function (e) {
                _this._resetPainter(_this._getPainterModel(e.element));
                e.component && e.component.registerKeyHandler('tab', function (_) {
                    _this.popupData.onHiding(e);
                });
            },
            renderedHandler: function (element, model) {
                _this._resetPictureEditor(_this._getPictureEditorModel(element));
            }
        };
        return this.popupData;
    };
    PopupImageEditingFieldViewModel.prototype.activateEditor = function (viewModel, e) {
        if (!this.field.readOnly()) {
            var _parentPopup = this._getPopupContainer(e.target);
            if (!_parentPopup.hasClass(this._popupInitializedClass))
                _parentPopup.addClass(this._popupInitializedClass);
            this.active(true);
        }
    };
    return PopupImageEditingFieldViewModel;
}(imageEditingField_1.ImageEditingFieldViewModel));
exports.PopupImageEditingFieldViewModel = PopupImageEditingFieldViewModel;
exports.DefaultImageEditingFieldViewModel = PopupImageEditingFieldViewModel;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _previewRequestWrapper_1 = __webpack_require__(9);
var SortingProcessor = (function () {
    function SortingProcessor(_getSortingStage) {
        this._getSortingStage = _getSortingStage;
    }
    SortingProcessor.prototype.doSorting = function (sortData, shiftKey, ctrlKey) {
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
    };
    SortingProcessor.prototype._applySorting = function (sortData) {
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
                        value[index].sortOrder = _previewRequestWrapper_1.ColumnSortOrder.None;
                }
                return;
            }
        }
    };
    SortingProcessor.prototype._appendSorting = function (sortData) {
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
    };
    SortingProcessor.prototype._detachSorting = function (sortData) {
        var skipProcessing = false;
        var sortingStage = this._getSortingStage();
        for (var i = 0; i < sortingStage.length; i++) {
            if (sortingStage[i] && sortingStage[i].Key === sortData.target) {
                (sortingStage[i].Value || []).forEach(function (f) {
                    if (f.sortOrder === _previewRequestWrapper_1.ColumnSortOrder.None)
                        skipProcessing = true;
                    else
                        f.sortOrder = _previewRequestWrapper_1.ColumnSortOrder.None;
                });
                return;
            }
        }
        return skipProcessing;
    };
    SortingProcessor.prototype._changeSortOrder = function (fieldInfo) {
        fieldInfo.sortOrder = fieldInfo.sortOrder === _previewRequestWrapper_1.ColumnSortOrder.Ascending ? _previewRequestWrapper_1.ColumnSortOrder.Descending : _previewRequestWrapper_1.ColumnSortOrder.Ascending;
    };
    return SortingProcessor;
}());
exports.SortingProcessor = SortingProcessor;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
function convertToPercent(childSize, parentSize) {
    return childSize * 100 / parentSize + '%';
}
exports.convertToPercent = convertToPercent;
function getBrickValueForKey(brick, key) {
    if (key === void 0) { key = 'text'; }
    var brickTextProperty = brick.content && brick.content.filter(function (x) { return x.Key === key; })[0];
    return brickTextProperty && brickTextProperty.Value;
}
exports.getBrickValueForKey = getBrickValueForKey;
function brickText(brick, editingFieldsProvider) {
    var fields = editingFieldsProvider ? editingFieldsProvider() : [];
    if (brick.efIndex && brick.efIndex > 0 && brick.efIndex <= fields.length && fields[brick.efIndex - 1].type() === 'text') {
        return fields[brick.efIndex - 1].editValue();
    }
    else {
        return getBrickValueForKey(brick);
    }
}
exports.brickText = brickText;
function updateBricksPosition(brick, height, width) {
    if (!brick) {
        return;
    }
    brick[brick.rtl ? 'rightP' : 'leftP'] = convertToPercent(brick.left, width);
    brick.widthP = convertToPercent(brick.width, width);
    brick.topP = convertToPercent(brick.top, height);
    brick.heightP = convertToPercent(brick.height, height);
    brick.bricks && brick.bricks.forEach(function (childBrick) {
        updateBricksPosition(childBrick, height, width);
    });
}
exports.updateBricksPosition = updateBricksPosition;
function initializeBrick(brick, processClick, zoom, editingFieldBricks) {
    if (!brick) {
        return;
    }
    !!brick.active ? brick.active(false) : (brick.active = ko.observable(false));
    brick['onClick'] = function (e) { processClick && processClick(brick, e); };
    brick.bricks && brick.bricks.forEach(function (childBrick) {
        if (!childBrick)
            return;
        childBrick.top += brick.top;
        childBrick.left += brick.left;
        initializeBrick(childBrick, processClick, zoom, editingFieldBricks);
    });
    if (brick.efIndex > 0) {
        editingFieldBricks.push(brick);
    }
    brick.text = function () { return brickText(brick); };
    brick.accessibleDescription = getBrickValueForKey(brick, 'AccessibleDescription');
}
exports.initializeBrick = initializeBrick;


/***/ }),
/* 75 */
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
var ko = __webpack_require__(1);
var analytics_internal_1 = __webpack_require__(2);
var PreviewEditingFieldsKeyboardHelper = (function (_super) {
    __extends(PreviewEditingFieldsKeyboardHelper, _super);
    function PreviewEditingFieldsKeyboardHelper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controlElementClassName = 'dx-accessibility-editing-field-item';
        _this.accessibilityCompliantEnabled = true;
        return _this;
    }
    PreviewEditingFieldsKeyboardHelper.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setTabIndexes(0);
    };
    PreviewEditingFieldsKeyboardHelper.prototype.clickHandler = function () { };
    PreviewEditingFieldsKeyboardHelper.prototype.itemHandleEnterKey = function (e, index) {
        var item = this.controlElements[index];
        item.actionExecute(e);
        return true;
    };
    PreviewEditingFieldsKeyboardHelper.prototype.itemHandleSpaceKey = function (e, index) {
        return this.itemHandleEnterKey(e, index);
    };
    PreviewEditingFieldsKeyboardHelper.prototype.createControlElement = function (element, index) {
        return new PreviewEditingFieldsElement(element, ko.dataFor(element));
    };
    return PreviewEditingFieldsKeyboardHelper;
}(analytics_internal_1.AccessibilityKeyboardHelperBase));
exports.PreviewEditingFieldsKeyboardHelper = PreviewEditingFieldsKeyboardHelper;
var PreviewEditingFieldsElement = (function (_super) {
    __extends(PreviewEditingFieldsElement, _super);
    function PreviewEditingFieldsElement(element, model) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.model = model;
        _this._processFocus = true;
        _this._activateHandler = function (e) {
            if (_this.model.activateEditor && _this._processFocus) {
                _this.model.activateEditor(_this.model, { target: _this.element, currentTarget: _this.element });
                _this.element.setAttribute('tabindex', '-1');
                var subscription = _this.model.active.subscribe(function (value) {
                    if (!value) {
                        _this.element.setAttribute('tabindex', '0');
                        if (document.activeElement === document.body) {
                            _this._processFocus = false;
                            _this.element.focus();
                        }
                        subscription.dispose();
                    }
                });
                _this._disposables.push(subscription);
            }
        };
        _this._blur = function (e) {
            _this._processFocus = true;
        };
        element.addEventListener('focus', _this._activateHandler);
        element.addEventListener('blur', _this._blur);
        return _this;
    }
    PreviewEditingFieldsElement.prototype.dispose = function () {
        this.element.removeEventListener('focus', this._activateHandler);
        this.element.removeEventListener('blur', this._blur);
        _super.prototype.dispose.call(this);
    };
    PreviewEditingFieldsElement.prototype.actionExecute = function (e) {
        if (this.model.activateEditor)
            this._activateHandler(e);
        else if (this.model.onClick)
            this.model.onClick(this.model, e);
    };
    return PreviewEditingFieldsElement;
}(analytics_internal_1.AccessibilityControlElementBase));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var settings_1 = __webpack_require__(6);
var PreviewHandlersHelper = (function () {
    function PreviewHandlersHelper(preview) {
        this._preview = preview;
    }
    PreviewHandlersHelper.prototype.doneStartExportHandler = function (deffered, inlineResult, response, useSameTab, printable) {
        var _this = this;
        if (useSameTab === void 0) { useSameTab = false; }
        if (printable === void 0) { printable = false; }
        try {
            if (!response) {
                this._preview.progressBar.complete();
                return;
            }
            this._preview._currentOperationId(response);
            var progress = 0;
            var doGetExportStatus = function (operationId) {
                var promise = _this._preview.exportHandler.getExportStatus(operationId);
                promise.done(function (result) {
                    if (result && result.requestAgain) {
                        if (progress < result.progress) {
                            progress = result.progress;
                            _this._preview.exportHandler.updateExportStatus(result.progress);
                        }
                        var doStatusRequest = function () { doGetExportStatus(operationId); };
                        settings_1.PollingDelay() ? setTimeout(doStatusRequest, settings_1.PollingDelay()) : doStatusRequest();
                    }
                    else {
                        _this._preview.progressBar.complete();
                        if (!result.requestAgain && result.completed) {
                            _this._preview.exportHandler.updateExportStatus(result.progress);
                            _this._preview.exportHandler.getExportResult(operationId, inlineResult, useSameTab, result.token, printable, result.uri);
                        }
                    }
                });
            };
            doGetExportStatus(this._preview._currentOperationId());
        }
        finally {
            deffered.resolve(true);
            this._preview._startBuildOperationId = '';
        }
    };
    PreviewHandlersHelper.prototype.errorStartExportHandler = function (deffered, error) {
        this._preview.progressBar.complete();
    };
    PreviewHandlersHelper.prototype.doneExportStatusHandler = function (deffered, operationId, response) {
        try {
            if (!response) {
                deffered.resolve({ requestAgain: false });
                this._preview.progressBar.complete();
                return;
            }
            this._preview.progressBar && this._preview.progressBar.progress() < response.progress && this._preview.progressBar.progress(response.progress);
            deffered.resolve(response);
        }
        finally {
            if (!deffered.state || deffered.state() === 'pending') {
                deffered.resolve({ requestAgain: false });
            }
        }
    };
    PreviewHandlersHelper.prototype.errorExportStatusHandler = function (deffered, error) {
        this._preview.progressBar.complete();
        deffered.resolve({ requestAgain: false, completed: false });
    };
    PreviewHandlersHelper.prototype.doneStartBuildHandler = function (deffered, response, startBuildOperationId) {
        var _this = this;
        try {
            var removeAllEmptyPages = function (all) {
                all && _this._preview.pages.removeAll();
                _this._preview.removeEmptyPages();
            };
            if (!response || !response.documentId) {
                this._preview.progressBar.complete();
                removeAllEmptyPages();
                return;
            }
            var stopBuildRequest = this._preview._stopBuildRequests[startBuildOperationId];
            var closeDocumentRequest = this._preview._closeDocumentRequests[startBuildOperationId];
            if (startBuildOperationId && (stopBuildRequest || closeDocumentRequest)) {
                if (closeDocumentRequest) {
                    closeDocumentRequest && this._preview.closeDocument(response.documentId);
                }
                else {
                    stopBuildRequest && this._preview.stopBuild(response.documentId);
                }
                this._preview.progressBar.complete();
                removeAllEmptyPages();
                return;
            }
            this._preview._currentDocumentId(response.documentId);
            var doGetBuildStatus = this._preview.getDoGetBuildStatusFunc();
            doGetBuildStatus(this._preview._currentDocumentId());
        }
        finally {
            deffered.resolve(true);
        }
    };
    PreviewHandlersHelper.prototype.errorStartBuildHandler = function (deffered, error) {
        this._preview.pageLoading(false);
        this._preview.errorMessage(analytics_utils_1.getLocalization('Document creation was cancelled due to server error', 'WebDocumentViewer_DocumentCreationCancelled'));
        this._preview.progressBar.complete();
        deffered.resolve(true);
        this._preview.removeEmptyPages();
    };
    PreviewHandlersHelper.prototype.errorGetBuildStatusHandler = function (deffered, error, ignoreError) {
        deffered.resolve({ requestAgain: false, completed: false });
    };
    PreviewHandlersHelper.prototype.doneGetBuildStatusHandler = function (deffered, documentId, response, stopProcessingPredicate) {
        var _this = this;
        try {
            if (!response) {
                deffered.resolve({ requestAgain: false });
                return;
            }
            this._preview.progressBar.progress() < response.progress && !this._preview._stopBuildRequests[documentId] && !stopProcessingPredicate()
                && this._preview.progressBar.progress(response.progress);
            var wereNoPagesAndNewOnesExist = this._preview.pageIndex() === -1 && response.pageCount > 0;
            if (wereNoPagesAndNewOnesExist) {
                this._preview.pageIndex(0);
            }
            for (var i = 0; i < response.pageCount && !this._preview._stopBuildRequests[documentId] && !stopProcessingPredicate(); i++) {
                var createNewPage = function (index) {
                    return _this._preview.createPage(index, _this._preview.createBrickClickProcessor(index));
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
            deffered.resolve(response);
        }
        finally {
            if (deffered.state() === 'pending') {
                deffered.resolve({ requestAgain: false });
            }
        }
    };
    return PreviewHandlersHelper;
}());
exports.PreviewHandlersHelper = PreviewHandlersHelper;


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
var exportOptions_1 = __webpack_require__(59);
var csvExportOptionsPreview_1 = __webpack_require__(78);
var htmlExportOptionsPreview_1 = __webpack_require__(79);
var imageExportOptionsPreview_1 = __webpack_require__(80);
var mhtExportOptionsPreview_1 = __webpack_require__(81);
var pdfExportOptions_1 = __webpack_require__(33);
var rtfExportOptionsPreview_1 = __webpack_require__(82);
var textExportOptions_1 = __webpack_require__(36);
var xlsExportOptionsPreview_1 = __webpack_require__(83);
var xlsxExportOptionsPreview_1 = __webpack_require__(84);
var docxExportOptionsPreview_1 = __webpack_require__(85);
var analytics_widgets_1 = __webpack_require__(5);
var ExportOptionsPreview = (function (_super) {
    __extends(ExportOptionsPreview, _super);
    function ExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportOptionsPreview.prototype._generateFromFunction = function (exportType) {
        return function (model, serializer) {
            return new exportType(model || {}, serializer);
        };
    };
    ExportOptionsPreview.prototype._generateInfo = function () {
        return [
            { propertyName: 'csv', modelName: 'Csv', displayName: 'CSV Export Options', localizationId: 'DevExpress.XtraPrinting.CsvExportOptions', from: csvExportOptionsPreview_1.CsvExportOptionsPreview.from, toJsonObject: csvExportOptionsPreview_1.CsvExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'html', modelName: 'Html', displayName: 'HTML Export Options', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptions', from: this._generateFromFunction(htmlExportOptionsPreview_1.HtmlExportOptionsPreview), toJsonObject: htmlExportOptionsPreview_1.HtmlExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'image', modelName: 'Image', displayName: 'Image Export Options', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions', from: this._generateFromFunction(imageExportOptionsPreview_1.ImageExportOptionsPreview), toJsonObject: imageExportOptionsPreview_1.ImageExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'mht', modelName: 'Mht', displayName: 'MHT Export Options', localizationId: 'DevExpress.XtraPrinting.MhtExportOptions', from: this._generateFromFunction(mhtExportOptionsPreview_1.MhtExportOptionsPreview), toJsonObject: mhtExportOptionsPreview_1.MhtExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'pdf', modelName: 'Pdf', displayName: 'PDF Export Options', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions', from: pdfExportOptions_1.PdfExportOptions.from, toJsonObject: pdfExportOptions_1.PdfExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'rtf', modelName: 'Rtf', displayName: 'RTF Export Options', localizationId: 'DevExpress.XtraPrinting.RtfExportOptions', from: this._generateFromFunction(rtfExportOptionsPreview_1.RtfExportOptionsPreview), toJsonObject: rtfExportOptionsPreview_1.RtfExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'textExportOptions', modelName: 'Text', displayName: 'Text Export Options', localizationId: 'DevExpress.XtraPrinting.TextExportOptions', from: textExportOptions_1.TextExportOptions.from, toJsonObject: textExportOptions_1.TextExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'xls', modelName: 'Xls', displayName: 'XLS Export Options', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions', from: this._generateFromFunction(xlsExportOptionsPreview_1.XlsExportOptionsPreview), toJsonObject: xlsExportOptionsPreview_1.XlsExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'xlsx', modelName: 'Xlsx', displayName: 'XLSx Export Options', localizationId: 'DevExpress.XtraPrinting.XlsxExportOptions', from: this._generateFromFunction(xlsxExportOptionsPreview_1.XlsxExportOptionsPreview), toJsonObject: xlsxExportOptionsPreview_1.XlsxExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'docx', modelName: 'Docx', displayName: 'Docx Export Options', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions', from: this._generateFromFunction(docxExportOptionsPreview_1.DocxExportOptionsPreview), toJsonObject: docxExportOptionsPreview_1.DocxExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') }
        ];
    };
    ExportOptionsPreview.prototype.hasSensitiveData = function () {
        return (this.xls && this.xls.hasSensitiveData())
            || (this.xlsx && this.xlsx.hasSensitiveData())
            || (this.pdf && this.pdf.hasSensitiveData());
    };
    ExportOptionsPreview.prototype.getInfo = function () {
        return this._generateInfo();
    };
    return ExportOptionsPreview;
}(exportOptions_1.ExportOptions));
exports.ExportOptionsPreview = ExportOptionsPreview;
var ExportOptionsMergedPreview = (function (_super) {
    __extends(ExportOptionsMergedPreview, _super);
    function ExportOptionsMergedPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportOptionsMergedPreview.prototype._generateInfo = function () {
        return [
            { propertyName: 'html', modelName: 'Html', displayName: 'HTML Export Options', localizationId: 'DevExpress.XtraPrinting.HtmlExportOptions', from: this._generateFromFunction(htmlExportOptionsPreview_1.HtmlExportOptionsMergedPreview), toJsonObject: htmlExportOptionsPreview_1.HtmlExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'image', modelName: 'Image', displayName: 'Image Export Options', localizationId: 'DevExpress.XtraPrinting.ImageExportOptions', from: this._generateFromFunction(imageExportOptionsPreview_1.ImageExportOptionsMergedPreview), toJsonObject: imageExportOptionsPreview_1.ImageExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'mht', modelName: 'Mht', displayName: 'MHT Export Options', localizationId: 'DevExpress.XtraPrinting.MhtExportOptions', from: this._generateFromFunction(mhtExportOptionsPreview_1.MhtExportOptionsMergedPreview), toJsonObject: mhtExportOptionsPreview_1.MhtExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'pdf', modelName: 'Pdf', displayName: 'PDF Export Options', localizationId: 'DevExpress.XtraPrinting.PdfExportOptions', from: pdfExportOptions_1.PdfExportOptions.from, toJsonObject: pdfExportOptions_1.PdfExportOptions.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'rtf', modelName: 'Rtf', displayName: 'RTF Export Options', localizationId: 'DevExpress.XtraPrinting.RtfExportOptions', from: this._generateFromFunction(rtfExportOptionsPreview_1.RtfExportOptionsMergedPreview), toJsonObject: rtfExportOptionsPreview_1.RtfExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'xls', modelName: 'Xls', displayName: 'XLS Export Options', localizationId: 'DevExpress.XtraPrinting.XlsExportOptions', from: this._generateFromFunction(xlsExportOptionsPreview_1.XlsExportOptionsMergedPreview), toJsonObject: xlsExportOptionsPreview_1.XlsExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'xlsx', modelName: 'Xlsx', displayName: 'XLSx Export Options', localizationId: 'DevExpress.XtraPrinting.XlsxExportOptions', from: this._generateFromFunction(xlsxExportOptionsPreview_1.XlsxExportOptionsMergedPreview), toJsonObject: xlsxExportOptionsPreview_1.XlsxExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') },
            { propertyName: 'docx', modelName: 'Docx', displayName: 'Docx Export Options', localizationId: 'DevExpress.XtraPrinting.DocxExportOptions', from: this._generateFromFunction(docxExportOptionsPreview_1.DocxExportOptionsMergedPreview), toJsonObject: docxExportOptionsPreview_1.DocxExportOptionsPreview.toJson, editor: analytics_widgets_1.editorTemplates.getEditor('objecteditor') }
        ];
    };
    return ExportOptionsMergedPreview;
}(ExportOptionsPreview));
exports.ExportOptionsMergedPreview = ExportOptionsMergedPreview;


/***/ }),
/* 78 */
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
var csvExportOptions_1 = __webpack_require__(24);
var metadata_1 = __webpack_require__(4);
var CsvExportOptionsPreview = (function (_super) {
    __extends(CsvExportOptionsPreview, _super);
    function CsvExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CsvExportOptionsPreview.from = function (model, serializer) {
        return new CsvExportOptionsPreview(model || {}, serializer);
    };
    CsvExportOptionsPreview.prototype.isPropertyVisible = function (name) {
        return name !== metadata_1.useCustomSeparator.propertyName;
    };
    CsvExportOptionsPreview.prototype.isPropertyDisabled = function (name) {
        return false;
    };
    return CsvExportOptionsPreview;
}(csvExportOptions_1.CsvExportOptions));
exports.CsvExportOptionsPreview = CsvExportOptionsPreview;


/***/ }),
/* 79 */
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
var htmlMetaData_1 = __webpack_require__(28);
var htmlExportOptions_1 = __webpack_require__(27);
var metadata_1 = __webpack_require__(8);
var htmlExportOptionsSerializationInfoPreview = [].concat(htmlMetaData_1.htmlExportOptionsSerializationInfoBase);
var HtmlExportOptionsPreview = (function (_super) {
    __extends(HtmlExportOptionsPreview, _super);
    function HtmlExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HtmlExportOptionsPreview.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    HtmlExportOptionsPreview.prototype.getInfo = function () {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(htmlExportOptionsSerializationInfoPreview);
    };
    HtmlExportOptionsPreview.prototype._getVariableInfo = function () {
        return [metadata_1.htmlExportModePreview];
    };
    return HtmlExportOptionsPreview;
}(htmlExportOptions_1.HtmlExportOptions));
exports.HtmlExportOptionsPreview = HtmlExportOptionsPreview;
var HtmlExportOptionsMergedPreview = (function (_super) {
    __extends(HtmlExportOptionsMergedPreview, _super);
    function HtmlExportOptionsMergedPreview(model, serializer) {
        var _this = _super.call(this, model, serializer) || this;
        _this.htmlExportMode(metadata_1.excludeModesForMergedDocuments(_this.htmlExportMode())());
        return _this;
    }
    HtmlExportOptionsMergedPreview.prototype._getVariableInfo = function () {
        return [metadata_1.htmlExportModeMergedPreview];
    };
    HtmlExportOptionsMergedPreview.prototype.isPropertyDisabled = function (name) {
        return _super.prototype.isPropertyDisabled.call(this, name) || name === metadata_1.htmlExportModeMergedPreview.propertyName;
    };
    return HtmlExportOptionsMergedPreview;
}(HtmlExportOptionsPreview));
exports.HtmlExportOptionsMergedPreview = HtmlExportOptionsMergedPreview;


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
var imageMetaData_1 = __webpack_require__(30);
var imageExportOptions_1 = __webpack_require__(29);
var metadata_1 = __webpack_require__(8);
var imageExportOptionsSerializationInfoPreview = [].concat(imageMetaData_1.imageExportOptionsSerializationInfoBase);
var ImageExportOptionsPreview = (function (_super) {
    __extends(ImageExportOptionsPreview, _super);
    function ImageExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageExportOptionsPreview.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    ImageExportOptionsPreview.prototype.getInfo = function () {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(imageExportOptionsSerializationInfoPreview);
    };
    ImageExportOptionsPreview.prototype._getVariableInfo = function () {
        return [metadata_1.imageExportModePreview];
    };
    return ImageExportOptionsPreview;
}(imageExportOptions_1.ImageExportOptions));
exports.ImageExportOptionsPreview = ImageExportOptionsPreview;
var ImageExportOptionsMergedPreview = (function (_super) {
    __extends(ImageExportOptionsMergedPreview, _super);
    function ImageExportOptionsMergedPreview(model, serializer) {
        var _this = _super.call(this, model, serializer) || this;
        _this.imageExportMode(metadata_1.excludeModesForMergedDocuments(_this.imageExportMode())());
        return _this;
    }
    ImageExportOptionsMergedPreview.prototype._getVariableInfo = function () {
        return [metadata_1.imageExportModeMergedPreview];
    };
    ImageExportOptionsMergedPreview.prototype.isPropertyDisabled = function (name) {
        return _super.prototype.isPropertyDisabled.call(this, name) || name === metadata_1.imageExportModeMergedPreview.propertyName;
    };
    return ImageExportOptionsMergedPreview;
}(ImageExportOptionsPreview));
exports.ImageExportOptionsMergedPreview = ImageExportOptionsMergedPreview;


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
var mhtMetaData_1 = __webpack_require__(32);
var mhtExportOptions_1 = __webpack_require__(31);
var metadata_1 = __webpack_require__(8);
var mhtExportOptionsSerializationInfoPreview = [].concat(mhtMetaData_1.mhtExportOptionsSerializationInfoBase);
var MhtExportOptionsPreview = (function (_super) {
    __extends(MhtExportOptionsPreview, _super);
    function MhtExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MhtExportOptionsPreview.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    MhtExportOptionsPreview.prototype.getInfo = function () {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(mhtExportOptionsSerializationInfoPreview);
    };
    MhtExportOptionsPreview.prototype._getVariableInfo = function () {
        return [metadata_1.htmlExportModePreview];
    };
    return MhtExportOptionsPreview;
}(mhtExportOptions_1.MhtExportOptions));
exports.MhtExportOptionsPreview = MhtExportOptionsPreview;
var MhtExportOptionsMergedPreview = (function (_super) {
    __extends(MhtExportOptionsMergedPreview, _super);
    function MhtExportOptionsMergedPreview(model, serializer) {
        var _this = _super.call(this, model, serializer) || this;
        _this.htmlExportMode(metadata_1.excludeModesForMergedDocuments(_this.htmlExportMode())());
        return _this;
    }
    MhtExportOptionsMergedPreview.prototype._getVariableInfo = function () {
        return [metadata_1.htmlExportModeMergedPreview];
    };
    MhtExportOptionsMergedPreview.prototype.isPropertyDisabled = function (name) {
        return _super.prototype.isPropertyDisabled.call(this, name) || name === metadata_1.htmlExportModeMergedPreview.propertyName;
    };
    return MhtExportOptionsMergedPreview;
}(MhtExportOptionsPreview));
exports.MhtExportOptionsMergedPreview = MhtExportOptionsMergedPreview;


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
var rtfMetaData_1 = __webpack_require__(14);
var rtfExportOptions_1 = __webpack_require__(35);
var metadata_1 = __webpack_require__(4);
var metadata_2 = __webpack_require__(8);
var rtfExportOptionsSerializationInfoPreview = [].concat(rtfMetaData_1.rtfExportOptionsSerializationInfoBase);
var RtfExportOptionsPreview = (function (_super) {
    __extends(RtfExportOptionsPreview, _super);
    function RtfExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RtfExportOptionsPreview.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    RtfExportOptionsPreview.prototype.getInfo = function () {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(rtfExportOptionsSerializationInfoPreview);
    };
    RtfExportOptionsPreview.prototype._getVariableInfo = function () {
        return [metadata_1.rtfExportMode];
    };
    return RtfExportOptionsPreview;
}(rtfExportOptions_1.RtfExportOptions));
exports.RtfExportOptionsPreview = RtfExportOptionsPreview;
var RtfExportOptionsMergedPreview = (function (_super) {
    __extends(RtfExportOptionsMergedPreview, _super);
    function RtfExportOptionsMergedPreview(model, serializer) {
        var _this = _super.call(this, model, serializer) || this;
        _this.rtfExportMode(metadata_2.excludeModesForMergedDocuments(_this.rtfExportMode())());
        return _this;
    }
    RtfExportOptionsMergedPreview.prototype._getVariableInfo = function () {
        return [metadata_2.rtfExportModeMergedPreview];
    };
    RtfExportOptionsMergedPreview.prototype.isPropertyDisabled = function (name) {
        return _super.prototype.isPropertyDisabled.call(this, name) || name === metadata_2.rtfExportModeMergedPreview.propertyName;
    };
    return RtfExportOptionsMergedPreview;
}(RtfExportOptionsPreview));
exports.RtfExportOptionsMergedPreview = RtfExportOptionsMergedPreview;


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
var xlsMetaData_1 = __webpack_require__(15);
var xlsExportOptions_1 = __webpack_require__(37);
var metadata_1 = __webpack_require__(8);
var xlsExportOptionsSerializationInfoPreview = [].concat(xlsMetaData_1.xlsExportOptionsSerializationInfoBase, xlsMetaData_1.xlsExportOptionsSerializationInfoCommon);
var XlsExportOptionsPreview = (function (_super) {
    __extends(XlsExportOptionsPreview, _super);
    function XlsExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XlsExportOptionsPreview.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    XlsExportOptionsPreview.prototype.getInfo = function () {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(xlsExportOptionsSerializationInfoPreview);
    };
    XlsExportOptionsPreview.prototype._getVariableInfo = function () {
        return [metadata_1.xlsExportModePreview];
    };
    return XlsExportOptionsPreview;
}(xlsExportOptions_1.XlsExportOptions));
exports.XlsExportOptionsPreview = XlsExportOptionsPreview;
var XlsExportOptionsMergedPreview = (function (_super) {
    __extends(XlsExportOptionsMergedPreview, _super);
    function XlsExportOptionsMergedPreview(model, serializer) {
        var _this = _super.call(this, model, serializer) || this;
        _this.xlsExportMode(metadata_1.excludeModesForMergedDocuments(_this.xlsExportMode())());
        return _this;
    }
    XlsExportOptionsMergedPreview.prototype._getVariableInfo = function () {
        return [metadata_1.xlsExportModeMergedPreview];
    };
    XlsExportOptionsMergedPreview.prototype.isPropertyDisabled = function (name) {
        return _super.prototype.isPropertyDisabled.call(this, name) || name === metadata_1.xlsExportModeMergedPreview.propertyName;
    };
    return XlsExportOptionsMergedPreview;
}(XlsExportOptionsPreview));
exports.XlsExportOptionsMergedPreview = XlsExportOptionsMergedPreview;


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
var xlsMetaData_1 = __webpack_require__(15);
var xlsxExportOptions_1 = __webpack_require__(38);
var metadata_1 = __webpack_require__(8);
var xlsxExportOptionsSerializationInfoPreview = [].concat(xlsMetaData_1.xlsExportOptionsSerializationInfoCommon);
var XlsxExportOptionsPreview = (function (_super) {
    __extends(XlsxExportOptionsPreview, _super);
    function XlsxExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XlsxExportOptionsPreview.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    XlsxExportOptionsPreview.prototype.getInfo = function () {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(xlsxExportOptionsSerializationInfoPreview);
    };
    XlsxExportOptionsPreview.prototype._getVariableInfo = function () {
        return [metadata_1.xlsxExportModePreview];
    };
    return XlsxExportOptionsPreview;
}(xlsxExportOptions_1.XlsxExportOptions));
exports.XlsxExportOptionsPreview = XlsxExportOptionsPreview;
var XlsxExportOptionsMergedPreview = (function (_super) {
    __extends(XlsxExportOptionsMergedPreview, _super);
    function XlsxExportOptionsMergedPreview(model, serializer) {
        var _this = _super.call(this, model, serializer) || this;
        _this.xlsxExportMode(metadata_1.excludeModesForMergedDocuments(_this.xlsxExportMode())());
        return _this;
    }
    XlsxExportOptionsMergedPreview.prototype._getVariableInfo = function () {
        return [metadata_1.xlsxExportModeMergedPreview];
    };
    XlsxExportOptionsMergedPreview.prototype.isPropertyDisabled = function (name) {
        return _super.prototype.isPropertyDisabled.call(this, name) || name === metadata_1.xlsxExportModeMergedPreview.propertyName;
    };
    return XlsxExportOptionsMergedPreview;
}(XlsxExportOptionsPreview));
exports.XlsxExportOptionsMergedPreview = XlsxExportOptionsMergedPreview;


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
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(4);
var rtfMetaData_1 = __webpack_require__(14);
var docxMetaData_1 = __webpack_require__(26);
var docxExportOptions_1 = __webpack_require__(25);
var metadata_2 = __webpack_require__(8);
var docxExportOptionsSerializationInfoPreview = [
    metadata_1.pageRange,
    metadata_1.docxTableLayout,
    rtfMetaData_1.keepRowHeight,
    metadata_1.rasterizeImages,
    metadata_1.rasterizationResolution,
    metadata_1.exportPageBreaks,
    metadata_1.exportWatermarks,
    docxMetaData_1.docxDocumentOptions,
];
var DocxExportOptionsPreview = (function (_super) {
    __extends(DocxExportOptionsPreview, _super);
    function DocxExportOptionsPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocxExportOptionsPreview.toJson = function (value, serializer, refs) {
        return serializer.serialize(value, value.getInfo(), refs);
    };
    DocxExportOptionsPreview.prototype.getInfo = function () {
        var variableInfo = this._getVariableInfo();
        return variableInfo.concat(docxExportOptionsSerializationInfoPreview);
    };
    DocxExportOptionsPreview.prototype._getVariableInfo = function () {
        return [metadata_1.docxExportMode];
    };
    return DocxExportOptionsPreview;
}(docxExportOptions_1.DocxExportOptions));
exports.DocxExportOptionsPreview = DocxExportOptionsPreview;
var DocxExportOptionsMergedPreview = (function (_super) {
    __extends(DocxExportOptionsMergedPreview, _super);
    function DocxExportOptionsMergedPreview(model, serializer) {
        var _this = _super.call(this, model, serializer) || this;
        _this.docxExportMode(metadata_2.excludeModesForMergedDocuments(_this.docxExportMode())());
        return _this;
    }
    DocxExportOptionsMergedPreview.prototype._getVariableInfo = function () {
        return [metadata_2.docxExportModeMergedPreview];
    };
    DocxExportOptionsMergedPreview.prototype.isPropertyDisabled = function (name) {
        return _super.prototype.isPropertyDisabled.call(this, name) || name === metadata_2.docxExportModeMergedPreview.propertyName;
    };
    return DocxExportOptionsMergedPreview;
}(DocxExportOptionsPreview));
exports.DocxExportOptionsMergedPreview = DocxExportOptionsMergedPreview;


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
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var ProgressViewModel = (function (_super) {
    __extends(ProgressViewModel, _super);
    function ProgressViewModel(enableKeyboardSupport) {
        var _this = _super.call(this) || this;
        _this.progress = ko.observable(0);
        _this._forceInvisible = ko.observable(false);
        _this.inProgress = ko.observable(false);
        _this.cancelText = ko.observable(analytics_utils_1.getLocalization('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'));
        _this.text = ko.observable('');
        _this.cssClasses = ko.observable();
        _this.visible = ko.pureComputed({
            read: function () {
                if (_this._forceInvisible()) {
                    return false;
                }
                return _this.inProgress();
            },
            write: function (visibleState) {
                _this._forceInvisible(!visibleState);
            }
        });
        _this.complete = function () {
            _this.inProgress(false);
            _this.progress(0);
            $.isFunction(_this._onComplete) && _this._onComplete();
            _this._onComplete = null;
        };
        _this.startProgress = function (onComplete, onStop) {
            _this.inProgress(true);
            _this.progress(0);
            _this._onComplete = onComplete;
            _this.stop = function () {
                try {
                    $.isFunction(onStop) && onStop();
                }
                finally {
                    _this.complete();
                }
            };
        };
        if (enableKeyboardSupport) {
            _this.progressBarAccessibility = new analytics_internal_1.ListKeyboardHelper();
            _this._disposables.push(_this.progressBarAccessibility);
        }
        return _this;
    }
    ProgressViewModel.prototype.setPosition = function (position) {
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
    };
    return ProgressViewModel;
}(analytics_utils_1.Disposable));
exports.ProgressViewModel = ProgressViewModel;


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
var analytics_internal_1 = __webpack_require__(2);
var ko = __webpack_require__(1);
var PreviewBricksKeyboardHelper = (function (_super) {
    __extends(PreviewBricksKeyboardHelper, _super);
    function PreviewBricksKeyboardHelper(viewModel) {
        var _this = _super.call(this) || this;
        _this.controlElementClassName = 'dx-accessibility-page-item';
        _this.liveRegionId = 'dxrd-preview-bricks-live-region';
        _this._needFocusNext = false;
        _this._firstSelectedBrickIndex = 0;
        _this._lastSelectedBrickIndex = 0;
        _this._resetBricksIndexes = function () {
            _this._firstSelectedBrickIndex = 0;
            _this._lastSelectedBrickIndex = 0;
        };
        _this._resetBricks = function () {
            return _this._currentPage.selectBrick('');
        };
        _this.delayedInit = function () {
            _this._initTimeout && clearTimeout(_this._initTimeout);
            _this._initTimeout = setTimeout(function () {
                _this.initialize();
            }, 20);
        };
        _this.reset = function () {
            _this._resetBricks();
            _this._resetBricksIndexes();
        };
        _this.active = false;
        _this._getSelectedContent = viewModel.getSelectedContent;
        _this._pages = viewModel.pages;
        _this._goToPage = viewModel.goToPage.bind(viewModel);
        _this._usePageKeyboardNavigation = viewModel.showMultipagePreview;
        _this._disposables.push(viewModel.currentPage.subscribe(function (newPage) {
            if (newPage) {
                _this._currentPage = newPage;
                _this.delayedInit();
            }
        }));
        return _this;
    }
    PreviewBricksKeyboardHelper.prototype.dispose = function () {
        this._activeBricksSubscription && this._activeBricksSubscription.dispose();
        this._afterInitializeCallback = null;
        this._initTimeout && clearTimeout(this._initTimeout);
        _super.prototype.dispose.call(this);
    };
    PreviewBricksKeyboardHelper.prototype.initialize = function () {
        var _this = this;
        if (!this._currentPage)
            return;
        this._bricks = this._currentPage.bricks;
        if (this._usePageKeyboardNavigation()) {
            this.startIndex = this._pages().indexOf(this._currentPage);
        }
        else {
            this.startIndex = 0;
        }
        _super.prototype.initialize.call(this);
        this._afterInitializeCallback && this._afterInitializeCallback();
        this._afterInitializeCallback = null;
        if (this._needFocusNext) {
            this.controlElements[this.startIndex].element.focus();
            this.lastFocusItem().setAttribute('tabindex', '-1');
            this._needFocusNext = false;
        }
        this._activeBricksSubscription && this._activeBricksSubscription.dispose();
        this._activeBricksSubscription = this._currentPage.activeBricks.subscribe(function (activeBricks) {
            _this._liveRegionTimeout && clearTimeout(_this._liveRegionTimeout);
            if (!activeBricks.length)
                return;
            _this._liveRegionTimeout = _this.liveRegion().changeText(_this._getSelectedContent(','));
            var _bricks = _this._bricks();
            for (var i = 0; i < _bricks.length; i++) {
                var brick = _bricks[i];
                if (brick === activeBricks[0])
                    _this._firstSelectedBrickIndex = i;
                if (brick === activeBricks[activeBricks.length - 1]) {
                    _this._lastSelectedBrickIndex = i;
                    break;
                }
            }
        });
    };
    PreviewBricksKeyboardHelper.prototype.clickHandler = function () { };
    PreviewBricksKeyboardHelper.prototype.itemHandleEscKey = function (e, index) {
        if (!this.active)
            return false;
        this.controlElements[index].element.classList.remove('dx-accessibility-active-state');
        this.active = false;
        this._resetBricks();
        return true;
    };
    PreviewBricksKeyboardHelper.prototype._actionExecute = function (brick, e) {
        var _this = this;
        if (brick.navigation) {
            brick.onClick(e);
        }
        else if (brick.efIndex) {
            var editField = this._currentPage.editingFields()[brick.efIndex - 1];
            var efItems = Array.prototype.slice.call(e.target.querySelectorAll('.dx-accessibility-editing-field-item'));
            var efItem = analytics_internal_1.findFirstItemMatchesCondition(efItems, function (item) { return ko.dataFor(item) === editField; });
            if (efItem && editField.activateEditor) {
                editField.activateEditor(editField, { target: efItem, currentTarget: efItem });
                var subscription = editField.active.subscribe(function (value) {
                    if (!value) {
                        if (document.activeElement === document.body) {
                            e.target.focus();
                        }
                        brick.active(true);
                        _this.active = true;
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
    };
    PreviewBricksKeyboardHelper.prototype._getNonEmptyBrick = function (index, reverse) {
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
    };
    PreviewBricksKeyboardHelper.prototype._pageChangeHandle = function (action, newIndex, reverse) {
        if (reverse === void 0) { reverse = false; }
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
    };
    PreviewBricksKeyboardHelper.prototype._activatePage = function (e, index) {
        if (this._bricks().length) {
            var page = this.controlElements[index];
            this.active = true;
            page.element.classList.add('dx-accessibility-active-state');
            var lastBrick = this._getNonEmptyBrick(this._lastSelectedBrickIndex - 1, false);
            lastBrick && lastBrick.active(true);
        }
    };
    PreviewBricksKeyboardHelper.prototype.itemHandleHomeKey = function (e, index) {
        var _this = this;
        return this._pageChangeHandle(function () { return _super.prototype.itemHandleHomeKey.call(_this, e, index); }, -1);
    };
    PreviewBricksKeyboardHelper.prototype.itemHandleEndKey = function (e, index) {
        var _this = this;
        return this._pageChangeHandle(function () { return _super.prototype.itemHandleEndKey.call(_this, e, index); }, this._bricks().length, true);
    };
    PreviewBricksKeyboardHelper.prototype.itemHandleLeftArrowKey = function (e, index) {
        var _this = this;
        return this._pageChangeHandle(function () {
            _this.setFocusToPrevious(index);
            return true;
        }, this._firstSelectedBrickIndex, true);
    };
    PreviewBricksKeyboardHelper.prototype.itemHandleRightArrowKey = function (e, index) {
        var _this = this;
        return this._pageChangeHandle(function () {
            _this.setFocusToNext(index);
            return true;
        }, this._lastSelectedBrickIndex);
    };
    PreviewBricksKeyboardHelper.prototype.itemHandleEnterKey = function (e, index) {
        var _this = this;
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
            this._afterInitializeCallback = function () {
                _this._activatePage(e, index);
            };
        }
        else {
            this._activatePage(e, index);
        }
        return true;
    };
    PreviewBricksKeyboardHelper.prototype.itemHandleSpaceKey = function (e, index) {
        return this.itemHandleEnterKey(e, index);
    };
    PreviewBricksKeyboardHelper.prototype.setFocusToPrevious = function (currentIndex) {
        return _super.prototype.setFocusToPrevious.call(this, currentIndex);
    };
    PreviewBricksKeyboardHelper.prototype.setFocusToNext = function (currentIndex) {
        return _super.prototype.setFocusToNext.call(this, currentIndex);
    };
    PreviewBricksKeyboardHelper.prototype.createControlElement = function (element, index) {
        return new PreviewPageControlsElement(element, this);
    };
    return PreviewBricksKeyboardHelper;
}(analytics_internal_1.KeyboardHelperWithArrowButtonBase));
exports.PreviewBricksKeyboardHelper = PreviewBricksKeyboardHelper;
var PreviewPageControlsElement = (function (_super) {
    __extends(PreviewPageControlsElement, _super);
    function PreviewPageControlsElement(element, _keyboardHelper) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this._keyboardHelper = _keyboardHelper;
        _this._focusHandler = function () {
            _this._keyboardHelper.liveRegion().changeText(analytics_internal_1.getLocalization('Press Enter or Space to switch to the document reading mode.', 'ASPxReportsStringId.WebDocumentViewer_AriaSwitchToDocumentReadingMode'));
            _this.element.classList.remove('dx-accessibility-active-state');
            if (_this._keyboardHelper.active) {
                _this._keyboardHelper.reset();
            }
            _this._keyboardHelper.active = false;
        };
        element.addEventListener('focus', _this._focusHandler);
        return _this;
    }
    PreviewPageControlsElement.prototype.dispose = function () {
        this.element.removeEventListener('focus', this._focusHandler);
        _super.prototype.dispose.call(this);
    };
    return PreviewPageControlsElement;
}(analytics_internal_1.AccessibilityControlElementBase));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
var JSReportViewer = (function () {
    function JSReportViewer(_previewModel) {
        this._previewModel = _previewModel;
    }
    Object.defineProperty(JSReportViewer.prototype, "previewModel", {
        get: function () {
            return this._previewModel();
        },
        set: function (newVal) {
            this._previewModel(newVal);
        },
        enumerable: true,
        configurable: true
    });
    JSReportViewer.prototype.previewExists = function () {
        return this.previewModel && this.previewModel.reportPreview;
    };
    JSReportViewer.prototype.GetReportPreview = function () {
        return this.previewExists();
    };
    JSReportViewer.prototype.GetPreviewModel = function () {
        return this.previewModel;
    };
    JSReportViewer.prototype.GetParametersModel = function () {
        return this.previewModel && this.previewModel.GetParametersModel();
    };
    JSReportViewer.prototype.PerformCustomDocumentOperation = function (customData, hideMessageFromUser) {
        return this.previewExists() && this.previewModel.PerformCustomDocumentOperation(customData, hideMessageFromUser);
    };
    JSReportViewer.prototype.OpenReport = function (reportName) {
        return this.previewExists() && this.previewModel.OpenReport(reportName);
    };
    JSReportViewer.prototype.Print = function (pageIndex) {
        return this.previewExists() && this.previewModel.Print(pageIndex);
    };
    JSReportViewer.prototype.ExportTo = function (format, inlineResult) {
        this.previewExists() && this.previewModel.ExportTo(format, inlineResult);
    };
    JSReportViewer.prototype.GetCurrentPageIndex = function () {
        return this.previewExists() && this.previewModel.GetCurrentPageIndex();
    };
    JSReportViewer.prototype.GoToPage = function (pageIndex) {
        this.previewExists() && this.previewModel.GoToPage(pageIndex);
    };
    JSReportViewer.prototype.Close = function () {
        this.previewExists() && this.previewModel.Close();
    };
    JSReportViewer.prototype.ResetParameters = function () {
        this.previewModel && this.previewModel.ResetParameters();
    };
    JSReportViewer.prototype.StartBuild = function () {
        return this.previewModel && this.previewModel.StartBuild();
    };
    JSReportViewer.prototype.UpdateLocalization = function (localization) {
        analytics_utils_1.updateLocalization(localization);
    };
    JSReportViewer.prototype.AdjustControlCore = function () {
        this.previewModel && this.previewModel.updateSurfaceSize && this.previewModel.updateSurfaceSize();
    };
    return JSReportViewer;
}());
exports.JSReportViewer = JSReportViewer;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var previewParametersViewModel_1 = __webpack_require__(44);
var _previewModel_1 = __webpack_require__(46);
var _previewRequestWrapper_1 = __webpack_require__(9);
var reportPreview_1 = __webpack_require__(39);
var _searchViewModel_1 = __webpack_require__(47);
var _documentMapModel_1 = __webpack_require__(94);
var previewParameterHelper_1 = __webpack_require__(17);
var exportOptionsModel_1 = __webpack_require__(48);
var _utils_1 = __webpack_require__(11);
var _actions_1 = __webpack_require__(97);
var constants_1 = __webpack_require__(7);
var _progressBarUtils_1 = __webpack_require__(49);
var _sizeUtils_1 = __webpack_require__(18);
var settings_1 = __webpack_require__(6);
var _mobileInitializer_1 = __webpack_require__(98);
var analytics_internal_1 = __webpack_require__(2);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var config_1 = __webpack_require__(149);
var _utils_2 = __webpack_require__(109);
function createDesktopPreview(bindingSettings) {
    _utils_1.processZoomFactor(bindingSettings.model.accessibilityCompliant);
    var enableKeyboardSupport = !!bindingSettings.model.accessibilityCompliant;
    var callbacks = bindingSettings.callbacks;
    var bindingModel = bindingSettings.model;
    var bindingElement = bindingSettings.element;
    var previewWrapper = new _previewRequestWrapper_1.PreviewRequestWrapper(null, callbacks), reportPreview = new reportPreview_1.ReportPreview(bindingModel.handlerUri, previewWrapper, undefined, callbacks, bindingModel.rtl, enableKeyboardSupport, bindingModel.exportSettings), searchModel = new _searchViewModel_1.SearchViewModel(reportPreview, enableKeyboardSupport);
    var documentMapModel = new _documentMapModel_1.DocumentMapModel(reportPreview);
    var parametersModel = new previewParametersViewModel_1.PreviewParametersViewModel(reportPreview, new previewParameterHelper_1.PreviewParameterHelper(bindingModel.parametersInfo && bindingModel.parametersInfo.knownEnums, bindingSettings.callbacks), enableKeyboardSupport);
    var exportModel = new exportOptionsModel_1.ExportOptionsModel(reportPreview, enableKeyboardSupport);
    reportPreview.canSwitchToDesigner = !bindingModel.previewVisible;
    reportPreview.allowURLsWithJSContent = bindingModel.allowURLsWithJSContent;
    previewWrapper.initialize(reportPreview, parametersModel, searchModel);
    var tabPanel = new analytics_utils_1.TabPanel({
        tabs: [
            parametersModel.tabInfo,
            exportModel.tabInfo,
            searchModel.tabInfo,
            documentMapModel.tabInfo
        ],
        autoSelectTab: true,
        rtl: bindingModel.rtl
    });
    tabPanel.collapsed(true);
    var fullscreenEnabled = _utils_1.createFullscreenComputed(bindingElement, reportPreview);
    var previewActions = new _actions_1.PreviewActions(reportPreview);
    var designPreviewActions = new _actions_1.PreviewDesignerActions(reportPreview, fullscreenEnabled);
    var globalActionProviders = ko.observableArray([previewActions, exportModel, searchModel, designPreviewActions]);
    var actionLists = new _actions_1.ActionLists(reportPreview, globalActionProviders, callbacks && callbacks.customizeActions, reportPreview.previewVisible);
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
    var designerModel = new _previewModel_1.PreviewModel(designerModelOptions);
    designerModel._addDisposable(previewActions);
    designerModel._addDisposable(designPreviewActions);
    designerModel.parts = [
        { id: constants_1.PreviewElements.Toolbar, templateName: constants_1.PreviewElements.Toolbar, model: { actionLists: actionLists, keyboardHelper: new analytics_internal_1.ToolbarKeyboardHelper(actionLists.toolbarItems), canSwitchToDesigner: reportPreview.canSwitchToDesigner } },
        { id: constants_1.PreviewElements.Surface, templateName: constants_1.PreviewElements.Surface, model: designerModel.reportPreview },
        { id: constants_1.PreviewElements.RightPanel, templateName: constants_1.PreviewElements.RightPanel, model: designerModel },
        { id: constants_1.PreviewElements.ExportTool, templateName: constants_1.PreviewElements.ExportTool, model: designerModel.reportPreview.exportHandler }
    ];
    callbacks && callbacks.customizeParts && callbacks.customizeParts(designerModel.parts);
    var $window = $(window);
    var updateProgressPosition = _progressBarUtils_1.getUpdateProgressBarCallback(bindingModel.progressBarSettings, designerModel, reportPreview, bindingElement, $window);
    var updatePreviewContentSize_ = _sizeUtils_1.updatePreviewContentSize(reportPreview.previewSize, bindingElement, bindingModel.rtl);
    if (bindingModel.tabPanelSettings) {
        bindingModel.tabPanelSettings.width && tabPanel.width(parseInt(bindingModel.tabPanelSettings.width));
        bindingModel.tabPanelSettings.position && tabPanel.position(bindingModel.tabPanelSettings.position);
    }
    var updateSizesCallback = function () {
        updatePreviewContentSize_ && updatePreviewContentSize_(tabPanel.position());
        updateProgressPosition && updateProgressPosition();
    };
    designerModel.updateSurfaceSize = updateSizesCallback;
    designerModel.resizeCallback = updateSizesCallback;
    window.addEventListener('resize', designerModel.resizeCallback);
    designerModel._addDisposable(fullscreenEnabled);
    designerModel._addDisposable(fullscreenEnabled.subscribe(designerModel.resizeCallback));
    designerModel._addDisposable(tabPanel.width.subscribe(function () {
        setTimeout(function () { return updatePreviewContentSize_(tabPanel.position()); }, 1);
    }));
    designerModel._addDisposable(tabPanel.position.subscribe(function (newVal) {
        updatePreviewContentSize_(newVal);
    }));
    designerModel._addDisposable(tabPanel.isEmpty.subscribe(function () {
        setTimeout(function () {
            updatePreviewContentSize_(tabPanel.position());
        }, 1);
    }));
    updateSizesCallback();
    designerModel._addDisposable({
        dispose: function () {
            window.removeEventListener('resize', designerModel.resizeCallback);
            designerModel.updateSurfaceSize = null;
            designerModel.resizeCallback = null;
            updatePreviewContentSize_ = null;
            updateProgressPosition = null;
        }
    });
    analytics_internal_1.appendStaticContextToRootViewModel(designerModel, {
        _static: __assign({}, analytics_internal_1.staticContext._static, { formatSearchResult: _utils_2.formatSearchResult })
    }, 'dx-report-viewer');
    if (bindingElement && !reportPreview.canSwitchToDesigner && bindingSettings.applyBindings) {
        callbacks.beforeRender && callbacks.beforeRender(designerModel);
        $(bindingElement).children().remove();
        ko.applyBindings(designerModel, bindingElement);
    }
    return designerModel;
}
exports.createDesktopPreview = createDesktopPreview;
function _createPreview(bindingSettings) {
    var bindingModel = bindingSettings.model;
    bindingModel.previewVisible = bindingModel.previewVisible !== undefined ? bindingModel.previewVisible : true;
    bindingModel.allowURLsWithJSContent = bindingModel.allowURLsWithJSContent !== undefined ? bindingModel.allowURLsWithJSContent : false;
    bindingModel.accessibilityCompliant = bindingModel.accessibilityCompliant !== undefined ? bindingModel.accessibilityCompliant : false;
    bindingSettings.applyBindings = bindingSettings.applyBindings !== undefined ? bindingSettings.applyBindings : true;
    var disposableCallback = bindingSettings.callbacks && bindingSettings.callbacks.onServerError && analytics_internal_1.processErrorEvent(bindingSettings.callbacks.onServerError);
    config_1.default({ rtlEnabled: !!bindingModel.rtl });
    if (bindingModel.remoteSettings && (bindingModel.remoteSettings.authToken || bindingModel.remoteSettings.serverUri)) {
        settings_1.AsyncExportApproach(true);
        bindingModel.handlerUri = analytics_internal_1.RequestHelper.generateUri(bindingModel.remoteSettings.serverUri, settings_1.ReportServerInvokeUri);
        settings_1.SearchAvailable(false);
        settings_1.EditablePreviewEnabled(false);
        settings_1.ReportServerDownloadUri(analytics_internal_1.RequestHelper.generateUri(bindingModel.remoteSettings.serverUri, settings_1.ReportServerExportUri));
        if (bindingModel.remoteSettings.authToken) {
            analytics_utils_1.ajaxSetup.ajaxSettings = {
                headers: {
                    'Authorization': 'Bearer ' + bindingModel.remoteSettings.authToken
                }
            };
        }
    }
    var designerModel;
    if (bindingModel.isMobile) {
        designerModel = _mobileInitializer_1.createMobilePreview(bindingSettings);
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
        analytics_utils_1.addCultureInfo({
            messages: bindingSettings.model.localization
        });
    }
    var localizationCallbacks = [];
    bindingSettings.callbacks && bindingSettings.callbacks.customizeLocalization && bindingSettings.callbacks.customizeLocalization(localizationCallbacks);
    return analytics_internal_1.resolveFromPromises(localizationCallbacks, function () {
        return _createPreview(bindingSettings);
    });
}
exports.createPreview = createPreview;
function createAndInitPreviewModel(viewerModel, element, callbacks, applyBindings) {
    return createPreviewModel(viewerModel, element, callbacks, applyBindings).done(function (previewModel) {
        initPreviewModel(previewModel, viewerModel);
    });
}
exports.createAndInitPreviewModel = createAndInitPreviewModel;
function createPreviewModel(viewerModel, element, callbacks, applyBindings) {
    analytics_internal_1.initGlobalize(viewerModel);
    return createPreview({ model: viewerModel, element: element, callbacks: callbacks, applyBindings: applyBindings }).done(function () {
        $.extend(true, _utils_1.cultureInfo, viewerModel.cultureInfoList);
    });
}
exports.createPreviewModel = createPreviewModel;
function initPreviewModel(previewModel, viewerModel) {
    if (viewerModel.reportId || viewerModel.documentId) {
        previewModel.reportPreview.initialize($.Deferred().resolve(viewerModel).promise());
    }
    else {
        var unwrappedUrl = ko.unwrap(viewerModel.reportUrl);
        if (unwrappedUrl) {
            previewModel.OpenReport(unwrappedUrl);
        }
    }
}
exports.initPreviewModel = initPreviewModel;


/***/ }),
/* 90 */
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
var parameterHelper_1 = __webpack_require__(21);
var previewParameterHelper_1 = __webpack_require__(17);
var multiValuesHelper_1 = __webpack_require__(91);
var analytics_utils_1 = __webpack_require__(0);
var array_store_1 = __webpack_require__(122);
var ko = __webpack_require__(1);
var PreviewParameter = (function (_super) {
    __extends(PreviewParameter, _super);
    function PreviewParameter(parameterInfo, parameterHelper) {
        var _this = _super.call(this) || this;
        _this.valueInfo = ko.observable();
        _this.lookUpValues = ko.observableArray();
        _this.valueStoreCache = null;
        _this.multiValueInfo = ko.observable();
        _this.intTypes = ['System.Int16', 'System.Int32', 'System.Int64'];
        _this.floatTypes = ['System.Single', 'System.Double', 'System.Decimal'];
        _this.isTypesCurrentType = function (types, type) { return types.indexOf(type) > -1; };
        _this.tag = parameterInfo.Tag;
        _this.type = parameterInfo.TypeName;
        _this.isRange = parameterInfo.Value && parameterInfo.Value.Start !== undefined && parameterInfo.Value.End !== undefined;
        _this.path = parameterInfo.Path;
        _this.visible = ko.observable(parameterInfo.Visible);
        _this.enabled = ko.observable(parameterInfo.Enabled);
        _this.isFilteredLookUpSettings = parameterInfo.IsFilteredLookUpSettings;
        _this.hasBindedExpressions = !!(parameterInfo.EnabledExpression || parameterInfo.VisibleExpression);
        _this.hasVisibleExpression = !!parameterInfo.VisibleExpression;
        _this._originalLookUpValues = parameterInfo.LookUpValues ? parameterHelper.mapLookUpValues(_this.type, parameterInfo.LookUpValues || []) : null;
        _this.lookUpValues(_this._originalLookUpValues);
        _this.lookUpValues.subscribe(function () { _this.valueStoreCache = null; });
        _this.isMultiValue = parameterInfo.MultiValue;
        _this.selectAllValues = parameterInfo.SelectAllValues;
        _this.allowNull = parameterInfo.AllowNull;
        _this.isMultiValueWithLookUp = _this.isMultiValue && !!_this.lookUpValues();
        _this._originalValue = parameterInfo.Value;
        if (parameterInfo.ValueInfo && _this.isTypesCurrentType(_this.intTypes.concat(_this.floatTypes), _this.type) && !_this.isMultiValueWithLookUp) {
            _this._originalValue = parameterInfo.ValueInfo;
        }
        _this.getParameterDescriptor = function () {
            return {
                description: parameterInfo.Description,
                displayName: parameterInfo.Description || parameterInfo.Name,
                name: parameterInfo.Name,
                tag: parameterInfo.Tag,
                type: parameterInfo.TypeName,
                value: _this._originalValue,
                multiValue: parameterInfo.MultiValue,
                selectAllValues: parameterInfo.SelectAllValues,
                allowNull: parameterInfo.AllowNull,
                hasLookUpValues: !!_this.lookUpValues() || parameterHelper.isEnumType(_this),
                visible: parameterInfo.Visible,
                enabled: parameterInfo.Enabled
            };
        };
        _this._disposables.push(ko.computed(function () {
            var info = parameterHelper.getParameterInfo(_this);
            info.propertyName = previewParameterHelper_1.PreviewParameterHelper.getPrivatePropertyName(parameterInfo.Path);
            _this.valueInfo(info);
        }));
        _this.initialize(_this._originalValue, parameterHelper);
        return _this;
    }
    PreviewParameter._compareValues = function (value1, value2) {
        if (value1 instanceof Date && value2 instanceof Date) {
            return value1 - value2 === 0;
        }
        return value1 === value2;
    };
    PreviewParameter.prototype.safeAssignObservable = function (name, value) {
        if (this[name]) {
            if (PreviewParameter._compareValues(this[name](), value()))
                this[name](null);
            this[name](value());
        }
        else {
            this[name] = value;
        }
    };
    PreviewParameter.prototype.initialize = function (value, parameterHelper) {
        var _this = this;
        var resultValue;
        if (this.isMultiValueWithLookUp) {
            this.safeAssignObservable('_value', ko.observableArray((value || []).map(function (arrayItem) {
                return parameterHelper.getValueConverter(_this.type)(arrayItem);
            })));
            var multiValuesHelper = new multiValuesHelper_1.MultiValuesHelper(this._value, this.lookUpValues(), this.selectAllValues);
            var newItems;
            if (parameterHelper.customizeParameterLookUpSource)
                newItems = parameterHelper.customizeParameterLookUpSource(this.getParameterDescriptor(), multiValuesHelper.dataSource);
            if (newItems) {
                multiValuesHelper.dataSource = newItems;
            }
            else {
                var store = new array_store_1.default({
                    data: multiValuesHelper.dataSource,
                    key: 'value',
                });
                multiValuesHelper.dataSource = parameterHelper_1.ParameterHelper.createDefaultDataSource(store);
            }
            resultValue = ko.observable(multiValuesHelper);
        }
        else if (this.isMultiValue) {
            resultValue = value ? parameterHelper.createMultiValueArray(value, this) : ko.observableArray();
        }
        else if (this.allowNull && !value && value !== false) {
            resultValue = ko.observable(null);
        }
        else if (this.isRange) {
            var converter = parameterHelper.getValueConverter(this.type);
            resultValue = ko.observableArray([this._originalValue.Start, this._originalValue.End].map(function (x) { return ko.unwrap(converter(x)); }));
        }
        else {
            resultValue = ko.observable(parameterHelper.getValueConverter(this.type)(value));
        }
        this.safeAssignObservable('value', resultValue);
    };
    return PreviewParameter;
}(analytics_utils_1.Disposable));
exports.PreviewParameter = PreviewParameter;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
var MultiValuesHelper = (function () {
    function MultiValuesHelper(value, items, selectAllValues) {
        var _this = this;
        this.items = items;
        this.selectedItems = ko.observableArray([]);
        this.value = value;
        this.dataSource = items;
        var allValues;
        this.maxDisplayedTags = ((items && items.length) || 1) - 1;
        this.isSelectedAll = ko.pureComputed({
            read: function () { return _this.value.length == items.length; },
            write: function (selectAll) {
                var newValue = selectAll ? (allValues || (allValues = items.map(function (x) { return x.value; }))) : [];
                _this.value(newValue);
            }
        });
        if (selectAllValues)
            this.isSelectedAll(true);
    }
    return MultiValuesHelper;
}());
exports.MultiValuesHelper = MultiValuesHelper;


/***/ }),
/* 92 */
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
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var SearchResultNavigator = (function (_super) {
    __extends(SearchResultNavigator, _super);
    function SearchResultNavigator(searchModel, reportPreview) {
        var _this = _super.call(this) || this;
        _this.currentResult = ko.observable(null);
        var goToMatchedResult = function (foundResult) {
            if (!foundResult) {
                return;
            }
            reportPreview.goToPage && reportPreview.goToPage(foundResult.pageIndex);
            var page = reportPreview.pages.peek()[foundResult.pageIndex];
            page && page.selectBrick(foundResult.indexes);
        };
        _this.getFirstMatchFromPage = function (pageIndex, up, thisPageOnly) {
            if (!searchModel.searchResult() || searchModel.searchResult().length === 0) {
                return null;
            }
            var firstMatch;
            var sortOutResult = function (index) {
                searchModel.searchResult().forEach(function (m) {
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
        var _setCurrentResult = function (highlight, resultId, thisPageOnly) {
            if (searchModel.searchResult() && searchModel.searchResult().length !== 0) {
                var currentResult = (resultId >= 0 && searchModel.searchResult().length > resultId) ?
                    searchModel.searchResult()[resultId] :
                    _this.getFirstMatchFromPage(reportPreview.pageIndex.peek(), searchModel.searchUp.peek(), thisPageOnly);
                _this.currentResult(currentResult);
                highlight && goToMatchedResult(_this.currentResult.peek());
            }
            else {
                reportPreview.pages() && reportPreview.pages()[reportPreview.pageIndex()] && reportPreview.pages()[reportPreview.pageIndex()].selectBrick('');
            }
        };
        _this.goToResult = function (id) {
            if (id !== 0 && !id) {
                return null;
            }
            _setCurrentResult(true, id);
        };
        _this._disposables.push(reportPreview.pageIndex.subscribe(function (newPageIndex) {
            if (_this.currentResult() && newPageIndex === _this.currentResult().pageIndex)
                return;
            _this.currentResult(null);
        }));
        _this._disposables.push(searchModel.searchResult.subscribe(function () {
            _setCurrentResult(true);
        }));
        _this.next = function (up) {
            if (!searchModel.searchResult()) {
                return false;
            }
            if (!_this.currentResult()) {
                var prevPageIndex = (reportPreview.pageIndex() === 0 ? reportPreview.pages.length : reportPreview.pageIndex()) - 1;
                var pageIndexToSearchFrom = up ? prevPageIndex : reportPreview.pageIndex();
                var firstResult = _this.getFirstMatchFromPage(pageIndexToSearchFrom, up);
                _this.currentResult(firstResult);
                if (firstResult) {
                    goToMatchedResult(firstResult);
                    return true;
                }
                else {
                    return false;
                }
            }
            var id, currentId = _this.currentResult().id;
            if (up) {
                id = (currentId === 0) ? searchModel.searchResult().length - 1 : (currentId - 1);
            }
            else {
                id = (currentId === searchModel.searchResult().length - 1) ? 0 : (currentId + 1);
            }
            _this.currentResult(searchModel.searchResult()[id]);
            goToMatchedResult(_this.currentResult());
            return true;
        };
        return _this;
    }
    return SearchResultNavigator;
}(analytics_utils_1.Disposable));
exports.SearchResultNavigator = SearchResultNavigator;


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
var analytics_internal_1 = __webpack_require__(2);
var SearchKeyboardHelper = (function (_super) {
    __extends(SearchKeyboardHelper, _super);
    function SearchKeyboardHelper(searchModel) {
        var _this = _super.call(this) || this;
        _this.liveRegionId = 'dxrd-preview-search-live-region';
        _this._disposables.push(searchModel.searchResult.subscribe(function (result) {
            if (result.length > 0)
                _this.liveRegion().changeText(analytics_internal_1.formatUnicorn(analytics_internal_1.getLocalization('{0} results are available', 'ASPxReportsStringId.WebDocumentViewer_AriaSearchResultsAvailable'), result.length));
            else if (!searchModel.loading() && !!searchModel.searchText())
                _this.liveRegion().changeText(searchModel.noResultText());
        }));
        _this._disposables.push(searchModel.searchText.subscribe(function (inputValue) {
            if (!!inputValue)
                _this.liveRegion().changeText(analytics_internal_1.formatUnicorn(analytics_internal_1.getLocalization('You searched for {0}', 'ASPxReportsStringId.WebDocumentViewer_AriaSearchString'), '"' + inputValue + '"'));
        }));
        return _this;
    }
    return SearchKeyboardHelper;
}(analytics_internal_1.ListKeyboardHelper));
exports.SearchKeyboardHelper = SearchKeyboardHelper;


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
var _documentMapTreeListController_1 = __webpack_require__(95);
var _documentMapItemsProvider_1 = __webpack_require__(96);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var analytics_internal_1 = __webpack_require__(2);
var DocumentMapModel = (function (_super) {
    __extends(DocumentMapModel, _super);
    function DocumentMapModel(reportPreview) {
        var _this = _super.call(this) || this;
        _this._selectedPath = ko.observable('0');
        _this._setSelectedPathByNavigationNode = function (nodes, brickNavigation, path) {
            if (path === void 0) { path = '0'; }
            nodes.forEach(function (item, index) {
                if (item.indexes === brickNavigation.indexes && item.pageIndex === brickNavigation.pageIndex) {
                    _this._selectedPath(path + '.' + index.toString());
                }
                else if (item.nodes) {
                    _this._selectedPath(_this._setSelectedPathByNavigationNode(item.nodes, brickNavigation, path + '.' + index.toString()));
                }
            });
            return _this._selectedPath();
        };
        var treeListController = new _documentMapTreeListController_1.DocumentMapTreeListController();
        _this.isEmpty = ko.pureComputed(function () {
            return !(reportPreview.documentMap() && reportPreview.documentMap().nodes && (reportPreview.documentMap().nodes.length !== 0));
        });
        treeListController.clickHandler = function (item) {
            var bookmark = item.data.bookmark;
            if (bookmark) {
                var pageIndex = bookmark.pageIndex < 0 ? 0 : bookmark.pageIndex;
                reportPreview.pages.peek()[pageIndex].selectBrick(bookmark.indexes);
            }
        };
        reportPreview.brickClickDocumentMapHandler = function (brickNavigation) {
            if (reportPreview.documentMap && reportPreview.documentMap())
                _this._setSelectedPathByNavigationNode(reportPreview.documentMap().nodes, brickNavigation);
        };
        _this._disposables.push({ dispose: function () { return delete reportPreview.brickClickDocumentMapHandler; } });
        var documentMapTabVisible = ko.pureComputed(function () { return !_this.isEmpty(); });
        _this.tabInfo = new analytics_utils_1.TabInfo({
            text: 'Document Map',
            template: 'dxrd-preview-document-map',
            model: _this,
            keyboardHelper: new analytics_internal_1.TreeListKeyboardHelper(),
            localizationId: 'DevExpress.XtraPrinting.PrintingSystemCommand.DocumentMap',
            imageClassName: 'reportexplorer',
            imageTemplateName: 'dxrd-svg-tabs-reportexplorer',
            visible: documentMapTabVisible
        });
        _this.documentMapOptions = ko.pureComputed(function () {
            return {
                itemsProvider: new _documentMapItemsProvider_1.DocumentMapItemsProvider(reportPreview.documentMap()),
                expandRootItems: true,
                selectedPath: _this._selectedPath,
                treeListController: treeListController,
                onItemsVisibilityChanged: function () { return _this.tabInfo.keyboardHelper && _this.tabInfo.keyboardHelper.initialize(); }
            };
        });
        _this._disposables.push(_this.tabInfo, documentMapTabVisible, _this.documentMapOptions, _this.isEmpty);
        return _this;
    }
    DocumentMapModel.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeProperties();
    };
    return DocumentMapModel;
}(analytics_utils_1.Disposable));
exports.DocumentMapModel = DocumentMapModel;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
var DocumentMapTreeListController = (function () {
    function DocumentMapTreeListController() {
        this.selectedItem = ko.observable(null);
        this.clickHandler = function (item) { return void 0; };
    }
    DocumentMapTreeListController.prototype.itemsFilter = function (item) {
        return true;
    };
    DocumentMapTreeListController.prototype.hasItems = function (item) {
        return item.isList === true;
    };
    DocumentMapTreeListController.prototype.canSelect = function (value) {
        return true;
    };
    DocumentMapTreeListController.prototype.select = function (value) {
        if (this.canSelect(value) && value !== this.selectedItem.peek()) {
            this.selectedItem.peek() && this.selectedItem.peek().isSelected(false);
            this.selectedItem(value);
            value.isSelected(true);
        }
    };
    DocumentMapTreeListController.prototype.showIconsForChildItems = function () {
        return false;
    };
    return DocumentMapTreeListController;
}());
exports.DocumentMapTreeListController = DocumentMapTreeListController;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(3);
var DocumentMapItemsProvider = (function () {
    function DocumentMapItemsProvider(bookmark) {
        var _this = this;
        this.bookmarkDict = {};
        this.getItems = function (pathRequest) {
            var result = $.Deferred();
            if (bookmark) {
                if (pathRequest.fullPath) {
                    var nodes = _this._selectNode(bookmark, pathRequest.fullPath);
                    result.resolve(nodes);
                }
                else {
                    var root = _this._getRootNode(bookmark);
                    result.resolve(root);
                }
            }
            else {
                result.reject();
            }
            return result.promise();
        };
    }
    DocumentMapItemsProvider.prototype._selectNode = function (root, path) {
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
        var result = DocumentMapItemsProvider.fillNode(currentNode);
        if (result && result.length !== 0) {
            this.bookmarkDict[path] = result;
        }
        return result;
    };
    DocumentMapItemsProvider.fillNode = function (bookmark) {
        if (!bookmark || !bookmark.nodes || bookmark.nodes.length <= 0) {
            return null;
        }
        return bookmark.nodes.map(function (node, i) { return { name: i + '', displayName: node.text, isList: node.nodes && node.nodes.length > 0, bookmark: node, specifics: 'node' }; });
    };
    DocumentMapItemsProvider.prototype._getRootNode = function (bookmark) {
        return [{ name: '0', displayName: bookmark.text, isList: bookmark.nodes && bookmark.nodes.length > 0, bookmark: bookmark, specifics: 'node' }];
    };
    return DocumentMapItemsProvider;
}());
exports.DocumentMapItemsProvider = DocumentMapItemsProvider;


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
var constants_1 = __webpack_require__(7);
var settings_1 = __webpack_require__(6);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var PreviewDesignerActions = (function (_super) {
    __extends(PreviewDesignerActions, _super);
    function PreviewDesignerActions(reportPreview, fullscreen) {
        var _this = _super.call(this) || this;
        _this.actions = [];
        var designAction = {
            id: constants_1.ActionId.Design,
            text: 'Design',
            displayText: function () { return analytics_utils_1.getLocalization('Design', 'ASPxReportsStringId.ToolBarItemText_Design'); },
            imageClassName: 'dxrd-image-design',
            imageTemplateName: 'dxrd-svg-preview-report_designer',
            templateName: reportPreview.canSwitchToDesigner ? 'dxrd-toolbar-two-way-switch' : undefined,
            disabled: ko.observable(false),
            visible: reportPreview.canSwitchToDesigner,
            hotKey: { ctrlKey: true, keyCode: 68 },
            clickAction: function () {
                reportPreview.previewVisible(false);
                reportPreview.deactivate();
            }
        };
        designAction.contentData = {
            items: [
                { itemData: designAction, active: false },
                { getDisplayText: function () { return analytics_utils_1.getLocalization('Preview', 'ASPxReportsStringId.ToolBarItemText_Preview'); }, active: true }
            ]
        };
        _this.actions.push(designAction);
        _this.actions.push({
            id: constants_1.ActionId.FullScreen,
            text: analytics_utils_1.getLocalization('Full Screen', 'ASPxReportsStringId.ToolBarItemText_FullScreen'),
            imageClassName: 'dxrd-image-fullscreen',
            imageTemplateName: function () { return fullscreen() ? 'dxrd-svg-toolbar-fullscreen-exit' : 'dxrd-svg-toolbar-fullscreen'; },
            disabled: ko.observable(false),
            visible: !reportPreview.canSwitchToDesigner,
            selected: fullscreen,
            clickAction: function () {
                fullscreen(!fullscreen());
            }
        });
        _this._disposables.push(fullscreen);
        return _this;
    }
    PreviewDesignerActions.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeProperties();
    };
    PreviewDesignerActions.prototype.getActions = function (context) {
        return this.actions;
    };
    return PreviewDesignerActions;
}(analytics_utils_1.Disposable));
exports.PreviewDesignerActions = PreviewDesignerActions;
var ActionLists = (function (_super) {
    __extends(ActionLists, _super);
    function ActionLists(reportPreview, globalActionProviders, customizeActions, enabled) {
        var _this = _super.call(this, enabled) || this;
        _this._reportPreview = reportPreview;
        _this.globalActionProviders = globalActionProviders;
        _this.toolbarItems = ko.computed(function () {
            var globalActions = [];
            globalActionProviders().forEach(function (actionProvider) {
                globalActions.push.apply(globalActions, actionProvider.getActions(reportPreview));
            });
            customizeActions && customizeActions(globalActions);
            return globalActions;
        });
        _this._disposables.push(_this.toolbarItems);
        return _this;
    }
    ActionLists.prototype.processShortcut = function (actions, e) {
        if (this.shouldIgnoreProcessing(e))
            return;
        _super.prototype.processShortcut.call(this, actions, e);
    };
    ActionLists.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.resetObservableArray(this.globalActionProviders);
        this.removeProperties();
    };
    return ActionLists;
}(analytics_internal_1.ActionListsBase));
exports.ActionLists = ActionLists;
var PreviewActions = (function (_super) {
    __extends(PreviewActions, _super);
    function PreviewActions(reportPreview) {
        var _this = _super.call(this) || this;
        _this.actions = [];
        var printDisabled = reportPreview.exportDisabled;
        _this.actions.push({
            id: constants_1.ActionId.FirstPage,
            text: analytics_utils_1.getLocalization('First Page', 'ASPxReportsStringId.DocumentViewer_RibbonCommandText_FirstPage'),
            imageClassName: 'dxrd-image-preview-first',
            imageTemplateName: 'dxrd-svg-preview-first_page',
            disabled: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.pageIndex() < 1; })),
            visible: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: true, keyCode: 37 },
            clickAction: function () {
                if (reportPreview.pageIndex() > 0) {
                    reportPreview.goToPage(0);
                }
            }
        });
        _this.actions.push({
            id: constants_1.ActionId.PrevPage,
            text: analytics_utils_1.getLocalization('Previous Page', 'ASPxReportsStringId.ToolBarItemText_PreviousPage'),
            imageClassName: 'dxrd-image-preview-prev',
            imageTemplateName: 'dxrd-svg-preview-previous_page',
            disabled: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.pageIndex() < 1; })),
            visible: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: false, keyCode: 37 },
            clickAction: function () {
                if (reportPreview.pageIndex() >= 1) {
                    reportPreview.goToPage(reportPreview.pageIndex() - 1, false, 500);
                }
            },
        });
        var paginationSelectBoxViewModel = {
            id: constants_1.ActionId.Pagination,
            text: 'Pagination',
            imageClassName: 'dxrd-image-pager',
            disabled: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.pages().length === 0 || reportPreview.pageIndex() === -1; })),
            visible: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.previewVisible(); })),
            clickAction: $.noop,
            selectedItem: _this.wrapDisposable(ko.pureComputed({
                read: function () {
                    if (reportPreview.pageIndex() < 0) {
                        return null;
                    }
                    var items = paginationSelectBoxViewModel.pageItems();
                    return items && items.store && (items.store.length > reportPreview.pageIndex()) && items.store[reportPreview.pageIndex()];
                },
                write: function (newValue) {
                    if (!!newValue && (newValue.index || newValue.index === 0)) {
                        reportPreview.goToPage(newValue.index);
                    }
                },
                deferEvaluation: true
            })),
            pageItems: _this.wrapDisposable(ko.pureComputed(function () {
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
            focusOut: function (e) {
                if (!paginationSelectBoxViewModel._isPageChanged(e.component.option('text'))) {
                    reportPreview._currentPageText.notifySubscribers(reportPreview._currentPageText());
                }
            },
            keyUp: function (e) {
                if (e.event.which !== 13)
                    return;
                if (paginationSelectBoxViewModel._isPageChanged(e.component.option('text'))) {
                    paginationSelectBoxViewModel.opened(false);
                }
            },
            _isPageChanged: function (value) {
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
            searchEnabled: ko.observable(true),
            searchTimeout: 10,
            opened: ko.observable(false),
            templateName: 'dxrd-preview-pager'
        };
        _this.actions.push(paginationSelectBoxViewModel);
        _this.actions.push({
            id: constants_1.ActionId.NextPage,
            text: analytics_utils_1.getLocalization('Next Page', 'ASPxReportsStringId.ToolBarItemText_NextPage'),
            imageClassName: 'dxrd-image-preview-next',
            imageTemplateName: 'dxrd-svg-preview-next_page',
            disabled: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.pageIndex() < 0 || reportPreview.pageIndex() >= reportPreview.pages().length - 1; })),
            visible: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: false, keyCode: 39 },
            clickAction: function () {
                if (reportPreview.pageIndex() < reportPreview.pages().length - 1) {
                    reportPreview.goToPage(reportPreview.pageIndex() + 1, false, 500);
                }
            }
        });
        _this.actions.push({
            id: constants_1.ActionId.LastPage,
            text: analytics_utils_1.getLocalization('Last Page', 'ASPxReportsStringId.DocumentViewer_RibbonCommandText_LastPage'),
            imageClassName: 'dxrd-image-preview-last',
            imageTemplateName: 'dxrd-svg-preview-last_page',
            disabled: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.pageIndex() < 0 || reportPreview.pageIndex() >= reportPreview.pages().length - 1; })),
            visible: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: true, keyCode: 39 },
            clickAction: function () {
                if (reportPreview.pageIndex() < reportPreview.pages().length - 1) {
                    reportPreview.goToPage(reportPreview.pages().length - 1);
                }
            }
        });
        _this.actions.push({
            id: constants_1.ActionId.MultipageToggle,
            text: analytics_utils_1.getLocalization('Toggle Multipage Mode', 'ASPxReportsStringId.WebDocumentViewer_ToggleMultipageMode'),
            imageClassName: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.showMultipagePreview() ? 'dxrd-image-preview-single-page' : 'dxrd-image-preview-multipage'; })),
            imageTemplateName: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.showMultipagePreview() ? 'dxrd-svg-preview-single_page' : 'dxrd-svg-preview-multi_page_preview'; })),
            disabled: ko.observable(false),
            visible: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.previewVisible(); })),
            hotKey: { ctrlKey: true, keyCode: 77 },
            clickAction: function () {
                var zoom = reportPreview._zoom();
                reportPreview.showMultipagePreview(!reportPreview.showMultipagePreview());
                reportPreview.zoom(zoom);
            },
            hasSeparator: true
        });
        _this.actions.push({
            id: constants_1.ActionId.ZoomOut,
            text: analytics_utils_1.getLocalization('Zoom Out', 'DevExpress.XtraPrinting.PrintingSystemCommand.ZoomOut'),
            imageClassName: 'dxrd-image-zoomout',
            imageTemplateName: 'dxrd-svg-toolbar-zoomout',
            disabled: ko.observable(false),
            visible: true,
            zoomStep: reportPreview.zoomStep,
            hotKey: { ctrlKey: false, keyCode: 109 },
            clickAction: function () {
                var currentZoom = reportPreview.zoom();
                var zoomLevel = currentZoom > 0 ? currentZoom : reportPreview._zoom();
                reportPreview.zoom(Math.max(zoomLevel - reportPreview.zoomStep(), 0.01));
            },
            hasSeparator: true
        });
        _this.actions.push({
            id: constants_1.ActionId.ZoomSelector,
            text: analytics_utils_1.getLocalization('Zoom to Whole Page', 'DevExpress.XtraPrinting.PrintingSystemCommand.ZoomToWholePage'),
            imageClassName: 'dxrd-image-zoom',
            disabled: ko.observable(false),
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 187 },
            clickAction: function () {
                reportPreview.zoom(0);
            },
            templateName: 'dxrd-zoom-autofit-select-template',
            displayExpr: function (val) {
                if (val === constants_1.ZoomAutoBy.PageWidth) {
                    return analytics_utils_1.getLocalization('Page Width', 'DevExpress.XtraReports.UI.XtraReport.PageWidth');
                }
                else if (Math.round(val * 100) === 0) {
                    return analytics_utils_1.getLocalization('Whole Page', 'PreviewStringId.MenuItem_ZoomWholePage');
                }
                else {
                    return Math.round((val || reportPreview.zoom.peek()) * 100) + '%';
                }
            },
            onCustomItemCreating: function (e) { e.customItem = analytics_internal_1.parseZoom(e.text); },
            zoom: reportPreview.zoom,
            zoomLevels: reportPreview.predefinedZoomLevels,
            zoomItems: _this.wrapDisposable(ko.pureComputed(function () {
                var items = reportPreview.predefinedZoomLevels.slice(0);
                if (reportPreview.showMultipagePreview() === false && items.indexOf(0) === -1) {
                    items.push(constants_1.ZoomAutoBy.PageWidth);
                    items.push(constants_1.ZoomAutoBy.WholePage);
                }
                return items;
            }))
        });
        _this.actions.push({
            id: constants_1.ActionId.ZoomIn,
            text: analytics_utils_1.getLocalization('Zoom In', 'DevExpress.XtraPrinting.PrintingSystemCommand.ZoomIn'),
            imageClassName: 'dxrd-image-zoomin',
            imageTemplateName: 'dxrd-svg-toolbar-zoomin',
            disabled: ko.observable(false),
            visible: true,
            zoomStep: reportPreview.zoomStep,
            hotKey: { ctrlKey: false, keyCode: 107 },
            clickAction: function () {
                var currentZoom = reportPreview.zoom();
                var zoomLevel = currentZoom > 0 ? currentZoom : reportPreview._zoom();
                reportPreview.zoom(Math.min(zoomLevel + reportPreview.zoomStep(), 10));
            }
        });
        _this.actions.push({
            id: constants_1.ActionId.HighlightEditingFields,
            text: analytics_utils_1.getLocalization('Highlight Editing Fields', 'DevExpress.XtraPrinting.PrintingSystemCommand.HighlightEditingFields'),
            imageClassName: 'dxrp-image-hightlight-editing-fields',
            imageTemplateName: 'dxrd-svg-toolbar-hightlightEditingFields',
            disabled: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.editingFieldsProvider().length < 1; })),
            visible: _this.wrapDisposable(ko.pureComputed(function () {
                var available = settings_1.EditablePreviewEnabled();
                var viewerVisible = reportPreview.previewVisible();
                return available && viewerVisible;
            })),
            selected: _this.wrapDisposable(ko.pureComputed(function () { return reportPreview.editingFieldsHighlighted(); })),
            hotKey: { ctrlKey: true, keyCode: 72 },
            clickAction: function () {
                reportPreview.editingFieldsHighlighted(!reportPreview.editingFieldsHighlighted());
            },
            hasSeparator: true
        });
        _this.actions.push({
            id: constants_1.ActionId.Print,
            text: analytics_utils_1.getLocalization('Print', 'ASPxReportsStringId.DocumentViewer_RibbonPrintGroupText'),
            imageClassName: 'dxrd-image-print',
            imageTemplateName: 'dxrd-svg-preview-print',
            hasSeparator: true,
            disabled: printDisabled,
            visible: true,
            hotKey: { ctrlKey: true, keyCode: 80 },
            clickAction: function () {
                if (printDisabled()) {
                    return;
                }
                reportPreview.printDocument();
            }
        });
        _this.actions.push({
            id: constants_1.ActionId.PrintPage,
            text: analytics_utils_1.getLocalization('Print Page', 'ASPxReportsStringId.DocumentViewer_RibbonCommandText_PrintPage'),
            imageClassName: 'dxrd-image-print-page',
            imageTemplateName: 'dxrd-svg-preview-print_page',
            disabled: printDisabled,
            visible: true,
            clickAction: function () {
                if (printDisabled()) {
                    return;
                }
                reportPreview.printDocument(reportPreview.pageIndex());
            }
        });
        return _this;
    }
    PreviewActions.prototype.wrapDisposable = function (object) {
        this._disposables.push(object);
        return object;
    };
    PreviewActions.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeProperties();
    };
    PreviewActions.prototype.getActions = function (context) {
        return this.actions;
    };
    return PreviewActions;
}(analytics_utils_1.Disposable));
exports.PreviewActions = PreviewActions;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mobilePreview_1 = __webpack_require__(99);
var _mobileSearch_1 = __webpack_require__(50);
var _galleryModel_1 = __webpack_require__(101);
var _paginator_1 = __webpack_require__(102);
var previewParametersViewModel_1 = __webpack_require__(44);
var _previewRequestWrapper_1 = __webpack_require__(9);
var _sizeUtils_1 = __webpack_require__(103);
var _mobilePreviewParameterHelper_1 = __webpack_require__(104);
var exportOptionsModel_1 = __webpack_require__(48);
var constants_1 = __webpack_require__(7);
var _mobileActionList_1 = __webpack_require__(106);
var _mobilePreviewModel_1 = __webpack_require__(107);
var _parametersPopup_1 = __webpack_require__(51);
var constants_2 = __webpack_require__(108);
var _progressBarUtils_1 = __webpack_require__(49);
var _sizeUtils_2 = __webpack_require__(18);
var analytics_internal_1 = __webpack_require__(2);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
function createMobilePreview(bindingSettings) {
    var callbacks = bindingSettings.callbacks;
    var bindingModel = bindingSettings.model;
    var bindingElement = bindingSettings.element;
    var previewWrapper = new _previewRequestWrapper_1.PreviewRequestWrapper(null, callbacks), reportPreview = new mobilePreview_1.MobileReportPreview(bindingModel.handlerUri, previewWrapper, undefined, callbacks, undefined, bindingModel.mobileModeSettings);
    var $root = $(bindingElement);
    var updatePreviewContentSize_ = _sizeUtils_1.updatePreviewContentSizeMobile(reportPreview.previewWrapperSize, $root);
    updatePreviewContentSize_();
    var gallery = new _galleryModel_1.GalleryModel(reportPreview, reportPreview.previewWrapperSize);
    var searchModel = new _mobileSearch_1.MobileSearchViewModel(reportPreview, gallery);
    var parametersModel = new previewParametersViewModel_1.PreviewParametersViewModel(reportPreview, new _mobilePreviewParameterHelper_1.MobilePreviewParameterHelper(bindingModel.parametersInfo && bindingModel.parametersInfo.knownEnums, callbacks));
    var exportModel = new exportOptionsModel_1.ExportOptionsModel(reportPreview);
    reportPreview.allowURLsWithJSContent = bindingModel.allowURLsWithJSContent;
    previewWrapper.initialize(reportPreview, parametersModel, searchModel);
    var exportTypes = ko.observableArray([
        constants_1.ExportFormatID.PDF, constants_1.ExportFormatID.XLS, constants_1.ExportFormatID.XLSX,
        constants_1.ExportFormatID.RTF, constants_1.ExportFormatID.DOCX, constants_1.ExportFormatID.HTML,
        constants_1.ExportFormatID.Text, constants_1.ExportFormatID.CSV, constants_1.ExportFormatID.Image
    ]);
    var mobileActions = _mobileActionList_1.getPreviewActionsMobile({ reportPreview: reportPreview, exportModel: exportModel, parametersModel: parametersModel, searchModel: searchModel, exportTypes: exportTypes, callbacks: callbacks });
    reportPreview.pageIndex.subscribe(function (newVal) { mobileActions.visible(false); });
    reportPreview.actionsVisible = mobileActions.visible;
    var designerModelOptions = {
        rootStyle: 'dxrd-preview dxrdp-mobile dxd-back-primary',
        reportPreview: reportPreview,
        parametersModel: parametersModel,
        exportModel: exportModel,
        searchModel: searchModel,
        rtl: reportPreview.rtlViewer,
        brickEventsDisabled: ko.observable(false),
        gallery: gallery,
        paginator: new _paginator_1.MobilePaginator(reportPreview, gallery),
        availableFormats: exportTypes
    };
    var designerModel = new _mobilePreviewModel_1.MobilePreviewModel(designerModelOptions);
    designerModel.slideOptions = {
        dispose: function () {
            var model = designerModel.slideOptions;
            if (ko.isComputed(model.swipeEnabled))
                model.swipeEnabled.dispose();
            if (ko.isComputed(model.scrollAvailable))
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
        scrollAvailable: ko.computed(function () {
            return !(reportPreview.scrollReachedTop() && reportPreview.scrollReachedLeft()
                && reportPreview.scrollReachedRight() && reportPreview.scrollReachedBottom());
        }),
        disabled: reportPreview.interactionDisabled,
        swipeEnabled: ko.computed(function () {
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
    var parametersPopup = new _parametersPopup_1.ParametersPopupModel(parametersModel, reportPreview);
    designerModel.parts = [
        { id: constants_2.MobilePreviewElements.Surface, templateName: constants_2.MobilePreviewElements.Surface, model: designerModel.reportPreview },
        { id: constants_2.MobilePreviewElements.Search, templateName: constants_2.MobilePreviewElements.Search, model: designerModel.searchModel },
        { id: constants_2.MobilePreviewElements.Pages, templateName: constants_2.MobilePreviewElements.Pages, model: designerModel.paginator },
        { id: constants_2.MobilePreviewElements.MobileActions, templateName: constants_2.MobilePreviewElements.MobileActions, model: mobileActions },
        { id: constants_2.MobilePreviewElements.Parameters, templateName: constants_2.MobilePreviewElements.Parameters, model: parametersPopup },
        { id: constants_1.PreviewElements.ExportTool, templateName: constants_1.PreviewElements.ExportTool, model: designerModel.reportPreview.exportHandler }
    ];
    callbacks && callbacks.customizeParts && callbacks.customizeParts(designerModel.parts);
    var $actions = $root.find('.dxrdp-mobile-actions');
    var $window = $(window);
    var updateProgressPosition = _progressBarUtils_1.getUpdateProgressBarCallback(bindingModel.progressBarSettings, designerModel, reportPreview, bindingElement, $window);
    var updateMobilePreviewActionsPosition_ = _sizeUtils_2.getDockedElementCallback($actions, $root, $window, '.dxrdp-mobile-actions');
    var updateSizesCallback = function () {
        updatePreviewContentSize_ && updatePreviewContentSize_();
        updateProgressPosition && updateProgressPosition();
    };
    designerModel.updateSurfaceSize = updateSizesCallback;
    designerModel.resizeCallback = function () {
        if (parametersModel.popupInfo.visible()) {
            parametersPopup.initVisibilityIcons();
        }
        updateSizesCallback();
        if (reportPreview.actionsVisible())
            updateMobilePreviewActionsPosition_(bindingElement);
    };
    window.addEventListener('resize', designerModel.resizeCallback);
    var onScroll = function () {
        if (reportPreview.actionsVisible())
            updateMobilePreviewActionsPosition_(bindingElement);
    };
    window.addEventListener('scroll', onScroll);
    designerModel._addDisposable({
        dispose: function () {
            window.removeEventListener('resize', designerModel.resizeCallback);
            window.removeEventListener('scroll', onScroll);
            designerModel.slideOptions.dispose();
            mobileActions.dispose();
        }
    });
    designerModel._addDisposable(reportPreview.actionsVisible.subscribe(function (newValue) {
        if (newValue)
            updateMobilePreviewActionsPosition_(bindingElement);
    }));
    analytics_internal_1.appendStaticContextToRootViewModel(designerModel, analytics_internal_1.staticContext);
    if (bindingElement && !reportPreview.canSwitchToDesigner && bindingSettings.applyBindings) {
        callbacks.beforeRender && callbacks.beforeRender(designerModel);
        $(bindingElement).children().remove();
        ko.applyBindings(designerModel, bindingElement);
    }
    return designerModel;
}
exports.createMobilePreview = createMobilePreview;


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
var reportPreview_1 = __webpack_require__(39);
var constants_1 = __webpack_require__(7);
var _mobilePage_1 = __webpack_require__(100);
var ko = __webpack_require__(1);
var MobileReportPreview = (function (_super) {
    __extends(MobileReportPreview, _super);
    function MobileReportPreview(handlerUri, previewRequestWrapper, previewHandlersHelper, callbacks, rtl, mobileSettings) {
        if (rtl === void 0) { rtl = false; }
        if (mobileSettings === void 0) { mobileSettings = { readerMode: true, animationEnabled: true }; }
        var _this = _super.call(this, handlerUri, previewRequestWrapper, previewHandlersHelper, callbacks, rtl) || this;
        _this.availablePages = ko.observable(null);
        _this.visiblePages = ko.computed(function () {
            if (!_this.availablePages()) {
                return _this.pages();
            }
            else {
                return _this.pages().filter(function (x) { return _this.availablePages().indexOf(x.pageIndex) !== -1; });
            }
        });
        _this.topOffset = ko.observable(0);
        _this.previewWrapperSize = ko.observable({ width: 0, height: 0 });
        _this.searchPanelVisible = ko.observable(false);
        _this.actionsVisible = ko.observable(false);
        _this.scrollReachedLeft = ko.observable(false);
        _this.scrollReachedRight = ko.observable(false);
        _this.scrollReachedTop = ko.observable(true);
        _this.scrollReachedBottom = ko.observable(true);
        _this.zoomUpdating = ko.observable(false);
        _this.mobileZoom = ko.computed({
            read: function () {
                var currentZoom = _this.zoom();
                return currentZoom > 0 ? currentZoom : _this._zoom();
            },
            write: function (newVal) {
                _this.zoom(newVal);
            }
        });
        _this.readerMode = mobileSettings.readerMode;
        var globalAnimationEnabled = mobileSettings.animationEnabled;
        _this.animationSettings = { zoomEnabled: ko.observable(globalAnimationEnabled), swipeEnabled: ko.observable(globalAnimationEnabled) };
        _this.canSwitchToDesigner = false;
        _this.autoFitBy(constants_1.ZoomAutoBy.PageWidth);
        _this.showMultipagePreview(true);
        _this._disposables.push(_this.interactionDisabled = ko.pureComputed(function () { return _this.pages().length === 0; }), _this.searchPanelVisible.subscribe(function (newVal) {
            if (newVal) {
                _this.actionsVisible(false);
            }
        }));
        return _this;
    }
    MobileReportPreview.prototype.createPage = function (pageIndex, processClick, loading) {
        return new _mobilePage_1.MobilePreviewPage(this, pageIndex, processClick, loading);
    };
    MobileReportPreview.prototype.createBrickClickProcessor = function (cyclePageIndex) {
        var _this = this;
        var _clickHandler = _super.prototype.createBrickClickProcessor.call(this, cyclePageIndex);
        var func = function (brick) {
            if (_this.zoomUpdating())
                return;
            if (cyclePageIndex !== _this.pageIndex()) {
                _this.actionsVisible(false);
                var supscription = _this.actionsVisible.subscribe(function (newVal) {
                    supscription.dispose();
                    _this.actionsVisible(false);
                });
            }
            _clickHandler(brick);
        };
        return func;
    };
    MobileReportPreview.prototype._hasActiveEditingFields = function () {
        return this.visiblePages().some(function (p) {
            var pageEditFields = ko.unwrap(p.editingFields);
            return pageEditFields && pageEditFields.some(function (x) { return ko.unwrap(x.active); });
        });
    };
    MobileReportPreview.prototype.showActions = function (s) {
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
    };
    MobileReportPreview.prototype.onSlide = function (e) {
        this.scrollReachedLeft(true);
        this.scrollReachedRight(true);
        if (this.autoFitBy() === constants_1.ZoomAutoBy.None && e.removedItems && e.removedItems[0].blocks().length === 1 && e.addedItems && e.addedItems[0].blocks().length === 1)
            this.autoFitBy(constants_1.ZoomAutoBy.PageWidth);
    };
    MobileReportPreview.prototype.goToPage = function (pageIndex, forcePage) {
        _super.prototype.goToPage.call(this, pageIndex, forcePage);
    };
    MobileReportPreview.prototype.getScrollViewOptions = function () {
        var _this = this;
        var options = {
            onUpdated: function (e) { _this.setScrollReached(e); },
            direction: 'both',
            pushBackValue: 0,
            bounceEnabled: false,
            disabled: this.zoomUpdating
        };
        return options;
    };
    MobileReportPreview.prototype.setScrollReached = function (e) {
        this.scrollReachedLeft(e.reachedLeft);
        this.scrollReachedRight(e.reachedRight);
        this.scrollReachedTop(e.reachedTop);
        this.scrollReachedBottom(e.reachedBottom);
    };
    MobileReportPreview.prototype.dispose = function () {
        this.mobileZoom.dispose();
        this.visiblePages.dispose();
        _super.prototype.dispose.call(this);
    };
    return MobileReportPreview;
}(reportPreview_1.ReportPreview));
exports.MobileReportPreview = MobileReportPreview;


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
var _page_1 = __webpack_require__(43);
var MobilePreviewPage = (function (_super) {
    __extends(MobilePreviewPage, _super);
    function MobilePreviewPage(preview, pageIndex, processClick, loading) {
        var _this = _super.call(this, preview, pageIndex, processClick, loading) || this;
        _this.maxZoom = 1;
        _this.selectBrick = function (path, ctrlKey) {
            var currentBrick = _this.brick();
            !ctrlKey && _this.resetBrickRecusive(currentBrick);
            if (!path) {
                return;
            }
            if (!currentBrick) {
                _this['_selectedBrickPath'] = path;
                return;
            }
            _this.bricks().forEach(function (brick) { brick.indexes === path && brick.active(true); });
        };
        return _this;
    }
    return MobilePreviewPage;
}(_page_1.PreviewPage));
exports.MobilePreviewPage = MobilePreviewPage;


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
var _utils_1 = __webpack_require__(12);
var settings_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(7);
var ko = __webpack_require__(1);
var analytics_utils_1 = __webpack_require__(0);
var GalleryModel = (function (_super) {
    __extends(GalleryModel, _super);
    function GalleryModel(preview, previewWrapperSize) {
        var _this = _super.call(this) || this;
        _this.preview = preview;
        _this.previewWrapperSize = previewWrapperSize;
        _this._spacing = 1;
        _this._animationTimeout = null;
        _this.repaint = ko.observable({});
        _this.repaintTimeout = ko.observable();
        _this.horizontal = ko.observable(1);
        _this.vertical = ko.observable(1);
        _this.pageCount = 0;
        _this.isAnimated = ko.observable(false);
        _this.items = ko.observableArray([{ blocks: ko.observableArray([]) }, { blocks: ko.observableArray([]) }, { blocks: ko.observableArray([]) }]);
        _this.currentBlockText = ko.observable('');
        _this.selectedIndexReal = ko.observable(0);
        _this.selectedIndex = ko.observable(0);
        var oldIndex = _this.selectedIndex();
        _this._disposables.push(_this.contentSize = ko.pureComputed(function () {
            var blocks = _this.items()[_this.selectedIndex()].blocks();
            var width, height;
            if (blocks.length === 1) {
                var block = blocks[0];
                var position = block.position();
                width = Math.max(position.width, block.page.width());
                height = Math.max(position.height, block.page.height());
            }
            return { width: width ? width + 'px' : 'auto', height: height ? height + 'px' : 'auto' };
        }));
        _this.animationEnabled = preview.animationSettings.swipeEnabled;
        var _calcHorizontalVertical = function () {
            var _zoom = preview._zoom();
            var pageHeight = Math.ceil(preview._pageHeight() * _utils_1.getCurrentResolution(_zoom) / settings_1.previewDefaultResolution());
            var pageWidth = Math.ceil(preview._pageWidth() * _utils_1.getCurrentResolution(_zoom) / settings_1.previewDefaultResolution());
            var _containerSize = previewWrapperSize();
            var horizontal = (preview.autoFitBy() != constants_1.ZoomAutoBy.PageWidth && (Math.floor(_containerSize.width / (pageWidth + 2 * _this._spacing)))) || 1;
            var vertical = Math.floor(_containerSize.height / (pageHeight + 2 * _this._spacing)) || 1;
            _this.horizontal(horizontal);
            _this.vertical(vertical);
        };
        var updateGalleryContent = function () {
            _calcHorizontalVertical();
            _this.pageCount = _this.horizontal() * _this.vertical();
            _this.updateContent(preview, _this.pageCount);
        };
        _this._disposables.push(previewWrapperSize.subscribe(function () {
            _this.items().forEach(function (item) { return item.blocks().forEach(function (block) { return block.repaint = true; }); });
            updateGalleryContent();
            var currentGalleryItem = _this.items()[_this.selectedIndex()];
            _this.updateBlocks(currentGalleryItem, _this.pageCount, preview, _this.selectedIndexReal(), preview.animationSettings.zoomEnabled());
            _this.repaint.valueHasMutated();
        }));
        _this._disposables.push(preview.visiblePages.subscribe(function () {
            for (var i = 0; i < _this.items().length; i++) {
                _this.items()[i].blocks([]);
                _this.items()[i].realIndex = -1;
            }
            updateGalleryContent();
        }));
        _this._disposables.push(preview.pageIndex.subscribe(updateGalleryContent));
        _this._disposables.push(preview.zoomUpdating.subscribe(function (newVal) {
            if (newVal)
                return;
            clearTimeout(_this.repaintTimeout());
            _this.repaintTimeout(setTimeout(function () { return _this.repaint.valueHasMutated(); }, 410));
        }));
        _this._disposables.push(preview._zoom.subscribe(function () {
            _calcHorizontalVertical();
            var pageCount = _this.horizontal() * _this.vertical();
            if (_this.pageCount !== pageCount) {
                _this.pageCount = pageCount;
                _this.items().forEach(function (item) { return item.blocks().forEach(function (block) { return block.repaint = true; }); });
                _this.updateContent(preview, pageCount);
            }
            else if (_this.pageCount === 1) {
                var block = _this.items()[_this.selectedIndex()].blocks()[0];
                _this.items().forEach(function (item, index) {
                    if (index != _this.selectedIndex())
                        item.blocks().forEach(function (block) { return block.repaint = true; });
                });
                setTimeout(function () {
                    block.position({
                        left: block.position().left,
                        top: block.position().top,
                        height: Math.max(_this.previewWrapperSize().height, block.page.height()),
                        width: Math.max(_this.previewWrapperSize().width, block.page.width())
                    });
                });
            }
        }));
        _this._disposables.push(_this.selectedIndexReal.subscribe(function (newVal) {
            if (newVal >= 0) {
                _this.changePage(preview);
            }
            else if (newVal < 0) {
                _this.selectedIndexReal(0);
            }
        }));
        _this._disposables.push(_this.selectedIndex.subscribe(function (newVal) {
            var result = newVal - oldIndex;
            if (result === -2 || result === 1) {
                _this.selectedIndexReal(_this.selectedIndexReal() + 1);
            }
            else if (result === 2 || result === -1) {
                _this.selectedIndexReal(_this.selectedIndexReal() - 1);
            }
            oldIndex = newVal;
        }));
        _this._disposables.push(_this.swipeLeftEnable = ko.computed(function () {
            return _this.selectedIndexReal() !== 0;
        }));
        _this._disposables.push(_this.swipeRightEnable = ko.computed(function () {
            return _this.selectedIndexReal() != (Math.ceil(preview.visiblePages().length / (_this.horizontal() * _this.vertical())) - 1);
        }));
        return _this;
    }
    GalleryModel.prototype._createBlock = function (previewPage, className, visible) {
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
            position: ko.observable({ top: 0, left: 0, width: 0, height: 0 })
        };
    };
    GalleryModel.prototype.dispose = function () {
        clearTimeout(this.repaintTimeout());
        _super.prototype.dispose.call(this);
    };
    GalleryModel.prototype.updatePagesVisible = function (preview) {
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
    };
    GalleryModel.prototype.updateCurrentBlock = function () {
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
    };
    GalleryModel.prototype.updateContent = function (preview, pagesCount) {
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
    };
    GalleryModel.prototype.updateBlockPositions = function (blocks, visible) {
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
    };
    GalleryModel.prototype.updateStartBlocks = function (galleryItem, pages) {
        var currentBlockPages = galleryItem.blocks().map(function (x) { return x.page; });
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
    };
    GalleryModel.prototype.updateLastBlocks = function (galleryItem, pages) {
        var currentBlockPages = galleryItem.blocks().map(function (x) { return x.page; });
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
    };
    GalleryModel.prototype.updateBlocks = function (galleryItem, pagesCount, preview, index, useAnimation) {
        if (useAnimation === void 0) { useAnimation = false; }
        var blocks = galleryItem.blocks();
        if (galleryItem.realIndex !== index
            || (blocks.length !== pagesCount || blocks[0].page.pageIndex === -1)
            || blocks.some(function (x) { return x.repaint; })) {
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
                this._animationTimeout = setTimeout(function () {
                    self.updateBlockPositions(galleryItem.blocks(), false);
                }, 400);
            }
            else {
                self.updateBlockPositions(galleryItem.blocks(), false);
            }
        }
    };
    GalleryModel.prototype.changePage = function (preview) {
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
    };
    return GalleryModel;
}(analytics_utils_1.Disposable));
exports.GalleryModel = GalleryModel;


/***/ }),
/* 102 */
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
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var MobilePaginator = (function (_super) {
    __extends(MobilePaginator, _super);
    function MobilePaginator(reportPreview, gallery) {
        var _this = _super.call(this) || this;
        _this.visible = ko.observable(false).extend({ notify: 'always' });
        _this._disposables.push(_this.text = ko.computed(function () {
            setTimeout(function () { _this.visible(true); }, 1);
            if (reportPreview.pageIndex() === -1) {
                return analytics_utils_1.getLocalization('0 pages', 'ASPxReportsStringId.WebDocumentViewer_0Pages');
            }
            else {
                var ofText = analytics_utils_1.getLocalization('of', 'ASPxReportsStringId.ToolBarItemText_OfLabel');
                var pageText = analytics_utils_1.getLocalization('Page', 'ASPxReportsStringId.ToolBarItemText_PageLabel');
                return pageText + ' ' + gallery.currentBlockText() + ' ' + ofText + ' ' + reportPreview.pages().length;
            }
        }));
        return _this;
    }
    return MobilePaginator;
}(analytics_utils_1.Disposable));
exports.MobilePaginator = MobilePaginator;
ko.bindingHandlers['dxrdMobilePaginator'] = {
    init: function (element, valueAccessor) {
        var values = valueAccessor();
        var $element = $(element);
        var timeoutId = null;
        var hideAnimationTimeoutId = null;
        values.visible.subscribe(function (newVal) {
            if (newVal) {
                $element.removeClass('dxrdp-hide').addClass('dxrdp-show');
                timeoutId && clearTimeout(timeoutId);
                timeoutId = setTimeout(function () { values.visible(false); }, 2000);
            }
            else {
                $element.removeClass('dxrdp-show').addClass('dxrdp-hide');
                hideAnimationTimeoutId && clearTimeout(hideAnimationTimeoutId);
                hideAnimationTimeoutId = setTimeout(function () {
                    $element.removeClass('dxrdp-hide');
                }, 500);
            }
        });
    }
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updatePreviewContentSizeMobile(previewWrapperSize, $root) {
    return function () {
        var height = $root.outerHeight();
        var width = $root.outerWidth();
        previewWrapperSize({ width: width, height: height });
    };
}
exports.updatePreviewContentSizeMobile = updatePreviewContentSizeMobile;


/***/ }),
/* 104 */
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
var previewParameterHelper_1 = __webpack_require__(17);
var _editorTemplates_1 = __webpack_require__(105);
var MobilePreviewParameterHelper = (function (_super) {
    __extends(MobilePreviewParameterHelper, _super);
    function MobilePreviewParameterHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobilePreviewParameterHelper.prototype.getRangeEditor = function () {
        return _editorTemplates_1.editorTemplates.rangeEditor;
    };
    return MobilePreviewParameterHelper;
}(previewParameterHelper_1.PreviewParameterHelper));
exports.MobilePreviewParameterHelper = MobilePreviewParameterHelper;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.editorTemplates = {
    rangeEditor: { header: 'dxrv-range-parameter-mobile' },
};


/***/ }),
/* 106 */
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
var settings_1 = __webpack_require__(6);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_utils_1 = __webpack_require__(0);
var MobileActionList = (function (_super) {
    __extends(MobileActionList, _super);
    function MobileActionList(actions) {
        var _this = _super.call(this) || this;
        _this.actions = actions;
        _this.visible = ko.observable(false);
        return _this;
    }
    MobileActionList.prototype.dispose = function () {
        this.actions.forEach(function (action) {
            if (action.content && action.content.dispose) {
                action.content.dispose();
                delete action.content.dispose;
            }
        });
        _super.prototype.dispose.call(this);
    };
    return MobileActionList;
}(analytics_utils_1.Disposable));
exports.MobileActionList = MobileActionList;
function getPreviewActionsMobile(options) {
    var exportToModel = {
        visible: ko.observable(false),
        items: ko.pureComputed(function () {
            var allFormats = options.exportModel._getExportFormatItems();
            var availableFormats = options.exportTypes().filter(function (x) { return allFormats.indexOf(x) !== -1; });
            if (availableFormats.length > 9) {
                availableFormats.splice(9, availableFormats.length - 9);
            }
            else if (availableFormats.length < 9) {
                var notUsedFormats = allFormats.filter(function (x) { return availableFormats.indexOf(x) === -1; });
                availableFormats.push.apply(availableFormats, notUsedFormats.slice(0, 9 - availableFormats.length));
            }
            return availableFormats.map(function (item) {
                item.action = function (model) { options.exportModel._exportDocumentByFormat(model && model.format); };
                return item;
            });
        })
    };
    var actions = [
        {
            clickAction: function () {
                options.searchModel.searchPanelVisible(true);
                options.searchModel.editorVisible(true);
                options.searchModel.focusEditor({ currentTarget: $('.dxrdp-taptosearch') });
                options.reportPreview.actionsVisible(false);
            },
            imageClassName: 'dxrd-image-search',
            imageTemplateName: 'dxrd-svg-preview-search',
            visible: settings_1.SearchAvailable
        },
        {
            clickAction: function () { exportToModel.visible(!exportToModel.visible()); },
            imageClassName: 'dxrd-image-export-to',
            imageTemplateName: 'dxrd-svg-preview-export-export-to',
            visible: true,
            content: {
                name: 'dxrd-menu-export-content',
                data: exportToModel,
                dispose: function () {
                    exportToModel.items().forEach(function (item) {
                        delete item.action;
                    });
                    exportToModel.items.dispose();
                }
            }
        },
        {
            clickAction: function () {
                options.parametersModel.popupInfo.visible(!options.parametersModel.popupInfo.visible());
                options.reportPreview.actionsVisible(false);
            },
            imageClassName: 'dxrd-image-parameters',
            imageTemplateName: 'dxrd-svg-tabs-parameters',
            visible: options.parametersModel.popupInfo.notEmpty
        }
    ];
    options.callbacks && options.callbacks.customizeActions && options.callbacks.customizeActions(actions);
    return new MobileActionList(actions);
}
exports.getPreviewActionsMobile = getPreviewActionsMobile;


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
var ko = __webpack_require__(1);
var _previewModel_1 = __webpack_require__(46);
var MobilePreviewModel = (function (_super) {
    __extends(MobilePreviewModel, _super);
    function MobilePreviewModel(options) {
        var _this = _super.call(this, options) || this;
        _this.slideOptions = options.slideOptions;
        _this.gallery = options.gallery;
        _this.paginator = options.paginator;
        _this.brickEventsDisabled = options.brickEventsDisabled;
        _this.availableFormats = options.availableFormats;
        _this._disposables.push(options.gallery);
        if (ko.isComputed(options.brickEventsDisabled))
            _this._disposables.push(options.brickEventsDisabled);
        if (options.slideOptions && ko.isComputed(options.slideOptions.scrollAvailable))
            _this._disposables.push(options.slideOptions.scrollAvailable);
        if (options.slideOptions && ko.isComputed(options.slideOptions.swipeEnabled))
            _this._disposables.push(options.slideOptions.swipeEnabled);
        _this._disposables.push(options.paginator);
        _this._disposables.push(options.searchModel);
        return _this;
    }
    return MobilePreviewModel;
}(_previewModel_1.PreviewDisposableModel));
exports.MobilePreviewModel = MobilePreviewModel;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilePreviewElements = {
    Surface: 'dxrdp-surface-mobile',
    Search: 'dxrdp-search-mobile',
    Pages: 'dxrdp-pages-mobile',
    MobileActions: 'dxrdp-surface-mobile-bottom',
    Parameters: 'dxrd-menu-parameters-content'
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_utils_1 = __webpack_require__(0);
exports.formatSearchResult = function (value) { return value && (analytics_utils_1.getLocalization('page', 'ASPxReportsStringId.WebDocumentViewer_SearchPageNumberText') + ' ' + (value.pageIndex + 1)); };


/***/ }),
/* 110 */
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
var analytics_internal_1 = __webpack_require__(2);
var DateRangeDialogElementsKeyboardHelper = (function (_super) {
    __extends(DateRangeDialogElementsKeyboardHelper, _super);
    function DateRangeDialogElementsKeyboardHelper(_hide, _visible) {
        var _this = _super.call(this) || this;
        _this._hide = _hide;
        _this._visible = _visible;
        _this.controlElementClassName = 'dx-accessibility-daterange-item';
        _this.predefinedDateRangesKeyboardHelper = new PredefinedDateRangesKeyboardHelper(_this);
        _this._disposables.push(_this.predefinedDateRangesKeyboardHelper, _this._visible.subscribe(function (newVal) {
            var timeout = setTimeout(function () { newVal && _this.predefinedDateRangesKeyboardHelper.focus(); }, 300);
            _this._disposables.push({ dispose: function () { return clearTimeout(timeout); } });
        }));
        return _this;
    }
    DateRangeDialogElementsKeyboardHelper.prototype.createControlElement = function (element, index) {
        return new analytics_internal_1.ControlElementWithParentHighlight(element, this.getContainer().getElementsByClassName('dxrv-daterange-editor-item')[index]);
    };
    DateRangeDialogElementsKeyboardHelper.prototype.itemHandleEscKey = function (e, index) {
        this._hide();
        return true;
    };
    DateRangeDialogElementsKeyboardHelper.prototype.itemHandleUpArrowKey = function (e, index) {
        if (!!(e && e.altKey)) {
            this._hide();
            return true;
        }
        return _super.prototype.itemHandleUpArrowKey.call(this, e, index);
    };
    DateRangeDialogElementsKeyboardHelper.prototype.itemHandleTabKey = function (e, index) {
        var nextIndex = this.setFocusToNext(index);
        if (nextIndex == 0) {
            this.predefinedDateRangesKeyboardHelper.focus();
        }
        return true;
    };
    DateRangeDialogElementsKeyboardHelper.prototype.itemHandleShiftTabKey = function (e, index) {
        var nextIndex = this.setFocusToPrevious(index);
        if (nextIndex == 0) {
            this.predefinedDateRangesKeyboardHelper.focus();
        }
        return true;
    };
    return DateRangeDialogElementsKeyboardHelper;
}(analytics_internal_1.AccessibilityKeyboardHelperBase));
exports.DateRangeDialogElementsKeyboardHelper = DateRangeDialogElementsKeyboardHelper;
var PredefinedDateRangesKeyboardHelper = (function (_super) {
    __extends(PredefinedDateRangesKeyboardHelper, _super);
    function PredefinedDateRangesKeyboardHelper(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        return _this;
    }
    PredefinedDateRangesKeyboardHelper.prototype.itemHandleEscKey = function (e, index) {
        this.owner.itemHandleEscKey.call(this.owner, e, 0);
        return true;
    };
    PredefinedDateRangesKeyboardHelper.prototype.itemHandleTabKey = function (e, index) {
        this.owner.setFocusToNext(0);
        return true;
    };
    PredefinedDateRangesKeyboardHelper.prototype.itemHandleShiftTabKey = function (e, index) {
        this.owner.setFocusToPrevious(0);
        return true;
    };
    PredefinedDateRangesKeyboardHelper.prototype.itemHandleUpArrowKey = function (e, index) {
        if (!!(e && e.altKey)) {
            return this.owner.itemHandleUpArrowKey.call(this.owner, e);
        }
        return _super.prototype.itemHandleUpArrowKey.call(this, e, index);
    };
    return PredefinedDateRangesKeyboardHelper;
}(analytics_internal_1.ListKeyboardHelper));
exports.PredefinedDateRangesKeyboardHelper = PredefinedDateRangesKeyboardHelper;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = __webpack_require__(6);
var _mobileSearch_1 = __webpack_require__(50);
var constants_1 = __webpack_require__(7);
var $ = __webpack_require__(3);
var gallery_1 = __webpack_require__(126);
exports.slowdownDisctanceFactor = 2.5;
exports.minScale = 0.92;
function setTransform($element, transform) {
    $element.css({
        '-webkit-transform': transform,
        'transform': transform
    });
}
var EventProcessor = (function () {
    function EventProcessor(element, slideOptions) {
        var _this = this;
        this.element = element;
        this.slideOptions = slideOptions;
        this._direction = {
            vertical: false,
            horizontal: false,
            scrollDown: false
        };
        this.isLeftMove = false;
        this.isRightMove = false;
        this.$window = $(window);
        this.$element = $(element),
            this.$body = $(document.body),
            this.$gallery = this.$element.find('.dxrd-mobile-gallery');
        this.$galleryblocks = this.$gallery.find('.dxrd-gallery-blocks');
        this.firstMobilePageOffset = this._getFirstPageOffset();
        this.slideOptions.searchPanel.height.subscribe(function (newVal) {
            if (slideOptions.disabled())
                return;
            if (!_this.firstMobilePageOffset)
                _this.firstMobilePageOffset = _this._getFirstPageOffset();
            if (_this.slideOptions.readerMode) {
                _this.slideOptions.topOffset(newVal);
            }
            else {
                _this.slideOptions.topOffset(Math.min(newVal, Math.max(0, _mobileSearch_1.MobileSearchViewModel.maxHeight - _this.firstMobilePageOffset.top)));
            }
            if (!newVal) {
                _this.applySearchAnimation(newVal);
            }
            else if (newVal === _mobileSearch_1.MobileSearchViewModel.maxHeight) {
                _this.slideOptions.searchPanel.searchPanelVisible(true);
                _this.applySearchAnimation(newVal);
            }
            else {
                var dif = 1 - exports.minScale;
                var perc = newVal / _mobileSearch_1.MobileSearchViewModel.maxHeight;
                var scale = 1 - dif * perc;
                setTransform(_this.$galleryblocks, 'scale(' + Math.max(exports.minScale, scale) + ')');
            }
        });
    }
    EventProcessor.prototype._getFirstPageOffset = function () {
        return this.$galleryblocks.find('.dxrd-mobile-page').eq(0).offset();
    };
    EventProcessor.prototype.getDirection = function (x, y) {
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
    };
    EventProcessor.prototype.setPosition = function (x, y) {
        this.isLeftMove = this.latestX > x;
        this.isRightMove = this.latestX < x;
        this.latestY = y;
        this.latestX = x;
    };
    EventProcessor.prototype.initialize = function (x, y) {
        this._startingPositionX = x;
        this._startingPositionY = y;
        this.latestX = x;
        this.latestY = y;
        this._direction = { horizontal: false, vertical: false, scrollDown: false };
    };
    EventProcessor.prototype.start = function (e) {
        this.$body.addClass('dxrd-prevent-refresh');
        this.$galleryblocks = this.$gallery.find('.dxrd-gallery-blocks');
        if (!this.slideOptions.topOffset()) {
            this.firstMobilePageOffset = this._getFirstPageOffset();
            if (this.firstMobilePageOffset) {
                this.firstMobilePageOffset.top = this.firstMobilePageOffset.top * exports.minScale;
            }
        }
        this.initialize(e.pageX, e.pageY);
    };
    EventProcessor.prototype.move = function (e) {
        if (this.slideOptions.zoomUpdating() || this.slideOptions.galleryIsAnimated() || this.slideOptions.disabled()) {
            return;
        }
        if (settings_1.SearchAvailable() && !this.slideOptions.searchPanel.editorVisible()) {
            var direction = this.getDirection(e.pageX, e.pageY);
            if (!direction.vertical && !direction.horizontal)
                return;
            if (direction.vertical && direction.scrollDown || this.slideOptions.searchPanel.height() !== 0) {
                if (this.slideOptions.reachedTop() && (_mobileSearch_1.MobileSearchViewModel.maxHeight + this.$element.offset().top) > this.$window.scrollTop()) {
                    this.slideOptions.brickEventsDisabled(true);
                    e.stopPropagation();
                    var currentHeight = this.slideOptions.searchPanel.height();
                    var difference = currentHeight + (e.clientY - this.latestY) / exports.slowdownDisctanceFactor;
                    var distance = difference > 0 ? Math.min(difference, _mobileSearch_1.MobileSearchViewModel.maxHeight) : 0;
                    this.slideOptions.searchPanel.height(distance);
                }
            }
        }
        this.setPosition(e.clientX, e.clientY);
    };
    EventProcessor.prototype.end = function (e) {
        var _this = this;
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
                var galleryInstance = gallery_1.default.getInstance(this.$gallery.get(0));
                var repaintTimeout = this.slideOptions.repaintTimeout;
                if (this.slideOptions.reachedLeft() && this.isRightMove && galleryInstance.gallery.swipeLeftEnable()) {
                    galleryInstance.prevItem();
                    clearTimeout(repaintTimeout());
                    repaintTimeout(setTimeout(function () { return galleryInstance.repaint(); }, 410));
                }
                else if (this.slideOptions.reachedRight() && this.isLeftMove && galleryInstance.gallery.swipeRightEnable()) {
                    galleryInstance.nextItem();
                    clearTimeout(repaintTimeout());
                    repaintTimeout(setTimeout(function () { return galleryInstance.repaint(); }, 410));
                }
            }
        }
        if (settings_1.SearchAvailable() && !this.slideOptions.searchPanel.editorVisible()) {
            if (this.slideOptions.searchPanel.height() >= _mobileSearch_1.MobileSearchViewModel.maxHeight / 2) {
                this.slideOptions.searchPanel.height(_mobileSearch_1.MobileSearchViewModel.maxHeight);
            }
            else {
                this.slideOptions.searchPanel.height(0);
            }
            if (this.slideOptions.searchPanel.height() == _mobileSearch_1.MobileSearchViewModel.maxHeight) {
                this.slideOptions.autoFitBy(constants_1.ZoomAutoBy.PageWidth);
            }
        }
        this.$body.removeClass('dxrd-prevent-refresh');
        setTimeout(function () { _this.slideOptions.brickEventsDisabled(false); }, 10);
    };
    EventProcessor.prototype.applySearchAnimation = function (value) {
        var _this = this;
        if (this.slideOptions.animationSettings.zoomEnabled()) {
            this.$galleryblocks.addClass('dxrdp-animation');
            this.$element.addClass('dxrdp-animation');
            setTimeout(function () {
                _this.$galleryblocks.removeClass('dxrdp-animation');
                _this.$element.removeClass('dxrdp-animation');
            }, 410);
        }
        setTransform(this.$galleryblocks, !value ? '' : 'scale(0.92)');
    };
    return EventProcessor;
}());
exports.EventProcessor = EventProcessor;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = DevExpress.events;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editingField_1 = __webpack_require__(16);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var ImagePainter = (function () {
    function ImagePainter(options) {
        this.format = ko.observable();
        this.image = options.imageSource;
        this.sizeMode = options.sizeMode;
        this.alignment = options.alignment;
    }
    ImagePainter.prototype._drawImage = function (imageSource, context, scale, contentSize) {
        var _this = this;
        var deferred = $.Deferred();
        if (!imageSource)
            return deferred.resolve().promise();
        var background = new Image();
        var prefix = 'data:image/' + (this.format() || 'png') + ';base64,';
        if (this.format() === 'svg') {
            prefix = 'data:image/svg+xml;charset=UTF-8;base64,';
        }
        var imageBase64 = imageSource.indexOf('base64,') !== -1 ? imageSource : prefix + imageSource;
        background.src = imageBase64;
        background.onload = function () {
            var size = _this._getImageSize(background, scale, contentSize);
            var location = _this._getImageCoordinate(size, contentSize);
            context.drawImage(background, location.x, location.y, size.width, size.height);
            deferred.resolve();
        };
        return deferred.promise();
    };
    ImagePainter.prototype._getImageSize = function (image, scale, contentSize) {
        var sizeMode = this.sizeMode();
        var width = image.width * scale, height = image.height * scale;
        if (sizeMode === editingField_1.ImageSizeMode.StretchImage) {
            width = contentSize.width;
            height = contentSize.height;
        }
        else if (sizeMode === editingField_1.ImageSizeMode.Cover || sizeMode === editingField_1.ImageSizeMode.ZoomImage || (sizeMode === editingField_1.ImageSizeMode.Squeeze && (contentSize.width < width || contentSize.height < height))) {
            var ratio = (sizeMode === editingField_1.ImageSizeMode.Cover ? Math.max : Math.min)(contentSize.width / width, contentSize.height / height);
            width *= ratio;
            height *= ratio;
        }
        return { width: width, height: height };
    };
    ImagePainter.prototype._getImageCoordinate = function (imageSize, contentSize) {
        var alignment = this.alignment();
        var x = 0, y = 0;
        if (!(alignment in editingField_1.ImageAlignment) && (this.sizeMode() === editingField_1.ImageSizeMode.Cover || this.sizeMode() === editingField_1.ImageSizeMode.ZoomImage)) {
            alignment = editingField_1.ImageAlignment.MiddleCenter;
        }
        if (alignment === editingField_1.ImageAlignment.MiddleLeft || alignment === editingField_1.ImageAlignment.MiddleCenter || alignment === editingField_1.ImageAlignment.MiddleRight) {
            y = (contentSize.height - imageSize.height) / 2;
        }
        else if (alignment === editingField_1.ImageAlignment.BottomLeft || alignment === editingField_1.ImageAlignment.BottomCenter || alignment === editingField_1.ImageAlignment.BottomRight) {
            y = contentSize.height - imageSize.height;
        }
        if (alignment === editingField_1.ImageAlignment.TopCenter || alignment === editingField_1.ImageAlignment.MiddleCenter || alignment === editingField_1.ImageAlignment.BottomCenter) {
            x = (contentSize.width - imageSize.width) / 2;
        }
        else if (alignment === editingField_1.ImageAlignment.TopRight || alignment === editingField_1.ImageAlignment.MiddleRight || alignment === editingField_1.ImageAlignment.BottomRight) {
            x = contentSize.width - imageSize.width;
        }
        return { x: x, y: y };
    };
    ImagePainter.prototype.refresh = function (context, scale, contentSize) {
        if (scale === void 0) { scale = 1; }
        contentSize = contentSize || {
            width: context.canvas.width,
            height: context.canvas.height
        };
        return this._drawImage(this.image(), context, scale, contentSize);
    };
    return ImagePainter;
}());
exports.ImagePainter = ImagePainter;


/***/ }),
/* 114 */
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
var editingField_1 = __webpack_require__(16);
var _imagePainter_1 = __webpack_require__(113);
var _signaturePainter_1 = __webpack_require__(115);
var imageEditingField_1 = __webpack_require__(20);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var events = __webpack_require__(112);
var analytics_widgets_1 = __webpack_require__(5);
var Painter = (function (_super) {
    __extends(Painter, _super);
    function Painter(options) {
        var _this = _super.call(this) || this;
        _this._pointerDownHandler = function (e) {
            var point = _this._getContextPoint(e);
            point && _this.signaturePainter.drawCircle(_this._context, point.x, point.y, _this.lineColor(), _this.lineWidth());
        };
        _this._pointerMoveHandler = function (e) {
            if (e.pointerType === 'touch' || e.pointerType === 'pen' || (e.pointerType === 'mouse' && e.originalEvent['buttons'] == 1)) {
                var point = _this._getContextPoint(e);
                point && _this.signaturePainter.drawPath(_this._context, point.x, point.y, _this.lineColor(), _this.lineWidth());
            }
        };
        _this._pointerLeaveHandler = function (e) {
            _this.signaturePainter.resetLastPosition();
        };
        _this.format = function (newVal) {
            if (newVal)
                _this.imagePainter.format(newVal);
            return _this.imagePainter.format();
        };
        _this.imageSizeMode = ko.observable(editingField_1.ImageSizeMode.Normal);
        _this.imageAlignment = ko.observable(editingField_1.ImageAlignment.TopLeft);
        _this.lineWidth = ko.observable(1);
        _this.lineColor = ko.observable('#000000');
        _this.zoom = options.zoom;
        _this.image = ko.observable(options.imageSource);
        _this.imageSizeMode(options.sizeMode);
        _this.imageAlignment(options.alignment);
        _this.imagePainter = new _imagePainter_1.ImagePainter({
            alignment: _this.imageAlignment,
            imageSource: _this.image,
            sizeMode: _this.imageSizeMode
        });
        _this.format(options.imageType);
        _this._disposables.push(_this.signaturePainter = new _signaturePainter_1.SignaturePainter());
        _this._disposables.push(_this.signaturePainter.hasPoints.subscribe(function (newVal) {
            if (newVal)
                _this._setCanvasSize(_this.initialSize.width, _this.initialSize.height);
            else
                _this._setCanvasSize(_this.initialSize.width * _this.zoom(), _this.initialSize.height * _this.zoom());
            _this.refresh();
        }));
        _this._disposables.push(_this.scale = ko.computed(function () {
            return _this.hasSignature() ? _this.zoom() : 1;
        }));
        if (options.canDraw) {
            _this._disposables.push((options.canDraw).subscribe(function (newValue) {
                if (newValue) {
                    _this._addEvents();
                }
                else {
                    _this._removeEvents();
                }
            }));
        }
        _this._disposables.push(_this.zoom.subscribe(function (newVal) {
            if (!_this.signaturePainter.hasPoints()) {
                _this._setCanvasSize(_this.initialSize.width * newVal, _this.initialSize.height * newVal);
                _this.refresh();
            }
        }));
        return _this;
    }
    Painter.prototype._getContextPoint = function (e) {
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
        return { x: x, y: y };
    };
    Painter.prototype._addEvents = function () {
        var element = this.$element.get(0);
        events.on(element, 'dxpointerdown', this._pointerDownHandler);
        events.on(element, 'dxpointermove', this._pointerMoveHandler);
        events.on(element, 'dxpointerleave', this._pointerLeaveHandler);
    };
    Painter.prototype._removeEvents = function () {
        var element = this.$element.get(0);
        events.off(element, 'dxpointerdown', this._pointerDownHandler);
        events.off(element, 'dxpointermove', this._pointerMoveHandler);
        events.off(element, 'dxpointerleave', this._pointerLeaveHandler);
    };
    Painter.prototype._setCanvasSize = function (width, height) {
        this._context.canvas.setAttribute('width', width);
        this._context.canvas.setAttribute('height', height);
    };
    Painter.prototype._cleanCanvas = function () {
        this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    };
    Painter.prototype.clear = function () {
        this.image(null);
        this.signaturePainter.reset();
        this._cleanCanvas();
    };
    Painter.prototype.refresh = function () {
        var _this = this;
        this._cleanCanvas();
        var zoom = this.signaturePainter.hasPoints() ? 1 : this.zoom();
        var size = this.signaturePainter.hasPoints() ? this.initialSize : undefined;
        this.imagePainter.refresh(this._context, zoom, size)
            .done(function () { return _this.signaturePainter.refresh(_this._context); });
    };
    Painter.prototype.initSize = function (element, zoom) {
        this.$element = element;
        this.initialSize = {
            width: this.$element.outerWidth() / zoom,
            height: this.$element.outerHeight() / zoom
        };
    };
    Painter.prototype.initCanvas = function (element, zoom) {
        var canvas = this.$element.find('canvas')[0];
        this._context = canvas.getContext('2d');
        this._setCanvasSize(this.initialSize.width * zoom, this.initialSize.height * zoom);
        this.imagePainter.refresh(this._context, zoom, {
            width: this._context.canvas.offsetWidth,
            height: this._context.canvas.offsetHeight
        });
    };
    Painter.prototype.imageFormatByType = function (imageType) {
        return imageType === imageEditingField_1.ImageEditingFieldViewModel.__DefaultImageType ? 'png' : imageType;
    };
    Painter.prototype.getImage = function () {
        return this._context.canvas.toDataURL('image/png');
    };
    Painter.prototype.hasSignature = function () {
        return this.signaturePainter.hasPoints();
    };
    Painter.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._removeEvents();
        this.$element = null;
        this._context = null;
    };
    Painter.prototype.reset = function (initialImage, initialAlignment, initialSizeMode, initialImageType) {
        this.image(initialImage);
        this.imageAlignment(initialAlignment);
        this.imageSizeMode(initialSizeMode);
        this.format(this.imageFormatByType(initialImageType));
        this.signaturePainter.reset();
        this.refresh();
    };
    return Painter;
}(analytics_utils_1.Disposable));
exports.Painter = Painter;
ko.bindingHandlers['dxPainter'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var options = (valueAccessor());
        $(element).children().remove();
        var templateHtml = analytics_widgets_1.getTemplate('dx-painter');
        var $element = $(element).append(templateHtml);
        var child = $element.children()[0];
        var $child = $(child);
        var model = new Painter(options);
        model.initSize($child, options.zoom());
        analytics_internal_1.addDisposeCallback(element, function () {
            model.dispose();
        });
        ko.applyBindings(model, child);
        model.initCanvas($child, options.zoom());
        return { controlsDescendantBindings: true };
    }
};


/***/ }),
/* 115 */
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
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var SignaturePainter = (function (_super) {
    __extends(SignaturePainter, _super);
    function SignaturePainter() {
        var _this = _super.call(this) || this;
        _this._points = ko.observableArray([]);
        _this.hasPoints = ko.computed(function () { return _this._points().length > 0; });
        _this._disposables.push(_this.hasPoints);
        return _this;
    }
    SignaturePainter.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.reset();
    };
    SignaturePainter.prototype._drawPath = function (context, x, y, lastX, lastY, color, lineWidth) {
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.lineJoin = 'round';
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.closePath();
        context.stroke();
    };
    SignaturePainter.prototype._drawCircle = function (context, x, y, color, lineWidth) {
        context.beginPath();
        context.fillStyle = color;
        context.arc(x, y, lineWidth / 2, 0, 2 * Math.PI, false);
        context.fill();
    };
    SignaturePainter.prototype._drawAllPoints = function (context) {
        var _this = this;
        this._points().forEach(function (point) {
            if (point.isStart) {
                _this._drawCircle(context, point.x, point.y, point.color, point.width);
            }
            else {
                _this._drawPath(context, point.x, point.y, point.lastX, point.lastY, point.color, point.width);
            }
        });
    };
    SignaturePainter.prototype.drawCircle = function (context, x, y, color, width) {
        this._lastX = x;
        this._lastY = y;
        this._drawCircle(context, x, y, color, width);
        this._points.push({ x: this._lastX, y: this._lastY, color: color, width: width, isStart: true });
    };
    SignaturePainter.prototype.drawPath = function (context, x, y, color, width) {
        this._drawPath(context, x, y, this._lastX, this._lastY, color, width);
        this._points.push({ x: x, y: y, lastX: this._lastX, lastY: this._lastY, color: color, width: width });
        this._lastX = x;
        this._lastY = y;
    };
    SignaturePainter.prototype.resetLastPosition = function () {
        this._lastX = undefined;
        this._lastY = undefined;
    };
    SignaturePainter.prototype.resetPoints = function () {
        this._points([]);
    };
    SignaturePainter.prototype.reset = function () {
        this.resetLastPosition();
        this.resetPoints();
    };
    SignaturePainter.prototype.refresh = function (context) {
        this._drawAllPoints(context);
    };
    return SignaturePainter;
}(analytics_utils_1.Disposable));
exports.SignaturePainter = SignaturePainter;


/***/ }),
/* 116 */
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
var _utils_1 = __webpack_require__(12);
var _pictureEditorToolbarItem_1 = __webpack_require__(117);
var editingField_1 = __webpack_require__(16);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var _pictureEditorTypes_1 = __webpack_require__(23);
var PictureEditorActionProvider = (function (_super) {
    __extends(PictureEditorActionProvider, _super);
    function PictureEditorActionProvider(_editorModel, _popupOptions) {
        var _this = _super.call(this) || this;
        _this._editorModel = _editorModel;
        _this._popupOptions = _popupOptions;
        return _this;
    }
    PictureEditorActionProvider.prototype._getValues = function (enumType, prefix, propertyName) {
        var _this = this;
        var array = [];
        _utils_1.getEnumValues(enumType).forEach(function (item) {
            array.push({
                value: item,
                iconTemplate: 'dxrd-svg-pictureeditor-' + prefix + '_' + item.toLowerCase(),
                isSelected: ko.computed(function () { return _this._editorModel.painter[propertyName]() === enumType[item]; }),
                action: function () {
                    _this._editorModel.painter[propertyName](enumType[item]);
                    _this._editorModel.painter.refresh();
                }
            });
        });
        return array;
    };
    PictureEditorActionProvider.prototype._getColorValues = function () {
        var _this = this;
        var array = [];
        PictureEditorActionProvider.colors.forEach(function (item) {
            array.push({
                value: item,
                isSelected: ko.computed(function () { return _this._editorModel.painter.lineColor() === item; }),
                action: function (e) {
                    _this._editorModel.painter.lineColor(item);
                }
            });
        });
        return array;
    };
    PictureEditorActionProvider.prototype._initPopupOptions = function (options) {
        var _this = this;
        options.boundary = this._popupOptions.boundary;
        options.getPositionTarget = function () { return _this._popupOptions.getPositionTarget(); };
        options.target = this._popupOptions.target;
        options.container = this._popupOptions.container;
        return options;
    };
    PictureEditorActionProvider.prototype.createOpenFileAction = function (action) {
        var openFileActionOptions = {
            id: _pictureEditorTypes_1.PictureEditorActionId.OpenFile,
            icon: 'dxrd-svg-pictureeditor-toolbar_open',
            title: analytics_utils_1.getLocalization('Load Image', 'PreviewStringId.ImageEditingFieldEditor_LoadImage'),
            active: ko.observable(false),
            action: function (e) { return action(e); }
        };
        return new _pictureEditorToolbarItem_1.PictureEditorToolbarItem(openFileActionOptions);
    };
    PictureEditorActionProvider.prototype.createImagePickerAction = function (images, filterEnabled, action) {
        var _this = this;
        filterEnabled = filterEnabled && images.every(function (image) { return image.text !== undefined; });
        var active = ko.observable(false);
        var filter = ko.observable('');
        images.forEach(function (image) {
            if (filterEnabled) {
                _this._disposables.push(image.visible = ko.computed(function () {
                    return !!analytics_internal_1.findMatchesInString(image.text, filter());
                }));
            }
            else {
                image.visible = true;
            }
        });
        var popupOptions = this._initPopupOptions({
            width: 'auto',
            height: analytics_internal_1.calculateWithZoomFactor(300) + 'px',
            visible: active,
            contentTemplate: filterEnabled ? 'dx-picture-editing-imagepickerwithfilter' : 'dx-picture-editing-imagespicker',
            contentData: {
                filterEnabled: filterEnabled,
                filter: filter,
                searchPlaceholder: function () { return analytics_internal_1.searchPlaceholder(); },
                contentWidth: this._editorModel.painter.initialSize.width * 2 + 35,
                width: Math.min(this._editorModel.painter.initialSize.width, 150),
                height: Math.min(this._editorModel.painter.initialSize.height, 150),
                action: function (data) {
                    if (data.url) {
                        _utils_1.getImageBase64(data.url).done(function (result) {
                            action(result);
                        }).fail(function (e) {
                            analytics_internal_1.ShowMessage(e.name + ' :' + e.message.split(':').pop(), 'error');
                        });
                    }
                    else {
                        action(data.data);
                    }
                },
                images: images
            }
        });
        return new _pictureEditorToolbarItem_1.PictureEditorToolbarItemWithPopup({
            id: _pictureEditorTypes_1.PictureEditorActionId.PickImage,
            icon: 'dxrd-svg-pictureeditor-image_gallery',
            title: analytics_utils_1.getLocalization('Choose Image', 'PreviewStringId.ImageEditingFieldEditor_ChooseImage'),
            active: active,
            template: 'dx-picture-editing-toolbar-popup',
            templateOptions: popupOptions
        });
    };
    PictureEditorActionProvider.prototype.createSizingAction = function () {
        var alignmentActive = ko.observable(false);
        var popupOptions = this._initPopupOptions({
            width: analytics_internal_1.calculateWithZoomFactor(174) + 'px',
            height: analytics_internal_1.calculateWithZoomFactor(300) + 'px',
            visible: alignmentActive,
            contentTemplate: 'dx-picture-editing-sizemode-alignment',
            contentData: {
                sizeModeText: analytics_utils_1.getLocalization('Size Mode', 'PreviewStringId.ImageEditingFieldEditor_SizeMode'),
                sizeMode: this._editorModel.painter.imageSizeMode,
                sizeModeValues: this._getValues(editingField_1.ImageSizeMode, 'size_mode', 'imageSizeMode'),
                alignmentText: analytics_utils_1.getLocalization('Alignment', 'PreviewStringId.ImageEditingFieldEditor_Alignment'),
                alignment: this._editorModel.painter.imageAlignment,
                alignmentValues: this._getValues(editingField_1.ImageAlignment, 'alignment', 'imageAlignment'),
            }
        });
        return new _pictureEditorToolbarItem_1.PictureEditorToolbarItemWithPopup({
            id: _pictureEditorTypes_1.PictureEditorActionId.Alignment,
            icon: 'dxrd-svg-pictureeditor-toolbar_size_mode_and_alignment',
            title: analytics_utils_1.getLocalization('Size Mode and Alignment', 'PreviewStringId.ImageEditingFieldEditor_SizeModeAndAlignment'),
            active: alignmentActive,
            template: 'dx-picture-editing-toolbar-popup',
            templateOptions: popupOptions
        });
    };
    PictureEditorActionProvider.prototype.createBrushAction = function () {
        var brushItemActive = ko.observable(false);
        var popupOptions = this._initPopupOptions({
            width: analytics_internal_1.calculateWithZoomFactor(226) + 'px',
            height: analytics_internal_1.calculateWithZoomFactor(295) + 'px',
            visible: brushItemActive,
            contentTemplate: 'dx-picture-editing-brush-options',
            contentData: {
                lineWidth: this._editorModel.painter.lineWidth,
                lineColor: this._editorModel.painter.lineColor,
                colors: this._getColorValues(),
                brushWidthText: analytics_utils_1.getLocalization('Brush size', 'PreviewStringId.ImageEditingFieldEditor_BrushSize'),
                brushColorText: analytics_utils_1.getLocalization('Brush color', 'PreviewStringId.ImageEditingFieldEditor_BrushColor'),
            }
        });
        return new _pictureEditorToolbarItem_1.PictureEditorToolbarItemWithPopup({
            id: _pictureEditorTypes_1.PictureEditorActionId.Brush,
            icon: 'dxrd-svg-pictureeditor-toolbar_brush_options',
            title: analytics_utils_1.getLocalization('Brush Options', 'PreviewStringId.ImageEditingFieldEditor_BrushOptions'),
            active: brushItemActive,
            template: 'dx-picture-editing-toolbar-popup',
            templateOptions: popupOptions,
            renderedHandler: function (elem, mod) {
                if (elem[0].nodeName.toLowerCase() === 'svg') {
                    var brushIcon = $(elem[0]).find('.BrushColor');
                    if (brushIcon) {
                        brushIcon.attr('data-bind', '{ style: { fill: $data.templateOptions.contentData.lineColor }}');
                        ko.applyBindingsToDescendants(mod, brushIcon[0]);
                    }
                }
            }
        });
    };
    PictureEditorActionProvider.prototype.createResetItem = function (action) {
        var clearItemOptions = {
            id: _pictureEditorTypes_1.PictureEditorActionId.Reset,
            icon: 'dxrd-svg-pictureeditor-toolbar_reset',
            title: analytics_utils_1.getLocalization('Reset', 'PreviewStringId.ImageEditingFieldEditor_Reset'),
            active: ko.observable(false),
            action: function (e) { return action(); }
        };
        return new _pictureEditorToolbarItem_1.PictureEditorToolbarItem(clearItemOptions);
    };
    PictureEditorActionProvider.prototype.createClearItem = function (action) {
        var clearItemOptions = {
            id: _pictureEditorTypes_1.PictureEditorActionId.Clear,
            icon: 'dxrd-svg-pictureeditor-toolbar_clear',
            title: analytics_utils_1.getLocalization('Clear', 'PreviewStringId.ImageEditingFieldEditor_Clear'),
            active: ko.observable(false),
            action: function (e) { return action(); }
        };
        return new _pictureEditorToolbarItem_1.PictureEditorToolbarItem(clearItemOptions);
    };
    PictureEditorActionProvider.colors = ['#FFFFFF', '#FFC0C0', '#FFE0C0', '#FFFFC0', '#C0FFC0', '#C0FFFF', '#C0C0FF', '#FFC0FF', '#E0E0E0', '#FF8080', '#FFC080', '#FFFF80', '#80FF80', '#80FFFF', '#8080FF', '#FF80FF', '#C0C0C0', '#FF0000', '#FF8000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#808080', '#C00000', '#C04000', '#C0C000', '#00C000', '#00C0C0', '#0000C0', '#C000C0', '#404040', '#800000', '#804000', '#808000', '#008000', '#008080', '#000080', '#800080', '#000000', '#400000', '#804040', '#404000', '#004000', '#004040', '#000040', '#400040'];
    return PictureEditorActionProvider;
}(analytics_utils_1.Disposable));
exports.PictureEditorActionProvider = PictureEditorActionProvider;


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
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var PictureEditorToolbarItem = (function () {
    function PictureEditorToolbarItem(options) {
        this.id = options.id;
        this.icon = options.icon;
        this.action = options.action;
        this.active = options.active;
        this.renderedHandler = options.renderedHandler;
        this.title = options.title;
    }
    PictureEditorToolbarItem.prototype.dispose = function () {
        this.renderedHandler = null;
        this.action = null;
    };
    return PictureEditorToolbarItem;
}());
exports.PictureEditorToolbarItem = PictureEditorToolbarItem;
var PopupComponentBase = (function (_super) {
    __extends(PopupComponentBase, _super);
    function PopupComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._component = ko.observable();
        _this.onContentReady = function (e) {
            _this._component(e.component);
        };
        _this.closeOnOutsideClick = function (e) {
            var component = _this.getComponent();
            var $content = component && $(component.content());
            return !$content || !($content.has(e.target).length || $content.is(e.target));
        };
        return _this;
    }
    PopupComponentBase.prototype.getComponent = function () {
        return ko.unwrap(this._component);
    };
    PopupComponentBase.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        var component = this._component();
        component && component.dispose();
        this._component(null);
    };
    return PopupComponentBase;
}(analytics_utils_1.Disposable));
exports.PopupComponentBase = PopupComponentBase;
var PictureEditorToolbarItemWithPopup = (function (_super) {
    __extends(PictureEditorToolbarItemWithPopup, _super);
    function PictureEditorToolbarItemWithPopup(options) {
        var _this = _super.call(this, options) || this;
        _this.template = options.template;
        if (options.templateOptions) {
            _this.templateOptions = options.templateOptions;
            _this._popup = new PopupComponentBase();
            _this.templateOptions.onContentReady = _this._popup.onContentReady;
            _this.templateOptions.closeOnOutsideClick = _this._popup.closeOnOutsideClick;
            _this.templateOptions.onShown = function (e) {
                var $element = $(e.element);
                var topElement = $element.position().top;
                var popupsOffset = e['model'].getPositionTarget().offset().top - $(e.component.content()).offset().top;
                var $arrow = $($element.find('.dx-popover-arrow')[0]);
                $arrow.css('top', popupsOffset + topElement - 24 - 11);
            };
        }
        return _this;
    }
    PictureEditorToolbarItemWithPopup.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._popup.dispose();
        this.templateOptions = null;
    };
    return PictureEditorToolbarItemWithPopup;
}(PictureEditorToolbarItem));
exports.PictureEditorToolbarItemWithPopup = PictureEditorToolbarItemWithPopup;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function convertMapToKeyValuePair(object) {
    var result = [];
    if (object) {
        Object.keys(object).forEach(function (key) {
            result.push({ Key: key, Value: object[key] });
        });
    }
    return result;
}
exports.convertMapToKeyValuePair = convertMapToKeyValuePair;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = '21.2.3';


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.ui.dxPopup };

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
var $ = __webpack_require__(3);
var ko = __webpack_require__(1);
var jsReportViewer_1 = __webpack_require__(88);
var eventGenerator_1 = __webpack_require__(53);
var _initializer_1 = __webpack_require__(89);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var JSReportViewerBinding = (function (_super) {
    __extends(JSReportViewerBinding, _super);
    function JSReportViewerBinding(_options, customEventRaiser) {
        var _this = _super.call(this, _options, customEventRaiser) || this;
        _this._deferreds = [];
        _options.viewerModel = analytics_internal_1._wrapModelInObservable(_options.viewerModel);
        _this.sender = new jsReportViewer_1.JSReportViewer(_options.viewerModel);
        _this._closeReportOnDisposing = !_options.keepReportOnComponentDisposal;
        _options.callbacks && _options.callbacks._eventSenderCreated && _options.callbacks._eventSenderCreated(_this.sender);
        return _this;
    }
    JSReportViewerBinding.prototype.dispose = function () {
        if (this._closeReportOnDisposing && this.sender && this.sender.Close)
            this.sender.Close();
        (this._deferreds || []).forEach(function (deferred) {
            deferred.reject();
        });
        _super.prototype.dispose.call(this);
    };
    JSReportViewerBinding.prototype._initializeEvents = function () {
        var _this = this;
        return this._getAvailableEvents(eventGenerator_1.EventGenerator.generatePreviewEvents(function (eventName, args) {
            _this._fireEvent(eventName, args);
        }));
    };
    JSReportViewerBinding.prototype._initializeCallbacks = function () {
        if (this._options.callbacks) {
            return this._initializeEvents();
        }
    };
    JSReportViewerBinding.prototype._applyBindings = function (model, _$element) {
        this._disposables.push(model);
        _$element.children().remove();
        var child = _$element.append(this._templateHtml).children()[0];
        if (!child)
            return;
        ko.cleanNode(child);
        this._callbacks && this._callbacks.beforeRender && this._callbacks.beforeRender(model);
        ko.applyBindings(model, child);
        this._fireEvent('Init');
    };
    JSReportViewerBinding.prototype._createModel = function (element) {
        this._callbacks = this._initializeCallbacks();
        return _initializer_1.createPreviewModel(this._options, element, this._callbacks, false);
    };
    JSReportViewerBinding.prototype.applyBindings = function (element) {
        var _this = this;
        var _$element = $(element);
        _$element.addClass('dx-designer');
        if (this._options.reportPreview && this._options.parts) {
            this._applyBindings(this._options, _$element);
            return;
        }
        var requestOptions = this._options.requestOptions;
        var applyModel = function () {
            if (requestOptions && requestOptions.invokeAction) {
                _this._options.handlerUri = _this._getServerActionUrl(requestOptions.host, requestOptions.invokeAction);
            }
            _this._deferreds.push(_this._createModel(element)
                .done(function (previewModel) {
                _this.sender.previewModel = previewModel;
                if (_this._options.reportUrl) {
                    if (ko.isSubscribable(_this._options.reportUrl)) {
                        _this._disposables.push(_this._options.reportUrl.subscribe(function (newVal) {
                            _this.sender.OpenReport(newVal);
                        }));
                    }
                }
                _this._createDisposeFunction(element);
                _this._applyBindings(_this.sender.previewModel, _$element);
                _initializer_1.initPreviewModel(previewModel, _this._options);
            }));
        };
        if (requestOptions) {
            this._getLocalizationRequest().done(function (localization) {
                localization && analytics_utils_1.addCultureInfo(localization);
            }).always(function () {
                applyModel();
            });
        }
        else {
            applyModel();
        }
    };
    return JSReportViewerBinding;
}(analytics_internal_1.JSDesignerBindingCommon));
exports.JSReportViewerBinding = JSReportViewerBinding;
ko.bindingHandlers['dxReportViewer'] = {
    init: function (element, valueAccessor) {
        new JSReportViewerBinding(ko.unwrap(valueAccessor()) || {}).applyBindings(element);
        return { controlsDescendantBindings: true };
    }
};


/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.data.ArrayStore };

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.data.DataSource };

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.ui.dxTextBox };

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
var analytics_widgets_internal_1 = __webpack_require__(10);
var ko = __webpack_require__(1);
__webpack_require__(124);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var editor_prefix = 'dx-searcheditor', EDITOR_CLASS = editor_prefix + '', EDITOR_BUTTON_CLASS = editor_prefix + '-button dx-widget dx-dropdowneditor-button', EDITOR_BUTTON_SELECTOR = '.' + editor_prefix + '-button', EDITOR_BUTTON_ICON_CLASS = editor_prefix + '-icon dx-dropdowneditor-icon dx-icon-dxrd-image-move', EDITOR_BUTTON_ICON_UP_TEMPLATE = 'dxrd-svg-operations-moveup', EDITOR_BUTTON_ICON_DOWN_TEMPLATE = 'dxrd-svg-operations-movedown';
var dxSearchEditor = (function (_super) {
    __extends(dxSearchEditor, _super);
    function dxSearchEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._$buttons = [];
        return _this;
    }
    dxSearchEditor.prototype.getComponentName = function () {
        return 'dxTextBox';
    };
    dxSearchEditor.prototype.ctor = function (element, options) {
        var _this = this;
        this.option('onKeyDown', function (e) {
            if (e.event.key === analytics_internal_1.KeyboardEnum.Enter) {
                e.event.stopPropagation();
                e.event.preventDefault();
                e.component.findNext(e.event.shiftKey);
            }
        });
        this.option('onFocusOut', function (e) {
            e.component._searchModel.searchText(e.component.option('text'));
        });
        this._activeStateUnit = EDITOR_BUTTON_SELECTOR;
        this._focusRequestRaised = function () { _this.focus(); };
        this._searchModel = options.searchModel;
        this._searchModel.focusRequested.subscribe(function (val) { return _this._focusRequestRaised(); });
    };
    dxSearchEditor.prototype.findNext = function (searchUp) {
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
    };
    dxSearchEditor.prototype._init = function () {
        analytics_internal_1._getSuper(this)['_init'].apply(this);
        var $element = $(this.element());
        $element.addClass(EDITOR_CLASS);
        this._koContext = ko.contextFor($element.get(0));
    };
    dxSearchEditor.prototype._render = function () {
        var _this = this;
        analytics_internal_1._getSuper(this)['_render'].apply(this);
        this.on('keyDown', function (e) {
            if (e.event.key == 'ArrowUp')
                _this.findNext(true) && e.event.stopPropagation();
            if (e.event.key == 'ArrowDown')
                _this.findNext(false) && e.event.stopPropagation();
        });
        this._renderButton('Up');
        this._renderButton('Down');
    };
    dxSearchEditor.prototype._renderButton = function (direction) {
        this._$button = $('<div />').addClass(EDITOR_BUTTON_CLASS);
        this._attachButtonEvents(direction);
        this._$buttonIcon = $('<div />').addClass(EDITOR_BUTTON_ICON_CLASS + direction.toLowerCase())
            .append(analytics_widgets_internal_1.SvgTemplatesEngine.templates[direction.toLowerCase() === 'up' ? EDITOR_BUTTON_ICON_UP_TEMPLATE : EDITOR_BUTTON_ICON_DOWN_TEMPLATE])
            .appendTo(this._$button);
        ko.applyBindingsToDescendants(this._koContext, this._$buttonIcon[0]);
        var buttonsContainer = this['_buttonsContainer']();
        this._$button.appendTo(buttonsContainer);
        this._$buttons.push(this._$button);
    };
    dxSearchEditor.prototype._attachButtonEvents = function (direction) {
        var _this = this;
        this._$button.off('click');
        var onClick = function (e) {
            _this.findNext(direction.toLowerCase() === 'up') && e.stopPropagation();
        };
        if (!this.option('disabled')) {
            this._$button.on('click', onClick);
            analytics_internal_1.addDisposeCallback(this._$button[0], function () {
                _this._$buttons.forEach(function ($button) {
                    $button.off('click');
                });
            });
        }
    };
    return dxSearchEditor;
}(analytics_internal_1._dxtInherit));
exports.dxSearchEditor = dxSearchEditor;
analytics_internal_1._registerDxtComponent('dxSearchEditor', dxSearchEditor);


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.ui.dxGallery };

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
var $ = __webpack_require__(3);
__webpack_require__(126);
var analytics_internal_1 = __webpack_require__(2);
var dxGalleryReportPreview = (function (_super) {
    __extends(dxGalleryReportPreview, _super);
    function dxGalleryReportPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dxGalleryReportPreview.prototype.getComponentName = function () {
        return 'dxGallery';
    };
    dxGalleryReportPreview.prototype.ctor = function (element, options) {
        var _this = this;
        this._animationClassName = 'dxrdp-gallery-item-animation';
        this.blockItems = null;
        this.currentBlockItem = null;
        this.gallery = null;
        this.nextBlockItem = null;
        this.initializeBlockItems = function () {
            _this.blockItems = [];
            var $items = _this['_getAvailableItems']();
            for (var i = 0; i < $items.length; i++) {
                var left = parseFloat($items[i]['style'].left);
                left = isNaN(left) ? 0 : left;
                _this.blockItems.push({
                    element: $($items[i]),
                    left: left
                });
            }
        };
        this.initializeBlockItems();
        this.gallery = this['option']('gallery');
        var subscription = this.gallery.repaint.subscribe(function (newVal) {
            if (!_this.gallery.preview._hasActiveEditingFields()) {
                _this.repaint();
            }
        });
        analytics_internal_1.addDisposeCallback(element, function () {
            subscription.dispose();
        });
    };
    dxGalleryReportPreview.prototype.repaint = function () {
        analytics_internal_1._getSuper(this).repaint.apply(this);
        this.initializeBlockItems();
    };
    dxGalleryReportPreview.prototype._swipeStartHandler = function (e) {
        analytics_internal_1._getSuper(this)['_swipeStartHandler'].apply(this, [e]);
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
    };
    dxGalleryReportPreview.prototype._getNextIndex = function (offset) {
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
    };
    dxGalleryReportPreview.prototype._setSwipeAnimation = function (element, difference, offset, right) {
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
    };
    dxGalleryReportPreview.prototype._addAnimation = function (item) {
        if (item) {
            if (this.gallery.animationEnabled()) {
                item.element.addClass(this._animationClassName);
            }
        }
    };
    dxGalleryReportPreview.prototype._restoreDefault = function (item) {
        if (item) {
            item.element.css({
                'opacity': 1,
                'transform': 'scale(' + 1 + ')',
                'left': item.left + '%'
            });
        }
    };
    dxGalleryReportPreview.prototype._getItem = function (index, loopTest) {
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
    };
    dxGalleryReportPreview.prototype._swipeUpdateHandler = function (e) {
        analytics_internal_1._getSuper(this)['_swipeUpdateHandler'].apply(this, [e]);
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
    };
    dxGalleryReportPreview.prototype._swipeEndHandler = function (e) {
        analytics_internal_1._getSuper(this)['_swipeEndHandler'].apply(this, [e]);
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
    };
    dxGalleryReportPreview.prototype._endSwipe = function () {
        analytics_internal_1._getSuper(this)['_endSwipe'].apply(this, arguments);
        this.gallery.isAnimated(false);
        this.gallery.updatePagesVisible(this.gallery.preview);
    };
    return dxGalleryReportPreview;
}(analytics_internal_1._dxtInherit));
exports.dxGalleryReportPreview = dxGalleryReportPreview;
analytics_internal_1._registerDxtComponent('dxGalleryReportPreview', dxGalleryReportPreview);


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
var _locker_1 = __webpack_require__(69);
var _parametersPopup_1 = __webpack_require__(51);
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var analytics_internal_1 = __webpack_require__(2);
var _dateRangeKeyboardHelper_1 = __webpack_require__(110);
var analytics_widgets_1 = __webpack_require__(5);
var CSDateTime = (function () {
    function CSDateTime(_date) {
        if (_date === void 0) { _date = null; }
        this._date = _date;
    }
    Object.defineProperty(CSDateTime, "today", {
        get: function () {
            return new CSDateTime().now();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSDateTime.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSDateTime.prototype, "day", {
        get: function () {
            return this._date.getDay();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSDateTime.prototype, "month", {
        get: function () {
            return this._date.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSDateTime.prototype, "year", {
        get: function () {
            return this._date.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    CSDateTime.prototype.addMonths = function (months) {
        return new CSDateTime(new Date(this._date.setMonth(CSDateTime.today.month + months)));
    };
    CSDateTime.prototype.addDays = function (days) {
        var newDate = this.date.getDate() + days;
        return new CSDateTime(new Date(this._date.setDate(newDate)));
    };
    CSDateTime.prototype.addHours = function (hours) {
        var newDate = this.date.getHours() + hours;
        return new CSDateTime(new Date(this._date.setHours(newDate)));
    };
    CSDateTime.prototype.addYears = function (years) {
        return new CSDateTime(new Date(this._date.setFullYear(this._date.getFullYear() + years)));
    };
    CSDateTime.prototype.now = function () {
        return new CSDateTime(new Date(new Date().setHours(0, 0, 0, 0)));
    };
    return CSDateTime;
}());
function createRangeItem(displayName, localizationId, range) {
    var item = {
        displayName: analytics_utils_1.getLocalization(displayName, localizationId),
        range: range
    };
    Object.defineProperty(item, 'displayName', {
        get: function () { return analytics_utils_1.getLocalization(displayName, localizationId); },
        configurable: true
    });
    return item;
}
exports.predefinedDateRanges = [
    createRangeItem('Today', 'PreviewStringId.DateRangeParameterEditor_Today', function () { return [
        CSDateTime.today.date,
        CSDateTime.today.date
    ]; }),
    createRangeItem('Yesterday', 'PreviewStringId.DateRangeParameterEditor_Yesterday', function () { return [
        CSDateTime.today.addDays(-1).date,
        CSDateTime.today.addDays(-1).date
    ]; }),
    createRangeItem('Current Week', 'PreviewStringId.DateRangeParameterEditor_CurrentWeek', function () { return [
        CSDateTime.today.addDays(-CSDateTime.today.day).date,
        CSDateTime.today.addDays(-CSDateTime.today.day).addDays(6).date
    ]; }),
    createRangeItem('Last Week', 'PreviewStringId.DateRangeParameterEditor_LastWeek', function () { return [
        CSDateTime.today.addDays(-7).date,
        CSDateTime.today.date
    ]; }),
    createRangeItem('Previous Week', 'PreviewStringId.DateRangeParameterEditor_PreviousWeek', function () { return [
        CSDateTime.today.addDays(-CSDateTime.today.day - 7).date,
        CSDateTime.today.addDays(-CSDateTime.today.day - 1).date
    ]; }),
    createRangeItem('Current Month', 'PreviewStringId.DateRangeParameterEditor_CurrentMonth', function () { return [
        new Date(CSDateTime.today.year, CSDateTime.today.month, 1),
        new Date(CSDateTime.today.year, CSDateTime.today.month + 1, 0),
    ]; }),
    createRangeItem('Last Month', 'PreviewStringId.DateRangeParameterEditor_LastMonth', function () { return [
        CSDateTime.today.addMonths(-1).date,
        CSDateTime.today.date
    ]; }),
    createRangeItem('Previous Month', 'PreviewStringId.DateRangeParameterEditor_PreviousMonth', function () { return [
        new Date(CSDateTime.today.year, CSDateTime.today.month - 1, 1),
        new Date(CSDateTime.today.year, CSDateTime.today.month, 0),
    ]; }),
    createRangeItem('Current Quarter', 'PreviewStringId.DateRangeParameterEditor_CurrentQuarter', function () { return [
        CSDateTime.today.addMonths(-CSDateTime.today.month % 3).date,
        CSDateTime.today.addMonths(-CSDateTime.today.month % 3 + 3).date,
    ]; }),
    createRangeItem('Previous Quarter', 'PreviewStringId.DateRangeParameterEditor_PreviousQuarter', function () { return [
        CSDateTime.today.addMonths(-CSDateTime.today.month % 3 - 3).date,
        CSDateTime.today.addMonths(-CSDateTime.today.month % 3).date,
    ]; }),
    createRangeItem('Current Year', 'PreviewStringId.DateRangeParameterEditor_CurrentYear', function () { return [
        new Date(CSDateTime.today.year, 0, 1),
        new Date(CSDateTime.today.year, 11, 31),
    ]; }),
    createRangeItem('Last Year', 'PreviewStringId.DateRangeParameterEditor_LastYear', function () { return [
        CSDateTime.today.addYears(-1).date,
        CSDateTime.today.date
    ]; }),
    createRangeItem('Previous Year', 'PreviewStringId.DateRangeParameterEditor_PreviousYear', function () { return [
        new Date(CSDateTime.today.year - 1, 0, 1),
        new Date(CSDateTime.today.year - 1, 11, 31),
    ]; })
];
var DateRangeEditor = (function (_super) {
    __extends(DateRangeEditor, _super);
    function DateRangeEditor(_options) {
        var _this = _super.call(this) || this;
        _this._options = _options;
        _this._locker = new _locker_1.Locker();
        _this._popupVisible = ko.observable(false);
        _this._showPopup = function () {
            _this._popupVisible(true);
        };
        _this._hidePopup = function () {
            _this._popupVisible(false);
            _this._$element.get(0).querySelector('input').focus();
        };
        _this._accessibilityDialogItems = ko.observableArray([]);
        _this.popupTemplate = 'dxrv-daterange-editor-popup';
        _this.items = [];
        _this.startDate = ko.observable(new Date(new Date().setHours(0, 0, 0, 0)));
        _this.endDate = ko.observable(new Date(new Date().setHours(0, 0, 0, 0)));
        _this._disposables.push(_options.value.subscribe(function (newVal) { return _this.applyDate(newVal); }), _this._displayText = ko.computed(function () { return _this._getStringValue([_this.startDate(), _this.endDate()]); }), _this.startDate.subscribe(function () { return _this.applyValue(_this.startDate() > _this.endDate()); }), _this.endDate.subscribe(function () { return _this.applyValue(); }));
        _this.applyDate(_this._options.value());
        _this.items = exports.predefinedDateRanges;
        if (_options.isMobile) {
            _this.popupTemplate = 'dxrd-menu-parameters-content';
            _this.popupModel = new _parametersPopup_1.DateRangeParemeterPopupModel(_this);
        }
        else {
            _this.popupModel = _this;
        }
        _this.dialogKeyboardHelper = new _dateRangeKeyboardHelper_1.DateRangeDialogElementsKeyboardHelper(_this._hidePopup, _this._popupVisible);
        _this._disposables.push(_this.dialogKeyboardHelper);
        return _this;
    }
    DateRangeEditor.prototype._getStringValue = function (range) {
        return range.map(function (x) { return analytics_internal_1.formatDate(x); }).join(' - ');
    };
    DateRangeEditor.prototype._isSelected = function (item) {
        return this._displayText() === this._getStringValue(item.range());
    };
    DateRangeEditor.prototype._toParameterValue = function () {
        return [this.startDate(), this.endDate()];
    };
    DateRangeEditor.prototype._createTemplateData = function (value, min) {
        var _this = this;
        return {
            value: value,
            min: min,
            inRange: function (date) { return _this.inRange(date); }
        };
    };
    DateRangeEditor.prototype.applyDate = function (range, force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this._locker.lock(function () {
            if (range[1] < _this.startDate()) {
                _this.startDate(range[0]);
                _this.endDate(range[1]);
            }
            else {
                _this.endDate(range[1]);
                _this.startDate(range[0]);
            }
        });
        if (force)
            this.applyValue();
    };
    DateRangeEditor.prototype.inRange = function (date) {
        var _end = new Date(this.endDate().getTime());
        var _start = new Date(this.startDate().getTime());
        return date <= new Date(_end.setHours(0, 0, 0, 0)) &&
            date >= new Date(_start.setHours(0, 0, 0, 0));
    };
    DateRangeEditor.prototype.applyValue = function (updateEndDate) {
        var _this = this;
        if (updateEndDate === void 0) { updateEndDate = false; }
        this._locker.lock(function () {
            updateEndDate && _this.endDate(_this.startDate());
            _this._options.value(_this._toParameterValue());
        });
    };
    return DateRangeEditor;
}(analytics_utils_1.Disposable));
exports.DateRangeEditor = DateRangeEditor;
ko.bindingHandlers['dxrvDateRangeEditor'] = {
    init: function (element, valueAccessor, bindings, model, bindingContext) {
        var rangeEditor = new DateRangeEditor(valueAccessor());
        $(element).children().remove();
        var templateHtml = analytics_widgets_1.getTemplate('dxrv-daterange-editor'), $element = $(element).append(templateHtml);
        var context = bindingContext.createChildContext(rangeEditor);
        ko.applyBindingsToDescendants(context, $element.children()[0]);
        analytics_internal_1.addDisposeCallback(element, function () { return rangeEditor.dispose(); });
        return { controlsDescendantBindings: true };
    }
};


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
var analytics_utils_1 = __webpack_require__(0);
var ko = __webpack_require__(1);
var MultiValueEditorOptions = (function (_super) {
    __extends(MultiValueEditorOptions, _super);
    function MultiValueEditorOptions(value, items) {
        var _this = _super.call(this) || this;
        _this.selectedItems = ko.observable([]);
        var values = value();
        _this.value = value;
        var valueHasMutated = function () {
            _this.editorValue.notifySubscribers(_this.displayItems[0]);
        };
        _this._items = items.map(function (item) {
            var selected = ko.observable(_this._isValueSelected(item.value, values));
            return { selected: selected, value: item.value, displayValue: item.displayValue || item.value, toggleSelected: function () { selected(!selected()); valueHasMutated(); } };
        });
        _this._disposables.push(_this.selectedItems = ko.pureComputed(function () {
            return _this._items.filter(function (item) { return item.selected(); });
        }));
        var selectionInProcess = ko.observable(false), isSelectedAllState, stringValue;
        _this._disposables.push(_this.selectedValuesString = ko.pureComputed({
            read: function () {
                if (selectionInProcess())
                    return stringValue;
                stringValue = '';
                _this.selectedItems().forEach(function (item, index, array) {
                    stringValue += item.displayValue;
                    if (index < array.length - 1) {
                        stringValue += ', ';
                    }
                });
                return stringValue;
            },
            write: function (newValue) { }
        }));
        _this._disposables.push(_this.isSelectedAll = ko.pureComputed({
            read: function () {
                if (selectionInProcess())
                    return isSelectedAllState;
                var selectedItemCount = _this.selectedItems().length;
                if (selectedItemCount > 0 && selectedItemCount < _this._items.length) {
                    return undefined;
                }
                isSelectedAllState = selectedItemCount === _this._items.length;
                return isSelectedAllState;
            },
            write: function (newValue) {
                isSelectedAllState = newValue;
                try {
                    selectionInProcess(true);
                    _this._items.forEach(function (item) { item.selected(newValue); });
                }
                finally {
                    selectionInProcess(false);
                }
            }
        }));
        var selectAllItem = { selected: _this.isSelectedAll, value: null, displayValue: analytics_utils_1.getLocalization('(Select All)', 'AnalyticsCoreStringId.SelectAll'), toggleSelected: function () { _this.isSelectedAll(!_this.isSelectedAll()); valueHasMutated(); } };
        _this.displayItems = [selectAllItem].concat(_this._items);
        _this.dataSource = _this.displayItems;
        _this.editorValue = ko.observable(selectAllItem);
        _this.updateValue = function () {
            value(_this._items.filter(function (item) { return item.selected(); }).map(function (item) { return item.value; }));
            valueHasMutated();
        };
        _this.onOptionChanged = function (e) {
            if (e.name !== 'opened' || e.value)
                return;
            _this.updateValue();
        };
        return _this;
    }
    MultiValueEditorOptions.prototype._isValueSelected = function (value, array) {
        if (value instanceof Date) {
            return array.filter(function (item) { return item - value === 0; }).length > 0;
        }
        return array.indexOf(value) !== -1;
    };
    return MultiValueEditorOptions;
}(analytics_utils_1.Disposable));
exports.MultiValueEditorOptions = MultiValueEditorOptions;


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
var pictureEditMode_1 = __webpack_require__(19);
var _painter_1 = __webpack_require__(114);
var _pictureEditorActionProvider_1 = __webpack_require__(116);
var imageEditingField_1 = __webpack_require__(20);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var popup_1 = __webpack_require__(120);
var events = __webpack_require__(112);
var analytics_widgets_1 = __webpack_require__(5);
var PictureEditorModel = (function (_super) {
    __extends(PictureEditorModel, _super);
    function PictureEditorModel(options, element) {
        var _this = _super.call(this) || this;
        _this.GESTURE_COVER_CLASS = 'dx-gesture-cover';
        _this.ACTIVE_POPUP_CLASS = '.dx-picture-editing-active';
        _this._getPopupContent = function () {
            var popupInstance = popup_1.default['getInstance'](_this.$element.find(_this.ACTIVE_POPUP_CLASS).get(0));
            return popupInstance && $(popupInstance.content());
        };
        _this.actions = [];
        _this.canDraw = ko.observable(false);
        _this._initialImageType = ko.unwrap(options.imageType) || 'png';
        _this.zoom = options.zoom || ko.observable(1);
        _this.editMode = ko.unwrap(options.imageMode) || pictureEditMode_1.PictureEditMode.Image;
        _this._initialImage = ko.unwrap(options.image);
        _this._initialAlignment = ko.unwrap(options.alignment);
        _this._initialSizeMode = ko.unwrap(options.sizeMode);
        _this._callbacks = options.callbacks;
        _this.$element = $(element);
        _this.active = ko.isObservable(options.active) ? options.active : ko.observable(!!options.active);
        var painterOptions = {
            alignment: _this._initialAlignment,
            canDraw: _this.editMode !== pictureEditMode_1.PictureEditMode.Image && _this.canDraw,
            imageSource: _this._initialImage,
            imageType: _this._initialImageType,
            sizeMode: _this._initialSizeMode,
            zoom: _this.zoom
        };
        _this.painter = new _painter_1.Painter(painterOptions);
        _this._disposables.push(_this.painter);
        _this.painter.initSize(_this.$element, _this.zoom());
        _this.actionsProvider = new _pictureEditorActionProvider_1.PictureEditorActionProvider(_this, $.extend(true, {
            getPositionTarget: function () {
                return _this._getPopupContent().find('.dx-picture-editing-toolbar');
            }
        }, (options.popupOptions || {})));
        _this._disposables.push(_this.actionsProvider);
        _this._initActions(options.callbacks && options.callbacks.customizeActions);
        _this.applyBindings();
        return _this;
    }
    PictureEditorModel.prototype._takeFocus = function () {
        if (!this.active()) {
            this._callbacks && this._callbacks.onFocusIn && this._callbacks.onFocusIn(this);
            this.active(true);
        }
        else if (this.editMode !== pictureEditMode_1.PictureEditMode.Image) {
            this.canDraw(true);
            this._callbacks && this._callbacks.onDraw && this._callbacks.onDraw(this);
        }
    };
    PictureEditorModel.prototype._releaseFocus = function () {
        if (this.active()) {
            this._callbacks && this._callbacks.onFocusOut && this._callbacks.onFocusOut(this);
            this.active(false);
            this.canDraw(false);
        }
    };
    PictureEditorModel.prototype._wrapButtonAction = function (item, model) {
        var oldAction = item.action;
        item.action = function (sender, event) {
            model.changeActiveButton(sender);
            if (oldAction)
                oldAction(event, model);
        };
    };
    PictureEditorModel.prototype._initActions = function (customizeActionsCallback) {
        var _this = this;
        if (this.editMode == pictureEditMode_1.PictureEditMode.Image || this.editMode == pictureEditMode_1.PictureEditMode.ImageAndSignature) {
            this.actions.push(this.actionsProvider.createOpenFileAction(function (e) { return _this._loadImage(e); }));
            this.actions.push(this.actionsProvider.createSizingAction());
        }
        if (this.editMode == pictureEditMode_1.PictureEditMode.Signature || this.editMode == pictureEditMode_1.PictureEditMode.ImageAndSignature) {
            this.actions.push(this.actionsProvider.createBrushAction());
        }
        if (!!this._initialImage) {
            this.actions.push(this.actionsProvider.createResetItem(function () {
                _this.painter.reset(_this._initialImage, _this._initialAlignment, _this._initialSizeMode, _this._initialImageType);
            }));
        }
        this.actions.push(this.actionsProvider.createClearItem(function () {
            _this.painter.clear();
        }));
        customizeActionsCallback && customizeActionsCallback(this, this.actions);
        this.actions.forEach(function (item) { return _this._wrapButtonAction(item, _this); });
    };
    PictureEditorModel.prototype._loadImage = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        analytics_internal_1.uploadFile({
            accept: 'image/*'
        }).done(function (result) {
            _this.painter.format(result.format);
            _this.painter.image(result.content);
            _this.painter.refresh();
        });
    };
    PictureEditorModel.prototype._addEvents = function () {
        var _this = this;
        this._pointerDownHandler = function (e) {
            _this._takeFocus();
        };
        this._pointerCancelHandler = function (e) {
            _this._releaseFocus();
        };
        this._pointerUpHandler = function (e) {
            if (!_this.active())
                return;
            var isUnderCursor = function (componentContent) {
                return componentContent && (componentContent.is(e.target) || componentContent.has(e.target).length > 0);
            };
            var isEditorContainer = _this.$element.is(e.target) || _this.$element.has(e.target).length > 0
                || isUnderCursor(_this._getPopupContent())
                || _this.actions.some(function (a) {
                    if (!a.active())
                        return false;
                    var component = ko.unwrap(a.component);
                    return isUnderCursor(component && $(component.content()));
                })
                || (e.target && e.target.className && e.target.className.indexOf && e.target.className.indexOf(_this.GESTURE_COVER_CLASS) !== -1);
            if (!isEditorContainer) {
                _this._releaseFocus();
            }
        };
        var element = this.$element.get(0);
        events.on(element, 'dxpointerdown', this._pointerDownHandler);
        events.on(element, 'dxpointercancel', this._pointerCancelHandler);
        events.on(document, 'dxpointerup', this._pointerUpHandler);
    };
    PictureEditorModel.prototype.changeActiveButton = function (selectedItem) {
        this.actions.forEach(function (action) {
            action.active(action === selectedItem && !action.active());
        });
    };
    PictureEditorModel.prototype.applyBindings = function () {
        ko.cleanNode(this.$element[0]);
        ko.applyBindings(this, this.$element[0]);
        this._addEvents();
        this.painter.initCanvas(this.$element, this.zoom());
    };
    PictureEditorModel.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        var element = this.$element.get(0);
        events.off(element, 'dxpointerdown', this._pointerDownHandler);
        events.off(element, 'dxpointercancel', this._pointerCancelHandler);
        events.off(document, 'dxpointerup', this._pointerUpHandler);
        this.actions.forEach(function (action) { return action.dispose && action.dispose(); });
        this.$element = null;
    };
    PictureEditorModel.prototype.getImage = function () {
        return this.painter.getImage();
    };
    PictureEditorModel.prototype.reset = function (image, alignment, sizeMode, imageType) {
        this._initialImage = image;
        this._initialAlignment = alignment;
        this._initialSizeMode = sizeMode;
        this._initialImageType = imageType;
        this.painter.reset(this._initialImage, this._initialAlignment, this._initialSizeMode, this._initialImageType);
    };
    PictureEditorModel.prototype.getCurrentOptions = function () {
        var imageBase64 = (this.painter.hasSignature() ? this.painter.getImage() : this.painter.image()) || '';
        var imageParts = imageBase64.split(',');
        return {
            sizeMode: this.painter.imageSizeMode(),
            alignment: this.painter.imageAlignment(),
            imageType: this.painter.hasSignature() ? imageEditingField_1.ImageEditingFieldViewModel.__DefaultImageType : this.painter.format(),
            image: imageParts[imageParts.length - 1]
        };
    };
    return PictureEditorModel;
}(analytics_utils_1.Disposable));
exports.PictureEditorModel = PictureEditorModel;
ko.bindingHandlers['dxPictureEditor'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var options = (valueAccessor());
        $(element).children().remove();
        var templateHtml = analytics_widgets_1.getTemplate('dx-picture-editing');
        var $element = $(element).append(templateHtml);
        var child = $element.children()[0];
        var model = new PictureEditorModel(options, child);
        analytics_internal_1.addDisposeCallback(element, function () {
            model.dispose();
        });
        return { controlsDescendantBindings: true };
    }
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _validator_1 = __webpack_require__(132);
var _add_viewer_to_bundle_1 = __webpack_require__(133);
var DevExpress = window.DevExpress || {};
_add_viewer_to_bundle_1._addViewerToBundle(DevExpress);
_validator_1.checkVersions();
module.exports = DevExpress['Reporting'];


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = '%VERSION%';
function checkVersions() {
    var DevExpress = window.DevExpress;
    var reportingVersion = DevExpress['Reporting']['VERSION'];
    var analyticsVersion = DevExpress['Analytics']['VERSION'];
    if (reportingVersion != analyticsVersion)
        console.warn("Reporting (v" + reportingVersion + ") and Analytics-Core (v" + analyticsVersion + ") versions do not match.");
}
exports.checkVersions = checkVersions;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Reporting = __webpack_require__(134);
var Editing = __webpack_require__(141);
var Export = __webpack_require__(142);
var ExportMetadata = __webpack_require__(143);
var Internal = __webpack_require__(144);
var Metadata = __webpack_require__(145);
var Viewer = __webpack_require__(146);
var ViewerEditing = __webpack_require__(150);
var ViewerExport = __webpack_require__(153);
var ViewerExportMetadata = __webpack_require__(154);
var ViewerInternal = __webpack_require__(155);
var ViewerMobile = __webpack_require__(157);
var ViewerMobileInternal = __webpack_require__(158);
var ViewerParameters = __webpack_require__(161);
var ViewerSettings = __webpack_require__(162);
var ViewerUtils = __webpack_require__(163);
var ViewerWidgets = __webpack_require__(166);
var ViewerWidgetsInternal = __webpack_require__(167);
var dx_reporting_version_1 = __webpack_require__(119);
function _addViewerToBundle(bundle) {
    bundle.Reporting = Reporting;
    bundle.Reporting.Editing = Editing;
    bundle.Reporting.Export = Export;
    bundle.Reporting.Export.Metadata = ExportMetadata;
    bundle.Reporting.Internal = Internal;
    bundle.Reporting.Metadata = Metadata;
    bundle.Reporting.Viewer = Viewer;
    bundle.Reporting.Viewer.Editing = ViewerEditing;
    bundle.Reporting.Viewer.Export = ViewerExport;
    bundle.Reporting.Viewer.Export.Metadata = ViewerExportMetadata;
    bundle.Reporting.Viewer.Internal = ViewerInternal;
    bundle.Reporting.Viewer.Mobile = ViewerMobile;
    bundle.Reporting.Viewer.Mobile.Internal = ViewerMobileInternal;
    bundle.Reporting.Viewer.Parameters = ViewerParameters;
    bundle.Reporting.Viewer.Settings = ViewerSettings;
    bundle.Reporting.Viewer.Utils = ViewerUtils;
    bundle.Reporting.Viewer.Widgets = ViewerWidgets;
    bundle.Reporting.Viewer.Widgets.Internal = ViewerWidgetsInternal;
    bundle.Reporting.VERSION = dx_reporting_version_1.version;
    return bundle;
}
exports._addViewerToBundle = _addViewerToBundle;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(135);
__webpack_require__(52);
__webpack_require__(118);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(139);
__export(__webpack_require__(52));
__export(__webpack_require__(118));
__export(__webpack_require__(53));
__export(__webpack_require__(54));


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Elements;

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Localization;

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = DevExpress.localization;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clientVersions = __webpack_require__(140);
var dx_reporting_version_1 = __webpack_require__(119);
(clientVersions.dxversions || clientVersions)['reporting'] = dx_reporting_version_1.version;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = DevExpress.Analytics.Internal.dxversions;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(22);
__export(__webpack_require__(22));


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(24);
__webpack_require__(57);
__webpack_require__(25);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(27);
__webpack_require__(29);
__webpack_require__(31);
__webpack_require__(34);
__webpack_require__(64);
__webpack_require__(63);
__webpack_require__(33);
__webpack_require__(65);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__export(__webpack_require__(24));
__export(__webpack_require__(57));
__export(__webpack_require__(25));
__export(__webpack_require__(58));
__export(__webpack_require__(59));
__export(__webpack_require__(27));
__export(__webpack_require__(29));
__export(__webpack_require__(31));
__export(__webpack_require__(34));
__export(__webpack_require__(64));
__export(__webpack_require__(63));
__export(__webpack_require__(33));
__export(__webpack_require__(65));
__export(__webpack_require__(35));
__export(__webpack_require__(36));
__export(__webpack_require__(37));
__export(__webpack_require__(38));


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(55);
__webpack_require__(26);
__webpack_require__(61);
__webpack_require__(60);
__webpack_require__(28);
__webpack_require__(30);
__webpack_require__(4);
__webpack_require__(32);
__webpack_require__(62);
__webpack_require__(66);
__webpack_require__(14);
__webpack_require__(67);
__webpack_require__(15);
__webpack_require__(68);
__export(__webpack_require__(55));
__export(__webpack_require__(26));
__export(__webpack_require__(61));
__export(__webpack_require__(60));
__export(__webpack_require__(28));
__export(__webpack_require__(30));
__export(__webpack_require__(4));
__export(__webpack_require__(32));
__export(__webpack_require__(62));
__export(__webpack_require__(66));
__export(__webpack_require__(14));
__export(__webpack_require__(67));
__export(__webpack_require__(15));
__export(__webpack_require__(68));


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(69);
__webpack_require__(11);
__webpack_require__(56);
__export(__webpack_require__(69));
__export(__webpack_require__(11));
__export(__webpack_require__(56));


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(13);
__export(__webpack_require__(13));


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(7);
__webpack_require__(39);
__webpack_require__(88);
__webpack_require__(121);
__webpack_require__(110);
__webpack_require__(87);
__webpack_require__(75);
__webpack_require__(93);
__webpack_require__(108);
__export(__webpack_require__(7));
__export(__webpack_require__(39));
__export(__webpack_require__(88));
__export(__webpack_require__(121));
__export(__webpack_require__(110));
__export(__webpack_require__(87));
__export(__webpack_require__(75));
__export(__webpack_require__(93));
__export(__webpack_require__(108));


/***/ }),
/* 147 */
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
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
var browser_1 = __webpack_require__(148);
var analytics_utils_1 = __webpack_require__(0);
var analytics_internal_1 = __webpack_require__(2);
var analytics_internal_2 = __webpack_require__(2);
var settings_1 = __webpack_require__(6);
var analytics_widgets_1 = __webpack_require__(5);
var _utils_1 = __webpack_require__(12);
var _utils_2 = __webpack_require__(11);
var _previewRequestWrapper_1 = __webpack_require__(9);
var ExportResultRequestData = (function () {
    function ExportResultRequestData() {
        this.RequestUrl = '';
        this.FormData = {};
        this.QueryParameters = {};
    }
    return ExportResultRequestData;
}());
exports.ExportResultRequestData = ExportResultRequestData;
var ExportHandler = (function (_super) {
    __extends(ExportHandler, _super);
    function ExportHandler(exportSetting, preview) {
        var _this_1 = _super.call(this) || this;
        _this_1.preview = preview;
        _this_1.exportActionUri = ko.observable(null);
        _this_1.exportFormData = ko.observable([]);
        _this_1.reportDisplayName = ko.observable(null);
        _this_1.popupVisible = ko.observable(false);
        _this_1.popupWidth = ko.observable(510);
        _this_1.popupHeight = ko.observable(260);
        _this_1.exportingFrameName = 'dxrd-exporting-frame' + _utils_2.generateGuid();
        _this_1.popupButtons = [
            {
                toolbar: 'bottom', location: 'after', widget: 'dxButton', options: {
                    text: analytics_utils_1.getLocalization('Ok', analytics_internal_1.StringId.DataAccessBtnOK), onClick: function () { return _this_1.popupVisible(false); }
                }
            }
        ];
        _this_1.printingLinkCallback = function () { };
        _this_1.printingTextPrefix = ko.observable('');
        _this_1.printingTextPostfix = ko.observable('');
        _this_1.getPopupTitle = function () { return _this_1.reportDisplayName() || ''; };
        _this_1._exportResultRequestData = new ExportResultRequestData();
        _this_1._showPrintNotificationDialog = true;
        _this_1._useSameTabExport = true;
        _this_1._useAsynchronousExport = true;
        _this_1._workerTicker = null;
        _this_1._workerFunctionBlobUrl = null;
        _this_1._workerTickerFunction = function () {
            var started, interval;
            self.onmessage = function (e) {
                if (e.data === 'stop') {
                    clearInterval(interval);
                    return;
                }
                if (started)
                    return;
                interval = setInterval(function () {
                    postMessage.apply(self, ['tick']);
                }, 10);
                started = true;
            };
        };
        _this_1._window = null;
        _this_1._timeouts = [];
        if (exportSetting) {
            if (exportSetting.useAsynchronousExport !== undefined)
                _this_1._useAsynchronousExport = exportSetting.useAsynchronousExport;
            if (exportSetting.useSameTab !== undefined)
                _this_1._useSameTabExport = exportSetting.useSameTab;
            if (exportSetting.showPrintNotificationDialog !== undefined)
                _this_1._showPrintNotificationDialog = exportSetting.showPrintNotificationDialog;
        }
        return _this_1;
    }
    ExportHandler.prototype._getUrlObject = function () {
        return window.URL || window['webkitURL'] || window['mozURL'] || window['msURL'] || window['oURL'];
    };
    ExportHandler.prototype._createWorker = function () {
        this._terminateWorker();
        var blob = new Blob(['(' + this._workerTickerFunction.toString() + ')()'], { type: 'text/javascript' });
        var _url = this._getUrlObject();
        this._workerFunctionBlobUrl = _url.createObjectURL(blob);
        this._workerTicker = new Worker(this._workerFunctionBlobUrl);
        return this._workerTicker;
    };
    ExportHandler.prototype._terminateWorker = function () {
        if (this._workerTicker) {
            this._workerTicker.terminate();
            this._workerTicker = null;
        }
        if (this._workerFunctionBlobUrl) {
            var _url = this._getUrlObject();
            _url && _url.revokeObjectURL(this._workerFunctionBlobUrl);
            this._workerFunctionBlobUrl = null;
        }
    };
    ExportHandler.prototype._callPrint = function (_window) {
        var _this_1 = this;
        var browserVersion = parseInt(browser_1.default.version);
        if (_window && (browser_1.default.chrome && 76 <= browserVersion)) {
            var worker = this._createWorker();
            var checkOnTick = function () {
                try {
                    if (_window.document && _window.document.contentType === 'application/pdf') {
                        _window.print();
                        worker.postMessage('stop');
                        _this_1._terminateWorker();
                    }
                }
                catch (ex) {
                    _this_1._terminateWorker();
                }
            };
            worker.onerror = function (e) { checkOnTick(); };
            worker.onmessage = function (e) { checkOnTick(); };
            worker.postMessage('start');
        }
    };
    ExportHandler.prototype._clearExportingFrame = function () {
        if (this._isNewBrowser()) {
            var iframe = this.exportingFrame.contentWindow;
            iframe && iframe.location.replace('about:blank');
        }
    };
    ExportHandler.prototype._initPrintingWindow = function () {
        var _this_1 = this;
        var printingTextParts = analytics_utils_1.getLocalization('If the operation fails, you can download the {0} and print it out from another application.', 'ASPxReportsStringId.WebDocumentViewer_Print_Popup_Text').split('{0}');
        this.printingTextPrefix(printingTextParts[0]);
        this.printingTextPostfix(printingTextParts[1]);
        if (this._showPrintNotificationDialog) {
            var subscription = this.popupVisible.subscribe(function (newVal) {
                if (!newVal) {
                    _this_1.printingLinkCallback = function () { };
                    _this_1._clearExportingFrame();
                    subscription.dispose();
                }
            });
            this._disposables.push(subscription);
            this.popupVisible(true);
        }
    };
    ExportHandler.prototype._setPrintingLinkCallback = function (printingLinkCallback) {
        if (this._showPrintNotificationDialog) {
            this.printingLinkCallback = printingLinkCallback;
        }
    };
    ExportHandler.prototype._formSubmit = function (_requestData, _formTarget) {
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
    };
    ExportHandler.prototype._doExportSync = function (_exportWindow, printable, useSameTab) {
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
    };
    ExportHandler.prototype._initExportWindow = function () {
        var message = analytics_utils_1.getLocalization('Do not close this tab to get the resulting file.', 'ASPxReportsStringId.WebDocumentViewer_AsyncExportCloseWarning');
        var div = this._window.document.createElement('div');
        div.style['text-align'] = 'center';
        div.innerText = message;
        div.style.position = 'absolute';
        div.style.left = '0';
        div.style.top = '0';
        div.style.right = '0';
        div.style.fontSize = '20px';
        this._window.document.title = analytics_utils_1.getLocalization('Exporting...', 'ASPxReportsStringId.WebDocumentViewer_AsyncExportTabTitle');
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
    };
    ExportHandler.prototype._startExportAsync = function (args, useSameTabLocal, deffered, inlineResult, printable) {
        var _this_1 = this;
        if (printable === void 0) { printable = false; }
        if (useSameTabLocal) {
            this._setPrintingLinkCallback(function () { return _this_1._startExportAsync(args, false, deffered, inlineResult, printable); });
        }
        else {
            if (!this._useSameTabExport) {
                this._window = window.open();
                this._window.onunload = function () {
                    _this_1.preview.progressBar.stop();
                    _this_1._terminateWorker();
                };
                this._initExportWindow();
            }
        }
        this.preview.progressBar.text(analytics_utils_1.getLocalization('Exporting the document...', 'PreviewStringId.Msg_ExportingDocument'));
        this.preview.progressBar.cancelText(analytics_utils_1.getLocalization('Cancel', 'AnalyticsCoreStringId.SearchDialog_Cancel'));
        this.preview.progressBar.startProgress(function () { _this_1.preview._currentOperationId(null); });
        this.preview.requestWrapper.getStartExportOperation(args)
            .done(function (response) { _this_1.preview.previewHandlersHelper.doneStartExportHandler(deffered, inlineResult, response, useSameTabLocal, printable); })
            .fail(function (error) {
            _this_1.preview.previewHandlersHelper.errorStartExportHandler(deffered, error);
            !_this_1._useSameTabExport && error.responseJSON && error.responseJSON['error'] && _this_1._showAsyncExportError(_this_1._window, error.responseJSON['error']);
        });
    };
    ExportHandler.prototype.export = function (args, actionUri, inlineResult, printable) {
        var _this_1 = this;
        if (printable === void 0) { printable = false; }
        this._terminateWorker();
        var deffered = $.Deferred();
        var requestData = this._exportResultRequestData;
        requestData.RequestUrl = actionUri;
        if (this.preview._editingFields().length > 0 || settings_1.AsyncExportApproach() || this._useAsynchronousExport || (this.preview.exportOptionsModel() && this.preview.exportOptionsModel().hasSensitiveData())) {
            this._startExportAsync(args, this._useSameTabExport, deffered, inlineResult, printable);
        }
        else {
            deffered.resolve(true);
            if (this._useSameTabExport) {
                requestData.FormData['arg'] = args;
                requestData.FormData['actionKey'] = 'exportTo';
                this._setPrintingLinkCallback(function () { return _this_1._doExportSync(null, true, false); });
            }
            else {
                requestData.QueryParameters['arg'] = args;
                requestData.QueryParameters['actionKey'] = 'exportTo';
            }
            this._doExportSync(null, printable, this._useSameTabExport);
        }
        return deffered.promise();
    };
    ExportHandler.prototype._isNewBrowser = function () {
        var isNewChrome = browser_1.default.chrome && (parseInt(browser_1.default.version) >= 76);
        return (isNewChrome || browser_1.default.mozilla || browser_1.default['safari']);
    };
    ExportHandler.prototype._showAsyncExportError = function (window, message, status, statusText) {
        if (window) {
            var div = window.document.getElementById('loading');
            if (div) {
                if (status || statusText) {
                    var stringFormat = analytics_utils_1.getLocalization('{0} ({1} {2})', 'ASPxReportsStringId.Error_WithStatus');
                    div.innerText = analytics_internal_2.formatUnicorn(stringFormat, message, status, statusText);
                }
                else
                    div.innerText = message;
            }
        }
    };
    ExportHandler.prototype._printUsingBlob = function (_exportWindow, _requestData, _method) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var _url = _this._getUrlObject();
                var blobUrl = _url.createObjectURL(this.response);
                _exportWindow && _exportWindow.location.replace(blobUrl);
                setTimeout(function () { _url.revokeObjectURL(blobUrl); }, 1);
                _this._callPrint(_exportWindow);
            }
            else if (this.readyState == 4 && this.status >= 400) {
                var message = analytics_utils_1.getLocalization('An error occurred during the export', 'ASPxReportsStringId.WebDocumentViewer_ExportError');
                _previewRequestWrapper_1.PreviewRequestWrapper.getProcessErrorCallback(_this.preview, message, true)('', this, '');
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
    };
    ExportHandler.prototype._addQueryParamsToUri = function (_exportUri, _queryParameters) {
        var keys = Object.keys(_queryParameters || {});
        if (keys.length > 0) {
            _exportUri += '?';
            _exportUri += keys.map(function (x) { return x + '=' + _queryParameters[x]; }).join('&');
        }
        return _exportUri;
    };
    ExportHandler.prototype._replaceLocation = function (_exportWindow, _requestData) {
        if (!_requestData) {
            return _utils_1.safelyRunWindowOpen('');
        }
        var _exportUrl = this._addQueryParamsToUri(_requestData.RequestUrl, _requestData.QueryParameters);
        _exportWindow ? _exportWindow.location.replace(_exportUrl) : (_exportWindow = _utils_1.safelyRunWindowOpen(_exportUrl));
        return _exportWindow;
    };
    ExportHandler.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        (this._timeouts || []).forEach(function (tic) { return clearTimeout(tic); });
        this.removeProperties();
    };
    ExportHandler.prototype.updateExportStatus = function (progress) {
        this.preview.progressBar && this.preview.progressBar.progress(progress);
        if (this._window) {
            var div = this._window.document.getElementById('loading');
            div && (div.innerText = analytics_utils_1.getLocalization('Exporting the document...', 'PreviewStringId.Msg_ExportingDocument') + ' ' + progress + '%');
            this._window.document.title = analytics_utils_1.getLocalization('Exporting...', 'ASPxReportsStringId.WebDocumentViewer_AsyncExportTabTitle') + progress + '%';
        }
        if (progress >= 100) {
            this.preview.progressBar.complete();
        }
    };
    ExportHandler.prototype.getExportStatus = function (operationId) {
        var _this_1 = this;
        var deffered = $.Deferred();
        this._timeouts.push(setTimeout(function () {
            _this_1.preview.requestWrapper.getExportStatusRequest(operationId)
                .done(function (response) { _this_1.preview.previewHandlersHelper.doneExportStatusHandler(deffered, operationId, response); })
                .fail(function (error) {
                _this_1.preview.previewHandlersHelper.errorExportStatusHandler(deffered, error);
                !_this_1._useSameTabExport && error.responseJSON && error.responseJSON['error'] && _this_1._showAsyncExportError(_this_1._window, error.responseJSON['error']);
            });
        }, 250));
        return deffered.promise();
    };
    ExportHandler.prototype.getExportResult = function (operationId, inlineDisposition, useSameTab, token, printable, uri) {
        if (printable === void 0) { printable = false; }
        if (uri === void 0) { uri = ''; }
        var requestData = this._exportResultRequestData;
        if (uri) {
            requestData.RequestUrl = uri;
        }
        else if (token) {
            requestData.RequestUrl = settings_1.ReportServerDownloadUri();
            requestData.QueryParameters['token'] = token;
            requestData.QueryParameters['printable'] = printable.toString();
        }
        else {
            var arg = encodeURIComponent(JSON.stringify({ id: operationId, inlineResult: !!inlineDisposition }));
            requestData.RequestUrl = settings_1.HandlerUri();
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
    };
    return ExportHandler;
}(analytics_utils_1.Disposable));
exports.ExportHandler = ExportHandler;
ko.bindingHandlers['dxViewerExport'] = {
    init: function (element, valueAccessor) {
        var exportHandler = valueAccessor();
        var templateHtml = analytics_widgets_1.getTemplate('dxrd-export-tool-content');
        $(element).append(templateHtml);
        var exportFrame = document.createElement('iframe');
        exportFrame.name = exportHandler.exportingFrameName;
        element.querySelector('.dxrd-visually-hidden').appendChild(exportFrame);
        exportHandler.exportingFrame = exportFrame;
        exportHandler.postingForm = element.querySelector('form');
    }
};


/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.utils.browser };

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.config };

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(16);
__webpack_require__(71);
__webpack_require__(70);
__webpack_require__(20);
__webpack_require__(72);
__webpack_require__(40);
__webpack_require__(151);
__webpack_require__(152);
__export(__webpack_require__(16));
__export(__webpack_require__(71));
__export(__webpack_require__(70));
__export(__webpack_require__(20));
__export(__webpack_require__(72));
__export(__webpack_require__(40));


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_widgets_internal_1 = __webpack_require__(10);
analytics_widgets_internal_1.SvgTemplatesEngine.addTemplates({
    'dxrd-checkboxcustomglyph': '<div class="dxrd-checkbox-custom-glyph" data-bind="style: $data.customGlyphStyleCss"></div>',
    'dxrv-preview-date-range-mobile': '<div class="dxrv-preview-date-range-mobile"> <div class="dx-fieldset"> <div class="dx-field"> <div data-bind="dxSelectBox: { dataSource: items, displayExpr: \'displayName\', value: popupModel.textRangeValue, useItemTextAsTitle: true , placeholder: $root.getLocalization(\'Select Period\', \'AnalyticsCoreStringId.Mobile_DateRange_SelectPeriod\') }"></div> </div> <div class="dx-field"> <div class="dx-fieldset-column"> <div class="dx-fieldset-header" data-bind="text: $root.getLocalization(\'From\',\'AnalyticsCoreStringId.Mobile_DateRange_From\')"></div> <div data-bind="css: popupModel._dateButtonEditorClassName, dxButton: { text: startDate && popupModel.getStringDate(startDate) || $root.getLocalization(\'Start Date\',\'AnalyticsCoreStringId.Mobile_DateRange_StartDate\'), stylingMode: \'contained\', onClick: popupModel.focusButton, focusStateEnabled: false, activeStateEnabled: false }"></div> <div data-bind="css: popupModel._dateEditorClassName"> <!-- ko template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(startDate, undefined) } --> <!-- /ko --> </div> </div> <div class="dx-fieldset-column dx-fieldset-column-right"> <div class="dx-fieldset-header" data-bind="text: $root.getLocalization(\'Until\',\'AnalyticsCoreStringId.Mobile_DateRange_Until\')"></div> <div class="dxd-back-secondary dx-fieldset-column-separator"></div> <div data-bind="css: popupModel._dateButtonEditorClassName, dxButton: { text: endDate && popupModel.getStringDate(endDate) || $root.getLocalization(\'End Date\',\'AnalyticsCoreStringId.Mobile_DateRange_EndDate\'), stylingMode: \'contained\', type:\'default\', onClick: popupModel.focusButton, focusStateEnabled: false, activeStateEnabled: false }"></div> <div data-bind="css: popupModel._dateEditorClassName"> <!-- ko template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(endDate, startDate) } --> <!-- /ko --> </div> </div> </div> </div> </div>',
    'dxrd-preview-page-mobile': '<div class="dxrdp-content" data-bind="dxclick: clickToBrick, styleunit: { width: width, height: height }, autoFit: { autoFitBy: $root.reportPreview.autoFitBy, zoom: zoom, width: originalWidth, height: originalHeight, alwaysRecalculate: true, previewSize: $root.reportPreview.previewSize, brickLoading: brickLoading, skipIfInvisible: true }"> <div class="dxrdp-loading-wrapper" data-bind="styleunit: { width: width, height: height, lineHeight: height }, style: { \'background-color\': color }, visible: pageLoading, text: loadingText"> </div> <img style="width:100%; height:100%;" data-bind="attr: { src: displayImageSrc }, style:{ \'background-color\': color }" /> <div class="dxrdp-active-border" data-bind="css: { \'dxrdp-active\': active() && $parents[1].blocks().length > 1 }, visible: !$root.slideOptions.readerMode"></div> <!-- ko foreach: activeBricks --> <!-- ko template: { name: "dxrd-page-brick-mobile", data: $data } --> <!--/ko--> <!--/ko--> <!-- ko if: !brickLoading() && $data.editingFields--> <!-- ko foreach: editingFields --> <!-- ko template: template --> <!--/ko--> <!--/ko--> <!--/ko--> </div>',
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
    'dxrp-editing-field-container': '<div class="dxrp-editing-field-container dx-accessibility-editing-field-item dx-accessibility-border-accented" data-bind="style: containerStyle(), zoom: zoom, css: { active: active(), readonly: field.readOnly() }"> <div class="dxrp-editing-field-borders" data-bind="style: borderStyle()"></div> <div class="dxrp-editing-field-content" data-bind="dxclick: activateEditor"> <!-- ko if: !active() || field.readOnly()  --> <div class="dxrp-editing-field-readonly-text" data-bind="style: textStyle(), css: {\'dxrp-editing-field-text-wordwrap\': !wordWrap}"> <!-- ko if: htmlValue()  --> <div class="dxrp-editing-field-text-html" data-bind="style: breakOffsetStyle(), html: htmlValue()"></div> <!--/ko--> <!-- ko ifnot: htmlValue()  --> <div class="dxrp-editing-field-text-html" data-bind="style: breakOffsetStyle(), text: field.editValue()"></div> <!--/ko--> </div> <!--/ko--> <!-- ko if: active() && !field.readOnly() --> <!-- ko template: { name: editorTemplate, data: data } --> <!--/ko--> <!--/ko--> </div> </div>',
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
    'dxrd-preview-export-to': '<div class="dxrd-preview-export-toolbar-item dxrd-toolbar-item" data-bind="visible: visible"> <div role="menu" class="dx-accessibility-toolbar-item dx-accessibility-focus-border-accented" data-bind="attr: { \'aria-label\': $root.getLocalization(text, $data.textId), \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }" > <div class="dxrd-preview-export-to dxd-button-back-color dxd-state-normal dxd-back-highlighted" data-bind="dxMenu: { wrapperAttr: { class: \'dxrd-preview-export-to dxd-button-back-color dxd-state-normal dxd-back-highlighted\' }, disabled: $data.disabled(), items: items, cssClass: \'dxrdp-export-to-menu\', onItemClick: clickAction, onSubmenuShowing: $data.eventHandlers.onSubmenuShowing($root.getPopupContainer($element), $element), onSubmenuShown: $data.eventHandlers.onSubmenuShown, onSubmenuHiding: $data.eventHandlers.onSubmenuHiding, tabIndex: \'-1\' }, attr: { title: $root.getLocalization(text, $data.textId) }"> <div class="dxrd-preview-export-menu-item" data-options="dxTemplate: { name: \'item\' }" data-bind="attr: { title: $root.getLocalization(text, $data.textId) }"> <!--ko if: $data.format --> <div class="dxrd-preview-export-item-text" data-bind="text: $root.getLocalization($data.text, $data.textId)"></div> <!-- /ko --> <!--ko ifnot: $data.format --> <div class="dxrd-preview-export-item-image-wrapper"> <div class="dxrd-preview-export-item-image" data-bind="css: ko.unwrap($data.imageClassName), template: ko.unwrap($data.imageTemplateName)"> </div> </div> <div class="dx-menu-item-popout-container"> <div class="dx-menu-item-popout"></div> </div> <!-- /ko --> </div> </div> </div> <div class="dxrd-toolbar-item-separator dxd-toolbar-separator-color dxd-border-secondary" data-bind="visible: $data.hasSeparator"></div> </div>',
    'dxrd-page-brick-clickable': '<div class="dxrd-report-preview-brick" data-bind="dxclick: function(_, event){ onClick(event); event.stopPropagation(); }, style: { top: topP, left: $data.leftP, right: $data.rightP, height: heightP, width: widthP }, css: { \'dxrd-report-preview-brick-selected\': $data.active, \'dxrd-report-preview-brick-selectable\': !($data.bricks) }"> <!-- ko if: $data.navigation --> <div class="dxrd-report-preview-brick-navigation" data-bind="css: { \'dxrdp-navigation-brick-drill-down\' : !!navigation.drillDownKey, \'dxrdp-navigation-brick-sorting\' : !!navigation.sortData, \'dxrdp-navigation-brick-sorting-desc\': navigation.sortData && navigation.sortData.order === 1, \'dxrdp-navigation-brick-sorting-asc\': navigation.sortData && navigation.sortData.order === 2 }"></div> <!--/ko--> </div>',
    'dxrd-preview-page': '<div role="img" class="dxrd-report-preview-content" style="position: relative; width: 100%; height: 100%" data-bind="attr: {\'aria-label\': $parent.currentPageAriaLabelImgAlt($data.pageIndex) }, dxclick: clickToBrick, \'brick-selection-prog\': { page: $data, preview: $parent, click: function(pageIndex) { $parent.goToPage(pageIndex) } }"> <div class="dxrd-report-preview-content-loading-wrapper" style="background: white;" data-bind="styleunit: { \'width\': width() + 2, \'height\': height() + 2 }, visible: pageLoading"> <div class="dxrd-report-preview-content-loading-panel" style="text-align: center;" data-bind="styleunit: { \'paddingTop\': height() / 2.3 }"> <div class="dxrd-report-preview-content-loading-panel-text" data-bind="text: loadingText"></div> </div> </div> <div> <img style="pointer-events: none; width: 100%; height: 100%;" data-bind="attr: { src: displayImageSrc, \'alt\': $parent.currentPageAriaLabelImgAlt($data.pageIndex) }" /> <!-- ko foreach: activeBricks --> <!-- ko template: { name: "dxrd-page-brick-mobile", data: $data } --> <!--/ko--> <!--/ko--> <!-- ko foreach: clickableBricks --> <!-- ko template: { name: "dxrd-page-brick-clickable", data: $data } --> <!--/ko--> <!--/ko--> <!-- ko if: !brickLoading() && $data.editingFields--> <div data-bind="accessibilityKeyboardHelper: $data.editingFieldsKeyboardHelper"> <!-- ko foreach: editingFields --> <!-- ko template: template --> <!--/ko--> <!--/ko--> </div> <!--/ko--> </div> </div>',
    'dxrp-popup-editing-field-image': '<div class="dxrp-editing-field-container" data-bind="style: containerStyle() "> <div class="dx-accessibility-editing-field-item dx-accessibility-border-accented" data-bind="dxclick: activateEditor, css: parentPopupClass"> <div class="dxrp-editing-field-popup-container-cloned" data-bind="dxPainter: $data.getPainter()"></div> <!-- ko template: { name: \'dx-picture-editing-popup\', data: $data.getPopupData() } --> <!-- /ko --> </div> </div>',
    'dx-picture-editing-popup': '<div class="dx-picture-edit-popup-content dx-picture-edit-popup-content-fullscreen" data-bind="dxPopup: { width: contentData.containerStyle().width, height: contentData.containerStyle().height, position: { boundary: getContainer(), of: getPositionTarget($element) }, container: getContainer(), showTitle: false, target: getContainer(), deferRendering: false, closeOnOutsideClick: true, showCloseButton: false, onContentReady: onContentReady, onHiding: onHiding, onShown: onShown, shading: false, wrapperAttr: { class: \'dx-picture-edit-popup-content dx-picture-edit-popup-content-fullscreen\' }, animation: { show: {}, hide: { type: \'fade\', duration: 100, to: { opacity: 0 }, from: { opacity: 1 } }}, visible: isVisible($element) }"> <!-- ko if: showContent --> <!-- ko template: { name: contentTemplate, data: contentData, afterRender: $data.renderedHandler } --> <!--/ko--> <!--/ko--> </div>',
    'dxrd-zoom-autofit-select-template': '<div class="dxrd-toolbar-item-zoom" data-bind="visible: visible"> <div role="combobox" class="dx-accessibility-toolbar-item dx-accessibility-focus-border-accented" data-bind="attr: { \'aria-label\': $root.getLocalization(\'Zoom\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelZoomCombobox\'), \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }" > <div class="dxrd-toolbar-item-zoom-editor" data-bind="dxSelectBox: { items: zoomItems, value: $data.zoom, displayExpr: displayExpr, displayCustomValue: true, acceptCustomValue: true, onCustomItemCreating: onCustomItemCreating, useItemTextAsTitle: true , dropDownOptions: { container: $root.getPopupContainer($element), position: { my: \'left top\', at: \'left bottom\', of: $element } }, tabIndex: \'-1\', inputAttr: { \'aria-label\': $root.getLocalization(\'Zoom\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelZoomCombobox\') }}"></div> </div> </div>',
    'dxrd-preview-toolbar-scrollable': '<div class="dxrd-toolbar-wrapper dxrdp-toolbar-scrollable dx-shadow-top dxd-back-secondary-invariant" data-bind="dxScrollView: { showScrollbar: \'onHover\', direction: \'horizontal\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }"> <div class="dxrd-toolbar" role="toolbar" data-bind="keyDownActions: actionLists, accessibilityKeyboardHelper: $data.keyboardHelper"> <div id="dxrd-preview-toolbar-live-region" class="dxrd-visually-hidden" aria-live="polite" aria-atomic="true"></div> <div class="dx-accessibility-container-background dxd-back-accented"></div> <!-- ko template: {name: \'dxrd-toolbar-tmplt\', data: actionLists.toolbarItems } --> <!-- /ko --> </div> </div>',
    'dxrd-preview-search': '<div role="search" aria-haspopup="listbox" class="dxrd-preview-search-wrapper" data-bind="visible: active() && visible(), accessibilityKeyboardHelper: $data.keyboardHelper"> <div id="dxrd-preview-search-live-region" class="dxrd-visually-hidden" aria-live="polite" aria-atomic="true"></div> <!-- ko with: model --> <div class="dxrd-preview-search-tab-header"> <span class="dxrd-preview-search-tab-header-text dxd-text-primary" data-bind="text: $root.getLocalization(\'Search\', \'ASPxReportsStringId.SearchDialog_Header\')"></span> <div class="dxrd-preview-search-editor" data-bind="dxSearchEditor: { searchModel: $data, inputAttr: { \'type\': \'search\', \'title\': $root.getLocalization(\'Search\', \'ASPxReportsStringId.SearchDialog_Header\') }}"></div> <div class="dxrd-preview-search-checkbox" data-bind="dxCheckBox: { value: matchCase, text: $root.getLocalization(\'Match case\', \'ASPxReportsStringId.SearchDialog_Case\')}"></div> <div class="dxrd-preview-search-checkbox" data-bind="dxCheckBox: { value: matchWholeWord, text: $root.getLocalization(\'Match whole word only\', \'ASPxReportsStringId.SearchDialog_WholeWord\')}"></div> </div> <div class="dxrd-preview-search-result-header dxd-border-primary"> <div class="dx-accessibility-focus-border-accented dxrd-preview-search-result-header-text dxd-text-primary" data-bind="text: $root.getLocalization(\'Search result\', \'ASPxReportsStringId.WebDocumentViewer_SearchResultText\')"></div> </div> <!-- ko if: searchText().length --> <div class="dx-accessibility-container-background dxd-back-accented"></div> <div class="dxrd-preview-search-result dxd-border-accented" data-bind="dxList: { dataSource: searchResultDataSource, pageLoadMode: \'scrollBottom\', focusStateEnabled:false, hoverStateEnabled:false, onItemRendered: onItemRendered, noDataText:  loading() ? \'\' : noResultText() }"> <div class="dxrd-preview-search-result-item dxd-list-item-back-color dxd-back-highlighted dx-accessibility-list-item dx-accessibility-focus-border-accented" data-bind="dxAction: { model: $data, action: $parent.itemClickAction }, attr: {\'aria-label\': $data.data.text + \', \' + $root.dx._static.formatSearchResult($data.data) + \', \' + ($parent.searchResult().indexOf($data.data) + 1) + \' of \' + $parent.searchResult().length }" data-options="dxTemplate : { name: \'item\' }" > <div class="dx-accessibility-field-background dxd-back-accented"></div> <div class="dxrd-preview-search-tab-item-text propertygrid-editor-displayName dxd-text-primary" data-bind="text: $data.data.text"></div> <div class="dxrd-preview-search-tab-item-info dxd-text-primary" data-bind="text: $root.dx._static.formatSearchResult($data.data)"></div> </div> </div> <!-- /ko --> <!-- /ko --> </div>',
    'dxrd-preview-progress-bar': '<div role="dialog" class="dxrd-preview-progress dxd-popup-back-color dxd-back-primary2 dxd-border-primary" data-bind="visible: visible, css: $data.cssClasses, accessibilityKeyboardHelper: $data.progressBarAccessibility"> <div class="dxrd-preview-progress-text dxd-text-primary" data-bind="text : text"></div> <div class="dxrd-preview-progress-bar dxd-back-primary"> <div class="dxrd-preview-progress-value dxd-preview-progress-bar-value-color dxd-back-accented" data-bind="style : { width: progress()  + \'%\' }"></div> </div> <div role="button" class="dxrd-preview-progress-cancel dxd-hyperlink-color dxd-border-accented dxd-text-accented dx-accessibility-list-item dx-accessibility-border-accented" data-bind="text: cancelText, dxAction: { model: $data, action: function() { $data.stop && stop(); }}"></div> </div>',
    'dxrd-preview-parameters': '<div class="dxrd-preview-parameters-wrapper dxrd-preview-property-wrapper" data-bind="visible: active() && visible()"> <div class="dxrd-right-panel-header dxd-text-primary"> <span data-bind="text: $root.getLocalization(\'Preview Parameters\', \'ASPxReportsStringId.ReportDesigner_Preview_ParametersTitle\')"></span> <!-- ko if: (model && !model.isEmpty()) --> <!-- /ko --> </div> <!-- ko if: (!model || model.isEmpty()) --> <div class="dxrd-group-header-parameters-empty dxd-text-primary" data-bind="text: $root.getLocalization(\'The report does not contain any parameters.\', \'ASPxReportsStringId.WebDocumentViewer_NoParameters\')"></div> <!-- /ko --> <!-- ko if: (model && !model.isEmpty()) --> <div class="dxrd-right-panel-body" id="propertiesPanel" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }, dxValidationGroup: {}, accessibilityKeyboardHelper: $data.keyboardHelper"> <div role="tablist" class="dx-fieldset"> <!-- ko template: { name: \'dx-propertieseditor\', data: $data.propertyGrid } --> <!-- /ko --> </div> <div class="dxrd-preview-parameter-actions-container"> <div class="dxrd-preview-parameter-action dxrd-preview-loading" data-bind="dxLoadIndicator: { visible: model.parametersLoading }"></div> <div class="dxrd-preview-parameter-action dxrdp-parameters-reset dx-accessibility-focus-border-accented" data-bind="dxButton: { text: $root.getLocalization(\'Reset\', \'ASPxReportsStringId.ParametersPanel_Reset\'), onClick: function() { model.restore(); } }"></div> <div class="dxrd-preview-parameter-action dxrdp-parameters-submit dx-accessibility-focus-border-accented" data-bind="dxButton: { text: $root.getLocalization(\'Submit\', \'ASPxReportsStringId.ParametersPanel_Submit\'), onClick: function(params) { model.validateAndSubmit(params); } }"></div> </div> </div> <!-- /ko --> </div>',
    'dxrd-preview-pager': '<div class="dxrd-preview-pager dxrd-toolbar-item" data-bind="visible: visible"> <div role="combobox" class="dx-accessibility-toolbar-item dx-accessibility-focus-border-accented" data-bind="attr: { \'aria-label\': $root.getLocalization(\'Pager\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelPagerCombobox\') , \'aria-hidden\': ko.unwrap($data.visible) ? \'false\' : \'true\', \'aria-disabled\': $data.disabled() ? \'true\' : \'false\' }" > <div class="dxrd-preview-pager-selectbox" data-bind="dxSelectBox: { dataSource: pageItems, value: selectedItem, opened: opened, displayExpr: displayExpr, useItemTextAsTitle: true , onFocusOut: focusOut, onKeyUp: keyUp, itemTemplate: itemTemplate, searchMode: searchMode, searchEnabled: searchEnabled, searchTimeout: searchTimeout, disabled: disabled, dropDownOptions: { container: $root.getPopupContainer($element) }, tabIndex: \'-1\', inputAttr: { \'aria-label\': $root.getLocalization(\'Pager\', \'ASPxReportsStringId.WebDocumentViewer_AriaLabelPagerCombobox\') } }"></div> </div> <div class="dxrd-toolbar-item-separator dxd-toolbar-separator-color dxd-border-secondary" data-bind="visible: $data.hasSeparator"></div> </div>',
    'dxrd-preview-document-map': '<div class="dxrd-preview-document-map" data-bind="visible: active() && visible()" style="height: 100%; overflow:hidden"> <div class="dxrd-right-panel-header dxd-text-primary"> <div style="display: inline-block;" data-bind="text: $root.getLocalization(\'Document Map\', \'ASPxReportsStringId.DocumentViewer_RibbonCommandText_DocumentMap\')"></div> </div> <!-- ko if: model --> <!-- ko with: model --> <div class="dxrd-right-panel-body" data-bind="dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }, accessibilityKeyboardHelper: $parent.keyboardHelper"> <div role="tree" id="documentMapTree" data-bind="treelist: documentMapOptions" style="width:100%; height: 100%;"></div> </div> <!-- /ko --> <!-- /ko --></div>',
    'dxrd-report-preview': '<div class="dxrd-preview dxrd-designer-wrapper dxd-scrollbar-color dxd-surface-back-color" data-bind="visible: reportPreview.previewVisible, cssArray: [ $data.rootStyle , { \'dx-rtl\' : $data.rtl, \'dx-ltr\': !$data.rtl } ]"> <!-- ko foreach: parts --> <!-- ko template: { name: templateName, data: model }--> <!-- /ko --> <!-- /ko --> </div>',
    'dxrdp-surface': '<div class="dxrd-preview-wrapper" data-bind="textCopier, css: { \'dx-rtl\': $data.rtlReport, \'dxrp-editing-fields-hightlighted\': editingFieldsHighlighted } "> <!-- ko with: progressBar--> <!-- ko template: \'dxrd-preview-progress-bar\'--> <!-- /ko --> <!-- /ko --> <div class="dxrd-preview-surface" data-bind="accessibilityKeyboardHelper: $data.previewBrickKeyboardHelper"> <!-- ko if: !showMultipagePreview() --> <div class="dxrd-report-preview-holder"> <!-- ko with: currentPage--> <!-- ko if: pageLoading() || (!pageLoading() && displayImageSrc()) --> <div role="tab" class="dxrd-report-preview dx-accessibility-page-item dx-accessibility-border-accented" data-bind="styleunit: { width: width, height: height }, autoFit: { autoFitBy: $parent.autoFitBy, zoom: zoom, width: originalWidth, height: originalHeight, rightPanelWidth: $root.tabPanel.width, previewSize: $parent.previewSize, brickLoading: brickLoading } "> <!-- ko template: { name: \'dxrd-preview-page\', afterRender: function() { $parent.delayedInit() } }--> <!-- /ko --> </div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> <!-- ko if: showMultipagePreview() && !!currentPage() --> <div class="dxrd-report-preview-holder" data-bind="lazyImages: { enabled: showMultipagePreview, updateCallback: onSizeChanged }"> <!-- ko foreach: {data: pages, afterRender: function() { $parent.model.delayedInit() } }  --> <!-- ko lazy: { if: pageLoading() || (!pageLoading() && displayImageSrc()) } --> <div role="tab" class="dxrd-report-preview dxrd-report-preview-multipage dx-accessibility-page-item dx-accessibility-border-accented" data-bind="styleunit: { \'width\': width(), \'height\': height() }, toView: { active: active }, css : { \'dxrd-report-preview-active\': active }"> <!-- ko template: \'dxrd-preview-page\'--> <!-- /ko --> </div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> <div data-bind="css: { \'dxrd-visually-hidden\': currentPage() }" class="dxrd-report-preview-placeholder"> <div aria-live="assertive" aria-atomic="true" class="dxd-empty-area-placeholder-text-color dxd-text-info" data-bind="text: emptyDocumentCaption()"></div> </div> </div> </div> <div id="dxrd-preview-bricks-live-region" class="dxrd-visually-hidden" aria-live="polite" aria-atomic="true"></div> <div id="clipboard-container" style="position:absolute;top:-100px;"><textarea disabled data-bind="attr: { \'aria-label\': $root.getLocalization(\'Clipboard\', \'ASPxReportsStringId.WebDocumentViewer_AriaClipboard\') }" id="clipboard"></textarea></div>',
    'dxrd-export-tool': '<div data-bind="dxViewerExport: $data"></div>',
    'dxrv-daterange-editor': '<div class="dxrv-daterange-editor"> <div data-bind="cacheElement: { action: function(element) { $data._$element = element; } }, dxEllipsisEditor: { value: _displayText, readOnly:true, inputAttr: { \'aria-label\': $parent.displayName }, openOnFieldClick: true, buttonAction: function() { $data._showPopup(); } }"></div> <!-- ko template: { name: popupTemplate, data: popupModel } --> <!-- /ko --> </div>',
    'dxrv-daterange-editor-popup': '<div role="dialog" aria-modal="true" data-bind="dxPopup: { width: $root.calculateWithZoomFactor(800), height: $root.calculateWithZoomFactor(350), maxWidth: function() { return window.innerWidth - 1;}, maxHeight: function() { return window.innerHeight - 1;}, position: { my: \'right top\', at: \'right bottom\', of: $data._$element, collision: \'fit fit\', offset: \'1 -1\' }, container: $root.getPopupContainer($element), target: $root.getPopupContainer($element), showTitle: false, showCloseButton: false, closeOnOutsideClick: true, animation: {}, shading: false, visible: _popupVisible }"> <div data-bind="dxScrollView: { showScrollbar: \'always\', direction: \'horizontal\', useNative: false, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }"> <div class="dxrv-daterange-editor-popup-container" data-bind="accessibilityKeyboardHelper: $data.dialogKeyboardHelper"> <div role="listbox" class="dxrv-daterange-editor-list dxrv-daterange-editor-item dxd-border-primary dx-accessibility-daterange-item" data-bind="accessibilityKeyboardHelper: $data.dialogKeyboardHelper.predefinedDateRangesKeyboardHelper, dxScrollView: { showScrollbar: \'onHover\', scrollByContent: false, bounceEnabled: false, useNative: false, scrollByThumb: true, onInitialized: function(e) { e.component.option(\'useKeyboard\', false); } }"> <div class="dx-accessibility-container-background dxd-back-accented"></div> <!-- ko foreach: items --> <div role="option" class="dxrv-daterange-editor-list-item dxd-state-normal dxd-back-highlighted dx-accessibility-list-item dx-accessibility-focus-border-accented" data-bind="attr: { \'aria-selected\': $parent._isSelected($data) }, css: { \'dxd-state-selected\': $parent._isSelected($data) }, dxAction: { model: $data, action: function() { $parent.applyDate($data.range(), true) }}"> <div class="dx-accessibility-field-background dxd-back-accented"></div> <!-- ko text: displayName --> <!-- /ko --> </div> <!-- /ko --> </div> <div class="dxrv-daterange-editor-item"> <div class="dx-accessibility-container-background dxd-back-accented"></div> <!-- ko template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(startDate, undefined) } --> <!-- /ko --> </div> <div class="dxrv-daterange-editor-item"> <div class="dx-accessibility-container-background dxd-back-accented"></div> <!-- ko template: { name: \'dxrv-daterange-calendar\', data: _createTemplateData(endDate, startDate) } --> <!-- /ko --> </div> </div> </div> </div>',
    'dxrv-daterange-calendar': '<div tabIndex="0" class="dx-accessibility-calendar-item dx-accessibility-daterange-item" data-bind="dxCalendar: { value: value, cellTemplate: \'select_cell\', height: \'100%\', min: min }"> <div class="dxrv-daterange-cell" data-options="dxTemplate:{ name:\'select_cell\' }"> <div class="dxrv-daterange-cell-text" data-bind="text: text"></div> <div data-bind="css: { \'dxd-back-accented\': $parent.inRange(date) }"></div> </div> </div>',
    'dxrv-range-parameter': '<div data-bind="dxrvDateRangeEditor: {value: $data.value() }"></div>',
    'dxrd-multivalue': '<!-- ko with: value --> <div data-bind="dxTagBox: $parent.getOptions({ dataSource: $data.dataSource, searchEnabled: true, useItemTextAsTitle: true, searchExpr: $data.searchExpr || [\'displayValue\'], value: $data.value, displayExpr: $data.displayExpr || \'displayValue\', valueExpr: $data.valueExpr || \'value\', multiline: false, showSelectionControls: true, showDropDownButton: !!$data.showDropDownButton, selectAllMode: \'allPages\', selectedItems: $data.selectedItems, inputAttr: { \'aria-label\': $parent.displayName }, selectAllText: $root.getLocalization(\'Select All\', \'AnalyticsCoreStringId.SelectAll\'), placeholder: $root.dx._static.selectPlaceholder(), maxDisplayedTags: $data.maxDisplayedTags, dropDownOptions: { container: $root.getPopupContainer($element) } }), dxValidator: { validationRules: $parent.validationRules || [] }"> </div> <!-- /ko -->',
    'dxrd-multivalue-editable': '<!-- ko if: value --> <div class="dxrd-editor" data-bind="visible: visible"> <div data-bind="dxCollectionEditor: { values: value, info: info, level: level, displayName: $root.getLocalization(displayName) }"> <div data-bind="dxPropertyGrid: { target: value, level: editor.level + 1 }"></div> </div> </div> <!-- /ko -->',
    'dx-picture-editing': '<div class="dx-picture-editing"> <canvas data-bind="zoom: painter.scale"></canvas> <div class="dx-picture-editing-active" data-bind="dxPopup: { width: 48, height: \'auto\', wrapperAttr: { class: \'dx-picture-editing-active\' }, position:{ my: \'left top\', at: \'right top\', boundary: \'.dxrd-preview-surface\', of: $data.$element, collision: \'fit fit\', offset: \'1 -1\' }, container: \'.dx-designer\', target: \'.dx-designer\', showTitle: false, onContentReady: function(e) { e.component && e.component.registerKeyHandler(\'tab\', function(_) { $data.active(false); }); }, showCloseButton: false, animation: {}, shading: false, visible: $data.active }"> <div data-options="dxTemplate: { name: \'content\' }"> <div class="dx-picture-editing-toolbar" data-bind="foreach: $data.actions"> <div class="dx-picture-editing-toolbar-item" data-bind="dxclick: $data.action, attr: { title: title }"> <div class="dx-picture-editing-toolbar-item-icon" data-bind="template: { name: icon, afterRender: $data.renderedHandler }"> </div> </div> <!-- ko template: { if: $data.template, name: $data.template, data: $data.templateOptions }--> <!-- /ko --> </div> </div> </div> </div>',
    'dx-painter': '<div class="dx-painter"> <canvas data-bind="zoom: scale"></canvas> </div>',
    'dx-picture-editing-toolbar-popup': '<div class="dx-picture-edit-popup-content" data-bind="dxPopover: { width: width, height: height, wrapperAttr: { class: \'dx-picture-edit-popup-content\' }, closeOnOutsideClick: $data.closeOnOutsideClick, onShown: $data.onShown, onContentReady: $data.onContentReady, position: { my: \'left top\', at: \'right top\', boundary: \'.dx-designer\', of: getPositionTarget(), collision: \'flipfit fit\', offset: \'-10 0\' }, container: getPositionTarget(), showTitle: false, target: getPositionTarget(), showCloseButton: false, shading: false, animation: {}, visible: visible }"> <!-- ko template: { name: contentTemplate, data: contentData } --> <!--/ko--> </div>',
    'dx-picture-editing-brush-options': '<div class="dx-picture-editing-brush-options"> <div class="dx-picture-editing-line-width"> <div class="dx-picture-editing-text" data-bind="text: brushWidthText"></div> <div class="dx-picture-editing-line-width-slider" data-bind="dxSlider: { min: 1, max: 9, value: $data.lineWidth, label: { visible: true }, tooltip: { enabled: true, showMode: \'always\', position: \'bottom\' } }"></div> </div> <div class="dx-picture-editing-line-color"> <div class="dx-picture-editing-text" data-bind="text: brushColorText"></div> <div class="dx-picture-editing-brush-options-colors" data-bind="foreach: $data.colors"> <div class="dx-picture-editing-brush-options-color" data-bind="css: { selected: $data.isSelected }"> <div class="dx-picture-editing-brush-options-color-cell" data-bind="style: { background: $data.value }, dxclick: $data.action"></div> </div> </div> </div> </div>',
    'dx-picture-editing-sizemode-alignment': '<div class="dx-picture-editing-sizemode-alignment"> <div class="dx-picture-editing-sizemode"> <div class="dx-picture-editing-text" data-bind="text: sizeModeText"></div> <div class="dx-picture-editing-sizemode-values" data-bind="foreach: { data: sizeModeValues }"> <div class="dx-picture-editing-sizemode-alignment-value" data-bind="css: { selected: isSelected }, template: $data.iconTemplate, dxclick: $data.action"> </div> </div> </div> <div class="dx-picture-editing-alignment"> <div class="dx-picture-editing-text" data-bind="text: alignmentText"></div> <div class="dx-picture-editing-alignment-values" data-bind="foreach: { data: alignmentValues }"> <div class="dx-picture-editing-sizemode-alignment-value" data-bind="css: { selected: isSelected }, template: $data.iconTemplate, dxclick: $data.action"> </div> </div> </div> </div>',
    'dx-picture-editing-imagepickerwithfilter': '<div class="dx-picture-editing-filtercontent" data-bind="styleunit: { width: contentWidth }"> <div class="dx-picture-editing-filtercontent-editor" data-bind="dxTextBox: { value: filter, valueChangeEvent: \'keyup\', placeholder: searchPlaceholder(), showClearButton: true  }"></div> <div class="dx-picture-editing-filtercontent-images"> <!-- ko template: \'dx-picture-editing-imagespicker\' --> <!-- /ko --> </div> </div>',
    'dx-picture-editing-imagespicker': '<div class="dx-picture-editing-imagescontainer dxd-text-primary" data-bind="styleunit: { width: contentWidth }, dxScrollView: { showScrollbar: \'onHover\', useNative: false, scrollByThumb: true }"> <!-- ko foreach: images --> <div class="dx-picture-editing-block dxd-state-normal dxd-back-highlighted" data-bind="styleunit: { width: $parent.width + 10 }, visible: visible, click: function() { $parent.action($data); }"> <div class="dx-picture-editing-block-image" data-bind="styleunit: { width: $parent.width, height: $parent.height }, style: { backgroundImage: \'url(\' + ($data.url || $data.data) + \')\' }"></div> <!-- ko if: $data.text--> <!-- ko if: $parent.filterEnabled --> <div class="dx-picture-editing-block-text" data-bind="searchHighlighting: { text: $data.text, textToSearch: $parent.filter }, attr: { title: $data.text }"></div> <!-- /ko --> <!-- ko ifnot: $parent.filterEnabled --> <div class="dx-picture-editing-block-text" data-bind="text: $data.text, attr: { title: $data.text }"></div> <!-- /ko --> <!-- /ko --> </div> <!-- /ko --> </div>',
    'dx-selectbox': '<div data-bind="dxSelectBox: getOptions({ dataSource: values, value: value, valueExpr: \'value\', displayExpr: \'displayValue\', displayCustomValue: true, disabled: disabled, useItemTextAsTitle: true, dropDownOptions: { container: $root.getPopupContainer($element) }, popupPosition: { boundary: $root.getPopupContainer($element) }, inputAttr: { \'aria-label\': displayName } }), dxValidator: { validationRules: $data.validationRules || [] }"></div>',
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var analytics_widgets_internal_1 = __webpack_require__(10);
analytics_widgets_internal_1.SvgTemplatesEngine.addTemplates({
    'dxrd-svg-actions-add_field_to_column_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_2_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 12h4v4h-4v-4zm0-2h4V6h-4v4zm0-6h4V0h-4v4zM6 16h4v-4H6v4zm0-6h4V6H6v4zm0-6h4V0H6v4z"/></g><path class="dxd-icon-fill" d="M0 0h4v16H0z"/></svg>',
    'dxrd-svg-actions-add_field_to_data_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_1_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><path class="dxd-icon-fill" d="M9 0C5.1 0 2 1.5 2 3.5v10C2 15.4 5.1 17 9 17s7-1.6 7-3.5v-10c0-2-3.1-3.5-7-3.5zm0 2c2.9 0 4.4 1.1 4.5 1.5C13.4 3.8 11.9 5 9 5S4.6 3.8 4.5 3.4C4.6 3.1 6.1 2 9 2z"/></svg>',
    'dxrd-svg-actions-add_field_to_filter_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="Parameters" class="dxd-icon-fill" d="M.2 3.2L7 10v9c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-9l6.8-6.8c.4-.4.1-1.2-.5-1.2H.7c-.6 0-.9.8-.5 1.2zm10.8 6V18H9V9.2L3.8 4h12.3L11 9.2z"/><path id="ZoomIn" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/></svg>',
    'dxrd-svg-actions-add_field_to_row_area': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="ZoomIn_3_" class="dxd-icon-fill" d="M24 19c0 .6-.4 1-1 1h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-3c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1z"/><path class="dxd-icon-fill" d="M0 0h16v4H0z"/><g class="dxd-opacity-50"><path class="dxd-icon-fill" d="M12 12h4v4h-4v-4zm0-2h4V6h-4v4zm-6 6h4v-4H6v4zm0-6h4V6H6v4zm-6 6h4v-4H0v4zm0-6h4V6H0v4z"/></g></svg>',
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
    'dxrd-svg-fieldlist-calcboolean': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M0 0v22h22V0H0zm18 8L8 18l-4-4v-4l4 4L18 4v4z"/></svg>',
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
    'dxrd-svg-menu-add_datasource': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><ellipse class="dxd-icon-fill" cx="8" cy="2" rx="6" ry="2"/><path class="dxd-icon-fill" d="M16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm3 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zM8 13c-3.1 0-6-.9-6-2v5c0 1.1 2.9 2 6 2h.3c-.2-.6-.3-1.3-.3-2 0-1.1.2-2.1.6-3H8zM14 8.3V4c0 1.1-2.9 2-6 2s-6-.9-6-2v5c0 1.1 2.9 2 6 2 .6 0 1.3 0 1.9-.1 1-1.3 2.5-2.2 4.1-2.6z"/></svg>',
    'dxrd-svg-menu-back': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M6 12l9-9 2 2-7 7 7 7-2 2z"/></svg>',
    'dxrd-svg-menu-exit': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M22 12l-6-6v4H8v4h8v4z"/><path class="dxd-icon-fill" d="M12 20H2V4h10v4h2V2H0v20h14v-6h-2z"/></svg>',
    'dxrd-svg-menu-localization': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M23 8h-7V1c0-.5-.5-1-1-1H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h7v7c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 5.5c0 .3-.2.5-.5.5h-1.2l-.1.2c-.6 1.4-1.5 2.9-2.7 4.4.9.7 1.9 1.2 3.1 1.6.2.1.3.1.3.2.1.1.1.2 0 .4l-.3.9c-.1.2-.3.3-.5.3h-.2c-1.2-.4-2.4-1.1-3.9-2.1-1.4 1-2.7 1.7-3.9 2.1-.3.1-.7 0-.8-.3l-.3-.9c-.1-.2-.1-.3 0-.4.1-.1.2-.2.3-.2 1.1-.4 2.1-.9 3.1-1.6-.4-.5-1.1-1.4-1.1-1.4 0-.1-.1-.1-.1-.2-.1-.1-.1-.2-.2-.3-.1-.1-.1-.3 0-.5.1-.1.2-.2.4-.2h1.2c.2 0 .4.1.5.3.3.4.5.7.8 1 .8-.9 1.5-1.9 2.1-3.2V14H9.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h.9l-.5-1.4H6.1L5.7 12h.8c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-4c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h.7l3.4-9.7c0-.2.2-.3.4-.3h2c.2 0 .4.1.5.3l3.4 9.7H15v-1.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5V12h4.5c.3 0 .5.2.5.5v1zM8.1 4.6l1.2 3.9H6.8l1.3-3.9z"/></svg>',
    'dxrd-svg-menu-newreport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M14 0v6h6z"/><path class="dxd-icon-fill" d="M12 0H2v22h18V8h-8z"/></svg>',
    'dxrd-svg-menu-new_via_wizard': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M5.7 11.3L9.1 16l1.5-5.4L16 9.1l-4.7-3.4-.1-5.7-4.5 3.3-5.4-2 2 5.4L0 11.2z"/><path class="dxd-icon-fill" d="M23.5 20.6l-8.7-8.8-2.3.7-.6 2.1 8.7 8.8c.7.7 1.9.7 2.6 0l.2-.2c.8-.7.8-1.9.1-2.6zM18 12l2 2V2h-6v2h4zM6 20v-6H4v8h12l-2-2z"/></svg>',
    'dxrd-svg-menu-run_wizard': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M11.3 5.7L11.2 0 6.7 3.3 1.5 1.5l1.8 5.2L0 11.2l5.7.1L9.1 16l1.5-5.4L16 9.1z"/><path class="dxd-icon-fill" d="M23.5 20.6l-8.7-8.8-2.3.7-.6 2.1 8.7 8.8c.7.7 1.9.7 2.6 0l.2-.2c.8-.7.8-1.9.1-2.6z"/></svg>',
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
    'dxrd-svg-todo-gauge': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path class="dxd-icon-fill" d="M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"/><path class="dxd-icon-fill" d="M11 9c-.2 0-.4 0-.5.1L7.4 6c-.4-.3-1.1-.3-1.5 0s-.4 1 0 1.4L9 10.5v.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6 10.1L4.5 8.5c-.3.8-.5 1.6-.5 2.5 0 1.9.8 3.7 2 5l1.3-1.3c-.9-.9-1.4-2.1-1.4-3.5 0-.4.1-.8.1-1.1z"/><path class="dxd-icon-fill" d="M11 4c-.9 0-1.8.2-2.5.5l1.8 1.8c.2 0 .5-.1.7-.1 2.8 0 5 2.2 5 5 0 1.3-.5 2.5-1.4 3.4L16 16c1.3-1.3 2-3.1 2-5 0-3.9-3.1-7-7-7z"/></svg>',
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
    'dxrd-svg-wizard-VerticalReport': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 96 96" xml:space="preserve"><style>.Black{fill:#727272}.White{fill:#fff}.Blue{fill:#1177d7}.st0{opacity:.75}.st1{opacity:.25}.st2{opacity:.5}</style><g id="VerticalReport"><g class="st2"><path class="Black" d="M27.5 15C17.8 15 10 13 10 10.5v32C10 45 17.8 47 27.5 47S45 45 45 42.5v-32C45 13 37.2 15 27.5 15z"/></g><g class="st1"><ellipse class="Black" cx="27.5" cy="8.5" rx="17.5" ry="4.5"/></g><g class="st0"><path class="Black" d="M85.8 30h-13L60 42.8 47.2 30H33.9c-.6 0-1 .4-1 1v60c0 .6.4 1 1 1h51.9c.6 0 1-.4 1-1V31c0-.6-.5-1-1-1z"/></g><path transform="rotate(90 59.864 61)" class="White" d="M29.9 35.1h60V87h-60z"/><g class="st1"><path class="Black" d="M55.2 38H51v6h8v-2.2L55.2 38zm5.8 3.8V44h8v-6h-4.2L61 41.8zM71 38v6h8v-6h-8zm-12.1 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-19.9 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-19.9 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-19.9 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6zm-19.9 8h-8v6h8v-6zm9.9 0h-8v6h8v-6zm10 0h-8v6h8v-6z"/></g><g class="st2"><path class="Black" d="M41 38h8v6h-8v-6zm7.9 8h-8v6h8v-6zm0 8h-8v6h8v-6zm0 8h-8v6h8v-6zm0 8h-8v6h8v-6zm0 8h-8v6h8v-6z"/></g><path class="Blue" d="M64 30c0-7.2-6.7-13-15-13 3.9 0 7 5.8 7 13h-6l10 10 10-10h-6z"/></g></svg>',
    'dxrd-svg-wizard-warning': '<svg data-bind="svgAttrs" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 31 31" xml:space="preserve"><path class="dxd-icon-fill" d="M15.5 0C6.9 0 0 6.9 0 15.5S6.9 31 15.5 31 31 24.1 31 15.5 24.1 0 15.5 0zm0 25c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-7C14.1 18 13 9.9 13 8.5 13 7.1 14.1 6 15.5 6S18 7.1 18 8.5 16.9 18 15.5 18z"/></svg>',
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(78);
__webpack_require__(85);
__webpack_require__(48);
__webpack_require__(77);
__webpack_require__(79);
__webpack_require__(80);
__webpack_require__(8);
__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(84);
__export(__webpack_require__(78));
__export(__webpack_require__(85));
__export(__webpack_require__(48));
__export(__webpack_require__(77));
__export(__webpack_require__(79));
__export(__webpack_require__(80));
__export(__webpack_require__(8));
__export(__webpack_require__(81));
__export(__webpack_require__(82));
__export(__webpack_require__(83));
__export(__webpack_require__(84));


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(8);
__export(__webpack_require__(8));


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(96);
__webpack_require__(94);
__webpack_require__(95);
__webpack_require__(97);
__webpack_require__(156);
__webpack_require__(74);
__webpack_require__(89);
__webpack_require__(43);
__webpack_require__(76);
__webpack_require__(46);
__webpack_require__(9);
__webpack_require__(42);
__webpack_require__(49);
__webpack_require__(86);
__webpack_require__(18);
__webpack_require__(73);
__webpack_require__(12);
__webpack_require__(125);
__webpack_require__(92);
__webpack_require__(47);
__webpack_require__(109);
__export(__webpack_require__(96));
__export(__webpack_require__(94));
__export(__webpack_require__(95));
__export(__webpack_require__(97));
__export(__webpack_require__(74));
__export(__webpack_require__(89));
__export(__webpack_require__(43));
__export(__webpack_require__(76));
__export(__webpack_require__(46));
__export(__webpack_require__(9));
__export(__webpack_require__(42));
__export(__webpack_require__(49));
__export(__webpack_require__(86));
__export(__webpack_require__(18));
__export(__webpack_require__(73));
__export(__webpack_require__(12));
__export(__webpack_require__(125));
__export(__webpack_require__(92));
__export(__webpack_require__(47));
__export(__webpack_require__(109));


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(7);
var _sizeUtils_1 = __webpack_require__(18);
var analytics_internal_1 = __webpack_require__(2);
var ko = __webpack_require__(1);
var $ = __webpack_require__(3);
ko.bindingHandlers['toView'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $previewPage = $(element), $container = $previewPage.parent('.dxrd-report-preview-holder'), pageActive = valueAccessor().active, subscription = pageActive.subscribe(function (active) {
            if (active) {
                var pageTop = $previewPage.position().top;
                if (pageTop < 0 && (pageTop + $previewPage.height() < 0) || pageTop >= $container.height()) {
                    $container.scrollTop($container.scrollTop() + pageTop);
                }
            }
        });
        analytics_internal_1.addDisposeCallback(element, function () {
            subscription.dispose();
        });
    }
};
ko.bindingHandlers['lazyImages'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $element = $(element), enabled = valueAccessor().enabled, load = null, loadVisibleImages = function (time) {
            if (time === void 0) { time = 300; }
            load && clearTimeout(load);
            load = setTimeout(function () {
                if (!enabled()) {
                    return;
                }
                var visibleArea = $element.height() + 100;
                for (var i = 0; i < element.children.length; i++) {
                    var previewPage = element.children[i], rect = previewPage.getBoundingClientRect(), pageTop = rect.top;
                    if (visibleArea > pageTop && pageTop >= 0 || pageTop < 0 && pageTop + rect.height > -100) {
                        var previewPageModel = ko.dataFor(previewPage);
                        previewPageModel && previewPageModel.isClientVisible && previewPageModel.isClientVisible(true);
                    }
                }
            }, time);
        };
        if (ko.isObservable(valueAccessor().updateCallback)) {
            valueAccessor().updateCallback(loadVisibleImages);
        }
        var subscribtion = enabled.subscribe(function (newVal) {
            newVal && loadVisibleImages(500);
        });
        var scrollLoad = function () { return loadVisibleImages(700); };
        element.addEventListener('scroll', scrollLoad);
        loadVisibleImages(500);
        analytics_internal_1.addDisposeCallback(element, function () {
            element.removeEventListener('scroll', scrollLoad);
            subscribtion.dispose();
        });
    }
};
ko.bindingHandlers['textCopier'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var keyDownHandler = function (e) {
            var value = viewModel.getSelectedContent();
            if (!value || !(e.ctrlKey || e.metaKey)
                || $(e.target).is('input:visible,textarea:visible')
                || window.getSelection && window.getSelection() && window.getSelection().toString()
                || document['selection'] && document['selection'].createRange().text) {
                return;
            }
            var $clipboardContainer = $('#clipboard-container');
            $clipboardContainer.empty().show();
            $("<textarea id='clipboard'></textarea>").val(value)
                .appendTo($clipboardContainer)
                .focus()
                .select();
        };
        var keyUpHandler = function (e) {
            if ($(e.target).is('#clipboard')) {
                $('#clipboard-container').empty().hide();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);
        analytics_internal_1.addDisposeCallback(element, function () {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keyup', keyUpHandler);
        });
    }
};
ko.bindingHandlers['autoFit'] = {
    init: function (element, valueAccessor) {
        var options = valueAccessor();
        var subscriptions = [];
        var updateZoom = function (newOptions) {
            var $element = $(element);
            var autoFitBy = newOptions.autoFitBy();
            if (autoFitBy != constants_1.ZoomAutoBy.None && ((!newOptions.brickLoading || (newOptions.brickLoading && !newOptions.brickLoading())) || options.alwaysRecalculate)) {
                if (options.skipIfInvisible && $element.filter(':visible').length == 0)
                    return;
                var newZoom = analytics_internal_1.roundingXDecimals(_sizeUtils_1.updatePreviewZoomWithAutoFit(newOptions.width(), newOptions.height(), $element, autoFitBy), true);
                newOptions.zoom(Math.max(newZoom, 0.1));
            }
        };
        updateZoom(options);
        var onResize = function () {
            updateZoom(options);
        };
        window.addEventListener('resize', onResize);
        var subscribe = function (value) {
            if (value) {
                subscriptions.push(value.subscribe(function (newVal) {
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
        analytics_internal_1.addDisposeCallback(element, function () {
            window.removeEventListener('resize', onResize);
            subscriptions.forEach(function (subscription) {
                subscription.dispose();
            });
        });
    }
};
ko.bindingHandlers['childStyle'] = {
    init: function (element, valueAccessor) {
        var values = valueAccessor();
        $(element).find(values.selector).css(values.style);
    }
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(99);
__export(__webpack_require__(99));


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(105);
__webpack_require__(111);
__webpack_require__(159);
__webpack_require__(100);
__webpack_require__(107);
__webpack_require__(104);
__webpack_require__(50);
__webpack_require__(102);
__webpack_require__(51);
__webpack_require__(103);
__webpack_require__(127);
__webpack_require__(101);
__webpack_require__(106);
__webpack_require__(98);
__export(__webpack_require__(105));
__export(__webpack_require__(111));
__export(__webpack_require__(100));
__export(__webpack_require__(107));
__export(__webpack_require__(104));
__export(__webpack_require__(50));
__export(__webpack_require__(102));
__export(__webpack_require__(51));
__export(__webpack_require__(103));
__export(__webpack_require__(127));
__export(__webpack_require__(101));
__export(__webpack_require__(106));
__export(__webpack_require__(98));


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _eventProcessor_1 = __webpack_require__(111);
var events_1 = __webpack_require__(112);
__webpack_require__(41);
__webpack_require__(41);
var ko = __webpack_require__(1);
var scroll_view_1 = __webpack_require__(160);
ko.bindingHandlers['mobileZoom'] = {
    init: function (element, valueAccessor) {
        var options = valueAccessor();
        var scroll;
        var zoom = options.zoom();
        events_1.on(element, 'dxpinch', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var scale = e['scale'];
            var newZoom = zoom;
            newZoom *= scale;
            newZoom = Math.max(0.15, Math.min(2, newZoom));
            options.zoom(newZoom);
        });
        events_1.on(element, 'dxpinchstart', function (e) {
            scroll = scroll_view_1.default.getInstance(element.getElementsByClassName('dxrd-scrollView-mobile')[0]);
            e.stopPropagation();
            e.preventDefault();
            options.zoomUpdating(true);
            scroll && scroll.option('disabled', true);
            zoom = options.zoom.peek();
        });
        events_1.on(element, 'dxpinchend', function (e) {
            e.stopPropagation();
            options.zoomUpdating(false);
            setTimeout(function () {
                scroll && scroll.option('disabled', false);
                scroll && scroll.refresh();
            }, 10);
        });
    }
};
ko.bindingHandlers['slide'] = {
    init: function (element, valueAccessor) {
        var slideOptionsValue = valueAccessor();
        var isStarted = false;
        var processor = new _eventProcessor_1.EventProcessor(element, slideOptionsValue);
        events_1.on(element, 'dxpointerdown', function (e) {
            processor.start(e);
            isStarted = true;
        });
        events_1.on(element, 'dxpointermove', function (e) {
            isStarted && processor.move(e);
        });
        ['dxpointercancel', 'dxpointerleave', 'dxpointerup'].forEach(function (value) {
            events_1.on(element, value, function (e) {
                if (isStarted) {
                    processor.end(e);
                    isStarted = false;
                }
            });
        });
    }
};


/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = { default: DevExpress.ui.dxScrollView };

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(91);
__webpack_require__(21);
__webpack_require__(90);
__webpack_require__(17);
__webpack_require__(44);
__export(__webpack_require__(91));
__export(__webpack_require__(21));
__export(__webpack_require__(90));
__export(__webpack_require__(17));
__export(__webpack_require__(44));


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(6);
__export(__webpack_require__(6));


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(164);
__webpack_require__(165);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(45);
__webpack_require__(128);
__webpack_require__(19);
__export(__webpack_require__(45));
__export(__webpack_require__(128));
__export(__webpack_require__(19));


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(129);
__webpack_require__(113);
__webpack_require__(114);
__webpack_require__(23);
__webpack_require__(116);
__webpack_require__(130);
__webpack_require__(117);
__webpack_require__(115);
__export(__webpack_require__(129));
__export(__webpack_require__(113));
__export(__webpack_require__(114));
__export(__webpack_require__(23));
__export(__webpack_require__(116));
__export(__webpack_require__(130));
__export(__webpack_require__(117));
__export(__webpack_require__(115));


/***/ })
/******/ ]);