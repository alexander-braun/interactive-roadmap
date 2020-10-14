import { Nodes } from '../components/types/Map-Data';

export const ADD_COMMENT = 'ADD_COMMENT';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ADD_CHILDNODE = 'ADD_CHILDNODE';
export const DELETE_CHILDNODE = 'DELETE_CHILDNODE';
export const SET_CARD_HEADING = 'SET_CARD_HEADING';
export const SET_STATUS = 'SET_STATUS';
export const TOGGLE_CALENDAR_MODAL = 'TOGGLE_CALENDAR_MODAL';
export const CHANGE_DATE = 'CHANGE_DATE';
export const ADD_CENTER_NODE = 'ADD_CENTER_NODE';
export const CHANGE_RECOMMENDATION = 'CHANGE_RECOMMENDATION';
export const TOGGLE_LOGIN_REGISTER_MODAL = 'TOGGLE_LOGIN_REGISTER_MODAL';
export const DELETE_ALL_COMMENTS = 'DELETE_ALL_COMMENTS';
export const DELETE_ALL_NODES = 'DELETE_ALL_NODES';
export const DELETE_ALL_DATES = 'DELETE_ALL_DATES';
export const DELETE_ALL_HEADINGS = 'DELETE_ALL_HEADINGS';
export const DELETE_ALL_RECOMMENDATIONS = 'DELETE_ALL_RECOMMENDATIONS';
export const DELETE_ALL_STATUSES = 'DELETE_ALL_STATUSES';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_DATES = 'ADD_DATES';
export const ADD_HEADINGS = 'ADD_HEADINGS';
export const ADD_RECOMMENDATIONS = 'ADD_RECOMMENDATIONS';
export const ADD_STATUSES = 'ADD_STATUSES';
export const UPDATE_PRESET_SUCCESS = 'UPDATE_PRESET_SUCCESS';
export const UPDATE_PRESET_ERROR = 'UPDATE_PRESET_ERROR';
export const UPDATE_CURRENT_PRESET = 'UPDATE_CURRENT_PRESET';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const LOAD_PRESETS = 'LOAD_PRESETS';
export const PRESET_ERROR = 'PRESET_ERROR';
export const ADD_PRESET = 'ADD_PRESET';
export const DELETE_PRESET_ERROR = 'DELETE_PRESET_ERROR';
export const DELETE_PRESET_SUCCESS = 'DELETE_PRESET_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const ADD_NODES = 'ADD_NODES';
export const PASSWORD_MAIL_SENT = 'PASSWORD_MAIL_SENT';
export const PASSWORD_RECOVERY_ERROR = 'PASSWORD_RECOVERY_ERROR';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';
export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';

export type Comment = string;
export type ID = string;
export type Index = number;
export type CardHeading = string;
export type Status = 'Pending' | 'In-Work' | 'Done';
export type CalendarModal = [ID, number, boolean];
export type Comments = {
  [key: string]: string[];
};
export type Statuses = {
  [key: string]: Status;
};
export type Dates = {
  [key: string]: number;
};
export type Headings = {
  [key: string]: string;
};
export type Alert = {
  msg: string;
  alertType: string;
  id: string;
};
export type Recommendation =
  | 'option'
  | 'recommended'
  | 'not-recommended'
  | 'own';
export type Recommendations = {
  [key: string]: Recommendation;
};
export interface SetAlert {
  type: typeof SET_ALERT;
  payload: Alert;
}
export interface RemoveAlert {
  type: typeof REMOVE_ALERT;
  payload: ID;
}
export type LoginRegisterModalState = boolean;
export interface Auth {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: PayloadUser | null;
}
export interface LoginRegisterModal {
  type: typeof TOGGLE_LOGIN_REGISTER_MODAL;
}
export interface ChangeRecommendation {
  type: typeof CHANGE_RECOMMENDATION;
  recommendation: Recommendation;
  id: ID;
}
export interface DeleteAllRecommendations {
  type: typeof DELETE_ALL_RECOMMENDATIONS;
}
export interface AddRecommendations {
  type: typeof ADD_RECOMMENDATIONS;
  recommendations: Recommendations;
}
export interface ChangeDate {
  type: typeof CHANGE_DATE;
  date: number;
  id: ID;
}
export interface AddDates {
  type: typeof ADD_DATES;
  dates: Dates;
}
export interface DeleteAllDates {
  type: typeof DELETE_ALL_DATES;
}
export interface ToggleCalendarModal {
  type: typeof TOGGLE_CALENDAR_MODAL;
  data: CalendarModal;
}
export interface SetStatus {
  type: typeof SET_STATUS;
  status: Status;
  id: ID;
}
export interface DeleteAllStatuses {
  type: typeof DELETE_ALL_STATUSES;
}
export interface AddStatuses {
  type: typeof ADD_STATUSES;
  statuses: Statuses;
}
export interface AddComment {
  type: typeof ADD_COMMENT;
  comment: Comment;
  id: ID;
}
export interface AddComments {
  type: typeof ADD_COMMENTS;
  comments: Comments;
}
export interface ChangeComment {
  type: typeof CHANGE_COMMENT;
  comment: Comment;
  id: ID;
  index: Index;
}
export interface DeleteComment {
  type: typeof DELETE_COMMENT;
  id: ID;
  index: Index;
}
export interface DeleteAllComments {
  type: typeof DELETE_ALL_COMMENTS;
}
export interface AddChildnode {
  type: typeof ADD_CHILDNODE;
  id: ID;
}
export interface AddCenternode {
  type: typeof ADD_CENTER_NODE;
  id: ID;
}
export interface DeleteAllNodes {
  type: typeof DELETE_ALL_NODES;
}
export interface AddNodes {
  type: typeof ADD_NODES;
  nodes: Nodes;
}
export interface DeleteChildnode {
  type: typeof DELETE_CHILDNODE;
  id: ID;
}
export interface SetCardHeading {
  type: typeof SET_CARD_HEADING;
  heading: CardHeading;
  id: ID;
}
export interface DeleteAllHeadings {
  type: typeof DELETE_ALL_HEADINGS;
}
export interface AddHeadings {
  type: typeof ADD_HEADINGS;
  headings: Headings;
}
export interface RegisterUser {
  name: string;
  email: string;
  password: string;
}
export interface Login {
  email: string;
  password: string;
}
export type PayloadUser = {
  date: string;
  email: string;
  name: string;
  __v: number;
  _id: string;
};
export interface LoadUser {
  type: typeof USER_LOADED;
  payload: PayloadUser;
}
export interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: { token: string };
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: { token: string };
}
export interface RegisterFail {
  type: typeof REGISTER_FAIL;
}
export interface AuthError {
  type: typeof AUTH_ERROR;
}
export interface LoginFail {
  type: typeof LOGIN_FAIL;
}
export interface Logout {
  type: typeof LOGOUT;
}
export type Preset = {
  user: PayloadUser;
  description?: string;
  name: string;
  date: string;
  comments?: Comments;
  nodes: Nodes;
  goalDates?: Dates;
  headings: Headings;
  recommendations?: Recommendations;
  statuses?: Statuses;
  __v: number;
  _id: string;
};
export type AddDefaultPreset = {
  user: PayloadUser;
  description?: string;
  name: string;
  comments: Comments;
  nodes: Nodes;
  headings: Headings;
  recommendations: Recommendations;
  statuses: Statuses;
};
export type SavePreset = {
  description?: string;
  name?: string;
  date?: string;
  comments?: Comments;
  nodes?: Nodes;
  goalDates?: Dates;
  headings?: Headings;
  recommendations?: Recommendations;
  statuses?: Statuses;
};
export type NewPreset = {
  user: PayloadUser;
  name: string;
  description?: string;
  comments?: Comments;
  nodes?: Nodes;
  headings?: Headings;
  recommendations?: Recommendations;
};
export interface UpdatePresetSuccess {
  type: typeof UPDATE_PRESET_SUCCESS;
  payload: Preset;
  id: ID;
}
export interface LoadPresets {
  type: typeof LOAD_PRESETS;
  payload: Preset[];
}
export interface PresetError {
  type: typeof PRESET_ERROR;
}
export interface UpdatePresetError {
  type: typeof UPDATE_PRESET_ERROR;
}
export interface AddPreset {
  type: typeof ADD_PRESET;
  payload: Preset;
}
export interface DeletePresetError {
  type: typeof DELETE_PRESET_ERROR;
}
export interface DeletePresetSuccess {
  type: typeof DELETE_PRESET_SUCCESS;
  id: string;
}
export interface DeleteUserSuccess {
  type: typeof DELETE_USER_SUCCESS;
  id: string;
}
export interface UpdateCurrentPreset {
  type: typeof UPDATE_CURRENT_PRESET;
  presetId: ID;
}
export interface SendPassword {
  type: typeof PASSWORD_MAIL_SENT;
  email: string;
}
export interface SendPasswordError {
  type: typeof PASSWORD_RECOVERY_ERROR;
}
export interface ResetPassword {
  type: typeof PASSWORD_RESET_SUCCESS;
  password: string;
  token: string;
}
export interface ResetPasswordError {
  type: typeof PASSWORD_RESET_ERROR;
}
export interface ToggleSidenav {
  type: typeof TOGGLE_SIDENAV;
}

export type SidenavActionTypes = ToggleSidenav;
export type CurrentPresetActionTypes = UpdateCurrentPreset;
export type PresetActionTypes =
  | LoadPresets
  | PresetError
  | AddPreset
  | DeletePresetError
  | DeletePresetSuccess
  | UpdatePresetSuccess
  | UpdatePresetError;
export type AlertActionTypes = SetAlert | RemoveAlert;
export type AuthActionTypes =
  | LoadUser
  | DeleteUserSuccess
  | ResetPassword
  | ResetPasswordError
  | RegisterSuccess
  | LoginSuccess
  | RegisterFail
  | AuthError
  | LoginFail
  | Logout
  | SendPassword
  | SendPasswordError;
export type RecommendationActionTypes =
  | ChangeRecommendation
  | DeleteAllRecommendations
  | AddRecommendations;
export type DateActionTypes = ChangeDate | DeleteAllDates | AddDates;
export type ModalActionTypes = ToggleCalendarModal | LoginRegisterModal;
export type StatusActionTypes = SetStatus | DeleteAllStatuses | AddStatuses;
export type CommentActionTypes =
  | AddComment
  | AddComments
  | ChangeComment
  | DeleteComment
  | DeleteAllComments;
export type NodeActionTypes =
  | AddChildnode
  | DeleteChildnode
  | SetCardHeading
  | DeleteAllHeadings
  | AddHeadings
  | AddCenternode
  | DeleteAllNodes
  | AddNodes;

export type AppActions =
  | StatusActionTypes
  | CommentActionTypes
  | NodeActionTypes
  | ModalActionTypes
  | DateActionTypes
  | RecommendationActionTypes
  | AuthActionTypes
  | AlertActionTypes
  | PresetActionTypes
  | CurrentPresetActionTypes
  | SidenavActionTypes;
