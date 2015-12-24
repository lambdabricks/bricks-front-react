import {
  Brick as BrickDefaults,
  Primitive as PrimitiveDefaults
} from '../../components/constants'

import {
  BRICK,
  PIPE,
  PRIMITIVE
} from '../../utils/componentsEnum'

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

export const newBrick = (brick) => {
  const { arity, name } = brick
  let inputSlots = []

  for(var i=0; i < arity; i++)
    inputSlots.push({ id: nextId() })

  return {
    Component: BRICK,
    id: nextId(),
    inputSlots,
    name,
    outputSlots: [
      { id: nextId() }
    ],
    position: BrickDefaults.defaultPosition,
    size: BrickDefaults.defaultSize
  }
}

export const newPrimitive = (type) => {
  return {
    Component: PRIMITIVE,
    id: nextId(),
    position: PrimitiveDefaults.defaultPosition,
    size: PrimitiveDefaults.defaultSize,
    type: type,
    // react or redux ignore pair with value `undefined`
    value: null
  }
}

export const newPipe = (workspace) => {
  const { input, output } = workspace.selectionState.pipe

  return {
    Component: PIPE,
    id: nextId(),
    input,
    type: null,
    output,
    value: null
  }
}
