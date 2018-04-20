import React, {Component} from 'react'
import {connect} from 'react-redux'

import {ADD_TODO} from './actionTypes/todoConstants'
import {asyncRequest} from './util/asyncUtil'

class AddTodo extends Component {
  constructor() {
    super()

    this.state = {title: '', description: '', completed: false}
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(event) {
    event.preventDefault()
    const {title, description, completed} = this.state
    const newTodo = {title, description, completed}

    this.props.asyncRequest(ADD_TODO, newTodo)
    this.setState({title: '', description: ''})
  }

  render() {
    return (
      <div>
        <h2>Add Todo</h2>
        <input value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} placeholder='Title' />
        <input value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} placeholder='Description' />
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps, {asyncRequest})(AddTodo)
