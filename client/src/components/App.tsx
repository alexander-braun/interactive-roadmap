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

interface AppProps {
  nodes: Nodes;
  isAuthenticated: boolean | null;
}

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export type IDs = [string, string][];
function App({ nodes, isAuthenticated }: AppProps): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadPresets());
  }, [dispatch]);

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
}

const mapStateToProps = (state: AppState): StateProps => ({
  nodes: state.nodes,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
