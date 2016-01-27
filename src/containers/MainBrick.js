import { connect } from 'react-redux'

import { addPipeOrSelectSlot } from '../actions'
import { handleSelectElement } from '../utils'
import MainBrick from '../components/MainBrick'

const mapStateToProps = (state, ownProps) => {
  return {
    unitTest: {
      ...ownProps.unitTest,
      testInputs: ownProps.unitTest.testInputIds.map((elementId) => {
        return state.workspace.entities[elementId]
      })
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: handleSelectElement(dispatch),
    selectBrickInputSlot: (elementId, slotId) => {
      dispatch(addPipeOrSelectSlot('input', elementId, slotId))
    },
    selectBrickOutputSlot: (elementId, slotId) => {
      dispatch(addPipeOrSelectSlot('output', elementId, slotId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBrick)
