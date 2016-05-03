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

const joyrideSteps = {
  en: {
    window: 'The window has 3 sections.',
    tutorial:
      '<b>1. Tutorial</b>\
      <p>The instructions for following the tutorial</p>',
    library:
      '<b>2. Library</b>\
      <p>The library has 2 components: <ul><li>Constants</li><li>Functions</li><p>',
    constants:
      '<p>Clicking on "Number" will add a ballon to the workspace.</p>\
      <p>This ballon can hold a number.</p>',
    functions: 'Clicking on a math operation will add a brick to the workspace.',
    workspace:
      '<b>3. Workspace</b>\
      <p>The workspace is the playground where you can connect ballons and bricks.</p>\
      <p>Clicking on an element will show a dialog where you can change its properties.</p>\
      <p>Move the elements by drag & drop.</p>\
      <p>The elements are connected through pipes. To create a pipe click on an\
      input and an output slot.'
  }
}

export default class Tutorial extends Component {
  constructor(props) {
    super(props)

    this.state = {
      joyrideOverlay: true,
      joyrideType: 'continuous',
      ready: false,
      showStepsProgress: false,
      joyrideSteps: [
        {
          text: joyrideSteps[props.locale]['window'],
          selector: '#window',
          position: 'top-left'
        },
        {
          text: joyrideSteps[props.locale]['tutorial'],
          selector: '#tutorial',
          position: 'right'
        },
        {
          text: joyrideSteps[props.locale]['library'],
          selector: '#library',
          position: 'right'
        },
        {
          text: joyrideSteps[props.locale]['constants'],
          selector: '#constants',
          position: 'right'
        },
        {
          text: joyrideSteps[props.locale]['functions'],
          selector: '#functions',
          position: 'right'
        },
        {
          text: joyrideSteps[props.locale]['workspace'],
          selector: '#workspace',
          position: 'left'
        }
      ]
    }
  }

  componentDidMount() {
    this.setState({
      ready: this.props.openSiteTourAtStart
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
      <div style={ styles } id="window">
        <div id="tutorial" style={ instructionStyles }>
          <Translate
            HtmlElement="h2"
            message="tutorial"
          />
        </div>
        <Library />
        <Workspace />
        <JoyRide
          ref="joyride"
          debug={ false }
          steps={ state.joyrideSteps }
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
      locale: this.props.locale
    }
  }
}

Tutorial.childContextTypes = {
  locale: PropTypes.string.isRequired
}

Tutorial.PropTypes = {
  locale: PropTypes.string.isRequired,
  openSiteTourAtStart: PropTypes.bool.isRequired
}
