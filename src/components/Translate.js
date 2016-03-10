import React, { PropTypes, Component } from 'react'

const translations = {
  en: {
    addUnitTest: 'Add unit test',
    constants: 'Constants',
    delete: 'Delete',
    deleteUnitTest: 'Delete unit test',
    empty: 'None',
    functions: 'Functions',
    library: 'Library',
    loading: 'Loading...',
    noValue: '<NONE>',
    primitives: 'Primitives',
    type: 'Type: ',
    value: 'Value: ',
    workspace: 'Workspace'
  }
}

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
        { translations[locale][message] }
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
