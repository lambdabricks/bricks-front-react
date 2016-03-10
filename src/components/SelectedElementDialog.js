import React, { PropTypes, Component } from 'react'

import {
  getDetailsComponent
} from './ElementDetails/ElementDetailsFactory'

import {
  PositionPropTypes,
  PrimitivePropTypes
} from '../propTypes'

const baseStyles = {
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  padding: 6,
  position: 'absolute'
}

export default class SelectedElementDialog extends Component {
  render() {
    const {
      componentName,
      mousePosition
    } = this.props

    const styles = Object.assign({}, baseStyles, {
      left: mousePosition.x,
      top: mousePosition.y
    })

    const ReactComponent = getDetailsComponent(componentName)

    return (
      <div style={ styles }>
        <ReactComponent { ...this.props } />
      </div>
    )
  }
}

SelectedElementDialog.propTypes = {
  addUnitTest: PropTypes.func.isRequired,
  changePrimitiveValue: PropTypes.func.isRequired,
  changeTestInputType: PropTypes.func.isRequired,
  changeTestInputValue: PropTypes.func.isRequired,
  componentName: PropTypes.string.isRequired,
  deleteElement: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  mousePosition: PositionPropTypes.isRequired,
  primitives: PropTypes.objectOf(PrimitivePropTypes).isRequired,
  value: PropTypes.string,
  totalUnitTests: PropTypes.number.isRequired,
  type: PropTypes.string,
  workspaceIndex: PropTypes.number
}
