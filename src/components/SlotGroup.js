import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import Slot from './Slot'
import { SlotPropTypes } from '../propTypes'

class SlotGroup extends Component {
  render() {
    const {
      fillColor,
      parentId,
      parentWidth,
      selectedSlots,
      selectSlot,
      slotAndOffset,
      slotOffset,
      slots,
      strokeColor,
      y
    } = this.props
    const width = this.slotGroupWidth(slots, slotOffset, slotAndOffset)
    const xOffset = (parentWidth - width) / 2

    return (
      <Group x={ xOffset } y={ y }>
        { Object.keys(slots).map((slotId, index) => {
            const slot = slots[slotId]
            const x = slotOffset + (slot.index * slotAndOffset)

            return (
              <Slot
                key={ slot.id }
                fillColor={ fillColor }
                id={ slot.id }
                parentId={ parentId }
                selectedSlots={ selectedSlots }
                selectSlot={ selectSlot }
                strokeColor={ strokeColor }
                x={ x }
                y={ 0 }
              />
            )
          })
        }
      </Group>
    )
  }

  slotGroupWidth(slots, slotOffset, slotAndOffset) {
    const totalSlots = Object.keys(slots).length

    return slotOffset + (totalSlots * slotAndOffset)
  }
}

SlotGroup.propTypes = {
  fillColor: PropTypes.string.isRequired,
  parentId: PropTypes.number.isRequired,
  parentWidth: PropTypes.number.isRequired,
  selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectSlot: PropTypes.func.isRequired,
  slotAndOffset: PropTypes.number.isRequired,
  slotOffset: PropTypes.number.isRequired,
  slots: SlotPropTypes.isRequired,
  strokeColor: PropTypes.string.isRequired,
  y: PropTypes.number.isRequired
}

export default SlotGroup
