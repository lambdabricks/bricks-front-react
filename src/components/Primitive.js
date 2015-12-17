import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'
import Circle from 'react-art/lib/Circle.art'

import Constants from './constants'
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
      name,
      handleMouseDown,
      position,
      selectedSlots,
      selectSlot,
      value
    } = this.props
    const { Primitive: PrimitiveConstants } = Primitive._constants

    const fillColor = PrimitiveConstants.fillColor[name]
    const slotPosition = innerInputSlotPosition(id)

    return (
      <Group x={ position.x } y={ position.y } >
        <Group
          onMouseDown={ this.startDrag }
        >
          <Circle
            fill={ fillColor }
            radius={ PrimitiveConstants.radius }
            stroke={ fillColor }
            strokeWidth={ PrimitiveConstants.strokeWidth }
            x={ PrimitiveConstants.radius }
            y={ PrimitiveConstants.radius }
          />
          <Text
            fill={ PrimitiveConstants.textColor }
            font={ PrimitiveConstants.font }
            y={ PrimitiveConstants.radius }
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
  name: PropTypes.string.isRequired,
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
