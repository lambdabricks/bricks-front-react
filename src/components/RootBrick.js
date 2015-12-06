import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import Brick from '../containers/Brick'
import composeBrick from './composeBrick'
import Constants from './constants'
import { PositionPropTypes, SizePropTypes } from '../propTypes'
import Primitive from '../containers/Primitive'

class RootBrick extends Component {
  render() {
    const { inner, size } = this.props
    const { Brick, Slot } = RootBrick._constants

    return (
      <Group>
        <Rectangle
          height={ size.height }
          width={ size.width }
          y={ Slot.height }
          stroke={ Brick.strokeColor }
          fill={ Brick.fillColor }
        />
        { inner.map((element) => {
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


RootBrick.propTypes = {
  id: PropTypes.number.isRequired,
  inner: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      position: PositionPropTypes.isRequired,
      type: PropTypes.func.isRequired,
      value: PropTypes.any
    })
  ).isRequired,
  size: SizePropTypes.isRequired
}

RootBrick._constants = {
  Slot: Constants.Slot,
  Brick: Constants.RootBrick
}

export default composeBrick(RootBrick)
