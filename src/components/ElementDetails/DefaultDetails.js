import React, { PropTypes, Component } from 'react'

import Translate from '../Translate'

export default class DefaultDetails extends Component {
  render() {
    const {
      deleteElement,
      id
    } = this.props

    return (
      <Translate
        childProps={ { onClick: () => deleteElement(id) } }
        HtmlElement="button"
        message="delete"
      />
    )
  }
}

DefaultDetails.propTypes = {
  deleteElement: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}
