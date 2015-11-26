import {
  REQUEST_LIBRARY,
  RECEIVE_LIBRARY
} from '../actions'

const initialLibrary = {
  isFetching: false,
  items: {}
}

export function library(state = initialLibrary, action) {
  switch (action.type) {
    case RECEIVE_LIBRARY:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items
      })
    case REQUEST_LIBRARY:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    default:
      return state
  }
}
