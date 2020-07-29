import { ADD_CHILDNODE, AppActions, ID } from './constants';

export const addChildnode = (id: ID): AppActions => ({
  type: ADD_CHILDNODE,
  id,
});
