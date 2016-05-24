import { connect } from 'react-redux'

import { addPipeOrSelectSlot } from '../actions'
import { UNIT_TEST } from '../components/constants'
import { handleSelectElement } from '../utils'
import MainBrick from '../components/MainBrick'

const mapDispatchToProps = (dispatch, ownProps) => {
  const { workspaceType } = ownProps

  return {
    handleClick: workspaceType == UNIT_TEST ? handleSelectElement(dispatch) : () => { },
    selectBrickInputSlot: (elementId, slotId) => {
      dispatch(addPipeOrSelectSlot('input', elementId, slotId))
    },
    selectBrickOutputSlot: (elementId, slotId) => {
      dispatch(addPipeOrSelectSlot('output', elementId, slotId))
    }
  }
}

export default connect(null, mapDispatchToProps)(MainBrick)
