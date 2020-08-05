import { combineReducers } from 'redux';
import { data } from './data';
import { calendarModal } from './calendarModal';

export const rootReducer = combineReducers({
  data,
  calendarModal,
});

export type AppState = ReturnType<typeof rootReducer>;
