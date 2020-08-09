import { AxiosResponse } from 'axios';
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
  msg: string;
  alertType: string;
}
export interface RemoveAlert {}
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
export interface ChangeDate {
  type: typeof CHANGE_DATE;
  date: number;
  id: ID;
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
export interface AddComment {
  type: typeof ADD_COMMENT;
  comment: Comment;
  id: ID;
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
export interface AddChildnode {
  type: typeof ADD_CHILDNODE;
  id: ID;
}
export interface AddCenternode {
  type: typeof ADD_CENTER_NODE;
  id: ID;
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
  __id: string;
};
export interface LoadPresets {
  type: typeof LOAD_PRESETS;
  payload: Preset[];
}
export interface PresetError {
  type: typeof PRESET_ERROR;
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

export type PresetActionTypes =
  | LoadPresets
  | PresetError
  | AddPreset
  | DeletePresetError
  | DeletePresetSuccess;
export type AlertActionTypes = SetAlert;
export type AuthActionTypes =
  | LoadUser
  | RegisterSuccess
  | LoginSuccess
  | RegisterFail
  | AuthError
  | LoginFail
  | Logout;
export type RecommendationActionTypes = ChangeRecommendation;
export type DateActionTypes = ChangeDate;
export type ModalActionTypes = ToggleCalendarModal | LoginRegisterModal;
export type StatusActionTypes = SetStatus;
export type CommentActionTypes = AddComment | ChangeComment | DeleteComment;
export type NodeActionTypes =
  | AddChildnode
  | DeleteChildnode
  | SetCardHeading
  | AddCenternode;

export type AppActions =
  | StatusActionTypes
  | CommentActionTypes
  | NodeActionTypes
  | ModalActionTypes
  | DateActionTypes
  | RecommendationActionTypes
  | AuthActionTypes
  | AlertActionTypes
  | PresetActionTypes;
