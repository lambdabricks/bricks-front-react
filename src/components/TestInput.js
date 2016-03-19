import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import { getConstant } from './constants'
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
    const slotWidth = getConstant(componentName, 'slotWidth')
    const slotHeight = getConstant(componentName, 'slotHeight')

    const fillColor = getFillColor(environment.type, environment.value)
    const position = {
      x: slotPosition.x - ((size.width - slotWidth) / 2),
      y: slotPosition.y - getConstant(componentName, 'yOffset')
    }
    const inputPipePosition = {
      x: (size.width - slotWidth) / 2,
      y: size.height - slotHeight
    }
    const outputPipePosition = {
      x: (size.width - slotWidth) / 2,
      y: getConstant(componentName, 'yOffset')
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

export default TestInput
