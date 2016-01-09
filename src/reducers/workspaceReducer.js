import {
  ADD_BRICK,
  ADD_PIPE,
  ADD_PRIMITIVE,
  ADD_UNIT_TEST,
  CHANGE_PRIMITIVE_TYPE,
  CLEAR_SLOT_SELECTION,
  MOVE_ELEMENT,
  REMOVE_ELEMENT,
  REMOVE_SELECTED_ELEMENT,
  SELECT_ELEMENT,
  SELECT_SLOT,
  START_DRAG,
  STOP_DRAG,
} from '../actions'

import {
  addBrickToWorkspace,
  addPipeToWorkspace,
  addPrimitiveToWorkspace,
  addUnitTestToWorkspace,
  removeElementInWorkspace
} from './workspace/addRemoveElementReducer'

import {
  addDragStartedToWorkspace,
  addDragStoppedToWorkspace,
  updateElementInWorkspace
} from './workspace/dragReducer'

import {
  addSelectedElementToWorkspace,
  removeSlotSelectionState,
  removeSelectedElementFromWorkspace,
  updateSlotSelectionStateInWorkspace
} from './workspace/selectionReducer'

import {
  changePrimitiveType
} from './workspace/updateElementReducer'

import {
  newWorkspace
} from './workspace/workspaceReducerUtils'

const initialWorkspace = newWorkspace()

export const workspace = (state = initialWorkspace, action) => {
  const { payload, type } = action

  switch (type) {
    case ADD_BRICK:
      return addBrickToWorkspace(state, payload)
    case ADD_PIPE:
      return addPipeToWorkspace(state)
    case ADD_PRIMITIVE:
      return addPrimitiveToWorkspace(state, payload)
    case ADD_UNIT_TEST:
      return addUnitTestToWorkspace(state)
    case CHANGE_PRIMITIVE_TYPE:
      return changePrimitiveType(state, payload)
    case CLEAR_SLOT_SELECTION:
      return removeSlotSelectionState(state)
    case MOVE_ELEMENT:
      return updateElementInWorkspace(state, payload)
    case REMOVE_ELEMENT:
      return removeElementInWorkspace(state, payload)
    case REMOVE_SELECTED_ELEMENT:
      return removeSelectedElementFromWorkspace(state)
    case SELECT_ELEMENT:
      return addSelectedElementToWorkspace(state, payload)
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
