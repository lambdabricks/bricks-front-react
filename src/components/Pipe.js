import React, { PropTypes, Component } from 'react'
import { Group, Path, Shape } from 'react-art'

import Constants from './constants'
import { PositionPropTypes } from '../propTypes'

class Pipe extends Component {
  render() {
    const {
      inputPosition,
      fillColor,
      strokeColor,
      outputPosition,
      type
    } = this.props

    const {
      Slot: SlotConstants
    } = Pipe._constants

    const deltaPosition = {
      x: outputPosition.x - inputPosition.x,
      y: outputPosition.y - (inputPosition.y + SlotConstants.height)
    }
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
  fillColor: PropTypes.string.isRequired,
  inputPosition: PositionPropTypes.isRequired,
  outputPosition: PositionPropTypes.isRequired,
  strokeColor: PropTypes.string.isRequired
}

Pipe._constants = {
  Slot: Constants.Slot
}

export default Pipe
