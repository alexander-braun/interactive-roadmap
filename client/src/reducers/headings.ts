import {
  AppActions,
  SET_CARD_HEADING,
  Headings,
  DELETE_ALL_HEADINGS,
  ADD_HEADINGS,
} from '../actions/constants';
import { frontendTitles } from '../roadmap-data/frontend-titles';

const initialState = frontendTitles;

export const headings = (
  state: Headings = initialState,
  action: AppActions
): Headings => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_HEADINGS:
      return action.headings;
    case SET_CARD_HEADING:
      newState[action.id] = action.heading;
      return newState;
    case DELETE_ALL_HEADINGS:
      return {};
    default:
      return state;
  }
};
