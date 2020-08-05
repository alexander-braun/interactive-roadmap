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
  ADD_CENTER_NODE,
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
      const child_id = uuidv4();
      newState[action.id].children.push(child_id);
      newState[child_id] = {
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
    case ADD_CENTER_NODE:
      const center_id = uuidv4();
      const newObject: Nodes = {};
      const keys = Object.keys(newState);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === action.id) {
          newObject[keys[i]] = newState[keys[i]];
          newObject[center_id] = {
            comments: [],
            title: 'Edit me!',
            goalDate: Date.now(),
            status: 'Pending',
            recommended: 'none',
            children: [],
            mainKnot: true,
            resources: [],
            importance: 0,
          };
        } else {
          newObject[keys[i]] = newState[keys[i]];
        }
      }
      return newObject;
    case DELETE_CHILDNODE:
      const children: string[] = newState[action.id].children;
      if (children) {
        for (const child of children) {
          if (newState[child].children) {
            for (const subChild of newState[child].children) {
              delete newState[subChild];
            }
          }
          delete newState[child];
        }
      }
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
      if (action.comment === '') newState[action.id].comments.push('Edit me!');
      else newState[action.id].comments.push(action.comment);
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
