import {
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE
} from '../../utils/componentNames'

export const evaluate = (workspace, elementId) => {
  const element = workspace.entities[elementId]
  let newUnitTests = workspace.unitTests

  if(element.componentName == SELECTABLE_PIPE) {
    const { input, output } = element
    const inputElement = workspace.entities[input.elementId]

    if(inputElement.componentName == PRIMITIVE) {
      return Object.assign({}, workspace, {
        ...workspace,
        entities: {
          ...workspace.entities,
          [elementId]: {
            ...element,
            type: inputElement.type,
            value: inputElement.value
          }
        }
      })
    }

    if(inputElement.componentName == MAIN_BRICK) {
      const slotIndex = inputElement.inputSlots.findIndex((inputSlot) =>
        inputSlot.id == input.slotId)

      newUnitTests = workspace.unitTests.map((unitTest) => {
        const testInputId = unitTest.testInputIds[slotIndex]
        const testInput = workspace.entities[testInputId]

        return {
          ...unitTest,
          values: {
            ...unitTest.values,
            [elementId]: {
              type: testInput.type,
              value: testInput.value
            }
          }
        }
      })
    }
  }

  return Object.assign({}, workspace, {
    ...workspace,
    unitTests: newUnitTests
  })
}
