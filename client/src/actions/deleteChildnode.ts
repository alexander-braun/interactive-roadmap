import { DELETE_CHILDNODE, AppActions, ID } from './constants';

export const deleteChildnode = (id: ID): AppActions => ({
  type: DELETE_CHILDNODE,
  id,
});
