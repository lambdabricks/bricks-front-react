import React, { Component, PropTypes } from 'react'

import { UNIT_TEST } from './constants'
import Library from '../containers/Library'
import Workspace from '../containers/Workspace'

const styles = {
  display: 'flex'
}

export default class LambdaBricksApp extends Component {
  render() {
    const { libraryId, workspaceType } = this.props

    return (
      <div style={ styles }>
        <Library id={ libraryId }/>
        <Workspace type={ workspaceType } />
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

LambdaBricksApp.defaultProps = {
  libraryId: '1',
  workspaceType: UNIT_TEST
}

LambdaBricksApp.PropTypes = {
  libraryId: PropTypes.string.isRequired,
  workspaceType: PropTypes.string.isRequired
}
