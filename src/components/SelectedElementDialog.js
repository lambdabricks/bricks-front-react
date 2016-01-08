import React, { PropTypes, Component } from 'react'

import {
  MAIN_BRICK
} from '../utils/componentNames'

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
  constructor(props) {
    super(props)

    this.renderElementDetails = this.renderElementDetails.bind(this)
  }

  renderElementDetails() {
    const {
      componentName,
      deleteElement,
      id
    } = this.props

    switch (componentName) {
      case MAIN_BRICK:
        return (
          <p>Main Brick</p>
        )
      default:
        return (
          <button
            onClick={ () => deleteElement(id) }
          >
            { translations['en'].delete }
          </button>
        )
    }
  }

  render() {
    const {
      mousePosition
    } = this.props

    const styles = Object.assign({}, baseStyles, {
      left: mousePosition.x,
      top: mousePosition.y
    })

    return (
      <div style={ styles }>
        { this.renderElementDetails() }
      </div>
    )
  }
}

SelectedElementDialog.propTypes = {
  componentName: PropTypes.string.isRequired,
  deleteElement: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  mousePosition: PositionPropTypes.isRequired
}
