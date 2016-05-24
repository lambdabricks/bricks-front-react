import React, { PropTypes, Component } from 'react'

export default class Module extends Component {
  render() {
    const {
      functions,
      label,
      name,
      onFunctionClick
    } = this.props

    return (
      <div>
        <h4>
          { label }
        </h4>
        <ul>
          { functions.map((libraryFunction) => {
              return (
                <li
                  key={ libraryFunction.id }
                  onClick={ () => onFunctionClick(name, libraryFunction) }
                  title={ libraryFunction.title }
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  functions: PropTypes.arrayOf(
    PropTypes.shape({
      arity: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onFunctionClick: PropTypes.func.isRequired
}
