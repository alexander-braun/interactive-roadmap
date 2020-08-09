import { DELETE_ALL_COMMENTS, AppActions } from './constants';

export const deleteAllComments = (): AppActions => ({
  type: DELETE_ALL_COMMENTS,
});
