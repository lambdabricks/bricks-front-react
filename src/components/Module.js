import React, { PropTypes, Component } from 'react'

export default class Module extends Component {
  render() {
    return (
      <div>
        <li>{this.props.name}</li>
        <ul>
          { this.props.functions.map((namedFunction, i) =>
            <li key={namedFunction.id}>{namedFunction.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

Module.propTypes = {
  name: PropTypes.string.isRequired,
  functions: PropTypes.array.isRequired
}
