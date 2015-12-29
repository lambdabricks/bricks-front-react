import React, { PropTypes, Component } from 'react'
import { Group, Path, Shape } from 'react-art'

import Constants from './constants'
import { PositionPropTypes } from '../propTypes'

class Pipe extends Component {
  render() {
    const {
      inputPosition,
      strokeColor: maybeStrokeColor,
      outputPosition,
      type
    } = this.props

    const {
      Pipe: PipeConstants,
      Slot: SlotConstants
    } = Pipe._constants

    const deltaPosition = {
      x: outputPosition.x - inputPosition.x,
      y: outputPosition.y - (inputPosition.y + SlotConstants.height)
    }
    const fillColor = PipeConstants.fillColor[type]
    const strokeColor = maybeStrokeColor || PipeConstants.strokeColor

    const path = Path()

    path.move(inputPosition.x, inputPosition.y + SlotConstants.height)
    path.line(SlotConstants.width, 0)
    path.line(deltaPosition.x, deltaPosition.y)
    path.line(-SlotConstants.width, 0)
    path.close()

    return (
      <Shape
        d={ path }
        fill={ fillColor }
        stroke={ strokeColor }
      />
    )
  }
}

Pipe.propTypes = {
  inputPosition: PositionPropTypes.isRequired,
  outputPosition: PositionPropTypes.isRequired,
  strokeColor: PropTypes.string,
  type: PropTypes.string
}

Pipe._constants = {
  Pipe: Constants.Pipe,
  Slot: Constants.Slot
}

export default Pipe
