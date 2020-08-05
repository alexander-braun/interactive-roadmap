import { CHANGE_DATE, AppActions, ID } from './constants';

export const changeDate = (id: ID, date: number): AppActions => ({
  type: CHANGE_DATE,
  id,
  date,
});
