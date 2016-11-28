import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import config from './actions';
import fetchCollections from './reducers/collections';

const reducer = combineReducers({
  config,
  fetchCollections,
  routing: routerReducer,
});

export default reducer;