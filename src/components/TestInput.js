import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import Constants from './constants'
import Ellipse from './Ellipse'
import { PositionPropTypes } from '../propTypes'

class TestInput extends Component {
  render() {
    const {
      id,
      name,
      position,
      size,
      value
    } = this.props

    const { TestInput: TestInputConstants } = TestInput._constants
    const fillColor = TestInputConstants.fillColor[name]

    return (
      <Group x={ position.x } y={ position.y } >
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
      </Group>
    )
  }
}

TestInput.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  position: PositionPropTypes.isRequired,
  value: PropTypes.any
}

TestInput._constants = {
  Slot: Constants.Slot,
  TestInput: Constants.TestInput
}

export default TestInput
