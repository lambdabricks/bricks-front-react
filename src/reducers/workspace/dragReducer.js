export const updateElementInWorkspace = (workspace, payload) => {
  const { selectionState } = workspace

  if(!selectionState.dragStarted) {
    return workspace
  }

  const { currentMousePosition } = payload
  const { element } = selectionState
  const originalElement = workspace.entities[element.id]

  return Object.assign({}, workspace, {
    ...workspace,
    entities: {
      ...workspace.entities,
      [element.id]: {
        ...originalElement,
        position: {
          x: element.startPosition.x + currentMousePosition.x - element.mouseDownPosition.x,
          y: element.startPosition.y + currentMousePosition.y - element.mouseDownPosition.y,
        }
      }
    }
  })
}

export const addDragStartedToWorkspace = (workspace, payload) => {
  const  {
    elementId,
    elementPosition,
    mousePosition
  } = payload

  return setDragStateToWorkspace(
    workspace,
    {
      dragStarted: true,
      element: {
        id: elementId,
        mouseDownPosition: mousePosition,
        startPosition: elementPosition
      }
    }
  )
}

export const addDragStoppedToWorkspace = (workspace, payload) => {
  return setDragStateToWorkspace(
    workspace,
    {
      dragStarted: false,
      element: { }
    }
  )
}

export const setDragStateToWorkspace = (workspace, dragState) => {
  return Object.assign({}, workspace, {
    ...workspace,
    selectionState: {
      ...workspace.selectionState,
      ...dragState
    }
  })
}
