import {
  ADD_BRICK,
  ADD_PRIMITIVE,
} from '../actions'
import Brick from '../components/Brick'
import Primitive from '../components/Primitive'
import {
  Brick as BrickDefaults,
  RootBrick as RootBrickDefaults,
  Primitive as PrimitiveDefaults
} from '../components/constants'

let id = 1
// TODO: Generate id's with an UID function ??
const nextId = () => id++

const initialWorkspace = {
  actions: [],
  rootBrick: {
    inner: [
    ],
    inputSlots: [
      { id: nextId() },
      { id: nextId() }
    ],
    outputSlots: [
      { id: nextId() }
    ],
    position: RootBrickDefaults.defaultPosition,
    size: RootBrickDefaults.defaultSize
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
              id: nextId(),
              name: action.payload,
              position: PrimitiveDefaults.defaultPosition,
              type: Primitive,
              // react or redux ignore pair with value `undefined`
              value: null
            }
          ]
        }
      })
    case ADD_BRICK:
      return Object.assign({}, state, {
        ...state,
        rootBrick: {
          ...state.rootBrick,
          inner: [
            ...state.rootBrick.inner,
            {
              id: nextId(),
              inputSlots: [
                { id: nextId() },
                { id: nextId() }
              ],
              name: action.payload,
              outputSlots: [
                { id: nextId() }
              ],
              position: BrickDefaults.defaultPosition,
              size: BrickDefaults.defaultSize,
              type: Brick
            }
          ]
        }
      })
    default:
      return state
  }
}
