import { connect } from 'react-redux'

import { inputSlotPosition, outputSlotPosition } from '../utils'
import Pipe from '../components/Pipe'

const mapStateToProps = (state, ownProps) => {
  const { input, output } = ownProps
  const { entities } = state.workspace

  return {
    inputPosition: inputSlotPosition(
      entities[input.elementId],
      input.slotId
    ),
    outputPosition: outputSlotPosition(
      entities[output.elementId],
      output.slotId
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pipe)
