import { ADD_STATUSES, AppActions, Statuses } from './constants';

export const addStatuses = (statuses: Statuses): AppActions => ({
  type: ADD_STATUSES,
  statuses,
});
