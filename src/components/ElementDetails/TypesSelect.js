import React, { PropTypes, Component } from 'react'

import {
  PrimitivePropTypes
} from '../../propTypes'

import Translate from '../Translate'

export default class TypesSelect extends Component {
  render() {
    const {
      handleChange,
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
          onChange={ (e) => handleChange(id, e, workspaceIndex) }
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
}

TypesSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  primitives: PropTypes.arrayOf(PrimitivePropTypes).isRequired,
  type: PropTypes.string.isRequired,
  workspaceIndex: PropTypes.number
}
