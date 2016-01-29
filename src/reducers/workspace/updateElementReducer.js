const updateElementInAllWorkspaces = (workspace, elementId, newProps) => {
  const { unitTests } = workspace

  return Object.assign({}, workspace, {
    ...workspace,
    unitTests: unitTests.map((unitTest) =>
      updateElementValues(unitTest, elementId, newProps)
    )
  })
}

const updateElementInWorkspace = (workspace, elementId, workspaceIndex, newProps) => {
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

  return updateElementInAllWorkspaces(
    workspace,
    elementId,
    { value: newValue }
  )
}

export const changeTestInputType = (workspace, payload) => {
  const {
    elementId,
    newType,
    workspaceIndex
  } = payload

  return updateElementInWorkspace(
    workspace,
    elementId,
    workspaceIndex,
    { type: newType }
  )
}

export const changeTestInputValue = (workspace, payload) => {
  const {
    elementId,
    newValue,
    workspaceIndex
  } = payload

  return updateElementInWorkspace(
    workspace,
    elementId,
    workspaceIndex,
    { value: newValue }
  )
}
