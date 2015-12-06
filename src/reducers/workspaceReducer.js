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
  }
}

export const workspace = (state = initialWorkspace, action) => {
  switch (action.type) {
    case ADD_BRICK:
      return appendToInner(state, newBrick(action))
    case ADD_PRIMITIVE:
      return appendToInner(state, newPrimitive(action))
    case MOVE_ELEMENT:
      if(state.dragState.dragStarted)
        return updateElementInWorkspace(state, action)

      return state
    case SELECT_SLOT:
      console.log('click', action.payload)
      return state
    case START_DRAG:
      return addDragStartedToWorkspace(state, action)
    case STOP_DRAG:
      return addDragStoppedToWorkspace(state, action)
    default:
      return state
  }
}
