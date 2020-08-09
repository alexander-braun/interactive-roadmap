import { ADD_COMMENTS, AppActions, Comments } from './constants';

export const addComments = (comments: Comments): AppActions => ({
  type: ADD_COMMENTS,
  comments,
});
