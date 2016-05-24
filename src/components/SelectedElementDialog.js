import React, { PropTypes, Component } from 'react'

import {
  getDetailsComponent
} from './ElementDetails/ElementDetailsFactory'

import {
  PositionPropTypes,
  PrimitivePropTypes
} from '../propTypes'

export default class SelectedElementDialog extends Component {
  render() {
    const {
      closeDialog,
      componentName,
      mousePosition
    } = this.props

    const ReactComponent = getDetailsComponent(componentName)

    return (
      <div
        className="SelectedElementDialog"
        style={
          {
            left: mousePosition.x,
            top: mousePosition.y
          }
        }
      >
        <a
          className="closeBtn"
          href="#"
          onClick={ closeDialog }
        >
          x
        </a>
        <ReactComponent { ...this.props } />
      </div>
    )
  }
}

SelectedElementDialog.propTypes = {
  addUnitTest: PropTypes.func.isRequired,
  changePrimitiveValue: PropTypes.func.isRequired,
  changeTestNodeType: PropTypes.func.isRequired,
  changeTestNodeValue: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
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
