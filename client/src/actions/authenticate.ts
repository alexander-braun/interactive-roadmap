import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
  PASSWORD_MAIL_SENT,
  PASSWORD_RECOVERY_ERROR,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
  DELETE_USER_SUCCESS,
  RegisterUser,
  Login,
  ID,
} from './constants';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

//Thunk dispatch stuff
import { Action } from 'redux';
import { AppState } from '../reducers/index';
import { ThunkAction } from 'redux-thunk';

//Load User
export const loadUser = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
> => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Request Password Link
export const requestPasswordLink = (
  email: string
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/auth/forgotpassword', { email }, config);
    dispatch({
      type: PASSWORD_MAIL_SENT,
      payload: res.data,
    });
    dispatch(setAlert('Mail was sent to your inbox!', 'success'));
  } catch (error) {
    dispatch({
      type: PASSWORD_RECOVERY_ERROR,
    });
  }
};

export const setNewPassword = (
  password: string,
  token: string
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put(
      `/api/auth/resetpassword/${token}`,
      { password },
      config
    );
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Password changed!', 'success'));
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_ERROR,
    });
    dispatch(setAlert('Something went wrong', 'danger'));
  }
};

//Register User
export const register = ({
  name,
  email,
  password,
}: RegisterUser): ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login User
export const login = ({
  email,
  password,
}: Login): ThunkAction<void, AppState, unknown, Action<string>> => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    if (error.response) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger')));
      }
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Logout User /clear profile
export const logout = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
> => (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT,
  });
};

//Delete a user
export const deleteUser = (
  id: ID
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/users/${id}`);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: res.data,
      id: id,
    });
  } catch (error) {
    console.error('ERROR', error);
    dispatch(setAlert('User could not be removed', 'danger'));
  }
};

//Change Password
export const changePassword = (
  id: ID,
  password: string
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ password });
  try {
    const res = await axios.put(`api/users/${id}`, body, config);
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Password changed!', 'success'));
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_ERROR,
    });
    dispatch(setAlert('Something went wrong', 'danger'));
  }
};
