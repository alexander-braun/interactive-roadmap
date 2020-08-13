import {
  AppActions,
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  DELETE_ALL_COMMENTS,
  ADD_COMMENTS,
  Comments,
} from '../actions/constants';

const initialState = {
  'adfe4aca-1edb-4015-b639-874a302d132e': ['Add your own notes here!'],
};

export const comments = (
  state: Comments = initialState,
  action: AppActions
): Comments => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_COMMENTS:
      return action.comments;
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
    case DELETE_ALL_COMMENTS:
      return {};
    default:
      return state;
  }
};
