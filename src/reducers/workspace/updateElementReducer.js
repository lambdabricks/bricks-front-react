import {
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
