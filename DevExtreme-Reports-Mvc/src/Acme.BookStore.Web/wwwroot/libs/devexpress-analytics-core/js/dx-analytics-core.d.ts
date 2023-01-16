/**
* DevExpress Analytics (dist\js\dx-analytics-core.d.ts)
* Version:  22.2.3
* Build date: Dec 6, 2022
* Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/

declare module DevExpress.Analytics.Utils {
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import IElementMetadata = DevExpress.Analytics.Elements.IElementMetadata;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;
    import AjaxSetup = DevExpress.Analytics.Internal.AjaxSetup;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import RightPanelKeyboardHelper = DevExpress.Analytics.Internal.RightPanelKeyboardHelper;
    import AccessibilityKeyboardHelperBase = DevExpress.Analytics.Internal.AccessibilityKeyboardHelperBase;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import ITabInfoOptions = DevExpress.Analytics.Utils.ITabInfoOptions;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;
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

	/// <reference types="jquery" />

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
	    isListType?: boolean;
	    isSupportQueries?: boolean;
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
	export interface IAction {
	    id?: string;
	    text?: string;
	    textId?: string;
	    group?: () => string;
	    displayText?: () => string;
	    imageClassName?: any;
	    imageTemplateName?: any;
	    container?: string;
	    clickAction: (model?: any) => void;
	    disabled?: ko.Observable<boolean> | ko.Computed<boolean>;
	    hotKey?: IHotKey;
	    hasSeparator?: boolean;
	    templateName?: string;
	    contentData?: any;
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

	export function addCultureInfo(json: {
	    messages: any;
	}): void;
	export function getLocalization(text: string, id?: string, _removeWinSymblols?: boolean): any;
	export function _stringEndsWith(value: string, searchString: string): boolean;
	export function updateLocalization(object: {
	    [key: string]: string;
	}): void;




	export class ControlsFactory<T extends string = string> {
	    getControlInfo(controlType: T): IElementMetadata;
	    getControlType(model: any): string;
	    createControl(model: any, parent: ElementViewModel, serializer?: IModelSerializer): IElementViewModel;
	    controlsMap: {
	        [key in T | string]?: IElementMetadata;
	    };
	    registerControl(typeName: T, metadata: IElementMetadata): void;
	    _getPropertyInfoByDisplayName(info: ISerializationInfoArray, path: string[], position: number): ISerializationInfo;
	    _getPropertyInfoByName(info: ISerializationInfoArray, path: string[], position: number): ISerializationInfo;
	    _getPropertyInfo(info: ISerializationInfoArray, path: string[], position: number): ISerializationInfo;
	    getPropertyInfo(controlType: T, path: any): ISerializationInfo;
	}


	export var ajaxSetup: AjaxSetup;

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
	    get type(): string;
	    get imageClassName(): string;
	    get imageTemplateName(): any;
	    get index(): number;
	    get displayName(): string;
	}


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
	    private get _modelReady();
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
	    get text(): any;
	    collapsed: ko.Subscribable<boolean>;
	}



	export class TabInfoWithPropertyGrid extends TabInfo {
	    constructor(options: ITabInfoOptions);
	    propertyGrid: ObjectProperties;
	}

	export function floatFromModel(val: string): ko.Observable<number>;
	export function fromEnum(value: string): ko.Observable<string>;
	export function parseBool(val: any): ko.Observable<any>;
	export function colorFromString(val: string): ko.Observable<string>;
	export function saveAsInt(val: number): string;
	export function colorToInt(color: string): number;
	export function intToColor(color: number, hasAlpha?: boolean): string;
	export function colorToString(val: string): string;

	export function registerBaseBinding(bindingName: string, optionsName?: string): void;
	export function addToBindingsCache(bindingText: string, value: ($context: any, $element: any) => any): void;

	/// <reference types="jquery" />
	export interface IDisplayExpressionConverter {
	    toDisplayExpression(path: string, expression: string): JQueryPromise<string>;
	    toRealExpression(path: string, expression: string): JQueryPromise<string>;
	}
	export interface IDisplayNameProvider {
	    getDisplayNameByPath: (path: string, dataMember: string) => JQueryPromise<string>;
	    getRealName: (path: string, displayDataMember: string) => JQueryPromise<string>;
	}


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
declare module DevExpress.Analytics.Internal {
    import IAction = DevExpress.Analytics.Utils.IAction;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import ISnapLine = DevExpress.Analytics.Internal.ISnapLine;
    import IArea = DevExpress.Analytics.Elements.IArea;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import SnapLinesCollector = DevExpress.Analytics.Internal.SnapLinesCollector;
    import SnapLineSurface = DevExpress.Analytics.Internal.SnapLineSurface;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import IElementMetadata = DevExpress.Analytics.Elements.IElementMetadata;
    import ToolboxItem = DevExpress.Analytics.Utils.ToolboxItem;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import PaddingModel = DevExpress.Analytics.Elements.PaddingModel;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import ISelectionProvider = DevExpress.Analytics.Internal.ISelectionProvider;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import IKeyboardCodesEnum = DevExpress.Analytics.Internal.IKeyboardCodesEnum;
    import KeyboardHelperBase = DevExpress.Analytics.Internal.KeyboardHelperBase;
    import AccessibilityControlElementBase = DevExpress.Analytics.Internal.AccessibilityControlElementBase;
    import Rectangle = DevExpress.Analytics.Elements.Rectangle;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
    import Size = DevExpress.Analytics.Elements.Size;
    import IJSDesignerBindingCommonOptions = DevExpress.Analytics.Internal.IJSDesignerBindingCommonOptions;
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;
    import IEditorInfo = DevExpress.Analytics.Utils.IEditorInfo;
    import ITreeListController = DevExpress.Analytics.Widgets.Internal.ITreeListController;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import ArrayStore = DevExpress.data.ArrayStore;
    import CustomStore = DevExpress.data.CustomStore;
    import DataSource = DevExpress.data.DataSource;
    import IPoint = DevExpress.Analytics.Elements.IPoint;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import IShortcutActionList = DevExpress.Analytics.Internal.IShortcutActionList;
    import ICopyPasteStrategy = DevExpress.Analytics.Internal.ICopyPasteStrategy;
    import Editor = DevExpress.Analytics.Widgets.Editor;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;
    import PopupService = DevExpress.Analytics.Internal.PopupService;
    import TabPanel = DevExpress.Analytics.Utils.TabPanel;
    import AccessibilityKeyboardHelperBase = DevExpress.Analytics.Internal.AccessibilityKeyboardHelperBase;
    import IPropertiesAccessibilityProvider = DevExpress.Analytics.Internal.IPropertiesAccessibilityProvider;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;
    import Group = DevExpress.Analytics.Internal.Group;
    import DisposableType = DevExpress.Analytics.Utils.DisposableType;
    import SelectionDragDropHandler = DevExpress.Analytics.Internal.SelectionDragDropHandler;
    import ToolboxDragDropHandler = DevExpress.Analytics.Internal.ToolboxDragDropHandler;
    import DesignControlsHelper = DevExpress.Analytics.Internal.DesignControlsHelper;
    import IDesignControlsHelper = DevExpress.Analytics.Internal.IDesignControlsHelper;
    import InlineTextEdit = DevExpress.Analytics.Internal.InlineTextEdit;
    import ControlsStore = DevExpress.Analytics.Internal.ControlsStore;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;
    import ActionLists = DevExpress.Analytics.Internal.ActionLists;
    import ControlProperties = DevExpress.Analytics.Internal.ControlProperties;
    import IActionsProvider = DevExpress.Analytics.Internal.IActionsProvider;
    import IDesignerPart = DevExpress.Analytics.Internal.IDesignerPart;
    import IGroupedItem = DevExpress.Analytics.Internal.IGroupedItem;
    import ICombinedProperty = DevExpress.Analytics.Internal.ICombinedProperty;
    import IDesignerModel = DevExpress.Analytics.Internal.IDesignerModel;
    import dxButton = DevExpress.ui.dxButton;
    import KeyboardHelperWithArrowButtonBase = DevExpress.Analytics.Internal.KeyboardHelperWithArrowButtonBase;
    import IDisplayExpressionConverter = DevExpress.Analytics.Utils.IDisplayExpressionConverter;
    import IDisplayNameProvider = DevExpress.Analytics.Utils.IDisplayNameProvider;
    import ISearchOptions = DevExpress.Analytics.Internal.ISearchOptions;
    import ControlElementWithParentHighlight = DevExpress.Analytics.Internal.ControlElementWithParentHighlight;
    import IAccessibilityLiveRegion = DevExpress.Analytics.Internal.IAccessibilityLiveRegion;
    import ListKeyboardHelper = DevExpress.Analytics.Internal.ListKeyboardHelper;

	export interface IActionsProvider {
	    getActions: (context: any) => IAction[];
	}
	export class BaseActionsProvider implements IActionsProvider {
	    actions: IAction[];
	    initActions(actions: IAction[]): void;
	    getActions(context: any): IAction[];
	    condition(context: any): boolean;
	    setDisabled: (context: any) => void;
	}

	export function knockoutArrayWrapper<T>(items?: any, ...onChange: Array<(array: any[], event?: string) => void>): ko.ObservableArray<T>;
	export function isPlainObject(obj: any): boolean;
	export function isEmptyObject(obj: any): boolean;
	export function extend(target: any, object1?: any, ...objectN: any[]): any;
	export function assignObj(obj: object, objectProps?: object): object;

	/// <reference types="jquery" />
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
	export function localizeWithUpdateLocalizationMethod(oldText: string): string | boolean;
	export function localize(val: string): any;
	export function formatDate(val: any): string;
	export function parseDate(val: any, useDefault?: boolean, format?: string): Date;

	/// <reference types="jquery" />

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
	export var _replaceUploadFile: (newFunc: any) => any;
	export function setUploadFile(newFunc: any): void;
	export function compareEditorInfo(editor1: any, editor2: any): boolean;
	export function findMatchesInString(stringWhereSearch: string, searchPattern: string, options?: ISearchOptions): RegExpMatchArray;
	export function escapeToRegExp(value: String): string;
	export function stringRemove(value: string, start: number, count?: number): string;
	export function stringReplace(value: string, start: number, count?: number, newChar?: string): string;
	export function stringInsert(value: string, pos: number, subStr: string): string;
	export function formatUnicorn(text: string, ...args: any[]): string;
	export interface IModelAction {
	    id?: string;
	    action: (propertyName: string) => void;
	    title: string;
	    visible: (propertyName: string) => boolean;
	    hint?: ko.Observable<string> | ko.Computed<string>;
	    weight?: number;
	    itemTemplate?: string;
	    innerTemplate?: {
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

	export function getTypeNameFromFullName<T extends string = string>(controlType: string): string;
	export function getShortTypeName(controlType: string): string;
	export function getControlTypeName(value: any): any;
	export function getControlFullName(value: any): string;
	export function getImageClassName(controlType: string, isTemplate?: boolean): string;
	export function getUniqueNameForNamedObjectsArray(objects: any[], prefix: string, names?: string[]): string;
	export function getUniqueName(names: string[], prefix: string, inculdeFirst?: boolean): string;

	export function _defineProperty(legacyObject: any, realObject: any, propertyName: any, newPropertyName?: any): void;
	export function _definePropertyByString(rootObject: any, ...objectPathes: string[]): void;
	export function addDisposeCallback(element: Node, callback: () => any): void;
	export function createGlobalModuleVariableFunc<T>(defaultVal: T): (newVal?: T) => T;

	export var accessibilityFontSizeZoomFactor: (newVal?: number) => number;
	export var calculateWithZoomFactor: (value: number) => number;

	/// <reference types="jquery" />

	export function integerValueConverter(val: any, defaultValue: any, type?: any): any;
	export function enumValueConverter(val: any, defaultValue: any, valuesList: any): any;
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
	export function getParentContainer(el: HTMLElement, container?: string): any;
	export function isNullOrEmptyString(str: string): boolean;

	/// <reference types="jquery" />
	export class AjaxSetup {
	    ajaxSettings: JQueryAjaxSettings;
	    sendRequest(settings: JQueryAjaxSettings): JQueryXHR;
	}

	export var dxversions: {
	    analytics: string;
	    devextreme: any;
	};

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

	export function createObservableReverseArrayMapCollection<T>(elementModels: any, target: ko.ObservableArray<T>, createItem: (item: any) => T): any;
	export function createObservableArrayMapCollection<T>(elementModels: any, target: ko.ObservableArray<T>, createItem: (item: any) => T): any;
	export function deserializeChildArray<T>(model: any, parent: any, creator: any): ko.ObservableArray<T>;
	export function getFirstItemByPropertyValue<T>(array: T[], propertyName: string, propertyValue: any, fromIndex?: number): T;
	export function findFirstItemMatchesCondition<T>(array: T[], predicate: (item: T) => boolean): T;
	export var find: typeof findFirstItemMatchesCondition;
	export function binaryIndexOf<T>(ar: T[], el: T, compare: (a: T, b: T) => number): number;
	export function compareArrays(array1: any[], array2: any[]): boolean;



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





	export function findSurface<T extends string = string>(viewModel: IElementViewModel): ISelectionTarget<T>;
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

	export var DEBUG: boolean;
	export function DebugMode(value: boolean): void;

	export var NotifyType: {
	    info: string;
	    warning: string;
	    error: string;
	    success: string;
	};
	export function NotifyAboutWarning(msg: any, showForUser?: boolean): void;
	export function getErrorMessage(jqXHR: any): any;
	export var ShowMessage: (msg: string, type?: string, displayTime?: number, debugInfo?: string, contentTemplate?: any, containerElement?: Element) => void;
	export var _setShowMessageFunc: (func: any) => any;
	export var _resetShowMessageFunc: () => (msg: string, type?: string, displayTime?: number, debugInfo?: string, contentTemplate?: any, containerElement?: Element) => void;

	/// <reference types="jquery" />

	export var _addErrorPrefix: boolean;
	export function _processError(errorThrown: string, deferred: JQueryDeferred<any>, jqXHR: any, textStatus: any, processErrorCallback?: (message: string, jqXHR: any, textStatus: any) => void): void;
	export var _errorProcessor: {
	    handlers: any[];
	    call: (e: any) => void;
	};
	export function processErrorEvent(func: any): IDisposable;



	export function getToolboxItems(controlsMap: {
	    [key: string]: IElementMetadata;
	}, defaultGroup?: string): ToolboxItem[];
	export function blur(element: Element): void;
	export const convertToCssPixelUnits: (value: number) => string;
	export const convertFromCssPixelUnits: (value: string) => number;

	export function objectsVisitor(target: any, visitor: (target: any) => any, visited?: any[], skip?: Array<string>): void;
	export function collectionsVisitor(target: any, visitor: (target: any, owner?: any) => any, collectionsToProcess?: string[], visited?: any[]): void;

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />


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
	export function getFullPath(path: string, dataMember: string): string;
	export function loadTemplates(): any;
	export function getSizeFactor(width: any): SizeFactorType;
	export var staticContext: {
	    _static: {
	        searchPlaceholder: () => any;
	        selectPlaceholder: () => any;
	        noDataText: () => any;
	        ajaxSetup: .AjaxSetup;
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
	export var ajax: (...params: (IAjaxSettings | any)[]) => any;
	export function setAjax(newFunc: any): void;
	export interface _ICommonCallbacksHandler {
	    customizeActions?: (actions: IAction[]) => void;
	    customizeLocalization?: (callbacks?: JQueryPromise<any>[]) => void;
	    onServerError?: (e: any) => void;
	    beforeRender?: (designerModel: any) => void;
	}
	export interface ICommonCallbacksHandler<T> extends _ICommonCallbacksHandler {
	    CustomizeMenuActions?: (sender: T, args: {
	        Actions: IAction[];
	    }) => void;
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
	export function createActionWrappingFunction(wrapperName: string, func: (model: any, originalHandler: (model?: any) => any) => any): (actions: IAction[]) => void;
	export function localizeNoneString(noneValue: any): any;
	export function parseZoom(val: string): number;
	export function getResizableOptions($element: Element, panelOffset: number, minWidth: ko.Observable<number> | number, position: string, startPosition: string, width?: ko.MaybeSubscribable<number>, disabled?: ko.MaybeSubscribable<boolean>): JQueryUI.ResizableOptions | any;
	export function createPasswordSerializationInfo(info: ISerializationInfo, isNew?: boolean): ISerializationInfo;

	export function roundingXDecimals(value: number, useFloor?: boolean, x?: number): number;
	export function unitsToPixel(val: number, measureUnit: string, zoom?: number): number;
	export function pixelToUnits(val: number, measureUnit: string, zoom: number): number;
	export interface IUnitProperties<M> {
	    [key: string]: (o: M) => ko.Observable<number> | ko.Computed<number>;
	}
	export function createUnitProperty(model: any, target: any, propertyName: any, property: any, measureUnit: ko.Observable<string> | ko.Computed<string>, zoom: ko.Observable<number> | ko.Computed<number>, afterCreation?: (property: any) => void): void;
	export function createUnitProperties<M>(model: M, target: any, properties: IUnitProperties<M>, measureUnit: ko.Observable<string> | ko.Computed<string>, zoom: ko.Observable<number> | ko.Computed<number>, afterCreation?: (property: any) => void): void;


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
	        transform: string;
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
	    get x(): number;
	    set x(newX: number);
	    get y(): number;
	    set y(newY: number);
	}


	export var sizeFake: ISerializationInfoArray;
	export var locationFake: ISerializationInfoArray;

	export function propertiesVisitor(target: any, visitor: (properties: any[]) => any, visited?: any[], skip?: Array<string>): void;
	export function checkModelReady(model: any): boolean;
	export function guid(): string;

	/// <reference types="jquery" />
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






	export interface ISelectingEvent {
	    control: ISelectionTarget;
	    cancel: boolean;
	    ctrlKey?: boolean;
	}
	export interface ISelectionTarget<T extends string = string> {
	    rect: ko.Observable<IArea> | ko.Computed<IArea>;
	    focused: ko.Observable<boolean> | ko.Computed<boolean>;
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    underCursor: ko.Observable<IHoverInfo> | ko.Computed<IHoverInfo>;
	    allowMultiselect: boolean;
	    locked: boolean;
	    canDrop: () => boolean;
	    getControlModel: () => ElementViewModel<T>;
	    checkParent: (surfaceParent: ISelectionTarget<T>) => boolean;
	    parent: ISelectionTarget<T>;
	    getChildrenCollection: () => ko.ObservableArray<ISelectionTarget<T>>;
	    dragCallback?: (item: TreeListItemViewModel) => void;
	    dropCallback?: (item: TreeListItemViewModel) => void;
	    findNextSelection?: () => ISelectionTarget<T>;
	}
	export interface ISelectionProvider<T extends string = string> extends IDisposable {
	    focused: ko.Observable<ISelectionTarget<T>> | ko.Computed<ISelectionTarget<T>>;
	    selectedItems: ISelectionTarget<T>[];
	    initialize(surface?: ISelectionTarget<T>): any;
	    selecting(event: ISelectingEvent): any;
	    unselecting(surface: ISelectionTarget<T>): any;
	    swapFocusedItem(surface: ISelectionTarget<T>): any;
	    ignoreMultiSelectProperties?: string[];
	    selectionWithCtrl(surface?: ISelectionTarget<T>): any;
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
	    focused: ko.PureComputed<ISelectionTarget<string>>;
	    get selectedItems(): ISelectionTarget<string>[];
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

	/// <reference types="jquery" />





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
	    private get _activeHandler();
	    private _removeHandler;
	    constructor(targetElement: HTMLElement | Window);
	    bindHandler(element: Element, handler: (e: JQueryKeyEventObject) => void, eventName?: string): void;
	}


	export class AccessibilityControlElementBase extends Disposable {
	    element: HTMLElement;
	    private _eventListeners;
	    dispose(): void;
	    constructor(element: HTMLElement);
	    addListener(element: HTMLElement, eventType: string, handler: any): void;
	    setTabIndex(index: string): void;
	    setFocus(): void;
	}



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




	export class DragHelperControlRectangle extends Rectangle {
	    position: number;
	    constructor(position: number, left?: number, top?: number, width?: number, height?: number);
	}
	export class DragHelperContent extends Rectangle {
	    private _selectionProvider;
	    private get _isEmpty();
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

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />







	export class DragDropHandler extends Disposable {
	    dispose(): void;
	    static started: ko.Observable<boolean>;
	    protected getTarget(event: MouseEvent): HTMLElement;
	    protected _snapDisabled: boolean;
	    surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>;
	    selection: SurfaceSelection;
	    snapHelper: SnapLinesHelper;
	    dragHelperContent: DragHelperContent;
	    _size: Size;
	    _getAbsoluteSurfacePosition(uiElement: any): {
	        left: number;
	        top: number;
	    };
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper?: SnapLinesHelper, dragHelperContent?: DragHelperContent);
	    addControl(control: any, dropTargetSurface: any, size: any): void;
	    recalculateSize(size: any): void;
	    helper(draggable: any, event?: any): void;
	    canDrop(dropTarget: any, controlModel: any, metaData: any): boolean;
	    startDrag(_: any): void;
	    drag(event: MouseEvent, uiElement: any, draggableModel: any): void;
	    stopDrag: (uiElement: any, draggableModel: any, event?: any) => void;
	    doStopDrag(uiElement: any, draggableModel: any, event?: any): void;
	    parent: () => JQuery<any>;
	    cursor: string;
	    containment: string;
	    alwaysAlt: boolean;
	}



	interface IResizable {
	    handles?: string;
	    filter?: string;
	    distance?: number;
	    minimumHeight?: number;
	    minimumWidth?: number;
	    selecting?: (event: MouseEvent, element: Element) => void;
	    start: (event: MouseEvent, ui?: any) => void;
	    stop: () => void;
	    resize: (event: MouseEvent, element: Element, boundsDiff: IArea) => void;
	}
	export class Resizable extends Disposable {
	    private _element;
	    private _options;
	    static inProcess: boolean;
	    readonly handleClass: string;
	    readonly handleClassSelector: string;
	    readonly resizableElementClass = "ui-resizable";
	    readonly _defaultMinSize = 1;
	    private _bodyEvents;
	    private _startResizeMousePosition;
	    private _resizeDirection;
	    private _resizeHandles;
	    private _initResize;
	    private _mouseMove;
	    private _mouseUp;
	    private _mouseDown;
	    private _initResizeHandle;
	    private _addClassToElement;
	    private _removeClassFromElement;
	    private _getBoundsDiff;
	    constructor(_element: HTMLElement, _options: IResizable);
	    initialize(): Resizable;
	}
	export function getResizeDirection(currentClassList: DOMTokenList): string;
	export {};



	interface IDraggable {
	    start: (event: MouseEvent, uiElement?: any) => void;
	    stop: (event: any, uiElement: any) => void;
	    drag: (event: MouseEvent, element: Element, boundsDiff?: IArea) => void;
	    containment: any;
	    helper: any;
	    initDrag: any;
	}
	export class Draggable extends Disposable {
	    private _element;
	    private _options;
	    static inProcess: boolean;
	    private _bodyEvents;
	    private _windowEvents;
	    private _originalDragStartCoordinates;
	    private _originalElementPosition;
	    private _startRect;
	    private _dragInitialized;
	    private _scrollableContainer;
	    private readonly _draggableElementClass;
	    private readonly _minDragDistance;
	    private _initScrollContainer;
	    private _initDrag;
	    private _addClassToElement;
	    private _mouseMove;
	    private shouldStartDrag;
	    private _mouseUp;
	    private _ghostContainer;
	    private _mouseDown;
	    constructor(_element: any, _options: IDraggable);
	}
	export {};



	interface ISelectableOptions {
	    filter: string;
	    distance: number;
	    selecting: (event: MouseEvent, element: Element) => void;
	    start: (event: MouseEvent) => void;
	    stop: () => void;
	    unselecting: (event: MouseEvent, element: Element) => void;
	    disabled: boolean;
	    zoom: number;
	}
	export class SelectableElement extends Disposable {
	    private _element;
	    private _options;
	    updateSelection(currentRect: IArea, event: MouseEvent): void;
	    constructor(_element: Element, _options: ISelectableOptions);
	    bounds: IArea;
	    isSelected: boolean;
	}
	export class Selectable extends Disposable {
	    private _element;
	    private _options;
	    static inProcess: boolean;
	    static disabled: boolean;
	    private _elements;
	    private _$window;
	    private _$selectionContent;
	    private _bodyEvents;
	    private _clearElements;
	    private _collectElements;
	    private _startRect;
	    readonly _minSelectDistance = 2;
	    private _updateSelectionContent;
	    private _initStartRect;
	    private _mouseMove;
	    private shouldStartSelect;
	    private _mouseUp;
	    private _mouseDown;
	    constructor(_element: Element, _options: ISelectableOptions);
	}
	export {};

	export {};

	export {};

	export interface IJSDesignerBindingCommonOptions {
	    callbacks?: {};
	    requestOptions?: {
	        host?: string;
	        getLocalizationAction?: string;
	    };
	}

	export class RequestHelper {
	    static generateUri(host: string, uri: string): string;
	}

	/// <reference types="jquery" />


	export class JSDesignerBindingCommon<TSender, TOptions extends IJSDesignerBindingCommonOptions> extends Disposable {
	    protected _options: TOptions;
	    protected _customEventRaiser?: any;
	    sender: TSender;
	    dispose(): void;
	    protected _fireEvent(eventName: any, args?: any): void;
	    private _warnForIncorrectCallbackName;
	    protected _checkCallbackName(availableEvents: any[]): void;
	    protected _getServerActionUrl(host: string, uri: string): string;
	    protected _generateCallbackDictionary(eventsArray: any, prefix?: string): any;
	    protected _templateHtml: string;
	    protected _getLocalizationRequest(): JQuery.Promise<{
	        messages: any;
	    }, any, any>;
	    protected _createDisposeFunction(element: HTMLElement): void;
	    static convertCallbackArrayToDictionary(callbackArray: any[]): {};
	    constructor(_options: TOptions, _customEventRaiser?: any);
	}
	export class DxAnalyticsComponentCommon<TOptions> {
	    private _element;
	    private _options;
	    constructor(_element: HTMLElement, _options: TOptions);
	    getBindingName(): string;
	    render(): void;
	    dispose(): void;
	}







	export class SelectionDragDropHandler extends DragDropHandler {
	    adjustDropTarget(dropTargetSurface: ISelectionTarget): ISelectionTarget;
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(control: ISelectionTarget): void;
	    drag(event: any, uiElement: any, draggable: any): void;
	    getLocation(adjustedTarget: any, item: any): IArea;
	    ajustLocation(adjustedTarget: any, item: any): void;
	    doStopDrag(uiElement: any, _: any): void;
	}








	export class ToolboxDragDropHandler extends DragDropHandler {
	    private _controlsFactory;
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent, controlsFactory: ControlsFactory);
	    helper(draggable: any): void;
	    doStopDrag(uiElement: any, draggableModel: any): void;
	}



	export interface IWizardDragDropHandlerOptions {
	    dragHelperContent: DragHelperContent;
	    addHandler: (dropTarget: any, item: any, position?: {
	        left: number;
	        top: number;
	    }) => void;
	    parent: string;
	    containment: string;
	    target?: string;
	}
	export class WizardDragDropHandler extends DragDropHandler {
	    protected _dropTarget: any;
	    protected _addHandler: any;
	    protected _target: any;
	    constructor(options: IWizardDragDropHandlerOptions);
	    helper(draggable: any, event: any): any;
	    doStopDrag(uiElement: any, _: any): void;
	    drag(event: MouseEvent, ui: any): void;
	}


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

	/// <reference types="jquery" />


	export function processTextEditorHotKeys(event: JQueryKeyEventObject, delegates: any): void;
	export class InlineTextEdit extends Disposable {
	    private _showInline;
	    text: ko.Observable<string> | ko.Computed<string>;
	    visible: ko.Observable<boolean> | ko.Computed<boolean>;
	    keypressAction: any;
	    show: any;
	    constructor(selection: ISelectionProvider);
	}






	export class ObjectStructureTreeListController extends Disposable implements ITreeListController {
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

	/// <reference types="jquery" />



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

	export interface IResizableOptions {
	    starting?: () => void;
	    $element?: Element;
	    stopped?: () => void;
	    zoom?: number;
	    minimumWidth?: ko.Observable<number> | number;
	    maximumWidth?: ko.Observable<number> | number;
	}


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

	/// <reference types="jquery" />




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
	    getFilter(): any;
	    setFilter(filter: any): void;
	    resetFilter(): void;
	    visible: ko.Computed<boolean>;
	}

	export function validateName(nameCandidate: any): boolean;
	export function replaceInvalidSymbols(text: string): string;
	export var nameValidationRules: {
	    type: string;
	    validationCallback: (options: any) => boolean;
	    readonly message: any;
	}[];



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


	export function deleteSelection(selection: ISelectionProvider): void;





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

	/// <reference types="jquery" />







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


	export class PopupService {
	    data: ko.Observable<any>;
	    title: ko.Observable<string>;
	    visible: ko.Observable<boolean>;
	    disabled: ko.Observable<boolean>;
	    actions: ko.ObservableArray<IModelAction>;
	    target: ko.Observable<any>;
	}





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
	    templateName: any;
	}




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

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />























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
	    disposableContainer: Disposable;
	    addDisposables: (...elem: DisposableType[]) => void;
	}
	export class DesignerContextGeneratorInternal<T extends IDesignerContext> {
	    private _context;
	    private _rtl?;
	    constructor(_context: T, _rtl?: boolean);
	    addElement(propertyName: string, model: object): DesignerContextGeneratorInternal<IDesignerContext>;
	    addUndoEngine(undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>): DesignerContextGeneratorInternal<IDesignerContext>;
	    addSurface(surface: ko.Observable | ko.Computed): DesignerContextGeneratorInternal<IDesignerContext>;
	    getContext(): IDesignerContext;
	}
	export class DesignerContextGenerator<T extends IDesignerContext> {
	    private _rtl?;
	    constructor(_rtl?: boolean);
	    addModel(model: object): DesignerContextGeneratorInternal<T>;
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
	    get handler(): IResizeHandler;
	    set handler(newVal: IResizeHandler);
	    generate(): object;
	}
	export class ContextActionsSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _actionProviders;
	    private _actions;
	    private _groupActions;
	    private _actionUndoEngineWrappingFunction;
	    private _collectActions;
	    get actionProviders(): IActionsProvider[];
	    set actionProviders(val: IActionsProvider[]);
	    get actions(): ko.Observable<IAction[]> | ko.Computed<IAction[]>;
	    set actions(val: ko.Observable<IAction[]> | ko.Computed<IAction[]>);
	    get groupActions(): ko.Observable<IGroupedItem<IAction>[]> | ko.Computed<IGroupedItem<IAction>[]>;
	    set groupActions(val: ko.Observable<IGroupedItem<IAction>[]> | ko.Computed<IGroupedItem<IAction>[]>);
	    createDefaultActions(editableObj: ko.Observable<any> | ko.Computed<any>, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>): void;
	    createDefaultGroupAction(editableObj: ko.Observable<any> | ko.Computed<any>, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>): void;
	    generate(): object;
	}
	export class DragDropSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _model;
	    private _dragHelperContent;
	    private _dragDropStarted;
	    get dragHelperContent(): DragHelperContent;
	    set dragHelperContent(val: DragHelperContent);
	    get dragDropStarted(): boolean | ko.Observable<boolean>;
	    set dragDropStarted(val: boolean | ko.Observable<boolean>);
	    addDragDropHandler(propertyName: string, handler: DragDropHandler): void;
	    generate(): object;
	}
	export class ControlsHelperSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _selection;
	    private _context;
	    private _model;
	    private controlsHelper;
	    constructor(_selection: SurfaceSelection, _context: IDesignerContext);
	    generate(): object;
	    addControlsHelper(helper?: IDesignControlsHelper): ControlsHelperSettings;
	    addControlsStore(store?: ControlsStore): ControlsHelperSettings;
	}
	export class MenuSettings extends Disposable implements IDesingerGeneratorSettings {
	    generate(): object;
	    _appMenuVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    toggleAppMenu: () => void;
	    stopPropagation: boolean;
	    getMenuPopupContainer: (el: HTMLElement) => JQuery<Element>;
	    getMenuPopupTarget: (el: HTMLElement) => JQuery<Element>;
	    get appMenuVisible(): ko.Observable<boolean> | ko.Computed<boolean>;
	    set appMenuVisible(val: ko.Observable<boolean> | ko.Computed<boolean>);
	}
	export class SelectionSettings extends Disposable implements IDesingerGeneratorSettings {
	    private _selection;
	    private _snapHelper;
	    private _editableObject;
	    private _dragDropSettings;
	    private _resizeSettings;
	    dispose(): void;
	    get selection(): SurfaceSelection;
	    set selection(val: SurfaceSelection);
	    get snapHelper(): SnapLinesHelper;
	    set snapHelper(val: SnapLinesHelper);
	    get editableObject(): ko.Observable<any> | ko.Computed<any>;
	    set editableObject(val: ko.Observable<any> | ko.Computed<any>);
	    addDragDrop(func: (settings: DragDropSettings) => void): void;
	    addResize(func: (settings: ResizeSettings) => void): void;
	    generate(): object;
	}
	export class CommonDesignerGenerator<T extends IDesignerModel> extends Disposable {
	    private _context?;
	    private _rtl?;
	    private _model;
	    private _selectionSettings;
	    private _createPopularProperties;
	    private _resetModel;
	    protected get rtl(): boolean;
	    protected set rtl(newVal: boolean);
	    dispose(): void;
	    constructor(_context?: IDesignerContext, _rtl?: boolean);
	    initializeContext(context: IDesignerContext): CommonDesignerGenerator<IDesignerModel>;
	    getPropertyByName<T>(propertyName: string): any;
	    addElement(propertyName: string, elementFunc: () => any): CommonDesignerGenerator<IDesignerModel>;
	    mapOnContext(): CommonDesignerGenerator<IDesignerModel>;
	    addSelection(func: (settings: SelectionSettings) => void): CommonDesignerGenerator<IDesignerModel>;
	    addPropertyGrid(propertyGrid?: () => ObjectProperties, propertyName?: string): CommonDesignerGenerator<IDesignerModel>;
	    addDisposableContainer(): CommonDesignerGenerator<IDesignerModel>;
	    addControlProperties(editors: ISerializationInfoArray, groups: GroupObject, accessibilityProvider?: IPropertiesAccessibilityProvider): CommonDesignerGenerator<IDesignerModel>;
	    createControlProperties(editors: ISerializationInfoArray, groups: GroupObject, accessibilityProvider?: IPropertiesAccessibilityProvider): ControlProperties;
	    addPopularProperties(controlsFactory: ControlsFactory, accessibilityProvider?: IPropertiesAccessibilityProvider): CommonDesignerGenerator<IDesignerModel>;
	    addToolboxItems(items?: () => ToolboxItem[]): CommonDesignerGenerator<IDesignerModel>;
	    addGroupedToolboxItems(): CommonDesignerGenerator<IDesignerModel>;
	    addTabPanel(panel?: () => TabPanel, addTabInfo?: () => TabInfo[]): CommonDesignerGenerator<IDesignerModel>;
	    addIsLoading(isLoadingFunc?: () => ko.Observable<boolean>): CommonDesignerGenerator<IDesignerModel>;
	    addControlsHelper(func: (settings: ControlsHelperSettings) => void): CommonDesignerGenerator<IDesignerModel>;
	    addMenu(func: (settings: MenuSettings) => void): CommonDesignerGenerator<IDesignerModel>;
	    addContextActions(func: (contextActions: ContextActionsSettings) => void): CommonDesignerGenerator<IDesignerModel>;
	    addParts(func?: (parts: any) => IDesignerPart[], useDefaults?: boolean): CommonDesignerGenerator<IDesignerModel>;
	    getModel(): IDesignerModel;
	    addActionList(actionListsFunc?: () => ActionLists): CommonDesignerGenerator<IDesignerModel>;
	}












	export function createDesigner(model: ko.Observable | ko.Computed, surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, controlsFactory: ControlsFactory, groups?: GroupObject, editors?: ISerializationInfoArray, parts?: IDesignerPart[], rtl?: boolean, selection?: SurfaceSelection, designControlsHelper?: DesignControlsHelper, undoEngine?: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, customMerge?: (propertyName: any, controls: any, undoEngine: any) => ICombinedProperty, snapLinesCollector?: SnapLinesCollector, groupLocalizationIDs?: {
	    [key: string]: string;
	}): IDesignerModel;

	/// <reference types="jquery" />


	export interface IDataSourceInfo {
	    name: string;
	    specifics?: string;
	    id?: string;
	    ref?: string;
	    data: any;
	    hasErrors?: boolean;
	    dataSerializer?: string;
	    isSqlDataSource?: boolean;
	    isJsonDataSource?: boolean;
	    isObjectDataSource?: boolean;
	    isFederationDataSource?: boolean;
	    isListType?: boolean;
	    isSupportQueries?: boolean;
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
	    constructor(fieldListCallback: (pathRequest: IPathRequest) => JQueryPromise<IDataMemberInfo[]>, rootItems: ko.ObservableArray<IDataSourceInfo>, extenders?: IItemsExtender[], rootItemsNoDragable?: boolean);
	    deferreds: JQuery.Deferred<IDataMemberInfo[]>[];
	    dispose: () => void;
	    getItems: (IPathRequest: any) => JQueryPromise<IDataMemberInfo[]>;
	}


	export class dxButtonWithTemplate extends dxButton {
	    constructor(element: any, options?: any);
	    _patchOptionValues(options: any): any;
	}

	export var StringId: {
	    MasterDetailRelationsEditor: string;
	    DataAccessBtnOK: string;
	    DataAccessBtnCancel: string;
	    DataSourceWizardTitle: string;
	    WizardPageConfigureQuery: string;
	};


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

	export {};

	export {};


	export class ControlElementWithParentHighlight extends AccessibilityControlElementBase {
	    element: HTMLElement;
	    private _parentElement;
	    private _borderCssClassName;
	    dispose(): void;
	    toolbarItemHandleFocus: () => void;
	    toolbarItemHandleBlur: () => void;
	    constructor(element: HTMLElement, _parentElement: Element);
	}


	export class KeyboardHelperWithArrowButtonBase extends AccessibilityKeyboardHelperBase {
	    resetTabIndexes(): void;
	    initialize(): void;
	    changeFocus(index: number, roundTrip?: boolean): number;
	    startIndex: number;
	}



	export class ListKeyboardHelper extends KeyboardHelperWithArrowButtonBase {
	    controlElementClassName: string;
	    createControlElement(element: HTMLElement, index?: number): AccessibilityControlElementBase;
	    itemHandleUpArrowKey(e: any, index?: any): boolean;
	    itemHandleDownArrowKey(e: any, index?: any): boolean;
	}

	/// <reference types="jquery" />

	export class DisplayExpressionConverter implements IDisplayExpressionConverter {
	    private displayNameProvider;
	    private _replaceNames;
	    constructor(displayNameProvider: IDisplayNameProvider);
	    toDisplayExpression(path: string, expression: string): JQueryPromise<string>;
	    toRealExpression(path: string, expression: string): JQuery.Promise<any, any, any>;
	}

	export {};

	export {};

	export {};



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
	    get buttonModels(): IAction[];
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
declare module DevExpress.Analytics.Widgets {
    import IEditorInfo = DevExpress.Analytics.Utils.IEditorInfo;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import Editor = DevExpress.Analytics.Widgets.Editor;
    import IControlPropertiesViewModel = DevExpress.Analytics.Internal.IControlPropertiesViewModel;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;
    import IPropertiesAccessibilityProvider = DevExpress.Analytics.Internal.IPropertiesAccessibilityProvider;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import PopupService = DevExpress.Analytics.Internal.PopupService;
    import IEditorAddon = DevExpress.Analytics.Internal.IEditorAddon;
    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;
    import FieldListEditor = DevExpress.Analytics.Widgets.FieldListEditor;
    import DataMemberTreeListController = DevExpress.Analytics.Widgets.Internal.DataMemberTreeListController;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import PropertyGridEditor = DevExpress.Analytics.Widgets.PropertyGridEditor;
    import IDisplayNameProvider = DevExpress.Analytics.Utils.IDisplayNameProvider;
    import CodeCompletor = DevExpress.Analytics.Widgets.Internal.CodeCompletor;
    import ICompletionRootItem = DevExpress.Analytics.Widgets.Internal.ICompletionRootItem;
    import DisplayExpressionConverter = DevExpress.Analytics.Internal.DisplayExpressionConverter;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;
    import ResizeHelper = DevExpress.Analytics.Widgets.Internal.ResizeHelper;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import getParentContainer = DevExpress.Analytics.Internal.getParentContainer;
    import IExpressionEditorFunction = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction;
    import Tools = DevExpress.Analytics.Widgets.Internal.Tools;
    import ExpressionEditorParametersTreeListController = DevExpress.Analytics.Widgets.Internal.ExpressionEditorParametersTreeListController;
    import ICriteriaChangeOperator = DevExpress.Analytics.Criteria.Utils.ICriteriaChangeOperator;
    import AggregateOperandSurface = DevExpress.Analytics.Widgets.Filtering.AggregateOperandSurface;
    import BetweenOperandSurface = DevExpress.Analytics.Widgets.Filtering.BetweenOperandSurface;
    import BinaryOperandSurface = DevExpress.Analytics.Widgets.Filtering.BinaryOperandSurface;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;
    import FunctionOperandSurface = DevExpress.Analytics.Widgets.Filtering.FunctionOperandSurface;
    import GroupOperandSurface = DevExpress.Analytics.Widgets.Filtering.GroupOperandSurface;
    import InOperandSurface = DevExpress.Analytics.Widgets.Filtering.InOperandSurface;
    import OperandParameterSurface = DevExpress.Analytics.Widgets.Filtering.OperandParameterSurface;
    import OperandPropertySurface = DevExpress.Analytics.Widgets.Filtering.OperandPropertySurface;
    import OperandValueSurface = DevExpress.Analytics.Widgets.Filtering.OperandValueSurface;
    import UnaryOperandSurface = DevExpress.Analytics.Widgets.Filtering.UnaryOperandSurface;
    import FilterEditorAddOn = DevExpress.Analytics.Widgets.Internal.FilterEditorAddOn;
    import FilterEditorSerializer = DevExpress.Analytics.Widgets.Internal.FilterEditorSerializer;
    import CriteriaSurfaceValidator = DevExpress.Analytics.Widgets.Internal.CriteriaSurfaceValidator;
    import FilterEditorHelper = DevExpress.Analytics.Widgets.FilterEditorHelper;
    import IFilterEditorOptions = DevExpress.Analytics.Widgets.IFilterEditorOptions;
    import FilterEditorCodeCompletor = DevExpress.Analytics.Widgets.Internal.FilterEditorCodeCompletor;
    import PopupEditorBase = DevExpress.Analytics.Widgets.Internal.PopupEditorBase;
    import IStandardPattern = DevExpress.Analytics.Widgets.Internal.IStandardPattern;
    import ILocalizationInfo = DevExpress.Analytics.Internal.ILocalizationInfo;

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

	export function addTemplate(templateName: string, templateMarkup: string): void;
	export function getTemplate(id: string): string;



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
	    get validatorInstance(): any;
	    set validatorInstance(newValue: any);
	    get onValidatedHandler(): any;
	    set onValidatedHandler(newValue: any);
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
	    get validationRules(): any;
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
	    get isComplexEditor(): boolean;
	    collapsed: ko.Observable<boolean>;
	}








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



	export class ColorPickerEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    displayValue: ko.Computed<string>;
	}



	export class FieldListEditor extends Editor {
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    path: ko.PureComputed<any>;
	    treeListController: TreeListController;
	}



	export class DataMemberEditor extends FieldListEditor {
	    constructor(modelPropertyInfo: any, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    treeListController: DataMemberTreeListController;
	}


	export class GuidEditor extends Editor {
	    _getEditorValidationRules(): any[];
	}

	export function registerDesignerEditors(): void;

	export {};



	export class FontEditor extends PropertyGridEditor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    createObjectProperties(): ObjectProperties;
	}

	export function registerBaseEditors(): void;













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
	    onContentReady?: (e: any) => void;
	}
	export function getNotValidRange(value: string, errorMessage: string): {
	    start: number;
	    end: number;
	};
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
	    aceAvailable: any;
	    tools: Tools;
	    displayValue: ko.Observable<string> | ko.Computed<string>;
	    title: () => string;
	    value: ko.Observable<string> | ko.Computed<string>;
	    textAreaValue: ko.Observable<string>;
	    theme: string;
	    languageHelper: {
	        getLanguageMode: () => string;
	        createCompleters: (editor: Editor, bindingContext: ko.BindingContext, viewModel: ExpressionEditor) => CodeCompletor[];
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
	        onChange: (session: {
	            clearAnnotations: () => void;
	            getValue: () => string;
	            setAnnotations: (any: any) => void;
	        }) => void;
	    };
	    callbacks: {
	        focus: () => undefined;
	    };
	    resizeHelper: ResizeHelper;
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
	    onHiding(e: {
	        component: any;
	        element: HTMLElement;
	    }): void;
	    onShowing(e: {
	        component: any;
	        element: HTMLElement;
	    }): void;
	    onContentReady(e: {
	        component: any;
	        element: HTMLElement;
	    }): void;
	    initDisplayValue(): void;
	    getValue(): string;
	    validate: (value: any, sender?: any) => boolean;
	    getPopupContainer: typeof getParentContainer;
	}

	/// <reference types="jquery" />
















	export class FilterEditorHelper {
	    get _allFilterEditorOperators(): Array<ICriteriaChangeOperator>;
	    _getFilterEditorOperator(item: CriteriaOperator, items: ICriteriaChangeOperator[], reverse: boolean): ICriteriaChangeOperator;
	    private _initDisplayText;
	    constructor(serializer?: FilterEditorSerializer);
	    registrateOperator(specific: string, targetEnum: any, value: string, name: string, opreatorType?: string, reverse?: boolean, localizationId?: string): void;
	    rtl: boolean;
	    parameters: ko.Observable<any[]> | ko.Computed<any[]>;
	    canSelectLists: boolean;
	    canCreateParameters: boolean;
	    canChoiceParameters: boolean;
	    canChoiceProperty: boolean;
	    serializer: FilterEditorSerializer;
	    criteriaTreeValidator: CriteriaSurfaceValidator;
	    filterEditorOperators: {
	        _common: ICriteriaChangeOperator[];
	        string: ICriteriaChangeOperator[];
	        guid: ICriteriaChangeOperator[];
	        integer: ICriteriaChangeOperator[];
	        float: ICriteriaChangeOperator[];
	        date: ICriteriaChangeOperator[];
	        list: ICriteriaChangeOperator[];
	        group: ICriteriaChangeOperator[];
	        bool: ICriteriaChangeOperator[];
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
	        aggregate: typeof AggregateOperandSurface;
	        property: typeof OperandPropertySurface;
	        parameter: typeof OperandParameterSurface;
	        value: typeof OperandValueSurface;
	        group: typeof GroupOperandSurface;
	        between: typeof BetweenOperandSurface;
	        binary: typeof BinaryOperandSurface;
	        function: typeof FunctionOperandSurface;
	        in: typeof InOperandSurface;
	        unary: typeof UnaryOperandSurface;
	        default: typeof CriteriaOperatorSurface;
	    };
	    aceTheme: string;
	    getDisplayPropertyName: (path: string, name: string) => JQueryPromise<string>;
	}
	export var DefaultFilterEditorHelper: (newVal?: any) => any;
	export function _setDefaultFilterEditorHelper(helperType: any | FilterEditorHelper): void;


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

	export {};

	export {};

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />









	export interface IFilterEditorAddon {
	    data: FilterEditorAddOn;
	    templateName: string;
	}
	export interface IAdvancedState {
	    value: ko.Observable<boolean> | ko.Computed<boolean>;
	    animated: boolean;
	}
	export class FilterEditor extends PopupEditorBase {
	    options: ko.Observable<IFilterEditorOptions> | ko.Computed<IFilterEditorOptions>;
	    private _displayNameProvider?;
	    private _advancedMode;
	    private _generateOperand;
	    private _generateSurface;
	    private _validateValue;
	    constructor(options: ko.Observable<IFilterEditorOptions> | ko.Computed<IFilterEditorOptions>, fieldListProvider: ko.Observable<IItemsProvider> | ko.Computed<IItemsProvider>, rtl?: boolean, _displayNameProvider?: IDisplayNameProvider);
	    canSave(): boolean;
	    change(type: any, surface: any): void;
	    get helper(): FilterEditorHelper;
	    get path(): ko.Observable<string> | ko.Computed<string>;
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
	    aceAvailable: any;
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
	    getPopupContainer: (el: any) => any;
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
	    popupService: PopupService;
	    value: ko.Observable<string> | ko.Computed<string>;
	    rtl: boolean;
	    get cancelLocalization(): any;
	    get saveLocalization(): any;
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

	/// <reference types="jquery" />




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
	    get customPatterns(): string[];
	    get isGeneralType(): boolean;
	    getDisplayText(key: any): any;
	    getPopupContainer(el: any): any;
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

	export {};

}
declare module DevExpress.Analytics.Elements.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;

	export var left: ISerializationInfo, right: ISerializationInfo, top: ISerializationInfo, bottom: ISerializationInfo, all: ISerializationInfo;
	export var paddingSerializationsInfo: ISerializationInfo[];

}
declare module DevExpress.Analytics.Elements {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;
    import IModelActionProvider = DevExpress.Analytics.Internal.IModelActionProvider;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;
    import IMargins = DevExpress.Analytics.Elements.IMargins;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;
    import CssCalculator = DevExpress.Analytics.Internal.CssCalculator;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;
    import Point = DevExpress.Analytics.Elements.Point;

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
	export interface IElementViewModel<T extends string = string> {
	    controlType: T;
	    name: ko.Observable<string> | ko.Computed<string>;
	    parentModel: ko.Observable<IElementViewModel<T>>;
	    addChild: (element: IElementViewModel<T>) => void;
	    addChilds: (array: IElementViewModel<T>[]) => void;
	    removeChild: (element: IElementViewModel<T>) => void;
	    removeChilds: (array: IElementViewModel<T>[]) => void;
	    getNearestParent: (dropTarget: IElementViewModel<T>) => IElementViewModel<T>;
	}
	export interface IControlPropertiesViewModel<T extends string = string> {
	    isPropertyDisabled: (name: string) => boolean;
	    isPropertyVisible: (name: string, isPopularProperty?: boolean) => boolean;
	    isPropertyModified: (name: string) => boolean;
	    controlType?: T;
	    actions: IModelAction[];
	    actionProviders?: IModelActionProvider[];
	}
	export class ElementViewModel<T extends string = string> extends Disposable implements IElementViewModel<T>, IControlPropertiesViewModel<T> {
	    protected _resetProperty(propertyName: string): void;
	    getPropertyDefaultValue(propertyName: string): any;
	    getPropertyInfo(propertyName: string): ISerializationInfo;
	    getInfo(): ISerializationInfoArray;
	    createControl(model: any, serializer?: IModelSerializer): any;
	    dispose(): void;
	    preInitProperties(model: any, parent: ElementViewModel<T>, serializer?: IModelSerializer): void;
	    constructor(model: any, parent: ElementViewModel<T>, serializer?: IModelSerializer);
	    getNearestParent(target: IElementViewModel<T>): IElementViewModel<T>;
	    getControlInfo(): { [key in string | T]?: IElementMetadata; }["Unknown" | T];
	    getMetaData(): {
	        isContainer: boolean;
	        isCopyDeny: boolean;
	        isDeleteDeny: boolean;
	        canDrop: (dropTarget: ISelectionTarget<string>, dragFrom?: ElementViewModel<string>) => boolean;
	        isPasteDeny: boolean;
	    };
	    _hasModifiedValue(name: any): any;
	    name: ko.Observable<string> | ko.Computed<string>;
	    controlType: T;
	    createChild(info: {}): ElementViewModel<T>;
	    removeChilds(controls: ElementViewModel<T>[]): void;
	    addChilds(controls: ElementViewModel<T>[]): void;
	    removeChild(control: ElementViewModel<T>): void;
	    addChild(control: IElementViewModel<T>): void;
	    isPropertyVisible(name: string): boolean;
	    isPropertyDisabled(name: string): boolean;
	    isPropertyModified(name: string): any;
	    getControlFactory(): ControlsFactory<T>;
	    resetValue: (propertyName: string) => void;
	    isResettableProperty(propertyName: string): boolean;
	    surface: any;
	    parentModel: ko.Observable<ElementViewModel<T>>;
	    _getRoot(): ElementViewModel<T>;
	    get root(): ElementViewModel<T>;
	    rtl(): boolean;
	    onDelete(): void;
	    actions: IModelAction[];
	    actionProviders: any[];
	    update: ko.Observable<boolean>;
	}



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
	export class SurfaceElementArea<M extends ElementViewModel<T>, T extends string = string> extends Disposable {
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
	export class SurfaceElementBase<M extends ElementViewModel<T>, T extends string = string> extends SurfaceElementArea<M> implements ISelectionTarget<T> {
	    private _countSelectedChildren;
	    context: ISurfaceContext;
	    constructor(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>);
	    focused: ko.Observable<boolean> | ko.Computed<boolean>;
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    isSelected: ko.Observable<boolean> | ko.Computed<boolean>;
	    cssCalculator: CssCalculator;
	    underCursor: ko.Observable<IHoverInfo> | ko.Computed<IHoverInfo>;
	    _getParent(): any;
	    get parent(): any;
	    checkParent(surfaceParent: ISelectionTarget<T>): boolean;
	    allowMultiselect: boolean;
	    css: ko.Observable<any> | ko.Computed<any>;
	    contentCss: ko.Observable<any> | ko.Computed<any>;
	    _getChildrenHolderName(): string;
	    getChildrenCollection(): ko.ObservableArray<any>;
	    absolutePosition: Point;
	    updateAbsolutePosition(): void;
	    canDrop(): boolean;
	    afterUpdateAbsolutePosition(): void;
	    findNextSelection(): ISelectionTarget<T>;
	    absoluteRect: ko.Computed<IArea>;
	    getUsefulRect: () => IArea;
	    locked: boolean;
	}

	export class Rectangle {
	    constructor(left?: number, top?: number, width?: number, height?: number);
	    left: ko.Observable<number>;
	    top: ko.Observable<number>;
	    width: ko.Observable<number>;
	    height: ko.Observable<number>;
	    className: string;
	}


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




	export class SerializableModel extends Disposable {
	    preInitProperties(model: any, serializer?: IModelSerializer, info?: ISerializationInfoArray): void;
	    constructor(model: any, serializer?: IModelSerializer, info?: ISerializationInfoArray);
	    getInfo(): ISerializationInfoArray;
	}

}
declare module DevExpress.Analytics.Criteria {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;
    import CriteriaProcessType = DevExpress.Analytics.Criteria.Utils.CriteriaProcessType;
    import ICriteriaChangeOperator = DevExpress.Analytics.Criteria.Utils.ICriteriaChangeOperator;
    import UnaryOperatorType = DevExpress.Analytics.Criteria.UnaryOperatorType;
    import ICriteriaOperatorVisitor = DevExpress.Analytics.Criteria.Utils.ICriteriaOperatorVisitor;
    import BinaryOperatorType = DevExpress.Analytics.Criteria.BinaryOperatorType;
    import OperandValue = DevExpress.Analytics.Criteria.OperandValue;
    import FunctionOperatorType = DevExpress.Analytics.Criteria.FunctionOperatorType;
    import GroupOperatorType = DevExpress.Analytics.Criteria.GroupOperatorType;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;
    import IPropertyLocation = DevExpress.Analytics.Criteria.Utils.IPropertyLocation;

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


	export interface IAggregateOperandOptions {
	    property: CriteriaOperator;
	    aggregatedExpression: CriteriaOperator;
	    aggregateType: string;
	    condition: any;
	}


	export interface IBetweenOperatorOptions {
	    property: CriteriaOperator;
	    begin: CriteriaOperator;
	    end: CriteriaOperator;
	}


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

	export enum FunctionOperatorType {
	    None = 0,
	    Custom = 1,
	    CustomNonDeterministic = 2,
	    Iif = 3,
	    InRange = 4,
	    IsNull = 5,
	    IsNullOrEmpty = 6,
	    Trim = 7,
	    Len = 8,
	    Substring = 9,
	    Upper = 10,
	    Lower = 11,
	    Concat = 12,
	    Ascii = 13,
	    Char = 14,
	    ToStr = 15,
	    Replace = 16,
	    Reverse = 17,
	    Insert = 18,
	    CharIndex = 19,
	    Remove = 20,
	    Abs = 21,
	    Sqr = 22,
	    Cos = 23,
	    Sin = 24,
	    Atn = 25,
	    Exp = 26,
	    Log = 27,
	    Rnd = 28,
	    Tan = 29,
	    Power = 30,
	    Sign = 31,
	    Round = 32,
	    Ceiling = 33,
	    Floor = 34,
	    Max = 35,
	    Min = 36,
	    Acos = 37,
	    Asin = 38,
	    Atn2 = 39,
	    BigMul = 40,
	    Cosh = 41,
	    Log10 = 42,
	    Sinh = 43,
	    Tanh = 44,
	    PadLeft = 45,
	    PadRight = 46,
	    StartsWith = 47,
	    EndsWith = 48,
	    Contains = 49,
	    ToInt = 50,
	    ToLong = 51,
	    ToFloat = 52,
	    ToDouble = 53,
	    ToDecimal = 54,
	    LocalDateTimeThisYear = 55,
	    LocalDateTimeThisMonth = 56,
	    LocalDateTimeLastWeek = 57,
	    LocalDateTimeThisWeek = 58,
	    LocalDateTimeYesterday = 59,
	    LocalDateTimeToday = 60,
	    LocalDateTimeNow = 61,
	    LocalDateTimeTomorrow = 62,
	    LocalDateTimeDayAfterTomorrow = 63,
	    LocalDateTimeNextWeek = 64,
	    LocalDateTimeTwoWeeksAway = 65,
	    LocalDateTimeNextMonth = 66,
	    LocalDateTimeNextYear = 67,
	    InDateRange = 68,
	    IsOutlookIntervalBeyondThisYear = 69,
	    IsOutlookIntervalLaterThisYear = 70,
	    IsOutlookIntervalLaterThisMonth = 71,
	    IsOutlookIntervalNextWeek = 72,
	    IsOutlookIntervalLaterThisWeek = 73,
	    IsOutlookIntervalTomorrow = 74,
	    IsOutlookIntervalToday = 75,
	    IsOutlookIntervalYesterday = 76,
	    IsOutlookIntervalEarlierThisWeek = 77,
	    IsOutlookIntervalLastWeek = 78,
	    IsOutlookIntervalEarlierThisMonth = 79,
	    IsOutlookIntervalEarlierThisYear = 80,
	    IsOutlookIntervalPriorThisYear = 81,
	    IsLastMonth = 82,
	    IsLastYear = 83,
	    IsNextMonth = 84,
	    IsNextYear = 85,
	    IsThisWeek = 86,
	    IsThisMonth = 87,
	    IsThisYear = 88,
	    IsJanuary = 89,
	    IsFebruary = 90,
	    IsMarch = 91,
	    IsApril = 92,
	    IsMay = 93,
	    IsJune = 94,
	    IsJuly = 95,
	    IsAugust = 96,
	    IsSeptember = 97,
	    IsOctober = 98,
	    IsNovember = 99,
	    IsDecember = 100,
	    IsSameDay = 101,
	    IsYearToDate = 102,
	    DateDiffTick = 103,
	    DateDiffSecond = 104,
	    DateDiffMilliSecond = 105,
	    DateDiffMinute = 106,
	    DateDiffHour = 107,
	    DateDiffDay = 108,
	    DateDiffMonth = 109,
	    DateDiffYear = 110,
	    GetDate = 111,
	    GetMilliSecond = 112,
	    GetSecond = 113,
	    GetMinute = 114,
	    GetHour = 115,
	    GetDay = 116,
	    GetMonth = 117,
	    GetYear = 118,
	    GetDayOfWeek = 119,
	    GetDayOfYear = 120,
	    GetTimeOfDay = 121,
	    Now = 122,
	    UtcNow = 123,
	    Today = 124,
	    AddTimeSpan = 125,
	    AddTicks = 126,
	    AddMilliSeconds = 127,
	    AddSeconds = 128,
	    AddMinutes = 129,
	    AddHours = 130,
	    AddDays = 131,
	    AddMonths = 132,
	    AddYears = 133,
	    OrderDescToken = 134
	}
	export interface IFunctionOperatorProperties {
	    operatorType: FunctionOperatorType;
	    operands: any[];
	}


	export enum GroupOperatorType {
	    And = 0,
	    Or = 1
	}
	export interface IGroupOperatorOptions {
	    operation: GroupOperatorType;
	    operands: Array<CriteriaOperator>;
	}


	export interface IInOperatorOptions {
	    criteriaOperator: CriteriaOperator;
	    operands: any[];
	}


	export interface IJoinOperandOptions {
	    joinTypeName: string;
	    condition: CriteriaOperator;
	    type: string;
	    aggregated: CriteriaOperator;
	}

	export interface IOperandParameterOptions {
	    parameterName?: string;
	    value?: string;
	}

	export interface IOperandPropertyOptions {
	    propertyName: string;
	    startColumn: any;
	    startLine: any;
	    originalPropertyLength: any;
	    circumflex: boolean;
	}

	export interface IOperandValueOptions {
	    value: any;
	}



 type CriteriaFactory = {
	    [k in keyof CriteriaProcessType]?: (options?: CriteriaProcessType[k]) => CriteriaOperator;
	}; type CriteriaChangeFactory = {
	    [k in keyof CriteriaProcessType]?: (options?: ICriteriaChangeOperator) => CriteriaOperator;
	};
	export class CriteriaOperatorPreprocessor {
	    _factory: CriteriaFactory;
	    _changeTypeFactory: CriteriaChangeFactory;
	    _func: Array<(currentOperand: CriteriaOperator, options: {
	        operatorType: string;
	        options: any;
	    }) => CriteriaOperator>;
	    constructor();
	    addListener(func: (currentOperand: CriteriaOperator, options: {
	        operatorType: string;
	        options: any;
	    }) => CriteriaOperator): void;
	    removeListener(func: (currentOperand: CriteriaOperator, options: {
	        operatorType: string;
	        options: any;
	    }) => CriteriaOperator): void;
	    register<K extends keyof CriteriaProcessType>(operatorType: K, create: (options: CriteriaProcessType[K]) => CriteriaOperator, changeType?: (changeOperator: ICriteriaChangeOperator) => CriteriaOperator): void;
	    process<K extends keyof CriteriaProcessType>(operatorType: K, options?: CriteriaProcessType[K]): CriteriaOperator;
	    changeByType(value: ICriteriaChangeOperator): CriteriaOperator;
	}
	export var criteriaCreator: CriteriaOperatorPreprocessor;
	export {};





	export class UnaryOperator extends CriteriaOperator {
	    constructor(operatorType: UnaryOperatorType, operand: CriteriaOperator);
	    get leftPart(): CriteriaOperator;
	    operand: CriteriaOperator;
	    operatorType: UnaryOperatorType;
	    assignFrom(criteriaOperator: CriteriaOperator): void;
	    get displayType(): string;
	    get enumType(): typeof UnaryOperatorType;
	    type: keyof CriteriaProcessType;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}




	export class AggregateOperand extends CriteriaOperator {
	    constructor(property: CriteriaOperator, aggregatedExpression: CriteriaOperator, aggregateType: string, condition: CriteriaOperator);
	    get displayType(): string;
	    get enumType(): typeof AggregateOperand;
	    get leftPart(): CriteriaOperator;
	    children(): CriteriaOperator[];
	    change: (operationType: any, item: CriteriaOperator) => CriteriaOperator;
	    assignLeftPart: (criteriaOperator: CriteriaOperator) => void;
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator;
	    property: CriteriaOperator;
	    condition: CriteriaOperator;
	    operatorType: string;
	    aggregatedExpression: any;
	    type: keyof CriteriaProcessType;
	}




	export class BetweenOperator extends CriteriaOperator {
	    constructor(property: CriteriaOperator, begin: CriteriaOperator, end: CriteriaOperator);
	    property: CriteriaOperator;
	    begin: CriteriaOperator;
	    end: CriteriaOperator;
	    get leftPart(): CriteriaOperator;
	    get rightPart(): CriteriaOperator[];
	    assignLeftPart: (criteriaOperator: CriteriaOperator) => void;
	    assignRightPart: (criteriaOperator: CriteriaOperator) => void;
	    get displayType(): string;
	    operatorType: string;
	    get enumType(): typeof BetweenOperator;
	    type: keyof CriteriaProcessType;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}





	export class BinaryOperator extends CriteriaOperator {
	    constructor(left: CriteriaOperator, right: CriteriaOperator, operatorType: BinaryOperatorType);
	    get leftPart(): CriteriaOperator;
	    get rightPart(): CriteriaOperator;
	    assignLeftPart: (criteriaOperator: CriteriaOperator) => void;
	    assignRightPart: (criteriaOperator: CriteriaOperator) => void;
	    leftOperand: CriteriaOperator;
	    rightOperand: CriteriaOperator;
	    operatorType: BinaryOperatorType;
	    get displayType(): string;
	    get enumType(): typeof BinaryOperatorType;
	    type: keyof CriteriaProcessType;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}





	export class ConstantValue extends OperandValue {
	    constructor(value: any);
	    type: keyof CriteriaProcessType;
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator;
	}





	export class FunctionOperator extends CriteriaOperator {
	    constructor(operatorType: FunctionOperatorType, operands: CriteriaOperator[]);
	    toString: (reverse: boolean) => string;
	    operatorType: FunctionOperatorType;
	    assignLeftPart: (criteriaOperator: CriteriaOperator) => void;
	    assignRightPart: (criteriaOperator: CriteriaOperator) => void;
	    get leftPart(): CriteriaOperator;
	    get rightPart(): CriteriaOperator[];
	    get displayType(): string;
	    get enumType(): typeof FunctionOperatorType;
	    operands: any[];
	    type: keyof CriteriaProcessType;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}





	export class GroupOperator extends CriteriaOperator {
	    constructor(operation: GroupOperatorType, operands: Array<CriteriaOperator>);
	    static combine(operation: GroupOperatorType, operands: Array<CriteriaOperator>): CriteriaOperator;
	    create: (isGroup: boolean, property: CriteriaOperator, specifics?: string) => CriteriaOperator;
	    change: (operationType: any, item: any, incorrectSpecificsForAggregate?: boolean) => CriteriaOperator;
	    remove: (operator: CriteriaOperator) => void;
	    operatorType: GroupOperatorType;
	    assignLeftPart: (operator: CriteriaOperator) => void;
	    children(): CriteriaOperator[];
	    get displayType(): string;
	    get enumType(): typeof GroupOperatorType;
	    operands: any[];
	    type: keyof CriteriaProcessType;
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator | GroupOperator;
	}




	export class InOperator extends CriteriaOperator {
	    constructor(criteriaOperator: CriteriaOperator, operands: CriteriaOperator[]);
	    get leftPart(): CriteriaOperator;
	    get rightPart(): CriteriaOperator[];
	    assignLeftPart: (criteriaOperator: CriteriaOperator) => void;
	    assignRightPart: (criteriaOperator: CriteriaOperator) => void;
	    criteriaOperator: CriteriaOperator;
	    get displayType(): string;
	    operatorType: string;
	    get enumType(): typeof InOperator;
	    type: keyof CriteriaProcessType;
	    operands: any[];
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}




	export class OperandProperty extends CriteriaOperator {
	    constructor(propertyName?: string, startColumn?: number, startLine?: number, originalPropertyLength?: number, circumflex?: boolean);
	    get displayType(): string;
	    propertyName: string;
	    originalPropertyLength: number;
	    type: keyof CriteriaProcessType;
	    circumflex: boolean;
	    startPosition: {
	        line: number;
	        column: number;
	    };
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator;
	}





	export class JoinOperand extends CriteriaOperator {
	    constructor(joinTypeName: string, condition: CriteriaOperator, type: string, aggregated: CriteriaOperator);
	    static joinOrAggregate(collectionProperty: OperandProperty, condition: CriteriaOperator, type: string, aggregated: CriteriaOperator): CriteriaOperator;
	    joinTypeName: string;
	    condition: CriteriaOperator;
	    operatorType: string;
	    aggregatedExpression: CriteriaOperator;
	    type: keyof CriteriaProcessType;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}




	export class CriteriaOperator {
	    get displayType(): string;
	    get enumType(): any;
	    operatorType: any;
	    type: keyof CriteriaProcessType | string;
	    operands: any;
	    create: (operatorType: any, field: CriteriaOperator) => CriteriaOperator;
	    remove: (operand: CriteriaOperator) => void;
	    change: (operandType: any, operand: CriteriaOperator, incorrectSpecificsForAggregate: boolean) => CriteriaOperator;
	    changeValue: (operand: CriteriaOperator, reverse: boolean, location: IPropertyLocation) => CriteriaOperator;
	    changeValueType: (type: any, location: IPropertyLocation) => CriteriaOperator;
	    assignLeftPart: (criteriaOperator: CriteriaOperator | CriteriaOperator[]) => void;
	    assignRightPart: (criteriaOperator: CriteriaOperator | CriteriaOperator[]) => void;
	    assignType: (type: string) => void;
	    get leftPart(): CriteriaOperator | CriteriaOperator[];
	    get rightPart(): CriteriaOperator | CriteriaOperator[];
	    assignFrom(criteriaOperator: CriteriaOperator, incorrectSpecificsForAggregate?: boolean, needAssignRightPart?: boolean): void;
	    children(): CriteriaOperator[];
	    accept(visitor: ICriteriaOperatorVisitor): CriteriaOperator;
	}



	export class OperandValue extends CriteriaOperator {
	    private _processStringValue;
	    constructor(value?: any);
	    get displayType(): string;
	    value: any;
	    type: keyof CriteriaProcessType;
	    specifics: string;
	}




	export class OperandParameter extends OperandValue {
	    constructor(parameterName?: string, value?: string);
	    get displayType(): string;
	    parameterName: string;
	    type: keyof CriteriaProcessType;
	    accept(visitor: ICriteriaOperatorVisitor): any;
	}

	
	export function parse(criteria: string): any;
	export var criteriaparser: {
	    parse: (criteria: string) => any
	};

}
declare module DevExpress.Analytics.Criteria.Utils {
    import IAggregateOperandOptions = DevExpress.Analytics.Criteria.IAggregateOperandOptions;
    import IBetweenOperatorOptions = DevExpress.Analytics.Criteria.IBetweenOperatorOptions;
    import IBinaryOperatorOptions = DevExpress.Analytics.Criteria.IBinaryOperatorOptions;
    import IFunctionOperatorProperties = DevExpress.Analytics.Criteria.IFunctionOperatorProperties;
    import IGroupOperatorOptions = DevExpress.Analytics.Criteria.IGroupOperatorOptions;
    import IInOperatorOptions = DevExpress.Analytics.Criteria.IInOperatorOptions;
    import IJoinOperandOptions = DevExpress.Analytics.Criteria.IJoinOperandOptions;
    import IOperandParameterOptions = DevExpress.Analytics.Criteria.IOperandParameterOptions;
    import IOperandPropertyOptions = DevExpress.Analytics.Criteria.IOperandPropertyOptions;
    import IUnaryOperatorOptions = DevExpress.Analytics.Criteria.IUnaryOperatorOptions;
    import IOperandValueOptions = DevExpress.Analytics.Criteria.IOperandValueOptions;
    import CriteriaProcessType = DevExpress.Analytics.Criteria.Utils.CriteriaProcessType;
    import AggregateOperand = DevExpress.Analytics.Criteria.AggregateOperand;
    import BetweenOperator = DevExpress.Analytics.Criteria.BetweenOperator;
    import BinaryOperator = DevExpress.Analytics.Criteria.BinaryOperator;
    import ConstantValue = DevExpress.Analytics.Criteria.ConstantValue;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;
    import FunctionOperator = DevExpress.Analytics.Criteria.FunctionOperator;
    import GroupOperator = DevExpress.Analytics.Criteria.GroupOperator;
    import InOperator = DevExpress.Analytics.Criteria.InOperator;
    import JoinOperand = DevExpress.Analytics.Criteria.JoinOperand;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;
    import UnaryOperator = DevExpress.Analytics.Criteria.UnaryOperator;











	export type Nullable<T> = {
	    [K in keyof T]?: T[K];
	};
	export type CriteriaProcessType = {
	    'join': Nullable<IJoinOperandOptions>;
	    'between': Nullable<IBetweenOperatorOptions>;
	    'property': Nullable<IOperandPropertyOptions>;
	    'parameter': Nullable<IOperandParameterOptions>;
	    'value': Nullable<IOperandValueOptions>;
	    'in': Nullable<IInOperatorOptions>;
	    'function': Nullable<IFunctionOperatorProperties>;
	    'unary': Nullable<IUnaryOperatorOptions>;
	    'group': Nullable<IGroupOperatorOptions>;
	    'binary': Nullable<IBinaryOperatorOptions>;
	    'const': Nullable<IOperandValueOptions>;
	    'aggregate': Nullable<IAggregateOperandOptions>;
	    'default': any;
	};


	export interface ICriteriaChangeOperator {
	    name: string;
	    value: any;
	    type: any;
	    _type: keyof CriteriaProcessType;
	    hidden?: boolean;
	    reverse?: boolean;
	    localizationId?: string;
	    insertVal?: string;
	    displayText?: string;
	    paramCount?: number;
	    emptyRightPart?: boolean;
	}

	export var operatorTokens: {
	    Plus: string;
	    Minus: string;
	    Equal: string;
	    NotEqual: string;
	    Greater: string;
	    Less: string;
	    LessOrEqual: string;
	    GreaterOrEqual: string;
	};













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

	export interface IPropertyLocation {
	    index?: number;
	    name?: string;
	}


	export function criteriaForEach(operator: CriteriaOperator, callback: (operator: CriteriaOperator, path?: any) => void, path?: string): void;


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
	    static parse(stringCriteria: string, saveOriginalStringLength?: boolean): CriteriaOperator;
	    private machineStates;
	    private _inputStringCriteria;
	    constructor(stringCriteria: string);
	    _tokenize(): _IToken[];
	    _replaceTokenToAnotherToken(tokens: _IToken[], newTokenChar: string, tokenName: string): string;
	    replaceCommentsToChar(char?: string): CriteriaOperatorStateMachine;
	    getCriteria(): CriteriaOperator;
	}

}
declare module DevExpress.Analytics.Widgets.Internal {
    import ITreeListSearchOptions = DevExpress.Analytics.Widgets.Internal.ITreeListSearchOptions;
    import TreeListRootItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListRootItemViewModel;
    import SearchMode = DevExpress.Analytics.Internal.SearchMode;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import ITreeListController = DevExpress.Analytics.Widgets.Internal.ITreeListController;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IAction = DevExpress.Analytics.Utils.IAction;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import TreeListSearchOptions = DevExpress.Analytics.Widgets.Internal.TreeListSearchOptions;
    import CodeResolver = DevExpress.Analytics.Internal.CodeResolver;
    import ISearchOptions = DevExpress.Analytics.Internal.ISearchOptions;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import dxDropDownBox = DevExpress.ui.dxDropDownBox;
    import Editor = DevExpress.Analytics.Widgets.Editor;
    import IUndoEngine = DevExpress.Analytics.Internal.IUndoEngine;
    import ILocalizationInfo = DevExpress.Analytics.Internal.ILocalizationInfo;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ListKeyboardHelper = DevExpress.Analytics.Internal.ListKeyboardHelper;
    import dxTextBox = DevExpress.ui.dxTextBox;
    import dxTextBoxOptions = DevExpress.ui.dxTextBox.dxTextBoxOptions;
    import TextBoxInstance = DevExpress.ui.dxTextBox.TextBoxInstance;
    import dxEllipsisEditor = DevExpress.Analytics.Widgets.Internal.dxEllipsisEditor;
    import IFileUploadResult = DevExpress.Analytics.Internal.IFileUploadResult;
    import IExpressionEditorItem = DevExpress.Analytics.Widgets.Internal.IExpressionEditorItem;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;
    import DisposableType = DevExpress.Analytics.Utils.DisposableType;
    import IDisplayExpressionConverter = DevExpress.Analytics.Utils.IDisplayExpressionConverter;
    import IExpressionEditorCategory = DevExpress.Analytics.Widgets.Internal.IExpressionEditorCategory;
    import IExpressionEditorFunction = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction;
    import IExpressionEditorFunctionItem = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunctionItem;
    import GroupOperator = DevExpress.Analytics.Criteria.GroupOperator;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;
    import AggregateOperand = DevExpress.Analytics.Criteria.AggregateOperand;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;
    import OperandValue = DevExpress.Analytics.Criteria.OperandValue;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;
    import BetweenOperator = DevExpress.Analytics.Criteria.BetweenOperator;
    import InOperator = DevExpress.Analytics.Criteria.InOperator;
    import BinaryOperator = DevExpress.Analytics.Criteria.BinaryOperator;
    import UnaryOperator = DevExpress.Analytics.Criteria.UnaryOperator;
    import FunctionOperator = DevExpress.Analytics.Criteria.FunctionOperator;
    import ISize = DevExpress.Analytics.Elements.ISize;
    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;
    import PopupService = DevExpress.Analytics.Internal.PopupService;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;
    import CodeCompletor = DevExpress.Analytics.Widgets.Internal.CodeCompletor;
    import ICodeCompletorOptions = DevExpress.Analytics.Widgets.Internal.ICodeCompletorOptions;
    import dxPopup = DevExpress.ui.dxPopup;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
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

	export class ValueEditorHelper {
	    private static _getCharFromKeyCode;
	    private static _getCaretPosition;
	    static editors: {
	        integer: {
	            regExpEditing: RegExp;
	        };
	        float: {
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

	export class SvgTemplatesEngine {
	    private static _instance;
	    private _data;
	    private _templates;
	    private _hasTemplate;
	    constructor();
	    private static get Instance();
	    static get templates(): {
	        [key: string]: string;
	    };
	    static addTemplate(templateName: string, templateMarkup: string): void;
	    static addTemplates(templates: any): void;
	    static getExistingTemplate(name: any, findEverywhere?: boolean): any;
	}





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




	export interface ITreeListController {
	    itemsFilter: (item: IDataMemberInfo, path?: string, model?: TreeListItemViewModel) => boolean;
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
	    itemsFilter(item: IDataMemberInfo, path?: string): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	    canSelect(value: TreeListItemViewModel): boolean;
	    select(value: TreeListItemViewModel): void;
	    isDraggable(item: TreeListItemViewModel): boolean;
	    selectedItem: any;
	}

	/// <reference types="jquery" />





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
	    onItemsChanged?: (items: TreeListItemViewModel[]) => void;
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
	    private _onItemsChangedCallback;
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
	    get hasItems(): boolean;
	    get data(): IDataMemberInfo;
	    set data(newVal: IDataMemberInfo);
	    get name(): string;
	    get path(): string;
	    get pathParts(): string[];
	    get text(): string;
	    get templateName(): string;
	    actionsTemplate(): any;
	    treeListEditAction(): IAction;
	    get hasContent(): boolean;
	    get actions(): IAction[];
	    get isDraggable(): boolean;
	    get treeListController(): ITreeListController;
	    toggleCollapsed: () => void;
	    toggleSelected: any;
	    isSelected: ko.Observable<boolean>;
	    isHovered: ko.Observable<boolean>;
	    isMultiSelected: ko.Observable<boolean>;
	    getItems: () => JQueryPromise<TreeListItemViewModel[]>;
	    dispose(): void;
	    get visible(): boolean;
	    setVisible(value: boolean): void;
	    getCssRules(): {
	        'dx-treelist-item-selected dxd-state-selected': boolean;
	    };
	    mouseenter(): void;
	    mouseleave(): void;
	    selectedItems(): TreeListItemViewModel[];
	    templates: {
	        accordionItem: string;
	        headerItem: string;
	        headerItemContent: string;
	        itemTextContent: string;
	        actionsContainer: string;
	    };
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

	export var availableFonts: ko.Observable<{
	    [key: string]: string;
	}>;




	export class DataMemberTreeListController implements ITreeListController {
	    dispose(): void;
	    itemsFilter(item: IDataMemberInfo): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	    canSelect(value: TreeListItemViewModel): boolean;
	    select(value: TreeListItemViewModel): void;
	    isDraggable(item: TreeListItemViewModel): boolean;
	    selectedItem: any;
	    suppressActions: boolean;
	}

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />

	export class dxFieldListPicker extends dxDropDownBox {
	    _path: ko.Observable<string>;
	    _value: ko.Observable<string>;
	    _parentViewport: JQuery<Element>;
	    _itemsProvider: ko.Observable<any>;
	    _hasDisplayNameOption: boolean;
	    _defaultPosition: any;
	    updateOptions(options: any): void;
	    constructor($element: any, options: any);
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
	}


	export class PopupEditorBase extends Disposable {
	    protected _disableSaveButton: ko.PureComputed<boolean>;
	    protected _createMainPopupButtons(): void;
	    constructor();
	    canSave(): boolean;
	    save(sender?: any): void;
	    close(): void;
	    get cancelLocalization(): any;
	    get saveLocalization(): any;
	    popupVisible: ko.Observable<boolean>;
	    buttonItems: any[];
	}


	export class RequiredNullableEditor extends Editor {
	    _getEditorValidationRules(): any[];
	}
	export function createNumericEditor(dotNetTypeFullName: string, specifics: string): {
	    header: string;
	    editorType: any;
	};


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

	export {};

	export function registerBaseBinding(bindingName: string, optionsName?: string): void;
	export function addToBindingsCache(key: string, value: ($context: any, $element: any) => any): void;


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

	export {};

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />

	interface CustomDxTextBoxOptions<T> extends dxTextBoxOptions<T> {
	    value?: any;
	} type CustomTextBoxType = CustomDxTextBoxOptions<TextBoxInstance>;
	export class dxEllipsisEditor extends dxTextBox<CustomTextBoxType> {
	    _$button: JQuery<HTMLElement>;
	    _$buttonIcon: JQuery<HTMLElement>;
	    _$element: JQuery<HTMLElement>;
	    _modelByElement: any;
	    _koContext: any;
	    _$input: JQuery<HTMLElement>;
	    constructor(element: any, options?: any);
	    _init(): void;
	    _render(): void;
	    _updateWarningState(value?: unknown): void;
	    _renderButton(): void;
	    _updateButtonSize(): void;
	    _attachButtonEvents(): void;
	    _attachInputEvents(): void;
	    _optionChanged(args: {
	        name: string;
	        value: any;
	    }): void;
	    buttonAction(e: any): void;
	}
	export {};



	export class dxFileImagePicker extends dxEllipsisEditor {
	    constructor(element: any, options?: any);
	    _getDisplayValue(): any;
	    _handleResult(result: IFileUploadResult): void;
	    _renderInput(inputContainer: any): void;
	    _attachButtonEvents(): void;
	    _renderValue(): void;
	}

	export var extendedTemplates: (templates?: {
	    [key: string]: string;
	}) => {
	    [key: string]: string;
	};

	export var aceAvailable: (newVal?: boolean) => any;

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




	export interface IExpressionEditorContent {
	    data: {
	        fields?: any;
	        parameters?: any;
	        availableItems?: ko.Observable<any> | ko.Computed<any>;
	        textToSearch?: ko.Observable<string> | ko.Computed<string>;
	        selectedItem?: ko.Observable<any>;
	        items?: any;
	    };
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
	    searchPlaceholder: () => string;
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
	    constructor(onClick: (item: any, element: any) => void, parametersOptions: ko.PureComputed<ITreeListOptions>, options: ko.Observable<IExpressionOptions> | ko.Computed<IExpressionOptions>, fieldListOptions?: ko.Computed<ITreeListOptions>);
	    dispose(): void;
	    resetCategoriesSelection: () => void;
	    private _categories;
	    showDescription: ko.Observable<boolean> | ko.Computed<boolean>;
	    toolBox: any[];
	    description: ko.Observable<string> | ko.Computed<string>;
	}





	export var RangeSpecific: string;
	export function createExpressionEditorCollectionToolOptions(collectionItems: IExpressionEditorItem[], toolName: string, displayToolName: string, showDescription: boolean): IExpressionEditorCategory;
	export function wrapExpressionValue(path: ko.Observable<string> | ko.Computed<string>, value: ko.Observable<string> | ko.Computed<string>, converter: IDisplayExpressionConverter, subscriptions: DisposableType[]): ko.Observable<string> | ko.Computed<string>;

	/// <reference types="jquery" />



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












	export class FilterEditorSerializer {
	    operatorTokens: {
	        Plus: string;
	        Minus: string;
	        Equal: string;
	        NotEqual: string;
	        Greater: string;
	        Less: string;
	        LessOrEqual: string;
	        GreaterOrEqual: string;
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
	        Plus: string;
	        Minus: string;
	        Equal: string;
	        NotEqual: string;
	        Greater: string;
	        Less: string;
	        LessOrEqual: string;
	        GreaterOrEqual: string;
	    }, custom?: (criteriaOperator: CriteriaOperator, reverse: boolean) => string);
	    serialize(criteriaOperator: CriteriaOperator, reverse?: boolean): any;
	    deserialize(stringCriteria: string): CriteriaOperator;
	    deserializeOperand(operand: CriteriaOperator): CriteriaOperator;
	}


	export class ResizeHelper {
	    resultSize?: ko.Observable<number>;
	    disabled: ko.Observable<boolean>;
	    private _resize;
	    constructor(resultSize?: ko.Observable<number>, disabled?: ko.Observable<boolean>);
	    resizable(resizeHandler: object, handles: string): any;
	    stopResize: () => void;
	    resize: (params: {
	        size: ISize;
	        delta: {
	            dx: number;
	            dy: number;
	            dw: number;
	            dh: number;
	        };
	        element: HTMLDivElement;
	    }) => void;
	}




	export class ExpressionEditorTreeListController extends TreeListController {
	    fieldName: ko.Computed<string> | string;
	    putSelectionHandler: (item: TreeListItemViewModel, element: any) => void;
	    selectionHandler?: (item: TreeListItemViewModel) => void;
	    customFilter?: (path: string) => boolean;
	    constructor(fieldName: ko.Computed<string> | string, putSelectionHandler: (item: TreeListItemViewModel, element: any) => void, selectionHandler?: (item: TreeListItemViewModel) => void, customFilter?: (path: string) => boolean);
	    itemsFilter(item: IDataMemberInfo, path: string): boolean;
	    select(value: TreeListItemViewModel): void;
	    getActions(item: TreeListItemViewModel): IAction[];
	    canSelect(value: TreeListItemViewModel): boolean;
	}
	export class ExpressionEditorParametersTreeListController extends TreeListController {
	    customFilter: (item: IDataMemberInfo) => boolean;
	    putSelectionHandler: (selectedItemPath: string, element: any) => void;
	    selectionHandler?: (item: TreeListItemViewModel) => void;
	    constructor(customFilter: (item: IDataMemberInfo) => boolean, putSelectionHandler: (selectedItemPath: string, element: any) => void, selectionHandler?: (item: TreeListItemViewModel) => void);
	    itemsFilter(item: IDataMemberInfo): boolean;
	    select(value: TreeListItemViewModel): void;
	    getActions(item: TreeListItemViewModel): IAction[];
	    canSelect(value: TreeListItemViewModel): boolean;
	}

	export function initDisplayText(object: {
	    name: string;
	    localizationId?: string;
	    displayText?: string;
	}): void;





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




	export class FilterEditorTreeListController extends TreeListController {
	    constructor(selectedItem: ko.Observable<IDataMemberInfo>);
	    itemsFilter(item: IDataMemberInfo): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	    canSelect(value: TreeListItemViewModel): boolean;
	    select(value: TreeListItemViewModel): void;
	}





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

	export interface IStandardPattern {
	    type: string;
	    value: any;
	    patterns: Array<string>;
	}
	export var formatStringStandardPatterns: {
	    [key: string]: IStandardPattern;
	};

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />

	export interface IPopupComponent {
	    content: () => Element;
	    $element: () => JQuery;
	    dispose: () => void;
	    registerKeyHandler: (key: string, handler: (e: any) => void) => void;
	}
	export class PopupComponentBase extends Disposable {
	    private _component;
	    getComponent(): IPopupComponent;
	    onContentReady: (e: {
	        element: any;
	        component: IPopupComponent;
	        model: any;
	    }) => void;
	    hideOnOutsideClick: (e: {
	        target: HTMLElement;
	    }) => boolean;
	    dispose(): void;
	}


	export class dxPopupWithAutoHeight extends dxPopup {
	    _setContentHeight(): void;
	}

	export {};




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
declare module DevExpress.Analytics {
	export const version = "%VERSION%";

}
declare module DevExpress.Analytics.Widgets.TreeList {
	export var LoadChildItemsForCollapsedNodes: (newVal?: boolean) => boolean;

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
declare module DevExpress.Analytics.Localization {
	export function loadMessages(messages: {
	    [key: string]: string;
	}): void;

}
declare module DevExpress.Analytics.Widgets.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;

	export var fontName: ISerializationInfo;
	export var fontSize: ISerializationInfo;
	export var fontSizeUnit: ISerializationInfo;
	export var fontInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Data {
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import DBColumn = DevExpress.Analytics.Data.DBColumn;
    import DBForeignKey = DevExpress.Analytics.Data.DBForeignKey;
    import DBColumnType = DevExpress.Analytics.Data.DBColumnType;
    import DBTable = DevExpress.Analytics.Data.DBTable;
    import DBStoredProcedure = DevExpress.Analytics.Data.DBStoredProcedure;
    import ConnectionOptions = DevExpress.Analytics.Data.ConnectionOptions;
    import ResultTable = DevExpress.Analytics.Data.ResultTable;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;
    import ResultSet = DevExpress.Analytics.Data.ResultSet;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;
    import MasterDetailRelation = DevExpress.Analytics.Data.MasterDetailRelation;
    import DBSchemaProvider = DevExpress.Analytics.Data.DBSchemaProvider;
    import IDBSchemaProvider = DevExpress.Analytics.Data.IDBSchemaProvider;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IFederationQuery = DevExpress.QueryBuilder.Utils.IFederationQuery;
    import FederatedQueryExpression = DevExpress.Analytics.Data.FederatedQueryExpression;
    import SourceQuery = DevExpress.Analytics.Data.SourceQuery;
    import FederationSource = DevExpress.Analytics.Data.FederationSource;
    import QueryViewModelBase = DevExpress.QueryBuilder.Elements.QueryViewModelBase;
    import RelationViewModel = DevExpress.QueryBuilder.Elements.RelationViewModel;
    import FederationTableViewModel = DevExpress.QueryBuilder.Internal.FederationTableViewModel;
    import SubNode = DevExpress.Analytics.Data.SubNode;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import SelectQuery = DevExpress.Analytics.Data.SelectQuery;
    import FederatedQueriesContainer = DevExpress.Analytics.Data.FederatedQueriesContainer;
    import IFederationDataSource = DevExpress.Analytics.Data.IFederationDataSource;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataSourceBase = DevExpress.Analytics.Data.IDataSourceBase;
    import IDataSourceDBSchema = DevExpress.Analytics.Data.IDataSourceDBSchema;
    import FederationMasterDetailRelation = DevExpress.Analytics.Data.FederationMasterDetailRelation;
    import SerializableDataFederationDataSource = DevExpress.Analytics.Data.SerializableDataFederationDataSource;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;
    import ObjectCtor = DevExpress.Analytics.Data.ObjectCtor;
    import ObjectDataMember = DevExpress.Analytics.Data.ObjectDataMember;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;
    import JsonSchemaRootNode = DevExpress.Analytics.Data.JsonSchemaRootNode;
    import JsonSchemaNode = DevExpress.Analytics.Data.JsonSchemaNode;
    import JsonNode = DevExpress.Analytics.Data.JsonNode;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;
    import IParameter = DevExpress.Analytics.Wizard.Internal.IParameter;
    import JsonParameter = DevExpress.Analytics.Data.JsonParameter;
    import JsonAuthenticationInfo = DevExpress.Analytics.Data.JsonAuthenticationInfo;
    import JsonSchemaProvider = DevExpress.Analytics.Data.JsonSchemaProvider;
    import JsonSource = DevExpress.Analytics.Data.JsonSource;
    import DBSchema = DevExpress.Analytics.Data.DBSchema;
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
	    get specifics(): any;
	    isValid: ko.Observable<boolean> | ko.Computed<boolean>;
	    name: ko.Computed<string>;
	    value: ko.Observable | ko.Computed;
	    type: ko.Observable<string> | ko.Computed<string>;
	    resultType: ko.Observable<string> | ko.Computed<string>;
	    getInfo(): ISerializationInfoArray;
	    isPropertyVisible(propName: string): boolean;
	}

	export class DBForeignKey {
	    name: string;
	    primaryKeyTable: string;
	    columns: string[];
	    primaryKeyColumns: string[];
	    constructor(model: any);
	}



	export class DBTable {
	    name: string;
	    columns: DBColumn[];
	    isView: boolean;
	    foreignKeys: DBForeignKey[];
	    constructor(model: any);
	}


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



	export class DBSchema {
	    tables: DBTable[];
	    procedures: DBStoredProcedure[];
	    constructor(model: any);
	}



	export class ConnectionOptions {
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    closeConnection: ko.Observable<boolean>;
	    commandTimeout: ko.Observable<number>;
	}




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



	export class ResultTable {
	    getInfo(): ISerializationInfoArray;
	    constructor(model: any, serializer?: IModelSerializer);
	    tableName: ko.Observable<string> | ko.Computed<string>;
	    columns: ko.ObservableArray<{
	        name: ko.Observable<string> | ko.Computed<string>;
	        propertyType: ko.Observable<string>;
	    }>;
	}




	export class ResultSet {
	    getInfo(): ISerializationInfoArray;
	    static from(model: any, serializer?: IModelSerializer): ResultSet;
	    static toJson(value: any, serializer: any, refs: any): {
	        DataSet: any;
	    };
	    constructor(model: any, serializer?: IModelSerializer);
	    tables: ko.ObservableArray<ResultTable>;
	}



	export var expressionSerializationInfo: ISerializationInfoArray;
	export enum FederatedQueryExpressionType {
	    SelectColumnExpression = 0,
	    SelectExpression = 1,
	    SelectAllColumnsExpression = 2,
	    SelectAllNodeColumnsExpression = 3,
	    SelectRowCountExpression = 4
	}
	export class FederatedQueryExpression {
	    constructor(model: object, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	    name: ko.Observable<string> | ko.Computed<string>;
	    alias: ko.Observable<string> | ko.Computed<string>;
	    table: ko.Observable<string> | ko.Computed<string>;
	    propertyName: ko.Observable<string> | ko.Computed<string>;
	}



	export class FederationSource extends Disposable {
	    constructor(model: any, serializer?: any, path?: string, sourceName?: string);
	    getInfo(): ISerializationInfoArray;
	    getDataSourceName(): string;
	    getPath(): string;
	    hasDataMember(): boolean;
	    sourceName: ko.Observable<string> | ko.Computed<string>;
	    dataMember: ko.Observable<string> | ko.Computed<string>;
	}






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










	export interface IDataSourceBase {
	    name: ko.Observable<string> | ko.Computed<string>;
	    id: string;
	}
	export interface IDataSourceDBSchema extends IDataSourceBase {
	    dbSchemaProvider: IDBSchemaProvider;
	}
	export class SqlDataSource extends Disposable implements IDataSourceDBSchema {
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




	export var sourceQuerySerializationsInfo: ISerializationInfoArray;
	export class SourceQuery extends Disposable {
	    private _sourcePath?;
	    constructor(model: any, serializer?: IModelSerializer, sourceName?: string, _sourcePath?: string);
	    sourceName: ko.Observable<string> | ko.Computed<string>;
	    queryType: ko.Observable<string> | ko.Computed<string>;
	    alias: ko.Observable<string> | ko.Computed<string>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    getInfo(): ISerializationInfoArray;
	    getPath(): string;
	}








	export var transformQuerySerializationsInfo: ISerializationInfoArray;
	export var transformationRuleSerializationsInfo: ISerializationInfoArray;
	export class TransformQuery extends Disposable implements IFederationQuery {
	    constructor(model: any, serializer?: IModelSerializer);
	    alias: ko.Observable<string> | ko.Computed<string>;
	    queryType: ko.Observable<string> | ko.Computed<string>;
	    transformationRules: ko.ObservableArray<FederationTransformationRule>;
	    expressions: ko.ObservableArray<FederatedQueryExpression>;
	    root: ko.Observable<SourceQuery>;
	    get sources(): ko.ObservableArray<FederationSource>;
	    getInfo(): ISerializationInfoArray;
	    generateName(): string;
	}
	export class FederationTransformationRule {
	    constructor(model: any, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	    name: ko.Observable<string> | ko.Computed<string>;
	    alias: ko.Observable<string> | ko.Computed<string>;
	    unfold: ko.Observable<false>;
	    flatten: ko.Observable<false>;
	}






	export var subNodeSerializationInfo: ISerializationInfoArray;
	export class SubNode {
	    constructor(model: any, serializer?: any);
	    static deserializeRelationModel(subNodeQuery: FederationTableViewModel, relation: RelationViewModel): SubNode;
	    private _parsePath;
	    private _createCondition;
	    private _conditionBinary;
	    createRelationModel(query: QueryViewModelBase): RelationViewModel;
	    getInfo(): ISerializationInfoArray;
	    query: ko.Observable<SourceQuery>;
	    condition: ko.Observable<string>;
	    joinType: ko.Observable<string>;
	}









	export var selectQuerySerializationsInfo: ISerializationInfoArray;
	export class SelectQuery extends Disposable implements IFederationQuery {
	    private _path?;
	    constructor(model: any, serializer?: IModelSerializer, _path?: string);
	    alias: ko.Observable<string> | ko.Computed<string>;
	    queryType: ko.Observable<string> | ko.Computed<string>;
	    subNodes: ko.ObservableArray<SubNode>;
	    expressions: ko.ObservableArray<FederatedQueryExpression>;
	    root: ko.Observable<SourceQuery>;
	    get sources(): ko.ObservableArray<FederationSource>;
	    getInfo(): ISerializationInfoArray;
	    generateName(): string;
	    init(model: any, serializer?: IModelSerializer, rootPath?: string): void;
	}






	export class FederatedQueriesContainer extends Disposable {
	    dataSources: ko.ObservableArray<IDataSourceInfo> | ko.Computed<IDataSourceInfo[]>;
	    protected _serializer?: IModelSerializer;
	    constructor(model: object, dataSources: ko.ObservableArray<IDataSourceInfo> | ko.Computed<IDataSourceInfo[]>, _serializer?: IModelSerializer);
	    protected _dataSourceName(dataSource: IDataSourceInfo): any;
	    getQueryNameFromPath(path: string): string;
	    getPathFromQueryName(sourceName: string): string;
	    createQuery(item: object, dataSource?: FederatedQueriesContainer): IFederationQuery;
	    addSource(source: string | FederationSource, queryPath?: string): void;
	    removeSource(sourceName: string): void;
	    addSelectQuery(queryPath: string, columnName?: string): void;
	    removeQuery(queryName: string): void;
	    removeExpression(columnName: string, queryPath: string): void;
	    dispose(): void;
	    name: ko.Observable<string> | ko.Computed<string>;
	    id: string;
	    queries: ko.ObservableArray<IFederationQuery>;
	    sources: ko.ObservableArray<FederationSource>;
	}







	export var unionQuerySerializationsInfo: ISerializationInfoArray;
	export enum UnionTypes {
	    Union = 0,
	    UnionAll = 1
	}
	export class UnionQuery extends FederatedQueriesContainer implements IFederationQuery {
	    constructor(model: any, dataSources: ko.ObservableArray<IDataSourceInfo> | ko.Computed<IDataSourceInfo[]>, serializer?: IModelSerializer);
	    alias: ko.Observable<string> | ko.Computed<string>;
	    queryType: ko.Observable<string> | ko.Computed<string>;
	    unionType: ko.Observable<string> | ko.Computed<string>;
	    unionElements: ko.ObservableArray<SelectQuery>;
	    getInfo(): ISerializationInfoArray;
	    generateName(): string;
	}


	export class FederationMasterDetailRelation extends MasterDetailRelation {
	    static create(relation: MasterDetailRelation): FederationMasterDetailRelation;
	    constructor(model: any, serializer?: any);
	}





	export interface ISerializableDataFederationDataSourceInfo {
	    dataSource: any;
	    dataSources: any;
	}
	export class SerializableDataFederationDataSource extends Disposable implements ISerializableDataFederationDataSourceInfo {
	    private get _currentDataSources();
	    private _collectDependentDataSources;
	    constructor(dataSource: IFederationDataSource, serializer?: IModelSerializer);
	    dispose(): void;
	    getInfo(): ISerializationInfoArray;
	    collectDependentDataSources(): any[];
	    serialize(): ISerializableDataFederationDataSourceInfo;
	    getSerializableFederationDataSourceInfo(): ISerializableDataFederationDataSourceInfo;
	    serializer: IModelSerializer;
	    dataSources: ko.ObservableArray<any>;
	    dataSource: IFederationDataSource;
	}












	export interface ISerializableSourceMapItem {
	    dataSource: ko.Observable<any>;
	    name: ko.Observable<string>;
	}
	export interface IFederationDataSource {
	    name: ko.Observable<string> | ko.Computed<string>;
	    serializableSourceMap: ko.ObservableArray<ISerializableSourceMapItem>;
	    getSerializableModel: () => SerializableDataFederationDataSource;
	}
	export class FederationDataSource extends FederatedQueriesContainer implements IDataSourceBase, IFederationDataSource, IDataSourceDBSchema {
	    dataSources: ko.ObservableArray<IDataSourceInfo> | ko.Computed<IDataSourceInfo[]>;
	    fielListProvider?: IItemsProvider;
	    private _serializableModel;
	    getInfo(): ISerializationInfoArray;
	    getSerializableModel(): SerializableDataFederationDataSource;
	    createQuery(item: object): IFederationQuery;
	    updateSerializableModel(): void;
	    constructor(model: object, dataSources: ko.ObservableArray<IDataSourceInfo> | ko.Computed<IDataSourceInfo[]>, fielListProvider?: IItemsProvider, serializer?: IModelSerializer);
	    dispose(): void;
	    get dependentDataSources(): string[];
	    relations: ko.ObservableArray<FederationMasterDetailRelation>;
	    resultSet: ResultSet;
	    dbSchemaProvider: IDBSchemaProvider;
	    serializableSourceMap: ko.ObservableArray<ISerializableSourceMapItem>;
	}


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





	export class ObjectDataSource extends Disposable implements IDataSourceBase {
	    setState(state: IObjectDataSourceWizardState): void;
	    name: ko.Observable<string>;
	    id: string;
	    selectedType: string;
	    ctor: ObjectCtor;
	    dataMember: ObjectDataMember;
	}


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

	/// <reference types="jquery" />







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

	/// <reference types="jquery" />









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

	/// <reference types="jquery" />







	export interface IDBSchemaProvider extends IItemsProvider {
	    getDbTable: (tableName: string, path?: string) => JQueryPromise<DBTable>;
	    getDbSchema: () => JQueryPromise<any>;
	    getDbStoredProcedures?: () => JQueryPromise<DBStoredProcedure[]>;
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
declare module DevExpress.Analytics.Data.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;

	export function validateName(nameCandidate: string): boolean;
	export var dsParameterNameValidationRules: Array<any>;
	export var parameterValueSerializationsInfo: {
	    propertyName: string;
	    displayName: string;
	    localizationId: string;
	    editor: DevExpress.Analytics.Utils.IEditorInfo;
	};
	export var dsParameterSerializationInfo: ISerializationInfoArray;
	export function storedProcParameterSerializationsInfo(type: string): any[];


	export var federationDataSourceSerializationInfo: ISerializationInfoArray;
	export var sourceSerializationInfo: ISerializationInfoArray;


	export var customQuerySerializationsInfo: ISerializationInfoArray;


	export var tableQuerySerializationsInfo: ISerializationInfoArray;


	export var storedProcQuerySerializationsInfo: ISerializationInfoArray;


	export var masterDetailRelationSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.QueryBuilder.Widgets {
    import IExpressionEditorFunction = DevExpress.Analytics.Widgets.Internal.IExpressionEditorFunction;

	export var expressionFunctions: IExpressionEditorFunction[];

}
declare module DevExpress.QueryBuilder.Elements {
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import Size = DevExpress.Analytics.Elements.Size;
    import Point = DevExpress.Analytics.Elements.Point;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;
    import QueryViewModelBase = DevExpress.QueryBuilder.Elements.QueryViewModelBase;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import QueryElementBaseViewModel = DevExpress.QueryBuilder.Elements.QueryElementBaseViewModel;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import AllColumnsViewModel = DevExpress.QueryBuilder.Elements.AllColumnsViewModel;
    import IPoint = DevExpress.Analytics.Elements.IPoint;
    import DBColumn = DevExpress.Analytics.Data.DBColumn;
    import DBTable = DevExpress.Analytics.Data.DBTable;
    import DBColumnType = DevExpress.Analytics.Data.DBColumnType;
    import IConnectingPoint = DevExpress.Analytics.Diagram.IConnectingPoint;
    import RoutedConnectorViewModel = DevExpress.Analytics.Diagram.RoutedConnectorViewModel;
    import RelationViewModel = DevExpress.QueryBuilder.Elements.RelationViewModel;
    import JoinConditionViewModel = DevExpress.QueryBuilder.Elements.JoinConditionViewModel;
    import IElementViewModel = DevExpress.Analytics.Elements.IElementViewModel;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;
    import QuerySurface = DevExpress.QueryBuilder.Elements.QuerySurface;
    import TableSurface = DevExpress.QueryBuilder.Elements.TableSurface;
    import QueryElementBaseSurface = DevExpress.QueryBuilder.Elements.QueryElementBaseSurface;
    import ColumnSurface = DevExpress.QueryBuilder.Elements.ColumnSurface;
    import AllColumnsSurface = DevExpress.QueryBuilder.Elements.AllColumnsSurface;
    import CodeResolver = DevExpress.Analytics.Internal.CodeResolver;
    import RoutedConnectorSurface = DevExpress.Analytics.Diagram.RoutedConnectorSurface;
    import JoinConditionSurface = DevExpress.QueryBuilder.Elements.JoinConditionSurface;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import RelationSurface = DevExpress.QueryBuilder.Elements.RelationSurface;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;
    import IMargins = DevExpress.Analytics.Elements.IMargins;
    import Margins = DevExpress.Analytics.Elements.Margins;
    import IDBSchemaProvider = DevExpress.Analytics.Data.IDBSchemaProvider;
    import QBFilterStringOptions = DevExpress.QueryBuilder.Widgets.Internal.QBFilterStringOptions;
    import ColumnExpression = DevExpress.QueryBuilder.Elements.ColumnExpression;
    import ParameterViewModel = DevExpress.QueryBuilder.Elements.ParameterViewModel;

	export class ParameterViewModel extends DataSourceParameter {
	    getEditorType(type: any): {
	        header?: any;
	        content?: any;
	        custom?: any;
	    };
	}






	export class QueryElementBaseViewModel extends ElementViewModel {
	    getControlFactory(): ControlsFactory;
	    constructor(control: any, parent: ElementViewModel, serializer?: IModelSerializer);
	    size: Size;
	    location: Point;
	}




	export class ColumnExpression {
	    private _criteria;
	    private _dependedTables;
	    private __table;
	    private __column;
	    private __expression;
	    constructor(model: any, query: QueryViewModelBase, serializer?: IModelSerializer);
	    table: ko.Observable<string> | ko.Computed<string>;
	    column: ko.Observable<string> | ko.Computed<string>;
	    expression: ko.Observable<string> | ko.Computed<string>;
	    aggregate: ko.Observable<string> | ko.Computed<string>;
	    alias: ko.Observable<string> | ko.Computed<string>;
	    descending: ko.Observable<boolean> | ko.Computed<boolean>;
	    itemType: ko.Observable<string> | ko.Computed<string>;
	    actualName(): string;
	    toTable(): void;
	    getInfo(): ISerializationInfoArray;
	    isDepended(tableActualName: string): boolean;
	}





	export class AllColumnsViewModel extends QueryElementBaseViewModel {
	    static DisplayName: () => any;
	    constructor(parent: TableViewModel, serializer?: IModelSerializer);
	    selected: ko.Observable<boolean> | ko.Computed<boolean>;
	    name: ko.Computed<string>;
	    getInfo(): ISerializationInfoArray;
	}











	export class TableViewModel extends QueryElementBaseViewModel {
	    protected serializer?: ModelSerializer;
	    static COLUMNS_OFFSET: number;
	    static COLUMN_HEIGHT: number;
	    static COLUMN_MARGIN: number;
	    static TABLE_MIN_WIDTH: number;
	    static TABLE_DEFAULT_HEIGHT: number;
	    private _columnsConnectionPointLeftX;
	    private _columnsConnectionPointRightX;
	    protected _columns: ko.ObservableArray<ColumnViewModel>;
	    protected _initialized: ko.Observable<boolean>;
	    protected tableOffset: ko.Observable<number>;
	    constructor(model: any, parent: QueryViewModelBase, serializer?: ModelSerializer);
	    size: Size;
	    location: Point;
	    name: ko.Observable<string> | ko.Computed<string>;
	    alias: ko.Observable<string> | ko.Computed<string>;
	    actualName: ko.Observable<string> | ko.Computed<string>;
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
	    createChildColumn(item: DBColumn): ColumnViewModel;
	    createColumns(dbTable: DBTable): void;
	    itemType: string;
	}







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
	    toggleSelected: (val: boolean, lazy?: boolean) => void;
	    get specifics(): "String" | "Date" | "Bool" | "Integer" | "Float";
	}






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








	export class RelationViewModel extends QueryElementBaseViewModel {
	    private _getConditionNumber;
	    constructor(model: any, query: QueryViewModelBase, serializer?: ModelSerializer);
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




	export class QueryElementBaseSurface<M extends QueryElementBaseViewModel> extends SurfaceElementBase<M> {
	    static _unitProperties: IUnitProperties<QueryElementBaseViewModel>;
	    constructor(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>);
	    template: string;
	    selectiontemplate: string;
	    contenttemplate: string;
	    margin: ko.Observable<number>;
	}





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







	export class TableSurface extends QueryElementBaseSurface<TableViewModel> {
	    constructor(control: TableViewModel, context: ISurfaceContext);
	    showSourceName: boolean;
	    columnsAsyncResolver: CodeResolver;
	    asterisk: AllColumnsSurface;
	    columns: ko.Computed<ColumnSurface[]>;
	    contenttemplate: string;
	    titletemplate: string;
	    template: string;
	    isInitialized: ko.Computed<boolean>;
	    toggleSelected: () => void;
	    selectedWrapper: ko.PureComputed<boolean>;
	    resizable(resizeHandler: any, element: any): any;
	}





	export class JoinConditionSurface extends RoutedConnectorSurface {
	    constructor(control: JoinConditionViewModel, context: ISurfaceContext);
	    container(): QuerySurface;
	}




	export class RelationSurface extends SurfaceElementBase<RelationViewModel> {
	    constructor(control: RelationViewModel, context: ISurfaceContext);
	    conditions: ko.ObservableArray<JoinConditionSurface>;
	    template: string;
	    _getChildrenHolderName(): string;
	}










	export class QuerySurface extends SurfaceElementBase<QueryViewModelBase> implements ISelectionTarget, ISurfaceContext {
	    static _unitProperties: IUnitProperties<QueryViewModel>;
	    private _joinedColumns;
	    constructor(query: QueryViewModelBase, zoom?: ko.Observable<number>);
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














	export class QueryViewModelBase extends QueryElementBaseViewModel {
	    private static pageMargin;
	    protected topOffset: number;
	    protected _initializeTable(table: TableViewModel): void;
	    private _addColumnsToTable;
	    constructor(querySource: any, dbSchemaProvider?: IDBSchemaProvider, parametersMode?: string, beforeSaveCallback?: (data: any) => void, serializer?: ModelSerializer);
	    tables: ko.ObservableArray<TableViewModel>;
	    columns: ko.ObservableArray<ColumnExpression>;
	    isValid: ko.Computed<boolean>;
	    editableName: ko.Observable<string> | ko.Computed<string>;
	    pageWidth: ko.Observable<number> | ko.Computed<number>;
	    pageHeight: ko.Observable<number> | ko.Computed<number>;
	    margins: Margins;
	    dbSchemaProvider: IDBSchemaProvider;
	    allColumnsInTablesSelected: ko.Observable<boolean> | ko.Computed<boolean>;
	    relations: ko.ObservableArray<RelationViewModel>;
	    sorting: ko.ObservableArray<ColumnExpression>;
	    grouping: ko.ObservableArray<ColumnExpression>;
	    dispose(): void;
	    addChild(control: ElementViewModel): void;
	    removeChild(control: ElementViewModel): void;
	    validateRelations(): boolean;
	    private _validate;
	    private _validateTable;
	    createChild(info: any, tableViewModel?: TableViewModel, path?: string): ElementViewModel;
	    init(): void;
	    getTable(name: string): TableViewModel;
	    canSave(showMessage?: boolean): boolean;
	    save(): any;
	    serialize(includeRootTag?: boolean): any;
	    onSave: (data: any) => void;
	    private _findTableInAncestors;
	    private _findHead;
	    private _isHead;
	    private _findAncestorsRelations;
	    private _reverseRelations;
	    aggregatedColumnsCount: ko.Observable<number>;
	    defaultPageHeight: number;
	    defaultPageWidth: number;
	    getAllColumns(): ColumnViewModel[];
	    cerateJoinCondition(parentColumn: ColumnViewModel, nestedColumn: ColumnViewModel): JoinConditionViewModel;
	    tryToCreateRelationsByFK(sourceTable: TableViewModel): void;
	}
	export class QueryViewModel extends QueryViewModelBase {
	    private static emptyModel;
	    constructor(querySource: any, dbSchemaProvider?: IDBSchemaProvider, parametersMode?: string, beforeSaveCallback?: (data: any) => void, serializer?: ModelSerializer);
	    isPropertyDisabled(name: string): boolean;
	    filterString: QBFilterStringOptions;
	    _filterString: ko.Observable<string> | ko.Computed<string>;
	    groupFilterString: QBFilterStringOptions;
	    _groupFilterString: ko.Observable<string> | ko.Computed<string>;
	    top: ko.Observable<number> | ko.Computed<number>;
	    skip: ko.Observable<number> | ko.Computed<number>;
	    filter: ko.Observable<string> | ko.Computed<string>;
	    parameters: ko.ObservableArray<ParameterViewModel> | ko.Computed<ParameterViewModel[]>;
	    getInfo(): ISerializationInfoArray;
	    createChild(info: any): ElementViewModel;
	    tryToCreateRelationsByFK(sourceTable: TableViewModel): void;
	    controlType: string;
	}

}
declare module DevExpress.Analytics.Data.Internal {
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDBSchemaProvider = DevExpress.Analytics.Data.IDBSchemaProvider;
    import DBTable = DevExpress.Analytics.Data.DBTable;
    import INamedQueryViewModel = DevExpress.QueryBuilder.Utils.INamedQueryViewModel;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;
    import IParameter = DevExpress.Analytics.Wizard.Internal.IParameter;
    import JsonSchemaRootNode = DevExpress.Analytics.Data.JsonSchemaRootNode;
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;
    import DBSchema = DevExpress.Analytics.Data.DBSchema;
    import DBStoredProcedure = DevExpress.Analytics.Data.DBStoredProcedure;
	export function deserializeToCollection<T>(model: any[], createItem: (itemModel: any) => T, collection?: T[]): T[];

	/// <reference types="jquery" />





	export class DBSchemaFederationDataSourceProvider extends Disposable implements IDBSchemaProvider {
	    private _rootItems;
	    getDbSchema(): JQuery.Promise<IDataMemberInfo[], any, any>;
	    getItems: (path: IPathRequest) => JQueryPromise<IDataMemberInfo[]>;
	    getDbTable(tableName: string, path: string): JQueryPromise<DBTable>;
	    dispose(): void;
	    constructor(itemsProvider: IItemsProvider);
	}


	export function generateQueryUniqueName(queries: INamedQueryViewModel[], query: INamedQueryViewModel, nameProperty?: string): any;

	/// <reference types="jquery" />




	export var getJsonSchemaCallback: (requestWrapper: RequestWrapper, jsonDataSource: JsonDataSource, parameters?: IParameter[]) => JQueryPromise<JsonSchemaRootNode>;
	export function _setGetJsonSchemaCallback(func: any): void;
	export function _resetGetJsonSchemaCallback(): void;

	/// <reference types="jquery" />





	export function getDBSchemaCallback(requestWrapper: RequestWrapper, connection: SqlDataConnection, tables: DBTable[]): JQueryPromise<DBSchema>;
	export function getDBStoredProceduresCallback(requestWrapper: RequestWrapper, connection: SqlDataConnection): JQueryPromise<DBStoredProcedure[]>;

}
declare module DevExpress.QueryBuilder.Utils {
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;
    import FederatedQueryExpression = DevExpress.Analytics.Data.FederatedQueryExpression;
    import FederationSource = DevExpress.Analytics.Data.FederationSource;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;
    import IAjaxSettings = DevExpress.Analytics.Internal.IAjaxSettings;
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;
    import DBTable = DevExpress.Analytics.Data.DBTable;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;
    import IParameter = DevExpress.Analytics.Wizard.Internal.IParameter;
    import FederationDataSource = DevExpress.Analytics.Data.FederationDataSource;
	export var ActionId: {
	    Save: string;
	    DataPreview: string;
	    SelectStatementPreview: string;
	};
	export var HandlerUri: (newVal?: string) => string;






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
	export enum FederationQueryType {
	    SelectNode = 0,
	    UnionNode = 1,
	    SourceNode = 2,
	    TransformationNode = 3
	}
	export interface INamedQueryViewModel extends ISerializableModel {
	    generateName: () => string;
	}
	export interface IFederationQuery extends INamedQueryViewModel {
	    queryType: ko.Observable<string> | ko.Computed<string>;
	    alias?: ko.Observable<string> | ko.Computed<string>;
	    expressions?: ko.ObservableArray<FederatedQueryExpression>;
	    sources?: ko.ObservableArray<FederationSource> | ko.Computed<FederationSource[]>;
	}
	export interface ISqlQueryViewModel extends INamedQueryViewModel {
	    name: ko.Observable<string> | ko.Computed<string>;
	    parameters: ko.ObservableArray<DataSourceParameter>;
	    type: ko.Observable<string> | ko.Computed<string>;
	    parent: SqlDataSource;
	}


	export var controlsFactory: ControlsFactory<string>;

	/// <reference types="jquery" />







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
	    getFederationResultSchema(dataSource: FederationDataSource): JQueryPromise<{
	        resultSchemaJSON: string;
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
declare module DevExpress.QueryBuilder.Widgets.Internal {
    import EditorTemplates = DevExpress.Analytics.Widgets.EditorTemplates;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;
    import FilterEditorSerializer = DevExpress.Analytics.Widgets.Internal.FilterEditorSerializer;
    import ColumnExpression = DevExpress.QueryBuilder.Elements.ColumnExpression;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;
    import OperandParameterSurface = DevExpress.Analytics.Widgets.Filtering.OperandParameterSurface;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;
    import QueryBuilderObjectsProvider = DevExpress.QueryBuilder.Widgets.Internal.QueryBuilderObjectsProvider;
    import QBFilterEditorHelper = DevExpress.QueryBuilder.Widgets.Internal.QBFilterEditorHelper;
    import OperandPropertySurface = DevExpress.Analytics.Widgets.Filtering.OperandPropertySurface;
    import FilterEditorHelper = DevExpress.Analytics.Widgets.FilterEditorHelper;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;
    import FilterStringOptions = DevExpress.Analytics.Widgets.FilterStringOptions;
    import ParameterViewModel = DevExpress.QueryBuilder.Elements.ParameterViewModel;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import FederationDataSource = DevExpress.Analytics.Data.FederationDataSource;
    import FederationQueryType = DevExpress.QueryBuilder.Utils.FederationQueryType;
    import IFederationQuery = DevExpress.QueryBuilder.Utils.IFederationQuery;
    import IFederationQueryBuilderCallbacks = DevExpress.Analytics.Wizard.Internal.IFederationQueryBuilderCallbacks;
    import PopupEditorBase = DevExpress.Analytics.Widgets.Internal.PopupEditorBase;
    import FederatedQueriesHelper = DevExpress.QueryBuilder.Widgets.Internal.FederatedQueriesHelper;
    import Editor = DevExpress.Analytics.Widgets.Editor;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import PopupService = DevExpress.Analytics.Internal.PopupService;
    import MasterDetailRelation = DevExpress.Analytics.Data.MasterDetailRelation;
    import MasterQuerySurface = DevExpress.QueryBuilder.Widgets.Internal.MasterQuerySurface;
    import KeyColumnSurface = DevExpress.QueryBuilder.Widgets.Internal.KeyColumnSurface;
    import MasterDetailRelationSurface = DevExpress.QueryBuilder.Widgets.Internal.MasterDetailRelationSurface;
    import ResultSet = DevExpress.Analytics.Data.ResultSet;

	export var editorTemplates: EditorTemplates<QueryBuilderEditors>;
	export {};

	/// <reference types="jquery" />




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

	export {};

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





	export class GroupFilterEditorSerializer extends FilterEditorSerializer {
	    private _columns;
	    private _columnDisplayName;
	    private _findAggregatedColumn;
	    private _aggregatePropertyName;
	    constructor(_columns: () => ColumnExpression[]);
	    serializeOperandProperty(operand: OperandProperty): string;
	    deserialize(stringCriteria: string): CriteriaOperator;
	}





	export class OperandParameterQBSurface extends OperandParameterSurface {
	    static defaultDisplay: () => any;
	    private get _parameterType();
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



	export class QBFilterEditorHelper extends FilterEditorHelper {
	    constructor(parametersMode: string);
	    newParameters: ko.ObservableArray<DataSourceParameter>;
	}
	export var QBFilterEditorHelperDefault: typeof QBFilterEditorHelper;
	export function _setQBFilterEditorHelperDefault(helperType: any): void;





	export class QBFilterStringOptions extends FilterStringOptions {
	    constructor(filterString: ko.Observable<string> | ko.Computed<string>, dataMember?: ko.Observable | ko.Computed, disabled?: ko.Observable<boolean> | ko.Computed<boolean>, title?: {
	        text: string;
	        localizationId?: string;
	    });
	    initializeFilterStringHelper(parameters: ko.ObservableArray<ParameterViewModel> | ko.Computed<ParameterViewModel[]>, parametersMode: string, serializer?: FilterEditorSerializer): void;
	    helper: QBFilterEditorHelper;
	}


	interface IRightPanelSwitcher {
	    visible: ko.PureComputed<boolean>;
	    toogle: () => void;
	    title: string;
	    disabled: ko.Subscribable<boolean>;
	}
	export class RightPanelSwitcher extends Disposable implements IRightPanelSwitcher {
	    private editableObj;
	    private getDisplayName;
	    private _collapsed;
	    constructor(collapsed: ko.Subscribable<boolean>, editableObj: ko.Observable<any>, visibleCondition: (model: any) => boolean, getDisplayName: (editableObj: ko.Observable<any>) => string);
	    visible: ko.PureComputed<boolean>;
	    dispose(): void;
	    toogle(): void;
	    get title(): string;
	    disabled: ko.Subscribable<boolean>;
	}
	export {};





	export interface IFederatedQueriesCallbacks {
	    afterAddQuery?: (query: IFederationQuery) => void;
	    onSave?: () => void;
	    onClose?: () => void;
	}
	export class FederatedQueriesHelper extends Disposable {
	    private _dataSource;
	    private queries;
	    private _getQuery;
	    private _showSelectQbCallBack;
	    private _showUnionQbCallBack;
	    private _showTransformQbCallBack;
	    private _setQuery;
	    private _popupSelectQueryBuilder;
	    private _popupUnionQueryBuilder;
	    private _popupTransformQueryBuilder;
	    private _afterAddQuery;
	    constructor(_dataSource: FederationDataSource, queries: ko.ObservableArray<IFederationQuery>, callbacks: IFederatedQueriesCallbacks, rtl?: boolean);
	    editQuery(type: FederationQueryType, name: string): void;
	    dispose(): void;
	    template: string;
	    callBacks: IFederationQueryBuilderCallbacks;
	    popupItems: {
	        template: string;
	        model: any;
	    }[];
	}





	export class ManageFederatedQueriesEditor extends PopupEditorBase {
	    private _dataSource;
	    private _callBack;
	    rtl: boolean;
	    private _createAddQueryButton;
	    constructor(_dataSource: FederationDataSource, _callBack: () => void, rtl?: boolean);
	    queriesGrid: any;
	    queriesStoreData: ko.PureComputed<{
	        'id': string;
	        'name': string;
	        'type': FederationQueryType;
	    }[]>;
	    save(): void;
	    canSave(): boolean;
	    close(): void;
	    dispose(): void;
	    className: string;
	    _queriesPopupHelper: FederatedQueriesHelper;
	    title(): string;
	}




	export class UndoEditor extends Editor {
	    constructor(info: ISerializationInfo, level: any, parentDisabled?: ko.Computed<boolean>, textToSearch?: any);
	    generateValue(undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>): ko.Observable<any> | ko.Computed<any>;
	    undoValue: ko.Observable | ko.Computed;
	}

	export function registerEditorTemplates(): void;

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

	/// <reference types="jquery" />






	export class MasterDetailEditor extends PopupEditorBase {
	    constructor(relations: ko.ObservableArray<MasterDetailRelation>, resultSet: ResultSet, saveCallBack: () => JQueryPromise<{}>);
	    isValid: ko.Observable<boolean>;
	    save: () => void;
	    loadPanelVisible: ko.Observable<boolean>;
	    popupService: PopupService;
	    masterQueries: ko.ObservableArray<MasterQuerySurface>;
	    createRelation: (target: MasterQuerySurface) => any;
	    setColumn: (target: KeyColumnSurface) => any;
	    title(): any;
	}

}
declare module DevExpress.QueryBuilder.Metadata {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;

	export var name: ISerializationInfo;
	export var alias: ISerializationInfo;
	export var text: ISerializationInfo;
	export var selected: ISerializationInfo;
	export var size: ISerializationInfo;
	export var location: ISerializationInfo;
	export var sizeLocation: ISerializationInfoArray;
	export var unknownSerializationsInfo: ISerializationInfoArray;

}
declare module DevExpress.Analytics.Diagram {
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import ControlsFactory = DevExpress.Analytics.Utils.ControlsFactory;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import Size = DevExpress.Analytics.Elements.Size;
    import Point = DevExpress.Analytics.Elements.Point;
    import IConnectingPoint = DevExpress.Analytics.Diagram.IConnectingPoint;
    import IPoint = DevExpress.Analytics.Elements.IPoint;
    import PointSide = DevExpress.Analytics.Diagram.PointSide;
    import DiagramElementBaseViewModel = DevExpress.Analytics.Diagram.DiagramElementBaseViewModel;
    import ConnectorViewModel = DevExpress.Analytics.Diagram.ConnectorViewModel;
    import ConnectionPointViewModel = DevExpress.Analytics.Diagram.ConnectionPointViewModel;
    import SurfaceElementBase = DevExpress.Analytics.Elements.SurfaceElementBase;
    import ISurfaceContext = DevExpress.Analytics.Elements.ISurfaceContext;
    import IUnitProperties = DevExpress.Analytics.Internal.IUnitProperties;
    import Margins = DevExpress.Analytics.Elements.Margins;
    import DiagramViewModel = DevExpress.Analytics.Diagram.DiagramViewModel;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import IHoverInfo = DevExpress.Analytics.Internal.IHoverInfo;
    import IMargins = DevExpress.Analytics.Elements.IMargins;
    import DiagramElementBaseSurface = DevExpress.Analytics.Diagram.DiagramElementBaseSurface;
    import DiagramSurface = DevExpress.Analytics.Diagram.DiagramSurface;
    import RoutedConnectorViewModel = DevExpress.Analytics.Diagram.RoutedConnectorViewModel;
    import ConnectionPointSurface = DevExpress.Analytics.Diagram.ConnectionPointSurface;
    import ConnectingPointViewModel = DevExpress.Analytics.Diagram.ConnectingPointViewModel;
    import DiagramElementViewModel = DevExpress.Analytics.Diagram.DiagramElementViewModel;
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
    import ConnectingPointSurface = DevExpress.Analytics.Diagram.ConnectingPointSurface;
    import ConnectorSurface = DevExpress.Analytics.Diagram.ConnectorSurface;
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;

	export var name: ISerializationInfo;
	export var text: ISerializationInfo;
	export var size: ISerializationInfo;
	export var location: ISerializationInfo;
	export var sizeLocation: ISerializationInfoArray;
	export var unknownSerializationsInfo: ISerializationInfoArray;


	export var diagramControlsFactory: ControlsFactory<string>;







	export class DiagramElementBaseViewModel extends ElementViewModel {
	    getControlFactory(): ControlsFactory;
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    size: Size;
	    location: Point;
	}
	export var diagramElementSerializationInfo: ISerializationInfoArray;


	export enum PointSide {
	    East = 0,
	    South = 1,
	    North = 2,
	    West = 3
	}
	export const GRID_SIZE = 10;
	export function determineConnectingPoints<T extends {
	    rightConnectionPoint: IConnectingPoint;
	    leftConnectionPoint: IConnectingPoint;
	}>(startObject: T, endObject: T): {
	    start: IConnectingPoint;
	    end: IConnectingPoint;
	};






	export interface IConnectingPoint {
	    location: IPoint;
	    side: ko.Observable<PointSide> | ko.Computed<PointSide>;
	}
	export class ConnectingPointViewModel extends DiagramElementBaseViewModel implements IConnectingPoint {
	    constructor(control: any, parent: DiagramElementBaseViewModel, serializer?: ModelSerializer);
	    percentOffsetX: ko.Observable<number> | ko.Computed<number>;
	    percentOffsetY: ko.Observable<number> | ko.Computed<number>;
	    side: ko.PureComputed<PointSide>;
	}
	export var connectingPointSerializationInfo: ISerializationInfoArray;







	export class ConnectionPointViewModel extends DiagramElementBaseViewModel {
	    constructor(control: any, parent: ConnectorViewModel, serializer?: ModelSerializer);
	    location: Point;
	    connectingPoint: ko.Observable<IConnectingPoint>;
	}
	export var connectionPointSerializationInfo: ISerializationInfoArray;





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






	export class RoutedConnectorViewModel extends ConnectorViewModel {
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




	export class DiagramElementBaseSurface<M extends DiagramElementBaseViewModel = DiagramElementBaseViewModel> extends SurfaceElementBase<M> {
	    static _unitProperties: IUnitProperties<DiagramElementBaseViewModel>;
	    constructor(control: M, context: ISurfaceContext, unitProperties: IUnitProperties<M>);
	    template: string;
	    selectiontemplate: string;
	    contenttemplate: string;
	    margin: ko.Observable<number>;
	    positionWidthWithoutMargins: ko.Computed<number>;
	    positionLineHeightWithoutMargins: ko.Computed<number>;
	}




	export class DiagramViewModel extends DiagramElementBaseViewModel {
	    getInfo(): ISerializationInfoArray;
	    constructor(diagramSource: any);
	    controls: ko.ObservableArray<DiagramElementBaseViewModel>;
	    name: ko.Observable<string> | ko.Computed<string>;
	    pageWidth: ko.Observable<number> | ko.Computed<number>;
	    pageHeight: ko.Observable<number> | ko.Computed<number>;
	    margins: Margins;
	}
	export var margins: ISerializationInfo;
	export var pageWidth: ISerializationInfo;
	export var pageHeight: ISerializationInfo;
	export var diagramSerializationsInfo: ISerializationInfoArray;








	export class DiagramSurface extends SurfaceElementBase<DiagramViewModel> implements ISelectionTarget, ISurfaceContext {
	    static _unitProperties: IUnitProperties<DiagramViewModel>;
	    constructor(diagram: DiagramViewModel, zoom?: ko.Observable<number>);
	    measureUnit: ko.Observable<string>;
	    dpi: ko.Observable<number>;
	    zoom: ko.Observable<number> | ko.Computed<number>;
	    controls: ko.ObservableArray<DiagramElementBaseSurface<DevExpress.Analytics.DiagramElementBaseViewModel>>;
	    allowMultiselect: boolean;
	    focused: ko.Observable<boolean>;
	    selected: ko.Observable<boolean>;
	    underCursor: ko.Observable<IHoverInfo>;
	    checkParent(surfaceParent: ISelectionTarget): boolean;
	    _parent: ISelectionTarget;
	    get parent(): ISelectionTarget;
	    set parent(newVal: ISelectionTarget);
	    templateName: string;
	    getChildrenCollection(): ko.ObservableArray<any>;
	    margins: IMargins;
	}





	export class ConnectionPointSurface extends SurfaceElementBase<ConnectionPointViewModel> {
	    static _unitProperties: IUnitProperties<ConnectionPointViewModel>;
	    constructor(control: ConnectionPointViewModel, context: ISurfaceContext);
	    template: string;
	    selectiontemplate: string;
	    relativeX: ko.Observable<number> | ko.Computed<number>;
	    relativeY: ko.Observable<number> | ko.Computed<number>;
	    container(): DiagramSurface;
	}






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
	    showRightArrow: ko.Observable<boolean> | ko.Computed<boolean>;
	    isVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    routePoints: ko.ObservableArray<IRoutePoint>;
	    routePointsSet: ko.PureComputed<string>;
	    routeLineWrappers: ko.PureComputed<any[]>;
	    connectorID: () => number;
	}





	export class ConnectorSurface extends DiagramElementBaseSurface<ConnectorViewModel> {
	    constructor(control: ConnectorViewModel, context: ISurfaceContext);
	    template: string;
	    selectiontemplate: string;
	    startPoint: ko.Observable<ConnectionPointSurface> | ko.Computed<ConnectionPointSurface>;
	    endPoint: ko.Observable<ConnectionPointSurface> | ko.Computed<ConnectionPointSurface>;
	}





	export class DiagramElementViewModel extends DiagramElementBaseViewModel {
	    constructor(control: any, parent: ElementViewModel, serializer?: ModelSerializer);
	    connectingPoints: ko.ObservableArray<ConnectingPointViewModel>;
	    text: ko.Observable<string> | ko.Computed<string>;
	    type: ko.Observable<string> | ko.Computed<string>;
	}





	export class ConnectingPointSurface extends DiagramElementBaseSurface<ConnectingPointViewModel> {
	    static _unitProperties: IUnitProperties<ConnectingPointViewModel>;
	    constructor(control: ConnectingPointViewModel, context: ISurfaceContext);
	    template: string;
	    selectiontemplate: string;
	    contenttemplate: string;
	}




	export class DiagramElementSurface extends DiagramElementBaseSurface<DiagramElementViewModel> {
	    constructor(control: DiagramElementViewModel, context: ISurfaceContext);
	    _getChildrenHolderName(): string;
	    contenttemplate: string;
	}

	export function registerControls(): void;

	export {};

	export {};








	export class ConnectionPointDragHandler extends DragDropHandler {
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(control: ISelectionTarget): void;
	    drag(event: MouseEvent, uiElement: any): void;
	    doStopDrag(): void;
	    currentConnectionPoint: ConnectionPointSurface;
	}










	export class ConnectingPointDragHandler extends DragDropHandler {
	    constructor(surface: ko.Observable<ISurfaceContext> | ko.Computed<ISurfaceContext>, selection: SurfaceSelection, undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(control: ISelectionTarget): void;
	    drag(event: MouseEvent, uiElement: any): void;
	    doStopDrag(): void;
	    startConnectingPoint: ConnectingPointSurface;
	    newConnector: ConnectorViewModel;
	    get newConnectorSurface(): ConnectorSurface;
	}


	export var groups: GroupObject;
	export function createDiagramDesigner(element: Element, diagramSource: ko.Observable<any>, localization?: any, rtl?: boolean): any;

}
declare module DevExpress.QueryBuilder.Elements.Metadata {
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;

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

	export var ColumnType: {
	    RecordsCount: string;
	    Column: string;
	    Expression: string;
	    AllColumns: string;
	    AllColumnsQuery: string;
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


	export var allColumnsSerializationInfo: ISerializationInfoArray;


	export var tableSerializationInfo: ISerializationInfoArray;


	export var relationSerializationInfo: ISerializationInfoArray;

	export var ParametersMode: {
	    ReadWrite: string;
	    Read: string;
	    Disabled: string;
	};


	export var querySerializationsInfo: ISerializationInfoArray;


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
    import ColumnExpression = DevExpress.QueryBuilder.Elements.ColumnExpression;
    import QueryViewModelBase = DevExpress.QueryBuilder.Elements.QueryViewModelBase;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import IModelSerializer = DevExpress.Analytics.Utils.IModelSerializer;
    import DBColumn = DevExpress.Analytics.Data.DBColumn;
    import AllColumnsViewModel = DevExpress.QueryBuilder.Elements.AllColumnsViewModel;
    import ColumnViewModel = DevExpress.QueryBuilder.Elements.ColumnViewModel;
    import TableViewModel = DevExpress.QueryBuilder.Elements.TableViewModel;
    import ElementViewModel = DevExpress.Analytics.Elements.ElementViewModel;
    import ModelSerializer = DevExpress.Analytics.Utils.ModelSerializer;
    import IDBSchemaProvider = DevExpress.Analytics.Data.IDBSchemaProvider;
    import SubNode = DevExpress.Analytics.Data.SubNode;
    import FederatedQueryExpression = DevExpress.Analytics.Data.FederatedQueryExpression;
    import FederationDataSource = DevExpress.Analytics.Data.FederationDataSource;
    import IDataSourceBase = DevExpress.Analytics.Data.IDataSourceBase;
    import JoinConditionViewModel = DevExpress.QueryBuilder.Elements.JoinConditionViewModel;
    import QuerySurface = DevExpress.QueryBuilder.Elements.QuerySurface;
    import TableSurface = DevExpress.QueryBuilder.Elements.TableSurface;
    import FederationColumnViewModel = DevExpress.QueryBuilder.Internal.FederationColumnViewModel;
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;
    import DragDropHandler = DevExpress.Analytics.Internal.DragDropHandler;
    import SurfaceSelection = DevExpress.Analytics.Internal.SurfaceSelection;
    import ISelectionTarget = DevExpress.Analytics.Internal.ISelectionTarget;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import SnapLinesHelper = DevExpress.Analytics.Internal.SnapLinesHelper;
    import DragHelperContent = DevExpress.Analytics.Internal.DragHelperContent;
    import RoutedConnectorSurface = DevExpress.Analytics.Diagram.RoutedConnectorSurface;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import ColumnDragHandler = DevExpress.QueryBuilder.Internal.ColumnDragHandler;
    import IDesignerModel = DevExpress.Analytics.Internal.IDesignerModel;
    import DbObjectDragDropHandler = DevExpress.QueryBuilder.Internal.DbObjectDragDropHandler;
    import QueryBuilderObjectsProvider = DevExpress.QueryBuilder.Widgets.Internal.QueryBuilderObjectsProvider;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import ICommonBindingCustomizationHandler = DevExpress.Analytics.Internal.ICommonBindingCustomizationHandler;
    import ICommonCallbacksHandler = DevExpress.Analytics.Internal.ICommonCallbacksHandler;
    import JSQueryBuilder = DevExpress.Querybuilder.JSQueryBuilder;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;
    import TabInfo = DevExpress.Analytics.Utils.TabInfo;
    import GroupObject = DevExpress.Analytics.Internal.GroupObject;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;
    import ControlProperties = DevExpress.Analytics.Internal.ControlProperties;
    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;
    import IQueryBuilderOptions = DevExpress.Querybuilder.IQueryBuilderOptions;
    import IQueryBuilderCustomizationHandler = DevExpress.QueryBuilder.Internal.IQueryBuilderCustomizationHandler;
    import IQueryBuilderModel = DevExpress.QueryBuilder.Internal.IQueryBuilderModel;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;


	export class ColumnExpressionCollectionHelper {
	    static find(collection: ko.ObservableArray<ColumnExpression>, tableName: string, columnName: string): ColumnExpression;
	    static findByName(collection: ko.ObservableArray<ColumnExpression>, actualName: string): ColumnExpression;
	    static removeDependend(collection: ko.ObservableArray<ColumnExpression>, tableName: string): void;
	    static toExpresson(column: ColumnExpression, columns: ko.ObservableArray<ColumnExpression>, value: any): void;
	    static setUniqueAlias(collection: any, alias: any): string;
	    static createNew(query: QueryViewModelBase, collection: ko.ObservableArray<ColumnExpression>, table: string, column: string): ColumnExpression;
	    static addNew(query: QueryViewModelBase, collection: ko.ObservableArray<ColumnExpression>, table: string, column: string, lazy?: boolean): ColumnExpression;
	    static remove(collection: ko.ObservableArray<ColumnExpression>, tableName: string, columnName: string, lazy?: boolean): void;
	    static columnTypeToFederated(type: any): string;
	    static federatedTypeToColumn(type: any): string;
	}







	export class FederationColumnViewModel extends ColumnViewModel {
	    constructor(model: any, dbColumn: DBColumn, parent: TableViewModel, serializer?: IModelSerializer);
	    getInfo(): ISerializationInfoArray;
	}
	export class FederationAllColumnsViewModel extends AllColumnsViewModel {
	    constructor(parent: TableViewModel, serializer?: any);
	    getInfo(): ISerializationInfoArray;
	}

















	export var federationQuerySerializationsInfo: ISerializationInfoArray;
	export class FederationQueryViewModel extends QueryViewModelBase {
	    private _dbSchemaProvider?;
	    private serializer?;
	    private static emptyModel;
	    protected _initializeTable(table: FederationTableViewModel): void;
	    private _createTableViewModel;
	    constructor(querySource: any, dataSource: IDataSourceBase, _dbSchemaProvider?: IDBSchemaProvider, parametersMode?: string, serializer?: ModelSerializer);
	    dispose(): void;
	    serialize(includeRootTag?: boolean): any;
	    createChild(info: any, model?: any, path?: string): ElementViewModel;
	    cerateJoinCondition(parentColumn: ColumnViewModel, nestedColumn: ColumnViewModel): JoinConditionViewModel;
	    getInfo(): ISerializationInfoArray;
	    tables: ko.ObservableArray<FederationTableViewModel>;
	    expressions: ko.ObservableArray<FederatedQueryExpression>;
	    subNodes: ko.ObservableArray<SubNode>;
	    rootModel: ko.Observable<FederationTableViewModel>;
	    dataSource: FederationDataSource;
	    controlType: string;
	    defaultPageHeight: number;
	    topOffset: number;
	}
	export class FederationQuerySurface extends QuerySurface {
	}
	export class FederationTableViewModel extends TableViewModel {
	    constructor(model: any, parent: FederationQueryViewModel, path: string, serializer?: ModelSerializer);
	    queryType: ko.Observable<string> | ko.Computed<string>;
	    path: string;
	    sourceName: ko.Observable<string> | ko.Computed<string>;
	    getInfo(): ISerializationInfoArray;
	    getPath(): string;
	    createChildColumn(item: DBColumn): FederationColumnViewModel;
	    displaySourceName: ko.Observable<string>;
	}
	export class FederationTableSurface extends TableSurface {
	    titletemplate: string;
	}

	/// <reference types="jquery" />




	export function wrapGetSelectStatement(callback?: (connection: SqlDataConnection, queryJSON: string) => JQueryPromise<ISelectStatementResponse>): (connection: SqlDataConnection, queryJSON: string) => JQueryPromise<ISelectStatementResponse>;
	export function wrapRebuildResultSchema(callback?: (dataSource: SqlDataSource, queryName?: string, relationsEditing?: boolean) => JQueryPromise<{
	    resultSchemaJSON: string;
	    connectionParameters?: string;
	}>): (dataSource: SqlDataSource, queryName?: string, relationsEditing?: boolean) => JQueryPromise<{
	    resultSchemaJSON: string;
	    connectionParameters?: string;
	}>;
	export function wrapGetFederationdResultSchema(callback?: (dataSource: FederationDataSource) => JQueryPromise<{
	    resultSchemaJSON: string;
	}>): (dataSource: FederationDataSource) => JQueryPromise<{
	    resultSchemaJSON: string;
	}>;









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
	    drag(event: MouseEvent, uiElement: any): void;
	    doStopDrag(): void;
	    dragDropConnector: ko.Observable<RoutedConnectorSurface>;
	    getDragColumn(): ColumnViewModel;
	}










	export class DbObjectDragDropHandler extends DragDropHandler {
	    private _undoEngine;
	    private _querySurface;
	    protected _query: () => QueryViewModelBase;
	    protected suggestLocation(newControl: TableViewModel, query: QueryViewModelBase): void;
	    getDropCallback: (undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, suggestLocation: boolean) => (item: TreeListItemViewModel, query: QueryViewModelBase) => TableViewModel;
	    constructor(surface: ko.Observable<QuerySurface>, selection: SurfaceSelection, _undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, snapHelper: SnapLinesHelper, dragHelperContent: DragHelperContent);
	    startDrag(draggable: any): void;
	    doStopDrag(uiElement: any, _: any): void;
	    addControl(control: any, dropTargetSurface: any, size: any): void;
	}

	/// <reference types="jquery" />






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


	export function serializeDataConnection(connection: SqlDataConnection): string;



	export interface IQueryBuilderCustomizationHandler extends ICommonCallbacksHandler<JSQueryBuilder> {
	    saveQueryRequested?: (serializedData: any) => void;
	}
	export interface IJSQueryBuilderCallbacks extends IQueryBuilderCustomizationHandler, ICommonBindingCustomizationHandler<JSQueryBuilder> {
	}








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
	export class SelectedTabInfo extends TabInfo {
	    model: ObjectProperties;
	    constructor(model: ObjectProperties);
	}

	export {};

	export function registerControls(): void;






	export class QueryBuilderTreeListController extends TreeListController {
	    private undoEngine;
	    private query;
	    private _dragDropHandler;
	    constructor(undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>, query: ko.Subscribable<QueryViewModel>, dragDropHandler: DbObjectDragDropHandler);
	    dblClickHandler(item: TreeListItemViewModel): void;
	}

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />






	export interface IQueryBuilderSurfaceCreator {
	    options: IQueryBuilderOptions;
	    creator: (options: IQueryBuilderOptions) => QueryViewModelBase;
	}
	export function updateQueryBuilderSurfaceContentSize(getRoot: () => JQuery<HTMLElement>, surfaceSize: ko.Observable<number> | ko.Computed<number>, surface: ko.Observable<QuerySurface>, updateLayoutCallbacks?: Array<() => void>): () => void;
	export function createIsLoadingFlag(model: ko.Observable<QueryViewModel> | ko.Computed<QueryViewModel>, dbSchemaProvider: ko.Observable<IDBSchemaProvider> | ko.Computed<IDBSchemaProvider>): ko.PureComputed<boolean>;
	export function createQueryBuilder(element: Element, options: IQueryBuilderOptions, callbacks: IQueryBuilderCustomizationHandler, applyBindings?: boolean): JQueryDeferred<IQueryBuilderModel>;
	export function createQueryBuilderSurface(element: Element, options: IQueryBuilderOptions, queryCreator: (options: IQueryBuilderOptions) => QueryViewModelBase): IQueryBuilderModel;

	export {};





	export class FederatedUnionQueryBuilderTreeListController extends TreeListController {
	    dragDropHandler: DragDropHandler;
	    dblClickHandler: (item: TreeListItemViewModel) => void;
	    itemsFilter(item: IDataMemberInfo, path?: string, model?: TreeListItemViewModel): boolean;
	    isDraggable(item: TreeListItemViewModel): boolean;
	    constructor(dragDropHandler: DragDropHandler, dblClickHandler: (item: TreeListItemViewModel) => void);
	}
	export class FederatedTransformQueryBuilderTreeListController extends FederatedUnionQueryBuilderTreeListController {
	    itemsFilter(item: IDataMemberInfo, path: string, model: TreeListItemViewModel): boolean;
	    hasItems(item: IDataMemberInfo): boolean;
	}

}
declare module DevExpress.Analytics.Wizard {
    import IDisposable = DevExpress.Analytics.Utils.IDisposable;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;
    import IWizardPageMetadata = DevExpress.Analytics.Wizard.IWizardPageMetadata;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import WizardPageBase = DevExpress.Analytics.Wizard.WizardPageBase;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import FederationDataSource = DevExpress.Analytics.Data.FederationDataSource;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;
    import ObjectDataSource = DevExpress.Analytics.Data.ObjectDataSource;
    import ObjectCtor = DevExpress.Analytics.Data.ObjectCtor;
    import ObjectDataMember = DevExpress.Analytics.Data.ObjectDataMember;
    import ObjectType = DevExpress.Analytics.Data.ObjectType;
    import DataSourceType = DevExpress.Analytics.Wizard.DataSourceType;
    import _SqlDataSourceWrapper = DevExpress.Analytics.Wizard._SqlDataSourceWrapper;
    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;
    import ISqlDataSourceWizardState = DevExpress.Analytics.Wizard.ISqlDataSourceWizardState;
    import IConnectionStringDefinition = DevExpress.Analytics.Wizard.IConnectionStringDefinition;
    import ChooseAvailableItemPage = DevExpress.Analytics.Wizard.ChooseAvailableItemPage;
    import IJsonDataSourceWizardState = DevExpress.Analytics.Wizard.IJsonDataSourceWizardState;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import JsonSchemaRootNode = DevExpress.Analytics.Data.JsonSchemaRootNode;
    import IJsonDataSourceWizardCallbacks = DevExpress.Analytics.Wizard.Internal.IJsonDataSourceWizardCallbacks;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IJsonDataSourceType = DevExpress.Analytics.Wizard.IJsonDataSourceType;
    import IObjectDataSourceWizardState = DevExpress.Analytics.Wizard.IObjectDataSourceWizardState;
    import ChooseObjectMemberParameters = DevExpress.Analytics.Wizard.Internal.ChooseObjectMemberParameters;
    import IParametersViewModelConverter = DevExpress.Analytics.Wizard.Internal.IParametersViewModelConverter;
    import ICollectionEditorOptions = DevExpress.Analytics.Widgets.Internal.ICollectionEditorOptions;
    import QueryBuilderPopup = DevExpress.Analytics.Wizard.Internal.QueryBuilderPopup;
    import ISqlQueryControl = DevExpress.Analytics.Wizard.Internal.ISqlQueryControl;
    import PageIterator = DevExpress.Analytics.Wizard.PageIterator;
    import EventManager = DevExpress.Analytics.Utils.EventManager;
    import IWizardEvents = DevExpress.Analytics.Wizard.IWizardEvents;
    import BaseWizard = DevExpress.Analytics.Wizard.BaseWizard;
    import TableQuery = DevExpress.Analytics.Data.TableQuery;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;
    import IDataSourceWizardConnectionStrings = DevExpress.Analytics.Wizard.IDataSourceWizardConnectionStrings;
    import IDataSourceWizardCallbacks = DevExpress.Analytics.Wizard.Internal.IDataSourceWizardCallbacks;
    import PopupWizard = DevExpress.Analytics.Wizard.PopupWizard;
    import _MultiQueryDataSourceWizardOptions = DevExpress.Analytics.Wizard._MultiQueryDataSourceWizardOptions;
    import FullscreenWizardPageFactory = DevExpress.Analytics.Wizard.FullscreenWizardPageFactory;
    import MasterDetailRelation = DevExpress.Analytics.Data.MasterDetailRelation;
    import ResultSet = DevExpress.Analytics.Data.ResultSet;
    import IDataSourceBase = DevExpress.Analytics.Data.IDataSourceBase;
    import MasterDetailEditor = DevExpress.QueryBuilder.Widgets.Internal.MasterDetailEditor;
    import IFederationDataSourceWizardState = DevExpress.Analytics.Wizard.IFederationDataSourceWizardState;
    import MasterDetailRelationshipsPageBase = DevExpress.Analytics.Wizard.MasterDetailRelationshipsPageBase;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;
    import IAction = DevExpress.Analytics.Utils.IAction;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import FederatedQueriesHelper = DevExpress.QueryBuilder.Widgets.Internal.FederatedQueriesHelper;
    import TreeNode = DevExpress.Analytics.Wizard.Internal.TreeNode;
    import MultiQueryTreeListItemFactory = DevExpress.Analytics.Wizard.Internal.MultiQueryTreeListItemFactory;
    import TreeLeafNode = DevExpress.Analytics.Wizard.Internal.TreeLeafNode;
    import CustomSqlQuery = DevExpress.Analytics.Data.CustomSqlQuery;
    import ChooseObjectDataMembers = DevExpress.Analytics.Wizard.Internal.ChooseObjectDataMembers;
    import ChooseObjectTypes = DevExpress.Analytics.Wizard.Internal.ChooseObjectTypes;
    import _DataSourceWizardOptionsBase = DevExpress.Analytics.Wizard._DataSourceWizardOptionsBase;
    import IMultiQueryDataSourceWizardCallbacks = DevExpress.Analytics.Wizard.Internal.IMultiQueryDataSourceWizardCallbacks;
    import FullscreenWizard = DevExpress.Analytics.Wizard.FullscreenWizard;
    import IWizardPageStyle = DevExpress.Analytics.Wizard.Internal.IWizardPageStyle;
    import WizardSectionPosition = DevExpress.Analytics.Wizard.Internal.WizardSectionPosition;
    import WizardPageSectionFactory = DevExpress.Analytics.Wizard.Internal.WizardPageSectionFactory;
    import WizardPageProcessor = DevExpress.Analytics.Wizard.Internal.WizardPageProcessor;
    import WizardPageSection = DevExpress.Analytics.Wizard.Internal.WizardPageSection;
    import WizardNavigationPanel = DevExpress.Analytics.Wizard.WizardNavigationPanel;
    import FullscreenWizardPage = DevExpress.Analytics.Wizard.FullscreenWizardPage;
    import ChooseJsonConnectionPage = DevExpress.Analytics.Wizard.ChooseJsonConnectionPage;
    import ChooseJsonSourcePage = DevExpress.Analytics.Wizard.ChooseJsonSourcePage;
	export const __loadingStateFunctionName = "__loadingState";
	export const __nextActionFunctionName = "__nextAction";

	/// <reference types="jquery" />

	export interface IWizardPage extends IDisposable {
	    commit: () => JQueryPromise<any>;
	    initialize: (state: any, stateChanged?: boolean) => JQueryPromise<any>;
	    canFinish: () => boolean;
	    canNext: () => boolean;
	    onChange?: (callback: () => void) => void;
	    changeAlways?: boolean;
	}


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



	export class PageFactory {
	    registerMetadata<T extends IWizardPage>(pageId: string, metadata: IWizardPageMetadata<T>): void;
	    getMetadata(pageId: string): IWizardPageMetadata<IWizardPage>;
	    unregisterMetadata(pageId: string): void;
	    reset(): void;
	    metadata: {
	        [key: string]: IWizardPageMetadata<IWizardPage>;
	    };
	}

	export var DataSourceWizardPageId: {
	    ChoosePredefinedDataSourcePage: string;
	    ChooseDataSourceTypePage: string;
	    ConfigureMasterDetailRelationshipsPage: string;
	};
	export var SqlDataSourceWizardPageId: {
	    ChooseConnectionPage: string;
	    ConfigureQueryPage: string;
	    ConfigureParametersPage: string;
	    MultiQueryConfigurePage: string;
	    MultiQueryConfigureParametersPage: string;
	    FederatedQueryConfigurePage: string;
	};
	export var FederationDataSourceWizardPageId: {
	    FederatedQueryConfigurePage: string;
	    FederatedMasterDetailRelationshipsPage: string;
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
	    SpecifyFederationDataSourceSettingsPage: string;
	    SelectDataSourcePage: string;
	};
	export var FullscreenDataSourceWizardSectionId: {
	    SpecifyJsonConnectionPage: string;
	    ChooseJsonSchemaPage: string;
	    ChooseJsonSourcePage: string;
	    ChooseSqlConnectionPage: string;
	    ConfigureFederatedQueriesPage: string;
	    ConfigureFederatedMasterDetailRelationshipsPage: string;
	    ConfigureQueryPage: string;
	    ConfigureQueryParametersPage: string;
	    ConfigureMasterDetailRelationshipsPage: string;
	};

	/// <reference types="jquery" />


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

	/// <reference types="jquery" />




	export interface ITypeItem {
	    text: string;
	    imageClassName: string;
	    imageTemplateName: string;
	    type?: number;
	}
	export enum DataSourceType {
	    NoData = 0,
	    Sql = 1,
	    Json = 2,
	    Object = 3,
	    Federation = 4
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
	    commit(): JQueryPromise<IDataSourceWizardState>;
	    protected _createTypeItems(): ITypeItem[];
	    initialize(state: IDataSourceWizardState): JQueryPromise<any>;
	    typeItems: ITypeItem[];
	    selectedItem: ko.Observable<ITypeItem>;
	    _extendCssClass: (rightPath: string) => string;
	}
	export function _registerChooseDataSourceTypePage(factory: PageFactory, dataSourceTypeOptions: _DataSourceWizardOptions): void;




	export class _SqlDataSourceWrapper {
	    sqlDataSourceJSON?: string;
	    sqlDataSource: SqlDataSource;
	    private _queryIndex;
	    get sqlQuery(): ISqlQueryViewModel;
	    set sqlQuery(val: ISqlQueryViewModel);
	    saveCustomQueries(): any[];
	    save(): string;
	    customQueries: ISqlQueryViewModel[];
	    constructor(sqlDataSourceJSON?: string, queryName?: string, requestWrapper?: RequestWrapper);
	}









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
	export interface IFederationDataSourceWizardState {
	    name?: string;
	    federationDataSourceJSON?: string;
	    relations?: string[];
	    federatedQueries?: string[];
	}
	export interface IDataSourceWizardState {
	    dataSourceType?: DataSourceType;
	    sqlDataSourceWizard?: ISqlDataSourceWizardState;
	    jsonDataSourceWizard?: IJsonDataSourceWizardState;
	    objectDataSourceWizard?: IObjectDataSourceWizardState;
	    federationDataSourceWizard?: IFederationDataSourceWizardState;
	    dataSourceId?: string;
	    predeifnedDataSourceName?: string;
	}
	export var _restoreSqlDataSourceFromState: (state?: ISqlDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string) => _SqlDataSourceWrapper;
	export var _setRestoreSqlDataSourceFromState: (func: (state?: ISqlDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string) => _SqlDataSourceWrapper) => void;
	export var _resetRestoreSqlDataSourceFromState: () => void;
	export var _restoreFederationDataSourceFromState: (state: IFederationDataSourceWizardState, usedDataSources: ko.ObservableArray<IDataSourceInfo> | ko.Computed<IDataSourceInfo[]>, dataSourceId?: string) => FederationDataSource;
	export var _restoreJsonDataSourceFromState: (state: IJsonDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string) => JsonDataSource;
	export function _setRestoreJsonDataSourceFromState(func: (state: IJsonDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string) => JsonDataSource): void;
	export function _resetRestoreJsonDataSourceFromState(): void;
	export function _restoreObjectDataSourceFromState(state: IObjectDataSourceWizardState, requestWrapper?: RequestWrapper, dataSourceId?: string): ObjectDataSource;
	export function _createDefaultDataSourceWizardState(sqlDataSourceWizardState?: ISqlDataSourceWizardState, jsonDataSourceWizardState?: IJsonDataSourceWizardState, objectDataSourceWizardState?: IObjectDataSourceWizardState, federationDataSourceWizardState?: IFederationDataSourceWizardState): IDataSourceWizardState;

	export interface IConnectionStringDefinition {
	    name: string;
	    description?: string;
	}
	export interface IDataSourceWizardConnectionStrings {
	    sql: ko.ObservableArray<IConnectionStringDefinition>;
	    json?: ko.ObservableArray<IConnectionStringDefinition>;
	}

	/// <reference types="jquery" />


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
	    initialize(state: any, force?: boolean, stateChanged?: boolean): JQueryPromise<any>;
	}


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

	/// <reference types="jquery" />




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
	    _getNextPage(): JQueryPromise<_WrappedWizardPage>;
	    _getPreviousPage(): JQueryPromise<_WrappedWizardPage>;
	    _goToPage(pageId: string): JQueryPromise<_WrappedWizardPage>;
	    _getCurrentPage(): _WrappedWizardPage;
	    _getCurrentState(): T;
	    getNextPageId(pageId?: string): string;
	}

	/// <reference types="jquery" />




	export class ChooseSqlConnectionPage extends WizardPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    private _getSqlConnectionsCallback?;
	    constructor(connectionStrings: ko.ObservableArray<IConnectionStringDefinition>, _getSqlConnectionsCallback?: () => JQueryPromise<IConnectionStringDefinition[]>);
	    initialize(state: ISqlDataSourceWizardState): JQueryPromise<any>;
	    canNext(): boolean;
	    commit(): JQueryPromise<ISqlDataSourceWizardState>;
	    _connectionStrings: ko.ObservableArray<IConnectionStringDefinition>;
	    _selectedConnectionString: ko.ObservableArray<IConnectionStringDefinition>;
	}
	export function _registerChooseSqlConnectionPage(factory: PageFactory, connectionStrings: ko.ObservableArray<IConnectionStringDefinition>, getSqlConnectionsCallback?: () => JQueryPromise<IConnectionStringDefinition[]>): void;

	/// <reference types="jquery" />




	export interface IChooseAvailableItemPageOperation {
	    text: string;
	    createNew: boolean;
	}
	export class ChooseAvailableItemPage extends WizardPageBase {
	    items: ko.Subscribable<any[]>;
	    private _getJsonConnectionsCallback?;
	    constructor(items: ko.Subscribable<any[]>, canCreateNew?: boolean, _getJsonConnectionsCallback?: () => JQueryPromise<IConnectionStringDefinition[]>);
	    canNext(): boolean;
	    canCreateNew: ko.Observable<boolean>;
	    selectedItems: ko.ObservableArray<IDataSourceInfo>;
	    operations: IChooseAvailableItemPageOperation[];
	    selectedOperation: ko.Observable<IChooseAvailableItemPageOperation>;
	    _createNew: ko.PureComputed<boolean>;
	    initialize(state: any): JQueryPromise<IWizardPage>;
	    _displayExpr(item: any): string;
	    _getSelectedItem(state?: any): IDataSourceInfo;
	    onDblClick(): void;
	    get createNewOperationText(): string;
	    get existingOperationText(): string;
	}

	/// <reference types="jquery" />





	export class ChooseJsonConnectionPage extends ChooseAvailableItemPage {
	    commit(): JQuery.Promise<IJsonDataSourceWizardState, any, any>;
	    _getSelectedItem(data: IJsonDataSourceWizardState): IDataSourceInfo;
	    get createNewOperationText(): any;
	    get existingOperationText(): any;
	}
	export function _registerChooseJsonConnectionPage(factory: PageFactory, wizardOptions: _DataSourceWizardOptions): void;

	/// <reference types="jquery" />








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

	/// <reference types="jquery" />






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

	/// <reference types="jquery" />





	export class ConfigureObjectDataSourceParametersPage extends WizardPageBase<IObjectDataSourceWizardState, IObjectDataSourceWizardState> {
	    private _objectDataSource;
	    _chooseObjectParameters: ChooseObjectMemberParameters;
	    constructor(itemsProvider: IItemsProvider);
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQueryPromise<IObjectDataSourceWizardState>;
	    initialize(state: IObjectDataSourceWizardState): JQueryPromise<any>;
	}
	export function _registerConfigureObjectDataSourceParametersPage(factory: PageFactory, getItemsProviderCallback: () => IItemsProvider): void;

	/// <reference types="jquery" />






	export class ConfigureQueryParametersPage extends WizardPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    private parametersConverter;
	    private _requestWrapper;
	    private _sqlDataSourceWrapper;
	    private _isParametersValid;
	    constructor(parametersConverter: IParametersViewModelConverter, _requestWrapper: RequestWrapper);
	    canNext(): boolean;
	    canFinish(): boolean;
	    getParameters(): any[];
	    initialize(data: ISqlDataSourceWizardState): JQueryPromise<any>;
	    commit(): JQuery.Promise<ISqlDataSourceWizardState, any, any>;
	    removeButtonTitle: any;
	    parametersEditorOptions: ICollectionEditorOptions;
	}
	export function _registerConfigureParametersPage(factory: PageFactory, requestWrapper?: RequestWrapper, parametersConverter?: IParametersViewModelConverter): void;

	/// <reference types="jquery" />






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
	    localizeQueryType(queryTypeString: string): string;
	    initialize(state: ISqlDataSourceWizardState): JQueryPromise<any>;
	    commit(): JQueryPromise<ISqlDataSourceWizardState>;
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

	/// <reference types="jquery" />









	export class BaseWizard extends Disposable {
	    pageFactory: PageFactory;
	    stateManager: StateManager;
	    iterator: PageIterator;
	    events: EventManager<BaseWizard, IWizardEvents<BaseWizard>>;
	    private _finishCallback;
	    protected _createLoadingState(page: IWizardPage): void;
	    protected _createNextAction(page: IWizardPage): void;
	    private _loadingTimeout;
	    protected _loadingState(active: boolean): void;
	    protected _callBeforeFinishHandler(state: any, wizardModel?: any): void;
	    protected _callAfterFinishHandler(state: any, result: any): void;
	    onFinish(): void;
	    constructor(pageFactory: PageFactory, finishCallback?: (model: IDataSourceWizardState) => JQueryPromise<boolean>);
	    initialize(state?: any, createIterator?: (pageFactory: PageFactory, stateManager: StateManager) => PageIterator): void;
	    isFirstPage(): boolean;
	    canNext(): boolean;
	    canFinish(): boolean;
	    _initPage(page: _WrappedWizardPage): JQueryPromise<any>;
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

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />


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
	            of: any;
	        };
	        container: any;
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
	        onClick: () => void;
	    };
	    previousButton: {
	        text: any;
	        disabled: ko.Computed<boolean>;
	        onClick: () => void;
	    };
	    finishButton: {
	        text: any;
	        type: string;
	        disabled: ko.Computed<boolean>;
	        onClick: () => void;
	    };
	    _wizardPopupPosition(element: HTMLElement): {
	        of: any;
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
	            of: any;
	        };
	        container: any;
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
	            of: any;
	        };
	        container: any;
	    };
	    _titleTemplate: string;
	    title: string;
	}

	/// <reference types="jquery" />










	export class _DataSourceWizardOptionsBase<T extends IDataSourceWizardCallbacks> {
	    get jsonDataSourceAvailable(): boolean;
	    get sqlDataSourceAvailable(): boolean;
	    get objectDataSourceAvailable(): boolean;
	    get canCreateDataSource(): boolean;
	    get federationDataSourceAvailable(): boolean;
	    connectionStrings: IDataSourceWizardConnectionStrings;
	    callbacks: T;
	    rtl: boolean;
	    requestWrapper: RequestWrapper;
	    disableCustomSql: boolean;
	    wizardSettings: IDataSourceWizardSettings;
	    queryName: string;
	    allowCreateNewJsonConnection: boolean;
	    dataSources: ko.PureComputed<IDataSourceInfo[]>;
	    predefinedDataSources: ko.PureComputed<IDataSourceInfo[]> | ko.Observable<IDataSourceInfo[]>;
	    getSqlConnectionStrings?: () => JQueryPromise<IConnectionStringDefinition[]>;
	    getJsonConnectionStrings?: () => JQueryPromise<IConnectionStringDefinition[]>;
	}
	export class _DataSourceWizardOptions extends _DataSourceWizardOptionsBase<IDataSourceWizardCallbacks> {
	}
	export interface IDataSourceWizardSettings {
	    enableJsonDataSource?: boolean;
	    enableSqlDataSource?: boolean;
	    enableObjectDataSource?: boolean;
	    enableFederationDataSource?: boolean;
	}
	export class DataSourceWizardSettings implements IDataSourceWizardSettings {
	    createDefault(settings?: IDataSourceWizardSettings): IDataSourceWizardSettings;
	    enableJsonDataSource?: boolean;
	    enableSqlDataSource?: boolean;
	    enableObjectDataSource?: boolean;
	    enableFederationDataSource?: boolean;
	}
	export interface IRetrieveQuerySqlCallback {
	    (query: TableQuery, isInProcess: ko.Observable<boolean>): JQueryPromise<ISelectStatementResponse>;
	}
	export class DataSourceWizardPageIterator extends PageIterator {
	    private _dataSourceWizardOptions;
	    constructor(pageFactory: PageFactory, stateManager: StateManager, _dataSourceWizardOptions: _DataSourceWizardOptions);
	    getNextPageId(pageId: string): string;
	}
	export class DataSourceWizard extends PopupWizard {
	    private _wizardOptions;
	    constructor(pageFactory: PageFactory, _wizardOptions: _DataSourceWizardOptions);
	    initialize(state: IDataSourceWizardState, createIterator?: (pageFactory: PageFactory, stateManager: StateManager) => PageIterator): void;
	    canRunWizard(): boolean;
	    _extendCssClass: string;
	    title: any;
	}
	export function _registerDataSourceWizardPages(factory: PageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): PageFactory;
	export function _createDataSourceWizard(factory: PageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): DataSourceWizard;



	export interface IWizardPageSectionMetadata<T extends IWizardPage> extends IWizardPageMetadata<T> {
	    position?: number;
	    disabledText?: string;
	    recreate?: boolean;
	    onChange?: () => void;
	    required?: boolean;
	}

	/// <reference types="jquery" />





	export class ChooseAvailableDataSourcePage extends ChooseAvailableItemPage {
	    commit(): JQuery.Promise<IDataSourceWizardState>;
	    _getSelectedItem(state: IDataSourceWizardState): IDataSourceInfo;
	    canNext(): boolean;
	    canFinish(): boolean;
	}
	export function _registerChooseAvailableDataSourcePage(factory: PageFactory, wizardOptions: _DataSourceWizardOptions): void;




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

	/// <reference types="jquery" />




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

	/// <reference types="jquery" />





	export class MasterDetailRelationshipsPageBase<TState = any, TResult = any> extends WizardPageBase<TState, TResult> {
	    private _getResultSchema;
	    private _getResultSet;
	    protected _resultSet: ResultSet;
	    protected relationsSubscription: ko.Subscription;
	    protected _relations: ko.ObservableArray<MasterDetailRelation>;
	    protected _dataSource(): IDataSourceBase;
	    protected _restoreDataSource(state: TState): void;
	    protected _updateRelations(): void;
	    constructor(_getResultSchema: (dataSource: IDataSourceBase, queryName?: string, relationsEditing?: boolean) => JQueryPromise<{
	        resultSchemaJSON: string;
	        connectionParameters?: string;
	    }>);
	    canNext(): boolean;
	    canFinish(): boolean;
	    initialize(state: TState): JQueryPromise<ResultSet>;
	    dispose(): void;
	    _customResetOptions: () => undefined;
	    _relationsEditor: ko.Observable<MasterDetailEditor>;
	}

	/// <reference types="jquery" />







	export class FederatedMasterDetailRelationshipsPage extends MasterDetailRelationshipsPageBase<IFederationDataSourceWizardState, IFederationDataSourceWizardState> {
	    private _options;
	    private _federationDataSource;
	    protected _restoreDataSource(state: IFederationDataSourceWizardState): void;
	    protected _dataSource(): IDataSourceBase;
	    constructor(federationDataSourceResultSchema: (dataSource: FederationDataSource) => JQueryPromise<{
	        resultSchemaJSON: string;
	    }>, _options: _MultiQueryDataSourceWizardOptions);
	    commit(): JQuery.Promise<IFederationDataSourceWizardState, any, any>;
	    _customResetOptions: () => undefined;
	    _relationsEditor: ko.Observable<MasterDetailEditor>;
	}
	export function _registerFederatedMasterDetailRelationshipsPage(factory: PageFactory, federationDataSourceResultSchema: (dataSource: FederationDataSource) => JQueryPromise<{
	    resultSchemaJSON: string;
	}>, wizardOptions: _MultiQueryDataSourceWizardOptions): void;

	/// <reference types="jquery" />












	export class FederatedQueryConfigurePage extends WizardPageBase<IFederationDataSourceWizardState, IFederationDataSourceWizardState> {
	    private _options;
	    private _selectedPath;
	    private _itemsProvider;
	    private _customQueries;
	    private _setQueryChecked;
	    private _wrapFieldListCallback;
	    constructor(_options: _MultiQueryDataSourceWizardOptions);
	    canNext(): boolean;
	    canFinish(): boolean;
	    _createTreeListFactory(): MultiQueryTreeListItemFactory;
	    _loadPanelViewModel(element: HTMLElement): {
	        animation: any;
	        message: any;
	        visible: any;
	        shading: any;
	        shadingColor: any;
	        position: any;
	        container: any;
	    };
	    commit(): JQuery.Promise<IFederationDataSourceWizardState>;
	    initialize(state: ISqlDataSourceWizardState): JQuery.Promise<ISqlQueryViewModel>;
	    _queriesPopupHelper: FederatedQueriesHelper;
	    _fieldListProvider: FieldListProvider;
	    _getItemsAfterCheck: (node: TreeNode) => any;
	    _dataSources: ko.ObservableArray<IDataSourceInfo>;
	    _dataSource: FederationDataSource;
	    _scrollViewHeight: string;
	    _fieldListModel: ko.Observable<ITreeListOptions>;
	    _isDataLoadingInProcess: ko.Observable<boolean>;
	    _customizeDBSchemaTreeListActions: (item: IDataMemberInfo, actions: IAction[]) => void;
	}
	export function _registerFederatedQueryConfigurePage(factory: PageFactory, wizardOptions: _MultiQueryDataSourceWizardOptions): void;

	/// <reference types="jquery" />





	export class ConfigureMasterDetailRelationshipsPage extends MasterDetailRelationshipsPageBase<ISqlDataSourceWizardState, ISqlDataSourceWizardState> {
	    private _sqlDataSourceWrapper;
	    protected _restoreDataSource(state: ISqlDataSourceWizardState): void;
	    protected _dataSource(): IDataSourceBase;
	    commit(): JQueryPromise<ISqlDataSourceWizardState>;
	    _customResetOptions: () => undefined;
	    _relationsEditor: ko.Observable<MasterDetailEditor>;
	}
	export function _registerConfigureMasterDetailRelationshipsPage(factory: PageFactory, sqlDataSourceResultSchema: (dataSource: SqlDataSource, queryName?: string, relationsEditing?: boolean) => JQueryPromise<{
	    resultSchemaJSON: string;
	    connectionParameters?: string;
	}>): void;

	/// <reference types="jquery" />
	/// <reference types="jqueryui" />













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
	            of: any;
	        };
	        container: any;
	    };
	    _setTableQuery(query: TableQuery, isInProcess?: ko.Observable<boolean>): JQueryPromise<ISelectStatementResponse>;
	    _setCustomSqlQuery(query: CustomSqlQuery): void;
	    _createTreeListFactory(): MultiQueryTreeListItemFactory;
	    _showQbCallBack: (name?: any, isCustomQuery?: boolean) => void;
	    commit(): JQueryPromise<ISqlDataSourceWizardState>;
	    initialize(state: ISqlDataSourceWizardState): JQueryPromise<any>;
	    _popupSelectStatement: {
	        isVisible: ko.Observable<boolean>;
	        title: () => string;
	        query: any;
	        data: ko.Observable<any>;
	        okButtonText: () => string;
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
	        aceAvailable: any;
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
	        closest(element: HTMLElement, parentSelector: string): JQuery;
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

	/// <reference types="jquery" />








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
	    initialize(state: ISqlDataSourceWizardState): JQueryPromise<any>;
	    commit(): JQueryPromise<ISqlDataSourceWizardState>;
	    _scrollViewHeight: string;
	    _fieldListModel: ko.Observable<ITreeListOptions>;
	    _removeButtonTitle: any;
	    _parametersEditorOptions: ICollectionEditorOptions;
	}
	export function _registerMultiQueryConfigureParametersPage(factory: PageFactory, requestWrapper?: RequestWrapper, parametersConverter?: IParametersViewModelConverter): void;

	/// <reference types="jquery" />






	export class ChooseObjectDataSourceDataMembersPage extends WizardPageBase<IObjectDataSourceWizardState, IObjectDataSourceWizardState> {
	    private _requestWrapper;
	    constructor(_requestWrapper?: RequestWrapper);
	    private _objectDataSource;
	    private _type;
	    private _ctor;
	    _chooseObjectDataMember: ChooseObjectDataMembers;
	    initialize(state: IObjectDataSourceWizardState): JQueryPromise<any>;
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQueryPromise<IObjectDataSourceWizardState>;
	    private get _selectedDataMember();
	    private get _needParametersPage();
	}
	export function _registerChooseObjectDataSourceDataMembersPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): void;

	/// <reference types="jquery" />






	export class ChooseObjectDataSourceTypesPage extends WizardPageBase<IObjectDataSourceWizardState, IObjectDataSourceWizardState> {
	    private _requestWrapper;
	    constructor(_requestWrapper?: RequestWrapper);
	    private _objectDataSource;
	    private _types;
	    private _provider;
	    _chooseObjectType: ChooseObjectTypes;
	    canNext(): boolean;
	    canFinish(): boolean;
	    commit(): JQueryPromise<IObjectDataSourceWizardState>;
	    initialize(state: IObjectDataSourceWizardState): JQueryPromise<any>;
	    private get _selectedTypeName();
	}
	export function _registerChooseObjectDataSourceTypesPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): void;








	export class _MultiQueryDataSourceWizardOptions extends _DataSourceWizardOptionsBase<IMultiQueryDataSourceWizardCallbacks> {
	}
	export class MultiQueryDataSourceWizard extends PopupWizard {
	    private _wizardOptions;
	    constructor(pageFactory: PageFactory, _wizardOptions: _MultiQueryDataSourceWizardOptions);
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

	/// <reference types="jquery" />









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

	/// <reference types="jquery" />





	export class FullscreenWizard extends PopupWizard {
	    private _onCloseCallback;
	    constructor(pageFactory: FullscreenWizardPageFactory, finishCallback?: any);
	    _onClose(callback: any): void;
	    onFinish(): void;
	    _initPage(page: any): JQueryPromise<any>;
	    _onResetPage(page: _WrappedWizardPage): void;
	    start(finishCallback?: (model: any) => JQueryPromise<boolean>): void;
	    _pageDescription(): string;
	    _description(): string;
	    navigationPanel: ko.Observable<WizardNavigationPanel>;
	    _steps: FullscreenWizardPage[];
	    _extendCssClass: string;
	    pageFactory: FullscreenWizardPageFactory;
	}





	export class SelectDataSourcePage extends FullscreenWizardPage {
	    private wizardOptions;
	    private dataSources;
	    constructor(wizardOptions: _DataSourceWizardOptions, dataSources: IDataSourceInfo[]);
	    registerSections(): void;
	    showPredefinedDataSourceSection(): boolean;
	    showChooseDataSourceTypeSection(): boolean;
	    getNextSectionId(sectionId: string): string;
	    disabledSectionText: any;
	}
	export function _registerSelectDataSourcePage(factory: FullscreenWizardPageFactory, wizardOptions: _DataSourceWizardOptions): void;




	export class SpecifyFederationDataSourceSettingsPage extends FullscreenWizardPage {
	    protected _dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions;
	    constructor(_dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions);
	    getNextSectionId(sectionId: string): string;
	    _showPageDescription(): boolean;
	    registerSections(): void;
	}
	export function _registerSpecifyFederationDataSourceSettingsPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions): void;

	/// <reference types="jquery" />








	export class SpecifyJsonConnectionPage extends ChooseJsonConnectionPage {
	    private _requestWrapper;
	    constructor(connections: any, allowCreateNewJsonConnection: any, itemsProvider?: IItemsProvider, _requestWrapper?: RequestWrapper, _getJsonConnectionsCallback?: () => JQueryPromise<IConnectionStringDefinition[]>);
	    commit(): JQuery.Promise<IJsonDataSourceWizardState, any, any>;
	    canNext(): boolean;
	    initialize(state: any): JQuery.Promise<IWizardPage, any, any>;
	    _specifySourceData: ChooseJsonSourcePage;
	}
	export function _registerSpecifyJsonConnectionPage(factory: PageFactory, connections: ko.ObservableArray<any>, allowCreateNewJsonConnection: boolean, getItemsProviderCallBack: () => IItemsProvider, getJsonConnectionsCallback?: () => JQueryPromise<IConnectionStringDefinition[]>): void;




	export class SpecifyJsonDataSourceSettingsPage extends FullscreenWizardPage {
	    private _dataSourceWizardOptions;
	    constructor(_dataSourceWizardOptions: _DataSourceWizardOptions);
	    registerSections(): void;
	    getNextSectionId(sectionId: string): string;
	    canNext(): boolean;
	}
	export function _registerSpecifyJsonDataSourceSettingsPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _DataSourceWizardOptions): void;




	export class SpecifySqlDataSourceSettingsPage extends FullscreenWizardPage {
	    private _dataSourceWizardOptions;
	    constructor(_dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions);
	    getNextSectionId(sectionId: string): string | any[];
	    registerSections(): void;
	}
	export function _registerSpecifySqlDataSourceSettingsPage(factory: FullscreenWizardPageFactory, dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions): void;










	export class FullscreenDataSourceWizard extends FullscreenWizard {
	    private _dataSourceWizardOptions;
	    constructor(factory: FullscreenWizardPageFactory, _dataSourceWizardOptions: _DataSourceWizardOptions);
	    initialize(state: IDataSourceWizardState, createIterator?: (pageFactory: PageFactory, stateManager: StateManager) => PageIterator): void;
	    canRunWizard(): boolean;
	    _description(): string;
	}
	export class FullscreenDataSourceWizardPageIterator extends PageIterator {
	    private _dataSourceOptions;
	    constructor(factory: PageFactory, stateManager: StateManager, _dataSourceOptions: _DataSourceWizardOptions, onResetPage: (page: _WrappedWizardPage) => void);
	    private _shouldSelectDataSource;
	    getNextPageId(pageId?: string): string;
	}
	export function _createDataSourceFullscreenWizard(dataSourceWizardOptions: _MultiQueryDataSourceWizardOptions): FullscreenDataSourceWizard;

}
declare module DevExpress.Analytics.Wizard.Internal {
    import SqlDataConnection = DevExpress.Analytics.Data.SqlDataConnection;
    import ISelectStatementResponse = DevExpress.QueryBuilder.Utils.ISelectStatementResponse;
    import TableQuery = DevExpress.Analytics.Data.TableQuery;
    import ISqlQueryViewModel = DevExpress.QueryBuilder.Utils.ISqlQueryViewModel;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import SelectQuerySqlTextProvider = DevExpress.Analytics.Wizard.Internal.SelectQuerySqlTextProvider;
    import ISqlQueryControl = DevExpress.Analytics.Wizard.Internal.ISqlQueryControl;
    import StoredProcQuery = DevExpress.Analytics.Data.StoredProcQuery;
    import DBStoredProcedure = DevExpress.Analytics.Data.DBStoredProcedure;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import TreeNode = DevExpress.Analytics.Wizard.Internal.TreeNode;
    import ParameterTreeNode = DevExpress.Analytics.Wizard.Internal.ParameterTreeNode;
    import QueriesTreeNode = DevExpress.Analytics.Wizard.Internal.QueriesTreeNode;
    import TreeNodeBase = DevExpress.Analytics.Wizard.Internal.TreeNodeBase;
    import IDBSchemaProvider = DevExpress.Analytics.Data.IDBSchemaProvider;
    import IPathRequest = DevExpress.Analytics.Utils.IPathRequest;
    import IAction = DevExpress.Analytics.Utils.IAction;
    import DataSourceParameter = DevExpress.Analytics.Data.DataSourceParameter;
    import DBStoredProcedureArgument = DevExpress.Analytics.Data.DBStoredProcedureArgument;
    import IAddQueriesTreeListCallbacks = DevExpress.Analytics.Wizard.Internal.IAddQueriesTreeListCallbacks;
    import IPopoverListOptions = DevExpress.Analytics.Wizard.Internal.IPopoverListOptions;
    import DataMemberTreeNode = DevExpress.Analytics.Wizard.Internal.DataMemberTreeNode;
    import FieldTreeNode = DevExpress.Analytics.Wizard.Internal.FieldTreeNode;
    import FieldListProvider = DevExpress.Analytics.Internal.FieldListProvider;
    import TreeNodeItemsProvider = DevExpress.Analytics.Wizard.Internal.TreeNodeItemsProvider;
    import Editor = DevExpress.Analytics.Widgets.Editor;
    import ISerializationInfo = DevExpress.Analytics.Utils.ISerializationInfo;
    import IJsonDataSourceJsonSourceValidatable = DevExpress.Analytics.Wizard.IJsonDataSourceJsonSourceValidatable;
    import IJsonDataSourceJsonSourcePageSettings = DevExpress.Analytics.Wizard.IJsonDataSourceJsonSourcePageSettings;
    import ObjectProperties = DevExpress.Analytics.Widgets.ObjectProperties;
    import JsonDataSource = DevExpress.Analytics.Data.JsonDataSource;
    import ISerializationInfoArray = DevExpress.Analytics.Utils.ISerializationInfoArray;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;
    import JsonParameter = DevExpress.Analytics.Data.JsonParameter;
    import IModelAction = DevExpress.Analytics.Internal.IModelAction;
    import IModelActionProvider = DevExpress.Analytics.Internal.IModelActionProvider;
    import IExpressionOptions = DevExpress.Analytics.Widgets.IExpressionOptions;
    import ObjectCtor = DevExpress.Analytics.Data.ObjectCtor;
    import ObjectDataMember = DevExpress.Analytics.Data.ObjectDataMember;
    import ObjectDataSourceMethodBase = DevExpress.Analytics.Data.ObjectDataSourceMethodBase;
    import ObjectParameter = DevExpress.Analytics.Data.ObjectParameter;
    import ILocalizationInfo = DevExpress.Analytics.Internal.ILocalizationInfo;
    import ISerializableModel = DevExpress.Analytics.Utils.ISerializableModel;
    import UndoEngine = DevExpress.Analytics.Utils.UndoEngine;
    import IQueryBuilderOptions = DevExpress.Querybuilder.IQueryBuilderOptions;
    import IDataSourceBase = DevExpress.Analytics.Data.IDataSourceBase;
    import IDataSourceDBSchema = DevExpress.Analytics.Data.IDataSourceDBSchema;
    import SqlDataSource = DevExpress.Analytics.Data.SqlDataSource;
    import DbObjectDragDropHandler = DevExpress.QueryBuilder.Internal.DbObjectDragDropHandler;
    import QueryViewModel = DevExpress.QueryBuilder.Elements.QueryViewModel;
    import IRetrieveQuerySqlCallback = DevExpress.Analytics.Wizard.IRetrieveQuerySqlCallback;
    import IWizardPage = DevExpress.Analytics.Wizard.IWizardPage;
    import _WrappedWizardPage = DevExpress.Analytics.Wizard._WrappedWizardPage;
    import IWizardPageSectionMetadata = DevExpress.Analytics.Wizard.IWizardPageSectionMetadata;
    import PageFactory = DevExpress.Analytics.Wizard.PageFactory;
    import WrappedWizardPageSection = DevExpress.Analytics.Wizard.Internal.WrappedWizardPageSection;
    import WizardPageSectionFactory = DevExpress.Analytics.Wizard.Internal.WizardPageSectionFactory;
    import StateManager = DevExpress.Analytics.Wizard.StateManager;
    import WizardPageSectionIterator = DevExpress.Analytics.Wizard.Internal.WizardPageSectionIterator;
    import WizardPageSection = DevExpress.Analytics.Wizard.Internal.WizardPageSection;
    import EventManager = DevExpress.Analytics.Utils.EventManager;
    import IWizardEvents = DevExpress.Analytics.Wizard.IWizardEvents;
    import IDataSourceWizardState = DevExpress.Analytics.Wizard.IDataSourceWizardState;
    import IDataSourceInfo = DevExpress.Analytics.Internal.IDataSourceInfo;
    import DefaultTreeListItemFactory = DevExpress.Analytics.Widgets.Internal.DefaultTreeListItemFactory;
    import TreeListItemViewModel = DevExpress.Analytics.Widgets.Internal.TreeListItemViewModel;
    import FederationDataSource = DevExpress.Analytics.Data.FederationDataSource;
    import _DataSourceWizardOptions = DevExpress.Analytics.Wizard._DataSourceWizardOptions;
    import BaseWizard = DevExpress.Analytics.Wizard.BaseWizard;
    import IBeforeWizardPageInitializeEventArgs = DevExpress.Analytics.Wizard.IBeforeWizardPageInitializeEventArgs;
    import IWizardPageEventArgs = DevExpress.Analytics.Wizard.IWizardPageEventArgs;
    import WizardPageProcessor = DevExpress.Analytics.Wizard.Internal.WizardPageProcessor;
    import WizardDragDropHandler = DevExpress.Analytics.Internal.WizardDragDropHandler;
    import PopupEditorBase = DevExpress.Analytics.Widgets.Internal.PopupEditorBase;
    import ResizeHelper = DevExpress.Analytics.Widgets.Internal.ResizeHelper;
    import ITreeListOptions = DevExpress.Analytics.Widgets.Internal.ITreeListOptions;
    import getParentContainer = DevExpress.Analytics.Internal.getParentContainer;
    import IFederationQuery = DevExpress.QueryBuilder.Utils.IFederationQuery;
    import FederationTableViewModel = DevExpress.QueryBuilder.Internal.FederationTableViewModel;
    import SelectQuery = DevExpress.Analytics.Data.SelectQuery;
    import IQueryBuilderSurfaceCreator = DevExpress.QueryBuilder.Internal.IQueryBuilderSurfaceCreator;
    import FederationQueryBuilderPopupBase = DevExpress.Analytics.Wizard.Internal.FederationQueryBuilderPopupBase;
    import TransformQuery = DevExpress.Analytics.Data.TransformQuery;
    import UnionQuery = DevExpress.Analytics.Data.UnionQuery;
    import ObjectType = DevExpress.Analytics.Data.ObjectType;
    import TreeListController = DevExpress.Analytics.Widgets.Internal.TreeListController;
    import ObjectSchemaProvider = DevExpress.Analytics.Wizard.Internal.ObjectSchemaProvider;
    import IItemsExtender = DevExpress.Analytics.Internal.IItemsExtender;
    import PathRequest = DevExpress.Analytics.Utils.PathRequest;
    import IFederationQueryBuilderCallbacks = DevExpress.Analytics.Wizard.Internal.IFederationQueryBuilderCallbacks;
	/// <reference types="jquery" />



	export class SelectQuerySqlTextProvider {
	    private _selectStatementCallback;
	    private _connection;
	    constructor(_selectStatementCallback: (connection: SqlDataConnection, queryJSON: string) => JQueryPromise<ISelectStatementResponse>, _connection: () => SqlDataConnection);
	    getQuerySqlText(newQuery: TableQuery): JQueryPromise<ISelectStatementResponse>;
	}

	/// <reference types="jquery" />




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
	    aceAvailable: any;
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
	    get runQueryBuilderDisabled(): boolean;
	    disableCustomSql: () => boolean;
	}

	/// <reference types="jquery" />




	export class StoredProceduresQueryControl extends Disposable implements ISqlQueryControl {
	    private _query;
	    private _needToProcessParameters;
	    private static _availableConvertToParameter;
	    private get _selectedProcedure();
	    private set _selectedProcedure(value);
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
	    get runQueryBuilderDisabled(): boolean;
	}

	/// <reference types="jquery" />







	export interface IAddQueriesTreeListCallbacks {
	    deleteAction?: (name: string) => any;
	    showQbCallBack?: (name?: string, isCustomQuery?: boolean) => any;
	    disableCustomSql?: boolean;
	}
	export class DBSchemaItemsProvider extends Disposable implements IItemsProvider {
	    private _callBack;
	    private _tables;
	    private _views;
	    private _procedures;
	    private _queries;
	    private _customQueries;
	    private _rootItems;
	    constructor(dbSchemaProvider: IDBSchemaProvider, customQueries: ko.ObservableArray<TableQuery>, showQbCallBack: any, disableCustomSql: any, afterCheckToggled: (node: TreeNodeBase) => void);
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
	    path: string;
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
	export class QueriesTreeNode extends ParameterTreeNode implements IPopoverListOptions {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, callbacks?: ko.Observable<IAddQueriesTreeListCallbacks>, afterCheckToggled?: (node: TreeNodeBase) => void);
	    addAction: {
	        clickAction: (item: any) => any;
	        imageClassName: string;
	        imageTemplateName: string;
	        templateName: string;
	        text: any;
	    };
	    getActions(context: any): IAction[];
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
	    target: any;
	    className: string;
	    popoverVisible: ko.Observable<boolean>;
	    disableCustomSql: () => boolean;
	    selectionDisabled: ko.PureComputed<boolean>;
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
	    getActions(context: any): IAction[];
	    editQuery: any;
	    removeQuery: any;
	    parameters: ko.Observable<DataSourceParameter[]>;
	}
	export class FieldTreeNode extends TreeNodeBase {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, path: string, afterCheckToggled?: (node: TreeNodeBase) => void, isDraggable?: boolean);
	    visible: ko.Observable<boolean>;
	    isComplex: boolean;
	    dragData: any;
	    disabled: ko.Observable<boolean>;
	}
	export class DataMemberTreeNode extends TreeNode {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, path: string, afterCheckToggled?: (node: DataMemberTreeNode) => void);
	    setChecked(value: boolean): void;
	    visible: ko.Observable<boolean>;
	    children: ko.ObservableArray<DataMemberTreeNode | FieldTreeNode>;
	    isComplex: boolean;
	}
	export class SingleCheckedDataMemberTreeNode extends DataMemberTreeNode {
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, path: string, afterCheckToggled?: (node: DataMemberTreeNode) => void);
	    _checked: ko.Observable<boolean>;
	    children: ko.ObservableArray<FieldTreeNode>;
	}

	/// <reference types="jquery" />





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
	    isList(dataMember: IDataMemberInfo, parentNode: DataMemberTreeNode): boolean;
	}






	export class JsonTreeNodeItemsProvider extends TreeNodeItemsProvider implements IItemsProvider {
	    constructor(fieldListProvider: FieldListProvider, rootItems: ko.ObservableArray<IDataMemberInfo>, generateTreeNode: (item: IDataMemberInfo, isChecked: boolean, path: string) => DataMemberTreeNode, generateTreeLeafNode: (item: IDataMemberInfo, isChecked: boolean, path: string) => FieldTreeNode);
	    protected _getDefaultTreeNodeCheckState(item: IDataMemberInfo): boolean;
	    getNodeByPath(pathRequest: IPathRequest): DataMemberTreeNode;
	}



	export function getLocalizedValidationErrorMessage(emptyValueErrorMessage: string, localizedPropertyName?: string, subProperty?: string): any;
	export class JsonStringEditor extends Editor {
	    constructor(modelPropertyInfo: ISerializationInfo, level: any, parentDisabled: any, textToSearch: any);
	    uploadFile(e: any): void;
	    getUploadTitle(): any;
	    aceEditorHasErrors: ko.Observable<boolean>;
	    aceAvailable: any;
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








	export class ObjectDataSourceParameterProperty extends Disposable {
	    private _parameter;
	    private _itemsProvider;
	    switchPropertyType(): void;
	    isExpression(): boolean;
	    private _generateInfo;
	    private _initGetInfo;
	    private _isDateTimeParamerterType;
	    private _patchOriginalParameterValue;
	    private _afterInitialize;
	    private _subscribeProperties;
	    isPropertyVisible(propertyName: string): boolean;
	    constructor(_parameter: ObjectParameter, _itemsProvider: IItemsProvider);
	    actions: IModelAction[];
	    actionProviders: IModelActionProvider[];
	    reset: () => void;
	    getInfo: () => ISerializationInfoArray;
	    type: ko.Observable<string>;
	    value: ko.Observable<any>;
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













	export abstract class QueryBuilderPopupBase extends Disposable {
	    customizeQBInitializationData: (options: IQueryBuilderOptions) => IQueryBuilderOptions;
	    protected _rtl: boolean;
	    protected _querySource: ko.Observable | ko.Computed;
	    protected _dbSchemaProvider: ko.Observable<IDBSchemaProvider> | ko.Computed<IDBSchemaProvider>;
	    protected _dataSource: IDataSourceDBSchema;
	    protected _applyQuery: any;
	    constructor(applyNewQuery: any, rtl?: boolean, customizeQBInitializationData?: (options: IQueryBuilderOptions) => IQueryBuilderOptions);
	    designer: ko.Observable<{
	        model: ko.Observable<QueryViewModel> | ko.Computed<QueryViewModel>;
	        updateSurface: () => void;
	        showPreview: () => void;
	        dataPreview: any;
	        fieldDragHandler: DbObjectDragDropHandler;
	        undoEngine: ko.Observable<UndoEngine> | ko.Computed<UndoEngine>;
	    }>;
	    qbOptions: ko.Observable<IQueryBuilderOptions>;
	    okButtonDisabled: ko.PureComputed<boolean>;
	    isVisible: ko.Observable<boolean>;
	    showLoadIndicator: ko.Observable<boolean>;
	    static customizeQueryBuilderActions: (sender: any, args: {
	        Actions: IAction[];
	    }) => void;
	    show(query: any, dataSource: IDataSourceDBSchema): void;
	    cancelHandler(): void;
	    previewHandler(): void;
	    okHandler(): void;
	    abstract createQuery(): ISerializableModel;
	    abstract getDataSource(): IDataSourceBase;
	    onHiddingHandler(): void;
	    popupViewModel(element: HTMLElement): {
	        visible: ko.Observable<boolean>;
	        title: any;
	        showTitle: boolean;
	        shading: boolean;
	        fullScreen: boolean;
	        width: string;
	        height: string;
	        container: any;
	        wrapperAttr: {
	            class: string;
	        };
	        position: {
	            of: any;
	        };
	        onHidding: () => void;
	    };
	    getDisplayText(key: any): any;
	    localizationIdMap: {
	        [key: string]: ILocalizationInfo;
	    };
	}
	export class QueryBuilderPopup extends QueryBuilderPopupBase {
	    customizeQBInitializationData: (options: IQueryBuilderOptions) => IQueryBuilderOptions;
	    protected _applyQuery: IRetrieveQuerySqlCallback;
	    constructor(applyNewQuery: IRetrieveQuerySqlCallback, rtl?: boolean, customizeQBInitializationData?: (options: IQueryBuilderOptions) => IQueryBuilderOptions);
	    getDataSource(): SqlDataSource;
	    createQuery(): TableQuery;
	}




	export class WrappedWizardPageSection extends _WrappedWizardPage {
	    pageId: string;
	    page: IWizardPage;
	    onChange: (callback: () => void) => void;
	    constructor(pageId: string, page: IWizardPage, metadata: IWizardPageSectionMetadata<IWizardPage>);
	}




	export class WizardPageSectionFactory extends PageFactory {
	    registerMetadata<T extends IWizardPage>(pageId: string, metadata: IWizardPageSectionMetadata<T>): void;
	    metadata: {
	        [key: string]: IWizardPageSectionMetadata<IWizardPage>;
	    };
	}

	/// <reference types="jquery" />






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

	/// <reference types="jquery" />








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

	/// <reference types="jquery" />















	export interface IParameter {
	    name: string;
	    value: any;
	}
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
	    fieldListsCallback?: (request: IPathRequest, dataSource?: IDataSourceInfo) => JQueryPromise<IDataMemberInfo[]>;
	}
	export interface IPopoverListOptions {
	    showPopover: () => void;
	    target?: string;
	    popoverListItems: () => any[];
	    className?: string;
	    popoverVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    position?: any;
	    popupContainer?: string;
	}
	export class CustomQueryTreeListItem extends TreeListItemViewModel {
	    dispose(): void;
	    protected _getTemplateName(): string;
	    protected _getCustomizedTemplateName(isEditable: boolean): string;
	    queryName: ko.Computed<string>;
	    editingMode: ko.Observable<boolean>;
	}
	export class MultiQueryTreeListItemFactory extends DefaultTreeListItemFactory {
	    createItem(options: any, path?: string[], onItemsVisibilityChanged?: any, rtl?: any, resolver?: any): TreeListItemViewModel;
	}
	export interface IMultiQueryDataSourceWizardCallbacks extends IDataSourceWizardCallbacks {
	    sqlDataSourceResultSchema?: (dataSource: SqlDataSource) => JQueryPromise<{
	        resultSchemaJSON: string;
	        connectionParameters?: string;
	    }>;
	    federationDataSourceResultSchema?: (dataSource: FederationDataSource) => JQueryPromise<{
	        resultSchemaJSON: string;
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
	export function _isMoreThanOneDataSourceTypeAvailable(dataSourceOptions: _DataSourceWizardOptions): boolean;



	export interface IFederationQueryBuilderCallbacks {
	    joinCallBack?: (name?: string) => any;
	    unionCallBack?: (name?: string) => any;
	    transformCallBack?: (name?: string) => any;
	}
	export interface IFederationAddQueriesTreeListCallbacks extends IAddQueriesTreeListCallbacks {
	    showQbCallBacks: IFederationQueryBuilderCallbacks;
	}
	export class FederatedQueriesTreeNode extends QueriesTreeNode {
	    callbacks?: ko.Observable<IFederationAddQueriesTreeListCallbacks>;
	    constructor(name: string, displayName: string, specifics: string, isChecked: boolean, callbacks?: ko.Observable<IFederationAddQueriesTreeListCallbacks>, afterCheckToggled?: (node: TreeNodeBase) => void);
	    addAction: {
	        clickAction: () => void;
	        imageClassName: string;
	        imageTemplateName: string;
	        templateName: string;
	        text: any;
	    };
	    getActions(context: {
	        path: string;
	    }): Array<any>;
	    popoverListItems(): Array<any>;
	    className: string;
	}








	export class FederationQueryBuilderPopupBase extends PopupEditorBase {
	    onSaveCallback: (query: IFederationQuery) => void;
	    protected _dataSource: FederationDataSource;
	    rtl: boolean;
	    onCloseCallback?: () => void;
	    protected _aliasValidationRule: {
	        type: string;
	        validationCallback: (options: any) => void;
	        readonly message: any;
	    };
	    protected _aliasValidationCallback(alias: string, data: {
	        key: string;
	        alias: string;
	    }): boolean;
	    constructor(onSaveCallback: (query: IFederationQuery) => void, _dataSource: FederationDataSource, rtl?: boolean, onCloseCallback?: () => void);
	    dispose(): void;
	    addDataMember(item: TreeListItemViewModel, position?: {
	        left: number;
	        top: number;
	    }): void;
	    save(): void;
	    close(): void;
	    popupTarget(): string;
	    onHiding(): void;
	    selectedPath: ko.Observable<string>;
	    dragDropHandler: WizardDragDropHandler;
	    fieldListModel: ITreeListOptions;
	    title: () => string;
	    getPopupContainer: typeof getParentContainer;
	    loaded: ko.Observable<boolean>;
	    maxHeight: string;
	    width: string;
	    height: string;
	    cssClass: string;
	    resultGridHeight: ko.Observable<number>;
	    resizeHelper: ResizeHelper;
	}

	/// <reference types="jquery" />


	export class FederationTablesExpressionFieldListProvider implements IItemsProvider {
	    private provider;
	    private tables;
	    getItems(pathRequest: any): JQuery.Promise<IDataMemberInfo[], any, any>;
	    constructor(provider: IItemsProvider, tables: ko.ObservableArray<FederationTableViewModel>);
	}







	export interface IFederationSelectQBGridAllColumns {
	    column: string;
	    table: string;
	    key: string;
	}
	export interface IFederationSelectQBGridColumnsExpressions extends IFederationSelectQBGridAllColumns {
	    alias: string;
	    index: number;
	    isExpression: ko.Observable<boolean>;
	    expression: ko.Observable<string> | ko.Computed<string>;
	}
	export class FederationSelectQueryBuilderPopup extends FederationQueryBuilderPopupBase {
	    private _qbOptions;
	    private _bindingContext;
	    private _gridComponent;
	    private _onContentReady;
	    private _getQuery;
	    private _afterChangeColumn;
	    private _changeColumn;
	    private _switchEditors;
	    private _deleteRow;
	    private _onRowUpdating;
	    protected _aliasValidationCallback(alias: string, data: {
	        key: string;
	        alias: string;
	    }): boolean;
	    dispose(): void;
	    private _generateKey;
	    private _isSelectAllItemByKey;
	    constructor(onSaveCallback: (query: SelectQuery) => void, dataSource: FederationDataSource, rtl?: boolean, onCloseCallback?: () => void);
	    save(): void;
	    addRow(): void;
	    canSave(): boolean;
	    addDataMember(item: TreeListItemViewModel, position?: {
	        left: number;
	        top: number;
	    }): void;
	    show(query: SelectQuery): void;
	    popupTarget(): string;
	    gridResizeHelper: ResizeHelper;
	    columnsGrid: any;
	    addRowDisabled: ko.PureComputed<boolean>;
	    popupContentTemplate: string;
	    columnsExpressions: ko.PureComputed<IFederationSelectQBGridColumnsExpressions[]>;
	    allColumns: ko.PureComputed<IFederationSelectQBGridAllColumns[]>;
	    queryBuilderSurfaceCreator: IQueryBuilderSurfaceCreator;
	    _querySource: ko.Observable<any>;
	    designer: ko.Observable<any>;
	    joinResultCollapsed: ko.Observable<boolean>;
	    selectQuery: SelectQuery;
	    width: string;
	    height: string;
	    cssClass: string;
	}

	/// <reference types="jquery" />


	export class TransformResultSchemaProvider implements IItemsProvider {
	    constructor(itemsProvider: IItemsProvider, transformData: ko.Observable<any[]>, currentPath: ko.Observable<string>);
	    dispose: () => void;
	    getItems: (path: IPathRequest) => JQueryPromise<IDataMemberInfo[]>;
	}





	export class FederationTransformQueryBuilderPopup extends FederationQueryBuilderPopupBase {
	    private _updateColumns;
	    protected _aliasValidationCallback(alias: string, data: {
	        alias: string;
	        key: string;
	    }): boolean;
	    constructor(onSaveCallback: (query: TransformQuery) => void, dataSource: FederationDataSource, rtl?: boolean, onCloseCallback?: () => void);
	    dispose(): void;
	    addDataMember(item: TreeListItemViewModel): void;
	    updateColumns(): void;
	    canSave(): boolean;
	    save(): void;
	    onHiding(): void;
	    show(query: TransformQuery): void;
	    transformGrid: any;
	    transformGridTitle: ko.Observable<string>;
	    transformResultGridTitle: ko.Observable<string>;
	    transformResultCollapsed: ko.Observable<boolean>;
	    transformSources: ko.Observable<any[]>;
	    resultFieldListModel: ko.Observable<ITreeListOptions>;
	    currentPath: ko.Observable<string>;
	    transformQuery: ko.Observable<TransformQuery>;
	    popupContentTemplate: string;
	}





	export class FederationUnionQueryBuilderPopup extends FederationQueryBuilderPopupBase {
	    protected _aliasValidationCallback(alias: string, data: {
	        alias: string;
	        key: string;
	    }): boolean;
	    constructor(onSaveCallback: (query: UnionQuery) => void, dataSource: FederationDataSource, rtl?: boolean, onCloseCallback?: () => void);
	    dispose(): void;
	    addDataMember(item: TreeListItemViewModel): void;
	    canSave(): boolean;
	    save(): void;
	    onHiding(): void;
	    show(query: UnionQuery): void;
	    aliasGrid: any;
	    sourcesGrid: any;
	    unionQuery: ko.Observable<UnionQuery>;
	    unionAll: ko.Observable<boolean>;
	    columns: ko.ObservableArray<any>;
	    popupContentTemplate: string;
	}

	/// <reference types="jquery" />





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



	export class ChooseObjectDataMembers extends Disposable {
	    constructor(type: ko.Observable<ObjectType>, ctor: ko.Observable<ObjectCtor>);
	    private coerceSelection;
	    dataMembers: ko.ObservableArray<ObjectDataMember>;
	    selectedDataMembers: ko.ObservableArray<ObjectDataMember>;
	}




	export class FederationDataSourceItemsExtender implements IItemsExtender {
	    private _rootItems;
	    constructor(_rootItems: ko.ObservableArray<IDataSourceInfo>);
	    afterItemsFilled(request: PathRequest, items: IDataMemberInfo[]): void;
	    beforeItemsFilled(request: PathRequest, items: IDataMemberInfo[]): boolean;
	}







	export class FederationTreeNodeProvider extends TreeNodeItemsProvider {
	    constructor(fieldListProvider: FieldListProvider, rootItems: ko.ObservableArray<IDataMemberInfo>, callBacks: IFederationQueryBuilderCallbacks, customQueries: ko.ObservableArray<IFederationQuery>, afterCheckToggled: (node: TreeNodeBase) => void);
	    private _queries;
	    private _customQueries;
	    private _callBack;
	    isList(dataMember: IDataMemberInfo, parentNode: FederationDataMemberTreeNode): boolean;
	} class FederationDataMemberTreeNode extends DataMemberTreeNode {
	    constructor(name: string, displayName: string, specifics: string, isListType: boolean, isChecked: boolean, path: string, afterCheckToggled?: (node: DataMemberTreeNode) => void);
	    isListType: boolean;
	}
	export {};




	export class DBSchemaTreeListController extends TreeListController {
	    private _customizeDBSchemaTreeListActions;
	    constructor(_customizeDBSchemaTreeListActions: (item: IDataMemberInfo, actions: IAction[]) => void);
	    getActions(value: TreeListItemViewModel): IAction[];
	    canSelect(value: TreeListItemViewModel): boolean;
	}






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
	    get name(): string;
	    get displayName(): string;
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
	    }): IAction[];
	    canSelect(value: TreeListItemViewModel): boolean;
	}

	export class WizardAction {
	    constructor(handler: () => void, text: string);
	    isVisible: ko.Observable<boolean> | ko.Computed<boolean>;
	    isDisabled: ko.Observable<boolean> | ko.Computed<boolean>;
	    handler: () => void;
	    text: string;
	}

}
declare module DevExpress.Querybuilder {
    import IQueryBuilderModel = DevExpress.QueryBuilder.Internal.IQueryBuilderModel;
    import IDBSchemaProvider = DevExpress.Analytics.Data.IDBSchemaProvider;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import RequestWrapper = DevExpress.QueryBuilder.Utils.RequestWrapper;
    import IJSQueryBuilderCallbacks = DevExpress.QueryBuilder.Internal.IJSQueryBuilderCallbacks;
    import IJSDesignerBindingCommonOptions = DevExpress.Analytics.Internal.IJSDesignerBindingCommonOptions;
    import IDataSourceBase = DevExpress.Analytics.Data.IDataSourceBase;
    import DxAnalyticsComponentCommon = DevExpress.Analytics.Internal.DxAnalyticsComponentCommon;
    import JSDesignerBindingCommon = DevExpress.Analytics.Internal.JSDesignerBindingCommon;
    import JSQueryBuilder = DevExpress.Querybuilder.JSQueryBuilder;
    import IQueryBuilderOptions = DevExpress.Querybuilder.IQueryBuilderOptions;

	export class JSQueryBuilder {
	    private _queryBuilderModel;
	    get queryBuilderModel(): IQueryBuilderModel;
	    set queryBuilderModel(newVal: IQueryBuilderModel);
	    constructor(_queryBuilderModel: ko.Observable<IQueryBuilderModel>);
	    UpdateLocalization(localization: any): void;
	    GetQueryBuilderModel(): IQueryBuilderModel;
	    GetJsonQueryModel(): {
	        Query: any;
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







	export interface IQueryBuilderOptions extends IJSDesignerBindingCommonOptions {
	    queryBuilderModel?: ko.Observable<any>;
	    dataSourceJson?: string;
	    queryModelJson?: string;
	    querySource: ko.Observable<{}> | ko.Computed<{}>;
	    dbSchemaProvider?: ko.Observable<IDBSchemaProvider> | ko.Computed<IDBSchemaProvider>;
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
	    dataSource?: IDataSourceBase;
	    showPropertyGridCondition?: (editableObj: any) => boolean;
	}

	export class EventGenerator {
	    static generateQueryBuilderEvents(fireEvent: (eventName: any, args?: any) => void): {
	        publicName: string;
	        privateName: string;
	    }[];
	}

	/// <reference types="jquery" />




	export class JSQueryBuilderBinding extends JSDesignerBindingCommon<JSQueryBuilder, IQueryBuilderOptions> {
	    private options;
	    private _deferreds;
	    private _callbacks;
	    _templateHtml: string;
	    private _applyBindings;
	    private _initializeCallbacks;
	    _createModel(element: any): JQueryDeferred<IQueryBuilderModel>;
	    constructor(options: IQueryBuilderOptions, customEventRaiser?: any);
	    dispose(): void;
	    applyBindings(element: HTMLElement): void;
	}
	export class DxQueryBuilder extends DxAnalyticsComponentCommon<IQueryBuilderOptions> {
	    getBindingName(): string;
	}

}
declare module DevExpress.Analytics.Widgets.Filtering {
    import CriteriaOperator = DevExpress.Analytics.Criteria.CriteriaOperator;
    import Disposable = DevExpress.Analytics.Utils.Disposable;
    import FilterEditorHelper = DevExpress.Analytics.Widgets.FilterEditorHelper;
    import IItemsProvider = DevExpress.Analytics.Utils.IItemsProvider;
    import ICriteriaChangeOperator = DevExpress.Analytics.Criteria.Utils.ICriteriaChangeOperator;
    import CriteriaOperatorSurface = DevExpress.Analytics.Widgets.Filtering.CriteriaOperatorSurface;
    import UnaryOperator = DevExpress.Analytics.Criteria.UnaryOperator;
    import AggregateOperand = DevExpress.Analytics.Criteria.AggregateOperand;
    import BetweenOperator = DevExpress.Analytics.Criteria.BetweenOperator;
    import BinaryOperator = DevExpress.Analytics.Criteria.BinaryOperator;
    import IPropertyLocation = DevExpress.Analytics.Criteria.Utils.IPropertyLocation;
    import OperandSurfaceBase = DevExpress.Analytics.Widgets.Filtering.OperandSurfaceBase;
    import FunctionOperator = DevExpress.Analytics.Criteria.FunctionOperator;
    import GroupOperator = DevExpress.Analytics.Criteria.GroupOperator;
    import InOperator = DevExpress.Analytics.Criteria.InOperator;
    import OperandParameter = DevExpress.Analytics.Criteria.OperandParameter;
    import IDataMemberInfo = DevExpress.Analytics.Utils.IDataMemberInfo;
    import OperandProperty = DevExpress.Analytics.Criteria.OperandProperty;
    import DataSource = DevExpress.data.DataSource;
    import OperandValue = DevExpress.Analytics.Criteria.OperandValue;





	export class CriteriaOperatorSurface<T extends CriteriaOperator = CriteriaOperator> extends Disposable {
	    _createLeftPartProperty(value: any): CriteriaOperatorSurface<CriteriaOperator>;
	    createChildSurface(item: any, path?: any, actions?: any): CriteriaOperatorSurface<CriteriaOperator>;
	    protected getDisplayType(): string;
	    constructor(operator: T, parent: any, fieldListProvider: any, path: any);
	    specifics: ko.Observable<string> | ko.Computed<string>;
	    dataType: ko.Observable<string> | ko.Computed<string>;
	    get items(): Array<ICriteriaChangeOperator>;
	    get displayType(): string;
	    get leftPart(): CriteriaOperatorSurface<CriteriaOperator>;
	    get rightPart(): any;
	    get css(): string;
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




	export class UnaryOperandSurface extends CriteriaOperatorSurface<UnaryOperator> {
	    constructor(operator: UnaryOperator, parent: any, fieldListProvider?: any, path?: any);
	    get leftPart(): any;
	    get rightPart(): any;
	    createChildSurface(item: CriteriaOperator, path?: any, actions?: any): CriteriaOperatorSurface<CriteriaOperator>;
	    dispose(): void;
	    contentTemplateName: string;
	    operand: ko.Observable<any>;
	}




	export class AggregateOperandSurface extends CriteriaOperatorSurface<AggregateOperand> {
	    constructor(operator: AggregateOperand, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: any, path: any);
	    get leftPart(): any;
	    get rightPart(): any;
	    dispose(): void;
	    contentTemplateName: string;
	    property: ko.Observable<any>;
	    aggregatedExpression: ko.Observable<any>;
	    condition: ko.Observable<any>;
	}




	export class BetweenOperandSurface extends CriteriaOperatorSurface<BetweenOperator> {
	    constructor(operator: BetweenOperator, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: any, path: any);
	    get leftPart(): any;
	    get rightPart(): any[];
	    dispose(): void;
	    property: ko.Observable<any>;
	    end: ko.Observable<any>;
	    begin: ko.Observable<any>;
	    contentTemplateName: string;
	}




	export class BinaryOperandSurface extends CriteriaOperatorSurface<BinaryOperator> {
	    constructor(operator: BinaryOperator, parent: any, fieldListProvider: any, path: any);
	    get leftPart(): CriteriaOperatorSurface<CriteriaOperator>;
	    get rightPart(): any;
	    dispose(): void;
	    contentTemplateName: string;
	    leftOperand: ko.Observable<any>;
	    rightOperand: ko.Observable<any>;
	}




	export class OperandSurfaceBase<T extends CriteriaOperator> extends CriteriaOperatorSurface<T> {
	    getRealParent(parent: any): any;
	    getRealProperty(property: any): any;
	    getPropertyName(parent: any, searchProperty: any): IPropertyLocation;
	    getConvertableParameters(destinationSpecifics: string): any[];
	    constructor(operator: T, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: any, path: any);
	    get changeTypeItems(): {
	        name: string;
	        instance: any;
	        localizationId: string;
	    }[];
	    canChange: boolean;
	    canRemove: boolean;
	    changeValueType: (type: any) => void;
	}





	export class FunctionOperandSurface extends OperandSurfaceBase<FunctionOperator> {
	    constructor(operator: FunctionOperator, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: any, path: any);
	    get leftPart(): CriteriaOperatorSurface<CriteriaOperator>;
	    get rightPart(): any[];
	    get displayType(): string;
	    dispose(): void;
	    canRemove: boolean;
	    contentTemplateName: string;
	    operands: ko.ObservableArray<any>;
	}




	export class GroupOperandSurface extends CriteriaOperatorSurface<GroupOperator> {
	    constructor(operator: GroupOperator, parent: any, fieldListProvider: any, path: any);
	    change(type: any, surface: any): void;
	    remove(surface: CriteriaOperatorSurface<CriteriaOperator>): void;
	    create(type: any): void;
	    get rightPart(): CriteriaOperatorSurface<CriteriaOperator>[];
	    dispose(): void;
	    templateName: string;
	    operatorClass: string;
	    operands: ko.ObservableArray<CriteriaOperatorSurface<CriteriaOperator>>;
	    createItems: any;
	}



	export class InOperandSurface extends CriteriaOperatorSurface<InOperator> {
	    constructor(operator: InOperator, parent: any, fieldListProvider: any, path: any);
	    get leftPart(): any;
	    get rightPart(): any[];
	    dispose(): void;
	    addValue: () => void;
	    contentTemplateName: string;
	    operands: ko.ObservableArray<any>;
	    criteriaOperator: ko.Observable<any>;
	}






	export class OperandParameterSurface extends OperandSurfaceBase<OperandParameter> {
	    constructor(operator: OperandParameter, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider?: any, path?: any);
	    changeParameter: (item: IDataMemberInfo) => void;
	    get items(): any;
	    get displayType(): any;
	    operatorClass: string;
	    parameterName: ko.Observable<string> | ko.Computed<string>;
	    templateName: string;
	}






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
	    get items(): any;
	    get displayType(): any;
	    valueType: ko.Observable<string>;
	    changeProperty: (item: IDataMemberInfo) => void;
	    templateName: string;
	    operatorClass: string;
	}







	export class OperandValueSurface extends OperandSurfaceBase<OperandValue> {
	    private static _defaultValue;
	    private _value;
	    private _scroll;
	    private _updateDate;
	    get items(): any[];
	    constructor(operator: OperandValue, parent: CriteriaOperatorSurface<CriteriaOperator>, fieldListProvider: IItemsProvider, path: any);
	    get displayType(): any;
	    changeValue: () => void;
	    isDefaultDisplay(): boolean;
	    getDefaultValue(): any;
	    scrollTo(element: HTMLElement): void;
	    dataType: ko.Observable<string> | ko.Computed<string>;
	    values: ko.Observable<any[]>;
	    value: ko.Observable<string> | ko.Computed<string>;
	    dataSource: ko.Observable<DataSource> | ko.Computed<DataSource>;
	    isEditable: ko.Observable<boolean> | ko.Computed<boolean>;
	    templateName: string;
	    _getBaseOptions: (element: HTMLElement) => {
	        value: ko.Observable<any>;
	        onFocusOut: () => any;
	        onFocusIn: () => void;
	    };
	    getNumberEditorOptions: (element: HTMLElement) => any;
	    getStringEditorOptions: (element: HTMLElement) => {
	        value: ko.Observable<any>;
	        onFocusOut: () => any;
	        onFocusIn: () => void;
	    };
	    getBoolEditorOptions: (element: HTMLElement, $root: any) => {
	        value: ko.Observable<any>;
	        onFocusOut: () => any;
	        onFocusIn: () => void;
	        dataSource: {
	            val: string;
	            text: string;
	            localizationId: string;
	        }[];
	        valueExpr: string;
	        displayExpr: string;
	        dropDownOptions: {
	            container: any;
	        };
	    };
	    getDateEditorOptions: (element: HTMLElement, $root: any) => {
	        value: ko.Observable<any>;
	        onFocusOut: () => any;
	        onFocusIn: () => void;
	        closeOnValueChange: boolean;
	        type: string;
	        dropDownOptions: {
	            container: any;
	        };
	    };
	    getListEditOptions: (element: HTMLElement, $root: any) => {
	        value: ko.Observable<any>;
	        onFocusOut: () => any;
	        onFocusIn: () => void;
	        dataSource: ko.Computed<DataSource<any, any>> | ko.Observable<DataSource<any, any>>;
	        acceptCustomValue: boolean;
	        valueExpr: string;
	        displayExpr: string;
	        useItemTextAsTitle: boolean;
	        searchEnabled: boolean;
	        dropDownOptions: {
	            container: any;
	        };
	    };
	}

}
declare module DevExpress.Analytics.Widgets.Ace {
	export function defineAceCriteria(ace: any): void;

	export function defineAceDocComments(ace: any): void;

	export interface IAceEditor {
	    require(module: string): any;
	    edit(element: HTMLElement): any;
	}
	export function defineAce(ace: any): void;

}