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
      newUnitTests = workspace.unitTests.map((unitTest) => {
        return {
          ...unitTest,
          values: {
            ...unitTest.values,
            [elementId]: {
              type: inputElement.type,
              value: inputElement.value
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
