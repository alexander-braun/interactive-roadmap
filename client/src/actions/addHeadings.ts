import { ADD_HEADINGS, AppActions, Headings } from './constants';

export const addHeadings = (headings: Headings): AppActions => ({
  type: ADD_HEADINGS,
  headings,
});
