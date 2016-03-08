import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE,
  TEST_INPUT
} from '../../utils/componentNames'

const updateElementInAllUnitTests = (workspace, elementId, newProps) => {
  const { unitTests } = workspace

  return Object.assign({}, workspace, {
    ...workspace,
    unitTests: unitTests.map((unitTest) =>
      updateElementValues(unitTest, elementId, newProps)
    )
  })
}

const updateElementInUnitTest = (workspace, elementId, workspaceIndex, newProps) => {
  const { unitTests } = workspace

  return Object.assign({}, workspace, {
    ...workspace,
    unitTests: [
      ...unitTests.slice(0, workspaceIndex),
      updateElementValues(unitTests[workspaceIndex], elementId, newProps),
      ...unitTests.slice(workspaceIndex + 1)
    ]
  })
}

const updateElementValues = (unitTest, elementId, newProps) => {
  return Object.assign({}, unitTest, {
    ...unitTest,
    values: {
      ...unitTest.values,
      [elementId]: {
        ...unitTest.values[elementId],
        ...newProps
      }
    }
  })
}

export const changePrimitiveValue = (workspace, payload) => {
  const {
    elementId,
    newValue
  } = payload

  return updateElementInAllUnitTests(
    workspace,
    elementId,
    {
      componentName: PRIMITIVE,
      value: newValue
    }
  )
}

export const changeTestInputType = (workspace, payload) => {
  const {
    elementId,
    newType,
    workspaceIndex
  } = payload

  return updateElementInUnitTest(
    workspace,
    elementId,
    workspaceIndex,
    {
      componentName: TEST_INPUT,
      type: newType
    }
  )
}

export const changeTestInputValue = (workspace, payload) => {
  const {
    elementId,
    newValue,
    workspaceIndex
  } = payload

  return updateElementInUnitTest(
    workspace,
    elementId,
    workspaceIndex,
    {
      componentName: TEST_INPUT,
      value: newValue
    }
  )
}

export const linkSlots = (workspace, payload) => {
  const { input, output } = payload
  const outputElement = workspace.entities[output.elementId]
  let newOutputElementSlots = {}
  let newInputElementSlots = {}
  let inputElement = workspace.entities[input.elementId]

  if(inputElement.componentName == MAIN_BRICK) {
    inputElement = workspace.entities[input.slotId]
  }

  const outputSlot = inputElement.outputSlots[input.slotId]

  if(outputSlot.outputElementIds.indexOf(outputElement.id) == -1) {
    newInputElementSlots = {
      outputSlots: _addPropsToSlot(
        inputElement.outputSlots,
        input.slotId,
        {
          outputElementIds: [
            ...outputSlot.outputElementIds,
            outputElement.id
          ]
        }
      )
    }
  }

  if(outputElement.componentName == BRICK) {
    const { inputSlots } = outputElement

    newOutputElementSlots = {
      inputSlots: addValueToSlots(inputSlots, input, output)
    }
  }
  if(outputElement.componentName == MAIN_BRICK) {
    const { outputSlots } = outputElement

    newOutputElementSlots = {
      outputSlots: addValueToSlots(outputSlots, input, output)
    }
  }

  return Object.assign({}, workspace, {
    entities: {
      ...workspace.entities,
      [outputElement.id]: {
        ...outputElement,
        ...newOutputElementSlots
      },
      [inputElement.id]: {
        ...inputElement,
        ...newInputElementSlots
      }
    }
  })
}

const addValueToSlots = (slots, input, output) => {
  return _addPropsToSlot(slots, output.slotId, { valueId: input.slotId })
}

const _addPropsToSlot = (slots, slotId, newProps) => {
  return Object.assign({}, slots, {
    [slotId]: {
      ...slots[slotId],
      ...newProps
    }
  })
}
