import React from 'react';
import logo from './logo.svg';
import TodoList from './containers/TodoList';
import Home from './containers/Home';
import About from './containers/About';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import _reducers from './reducers';
import thunk from 'redux-thunk';

import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/todolist' component={ TodoList } />
        <Route exact path='/about' component={ About } />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App;
