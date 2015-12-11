import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import Brick from '../containers/Brick'
import composeBrick from './composeBrick'
import Constants from './constants'
import { PositionPropTypes, SizePropTypes } from '../propTypes'
import Primitive from '../containers/Primitive'

class MainBrick extends Component {
  render() {
    const { element, entities, inner, size } = this.props
    const { Brick, Slot } = MainBrick._constants

    return (
      <Group y={ Slot.height } >
        <Rectangle
          height={ size.height }
          width={ size.width }
          stroke={ Brick.strokeColor }
          fill={ Brick.fillColor }
        />
        { inner.map((elementId) => {
            const element = entities[elementId]

            return (
              <element.type
                key={ element.id }
                { ...element }
              />
            )
          })
        }
      </Group>
    )
  }
}

MainBrick.propTypes = {
  entities: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      position: PositionPropTypes.isRequired,
      type: PropTypes.func,
      value: PropTypes.any
    })
  ).isRequired,
  id: PropTypes.number.isRequired,
  inner: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: SizePropTypes.isRequired
}

MainBrick._constants = {
  Slot: Constants.Slot,
  Brick: Constants.MainBrick
}

export default composeBrick(MainBrick)
