import { ADD_RECOMMENDATIONS, AppActions, Recommendations } from './constants';

export const addRecommendations = (
  recommendations: Recommendations
): AppActions => ({
  type: ADD_RECOMMENDATIONS,
  recommendations,
});
