import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import composeBrick from './composeBrick'
import Constants from './constants'
import { getComponent } from '../utils/ComponentFactory'
import { PositionPropTypes, SizePropTypes } from '../propTypes'
import TestInput from '../containers/TestInput'
import TestOutput from '../containers/TestOutput'

class MainBrick extends Component {
  render() {
    const {
      handleClick,
      id,
      inner,
      selectedSlots,
      size,
      testInputs,
      testOutputs,
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
                environment={ unitTest.values[element.id] || {} }
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
          onClick={ (e) => handleClick(id, e, workspaceIndex) }
        />
        { inner.map((element) => {
            const ReactComponent = getComponent(element.componentName)
            const valueId = element.valueId || (element.outputSlots &&
              Object.keys(element.outputSlots)[0])

            return (
              <ReactComponent
                key={ element.id }
                selectedSlots={ selectedSlots }
                environment={
                  {
                    ...unitTest.values[element.id],
                    ...unitTest.values[valueId]
                  }
                }
                { ...element }
                { ...unitTest.values[element.id] }
                { ...unitTest.values[element.valueId] }
              />
            )
          })
        }
        { testOutputs.map((element) => {
            return (
              <TestOutput
                key={ element.id }
                workspaceIndex={ workspaceIndex }
                environment={ unitTest.values[element.id] || {} }
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
  selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: SizePropTypes.isRequired,
  testInputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  testOutputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  unitTest: PropTypes.object.isRequired,
  workspaceIndex: PropTypes.number.isRequired
}

MainBrick._constants = {
  Slot: Constants.Slot,
  Brick: Constants.MainBrick
}

export default composeBrick(MainBrick)
