import React, { Component, PropTypes } from 'react'
import JoyRide from 'react-joyride'

import { getMessage } from '../utils/translationUtils'
import { getTutorialConfig } from './tutorialSteps'

import Library from '../containers/Library'
import Translate from './Translate'
import Workspace from '../containers/Workspace'

const styles = {
  display: 'flex'
}

const instructionStyles = {
  width: 300
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
          text: getMessage(props.locale, 'joyrideSteps.window'),
          selector: '#window',
          position: 'top-left'
        },
        {
          text: getMessage(props.locale, 'joyrideSteps.tutorial'),
          selector: '#tutorial',
          position: 'right'
        },
        {
          text: getMessage(props.locale, 'joyrideSteps.library'),
          selector: '#library',
          position: 'right'
        },
        {
          text: getMessage(props.locale, 'joyrideSteps.constants'),
          selector: '#constants',
          position: 'right'
        },
        {
          text: getMessage(props.locale, 'joyrideSteps.functions'),
          selector: '#functions',
          position: 'right'
        },
        {
          text: getMessage(props.locale, 'joyrideSteps.workspace'),
          selector: '#workspace',
          position: 'left'
        }
      ]
    }
  }

  componentDidMount() {
    this.setState({
      ready: getTutorialConfig(this.props.step).openSiteTourAtStart
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(!prevState.ready && this.state.ready) {
      this.refs.joyride.start(true)
    }
  }

  render() {
    const { locale, step } = this.props
    const nextStep = step + 1
    const tutorialConfig = getTutorialConfig(step)
    const state = this.state

    return (
      <div style={ styles } id="window">
        <div id="tutorial" style={ instructionStyles }>
          <Translate
            HtmlElement="h2"
            message="tutorial"
          />
          <h3>{ step }</h3>
          <div
            dangerouslySetInnerHTML={
              { __html: getMessage(locale, `tutorialSteps.${step}`) }
            }
          />
          { getMessage(locale, `tutorialSteps.${nextStep}`) && <Translate
            HtmlElement="a"
            childProps={ { href: `./?step=${nextStep}` } }
            message="next"
          /> }
        </div>
        <Library id={ tutorialConfig.libraryId } />
        <Workspace type={ tutorialConfig.worspaceType } />
        <JoyRide
          ref="joyride"
          debug={ false }
          steps={ state.joyrideSteps }
          type={ state.joyrideType }
          showSkipButton={ false }
          showStepsProgress={ state.showStepsProgress }
          showOverlay={ state.joyrideOverlay }
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
  step: PropTypes.number.isRequired
}
