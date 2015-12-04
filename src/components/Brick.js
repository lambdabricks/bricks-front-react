import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import composeBrick from './composeBrick'
import Constants from './constants'
import { PositionPropTypes, SizePropTypes } from '../propTypes'

class Brick extends Component {
  constructor(props) {
    super(props)

    this.startDrag = this.startDrag.bind(this)
  }

  startDrag(mouseEvent) {
    const { handleMouseDown, id, position } = this.props

    handleMouseDown(
      id,
      { x: mouseEvent.clientX, y: mouseEvent.clientY },
      position
    )
  }

  render() {
    const { name, size } = this.props
    const { Brick: BrickConstants, Slot } = Brick._constants
    const midHeight = (Slot.height + size.height) / 2

    return (
      <Group onMouseDown={ this.startDrag } >
        <Rectangle
          height={ size.height }
          width={ size.width }
          y={ Slot.height }
          stroke={ BrickConstants.strokeColor }
          fill={ BrickConstants.fillColor }
        />
        <Text
          fill={ BrickConstants.textColor }
          font={ BrickConstants.font }
          y={ midHeight }
        >
          { name }
        </Text>
      </Group>
    )
  }
}

Brick.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  position: PositionPropTypes.isRequired,
  size: SizePropTypes.isRequired
}

Brick._constants = {
  Slot: Constants.Slot,
  Brick: Constants.Brick
}

export default composeBrick(Brick)
