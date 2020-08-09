import { DELETE_ALL_HEADINGS, AppActions } from './constants';

export const deleteAllHeadings = (): AppActions => ({
  type: DELETE_ALL_HEADINGS,
});
