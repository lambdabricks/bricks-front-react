import React, { PropTypes, Component } from 'react'
// import WorkspaceActions from './WorkspaceActions'
import WorkspaceSurface from '../containers/WorkspaceSurface'

const styles = {
  float: 'left',
  height: '100%'
}

export default class Workspace extends Component {
  render() {
    const {
      mainBrickId
    } = this.props

    return (
      <div style={ styles }>
        <h2>Workspace</h2>
        <WorkspaceSurface
          mainBrickId={ mainBrickId }
        />
      </div>
    )
  }
}

Workspace.propTypes = {
  mainBrickId: PropTypes.number.isRequired
}
