import { connect } from 'react-redux'

import Brick from '../components/Brick'
import Draggable from './Draggable'
import { selectSlot } from '../actions'
import { selectedSlots } from '../utils'

const mapStateToProps = (state) => {
  return {
    selectedSlots: selectedSlots(state.workspace)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectBrickInputSlot: (elementId, slotId) => {
      // A Brick's input slot is on the contrary an output for a pipe
      dispatch(selectSlot('output', elementId, slotId))
    },
    selectBrickOutputSlot: (elementId, slotId) => {
      // A Brick's output slot is on the contrary an input for a pipe
      dispatch(selectSlot('input', elementId, slotId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Draggable(Brick))
