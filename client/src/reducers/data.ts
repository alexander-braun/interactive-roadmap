import { ADD_COMMENT, CHANGE_COMMENT, AppActions } from '../actions/constants';
import { Map } from '../components/types/Map';
import { frontend } from '../roadmap-data/frontend';

const initialState = frontend;

export const data = (
  state: Map[] = initialState,
  action: AppActions
): Map[] => {
  const newState = [...state];
  switch (action.type) {
    case ADD_COMMENT:
      for (const category of newState) {
        if (category.id === action.id) {
          if (
            category.comments.length > 0 &&
            !category.comments[category.comments.length - 1]
          )
            break;
          category.comments.push(action.comment);
          return newState;
        } else if (category.children) {
          for (const element of category.children) {
            if (element.id === action.id) {
              if (
                element.comments.length > 0 &&
                !element.comments[element.comments.length - 1]
              )
                break;
              element.comments.push(action.comment);
              return newState;
            } else if (element.children) {
              for (const child of element.children) {
                if (child.id === action.id) {
                  if (
                    child.comments.length > 0 &&
                    !child.comments[child.comments.length - 1]
                  )
                    break;
                  child.comments.push(action.comment);
                  return newState;
                }
              }
            }
          }
        }
      }
      return newState;
    case CHANGE_COMMENT:
      for (const category of newState) {
        if (category.id === action.id) {
          category.comments[action.index] = action.comment;
          return newState;
        } else if (category.children) {
          for (const element of category.children) {
            if (element.id === action.id) {
              element.comments[action.index] = action.comment;
              return newState;
            } else if (element.children) {
              for (const child of element.children) {
                if (child.id === action.id) {
                  child.comments[action.index] = action.comment;
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
