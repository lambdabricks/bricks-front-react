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
      index,
      mainBrick,
      selectedSlots,
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
            selectedSlots={ selectedSlots }
            unitTest={ unitTest }
            workspaceIndex={ index }
            { ...mainBrick }
          />
        </Surface>
      </div>
    )
  }
}

WorkspaceSurface.propTypes = {
  index: PropTypes.number.isRequired,
  mainBrick: PropTypes.object.isRequired,
  selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
  unitTest: PropTypes.object.isRequired
}

WorkspaceSurface._constants = Constants.Surface

export default WorkspaceSurface
