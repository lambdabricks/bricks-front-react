import React, { PropTypes, Component } from 'react'

import {
  PrimitivePropTypes
} from '../../propTypes'

import CustomValueInput from './CustomValueInput'
import TypesSelect from './TypesSelect'

const styles = {
  width: 300
}

export default class TestInputDetails extends Component {
  render() {
    const {
      changeTestInputType,
      changeTestInputValue,
      id,
      primitives,
      value,
      type,
      workspaceIndex
    } = this.props

    return (
      <div style={ styles} >
        <TypesSelect
          handleChange={ changeTestInputType }
          id={ id }
          primitives={ primitives }
          type={ type }
          workspaceIndex={ workspaceIndex }
        />
        { type != "null" &&
          <CustomValueInput
            handleChange={ changeTestInputValue }
            id={ id }
            primitives={ primitives }
            type={ type }
            value={ value }
            workspaceIndex={ workspaceIndex }
          />
        }
      </div>
    )
  }
}

TestInputDetails.propTypes = {
  changeTestInputType: PropTypes.func.isRequired,
  changeTestInputValue: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  primitives: PropTypes.objectOf(PrimitivePropTypes).isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  workspaceIndex: PropTypes.number
}
