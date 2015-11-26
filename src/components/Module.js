import React, { PropTypes, Component } from 'react'

export default class Module extends Component {
  render() {
    const { functions, name, onFunctionClick } = this.props
    return (
      <div>
        <li>
          { name }
        </li>
        <ul>
          { functions.map((libraryFunction) => {
              return (
                <li
                  key={ libraryFunction.id }
                  onClick={ () => onFunctionClick(libraryFunction.name) }
                >
                  { libraryFunction.label }
                </li>
              )
            }
          )}
        </ul>
      </div>
    )
  }
}

Module.propTypes = {
  name: PropTypes.string.isRequired,
  functions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onFunctionClick: PropTypes.func.isRequired
}
