import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import { isSlotSelected } from '../utils'
import { PositionPropTypes, SizePropTypes } from '../propTypes'
import SlotGroup from './SlotGroup'

export default function composeBrick(InnerComponent) {
  class AbstractBrick extends Component {
    render() {
      const {
        id,
        inputSlots,
        outputSlots,
        position,
        selectBrickInputSlot,
        selectBrickOutputSlot,
        selectedSlots,
        size
      } = this.props
      const { Brick, Slot } = InnerComponent._constants

      return (
        <Group x={ position.x } y={ position.y }>
          <SlotGroup
            fillColor={ Brick.fillColor }
            parentId={ id }
            parentWidth={ size.width }
            selectedSlots={ selectedSlots }
            selectSlot={ selectBrickInputSlot }
            slotAndOffset={ Brick.slotAndOffset }
            slotOffset={ Brick.slotOffset }
            slots={ inputSlots }
            strokeColor={ Brick.strokeColor }
            y={ 0 }
          />
          <SlotGroup
            fillColor={ Brick.fillColor }
            parentId={ id }
            parentWidth={ size.width }
            selectedSlots={ selectedSlots }
            selectSlot={ selectBrickOutputSlot }
            slotAndOffset={ Brick.slotAndOffset }
            slotOffset={ Brick.slotOffset }
            slots={ outputSlots }
            strokeColor={ Brick.strokeColor }
            y={ size.height + Slot.height }
          />
          <InnerComponent { ...this.props } />
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
