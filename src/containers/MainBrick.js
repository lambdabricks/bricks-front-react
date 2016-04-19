import { connect } from 'react-redux'

import { addPipeOrSelectSlot } from '../actions'
import { CLEAN } from '../components/constants'
import { handleSelectElement } from '../utils'
import MainBrick from '../components/MainBrick'

const mapDispatchToProps = (dispatch, ownProps) => {
  const { workspaceType } = ownProps

  return {
    handleClick: workspaceType != CLEAN ? handleSelectElement(dispatch) : () => { },
    selectBrickInputSlot: (elementId, slotId) => {
      dispatch(addPipeOrSelectSlot('input', elementId, slotId))
    },
    selectBrickOutputSlot: (elementId, slotId) => {
      dispatch(addPipeOrSelectSlot('output', elementId, slotId))
    }
  }
}

export default connect(null, mapDispatchToProps)(MainBrick)
