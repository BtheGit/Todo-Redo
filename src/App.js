import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import _reducers from './reducers'
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({..._reducers}), 
  applyMiddleware(thunk)
)


const App = () => (
  <Provider store={store}>
    <div className="App">
      <TodoList />
    </div>
  </Provider>
)

export default App;
