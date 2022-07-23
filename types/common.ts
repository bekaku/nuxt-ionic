/* eslint-disable @typescript-eslint/no-explicit-any */

// enum
export enum HttpMethod {
  GET,
  POST,
  PUT,
  DELETE,
}
export enum CrudListDataType {
  TEXT,
  HTML,
  IMAGE,
  AVATAR,
  STATUS,
  DATE,
  DATE_TIME,
  LINKABLE,
  BASE_TOOL,
  NUMBER_FORMAT,
}
// type
export type SearchOperation = ':' | '>' | '>=' | '<' | '<=' | '=' | '!=';
export type IHttpStatus =
  | 'OK'
  | 'CREATED'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'BAD_REQUEST'
  | 'FORBIDDEN'
  | 'INTERNAL_SERVER_ERROR';
export type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type IThemeSettingOptions = 'dark' | 'light' | 'system' | 'realtime';
export type ITheme = 'dark' | 'light';
export type ILanguge = 'en' | 'th';
export type ICrudAction = 'new' | 'view' | 'copy';
export type IResult =
  | '404'
  | '403'
  | '500'
  | '418'
  | 'info'
  | 'success'
  | 'error'
  | 'warning'
  | 'empty';
export type IAlert =
  | 'is-primary'
  | 'is-link'
  | 'is-info'
  | 'is-success'
  | 'is-warning'
  | 'is-danger'
  | 'is-light';
export type IHrefTarget = '_blank' | '_parent' | '_self' | '_top';
export type ImgRatioType = '1' | '16/9' | '4/3';
// interface
export interface ILocales {
  name: string;
  iso: string;
  flag: string;
}
// export interface ILocales {
//   [key: string]: {
//     name: string;
//     iso: string;
//     flag: string;
//   };
// }
export interface LocaleOption {
  id: string;
  name: string;
}

export interface RequestType {
  API: string;
  baseURL?: string;
  method: IMethod;
  body?: any;
}
export interface ApiResponse {
  response?: any;
  error?: any;
}
export interface ResponseMessage {
  status: IHttpStatus;
  message?: string;
  timestamp: string;
}
export interface DefaultAxiosInstance {
  Accept: string;
  //   baseURL: string;
  'Content-Type': string;
  'X-language': string;
  'Code-Version': number;
  'X-Api-Client': string;
  Authorization?: string;
}
export interface UserCredentialPicture {
  path: string;
  x: string;
  xx: string;
  xxx: string;
}
export interface UserCredential {
  id: number | string;
  username: string;
  email: string;
  rolesText?: string;
  status: boolean;
  picture: UserCredentialPicture;
  userRoles?: string[];
  apiKey: string;
}
export interface AppException {
  status: string;
  message: string;
  errors?: string[];
  timestamp?: string;
}
export type ISortModeType = 'asc' | 'desc';
export interface ISort {
  mode: ISortModeType;
  column: string;
}
export interface ISortMode {
  label: string;
  value: ISortModeType;
}
export interface ILabelValue {
  label: string;
  value: string | number;
}
export interface ITextValue {
  text: string;
  value: number | string;
}
export interface IPagination {
  current: number;
  itemsPerPage: number;
  totalPages: number;
  totalElements?: number;
  last?: boolean;
  perPageList: ITextValue[];
}
export interface CrudListApiOptions {
  apiEndpoint?: string;
  crudName?: string;
  actionList?: string;
  actionDelete?: string;
  actionPost?: string;
  actionPut?: string;
  actionGetOne?: string;
  additionalUri?: string;
  defaultSort?: ISort;
  itemsPerPage?: number;
  fetchListOnload?: boolean;
}
export interface CrudFormApiOptions {
  apiEndpoint?: string;
  crudName?: string;
  fetchDataLink?: string;
  backLink?: string;
  actionList?: string;
  actionPost?: string;
  actionPut?: string;
  actionDelete?: string;
  fectchDataOnLoad?: boolean;
  autoPageTitle?: boolean;
  preventRedirectToList?: boolean;
}

export type IAlign = 'center' | 'left' | 'right';
export enum ICrudListHeaderOptionSearchType {
  TEXT,
  NUMBER,
  BOOLEAN,
  DATE,
  DATETIME,
}
export interface ICrudListHeaderOption {
  searchable?: boolean;
  fillable?: boolean;
  sortable?: boolean;
  external?: boolean; //LINKABLE
  editButton?: boolean; //BASE_TOOL
  deleteButton?: boolean; //BASE_TOOL
  copyButton?: boolean; //BASE_TOOL
  square?: boolean; //AVATAR,
  rounded?: boolean; //AVATAR,
  size?: string; //AVATAR 45px,
  style?: string; //'height: auto; width: 100px' for IMAGE,
  align?: IAlign; //'center', center left right
  searchType?: ICrudListHeaderOptionSearchType;
  searchModel?: any;
  searchColunm?: string;
  sortColunm?: string;
  searchOperation?: SearchOperation;
  searchOperationReadonly?: boolean;
}
export interface ICrudListHeader {
  column?: string;
  label: string;
  type: CrudListDataType;
  options: ICrudListHeaderOption;
}
export interface IApiListResponse {
  dataList: [];
  totalPages: number;
  totalElements: number;
  last: boolean;
}
export interface UseMetaOptions {
  additionalTitle?: string;
  manualSet?: boolean;
}
export interface NotifyOptions {
  icon?: string;
  caption?: string;
  avatar?: string;
  color?: string;
  textColor?: string;
  type?: 'positive' | 'negative' | 'warning' | 'info';
  timeout?: number;
  progress?: boolean;
  multiLine?: boolean;
  spinner?: boolean;
  html?: boolean;
  hideClose?: boolean;
  position?:
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'center';
  actions?: any[];
}
export interface RequestDto {
  [key: string]: any;
}
export interface IFile {
  type: string;
  size: number;
  icon: string;
  name?: string;
  filePath?: string | null;
}
export enum ChatMessageType {
  TEXT = 1,
  IMAGE = 2,
  MAP = 3,
  SOUND = 4,
}
export interface AppToastOptions {
  text: string;
  time?: number;
  headerText?: string;
  icon?: string;
  closeIcon?: string;
  color?:
    | 'danger'
    | 'dark'
    | 'light'
    | 'medium'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'tertiary'
    | 'warning'
    | undefined;
  toastPosition?: 'bottom' | 'top' | 'middle' | undefined;
}
export interface AppAlertOptions {
  text: string;
  header?: string;
  subHeader?: string;
  icon?: string;
  type?: 'danger' | 'warning' | 'success' | undefined;
}
export type OsPlatForm =
  | 'ipad'
  | 'iphone'
  | 'ios'
  | 'android'
  | 'phablet'
  | 'tablet'
  | 'cordova'
  | 'capacitor'
  | 'electron'
  | 'pwa'
  | 'mobile'
  | 'mobileweb'
  | 'desktop'
  | 'hybrid';
