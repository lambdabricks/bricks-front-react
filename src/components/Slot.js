import React, { PropTypes, Component } from 'react'
import Rectangle from 'react-art/lib/Rectangle.art'

import Constants from './constants'
import { isSlotSelected } from '../utils'

class Slot extends Component {
  render() {
    const {
      fillColor: unSelectedFillColor,
      id,
      parentId,
      selectedSlots,
      selectSlot,
      strokeColor,
      x,
      y
    } = this.props
    const { cursor, height, selectedFillColor, width } = Slot._constants

    const fillColor = isSlotSelected(selectedSlots, id) ?
      selectedFillColor :
      unSelectedFillColor

    return (
      <Rectangle
        key={ id }
        height={ height }
        width={ width }
        x={ x }
        y={ y }
        onClick={ () => selectSlot(parentId, id) }
        cursor={ cursor }
        fill={ fillColor }
        stroke={ strokeColor }
      />
    )
  }
}

Slot.propTypes = {
  fillColor: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  parentId: PropTypes.number.isRequired,
  selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectSlot: PropTypes.func.isRequired,
  strokeColor: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

Slot._constants = Constants.Slot

export default Slot
