import React, { PropTypes, Component } from 'react'
import { Surface } from 'react-art'
import Brick from './Brick'

const styles = {
  float: 'left',
  backgroundColor: '#bfbfbf'
}

export default class WorkspaceSurface extends Component {
  render() {
    const { rootBrick } = this.props

    return (
      <Surface height={ 550 } style={ styles } width={ 500 }>
        <Brick { ...rootBrick } />
      </Surface>
    )
  }
}
