import React from 'react';
import Todo from './Todo.js';
import './Todos.css';

//todolist is an Immutable.js List of Immutable.js Maps

const Todos = ({ todolist, todoToggle, todoDelete }) => (
  <div className="todolist-todos">
    {todolist.map((todo, idx) => {
        const id = todo.get('id')
        return (
          <Todo 
            key = { idx }
            text = { todo.get('text') }
            id = { id }
            isDone = { todo.get('isDone')}
            todoToggle = { () => todoToggle(id) }
            todoDelete = { () => todoDelete(id) }
          />
        )
      })}
  </div>
)

export default Todos;