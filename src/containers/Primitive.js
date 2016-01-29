import { connect } from 'react-redux'

import Draggable from './Draggable'
import Primitive from '../components/Primitive'

import { addPipeOrSelectSlot } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    selectSlot: (elementId, slotId) => {
      dispatch(addPipeOrSelectSlot('input', elementId, slotId))
    }
  }
}

export default connect(null, mapDispatchToProps)(Draggable(Primitive))
