import {
  ADD_PRIMITIVE,
} from '../actions'

const initialWorkspace = {
  actions: [],
  rootBrick: {
    brick: {
      inputSlots: [
        { id: 5 },
        { id: 6 }
      ],
      name: "split",
      outputSlots: [
        { id: 7 }
      ],
      position: {
        x: 50,
        y: 50
      },
      size: {
        height: 40,
        width: 100
      }
    },
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
              // react or redux ignore pair with value `undefined`
              value: null
            }
          ]
        }
      })
    default:
      return state
  }
}
