import React from 'react';
import './Todo.css';

const Todo = ({ text, id, isDone, todoToggle, todoDelete }) => {
  return(
    <div className={ `todo ${isDone ? 'todo-complete' : ''}` }>
      <div className="todo-text" onClick={ todoToggle }>{ text }</div>
      <div onClick={ todoDelete }>✘</div>
    </div>
)}

export default Todo;