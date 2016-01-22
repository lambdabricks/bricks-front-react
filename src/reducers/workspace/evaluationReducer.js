import {
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE
} from '../../utils/componentNames'

export const evaluate = (workspace, elementId) => {
  const element = workspace.entities[elementId]
  let newEntities = {}
  let newUnitTests = {}

  switch (element.componentName) {
    case SELECTABLE_PIPE:
      const newWorkspace = evalNewPipe(workspace, element)
      newEntities = newWorkspace.newEntities
      newUnitTests = newWorkspace.newUnitTests

      break;
    default:
      newEntities = workspace.entities
      newUnitTests = workspace.newUnitTests
  }

  return Object.assign({}, workspace, {
    ...workspace,
    entities: newEntities,
    unitTests: newUnitTests
  })
}

const evalNewPipe = (workspace, pipe) => {
  const { input, output } = pipe
  const inputElement = workspace.entities[input.elementId]

  let newEntities = workspace.entities
  let newUnitTests = workspace.unitTests

  if(inputElement.componentName == PRIMITIVE) {
    newEntities = Object.assign({}, workspace.entities, {
      [pipe.id]: {
        ...pipe,
        type: inputElement.type,
        value: inputElement.value
      }
    })
  }

  if(inputElement.componentName == MAIN_BRICK) {
    const slotIndex = inputElement.inputSlots.findIndex((inputSlot) =>
      inputSlot.id == input.slotId)

    newUnitTests = newUnitTests.map((unitTest) => {
      const testInputId = unitTest.testInputIds[slotIndex]
      const testInput = workspace.entities[testInputId]

      return {
        ...unitTest,
        values: {
          ...unitTest.values,
          [pipe.id]: {
            type: testInput.type,
            value: testInput.value
          }
        }
      }
    })
  }

  return {
    newEntities,
    newUnitTests
  }
}
