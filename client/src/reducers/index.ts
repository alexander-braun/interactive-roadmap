import { combineReducers } from 'redux';
import { data } from './data';
import { calendarModal } from './calendarModal';
import { comments } from './comments';
import { status } from './statuses';
import { goalDates } from './goalDates';
import { headings } from './headings';
import { recommendations } from './recommendations';

export const rootReducer = combineReducers({
  data,
  calendarModal,
  comments,
  status,
  goalDates,
  headings,
  recommendations,
});

export type AppState = ReturnType<typeof rootReducer>;
