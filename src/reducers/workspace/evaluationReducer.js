import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE
} from '../../utils/componentNames'

import {
  elementInputValueIds,
  evalBrick
} from '../../utils/evalUtils'

export const evaluateAllWorkspaces = (workspace, elementId) => {
  const brick = workspace.entities[elementId]
  const valueIds = elementInputValueIds(brick)

  const outputSlotId = Object.keys(brick.outputSlots)[0]
  const outputSlot = brick.outputSlots[outputSlotId]

  const newUnitTests = workspace.unitTests.map((unitTest) => {
    const brickOutput = evalBrick(brick, valueIds, unitTest)

    return Object.assign({}, unitTest, {
      values: {
        ...unitTest.values,
        [outputSlotId]: {
          componentName: BRICK,
          type: typeof brickOutput,
          value: brickOutput.toString()
        }
      }
    })
  })

  return Object.assign({}, workspace, {
    ...workspace,
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
