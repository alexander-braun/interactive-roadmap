import {
  SET_ALERT,
  REMOVE_ALERT,
  Alert,
  AppActions,
} from '../actions/constants';

const initialState: Alert[] = [];

export const alert = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
