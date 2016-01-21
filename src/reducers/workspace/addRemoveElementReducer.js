import {
  newBrick,
  newPipe,
  newPrimitive,
  newUnitTest,
  pipeConnectedToElement
} from './workspaceReducerUtils'

export const addBrickToWorkspace = (workspace, attributes) =>
  addToWorkspace(workspace, newBrick(attributes))

export const addPipeToWorkspace = (workspace) =>
  addToWorkspace(workspace, newPipe(workspace))

export const addPrimitiveToWorkspace = (workspace, attributes) =>
  addToWorkspace(workspace, newPrimitive(attributes))

export const addUnitTestToWorkspace = (workspace) => {
  const { mainBrickId } = workspace
  const testInputs = newUnitTest(workspace.entities[mainBrickId])

  let testInputIds = []

  for(var testInput in testInputs)
    testInputIds.push(testInputs[testInput].id)

  return Object.assign({}, workspace, {
    ...workspace,
    entities: {
      ...workspace.entities,
      ...testInputs
    },
    unitTests: [
      ...workspace.unitTests,
      {
        testInputIds
      }
    ]
  })
}

const addToWorkspace = (workspace, element) => {
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
