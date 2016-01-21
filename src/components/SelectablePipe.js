import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'

import { Pipe as PipeConstants } from './constants'
import { getFillColor } from '../utils'
import Pipe from '../containers/Pipe'

class SelectablePipe extends Component {
  render() {
    const {
      handleClick,
      id,
      input,
      output,
      type,
      value
    } = this.props

    const {
      strokeColor
    } = SelectablePipe._constants

    const fillColor = getFillColor(type, value)

    return (
      <Group
        onClick={ (e) => handleClick(id, e) }
      >
        <Pipe
          fillColor={ fillColor }
          input={ input }
          output={ output }
          strokeColor={ strokeColor }
        />
      </Group>
    )
  }
}

const PipeEndPropTypes = PropTypes.shape({
  elementId: PropTypes.number.isRequired,
  slotId: PropTypes.number.isRequired
})

SelectablePipe.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  input: PipeEndPropTypes.isRequired,
  output: PipeEndPropTypes.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

SelectablePipe._constants = PipeConstants

export default SelectablePipe
