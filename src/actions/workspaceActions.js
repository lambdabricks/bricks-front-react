export const ADD_PIPE = 'ADD_PIPE'
export const MOVE_ELEMENT = 'MOVE_ELEMENT'
export const REMOVE_SELECTION = 'REMOVE_SELECTION'
export const START_DRAG = 'START_DRAG'
export const STOP_DRAG = 'STOP_DRAG'
export const SELECT_SLOT = 'SELECT_SLOT'

export const startDrag = (elementId, mousePosition, elementPosition) => {
  return {
    type: START_DRAG,
    payload: {
      elementId,
      mousePosition,
      elementPosition
    }
  }
}

export const stopDrag = () => {
  return {
    type: STOP_DRAG
  }
}

export const moveElement = (currentMousePosition) => {
  return {
    type: MOVE_ELEMENT,
    payload: {
      currentMousePosition
    }
  }
}

export const addPipeOrSelectSlot = (type, elementId, slotId) => {
  return (dispatch, getState) => {
    dispatch(selectSlot(type, elementId, slotId))
    dispatch(addPipeIfBothSlotsSelected())
  }
}

// type: 'input' or 'output' slot
export const selectSlot = (type, elementId, slotId) => {
  return {
    type: SELECT_SLOT,
    payload: {
      elementId,
      slotId,
      type
    }
  }
}

export const addPipeIfBothSlotsSelected = () => {
  return (dispatch, getState) => {
    const { input, output } = getState().workspace.selectionState.pipe

    if(input !== null && output !== null) {
      dispatch(addPipe())
      dispatch(removeSelection())
    }
  }
}

export const addPipe = () => {
  return {
    type: ADD_PIPE
  }
}

export const removeSelection = () => {
  return {
    type: REMOVE_SELECTION
  }
}
