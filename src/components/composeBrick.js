import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import { PositionPropTypes, SizePropTypes } from '../propTypes'

export default function composeBrick(InnerComponent, _constants) {
  class AbstractBrick extends Component {
    constructor(props) {
      super(props)

      this.renderSlot = this.renderSlot.bind(this)
      this.slotGroup = this.slotGroup.bind(this)
    }

    render() {
      const { inputSlots, outputSlots, position, size } = this.props
      const { Slot } = _constants

      return (
        <Group x={ position.x } y={ position.y }>
          { this.slotGroup(inputSlots, 0) }
          { this.slotGroup(outputSlots, size.height + Slot.height) }
          <InnerComponent _constants={ _constants } { ...this.props } />
        </Group>
      )
    }

    slotGroup(slots, y) {
      const { size } = this.props
      const { Brick } = _constants
      const slotsWidth = Brick.slotOffset + (slots.length * Brick.slotAndOffset)
      const xOffset = (size.width - slotsWidth) / 2

      return (
        <Group x={ xOffset } y={ y }>
          { slots.map(this.renderSlot) }
        </Group>
      )
    }

    renderSlot(slot, index) {
      const { Brick, Slot } = _constants
      const x = Brick.slotOffset + (index * Brick.slotAndOffset)

      return (
        <Rectangle
          key={ slot.id }
          height={ Slot.height }
          width={ Slot.width }
          x={ x }
          cursor={ Slot.cursor }
          fill={ Brick.fillColor }
          stroke={ Brick.strokeColor }
        />
      )
    }
  }

  const SlotPropTypes =
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      }).isRequired
    ).isRequired

  AbstractBrick.propTypes = {
    inputSlots: SlotPropTypes,
    outputSlots: SlotPropTypes,
    position: PositionPropTypes.isRequired,
    size: SizePropTypes.isRequired
  }

  return AbstractBrick
}
