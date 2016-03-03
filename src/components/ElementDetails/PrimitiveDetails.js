import React, { PropTypes, Component } from 'react'

import CustomValueInput from './CustomValueInput'
import DialogButton from './DialogButton'

export default class PrimitiveDetails extends Component {
  render() {
    const {
      changePrimitiveValue,
      deleteElement,
      id,
      type,
      value,
      workspaceIndex
    } = this.props

    return (
      <div>
        <CustomValueInput
          handleChange={ changePrimitiveValue }
          id={ id }
          type={ type }
          value={ value }
          workspaceIndex={ workspaceIndex }
        />
        <DialogButton
          onClick={ () => deleteElement(id) }
          message="delete"
        />
      </div>
    )
  }
}

PrimitiveDetails.propTypes = {
  deleteElement: PropTypes.func.isRequired,
  changePrimitiveValue: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  workspaceIndex: PropTypes.number
}
