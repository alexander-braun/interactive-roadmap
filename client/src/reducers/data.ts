import {
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  ADD_CHILDNODE,
  DELETE_CHILDNODE,
  SET_CARD_HEADING,
  SET_STATUS,
  AppActions,
} from '../actions/constants';
import { Map } from '../components/types/Map';
import { frontend } from '../roadmap-data/frontend';
import { v4 as uuidv4 } from 'uuid';

const initialState = frontend;

export const data = (
  state: Map[] = initialState,
  action: AppActions
): Map[] => {
  const newState = [...state];
  console.log(action.type);
  switch (action.type) {
    case SET_STATUS:
      for (const category of newState) {
        if (category.children) {
          for (const element of category.children) {
            if (element.id === action.id) {
              element.status = action.status;
              return newState;
            } else if (element.children) {
              for (const child of element.children) {
                if (child.id === action.id) {
                  child.status = action.status;
                  return newState;
                }
              }
            }
          }
        }
      }
      return newState;
    case SET_CARD_HEADING:
      for (const category of newState) {
        if (category.id === action.id) {
          category.title = action.heading;
          return newState;
        } else if (category.children) {
          for (const element of category.children) {
            if (element.id === action.id) {
              element.title = action.heading;
              return newState;
            } else if (element.children) {
              for (const child of element.children) {
                if (child.id === action.id) {
                  child.title = action.heading;
                  return newState;
                }
              }
            }
          }
        }
      }
      return newState;
    case DELETE_CHILDNODE:
      for (const category of newState) {
        if (category.children) {
          for (let i = 0; i < category.children.length; i++) {
            if (category.children[i].id === action.id) {
              category.children.splice(i, 1);
              return newState;
            } else if (category.children[i].children) {
              for (let j = 0; j < category.children[i].children.length; j++) {
                if (category.children[i].children[j].id === action.id) {
                  category.children[i].children.splice(j, 1);
                  return newState;
                }
              }
            }
          }
        }
      }
      return newState;
    case ADD_CHILDNODE:
      const Childnode: Map = {
        title: 'Your title',
        children: [],
        id: uuidv4(),
        status: 'Pending',
        comments: [],
      };
      for (const category of newState) {
        if (category.id === action.id) {
          category.children = [...category.children, Childnode];
          return newState;
        } else if (category.children) {
          for (const child of category.children) {
            if (child.id === action.id) {
              child.children = [...child.children, Childnode];
              return newState;
            }
          }
        }
      }
      return newState;
    case DELETE_COMMENT:
      for (const category of newState) {
        for (const element of category.children) {
          if (element.id === action.id) {
            element.comments.splice(action.index, 1);
            return newState;
          } else if (element.children) {
            for (const child of element.children) {
              if (child.id === action.id) {
                child.comments.splice(action.index, 1);
                return newState;
              }
            }
          }
        }
      }
      return newState;
    case ADD_COMMENT:
      for (const category of newState) {
        if (category.children) {
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
        if (category.children) {
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
