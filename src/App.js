import React from 'react';
import Routes from './containers/Routes';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import _reducers from './reducers';
import thunk from 'redux-thunk';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'; //Add in switch to read env and use either browser or memory history with SSR
const history = createHistory();
const historyMiddleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ..._reducers,
    router: routerReducer
  }), 
  applyMiddleware(
    historyMiddleware,
    thunk
  )
)


const App = () => (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

export default App;
