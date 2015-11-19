import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchLibraryIfNeeded, invalidateLibrary } from '../actions'
import Library from '../components/Library'

const styles = {
  height: '100%'
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLibraryIfNeeded())
  }

  render() {
    const { library } = this.props
    return (
      <div style={ styles }>
        <Library { ...library } />
      </div>
    )
  }
}

App.propTypes = {
  library: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { library } = state

  return {
    library
  }
}

export default connect(mapStateToProps)(App)
