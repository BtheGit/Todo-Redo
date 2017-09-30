import React from 'react';
import './TodoForm.css';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.todoAdd(this.state.inputValue)
    this.setState({ inputValue: '' })
  }

  onChange = e => {
    e.preventDefault()
    this.setState({inputValue: e.target.value})
  }

  render() {
    return(
      <div className="todo-form">
        <form onSubmit={ this.onSubmit }>
          <input 
            type="text" 
            value={ this.state.inputValue } 
            onChange={ this.onChange }
            placeholder="Enter todo..."
          />
        </form>
      </div>
    )
  }
}

export default TodoForm;