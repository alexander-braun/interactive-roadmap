import { DELETE_ALL_DATES, AppActions } from './constants';

export const deleteAllDates = (): AppActions => ({
  type: DELETE_ALL_DATES,
});
