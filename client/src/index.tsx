import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'core-js/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'react-router-dom';
import history from './components/helper/history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
