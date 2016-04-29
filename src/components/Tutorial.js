import React, { Component, PropTypes } from 'react'
import JoyRide from 'react-joyride'

import Library from '../containers/Library'
import Translate from './Translate'
import Workspace from '../containers/Workspace'

const styles = {
  display: 'flex'
}

const instructionStyles = {
  width: 250
}

export default class Tutorial extends Component {
  constructor() {
    super()

    this.state = {
      joyrideOverlay: true,
      joyrideType: 'continuous',
      ready: false,
      showStepsProgress: true,
      steps: [
        {
          title: 'Instructions',
          text: 'Instructions description',
          selector: '#instructions',
          position: 'right'
        },
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
        },
        {
          title: 'Functions',
          text: 'Functions description',
          selector: '#functions',
          position: 'right'
        },
        {
          title: 'Workspace',
          text: 'Workspace description',
          selector: '#workspace',
          position: 'left'
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
        <div id="instructions" style={ instructionStyles }>
          <Translate
            HtmlElement="h2"
            message="instructions"
          />
        </div>
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

Tutorial.childContextTypes = {
  locale: PropTypes.string.isRequired
}
