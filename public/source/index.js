import 'babel-polyfill';
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunks from 'redux-thunk';
import reducer from './redux/reducers';

import App from './App';
import restaurants from './components/collections';

const store = createStore(
  reducer,
  {},
  applyMiddleware(thunks)
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="/restaurants" component={restaurants}>
          </Route>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);
