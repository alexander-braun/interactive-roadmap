export const ADD_COMMENT = 'ADD_COMMENT';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ADD_CHILDNODE = 'ADD_CHILDNODE';
export const DELETE_CHILDNODE = 'DELETE_CHILDNODE';
export const SET_CARD_HEADING = 'SET_CARD_HEADING';
export const SET_STATUS = 'SET_STATUS';

export type Comment = string;
export type ID = string;
export type Index = number;
export type CardHeading = string;
export type Status = 'Pending' | 'In-Work' | 'Done';

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
export interface DeleteChildnode {
  type: typeof DELETE_CHILDNODE;
  id: ID;
}
export interface SetCardHeading {
  type: typeof SET_CARD_HEADING;
  heading: CardHeading;
  id: ID;
}

export type StatusActionTypes = SetStatus;
export type CommentActionTypes = AddComment | ChangeComment | DeleteComment;
export type NodeActionTypes = AddChildnode | DeleteChildnode | SetCardHeading;
export type AppActions =
  | StatusActionTypes
  | CommentActionTypes
  | NodeActionTypes;
