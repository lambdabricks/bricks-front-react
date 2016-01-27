import React, { PropTypes, Component } from 'react'
import { Surface } from 'react-art'

import Constants from './constants'
import MainBrick from '../containers/MainBrick'

const workspaceSurfaceStyles = {
  float: 'left',
  marginRight: '10px'
}

const surfaceStyles = {
  backgroundColor: '#D8D8D8'
}

class WorkspaceSurface extends Component {
  render() {
    const {
      mainBrick,
      unitTest
    } = this.props
    const { width } = WorkspaceSurface._constants

    return (
      <div
       style={ workspaceSurfaceStyles }
      >
        <Surface
          height={ 600 }
          style={ surfaceStyles }
          width={ width }
        >
          <MainBrick
            unitTest={ unitTest }
            { ...mainBrick }
          />
        </Surface>
      </div>
    )
  }
}

WorkspaceSurface.propTypes = {
  mainBrick: PropTypes.object.isRequired,
  unitTest: PropTypes.object.isRequired
}

WorkspaceSurface._constants = Constants.Surface

export default WorkspaceSurface
