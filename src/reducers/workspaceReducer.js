import {
  ADD_BRICK,
  ADD_PRIMITIVE,
} from '../actions'
import Brick from '../components/Brick'
import Primitive from '../components/Primitive'

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

// TODO: Generate id's with an UID function ??
let id = 1

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
              id: id++,
              name: action.payload,
              position: { x: 50, y: 50 },
              type: Primitive,
              // react or redux ignore pair with value `undefined`
              value: null
            }
          ]
        }
      })
    case ADD_BRICK:
      console.log("add", action.payload)
      return state
    default:
      return state
  }
}
