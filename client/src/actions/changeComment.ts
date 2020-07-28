import { CHANGE_COMMENT, AppActions, ID, Index, Comment } from './constants';

export const changeComment = (
  comment: Comment,
  id: ID,
  index: Index
): AppActions => ({
  type: CHANGE_COMMENT,
  comment,
  id,
  index,
});
