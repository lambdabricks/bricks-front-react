import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import { getConstant } from './constants'
import { PositionPropTypes } from '../propTypes'
import { getFillColor } from '../utils'
import Pipe from './Pipe'

class SelectablePipe extends Component {
  render() {
    const {
      componentName,
      handleClick,
      id,
      inputPosition,
      outputPosition,
      type,
      value
    } = this.props

    const fillColor = getFillColor(type, value)

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
        { value &&
          <Text
            fill={ getConstant(componentName, 'textColor') }
            font={ getConstant(componentName, 'font') }
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
  componentName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  inputPosition: PositionPropTypes.isRequired,
  outputPosition: PositionPropTypes.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default SelectablePipe
