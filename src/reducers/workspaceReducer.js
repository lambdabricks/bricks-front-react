import {
  ADD_BRICK,
  ADD_PIPE,
  ADD_PRIMITIVE,
  ADD_UNIT_TEST,
  CHANGE_PRIMITIVE_VALUE,
  CHANGE_TEST_INPUT_TYPE,
  CHANGE_TEST_INPUT_VALUE,
  CLEAR_SLOT_SELECTION,
  EVALUATE,
  LINK_SLOTS,
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
  evaluateAllWorkspaces
} from './workspace/evaluationReducer'

import {
  addSelectedElementToWorkspace,
  removeSlotSelectionState,
  removeSelectedElementFromWorkspace,
  updateSlotSelectionStateInWorkspace
} from './workspace/selectionReducer'

import {
  changePrimitiveValue,
  changeTestInputType,
  changeTestInputValue,
  linkSlots
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
      return addPipeToWorkspace(state, payload)
    case ADD_PRIMITIVE:
      return addPrimitiveToWorkspace(state, payload)
    case ADD_UNIT_TEST:
      return addUnitTestToWorkspace(state)
    case CHANGE_PRIMITIVE_VALUE:
      return changePrimitiveValue(state, payload)
    case CHANGE_TEST_INPUT_TYPE:
      return changeTestInputType(state, payload)
    case CHANGE_TEST_INPUT_VALUE:
      return changeTestInputValue(state, payload)
    case CLEAR_SLOT_SELECTION:
      return removeSlotSelectionState(state)
    case EVALUATE:
      return evaluateAllWorkspaces(state, payload)
    case LINK_SLOTS:
      return linkSlots(state, payload)
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
