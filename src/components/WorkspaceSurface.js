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
      dragStarted,
      mainBrick,
      moveElement,
      removeSelectedElement,
      selectElementOrStopDrag,
      unitTest
    } = this.props
    const { width } = WorkspaceSurface._constants
    let handleMouseMove, handleMouseUp

    if(dragStarted) {
      handleMouseMove = (e) => {
        moveElement({ x: e.clientX, y: e.clientY })
      }
      handleMouseUp = (e) => {
        selectElementOrStopDrag({ x: e.clientX, y: e.clientY })
      }
    }
    else {
      handleMouseMove = () => {}
      handleMouseUp = () => {}
    }

    return (
      <div
       onMouseDown={ removeSelectedElement }
       onMouseMove={ handleMouseMove }
       onMouseUp={ handleMouseUp }
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
  dragStarted: PropTypes.bool.isRequired,
  mainBrick: PropTypes.object.isRequired,
  moveElement: PropTypes.func.isRequired,
  removeSelectedElement: PropTypes.func.isRequired,
  selectElementOrStopDrag: PropTypes.func.isRequired,
  unitTest: PropTypes.object.isRequired
}

WorkspaceSurface._constants = Constants.Surface

export default WorkspaceSurface
