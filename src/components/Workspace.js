import React, { PropTypes, Component } from 'react'
// import WorkspaceActions from './WorkspaceActions'
import WorkspaceSurface from '../containers/WorkspaceSurface'

const styles = {
  float: 'left',
  height: '100%',
  width: '500px'
}

export default class Workspace extends Component {
  render() {
    const { actions } = this.props

    return (
      <div style={ styles }>
        <h2>Workspace</h2>
        <WorkspaceSurface />
      </div>
    )
  }
}
