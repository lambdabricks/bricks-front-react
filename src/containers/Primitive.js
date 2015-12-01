import { connect } from 'react-redux'
import { startDrag, stopDrag } from '../actions'
import Primitive from '../components/Primitive'

function mapDispatchToProps(dispatch) {
  return {
    handleMouseDown: (elementId, position) => {
      dispatch(startDrag(elementId, position))
    },
    handleMouseUp: () => {
      dispatch(stopDrag())
    }
  }
}

export default connect(null, mapDispatchToProps)(Primitive)
