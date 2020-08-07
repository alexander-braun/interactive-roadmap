import {
  ADD_CHILDNODE,
  DELETE_CHILDNODE,
  AppActions,
  ADD_CENTER_NODE,
} from '../actions/constants';
import { Nodes } from '../components/types/Map-Data';
import { frontend } from '../roadmap-data/frontendmap';
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
        children: [],
        mainKnot: false,
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
            children: [],
            mainKnot: true,
            resources: [],
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
    default:
      return state;
  }
};
