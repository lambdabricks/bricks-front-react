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

export const changePrimitiveType = (workspace, payload) => {
  const { elementId, newType } = payload

  return updateElement(workspace, elementId, { type: newType })
}

export const changePrimitiveValue = (workspace, payload) => {
  const { elementId, newValue } = payload

  return updateElement(workspace, elementId, { value: newValue })
}
