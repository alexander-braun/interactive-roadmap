import { combineReducers } from 'redux';
import { data } from './data';
import { inView } from './InView';

export const rootReducer = combineReducers({
  data,
  inView,
});

export type AppState = ReturnType<typeof rootReducer>;
