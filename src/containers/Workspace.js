import { connect } from 'react-redux'

import {
  moveElement,
  selectElementOrStopDrag
} from '../actions'
import Workspace from '../components/Workspace'

const mapStateToProps = (state) => {
  const { entities, selectionState } = state.workspace
  let selectedElement = {}

  if(!selectionState.dragStarted)
    selectedElement = selectionState.element

  return {
    dragStarted: selectionState.dragStarted,
    mainBrick: entities[state.workspace.mainBrickId],
    selectedElement,
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
