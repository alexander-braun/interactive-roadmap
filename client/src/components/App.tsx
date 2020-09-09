import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ResizeObserver from 'react-resize-observer';

//Components
import Map from './map/Map';
import SvgGenerator from './map/SvgGenerator';
import CalendarModal from './map/CalendarModal';
import Navigation from './menue/Navigation';
import Header from './header/Header';
import LoginModal from './login/LoginModal';
import RegisterModal from './register/RegisterModal';
import LoadPresetModal from './load-preset/LoadPresetModal';
import EditPresetModal from './edit-preset/EditPresetModal';
import RecoverPasswordModal from './recover-password/RecoverPasswordModal';
import ResetPasswordModal from './recover-password/ResetPasswordModal';
import SidenavSlideIn from './menue/SidenavSlideIn';
import UploadJSONModal from './uploadPreset/UploadJSONModal';
import DownloadPresetModal from './download-preset/DownloadPresetModal';
import Profile from './profile/Profile';

//Styles
import '../styles/main.css';

//Custom types
import { Nodes } from './types/Map-Data';

//Global state
import { AppState } from '../reducers';

//Helper
import History from './helper/history';
import setAuthToken from '../utils/setAuthToken';

//Actions
import {
  loadUser,
  loadPresets,
  deleteAllComments,
  deleteAllDates,
  deleteAllHeadings,
  deleteAllNodes,
  deleteAllRecommendations,
  deleteAllStatuses,
  setCurrentPreset,
  ID,
} from '../actions';

interface AppProps {
  nodes: Nodes;
  isAuthenticated: boolean | null;
  currentPreset: ID;
}

/**
 * Set Auth token when user logged in
 */
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export type IDs = [string, string][];
function App({ nodes, isAuthenticated, currentPreset }: AppProps): JSX.Element {
  const dispatch = useDispatch();

  /**
   * Loads all neccessary data to interact with the page if
   * there is a auth token.
   */
  useEffect(() => {
    if (!isAuthenticated && localStorage.getItem('token')) {
      dispatch(loadUser());
      dispatch(loadPresets());
    }
  }, [dispatch, isAuthenticated]);

  /**
   * Cleans the default preset for when the user is logged in.
   */
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

  const [sideWidth, updateSideWidth] = useState<number>(0);

  return (
    <>
      <ResizeObserver
        onResize={(rect) => {
          updateSideWidth(rect.width);
        }}
      />
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
          <Route exact path='/upload-json'>
            <UploadJSONModal />
          </Route>
          <Route exact path='/download-json'>
            <DownloadPresetModal />
          </Route>
          <Route exact path='/profile-settings'>
            <Profile />
          </Route>
        </Switch>
      </Router>
      <Navigation sideWidth={sideWidth} />
      <SidenavSlideIn />
      <Header />
      <Map nodes={nodes} />
      <SvgGenerator />
      <CalendarModal />
    </>
  );
}

interface StateProps {
  nodes: Nodes;
  isAuthenticated: boolean | null;
  currentPreset: ID;
}

const mapStateToProps = (state: AppState): StateProps => ({
  nodes: state.nodes,
  isAuthenticated: state.auth.isAuthenticated,
  currentPreset: state.currentPreset,
});

export default connect(mapStateToProps)(App);
