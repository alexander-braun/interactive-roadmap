import React, { useEffect } from 'react';
import Map from './map/Map';
import '../styles/main.css';
import { Nodes } from './types/Map-Data';
import { AppState } from '../reducers';
import { connect } from 'react-redux';
import SvgGenerator from './map/SvgGenerator';
import CalendarModal from './map/CalendarModal';
import Navigation from './header/Navigation';
import Header from './header/Header';
import LoginModal from './login/LoginModal';
import RegisterModal from './login/RegisterModal';
import { Router, Route, Switch } from 'react-router-dom';
import History from './helper/history';
import setAuthToken from '../utils/setAuthToken';
import LoadPresetModal from './load-preset/LoadPresetModal';
import { loadUser } from '../actions/authenticate';
import { loadPresets } from '../actions/presets';
import { useDispatch } from 'react-redux';
import {
  ID,
  Preset,
  PayloadUser,
  Comments,
  Dates,
  Headings,
  Recommendations,
  Statuses,
} from '../actions/constants';
import EditPresetModal from './edit-preset/EditPresetModal';
import { deleteAllComments } from '../actions/deleteAllComments';
import { deleteAllDates } from '../actions/deleteAllDates';
import { deleteAllHeadings } from '../actions/deleteAllHeadings';
import { deleteAllNodes } from '../actions/deleteAllNodes';
import { deleteAllRecommendations } from '../actions/deleteAllRecommendations';
import { deleteAllStatuses } from '../actions/deleteAllStatuses';
import { setCurrentPreset } from '../actions/setCurrentPreset';

interface AppProps {
  nodes: Nodes;
  isAuthenticated: boolean | null;
  currentPreset: ID;
  presets: Preset[];

  user: PayloadUser | null;
  comments: Comments;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  status: Statuses;
}

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export type IDs = [string, string][];
function App({
  nodes,
  isAuthenticated,
  currentPreset,
  presets,
  user,
  comments,
  goalDates,
  headings,
  recommendations,
  status,
}: AppProps): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated && localStorage.getItem('token')) {
      dispatch(loadUser());
      dispatch(loadPresets());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (!currentPreset.length) {
      History.push('/');
      dispatch(deleteAllComments());
      dispatch(deleteAllDates());
      dispatch(deleteAllHeadings());
      dispatch(deleteAllNodes());
      dispatch(deleteAllRecommendations());
      dispatch(deleteAllStatuses());
      dispatch(setCurrentPreset(''));
    }
  }, [currentPreset, dispatch]);

  return (
    <div className='App'>
      <Router history={History}>
        <Switch>
          <Route exact path='/login'>
            <LoginModal />
          </Route>
          <Route exact path='/register'>
            <RegisterModal />
          </Route>
          <Route exact path='/load'>
            <LoadPresetModal />
          </Route>
          <Route path='/edit-preset/'>
            <EditPresetModal />
          </Route>
        </Switch>
      </Router>
      <Navigation />
      <Header />
      <Map nodes={nodes} />
      <SvgGenerator />
      <CalendarModal />
    </div>
  );
}

interface StateProps {
  nodes: Nodes;
  isAuthenticated: boolean | null;
  currentPreset: ID;
  presets: Preset[];

  user: PayloadUser | null;
  comments: Comments;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  status: Statuses;
}

const mapStateToProps = (state: AppState): StateProps => ({
  nodes: state.nodes,
  isAuthenticated: state.auth.isAuthenticated,
  currentPreset: state.currentPreset,
  presets: state.presets,

  user: state.auth.user,
  comments: state.comments,
  goalDates: state.goalDates,
  headings: state.headings,
  recommendations: state.recommendations,
  status: state.status,
});

export default connect(mapStateToProps)(App);
