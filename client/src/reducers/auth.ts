import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  DELETE_USER_SUCCESS,
  LOGOUT,
  AppActions,
  Auth,
} from '../actions/constants';

const initialState: Auth = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const auth = (state: Auth = initialState, action: AppActions): Auth => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      const { token } = action.payload;
      localStorage.setItem('token', token);
      return {
        ...state,
        token,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case DELETE_USER_SUCCESS:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};
