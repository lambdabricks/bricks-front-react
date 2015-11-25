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
      console.log("add", action.payload)
      return state
    default:
      return state
  }
}
