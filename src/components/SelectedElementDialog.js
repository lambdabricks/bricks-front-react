import React, { PropTypes, Component } from 'react'

import {
  MAIN_BRICK,
  TEST_INPUT
} from '../utils/componentNames'

import {
  PositionPropTypes,
  PrimitivePropTypes
} from '../propTypes'

const baseStyles = {
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  padding: 6,
  position: 'absolute'
}

const translations = {
  en: {
    addUnitTest: 'Add unit test',
    delete: 'Delete'
  }
}

export default class SelectedElementDialog extends Component {
  constructor(props) {
    super(props)

    this.renderElementDetails = this.renderElementDetails.bind(this)
  }

  renderElementDetails() {
    const {
      componentName,
      id
    } = this.props

    switch (componentName) {
      case MAIN_BRICK:
        const {
          addUnitTest
        } = this.props

        return (
          <button
            onClick={ addUnitTest }
          >
            { translations['en'].addUnitTest }
          </button>
        )
      case TEST_INPUT:
        const {
          changePrimitiveType,
          primitives,
          type
        } = this.props

        return (
          <select
            value={ type }
            onChange={ (e) => changePrimitiveType(id, e) }
          >
            { /* TestInput 'type' will be 'null' by default */ }
            <option
              disabled
              value="null"
            >
              None
            </option>

            { primitives.map((primitive) =>
                <option
                  key={ primitive.id }
                  value={ primitive.type }
                >
                  { primitive.label }
                </option>
            ) }
          </select>
        )
      default:
        const {
          deleteElement
        } = this.props

        return (
          <button
            onClick={ () => deleteElement(id) }
          >
            { translations['en'].delete }
          </button>
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
  changePrimitiveType: PropTypes.func.isRequired,
  componentName: PropTypes.string.isRequired,
  deleteElement: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  mousePosition: PositionPropTypes.isRequired,
  primitives: PropTypes.arrayOf(PrimitivePropTypes).isRequired
}
