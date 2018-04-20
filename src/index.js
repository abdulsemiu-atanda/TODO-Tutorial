import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import {Provider} from 'react-redux'

import './index.css'
import App from './App'
import rootReducer from './reducers'

import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()))

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
