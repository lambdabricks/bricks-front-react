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

export const newBrick = (name) => {
  return {
    id: nextId(),
    inputSlots: [
      { id: nextId() },
      { id: nextId() }
    ],
    name,
    outputSlots: [
      { id: nextId() }
    ],
    position: BrickDefaults.defaultPosition,
    size: BrickDefaults.defaultSize,
    type: Brick
  }
}

export const newPrimitive = (name) => {
  return {
    id: nextId(),
    name,
    position: PrimitiveDefaults.defaultPosition,
    type: Primitive,
    // react or redux ignore pair with value `undefined`
    value: null
  }
}
