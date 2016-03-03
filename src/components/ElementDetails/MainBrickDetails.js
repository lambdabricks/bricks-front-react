import React, { PropTypes, Component } from 'react'

import DialogButton from './DialogButton'

export default class MainBrickDetails extends Component {
  render() {
    const {
      addUnitTest
    } = this.props

    return (
      <DialogButton
        onClick={ addUnitTest }
        message="addUnitTest"
      />
    )
  }
}

MainBrickDetails.propTypes = {
  addUnitTest: PropTypes.func.isRequired
}
