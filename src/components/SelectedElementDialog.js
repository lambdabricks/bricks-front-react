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
import Translate from './Translate'

const baseStyles = {
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  padding: 6,
  position: 'absolute'
}

export default class SelectedElementDialog extends Component {
  constructor(props) {
    super(props)

    this.renderDeleteElementButton = this.renderDeleteElementButton.bind(this)
    this.renderElementDetails = this.renderElementDetails.bind(this)
    this.renderPrimitiveValueInput = this.renderPrimitiveValueInput.bind(this)
    this.renderTestInputTypesSelect = this.renderTestInputTypesSelect.bind(this)
    this.renderTestInputValueInput = this.renderTestInputValueInput.bind(this)
    this.renderValueInput = this.renderValueInput.bind(this)
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
          <Translate
            childProps={ { onClick: addUnitTest } }
            HtmlElement="button"
            message="addUnitTest"
          />
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
            { this.renderTestInputTypesSelect() }
            { this.renderTestInputValueInput() }
          </div>
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

  renderDeleteElementButton() {
    const {
      deleteElement,
      id
    } = this.props

    return (
      <Translate
        childProps={ { onClick: () => deleteElement(id) } }
        HtmlElement="button"
        message="delete"
      />
    )
  }

  renderTestInputTypesSelect() {
    const {
      changeTestInputType,
      id,
      primitives,
      type,
      workspaceIndex
    } = this.props

    return (
      <div>
        <Translate
          HtmlElement="label"
          message="type"
        />
        <select
          value={ type }
          onChange={ (e) => changeTestInputType(id, e, workspaceIndex) }
        >
          { /* TestInput 'type' will be 'null' by default */ }
          <Translate
            childProps={ { disabled: true, value: "null" } }
            HtmlElement="option"
            message="empty"
          />

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
    const { changePrimitiveValue } = this.props

    return this.renderValueInput(changePrimitiveValue)
  }

  renderTestInputValueInput() {
    const { changeTestInputValue } = this.props

    return this.renderValueInput(changeTestInputValue)
  }

  renderValueInput(handleChange) {
    const {
      id,
      value,
      workspaceIndex
    } = this.props

    return (
      <div>
        <Translate
          HtmlElement="label"
          message="value"
        />
        <input
          value={ value }
          onChange={ (e) => handleChange(id, e, workspaceIndex) }
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
