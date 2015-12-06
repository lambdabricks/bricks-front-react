import React, { PropTypes, Component } from 'react'
import { Surface } from 'react-art'
import RootBrick from '../containers/RootBrick'

import { moveElement, stopDrag } from '../actions'

const styles = {
  float: 'left',
  backgroundColor: '#bfbfbf'
}

export default class WorkspaceSurface extends Component {
  render() {
    const { dispatch, dragState } = this.props
    let handleMouseMove, handleMouseUp

    if(dragState.dragStarted) {
      handleMouseMove = (e) => { dispatch(moveElement({ x: e.clientX, y: e.clientY })) }
      handleMouseUp = () => { dispatch(stopDrag()) }
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
        <Surface height={ 550 } style={ styles } width={ 500 } >
          <RootBrick { ...this.props } />
        </Surface>
      </div>
    )
  }
}
