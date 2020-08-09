import { DELETE_ALL_STATUSES, AppActions } from './constants';

export const deleteAllStatuses = (): AppActions => ({
  type: DELETE_ALL_STATUSES,
});
