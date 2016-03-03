import React, { PropTypes, Component } from 'react'

import CustomValueInput from './CustomValueInput'
import DialogButton from './DialogButton'

export default class PrimitiveDetails extends Component {
  render() {
    const {
      changePrimitiveValue,
      deleteElement,
      id,
      value,
      workspaceIndex
    } = this.props

    return (
      <div>
        <CustomValueInput
          handleChange={ changePrimitiveValue }
          id={ id }
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
  value: PropTypes.string,
  workspaceIndex: PropTypes.number
}
