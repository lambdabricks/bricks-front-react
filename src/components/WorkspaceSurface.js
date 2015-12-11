import React, { PropTypes, Component } from 'react'
import { Surface } from 'react-art'

import Constants from './constants'
import MainBrick from '../containers/MainBrick'
import { moveElement, stopDrag } from '../actions'

const styles = {
  float: 'left',
  backgroundColor: '#bfbfbf'
}

class WorkspaceSurface extends Component {
  render() {
    const { dispatch, dragState, mainBrick } = this.props
    const { width } = WorkspaceSurface._constants
    let handleMouseMove, handleMouseUp

    if(dragState.dragStarted) {
      handleMouseMove = (e) => {
        dispatch(moveElement({ x: e.clientX, y: e.clientY }))
      }
      handleMouseUp = () => {
        dispatch(stopDrag())
      }
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

WorkspaceSurface._constants = Constants.Surface

export default WorkspaceSurface
