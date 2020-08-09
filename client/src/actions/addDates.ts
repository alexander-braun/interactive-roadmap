import { ADD_DATES, AppActions, Dates } from './constants';

export const addDates = (dates: Dates): AppActions => ({
  type: ADD_DATES,
  dates,
});
