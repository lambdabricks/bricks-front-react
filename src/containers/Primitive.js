import { connect } from 'react-redux'

import Draggable from './Draggable'
import Primitive from '../components/Primitive'

import { addPipeOrSelectSlot } from '../actions'
import { selectedSlots } from '../utils'

const mapStateToProps = (state) => {
  return {
    selectedSlots: selectedSlots(state.workspace)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSlot: (elementId, slotId) => {
      dispatch(addPipeOrSelectSlot('input', elementId, slotId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Draggable(Primitive))
