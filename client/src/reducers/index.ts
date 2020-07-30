import { combineReducers } from 'redux';
import { data } from './data';
import { inView } from './InView';
import { editCardModal } from './editCardModal';

export const rootReducer = combineReducers({
  data,
  inView,
  editCardModal,
});

export type AppState = ReturnType<typeof rootReducer>;
