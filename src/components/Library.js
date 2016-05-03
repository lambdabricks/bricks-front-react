import React, { PropTypes, Component } from 'react'

import Module from './Module'
import { PrimitivePropTypes } from '../propTypes'
import Translate from './Translate'

const styles = {
  width: '250px'
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
    const { fetchLibrary, id } = this.props
    fetchLibrary(id)
  }

  render() {
    const {
      isFetching,
      items,
      onFunctionClick,
      onPrimitiveClick
    } = this.props

    return (
      <div style={ styles } id="library">
        <Translate
          HtmlElement="h2"
          message="library"
        />
        { isFetching &&
          <Translate
            HtmlElement="h3"
            message="loading"
          />
        }
        { !isFetching && items.primitives &&
          <div>
            <div id="constants">
              <Translate
                HtmlElement="h3"
                message="constants"
              />
              <ul style={ ulStyles }>
                { Object.keys(items.primitives).map((key) => {
                    const primitive = items.primitives[key]

                    return (
                      <li
                        key={ primitive.id }
                        onClick={ () => onPrimitiveClick(primitive.type) }
                        style={ primitiveStyles }
                      >
                        {primitive.label}
                      </li>
                    )
                  }
                )}
              </ul>
            </div>
            <div id="functions">
              <Translate
                HtmlElement="h3"
                message="functions"
              />
              <ul>
                { items.modules.map((module) =>
                  <Module
                    key={ module.name }
                    onFunctionClick={ onFunctionClick }
                    { ...module }
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
  id: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.shape({
    modules: PropTypes.array,
    primitives: PropTypes.objectOf(PrimitivePropTypes)
  }).isRequired,
  onFunctionClick: PropTypes.func.isRequired,
  onPrimitiveClick: PropTypes.func.isRequired
}
