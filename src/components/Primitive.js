import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import Constants from './constants'
import Ellipse from './Ellipse'
import { innerInputSlotPosition } from '../utils'
import { PositionPropTypes } from '../propTypes'
import Slot from './Slot'

class Primitive extends Component {
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
      id,
      type,
      handleMouseDown,
      position,
      selectedSlots,
      selectSlot,
      size,
      value
    } = this.props
    const { Primitive: PrimitiveConstants } = Primitive._constants

    const fillColor = PrimitiveConstants.fillColor[type]
    const slotPosition = innerInputSlotPosition(size)

    return (
      <Group x={ position.x } y={ position.y } >
        <Group
          onMouseDown={ this.startDrag }
        >
          <Ellipse
            fillColor={ fillColor }
            size={ size }
          />
          <Text
            fill={ PrimitiveConstants.textColor }
            font={ PrimitiveConstants.font }
            y={ size.height / 2 }
          >
            { value === null ? "<NONE>" : value }
          </Text>
        </Group>
        <Slot
          key={ id }
          fillColor={ fillColor }
          id={ id }
          parentId={ id }
          selectedSlots={ selectedSlots }
          selectSlot={ selectSlot }
          strokeColor={ fillColor }
          x={ slotPosition.x }
          y={ slotPosition.y }
        />
      </Group>
    )
  }
}

Primitive.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  position: PositionPropTypes.isRequired,
  selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectSlot: PropTypes.func.isRequired,
  value: PropTypes.any
}

Primitive._constants = {
  Primitive: Constants.Primitive,
  Slot: Constants.Slot
}

Primitive.displayName = Primitive.name

export default Primitive
