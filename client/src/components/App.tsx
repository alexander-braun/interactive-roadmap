import React from 'react';
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

interface AppProps {
  data: Nodes;
  isAuthenticated: boolean | null;
}

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export type IDs = [string, string][];
function App({ data, isAuthenticated }: AppProps): JSX.Element {
  return (
    <div className='App'>
      <Router history={History}>
        <Switch>
          <Route exact path='/'>
            <Navigation />
            <Header />
            <Map data={data} />
            <SvgGenerator />
            <CalendarModal />
          </Route>
          <Route exact path='/login'>
            <Navigation />
            <Header />
            <Map data={data} />
            <SvgGenerator />
            <LoginModal />
          </Route>
          <Route exact path='/register'>
            <Navigation />
            <Header />
            <Map data={data} />
            <SvgGenerator />
            <RegisterModal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

interface StateProps {
  data: Nodes;
  isAuthenticated: boolean | null;
}

const mapStateToProps = (state: AppState): StateProps => ({
  data: state.data,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
