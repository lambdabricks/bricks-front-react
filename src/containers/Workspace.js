import { connect } from 'react-redux'

import {
  moveElement,
  selectElementOrStopDrag
} from '../actions'
import { selectedSlots } from '../utils'

import Workspace from '../components/Workspace'

const mapStateToProps = (state) => {
  const { entities, selectionState } = state.workspace
  const mainBrick = entities[state.workspace.mainBrickId]

  let selectedElement = {}

  if(!selectionState.dragStarted)
    selectedElement = selectionState.element

  return {
    dragStarted: selectionState.dragStarted,
    mainBrick: {
      ...mainBrick,
      inner: mainBrick.innerIds.map((elementId) => entities[elementId])
    },
    selectedElement,
    selectedSlots: selectedSlots(state.workspace),
    unitTests: state.workspace.unitTests
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveElement: (position) => {
      dispatch(moveElement(position))
    },
    // removeSelectedElement: () => {
    //   dispatch(removeSelectedElement())
    // },
    selectElementOrStopDrag: (mousePosition) => {
      dispatch(selectElementOrStopDrag(mousePosition))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)
