import { connect } from 'react-redux'

import RootBrick from '../components/RootBrick'
import { selectSlot } from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    selectSlot: (elementId, slotId) => {
      dispatch(selectSlot(elementId, slotId))
    }
  }
}

export default connect(null, mapDispatchToProps)(RootBrick)
