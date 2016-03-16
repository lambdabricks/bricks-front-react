import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import composeBrick from './composeBrick'
import Constants from './constants'
import {
  PositionPropTypes,
  SizePropTypes,
  SlotPropTypes
} from '../propTypes'

class Brick extends Component {
  constructor(props) {
    super(props)

    this.startDrag = this.startDrag.bind(this)
  }

  startDrag(mouseEvent) {
    const { handleMouseDown, id, position } = this.props

    handleMouseDown(id, mouseEvent, position)
  }

  render() {
    const {
      name,
      outputSlots,
      outputSlotValue,
      size
    } = this.props
    const {
      Brick: BrickConstants,
      Slot
    } = Brick._constants
    const midHeight = size.height / 2
    const outputSlotId = Object.keys(outputSlots)[0]
    const { outputElementIds } = outputSlots[outputSlotId]

    return (
      <Group
        onMouseDown={ this.startDrag }
        y={ Slot.height }
      >
        <Rectangle
          height={ size.height }
          width={ size.width }
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
        { outputElementIds.length == 0 && outputSlotValue && outputSlotValue.value &&
          <Text
            fill={ BrickConstants.textColor }
            font={ BrickConstants.font }
            x={ ((size.width - Slot.width) / 2) + Slot.width }
            y={ size.height }
          >
            { outputSlotValue.value }
          </Text>
        }
      </Group>
    )
  }
}

Brick.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  position: PositionPropTypes.isRequired,
  outputSlots: SlotPropTypes.isRequired,
  outputSlotValue: PropTypes.shape({
    value: PropTypes.string
  }),
  size: SizePropTypes.isRequired
}

Brick._constants = {
  Slot: Constants.Slot,
  Brick: Constants.Brick
}

export default composeBrick(Brick)
