import { connect } from 'react-redux'

import RootBrick from '../components/RootBrick'
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
      dispatch(selectSlot('input', elementId, slotId))
    },
    selectBrickOutputSlot: (elementId, slotId) => {
      dispatch(selectSlot('output', elementId, slotId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootBrick)
