import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import Constants, { getConstant } from './constants'
import Ellipse from './Ellipse'
import { getFillColor } from '../utils'
import Pipe from './Pipe'
import { EnvironmentPropTypes, PositionPropTypes } from '../propTypes'

class TestInput extends Component {
  render() {
    const {
      componentName,
      environment,
      handleClick,
      id,
      slotPosition,
      size,
      workspaceIndex
    } = this.props

    const {
      Slot: SlotConstants,
      TestInput: TestInputConstants
    } = TestInput._constants

    const fillColor = getFillColor(environment.type, environment.value)
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
        onClick={ (e) => handleClick(id, e, workspaceIndex) }
        x={ position.x }
        y={ position.y }
      >
        <Ellipse
          fillColor={ fillColor }
          size={ size }
        />
        <Text
          fill={ getConstant(componentName, 'textColor') }
          font={ getConstant(componentName, 'font') }
          y={ size.height / 2 }
        >
          { environment.value === undefined ? "<NONE>" : environment.value }
        </Text>
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

TestInput.propTypes = {
  componentName: PropTypes.string.isRequired,
  environment: EnvironmentPropTypes,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  slotPosition: PositionPropTypes.isRequired,
  workspaceIndex: PropTypes.number.isRequired
}

TestInput._constants = {
  Slot: Constants.Slot,
  TestInput: Constants.TestInput
}

export default TestInput
