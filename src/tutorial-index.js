import { parse } from 'query-string'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Tutorial from './components/Tutorial'
import configureStore from './store/configureStore'

const store = configureStore()
const params = parse(location.search)

ReactDOM.render(
  <Provider store={store}>
    <Tutorial
      locale='en'
      openSiteTourAtStart={ true }
      step={ params['step'] || '1' }
    />
  </Provider>,
  document.getElementById('main')
)
