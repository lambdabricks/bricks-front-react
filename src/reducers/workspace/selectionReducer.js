import * as Utils from '../../utils'

export const updateSlotSelectionStateInWorkspace = (state, payload) => {
  const { elementId, slotId, type } = payload
  const { mainBrickId, selectionState } = state

  const selectedSlots = Utils.selectedSlots(state)
  let pipeSelectionState = Object.assign({}, selectionState.pipe)

  // Toggle selection, deselect slot if it is already selected.
  if(!Utils.isSlotSelected(selectedSlots, slotId)) {
    pipeSelectionState[type] = {
      elementId,
      slotId
    }
  } else {
    pipeSelectionState[type] = { }
  }

  // Only allow pipes inside mainBrick element
  if(Utils.areSlotsInSameElement(pipeSelectionState) && elementId !== mainBrickId) {
    pipeSelectionState = {
      input: { },
      output: { }
    }

    pipeSelectionState[type] = {
      elementId,
      slotId
    }
  }

  return Object.assign({}, state, {
    selectionState: {
      ...state.selectionState,
      pipe: pipeSelectionState
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
