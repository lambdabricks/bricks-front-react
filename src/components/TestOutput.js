import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import Constants from './constants'
import Ellipse from './Ellipse'
import { getFillColor } from '../utils'
import Pipe from './Pipe'
import { PositionPropTypes } from '../propTypes'

class TestOutput extends Component {
  render() {
    const {
      handleClick,
      id,
      slotPosition,
      size,
      type,
      value,
      workspaceIndex
    } = this.props

    const {
      Slot: SlotConstants,
      TestOutput: TestOutputConstants
    } = TestOutput._constants

    const fillColor = getFillColor(type, value)
    const position = {
      x: - ((size.width - SlotConstants.width) / 2),
      y: SlotConstants.height + TestOutputConstants.yOffset - size.height
    }
    const inputPipePosition = {
      x: 0,
      y: 0
    }
    const outputPipePosition = {
      x: 0,
      y: TestOutputConstants.yOffset - (size.height / 2)
    }

    return (
      <Group
        onClick={ (e) => handleClick(id, e, workspaceIndex) }
        x={ slotPosition.x }
        y={ slotPosition.y }
      >
        <Group
          x={ position.x }
          y={ position.y }
        >
          <Ellipse
            fillColor={ fillColor }
            size={ size }
          />
          <Text
            fill={ TestOutputConstants.textColor }
            font={ TestOutputConstants.font }
            y={ size.height / 2 }
          >
            { value === null ? "<NONE>" : value }
          </Text>
        </Group>
        <Pipe
          fillColor={ fillColor }
          inputPosition={ inputPipePosition }
          outputPosition={ outputPipePosition }
          strokeColor={ fillColor }
        />
      </Group>
    )
  }
}

TestOutput.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  slotPosition: PositionPropTypes.isRequired,
  value: PropTypes.any,
  workspaceIndex: PropTypes.number.isRequired
}

TestOutput._constants = {
  Slot: Constants.Slot,
  TestOutput: Constants.TestOutput
}

export default TestOutput
