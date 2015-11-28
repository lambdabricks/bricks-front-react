import { connect } from 'react-redux'
import { startDrag } from '../actions'
import Primitive from '../components/Primitive'

function mapDispatchToProps(dispatch) {
  return {
    onMouseDown: (elementId, position) => {
      dispatch(startDrag(elementId, position))
    }
  }
}

export default connect(null, mapDispatchToProps)(Primitive)
