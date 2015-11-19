import React, { PropTypes, Component } from 'react'
import WorkspaceActions from './WorkspaceActions'

const styles = {
  float: 'left',
  height: '100%',
  width: '500px'
}

export default class Workspace extends Component {
  render() {
    return (
      <div style={ styles }>
        <h2>Workspace</h2>
        <WorkspaceActions actions={ [] } />
      </div>
    )
  }
}
