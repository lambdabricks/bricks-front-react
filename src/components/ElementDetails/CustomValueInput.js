import React, { PropTypes, Component } from 'react'

import Translate from '../Translate'

export default class CustomValueInput extends Component {
  constructor(props) {
    super(props)

    this.customInput = this.customInput.bind(this)
  }

  customInput() {
    const {
      handleChange,
      id,
      type,
      value,
      workspaceIndex
    } = this.props

    switch (type) {
      default:
        const inputType = type == "number" ? type : "text"
        return (
          <input
            onChange={ (e) => handleChange(id, e, workspaceIndex) }
            type={ inputType }
            value={ value }
          />
        )
    }
  }

  render() {
    return (
      <div>
        <Translate
          HtmlElement="label"
          message="value"
        />
        { this.customInput() }
      </div>
    )
  }
}

CustomValueInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  workspaceIndex: PropTypes.number
}
