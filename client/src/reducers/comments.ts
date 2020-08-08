import {
  AppActions,
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  Comments,
} from '../actions/constants';

const initialState = {
  '2cfc0a72-712d-4b59-896b-e4ce8ef91d01': ['Edit me!'],
};

export const comments = (
  state: Comments = initialState,
  action: AppActions
): Comments => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_COMMENT:
      if (action.comment === '') {
        if (newState[action.id]) {
          newState[action.id].push('Edit me!');
        } else if (!newState[action.id]) {
          newState[action.id] = ['Edit me!'];
        }
      } else {
        if (newState[action.id]) newState[action.id].push(action.comment);
        else newState[action.id] = [action.comment];
      }
      return newState;
    case DELETE_COMMENT:
      if (newState[action.id][action.index]) {
        newState[action.id].splice(action.index, 1);
      }
      return newState;
    case CHANGE_COMMENT:
      newState[action.id][action.index] = action.comment;
      return newState;
    default:
      return state;
  }
};