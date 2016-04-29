import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Tutorial from './components/Tutorial'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Tutorial />
  </Provider>,
  document.getElementById('main')
)
