import { SET_STATUS, AppActions, Status, ID } from './constants';

export const setStatus = (status: Status, id: ID): AppActions => ({
  type: SET_STATUS,
  status,
  id,
});
