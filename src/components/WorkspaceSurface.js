import React, { PropTypes, Component } from 'react'
import { Surface } from 'react-art'
import RootBrick from './RootBrick'

const styles = {
  float: 'left',
  backgroundColor: '#bfbfbf'
}

export default class WorkspaceSurface extends Component {
  render() {
    return (
      <Surface height={ 550 } style={ styles } width={ 500 }>
        <RootBrick { ...this.props } />
      </Surface>
    )
  }
}
