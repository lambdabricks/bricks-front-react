import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import Constants from './constants'
import Primitive from './Primitive'

export default class Brick extends Component {
  constructor(props) {
    super(props)

    this._constants = Constants
    this.renderSlot = this.renderSlot.bind(this)
    this.slotGroup = this.slotGroup.bind(this)
  }

  render() {
    const { inner, inputSlots, outputSlots, position, size } = this.props
    const { RootBrick, Slot } = this._constants

    return (
      <Group x={ position.x } y={ position.y }>
        { this.slotGroup(inputSlots, 0) }
        <Rectangle
          height={ size.height }
          width={ size.width }
          y={ Slot.height }
          stroke={ RootBrick.strokeColor }
          fill={ RootBrick.fillColor }
        />
        { this.slotGroup(outputSlots, size.height + Slot.height) }
        { inner.map((primitive) => {
            return (
              <Primitive
                key={ primitive.id }
                { ...primitive }
              />
            )
          })
        }
      </Group>
    )
  }

  slotGroup(slots, y) {
    const { size } = this.props
    const { RootBrick } = this._constants
    const slotsWidth = RootBrick.slotOffset + (slots.length * RootBrick.slotAndOffset)
    const xOffset = (size.width - slotsWidth) / 2

    return (
      <Group x={ xOffset } y={ y }>
        { slots.map(this.renderSlot) }
      </Group>
    )
  }

  renderSlot(slot, index) {
    const { RootBrick, Slot } = this._constants
    const x = RootBrick.slotOffset + (index * RootBrick.slotAndOffset)

    return (
      <Rectangle
        key={ slot.id }
        height={ Slot.height }
        width={ Slot.width }
        x={ x }
        cursor={ Slot.cursor }
        fill={ RootBrick.fillColor }
        stroke={ RootBrick.strokeColor }
      />
    )
  }
}

const PositionPropTypes =
  PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })

const SlotPropTypes =
  PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired

Brick.propTypes = {
  inner: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      position: PositionPropTypes.isRequired,
      value: PropTypes.any
    })
  ).isRequired,
  inputSlots: SlotPropTypes,
  outputSlots: SlotPropTypes,
  position: PositionPropTypes.isRequired,
  size: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }).isRequired
}
