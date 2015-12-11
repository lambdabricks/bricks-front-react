import { connect } from 'react-redux'

import Draggable from './Draggable'
import Primitive from '../components/Primitive'

import { selectedSlots } from '../utils'
import { selectSlot } from '../actions'

const mapStateToProps = (state) => {
  return {
    selectedSlots: selectedSlots(state.workspace)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSlot: (elementId, slotId) => {
      dispatch(selectSlot('input', elementId, slotId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Draggable(Primitive))
