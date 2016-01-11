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

const baseStyles = {
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  padding: 6,
  position: 'absolute'
}

const translations = {
  en: {
    addUnitTest: 'Add unit test',
    delete: 'Delete',
    empty: 'None',
    type: 'Type: ',
    value: 'Value: '
  }
}

export default class SelectedElementDialog extends Component {
  constructor(props) {
    super(props)

    this.tr = this.tr.bind(this)

    this.renderDeleteElementButton = this.renderDeleteElementButton.bind(this)
    this.renderElementDetails = this.renderElementDetails.bind(this)
    this.renderPrimitiveTypesSelect = this.renderPrimitiveTypesSelect.bind(this)
    this.renderPrimitiveValueInput = this.renderPrimitiveValueInput.bind(this)
  }

  renderElementDetails() {
    const {
      componentName
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
            { this.tr('addUnitTest') }
          </button>
        )
      case PRIMITIVE:
        return (
          <div>
            { this.renderPrimitiveValueInput() }
            { this.renderDeleteElementButton() }
          </div>
        )
      case TEST_INPUT:
        return (
          <div>
            { this.renderPrimitiveTypesSelect() }
            { this.renderPrimitiveValueInput() }
          </div>
        )
      default:
        return this.renderDeleteElementButton()
    }
  }

  renderDeleteElementButton() {
    const {
      deleteElement,
      id
    } = this.props

    return (
      <button
        onClick={ () => deleteElement(id) }
      >
        { this.tr('delete') }
      </button>
    )
  }

  renderPrimitiveTypesSelect() {
    const {
      changePrimitiveType,
      id,
      primitives,
      type
    } = this.props

    return (
      <div>
        <label>
          { this.tr('type') }
        </label>
        <select
          value={ type }
          onChange={ (e) => changePrimitiveType(id, e) }
        >
          { /* TestInput 'type' will be 'null' by default */ }
          <option
            disabled
            value="null"
          >
            { this.tr('empty') }
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
      </div>
    )
  }

  renderPrimitiveValueInput() {
    const {
      changePrimitiveValue,
      id,
      value
    } = this.props

    return (
      <div>
        <label>
          { this.tr('value') }
        </label>
        <input
          value={ value }
          onChange={ (e) => changePrimitiveValue(id, e) }
        />
      </div>
    )
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

  tr(key) {
    return translations[this.context.naturalLanguage][key]
  }
}

SelectedElementDialog.contextTypes = {
  naturalLanguage: PropTypes.string.isRequired
}

SelectedElementDialog.propTypes = {
  addUnitTest: PropTypes.func.isRequired,
  changePrimitiveType: PropTypes.func.isRequired,
  changePrimitiveValue: PropTypes.func.isRequired,
  componentName: PropTypes.string.isRequired,
  deleteElement: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  mousePosition: PositionPropTypes.isRequired,
  primitives: PropTypes.arrayOf(PrimitivePropTypes).isRequired
}
