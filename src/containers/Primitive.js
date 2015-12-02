import { connect } from 'react-redux'
import { startDrag } from '../actions'
import Primitive from '../components/Primitive'

function mapDispatchToProps(dispatch) {
  return {
    handleMouseDown: (elementId, mousePosition, elementPosition) => {
      dispatch(startDrag(elementId, mousePosition, elementPosition))
    }
  }
}

export default connect(null, mapDispatchToProps)(Primitive)
