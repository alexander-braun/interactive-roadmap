import {
  AppActions,
  TOGGLE_LOGIN_REGISTER_MODAL,
  LoginRegisterModalState,
} from '../actions/constants';

export const recommendations = (
  state: LoginRegisterModalState = false,
  action: AppActions
): LoginRegisterModalState => {
  switch (action.type) {
    case TOGGLE_LOGIN_REGISTER_MODAL:
      return !state;
    default:
      return state;
  }
};
