import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Library from './Library'
import Workspace from './Workspace'

const styles = {
  height: '100%'
}

export default class LambdaBlocksApp extends Component {
  render() {
    return (
      <div style={ styles }>
        <Library />
        <Workspace />
      </div>
    )
  }
}
