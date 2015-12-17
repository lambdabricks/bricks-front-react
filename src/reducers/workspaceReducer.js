import {
  ADD_BRICK,
  ADD_PIPE,
  ADD_PRIMITIVE,
  MOVE_ELEMENT,
  REMOVE_SELECTION,
  SELECT_SLOT,
  START_DRAG,
  STOP_DRAG,
} from '../actions'

// TODO: Read constants from MainBrick component
import {
  MainBrick as MainBrickConstants
} from '../components/constants'
import MainBrick from '../containers/MainBrick'

import {
  appendToInner,
  newBrick,
  newPipe,
  newPrimitive
} from './workspace/addElementReducer'

import {
  addDragStartedToWorkspace,
  addDragStoppedToWorkspace,
  updateElementInWorkspace
} from './workspace/dragReducer'

import {
  removeSlotSelectionState,
  updateSlotSelectionStateInWorkspace
} from './workspace/selectionReducer'

import { nextId } from './workspace/workspaceReducerUtils'

const mainBrickId = nextId()

const initialWorkspace = {
  actions: [],
  dragState: {
    dragStarted: false
  },
  entities: {
    [mainBrickId]: {
      id: mainBrickId,
      inner: [],
      inputSlots: [
        { id: nextId() },
        { id: nextId() }
      ],
      outputSlots: [
        { id: nextId() }
      ],
      position: MainBrickConstants.defaultPosition,
      size: MainBrickConstants.defaultSize,
      type: MainBrick
    }
  },
  mainBrickId: mainBrickId,
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
    case ADD_PIPE:
      return appendToInner(state, newPipe(state))
    case ADD_PRIMITIVE:
      return appendToInner(state, newPrimitive(payload))
    case MOVE_ELEMENT:
      return updateElementInWorkspace(state, payload)
    case REMOVE_SELECTION:
      return removeSlotSelectionState(state)
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
