import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import { PositionPropTypes, SizePropTypes } from '../propTypes'

export default function composeBrick(InnerComponent) {
  class AbstractBrick extends Component {
    constructor(props) {
      super(props)

      this.renderInputSlots = this.renderInputSlots.bind(this)
      this.renderOutputSlots = this.renderOutputSlots.bind(this)
      this.renderSlot = this.renderSlot.bind(this)
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
      const { size } = this.props
      const { Brick } = InnerComponent._constants
      const slotsWidth = Brick.slotOffset + (slots.length * Brick.slotAndOffset)
      const xOffset = (size.width - slotsWidth) / 2

      return (
        <Group x={ xOffset } y={ y }>
          { slots.map(this.renderSlot(selectSlot)) }
        </Group>
      )
    }

    renderSlot(selectSlot) {
      return (slot, index) => {
        const { id, selectedSlots } = this.props
        const { Brick, Slot } = InnerComponent._constants

        const x = Brick.slotOffset + (index * Brick.slotAndOffset)
        const fillColor = selectedSlots.indexOf(slot.id) === -1 ?
          Brick.fillColor :
          Slot.selectedFillColor

        return (
          <Rectangle
            key={ slot.id }
            height={ Slot.height }
            width={ Slot.width }
            x={ x }
            onClick={ () => selectSlot(id, slot.id) }
            cursor={ Slot.cursor }
            fill={ fillColor }
            stroke={ Brick.strokeColor }
          />
        )
      }
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
