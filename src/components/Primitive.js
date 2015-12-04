import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'
import Circle from 'react-art/lib/Circle.art'
import Constants from './constants'
import { PositionPropTypes } from '../propTypes'

class Primitive extends Component {
  constructor(props) {
    super(props)

    this.startDrag = this.startDrag.bind(this)
  }

  startDrag(mouseEvent) {
    const { handleMouseDown, id, position } = this.props

    handleMouseDown(
      id,
      { x: mouseEvent.clientX, y: mouseEvent.clientY },
      position
    )
  }

  render() {
    const {
      id,
      name,
      handleMouseDown,
      position,
      value
    } = this.props
    const { Primitive: PrimitiveConstants, Slot } = Primitive._constants
    const fillColor = PrimitiveConstants.fillColor[name]

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
            x={ PrimitiveConstants.radius / 2 }
            y={ PrimitiveConstants.radius / 2 }
          />
          <Text
            fill={ PrimitiveConstants.textColor }
            font={ PrimitiveConstants.font }
          >
            { value === null ? "<NONE>" : value }
          </Text>
        </Group>
        <Rectangle
          cursor={ Slot.cursor }
          fill={ fillColor }
          height={ Slot.height }
          width={ Slot.width }
          x={ (PrimitiveConstants.radius / 2)- (Slot.width / 2) }
          y={ PrimitiveConstants.radius + Slot.height }
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
  value: PropTypes.any
}

Primitive._constants = {
  Primitive: Constants.Primitive,
  Slot: Constants.Slot
}

export default Primitive
