import {ADD_TODO} from '../actionTypes/todoConstants'
import {asyncNames} from '../util/asyncUtil'

const initialState = {adding: false, todos: [], addingFailed: false, addingError: ''}

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case asyncNames(ADD_TODO).loading:
      return {...state, adding: action.data}
    case asyncNames(ADD_TODO).success:
      return {...state, todos: [...state.todos, action.data]}
    case asyncNames(ADD_TODO).failure:
      return {...state, adding: false, addingFailed: action.data.status, addingError: action.data.error}
    default:
      return state
  }
}

export default todosReducer
