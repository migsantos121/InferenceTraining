/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store, { history } from './store';
require('../public/stylesheets/style.css');
// require('../public/stylesheets/react-dropdown-menu.css');

ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>
  , document.getElementById('app')
);
