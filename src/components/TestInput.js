import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import Constants from './constants'
import Ellipse from './Ellipse'
import Pipe from './Pipe'
import { PositionPropTypes } from '../propTypes'

class TestInput extends Component {
  render() {
    const {
      handleClick,
      id,
      slotPosition,
      size,
      type,
      value
    } = this.props

    const {
      Slot: SlotConstants,
      TestInput: TestInputConstants
    } = TestInput._constants
    const fillColor = TestInputConstants.fillColor[type]
    const position = {
      x: slotPosition.x - ((size.width - SlotConstants.width) / 2),
      y: slotPosition.y - TestInputConstants.yOffset
    }
    const inputPipePosition = {
      x: (size.width - SlotConstants.width) / 2,
      y: size.height - SlotConstants.height
    }
    const outputPipePosition = {
      x: (size.width - SlotConstants.width) / 2,
      y: TestInputConstants.yOffset
    }

    return (
      <Group
        onClick={ (e) => handleClick(id, e) }
        x={ position.x }
        y={ position.y }
      >
        <Ellipse
          fillColor={ fillColor }
          size={ size }
        />
        <Text
          fill={ TestInputConstants.textColor }
          font={ TestInputConstants.font }
          y={ size.height / 2 }
        >
          { value === null ? "<NONE>" : value }
        </Text>
        <Pipe
          inputPosition={ inputPipePosition }
          type={ type }
          outputPosition={ outputPipePosition }
          strokeColor={ fillColor }
        />
      </Group>
    )
  }
}

TestInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  slotPosition: PositionPropTypes.isRequired,
  value: PropTypes.any
}

TestInput._constants = {
  Slot: Constants.Slot,
  TestInput: Constants.TestInput
}

export default TestInput
