import {
  Brick as BrickDefaults,
  Primitive as PrimitiveDefaults
} from '../../components/constants'

import Brick from '../../containers/Brick'
import Primitive from '../../containers/Primitive'

import { nextId } from './workspaceReducerUtils'

export const appendToInner = (state, element) => {
  return Object.assign({}, state, {
    ...state,
    rootBrick: {
      ...state.rootBrick,
      inner: [
        ...state.rootBrick.inner,
        element
      ]
    }
  })
}

export const newBrick = (action) => {
  return {
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
}

export const newPrimitive = (action) => {
  return {
    id: nextId(),
    name: action.payload,
    position: PrimitiveDefaults.defaultPosition,
    type: Primitive,
    // react or redux ignore pair with value `undefined`
    value: null
  }
}
