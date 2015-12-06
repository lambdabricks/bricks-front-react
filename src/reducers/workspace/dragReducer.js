export const updateElementInWorkspace = (state, action) => {
  return Object.assign({}, state, {
    ...state,
    rootBrick: {
      ...state.rootBrick,
      inner: state.rootBrick.inner.map((element) => {
        const { dragState } = state
        if(element.id === dragState.elementId) {
          const { startElementPosition, startMousePosition } = dragState
          const { currentMousePosition } = action.payload

          return {
            ...element,
            position: {
              x: startElementPosition.x + currentMousePosition.x - startMousePosition.x,
              y: startElementPosition.y + currentMousePosition.y - startMousePosition.y,
            }
          }
        }
        return element
      })
    }
  })
}

export const addDragStartedToWorkspace = (state, action) => {
  let { elementId, elementPosition, mousePosition } = action.payload

  return setDragStateToWorkspace(
    state,
    {
      dragStarted: true,
      elementId: elementId,
      startElementPosition: elementPosition,
      startMousePosition: mousePosition
    }
  )
}

export const addDragStoppedToWorkspace = (state, action) => {
  return setDragStateToWorkspace(
    state,
    {
      dragStarted: false
    }
  )
}

export const setDragStateToWorkspace = (state, dragState) => {
  return Object.assign({}, state, {
    ...state,
    dragState
  })
}
