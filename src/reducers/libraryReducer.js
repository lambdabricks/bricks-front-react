import { parse } from 'query-string'

import {
  REQUEST_LIBRARY,
  RECEIVE_LIBRARY
} from '../actions'

const initialLibrary = {
  id: parse(location.search)['id'] || 1,
  isFetching: false,
  items: {}
}

export const library = (state = initialLibrary, action) => {
  const { payload, type } = action

  switch (type) {
    case RECEIVE_LIBRARY:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: payload.items
      })
    case REQUEST_LIBRARY:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    default:
      return state
  }
}
