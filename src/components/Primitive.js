import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'

import { getConstant } from './constants'
import { getFillColor, innerInputSlotPosition } from '../utils'
import { PositionPropTypes } from '../propTypes'

import Ellipse from './Ellipse'
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
      componentName,
      id,
      type,
      handleMouseDown,
      position,
      selectedSlots,
      selectSlot,
      size,
      value
    } = this.props

    const fillColor = getFillColor(type, value)
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
            fill={ getConstant(componentName, 'textColor') }
            font={ getConstant(componentName, 'font') }
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
  componentName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  position: PositionPropTypes.isRequired,
  selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectSlot: PropTypes.func.isRequired,
  value: PropTypes.any
}

Primitive.displayName = Primitive.name

export default Primitive
