import React, { PropTypes, Component } from 'react'

const styles = {
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  height: '50px',
  left: '0px',
  position: 'absolute',
  top: '0px',
  width: '50px'
}

export default class SelectedElementDialog extends Component {
  render() {
    return (
      <div style={ styles } />
    )
  }
}

SelectedElementDialog.propTypes = {
  elementId: PropTypes.number.isRequired
  // element: PropTypes.object.isRequired
}
