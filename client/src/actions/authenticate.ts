import axios from 'axios';
import { AxiosResponse } from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
} from './constants';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

//Load User
export const loadUser = () => async (dispatch: any) => {
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
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

//Register User
export const register = ({ name, email, password }: RegisterUser) => async (
  dispatch: any
) => {
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
      errors.forEach((error: NodeJS.ErrnoException) =>
        dispatch(setAlert(error.code, 'danger'))
      );
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

interface Login {
  email: string;
  password: string;
}

interface Data {
  token: string;
}

//Login User
export const login = ({ email, password }: Login) => async (dispatch: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res: AxiosResponse<any> = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    if (error.response) {
      console.log(error);
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error: NodeJS.ErrnoException) =>
          dispatch(setAlert(error.code, 'danger'))
        );
      }
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Logout User /clear profile
export const logout = () => (dispatch: any) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT,
  });
};
