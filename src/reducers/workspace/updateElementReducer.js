const updateElement = (workspace, elementId, newProps) => {
  const element = workspace.entities[elementId]

  return Object.assign({}, workspace, {
    ...workspace,
    entities: {
      ...workspace.entities,
      [elementId]: {
        ...element,
        ...newProps
      }
    }
  })
}

const updateElementInWorkspace = (workspace, elementId, workspaceIndex, newProps) => {
  const { unitTests } = workspace
  const elementValues = unitTests[workspaceIndex].values[elementId]

  return Object.assign({}, workspace, {
    ...workspace,
    unitTests: [
      ...unitTests.slice(0, workspaceIndex),
      Object.assign({}, unitTests[workspaceIndex], {
        values: {
          ...unitTests[workspaceIndex].values,
          [elementId]: {
            elementValues,
            ...newProps
          }
        }
      }),
      ...unitTests.slice(workspaceIndex + 1)
    ]
  })
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

export const changePrimitiveValue = (workspace, payload) => {
  const { elementId, newValue } = payload

  return updateElement(workspace, elementId, { value: newValue })
}
