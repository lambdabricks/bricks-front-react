import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'

import Pipe from '../containers/Pipe'

class ClickablePipe extends Component {
  render() {
    const {
      id,
      input,
      output,
      strokeColor,
      type
    } = this.props

    return (
      <Group
        onClick={ () => console.log('click', id) }
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

ClickablePipe.propTypes = {
  id: PropTypes.number.isRequired,
  input: PipeEndPropTypes.isRequired,
  output: PipeEndPropTypes.isRequired,
  strokeColor: PropTypes.string,
  type: PropTypes.string
}

export default ClickablePipe
