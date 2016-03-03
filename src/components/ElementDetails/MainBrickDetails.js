import React, { PropTypes, Component } from 'react'

import Translate from '../Translate'

export default class MainBrickDetails extends Component {
  render() {
    const {
      addUnitTest
    } = this.props

    return (
      <Translate
        childProps={ { onClick: addUnitTest } }
        HtmlElement="button"
        message="addUnitTest"
      />
    )
  }
}

MainBrickDetails.propTypes = {
  addUnitTest: PropTypes.func.isRequired
}
