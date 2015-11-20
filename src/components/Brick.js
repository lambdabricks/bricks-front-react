import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'
import Constants from './constants'

export default class Brick extends Component {
  constructor(props) {
    super(props)

    this._constants = Constants
    this.renderSlot = this.renderSlot.bind(this)
    this.slotGroup = this.slotGroup.bind(this)
  }

  render() {
    const { inputSlots, outputSlots, position, size } = this.props
    const { RootBrick, Slot } = this._constants

    return (
      <Group x={ position.x } y={ position.y }>
        { this.slotGroup(inputSlots, size.width, 0) }
        <Rectangle
          height={ size.height }
          width={ size.width }
          y={ Slot.height }
          stroke={ RootBrick.strokeColor }
          fill={ RootBrick.fillColor }
        />
        { this.slotGroup(outputSlots, size.width, size.height + Slot.height) }
      </Group>
    )
  }

  slotGroup(slots, width, y) {
    const { RootBrick } = this._constants
    const slotsWidth = RootBrick.slotOffset + (slots.length * RootBrick.slotAndOffset)
    const xOffset = (width - slotsWidth) / 2

    return (
      <Group>
        { slots.map(this.renderSlot(xOffset, y)) }
      </Group>
    )
  }

  renderSlot(xOffset, y) {
    return (slot, index) => {
      const { RootBrick, Slot } = this._constants
      const x =
        xOffset +
        RootBrick.slotOffset +
        (index * RootBrick.slotAndOffset)

      return (
        <Rectangle
          key={ slot.id }
          height={ Slot.height }
          width={ Slot.width }
          x={ x }
          y={ y }
          cursor={ RootBrick.cursor }
          fill={ RootBrick.fillColor }
          stroke={ RootBrick.strokeColor }
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

Brick.propTypes = {
  inputSlots: SlotPropTypes,
  outputSlots: SlotPropTypes,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  size: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }).isRequired
}
