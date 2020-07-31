import { combineReducers } from 'redux';
import { data } from './data';

export const rootReducer = combineReducers({
  data,
});

export type AppState = ReturnType<typeof rootReducer>;
