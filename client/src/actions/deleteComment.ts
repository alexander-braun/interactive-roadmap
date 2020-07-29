import { DELETE_COMMENT, AppActions, ID, Index } from './constants';

export const deleteComment = (id: ID, index: Index): AppActions => ({
  type: DELETE_COMMENT,
  id,
  index,
});
