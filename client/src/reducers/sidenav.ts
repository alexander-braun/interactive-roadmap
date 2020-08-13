import { AppActions, TOGGLE_SIDENAV } from '../actions/constants';

const initialState = false;

export const sidenav = (
  state: boolean = initialState,
  action: AppActions
): boolean => {
  switch (action.type) {
    case TOGGLE_SIDENAV:
      return !state;
    default:
      return state;
  }
};
