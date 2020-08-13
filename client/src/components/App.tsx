import React, { useEffect } from 'react';
import Map from './map/Map';
import '../styles/main.css';
import { Nodes } from './types/Map-Data';
import { AppState } from '../reducers';
import { connect } from 'react-redux';
import SvgGenerator from './map/SvgGenerator';
import CalendarModal from './map/CalendarModal';
import Navigation from './menue/Navigation';
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
import { ID, Preset } from '../actions/constants';
import EditPresetModal from './edit-preset/EditPresetModal';
import { deleteAllComments } from '../actions/deleteAllComments';
import { deleteAllDates } from '../actions/deleteAllDates';
import { deleteAllHeadings } from '../actions/deleteAllHeadings';
import { deleteAllNodes } from '../actions/deleteAllNodes';
import { deleteAllRecommendations } from '../actions/deleteAllRecommendations';
import { deleteAllStatuses } from '../actions/deleteAllStatuses';
import { setCurrentPreset } from '../actions/setCurrentPreset';
import RecoverPasswordModal from './RecoverPassword/RecoverPasswordModal';
import ResetPasswordModal from './RecoverPassword/ResetPasswordModal';
import SidenavSlideIn from './menue/SidenavSlideIn';

interface AppProps {
  nodes: Nodes;
  isAuthenticated: boolean | null;
  currentPreset: ID;
  presets: Preset[];
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
}: AppProps): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated && localStorage.getItem('token')) {
      dispatch(loadUser());
      dispatch(loadPresets());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (!currentPreset.length && isAuthenticated) {
      dispatch(deleteAllComments());
      dispatch(deleteAllDates());
      dispatch(deleteAllHeadings());
      dispatch(deleteAllNodes());
      dispatch(deleteAllRecommendations());
      dispatch(deleteAllStatuses());
      dispatch(setCurrentPreset(''));
    }
  }, [currentPreset, dispatch, isAuthenticated]);

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
          <Route exact path='/forgotpassword'>
            <RecoverPasswordModal />
          </Route>
          <Route path='/resetpassword/'>
            <ResetPasswordModal />
          </Route>
          <Route path='/edit-preset/'>
            <EditPresetModal />
          </Route>
        </Switch>
      </Router>
      <Navigation />
      <SidenavSlideIn />
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
}

const mapStateToProps = (state: AppState): StateProps => ({
  nodes: state.nodes,
  isAuthenticated: state.auth.isAuthenticated,
  currentPreset: state.currentPreset,
  presets: state.presets,
});

export default connect(mapStateToProps)(App);
