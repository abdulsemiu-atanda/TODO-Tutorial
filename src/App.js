import React, {Component} from 'react'
import {connect} from 'react-redux'

import AddTodo from './AddTodo.react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    const {todos} = this.props.todos

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.props.todos.addingFailed && <p style={{color: 'red'}}>{this.props.todos.addingError}</p>}
        <AddTodo />
        <div>
          <h2>Todos</h2>
          {todos.map((todo, index) => {
            // using index here as key is as a result of the fact that this is a tutorial as it is knoww to cause weirdness in React
            // So you something that us more stable like a db id field in a live app
            return (
              <ul key={index}>
                <h3>{todo.title}</h3>
                <li>Description: {todo.description}</li>
                <li>Completed: {todo.completed ? 'Yes': 'No'}</li>
              </ul>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(App)
