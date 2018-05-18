import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';


export default(
  <Route name="app" component={App} path="/">
    <IndexRoute component={HomePage} name="homepage" />
  </Route>
);