import { connect } from 'react-redux'

import Brick from '../components/Brick'
import Draggable from './Draggable'
import { selectSlot } from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    selectBrickInputSlot: (elementId, slotId) => {
      // A Brick's input slot is on the contrary an output for a pipe
      dispatch(selectSlot('OUTPUT', elementId, slotId))
    },
    selectBrickOutputSlot: (elementId, slotId) => {
      // A Brick's output slot is on the contrary an input for a pipe
      dispatch(selectSlot('INPUT', elementId, slotId))
    }
  }
}

export default connect(null, mapDispatchToProps)(Draggable(Brick))
