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
      mainBrickId,
      unitTests
    } = this.props

    return (
      <div style={ styles }>
        <h2>Workspace</h2>
        { unitTests.map((unitTest, index) => {
            return (
              <WorkspaceSurface
                key={ index }
                mainBrickId={ mainBrickId }
                unitTest={ unitTest }
              />
            )
          })
        }
      </div>
    )
  }
}

Workspace.propTypes = {
  mainBrickId: PropTypes.number.isRequired,
  unitTests: PropTypes.array.isRequired
}
