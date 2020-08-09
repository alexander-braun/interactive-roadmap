import {
  AppActions,
  Recommendations,
  CHANGE_RECOMMENDATION,
  DELETE_ALL_RECOMMENDATIONS,
  ADD_RECOMMENDATIONS,
} from '../actions/constants';
import { recommendation } from '../roadmap-data/frontend-recommendation';

const initialState = recommendation;

export const recommendations = (
  state: Recommendations = initialState,
  action: AppActions
): Recommendations => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_RECOMMENDATIONS:
      return action.recommendations;
    case CHANGE_RECOMMENDATION:
      newState[action.id] = action.recommendation;
      return newState;
    case DELETE_ALL_RECOMMENDATIONS:
      return {};
    default:
      return state;
  }
};
