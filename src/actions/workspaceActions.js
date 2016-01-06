import { isNotEmpty } from '../utils'

export const ADD_PIPE = 'ADD_PIPE'
export const CLEAR_SLOT_SELECTION = 'CLEAR_SLOT_SELECTION'
export const DESELECT_ELEMENT = 'DESELECT_ELEMENT'
export const MOVE_ELEMENT = 'MOVE_ELEMENT'
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT'
export const START_DRAG = 'START_DRAG'
export const STOP_DRAG = 'STOP_DRAG'
export const SELECT_ELEMENT = 'SELECT_ELEMENT'
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

    if(isNotEmpty(input) && isNotEmpty(output)) {
      dispatch(addPipe())
      dispatch(clearSlotSelection())
    }
  }
}

export const addPipe = () => {
  return {
    type: ADD_PIPE
  }
}

export const clearSlotSelection = () => {
  return {
    type: CLEAR_SLOT_SELECTION
  }
}

export const selectElement = (elementId, mousePosition) => {
  return {
    type: SELECT_ELEMENT,
    payload: {
      elementId,
      mousePosition
    }
  }
}

export const removeElement = (elementId) => {
  return (dispatch, getState) => {
    dispatch(deselectElement())
    dispatch(_removeElement(elementId))
  }
}

export const _removeElement = (elementId) => {
  return {
    type: REMOVE_ELEMENT,
    payload: {
      elementId
    }
  }
}

export const deselectElement = () => {
  return {
    type: DESELECT_ELEMENT
  }
}
