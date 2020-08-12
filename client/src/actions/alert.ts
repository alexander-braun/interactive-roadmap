import { SET_ALERT, REMOVE_ALERT } from './constants';
import { v4 as uuidv4 } from 'uuid';
import { Action } from 'redux';
import { AppState } from '../reducers/index';
import { ThunkAction } from 'redux-thunk';

export const setAlert = (
  msg: string,
  alertType: string
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch: any) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};
