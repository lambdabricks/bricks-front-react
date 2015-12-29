import { connect } from 'react-redux'

import { moveElement, stopDrag } from '../actions'
import WorkspaceSurface from '../components/WorkspaceSurface'

const mapStateToProps = (state, ownProps) => {
  const mainBrickId = ownProps.mainBrickId

  return {
    mainBrick: state.workspace.entities[mainBrickId],
    dragState: state.workspace.dragState,
    unitTests: state.workspace.unitTests
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveElement: (position) => {
      dispatch(moveElement(position))
    },
    stopDrag: () => {
      dispatch(stopDrag())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceSurface)
