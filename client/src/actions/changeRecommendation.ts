import {
  CHANGE_RECOMMENDATION,
  AppActions,
  ID,
  Recommendation,
} from './constants';

export const changeRecommendation = (
  id: ID,
  recommendation: Recommendation
): AppActions => ({
  type: CHANGE_RECOMMENDATION,
  id,
  recommendation,
});
