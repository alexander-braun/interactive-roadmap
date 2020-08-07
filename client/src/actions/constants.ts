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

export type RecommendationActionTypes = ChangeRecommendation;
export type DateActionTypes = ChangeDate;
export type ModalActionTypes = ToggleCalendarModal;
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
  | RecommendationActionTypes;
