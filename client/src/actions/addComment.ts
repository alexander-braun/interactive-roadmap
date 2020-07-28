import { ADD_COMMENT, AppActions, ID } from './constants';
import { Comment } from '../actions/constants';

export const addComment = (comment: Comment, id: ID): AppActions => ({
  type: ADD_COMMENT,
  comment,
  id,
});
