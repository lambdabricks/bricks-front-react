import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import { getConstant } from './constants'
import { EnvironmentPropTypes, PositionPropTypes } from '../propTypes'
import { getFillColor } from '../utils'
import Pipe from './Pipe'

class SelectablePipe extends Component {
  render() {
    const {
      componentName,
      environment,
      handleClick,
      id,
      inputPosition,
      outputPosition
    } = this.props

    const fillColor = getFillColor(environment.type, environment.value)

    return (
      <Group
        onClick={ (e) => handleClick(id, e) }
      >
        <Pipe
          fillColor={ fillColor }
          inputPosition={ inputPosition }
          outputPosition={ outputPosition }
          strokeColor={ getConstant(componentName, 'strokeColor') }
        />
        { environment.value &&
          <Text
            fill={ getConstant(componentName, 'textColor') }
            font={ getConstant(componentName, 'font') }
            x={ (inputPosition.x + outputPosition.x) / 2 }
            y={ (inputPosition.y + outputPosition.y) / 2 }
          >
            { environment.value }
          </Text>
        }
      </Group>
    )
  }
}

SelectablePipe.propTypes = {
  componentName: PropTypes.string.isRequired,
  environment: EnvironmentPropTypes.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  inputPosition: PositionPropTypes.isRequired,
  outputPosition: PositionPropTypes.isRequired
}

export default SelectablePipe
