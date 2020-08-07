import { AppActions, SET_STATUS, Statuses } from '../actions/constants';

const initialState = {};

export const status = (
  state: Statuses = initialState,
  action: AppActions
): Statuses => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_STATUS:
      newState[action.id] = action.status;
      return newState;
    default:
      return state;
  }
};
