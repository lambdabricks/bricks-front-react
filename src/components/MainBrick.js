import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import Brick from '../containers/Brick'
import composeBrick from './composeBrick'
import Constants from './constants'
import { PositionPropTypes, SizePropTypes } from '../propTypes'
import Primitive from '../containers/Primitive'
import TestInput from './TestInput'

class MainBrick extends Component {
  render() {
    const { inner, size, testCase } = this.props
    const { Brick, Slot } = MainBrick._constants

    return (
      <Group y={ Slot.height } >
        { testCase.map((element) => {
            return (
              <TestInput
                key={ element.id }
                { ...element }
              />
            )
          })
        }
        <Rectangle
          height={ size.height }
          width={ size.width }
          stroke={ Brick.strokeColor }
          fill={ Brick.fillColor }
        />
        { inner.map((element) => {
            return (
              <element.Component
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
  id: PropTypes.number.isRequired,
  inner: PropTypes.arrayOf(
    PropTypes.shape({
      Component: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      position: PositionPropTypes,
      value: PropTypes.any
    })
  ).isRequired,
  size: SizePropTypes.isRequired,
  testCase: PropTypes.array.isRequired
}

MainBrick._constants = {
  Slot: Constants.Slot,
  Brick: Constants.MainBrick
}

export default composeBrick(MainBrick)
