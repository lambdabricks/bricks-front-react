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
      dragState,
      mainBrick,
      moveElement,
      stopDrag,
      unitTests
    } = this.props
    const { width } = WorkspaceSurface._constants
    let handleMouseMove, handleMouseUp

    if(dragState.dragStarted) {
      handleMouseMove = (e) => {
        moveElement({ x: e.clientX, y: e.clientY })
      }
      handleMouseUp = stopDrag
    }
    else {
      handleMouseMove = () => {}
      handleMouseUp = () => {}
    }

    return (
      <div>
        { unitTests.map((unitTest, index) =>
          <div
           key={ index }
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
        )}
      </div>
    )
  }
}

WorkspaceSurface.propTypes = {
  dragState: PropTypes.shape({
    dragStarted: PropTypes.bool.isRequired
  }).isRequired,
  mainBrick: PropTypes.object.isRequired,
  mainBrickId: PropTypes.number.isRequired,
  moveElement: PropTypes.func.isRequired,
  stopDrag: PropTypes.func.isRequired,
  unitTests: PropTypes.array.isRequired
}

WorkspaceSurface._constants = Constants.Surface

export default WorkspaceSurface
