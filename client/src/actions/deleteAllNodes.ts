import { DELETE_ALL_NODES, AppActions } from './constants';

export const deleteAllNodes = (): AppActions => ({
  type: DELETE_ALL_NODES,
});
