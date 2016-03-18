import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import { Pipe as PipeConstants } from './constants'
import { EnvironmentPropTypes, PositionPropTypes } from '../propTypes'
import { getFillColor } from '../utils'
import Pipe from './Pipe'

class SelectablePipe extends Component {
  render() {
    const {
      environment,
      handleClick,
      id,
      inputPosition,
      outputPosition
    } = this.props

    const {
      font,
      strokeColor,
      textColor
    } = SelectablePipe._constants

    const fillColor = getFillColor(environment.type, environment.value)

    return (
      <Group
        onClick={ (e) => handleClick(id, e) }
      >
        <Pipe
          fillColor={ fillColor }
          inputPosition={ inputPosition }
          outputPosition={ outputPosition }
          strokeColor={ strokeColor }
        />
        { environment.value &&
          <Text
            fill={ textColor }
            font={ font }
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
  environment: EnvironmentPropTypes.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  inputPosition: PositionPropTypes.isRequired,
  outputPosition: PositionPropTypes.isRequired
}

SelectablePipe._constants = PipeConstants

export default SelectablePipe
