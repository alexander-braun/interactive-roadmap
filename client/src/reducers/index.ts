import { combineReducers } from 'redux';
import { nodes } from './nodes';
import { calendarModal } from './calendarModal';
import { comments } from './comments';
import { status } from './statuses';
import { goalDates } from './goalDates';
import { headings } from './headings';
import { recommendations } from './recommendations';
import { auth } from './auth';
import { presets } from './presets';
import { currentPreset } from './currentPreset';
import { alert } from './alert';

export const rootReducer = combineReducers({
  nodes,
  calendarModal,
  comments,
  status,
  goalDates,
  headings,
  recommendations,
  auth,
  presets,
  currentPreset,
  alert,
});

export type AppState = ReturnType<typeof rootReducer>;
