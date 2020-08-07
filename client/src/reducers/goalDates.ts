import { AppActions, CHANGE_DATE, Dates } from '../actions/constants';

const initialState = {};

export const goalDates = (
  state: Dates = initialState,
  action: AppActions
): Dates => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CHANGE_DATE:
      newState[action.id] = action.date;
      return newState;
    default:
      return state;
  }
};
