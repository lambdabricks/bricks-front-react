import React, { PropTypes, Component } from 'react'

import { PositionPropTypes } from '../propTypes'

const baseStyles = {
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  height: '50px',
  position: 'absolute',
  width: '50px'
}

export default class SelectedElementDialog extends Component {
  render() {
    const { mousePosition } = this.props
    const styles = Object.assign({}, baseStyles, {
      left: mousePosition.x,
      top: mousePosition.y
    })

    return (
      <div style={ styles } />
    )
  }
}

SelectedElementDialog.propTypes = {
  elementId: PropTypes.number.isRequired,
  mousePosition: PositionPropTypes.isRequired
  // element: PropTypes.object.isRequired
}
