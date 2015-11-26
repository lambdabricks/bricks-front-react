import React, { PropTypes, Component } from 'react'
import { Text } from 'react-art'

import composeBrick from './composeBrick'
import Constants from './constants'

class Brick extends Component {
  render() {
    const { name, size } = this.props
    const { Brick: BrickConstants, Slot } = Constants
    const midHeight = (Slot.height + size.height) / 2

    return (
      <Text
        fill={ BrickConstants.textColor }
        font={ BrickConstants.font }
        y={ midHeight }
      >
        { name }
      </Text>
    )
  }
}

Brick.propTypes = {
  name: PropTypes.string.isRequired
}

export default composeBrick(
  Brick,
  {
    Slot: Constants.Slot,
    Brick: Constants.Brick
  }
)
