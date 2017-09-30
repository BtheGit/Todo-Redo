import React from 'react';
import { Todos, TodoForm, TodoHeader } from '../components/TodoList/';
import { connect } from 'react-redux';
import { todoAdd, todoToggle, todoDelete } from '../actions/todoActions.js';
import './TodoList.css';


const TodoList = props => (
  <div className="todolist-container">
    <TodoHeader />
    <TodoForm 
      todoAdd = { props.todoAdd }
    />
    <Todos 
      todolist   = { props.todolist }
      todoToggle = { props.todoToggle }
      todoDelete = { props.todoDelete }
    />
  </div>
)


const mapStateToProps = ({ todolist }) => ({todolist})
const mapDispatchToProps = dispatch => ({
  todoAdd: text => dispatch(todoAdd(text)),
  todoToggle: id => dispatch(todoToggle(id)),
  todoDelete: id => dispatch(todoDelete(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
