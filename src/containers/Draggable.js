import { connect } from 'react-redux'
import { startDrag } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    handleMouseDown: (elementId, mouseEvent, elementPosition) => {
      dispatch(
        startDrag(
          elementId,
          { x: mouseEvent.clientX, y: mouseEvent.clientY },
          elementPosition
        )
      )
    }
  }
}

export default connect(null, mapDispatchToProps)
