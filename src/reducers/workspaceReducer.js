import {
  ADD_BRICK,
  ADD_PRIMITIVE,
  MOVE_ELEMENT,
  SELECT_SLOT,
  START_DRAG,
  STOP_DRAG,
} from '../actions'

// TODO: Read constants from RootBrick component
import {
  RootBrick as RootBrickConstants
} from '../components/constants'

import {
  appendToInner,
  newBrick,
  newPrimitive
} from './workspace/addElementReducer'

import {
  addDragStartedToWorkspace,
  addDragStoppedToWorkspace,
  updateElementInWorkspace
} from './workspace/dragReducer'

import {
  updateSlotSelectionStateInWorkspace
} from './workspace/selectionReducer'

import { nextId } from './workspace/workspaceReducerUtils'

const initialWorkspace = {
  actions: [],
  dragState: {
    dragStarted: false
  },
  rootBrick: {
    id: nextId(),
    inner: [
    ],
    inputSlots: [
      { id: nextId() },
      { id: nextId() }
    ],
    outputSlots: [
      { id: nextId() }
    ],
    position: RootBrickConstants.defaultPosition,
    size: RootBrickConstants.defaultSize
  },
  selectionState: {
    pipe: {
      input: null,
      output: null
    }
  }
}

export const workspace = (state = initialWorkspace, action) => {
  const { payload, type } = action
  switch (type) {
    case ADD_BRICK:
      return appendToInner(state, newBrick(payload))
    case ADD_PRIMITIVE:
      return appendToInner(state, newPrimitive(payload))
    case MOVE_ELEMENT:
      if(state.dragState.dragStarted)
        return updateElementInWorkspace(state, payload)

      return state
    case SELECT_SLOT:
      return updateSlotSelectionStateInWorkspace(state, payload)
    case START_DRAG:
      return addDragStartedToWorkspace(state, payload)
    case STOP_DRAG:
      return addDragStoppedToWorkspace(state, payload)
    default:
      return state
  }
}
