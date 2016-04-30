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
      showStepsProgress: false,
      steps: [
        {
          text: 'Here are the instructions for following the tutorial',
          selector: '#instructions',
          position: 'right'
        },
        {
          text: 'The library has 2 sections: <ul><li>Constants</li><li>Functions</li>',
          selector: '#library',
          position: 'right'
        },
        {
          text: 'Clicking on "Number" will add a ballon to the workspace.\
            This ballon can hold a number.',
          selector: '#constants',
          position: 'right'
        },
        {
          text: 'Clicking on a math operation will add a brick to the workspace.',
          selector: '#functions',
          position: 'right'
        },
        {
          text: '<p>The workspace is the playground where you can connect ballons and bricks.</p>\
            <p>Clicking on an element will show a dialog where you can change its properties.</p>\
            <p>Move the elements by drag & drop.</p>',
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
