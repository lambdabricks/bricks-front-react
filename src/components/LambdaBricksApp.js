import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Library from '../containers/Library'
import Workspace from '../containers/Workspace'

const styles = {
  height: '100%'
}

export default class LambdaBricksApp extends Component {
  render() {
    return (
      <div style={ styles }>
        <Library />
        <Workspace />
      </div>
    )
  }
}
