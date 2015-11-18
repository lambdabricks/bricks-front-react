import fetch from 'isomorphic-fetch'

export const REQUEST_LIBRARY = 'REQUEST_LIBRARY'
export const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY'
export const INVALIDATE_LIBRARY = 'INVALIDATE_LIBRARY'

export function invalidateLibrary() {
  return {
    type: INVALIDATE_LIBRARY,
  }
}

function requestLibrary() {
  return {
    type: REQUEST_LIBRARY,
  }
}

function receiveLibrary(items) {
  return {
    type: RECEIVE_LIBRARY,
    items: items
  }
}

function fetchLibrary() {
  return dispatch => {
    dispatch(requestLibrary())
    return fetch(`http://demo5895613.mockable.io/library/js/1`)
      .then(response => response.json())
      .then(items => dispatch(receiveLibrary(items)))
  }
}

function shouldFetchLibrary(state) {
  // const posts = state.postsByReddit[reddit]
  // if (!posts) {
  //   return true
  // }
  // if (posts.isFetching) {
  //   return false
  // }
  // return posts.didInvalidate
  return true
}

export function fetchLibraryIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchLibrary(getState())) {
      return dispatch(fetchLibrary())
    }
  }
}
