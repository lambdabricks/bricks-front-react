import { connect } from 'react-redux'
import { startDrag } from '../actions'

const LEFT = 0

const mapDispatchToProps = (dispatch) => {
  return {
    handleMouseDown: (elementId, mouseEvent, elementPosition) => {
      if(mouseEvent.button != LEFT)
        return

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
