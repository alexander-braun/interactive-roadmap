import { AppActions, SET_CARD_HEADING, Headings } from '../actions/constants';
import { frontendTitles } from '../roadmap-data/frontend-titles';

const initialState = frontendTitles;

export const headings = (
  state: Headings = initialState,
  action: AppActions
): Headings => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_CARD_HEADING:
      newState[action.id] = action.heading;
      return newState;
    default:
      return state;
  }
};
