import { connect } from 'react-redux'

import RootBrick from '../components/RootBrick'
import { selectSlot } from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    selectBrickInputSlot: (elementId, slotId) => {
      dispatch(selectSlot('INPUT', elementId, slotId))
    },
    selectBrickOutputSlot: (elementId, slotId) => {
      dispatch(selectSlot('OUTPUT', elementId, slotId))
    }
  }
}

export default connect(null, mapDispatchToProps)(RootBrick)
