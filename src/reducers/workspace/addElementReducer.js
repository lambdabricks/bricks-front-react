import {
  Brick as BrickDefaults,
  Primitive as PrimitiveDefaults
} from '../../components/constants'

import Brick from '../../containers/Brick'
// import Pipe from '../../components/Pipe'
import Primitive from '../../containers/Primitive'

import { nextId } from './workspaceReducerUtils'

export const appendToInner = (workspace, element) => {
  const mainBrickId = workspace.mainBrickId
  const mainBrick = workspace.entities[mainBrickId]

  return Object.assign({}, workspace, {
    ...workspace,
    entities: {
      ...workspace.entities,
      [mainBrickId]: {
        ...mainBrick,
        inner: [
          ...mainBrick.inner,
          element.id
        ]
      },
      [element.id]: element
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

export const newPipe = (workspace) => {
  const { input, output } = workspace.selectionState.pipe

  return {
    id: nextId(),
    input,
    output,
    // type: Pipe,
    value: null
  }
}
