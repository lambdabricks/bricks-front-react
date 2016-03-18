import React, { PropTypes, Component } from 'react'

import { getMessage } from '../utils/translationUtils'

export default class Translate extends Component {
  render() {
    const {
      childProps,
      HtmlElement,
      message
    } = this.props
    const { locale } = this.context

    return (
      <HtmlElement { ...childProps } >
        { getMessage(locale, message) }
      </HtmlElement>
    )
  }
}

Translate.contextTypes = {
  locale: PropTypes.string.isRequired
}

Translate.propTypes = {
  childProps: PropTypes.object,
  HtmlElement: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}
