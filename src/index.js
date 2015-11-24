import 'babel-core/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import LambdaBlocksApp from './components/LambdaBlocksApp'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <LambdaBlocksApp />
  </Provider>,
  document.getElementById('main')
)
