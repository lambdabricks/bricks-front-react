import React, { PropTypes, Component } from 'react'
import Module from './Module'

export default class Library extends Component {
  render() {
    const { isFetching, items } = this.props

    return (
      <div>
        <h2>Library</h2>
        { isFetching &&
          <h3>Loading...</h3>
        }
        { !isFetching && items.primitives &&
          <div>
            <div>
              <h3>Primitives</h3>
              <ul>
                { items.primitives.map((primitive, i) =>
                  <li key={i}>{primitive.name}</li>
                )}
              </ul>
            </div>
            <div>
              <h3>Functions</h3>
              <ul>
                { items.modules.map((module, i) =>
                  <Module key={i} name={module.name} functions={module.functions} />
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
        name: PropTypes.string.isRequired
      })
    )
  }).isRequired
}
