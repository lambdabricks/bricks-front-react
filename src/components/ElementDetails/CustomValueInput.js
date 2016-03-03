import React, { PropTypes, Component } from 'react'

import Translate from '../Translate'

export default class CustomValueInput extends Component {
  render() {
    const {
      handleChange,
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
}

CustomValueInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string,
  workspaceIndex: PropTypes.number
}
