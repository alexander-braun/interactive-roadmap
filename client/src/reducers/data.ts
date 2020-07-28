import { ADD_COMMENT, AppActions } from '../actions/constants';
import { Map } from '../components/types/Map';
import { frontend } from '../roadmap-data/frontend';

const initialState = frontend;

export const data = (
  state: Map[] = initialState,
  action: AppActions
): Map[] => {
  switch (action.type) {
    case ADD_COMMENT:
      const newState = [...state];
      for (const category of newState) {
        if (category.id === action.id) {
          category.comments.push(action.comment);
          return newState;
        } else if (category.children) {
          for (const element of category.children) {
            if (element.id === action.id) {
              element.comments.push(action.comment);
              return newState;
            } else if (element.children) {
              for (const child of element.children) {
                if (child.id === action.id) {
                  child.comments.push(action.comment);
                  return newState;
                }
              }
            }
          }
        }
      }
      return newState;
    default:
      return state;
  }
};
