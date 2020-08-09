import {
  AppActions,
  CHANGE_DATE,
  Dates,
  DELETE_ALL_DATES,
  ADD_DATES,
} from '../actions/constants';

const initialState = {};

export const goalDates = (
  state: Dates = initialState,
  action: AppActions
): Dates => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_DATES:
      return action.dates;
    case CHANGE_DATE:
      newState[action.id] = action.date;
      return newState;
    case DELETE_ALL_DATES:
      return {};
    default:
      return state;
  }
};
