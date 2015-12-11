import { connect } from 'react-redux'

import { moveElement, stopDrag } from '../actions'
import WorkspaceSurface from '../components/WorkspaceSurface'

const mapStateToProps = (state) => {
  return {
    mainBrick: state.workspace.mainBrick,
    dragState: state.workspace.dragState
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
