export const ADD_COMMENT = 'ADD_COMMENT';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ADD_CHILDNODE = 'ADD_CHILDNODE';
export const DELETE_CHILDNODE = 'DELETE_CHILDNODE';

export type Comment = string;
export type ID = string;
export type Index = number;

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

export type CommentActionTypes = AddComment | ChangeComment | DeleteComment;
export type NodeActionTypes = AddChildnode | DeleteChildnode;
export type AppActions = CommentActionTypes | NodeActionTypes;

/*
export interface Map {
  title: string;
  finished?: boolean;
  id: string;
  type: 'category' | 'element';
  importance?: number;
  technologiesTags?: string[];
  goalDate?: string;
  comments?: string[];
  resources?: string[];
  order?: boolean;
  recommended?:
    | 'option'
    | 'recommended'
    | 'not-recommended'
    | 'not-strict'
    | 'not-recommended-option'
    | 'not-recommended-none'
    | 'none';
  children: Map[] | [];
  mainKnot?: boolean;
}
*/
