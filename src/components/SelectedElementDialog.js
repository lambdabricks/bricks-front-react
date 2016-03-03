import React, { PropTypes, Component } from 'react'

import {
  MAIN_BRICK,
  PRIMITIVE,
  TEST_INPUT
} from '../utils/componentNames'

import {
  PositionPropTypes,
  PrimitivePropTypes
} from '../propTypes'

import DefaultDetails from './ElementDetails/DefaultDetails'
import MainBrickDetails from './ElementDetails/MainBrickDetails'
import PrimitiveDetails from './ElementDetails/PrimitiveDetails'
import TestInputDetails from './ElementDetails/TestInputDetails'

import Translate from './Translate'

const baseStyles = {
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  padding: 6,
  position: 'absolute'
}

export default class SelectedElementDialog extends Component {
  constructor(props) {
    super(props)

    this.renderElementDetails = this.renderElementDetails.bind(this)
  }

  renderElementDetails() {
    const {
      componentName
    } = this.props

    switch (componentName) {
      case MAIN_BRICK:
        return (
          <MainBrickDetails { ...this.props } />
        )
      case PRIMITIVE:
        return (
          <PrimitiveDetails { ...this.props } />
        )
      case TEST_INPUT:
        return (
          <TestInputDetails { ...this.props } />
        )
      default:
        const {
          deleteElement,
          id
        } = this.props

        return (
          <DefaultDetails
            deleteElement={ deleteElement }
            id={ id }
          />
        )
    }
  }

  render() {
    const {
      mousePosition
    } = this.props

    const styles = Object.assign({}, baseStyles, {
      left: mousePosition.x,
      top: mousePosition.y
    })

    return (
      <div style={ styles }>
        { this.renderElementDetails() }
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
  primitives: PropTypes.arrayOf(PrimitivePropTypes).isRequired,
  workspaceIndex: PropTypes.number
}
