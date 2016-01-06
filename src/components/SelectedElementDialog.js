import React, { PropTypes, Component } from 'react'

import { PositionPropTypes } from '../propTypes'

const baseStyles = {
  backgroundColor: 'rgba(0, 0, 255, 0.5)',
  padding: 6,
  position: 'absolute'
}

const translations = {
  en: {
    delete: 'Delete'
  }
}

export default class SelectedElementDialog extends Component {
  render() {
    const {
      handleClick,
      id,
      mousePosition
    } = this.props

    const styles = Object.assign({}, baseStyles, {
      left: mousePosition.x,
      top: mousePosition.y
    })

    return (
      <div style={ styles }>
        <button
          onClick={ () => handleClick(id) }
        >
          { translations['en'].delete }
        </button>
      </div>
    )
  }
}

SelectedElementDialog.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  mousePosition: PositionPropTypes.isRequired
}
