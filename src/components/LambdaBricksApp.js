import React, { Component, PropTypes } from 'react'

import Library from '../containers/Library'
import Workspace from '../containers/Workspace'

const styles = {
  display: 'flex'
}

export default class LambdaBricksApp extends Component {
  render() {
    return (
      <div style={ styles }>
        <Library id={ this.props.libraryId }/>
        <Workspace />
      </div>
    )
  }

  getChildContext() {
    return {
      locale: 'en'
    }
  }
}

LambdaBricksApp.childContextTypes = {
  locale: PropTypes.string.isRequired
}

LambdaBricksApp.PropTypes = {
  libraryId: PropTypes.string.isRequired
}
