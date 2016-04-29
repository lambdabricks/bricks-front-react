import React, { Component, PropTypes } from 'react'
import JoyRide from 'react-joyride'

import Library from '../containers/Library'
import Workspace from '../containers/Workspace'

const styles = {
  display: 'flex'
}

export default class LambdaBricksApp extends Component {
  constructor() {
    super()

    this.state = {
      joyrideOverlay: true,
      joyrideType: 'continuous',
      ready: false,
      showStepsProgress: true,
      steps: [
        {
          title: 'Library',
          text: 'Library description',
          selector: '#library',
          position: 'right'
        },
        {
          title: 'Constants',
          text: 'Constants description',
          selector: '#constants',
          position: 'right'
        }
      ]
    }
  }

  componentDidMount() {
    this.setState({
      ready: true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(!prevState.ready && this.state.ready) {
      this.refs.joyride.start(true)
    }
  }

  render() {
    const state = this.state

    return (
      <div style={ styles }>
        <Library />
        <Workspace />
        <JoyRide
          ref="joyride"
          debug={ false }
          steps={ state.steps }
          type={ state.joyrideType }
          showSkipButton={ false }
          showStepsProgress={ state.showStepsProgress }
          showOverlay={ state.showOverlay }
        />
      </div>
    )
  }

  getChildContext() {
    return {
      locale: 'en'
    }
  }
}

LambdaBricksApp.childContextTypes = {
  locale: PropTypes.string.isRequired
}
