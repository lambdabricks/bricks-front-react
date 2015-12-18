import {
  Brick as BrickDefaults,
  Primitive as PrimitiveDefaults
} from '../../components/constants'

import Brick from '../../containers/Brick'
import Pipe from '../../containers/Pipe'
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
    Component: Brick,
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
    size: BrickDefaults.defaultSize
  }
}

export const newPrimitive = (name) => {
  return {
    Component: Primitive,
    id: nextId(),
    name,
    position: PrimitiveDefaults.defaultPosition,
    size: PrimitiveDefaults.defaultSize,
    // react or redux ignore pair with value `undefined`
    value: null
  }
}

export const newPipe = (workspace) => {
  const { input, output } = workspace.selectionState.pipe

  return {
    Component: Pipe,
    id: nextId(),
    input,
    name: null,
    output,
    value: null
  }
}
