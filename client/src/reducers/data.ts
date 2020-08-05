import {
  ADD_CHILDNODE,
  DELETE_CHILDNODE,
  SET_CARD_HEADING,
  SET_STATUS,
  AppActions,
  CHANGE_DATE,
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
} from '../actions/constants';
import { Nodes } from '../components/types/Map-Data';
import { frontend } from '../roadmap-data/frontend';
import { v4 as uuidv4 } from 'uuid';

const initialState = frontend;

export const data = (
  state: Nodes = initialState,
  action: AppActions
): Nodes => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_CHILDNODE:
      const id = uuidv4();
      newState[action.id].children.push(id);
      newState[id] = {
        comments: [],
        title: 'Edit me!',
        goalDate: Date.now(),
        status: 'Pending',
        recommended: 'none',
        children: [],
        mainKnot: false,
        resources: [],
        importance: 0,
      };
      return newState;
    case DELETE_CHILDNODE:
      delete newState[action.id];
      for (const node of Object.keys(newState)) {
        if (newState[node].children.includes(action.id)) {
          const index = newState[node].children.indexOf(action.id);
          newState[node].children.splice(index, 1);
        }
      }
      return newState;
    case SET_CARD_HEADING:
      newState[action.id].title = action.heading;
      return newState;
    case SET_STATUS:
      newState[action.id].status = action.status;
      return newState;
    case CHANGE_DATE:
      if (newState[action.id]) {
        newState[action.id].goalDate = action.date;
      }
      return newState;
    case ADD_COMMENT:
      newState[action.id].comments.push(action.comment);
      return newState;
    case DELETE_COMMENT:
      newState[action.id].comments.splice(action.index, 1);
      return newState;
    case CHANGE_COMMENT:
      newState[action.id].comments[action.index] = action.comment;
      return newState;
    default:
      return state;
  }
};
