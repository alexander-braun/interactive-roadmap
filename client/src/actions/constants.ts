export const ADD_COMMENT = 'ADD_COMMENT';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';

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

export type CommentActionTypes = AddComment | ChangeComment;
export type AppActions = CommentActionTypes;

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
