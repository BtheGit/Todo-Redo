import { Map as _Map, List as _List } from 'immutable';
import {
  TODO_ADD,
  TODO_TOGGLE,
  TODO_DELETE
} from '../actions/todoActions'

const initialState = _List();

const todolist = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD: 
      return state.push(_Map(action.payload))
    case TODO_TOGGLE:
      return state.map(todo => (
          todo.get('id') === action.payload.id ? todo.update('isDone', isDone => !isDone) : todo
        ))
    case TODO_DELETE:
      return state.filter(todo => (
          todo.get('id') !== action.payload.id
        ))
    default:
      return state
  }
};

export default todolist;