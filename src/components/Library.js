import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Module from './Module'

const styles = {
  float: 'left',
  height: '100%',
  width: '250px',
  overflow: 'auto'
}

const ulStyles = {
  display: 'inline-block',
  margin: 0
}

const primitiveStyles = {
  cursor: 'pointer'
}

export default class Library extends Component {
  componentDidMount() {
    const { fetchLibrary } = this.props
    fetchLibrary()
  }

  render() {
    const {
      isFetching,
      items,
      onFunctionClick,
      onPrimitiveClick
    } = this.props

    return (
      <div style={ styles }>
        <h2>Library</h2>
        { isFetching &&
          <h3>Loading...</h3>
        }
        { !isFetching && items.primitives &&
          <div>
            <div>
              <h3>Primitives</h3>
              <ul style={ ulStyles }>
                { items.primitives.map((primitive) =>
                  <li
                    key={ primitive.id }
                    onClick={ () => onPrimitiveClick(primitive.name) }
                    style={ primitiveStyles }
                  >
                    {primitive.label}
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h3>Functions</h3>
              <ul>
                { items.modules.map((module, i) =>
                  <Module
                    key={ i }
                    name={ module.name }
                    functions={ module.functions }
                    onFunctionClick={ onFunctionClick }
                  />
                )}
              </ul>
            </div>
          </div>
        }
      </div>
    )
  }
}

Library.propTypes = {
  fetchLibrary: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.shape({
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        functions: PropTypes.array.isRequired
      })
    ),
    primitives: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  onFunctionClick: PropTypes.func.isRequired,
  onPrimitiveClick: PropTypes.func.isRequired
}
