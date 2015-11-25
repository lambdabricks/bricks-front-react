import {
  ADD_PRIMITIVE,
} from '../actions'

const initialWorkspace = {
  actions: [],
  rootBrick: {
    inner: [
    ],
    inputSlots: [
      { id: 1 },
      { id: 2 }
    ],
    outputSlots: [
      { id: 3 }
    ],
    position: {
      x: 50,
      y: 50
    },
    size: {
      height: 400,
      width: 350
    }
  }
}

export function workspace(state = initialWorkspace, action) {
  switch (action.type) {
    case ADD_PRIMITIVE:
      return Object.assign({}, state, {
        ...state,
        rootBrick: {
          ...state.rootBrick,
          inner: [
            ...state.rootBrick.inner,
            {
              id: 101,
              position: { x: 50, y: 50 },
              value: undefined
            }
          ]
        }
      })
    default:
      return state
  }
}
