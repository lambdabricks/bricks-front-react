import {
  Brick as BrickDefaults,
  Primitive as PrimitiveDefaults
} from '../../components/constants'

import {
  BRICK,
  SELECTABLE_PIPE,
  PRIMITIVE
} from '../../utils/componentNames'

import {
  newUnitTest,
  nextId
} from './workspaceReducerUtils'

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
    componentName: BRICK,
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
    componentName: PRIMITIVE,
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
    componentName: SELECTABLE_PIPE,
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
    const element = entities[key]

    // Skip if key is the elementId or is a pipe connected to this elementId
    if(!(key == elementId || pipeConnectedToElement(element, elementId)))
      newEntities[key] = element
  }

  return Object.assign({}, workspace, {
    ...workspace,
    entities: {
      ...newEntities,
      [mainBrickId]: {
        ...mainBrick,
        // Remove from mainBrick.inner all the entities removed by
        // the loop above
        inner: mainBrick.inner.filter((id) => newEntities[id])
      }
    }
  })
}

const pipeConnectedToElement = (element, elementId) => {
  return element.componentName == SELECTABLE_PIPE &&
    (element.input.elementId == elementId ||
     element.output.elementId == elementId)
}

export const addUnitTestToWorkspace = (workspace) => {
  const { mainBrickId } = workspace
  const testInputs = newUnitTest(workspace.entities[mainBrickId])

  return Object.assign({}, workspace, {
    ...workspace,
    entities: {
      ...workspace.entities,
      ...testInputs
    },
    unitTests: [
      ...workspace.unitTests,
      Object.keys(testInputs)
    ]
  })
}
