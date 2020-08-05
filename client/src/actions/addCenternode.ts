import { ADD_CENTER_NODE, AppActions, ID } from './constants';

export const addCenternode = (id: ID): AppActions => ({
  type: ADD_CENTER_NODE,
  id,
});
