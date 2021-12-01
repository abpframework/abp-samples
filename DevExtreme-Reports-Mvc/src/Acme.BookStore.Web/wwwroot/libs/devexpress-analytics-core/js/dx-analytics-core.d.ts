/**
* DevExpress Analytics (dist\js\dx-analytics-core.d.ts)
* Version:  21.2.3
* Build date: Oct 28, 2021
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
declare module DevExpress.Analytics.Utils {
	export interface IPathRequest {
	    fullPath: string;
	    path: string;
	    ref?: string;
	    id?: string;
	    dataSource?: any;
	    state?: any;
	    pathParts?: string[];
	}
	export class PathRequest implements IPathRequest {
	    pathParts: string[];
	    constructor(fullPath: string, pathParts?: string[]);
	    fullPath: string;
	    ref: string;
	    id: string;
	    path: string;
	}

}
declare module DevExpress.Analytics.Utils {

    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
	export interface IDataMemberInfo {
	    name: string;
	    displayName: string;
	    isList?: boolean;
	    specifics?: string;
	    isSelected?: boolean;
	    dataType?: string;
	    templateName?: string;
	    innerActions?: any;
	    relationPath?: string;
	    noDragable?: any;
	    dragData?: any;
	    icon?: string;
	    items?: IDataMemberInfo[];
	}
	export interface IItemsProvider {
	    getItems: (path: IPathRequest) => JQueryPromise<IDataMemberInfo[]>;
	    getItemByPath?: (path: IPathRequest) => JQueryPromise<IDataMemberInfo>;
	    getValues?: (path: IPathRequest) => JQueryPromise<any[]>;
	}
	export interface IHotKey {
	    ctrlKey: boolean;
	    keyCode: number;
	}
	export interface IAction<T = any> {
	    id?: string;
	    text: string;
	    textId?: string;
	    group?: () => string;
	    displayText?: () => string;
	    imageClassName: any;
	    imageTemplateName?: any;
	    container?: string;
	    clickAction: (model?: any) => void;
	    disabled?: ko.Observable<boolean> | ko.Computed<boolean>;
	    hotKey?: IHotKey;
	    hasSeparator?: boolean;
	    templateName?: string;
	    contentData?: T;
	    visible?: any;
	    zoomStep?: any;
	    zoomLevels?: any;
	    zoom?: any;
	    zoomItems?: any;
	    position?: number;
	    selected?: ko.Observable<boolean> | ko.Computed<boolean>;
	    displayExpr?: (val: any) => string;
	    onCustomItemCreating?: (e: {
	        text: string;
	        customItem: any;
	    }) => void;
	}
	export interface IActionGroup {
	    groupName: string;
	    actions: IAction;
	}

}
declare module DevExpress.Analytics.Internal {
    import IAction = DevExpress.Analytics.Utils.IAction;;
	export interface IActionsProvider {
	    getActions: (context: any) => IAction[];
	}
	export class BaseActionsProvider implements IActionsProvider {
	    actions: IAction[];
	    initActions(actions: IAction[]): void;
	    getActions(context: any): IAction<any>[];
	    condition(context: any): boolean;
	    setDisabled: (context: any) => void;
	}

}
declare module DevExpress.Analytics.Internal {
	export function _defineProperty(legacyObject: any, realObject: any, propertyName: any, newPropertyName?: any): void;
	export function _definePropertyByString(rootObject: any, ...objectPathes: string[]): void;
	export function addDisposeCallback(element: Node, callback: () => any): void;
	export function createGlobalModuleVariableFunc<T>(defaultVal: T): (newVal?: T) => T;

}
declare module DevExpress.Analytics.Utils {

	export type DisposableType = ko.Subscription | ko.ComputedFunctions | IDisposable;
	export interface IDisposable {
	    dispose: () => void;
	    _disposables?: Array<DisposableType>;
	}
	export class Disposable implements IDisposable {
	    _disposables: Array<DisposableType>;
	    isDisposing: boolean;
	    constructor();
	    disposeObservableArray(array: ko.ObservableArray<IDisposable>): void;
	    resetObservableArray(array: ko.ObservableArray<any>): void;
	    disposeArray(array: IDisposable[]): void;
	    dispose(): void;
	    removeProperties(): void;
	}
	export function deserializeArray<T>(model: any, creator: (item: any) => any): ko.ObservableArray<T>;
	export function serializeDate(date: Date): string;
	export function deserializeDate(dateTime: string): Date;

}
declare module DevExpress.Analytics.Internal {

	export function knockoutArrayWrapper<T>(items?: any, ...onChange: Array<(array: any[], event?: string) => void>): ko.ObservableArray<T>;
	export function isPlainObject(obj: any): boolean;
	export function isEmptyObject(obj: any): boolean;
	export function extend(target: any, object1?: any, ...objectN: any[]): any;

}
declare module DevExpress.Analytics.Utils {
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export interface IModelSerializerOptions {
	    useRefs?: boolean;
	    serializeDate?: (date: Date) => string;
	}
	export interface IModelSerializer {
	    deserialize(viewModel: ISerializableModel, model: any, serializationsInfo?: ISerializationInfoArray): any;
	    serialize(viewModel: ISerializableModel, serializationsInfo?: ISerializationInfoArray, refs?: any): any;
	}
	export interface IModelSerializerRef {
	    linkObjTable: {
	        setRef: (ref: number) => void;
	        obj: any;
	    }[];
	    objects: any[];
	}
	export class ModelSerializer implements IModelSerializer {
	    private _options;
	    private _refTable;
	    private _linkTable;
	    private linkObjects;
	    private _getModel;
	    private _collectLinks;
	    private _enumRefs;
	    _collectLinksAndEnumRefs(model: any, internalModel?: any, propertyPath?: any[]): void;
	    constructor(options?: IModelSerializerOptions);
	    setLinks(refs: IModelSerializerRef): void;
	    deserializeProperty(modelPropertyInfo: ISerializationInfo, model: any): any;
	    deserializeDefaultValue(modelPropertyInfo: ISerializationInfo): any;
	    deserializePropertyValue(modelPropertyInfo: ISerializationInfo, modelValue: any, strict?: boolean): any;
	    deserialize(viewModel: ISerializableModel, model: any, serializationsInfo?: ISerializationInfoArray): void;
	    serialize(viewModel: ISerializableModel, serializationsInfo?: ISerializationInfoArray, refs?: IModelSerializerRef): any;
	    private _isSerializableValue;
	    protected serializeProperty(modelPropertyInfo: ISerializationInfo, viewModel: ISerializableModel, serializationsInfo: ISerializationInfoArray, refs: IModelSerializerRef, result: any): void;
	    private _serialize;
	}

}
declare module DevExpress.Analytics.Utils {

    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export interface IEditorInfo {
	    header?: string;
	    content?: string;
	    custom?: string;
	    editorType?: any;
	    extendedOptions?: any;
	}
	export interface ISerializationInfo {
	    propertyName: string;
	    modelName?: string;
	    defaultVal?: any;
	    type?: ISerializableModelConstructor;
	    info?: ISerializationInfoArray;
	    from?: (val: any, serializer?: IModelSerializer) => any;
	    toJsonObject?: any;
	    array?: boolean;
	    link?: boolean;
	    editor?: IEditorInfo;
	    displayName?: string;
	    values?: {
	        [key: string]: string;
	    } | ko.Observable<{
	        [key: string]: string;
	    }>;
	    valuesArray?: Array<IDisplayedValue>;
	    initialize?: (viewModel: any, serilizer?: IModelSerializer) => void;
	    validationRules?: Array<any>;
	    validatorOptions?: any;
	    editorOptions?: any;
	    localizationId?: string;
	    visible?: any;
	    disabled?: any;
	    valueStore?: any;
	    addHandler?: () => any;
	    alwaysSerialize?: boolean;
	    template?: string;
	    beforeSerialize?: (value: any) => any;
	    isRequired?: boolean;
	    localizable?: boolean;
	    asRef?: boolean;
	}
	export interface IDisplayedValue {
	    value: any;
	    displayValue: string;
	    localizationId?: string;
	}
	export interface ISerializationInfoArray extends Array<ISerializationInfo> {
	}
	export interface ISerializableModel {
	    _model?: any;
	    getInfo?: () => ISerializationInfoArray;
	}
	export interface ISerializableModelConstructor extends ISerializableModel {
	    new (model?: any, serializer?: IModelSerializer, info?: ISerializationInfoArray): any;
	}

}
declare module DevExpress.Analytics.Widgets {
    import IEditorInfo = DevExpress.Analytics.Utils.IEditorInfo;;
	export type BaseEditors = 'bool' | 'boolSelect' | 'numeric' | 'modificators' | 'combobox' | 'comboboxEditable' | 'text' | 'image' | 'file' | 'commonCollection' | 'font' | 'stringArray' | 'guid' | 'date' | 'borders' | 'textAlignment' | 'objecteditorCustom' | 'objecteditor' | 'inplaceObjectEditor' | 'field' | 'dataMember' | 'filterEditor' | 'formatEditor' | 'expressionEditor' | 'customColorEditor' | 'sbyte' | 'decimal' | 'int64' | 'int32' | 'int16' | 'single' | 'double' | 'byte' | 'uint16' | 'uint32' | 'uint64';
	export class EditorTemplates<T extends string> {
	    private _useDeferredRegistration;
	    private _editorTemplates;
	    constructor(_useDeferredRegistration?: boolean);
	    register(name: T, editorInfo: IEditorInfo): void;
	    unregister(name: T): void;
	    registerEditors(editors: {
	        [K in T]?: IEditorInfo;
	    }): void;
	    getEditor(name: T): IEditorInfo;
	}
	export var editorTemplates: EditorTemplates<BaseEditors>;

}
declare module DevExpress.Analytics.Elements.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export var left: ISerializationInfo, right: ISerializationInfo, top: ISerializationInfo, bottom: ISerializationInfo, all: ISerializationInfo;
	export var paddingSerializationsInfo: ISerializationInfo[];

}
declare module DevExpress.Analytics.Elements {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export interface IMargins {
	    bottom: ko.Observable<number> | ko.Computed<number>;
	    left: ko.Observable<number> | ko.Computed<number>;
	    right: ko.Observable<number> | ko.Computed<number>;
	    top: ko.Observable<number> | ko.Computed<number>;
	}
	export class Margins implements IMargins {
	    static defaultVal: string;
	    static unitProperties: string[];
	    getInfo(): ISerializationInfoArray;
	    constructor(left: any, right: any, top: any, bottom: number);
	    isEmpty(): boolean;
	    static fromString(value?: string): Margins;
	    toString(): string;
	    bottom: ko.Observable<number> | ko.Computed<number>;
	    left: ko.Observable<number> | ko.Computed<number>;
	    right: ko.Observable<number> | ko.Computed<number>;
	    top: ko.Observable<number> | ko.Computed<number>;
	}

}
declare module DevExpress.Analytics.Internal {
	export interface IHoverInfo {
	    isOver: boolean;
	    x: number;
	    y: number;
	    offsetX?: number;
	    offsetY?: number;
	    isNotDropTarget?: boolean;
	}
	export class HoverInfo implements IHoverInfo {
	    private _x;
	    private _y;
	    isOver: boolean;
	    x: number;
	    y: number;
	}

}
declare module DevExpress.Analytics.Internal {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export interface ILocalizationInfo {
	    text: string;
	    localizationId: string;
	}
	export interface IFileUploadOptions {
	    accept?: string;
	    type?: string;
	    readMode?: string;
	}
	export enum SearchMode {
	    contains = 0,
	    startWith = 1
	}
	export interface ISearchOptions {
	    globalMatch?: boolean;
	    canUseRegex?: boolean;
	    caseSensitive?: boolean;
	    searchMode?: SearchMode;
	}
	export interface IFileUploadResult {
	    content: string;
	    format: string;
	}
	export function _getFileContent(content: string, readMode: string): string;
	export var uploadFile: (options: IFileUploadOptions) => JQuery.Promise<IFileUploadResult, any, any>;
	export function setUploadFile(newFunc: any): void;
	export function compareEditorInfo(editor1: any, editor2: any): boolean;
	export function findMatchesInString(stringWhereSearch: string, searchPattern: string, options?: ISearchOptions): RegExpMatchArray;
	export function escapeToRegExp(string: String): string;
	export function stringRemove(string: string, start: number, count?: number): string;
	export function stringReplace(string: string, start: number, count?: number, newChar?: string): string;
	export function stringInsert(string: string, pos: number, subStr: string): string;
	export function formatUnicorn(text: string, ...args: any[]): string;
	export interface IModelAction {
	    id?: string;
	    action: (propertyName: string) => void;
	    title: string;
	    visible: (propertyName: string) => boolean;
	    hint?: ko.Observable<string> | ko.Computed<string>;
	    weight?: number;
	    customTemplate?: {
	        name: string;
	        data: {
	            popupVisible: ko.Observable<boolean>;
	            value: any;
	        };
	    };
	    items?: IModelAction[];
	}
	export interface IControlPropertiesViewModel {
	    isPropertyDisabled: (name: string) => boolean;
	    isPropertyVisible: (name: string) => boolean;
	    isPropertyModified: (name: string) => boolean;
	    isPropertyHighlighted?: (name: string) => boolean;
	    controlType?: string;
	    actions: IModelAction[];
	    actionProviders?: IModelActionProvider[];
	    getInfo?: () => ISerializationInfoArray;
	}
	export type IModelActionProvider = {
	    getActions: (name: string) => IModelAction[];
	};
	export interface IUndoEngine {
	    start: () => void;
	    end: () => void;
	}
	export enum KeyboardEnum {
	    Plus = "+",
	    Minus = "-",
	    Equal = "=",
	    Tab = "Tab",
	    Delete = "Delete",
	    Enter = "Enter",
	    Esc = "Escape",
	    Space = " ",
	    End = "End",
	    Home = "Home",
	    PageUp = "PageUp",
	    PageDown = "PageDown",
	    ArrowLeft = "ArrowLeft",
	    ArrowUp = "ArrowUp",
	    ArrowRight = "ArrowRight",
	    ArrowDown = "ArrowDown"
	}
	export enum KeyboardCodesEnum {
	    Tab = 9,
	    Enter = 13,
	    Esc = 27,
	    Space = 32,
	    End = 35,
	    Home = 36,
	    Left = 37,
	    Up = 38,
	    Right = 39,
	    Down = 40
	}
	export type IKeyboardCodesEnum = {
	    [key in keyof typeof KeyboardCodesEnum]?: (e: any, index?: number) => boolean;
	};

}
declare module DevExpress.Analytics.Internal {
	export var accessibilityFontSizeZoomFactor: (newVal?: number) => number;
	export var calculateWithZoomFactor: (value: number) => number;

}
declare module DevExpress.Analytics.Internal {
	export function loadMessages(_messages: {
	    [key: string]: string;
	}): void;
	export function getLocalization(text: string, id?: string, _removeWinSymbols?: boolean): any;
	export var removeWinSymbols: boolean;
	export var Globalize: any;
	export var messages: {};
	export var custom_localization_values: {};
	export function selectPlaceholder(): any;
	export function noDataText(): any;
	export function searchPlaceholder(): any;
	export function resolveFromPromises<T>(promises: JQueryPromise<any>[], createModel: () => T): JQueryDeferred<T>;
	export function isCustomizedWithUpdateLocalizationMethod(text: string): boolean;
	export function localize(val: string): any;
	export function formatDate(val: any): string;
	export function parseDate(val: any, useDefault?: boolean, format?: string): Date;

}
declare module DevExpress.Analytics.Utils {
	export function addCultureInfo(json: {
	    messages: any;
	}): void;
	export function getLocalization(text: string, id?: string, _removeWinSymblols?: boolean): any;
	export function _stringEndsWith(string: string, searchString: string): boolean;
	export function updateLocalization(object: {
	    [key: string]: string;
	}): void;

}
declare module DevExpress.Analytics.Widgets.Internal {
	export var propertiesGridEditorsPaddingLeft: (newVal?: number) => number;
	export var defaultFontSerialization: (newVal?: string) => string;
	export function validateGuid(guid: any): boolean;
	export function validateNullableGuid(guid: any): boolean;
	export var guidValidationRules: {
	    type: string;
	    validationCallback: (options: any) => boolean;
	    readonly message: any;
	}[];
	export var guidRequiredValidationRules: {
	    type: string;
	    readonly message: any;
	}[];
	export var requiredValidationRules: {
	    type: string;
	    readonly message: any;
	}[];

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export interface IOperandValueOptions {
	    value: any;
	}
	export class OperandValue extends CriteriaOperator {
	    private _processStringValue;
	    constructor(value?: any);
	    readonly displayType: any;
	    value: any;
	    type: string;
	    specifics: string;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export enum FunctionOperatorType {
	    None = 0,
	    Custom = 1,
	    CustomNonDeterministic = 2,
	    Iif = 3,
	    IsNull = 4,
	    IsNullOrEmpty = 5,
	    Trim = 6,
	    Len = 7,
	    Substring = 8,
	    Upper = 9,
	    Lower = 10,
	    Concat = 11,
	    Ascii = 12,
	    Char = 13,
	    ToStr = 14,
	    Replace = 15,
	    Reverse = 16,
	    Insert = 17,
	    CharIndex = 18,
	    Remove = 19,
	    Abs = 20,
	    Sqr = 21,
	    Cos = 22,
	    Sin = 23,
	    Atn = 24,
	    Exp = 25,
	    Log = 26,
	    Rnd = 27,
	    Tan = 28,
	    Power = 29,
	    Sign = 30,
	    Round = 31,
	    Ceiling = 32,
	    Floor = 33,
	    Max = 34,
	    Min = 35,
	    Acos = 36,
	    Asin = 37,
	    Atn2 = 38,
	    BigMul = 39,
	    Cosh = 40,
	    Log10 = 41,
	    Sinh = 42,
	    Tanh = 43,
	    PadLeft = 44,
	    PadRight = 45,
	    StartsWith = 46,
	    EndsWith = 47,
	    Contains = 48,
	    ToInt = 49,
	    ToLong = 50,
	    ToFloat = 51,
	    ToDouble = 52,
	    ToDecimal = 53,
	    LocalDateTimeThisYear = 54,
	    LocalDateTimeThisMonth = 55,
	    LocalDateTimeLastWeek = 56,
	    LocalDateTimeThisWeek = 57,
	    LocalDateTimeYesterday = 58,
	    LocalDateTimeToday = 59,
	    LocalDateTimeNow = 60,
	    LocalDateTimeTomorrow = 61,
	    LocalDateTimeDayAfterTomorrow = 62,
	    LocalDateTimeNextWeek = 63,
	    LocalDateTimeTwoWeeksAway = 64,
	    LocalDateTimeNextMonth = 65,
	    LocalDateTimeNextYear = 66,
	    IsOutlookIntervalBeyondThisYear = 67,
	    IsOutlookIntervalLaterThisYear = 68,
	    IsOutlookIntervalLaterThisMonth = 69,
	    IsOutlookIntervalNextWeek = 70,
	    IsOutlookIntervalLaterThisWeek = 71,
	    IsOutlookIntervalTomorrow = 72,
	    IsOutlookIntervalToday = 73,
	    IsOutlookIntervalYesterday = 74,
	    IsOutlookIntervalEarlierThisWeek = 75,
	    IsOutlookIntervalLastWeek = 76,
	    IsOutlookIntervalEarlierThisMonth = 77,
	    IsOutlookIntervalEarlierThisYear = 78,
	    IsOutlookIntervalPriorThisYear = 79,
	    IsLastMonth = 80,
	    IsLastYear = 81,
	    IsNextMonth = 82,
	    IsNextYear = 83,
	    IsThisWeek = 84,
	    IsThisMonth = 85,
	    IsThisYear = 86,
	    IsJanuary = 87,
	    IsFebruary = 88,
	    IsMarch = 89,
	    IsApril = 90,
	    IsMay = 91,
	    IsJune = 92,
	    IsJuly = 93,
	    IsAugust = 94,
	    IsSeptember = 95,
	    IsOctober = 96,
	    IsNovember = 97,
	    IsDecember = 98,
	    IsSameDay = 99,
	    IsYearToDate = 100,
	    DateDiffTick = 101,
	    DateDiffSecond = 102,
	    DateDiffMilliSecond = 103,
	    DateDiffMinute = 104,
	    DateDiffHour = 105,
	    DateDiffDay = 106,
	    DateDiffMonth = 107,
	    DateDiffYear = 108,
	    GetDate = 109,
	    GetMilliSecond = 110,
	    GetSecond = 111,
	    GetMinute = 112,
	    GetHour = 113,
	    GetDay = 114,
	    GetMonth = 115,
	    GetYear = 116,
	    GetDayOfWeek = 117,
	    GetDayOfYear = 118,
	    GetTimeOfDay = 119,
	    Now = 120,
	    UtcNow = 121,
	    Today = 122,
	    AddTimeSpan = 123,
	    AddTicks = 124,
	    AddMilliSeconds = 125,
	    AddSeconds = 126,
	    AddMinutes = 127,
	    AddHours = 128,
	    AddDays = 129,
	    AddMonths = 130,
	    AddYears = 131,
	    OrderDescToken = 132
	}
	export interface IFunctionOperatorProperties {
	    operatorType: FunctionOperatorType;
	    operands: any[];
	}
	export class FunctionOperator extends CriteriaOperator {
	    constructor(operatorType: FunctionOperatorType, operands: any);
	    toString: (reverse: any) => string;
	    operatorType: FunctionOperatorType;
	    assignLeftPart: (criteriaOperator: any) => void;
	    assignRightPart: (criteriaOperator: any) => void;
	    readonly leftPart: any;
	    readonly rightPart: any[];
	    readonly displayType: string;
	    readonly enumType: typeof FunctionOperatorType;
	    operands: any[];
	    type: string;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export interface IInOperatorOptions {
	    criteriaOperator: CriteriaOperator;
	    operands: any[];
	}
	export class InOperator extends CriteriaOperator {
	    constructor(criteriaOperator: CriteriaOperator, operands: any);
	    readonly leftPart: CriteriaOperator;
	    readonly rightPart: any[];
	    assignLeftPart: (criteriaOperator: any) => void;
	    assignRightPart: (criteriaOperator: any) => void;
	    criteriaOperator: CriteriaOperator;
	    readonly displayType: string;
	    operatorType: string;
	    readonly enumType: typeof InOperator;
	    type: string;
	    operands: any[];
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}

}
declare module DevExpress.Analytics.Criteria {
    import OperandValue = DevExpress.Analytics.Criteria.OperandValue;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class ConstantValue extends OperandValue {
	    constructor(value: any);
	    accept(visitor: ICriteriaOperatorVisitor): ConstantValue | CriteriaOperator;
	}

}
declare module DevExpress.Analytics.Criteria {
    import OperandValue = DevExpress.Analytics.Criteria.OperandValue;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export interface IOperandParameterOptions {
	    parameterName?: string;
	    value?: string;
	}
	export class OperandParameter extends OperandValue {
	    constructor(parameterName?: string, value?: string);
	    readonly displayType: string;
	    parameterName: string;
	    type: string;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export interface IOperandPropertyOptions {
	    propertyName: string;
	    startColumn: any;
	    startLine: any;
	    originalPropertyLength: any;
	}
	export class OperandProperty extends CriteriaOperator {
	    constructor(propertyName?: string, startColumn?: number, startLine?: number, originalPropertyLength?: number);
	    readonly displayType: string;
	    propertyName: string;
	    originalPropertyLength: number;
	    type: string;
	    startPosition: {
	        line: number;
	        column: number;
	    };
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export enum UnaryOperatorType {
	    Minus = 0,
	    Plus = 1,
	    BitwiseNot = 2,
	    Not = 3,
	    IsNull = 4
	}
	export interface IUnaryOperatorOptions {
	    operatorType: UnaryOperatorType;
	    operator: CriteriaOperator;
	}
	export class UnaryOperator extends CriteriaOperator {
	    constructor(operatorType: UnaryOperatorType, operand: CriteriaOperator);
	    readonly leftPart: CriteriaOperator;
	    operand: CriteriaOperator;
	    operatorType: UnaryOperatorType;
	    assignFrom(criteriaOperator: any): void;
	    readonly displayType: string;
	    readonly enumType: typeof UnaryOperatorType;
	    type: string;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export interface IBetweenOperatorOptions {
	    property: CriteriaOperator;
	    begin: CriteriaOperator;
	    end: CriteriaOperator;
	}
	export class BetweenOperator extends CriteriaOperator {
	    constructor(property: CriteriaOperator, begin: CriteriaOperator, end: CriteriaOperator);
	    property: CriteriaOperator;
	    begin: CriteriaOperator;
	    end: CriteriaOperator;
	    readonly leftPart: CriteriaOperator;
	    readonly rightPart: CriteriaOperator[];
	    resetRightPart: (newVal: any) => void;
	    assignLeftPart: (criteriaOperator: any) => void;
	    assignRightPart: (criteriaOperator: any) => void;
	    readonly displayType: string;
	    operatorType: string;
	    readonly enumType: typeof BetweenOperator;
	    type: string;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import Aggregate = DevExpress.Analytics.Criteria.Aggregate;;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export interface IJoinOperandOptions {
	    joinTypeName: string;
	    condition: CriteriaOperator;
	    type: Aggregate;
	    aggregated: CriteriaOperator;
	}
	export class JoinOperand extends CriteriaOperator {
	    constructor(joinTypeName: string, condition: CriteriaOperator, type: Aggregate, aggregated: CriteriaOperator);
	    static joinOrAggregate(collectionProperty: OperandProperty, condition: CriteriaOperator, type: Aggregate, aggregated: CriteriaOperator): CriteriaOperator;
	    joinTypeName: string;
	    condition: CriteriaOperator;
	    operatorType: Aggregate;
	    aggregatedExpression: CriteriaOperator;
	    type: string;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import IBinaryOperatorOptions = DevExpress.Analytics.Criteria.IBinaryOperatorOptions;
    import BinaryOperator = DevExpress.Analytics.Criteria.BinaryOperator;;
    import IFunctionOperatorProperties = DevExpress.Analytics.Criteria.IFunctionOperatorProperties;
    import FunctionOperator = DevExpress.Analytics.Criteria.FunctionOperator;;
    import IAggregateOperandOptions = DevExpress.Analytics.Criteria.IAggregateOperandOptions;
    import AggregateOperand = DevExpress.Analytics.Criteria.AggregateOperand;;
    import IGroupOperatorOptions = DevExpress.Analytics.Criteria.IGroupOperatorOptions;
    import GroupOperator = DevExpress.Analytics.Criteria.GroupOperator;;
    import IInOperatorOptions = DevExpress.Analytics.Criteria.IInOperatorOptions;
    import InOperator = DevExpress.Analytics.Criteria.InOperator;;
    import IOperandValueOptions = DevExpress.Analytics.Criteria.IOperandValueOptions;
    import OperandValue = DevExpress.Analytics.Criteria.OperandValue;;
    import ConstantValue = DevExpress.Analytics.Criteria.ConstantValue;;
    import IOperandParameterOptions = DevExpress.Analytics.Criteria.IOperandParameterOptions;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;;
    import IOperandPropertyOptions = DevExpress.Analytics.Criteria.IOperandPropertyOptions;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;;
    import IUnaryOperatorOptions = DevExpress.Analytics.Criteria.IUnaryOperatorOptions;
    import UnaryOperator = DevExpress.Analytics.Criteria.UnaryOperator;;
    import IBetweenOperatorOptions = DevExpress.Analytics.Criteria.IBetweenOperatorOptions;
    import BetweenOperator = DevExpress.Analytics.Criteria.BetweenOperator;;
    import IJoinOperandOptions = DevExpress.Analytics.Criteria.IJoinOperandOptions;
    import JoinOperand = DevExpress.Analytics.Criteria.JoinOperand;;
	export class CriteriaOperatorPreprocessor {
	    _func: Array<(currentOperand: CriteriaOperator, options: {
	        operatorType: string;
	        options: any;
	    }) => CriteriaOperator>;
	    CriteriaOperator(): CriteriaOperator;
	    BinaryOperator(options: IBinaryOperatorOptions): BinaryOperator;
	    FunctionOperator(options: IFunctionOperatorProperties): FunctionOperator;
	    AggregateOperand(options: IAggregateOperandOptions): AggregateOperand;
	    GroupOperator(options: IGroupOperatorOptions): GroupOperator;
	    InOperator(options: IInOperatorOptions): InOperator;
	    ConstantValue(options: IOperandValueOptions): ConstantValue;
	    OperandValue(options: IOperandValueOptions): OperandValue;
	    OperandParameter(options: IOperandParameterOptions): OperandParameter;
	    OperandProperty(options: IOperandPropertyOptions): OperandProperty;
	    UnaryOperator(options: IUnaryOperatorOptions): UnaryOperator;
	    BetweenOperator(options: IBetweenOperatorOptions): BetweenOperator;
	    JoinOperator(options: IJoinOperandOptions): JoinOperand;
	    addListener(func: (currentOperand: CriteriaOperator, options: {
	        operatorType: string;
	        options: any;
	    }) => CriteriaOperator): void;
	    removeListener(func: (currentOperand: CriteriaOperator, options: {
	        operatorType: string;
	        options: any;
	    }) => CriteriaOperator): void;
	    process(operatorType: string, options: any): CriteriaOperator;
	}
	export var criteriaCreator: CriteriaOperatorPreprocessor;

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export enum GroupOperatorType {
	    And = 0,
	    Or = 1
	}
	export interface IGroupOperatorOptions {
	    operation: GroupOperatorType;
	    operands: Array<CriteriaOperator>;
	}
	export class GroupOperator extends CriteriaOperator {
	    constructor(operation: GroupOperatorType, operands: Array<CriteriaOperator>);
	    static combine(operation: GroupOperatorType, operands: Array<CriteriaOperator>): CriteriaOperator;
	    create: (isGroup: any, property: OperandProperty, specifics?: string) => any;
	    change: (operationType: any, item: any, incorrectSpecificsForAggregate?: boolean) => any;
	    remove: (operator: CriteriaOperator) => void;
	    operatorType: GroupOperatorType;
	    assignLeftPart: (operator: CriteriaOperator) => void;
	    children(): any[];
	    readonly displayType: string;
	    readonly enumType: typeof GroupOperatorType;
	    operands: any[];
	    type: string;
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator | GroupOperator;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export enum Aggregate {
	    Count = 0,
	    Exists = 1,
	    Min = 2,
	    Max = 3,
	    Avg = 4,
	    Sum = 5,
	    Single = 6
	}
	export interface IAggregateOperandOptions {
	    property: CriteriaOperator;
	    aggregatedExpression: CriteriaOperator;
	    aggregateType: Aggregate;
	    condition: any;
	}
	export class AggregateOperand extends CriteriaOperator {
	    constructor(property: CriteriaOperator, aggregatedExpression: CriteriaOperator, aggregateType: Aggregate, condition: any);
	    readonly displayType: string;
	    readonly enumType: typeof Aggregate;
	    readonly leftPart: CriteriaOperator;
	    children(): any[];
	    change: (operationType: any, item: CriteriaOperator) => any;
	    assignLeftPart: (criteriaOperator: any) => void;
	    property: CriteriaOperator;
	    condition: CriteriaOperator;
	    operatorType: Aggregate;
	    aggregatedExpression: any;
	    type: string;
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator | AggregateOperand;
	}

}
declare module DevExpress.Analytics.Criteria.Utils {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import AggregateOperand = DevExpress.Analytics.Criteria.AggregateOperand;;
    import GroupOperator = DevExpress.Analytics.Criteria.GroupOperator;;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;;
    import ConstantValue = DevExpress.Analytics.Criteria.ConstantValue;;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;;
    import JoinOperand = DevExpress.Analytics.Criteria.JoinOperand;;
    import BetweenOperator = DevExpress.Analytics.Criteria.BetweenOperator;;
    import InOperator = DevExpress.Analytics.Criteria.InOperator;;
    import BinaryOperator = DevExpress.Analytics.Criteria.BinaryOperator;;
    import UnaryOperator = DevExpress.Analytics.Criteria.UnaryOperator;;
    import FunctionOperator = DevExpress.Analytics.Criteria.FunctionOperator;;
	export interface IPropertyLocation {
	    index?: number;
	    name?: string;
	}
	export var operatorTokens: {
	    'Plus': string;
	    'Minus': string;
	    'Equal': string;
	    'NotEqual': string;
	    'Greater': string;
	    'Less': string;
	    'LessOrEqual': string;
	    'GreaterOrEqual': string;
	};
	export function criteriaForEach(operator: CriteriaOperator, callback: (operator: CriteriaOperator, path?: any) => void, path?: string): void;
	export interface ICriteriaOperatorVisitor {
	    visitGroupOperator?: (element: GroupOperator) => CriteriaOperator;
	    visitOperandProperty?: (element: OperandProperty) => CriteriaOperator;
	    visitConstantValue?: (element: ConstantValue) => CriteriaOperator;
	    visitOperandParameter?: (element: OperandParameter) => CriteriaOperator;
	    visitAggregateOperand?: (element: AggregateOperand) => CriteriaOperator;
	    visitJoinOperand?: (element: JoinOperand) => CriteriaOperator;
	    visitBetweenOperator?: (element: BetweenOperator) => CriteriaOperator;
	    visitInOperator?: (element: InOperator) => CriteriaOperator;
	    visitBinaryOperator?: (element: BinaryOperator) => CriteriaOperator;
	    visitUnaryOperator?: (element: UnaryOperator) => CriteriaOperator;
	    visitFunctionOperator?: (element: FunctionOperator) => CriteriaOperator;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;
	export enum BinaryOperatorType {
	    Equal = 0,
	    NotEqual = 1,
	    Greater = 2,
	    Less = 3,
	    LessOrEqual = 4,
	    GreaterOrEqual = 5,
	    Like = 6,
	    BitwiseAnd = 7,
	    BitwiseOr = 8,
	    BitwiseXor = 9,
	    Divide = 10,
	    Modulo = 11,
	    Multiply = 12,
	    Plus = 13,
	    Minus = 14
	}
	export interface IBinaryOperatorOptions {
	    left: CriteriaOperator;
	    right: CriteriaOperator;
	    operatorType: BinaryOperatorType;
	}
	export class BinaryOperator extends CriteriaOperator {
	    constructor(left: CriteriaOperator, right: CriteriaOperator, operatorType: BinaryOperatorType);
	    readonly leftPart: CriteriaOperator;
	    readonly rightPart: CriteriaOperator;
	    assignLeftPart: (criteriaOperator: any) => void;
	    assignRightPart: (criteriaOperator: any) => void;
	    leftOperand: CriteriaOperator;
	    rightOperand: CriteriaOperator;
	    operatorType: BinaryOperatorType;
	    readonly displayType: any;
	    readonly enumType: typeof BinaryOperatorType;
	    type: string;
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator | BinaryOperator;
	}

}
declare module DevExpress.Analytics.Criteria {
	export function parse(criteria: string): any;
export var criteriaparser: {
    parse: (criteria: string) => any
};
}
declare module DevExpress.Analytics.Criteria {
	export interface _IToken {
	    type: string;
	    val?: string;
	    start: number;
	    end: number;
	}
	export class MachineState {
	    private tokenName;
	    private alphabet;
	    private startTerm;
	    private endTerm;
	    private tokenLength;
	    isActiveState: boolean;
	    tokens: _IToken[];
	    constructor(tokenName: 'comment' | 'field' | 'value', alphabet: string, startTerm: string, endTerm: string);
	    private _isSubline;
	    private _getToken;
	    processTransitionFunction(pos: number): number;
	}
	export class CriteriaOperatorStateMachine {
	    private stringCriteria;
	    private machineStates;
	    private _inputStringCriteria;
	    constructor(stringCriteria: string);
	    _tokenize(): _IToken[];
	    _replaceTokenToAnotherToken(tokens: _IToken[], newTokenChar: string, tokenName: string): string;
	    replaceCommentsToChar(char?: string): CriteriaOperatorStateMachine;
	    getCriteria(): CriteriaOperator;
	}
	export class CriteriaOperator {
	    static operators(enums: any): any;
	    static parse(stringCriteria: string, saveOriginalStringLength?: boolean): CriteriaOperator;
	    static create(operatorType: any): CriteriaOperator;
	    static and(left: CriteriaOperator, right: CriteriaOperator): CriteriaOperator;
	    static or(left: CriteriaOperator, right: CriteriaOperator): CriteriaOperator;
	    static getNotValidRange(value: string, errorMessage: string): {
	        start: number;
	        end: number;
	    };
	    readonly displayType: string;
	    readonly enumType: any;
	    operatorType: any;
	    type: string;
	    operands: any;
	    create: (operatorType: any, field: CriteriaOperator) => CriteriaOperator;
	    remove: (operand: CriteriaOperator) => void;
	    change: (operandType: any, operand: CriteriaOperator, incorrectSpecificsForAggregate: boolean) => CriteriaOperator;
	    changeValueType: (type: any, location: IPropertyLocation) => CriteriaOperator;
	    changeValue: (operand: CriteriaOperator, reverse: boolean, location: IPropertyLocation) => CriteriaOperator;
	    assignLeftPart: (criteriaOperator: any) => any;
	    assignRightPart: (criteriaOperator: any) => any;
	    assignType: (type: any) => void;
	    readonly leftPart: any;
	    readonly rightPart: any;
	    resetrightPart: (value: any) => any;
	    assignFrom(criteriaOperator: any, incorrectSpecificsForAggregate?: boolean, needAssignRightPart?: boolean): void;
	    children(): any[];
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator;
	}
    import IPropertyLocation = DevExpress.Analytics.Criteria.Utils.IPropertyLocation;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;;

}
declare module DevExpress.Analytics.Widgets.Internal {
	export class ValueEditorHelper {
	    private static _getCharFromKeyCode;
	    private static _getCaretPosition;
	    static editors: {
	        'integer': {
	            regExpEditing: RegExp;
	        };
	        'float': {
	            regExpEditing: RegExp;
	        };
	        'System.Byte': {
	            regExpEditing: RegExp;
	            minValue: any;
	            maxValue: string;
	        };
	        'System.SByte': {
	            regExpEditing: RegExp;
	            minValue: string;
	            maxValue: string;
	        };
	        'System.Int16': {
	            regExpEditing: RegExp;
	            minValue: string;
	            maxValue: string;
	        };
	        'System.UInt16': {
	            regExpEditing: RegExp;
	            minValue: any;
	            maxValue: string;
	        };
	        'System.Int32': {
	            regExpEditing: RegExp;
	            minValue: string;
	            maxValue: string;
	        };
	        'System.UInt32': {
	            regExpEditing: RegExp;
	            minValue: any;
	            maxValue: string;
	        };
	        'System.Int64': {
	            regExpEditing: RegExp;
	            minValue: string;
	            maxValue: string;
	        };
	        'System.UInt64': {
	            regExpEditing: RegExp;
	            minValue: any;
	            maxValue: string;
	        };
	        'System.Single': {
	            regExpEditing: RegExp;
	            minValue: string;
	            maxValue: string;
	        };
	        'System.Double': {
	            regExpEditing: RegExp;
	            minValue: string;
	            maxValue: string;
	        };
	        'System.Decimal': {
	            regExpEditing: RegExp;
	            minValue: string;
	            maxValue: string;
	        };
	    };
	    private static _validate;
	    static validateWidgetValue(e: any, validate: (value: string) => boolean, defaultVal: string): void;
	    static getNumberEditorOptions(id: string, specifics: string, extendOptions?: {}): any;
	    static getValueEditorOptions(regExpEditing: RegExp, validate: (value: string) => boolean, defaultVal: string, extendOptions?: {}): any;
	    static isValid(id: string, specifics: string, value: string): boolean;
	    private static _invokeStandardHandler;
	}

}
declare module DevExpress.Analytics.Internal {
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
	export function integerValueConverter(val: any, defaultValue: any, type?: any): any;
	export interface IValidateExpressionOptions {
	    fieldListProvider: IItemsProvider;
	    expression: string;
	    path: string;
	    rootItems?: string[];
	}
	export function validateExpression(options: IValidateExpressionOptions): JQuery.Promise<any, any, any>;
	export function floatValueConverter(val: any, defaultValue: any, type?: any): any;
	export var isDarkTheme: (theme?: string) => boolean;
	export function _setIsDarkTheme(callback: any): void;
	export function setCursorInFunctionParameter(paramCount: any, editor: any, insertValue: any): void;
	export function isList(data: IDataMemberInfo): boolean;
	export function getParentContainer(el: HTMLElement, container?: string): JQuery<HTMLElement>;
	export function isNullOrEmptyString(str: string): boolean;

}
declare module DevExpress.Analytics.Internal {
	export class AjaxSetup {
	    ajaxSettings: JQueryAjaxSettings;
	    sendRequest(settings: JQueryAjaxSettings): JQueryXHR;
	}

}
declare module DevExpress.Analytics.Utils {
    import AjaxSetup = DevExpress.Analytics.Internal.AjaxSetup;;
	export var ajaxSetup: AjaxSetup;

}
declare module DevExpress.Analytics.Internal {
	export interface ISnapLine {
	    position: number;
	    limitInf: number;
	    limSup: number;
	}
	export class SnapLineSurface {
	    private static _blankPosition;
	    private _position;
	    transform(): string;
	    updatePosition(position: {
	        top: number;
	        left: number;
	        width: number;
	        height: number;
	    }): void;
	    reset(): void;
	}

}
declare module DevExpress.Analytics.Internal {

	export function createObservableReverseArrayMapCollection<T>(elementModels: any, target: ko.ObservableArray<T>, createItem: (item: any) => T): any;
	export function createObservableArrayMapCollection<T>(elementModels: any, target: ko.ObservableArray<T>, createItem: (item: any) => T): any;
	export function deserializeChildArray<T>(model: any, parent: any, creator: any): ko.ObservableArray<T>;
	export function getFirstItemByPropertyValue<T>(array: T[], propertyName: string, propertyValue: any, fromIndex?: number): T;
	export function findFirstItemMatchesCondition<T>(array: T[], predicate: (item: T) => boolean): T;
	export var find: typeof findFirstItemMatchesCondition;
	export function binaryIndexOf<T>(ar: T[], el: T, compare: (a: T, b: T) => number): number;

}
declare module DevExpress.Analytics.Internal {

    import ISnapLine = DevExpress.Analytics.Internal.ISnapLine;;
    import IArea = DevExpress.Analytics.Elements.IArea;;
	export class SnapLinesCollector {
	    private _verticalSnapLines;
	    private _horizontalSnapLines;
	    private _snapTargetToIgnore;
	    private _appendSnapLine;
	    private _collectSnaplines;
	    _getCollection(parent: any): {
	        rect: ko.Observable<IArea>;
	    }[];
	    _enumerateCollection(parent: any, parentAbsoluteProsition: {
	        top: number;
	        left: number;
	    }, callback: (item: any, itemAbsoluteRect: {
	        left: number;
	        right: number;
	        top: number;
	        bottom: number;
	    }) => void): void;
	    collectSnaplines(root: any, snapTargetToIgnore: any): {
	        vertical: ISnapLine[];
	        horizontal: ISnapLine[];
	    };
	}

}
declare module DevExpress.Analytics.Internal {

    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import SnapLinesCollector = DevExpress.Analytics.Internal.SnapLinesCollector;;
    import ISnapLine = DevExpress.Analytics.Internal.ISnapLine;
    import SnapLineSurface = DevExpress.Analytics.Internal.SnapLineSurface;;
	export class SnapLinesHelper {
	    static snapTolerance: number;
	    private _snapTolerance;
	    private _surfaceContext;
	    private _snapLinesCollector;
	    private _findClosestSnapLine;
	    _getActiveSnapLines(position1: number, position2: number, snapLines: ISnapLine[]): {
	        lines: any[];
	        distance: number;
	    };
	    constructor(surface?: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, snapTolerance?: number, snapLinesCollector?: SnapLinesCollector);
	    updateSnapLines(snapTargetToIgnore?: any): void;
	    deactivateSnapLines(): void;
	    activateSnapLines(position: {
	        left: number;
	        top: number;
	        right: number;
	        bottom: number;
	    }): {
	        left: number;
	        top: number;
	    };
	    snapPosition(position: number, horizontal: boolean): number;
	    snapLineSurfaces: SnapLineSurface[];
	    verticalSnapLines: ISnapLine[];
	    horizontalSnapLines: ISnapLine[];
	}

}
declare module DevExpress.Analytics.Internal {

    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
	export function findSurface(viewModel: IElementViewModel): ISelectionTarget;
	export function getControlNewAbsolutePositionOnResize(snapHelper: SnapLinesHelper, absolutePosition: {
	    top: number;
	    left: number;
	}, ui: {
	    originalSize: {
	        width: number;
	        height: number;
	    };
	    size: {
	        width: number;
	        height: number;
	    };
	}, delta: {
	    x: number;
	    y: number;
	    width: number;
	    height: number;
	}): {
	    top: number;
	    left: number;
	    bottom: number;
	    right: number;
	};
	export function getControlRect(element: any, control: ISelectionTarget, surface: ISurfaceContext): {
	    top: number;
	    left: number;
	    width: any;
	    height: any;
	};
	export function minHeightWithoutScroll(element: HTMLElement): number;
	export function chooseBetterPositionOf(html: any, designer: any): any;
	export function updateSurfaceContentSize(surfaceSize: ko.Observable<number> | ko.Computed<number>, root: Element, rtl?: boolean): () => void;

}
declare module DevExpress.Analytics.Internal {
	export var NotifyType: {
	    info: string;
	    warning: string;
	    error: string;
	    success: string;
	};
	export function NotifyAboutWarning(msg: any, showForUser?: boolean): void;
	export function getErrorMessage(jqXHR: any): any;
	export var ShowMessage: (msg: string, type?: string, displayTime?: number, debugInfo?: string, contentTemplate?: any) => void;
	export var _setShowMessageFunc: (func: any) => any;
	export var _resetShowMessageFunc: () => (msg: string, type?: string, displayTime?: number, debugInfo?: string, contentTemplate?: any) => void;

}
declare module DevExpress.Analytics.Internal {
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;;
	export var _addErrorPrefix: boolean;
	export function _processError(errorThrown: string, deferred: JQueryDeferred<any>, jqXHR: any, textStatus: any, processErrorCallback?: (message: string, jqXHR: any, textStatus: any) => void): void;
	export var _errorProcessor: {
	    handlers: any[];
	    call: (e: any) => void;
	};
	export function processErrorEvent(func: any): IDisposable;

}
declare module DevExpress.Analytics.Internal {
	export function objectsVisitor(target: any, visitor: (target: any) => any, visited?: any[], skip?: Array<string>): void;
	export function collectionsVisitor(target: any, visitor: (target: any, owner?: any) => any, collectionsToProcess?: string[], visited?: any[]): void;

}
declare module DevExpress.Analytics {
	export const version = "%VERSION%";

}
declare module DevExpress.Analytics.Internal {
	export var dxversions: {
	    analytics: string;
	    devextreme: any;
	};

}
declare module DevExpress.Analytics.Internal {
	/// <reference types="jqueryui" />

    import IAction = DevExpress.Analytics.Utils.IAction;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export type SizeFactorType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
	export function copyObservables(from: any, to: any): void;
	export function _wrapModelInObservable<T>(model: T | ko.Observable<T> | ko.Computed<T>): ko.Observable<T>;
	export interface IGroupedItem<T> {
	    group: string;
	    items: T[];
	}
	export function collectGroupsFromFlatList<T>(list: T[], getGroupId: (item: T) => string): IGroupedItem<T>[];
	export function compareObjects(a: any, b: any): boolean;
	export var cssTransform: string[];
	export var DEBUG: boolean;
	export function getFullPath(path: string, dataMember: string): string;
	export function loadTemplates(): any;
	export function getSizeFactor(width: any): SizeFactorType;
	export var staticContext: {
	    _static: {
	        searchPlaceholder: () => any;
	        selectPlaceholder: () => any;
	        noDataText: () => any;
	        ajaxSetup: DevExpress.Analytics.Internal.AjaxSetup;
	    };
	};
	export var _defaultStaticContext: (newVal?: {}) => {};
	export function appendStaticContextToRootViewModel(root: any, dx?: any, className?: any): void;
	export interface IAjaxSettings {
	    uri: string;
	    action: string;
	    arg: any;
	    processErrorCallback?: (message: string, jqXHR: any, textStatus: any) => void;
	    ignoreError?: () => boolean;
	    customOptions?: any;
	    isError?: (data: any) => boolean;
	    getErrorMessage?: (jqXHR: any) => string;
	}
	export function _ajax(uri: any, action: any, arg: any, processErrorCallback?: (message: string, jqXHR: any, textStatus: any) => void, ignoreError?: () => boolean, customOptions?: any, isError?: (data: any) => boolean, getErrorMessage?: (jqXHR: any) => string): JQuery.Promise<any, any, any>;
	export function _ajaxWithOptions(options: IAjaxSettings): JQuery.Promise<any, any, any>;
	export var ajax: (...params: any[]) => any;
	export function setAjax(newFunc: any): void;
	export interface ICommonCustomizationHandler {
	    customizeActions?: (actions: IAction[]) => void;
	    customizeLocalization?: (callbacks?: JQueryPromise<any>[]) => void;
	    onServerError?: (e: any) => void;
	    beforeRender?: (designerModel: any) => void;
	}
	export interface ICommonBindingCustomizationHandler<T> {
	    _eventSenderCreated?: (sender: T) => void;
	}
	export interface INamedValue {
	    displayName: string;
	    value: any;
	}
	export function cutRefs(model: any): any;
	export interface IDesignerPart {
	    id: string;
	    templateName: string;
	    model: any;
	}
	export var DesignerBaseElements: {
	    MenuButton: string;
	    Toolbar: string;
	    Toolbox: string;
	    GroupedToolbox: string;
	    Surface: string;
	    RightPanel: string;
	};
	export function generateDefaultParts(model: any): IDesignerPart[];
	export function createActionWrappingFunction(wrapperName: string, func: (model: any, originalHandler: (model?: any) => any) => any): (actions: IAction<any>[]) => void;
	export function localizeNoneString(noneValue: any): any;
	export function parseZoom(val: string): number;
	export function getResizableOptions($element: Element, panelOffset: number, minWidth: number, position: string, startPosition: string, width?: ko.MaybeSubscribable<number>, disabled?: ko.MaybeSubscribable<boolean>): JQueryUI.ResizableOptions | any;
	export function createPasswordSerializationInfo(info: ISerializationInfo, isNew?: boolean): ISerializationInfo;

}
declare module DevExpress.Analytics.Internal {
	export function getTypeNameFromFullName(controlType: string): string;
	export function getShortTypeName(controlType: string): string;
	export function getControlTypeName(value: any): any;
	export function getControlFullName(value: any): string;
	export function getImageClassName(controlType: string, isTemplate?: boolean): string;
	export function getUniqueNameForNamedObjectsArray(objects: any[], prefix: string, names?: string[]): string;
	export function getUniqueName(names: string[], prefix: string): string;

}
declare module DevExpress.Analytics.Utils {
    import IElementMetadata = DevExpress.Analytics.Elements.IElementMetadata;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class ControlsFactory {
	    getControlInfo(controlType: string): IElementMetadata;
	    getControlType(model: any): string;
	    createControl(model: any, parent: ElementViewModel, serializer?: IModelSerializer): IElementViewModel;
	    controlsMap: {
	        [key: string]: IElementMetadata;
	    };
	    registerControl(typeName: string, metadata: IElementMetadata): void;
	    _getPropertyInfo(info: ISerializationInfoArray, path: string[], position: number): any;
	    getPropertyInfo(controlType: string, path: any): any;
	}

}
declare module DevExpress.Analytics.Elements {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;
    import IModelActionProvider = DevExpress.Analytics.Internal.IModelActionProvider;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;
	export interface IElementMetadata {
	    info: ISerializationInfoArray;
	    surfaceType: any;
	    type?: any;
	    nonToolboxItem?: boolean;
	    isToolboxItem?: boolean;
	    toolboxIndex?: number;
	    defaultVal?: {};
	    group?: string;
	    size?: string;
	    isContainer?: boolean;
	    isCopyDeny?: boolean;
	    isPasteDeny?: boolean;
	    isDeleteDeny?: boolean;
	    popularProperties?: string[];
	    canDrop?: (dropTarget: ISelectionTarget, dragFrom?: ElementViewModel) => boolean;
	    elementActionsTypes?: any;
	    parentType?: string;
	    displayName?: string;
	}
	export interface IElementViewModel {
	    controlType: string;
	    name: ko.Observable<string> | ko.Computed<string>;
	    parentModel: ko.Observable<IElementViewModel>;
	    addChild: (element: IElementViewModel) => void;
	    addChilds: (array: IElementViewModel[]) => void;
	    removeChild: (element: IElementViewModel) => void;
	    removeChilds: (array: IElementViewModel[]) => void;
	    getNearestParent: (dropTarget: IElementViewModel) => IElementViewModel;
	}
	export interface IControlPropertiesViewModel {
	    isPropertyDisabled: (name: string) => boolean;
	    isPropertyVisible: (name: string) => boolean;
	    isPropertyModified: (name: string) => boolean;
	    controlType?: string;
	    actions: IModelAction[];
	    actionProviders?: IModelActionProvider[];
	}
	export class ElementViewModel extends Disposable implements IElementViewModel, IControlPropertiesViewModel {
	    protected _resetProperty(propertyName: string): void;
	    getPropertyDefaultValue(propertyName: string): any;
	    getPropertyInfo(propertyName: string): ISerializationInfo;
	    getInfo(): ISerializationInfoArray;
	    createControl(model: any, serializer?: IModelSerializer): IElementViewModel;
	    dispose(): void;
	    preInitProperties(model: any, parent: ElementViewModel, serializer?: IModelSerializer): void;
	    constructor(model: any, parent: ElementViewModel, serializer?: IModelSerializer);
	    getNearestParent(target: IElementViewModel): any;
	    getControlInfo(): IElementMetadata;
	    getMetaData(): {
	        isContainer: boolean;
	        isCopyDeny: boolean;
	        isDeleteDeny: boolean;
	        canDrop: (dropTarget: ISelectionTarget, dragFrom?: ElementViewModel) => boolean;
	        isPasteDeny: boolean;
	    };
	    _hasModifiedValue(name: any): any;
	    name: ko.Observable<string> | ko.Computed<string>;
	    controlType: string;
	    createChild(info: {}): ElementViewModel;
	    removeChilds(controls: ElementViewModel[]): void;
	    addChilds(controls: ElementViewModel[]): void;
	    removeChild(control: ElementViewModel): void;
	    addChild(control: IElementViewModel): void;
	    isPropertyVisible(name: string): boolean;
	    isPropertyDisabled(name: string): boolean;
	    isPropertyModified(name: string): any;
	    getControlFactory(): ControlsFactory;
	    resetValue: (propertyName: string) => void;
	    isResettableProperty(propertyName: string): boolean;
	    surface: any;
	    parentModel: ko.Observable<ElementViewModel>;
	    readonly root: ElementViewModel;
	    rtl(): boolean;
	    onDelete(): void;
	    actions: IModelAction[];
	    actionProviders: any[];
	    update: ko.Observable<boolean>;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
	export var extendedTemplates: (templates?: {
	    [key: string]: string;
	}) => {
	    [key: string]: string;
	};

}
declare module DevExpress.Analytics.Widgets.Internal {
	export {};

}
declare module DevExpress.Analytics.Widgets.Internal {
	export class SvgTemplatesEngine {
	    private static _instance;
	    private _data;
	    private _templates;
	    private _hasTemplate;
	    constructor();
	    private static readonly Instance;
	    static readonly templates: {
	        [key: string]: string;
	    };
	    static addTemplate(templateName: string, templateMarkup: string): void;
	    static addTemplates(templates: any): void;
	    static getExistingTemplate(name: any, findEverywhere?: boolean): any;
	}


}
declare module DevExpress.Analytics.Utils {

	export interface IToolboxItemInfo {
	    '@ControlType': string;
	    index: number;
	    canDrop?: any;
	    group?: string;
	    displayName?: string;
	}
	export class ToolboxItem {
	    constructor(info: IToolboxItemInfo);
	    disabled: ko.Observable<boolean>;
	    info: IToolboxItemInfo;
	    readonly type: string;
	    readonly imageClassName: string;
	    readonly imageTemplateName: any;
	    readonly index: number;
	    readonly displayName: string;
	}

}
declare module DevExpress.Analytics.Internal {
    import IElementMetadata = DevExpress.Analytics.Elements.IElementMetadata;;
    import ToolboxItem = DevExpress.Analytics.Utils.ToolboxItem;;
	export function getToolboxItems(controlsMap: {
	    [key: string]: IElementMetadata;
	}, defaultGroup?: string): ToolboxItem[];
	export function blur(element: Element): void;

}
declare module DevExpress.Analytics.Widgets {
	export function addTemplate(templateName: string, templateMarkup: string): void;
	export function getTemplate(id: string): string;

}
declare module DevExpress.Analytics.Widgets.Internal {

    import ITreeListSearchOptions = DevExpress.Analytics.Widgets.Internal.ITreeListSearchOptions;
    import TreeListRootItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListRootItemViewModel;;
    import SearchMode = DevExpress.Analytics.Internal.SearchMode;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ITreeListController = DevExpress.Analytics.Widgets.Internal.ITreeListController;;
	export class TreeListSearchOptions implements ITreeListSearchOptions {
	    globalMatch: boolean;
	    canUseRegex: boolean;
	    caseSensitive: boolean;
	    searchMode: SearchMode;
	    searchTimeout: number;
	    searchExpr: string;
	    searchBoxTemplate: string;
	}
	export class TreeListSearchViewModel extends Disposable {
	    static createController(element: any, controllers: ITreeListController[], modelType?: typeof TreeListSearchViewModel, templateName?: string): void;
	    private _processedNodes;
	    private _currentProcess;
	    dispose(): void;
	    clearProcess(): void;
	    valueChanged(newValue: string): void;
	    private _collapseTreeBranch;
	    addController(root: TreeListRootItemViewModel): void;
	    constructor();
	    searchTimeout: number;
	    value: ko.Computed;
	    _roots: TreeListRootItemViewModel[];
	    searchPlaceholder: () => any;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {

    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import TreeListRootItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListRootItemViewModel;;
    import TreeListSearchOptions = DevExpress.Analytics.Widgets.Internal.TreeListSearchOptions;;
	export interface ITreeListController {
	    itemsFilter: (item: IDataMemberInfo, path?: string) => boolean;
	    hasItems: (item: IDataMemberInfo) => boolean;
	    canSelect: (value: TreeListItemViewModel) => boolean;
	    select: (value: TreeListItemViewModel) => void;
	    canMultiSelect?: (value: TreeListItemViewModel) => boolean;
	    multiSelect?: (value: TreeListItemViewModel, isShiftPressed: boolean, isCtrlPressed: boolean) => void;
	    getActions?: (item: TreeListItemViewModel) => IAction[];
	    isDraggable?: (item: TreeListItemViewModel) => boolean;
	    dblClickHandler?: (item: TreeListItemViewModel) => void;
	    clickHandler?: (item: TreeListItemViewModel) => void;
	    dragDropHandler?: any;
	    root?: ko.Observable<TreeListRootItemViewModel>;
	    selectedItems?: () => TreeListItemViewModel[];
	    showIconsForChildItems?: (item?: TreeListItemViewModel) => boolean;
	    textToSearch?: ko.Observable<string> | ko.Computed<string>;
	    searchEnabled?: boolean;
	    searchOptions?: TreeListSearchOptions;
	    dispose?: () => void;
	}
	export class TreeListController implements ITreeListController {
	    dispose(): void;
	    itemsFilter(item: IDataMemberInfo): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	    canSelect(value: TreeListItemViewModel): boolean;
	    select(value: TreeListItemViewModel): void;
	    selectedItem: any;
	}

}
declare module DevExpress.Analytics.Internal {
	export function propertiesVisitor(target: any, visitor: (properties: any[]) => any, visited?: any[], skip?: Array<string>): void;
	export function checkModelReady(model: any): boolean;
	export function guid(): string;

}
declare module DevExpress.Analytics.Internal {
	export interface ICodeResolverTask {
	    $promise: JQueryPromise<any>;
	    dispose: () => void;
	    doNext: () => void;
	    force: () => void;
	}
	export class CodeResolver {
	    private _queue;
	    private _queueObj;
	    private _done;
	    private _doneOnce;
	    clear(): void;
	    done(callback: any): void;
	    doneOnce(callback: any): void;
	    private _executeNext;
	    execute(func: any, time?: number): ICodeResolverTask;
	}
	export var globalResolver: CodeResolver;

}
declare module DevExpress.Analytics.Widgets.TreeList {
	export var LoadChildItemsForCollapsedNodes: (newVal?: boolean) => boolean;

}
declare module DevExpress.Analytics.Widgets.Internal {

    import IAction = DevExpress.Analytics.Utils.IAction;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import ISearchOptions = DevExpress.Analytics.Internal.ISearchOptions;;
    import ITreeListController = DevExpress.Analytics.Widgets.Internal.ITreeListController;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import CodeResolver = DevExpress.Analytics.Internal.CodeResolver;;
	export var maxSearchLevel: (newVal?: number) => number;
	export var treeListEditAction: IAction;
	export interface ITreeListSearchOptions extends ISearchOptions {
	    searchTimeout?: number;
	    searchExpr?: string;
	    searchBoxTemplate?: string;
	}
	export class DefaultTreeListItemFactory {
	    createRootItem(options: ITreeListOptions, path?: string[], onItemsVisibilityChanged?: any, rtl?: any): TreeListRootItemViewModel;
	    createItem(options: ITreeListOptions, path?: string[], onItemsVisibilityChanged?: any, rtl?: any, resolver?: any): TreeListItemViewModel;
	}
	export interface ITreeListItemFactory {
	    createRootItem: (options: ITreeListOptions, path?: string[], onItemsVisibilityChanged?: any, rtl?: any) => TreeListRootItemViewModel;
	    createItem: (options: ITreeListOptions, path?: string[], onItemsVisibilityChanged?: any, rtl?: any, resolver?: any) => TreeListItemViewModel;
	}
	export interface ITreeListOptions {
	    itemsProvider: IItemsProvider;
	    selectedPath: ko.Observable<string> | ko.Computed<string>;
	    treeListController: ITreeListController;
	    templateName?: string;
	    rtl?: boolean;
	    path?: ko.Observable<string> | ko.Observable<string[]>;
	    onItemsVisibilityChanged?: () => void;
	    expandRootItems?: boolean;
	    pageSize?: number;
	    templateHtml?: string;
	    factory?: ITreeListItemFactory;
	}
	export class TreeListEllipsisButton {
	    private _availableItemsCount;
	    private padding;
	    private pageSize;
	    constructor(_availableItemsCount: ko.Observable<number>, padding: any, pageSize: number);
	    templateName: string;
	    collapsed: () => boolean;
	    visibleItems: () => any[];
	    text: () => any;
	    renderNext(): void;
	}
	export class TreeListItemViewModel extends Disposable {
	    protected resolver: CodeResolver;
	    private _rtl;
	    private _factory;
	    private _data;
	    private _actions;
	    private _isVisible;
	    private _pageSize;
	    private _actionsSubscription;
	    private _templateName;
	    private _equal;
	    private _treeListController;
	    private _loader;
	    private _iconName;
	    private _getImageClassName;
	    private _getImageTemplateName;
	    private _getNodeImageClassName;
	    private _createItemsObj;
	    private _loadItems;
	    private _nodeIsLocked;
	    protected _onItemsChanged(): void;
	    protected _getTemplateName(): string;
	    _selectItem(itemPath: string): void;
	    _find(itemPath: string): void;
	    _getItemsWithLock(): JQueryPromise<TreeListItemViewModel[]>;
	    private _applyPadding;
	    private _initPaginate;
	    constructor(options: ITreeListOptions, path?: string[], onItemsVisibilityChanged?: () => undefined, rtl?: boolean, resolver?: CodeResolver);
	    dragDropHandler: any;
	    dblClickHandler: any;
	    _path: string[];
	    _onItemsVisibilityChanged: () => void;
	    level: number;
	    parent: TreeListItemViewModel;
	    padding: {};
	    items: ko.ObservableArray<TreeListItemViewModel>;
	    maxItemsCount: ko.Observable<number>;
	    visibleItems: ko.Computed<any[]>;
	    collapsed: ko.Observable<boolean>;
	    nodeImageClass: ko.Computed<string>;
	    imageClassName: ko.Computed<string>;
	    showIcon: boolean;
	    imageTemplateName: ko.Computed<string>;
	    readonly hasItems: boolean;
	    data: IDataMemberInfo;
	    readonly name: string;
	    readonly path: string;
	    readonly pathParts: string[];
	    readonly text: string;
	    readonly templateName: string;
	    actionsTemplate(): any;
	    treeListEditAction(): IAction<any>;
	    readonly hasContent: boolean;
	    readonly actions: IAction[];
	    readonly isDraggable: boolean;
	    readonly treeListController: ITreeListController;
	    toggleCollapsed: () => void;
	    toggleSelected: any;
	    isSelected: ko.Observable<boolean>;
	    isHovered: ko.Observable<boolean>;
	    isMultiSelected: ko.Observable<boolean>;
	    getItems: () => JQueryPromise<TreeListItemViewModel[]>;
	    dispose(): void;
	    readonly visible: boolean;
	    setVisible(value: boolean): void;
	    mouseenter(): void;
	    mouseleave(): void;
	    selectedItems(): TreeListItemViewModel[];
	}
	export class TreeListRootItemViewModel extends TreeListItemViewModel {
	    private _options;
	    private _resolver;
	    dispose(): void;
	    walkOnTree(walkCallBack: (item: TreeListItemViewModel) => void): {
	        stop: () => void;
	    };
	    private _visitNextNode;
	    private _selectedPathSubscription;
	    constructor(_options: ITreeListOptions, path?: string[], onItemsVisibilityChanged?: () => undefined, rtl?: boolean);
	    _onItemsChanged(): void;
	}

}
declare module DevExpress.Analytics.Internal {

    import IArea = DevExpress.Analytics.Elements.IArea;;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export interface ISelectingEvent {
	    control: ISelectionTarget;
	    cancel: boolean;
	    ctrlKey?: boolean;
	}
	export interface ISelectionTarget {
	    rect: ko.Observable<IArea> | ko.Computed<IArea>;
	    focused: ko.Observable<boolean> | ko.Computed<boolean>;
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    underCursor: ko.Observable<IHoverInfo> | ko.Computed<IHoverInfo>;
	    allowMultiselect: boolean;
	    locked: boolean;
	    canDrop: () => boolean;
	    getControlModel: () => ElementViewModel;
	    checkParent: (surfaceParent: ISelectionTarget) => boolean;
	    parent: ISelectionTarget;
	    getChildrenCollection: () => ko.ObservableArray<ISelectionTarget>;
	    dragCallback?: (item: TreeListItemViewModel) => void;
	    dropCallback?: (item: TreeListItemViewModel) => void;
	    findNextSelection?: () => ISelectionTarget;
	}
	export interface ISelectionProvider extends IDisposable {
	    focused: ko.Observable<ISelectionTarget> | ko.Computed<ISelectionTarget>;
	    selectedItems: ISelectionTarget[];
	    initialize(surface?: ISelectionTarget): any;
	    selecting(event: ISelectingEvent): any;
	    unselecting(surface: ISelectionTarget): any;
	    swapFocusedItem(surface: ISelectionTarget): any;
	    ignoreMultiSelectProperties?: string[];
	    selectionWithCtrl(surface?: ISelectionTarget): any;
	    applySelection(): any;
	}
	export class SurfaceSelection extends Disposable implements ISelectionProvider {
	    ignoreMultiSelectProperties: string[];
	    dispose(): void;
	    private _focused;
	    private _firstSelected;
	    private _selectedControls;
	    private _selectedControlsInner;
	    private _removeFromSelection;
	    private _setFocused;
	    private _resetTabPanelFocus;
	    constructor(ignoreMultiSelectProperties?: string[]);
	    focused: ko.PureComputed<ISelectionTarget>;
	    readonly selectedItems: ISelectionTarget[];
	    clear(): void;
	    reset(): void;
	    applySelection(): void;
	    selectItems(items: any): void;
	    updateSelection(control: ISelectionTarget): void;
	    swapFocusedItem(control: ISelectionTarget): void;
	    initialize(control?: ISelectionTarget): void;
	    clickHandler(control?: ISelectionTarget, event?: {
	        ctrlKey: boolean;
	        metaKey: boolean;
	    }): void;
	    selecting(event: ISelectingEvent): void;
	    unselecting(control: ISelectionTarget): void;
	    selectionWithCtrl(control: ISelectionTarget): void;
	    dropTarget: ISelectionTarget;
	    expectClick: boolean;
	    disabled: ko.Observable<boolean>;
	}

}
declare module DevExpress.Analytics.Internal {

	export function roundingXDecimals(value: number, useFloor?: boolean, x?: number): number;
	export function unitsToPixel(val: number, measureUnit: string, zoom?: number): number;
	export function pixelToUnits(val: number, measureUnit: string, zoom: number): number;
	export interface IUnitProperties<M> {
	    [key: string]: (o: M) => ko.Observable<number> | ko.Computed<number>;
	}
	export function createUnitProperty(model: any, target: any, propertyName: any, property: any, measureUnit: ko.Observable<string> | ko.Computed<string>, zoom: ko.Observable<number> | ko.Computed<number>, afterCreation?: (property: any) => void): void;
	export function createUnitProperties<M>(model: M, target: any, properties: IUnitProperties<M>, measureUnit: ko.Observable<string> | ko.Computed<string>, zoom: ko.Observable<number> | ko.Computed<number>, afterCreation?: (property: any) => void): void;

}
declare module DevExpress.Analytics.Elements {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class PaddingModel extends Disposable {
	    left: ko.Observable<number> | ko.Computed<number>;
	    right: ko.Observable<number> | ko.Computed<number>;
	    top: ko.Observable<number> | ko.Computed<number>;
	    bottom: ko.Observable<number> | ko.Computed<number>;
	    dpi: ko.Observable<number> | ko.Computed<number>;
	    static defaultVal: string;
	    static unitProperties: string[];
	    getInfo(): ISerializationInfoArray;
	    resetValue(): void;
	    isEmpty(): boolean;
	    applyFromString(value: string): this;
	    static from(val: any): PaddingModel;
	    toString(): string;
	    _toString(inner?: boolean): string;
	    constructor(left?: ko.Observable<number> | ko.Computed<number>, right?: ko.Observable<number> | ko.Computed<number>, top?: ko.Observable<number> | ko.Computed<number>, bottom?: ko.Observable<number> | ko.Computed<number>, dpi?: ko.Observable<number> | ko.Computed<number>);
	    all: ko.Computed<number>;
	}

}
declare module DevExpress.Analytics.Internal {

    import PaddingModel = DevExpress.Analytics.Elements.PaddingModel;;
	export interface IStyleContainer {
	    rtl: () => boolean | undefined;
	}
	export function patchPositionByRTL(position: string, rtl: boolean): string;
	export class CssCalculator {
	    private _rtlLayout;
	    static DEFAULT_BORDER: string;
	    private _control;
	    private _getPixelValueFromUnit;
	    private _patchPosition;
	    private _getBorderWidth;
	    createBorder(dashStyle: any, width: any, color: any, positions: any, position: any): {};
	    createControlBorder(borderStyle: any, width: any, color: any, positions: any, position: any, defaultColor?: string): {};
	    createBorders(borderStyle: any, width: any, color: any, positions: any, defaultColor?: string): any;
	    createZipCodeFont(height: any): {};
	    createFont(fontString: any): {};
	    createVerticalAlignment(alignment: string): {};
	    createHorizontalAlignment(alignment: string): {};
	    createStrokeDashArray(style: any, width: any): string;
	    createWordWrap(wordwrap: boolean, multiline: boolean): {};
	    createAngle(angle: any): {
	        '-webkit-transform': string;
	        '-moz-transform': string;
	        '-o-transform': string;
	        '-ms-transform': string;
	        'transform': string;
	    };
	    constructor(control: IStyleContainer, _rtlLayout: ko.Observable<boolean> | ko.Computed<boolean>);
	    borderCss: any;
	    fontCss: any;
	    zipCodeFontCss: any;
	    textAlignmentCss: any;
	    foreColorCss: any;
	    paddingsCss: any;
	    backGroundCss: any;
	    stroke: any;
	    strokeWidth: any;
	    strokeWidthWithWidth: any;
	    strokeDashArray: any;
	    strokeDashArrayWithWidth: any;
	    crossBandBorder: any;
	    angle: any;
	    wordWrapCss: any;
	    cellBorder: any;
	    zipCodeAlignment: any;
	    contentSizeCss(controlSurfaceWidth: number, controlSurfaceHeight: number, zoom?: number, borders?: string, paddings?: PaddingModel): {
	        top: number;
	        left: number;
	        right: number;
	        bottom: number;
	        width: number;
	        height: number;
	    };
	}

}
declare module DevExpress.Analytics.Internal {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var sizeFake: ISerializationInfoArray;
	export var locationFake: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Elements {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export interface IPoint {
	    x: ko.Observable<number> | ko.Computed<number>;
	    y: ko.Observable<number> | ko.Computed<number>;
	}
	export class Point implements IPoint {
	    static unitProperties: string[];
	    constructor(x: any, y: number);
	    getInfo(): ISerializationInfoArray;
	    static fromString(value?: string): Point;
	    toString(): string;
	    x: ko.Observable<number> | ko.Computed<number>;
	    y: ko.Observable<number> | ko.Computed<number>;
	}

}
declare module DevExpress.Analytics.Elements {

    import IMargins = DevExpress.Analytics.Elements.IMargins;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
    import CssCalculator = DevExpress.Analytics.Internal.CssCalculator;;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;;
    import Point = DevExpress.Analytics.Elements.Point;;
	export interface IArea {
	    top?: number;
	    left?: number;
	    right?: number;
	    bottom?: number;
	    width?: number;
	    height?: number;
	}
	export interface ISurfaceContext {
	    measureUnit: ko.Observable<string> | ko.Computed<string>;
	    pageWidth?: ko.Observable<number> | ko.Computed<number>;
	    pageHeight?: ko.Observable<number> | ko.Computed<number>;
	    snapGridSize?: ko.Observable<number> | ko.Computed<number>;
	    margins?: IMargins;
	    zoom?: ko.Observable<number> | ko.Computed<number>;
	    dpi?: ko.Observable<number> | ko.Computed<number>;
	    isFit?: (dropTarget: ISelectionTarget) => boolean;
	    rtl?: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class SurfaceElementArea<M extends ElementViewModel> extends Disposable {
	    _control: M;
	    _width: ko.Observable<number> | ko.Computed<number>;
	    _height: ko.Observable<number> | ko.Computed<number>;
	    _x: ko.Observable<number> | ko.Computed<number>;
	    _y: ko.Observable<number> | ko.Computed<number>;
	    _context: ISurfaceContext;
	    _createSurface: (item: ElementViewModel) => any;
	    private _container;
	    private _getX;
	    private _setX;
	    getRoot(): ISurfaceContext;
	    preInitProperties(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>): void;
	    constructor(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>);
	    rect: ko.Observable<IArea> | ko.Computed<IArea>;
	    container(): SurfaceElementArea<ElementViewModel>;
	    beforeRectUpdated(rect: any): any;
	    rtlLayout(): boolean;
	    getControlModel(): M;
	}
	export class SurfaceElementBase<M extends ElementViewModel> extends SurfaceElementArea<M> implements ISelectionTarget {
	    private _countSelectedChildren;
	    context: ISurfaceContext;
	    constructor(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>);
	    focused: ko.Observable<boolean> | ko.Computed<boolean>;
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    isSelected: ko.Observable<boolean> | ko.Computed<boolean>;
	    cssCalculator: CssCalculator;
	    underCursor: ko.Observable<IHoverInfo> | ko.Computed<IHoverInfo>;
	    readonly parent: any;
	    checkParent(surfaceParent: ISelectionTarget): boolean;
	    allowMultiselect: boolean;
	    css: ko.Observable<any> | ko.Computed<any>;
	    contentCss: ko.Observable<any> | ko.Computed<any>;
	    _getChildrenHolderName(): string;
	    getChildrenCollection(): ko.ObservableArray<any>;
	    absolutePosition: Point;
	    updateAbsolutePosition(): void;
	    canDrop(): boolean;
	    afterUpdateAbsolutePosition(): void;
	    findNextSelection(): ISelectionTarget;
	    absoluteRect: ko.Computed<IArea>;
	    getUsefulRect: () => IArea;
	    locked: boolean;
	}

}
declare module DevExpress.Analytics.Elements {

	export class Rectangle {
	    constructor(left?: number, top?: number, width?: number, height?: number);
	    left: ko.Observable<number>;
	    top: ko.Observable<number>;
	    width: ko.Observable<number>;
	    height: ko.Observable<number>;
	    className: string;
	}

}
declare module DevExpress.Analytics.Internal {

    import Rectangle = DevExpress.Analytics.Elements.Rectangle;;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;;
	export class DragHelperControlRectangle extends Rectangle {
	    position: number;
	    constructor(position: number, left?: number, top?: number, width?: number, height?: number);
	}
	export class DragHelperContent extends Rectangle {
	    private _selectionProvider;
	    private readonly _isEmpty;
	    constructor(selectionProvider: ISelectionProvider);
	    reset(): void;
	    controls: ko.ObservableArray<Rectangle | DragHelperControlRectangle>;
	    customData: ko.Observable<{}>;
	    template: string;
	    update(surface: SurfaceElementBase<any>): void;
	    setContent(area: Rectangle, customData?: {
	        template: string;
	        data?: any;
	    }): void;
	    isLocked: ko.Observable<boolean>;
	}

}
declare module DevExpress.Analytics.Elements {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export interface ISize {
	    width: ko.Observable<number> | ko.Computed<number>;
	    height: ko.Observable<number> | ko.Computed<number>;
	    isPropertyDisabled: (name: string) => void;
	}
	export class Size implements ISize {
	    static unitProperties: string[];
	    constructor(width: any, height: number);
	    getInfo(): ISerializationInfoArray;
	    static fromString(value?: string): Size;
	    toString(): string;
	    isPropertyDisabled: (name: string) => any;
	    isPropertyVisible: (name: string) => boolean;
	    width: ko.Observable<number> | ko.Computed<number>;
	    height: ko.Observable<number> | ko.Computed<number>;
	}

}
declare module DevExpress.Analytics.Utils {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class _LatestChangeSet {
	    changes: any;
	    position: number;
	    static Empty(): _LatestChangeSet;
	    constructor(changes: any, position: number);
	    equal(changeSet: _LatestChangeSet): boolean;
	}
	export interface IModelReady {
	    isModelReady: ko.Computed<boolean>;
	}
	export class UndoEngine extends Disposable {
	    private _ignoredProperties;
	    private _getInfoMethodName?;
	    private _alwaysSubscribeProperties;
	    static _disposeUndoEngineSubscriptionsName: string;
	    static tryGetUndoEngine(object: any): UndoEngine;
	    private _groupObservers;
	    private _groupPosition;
	    private _observers;
	    private _subscriptions;
	    private _targetSubscription;
	    private _visited;
	    private _position;
	    private _lockedPosition;
	    private _inUndoRedo;
	    private _model;
	    private readonly _modelReady;
	    private _disposeObserver;
	    private properyChanged;
	    private _currentEngineName;
	    private visitProperties;
	    private undoChangeSet;
	    private redoChangeSet;
	    private _disposeChilds;
	    private _createDisposeFunction;
	    private _callDisposeFunction;
	    private _cleanSubscribtions;
	    protected validatePropertyName(target: any, propertyName: string): string;
	    subscribeProperty(property: any, subscribeChilds: any): ko.Subscription;
	    subscribeProperties(properties: any): void;
	    subscribe(target: any, info?: any): any[];
	    getCurrentChangeSet(): _LatestChangeSet;
	    private _removePropertiesSubscriptions;
	    constructor(target: any, _ignoredProperties?: string[], _getInfoMethodName?: string, _alwaysSubscribeProperties?: any[]);
	    redoEnabled: ko.Observable<boolean>;
	    undoEnabled: ko.Observable<boolean>;
	    dispose(): void;
	    removeTargetSubscription(): void;
	    undoAll(): void;
	    reset(): void;
	    clearHistory(): void;
	    undo(removeNode?: boolean): void;
	    redo(): void;
	    _hasSessionChanges(): boolean;
	    isIngroup: number;
	    isDirty: ko.Computed<boolean>;
	    start(): void;
	    end(): void;
	}

}
declare module DevExpress.Analytics.Internal {





    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
    import Size = DevExpress.Analytics.Elements.Size;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
	export class DragDropHandler extends Disposable {
	    dispose(): void;
	    static started: ko.Observable<boolean>;
	    protected getTarget(event: JQueryEventObject): HTMLElement;
	    surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>;
	    selection: SurfaceSelection;
	    snapHelper: SnapLinesHelper;
	    dragHelperContent: DragHelperContent;
	    _size: Size;
	    _getAbsoluteSurfacePosition(ui: any): {
	        left: number;
	        top: number;
	    };
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper?: SnapLinesHelper, dragHelperContent?: DragHelperContent);
	    addControl(control: any, dropTargetSurface: any, size: any): void;
	    recalculateSize(size: any): void;
	    helper(draggable: any, event?: any): void;
	    canDrop(dropTarget: any, controlModel: any, metaData: any): boolean;
	    startDrag(draggable: any): void;
	    drag(event: JQueryEventObject, ui: any): void;
	    stopDrag: (ui: any, draggable: any, event?: any) => void;
	    doStopDrag(ui: any, draggable: any, event?: any): void;
	    parent: () => JQuery<any>;
	    cursor: string;
	    containment: string;
	    alwaysAlt: boolean;
	}

}
declare module DevExpress.Analytics.Internal {

    import IAction = DevExpress.Analytics.Utils.IAction;;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IKeyboardCodesEnum = DevExpress.Analytics.Internal.IKeyboardCodesEnum;;
	export interface IShortcutActionList {
	    processShortcut: (actions: IAction[], e: JQueryKeyEventObject) => void;
	    toolbarItems: IAction[] | ko.Observable<IAction[]> | ko.Computed<IAction[]>;
	    enabled?: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class KeyboardHelperBase extends Disposable {
	    private _processShortcut;
	    processShortcut(e: JQueryKeyEventObject, index?: number): boolean;
	    processChildrenShortcut(e: JQueryKeyEventObject, index?: number): boolean;
	    shortcutMap: IKeyboardCodesEnum;
	    childrenShortcutMap: IKeyboardCodesEnum;
	}
	export class KeyboardHelper extends KeyboardHelperBase {
	    private _selection;
	    private _undoEngine;
	    constructor(selection: ISelectionProvider, undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>);
	    processEsc(): void;
	    moveSelectedControls(leftUp: boolean, isHoriz: boolean, sign: number): void;
	}
	export class KeyDownHandlersManager {
	    private _handlers;
	    private _targetElement;
	    private readonly _activeHandler;
	    private _removeHandler;
	    constructor(targetElement: HTMLElement | Window);
	    bindHandler(element: Element, handler: (e: JQueryKeyEventObject) => void, eventName?: string): void;
	}

}
declare module DevExpress.Analytics.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class AccessibilityControlElementBase extends Disposable {
	    element: HTMLElement;
	    private _eventListeners;
	    dispose(): void;
	    constructor(element: HTMLElement);
	    addListener(element: HTMLElement, eventType: string, handler: any): void;
	    setTabIndex(index: string): void;
	    setFocus(): void;
	}

}
declare module DevExpress.Analytics.Internal {
    import KeyboardHelperBase = DevExpress.Analytics.Internal.KeyboardHelperBase;;
    import AccessibilityControlElementBase = DevExpress.Analytics.Internal.AccessibilityControlElementBase;;
	export interface IAccessibilityLiveRegion {
	    element: HTMLElement;
	    changeText: (text: string, timeout?: number) => number;
	}
	export class AccessibilityKeyboardHelperBase extends KeyboardHelperBase {
	    childrenInitialized: boolean;
	    accessibilityCompliantEnabled: boolean;
	    focusFirstFocusableDescendant: boolean;
	    controlElementClassName: string;
	    controlElements: AccessibilityControlElementBase[];
	    startIndex: number;
	    liveRegionId: string;
	    private _prevActiveElement;
	    private _eventListeners;
	    private _elementContainer;
	    private _liveRegion;
	    private _disposeItems;
	    constructor();
	    initialize(): void;
	    getIndexByElement(htmlElement: any): number;
	    createControlElement(element: HTMLElement, index?: number): AccessibilityControlElementBase;
	    setTabIndexes: (index: any) => void;
	    getContainer(): HTMLElement;
	    changeFocus(index: number, roundTrip?: boolean): number;
	    bindHandler(elementContainer: HTMLElement): void;
	    handleEscKey(e: any, index?: any): boolean;
	    handleTabKey(e: any): boolean;
	    handleShiftTabKey(e: any): boolean;
	    handleEnterKey(e: any): boolean;
	    handleSpaceKey(e: any): boolean;
	    handleEndKey(e: any): boolean;
	    handleHomeKey(e: any): boolean;
	    handleUpArrowKey(e: any): boolean;
	    handleDownArrowKey(e: any): boolean;
	    handleLeftArrowKey(e: any): boolean;
	    handleRightArrowKey(e: any): boolean;
	    itemHandleHomeKey(e: any, index?: any): boolean;
	    itemHandleEndKey(e: any, index?: any): boolean;
	    itemHandleLeftArrowKey(e: any, index?: any): boolean;
	    itemHandleRightArrowKey(e: any, index?: any): boolean;
	    itemHandleEnterKey(e: any, index?: any): boolean;
	    itemHandleSpaceKey(e: any, index?: any): boolean;
	    itemHandleUpArrowKey(e: any, index?: any): boolean;
	    itemHandleDownArrowKey(e: any, index?: any): boolean;
	    itemHandleTabKey(e: any, index?: any): boolean;
	    itemHandleShiftTabKey(e: any, index?: any): boolean;
	    itemHandleEscKey(e: any, index?: any): boolean;
	    setFocusToPrevious(currentIndex: number, roundTrip?: boolean): number;
	    setFocusToNext(currentIndex: number, roundTrip?: boolean): number;
	    clickHandler(e: any, index: any): void;
	    dispose(): void;
	    addListener(element: HTMLElement, index: number, eventType: string, handler: any): void;
	    focus(prevActiveElement?: Element): void;
	    liveRegion: () => IAccessibilityLiveRegion;
	    lastFocusItem(): HTMLElement;
	}

}
declare module DevExpress.Analytics.Internal {





}
declare module DevExpress.Analytics.Internal {
	export {};

}
declare module DevExpress.Analytics.Internal {
	export class RequestHelper {
	    static generateUri(host: string, uri: string): string;
	}

}
declare module DevExpress.Analytics.Internal {
	export interface IJSDesignerBindingCommonOptions {
	    callbacks?: {};
	    requestOptions?: {
	        host?: string;
	        getLocalizationAction?: string;
	    };
	}

}
declare module DevExpress.Analytics.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IJSDesignerBindingCommonOptions = DevExpress.Analytics.Internal.IJSDesignerBindingCommonOptions;;
	export class JSDesignerBindingCommon<TSender, TOptions extends IJSDesignerBindingCommonOptions> extends Disposable {
	    protected _options: TOptions;
	    protected _customEventRaiser?: any;
	    sender: TSender;
	    dispose(): void;
	    protected _fireEvent(eventName: any, args?: any): void;
	    protected _getServerActionUrl(host: any, uri: any): string;
	    protected _getAvailableEvents(events: any, prefix?: string): any;
	    protected _templateHtml: string;
	    protected _getLocalizationRequest(): JQuery.Promise<{
	        messages: any;
	    }, any, any>;
	    protected _createDisposeFunction(element: HTMLElement): void;
	    constructor(_options: TOptions, _customEventRaiser?: any);
	}

}
declare module DevExpress.Analytics.Internal {





    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import IArea = DevExpress.Analytics.Elements.IArea;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
	export class SelectionDragDropHandler extends DragDropHandler {
	    adjustDropTarget(dropTargetSurface: ISelectionTarget): ISelectionTarget;
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(control: ISelectionTarget): void;
	    drag(event: any, ui: any): void;
	    getLocation(adjustedTarget: any, item: any): IArea;
	    ajustLocation(adjustedTarget: any, item: any): void;
	    doStopDrag(ui: any, _: any): void;
	    create(event: JQueryEventObject, ui: any): void;
	}

}
declare module DevExpress.Analytics.Internal {

    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
	export class ToolboxDragDropHandler extends DragDropHandler {
	    private _controlsFactory;
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent, controlsFactory: ControlsFactory);
	    helper(draggable: any): void;
	    doStopDrag(ui: any, draggable: any): void;
	}

}
declare module DevExpress.Analytics.Elements {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class SerializableModel extends Disposable {
	    preInitProperties(model: any, serializer?: IModelSerializer, info?: ISerializationInfoArray): void;
	    constructor(model: any, serializer?: IModelSerializer, info?: ISerializationInfoArray);
	    getInfo(): ISerializationInfoArray;
	}

}
declare module DevExpress.Analytics.Internal {

    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface IDisplayedObject {
	    name: ko.Observable<string> | ko.Computed<string>;
	}
	export interface IDesignControlsHelper extends IDisposable {
	    getControls: (target: any) => ko.ObservableArray<IDisplayedObject>;
	    allControls: ko.ObservableArray<IDisplayedObject>;
	    getNameProperty?: (model: any) => ko.Observable<string> | ko.Computed<string>;
	    getControlByName: (name: string) => IDisplayedObject;
	}
	export class DesignControlsHelper extends Disposable implements IDesignControlsHelper {
	    protected target: any;
	    private collectionNames?;
	    private _handlers;
	    private _setText;
	    private _visitedCollections;
	    private _subscriptions;
	    getNameProperty(model: any): any;
	    getControlByName(name: string): any;
	    protected _setName(value: any): void;
	    protected _setDefaultText(value: any): void;
	    protected _getNamePrefix(value: any): string;
	    dispose(): void;
	    private added;
	    private deleted;
	    processCollection(collection: any): void;
	    _collectControls(target: any): void;
	    constructor(target: any, handlers?: Array<{
	        added: (control: any) => void;
	        deleted?: (control: any) => void;
	    }>, collectionNames?: string[]);
	    getControls(target: any): ko.ObservableArray<IDisplayedObject>;
	    allControls: ko.ObservableArray<IDisplayedObject>;
	}

}
declare module DevExpress.Analytics.Internal {
    import IEditorInfo = DevExpress.Analytics.Utils.IEditorInfo;;
	export const ExpressionType = "DevExpress.DataAccess.Expression";
	export function IsDataAccessExpression(type: string): boolean;
	export var editorTypeMapper: {
	    [key: string]: IEditorInfo;
	};
	export function getEditorType(typeString: string): {
	    header?: any;
	    content?: any;
	    custom?: any;
	};

}
declare module DevExpress.Analytics.Internal {
	export interface ILocalizationSettings extends IGlobalizeSettings {
	    localization?: {
	        [stringId: string]: string;
	    };
	}
	export interface IGlobalizeSettings {
	    currentCulture?: string;
	    cldrData?: string;
	    cldrSupplemental?: string;
	}
	export function initGlobalize(settings: IGlobalizeSettings): void;

}
declare module DevExpress.Analytics.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export function processTextEditorHotKeys(event: JQueryKeyEventObject, delegates: any): void;
	export class InlineTextEdit extends Disposable {
	    private _showInline;
	    text: ko.Observable<string> | ko.Computed<string>;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	    keypressAction: any;
	    show: any;
	    constructor(selection: ISelectionProvider);
	}

}
declare module DevExpress.Analytics.Internal {
    import ITreeListController = DevExpress.Analytics.Widgets.Internal.ITreeListController;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
	export class ObjectStructureTreeListController implements ITreeListController {
	    dispose(): void;
	    constructor(propertyNames?: string[], listPropertyNames?: string[]);
	    canSelect(value: TreeListItemViewModel): boolean;
	    dragDropHandler: DragDropHandler;
	    selectedItem: any;
	    dblClickHandler: (item: TreeListItemViewModel) => void;
	    select: (value: TreeListItemViewModel) => void;
	    itemsFilter: (item: IDataMemberInfo, path?: string) => boolean;
	    hasItems: (item: IDataMemberInfo) => boolean;
	    getActions: (item: TreeListItemViewModel) => IAction[];
	    showIconsForChildItems: (item?: TreeListItemViewModel) => boolean;
	}

}
declare module DevExpress.Analytics.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
	export interface IRootItem {
	    model: any;
	    displayName?: string;
	    name: string;
	    className: string;
	    data?: any;
	}
	export class ObjectStructureProviderBase extends Disposable implements IItemsProvider {
	    getClassName(instance: any): any;
	    createItem(currentTarget: any, propertyName: string, propertyValue: any, result: IDataMemberInfo[]): void;
	    getMemberByPath(target: any, path: string): any;
	    getObjectPropertiesForPath(target: any, path: string, propertyName?: string): IDataMemberInfo[];
	    createArrayItem(currentTarget: Array<any>, result: IDataMemberInfo[], propertyName?: any): void;
	    getItems: (pathRequest: IPathRequest) => JQueryPromise<IDataMemberInfo[]>;
	    selectedPath: ko.Observable<string> | ko.Computed<string>;
	    selectedMember: ko.Observable | ko.Computed;
	}
	export class ObjectExplorerProvider extends ObjectStructureProviderBase {
	    getPathByMember: (model: any) => string;
	    createArrayItem(currentTarget: Array<any>, result: IDataMemberInfo[], propertyName?: any): void;
	    createItem(currentTarget: any, propertyName: string, propertyValue: any, result: IDataMemberInfo[]): void;
	    constructor(rootITems: IRootItem[], listPropertyNames?: string[], member?: ko.Observable | ko.Computed, getPathByMember?: any);
	    path: ko.Observable<string> | ko.Computed<string>;
	    listPropertyNames: string[];
	}
	export class ObjectStructureProvider extends ObjectStructureProviderBase {
	    constructor(target: any, displayName?: string, localizationId?: string);
	}

}
declare module DevExpress.Analytics.Internal {
	export var papperKindMapper: {
	    A2: {
	        width: number;
	        height: number;
	    };
	    A3: {
	        width: number;
	        height: number;
	    };
	    A3Extra: {
	        width: number;
	        height: number;
	    };
	    A3ExtraTransverse: {
	        width: number;
	        height: number;
	    };
	    A3Rotated: {
	        width: number;
	        height: number;
	    };
	    A3Transverse: {
	        width: number;
	        height: number;
	    };
	    A4: {
	        width: number;
	        height: number;
	    };
	    A4Extra: {
	        width: number;
	        height: number;
	    };
	    A4Plus: {
	        width: number;
	        height: number;
	    };
	    A4Rotated: {
	        width: number;
	        height: number;
	    };
	    A4Small: {
	        width: number;
	        height: number;
	    };
	    A4Transverse: {
	        width: number;
	        height: number;
	    };
	    A5: {
	        width: number;
	        height: number;
	    };
	    A5Extra: {
	        width: number;
	        height: number;
	    };
	    A5Rotated: {
	        width: number;
	        height: number;
	    };
	    A5Transverse: {
	        width: number;
	        height: number;
	    };
	    A6: {
	        width: number;
	        height: number;
	    };
	    A6Rotated: {
	        width: number;
	        height: number;
	    };
	    APlus: {
	        width: number;
	        height: number;
	    };
	    B4: {
	        width: number;
	        height: number;
	    };
	    B4Envelope: {
	        width: number;
	        height: number;
	    };
	    B4JisRotated: {
	        width: number;
	        height: number;
	    };
	    B5: {
	        width: number;
	        height: number;
	    };
	    B5Envelope: {
	        width: number;
	        height: number;
	    };
	    B5Extra: {
	        width: number;
	        height: number;
	    };
	    B5JisRotated: {
	        width: number;
	        height: number;
	    };
	    B5Transverse: {
	        width: number;
	        height: number;
	    };
	    B6Envelope: {
	        width: number;
	        height: number;
	    };
	    B6Jis: {
	        width: number;
	        height: number;
	    };
	    B6JisRotated: {
	        width: number;
	        height: number;
	    };
	    BPlus: {
	        width: number;
	        height: number;
	    };
	    C3Envelope: {
	        width: number;
	        height: number;
	    };
	    C4Envelope: {
	        width: number;
	        height: number;
	    };
	    C5Envelope: {
	        width: number;
	        height: number;
	    };
	    C65Envelope: {
	        width: number;
	        height: number;
	    };
	    C6Envelope: {
	        width: number;
	        height: number;
	    };
	    CSheet: {
	        width: number;
	        height: number;
	    };
	    DLEnvelope: {
	        width: number;
	        height: number;
	    };
	    DSheet: {
	        width: number;
	        height: number;
	    };
	    ESheet: {
	        width: number;
	        height: number;
	    };
	    Executive: {
	        width: number;
	        height: number;
	    };
	    Folio: {
	        width: number;
	        height: number;
	    };
	    GermanLegalFanfold: {
	        width: number;
	        height: number;
	    };
	    GermanStandardFanfold: {
	        width: number;
	        height: number;
	    };
	    InviteEnvelope: {
	        width: number;
	        height: number;
	    };
	    IsoB4: {
	        width: number;
	        height: number;
	    };
	    ItalyEnvelope: {
	        width: number;
	        height: number;
	    };
	    JapaneseDoublePostcard: {
	        width: number;
	        height: number;
	    };
	    JapaneseDoublePostcardRotated: {
	        width: number;
	        height: number;
	    };
	    JapanesePostcard: {
	        width: number;
	        height: number;
	    };
	    Ledger: {
	        width: number;
	        height: number;
	    };
	    Legal: {
	        width: number;
	        height: number;
	    };
	    LegalExtra: {
	        width: number;
	        height: number;
	    };
	    Letter: {
	        width: number;
	        height: number;
	    };
	    LetterExtra: {
	        width: number;
	        height: number;
	    };
	    LetterExtraTransverse: {
	        width: number;
	        height: number;
	    };
	    LetterPlus: {
	        width: number;
	        height: number;
	    };
	    LetterRotated: {
	        width: number;
	        height: number;
	    };
	    LetterSmall: {
	        width: number;
	        height: number;
	    };
	    LetterTransverse: {
	        width: number;
	        height: number;
	    };
	    MonarchEnvelope: {
	        width: number;
	        height: number;
	    };
	    Note: {
	        width: number;
	        height: number;
	    };
	    Number10Envelope: {
	        width: number;
	        height: number;
	    };
	    Number11Envelope: {
	        width: number;
	        height: number;
	    };
	    Number12Envelope: {
	        width: number;
	        height: number;
	    };
	    Number14Envelope: {
	        width: number;
	        height: number;
	    };
	    Number9Envelope: {
	        width: number;
	        height: number;
	    };
	    PersonalEnvelope: {
	        width: number;
	        height: number;
	    };
	    Prc16K: {
	        width: number;
	        height: number;
	    };
	    Prc16KRotated: {
	        width: number;
	        height: number;
	    };
	    Prc32K: {
	        width: number;
	        height: number;
	    };
	    Prc32KBig: {
	        width: number;
	        height: number;
	    };
	    Prc32KBigRotated: {
	        width: number;
	        height: number;
	    };
	    Prc32KRotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber1: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber10: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber10Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber1Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber2: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber2Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber3: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber3Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber4: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber4Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber5: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber5Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber6: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber6Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber7: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber7Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber8: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber8Rotated: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber9: {
	        width: number;
	        height: number;
	    };
	    PrcEnvelopeNumber9Rotated: {
	        width: number;
	        height: number;
	    };
	    Quarto: {
	        width: number;
	        height: number;
	    };
	    Standard10x11: {
	        width: number;
	        height: number;
	    };
	    Standard10x14: {
	        width: number;
	        height: number;
	    };
	    Standard11x17: {
	        width: number;
	        height: number;
	    };
	    Standard12x11: {
	        width: number;
	        height: number;
	    };
	    Standard15x11: {
	        width: number;
	        height: number;
	    };
	    Standard9x11: {
	        width: number;
	        height: number;
	    };
	    Statement: {
	        width: number;
	        height: number;
	    };
	    Tabloid: {
	        width: number;
	        height: number;
	    };
	    TabloidExtra: {
	        width: number;
	        height: number;
	    };
	    USStandardFanfold: {
	        width: number;
	        height: number;
	    };
	};

}
declare module DevExpress.Analytics.Internal {





	export interface IResizableOptions {
	    starting?: () => void;
	    $element?: Element;
	    stopped?: () => void;
	    zoom?: number;
	    minimumWidth?: ko.Observable<number> | number;
	    maximumWidth?: ko.Observable<number> | number;
	}

}
declare module DevExpress.Analytics.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class dxScrollProcessor extends Disposable {
	    private _container;
	    private _updateTime;
	    dispose(): void;
	    private _currentOffsetY;
	    private _currentOffsetX;
	    private _scroll;
	    private _updateInterval;
	    private _startUpdateScrollPosition;
	    private _calculateOffset;
	    constructor(_container: Element, _updateTime?: number);
	    getScrollOffset(): any;
	    processOffset(screenPosition: {
	        x: number;
	        y: number;
	    }): void;
	}

}
declare module DevExpress.Analytics.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ArrayStore =  DevExpress.data.ArrayStore ;;
    import CustomStore =  DevExpress.data.CustomStore ;;
    import DataSource =  DevExpress.data.DataSource ;;
	export class CustomSortedArrayStore extends CustomStore {
	    static _sortItems(items: any[], sortPropertyName: string): any[];
	    static _createOptions(items: any, sortPropertyName: any): {
	        load: (options: any) => JQuery.Promise<any, any, any>;
	        byKey: (key: any) => any;
	    };
	    constructor(items: any[], sortPropertyName?: string);
	}
	export class SortedArrayStore extends ArrayStore {
	    constructor(options: any, sortPropertyName?: string);
	}
	export class ControlsStore extends Disposable {
	    private _filter;
	    dataSource: ko.Computed<DataSource>;
	    constructor(allControls: ko.ObservableArray<any>);
	    setFilter(filter: any): void;
	    resetFilter(): void;
	    visible: ko.Computed<boolean>;
	}

}
declare module DevExpress.Analytics.Internal {
	export function validateName(nameCandidate: any): boolean;
	export function replaceInvalidSymbols(text: string): string;
	export var nameValidationRules: {
	    type: string;
	    validationCallback: (options: any) => boolean;
	    readonly message: any;
	}[];

}
declare module DevExpress.Analytics.Internal {

    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export interface ICombinedProperty {
	    result: any;
	    subscriptions: ko.Subscription[];
	}
	export class CombinedObject {
	    private static getInfo;
	    private static isPropertyDisabled;
	    private static getPath;
	    private static isPropertyVisible;
	    private static mergeProperty;
	    static _createProperty(result: any, propertyName: any, propertyValue: any): void;
	    static _merge(controls: any[], undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, customMerge?: any, ignoreProperties?: any): {
	        result: {};
	        subscriptions: any[];
	    };
	    static mergeControls(controls: any[], undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, customMerge?: any, ignoreProperties?: string[]): {
	        result: any;
	        subscriptions: any[];
	    };
	    static getEditableObject(selectionProvider: ISelectionProvider, undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, customMerge?: any): ko.Observable | ko.Computed;
	}

}
declare module DevExpress.Analytics.Internal {
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
	export function deleteSelection(selection: ISelectionProvider): void;

}
declare module DevExpress.Analytics.Internal {

    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import IPoint = DevExpress.Analytics.Elements.IPoint;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export interface ICopyPasteStrategy {
	    createChild(pasteTarget: ElementViewModel, info: {}): ElementViewModel;
	    calculateDelta(selection: ISelectionTarget, pasteTargetSurface: ISelectionTarget, minPoint: IPoint): {
	        x: number;
	        y: number;
	    };
	    canPaste?(pasteTarget: ElementViewModel, info: {}): boolean;
	    createSelfRestoringItems?: (model: ElementViewModel, seriazlizer: ModelSerializer) => Array<{
	        restore: () => void;
	    }>;
	}
	export var copyPasteStrategy: ICopyPasteStrategy;
	export class CopyPasteHandler {
	    private _copyPasteStrategy;
	    private _selectionProvider;
	    private _copyInfo;
	    constructor(selectionProvider: ISelectionProvider, _copyPasteStrategy?: ICopyPasteStrategy);
	    hasPasteInfo: ko.PureComputed<boolean>;
	    canCopy(): boolean;
	    canPaste(): boolean;
	    copy(): void;
	    cut(): void;
	    paste(): void;
	}

}
declare module DevExpress.Analytics.Tools {
	export var ActionId: {
	    Cut: string;
	    Copy: string;
	    Paste: string;
	    Delete: string;
	    Undo: string;
	    Redo: string;
	    ZoomOut: string;
	    ZoomSelector: string;
	    ZoomIn: string;
	};

}
declare module DevExpress.Analytics.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IShortcutActionList = DevExpress.Analytics.Internal.IShortcutActionList;;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import ICopyPasteStrategy = DevExpress.Analytics.Internal.ICopyPasteStrategy;;
	export class ActionListsBase extends Disposable implements IShortcutActionList {
	    constructor(enabled?: ko.Observable<boolean> | ko.Computed<boolean>);
	    processShortcut(actions: IAction[], e: JQueryKeyEventObject): void;
	    shouldIgnoreProcessing(e: JQueryKeyEventObject): boolean;
	    enabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    toolbarItems: IAction[] | ko.Observable<IAction[]> | ko.Computed<IAction[]>;
	}
	export class ActionLists extends ActionListsBase {
	    _registerAction(container: Array<IAction>, action: IAction): void;
	    private _keyboardHelper;
	    constructor(surfaceContext: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: ISelectionProvider, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, customizeActions?: (actions: IAction[]) => void, enabled?: ko.Observable<boolean> | ko.Computed<boolean>, copyPasteStrategy?: ICopyPasteStrategy, zoomStep?: ko.Observable<number> | ko.Computed<number>, isLocked?: (item: any) => boolean);
	    processShortcut(actions: IAction[], e: JQueryKeyEventObject): void;
	    menuItems: IAction[];
	}

}
declare module DevExpress.Analytics.Widgets {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class EditorValidator extends Disposable {
	    private _editor;
	    private _lastValidatorOptions;
	    private _lastModelOverridableRules;
	    private _validatorInstance;
	    private _onValidatedHandler;
	    dispose(): void;
	    constructor(_editor: Editor);
	    _isValid(validationRules: any, newValue: any): {
	        brokenRule?: any;
	        isValid?: boolean;
	        validationRules?: Array<any>;
	        value?: any;
	    };
	    validatorInstance: any;
	    onValidatedHandler: any;
	    getValidationRules(): any;
	    getValidatorOptions(templateValidatorOptions?: any): any;
	    areRulesChanged(overridableRuleSet: Array<{
	        type: string;
	        message: any;
	        validationCallback?: any;
	    }>): number | boolean;
	    wrapOnValidatorInitialized(options: any): void;
	    _onValidatorInitialized(e: any): void;
	    _concatValidationRules(validatorOptions: any, validationRules: any): any;
	    _wrapValidatorEvents(validatorOptions: any): any;
	    assignWithValidation(newValue: any, assignValueFunc: () => void): void;
	}

}
declare module DevExpress.Analytics.Widgets {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IControlPropertiesViewModel = DevExpress.Analytics.Internal.IControlPropertiesViewModel;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;;
    import IPropertiesAccessibilityProvider = DevExpress.Analytics.Internal.IPropertiesAccessibilityProvider;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export class Editor extends Disposable {
	    _setPadding(position: string, value: any): {};
	    _model: ko.Observable<IControlPropertiesViewModel>;
	    _parent: ko.Observable<Editor>;
	    isSearchedProperty: ko.Observable<boolean> | ko.Computed<boolean>;
	    isParentSearched: ko.Observable<boolean>;
	    rtl: boolean;
	    protected _accessibilityProvider: ko.Observable<IPropertiesAccessibilityProvider>;
	    private _validator;
	    dispose(): void;
	    constructor(modelPropertyInfo: ISerializationInfo, level: any, parentDisabled?: ko.Observable<boolean> | ko.Computed<boolean>, textToSearch?: any);
	    protected _shouldSkipHighlighting(propertyName: string): boolean;
	    private _cachedValue;
	    private _assignValue;
	    private _roundTwoDesemialsForUnitProperties;
	    private _init;
	    private _getInfoFromModel;
	    update(viewModel: IControlPropertiesViewModel): void;
	    getOptions(templateOptions: any): any;
	    getValidatorOptions(templateValidatorOptions: any): any;
	    registerAccessibilityProvider(accessibilityProvider: IPropertiesAccessibilityProvider): void;
	    assingParent(parent: Editor): void;
	    _getEditorValidationRules(): any[];
	    getValidationRules(): any;
	    readonly validationRules: any;
	    padding: any;
	    level: any;
	    textToSearch: ko.Observable<string> | ko.Computed<string>;
	    info: ko.Observable<ISerializationInfo>;
	    name: string;
	    displayName: ko.Computed<string>;
	    templateName: string;
	    contentTemplateName: string;
	    editorTemplate: string;
	    viewmodel: any;
	    values: ko.Computed<{
	        displayValue: string;
	        value: string;
	    }[]>;
	    value: ko.Computed<any>;
	    isEditorSelected: ko.Observable<boolean>;
	    isRequired: boolean;
	    isPropertyModified: ko.Computed<boolean>;
	    isPropertyHighlighted: ko.Computed<boolean>;
	    disabled: ko.Computed<boolean>;
	    visible: ko.Computed<boolean>;
	    isRendered: ko.Observable<boolean>;
	    getIdByDisplayName(preffix: string): string;
	    getPopupServiceActions(): IModelAction[];
	    editorOptions: any;
	    validatorOptions: any;
	    defaultValue: any;
	    readonly isComplexEditor: boolean;
	    collapsed: ko.Observable<boolean>;
	}

}
declare module DevExpress.Analytics.Internal {
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export interface IPropertiesAccessibilityProvider {
	    isPropertyVisible(editor: Editor): any;
	    isPropertyDisabled(editor: Editor): any;
	}
	export class PropertiesAccessibilityProvider implements IPropertiesAccessibilityProvider {
	    isPropertyVisible(editor: Editor): boolean;
	    isPropertyDisabled(editor: Editor): any;
	    private _calculateAccessibilityByPropertyInfo;
	}
	export var defaultAccessibilityProvider: PropertiesAccessibilityProvider;

}
declare module DevExpress.Analytics.Internal {

    import IModelAction = DevExpress.Analytics.Internal.IModelAction;;
	export class PopupService {
	    data: ko.Observable<any>;
	    title: ko.Observable<string>;
	    visible: ko.Observable<boolean>;
	    disabled: ko.Observable<boolean>;
	    actions: ko.ObservableArray<IModelAction>;
	    target: ko.Observable<any>;
	}

}
declare module DevExpress.Analytics.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import PopupService = DevExpress.Analytics.Internal.PopupService;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;;
	export interface IEditorAddon {
	    templateName: string;
	    data: EditorAddOn[] | any;
	}
	export class EditorAddOn extends Disposable {
	    private _popupService;
	    private _editor;
	    private _updateActions;
	    private _getTitles;
	    private _wrapVisibleItems;
	    private _wrapActionClick;
	    constructor(editor: Editor, popupService: PopupService);
	    showPopup(_: any, element: any): void;
	    actionFilter(action: IModelAction): boolean;
	    visible: ko.Computed<boolean>;
	    _actions: ko.Computed<IModelAction[]>;
	    editorMenuButtonCss: ko.Observable<string | {
	        [key: string]: boolean;
	    }> | ko.Computed<string | {
	        [key: string]: boolean;
	    }>;
	    imageTemplateName: string | ko.Observable<string> | ko.Computed<string>;
	    hint: ko.Computed<string>;
	    templateName: string;
	}

}
declare module DevExpress.Analytics.Widgets {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IPropertiesAccessibilityProvider = DevExpress.Analytics.Internal.IPropertiesAccessibilityProvider;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import IControlPropertiesViewModel = DevExpress.Analytics.Internal.IControlPropertiesViewModel;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import PopupService = DevExpress.Analytics.Internal.PopupService;;
    import IEditorAddon = DevExpress.Analytics.Internal.IEditorAddon;;
	export class ObjectProperties extends Disposable {
	    private _viewModelSubscription;
	    private _infoSubscription;
	    private _getInfoComputed;
	    protected _accessibilityProvider: IPropertiesAccessibilityProvider;
	    protected _parent: Editor;
	    update(viewModel: IControlPropertiesViewModel): void;
	    private _cleanEditorsSubscriptions;
	    dispose(): void;
	    cleanSubscriptions(): void;
	    cleanEditors(): void;
	    findEditorByInfo(serializationInfo: ISerializationInfo): Editor;
	    createEditor(modelPropertyInfo: ISerializationInfo): any;
	    createEditors(serializationInfo: ISerializationInfoArray): any[];
	    registerAccessibilityProvider(accessibilityProvider: IPropertiesAccessibilityProvider): void;
	    assignParent(parent: Editor): void;
	    private _createEditors;
	    protected _update(viewModel: IControlPropertiesViewModel, editorsInfo: any, recreateEditors: any): void;
	    private _recreateEditors;
	    constructor(viewModel: ko.Observable<any> | ko.Computed<any>, editorsInfo?: {
	        editors?: ISerializationInfoArray | ko.Observable<ISerializationInfoArray> | ko.Computed<ISerializationInfoArray>;
	    }, level?: number, parentDisabled?: ko.Observable<boolean> | ko.Computed<boolean>, recreateEditors?: boolean, textToSearch?: any, popupService?: PopupService);
	    level: number;
	    popupService: PopupService;
	    createEditorAddOn: (editor: Editor) => IEditorAddon;
	    rtl: boolean;
	    getEditors(): Editor[];
	    _textToSearch: any;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	    _editors: ko.ObservableArray<Editor>;
	    private _parentDisabled;
	}
	export class PropertyGridEditor extends Editor {
	    private _popupService?;
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any, _popupService?: PopupService);
	    createObjectProperties(): ObjectProperties;
	    registerAccessibilityProvider(accessibilityProvider: IPropertiesAccessibilityProvider): void;
	    visibleByName: ko.Computed<boolean>;
	    editorCreated: ko.Observable<boolean>;
	}
	export class PropertyGridEditorFlat extends PropertyGridEditor {
	    createObjectProperties(): ObjectProperties;
	}

}
declare module DevExpress.Analytics.Internal {
    import TabPanel = DevExpress.Analytics.Utils.TabPanel;;
    import AccessibilityControlElementBase = DevExpress.Analytics.Internal.AccessibilityControlElementBase;;
    import AccessibilityKeyboardHelperBase = DevExpress.Analytics.Internal.AccessibilityKeyboardHelperBase;;
	export class RightPanelKeyboardHelper extends AccessibilityKeyboardHelperBase {
	    private _tabPanel;
	    controlElementClassName: string;
	    constructor(_tabPanel: TabPanel);
	    bindHandler(el: any): void;
	    initialize(): void;
	    createControlElement(element: HTMLElement, index?: number): AccessibilityControlElementBase;
	    itemHandleDownArrowKey(e: any, index?: any): boolean;
	    itemHandleUpArrowKey(e: any, index?: any): boolean;
	}

}
declare module DevExpress.Analytics.Utils {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import RightPanelKeyboardHelper = DevExpress.Analytics.Internal.RightPanelKeyboardHelper;;
    import AccessibilityKeyboardHelperBase = DevExpress.Analytics.Internal.AccessibilityKeyboardHelperBase;;
	export interface ITabPanelOptions {
	    tabs: TabInfo[];
	    autoSelectTab?: boolean;
	    rtl?: boolean;
	    width?: number;
	}
	export class TabPanel extends Disposable {
	    static Position: {
	        Left: string;
	        Right: string;
	    };
	    dispose(): void;
	    constructor(options: ITabPanelOptions);
	    private _resizableOptions;
	    getResizableOptions: ($element: Element, panelOffset: number, minWidth: number) => any;
	    tabs: TabInfo[];
	    toggleTabVisibility: (e: any) => void;
	    selectTab: (e: any) => void;
	    isEmpty: ko.Observable<boolean> | ko.Computed<boolean>;
	    collapsed: ko.Observable<boolean> | ko.Computed<boolean>;
	    width: ko.Observable<number> | ko.Computed<number>;
	    headerWidth: ko.Observable<number> | ko.Computed<number>;
	    position: ko.Observable<string> | ko.Computed<string>;
	    toggleCollapsedImage: ko.Computed<{
	        class: string;
	        template: string;
	    }>;
	    toggleCollapsedText: ko.PureComputed<any>;
	    cssClasses: (extendOptions: {
	        class: string;
	        condition: any;
	    }) => any;
	    keyboardHelper: RightPanelKeyboardHelper;
	}
	export interface ITabInfoOptions {
	    text: string;
	    template: string;
	    model: any;
	    keyboardHelper?: AccessibilityKeyboardHelperBase;
	    localizationId?: string;
	    imageClassName?: string;
	    imageTemplateName?: string;
	    visible?: ko.Observable<boolean> | ko.Computed<boolean>;
	    disabled?: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class TabInfo extends Disposable {
	    private _text;
	    private _localizationId;
	    constructor(options: ITabInfoOptions);
	    focus(): void;
	    imageClassName: ko.Observable<string> | ko.Computed<string>;
	    imageTemplateName: string;
	    active: ko.Observable<boolean> | ko.Computed<boolean>;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    template: string;
	    model: any;
	    keyboardHelper: AccessibilityKeyboardHelperBase;
	    readonly text: any;
	    collapsed: ko.Subscribable<boolean>;
	}

}
declare module DevExpress.Analytics.Utils {
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
    import ITabInfoOptions = DevExpress.Analytics.Utils.ITabInfoOptions;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;;
	export class TabInfoWithPropertyGrid extends TabInfo {
	    constructor(options: ITabInfoOptions);
	    propertyGrid: ObjectProperties;
	}

}
declare module DevExpress.Analytics.Internal {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IPropertiesAccessibilityProvider = DevExpress.Analytics.Internal.IPropertiesAccessibilityProvider;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
	export type GroupObject = {
	    [key: string]: {
	        info: ISerializationInfoArray;
	        displayName?: () => string;
	    };
	};
	export class Group extends Disposable {
	    private _viewModel;
	    private _serializationsInfo;
	    private _displayName;
	    private _localizationId;
	    private _accessibilityProvider;
	    constructor(name: string, serializationsInfo: ISerializationInfoArray, createEditors: (serializationInfo: ISerializationInfoArray) => Editor[], collapsed?: boolean, displayName?: () => string);
	    resetEditors(): void;
	    dispose(): void;
	    update(viewModel: ElementViewModel): void;
	    registerAccessibilityProvider(accessibilityProvider: IPropertiesAccessibilityProvider): void;
	    displayName: () => string;
	    editors: ko.ObservableArray<Editor>;
	    context: any;
	    recreate: () => void;
	    collapsed: ko.Observable<boolean> | ko.Computed<boolean>;
	    visible: ko.Computed<Boolean>;
	    editorsCreated: ko.Observable<boolean>;
	    editorsRendered: ko.Observable<boolean>;
	}

}
declare module DevExpress.Analytics.Internal {

    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;
    import Group = DevExpress.Analytics.Internal.Group;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IPropertiesAccessibilityProvider = DevExpress.Analytics.Internal.IPropertiesAccessibilityProvider;;
	export class ControlProperties extends ObjectProperties {
	    getEditors(): Editor[];
	    protected _update(target: any, editorsInfo: any, recreateEditors: any): void;
	    cleanEditors(): void;
	    dispose(): void;
	    createGroups(groups: GroupObject): void;
	    registerAccessibilityProvider(accessibilityProvider: IPropertiesAccessibilityProvider): void;
	    constructor(target: ko.Observable<any>, editorsInfo?: {
	        groups?: GroupObject;
	        editors?: ISerializationInfoArray;
	    }, level?: number, useAddons?: boolean);
	    focusedItem: ko.Observable | ko.Computed;
	    focusedImageClassName: ko.Observable<string> | ko.Computed<string>;
	    displayExpr: (value: any) => string;
	    groups: Group[];
	    editorsRendered: ko.Observable<boolean> | ko.Computed<boolean>;
	    isSortingByGroups: ko.Observable<boolean> | ko.Computed<boolean>;
	    isSearching: ko.Observable<boolean> | ko.Computed<boolean>;
	    allEditorsCreated: ko.Observable<boolean> | ko.Computed<boolean>;
	    textToSearch: ko.Observable<string>;
	    _searchBox: any;
	    searchBox($element: any): void;
	    searchPlaceholder: () => any;
	    switchSearchBox: () => void;
	}

}
declare module DevExpress.Analytics.Internal {

    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
    import SelectionDragDropHandler = DevExpress.Analytics.Internal.SelectionDragDropHandler;;
    import ToolboxDragDropHandler = DevExpress.Analytics.Internal.ToolboxDragDropHandler;;
    import ToolboxItem = DevExpress.Analytics.Utils.ToolboxItem;;
    import ControlProperties = DevExpress.Analytics.Internal.ControlProperties;;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
    import DesignControlsHelper = DevExpress.Analytics.Internal.DesignControlsHelper;
    import IDesignControlsHelper = DevExpress.Analytics.Internal.IDesignControlsHelper;;
    import ControlsStore = DevExpress.Analytics.Internal.ControlsStore;;
    import TabPanel = DevExpress.Analytics.Utils.TabPanel;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;;
    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import InlineTextEdit = DevExpress.Analytics.Internal.InlineTextEdit;;
    import ActionLists = DevExpress.Analytics.Internal.ActionLists;;
    import IDesignerPart = DevExpress.Analytics.Internal.IDesignerPart;
    import IGroupedItem = DevExpress.Analytics.Internal.IGroupedItem;;
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;;
    import IPropertiesAccessibilityProvider = DevExpress.Analytics.Internal.IPropertiesAccessibilityProvider;;
	export interface IDesignerContext {
	    model: ko.Observable | ko.Computed;
	    surface?: ko.Observable | ko.Computed;
	    undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>;
	}
	export interface IDesignerModel extends IDisposable {
	    model: ko.Observable | ko.Computed;
	    rtl: boolean;
	    surface: ko.Observable | ko.Computed;
	    undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>;
	    selection: SurfaceSelection;
	    snapHelper: SnapLinesHelper;
	    editableObject: ko.Observable<any>;
	    dragHelperContent: DragHelperContent;
	    dragDropStarted: ko.Observable<boolean> | ko.Computed<boolean>;
	    dragHandler: SelectionDragDropHandler;
	    toolboxDragHandler: ToolboxDragDropHandler;
	    resizeHandler: IResizeHandler;
	    toolboxItems: ToolboxItem[];
	    groupedToolboxItems: IGroupedItem<ToolboxItem>[];
	    isLoading: ko.Observable<boolean> | ko.Computed<boolean>;
	    propertyGrid: ControlProperties;
	    popularProperties: ObjectProperties;
	    controlsHelper: DesignControlsHelper;
	    controlsStore: ControlsStore;
	    tabPanel: TabPanel;
	    contextActionProviders: IActionsProvider[];
	    contextActions: ko.Observable<IAction[]> | ko.Computed<IAction[]>;
	    contextGroupActions: ko.Computed<IGroupedItem<IAction>[]>;
	    appMenuVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    toggleAppMenu: () => void;
	    getMenuPopupContainer: (el: HTMLElement) => JQuery;
	    getMenuPopupTarget: (el: HTMLElement) => JQuery;
	    inlineTextEdit: InlineTextEdit;
	    actionsGroupTitle: () => string;
	    updateFont: (values: {
	        [key: string]: string;
	    }) => void;
	    sortFont: () => void;
	    surfaceSize: ko.Observable<number> | ko.Computed<number>;
	    popularVisible: ko.Computed<boolean>;
	    actionLists: ActionLists;
	    parts: IDesignerPart[];
	    surfaceClass: (elem: any) => string;
	}
	export class DesignerContextGeneratorInternal<T extends IDesignerContext> {
	    private _context;
	    private _rtl?;
	    constructor(_context: T, _rtl?: boolean);
	    addElement(propertyName: string, model: any): this;
	    addUndoEngine(undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>): this;
	    addSurface(surface: any): this;
	    getContext(): T;
	}
	export class DesignerContextGenerator<T extends IDesignerContext> {
	    private _rtl?;
	    constructor(_rtl?: boolean);
	    addModel(model: any): DesignerContextGeneratorInternal<T>;
	}
	export interface IDesingerGeneratorSettings {
	    generate(): any;
	}
	export interface IResizeHandler {
	    starting: () => void;
	    stopped: () => void;
	    disabled?: ko.Observable<boolean> | ko.Computed<boolean>;
	    snapHelper?: SnapLinesHelper;
	}
	export class ResizeSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _handler;
	    handler: IResizeHandler;
	    generate(): {};
	}
	export class ContextActionsSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _actionProviders;
	    private _actions;
	    private _groupActions;
	    private _actionUndoEngineWrappingFunction;
	    private _collectActions;
	    actionProviders: IActionsProvider[];
	    actions: ko.Observable<IAction<any>[]> | ko.Computed<IAction<any>[]>;
	    groupActions: ko.Computed<IGroupedItem<IAction<any>>[]> | ko.Observable<IGroupedItem<IAction<any>>[]>;
	    createDefaultActions(editableObj: any, undoEngine: any): void;
	    createDefaultGroupAction(editableObj: any, undoEngine: any): void;
	    generate(): {};
	}
	export class DragDropSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _model;
	    private _dragHelperContent;
	    private _dragDropStarted;
	    dragHelperContent: DragHelperContent;
	    dragDropStarted: boolean | ko.Observable<boolean>;
	    addDragDropHandler(propertyName: string, handler: DragDropHandler): void;
	    generate(): {};
	}
	export class ControlsHelperSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _selection;
	    private _context;
	    private _model;
	    private controlsHelper;
	    constructor(_selection: SurfaceSelection, _context: IDesignerContext);
	    generate(): {};
	    addControlsHelper(helper?: IDesignControlsHelper): this;
	    addControlsStore(store?: ControlsStore): this;
	}
	export class MenuSettings extends Disposable implements IDesingerGeneratorSettings {
	    generate(): {};
	    private _appMenuVisible;
	    toggleAppMenu: () => void;
	    stopPropagation: boolean;
	    getMenuPopupContainer: (el: HTMLElement) => JQuery<Element>;
	    getMenuPopupTarget: (el: HTMLElement) => JQuery<Element>;
	    appMenuVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class SelectionSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _selection;
	    private _snapHelper;
	    private _editableObject;
	    private _dragDropSettings;
	    private _resizeSettings;
	    dispose(): void;
	    selection: SurfaceSelection;
	    snapHelper: SnapLinesHelper;
	    editableObject: any;
	    addDragDrop(func: (settings: DragDropSettings) => void): void;
	    addResize(func: (settings: ResizeSettings) => void): void;
	    generate(): any;
	}
	export class CommonDesignerGenerator<T extends IDesignerModel> extends Disposable {
	    private _context?;
	    private _rtl?;
	    private _model;
	    private _selectionSettings;
	    private _createPopularProperties;
	    private _resetModel;
	    protected rtl: boolean;
	    dispose(): void;
	    constructor(_context?: IDesignerContext, _rtl?: boolean);
	    initializeContext(context: IDesignerContext): this;
	    getPropertyByName<T>(propertyName: string): T;
	    addElement(propertyName: string, elementFunc: () => any): this;
	    mapOnContext(): this;
	    addSelection(func: (settings: SelectionSettings) => void): this;
	    addPropertyGrid(propertyGrid?: () => ObjectProperties, propertyName?: string): this;
	    addControlProperties(editors: any, groups: GroupObject, groupLocalizationIDs: any, accessibilityProvider?: IPropertiesAccessibilityProvider): this;
	    createControlProperties(editors: any, groups: GroupObject, accessibilityProvider?: IPropertiesAccessibilityProvider): ControlProperties;
	    addPopularProperties(controlsFactory: any, accessibilityProvider?: IPropertiesAccessibilityProvider): this;
	    addToolboxItems(items?: () => ToolboxItem[]): this;
	    addGroupedToolboxItems(): this;
	    addTabPanel(panel?: () => TabPanel, addTabInfo?: () => TabInfo[]): this;
	    addIsLoading(isLoadingFunc?: () => ko.Observable<boolean>): this;
	    addControlsHelper(func: (settings: ControlsHelperSettings) => void): this;
	    addMenu(func: (settings: MenuSettings) => void): this;
	    addContextActions(func: (contextActions: ContextActionsSettings) => void): this;
	    addParts(func?: (parts: any) => IDesignerPart[], useDefaults?: boolean): this;
	    getModel(): T;
	    addActionList(actionListsFunc?: () => ActionLists): this;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {

	export var availableFonts: ko.Observable<{
	    [key: string]: string;
	}>;

}
declare module DevExpress.Analytics.Internal {

    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import DesignControlsHelper = DevExpress.Analytics.Internal.DesignControlsHelper;;
    import IDesignerPart = DevExpress.Analytics.Internal.IDesignerPart;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;
    import SnapLinesCollector = DevExpress.Analytics.Internal.SnapLinesCollector;;
    import IDesignerModel = DevExpress.Analytics.Internal.IDesignerModel;;
	export function createDesigner(model: ko.Observable | ko.Computed, surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, controlsFactory: ControlsFactory, groups?: GroupObject, editors?: ISerializationInfoArray, parts?: IDesignerPart[], rtl?: boolean, selection?: SurfaceSelection, designControlsHelper?: DesignControlsHelper, undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, customMerge?: any, snapLinesCollector?: SnapLinesCollector, groupLocalizationIDs?: {
	    [key: string]: string;
	}): IDesignerModel;

}
declare module DevExpress.Analytics.Internal {

    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
	export interface IDataSourceInfo {
	    name: string;
	    specifics?: string;
	    id?: string;
	    ref?: string;
	    data: any;
	    dataSerializer?: string;
	    isSqlDataSource?: boolean;
	    isJsonDataSource?: boolean;
	    isObjectDataSource?: boolean;
	}
	export interface IItemsExtender {
	    beforeItemsFilled: (request: IPathRequest, items: IDataMemberInfo[]) => boolean;
	    afterItemsFilled?: (request: IPathRequest, items: IDataMemberInfo[]) => void;
	}
	export class FieldListProvider implements IItemsProvider {
	    private _extenders;
	    private _patchRequest;
	    private _beforeFieldListCallback;
	    private _afterFieldListCallBack;
	    constructor(fieldListCallback: (pathRequest: IPathRequest) => JQueryPromise<IDataMemberInfo[]>, rootItems: ko.ObservableArray<IDataSourceInfo>, extenders?: IItemsExtender[]);
	    getItems: (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	}

}
declare module DevExpress.Analytics.Utils {

	export function floatFromModel(val: string): ko.Observable<number>;
	export function fromEnum(value: string): ko.Observable<string>;
	export function parseBool(val: any): ko.Observable<any>;
	export function colorFromString(val: string): ko.Observable<string>;
	export function saveAsInt(val: number): string;
	export function colorToInt(color: string): number;
	export function intToColor(color: number, hasAlpha?: boolean): string;
	export function colorToString(val: string): string;

}
declare module DevExpress.Analytics.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export function _getSuper(object: any): any;
	export class _dxtInherit {
	    $element: any;
	    [name: string]: any;
	    _isInitialized: boolean;
	    _disposableObj: Disposable;
	    _options: any;
	    ctor($element: any, _options: any): void;
	    updateOptions(_options: any): void;
	    constructor($element: any, _accessor: () => any);
	    getComponentName(): any;
	    bind(): any;
	}
	export function _registerDxtComponent(bindingName: string, type: any): void;

}
declare module DevExpress.Analytics.Internal {

    import _dxtInherit = DevExpress.Analytics.Internal._dxtInherit;;
	export class dxButtonWithTemplate extends _dxtInherit {
	    updateOptions(options: any): void;
	    _patchOptionValues(options: any): any;
	    getComponentName(): string;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
    import ITreeListController = DevExpress.Analytics.Widgets.Internal.ITreeListController;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export class DataMemberTreeListController implements ITreeListController {
	    dispose(): void;
	    itemsFilter(item: IDataMemberInfo): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	    canSelect(value: TreeListItemViewModel): boolean;
	    select(value: TreeListItemViewModel): void;
	    selectedItem: any;
	    suppressActions: boolean;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {


    import _dxtInherit = DevExpress.Analytics.Internal._dxtInherit;;
	export class dxFieldListPicker extends _dxtInherit {
	    _path: ko.Observable<string>;
	    _value: ko.Observable<string>;
	    _parentViewport: JQuery<Element>;
	    _itemsProvider: ko.Observable<any>;
	    _hasDisplayNameOption: boolean;
	    _defaultPosition: any;
	    updateOptions(options: any): void;
	    ctor($element: any, options: any): void;
	    _showDropDown(): void;
	    _getMaxHeight(): number;
	    _closeOutsideDropDownHandler(e: any, ignoreContainerClicks: any): void;
	    _hideOnBlur(): boolean;
	    _popupConfig(): any;
	    _setTitle(text: string): void;
	    _renderDisplayText(newValue: any): void;
	    _optionChanged(args: {
	        name: string;
	        value: any;
	    }): void;
	    _clearValueHandler(): void;
	    _renderPopupContent(): void;
	    getComponentName(): string;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class RequiredNullableEditor extends Editor {
	    _getEditorValidationRules(): any[];
	}
	export function createNumericEditor(dotNetTypeFullName: string, specifics: string): {
	    header: string;
	    editorType: any;
	};

}
declare module DevExpress.Analytics.Widgets {

    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export class ColorPickerEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    displayValue: ko.Computed<string>;
	}

}
declare module DevExpress.Analytics.Widgets {

    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;;
	export class FieldListEditor extends Editor {
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    path: ko.PureComputed<any>;
	    treeListController: TreeListController;
	}

}
declare module DevExpress.Analytics.Widgets {

    import FieldListEditor = DevExpress.Analytics.Widgets.FieldListEditor;;
    import DataMemberTreeListController = DevExpress.Analytics.Widgets.Internal.DataMemberTreeListController;;
	export class DataMemberEditor extends FieldListEditor {
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    treeListController: DataMemberTreeListController;
	}

}
declare module DevExpress.Analytics.Widgets {
    import Editor = DevExpress.Analytics.Widgets.Editor;;
	export class GuidEditor extends Editor {
	    _getEditorValidationRules(): any[];
	}

}
declare module DevExpress.Analytics.Widgets {
	export function registerDesignerEditors(): void;

}
declare module DevExpress.Analytics.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class BordersModel extends Disposable {
	    private _setAllValues;
	    setValue(name: any): void;
	    setAll(): void;
	    setNone(): void;
	    updateModel(value: string): void;
	    updateValue(): void;
	    constructor(object: {
	        value: ko.Observable<string>;
	        disabled?: ko.Observable<boolean>;
	    });
	    value: ko.Observable<string> | ko.Computed<string>;
	    left: ko.Observable<boolean>;
	    right: ko.Observable<boolean>;
	    top: ko.Observable<boolean>;
	    bottom: ko.Observable<boolean>;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	}

}
declare module DevExpress.Analytics.Internal {
	export {};

}
declare module DevExpress.Analytics.Widgets.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class TextAlignmentModel extends Disposable {
	    private _resetHorizontalValues;
	    private _resetVerticalValues;
	    setValue(name: any, type: any): void;
	    updateModel(value: string): void;
	    updateValue(): void;
	    constructor(object: {
	        value: ko.Observable<string>;
	        disabled?: ko.Observable<boolean>;
	    });
	    value: ko.Observable<string> | ko.Computed<string>;
	    top: ko.Observable<boolean>;
	    middle: ko.Observable<boolean>;
	    bottom: ko.Observable<boolean>;
	    left: ko.Observable<boolean>;
	    right: ko.Observable<boolean>;
	    center: ko.Observable<boolean>;
	    justify: ko.Observable<boolean>;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    horizontalString: ko.Observable<string>;
	    verticalString: ko.Observable<string>;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
	export {};

}
declare module DevExpress.Analytics.Internal {
	export {};

}
declare module DevExpress.Analytics.Widgets {
	export {};

}
declare module DevExpress.Analytics.Internal {
	export var StringId: {
	    MasterDetailRelationsEditor: string;
	    DataAccessBtnOK: string;
	    DataAccessBtnCancel: string;
	    DataSourceWizardTitle: string;
	    WizardPageConfigureQuery: string;
	};

}
declare module DevExpress.Analytics.Localization {
	export function loadMessages(messages: {
	    [key: string]: string;
	}): void;

}
declare module DevExpress.Analytics.Widgets.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export var availableUnits: {
	    value: string;
	    displayValue: string;
	    localizationId: string;
	}[];
	export class FontModel extends Disposable {
	    private _toString;
	    updateModel(value: string): void;
	    updateValue(value: any): void;
	    constructor(value: ko.Observable<string> | ko.Computed<string>);
	    family: ko.Observable<any>;
	    unit: ko.Observable<any>;
	    isUpdateModel: boolean;
	    size: ko.Observable<any>;
	    modificators: {
	        bold: ko.Observable<boolean>;
	        italic: ko.Observable<boolean>;
	        strikeout: ko.Observable<boolean>;
	        underline: ko.Observable<boolean>;
	    };
	}

}
declare module DevExpress.Analytics.Widgets.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var fontName: ISerializationInfo;
	export var fontSize: ISerializationInfo;
	export var fontSizeUnit: ISerializationInfo;
	export var fontInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Widgets {

    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import PropertyGridEditor = DevExpress.Analytics.Widgets.PropertyGridEditor;;
	export class FontEditor extends PropertyGridEditor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    createObjectProperties(): ObjectProperties;
	}

}
declare module DevExpress.Analytics.Widgets {
	export function registerBaseEditors(): void;

}
declare module DevExpress.Analytics.Internal {
    import AccessibilityControlElementBase = DevExpress.Analytics.Internal.AccessibilityControlElementBase;;
	export class ControlElementWithParentHighlight extends AccessibilityControlElementBase {
	    element: HTMLElement;
	    private _parentElement;
	    private _borderCssClassName;
	    dispose(): void;
	    toolbarItemHandleFocus: () => void;
	    toolbarItemHandleBlur: () => void;
	    constructor(element: HTMLElement, _parentElement: Element);
	}

}
declare module DevExpress.Analytics.Internal {
    import AccessibilityKeyboardHelperBase = DevExpress.Analytics.Internal.AccessibilityKeyboardHelperBase;;
	export class KeyboardHelperWithArrowButtonBase extends AccessibilityKeyboardHelperBase {
	    resetTabIndexes(): void;
	    initialize(): void;
	    changeFocus(index: number, roundTrip?: boolean): number;
	    startIndex: number;
	}

}
declare module DevExpress.Analytics.Internal {
    import AccessibilityControlElementBase = DevExpress.Analytics.Internal.AccessibilityControlElementBase;;
    import KeyboardHelperWithArrowButtonBase = DevExpress.Analytics.Internal.KeyboardHelperWithArrowButtonBase;;
	export class ListKeyboardHelper extends KeyboardHelperWithArrowButtonBase {
	    controlElementClassName: string;
	    createControlElement(element: HTMLElement, index?: number): AccessibilityControlElementBase;
	    itemHandleUpArrowKey(e: any, index?: any): boolean;
	    itemHandleDownArrowKey(e: any, index?: any): boolean;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IUndoEngine = DevExpress.Analytics.Internal.IUndoEngine;
    import ILocalizationInfo = DevExpress.Analytics.Internal.ILocalizationInfo;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import ListKeyboardHelper = DevExpress.Analytics.Internal.ListKeyboardHelper;;
	export class CollectionItemWrapper extends Disposable {
	    constructor(editor: any, array: any, index: ko.Observable<number> | ko.Computed<number>, displayNameField?: string);
	    editor: any;
	    index: ko.Observable<number> | ko.Computed<number>;
	    value: ko.Observable | ko.Computed;
	    collapsed: ko.Observable<boolean> | ko.Computed<boolean>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export interface ICollectionEditorOptions {
	    values: ko.Observable<ko.ObservableArray<any>> | ko.Computed<ko.ObservableArray<any>>;
	    addHandler: () => any;
	    displayName?: string;
	    displayPropertyName?: string;
	    hideButtons?: any;
	    showScroll?: boolean;
	    selectedItem?: ko.Observable<any>;
	    collapsed?: boolean;
	    alwaysShow?: boolean;
	    undoEngine?: ko.Observable<IUndoEngine> | ko.Computed<IUndoEngine>;
	    level?: number;
	    info?: ko.Observable<ISerializationInfo> | ko.Computed<ISerializationInfo>;
	    template?: string;
	    editorTemplate?: string;
	    textEmptyArray?: ILocalizationInfo;
	    isVisibleButton?: (index: any, buttonName: any) => boolean;
	    isDisabledButton?: (index: any, buttonName: any) => boolean;
	}
	export class CollectionEditorViewModel extends Disposable {
	    dispose(): void;
	    private _textEmptyArray;
	    private _timeoutItemRendered;
	    private _move;
	    private _setSelectedIndex;
	    options: any;
	    displayPropertyName: string;
	    showScroll: boolean;
	    constructor(options: ICollectionEditorOptions, disabled?: ko.Observable<boolean>);
	    getDisplayTextButton(key: string): any;
	    getDisplayTextEmptyArray(): any;
	    createCollectionItemWrapper(grandfather: any, index: any, element: any): CollectionItemWrapper;
	    buttonMap: {
	        [keyname: string]: ILocalizationInfo;
	    };
	    isVisibleButton: (buttonName: any) => boolean;
	    isDisabledButton: (buttonName: any) => boolean;
	    listKeyboardHelper: ListKeyboardHelper;
	    padding: number;
	    values: ko.Observable<any[]> | ko.Computed<any[]>;
	    add: (model: any) => void;
	    up: (model: any) => void;
	    down: (model: any) => void;
	    remove: (model: any) => void;
	    select: (event: any, force?: boolean) => void;
	    selectedIndex: ko.Observable<number>;
	    collapsed: ko.Observable<boolean> | ko.Computed<boolean>;
	    displayName: string;
	    alwaysShow: ko.Observable<boolean>;
	    showButtons: ko.Computed<boolean>;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
	export {};

}
declare module DevExpress.Analytics.Widgets.Internal {

    import _dxtInherit = DevExpress.Analytics.Internal._dxtInherit;;
	export class dxEllipsisEditor extends _dxtInherit {
	    _$button: JQuery<HTMLElement>;
	    _$buttonIcon: JQuery<HTMLElement>;
	    _$element: JQuery<HTMLElement>;
	    _modelByElement: any;
	    _koContext: any;
	    _$input: JQuery<HTMLElement>;
	    _init(): void;
	    _render(): void;
	    _updateWarningState(value?: any): void;
	    _renderButton(): void;
	    _updateButtonSize(): void;
	    _attachButtonEvents(): void;
	    _attachInputEvents(): void;
	    _optionChanged(args: {
	        name: string;
	        value: any;
	    }): void;
	    buttonAction(e: any): void;
	    getComponentName(): string;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
    import dxEllipsisEditor = DevExpress.Analytics.Widgets.Internal.dxEllipsisEditor;;
    import IFileUploadResult = DevExpress.Analytics.Internal.IFileUploadResult;;
	export class dxFileImagePicker extends dxEllipsisEditor {
	    updateOptions(options: any): void;
	    _getDisplayValue(): any;
	    _handleResult(result: IFileUploadResult): void;
	    _renderInput(inputContainer: any): void;
	    _attachButtonEvents(): void;
	    _renderValue(): void;
	}

}
declare module DevExpress.Analytics.Data {
	export enum DBColumnType {
	    Unknown = 0,
	    Boolean = 1,
	    Byte = 2,
	    SByte = 3,
	    Char = 4,
	    Decimal = 5,
	    Double = 6,
	    Single = 7,
	    Int32 = 8,
	    UInt32 = 9,
	    Int16 = 10,
	    UInt16 = 11,
	    Int64 = 12,
	    UInt64 = 13,
	    String = 14,
	    DateTime = 15,
	    Guid = 16,
	    TimeSpan = 17,
	    ByteArray = 18
	}
	export class DBColumn {
	    name: string;
	    type: DBColumnType;
	    size: string;
	    constructor(model: any);
	    static GetType(dbColumnType: DBColumnType): "System.SByte" | "System.Decimal" | "System.Int64" | "System.Int32" | "System.Int16" | "System.Single" | "System.Double" | "System.Byte" | "System.UInt16" | "System.UInt32" | "System.UInt64" | "System.Boolean" | "System.Char" | "System.String" | "System.DateTime" | "System.Guid" | "System.TimeSpan" | "System.Byte[]" | "System.Object";
	    static GetSpecific(type: string): "String" | "Date" | "Bool" | "Integer" | "Float";
	}

}
declare module DevExpress.Analytics.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var dsParameterNameValidationRules: Array<any>;
	export var parameterValueSerializationsInfo: {
	    propertyName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	};
	export var dsParameterSerializationInfo: ISerializationInfoArray;
	export function storedProcParameterSerializationsInfo(type: string): any[];

}
declare module DevExpress.Analytics.Widgets.Internal {
	export interface IExpressionEditorItem {
	    text: string;
	    description?: string;
	    descriptionStringId?: string;
	}
	export interface IExpressionEditorOperatorItem extends IExpressionEditorItem {
	    image?: string;
	    hasSeparator?: boolean;
	}
	export var operatorNames: Array<IExpressionEditorOperatorItem>;

}
declare module DevExpress.Analytics.Widgets.Internal {
    import IExpressionEditorItem = DevExpress.Analytics.Widgets.Internal.IExpressionEditorItem;;
	export interface IExpressionEditorFunctionItem extends IExpressionEditorItem {
	    paramCount: number;
	    displayName?: string;
	}
	export interface IExpressionEditorFunction {
	    display: string;
	    localizationId?: string;
	    items?: {
	        [key: string]: Array<IExpressionEditorFunctionItem>;
	    };
	    category?: string;
	}
	export var functionDisplay: (newVal?: IExpressionEditorFunction[]) => IExpressionEditorFunction[];
	export var resetFunctionDisplay: () => IExpressionEditorFunction[];
	export function insertInFunctionDisplay(addins: any | Array<IExpressionEditorFunction>): Array<IExpressionEditorFunction>;

}
declare module DevExpress.Analytics.Utils {
	export interface IDisplayExpressionConverter {
	    toDisplayExpression(path: string, expression: string): JQueryPromise<string>;
	    toRealExpression(path: string, expression: string): JQueryPromise<string>;
	}
	export interface IDisplayNameProvider {
	    getDisplayNameByPath: (path: string, dataMember: string) => JQueryPromise<string>;
	    getRealName: (path: string, displayDataMember: string) => JQueryPromise<string>;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {

    import IDisplayExpressionConverter = DevExpress.Analytics.Utils.IDisplayExpressionConverter;;
	export var RangeSpecific: string;
	export function createExpressionEditorCollectionToolOptions(collectionItems: any, toolName: string, displayToolName: string, showDescription: boolean): {
	    displayName: any;
	    content: {
	        showDescription: boolean;
	        isSelected: ko.Observable<boolean>;
	        data: {
	            items: any;
	            selectedItem: ko.Observable<any>;
	        };
	        name: string;
	    };
	    dispose: () => any;
	};
	export function wrapExpressionValue(path: ko.Observable<string> | ko.Computed<string>, value: ko.Observable<string> | ko.Computed<string>, converter: IDisplayExpressionConverter, subscriptions: any): ko.Observable<string> | ko.Computed<string>;

}
declare module DevExpress.Analytics.Widgets.Internal {

    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import IExpressionEditorFunction = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction;
    import IExpressionEditorFunctionItem = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunctionItem;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface ICompletionRootItem {
	    name: string;
	    needPrefix?: boolean;
	    rootPath?: string;
	}
	export interface ICodeCompletorOptions {
	    editor: any;
	    bindingContext: any;
	    fieldListProvider: IItemsProvider;
	    path: ko.Observable<string> | ko.Computed<string>;
	    functions?: Array<IExpressionEditorFunction> | ko.ObservableArray<IExpressionEditorFunction>;
	    rootItems?: Array<ICompletionRootItem>;
	    getRealExpression?: (path: string, member: string) => JQueryPromise<string>;
	}
	export class CodeCompletor extends Disposable {
	    private _options;
	    private _fieldListProvider;
	    private _path;
	    private _editor;
	    private _contextPath;
	    private _functions;
	    private _rootItems;
	    private _isInContext;
	    private _getPath;
	    private _previousSymbol;
	    beforeInsertMatch(editor: any, token: any, parentPrefix: any): void;
	    insertMatch(editor: any, parentPrefix: any, fieldName: any): void;
	    generateFieldDisplayName(parentPrefix: any, displayName: any): string;
	    private _convertDataMemberInfoToCompletions;
	    private _combinePath;
	    private _getParentPrefix;
	    private _getRealPath;
	    private _getFields;
	    private static _cleanupFields;
	    private _processFields;
	    getFunctionsCompletions(): any[];
	    getAggregateCompletions(): any[];
	    getOperatorCompletions(prefix: any): {
	        caption: string;
	        snippet: string;
	        meta: any;
	    }[];
	    private _addFunctions;
	    private _addAggregates;
	    private _addOperators;
	    private _addParameterOperators;
	    private _getOperands;
	    private _getOperandsOrOperators;
	    private _findStartContextTokenPosition;
	    private _findOpenedStartContext;
	    private _findOpenedAggregates;
	    private _getContextPath;
	    private _getCompletions;
	    defaultProcess(token: any, text: any, completions: any): JQuery.Promise<any, any, any>;
	    constructor(_options: ICodeCompletorOptions);
	    identifierRegexps: RegExp[];
	    getCompletions(aceEditor: any, session: any, pos: any, prefix: any, callback: any): void;
	    getDocTooltip(item: any): void;
	}
	export function createFunctionCompletion(fnInfo: IExpressionEditorFunctionItem, name: string, insertValue?: string): {
	    caption: string;
	    snippet: string;
	    meta: any;
	    tooltip: any;
	    score: number;
	    completer: {
	        insertMatch: (editor: any, data: any) => void;
	    };
	};
	export function trimBrackets(value: string): string;

}
declare module DevExpress.Analytics.Widgets.Internal {
    import GroupOperator = DevExpress.Analytics.Criteria.GroupOperator;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import AggregateOperand = DevExpress.Analytics.Criteria.AggregateOperand;;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;;
    import OperandValue = DevExpress.Analytics.Criteria.OperandValue;;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;;
    import BetweenOperator = DevExpress.Analytics.Criteria.BetweenOperator;;
    import InOperator = DevExpress.Analytics.Criteria.InOperator;;
    import BinaryOperator = DevExpress.Analytics.Criteria.BinaryOperator;;
    import UnaryOperator = DevExpress.Analytics.Criteria.UnaryOperator;;
    import FunctionOperator = DevExpress.Analytics.Criteria.FunctionOperator;;
	export class FilterEditorSerializer {
	    operatorTokens: {
	        'Plus': string;
	        'Minus': string;
	        'Equal': string;
	        'NotEqual': string;
	        'Greater': string;
	        'Less': string;
	        'LessOrEqual': string;
	        'GreaterOrEqual': string;
	    };
	    custom?: (criteriaOperator: CriteriaOperator, reverse: boolean) => string;
	    serializeGroupOperand(groupOperator: GroupOperator, reverse: boolean): any;
	    serializeAggregateOperand(aggregateOperand: AggregateOperand, reverse: boolean): any;
	    serializeOperandProperty(operandProperty: OperandProperty): string;
	    serializeOperandValue(operandValue: OperandValue): any;
	    serializeOperandParameter(operandParameter: OperandParameter): string;
	    serializeBetweenOperator(betweenOperator: BetweenOperator, reverse: boolean): any;
	    serializeInOperator(inOperator: InOperator, reverse: boolean): any;
	    serializeBinaryOperator(binaryOperator: BinaryOperator, reverse: boolean): any;
	    serializeUnaryOperator(unaryOperator: UnaryOperator, reverse: boolean): any;
	    serializeFunctionOperator(functionOperator: FunctionOperator, reverse: boolean): any;
	    constructor(operatorTokens?: {
	        'Plus': string;
	        'Minus': string;
	        'Equal': string;
	        'NotEqual': string;
	        'Greater': string;
	        'Less': string;
	        'LessOrEqual': string;
	        'GreaterOrEqual': string;
	    }, custom?: (criteriaOperator: CriteriaOperator, reverse: boolean) => string);
	    serialize(criteriaOperator: CriteriaOperator, reverse?: boolean): any;
	    deserialize(stringCriteria: string): CriteriaOperator;
	    deserializeOperand(operand: CriteriaOperator): CriteriaOperator;
	}

}
declare module DevExpress.Analytics.Internal {
    import IDisplayExpressionConverter = DevExpress.Analytics.Utils.IDisplayExpressionConverter;
    import IDisplayNameProvider = DevExpress.Analytics.Utils.IDisplayNameProvider;;
	export class DisplayExpressionConverter implements IDisplayExpressionConverter {
	    private displayNameProvider;
	    private _replaceNames;
	    constructor(displayNameProvider: IDisplayNameProvider);
	    toDisplayExpression(path: string, expression: string): JQueryPromise<string>;
	    toRealExpression(path: string, expression: string): JQuery.Promise<any, any, any>;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
	export class ExpressionEditorTreeListController extends TreeListController {
	    fieldName: any;
	    putSelectionHandler: (item: TreeListItemViewModel, element: any) => void;
	    selectionHandler?: (item: TreeListItemViewModel) => void;
	    constructor(fieldName: any, putSelectionHandler: (item: TreeListItemViewModel, element: any) => void, selectionHandler?: (item: TreeListItemViewModel) => void);
	    itemsFilter(item: IDataMemberInfo): boolean;
	    select(value: TreeListItemViewModel): void;
	    getActions(item: TreeListItemViewModel): {
	        clickAction: (element: any) => void;
	    }[];
	    canSelect(value: TreeListItemViewModel): boolean;
	}
	export class ExpressionEditorParametersTreeListController extends TreeListController {
	    customFilter: (item: IDataMemberInfo) => boolean;
	    putSelectionHandler: (selectedItemPath: string, element: any) => void;
	    selectionHandler?: (item: TreeListItemViewModel) => void;
	    constructor(customFilter: (item: IDataMemberInfo) => boolean, putSelectionHandler: (selectedItemPath: string, element: any) => void, selectionHandler?: (item: TreeListItemViewModel) => void);
	    itemsFilter(item: IDataMemberInfo): boolean;
	    select(value: TreeListItemViewModel): void;
	    getActions(item: TreeListItemViewModel): {
	        clickAction: (element: any) => void;
	    }[];
	    canSelect(value: TreeListItemViewModel): boolean;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {

    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;;
	export interface IExpressionEditorContent {
	    data: any;
	    name: string;
	    isSelected: ko.Observable<boolean> | ko.Computed<boolean>;
	    showDescription: boolean;
	}
	export interface IExpressionEditorCategory extends IDisposable {
	    displayName: string;
	    collapsed?: ko.Observable<boolean> | ko.Computed<boolean>;
	    content?: IExpressionEditorContent;
	    items?: ko.Observable<IExpressionEditorContent[]> | ko.Computed<IExpressionEditorContent[]>;
	    templateName?: string;
	}
	export class Tools extends Disposable {
	    private _defaultClick;
	    searchPlaceholder: () => any;
	    private _generateTab;
	    private _localizedExpressionEditorItem;
	    private _initDescription;
	    private _createFieldsCategory;
	    private _createConstantCategory;
	    private _createOperatorsCategory;
	    private _createFunctionsCategoryContent;
	    private _createFunctionsCategoryItem;
	    private _createFunctionsCategory;
	    private _disposeCategories;
	    constructor(onClick: (item: any, element: any) => void, parametersOptions: any, options: ko.Observable<IExpressionOptions> | ko.Computed<IExpressionOptions>, fieldListOptions?: any);
	    dispose(): void;
	    resetCategoriesSelection: () => void;
	    private _categories;
	    showDescription: ko.Observable<boolean> | ko.Computed<boolean>;
	    toolBox: any[];
	    description: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
	export var aceAvailable: (newVal?: boolean) => boolean;

}
declare module DevExpress.Analytics.Widgets {

    import IExpressionEditorFunction = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction;;
    import ICompletionRootItem = DevExpress.Analytics.Widgets.Internal.ICompletionRootItem;
    import CodeCompletor = DevExpress.Analytics.Widgets.Internal.CodeCompletor;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import getParentContainer = DevExpress.Analytics.Internal.getParentContainer;;
    import IDisplayNameProvider = DevExpress.Analytics.Utils.IDisplayNameProvider;;
    import DisplayExpressionConverter = DevExpress.Analytics.Internal.DisplayExpressionConverter;;
    import ExpressionEditorParametersTreeListController = DevExpress.Analytics.Widgets.Internal.ExpressionEditorParametersTreeListController;;
    import Tools = DevExpress.Analytics.Widgets.Internal.Tools;;
	export interface IExpressionOptions {
	    value: ko.Observable<string> | ko.Computed<string>;
	    path?: ko.Observable<string> | ko.Computed<string>;
	    fieldName?: ko.Observable<string> | ko.Computed<string>;
	    theme?: string;
	    patchFieldName?: (fieldName: string) => string;
	    functions?: Array<IExpressionEditorFunction>;
	    rootItems?: Array<ICompletionRootItem>;
	    customizeCategories?: (sender: any, categories: any, dblclick?: any) => void;
	    validate?: (criteria: CriteriaOperator) => boolean;
	    isValid?: ko.Observable<boolean> | ko.Computed<boolean>;
	    warningMessage?: ko.Observable<string> | ko.Computed<string>;
	    onHiding?: (e: any) => void;
	    onShowing?: (e: any) => void;
	}
	export class ExpressionEditor extends Disposable {
	    private options;
	    private _displayNameProvider?;
	    popupVisible: ko.Observable<boolean>;
	    dispose(): void;
	    private _createMainPopupButtons;
	    private _getTextArea;
	    private _updateTextAreaValue;
	    private _updateAceValue;
	    private _updateValue;
	    private patchFieldName;
	    private _parametersPutSelectionHandler;
	    private _fieldsPutSelectionHandler;
	    private _createToolsOptions;
	    private _parametersCustomFilter;
	    constructor(options: IExpressionOptions, fieldListProvider: ko.Observable<IItemsProvider> | ko.Computed<IItemsProvider>, disabled?: ko.Observable<boolean> | ko.Computed<boolean>, rtl?: boolean, _displayNameProvider?: IDisplayNameProvider, popupVisible?: ko.Observable<boolean>);
	    displayExpressionConverter: DisplayExpressionConverter;
	    aceAvailable: boolean;
	    tools: Tools;
	    displayValue: ko.Observable<string> | ko.Computed<string>;
	    title: () => any;
	    value: ko.Observable<string> | ko.Computed<string>;
	    textAreaValue: ko.Observable<string>;
	    theme: string;
	    languageHelper: {
	        getLanguageMode: () => string;
	        createCompleters: (editor: any, bindingContext: any, viewModel: ExpressionEditor) => CodeCompletor[];
	    };
	    aceOptions: {
	        showLineNumbers: boolean;
	        showPrintMargin: boolean;
	        enableBasicAutocompletion: boolean;
	        enableLiveAutocompletion: boolean;
	        showFoldWidgets: boolean;
	        highlightActiveLine: boolean;
	    };
	    additionalOptions: {
	        onChange: (session: any) => void;
	    };
	    callbacks: {
	        focus: () => undefined;
	    };
	    koOptions: ko.Observable<IExpressionOptions> | ko.Computed<IExpressionOptions>;
	    editorContainer: ko.Observable<any> | ko.Computed<any>;
	    fieldListProvider: ko.Observable<IItemsProvider> | ko.Computed<IItemsProvider>;
	    parametersTreeListController: ExpressionEditorParametersTreeListController;
	    save: (sender: any) => void;
	    isValid: ko.Observable<boolean> | ko.Computed<boolean>;
	    buttonItems: any[];
	    rtl: boolean;
	    modelValueValid: ko.Computed<boolean>;
	    modelValueWarning: ko.Computed<string>;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    onShown(): void;
	    onHiding(e: any): void;
	    onShowing(e: any): void;
	    initDisplayValue(): void;
	    getValue(): string;
	    validate: (value: any, sender?: any) => boolean;
	    getPopupContainer: typeof getParentContainer;
	}

}
declare module DevExpress.QueryBuilder.Widgets {
    import IExpressionEditorFunction = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction;;
	export var expressionFunctions: IExpressionEditorFunction[];

}
declare module DevExpress.Analytics.Data {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class DataSourceParameter extends Disposable implements ISerializableModel {
	    private _serializationsInfo;
	    private _name;
	    static _typeValues: any[];
	    static _getTypeValue(typeName: string, resultType?: string): any;
	    private _getTypeValue;
	    private _tryConvertValue;
	    private static _isValueValid;
	    getEditorType(type: any): {
	        header?: any;
	        content?: any;
	        custom?: any;
	    };
	    private _updateValueInfo;
	    private _valueInfo;
	    private _value;
	    private _expressionValue;
	    private _previousResultType;
	    private _parametersFunctions;
	    constructor(model: any, serializer?: IModelSerializer, _serializationsInfo?: ISerializationInfoArray);
	    readonly specifics: any;
	    static validateName(nameCandidate: string): boolean;
	    isValid: ko.Observable<boolean> | ko.Computed<boolean>;
	    name: ko.Computed<string>;
	    value: ko.Observable | ko.Computed;
	    type: ko.Observable<string> | ko.Computed<string>;
	    resultType: ko.Observable<string> | ko.Computed<string>;
	    getInfo(): ISerializationInfoArray;
	    isPropertyVisible(propName: string): boolean;
	}

}
declare module DevExpress.QueryBuilder.Elements {
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;;
	export class ParameterViewModel extends DataSourceParameter {
	    getEditorType(type: any): {
	        header?: any;
	        content?: any;
	        custom?: any;
	    };
	}

}
declare module DevExpress.QueryBuilder.Utils {
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;
	export var controlsFactory: ControlsFactory;

}
declare module DevExpress.QueryBuilder.Elements {
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import Size = DevExpress.Analytics.Elements.Size;;
    import Point = DevExpress.Analytics.Elements.Point;;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;
	export class QueryElementBaseViewModel extends ElementViewModel {
	    getControlFactory(): ControlsFactory;
	    constructor(control: any, parent: ElementViewModel, serializer?: IModelSerializer);
	    size: Size;
	    location: Point;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {
    import EditorTemplates = DevExpress.Analytics.Widgets.EditorTemplates;;
	export var editorTemplates: EditorTemplates<QueryBuilderEditors>;
	export {};

}
declare module DevExpress.QueryBuilder.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var name: ISerializationInfo;
	export var alias: ISerializationInfo;
	export var text: ISerializationInfo;
	export var selected: ISerializationInfo;
	export var size: ISerializationInfo;
	export var location: ISerializationInfo;
	export var sizeLocation: ISerializationInfoArray;
	export var unknownSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var AggregationType: {
	    None: string;
	    Count: string;
	    Max: string;
	    Min: string;
	    Avg: string;
	    Sum: string;
	    CountDistinct: string;
	    AvgDistinct: string;
	    SumDistinct: string;
	};
	export var columnSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Diagram {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var name: ISerializationInfo;
	export var text: ISerializationInfo;
	export var size: ISerializationInfo;
	export var location: ISerializationInfo;
	export var sizeLocation: ISerializationInfoArray;
	export var unknownSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Diagram {

    import DiagramElementBaseViewModel = DevExpress.Analytics.Diagram.DiagramElementBaseViewModel;
    import DiagramElementViewModel = DevExpress.Analytics.Diagram.DiagramElementViewModel;;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
	export class DiagramElementBaseSurface<M extends DiagramElementBaseViewModel> extends SurfaceElementBase<M> {
	    static _unitProperties: IUnitProperties<DiagramElementBaseViewModel>;
	    constructor(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>);
	    template: string;
	    selectiontemplate: string;
	    contenttemplate: string;
	    margin: ko.Observable<number>;
	    positionWidthWithoutMargins: ko.Computed<number>;
	    positionLineHeightWithoutMargins: ko.Computed<number>;
	}
	export class DiagramElementSurface extends DiagramElementBaseSurface<DiagramElementViewModel> {
	    constructor(control: DiagramElementViewModel, context: ISurfaceContext);
	    _getChildrenHolderName(): string;
	    contenttemplate: string;
	}

}
declare module DevExpress.Analytics.Diagram {

    import DiagramElementBaseViewModel = DevExpress.Analytics.Diagram.DiagramElementBaseViewModel;;
    import ConnectorViewModel = DevExpress.Analytics.Diagram.ConnectorViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import Point = DevExpress.Analytics.Elements.Point;;
    import IConnectingPoint = DevExpress.Analytics.Diagram.IConnectingPoint;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class ConnectionPointViewModel extends DiagramElementBaseViewModel {
	    constructor(control: any, parent: ConnectorViewModel, serializer?: ModelSerializer);
	    location: Point;
	    connectingPoint: ko.Observable<IConnectingPoint>;
	}
	export var connectionPointSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Diagram {

    import DiagramElementBaseViewModel = DevExpress.Analytics.Diagram.DiagramElementBaseViewModel;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import ConnectionPointViewModel = DevExpress.Analytics.Diagram.ConnectionPointViewModel;;
	export class ConnectorViewModel extends DiagramElementBaseViewModel {
	    static MIN_LINE_THICKNESS: number;
	    getX(): number;
	    getY(): number;
	    getWidth(): number;
	    getHeight(): number;
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    startPoint: ko.Observable<ConnectionPointViewModel> | ko.Computed<ConnectionPointViewModel>;
	    endPoint: ko.Observable<ConnectionPointViewModel> | ko.Computed<ConnectionPointViewModel>;
	}

}
declare module DevExpress.Analytics.Diagram {

    import DiagramElementBaseViewModel = DevExpress.Analytics.Diagram.DiagramElementBaseViewModel;
    import DiagramElementViewModel = DevExpress.Analytics.Diagram.DiagramElementViewModel;;
    import Margins = DevExpress.Analytics.Elements.Margins;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class DiagramViewModel extends DiagramElementBaseViewModel {
	    getInfo(): ISerializationInfoArray;
	    constructor(diagramSource: any);
	    controls: ko.ObservableArray<DiagramElementViewModel>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    pageWidth: ko.Observable<number> | ko.Computed<number>;
	    pageHeight: ko.Observable<number> | ko.Computed<number>;
	    margins: Margins;
	}
	export var margins: ISerializationInfo;
	export var pageWidth: ISerializationInfo;
	export var pageHeight: ISerializationInfo;
	export var diagramSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Diagram {

    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import DiagramViewModel = DevExpress.Analytics.Diagram.DiagramViewModel;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
    import DiagramElementSurface = DevExpress.Analytics.Diagram.DiagramElementSurface;;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;;
    import IMargins = DevExpress.Analytics.Elements.IMargins;;
	export class DiagramSurface extends SurfaceElementBase<DiagramViewModel> implements ISelectionTarget, ISurfaceContext {
	    static _unitProperties: IUnitProperties<DiagramViewModel>;
	    constructor(diagram: DiagramViewModel, zoom?: ko.Observable<number>);
	    measureUnit: ko.Observable<string>;
	    dpi: ko.Observable<number>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    controls: ko.ObservableArray<DiagramElementSurface>;
	    allowMultiselect: boolean;
	    focused: ko.Observable<boolean>;
	    selected: ko.Observable<boolean>;
	    underCursor: ko.Observable<IHoverInfo>;
	    checkParent(surfaceParent: ISelectionTarget): boolean;
	    parent: ISelectionTarget;
	    templateName: string;
	    getChildrenCollection(): ko.ObservableArray<any>;
	    margins: IMargins;
	}

}
declare module DevExpress.Analytics.Diagram {

    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ConnectionPointViewModel = DevExpress.Analytics.Diagram.ConnectionPointViewModel;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
    import DiagramSurface = DevExpress.Analytics.Diagram.DiagramSurface;;
	export class ConnectionPointSurface extends SurfaceElementBase<ConnectionPointViewModel> {
	    static _unitProperties: IUnitProperties<ConnectionPointViewModel>;
	    constructor(control: ConnectionPointViewModel, context: ISurfaceContext);
	    template: string;
	    selectiontemplate: string;
	    relativeX: ko.Observable<number> | ko.Computed<number>;
	    relativeY: ko.Observable<number> | ko.Computed<number>;
	    container(): DiagramSurface;
	}

}
declare module DevExpress.Analytics.Diagram {

    import DiagramElementBaseSurface = DevExpress.Analytics.Diagram.DiagramElementBaseSurface;;
    import ConnectorViewModel = DevExpress.Analytics.Diagram.ConnectorViewModel;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ConnectionPointSurface = DevExpress.Analytics.Diagram.ConnectionPointSurface;;
	export class ConnectorSurface extends DiagramElementBaseSurface<ConnectorViewModel> {
	    constructor(control: ConnectorViewModel, context: ISurfaceContext);
	    template: string;
	    selectiontemplate: string;
	    startPoint: ko.Observable<ConnectionPointSurface> | ko.Computed<ConnectionPointSurface>;
	    endPoint: ko.Observable<ConnectionPointSurface> | ko.Computed<ConnectionPointSurface>;
	}

}
declare module DevExpress.Analytics.Diagram {

    import ConnectorViewModel = DevExpress.Analytics.Diagram.ConnectorViewModel;;
    import IPoint = DevExpress.Analytics.Elements.IPoint;;
    import PointSide = DevExpress.Analytics.Diagram.PointSide;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
	export class RoutedConnectorViewModel extends ConnectorViewModel {
	    static GRID_SIZE: number;
	    private _isUpdating;
	    getX(): number;
	    getY(): number;
	    getWidth(): number;
	    getHeight(): number;
	    _fixPoint(point: IPoint, side: PointSide): void;
	    _getStartPointSide(): PointSide;
	    _getEndPointSide(): PointSide;
	    private _getPower;
	    private _getRatio;
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    seriesNumber: ko.Observable<number>;
	    routePoints: ko.Observable<IPoint[]>;
	    freezeRoute: ko.Observable<boolean>;
	    beginUpdate(): void;
	    endUpdate(): void;
	}

}
declare module DevExpress.Analytics.Diagram {

    import IPoint = DevExpress.Analytics.Elements.IPoint;;
    import DiagramElementBaseSurface = DevExpress.Analytics.Diagram.DiagramElementBaseSurface;;
    import RoutedConnectorViewModel = DevExpress.Analytics.Diagram.RoutedConnectorViewModel;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ConnectionPointSurface = DevExpress.Analytics.Diagram.ConnectionPointSurface;;
	export interface IRoutePoint {
	    x: ko.Observable<number> | ko.Computed<number>;
	    y: ko.Observable<number> | ko.Computed<number>;
	    modelPoint: IPoint;
	}
	export class RoutedConnectorSurface extends DiagramElementBaseSurface<RoutedConnectorViewModel> {
	    private static _connectorsCount;
	    private _connectorID;
	    private _createRoutePoint;
	    private _createRouteLineWrapper;
	    private _updateRoutePoints;
	    constructor(control: RoutedConnectorViewModel, context: ISurfaceContext);
	    template: string;
	    selectiontemplate: string;
	    startPoint: ko.Observable<ConnectionPointSurface> | ko.Computed<ConnectionPointSurface>;
	    endPoint: ko.Observable<ConnectionPointSurface> | ko.Computed<ConnectionPointSurface>;
	    showArrow: ko.Observable<boolean> | ko.Computed<boolean>;
	    isVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    routePoints: ko.ObservableArray<IRoutePoint>;
	    routePointsSet: ko.PureComputed<string>;
	    routeLineWrappers: ko.PureComputed<any[]>;
	    connectorID: () => number;
	}

}
declare module DevExpress.Analytics.Diagram {
    import DiagramElementBaseSurface = DevExpress.Analytics.Diagram.DiagramElementBaseSurface;;
    import ConnectingPointViewModel = DevExpress.Analytics.Diagram.ConnectingPointViewModel;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
	export class ConnectingPointSurface extends DiagramElementBaseSurface<ConnectingPointViewModel> {
	    static _unitProperties: IUnitProperties<ConnectingPointViewModel>;
	    constructor(control: ConnectingPointViewModel, context: ISurfaceContext);
	    template: string;
	    selectiontemplate: string;
	    contenttemplate: string;
	}

}
declare module DevExpress.Analytics.Diagram {
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;
	export var diagramControlsFactory: ControlsFactory;
	export function registerControls(): void;

}
declare module DevExpress.Analytics.Diagram {

    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import Size = DevExpress.Analytics.Elements.Size;;
    import Point = DevExpress.Analytics.Elements.Point;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class DiagramElementBaseViewModel extends ElementViewModel {
	    getControlFactory(): ControlsFactory;
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    size: Size;
	    location: Point;
	}
	export class DiagramElementViewModel extends DiagramElementBaseViewModel {
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    connectingPoints: ko.ObservableArray<ConnectingPointViewModel>;
	    text: ko.Observable<string> | ko.Computed<string>;
	    type: ko.Observable<string> | ko.Computed<string>;
	}
	export var diagramElementSerializationInfo: ISerializationInfoArray;
    import ConnectingPointViewModel = DevExpress.Analytics.Diagram.ConnectingPointViewModel;;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;

}
declare module DevExpress.Analytics.Diagram {

    import IPoint = DevExpress.Analytics.Elements.IPoint;;
    import PointSide = DevExpress.Analytics.Diagram.PointSide;;
    import DiagramElementBaseViewModel = DevExpress.Analytics.Diagram.DiagramElementBaseViewModel;
    import DiagramElementViewModel = DevExpress.Analytics.Diagram.DiagramElementViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export interface IConnectingPoint {
	    location: IPoint;
	    side: ko.Observable<PointSide> | ko.Computed<PointSide>;
	}
	export class ConnectingPointViewModel extends DiagramElementBaseViewModel implements IConnectingPoint {
	    constructor(control: any, parent: DiagramElementViewModel, serializer?: ModelSerializer);
	    percentOffsetX: ko.Observable<number> | ko.Computed<number>;
	    percentOffsetY: ko.Observable<number> | ko.Computed<number>;
	    side: ko.PureComputed<PointSide>;
	}
	export var connectingPointSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Diagram {
    import IConnectingPoint = DevExpress.Analytics.Diagram.IConnectingPoint;;
	export enum PointSide {
	    East = 0,
	    South = 1,
	    North = 2,
	    West = 3
	}
	export function determineConnectingPoints<T extends {
	    rightConnectionPoint: IConnectingPoint;
	    leftConnectionPoint: IConnectingPoint;
	}>(startObject: T, endObject: T): {
	    start: IConnectingPoint;
	    end: IConnectingPoint;
	};

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
	export var ColumnType: {
	    RecordsCount: string;
	    Column: string;
	    Expression: string;
	    AllColumns: string;
	};
	export var columnExpressionSerializationsInfo: ({
	    propertyName: string;
	    modelName: string;
	    defaultVal?: undefined;
	} | {
	    propertyName: string;
	    modelName: string;
	    defaultVal: string;
	} | {
	    propertyName: string;
	    modelName: string;
	    defaultVal: boolean;
	})[];

}
declare module DevExpress.QueryBuilder.Elements {

    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class ColumnExpression {
	    private _criteria;
	    private _dependedTables;
	    constructor(model: any, query: QueryViewModel, serializer?: IModelSerializer);
	    table: ko.Computed<string>;
	    column: ko.Observable<string> | ko.Computed<string>;
	    expression: ko.Observable<string> | ko.Computed<string>;
	    aggregate: ko.Observable<string> | ko.Computed<string>;
	    alias: ko.Observable<string> | ko.Computed<string>;
	    descending: ko.Observable<boolean> | ko.Computed<boolean>;
	    itemType: ko.Observable<string> | ko.Computed<string>;
	    actualName(): string;
	    getInfo(): ISerializationInfoArray;
	    isDepended(tableActualName: string): boolean;
	}

}
declare module DevExpress.QueryBuilder.Internal {

    import ColumnExpression = DevExpress.QueryBuilder.Elements.ColumnExpression;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
	export class ColumnExpressionCollectionHelper {
	    static find(collection: ko.ObservableArray<ColumnExpression>, tableName: string, columnName: string): ColumnExpression;
	    static findByName(collection: ko.ObservableArray<ColumnExpression>, actualName: string): ColumnExpression;
	    static removeDependend(collection: ko.ObservableArray<ColumnExpression>, tableName: string): void;
	    static setUniqueAlias(collection: any, alias: any): any;
	    static addNew(query: QueryViewModel, collection: ko.ObservableArray<ColumnExpression>, table: string, column: string): ColumnExpression;
	    static remove(collection: ko.ObservableArray<ColumnExpression>, tableName: string, columnName: string): void;
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import QueryElementBaseViewModel = DevExpress.QueryBuilder.Elements.QueryElementBaseViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import DBColumn = DevExpress.Analytics.Data.DBColumn;
    import DBColumnType = DevExpress.Analytics.Data.DBColumnType;;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import IConnectingPoint = DevExpress.Analytics.Diagram.IConnectingPoint;;
	export class ColumnViewModel extends QueryElementBaseViewModel {
	    private _isAliasAutoGenerated;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, dbColumn: DBColumn, parent: TableViewModel, serializer?: IModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    isNotAvailable: ko.Observable<boolean>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    alias: ko.Observable<string> | ko.Computed<string>;
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    actualName: ko.Computed<string>;
	    displayType: ko.Computed<string>;
	    _type: ko.Observable<DBColumnType>;
	    _size: ko.Observable<string>;
	    dataType: ko.Computed<string>;
	    rightConnectionPoint: IConnectingPoint;
	    leftConnectionPoint: IConnectingPoint;
	    sortingType: ko.Computed<string>;
	    sortOrder: ko.Computed<number>;
	    groupBy: ko.Computed<boolean>;
	    aggregate: ko.Observable<string> | ko.Computed<string>;
	    readonly specifics: "String" | "Date" | "Bool" | "Integer" | "Float";
	}

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var allColumnsSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.QueryBuilder.Elements {

    import QueryElementBaseViewModel = DevExpress.QueryBuilder.Elements.QueryElementBaseViewModel;;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class AllColumnsViewModel extends QueryElementBaseViewModel {
	    constructor(parent: TableViewModel, serializer?: IModelSerializer);
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    name: ko.Computed<string>;
	    getInfo(): ISerializationInfoArray;
	}

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var tableSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Data {
	export class DBForeignKey {
	    name: string;
	    primaryKeyTable: string;
	    columns: string[];
	    primaryKeyColumns: string[];
	    constructor(model: any);
	}

}
declare module DevExpress.Analytics.Data.Internal {
	export function deserializeToCollection<T>(model: any[], createItem: (itemModel: any) => T, collection?: T[]): T[];

}
declare module DevExpress.Analytics.Data {
    import DBColumn = DevExpress.Analytics.Data.DBColumn;;
    import DBForeignKey = DevExpress.Analytics.Data.DBForeignKey;;
	export class DBTable {
	    name: string;
	    columns: DBColumn[];
	    isView: boolean;
	    foreignKeys: DBForeignKey[];
	    constructor(model: any);
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import QueryElementBaseViewModel = DevExpress.QueryBuilder.Elements.QueryElementBaseViewModel;;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import AllColumnsViewModel = DevExpress.QueryBuilder.Elements.AllColumnsViewModel;;
    import Size = DevExpress.Analytics.Elements.Size;;
    import Point = DevExpress.Analytics.Elements.Point;
    import IPoint = DevExpress.Analytics.Elements.IPoint;;
    import DBColumn = DevExpress.Analytics.Data.DBColumn;;
    import DBTable = DevExpress.Analytics.Data.DBTable;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class TableViewModel extends QueryElementBaseViewModel {
	    private serializer?;
	    static COLUMNS_OFFSET: number;
	    static COLUMN_HEIGHT: number;
	    static COLUMN_MARGIN: number;
	    static TABLE_MIN_WIDTH: number;
	    static TABLE_DEFAULT_HEIGHT: number;
	    private _columnsConnectionPointLeftX;
	    private _columnsConnectionPointRightX;
	    private _columns;
	    private _initialized;
	    constructor(model: any, parent: QueryViewModel, serializer?: ModelSerializer);
	    size: Size;
	    location: Point;
	    name: ko.Observable<string> | ko.Computed<string>;
	    alias: ko.Observable<string> | ko.Computed<string>;
	    actualName: ko.PureComputed<string>;
	    isReady: ko.Observable<boolean>;
	    columns(): ColumnViewModel[];
	    asterisk: AllColumnsViewModel;
	    allColumnsSelected: ko.Computed<boolean>;
	    toggleSelectedColumns(): void;
	    isInitialized: ko.PureComputed<boolean>;
	    getColumnConnectionPoints(column: ColumnViewModel): {
	        left: IPoint;
	        right: IPoint;
	    };
	    getInfo(): ISerializationInfoArray;
	    getInvalidColumns(): ColumnViewModel[];
	    getColumn(name: string): ColumnViewModel;
	    _initColumns(columns: DBColumn[], update?: boolean): void;
	    createColumns(dbTable: DBTable): void;
	}

}
declare module DevExpress.Analytics.Data {
    import DBColumnType = DevExpress.Analytics.Data.DBColumnType;;
	export class DBStoredProcedure {
	    name: string;
	    arguments: DBStoredProcedureArgument[];
	    constructor(model: any);
	}
	export enum DBStoredProcedureArgumentDirection {
	    In = 0,
	    Out = 1,
	    InOut = 2
	}
	export class DBStoredProcedureArgument {
	    name: string;
	    type: DBColumnType;
	    direction: DBStoredProcedureArgumentDirection;
	    constructor(model: any);
	}

}
declare module DevExpress.Analytics.Data {
    import DBTable = DevExpress.Analytics.Data.DBTable;;
    import DBStoredProcedure = DevExpress.Analytics.Data.DBStoredProcedure;;
	export class DBSchema {
	    tables: DBTable[];
	    procedures: DBStoredProcedure[];
	    constructor(model: any);
	}

}
declare module DevExpress.Analytics.Data {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class ConnectionOptions {
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    closeConnection: ko.Observable<boolean>;
	    commandTimeout: ko.Observable<number>;
	}

}
declare module DevExpress.Analytics.Data {

    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import ConnectionOptions = DevExpress.Analytics.Data.ConnectionOptions;;
	export class SqlDataConnection {
	    static from(model: any, serializer?: IModelSerializer): SqlDataConnection;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    name: ko.Observable<string>;
	    parameteres: ko.Observable<string>;
	    fromAppConfig: ko.Observable<boolean>;
	    options: ConnectionOptions;
	}

}
declare module DevExpress.QueryBuilder.Utils {
	export var ActionId: {
	    Save: string;
	    DataPreview: string;
	    SelectStatementPreview: string;
	};
	export var HandlerUri: (newVal?: string) => string;

}
declare module DevExpress.Analytics.Data {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class ResultTable {
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    tableName: ko.Observable<string> | ko.Computed<string>;
	    columns: ko.ObservableArray<{
	        name: ko.Observable<string> | ko.Computed<string>;
	        propertyType: ko.Observable<string>;
	    }>;
	}

}
declare module DevExpress.Analytics.Data {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ResultTable = DevExpress.Analytics.Data.ResultTable;;
	export class ResultSet {
	    getInfo(): ISerializationInfoArray;
	    static from(model: any, serializer?: IModelSerializer): ResultSet;
	    static toJson(value: any, serializer: any, refs: any): {
	        'DataSet': any;
	    };
	    constructor(model: any, serializer?: IModelSerializer);
	    tables: ko.ObservableArray<ResultTable>;
	}

}
declare module DevExpress.QueryBuilder.Utils {

    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
	export var SqlQueryType: {
	    customSqlQuery: string;
	    tableQuery: string;
	    storedProcQuery: string;
	};
	export var JsonSourceType: {
	    fileJsonSource: string;
	    customJsonSource: string;
	    uriJsonSource: string;
	};
	export interface ISqlQueryViewModel extends ISerializableModel {
	    name: ko.Observable<string> | ko.Computed<string>;
	    parameters: ko.ObservableArray<DataSourceParameter>;
	    type: ko.Observable<string> | ko.Computed<string>;
	    parent: SqlDataSource;
	    generateName: () => string;
	}

}
declare module DevExpress.Analytics.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var customQuerySerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Data {

    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class CustomSqlQuery implements ISqlQueryViewModel {
	    parent: SqlDataSource;
	    constructor(model: any, parent: SqlDataSource, serializer?: IModelSerializer);
	    sqlString: ko.Observable<string> | ko.Computed<string>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    type: ko.Observable<string> | ko.Computed<string>;
	    parameters: ko.ObservableArray<DataSourceParameter>;
	    getInfo(): ISerializationInfoArray;
	    generateName(): string;
	}

}
declare module DevExpress.Analytics.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var tableQuerySerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Data {

    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class TableQuery implements ISqlQueryViewModel {
	    parent: SqlDataSource;
	    constructor(model: any, parent: SqlDataSource, serializer?: IModelSerializer);
	    name: ko.Observable<string> | ko.Computed<string>;
	    type: ko.Observable<string> | ko.Computed<string>;
	    filterString: ko.Observable<string> | ko.Computed<string>;
	    parameters: ko.ObservableArray<DataSourceParameter>;
	    tables(): {
	        name: ko.Observable<string> | ko.Computed<string>;
	        alias: ko.Observable<string>;
	    }[];
	    getInfo(): ISerializationInfoArray;
	    generateName(): string;
	}

}
declare module DevExpress.Analytics.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var storedProcQuerySerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Data {

    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class StoredProcQuery implements ISqlQueryViewModel {
	    parent: SqlDataSource;
	    constructor(model: any, parent: SqlDataSource, serializer?: IModelSerializer);
	    procName: ko.Observable<string> | ko.Computed<string>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    type: ko.Observable<string> | ko.Computed<string>;
	    parameters: ko.ObservableArray<DataSourceParameter>;
	    getInfo(): ISerializationInfoArray;
	    generateName(): string;
	}

}
declare module DevExpress.Analytics.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var masterDetailRelationSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Data {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class MasterDetailRelation extends Disposable {
	    dispose(): void;
	    private _customName;
	    constructor(model: any, serializer?: IModelSerializer);
	    name: ko.PureComputed<string>;
	    masterQuery: ko.Observable<string> | ko.Computed<string>;
	    detailQuery: ko.Observable<string> | ko.Computed<string>;
	    keyColumns: ko.ObservableArray<{
	        masterColumn: ko.Observable<string> | ko.Computed<string>;
	        detailColumn: ko.Observable<string> | ko.Computed<string>;
	    }>;
	    createKeyColumn(): void;
	    getInfo(): ISerializationInfoArray;
	}

}
declare module DevExpress.Analytics.Data {

    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;;
    import ResultSet = DevExpress.Analytics.Data.ResultSet;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import MasterDetailRelation = DevExpress.Analytics.Data.MasterDetailRelation;;
    import DBSchemaProvider = DevExpress.Analytics.Data.DBSchemaProvider;;
	export interface IDataSourceBase {
	    name: ko.Observable<string> | ko.Computed<string>;
	    id: string;
	}
	export class SqlDataSource extends Disposable implements IDataSourceBase {
	    getInfo(): ISerializationInfoArray;
	    createQuery(item: any, serializer: any): ISqlQueryViewModel;
	    constructor(model: any, serializer?: IModelSerializer, requestWrapper?: RequestWrapper);
	    name: ko.Observable<string> | ko.Computed<string>;
	    id: string;
	    queries: ko.ObservableArray<ISqlQueryViewModel>;
	    relations: ko.ObservableArray<MasterDetailRelation>;
	    connection: SqlDataConnection;
	    dbSchemaProvider: DBSchemaProvider;
	    resultSet: ResultSet;
	}

}
declare module DevExpress.Analytics.Data {

    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
	export enum JsonNodeType {
	    Object = 0,
	    Array = 1,
	    Property = 2
	}
	export class JsonNode {
	    static from(model: any, serializer?: IModelSerializer): JsonNode;
	    static toJsonNodes(value: JsonNode[], serializer: any, refs: any): any[];
	    static toJsonNode(value: JsonNode, serializer: any, refs: any, recoursive?: boolean): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    name: ko.Observable<string> | ko.Computed<string>;
	    nodes: JsonNode[];
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    value: any;
	    nodeType: string;
	    valueType: string;
	    displayName: string;
	}
	export class JsonSchemaNode extends JsonNode {
	    static from(model: any, serializer?: IModelSerializer): JsonSchemaNode;
	    static toJson(value: JsonSchemaNode, serializer: any, refs: any): {};
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    nodeType: string;
	    valueType: string;
	    displayName: any;
	    selected: ko.Observable<boolean>;
	}
	export class JsonSchemaRootNode extends JsonNode {
	    private _rootElementList;
	    static from(model: any, serializer?: IModelSerializer): JsonSchemaRootNode;
	    static toJson(value: JsonSchemaRootNode, serializer: any, refs: any): {};
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    getRootElementPartList(allowObjectRootElements?: boolean): IPathRequest[];
	    private _fillRootElementList;
	    private _getNextPath;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;;
    import TableQuery = DevExpress.Analytics.Data.TableQuery;;
	export class SelectQuerySqlTextProvider {
	    private _selectStatementCallback;
	    private _connection;
	    constructor(_selectStatementCallback: (connection: SqlDataConnection, queryJSON: string) => JQueryPromise<ISelectStatementResponse>, _connection: () => SqlDataConnection);
	    getQuerySqlText(newQuery: TableQuery): JQueryPromise<ISelectStatementResponse>;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {
	export {};

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

	export function createDefaultSQLAceOptions(readOnly?: boolean): {
	    showLineNumbers: boolean;
	    showPrintMargin: boolean;
	    enableBasicAutocompletion: boolean;
	    enableLiveAutocompletion: boolean;
	    readOnly: boolean;
	    highlightSelectedWord: boolean;
	    showGutter: boolean;
	    highlightActiveLine: boolean;
	};
	export function createDefaultSQLAdditionalOptions(value: any): {
	    onChange: (session: any) => void;
	    onValueChange: (editor: any) => void;
	    changeTimeout: number;
	    overrideEditorFocus: boolean;
	    setUseWrapMode: boolean;
	};
	export function createDefaultSQLLanguageHelper(): {
	    getLanguageMode: () => string;
	    createCompleters: () => any[];
	};

}
declare module DevExpress.Analytics.Wizard.Internal {

    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import SelectQuerySqlTextProvider = DevExpress.Analytics.Wizard.Internal.SelectQuerySqlTextProvider;;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;;
	export interface ISqlQueryControl {
	    isNextDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    isFinishDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    setQuery: (query: ISqlQueryViewModel, isInProcess?: ko.Observable<boolean>) => JQueryPromise<any>;
	    getQuery: () => ISqlQueryViewModel;
	    runQueryBuilderDisabled: boolean;
	}
	export class SelectStatementQueryControl extends Disposable implements ISqlQueryControl {
	    private _tableQueryString;
	    private _query;
	    private _needToCustomizeParameters;
	    private _sqlTextProvider;
	    constructor(sqlTextProvider: SelectQuerySqlTextProvider, disableCustomSql: any);
	    template: string;
	    aceOptions: {
	        showLineNumbers: boolean;
	        showPrintMargin: boolean;
	        enableBasicAutocompletion: boolean;
	        enableLiveAutocompletion: boolean;
	        readOnly: boolean;
	        highlightSelectedWord: boolean;
	        showGutter: boolean;
	        highlightActiveLine: boolean;
	    };
	    additionalOptions: {
	        onChange: (session: any) => void;
	        onValueChange: (editor: any) => void;
	        changeTimeout: number;
	        overrideEditorFocus: boolean;
	        setUseWrapMode: boolean;
	    };
	    aceAvailable: boolean;
	    languageHelper: {
	        getLanguageMode: () => string;
	        createCompleters: () => any[];
	    };
	    caption: () => any;
	    sqlString: ko.PureComputed<string>;
	    setQuery(query: ISqlQueryViewModel, isInProcess?: ko.Observable<boolean>): JQueryPromise<ISelectStatementResponse>;
	    getQuery(): ISqlQueryViewModel;
	    isNextDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    isFinishDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    readonly runQueryBuilderDisabled: boolean;
	    disableCustomSql: () => boolean;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ISqlQueryControl = DevExpress.Analytics.Wizard.Internal.ISqlQueryControl;;
    import StoredProcQuery = DevExpress.Analytics.Data.StoredProcQuery;;
    import DBStoredProcedure = DevExpress.Analytics.Data.DBStoredProcedure;;
	export class StoredProceduresQueryControl extends Disposable implements ISqlQueryControl {
	    private _query;
	    private _needToProcessParameters;
	    private static _availableConvertToParameter;
	    private _selectedProcedure;
	    constructor();
	    template: string;
	    storedProcedures: ko.ObservableArray<DBStoredProcedure>;
	    selectedProcedure: ko.ObservableArray<DBStoredProcedure>;
	    caption: () => any;
	    generateStoredProcedureDisplayName: (procedure: any) => string;
	    scrollActiveItem(e: any): void;
	    static generateStoredProcedureDisplayName(procedure: DBStoredProcedure): string;
	    setQuery(query: StoredProcQuery): JQuery.Promise<any, any, any>;
	    getQuery(): StoredProcQuery;
	    isNextDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    isFinishDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    readonly runQueryBuilderDisabled: boolean;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import TreeNode = DevExpress.Analytics.Wizard.Internal.TreeNode;
    import ParameterTreeNode = DevExpress.Analytics.Wizard.Internal.ParameterTreeNode;
    import QueriesTreeNode = DevExpress.Analytics.Wizard.Internal.QueriesTreeNode;
    import TreeNodeBase = DevExpress.Analytics.Wizard.Internal.TreeNodeBase;;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import DBSchemaProvider = DevExpress.Analytics.Data.DBSchemaProvider;;
    import TableQuery = DevExpress.Analytics.Data.TableQuery;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface IAddQueriesTreeListCallbacks {
	    deleteAction: (name: string) => any;
	    showQbCallBack: (name?: string, isCustomQuery?: boolean) => any;
	    disableCustomSql: boolean;
	}
	export class DBSchemaItemsProvider extends Disposable implements IItemsProvider {
	    private _callBack;
	    private _tables;
	    private _views;
	    private _procedures;
	    private _queries;
	    private _customQueries;
	    private _rootItems;
	    constructor(dbSchemaProvider: DBSchemaProvider, customQueries: ko.ObservableArray<TableQuery>, showQbCallBack: any, disableCustomSql: any, afterCheckToggled: (node: TreeNodeBase) => void);
	    private _checkedRootNodesCount;
	    getItems: (path: IPathRequest) => JQueryPromise<IDataMemberInfo[]>;
	    hasCheckedItems: ko.PureComputed<boolean>;
	    nextButtonDisabled: ko.PureComputed<boolean>;
	    hasParametersToEdit: ko.PureComputed<boolean>;
	    tables: () => TreeNode;
	    views: () => TreeNode;
	    procedures: () => ParameterTreeNode;
	    queries: () => QueriesTreeNode;
	    customQueries: () => ko.ObservableArray<ISqlQueryViewModel>;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import DBStoredProcedureArgument = DevExpress.Analytics.Data.DBStoredProcedureArgument;;
    import IAddQueriesTreeListCallbacks = DevExpress.Analytics.Wizard.Internal.IAddQueriesTreeListCallbacks;;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export var defaultObjectDataSourceItemSpecifics: string;
	export class TreeNodeBase extends Disposable implements IDataMemberInfo {
	    name: string;
	    displayName: string;
	    specifics: string;
	    private _afterCheckToggled;
	    constructor(name: string, displayName: string, specifics: string, isChecked?: boolean, afterCheckToggled?: (node: TreeNodeBase) => void);
	    checked: ko.PureComputed<boolean>;
	    unChecked(): boolean;
	    toggleChecked(): void;
	    setChecked(value: boolean): void;
	    isList: boolean;
	    _checked: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class TreeLeafNode extends TreeNodeBase {
	    name: string;
	    displayName: string;
	    specifics: string;
	    constructor(name: string, displayName: string, specifics: string, isChecked?: boolean, nodeArguments?: any, afterCheckToggled?: (node: TreeNodeBase) => void);
	    arguments: DBStoredProcedureArgument[];
	    hasQuery: boolean;
	}
	export class TreeNode extends TreeNodeBase {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, afterCheckToggled?: (node: TreeNodeBase) => void);
	    initialized(): boolean;
	    setChecked(value: boolean): void;
	    initializeChildren(children: TreeNodeBase[]): void;
	    countChecked: ko.PureComputed<number>;
	    isList: boolean;
	    children: ko.ObservableArray<TreeNodeBase>;
	}
	export class ParameterTreeNode extends TreeNode {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, afterCheckToggled?: (node: TreeNodeBase) => void);
	    countChecked: ko.PureComputed<number>;
	    hasParamsToEdit: ko.Observable<boolean>;
	}
	export class QueriesTreeNode extends ParameterTreeNode {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, callbacks?: ko.Observable<IAddQueriesTreeListCallbacks>, afterCheckToggled?: (node: TreeNodeBase) => void);
	    addAction: {
	        clickAction: (item: any) => any;
	        imageClassName: string;
	        imageTemplateName: string;
	        templateName: string;
	        text: any;
	    };
	    getActions(context: any): IAction<any>[];
	    popoverListItems(): any;
	    showPopover(): void;
	    itemClickAction: (e: {
	        itemData: {
	            name: string;
	            addAction: any;
	        };
	    }) => void;
	    addQuery: any;
	    addCustomQuery: any;
	    popoverVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    disableCustomSql: () => boolean;
	}
	export class TreeQueryNode extends TreeLeafNode {
	    private query?;
	    private _name;
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, parameters: ko.Observable<DataSourceParameter[]>, callbacks: ko.Observable<IAddQueriesTreeListCallbacks>, afterCheckToggled?: (node: TreeLeafNode) => void, query?: any);
	    setObservableName(name: ko.Observable<string> | ko.Computed<string>): void;
	    editAction: {
	        clickAction: (item: any) => any;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	    removeAction: {
	        clickAction: (item: any) => void;
	        imageClassName: string;
	        imageTemplateName: string;
	        text: any;
	    };
	    getActions(context: any): IAction<any>[];
	    editQuery: any;
	    removeQuery: any;
	    parameters: ko.Observable<DataSourceParameter[]>;
	}
	export class FieldTreeNode extends TreeNodeBase {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, path: string, afterCheckToggled?: (node: TreeNodeBase) => void, isDraggable?: boolean);
	    path: string;
	    visible: ko.Observable<boolean>;
	    isComplex: boolean;
	    dragData: any;
	    disabled: ko.Observable<boolean>;
	}
	export class DataMemberTreeNode extends TreeNode {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, path: string, afterCheckToggled?: (node: DataMemberTreeNode) => void);
	    setChecked(value: boolean): void;
	    path: string;
	    visible: ko.Observable<boolean>;
	    children: ko.ObservableArray<DataMemberTreeNode | FieldTreeNode>;
	    isComplex: boolean;
	}
	export class SingleCheckedDataMemberTreeNode extends DataMemberTreeNode {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, path: string, afterCheckToggled?: (node: DataMemberTreeNode) => void);
	    _checked: ko.Observable<boolean>;
	    children: ko.ObservableArray<FieldTreeNode>;
	}

}
declare module DevExpress.Analytics.Wizard {
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
	export interface IWizardPageMetadata<T extends IWizardPage> {
	    setState: (data: any, state: any) => void;
	    getState: (state: any) => any;
	    resetState: (state: any, defaultState?: any) => void;
	    create: () => T;
	    canNext?: (page: T) => boolean;
	    canFinish?: (page: T) => boolean;
	    template: string;
	    description?: string;
	}

}
declare module DevExpress.Analytics.Wizard {
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
    import IWizardPageMetadata = DevExpress.Analytics.Wizard.IWizardPageMetadata;;
	export class PageFactory {
	    registerMetadata<T extends IWizardPage>(pageId: string, metadata: IWizardPageMetadata<T>): void;
	    getMetadata(pageId: any): IWizardPageMetadata<IWizardPage>;
	    unregisterMetadata(pageId: string): void;
	    reset(): void;
	    metadata: {
	        [key: string]: IWizardPageMetadata<IWizardPage>;
	    };
	}

}
declare module DevExpress.Analytics.Wizard {
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class StateManager {
	    private globalState;
	    private pageFactory;
	    private defaultState;
	    private _getPageState;
	    constructor(globalState: any, pageFactory: PageFactory);
	    setPageState(pageId: string, data: any): void;
	    getPageState(pageId: string): any;
	    resetPageState(pageId: string): void;
	    getCurrentState(): any;
	    reset(): void;
	}

}
declare module DevExpress.Analytics.Wizard {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
	export class PageIterator<T = any> extends Disposable {
	    pageFactory: PageFactory;
	    stateManager: StateManager;
	    private _onResetPage;
	    dispose(): void;
	    private _pages;
	    private _currentIndex;
	    private __resetPages;
	    private _nextPage;
	    private _getNextExistingPage;
	    _resetPages(): void;
	    private _getNextNewPage;
	    constructor(pageFactory: PageFactory, stateManager: StateManager, _onResetPage?: (page: _WrappedWizardPage) => void);
	    _getStartPage(pageId?: string): _WrappedWizardPage;
	    _getNextPage(): JQuery.Promise<_WrappedWizardPage, any, any>;
	    _getPreviousPage(): JQuery.Promise<_WrappedWizardPage, any, any>;
	    _goToPage(pageId: string): JQuery.Promise<_WrappedWizardPage, any, any>;
	    _getCurrentPage(): _WrappedWizardPage;
	    _getCurrentState(): T;
	    getNextPageId(pageId?: string): string;
	}

}
declare module DevExpress.Analytics.Utils {
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface IEventHandler {
	    type: any;
	    value: (ev: any) => any;
	}
	export class EventManager<Sender, EventType> extends Disposable {
	    dispose(): void;
	    private _handlers;
	    call<K extends keyof EventType>(type: K, args: EventType[K]): void;
	    addHandler<K extends keyof EventType>(type: K, listener: (this: Sender, ev: EventType[K]) => any): void;
	    removeHandler<K extends keyof EventType>(type: K, listener: (this: Sender, ev: EventType[K]) => any): void;
	}

}
declare module DevExpress.Analytics.Wizard {
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
	export interface IWizardEventArgs<Sender> {
	    wizard: Sender;
	}
	export interface IWizardPageEventArgs<Sender> extends IWizardEventArgs<Sender> {
	    page: IWizardPage;
	    pageId: string;
	}
	export interface IBeforeWizardPageInitializeEventArgs<Sender> extends IWizardPageEventArgs<Sender>, IBeforeWizardInitializeEventArgs<Sender> {
	}
	export interface IBeforeWizardInitializeEventArgs<Sender> extends IWizardEventArgs<Sender> {
	    state: any;
	}
	export interface IBeforeWizardFinishEventArgs {
	    state: any;
	    wizardModel?: any;
	}
	export interface IAfterWizardFinishEventArgs {
	    state: any;
	    wizardResult?: any;
	}
	export interface IWizardEvents<Sender> {
	    'afterInitialize': IWizardEventArgs<Sender>;
	    'beforeInitialize': IBeforeWizardInitializeEventArgs<Sender>;
	    'beforeStart': IWizardEventArgs<Sender>;
	    'beforePageInitialize': IBeforeWizardPageInitializeEventArgs<Sender>;
	    'afterPageInitialize': IWizardPageEventArgs<Sender>;
	    'beforeFinish': IBeforeWizardFinishEventArgs;
	    'afterFinish': IAfterWizardFinishEventArgs;
	}

}
declare module DevExpress.Analytics.Data {

    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
	export class ObjectDataMemberBase implements IDataMemberInfo {
	    name: string;
	    displayName: string;
	    dataMember: string;
	    constructor(model?: ObjectDataMemberBase);
	}
	export class ObjectParameter extends ObjectDataMemberBase {
	    type: string;
	    value: any;
	    resultType: string;
	    constructor(model?: ObjectParameter);
	}
	export abstract class ObjectDataSourceMethodBase extends ObjectDataMemberBase {
	    parameters: ObjectParameter[];
	    constructor(model: ObjectDataSourceMethodBase);
	}
	export class ObjectDataMember extends ObjectDataSourceMethodBase {
	    static entireObject: () => any;
	    isStatic: boolean;
	    memberType: string;
	    disabled: ko.Observable<boolean>;
	    constructor(model: ObjectDataMember);
	    static empty(): ObjectDataMember;
	    isEntireObject(): boolean;
	    isAvailable(): boolean;
	}
	export class ObjectCtor extends ObjectDataSourceMethodBase {
	}
	export class ObjectType extends ObjectDataMemberBase {
	    ctors: ObjectCtor[];
	    members: ObjectDataMember[];
	    constructor(model: ObjectType);
	    updateMembers(selectedCtor: ObjectCtor): void;
	}

}
declare module DevExpress.Analytics.Wizard {

	export interface IConnectionStringDefinition {
	    name: string;
	    description?: string;
	}
	export interface IDataSourceWizardConnectionStrings {
	    sql: ko.ObservableArray<IConnectionStringDefinition>;
	    json?: ko.ObservableArray<IConnectionStringDefinition>;
	}

}
declare module DevExpress.Analytics.Wizard {
	export var DataSourceWizardPageId: {
	    ChooseDataSourceTypePage: string;
	    ConfigureMasterDetailRelationshipsPage: string;
	};
	export var SqlDataSourceWizardPageId: {
	    ChooseConnectionPage: string;
	    ConfigureQueryPage: string;
	    ConfigureParametersPage: string;
	    MultiQueryConfigurePage: string;
	    MultiQueryConfigureParametersPage: string;
	};
	export var JsonDataSourceWizardPageId: {
	    ChooseJsonSourcePage: string;
	    ChooseJsonSchemaPage: string;
	    ChooseConnectionPage: string;
	    SpecifyJsonConnectionPage: string;
	};
	export var ObjectDataSourceWizardPageId: {
	    ChooseTypesPage: string;
	    ChooseDataMembersPage: string;
	    ConfigureParametersPage: string;
	};
	export var FullscreenDataSourceWizardPageId: {
	    ChooseDataSourceTypePage: string;
	    SpecifySqlDataSourceSettingsPage: string;
	    SpecifyJsonDataSourceSettingsPage: string;
	    SpecifyObjectDataSourceSettingsPage: string;
	};
	export var FullscreenDataSourceWizardSectionId: {
	    SpecifyJsonConnectionPage: string;
	    ChooseJsonSchemaPage: string;
	    ChooseJsonSourcePage: string;
	    ChooseSqlConnectionPage: string;
	    ConfigureQueryPage: string;
	    ConfigureQueryParametersPage: string;
	    ConfigureMasterDetailRelationshipsPage: string;
	};

}
declare module DevExpress.Analytics.Wizard {

    import BaseWizard = DevExpress.Analytics.Wizard.BaseWizard;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
	export class PopupWizard extends BaseWizard {
	    static _getLoadPanelViewModel(element: HTMLElement, observableVisible: ko.Observable<boolean>): {
	        animation: {
	            show: {
	                type: string;
	                from: number;
	                to: number;
	                duration: number;
	            };
	            hide: {
	                type: string;
	                from: number;
	                to: number;
	                duration: number;
	            };
	        };
	        deferRendering: boolean;
	        message: any;
	        visible: ko.Observable<boolean>;
	        shading: boolean;
	        shadingColor: string;
	        position: {
	            of: JQuery<HTMLElement>;
	        };
	        container: JQuery<HTMLElement>;
	    };
	    constructor(pageFactory: any, finishCallback?: any);
	    start(): void;
	    height: ko.Observable<number>;
	    width: ko.Observable<number>;
	    _extendCssClass: string;
	    _container: (el: HTMLElement) => JQuery<HTMLElement>;
	    itemsProvider: ko.Observable<IItemsProvider>;
	    nextButton: {
	        text: any;
	        disabled: ko.Computed<boolean>;
	        onClick: () => void;
	    };
	    cancelButton: {
	        text: any;
	        onClick: () => any;
	    };
	    previousButton: {
	        text: any;
	        disabled: ko.Computed<boolean>;
	        onClick: () => void;
	    };
	    finishButton: {
	        text: any;
	        disabled: ko.Computed<boolean>;
	        onClick: () => void;
	    };
	    _wizardPopupPosition(element: HTMLElement): {
	        of: JQuery<HTMLElement>;
	    };
	    _loadPanelViewModel(element: HTMLElement): {
	        animation: {
	            show: {
	                type: string;
	                from: number;
	                to: number;
	                duration: number;
	            };
	            hide: {
	                type: string;
	                from: number;
	                to: number;
	                duration: number;
	            };
	        };
	        deferRendering: boolean;
	        message: any;
	        visible: ko.Observable<boolean>;
	        shading: boolean;
	        shadingColor: string;
	        position: {
	            of: JQuery<HTMLElement>;
	        };
	        container: JQuery<HTMLElement>;
	    };
	    _getLoadPanelViewModel(element: HTMLElement, observableVisible: ko.Observable<boolean>): {
	        animation: {
	            show: {
	                type: string;
	                from: number;
	                to: number;
	                duration: number;
	            };
	            hide: {
	                type: string;
	                from: number;
	                to: number;
	                duration: number;
	            };
	        };
	        deferRendering: boolean;
	        message: any;
	        visible: ko.Observable<boolean>;
	        shading: boolean;
	        shadingColor: string;
	        position: {
	            of: JQuery<HTMLElement>;
	        };
	        container: JQuery<HTMLElement>;
	    };
	    _titleTemplate: string;
	    title: string;
	}

}
declare module DevExpress.Analytics.Wizard {

    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
	export interface IJsonDataSourceJsonSourcePageSettings extends IJsonDataSourceJsonSourceValidatable {
	    isValid(): boolean;
	    reset(): void;
	    setValue(dataSource: JsonDataSource): void;
	    isEmpty(): boolean;
	    applySettings(dataSource: JsonDataSource): void;
	    cssClass?: string | any;
	    grid?: ObjectProperties;
	}
	export interface IJsonDataSourceJsonSourceValidatable {
	    validationGroup?: {
	        onInitialized: (args: any) => void;
	        validate: () => any;
	        onDisposing: (args: any) => void;
	    };
	    validationSummary?: {
	        onInitialized: (args: any) => void;
	        onDisposing: (args: any) => void;
	    };
	    _validatorsReady?: ko.Observable<boolean> | ko.Computed<boolean>;
	    _validate?: () => void;
	}
	export interface IJsonDataSourceType {
	    value: IJsonDataSourceJsonSourcePageSettings;
	    displayValue: string;
	    localizationId: string;
	}
	export var parameterTypeToPropertyMap: {
	    [key: string]: string;
	};

}
declare module DevExpress.Analytics.Wizard.Internal {

    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
	export class JsonStringEditor extends Editor {
	    constructor(modelPropertyInfo: ISerializationInfo, level: any, parentDisabled: any, textToSearch: any);
	    uploadFile(e: any): void;
	    getUploadTitle(): any;
	    aceEditorHasErrors: ko.Observable<boolean>;
	    aceAvailable: boolean;
	    editorContainer: ko.Observable<any>;
	    _model: ko.Observable<any>;
	    languageHelper: {
	        getLanguageMode: () => string;
	        createCompleters: () => any[];
	    };
	    aceOptions: {
	        showLineNumbers: boolean;
	        highlightActiveLine: boolean;
	        showPrintMargin: boolean;
	        enableBasicAutocompletion: boolean;
	        enableLiveAutocompletion: boolean;
	    };
	    isValid: ko.Computed<any>;
	    additionalOptions: {
	        onChangeAnnotation: (session: any) => void;
	        onBlur: () => void;
	    };
	    jsonStringValidationRules: Array<any>;
	}

}
declare module DevExpress.Analytics.Data {

    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
	export class JsonAuthenticationInfo {
	    static from(model: any, serializer?: IModelSerializer): JsonAuthenticationInfo;
	    static toJson(value: JsonAuthenticationInfo, serializer: any, refs: any): any;
	    getInfo(): {
	        propertyName: string;
	        modelName: string;
	        defaultVal: string;
	    }[];
	    constructor(model: any, serializer?: IModelSerializer);
	    password: ko.Observable<string> | ko.Computed<string>;
	    userName: ko.Observable<string> | ko.Computed<string>;
	}

}
declare module DevExpress.Analytics.Data {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
	export enum JsonParameterType {
	    PathParameter = 0,
	    QueryParameter = 1,
	    Header = 2
	}
	export class JsonParameter extends Disposable {
	    expression_Prefix: string;
	    static from(model: any, serializer?: IModelSerializer): JsonParameter;
	    static toJson(value: JsonParameter, serializer: any, refs: any): any;
	    _initEditingProperties(): void;
	    switchEditors(): void;
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    itemType: ko.Observable<string>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    namePlaceholder: () => any;
	    valuePlaceholder: () => any;
	    value: ko.Observable<string> | ko.Computed<string>;
	    _editingValue: ko.Observable<string>;
	    _expression: IExpressionOptions;
	    isExpression: ko.Observable<boolean>;
	    itemsProvider: IItemsProvider;
	    _parameterTypes: {
	        value: string;
	        displayValue: string;
	        localizationId: string;
	    }[];
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IJsonDataSourceJsonSourceValidatable = DevExpress.Analytics.Wizard.IJsonDataSourceJsonSourceValidatable;
    import IJsonDataSourceJsonSourcePageSettings = DevExpress.Analytics.Wizard.IJsonDataSourceJsonSourcePageSettings;;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import JsonParameter = DevExpress.Analytics.Data.JsonParameter;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
	export function getLocalizedValidationErrorMessage(emptyValueErrorMessage: string, localizedPropertyName?: string, subProperty?: string): any;
	export interface IJSONSourcePagePropertyDescriptor {
	    value: ko.Observable<any>;
	    displayName: () => string;
	}
	export abstract class JsonDataSourceJsonSourcePageSettingsBase extends Disposable implements IJsonDataSourceJsonSourceValidatable {
	    dispose(): void;
	    protected _validationGroup: any;
	    protected _validationSummary: any;
	    private _onValidationGroupInitialized;
	    private _onValidationGroupDisposing;
	    protected _onValidationSummaryInitialized(args: any): void;
	    private _onValidationSummaryDisposing;
	    protected _repaintSummary(): void;
	    abstract _validatorsReady: ko.Observable<boolean> | ko.Computed<boolean>;
	    _validate(): void;
	    constructor();
	    validationGroup: {
	        onInitialized: (args: any) => void;
	        onDisposing: (args: any) => void;
	        validate: () => void;
	    };
	    validationSummary: {
	        onInitialized: (args: any) => void;
	        onDisposing: (args: any) => void;
	    };
	    isValid: ko.Observable<boolean> | ko.Computed<boolean>;
	    grid: ObjectProperties;
	}
	export class JsonDataSourceJsonSourcePageStringSettings extends JsonDataSourceJsonSourcePageSettingsBase implements IJsonDataSourceJsonSourcePageSettings {
	    onChange(_onChange: () => void): any;
	    _validatorsReady: ko.Observable<boolean>;
	    private _isJsonSourceValid;
	    isEmpty(): boolean;
	    reset(): void;
	    setValue(dataSource: JsonDataSource): void;
	    getInfo(): ISerializationInfoArray;
	    applySettings(jsonDataSource: JsonDataSource): void;
	    constructor();
	    isValid: ko.Observable<boolean> | ko.Computed<boolean>;
	    validationGroup: any;
	    validationSummary: any;
	    stringSource: ko.Observable<string> | ko.Computed<string>;
	    aceEditorHasErrors: ko.Observable<boolean>;
	    grid: ObjectProperties;
	    cssClass: {
	        'dxrd-wizard-json-string-source-grid': boolean;
	    };
	}
	export class JsonDataSourceJsonSourcePageUriSettings extends JsonDataSourceJsonSourcePageSettingsBase implements IJsonDataSourceJsonSourcePageSettings {
	    private _requestWrapper;
	    private _itemsProvider?;
	    private _isUriValid;
	    private _lastValidatedJsonSourceJSON;
	    private _authNameValidatorInstance;
	    private _isInitUri;
	    private _collectionItemNamePlaceholder;
	    private _lastValidateDeferred;
	    private _sourceUriValidatorsReady;
	    private _basicAuthValidatorsReady;
	    private _validationRequested;
	    private _validateUriSource;
	    private _isCollectionValid;
	    private _isParametersValid;
	    private _isBasicHttpAuthValid;
	    private _noEmptyProperties;
	    private _lastValidationMessage;
	    private _getSerializedUriSource;
	    _sourceUriValidationCallback: (params: any) => boolean;
	    private _getSourceUriInfo;
	    private _getBasicHttpAuthInfo;
	    private _getParametersInfo;
	    private _getResultUriInfo;
	    private _getResultUri;
	    private _appendPathSegmentsToUri;
	    private _appendQuerySegmentsToUri;
	    constructor(_requestWrapper: RequestWrapper, _itemsProvider?: IItemsProvider);
	    protected _onValidationSummaryInitialized(args: any): void;
	    _applyParametersToSource(jsonDataSource: JsonDataSource): void;
	    applySettings(jsonDataSource: JsonDataSource): void;
	    getInfo(): ISerializationInfoArray;
	    reset(): void;
	    setValue(dataSource: JsonDataSource): void;
	    dispose(): void;
	    onChange(_onChange: () => void): any;
	    isEmpty(): boolean;
	    isValid: ko.PureComputed<boolean>;
	    _validate(): void;
	    _validatorsReady: ko.PureComputed<boolean>;
	    sourceUri: ko.Observable<string>;
	    basicHttpAuth: {
	        password: ko.Observable<string>;
	        userName: ko.Observable<string>;
	    };
	    parameters: ko.ObservableArray<JsonParameter>;
	    resultUri: ko.Computed<string>;
	}

}
declare module DevExpress.Analytics.Wizard {

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IJsonDataSourceWizardState = DevExpress.Analytics.Wizard.IJsonDataSourceWizardState;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import IJsonDataSourceType = DevExpress.Analytics.Wizard.IJsonDataSourceType;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class ChooseJsonSourcePage extends WizardPageBase<IJsonDataSourceWizardState, IJsonDataSourceWizardState> {
	    private _requestWrapper;
	    private _jsonStringSettings;
	    private _jsonUriSetting;
	    private __validationGroup;
	    private __validationSummary;
	    private _onValidationGroupInitialized;
	    private _onValidationGroupDisposing;
	    private _onValidationSummaryInitialized;
	    private _onValidationSummaryDisposing;
	    constructor(_requestWrapper?: RequestWrapper, itemsProvider?: IItemsProvider);
	    canNext(): boolean;
	    commit(): JQuery.Promise<IJsonDataSourceWizardState, any, any>;
	    initialize(state: IJsonDataSourceWizardState): JQuery.Promise<any, any, any>;
	    _jsonSourceTitle: any;
	    _jsonConnectionTitle: any;
	    _connectionNameValidationRules: {
	        type: string;
	        readonly message: any;
	    }[];
	    _connectionName: ko.Observable<string>;
	    _validationGroup: {
	        onInitialized: (args: any) => void;
	        onDisposing: (args: any) => void;
	    };
	    _validationSummary: {
	        onInitialized: (args: any) => void;
	        onDisposing: (args: any) => void;
	    };
	    _sources: Array<IJsonDataSourceType>;
	    _selectedSource: ko.PureComputed;
	}
	export function _registerChooseJsonSourcePage(factory: PageFactory, requestWrapper?: RequestWrapper, getItemsProviderCallback?: any): void;

}
declare module DevExpress.Analytics.Wizard {

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;
	export interface IChooseAvailableItemPageOperation {
	    text: string;
	    createNew: boolean;
	}
	export class ChooseAvailableItemPage extends WizardPageBase {
	    items: ko.Subscribable<any[]>;
	    constructor(items: ko.Subscribable<any[]>, canCreateNew?: boolean);
	    canNext(): boolean;
	    canCreateNew: ko.Observable<boolean>;
	    selectedItems: ko.ObservableArray<IDataSourceInfo>;
	    operations: IChooseAvailableItemPageOperation[];
	    selectedOperation: ko.Observable<IChooseAvailableItemPageOperation>;
	    _createNew: ko.PureComputed<boolean>;
	    initialize(state: any): any;
	    _displayExpr(item: any): any;
	    _getSelectedItem(state?: any): IDataSourceInfo;
	    onDblClick(): void;
	    readonly createNewOperationText: any;
	    readonly existingOperationText: any;
	}

}
declare module DevExpress.Analytics.Wizard {
    import ChooseAvailableItemPage = DevExpress.Analytics.Wizard.ChooseAvailableItemPage;;
    import IJsonDataSourceWizardState = DevExpress.Analytics.Wizard.IJsonDataSourceWizardState;;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;;
	export class ChooseJsonConnectionPage extends ChooseAvailableItemPage {
	    commit(): JQuery.Promise<IJsonDataSourceWizardState, any, any>;
	    _getSelectedItem(data: IJsonDataSourceWizardState): IDataSourceInfo;
	    readonly createNewOperationText: any;
	    readonly existingOperationText: any;
	}
	export function _registerChooseJsonConnectionPage(factory: PageFactory, wizardOptions: _DataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import DataMemberTreeNode = DevExpress.Analytics.Wizard.Internal.DataMemberTreeNode;
    import FieldTreeNode = DevExpress.Analytics.Wizard.Internal.FieldTreeNode;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;;
	export class TreeNodeItemsProvider extends Disposable implements IItemsProvider {
	    private _fullTreeLoaded;
	    protected _rootItems: ko.ObservableArray<DataMemberTreeNode>;
	    private _checkedRootNodesCount;
	    private _createTree;
	    private _createTreePart;
	    private _setChecked;
	    selectAllItems(onlyRoot?: boolean): JQuery.Promise<any, any, any>;
	    selectItemsByPath(path: string): JQuery.Promise<any, any, any>;
	    selectItemByPath(path: string): JQuery.Promise<any, any, any>;
	    protected _getParentNode(pathRequest: IPathRequest): DataMemberTreeNode;
	    protected _getDefaultTreeNodeCheckState(item: IDataMemberInfo): boolean;
	    constructor(fieldListProvider: FieldListProvider, rootItems: ko.ObservableArray<IDataMemberInfo>, generateTreeNode: (item: IDataMemberInfo, isChecked: boolean, path: string) => DataMemberTreeNode, generateTreeLeafNode: (item: IDataMemberInfo, isChecked: boolean, path: string) => FieldTreeNode);
	    hasCheckedItems: ko.Computed<boolean>;
	    getItems: (path: IPathRequest, collectChilds?: boolean) => JQueryPromise<IDataMemberInfo[]>;
	    getRootItems: () => DataMemberTreeNode[];
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import TreeNodeItemsProvider = DevExpress.Analytics.Wizard.Internal.TreeNodeItemsProvider;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;;
    import DataMemberTreeNode = DevExpress.Analytics.Wizard.Internal.DataMemberTreeNode;
    import FieldTreeNode = DevExpress.Analytics.Wizard.Internal.FieldTreeNode;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
	export class JsonTreeNodeItemsProvider extends TreeNodeItemsProvider implements IItemsProvider {
	    constructor(fieldListProvider: FieldListProvider, rootItems: ko.ObservableArray<IDataMemberInfo>, generateTreeNode: (item: IDataMemberInfo, isChecked: boolean, path: string) => DataMemberTreeNode, generateTreeLeafNode: (item: IDataMemberInfo, isChecked: boolean, path: string) => FieldTreeNode);
	    protected _getDefaultTreeNodeCheckState(item: IDataMemberInfo): boolean;
	    getNodeByPath(pathRequest: IPathRequest): DataMemberTreeNode;
	}

}
declare module DevExpress.Analytics.Wizard {

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IJsonDataSourceWizardState = DevExpress.Analytics.Wizard.IJsonDataSourceWizardState;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
    import JsonSchemaRootNode = DevExpress.Analytics.Data.JsonSchemaRootNode;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import IJsonDataSourceWizardCallbacks = DevExpress.Analytics.Wizard.Internal.IJsonDataSourceWizardCallbacks;;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class ChooseJsonSchemaPage extends WizardPageBase<IJsonDataSourceWizardState, IJsonDataSourceWizardState> {
	    private _requestWrapper;
	    private _allowObjectRootElements;
	    private _callbacks?;
	    private _rootItems;
	    private _fieldListItemsProvider;
	    private _fieldSelectedPath;
	    private _dataSource;
	    private _cachedState;
	    private _clear;
	    private _createFieldListCallback;
	    private _getSchemaToDataMemberInfo;
	    private _mapJsonNodesToTreelistItems;
	    private _getNodesByPath;
	    private _getInnerItemsByPath;
	    private _beginInternal;
	    private _updatePage;
	    private _createTreeNode;
	    private _createLeafTreeNode;
	    private _resetSelectionRecursive;
	    private _mapJsonSchema;
	    protected _filterRootElementList(rootElementList: IPathRequest[], jsonSchema: JsonSchemaRootNode): IPathRequest[];
	    canNext(): boolean;
	    canFinish(): boolean;
	    constructor(_requestWrapper?: RequestWrapper, _allowObjectRootElements?: boolean, _callbacks?: IJsonDataSourceWizardCallbacks);
	    commit(): JQuery.Promise<IJsonDataSourceWizardState, any, any>;
	    initialize(state: IJsonDataSourceWizardState): JQuery.Promise<any, any, any>;
	    reset(): void;
	    _rootElementTitle: any;
	    _rootElementList: ko.Observable<IPathRequest[]>;
	    _selectedRootElement: ko.Observable<IPathRequest>;
	    _fieldListModel: ITreeListOptions;
	}
	export function _registerChooseJsonSchemaPage(factory: PageFactory, requestWrapper?: RequestWrapper, callbacks?: IJsonDataSourceWizardCallbacks): void;

}
declare module DevExpress.Analytics.Data {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IDataSourceBase = DevExpress.Analytics.Data.IDataSourceBase;;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;;
    import ObjectCtor = DevExpress.Analytics.Data.ObjectCtor;
    import ObjectDataMember = DevExpress.Analytics.Data.ObjectDataMember;;
	export class ObjectDataSource extends Disposable implements IDataSourceBase {
	    setState(state: IObjectDataSourceWizardState): void;
	    name: ko.Observable<string>;
	    id: string;
	    selectedType: string;
	    ctor: ObjectCtor;
	    dataMember: ObjectDataMember;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import ObjectParameter = DevExpress.Analytics.Data.ObjectParameter;
    import ObjectDataSourceMethodBase = DevExpress.Analytics.Data.ObjectDataSourceMethodBase;
    import ObjectCtor = DevExpress.Analytics.Data.ObjectCtor;
    import ObjectDataMember = DevExpress.Analytics.Data.ObjectDataMember;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;
    import IModelActionProvider = DevExpress.Analytics.Internal.IModelActionProvider;;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
	export class ObjectDataSourceParameterProperty extends Disposable {
	    private _parameter;
	    private _itemsProvider;
	    switchPropertyType(): void;
	    isExpression(): boolean;
	    private _generateInfo;
	    private _initGetInfo;
	    private _subscribeProperties;
	    isPropertyVisible(propertyName: string): boolean;
	    constructor(_parameter: ObjectParameter, _itemsProvider: IItemsProvider);
	    actions: IModelAction[];
	    actionProviders: IModelActionProvider[];
	    reset: () => void;
	    getInfo: () => ISerializationInfoArray;
	    type: ko.Observable<string>;
	    value: ko.Observable<string>;
	    expression: IExpressionOptions;
	} class ObjectDataSourceParameterGrid extends ObjectProperties {
	    constructor(x: ObjectDataSourceParameterProperty);
	}
	export class ObjectDataSourceParametersModel extends Disposable {
	    _grids: ObjectDataSourceParameterGrid[];
	    displayName: string;
	    constructor(parametersMethod: ObjectDataSourceMethodBase, itemsProvider: IItemsProvider);
	}
	export class ChooseObjectMemberParameters extends Disposable {
	    private _itemsProvider;
	    private _ctorParametersObject;
	    private _dataMemberParametersObject;
	    private _updateParameters;
	    constructor(_itemsProvider: IItemsProvider);
	    updateCtorParameters(method: ObjectDataSourceMethodBase): void;
	    updateMethodParameters(method: ObjectDataSourceMethodBase): void;
	    hasParameters: () => ObjectDataSourceParametersModel;
	}
	export class ChooseObjectParameters extends ChooseObjectMemberParameters {
	    constructor(selectedCtor: ko.Observable<ObjectCtor>, selectedDataMembers: ko.ObservableArray<ObjectDataMember>, itemsProvider: IItemsProvider);
	}
	export {};

}
declare module DevExpress.Analytics.Wizard {
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;;
    import ChooseObjectMemberParameters = DevExpress.Analytics.Wizard.Internal.ChooseObjectMemberParameters;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class ConfigureObjectDataSourceParametersPage extends WizardPageBase<IObjectDataSourceWizardState, IObjectDataSourceWizardState> {
	    private _objectDataSource;
	    _chooseObjectParameters: ChooseObjectMemberParameters;
	    constructor(itemsProvider: IItemsProvider);
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQuery.Promise<IObjectDataSourceWizardState, any, any>;
	    initialize(state: IObjectDataSourceWizardState): JQuery.Promise<any, any, any>;
	}
	export function _registerConfigureObjectDataSourceParametersPage(factory: PageFactory, getItemsProviderCallback: () => IItemsProvider): void;

}
declare module DevExpress.QueryBuilder.Internal {
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
	export function wrapGetSelectStatement(callback?: (connection: SqlDataConnection, queryJSON: string) => JQueryPromise<ISelectStatementResponse>): (connection: SqlDataConnection, queryJSON: string) => JQueryPromise<ISelectStatementResponse>;
	export function wrapRebuildResultSchema(callback?: (dataSource: SqlDataSource, queryName?: string, relationsEditing?: boolean) => JQueryPromise<{
	    resultSchemaJSON: string;
	    connectionParameters?: string;
	}>): (dataSource: SqlDataSource, queryName?: string, relationsEditing?: boolean) => JQueryPromise<{
	    resultSchemaJSON: string;
	    connectionParameters?: string;
	}>;
	export function serializeDataConnection(connection: SqlDataConnection): string;

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var relationSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.QueryBuilder.Elements {

    import QueryElementBaseViewModel = DevExpress.QueryBuilder.Elements.QueryElementBaseViewModel;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import JoinConditionViewModel = DevExpress.QueryBuilder.Elements.JoinConditionViewModel;;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
	export class RelationViewModel extends QueryElementBaseViewModel {
	    private _getConditionNumber;
	    constructor(model: any, query: QueryViewModel, serializer?: ModelSerializer);
	    parentTableName: ko.Observable<string> | ko.Computed<string>;
	    nestedTableName: ko.Observable<string> | ko.Computed<string>;
	    parentTable: ko.Observable<TableViewModel>;
	    nestedTable: ko.Observable<TableViewModel>;
	    joinType: ko.Observable<string> | ko.Computed<string>;
	    conditions: ko.ObservableArray<JoinConditionViewModel>;
	    getInfo(): ISerializationInfoArray;
	    addChild(control: IElementViewModel): void;
	    removeChild(control: ElementViewModel): void;
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import RoutedConnectorViewModel = DevExpress.Analytics.Diagram.RoutedConnectorViewModel;;
    import RelationViewModel = DevExpress.QueryBuilder.Elements.RelationViewModel;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;;
	export class JoinConditionViewModel extends RoutedConnectorViewModel {
	    getControlFactory(): ControlsFactory;
	    preInitProperties(): void;
	    constructor(control: any, relation: RelationViewModel, serializer?: ModelSerializer);
	    parentColumn: ko.Computed<ColumnViewModel>;
	    nestedColumn: ko.Computed<ColumnViewModel>;
	    parentColumnName: ko.Observable<string> | ko.Computed<string>;
	    nestedColumnName: ko.Observable<string> | ko.Computed<string>;
	    operator: ko.Observable<string> | ko.Computed<string>;
	    joinType: ko.Observable<string> | ko.Computed<string>;
	    left: ko.Computed<string>;
	    right: ko.Computed<string>;
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import QueryElementBaseViewModel = DevExpress.QueryBuilder.Elements.QueryElementBaseViewModel;;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
	export class QueryElementBaseSurface<M extends QueryElementBaseViewModel> extends SurfaceElementBase<M> {
	    static _unitProperties: IUnitProperties<QueryElementBaseViewModel>;
	    constructor(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>);
	    template: string;
	    selectiontemplate: string;
	    contenttemplate: string;
	    margin: ko.Observable<number>;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
	export function isAggregatedExpression(object: {
	    aggregate: ko.Observable<string> | ko.Computed<string>;
	}): boolean;
	export interface IQueryBuilderObjectProviderFilter {
	    filterTables(tables: TableViewModel[]): TableViewModel[];
	    filterColumns(columns: ColumnViewModel[]): ColumnViewModel[];
	    getColumnName(column: ColumnViewModel): string;
	    getSpecifics(column: ColumnViewModel): string;
	    getDataType(column: ColumnViewModel): string;
	}
	export class QueryBuilderObjectsProvider implements IItemsProvider {
	    constructor(query: ko.Observable<QueryViewModel>, objectFilter: IQueryBuilderObjectProviderFilter);
	    hasParameter: (name: string) => boolean;
	    createParameter: (name: any, dataType: any) => void;
	    getItems: (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	    getColumnInfo: (propertyName: string) => IDataMemberInfo;
	    private static _createTableInfo;
	    private static _createColumnInfo;
	    static whereClauseObjectsFilter: IQueryBuilderObjectProviderFilter;
	    static groupByObjectsFilter: IQueryBuilderObjectProviderFilter;
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;;
    import QuerySurface = DevExpress.QueryBuilder.Elements.QuerySurface;;
    import TableSurface = DevExpress.QueryBuilder.Elements.TableSurface;;
	export class ColumnSurface extends SurfaceElementBase<ColumnViewModel> {
	    private _isJoined;
	    private _isHovered;
	    constructor(control: ColumnViewModel, context: ISurfaceContext);
	    template: string;
	    toggleSelected: () => void;
	    selectedWrapper: ko.PureComputed<boolean>;
	    isNotAvailable: ko.PureComputed<boolean>;
	    isAggregate: ko.PureComputed<boolean>;
	    isAscending: ko.PureComputed<boolean>;
	    isDescending: ko.PureComputed<boolean>;
	    cssClasses: (query: QuerySurface, columnDragHandler: {
	        getDragColumn: () => ColumnViewModel;
	    }, parent: TableSurface) => {
	        'dxd-state-invalid': ko.PureComputed<boolean>;
	        'dxd-state-active': boolean;
	        'dxd-state-joined': ko.Computed<boolean>;
	        'dxd-state-hovered': ko.Computed<boolean>;
	    };
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import AllColumnsViewModel = DevExpress.QueryBuilder.Elements.AllColumnsViewModel;;
	export class AllColumnsSurface extends SurfaceElementBase<AllColumnsViewModel> {
	    constructor(control: AllColumnsViewModel, context: ISurfaceContext);
	    template: string;
	    toggleSelected: () => void;
	    selectedWrapper: ko.PureComputed<boolean>;
	    isOverAsterisk: ko.PureComputed<boolean>;
	    cssClasses: () => {
	        'dxd-state-active': ko.Observable<boolean> | ko.Computed<boolean>;
	        'dxd-state-hovered': boolean;
	    };
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import QueryElementBaseSurface = DevExpress.QueryBuilder.Elements.QueryElementBaseSurface;;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import ColumnSurface = DevExpress.QueryBuilder.Elements.ColumnSurface;;
    import AllColumnsSurface = DevExpress.QueryBuilder.Elements.AllColumnsSurface;;
    import CodeResolver = DevExpress.Analytics.Internal.CodeResolver;;
	export class TableSurface extends QueryElementBaseSurface<TableViewModel> {
	    constructor(control: TableViewModel, context: ISurfaceContext);
	    columnsAsyncResolver: CodeResolver;
	    asterisk: AllColumnsSurface;
	    columns: ko.Computed<ColumnSurface[]>;
	    contenttemplate: string;
	    template: string;
	    isInitialized: ko.Computed<boolean>;
	    toggleSelected: () => void;
	    selectedWrapper: ko.PureComputed<boolean>;
	    resizable(resizeHandler: any, element: any): any;
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import RelationViewModel = DevExpress.QueryBuilder.Elements.RelationViewModel;;
    import JoinConditionSurface = DevExpress.QueryBuilder.Elements.JoinConditionSurface;;
	export class RelationSurface extends SurfaceElementBase<RelationViewModel> {
	    constructor(control: RelationViewModel, context: ISurfaceContext);
	    conditions: ko.ObservableArray<JoinConditionSurface>;
	    template: string;
	    _getChildrenHolderName(): string;
	}

}
declare module DevExpress.QueryBuilder.Elements {

    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;;
    import TableSurface = DevExpress.QueryBuilder.Elements.TableSurface;;
    import RelationSurface = DevExpress.QueryBuilder.Elements.RelationSurface;;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;;
    import IMargins = DevExpress.Analytics.Elements.IMargins;;
    import ColumnSurface = DevExpress.QueryBuilder.Elements.ColumnSurface;;
	export class QuerySurface extends SurfaceElementBase<QueryViewModel> implements ISelectionTarget, ISurfaceContext {
	    static _unitProperties: IUnitProperties<QueryViewModel>;
	    private _joinedColumns;
	    constructor(query: QueryViewModel, zoom?: ko.Observable<number>);
	    measureUnit: ko.Observable<string> | ko.Computed<string>;
	    dpi: ko.Observable<number> | ko.Computed<number>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    placeholder: () => any;
	    tables: ko.ObservableArray<TableSurface>;
	    relations: ko.ObservableArray<RelationSurface>;
	    allowMultiselect: boolean;
	    focused: ko.Observable<boolean>;
	    selected: ko.Observable<boolean>;
	    underCursor: ko.Observable<IHoverInfo>;
	    checkParent(surfaceParent: ISelectionTarget): boolean;
	    pageWidth: ko.Observable<number> | ko.Computed<number>;
	    templateName: string;
	    getChildrenCollection(): ko.ObservableArray<TableSurface>;
	    margins: IMargins;
	    rtl: ko.Observable<boolean>;
	    isJoined(column: ColumnSurface): boolean;
	}

}
declare module DevExpress.QueryBuilder.Elements {
    import RoutedConnectorSurface = DevExpress.Analytics.Diagram.RoutedConnectorSurface;;
    import JoinConditionViewModel = DevExpress.QueryBuilder.Elements.JoinConditionViewModel;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import QuerySurface = DevExpress.QueryBuilder.Elements.QuerySurface;;
	export class JoinConditionSurface extends RoutedConnectorSurface {
	    constructor(control: JoinConditionViewModel, context: ISurfaceContext);
	    container(): QuerySurface;
	}

}
declare module DevExpress.QueryBuilder.Internal {

    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;;
    import QuerySurface = DevExpress.QueryBuilder.Elements.QuerySurface;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
    import RoutedConnectorSurface = DevExpress.Analytics.Diagram.RoutedConnectorSurface;;
	export class ColumnDragHandler extends DragDropHandler {
	    private querySurface;
	    private undoEngine;
	    private _dragColumn;
	    private _dragConditionSurface;
	    private _scrollProcessor;
	    private _needToCreateRelation;
	    constructor(querySurface: ko.Observable<QuerySurface>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(control: ISelectionTarget): void;
	    setConnectorPoints(cursorPosition: {
	        top: number;
	        left: number;
	    }): void;
	    drag(event: JQueryEventObject, ui: any): void;
	    doStopDrag(): void;
	    dragDropConnector: ko.Observable<RoutedConnectorSurface>;
	    getDragColumn(): ColumnViewModel;
	}

}
declare module DevExpress.QueryBuilder.Internal {

    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import QuerySurface = DevExpress.QueryBuilder.Elements.QuerySurface;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
	export class DbObjectDragDropHandler extends DragDropHandler {
	    private _undoEngine;
	    private _querySurface;
	    private _drop;
	    private _query;
	    static getDropCallback: (undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, suggestLocation: boolean) => (memberInfo: IDataMemberInfo, query: QueryViewModel) => TableViewModel;
	    constructor(surface: ko.Observable<QuerySurface>, selection: SurfaceSelection, _undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(draggable: any): void;
	    doStopDrag(ui: any, draggable: any): void;
	    addControl(control: any, dropTargetSurface: any, size: any): void;
	}

}
declare module DevExpress.QueryBuilder.Internal {

    import IDisposable = DevExpress.Analytics.Utils.IDisposable;;
    import ColumnDragHandler = DevExpress.QueryBuilder.Internal.ColumnDragHandler;;
    import IDesignerModel = DevExpress.Analytics.Internal.IDesignerModel;;
    import DbObjectDragDropHandler = DevExpress.QueryBuilder.Internal.DbObjectDragDropHandler;;
    import QueryBuilderObjectsProvider = DevExpress.QueryBuilder.Widgets.Internal.QueryBuilderObjectsProvider;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
	export interface IQueryBuilderModel extends IDesignerModel, IDisposable {
	    rootStyle: string;
	    columnDragHandler: ColumnDragHandler;
	    connectionPointDragHandler: ColumnDragHandler;
	    fieldDragHandler: DbObjectDragDropHandler;
	    fieldListProvider: QueryBuilderObjectsProvider;
	    dataBindingsProvider: QueryBuilderObjectsProvider;
	    parametersBindingsProvider: IItemsProvider;
	    dataBindingsGroupProvider: QueryBuilderObjectsProvider;
	    selectStatmentPreview: IQueryBuilderDialog;
	    dataPreview: IQueryBuilderDialog;
	    findControl: (s: any, e: JQueryEventObject) => void;
	    showPreview: () => void;
	    showStatement: () => void;
	    columnsLoadingMsg?: () => string;
	    updateSurfaceSize: () => void;
	    updateSurface: () => void;
	}
	export interface IQueryBuilderDialog {
	    isLoading: ko.Observable<boolean> | ko.Computed<boolean>;
	    isVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    template: string;
	    title: () => string;
	    data: any;
	    okButtonText: () => string;
	    okButtonHandler: (e: any) => void;
	    container: any;
	}

}
declare module DevExpress.Querybuilder {
    import IQueryBuilderModel = DevExpress.QueryBuilder.Internal.IQueryBuilderModel;;
	export class JSQueryBuilder {
	    private _queryBuilderModel;
	    queryBuilderModel: IQueryBuilderModel;
	    constructor(_queryBuilderModel: ko.Observable<IQueryBuilderModel>);
	    UpdateLocalization(localization: any): void;
	    GetQueryBuilderModel(): IQueryBuilderModel;
	    GetJsonQueryModel(): {
	        'Query': any;
	    };
	    GetSaveQueryModel(): {
	        queryLayout: string;
	        connection: string;
	    };
	    SerializeDataConnection(): string;
	    AdjustControlCore(): void;
	    Save(): void;
	    ShowPreview(): void;
	    IsQueryValid(): any;
	    OnCallback(result: any): void;
	}

}
declare module DevExpress.QueryBuilder.Internal {
    import ICommonBindingCustomizationHandler = DevExpress.Analytics.Internal.ICommonBindingCustomizationHandler;
    import ICommonCustomizationHandler = DevExpress.Analytics.Internal.ICommonCustomizationHandler;;
    import JSQueryBuilder = DevExpress.Querybuilder.JSQueryBuilder;;
	export interface IQueryBuilderCustomizationHandler extends ICommonCustomizationHandler {
	    saveQueryRequested?: (serializedData: any) => void;
	}
	export interface IJSQueryBuilderCallbacks extends IQueryBuilderCustomizationHandler, ICommonBindingCustomizationHandler<JSQueryBuilder> {
	}

}
declare module DevExpress.Querybuilder {

    import DBSchemaProvider = DevExpress.Analytics.Data.DBSchemaProvider;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import IJSQueryBuilderCallbacks = DevExpress.QueryBuilder.Internal.IJSQueryBuilderCallbacks;;
    import IJSDesignerBindingCommonOptions = DevExpress.Analytics.Internal.IJSDesignerBindingCommonOptions;;
	export interface IQueryBuilderOptions extends IJSDesignerBindingCommonOptions {
	    queryBuilderModel?: ko.Observable<any>;
	    dataSourceJson?: string;
	    queryModelJson?: string;
	    querySource: ko.Observable<{}> | ko.Computed<{}>;
	    dbSchemaProvider?: ko.Observable<DBSchemaProvider> | ko.Computed<DBSchemaProvider>;
	    parametersItemsProvider?: IItemsProvider;
	    requestWrapper?: RequestWrapper;
	    parametersMode?: string;
	    callbacks?: IJSQueryBuilderCallbacks;
	    localization?: any;
	    rtl?: boolean;
	    requestOptions?: {
	        host?: string;
	        invokeAction: string;
	        getLocalizationAction?: string;
	    };
	    handlerUri?: string;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import IRetrieveQuerySqlCallback = DevExpress.Analytics.Wizard.IRetrieveQuerySqlCallback;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import TableQuery = DevExpress.Analytics.Data.TableQuery;;
    import ILocalizationInfo = DevExpress.Analytics.Internal.ILocalizationInfo;;
    import IQueryBuilderOptions = DevExpress.Querybuilder.IQueryBuilderOptions;;
	export class QueryBuilderPopup {
	    customizeQBInitializationData: (options: IQueryBuilderOptions) => IQueryBuilderOptions;
	    private _applyQuery;
	    private _query;
	    private _dbSchemaProvider;
	    private _dataSource;
	    private _rtl;
	    constructor(applyNewQuery: IRetrieveQuerySqlCallback, rtl?: boolean, customizeQBInitializationData?: (options: IQueryBuilderOptions) => IQueryBuilderOptions);
	    designer: ko.Observable<{
	        model: ko.Observable<QueryViewModel> | ko.Computed<QueryViewModel>;
	        updateSurface: () => void;
	        showPreview: () => void;
	        dataPreview: any;
	    }>;
	    qbOptions: ko.Observable<any>;
	    okButtonDisabled: ko.PureComputed<boolean>;
	    isVisible: ko.Observable<boolean>;
	    showLoadIndicator: ko.Observable<boolean>;
	    static customizeQueryBuilderActions: (actions: IAction<any>[]) => void;
	    show(query: TableQuery, dataSource: SqlDataSource): void;
	    cancelHandler(): void;
	    previewHandler(): void;
	    okHandler(): void;
	    onHiddenHandler(): void;
	    popupViewModel(element: HTMLElement): {
	        visible: ko.Observable<boolean>;
	        title: any;
	        showTitle: boolean;
	        shading: boolean;
	        fullScreen: boolean;
	        width: string;
	        height: string;
	        container: JQuery<HTMLElement>;
	        wrapperAttr: {
	            class: string;
	        };
	        position: {
	            of: JQuery<HTMLElement>;
	        };
	        onHidden: () => void;
	    };
	    getDisplayText(key: any): any;
	    localizationIdMap: {
	        [key: string]: ILocalizationInfo;
	    };
	}

}
declare module DevExpress.Analytics.Data.Internal {
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
	export function generateQueryUniqueName(queries: ISqlQueryViewModel[], query: ISqlQueryViewModel): string;

}
declare module DevExpress.Analytics.Wizard {

    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import ISqlDataSourceWizardState = DevExpress.Analytics.Wizard.ISqlDataSourceWizardState;;
    import ISqlQueryControl = DevExpress.Analytics.Wizard.Internal.ISqlQueryControl;;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;;
    import QueryBuilderPopup = DevExpress.Analytics.Wizard.Internal.QueryBuilderPopup;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class _SqlDataSourceWrapper {
	    sqlDataSourceJSON?: string;
	    sqlDataSource: SqlDataSource;
	    private _queryIndex;
	    sqlQuery: ISqlQueryViewModel;
	    saveCustomQueries(): string[];
	    save(): string;
	    customQueries: ISqlQueryViewModel[];
	    constructor(sqlDataSourceJSON?: string, queryName?: string, requestWrapper?: RequestWrapper);
	}
	export class ConfigureQueryPage extends WizardPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    private _options;
	    static QUERY_TEXT: string;
	    static SP_TEXT: string;
	    private _proceduresList;
	    private _selectStatementControl;
	    private _dataSourceWrapper;
	    private _connection;
	    private _dataSource;
	    constructor(_options: _DataSourceWizardOptions);
	    canNext(): boolean;
	    canFinish(): boolean;
	    runQueryBuilder(): void;
	    localizeQueryType(queryTypeString: string): any;
	    initialize(state: ISqlDataSourceWizardState): JQueryPromise<any>;
	    commit(): JQuery.Promise<ISqlDataSourceWizardState, any, any>;
	    queryNameCaption: () => string;
	    queryControl: ko.Observable<ISqlQueryControl>;
	    runQueryBuilderBtnText: ko.PureComputed<any>;
	    placeholder: () => string;
	    popupQueryBuilder: QueryBuilderPopup;
	    queryName: ko.Observable<string>;
	    queryTypeItems: string[];
	    selectedQueryType: ko.Observable<string>;
	    initialName: string;
	}
	export function _registerConfigureQueryPage(factory: PageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard {

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import ISqlDataSourceWizardState = DevExpress.Analytics.Wizard.ISqlDataSourceWizardState;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import IConnectionStringDefinition = DevExpress.Analytics.Wizard.IConnectionStringDefinition;;
	export class ChooseSqlConnectionPage extends WizardPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    constructor(connectionStrings: ko.ObservableArray<IConnectionStringDefinition>);
	    initialize(state: ISqlDataSourceWizardState): JQuery.Promise<any, any, any>;
	    canNext(): boolean;
	    commit(): JQuery.Promise<ISqlDataSourceWizardState, any, any>;
	    _connectionStrings: ko.ObservableArray<IConnectionStringDefinition>;
	    _selectedConnectionString: ko.ObservableArray<IConnectionStringDefinition>;
	}
	export function _registerChooseSqlConnectionPage(factory: PageFactory, connectionStrings: ko.ObservableArray<IConnectionStringDefinition>): void;

}
declare module DevExpress.Analytics.Wizard {
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import ISqlDataSourceWizardState = DevExpress.Analytics.Wizard.ISqlDataSourceWizardState;;
    import IParametersViewModelConverter = DevExpress.Analytics.Wizard.Internal.IParametersViewModelConverter;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import ICollectionEditorOptions = DevExpress.Analytics.Widgets.Internal.ICollectionEditorOptions;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class ConfigureQueryParametersPage extends WizardPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    private parametersConverter;
	    private _requestWrapper;
	    private _sqlDataSourceWrapper;
	    private _isParametersValid;
	    constructor(parametersConverter: IParametersViewModelConverter, _requestWrapper: RequestWrapper);
	    canNext(): boolean;
	    canFinish(): boolean;
	    getParameters(): any[];
	    initialize(data: ISqlDataSourceWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<ISqlDataSourceWizardState, any, any>;
	    removeButtonTitle: any;
	    parametersEditorOptions: ICollectionEditorOptions;
	}
	export function _registerConfigureParametersPage(factory: PageFactory, requestWrapper?: RequestWrapper, parametersConverter?: IParametersViewModelConverter): void;

}
declare module DevExpress.Analytics.Wizard {

    import IDataSourceWizardCallbacks = DevExpress.Analytics.Wizard.Internal.IDataSourceWizardCallbacks;;
    import IDataSourceWizardConnectionStrings = DevExpress.Analytics.Wizard.IDataSourceWizardConnectionStrings;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;;
    import TableQuery = DevExpress.Analytics.Data.TableQuery;;
    import PageIterator = DevExpress.Analytics.Wizard.PageIterator;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
    import PopupWizard = DevExpress.Analytics.Wizard.PopupWizard;;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
	export class _DataSourceWizardOptionsBase<T extends IDataSourceWizardCallbacks> {
	    readonly jsonDataSourceAvailable: boolean;
	    readonly sqlDataSourceAvailable: boolean;
	    readonly objectDataSourceAvailable: boolean;
	    readonly canCreateDataSource: boolean;
	    connectionStrings: IDataSourceWizardConnectionStrings;
	    callbacks: T;
	    rtl: boolean;
	    requestWrapper: RequestWrapper;
	    disableCustomSql: boolean;
	    wizardSettings: IDataSourceWizardSettings;
	    queryName: string;
	    allowCreateNewJsonConnection: boolean;
	}
	export class _DataSourceWizardOptions extends _DataSourceWizardOptionsBase<IDataSourceWizardCallbacks> {
	}
	export interface IDataSourceWizardSettings {
	    enableJsonDataSource?: boolean;
	    enableSqlDataSource?: boolean;
	    enableObjectDataSource?: boolean;
	}
	export class DataSourceWizardSettings implements IDataSourceWizardSettings {
	    createDefault(settings?: IDataSourceWizardSettings): IDataSourceWizardSettings;
	    enableJsonDataSource?: boolean;
	    enableSqlDataSource?: boolean;
	    enableObjectDataSource?: boolean;
	}
	export interface IRetrieveQuerySqlCallback {
	    (query: TableQuery, isInProcess: ko.Observable<boolean>): JQueryPromise<ISelectStatementResponse>;
	}
	export class DataSourceWizardPageIterator extends PageIterator {
	    private _dataSourceWizardOptions;
	    constructor(pageFactory: PageFactory, stateManager: StateManager, _dataSourceWizardOptions: _DataSourceWizardOptions);
	    getNextPageId(pageId: string): any;
	}
	export class DataSourceWizard extends PopupWizard {
	    private _wizardOptions;
	    constructor(pageFactory: any, _wizardOptions: _DataSourceWizardOptions);
	    initialize(state: IDataSourceWizardState, createIterator?: (pageFactory: PageFactory, stateManager: StateManager) => PageIterator): void;
	    canRunWizard(): boolean;
	    _extendCssClass: string;
	    title: any;
	}
	export function _registerDataSourceWizardPages(factory: PageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): PageFactory;
	export function _createDataSourceWizard(factory: PageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): DataSourceWizard;

}
declare module DevExpress.Analytics.Wizard {

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export interface ITypeItem {
	    text: string;
	    imageClassName: string;
	    imageTemplateName: string;
	    type: number;
	}
	export enum DataSourceType {
	    NoData = 0,
	    Sql = 1,
	    Json = 2,
	    Object = 3
	}
	export class TypeItem implements ITypeItem {
	    constructor(textDefault: string, textID: string, imageClassName: string, imageTemplateName: string, type: number);
	    text: string;
	    imageClassName: string;
	    imageTemplateName: string;
	    type: number;
	}
	export class ChooseDataSourceTypePage extends WizardPageBase<IDataSourceWizardState, IDataSourceWizardState> {
	    protected _dataSourceTypeOptions: _DataSourceWizardOptions;
	    constructor(_dataSourceTypeOptions: _DataSourceWizardOptions);
	    canNext(): boolean;
	    canFinish(): boolean;
	    _itemClick: (item: ITypeItem) => void;
	    _IsSelected: (item: ITypeItem) => boolean;
	    _goToNextPage(): void;
	    commit(): JQuery.Promise<IDataSourceWizardState, any, any>;
	    protected _createTypeItems(): ITypeItem[];
	    initialize(state: IDataSourceWizardState): JQuery.Promise<any, any, any>;
	    typeItems: ITypeItem[];
	    selectedItem: ko.Observable<ITypeItem>;
	    _extendCssClass: (rightPath: string) => string;
	}
	export function _registerChooseDataSourceTypePage(factory: PageFactory, dataSourceTypeOptions: _DataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard {
    import ObjectDataMember = DevExpress.Analytics.Data.ObjectDataMember;
    import ObjectCtor = DevExpress.Analytics.Data.ObjectCtor;
    import ObjectType = DevExpress.Analytics.Data.ObjectType;;
    import DataSourceType = DevExpress.Analytics.Wizard.DataSourceType;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import _SqlDataSourceWrapper = DevExpress.Analytics.Wizard._SqlDataSourceWrapper;;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import ObjectDataSource = DevExpress.Analytics.Data.ObjectDataSource;;
	export interface ISqlDataSourceWizardState {
	    name?: string;
	    queryName?: string;
	    sqlDataSourceJSON?: string;
	    relations?: string[];
	    customQueries?: string[];
	}
	export interface IJsonDataSourceWizardState {
	    dataSourceName?: string;
	    jsonScheme?: string;
	    rootElement?: string;
	    jsonSource?: string;
	    newConnectionName?: string;
	    connectionName?: string;
	}
	export interface IObjectDataSourceWizardState {
	    dataSourceName?: string;
	    selectedType?: string;
	    dataMember?: ObjectDataMember;
	    ctor?: ObjectCtor;
	    context?: string;
	    selectedObjectType?: ObjectType;
	}
	export interface IDataSourceWizardState {
	    dataSourceType?: DataSourceType;
	    sqlDataSourceWizard?: ISqlDataSourceWizardState;
	    jsonDataSourceWizard?: IJsonDataSourceWizardState;
	    objectDataSourceWizard?: IObjectDataSourceWizardState;
	    dataSourceId?: string;
	}
	export var _restoreSqlDataSourceFromState: (state?: ISqlDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string) => _SqlDataSourceWrapper;
	export var _setRestoreSqlDataSourceFromState: (func: any) => any;
	export var _resetRestoreSqlDataSourceFromState: () => (state?: ISqlDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string) => _SqlDataSourceWrapper;
	export var _restoreJsonDataSourceFromState: (state: IJsonDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string) => JsonDataSource;
	export function _setRestoreJsonDataSourceFromState(func: any): void;
	export function _resetRestoreJsonDataSourceFromState(): void;
	export function _restoreObjectDataSourceFromState(state: IObjectDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string): ObjectDataSource;
	export function _createDefaultDataSourceWizardState(sqlDataSourceWizardState?: ISqlDataSourceWizardState, jsonDataSourceWizardState?: IJsonDataSourceWizardState, objectDataSourceWizardState?: IObjectDataSourceWizardState): IDataSourceWizardState;

}
declare module DevExpress.Analytics.Wizard {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
    import PageIterator = DevExpress.Analytics.Wizard.PageIterator;;
    import EventManager = DevExpress.Analytics.Utils.EventManager;;
    import IWizardEvents = DevExpress.Analytics.Wizard.IWizardEvents;;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;
    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class BaseWizard extends Disposable {
	    pageFactory: PageFactory;
	    static __loadingStateFunctionName: string;
	    static __nextActionFunctionName: string;
	    stateManager: StateManager;
	    iterator: PageIterator;
	    events: EventManager<BaseWizard, IWizardEvents<BaseWizard>>;
	    private _finishCallback;
	    protected _createLoadingState(page: IWizardPage): void;
	    protected _createNextAction(page: IWizardPage): void;
	    private _loadingTimeout;
	    protected _loadingState(active: any): void;
	    protected _callBeforeFinishHandler(state: any, wizardModel?: any): void;
	    protected _callAfterFinishHandler(state: any, result: any): void;
	    onFinish(): void;
	    constructor(pageFactory: PageFactory, finishCallback?: (model: IDataSourceWizardState) => JQueryPromise<boolean>);
	    initialize(state?: any, createIterator?: (pageFactory: PageFactory, stateManager: StateManager) => PageIterator): void;
	    isFirstPage(): boolean;
	    canNext(): boolean;
	    canFinish(): boolean;
	    _initPage(page: _WrappedWizardPage): JQuery.Promise<any, any, any>;
	    start(): void;
	    canRunWizard(): boolean;
	    nextAction(): void;
	    previousAction(): void;
	    goToPage(pageId: string): void;
	    finishAction(): void;
	    isLoading: ko.Observable<boolean>;
	    _currentPage: ko.Observable<_WrappedWizardPage>;
	    isVisible: ko.Observable<boolean>;
	}

}
declare module DevExpress.Analytics.Wizard {
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface IWizardPage extends IDisposable {
	    commit: () => JQueryPromise<any>;
	    initialize: (state: any, stateChanged?: boolean) => JQueryPromise<any>;
	    canFinish: () => boolean;
	    canNext: () => boolean;
	    onChange?: (callback: () => void) => void;
	    changeAlways?: boolean;
	}
	export class WizardPageBase<TState = any, TResult = any> extends Disposable implements IWizardPage {
	    changeAlways: boolean;
	    dispose(): void;
	    commit(): JQueryPromise<any>;
	    protected _onChange: () => void;
	    onChange(callback: any): void;
	    initialize(state: TState, stateChanged?: boolean): JQueryPromise<any>;
	    canNext(): boolean;
	    canFinish(): boolean;
	}
	export class _WrappedWizardPage extends Disposable {
	    pageId: string;
	    page: IWizardPage;
	    template: string;
	    description?: string;
	    dispose(): void;
	    resetCommitedState(): void;
	    private _lastCommitedState;
	    private _isInitialized;
	    private _initDef;
	    isChanged: boolean;
	    onChange: (callback: () => void) => void;
	    constructor(pageId: string, page: IWizardPage, template: string, description?: string);
	    commit(): JQueryPromise<any>;
	    initialize(state: any, force?: boolean, stateChanged?: boolean): JQuery.Promise<any, any, any>;
	}

}
declare module DevExpress.Analytics.Wizard {
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
    import IWizardPageMetadata = DevExpress.Analytics.Wizard.IWizardPageMetadata;;
	export interface IWizardPageSectionMetadata<T extends IWizardPage> extends IWizardPageMetadata<T> {
	    position?: number;
	    disabledText?: string;
	    recreate?: boolean;
	    onChange?: () => void;
	    required?: boolean;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
    import IWizardPageSectionMetadata = DevExpress.Analytics.Wizard.IWizardPageSectionMetadata;;
	export class WizardPageSectionFactory extends PageFactory {
	    registerMetadata<T extends IWizardPage>(pageId: string, metadata: IWizardPageSectionMetadata<T>): void;
	    metadata: {
	        [key: string]: IWizardPageSectionMetadata<IWizardPage>;
	    };
	}

}
declare module DevExpress.Analytics.Wizard.Internal {
    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
    import IWizardPageSectionMetadata = DevExpress.Analytics.Wizard.IWizardPageSectionMetadata;;
	export class WrappedWizardPageSection extends _WrappedWizardPage {
	    pageId: string;
	    page: IWizardPage;
	    onChange: (callback: () => void) => void;
	    constructor(pageId: string, page: IWizardPage, metadata: IWizardPageSectionMetadata<IWizardPage>);
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
    import IWizardPageSectionMetadata = DevExpress.Analytics.Wizard.IWizardPageSectionMetadata;;
    import WrappedWizardPageSection = DevExpress.Analytics.Wizard.Internal.WrappedWizardPageSection;;
    import WizardPageSectionFactory = DevExpress.Analytics.Wizard.Internal.WizardPageSectionFactory;;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
	export class WizardPageSection {
	    pageId: string;
	    metadata: IWizardPageSectionMetadata<IWizardPage>;
	    resetPage(): void;
	    setPage(page: _WrappedWizardPage): void;
	    constructor(pageId: string, metadata: IWizardPageSectionMetadata<IWizardPage>);
	    page: ko.Observable<_WrappedWizardPage>;
	}
	export class WizardPageSectionIterator {
	    pageFactory: WizardPageSectionFactory;
	    stateManager: StateManager;
	    private _resetPageCallback;
	    private _pagesIds;
	    private _pages;
	    private _resetPages;
	    private _tryResetPageByMetadata;
	    private _resetPage;
	    private _createNewPage;
	    private _getPage;
	    private _getNextPage;
	    private _getPageIndex;
	    resetNextPages(pageId: string): void;
	    constructor(pageFactory: WizardPageSectionFactory, stateManager: StateManager, _resetPageCallback: (pageId: string) => void);
	    getStartPage(): WrappedWizardPageSection;
	    getNextPage(currentPageId: string): JQuery.Promise<WrappedWizardPageSection[], any, any>;
	    getCurrentState(): any;
	    getNextPageId(pageId?: string): string | string[];
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
    import WizardPageSectionIterator = DevExpress.Analytics.Wizard.Internal.WizardPageSectionIterator;
    import WizardPageSection = DevExpress.Analytics.Wizard.Internal.WizardPageSection;;
    import EventManager = DevExpress.Analytics.Utils.EventManager;;
    import IWizardEvents = DevExpress.Analytics.Wizard.IWizardEvents;;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
    import WizardPageSectionFactory = DevExpress.Analytics.Wizard.Internal.WizardPageSectionFactory;;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
	export class WizardPageProcessor extends Disposable {
	    pageFactory: WizardPageSectionFactory;
	    dispose(): void;
	    static __loadingStateFunctionName: string;
	    stateManager: StateManager;
	    iterator: WizardPageSectionIterator;
	    events: EventManager<WizardPageProcessor, IWizardEvents<WizardPageProcessor>>;
	    protected _createLoadingState(page: IWizardPage): void;
	    protected _createNextAction(page: IWizardPage): void;
	    private _loadingTimeout;
	    private _changeTimeout;
	    protected _loadingState(active: any): void;
	    protected _extendedNextAction(): void;
	    constructor(pageFactory: WizardPageSectionFactory, _loadingState?: (boolean: any) => void, _nextAction?: () => void);
	    private _resetPageById;
	    initialize(state: IDataSourceWizardState, createIterator?: (pageFactory: WizardPageSectionFactory, stateManager: StateManager) => WizardPageSectionIterator): void;
	    private _canNext;
	    private _canFinish;
	    private _initPage;
	    getPageById(pageId: any): WizardPageSection;
	    start(): void;
	    finishAction(): JQuery.Promise<any, any, any>;
	    private _nextAction;
	    sections: WizardPageSection[];
	    isLoading: ko.Observable<boolean>;
	}

}
declare module DevExpress.Analytics.Wizard {

    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IWizardPageStyle = DevExpress.Analytics.Wizard.Internal.IWizardPageStyle;;
    import WizardPageSectionFactory = DevExpress.Analytics.Wizard.Internal.WizardPageSectionFactory;;
    import WizardPageProcessor = DevExpress.Analytics.Wizard.Internal.WizardPageProcessor;;
    import WizardPageSection = DevExpress.Analytics.Wizard.Internal.WizardPageSection;;
    import IWizardPageMetadata = DevExpress.Analytics.Wizard.IWizardPageMetadata;;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
    import EventManager = DevExpress.Analytics.Utils.EventManager;;
	export enum WizardSectionPosition {
	    Left = 1,
	    TopLeft = 2,
	    BottomLeft = 3,
	    Right = 4,
	    TopRight = 5,
	    BottomRight = 6,
	    Top = 7,
	    Bottom = 8
	}
	export interface IBeforeWizardSectionInitializeEventArgs<Sender> extends IWizardSectionEventArgs<Sender> {
	    state: any;
	}
	export interface IWizardSectionEventArgs<Sender> {
	    section: IWizardPage;
	    sectionId: string;
	    page: Sender;
	}
	export interface IWizardFullscreenPageEvents<Sender> {
	    'beforeSectionInitialize': IBeforeWizardSectionInitializeEventArgs<Sender>;
	    'afterSectionInitialize': IWizardSectionEventArgs<Sender>;
	}
	export class FullscreenWizardPage extends WizardPageBase {
	    dispose(): void;
	    private _patchOnChange;
	    private _getPageStyle;
	    private _sectionsToUnregister;
	    private _sectionsToRegister;
	    private _sectionPositions;
	    private _applyCustomizations;
	    protected _setSectionPosition(pageId: string, position?: WizardSectionPosition): void;
	    constructor();
	    registerSections(): void;
	    canNext(): boolean;
	    private _sectionCondition;
	    canFinish(): boolean;
	    setSectionPosition(sectionId: string, position?: WizardSectionPosition): void;
	    registerSection(sectionId: string, metadata: IWizardPageMetadata<IWizardPage>): void;
	    unregisterSection(sectionId: string): void;
	    _loadPanelViewModel(element: HTMLElement): boolean;
	    getNextSectionId(sectionId: string): any;
	    initialize(state: any, stateChanged?: boolean): JQuery.Promise<any, any, any>;
	    _beforeStart(): void;
	    commit(): JQuery.Promise<any, any, any>;
	    _getPageDescription(index: number, page: WizardPageSection): string;
	    _showPageDescription(): boolean;
	    _initInProgress: ko.Observable<boolean>;
	    _defaultMargin: number;
	    _parentMarginOffset: number;
	    _className: string;
	    _sections: WizardPageSection[];
	    _pageCss: {
	        [key: string]: ko.Observable<IWizardPageStyle>;
	    };
	    _factory: WizardPageSectionFactory;
	    _stateManager: StateManager;
	    _sectionsProcessor: WizardPageProcessor;
	    events: EventManager<FullscreenWizardPage, IWizardFullscreenPageEvents<FullscreenWizardPage>>;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import DefaultTreeListItemFactory = DevExpress.Analytics.Widgets.Internal.DefaultTreeListItemFactory;;
    import TreeQueryNode = DevExpress.Analytics.Wizard.Internal.TreeQueryNode;;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;;
    import WizardSectionPosition = DevExpress.Analytics.Wizard.WizardSectionPosition;;
    import BaseWizard = DevExpress.Analytics.Wizard.BaseWizard;;
    import WizardPageProcessor = DevExpress.Analytics.Wizard.Internal.WizardPageProcessor;;
    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;;
    import IBeforeWizardPageInitializeEventArgs = DevExpress.Analytics.Wizard.IBeforeWizardPageInitializeEventArgs;
    import IWizardPageEventArgs = DevExpress.Analytics.Wizard.IWizardPageEventArgs;;
	export interface IParameter {
	    name: string;
	    value: any;
	}
	export interface IJsonDataSourceWizardCallbacks {
	    getParameters?: () => IParameter[];
	}
	export interface IDataSourceWizardCallbacks extends IJsonDataSourceWizardCallbacks {
	    selectStatement?: (connection: SqlDataConnection, queryJSON: string) => JQueryPromise<ISelectStatementResponse>;
	    finishCallback?: (wizardModel: any) => JQueryPromise<any>;
	    customQueriesPreset?: (dataSource: SqlDataSource) => JQueryPromise<ISqlQueryViewModel[]>;
	    customizeQBInitData?: (data: any) => any;
	    validateJsonUri?: (data: any) => any;
	    getItemsProviderCallback?: () => IItemsProvider;
	}
	export class CustomQueryTreeListItem extends TreeListItemViewModel {
	    dispose(): void;
	    protected _getTemplateName(): string;
	    protected _getCustomizedTemplateName(isEditable: boolean): string;
	    queryName: ko.Computed<string>;
	    data: TreeQueryNode;
	    editingMode: ko.Observable<boolean>;
	}
	export class MultiQueryTreeListItemFactory extends DefaultTreeListItemFactory {
	    createItem(options: any, path?: string[], onItemsVisibilityChanged?: any, rtl?: any, resolver?: any): TreeListItemViewModel | CustomQueryTreeListItem;
	}
	export interface IMultiQueryDataSourceWizardCallbacks extends IDataSourceWizardCallbacks {
	    sqlDataSourceResultSchema?: (dataSource: SqlDataSource) => JQueryPromise<{
	        resultSchemaJSON: string;
	        connectionParameters?: string;
	    }>;
	}
	export interface IParametersViewModelConverter {
	    createParameterViewModel(parameter: DataSourceParameter): any;
	    getParameterFromViewModel(parameterViewModel: any): DataSourceParameter;
	}
	export interface IWizardPageStyle {
	    top?: any;
	    bottom?: any;
	    left?: any;
	    right?: any;
	    width?: any;
	    height?: any;
	    display?: any;
	}
	export function getSectionStyle(position: WizardSectionPosition, defaultMargin?: number, isVisible?: boolean): IWizardPageStyle;
	export function subscribeArray<T>(array: ko.ObservableArray<T>, subscribeItem: (value: T, onChange: () => void) => void, onChange: () => void): ko.Subscription;
	export function subscribeProperties(properties: Array<ko.Observable<any> | ko.Computed<any>>, onChange: (val?: any) => void): any[];
	export function subscribeObject<T>(object: ko.Observable<T> | ko.Computed<T>, subscribeProperties: (value: T, onChange: () => void) => void, onChange: () => void): ko.Subscription;
	export function _createBeforeInitializePageEventArgs<TWizard extends BaseWizard | WizardPageProcessor>(page: _WrappedWizardPage, self: TWizard): IBeforeWizardPageInitializeEventArgs<TWizard>;
	export function _createPageEventArgs<TWizard extends BaseWizard | WizardPageProcessor>(page: _WrappedWizardPage, self: TWizard): IWizardPageEventArgs<TWizard>;

}
declare module DevExpress.Analytics.Data.Internal {
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import IParameter = DevExpress.Analytics.Wizard.Internal.IParameter;;
    import JsonSchemaRootNode = DevExpress.Analytics.Data.JsonSchemaRootNode;;
	export var getJsonSchemaCallback: (requestWrapper: RequestWrapper, jsonDataSource: JsonDataSource, parameters?: IParameter[]) => JQueryPromise<JsonSchemaRootNode>;
	export function _setGetJsonSchemaCallback(func: any): void;
	export function _resetGetJsonSchemaCallback(): void;

}
declare module DevExpress.Analytics.Data {
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import JsonSchemaRootNode = DevExpress.Analytics.Data.JsonSchemaRootNode;
    import JsonSchemaNode = DevExpress.Analytics.Data.JsonSchemaNode;
    import JsonNode = DevExpress.Analytics.Data.JsonNode;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
    import IParameter = DevExpress.Analytics.Wizard.Internal.IParameter;;
	export interface IJsonSchemaProvider extends IItemsProvider {
	    getJsonSchema: () => JQueryPromise<JsonSchemaRootNode>;
	}
	export class JsonSchemaProvider extends Disposable implements IJsonSchemaProvider {
	    private _requestWrapper;
	    private _jsonSchemaPromise;
	    private _jsonDataSource;
	    private _jsonSchema;
	    constructor(jsonDataSource: JsonDataSource, _requestWrapper?: RequestWrapper);
	    reset(): void;
	    mapToDataMemberContract(nodes: JsonNode[]): IDataMemberInfo[];
	    getSchemaByPath(pathRequest: IPathRequest, jsonSchema: JsonSchemaNode): IDataMemberInfo[];
	    getItems: (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	    getJsonSchema(parameters?: IParameter[]): JQueryPromise<JsonSchemaRootNode>;
	}

}
declare module DevExpress.Analytics.Data {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import JsonParameter = DevExpress.Analytics.Data.JsonParameter;;
    import JsonAuthenticationInfo = DevExpress.Analytics.Data.JsonAuthenticationInfo;;
	export class JsonSource extends Disposable {
	    private static _URIJSONSOURCE_TYPE;
	    private static _CUSTOMJSONSOURCE_TYPE;
	    static from(model: any, serializer?: IModelSerializer): JsonSource;
	    static toJson(value: any, serializer: any, refs: any): any;
	    getInfo(): ISerializationInfoArray;
	    constructor(model?: any, serializer?: IModelSerializer);
	    sourceType: ko.Observable<string>;
	    uri: ko.Observable<string>;
	    json: ko.Observable<string>;
	    authenticationInfo: JsonAuthenticationInfo;
	    headers: ko.ObservableArray<JsonParameter>;
	    queryParameters: ko.ObservableArray<JsonParameter>;
	    pathParameters: ko.ObservableArray<JsonParameter>;
	    serialize(includeRootTag?: boolean): any;
	    resetSource(): void;
	}

}
declare module DevExpress.Analytics.Data {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IDataSourceBase = DevExpress.Analytics.Data.IDataSourceBase;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import JsonSchemaProvider = DevExpress.Analytics.Data.JsonSchemaProvider;;
    import IParameter = DevExpress.Analytics.Wizard.Internal.IParameter;;
    import JsonSchemaRootNode = DevExpress.Analytics.Data.JsonSchemaRootNode;;
    import JsonSource = DevExpress.Analytics.Data.JsonSource;;
	export class JsonDataSource extends Disposable implements IDataSourceBase {
	    getInfo(): ISerializationInfoArray;
	    clone(serializer?: IModelSerializer): JsonDataSource;
	    static from(model: any, serializer?: IModelSerializer): JsonDataSource;
	    static toJson(value: any, serializer: any, refs: any): any;
	    constructor(model: any, serializer?: IModelSerializer, requestWrapper?: RequestWrapper);
	    getSchema(parameters?: IParameter[]): JQueryPromise<JsonSchemaRootNode>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    id: string;
	    connectionName: ko.Observable<string> | ko.Computed<string>;
	    jsonSchemaProvider: JsonSchemaProvider;
	    schema: JsonSchemaRootNode;
	    rootElement: ko.Observable<string> | ko.Computed<string>;
	    source: JsonSource;
	}

}
declare module DevExpress.QueryBuilder.Utils {
    import IAjaxSettings = DevExpress.Analytics.Internal.IAjaxSettings;;
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;;
    import DBTable = DevExpress.Analytics.Data.DBTable;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;;
    import IParameter = DevExpress.Analytics.Wizard.Internal.IParameter;;
	export interface ISelectStatementResponse {
	    sqlSelectStatement: string;
	    errorMessage: string;
	}
	export interface IUriJsonSourceValidationResult {
	    isUriValid: boolean;
	    faultMessage?: string;
	}
	export class RequestWrapper {
	    sendRequest<T = any>(action: string, arg: string): JQueryPromise<T>;
	    _sendRequest<T = any>(settings: IAjaxSettings): JQueryPromise<T>;
	    getDbSchema(connection: SqlDataConnection, tables?: DBTable[]): JQueryPromise<{
	        dbSchemaJSON: string;
	    }>;
	    getDbStoredProcedures(connection: SqlDataConnection): JQueryPromise<{
	        dbSchemaJSON: string;
	    }>;
	    getSelectStatement(connection: SqlDataConnection, queryJSON: string): JQueryPromise<ISelectStatementResponse>;
	    getDataPreview(connection: SqlDataConnection, queryJSON: string): JQueryPromise<{
	        dataPreviewJSON: string;
	    }>;
	    rebuildResultSchema(dataSource: SqlDataSource, queryName?: string, relationsEditing?: boolean): JQueryPromise<{
	        resultSchemaJSON: string;
	        connectionParameters?: string;
	    }>;
	    validateJsonUri(jsonDataSource: JsonDataSource): JQueryPromise<IUriJsonSourceValidationResult>;
	    saveJsonSource(connectionName: string, jsonDataSource: JsonDataSource): JQueryPromise<string>;
	    getJsonSchema(jsonDataSource: JsonDataSource, parameters: IParameter[]): JQueryPromise<{
	        jsonSchemaJSON: string;
	    }>;
	    getObjectTypeDescriptions(context: string): JQueryPromise<{
	        objectDataSourceInfoJson: string;
	    }>;
	}

}
declare module DevExpress.Analytics.Data.Internal {
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;;
    import DBTable = DevExpress.Analytics.Data.DBTable;;
    import DBSchema = DevExpress.Analytics.Data.DBSchema;;
    import DBStoredProcedure = DevExpress.Analytics.Data.DBStoredProcedure;;
	export function getDBSchemaCallback(requestWrapper: RequestWrapper, connection: SqlDataConnection, tables: DBTable[]): JQueryPromise<DBSchema>;
	export function getDBStoredProceduresCallback(requestWrapper: RequestWrapper, connection: SqlDataConnection): JQueryPromise<DBStoredProcedure[]>;

}
declare module DevExpress.Analytics.Data {
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import DBSchema = DevExpress.Analytics.Data.DBSchema;;
    import DBTable = DevExpress.Analytics.Data.DBTable;;
    import DBStoredProcedure = DevExpress.Analytics.Data.DBStoredProcedure;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
	export interface IDBSchemaProvider extends IItemsProvider {
	    getDbSchema: () => JQueryPromise<DBSchema>;
	    getDbTable: (tableName: string) => JQueryPromise<DBTable>;
	    getDbStoredProcedures: () => JQueryPromise<DBStoredProcedure[]>;
	}
	export class DBSchemaProvider extends Disposable implements IDBSchemaProvider {
	    private _requestWrapper;
	    private _dbSchema;
	    private _dbStoredProceduresSchema;
	    private _tables;
	    private _tableRequests;
	    connection: SqlDataConnection;
	    private _getDBSchema;
	    private _getDBSchemaCallback;
	    private _getDBStoredProcedures;
	    constructor(connection: SqlDataConnection, _requestWrapper?: RequestWrapper);
	    getItems: (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	    getDbSchema(): JQueryPromise<DBSchema>;
	    getDbStoredProcedures(): JQueryPromise<DBStoredProcedure[]>;
	    getDbTable(tableName: string): JQueryPromise<DBTable>;
	}

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
	export var ParametersMode: {
	    ReadWrite: string;
	    Read: string;
	    Disabled: string;
	};

}
declare module DevExpress.Analytics.Widgets.Internal {
	export function initDisplayText(object: {
	    name: string;
	    localizationId?: string;
	    displayText?: string;
	}): void;

}
declare module DevExpress.Analytics.Widgets.Internal {
    import UnaryOperator = DevExpress.Analytics.Criteria.UnaryOperator;;
    import AggregateOperand = DevExpress.Analytics.Criteria.AggregateOperand;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import GroupOperator = DevExpress.Analytics.Criteria.GroupOperator;;
	export enum CriteriaSurfaceValidatorState {
	    Left = 0,
	    Right = 1,
	    Unary = 2
	}
	export class CriteriaSurfaceValidator {
	    customValidate(operator: any, from: CriteriaSurfaceValidatorState): boolean;
	    checkLeftPart(leftPart: any): boolean;
	    _checkRightPart(criteriaOperator: any): any;
	    checkRightPart(rigthPart: any): any;
	    aggregateIsValid(criteriaOperator: AggregateOperand): any;
	    commonOperandValid(criteriaOperator: CriteriaOperator): any;
	    groupIsValid(criteriaOperator: GroupOperator): boolean;
	    unaryIsValid(criteriaOperator: UnaryOperator): any;
	    validateModel(criteriaOperator: CriteriaOperator): any;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import UnaryOperator = DevExpress.Analytics.Criteria.UnaryOperator;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class UnaryOperandSurface extends CriteriaOperatorSurface<UnaryOperator> {
	    constructor(operator: UnaryOperator, parent: any, fieldListProvider?: any, path?: any);
	    readonly leftPart: any;
	    readonly rightPart: any;
	    createChildSurface(item: CriteriaOperator, path?: any, actions?: any): CriteriaOperatorSurface<CriteriaOperator>;
	    dispose(): void;
	    contentTemplateName: string;
	    operand: ko.Observable<any>;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import AggregateOperand = DevExpress.Analytics.Criteria.AggregateOperand;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class AggregateOperandSurface extends CriteriaOperatorSurface<AggregateOperand> {
	    constructor(operator: AggregateOperand, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: any, path: any);
	    readonly leftPart: any;
	    readonly rightPart: any;
	    dispose(): void;
	    contentTemplateName: string;
	    property: ko.Observable<any>;
	    aggregatedExpression: ko.Observable<any>;
	    condition: ko.Observable<any>;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IFilterEditorOperator = DevExpress.Analytics.Widgets.IFilterEditorOperator;
    import FilterEditorHelper = DevExpress.Analytics.Widgets.FilterEditorHelper;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
	export class CriteriaOperatorSurface<T extends CriteriaOperator> extends Disposable {
	    _createLeftPartProperty(value: any): CriteriaOperatorSurface<CriteriaOperator>;
	    createChildSurface(item: any, path?: any, actions?: any): CriteriaOperatorSurface<CriteriaOperator>;
	    protected getDisplayType(): string;
	    constructor(operator: T, parent: any, fieldListProvider: any, path: any);
	    specifics: ko.Observable<string> | ko.Computed<string>;
	    dataType: ko.Observable<string> | ko.Computed<string>;
	    readonly items: Array<IFilterEditorOperator>;
	    readonly displayType: string;
	    readonly leftPart: CriteriaOperatorSurface<CriteriaOperator>;
	    readonly rightPart: any;
	    readonly css: string;
	    change(type: any, surface: any): void;
	    remove(surface: any): void;
	    isUpdated: ko.Observable<boolean>;
	    popupService: any;
	    canRemove: boolean;
	    operatorType: ko.Observable<any>;
	    parent: any;
	    templateName: string;
	    isSelected: ko.Observable<boolean> | ko.Computed<boolean>;
	    operatorClass: string;
	    helper: FilterEditorHelper;
	    reverse: any;
	    path: ko.Observable<string> | ko.Computed<string>;
	    fieldListProvider: ko.Observable<IItemsProvider>;
	    model: T;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {

    import PopupService = DevExpress.Analytics.Internal.PopupService;;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export class FilterEditorAddOn extends Disposable {
	    private _filterPlaceHolder;
	    private _popupService;
	    private _action;
	    private _updateActions;
	    constructor(criteria: CriteriaOperatorSurface<CriteriaOperator>, popupService: PopupService, action: string, propertyName: any, templateName?: any);
	    showPopup: (_: any, element: any) => void;
	    popupContentTemplate: string;
	    propertyName: string;
	    target: CriteriaOperatorSurface<CriteriaOperator>;
	    filterString: ko.Observable<string>;
	    isFiltered: ko.Observable<boolean>;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {

    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export class FilterEditorTreeListController extends TreeListController {
	    constructor(selectedItem: ko.Observable<IDataMemberInfo>);
	    itemsFilter(item: IDataMemberInfo): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	    canSelect(value: TreeListItemViewModel): boolean;
	    select(value: TreeListItemViewModel): void;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import IPropertyLocation = DevExpress.Analytics.Criteria.Utils.IPropertyLocation;;
	export class OperandSurfaceBase<T extends CriteriaOperator> extends CriteriaOperatorSurface<T> {
	    getRealParent(parent: any): any;
	    getRealProperty(property: any): any;
	    getPropertyName(parent: any, searchProperty: any): IPropertyLocation;
	    getConvertableParameters(destinationSpecifics: string): any[];
	    constructor(operator: T, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: any, path: any);
	    readonly changeTypeItems: {
	        name: string;
	        instance: any;
	        localizationId: string;
	    }[];
	    canChange: boolean;
	    canRemove: boolean;
	    changeValueType: (type: any) => void;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import OperandSurfaceBase = DevExpress.Analytics.Widgets.Filtering.OperandSurfaceBase;;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class OperandPropertySurface extends OperandSurfaceBase<OperandProperty> {
	    private _displayName;
	    _updateDisplayName(path: any, propertyName: any, displayName: any): void;
	    _updateSpecifics(): void;
	    constructor(operator: OperandProperty, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider?: any, path?: any);
	    fieldsOptions: ko.Observable<any>;
	    displayName: ko.Computed<string>;
	    propertyName: ko.Observable<string>;
	    specifics: ko.Observable<string>;
	    dataType: ko.Observable<string>;
	    readonly items: any;
	    readonly displayType: any;
	    valueType: ko.Observable<string>;
	    changeProperty: (item: IDataMemberInfo) => void;
	    templateName: string;
	    operatorClass: string;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import OperandSurfaceBase = DevExpress.Analytics.Widgets.Filtering.OperandSurfaceBase;;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
	export class OperandParameterSurface extends OperandSurfaceBase<OperandParameter> {
	    constructor(operator: OperandParameter, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider?: any, path?: any);
	    changeParameter: (item: IDataMemberInfo) => void;
	    readonly items: any;
	    readonly displayType: any;
	    operatorClass: string;
	    parameterName: ko.Observable<string> | ko.Computed<string>;
	    templateName: string;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import OperandSurfaceBase = DevExpress.Analytics.Widgets.Filtering.OperandSurfaceBase;;
    import OperandValue = DevExpress.Analytics.Criteria.OperandValue;;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import DataSource =  DevExpress.data.DataSource ;;
	export class OperandValueSurface extends OperandSurfaceBase<OperandValue> {
	    private static _defaultValue;
	    private _value;
	    private _updateDate;
	    readonly items: any[];
	    constructor(operator: OperandValue, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: IItemsProvider, path: any);
	    readonly displayType: any;
	    changeValue: () => void;
	    isDefaultDisplay(): boolean;
	    getDefaultValue(): any;
	    dataType: ko.Observable<string> | ko.Computed<string>;
	    values: ko.Observable<any[]>;
	    value: ko.Observable<string> | ko.Computed<string>;
	    dataSource: ko.Observable<DataSource> | ko.Computed<DataSource>;
	    isEditable: ko.Observable<boolean> | ko.Computed<boolean>;
	    templateName: string;
	    getNumberEditorOptions: () => any;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import GroupOperator = DevExpress.Analytics.Criteria.GroupOperator;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class GroupOperandSurface extends CriteriaOperatorSurface<GroupOperator> {
	    constructor(operator: GroupOperator, parent: any, fieldListProvider: any, path: any);
	    change(type: any, surface: any): void;
	    remove(surface: CriteriaOperatorSurface<CriteriaOperator>): void;
	    create(type: any): void;
	    readonly rightPart: CriteriaOperatorSurface<CriteriaOperator>[];
	    dispose(): void;
	    templateName: string;
	    operatorClass: string;
	    operands: ko.ObservableArray<CriteriaOperatorSurface<CriteriaOperator>>;
	    createItems: any;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import BetweenOperator = DevExpress.Analytics.Criteria.BetweenOperator;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class BetweenOperandSurface extends CriteriaOperatorSurface<BetweenOperator> {
	    constructor(operator: BetweenOperator, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: any, path: any);
	    readonly leftPart: any;
	    readonly rightPart: any[];
	    dispose(): void;
	    property: ko.Observable<any>;
	    end: ko.Observable<any>;
	    begin: ko.Observable<any>;
	    contentTemplateName: string;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import BinaryOperator = DevExpress.Analytics.Criteria.BinaryOperator;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class BinaryOperandSurface extends CriteriaOperatorSurface<BinaryOperator> {
	    constructor(operator: BinaryOperator, parent: any, fieldListProvider: any, path: any);
	    readonly leftPart: CriteriaOperatorSurface<CriteriaOperator>;
	    readonly rightPart: any;
	    dispose(): void;
	    contentTemplateName: string;
	    leftOperand: ko.Observable<any>;
	    rightOperand: ko.Observable<any>;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import OperandSurfaceBase = DevExpress.Analytics.Widgets.Filtering.OperandSurfaceBase;;
    import FunctionOperator = DevExpress.Analytics.Criteria.FunctionOperator;;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class FunctionOperandSurface extends OperandSurfaceBase<FunctionOperator> {
	    constructor(operator: FunctionOperator, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: any, path: any);
	    readonly leftPart: CriteriaOperatorSurface<CriteriaOperator>;
	    readonly rightPart: any[];
	    readonly displayType: string;
	    dispose(): void;
	    canRemove: boolean;
	    contentTemplateName: string;
	    operands: ko.ObservableArray<any>;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {

    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
    import InOperator = DevExpress.Analytics.Criteria.InOperator;;
	export class InOperandSurface extends CriteriaOperatorSurface<InOperator> {
	    constructor(operator: InOperator, parent: any, fieldListProvider: any, path: any);
	    readonly leftPart: any;
	    readonly rightPart: any[];
	    dispose(): void;
	    addValue: () => void;
	    contentTemplateName: string;
	    operands: ko.ObservableArray<any>;
	    criteriaOperator: ko.Observable<any>;
	}

}
declare module DevExpress.Analytics.Widgets {

    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
    import FilterEditorSerializer = DevExpress.Analytics.Widgets.Internal.FilterEditorSerializer;;
    import CriteriaSurfaceValidator = DevExpress.Analytics.Widgets.Internal.CriteriaSurfaceValidator;;
    import FilterEditorAddOn = DevExpress.Analytics.Widgets.Internal.FilterEditorAddOn;;
    import AggregateOperandSurface = DevExpress.Analytics.Widgets.Filtering.AggregateOperandSurface;;
    import OperandPropertySurface = DevExpress.Analytics.Widgets.Filtering.OperandPropertySurface;;
    import OperandParameterSurface = DevExpress.Analytics.Widgets.Filtering.OperandParameterSurface;;
    import OperandValueSurface = DevExpress.Analytics.Widgets.Filtering.OperandValueSurface;;
    import GroupOperandSurface = DevExpress.Analytics.Widgets.Filtering.GroupOperandSurface;;
    import BetweenOperandSurface = DevExpress.Analytics.Widgets.Filtering.BetweenOperandSurface;;
    import BinaryOperandSurface = DevExpress.Analytics.Widgets.Filtering.BinaryOperandSurface;;
    import FunctionOperandSurface = DevExpress.Analytics.Widgets.Filtering.FunctionOperandSurface;;
    import InOperandSurface = DevExpress.Analytics.Widgets.Filtering.InOperandSurface;;
    import UnaryOperandSurface = DevExpress.Analytics.Widgets.Filtering.UnaryOperandSurface;;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;;
	export interface IFilterEditorOperator {
	    name: string;
	    value: any;
	    type: any;
	    hidden?: boolean;
	    reverse?: boolean;
	    localizationId?: string;
	    insertVal?: string;
	    displayText?: string;
	    paramCount?: number;
	    emptyRightPart?: boolean;
	}
	export class FilterEditorHelper {
	    readonly _allFilterEditorOperators: IFilterEditorOperator[];
	    _getFilterEditorOperator(item: CriteriaOperator, items: IFilterEditorOperator[], reverse: boolean): IFilterEditorOperator;
	    private _initDisplayText;
	    constructor(serializer?: any);
	    registrateOperator(specific: string, targetEnum: any, value: string, name: string, reverse?: boolean, localizationId?: string): void;
	    rtl: boolean;
	    parameters: ko.Observable<any[]> | ko.Computed<any[]>;
	    canSelectLists: boolean;
	    canCreateParameters: boolean;
	    canChoiceParameters: boolean;
	    canChoiceProperty: boolean;
	    serializer: FilterEditorSerializer;
	    criteriaTreeValidator: CriteriaSurfaceValidator;
	    filterEditorOperators: {
	        _common: IFilterEditorOperator[];
	        string: IFilterEditorOperator[];
	        guid: IFilterEditorOperator[];
	        integer: IFilterEditorOperator[];
	        float: IFilterEditorOperator[];
	        date: IFilterEditorOperator[];
	        list: IFilterEditorOperator[];
	        group: IFilterEditorOperator[];
	        bool: IFilterEditorOperator[];
	    };
	    onChange: () => void;
	    onEditorFocusOut: (criteria: CriteriaOperator) => void;
	    onSave: (criteria: string) => void;
	    onClosing: () => void;
	    handlers: {
	        create: (criteria: any, popupService: any) => {
	            data: FilterEditorAddOn;
	            templateName: string;
	        };
	        change: (criteria: any, popupService: any) => {
	            data: FilterEditorAddOn;
	            templateName: string;
	        };
	        changeProperty: (criteria: any, popupService: any) => {
	            data: FilterEditorAddOn;
	            templateName: string;
	        };
	        changeValueType: (criteria: any, popupService: any) => {
	            data: FilterEditorAddOn;
	            templateName: string;
	        };
	        changeParameter: (criteria: any, popupService: any) => {
	            data: FilterEditorAddOn;
	            templateName: string;
	        };
	    };
	    generateTreelistOptions(fieldListProvider: any, path: any): any;
	    mapper: {
	        Aggregate: typeof AggregateOperandSurface;
	        Property: typeof OperandPropertySurface;
	        Parameter: typeof OperandParameterSurface;
	        Value: typeof OperandValueSurface;
	        Group: typeof GroupOperandSurface;
	        Between: typeof BetweenOperandSurface;
	        Binary: typeof BinaryOperandSurface;
	        Function: typeof FunctionOperandSurface;
	        In: typeof InOperandSurface;
	        Unary: typeof UnaryOperandSurface;
	        Default: typeof CriteriaOperatorSurface;
	    };
	    aceTheme: string;
	    getDisplayPropertyName: (path: string, name: string) => JQueryPromise<string>;
	}
	export var DefaultFilterEditorHelper: (newVal?: any) => any;
	export function _setDefaultFilterEditorHelper(helperType: any): void;

}
declare module DevExpress.Analytics.Widgets {

    import FilterEditorHelper = DevExpress.Analytics.Widgets.FilterEditorHelper;;
	export interface IFilterEditorOptions {
	    value: ko.Observable<string> | ko.Computed<string>;
	    path: ko.Observable<string> | ko.Computed<string>;
	    helper?: FilterEditorHelper;
	    disabled?: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class FilterStringOptions implements IFilterEditorOptions {
	    private _title;
	    constructor(filterString: ko.Observable<string> | ko.Computed<string>, dataMember?: ko.Observable | ko.Computed, disabled?: ko.Observable<boolean> | ko.Computed<boolean>, title?: {
	        text: string;
	        localizationId?: string;
	    });
	    popupContainer: string;
	    itemsProvider: any;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    resetValue: () => void;
	    helper: FilterEditorHelper;
	    value: ko.Observable<string> | ko.Computed<string>;
	    path: ko.Observable<string> | ko.Computed<string>;
	    title: ko.PureComputed<string>;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import OperandParameterSurface = DevExpress.Analytics.Widgets.Filtering.OperandParameterSurface;;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;;
    import QueryBuilderObjectsProvider = DevExpress.QueryBuilder.Widgets.Internal.QueryBuilderObjectsProvider;;
    import QBFilterEditorHelper = DevExpress.QueryBuilder.Widgets.Internal.QBFilterEditorHelper;;
	export class OperandParameterQBSurface extends OperandParameterSurface {
	    static defaultDisplay: () => any;
	    private readonly _parameterType;
	    constructor(operator: OperandParameter, parent: any, fieldListProvider?: any, path?: any);
	    _createParameter(name: string, dataType: string): void;
	    createParameter: () => void;
	    fieldListProvider: ko.Observable<QueryBuilderObjectsProvider>;
	    _parameterName: ko.Observable<string>;
	    isEditable: ko.Observable<boolean> | ko.Computed<boolean>;
	    fieldsOptions: any;
	    helper: QBFilterEditorHelper;
	    canCreateParameters: boolean;
	    isDefaultTextDisplayed(): boolean;
	    defaultDisplay: () => any;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import OperandPropertySurface = DevExpress.Analytics.Widgets.Filtering.OperandPropertySurface;;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;;
    import QueryBuilderObjectsProvider = DevExpress.QueryBuilder.Widgets.Internal.QueryBuilderObjectsProvider;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
	export class OperandPropertyQBSurface extends OperandPropertySurface {
	    _updateSpecifics(): void;
	    constructor(operator: OperandProperty, parent: any, fieldListProvider?: QueryBuilderObjectsProvider, path?: any);
	    fieldListProvider: ko.Observable<QueryBuilderObjectsProvider>;
	    static updateSpecifics(propertySurface: {
	        fieldListProvider: ko.Observable<{
	            getColumnInfo: (path: string) => IDataMemberInfo;
	        }>;
	        propertyName: ko.Observable<string>;
	        specifics: ko.Observable<string>;
	        dataType: ko.Observable<string>;
	        fieldsOptions?: ko.Observable<{
	            selected: ko.Observable<any>;
	        }>;
	    }): void;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import FilterEditorHelper = DevExpress.Analytics.Widgets.FilterEditorHelper;;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;;
	export class QBFilterEditorHelper extends FilterEditorHelper {
	    constructor(parametersMode: string);
	    newParameters: ko.ObservableArray<DataSourceParameter>;
	}
	export var QBFilterEditorHelperDefault: typeof QBFilterEditorHelper;
	export function _setQBFilterEditorHelperDefault(helperType: any): void;

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import FilterStringOptions = DevExpress.Analytics.Widgets.FilterStringOptions;;
    import ParameterViewModel = DevExpress.QueryBuilder.Elements.ParameterViewModel;;
    import FilterEditorSerializer = DevExpress.Analytics.Widgets.Internal.FilterEditorSerializer;;
    import QBFilterEditorHelper = DevExpress.QueryBuilder.Widgets.Internal.QBFilterEditorHelper;;
	export class QBFilterStringOptions extends FilterStringOptions {
	    constructor(filterString: ko.Observable<string> | ko.Computed<string>, dataMember?: ko.Observable | ko.Computed, disabled?: ko.Observable<boolean> | ko.Computed<boolean>, title?: {
	        text: string;
	        localizationId?: string;
	    });
	    initializeFilterStringHelper(parameters: ko.ObservableArray<ParameterViewModel> | ko.Computed<ParameterViewModel[]>, parametersMode: string, serializer?: FilterEditorSerializer): void;
	    helper: QBFilterEditorHelper;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {
    import FilterEditorSerializer = DevExpress.Analytics.Widgets.Internal.FilterEditorSerializer;;
    import ColumnExpression = DevExpress.QueryBuilder.Elements.ColumnExpression;;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;;
	export class GroupFilterEditorSerializer extends FilterEditorSerializer {
	    private _columns;
	    private _columnDisplayName;
	    private _findAggregatedColumn;
	    private _aggregatePropertyName;
	    constructor(_columns: () => ColumnExpression[]);
	    serializeOperandProperty(operand: OperandProperty): string;
	    deserialize(stringCriteria: string): CriteriaOperator;
	}

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var querySerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.QueryBuilder.Internal {

    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export class QueryBuilderTreeListController extends TreeListController {
	    constructor(undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, query: ko.Observable<QueryViewModel>);
	    dblClickHandler: (item: TreeListItemViewModel) => void;
	}

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export var ConditionType: {
	    Equal: string;
	    NotEqual: string;
	    Greater: string;
	    GreaterOrEqual: string;
	    Less: string;
	    LessOrEqual: string;
	};
	export var joinConditionSerializationInfo: ISerializationInfoArray;

}
declare module DevExpress.QueryBuilder.Internal {
	export function registerControls(): void;

}
declare module DevExpress.QueryBuilder.Internal {

    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import QuerySurface = DevExpress.QueryBuilder.Elements.QuerySurface;;
    import IDBSchemaProvider = DevExpress.Analytics.Data.IDBSchemaProvider;;
    import IQueryBuilderModel = DevExpress.QueryBuilder.Internal.IQueryBuilderModel;;
    import IQueryBuilderOptions = DevExpress.Querybuilder.IQueryBuilderOptions;;
    import IQueryBuilderCustomizationHandler = DevExpress.QueryBuilder.Internal.IQueryBuilderCustomizationHandler;;
	export function updateQueryBuilderSurfaceContentSize(getRoot: () => JQuery<HTMLElement>, surfaceSize: ko.Observable<number> | ko.Computed<number>, surface: ko.Observable<QuerySurface>, updateLayoutCallbacks?: Array<() => void>): () => void;
	export function createIsLoadingFlag(model: ko.Observable<QueryViewModel> | ko.Computed<QueryViewModel>, dbSchemaProvider: ko.Observable<IDBSchemaProvider> | ko.Computed<IDBSchemaProvider>): ko.PureComputed<boolean>;
	export var isJoinsResolvingDisabled: boolean;
	export function createQueryBuilder(element: Element, options: IQueryBuilderOptions, callbacks: IQueryBuilderCustomizationHandler, applyBindings?: boolean): JQueryDeferred<IQueryBuilderModel>;

}
declare module DevExpress.QueryBuilder.Elements {

    import QueryElementBaseViewModel = DevExpress.QueryBuilder.Elements.QueryElementBaseViewModel;;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;;
    import ColumnExpression = DevExpress.QueryBuilder.Elements.ColumnExpression;;
    import IDBSchemaProvider = DevExpress.Analytics.Data.IDBSchemaProvider;;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;;
    import RelationViewModel = DevExpress.QueryBuilder.Elements.RelationViewModel;;
    import ParameterViewModel = DevExpress.QueryBuilder.Elements.ParameterViewModel;;
    import QBFilterStringOptions = DevExpress.QueryBuilder.Widgets.Internal.QBFilterStringOptions;;
    import Margins = DevExpress.Analytics.Elements.Margins;;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;;
    import JoinConditionViewModel = DevExpress.QueryBuilder.Elements.JoinConditionViewModel;;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;;
	export class QueryViewModel extends QueryElementBaseViewModel {
	    private static pageMargin;
	    private static emptyModel;
	    private _initializeTable;
	    private _addColumnsToTable;
	    constructor(querySource: any, dbSchemaProvider: IDBSchemaProvider, parametersMode?: string, beforeSaveCallback?: (data: any) => void, serializer?: ModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    canSave(showMessage?: boolean): boolean;
	    isValid: ko.Computed<boolean>;
	    editableName: ko.Observable<string> | ko.Computed<string>;
	    filterString: QBFilterStringOptions;
	    _filterString: ko.Observable<string> | ko.Computed<string>;
	    groupFilterString: QBFilterStringOptions;
	    _groupFilterString: ko.Observable<string> | ko.Computed<string>;
	    top: ko.Observable<number> | ko.Computed<number>;
	    skip: ko.Observable<number> | ko.Computed<number>;
	    pageWidth: ko.Observable<number> | ko.Computed<number>;
	    pageHeight: ko.Observable<number> | ko.Computed<number>;
	    relations: ko.ObservableArray<RelationViewModel>;
	    tables: ko.ObservableArray<TableViewModel>;
	    columns: ko.ObservableArray<ColumnExpression>;
	    filter: ko.Observable<string> | ko.Computed<string>;
	    parameters: ko.ObservableArray<ParameterViewModel> | ko.Computed<ParameterViewModel[]>;
	    margins: Margins;
	    dbSchemaProvider: IDBSchemaProvider;
	    allColumnsInTablesSelected: ko.Observable<boolean> | ko.Computed<boolean>;
	    sorting: ko.ObservableArray<ColumnExpression>;
	    grouping: ko.ObservableArray<ColumnExpression>;
	    getInfo(): ISerializationInfoArray;
	    createChild(info: any): ElementViewModel;
	    aggregatedColumnsCount: ko.Observable<number>;
	    getAllColumns(): ColumnViewModel[];
	    tryToCreateRelationsByFK(sourceTable: TableViewModel): void;
	    addChild(control: ElementViewModel): void;
	    removeChild(control: ElementViewModel): void;
	    getTable(name: string): TableViewModel;
	    private _findTableInAncestors;
	    private _findHead;
	    private _isHead;
	    private _findAncestorsRelations;
	    private _reverseRelations;
	    cerateJoinCondition(parentColumn: ColumnViewModel, nestedColumn: ColumnViewModel): JoinConditionViewModel;
	    private _validate;
	    private _validateTable;
	    serialize(includeRootTag?: boolean): any;
	    save(): any;
	    onSave: (data: any) => void;
	}

}
declare module DevExpress.QueryBuilder.Internal {

    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;;
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import ControlProperties = DevExpress.Analytics.Internal.ControlProperties;;
	export interface ITabModel {
	    editableObject: any;
	    properties: ObjectProperties;
	}
	export interface IItemPropertiesTabModel extends ITabModel {
	    fieldListModel: {
	        treeListOptions: ko.Observable<ITreeListOptions> | ko.Computed<ITreeListOptions>;
	    };
	    tablesTop: ko.Observable<number> | ko.Computed<number>;
	    searchPlaceholder: () => string;
	}
	export class AccordionTabInfo extends TabInfo {
	    static _getSelectedItemPropertyName(model: any): string;
	    static _createWrappedObject(query: any, commonModel: any, undoEngine: any, showParameters: boolean): {
	        selectedItem: any;
	        query: {
	            editableObject: any;
	            properties: ObjectProperties;
	        };
	        fields: any;
	        isPropertyVisible: (propertyName: string) => boolean;
	    };
	    static _createGroups(editableObject: ko.Observable<any>, showParameters: boolean): GroupObject;
	    static _createQBPropertyGrid(query: ko.Observable<QueryViewModel> | ko.Computed<QueryViewModel>, commonModel: IItemPropertiesTabModel, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, showParameters: boolean): ControlProperties;
	    private _getGroupByName;
	    constructor(query: ko.Observable<QueryViewModel> | ko.Computed<QueryViewModel>, itemPropertiesTabInfoModel: IItemPropertiesTabModel, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, focused: ko.Observable | ko.Computed, showParameters: boolean);
	    model: ControlProperties;
	}

}
declare module DevExpress.QueryBuilder.Internal {





}
declare module DevExpress.QueryBuilder.Internal {
	export {};

}
declare module DevExpress.Querybuilder {
    import IQueryBuilderCustomizationHandler = DevExpress.QueryBuilder.Internal.IQueryBuilderCustomizationHandler;;
	export class EventGenerator {
	    static generateQueryBuilderEvents(fireEvent: (eventName: any, args?: any) => void): IQueryBuilderCustomizationHandler;
	}

}
declare module DevExpress.Querybuilder {
    import JSQueryBuilder = DevExpress.Querybuilder.JSQueryBuilder;;
    import JSDesignerBindingCommon = DevExpress.Analytics.Internal.JSDesignerBindingCommon;;
    import IQueryBuilderModel = DevExpress.QueryBuilder.Internal.IQueryBuilderModel;;
    import IQueryBuilderOptions = DevExpress.Querybuilder.IQueryBuilderOptions;;
	export class JSQueryBuilderBinding extends JSDesignerBindingCommon<JSQueryBuilder, IQueryBuilderOptions> {
	    private options;
	    private _deferreds;
	    private _callbacks;
	    _templateHtml: string;
	    private _applyBindings;
	    private _initializeEvents;
	    private _initializeCallbacks;
	    _createModel(element: any): JQueryDeferred<IQueryBuilderModel>;
	    constructor(options: IQueryBuilderOptions, customEventRaiser?: any);
	    dispose(): void;
	    applyBindings(element: HTMLElement): void;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import Editor = DevExpress.Analytics.Widgets.Editor;;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
	export class UndoEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    generateValue(undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>): ko.Observable<any> | ko.Computed<any>;
	    undoValue: ko.Observable | ko.Computed;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {
	export function registerEditorTemplates(): void;

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

	export class KeyColumnSurface {
	    private _isMaster;
	    constructor(column: ko.Observable<string> | ko.Computed<string>, queryName: string, _isMaster?: boolean);
	    getTitle: () => any;
	    isSelected: ko.Observable<boolean> | ko.Computed<boolean>;
	    setColumn: (resultColumn: {
	        name: ko.Observable<string> | ko.Computed<string>;
	        propertyType: ko.Observable<string> | ko.Computed<string>;
	    }) => void;
	    queryName: string;
	    column: ko.Observable<string> | ko.Computed<string>;
	    selectColumnText: () => any;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {
    import PopupService = DevExpress.Analytics.Internal.PopupService;;
	export class MasterDetailEditorPopupManager {
	    private _popupService;
	    private _action;
	    private _popupItems;
	    private _updateActions;
	    constructor(target: any, popupService: PopupService, action: string, popupItems: {
	        name: any;
	    }[]);
	    target: any;
	    showPopup: (_: any, element: any) => void;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import MasterDetailRelation = DevExpress.Analytics.Data.MasterDetailRelation;;
    import MasterQuerySurface = DevExpress.QueryBuilder.Widgets.Internal.MasterQuerySurface;;
    import KeyColumnSurface = DevExpress.QueryBuilder.Widgets.Internal.KeyColumnSurface;;
	export class MasterDetailRelationSurface {
	    constructor(relation: MasterDetailRelation, parent: MasterQuerySurface);
	    relationName: ko.Observable<string> | ko.Computed<string>;
	    keyColumns: ko.Computed<{
	        master: KeyColumnSurface;
	        detail: KeyColumnSurface;
	    }[]>;
	    isEditable: ko.Observable<boolean> | ko.Computed<boolean>;
	    create: () => void;
	    remove: (data: {
	        master: KeyColumnSurface;
	        detail: KeyColumnSurface;
	    }) => void;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import MasterDetailRelation = DevExpress.Analytics.Data.MasterDetailRelation;;
    import MasterDetailRelationSurface = DevExpress.QueryBuilder.Widgets.Internal.MasterDetailRelationSurface;;
	export class MasterQuerySurface {
	    constructor(masterQueryName: string, relations: ko.ObservableArray<MasterDetailRelation>);
	    queryName: string;
	    relations: ko.ObservableArray<MasterDetailRelationSurface>;
	    create: (detailQueryItem: {
	        name: string;
	    }) => void;
	    add: (relation: MasterDetailRelation) => void;
	    remove: (relationSurface: MasterDetailRelationSurface) => void;
	}

}
declare module DevExpress.QueryBuilder.Widgets.Internal {

    import MasterDetailRelation = DevExpress.Analytics.Data.MasterDetailRelation;;
    import ResultSet = DevExpress.Analytics.Data.ResultSet;;
    import PopupService = DevExpress.Analytics.Internal.PopupService;;
    import MasterQuerySurface = DevExpress.QueryBuilder.Widgets.Internal.MasterQuerySurface;;
    import KeyColumnSurface = DevExpress.QueryBuilder.Widgets.Internal.KeyColumnSurface;;
	export class MasterDetailEditor {
	    private _createMainPopupButtons;
	    constructor(relations: ko.ObservableArray<MasterDetailRelation>, resultSet: ResultSet, saveCallBack: () => JQueryPromise<{}>);
	    isValid: ko.Observable<boolean>;
	    save: () => void;
	    popupVisible: ko.Observable<boolean>;
	    loadPanelVisible: ko.Observable<boolean>;
	    buttonItems: any[];
	    popupService: PopupService;
	    masterQueries: ko.ObservableArray<MasterQuerySurface>;
	    createRelation: (target: MasterQuerySurface) => any;
	    setColumn: (target: KeyColumnSurface) => any;
	    title(): any;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {
    import ObjectType = DevExpress.Analytics.Data.ObjectType;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;;
	export class ObjectTypeDescriptions {
	    types: ObjectType[];
	    constructor(model: any);
	}
	export interface IObjectSchemaProvider extends IItemsProvider {
	    getObjectTypeDescriptions: () => JQueryPromise<ObjectTypeDescriptions>;
	}
	export function getObjectTypeDescriptionsCallback(requestWrapper: RequestWrapper, context: string): JQueryPromise<ObjectTypeDescriptions>;
	export class ObjectSchemaProvider extends Disposable implements IObjectSchemaProvider {
	    private _requestWrapper;
	    private _objectTypeDescriptionsPromise;
	    constructor(_requestWrapper?: RequestWrapper);
	    dispose(): void;
	    getItems: (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	    getSchemaByPath(pathRequest: IPathRequest, objectSchema: ObjectTypeDescriptions): IDataMemberInfo[];
	    getObjectTypeDescriptions(context?: string): JQueryPromise<ObjectTypeDescriptions>;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ObjectType = DevExpress.Analytics.Data.ObjectType;
    import ObjectCtor = DevExpress.Analytics.Data.ObjectCtor;;
    import ObjectSchemaProvider = DevExpress.Analytics.Wizard.Internal.ObjectSchemaProvider;;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;;
	export class ChooseObjectTypesTreelistController extends TreeListController {
	    canSelect(value: any): boolean;
	}
	export class ChooseObjectTypes extends Disposable {
	    types: ko.ObservableArray<ObjectType>;
	    constructor(types: ko.ObservableArray<ObjectType>, provider: ObjectSchemaProvider);
	    availableTypesTreelistModel: ITreeListOptions;
	    selectedType: ko.Observable<ObjectType>;
	    selectedCtor: ko.Observable<ObjectCtor>;
	    selectedPath: ko.Observable<string>;
	    _scrollViewHeight: string;
	}

}
declare module DevExpress.Analytics.Wizard.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import ObjectType = DevExpress.Analytics.Data.ObjectType;
    import ObjectCtor = DevExpress.Analytics.Data.ObjectCtor;
    import ObjectDataMember = DevExpress.Analytics.Data.ObjectDataMember;;
	export class ChooseObjectDataMembers extends Disposable {
	    constructor(type: ko.Observable<ObjectType>, ctor: ko.Observable<ObjectCtor>);
	    private coerceSelection;
	    dataMembers: ko.ObservableArray<ObjectDataMember>;
	    selectedDataMembers: ko.ObservableArray<ObjectDataMember>;
	}

}
declare module DevExpress.Analytics.Wizard {
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
    import IWizardPageMetadata = DevExpress.Analytics.Wizard.IWizardPageMetadata;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export interface IFullscreenWizardPageMetadata<T extends IWizardPage> extends IWizardPageMetadata<T> {
	    navigationPanelText?: string;
	}
	export class FullscreenWizardPageFactory extends PageFactory {
	    registerMetadata<T extends IWizardPage>(pageId: string, metadata: IFullscreenWizardPageMetadata<T>): void;
	    getMetadata(key: string): IFullscreenWizardPageMetadata<IWizardPage>;
	    metadata: {
	        [key: string]: IFullscreenWizardPageMetadata<IWizardPage>;
	    };
	}

}
declare module DevExpress.Analytics.Wizard {
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;;
    import _MultiQueryDataSourceWizardOptions = DevExpress.Analytics.Wizard._MultiQueryDataSourceWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;;
	export class SpecifyObjectDataSourceSettingsPage extends WizardPageBase<IDataSourceWizardState, IObjectDataSourceWizardState> {
	    private _dataSourceWizardOptions;
	    private _types;
	    private _sections;
	    private _objectDataSource;
	    private _provider;
	    private _chooseObjectType;
	    private _chooseObjectDataMember;
	    private _chooseObjectParameters;
	    private _context;
	    private _initSections;
	    private showDescription;
	    constructor(_dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions);
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQuery.Promise<IObjectDataSourceWizardState, any, any>;
	    initialize(state: IDataSourceWizardState): JQuery.Promise<any, any, any>;
	}
	export function _registerSpecifyObjectDataSourceSettingsPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard.Internal {
    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export class DBSchemaTreeListController extends TreeListController {
	    private _customizeDBSchemaTreeListActions;
	    constructor(_customizeDBSchemaTreeListActions: (item: IDataMemberInfo, actions: IAction[]) => void);
	    getActions(value: TreeListItemViewModel): IAction<any>[];
	    canSelect(value: TreeListItemViewModel): boolean;
	}

}
declare module DevExpress.Analytics.Wizard {

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import ISqlDataSourceWizardState = DevExpress.Analytics.Wizard.ISqlDataSourceWizardState;;
    import MultiQueryTreeListItemFactory = DevExpress.Analytics.Wizard.Internal.MultiQueryTreeListItemFactory;;
    import TableQuery = DevExpress.Analytics.Data.TableQuery;;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import TreeNode = DevExpress.Analytics.Wizard.Internal.TreeNode;
    import TreeLeafNode = DevExpress.Analytics.Wizard.Internal.TreeLeafNode;;
    import _MultiQueryDataSourceWizardOptions = DevExpress.Analytics.Wizard._MultiQueryDataSourceWizardOptions;;
    import QueryBuilderPopup = DevExpress.Analytics.Wizard.Internal.QueryBuilderPopup;;
    import CustomSqlQuery = DevExpress.Analytics.Data.CustomSqlQuery;;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;;
	export class MultiQueryConfigurePage extends WizardPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    private _options;
	    private _callbacks;
	    private _selectedPath;
	    private _itemsProvider;
	    private _customQueries;
	    private _checkedQueries;
	    private _sqlTextProvider;
	    private _sqlDataSourceWrapper;
	    private _dataSource;
	    private _dataConnection;
	    private _addQueryAlgorithm;
	    private _addQueryFromTables;
	    private _addQueryFromStoredProcedures;
	    private _addQueryFromCustomQueries;
	    private _getItemsPromise;
	    private _resetDataSourceResult;
	    private _setQueryCore;
	    static _pushQuery(newQuery: ISqlQueryViewModel, node: TreeLeafNode, queries: ko.ObservableArray<ISqlQueryViewModel>): void;
	    static _removeQuery(queries: ko.ObservableArray<ISqlQueryViewModel>, node: any): void;
	    constructor(_options: _MultiQueryDataSourceWizardOptions);
	    canNext(): boolean;
	    canFinish(): boolean;
	    _showStatementPopup: (query: any) => void;
	    _AddQueryWithBuilder(): void;
	    _runQueryBuilder(): void;
	    _loadPanelViewModel(element: HTMLElement): {
	        animation: {
	            show: {
	                type: string;
	                from: number;
	                to: number;
	                duration: number;
	            };
	            hide: {
	                type: string;
	                from: number;
	                to: number;
	                duration: number;
	            };
	        };
	        deferRendering: boolean;
	        message: any;
	        visible: ko.Observable<boolean>;
	        shading: boolean;
	        shadingColor: string;
	        position: {
	            of: JQuery<HTMLElement>;
	        };
	        container: JQuery<HTMLElement>;
	    };
	    _setTableQuery(query: TableQuery, isInProcess?: ko.Observable<boolean>): JQueryPromise<ISelectStatementResponse>;
	    _setCustomSqlQuery(query: CustomSqlQuery): void;
	    _createTreeListFactory(): MultiQueryTreeListItemFactory;
	    _showQbCallBack: (name?: any, isCustomQuery?: boolean) => void;
	    commit(): JQuery.Promise<ISqlDataSourceWizardState, any, any>;
	    initialize(state: ISqlDataSourceWizardState): JQuery.Promise<ISqlQueryViewModel, any, any>;
	    _popupSelectStatement: {
	        isVisible: ko.Observable<boolean>;
	        title: () => any;
	        query: any;
	        data: ko.Observable<any>;
	        okButtonText: () => any;
	        okButtonHandler: (e: any) => void;
	        aceOptions: {
	            showLineNumbers: boolean;
	            showPrintMargin: boolean;
	            enableBasicAutocompletion: boolean;
	            enableLiveAutocompletion: boolean;
	            readOnly: boolean;
	            highlightSelectedWord: boolean;
	            showGutter: boolean;
	            highlightActiveLine: boolean;
	        };
	        aceAvailable: boolean;
	        additionalOptions: {
	            onChange: (session: any) => void;
	            onValueChange: (editor: any) => void;
	            changeTimeout: number;
	            overrideEditorFocus: boolean;
	            setUseWrapMode: boolean;
	        };
	        languageHelper: {
	            getLanguageMode: () => string;
	            createCompleters: () => any[];
	        };
	        closest(element: HTMLElement, parentSelector: string): JQuery<HTMLElement>;
	    };
	    _customResetOptions: () => undefined;
	    _queryEditIndex: ko.Observable<number>;
	    disableCustomSql: boolean;
	    _scrollViewHeight: string;
	    _getItemsAfterCheck: (node: TreeNode) => any;
	    _fieldListModel: ko.Observable<ITreeListOptions>;
	    _popupQueryBuilder: QueryBuilderPopup;
	    _customizeDBSchemaTreeListActions: (item: IDataMemberInfo, actions: IAction[]) => void;
	    _hasParametersToEdit: ko.Computed<boolean>;
	    _isDataLoadingInProcess: ko.Observable<boolean>;
	}
	export function _registerMultiQueryConfigurePage(factory: PageFactory, wizardOptions: _MultiQueryDataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard.Internal {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export class ParametersTreeListItemBase extends Disposable implements IDataMemberInfo {
	    private _displayName;
	    private _name;
	    constructor(parameter: {
	        name: ko.Observable<string> | ko.Computed<string>;
	        displayName?: any;
	    });
	    dataSourceParameter: ko.Observable<{
	        name: ko.Observable<string> | ko.Computed<string>;
	    }> | ko.Computed<{
	        name: ko.Observable<string> | ko.Computed<string>;
	    }>;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	    isList: boolean;
	    contenttemplate: string;
	    actionsTemplate: string;
	    readonly name: string;
	    readonly displayName: string;
	}
	export class ParametersTreeListItem extends ParametersTreeListItemBase {
	    parent: ParametersTreeListRootItem;
	    constructor(parameter: {
	        name: ko.Observable<string> | ko.Computed<string>;
	    }, parent: ParametersTreeListRootItem);
	    query(): ISqlQueryViewModel;
	}
	export class ParametersTreeListRootItemBase implements IDataMemberInfo {
	    constructor(name: string);
	    name: string;
	    displayName: string;
	    isList: boolean;
	    specifics: string;
	    parameters: ko.ObservableArray<ParametersTreeListItemBase>;
	    visible: ko.Observable<boolean>;
	    removeChild(parameter: any): void;
	}
	export class ParametersTreeListRootItem extends ParametersTreeListRootItemBase {
	    private _query;
	    constructor(query: ISqlQueryViewModel);
	    query(): ISqlQueryViewModel;
	}
	export class ParametersTreeListController extends TreeListController {
	    private _createNewParameter;
	    private _rootItems;
	    constructor(rootItems: ParametersTreeListRootItemBase[], createNewParameter: (queryName: string, parameters: {
	        name: string;
	    }[]) => any);
	    hasItems(item: IDataMemberInfo): boolean;
	    getActions(treeListItem: TreeListItemViewModel & {
	        data: ParametersTreeListRootItem | ParametersTreeListItem;
	    }): IAction<any>[];
	    canSelect(value: TreeListItemViewModel): boolean;
	}

}
declare module DevExpress.Analytics.Wizard {

    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import ISqlDataSourceWizardState = DevExpress.Analytics.Wizard.ISqlDataSourceWizardState;;
    import IParametersViewModelConverter = DevExpress.Analytics.Wizard.Internal.IParametersViewModelConverter;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;;
    import ICollectionEditorOptions = DevExpress.Analytics.Widgets.Internal.ICollectionEditorOptions;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export function _canEditQueryParameters(query: ISqlQueryViewModel, customQueries: ISqlQueryViewModel[]): boolean;
	export class MultiQueryConfigureParametersPage extends WizardPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    private parametersConverter;
	    private _requestWrapper;
	    private _sqlDataSourceWrapper;
	    private _selectedPath;
	    private _isParametersValid;
	    private _rootItems;
	    private _createNewParameter;
	    canNext(): boolean;
	    canFinish(): boolean;
	    constructor(parametersConverter: IParametersViewModelConverter, _requestWrapper: RequestWrapper);
	    _getParameters(): any;
	    initialize(state: ISqlDataSourceWizardState): JQuery.Promise<any, any, any>;
	    commit(): JQuery.Promise<ISqlDataSourceWizardState, any, any>;
	    _scrollViewHeight: string;
	    _fieldListModel: ko.Observable<ITreeListOptions>;
	    _removeButtonTitle: any;
	    _parametersEditorOptions: ICollectionEditorOptions;
	}
	export function _registerMultiQueryConfigureParametersPage(factory: PageFactory, requestWrapper?: RequestWrapper, parametersConverter?: IParametersViewModelConverter): void;

}
declare module DevExpress.Analytics.Wizard {

    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import ISqlDataSourceWizardState = DevExpress.Analytics.Wizard.ISqlDataSourceWizardState;;
    import ResultSet = DevExpress.Analytics.Data.ResultSet;;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;;
    import MasterDetailEditor = DevExpress.QueryBuilder.Widgets.Internal.MasterDetailEditor;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class ConfigureMasterDetailRelationshipsPage extends WizardPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    private _sqlDataSourceResultSchema;
	    dispose(): void;
	    private _relations;
	    private _resultSet;
	    private relationsSubscription;
	    private _sqlDataSourceWrapper;
	    private _updateRelations;
	    constructor(_sqlDataSourceResultSchema: (dataSource: SqlDataSource, queryName?: string, relationsEditing?: boolean) => JQueryPromise<{
	        resultSchemaJSON: string;
	        connectionParameters?: string;
	    }>);
	    canNext(): boolean;
	    canFinish(): boolean;
	    private _getResultSet;
	    initialize(state: ISqlDataSourceWizardState): JQueryPromise<ResultSet>;
	    commit(): JQuery.Promise<ISqlDataSourceWizardState, any, any>;
	    _customResetOptions: () => undefined;
	    _relationsEditor: ko.Observable<MasterDetailEditor>;
	}
	export function _registerConfigureMasterDetailRelationshipsPage(factory: PageFactory, sqlDataSourceResultSchema: (dataSource: SqlDataSource, queryName?: string, relationsEditing?: boolean) => JQueryPromise<{
	    resultSchemaJSON: string;
	    connectionParameters?: string;
	}>): void;

}
declare module DevExpress.Analytics.Wizard {
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import ChooseObjectTypes = DevExpress.Analytics.Wizard.Internal.ChooseObjectTypes;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;;
	export class ChooseObjectDataSourceTypesPage extends WizardPageBase<IObjectDataSourceWizardState, IObjectDataSourceWizardState> {
	    private _requestWrapper;
	    constructor(_requestWrapper?: RequestWrapper);
	    private _objectDataSource;
	    private _types;
	    private _provider;
	    _chooseObjectType: ChooseObjectTypes;
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQuery.Promise<IObjectDataSourceWizardState, any, any>;
	    initialize(state: IObjectDataSourceWizardState): JQuery.Promise<any, any, any>;
	    private readonly _selectedTypeName;
	}
	export function _registerChooseObjectDataSourceTypesPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard {
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import ChooseObjectDataMembers = DevExpress.Analytics.Wizard.Internal.ChooseObjectDataMembers;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;;
	export class ChooseObjectDataSourceDataMembersPage extends WizardPageBase<IObjectDataSourceWizardState, IObjectDataSourceWizardState> {
	    private _requestWrapper;
	    constructor(_requestWrapper?: RequestWrapper);
	    private _objectDataSource;
	    private _type;
	    private _ctor;
	    _chooseObjectDataMember: ChooseObjectDataMembers;
	    initialize(state: IObjectDataSourceWizardState): JQuery.Promise<any, any, any>;
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQuery.Promise<IObjectDataSourceWizardState, any, any>;
	    private readonly _selectedDataMember;
	    private readonly _needParametersPage;
	}
	export function _registerChooseObjectDataSourceDataMembersPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard {
    import _DataSourceWizardOptionsBase = DevExpress.Analytics.Wizard._DataSourceWizardOptionsBase;;
    import IMultiQueryDataSourceWizardCallbacks = DevExpress.Analytics.Wizard.Internal.IMultiQueryDataSourceWizardCallbacks;;
    import PopupWizard = DevExpress.Analytics.Wizard.PopupWizard;;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
    import PageIterator = DevExpress.Analytics.Wizard.PageIterator;;
	export class _MultiQueryDataSourceWizardOptions extends _DataSourceWizardOptionsBase<IMultiQueryDataSourceWizardCallbacks> {
	}
	export class MultiQueryDataSourceWizard extends PopupWizard {
	    private _wizardOptions;
	    constructor(pageFactory: any, _wizardOptions: _MultiQueryDataSourceWizardOptions);
	    canRunWizard(): boolean;
	    initialize(state: IDataSourceWizardState, createIterator?: (pageFactory: PageFactory, stateManager: StateManager) => PageIterator): void;
	    title: any;
	    _extendCssClass: string;
	}
	export class MultiQueryDataSourceWizardPageIterator<T extends IDataSourceWizardState = IDataSourceWizardState> extends PageIterator<T> {
	    private _wizardOptions;
	    constructor(pagesFactory: PageFactory, stateManager: StateManager, _wizardOptions: _MultiQueryDataSourceWizardOptions);
	    getNextPageId(pageId?: string): string;
	}
	export function _registerMultiQueryDataSourcePages(factory: PageFactory, dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions): PageFactory;
	export function _createMultiQueryDataSourceWizard(factory: PageFactory, dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions): MultiQueryDataSourceWizard;

}
declare module DevExpress.Analytics.Wizard {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import FullscreenWizard = DevExpress.Analytics.Wizard.FullscreenWizard;;
	export interface IWizardNavigationStep {
	    pageIds: string[];
	    currentPageId: string;
	    clickAction: () => void;
	    text: string;
	    stepIndex: number;
	    isActive: ko.Observable<boolean> | ko.Computed<boolean>;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	}
	export class WizardNavigationPanel extends Disposable {
	    constructor(wizard: FullscreenWizard);
	    resetAll(): void;
	    _currentStep(pageId: string): IWizardNavigationStep;
	    _reset(pageId: string): void;
	    _resetNextPages(pageId: string): void;
	    _setStepVisible(currentPageIndex: number): void;
	    _steps: Array<IWizardNavigationStep>;
	    isVisible: ko.Computed<boolean>;
	}

}
declare module DevExpress.Analytics.Wizard {

    import PopupWizard = DevExpress.Analytics.Wizard.PopupWizard;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;;
    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;;
    import WizardNavigationPanel = DevExpress.Analytics.Wizard.WizardNavigationPanel;;
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;;
	export class FullscreenWizard extends PopupWizard {
	    private _onCloseCallback;
	    constructor(pageFactory: FullscreenWizardPageFactory, finishCallback?: any);
	    _onClose(callback: any): void;
	    onFinish(): void;
	    _initPage(page: any): JQuery.Promise<any, any, any>;
	    _onResetPage(page: _WrappedWizardPage): void;
	    start(finishCallback?: (model: any) => JQueryPromise<boolean>): void;
	    _pageDescription(): string;
	    _description(): string;
	    navigationPanel: ko.Observable<WizardNavigationPanel>;
	    _steps: FullscreenWizardPage[];
	    _extendCssClass: string;
	    pageFactory: FullscreenWizardPageFactory;
	}

}
declare module DevExpress.Analytics.Wizard {
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;;
    import _MultiQueryDataSourceWizardOptions = DevExpress.Analytics.Wizard._MultiQueryDataSourceWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;;
	export class SpecifySqlDataSourceSettingsPage extends FullscreenWizardPage {
	    private _dataSourceWizardOptions;
	    constructor(_dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions);
	    getNextSectionId(sectionId: string): string | any[];
	    registerSections(): void;
	}
	export function _registerSpecifySqlDataSourceSettingsPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard {

    import ChooseJsonConnectionPage = DevExpress.Analytics.Wizard.ChooseJsonConnectionPage;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;;
    import ChooseJsonSourcePage = DevExpress.Analytics.Wizard.ChooseJsonSourcePage;;
    import IJsonDataSourceWizardState = DevExpress.Analytics.Wizard.IJsonDataSourceWizardState;;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
	export class SpecifyJsonConnectionPage extends ChooseJsonConnectionPage {
	    private _requestWrapper;
	    constructor(connections: any, allowCreateNewJsonConnection: any, itemsProvider?: IItemsProvider, _requestWrapper?: RequestWrapper);
	    commit(): JQuery.Promise<IJsonDataSourceWizardState, any, any>;
	    canNext(): boolean;
	    initialize(state: any): JQuery.Promise<IWizardPage, any, any>;
	    _specifySourceData: ChooseJsonSourcePage;
	}
	export function _registerSpecifyJsonConnectionPage(factory: PageFactory, connections: ko.ObservableArray<any>, allowCreateNewJsonConnection: boolean, getItemsProviderCallBack: () => IItemsProvider): void;

}
declare module DevExpress.Analytics.Wizard {
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;;
	export class SpecifyJsonDataSourceSettingsPage extends FullscreenWizardPage {
	    private _dataSourceWizardOptions;
	    constructor(_dataSourceWizardOptions: _DataSourceWizardOptions);
	    registerSections(): void;
	    getNextSectionId(sectionId: string): string;
	    canNext(): boolean;
	}
	export function _registerSpecifyJsonDataSourceSettingsPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): void;

}
declare module DevExpress.Analytics.Wizard {
    import FullscreenWizard = DevExpress.Analytics.Wizard.FullscreenWizard;;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;;
    import PageIterator = DevExpress.Analytics.Wizard.PageIterator;;
    import _MultiQueryDataSourceWizardOptions = DevExpress.Analytics.Wizard._MultiQueryDataSourceWizardOptions;;
	export class FullscreenDataSourceWizard extends FullscreenWizard {
	    private _dataSourceWizardOptions;
	    constructor(factory: any, _dataSourceWizardOptions: _DataSourceWizardOptions);
	    initialize(state: IDataSourceWizardState, createIterator?: (pageFactory: PageFactory, stateManager: StateManager) => PageIterator): void;
	    canRunWizard(): boolean;
	    _description(): any;
	}
	export class FullscreenDataSourceWizardPageIterator extends PageIterator {
	    private _dataSourceOptions;
	    private _isMoreThanOneDataSourceTypeAvailable;
	    constructor(factory: any, stateManager: any, _dataSourceOptions: _DataSourceWizardOptions, onResetPage: any);
	    getNextPageId(pageId?: string): string;
	}
	export function _createDataSourceFullscreenWizard(dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions): FullscreenDataSourceWizard;

}
declare module DevExpress.Analytics.Wizard.Internal {

	export class WizardAction {
	    constructor(handler: () => void, text: string);
	    isVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    isDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    handler: () => void;
	    text: string;
	}

}
declare module DevExpress.Analytics.Diagram {
	export {};

}
declare module DevExpress.Analytics.Diagram {





}
declare module DevExpress.Analytics.Diagram {

    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
    import ConnectionPointSurface = DevExpress.Analytics.Diagram.ConnectionPointSurface;;
	export class ConnectionPointDragHandler extends DragDropHandler {
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(control: ISelectionTarget): void;
	    drag(event: JQueryEventObject, ui: any): void;
	    doStopDrag(): void;
	    currentConnectionPoint: ConnectionPointSurface;
	}

}
declare module DevExpress.Analytics.Diagram {

    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
    import ConnectingPointSurface = DevExpress.Analytics.Diagram.ConnectingPointSurface;;
    import ConnectorViewModel = DevExpress.Analytics.Diagram.ConnectorViewModel;;
    import ConnectorSurface = DevExpress.Analytics.Diagram.ConnectorSurface;;
	export class ConnectingPointDragHandler extends DragDropHandler {
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(control: ISelectionTarget): void;
	    drag(event: JQueryEventObject, ui: any): void;
	    doStopDrag(): void;
	    startConnectingPoint: ConnectingPointSurface;
	    newConnector: ConnectorViewModel;
	    readonly newConnectorSurface: ConnectorSurface;
	}

}
declare module DevExpress.Analytics.Diagram {

    import GroupObject = DevExpress.Analytics.Internal.GroupObject;;
	export var groups: GroupObject;
	export function createDiagramDesigner(element: Element, diagramSource: ko.Observable<any>, localization?: any, rtl?: boolean): any;

}
declare module DevExpress.Analytics.Internal {
	export {};

}
declare module DevExpress.Analytics.Internal {
	export {};

}
declare module DevExpress.Analytics.Internal {
	export {};

}
declare module DevExpress.Analytics.Internal {

    import ISearchOptions = DevExpress.Analytics.Internal.ISearchOptions;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
	export interface ISearchHighlightOptions {
	    text: string | ko.Observable<string>;
	    textToSearch: ko.Observable<string> | ko.Computed<string>;
	    searchOptions?: ISearchOptions;
	}
	export function cloneHtmlBinding(data: {
	    content: any;
	    update: (options: any) => void;
	} & Disposable, element: any, valueAccessor: any, allBindings: any, viewModel: any, bindingContext: any): void;
	export class HighlightEngine extends Disposable {
	    private _$spanProtect;
	    private _$spanSearch;
	    private _options;
	    private _update;
	    content: ko.Observable<string>;
	    update(options: ISearchHighlightOptions): void;
	    private _getHighlightContent;
	    constructor(options: ISearchHighlightOptions);
	}

}
declare module DevExpress.Analytics.Widgets {
	export {};

}
declare module DevExpress.Analytics.Widgets.Ace {
	export {};

}
declare module DevExpress.Analytics.Widgets.Ace {


}
declare module DevExpress.Analytics.Widgets.Ace {
	export interface IAceEditor {
	    require(module: string): any;
	    edit(element: HTMLElement): any;
	}



}
declare module DevExpress.Analytics.Widgets {
	export {};

}
declare module DevExpress.Analytics.Widgets.Internal {
    import CodeCompletor = DevExpress.Analytics.Widgets.Internal.CodeCompletor;
    import ICodeCompletorOptions = DevExpress.Analytics.Widgets.Internal.ICodeCompletorOptions;;
	export class FilterEditorCodeCompletor extends CodeCompletor {
	    filterEditorAvailable: {
	        operators: Array<{
	            name: string;
	            insertVal: string;
	            paramCount: number;
	        }>;
	        aggregate: Array<{
	            name: string;
	            insertVal: string;
	        }>;
	        functions: Array<{
	            name: string;
	            insertVal: string;
	        }>;
	    };
	    constructor(options: ICodeCompletorOptions);
	    getFunctionsCompletions(): any[];
	    getAggregateCompletions(): any[];
	    getOperatorCompletions(prefix: any): any[];
	}

}
declare module DevExpress.Analytics.Widgets {

    import FilterEditorAddOn = DevExpress.Analytics.Widgets.Internal.FilterEditorAddOn;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IFilterEditorOptions = DevExpress.Analytics.Widgets.IFilterEditorOptions;;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;;
    import IDisplayNameProvider = DevExpress.Analytics.Utils.IDisplayNameProvider;;
    import PopupService = DevExpress.Analytics.Internal.PopupService;;
    import DisplayExpressionConverter = DevExpress.Analytics.Internal.DisplayExpressionConverter;;
    import FilterEditorHelper = DevExpress.Analytics.Widgets.FilterEditorHelper;;
    import FilterEditorCodeCompletor = DevExpress.Analytics.Widgets.Internal.FilterEditorCodeCompletor;;
	export interface IFilterEditorAddon {
	    data: FilterEditorAddOn;
	    templateName: string;
	}
	export interface IAdvancedState {
	    value: ko.Observable<boolean> | ko.Computed<boolean>;
	    animated: boolean;
	}
	export class FilterEditor extends Disposable {
	    options: ko.Observable<IFilterEditorOptions> | ko.Computed<IFilterEditorOptions>;
	    private _displayNameProvider?;
	    private _advancedMode;
	    private _createMainPopupButtons;
	    private _generateOperand;
	    private _generateSurface;
	    private _validateValue;
	    constructor(options: ko.Observable<IFilterEditorOptions> | ko.Computed<IFilterEditorOptions>, fieldListProvider: ko.Observable<IItemsProvider> | ko.Computed<IItemsProvider>, rtl?: boolean, _displayNameProvider?: IDisplayNameProvider);
	    change(type: any, surface: any): void;
	    readonly helper: FilterEditorHelper;
	    readonly path: ko.Observable<string> | ko.Computed<string>;
	    displayValue: ko.Observable<string> | ko.Computed<string>;
	    modelDisplayValue: ko.Observable<string> | ko.Computed<string>;
	    disabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    dispose(): void;
	    onInput(s: any, e: any): void;
	    onFocus(): void;
	    onBlur(): void;
	    cacheElement($element: JQuery): void;
	    updateCriteria(): void;
	    onValueChange(value: any): void;
	    focusText(): void;
	    textFocused: ko.Observable<boolean>;
	    aceAvailable: boolean;
	    languageHelper: {
	        getLanguageMode: () => string;
	        createCompleters: (editor: any, bindingContext: any, viewModel: any) => FilterEditorCodeCompletor[];
	    };
	    aceOptions: {
	        showLineNumbers: boolean;
	        showPrintMargin: boolean;
	        enableBasicAutocompletion: boolean;
	        enableLiveAutocompletion: boolean;
	        showGutter: boolean;
	    };
	    additionalOptions: {
	        onChange: (session: any) => void;
	        changeTimeout: number;
	        onFocus: (_: any) => void;
	        onBlur: (_: any) => void;
	    };
	    editorContainer: ko.Observable<any>;
	    textVisible: ko.Observable<boolean>;
	    getPopupContainer: (el: any) => JQuery<HTMLElement>;
	    timeout: any;
	    animationTimeout: any;
	    advancedMode: ko.Computed<boolean>;
	    invalidMessage: () => any;
	    advancedModeText: ko.Observable<any>;
	    modelValueIsValid: ko.Computed<boolean>;
	    isSurfaceValid: ko.Computed<boolean>;
	    showText: ko.Observable<boolean> | ko.Computed<boolean>;
	    displayExpressionConverter: DisplayExpressionConverter;
	    isValid: ko.Computed<boolean>;
	    fieldListProvider: any;
	    createAddButton: (criteria: any) => IFilterEditorAddon;
	    createChangeType: (criteria: any) => IFilterEditorAddon;
	    createChangeProperty: (criteria: any) => IFilterEditorAddon;
	    createChangeParameter: (criteria: any) => IFilterEditorAddon;
	    createChangeValueType: (criteria: any) => IFilterEditorAddon;
	    operandSurface: ko.Observable<any>;
	    operand: any;
	    save: () => void;
	    popupVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    buttonItems: any[];
	    popupService: PopupService;
	    value: ko.Observable<string> | ko.Computed<string>;
	    rtl: boolean;
	}
	export class FilterEditorPlain extends FilterEditor {
	    private element;
	    private _contentMargins;
	    private _topOffset;
	    private _defaultActiveTextContentHeightPerc;
	    private _defaultActiveTreeContentHeightPerc;
	    private _currentActiveTextContentHeightPerc;
	    private _currentActiveTreeContentHeightPerc;
	    constructor(element: Element, options: ko.Observable<IFilterEditorOptions>, fieldListProvider: ko.Observable<IItemsProvider>, rtl?: boolean, _displayNameProvider?: IDisplayNameProvider);
	    plainContentHeightPerc: ko.Observable<string>;
	    textContentHeightPerc: ko.Observable<any>;
	    treeContentHeightPerc: ko.Observable<any>;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
	export interface IStandardPattern {
	    type: string;
	    value: any;
	    patterns: Array<string>;
	}
	export var formatStringStandardPatterns: {
	    [key: string]: IStandardPattern;
	};

}
declare module DevExpress.Analytics.Widgets {

    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import IStandardPattern = DevExpress.Analytics.Widgets.Internal.IStandardPattern;;
    import PopupService = DevExpress.Analytics.Internal.PopupService;;
    import ILocalizationInfo = DevExpress.Analytics.Internal.ILocalizationInfo;;
	export interface IPatternItem {
	    name: string;
	    canRemove: boolean;
	}
	export interface IFormatStringEditorActions {
	    updatePreview?: (value: string, category: string, pattern: string) => JQueryPromise<_IFormatStringEditorPreviewResponse>;
	    saveCustomPattern?: (category: string, pattern: string) => JQueryPromise<boolean>;
	    removeCustomPattern?: (category: string, pattern: string) => JQueryPromise<boolean>;
	}
	export interface _IFormatStringEditorPreviewResponse {
	    Result?: string;
	    IsError?: boolean;
	}
	export class FormatStringEditor extends Disposable {
	    private _standardPatternSource;
	    private _customPatternSource;
	    private _lastUpdatePreviewPromise;
	    private _isDisabled;
	    private _timeout;
	    private okAction;
	    private _createMainPopupButtons;
	    private _convertArray;
	    private _scrollToBottom;
	    private _updateFormatList;
	    private _updateSelection;
	    private _setPreviewString;
	    private _setErrorMessage;
	    private _updatePreview;
	    private _getGeneralPreview;
	    private _wrapFormat;
	    private _updateCanAddCustomFormat;
	    private _initEditor;
	    constructor(value: ko.Observable<string>, disabled?: ko.Observable<boolean>, defaultPatterns?: {
	        [key: string]: IStandardPattern;
	    }, customPatterns?: {
	        [key: string]: Array<string>;
	    }, actions?: IFormatStringEditorActions, rtl?: ko.Observable<boolean>, popupContainer?: string);
	    updateInputText(propertyName: string, componentInstance: any): void;
	    option(name: any, value?: any): any;
	    updatePreview(value: string, category: string, pattern: string): JQueryPromise<_IFormatStringEditorPreviewResponse>;
	    readonly customPatterns: string[];
	    readonly isGeneralType: boolean;
	    getDisplayText(key: any): any;
	    getPopupContainer(el: any): JQuery<any>;
	    currentType: ko.Observable<string>;
	    setType: (e: {
	        itemData: IPatternItem;
	    }) => void;
	    setFormat: (e: {
	        itemData: IPatternItem;
	    }) => void;
	    types: Array<IPatternItem>;
	    patternList: ko.ObservableArray<IPatternItem>;
	    addCustomFormat: () => void;
	    removeCustomFormat: (e: any) => void;
	    canAddCustomFormat: ko.Observable<boolean>;
	    formatPrefix: ko.Observable<string>;
	    formatSuffix: ko.Observable<string>;
	    previewString: ko.Observable<string>;
	    formatResult: ko.Observable<string>;
	    selectedFormats: ko.Observable<IPatternItem[]>;
	    selectedTypes: ko.Observable<IPatternItem[]>;
	    popupService: PopupService;
	    popupVisible: ko.Observable<boolean>;
	    buttonItems: Array<any>;
	    localizationIdMap: {
	        [key: string]: ILocalizationInfo;
	    };
	}

}
declare module DevExpress.Analytics.Widgets {
	export {};

}
declare module DevExpress.Analytics.Widgets.Internal {
    import _dxtInherit = DevExpress.Analytics.Internal._dxtInherit;;

	export class dxPopupWithAutoHeight extends _dxtInherit {
	    _setContentHeight(): void;
	    getComponentName(): string;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
	export {};

}
declare module DevExpress.Analytics.Widgets.Internal {
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;;
    import Disposable = DevExpress.Analytics.Utils.Disposable;;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;;
	export abstract class ReorderTreeListDragDropHelper extends Disposable {
	    private dragHelperContent;
	    protected _target: TreeListItemViewModel;
	    protected _targetElement: HTMLElement;
	    protected _draggable: TreeListItemViewModel;
	    protected _draggableModel: any;
	    protected _draggableParent: any;
	    protected _targetModel: any;
	    protected _getElementViewModel(item: TreeListItemViewModel): any;
	    protected droppableClassName: string;
	    protected approveClassName: string;
	    protected classDropBefore: string;
	    protected classDropAfter: string;
	    started: boolean;
	    dispose(): void;
	    constructor(dragHelperContent: DragHelperContent);
	    protected isDragToBottom(): boolean;
	    start(draggable: TreeListItemViewModel): void;
	    canDrop(): boolean;
	    abstract getSiblings(): ko.ObservableArray<any>;
	    reorderSiblings(isDragToBottom?: boolean): void;
	    clearDroppableClasses(): void;
	    getDroppablePosition(): string;
	    drag(elementModel: any, element: HTMLElement): void;
	    stop(): void;
	    helper(draggable: any, event: any): void;
	    addDroppableClass(): void;
	    protected _removeClass(target: HTMLElement): void;
	}

}
declare module DevExpress.Analytics.Internal {
    import AccessibilityKeyboardHelperBase = DevExpress.Analytics.Internal.AccessibilityKeyboardHelperBase;;
	export class AccordionKeyboardHelper extends AccessibilityKeyboardHelperBase {
	    controlElementClassName: string;
	    focusFirstFocusableDescendant: boolean;
	    private _getElementsCount;
	    private _defferedInit;
	    private _collapseItem;
	    initialize(): void;
	    itemHandleUpArrowKey(e: any, index?: any): boolean;
	    itemHandleDownArrowKey(e: any, index?: any): boolean;
	    itemHandleEnterKey(e: any, index?: any): boolean;
	    itemHandleSpaceKey(e: any, index?: any): boolean;
	    clickHandler(e: any, index?: any): void;
	}

}
declare module DevExpress.Analytics.Internal {

    import IAction = DevExpress.Analytics.Utils.IAction;;
    import KeyboardHelperWithArrowButtonBase = DevExpress.Analytics.Internal.KeyboardHelperWithArrowButtonBase;;
    import ControlElementWithParentHighlight = DevExpress.Analytics.Internal.ControlElementWithParentHighlight;;
    import IAccessibilityLiveRegion = DevExpress.Analytics.Internal.IAccessibilityLiveRegion;;
	export class ToolbarKeyboardHelper extends KeyboardHelperWithArrowButtonBase {
	    private _buttonModels;
	    controlElementClassName: string;
	    liveRegionId: string;
	    createControlElement(element: HTMLElement, index?: number): ToolbarItemElement;
	    constructor(_buttonModels: IAction[] | ko.Observable<IAction[]> | ko.Computed<IAction[]>);
	    itemHandleEnterKey(e: any, index: any): boolean;
	    itemHandleSpaceKey(e: any, index: any): boolean;
	    itemHandleLeftArrowKey(e: any, index?: any): boolean;
	    itemHandleRightArrowKey(e: any, index?: any): boolean;
	    readonly buttonModels: IAction<any>[];
	} class ToolbarItemElement extends ControlElementWithParentHighlight {
	    element: HTMLElement;
	    private _toolbarItemModel;
	    private _liveRegion;
	    private _selectBox;
	    private _menu;
	    private _complexItem;
	    dispose(): void;
	    constructor(element: HTMLElement, _toolbarElement: HTMLElement, _toolbarItemModel: IAction, _liveRegion: () => IAccessibilityLiveRegion);
	    setFocus(): void;
	    actionExecute(): void;
	}
	export {};

}
declare module DevExpress.Analytics.Internal {
    import AccessibilityControlElementBase = DevExpress.Analytics.Internal.AccessibilityControlElementBase;;
    import ListKeyboardHelper = DevExpress.Analytics.Internal.ListKeyboardHelper;;
	export class TreeListKeyboardHelper extends ListKeyboardHelper {
	    controlElementClassName: string;
	    private _setFocusToParentNode;
	    private _toggleCollapsed;
	    private _toggleSelected;
	    private _getItemModel;
	    createControlElement(element: HTMLElement, index?: number): AccessibilityControlElementBase;
	    itemHandleLeftArrowKey(e: any, index: any): boolean;
	    itemHandleRightArrowKey(e: any, index: any): boolean;
	    itemHandleEnterKey(e: any, index: any): boolean;
	    itemHandleSpaceKey(e: any, index: any): boolean;
	    clickHandler(e: any, index: any): void;
	}

}
