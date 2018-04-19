import React, {Component} from 'react'

class AddTodo extends Component {
  constructor() {
    super()

    this.state = {title: '', description: '', completed: false}
  }

  render() {
    return (
      <div>
        <h2>Add Todo</h2>
        <input value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} placeholder='Title' />
        <input value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} placeholder='Description' />
        <button>Add</button>
      </div>
    )
  }
}

export default AddTodo
