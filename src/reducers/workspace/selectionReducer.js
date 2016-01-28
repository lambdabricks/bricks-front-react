import * as Utils from '../../utils'

export const updateSlotSelectionStateInWorkspace = (state, payload) => {
  const { elementId, slotId, type } = payload
  const selectedSlots = Utils.selectedSlots(state)
  let slotSelectionState = { }

  // Toggle state, only select slot if it is not already selected
  if(!Utils.isSlotSelected(selectedSlots, slotId)) {
    slotSelectionState = {
      elementId,
      slotId
    }
  }

  return Object.assign({}, state, {
    ...state,
    selectionState: {
      ...state.selectionState,
      pipe: {
        ...state.selectionState.pipe,
        [type]: slotSelectionState
      }
    }
  })
}

export const removeSlotSelectionState = (state) => {
  return Object.assign({}, state, {
    ...state,
    selectionState: {
      ...state.selectionState,
      pipe: {
        input: { },
        output: { }
      }
    }
  })
}

export const addSelectedElementToWorkspace = (state, payload) => {
  const {
    elementId,
    mousePosition,
    workspaceIndex
  } = payload

  return Object.assign({}, state, {
    ...state,
    selectionState: {
      ...state.selectionState,
      element: {
        id: elementId,
        mousePosition,
        workspaceIndex
      }
    }
  })
}

export const removeSelectedElementFromWorkspace = (state) => {
  return Object.assign({}, state, {
    ...state,
    selectionState: {
      ...state.selectionState,
      element: { }
    }
  })
}
