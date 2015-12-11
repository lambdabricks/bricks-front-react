import React, { PropTypes, Component } from 'react'
import { Surface } from 'react-art'

import Constants from './constants'
import MainBrick from '../containers/MainBrick'

const styles = {
  float: 'left',
  backgroundColor: '#bfbfbf'
}

class WorkspaceSurface extends Component {
  render() {
    const {
      dragState,
      mainBrick,
      moveElement,
      stopDrag
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
      <div
       onMouseMove={ handleMouseMove }
       onMouseUp={ handleMouseUp }
      >
        <Surface
          height={ 550 }
          style={ styles }
          width={ width }
        >
          <MainBrick { ...mainBrick } />
        </Surface>
      </div>
    )
  }
}

WorkspaceSurface.propTypes = {
  dragState: PropTypes.shape({
    dragStarted: PropTypes.bool.isRequired
  }).isRequired,
  mainBrick: PropTypes.object.isRequired,
  moveElement: PropTypes.func.isRequired,
  stopDrag: PropTypes.func.isRequired
}

WorkspaceSurface._constants = Constants.Surface

export default WorkspaceSurface
