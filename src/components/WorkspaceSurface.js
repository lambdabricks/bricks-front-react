import React, { PropTypes, Component } from 'react'
import { Surface } from 'react-art'

import { getConstant } from './constants'
import { SURFACE } from '../utils/componentNames'

import MainBrick from '../containers/MainBrick'
import TestResult from '../components/TestResult'

const workspaceSurfaceStyles = {
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

    return (
      <div
       style={ workspaceSurfaceStyles }
      >
        <Surface
          height={ 600 }
          style={ surfaceStyles }
          width={ getConstant(SURFACE, 'width') }
        >
          <TestResult
            mainBrick={ mainBrick }
            unitTest={ unitTest }
          />
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

export default WorkspaceSurface
