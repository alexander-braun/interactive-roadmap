import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { rootReducer, AppState } from '../reducers';
import { AppActions } from '../actions/constants';

const initialState = {};

const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
