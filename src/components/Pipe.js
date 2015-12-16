import React, { PropTypes, Component } from 'react'
import { Group, Path, Shape } from 'react-art'

import Constants from './constants'

class Pipe extends Component {
  render() {
    const { inputPosition, name, outputPosition } = this.props
    const {
      Pipe: PipeConstants,
      Slot: SlotConstants
    } = Pipe._constants

    const deltaPosition = {
      x: outputPosition.x - inputPosition.x,
      y: outputPosition.y - (inputPosition.y + SlotConstants.height)
    }
    const fillColor = PipeConstants.fillColor[name]
    const path = Path()

    path.move(inputPosition.x, inputPosition.y + SlotConstants.height)
    path.line(SlotConstants.width, 0)
    path.line(deltaPosition.x, deltaPosition.y)
    path.line(-SlotConstants.width, 0)
    path.close()

    return (
      // <Group>
        <Shape
          d={ path }
          fill={ fillColor }
          stroke={ PipeConstants.strokeColor }
        />
      //   <Text
      //     fill={ PipeConstants.textColor }
      //     font={ PipeConstants.font }
      //   >
      //     { value === null ? "<NONE>" : value }
      //   </Text>
      // </Group>
    )
  }
}

Pipe.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  value: PropTypes.any
}

Pipe._constants = {
  Pipe: Constants.Pipe,
  Slot: Constants.Slot
}

export default Pipe
