import { connect } from 'react-redux'
import { startDrag } from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    handleMouseDown: (elementId, mousePosition, elementPosition) => {
      dispatch(startDrag(elementId, mousePosition, elementPosition))
    }
  }
}

export default connect(null, mapDispatchToProps)
