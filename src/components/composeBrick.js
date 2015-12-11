import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import { isSlotSelected } from '../utils'
import { PositionPropTypes, SizePropTypes } from '../propTypes'
import Slot from './Slot'

export default function composeBrick(InnerComponent) {
  class AbstractBrick extends Component {
    constructor(props) {
      super(props)

      this.renderInputSlots = this.renderInputSlots.bind(this)
      this.renderOutputSlots = this.renderOutputSlots.bind(this)
      this.slotGroup = this.slotGroup.bind(this)
    }

    render() {
      const { position } = this.props

      return (
        <Group x={ position.x } y={ position.y }>
          { this.renderInputSlots() }
          { this.renderOutputSlots() }
          <InnerComponent { ...this.props } />
        </Group>
      )
    }

    renderInputSlots() {
      const { inputSlots, selectBrickInputSlot } = this.props

      return this.slotGroup(inputSlots, 0, selectBrickInputSlot)
    }

    renderOutputSlots() {
      const { outputSlots, selectBrickOutputSlot, size } = this.props
      const { Slot } = InnerComponent._constants

      return this.slotGroup(
        outputSlots,
        size.height + Slot.height,
        selectBrickOutputSlot
      )
    }

    slotGroup(slots, y, selectSlot) {
      const { id, selectedSlots, size } = this.props
      const { Brick } = InnerComponent._constants
      const slotsWidth = Brick.slotOffset + (slots.length * Brick.slotAndOffset)
      const xOffset = (size.width - slotsWidth) / 2

      return (
        <Group x={ xOffset } y={ y }>
          {
            slots.map((slot, index) => {
              const x = Brick.slotOffset + (index * Brick.slotAndOffset)

              return (
                <Slot
                  key={ slot.id }
                  fillColor={ Brick.fillColor }
                  id={ slot.id }
                  index={ index }
                  parentId={ id }
                  selectedSlots={ selectedSlots }
                  selectSlot={ selectSlot }
                  strokeColor={ Brick.strokeColor }
                  x={ x }
                />
              )
            })
          }
        </Group>
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
    selectBrickInputSlot: PropTypes.func.isRequired,
    selectBrickOutputSlot: PropTypes.func.isRequired,
    selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
    size: SizePropTypes.isRequired
  }

  return AbstractBrick
}
