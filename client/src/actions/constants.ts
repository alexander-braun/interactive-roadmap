export const ADD_COMMENT = 'ADD_COMMENT';
export type Comment = string;
export type ID = string;
export interface AddComment {
  type: typeof ADD_COMMENT;
  comment: Comment;
  id: ID;
}
export type CommentActionTypes = AddComment;
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
