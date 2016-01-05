import {
  Brick as BrickDefaults,
  Primitive as PrimitiveDefaults
} from '../../components/constants'

import {
  BRICK,
  CLICKABLE_PIPE,
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
    Component: CLICKABLE_PIPE,
    id: nextId(),
    input,
    type: null,
    output,
    value: null
  }
}

export const removeElementInWorkspace = (workspace, payload) => {
  const { elementId } = payload
  const { entities, mainBrickId } = workspace
  const mainBrick = entities[mainBrickId]

  let newEntities = {}
  for(let key in entities) {
    if(key != elementId)
      newEntities[key] = entities[key]
  }

  return Object.assign({}, workspace, {
    ...workspace,
    entities: {
      ...newEntities,
      [mainBrickId]: {
        ...mainBrick,
        inner: mainBrick.inner.filter((id) => id != elementId)
      }
    }
  })
}
