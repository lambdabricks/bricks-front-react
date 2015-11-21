import React, { PropTypes, Component } from 'react'
import { Surface } from 'react-art'
import Brick from './Brick'

const styles = {
  float: 'left',
  marginLeft: '10px',
  backgroundColor: '#bfbfbf'
}

export default class WorkspaceSurface extends Component {
  render() {
    return (
      <Surface height={ 550 } style={ styles } width={ 455 }>
        <Brick
          inputSlots={ [{ id: 1 }, { id: 2 }] }
          outputSlots={ [{ id: 3 }] }
          position={{ x: 50, y: 50 }}
          size={{ height: 400, width: 350 }}
        />
      </Surface>
    )
  }
}
