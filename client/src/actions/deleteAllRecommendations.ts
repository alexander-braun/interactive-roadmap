import { DELETE_ALL_RECOMMENDATIONS, AppActions } from './constants';

export const deleteAllRecommendations = (): AppActions => ({
  type: DELETE_ALL_RECOMMENDATIONS,
});
