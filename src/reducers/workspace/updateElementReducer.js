export const changePrimitiveType = (workspace, payload) => {
  const { elementId, newType } = payload
  const element = workspace.entities[elementId]

  return Object.assign({}, workspace, {
    ...workspace,
    entities: {
      ...workspace.entities,
      [elementId]: {
        ...element,
        type: newType
      }
    }
  })
}
