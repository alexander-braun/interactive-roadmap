import {
  UPDATE_INVIEW_ELEMENTS,
  AppActions,
  InviewElements,
} from '../actions/constants';

export const inView = (
  state: InviewElements = {},
  action: AppActions
): InviewElements => {
  switch (action.type) {
    case UPDATE_INVIEW_ELEMENTS:
      const newState = Object.assign({}, state);
      newState[action.inviewElement[0]] = [
        action.inviewElement[1],
        action.inviewElement[2],
      ];
      return newState;
    default:
      return state;
  }
};
