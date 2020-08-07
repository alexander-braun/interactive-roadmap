import {
  AppActions,
  Recommendations,
  CHANGE_RECOMMENDATION,
} from '../actions/constants';
import { recommendation } from '../roadmap-data/frontend-recommendation';

const initialState = recommendation;

export const recommendations = (
  state: Recommendations = initialState,
  action: AppActions
): Recommendations => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CHANGE_RECOMMENDATION:
      newState[action.id] = action.recommendation;
      return newState;
    default:
      return state;
  }
};
