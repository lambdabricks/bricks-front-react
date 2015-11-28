import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'

import Brick from './Brick'
import composeBrick from './composeBrick'
import Constants from './constants'
import { PositionPropTypes } from '../propTypes'
import Primitive from './Primitive'

class RootBrick extends Component {
  render() {
    const { inner } = this.props

    return (
      <Group>
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
  inner: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      position: PositionPropTypes.isRequired,
      type: PropTypes.func.isRequired,
      value: PropTypes.any
    })
  ).isRequired,
}

export default composeBrick(
  RootBrick,
  {
    Slot: Constants.Slot,
    Brick: Constants.RootBrick
  }
)
