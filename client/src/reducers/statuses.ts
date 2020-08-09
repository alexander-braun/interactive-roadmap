import {
  AppActions,
  SET_STATUS,
  Statuses,
  DELETE_ALL_STATUSES,
  ADD_STATUSES,
} from '../actions/constants';

const initialState = {};

export const status = (
  state: Statuses = initialState,
  action: AppActions
): Statuses => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_STATUSES:
      return action.statuses;
    case SET_STATUS:
      newState[action.id] = action.status;
      return newState;
    case DELETE_ALL_STATUSES:
      return {};
    default:
      return state;
  }
};
