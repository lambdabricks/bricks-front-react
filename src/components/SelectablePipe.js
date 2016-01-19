import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'

import Pipe from '../containers/Pipe'

class SelectablePipe extends Component {
  render() {
    const {
      handleClick,
      id,
      input,
      output,
      strokeColor,
      type
    } = this.props

    return (
      <Group
        onClick={ (e) => handleClick(id, e) }
      >
        <Pipe
          input={ input }
          output={ output }
          strokeColor={ strokeColor }
          type={ type }
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
  strokeColor: PropTypes.string,
  type: PropTypes.string.isRequired
}

export default SelectablePipe
