import React, { PropTypes, Component } from 'react'
import { Group, Text } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'
import Circle from 'react-art/lib/Circle.art'
import Constants from './constants'

export default class Primitive extends Component {
  constructor(props) {
    super(props)

    this._constants = Constants
  }

  render() {
    const { position, value } = this.props
    const { Primitive, Slot } = this._constants

    return (
      <Group x={ position.x } y={ position.y } >
        <Circle
          fill={ Primitive.fillColor }
          radius={ Primitive.radius }
          stroke={ Primitive.strokeColor }
          strokeWidth={ Primitive.strokeWidth }
        />
        <Text
          fill={ Primitive.textColor }
          font={ Primitive.font }
          alignment={ Primitive.fontAlignment }
        >
          { value }
        </Text>
        <Rectangle
          cursor={ Slot.cursor }
          fill={ Primitive.fillColor }
          height={ Slot.height }
          width={ Slot.width }
          x={ -Slot.width / 2 }
          y={ Primitive.radius }
        />
      </Group>
    )
  }
}

Primitive.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  value: PropTypes.string.isRequired
}
