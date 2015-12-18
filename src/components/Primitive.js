import React, { PropTypes, Component } from 'react'
import { Group, Path, Shape, Text } from 'react-art'

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
    const width = PrimitiveConstants.xRadius * 2

    const path = new Path()
    path.move(0, PrimitiveConstants.yRadius)
    path.arc(width, 0, PrimitiveConstants.xRadius, PrimitiveConstants.yRadius)
    path.arc(-width, 0, PrimitiveConstants.xRadius, PrimitiveConstants.yRadius)
    path.close()

    return (
      <Group x={ position.x } y={ position.y } >
        <Group
          onMouseDown={ this.startDrag }
        >
          <Shape
            fill={ fillColor }
            d={ path }
            stroke={ fillColor }
          />
          <Text
            fill={ PrimitiveConstants.textColor }
            font={ PrimitiveConstants.font }
            y={ PrimitiveConstants.yRadius }
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
