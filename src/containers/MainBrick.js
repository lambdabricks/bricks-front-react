import { connect } from 'react-redux'

import { addPipeOrSelectSlot } from '../actions'
import { handleSelectElement } from '../utils'
import MainBrick from '../components/MainBrick'
import { selectedSlots } from '../utils'

const mapStateToProps = (state, ownProps) => {
  return {
    inner: ownProps.innerIds.map((elementId) => {
      return {
        ...state.workspace.entities[elementId],
        ...ownProps.unitTest.values[elementId]
      }
    }),
    selectedSlots: selectedSlots(state.workspace),
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
