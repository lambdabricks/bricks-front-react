import React, { PropTypes, Component } from 'react'
import ReactArt from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

const Surface = ReactArt.Surface

const styles = {
  float: 'left',
  marginLeft: '10px',
  backgroundColor: 'lightgray'
}

export default class WorkspaceSurface extends Component {
  render() {
    return (
      <Surface style={ styles } width={ 455 } height={ 500 }>
        <Rectangle
          width={ 50 }
          height={ 50 }
          stroke={ "green" }
          fill={ "blue" }
        />
      </Surface>
    )
  }
}
