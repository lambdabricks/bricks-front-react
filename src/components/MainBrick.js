import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import composeBrick from './composeBrick'
import Constants from './constants'
import { getComponent } from '../utils/ComponentFactory'
import { PositionPropTypes, SizePropTypes } from '../propTypes'
import TestInput from '../containers/TestInput'

class MainBrick extends Component {
  render() {
    const {
      handleClick,
      id,
      inner,
      size,
      testInputs,
      unitTest,
      workspaceIndex
    } = this.props
    const { Brick, Slot } = MainBrick._constants

    return (
      <Group y={ Slot.height } >
        { testInputs.map((element) => {
            return (
              <TestInput
                key={ element.id }
                workspaceIndex={ workspaceIndex }
                { ...element }
                { ...unitTest.values[element.id] }
              />
            )
          })
        }
        <Rectangle
          height={ size.height }
          width={ size.width }
          stroke={ Brick.strokeColor }
          fill={ Brick.fillColor }
          onClick={ (e) => handleClick(id, e, workspaceIndex) }
        />
        { inner.map((element) => {
            if(element) {
              const ReactComponent = getComponent(element.componentName)

              return (
                <ReactComponent
                  key={ element.id }
                  { ...element }
                  { ...unitTest.values[element.id] }
                />
              )
            }
          })
        }
      </Group>
    )
  }
}

MainBrick.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  inner: PropTypes.arrayOf(
    PropTypes.shape({
      componentName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      position: PositionPropTypes,
      value: PropTypes.any
    })
  ).isRequired,
  size: SizePropTypes.isRequired,
  testInputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  unitTest: PropTypes.object.isRequired,
  workspaceIndex: PropTypes.number.isRequired
}

MainBrick._constants = {
  Slot: Constants.Slot,
  Brick: Constants.MainBrick
}

export default composeBrick(MainBrick)
