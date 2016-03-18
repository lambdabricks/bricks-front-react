import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import { Pipe as PipeConstants } from './constants'
import { PositionPropTypes } from '../propTypes'
import { getFillColor } from '../utils'
import Pipe from './Pipe'

class SelectablePipe extends Component {
  render() {
    const {
      handleClick,
      id,
      inputPosition,
      outputPosition,
      type,
      value
    } = this.props

    const {
      font,
      strokeColor,
      textColor
    } = SelectablePipe._constants

    const fillColor = getFillColor(type, value)

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
        { value &&
          <Text
            fill={ textColor }
            font={ font }
            x={ (inputPosition.x + outputPosition.x) / 2 }
            y={ (inputPosition.y + outputPosition.y) / 2 }
          >
            { value }
          </Text>
        }
      </Group>
    )
  }
}

SelectablePipe.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  inputPosition: PositionPropTypes.isRequired,
  outputPosition: PositionPropTypes.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

SelectablePipe._constants = PipeConstants

export default SelectablePipe
