import { SET_ALERT, REMOVE_ALERT } from './constants';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg: any, alertType: any) => (dispatch: any) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};
