import { combineReducers } from 'redux';
import { data } from './data';
import { calendarModal } from './calendarModal';
import { comments } from './comments';
import { status } from './statuses';
import { goalDates } from './goalDates';
import { headings } from './headings';
import { recommendations } from './recommendations';
import { auth } from './auth';

export const rootReducer = combineReducers({
  data,
  calendarModal,
  comments,
  status,
  goalDates,
  headings,
  recommendations,
  auth,
});

export type AppState = ReturnType<typeof rootReducer>;
